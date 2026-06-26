---
title: GCli v3.8 发布：共享选项、文档生成和更宽容的参数解析
date: 2026-06-22T08:26:03
taxonomies:
  tags: [gookit, golang, gcli, cli]
slug: gookit-gcli-release-v3.8.0
---

GCli v3.8 已发布。相比 v3.5，这个周期补了几块 CLI 框架里经常会用到的能力：参数可以写在位置参数之后，结构体绑定支持更多 Go 类型，父命令可以定义会被子命令继承的共享选项，还能直接生成 markdown 和 man 文档。

如果你维护的是多级命令，而不是只有一两个子命令的小工具，v3.8 值得看一下。

![GCli v3.8 发布海报](/img/blog/gcli-v3-8-poster.png)

<!-- more -->

- 项目主页：[https://github.com/gookit/gcli](https://github.com/gookit/gcli)
- API 文档：[https://pkg.go.dev/github.com/gookit/gcli/v3](https://pkg.go.dev/github.com/gookit/gcli/v3)
- 完整变更：[v3.5.0...v3.8.0](https://github.com/gookit/gcli/compare/v3.5.0...v3.8.0)

## 这次主要改了什么

从 v3.6 到 v3.8，变化主要集中在 6 个地方：

- 参数乱序自动重排：`myapp build src/ --name tom` 也能解析到 `--name`。
- 结构体绑定支持 `[]string`、`[]int`、`[]bool`、`time.Duration`、`map[string]string` 和 `enum`。
- 结构体绑定器移除了 `unsafe`。
- 新增 `gflag.Opt[T]` / `gflag.BindVar[T]` 泛型 API。
- 新增 `Command.SharedOpts()`，用于定义会被子命令继承的选项。
- 新增 `docgen` 包和内置 `gendoc` 命令，支持生成 markdown 和 man page。

还有一个包名调整：`events` 改名为 `gevent`，同时在 `gcli` 包里补了 `Evt*` 事件名别名。

## 参数可以写在位置参数后面

GCli 以前和标准库 `flag` 一样，遇到第一个非 flag 参数后就停止解析选项。因此下面这种输入里，`--name tom` 可能不会按预期进入选项解析：

```bash
myapp build src/ --name tom
```

从 v3.6 开始，GCli 会在解析前把参数调整到更适合解析的顺序。所以下面两种写法现在结果一致：

```bash
myapp build --name tom src/
myapp build src/ --name tom
```

这个功能默认开启。它会处理常见边界：取值型选项会带上自己的值，bool 选项不会误吞后续参数，`--opt=val`、负数、单独的 `-` 和 `--` 之后的内容也会保留原语义。

多级命令里也做了限制：只重排最终执行命令的参数。遇到子命令名后，父命令和子命令的选项不会混在一起。

如果你的程序依赖标准库那种严格顺序，可以关掉：

```go
c.ParserCfg().DisableReorderArgs = true

// 或通过配置函数关闭
gflag.WithReorderArgs(false)
```

示例在 [`_examples/cmd/reorder_demo.go`](https://github.com/gookit/gcli/tree/master/_examples/cmd/reorder_demo.go)。

## 结构体绑定支持更多 Go 类型

结构体绑定是 GCli 里用得比较多的功能。v3.7 之前，如果要绑定列表、map 或时长，经常要用 `gflag.Strings`、`KVString` 这类辅助类型。现在可以直接使用常见 Go 类型：

```go
type deployOpts struct {
    Names []string          `flag:"name=names;shorts=n;desc=name list"`
    Ports []int             `flag:"name=ports;shorts=p;desc=port list"`
    TTL   time.Duration     `flag:"name=ttl;desc=time to live, eg: 1h30m"`
    Meta  map[string]string `flag:"name=meta;shorts=m;desc=key=value metadata"`
    Lang  string            `flag:"name=lang;shorts=l;desc=language;enum=go,php,java"`
}

c.MustFromStruct(&deployOpts{})
```

对应命令可以这样写：

```bash
myapp deploy -n a -n b -p 80 -p 443 --ttl 1h30m -m k1=v1 -m k2=v2 -l go
```

这里有几件事是新的：

- `[]string`、`[]int`、`[]bool` 会绑定成可重复选项。
- `time.Duration` 使用 Go 原生时长格式，例如 `1h30m`。
- `map[string]string` 支持重复传入 `key=value`。
- `enum:"go,php,java"` 会用于补全候选值，也会在解析时做成员校验。

实现上，结构体绑定器不再使用 `unsafe`，改为通过 `reflect.Value.Addr().Interface()` 获取字段指针。这是内部实现变化，但对长期维护更友好。

另外，匿名嵌套结构体现在在 `named`、`simple`、`field` 三种标签规则下都会展开。v3.8 还修复了内嵌未导出类型此前不会展开的问题。

## 泛型 API 少记几个方法名

传统 API 仍然保留：`BoolVar`、`IntVar`、`StrVar`、`Float64Var` 这些都能继续用。

v3.7 新增了一个泛型入口，会根据指针类型选择对应的绑定器：

```go
var (
    name string
    age  int
    tags []string
    ttl  time.Duration
)

gflag.Opt(&c.Flags, &name, "name", "n", "tom", "the user name")
gflag.Opt(&c.Flags, &age,  "age",  "a", 18,    "the user age")
gflag.Opt(&c.Flags, &tags, "tag",  "t", nil,   "the tags, repeatable")
gflag.Opt(&c.Flags, &ttl,  "ttl",  "",  time.Duration(0), "time to live")
```

如果需要完整控制选项元数据，可以用 `gflag.BindVar[T]`：

```go
var langs []string
gflag.BindVar(&c.Flags, &langs, gflag.NewOpt("langs", "language list", nil))
```

这不是替代所有旧 API 的大改造，只是给新代码一个更顺手的入口。

## SharedOpts 补上了父子命令之间的中间层

v3.8 最重要的变化是 `Command.SharedOpts()`。

GCli 以前有应用级全局选项和命令级局部选项，但缺少一个“父命令定义，子命令继承”的中间层。`SharedOpts()` 就是这个层级，语义接近 cobra 的 `PersistentFlags`。

```go
var gitDir string

top := &gcli.Command{Name: "git", Desc: "git-like demo"}
top.SharedOpts().StrOpt(&gitDir, "git-dir", "", ".git", "the git data dir")

top.Add(&gcli.Command{
    Name: "status",
    Func: func(c *gcli.Command, _ []string) error {
        gcli.Printf("git dir: %s\n", gitDir)
        return nil
    },
})
```

下面几种写法都会让 `gitDir` 得到 `/x`：

```bash
myapp git --git-dir /x status
myapp git status --git-dir /x
myapp git status arg --git-dir /x
```

几个规则需要注意：

- 子命令上的同名局部选项优先级更高。
- `Required` 的共享选项会在最终执行的叶子命令上校验。
- 子命令帮助中，祖先命令继承来的选项会放到 `Inherited Options` 分组。

底层新增了 `Parser.InheritOptsFrom(src, category...)`，会按底层 `flag.Value` 重新注册继承来的选项，所以父子命令写的是同一个绑定变量。

## docgen 可以直接生成 markdown 和 man page

v3.8 新增了 `docgen` 包，可以把单个命令或整个应用导出成 markdown 或 man page：

```go
import "github.com/gookit/gcli/v3/docgen"

docgen.MarkdownTree(app, "./docs")
docgen.ManTree(app, "./man")

md  := docgen.CmdMarkdown(cmd)
man := docgen.CmdMan(cmd)
```

也可以从命令行触发。把内置命令注册进去：

```go
import "github.com/gookit/gcli/v3/builtin"

app.Add(builtin.GenDoc())
```

然后执行：

```bash
./cliapp gendoc -f md  -o ./docs
./cliapp gendoc -f man -o ./man
```

生成器会处理一些命令行文档里常见的细节：清理 Examples 里的颜色标签，展开 `{$fullCmd}` 这类内置变量，保留多行示例，并在应用概览里写入版本信息。选项表也会通过 `gflag.CliOpt.TypeName()` 带上类型。

## 迁移注意点

这个周期有两处可能需要改代码。

事件包改名：

| 之前 | 现在 |
|---|---|
| `import "github.com/gookit/gcli/v3/events"` | `import "github.com/gookit/gcli/v3/gevent"` |
| `events.OnCmdRunBefore` | `gevent.OnCmdRunBefore` 或 `gcli.EvtCmdRunBefore` |

应用级解析状态移动：

| 之前 | 现在 |
|---|---|
| `GlobalOpts.ShowHelp` / `ShowVersion` / `inCompletion` / `genCompletion` | 新的应用级 `AppOptions`，通过 `app.AppOpts()` 访问 |

`App.Opts()` 仍然返回进程级的 `*GlobalOpts`，所以 `app.Opts().Verbose`、`app.Opts() == gcli.GOpts()` 这类用法不变。移动的是那些描述单个 App 解析状态的字段，避免同一进程内多个 `App` 实例互相影响。

参数自动重排也是行为变化，但它是更宽容的变化。如果你确实依赖旧行为，可以设置 `Config.DisableReorderArgs = true`。

## 升级

```bash
go get -u github.com/gookit/gcli/v3@latest
```

升级后建议先看三个示例：`reorder-args`、`struct-types`、`struct-flag`。它们覆盖了这次最容易影响实际代码的几块能力。

问题和建议可以继续在 [GitHub Issues](https://github.com/gookit/gcli/issues) 里提。
