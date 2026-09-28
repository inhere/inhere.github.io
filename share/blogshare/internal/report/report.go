// Package report turns raw events, posts and sites into the derived views used
// by both the CLI and the web UI.
package report

import (
	"sort"
	"strings"
	"time"

	"github.com/inhere/blogshare/internal/model"
	"github.com/inhere/blogshare/internal/posts"
	"github.com/inhere/blogshare/internal/sites"
)

// Record is one share record with its display fields resolved.
type Record struct {
	ID          string `json:"id"`
	Post        string `json:"post"`
	Title       string `json:"title"`
	Site        string `json:"site"`
	SiteName    string `json:"site_name"`
	Status      string `json:"status"`
	CreateAt    string `json:"create_at"`
	UpdateAt    string `json:"update_at"`
	URL         string `json:"url"`
	Draft       string `json:"draft"`
	DraftExists bool   `json:"draft_exists"`
	Note        string `json:"note"`
}

// ParsedCreateAt returns CreateAt as a time value (zero when unset).
func (r Record) ParsedCreateAt() time.Time {
	t, _ := time.Parse(time.RFC3339, r.CreateAt)
	return t
}

// ParsedUpdateAt returns UpdateAt as a time value (zero when unset).
func (r Record) ParsedUpdateAt() time.Time {
	t, _ := time.Parse(time.RFC3339, r.UpdateAt)
	return t
}

// PendingItem is a registry site a post has not been published to yet.
type PendingItem struct {
	Post     string `json:"post"`
	Title    string `json:"title"`
	Site     string `json:"site"`
	SiteName string `json:"site_name"`
	SiteURL  string `json:"site_url"`
	Lang     string `json:"lang"`
}

// SiteRow is one registry site with its share counters.
type SiteRow struct {
	Key       string `json:"key"`
	Name      string `json:"name"`
	URL       string `json:"url"`
	Lang      string `json:"lang"`
	Notes     string `json:"notes"`
	Published int    `json:"published"`
	Posts     int    `json:"posts"`
}

// PostRow is one post with its share counters.
type PostRow struct {
	Post       string `json:"post"`
	Title      string `json:"title"`
	Date       string `json:"date"`
	Path       string `json:"path"`
	Published  int    `json:"published"`
	Pending    int    `json:"pending"`
	SitesTotal int    `json:"sites_total"`
}

// MonthRow is the number of published records in one month.
type MonthRow struct {
	Month     string `json:"month"`
	Published int    `json:"published"`
}

// StatusRow is the number of pairs in one status.
type StatusRow struct {
	Status string `json:"status"`
	Count  int    `json:"count"`
}

// SiteStat is one entry of the per-site statistics.
type SiteStat struct {
	Site      string `json:"site"`
	Name      string `json:"name"`
	Published int    `json:"published"`
	Posts     int    `json:"posts"`
}

// Stats groups the aggregate views.
type Stats struct {
	BySite   []SiteStat  `json:"by_site"`
	ByMonth  []MonthRow  `json:"by_month"`
	ByStatus []StatusRow `json:"by_status"`
}

// Summary is the headline counter block.
type Summary struct {
	Records     int    `json:"records"`
	Posts       int    `json:"posts"`
	Sites       int    `json:"sites"`
	Published   int    `json:"published"`
	Pending     int    `json:"pending"`
	LastAt      string `json:"last_at"`
	GeneratedAt string `json:"generated_at"`
}

// Dataset is the full derived state.
type Dataset struct {
	Summary Summary
	Records []Record
	Pending []PendingItem
	Sites   []SiteRow
	Posts   []PostRow
	Stats   Stats
}

// Options configures Build.
type Options struct {
	Records     []model.Record
	Posts       []posts.Post
	Sites       []sites.Site
	DraftExists func(path string) bool
	Now         time.Time
}

