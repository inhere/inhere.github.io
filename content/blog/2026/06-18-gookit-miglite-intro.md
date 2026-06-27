---
title: miglite：用原始 SQL 文件管理数据库迁移
date: 2026-06-18T15:36:21
taxonomies:
  tags: [gookit, golang, miglite, database]
slug: gookit-miglite-intro
---

数据库迁移工具有两类。一类想帮你描述表结构，再生成 SQL；另一类只管把你写好的 SQL 按顺序跑完，并记录哪些已经执行过。

`github.com/gookit/miglite` 选的是后者。它不试图替代 SQL，也不默认拉一堆数据库驱动进来。它做的事情很窄：发现迁移文件、解析 `UP/DOWN` 区块、在事务里执行 SQL，并把执行状态记到数据库里。

![miglite 数据库迁移海报](/img/blog/miglite-poster.png)

<!-- more -->

- 项目主页：[https://github.com/gookit/miglite](https://github.com/gookit/miglite)
- API 文档：[https://pkg.go.dev/github.com/gookit/miglite](https://pkg.go.dev/github.com/gookit/miglite)
- 最新版本：[v0.4.0](https://github.com/gookit/miglite/releases/tag/v0.4.0)

## 为什么还要再写一个迁移工具

Go 里已经有不少成熟选择，比如 `golang-migrate`、`goose`、`dbmate`。`miglite` 不是为了替代它们，而是为了覆盖一个更轻的场景：

- 项目已经在写原始 SQL，不想再引入一套 schema DSL。
- 服务本身已经带了数据库驱动，不希望迁移库再绑一份驱动依赖。
- 部署环境里只想靠 `DATABASE_URL` 和 `MIGRATIONS_PATH` 跑起来。
- 迁移文件可能按模块分散在多个目录里，但执行顺序仍然要统一。

这些场景用 `miglite` 会比较合适。尤其是内部工具、小服务、插件化项目，迁移这件事没必要比业务代码还重。

## 迁移文件就是 SQL 文件

`miglite` 使用固定的文件名格式：

```text
YYYYMMDD-HHMMSS-{migration-name}.sql
```

比如：

```text
migrations/20251105-102325-create-users-table.sql
```

文件内容分成两个区块：

```sql
-- Migrate:UP
CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  created_at DATETIME NOT NULL
);

-- Migrate:DOWN
DROP TABLE users;
```

`UP` 是必须的，`DOWN` 可以不写。执行 `up` 时跑 `UP` 区块，执行 `down` 时跑 `DOWN` 区块。

这种格式没什么花活，但好处也在这里：DBA 能直接看，线上出问题时也能直接复制 SQL 排查，不需要先理解一套迁移 DSL。

## 命令行可以直接用

安装：

```bash
go install github.com/gookit/miglite/cmd/miglite@latest
```

> [!NOTE]
> 推荐通过 [eget](https://github.com/inherelab/eget) 安装：`eget install gookit/miglite`

创建迁移文件：

```bash
miglite create add-users-table
```

初始化迁移记录表并执行迁移：

```bash
miglite init # 可选，up 会自动 init
miglite up
```

查看状态：

```bash
miglite status
```

回滚最近一次迁移：

```bash
miglite down
```

如果在 CI 或部署脚本里执行，不想每个文件都确认，可以加 `--yes`：

```bash
miglite up --yes
```

只执行前两个待处理迁移：

```bash
miglite up --number 2 --yes
```

这些命令覆盖了日常迁移需要的主路径。

> [!NOTE]
> 除此之外，`miglite exec` 可以直接执行 SQL 语句或 SQL 文件，`miglite show` 可以看数据库表和表结构，适合本地调试。

## 配置可以从文件来，也可以只靠环境变量

最少配置可以只给两个环境变量：

```ini
DATABASE_URL="sqlite://var/app.db"
MIGRATIONS_PATH="./migrations"
```

MySQL 示例：

```ini
DATABASE_URL="mysql://user:passwd@tcp(127.0.0.1:3306)/app_db?charset=utf8mb4&parseTime=True&loc=Local"
MIGRATIONS_PATH="./migrations/mysql"
```

PostgreSQL 示例：

```ini
DATABASE_URL="postgres://host=localhost port=5432 user=app password=secret dbname=app_db sslmode=disable"
MIGRATIONS_PATH="./migrations/postgres"
```

也可以写 `miglite.yaml`：

```yaml
database:
  driver: sqlite
  dsn: ./sqlite_test.db

migrations:
  path: ./migrations
```

默认会尝试加载当前目录下的这些文件：

```text
.env.local
.env.dev
.env
miglite.yaml
miglite.local.yaml
```

配置文件里的值支持环境变量占位：

```yaml
database:
  driver: postgres
  host: localhost
  port: 5432
  user: ${PG_DB_USER}
  password: ${PG_DB_PWD | pg1234abcd}
  dbname: pg_test_db
  ssl_mode: disable
```

这里的默认值语法很适合本地开发：本机可以不配完整环境变量，部署环境再注入真实密码。

## 多目录迁移适合按模块组织

迁移目录可以用逗号分隔：

```ini
MIGRATIONS_PATH="./migrations/core,./migrations/billing,./migrations/report"
```

`miglite` 会扫描这些目录，把找到的 SQL 文件按文件名前缀排序后统一执行。

默认是递归扫描。以下划线开头的目录会被跳过，比如：

```text
migrations/
  core/
    20260101-100000-create-users.sql
  billing/
    20260101-101000-create-orders.sql
  _backup/
    20240101-100000-old.sql
```

`_backup` 里的文件不会被当成迁移执行。这个约定很简单，但在临时备份旧 SQL 时挺实用，至少不用担心误扫进去。

迁移路径还支持 `{driver}`：

```yaml
migrations:
  path: ./migrations/{driver}
```

用 SQLite 跑本地开发、MySQL 或 Postgres 跑线上时，可以把不同数据库的 SQL 放到不同目录。

## 执行时会把 SQL 和记录放进同一个事务

每个迁移文件执行时，`miglite` 会先开启事务，然后执行 `UP` 或 `DOWN` SQL，最后写迁移记录并提交。

也就是说，一个迁移文件要么执行完成并记录状态，要么失败后回滚。对 schema migration 来说，这个行为比“SQL 成功了但记录没写上”要好处理得多。

这里也有现实限制：不是所有数据库、所有 DDL 都能完全按事务语义回滚。MySQL 的部分 DDL 会隐式提交。`miglite` 能保证自己按事务方式执行，但数据库本身的 DDL 行为还是要看具体引擎。

## 作为库使用时不强塞数据库驱动

`miglite` 主包基于 `database/sql`，默认不依赖 MySQL、Postgres、SQLite 的具体驱动。

对库来说，这个取舍很实在。很多 Go 项目已经选好了驱动，比如：

- MySQL 用 `github.com/go-sql-driver/mysql`
- Postgres 用 `github.com/lib/pq` 或 `github.com/jackc/pgx/v5`
- SQLite 用 `modernc.org/sqlite` 或 `github.com/mattn/go-sqlite3`

如果迁移库自己也带一份驱动，依赖会变重，构建也容易被 CGO、驱动注册名之类的问题拖住。

直接用 `miglite` 命令行工具时，驱动已经包含在 CLI 里；把它作为库集成到应用里时，再由你的应用自己选择驱动。

## 它适合什么，不适合什么

适合：

- 你愿意直接维护 SQL 文件。
- 迁移逻辑不复杂，只需要顺序执行和回滚。
- 项目希望少一点依赖。
- 需要 CLI，也可能以后嵌入到自己的 Go 程序里。

不适合：

- 想用 Go 结构体自动生成迁移 SQL。
- 需要跨数据库自动翻译 schema 定义。
- 需要复杂的迁移计划、锁策略或大规模在线 DDL 编排。

这些不是 `miglite` 当前要解决的问题。它更像一把小扳手：放在工具箱里，够用的时候很好用；不够用的时候，也不会假装自己是整套车间。

## 快速试一下

SQLite 本地试用最方便：

```bash
go install github.com/gookit/miglite/cmd/miglite@latest

export DATABASE_URL="sqlite://./demo.db"
export MIGRATIONS_PATH="./migrations"

miglite create create-users-table
miglite init
miglite up --yes
miglite status
```

Windows PowerShell 可以这样写环境变量：

```powershell
$env:DATABASE_URL = "sqlite://./demo.db"
$env:MIGRATIONS_PATH = "./migrations"
```

如果你正在写一个 Go 小服务，只想把 SQL 迁移这件事管起来，而不是引入一整套迁移框架，`miglite` 值得试一下。
