+++
title = "PHP - EasyTpl"
description = "easytpl - 简单快速的 PHP 模板引擎。"
weight = 21

[taxonomies]
tags = ["php", "toolkit"]

[extra]
+++

`easytpl` - ⚡️ 简单快速的 PHP 模板引擎。

> [!TIP]
> Github 仓库 [https://github.com/phppkg/easytpl](https://github.com/phppkg/easytpl)

## 功能特性

- 简单、轻量且快速。
  - 无学习成本
  - 仅仅简单处理并转换为原生PHP语法
  - 兼容PHP原生语法使用
- 更加简单的输出语法。 例如：`{{ var }}` `{{= $var }}` `{{ $var }}` `{{ echo $var }}`
  - 允许忽略前缀 `$`，将在编译时自动追加
- 支持链式访问数组值。 例如：`{{ $arr.0 }}` `{{ $map.name }}` `{{ $map.user.name }}`
- 支持所有控制语法。 例如 `if,elseif,else;foreach;for;switch`
- 支持使用PHP内置函数作为过滤器。 例如：`{{ $var | ucfirst }}` `{{ date('Y-m-d') }}`
- 更加安全，默认会自动通过 `htmlspecialchars` 将输出结果进行处理
  - 除非设置了禁用或者手动使用 `raw` 过滤器
- 支持添加自定义过滤器
  - 默认内置过滤器：`upper` `lower` `nl`
- 支持添加自定义指令，提供自定义功能
  - `EasyTemplate` 支持使用布局文件. 支持指令: `layout` `include` `contents`
  - `ExtendTemplate` 提供模板继承功能. 支持指令: `extends` `block` `endblock`
- 支持模板中添加注释。 例如: `{{# comments ... #}}`

## 安装

**By Composer**

```bash
composer require phppkg/easytpl
```

> 更多请参考 [README](https://github.com/phppkg/easytpl)
