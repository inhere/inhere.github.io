---
title: 学习编写bash命令自动补全
# authors: inhere
tags:
  - shell
  - bash
  - linux
  - completion
date: 2021-08-09T11:24:00
---

简单学习编写bash命令自动补全

<!-- more -->

> 下面的示例使用 `__my_completion` 作为命令行应用 `myapp`(eg: git) 的补全函数

## 相关函数说明

### complete 函数

`complete` 指定命令的补全函数

自定义补全时调用complete命令来完成，complete通过选项提供了多种补全的途径和方式，这些选项是按照先后次序起作用的：`-A -G -W -F -C -X -P -S -o`

一些选项说明:

- `-o STRING` 额外设置补全选项，可以设置多次；选项值可以为：
  - `bashdefault` 如果没有生成补全条目，就使用bash默认的其它补全
  - `default`	如果没有生成补全条目，就使用“readline”默认的文件名补全。
  - `dirnames`	如果没有生成补全条目，就进行目录名补全。
  - `filenames`	告诉“readline”生成文件名，以便进行与文件名相关的处理，例如在目录名后面加上斜杠，引用特殊字符，去掉行尾的空格，目的是用于shell函数。
  - `noquote`	告诉“readline”不引用文件名，默认会进行引用。
  - `nospace`	告诉“readline”在补全的名称后不添加空格，默认添加空格。
  - `plusdirs`	生成补全条目之后，还会进行目录名补全并把结果添加到其它动作得到的结果中。
- `-A STRING` action，指定动作，这个有固定的几个可选。选项值可以为：
  - `alias`	别名，同选项  `-a`。
  - `arrayvar`	数组变量名。
  - `binding`	“readline”键绑定名。
  - `builtin`	shell内建命令名，同选项 `-b`。
  - `command`	命令名，同选项 `-c`。
  - `directory`	目录名，同选项 `-d`。
  - `disabled`	不可用的shell内建命令名。
  - `enabled`	可用的shell内建命令名。
  - `export`	导出的shell变量名，同选项`-e`。
  - `file`	文件名，同选项 `-f`。
  - `function`	shell函数名。
  - `group`	组名，同选项 `-g`。
  - `helptopic`	内建命令help支持的帮助主题。
  - `hostname`	主机名，从shell环境变量HOSTFILE中获取。
  - `job`	作业名，同选项 `-j`。
  - `keyword`	shell保留字，同选项 `-k`。
  - `running`	正在运行的作业名。
  - `service`	服务名，同选项 `-s`。
  - `setopt`	内建命令set的选项 `-o` 可用的参数。
  - `shopt`	内建命令shopt可接受的选项名。
  - `signal`	信号名。
  - `stopped`	暂停的作业名。
  - `user`	用户名，同选项 `-u`。
  - `variable`	所有的shell变量名，同选项 `-v`。
- `-C command`	在子shell中执行命令，并把其结果作为补全条目。
- `-F function` 指定function生成可选单词。
  - 在函数定义中，一些shell变量可以使用：`COMP_LINE`, `COMP_POINT`, `COMP_KEY`, `COMP_TYPE`。
  - 函数参数定义是：`$1` 为当前要补全参数的命令，`$2` 为当前要补全的单词，`$3` 为当前要补全单词的前面一个单词。
  - 这些都可以在自定义函数中使用。最终单词列表要放到 `COMPREPLY` 这个数组中，shell补全机制是从这个数组中取单词的。
- `-G globpat`	使用文件名扩展模式globpat进行扩展以生成可能的补全条目。
- `-P prefix`	在所有的选项应用到补全结果后，在结果前添加前缀prefix。
- `-S suffix`	在所有的选项应用到补全结果后，在结果后添加后缀suffix。
- `-W wordlist`	使用特殊变量 `IFS` 中的字符拆分单词列表wordlist，并扩展拆分后的每个单词，结果中与待补全单词匹配的条目就是补全条目。
- `-X filterpat`	filterpat是进行文件名扩展时使用的模式，它作用于通过前面的选项和参数生成的补全列表，并把每个与过滤模式匹配的条目删除，模式中前导的叹号表示否定，这时会删除与过滤模式不匹配的条目。

