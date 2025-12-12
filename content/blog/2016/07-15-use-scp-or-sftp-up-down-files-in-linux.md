---
title: linux 终端下上传下载命令 sftp,scp
taxonomies:
  tags: [linux,macos,sftp,scp]
date: 2016-07-15T17:40:34
slug: use-scp-or-sftp-up-down-files-in-linux
# authors: inhere
# gen by: kite run script/cgen.php --name use-scp-or-sftp-up-down-files-in-linux -c script/conf.ini
---

在linux或者mac 终端下上传下载命令 sftp,scp 的简单使用介绍

<!-- more -->

## scp

帮助命令： `man scp`

scp功能：
下载远程文件或者目录到本地,
如果想上传或者想下载目录，最好的办法是采用tar压缩一下，是最明智的选择.

### 从远程主机下载东西到本地

- 拷贝文件命令
```
scp user@host:/path/file /localpath  # 即 scp 用户名@IP:/文件路径  /本地文件路径
```

- 如果拷目录
```
scp -r user@host:/dirpath /localpath  # 即 scp -r 用户名@IP:/目录路径  /本地文件路径
```

- 一些参数
```
-P 设置连接端口
-v 和大多数 linux 命令中的 -v 意思一样 , 用来显示进度 . 可以用来查看连接 , 认证 , 或是配置错误 .
-C 使能压缩选项 .
-4 强行使用 IPV4 地址 .
-6 强行使用 IPV6 地址 .
```

### 上传文件或目录到远程主机

- 上传文件 到 远程主机
```
scp localfile user@host:/dirpath  # 即 scp 文件路径  远程主机用户名@ip:/存放文件的路径
```

- 上传目录 到 远程主机
```
scp -r localdir user@host:/dirpath # 即 scp -r  本地目录路径   远程主机用户名@ip:/存放文件路径
```


-----------------------------------------------------------------------

## sftp

sftp是一个交互式文件传输程式。它类似于 ftp, 但它进行加密传输，比FTP有更高的安全性。
下边就简单介绍一下如何远程连接主机，进行文件的上传和下载，以及一些相关操作。

举例，如远程主机的 IP 是 `202.206.64.33`或者是域名`www.teste.com` 户名是  `user` ,在命令行模下:

```
sftp user@202.206.64.33
# 或者
sftp user@www.test.com
# 回车提示输入密码。进入提示符
sftp>
sftp> help  获得帮助
```

如果登陆远程机器不是为了上传下载文件，而是要修改远程主机上的某些文件。可以
`ssh  user@202.206.64.33` （其实sftp就是ssh 的一个程式。）

在sftp中get表示下载即得到,put表示上传即放置

```bash
sftp> get 远程主机下文件的路径   将文件保存到本地电脑的路径
sftp> put 本地文件的路径 将文件版保存到远程主机的路径
# 将从远程主机的  /var/www/fuyatao/目录下将 index.php 下载到本地  /home/fuyatao/目录下。
sftp> get /var/www/fuyatao/index.php  /home/fuyatao/
# 把本地 /home/fuyatao/downloads/目录下的 linuxgl.pdf文件上传至远程主机/var/www/fuyatao/ 目录下
sftp> put /home/fuyatao/downloads/Linuxgl.pdf /var/www/fuyatao/
```

你如果不知道远程主机的目录是什么样，
`pwd`命令可以帮您查询远程主机的当前路径。查询本机当前工作目录 `lpwd`.
改变路径可以用cd ，改变本机路径可以用 lcd;
`ls rm rmdir mkdir `这些命令都可以使用。同理调用本机都是加 l , 即 `lls lrm`.

> 要离开sftp，用exit 或quit、 bye 均可。详细情况可以查阅 man  sftp.

--------------------------------------------------------------
> 记住：
在用sftp和ftp的时候，所有文件和目录都要手动输入，tab补全键在这两个命令中没有作用。录入的时候细心！

> form [blog.163.com](http://blog.163.com/chunoo@126/blog/static/814473532010676351769/)

