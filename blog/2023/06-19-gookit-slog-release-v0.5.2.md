---
title: gookit/slog - 发布 v0.5.2 版本, 易于使用的，可配置、可扩展的Go日志库
tags: [gookit,golang,logger,slog]
date: 2023-06-19T17:16
slug: gookit-slog-release-v0.5.2
authors: inhere
# gen by: kite run script/cgen.php --name gookit-slog-release-v0.5.2 --tags gookit,golang,logger,slog
---

`gookit/slog` 📑 一个易于使用的，轻量级、可配置、可扩展的日志库。支持多个级别，输出到多文件；内置文件日志处理、自动切割、清理、压缩等增强功能

<!--truncate-->

> Github https://github.com/gookit/slog

## v0.5.2 更新记录

**完整变更记录**: https://github.com/gookit/slog/compare/v0.5.1...v0.5.2

### 新功能

- ✨ feat: 添加新选项 FilePerm 用于自定义创建log文件上的权限. issues #102 https://github.com/gookit/slog/commit/699ecd8bc2dea0fb35607ba89d4299e86f96e40b
- ✨ feat: rotatefile - 添加新配置旋转模式 `RotateMode` ，支持在旋转时间创建日志文件。 https://github.com/gookit/slog/commit/8c4a9a08a9b3432a699f6770b73935ecfd42e5b8

### 更新调整

- 👔 up: 更新并添加更多单元测试，将 goutil 升级到 v0.6.10 https://github.com/gookit/slog/commit/693cc04eb0e375183357be18893cbecaa171ffa1
- 📝 doc: 更新README文档说明 https://github.com/gookit/slog/commit/cbf77c38db5615a9a7ec8ab07853b2f9e3517bfa
- ✅ test: 添加更多单元测试用例 https://github.com/gookit/slog/commit/8468ea470645bb981fb34002176671bac1a9559e

## 新功能使用

### 自定义日志文件权限

通过配置 `hander.Config` 的 `FilePerm` 设置创建的log文件权限标志。

```go
h1 := handler.MustFileHandler("/tmp/error.log",
    handler.WithLogLevels(slog.DangerLevels),
    handler.WithFilePerm(0644), // <- 设置创建文件的权限
)

slog.PushHandler(h1)

```

### 使用ModeCreate模式分割文件

RotateMode 文件切割模式：

- ModeRename 默认，每到时间重命名处理分割
- ModeCreate 只按照分割时间创建

设置 `RotateMode` 为 `ModeCreate` 可以让日志文件，只按照分割时间创建。

```go
h1 := handler.MustRotateFile(
    "/tmp/error.log",
    rotatefile.EveryHour, // 按每小时分割
    handler.WithLogLevels(slog.DangerLevels),
    handler.WithRotateMode(rotatefile.ModeCreate), // 设置RotateMode为ModeCreate
)

slog.PushHandler(h1)
```

如上面的示例配置 logfile 为 `/tmp/error.log`。设置为 `ModeCreate` 模式时，实际不会创建这个文件，
会按照实际分割时间来创建：

```bash
/tmp/error.log.20230618_1500
/tmp/error.log.20230618_1600
/tmp/error.log.20230618_1700
...
```

> **Tips**: `ModeCreate` 模式可以适用于命令行工具应用。因为它们是每次执行完就退出，`ModeRename` 模式下可能无法按时分割文件。

而使用 `ModeRename` 模式会是如下效果：

```bash
/tmp/error.log # <- 日志始终写入这个文件
/tmp/error.log.20230618_1500
/tmp/error.log.20230618_1600
/tmp/error.log.20230618_1700
...
```


## 更多

更多使用说明请看 [README](https://github.com/gookit/slog/blob/master/README.zh-CN.md)
