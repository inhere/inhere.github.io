---
title: cliui：给 Go CLI 程序补一层顺手的终端 UI
date: 2026-07-04T16:20:00
taxonomies:
  tags: [gookit, golang, cliui, terminal, cli]
slug: gookit-cliui-intro
---

很多 CLI 程序一开始都很简单：解析参数，跑任务，打印几行结果。等功能多起来之后，问题就变成了另一种样子：配置要排版，错误要醒目，安装和下载要显示进度，交互选择还要能在真实终端和 CI 日志里都工作。

`github.com/gookit/cliui` 处理的就是这类“还没到完整 TUI，但已经不适合全靠 fmt.Println”的场景。它把常用终端 UI 拆成三个包：`show`、`interact`、`progress`，分别负责结构化输出、交互输入和进度显示。

![cliui 终端 UI 辅助库海报](/img/blog/cliui-poster.png)

<!-- more -->

- 项目主页：[https://github.com/gookit/cliui](https://github.com/gookit/cliui)
- API 文档：[https://pkg.go.dev/github.com/gookit/cliui](https://pkg.go.dev/github.com/gookit/cliui)
- 最新版本：[https://github.com/gookit/cliui/releases/latest](https://github.com/gookit/cliui/releases/latest)

## 它不是一个大而全的 TUI 框架

如果你要做文件管理器、终端 dashboard、全屏编辑器，应该先看 Bubble Tea、tview 这类完整 TUI 框架。

`cliui` 更偏向普通命令行工具里的小组件：

- 打印一段醒目的状态或标题。
- 把 map、struct、slice 输出成容易扫读的列表。
- 让用户确认、输入、单选、多选。
- 给下载、构建、批处理任务显示进度。
- 在多进度条刷新时，仍然能安全输出日志。

这类能力经常散落在项目里，最后变成一堆小 helper。`cliui` 做的事情很朴素：把这些重复代码收拢起来，终端输出别乱，交互也别难测。

## show：让输出像结果，不像调试日志

CLI 输出最怕两种情况：全是散乱文本，或者为了机器可读性牺牲人类可读性。

`show` 适合输出命令结果、环境信息、配置摘要、执行报告。它提供 title、banner、list、multi-list、table、alert、pretty JSON 等组件。

```go
package main

import "github.com/gookit/cliui/show"

func main() {
	show.Banner("Deploy started")

	show.AList("App info", map[string]any{
		"name": "cliui",
		"env":  "dev",
	})

	show.JSON(map[string]any{
		"ok":      true,
		"version": "v0.3.x",
	})
}
```

简单工具里，这比自己拼空格和换行省事。命令多了以后，统一输出风格也少踩坑：错误提示、阶段标题、配置展示不用每个命令都重新写一套。

需要表格时可以用 `show/table`。比如展示包列表、任务结果、迁移状态、下载资产时，列宽和边框交给组件处理，业务代码只准备数据。

## interact：交互不应该绑死在真实终端上

交互式 CLI 最大的麻烦不是“读一行输入”，而是不同运行环境的差异。

真实终端里，用户希望方向键、回车、默认值、校验提示都正常；测试里，你希望输入输出可以替换；CI 或管道里，又不能强依赖 TTY。

`cliui/interact` 里保留了传统 prompt、confirm、question、select 等 API，同时提供了新的 backend 驱动 UI 层。常见组件包括：

- `Input`
- `Confirm`
- `Select`
- `MultiSelect`

新版交互层把组件和输入后端拆开。`readline` backend 用于真实终端，`plain` backend 用于行输入、测试或重定向 stdin，`fake` backend 用于事件级测试。

```go
package main

import (
	"context"
	"fmt"

	"github.com/gookit/cliui/interact"
)

func main() {
	ctx := context.Background()

	// 非 TTY 环境会回退到 plain backend。
	be := interact.NewUIReadlineBackend()

	nameInput := interact.NewUIInput("Your name")
	nameInput.Default = "guest"

	name, err := nameInput.Run(ctx, be)
	if err != nil {
		panic(err)
	}

	envSelect := interact.NewUISelect("Choose env", []interact.UIItem{
		{Key: "dev", Label: "Development", Value: "dev"},
		{Key: "test", Label: "Testing", Value: "test"},
		{Key: "prod", Label: "Production", Value: "prod"},
	})
	envSelect.DefaultKey = "dev"
	envSelect.Filterable = true

	env, err := envSelect.Run(ctx, be)
	if err != nil {
		panic(err)
	}

	fmt.Println("name:", name)
	fmt.Println("env:", env.Value)
}
```

这里有几个细节会在真实项目里用上：

- `Key` 是稳定输入值，`Label` 是展示文本，`Value` 给业务侧使用。
- `DefaultKey` / `DefaultKeys` 可以给单选、多选设置默认项。
- `Filterable` 适合候选项很多的场景，在真实终端里可以直接输入关键字过滤。
- `Disabled` 可以展示不可选项，但不会让它被提交。
- `PageSize` 可以限制一次渲染的列表数量，窄终端或候选项很多时更稳。

测试时也不用真的启动一个终端。把 backend 换成 plain 或 fake，就能验证输入、选择、校验错误和 resize 事件。

## progress：单个进度条之外，还有批量任务

简单任务用一个进度条就够了：

```go
package main

import (
	"time"

	"github.com/gookit/cliui/progress"
)

func main() {
	p := progress.Bar(100)
	p.Start()

	for range 100 {
		time.Sleep(20 * time.Millisecond)
		p.Advance()
	}

	p.Finish()
}
```

`progress` 还提供 text progress、counter、loading、round-trip、dynamic text 等模式。总步数明确时用 `Bar` 或 `Full`，只想显示计数时用 `Counter`，等待外部任务时用 loading 或 spinner。

批量下载、并发构建、并行安装工具时，一个进度条通常不够；但多个 goroutine 直接往终端写，又很容易把输出打乱。这里就轮到 `MultiProgress`。

`MultiProgress` 会托管多个 `Progress`，把它们渲染在同一个终端区域里：

```go
mp := progress.NewMulti()
mp.UseAutoRenderMode()
mp.AutoRefresh = true
mp.RefreshInterval = 100 * time.Millisecond

build := mp.New(100)
build.SetMessage("name", "build")
build.SetFormat("{@name:-8s} [{@bar}] {@percent:5s}%")
build.AddWidget("bar", progress.BarWidget(24, progress.BarStyles[0]))

test := mp.New(80)
test.SetMessage("name", "test")
test.SetFormat("{@name:-8s} [{@bar}] {@percent:5s}%")
test.AddWidget("bar", progress.BarWidget(24, progress.BarStyles[0]))

mp.Start()
defer mp.Finish()
```

`UseAutoRenderMode()` 会根据 writer 是否是终端选择渲染方式：

- `RenderDynamic`：真实终端里用 ANSI 控制符原地刷新。
- `RenderPlain`：CI、日志文件、重定向输出里写普通文本。
- `RenderDisabled`：完全关闭进度渲染，但保留日志输出能力。

这对 CLI 工具很实在。同一段代码在本地终端里可以原地刷新，到了 GitHub Actions 或 Jenkins 里就应该变成普通日志，不要留下一堆控制字符。

多行进度正在刷新时，普通日志也不能随便 `fmt.Println`。`MultiProgress` 提供了安全出口：

```go
mp.Println("warning: fallback to single connection")
mp.Printf("package %s failed: %v\n", name, err)

mp.RunExclusive(func(w io.Writer) {
	fmt.Fprintf(w, "checksum verified with %s\n", sum)
})
```

它会先移开当前 progress block，输出日志后再恢复渲染，避免日志和进度条互相覆盖。

## 下载和复制可以按字节推进

很多 CLI 工具最后都会遇到下载或文件复制。按“完成几个任务”推进进度不够细，按字节数推进更自然。

`Progress` 可以包装 reader/writer：

```go
p := progress.Full(resp.ContentLength)
p.Start()
defer p.Finish()

_, err := io.Copy(dst, p.WrapReader(resp.Body))
if err != nil {
	p.Fail(err.Error())
	return err
}
```

如果有多个 goroutine 同时上报字节数，可以用 `ByteTracker` 聚合更新，避免每次写入都刷新终端：

```go
bar := progress.Full(totalSize)
tracker := progress.NewByteTrackerWithInterval(bar, 100*time.Millisecond)
defer tracker.Close()

tracker.Add(n)
```

这类能力适合下载器、安装器、压缩/解压工具、批量处理脚本。业务代码只关心“读了多少、写了多少”，终端刷新频率交给 `cliui` 控制。

## 从 gcli/v3 迁移

`cliui` 把 `gookit/gcli/v3` 里终端展示和交互相关能力拆出来单独维护。

迁移路径如下：

```text
github.com/gookit/gcli/v3/show     -> github.com/gookit/cliui/show
github.com/gookit/gcli/v3/interact -> github.com/gookit/cliui/interact
github.com/gookit/gcli/v3/progress -> github.com/gookit/cliui/progress
```

如果你的项目只需要 UI 组件，不想把完整 CLI 框架一起带进来，单独依赖 `cliui` 会更轻。

## 什么时候适合用 cliui

适合：

- Go CLI 工具需要更清楚的状态、列表、表格或 JSON 输出。
- 命令需要少量交互，比如确认、选择环境、选择安装项。
- 有下载、安装、构建、批处理这类长时间任务。
- 同一套命令要同时跑在真实终端、CI、管道和测试里。
- 项目已经在用 `gookit/gcli/v3` 的 `show/interact/progress`，想拆到独立包。

不适合：

- 需要完整全屏 TUI。
- 需要复杂布局、鼠标事件、多 pane 管理。
- 输出必须完全机器可读，不能出现任何人类友好的格式。

所以它更像普通 CLI 的工具箱，而不是全屏终端应用框架。

## 试一下

安装：

```bash
go get github.com/gookit/cliui
```

也可以只安装需要的子包：

```bash
go get github.com/gookit/cliui/show
go get github.com/gookit/cliui/interact
go get github.com/gookit/cliui/progress
```

如果你正在写 Go CLI，先从最容易变乱的地方接入就行：把结果输出换成 `show`，把确认/选择换成 `interact`，把下载或批处理换成 `progress`。不用一次改完整个项目。
