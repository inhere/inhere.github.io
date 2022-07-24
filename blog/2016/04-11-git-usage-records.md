---
title: git 使用记录
tags: [git]
date: 2016-04-11T16:51
slug: git-usage-records
authors: [inhere, network]
# gen by: kite run script/cgen.php --name git-usage-records --title "git 使用记录" --date 2016-04-11T16:51
---

`git` 使用一些记录，常用命令和一些特殊选项

<!--truncate-->

## pull和merge

提倡添加选项 `--no-ff` -- _不使用快速合并_

## 文件权限修改引起的冲突

通常是因为开发环境和运行环境是不同的系统，发布项目到线上时，很多时候需要修改文件的权限。但git把文件权限也列入了版本管理。

### 解决办法：

git中可以加入忽略文件权限的配置，具体如下：

```
$ git config core.filemode false // 仅对当前项目有效
$ git config --global core.filemode false // 将配置应用到全局
```

这样就设置了忽略文件权限。查看下配置：

```
$ git config -l

alias.co=checkout
alias.br=branch
core.filemode=false
core.repositoryformatversion=0
```


## Git打TAG

> 打TAG也就是发布版本

```
$ git tag -a v1.2 -m "version 1.4"
$ git push --tags
```

## Git打包源码

对Git管理的源码进行压缩打包，如果使用`tar xvzf xxxx.tag.gz xxxxx`的话并不是一个很好的选择，因为会将`.git/`目录下的中间文件全部压缩，如果只想要某一个版本的源码。
Git提供了`archive` 它会给打包一份纯净的代码。当然这个只适用于发部一个版本的源码，而不是备份Git管理的整套源码。

```
$ git archive xxxx
```

> xxx代表SHA-1 Hash值。

## Git只clone最新版本代码不要.git目录

```
git clone --depth=1 git://someserver/somerepo dirformynewrepo
rm -rf !$/.git
```

## 不产生 merge commit

通常 `merge/pull` 会产生一个 merge commit,让提交记录看起来不太美观，可以使用 `rebase`选项来合并commit

```
$ git pull --rebase origin master
```

## 合并时只产生合并提交

> 还有其它说法：合并时不合并历史；合并时将所有commit合为一个。

```
git pull --squash another
```

一般用于master分支，像linus的linux内核一样。
更多信息见《Git merge no history commit》《git merge –squash介绍》

## 添加空目录

```
$ find . -type d -empty -exec touch {}/.gitkeep \;
```

执行以上命令将会在空目录中添加一个`.gitkeep`文件，这样就可以保证空目录不被忽略，且不影响原代码的结构。

以上参考转自 [Git深度使用经验总结](http://blog.csdn.net/kangear/article/details/13169395)

## 输出最后一次提交的改变

这个命令，我经常使用它 来发送其他没有使用git的人来检查或者集成所修改的。它会输出最近提交的修改内容到一个zip文件中。

```
git archive -o ../updated.zip HEAD $(git diff --name-only HEAD^)
```

## 输出两个提交间的改变
类似的，如果你需要输出某两个提交间的改变时，你可以使用这个。

```
git archive -o ../latest.zip NEW_COMMIT_ID_HERE $(git diff --name-only OLD_COMMIT_ID_HERE NEW_COMMIT_ID_HERE)
```

## 克隆 指定的远程分支

如果你渴望只克隆远程仓库的一个指定分支，而不是整个仓库分支，这对你帮助很大。

```
git init
git remote add -t BRANCH_NAME_HERE -f origin REMOTE_REPO_URL_PATH_HERE
git checkout BRANCH_NAME_HERE
```

## 应用 从不相关的本地仓库来的补丁

如果你需要其它一些不相关的本地仓库作为你现在仓库的补丁，这里就是通往那里的捷径。

```
git --git-dir=PATH_TO_OTHER_REPOSITORY_HERE/.git format-patch -k -1 --stdout COMMIT_HASH_ID_HERE| git am -3 -k
```

## 检测 你的分支的改变是否为其它分支的一部分

`cherry`命令让我们检测你的分支的改变是否出现在其它一些分支中。它通过+或者-符号来显示从当前分支与所给的分支之间的改变：是否合并了(merged)。.+ 指示没有出现在所给分支中，反之，- 就表示出现在了所给的分支中了。这里就是如何去检测：

```
git cherry -v OTHER_BRANCH_NAME_HERE
# 例如: 检测master分支
git cherry -v master
```

## 开始一个无历史的新分支

有时，你需要开始一个新分支，但是又不想把很长很长的历史记录带进来，例如，你想在公众区域（开源）放置你的代码，但是又不想别人知道它的历史记录。

```
git checkout --orphan NEW_BRANCH_NAME_HERE
```

## 无切换分支的从其它分支Checkout文件

不想切换分支，但是又想从其它分支中获得你需要的文件：

```
git checkout BRANCH_NAME_HERE -- PATH_TO_FILE_IN_BRANCH_HERE
```

## 忽略已追踪文件的变动

如果您正在一个团队中工作，而且大家都在同一条branch上面工作，那么您很有可能会经常用到fetch和merge。但是有时候这样会重置您的环境配置文件，如此的话，您就得在每次merge后修改它。使用这一命令，您就能要求git忽视指定文件的变动。这样，下回你再merge的话，这个文件就不会被修改了。

```
git update-index --assume-unchanged PATH_TO_FILE_HERE
```

## 检查提交的变动是否是release的一部分

name-rev命令能告诉您一个commit相对于最近一次release的位置。使用这条命令，您就可以检查您所做出的改动是否是release的一部分了。

```
git name-rev --name-only COMMIT_HASH_HERE
```

## 使用rebase推送而非merge

如果您正在团队中工作并且整个团队都在同一条branch上面工作，那么您就得经常地进行fetch/merge或者pull。Git中，分支的合并以所提交的merge来记录，以此表明一条feature分支何时与主分支合并。但是在多团队成员共同工作于一条branch的情形中，常规的merge会导致log中出现多条消息，从而产生混淆。因此，您可以在pull的时候使用rebase，以此来减少无用的merge消息，从而保持历史记录的清晰。

```
git pull --rebase
```

您也可以将某条branch配置为总是使用rebase推送：

```
git config branch.BRANCH_NAME_HERE.rebase true
```

转自 [10 个很有用的高级 Git 命令](http://www.oschina.net/translate/10-useful-advanced-git-commands)


