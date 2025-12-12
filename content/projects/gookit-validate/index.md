+++
title = "⚔ gookit validate"
description = "Go通用的数据验证与过滤库，使用简单，内置大部分常用验证器、过滤器，支持自定义消息、字段翻译。"
weight = 5

[taxonomies]
tags = ["golang", "gookit", "validate"]

[extra]
+++

![GitHub Repo Card](https://githubcard.com/gookit/validate.svg)

`gookit/validate` ⚔ Go通用的数据验证与过滤库，使用简单，内置大部分常用验证器、过滤器，支持自定义消息、字段翻译。

> [!TIP]
> Github [https://github.com/gookit/validate](https://github.com/gookit/validate)

## 功能特色

- 简单方便，支持前置验证检查, 支持添加自定义验证器
  - 大多数过滤器和验证器都有别名方便使用
- 支持验证 `Map` `Struct` `Request`（`Form`，`JSON`，`url.Values`, `UploadedFile`）数据
  - 能简单快速的配置规则并验证 Map 数据
  - 能根据请求数据类型 `Content-Type` 快速验证 `http.Request` 并收集数据
  - 支持检查 slice 中的每个子项值. eg: `v.StringRule("tags.*", "required|string|minlen:1")`
- 支持将规则按场景进行分组设置，不同场景验证不同的字段
  - 已经内置了超多（**>70** 个）常用的验证器，查看 [内置验证器](https://github.com/gookit/validate#built-in-validators)
- 支持在进行验证前对值使用过滤器进行净化过滤，适应更多场景
  - 已经内置了超多（**>20** 个）常用的过滤器，查看 [内置过滤器](https://github.com/gookit/validate#built-in-filters)
- 方便的获取错误信息，验证后的安全数据获取(_只会收集有规则检查过的数据_)
- 支持自定义每个验证的错误消息，字段翻译，消息翻译(内置`en` `zh-CN` `zh-TW`)
  - 在结构体上可以使用 `message`, `label` 标签定义消息翻译
- 可以在任何框架中使用 `validate`，例如 Gin、Echo、Chi 等
- 支持直接使用规则来验证值 例如: `validate.Val("xyz@mail.com", "required|email")`
- 完善的单元测试，测试覆盖率 **> 90%**

> [!IMPORTANT]
> 更多使用请看 [README](https://github.com/gookit/validate/blob/master/README.zh-CN.md)
