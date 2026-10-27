## 节点

分享创造（备选：程序员）

## 标题

写了个自托管的工具，把 Claude Code / Codex 当成要验收的任务来跑，多台机器一个控制台

## 正文

我是作者，先说清楚。gofer 是我自己每天在用的工具，单个 Go 二进制带 Web 控制台，MIT 开源，现在是 v0.200，还在 0.x。

起因很简单：我同时开着三四个 Claude Code 和 Codex 会话，分在两台电脑和一个容器里，经常答不上来哪个会话在等我、那个让它修测试的 agent 到底改了什么、昨晚派出去的活是做完了还是早就报错退出了。

现在的用法大概是这样：

- 派活：`gofer job run -a claude --worktree --review --prompt "…"`，agent 在独立的 git worktree 和分支里改，做完不算完成，停在「待验收」。
- 验收：汇报、提交、diff、测试输出、token 用量一屏看完，通过就合并回主分支，不行就写理由打回，让它带着原来的会话接着改。
- 多台机器：其他电脑或容器作为 worker 主动连到 server，不用开入站端口，`--runner <worker>` 就能把活派过去。
- 手机上看：终端里开着的 Claude Code / Codex 会话也能登记进来，停下来等我拍板时，在手机浏览器上回复它。

它不是 agent，也不带模型，只是启动和管住你已经装好的 CLI。不是沙箱，适合一个人或者互相信任的小团队。

另外说一下：gofer 大部分代码是 agent 在 gofer 上写的，我负责拆任务、审 diff、跑测试和发版，目前 3700 多个提交。这个流程本身也是在验证它好不好用。

文章（有截图和动图）：https://inhere.github.io/blog/2026/gofer-intro/
仓库：https://github.com/inhere/gofer

想请教一下：大家同时开好几个 agent 会话的时候，是怎么管住它们改了什么、什么时候该自己介入的？
