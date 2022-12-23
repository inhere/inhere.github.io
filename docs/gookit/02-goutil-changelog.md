# Goutil 版本更新日志

`gookit/goutil` Go 常用功能的扩展工具库。包含：数字，字符串，slice/数组，Map，结构体，反射，文本，文件，错误，时间日期，测试，CLI，命令运行，系统信息，格式化，常用信息获取等等。

- Github https://github.com/gookit/goutil

## v0.6.1 更新日志

> 发布于 2022.12.12

### 新特性

- :sparkles: feat: 添加新的子包 byteutil 提供一些字节相关的工具方法 https://github.com/gookit/goutil/commit/e5a08d4ea5eea1c7571f3b11cde3d59f8b89e473
- :sparkles: feat: 添加新的子包 strutil/secutil 提供 aes cbc 加密功能 https://github.com/gookit/goutil/commit/e121b7c1232b2ec0fb2822242602e6828cb6923b
- :sparkles: feat(dump): dump 支持 []byte 作为字符串打印和新增更多新选项 https://github.com/gookit/goutil/commit/025464a32940e585c83b76413dc5f18fd4459197
- :sparkles: feat(structs): 添加新的工具方法用于检查结构字段是否可导出 https://github.com/gookit/goutil/commit/179afea5759f5bc5f3373a1b9238abf4a8257274
- :sparkles: feat(dump): 支持通过选项 SkipNilField 在 dump 时跳过 nil 字段 https://github.com/gookit/goutil/commit/a55c5ca4939845f91a72d2c3c49dcf16e9343127
- 添加 SubstrCount 和测试用例。 https://github.com/gookit/goutil/commit/1bff3b30b0619650a07512f5eb67b2da1981c0b8

### 更新调整

- 向上：str，数学 - 更新一些 int64 到字符串转换 https://github.com/gookit/goutil/commit/449331c8d2e54db9b963fb794d7bdce19511dcf7
- :necktie: up: str - 更新字节工具方法并添加新的哈希工具方法 https://github.com/gookit/goutil/commit/8eef351026d5654e6475b9a44bd9f6fd3525c753
- :fire: up: 删除不推荐使用的包 common https://github.com/gookit/goutil/commit/17c48953a865f1d4af203d6db47410d69db58c7d

### 其他

- 构建（deps）：将 golang.org/x/text 从 0.4.0 提升到 0.5.0 https://github.com/gookit/goutil/commit/5297b13dd32936b2d3c3bfc051e817ca6999ee9d
- doc：更新一些说明文件并重新生成README文件 https://github.com/gookit/goutil/commit/c3f5086cbae508d94bd20b0c19a4253aabd15821
- :bulb: chore: 添加包注释或导出的 var 注释 https://github.com/gookit/goutil/commit/6ace647b01b923f158a5bb1b8af0e8573eb347d9
- :bulb: chore: 添加导出的 var 注释，修复一些名称样式 https://github.com/gookit/goutil/commit/ea10bc76842b7c3d82af39c155a59c5d9eeebe99
- :bulb: chore: 为导出的变量、方法添加注释。 https://github.com/gookit/goutil/commit/bc0a0b8322a198f4532a02bddfb804e8b25761b6