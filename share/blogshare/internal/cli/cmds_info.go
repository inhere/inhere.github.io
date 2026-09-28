package cli

import (
	"fmt"
	"os"
	"strings"
	"text/tabwriter"

	"github.com/gookit/goutil/cflag/capp"
	"github.com/inhere/blogshare/internal/posts"
	"github.com/inhere/blogshare/internal/report"
	"github.com/inhere/blogshare/internal/sites"
)

// newSitesCmd prints the built-in sharing registry with its counters.
func newSitesCmd() *capp.Cmd {
	var (
		query  string
		asJSON bool
	)

	cmd := capp.NewCmd("sites", "List known sharing sites with publish counters", func(c *capp.Cmd) error {
		runCtx, err := loadCtx()
		if err != nil {
			return err
		}
		ds := runCtx.dataset()

		rows := make([]report.SiteRow, 0, len(ds.Sites))
		for _, row := range ds.Sites {
			site, ok := sites.Get(row.Key)
			if ok && !sites.Match(site, query) {
				continue
			}
			if !ok && query != "" && !strings.Contains(row.Key, strings.ToLower(query)) {
				continue
			}
			rows = append(rows, row)
		}

		if asJSON {
			return printJSON(map[string]any{"total": len(rows), "items": rows})
		}

		w := tabwriter.NewWriter(os.Stdout, 0, 0, 2, ' ', 0)
		_, _ = fmt.Fprintln(w, "SITE\tLANG\tPOSTS\tNAME\tURL")
		for _, row := range rows {
			_, _ = fmt.Fprintf(w, "%s\t%s\t%d\t%s\t%s\n", row.Key, row.Lang, row.Published, row.Name, row.URL)
		}
		_ = w.Flush()
		fmt.Printf("\n%d site(s)\n", len(rows))
		return nil
	})

	cmd.Aliases = []string{"site"}
	cmd.Config(addCommonFlags, func(c *capp.Cmd) {
		c.StringVar(&query, "query", "", "filter by key or name;q")
		c.BoolVar(&asJSON, "json", false, "output JSON;j")
	})
	return cmd
}

// newPostsCmd lists scanned posts and their share counters.
func newPostsCmd() *capp.Cmd {
	var (
		query   string
		section string
		asJSON  bool
		only    string
	)

	cmd := capp.NewCmd("posts", "List posts found in content/ with share counters", func(c *capp.Cmd) error {
		runCtx, err := loadCtx()
		if err != nil {
			return err
		}
		ds := runCtx.dataset()

		prefix := strings.Trim(strings.TrimSpace(section), "/")
		rows := make([]report.PostRow, 0, len(ds.Posts))
		for _, row := range ds.Posts {
			if prefix != "" && !strings.HasPrefix(row.Post, prefix+"/") && row.Post != prefix {
				continue
			}
			if query != "" && !strings.Contains(strings.ToLower(row.Post+" "+row.Title), strings.ToLower(query)) {
				continue
			}
			switch only {
			case "shared":
				if row.Published == 0 {
					continue
				}
			case "unshared":
				if row.Published > 0 {
					continue
				}
			}
			rows = append(rows, row)
		}

		if asJSON {
			return printJSON(map[string]any{"total": len(rows), "items": rows})
		}

		w := tabwriter.NewWriter(os.Stdout, 0, 0, 2, ' ', 0)
		_, _ = fmt.Fprintln(w, "POST\tDATE\tSHARED\tTITLE")
		for _, row := range rows {
			_, _ = fmt.Fprintf(w, "%s\t%s\t%d/%d\t%s\n", row.Post, row.Date, row.Published, row.SitesTotal, row.Title)
		}
		_ = w.Flush()
		fmt.Printf("\n%d post(s), content dir: %s\n", len(rows), runCtx.Paths.ContentDir)
		return nil
	})

	cmd.Aliases = []string{"post"}
	cmd.Config(addCommonFlags, func(c *capp.Cmd) {
		c.StringVar(&query, "query", "", "filter by key or title;q")
		c.StringVar(&section, "section", "", "only this content section, eg blog or projects")
		c.StringVar(&only, "only", "", "filter: shared | unshared")
		c.BoolVar(&asJSON, "json", false, "output JSON;j")
	})
	return cmd
}

