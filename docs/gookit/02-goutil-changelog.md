# GoUtil 版本更新日志

`gookit/goutil` Go 常用功能的扩展工具库。包含：数字，字符串，slice/数组，Map，结构体，反射，文本，文件，错误，时间日期，测试，CLI，命令运行，系统信息，格式化，常用信息获取等等。

- Github https://github.com/gookit/goutil

## v0.6.8 更新日志

### Fixed

- :white_check_mark: fix: fix go import error and re-generate docs https://github.com/gookit/goutil/commit/049780ec02a6ef301b0d729378a3d99d31772d93

### Feature

- :sparkles: feat(str): add new util func PathMatch, MatchNodePath for match string path https://github.com/gookit/goutil/commit/53f77697e2ecd0678484306716f031901877a442
- :sparkles: feat(stdio): add new util func for quick output to stdout https://github.com/gookit/goutil/commit/4120075ba4cde049a30eaf9abfb6828c5cac689d
- :sparkles: feat(fs): add new util func ResolvePath() and update IsAbsPath() logic https://github.com/gookit/goutil/commit/7797e83182bec003cf3465eee304fe9d0924beaa
- :sparkles: feat(fs): add new util func ToAbsPath() for convert path https://github.com/gookit/goutil/commit/247c554c223e3fb9160e442eb10de3d86d022f67
- :sparkles: feat(fs): add new util func SearchNameUp() for search file or dir path https://github.com/gookit/goutil/commit/d6255eefa015347b4385a65a633196f456c129c0
- :sparkles: feat(net/ctype): add new  util func for check content-type https://github.com/gookit/goutil/commit/a995df0a282963099b956dba311f509c8fc57374
- :sparkles: feat(str/text): replacer support parse env variable https://github.com/gookit/goutil/commit/411ef1fd561549a01f5b4dac274d77d51f5c4688
- :sparkles: feat(str/text): replacer support disable flatten vars map https://github.com/gookit/goutil/commit/f4abba10bad6dd1c680e1e1397124d2015a8461c
- :sparkles: feat(fsutil): add more filter for quick use the FindInDir() https://github.com/gookit/goutil/commit/78243ff9da8e611865b5126810777960b15915d2
- :sparkles: feat(math): add new util Min, SwapMin func and add more tests https://github.com/gookit/goutil/commit/19ba2eb794ed4a8817089cb3ba9168b77e7602a2
- :sparkles: feat(str/text): VarReplacer support NotFound handler and default value https://github.com/gookit/goutil/commit/767039300526430da68f49f12efbeffac5f4ae99
- :sparkles: feat(net/hreq): add more util func and simple basic-auth build https://github.com/gookit/goutil/commit/ea450e971c256eb49e44f522c58cbda1eb335010
- :sparkles: feat(map): add new util func EachAnyMap, ToAnyMap https://github.com/gookit/goutil/commit/247e7518413cdaeb6f2d31c6d06c42f0315c1465
- :sparkles: feat(net/httpreq): add new option for send request, and add some new util func https://github.com/gookit/goutil/commit/721b54a83f827fd7c3a25685bcd48263d83d0056
- :sparkles: feat(json,reflect): reflect add new util func for handle map data https://github.com/gookit/goutil/commit/9e8a6609fdffa82e4a58137d6ef69e9c5468ccec
- :sparkles: feat(fs): add new util func PathMatch for match path https://github.com/gookit/goutil/commit/86abf8efb1fbf3373c27633d303b829d13cfbc50

### Update

