"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8279],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),h=o,f=m["".concat(p,".").concat(h)]||m[h]||u[h]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2844:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={title:"ZSH\u81ea\u52a8\u8865\u5168\u811a\u672c\u7f16\u5199",authors:"inhere",tags:["shell","zsh","linux"],date:"2021-07-28T22:04"},l="ZSH \u81ea\u52a8\u8865\u5168\u811a\u672c\u7f16\u5199",i={permalink:"/en/blog/2021/07/28/zsh-completions-howto",editUrl:"https://github.com/inhere/inhere.github.io/tree/main/blog/2021/07-28-zsh-completions-howto.md",source:"@site/blog/2021/07-28-zsh-completions-howto.md",title:"ZSH\u81ea\u52a8\u8865\u5168\u811a\u672c\u7f16\u5199",description:"\u544a\u8bc9 zsh \u4f7f\u7528\u54ea\u4e2a\u51fd\u6570\u6765\u5b8c\u6210\u547d\u4ee4",date:"2021-07-28T22:04:00.000Z",formattedDate:"July 28, 2021",tags:[{label:"shell",permalink:"/en/blog/tags/shell"},{label:"zsh",permalink:"/en/blog/tags/zsh"},{label:"linux",permalink:"/en/blog/tags/linux"}],readingTime:16.375,hasTruncateMarker:!0,authors:[{name:"inhere",title:"docs maintainer",url:"https://github.com/inhere",imageURL:"https://github.com/inhere.png",key:"inhere"}],frontMatter:{title:"ZSH\u81ea\u52a8\u8865\u5168\u811a\u672c\u7f16\u5199",authors:"inhere",tags:["shell","zsh","linux"],date:"2021-07-28T22:04"},prevItem:{title:"MDX Blog Post",permalink:"/en/blog/mdx-blog-post"},nextItem:{title:"\u5728shell\u811a\u672c\u91cc\u7b80\u5355\u5feb\u901f\u7684\u4f7f\u7528\u989c\u8272",permalink:"/en/blog/simple-use-color-in-shell"}},p={authorsImageUrls:[void 0]},s=[],c={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u544a\u8bc9 zsh \u4f7f\u7528\u54ea\u4e2a\u51fd\u6570\u6765\u5b8c\u6210\u547d\u4ee4"),(0,o.kt)("p",null,"\u547d\u4ee4\u7684\u5b8c\u6210\u51fd\u6570\u5b58\u50a8\u5728\u540d\u79f0\u4ee5\u4e0b\u5212\u7ebf ",(0,o.kt)("inlineCode",{parentName:"p"},"_")," \u5f00\u5934\u7684\u6587\u4ef6\u4e2d\uff0c\u8fd9\u4e9b\u6587\u4ef6\u5e94\u653e\u7f6e\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"$fpath")," \u53d8\u91cf\u4e2d\u5217\u51fa\u7684\u76ee\u5f55\u4e2d\u3002\n\u53ef\u4ee5\u901a\u8fc7\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.zshrc")," \u6587\u4ef6\u4e2d\u6dfb\u52a0\u8fd9\u6837\u7684\u884c\u6765\u5411 ",(0,o.kt)("inlineCode",{parentName:"p"},"$fpath")," \u6dfb\u52a0\u76ee\u5f55\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"fpath=(~/newdir $fpath )\n")))}u.isMDXComponent=!0}}]);