// newStatsCmd prints aggregate counters.
func newStatsCmd() *capp.Cmd {
	var asJSON bool

	cmd := capp.NewCmd("stats", "Show share statistics by site, month and status", func(c *capp.Cmd) error {
		runCtx, err := loadCtx()
		if err != nil {
			return err
		}
		ds := runCtx.dataset()

		if asJSON {
			return printJSON(map[string]any{
				"summary": ds.Summary,
				"stats":   ds.Stats,
			})
		}

		s := ds.Summary
		fmt.Printf("records:   %d (%d post(s) x %d site(s))\n", s.Records, s.Posts, s.Sites)
		fmt.Printf("published: %d pair(s), pending: %d pair(s)\n", s.Published, s.Pending)
		if s.LastAt != "" {
			fmt.Printf("last:      %s\n", displayTime(s.LastAt))
		}
		fmt.Printf("file:      %s\n", runCtx.Paths.RecordsFile)

		if len(ds.Stats.BySite) > 0 {
			fmt.Println("\nby site:")
			w := tabwriter.NewWriter(os.Stdout, 0, 0, 2, ' ', 0)
			for _, row := range ds.Stats.BySite {
				_, _ = fmt.Fprintf(w, "  %s\t%d post(s)\t%s\n", row.Site, row.Posts, bar(row.Published, maxPublished(ds.Stats.BySite)))
			}
			_ = w.Flush()
		}
		if len(ds.Stats.ByMonth) > 0 {
			fmt.Println("\nby month:")
			w := tabwriter.NewWriter(os.Stdout, 0, 0, 2, ' ', 0)
			for _, row := range ds.Stats.ByMonth {
				_, _ = fmt.Fprintf(w, "  %s\t%d\t%s\n", row.Month, row.Published, bar(row.Published, maxMonth(ds.Stats.ByMonth)))
			}
			_ = w.Flush()
		}
		if len(ds.Stats.ByStatus) > 0 {
			fmt.Println("\nby status:")
			for _, row := range ds.Stats.ByStatus {
				fmt.Printf("  %-10s %d\n", row.Status, row.Count)
			}
		}
		return nil
	})

	cmd.Config(addCommonFlags, func(c *capp.Cmd) {
		c.BoolVar(&asJSON, "json", false, "output JSON;j")
	})
	return cmd
}

// newCheckCmd validates the records file and the draft links.
func newCheckCmd() *capp.Cmd {
	var asJSON bool

	cmd := capp.NewCmd("check", "Validate the records file and linked drafts", func(c *capp.Cmd) error {
		runCtx, err := loadCtx()
		if err != nil {
			return err
		}

		records, problems := runCtx.Store.LoadValidate()

		missingDrafts := make([]string, 0)
		unknownSites := make([]string, 0)
		seenSite := map[string]struct{}{}
		for _, rec := range records {
			if rec.Draft != "" && !runCtx.draftExists(rec.Draft) {
				missingDrafts = append(missingDrafts, fmt.Sprintf("%s %s -> %s: draft not found: %s", rec.ID, rec.Post, rec.Site, rec.Draft))
			}
			if _, ok := sites.Get(rec.Site); !ok {
				if _, ok := seenSite[rec.Site]; !ok {
					seenSite[rec.Site] = struct{}{}
					unknownSites = append(unknownSites, rec.Site)
				}
			}
		}

		// posts referenced by records but missing from content/
		unknownPosts := make([]string, 0)
		seenPost := map[string]struct{}{}
		for _, rec := range records {
			key := rec.Post
			if _, ok := posts.Find(runCtx.Posts, key); !ok {
				if _, ok := seenPost[key]; !ok {
					seenPost[key] = struct{}{}
					unknownPosts = append(unknownPosts, key)
				}
			}
		}

		if asJSON {
			return printJSON(map[string]any{
				"file":           runCtx.Paths.RecordsFile,
				"records":        len(records),
				"problems":       problems,
				"missing_drafts": missingDrafts,
				"unknown_sites":  unknownSites,
				"unknown_posts":  unknownPosts,
			})
		}

		reportProblems(problems, "problems")
		reportProblems(missingDrafts, "missing drafts")
		if len(unknownSites) > 0 {
			fmt.Printf("unknown sites (%d): %s\n", len(unknownSites), strings.Join(unknownSites, ", "))
		}
		if len(unknownPosts) > 0 {
			fmt.Printf("posts without a content/ file (%d): %s\n", len(unknownPosts), strings.Join(unknownPosts, ", "))
		}

		if len(problems) > 0 || len(missingDrafts) > 0 {
			return fmt.Errorf("check failed: %d problem(s), %d missing draft(s)", len(problems), len(missingDrafts))
		}
		fmt.Printf("OK: %d record(s) in %s\n", len(records), runCtx.Paths.RecordsFile)
		return nil
	})

	cmd.Config(addCommonFlags, func(c *capp.Cmd) {
		c.BoolVar(&asJSON, "json", false, "output JSON;j")
	})
	return cmd
}

func reportProblems(list []string, label string) {
	if len(list) == 0 {
		return
	}
	fmt.Printf("%s (%d):\n", label, len(list))
	for _, p := range list {
		fmt.Printf("  - %s\n", p)
	}
}

func maxPublished(rows []report.SiteStat) int {
	max := 0
	for _, r := range rows {
		if r.Published > max {
			max = r.Published
		}
	}
	return max
}

func maxMonth(rows []report.MonthRow) int {
	max := 0
	for _, r := range rows {
		if r.Published > max {
			max = r.Published
		}
	}
	return max
}

// bar renders a 24-cell bar for the CLI stats view.
func bar(n, max int) string {
	if max <= 0 {
		return ""
	}
	filled := n * 24 / max
	if filled == 0 && n > 0 {
		filled = 1
	}
	return strings.Repeat("█", filled)
}
