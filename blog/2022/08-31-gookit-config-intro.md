---
title: gookit/config - Go语言读取多种格式配置文件
tags: [golang,config,management,gookit]
date: 2022-08-31T13:25
slug: gookit-config-intro
authors: inhere
# gen by: kite run script/cgen.php --name gookit-config-intro --tags golang,config,management
---

`gookit/config` - Go应用配置管理，支持读取多种格式 `JSON`(默认), `JSON5`, `INI`, `Properties`, `YAML`, `TOML`, `HCL`, `ENV`, `Flags`，多文件加载，支持数据合并，解析环境变量名等等

<!--truncate-->

## 功能简介

- 支持多种格式: `JSON`(默认), `JSON5`, `INI`, `Properties`, `YAML`, `TOML`, `HCL`, `ENV`, `Flags`
  - `JSON` 内容支持注释，可以设置解析时清除注释
  - 其他驱动都是按需使用，不使用的不会加载编译到应用中
- 支持多个文件、多数据加载
- 支持从 OS ENV 变量数据加载配置
- 支持从远程 URL 加载配置数据
- 支持从命令行参数(`flags`)设置配置数据
- 支持在配置数据更改时触发事件
  - 可用事件: `set.value`, `set.data`, `load.data`, `clean.data`
- 支持数据覆盖合并，加载多份数据时将按key自动合并
- 支持将全部或部分配置数据绑定到结构体 `config.BindStruct("key", &s)`
  - NEW: 支持通过结构体标签 `default` 解析并设置默认值
- 支持通过 `.` 分隔符来按路径获取子级值，也支持自定义分隔符。 e.g `map.key` `arr.2`
- 支持解析ENV变量名称。 like `shell: ${SHELL}` -> `shell: /bin/zsh`
- 简洁的使用API `Get` `Int` `Uint` `Int64` `String` `Bool` `Ints` `IntMap` `Strings` `StringMap` ...
- 完善的单元测试(code coverage > 95%)

> Github: https://github.com/gookit/config

## 使用示例

这里使用yaml格式内容作为示例:

```yaml
name: app2
debug: false
baseKey: value2
shell: ${SHELL}
envKey1: ${NotExist|defValue}

map1:
    key: val2
    key2: val20

arr1:
    - val1
    - val21
```


> 示例代码请看 [_examples/yaml.go](https://github.com/gookit/config/blob/master/_examples/yaml.go):

```go
package main

import (
    "github.com/gookit/config/v2"
    "github.com/gookit/config/v2/yamlv3"
)

// go run ./examples/yaml.go
func main() {
	// 设置选项支持 ENV 解析
	config.WithOptions(config.ParseEnv)

	// 添加驱动程序以支持yaml内容解析（除了JSON是默认支持，其他的则是按需使用）
	config.AddDriver(yamlv3.Driver)

	// 加载配置，可以同时传入多个文件
	err := config.LoadFiles("testdata/yml_base.yml")
	if err != nil {
		panic(err)
	}

	// fmt.Printf("config data: \n %#v\n", config.Data())

	// 加载更多文件
	err = config.LoadFiles("testdata/yml_other.yml")
	// 也可以一次性加载多个文件
	// err := config.LoadFiles("testdata/yml_base.yml", "testdata/yml_other.yml")
	if err != nil {
		panic(err)
	}
}
```

### 使用说明

- 可以使用 `WithOptions()` 添加更多额外选项功能. 例如: `ParseEnv`, `ParseDefault`
- 可以使用 `AddDriver()` 添加需要使用的格式驱动器(`json` 是默认加载的的,无需添加)
- 然后就可以使用 `LoadFiles()` `LoadStrings()` 等方法加载配置数据
  - 可以传入多个文件,也可以调用多次
  - 多次加载的数据会自动按key进行合并处理

### 绑定数据到结构体

> 注意：结构体默认的绑定映射tag是 `mapstructure`，可以通过设置 `Options.TagName` 来更改它

```go
type User struct {
  Age  int  `mapstructure:"age"`
  Key  string `mapstructure:"key"`
  UserName  string `mapstructure:"user_name"`
  Tags []int  `mapstructure:"tags"`
}

user := User{}
err = config.BindStruct("user", &user)

fmt.Println(user.UserName) // inhere
```

**更改结构标签名称**

```go
config.WithOptions(func(opt *Options) {
    options.DecoderConfig.TagName = "config"
})

// use custom tag name.
type User struct {
  Age  int  `config:"age"`
  Key  string `config:"key"`
  UserName  string `config:"user_name"`
  Tags []int  `config:"tags"`
}

user := User{}
err = config.Decode(&user)
```

将所有配置数据绑定到结构:

```go
config.Decode(&myConf)
// 也可以
config.BindStruct("", &myConf)
```

> `config.MapOnExists` 与 `BindStruct` 一样，但仅当 key 存在时才进行映射绑定

### 快速获取数据

```go
// 获取整型
age := config.Int("age")
fmt.Print(age) // 100

// 获取布尔值
val := config.Bool("debug")
fmt.Print(val) // true

// 获取字符串
name := config.String("name")
fmt.Print(name) // inhere

// 获取字符串数组
arr1 := config.Strings("arr1")
fmt.Printf("%v %#v", arr1) // []string{"val1", "val21"}

// 获取字符串KV映射
val := config.StringMap("map1")
fmt.Printf("%v %#v",val) // map[string]string{"key":"val2", "key2":"val20"}

// 值包含ENV变量
value := config.String("shell")
fmt.Print(value) // /bin/zsh

// 通过key路径获取值
// from array
value := config.String("arr1.0")
fmt.Print(value) // "val1"

// from map
value := config.String("map1.key")
fmt.Print(value) // "val2"
```

### 设置新的值

```go
// set value
config.Set("name", "new name")
// get
name = config.String("name")
fmt.Print(name) // new name
```

## 从ENV载入数据

```go
// os env: APP_NAME=config APP_DEBUG=true
// load ENV info
config.LoadOSEnvs(map[string]string{"APP_NAME": "app_name", "APP_DEBUG": "app_debug"})

// read
config.Bool("app_debug") // true
config.String("app_name") // "config"
```

## 从命令行参数载入数据

支持简单的从命令行 `flag` 参数解析，加载数据

```go
// flags like: --name inhere --env dev --age 99 --debug

// load flag info
keys := []string{"name", "env", "age:int" "debug:bool"}
err := config.LoadFlags(keys)

// read
config.String("name") // "inhere"
config.String("env") // "dev"
config.Int("age") // 99
config.Bool("debug") // true
```

## 更多

更多使用说明请看 [README](https://github.com/gookit/config/blob/master/README.zh-CN.md)

