# blogshare

记录「文章/项目发布到了哪些社区站点」的小工具：站点、发布时间、发布地址、草稿文件、状态备注。

用 Go 编写（`gookit/goutil/cflag/capp`），数据落在博客仓库的 `share/records.jsonl`，提供 CLI 与只读 Web 视图。

## 数据文件

`share/records.jsonl` — 一行一条记录，每条有个短 id（`yymm_xxxxxx`，创建月份 + 6 位 base36），当成简单存储用：新增 / 按 id 修改 / 按 id 删除。

```json
{"id":"2609_a3k9qz","post":"blog/2026/sshc-intro","site":"hn","status":"published","url":"https://news.ycombinator.com/item?id=1","draft":"share/hn/sshc-intro.md","title":"sshc: 更顺手的 ssh 客户端","note":"Show HN 首发","create_at":"2026-09-20T10:30:00+08:00","update_at":"2026-09-28T20:31:00+08:00"}
```

- `id`：唯一短 id，`yymm_xxxxxx` 形式（`yymm` 取 `create_at` 的年月，便于一眼看出哪个月记的）；`update <id>` / `rm <id>` 都用它；`(post, site)` 唯一，重复会被拒绝并提示已有 id。
- `create_at`：记录创建时间，也就是**发布时间**，补录历史用 `--at` 指定；`update_at`：最后一次修改时间，自动维护。
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
# => created 2609_a3k9qz  blog/2026/sshc-intro -> hn  [published]  2026-09-28 20:31

blogshare add blog/2026/sshc-intro v2ex --status blocked --note "账号等级不够"
blogshare add blog/2026/sshc-intro juejin --at "2026-09-27 21:00"   # 补录历史（create_at）

blogshare update 2609_a3k9qz --url https://news.ycombinator.com/item?id=2   # 按 id 改，update_at 自动刷新
blogshare update 2609_a3k9qz --status removed --note "被 AutoMod 删除"
blogshare rm 2609_a3k9qz                               # 按 id 删除

blogshare list                                         # 全部记录（含 id / updated）
blogshare list --id 2609_a3k9qz                        # 按 id 过滤
blogshare list --status published                      # 全部已发布记录
blogshare list --site reddit --json                    # 机器可读输出
blogshare show blog/2026/sshc-intro                    # 单篇：记录(含 id) + 仍待发布站点
blogshare pending                                      # 已开始分发的文章还差哪些站点
blogshare pending --post blog/2026/sshc-intro --urls
blogshare stats                                        # 按站点/月份/状态统计
blogshare check                                        # 校验 JSONL、草稿文件是否缺失

blogshare serve --open                                 # 只读 Web 视图（默认 127.0.0.1:8790）
```

参数说明：

- `--root`：博客仓库根目录。默认从当前目录向上找 `config.toml` + `content/`。
- `--file`：记录文件。默认 `<root>/share/records.jsonl`。
- `--json`：`list` / `show` / `pending` / `sites` / `posts` / `stats` / `check` / `rm` 均支持，便于脚本或 agent 消费。
- 写操作只有 `add`（新建）、`update <id>`（只改显式给出的字段，`--url ""` 可清空）、`rm <id>`；每次写入都会重写整个文件（临时文件 + 原子替换）。
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
internal/model/            记录模型、状态、`yymm_xxxxxx` id 生成、key 归一化、Patch
internal/store/            路径定位 + JSONL 读取/校验 + 按 id 增删改（原子写）
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
