# Inhere's Blog and Docs

Build by [Zola](https://github.com/getzola/zola)

## Site address

- https://inhere.github.io

## Start

### 本地构建

```bash
zola build
# 开发 server
zola serve
```

### AI skills

```bash
skillc add -S https://github.com/affaan-m/ECC --skill article-writing
# content-rewrite
skillc add -S https://github.com/zc277584121/marketing-skills --skill content-rewrite
# blog-writing-guide
skillc add -S https://skills.sh/sickn33/antigravity-awesome-skills blog-writing-guide
skillc add -S https://github.com/blader/humanizer humanizer
skillc add -S https://github.com/op7418/Humanizer-zh  humanizer-zh
```

> install by [skillc](https://github.com/inhere/skillc.git), find skills from https://skills.sh, https://skillsmp.com

## 初始化主题

使用 zola 的主题 [tabi](https://github.com/welpo/tabi) 进行构建

```bash
git submodule add https://github.com/welpo/tabi.git themes/tabi

# 更新子模块
git submodule update --init --recursive
git submodule update --remote themes/tabi
```

## 配置

- 配置文件：`config.toml`
- 文档目录：`content/`
- 参考start项目：https://github.com/welpo/tabi-start

### 多语言文章

- 中文默认语言文章：`content/blog/YYYY/MM-DD-title.md`
- 英文翻译文章：`content/blog/YYYY/MM-DD-title.en.md`
- 同一篇文章的不同语言必须使用相同 `slug`。不要在英文 `slug` 后追加 `-en`，否则主题语言切换会把 `/blog/.../slug/` 拼成 `/en/blog/.../slug/`，但实际页面会生成到 `/en/blog/.../slug-en/`，导致 404。
- `slug` 尽量只使用小写字母、数字和短横线；版本号里的点号写成短横线，例如 `v3-8-0`，避免 Zola slugify 后路径和预期不一致。

```

#
inhere:
  name: inhere
  title: docs maintainer
  url: https://github.com/inhere
  image_url: https://github.com/inhere.png
```

## 部署

使用 [zola-deploy-action](https://github.com/shalzz/zola-deploy-action) 进行部署
