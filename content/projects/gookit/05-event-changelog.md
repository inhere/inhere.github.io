---
title: gookit event 版本更新日志
taxonomies:
  tags: [gookit,golang,event]
date: 2025-04-24T13:25:00
# authors: inhere
---
# event 版本更新日志

`gookit/event` Go实现的轻量级的事件管理、调度程序库, 支持设置监听器的优先级, 支持使用通配符来进行一组事件的监听。

- GitHub https://github.com/gookit/event

## 功能简介

- 支持自定义创建预定义的事件对象
- 支持对一个事件添加多个监听器
- 支持设置事件监听器的优先级，优先级越高越先触发
- 支持通过通配符 `*` 来进行一组事件的匹配监听.
  - `ModeSimple` - 注册 `app.db.*` 事件的监听，触发 `app.db.run` `app.db.end` 时，都将同时会触发 `app.*` 监听器
  - `ModePath` - **NEW** `*` 只匹配一段非 `.` 的字符,可以进行更精细的监听; `**` 匹配任意多个字符,只能用于开头或结尾
- 支持直接使用通配符 `*` 来监听全部事件的触发
- 支持触发事件时投递到 `chan`, 异步进行消费处理. 触发方法: `Async(), FireAsync()`
- 完善的单元测试，单元覆盖率 `> 95%`

## v1.1.1 更新日志

> 发布日期：2023.06.11


### Feature

- :memo: doc: update README docs for new feature usage https://github.com/gookit/event/commit/ce4bdc7268a2f9c4acf4fb8589be1d45b3804d1f
- :sparkles: feat: support async consume events and wait complete https://github.com/gookit/event/commit/c020267c7b650560d37f471a610f89c1c93e64fa

### Update

- :necktie: up: update some for EnableLock options https://github.com/gookit/event/commit/51112f489d484dcad5c571aca21d74f991a0c0c1

### Other

-  doc: update some doc for option ModePath https://github.com/gookit/event/commit/9f32831391d2ab8da9365ced22c67292daeae5bc
-  doc: update some doc for async fire events https://github.com/gookit/event/commit/84c83991102a110f9c71bf3ee30111ae1f80b806
