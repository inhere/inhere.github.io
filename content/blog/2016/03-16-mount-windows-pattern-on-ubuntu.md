---
title: Ubuntu 下挂载以及卸载Windows分区
taxonomies:
  tags: [linux,ubuntu,windows]
date: 2016-03-16T13:00:34
slug: mount-windows-pattern-on-ubuntu
authors: [inhere,network]
# gen by: kite run script/cgen.php --name mount-windows-pattern-on-ubuntu --date 2016-03-16T13:00
---

如何在Linux(Ubuntu) 下挂载以及卸载Windows分区, 自动挂载

<!-- more -->
## 1. 手工挂载

1) 首先你得知道Linux下对硬盘分区的称呼。

```
sudo fdisk -l

Disk /dev/sda: 160.0 GB, 160041885696 bytes
255 heads, 63 sectors/track, 19457 cylinders
Units = cylinders of 16065 * 512 = 8225280 bytes
Disk identifier: 0xf0b1ebb0

   Device Boot      Start         End      Blocks   Id  System
/dev/sda1   *           1        2612    20980858+   7  HPFS/NTFS
/dev/sda2            2613       19457   135307462+   f  W95 Ext'd (LBA)
/dev/sda5            2613        6529    31463271    7  HPFS/NTFS
/dev/sda6           11753       19457    61890381    7  HPFS/NTFS
/dev/sda7            6530        6778     2000061   82  Linux swap / Solaris
/dev/sda8            6779       11752    39953623+  83  Linux
```

> 其中是/dev/sda1 和 /dev/sda2主分区，其余的是逻辑分区。/dev/sda1 是Windows 下的c盘，`/dev/sda5` 是Windows 下的D盘，`/dev/sda6` 是Windows 下的F盘，（我的E盘是光驱）。

2) 确定你所用的Linux系统的locale（这个locale包括了系统使用的语言和字符的编码等信息）。中文 Linux 常用的locale是zh_CN.gb2312，zh_CN.gbk，zh_CN.gb18030 和 zh_CN.UTF-8 。

在默认安装中，Debian Linux和Mandriva Linux的locale是zh_CN.gb2312,而Ubuntu Linux和Fedora Linux的locale是zh_CN.UTF-8 。最好不要随便更改locale，否则会出现很多乱码的情形。要查看系统的locale，可以在终端下输入下面的命令查看：

`echo $LANG`

3) 你得知道你的windows分区的格式，这个在windows的分区的属性中可以看到，一般是fat32和ntfs格式的。

假设你的locale是zh_CN.UTF-8，要挂载一个/dev/sda1的fat32格式的windows分区到/mnt/C目录（若这个目录不存在手工新建一个sudo mkdir /mnt/C），可以在终端下输入以下命令(在Ubuntu里还需要在这行命令前加上sudo)：

```bash
mount -t vfat /dev/sda1 /mnt/C -o iocharset=utf8
```

如果你的locale不是zh_CN.UTF-8，把上面命令的utf8改为gb2312；如果这个windows分区是ntfs格式的，将上面命令的vfat改为ntfs。

这样挂载的ntfs格式的分区，只有root能读取，如果需要让普通用户也能读取，需要再加上umask=022选项，如下：

```bash
mount -t ntfs /dev/sda1 /mnt/C -o iocharset=utf8,umask=022
```

类似地，如果要让挂载的分区允许所有用户读取和修改，可以将上面的`umask=022`，改为`umask=0`就可以了。

4) 卸载分区就简单多了：

```bash
umount /dev/sda1
```

有时候卸载分区时提示分区繁忙（device is busy），可以先用下面的命令看看哪个进程在使用此分区：

```bash
fuser -cu /dev/sda1
```

假如屏幕的输出为

```bash
/dev/sda1: 8463m(cck)
```

则可以用此命令看这个进程对应的程序名字：

```bash
ps 8463
```

然后可以用此命令结束此进程：

```bash
kill -9 8463
```

这样就可以正常卸载分区了。


## 2. 自动挂载

要让Linux系统启动时自动挂载windows分区，可以把上述的命令写入 `/etc/fstab` 文件中，下面是一个例子：

```
# <file system> <mount point>   <type>  <options>       <dump>  <pass>
proc            /proc           proc    defaults        0       0
# / was on /dev/sda8 during installation
UUID=c75b08d0-5763-4754-a269-09e759b746da /               ext4    errors=remount-ro 0       1
# swap was on /dev/sda7 during installation
UUID=86cd7015-66f4-4e91-bf36-f109818f8da4 none            swap    sw              0       0

/dev/sda1 /mnt/C ntfs utf8,umask=022 0 0
/dev/sda5 /mnt/D ntfs utf8,umask=022 0 0
/dev/sda6 /mnt/F ntfs utf8,umask=022 0 0
```

From: [Ubuntu 下挂载Windows分区](http://blog.csdn.net/heyutao007/article/details/5447324)

