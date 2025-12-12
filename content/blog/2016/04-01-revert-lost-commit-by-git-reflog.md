---
title: git 找回丢失 commit
taxonomies:
  tags: [git,git-log,git-reflog]
date: 2016-04-01T12:30:34
slug: revert-lost-commit-by-git-reflog
#authors: inhere
# gen by: kite run script/cgen.php --name revert-lost-commit-by-git-reflog --title "git 找回丢失 commit" --date 2016-04-01T12:30
---

在使用git的过程中，常有失误的时候，有时把需要的东西给删了或者使用rebase覆盖掉了一些有用的代码。

不过没有关系，git给了我们一层安全网，让们能有机会把失去的东西给找回来。

<!-- more -->

## 查找丢失的记录
假设你不小心提交了些你不想要的东西，不得不做一次强制重置来恢复到之前的状态。
然后，你意识到在这一过程中你丢失了其它一些信息并且想要把它们找回来，或者至少瞅一眼。这正是`git reflog`可以做到的。

一个简单的`git log`命令可以为你展示最后一次commit，以及它的父亲，还有它父亲的父亲等等。而`git reflog`则列出了head曾经指向过的一系列commit。

> 要明白它们(丢失的记录)只存在于你本机中,而不是你的版本仓库的一部分，也不包含在push和merge操作中。

- 如果我运行`git log`命令，我可以看到一些commit，它们都是我仓库的一部分：

```
$ git log -4
commit 6b8df20b71fcd1622109c2319c13df3120cd3716
Author: xyz <xyz@compay.com>
Date:   Wed Mar 30 17:41:42 2016 +0800

    update

commit bcb250dcda7ec609dda522d0bff38161a57e20d0
Author: xyz <xyz@compay.com>
Date:   Wed Mar 30 15:51:00 2016 +0800

    update

commit 93d354756f8941201d0c53c7947766f6bd5955bf
Author: xyz <xyz@compay.com>
Date:   Wed Mar 30 13:38:07 2016 +0800

    update Model.php,rename BaseController to Controller

commit 185bcfce1a9c3fb4164f675318d5ad0086ea39d1
Author: xyz <xyz@compay.com>
Date:   Wed Mar 30 11:35:39 2016 +0800

    database operate update

```

- `git reflog`命令则展示了一次`9d7aabc HEAD@{1}: commit: update`，它是一个丢失掉的提交记录：

```
$ git reflog -4
6b8df20 HEAD@{0}: commit (amend): update
9d7aabc HEAD@{1}: commit: update
bcb250d HEAD@{2}: commit: update
93d3547 HEAD@{3}: commit (amend): update Model.php,rename BaseController to Controller

```

使用`git log 9d7aabc -p` 或者 `git show 9d7aabc`查看丢失了那些改动

## 如何恢复呢

- 使用rebase，用命令`git rebase`来进行恢复：`$ git rebase 9d7aabc`
- 使用merge，用合并命令`git merge`来进行恢复：`$ git merge 9d7aabc`


> 另外有一篇博文使用 `git fsck --lost-found` [如何找回git 中丢失的提交(commit) ](http://liuhui998.com/2010/10/22/recover_lost_commits_with_git/)

