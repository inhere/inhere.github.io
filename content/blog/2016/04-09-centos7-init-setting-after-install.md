---
title: 安装centos 7 后的一些设置记录
taxonomies:
  tags: [linux,centos]
date: 2016-04-09T16:51:34
slug: centos7-init-setting-after-install
#authors: inhere
# gen by: kite run script/cgen.php --name centos7-init-setting-after-install --title "安装centos 7 后的一些设置记录" --date 2016-04-09T16:51
---

安装centos 7 后的一些常用设置记录

<!-- more -->

###  添加用户到 sudoers

刚安装系统后 使用 `sudo [command] ...` 会报错误信息  `该用户不存在群组sudoers中`

```
$ su  // 切换到 root
$ vim /etc/sudoers
```

找到 ` root  ALL=(ALL)   ALL`, 后面换行并将当前用户添加进去

```
root  ALL=(ALL)   ALL
 xxx   ALL=(ALL)   ALL
```

保存并退出

### 无法使用中文输入

实际上 安装的系统已经有拼音输入法了，请看 http://blog.csdn.net/alex_my/article/details/38223449

### windows,linux 双系统

最好是先安装了windows后再安装linux系统

- 挂载 ntfs 分区
请看 [安装双系统后，centos 7 如何挂载 windows 分区](http://yzone.net/blog/31)

- 恢复windows的引导项
打开终端, 执行下面的命令就会自动查找硬盘上已有的系统，并添加相应的引导

```
$ sudo update-grub // ubuntu 一类可用
$ sudo grub2-mkconfig -o /boot/grub2/grub.cfg // centos 一类可用
```

- 删除linux系统
windows上下在一个分区助手之类的工具，恢复系统硬盘的`mbr`, 在格式化 linux所在分区即可

### 添加 阿里云的epel源

1.备份(如有配置其他epel源)

```
mv /etc/yum.repos.d/epel.repo /etc/yum.repos.d/epel.repo.backup
mv /etc/yum.repos.d/epel-testing.repo /etc/yum.repos.d/epel-testing.repo.backup
```

2.下载新repo 到`/etc/yum.repos.d/`

```
// epel(RHEL 7)
$ sudo wget -O /etc/yum.repos.d/epel.repo http://mirrors.aliyun.com/repo/epel-7.repo
$ sudo yum update // update
```

### 修改home下的中文目录为英文目录

打开终端，在终端下输入命令：

```
$ export LANG=en_US
$ xdg-user-dirs-gtk-update
```

这个时候会弹出一个配置界面，提示是否将中文目录切换为英文目录。选中不再提示，确定。系统会删除没有内容的中文目录，而有内容的目录会保持。
并创建8个相应的英文目录如下：“Desktop”、“Download”、“Templates”、“Public”、“Documents”、“Music”、“Pictures”、“Videos”。
此时，您在“位置”里看到的常用中文目录已经变成英文目录。只需要将原中文目录的内容拷贝到相应英文目录，并删除中文目录即可。
接下来再执行

```
$ export LANG=zh_CN.UTF-8
```

以显示中文。

## 一些常用工具

### tmux
安装 tmux  `sudo yum install tmux`

### git
仓库中的git版本有些老了，推荐手动安装最新版的
下载依赖包

```
$ sudo yum install zlib-devel perl-ExtUtils-MakeMaker openssl-devel libcurl-devel expat-devel asciidoc xmlto
```

源码下载地址 `https://github.com/git/git/releases`

```
$ wget -c https://github.com/git/git/archive/v2.8.1.tar.gz
$ cd git-2.8.1/
$ make prefix=/usr/local all doc  // all 对所有用户可用，doc 是生成文档
$ make prefix=/usr/local/git install
```

加入环境变量`vim  ~/.bashrc`

```
export PATH=/usr/local/git/bin:$PATH
```


### zsh 和 oh-my-zsh

查看已有的shell `cat /etc/shells `
若没有，先安装 zsh

```
$ sudo yum install zsh
$ chsh -s /bin/zsh
```

> 若用chsh命令修改无效，则进入`/etc/passwd`中修改当前用户的shell环境。

安装oh-my-zsh -- [oh-my-zsh 主页](https://github.com/robbyrussell/oh-my-zsh)

```
sh -c "$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"
```

### rar 压缩文件支持

在liunx下原本是不支持rar文件的，需要安装liunx下的winrar版本，操作如下

> 下载页面 http://www.rarsoft.com/download.htm

```
$ wget -O ~/Downloads/rarlinux-x64-5.3.tar.gz http://www.rarsoft.com/rar/rarlinux-x64-5.3.0.tar.gz
$ cd ~/Downloads/
$ tar -zxvf rarlinux-x64-5.3.tar.gz
$ cd rar
$ sudo make
[sudo] password for inhere:
mkdir -p /usr/local/bin
mkdir -p /usr/local/lib
cp rar unrar /usr/local/bin
cp rarfiles.lst /etc
cp default.sfx /usr/local/lib
```

两个常用命令：

```
rar x yhcsh.rar //解压 yhcsh.rar 到当前目录
rar yhcsh.rar ./yhcsh/  //将 yhcsh 目录打包为 yhcsh.rar
```


