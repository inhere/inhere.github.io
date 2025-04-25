---
title: gookit slog release v0.5.8
tags: [gookit,golang,slog,logger]
date: 2025-04-24T13:25
slug: gookit-slog-release-v0.5.8
authors: inhere
---

`gookit/slog` 一个易于使用的，轻量级、可配置、可扩展的日志库。支持多个级别，输出到多文件；内置文件日志处理、自动切割、清理、压缩等增强功能。

v0.5.8 已正式发布！这一版本中带来了众多改进与修复，进一步提升了开发者的使用体验和日志处理能力。

<!--truncate-->

:::info

 **Github**: https://github.com/gookit/slog

:::


`gookit/slog` 的新版本 v0.5.8 已正式发布！作为一个轻量级、可配置、功能强大的 Go 语言日志库，在这一版本中带来了众多改进与修复，进一步提升了开发者的使用体验和日志处理能力。

## 主要更新内容

### 🐞 修复 (Fixes)
- 修复了 Windows 平台上日志文件路径解析可能出错的问题。([提交详情](https://github.com/gookit/slog/commit/9e6939b11743dfd62c660227f626ccdf07615047))
- 使用 `CallerFlagMode` 类型别名替代了原先的 `uint8` 类型以增强代码可读性。([提交详情](https://github.com/gookit/slog/commit/35d7f62fbce59ddb44a827336878366974c18cf7))
- 修复旧日志文件匹配问题，例如 `error.log` 重命名为 `error.20250423_02.log` 时的匹配错误。([提交详情](https://github.com/gookit/slog/commit/3d44bd2ef22c67e4d344865e75943e713a421c9e))
- 修复了 `BackupNum=0` 时会移除所有旧文件的问题。([提交详情](https://github.com/gookit/slog/commit/183fb6af53baaa777dd3fd7395f765037af68056))
- 针对文件日志切割（rotatefile）逻辑进行了修复，解决了短时间内切割文件可能导致的冲突和内容覆盖问题。([提交详情](https://github.com/gookit/slog/commit/e8e8d6f4bd548efee13c488e71b759563821fcc0))

### ✨ 新功能 (Features)
- 增强了日志配置功能并新增了相关测试用例。([提交详情](https://github.com/gookit/slog/commit/ce6b6828b34d5ec9c607bf4615460a9a469bfa6a))
- 在包顶层新增了便捷的 `Log` 函数。([提交详情](https://github.com/gookit/slog/commit/581d3ba8955fe0f1eeb26bb97e14686c4be95981))

### 🔧 更新与优化 (Updates)
- 为日志处理器（handler）新增 `WithRotateTimeString` 功能及相关测试。([提交详情](https://github.com/gookit/slog/commit/07105c60483cc1e9b758247e6f214c8976b3f2f5))
- 对文件切割清理方法进行了重构，并为清理与压缩功能新增了更多测试。([提交详情](https://github.com/gookit/slog/commit/5caffda6c8dc33ed97f91e4274b96e878be8191c))
- 增加了开发调试日志，并通过环境变量支持调试模式。([提交详情](https://github.com/gookit/slog/commit/ee1d5848b585783ca9a14e0b6de8cd1bb2d152d6))
- 优化了异步清理初始化逻辑，避免重复初始化 Goroutine。([提交详情](https://github.com/gookit/slog/commit/b5fb6bbc23f3872ae47818267743d114d9039b0c))
- 减少了写入和切割文件时的锁定范围以提升性能。([提交详情](https://github.com/gookit/slog/commit/dd54cc8ba6e4d0de13ff2bfc75b28e85912d6aa0))
- 对切割文件名生成逻辑进行了重构，确保文件扩展名始终位于末尾。([提交详情](https://github.com/gookit/slog/commit/afd01cc28cbaa8ce5ce7ea1e4346cf21079c3f74))

### 📦 依赖更新 (Dependency Updates)
- 升级 `github.com/gookit/goutil` 到 v0.6.18。([提交详情](https://github.com/gookit/slog/commit/3fd68fc0c5754d43687ba862838d299f464b90db))
- 使用 `os.ReadFile` 替代已弃用的 `ioutil.ReadFile` 方法。([提交详情](https://github.com/gookit/slog/commit/47afa6be5cc62a037bae393bd478d24cd43e3763))

## 新贡献者 (New Contributors)
感谢以下开发者首次为 gookit/slog 做出贡献：
- @ShyunnY 在 [#155](https://github.com/gookit/slog/pull/155)
- @knbr13 在 [#158](https://github.com/gookit/slog/pull/158)

---

完整更新日志请查看 [CHANGELOG](https://github.com/gookit/slog/compare/v0.5.7...v0.5.8)。欢迎大家升级到最新版本并体验这些改进和新功能！如有任何问题或建议，请随时通过 [Issue](https://github.com/gookit/slog/issues) 反馈。


:::note
Github release https://github.com/gookit/slog/releases/tag/v0.5.8
:::
