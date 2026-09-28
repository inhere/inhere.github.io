package posts

import (
	"os"
	"path/filepath"
	"strings"
	"testing"

	"github.com/gookit/goutil/x/assert"
)

func writePage(t *testing.T, contentDir, rel, body string) {
	t.Helper()
	file := filepath.Join(contentDir, filepath.FromSlash(rel))
	assert.NoErr(t, os.MkdirAll(filepath.Dir(file), 0o755))
	assert.NoErr(t, os.WriteFile(file, []byte(body), 0o644))
}

func TestScan(t *testing.T) {
	dir := t.TempDir()

	writePage(t, dir, "blog/2026/07-11-sshc-intro.md", `+++
title = "sshc: ssh client"
date = 2026-07-11
[taxonomies]
tags = ["go", "ssh"]
+++

body
`)
	writePage(t, dir, "blog/2026/09-20-gookit-rotatefile-intro.en.md", `+++
title = "rotatefile"
date = 2026-09-20
+++

body
`)
	writePage(t, dir, "projects/phppkg-easytpl/index.md", `+++
title = "PHP - EasyTpl"
weight = 21
+++

body
`)
	writePage(t, dir, "pages/about.md", `+++
title = "About"
slug = "about-me"
+++

body
`)
	// the blog uses YAML front matter for posts
	writePage(t, dir, "blog/2026/07-11-sshc-intro-yaml.md", `---
title: "sshc: 把零散的 SSH 命令整理成工作流"
date: 2026-07-11T16:30:00
taxonomies:
  tags: [sshc, ssh]
---

body
`)
	// skipped on purpose
	writePage(t, dir, "blog/_index.md", "+++\ntitle = \"Blog\"\n+++\n")
	writePage(t, dir, "blog/2026/_index.en.md", "+++\ntransparent = true\n+++\n")
	writePage(t, dir, "blog/notes.txt", "plain text\n")

	list, err := Scan(dir)
	assert.NoErr(t, err)
	assert.Len(t, list, 5)

	yamlPost, ok := keysOf(list)["blog/2026/sshc-intro-yaml"]
	assert.True(t, ok)
	assert.Eq(t, "sshc: 把零散的 SSH 命令整理成工作流", yamlPost.Title)
	assert.Eq(t, "2026-07-11", yamlPost.Date)
	for _, p := range list {
		assert.False(t, strings.Contains(p.Key, "_index"))
	}

	keys := map[string]Post{}
	for _, p := range list {
		keys[p.Key] = p
	}

	intro, ok := keys["blog/2026/sshc-intro"]
	assert.True(t, ok)
	assert.Eq(t, "sshc: ssh client", intro.Title)
	assert.Eq(t, "2026-07-11", intro.Date)
	assert.Eq(t, "content/blog/2026/07-11-sshc-intro.md", intro.Path)

	en, ok := keys["blog/2026/gookit-rotatefile-intro"]
	assert.True(t, ok)
	assert.Eq(t, "en", en.Lang)

	_, ok = keys["projects/phppkg-easytpl"]
	assert.True(t, ok)

	about, ok := keys["pages/about-me"]
	assert.True(t, ok)
	assert.Eq(t, "About", about.Title)

	_, ok = Find(list, "content/blog/2026/07-11-sshc-intro.md")
	assert.True(t, ok)
	assert.Eq(t, "sshc: ssh client", Title(list, "blog/2026/sshc-intro"))
	assert.Eq(t, "", Title(list, "blog/2026/unknown"))
}

func keysOf(list []Post) map[string]Post {
	out := make(map[string]Post, len(list))
	for _, p := range list {
		out[p.Key] = p
	}
	return out
}

func TestScanMissingDir(t *testing.T) {
	list, err := Scan(filepath.Join(t.TempDir(), "nope"))
	assert.NoErr(t, err)
	assert.Len(t, list, 0)
}

func TestBuildKey(t *testing.T) {
	key, lang := buildKey("blog/2016-10-08_a-post-with-dates.md", "")
	assert.Eq(t, "blog/a-post-with-dates", key)
	assert.Eq(t, "", lang)

	key, lang = buildKey("blog/2026/sshc-intro.en.md", "")
	assert.Eq(t, "blog/2026/sshc-intro", key)
	assert.Eq(t, "en", lang)

	key, _ = buildKey("blog/2026/07-11-sshc-intro.md", "custom-slug")
	assert.Eq(t, "blog/2026/custom-slug", key)

	key, _ = buildKey("blog/2026/index.md", "")
	assert.Eq(t, "blog/2026", key)
}
