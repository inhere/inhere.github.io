---
title: gookit validate 版本更新日志
taxonomies:
  tags: [gookit,golang,validate]
date: 2025-04-24T13:25:00
# authors: inhere
---
# Validate 版本更新日志

 `gookit/validate` - ⚔ Go通用的数据验证与过滤库，使用简单，内置大部分常用验证、过滤器，支持自定义验证器、自定义消息、字段翻译。

 `gookit/validate` - ⚔ Go package for data validation and filtering. support Map, Struct, Form data.

> Github https://github.com/gookit/validate

## 功能特点

- 简单方便，支持前置验证检查, 支持添加自定义验证器
  - 大多数过滤器和验证器都有别名方便使用
- 支持验证 `Map` `Struct` `Request`（`Form`，`JSON`，`url.Values`, `UploadedFile`）数据
  - 能简单快速的配置规则并验证 Map 数据
  - 能根据请求数据类型 `Content-Type` 快速验证 `http.Request` 并收集数据
  - 支持检查 slice 中的每个子项值. eg: `v.StringRule("tags.*", "required|string|minlen:1")`
- 支持将规则按场景进行分组设置，不同场景验证不同的字段
  - 已经内置了超多（**>70** 个）常用的验证器，查看 [内置验证器](https://github.com/gookit/validate/blob/master/README.zh-CN.md#built-in-validators)
- 支持在进行验证前对值使用过滤器进行净化过滤，适应更多场景
  - 已经内置了超多（**>20** 个）常用的过滤器，查看 [内置过滤器](https://github.com/gookit/validate/blob/master/README.zh-CN.md#built-in-filters)
- 方便的获取错误信息，验证后的安全数据获取(_只会收集有规则检查过的数据_)
- 支持自定义每个验证的错误消息，字段翻译，消息翻译(内置`en` `zh-CN` `zh-TW`)
  - 在结构体上可以使用 `message`, `label` 标签定义消息翻译
- 可以在任何框架中使用 `validate`，例如 Gin、Echo、Chi 等
- 支持直接使用规则来验证值 例如: `validate.Val("xyz@mail.com", "required|email")`
- 完善的单元测试，测试覆盖率 **> 90%**

## 版本更新记录

- 2024.01.24 发布 [v1.5.2 更新说明](https://inhere.github.io/blog/gookit-validate-release-v1.5.2)

## v1.4.6 更新日志

> 发布于 2022.12.28

### Fixed

- fix: correctly validate embedded structs [1d3b06e](https://github.com/gookit/validate/commit/1d3b06eabfe7b6ef40c7ce5667316a9b13279fcf)

**Full Changelog**: https://github.com/gookit/validate/compare/v1.4.5...v1.4.6

## v1.4.5 更新日志

> 发布于 2022.11.22

### Fixed

- fix: #172 filtering string slice value failed on struct data. [087269d](https://github.com/gookit/validate/commit/087269de6d8753d49230016945ba73e92e3bc42b)
- fix json name tag parsing to ignore stuff after the comma, use struct field name if json tag name not set [42d952c](https://github.com/gookit/validate/commit/42d952c72d3defee5dfb8a94f11cfe5b0466b2cd)

### Feature

- feat: enable slices of maps on structs [6815f54](https://github.com/gookit/validate/commit/6815f548cc050376118c5e9512f8fd6b06aefed6)

### Other

- change field to value [afe0982](https://github.com/gookit/validate/commit/afe0982e7961c22cbf370769bca6fa3edefd0ff9)
- deps: update some dependents package to latest [3dda599](https://github.com/gookit/validate/commit/3dda5996b75ebd6bfd1bfcdfb12f108af3c2060f)

**Full Changelog**: https://github.com/gookit/validate/compare/v1.4.4...v1.4.5

## Gookit 工具包

https://github.com/gookit 实现了一些简单基础的工具包方便开发使用。

- [gookit/goutil](https://github.com/gookit/goutil) Go 常用的一些工具函数：数字，字符串，数组，Map，结构体，反射，文本，文件，错误，时间日期，特殊处理，格式化，常用信息获取等等
- [gookit/slog](https://github.com/gookit/slog) 易于使用的，轻量级、可配置、可扩展的日志库。支持多个级别，输出到多文件；内置文件日志处理、自动切割、清理、压缩等增强功能
- [gookit/validate](https://github.com/gookit/validate) Go通用的数据验证与过滤库，使用简单，内置大部分常用验证、过滤器
- [gookit/config](https://github.com/gookit/config) Go应用配置管理，支持多种格式（JSON, YAML, TOML, INI, HCL, ENV, Flags），多文件加载，远程文件加载，数据合并
- [gookit/color](https://github.com/gookit/color) CLI 控制台颜色渲染工具库, 拥有简洁的使用API，支持16色，256色，RGB色彩渲染输出
- [gookit/rux](https://github.com/gookit/rux) 简单且快速的 Go api/web 框架，支持路由分组，路由参数绑定，中间件，兼容 http.Handler 接口
- [gookit/gcli](https://github.com/gookit/gcli) Go的命令行应用，工具库，运行CLI命令，支持命令行色彩，用户交互，进度显示，数据格式化显示
- [gookit/event](https://github.com/gookit/event) Go实现的轻量级的事件管理、调度程序库, 支持设置监听器的优先级, 支持对一组事件进行监听
- [gookit/cache](https://github.com/gookit/cache) 通用的缓存使用包装库，通过包装各种常用的驱动，来提供统一的使用API
- [gookit/filter](https://github.com/gookit/filter) 提供对Golang数据的过滤，净化，转换处理
- [gookit/ini](https://github.com/gookit/ini) INI配置读取管理，支持多文件加载，数据覆盖合并, 解析ENV变量, 解析变量引用
- [gookit/properties](https://github.com/gookit/properties) Java Properties 格式内容的解析器，编码解码库
- [gookit/gitw](https://github.com/gookit/gitw) Git 命令包装器，生成 git 变更记录日志，获取 repo,branch,remote 信息和一些 git 命令工具。

> 更多请查看 https://github.com/gookit
