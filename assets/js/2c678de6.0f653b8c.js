"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2903],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,f=p["".concat(c,".").concat(m)]||p[m]||g[m]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8724:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(1966),i=(n(9496),n(9613));const o={title:"Nginx\u5185\u7f6e\u53d8\u91cf\u5927\u5168",tags:["nginx"],date:"2016-05-13T16:51",slug:"nginx-built-in-vars-refers",authors:["inhere","network"]},a=void 0,l={permalink:"/blog/nginx-built-in-vars-refers",editUrl:"https://github.com/inhere/inhere.github.io/tree/main/blog/2016/05-13-nginx-built-in-vars-refers.md",source:"@site/blog/2016/05-13-nginx-built-in-vars-refers.md",title:"Nginx\u5185\u7f6e\u53d8\u91cf\u5927\u5168",description:"\u5728\u914d\u7f6e\u57fa\u4e8enginx\u670d\u52a1\u5668\u7684\u7f51\u7ad9\u65f6\uff0c\u5fc5\u7136\u4f1a\u7528\u5230 nginx\u5185\u7f6e\u53d8\u91cf \uff0c\u4e0b\u9762\u7b14\u8005\u5c06\u5b83\u6574\u7406\u6210\u5217\u8868\uff0c\u628a\u6700\u65b0\u7248\u672c\u7684\u53d8\u91cf\u5217\u51fa\u6765\uff0c\u4ee5\u65b9\u4fbf\u505a\u914d\u7f6e\u65f6\u67e5\u8be2",date:"2016-05-13T16:51:00.000Z",formattedDate:"2016\u5e745\u670813\u65e5",tags:[{label:"nginx",permalink:"/blog/tags/nginx"}],readingTime:6.105,hasTruncateMarker:!0,authors:[{name:"inhere",title:"docs maintainer",url:"https://github.com/inhere",imageURL:"https://github.com/inhere.png",key:"inhere"},{name:"From Network",title:"Contents from network",key:"network"}],frontMatter:{title:"Nginx\u5185\u7f6e\u53d8\u91cf\u5927\u5168",tags:["nginx"],date:"2016-05-13T16:51",slug:"nginx-built-in-vars-refers",authors:["inhere","network"]},prevItem:{title:"Nginx\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u53d8\u91cf\u7684\u7f16\u5199\u4f7f\u7528",permalink:"/blog/custom-vars-usage-in-ngnix-config"},nextItem:{title:"vim \u4f7f\u7528\u8bb0\u5f55",permalink:"/blog/vim-usage-records"}},c={authorsImageUrls:[void 0,void 0]},s=[],u={toc:s},p="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5728\u914d\u7f6e\u57fa\u4e8enginx\u670d\u52a1\u5668\u7684\u7f51\u7ad9\u65f6\uff0c\u5fc5\u7136\u4f1a\u7528\u5230 ",(0,i.kt)("strong",{parentName:"p"},"nginx\u5185\u7f6e\u53d8\u91cf")," \uff0c\u4e0b\u9762\u7b14\u8005\u5c06\u5b83\u6574\u7406\u6210\u5217\u8868\uff0c\u628a\u6700\u65b0\u7248\u672c\u7684\u53d8\u91cf\u5217\u51fa\u6765\uff0c\u4ee5\u65b9\u4fbf\u505a\u914d\u7f6e\u65f6\u67e5\u8be2"))}g.isMDXComponent=!0}}]);