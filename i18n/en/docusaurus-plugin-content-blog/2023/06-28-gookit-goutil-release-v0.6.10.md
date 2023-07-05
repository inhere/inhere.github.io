---
title: gookit/goutil - released v0.6.10, an extension library of common Go features
tags: [gookit,golang,goutil]
date: 2023-06-28T14:55
slug: gookit-goutil-release-v0.6.10
authors: inhere
# gen by: kite run script/cgen.php --name gookit-goutil-release-v0.6.10 --tags gookit,golang,goutil
---


`gookit/goutil` An extended library of Go's common functionality. Contains: number, string, slice/array, Map, struct, reflection, text, file, error, time and date, test, CLI, command run, system information, formatting, common information acquisition, etc.


<!--truncate-->

> **Github**: https://github.com/gookit/goutil


## v0.6.10 change log

> Full changelog [v0.6.9...v0.6.10](https://github.com/gookit/goutil/compare/v0.6.9...v0.6.10)

### ✨ New features

- ✨ feat: testutil - adds a new child package `fakeobj` to create fake objects for testing
- ✨ feat: testutil - adds a new function NewEchoServer() to start the echo server
- ✨ feat: byteutil - Buffer adds more useful methods for ease of use
- ✨ feat: dump - Special handling of custom int, uint type values, will print instructions in String format
- ✨ feat: fsutil - adds a new function to Glob() quickly list matching files
- ♻️ feat: httpreq - Refactoring the built-in HTTP client httpreq logic

### 👔 Update Adjustments

- 👔 up: structs - Update and support InitDefaults() for struct slice fields that are not null
- 👔 up: maputil - `SimpleMerge()` Supports deep merging of map[string]any data

### Other adjustments

- ✅ test: Update some documentation and fix some unit tests
- ⬆️ dep: Update golang.org/x depends on the latest version


###  Some feature usage examples


#### dump - prints custom types

dump - special handles custom int, uint type values, and will print instructions in String format

![dump custom_type.png](https://raw.githubusercontent.com/gookit/goutil/v0.6.10/dump/_examples/custom_type.png)

#### Initialize the struct

- Support for initializing the use of environment variables
- Support initializing slice fields and nesting structs

```go
type ExtraDefault struct {
    City   string `default:"some where"`
    Github string `default:"${ GITHUB_ADDR }"`
}

type User struct {
    Name  string        `default:"inhere"`
    Age   int           `default:"300"`
    Extra *ExtraDefault `default:""` // mark: need init
}

optFn := func(opt *structs.InitOptions) {
    opt.ParseEnv = true
}

obj := &User{}
err := structs.InitDefaults(obj, optFn)
goutil.PanicErr(err)

dump.P(obj)
```

**Initialization result:**

```go
&structs_test.User {
  Name: string("inhere"), #len=6
  Age: int(300),
  Extra: &structs_test.ExtraDefault {
    City: string("some where"), #len=10
    Github: string("https://some .... url"), #len=21
  },
},
```

#### Test with Echo Server

Use `testutil.NewEchoServer()` to quickly create an HTTP echo server. Convenient for testing HTTP requests, responses, etc.

**Usage examples:**

```go title="example_test.go“

var testSrvAddr string

func TestMain(m *testing.M) {
    s := testutil.NewEchoServer()
    defer s.Close()

    testSrvAddr = "http://" + s.Listener.Addr().String()
    fmt.Println("server addr:", testSrvAddr)

    m.Run()
}

func TestNewEchoServer(t *testing.T) {
    // can direct request the echo server
    r, err := http.Post(testSrvAddr, "text/plain", strings.NewReader("hello!"))
    assert.NoErr(t, err)

    // binding response to the testutil.EchoReply
    rr := testutil.ParseRespToReply(r)
    dump.P(rr)
    assert.Eq(t, "POST", rr.Method)
    assert.Eq(t, "text/plain", rr.ContentType())
    assert.Eq(t, "hello!", rr.Body)
}
```

## v0.6.9 change log

> Full changelog [v0.6.8...v0.6.9](https://github.com/gookit/goutil/compare/v0.6.8...v0.6.9)

### ✨ New features

- strutil - Added `ToByteSize(),SafeByteSize()` for converting size string (eg: 5MB) to byte size
- strutil has added `ParseSizeRange()` to facilitate and quickly parse string size range expressions eg: `200kb~50mb`
- strutil - Added new utility functions: `DatetimeNo(), RandWithTpl(), SimpleMatch()`
- byteutil - Add new utility functions: `Random()`, `AppendAny()`
- fsutil - Add new utility functions: `ReadOrErr()`, `ReadStringOrErr()`
- cliutil - Add new utility functions: `Confirm()`, `ReadAsBool()`
- errorx - Add new utility functions `Err(), Errf()` for easy creation of error
- structs - `InitDefaults()` enhanced to support nested structure pointer initialization
- structs - `SetValues()` enhanced to support setting and processing structure pointer values
- structs - Add `ToSMap(), TryToSMap(), TryToSMap()` to convert structure to string map
- testutil/assert new assertion methods `NotContainsKey()`, `NotContainsKeys()`
- Reflects new utility methods `UnexportedValue()`, `SetUnexportedValue()`
- maputil new tool functions `HasOneKey(), CombineToMap(), TryAnyMap()`
- Added utility functions `AnyToSlice(), CombineToMap()` in arrutil
- jsonutil has added tool methods `IsJSON(), IsJSONFast()` to check whether it is JSON
- ♻️ fsutil/finder file and directory search reconstruction, enhanced functions, more convenient to use
- timex new utility functions `NowAddSec(), IsDuration(), InRange()`
- timex `ToDuration()` enhanced, support unit d, w and long unit hour, min, sec
- mathutil new tool methods `InRange()`, `OutRange()`, `InUintRange()`
- fsutil new tool method `RemoveSub()` to quickly delete subdirectories and files
- maputil `GetByPath()` is enhanced to support matching paths similar to `top.*.field` to get values

### 👔 Update adjustments

- strutil optimization `ToByteSize()` and `GlobMatch()` logic
- struts - `InitDefaults()` supports initializing non-zero ptr substructure fields
- 💥 struts - `InitDefaults()` To initialize a substructure, the field must be marked with `default:""`

### Other adjustments

- 📝 doc: README documentation updated, some subpackages added README
- ✅ test: Added and fixed some unit tests
- ⬆️ dep: update golang.org/x dependencies to latest version

### Some feature usage examples


#### finder - find files or dir

`fsutil/finder` Provides a simple and fast way to find matching files and directories.

- Built-in support Name, extension, suffix, prefix, glob, path, etc. include or exclude
- Support matching file size, modification time (ModTime) and other extended matching methods

```go
ff := finder.NewFinder("/path/to/dir/").
    // OnlyFindDir(). // default find files
    UseAbsPath().
    WithoutDotDir().
    WithDirName("testdata").
    Include(finder.HumanModTime("<10m")). // latest 10 minutes, to Now
    Include(finder.HumanSize("500kb~10mb")) // limit file size

// Find() returns chan, can be for handling
for el := range f.Find() {
    fmt.Println(el.Path())
}
```

#### strutil.ParseSizeRange

It is easy to parse the string size range to byte size.

```go
opt := &strutil.ParseSizeOpt{}

mix, max, err := strutil.ParseSizeRange("1kb~1mb", opt)
goutil.PanicErr(err)
fmt.Println(min, max) // OUTPUT: 1024, 1048576
```

**Examples of supported expression formats:**

```text
"1KB~2MB"       => 1KB to 2MB
"-1KB"          => <1KB
"~1MB"          => <1MB
"< 1KB"         => <1KB
"1KB"           => >1KB
"1KB~"          => >1KB
">1KB"          => >1KB
"+1KB"          => >1KB
```

#### timex.ParseRange()

`timex.ParseRange()` It is easy to quickly parse the relative time size range or keyword into `time.Time`

```go
start, end, err := ParseRange("-1h~1h", nil)
goutil.PanicErr(err)


fmt.Println(start, end)
```

**Examples of supported expression formats:**

```text
"-5h~-1h"           => 5 hours ago to 1 hour ago
"1h~5h"             => 1 hour after to 5 hours after
"-1h~1h"            => 1 hour ago to 1 hour after
"-1h"               => 1 hour ago to feature. eq "-1h~"
"-1h~0"             => 1 hour ago to now.
"< -1h" OR "~-1h"   => 1 hour ago.
"> 1h" OR "1h"      => 1 hour after to feature

// keyword: now, today, yesterday, tomorrow
"today"          => today start to today end
"yesterday"      => yesterday start to yesterday end
"tomorrow"       => tomorrow start to tomorrow end
```

## More usage

For more instructions, see Unit tests for [README](https://github.com/gookit/slog/blob/master/README.zh-CN.md) and related methods

> **Github**: https://github.com/gookit/goutil

