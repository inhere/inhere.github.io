---
title: cflag - wraps and extends Go flag build pertty CLI command
tags: [golang, gookit, flag, cli, console]
date: 2022-07-09T16:00
slug: gookit-goutil-cflag-intro
authors: inhere
---

`cflag` - wraps and extends Go flag build pertty CLI command

<!-- more -->

## Use Go flag

Go `flag` is a package built into Go, and it is very easy to build a command application using the `flag` package.

```go title="cflag/_example/rawflag.go"
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

### Show help

```bash
go run ./cflag/_example/rawflag.go -h
```

![rawflag-help](https://raw.githubusercontent.com/gookit/goutil/master/cflag/_example/rawflag-help.png)

### Some problems

It's a package built into Go, and it's very simple to use. But there are some problems:

- Adding short options to options is not supported
- Does not support parsing subsequent parameter information
- Can't check if option is empty
- Rendering help information is very rudimentary

## Use cflag


`cflag` - Wraps and extends go `flag.FlagSet` to build simple command line applications

- As easy as Go `flag` to use
- Supports auto-rendering of pretty help messages
- Allows adding short options to flag options, and multiples
- Allows binding named parameters
- Allows setting arguments or options as required
- Allows setting validators for arguments or options


### Install

```bash
go get github.com/gookit/goutil/cflag
```

### Usage example

`cflag` has the same binding option information as Go `flag`. At the same time, some additional information has been added, such as version, description, etc.

```go title="cflag/_example/cmd.go"
package main

import (
	"os"

	"github.com/gookit/goutil/cflag"
	"github.com/gookit/goutil/cliutil"
)

var opts = struct {
	age  int
	name string
	str1 string
	lOpt string
	bol  bool
}{}

// go run ./_example/cmd.go
// go run ./cflag/_example/cmd.go -h
// go run ./cflag/_example/cmd.go --name inhere -a 12 --lo val ab cd
func main() {
	c := cflag.New(func(c *cflag.CFlags) {
		c.Desc = "this is a demo command"
		c.Version = "0.5.1"
	})
	c.IntVar(&opts.age, "age", 0, "this is a int option;;a")
	c.StringVar(&opts.name, "name", "", "this is a string option and required;true")
	c.StringVar(&opts.str1, "str1", "def-val", "this is a string option with default value;;s")
	c.StringVar(&opts.lOpt, "long-opt", "", "this is a string option with shorts;;lo")

    // highlight-start
	c.AddArg("arg1", "this is arg1", true, nil)
	c.AddArg("arg2", "this is arg2", true, nil)
    // highlight-end

	// add handle func
	c.Func = handleFunc

	c.MustParse(os.Args[1:])
}

func handleFunc(c *cflag.CFlags) error {
	cliutil.Magentaln("hello, this is command:", c.Name())
	cliutil.Infoln("after parse, do something ...")

	cliutil.Yellowln("option values:")
	cliutil.Infoln("opts.age =", opts.age)
	cliutil.Infoln("opts.name =", opts.name)
	cliutil.Infoln("opts.str1 =", opts.str1)
	cliutil.Infoln("opts.lOpt =", opts.lOpt)

    // highlight-start
	cliutil.Yellowln("argument values:")
	cliutil.Infoln("arg1 =", c.Arg("arg1").String())
	cliutil.Infoln("arg2 =", c.Arg("arg2").String())
    // highlight-end

	cliutil.Infoln("\nremain args =", c.RemainArgs())

	return nil
}
```

### Set required and shortcuts

Option can be set as required(`required`), and supports setting **short option** name.

> TIPs: Implement `required` and `shorts` by extending `usage` that parses options


#### `usage` format

- Defatul: `desc`
- Foramt 1: `desc;required`
- Foramt 2: `desc;required;shorts`
- `required`: A boolean string. Mark option is required
  - True: `true,on,yes`
  - False: `false,off,no,''`
- `shorts`: Shortcut names for options, multiple values are allowed, separated by commas `,`

**Examples**:

```go
    // set option 'name' is required
	c.StringVar(&opts.name, "name", "", "this is a string option and required;true")
    // set option 'str1' shorts: s
	c.StringVar(&opts.str1, "str1", "def-val", "this is a string option with default value;;s")
```

### Binding and get arguments

**Binding arguments**

```go
	c.AddArg("arg1", "this is arg1", true, nil)
	c.AddArg("arg2", "this is arg2", true, nil)
```

**Get arguments by name**

```go
	cliutil.Infoln("arg1 =", c.Arg("arg1").String())
	cliutil.Infoln("arg2 =", c.Arg("arg2").Int())
```

### Show help

```bash
go run ./cflag/_example/cmd.go -h
```

**Output**:

![cmd-help](https://raw.githubusercontent.com/gookit/goutil/master/cflag/_example/cmd-help.png)

### Run command

```bash
go run ./cflag/_example/cmd.go --name inhere -a 12 --lo val ab cd
go run ./cflag/_example/cmd.go --name inhere -a 12 --lo val ab cd de fg
```

**Output**:

![cmd-run](https://raw.githubusercontent.com/gookit/goutil/master/cflag/_example/cmd-run.png)

### `required` check

```bash
go run ./cflag/_example/cmd.go -a 22
go run ./cflag/_example/cmd.go --name inhere
```

**Output**:

![cmd-required.png](https://raw.githubusercontent.com/gookit/goutil/master/cflag/_example/cmd-required.png)

## GitHub

- [gookit/goutil/cflag](https://github.com/gookit/goutil/tree/master/cflag)

