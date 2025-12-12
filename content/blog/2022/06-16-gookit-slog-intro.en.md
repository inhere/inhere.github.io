---
title: slog - Lightweight, configurable, extensible Go logging library
taxonomies:
  tags: [golang, gookit, log, logger]
date: 2022-06-16T21:00:00
---

`slog` - a lightweight, configurable, extensible Go logging library

![image](https://raw.githubusercontent.com/gookit/slog/master/\_example/images/console-log-all-level.png)

## Features

* Simple, directly available without configuration
* Support common log level processing.
   * eg: `trace` `debug` `info` `notice` `warn` `error` `fatal` `panic`
* Support any extension of `Handler` `Formatter` as needed
* Supports adding multiple `Handler` log processing at the same time, outputting logs to different places
* Support to custom log message `Formatter`
   * Built-in `json` `text` two log record formatting `Formatter`
* Support to custom build log messages `Handler`
   * The built-in `handler.Config` `handler.Builder` can easily and quickly build the desired log handler
* Has built-in common log write handler program
   * `console` output logs to the console, supports color output
   * `writer` output logs to the specified `io.Writer`
   * `file` output log to the specified file, optionally enable `buffer` to buffer writes
   * `simple` output log to the specified file, write directly to the file without buffering
   * `rotate_file` outputs logs to the specified file, and supports splitting files by time and size, and `buffer` buffered writing is enabled by default
   * See ./handler folder for more built-in implementations

### Output logs to file

* Support enabling `buffer` for log writing
* Support splitting log files by `time` and `size`
* Support configuration to compress log files via `gzip`
* Support clean old log files by `BackupNum` `BackupTime`

## Git repository

* Github: https://github.com/gookit/slog
* Gitee: https://gitee.com/gookit/slog

## Install

```bash
go get github.com/gookit/slog
```

## Quick start

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

**output preview:**

![image](https://raw.githubusercontent.com/gookit/slog/master/\_example/images/console-log-all-level.png)

## Logs to file

Using `slog` to output logs to files is very convenient, and supports multiple files, splitting by time, etc.

```go
package main

import (
	"github.com/gookit/slog"
	"github.com/gookit/slog/handler"
	"github.com/gookit/slog/rotatefile"
)

func main() {
	defer slog.MustFlush()

	// DangerLevels contains: slog.PanicLevel, slog.ErrorLevel, slog.WarnLevel
	h1 := handler.MustRotateFile("/tmp/logs/app_error.log", rotatefile.EveryHour,
		handler.WithLogLevels(slog.DangerLevels),
	)

	// NormalLevels contains: slog.InfoLevel, slog.NoticeLevel, slog.DebugLevel, slog.TraceLevel
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

See logs dir:

```bash
$ ls /tmp/logs
app_error.log
app_info.log
```

## More usage

> More usage please see [README](https://github.com/gookit/slog/blob/master/README.zh-CN.md)

