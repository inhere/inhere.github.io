---
title: 在Windows下使用多个版本的PHP记录
tags: [windows,php,scoop]
date: 2023-10-16T15:12
slug: use-multi-version-php-on-windows
authors: inhere
---

在Windows下使用多个版本的PHP如何配置记录，我会同时使用 PHP7 和 PHP8版本在 Windows 下。

<!--truncate-->

## 安装PHP

通过 Windows 包管理工具 scoop 可以很方便的安装 PHP, git, go 等开发工具。

```bash
# 安装PHP 7.4 版本
scoop install php-nts@7.4

# 安装最新版本的 PHP 8.x
scoop install php-nts
```

scoop 安装的工具都在 `USER_HOME/scoop/apps/` 下，安装后 scoop 设置在环境变量下的PHP版本是最后安装 PHP8.

```bash
$ php -v
PHP 8.2.11 (cli) (built: Sep 26 2023 15:25:14) (NTS Visual C++ 2019 x64)
Copyright (c) The PHP Group
Zend Engine v4.2.11, Copyright (c) Zend Technologies
```

### 安装xdebug扩展

```bash
# for php7.4
$ scoop install php7.4-xdebug
# for php8
$ scoop install php-xdebug
```

## 配置PHP

到PHP安装目录下，拷贝 `php.ini-ENV` 为 php.ini 文件。然后可以编辑它，打开一些常用扩展。

查看加载的配置文件：

```bash
$ php --ini
Configuration File (php.ini) Path:
Loaded Configuration File:         C:\Users\inhere\scoop\apps\php-nts\current\php.ini
Scan for additional .ini files in: (none)
Additional .ini files parsed:      (none)
```

### 扩展配置目录

可以注意到 `Scan for additional .ini files` 是空的，则是默认没有设置扩展配置文件扫描目录。可以通过环境变量 `PHP_INI_SCAN_DIR=path/to/conf.d` 设置附加配置扫描目录

通过 `系统>高级系统设置` 新增环境变量 `PHP_INI_SCAN_DIR` 值为 `%USERPROFILE%/scoop/apps/php-nts/current/conf.d`

> 参考文档 https://www.php.net/manual/zh/configuration.file.php

## 快速使用PHP7

因为有多个版本的PHP，PHP7的扩展和其他配置文件与PHP8的不能共用 `PHP_INI_SCAN_DIR` 设置，会有版本冲突。

### 方法一

使用 `scoop shim` 创建一个新的bin名称 `php7` 指向安装的php7的真实路径。

```bat
$ scoop shim add php7 "C:\Users\inhere\scoop\apps\php7.4-nts\current\php.exe"
# 现在可以直接使用php7了
$ php7 --ini
Configuration File (php.ini) Path:
Loaded Configuration File:         C:\Users\inhere\scoop\apps\php7.4-nts\current\php.ini
Scan for additional .ini files in: C:\Users\inhere/scoop/apps/php-nts/current/conf.d
Additional .ini files parsed:      (none)
```

这样在 `cmd, git-bash, pwsh` 终端环境下 `php7` 命令都是可以用的。
不过，有一个 **问题是** `Scan for additional .ini files` 使用的全局的PHP `PHP_INI_SCAN_DIR` 设置，可能会导致冲突。

删除 shim 设置： `scoop shim rm php7`

### 方法二

我主要使用的 `git-bash` 作为命令行环境，向下面这样指定 `php7` 路径调用也是可以的。而且自定义了附加配置扫苗路径，不会与PHP8冲突。

```bash
$ PHP_INI_SCAN_DIR=$HOME/scoop/apps/php7.4-nts/current/conf.d $HOME/scoop/apps/php7.4-nts/currentphp.exe --ini
Configuration File (php.ini) Path:
Loaded Configuration File:         C:\Users\inhere\scoop\apps\php7.4-nts\current\php.ini
Scan for additional .ini files in: C:/Users/inhere/scoop/apps/php7.4-nts/current/conf.d
Additional .ini files parsed:      C:/Users/inhere/scoop/apps/php7.4-nts/current/conf.d\extensions.ini,
C:/Users/inhere/scoop/apps/php7.4-nts/current/conf.d\xdebug.ini

```

配置一个 `php7` 别名(写入 `~/.bashrc`)，方便命令行使用：

```bash
alias php7='PHP_INI_SCAN_DIR=$HOME/scoop/apps/php7.4-nts/current/conf.d $HOME/scoop/apps/php7.4-nts/current/php'
```

快速使用:

```bash
$ php7 -v
PHP 7.4.33 (cli) (built: Nov  2 2022 15:06:48) ( NTS Visual C++ 2017 x64 )
Copyright (c) The PHP Group
Zend Engine v3.4.0, Copyright (c) Zend Technologies
    with Xdebug v3.1.6, Copyright (c) 2002-2022, by Derick Rethans
```

> 问题：这样配置的别名，仅在 `git-bash` 环境下有效。cmd、pwsh 终端环境下不可用。

### 方法三

编写一个 `php7.cmd` 放在环境PATH的目录下，可以直接访问到。

```bat
@echo off
rem alias command for php7.ext

rem override set ENV var PHP_INI_SCAN_DIR
set PHP_INI_SCAN_DIR=C:\Users\inhere\scoop\apps\php7.4-nts\current\conf.d

"C:\Users\inhere\scoop\apps\php7.4-nts\current\php.exe" %*
```

> **TIPs**: 通过脚本里的 `set` 命令指定了运行PHP7时的附加配置扫苗目录，保证运行时不会加载错乱。

查看效果：

```bat
$ php7.cmd --ini
Configuration File (php.ini) Path:
Loaded Configuration File:         C:\Users\inhere\scoop\apps\php7.4-nts\current\php.ini
Scan for additional .ini files in: C:\Users\inhere\scoop\apps\php7.4-nts\current\conf.d
Additional .ini files parsed:      C:\Users\inhere\scoop\apps\php7.4-nts\current\conf.d\extensions.ini,
C:\Users\inhere\scoop\apps\php7.4-nts\current\conf.d\xdebug.ini
```

> 小问题：在 cmd,pwsh 可以省略 `.cmd` 运行 php7，但是在 `git-bash` 下不行，因此还是配置一个 `bash alias` 比较方便。
