"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[910],{9613:(e,n,t)=>{t.d(n,{Zo:()=>i,kt:()=>g});var a=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},i=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,i=m(e,["components","mdxType","originalType","parentName"]),u=s(t),c=r,g=u["".concat(o,".").concat(c)]||u[c]||d[c]||l;return t?a.createElement(g,p(p({ref:n},i),{},{components:t})):a.createElement(g,p({ref:n},i))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,p=new Array(l);p[0]=c;var m={};for(var o in n)hasOwnProperty.call(n,o)&&(m[o]=n[o]);m.originalType=e,m[u]="string"==typeof e?e:r,p[1]=m;for(var s=2;s<l;s++)p[s]=t[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},9182:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>m,toc:()=>s});var a=t(1966),r=(t(9496),t(9613));const l={title:"npm\u5e38\u7528\u547d\u4ee4",date:"2019-12-25T14:27",tags:["npm"],authors:"xugaoyi"},p="npm\u5e38\u7528\u547d\u4ee4",m={unversionedId:"tools/npm\u5e38\u7528\u547d\u4ee4",id:"tools/npm\u5e38\u7528\u547d\u4ee4",title:"npm\u5e38\u7528\u547d\u4ee4",description:"\u7b80\u4ecb",source:"@site/docs/tools/03.npm\u5e38\u7528\u547d\u4ee4.md",sourceDirName:"tools",slug:"/tools/npm\u5e38\u7528\u547d\u4ee4",permalink:"/en/docs/tools/npm\u5e38\u7528\u547d\u4ee4",draft:!1,editUrl:"https://github.com/inhere/inhere.github.io/tree/main/docs/tools/03.npm\u5e38\u7528\u547d\u4ee4.md",tags:[{label:"npm",permalink:"/en/docs/tags/npm"}],version:"current",sidebarPosition:3,frontMatter:{title:"npm\u5e38\u7528\u547d\u4ee4",date:"2019-12-25T14:27",tags:["npm"],authors:"xugaoyi"},sidebar:"tutorialSidebar",previous:{title:"JetBrains \u5e73\u53f0 IDEs \u5e38\u7528\u63d2\u4ef6\u8bb0\u5f55",permalink:"/en/docs/tools/my-jetbrains-ide-plugins"},next:{title:"bash \u5e38\u7528\u547d\u4ee4\u8bb0\u5f55",permalink:"/en/docs/tools/bash\u5e38\u7528\u547d\u4ee4"}},o={},s=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:2},{value:"\u68c0\u6d4b\u662f\u5426\u5b89\u88c5\u53ca\u7248\u672c",id:"\u68c0\u6d4b\u662f\u5426\u5b89\u88c5\u53ca\u7248\u672c",level:4},{value:"\u751f\u6210package.json\u6587\u4ef6",id:"\u751f\u6210packagejson\u6587\u4ef6",level:4},{value:"\u5b89\u88c5\u6a21\u5757",id:"\u5b89\u88c5\u6a21\u5757",level:4},{value:"\u67e5\u770b",id:"\u67e5\u770b",level:4},{value:"\u66f4\u65b0\u6a21\u5757",id:"\u66f4\u65b0\u6a21\u5757",level:4},{value:"\u5378\u8f7d\u6a21\u5757",id:"\u5378\u8f7d\u6a21\u5757",level:4},{value:"\u6e05\u7a7a\u7f13\u5b58",id:"\u6e05\u7a7a\u7f13\u5b58",level:4},{value:"\u4f7f\u7528\u6dd8\u5b9d\u955c\u50cf",id:"\u4f7f\u7528\u6dd8\u5b9d\u955c\u50cf",level:4},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:4},{value:"\u4f7f\u7528\u6280\u5de7",id:"\u4f7f\u7528\u6280\u5de7",level:2},{value:"\u591a\u6b21\u5b89\u88c5\u4e0d\u6210\u529f\u5c1d\u8bd5\u5148\u6e05\u9664\u7f13\u5b58",id:"\u591a\u6b21\u5b89\u88c5\u4e0d\u6210\u529f\u5c1d\u8bd5\u5148\u6e05\u9664\u7f13\u5b58",level:4},{value:"\u67e5\u770b\u5df2\u5b89\u88c5\u7684\u4f9d\u8d56\u5305\u7248\u672c\u53f7",id:"\u67e5\u770b\u5df2\u5b89\u88c5\u7684\u4f9d\u8d56\u5305\u7248\u672c\u53f7",level:4},{value:"npm\u53d1\u5e03\u5305\u6559\u7a0b",id:"npm\u53d1\u5e03\u5305\u6559\u7a0b",level:2},{value:"nrm\u7684\u4f5c\u7528\u4e0e\u4f7f\u7528",id:"nrm\u7684\u4f5c\u7528\u4e0e\u4f7f\u7528",level:2},{value:"nrm\u662f\u4ec0\u4e48\uff1f",id:"nrm\u662f\u4ec0\u4e48",level:4},{value:"nrm\u7684\u5b89\u88c5",id:"nrm\u7684\u5b89\u88c5",level:4},{value:"nrm\u547d\u4ee4",id:"nrm\u547d\u4ee4",level:4},{value:"nrm\u4f7f\u7528",id:"nrm\u4f7f\u7528",level:4}],i={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"npm\u5e38\u7528\u547d\u4ee4"},"npm\u5e38\u7528\u547d\u4ee4"),(0,r.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,r.kt)("p",null,"npm\u662f\u8ddf\u968fnode\u4e00\u8d77\u5b89\u88c5\u7684\u5305\uff08\u6a21\u5757\uff09\u7ba1\u7406\u5668\u3002\u5e38\u89c1\u7684\u4f7f\u7528\u573a\u666f\u6709\u4ee5\u4e0b\u51e0\u79cd\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5141\u8bb8\u7528\u6237\u4ecenpm\u670d\u52a1\u5668\u4e0b\u8f7d\u522b\u4eba\u7f16\u5199\u7684\u7b2c\u4e09\u65b9\u5305\u5230\u672c\u5730\u4f7f\u7528\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5141\u8bb8\u7528\u6237\u4ecenpm\u670d\u52a1\u5668\u4e0b\u8f7d\u5e76\u5b89\u88c5\u522b\u4eba\u7f16\u5199\u7684\u547d\u4ee4\u884c\u7a0b\u5e8f\u5230\u672c\u5730\u4f7f\u7528\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5141\u8bb8\u7528\u6237\u5c06\u81ea\u5df1\u7f16\u5199\u7684\u5305\u6216\u547d\u4ee4\u884c\u7a0b\u5e8f\u4e0a\u4f20\u5230npm\u670d\u52a1\u5668\u4f9b\u522b\u4eba\u4f7f\u7528\u3002")),(0,r.kt)("h2",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),(0,r.kt)("h4",{id:"\u68c0\u6d4b\u662f\u5426\u5b89\u88c5\u53ca\u7248\u672c"},"\u68c0\u6d4b\u662f\u5426\u5b89\u88c5\u53ca\u7248\u672c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm -v # \u663e\u793a\u7248\u672c\u53f7\u8bf4\u660e\u5df2\u7ecf\u5b89\u88c5\u76f8\u5e94\u7684\u7248\u672c\n")),(0,r.kt)("h4",{id:"\u751f\u6210packagejson\u6587\u4ef6"},"\u751f\u6210package.json\u6587\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm init\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"package.json\u7528\u6765\u63cf\u8ff0\u9879\u76ee\u4e2d\u7528\u5230\u7684\u6a21\u5757\u548c\u5176\u4ed6\u4fe1\u606f")),(0,r.kt)("h4",{id:"\u5b89\u88c5\u6a21\u5757"},"\u5b89\u88c5\u6a21\u5757"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install # \u5b89\u88c5package.json\u5b9a\u4e49\u597d\u7684\u6a21\u5757\uff0c\u7b80\u5199 npm i\n\n# \u5b89\u88c5\u5305\u6307\u5b9a\u6a21\u5757\nnpm i <ModuleName>\n\n# \u5168\u5c40\u5b89\u88c5\nnpm i <ModuleName> -g\n\n# \u5b89\u88c5\u5305\u7684\u540c\u65f6\uff0c\u5c06\u4fe1\u606f\u5199\u5165\u5230package.json\u4e2d\u7684 dependencies \u914d\u7f6e\u4e2d\nnpm i <ModuleName> --save\n\n# \u5b89\u88c5\u5305\u7684\u540c\u65f6\uff0c\u5c06\u4fe1\u606f\u5199\u5165\u5230package.json\u4e2d\u7684 devDependencies \u914d\u7f6e\u4e2d\nnpm i <ModuleName> --save-dev\n\n# \u5b89\u88c5\u591a\u6a21\u5757\nnpm i <ModuleName1> <ModuleName2>\n\n# \u5b89\u88c5\u65b9\u5f0f\u53c2\u6570\uff1a\n-save # \u7b80\u5199-S\uff0c\u52a0\u5165\u5230\u751f\u4ea7\u4f9d\u8d56\u4e2d\n-save-dev # \u7b80\u5199-D\uff0c\u52a0\u5165\u5230\u5f00\u53d1\u4f9d\u8d56\u4e2d\n-g # \u5168\u5c40\u5b89\u88c5 \u5c06\u5b89\u88c5\u5305\u653e\u5728 /usr/local \u4e0b\u6216\u8005\u4f60 node \u7684\u5b89\u88c5\u76ee\u5f55\n")),(0,r.kt)("h4",{id:"\u67e5\u770b"},"\u67e5\u770b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# \u67e5\u770b\u6240\u6709\u5168\u5c40\u5b89\u88c5\u7684\u5305\nnpm ls -g\n\n# \u67e5\u770b\u672c\u5730\u9879\u76ee\u4e2d\u5b89\u88c5\u7684\u5305\nnpm ls\n\n# \u67e5\u770b\u5305\u7684 package.json\u6587\u4ef6\nnpm view <ModuleName>\n\n# \u67e5\u770b\u5305\u7684\u4f9d\u8d56\u5173\u7cfb\nnpm view <ModuleName> dependencies\n\n# \u67e5\u770b\u5305\u7684\u6e90\u6587\u4ef6\u5730\u5740\nnpm view <ModuleName> repository.url\n\n# \u67e5\u770b\u5305\u6240\u4f9d\u8d56\u7684node\u7248\u672c\nnpm view <ModuleName> engines\n\n# \u67e5\u770b\u5e2e\u52a9\nnpm help\n")),(0,r.kt)("h4",{id:"\u66f4\u65b0\u6a21\u5757"},"\u66f4\u65b0\u6a21\u5757"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# \u66f4\u65b0\u672c\u5730\u6a21\u5757\nnpm update <ModuleName>\n\n# \u66f4\u65b0\u5168\u5c40\u6a21\u5757\nnpm update -g <ModuleName> # \u66f4\u65b0\u5168\u5c40\u8f6f\u4ef6\u5305\u3002\nnpm update -g # \u66f4\u65b0\u6240\u6709\u7684\u5168\u5c40\u8f6f\u4ef6\u5305\u3002\nnpm outdated -g --depth=0 # \u627e\u51fa\u9700\u8981\u66f4\u65b0\u7684\u5305\u3002\n")),(0,r.kt)("h4",{id:"\u5378\u8f7d\u6a21\u5757"},"\u5378\u8f7d\u6a21\u5757"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# \u5378\u8f7d\u672c\u5730\u6a21\u5757\nnpm uninstall <ModuleName>\n\n# \u5378\u8f7d\u5168\u5c40\u6a21\u5757\nnpm uninstall -g <ModuleName> # \u5378\u8f7d\u5168\u5c40\u8f6f\u4ef6\u5305\u3002\n")),(0,r.kt)("h4",{id:"\u6e05\u7a7a\u7f13\u5b58"},"\u6e05\u7a7a\u7f13\u5b58"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# \u6e05\u7a7anpm\u7f13\u5b58\nnpm cache clear\n")),(0,r.kt)("h4",{id:"\u4f7f\u7528\u6dd8\u5b9d\u955c\u50cf"},"\u4f7f\u7528\u6dd8\u5b9d\u955c\u50cf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# \u4f7f\u7528\u6dd8\u5b9d\u955c\u50cf\nnpm install -g cnpm --registry=https://registry.npm.taobao.org\n")),(0,r.kt)("h4",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# \u66f4\u6539\u5305\u5185\u5bb9\u540e\u8fdb\u884c\u91cd\u5efa\nnpm rebuild <ModuleName>\n\n# \u68c0\u67e5\u5305\u662f\u5426\u5df2\u7ecf\u8fc7\u65f6\uff0c\u6b64\u547d\u4ee4\u4f1a\u5217\u51fa\u6240\u6709\u5df2\u7ecf\u8fc7\u65f6\u7684\u5305\uff0c\u53ef\u4ee5\u53ca\u65f6\u8fdb\u884c\u5305\u7684\u66f4\u65b0\nnpm outdated\n\n# \u8bbf\u95eenpm\u7684json\u6587\u4ef6\uff0c\u6b64\u547d\u4ee4\u5c06\u4f1a\u6253\u5f00\u4e00\u4e2a\u7f51\u9875\nnpm help json\n\n# \u53d1\u5e03\u4e00\u4e2a\u5305\u7684\u65f6\u5019\uff0c\u9700\u8981\u68c0\u9a8c\u67d0\u4e2a\u5305\u540d\u662f\u5426\u5b58\u5728\nnpm search <ModuleName>\n\n# \u64a4\u9500\u81ea\u5df1\u53d1\u5e03\u8fc7\u7684\u67d0\u4e2a\u7248\u672c\u4ee3\u7801\nnpm unpublish <package> <version>\n")),(0,r.kt)("h2",{id:"\u4f7f\u7528\u6280\u5de7"},"\u4f7f\u7528\u6280\u5de7"),(0,r.kt)("h4",{id:"\u591a\u6b21\u5b89\u88c5\u4e0d\u6210\u529f\u5c1d\u8bd5\u5148\u6e05\u9664\u7f13\u5b58"},"\u591a\u6b21\u5b89\u88c5\u4e0d\u6210\u529f\u5c1d\u8bd5\u5148\u6e05\u9664\u7f13\u5b58"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm cache clean -f\n")),(0,r.kt)("h4",{id:"\u67e5\u770b\u5df2\u5b89\u88c5\u7684\u4f9d\u8d56\u5305\u7248\u672c\u53f7"},"\u67e5\u770b\u5df2\u5b89\u88c5\u7684\u4f9d\u8d56\u5305\u7248\u672c\u53f7"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm ls <ModuleName>\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'\u6ce8\u610f\uff1a\u7528\u6b64\u65b9\u6cd5\u624d\u80fd\u51c6\u786e\u7684\u77e5\u9053\u9879\u76ee\u4f7f\u7528\u7684\u7248\u672c\u53f7\uff0c\u67e5\u770bpackage.json\u65f6\uff0c\u6709\u201c^" \u7b26\u53f7\u8868\u793a\u5927\u4e8e\u6b64\u7248\u672c')),(0,r.kt)("h2",{id:"npm\u53d1\u5e03\u5305\u6559\u7a0b"},"npm\u53d1\u5e03\u5305\u6559\u7a0b"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://segmentfault.com/a/1190000017461666"},"npm\u53d1\u5e03\u5305\u6559\u7a0b")),(0,r.kt)("h2",{id:"nrm\u7684\u4f5c\u7528\u4e0e\u4f7f\u7528"},"nrm\u7684\u4f5c\u7528\u4e0e\u4f7f\u7528"),(0,r.kt)("h4",{id:"nrm\u662f\u4ec0\u4e48"},"nrm\u662f\u4ec0\u4e48\uff1f"),(0,r.kt)("p",null,"nrm(npm registry manager )\u662fnpm\u7684\u955c\u50cf\u6e90\u7ba1\u7406\u5de5\u5177\uff0c\u6709\u65f6\u5019\u56fd\u5916\u8d44\u6e90\u592a\u6162\uff0c\u4f7f\u7528\u8fd9\u4e2a\u5c31\u53ef\u4ee5\u5feb\u901f\u5730\u5728 npm \u6e90\u95f4\u5207\u6362"),(0,r.kt)("h4",{id:"nrm\u7684\u5b89\u88c5"},"nrm\u7684\u5b89\u88c5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g nrm\n")),(0,r.kt)("h4",{id:"nrm\u547d\u4ee4"},"nrm\u547d\u4ee4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"nrm ls\u3000#\u67e5\u770b\u53ef\u7528\u7684\u6e90\uff08\u6709*\u53f7\u7684\u8868\u793a\u5f53\u524d\u6240\u4f7f\u7528\u7684\u6e90,\u4ee5\u4e0b<registry>\u8868\u793a\u6e90\u7684\u540d\u79f0\uff09\nnrm use <registry> # \u5c06npm\u4e0b\u8f7d\u6e90\u5207\u6362\u6210\u6307\u5b9a\u7684\u6e90\nnrm add <registry> <url> # \u6dfb\u52a0\u6e90\uff0curl\u4e3a\u6e90\u7684\u8def\u5f84\nnrm del <registry> # \u5220\u9664\u6e90\nnrm test <registry> # \u6d4b\u8bd5\u6e90\u7684\u54cd\u5e94\u65f6\u95f4\uff0c\u53ef\u4ee5\u4f5c\u4e3a\u4f7f\u7528\u54ea\u4e2a\u6e90\u7684\u53c2\u8003\n\nnrm help\u3000# \u67e5\u770bnrm\u5e2e\u52a9\nnrm home <registry>\u3000# \u8df3\u8f6c\u5230\u6307\u5b9a\u6e90\u7684\u5b98\u7f51\n")),(0,r.kt)("h4",{id:"nrm\u4f7f\u7528"},"nrm\u4f7f\u7528"),(0,r.kt)("p",null,"\u5982\u679c\u5728\u4f60\u7684\u7f51\u7edc\u4e0d\u592a\u7406\u60f3\u6216\u8005\u53d7\u5230\u5176\u4ed6\u7f51\u7edc\u9650\u5236\u5bfc\u81f4\u4e0d\u80fd\u4f7f\u7528npm\u539f\u672c\u7684\u6e90\u8fdb\u884c\u4e0b\u8f7d\u65f6\uff0cnrm\u5c31\u975e\u5e38\u6709\u7528\u4e86\uff0c\u4f60\u53ea\u9700\u8981\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"nrm ls # \u67e5\u770b\u53ef\u7528\u7684\u6e90\nnrm use <registry>\u3000# \u5207\u6362\u5230\u6307\u5b9a\u6e90\n")))}d.isMDXComponent=!0}}]);