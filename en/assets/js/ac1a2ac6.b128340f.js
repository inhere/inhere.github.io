"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2779],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=s(r),y=o,f=m["".concat(c,".").concat(y)]||m[y]||p[y]||l;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4076:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const l={title:"Mysql\u7684\u9501\u673a\u5236\u89e3\u8bfb",tags:["mysql","lock"],date:"2016-09-07T21:17",slug:"lock-intro-in-mysql",authors:"inhere"},i=void 0,a={permalink:"/en/blog/lock-intro-in-mysql",editUrl:"https://github.com/inhere/inhere.github.io/tree/main/blog/2016/09-07-lock-intro-in-mysql.md",source:"@site/blog/2016/09-07-lock-intro-in-mysql.md",title:"Mysql\u7684\u9501\u673a\u5236\u89e3\u8bfb",description:"Mysql\u7684\u9501\u673a\u5236\u89e3\u8bfb\u8bf4\u660e",date:"2016-09-07T21:17:00.000Z",formattedDate:"September 7, 2016",tags:[{label:"mysql",permalink:"/en/blog/tags/mysql"},{label:"lock",permalink:"/en/blog/tags/lock"}],readingTime:13.14,hasTruncateMarker:!0,authors:[{name:"inhere",title:"docs maintainer",url:"https://github.com/inhere",imageURL:"https://github.com/inhere.png",key:"inhere"}],frontMatter:{title:"Mysql\u7684\u9501\u673a\u5236\u89e3\u8bfb",tags:["mysql","lock"],date:"2016-09-07T21:17",slug:"lock-intro-in-mysql",authors:"inhere"},prevItem:{title:"linux \u547d\u4ee4 sed \u8be6\u89e3",permalink:"/en/blog/sec-command-usage-in-linux"},nextItem:{title:"Linux \u547d\u4ee4\u795e\u5668 lsof \u5165\u95e8",permalink:"/en/blog/lsof-command-usage-in-linux"}},c={authorsImageUrls:[void 0]},s=[],u={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Mysql\u7684\u9501\u673a\u5236\u89e3\u8bfb\u8bf4\u660e"))}p.isMDXComponent=!0}}]);