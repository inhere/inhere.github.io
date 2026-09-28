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

func TestEventValidate(t *testing.T) {
	good := Event{At: time.Now(), Post: "blog/x", Site: "hn", Status: StatusPublished}
	assert.NoErr(t, good.Validate())

	bad := good
	bad.Site = ""
	assert.Err(t, bad.Validate())

	bad = good
	bad.Status = "unknown"
	assert.Err(t, bad.Validate())
}

func TestReduce(t *testing.T) {
	base := time.Date(2026, 9, 1, 10, 0, 0, 0, time.Local)
	events := []Event{
		{At: base, Post: "p1", Site: "hn", Status: StatusPlanned, Note: "first"},
		{At: base.Add(time.Hour), Post: "p1", Site: "hn", Status: StatusPublished, URL: "https://news.ycombinator.com/item?id=1"},
		{At: base.Add(2 * time.Hour), Post: "p1", Site: "dev.to", Status: StatusPublished},
	}

	states := Reduce(events)
	assert.Len(t, states, 2)

	hn := states[Key{Post: "p1", Site: "hn"}]
	assert.Eq(t, StatusPublished, hn.Status)
	assert.Eq(t, "https://news.ycombinator.com/item?id=1", hn.URL)
	assert.Eq(t, 2, hn.EventCount)

	t.Run("backdated event does not override newer state", func(t *testing.T) {
		events := append([]Event{}, events...)
		events = append(events, Event{At: base.Add(-time.Hour), Post: "p1", Site: "hn", Status: StatusBlocked})

		hn := Reduce(events)[Key{Post: "p1", Site: "hn"}]
		assert.Eq(t, StatusPublished, hn.Status)
		assert.Eq(t, 3, hn.EventCount)
	})

	t.Run("equal timestamps: later line wins", func(t *testing.T) {
		same := base.Add(3 * time.Hour)
		events := []Event{
			{At: same, Post: "p2", Site: "hn", Status: StatusPlanned},
			{At: same, Post: "p2", Site: "hn", Status: StatusPublished},
		}

		hn := Reduce(events)[Key{Post: "p2", Site: "hn"}]
		assert.Eq(t, StatusPublished, hn.Status)
	})
}

func TestStatesSorted(t *testing.T) {
	at := time.Date(2026, 9, 1, 10, 0, 0, 0, time.Local)
	list := States([]Event{
		{At: at, Post: "b", Site: "hn", Status: StatusPublished},
		{At: at, Post: "a", Site: "x", Status: StatusPublished},
		{At: at, Post: "a", Site: "hn", Status: StatusPublished},
	})

	assert.Len(t, list, 3)
	assert.Eq(t, "a", list[0].Post)
	assert.Eq(t, "hn", list[0].Site)
	assert.Eq(t, "a", list[1].Post)
	assert.Eq(t, "x", list[1].Site)
	assert.Eq(t, "b", list[2].Post)
}
