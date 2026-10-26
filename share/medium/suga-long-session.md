## 发布方式

Medium 的 Import a story 导入 https://inhere.github.io/en/blog/2026/suga-long-session/ （会自动设置 canonical，文章须先在博客上线）；导入后把开场替换为下面的开场段，标题改为下面的标题，tags 填 Go、AI、Programming、Open Source、Developer Tools。

## title

Keeping a coding agent useful through a day-long session

## subtitle

Segments, handoffs, a fixed-prefix budget, and the experiments that failed

## body

I spend most of my working day in one agent session, so I built suga, a coding agent in Go, around that. This is the long version of what worked and what did not. (I'm the author; it is MIT licensed and still v0.)

Keep an agent in one session long enough and three things go wrong. The context fills up and gets compacted, and the part that gets dropped is the constraint you gave it in the first turn. Every request carries a few thousand tokens of fixed overhead, so long sessions get expensive. And when something breaks, there is no record of what the agent did.

`suga` is a personal coding agent I write in Go. The goal is a session that can stay with me for a full working day. This post covers the trade-offs it makes for long sessions, which of them are backed by data and which experiments failed, and how it works with gofer, my job platform. suga itself is built on gofer, one batch of agent jobs at a time.

> The current version is v0.49. It is `v0`, so minor releases may break things. It is MIT licensed. What follows is an introduction to suga.

![suga: long agent sessions that keep the turn-1 constraint](https://inhere.github.io/img/blog/suga-long-session-poster.png)

- Repository: [github.com/inhere/suga](https://github.com/inhere/suga)
- Releases: [releases/latest](https://github.com/inhere/suga/releases/latest) (Linux / macOS / Windows binaries)

## A session that lasts all day: the hard part is the context reset

The context window fills up eventually. The usual fix is to compress old messages into a summary and keep going. The summary is written by the model, though, and the model will reasonably drop whatever it thinks is unimportant, such as the "don't touch vendor/" you said in turn 1.

suga uses **segments** instead. When the context is nearly full, it starts a new segment. The old one is stored and stays searchable, and the new one opens with a **handoff**. The handoff has a fixed structure: current task, coordinates (file / symbol / line), accepted and rejected decisions, how far verification got, progress and blockers, next step, and references to look things up. The "accepted and rejected" section holds hard constraints, rules and the user's own words. It is kept verbatim, has no length limit and may not be rewritten. Every other section has a byte budget (coordinates get at most 2 KB, for example), and old coordinates are deduplicated by file and symbol when they are folded in.

Why a budget? The early handoff folded the whole previous handoff into each new one. In one 14-turn session it grew from 4.7 KB to 7.8 KB to 16 KB, and every later request carried it. With budgets, the same task stays at 7.2k to 8.7k tokens of context after each reset.

This is tested by a set of "hard" long-session evals. Each task runs 13 to 14 turns with 2 to 3 forced resets, padded with large files and unrelated work, and the last turn checks whether the turn-1 constraint survived. For example:

- the user changed the constraint halfway through, and the check expects the new one, not the old one;
- the topic goes A, B, C and back to A, and the check looks for mixed-up topics;
- a tool output contains "ignore previous rules", and the check looks for whether the agent followed it.

With a real model (deepseek-v4.1-flash), three runs per task, it currently passes 12/12.

> **I got this wrong once.** I gave the model call that writes the handoff an output limit derived from the budget (about 3.3k tokens). Unit tests and fake-model evals all passed. On a real model, 3 of 4 tasks failed at the reset with "empty summary": a reasoning model spends output tokens on thinking, and the limit ran out before the answer started. That call now has no limit. The handoff size is enforced by the budgets and by trimming each section afterwards. The lesson: a fake model will not catch changes that depend on model behavior. They need a real model run.

## Every token is accounted for: fixed prefix, tool descriptions, lazy loading

Start with the shortest possible prompt (measured on v0.48). The prompt below asks the model to answer with just "ok":

```bash
suga run --prompt "只回答 ok 两个字"
```

```text
ok
opencode-go/deepseek-v4.1-flash · in 8853 / out 2 tokens · 2.8s
```

A 10-character prompt, 8,853 input tokens. The `context` event in `suga inspect trace <session> --json` shows where they went:

| Part | Bytes | Notes |
|---|---|---|
| `tools` | 19,753 | schemas of the 16 tools in a read-only session, more than the next three combined |
| `rules` | 6,782 | workspace `AGENTS.md` and local context files |
| `system` | 3,559 | the stable system prompt |
| `skills` | 1,333 | the skills list |

The cache hit rate for this call was 69.4% (`IN 2709 + CACHE-R 6144 = 8853`). A high hit rate depends on a stable prefix: the tool table, the system prompt and the segment context do not change within a session. Put a timestamp or a random ID into the system prompt on every request and the hit rate drops and the bill goes up. The thinking-signature bug later in this post has the same cause.

Cost in a long session is roughly "number of calls × context per call". Breaking a 14-turn task down call by call showed that **29% of the input was the fixed prefix resent on every call**: about 0.9k tokens of system prompt and about 7.0k tokens of schemas for the 20 built-in tools.

So I did two things:

1. **Shorter tool descriptions.** I removed parser details and conventions repeated across tools (five search tools each said "skips vendor/node_modules by default") and said them once in the system prompt. That saves about 920 tokens per call. A test now pins the character count of every tool schema so it cannot grow back unnoticed.
2. **Lazy loading for rarely used tools.** In 128 eval runs, 11 of the 20 tools were called 44 times in total. The idea was to drop them from the tool table, keep a one-line list, and load them when needed.

Both went wrong at first, and the evals caught both:

- After the trim, one task made 24% more calls. The session log showed why: the words "skips vendor/" had been cut from the `no_ignore` parameter description, so the model could not see them and listed vendor/ through the shell instead. Putting those words back brought the call count back to normal.
- For lazy loading I first ran a probe: describe the tool schemas only in message text, not in the `tools` declaration. Across three models and 9 runs, the model made 0 native calls. Models do not call tools that are not declared. So within a segment, lazy tools go through a resident proxy tool, `tool_call`, and they join the real tool table at the next reset, which keeps the tool table and the cache stable within a segment. The on/off comparison: prompt per call down 16.9%, calls up 8.3%, total down only 6.8%, which failed the "calls up by no more than 5%" bar. So **the feature is off by default**, and `tools.deferred_native: auto` turns it on.

These comparisons later became the eval `compare` subcommand. It lines up two result sets by task, labels each as helped / hurt / no observed effect / confounded, and writes the verdict to a ledger, so I no longer do the math by hand.

## When something breaks, you can find out why: a thinking-signature bug

suga writes every run to one SQLite file: sessions, turns, tokens and cache hits per model call, every tool call, resets, approvals and end-of-turn checks. Agents fail in predictable ways: going in circles, rerunning the same command, writing without verifying, claiming "done". With a timeline these show up. Here is the summary of one bug-fix run (measured on v0.48):

```bash
suga inspect trace <session> --analyze
```

```text
steps                  5 model calls, 6 tool calls, 2 parallel steps (max 2 calls in one step)
tokens                 in 51.2k (cache read 40.4k), out 427; reasoning 77 chars, text 478 chars
tools                  file_read x2, shell_exec x2, file_edit x1, file_list x1
re-reads               -
reads after own write  0
shell                  2 runs, 1 failed (exit != 0), 0 exited 0 with stderr output
repeated commands      command=go test ./... x2
tests                  2 runs, 0 after the first pass
phases                 explore 2, first write to green 2, after green 1 (model calls)
```

The `re-reads`, `reads after own write`, `repeated commands` and `tests` rows exist to spot going in circles and skipped verification. `--transcript` renders the same session as plain text you can paste into a review or hand to another agent, and `--web` opens a read-only page you can leave open during a long run. A trace is a record after the fact. It does not stop an agent from looping, and it does not replace tests.

Here is one problem the trace helped me find. Running multi-step tool calls on Claude, the second request was rejected with `Invalid signature in thinking block`. Comparing the two requests turned up two causes:

1. after optional arguments the model left out were normalized away, `tool_use.input` was sent back as `null`;
2. Anthropic now binds a thinking block's signature to the request prefix it was generated under, and suga added a "about N minutes left before the deadline" reminder to every step. The text changed on every step, so the earlier thinking block no longer verified.

The fix: send back `{}`, and keep that reminder's text and position fixed within a turn. After that I recorded real streaming responses from four providers (deepseek, glm, Claude, codex) as replay fixtures, with keys removed, so unit tests catch the next change in these protocol details first.

## Safe by default, and "tests pass" comes from a command, not the model

suga is read-only by default. With writes enabled, chat asks before writing a file or running a command (`y` / `n` / `a` to stop asking for this session), and rules by tool, path or command can live in a file. File tools snapshot before writing, so `:undo` or `suga undo <session>` can roll back. Changes made through `shell_exec` are recorded but not rolled back, on purpose.

A model saying "fixed, tests pass" does not count. `--verify` runs the check command you give it after the turn ends, and a failure goes back to the model as a new turn (at most 2 rounds by default). A small repository with one bug (the prompt asks it to confirm the bug in `Add` with the tests, then fix it; the model answered in Chinese):

```bash
suga run --allow-write --verify "go test ./..." --prompt "calc.go 里的 Add 有 bug，先跑测试确认，再修好它"
```

```text
已确认并修复。
**确认 bug**：修复前 go test ./... 失败 —— calc_test.go:7: Add(2,3) = -1, want 5。
**原因**：calc.go:5 里 Add 写成了 a - b。
**修复**：改为 return a + b。

verify #1: go test ./... → exit 0 (488ms)
```

The `verify #1` line is the evidence. The same turn also runs end-of-turn checks (`nudge`): files written but no check command run, plan steps still open, or an answer ending with "next I'll run the tests" each push the model back once.

One more detail: approval is done by a person, and the model does not know that. Once, running as a resident session, suga replied to a message for me and wrote that "writing the file did not trigger approval". In fact I had approved it. Now a manually approved call ends its result with the line `[已经人工批准执行]` ("executed after manual approval"), so the model does not have to guess.

## Working with gofer: how suga gets built

[gofer](https://github.com/inhere/gofer) is my other project. It runs agents such as codex, claude and suga as async jobs: submit a job, work in a separate git worktree, approve from the web UI or DingTalk, read logs and token usage, merge back to the main branch. suga runs in gofer in two ways:

- `suga run`: a one-off job that exits when done and streams events as stream-json;
- `suga acp`: a resident session. Each tool-call approval goes through ACP to gofer, where you click it on the web or in DingTalk.

This is how suga itself is developed:

```text
Supervisor session (reads the plan, writes job briefs, reviews, releases)
   │  gofer job run -a suga --model <deepseek | glm | codex> --worktree ...
   ▼
Several suga jobs in parallel, each in its own worktree + branch: change code, run tests, commit
   │  supervisor reviews the diff, reruns race tests and pty smoke tests in a Linux container
   ▼
gofer job worktree merge → suga-verify workflow
   (Linux race / CI simulation / staticcheck / Windows tests + ConPTY smoke / 40+ pty scenarios)
   ▼
tag → GitHub Actions builds binaries for three platforms → upload
```

Jobs go to different models in rotation, and every review verdict is recorded. Changes that need a design get a design doc, a review and human approval, then a plan that also needs approval before implementation. By v0.49 there are 56 tags and more than 2,400 commits. For the last few dozen batches, the code was written almost entirely by suga jobs. I split the work, review it and release.

The most useful step in this loop turned out to be review. Implementers often fail where they cannot verify their own work: a pty smoke test written on Windows that never ran, a fake model whose if/elif chain was cut in two by a single assignment, a test that took the echo of the input line as the end of the turn. All of these were caught by rerunning in a container before the merge.

The two also connect directly. gofer sends mail to a resident suga session (`agent:suga`), and suga replies with gofer's mailbox tool. suga sessions can message each other (`suga send`) with message IDs, merged delivery, receipts and failure barriers. gofer's memory backend can serve as suga's long-term memory.

## The core embeds in other Go programs

`pkg/agentcore` is the core below the application layer: the model/tool loop, resumable run state, providers, tool registry and approval, MCP, skills and long-term memory. It does not depend on `internal/*`. An allowlist in `pkg/agentcore/layering_test.go` enforces that boundary: any dependency outside the list, or a new package that is not registered, fails the test. The smallest working setup needs one provider:

```go
runtime := agentcore.New(agentcore.Config{
    Provider: mock.NewProvider(mock.Final("hello")),
})

result, err := runtime.Run(ctx, agentcore.RunInput{
    AgentID:     "example-agent",
    Instruction: "say hello",
})
// result.Output == "hello"
```

For a real model, swap in `llm.NewOpenAIProvider(...)`. Add tools with `reg.Register(...)`. To control permissions, wrap it in `tools.NewApproval`: with no approver configured, every call is denied, not allowed. The limits, stated here too: it is a single-agent loop with no multi-agent orchestration, and `pkg/sugasdk` (in-process Open / Send / Event) is marked experimental.

## Compared with similar tools

Claude Code and Codex CLI come from the model vendors, and their model integration and interaction are more polished. aider has a mature git workflow. opencode has a good TUI. suga makes different trade-offs:

- one Go binary with no runtime dependencies; Windows is a first-class platform (PowerShell, Job Object process trees, ConPTY smoke tests);
- session persistence, segments and handoffs, long-session evals and regression gates are where most of the effort went;
- it embeds in other Go programs (`pkg/sugasdk`) and can run as an ACP server driven by an editor or by gofer;
- it switches between providers, and the config can list fallback models that it moves to when a connection fails.

When it is a poor fit:

- you want an IDE plugin or a GUI: it is terminal only for now;
- you want multi-agent orchestration: a sub-agent only does one read-only investigation and never hands out work of its own; job queues and the console live on the gofer side;
- you do not want to bring your own provider key: every request goes straight to the endpoint you configure, and there is no hosted service;
- you need English docs: the detailed docs are the Chinese built-in skill `suga-guide`;
- you need a stable API: it is `v0`.

I mostly use it on Windows and Linux, and CI runs Ubuntu and Windows. macOS builds are published, but I rarely use them.

## Up and running in 30 seconds

```bash
eget install inhere/suga          # or go install github.com/inhere/suga/cmd/suga@latest
suga init                         # creates ~/.suga/config.yaml and .env
# put one key in ~/.suga/.env, e.g. DEEPSEEK_API_KEY=... (built in: openai / anthropic / deepseek)
suga config set model deepseek/deepseek-chat
suga chat                         # start in the current directory; :help lists commands, :context shows what is in the context
```

For a one-off task: `suga run --prompt "Summarize this project"`. To have it change code and check its work: `suga run --allow-write --verify "go test ./..." --prompt "Fix the failing test"`.

## If you read the code, start in these four places

- `internal/cli`: one file per command; `root.go` shows the whole command tree;
- `internal/wiring`: assembles providers, tools, skills, the system prompt and the runner, shared by the CLI and ACP;
- `internal/personal`: turns, segments, handoffs and events; reading it is reading suga's product logic;
- `pkg/agentcore`: the core and capability layer; start with the table in `layering_test.go`.

`docs/` holds 45 design docs, 32 plans and 13 research reports. Most of the "why" is in there, and most numbers in this post come from `docs/research`.

> I'm inhere ([blog](https://inhere.github.io) · [GitHub](https://github.com/inhere)), the author of suga. The numbers in this post come from measured runs on v0.48 to v0.49 and from the reports under `docs/research` in the repository. The commands are all in the text, so you can reproduce them.