// Build derives all views. DraftExists may be nil when draft paths should not
// be verified.
func Build(opts Options) Dataset {
	now := opts.Now
	if now.IsZero() {
		now = time.Now()
	}
	draftExists := opts.DraftExists
	if draftExists == nil {
		draftExists = func(string) bool { return false }
	}

	stored := opts.Records
	registry := opts.Sites
	if registry == nil {
		registry = sites.All()
	}
	knownSites := make(map[string]sites.Site, len(registry))
	for _, s := range registry {
		knownSites[s.Key] = s
	}

	// ---- records -------------------------------------------------------
	records := make([]Record, 0, len(stored))
	publishedPerPost := make(map[string]int, len(stored))
	publishedPerSite := make(map[string]int, len(stored))
	postsPerSite := map[string]map[string]struct{}{}
	statusCount := map[string]int{}
	monthCount := map[string]int{}
	knownPosts := map[string]struct{}{}
	knownSitesUsed := map[string]struct{}{}
	var lastAt time.Time

	for _, item := range stored {
		title := item.Title
		if title == "" {
			title = posts.Title(opts.Posts, item.Post)
		}

		rec := Record{
			ID:          item.ID,
			Post:        item.Post,
			Title:       title,
			Site:        item.Site,
			SiteName:    siteName(knownSites, item.Site),
			Status:      string(item.Status),
			CreateAt:    item.CreateAt.Format(time.RFC3339),
			UpdateAt:    item.UpdateAt.Format(time.RFC3339),
			URL:         item.URL,
			Draft:       item.Draft,
			DraftExists: item.Draft != "" && draftExists(item.Draft),
			Note:        item.Note,
		}
		records = append(records, rec)

		knownPosts[item.Post] = struct{}{}
		knownSitesUsed[item.Site] = struct{}{}
		if item.UpdateAt.After(lastAt) {
			lastAt = item.UpdateAt
		}

		statusCount[rec.Status]++
		if item.IsPublished() {
			publishedPerPost[item.Post]++
			publishedPerSite[item.Site]++
			monthCount[item.CreateAt.Format("2006-01")]++
			if _, ok := postsPerSite[item.Site]; !ok {
				postsPerSite[item.Site] = map[string]struct{}{}
			}
			postsPerSite[item.Site][item.Post] = struct{}{}
		}
	}
	sortRecords(records)

	// ---- pending -------------------------------------------------------
	// Sites of the registry that a post has not been published to. Only posts
	// with at least one record are listed when no explicit post is requested,
	// otherwise every scanned post would produce registrySize rows.
	pending := make([]PendingItem, 0, len(records))
	activePosts := make([]string, 0, len(knownPosts))
	for p := range knownPosts {
		activePosts = append(activePosts, p)
	}
	sort.Strings(activePosts)
	for _, postKey := range activePosts {
		title := posts.Title(opts.Posts, postKey)
		published := map[string]struct{}{}
		for _, item := range stored {
			if item.Post == postKey && item.IsPublished() {
				published[item.Site] = struct{}{}
			}
		}
		for _, s := range registry {
			if _, ok := published[s.Key]; ok {
				continue
			}
			pending = append(pending, PendingItem{
				Post: postKey, Title: title, Site: s.Key,
				SiteName: s.Name, SiteURL: s.URL, Lang: s.Lang,
			})
		}
	}
	// Sites used in events but missing from the registry never appear here, but
	// a published event for an unknown site still counts as done.

	// ---- posts ---------------------------------------------------------
	postRows := make([]PostRow, 0, len(opts.Posts)+len(activePosts))
	seen := map[string]struct{}{}
	for _, p := range opts.Posts {
		seen[p.Key] = struct{}{}
		postRows = append(postRows, PostRow{
			Post: p.Key, Title: p.Title, Date: p.Date, Path: p.Path,
			Published: publishedPerPost[p.Key], Pending: pendingCount(len(registry), publishedPerPost[p.Key]),
			SitesTotal: len(registry),
		})
	}
	for _, key := range activePosts {
		if _, ok := seen[key]; ok {
			continue
		}
		title := ""
		for _, item := range stored {
			if item.Post == key && item.Title != "" {
				title = item.Title
				break
			}
		}
		postRows = append(postRows, PostRow{
			Post: key, Title: title,
			Published: publishedPerPost[key], Pending: pendingCount(len(registry), publishedPerPost[key]),
			SitesTotal: len(registry),
		})
	}
	sort.Slice(postRows, func(i, j int) bool { return postRows[i].Post < postRows[j].Post })

	// ---- sites ---------------------------------------------------------
	siteRows := make([]SiteRow, 0, len(registry)+len(knownSitesUsed))
	for _, s := range registry {
		siteRows = append(siteRows, SiteRow{
			Key: s.Key, Name: s.Name, URL: s.URL, Lang: s.Lang, Notes: s.Notes,
			Published: publishedPerSite[s.Key], Posts: len(postsPerSite[s.Key]),
		})
	}
	unknownSites := make([]string, 0)
	for key := range knownSitesUsed {
		if _, ok := knownSites[key]; !ok {
			unknownSites = append(unknownSites, key)
		}
	}
	sort.Strings(unknownSites)
	for _, key := range unknownSites {
		siteRows = append(siteRows, SiteRow{
			Key: key, Name: key, Lang: "",
			Published: publishedPerSite[key], Posts: len(postsPerSite[key]),
		})
	}

	// ---- stats ---------------------------------------------------------
	bySite := make([]SiteStat, 0, len(publishedPerSite)+len(publishedPerPost))
	for _, row := range siteRows {
		if row.Published == 0 {
			continue
		}
		bySite = append(bySite, SiteStat{
			Site: row.Key, Name: row.Name, Published: row.Published, Posts: row.Posts,
		})
	}
	sort.Slice(bySite, func(i, j int) bool {
		if bySite[i].Published != bySite[j].Published {
			return bySite[i].Published > bySite[j].Published
		}
		return bySite[i].Site < bySite[j].Site
	})

	byMonth := make([]MonthRow, 0, len(monthCount))
	for month, count := range monthCount {
		byMonth = append(byMonth, MonthRow{Month: month, Published: count})
	}
	sort.Slice(byMonth, func(i, j int) bool { return byMonth[i].Month < byMonth[j].Month })

	byStatus := make([]StatusRow, 0, len(statusCount))
	for status, count := range statusCount {
		byStatus = append(byStatus, StatusRow{Status: status, Count: count})
	}
	sort.Slice(byStatus, func(i, j int) bool {
		if byStatus[i].Count != byStatus[j].Count {
			return byStatus[i].Count > byStatus[j].Count
		}
		return byStatus[i].Status < byStatus[j].Status
	})

	summary := Summary{
		Records:     len(stored),
		Posts:       len(knownPosts),
		Sites:       len(knownSitesUsed),
		Published:   countPublished(stored),
		Pending:     len(pending),
		GeneratedAt: now.Format(time.RFC3339),
	}
	if !lastAt.IsZero() {
		summary.LastAt = lastAt.Format(time.RFC3339)
	}

	return Dataset{
		Summary: summary,
		Records: records,
		Pending: pending,
		Sites:   siteRows,
		Posts:   postRows,
		Stats:   Stats{BySite: bySite, ByMonth: byMonth, ByStatus: byStatus},
	}
}

