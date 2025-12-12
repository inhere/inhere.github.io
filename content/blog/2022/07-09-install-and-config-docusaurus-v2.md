---
title: 安装并配置 docusaurus v2站点
taxonomies:
  tags: [docusaurus]
date: 2022-07-09T17:13:00
slug: install-and-config-docusaurus-v2.md
# authors: inhere
---

简单记录一下如何安装和使用 Docusaurus 来构建自己的博客和文档站点。

> Docusaurus 的官方文档 https://docusaurus.io/zh-CN/docs

<!-- more -->

## 生成新站点

使用 `classic` 模板生成一个新的 Docusaurus 站点 `my-website`。

运行命令后，经典模板将自动添加到您的项目中

```bash
npm init docusaurus@latest my-website classic
```

进入生成的站点目录

```bash
cd my-website
```

启动并运行开发服务器:

```bash
npm run start
```

打开页面 `docs/intro.md` 并编辑一些行,可以看到该站点会自动重新加载并显示最新的更改。

## 配置站点


基础配置

```js,name="docusaurus.config.js"
const config = {
  title: "Inhere's Site",
  tagline: "Inhere's site, blogs and project docs",
  url: 'https://inhere.github.io',
  baseUrl: '/',
  trailingSlash: false,

  organizationName: 'inhere', // Usually your GitHub org/user name.
  projectName: 'inhere.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  // ...
}
```

文档和博客配置：

```js,name=docusaurus.config.js
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/inhere/inhere.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          postsPerPage: 6,
          // routeBasePath: '/', // 把博客放在站点根部
          blogSidebarCount: 6, // 默认 5
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/inhere/inhere.github.io/tree/main/',
        },
      }),
    ],
  ],
```

:::info

完整配置请看 https://github.com/inhere/inhere.github.io/blob/main/docusaurus.config.js

:::


### 配置多语言

```js,name="docusaurus.config.js"
i18n: {
    defaultLocale: 'zh-CN',
    locales: [ "zh-CN", 'en'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
    },
  },
```


这里我是以 `zh-CN` 为主，生成 `en` 翻译文档

```bash
npm run write-translations -- --locale en
```



## GitHab Pages

参考官方文档添加 GitHab Actions 如下的配置文件，这样在每次推送到仓库时就会触发自动构建，
并且会自动部署构建的静态文件到 `gh-pages` 分支。

```txt
.github/workflows/deploy.yml
.github/workflows/test-deploy.yml
```

## 添加常用插件


### npm2yarn

可以同时显示 npm 和 Yarn 的 CLI 命令。
然后要使用它，只需在代码块中添加 `npm2yarn` 键：


```bash
npm install @docusaurus/remark-plugin-npm2yarn
```

配置插件：

```js,name=docusaurus.config.js
module.exports = {
  // ...
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // highlight-start
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}],
          ],
          // highlight-end
        },
        pages: {
          // highlight-next-line
          remarkPlugins: [require('@docusaurus/remark-plugin-npm2yarn')],
        },
        blog: {
          // ...
        },
      },
    ],
  ],
};
```

### docusaurus-search-local


用于 Docusaurus v2 的支持离线本地搜索的插件

> 插件仓库 https://github.com/easyops-cn/docusaurus-search-local

安装插件：

```bash
npm install --save @easyops-cn/docusaurus-search-local
```

配置插件：

```js,name=docusaurus.config.js
module.exports = {
  // ... Your other configurations.
  themes: [
    // ... Your other themes.
    [
      // highlight-start
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The is recommended to set to:
        language: ["en", "zh"],
      },
      // highlight-end
    ],
  ],
};
```

类似插件：

- https://github.com/praveenn77/docusaurus-lunr-search
- https://github.com/cmfcmf/docusaurus-search-local


### openapi-docs

> GitHub https://github.com/PaloAltoNetworks/docusaurus-openapi-docs

Installation

Plugin:

```bash
yarn add docusaurus-plugin-openapi-docs
```

Theme:

```bash
yarn add docusaurus-theme-openapi-docs
```

## 一些使用说明

一些有用的使用说明

### 强调提示

```markdown
:::note

一些包含 _Markdown_ `语法` 的 **内容**。

:::

:::tip

一些包含 _Markdown_ `语法` 的 **内容**。

:::

:::info

一些包含 _Markdown_ `语法` 的 **内容**。

:::

:::caution

一些包含 _Markdown_ `语法` 的 **内容**。

:::

:::danger

一些包含 _Markdown_ `语法` 的 **内容**。

:::
```

效果如下：


:::info

一些包含 _Markdown_ `语法` 的 **内容**。

:::

:::caution

一些包含 _Markdown_ `语法` 的 **内容**。

:::


### 代码行高亮

你可以用 `highlight-next-line`、`highlight-start`、`highlight-end` 等注释来选择要高亮的行。

效果如下：

```js
function HighlightSomeText(highlight) {
  if (highlight) {
    // highlight-next-line
    return '这行被高亮了！';
  }

  return '这里不会';
}

function HighlightMoreText(highlight) {
  // highlight-start
  if (highlight) {
    return '这块被高亮了！';
  }
  // highlight-end

  return '这里不会';
}
```

> 原文档 https://docusaurus.io/zh-CN/docs/markdown-features/code-blocks#line-highlighting