- :necktie: up(fmt,math): move commonly util func to pkg basefn https://github.com/gookit/goutil/commit/52217819e1d2f6c8340809d619764dc95816bc72
- :necktie: up(sys): rename a internal func and update some call name https://github.com/gookit/goutil/commit/17aeb31f248057740bcf0822a327137f2818eeb5
- :necktie: up(net/httpreq): update some client method logic https://github.com/gookit/goutil/commit/9454259991af6a3e135b483d6e2ed5c6d613cf59
- :necktie: up(arr,byte): update some tests and add byteutil add new func https://github.com/gookit/goutil/commit/a31b4d621d8f14702be8d95051fbb310ed8ee8ca
- :necktie: up(cflag): update some method logic and add more tests https://github.com/gookit/goutil/commit/62df9a82bfacc1bb4bb4e559ae825a6beb721513
- :necktie: up(maputil): update some method logic and add more method for Map https://github.com/gookit/goutil/commit/e7c80d4cb88ad064c7d58fc6173b827803bf1323
- :necktie: up(test,doc): update some tests and re-generate docs https://github.com/gookit/goutil/commit/c72adcb7e023c6f7109d5a0586856e5054f216c9
- :necktie: up(fs): add new fs util JoinSubPaths for join paths https://github.com/gookit/goutil/commit/a56a93e19e32344faad48741e5af8d8d400080f0
- :necktie: up(arr,cflag): optimize some util and methods logic https://github.com/gookit/goutil/commit/303b69926a8d983d9c36d1709f02deab24f33544
- :necktie: up(fs): update the Realpath logic, will always return abs path https://github.com/gookit/goutil/commit/59575e67dd4927c403e6283981d250edcd3925b7
- :necktie: up(text,struct): update some util method, fix text replace error https://github.com/gookit/goutil/commit/a3f173c53c6cacf562b77b416a95407f1f7828b1
- :necktie: up(all): update some util func, add some new util func https://github.com/gookit/goutil/commit/1784bb5c9f5457b2177a9ca8239534c0b17d21a1
- :necktie: up(str/text): add new option can keep missing vars https://github.com/gookit/goutil/commit/346870e22f1c054c34c833794c41e9fd590d3d7d
- :sparkles: up(net,sys): update some sys and net util func logic https://github.com/gookit/goutil/commit/fad9894b7ecd87d06f81b33a2d07a9d80097ca05

### Other

