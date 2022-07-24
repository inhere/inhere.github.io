"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[709],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(n),m=i,g=f["".concat(p,".").concat(m)]||f[m]||u[m]||o;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5286:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const o={title:"linux \u7ec8\u7aef\u4e0b\u4e0a\u4f20\u4e0b\u8f7d\u547d\u4ee4 sftp,scp",tags:["linux","macOS","sftp","scp"],date:"2016-07-15T17:40",slug:"use-scp-or-sftp-up-down-files-in-linux",authors:"inhere"},a=void 0,l={permalink:"/en/blog/use-scp-or-sftp-up-down-files-in-linux",editUrl:"https://github.com/inhere/inhere.github.io/tree/main/blog/2016/07-15-use-scp-or-sftp-up-down-files-in-linux.md",source:"@site/blog/2016/07-15-use-scp-or-sftp-up-down-files-in-linux.md",title:"linux \u7ec8\u7aef\u4e0b\u4e0a\u4f20\u4e0b\u8f7d\u547d\u4ee4 sftp,scp",description:"\u5728linux\u6216\u8005mac \u7ec8\u7aef\u4e0b\u4e0a\u4f20\u4e0b\u8f7d\u547d\u4ee4 sftp,scp \u7684\u7b80\u5355\u4f7f\u7528\u4ecb\u7ecd",date:"2016-07-15T17:40:00.000Z",formattedDate:"July 15, 2016",tags:[{label:"linux",permalink:"/en/blog/tags/linux"},{label:"macOS",permalink:"/en/blog/tags/mac-os"},{label:"sftp",permalink:"/en/blog/tags/sftp"},{label:"scp",permalink:"/en/blog/tags/scp"}],readingTime:3.8,hasTruncateMarker:!0,authors:[{name:"inhere",title:"docs maintainer",url:"https://github.com/inhere",imageURL:"https://github.com/inhere.png",key:"inhere"}],frontMatter:{title:"linux \u7ec8\u7aef\u4e0b\u4e0a\u4f20\u4e0b\u8f7d\u547d\u4ee4 sftp,scp",tags:["linux","macOS","sftp","scp"],date:"2016-07-15T17:40",slug:"use-scp-or-sftp-up-down-files-in-linux",authors:"inhere"},prevItem:{title:"vim\u4f7f\u7528vimgrep\u5728\u5176\u4ed6\u6587\u4ef6\u4e2d\u6216\u8005\u6587\u4ef6\u5939\u4e2d\u641c\u7d22\u5b57\u7b26\u4e32",permalink:"/en/blog/use-vimgrep-search-file-contents-in-vim"},nextItem:{title:"composer.json \u4e2d\u7684 scripts \u811a\u672c",permalink:"/en/blog/scripts-in-php-composer-json"}},p={authorsImageUrls:[void 0]},s=[],c={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5728linux\u6216\u8005mac \u7ec8\u7aef\u4e0b\u4e0a\u4f20\u4e0b\u8f7d\u547d\u4ee4 sftp,scp \u7684\u7b80\u5355\u4f7f\u7528\u4ecb\u7ecd"))}u.isMDXComponent=!0}}]);