// Package store reads and appends the share record JSONL file.
package store

import (
	"bufio"
	"bytes"
	"encoding/json"
	"errors"
	"fmt"
	"os"
	"path/filepath"
	"sync"

	"github.com/gookit/goutil/fsutil"
	"github.com/inhere/blogshare/internal/model"
)

// Store is an append-only event log backed by one JSONL file.
//
// Writes are guarded by a mutex and always append (O_APPEND), so concurrent
// CLI/web reads never see a partially rewritten file and history is preserved.
type Store struct {
	file string
	mu   sync.Mutex
}

// New creates a store for the given records file.
func New(file string) *Store {
	return &Store{file: file}
}

// File returns the records file path.
func (s *Store) File() string { return s.file }

// Exists reports whether the records file is present.
func (s *Store) Exists() bool { return fsutil.FileExists(s.file) }

// Append validates and appends one event as a single JSON line.
func (s *Store) Append(e model.Event) error {
	if err := e.Validate(); err != nil {
		return err
	}

	line, err := json.Marshal(e)
	if err != nil {
		return fmt.Errorf("encode event: %w", err)
	}

	s.mu.Lock()
	defer s.mu.Unlock()

	if dir := filepath.Dir(s.file); dir != "" && dir != "." {
		if err := os.MkdirAll(dir, 0o755); err != nil {
			return fmt.Errorf("create records dir: %w", err)
		}
	}

	f, err := os.OpenFile(s.file, os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0o644)
	if err != nil {
		return fmt.Errorf("open records file: %w", err)
	}
	defer func() { _ = f.Close() }()

	if _, err := f.Write(append(line, '\n')); err != nil {
		return fmt.Errorf("append event: %w", err)
	}
	if err := f.Sync(); err != nil {
		return fmt.Errorf("sync records file: %w", err)
	}
	return nil
}

// Line is one parsed JSONL record with its file position, for error reports.
type Line struct {
	Num   int
	Event model.Event
}

// Load reads all events. A missing file is not an error.
func (s *Store) Load() ([]model.Event, error) {
	lines, err := s.LoadLines()
	if err != nil {
		return nil, err
	}

	events := make([]model.Event, 0, len(lines))
	for _, ln := range lines {
		events = append(events, ln.Event)
	}
	return events, nil
}

// LoadLines reads all events with their line numbers.
func (s *Store) LoadLines() ([]Line, error) {
	f, err := os.Open(s.file)
	if err != nil {
		if errors.Is(err, os.ErrNotExist) {
			return nil, nil
		}
		return nil, fmt.Errorf("open records file: %w", err)
	}
	defer func() { _ = f.Close() }()

	var lines []Line
	sc := bufio.NewScanner(f)
	sc.Buffer(make([]byte, 0, 64*1024), 1024*1024)
	for num := 1; sc.Scan(); num++ {
		raw := sc.Bytes()
		if len(bytes.TrimSpace(raw)) == 0 {
			continue
		}

		var e model.Event
		if err := json.Unmarshal(raw, &e); err != nil {
			return nil, fmt.Errorf("%s:%d: invalid JSON line: %w", s.file, num, err)
		}
		if err := e.Validate(); err != nil {
			return nil, fmt.Errorf("%s:%d: %w", s.file, num, err)
		}

		e.Post = model.NormalizePost(e.Post)
		e.Site = model.NormalizeSite(e.Site)
		lines = append(lines, Line{Num: num, Event: e})
	}
	if err := sc.Err(); err != nil {
		return nil, fmt.Errorf("read records file: %w", err)
	}
	return lines, nil
}

// Validate reads every line and collects all problems instead of stopping at
// the first one, so `blogshare check` can report the whole file state.
func (s *Store) Validate() (lines []Line, problems []string) {
	f, err := os.Open(s.file)
	if err != nil {
		if errors.Is(err, os.ErrNotExist) {
			return nil, []string{fmt.Sprintf("records file not found: %s", s.file)}
		}
		return nil, []string{fmt.Sprintf("open records file: %v", err)}
	}
	defer func() { _ = f.Close() }()

	sc := bufio.NewScanner(f)
	sc.Buffer(make([]byte, 0, 64*1024), 1024*1024)
	for num := 1; sc.Scan(); num++ {
		raw := sc.Bytes()
		if len(bytes.TrimSpace(raw)) == 0 {
			continue
		}

		var e model.Event
		if err := json.Unmarshal(raw, &e); err != nil {
			problems = append(problems, fmt.Sprintf("line %d: invalid JSON: %v", num, err))
			continue
		}
		if err := e.Validate(); err != nil {
			problems = append(problems, fmt.Sprintf("line %d: %v", num, err))
			continue
		}

		e.Post = model.NormalizePost(e.Post)
		e.Site = model.NormalizeSite(e.Site)
		lines = append(lines, Line{Num: num, Event: e})
	}
	if err := sc.Err(); err != nil {
		problems = append(problems, fmt.Sprintf("read records file: %v", err))
	}
	return lines, problems
}
