package cli

import (
	"encoding/json"
	"flag"
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

// setFlags lists the option names the user actually passed, so update can
// distinguish "leave unchanged" from "clear this field".
func setFlags(c *capp.Cmd) map[string]bool {
	set := map[string]bool{}
	c.FlagSet.Visit(func(f *flag.Flag) { set[f.Name] = true })
	return set
}

// newAddCmd creates one share record and prints its id.
func newAddCmd() *capp.Cmd {
	var (
		statusVal string
		urlVal    string
		draftVal  string
		noteVal   string
		titleVal  string
		atVal     string
	)

	cmd := capp.NewCmd("add", "Create a share record for a post and site, print its id", func(c *capp.Cmd) error {
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

		title := strings.TrimSpace(titleVal)
		if title == "" {
			title = runCtx.titleOf(postKey)
			if title == postKey {
				title = ""
			}
		}

		draft := strings.TrimSpace(draftVal)
		if draft == "" {
			draft = findDraft(runCtx.Paths.ShareDir, postKey)
		}

		rec, err := runCtx.Store.Add(model.Record{
			Post: postKey, Site: siteKey, Status: status,
			URL: strings.TrimSpace(urlVal), Draft: draft, Title: title,
			Note: strings.TrimSpace(noteVal), CreateAt: at,
		})
		if err != nil {
			return err
		}

		fmt.Printf("created %s  %s -> %s  [%s]  %s\n",
			rec.ID, rec.Post, rec.Site, rec.Status, displayTime(rec.CreateAt.Format(time.RFC3339)))
		if _, ok := sites.Get(siteKey); !ok {
			fmt.Fprintf(os.Stderr, "note: %q is not in the built-in registry, run 'blogshare sites' to see known keys\n", siteKey)
		}
		if rec.Draft == "" {
			fmt.Fprintf(os.Stderr, "note: no share draft linked; pass --draft <path> when a draft exists\n")
		}
		return nil
	})

	cmd.Aliases = []string{"a", "new"}
	cmd.Config(addCommonFlags, func(c *capp.Cmd) {
		c.StringVar(&statusVal, "status", "published", "share status: planned|published|blocked|removed|failed;s")
		c.StringVar(&urlVal, "url", "", "share URL;u")
		c.StringVar(&draftVal, "draft", "", "draft file, repo relative, eg share/hn/miglite.md;d")
		c.StringVar(&noteVal, "note", "", "free-form note, eg flair or blocker;n")
		c.StringVar(&titleVal, "title", "", "post title stored on the record (default: from front matter);t")
		c.StringVar(&atVal, "at", "", "create_at value, eg '2026-09-28 20:30' (default now, use it to backfill)")
		c.AddArg("post", "post key, eg blog/2026/sshc-intro; see 'blogshare posts'", true)
		c.AddArg("site", "site key, eg hn or reddit/r/golang; see 'blogshare sites'", true)
	})
	return cmd
}

// newUpdateCmd patches one record by id.
func newUpdateCmd() *capp.Cmd {
	var (
		postVal   string
		siteVal   string
		statusVal string
		urlVal    string
		draftVal  string
		noteVal   string
		titleVal  string
		atVal     string
	)

	cmd := capp.NewCmd("update", "Update one record by id (only the given flags change)", func(c *capp.Cmd) error {
		id := strings.ToLower(strings.TrimSpace(c.Arg("id").String()))
		set := setFlags(c)

		patch := model.Patch{}
		if set["post"] {
			v := model.NormalizePost(postVal)
			patch.Post = &v
		}
		if set["site"] {
			v := model.NormalizeSite(siteVal)
			patch.Site = &v
		}
		if set["status"] {
			v, err := model.ParseStatus(statusVal)
			if err != nil {
				return err
			}
			patch.Status = &v
		}
		if set["url"] {
			v := strings.TrimSpace(urlVal)
			patch.URL = &v
		}
		if set["draft"] {
			v := strings.TrimSpace(draftVal)
			patch.Draft = &v
		}
		if set["note"] {
			v := strings.TrimSpace(noteVal)
			patch.Note = &v
		}
		if set["title"] {
			v := strings.TrimSpace(titleVal)
			patch.Title = &v
		}
		if set["at"] {
			v, err := parseAt(atVal)
			if err != nil {
				return err
			}
			patch.CreateAt = &v
		}

		runCtx, err := loadCtx()
		if err != nil {
			return err
		}
		rec, err := runCtx.Store.Update(id, patch)
		if err != nil {
			return err
		}

		fmt.Printf("updated %s  %s -> %s  [%s]\n", rec.ID, rec.Post, rec.Site, rec.Status)
		if rec.URL != "" {
			fmt.Printf("  url:   %s\n", rec.URL)
		}
		if rec.Draft != "" {
			fmt.Printf("  draft: %s\n", rec.Draft)
		}
		if rec.Note != "" {
			fmt.Printf("  note:  %s\n", rec.Note)
		}
		fmt.Printf("  create_at: %s  update_at: %s\n",
			displayTime(rec.CreateAt.Format(time.RFC3339)), displayTime(rec.UpdateAt.Format(time.RFC3339)))
		return nil
	})

	cmd.Aliases = []string{"up", "set"}
	cmd.Config(addCommonFlags, func(c *capp.Cmd) {
		c.StringVar(&postVal, "post", "", "new post key;p")
		c.StringVar(&siteVal, "site", "", "new site key;s")
		c.StringVar(&statusVal, "status", "", "new status: planned|published|blocked|removed|failed")
		c.StringVar(&urlVal, "url", "", "new share URL;u")
		c.StringVar(&draftVal, "draft", "", "new draft path;d")
		c.StringVar(&noteVal, "note", "", "new note;n")
		c.StringVar(&titleVal, "title", "", "new title;t")
		c.StringVar(&atVal, "at", "", "new create_at, eg '2026-09-28 20:30'")
		c.AddArg("id", "record id, see 'blogshare list'", true)
	})
	return cmd
}

// newRmCmd deletes one record by id.
func newRmCmd() *capp.Cmd {
	var asJSON bool

	cmd := capp.NewCmd("rm", "Delete one record by id", func(c *capp.Cmd) error {
		id := strings.ToLower(strings.TrimSpace(c.Arg("id").String()))

		runCtx, err := loadCtx()
		if err != nil {
			return err
		}
		removed, err := runCtx.Store.Delete(id)
		if err != nil {
			return err
		}

		if asJSON {
			return printJSON(removed)
		}
		fmt.Printf("removed %s  %s -> %s  [%s]\n", removed.ID, removed.Post, removed.Site, removed.Status)
		return nil
	})

	cmd.Aliases = []string{"del", "delete"}
	cmd.Config(addCommonFlags, func(c *capp.Cmd) {
		c.BoolVar(&asJSON, "json", false, "print the removed record as JSON;j")
		c.AddArg("id", "record id, see 'blogshare list'", true)
	})
	return cmd
}

// newListCmd reads all records with filters.
func newListCmd() *capp.Cmd {
	var (
		idVal     string
		postVal   string
		siteVal   string
		statusVal string
		queryVal  string
		asJSON    bool
		limit     int
	)

	cmd := capp.NewCmd("list", "List share records", func(c *capp.Cmd) error {
		runCtx, err := loadCtx()
		if err != nil {
			return err
		}

		items := report.FilterRecords(runCtx.dataset().Records, report.Filter{
			ID: idVal, Post: postVal, Site: siteVal, Status: statusVal, Query: queryVal,
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
		_, _ = fmt.Fprintln(w, "ID\tUPDATED\tPOST\tSITE\tSTATUS\tURL\tDRAFT\tNOTE")
		for _, r := range items {
			draft := r.Draft
			if draft != "" && !r.DraftExists {
				draft += " (missing)"
			}
			_, _ = fmt.Fprintf(w, "%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\n",
				r.ID, displayTime(r.UpdateAt), r.Post, r.Site, r.Status, r.URL, draft, r.Note)
		}
		_ = w.Flush()
		fmt.Printf("\n%d record(s), file: %s\n", len(items), runCtx.Paths.RecordsFile)
		return nil
	})

	cmd.Aliases = []string{"ls"}
	cmd.Config(addCommonFlags, func(c *capp.Cmd) {
		c.StringVar(&idVal, "id", "", "filter by record id")
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

	cmd := capp.NewCmd("show", "Show one post: records (with ids), draft links and pending sites", func(c *capp.Cmd) error {
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
			_, _ = fmt.Fprintln(w, "ID\tUPDATED\tSITE\tSTATUS\tURL\tDRAFT\tNOTE")
			for _, r := range items {
				draft := r.Draft
				if draft != "" && !r.DraftExists {
					draft += " (missing)"
				}
				_, _ = fmt.Fprintf(w, "%s\t%s\t%s\t%s\t%s\t%s\t%s\n",
					r.ID, displayTime(r.UpdateAt), r.Site, r.Status, r.URL, draft, r.Note)
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
