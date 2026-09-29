---
title: miglite v0.8.0：迁移文件可以嵌进二进制了
date: 2026-09-28T22:45:00
taxonomies:
  tags: [gookit, golang, miglite, database, cli]
slug: gookit-miglite-v0-8-0
---

上一篇写 `miglite` 是 6 月，当时还是 v0.4.0。三个多月里，它发到了 v0.8.0：`v0.4.0..v0.8.0` 之间有 69 个提交，4 次发版。

我这次最想解决的是部署时带着 `migrations/` 目录的问题。顺便把几处“参数能传进去、实际不起作用”的行为补上了。

![miglite v0.8.0：把迁移文件嵌进二进制](/img/blog/miglite-v080-poster.png)

<!-- more -->

- 项目主页：[https://github.com/gookit/miglite](https://github.com/gookit/miglite)
- API 文档：[https://pkg.go.dev/github.com/gookit/miglite](https://pkg.go.dev/github.com/gookit/miglite)
- 上一篇：[miglite：用原始 SQL 文件管理数据库迁移](/blog/2026/gookit-miglite-intro/)
- 最新版本：[v0.8.0](https://github.com/gookit/miglite/releases/tag/v0.8.0)

## 这几个版本改了什么

| 版本 | 时间 | 主要变化 |
| --- | --- | --- |
| v0.5.0 | 2026-07-18 | `exec` 改为事务化多语句执行；新增 `--db` 覆盖库名 |
| v0.6.0 | 2026-08-08 | 依赖更新 |
| v0.7.0 | 2026-09-21 | 内部抽出 `internal/runtime`，修掉 4 个行为问题 |
| v0.8.0 | 2026-09-28 | 支持 `fs.FS` / `embed.FS` 嵌入式迁移 |

命令还是 `create / init / up / down / skip / status / show / exec`。原有脚本可以继续用。

## 迁移文件可以嵌进二进制

部署一个小服务时，二进制旁边通常还要放一个 `migrations/` 目录。容器镜像要多写一条 `COPY`，程序的工作目录也必须对上。目录漏掉，或者镜像里的文件不是这次构建带的那份，`miglite status` 仍可能显示没有待执行迁移，排查起来很费时间。

现在可以把 SQL 文件直接 `embed` 进二进制：

```go
package main

import (
	"embed"

	"github.com/gookit/miglite"
	"github.com/gookit/miglite/pkg/command"

	_ "modernc.org/sqlite"
)

//go:embed migrations/*.sql
var migrationFS embed.FS

func main() {
	mig, err := miglite.NewAuto(func(cfg *miglite.Config) {
		// 这里是 embed.FS 里的逻辑目录，不是磁盘路径
		cfg.Migrations.Path = "migrations"
	})
	if err != nil {
		panic(err)
	}

	// 也可以用 miglite.NewWithConfigAndFS(cfg, migrationFS)
	mig.SetFS(migrationFS).SetSqlDB(db)
	if err := mig.Up(command.UpOption{Yes: true}); err != nil {
		panic(err)
	}
}
```

这段代码有几个容易踩到的地方：

- `cfg.Migrations.Path` 在 `SetFS` 之后是 io/fs 的逻辑路径（正斜杠分隔），不再是磁盘目录。
- `SetFS(nil)` 会恢复从本地文件系统读取，想两种模式都支持时可以用它切换。
- 嵌入的文件系统是只读的，所以 `create` 命令仍然写本地磁盘，没法往 `embed.FS` 里加文件。
- 新增的 API 有 `Migrator.SetFS`、`NewWithConfigAndFS`、根包的 `miglite.BindFS`，`pkg/migration` 也补了 `ParseFS`、`FindMigrationsFS`、`MigrationsFromFS` 这些 FS 版本函数。

如果自己的 CLI 复用了 miglite 的命令，而不是直接调用 `cmd/miglite`，在 `app.Run()` 前调用一次 `miglite.BindFS(migrationFS)`，命令处理器就会从这个文件系统读取迁移文件。

## `--db`：临时换一个库

调试或跑测试时，我经常需要在同一个数据库实例上换一个库名，比如拿生产数据的副本验证迁移。为此修改配置或环境变量，做完后很容易忘记改回去。

v0.5.0 加了全局参数 `--db`：

```bash
# 只看某个库的迁移状态
miglite --db new_db status

# 在指定库上执行 SQL
miglite exec --db new_db --yes "SELECT current_database();"
```

它会覆盖 YAML、`DATABASE_DSN` 或 `DATABASE_URL` 里的数据库名；SQLite 则使用它指定的数据库文件路径。参数只对当前命令生效，也不会改写配置文件。

## `exec` 现在是事务化的多语句执行

过去 `exec` 会把一段 SQL 一条条交给数据库。中间某条失败时，前面的语句已经生效，后面的也不会再执行，数据库就停在半完成状态。

现在 `exec` 先用 `SplitSQL` 拆分语句，再放进同一个事务里执行，全部成功后才提交；查询语句通过 `Query` 执行并打印结果集：

```bash
miglite exec --yes ./scripts/import-seed.sql
```

事务仍受数据库本身的规则限制。MySQL 的部分 DDL 会隐式提交，事务无法把它们包住。`miglite` 只能保证自己的执行方式，DDL 能不能回滚仍由数据库引擎决定。迁移文件也一样。

## 四个“看着像能用”的行为修掉了

v0.7.0 把 `pkg/command` 里的包级全局状态移到了 `internal/runtime`。每次调用都会创建一个 `Runtime`，里面包含配置、连接、文件系统和连接所有权；CLI 和库也因此走同一条输出路径。这个重构带来了几个行为变化：

- `up --skip-err` 现在真的会跳过失败文件并继续执行后面的迁移。命令结束时仍然返回错误，CLI 退出码也仍然是非 0；它只是继续跑，不代表成功。

```bash
miglite up --yes --skip-err
```

- 通过 `SetSqlDB(db)` 注入的 `*sql.DB` 归调用方所有，`miglite` 不会在调用结束时关闭它。只有按配置打开的连接才由 miglite 负责关闭。常驻服务可以复用自己的连接池，不会被命令调用误关。
- 没有 `DOWN` 区块的文件会明确跳过。`down` 会报告 `empty_down` 状态，只有真正执行回滚时才会调用 after 钩子。
- 失败时不再打印成功横幅。脚本或值班时只看最后一行，也不会把失败误看成成功。

## 作为库使用的当前写法

主包仍然基于 `database/sql`，不会默认绑定具体驱动，这一点和 v0.4.0 一样。作为库调用时，可以这样写：

```go
mig, err := miglite.NewWithConfig(cfg) // 或 NewAuto / New(configFile)
if err != nil {
	return err
}

if err = mig.SetSqlDB(db).Init(command.InitOption{}); err != nil {
	return err
}
if err = mig.Up(command.UpOption{Yes: true}); err != nil {
	return err
}
if err = mig.Status(command.StatusOption{}); err != nil {
	return err
}
```

库调用和 CLI 有几处区别：

- 库调用不需要确认，`Yes` 只影响 CLI 的交互提示。
- 库调用会打印和 CLI 一样的进度输出，两者共用 v0.7.0 抽出的输出路径。
- 不需要用完关闭：传进来的 `*sql.DB` 归你管，`miglite` 自己按配置打开的连接在每次调用结束时就会关掉。

## 要不要升级

从 v0.4.0 升到 v0.8.0，不需要改命令、配置或迁移文件格式。升级后只需要检查两件事：

- 如果脚本以前依赖 `up --skip-err` 在第一处失败时停止，需要重新检查退出码处理。现在它会继续跑完后面的文件。
- 如果代码传入了自己的 `*sql.DB`，升级后连接不再由 miglite 关闭；以前为此加的补偿代码可以删掉。

如果服务按单二进制部署，v0.8.0 的 `embed.FS` 可以把 `migrations` 目录从镜像里拿掉。本地 SQLite 的用法不用跟着改，v0.4.0 的写法仍然有效。

- 工具链接仓库 [gookit/miglite](https://github.com/gookit/miglite)
- 快速安装 `go install github.com/gookit/miglite/cmd/miglite@latest`
- 或者用 [eget](https://github.com/inherelab/eget) 安装：`eget install gookit/miglite`。