- build(deps): bump morphy2k/revive-action from 2.4.1 to 2.5.0 (#88) https://github.com/gookit/goutil/commit/9c81ef396e3789b2b8279d25f51b1622a4c3cbc8
- build(deps): bump morphy2k/revive-action from 2.5.0 to 2.5.1 (#89) https://github.com/gookit/goutil/commit/a1885579441754dbf27f10dd4c4149bc5f32eb39
- :white_check_mark: chore(tests): fix some tests error on windows https://github.com/gookit/goutil/commit/78ded5752679e5ccfa7e200a081578e896adc505
- sysutil: non-Linux OS support (#90) https://github.com/gookit/goutil/commit/78df8c84c4c61c8e6f1a98391c360703dd483e54
- build(deps): bump github.com/gookit/color from 1.5.2 to 1.5.3 (#91) https://github.com/gookit/goutil/commit/bc33394ac4118011d404e24c1e657f0d8095494a


## v0.6.6 更新日志


### Feature

- :sparkles: feat(cflag): add new extra flag value IntsString https://github.com/gookit/goutil/commit/cdec762f9013455212eb4d192ba959bcef192b56
- :sparkles: feat(env,sys): add new sys env get and build func EnvironWith https://github.com/gookit/goutil/commit/88c83fe795fcfc117bdc72aa5c00e92d900661c5
- :sparkles: feat(str/textutil): text.VarReplacer support string-map as replace context https://github.com/gookit/goutil/commit/9374e1987c63e16ea1247bc75e517c5fc9a168c5
- :sparkles: feat(sys/clip): update and enhance clipboard operate logic https://github.com/gookit/goutil/commit/fc98d06b2ebae1a992ffef5a6c334f06ebf8b975
- :sparkles: feat(cmdr): support set workdir and env-map on run command https://github.com/gookit/goutil/commit/7460c0f0d3ff7673ee7988424396fe826d02d228
- :sparkles: feat(fs): update and add some fs util func https://github.com/gookit/goutil/commit/ededf5b456b9e14e4c8be815008753f124d8680b
- :sparkles: feat(base): add new pkg basefn for provide some base func https://github.com/gookit/goutil/commit/4cd72425fb8f2ec82bfd3bbfe6046cdd6501c3d1

### Update

- :necktie: up(map): update and enhance some util func logic https://github.com/gookit/goutil/commit/69dbc9a531d1827ea577a110cb525b09520c4a87
- :necktie: up(cli): update the cli line builder logic https://github.com/gookit/goutil/commit/5036234d68d33f7422d80b329104b7c24d54bb35
- :sparkles: up(math): add new util func SafeInt64 https://github.com/gookit/goutil/commit/39019ad9f5e6c36f25e995b41eb6e47ca0c01cb3
- :sparkles: up(stdio): add new func WriteString, WriteBytes for write to stdout https://github.com/gookit/goutil/commit/b40b23794027fcd1446adbd9f64b57426707724c
- :necktie: up(str/text): update the replacement format parse logic, allow one left char https://github.com/gookit/goutil/commit/ccf24309f3b708815d0cd3ba078b2e0ae655f920
- :necktie: up(cli/cmdline): use strings.Builder refactor the cmdline.Builder logic https://github.com/gookit/goutil/commit/7060159167e0267a0c181993c6fdae97ca4fdb93
- :necktie: up(cli/cmdline): refactor the cmdline.LineParser logic and add more tests https://github.com/gookit/goutil/commit/77bac4b7f12db3edaa9a43a01a21a71d18872217
- :necktie: up(sys/clip): add new util func clipboard.Std() https://github.com/gookit/goutil/commit/9f81953ab2960d7a9b6b501c5fc8147c78a5ec47
- :necktie: up(str,byte): update some util func and add more tests https://github.com/gookit/goutil/commit/531fa6b412b5b264c559e5009b5371d38560b915
- :necktie: up(stdio,assert): add more util func and add more tests https://github.com/gookit/goutil/commit/000ca9064266197bd0626b6d60464113ca407f49

### Other

- build(deps): bump golang.org/x/term from 0.5.0 to 0.6.0 (#86) https://github.com/gookit/goutil/commit/b2962fb70a923921432de2ce90d7a80f8d34fee4
- build(deps): bump golang.org/x/text from 0.7.0 to 0.8.0 (#85) https://github.com/gookit/goutil/commit/57a853d2f92e367b2efa629adce069d20d35e680
- :memo: chore: add more tests and update readme docs https://github.com/gookit/goutil/commit/3c23237083265a86202de5429bd7b68d4920a3f2

## v0.6.6 更新日志


### Fixed

- :green_heart: fix: fix unit test error https://github.com/gookit/goutil/commit/ba0c414e7fda69b1c38f86c83f78dfc53cc08b90
- :bug: fix(fs): fix test error on Windows https://github.com/gookit/goutil/commit/f290bee792acee966769c21ea8d4e96f5738034d
- :bug: fix(sys): fix test error on Windows https://github.com/gookit/goutil/commit/8dab697bb4c39a851dd7b8a7bfb6f1d3066cfcae

### Feature

- :sparkles: feat(cflag): new add cflag.KVString flag value https://github.com/gookit/goutil/commit/8fe06c4ebb3fbf66a40a8fa89bd4b74167c14a75
- :sparkles: feat(str): add new util func SplitKV() and ContainsByte() https://github.com/gookit/goutil/commit/d593952b9fdb7ea557c4510d4fac39bd54cb19e9

### Update

- :necktie: up(sys): update the os check and open URL logic https://github.com/gookit/goutil/commit/e500a04f5a7a576b2d94f0ec46a14f6c282d83dd
- :necktie: up(sys): update and add some cmdr build methods https://github.com/gookit/goutil/commit/0cd4fda7a9f9444597fae42378813cbce171f013
- :necktie: up(fs): update some fs info util functions https://github.com/gookit/goutil/commit/2052663d151d43506675ea884fc2ede9cd941e3e
- :sparkles: up(map): add new util func SimpleMerge() and Data.Load() https://github.com/gookit/goutil/commit/87534df20c5768fe9626034454c15b04fb09bc9e
- :necktie: up(doc): update the README docs, cmdr add method AddCmdline() https://github.com/gookit/goutil/commit/2f3c2d7864c051f6a472a0425cf6845ccd7d839a
- :necktie: up(cflag,doc): update readme docs, add more tests for cflag https://github.com/gookit/goutil/commit/c9dcde97abdc14b71d75c6f886ba70b1dcb194f9

### Other

- :arrow_up: dep: update some deps to the latest version https://github.com/gookit/goutil/commit/028ef72793c3c388bf3470c0fb7faa69ea37441a
- :art: chore(all): fix and update some code style check error https://github.com/gookit/goutil/commit/f9983573f7ebe84250dab880e570f7e755753d5e

## v0.6.5 更新日志

### Feature

- :sparkles: feat(cli,cflag): add add new flag var ConfString https://github.com/gookit/goutil/commit/40a14e0db0c6acf3c8b3d2a7bcf5ee2e948fa976
- :sparkles: feat(textutil): add func ParseInlineINI quick parse inline INI config https://github.com/gookit/goutil/commit/9cd6487d7c05abbcecd51d81ec9af974b8655f0f
- :sparkles: feat(str): add QuickMatch and GlobMatch for match string https://github.com/gookit/goutil/commit/8d5e4f4a72c6e30df83db5e4c68a30e374e4093f
- :sparkles: feat(str): add struct Builder for safe build string https://github.com/gookit/goutil/commit/b34245efa74a11e639eafb0749b2d888ae3af9c4
- :sparkles: feat(err,byte,go): add some new util functions https://github.com/gookit/goutil/commit/3d304b0a87320a509315ee72a277224c99712060
- :sparkles: feat(arr,map): add new util func CombineToSMap https://github.com/gookit/goutil/commit/3699a1acfdfb0ea969d6b434353cd0443a6c38c8
- :sparkles: feat(cflag,struct): add new util func IsGoodName, ParseTagValueQuick https://github.com/gookit/goutil/commit/40ccfb8f646f062aec0b5694074c01388f2c14c0

### Update

- :recycle: up(errorx): add errorx/panics from testutil/panics https://github.com/gookit/goutil/commit/06b949dce2582696bfb843434cfcd1c15a60fd59
- :necktie: up(arr,sys): add alias method for exist util func https://github.com/gookit/goutil/commit/dcc5261ebbcff69d94e7d0979ad3a1d393464b9f
- :memo: up(doc): update and re-gen the readme docs https://github.com/gookit/goutil/commit/e6498a3302d3243f7f88367dc59e4541246cb154


## v0.6.4 更新日志

> Released at 2023.02.11

- :bug: fix(dump): makeslice: cap out of range. fix: #76 [4ba9b10](https://github.com/gookit/goutil/commit/4ba9b10e15a448eee1b8d2974835fc69407618ff)

## v0.6.3 更新日志

> Released at 2023.02.11

### Update

- :sparkles: up(env,sys): 新增 GetMulti, SetEnvMap, UnsetEnvs 等函数 [9eaddb5](https://github.com/gookit/goutil/commit/9eaddb5669280dc91c989e4930ecd1efbdef18cf)
- :necktie: up(str): 调整 SplitInlineComment() 处理逻辑 [31445cd](https://github.com/gookit/goutil/commit/31445cd999e5577b9e7e7f6d3e9efe3289fd7131)
- :necktie: up(sys): 调整 SearchPath() 逻辑, 支持限制返回结果数 [67cbae1](https://github.com/gookit/goutil/commit/67cbae1d5db5c5ec09240917fae73c78e7d9e9d6)
- :white_check_mark: up(sys,env,map): add more tests case for util func [392536c](https://github.com/gookit/goutil/commit/392536c6b91555d25cb5cbca8dc6ab81a56b92b9)
- :necktie: up(fs,sys): update some fs and sys util func run logic [7727628](https://github.com/gookit/goutil/commit/772762873ad9fa766afce0841d0343078770545e)
- :necktie: up(struct): update some structs comments and update readme [f461852](https://github.com/gookit/goutil/commit/f461852b5dff186ce1467af42ec31a89f3ae3c22)
- :necktie: up(str): update some string util comments and func [796d1fe](https://github.com/gookit/goutil/commit/796d1fe6674337176b82ef71bd1e47b26b80b072)

### Other

- build(deps): bump golang.org/x/text from 0.6.0 to 0.7.0 [1e3ea77](https://github.com/gookit/goutil/commit/1e3ea77d248bcecbeb26fcf8d3ef520d2bdd8829)


## v0.6.2 更新日志

> Released at 2023.02.02

### Feature

- :necktie: feat: str - 新增检查方法 ContainsOne, ContainsAll, HasEmpty, IsAllEmpty 等 [0e4792a](https://github.com/gookit/goutil/commit/0e4792acf21e1bf742f1af5882b74ff40c49b935)
- :necktie: feat: str/textutil - 支持快速替换给定文本的变量 [ecc23cb](https://github.com/gookit/goutil/commit/ecc23cb0cec4c518623b08c37f2e1fd948d6bea2)
- :necktie: feat: sys,proc - 添加和更新一些实用函数 [aa78114](https://github.com/gookit/goutil/commit/aa78114b0da1017f6456957ba86cd24eeebe5fc7)
- :sparkles: feat: fs - 添加一些实用函数 NewIOReader,TextScanner,LineScanner,ReadFile,ReadString 等 [3352512](https://github.com/gookit/goutil/commit/3352512f6a133ae15a57944bc54362b604c7ff95)
- :sparkles: feat: map, struct - 新增实用函数 structs.ToString(), maputil.Data.Uint()
 [90af09e](https://github.com/gookit/goutil/commit/90af09e118b4a521c19341e6b8a49a0890e22e7f)
- :sparkles: feat: stdio - 新增实用函数 NewIOReader, NewScanner [ea243d6](https://github.com/gookit/goutil/commit/ea243d62c89dc9ec7be9fd6a9b0bcdb39bfd506b)
- :sparkles: feat: arr - 新增检查函数 NotIn, In, ContainsAll/IsParent [2a18ca2](https://github.com/gookit/goutil/commit/2a18ca2915c93e53aea74e86779943f04bd1910a)
- :sparkles: feat: textutil - 新增函数 IsMatchAll() 快速检查文本是否有关键字 [d0dade8](https://github.com/gookit/goutil/commit/d0dade8703da172f80424ff8c85ec759ec8273ae)
- :sparkles: feat: math - 新增泛型函数 Max, SwapMax 比较和交换值 [176923b](https://github.com/gookit/goutil/commit/176923bb953622b995ed80017056cbe04db251cd)
- feat: error, test - 新增工具函数 快速断言并返回错误或直接panic [7188216](https://github.com/gookit/goutil/commit/718821631d8a7cc0567a2f39eece80f1b7c54157)
- :sparkles: feat: fs - 新增函数 MkDirs, MkSubDirs 批量创建目录或子目录 [c4447cb](https://github.com/gookit/goutil/commit/c4447cb0d32cec53221c3bb99a14ecefc4ec382e)
- :sparkles: feat: env,sys - 新增函数 EnvPaths, SearchEnvKeys, SearchEnv 快速获取和搜索环境变量 [b3d7669](https://github.com/gookit/goutil/commit/b3d7669d1a1c851d7f75e2a9ad449d74ca6c969c)
- :sparkles: feat: str - 新增函数 IEqual, IContains 忽略大小写检查字符串 [746eb35](https://github.com/gookit/goutil/commit/746eb35d45a9c0d40fb9ae7945c9fe89bbc79765)
- :sparkles: feat: goutil - 新增函数 CallOn, CallOrElse, OrError, OrValue, OrReturn 基于条件运行或返回值 [97a2863](https://github.com/gookit/goutil/commit/97a2863089d70a2d39f5fa720f74890767293d0b)
- :sparkles: feat: arr - 新增函数 StringsAsInts, StringsTryInts, ConvType 等快速转换slice类型 [75d8d89](https://github.com/gookit/goutil/commit/75d8d89f4cb7e9c59587caeccfeb73202beb42b1)
- :sparkles: feat: reflects - 新增函数 ConvSlice 通过反射方式转换 slice 类型 [f87fc86](https://github.com/gookit/goutil/commit/f87fc86119afd8418b47e93ad26b3925f78bef15)
- :sparkles: feat: structs - 初始化结构体 InitDefaults() 新增支持 slice 类型字段 [948fa70](https://github.com/gookit/goutil/commit/948fa703e7107edb4dc736aa041c260fc8df7d9b)
- :sparkles: feat: byte - 新增函数 StrOrErr(), SafeString() 检查并在无错误时转为string [767ed80](https://github.com/gookit/goutil/commit/767ed80a5e98d20b9e832a08d065de301ba0b4ec)
- :sparkles: feat: cmdr - cmdr.Cmd 新增方法 ToOSStdoutStderr, ToOSStdout 快速设置命令输出到 OS stdout, stderr [6aaea78](https://github.com/gookit/goutil/commit/6aaea78dee886b7aa5483d71826a34813d8cd77b)

### Update

- :necktie: up: str, math - 新增一些 OrElse() 等快速检测同时获取值的函数 [cb21fbc](https://github.com/gookit/goutil/commit/cb21fbc4624c800f9609137e053dfe2fef027190)
- :necktie: up: str - update some util func and add more tests [a3e07f4](https://github.com/gookit/goutil/commit/a3e07f4b5fbbb6131d42116a4e1c61c7614d7d69)
- :necktie: up: str,math - update some util func [eaf0990](https://github.com/gookit/goutil/commit/eaf09908ead83f19d6a10882547e5cda1e42a79e)
- :necktie: up: str,byte - add and update some util func [cf5d34e](https://github.com/gookit/goutil/commit/cf5d34e6b20bf45830fed19a3d3b6ac4682cdade)
- :necktie: up: byte,cflag - update and add some new tests [6e47f69](https://github.com/gookit/goutil/commit/6e47f6911ed99225a1b5f6fdf6cfafe3b034e333)
- :necktie: up(env, str): 调整 ENV 变量解析逻辑 和新增 strutil.Valid() [5193849](https://github.com/gookit/goutil/commit/5193849498317900885f524fae7cf5777559f246)
- :necktie: up(str): update some str value get func [676fe4e](https://github.com/gookit/goutil/commit/676fe4e08e7313c593278d9e4f734225381e6be3)

### Fixed

- :bug: fix(env, str): fix the envutil test error and update some str util [2e7aa63](https://github.com/gookit/goutil/commit/2e7aa6329973423a76ea6b9b20a8b9150281dfb1)
- :bug: fix: textscan - fix multi inline comments parse error [bf68c94](https://github.com/gookit/goutil/commit/bf68c945ee79d7e214087ab117b55fa02b0f1c54)

### Other

- build(deps): bump golang.org/x/text from 0.5.0 to 0.6.0 [79d7781](https://github.com/gookit/goutil/commit/79d77815079d167871c65f27186911014fdb53fd)
- doc: re-generate the README docs [42e3084](https://github.com/gookit/goutil/commit/42e30848e174ad8b442132b89d0c910b4c8be673)
- doc: update the doc parse logic, support generic types [030676d](https://github.com/gookit/goutil/commit/030676da0275c93e1e67af344c0fd88cccad3b3e)
- doc: generate and update README docs [f342e92](https://github.com/gookit/goutil/commit/f342e92004e670fc2aee7f72d0caa21f4172a347)


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