---
title: 简单快速的配置自己的bash环境
# authors: inhere
tags:
  - shell
  - bash
  - linux
date: 2021-08-08T11:26:00
---

简单快速的配置自己的bash环境

<!-- more -->

## 自动加载指定目录的脚本

快速的配置bashrc支持自动加载指定目录的bash脚本

想要将bash脚本放置到 `~/.bash-scripts`

```bash
mkdir ~/.bash-scripts
```

使用vim打开 `~/.bashrc`:

```bash
vim ~/.bashrc
```

添加如下内容:

```bash
#
#
# use for custom config an .bashrc, support auto load *.bash files
#

## auto load bash files
for file in .bash-scripts/*.bash
do
    # shellcheck disable=SC1090
    test -f $file && . $file
done

## load custom aliases file.
local customAliasFile=~/.my-aliases.sh
# shellcheck disable=SC1090
test -f $customAliasFile && . $customAliasFile

```

## 配置常用别名和函数

我将自己的常用别名和函数 放置到 `~/.my-aliases.sh`

```bash
##
## aliases
##
alias ls="ls --color=auto"
alias ll="ls -al"
alias gst="git status"

##
## reload bash
##
function reload_bash(){
    source ~/.bashrc
}

##
## proxy setting
##
function proxy_off(){
    unset http_proxy
    unset https_proxy
    echo -e "proxy closed"
}

function proxy_on() {
    export no_proxy="localhost,127.0.0.1,localaddress,.localdomain.com"
    export http_proxy="http://127.0.0.1:10801"
    export https_proxy=$http_proxy
    echo -e "proxy opened"
}

```
