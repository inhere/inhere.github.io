// Package store reads and writes the share record JSONL file.
package store

import (
	"bufio"
	"bytes"
	"encoding/json"
	"errors"
	"fmt"
	"os"
	"path/filepath"
	"strings"
	"sync"
	"time"

	"github.com/gookit/goutil/fsutil"
	"github.com/inhere/blogshare/internal/model"
)

// Store is a small mutable record store backed by one JSONL file: one record
// per line, addressed by its short id.
//
// Reads and writes are serialized per process; a write rewrites the whole file
// through a temporary file and an atomic rename, so a crash never leaves a
// half-written records file.
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

// Load reads all records. A missing file is not an error.
func (s *Store) Load() ([]model.Record, error) {
	records, problems := s.LoadValidate()
	if len(problems) > 0 {
		return nil, errors.New(problems[0])
	}
	return records, nil
}

// LoadValidate reads every line and collects all problems instead of stopping
// at the first one, so `blogshare check` can report the whole file state.
func (s *Store) LoadValidate() (records []model.Record, problems []string) {
	f, err := os.Open(s.file)
	if err != nil {
		if errors.Is(err, os.ErrNotExist) {
			return nil, nil
		}
		return nil, []string{fmt.Sprintf("open records file: %v", err)}
	}
	defer func() { _ = f.Close() }()

	seenID := map[string]int{}
	seenPair := map[model.Key]int{}

	sc := bufio.NewScanner(f)
	sc.Buffer(make([]byte, 0, 64*1024), 1024*1024)
	for num := 1; sc.Scan(); num++ {
		raw := sc.Bytes()
		if len(bytes.TrimSpace(raw)) == 0 {
			continue
		}

		var rec model.Record
		if err := json.Unmarshal(raw, &rec); err != nil {
			problems = append(problems, fmt.Sprintf("line %d: invalid JSON: %v", num, err))
			continue
		}

		rec.Post = model.NormalizePost(rec.Post)
		rec.Site = model.NormalizeSite(rec.Site)
		rec.ID = strings.ToLower(strings.TrimSpace(rec.ID))

		if err := rec.Validate(); err != nil {
			problems = append(problems, fmt.Sprintf("line %d: %v", num, err))
			continue
		}
		if err := model.ValidateID(rec.ID); err != nil {
			problems = append(problems, fmt.Sprintf("line %d: record %s -> %s: %v", num, rec.Post, rec.Site, err))
		} else if prev, ok := seenID[rec.ID]; ok {
			problems = append(problems, fmt.Sprintf("line %d: duplicate id %q (first on line %d)", num, rec.ID, prev))
		} else {
			seenID[rec.ID] = num
		}
		if prev, ok := seenPair[rec.Pair()]; ok {
			problems = append(problems, fmt.Sprintf("line %d: duplicate pair %s -> %s (first on line %d)", num, rec.Post, rec.Site, prev))
		} else {
			seenPair[rec.Pair()] = num
		}

		records = append(records, rec)
	}
	if err := sc.Err(); err != nil {
		problems = append(problems, fmt.Sprintf("read records file: %v", err))
	}
	return records, problems
}

// Add stores a new record and returns it with its generated id and timestamps.
//
// A pair that already exists is rejected: the caller should update that record
// instead, which keeps one line per (post, site) pair.
func (s *Store) Add(rec model.Record) (model.Record, error) {
	s.mu.Lock()
	defer s.mu.Unlock()

	rec.Post = model.NormalizePost(rec.Post)
	rec.Site = model.NormalizeSite(rec.Site)

	records, err := s.loadNoLock()
	if err != nil {
		return model.Record{}, err
	}

	for _, existing := range records {
		if existing.Pair() == rec.Pair() {
			return model.Record{}, fmt.Errorf("%s -> %s already recorded as %s, use 'update %s' instead",
				rec.Post, rec.Site, existing.ID, existing.ID)
		}
	}

	now := time.Now().Truncate(time.Second)
	if rec.CreateAt.IsZero() {
		rec.CreateAt = now
	}
	rec.UpdateAt = now
	rec.Status = defaultStatus(rec.Status)

	taken := make(map[string]bool, len(records))
	for _, existing := range records {
		taken[existing.ID] = true
	}
	rec.ID = model.NewID(rec.CreateAt, taken)

	if err := rec.Validate(); err != nil {
		return model.Record{}, err
	}

	records = append(records, rec)
	if err := s.saveNoLock(records); err != nil {
		return model.Record{}, err
	}
	return rec, nil
}

