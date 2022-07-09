"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6353],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=c(r),m=a,d=g["".concat(p,".").concat(m)]||g[m]||u[m]||o;return r?n.createElement(d,l(l({ref:t},s),{},{components:r})):n.createElement(d,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},1372:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"\u7ed9http.Handler\u5305\u88c5\u4e2d\u95f4\u4ef6",authors:"inhere",tags:["golang","http"],date:"2018-08-10T22:00",slug:"wrap-middleware-for-http-handler-in-golang"},l=void 0,i={permalink:"/wrap-middleware-for-http-handler-in-golang",editUrl:"https://github.com/inhere/inhere.github.io/tree/main/packages/blog/blog/2018/08-10-wrap-middleware-for-http-handler.md",source:"@site/blog/2018/08-10-wrap-middleware-for-http-handler.md",title:"\u7ed9http.Handler\u5305\u88c5\u4e2d\u95f4\u4ef6",description:"Golang \u4e0b\u7ed9 http.Handler \u5305\u88c5\u4e2d\u95f4\u4ef6",date:"2018-08-10T22:00:00.000Z",formattedDate:"2018\u5e748\u670810\u65e5",tags:[{label:"golang",permalink:"/tags/golang"},{label:"http",permalink:"/tags/http"}],readingTime:.69,hasTruncateMarker:!0,authors:[{name:"inhere",title:"docs maintainer",url:"https://github.com/inhere",imageURL:"https://github.com/inhere.png",key:"inhere"}],frontMatter:{title:"\u7ed9http.Handler\u5305\u88c5\u4e2d\u95f4\u4ef6",authors:"inhere",tags:["golang","http"],date:"2018-08-10T22:00",slug:"wrap-middleware-for-http-handler-in-golang"},prevItem:{title:"First Blog Post",permalink:"/first-blog-post"},nextItem:{title:"Go \u6355\u83b7 os.Stdout \u7684\u8f93\u51fa",permalink:"/rewrite-os-stdout-in-golang"}},p={authorsImageUrls:[void 0]},c=[],s={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Golang \u4e0b\u7ed9 http.Handler \u5305\u88c5\u4e2d\u95f4\u4ef6"))}u.isMDXComponent=!0}}]);