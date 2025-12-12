# Inehre's Blog and Docs

Build by [Zola](https://github.com/getzola/zola)

## Site address

- https://inhere.github.io

## Quick generate new doc

```bash
kite run script/cgen.php -h
kite run script/cgen.php --name install-tools-by-scoop-on-windows --tags tool,windows,scoop
```

## 初始化

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