// sortRecords orders view records newest first (by update time).
func sortRecords(list []Record) {
	sort.SliceStable(list, func(i, j int) bool {
		ti, tj := list[i].ParsedUpdateAt(), list[j].ParsedUpdateAt()
		if !ti.Equal(tj) {
			return ti.After(tj)
		}
		if list[i].Post != list[j].Post {
			return list[i].Post < list[j].Post
		}
		return list[i].Site < list[j].Site
	})
}

// siteName resolves a display name from the active registry.
func siteName(known map[string]sites.Site, key string) string {
	if s, ok := known[key]; ok && s.Name != "" {
		return s.Name
	}
	return key
}

// pendingCount never reports a negative count when records exist for sites
// outside the registry.
func pendingCount(total, published int) int {
	if published >= total {
		return 0
	}
	return total - published
}

func countPublished(records []model.Record) int {
	n := 0
	for _, rec := range records {
		if rec.IsPublished() {
			n++
		}
	}
	return n
}

// Filter selects records by id, post key, site key, status and free text.
type Filter struct {
	ID     string
	Post   string
	Site   string
	Status string
	Query  string
}

// Match reports whether the record passes the filter.
func (f Filter) Match(r Record) bool {
	if f.ID != "" && !strings.Contains(strings.ToLower(r.ID), strings.ToLower(strings.TrimSpace(f.ID))) {
		return false
	}
	if f.Post != "" && !strings.Contains(r.Post, model.NormalizePost(f.Post)) {
		return false
	}
	if f.Site != "" && !strings.Contains(r.Site, model.NormalizeSite(f.Site)) {
		return false
	}
	if f.Status != "" && r.Status != strings.ToLower(strings.TrimSpace(f.Status)) {
		return false
	}
	if f.Query != "" {
		q := strings.ToLower(f.Query)
		hay := strings.ToLower(r.ID + " " + r.Post + " " + r.Title + " " + r.Site + " " + r.SiteName + " " + r.URL + " " + r.Draft + " " + r.Note)
		if !strings.Contains(hay, q) {
			return false
		}
	}
	return true
}

// FilterRecords applies f; records stay ordered newest first.
func FilterRecords(list []Record, f Filter) []Record {
	out := make([]Record, 0, len(list))
	for _, r := range list {
		if f.Match(r) {
			out = append(out, r)
		}
	}
	return out
}

// FilterPending applies a post key and/or site query to pending items.
func FilterPending(list []PendingItem, postKey, siteQuery string) []PendingItem {
	postKey = model.NormalizePost(postKey)
	siteQuery = model.NormalizeSite(siteQuery)

	out := make([]PendingItem, 0, len(list))
	for _, it := range list {
		if postKey != "" && it.Post != postKey {
			continue
		}
		if siteQuery != "" && !strings.Contains(it.Site, siteQuery) && !strings.Contains(strings.ToLower(it.SiteName), siteQuery) {
			continue
		}
		out = append(out, it)
	}
	return out
}

// PendingFor returns the pending sites of one post, even when the post has no
// record yet.
func PendingFor(ds Dataset, postKey string) []PendingItem {
	postKey = model.NormalizePost(postKey)
	out := make([]PendingItem, 0, len(ds.Sites))
	for _, it := range ds.Pending {
		if it.Post == postKey {
			out = append(out, it)
		}
	}
	if len(out) > 0 {
		return out
	}

	// Not in the derived pending list: rebuild for an untouched post.
	published := map[string]struct{}{}
	for _, r := range ds.Records {
		if r.Post == postKey && r.Status == string(model.StatusPublished) {
			published[r.Site] = struct{}{}
		}
	}
	title := ""
	for _, r := range ds.Records {
		if r.Post == postKey && r.Title != "" {
			title = r.Title
			break
		}
	}
	for _, row := range ds.Sites {
		if _, ok := published[row.Key]; ok {
			continue
		}
		out = append(out, PendingItem{
			Post: postKey, Title: title, Site: row.Key,
			SiteName: row.Name, SiteURL: row.URL, Lang: row.Lang,
		})
	}
	return out
}
