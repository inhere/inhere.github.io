"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8114],{9613:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>g});var n=r(9496);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),s=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},u=function(t){var e=s(t.components);return n.createElement(c.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),p=s(r),h=a,g=p["".concat(c,".").concat(h)]||p[h]||m[h]||o;return r?n.createElement(g,l(l({ref:e},u),{},{components:r})):n.createElement(g,l({ref:e},u))}));function g(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=h;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[p]="string"==typeof t?t:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8159:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(1966),a=(r(9496),r(9613));const o={title:"Linux\u7684chattr\u4e0elsattr\u547d\u4ee4\u4f7f\u7528",tags:["linux","chattr","lsattr","tools"],date:"2016-11-08T15:13",slug:"chattr-lsattr-command-in-linux",authors:["inhere","network"]},l=void 0,i={permalink:"/blog/chattr-lsattr-command-in-linux",editUrl:"https://github.com/inhere/inhere.github.io/tree/main/blog/2016/11-08-chattr-lsattr-command-in-linux.md",source:"@site/blog/2016/11-08-chattr-lsattr-command-in-linux.md",title:"Linux\u7684chattr\u4e0elsattr\u547d\u4ee4\u4f7f\u7528",description:"\u6709\u65f6\u5019\u4f60\u53d1\u73b0 \u7528root\u6743\u9650\u90fd\u4e0d\u80fd\u4fee\u6539\u67d0\u4e2a\u6587\u4ef6\uff0c\u5927\u90e8\u5206\u539f\u56e0\u662f\u66fe\u7ecf\u7528chattr\u547d\u4ee4\u9501\u5b9a\u8be5\u6587\u4ef6\u4e86\u3002",date:"2016-11-08T15:13:00.000Z",formattedDate:"2016\u5e7411\u67088\u65e5",tags:[{label:"linux",permalink:"/blog/tags/linux"},{label:"chattr",permalink:"/blog/tags/chattr"},{label:"lsattr",permalink:"/blog/tags/lsattr"},{label:"tools",permalink:"/blog/tags/tools"}],readingTime:4.05,hasTruncateMarker:!0,authors:[{name:"inhere",title:"docs maintainer",url:"https://github.com/inhere",imageURL:"https://github.com/inhere.png",key:"inhere"},{name:"From Network",title:"Contents from network",key:"network"}],frontMatter:{title:"Linux\u7684chattr\u4e0elsattr\u547d\u4ee4\u4f7f\u7528",tags:["linux","chattr","lsattr","tools"],date:"2016-11-08T15:13",slug:"chattr-lsattr-command-in-linux",authors:["inhere","network"]},prevItem:{title:"PHP\u8c03\u8bd5\u7684\u5f3a\u608d\u5229\u5668\u4e4bPHPDBG",permalink:"/blog/debug-tool-phpdbg-usage-in-php"},nextItem:{title:"Shell\u811a\u672c\u4f7f\u7528",permalink:"/blog/shell-script-learn-usage"}},c={authorsImageUrls:[void 0,void 0]},s=[],u={toc:s},p="wrapper";function m(t){let{components:e,...r}=t;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6709\u65f6\u5019\u4f60\u53d1\u73b0 ",(0,a.kt)("strong",{parentName:"p"},"\u7528root\u6743\u9650\u90fd\u4e0d\u80fd\u4fee\u6539\u67d0\u4e2a\u6587\u4ef6"),"\uff0c\u5927\u90e8\u5206\u539f\u56e0\u662f\u66fe\u7ecf\u7528chattr\u547d\u4ee4\u9501\u5b9a\u8be5\u6587\u4ef6\u4e86\u3002"))}m.isMDXComponent=!0}}]);