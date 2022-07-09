---
title: gitw - Git 命令包装器，生成 git 变更记录日志
tags: [golang, gookit, git]
date: 2022-07-06T21:00
slug: gookit-gitw-intro
authors: inhere
---


`gitw` - Git 命令包装器，生成 git 变更记录日志，获取 repo 信息和一些 git 命令工具。

- 包装本地 `git` 命令
- 快速运行 `git` 命令
- 快速查询存储库信息
  - 获取 remote, branch 详细信息
- 通过 `git log` 快速生成版本变更日志
  - 允许自定义生成配置
  - 允许自定义生成过滤、样式等
  - 可以直接在 GitHub Actions 中使用

<!--truncate-->

> Github https://github.com/gookit/gitw

## 生成变更日志

可以通过 `gitw/chlog` 包快速生成变更日志。


### 安装

```shell
go install github.com/gookit/gitw/cmd/chlog@latest
```

### 使用

**生成变更日志:**:

```shell
chlog prev last
chlog last head
chlog -c .github/changelog.yml last head
```

**Outputs**:

![chlog-demo](https://raw.githubusercontent.com/gookit/gitw/main/_examples/images/chlog-demo.png)


## 仓库信息

可以通过 gitw 在本地快速获取 git 存储库信息。

```go
repo := gitw.NewRepo("/path/to/my-repo")
```

### Branch 信息

```go
brInfo := repo.CurBranchInfo()

dump.Println(brInfo)
```

**Output**:

![one-remote-info](https://raw.githubusercontent.com/gookit/gitw/main/_examples/images/one-branch-info.png)

## 更多

更多使用说明请看README和godoc

> Github https://github.com/gookit/gitw