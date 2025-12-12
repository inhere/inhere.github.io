---
title: vim使用vimgrep在其他文件中或者文件夹中搜索字符串
taxonomies:
  tags: [vim,tools]
date: 2016-07-26T20:44:34
slug: use-vimgrep-search-file-contents-in-vim
# authors: inhere
# gen by: kite run script/cgen.php --name use-vimgrep-search-file-contents-in-vim -c script/conf.ini
---

vim中可以使用vimgrep在其他文件中或者文件夹中搜索字符串

<!-- more -->

在vim中提供2中方法来在其他文件或者文件夹中搜索字符串，第一种是`vimgrep`还有一种是`grep`。

> 如果只是在当前打开的文件中查找字符串的，使用 `:?` 后面加上想要搜索的字符串就可以。

这里要解决的是在别的文件中，也许这个文件还没有打开，或者需要在多个文件中操作，比如在当前文件夹下面所有.c的文件中查找，或者在莫个文件夹中查找。这些情况下，我们可以使用imgrep或者grep。这里只介绍vimgrep。
这是个vim的内部命令，因为可以在vim内部直接使用，

```
:vimgrep
```

这个命令还可简写为vim

```bash
:vim
```

## 用例1

在当前文件夹下面所有`.c`文件中查找字符串 `classA`

```
:vimgrep /classA/gj ./*.c
```

解释一下：
- g: 如果一行中出现多处，只显示一次，没有g就会出现多次

- j: 只是列出所有匹配的行，没有j那么就会跳去第一个匹配的行

## 用例2

在当前文件夹及其子文件夹下面查找字符串classA

```bash
:vimgrep /classA/gj **/*.*
```

## 用例3

在当前目录中的"includes"目录里的所有文件中,查找字符串"the menu".

```bash
:vimgrep /the menu/ ./includes/*.*
```



搜索完毕后可以使用`copen`或者`cw`命令来打开搜索的结果。使用`jk`来移动选中行，回车可以跳到对应的文件。

`copen` 后面可以指定窗口的高度。

注意当去到搜到到的文件后，当前的窗口会被该文件覆盖，那么怎么回到原来的文件，

```bash
ctrl+^
```

更多的信息可以使用 `:help vimgrep` 来查看。

> 转自：[ vim使用vimgrep在其他文件中或者文件夹中搜索字符串 | 学步园](http://www.xuebuyuan.com/1116549.html)


