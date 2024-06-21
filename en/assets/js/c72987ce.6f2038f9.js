"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[236],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),m=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=m(n),g=a,v=u["".concat(o,".").concat(g)]||u[g]||s[g]||l;return n?r.createElement(v,i(i({ref:t},c),{},{components:n})):r.createElement(v,i({ref:t},c))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=g;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3244:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var r=n(1966),a=(n(9496),n(9613));const l={title:"vim\u4f7f\u7528vimgrep\u5728\u5176\u4ed6\u6587\u4ef6\u4e2d\u6216\u8005\u6587\u4ef6\u5939\u4e2d\u641c\u7d22\u5b57\u7b26\u4e32",tags:["vim","tools"],date:"2016-07-26T20:44",slug:"use-vimgrep-search-file-contents-in-vim",authors:"inhere"},i=void 0,p={permalink:"/en/blog/use-vimgrep-search-file-contents-in-vim",editUrl:"https://github.com/inhere/inhere.github.io/tree/main/blog/2016/07-26-use-vimgrep-search-file-contents-in-vim.md",source:"@site/blog/2016/07-26-use-vimgrep-search-file-contents-in-vim.md",title:"vim\u4f7f\u7528vimgrep\u5728\u5176\u4ed6\u6587\u4ef6\u4e2d\u6216\u8005\u6587\u4ef6\u5939\u4e2d\u641c\u7d22\u5b57\u7b26\u4e32",description:"vim\u4e2d\u53ef\u4ee5\u4f7f\u7528vimgrep\u5728\u5176\u4ed6\u6587\u4ef6\u4e2d\u6216\u8005\u6587\u4ef6\u5939\u4e2d\u641c\u7d22\u5b57\u7b26\u4e32",date:"2016-07-26T20:44:00.000Z",formattedDate:"July 26, 2016",tags:[{label:"vim",permalink:"/en/blog/tags/vim"},{label:"tools",permalink:"/en/blog/tags/tools"}],readingTime:2.51,hasTruncateMarker:!0,authors:[{name:"inhere",title:"docs maintainer",url:"https://github.com/inhere",imageURL:"https://github.com/inhere.png",key:"inhere"}],frontMatter:{title:"vim\u4f7f\u7528vimgrep\u5728\u5176\u4ed6\u6587\u4ef6\u4e2d\u6216\u8005\u6587\u4ef6\u5939\u4e2d\u641c\u7d22\u5b57\u7b26\u4e32",tags:["vim","tools"],date:"2016-07-26T20:44",slug:"use-vimgrep-search-file-contents-in-vim",authors:"inhere"},prevItem:{title:"git\u521b\u5efa\u548c\u4f7f\u7528\u8865\u4e01patch",permalink:"/en/blog/create-and-apply-patch-in-git"},nextItem:{title:"linux \u7ec8\u7aef\u4e0b\u4e0a\u4f20\u4e0b\u8f7d\u547d\u4ee4 sftp,scp",permalink:"/en/blog/use-scp-or-sftp-up-down-files-in-linux"}},o={authorsImageUrls:[void 0]},m=[{value:"\u7528\u4f8b1",id:"\u7528\u4f8b1",level:2},{value:"\u7528\u4f8b2",id:"\u7528\u4f8b2",level:2},{value:"\u7528\u4f8b3",id:"\u7528\u4f8b3",level:2}],c={toc:m},u="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"vim\u4e2d\u53ef\u4ee5\u4f7f\u7528vimgrep\u5728\u5176\u4ed6\u6587\u4ef6\u4e2d\u6216\u8005\u6587\u4ef6\u5939\u4e2d\u641c\u7d22\u5b57\u7b26\u4e32"),(0,a.kt)("p",null,"\u5728vim\u4e2d\u63d0\u4f9b2\u4e2d\u65b9\u6cd5\u6765\u5728\u5176\u4ed6\u6587\u4ef6\u6216\u8005\u6587\u4ef6\u5939\u4e2d\u641c\u7d22\u5b57\u7b26\u4e32\uff0c\u7b2c\u4e00\u79cd\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"vimgrep"),"\u8fd8\u6709\u4e00\u79cd\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"grep"),"\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u53ea\u662f\u5728\u5f53\u524d\u6253\u5f00\u7684\u6587\u4ef6\u4e2d\u67e5\u627e\u5b57\u7b26\u4e32\u7684\uff0c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},":?")," \u540e\u9762\u52a0\u4e0a\u60f3\u8981\u641c\u7d22\u7684\u5b57\u7b26\u4e32\u5c31\u53ef\u4ee5\u3002")),(0,a.kt)("p",null,"\u8fd9\u91cc\u8981\u89e3\u51b3\u7684\u662f\u5728\u522b\u7684\u6587\u4ef6\u4e2d\uff0c\u4e5f\u8bb8\u8fd9\u4e2a\u6587\u4ef6\u8fd8\u6ca1\u6709\u6253\u5f00\uff0c\u6216\u8005\u9700\u8981\u5728\u591a\u4e2a\u6587\u4ef6\u4e2d\u64cd\u4f5c\uff0c\u6bd4\u5982\u5728\u5f53\u524d\u6587\u4ef6\u5939\u4e0b\u9762\u6240\u6709.c\u7684\u6587\u4ef6\u4e2d\u67e5\u627e\uff0c\u6216\u8005\u5728\u83ab\u4e2a\u6587\u4ef6\u5939\u4e2d\u67e5\u627e\u3002\u8fd9\u4e9b\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528imgrep\u6216\u8005grep\u3002\u8fd9\u91cc\u53ea\u4ecb\u7ecdvimgrep\u3002\n\u8fd9\u662f\u4e2avim\u7684\u5185\u90e8\u547d\u4ee4\uff0c\u56e0\u4e3a\u53ef\u4ee5\u5728vim\u5185\u90e8\u76f4\u63a5\u4f7f\u7528\uff0c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":vimgrep\n")),(0,a.kt)("p",null,"\u8fd9\u4e2a\u547d\u4ee4\u8fd8\u53ef\u7b80\u5199\u4e3avim"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},":vim\n")),(0,a.kt)("h2",{id:"\u7528\u4f8b1"},"\u7528\u4f8b1"),(0,a.kt)("p",null,"\u5728\u5f53\u524d\u6587\u4ef6\u5939\u4e0b\u9762\u6240\u6709",(0,a.kt)("inlineCode",{parentName:"p"},".c"),"\u6587\u4ef6\u4e2d\u67e5\u627e\u5b57\u7b26\u4e32 ",(0,a.kt)("inlineCode",{parentName:"p"},"classA")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":vimgrep /classA/gj ./*.c\n")),(0,a.kt)("p",null,"\u89e3\u91ca\u4e00\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"g: \u5982\u679c\u4e00\u884c\u4e2d\u51fa\u73b0\u591a\u5904\uff0c\u53ea\u663e\u793a\u4e00\u6b21\uff0c\u6ca1\u6709g\u5c31\u4f1a\u51fa\u73b0\u591a\u6b21")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"j: \u53ea\u662f\u5217\u51fa\u6240\u6709\u5339\u914d\u7684\u884c\uff0c\u6ca1\u6709j\u90a3\u4e48\u5c31\u4f1a\u8df3\u53bb\u7b2c\u4e00\u4e2a\u5339\u914d\u7684\u884c"))),(0,a.kt)("h2",{id:"\u7528\u4f8b2"},"\u7528\u4f8b2"),(0,a.kt)("p",null,"\u5728\u5f53\u524d\u6587\u4ef6\u5939\u53ca\u5176\u5b50\u6587\u4ef6\u5939\u4e0b\u9762\u67e5\u627e\u5b57\u7b26\u4e32classA"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},":vimgrep /classA/gj **/*.*\n")),(0,a.kt)("h2",{id:"\u7528\u4f8b3"},"\u7528\u4f8b3"),(0,a.kt)("p",null,'\u5728\u5f53\u524d\u76ee\u5f55\u4e2d\u7684"includes"\u76ee\u5f55\u91cc\u7684\u6240\u6709\u6587\u4ef6\u4e2d,\u67e5\u627e\u5b57\u7b26\u4e32"the menu".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},":vimgrep /the menu/ ./includes/*.*\n")),(0,a.kt)("p",null,"\u641c\u7d22\u5b8c\u6bd5\u540e\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"copen"),"\u6216\u8005",(0,a.kt)("inlineCode",{parentName:"p"},"cw"),"\u547d\u4ee4\u6765\u6253\u5f00\u641c\u7d22\u7684\u7ed3\u679c\u3002\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"jk"),"\u6765\u79fb\u52a8\u9009\u4e2d\u884c\uff0c\u56de\u8f66\u53ef\u4ee5\u8df3\u5230\u5bf9\u5e94\u7684\u6587\u4ef6\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"copen")," \u540e\u9762\u53ef\u4ee5\u6307\u5b9a\u7a97\u53e3\u7684\u9ad8\u5ea6\u3002"),(0,a.kt)("p",null,"\u6ce8\u610f\u5f53\u53bb\u5230\u641c\u5230\u5230\u7684\u6587\u4ef6\u540e\uff0c\u5f53\u524d\u7684\u7a97\u53e3\u4f1a\u88ab\u8be5\u6587\u4ef6\u8986\u76d6\uff0c\u90a3\u4e48\u600e\u4e48\u56de\u5230\u539f\u6765\u7684\u6587\u4ef6\uff0c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ctrl+^\n")),(0,a.kt)("p",null,"\u66f4\u591a\u7684\u4fe1\u606f\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},":help vimgrep")," \u6765\u67e5\u770b\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8f6c\u81ea\uff1a",(0,a.kt)("a",{parentName:"p",href:"http://www.xuebuyuan.com/1116549.html"}," vim\u4f7f\u7528vimgrep\u5728\u5176\u4ed6\u6587\u4ef6\u4e2d\u6216\u8005\u6587\u4ef6\u5939\u4e2d\u641c\u7d22\u5b57\u7b26\u4e32 | \u5b66\u6b65\u56ed"))))}s.isMDXComponent=!0}}]);