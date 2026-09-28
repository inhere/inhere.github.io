// Package model defines the share record and its helpers.
//
// The store is a plain JSONL file: one JSON object per line, each object is one
// share record identified by a short `id`. Records are created, updated and
// removed by id (see internal/store), so the file is a simple mutable store
// instead of an append-only event log.
package model

import (
	"crypto/rand"
	"fmt"
	"path"
	"regexp"
	"sort"
	"strings"
	"time"
)

// Status of a share record.
type Status string

// Supported statuses. StatusPublished is the default when recording.
const (
	StatusPlanned   Status = "planned"
	StatusPublished Status = "published"
	StatusBlocked   Status = "blocked"
	StatusRemoved   Status = "removed"
	StatusFailed    Status = "failed"
)

var statuses = []Status{StatusPlanned, StatusPublished, StatusBlocked, StatusRemoved, StatusFailed}

// StatusNames returns all supported status names.
func StatusNames() []string {
	ss := make([]string, 0, len(statuses))
	for _, s := range statuses {
		ss = append(ss, string(s))
	}
	return ss
}

// Valid reports whether the status is supported.
func (s Status) Valid() bool {
	for _, item := range statuses {
		if item == s {
			return true
		}
	}
	return false
}

// ParseStatus parses a status string. An empty value means published.
func ParseStatus(in string) (Status, error) {
	in = strings.ToLower(strings.TrimSpace(in))
	if in == "" {
		return StatusPublished, nil
	}
	s := Status(in)
	if !s.Valid() {
		return "", fmt.Errorf("invalid status %q, allow: %s", in, strings.Join(StatusNames(), ", "))
	}
	return s, nil
}

// Record is one line of the records file.
type Record struct {
	// ID is the short unique key of the record, used by update/rm.
	ID   string `json:"id"`
	Post string `json:"post"`
	Site string `json:"site"`
	// Status of this post/site pair.
	Status Status `json:"status"`
	// URL is the share URL.
	URL string `json:"url,omitempty"`
	// Draft is the repository relative draft file, eg share/hn/miglite.md.
	Draft string `json:"draft,omitempty"`
	// Title of the post, denormalized for the web view.
	Title string `json:"title,omitempty"`
	// Note is free text, eg flair or blocker.
	Note string `json:"note,omitempty"`
	// CreateAt is when the record was created; for share records this is the
	// publish time, and it can be backdated with --at.
	CreateAt time.Time `json:"create_at"`
	// UpdateAt is when the record was last modified.
	UpdateAt time.Time `json:"update_at"`
}

// Key identifies the post/site pair of a record.
type Key struct {
	Post string
	Site string
}

// Pair returns the record key.
func (r Record) Pair() Key { return Key{Post: r.Post, Site: r.Site} }

// Validate checks required fields.
func (r Record) Validate() error {
	if r.Post == "" {
		return fmt.Errorf("post key is required")
	}
	if r.Site == "" {
		return fmt.Errorf("site key is required")
	}
	if r.CreateAt.IsZero() {
		return fmt.Errorf("create_at is required")
	}
	if r.UpdateAt.IsZero() {
		return fmt.Errorf("update_at is required")
	}
	if !r.Status.Valid() {
		return fmt.Errorf("invalid status %q, allow: %s", r.Status, strings.Join(StatusNames(), ", "))
	}
	return nil
}

// IsPublished reports whether the pair was published (the only status that
// removes a site from the pending list).
func (r Record) IsPublished() bool { return r.Status == StatusPublished }

// Patch carries the fields an update may change. Nil fields are left alone, so
// an explicit empty string clears a field.
type Patch struct {
	Post     *string
	Site     *string
	Status   *Status
	URL      *string
	Draft    *string
	Title    *string
	Note     *string
	CreateAt *time.Time
}

// Empty reports whether nothing would change.
func (p Patch) Empty() bool {
	return p.Post == nil && p.Site == nil && p.Status == nil && p.URL == nil &&
		p.Draft == nil && p.Title == nil && p.Note == nil && p.CreateAt == nil
}

