---
title: Shell脚本使用
tags: [shell,script]
date: 2016-09-24T11:28
slug: shell-script-learn-usage
authors: [inhere,network]
# gen by: kite run script/cgen.php --name shell-script-learn-usage -c script/conf.ini
---

Shell脚本的一些使用记录

<!--truncate-->

## echo显示带颜色

echo显示带颜色，需要使用参数-e
格式如下:

```bash
echo -e "\033[字背景颜色;文字颜色m字符串\033[0m"
```

例如: 

```bash
echo -e "\033[41;37m TonyZhang \033[0m"
```

其中41的位置代表底色, 37的位置是代表字的颜色
 
注：
 
1. 字背景颜色和文字颜色之间是英文的 `;`
2. 文字颜色后面有个m
3. 字符串前后可以没有空格，如果有的话，输出也是同样有空格

下面看几个例子：

```

echo -e "\033[30m 黑色字 \033[0m"
echo -e "\033[31m 红色字 \033[0m"
echo -e "\033[32m 绿色字 \033[0m"
echo -e "\033[33m 黄色字 \033[0m"
echo -e "\033[34m 蓝色字 \033[0m"
echo -e "\033[35m 紫色字 \033[0m"
echo -e "\033[36m 天蓝字 \033[0m"
echo -e "\033[37m 白色字 \033[0m"
 
echo -e "\033[40;37m 黑底白字 \033[0m"
echo -e "\033[41;37m 红底白字 \033[0m"
echo -e "\033[42;37m 绿底白字 \033[0m"
echo -e "\033[43;37m 黄底白字 \033[0m"
echo -e "\033[44;37m 蓝底白字 \033[0m"
echo -e "\033[45;37m 紫底白字 \033[0m"
echo -e "\033[46;37m 天蓝底白字 \033[0m"
echo -e "\033[47;30m 白底黑字 \033[0m"
```

控制选项说明 ：

```
\33[0m 关闭所有属性 
\33[1m 设置高亮度 
\33[4m 下划线 
\33[5m 闪烁 
\33[7m 反显 
\33[8m 消隐 
\33[30m -- \33[37m 设置前景色 
\33[40m -- \33[47m 设置背景色 
\33[nA 光标上移n行 
\33[nB 光标下移n行 
\33[nC 光标右移n行 
\33[nD 光标左移n行 
\33[y;xH设置光标位置 
\33[2J 清屏 
\33[K 清除从光标到行尾的内容 
\33[s 保存光标位置 
\33[u 恢复光标位置 
\33[?25l 隐藏光标 
\33[?25h 显示光标 
```

> 转自：[onlyzq 的BLOG - blog.51cto.com](http://onlyzq.blog.51cto.com/1228/546459)

## Shell脚本调试方法

Shell提供了一些用于调试脚本的选项：

- `-n`，读一遍脚本中的命令但不执行，用于检查脚本中的语法错误。
- `-v`，一边执行脚本，一边将执行过的脚本命令打印到标准错误输出。
- `-x`，提供跟踪执行信息，将执行的每一条命令和结果依次打印出来。

```shell
sh  -n function.sh
sh  -v function.sh
sh  -x function.sh
```

