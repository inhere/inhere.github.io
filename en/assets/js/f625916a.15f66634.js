"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4076],{9613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),b=o,h=u["".concat(s,".").concat(b)]||u[b]||f[b]||l;return r?n.createElement(h,a(a({ref:t},p),{},{components:r})):n.createElement(h,a({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},1055:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(1966),o=(r(9496),r(9613));const l={title:"bash \u5e38\u7528\u547d\u4ee4\u8bb0\u5f55",date:"2024-01-09T14:27",tags:["bash"],authors:"inhere"},a=void 0,i={unversionedId:"tools/bash\u5e38\u7528\u547d\u4ee4",id:"tools/bash\u5e38\u7528\u547d\u4ee4",title:"bash \u5e38\u7528\u547d\u4ee4\u8bb0\u5f55",description:"\u7f16\u8f91\u547d\u4ee4",source:"@site/docs/tools/04.bash\u5e38\u7528\u547d\u4ee4.md",sourceDirName:"tools",slug:"/tools/bash\u5e38\u7528\u547d\u4ee4",permalink:"/en/docs/tools/bash\u5e38\u7528\u547d\u4ee4",draft:!1,editUrl:"https://github.com/inhere/inhere.github.io/tree/main/docs/tools/04.bash\u5e38\u7528\u547d\u4ee4.md",tags:[{label:"bash",permalink:"/en/docs/tags/bash"}],version:"current",sidebarPosition:4,frontMatter:{title:"bash \u5e38\u7528\u547d\u4ee4\u8bb0\u5f55",date:"2024-01-09T14:27",tags:["bash"],authors:"inhere"},sidebar:"tutorialSidebar",previous:{title:"npm\u5e38\u7528\u547d\u4ee4",permalink:"/en/docs/tools/npm\u5e38\u7528\u547d\u4ee4"},next:{title:"yaml\u8bed\u8a00\u6559\u7a0b",permalink:"/en/docs/tools/yaml\u8bed\u8a00\u6559\u7a0b"}},s={},c=[{value:"\u7f16\u8f91\u547d\u4ee4",id:"\u7f16\u8f91\u547d\u4ee4",level:2},{value:"\u5386\u53f2\u547d\u4ee4",id:"\u5386\u53f2\u547d\u4ee4",level:2},{value:"\u63a7\u5236\u547d\u4ee4",id:"\u63a7\u5236\u547d\u4ee4",level:2}],p={toc:c},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u7f16\u8f91\u547d\u4ee4"},"\u7f16\u8f91\u547d\u4ee4"),(0,o.kt)("p",null,"Ctrl + a   \u5149\u6807\u79fb\u52a8\u5230\u884c\u9996\nCtrl + e   \u5149\u6807\u79fb\u52a8\u5230\u884c\u5c3e\nCtrl + f   \u5149\u6807\u53f3\u79fb(\u540c\u2190)\nCtrl + b   \u5149\u6807\u5de6\u79fb(\u540c\u2192)\nAlt + f    \u5149\u6807\u6309\u5355\u8bcd\u53f3\u79fb\nAlt + b    \u5149\u6807\u6309\u5355\u8bcd\u5de6\u79fb\nCtrl + xx  \u5f53\u524d\u5149\u6807\u548c\u884c\u9996\u5207\u6362"),(0,o.kt)("p",null,"Ctrl + u   \u5220\u9664\u5149\u6807\u5de6\u8fb9\u7684\u5185\u5bb9\nCtrl + k   \u5220\u9664\u5149\u6807\u53f3\u8fb9\u7684\u5185\u5bb9\nCtrl + w   \u5220\u9664\u5149\u6807\u5de6\u8fb9\u7684\u8bcd\u7ec4\nAlt + d    \u5220\u9664\u5149\u6807\u53f3\u8fb9\u7684\u8bcd\u7ec4\nCtrl + y   \u7c98\u8d34\u6216\u8005\u6062\u590d\u4e0a\u9762\u65b9\u5f0f(u,k,w,d)\u7684\u5220\u9664\u7684\u5185\u5bb9\nCtrl + d   \u5220\u9664\u5149\u6807\u5904\u7684\u5b57\u7b26(\u540cDelete\u952e)\nCtrl + h   \u5220\u9664\u5149\u6807\u524d\u7684\u5b57\u7b26(\u540cBackspace\u952e)"),(0,o.kt)("p",null,"Alt + c    \u628a\u5149\u6807\u53f3\u8fb9\u7684\u5355\u8bcd\u8f6c\u6362\u6210\u9996\u5b57\u6bcd\u5927\u5199\nAlt + u    \u628a\u5149\u6807\u53f3\u8fb9\u7684\u5355\u8bcd\u8f6c\u6362\u6210\u5927\u5199\nAlt + l    \u628a\u5149\u6807\u53f3\u8fb9\u7684\u5355\u8bcd\u8f6c\u6362\u6210\u5c0f\u5199\nAlt + t    \u4ea4\u6362\u5149\u6807\u5904(\u5355\u8bcd\u7ed3\u5c3e)\u548c\u524d\u9762\u7684\u5355\u8bcd(\u4e00\u76f4\u6309\u5149\u6807\u5904\u7684\u5355\u8bcd\u4e00\u76f4\u5411\u540e\u79fb)\nCtrl + t   \u4ea4\u6362\u5149\u6807\u5904\u548c\u524d\u9762\u7684\u5b57\u7b26(\u4e00\u76f4\u6309\u5149\u6807\u5904\u7684\u5b57\u7b26\u4e00\u76f4\u5411\u540e\u79fb)"),(0,o.kt)("h2",{id:"\u5386\u53f2\u547d\u4ee4"},"\u5386\u53f2\u547d\u4ee4"),(0,o.kt)("p",null,"Ctrl + r   \u5386\u53f2\u547d\u4ee4\u641c\u7d22\nCtrl + g   \u4ece\u641c\u7d22\u6a21\u5f0f\u9000\u51fa(\u540cEsc)\nCtrl + p   \u4e0a\u4e00\u6761\u547d\u4ee4(\u540c\u2191)\nCtrl + n   \u4e0b\u4e00\u6761\u547d\u4ee4(\u540c\u2193)\nAlt + .    \u7c98\u8d34\u4e0a\u4e00\u6761\u547d\u4ee4\u7684\u6700\u540e\u4e00\u4e2a\u8bcd\u7ec4\n!!         \u6267\u884c\u4e0a\u4e00\u6761\u547d\u4ee4\n!num       \u6267\u884c\u7b2cnum\u53f7\u7684\u5386\u53f2\u547d\u4ee4\uff0c\u5982\uff1a!10\n!his:      \u6267\u884c\u6700\u8fd1\u4ee5his\u5f00\u5934\u7684\u547d\u4ee4\uff0c\u5982\uff1ahistory 10\n!his:p     \u8f93\u51fa\u6700\u8fd1\u4ee5his\u5f00\u5934\u7684\u547d\u4ee4\uff0c\u5982\uff1ahistory 10\n!$         \u540c(Alt + .)\n!$:p       \u8f93\u51fa\u4e0a\u4e00\u6761\u547d\u4ee4\u7684\u6700\u540e\u4e00\u4e2a\u8bcd\u7ec4\n^foo       \u5220\u9664\u4e0a\u4e00\u6761\u547d\u4ee4\u4e2d\u7684foo\uff0c\u5982\uff1a^10 (history 10 | grep his => history | grep his)\n^foo^bar   \u5c06\u4e0a\u4e00\u6761\u547d\u4ee4\u4e2d\u7684foo\u66ff\u6362\u6210bar\uff0c\u5982\uff1a^10^20 (history 10 | grep his => history 20 | grep his)\n^foo^bar^  \u5c06\u4e0a\u4e00\u6761\u547d\u4ee4\u4e2d\u6240\u6709\u7684foo\u90fd\u66ff\u6362\u4e3abar"),(0,o.kt)("h2",{id:"\u63a7\u5236\u547d\u4ee4"},"\u63a7\u5236\u547d\u4ee4"),(0,o.kt)("p",null,"Ctrl + l   \u6e05\u5c4f\nCtrl + s   \u963b\u6b62\u5c4f\u5e55\u8f93\u51fa\nCtrl + q   \u5141\u8bb8\u5c4f\u5e55\u8f93\u51fa\nCtrl + c   \u7ec8\u6b62\u547d\u4ee4\nCtrl + z   \u6302\u8d77\u547d\u4ee4"))}f.isMDXComponent=!0}}]);