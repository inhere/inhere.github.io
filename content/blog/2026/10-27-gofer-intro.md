---
title: 把 Claude Code、Codex 当成可验收的任务来跑：gofer，一个自托管的 agent 控制面
date: 2026-10-27T10:00:00
taxonomies:
  tags: [gofer, golang, ai-agent, claude-code, codex, self-hosted, open-source]
slug: gofer-intro
---

同时开着三四个 Claude Code 和 Codex 会话、分布在两台电脑和一个容器里的时候，我经常答不上这几个问题：哪个会话在等我回复？那个让它改测试的 agent 到底改了什么，跑过测试没有？昨天晚上派出去的活，现在是做完了、卡住了，还是早就报错退出了？出门在外，手机上能不能看一眼、点个批准？

`gofer` 是我为这件事写的工具。一句话：**你的 agent、你的机器、一个控制面**——把 Claude Code、Codex、ACP agent 或者普通命令，作为可追踪、可验收的任务，跑在你自己的每台机器上，不上云，worker 也不需要开入站端口。

先交代清楚：gofer 是 MIT 开源，单个 Go 二进制带一个 Web 控制台；当前版本 v0.199，还在 `0.x`，发版频繁，接口可能调整，以 CHANGELOG 为准；以下是 gofer 简介。

![gofer：你的 agent、你的机器、一个控制面](/img/blog/gofer-intro-poster.png)

<!-- more -->

