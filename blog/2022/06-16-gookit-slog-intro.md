---
title: slog - 一个易于使用的，易扩展、可配置的日志库
tags: [golang, gookit, log, logger]
date: 2022-06-16T21:00
slug: gookit-slog-intro
authors: inhere
---

`gookit/slog` 📑 一个易于使用的，轻量级、可配置、可扩展的日志库。支持多个级别，输出到多文件；内置文件日志处理、自动切割、清理、压缩等增强功能

![image](https://raw.githubusercontent.com/gookit/slog/master/_example/images/console-log-all-level.png)

<!--truncate-->

## 功能特色

* 简单，无需配置，开箱即用
* 支持常用的日志级别处理
   * 如： `trace` `debug` `info` `notice` `warn` `error` `fatal` `panic`
* 可以任意扩展自己需要的 `Handler` `Formatter`
* 支持同时添加多个 `Handler` 日志处理，输出日志到不同的地方
* 支持自定义构建 `Handler` 处理器
   * 内置的 `handler.Config` `handler.Builder`,可以方便快捷的构建想要的日志处理器
* 支持自定义 `Formatter` 格式化处理
   * 内置了 `json` `text` 两个日志记录格式化 `Formatter`
* 已经内置了常用的日志处理器
   * `console` 输出日志到控制台，支持色彩输出
   * `writer` 输出日志到指定的 `io.Writer`
   * `file` 输出日志到指定文件，可选启用 `buffer` 缓冲写入
   * `simple` 输出日志到指定文件，无缓冲直接写入文件
   * `rotate_file` 输出日志到指定文件，并且同时支持按时间、按大小分割文件，默认启用 `buffer` 缓冲写入
   * 更多内置实现请查看 ./handler 文件夹

### 输出日志到文件

* 支持启用 `buffer` 缓冲日志写入
* 支持按时间、按大小自动分割文件
* 支持配置通过 `gzip` 压缩日志文件
* 支持清理旧日志文件 配置: `BackupNum` `BackupTime`

## Git 仓库

* Github: https://github.com/gookit/slog
* Gitee: https://gitee.com/gookit/slog

## 安装

```bash
go get github.com/gookit/slog
```

## 快速开始

```go
package main

import (
	"github.com/gookit/slog"
)

func main() {
	slog.Trace("this is a log message")
	slog.Debug("this is a log message")
	slog.Info("this is a log message")
	slog.Notice("this is a log message")
	slog.Warn("this is a log message")
	slog.Error("this is a log message")
	slog.Fatal("this is a log message")
}
```

**控制台日志效果:**

![image](https://raw.githubusercontent.com/gookit/slog/master/\_example/images/console-log-all-level.png)

## 记录到文件

使用 `slog` 输出日志到文件非常方便，并且支持多文件，按时间分割等

```go
package main

import (
	"github.com/gookit/slog"
	"github.com/gookit/slog/handler"
	"github.com/gookit/slog/rotatefile"
)

func main() {
	defer slog.MustFlush()

	// DangerLevels 包含: slog.PanicLevel, slog.ErrorLevel, slog.WarnLevel
	h1 := handler.MustRotateFile("/tmp/logs/app_error.log", rotatefile.EveryHour,
		handler.WithLogLevels(slog.DangerLevels),
	)

	// NormalLevels 包含: slog.InfoLevel, slog.NoticeLevel, slog.DebugLevel, slog.TraceLevel
	h2 := handler.MustRotateFile("/tmp/logs/app_info.log", rotatefile.EveryHour,
		handler.WithLogLevels(slog.NormalLevels),
	)

	slog.PushHandler(h1)
	slog.PushHandler(h2)

	// add logs
	slog.Info("info message text")
	slog.Error("error message text")
}
```

查看日志目录:

```bash
$ ls /tmp/logs
app_error.log
app_info.log
```

## 自定义创建logger

```go


```

## bufwrite 包

`github.com/gookit/slog/bufwrite`

## rotatefile 包

`github.com/gookit/slog/rotatefile`


## 更多使用

> 更多使用说明请看 README https://github.com/gookit/slog/blob/master/README.zh-CN.md

