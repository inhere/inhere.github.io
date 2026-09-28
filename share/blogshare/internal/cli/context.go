package cli

import (
	"fmt"
	"time"

	"github.com/gookit/goutil/cflag/capp"
	"github.com/inhere/blogshare/internal/model"
	"github.com/inhere/blogshare/internal/posts"
	"github.com/inhere/blogshare/internal/report"
	"github.com/inhere/blogshare/internal/sites"
	"github.com/inhere/blogshare/internal/store"
)

// common flags shared by every command.
var (
	rootFlag string
	fileFlag string
)

// addCommonFlags registers --root/--file on a command.
func addCommonFlags(c *capp.Cmd) {
	c.StringVar(&rootFlag, "root", "", "blog repository root;auto;R")
	c.StringVar(&fileFlag, "file", "", "records JSONL file (default <root>/share/records.jsonl);;F")
}

// ctx is the loaded state every command works with.
type ctx struct {
	Paths   store.Paths
	Store   *store.Store
	Records []model.Record
	Posts   []posts.Post
	Sites   []sites.Site
}

// loadCtx resolves paths and reads all records.
func loadCtx() (*ctx, error) {
	paths, err := store.Locate(rootFlag, fileFlag)
	if err != nil {
		return nil, err
	}

	st := store.New(paths.RecordsFile)
	records, err := st.Load()
	if err != nil {
		return nil, err
	}

	postList, err := posts.Scan(paths.ContentDir)
	if err != nil {
		return nil, err
	}

	return &ctx{Paths: paths, Store: st, Records: records, Posts: postList, Sites: sites.All()}, nil
}

// dataset derives all views for the loaded context.
func (c *ctx) dataset() report.Dataset {
	return report.Build(report.Options{
		Records:     c.Records,
		Posts:       c.Posts,
		Sites:       c.Sites,
		DraftExists: c.draftExists,
		Now:         time.Now(),
	})
}

// draftExists checks a repository relative draft path.
func (c *ctx) draftExists(rel string) bool {
	return store.DraftExists(c.Paths.Root)(rel)
}

// titleOf returns the title of a post key, falling back to the key itself.
func (c *ctx) titleOf(key string) string {
	if t := posts.Title(c.Posts, key); t != "" {
		return t
	}
	return key
}

// printJSON renders a value as indented JSON to stdout.
func printJSON(v any) error {
	data, err := jsonMarshalIndent(v)
	if err != nil {
		return err
	}
	fmt.Println(string(data))
	return nil
}

// message formats a "post -> site" prefix for CLI output.
func pair(post, site string) string {
	return fmt.Sprintf("%s -> %s", post, site)
}
