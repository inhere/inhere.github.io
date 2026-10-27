## 投稿方式

在 https://github.com/ruanyf/weekly/issues 新建 issue（周刊接受自荐，标题注明「自荐」）。提交前看一眼最近的自荐 issue 格式。

## 标题

【自荐】gofer：自托管的 coding agent 任务控制台

## 正文

gofer 是我写的一个开源工具（MIT），把 Claude Code、Codex 这类 coding agent 当成要验收的任务来跑：每个任务在独立的 git worktree 里改代码，做完停在「待验收」，看过 diff 和测试再合并或打回。一台 server 管多台机器，终端里的 agent 会话也能在手机浏览器上回复。

- 仓库：https://github.com/inhere/gofer
- 介绍文章：https://inhere.github.io/blog/2026/gofer-intro/
- 演示动图：https://inhere.github.io/img/blog/gofer-intro-review-merge.gif
