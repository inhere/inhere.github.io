---
title: suga：用 Go 写一个可嵌入、可审计的个人 agent
date: 2026-10-25T10:00:00
taxonomies:
  tags: [suga, golang, ai-agent, cli, open-source]
slug: suga-intro
---

命令行 agent 用起来很爽，直到你想把它放进自己的程序里，或者想知道它每次调用到底花了多少、这次运行到底做了什么。前者通常撞在“只能 `exec` 一个二进制、解析它的 stdout”，后者撞在“没有地方能看”。

`suga` 是我为这两个问题写的个人 coding agent，Go 实现。有三件事我刻意做成可度量的：内核能嵌进别人的 Go 程序、每次请求的固定成本可测且有回归门、一次运行能完整复盘。

先说清三点：suga 原名 `suag`；当前是 `v0`，次版本之间可能有不兼容变更，会在 CHANGELOG 写明；我是作者，下面是自述，不是第三方评测。

![suga：用 Go 写一个可嵌入、可审计的个人 agent](/img/blog/suga-intro-poster.png)

<!-- more -->

- 项目主页：[https://github.com/inhere/suga](https://github.com/inhere/suga)
- 最新版本：[https://github.com/inhere/suga/releases/latest](https://github.com/inhere/suga/releases/latest)
- 使用文档：[README.md](https://github.com/inhere/suga#readme)
- 内置向导：仓库里的 [`skills/suga-guide`](https://github.com/inhere/suga/tree/main/skills/suga-guide)（首次运行释放到 `~/.suga/skills/`，可以直接问 chat 怎么配）

## 一个会话引擎，两个接口

suga 只有一个会话引擎，对外两个入口：

- `suga chat`（交互）和 `suga run`（单回合，给 job 用），终端侧；
- `suga acp`，ACP stdio server，常驻会话，审批交给客户端逐次决定。

控制面我交给 [gofer](https://github.com/inhere/gofer)：它拉起 `suga run` 当一次性 job，或者拉起 `suga acp` 当常驻会话，再叠加作业、日志、审批和 Web 控制台。这么分不是为了干净：agent 引擎和作业控制面耦合在一起，两边都长不动。同一套引擎上还有一个常驻助手在孵化中（基于 `pkg/sugasdk` 进程内嵌入），还没到能拿出来讲的程度。

我日常就是拿它干活：主要是 gofer 和 suga 这两个项目本身的开发。所以下面所有数字都是这两个项目上的真实运行，不是基准测试。

## 全貌：20 个工具、50 个 skills、一个 SQLite 文件

| 方向 | 具体内容 |
|---|---|
| 内置工具（只读会话 16 个 / 全量 20 个） | `file_read`（按行窗口读，也能直接读图）/`file_list`/`file_grep`/`file_find`/`file_symbols`/`file_refs`；`file_write`/`file_edit`（精确替换）/`file_remove`；`shell_exec`（Windows 上走 PowerShell）；`web_fetch`/`web_search`；`agent`（子 agent）、`task`（后台任务）、`skill`、`memory`、`recall`/`session_search`、`session_message`、`update_plan`、`suga_manifest` |
| 安全与权限 | 默认只读；写工具要 `--allow-write`（chat 里是 `tools.allow_write`，ACP 里是会话 mode）；`tools.approval: ask` 时每个写/shell 调用前逐次确认，`y` 放行一次、`a`/`d` 在本次会话内记住同一范围；四类规则文件（`approval`、`output`、`nudge`、`lang`）按内置 → `$SUGA_HOME` → 工作区三层覆盖；`$SUGA_HOME`、`.suga/`、`.git/` 是受保护路径；`--add-dir` 授权工作区外的目录；依赖源码与 idev-std 目录作为只读根自动发现 |
| 会话 | 分段 + 交接摘要（不是简单截断）、按上下文大小折叠旧工具结果、空闲时后台整理、中断回合重放、`--resume`/`--from`、跨目录续接会先问 |
| 回滚 | `file_write`/`file_edit`/`file_remove` 写前快照；chat 里 `:checkpoints`/`:undo`，CLI 里 `suga undo <session>`；`shell_exec` 的改动只登记不回滚（有意为之，见 README） |
| 扩展 | 标准 `SKILL.md` skills（多根目录、按需加载、`always_load`）；stdio MCP + 允许名单 + 大工具集延迟加载；hooks（`PreToolUse` 可拒绝或改写参数，fail-closed）；子 agent（explore / research 两型，只读）；后台与监听任务（`background`、`every`、`watch_paths`） |
| 交付质量 | `--verify` 在回合结束后跑你指定的检查命令，失败就回灌给模型修；`nudge` 收工检查（写完没验证、计划没做完、答案以“接下来我去跑测试”结尾）；`--output-schema` 要求最终答复满足调用方的 JSON Schema，不合格显式失败 |
| 观测 | `inspect trace`（时间线 / `--analyze` / `--web` / `--transcript`）、`inspect stats`（调用、延迟分位、token、缓存、成本）、按日轮转的日志、`run --output-format stream-json` |
| 记忆 | user / feedback / project / reference 四类；后端可选 files、gofer（项目记忆）、exec；`memory lint` 只读地列出重复、冲突、可能过期的条目 |
| 终端体验 | `:` 本地命令（`:session`、`:compact`、`:diff`、`:model`、`:add-dir`、`:checkpoints`、`:undo`、`:tasks`、`:queue`、`:image`……每条都支持 `-h`）、`!cmd`/`!!cmd` 直接跑本地命令、回合中插话（steering）、Tab 补全 |
| 嵌入 | `pkg/agentcore` 内核 + `pkg/sugasdk`（进程内 Open / Send / Event） |

数据只有一处：`$SUGA_HOME`（默认 `~/.suga`）。配置是 `config.yaml` 与 `.env`，会话、记忆、快照、图片、日志都在一个 SQLite 加几个目录里，删掉即可重来。

命令树也简单：`chat` / `run` / `send` / `ps` / `sessions` / `compact` / `undo` / `config` / `models` / `init` / `memory` / `acp`，外加两个组——`inspect`（`trace`、`stats`、`export`、`manifest`、`rules`）和 `data`（`gc`、`bodies`、`vacuum`、`compress-spill`、`usage`、`backup`、`restore`）。

`suga inspect manifest` 会列出这台机器上实际生效的模型、工具、skills 和记忆后端；其余功能 README 有完整说明。

## 三处的做法

### 内核能嵌进别人的程序

`pkg/agentcore` 是应用层之下的内核与能力层：模型/工具循环、可恢复的 run 状态、transcript，以及 provider、工具注册表与审批、MCP、skills、长期记忆。它**不依赖** `internal/*`，这条边界由 `pkg/agentcore/layering_test.go` 用一张白名单表守着，表外依赖和未登记的新包都会让测试失败。

最小可运行组合只有一个 provider：

```go
runtime := agentcore.New(agentcore.Config{
    Provider: mock.NewProvider(mock.Final("hello")),
})

result, err := runtime.Run(ctx, agentcore.RunInput{
    AgentID:     "example-agent",
    Instruction: "say hello",
})
```

想接真实模型就换成 `llm.NewOpenAIProvider(...)`，想加工具就 `reg.Register(...)`，想控权限就外面包一层 `tools.NewApproval`（没有 Approver 时审批层拒绝一切调用，默认是拒绝而不是放行）。

agentcore 还是 `v0`：只做单 agent 循环，不做多 agent 编排；`pkg/sugasdk` 明确标着 experimental，接口可能在下一个 minor 变；配置是进程级全局，一个进程一个 engine。

### 固定前缀：22 个字符的提问要 8,853 token

任何 agent 的每一次请求都带着一大坨与当前任务无关的东西：系统提示词、工具 schema、规则文件、记忆索引、skills 列表。这部分我叫固定前缀。它每次调用都要付钱，又最容易忽略，因为它不在你的 prompt 里。

我拿一句话试过：

```bash
suga run --session-id t0-smoke2 --prompt "只回答 ok 两个字"
```

```text
session id: t0-smoke2
model: opencode-go/deepseek-v4.1-flash
ok
opencode-go/deepseek-v4.1-flash · in 8853 / out 2 tokens · 2.8s
```

**22 个字符的提问，请求输入 8,853 token。** 钱花在哪，`suga inspect trace <session> --json` 的 `context` 事件会逐项给出：

| 部分 | 字节 | 说明 |
|---|---|---|
| `tools` | **19,753** | 16 个工具的 schema，单这一项比下面三项之和还大 |
| `rules` | 6,782 | 工作区 `AGENTS.md` + 本地上下文文件 |
| `system` | 3,559 | 稳定系统提示词 |
| `skills` | 1,333 | skills 列表（50 个 skills，只列 2 个带描述） |
| `memory_index` | 644 | 记忆索引 |
| `est_tokens` | 8,656 | 与实际 `in 8853` 只差 200 余 token |

（这是只读会话的 16 个工具；`suga inspect manifest` 列 20 个，`file_write`、`file_edit`、`file_remove`、`shell_exec` 四个写工具在只读模式下根本不进表。）

知道数字之后才有得改。v0.48.0 做了一轮工具描述精简，只改措辞、不动参数与行为，并在 `internal/wiring` 加了一个 `TestToolSchemaBudget`：按 wire 口径给每个工具的 schema 设上限、总量设上限（24,800 字符）。**降本这件事必须有回归门，否则下一个新工具就会悄悄把它吃回去。**

同一轮调用的缓存命中率 69.4%：

```text
MODEL                            CALLS  IN    OUT  CACHE-R  CACHE-W  HIT%  COST
opencode-go/deepseek-v4.1-flash  1      2709  2    6144     0        69.4  $0.0000
```

`IN 2709 + CACHE-R 6144 = 8853`。命中率高说明前缀稳定：工具表、系统提示词、段上下文在会话里没有乱变。反过来说，如果你每次请求都在系统提示词里塞时间戳、塞随机 id，命中率会掉，账单会涨。

这些数字的适用范围有限：降本靠“删描述”，可能牺牲模型对工具的理解（v0.48.0 那次改动只改措辞，并用三个真实 provider 做过探针验证）；`prompt_cache` 这类开关只对 Anthropic 系协议生效；69.4% 是某一个 provider 的一次实测，不能跨 provider 泛化。

### 一次运行可以复盘到工具调用级

agent 出问题的方式很固定：绕圈、重复跑同一条命令、写完不验证、自称“已完成”。这些都能从事件时间线里看出来，前提是有条时间线。

```bash
suga inspect trace <session> --analyze
```

```text
steps                  5 model calls, 6 tool calls, 2 parallel steps (max 2 calls in one step)
tokens                 in 51.2k (cache read 40.4k), out 427; reasoning 77 chars, text 478 chars
time                   model 13.5s, tools 1.7s
tools                  file_read x2, shell_exec x2, file_edit x1, file_list x1
re-reads               -
reads after own write  0
edits per file         calc.go x1
shell                  2 runs, 1 failed (exit != 0), 0 exited 0 with stderr output
repeated commands      command=go test ./... x2
tests                  2 runs, 0 after the first pass
phases                 explore 2, first write to green 2, after green 1 (model calls)
uncached input         10.8k ≈ fresh 10.8k + rebuilt 0 + provider-side 0
```

`re-reads`、`reads after own write`、`repeated commands`、`tests` 这几行是专门为“绕圈”和“没验证”设计的。`--transcript` 则把同一个会话渲染成纯文本，适合贴进 review 或者喂给另一个 agent：

```text
[user]
calc.go 里的 Add 有 bug，先跑测试确认，再修好它

[assistant → tool_call file_read]
{"path":"calc.go"}

[tool_result file_read ok]
4	func Add(a, b int) int {
5		return a - b
6	}

[assistant → tool_call shell_exec]
{"command":"go test ./..."}

[tool_result shell_exec ok]
--- FAIL: TestAdd (0.00s)
    calc_test.go:7: Add(2,3) = -1, want 5

[assistant → tool_call file_edit]
{"new_string":"\treturn a + b","old_string":"\treturn a - b","path":"calc.go"}
```

同一份数据还能用 `--web` 打开成只读页面，按 5 秒/15 秒自增拉取，适合挂着看一次长跑。`inspect stats` 给的是另一侧：调用数、延迟分位、token、缓存、成本。

trace 是**事后**记录，不是防护：它阻止不了 agent 绕圈，也替代不了测试；`--transcript` 对超长工具结果有渲染器截断（那个截断标记是渲染器加的，不是工具输出的）。

## 15 分钟跑通

```bash
# 安装：二选一
eget install inhere/suga
go install github.com/inhere/suga/cmd/suga@latest

suga init                                  # 建 ~/.suga、带注释的 config.yaml、只有注释的 .env
# 把 provider key 填进 ~/.suga/.env（密钥只在那里，配置文件里只写 ${VAR}）
suga config set model deepseek/deepseek-chat
suga run --prompt "只回答 ok 两个字"
suga inspect manifest                       # 生效的模型、工具、skills、记忆后端
```

`init` 生成的 `config.yaml` 有 453 字节全注释模板，`.env` 362 字节也只有注释，不会替你写任何值，也不会覆盖已经存在的文件。

想手写配置也行，能跑的最小配置是九行：

```yaml
model: opencode-go/deepseek-v4.1-flash

providers:
  opencode-go:
    type: openai
    base_url: "https://opencode.ai/zen/go/v1"
    api_key: "${OPENCODE_API_KEY}"
```

不写 `models:` 也能跑，上下文窗口走默认值；要精确再补 `context_window`。`suga models` 是离线视图，不会发请求。

我自己踩过一个坑：上面这个网关要求额外请求头，第一次直接拿到的是

```text
provider error: openai api error: Request is missing x-opencode-session and cannot be routed efficiently.
```

遇到这类网关，把额外头写进 `providers.<id>.headers` 即可。内置的 `deepseek` / `openai` / `anthropic` 三个 preset 不需要这一步。

## 一次真实的修复

我建了一个只有一处 bug 的小仓库，让它自己跑：

```bash
suga run --allow-write --verify "go test ./..." --prompt "calc.go 里的 Add 有 bug，先跑测试确认，再修好它"
```

结果：

```text
已确认并修复。
**确认 bug**：修复前 go test ./... 失败 —— calc_test.go:7: Add(2,3) = -1, want 5。
**原因**：calc.go:5 里 Add 写成了 a - b。
**修复**：改为 return a + b。

verify #1: go test ./... → exit 0 (488ms)
opencode-go/deepseek-v4.1-flash · in 51209 / out 427 tokens · 15.8s
```

`--verify` 不是让模型“记得跑测试”，而是**回合结束后由 suga 自己跑一遍**，失败就把失败信息作为新回合还给模型修（`--verify-rounds` 默认 2 次）。所以 `verify #1: go test ./... → exit 0 (488ms)` 这行才算证据：“测试通过”是外部命令说的，不是模型说的。

还有一层：同一次运行里，`nudge`（收工检查）会看这个回合到底留下了什么。写文件之后没有任何检查命令跑过（`unverified_write`）、计划里还有没做完的步骤（`plan_open`）、或者答案以“接下来我去跑测试”结尾（`promise`），这些都会被推回去一次。这类规则可以关、可以改（`nudge-rules.yaml`，三层：内置 → `$SUGA_HOME` → 工作区）。

## 什么时候别用它

suga 不替你做这些事，别指望：

- 不替代 gofer：没有作业队列、没有多项目控制台、没有常驻审批 UI。它是被拉起的那一侧。
- 不做多 agent 编排：子 agent 只是一次只读的独立调研（`agent` 工具，explore/research 两型），不会递归派活。
- 不是 SaaS，也不是图形应用：配置、记忆、会话全在本机 `$SUGA_HOME`（默认 `~/.suga`）下，一个 SQLite 文件装全部。
- 不想自己配 provider key 的：这条路走不通，所有模型请求都直连你配的地址。
- 要长期稳定接口的：`v0` 阶段，次版本之间可能有不兼容变更。

另外，我主要在 Windows 和 Linux 上开发和用它，CI 跑 Ubuntu 与 Windows；macOS 有构建产物，但我不常用。

## 如果读代码，从这四处进

- `cmd/suga` 只是入口，`internal/cli` 一个命令一个文件（`root.go` 里能看全命令树）；
- `internal/wiring` 负责把 provider、工具、skills、系统提示词、runner 组装起来，CLI 和 ACP 共用同一套；
- `internal/personal` 是回合、分段、交接摘要和事件；这个包最长，读它就是读 suga 的产品逻辑；
- `pkg/agentcore` 是内核与能力层，`layering_test.go` 里那张白名单表能让你 5 分钟看懂分层。

仓库现在约 20 万行 Go（含测试），`docs/` 下有 45 篇设计、32 篇计划、12 篇调研；不是每篇都值得读，但“为什么这么设计”基本都在里面，比看代码猜快。

---

最后是一个我真在纠结的问题：**你的 agent 每次请求的固定前缀有多大？**把它当成可以接受的常数，还是量过、设过上限？我这边起步就是 19,753 字节的工具 schema，正犹豫要不要把工具检索也做成按需加载，代价是模型可能选错工具。

有不同看法或踩过更深的坑，[GitHub Issues](https://github.com/inhere/suga/issues) 里聊。

> 我是 inhere（[博客](https://inhere.github.io) · [GitHub](https://github.com/inhere)），suga 的作者。文中数字来自 v0.48.0 的实测运行，命令都在正文里，可以自己复现。
