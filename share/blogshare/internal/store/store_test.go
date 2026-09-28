package store

import (
	"os"
	"path/filepath"
	"strings"
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

func TestAddLoadUpdateDelete(t *testing.T) {
	st, file := newTestStore(t)
	backdated := time.Date(2026, 9, 20, 10, 0, 0, 0, time.Local)

	created, err := st.Add(model.Record{
		Post: "content/blog/2026/07-11-sshc-intro.md", Site: "HN", Status: model.StatusPublished,
		URL: "https://news.ycombinator.com/item?id=1", Title: "sshc", CreateAt: backdated,
	})
	assert.NoErr(t, err)
	assert.Eq(t, model.IDLen, len(created.ID))
	assert.Eq(t, "blog/2026/sshc-intro", created.Post) // normalized by Add
	assert.Eq(t, "hn", created.Site)
	assert.Eq(t, backdated, created.CreateAt) // --at keeps the publish time
	assert.True(t, created.UpdateAt.After(backdated))

	records, err := st.Load()
	assert.NoErr(t, err)
	assert.Len(t, records, 1)
	assert.Eq(t, created.ID, records[0].ID)

	// duplicate pair is rejected, pointing at the existing id
	_, err = st.Add(model.Record{Post: "blog/2026/sshc-intro", Site: "hn"})
	assert.Err(t, err)
	assert.Contains(t, err.Error(), created.ID)

	published := model.StatusPublished
	newURL := "https://news.ycombinator.com/item?id=2"
	_, err = st.Update(created.ID, model.Patch{Status: &published, URL: &newURL})
	assert.NoErr(t, err)

	records, err = st.Load()
	assert.NoErr(t, err)
	assert.Len(t, records, 1)
	assert.Eq(t, "https://news.ycombinator.com/item?id=2", records[0].URL)
	assert.True(t, records[0].UpdateAt.After(created.UpdateAt) || !records[0].UpdateAt.Before(created.UpdateAt))
	assert.Eq(t, backdated, records[0].CreateAt)

	removed, err := st.Delete(created.ID)
	assert.NoErr(t, err)
	assert.Eq(t, created.ID, removed.ID)

	records, err = st.Load()
	assert.NoErr(t, err)
	assert.Len(t, records, 0)

	_, err = st.Delete("nope")
	assert.Err(t, err)
	x := "x"
	_, err = st.Update("nope", model.Patch{URL: &x})
	assert.Err(t, err)

	raw, err := os.ReadFile(file)
	assert.NoErr(t, err)
	assert.Eq(t, "", strings.TrimSpace(string(raw)))
}

func TestAddEmptyStatusDefaultsToPublished(t *testing.T) {
	st, _ := newTestStore(t)
	rec, err := st.Add(model.Record{Post: "blog/x", Site: "hn"})
	assert.NoErr(t, err)
	assert.Eq(t, model.StatusPublished, rec.Status)
}

func TestUpdateKeepsPairUnique(t *testing.T) {
	st, _ := newTestStore(t)
	first, err := st.Add(model.Record{Post: "blog/x", Site: "hn"})
	assert.NoErr(t, err)
	_, err = st.Add(model.Record{Post: "blog/x", Site: "v2ex"})
	assert.NoErr(t, err)

	site := "v2ex"
	_, err = st.Update(first.ID, model.Patch{Site: &site})
	assert.Err(t, err)
	assert.Contains(t, err.Error(), "already recorded")

	_, err = st.Update(first.ID, model.Patch{})
	assert.Err(t, err)
	assert.Contains(t, err.Error(), "nothing to update")
}

func TestLoadMissingFile(t *testing.T) {
	st, _ := newTestStore(t)
	records, err := st.Load()
	assert.NoErr(t, err)
	assert.Len(t, records, 0)
	assert.False(t, st.Exists())
}

func TestLoadRejectsBrokenFile(t *testing.T) {
	st, file := newTestStore(t)
	assert.NoErr(t, os.MkdirAll(filepath.Dir(file), 0o755))
	assert.NoErr(t, os.WriteFile(file, []byte("{not json}\n"), 0o644))

	_, err := st.Load()
	assert.Err(t, err)
	assert.Contains(t, err.Error(), "invalid JSON")
}

func TestLoadValidateCollectsAllProblems(t *testing.T) {
	st, file := newTestStore(t)
	assert.NoErr(t, os.MkdirAll(filepath.Dir(file), 0o755))

	lines := []string{
		`{"id":"a1","post":"blog/a","site":"hn","status":"published","create_at":"2026-09-28T10:00:00+08:00","update_at":"2026-09-28T10:00:00+08:00"}`,
		`{"id":"a1","post":"blog/b","site":"hn","status":"published","create_at":"2026-09-28T10:00:00+08:00","update_at":"2026-09-28T10:00:00+08:00"}`,
		`{"post":"blog/c","site":"hn","status":"published","create_at":"2026-09-28T10:00:00+08:00","update_at":"2026-09-28T10:00:00+08:00"}`,
		`{"id":"a4","post":"blog/a","site":"hn","status":"published","create_at":"2026-09-28T10:00:00+08:00","update_at":"2026-09-28T10:00:00+08:00"}`,
		`{"id":"a5","post":"blog/d","site":"hn"}`,
		`{oops}`,
	}
	assert.NoErr(t, os.WriteFile(file, []byte(strings.Join(lines, "\n")+"\n"), 0o644))

	records, problems := st.LoadValidate()
	// a1, the duplicate id line, the id-less line and the duplicate pair line parse fine;
	// only the line without create_at is dropped by Validate.
	assert.Len(t, records, 4)
	assert.Len(t, problems, 5)

	joined := strings.Join(problems, "\n")
	assert.Contains(t, joined, "duplicate id")
	assert.Contains(t, joined, "has no id")
	assert.Contains(t, joined, "duplicate pair")
	assert.Contains(t, joined, "create_at is required")
	assert.Contains(t, joined, "invalid JSON")
}

func TestSaveAtomicReplace(t *testing.T) {
	st, file := newTestStore(t)
	_, err := st.Add(model.Record{Post: "blog/x", Site: "hn", Title: "x"})
	assert.NoErr(t, err)

	records, err := st.Load()
	assert.NoErr(t, err)
	assert.NoErr(t, st.Save(records))

	// no temp files left behind
	entries, err := os.ReadDir(filepath.Dir(file))
	assert.NoErr(t, err)
	for _, e := range entries {
		assert.False(t, strings.HasPrefix(e.Name(), ".records-"), "leftover temp file %s", e.Name())
	}
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
