+++
title = "💪 gookit goutil"
description = "Go 常用功能的扩展工具库。包含：数字，字符串，slice/数组，Map，结构体，反射，文本，文件，错误，时间日期，测试，CLI，命令运行，系统信息，格式化，常用信息获取等等。"
weight = 3

[taxonomies]
tags = ["Golang", "Gookit", "goutil"]

[extra]
+++

![GitHub Repo Card](https://githubcard.com/gookit/goutil.svg)

`gookit/goutil` 💪 Go 常用功能的扩展工具库。包含：数字，字符串，slice/数组，Map，结构体，反射，文本，文件，错误，时间日期，测试，CLI，命令运行，系统信息，格式化，常用信息获取等等。

> Github [https://github.com/gookit/goutil](https://github.com/gookit/goutil)

## 功能特点

### 基础工具包

- `arrutil` array/slice 相关操作的函数工具包 如：类型转换，元素检查等等
- `cliutil` CLI 的一些工具函数包. eg: read input, exec command
  - `cliutil/cmdline` 提供 cmdline 解析，args 构建到 cmdline
- `envutil` ENV 信息获取判断工具包. eg: get one, get info, parse var
- `fmtutil` 格式化数据工具函数 eg：数据size
- `fsutil` 文件系统操作相关的工具函数包. eg: file and dir check, operate
- `goinfo` 提供一些与Go info, runtime 相关的工具函数。
- `jsonutil` 一些用于快速读取、写入、编码、解码 JSON 数据的实用函数。
- `maputil` map 相关操作的函数工具包. eg: convert, sub-value get, simple merge
- `mathutil` int/number 相关操作的函数工具包. eg: convert, math calc, random
- `netutil` Network util functions. eg: Ip, IpV4, IpV6, Mac, Port, Hostname, etc.
- `reflects` 提供一些扩展性的反射使用工具函数.
- `structs` 为 struct 提供一些扩展 util 函数。 eg: tag parse, struct data
- `strutil` string 相关操作的函数工具包. eg: bytes, check, convert, encode, format and more
- `sysutil` system 相关操作的函数工具包. eg: sysenv, exec, user, process

### 扩展工具包

- `cflag`: 包装和扩展 go `flag.FlagSet` 以方便快速的构建简单的命令行应用程序
- `dump`  GO变量打印工具，打印 slice, map 会自动换行显示每个元素，同时会显示打印调用位置
- `encodes`: Provide some encoding/decoding, hash, crypto util functions. eg: base64, hex, etc.
- `errorx`  为 go 提供增强的错误实现，允许带有堆栈跟踪信息和包装另一个错误。
- `fsutil/finder` 提供简单方便的file/dir查找功能，支持过滤、排除、匹配、忽略等。
- netutil 子包:
  - `netutil/httpreq` 包装 http.Client 实现的更加易于使用的HTTP客户端, 和一些 http 工具函数
- strutil 子包:
  - `strutil/textscan` 实现了一个快速扫描和分析文本内容的解析器. 可用于解析 INI, Properties 等格式内容
  - `strutil/textutil` 提供一些常用的扩展文本处理功能函数。
- `syncs` 提供一些同步、协程、信号相关的工具函数.
- sysutil 子包:
  - `sysutil/clipboard` 提供简单的剪贴板读写操作工具库
  - `sysutil/cmdr` 提供快速构建和运行一个cmd，批量运行多个cmd任务
  - `sysutil/process` 提供一些进程操作相关的实用功能。
- `testutil` test help 相关操作的函数工具包. eg: http test, mock ENV value
  - `testutil/assert` 用于帮助测试的断言函数工具包，方便编写单元测试。
  - `testutil/fakeobj` 提供一些接口的假的实现，用于模拟测试. 例如 `fs.File, fs.FileInfo, fs.DirEntry` 等等.
- `timex` 提供增强的 time.Time 实现。添加更多常用的功能方法
  - 提供类似 `Y-m-d H:i:s` 的日期时间格式解析处理
  - 常用时间方法。例如: `DayStart(), DayAfter(), DayAgo(), DateFormat()` 等等

> 更多使用请看 [README](https://github.com/gookit/goutil/blob/master/README.zh-CN.md)
