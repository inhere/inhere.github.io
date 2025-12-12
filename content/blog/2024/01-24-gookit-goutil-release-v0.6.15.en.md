---
title: gookit goutil release v0.6.15
taxonomies:
  tags: [gookit,golang,goutil]
date: 2024-01-24T23:24:00
# gen by: kite run script/cgen.php --name gookit-goutil-release-v0.6.15 --tags gookit,golang,goutil
---


`gookit/goutil` 💪 Go 常用功能的扩展工具库。包含：数字，字符串，slice/数组，Map，结构体，反射，文本，文件，错误，时间日期，测试，CLI，命令运行，系统信息，格式化，常用信息获取等等。

<!-- more -->

:::info

 **Github**: https://github.com/gookit/validate

:::

## 部分更新说明


## Change log

### Fixed

*   🐛 fix: strutil - fix random method unit test error [2a189eb](https://github.com/gookit/goutil/commit/2a189eb0f8e8f35c4699975ba5dab39f750d1f8d)
*   🐛 fix: support use JSON as env default value on parse struct. see issues [#135](https://github.com/gookit/goutil/issues/135) [79a8767](https://github.com/gookit/goutil/commit/79a87674382a150818dd389f0cad6527ec99b7c6)
*   🐛 fix: envutil - parse env var check error [300ee26](https://github.com/gookit/goutil/commit/300ee2695ec7f7399eccf1860319eadab64533b6)
*   🐛 fix: conv - fix some to unit convert tests error [58c5080](https://github.com/gookit/goutil/commit/58c50804ace58d321c16bf2d4dc9717e6f2c315e)

### Feature

*   ✨ feat: math - add Uint64, ToUint64 and related util func [8373e84](https://github.com/gookit/goutil/commit/8373e84c801d031f6279b1d3463ac36541668dfa)
*   ✨ feat: math,str - move the common ToStringWith func to internal package [f9a9690](https://github.com/gookit/goutil/commit/f9a96902b09d55fbd7375bfd138737d0d12d697a)
*   ✨ feat: dump - special handle for time.Time type display [1d0e7a0](https://github.com/gookit/goutil/commit/1d0e7a0d98197f5c2b0871eb5e5b8f97a34ab356)
*   ✨ feat: enhance the convert func, support handle ptr type value [3ace818](https://github.com/gookit/goutil/commit/3ace8188148ddf9d687e86f303a798af240100fc)

### Update

*   👔 up: map - add some new method for Map, SMap data [678218d](https://github.com/gookit/goutil/commit/678218d1f393da3d8fb938ebdad3152d0dd336ef)
*   👔 up: maputil - fix a method name error, add tests for MergeMultiSMap [e0bbc86](https://github.com/gookit/goutil/commit/e0bbc865df8e4511058dd6e90af36f7288a80b81)
*   ♻️ up: math - update all value convert to other type func logic, support more options [a1e842e](https://github.com/gookit/goutil/commit/a1e842ee97ef5da989b2045959771c9eae6b4aae)
*   👔 up: structs - update the SetValues logic will continue on set error [dd72232](https://github.com/gookit/goutil/commit/dd7223247aeff05451943865b06962e381ae2ca2)
*   👔 up: reflects,internal - update some internal and reflects util func [154fd5b](https://github.com/gookit/goutil/commit/154fd5be2a18fcc5420c88eed79f653831fc62b2)

### Other

*   build(deps): bump morphy2k/revive-action from 2.5.3 to 2.5.4 ([#136](https://github.com/gookit/goutil/pull/136)) [b8698a4](https://github.com/gookit/goutil/commit/b8698a4fac87206037b8bdb6363f82a1858759d6)
*   dep: upgrade some deps to latest version [f34c186](https://github.com/gookit/goutil/commit/f34c18688fb45a4df467033fd0377db7d8aa4ca5)
*   build(deps): bump WillAbides/setup-go-faster from 1.12.0 to 1.13.0 ([#145](https://github.com/gookit/goutil/pull/145)) [bf7f993](https://github.com/gookit/goutil/commit/bf7f99375b4bde4534e02acb13eb440f8a6904a3)
*   build(deps): bump golang.org/x/term from 0.13.0 to 0.15.0 ([#144](https://github.com/gookit/goutil/pull/144)) [b73b8e9](https://github.com/gookit/goutil/commit/b73b8e9cb99634fd91ad5cc2b13be84cd2b4d2c4)
*   Modify struct field setting logic. ([#138](https://github.com/gookit/goutil/pull/138)) [4eb9721](https://github.com/gookit/goutil/commit/4eb97211a58b42ae1c7ebb1b63fe50b934eeddf1)
*   📝 doc: add package comments for some subpackage [a49dc1c](https://github.com/gookit/goutil/commit/a49dc1c234b29a7f4a60cee3f0efbb4b84dd67ac)
*   💚 ci: math, str - fix some convert tests error [4275d2c](https://github.com/gookit/goutil/commit/4275d2c40729d62f4c123e1ca5a31b6a2b10bb19)
*   💚 ci: math - fix run ci tests error on go1.19 [a6a8d0e](https://github.com/gookit/goutil/commit/a6a8d0e4aa15bbfe67afd09eaba172ff09a793c8)
*   📝 doc: update and re-generate README docs [71e9b89](https://github.com/gookit/goutil/commit/71e9b89b1ecf5547790da6cdd5b54d0ff7a6d6af)
*   build(deps): bump github/codeql-action from 2 to 3 ([#147](https://github.com/gookit/goutil/pull/147)) [d397d97](https://github.com/gookit/goutil/commit/d397d975cad75fa00d0dd64e7c851c6b1ce0e699)
*   📝 doc: re-generate new README and fix some code style [9ef6bd0](https://github.com/gookit/goutil/commit/9ef6bd049bb435b99a8c9429046fb2b2e6584849)

> 完整变更日志
- [gihub release](https://github.com/gookit/goutil/releases/tag/v0.6.15)
- [v0.6.14...v0.6.15对比](https://github.com/gookit/validate/compare/v0.6.14...v0.6.15)

