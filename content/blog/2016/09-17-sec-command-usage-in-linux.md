---
title: linux 命令 sed 详解
taxonomies:
  tags: [linux,sed,tools]
date: 2016-09-17T11:28:34
slug: sec-command-usage-in-linux
authors: [inhere, network]
# gen by: kite run script/cgen.php --name sec-command-usage-in-linux -c script/conf.ini
---

sed是stream editor的简称，也就是流编辑器。
它一次处理一行内容，处理时，把当前处理的行存储在临时缓冲区中，称为“模式空间”（pattern space），
接着用sed命令处理缓冲区中的内容，处理完成后，把缓冲区的内容送往屏幕。
接着处理下一行，这样不断重复，直到文件末尾。

<!-- more -->


> TIP: 文件内容并没有改变，除非你使用重定向存储输出或者加了选项 `-i`

## 使用语法

sed命令的使用规则是这样的：

```
sed [option] 'command' input_file
```

其中option是可选的，常用的option有如下几种：

- `-n` 使用安静(silent)模式。在一般sed的用法中，所有来自stdin的内容一般都会被列出到屏幕上。但如果加上`-n`参数后，则只有经过sed特殊处理的那一行(或者动作)才会被列出来；
- `-e` 直接在指令列模式上进行 sed 的动作编辑；
- `-f` 直接将 sed 的动作写在一个文件内， `-f filename` 则可以执行filename内的sed命令；
- `-r` 让sed命令支持扩展的正则表达式(默认是基础正则表达式)；
- `-i` 直接修改读取的文件内容，而不是由屏幕输出。

常用的命令有以下几种：

- `a`  append即追加字符串， a 的后面跟上字符串s(多行字符串可以用`\n`分隔)，则会在当前选择的行的后面都加上字符串s；
- `c`  取代/替换字符串，c 后面跟上字符串s(多行字符串可以用`\n`分隔)，则会将当前选中的行替换成字符串s；
- `d`  delete即删除，该命令会将当前选中的行删除；
- `i`  insert即插入字符串，i 后面跟上字符串s(多行字符串可以用`\n`分隔)，则会在当前选中的行的前面都插入字符串s；
- `p` print即打印，该命令会打印当前选择的行到屏幕上；
- `s` 替换，通常s命令的用法是这样的：`1，2s/old/new/g`，将old字符串替换成new字符串

## 命令示例

假设有一个本地文件test.txt，文件内容如下：

```
[user@computer ~]$ cat test.txt
this is first line
this is second line
happy everyday
end
```

本节将使用该文件详细演示每一个命令的用法。

> 文件内容并没有改变，除非你使用重定向存储输出或者加了选项 `-i`

### a 命令

```
[user@computer ~]$ sed '1a \add one' test.txt
this is first line
add one
this is second line
happy everyday
end
```

本例的作用是在第一行之后增加字符串”add one”，从输出可以看到具体效果。
本例命令部分说明：

- 1表示第一行，同样的第二行写成2，第一行到第三行写成`1,3`，
- 用`$`表示最后一行，比如`2,$`表示第二行到最后一行中间所有的行(包含第二行和最后一行)


```
[user@computer ~]$ sed '1,$a \add one' test.txt
this is first line
add one
this is second line
add one
happy everyday
add one
end
add one
```

本例表示在第一行和最后一行所有的行后面都加上”add one”字符串，从输出可以看到效果。

```
[user@computer ~]$ sed '/first/a \add one' test.txt
this is first line
add one
this is second line
happy everyday
end
```

本例表示在包含”first”字符串的行的后面加上字符串”add one”，从输出可以看到第一行包含first，所以第一行之后增加了”add one”

```
[user@computer ~]$ sed '/^ha.*day$/a \add one' test.txt
this is first line
this is second line
happy everyday
add one
end
```

本例使用正则表达式匹配行

- `^ha.*day$`表示以ha开头，以day结尾的行，则可以匹配到文件的”happy everyday”这样，所以在该行后面增加了”add one”字符串。

