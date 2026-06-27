---
title: "GCli v3.8: shared options, doc generation, and safer binding"
date: 2026-06-22T08:26:03
taxonomies:
  tags: [gookit, golang, gcli, cli]
slug: gookit-gcli-release-v3.8.0
---

GCli v3.8 is out. Since v3.5, the project has added friendlier argument parsing, richer struct binding, type-safe generic flag helpers, inherited command options, and built-in markdown/man-page generation.

If you maintain a nested CLI rather than a small command wrapper, this release is worth a closer look.

![GCli v3.8 release poster](/img/blog/gcli-v3-8-poster.png)

<!-- more -->

- Project: [https://github.com/gookit/gcli](https://github.com/gookit/gcli)
- API docs: [https://pkg.go.dev/github.com/gookit/gcli/v3](https://pkg.go.dev/github.com/gookit/gcli/v3)
- Full diff: [v3.5.0...v3.8.0](https://github.com/gookit/gcli/compare/v3.5.0...v3.8.0)

## What changed

The v3.6 to v3.8 cycle focused on these areas:

- Args can be reordered before parsing, so `myapp build src/ --name tom` still sees `--name`.
- Struct binding now supports `[]string`, `[]int`, `[]bool`, `time.Duration`, `map[string]string`, and `enum` tags.
- Struct binding no longer uses `unsafe`.
- `gflag.Opt[T]` and `gflag.BindVar[T]` provide a generic flag binding API.
- `Command.SharedOpts()` adds inherited options for command trees.
- `docgen` and the builtin `gendoc` command can generate markdown and man pages.

There is also a package rename: `events` is now `gevent`, with `gcli.Evt*` aliases available from the root package.

## Args after positional values now work

GCli used to behave like the standard library `flag` package: once parsing reached the first non-flag token, option parsing stopped. That meant this could miss `--name tom`:

```bash
myapp build src/ --name tom
```

Since v3.6, GCli can reorder args before parsing. These two commands now behave the same:

```bash
myapp build --name tom src/
myapp build src/ --name tom
```

The feature is enabled by default. It keeps value-taking options with their values, does not let bool options consume unrelated args, and preserves the meaning of `--opt=val`, negative numbers, a lone `-`, and everything after `--`.

Nested commands are handled conservatively: only the final command's args are reordered. Parent and child option sets are not mixed.

If your program needs strict standard-library ordering, disable it:

```go
c.ParserCfg().DisableReorderArgs = true

// or via the config function
gflag.WithReorderArgs(false)
```

See [`_examples/cmd/reorder_demo.go`](https://github.com/gookit/gcli/tree/master/_examples/cmd/reorder_demo.go) for a runnable example.

## Struct binding supports more Go types

Struct binding is one of GCli's more useful features. Before v3.7, binding lists, maps, or durations often meant using helper types such as `gflag.Strings` or `KVString`. Now common Go types work directly:

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

The command can then be called like this:

```bash
myapp deploy -n a -n b -p 80 -p 443 --ttl 1h30m -m k1=v1 -m k2=v2 -l go
```

The new binding behavior:

- `[]string`, `[]int`, and `[]bool` become repeatable options.
- `time.Duration` parses native Go duration strings such as `1h30m`.
- `map[string]string` accepts repeated `key=value` pairs.
- `enum:"go,php,java"` provides completion candidates and rejects values outside the set.

Internally, the binder no longer uses `unsafe`; it now gets field pointers through `reflect.Value.Addr().Interface()`.

Anonymous embedded structs now expand under all three tag rules: `named`, `simple`, and `field`. v3.8 also fixes embedded unexported types that were previously skipped.

## Generic flag helpers reduce API noise

The older per-type APIs still work: `BoolVar`, `IntVar`, `StrVar`, `Float64Var`, and the rest are unchanged.

v3.7 adds a generic entry point that dispatches from the pointer type:

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

For full option metadata control, use `gflag.BindVar[T]`:

```go
var langs []string
gflag.BindVar(&c.Flags, &langs, gflag.NewOpt("langs", "language list", nil))
```

This is not a forced replacement for existing APIs. It is a cleaner default for new code.

## SharedOpts adds the missing middle layer

The biggest v3.8 addition is `Command.SharedOpts()`.

GCli already had app-level global options and command-level local options. What was missing was the middle layer: options defined by a parent command and inherited by its children. `SharedOpts()` fills that role, close to cobra's `PersistentFlags`.

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

All of these assign `/x` to `gitDir`:

```bash
myapp git --git-dir /x status
myapp git status --git-dir /x
myapp git status arg --git-dir /x
```

The rules are straightforward:

- A local option on a child command wins over an inherited option with the same name.
- A required shared option is validated at the final leaf command.
- Options inherited from ancestors appear under `Inherited Options` in sub-command help.

Under the hood, `Parser.InheritOptsFrom(src, category...)` re-registers inherited options by their underlying `flag.Value`, so parent and child commands write the same bound variable.

## docgen exports markdown and man pages

v3.8 adds a `docgen` package for generating markdown and man pages from commands:

```go
import "github.com/gookit/gcli/v3/docgen"

docgen.MarkdownTree(app, "./docs")
docgen.ManTree(app, "./man")

md  := docgen.CmdMarkdown(cmd)
man := docgen.CmdMan(cmd)
```

You can also expose generation from your CLI:

```go
import "github.com/gookit/gcli/v3/builtin"

app.Add(builtin.GenDoc())
```

Then run:

```bash
./cliapp gendoc -f md  -o ./docs
./cliapp gendoc -f man -o ./man
```

The generator handles several practical details: it strips color tags from examples, expands variables such as `{$fullCmd}`, preserves multi-line examples, includes the app version in the overview, and uses `gflag.CliOpt.TypeName()` to show option types.

## Migration notes

Two changes may require code updates.

The event package was renamed:

| Before | After |
|---|---|
| `import "github.com/gookit/gcli/v3/events"` | `import "github.com/gookit/gcli/v3/gevent"` |
| `events.OnCmdRunBefore` | `gevent.OnCmdRunBefore` or `gcli.EvtCmdRunBefore` |

Per-app parse state moved:

| Before | After |
|---|---|
| `GlobalOpts.ShowHelp` / `ShowVersion` / `inCompletion` / `genCompletion` | per-app `AppOptions`, accessed with `app.AppOpts()` |

`App.Opts()` still returns the process-level `*GlobalOpts`, so `app.Opts().Verbose` and `app.Opts() == gcli.GOpts()` are unchanged. Only the fields that describe one app's runtime parse state moved, which prevents multiple `App` instances in one process from sharing that state.

Arg reordering is also a behavior change, but a more permissive one. If you depended on the old behavior, set `Config.DisableReorderArgs = true`.

## Upgrade

```bash
go get -u github.com/gookit/gcli/v3@latest
```

After upgrading, the examples worth checking first are `reorder-args`, `struct-types`, and `struct-flag`. They cover the changes most likely to affect real command code.

Issues and suggestions can go to [GitHub Issues](https://github.com/gookit/gcli/issues).
