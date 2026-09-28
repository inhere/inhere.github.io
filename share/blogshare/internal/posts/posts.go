// Package posts scans the zola content directory for posts and derives the
// canonical post key used by the share records.
package posts

import (
	"fmt"
	"os"
	"path/filepath"
	"regexp"
	"sort"
	"strings"
	"time"

	"github.com/BurntSushi/toml"
	"github.com/inhere/blogshare/internal/model"
	"gopkg.in/yaml.v3"
)

// Post is one content page found on disk.
type Post struct {
	// Key is the canonical record key: the URL path form, eg
	// "blog/2026/sshc-intro" for content/blog/2026/07-11-sshc-intro.md.
	Key   string `json:"post"`
	Title string `json:"title"`
	// Date is the front matter date as YYYY-MM-DD ("" when unset).
	Date string `json:"date"`
	// Path is the repository relative markdown path.
	Path  string `json:"path"`
	Draft bool   `json:"draft,omitempty"`
	Lang  string `json:"lang,omitempty"`
}

var langSuffixRe = regexp.MustCompile(`\.[a-z]{2}(?:-[A-Za-z]{2,4})?$`)

var skipDirs = map[string]bool{".git": true, ".github": true, "themes": true, "public": true, "templates": true}

// Scan walks contentDir and returns all posts sorted by key.
//
// Files without TOML front matter (no leading "+++") and non-markdown files are
// skipped; `_index.md` section files are skipped too.
func Scan(contentDir string) ([]Post, error) {
	if !isDir(contentDir) {
		return nil, nil
	}

	var list []Post
	err := filepath.WalkDir(contentDir, func(p string, d os.DirEntry, err error) error {
		if err != nil {
			return err
		}
		if d.IsDir() {
			if skipDirs[d.Name()] {
				return filepath.SkipDir
			}
			return nil
		}
		if !strings.HasSuffix(strings.ToLower(d.Name()), ".md") || isSectionFile(d.Name()) {
			return nil
		}

		post, err := parseFile(contentDir, p)
		if err != nil {
			return err
		}
		if post.Key != "" {
			list = append(list, post)
		}
		return nil
	})
	if err != nil {
		return nil, err
	}

	sort.Slice(list, func(i, j int) bool { return list[i].Key < list[j].Key })
	return list, nil
}

// Find returns the post with the given key.
func Find(list []Post, key string) (Post, bool) {
	key = model.NormalizePost(key)
	for _, p := range list {
		if p.Key == key {
			return p, true
		}
	}
	return Post{}, false
}

// Title returns the title of a key, or the key itself when unknown.
func Title(list []Post, key string) string {
	if p, ok := Find(list, key); ok && p.Title != "" {
		return p.Title
	}
	return ""
}

type frontMatter struct {
	Title      string `toml:"title" yaml:"title"`
	Slug       string `toml:"slug" yaml:"slug"`
	Draft      bool   `toml:"draft" yaml:"draft"`
	Date       any    `toml:"date" yaml:"date"`
	Taxonomies struct {
		Tags []string `toml:"tags" yaml:"tags"`
	} `toml:"taxonomies" yaml:"taxonomies"`
}

// isSectionFile reports whether the file is a zola section file, including the
// localized variants (_index.md, _index.en.md, _index.zh-CN.md).
func isSectionFile(name string) bool {
	name = strings.TrimSuffix(name, filepath.Ext(name))
	name = langSuffixRe.ReplaceAllString(name, "")
	return name == "_index"
}

// frontMatterDelims lists the supported front matter formats: TOML (+++) first,
// then YAML (---). Blog posts in this repository use YAML.
var frontMatterDelims = []struct {
	open, close, kind string
}{
	{"+++", "\n+++", "toml"},
	{"---", "\n---", "yaml"},
}

// parseFrontMatter extracts and decodes the front matter block.
// ok is false when the file has no front matter (not a zola page).
func parseFrontMatter(text string) (fm frontMatter, ok bool, err error) {
	for _, d := range frontMatterDelims {
		if !strings.HasPrefix(text, d.open) {
			continue
		}
		rest := text[len(d.open):]
		idx := strings.Index(rest, d.close)
		if idx < 0 {
			return frontMatter{}, false, fmt.Errorf("unterminated front matter")
		}
		block := rest[:idx]

		if d.kind == "yaml" {
			if err := yaml.Unmarshal([]byte(block), &fm); err != nil {
				return frontMatter{}, false, fmt.Errorf("parse YAML front matter: %w", err)
			}
			return fm, true, nil
		}
		if _, err := toml.Decode(block, &fm); err != nil {
			return frontMatter{}, false, fmt.Errorf("parse TOML front matter: %w", err)
		}
		return fm, true, nil
	}
	return frontMatter{}, false, nil
}

func parseFile(contentDir, file string) (Post, error) {
	raw, err := os.ReadFile(file)
	if err != nil {
		return Post{}, fmt.Errorf("read %s: %w", file, err)
	}

	text := strings.ReplaceAll(string(raw), "\r\n", "\n")
	text = strings.TrimLeft(text, "\ufeff")

	fm, ok, err := parseFrontMatter(text)
	if err != nil {
		return Post{}, fmt.Errorf("%s: %w", file, err)
	}
	if !ok {
		return Post{}, nil // not a zola page
	}

	rel, err := filepath.Rel(contentDir, file)
	if err != nil {
		return Post{}, fmt.Errorf("rel path of %s: %w", file, err)
	}
	rel = filepath.ToSlash(rel)

	post := Post{
		Path:  "content/" + rel,
		Title: fm.Title,
		Draft: fm.Draft,
		Date:  formatDate(fm.Date),
	}
	post.Key, post.Lang = buildKey(rel, fm.Slug)
	return post, nil
}

// buildKey converts a content relative path into the canonical key:
// date prefix stripped, language suffix split off, optional slug override.
func buildKey(rel, slug string) (key, lang string) {
	key = strings.TrimSuffix(rel, filepath.Ext(rel))

	name := path0(key)
	if m := langSuffixRe.FindString(key); m != "" {
		lang = strings.TrimPrefix(m, ".")
		key = strings.TrimSuffix(key, m)
		name = path0(key)
	}

	name = model.StripDatePrefix(name)
	if name == "" {
		name = "index"
	}
	if slug != "" {
		name = slug
	}
	if dir := dirOf(key); dir != "" {
		if name == "index" {
			return dir, lang // colocated index.md is the directory page
		}
		return dir + "/" + name, lang
	}
	return name, lang
}

func path0(p string) string {
	if i := strings.LastIndex(p, "/"); i >= 0 {
		return p[i+1:]
	}
	return p
}

func dirOf(p string) string {
	if i := strings.LastIndex(p, "/"); i >= 0 {
		return p[:i]
	}
	return ""
}

func formatDate(v any) string {
	switch d := v.(type) {
	case nil:
		return ""
	case time.Time:
		return d.Format("2006-01-02")
	case string:
		if len(d) >= 10 {
			return d[:10]
		}
		return d
	default:
		return fmt.Sprint(d)
	}
}

func isDir(p string) bool {
	st, err := os.Stat(p)
	return err == nil && st.IsDir()
}
