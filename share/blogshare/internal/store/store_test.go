package store

import (
	"os"
	"path/filepath"
	"testing"
	"time"

	"github.com/gookit/goutil/x/assert"
	"github.com/inhere/blogshare/internal/model"
)

func newTestStore(t *testing.T) (*Store, string) {
	t.Helper()
	dir := t.TempDir()
	file := filepath.Join(dir, "share", "records.jsonl")
	return New(file), file
}

func TestAppendAndLoad(t *testing.T) {
	st, file := newTestStore(t)
	at := time.Date(2026, 9, 28, 10, 0, 0, 0, time.Local)

	assert.NoErr(t, st.Append(model.Event{At: at, Post: "content/blog/2026/07-11-sshc-intro.md", Site: "HN", Status: model.StatusPublished, URL: "https://example.com/a"}))
	assert.NoErr(t, st.Append(model.Event{At: at.Add(time.Hour), Post: "blog/2026/sshc-intro", Site: "hn", Status: model.StatusRemoved, Note: "self-promo removed"}))

	events, err := st.Load()
	assert.NoErr(t, err)
	assert.Len(t, events, 2)
	// normalized on read, so both lines collapse onto one pair
	assert.Eq(t, "blog/2026/sshc-intro", events[0].Post)
	assert.Eq(t, "hn", events[0].Site)

	states := model.States(events)
	assert.Len(t, states, 1)
	assert.Eq(t, model.StatusRemoved, states[0].Status)

	raw, err := os.ReadFile(file)
	assert.NoErr(t, err)
	assert.Eq(t, 2, countLines(string(raw)))
}

func TestLoadMissingFile(t *testing.T) {
	st, _ := newTestStore(t)
	events, err := st.Load()
	assert.NoErr(t, err)
	assert.Len(t, events, 0)
	assert.False(t, st.Exists())
}

func TestAppendRejectsInvalidEvent(t *testing.T) {
	st, _ := newTestStore(t)
	err := st.Append(model.Event{Post: "", Site: "hn", Status: model.StatusPublished, At: time.Now()})
	assert.Err(t, err)
	assert.False(t, st.Exists())
}

func TestLoadReportsBadLine(t *testing.T) {
	st, file := newTestStore(t)
	assert.NoErr(t, os.MkdirAll(filepath.Dir(file), 0o755))
	assert.NoErr(t, os.WriteFile(file, []byte("{not json}\n"), 0o644))

	_, err := st.Load()
	assert.Err(t, err)
	assert.Contains(t, err.Error(), "invalid JSON")
}

func TestValidateCollectsAllProblems(t *testing.T) {
	st, file := newTestStore(t)
	assert.NoErr(t, os.MkdirAll(filepath.Dir(file), 0o755))

	lines := []string{
		`{"at":"2026-09-28T10:00:00+08:00","post":"blog/a","site":"hn","status":"published"}`,
		`{"at":"2026-09-28T10:00:00+08:00","post":"blog/a","site":"hn"}`,
		`{oops}`,
	}
	content := ""
	for _, line := range lines {
		content += line + "\n"
	}
	assert.NoErr(t, os.WriteFile(file, []byte(content), 0o644))

	parsed, problems := st.Validate()
	assert.Len(t, parsed, 1)
	assert.Len(t, problems, 2)
}

func TestLocate(t *testing.T) {
	root := t.TempDir()
	assert.NoErr(t, os.MkdirAll(filepath.Join(root, "content", "blog"), 0o755))
	assert.NoErr(t, os.WriteFile(filepath.Join(root, "config.toml"), []byte("base_url = \"https://example.com\"\n"), 0o644))
	assert.NoErr(t, os.MkdirAll(filepath.Join(root, "share"), 0o755))

	paths, err := Locate(root, "")
	assert.NoErr(t, err)
	assert.Eq(t, root, paths.Root)
	assert.Eq(t, filepath.Join(root, "share", "records.jsonl"), paths.RecordsFile)

	paths, err = Locate(root, "tmp/other.jsonl")
	assert.NoErr(t, err)
	assert.Eq(t, filepath.Join(root, "tmp", "other.jsonl"), paths.RecordsFile)

	_, err = Locate(filepath.Join(root, "nope"), "")
	assert.Err(t, err)
}

func TestDraftExists(t *testing.T) {
	root := t.TempDir()
	assert.NoErr(t, os.MkdirAll(filepath.Join(root, "share", "hn"), 0o755))
	assert.NoErr(t, os.WriteFile(filepath.Join(root, "share", "hn", "miglite.md"), []byte("draft"), 0o644))

	exists := DraftExists(root)
	assert.True(t, exists("share/hn/miglite.md"))
	assert.False(t, exists("share/hn/missing.md"))
	assert.False(t, exists(""))
}

func countLines(s string) int {
	n := 0
	for _, c := range s {
		if c == '\n' {
			n++
		}
	}
	return n
}
