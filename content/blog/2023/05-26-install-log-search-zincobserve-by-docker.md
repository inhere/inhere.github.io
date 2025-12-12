---
title: 通过docker安装日志搜索服务 zincobserve(openobserve)
date: 2023-05-26T16:41:00
slug: install-log-search-zincobserve-by-docker
taxonomies:
  tags: [tool,zinc,search]
# authors: inhere
# gen by: kite run script/cgen.php --name install-log-search-zincobserve-by-docker --tags tool,zinc,search
---

在本地安装并使用日志搜索服务 `zincobserve`.

<!-- more -->

`zincobserve` 是一个 rust 编写的日志索引和搜索服务。比ES简洁方便，已经自带了简单的GUI界面，可以直接使用。如果要用于应用业务数据搜索，可以使用它们的另一个项目 `zincsearch`。

> 文档地址：https://zinc.dev/docs/guide/quickstart/

## 拉取镜像

```bash
docker pull public.ecr.aws/zinclabs/zincobserve:latest
```

### 启动运行

通过设置环境变量 `ZO_ROOT_USER_EMAIL` `ZO_ROOT_USER_PASSWORD` 初始化账号。

> 注意：先创建一个data目录放数据。

```bash
mkdir data
docker run -v $PWD/data:/data -e ZO_DATA_DIR="/data" -p 5080:5080 \
    -e ZO_ROOT_USER_EMAIL=root@example.com -e ZO_ROOT_USER_PASSWORD=Complexpass#123 \
    --name zinc-observe public.ecr.aws/zinclabs/zincobserve:latest
```

启动后，即可以通过浏览器打开 http://localhost:5080 并登录。

## 加载示例数据

我们将使用 JSON API 加载示例日志数据。

以下命令将下载真实日志数据的示例文件，将其解压缩并使用 JSON 摄取 API 加载到 ZincObserve 中。

### 下载示例数据

```bash
$ curl -L https://zinc-public-data.s3.us-west-2.amazonaws.com/zinc-enl/sample-k8s-logs/k8slog_json.json.zip -o k8slog_json.json.zip
$ unzip k8slog_json.json.zip
$ ls
k8slog_json.json
```

### 加载示例数据

- 加载 `array[object]` 数据

```bash
curl http://localhost:5080/api/default/default/_json -i -u root@example.com:Complexpass#123  -d "@k8slog_json.json"
```

- 加载多行的JSON数据,每行是一个JSON对象

```bash
curl http://localhost:5080/api/default/default/_multi -i -u root@example.com:Complexpass#123  -d "@some-app.log"
```


## 搜索数据

使用浏览器打开 http://localhost:5080 并登录

1. 访问页面菜单 `Logs`
2. 从左侧的下拉列表中选择索引 `default`
3. 输入搜索栏，然后单击右侧的搜索按钮。 `match_all('error')`

单击搜索栏旁边的 “语法指南” 按钮以查看有关如何搜索的示例。

