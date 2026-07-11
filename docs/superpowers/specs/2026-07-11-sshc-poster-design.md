# sshc 博客海报设计

## 目标

为 `content/blog/2026/07-11-sshc-intro.md` 生成一张与站内技术博客海报协调的 `1280×720` 封面图，突出批量执行、逐主机结果与任务日志。

## 构图

- 采用已确认的“终端执行结果”方案。
- 左上显示标题 `sshc` 和副标题 `repeatable SSH workflows for teams`。
- 中部使用深蓝终端窗口，显示以下准确内容：
  - `$ sshc batch-run --group testing -- uptime`
  - `web-1  success  83ms`
  - `web-2  success  91ms`
  - `web-3  failed   exit 1`
  - `Batch ID: 20260711-a1b2`
- 底部显示 `hosts · batch runs · logs · rerun failed`。

## 视觉与生成边界

- GLM 只生成无文字、无 Logo、无水印的背景，内容为淡化的服务器设备、连接线与冷色光影。
- 标题、命令、状态和 Batch ID 全部由本地 Pillow 确定性叠加，避免乱码。
- 成功状态使用绿色，失败状态使用暖橙色，其他文字使用白色、浅蓝灰与青色。
- 背景不应抢过终端窗口，海报缩小到文章列表尺寸后仍需看清 `sshc` 与命令主线。

## 输出与集成

- 最终海报：`static/img/blog/sshc-poster.png`
- 原始背景：`output/imagegen/sshc-glm-bg.png`
- 正文在 `<!-- more -->` 前加入：`![sshc SSH 运维工作流海报](/img/blog/sshc-poster.png)`
- 不修改英文文章，不创建其他尺寸变体。

## 验收

- 最终图片尺寸为 `1280×720`。
- 图片中的文字和命令与本设计完全一致，无模型生成的伪文字。
- 视觉检查无裁切、重叠、低对比度或水印。
- `zola build` 成功，正文图片路径有效。
