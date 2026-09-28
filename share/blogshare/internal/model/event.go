// Package model defines the share record event and its derived state.
//
// The record file is an append-only JSONL event log: one JSON object per line,
// every object describes one action for a (post, site) pair. The current state
// of a pair is the latest event by "at" time, so mistakes are corrected by
// appending a new event instead of editing old lines.
package model

import (
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

// Event is one line of the append-only JSONL log.
type Event struct {
	// At is the record time: for published events it is the publish time.
	At     time.Time `json:"at"`
	Post   string    `json:"post"`
	Site   string    `json:"site"`
	Status Status    `json:"status"`
	URL    string    `json:"url,omitempty"`
	Draft  string    `json:"draft,omitempty"`
	Title  string    `json:"title,omitempty"`
	Note   string    `json:"note,omitempty"`
}

// Validate checks required fields.
func (e Event) Validate() error {
	if e.Post == "" {
		return fmt.Errorf("post key is required")
	}
	if e.Site == "" {
		return fmt.Errorf("site key is required")
	}
	if e.At.IsZero() {
		return fmt.Errorf("at time is required")
	}
	if !e.Status.Valid() {
		return fmt.Errorf("invalid status %q, allow: %s", e.Status, strings.Join(StatusNames(), ", "))
	}
	return nil
}

// State is the current status of one (post, site) pair.
type State struct {
	Post       string
	Site       string
	Status     Status
	At         time.Time
	URL        string
	Draft      string
	Title      string
	Note       string
	EventCount int
}

// IsPublished reports whether the pair was published (the only status that
// removes a site from the pending list).
func (s State) IsPublished() bool { return s.Status == StatusPublished }

// Key identifies a (post, site) pair.
type Key struct {
	Post string
	Site string
}

// Reduce folds events into the latest state per (post, site) pair.
//
// Ordering: the event with the latest At wins; on equal At the later line wins,
// so a fresh correction appended with the default (now) timestamp always
// overrides older records.
func Reduce(events []Event) map[Key]State {
	states := make(map[Key]State, len(events))
	for _, e := range events {
		key := Key{Post: e.Post, Site: e.Site}
		old, ok := states[key]

		count := 1
		if ok {
			count = old.EventCount + 1
			// equal timestamps: the later line wins (never Before).
			if e.At.Before(old.At) {
				old.EventCount = count
				states[key] = old
				continue
			}
		}

		states[key] = State{
			Post: e.Post, Site: e.Site, Status: e.Status, At: e.At,
			URL: e.URL, Draft: e.Draft, Title: e.Title, Note: e.Note,
			EventCount: count,
		}
	}
	return states
}

// States returns the reduced states sorted by post then site.
func States(events []Event) []State {
	reduced := Reduce(events)
	list := make([]State, 0, len(reduced))
	for _, st := range reduced {
		list = append(list, st)
	}
	sort.Slice(list, func(i, j int) bool {
		if list[i].Post != list[j].Post {
			return list[i].Post < list[j].Post
		}
		return list[i].Site < list[j].Site
	})
	return list
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

	base := s
	if i := strings.LastIndex(s, "/"); i >= 0 {
		base = StripDatePrefix(s[i+1:])
		p := s[:i+1] + base
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
