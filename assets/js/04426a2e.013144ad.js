"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2948],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var g=o.createContext({}),c=function(e){var t=o.useContext(g),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return o.createElement(g.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,g=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,b=u["".concat(g,".").concat(m)]||u[m]||p[m]||l;return r?o.createElement(b,a(a({ref:t},s),{},{components:r})):o.createElement(b,a({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=u;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var c=2;c<l;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9322:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const l={title:"slog - \u4e00\u4e2a\u6613\u4e8e\u4f7f\u7528\u7684\uff0c\u6613\u6269\u5c55\u3001\u53ef\u914d\u7f6e\u7684\u65e5\u5fd7\u5e93",tags:["golang","gookit","log","logger"],date:"2022-06-16T21:00",slug:"gookit-slog-intro",authors:"inhere"},a=void 0,i={permalink:"/blog/gookit-slog-intro",editUrl:"https://github.com/inhere/inhere.github.io/tree/main/blog/2022/06-16-gookit-slog-intro.md",source:"@site/blog/2022/06-16-gookit-slog-intro.md",title:"slog - \u4e00\u4e2a\u6613\u4e8e\u4f7f\u7528\u7684\uff0c\u6613\u6269\u5c55\u3001\u53ef\u914d\u7f6e\u7684\u65e5\u5fd7\u5e93",description:"slog - Go \u5b9e\u73b0\u7684\u4e00\u4e2a\u6613\u4e8e\u4f7f\u7528\u7684\uff0c\u8f7b\u91cf\u7ea7\u3001\u53ef\u914d\u7f6e\u3001\u53ef\u6269\u5c55\u7684\u65e5\u5fd7\u5e93",date:"2022-06-16T21:00:00.000Z",formattedDate:"2022\u5e746\u670816\u65e5",tags:[{label:"golang",permalink:"/blog/tags/golang"},{label:"gookit",permalink:"/blog/tags/gookit"},{label:"log",permalink:"/blog/tags/log"},{label:"logger",permalink:"/blog/tags/logger"}],readingTime:2.685,hasTruncateMarker:!0,authors:[{name:"inhere",title:"docs maintainer",url:"https://github.com/inhere",imageURL:"https://github.com/inhere.png",key:"inhere"}],frontMatter:{title:"slog - \u4e00\u4e2a\u6613\u4e8e\u4f7f\u7528\u7684\uff0c\u6613\u6269\u5c55\u3001\u53ef\u914d\u7f6e\u7684\u65e5\u5fd7\u5e93",tags:["golang","gookit","log","logger"],date:"2022-06-16T21:00",slug:"gookit-slog-intro",authors:"inhere"},prevItem:{title:"gitw - Git \u547d\u4ee4\u5305\u88c5\u5668\uff0c\u751f\u6210 git \u53d8\u66f4\u8bb0\u5f55\u65e5\u5fd7",permalink:"/blog/gookit-gitw-intro"},nextItem:{title:"\u5b66\u4e60\u7f16\u5199bash\u547d\u4ee4\u81ea\u52a8\u8865\u5168",permalink:"/blog/2021/08/09/learn-bash-completion"}},g={authorsImageUrls:[void 0]},c=[],s={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"slog - Go \u5b9e\u73b0\u7684\u4e00\u4e2a\u6613\u4e8e\u4f7f\u7528\u7684\uff0c\u8f7b\u91cf\u7ea7\u3001\u53ef\u914d\u7f6e\u3001\u53ef\u6269\u5c55\u7684\u65e5\u5fd7\u5e93"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/gookit/slog/master/_example/images/console-log-all-level.png",alt:"image"})))}p.isMDXComponent=!0}}]);