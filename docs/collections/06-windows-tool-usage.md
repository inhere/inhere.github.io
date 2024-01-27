---
title: Windows下的工具使用和配置记录
date: 2024-08-07T21:14
tags: [windows, tools, config]
---

Windows下的工具使用和配置记录


## git bash 中文乱码

直接运行的 `git-bash.exe` 可以在选项 `options>Text` 中设置

- `Locale=zh_CN`
- 字符集为 `UTF-8`

### etc 下的配置文件

进入 git 安装目录，通常是 `C:\Program Files\Git\etc` 修改配置文件。或者直接终端中编辑

```bash
$ vim /etc/gitconfig

[gui]
  encoding = utf-8  #代码库统一使用utf-8
[i18n]
  commitencoding = GB2312  #log编码,windows默认gb2312,声明后发到服务器才不会乱码
[svn]
  pathnameencoding = GB2312  #支持中文路径
```


编辑 `etc/inputrc` 文件，修改 output-meta 和 convert-meta 属性值

```ini
set output-meta on  #bash可以正常输入中文
set convert-meta off
```

编辑 profile 文件，在文件末尾添加如下内容：

```gitconfig
export LESSHARESET=utf-8
```

> refer: https://www.cnblogs.com/wangkongming/p/3821305.html

### 嵌入的bin/bash

嵌入到其他终端（Terminal,IDE,VSCode等）运行的 `bin/bash.exe`


```bash
$ vim ~/.bashrc
# 添加设置解决中文乱码
export LC_CTYPE=zh_CN.UTF-8
```

设置后，打开新的终端即可。
