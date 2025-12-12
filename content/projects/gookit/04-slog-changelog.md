---
title: gookit slog 版本更新日志
taxonomies:
  tags: [gookit,golang,slog,logger]
date: 2025-04-24T13:25:00
# authors: inhere
---
# Slog 版本更新日志

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

## v0.5.1 更新日志

### 更新

- ⚡ perf: 优化处理日志消息数据的性能
- 👔 up: 更新一些代码逻辑并添加更多单元测试

### 其他

- ✅ test: 更新benchmark测试并更新readme

## v0.5.0 更新日志

### 变更

- 💥 break: 重命名一些接口和结构体

### 新增功能

✨ feat: handler - 配置新增字段 LevelMode, Level
✨ feat: 为 handler.Builder 添加更多快速的配置方法

### 其他

- 📝 doc: 更新readme文档并添加更多用法示例
- ⬆️ dep: 更新相关依赖工具库到最新版本

## v0.4.0 更新日志

> 发布于 2022.12.12

### Update

- pref: optimize the log write logic, add default handler https://github.com/gookit/slog/commit/6f145bdbfb4cdf7a26806a4e255723c94b0548f3
- up: update the benchmark tests package version to latest, add new tests log https://github.com/gookit/slog/commit/c17c0a43657eb4dd0cc5c61987aecc72e7c9d338
- :necktie: up: update logger caller skip value, fix test error https://github.com/gookit/slog/commit/214491a6082a30095fb0dc3cdf1557a1001f9b8c
- :necktie: up: update log write logic, add more unit tests https://github.com/gookit/slog/commit/4799e4bfd390ba939ab0dc95d4bddccc71192a7f
- :necktie: up: update logger handler, remove defaultH setting. https://github.com/gookit/slog/commit/d671f338a9a60a84c882b2deb27a89a189b5bebd

### Other

- style: re-format some code style by gofmt https://github.com/gookit/slog/commit/fb365538e6242afe8617325dcbf745439540cd06
- build(deps): bump WillAbides/setup-go-faster from 1.7.0 to 1.8.0 https://github.com/gookit/slog/commit/5a347895a70f22711ee716b3fb31d824e46d81fa


**Full Changelog**: https://github.com/gookit/slog/compare/v0.3.4...v0.4.0
