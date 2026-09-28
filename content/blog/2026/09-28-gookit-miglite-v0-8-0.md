---
title: miglite v0.8.0：迁移文件可以嵌进二进制了
date: 2026-09-28T22:45:00
taxonomies:
  tags: [gookit, golang, miglite, database, cli]
slug: gookit-miglite-v0-8-0
---

上一篇写 `miglite` 是 6 月，当时还是 v0.4.0。三个多月过去，它发到了 v0.8.0：`v0.4.0..v0.8.0` 之间 69 个提交，4 次发版。

这次没有推翻原来的设计，改动集中在两件事：**让迁移文件能跟着二进制一起走**，以及**把几个"看起来生效其实没生效"的行为修掉**。

<!-- more -->

- 项目主页：[https://github.com/gookit/miglite](https://github.com/gookit/miglite)
- API 文档：[https://pkg.go.dev/github.com/gookit/miglite](https://pkg.go.dev/github.com/gookit/miglite)
- 上一篇：[miglite：用原始 SQL 文件管理数据库迁移](/blog/2026/gookit-miglite-intro/)
- 最新版本：[v0.8.0](https://github.com/gookit/miglite/releases/tag/v0.8.0)

## 这几个月改了什么

| 版本 | 时间 | 主要变化 |
| --- | --- | --- |
| v0.5.0 | 2026-07-18 | `exec` 改为事务化多语句执行；新增 `--db` 覆盖库名 |
| v0.6.0 | 2026-08-08 | 依赖更新 |
| v0.7.0 | 2026-09-21 | 内部抽出 `internal/runtime`，修掉 4 个行为问题 |
| v0.8.0 | 2026-09-28 | 支持 `fs.FS` / `embed.FS` 嵌入式迁移 |

命令集合没变，还是 `create / init / up / down / skip / status / show / exec`，所以升级不用改脚本。下面挑重点说。

## 迁移文件可以嵌进二进制

这是 v0.8.0 的主要功能，也是最实际的一个。

以前部署一个小服务，二进制旁边总得挂一个 `migrations/` 目录。用容器更明显：镜像里要 `COPY` 一次迁移目录，还要保证工作目录别搞错。文件一旦漏了，或者镜像里的版本对不上，`miglite status` 就会告诉你"没有待执行迁移"——这种错还不好发现。

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

几个细节值得先记住：

- `cfg.Migrations.Path` 在 `SetFS` 之后是 **io/fs 的逻辑路径**（正斜杠分隔），不再是磁盘目录。
- `SetFS(nil)` 会恢复从本地文件系统读取，想两种模式都支持时可以用它切换。
- 嵌入的文件系统是只读的，所以 `create` 命令仍然写本地磁盘——它不会、也没法往 `embed.FS` 里加文件。
- 新增的 API 有 `Migrator.SetFS`、`NewWithConfigAndFS`、根包的 `miglite.BindFS`，`pkg/migration` 也补了 `ParseFS`、`FindMigrationsFS`、`MigrationsFromFS` 这些 FS 版本函数。

如果是在自己的 CLI 里复用 miglite 的命令（而不是直接用 `cmd/miglite`），在 `app.Run()` 之前调一次 `miglite.BindFS(migrationFS)`，后面的命令处理就会从这个文件系统里找迁移文件。

## `--db`：临时换一个库

调试或者跑测试时，经常需要在同一个实例上换个库名操作，比如拿生产数据导出的副本验证迁移。为了这个去改配置或者改环境变量，很容易忘记改回来。

v0.5.0 加了全局参数 `--db`：

```bash
# 只看某个库的迁移状态
miglite --db new_db status

# 在指定库上执行 SQL
miglite exec --db new_db --yes "SELECT current_database();"
```

它会覆盖来自 YAML、`DATABASE_DSN` 或 `DATABASE_URL` 里的数据库名；对 SQLite 则是覆盖数据库文件路径。这个参数只在当前命令生效，不会写回配置文件。

## `exec` 现在是事务化的多语句执行

以前把一段 SQL 交给 `exec`，它是一条一条丢给数据库的。中间某条失败，前面的已经生效了，后面的没跑，状态就卡在中间。

现在 `exec` 会先把 SQL 按语句拆开（`SplitSQL`），然后在一个事务里依次执行，全部成功才提交；查询语句走 `Query` 并打印结果集：

```bash
miglite exec --yes ./scripts/import-seed.sql
```

要注意的还是数据库本身的行为：MySQL 的部分 DDL 会隐式提交，事务包不住。`miglite` 能保证自己的执行方式是事务化的，但 DDL 的可回滚性最终取决于引擎。这点和迁移执行时是一样的。

## 四个"看着像能用"的行为修掉了

v0.7.0 把逻辑从 `pkg/command` 里的包级全局状态抽成了 `internal/runtime`：每次调用构造一个 `Runtime`（配置 + 连接 + 文件系统 + 连接所有权），CLI 和库共用同一条输出路径。重构本身不该由用户感知，但它顺手修掉了几个真实问题：

- **`up --skip-err` 以前是"接受了但没生效"**。现在失败的文件会被跳过并继续执行后面的迁移，命令结束时仍然返回错误、CLI 退出码非 0——继续跑完不等于当作成功。

```bash
miglite up --yes --skip-err
```

- **注入的 `*sql.DB` 不再被关闭了**。用 `SetSqlDB(db)` 传进去的连接归调用方所有，`miglite` 不再在结束时关掉它；只有它自己按配置打开的连接才会被自己关闭。这个区别在常驻服务里很关键，之前会导致连接被莫名其妙地关掉。
- **没有 `DOWN` 区块的文件，现在会明确"跳过"**。以前 `down` 遇到这类文件容易给人"回滚了"的错觉；现在会以 `empty_down` 状态报告为跳过，只有真正执行了回滚才会走到 after 钩子。
- **失败时不再打印成功横幅**。听起来是小事，但脚本里靠肉眼扫输出时，"最后一行写着成功"会掩盖失败。

## 作为库使用的当前写法

主包依然基于 `database/sql`，不默认绑定具体驱动——这点和 v0.4.0 一致。现在完整的用法大概是这样：

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

几个和 CLI 不同的地方：

- 库调用不需要确认，`Yes` 只影响 CLI 的交互提示。
- 库调用会打印和 CLI 一样的进度输出，这正是 v0.7.0 抽出的那条共享输出路径。
- 不需要"用完关闭"：传进来的 `*sql.DB` 归你管，`miglite` 自己按配置打开的连接在每次调用结束时就会关掉。

## 要不要升级

一个小版本跨到下一个大功能点，`miglite` 这次没有破坏性改动：命令没删、配置没改、迁移文件格式没动。升级后建议顺手确认两件事：

- 如果你之前依赖 `up --skip-err` 的"人肉重试"流程，现在它真的会跳过了，检查一下脚本里的判断逻辑。
- 如果代码里传过自己的 `*sql.DB`，升级后连接不再会被关闭，之前为了绕开这个问题加的补偿代码可以删掉了。

如果你的服务是单二进制部署、又不想在镜像里管一个 `migrations` 目录，v0.8.0 的 `embed.FS` 支持正好省掉这件事；如果你只是想在本地 SQLite 上把 schema 管起来，v0.4.0 那套用法现在依然原样能用。

工具链接再放一次：仓库 [gookit/miglite](https://github.com/gookit/miglite)，`go install github.com/gookit/miglite/cmd/miglite@latest`，或者用 [eget](https://github.com/inherelab/eget) 装：`eget install gookit/miglite`。
