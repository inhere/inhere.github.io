"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8907],{9613:(e,t,l)=>{l.d(t,{Zo:()=>u,kt:()=>g});var a=l(9496);function i(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?n(Object(l),!0).forEach((function(t){i(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function r(e,t){if(null==e)return{};var l,a,i=function(e,t){if(null==e)return{};var l,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||(i[l]=e[l]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(i[l]=e[l])}return i}var p=a.createContext({}),m=function(e){var t=a.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},u=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var l=e.components,i=e.mdxType,n=e.originalType,p=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=m(l),k=i,g=c["".concat(p,".").concat(k)]||c[k]||d[k]||n;return l?a.createElement(g,o(o({ref:t},u),{},{components:l})):a.createElement(g,o({ref:t},u))}));function g(e,t){var l=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=l.length,o=new Array(n);o[0]=k;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[c]="string"==typeof e?e:i,o[1]=r;for(var m=2;m<n;m++)o[m]=l[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,l)}k.displayName="MDXCreateElement"},2817:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>r,toc:()=>m});var a=l(1966),i=(l(9496),l(9613));const n={},o="Slog \u7248\u672c\u66f4\u65b0\u65e5\u5fd7",r={unversionedId:"gookit/slog-changelog",id:"gookit/slog-changelog",title:"Slog \u7248\u672c\u66f4\u65b0\u65e5\u5fd7",description:"gookit/slog Go \u4e00\u4e2a\u6613\u4e8e\u4f7f\u7528\u7684\uff0c\u8f7b\u91cf\u7ea7\u3001\u53ef\u914d\u7f6e\u3001\u53ef\u6269\u5c55\u7684\u65e5\u5fd7\u5e93\u3002\u652f\u6301\u591a\u4e2a\u7ea7\u522b\uff0c\u8f93\u51fa\u5230\u591a\u6587\u4ef6\uff1b\u5185\u7f6e\u6587\u4ef6\u65e5\u5fd7\u5904\u7406\u3001\u81ea\u52a8\u5207\u5272\u3001\u6e05\u7406\u3001\u538b\u7f29\u7b49\u589e\u5f3a\u529f\u80fd\u3002",source:"@site/docs/gookit/04-slog-changelog.md",sourceDirName:"gookit",slug:"/gookit/slog-changelog",permalink:"/docs/gookit/slog-changelog",draft:!1,editUrl:"https://github.com/inhere/inhere.github.io/tree/main/docs/gookit/04-slog-changelog.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Validate \u7248\u672c\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/gookit/validate-changelog"},next:{title:"event \u7248\u672c\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/gookit/event-changelog"}},p={},m=[{value:"\u529f\u80fd\u7279\u8272",id:"\u529f\u80fd\u7279\u8272",level:2},{value:"\u8f93\u51fa\u65e5\u5fd7\u5230\u6587\u4ef6",id:"\u8f93\u51fa\u65e5\u5fd7\u5230\u6587\u4ef6",level:3},{value:"v0.5.1 \u66f4\u65b0\u65e5\u5fd7",id:"v051-\u66f4\u65b0\u65e5\u5fd7",level:2},{value:"\u66f4\u65b0",id:"\u66f4\u65b0",level:3},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:3},{value:"v0.5.0 \u66f4\u65b0\u65e5\u5fd7",id:"v050-\u66f4\u65b0\u65e5\u5fd7",level:2},{value:"\u53d8\u66f4",id:"\u53d8\u66f4",level:3},{value:"\u65b0\u589e\u529f\u80fd",id:"\u65b0\u589e\u529f\u80fd",level:3},{value:"\u5176\u4ed6",id:"\u5176\u4ed6-1",level:3},{value:"v0.4.0 \u66f4\u65b0\u65e5\u5fd7",id:"v040-\u66f4\u65b0\u65e5\u5fd7",level:2},{value:"Update",id:"update",level:3},{value:"Other",id:"other",level:3}],u={toc:m},c="wrapper";function d(e){let{components:t,...l}=e;return(0,i.kt)(c,(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"slog-\u7248\u672c\u66f4\u65b0\u65e5\u5fd7"},"Slog \u7248\u672c\u66f4\u65b0\u65e5\u5fd7"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"gookit/slog")," Go \u4e00\u4e2a\u6613\u4e8e\u4f7f\u7528\u7684\uff0c\u8f7b\u91cf\u7ea7\u3001\u53ef\u914d\u7f6e\u3001\u53ef\u6269\u5c55\u7684\u65e5\u5fd7\u5e93\u3002\u652f\u6301\u591a\u4e2a\u7ea7\u522b\uff0c\u8f93\u51fa\u5230\u591a\u6587\u4ef6\uff1b\u5185\u7f6e\u6587\u4ef6\u65e5\u5fd7\u5904\u7406\u3001\u81ea\u52a8\u5207\u5272\u3001\u6e05\u7406\u3001\u538b\u7f29\u7b49\u589e\u5f3a\u529f\u80fd\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Github ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/gookit/slog"},"https://github.com/gookit/slog"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u63a7\u5236\u53f0\u65e5\u5fd7\u6548\u679c:")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/gookit/slog/master/_example/images/console-log-all-level.png",alt:"console-log-all-level"})),(0,i.kt)("h2",{id:"\u529f\u80fd\u7279\u8272"},"\u529f\u80fd\u7279\u8272"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7b80\u5355\uff0c\u65e0\u9700\u914d\u7f6e\uff0c\u5f00\u7bb1\u5373\u7528"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u5e38\u7528\u7684\u65e5\u5fd7\u7ea7\u522b\u5904\u7406",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5982\uff1a ",(0,i.kt)("inlineCode",{parentName:"li"},"trace")," ",(0,i.kt)("inlineCode",{parentName:"li"},"debug")," ",(0,i.kt)("inlineCode",{parentName:"li"},"info")," ",(0,i.kt)("inlineCode",{parentName:"li"},"notice")," ",(0,i.kt)("inlineCode",{parentName:"li"},"warn")," ",(0,i.kt)("inlineCode",{parentName:"li"},"error")," ",(0,i.kt)("inlineCode",{parentName:"li"},"fatal")," ",(0,i.kt)("inlineCode",{parentName:"li"},"panic")))),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4efb\u610f\u6269\u5c55\u81ea\u5df1\u9700\u8981\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"Handler")," ",(0,i.kt)("inlineCode",{parentName:"li"},"Formatter")),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u540c\u65f6\u6dfb\u52a0\u591a\u4e2a ",(0,i.kt)("inlineCode",{parentName:"li"},"Handler")," \u65e5\u5fd7\u5904\u7406\uff0c\u8f93\u51fa\u65e5\u5fd7\u5230\u4e0d\u540c\u7684\u5730\u65b9"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u81ea\u5b9a\u4e49\u6784\u5efa ",(0,i.kt)("inlineCode",{parentName:"li"},"Handler")," \u5904\u7406\u5668",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5185\u7f6e\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"handler.Config")," ",(0,i.kt)("inlineCode",{parentName:"li"},"handler.Builder"),",\u53ef\u4ee5\u65b9\u4fbf\u5feb\u6377\u7684\u6784\u5efa\u60f3\u8981\u7684\u65e5\u5fd7\u5904\u7406\u5668"))),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u81ea\u5b9a\u4e49 ",(0,i.kt)("inlineCode",{parentName:"li"},"Formatter")," \u683c\u5f0f\u5316\u5904\u7406",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5185\u7f6e\u4e86 ",(0,i.kt)("inlineCode",{parentName:"li"},"json")," ",(0,i.kt)("inlineCode",{parentName:"li"},"text")," \u4e24\u4e2a\u65e5\u5fd7\u8bb0\u5f55\u683c\u5f0f\u5316 ",(0,i.kt)("inlineCode",{parentName:"li"},"Formatter")))),(0,i.kt)("li",{parentName:"ul"},"\u5df2\u7ecf\u5185\u7f6e\u4e86\u5e38\u7528\u7684\u65e5\u5fd7\u5904\u7406\u5668",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"console")," \u8f93\u51fa\u65e5\u5fd7\u5230\u63a7\u5236\u53f0\uff0c\u652f\u6301\u8272\u5f69\u8f93\u51fa"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"writer")," \u8f93\u51fa\u65e5\u5fd7\u5230\u6307\u5b9a\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"io.Writer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"file")," \u8f93\u51fa\u65e5\u5fd7\u5230\u6307\u5b9a\u6587\u4ef6\uff0c\u53ef\u9009\u542f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"buffer")," \u7f13\u51b2\u5199\u5165"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"simple")," \u8f93\u51fa\u65e5\u5fd7\u5230\u6307\u5b9a\u6587\u4ef6\uff0c\u65e0\u7f13\u51b2\u76f4\u63a5\u5199\u5165\u6587\u4ef6"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rotate_file")," \u8f93\u51fa\u65e5\u5fd7\u5230\u6307\u5b9a\u6587\u4ef6\uff0c\u5e76\u4e14\u540c\u65f6\u652f\u6301\u6309\u65f6\u95f4\u3001\u6309\u5927\u5c0f\u5206\u5272\u6587\u4ef6\uff0c\u9ed8\u8ba4\u542f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"buffer")," \u7f13\u51b2\u5199\u5165"),(0,i.kt)("li",{parentName:"ul"},"\u66f4\u591a\u5185\u7f6e\u5b9e\u73b0\u8bf7\u67e5\u770b ./handler \u6587\u4ef6\u5939")))),(0,i.kt)("h3",{id:"\u8f93\u51fa\u65e5\u5fd7\u5230\u6587\u4ef6"},"\u8f93\u51fa\u65e5\u5fd7\u5230\u6587\u4ef6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u542f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"buffer")," \u7f13\u51b2\u65e5\u5fd7\u5199\u5165"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u6309\u65f6\u95f4\u3001\u6309\u5927\u5c0f\u81ea\u52a8\u5206\u5272\u6587\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u914d\u7f6e\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"li"},"gzip")," \u538b\u7f29\u65e5\u5fd7\u6587\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u6e05\u7406\u65e7\u65e5\u5fd7\u6587\u4ef6 \u914d\u7f6e: ",(0,i.kt)("inlineCode",{parentName:"li"},"BackupNum")," ",(0,i.kt)("inlineCode",{parentName:"li"},"BackupTime")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rotatefile")," \u5305\u4e5f\u53ef\u4ee5\u7528\u5728\u5176\u4ed6\u65e5\u5fd7\u5e93\u3002\u4f8b\u5982\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"log"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"glog"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"zap")," \u7b49\u7b49\u3002")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u66f4\u591a\u4f7f\u7528\u8bf7\u770b ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gookit/slog/blob/master/README.zh-CN.md"},"README"))),(0,i.kt)("h2",{id:"v051-\u66f4\u65b0\u65e5\u5fd7"},"v0.5.1 \u66f4\u65b0\u65e5\u5fd7"),(0,i.kt)("h3",{id:"\u66f4\u65b0"},"\u66f4\u65b0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u26a1 perf: \u4f18\u5316\u5904\u7406\u65e5\u5fd7\u6d88\u606f\u6570\u636e\u7684\u6027\u80fd"),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udc54 up: \u66f4\u65b0\u4e00\u4e9b\u4ee3\u7801\u903b\u8f91\u5e76\u6dfb\u52a0\u66f4\u591a\u5355\u5143\u6d4b\u8bd5")),(0,i.kt)("h3",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u2705 test: \u66f4\u65b0benchmark\u6d4b\u8bd5\u5e76\u66f4\u65b0readme")),(0,i.kt)("h2",{id:"v050-\u66f4\u65b0\u65e5\u5fd7"},"v0.5.0 \u66f4\u65b0\u65e5\u5fd7"),(0,i.kt)("h3",{id:"\u53d8\u66f4"},"\u53d8\u66f4"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udca5 break: \u91cd\u547d\u540d\u4e00\u4e9b\u63a5\u53e3\u548c\u7ed3\u6784\u4f53")),(0,i.kt)("h3",{id:"\u65b0\u589e\u529f\u80fd"},"\u65b0\u589e\u529f\u80fd"),(0,i.kt)("p",null,"\u2728 feat: handler - \u914d\u7f6e\u65b0\u589e\u5b57\u6bb5 LevelMode, Level\n\u2728 feat: \u4e3a handler.Builder \u6dfb\u52a0\u66f4\u591a\u5feb\u901f\u7684\u914d\u7f6e\u65b9\u6cd5"),(0,i.kt)("h3",{id:"\u5176\u4ed6-1"},"\u5176\u4ed6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udcdd doc: \u66f4\u65b0readme\u6587\u6863\u5e76\u6dfb\u52a0\u66f4\u591a\u7528\u6cd5\u793a\u4f8b"),(0,i.kt)("li",{parentName:"ul"},"\u2b06\ufe0f dep: \u66f4\u65b0\u76f8\u5173\u4f9d\u8d56\u5de5\u5177\u5e93\u5230\u6700\u65b0\u7248\u672c")),(0,i.kt)("h2",{id:"v040-\u66f4\u65b0\u65e5\u5fd7"},"v0.4.0 \u66f4\u65b0\u65e5\u5fd7"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u53d1\u5e03\u4e8e 2022.12.12")),(0,i.kt)("h3",{id:"update"},"Update"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"pref: optimize the log write logic, add default handler ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/gookit/slog/commit/6f145bdbfb4cdf7a26806a4e255723c94b0548f3"},"https://github.com/gookit/slog/commit/6f145bdbfb4cdf7a26806a4e255723c94b0548f3")),(0,i.kt)("li",{parentName:"ul"},"up: update the benchmark tests package version to latest, add new tests log ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/gookit/slog/commit/c17c0a43657eb4dd0cc5c61987aecc72e7c9d338"},"https://github.com/gookit/slog/commit/c17c0a43657eb4dd0cc5c61987aecc72e7c9d338")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udc54 up: update logger caller skip value, fix test error ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/gookit/slog/commit/214491a6082a30095fb0dc3cdf1557a1001f9b8c"},"https://github.com/gookit/slog/commit/214491a6082a30095fb0dc3cdf1557a1001f9b8c")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udc54 up: update log write logic, add more unit tests ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/gookit/slog/commit/4799e4bfd390ba939ab0dc95d4bddccc71192a7f"},"https://github.com/gookit/slog/commit/4799e4bfd390ba939ab0dc95d4bddccc71192a7f")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udc54 up: update logger handler, remove defaultH setting. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/gookit/slog/commit/d671f338a9a60a84c882b2deb27a89a189b5bebd"},"https://github.com/gookit/slog/commit/d671f338a9a60a84c882b2deb27a89a189b5bebd"))),(0,i.kt)("h3",{id:"other"},"Other"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"style: re-format some code style by gofmt ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/gookit/slog/commit/fb365538e6242afe8617325dcbf745439540cd06"},"https://github.com/gookit/slog/commit/fb365538e6242afe8617325dcbf745439540cd06")),(0,i.kt)("li",{parentName:"ul"},"build(deps): bump WillAbides/setup-go-faster from 1.7.0 to 1.8.0 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/gookit/slog/commit/5a347895a70f22711ee716b3fb31d824e46d81fa"},"https://github.com/gookit/slog/commit/5a347895a70f22711ee716b3fb31d824e46d81fa"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Full Changelog"),": ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gookit/slog/compare/v0.3.4...v0.4.0"},"https://github.com/gookit/slog/compare/v0.3.4...v0.4.0")))}d.isMDXComponent=!0}}]);