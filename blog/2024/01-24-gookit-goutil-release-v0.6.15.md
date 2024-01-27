---
title: gookit/goutil - Go常用功能的扩展工具库，发布 v0.6.15 版本
tags: [gookit,golang,goutil]
date: 2024-01-24T23:24
slug: gookit-goutil-release-v0.6.15
authors: inhere
# gen by: kite run script/cgen.php --name gookit-goutil-release-v0.6.15 --tags gookit,golang,goutil
---


`gookit/goutil` 💪 Go 常用功能的扩展工具库。包含：数字，字符串，slice/数组，Map，结构体，反射，文本，文件，错误，时间日期，测试，CLI，命令运行，系统信息，格式化，常用信息获取等等。

本次 v0.6.15 版本主要是一些功能增强和修复更新。

<!--truncate-->

:::info Github

 **Github**: https://github.com/gookit/goutil

:::

## 更新说明

一些关键功能更新说明。

### fix ENV变量里的JSON值

支持ENV变量里使用JSON值。

设置ENV value:

```bash
CREDENTIALS='{"type": "model"}'
```

解析变量获取值：

```go
val := envutil.VarParse("${CREDENTIALS | {}}")
// Output: {"type": "model"}
```

> 之前的版本会解析处理错误，返回 `{"type": "model"}}`

### mathutil 新增 Uint64, ToUint64

`mathutil` 之前只有 `Uint`, `ToUint` 相关函数，并且返回的是 uint64。与函数名称不符，有歧义。
本次新增了 `Uint64, ToUint64` 相关函数，原有的 `Uint`, `ToUint` 改为了返回 uint 类型。

```go title="github.com/gookit/goutil/mathutil"
func Uint64(in any) (uint64, error)
func SafeUint64(in any) uint64
func MustUint64(in any) uint64
func Uint64OrDefault(in any, defVal uint64) uint64
func Uint64OrErr(in any) (uint64, error)
func ToUint64(in any) (uint64, error)
func ToUint64With(in any, optFns ...ConvOptionFn[uint64]) (u64 uint64, err error)
```

### To int,uint,string 等转换方法支持指针类型

- `nil` 当前会默认转换为对应的 零值(`int: 0, string: ""`)
- 默认不会启用，需要设置对应的选项 `mathutil.WithHandlePtr[T]`

```go title="example or tests"
func TestWithHandlePtr(t *testing.T) {
	var err error
	is := assert.New(t)

	iv1 := 2
	i641 := int64(2)

	// int
	t.Run("to int", func(t *testing.T) {
		var iv int
		iv, err = mathutil.ToInt(&iv1)
		is.NoErr(err)
		is.Eq(2, iv)

		_, err = mathutil.ToInt(&i641)
		is.Err(err) // 默认转换报错

        // 启用ptr处理后，转换正确
		iv, err = mathutil.ToIntWith(&i641, mathutil.WithHandlePtr[int])
		is.NoErr(err)
		is.Eq(2, iv)
	})
)
```

> 更多信息和测试请查看 [gookit/goutil#3ace818](https://github.com/gookit/goutil/commit/3ace8188148ddf9d687e86f303a798af240100fc)

### dump - 时间 time.Time 特殊处理

```go
data := map[string]any{
    "slice":  []any{1, 2},
    "time":   time.Now(),
}
dump.P(data)
```

**新版本输出：**

```text
map[string]interface {} { #len=2
    "slice": []interface {} [ #len=2,cap=2
        int(1),
        int(2),
    ],
    // highlight-next-line
    "time": time.Time(2024-01-27T16:12:04+08:00),
}
```

而在之前的版本里，会打印整个 `time.Time` 结构体，非常大且基本无法查看。


## 更新记录

> 完整变更日志请查看 [v0.6.14...v0.6.15对比](https://github.com/gookit/validate/compare/v0.6.14...v0.6.15)

### 修复

* 🐛 修复：strutil - 修复随机方法单元测试错误 2a189eb
* 🐛 修复：envutil - 支持在解析变量使用 JSON 作为 env 默认值。请参阅问题 #135 79a8767
* 🐛 修复：envutil - 解析环境变量检查错误 300ee26
* 🐛 修复：conv - 修复一些单位转换测试错误 58c5080

### 新功能

* ✨ feat： math - 添加 Uint64、ToUint64 和相关的 util func 8373e84
* ✨ feat： math，str - 将通用的 ToStringWith func 移动到内部包 f9a9690
* ✨ feat： dump - 时间 time.Time 特殊处理。时间类型显示为字符串 1d0e7a0
* ✨ feat：math - 增强转换功能，支持处理指针类型值 3ace818

###  更新

* 👔 up： map - 为 Map、SMap 数据添加一些新方法 678218d
* 👔 up： maputil - 修复方法名称错误，为 MergeMultiSMap 添加测试 e0bbc86
* ♻️ UP：mathutil - 更新所有值转换为其他类型的函数逻辑，支持更多选项 a1e842e
* 👔 up： structs - 更新 SetValues 逻辑将在设置错误时继续 dd72232
* 👔 up： reflects，internal - 更新一些内部和反射相关工具方法 154fd5b

###  其他

* build（deps）： 将 morphy2k/revive-action 从 2.5.3 提升到 2.5.4 （ #136） b8698a4
* DEP：将一些 deps 升级到最新版本 f34c186
* build（deps）： 将 WillAbides/setup-go-faster 从 1.12.0 提升到 1.13.0 （ #145） bf7f993
* build（deps）： 从 0.13.0 到 0.15.0 的 Bump golang.org/x/term （ #144） b73b8e9
* 修改结构字段设置逻辑。( #138) 4eb9721
* 📝 doc：为某些子包添加包注释 a49dc1c
* 💚 CI：数学，str - 修复一些转换测试错误 4275d2c
* 💚 CI：数学 - 修复在 go1.19 上运行 CI 测试错误 a6a8d0e
* 📝 文档：更新并重新生成自述文件文档 71e9b89
* build（deps）： 将 github/codeql-action 从 2 提升到 3 （ #147） d397d97
* 📝 doc：重新生成新的 README 并修复一些代码样式 9ef6bd0


:::note
Github release https://github.com/gookit/goutil/releases/tag/v0.6.15
:::
