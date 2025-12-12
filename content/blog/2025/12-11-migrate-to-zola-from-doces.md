---
title: 博客构建从 Docusaurus 迁移到 Zola
date: 2025-12-11T19:42:00
taxonomies:
  tags: [zola, docusaurus]
---

之前使用 Docusaurus 构建博客，现在想迁移到 Zola。

Zola 是一个rust编写的静态站点生成器，它使用 Markdown 文件来生成静态网站。它的配置文件是 `config.toml`，你可以在其中配置网站的标题、描述、导航栏、侧边栏等。

<!-- more -->

Docusaurus 主要问题是每次有 npm 依赖更新，都可能导致构建失败, 后面要升级大版本到 Docusaurus 3 就更升级不动了。而 Zola 则没有这个问题，因为它是一个二进制文件，不需要运行时依赖。

## 迁移步骤

1. 安装 Zola：根据你的操作系统，从 [Zola 官方网站](https://www.getzola.org/) 下载并安装 Zola。
2. 迁移内容：将 Docusaurus 项目中的 Markdown 文件复制到 Zola 项目的 `content` 目录下。
3. 配置 Zola：根据 Docusaurus 的配置文件，在 Zola 项目中创建 `config.toml` 文件，并配置网站的标题、描述、导航栏、侧边栏等。
4. 构建网站：
  - 开发模式：在 Zola 项目目录下运行 `zola serve` 命令，启动一个本地开发服务器。你可以在浏览器中访问 `http://localhost:1111` 来查看实时预览。
  - 生产模式：在 Zola 项目目录下运行 `zola build` 命令，生成静态网站。
5. 部署网站：将生成的静态网站部署到你喜欢的托管服务上，如 GitHub Pages、Netlify 等。

## 迁移调整

### 文章标签

Zola 中，你可以在 Markdown 文件的 front matter 中添加 `tags` 字段来为文章添加标签。例如：

```markdown
---
title: 文章标题
date: 2025-12-11T19:42:00
taxonomies:
  categories: ["Sample Post"] # zola 支持设置文章分类
  tags: [zola, docusaurus]
---

文章内容...
```

> [!NOTE]
> 与 Docusaurus 不同，Zola 中 `tags` 需要放在 `taxonomies` 字段下。

这将使 Zola 生成一个 `/tags` 目录，其中包含所有文章的标签页面。

### 显示摘要

Zola 默认不会显示文章的摘要，你需要在 Markdown 文件中添加 `<!-- more -->` 注释来标记摘要的结束位置。之前 Docusaurus 则是使用的 `<!--truncate-->` 注释标记。

## Zola 配置

### Github alert 提示

配置 `config.toml` 文件，启用 Github alert 提示。

```toml
[markdown]
github_alert = true
```

Zola 支持在文章中添加 Github alert 提示。例如：

```markdown
> [!NOTE]
> 这是一个注意提示。
```

这将在文章中添加一个蓝色的提示框，内容为 "这是一个注意提示。"

> [!TIP]
> 你可以使用 `note`, `tip`, `important`, `warning`, or `caution` 来添加不同类型的提示。

## 主题配置

Zola 支持使用主题来定制网站的外观。你可以在 `config.toml` 文件中配置主题。

例如，要使用 [welpo/tabi](https://github.com/welpo/tabi) 主题，你可以添加以下配置：

```bash
git submodule add https://github.com/welpo/tabi.git themes/tabi
```

`config.toml` 文件：

```toml
theme = "tabi"
```

### tabi 主题配置

你可以在 `config.toml` 文件中配置 tabi 主题。例如：

```toml
theme = "tabi"
```

> 参考 [https://welpo.github.io/tabi/blog/mastering-tabi-settings/](https://welpo.github.io/tabi/blog/mastering-tabi-settings/) 了解更多配置选项。

### 主题参考

- [welpo/tabi](https://github.com/welpo/tabi) 当前使用的主题
- [RatanShreshtha/DeepThought](https://github.com/RatanShreshtha/DeepThought)

## 配置自动部署

通过 GitHub Actions 自动部署到 GitHub Pages。

1. 在你的 Zola 项目中创建一个 `.github/workflows/deploy.yml` 文件。
2. 复制以下内容到 `deploy.yml` 文件中：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  deploy:
    name: Deploy to GitHub Pages
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v6

      - name: Build and Deploy
        uses: shalzz/zola-deploy-action@v0.21.0
        env:
          PAGES_BRANCH: gh-pages
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          BUILD_THEMES: false
```

> 参考 [shalzz/zola-deploy-action](https://github.com/shalzz/zola-deploy-action) 了解更多配置选项。
