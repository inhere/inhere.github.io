package report

import (
	"testing"
	"time"

	"github.com/gookit/goutil/x/assert"
	"github.com/inhere/blogshare/internal/model"
	"github.com/inhere/blogshare/internal/posts"
	"github.com/inhere/blogshare/internal/sites"
)

func buildTestDataset(t *testing.T) Dataset {
	t.Helper()
	sep20 := time.Date(2026, 9, 20, 10, 0, 0, 0, time.Local)

	return Build(Options{
		Events: []model.Event{
			{At: sep20, Post: "blog/2026/sshc-intro", Site: "hn", Status: model.StatusPublished, URL: "https://news.ycombinator.com/item?id=1", Draft: "share/hn/sshc-intro.md", Title: "sshc: ssh client"},
			{At: sep20.Add(time.Hour), Post: "blog/2026/sshc-intro", Site: "v2ex", Status: model.StatusBlocked, Note: "needs bigger account"},
			{At: sep20.Add(2 * time.Hour), Post: "blog/2026/miglite", Site: "v2ex", Status: model.StatusPublished},
			{At: sep20.Add(30 * time.Hour), Post: "blog/2026/miglite", Site: "reddit/r/golang", Status: model.StatusPublished},
		},
		Posts: []posts.Post{
			{Key: "blog/2026/sshc-intro", Title: "sshc: ssh client", Date: "2026-07-11", Path: "content/blog/2026/07-11-sshc-intro.md"},
			{Key: "blog/2026/miglite", Title: "miglite", Date: "2026-08-02", Path: "content/blog/2026/08-02-miglite.md"},
			{Key: "blog/2026/untouched", Title: "untouched", Date: "2026-09-01"},
		},
		DraftExists: func(p string) bool { return p == "share/hn/sshc-intro.md" },
		Now:         sep20.Add(48 * time.Hour),
	})
}

func TestBuildRecords(t *testing.T) {
	ds := buildTestDataset(t)
	assert.Len(t, ds.Records, 4)

	byKey := map[string]Record{}
	for _, r := range ds.Records {
		byKey[r.Post+"|"+r.Site] = r
	}

	hn := byKey["blog/2026/sshc-intro|hn"]
	assert.Eq(t, "published", hn.Status)
	assert.Eq(t, "Hacker News", hn.SiteName)
	assert.Eq(t, "sshc: ssh client", hn.Title)
	assert.True(t, hn.DraftExists)

	v2ex := byKey["blog/2026/sshc-intro|v2ex"]
	assert.Eq(t, "blocked", v2ex.Status)
	assert.False(t, v2ex.DraftExists)
}

func TestBuildSummaryAndStats(t *testing.T) {
	ds := buildTestDataset(t)

	assert.Eq(t, 4, ds.Summary.Records)
	assert.Eq(t, 2, ds.Summary.Posts)
	assert.Eq(t, 3, ds.Summary.Sites)
	assert.Eq(t, 3, ds.Summary.Published)
	assert.Eq(t, time.Date(2026, 9, 21, 16, 0, 0, 0, time.Local).Format(time.RFC3339), ds.Summary.LastAt)

	// pending only covers posts with records: 2 posts x 20 registry sites - 3 published
	assert.Eq(t, 2*len(sites.All())-3, ds.Summary.Pending)

	assert.Len(t, ds.Stats.ByMonth, 1)
	assert.Eq(t, "2026-09", ds.Stats.ByMonth[0].Month)
	assert.Eq(t, 3, ds.Stats.ByMonth[0].Published)

	statuses := map[string]int{}
	for _, row := range ds.Stats.ByStatus {
		statuses[row.Status] = row.Count
	}
	assert.Eq(t, 3, statuses["published"])
	assert.Eq(t, 1, statuses["blocked"])
}

func TestPendingForUntouchedPost(t *testing.T) {
	ds := buildTestDataset(t)

	pending := PendingFor(ds, "blog/2026/untouched")
	assert.Len(t, pending, len(sites.All()))

	pending = PendingFor(ds, "content/blog/2026/miglite.md")
	assert.Len(t, pending, len(sites.All())-2)
	for _, it := range pending {
		assert.True(t, it.Site != "v2ex" && it.Site != "reddit/r/golang")
	}
}

func TestFilterRecordsAndPending(t *testing.T) {
	ds := buildTestDataset(t)

	published := FilterRecords(ds.Records, Filter{Status: "published"})
	assert.Len(t, published, 3)
	assert.Eq(t, "blog/2026/miglite", published[0].Post) // newest first

	hnOnly := FilterRecords(ds.Records, Filter{Query: "hacker"})
	assert.Len(t, hnOnly, 1)
	assert.Eq(t, "hn", hnOnly[0].Site)

	v2ex := FilterPending(ds.Pending, "", "v2ex")
	assert.Len(t, v2ex, 1) // only sshc-intro is pending on v2ex (miglite published there)
	assert.Eq(t, "blog/2026/sshc-intro", v2ex[0].Post)

	none := FilterPending(ds.Pending, "blog/2026/miglite", "reddit/r/golang")
	assert.Len(t, none, 0)
}

func TestPostRows(t *testing.T) {
	ds := buildTestDataset(t)
	assert.Len(t, ds.Posts, 3)

	byKey := map[string]PostRow{}
	for _, r := range ds.Posts {
		byKey[r.Post] = r
	}

	miglite := byKey["blog/2026/miglite"]
	assert.Eq(t, 2, miglite.Published)
	assert.Eq(t, len(sites.All())-2, miglite.Pending)
	assert.Eq(t, len(sites.All()), miglite.SitesTotal)

	untouched := byKey["blog/2026/untouched"]
	assert.Eq(t, 0, untouched.Published)
}
