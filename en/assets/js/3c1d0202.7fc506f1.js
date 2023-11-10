"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[371],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var i=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=i.createContext({}),m=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=m(e.components);return i.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=m(n),k=l,c=d["".concat(p,".").concat(k)]||d[k]||s[k]||a;return n?i.createElement(c,r(r({ref:t},u),{},{components:n})):i.createElement(c,r({ref:t},u))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,r=new Array(a);r[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:l,r[1]=o;for(var m=2;m<a;m++)r[m]=n[m];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}k.displayName="MDXCreateElement"},366:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>m});var i=n(1966),l=(n(9496),n(9613));const a={title:"JetBrains \u5e73\u53f0 IDEs \u5e38\u7528\u63d2\u4ef6\u8bb0\u5f55",date:"2023-11-10T14:27",tags:["idea","phpstorm","goland"],authors:"inhere"},r=void 0,o={unversionedId:"tools/jetbrains-ide",id:"tools/jetbrains-ide",title:"JetBrains \u5e73\u53f0 IDEs \u5e38\u7528\u63d2\u4ef6\u8bb0\u5f55",description:"\u516c\u5171\u5e38\u7528\u63d2\u4ef6",source:"@site/docs/tools/02.jetbrains-ide.md",sourceDirName:"tools",slug:"/tools/jetbrains-ide",permalink:"/en/docs/tools/jetbrains-ide",draft:!1,editUrl:"https://github.com/inhere/inhere.github.io/tree/main/docs/tools/02.jetbrains-ide.md",tags:[{label:"idea",permalink:"/en/docs/tags/idea"},{label:"phpstorm",permalink:"/en/docs/tags/phpstorm"},{label:"goland",permalink:"/en/docs/tags/goland"}],version:"current",sidebarPosition:2,frontMatter:{title:"JetBrains \u5e73\u53f0 IDEs \u5e38\u7528\u63d2\u4ef6\u8bb0\u5f55",date:"2023-11-10T14:27",tags:["idea","phpstorm","goland"],authors:"inhere"},sidebar:"tutorialSidebar",previous:{title:"Git\u4f7f\u7528\u624b\u518c",permalink:"/en/docs/tools/Git-tutorial"},next:{title:"npm\u5e38\u7528\u547d\u4ee4",permalink:"/en/docs/tools/npm\u5e38\u7528\u547d\u4ee4"}},p={},m=[{value:"\u516c\u5171\u5e38\u7528\u63d2\u4ef6",id:"\u516c\u5171\u5e38\u7528\u63d2\u4ef6",level:2},{value:"\u5f00\u53d1\u589e\u5f3a",id:"\u5f00\u53d1\u589e\u5f3a",level:3},{value:"\u5de5\u5177",id:"\u5de5\u5177",level:3},{value:"\u4e3b\u9898",id:"\u4e3b\u9898",level:3},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:3},{value:"\u9002\u7528\u4e8e IntelliJ",id:"\u9002\u7528\u4e8e-intellij",level:2},{value:"\u9002\u7528\u4e8e PhpStorm",id:"\u9002\u7528\u4e8e-phpstorm",level:2},{value:"\u9002\u7528\u4e8e GoLand",id:"\u9002\u7528\u4e8e-goland",level:2}],u={toc:m},d="wrapper";function s(e){let{components:t,...n}=e;return(0,l.kt)(d,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u516c\u5171\u5e38\u7528\u63d2\u4ef6"},"\u516c\u5171\u5e38\u7528\u63d2\u4ef6"),(0,l.kt)("h3",{id:"\u5f00\u53d1\u589e\u5f3a"},"\u5f00\u53d1\u589e\u5f3a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},".env file support")," \u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f .env \u6587\u4ef6\u914d\u7f6e\u652f\u6301"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},".ignore")," \u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f \u901a\u7528\u7684 ignore \u6587\u4ef6\u914d\u7f6e\u652f\u6301\u3002eg: .gitignore, .dockerignore ..."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GitToolBox")," \u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f \u901a\u8fc7\u9644\u52a0\u529f\u80fd\u6269\u5c55 Git \u96c6\u6210\uff0c\u663e\u793a\u66f4\u591a\u6709\u7528\u7684git\u4fe1\u606f"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CodeGlance Pro")," \u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f \u663e\u793a\u7c7b\u4f3c\u4e8e SubLineText \u53f3\u4fa7\u7684\u5c0f\u5730\u56fe\uff0c\u65b9\u4fbf\u62d6\u52a8\u9009\u62e9\u4f4d\u7f6e\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PlantUML Integration")," \u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f PlantUML \u7ed8\u56fe\u5de5\u5177\u96c6\u6210\u3002\u73b0\u5728\u6709\u4e86\u4ee3\u7801\u5bfc\u822a\u548c\u7a81\u51fa\u663e\u793a\uff0c\u6548\u679c\u66f4\u597d\u3001\u66f4\u5feb\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GitHub Copilot")," \u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f GitHub Copilot AI \u4ee3\u7801\u81ea\u52a8\u63d0\u793a\u548c\u8865\u5168\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"IdeaVim")," \u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f  \u5728 JetBrains IDEs \u63d0\u4f9bVim\u7c7b\u4f3c\u7684\u6a21\u5f0f\uff0c\u952e\u76d8\u4f7f\u7528\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Quick File Preview")," \u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f \u8be5\u63d2\u4ef6\u53ef\u4ee5\u5728\u9879\u76ee\u89c6\u56fe\u4e2d\u7b80\u5355\u5730\u9009\u62e9\u6587\u4ef6\u6765\u5feb\u901f\u9884\u89c8/\u6253\u5f00/\u7f16\u8f91\u6587\u4ef6 - \u7c7b\u4f3c\u4e8e Sublime \u6216 VSCode \u4e2d\u7684\u9884\u89c8"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CharAutoReplace")," \u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f \u4e2d\u6587\u5b57\u7b26(",(0,l.kt)("inlineCode",{parentName:"li"},"\u3001\uff0c\u3002\uff1b"),"\u7b49)\u81ea\u52a8\u66ff\u6362\u6210\u82f1\u6587\u5b57\u7b26\u63d2\u4ef6"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Gitmoji Plus: Commit Button")," \u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f \u53ef\u4ee5\u9009\u62e9\u5728git\u63d0\u4ea4\u7a97\u53e3\u4e2d\u6dfb\u52a0 gitmoji \u8868\u60c5\u7b26\u53f7\uff0c\u8ba9\u5b83\u4eec\u53d8\u5f97\u66f4\u9177\uff01"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Regular Tester")," \u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f \u53ef\u4ee5\u975e\u5e38\u65b9\u4fbf\u7684\u5728IDE\u91cc\u9762\u8fdb\u884c\u6b63\u5219\u6d4b\u8bd5"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"String Manipulation")," \u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f \u5b57\u7b26\u4e32\u5927\u5c0f\u5199\u5207\u6362\u3001\u6392\u5e8f\u3001\u8fc7\u6ee4\u3001\u9012\u589e\u3001\u5bf9\u9f50\u5217\u3001grepping\u3001\u8f6c\u4e49\u3001\u7f16\u7801...\u7b49"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Codeium")," \u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f  Codeium: Free AI \u4ee3\u7801\u81ea\u52a8\u63d0\u793a\u548c\u8865\u5168")),(0,l.kt)("h3",{id:"\u5de5\u5177"},"\u5de5\u5177"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Translation")," \u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f Translation plugin for IntelliJ based IDEs."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Color Highlighter")," \u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f \u63d0\u4f9b\u8272\u5f69\u4ee3\u7801(HEX, RGB\u7b49)\u9ad8\u4eae\u663e\u793a")),(0,l.kt)("h3",{id:"\u4e3b\u9898"},"\u4e3b\u9898"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Solarized themes")," Adds Solarized Dark and Light themes"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"One Dark theme")," One Dark theme for JetBrains."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Dracula")," Dracula Theme for JetBrains")),(0,l.kt)("h3",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Ini")," \u63d0\u4f9b INI \u683c\u5f0f\u8bed\u6cd5\u9ad8\u4eae\u652f\u6301"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Toml")," \u63d0\u4f9b Toml \u683c\u5f0f\u8bed\u6cd5\u9ad8\u4eae\u652f\u6301"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Vlang")," \u63d0\u4f9b v \u8bed\u8a00\u652f\u6301"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"AsciiDoc")," \u63d0\u4f9b AsciiDoc \u6587\u6863\u683c\u5f0f\u652f\u6301"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Properties")," \u63d0\u4f9b Java Properties \u683c\u5f0f\u8bed\u6cd5\u9ad8\u4eae\u652f\u6301")),(0,l.kt)("h2",{id:"\u9002\u7528\u4e8e-intellij"},"\u9002\u7528\u4e8e IntelliJ"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GenerateAllSetter")," \u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f \u4e00\u952e\u8c03\u7528\u4e00\u4e2a\u5bf9\u8c61\u7684\u6240\u6709\u7684set\u65b9\u6cd5,get\u65b9\u6cd5\u7b49, \u5728\u65b9\u6cd5\u4e0a\u751f\u6210\u4e24\u4e2a\u5bf9\u8c61\u7684\u8f6c\u6362"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Maven Helper")," \u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f A must have plugin for working with Maven."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"MybatisPlus")," \u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f generator code, live template"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"MybatisX")," \u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f Mybatis plugin"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Scala")," Adds support for the Scala language."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Kotlin")," The Kotlin plugin provides language support in IntelliJ IDEA")),(0,l.kt)("h2",{id:"\u9002\u7528\u4e8e-phpstorm"},"\u9002\u7528\u4e8e PhpStorm"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PHP Advanced Auto-completion")," \u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f \u63d0\u4f9b PHP \u5e38\u7528\u7684\u5185\u7f6e\u51fd\u6570\u53c2\u6570\u8865\u5168"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PHP Annotations")," \u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f \u6269\u5c55 PhpStorm \u4ee5\u652f\u6301 DocBlocks \u4e2d\u7684\u6ce8\u91ca\u5e76\u63d0\u4f9b\u989d\u5916\u7684\u5c5e\u6027\u529f\u80fd"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Php Inspections (EA Extended)")," \u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f \u63d0\u4f9bPHP\u4ee3\u7801\u7684\u9759\u6001\u5206\u6790\u68c0\u67e5"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PHP Toolbox")," \u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f \u63d0\u4f9b\u4ece Symfony \u63d2\u4ef6\u4e2d\u63d0\u53d6\u7684\u201c\u65b9\u6cd5\u5f15\u7528\u201d\u548c\u201c\u7c7b\u578b\u63d0\u4f9b\u7a0b\u5e8f\u201d\u3002\u5b83\u8fd8\u6539\u8fdb\u4e86\u4e00\u4e9b PhpStorm \u6838\u5fc3\u529f\u80fd\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528\u7b80\u5355\u7684\u6bcf\u4e2a\u9879\u76ee\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"li"},".ide-toolbox.metadata.json")," \u914d\u7f6e\u63d2\u4ef6\uff0c\u4ee5\u652f\u6301\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"li"},"$f->('date_time')->format, new Datetime('caret')"),"\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"deep-assoc-completion")," \u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f \u63d0\u4f9bPHP \u5173\u8054\u6570\u7ec4\u81ea\u52a8\u8865\u5168(\u4ece\u5b9a\u4e49\u6216\u5176\u4ed6\u51fd\u6570\u63a8\u65ad); \u5728 phpdoc \u4e2d\u6307\u5b9a\u6570\u7ec4\u952e\u548c\u53c2\u8003\u51fd\u6570\u3002")),(0,l.kt)("h2",{id:"\u9002\u7528\u4e8e-goland"},"\u9002\u7528\u4e8e GoLand"))}s.isMDXComponent=!0}}]);