> TIP: `IFS` 内部字段分隔符。
> 用于迭代字符串，例如：`data="a,b,c"` 设置 `local IFS=","` , 使用 `for item in $data` 迭代字符串，内部item 即是单个的 `a` `b` `c`

** -F 补充说明：**

- `COMPREPLY` 变量的内容总是会显示，补全函数需要自己处理其中的内容。
- 如果 `COMPREPLY` 变量中只有一个元素，那么这个词会自动补全到命令之后。返回多个候选则不会触发这个功能。

- `COMP_WORDS`：当前命令行中已经输入的词数组。
- `COMP_CWORD`：当前光标所处词位于 `COMP_WORDS` 数组中的索引值。既当按下 tab 键时光标所处词的索引。
- `COMP_LINE`：当前命令行。

获取命令后面的词，我们可以使用 `COMP_WORDS[1]` 的值

### compgen 函数

`compgen` 是一个用于生成补全列表的内置命令，支持complete命令的大部分参数（例如-W参数指定补全词列表，-d参数补全目录），并能够 **基于用户已经输入的内容进行过滤**

```bash
$ compgen --help
compgen: compgen [-abcdefgjksuv] [-o option] [-A action] [-G globpat] [-W wordlist]  [-F function] [-C command] [-X filterpat] [-P prefix] [-S suffix] [word]
```

选项 | 选项值   | 说明
----|-----------|-----------------------
`-F` |   function | 执行shell 函数，函数中生成COMPREPLY作为候选的补全结果
`-C` |    command | 将 command 命令的执行结果作为候选的补全 结果
`-G` |    pattern | 将匹配 pattern的文件名作为候选的补全结果
`-W` |    wordlist |  分割 wordlist 中的单词，作为候选的补全结果
`-p` |    `[name]` | 列出当前所有的补全命令
`-r` |   `[name]` | 删除某个补全命令

测试使用：

```bash
$ compgen -W "one two three"
one
two
three

inhere@Inhere-win10 MINGW64 /f/work (main)
$ compgen -W "one two three" o
one

inhere@Inhere-win10 MINGW64 /f/work (main)
$ compgen -W "one two three" t
two
three
```

### 帮助调试

```bash
# 打印全部已定义的函数名称
declare -F
# 查看指定函数的定义
declare -f __my_completion
```

## 分割单词列表作为补全数据

```bash
#!/usr/bin/env bash

__my_completion () {
    cur_name="${COMP_WORDS[COMP_CWORD]}"
    # 候选命令
    commands="one two three"
    COMPREPLY=($(compgen -W "$commands" -- "$cur_name"))
}

complete -F __my_completion myapp
```

## 使用echo返回作为补全数据

简单的使用echo返回作为补全数据

```bash
__my_completion () {
    # 候选命令
    commands="one two three"
    echo $commands
}

# for use echo
complete -o dirnames -C '__my_completion' myapp
```

## 使用外部函数的结果补全

```bash
__my_completion () {
    # 输入的关键词
    local term="${COMP_WORDS[COMP_CWORD]}"
    # 使用外部命令来匹配关键词并返回结果
    local commands=$(kite jump hint "$term" --no-name)

    #    echo commands:
    #    echo $commands --- ${commands[@]}
    COMPREPLY=($commands)
}

# for use echo
complete -o dirnames -F '__my_completion' myapp
```


> TIP: 编写好之后，可以使用 `source ./my_complete.sh` 临时加载到bash; 要保持一直生效需要配置到 `.bashrc`


> 参考文章链接：
> - https://blog.csdn.net/qq_38883889/article/details/106543271
> - https://blog.csdn.net/junyidcf/article/details/54178196
> - https://www.infoq.cn/article/bash-programmable-completion-tutorial