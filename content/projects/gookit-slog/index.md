+++
title = "gookit slog"
description = "一个易于使用的，轻量级、可配置、可扩展的日志库。支持多个级别，输出到多文件；内置文件日志处理、自动切割、清理、压缩等增强功能。"
weight = 3

[taxonomies]
tags = ["Golang", "Gookit", "slog", "logger"]

[extra]
+++


`gookit/slog` Go 一个易于使用的，轻量级、可配置、可扩展的日志库。支持多个级别，输出到多文件；内置文件日志处理、自动切割、清理、压缩等增强功能。

- Github https://github.com/gookit/slog

**控制台日志效果:**

![console-log-all-level](https://raw.githubusercontent.com/gookit/slog/master/_example/images/console-log-all-level.png)

## 功能特色

- 简单，无需配置，开箱即用
- 支持常用的日志级别处理
  - 如： `trace` `debug` `info` `notice` `warn` `error` `fatal` `panic`
- 可以任意扩展自己需要的 `Handler` `Formatter`
- 支持同时添加多个 `Handler` 日志处理，输出日志到不同的地方
- 支持自定义构建 `Handler` 处理器
  - 内置的 `handler.Config` `handler.Builder`,可以方便快捷的构建想要的日志处理器
- 支持自定义 `Formatter` 格式化处理
  - 内置了 `json` `text` 两个日志记录格式化 `Formatter`
- 已经内置了常用的日志处理器
  - `console` 输出日志到控制台，支持色彩输出
  - `writer` 输出日志到指定的 `io.Writer`
  - `file` 输出日志到指定文件，可选启用 `buffer` 缓冲写入
  - `simple` 输出日志到指定文件，无缓冲直接写入文件
  - `rotate_file` 输出日志到指定文件，并且同时支持按时间、按大小分割文件，默认启用 `buffer` 缓冲写入
  - 更多内置实现请查看 ./handler 文件夹

### 输出日志到文件

- 支持启用 `buffer` 缓冲日志写入
- 支持按时间、按大小自动分割文件
- 支持配置通过 `gzip` 压缩日志文件
- 支持清理旧日志文件 配置: `BackupNum` `BackupTime`
- `rotatefile` 包也可以用在其他日志库。例如：`log`、`glog`、`zap` 等等。

> 更多使用请看 [README](https://github.com/gookit/slog/blob/master/README.zh-CN.md)
