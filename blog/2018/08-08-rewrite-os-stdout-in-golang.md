---
title: Go 捕获 os.Stdout 的输出
tags: [golang]
date: 2018-08-08T21:00
slug: rewrite-os-stdout-in-golang
authors: inhere
---

Go 里面有时候我们想捕获，或者丢弃通过`fmt.Print`系列方法打印到Stdout的数据


<!--truncate-->


## 丢弃输出

```go
package main

import (
    "os"
    "fmt"
)

var oldStdout *os.File

func main()  {
    discardStdout()
    fmt.Println("Hello, playground")
    restoreStdout()
    fmt.Println("Hello, playground 2")
    // Output:
    // Hello, playground 2
}

// usage:
// discardStdout()
// fmt.Println("Hello, playground")
// restoreStdout()
func discardStdout() error {
    // save old os.Stdout
    oldStdout = os.Stdout

    stdout, err := os.OpenFile(os.DevNull, os.O_WRONLY, 0)
    if err == nil {
        os.Stdout = stdout
    }

    return err
}

func restoreStdout()  {
    if oldStdout != nil {
        // close now
        os.Stdout.Close()
        // restore
        os.Stdout = oldStdout
        oldStdout = nil
    }
}
```

运行示例，将只会输出： `Hello, playground 2`

## 捕获输出

- 来自 stackoverflow 的回答

> from: [stackoverflow](https://stackoverflow.com/questions/10473800/in-go-how-do-i-capture-stdout-of-a-function-into-a-string)

```go
package main

import (
    "os"
    "fmt"
    "io/ioutil"
)

func main() {
    rescueStdout := os.Stdout
    r, w, _ := os.Pipe()
    os.Stdout = w

    fmt.Println("Hello, playground") // this gets captured

    w.Close() // Notice: must close before read
    out, _ := ioutil.ReadAll(r)
    os.Stdout = rescueStdout

    fmt.Printf("Captured: %s", out) // prints: Captured: Hello, playground
}
```

稍加调整以方便重复使用：

```go
package main

import (
    "os"
    "io/ioutil"
    "fmt"
)

var oldStdout, newReader *os.File

func main()  {
    rewriteStdout()
    fmt.Println("Hello, playground")
    msg := restoreStdout()

    fmt.Print(msg)
}

// usage:
// rewriteStdout()
// fmt.Println("Hello, playground")
// msg := restoreStdout()
func rewriteStdout()  {
    oldStdout = os.Stdout
    r, w, _ := os.Pipe()
    newReader = r
    os.Stdout = w
}

func restoreStdout() string {
    if newReader == nil {
        return ""
    }

    // Notice: must close writer before read data
    // close now writer
    os.Stdout.Close()
    // restore
    os.Stdout = oldStdout
    oldStdout = nil

    // read data
    out, _ := ioutil.ReadAll(newReader)

    // close reader
    newReader.Close()
    newReader = nil

    return string(out)
}
```

> 注意： 要读取 `newReader` 里的数据，必须先关闭 writer. 不然会一直阻塞。
