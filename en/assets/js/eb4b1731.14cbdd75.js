"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5991],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(n),h=o,f=s["".concat(i,".").concat(h)]||s[h]||m[h]||l;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5520:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const l={title:"php \u5b9e\u73b0\u4e00\u4e2a Telnet \u5de5\u5177\u7c7b",tags:["php","socket","telnet"],date:"2017-05-12T09:47",slug:"implement-a-telnet-tool-in-php",authors:"inhere"},a=void 0,p={permalink:"/en/blog/implement-a-telnet-tool-in-php",editUrl:"https://github.com/inhere/inhere.github.io/tree/main/blog/2017/05-12-implement-a-telnet-tool-in-php.md",source:"@site/blog/2017/05-12-implement-a-telnet-tool-in-php.md",title:"php \u5b9e\u73b0\u4e00\u4e2a Telnet \u5de5\u5177\u7c7b",description:"\u4f7f\u7528php \u91cc\u7684 socket \u76f8\u5173\u51fd\u6570\uff0c\u5b9e\u73b0\u4e00\u4e2a\u7b80\u5355\u7684 Telnet \u5de5\u5177\u7c7b\u3002",date:"2017-05-12T09:47:00.000Z",formattedDate:"May 12, 2017",tags:[{label:"php",permalink:"/en/blog/tags/php"},{label:"socket",permalink:"/en/blog/tags/socket"},{label:"telnet",permalink:"/en/blog/tags/telnet"}],readingTime:4.79,hasTruncateMarker:!0,authors:[{name:"inhere",title:"docs maintainer",url:"https://github.com/inhere",imageURL:"https://github.com/inhere.png",key:"inhere"}],frontMatter:{title:"php \u5b9e\u73b0\u4e00\u4e2a Telnet \u5de5\u5177\u7c7b",tags:["php","socket","telnet"],date:"2017-05-12T09:47",slug:"implement-a-telnet-tool-in-php",authors:"inhere"},prevItem:{title:"php\u4e2d\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u6a21\u5f0f\u4fee\u9970\u7b26",permalink:"/en/blog/regex-pattern-mode-in-php"},nextItem:{title:"PHP\u8c03\u8bd5\u7684\u5f3a\u608d\u5229\u5668\u4e4bPHPDBG",permalink:"/en/blog/debug-tool-phpdbg-usage-in-php"}},i={authorsImageUrls:[void 0]},c=[],u={toc:c};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4f7f\u7528php \u91cc\u7684 socket \u76f8\u5173\u51fd\u6570\uff0c\u5b9e\u73b0\u4e00\u4e2a\u7b80\u5355\u7684 Telnet \u5de5\u5177\u7c7b\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301\u53d1\u9001\u547d\u4ee4\uff0c\u83b7\u53d6\u7ed3\u679c"),(0,o.kt)("li",{parentName:"ul"},"\u8fdb\u5165\u4ea4\u4e92\u73af\u5883\uff0c\u7c7b\u4f3c\u4e8e\u547d\u4ee4\u884c\u5de5\u5177telnet"),(0,o.kt)("li",{parentName:"ul"},"\u6301\u7eed\u7684\u76d1\u63a7\u4e00\u4e2a\u547d\u4ee4 \uff0c\u7c7b\u4f3c\u4e8e\u547d\u4ee4\u884c\u7684 watch")))}m.isMDXComponent=!0}}]);