- 仓库：[github.com/inhere/gofer](https://github.com/inhere/gofer)
- 发布页：[releases/latest](https://github.com/inhere/gofer/releases/latest)（Linux / macOS / Windows 二进制，含 Web 控制台）

![gofer 工作台：左边是登记的会话，右边是一个会话的对话和输入框](/img/blog/gofer-intro-workbench.png)

## 它是什么，不是什么

gofer 由三部分组成：

- **server**（`gofer serve`）：唯一的事实来源。项目和准入规则、任务存储、调度、HTTP API、Web 控制台都在这里，一台机器一个。
- **worker**（`gofer worker`）：其他机器或容器上的执行器。它主动连到 server，报告自己有哪些目录、装了哪些 agent，然后在本地跑任务。不需要开入站端口。
- **agent**：真正干活的程序。gofer 不带模型，它启动和监管你已经装好的 CLI：`claude`、`codex`、`omp`、ACP agent，或者一条普通命令。

它**不是** agent，也不是托管服务、CI 系统或沙箱，不做多租户。访问基于 token，任务以执行它的 gofer 进程的权限运行。适合一个人，或者互相信任的小团队。

## 一个任务长什么样

最小的例子是跑一条命令：

```bash
gofer job run -p <project> -a exec --title "hello" --sync -- go version
gofer job logs <id>
```

真正常用的是派给 agent，并要求它做完停下来等我验收：

```bash
gofer job run -p <project> -a claude --title "修掉 flaky 测试" \
  --worktree --review --prompt "找出 TestFoo 偶发失败的原因并修复，跑通相关测试"
```

- `--worktree`：这个任务在独立的 git worktree 和分支里改代码，主 checkout 不动。几个 agent 同时改同一个仓库也不会互相踩。
- `--review`：agent 正常结束后，任务不直接算「完成」，而是停在「待验收」。

验收时，汇报、提交、diff、验证输出和 token 用量在一个面板里看完，通过就合并，不行就写明理由打回，可以让它带着原来的会话继续改：

```bash
gofer job review <id>                     # 终端里一屏看完
gofer job accept <id>                     # 或：gofer job reject <id> --note "…" --resume
gofer job worktree merge <id> --cleanup   # 合并回主分支，清理 worktree
```

也就是：**把活交给任意 coding agent，再像审 PR 一样接受或打回**。

![从待验收打开任务，看 diff，通过并合并到基线](/img/blog/gofer-intro-review-merge.gif)

## 多台机器，一个控制台

我的日常是一台 Windows 主力机、一个 Linux 容器，外加另外两台 Windows。它们都作为 worker 连到同一个 server：

```bash
# server 上：登记 worker，拿一次性 token
gofer worker add <worker-id> --project <project>
# 那台机器上：推断目录、探测 agent、写配置、自检，然后后台运行
gofer worker init --server http://<server>:8765 --id <worker-id> --token <一次性 token>
gofer worker -d
```

之后 `--runner <worker-id>` 就能把任务派过去。升级也在控制台里一键完成：server 先等手上的任务跑完再重启，再逐台升级 worker，不同操作系统和架构的 worker 会从下载源取各自的包。

## 终端会话也能在手机上接

很多时候我不是派任务，而是直接在终端里开着 Claude Code 干活。gofer 可以把这些会话登记起来：

```bash
gofer init hooks --agent all --global   # 登记 Claude Code / Codex / omp 会话
gofer session relay on                  # 会话停下来时，在 Web 上等我回复
```

会话停下来等我拍板时，我在浏览器或手机上就能看到它问了什么、回复它，或者唤醒一个已经停掉的会话。控制台首页「今天」是一个队列，所有在等我决定的事都在这里：待批准的任务、待回答的问题、待验收的结果、等回复的会话。

对 ACP agent，还可以开审批：改文件、执行命令这类调用要人点头，只读工具直接放行。

<img src="/img/blog/gofer-intro-today-phone.png" alt="手机上的「今天」页：待批准和待验收的任务" width="320">

## 再往上：计划、信箱、仓库里的 tracker

单个任务之上还有几层，系列后续文章会一篇一篇展开：

- **计划**：把一批活拆成带依赖的待办，前一项完成后一项自动派发；一份任务也可以扇出给几个 agent，对比结果再择优合并。
- **信箱**：会话和任务之间按地址互相写信、实时沟通，收发双方可以是不同的 agent（`claude-code <-> codex`），也可以在不同的机器上。例如让负责前端的会话通知负责后端的会话「接口改好了」。
- **仓库里的 tracker 与记忆**：issue 和 agent 记住的经验存在仓库里（`.gofer/tracker`），跟着代码走，Web 上可以跨项目搜索。
- **定时任务**：cron 或一次性，带参数，比如每天清理构建缓存。

入口有四个，操作的是同一批任务：CLI、HTTP API、MCP server，以及 Web 控制台。

## 自己用自己

gofer 从 2026 年 6 月中旬开始写，到现在四个多月，3700 多个提交、290 个版本。它大部分是由 agent 在 gofer 上一批批写出来的：我在一个 Claude Code 会话里做设计、拆任务、审核，具体实施派给 worktree 里的 agent，跑完停在待验收，我看过 diff 和测试再合并、发版。server 上记着的任务有 12,415 个，其中 10,901 个完成，1,216 个失败。

失败的那一千多个任务里，不少是我在调 gofer 本身：测试在高负载下计时太紧、并发操作 git worktree 的竞态、发版脚本吞掉了合并失败。这些坑后面会单独写一篇。

我的另一个项目 suga（一个用 Go 写的个人 coding agent）也是这样开发出来的，它的介绍见[上一篇](/blog/2026/suga-long-session/)。

## 和别的工具比

这一类工具不少，先说清楚它们各自的长处：

- Claude Code 自带的 Remote Control 零配置、有官方手机应用，但只管 Claude，一个进程管一台机器。
- Conductor 在 Mac 上体验很好，闭源，云端和手机功能要付费。
- Superset 和 gofer 最像：桌面应用、多主机、有 iPhone / iPad 应用，许可证是 ELv2。

gofer 的取舍是：MIT、控制面也在你自己手里；不绑定 agent 厂商；server 加 Web 控制台而不是桌面应用；验收、审批、计划、信箱这些围绕「把活交出去、再收回来」的流程做得比较完整。代价是要自己部署一个 server，界面也没有桌面应用那么精致。

## 局限

- 不是沙箱。任务以 gofer 进程的权限运行，token 等于在执行机上跑命令的能力。请放在本机、内网或 VPN 里，不要直接暴露到公网。
- 面向一个人或互信的小团队，没有多租户。
- 我自己主要在 Windows 和 Linux 上用，macOS 能跑但没有长期实机使用。
- 一部分文档还是中文的；英文的快速上手、概念、功能和安全说明已经补上。

## 试一下

```bash
eget install inhere/gofer      # 或从 Releases 下载对应平台的包
gofer init server --global
export GOFER_TOKEN=change-me   # Windows：$env:GOFER_TOKEN = "change-me"
gofer project add <project> --host-path /abs/path/to/<project> \
  --default-agent codex --allow-agent codex --allow-agent claude --allow-agent exec \
  --allow-runner server --allow-exec
gofer serve
```

然后浏览器打开 `http://<server>:8765/`，粘贴 token。完整步骤见仓库 README 的「10 分钟上手」。

这是 gofer 系列的第一篇。接下来会按功能写：像审 PR 一样验收 agent、一台 server 多台机器、在手机上管 agent、计划与工作流、agent 之间写信、今天与管家、仓库里的 tracker 与记忆，以及用 gofer 开发 gofer 时踩过的坑。用起来有问题，欢迎在 GitHub 提 issue。
