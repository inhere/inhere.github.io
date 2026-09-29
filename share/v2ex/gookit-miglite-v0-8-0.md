## 标题

给 Go 小服务用的数据库迁移工具，v0.8.0 支持把 SQL 嵌进二进制

## 正文

我维护的 [gookit/miglite](https://github.com/gookit/miglite) 最近发了 v0.8.0。它一直坚持用原始 SQL 文件做迁移，不引入 schema DSL。这个版本新增 `fs.FS` / `embed.FS` 支持，部署小服务时可以用 `go:embed` 把 `migrations/` 放进二进制，不用再在镜像里单独 `COPY` 一个目录。

另外修了几个“参数能传进去，但实际没生效”的问题：`up --skip-err` 会继续跑后面的文件但返回错误；通过 `SetSqlDB` 注入的连接归调用方管理；没有 `DOWN` 区块的迁移会明确标成跳过。

文章写了这次升级的细节和取舍：
https://inhere.github.io/blog/2026/gookit-miglite-v0-8-0/

仓库： https://github.com/gookit/miglite

想听听大家的做法：Go 小服务的迁移文件，你们会和二进制一起打包，还是继续单独挂目录？
