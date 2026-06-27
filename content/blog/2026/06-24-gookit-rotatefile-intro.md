---
title: rotatefile：给 Go 日志补上文件轮转、压缩和清理
date: 2026-06-24T21:11:54
taxonomies:
  tags: [gookit, golang, rotatefile, logger]
slug: gookit-rotatefile-intro
---

Go 标准库能把日志写到 `io.Writer`，但不会管文件什么时候切、旧文件留多久、磁盘占用怎么收。项目一旦开始写本地日志，这些问题迟早会冒出来。

`github.com/gookit/rotatefile` 做的事情很窄：提供一个支持轮转、压缩和清理的 `io.Writer`。你可以继续用标准库 `log/slog`、`log`、`zap` 或 `gookit/slog`，只把文件轮转这部分交给它。

![rotatefile 日志轮转海报](/img/blog/rotatefile-poster.png)

<!-- more -->

- 项目主页：[https://github.com/gookit/rotatefile](https://github.com/gookit/rotatefile)
- API 文档：[https://pkg.go.dev/github.com/gookit/rotatefile](https://pkg.go.dev/github.com/gookit/rotatefile)
- 命令行清理工具：[cmd/filecleaner](https://github.com/gookit/rotatefile/tree/main/cmd/filecleaner)

## rotatefile 只做文件这层

很多日志库会顺手带一个文件切割能力，但这也意味着你要接受它的日志 API、字段模型和 handler 设计。`rotatefile` 反过来，只站在 `io.Writer` 这一层：

```go
package main

import "github.com/gookit/rotatefile"

func main() {
	w, err := rotatefile.NewConfig("logs/app.log").Create()
	if err != nil {
		panic(err)
	}
	defer w.Close()

	_, _ = w.Write([]byte("a log message\n"))
}
```

这段代码里没有 logger 概念。`rotatefile.Writer` 只关心写入、轮转、同步、关闭和旧文件清理。只要你的日志库能写 `io.Writer`，它就能接进去。

这个包是从 [gookit/slog](https://github.com/gookit/slog) 里拆出来的。拆出来以后，使用场景更清楚：如果你只缺日志文件轮转，不需要换整套日志库。

## 常用配置就这几项

先看一段比较接近日常使用的配置：

```go
package main

import "github.com/gookit/rotatefile"

func main() {
	w, err := rotatefile.NewConfig("logs/app.log", func(c *rotatefile.Config) {
		c.MaxSize = 100 * rotatefile.OneMByte
		c.RotateTime = rotatefile.EveryDay
		c.BackupNum = 30
		c.BackupTime = 24 * 7
		c.Compress = true
	}).Create()
	if err != nil {
		panic(err)
	}
	defer w.Close()
}
```

这些字段基本覆盖了大多数本地日志场景：

- `MaxSize`：按文件大小轮转，单位是字节。默认是 `20MB`，设为 `0` 表示不按大小切。
- `RotateTime`：按时间轮转。内置 `EveryDay`、`EveryHour`、`Every30Min`、`Every15Min`、`EveryMinute` 等常量。
- `BackupNum`：最多保留多少个旧文件。默认是 `20`，设为 `0` 表示不按数量限制。
- `BackupTime`：旧文件最多保留多久，单位是小时。默认是 `24 * 7`。
- `Compress`：把已轮转的旧文件压缩成 gzip。

还有几个进阶配置也值得知道：

- `FilePerm`：创建日志文件时的权限，默认 `0664`。
- `CleanOnClose`：关闭 writer 时做一次清理。
- `RenameFunc`：按大小轮转时自定义旧文件名。
- `TimeClock`：替换时钟，主要用于测试按时间轮转。

配置项不多，核心思路也简单：写入后检查是否达到大小或时间条件，达到就切文件；清理策略独立处理旧文件。

## rename 和 create 是两种不同的文件模型

`rotatefile` 有两种轮转模式。

默认的 `ModeRename` 会一直写固定文件，比如 `logs/app.log`。需要轮转时，把当前文件重命名成带后缀的旧文件，然后重新创建新的 `logs/app.log`。

```go
c.RotateMode = rotatefile.ModeRename
```

这种模式适合外部工具固定 tail 一个文件的场景。采集器、排查脚本或人肉 `tail -f logs/app.log` 都不用关心当前周期文件名。

`ModeCreate` 则是每个时间周期直接写一个带日期后缀的新文件。

```go
c.RotateMode = rotatefile.ModeCreate
```

它更适合按日期查看和归档。比如你希望今天的日志天然就在 `app.20260624.log` 这类文件里，而不是等轮转时再 rename。

两种模式没有绝对优劣，取决于你更在意“固定入口文件”还是“天然按周期分文件”。

## 接标准库 slog

`log/slog` 从 Go 1.21 开始进入标准库。它的 handler 接受 `io.Writer`，所以接 `rotatefile` 很直接：

```go
package main

import (
	"log/slog"

	"github.com/gookit/rotatefile"
)

func main() {
	w, err := rotatefile.NewConfig("logs/app.log", func(c *rotatefile.Config) {
		c.MaxSize = 50 * rotatefile.OneMByte
		c.RotateTime = rotatefile.EveryDay
		c.BackupNum = 7
	}).Create()
	if err != nil {
		panic(err)
	}
	defer w.Close()

	logger := slog.New(slog.NewJSONHandler(w, nil))
	logger.Info("user login", "uid", 1001)
}
```

这里 `slog` 仍然负责结构化日志，`rotatefile` 只负责目标文件的生命周期。

## 接标准库 log、zap 或其他 logger

标准库 `log` 更简单：

```go
package main

import (
	"log"

	"github.com/gookit/rotatefile"
)

func main() {
	w, err := rotatefile.NewConfig("logs/app.log").Create()
	if err != nil {
		panic(err)
	}
	defer w.Close()

	log.SetOutput(w)
	log.Println("hello rotatefile")
}
```

zap 也是同一类思路，只是它需要把 writer 包一层 `zapcore.WriteSyncer`：

```go
// zapcore.AddSync(w)
```

这也是 `rotatefile` 保持在 `io.Writer` 层的好处。日志库怎么组织字段、怎么做 level、怎么采样，都和文件轮转解耦。

## 旧文件清理可以单独用

文件轮转解决的是“当前文件不要无限长大”，但线上更常见的问题是旧文件越积越多。`rotatefile` 里有一个独立的 `FilesClear`，可以只用来清理文件。

```go
package main

import "github.com/gookit/rotatefile"

func main() {
	fc := rotatefile.NewFilesClear(func(c *rotatefile.CConfig) {
		c.AddPattern("/var/log/app/*.log.*")
		c.BackupNum = 20
		c.BackupTime = 168
	})

	if err := fc.Clean(); err != nil {
		panic(err)
	}
}
```

它不依赖 `Writer`。也就是说，你可以拿它清 Go 程序写出来的日志，也可以清 PHP-FPM、Nginx 或其他程序留下的文件。

`FilesClear` 支持几类实用配置：

- `Patterns`：用 glob 匹配文件。
- `BackupNum`：按数量保留最新 N 个。
- `BackupTime`：按时间清理过期文件。
- `TimeUnit`：调整 `BackupTime` 的单位，默认是小时。
- `Recursive`：匹配到目录时递归处理子目录。
- `RemoveEmptyDir`：递归清理后删除变空的目录。
- `DryRun`：只打印将删除的文件，不实际删除。
- `IgnoreError`：单个文件删除失败时继续处理其他文件。

清理策略有一个硬限制：`BackupNum` 和 `BackupTime` 不能同时为 `0`。否则这次清理没有任何保留规则，代码会直接报错。

## filecleaner 适合丢给 cron

如果你不想写 Go 代码，只想定时清理某些目录，可以用仓库里的 `filecleaner` 命令行工具。它基于 `FilesClear`，配置用 JSON。

```bash
go install github.com/gookit/rotatefile/cmd/filecleaner@latest

filecleaner -c filecleaner.json
filecleaner --dry-run -c filecleaner.json
filecleaner --daemon -c filecleaner.json
```

配置文件的顶层是 `jobs`，每个 job 有自己的匹配规则和保留策略：

```json
{
  "jobs": [
    {
      "patterns": ["/var/log/app/*.log.*"],
      "backup_num": 20,
      "backup_time": 168,
      "time_unit": "1h"
    },
    {
      "patterns": ["/var/log/svc"],
      "recursive": true,
      "remove_empty_dir": true,
      "backup_time": 7,
      "time_unit": "24h"
    }
  ]
}
```

`--dry-run` 很适合第一次上线前跑一遍，先确认会删哪些文件。确认没问题后，再放进 cron 或用 `--daemon` 长跑。

## LineWriter 解决半行日志问题

`rotatefile` 还有一个子包 `bufwrite`，里面的 `LineWriter` 不是普通意义上的“按换行符 flush”的行缓冲。这里的 Line 指“一次 `Write` 调用就是一条逻辑记录”。

为什么需要它？普通 `bufio.Writer` 在缓冲区剩余空间不够时，可能把一次 `Write(p)` 拆成两段：一段写到底层 writer，另一段留在缓冲里。对普通文本问题不大，但如果一条 JSON 日志正好被拆开，外部采集器就可能读到半条记录。

`LineWriter` 的策略更保守：如果当前缓冲放不下这次 `Write(p)`，就先 flush 已有缓冲，再把 `p` 作为一次完整底层写入。

```go
package main

import (
	"github.com/gookit/rotatefile"
	"github.com/gookit/rotatefile/bufwrite"
)

func main() {
	w, err := rotatefile.NewConfig("logs/app.log").Create()
	if err != nil {
		panic(err)
	}

	bw := bufwrite.NewLineWriter(w)
	defer bw.Close()

	_, _ = bw.Write([]byte(`{"level":"info","msg":"ok"}` + "\n"))
}
```

有两个边界要记住：

- 它不会看到 `\n` 就自动 flush，结束前仍然要 `Close` 或 `Flush`。
- 它不是并发安全的；多 goroutine 写入时，需要外部加锁，或者让上层 logger 保证串行写。

## 实现上值得注意的几个点

这不是源码解析，但有几个设计细节能解释它为什么不只是一个简单的 `os.Rename` 包装。

第一，时间轮转会按周期边界计算下一次检查时间。比如按天、按小时、按分钟轮转时，文件后缀格式不同：`20060102`、`20060102_1500`、`20060102_1504`。这让文件名更适合按周期排序。

第二，写入流程是“先写，再检查轮转”。这样调用方拿到的 `Write` 语义更直观：这次写入先落到当前打开的文件，再根据大小和时间条件决定是否切到下一个文件。

第三，旧文件清理不是每次写入都同步扫目录。writer 会异步触发清理，减少日志写入路径上的停顿。`Close()` 时会 `Sync` 文件、停止清理 goroutine，再关闭文件句柄。

第四，`TimeClock` 可以替换当前时间，包里也有 `MockClocker`。这让按时间轮转的测试不用真的等到下一分钟或下一小时。

## 什么时候适合用 rotatefile

这些场景比较适合用它：

- 服务直接写本地日志文件，需要限制文件大小。
- CLI、后台任务或单机工具不想额外配置系统级 logrotate。
- 已经在用 `slog`、`log`、`zap`，只缺文件轮转。
- 想把日志 API 和文件生命周期拆开管理。
- 需要一个小工具定期清理日志、备份或其他过期文件。

也有一些场景不一定需要它：

- 容器环境里日志直接打到 stdout，并由平台统一采集和保留。
- 公司已经有统一的系统级 logrotate 策略，并且运维侧集中管理。
- 多个进程同时写同一个日志文件。这个场景需要额外确认文件锁和部署方式，不能只靠一个 writer 解决。

`rotatefile` 的定位是基础工具包，不是完整日志方案。它适合补上 Go 标准库和多数 logger 不负责的那一层：文件轮转、旧文件清理和压缩。

## 安装

```bash
go get github.com/gookit/rotatefile
```

更多配置可以看 [GoDoc](https://pkg.go.dev/github.com/gookit/rotatefile)。如果只想用命令行清理旧文件，直接看 [filecleaner README](https://github.com/gookit/rotatefile/tree/main/cmd/filecleaner) 会更快。
