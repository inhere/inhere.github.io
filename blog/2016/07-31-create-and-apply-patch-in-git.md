---
title: git创建和使用补丁patch
tags: [git,tools]
date: 2016-07-31T15:03
slug: create-and-apply-patch-in-git
authors: inhere
# gen by: kite run script/cgen.php --name create-and-apply-patch-in-git -c script/conf.ini
---

在git中创建和使用补丁patch记录

<!--truncate-->


git打patch方法

## git format-patch  （推荐）

适用于git的patch，包含diff信息，包含提交人，提交时间等
如果`git format-patch` 生成的补丁不能打到当前分支，`git am`会给出提示，并协助你完成打补丁工作

### 对比分支生成patch

例：从master checkout 一个新分支修改然后与master对比生成patch。

```
$ git format-patch -M master //-M选项表示这个patch要和那个分支比对
$ git am 001-xxx.patch（不必重新commit）
```

### 将commit打包成patch

```sh
# 修改代码
$ vi drivers/bluetooth/btusb.c
# 把代码添加到git管理仓库
$ git add .
# 提交修改
$ git commit -m "some message"
# 查看日志,获取到hash
$ git log 
# 生成patch
$ git format-patch -s 1bbe3c8c19
```

或者也可以

```sh
$ git format-patch HEAD^ # 最近的1次commit的patch
$ git format-patch HEAD^^ # 最近的2次commit的patch
$ git format-patch HEAD^^^ # 最近的3次commit的patch
$ git format-patch HEAD^^^^ # 最近的4次commit的patch
```

### 测试,应用patch

```
# 检查patch文件
$ git apply --stat xxx.patch

#查看是否能应用成功
$ git apply --check xxx.patch

# 应用patch
$ git am -s < xxx.patch
```

## git diff 

生成标准的patch，只包含diff信息
> `git diff` 生成的Patch兼容性强，可以用`git apply --check` 查看补丁是否能够干净顺利地应用到当前分支中。

例：从master checkout一个新分支修改然后与master对比生成patch。 

```
$ git diff master > patch
$ git apply xxx.patch（需要重新commit）
``` 

