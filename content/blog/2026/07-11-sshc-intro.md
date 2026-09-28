---
title: sshc：把零散的 SSH 命令整理成可重复的运维工作流
date: 2026-07-11T16:30:00
taxonomies:
  tags: [sshc, ssh, golang, cli, devops]
slug: sshc-intro
---

只管理一两台服务器时，SSH 很简单：记住地址，敲一条命令就能登录。机器多起来以后，麻烦通常不在 SSH 本身，而在 SSH 周围：地址散落在聊天记录里，账号和密钥重复配置，批量操作靠临时 shell 循环，执行失败后还要翻终端输出确认漏了哪台。

`sshc` 是我为这类日常工作写的 SSH 命令行工具。它把主机、认证信息和执行记录放进同一套本地配置，同时提供单机执行、批量任务、文件传输、跳板机、失败重跑和本地 Web 控制台。它仍然使用 SSH，也不试图替代 Ansible；它处理的是两者之间那段经常由脚本和记忆勉强维持的工作流。

![sshc SSH 运维工作流海报](/img/blog/sshc-poster.png)

<!-- more -->

- 项目主页：[https://github.com/inhere/sshc](https://github.com/inhere/sshc)
- 最新版本：[https://github.com/inhere/sshc/releases/latest](https://github.com/inhere/sshc/releases/latest)
- 使用文档：[README.md](https://github.com/inhere/sshc#readme)

## 先把一台机器变成一个名字

已经安装 Go 的话，可以直接安装：

```bash
go install github.com/inhere/sshc/cmd/sshc@latest
```

也可以从 [Releases](https://github.com/inhere/sshc/releases/latest) 下载对应系统的二进制文件。

第一次使用，先保存认证信息，再添加主机：

```bash
sshc auth add dev-root -u root -p --remark "testing root account"
sshc host add --ip 192.168.1.10 --name devhost --auth dev-root
sshc list
```

`auth add -p` 会在终端中隐藏输入密码，不会把密码直接放进命令历史。认证信息独立保存为 `dev-root` 后，多台机器可以引用同一个 auth profile。密钥登录也可以单独配置：

```bash
sshc auth add deploy-key -u deploy --key ~/.ssh/id_ed25519
sshc host add --ip 192.168.1.11 --name web-1 --auth deploy-key --group testing
sshc host add --ip 192.168.1.12 --name web-2 --auth deploy-key --group testing
```

主机地址和认证信息分开维护。服务器换地址时只改主机，轮换密钥时只改 auth profile。

## `run` 把临时命令变成有记录的任务

保存主机后，可以直接运行远程命令：

```bash
sshc run devhost -- uname -a
sshc run devhost --cwd /opt/app -- git status --short
sshc run devhost --env APP_ENV=testing -- printenv APP_ENV
sshc run devhost --sudo -- apt-get update
```

`--` 后面的内容是远程命令。工作目录、环境变量和 sudo 选项由 `sshc` 统一处理，不需要在每条命令中重复拼一长串 `cd ... && export ...`。

命令一旦出现多行 shell、here-doc、`source` 或复杂引号，继续压成一行往往只会让调试更费时间。这时可以直接上传并执行脚本：

```bash
sshc run devhost --script ./deploy.sh --cwd /opt/app
sshc run devhost --script ./deploy.sh --remote-script-dir /opt/app/tmp
```

脚本默认上传到远程 `/tmp`，由 Bash 执行，任务完成后清理。目标机器的 `/tmp` 有挂载或权限限制时，可以用 `--remote-script-dir` 指定其他目录。

每次 `run` 都会生成 `task_id`，并把结果写入 JSONL 日志。短输出直接保存在记录里，较大的输出单独存成文件。之后再查“刚才那条命令在哪台机器上跑过”，不用依赖终端滚动记录。

## 批量执行不该止步于一个 `for` 循环

两台测试机可以用 shell 循环处理，十几台机器也勉强可以。真正麻烦的是中途失败：哪些成功、哪些失败、哪些因为 fail-fast 根本没开始，往往需要自己额外记录。

`batch-run` 可以按主机、分组或文件选择目标：

```bash
sshc batch-run --hosts web-1,web-2 -- uptime
sshc batch-run --group testing --parallel 5 --script ./deploy.sh
sshc batch-run --hosts-file hosts.txt --auth deploy-key -- hostname
```

`--parallel` 控制并发数。`--fail-fast` 会在首次失败后停止启动新任务，同时等待已经开始的任务结束，不会粗暴地丢下正在运行的 SSH 会话。

每次批量执行都会打印一个 Batch ID，并写入汇总记录。记录里包含目标来源、主机列表、逐主机状态、对应的 `task_id`，以及成功、失败和跳过数量。默认的表格输出适合当场查看，JSONL 记录则留给之后查询。

如果发布只在两台机器上失败，不需要重新跑完整批次：

```bash
sshc batch-run --rerun-failed 20260708-120102-a1b2 --parallel 2
```

失败重跑会复用原任务的命令或脚本及运行参数，同时允许重新设置并发数和 fail-fast。为了避免把脱敏后的字符串误当成真实密钥，原任务只要包含被遮盖的环境变量值，`sshc` 就会拒绝自动重跑。

## 日志能回答“哪台失败了，为什么”

单机和批量任务最终都落到同一套运行记录里：

```bash
sshc log
sshc log web-1 --match error --tail 50
sshc log --id 20260704-173012-a1b2c3
sshc log --id 20260704-173012-a1b2c3 --lines 120,180
```

按主机查适合回看近期操作，按 `task_id` 查则能精确打开某次执行。大段输出拆到独立文件后，主日志仍然适合搜索，不会因为一次构建打印几万行而变得难以使用。

交互式 `login` 只记录连接元数据，不记录键盘输入和完整终端输出。它可以留下“何时连接过哪台机器”的线索，但不会把会话变成另一份包含敏感命令的录屏。

## 文件传输继续复用同一份主机配置

上传和下载不必再重复填写地址、端口和认证参数：

```bash
sshc scp -l ./dist -r /opt/app/dist web-1 --remove-dir
sshc scp --map ./config/app.yml=/etc/app/app.yml web-1
sshc download -r /var/log/my-app/app.log -l ./tmp/logs/ web-1 --sha256
```

重复使用 `-l` 可以把多个本地文件上传到同一个远程目录；每个文件需要独立目标路径时，用 `--map local=remote`。上传和下载都可以通过 `--sha256` 校验内容。

文件传输与远程执行复用同一个主机名、认证配置和安全设置。

## 跳板机和命令代理解决的是两种连接问题

内网机器可以引用一台已保存的 jump host：

```bash
sshc host add --ip 1.2.3.4 --name bastion --auth dev-root
sshc host add --ip 10.0.0.8 --name inner-db --auth dev-root --jump bastion
sshc run inner-db -- hostname
```

另一类目标甚至没有可直接连接的 sshd，例如 Proxmox 宿主机里的 LXC 容器。对这类逻辑主机，可以配置 `command_proxy`：

```bash
sshc host add --ip 192.168.1.20 --name pve-host --auth dev-root
sshc host add --name lxc-app \
  --backend command_proxy \
  --via pve-host \
  --run-template "pct exec 101 -- sh -lc {{cmd}}" \
  --login-command "pct enter 101"

sshc run lxc-app -- cat /etc/os-release
sshc login lxc-app
```

这里的 `command_proxy` 不是 OpenSSH `ProxyCommand`。它先 SSH 登录 `via` 主机，再用模板执行最终命令，并不代理 TCP 流。当前它支持 `run`、`batch-run` 和 `login`，不支持 `scp`、上传、下载、`run --script` 及浏览器终端。需要完整 SSH 连接能力的目标，仍应使用普通主机或 jump host。

## 配置迁移时，密文和解密钥匙要分开

主机和认证配置逐渐稳定后，通常还会遇到换电脑、重装系统或给另一套受控环境复制配置的问题。直接复制配置文件并不完整，因为本地密码加密还依赖 `~/.config/sshc/key`。

`cfg export` 会生成一个加密导出包，并在终端打印一次性导出密钥：

```bash
sshc cfg export -o sshc-export.enc
```

导出文件和密钥应该分开保存、分开传递。导入时显式提供密钥：

```bash
sshc cfg import -f sshc-export.enc --key "sshc-v1:..."
```

默认策略是 `merge`。遇到同名主机、相同主机 IP 或同名 auth profile 时，导入会拒绝覆盖。确认要用导入内容更新冲突项时，可以选择 `--overwrite`；需要整份替换当前配置时，使用 `--replace`：

```bash
sshc cfg import -f sshc-export.enc --key "sshc-v1:..." --overwrite
sshc cfg import -f sshc-export.enc --key "sshc-v1:..." --replace
```

写入之前，`sshc` 会备份当前配置。导入包里的密码也不会照搬源机器密文，而是在保存时使用目标机器的本地密钥重新加密。

导出包只包含配置中已经保存的数据。auth profile 如果引用外部私钥路径，私钥文件不会自动打包，需要自行迁移；希望私钥随配置迁移时，应在添加 auth profile 时使用 `--embed-key`。

这套命令迁移的是完整配置。手里只有 IP 列表、CSV、OpenSSH config 或几行粘贴文本时，应使用 `sshc host import`，不要为了导入几台主机制作完整配置包。

## Web Console 适合检查和管理，CLI 负责重复执行

批量执行和脚本集成留在 CLI 里最省事；检查主机、认证配置和近期日志时，页面更容易扫读。`sshc` 因此提供了一个本地 Web Console：

```bash
sshc serve
```

默认监听 `127.0.0.1:8822` 并自动打开浏览器。页面可以管理主机和 auth profile、查看配置摘要与运行日志，也能打开浏览器 SSH 终端。它使用的仍是 CLI 保存的配置，没有另一套服务端数据库。

Web Terminal 不会在浏览器里询问是否信任未知 host key。第一次连接前，需要在终端中完成信任：

```bash
sshc host trust web-1
```

如果监听 `0.0.0.0` 等非本机地址，必须设置 token：

```bash
sshc serve --addr 0.0.0.0:8822 --token random
```

`--token random` 会在启动时打印一次性访问 token。服务只在内存中保存 token 哈希，写请求还需要会话 cookie 和 CSRF 请求头。即便如此，也不应该把 Web Console 直接暴露到公网；远程使用时，应放在可信隧道或受控网络后面。

## 安全默认值宁可麻烦一点

`sshc` 默认使用 `~/.ssh/known_hosts` 检查主机密钥。遇到未知主机，交互命令可以在确认后追加密钥；非交互任务应提前执行：

```bash
sshc host trust web-1
```

主机密钥变化时，连接默认失败。确认目标机器确实更换过密钥后，才应该强制更新：

```bash
sshc host trust -f web-1
```

保存的密码会先加密再写入配置，但配置文件和本地密钥都需要妥善保护。能使用 SSH key 时仍应优先使用 key。`host_key_check=insecure` 只适合明确可信的临时环境，不应该作为跳过排查的常规选项。

## 它适合哪一段工作流

如果只连接一台服务器，`ssh user@host` 已经够用。如果需要声明服务器最终状态、管理复杂依赖或编排大规模基础设施，Ansible、Salt 或其他配置管理系统更合适。

`sshc` 适合中间这段：你已经有一批经常连接的主机，需要复用认证和跳板配置；你会重复执行发布、检查、日志收集等任务，希望批量结果能追踪、失败任务能重跑；但你暂时不需要引入一套完整控制端。

最短的试用路径只有四步：

```bash
go install github.com/inhere/sshc/cmd/sshc@latest
sshc auth add dev-root -u root -p
sshc host add --ip 192.168.1.10 --name devhost --auth dev-root
sshc run devhost -- uptime
```

项目源码、完整命令和当前限制都在 [github.com/inhere/sshc](https://github.com/inhere/sshc)。如果你现在用的是一组 shell alias、临时循环和散落的主机清单，可以先拿两台测试机试一次 `batch-run`，再决定是否值得迁移其余工作流。