// Update patches the record with the given id and returns the stored record.
func (s *Store) Update(id string, patch model.Patch) (model.Record, error) {
	s.mu.Lock()
	defer s.mu.Unlock()

	records, err := s.loadNoLock()
	if err != nil {
		return model.Record{}, err
	}

	idx, ok := model.IndexByID(records, id)
	if !ok {
		return model.Record{}, fmt.Errorf("record %q not found", id)
	}
	if patch.Empty() {
		return model.Record{}, fmt.Errorf("nothing to update: pass at least one field")
	}

	rec := records[idx]
	rec.Apply(patch, time.Now().Truncate(time.Second))

	// keep the pair unique
	for i, other := range records {
		if i != idx && other.Pair() == rec.Pair() {
			return model.Record{}, fmt.Errorf("%s -> %s already recorded as %s", rec.Post, rec.Site, other.ID)
		}
	}
	if err := rec.Validate(); err != nil {
		return model.Record{}, err
	}

	records[idx] = rec
	if err := s.saveNoLock(records); err != nil {
		return model.Record{}, err
	}
	return rec, nil
}

// Delete removes the record with the given id and returns it.
func (s *Store) Delete(id string) (model.Record, error) {
	s.mu.Lock()
	defer s.mu.Unlock()

	records, err := s.loadNoLock()
	if err != nil {
		return model.Record{}, err
	}

	idx, ok := model.IndexByID(records, id)
	if !ok {
		return model.Record{}, fmt.Errorf("record %q not found", id)
	}

	removed := records[idx]
	records = append(records[:idx], records[idx+1:]...)
	if err := s.saveNoLock(records); err != nil {
		return model.Record{}, err
	}
	return removed, nil
}

// Save rewrites the whole file (atomic replace), used by bulk edits.
func (s *Store) Save(records []model.Record) error {
	s.mu.Lock()
	defer s.mu.Unlock()
	return s.saveNoLock(records)
}

func (s *Store) loadNoLock() ([]model.Record, error) {
	records, problems := s.LoadValidate()
	if len(problems) > 0 {
		return nil, errors.New("records file has problems (run 'blogshare check'): " + problems[0])
	}
	return records, nil
}

// saveNoLock writes all records to a temporary file and renames it over the
// records file, so readers never observe a partial file.
func (s *Store) saveNoLock(records []model.Record) error {
	dir := filepath.Dir(s.file)
	if dir != "" && dir != "." {
		if err := os.MkdirAll(dir, 0o755); err != nil {
			return fmt.Errorf("create records dir: %w", err)
		}
	}

	tmp, err := os.CreateTemp(dir, ".records-*.tmp")
	if err != nil {
		return fmt.Errorf("create temp file: %w", err)
	}
	tmpName := tmp.Name()

	w := bufio.NewWriter(tmp)
	for _, rec := range records {
		line, err := json.Marshal(rec)
		if err != nil {
			_ = tmp.Close()
			_ = os.Remove(tmpName)
			return fmt.Errorf("encode record %s: %w", rec.ID, err)
		}
		if _, err := w.Write(append(line, '\n')); err != nil {
			_ = tmp.Close()
			_ = os.Remove(tmpName)
			return fmt.Errorf("write record %s: %w", rec.ID, err)
		}
	}
	if err := w.Flush(); err != nil {
		_ = tmp.Close()
		_ = os.Remove(tmpName)
		return fmt.Errorf("flush records: %w", err)
	}
	if err := tmp.Sync(); err != nil {
		_ = tmp.Close()
		_ = os.Remove(tmpName)
		return fmt.Errorf("sync records: %w", err)
	}
	if err := tmp.Close(); err != nil {
		_ = os.Remove(tmpName)
		return fmt.Errorf("close records: %w", err)
	}

	if err := os.Rename(tmpName, s.file); err != nil {
		_ = os.Remove(tmpName)
		return fmt.Errorf("replace records file: %w", err)
	}
	return nil
}

func defaultStatus(s model.Status) model.Status {
	if s == "" {
		return model.StatusPublished
	}
	return s
}
