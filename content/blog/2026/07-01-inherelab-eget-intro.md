---
title: eget：不用等中央仓库，直接安装 GitHub 和任意下载站的工具
date: 2026-07-01T21:18:00
taxonomies:
  tags: [eget, cli, download, github, tools, sdk]
slug: eget-intro
---

AI 之后，命令行工具的发布节奏明显变快了。GitHub 上每天都有新工具冒出来，一个活跃项目一天发几个版本也不奇怪。

问题是：中央仓库经常慢半拍。想试一个刚修好的 bug，或者跟进刚发的新功能，可能要等包维护者更新 formula、bucket、manifest。`eget` 解决的是这段空窗期：直接从 release、下载站或内部规则里拿到二进制。

![eget 工具下载器海报](/img/blog/eget-poster.png)

<!-- more -->

- 项目主页：[https://github.com/inherelab/eget](https://github.com/inherelab/eget)
- 最新版本：[v1.8.2](https://github.com/inherelab/eget/releases/tag/v1.8.2)
- 中文文档：[README.zh-CN.md](https://github.com/inherelab/eget/blob/main/README.zh-CN.md)

## 先不写配置，直接装

`eget` 最短的用法就是给它一个 GitHub 仓库名：

```bash
eget i openai/codex
eget install junegunn/fzf
eget install --name rg BurntSushi/ripgrep
```

它会读取 release assets，按当前系统和架构挑一个合适的文件，下载、解压，然后把可执行文件放到目标目录。

遇到 nightly、beta 或者项目自己的 tag 规则，可以直接指定：

```bash
eget install --tag nightly inhere/markview
eget install --tag v0.28.0 openai/codex
```

这类场景不需要等谁把版本同步到中心仓库。release 页面已经有资产，`eget` 就能从那里开始工作。

## 没有中心 index，仓库名就是入口

很多包管理器都要维护一份中心配置。好处是体验统一，坏处是会滞后。项目发布了新版本，不代表中心仓库马上有对应条目。

`eget` 的默认路径更短：

```text
owner/repo -> releases -> assets -> install
```

如果自动匹配不够准，可以自己筛 asset：

```bash
eget query --action assets openai/codex

eget install --asset "PRE:codex,SUF:.zip" openai/codex
eget install --asset "REG:\\.deb$" owner/repo
eget install --asset "windows,amd64,zip" owner/repo
```

有些 release 包里目录层级比较深，或者文件名不是最终想要的名字，也可以在安装时处理：

```bash
eget install --extract-all \
  --rename "codex-x86_64-pc-windows-msvc.exe=codex.exe" \
  openai/codex

eget download --extract-all --strip-components 1 \
  --asset "windows,zip" ventoy/Ventoy
```

这里的重点不是“配置更多”，而是把 release 资产里真实存在的文件拿出来。项目怎么命名，命令就按实际情况补一两个规则。

## GitHub 之外也能下

GitHub 是常见来源，但不是唯一来源。`eget install` 和 `eget download` 支持 GitLab、Gitea/Forgejo、SourceForge、直接 URL 和本地文件。

```bash
eget install gitlab:fdroid/fdroidserver
eget install gitlab:gitlab.gnome.org/GNOME/gtk
eget install --asset linux,amd64 gitea:codeberg.org/forgejo/forgejo
eget install --asset x64,PerUser,setup sourceforge:winmerge
```

普通下载链接也可以直接用：

```bash
eget download --file go --to ~/go1.17.5 \
  https://go.dev/dl/go1.17.5.linux-amd64.tar.gz
```

这对一些不发 GitHub release 的工具很实用。只要有稳定 URL，或者能从一个页面、JSON、YAML 里拿到最新版本，就不必先把它包装进某个中心索引。

## 内部工具用一条规则带一批包

内部工具最麻烦的地方通常不是下载本身，而是每个团队都有自己的发布目录：

```text
http://mydev.lan/tools/markview/latest.yaml
http://mydev.lan/tools/markview/markview-linux-amd64
http://mydev.lan/tools/chlog/latest.yaml
http://mydev.lan/tools/chlog/chlog-linux-amd64
```

这种命名一旦固定，就没必要给每个工具写一份完整配置。`pkg_templates` 可以把规则抽出来：

```toml
[pkg_templates.mydev]
latest_url = "http://mydev.lan/tools/{name}/latest.yaml"
latest_format = "yaml"
url_template = "http://mydev.lan/tools/{name}/{name}-{os}-{arch}{ext}"
ext_map = { windows = ".exe", linux = "", darwin = "" }

[packages.markview]
repo = "pkg-template:mydev:markview"
```

使用时可以写短别名：

```bash
eget add mydev:markview
eget install mydev:markview
eget install --add mydev:chlog
```

这不是一个内部应用市场，也不需要维护中心服务。它只是把“这个内网站点怎么拼下载 URL”变成一条本地规则。

## 常用工具可以记录下来

临时试工具时，直接 `install owner/repo` 就够了。常用工具可以加到本机配置里：

```bash
eget install --add junegunn/fzf
eget install --add --name rg BurntSushi/ripgrep
eget add --name winmerge --system windows/amd64 \
  --asset x64,PerUser,setup sourceforge:winmerge

# 用于从已有配置文件恢复安装所有工具
eget install --all
```

查看安装：

```bash
# 默认显示已安装的包列表， --all 列出所有
eget list
eget ls --all
# 列出已经配置但是还未安装的包
eget ls --ni
```

> 安装记录默认放在 `~/.config/eget/installed.toml`；配置也在同一套目录下，你也可以直接修改配置文件新增包。

### 更新工具版本

```bash
eget update --all # 检查更新，然后更新所有可更新包
# 也可以先检查，再更新需要的
eget up --check
eget up fzf markview codex
```

eget 自更新：

```bash
eget up --self
```

## SDK 下载也放进来了

SDK 的痛点和 CLI 工具有点像：Go、Node、JDK 都有多版本、多平台、镜像源、归档解压和本地记录的问题。

`eget sdk` 管这几件事：

```bash
eget sdk config add --all
eget sdk config add --all --mirror mirror
eget sdk config add jdk --mirror zulu

eget sdk index refresh go
eget sdk index show go

eget sdk install go@1.22.0
eget sdk install go:1.22 node:20.11.1
eget sdk dl --os linux --arch arm64 -o ./downloads go:1.22
```

内置模板覆盖 Go、Node、JDK，源可以走 official，也可以写入常见 mirror。index cache、归档下载缓存和安装记录是分开的，适合多版本并存。

> 边界也很明确：`eget sdk` 只下载、解压、记录 SDK。它不会改 `PATH`，不会写 shell hook，也不会替你切换当前版本。需要项目级版本切换时，再交给 [xenv](https://github.com/inhere/xenv) 这类环境管理工具。

## 缓存和镜像适合团队机器

重复装工具时，下载缓存会省很多时间。团队内网里还可以把一台机器已有的缓存暴露出来：

```bash
eget cache serve --host 0.0.0.0 --port 8686 --token "$EGET_CACHE_TOKEN" --json-log
```

其他机器配置 mirror：

```toml
[cache_mirror]
enable = true
url = "http://192.168.1.10:8686"
timeout = 5
fallback = true
```

启用后，`install`、`download` 和 `sdk install` 会先尝试局域网缓存，miss 了再回源。mirror 只是下载优化，不是信任根；原本配置了 checksum 的流程仍然会继续校验。

## 更多细节特性

这篇文章只写主路径。`eget` 还有不少偏工程现场的能力，细节建议直接看 [GitHub README](https://github.com/inherelab/eget/blob/main/README.zh-CN.md) 和 [配置文档](https://github.com/inherelab/eget/blob/main/docs/config.zh-CN.md)：

- 并发下载和批量安装更新。
- 大文件 HTTP Range 分片下载。
- `.part` 和 metadata 配合的大文件断点续传。
- Windows GUI 安装器启动。
- portable GUI 包安装到 `gui_target`。
- API cache、下载缓存、SDK index cache 分开管理。

这些能力平时不一定都用得上，但在 CI、内网开发机、Windows 工具分发和大 SDK 下载场景里会省不少手工活。

## 适合什么，不适合什么

`eget` 适合这些场景：

- 想第一时间试 GitHub release 里的新版本。
- 工具只提供 zip、tar.gz、exe、deb 这类资产。
- 公司内部工具有固定下载规则，但不想搭中心仓库。
- 需要在 CI、开发机或内网机器上重复拉同一批工具和 SDK。

它不适合替代系统包管理器。依赖解析、系统服务注册、复杂的 post-install 脚本，这些不是它的目标。

更准确地说，`eget` 是一个 release asset 下载和安装器。GitHub 上东西已经发了，下载站上文件已经有了，内网目录里包已经放好了，它负责把这些东西拿到本机，并尽量少让你等中间那层索引更新。
