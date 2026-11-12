---
title: apic：给任何 HTTP API 一个命令行，不用再为每个服务写 CLI
date: 2026-11-13T10:00:00
taxonomies:
  tags: [apic, api, openapi, golang, cli, ai-agent]
slug: apic-intro
---

公司里有一个部署平台和一个自建 GitLab，我每天都要查几次：某个应用最近的部署任务成功没有、哪台主机离线了、哪个 MR 还没合。网页能看，但要点好几层；想在脚本里用，就得翻接口文档、拼 curl、从别处复制 token，再把 JSON 用 jq 一层层剥开。让 AI agent 帮忙查也一样：它得先学会这些接口，还得知道 token 放在哪、哪些接口不能乱调。

`apic` 是我为这件事写的命令行工具。一句话：**读取 API 的定义（OpenAPI / Swagger，或几行 YAML），把每个接口变成一条命令**，环境、认证、分页和输出格式由它统一处理。

```bash
$ apic pet users --all-pages --pick '*.{id,name,dept=dept.name}' -o table
id  name   dept
1   user1   ops
2   user2   dev
...
42  user42  dev
```

上面这条命令翻完了所有分页，从每条记录里取出三个字段（其中一个是嵌套字段，改了列名），输出成表格。token 在配置里引用，不出现在命令行上。

<!-- more -->

apic 是 MIT 开源的，单个 Go 二进制，Linux / macOS / Windows 都能用。当前版本 v0.5.0，还在 `0.x`，v0.5 就改过一次 `--pick` 的语法，升级前看发布说明。安装和上手在文末「试一下」，四五条命令。

