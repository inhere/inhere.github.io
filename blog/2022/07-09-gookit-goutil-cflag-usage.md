---
title: cflag - wraps and extends Go flag build pertty CLI command
tags: [golang, gookit, flag, cli, console]
date: 2022-07-09T16:00
slug: gookit-goutil-cflag-intro
authors: inhere
---

`cflag` - wraps and extends Go flag build pertty CLI command

TODO image

<!--truncate-->

## Use flag

使用Go `flag` 包构建一个命令应用。

```go
package main

import (
    "flag"
    "os"

    "github.com/gookit/goutil/cliutil"
    "github.com/gookit/goutil/dump"
)

var opts1 = struct {
    age  int
    name string
    str1 string
    lOpt string
}{}

// go run ./_example/rawflag.go
// go run ./cflag/_example/rawflag.go -h
func main() {
    c := flag.NewFlagSet("mycmd", flag.ContinueOnError)

    c.IntVar(&opts1.age, "age", 0, "this is a int option")
    c.StringVar(&opts1.name, "name", "", "this is a string option and required")
    c.StringVar(&opts1.str1, "str1", "def-val", "this is a string option with default value")
    c.StringVar(&opts1.lOpt, "long-opt", "", "this is a string option with shorts")

    err := c.Parse(os.Args[1:])
    if err != nil {
        if err != flag.ErrHelp {
            cliutil.Errorln("Error:", err.Error())
        }
        return
    }

    // after parse, do something
    handleFunc1()
}

func handleFunc1() {
    cliutil.Infoln("after parse, do something")

    dump.P(opts1)
}
```

### Show Help

```bash
go run ./cflag/_example/rawflag.go -h
```

TODO image

### 不足的点

它是Go内置的包，使用也非常简单。但是有一些不足的点：

- 不支持给选项添加短选项
- 不支持解析后续参数信息
- 不能检查选项是否为空
- 渲染的帮助信息非常简陋

## Use cflag


`cflag` - Wraps and extends go `flag.FlagSet` to build simple command line applications

- Supports auto-rendering of pretty help messages
- Allows adding short options to flag options, and multiples
- Allows binding named parameters
- Allows setting arguments or options as required
- Allows setting validators for arguments or options


