package cli

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"strings"
	"text/tabwriter"
	"time"

	"github.com/gookit/goutil/cflag/capp"
	"github.com/inhere/blogshare/internal/model"
	"github.com/inhere/blogshare/internal/report"
	"github.com/inhere/blogshare/internal/sites"
)

func jsonMarshalIndent(v any) ([]byte, error) {
	return json.MarshalIndent(v, "", "  ")
}

var timeLayouts = []string{
	"2006-01-02 15:04:05",
	"2006-01-02 15:04",
	"2006-01-02",
	time.RFC3339,
}

func parseAt(in string) (time.Time, error) {
	in = strings.TrimSpace(in)
	if in == "" {
		return time.Now().Truncate(time.Second), nil
	}
	for _, layout := range timeLayouts {
		if t, err := time.ParseInLocation(layout, in, time.Local); err == nil {
			return t, nil
		}
	}
	return time.Time{}, fmt.Errorf("invalid --at %q, want '2006-01-02 15:04' or RFC3339", in)
}

// newAddCmd appends one share record.
func newAddCmd() *capp.Cmd {
	var (
		statusVal string
		urlVal    string
		draftVal  string
		noteVal   string
		titleVal  string
		atVal     string
	)

	cmd := capp.NewCmd("add", "Append a share record for a post and site", func(c *capp.Cmd) error {
		postKey := model.NormalizePost(c.Arg("post").String())
		siteKey := model.NormalizeSite(c.Arg("site").String())

		status, err := model.ParseStatus(statusVal)
		if err != nil {
			return err
		}
		at, err := parseAt(atVal)
		if err != nil {
			return err
		}

		runCtx, err := loadCtx()
		if err != nil {
			return err
		}

		title := titleVal
		if title == "" {
			title = runCtx.titleOf(postKey)
		}
		if title == postKey {
			title = ""
		}

		draft := draftVal
		if draft == "" {
			draft = findDraft(runCtx.Paths.ShareDir, postKey)
		}

		event := model.Event{
			At: at, Post: postKey, Site: siteKey, Status: status,
			URL: strings.TrimSpace(urlVal), Draft: draft, Title: title,
			Note: strings.TrimSpace(noteVal),
		}
		if err := runCtx.Store.Append(event); err != nil {
			return err
		}

		fmt.Printf("recorded %s [%s] at %s\n", pair(postKey, siteKey), status, at.Format("2006-01-02 15:04"))
		if _, ok := sites.Get(siteKey); !ok {
			fmt.Fprintf(os.Stderr, "note: %q is not in the built-in registry, run 'blogshare sites' to see known keys\n", siteKey)
		}
		if draft == "" {
			fmt.Fprintf(os.Stderr, "note: no share draft linked; pass --draft <path> when a draft exists\n")
		}
		printState(runCtx, postKey, siteKey)
		return nil
	})

	cmd.Aliases = []string{"a", "record"}
	cmd.Config(addCommonFlags, func(c *capp.Cmd) {
		c.StringVar(&statusVal, "status", "published", "share status: planned|published|blocked|removed|failed;s")
		c.StringVar(&urlVal, "url", "", "share URL;u")
		c.StringVar(&draftVal, "draft", "", "draft file, repo relative, eg share/hn/miglite.md;d")
		c.StringVar(&noteVal, "note", "", "free-form note, eg flair or blocker;n")
		c.StringVar(&titleVal, "title", "", "post title stored on the record (default: from front matter);t")
		c.StringVar(&atVal, "at", "", "record time, eg '2026-09-28 20:30' (default now)")
		c.AddArg("post", "post key, eg blog/2026/sshc-intro; see 'blogshare posts'", true)
		c.AddArg("site", "site key, eg hn or reddit/r/golang; see 'blogshare sites'", true)
	})
	return cmd
}

// newListCmd reads all records with filters.
func newListCmd() *capp.Cmd {
	var (
		postVal   string
		siteVal   string
		statusVal string
		queryVal  string
		asJSON    bool
		limit     int
	)

	cmd := capp.NewCmd("list", "List share records (latest state per post/site)", func(c *capp.Cmd) error {
		runCtx, err := loadCtx()
		if err != nil {
			return err
		}

		items := report.FilterRecords(runCtx.dataset().Records, report.Filter{
			Post: postVal, Site: siteVal, Status: statusVal, Query: queryVal,
		})
		if limit > 0 && len(items) > limit {
			items = items[:limit]
		}

		if asJSON {
			return printJSON(map[string]any{"total": len(items), "items": items})
		}

		if len(items) == 0 {
			fmt.Println("no records matched")
			return nil
		}

		w := tabwriter.NewWriter(os.Stdout, 0, 0, 2, ' ', 0)
		_, _ = fmt.Fprintln(w, "AT\tPOST\tSITE\tSTATUS\tURL\tNOTE")
		for _, r := range items {
			_, _ = fmt.Fprintf(w, "%s\t%s\t%s\t%s\t%s\t%s\n",
				displayTime(r.At), r.Post, r.Site, r.Status, r.URL, r.Note)
		}
		_ = w.Flush()
		fmt.Printf("\n%d record(s), file: %s\n", len(items), runCtx.Paths.RecordsFile)
		return nil
	})

	cmd.Aliases = []string{"ls"}
	cmd.Config(addCommonFlags, func(c *capp.Cmd) {
		c.StringVar(&postVal, "post", "", "filter by post key;p")
		c.StringVar(&siteVal, "site", "", "filter by site key;s")
		c.StringVar(&statusVal, "status", "", "filter by status")
		c.StringVar(&queryVal, "query", "", "free text search;q")
		c.IntVar(&limit, "limit", 0, "max rows, 0 = all;l")
		c.BoolVar(&asJSON, "json", false, "output JSON;j")
	})
	return cmd
}

