package model

import (
	"testing"
	"time"

	"github.com/gookit/goutil/x/assert"
)

func TestNormalizePost(t *testing.T) {
	assert.Eq(t, "blog/2026/sshc-intro", NormalizePost("content/blog/2026/07-11-sshc-intro.md"))
	assert.Eq(t, "blog/2026/sshc-intro", NormalizePost("/blog/2026/sshc-intro/"))
	assert.Eq(t, "projects/phppkg-easytpl", NormalizePost(`content\projects\phppkg-easytpl\index.md`))
	assert.Eq(t, "sshc-intro", NormalizePost("  sshc-intro  "))
	assert.Eq(t, "", NormalizePost("   "))
}

func TestNormalizeSite(t *testing.T) {
	assert.Eq(t, "reddit/r/golang", NormalizeSite("Reddit/r/golang"))
	assert.Eq(t, "hn", NormalizeSite(" https://hn/ "))
	assert.Eq(t, "dev.to", NormalizeSite("dev.to"))
}

func TestParseStatus(t *testing.T) {
	status, err := ParseStatus("")
	assert.NoErr(t, err)
	assert.Eq(t, StatusPublished, status)

	status, err = ParseStatus(" Blocked ")
	assert.NoErr(t, err)
	assert.Eq(t, StatusBlocked, status)

	_, err = ParseStatus("done")
	assert.Err(t, err)
}

func TestRecordValidate(t *testing.T) {
	now := time.Now()
	good := Record{ID: "abc123", CreateAt: now, UpdateAt: now, Post: "blog/x", Site: "hn", Status: StatusPublished}
	assert.NoErr(t, good.Validate())

	bad := good
	bad.Site = ""
	assert.Err(t, bad.Validate())

	bad = good
	bad.Status = "unknown"
	assert.Err(t, bad.Validate())

	bad = good
	bad.CreateAt = time.Time{}
	assert.Err(t, bad.Validate())

	// id is assigned by the store, so Validate does not require it
	noID := good
	noID.ID = ""
	assert.NoErr(t, noID.Validate())
}

func TestNewID(t *testing.T) {
	seen := map[string]bool{}
	for i := 0; i < 500; i++ {
		id := NewID(seen)
		assert.Eq(t, IDLen, len(id))
		assert.False(t, seen[id], "id %q generated twice", id)
		seen[id] = true
	}

	// collisions are skipped
	taken := map[string]bool{}
	taken[NewID(taken)] = true
	fresh := NewID(taken)
	assert.False(t, taken[fresh])
}

func TestApplyPatch(t *testing.T) {
	created := time.Date(2026, 9, 1, 10, 0, 0, 0, time.Local)
	rec := Record{ID: "a1", Post: "blog/x", Site: "hn", Status: StatusPlanned, Note: "old", CreateAt: created, UpdateAt: created}

	published := StatusPublished
	url := "https://example.com/a"
	now := created.Add(48 * time.Hour)
	rec.Apply(Patch{Status: &published, URL: &url}, now)

	assert.Eq(t, StatusPublished, rec.Status)
	assert.Eq(t, "https://example.com/a", rec.URL)
	assert.Eq(t, "old", rec.Note) // untouched fields stay
	assert.Eq(t, created, rec.CreateAt)
	assert.Eq(t, now, rec.UpdateAt)

	// empty string clears a field
	empty := ""
	rec.Apply(Patch{Note: &empty}, now.Add(time.Hour))
	assert.Eq(t, "", rec.Note)
	assert.Eq(t, now.Add(time.Hour), rec.UpdateAt)

	assert.True(t, Patch{}.Empty())
	assert.False(t, Patch{URL: &url}.Empty())
}

func TestSortAndIndexByID(t *testing.T) {
	base := time.Date(2026, 9, 1, 10, 0, 0, 0, time.Local)
	list := Sort([]Record{
		{ID: "b", Post: "p", Site: "b", CreateAt: base, UpdateAt: base},
		{ID: "a", Post: "p", Site: "a", CreateAt: base, UpdateAt: base.Add(time.Hour)},
	})

	assert.Eq(t, "a", list[0].ID)
	assert.Eq(t, "b", list[1].ID)

	idx, ok := IndexByID(list, "B")
	assert.True(t, ok)
	assert.Eq(t, 1, idx)

	_, ok = IndexByID(list, "zzz")
	assert.False(t, ok)
}
