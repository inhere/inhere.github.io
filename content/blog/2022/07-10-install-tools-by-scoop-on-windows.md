---
title: 通过 scoop 在Windows 下安装工具
taxonomies:
  tags: [tool,windows,scoop]
date: 2022-07-10T14:38:00
slug: install-tools-by-scoop-on-windows
# authors: inhere
# gen by: kite run script/cgen.php --name "install tools by scoop on windows" --tags tool,windows,scoop
---

`scoop` 是一个Windows 下的应用包安装管理工具，类似于 Linux 下的 `yum,apt` 和MacOs 下的 `brew`。

通过使用 scoop 可以方便快速的安装常用的开发工具，会自动设置环境变量，例如 php, go, rust 等。

<!-- more -->

> Scoop github: https://github.com/ScoopInstaller/Scoop

## 安装Scoop

```powershell
iwr -useb get.scoop.sh | iex
```

添加bucket 支持更多工具:

```bash
scoop bucket add extras
```

## 基本使用

查看可用命令：

```bash
scoop
```

### 搜索工具

```bash
scoop search git
scoop search php
scoop search go
```

输出类似：

```txt
inhere@Inhere-win10 MINGW64 /f/work
$ scoop search php
Results from local buckets...

Name           Version              Source Binaries
----           -------              ------ --------
appengine-go   1.9.70               extras php_cli.ps1
eclipse-php    2022-06              extras
php-nts-xdebug 3.1.5-8.1            extras
php-xdebug     3.1.5-8.1            extras
phpstorm       2022.1.3-221.5921.28 extras
xampp          8.1.6-0              extras php.exe
php-nts        8.1.8                main
php            8.1.8                main
```

### 安装工具

```bash
scoop install git
```

### 卸载软件

```bash
scoop uninstall git
```

### 更新scoop及软件

```bash
scoop update #更新 scoop 自己
scoop update git #更新 git
```

### 安装aria2加速下载

scoop安装aria2后，scoop会自动调用aria2进行多线程下载以加速下载：

```bash
scoop install aria2
# 关闭每次运行时的告警提示
scoop config aria2-warning-enabled false
```

## 安装常用工具

### 基础工具

```bash
scoop search git
```

### 语言环境

```bash
scoop search php
scoop search go
scoop search nodejs
```

### 其他工具

```bash
scoop install composer
scoop install yarn
```

