// Package sites holds the built-in registry of sharing targets.
//
// The list mirrors share/community-sharing.md and share/AGENTS.md of the blog
// repository, ordered by the recommended publishing order.
package sites

import (
	"sort"
	"strings"

	"github.com/inhere/blogshare/internal/model"
)

// Site is one sharing target.
type Site struct {
	Key       string `json:"key"`
	Name      string `json:"name"`
	URL       string `json:"url"`
	SubmitURL string `json:"submit_url,omitempty"`
	Lang      string `json:"lang"`
	Notes     string `json:"notes"`
}

// All returns the built-in registry in recommended publishing order.
func All() []Site {
	list := make([]Site, len(builtin))
	copy(list, builtin)
	return list
}

// Get finds a site by (normalized) key.
func Get(key string) (Site, bool) {
	key = model.NormalizeSite(key)
	for _, s := range builtin {
		if s.Key == key {
			return s, true
		}
	}
	return Site{}, false
}

// Name returns the display name of a site key, falling back to the key itself.
func Name(key string) string {
	if s, ok := Get(key); ok {
		return s.Name
	}
	return key
}

// Keys returns all registry keys.
func Keys() []string {
	keys := make([]string, 0, len(builtin))
	for _, s := range builtin {
		keys = append(keys, s.Key)
	}
	return keys
}

// SortedByKey returns the registry sorted by key.
func SortedByKey() []Site {
	list := All()
	sort.Slice(list, func(i, j int) bool { return list[i].Key < list[j].Key })
	return list
}

// Match reports whether key matches the site by key or display name
// (case-insensitive).
func Match(s Site, query string) bool {
	query = strings.ToLower(strings.TrimSpace(query))
	if query == "" {
		return true
	}
	return strings.Contains(strings.ToLower(s.Key), query) ||
		strings.Contains(strings.ToLower(s.Name), query)
}

var builtin = []Site{
	{
		Key: "reddit/r/golang", Name: "Reddit · r/golang", URL: "https://www.reddit.com/r/golang/",
		Lang: "en", Notes: "先收 Go 社区反馈；讨论视角，避免产品公告腔与 I built 类标题",
	},
	{
		Key: "hn", Name: "Hacker News", URL: "https://news.ycombinator.com/",
		SubmitURL: "https://news.ycombinator.com/submit", Lang: "en",
		Notes: "Show HN；标题短而直白，主链接优先 repo",
	},
	{
		Key: "goforum", Name: "Go Forum", URL: "https://forum.golangbridge.org/",
		Lang: "en", Notes: "Feedback wanted 写法，补 Go 场景与设计取舍",
	},
	{
		Key: "gophers-slack", Name: "Gophers Slack", URL: "https://invite.slack.golangbridge.org/",
		Lang: "en", Notes: "发 #projects / #tools，文案要短",
	},
	{
		Key: "v2ex", Name: "V2EX", URL: "https://www.v2ex.com/",
		Lang: "zh", Notes: "节点 Go / 程序员，正文坦诚不要像推广",
	},
	{
		Key: "dev.to", Name: "Dev.to", URL: "https://dev.to/",
		Lang: "en", Notes: "同步英文全文，文末放 repo",
	},
	{
		Key: "juejin", Name: "掘金", URL: "https://juejin.cn/",
		Lang: "zh", Notes: "同步中文全文，不要只发链接",
	},
	{
		Key: "lobsters", Name: "Lobsters", URL: "https://lobste.rs/",
		Lang: "en", Notes: "工程氛围，self-promo 敏感，需主动说明作者身份",
	},
	{
		Key: "reddit/r/commandline", Name: "Reddit · r/commandline", URL: "https://www.reddit.com/r/commandline/",
		Lang: "en", Notes: "需先完成 Read The Rules；避免 AI 项目示例",
	},
	{
		Key: "reddit/r/opensource", Name: "Reddit · r/opensource", URL: "https://www.reddit.com/r/opensource/",
		Lang: "en", Notes: "自有项目用 Promotional flair；karma 不够先别重试",
	},
	{
		Key: "hashnode", Name: "Hashnode", URL: "https://hashnode.com/",
		Lang: "en", Notes: "全文同步平台，设置 canonical 到本站原文",
	},
	{
		Key: "medium", Name: "Medium", URL: "https://medium.com/",
		Lang: "en", Notes: "可发，但开源转化一般，优先级低",
	},
	{
		Key: "x", Name: "X / Twitter", URL: "https://x.com/",
		Lang: "en", Notes: "短帖，几个 bullet + blog/repo 链接",
	},
	{
		Key: "linkedin", Name: "LinkedIn", URL: "https://www.linkedin.com/",
		Lang: "en", Notes: "偏工程复盘，少用公告腔",
	},
	{
		Key: "segmentfault", Name: "SegmentFault", URL: "https://segmentfault.com/",
		Lang: "zh", Notes: "可同步中文文章，互动不如 V2EX",
	},
	{
		Key: "oschina", Name: "OSCHINA", URL: "https://www.oschina.net/",
		Lang: "zh", Notes: "开源项目介绍与中文博客同步",
	},
	{
		Key: "zhihu", Name: "知乎", URL: "https://www.zhihu.com/",
		Lang: "zh", Notes: "改为问题导向文章，不要直接发广告",
	},
	{
		Key: "github-topics", Name: "GitHub Topics", URL: "https://github.com/topics",
		Lang: "en", Notes: "长期发现入口，给 repo 配好 topics",
	},
	{
		Key: "awesome-go", Name: "Awesome Go", URL: "https://github.com/avelino/awesome-go",
		Lang: "en", Notes: "项目成熟后再提交：README/release/测试齐全",
	},
	{
		Key: "producthunt", Name: "Product Hunt", URL: "https://www.producthunt.com/",
		Lang: "en", Notes: "开发者小工具优先级低，需要 landing page/demo",
	},
}
