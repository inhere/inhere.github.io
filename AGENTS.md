# For AI

zola 博客仓库：文章在 `content/blog/<year>/`，社区分发草稿在 `share/`，发布记录在 `share/records.jsonl`。

## 发布流程

一篇文章从初稿到分发按 1→6 走。只做用户当前要求的那一步，不要顺手把后面几步一起做；第 4-6 步动手前先跟用户确认。

1. **写中文稿**：新建 `content/blog/<year>/<MM-DD>-<slug>.md`，YAML front matter（`title` / `date` / `taxonomies.tags` / `slug`）。文件名不要带 `.`；文件名里的日期前缀会从 slug 里去掉。先讲问题和取舍，少用功能清单和营销词。
   完成：`zola build` 通过，文章能在 `zola serve` 里从头读一遍。
2. **去 AI 味（中文，必做）**：先读 `.agents/skills/humanizer-zh/SKILL.md`，按里面的模式改；再用它自带的结构检查对比改前改后：`python .agents/skills/humanizer-zh/tests/check_structure.py <改前> <改后>`。
   完成：结构检查里 frontmatter / 代码块 / 行内代码 / 链接 / 表格 / 序号步骤全为 true（标题文字除标点统一外不动），版本号、数字、日期与改前一致，`值得|深入|赋能|闭环|至关重要|总而言之|下面我们` 这类词 0 命中。
3. **配图**：等内容定稿再生成，别让图跑在主旨前面。本地确定性出图用 `script/make-poster.py`（`--help` 有全部参数，无 API、无密钥，风格与已有海报一致）；要 AI 背景时用 `.agents/skills/glm-blog-poster/SKILL.md`（需要 `BIGMODEL_API_KEY`，它只负责背景，文字仍本地叠加）。图放 `static/img/blog/`，正文用 `![alt](/img/blog/<name>.png)` 引用。
   完成：`zola build` 后 `public/img/blog/<name>.png` 存在，文章页里图片宽度正常、无 404。
4. **英文版**：中文稿稳定后再写 `*.en.md`，避免两份同时改。语言风格参考 `.agents/skills/content-rewrite/references/blog-en.md`，写完用 `.agents/skills/humanizer/SKILL.md`（英文规则）过一遍。
   完成：中英两篇信息、命令、代码一致，只有语言差异。
5. **社区草稿**：读 `@share/AGENTS.md`（写草稿的硬规则）和 `@share/community-sharing.md`（站点清单与推荐发布顺序），每个站点写一份原生文案到 `share/<site>/<slug>.md`，不要把同一段文案群发。改写参考 `.agents/skills/content-rewrite/references/` 下的 `reddit.md` / `x.md` / `linkedin.md` / `wechat.md`；用 `content-rewrite` 前先按它的要求跟用户确认人称和目标平台。
   完成：本次目标站点的草稿文件都在 `share/` 下，各站标题与开场不雷同。
6. **发布与记账**：真正发出去之后再用 `share/blogshare` 写记录（用法见 `share/blogshare/README.md`；在 `share/blogshare` 下 `make build`，Windows 产出的二进制是 `blogshare.exe`），数据落在 `share/records.jsonl`。
   完成：在仓库根目录跑 `share/blogshare/blogshare.exe check` 无问题；`… pending --post <post key>` 只列还没发布的站点。

## Skill 与工具

skills 挂在 `.agents/skills/`，大多是符号链接（`.agents/` 下除 `glm-blog-poster` 外都不进 git），源在 `~/.cache/skillc/repos/`；目录缺失时用 `skillc install`（`skillc install -h`）重新挂载。用任何 skill 之前先读它的 `SKILL.md`，不要凭印象套用。

本机已装好：`zola`（站点渲染）、`bsk` 及对应 skill（直接用我已登录的浏览器标签，省掉登录和验证码）、`gh`（GitHub CLI）、`skillc`（skill 管理）。
