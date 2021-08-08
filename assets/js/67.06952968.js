(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{500:function(s,t,e){"use strict";e.r(t);var a=e(16),_=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"zsh-自动补全脚本编写"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zsh-自动补全脚本编写"}},[s._v("#")]),s._v(" ZSH 自动补全脚本编写")]),s._v(" "),e("p",[s._v("告诉 zsh 使用哪个函数来完成命令")]),s._v(" "),e("p",[s._v("命令的完成函数存储在名称以下划线 "),e("code",[s._v("_")]),s._v(" 开头的文件中，这些文件应放置在 "),e("code",[s._v("$fpath")]),s._v(" 变量中列出的目录中。您可以通过在 "),e("code",[s._v("~/.zshrc")]),s._v(" 文件中添加这样的行来向 "),e("code",[s._v("$fpath")]),s._v(" 添加目录：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("fpath")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("~/newdir "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$fpath")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("完成函数文件的第一行看起来像这样：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# compdef foobar")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("这告诉 zsh 该文件包含用于完成 foobar 命令的代码。这是第一行最常使用的格式，但如果需要，您也可以使用相同的文件来完成多个不同的功能。\n请参阅"),e("a",{attrs:{href:"http://zsh.sourceforge.net/Doc/Release/Completion-System.html#Autoloaded-files",target:"_blank",rel:"noopener noreferrer"}},[s._v("此处"),e("OutboundLink")],1),s._v("了解更多详情。")]),s._v(" "),e("p",[s._v("你也可以直接使用 "),e("code",[s._v("compdef")]),s._v(" 命令（例如在你的 "),e("code",[s._v("~/.zshrc")]),s._v(" 文件中）告诉 zsh 使用哪个函数来完成这样的命令：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" compdef _function foobar\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("或者对几个命令使用相同的完成：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" compdef _function foobar goocar hoodar\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("或者如果你想提供参数：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" compdef "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("' _function arg1 arg2 '")]),s._v(" foobar\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("请参"),e("a",{attrs:{href:"http://zsh.sourceforge.net/Doc/Release/Completion-System.html#Functions-4",target:"_blank",rel:"noopener noreferrer"}},[s._v("阅此"),e("OutboundLink")],1),s._v("处了解更多详情。")]),s._v(" "),e("h2",{attrs:{id:"编写自己的完成函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编写自己的完成函数"}},[s._v("#")]),s._v(" 编写自己的完成函数")]),s._v(" "),e("p",[s._v("一个很好的入门方法是查看一些已经定义的完成函数。在我的 linux 安装中，这些可以在 "),e("code",[s._v("/usr/share/zsh/functions/Completion/Unix")]),s._v(" 和 "),e("code",[s._v("/usr/share/zsh/functions/Completion/Linux")]),s._v(" 和其他一些子目录中找到。")]),s._v(" "),e("p",[s._v("您会注意到 "),e("code",[s._v("_arguments")]),s._v(" 函数在这些文件中被大量使用。这是一个实用函数，可以轻松编写简单的完成函数。"),e("code",[s._v("_arguments")]),s._v(" 函数是 "),e("code",[s._v("compadd")]),s._v(" 内置函数的包装器。"),e("code",[s._v("compadd")]),s._v(" 内置函数是用于向命令行添加完成词并控制其行为的核心函数。\n但是，大多数情况下您不需要使用 "),e("code",[s._v("compadd")]),s._v("，因为有许多实用函数，例如 "),e("code",[s._v("_arguments")]),s._v(" 和 "),e("code",[s._v("_describe")]),s._v("，它们更易于使用。")]),s._v(" "),e("p",[s._v("对于非常基本的完成，"),e("code",[s._v("_describe")]),s._v(" 函数应该足够了")]),s._v(" "),e("h3",{attrs:{id:"实用功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实用功能"}},[s._v("#")]),s._v(" 实用功能")]),s._v(" "),e("p",[s._v("以下是一些可能有用的实用函数的列表。实用功能的完整列表以及完整的解释可在此处获得。下一节将给出如何使用这些函数的示例。")]),s._v(" "),e("p",[e("strong",[s._v("整体完成的主要实用功能")])]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("函数")]),s._v(" "),e("th",[s._v("说明")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[e("code",[s._v("_alternative")])]),s._v(" "),e("td",[s._v("可用于从其他实用程序函数或 shell 代码生成完成候选。")])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("_arguments")])]),s._v(" "),e("td",[s._v("用于指定如何完成带有 unix 样式选项的命令的单个选项和参数。")])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("_describe")])]),s._v(" "),e("td",[s._v("用于创建由带有描述（但没有动作 "),e("code",[s._v("ACTION")]),s._v("）的单词组成的简单完成。比 "),e("code",[s._v("_arguments")]),s._v(" 更容易使用")])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("_gnu_generic")])]),s._v(" "),e("td",[s._v("可用于完成理解 "),e("code",[s._v("--help")]),s._v(" 选项的命令的选项。")])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("_regex_arguments")])]),s._v(" "),e("td",[s._v("创建一个函数，用于将命令行参数与正则表达式匹配，然后执行操作/完成。")])])])]),s._v(" "),e("p",[e("strong",[s._v("用于执行单个单词的复杂完成的函数")])]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("函数")]),s._v(" "),e("th",[s._v("说明")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[e("code",[s._v("_values")])]),s._v(" "),e("td",[s._v("用于完成任意关键字（值）及其参数，或此类组合的逗号分隔列表。")])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("_combination")])]),s._v(" "),e("td",[s._v("用于完成值的组合，例如主机名和用户名对。")])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("_multi_parts")])]),s._v(" "),e("td",[s._v("用于分别完成单词的多个部分，其中每个部分由一些字符分隔，例如用于完成部分文件路径："),e("code",[s._v("/u/i/sy -> /usr/include/sys")])])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("_sep_parts")])]),s._v(" "),e("td",[s._v("与 _multi_parts 类似，但允许在完成的不同部分使用不同的分隔符。")])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("_sequence")])]),s._v(" "),e("td",[s._v("用作另一个完成函数的包装器，以完成由该其他函数生成的分隔匹配列表。")])])])]),s._v(" "),e("p",[e("strong",[s._v("用于完成特定类型对象的函数")])]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("函数")]),s._v(" "),e("th",[s._v("说明")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[e("code",[s._v("_path_files")])]),s._v(" "),e("td",[s._v("用于完成文件路径。采取多种选择来控制行为。")])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("_files")])]),s._v(" "),e("td",[s._v("使用除 "),e("code",[s._v("-g")]),s._v(" 和 "),e("code",[s._v("-/")]),s._v(" 之外的所有选项调用 "),e("code",[s._v("_path_files")]),s._v("。这些选项取决于文件模式样式设置。")])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("_net_interfaces")])]),s._v(" "),e("td",[s._v("用于补全网络接口名称")])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("_users")])]),s._v(" "),e("td",[s._v("用于填写用户名")])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("_groups")])]),s._v(" "),e("td",[s._v("用于完成组名")])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("_options")])]),s._v(" "),e("td",[s._v("用于补全 shell 选项的名称。")])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("_parameters")])]),s._v(" "),e("td",[s._v("用于完成 shell 参数/变量的名称（可以限制为匹配模式的那些）")])])])]),s._v(" "),e("p",[e("strong",[s._v("处理缓存完成的函数")])]),s._v(" "),e("p",[s._v("如果您有大量完成，您可以将它们保存在缓存文件中，以便快速加载完成。")]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("函数")]),s._v(" "),e("th",[s._v("说明")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[e("code",[s._v("_cache_invalid")])]),s._v(" "),e("td",[s._v("指示与给定缓存标识符对应的完成缓存是否需要重建")])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("_retrieve_cache")])]),s._v(" "),e("td",[s._v("从缓存文件中检索完成信息")])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("_store_cache")])]),s._v(" "),e("td",[s._v("在缓存文件中存储与给定缓存标识符相对应的完成")])])])]),s._v(" "),e("p",[e("strong",[s._v("其他功能")])]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("函数")]),s._v(" "),e("th",[s._v("说明")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[e("code",[s._v("_message")])]),s._v(" "),e("td",[s._v("用于在无法生成完成的地方显示帮助消息。")])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("_regex_words")])]),s._v(" "),e("td",[s._v("可用于为 "),e("code",[s._v("_regex_arguments")]),s._v(" 命令生成参数。这比手动编写参数更容易。")])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("_guard")])]),s._v(" "),e("td",[s._v("可用于 "),e("code",[s._v("_arguments")]),s._v(" 的规范的 "),e("code",[s._v("ACTION")]),s._v(" 和类似函数来检查正在完成的单词。")])])])]),s._v(" "),e("p",[e("strong",[s._v("动作 Action")])]),s._v(" "),e("p",[s._v("许多实用函数，例如 "),e("code",[s._v("_arguments")]),s._v(" "),e("code",[s._v("_regex_arguments")]),s._v(" "),e("code",[s._v("_alternative")]),s._v(" 和 "),e("code",[s._v("_values")]),s._v(" 可能在选项/参数规范的末尾包含一个动作。此动作指示如何完成相应的参数。动作 "),e("code",[s._v("Action")]),s._v(" 可以采用以下形式之一：")]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("函数")]),s._v(" "),e("th",[s._v("说明")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[e("code",[s._v("()")])]),s._v(" "),e("td",[s._v("需要参数，但不会生成匹配项。")])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("(ITEM1 ITEM2)")])]),s._v(" "),e("td",[s._v("可能匹配项列表")])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("((ITEM1\\:'DESC1' ITEM2\\:'DESC2'))")])]),s._v(" "),e("td",[s._v("可能的匹配列表，附带描述信息。注意：Action 中的引号不能和其所在的参数格式字符串的引号相同")])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("->STRING")])]),s._v(" "),e("td",[s._v("将"),e("code",[s._v("$state")]),s._v("设置为字符串并继续（"),e("code",[s._v("$state")]),s._v("可在实用功能调用后在案例陈述中检查）")])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("FUNCTION")])]),s._v(" "),e("td",[s._v("用于生成匹配或执行某些其他操作的函数名称. 例如 "),e("code",[s._v("_files")]),s._v(" 或 "),e("code",[s._v("_message")])])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("{EVAL-STRING}")])]),s._v(" "),e("td",[s._v("将字符串评估为 shell 代码以生成匹配项。这可用于调用带有参数的实用程序函数，例如 "),e("code",[s._v("_values")]),s._v(" 或 "),e("code",[s._v("_describe")])])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("=ACTION")])]),s._v(" "),e("td",[s._v("在完成命令行中插入一个虚拟词而且不会改变补全位置节点")])])])]),s._v(" "),e("p",[s._v("并非所有操作类型都可用于使用它们的所有实用功能。例如，->string 类型在_regex_arguments或_alternative功能中不可用。")]),s._v(" "),e("h3",{attrs:{id:"使用-describe-编写简单的完成函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-describe-编写简单的完成函数"}},[s._v("#")]),s._v(" 使用 _describe 编写简单的完成函数")]),s._v(" "),e("p",[e("code",[s._v("_describe")]),s._v(" 函数可用于简单的补全，其中选项/参数的顺序和位置并不重要。您只需要创建一个数组参数来保存选项及其描述，然后将参数名称作为参数传递给 "),e("code",[s._v("_describe")]),s._v("。下面的示例创建完成候选 c 和 d，以及描述（注意这应该放在 "),e("code",[s._v("$fpath")]),s._v(" 中列出的某个目录中名为 "),e("code",[s._v("_cmd")]),s._v(" 的文件中）。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#compdef cmd")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" -a subcmds\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("subcmds")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'c:description for c command'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'d:description for d command'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n_describe "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'command'")]),s._v(" subcmds\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("您可以使用以下由双连字符分隔的多个不同列表，但请注意，这混合了单个标题下的匹配项，并且不打算与不同类型的完成候选者一起使用：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" -a subcmds topics\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("subcmds")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'c:description for c command'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'d:description for d command'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("topics")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'e:description for e help topic'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'f:description for f help topic'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n_describe "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'command'")]),s._v(" subcmds -- topics\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("如果两个候选人有相同的描述，"),e("code",[s._v("_describe")]),s._v(" 将它们收集在同一行中，并确保描述在列中整齐对齐。"),e("code",[s._v("_describe")]),s._v(" 函数可以在 "),e("code",[s._v("ACTION")]),s._v(" 中用作 "),e("code",[s._v("_alternative")]),s._v("、"),e("code",[s._v("_arguments")]),s._v(" 或 "),e("code",[s._v("_regex_arguments")]),s._v(" 规范的一部分。在这种情况下，您必须将它的参数放在大括号中，例如 "),e("code",[s._v("'TAG:DESCRIPTION:{_describe 'values' options}'")])]),s._v(" "),e("h3",{attrs:{id:"使用-alternative-编写完成函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-alternative-编写完成函数"}},[s._v("#")]),s._v(" 使用 _alternative 编写完成函数")]),s._v(" "),e("p",[s._v("与 "),e("code",[s._v("_describe")]),s._v(" 一样，此函数执行简单的补全，其中选项/参数的顺序和位置并不重要。然而，与 _describe 不同的是，可以调用其他函数而不是固定匹配来生成完成候选。此外，_alternative 允许混合不同类型的完成候选。")]),s._v(" "),e("p",[s._v("作为参数，它采用 "),e("code",[s._v("'TAG:DESCRIPTION:ACTION'")]),s._v(" 形式的规范列表，其中 TAG 是标识完成匹配类型的特殊标签，DESCRIPTION 用作标题来共同描述完成候选组，而 ACTION是前面列出的动作类型之一（除了 "),e("code",[s._v("->STRING")]),s._v(" 和 "),e("code",[s._v("=ACTION")]),s._v(" 形式）。例如：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("_alternative "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'arguments:custom arg:(a b c)'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'files:filename:_files'")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("第一个规范添加完成候选 a、b 和 c，第二个规范调用 "),e("code",[s._v("_files")]),s._v(" 函数来完成文件路径。")]),s._v(" "),e("p",[s._v("我们可以用 "),e("code",[s._v("\\")]),s._v(" 将规范分成几行，并为每个自定义参数添加描述，如下所示：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("_alternative "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'args:custom arg:((a\\:"description a" b\\:"description b" c\\:"description c"))\'')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'files:filename:_files'")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("如果我们想将参数传递给 "),e("code",[s._v("_files")]),s._v("，它们可以简单地包含在内，如下所示：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("_alternative "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'args:custom arg:((a\\:"description a" b\\:"description b" c\\:"description c"))\'')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'files:filename:_files -/'")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("要使用参数扩展来创建我们的完成列表，我们必须使用双引号来引用规范，例如：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("_alternative "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dirs:user directory:('),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$userdirs")]),s._v(')"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pids:process ID:('),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -A o "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("pid")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(')"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("在这种情况下，第一个规范添加存储在 "),e("code",[s._v("$userdirs")]),s._v(" 变量中的单词，第二个规范评估 "),e("code",[s._v("'ps -A o pid='")]),s._v(" 以获取用作完成候选的 pid 列表。在实践中，我们会为此使用现有的 "),e("code",[s._v("_pids")]),s._v(" 函数。")]),s._v(" "),e("p",[s._v("我们可以使用其他实用函数，例如 ACTION 中的 "),e("code",[s._v("_values")]),s._v(" 来执行更复杂的完成，例如：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("_alternative "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"directories:user directory:('),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$userdirs")]),s._v(')"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'options:comma-separated opt: _values -s , letter a b c'")]),s._v("\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("这将完成 "),e("code",[s._v("$userdirs")]),s._v(" 中的项目，以及包含 "),e("code",[s._v("a, b &/or c")]),s._v(" 的逗号分隔列表。注意 "),e("code",[s._v("_values")]),s._v(" 之前的初始空格的使用。这是必需的，因为 "),e("code",[s._v("_values")]),s._v(" 不理解用于描述的标准 compadd 选项。")]),s._v(" "),e("p",[s._v("与 "),e("code",[s._v("_describe")]),s._v(" 一样，"),e("code",[s._v("_alternative")]),s._v(" 函数本身可以作为 "),e("code",[s._v("_arguments")]),s._v(" 或 "),e("code",[s._v("_regex_arguments")]),s._v(" 规范的一部分在 "),e("code",[s._v("ACTION")]),s._v(" 中使用。")]),s._v(" "),e("h3",{attrs:{id:"使用-arguments-编写完成函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-arguments-编写完成函数"}},[s._v("#")]),s._v(" 使用 _arguments 编写完成函数")]),s._v(" "),e("p",[s._v("通过对 _arguments 函数的一次调用，您可以创建相当复杂的完成函数。它旨在处理带有各种选项和一些普通参数的典型命令。与 _alternative 函数一样，_arguments 将规范字符串列表作为参数。这些规范字符串指定选项和任何相应的选项参数（例如 -f 文件名）或命令参数。")]),s._v(" "),e("p",[s._v("基本选项规范采用 "),e("code",[s._v("'-OPT[DESCRIPTION]'")]),s._v(" 的形式，例如：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sort output: 排序输出")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# long output: 长输出")]),s._v("\n_arguments "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-s[sort output]'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--l[long output]'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-l[long output]'")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("可以在 "),e("code",[s._v("'-OPT[DESCRIPTION]:MESSAGE:ACTION'")]),s._v(" 形式的选项描述之后指定选项的参数，其中 MESSAGE 是要显示的消息，而 ACTION 可以是上面 ACTIONS 部分中提到的任何形式。例如：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("_arguments "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-f[input file]:filename:_files'")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("命令参数规范采用 "),e("code",[s._v("'N:MESSAGE:ACTION'")]),s._v(" 形式，其中 "),e("code",[s._v("N")]),s._v(" 表示它是第 "),e("code",[s._v("N")]),s._v(" 个命令参数，而 "),e("code",[s._v("MESSAGE & ACTION")]),s._v(" 和以前一样。如果省略 N，则它仅表示下一个命令参数（在任何已指定的参数之后）。如果在开头（在 "),e("code",[s._v("N")]),s._v(" 之后）使用 "),e("em",[s._v("双冒号")]),s._v("，则该参数是可选的。例如：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("_arguments "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-s[sort output]'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1:first arg:_net_interfaces'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'::optional arg:_files'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("':next arg:(a b c)'")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("这里第一个 arg 是网络接口，下一个可选 "),e("code",[s._v("arg")]),s._v(" 是文件名，最后一个 "),e("code",[s._v("arg")]),s._v(" 可以是 a、b 或 c，并且 "),e("code",[s._v("-s")]),s._v(" 选项可以在任何位置完成。")]),s._v(" "),e("p",[e("code",[s._v("_arguments")]),s._v(" 函数允许使用上面 "),e("code",[s._v("ACTION")]),s._v(" 部分中列出的全套 ACTION 表单。这意味着您可以使用操作来选择 "),e("code",[s._v("case")]),s._v(" 语句分支，如下所示：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("_arguments "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-m[music file]:filename:->files'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-f[flags]:flag:->flags'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$state")]),s._v('"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v("\n    files"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" -a music_files\n        "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("music_files")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" Music/**/*."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("mp3,wav,flac,ogg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        _multi_parts / music_files\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    flags"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        _values -s , "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'flags'")]),s._v(" a b c d e\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("esac")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("在这种情况下，音乐文件(music_files)的路径使用 "),e("code",[s._v("_multi_parts")]),s._v(" 函数逐步降序完成，标志使用 "),e("code",[s._v("_values")]),s._v(" 函数作为逗号分隔的列表完成。")]),s._v(" "),e("p",[s._v("我这里刚刚给你介绍了 "),e("code",[s._v("_arguments")]),s._v(" 规范的基础知识，你还可以指定互斥选项、重复选项&参数、以+开头的选项而不是-等，更多细节参见"),e("a",{attrs:{href:"http://zsh.sourceforge.net/Doc/Release/Completion-System.html#Completion-System",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),e("OutboundLink")],1),s._v("。\n另请查看本文档末尾提到的教程，以及"),e("a",{attrs:{href:"https://github.com/vapniks/zsh-completions/tree/master/src",target:"_blank",rel:"noopener noreferrer"}},[s._v("src 目录"),e("OutboundLink")],1),s._v("中的完成功能。")]),s._v(" "),e("h2",{attrs:{id:"测试与调试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试与调试"}},[s._v("#")]),s._v(" 测试与调试")]),s._v(" "),e("p",[s._v("要重新加载完成功能：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" unfunction _func\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" autoload -U _func\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("可以调用以下函数来获取有用的信息。如果默认键绑定不起作用，您可以尝试按 "),e("code",[s._v("Alt+x")]),s._v("，然后输入命令名称。")]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("功能")]),s._v(" "),e("th",[s._v("默认键绑定")]),s._v(" "),e("th",[s._v("描述")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[e("code",[s._v("_complete_help")])]),s._v(" "),e("td",[e("code",[s._v("Ctrl+xh")])]),s._v(" "),e("td",[s._v("显示有关在当前光标位置完成时使用的上下文名称、标签和完成函数的信息")])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("_complete_help")])]),s._v(" "),e("td",[e("code",[s._v("Alt+2 Ctrl+xh")])]),s._v(" "),e("td",[s._v("如上所述，但显示更多信息")])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("_complete_debug")])]),s._v(" "),e("td",[e("code",[s._v("Ctrl+x ?")])]),s._v(" "),e("td",[s._v("执行普通完成，但在临时文件中捕获完成系统执行的 shell 命令的跟踪")])])])]),s._v(" "),e("h2",{attrs:{id:"陷阱-注意事项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#陷阱-注意事项"}},[s._v("#")]),s._v(" 陷阱（注意事项）")]),s._v(" "),e("p",[s._v("请记住在包含完成函数的文件的开头包含 "),e("code",[s._v("#compdef")]),s._v(" 行。")]),s._v(" "),e("p",[s._v("注意对 "),e("code",[s._v("_arguments")]),s._v(" 或 "),e("code",[s._v("_regex_arguments")]),s._v(" 的规范使用正确的引用类型：如果规范中存在需要扩展的参数，请使用双引号，否则使用单引号，并确保在项目描述周围使用不同的引号。")]),s._v(" "),e("p",[s._v("检查您在 "),e("code",[s._v("_arguments")]),s._v(" 、"),e("code",[s._v("_alternative")]),s._v(" 、 "),e("code",[s._v("_regex_arguments")]),s._v(" 等规范的正确位置是否有正确数量的 "),e("code",[s._v(":")]),s._v("。")]),s._v(" "),e("p",[s._v("记住在使用 "),e("code",[s._v("_regex_arguments")]),s._v(" 时包含一个初始模式来匹配命令词（它不需要匹配操作）。")]),s._v(" "),e("p",[s._v("请记住在 "),e("code",[s._v("_regex_arguments")]),s._v(" 的任何 "),e("code",[s._v("PATTERN")]),s._v(" 参数的末尾放置一个空字符 "),e("code",[s._v("$'\\0'")])]),s._v(" "),e("h2",{attrs:{id:"提示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#提示"}},[s._v("#")]),s._v(" 提示")]),s._v(" "),e("p",[s._v("有时你会遇到这样的情况，在子命令之后只有一个选项，当在子命令之后按下 tab 时，zsh 会自动完成这个。相反，如果您希望在完成之前将其与其描述一起列出，您可以向 "),e("code",[s._v("ACTION")]),s._v(" 添加另一个空选项（即 "),e("code",[s._v("\\:")]),s._v("），如下所示 "),e("code",[s._v("':TAG:DESCRIPTION:((opt1\\:”description for opt1” \\:))'")]),s._v(" 请注意这一点仅适用于在其规范参数（"),e("code",[s._v("_arguments")]),s._v("、"),e("code",[s._v("_regex_arguments")]),s._v(" 等）中使用 "),e("code",[s._v("ACTION")]),s._v(" 的实用程序函数")]),s._v(" "),e("blockquote",[e("p",[s._v("本文翻译自 "),e("a",{attrs:{href:"https://github.com/zsh-users/zsh-completions/blob/master/zsh-completions-howto.org",target:"_blank",rel:"noopener noreferrer"}},[s._v("zsh-users/zsh-completions"),e("OutboundLink")],1)])]),s._v(" "),e("blockquote",[e("p",[s._v("TIP: 更完整的翻译文章参看 http://chuquan.me/2020/10/02/zsh-completion-tutorial/")])])])}),[],!1,null,null,null);t.default=_.exports}}]);