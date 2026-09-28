# blogshare

记录「文章/项目发布到了哪些社区站点」的小工具：站点、发布时间、发布地址、草稿文件、状态备注。

用 Go 编写（`gookit/goutil/cflag/capp`），数据落在博客仓库的 `share/records.jsonl`，提供 CLI 与只读 Web 视图。

## 数据文件

`share/records.jsonl` — **append-only 事件日志**，一行一个事件：

```json
{"at":"2026-09-28T20:31:00+08:00","post":"blog/2026/sshc-intro","site":"hn","status":"published","url":"https://news.ycombinator.com/item?id=1","draft":"share/hn/sshc-intro.md","title":"sshc: 更顺手的 ssh 客户端","note":""}
```

- `(post, site)` 的当前状态 = `at` 最大的那条事件（时间相同取后写入的行），所以**修正错误靠追加新事件**，历史不会丢。
- `status`：`planned` / `published` / `blocked` / `removed` / `failed`（默认 `published`）。
- `post` 用文章 key，等于 URL 路径去掉前后斜杠，例如 `blog/2026/sshc-intro`、`projects/gookit-goutil`。
  直接用 `blogshare posts` 里的 key 最稳妥；粘贴 `content/blog/2026/07-11-sshc-intro.md` 这类路径也会自动归一化（去掉 `content/`、`.md`、日期前缀、`/index`）。
- `site` 用内置站点表里的 key，例如 `hn`、`reddit/r/golang`、`v2ex`、`juejin`（见 `blogshare sites`）。

## 常用命令

```bash
cd inhere.github.io/share/blogshare && make build     # 产出 ./blogshare

blogshare sites                                       # 内置站点表（含已发布计数）
blogshare posts                                       # 扫描 content/ 列出文章 key（从 front matter 取标题/日期）
blogshare posts --only unshared                        # 还没分享过的文章

blogshare add blog/2026/sshc-intro hn \
  --url https://news.ycombinator.com/item?id=1 \
  --note "Show HN 首发"

blogshare add blog/2026/sshc-intro v2ex --status blocked --note "账号等级不够"
blogshare add blog/2026/sshc-intro juejin --at "2026-09-27 21:00"   # 补记历史

blogshare list --status published                      # 全部已发布记录
blogshare list --site reddit --json                    # 机器可读输出
blogshare show blog/2026/sshc-intro                    # 单篇：记录 + 仍待发布站点
blogshare pending                                      # 已开始分发的文章还差哪些站点
blogshare pending --post blog/2026/sshc-intro --urls
blogshare stats                                        # 按站点/月份/状态统计
blogshare check                                        # 校验 JSONL、草稿文件是否缺失

blogshare serve --open                                 # 只读 Web 视图（默认 127.0.0.1:8790）
```

参数说明：

- `--root`：博客仓库根目录。默认从当前目录向上找 `config.toml` + `content/`。
- `--file`：记录文件。默认 `<root>/share/records.jsonl`。
- `--json`：`list` / `show` / `pending` / `sites` / `posts` / `stats` / `check` 均支持，便于脚本或 agent 消费。
- `add` 未传 `--draft` 时，会自动匹配 `share/<site>/<slug>.md`；`--title` 缺省时取该文章 front matter 的标题。

## Web 视图

`blogshare serve` 提供只读页面（`web/index.html`，`go:embed` 内嵌）：Records / Pending / Sites / Posts / Stats 五个页签，支持按文章、站点、状态、关键词过滤。接口：

```
/api/summary /api/records /api/pending /api/sites /api/posts /api/stats
```

页面每次请求都重新读取 JSONL，所以 CLI 写入后刷新即可看到。

## 目录

```
main.go                    入口（embed web/ + capp 应用）
internal/model/            事件模型、状态、key 归一化、状态归约
internal/store/            路径定位 + JSONL 追加/读取/校验
internal/sites/            内置站点表（来自 ../../share/community-sharing.md）
internal/posts/            扫描 content/ 的 zola 页面
internal/report/           记录/待发布/站点/文章/统计等派生视图
internal/cli/              capp 命令
internal/webui/            只读 HTTP 服务
web/index.html             单页 UI
```

工具成熟后再迁到 `inhere-tools/blogshare`（module path 已按 `github.com/inhere/blogshare` 命名）。

## 开发

```bash
make test     # go test ./...
make fmt vet
make cross    # 交叉编译到 dist/
```