### i 命令

i 命令使用方法和a命令一样的，只不过是在匹配的 **行的前面** 插入字符串，所以直接将上面a命令的示例的a替换成i即可，在此就不啰嗦了。

#### mac 下的问题

mac 执行`sed -i`指令时，总是出现 `extra characters at the end of command` 错误提示。

unix与linux在执行sed指令是，是有些区别，改成如下就正确：

```
 sed -i "" "s/192.168.0.2/192.168.0.3/g" *.rptdesign
```

就是在`-i`指令后面多加一个`""`空格即可。

### c 命令

将最后一行替换成字符串”add one”，从输出可以看到效果。

```
[user@computer ~]$ sed '$c \add one' test.txt
this is first line
this is second line
this is third line
this is fourth line
this is     fifth line
happy everyday
add one
```

将第四行到最后一行的内容替换成字符串”add one”。

```
[user@computer ~]$ sed '4,$c \add one' test.txt
this is first line
this is second line
this is third line
add one
```

将以ha开头，以day结尾的行替换成”replace line”。

```
[user@computer ~]$ sed '/^ha.*day$/c \replace line' test.txt
this is first line
this is second line
replace line
end
```

### d 命令

本例删除以ha开头，以day结尾的行。

```
[user@computer ~]$ sed '/^ha.*day$/d' test.txt
this is first line
this is second line
end
```

本例删除第四行到最后一行中的内容。

```
[user@computer ~]$ sed '4,$d' test.txt
this is first line
this is second line
this is third line
```

### p 命令

在屏幕上打印第四行到最后一行的内容，p命令一般和-n选项一起使用。

```
[user@computer ~]$ sed -n '4,$p' test.txt
this is fourth line
this is fifth line
happy everyday
end
```

本例打印以ha开始，以day结尾的行。

```
[user@computer ~]$ sed -n '/^ha.*day$/p' test.txt
happy everyday
```

### s 命令

实际运用中s命令式最常使用到的。
示例：

将文件中的所有`line`替换成`text`。

- 最后的g是global的意思，也就是全局替换，如果不加g，则只会替换本行的第一个line。

```
[user@computer ~]$ sed 's/line/text/g' test.txt
this is first text
this is second text
happy everyday
end
```

替换匹配行中的某个字符串

首先匹配以ha开始，以day结尾的行，本例中匹配到的行是”happy everyday”这样，然后再将该行中的happy替换成very happy。

```
[user@computer ~]$ sed '/^ha.*day$/s/happy/very happy/g' test.txt
this is first line
this is second line
very happy everyday
end
```

引用替换

```
[user@computer ~]$ sed 's/\(.*\)line$/\1/g' test.txt
this is first
this is second
happy everyday
end
```

这个例子有点复杂，先分解一下。

首先s命令的模式是`s/old/new/g`这样的，所以本例的old部分即`\(.*\)line$`,sed命令中使用`\(\)`包裹的内容表示正则表达式的第n部分，
序号从1开始计算，本例中只有一个`\(\)`所以`\(.*\)`表示正则表达式的第一部分，
这部分匹配任意字符串，所以`\(.*\)line$`匹配的就是以line结尾的任何行。

然后将匹配到的行替换成正则表达式的第一部分（本例中相当于删除line部分），使用`\1`表示匹配到的第一部分，
同样`\2`表示第二部分，`\3`表示第三部分，可以依次这样引用。比如下面的例子：

```
[user@computer ~]$ sed 's/\(.*\)is\(.*\)line/\1\2/g' test.txt
this  first
this  second
happy everyday
end
```

正则表达式中is两边的部分可以用`\1`和`\2`表示，该例子的作用其实就是删除中间部分的is。

> 转载整理自：[sed命令详解](http://qifuguang.me/2015/09/21/sed%E5%91%BD%E4%BB%A4%E8%AF%A6%E8%A7%A3/)