// newShowCmd shows one post: its records and the sites still pending.
func newShowCmd() *capp.Cmd {
	var asJSON bool

	cmd := capp.NewCmd("show", "Show one post: records, draft links and pending sites", func(c *capp.Cmd) error {
		postKey := model.NormalizePost(c.Arg("post").String())

		runCtx, err := loadCtx()
		if err != nil {
			return err
		}
		ds := runCtx.dataset()
		items := report.FilterRecords(ds.Records, report.Filter{Post: postKey})
		pending := report.PendingFor(ds, postKey)

		if asJSON {
			return printJSON(map[string]any{
				"post":    postKey,
				"title":   runCtx.titleOf(postKey),
				"records": items,
				"pending": pending,
			})
		}

		title := runCtx.titleOf(postKey)
		fmt.Printf("post:  %s\n", postKey)
		if title != postKey {
			fmt.Printf("title: %s\n", title)
		}
		fmt.Println()

		if len(items) == 0 {
			fmt.Println("no records yet")
		} else {
			w := tabwriter.NewWriter(os.Stdout, 0, 0, 2, ' ', 0)
			_, _ = fmt.Fprintln(w, "AT\tSITE\tSTATUS\tURL\tDRAFT\tNOTE")
			for _, r := range items {
				draft := r.Draft
				if draft != "" && !r.DraftExists {
					draft += " (missing)"
				}
				_, _ = fmt.Fprintf(w, "%s\t%s\t%s\t%s\t%s\t%s\n",
					displayTime(r.At), r.Site, r.Status, r.URL, draft, r.Note)
			}
			_ = w.Flush()
		}

		fmt.Printf("\npending sites (%d): %s\n", len(pending), joinSites(pending))
		return nil
	})

	cmd.Aliases = []string{"view"}
	cmd.Config(addCommonFlags, func(c *capp.Cmd) {
		c.BoolVar(&asJSON, "json", false, "output JSON;j")
		c.AddArg("post", "post key, eg blog/2026/sshc-intro", true)
	})
	return cmd
}

// newPendingCmd lists registry sites a post has not been published to.
func newPendingCmd() *capp.Cmd {
	var (
		postVal  string
		siteVal  string
		asJSON   bool
		showURLs bool
	)

	cmd := capp.NewCmd("pending", "List registry sites a post has not been published to", func(c *capp.Cmd) error {
		runCtx, err := loadCtx()
		if err != nil {
			return err
		}
		ds := runCtx.dataset()

		items := report.FilterPending(ds.Pending, postVal, siteVal)
		if postVal != "" {
			items = report.FilterPending(report.PendingFor(ds, postVal), "", siteVal)
		}

		if asJSON {
			return printJSON(map[string]any{"total": len(items), "items": items})
		}
		if len(items) == 0 {
			fmt.Println("nothing pending")
			return nil
		}

		grouped := map[string][]report.PendingItem{}
		order := make([]string, 0, len(items))
		for _, it := range items {
			if _, ok := grouped[it.Post]; !ok {
				order = append(order, it.Post)
			}
			grouped[it.Post] = append(grouped[it.Post], it)
		}
		for _, postKey := range order {
			title := runCtx.titleOf(postKey)
			fmt.Printf("%s  (%d pending)\n", postKey, len(grouped[postKey]))
			if title != postKey {
				fmt.Printf("  %s\n", title)
			}
			for _, it := range grouped[postKey] {
				if showURLs {
					fmt.Printf("  - %-22s %s\n", it.Site, it.SiteURL)
				} else {
					fmt.Printf("  - %s\n", it.Site)
				}
			}
			fmt.Println()
		}
		return nil
	})

	cmd.Config(addCommonFlags, func(c *capp.Cmd) {
		c.StringVar(&postVal, "post", "", "only this post key;p")
		c.StringVar(&siteVal, "site", "", "only matching site keys;s")
		c.BoolVar(&showURLs, "urls", false, "show site URLs;u")
		c.BoolVar(&asJSON, "json", false, "output JSON;j")
	})
	return cmd
}

// printState prints the current state of one pair after a write.
func printState(runCtx *ctx, postKey, siteKey string) {
	for _, r := range report.FilterRecords(runCtx.dataset().Records, report.Filter{Post: postKey, Site: siteKey}) {
		if r.Post == postKey && r.Site == siteKey {
			fmt.Printf("current: %s %s\n", r.Status, displayTime(r.At))
			return
		}
	}
}

// findDraft guesses the draft file of a post: share/<something>/<slug>.md.
func findDraft(shareDir, postKey string) string {
	slug := postKey
	if i := strings.LastIndex(postKey, "/"); i >= 0 {
		slug = postKey[i+1:]
	}
	if slug == "" {
		return ""
	}

	matches, err := filepath.Glob(filepath.Join(shareDir, "*", slug+".md"))
	if err != nil || len(matches) != 1 {
		return ""
	}
	rel, err := filepath.Rel(filepath.Dir(shareDir), matches[0])
	if err != nil {
		return ""
	}
	return filepath.ToSlash(rel)
}

func joinSites(items []report.PendingItem) string {
	keys := make([]string, 0, len(items))
	for _, it := range items {
		keys = append(keys, it.Site)
	}
	return strings.Join(keys, ", ")
}

func displayTime(rfc3339 string) string {
	if rfc3339 == "" {
		return ""
	}
	t, err := time.Parse(time.RFC3339, rfc3339)
	if err != nil {
		return rfc3339
	}
	return t.Local().Format("2006-01-02 15:04")
}
