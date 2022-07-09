---
title: ZSH自动补全脚本编写
authors: inhere
tags:
  - shell
  - zsh
  - linux
date: 2021-07-28T22:04
---

# ZSH 自动补全脚本编写

告诉 zsh 使用哪个函数来完成命令

命令的完成函数存储在名称以下划线 `_` 开头的文件中，这些文件应放置在 `$fpath` 变量中列出的目录中。
可以通过在 `~/.zshrc` 文件中添加这样的行来向 `$fpath` 添加目录：

```bash
fpath=(~/newdir $fpath )
```

<!--truncate-->

完成函数文件的第一行看起来像这样：

```bash
# compdef foobar
```

这告诉 zsh 该文件包含用于完成 foobar 命令的代码。这是第一行最常使用的格式，但如果需要，您也可以使用相同的文件来完成多个不同的功能。
请参阅[此处](http://zsh.sourceforge.net/Doc/Release/Completion-System.html#Autoloaded-files)了解更多详情。

你也可以直接使用 `compdef` 命令（例如在你的 `~/.zshrc` 文件中）告诉 zsh 使用哪个函数来完成这样的命令：


```bash
> compdef _function foobar
```

或者对几个命令使用相同的完成：

```bash
> compdef _function foobar goocar hoodar
```

或者如果你想提供参数：

```bash
> compdef ' _function arg1 arg2 ' foobar
```

请参[阅此](http://zsh.sourceforge.net/Doc/Release/Completion-System.html#Functions-4)处了解更多详情。

## 编写自己的完成函数

一个很好的入门方法是查看一些已经定义的完成函数。在我的 linux 安装中，这些可以在 `/usr/share/zsh/functions/Completion/Unix` 和 `/usr/share/zsh/functions/Completion/Linux` 和其他一些子目录中找到。

您会注意到 `_arguments` 函数在这些文件中被大量使用。这是一个实用函数，可以轻松编写简单的完成函数。`_arguments` 函数是 `compadd` 内置函数的包装器。`compadd` 内置函数是用于向命令行添加完成词并控制其行为的核心函数。
但是，大多数情况下您不需要使用 `compadd`，因为有许多实用函数，例如 `_arguments` 和 `_describe`，它们更易于使用。

对于非常基本的完成，`_describe` 函数应该足够了

### 实用功能

以下是一些可能有用的实用函数的列表。实用功能的完整列表以及完整的解释可在此处获得。下一节将给出如何使用这些函数的示例。

**整体完成的主要实用功能**

函数 | 说明
-----|-------
`_alternative`	| 可用于从其他实用程序函数或 shell 代码生成完成候选。
`_arguments`	| 用于指定如何完成带有 unix 样式选项的命令的单个选项和参数。
`_describe`	| 用于创建由带有描述（但没有动作 `ACTION`）的单词组成的简单完成。比 `_arguments` 更容易使用
`_gnu_generic` |	可用于完成理解 `--help` 选项的命令的选项。
`_regex_arguments` |	创建一个函数，用于将命令行参数与正则表达式匹配，然后执行操作/完成。

**用于执行单个单词的复杂完成的函数**

函数 | 说明
-----|-------
`_values` |用于完成任意关键字（值）及其参数，或此类组合的逗号分隔列表。
`_combination`   |  用于完成值的组合，例如主机名和用户名对。
`_multi_parts` |   用于分别完成单词的多个部分，其中每个部分由一些字符分隔，例如用于完成部分文件路径：`/u/i/sy -> /usr/include/sys`
`_sep_parts`  |    与 _multi_parts 类似，但允许在完成的不同部分使用不同的分隔符。
`_sequence`   |  用作另一个完成函数的包装器，以完成由该其他函数生成的分隔匹配列表。

**用于完成特定类型对象的函数**

函数 | 说明
-----|-------
`_path_files`  |    用于完成文件路径。采取多种选择来控制行为。
`_files`    |  使用除 `-g` 和 `-/` 之外的所有选项调用 `_path_files`。这些选项取决于文件模式样式设置。
`_net_interfaces` | 用于补全网络接口名称
`_users`   |   用于填写用户名
`_groups` | 用于完成组名
`_options`    |  用于补全 shell 选项的名称。
`_parameters`    |  用于完成 shell 参数/变量的名称（可以限制为匹配模式的那些）

**处理缓存完成的函数**

如果您有大量完成，您可以将它们保存在缓存文件中，以便快速加载完成。

函数 | 说明
-----|-------
`_cache_invalid` |  指示与给定缓存标识符对应的完成缓存是否需要重建
`_retrieve_cache` | 从缓存文件中检索完成信息
`_store_cache` |    在缓存文件中存储与给定缓存标识符相对应的完成

**其他功能**

函数 | 说明
-----|-------
`_message` |     用于在无法生成完成的地方显示帮助消息。
`_regex_words` |    可用于为 `_regex_arguments` 命令生成参数。这比手动编写参数更容易。
`_guard` |     可用于 `_arguments` 的规范的 `ACTION` 和类似函数来检查正在完成的单词。

**动作 Action**

许多实用函数，例如 `_arguments` `_regex_arguments` `_alternative` 和 `_values` 可能在选项/参数规范的末尾包含一个动作。此动作指示如何完成相应的参数。动作 `Action` 可以采用以下形式之一：

函数 | 说明
-----|-------
`()` | 需要参数，但不会生成匹配项。
`(ITEM1 ITEM2)` |	可能匹配项列表
`((ITEM1\:'DESC1' ITEM2\:'DESC2'))`	| 可能的匹配列表，附带描述信息。注意：Action 中的引号不能和其所在的参数格式字符串的引号相同
`->STRING` |  将`$state`设置为字符串并继续（`$state`可在实用功能调用后在案例陈述中检查）
`FUNCTION` |  用于生成匹配或执行某些其他操作的函数名称. 例如 `_files` 或 `_message`
`{EVAL-STRING}` |	将字符串评估为 shell 代码以生成匹配项。这可用于调用带有参数的实用程序函数，例如 `_values` 或 `_describe`
`=ACTION` |	在完成命令行中插入一个虚拟词而且不会改变补全位置节点

并非所有操作类型都可用于使用它们的所有实用功能。例如，->string 类型在_regex_arguments或_alternative功能中不可用。

### 使用 _describe 编写简单的完成函数

`_describe` 函数可用于简单的补全，其中选项/参数的顺序和位置并不重要。您只需要创建一个数组参数来保存选项及其描述，然后将参数名称作为参数传递给 `_describe`。下面的示例创建完成候选 c 和 d，以及描述（注意这应该放在 `$fpath` 中列出的某个目录中名为 `_cmd` 的文件中）。

```bash
#compdef cmd
local -a subcmds
subcmds=('c:description for c command' 'd:description for d command')
_describe 'command' subcmds
```

您可以使用以下由双连字符分隔的多个不同列表，但请注意，这混合了单个标题下的匹配项，并且不打算与不同类型的完成候选者一起使用：

```bash
local -a subcmds topics
subcmds=('c:description for c command' 'd:description for d command')
topics=('e:description for e help topic' 'f:description for f help topic')
_describe 'command' subcmds -- topics

```

如果两个候选人有相同的描述，`_describe` 将它们收集在同一行中，并确保描述在列中整齐对齐。`_describe` 函数可以在 `ACTION` 中用作 `_alternative`、`_arguments` 或 `_regex_arguments` 规范的一部分。在这种情况下，您必须将它的参数放在大括号中，例如 `'TAG:DESCRIPTION:{_describe 'values' options}'`

### 使用 _alternative 编写完成函数

与 `_describe` 一样，此函数执行简单的补全，其中选项/参数的顺序和位置并不重要。然而，与 _describe 不同的是，可以调用其他函数而不是固定匹配来生成完成候选。此外，_alternative 允许混合不同类型的完成候选。

作为参数，它采用 `'TAG:DESCRIPTION:ACTION'` 形式的规范列表，其中 TAG 是标识完成匹配类型的特殊标签，DESCRIPTION 用作标题来共同描述完成候选组，而 ACTION是前面列出的动作类型之一（除了 `->STRING` 和 `=ACTION` 形式）。例如：

```bash
_alternative 'arguments:custom arg:(a b c)' 'files:filename:_files'
```

第一个规范添加完成候选 a、b 和 c，第二个规范调用 `_files` 函数来完成文件路径。

我们可以用 `\` 将规范分成几行，并为每个自定义参数添加描述，如下所示：


```bash
_alternative \
  'args:custom arg:((a\:"description a" b\:"description b" c\:"description c"))' \
  'files:filename:_files'
```

如果我们想将参数传递给 `_files`，它们可以简单地包含在内，如下所示：


```bash
_alternative \
  'args:custom arg:((a\:"description a" b\:"description b" c\:"description c"))'\
  'files:filename:_files -/'
```

要使用参数扩展来创建我们的完成列表，我们必须使用双引号来引用规范，例如：

```bash
_alternative \
  "dirs:user directory:($userdirs)" \
  "pids:process ID:($(ps -A o pid=))"
```

在这种情况下，第一个规范添加存储在 `$userdirs` 变量中的单词，第二个规范评估 `'ps -A o pid='` 以获取用作完成候选的 pid 列表。在实践中，我们会为此使用现有的 `_pids` 函数。

我们可以使用其他实用函数，例如 ACTION 中的 `_values` 来执行更复杂的完成，例如：

```bash
_alternative \
  "directories:user directory:($userdirs)" \
  'options:comma-separated opt: _values -s , letter a b c'

```

这将完成 `$userdirs` 中的项目，以及包含 `a, b &/or c` 的逗号分隔列表。注意 `_values` 之前的初始空格的使用。这是必需的，因为 `_values` 不理解用于描述的标准 compadd 选项。

与 `_describe` 一样，`_alternative` 函数本身可以作为 `_arguments` 或 `_regex_arguments` 规范的一部分在 `ACTION` 中使用。

### 使用 _arguments 编写完成函数

通过对 _arguments 函数的一次调用，您可以创建相当复杂的完成函数。它旨在处理带有各种选项和一些普通参数的典型命令。与 _alternative 函数一样，_arguments 将规范字符串列表作为参数。这些规范字符串指定选项和任何相应的选项参数（例如 -f 文件名）或命令参数。

基本选项规范采用 `'-OPT[DESCRIPTION]'` 的形式，例如：

```bash
# sort output: 排序输出
# long output: 长输出
_arguments '-s[sort output]' '--l[long output]' '-l[long output]'
```

可以在 `'-OPT[DESCRIPTION]:MESSAGE:ACTION'` 形式的选项描述之后指定选项的参数，其中 MESSAGE 是要显示的消息，而 ACTION 可以是上面 ACTIONS 部分中提到的任何形式。例如：

```bash
_arguments '-f[input file]:filename:_files'
```

命令参数规范采用 `'N:MESSAGE:ACTION'` 形式，其中 `N` 表示它是第 `N` 个命令参数，而 `MESSAGE & ACTION` 和以前一样。如果省略 N，则它仅表示下一个命令参数（在任何已指定的参数之后）。如果在开头（在 `N` 之后）使用 _双冒号_，则该参数是可选的。例如：

```bash
_arguments '-s[sort output]' '1:first arg:_net_interfaces' '::optional arg:_files' ':next arg:(a b c)'
```

这里第一个 arg 是网络接口，下一个可选 `arg` 是文件名，最后一个 `arg` 可以是 a、b 或 c，并且 `-s` 选项可以在任何位置完成。

`_arguments` 函数允许使用上面 `ACTION` 部分中列出的全套 ACTION 表单。这意味着您可以使用操作来选择 `case` 语句分支，如下所示：

```bash
_arguments '-m[music file]:filename:->files' '-f[flags]:flag:->flags'
case "$state" in
    files)
        local -a music_files
        music_files=( Music/**/*.{mp3,wav,flac,ogg} )
        _multi_parts / music_files
        ;;
    flags)
        _values -s , 'flags' a b c d e
        ;;
