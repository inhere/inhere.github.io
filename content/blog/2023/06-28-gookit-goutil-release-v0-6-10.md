---
title: gookit/goutil - 发布 v0.6.10 版本, Go常用功能的扩展工具库
taxonomies:
  tags: [gookit,golang,goutil]
date: 2023-06-28T14:55:00
slug: gookit-goutil-release-v0.6.10
# authors: inhere
# gen by: kite run script/cgen.php --name gookit-goutil-release-v0.6.10 --tags gookit,golang,goutil
---


`gookit/goutil` Go 常用功能的扩展工具库。包含：数字，字符串，slice/数组，Map，结构体，反射，文本，文件，错误，时间日期，测试，CLI，命令运行，系统信息，格式化，常用信息获取等等。


<!-- more -->

> **Github**: https://github.com/gookit/goutil


## v0.6.10 更新记录

> 完整变更日志 [v0.6.9...v0.6.10](https://github.com/gookit/goutil/compare/v0.6.9...v0.6.10)

### ✨ 新功能

- ✨ feat: testutil - 添加新的子包 `fakeobj` 以创建假对象用于测试
- ✨ feat: testutil - 添加新的函数 `NewEchoServer()` 来启动echo服务器
- ✨ feat: byteutil - Buffer 新增更多有用的方法，方便使用
- ✨ feat: dump - 特殊处理自定义的 int、uint 类型值，将会打印 String 格式的说明
- ✨ feat: fsutil - 添加新的函数 `Glob()` 快速列出匹配的文件
- ♻️ feat: httpreq - 重构内置的 http 客户端 `httpreq` 逻辑

### 👔 更新调整

- 👔 up: structs - 更新 `InitDefaults()` 对不为空的结构体切片字段的初始化支持
- 👔 up: maputil - `SimpleMerge()` 支持深度合并 map[string]any 数据

### 其他调整

- ✅ test: 更新一些文档并修复一些单元测试
- ⬆️ dep: 更新 golang.org/x 依赖到最新版本


### 部分新增功能使用


#### dump 打印自定义类型

dump 特殊处理自定义的 int、uint 类型值，将会打印 String 格式的说明

![dump custom_type.png](https://raw.githubusercontent.com/gookit/goutil/v0.6.10/dump/_examples/custom_type.png)

#### 初始化结构体

- 支持初始化使用环境变量
- 支持初始化 slice 字段，嵌套结构体

```go
type ExtraDefault struct {
    City   string `default:"some where"`
    Github string `default:"${ GITHUB_ADDR }"`
}

type User struct {
    Name  string        `default:"inhere"`
    Age   int           `default:"300"`
    Extra *ExtraDefault `default:""` // 标记需要初始化
}

optFn := func(opt *structs.InitOptions) {
    opt.ParseEnv = true
}

obj := &User{}
err := structs.InitDefaults(obj, optFn)
goutil.PanicErr(err)

dump.P(obj)
```

**初始化结果**:

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

#### 使用 echo server 测试

使用 `testutil.NewEchoServer()` 可以快速的创建一个HTTP echo server. 方便测试HTTP请求，响应等。

**使用示例**：

```go,name=example_test.go
var testSrvAddr string

func TestMain(m *testing.M) {
    s := testutil.NewEchoServer()
    defer s.Close()

    testSrvAddr = "http://" + s.Listener.Addr().String()
    fmt.Println("server addr:", testSrvAddr)

    m.Run()
}

func TestNewEchoServer(t *testing.T) {
    // 可直接请求测试server
    r, err := http.Post(testSrvAddr, "text/plain", strings.NewReader("hello!"))
    assert.NoErr(t, err)

    // 将响应信息绑定到 testutil.EchoReply
    rr := testutil.ParseRespToReply(r)
    dump.P(rr)
    assert.Eq(t, "POST", rr.Method)
    assert.Eq(t, "text/plain", rr.ContentType())
    assert.Eq(t, "hello!", rr.Body)
}
```

## v0.6.9 更新记录

> 完整变更日志 [v0.6.8...v0.6.9](https://github.com/gookit/goutil/compare/v0.6.8...v0.6.9)

### ✨ 新功能

- strutil - 新增 `ToByteSize(),SafeByteSize()` 用于将大小字符串(eg: 5MB)转换为字节大小
- strutil 新增 `ParseSizeRange()` 方便快速的解析字符串大小范围表达式 eg：`200kb~50mb`
- strutil - 添加新的工具函数: `DatetimeNo()，RandWithTpl(), SimpleMatch()`
- byteutil - 添加新的工具函数: `Random()`, `AppendAny()`
- fsutil - 添加新的工具函数: `ReadOrErr()`, `ReadStringOrErr()`
- cliutil - 添加新的工具函数: `Confirm()`, `ReadAsBool()`
- errorx - 添加新的工具函数 `Err(), Errf()` 方便创建 error
- structs - `InitDefaults()` 增强，支持嵌套结构体指针初始化
- structs - `SetValues()` 增强，支持设置处理结构体指针值
- structs - 新增 `ToSMap(), TryToSMap(), TryToSMap()` 转换结构体为string map
- testutil/assert 新增断言方法 `NotContainsKey()`, `NotContainsKeys()`
- reflects 新增工具方法 `UnexportedValue()`, `SetUnexportedValue()`
- maputil 新增工具函数 `HasOneKey(), CombineToMap(), TryAnyMap()`
- arrutil 新增工具函数 `AnyToSlice(), CombineToMap()`
- jsonutil 新增工具方法 `IsJSON(), IsJSONFast()` 检查是否是JSON
- ♻️ fsutil/finder 文件、目录查找重构，功能增强，使用更加方便
- timex 新增工具函数 `NowAddSec(), IsDuration(), InRange()`
- timex `ToDuration()` 增强，支持单位 d，w 和长单位 hour、min、sec
- mathutil 新增工具方法 `InRange()`, `OutRange()`, `InUintRange()`
- fsutil 新增工具方法 `RemoveSub()` 快速删除子目录和文件
- maputil `GetByPath()` 增强，支持类似 `top.*.field` 匹配路径获取值

### 👔 更新调整

- strutil 优化 `ToByteSize()` 和 `GlobMatch()` 逻辑
- struts - InitDefaults() 支持初始化非零 ptr 子结构字段
- 💥 struts - InitDefaults() 要初始化子结构字段必须带有 `default:""`

### 其他调整

- 📝 文档：README 文档更新，一些子包添加 README
- ✅ test: 新增并修复一些单元测试
- ⬆️ dep: 更新 golang.org/x 依赖到最新版本

### 部分功能使用示例

#### finder 文件查找使用

`fsutil/finder` 提供了简单快速的方式查找匹配文件、目录。

- 内置支持 名称、扩展、后缀、前缀、glob、path 等包含或排除
- 支持匹配 文件大小，修改时间(ModTime)等扩展匹配方式

```go
ff := finder.NewFinder("/path/to/dir/").
    // OnlyFindDir(). // 默认只只查找文件
    UseAbsPath().
    WithoutDotDir().
    WithDirName("testdata").
    Include(finder.HumanModTime("<10m")). // 最近10分钟有变动的
    Include(finder.HumanSize("500kb~10mb")) // 限制文件大小

// Find() 返回chan, 可以 for 处理查找结果
for el := range f.Find() {
    fmt.Println(el.Path())
}
```

#### strutil.ParseSizeRange

可以简单方便的将字符串大小范围解析为 byte size

```go
opt := &strutil.ParseSizeOpt{}

mix, max, err := strutil.ParseSizeRange("1kb~1mb", opt)
goutil.PanicErr(err)
fmt.Println(min, max) // OUTPUT: 1024, 1048576
```

**支持的表达式格式示例：**

```txt
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

`timex.ParseRange()` 可以简单快速的将相对的时间大小范围、或关键字解析为 time.Time

```go
start, end, err := ParseRange("-1h~1h", nil)
goutil.PanicErr(err)


fmt.Println(start, end)
```

**支持的表达式格式示例：**

```txt
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

## 更多信息

更多使用说明请看 [README](https://github.com/gookit/slog/blob/master/README.zh-CN.md) 以及相关方法的单元测试

> **Github**: https://github.com/gookit/goutil
