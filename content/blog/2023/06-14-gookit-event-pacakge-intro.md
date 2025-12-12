---
title: gookit/event - Go实现的轻量级的事件管理、调度程序库
taxonomies:
  tags: [golang,gookit,event]
date: 2023-06-14T15:53:00
slug: gookit-event-pacakge-intro
# authors: inhere
# gen by: kite run script/cgen.php --name gookit-event-pacakge-intro --tags golang,gookit,event
---


# event 事件调度库

`gookit/event` Go实现的轻量级的事件管理、调度程序库, 支持设置监听器的优先级, 支持使用通配符来进行一组事件的监听。


<!-- more -->

- GitHub https://github.com/gookit/event

## 功能简介

- 支持自定义创建预定义的事件对象
- 支持对一个事件添加多个监听器
- 支持设置事件监听器的优先级，优先级越高越先触发
- 支持通过通配符 `*` 来进行一组事件的匹配监听.
  - `ModeSimple` - 注册 `app.db.*` 事件的监听，触发 `app.db.run` `app.db.end` 时，都将同时会触发 `app.db.*` 监听器
  - `ModePath` - **NEW** `*` 只匹配一段非 `.` 的字符,可以进行更精细的监听; `**` 匹配任意多个字符,只能用于开头或结尾
- 支持直接使用通配符 `*` 来监听全部事件的触发
- 支持触发事件时投递到 `chan`, 异步进行消费处理. 触发方法: `Async(), FireAsync()`
- 完善的单元测试，单元覆盖率 `> 95%`


## 安装

```bash
go get github.com/gookit/event
```

## 主要方法

- `On/Listen(name string, listener Listener, priority ...int)` 注册事件监听
- `Subscribe/AddSubscriber(sbr Subscriber)`  订阅，支持注册多个事件监听
- `Trigger/Fire(name string, params M) (error, Event)` 触发事件
- `MustTrigger/MustFire(name string, params M) Event` 触发事件，有错误则会panic
- `FireEvent(e Event) (err error)` 根据给定的事件实例，触发事件
- `FireBatch(es ...interface{}) (ers []error)` 一次触发多个事件
- `Async/FireC(name string, params M)` 触发投递事件到 `chan`，异步消费处理
- `FireAsync(e Event)`  触发投递事件到 `chan`，异步消费处理
- `AsyncFire(e Event)`  简单的通过 `go` 异步触发事件


## 快速使用

```go
package main

import (
    "fmt"

    "github.com/gookit/event"
)

func main() {
    // 注册事件监听器
    event.On("evt1", event.ListenerFunc(func(e event.Event) error {
        fmt.Printf("handle event: %s\n", e.Name())
        return nil
    }), event.Normal)

    // 注册多个监听器
    event.On("evt1", event.ListenerFunc(func(e event.Event) error {
        fmt.Printf("handle event: %s\n", e.Name())
        return nil
    }), event.High)

    // ... ...

    // 触发事件
    // 注意：第二个监听器的优先级更高，所以它会先被执行
    event.MustFire("evt1", event.M{"arg0": "val0", "arg1": "val1"})
}
```

> Note: 注意：第二个监听器的优先级更高，所以它会先被执行


## 异步消费事件

可以使用 `Async/FireC/FireAsync` 方法触发事件，事件将会写入 chan 异步消费。可以使用 `CloseWait()` 关闭chan并等待事件全部消费完成。

**新增配置选项**:

- `ChannelSize` 设置 `chan` 的缓冲大小
- `ConsumerNum` 设置启动多少个协程来消费事件

```go
func main() {
    // 注意：在程序退出时关闭事件chan
    defer event.Close()
    // defer event.CloseWait()

    // 注册事件监听器
    event.On("app.evt1", event.ListenerFunc(func(e event.Event) error {
        fmt.Printf("handle event: %s\n", e.Name())
        return nil
    }), event.Normal)

    // 注册多个监听器
    event.On("app.evt1", event.ListenerFunc(func(e event.Event) error {
        fmt.Printf("handle event: %s\n", e.Name())
        return nil
    }), event.High)

    // ... ...

    // 异步消费事件
    event.FireC("app.evt1", event.M{"arg0": "val0", "arg1": "val1"})
}
```

> Note: 应当在程序退出时关闭事件chan. 可以使用下面的方法:

- `event.Close()` 立即关闭 `chan` 不再接受新的事件
- `event.CloseWait()` 关闭 `chan` 并等待所有事件处理完成

## 更多

更多使用说明请看 [README](https://github.com/gookit/event/blob/master/README.zh-CN.md)