esac
```

在这种情况下，音乐文件(music_files)的路径使用 `_multi_parts` 函数逐步降序完成，标志使用 `_values` 函数作为逗号分隔的列表完成。

我这里刚刚给你介绍了 `_arguments` 规范的基础知识，你还可以指定互斥选项、重复选项&参数、以+开头的选项而不是-等，更多细节参见[官方文档](http://zsh.sourceforge.net/Doc/Release/Completion-System.html#Completion-System)。
另请查看本文档末尾提到的教程，以及[src 目录](https://github.com/vapniks/zsh-completions/tree/master/src)中的完成功能。

## 测试与调试

要重新加载完成功能：

```bash
> unfunction _func
> autoload -U _func
```

可以调用以下函数来获取有用的信息。如果默认键绑定不起作用，您可以尝试按 `Alt+x`，然后输入命令名称。

功能 |	默认键绑定 |	描述
-----|------------|-----------
`_complete_help`	| `Ctrl+xh` |	显示有关在当前光标位置完成时使用的上下文名称、标签和完成函数的信息
`_complete_help` |	`Alt+2 Ctrl+xh` |	如上所述，但显示更多信息
`_complete_debug` |	`Ctrl+x ?`	| 执行普通完成，但在临时文件中捕获完成系统执行的 shell 命令的跟踪

## 陷阱（注意事项）

请记住在包含完成函数的文件的开头包含 `#compdef` 行。

