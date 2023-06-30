"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7114],{9613:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var r=n(9496);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var g=r.createContext({}),p=function(t){var e=r.useContext(g),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(g.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,g=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),c=p(n),s=o,k=c["".concat(g,".").concat(s)]||c[s]||m[s]||a;return n?r.createElement(k,i(i({ref:e},u),{},{components:n})):r.createElement(k,i({ref:e},u))}));function k(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=s;var l={};for(var g in e)hasOwnProperty.call(e,g)&&(l[g]=e[g]);l.originalType=t,l[c]="string"==typeof t?t:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6531:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>g,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(1966),o=(n(9496),n(9613));const a={title:"gitw - Git \u547d\u4ee4\u5305\u88c5\u5668\uff0c\u751f\u6210 git \u53d8\u66f4\u8bb0\u5f55\u65e5\u5fd7",tags:["golang","gookit","git"],date:"2022-07-06T21:00",slug:"gookit-gitw-intro",authors:"inhere"},i=void 0,l={permalink:"/blog/gookit-gitw-intro",editUrl:"https://github.com/inhere/inhere.github.io/tree/main/blog/2022/07-06-gookit-gitw-intro.md",source:"@site/blog/2022/07-06-gookit-gitw-intro.md",title:"gitw - Git \u547d\u4ee4\u5305\u88c5\u5668\uff0c\u751f\u6210 git \u53d8\u66f4\u8bb0\u5f55\u65e5\u5fd7",description:"gitw - Git \u547d\u4ee4\u5305\u88c5\u5668\uff0c\u751f\u6210 git \u53d8\u66f4\u8bb0\u5f55\u65e5\u5fd7\uff0c\u83b7\u53d6 repo \u4fe1\u606f\u548c\u4e00\u4e9b git \u547d\u4ee4\u5de5\u5177\u3002",date:"2022-07-06T21:00:00.000Z",formattedDate:"2022\u5e747\u67086\u65e5",tags:[{label:"golang",permalink:"/blog/tags/golang"},{label:"gookit",permalink:"/blog/tags/gookit"},{label:"git",permalink:"/blog/tags/git"}],readingTime:1.095,hasTruncateMarker:!0,authors:[{name:"inhere",title:"docs maintainer",url:"https://github.com/inhere",imageURL:"https://github.com/inhere.png",key:"inhere"}],frontMatter:{title:"gitw - Git \u547d\u4ee4\u5305\u88c5\u5668\uff0c\u751f\u6210 git \u53d8\u66f4\u8bb0\u5f55\u65e5\u5fd7",tags:["golang","gookit","git"],date:"2022-07-06T21:00",slug:"gookit-gitw-intro",authors:"inhere"},prevItem:{title:"cflag - \u5305\u88c5Go FlagSet\u6784\u5efa\u7b80\u5355\u4e14\u6f02\u4eae\u7684\u547d\u4ee4\u884c\u5e94\u7528\u7a0b\u5e8f",permalink:"/blog/gookit-goutil-cflag-intro"},nextItem:{title:"slog - \u4e00\u4e2a\u6613\u4e8e\u4f7f\u7528\u7684\uff0c\u6613\u6269\u5c55\u3001\u53ef\u914d\u7f6e\u7684\u65e5\u5fd7\u5e93",permalink:"/blog/gookit-slog-intro"}},g={authorsImageUrls:[void 0]},p=[{value:"\u751f\u6210\u53d8\u66f4\u65e5\u5fd7",id:"\u751f\u6210\u53d8\u66f4\u65e5\u5fd7",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:3},{value:"\u4ed3\u5e93\u4fe1\u606f",id:"\u4ed3\u5e93\u4fe1\u606f",level:2},{value:"Branch \u4fe1\u606f",id:"branch-\u4fe1\u606f",level:3},{value:"\u66f4\u591a",id:"\u66f4\u591a",level:2}],u={toc:p},c="wrapper";function m(t){let{components:e,...n}=t;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"gitw")," - Git \u547d\u4ee4\u5305\u88c5\u5668\uff0c\u751f\u6210 git \u53d8\u66f4\u8bb0\u5f55\u65e5\u5fd7\uff0c\u83b7\u53d6 repo \u4fe1\u606f\u548c\u4e00\u4e9b git \u547d\u4ee4\u5de5\u5177\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5305\u88c5\u672c\u5730 ",(0,o.kt)("inlineCode",{parentName:"li"},"git")," \u547d\u4ee4"),(0,o.kt)("li",{parentName:"ul"},"\u5feb\u901f\u8fd0\u884c ",(0,o.kt)("inlineCode",{parentName:"li"},"git")," \u547d\u4ee4"),(0,o.kt)("li",{parentName:"ul"},"\u5feb\u901f\u67e5\u8be2\u5b58\u50a8\u5e93\u4fe1\u606f",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u83b7\u53d6 remote, branch \u8be6\u7ec6\u4fe1\u606f"))),(0,o.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"li"},"git log")," \u5feb\u901f\u751f\u6210\u7248\u672c\u53d8\u66f4\u65e5\u5fd7",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5141\u8bb8\u81ea\u5b9a\u4e49\u751f\u6210\u914d\u7f6e"),(0,o.kt)("li",{parentName:"ul"},"\u5141\u8bb8\u81ea\u5b9a\u4e49\u751f\u6210\u8fc7\u6ee4\u3001\u6837\u5f0f\u7b49"),(0,o.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u76f4\u63a5\u5728 GitHub Actions \u4e2d\u4f7f\u7528")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Github ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gookit/gitw"},"https://github.com/gookit/gitw"))),(0,o.kt)("h2",{id:"\u751f\u6210\u53d8\u66f4\u65e5\u5fd7"},"\u751f\u6210\u53d8\u66f4\u65e5\u5fd7"),(0,o.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"gitw/chlog")," \u5305\u5feb\u901f\u751f\u6210\u53d8\u66f4\u65e5\u5fd7\u3002"),(0,o.kt)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"go install github.com/gookit/gitw/cmd/chlog@latest\n")),(0,o.kt)("h3",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u751f\u6210\u53d8\u66f4\u65e5\u5fd7:"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"chlog prev last\nchlog last head\nchlog -c .github/changelog.yml last head\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Outputs"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/gookit/gitw/main/_examples/images/chlog-demo.png",alt:"chlog-demo"})),(0,o.kt)("h2",{id:"\u4ed3\u5e93\u4fe1\u606f"},"\u4ed3\u5e93\u4fe1\u606f"),(0,o.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 gitw \u5728\u672c\u5730\u5feb\u901f\u83b7\u53d6 git \u5b58\u50a8\u5e93\u4fe1\u606f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'repo := gitw.NewRepo("/path/to/my-repo")\n')),(0,o.kt)("h3",{id:"branch-\u4fe1\u606f"},"Branch \u4fe1\u606f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"brInfo := repo.CurBranchInfo()\n\ndump.Println(brInfo)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Output"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/gookit/gitw/main/_examples/images/one-branch-info.png",alt:"one-remote-info"})),(0,o.kt)("h2",{id:"\u66f4\u591a"},"\u66f4\u591a"),(0,o.kt)("p",null,"\u66f4\u591a\u4f7f\u7528\u8bf4\u660e\u8bf7\u770bREADME\u548cgodoc"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Github ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gookit/gitw"},"https://github.com/gookit/gitw"))))}m.isMDXComponent=!0}}]);