- 仓库：[github.com/inhere/apic](https://github.com/inhere/apic)
- 发布页：[releases/latest](https://github.com/inhere/apic/releases/latest)

## 从零接入一个服务

很多内部服务没有 OpenAPI 文档，apic 也支持「简单定义」：把用到的接口写下来就行。

```yaml
# ~/.config/apic/defs/pet.yaml
operations:
  users:
    get: /api/users
    summary: list users
    query: [keyword, page, size]
  user:
    get: /api/users/{id}             # 生成必填的 --id
  create-user:
    post: /api/users
```

注册站点，然后按名字调用：

```bash
apic site add pet --def ~/.config/apic/defs/pet.yaml --base-url http://127.0.0.1:8080
apic ops pet                                  # 列出操作
apic pet users --keyword tom                  # query 参数变成选项
apic pet user --id 7                          # 路径参数
apic pet create-user -f name=tom -f age:=3    # 拼 JSON 请求体：{"name":"tom","age":3}
```

有 OpenAPI / Swagger 文档的服务更省事，`apic site add pet --spec <url>` 一条命令，命令名取自 `operationId`。定义会缓存到本地，补全只读缓存，不发请求。

文档有错、命令名不顺手时，不用改上游文档，在 `overlays/<site>.yaml` 里改名、隐藏或修正参数，`site refresh` 之后也还在。

## 环境、认证与写保护

我的部署平台有两套环境，各用各的登录态。apic 的站点配置里，环境和认证是分开写的，每个环境可以绑定自己的认证：

```yaml
sites:
  pet:
    source: {type: simple, file: defs/pet.yaml}
    envs:
      dev:  {base_url: http://127.0.0.1:8080, auth: dev}
      prod: {base_url: https://pet.example.com, protect: true, auth: prod}
    default_env: dev
    auths:
      dev:  {type: bearer, token: "${env:PET_DEV_TOKEN}"}
      prod: {type: bearer, token: "${exec:pass show pet/prod-token}"}
```

和「别出事」有关的几条：

- **环境绑定认证**：`--env prod` 一定用 prod 的 token。之前用 `apic use` 存下来的选择，不会把 dev 的 token 发到 prod 去。
- **写保护**：`protect: true` 的环境，GET 照常，POST/PUT/DELETE 不带 `--yes` 直接拒绝，退出码 6。认证上还可以加 `allow_methods: [GET, HEAD]`，做成只读账号。
- **凭证不进配置**：`${env:NAME}` 从 `.env` 或环境变量读；`${exec:命令}` 从密码管理器之类的命令输出读。认证类型支持 bearer、basic、apikey、登录换 token（缓存，401 时重新登录），以及调用外部命令拿 token。
- **到处打码**：`-v`、`--dry-run`、错误信息和 `config show` 里，密钥都显示为 `***`。

```bash
apic pet create-user --env prod -f name=tom
# error: POST on a protected environment requires --yes   （退出码 6）
apic pet create-user -f name=tom --dry-run
# curl -X POST -H 'Authorization: ***' -H 'Content-Type: application/json' --data-raw '{"name":"tom"}' 'http://127.0.0.1:8080/api/users'
```

`--dry-run` 打印等价的 curl 命令，不发请求，适合在真正写入之前确认一遍。

## 只要我关心的那几个字段

接口返回的 JSON 通常套了几层，`--pick` 用来取值：

```bash
apic pet user --id 7 --pick data.name                          # user7（字符串直接输出，方便放进变量）
apic pet users --pick 'total=data.total,first=data.list.0.name'  # {"total":42,"first":"user1"}
apic pet users --pick 'data.list.*.{id,name,dept=dept.name}' -o table
```

逗号分隔多项，每项都从根开始取；`{...}` 在一个前缀下取多个键；`*` 遍历数组；`别名=路径` 改键名。`-o` 可以选 json、yaml、table、raw。

分页在站点上配一次：

```yaml
    paginate: {page: page, size: size, items: data.list, total: data.total}
```

之后加 `--all-pages` 就会按页码翻到底，把每页的 `data.list` 合并成一个数组输出，`--pick` 的路径也就从这个数组开始写（开头的例子里就是 `*.{...}`）。`--max-pages N` 限制页数，还有剩余时在 stderr 给一行警告。我在部署平台的任务列表上试过，四百多条记录按 total 取齐，id 没有重复。

## 让 AI agent 也能用

stdout 只有响应体，其他信息都在 stderr，退出码有固定含义：

| 退出码 | 含义 |
|---|---|
| 0 | 2xx / 3xx |
| 1 | 本地错误：配置、定义、参数校验 |
| 2 | 用法错误 |
| 3 | 网络错误或超时 |
| 4 | HTTP 4xx |
| 5 | HTTP 5xx |
| 6 | 被写保护拒绝 |
| 7 | 请求成功，但 `--pick` 或 `-o` 失败，不要重试 |

脚本和 agent 按退出码决定下一步，不用解析错误文案。

apic 还能生成 skill 文件：

```bash
apic skill        # 通用说明：apic 怎么用、简单定义怎么写（带示例）、退出码
apic skill pet    # 站点说明：有哪些操作、环境和认证叫什么（不含地址和凭证）
```

生成的 `SKILL.md` 可以装给 Claude Code 之类的 agent。通用 skill 不读本机配置，不含任何站点、地址和凭证，可以直接拷到别的机器上用；站点 skill 发出去之前最好自己看一遍。

## 它是什么、不是什么

apic 是一个按定义生成命令的 HTTP 客户端，面向日常查询和小量写操作，人和 agent 共用。

它不做这些事：

- 不是 API 测试工具：没有断言、用例集和报告，这类需求用 Postman、Hurl 之类的工具更合适。
- 不是代码生成器：不生成 SDK 或独立的 CLI 源码，命令在运行时从定义生成。
- 不做 OAuth 授权码、设备码这类交互式登录。需要的话可以用 `exec` 认证调用现成的 SSO 命令行拿 token。

## 和同类工具比

- **curl / HTTPie**：什么都能调，也最灵活。apic 底层也只是发 HTTP 请求，`--dry-run` 输出的就是 curl 命令。区别在于 apic 记住了地址、环境和认证，命令和参数有补全，这些在 curl 里要靠 shell 别名和脚本自己维护。
- **Restish**：同样读取 OpenAPI 生成命令，成熟、功能多。apic 的取舍是把重心放在没有 OpenAPI 文档的内部服务（简单定义、overlay）、按环境绑定认证与写保护，以及给 agent 用的 skill 和退出码约定。
- **为每个服务手写 CLI**：体验可以做到最好，但每个服务都要写一遍、维护一遍。apic 适合那些需要个命令行、又犯不上专门写一个的服务。

## 怎么做出来的

apic 从第一个提交（2026-11-10）到 v0.5.0（2026-11-12）用了三天，发了 6 个版本、162 个提交。非测试代码约 9900 行，测试代码约 10900 行，224 个测试函数，CI 在 Linux 和 Windows 上跑。

代码大部分由 AI agent 编写：Claude Code，以及我自己写的 agent [suga](https://github.com/inhere/suga)。我定需求和设计取舍，每一批先写设计和实施计划、批准后再动手；实现交给 agent，审查和验收也主要由 agent 完成，包括 Linux 与 Windows 全量测试、改坏关键代码确认测试会失败，以及对真实服务做只读调用。v0.5.0 这一批，审查在合入前拦下过一处安全回归：`--dry-run` 会把缓存的登录 token 明文打在自定义请求头里，修掉后补了回归测试。发版后还在 Windows CI 上出过一次因 CRLF 换行导致的测试失败，当天修掉了。

## 局限

- 还在 `0.x`，命令行接口可能变，v0.5 就有一处不兼容（`--pick` 的投影写法）。
- 分页只支持页码式（page / size），不支持游标和 `Link` 头，也只支持 GET。
- 文件上传整个请求体限制在 64 MiB。
- OpenAPI 文档里的 server 是相对路径时，要自己用 `--base-url` 给出 host。
- Windows 上生成的快捷命令是 `.cmd`，`cmd.exe` 会重新解析参数，JSON 请求体要用 `-d @file` 传。

## 试一下

推荐用 [eget](https://github.com/inherelab/eget) 安装（会校验 checksum）：

```bash
eget install inhere/apic
# 或者：go install github.com/inhere/apic/cmd/apic@latest
```

用公开的示例服务试一下，或者照上面「从零接入一个服务」写一个简单定义：

```bash
apic site add pet --spec https://petstore3.swagger.io/api/v3/openapi.json --base-url https://petstore3.swagger.io
apic ops pet
apic pet find-pets-by-status --status available --pick '*.{id,name}' -o table
apic pet get-pet-by-id --petId 1 --pick 'name,category=category.name'   # {"name":"doggie","category":"Dogs"}
```

README 里有一节「常用场景」，覆盖列表转表格、分页、脚本、生产保护和凭证这些写法；GitLab 的只读示例配置在 [examples/gitlab](https://github.com/inhere/apic/tree/main/examples/gitlab)。

## 接下来

下一批候选是表格列控制：`-o table --columns`，以及在 overlay 里给操作设默认列，这样常用的列表不用每次都写 `--pick`。如果你在用 apic 接入某个服务时遇到定义解析不了、或者认证方式不支持，欢迎在 [issues](https://github.com/inhere/apic/issues) 里贴出来（记得去掉地址和凭证）。