注意对 `_arguments` 或 `_regex_arguments` 的规范使用正确的引用类型：如果规范中存在需要扩展的参数，请使用双引号，否则使用单引号，并确保在项目描述周围使用不同的引号。

检查您在 `_arguments` 、`_alternative` 、 `_regex_arguments` 等规范的正确位置是否有正确数量的 `:`。

记住在使用 `_regex_arguments` 时包含一个初始模式来匹配命令词（它不需要匹配操作）。

请记住在 `_regex_arguments` 的任何 `PATTERN` 参数的末尾放置一个空字符 `$'\0'`

## 提示

有时你会遇到这样的情况，在子命令之后只有一个选项，当在子命令之后按下 tab 时，zsh 会自动完成这个。相反，如果您希望在完成之前将其与其描述一起列出，您可以向 `ACTION` 添加另一个空选项（即 `\:`），如下所示 `':TAG:DESCRIPTION:((opt1\:”description for opt1” \:))'` 请注意这一点仅适用于在其规范参数（`_arguments`、`_regex_arguments` 等）中使用 `ACTION` 的实用程序函数


> 本文翻译自 [zsh-users/zsh-completions](https://github.com/zsh-users/zsh-completions/blob/master/zsh-completions-howto.org)

> TIP: 更完整的翻译文章参看 http://chuquan.me/2020/10/02/zsh-completion-tutorial/
