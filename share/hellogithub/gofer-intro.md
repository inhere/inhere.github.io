## 投稿方式

在 https://github.com/521xueweihan/HelloGitHub/issues/new 按 issue 模板自荐（提交前核对当前模板的字段，下面按常见字段准备）。

## 项目地址

https://github.com/inhere/gofer

## 类别

Go

## 项目标题

自托管的 coding agent 任务控制台

## 项目描述

gofer 把 Claude Code、Codex、ACP agent 或普通命令当成可追踪、可验收的任务来跑。每个任务可以在独立的 git worktree 和分支里改代码，结束后停在「待验收」，汇报、提交、diff、测试输出放在一起看，通过就合并，不行就打回让 agent 在原会话里继续改。一台机器跑 server，其他电脑或容器作为 worker 主动连上来；终端里开着的 agent 会话也能登记进来，在手机浏览器上回复。单个 Go 二进制，自带 Web 控制台，MIT 协议。

## 亮点

- 并行：多个 agent 同时改同一个仓库，各用各的 worktree，互不干扰
- 验收：「做完」和「通过」分开，像审 PR 一样接受或打回
- 多机：worker 主动连 server，不需要开入站端口
- 不绑厂商：只启动你已经装好的 CLI，不带模型
- 自托管：数据和控制面都在自己机器上

## 示例代码

```bash
gofer job run -p <project> -a claude --worktree --review \
  --prompt "找出 TestFoo 偶发失败的原因并修复，跑通相关测试"
gofer job review <id>                     # 汇报、提交、diff、验证一屏看完
gofer job accept <id>                     # 或 gofer job reject <id> --note "…" --resume
gofer job worktree merge <id> --cleanup   # 合并回主分支
```

## 截图或演示视频

https://inhere.github.io/img/blog/gofer-intro-review-merge.gif

## 后续更新计划

继续完善英文界面与文档；之后按功能写系列文章（验收流程、多机部署、手机上管 agent、计划与工作流）。
