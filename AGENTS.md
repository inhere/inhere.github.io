# For AI


- 先写 zh blog，没问题后再参照写 en 版本，避免前期同时修改两份
- 封面海报图，等 zh blog 内容稳定后再生成，避免偏离主旨
- 写完 blog 发布后，还需要发表到可分享站点，不同站点 要求/格式等也有差异，需要详细查看 @share/AGENTS.md

## 工具

默认本机已安装工具：

- zola 当前blog站点的静态渲染工具
- bsk 和对应skill，可以直接使用我的浏览器标签，避免登录等问题。
- gh  github cli

文章封面图两条路径，任选其一：

- 本地生成（不需要任何 API/密钥，确定性输出，风格与已有海报一致）：
  `python script/make-poster.py --title "miglite v0.8.0" --subtitle "embed your migrations in the binary" --card "//go:embed|migrations/*.sql" --card "embed.FS|SetFS(migrationFS)" --card "mig.Up()|no migrations dir" --command "./app up --yes" --note "embedded migrations / own your *sql.DB" --tag "gookit/miglite" --out static/img/blog/<name>-poster.png`
- GLM 生成背景 + 本地叠加文字：见 @.agents/skills/glm-blog-poster/SKILL.md（需要 `BIGMODEL_API_KEY`）

