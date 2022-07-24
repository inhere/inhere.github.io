"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3422],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=u(n),f=i,m=g["".concat(p,".").concat(f)]||g[f]||s[f]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},944:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={title:"linux\u4e0b\u7684find\u6587\u4ef6\u67e5\u627e\u547d\u4ee4\u4e0egrep\u6587\u4ef6\u5185\u5bb9\u67e5\u627e\u547d\u4ee4",tags:["linux","find","grep","tools"],date:"2016-08-04T23:34",slug:"the-find-and-grep-usage-on-linux",authors:"inhere"},o=void 0,l={permalink:"/blog/the-find-and-grep-usage-on-linux",editUrl:"https://github.com/inhere/inhere.github.io/tree/main/blog/2016/08-04-the-find-and-grep-usage-on-linux.md",source:"@site/blog/2016/08-04-the-find-and-grep-usage-on-linux.md",title:"linux\u4e0b\u7684find\u6587\u4ef6\u67e5\u627e\u547d\u4ee4\u4e0egrep\u6587\u4ef6\u5185\u5bb9\u67e5\u627e\u547d\u4ee4",description:"linux\u4e0b\u7684find\u6587\u4ef6\u67e5\u627e\u547d\u4ee4\u4e0egrep\u6587\u4ef6\u5185\u5bb9\u67e5\u627e\u547d\u4ee4\u7684\u4f7f\u7528\u3002",date:"2016-08-04T23:34:00.000Z",formattedDate:"2016\u5e748\u67084\u65e5",tags:[{label:"linux",permalink:"/blog/tags/linux"},{label:"find",permalink:"/blog/tags/find"},{label:"grep",permalink:"/blog/tags/grep"},{label:"tools",permalink:"/blog/tags/tools"}],readingTime:4.88,hasTruncateMarker:!0,authors:[{name:"inhere",title:"docs maintainer",url:"https://github.com/inhere",imageURL:"https://github.com/inhere.png",key:"inhere"}],frontMatter:{title:"linux\u4e0b\u7684find\u6587\u4ef6\u67e5\u627e\u547d\u4ee4\u4e0egrep\u6587\u4ef6\u5185\u5bb9\u67e5\u627e\u547d\u4ee4",tags:["linux","find","grep","tools"],date:"2016-08-04T23:34",slug:"the-find-and-grep-usage-on-linux",authors:"inhere"},prevItem:{title:"Linux\u4e0b\u5e38\u7528\u538b\u7f29\u683c\u5f0f\u7684\u538b\u7f29\u4e0e\u89e3\u538b\u65b9\u6cd5",permalink:"/blog/compress-and-uncompress-command-in-linux"},nextItem:{title:"git\u521b\u5efa\u548c\u4f7f\u7528\u8865\u4e01patch",permalink:"/blog/create-and-apply-patch-in-git"}},p={authorsImageUrls:[void 0]},u=[],c={toc:u};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"linux\u4e0b\u7684find\u6587\u4ef6\u67e5\u627e\u547d\u4ee4\u4e0egrep\u6587\u4ef6\u5185\u5bb9\u67e5\u627e\u547d\u4ee4\u7684\u4f7f\u7528\u3002"),(0,i.kt)("p",null,"\u5728\u4f7f\u7528linux\u65f6\uff0c\u7ecf\u5e38\u9700\u8981\u8fdb\u884c\u6587\u4ef6\u67e5\u627e\u3002\u5176\u4e2d\u67e5\u627e\u7684\u547d\u4ee4\u4e3b\u8981\u6709find\u548cgrep\u3002\u4e24\u4e2a\u547d\u4ee4\u662f\u6709\u533a\u7684\u3002"))}s.isMDXComponent=!0}}]);