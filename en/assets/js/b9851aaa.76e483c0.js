"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1512],{9613:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>b});var r=o(9496);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=r.createContext({}),g=function(e){var t=r.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=g(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=g(o),m=n,b=c["".concat(u,".").concat(m)]||c[m]||s[m]||i;return o?r.createElement(b,a(a({ref:t},p),{},{components:o})):r.createElement(b,a({ref:t},p))}));function b(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:n,a[1]=l;for(var g=2;g<i;g++)a[g]=o[g];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},1436:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>g});var r=o(1966),n=(o(9496),o(9613));const i={title:"gookit/goutil - Go\u5e38\u7528\u529f\u80fd\u7684\u6269\u5c55\u5de5\u5177\u5e93\uff0c\u53d1\u5e03 v0.6.14 \u7248\u672c",tags:["gookit","golang","goutil"],date:"2023-10-16T15:12",slug:"gookit-goutil-release-v0.6.14",authors:"inhere"},a=void 0,l={permalink:"/en/blog/gookit-goutil-release-v0.6.14",editUrl:"https://github.com/inhere/inhere.github.io/tree/main/blog/2023/10-16-gookit-goutil-release-v0.6.14.md",source:"@site/blog/2023/10-16-gookit-goutil-release-v0.6.14.md",title:"gookit/goutil - Go\u5e38\u7528\u529f\u80fd\u7684\u6269\u5c55\u5de5\u5177\u5e93\uff0c\u53d1\u5e03 v0.6.14 \u7248\u672c",description:"gookit/goutil Go \u5e38\u7528\u529f\u80fd\u7684\u6269\u5c55\u5de5\u5177\u5e93\u3002\u5305\u542b\uff1a\u6570\u5b57\uff0c\u5b57\u7b26\u4e32\uff0cslice/\u6570\u7ec4\uff0cMap\uff0c\u7ed3\u6784\u4f53\uff0c\u53cd\u5c04\uff0c\u6587\u672c\uff0c\u6587\u4ef6\uff0c\u9519\u8bef\uff0c\u65f6\u95f4\u65e5\u671f\uff0c\u6d4b\u8bd5\uff0cCLI\uff0c\u547d\u4ee4\u8fd0\u884c\uff0c\u7cfb\u7edf\u4fe1\u606f\uff0c\u683c\u5f0f\u5316\uff0c\u5e38\u7528\u4fe1\u606f\u83b7\u53d6\u7b49\u7b49\u3002",date:"2023-10-16T15:12:00.000Z",formattedDate:"October 16, 2023",tags:[{label:"gookit",permalink:"/en/blog/tags/gookit"},{label:"golang",permalink:"/en/blog/tags/golang"},{label:"goutil",permalink:"/en/blog/tags/goutil"}],readingTime:.385,hasTruncateMarker:!0,authors:[{name:"inhere",title:"docs maintainer",url:"https://github.com/inhere",imageURL:"https://github.com/inhere.png",key:"inhere"}],frontMatter:{title:"gookit/goutil - Go\u5e38\u7528\u529f\u80fd\u7684\u6269\u5c55\u5de5\u5177\u5e93\uff0c\u53d1\u5e03 v0.6.14 \u7248\u672c",tags:["gookit","golang","goutil"],date:"2023-10-16T15:12",slug:"gookit-goutil-release-v0.6.14",authors:"inhere"},nextItem:{title:"\u5728Windows\u4e0b\u4f7f\u7528\u591a\u4e2a\u7248\u672c\u7684PHP\u8bb0\u5f55",permalink:"/en/blog/use-multi-version-php-on-windows"}},u={authorsImageUrls:[void 0]},g=[{value:"v0.6.14 \u66f4\u65b0\u8bb0\u5f55",id:"v0614-\u66f4\u65b0\u8bb0\u5f55",level:2}],p={toc:g},c="wrapper";function s(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"gookit/goutil")," Go \u5e38\u7528\u529f\u80fd\u7684\u6269\u5c55\u5de5\u5177\u5e93\u3002\u5305\u542b\uff1a\u6570\u5b57\uff0c\u5b57\u7b26\u4e32\uff0cslice/\u6570\u7ec4\uff0cMap\uff0c\u7ed3\u6784\u4f53\uff0c\u53cd\u5c04\uff0c\u6587\u672c\uff0c\u6587\u4ef6\uff0c\u9519\u8bef\uff0c\u65f6\u95f4\u65e5\u671f\uff0c\u6d4b\u8bd5\uff0cCLI\uff0c\u547d\u4ee4\u8fd0\u884c\uff0c\u7cfb\u7edf\u4fe1\u606f\uff0c\u683c\u5f0f\u5316\uff0c\u5e38\u7528\u4fe1\u606f\u83b7\u53d6\u7b49\u7b49\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Github"),": ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/gookit/goutil"},"https://github.com/gookit/goutil"))),(0,n.kt)("h2",{id:"v0614-\u66f4\u65b0\u8bb0\u5f55"},"v0.6.14 \u66f4\u65b0\u8bb0\u5f55"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u5b8c\u6574\u53d8\u66f4\u65e5\u5fd7 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/gookit/goutil/compare/v0.6.12...v0.6.14"},"v0.6.12...v0.6.14"))))}s.isMDXComponent=!0}}]);