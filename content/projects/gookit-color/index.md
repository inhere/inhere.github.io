+++
title = "🎨 gookit color"
description = "Golang下的命令行色彩使用库, 拥有丰富的色彩(16/256/True)渲染输出，通用的API方法，兼容Windows系统"
weight = 3

[taxonomies]
tags = ["golang", "gookit", "color"]

[extra]
+++

![GitHub Repo Card](https://githubcard.com/gookit/color.svg)

`gookit/color` 🎨 Golang 下的命令行色彩使用库, 拥有丰富的色彩(16/256/True)渲染输出，通用的API方法，兼容Windows系统

包含：颜色打印，颜色代码，颜色转换，颜色混合，颜色对比等等。

> [!TIP]
> Github [https://github.com/gookit/color](https://github.com/gookit/color)

## 功能特色

  - 使用简单方便
  - 支持丰富的颜色输出, 16色(4bit)，256色(8bit)，RGB色彩(24bit, RGB)
    - 16色(4bit)是最常用和支持最广的，支持Windows `cmd.exe`
    - 自 `v1.2.4` 起 **256色(8bit)，RGB色彩(24bit)均支持Windows CMD和PowerShell终端**
    - 请查看 [this gist](https://gist.github.com/XVilka/8346728) 了解支持RGB色彩的终端
  - 支持转换 `HEX` `HSL` 等为RGB色彩
  - 提供通用的API方法：`Print` `Printf` `Println` `Sprint` `Sprintf`
  - 同时支持html标签式的颜色渲染，除了使用内置标签，同时支持自定义颜色属性
    - 例如: `this an <green>message</> <fg=red;bg=blue>text</>` 标签内部文本将会渲染对应色彩
    - 自定义颜色属性: 支持使用16色彩名称，256色彩值，rgb色彩值以及hex色彩值
  - 基础色彩: `Bold` `Black` `White` `Gray` `Red` `Green` `Yellow` `Blue` `Magenta` `Cyan`
  - 扩展风格: `Info` `Note` `Light` `Error` `Danger` `Notice` `Success` `Comment` `Primary` `Warning` `Question` `Secondary`
  - 支持通过设置环境变量 `NO_COLOR` 来禁用色彩，或者使用 `FORCE_COLOR` 来强制使用色彩渲染.
  - 支持 Rgb, 256, 16 色彩之间的互相转换
  - 支持Linux、Mac，同时兼容Windows系统环境

> [!IMPORTANT]
> 更多使用请看 [README](https://github.com/gookit/color/blob/master/README.zh-CN.md)
