"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6864],{9613:(e,t,r)=>{r.d(t,{Zo:()=>g,kt:()=>b});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},g=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),s=p(r),m=o,b=s["".concat(c,".").concat(m)]||s[m]||u[m]||a;return r?n.createElement(b,i(i({ref:t},g),{},{components:r})):n.createElement(b,i({ref:t},g))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7196:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(1966),o=(r(9496),r(9613));const a={title:"gookit/event - Go\u5b9e\u73b0\u7684\u8f7b\u91cf\u7ea7\u7684\u4e8b\u4ef6\u7ba1\u7406\u3001\u8c03\u5ea6\u7a0b\u5e8f\u5e93",tags:["golang","gookit","event"],date:"2023-06-14T15:53",slug:"gookit-event-pacakge-intro",authors:"inhere"},i="event \u4e8b\u4ef6\u8c03\u5ea6\u5e93",l={permalink:"/blog/gookit-event-pacakge-intro",editUrl:"https://github.com/inhere/inhere.github.io/tree/main/blog/2023/06-14-gookit-event-pacakge-intro.md",source:"@site/blog/2023/06-14-gookit-event-pacakge-intro.md",title:"gookit/event - Go\u5b9e\u73b0\u7684\u8f7b\u91cf\u7ea7\u7684\u4e8b\u4ef6\u7ba1\u7406\u3001\u8c03\u5ea6\u7a0b\u5e8f\u5e93",description:"gookit/event Go\u5b9e\u73b0\u7684\u8f7b\u91cf\u7ea7\u7684\u4e8b\u4ef6\u7ba1\u7406\u3001\u8c03\u5ea6\u7a0b\u5e8f\u5e93, \u652f\u6301\u8bbe\u7f6e\u76d1\u542c\u5668\u7684\u4f18\u5148\u7ea7, \u652f\u6301\u4f7f\u7528\u901a\u914d\u7b26\u6765\u8fdb\u884c\u4e00\u7ec4\u4e8b\u4ef6\u7684\u76d1\u542c\u3002",date:"2023-06-14T15:53:00.000Z",formattedDate:"2023\u5e746\u670814\u65e5",tags:[{label:"golang",permalink:"/blog/tags/golang"},{label:"gookit",permalink:"/blog/tags/gookit"},{label:"event",permalink:"/blog/tags/event"}],readingTime:3.66,hasTruncateMarker:!0,authors:[{name:"inhere",title:"docs maintainer",url:"https://github.com/inhere",imageURL:"https://github.com/inhere.png",key:"inhere"}],frontMatter:{title:"gookit/event - Go\u5b9e\u73b0\u7684\u8f7b\u91cf\u7ea7\u7684\u4e8b\u4ef6\u7ba1\u7406\u3001\u8c03\u5ea6\u7a0b\u5e8f\u5e93",tags:["golang","gookit","event"],date:"2023-06-14T15:53",slug:"gookit-event-pacakge-intro",authors:"inhere"},prevItem:{title:"gookit/slog - \u53d1\u5e03 v0.5.2 \u7248\u672c, \u6613\u4e8e\u4f7f\u7528\u7684\uff0c\u53ef\u914d\u7f6e\u3001\u53ef\u6269\u5c55\u7684Go\u65e5\u5fd7\u5e93",permalink:"/blog/gookit-slog-release-v0.5.2"},nextItem:{title:"\u901a\u8fc7docker\u5b89\u88c5\u65e5\u5fd7\u641c\u7d22\u670d\u52a1 zincobserve(openobserve)",permalink:"/blog/install-log-search-zincobserve-by-docker"}},c={authorsImageUrls:[void 0]},p=[],g={toc:p},s="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"gookit/event")," Go\u5b9e\u73b0\u7684\u8f7b\u91cf\u7ea7\u7684\u4e8b\u4ef6\u7ba1\u7406\u3001\u8c03\u5ea6\u7a0b\u5e8f\u5e93, \u652f\u6301\u8bbe\u7f6e\u76d1\u542c\u5668\u7684\u4f18\u5148\u7ea7, \u652f\u6301\u4f7f\u7528\u901a\u914d\u7b26\u6765\u8fdb\u884c\u4e00\u7ec4\u4e8b\u4ef6\u7684\u76d1\u542c\u3002"))}u.isMDXComponent=!0}}]);