// Apply mutates the record in place and refreshes UpdateAt.
func (r *Record) Apply(p Patch, now time.Time) {
	if p.Post != nil {
		r.Post = *p.Post
	}
	if p.Site != nil {
		r.Site = *p.Site
	}
	if p.Status != nil {
		r.Status = *p.Status
	}
	if p.URL != nil {
		r.URL = *p.URL
	}
	if p.Draft != nil {
		r.Draft = *p.Draft
	}
	if p.Title != nil {
		r.Title = *p.Title
	}
	if p.Note != nil {
		r.Note = *p.Note
	}
	if p.CreateAt != nil {
		r.CreateAt = *p.CreateAt
	}
	r.UpdateAt = now
}

// idAlphabet is base36: short ids that stay readable in tables and commands.
const idAlphabet = "0123456789abcdefghijklmnopqrstuvwxyz"

// IDLen is the length of generated record ids.
const IDLen = 6

// NewID returns a random 6 character id that is not in taken.
func NewID(taken map[string]bool) string {
	buf := make([]byte, IDLen)
	for attempt := 0; attempt < 100; attempt++ {
		if _, err := rand.Read(buf); err != nil {
			break
		}
		id := make([]byte, IDLen)
		for i, b := range buf {
			id[i] = idAlphabet[int(b)%len(idAlphabet)]
		}
		if !taken[string(id)] {
			return string(id)
		}
	}

	// Fallback keeps ids working even without a usable random source.
	for i := 0; ; i++ {
		id := fmt.Sprintf("%0*d", IDLen, i)
		if !taken[id] {
			return id
		}
	}
}

// Sort orders records newest first (by update time, then post and site).
func Sort(records []Record) []Record {
	sort.SliceStable(records, func(i, j int) bool {
		if !records[i].UpdateAt.Equal(records[j].UpdateAt) {
			return records[i].UpdateAt.After(records[j].UpdateAt)
		}
		if records[i].Post != records[j].Post {
			return records[i].Post < records[j].Post
		}
		return records[i].Site < records[j].Site
	})
	return records
}

// IndexByID finds the position of a record id.
func IndexByID(records []Record, id string) (int, bool) {
	id = strings.ToLower(strings.TrimSpace(id))
	for i, r := range records {
		if r.ID == id {
			return i, true
		}
	}
	return -1, false
}

// datePrefixRe matches the date prefix zola strips from slugs, eg
// "2016-10-08_", "2026-07-11-" or "07-11-".
var datePrefixRe = regexp.MustCompile(`^(?:\d{4}-\d{2}-\d{2}|\d{2}-\d{2})[_-]?`)

// StripDatePrefix removes the leading date of a file name, mirroring the zola
// slugify rule (paths_keep_dates = false).
func StripDatePrefix(name string) string {
	return datePrefixRe.ReplaceAllString(name, "")
}

// NormalizePost normalizes a post key: content/ prefix and .md suffix are
// dropped, separators become "/" and a leading date is stripped, so
// "content/blog/2026/07-11-sshc-intro.md" gives the same key as the scanner,
// "blog/2026/sshc-intro".
func NormalizePost(in string) string {
	s := strings.TrimSpace(strings.ReplaceAll(in, "\\", "/"))
	if s == "" {
		return ""
	}
	s = strings.TrimPrefix(s, "./")
	s = strings.TrimPrefix(s, "content/")
	s = strings.TrimSuffix(s, ".md")
	s = strings.Trim(s, "/")
	s = path.Clean(s)

	if i := strings.LastIndex(s, "/"); i >= 0 {
		p := s[:i+1] + StripDatePrefix(s[i+1:])
		return strings.TrimSuffix(p, "/index") // zola: index.md is the directory page
	}
	return StripDatePrefix(s)
}

// NormalizeSite normalizes a site key: lower case, no scheme, no trailing slash.
func NormalizeSite(in string) string {
	s := strings.ToLower(strings.TrimSpace(in))
	s = strings.TrimPrefix(s, "https://")
	s = strings.TrimPrefix(s, "http://")
	s = strings.ReplaceAll(s, " ", "")
	s = strings.Trim(s, "/")
	return s
}
