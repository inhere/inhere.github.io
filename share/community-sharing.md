# 技术博客/开源工具社区分享参考

适用于分享 Go 工具、技术博客、开源项目介绍。原则：不要群发同一段推广文案。每个平台都要按社区习惯改写，先讲问题和取舍，再放链接。

## 推荐发布顺序

1. `r/golang`：先收 Go 社区反馈。
2. Hacker News `Show HN`：看更广泛开发者反馈。
3. Go Forum / Gophers Slack：补充 Go 圈反馈。
4. V2EX：中文开发者反馈。
5. Dev.to / 掘金：同步中英文长文。
6. GitHub topics / README polish：长期发现入口。

## 链接选择

- Reddit：优先 blog，再 repo。
- Hacker News：repo 或 blog 都可以，取决于哪个第一屏更清楚。
- Go Forum / Slack：repo + blog。
- V2EX：中文 blog + repo。
- Dev.to / 掘金：同步完整文章，文末放 repo。

## 通用注意事项

- 明说自己是作者。
- 不要伪装成第三方推荐。
- 不要只丢链接。
- 不要在多个社区复制同一段文案。
- 不要用发布会语气。
- 先讲问题、约束和取舍，再讲工具。
- 结尾留一个具体问题，比“欢迎 star”更容易引发讨论。

## 优先社区

### Reddit

地址: https://www.reddit.com/r/golang/

推荐：`r/golang`

适合 Go 工具、库、CLI、工程取舍讨论。语气要像普通社区成员分享经验，不要像产品发布。

写法：

- 明说自己是作者。
- 先讲解决的问题。
- 再讲几个设计取舍。
- 链接放在正文后半段。
- 结尾问一个真实问题，引导讨论。

示例标题：

```text
I built a small Go migration tool for projects that prefer raw SQL files
```

避免：

```text
We're excited to announce...
revolutionary / cutting-edge / best-in-class
```

### Hacker News

地址: https://news.ycombinator.com/，提交入口: https://news.ycombinator.com/submit

推荐：`Show HN`

适合工具发布和工程取舍讨论。标题要短，第一屏讲清楚为什么需要这个工具。

示例标题：

```text
Show HN: miglite - raw SQL migrations for Go projects
```

链接选择：

- 如果 README 写得清楚，直接贴 repo。
- 如果 blog 更能讲清设计取舍，贴 blog。

### Lobsters

地址: https://lobste.rs/

技术氛围更工程化，self-promo 更敏感。适合分享 blog 或 repo，但要主动说明自己是作者。

写法：

```text
I wrote this and would like feedback on the migration workflow/design trade-offs.
```

### Go Forum

地址: https://forum.golangbridge.org/

适合温和地收 Go 社区反馈。标题不要太营销。

示例：

```text
Feedback wanted: a small raw-SQL migration tool for Go
```

### Gophers Slack

地址: https://invite.slack.golangbridge.org/，已加入后访问: https://gophers.slack.com/

适合发到 `#projects`、`#tools`、`#databases` 等频道。文案要短。

示例：

```text
I built miglite, a small raw-SQL migration tool for Go projects. It uses database/sql, keeps DB drivers out of the library dependency tree, and supports DATABASE_URL + multiple migration dirs. Feedback welcome:
https://github.com/gookit/miglite
```

## 文章平台

### Dev.to

地址: https://dev.to/

适合同步英文技术文章。读者更喜欢教程和可复制命令。可以把博客改成完整文章，文末放 repo。

标题示例：

```text
miglite: raw SQL migrations for Go projects
```

### Hashnode

地址: https://hashnode.com/

和 Dev.to 类似，适合技术文章分发。标题可以更偏教程：

```text
Managing Go database migrations with raw SQL and miglite
```

### Medium

地址: https://medium.com/

可发，但开源工具转化一般。没有现成读者时优先级低。

## 短内容平台

### X / Twitter

地址: https://x.com/

适合短帖，不适合完整解释。用要点列出价值，再贴 blog 和 repo。

示例：

```text
I built miglite, a small raw-SQL migration tool for Go.

- SQL files with UP/DOWN sections
- DATABASE_URL + MIGRATIONS_PATH
- SQLite/MySQL/PostgreSQL in the CLI
- no bundled DB driver dependency when used as a library

Blog: https://inhere.github.io/en/blog/2026/gookit-miglite-intro/
Repo: https://github.com/gookit/miglite
```

### LinkedIn

地址:  https://www.linkedin.com/

适合偏正式的工程总结。不要写成公司公告。重点讲“为什么 raw SQL migration 仍然有价值”。

### Mastodon

地址:  https://joinmastodon.org/

适合开源语气，类似 X，但更社区化。文案可以短一点，少一点营销词。

## 中文社区

### V2EX

地址: https://www.v2ex.com/，Go 节点: https://www.v2ex.com/go，程序员节点: https://www.v2ex.com/go/programmer

推荐节点：`Go`、`程序员`

适合收真实反馈。正文要坦诚，不要像推广。

标题示例：

```text
写了一个 Go 的轻量数据库迁移工具 miglite，基于原始 SQL 文件
```

正文方向：

```text
最近整理了一个小工具 miglite，用来跑原始 SQL migration。不是想替代 goose/golang-migrate，主要是给小服务、内部工具用：不引入 schema DSL，库模式下也不默认绑定数据库驱动。

想听听大家在 Go 项目里怎么处理数据库迁移，是直接 SQL、goose/golang-migrate，还是 ORM 自带？
```

### 掘金

地址: https://juejin.cn/

适合同步中文技术文章。不要只发链接，直接发完整文章，文末放项目地址。

### SegmentFault

地址: https://segmentfault.com/

可以同步中文文章，互动可能不如 V2EX。

### OSCHINA

地址: https://www.oschina.net/

适合开源项目介绍和中文工具发布。可以发项目介绍或博客同步。

### 知乎

地址: https://www.zhihu.com/

不适合直接发工具广告。可以改成问题导向文章：

```text
Go 项目数据库迁移应该怎么选型？
```

然后把 miglite 作为其中一种方案介绍。

## 长期入口

### GitHub Topics

地址: https://github.com/topics

给 repo 配好 topics，长期有效：

```text
go
golang
database
migration
sql
mysql
postgresql
sqlite
database-migration
cli
```

### Awesome Go

地址: https://github.com/avelino/awesome-go

项目成熟后可以考虑提交到 `avelino/awesome-go`。提交前先确认：

- README 清楚。
- 有 release/tag。
- 有测试。
- 项目看起来维护中。
- 分类匹配。

### Product Hunt

地址: https://www.producthunt.com/

对这类开发者小工具优先级低。除非有完整 landing page、截图、demo，否则先不发。
