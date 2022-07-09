"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9295],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>N});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},k=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),u=m(n),N=l,c=u["".concat(o,".").concat(N)]||u[N]||d[N]||i;return n?a.createElement(c,r(r({ref:t},k),{},{components:n})):a.createElement(c,r({ref:t},k))}));function N(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,r[1]=p;for(var m=2;m<i;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4871:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var a=n(7462),l=(n(7294),n(3905));const i={title:"\u5b66\u4e60\u7f16\u5199bash\u547d\u4ee4\u81ea\u52a8\u8865\u5168",authors:"inhere",tags:["shell","bash","linux","completion"],date:"2021-08-09T11:24"},r=void 0,p={permalink:"/en/blog/2021/08/09/learn-bash-completion",editUrl:"https://github.com/inhere/inhere.github.io/tree/main/blog/2021/08-09-learn-bash-completion.md",source:"@site/blog/2021/08-09-learn-bash-completion.md",title:"\u5b66\u4e60\u7f16\u5199bash\u547d\u4ee4\u81ea\u52a8\u8865\u5168",description:"\u7b80\u5355\u5b66\u4e60\u7f16\u5199bash\u547d\u4ee4\u81ea\u52a8\u8865\u5168",date:"2021-08-09T11:24:00.000Z",formattedDate:"August 9, 2021",tags:[{label:"shell",permalink:"/en/blog/tags/shell"},{label:"bash",permalink:"/en/blog/tags/bash"},{label:"linux",permalink:"/en/blog/tags/linux"},{label:"completion",permalink:"/en/blog/tags/completion"}],readingTime:8.145,hasTruncateMarker:!0,authors:[{name:"inhere",title:"docs maintainer",url:"https://github.com/inhere",imageURL:"https://github.com/inhere.png",key:"inhere"}],frontMatter:{title:"\u5b66\u4e60\u7f16\u5199bash\u547d\u4ee4\u81ea\u52a8\u8865\u5168",authors:"inhere",tags:["shell","bash","linux","completion"],date:"2021-08-09T11:24"},prevItem:{title:"gitw - Git \u547d\u4ee4\u5305\u88c5\u5668\uff0c\u751f\u6210 git \u53d8\u66f4\u8bb0\u5f55\u65e5\u5fd7",permalink:"/en/blog/gookit-gitw-intro"},nextItem:{title:"\u7b80\u5355\u5feb\u901f\u7684\u914d\u7f6e\u81ea\u5df1\u7684bash\u73af\u5883",permalink:"/en/blog/2021/08/08/quick-config-bashrc"}},o={authorsImageUrls:[void 0]},m=[{value:"\u76f8\u5173\u51fd\u6570\u8bf4\u660e",id:"\u76f8\u5173\u51fd\u6570\u8bf4\u660e",level:2},{value:"complete \u51fd\u6570",id:"complete-\u51fd\u6570",level:3},{value:"compgen \u51fd\u6570",id:"compgen-\u51fd\u6570",level:3},{value:"\u5e2e\u52a9\u8c03\u8bd5",id:"\u5e2e\u52a9\u8c03\u8bd5",level:3},{value:"\u5206\u5272\u5355\u8bcd\u5217\u8868\u4f5c\u4e3a\u8865\u5168\u6570\u636e",id:"\u5206\u5272\u5355\u8bcd\u5217\u8868\u4f5c\u4e3a\u8865\u5168\u6570\u636e",level:2},{value:"\u4f7f\u7528echo\u8fd4\u56de\u4f5c\u4e3a\u8865\u5168\u6570\u636e",id:"\u4f7f\u7528echo\u8fd4\u56de\u4f5c\u4e3a\u8865\u5168\u6570\u636e",level:2},{value:"\u4f7f\u7528\u5916\u90e8\u51fd\u6570\u7684\u7ed3\u679c\u8865\u5168",id:"\u4f7f\u7528\u5916\u90e8\u51fd\u6570\u7684\u7ed3\u679c\u8865\u5168",level:2}],k={toc:m};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u7b80\u5355\u5b66\u4e60\u7f16\u5199bash\u547d\u4ee4\u81ea\u52a8\u8865\u5168"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4e0b\u9762\u7684\u793a\u4f8b\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"__my_completion")," \u4f5c\u4e3a\u547d\u4ee4\u884c\u5e94\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"myapp"),"(eg: git) \u7684\u8865\u5168\u51fd\u6570")),(0,l.kt)("h2",{id:"\u76f8\u5173\u51fd\u6570\u8bf4\u660e"},"\u76f8\u5173\u51fd\u6570\u8bf4\u660e"),(0,l.kt)("h3",{id:"complete-\u51fd\u6570"},"complete \u51fd\u6570"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"complete")," \u6307\u5b9a\u547d\u4ee4\u7684\u8865\u5168\u51fd\u6570"),(0,l.kt)("p",null,"\u81ea\u5b9a\u4e49\u8865\u5168\u65f6\u8c03\u7528complete\u547d\u4ee4\u6765\u5b8c\u6210\uff0ccomplete\u901a\u8fc7\u9009\u9879\u63d0\u4f9b\u4e86\u591a\u79cd\u8865\u5168\u7684\u9014\u5f84\u548c\u65b9\u5f0f\uff0c\u8fd9\u4e9b\u9009\u9879\u662f\u6309\u7167\u5148\u540e\u6b21\u5e8f\u8d77\u4f5c\u7528\u7684\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"-A -G -W -F -C -X -P -S -o")),(0,l.kt)("p",null,"\u4e00\u4e9b\u9009\u9879\u8bf4\u660e:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-o STRING")," \u989d\u5916\u8bbe\u7f6e\u8865\u5168\u9009\u9879\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u591a\u6b21\uff1b\u9009\u9879\u503c\u53ef\u4ee5\u4e3a\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bashdefault")," \u5982\u679c\u6ca1\u6709\u751f\u6210\u8865\u5168\u6761\u76ee\uff0c\u5c31\u4f7f\u7528bash\u9ed8\u8ba4\u7684\u5176\u5b83\u8865\u5168"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"default"),"\t\u5982\u679c\u6ca1\u6709\u751f\u6210\u8865\u5168\u6761\u76ee\uff0c\u5c31\u4f7f\u7528\u201creadline\u201d\u9ed8\u8ba4\u7684\u6587\u4ef6\u540d\u8865\u5168\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dirnames"),"\t\u5982\u679c\u6ca1\u6709\u751f\u6210\u8865\u5168\u6761\u76ee\uff0c\u5c31\u8fdb\u884c\u76ee\u5f55\u540d\u8865\u5168\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"filenames"),"\t\u544a\u8bc9\u201creadline\u201d\u751f\u6210\u6587\u4ef6\u540d\uff0c\u4ee5\u4fbf\u8fdb\u884c\u4e0e\u6587\u4ef6\u540d\u76f8\u5173\u7684\u5904\u7406\uff0c\u4f8b\u5982\u5728\u76ee\u5f55\u540d\u540e\u9762\u52a0\u4e0a\u659c\u6760\uff0c\u5f15\u7528\u7279\u6b8a\u5b57\u7b26\uff0c\u53bb\u6389\u884c\u5c3e\u7684\u7a7a\u683c\uff0c\u76ee\u7684\u662f\u7528\u4e8eshell\u51fd\u6570\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"noquote"),"\t\u544a\u8bc9\u201creadline\u201d\u4e0d\u5f15\u7528\u6587\u4ef6\u540d\uff0c\u9ed8\u8ba4\u4f1a\u8fdb\u884c\u5f15\u7528\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nospace"),"\t\u544a\u8bc9\u201creadline\u201d\u5728\u8865\u5168\u7684\u540d\u79f0\u540e\u4e0d\u6dfb\u52a0\u7a7a\u683c\uff0c\u9ed8\u8ba4\u6dfb\u52a0\u7a7a\u683c\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"plusdirs"),"\t\u751f\u6210\u8865\u5168\u6761\u76ee\u4e4b\u540e\uff0c\u8fd8\u4f1a\u8fdb\u884c\u76ee\u5f55\u540d\u8865\u5168\u5e76\u628a\u7ed3\u679c\u6dfb\u52a0\u5230\u5176\u5b83\u52a8\u4f5c\u5f97\u5230\u7684\u7ed3\u679c\u4e2d\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-A STRING")," action\uff0c\u6307\u5b9a\u52a8\u4f5c\uff0c\u8fd9\u4e2a\u6709\u56fa\u5b9a\u7684\u51e0\u4e2a\u53ef\u9009\u3002\u9009\u9879\u503c\u53ef\u4ee5\u4e3a\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"alias"),"\t\u522b\u540d\uff0c\u540c\u9009\u9879  ",(0,l.kt)("inlineCode",{parentName:"li"},"-a"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"arrayvar"),"\t\u6570\u7ec4\u53d8\u91cf\u540d\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"binding"),"\t\u201creadline\u201d\u952e\u7ed1\u5b9a\u540d\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"builtin"),"\tshell\u5185\u5efa\u547d\u4ee4\u540d\uff0c\u540c\u9009\u9879 ",(0,l.kt)("inlineCode",{parentName:"li"},"-b"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"command"),"\t\u547d\u4ee4\u540d\uff0c\u540c\u9009\u9879 ",(0,l.kt)("inlineCode",{parentName:"li"},"-c"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"directory"),"\t\u76ee\u5f55\u540d\uff0c\u540c\u9009\u9879 ",(0,l.kt)("inlineCode",{parentName:"li"},"-d"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"disabled"),"\t\u4e0d\u53ef\u7528\u7684shell\u5185\u5efa\u547d\u4ee4\u540d\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"enabled"),"\t\u53ef\u7528\u7684shell\u5185\u5efa\u547d\u4ee4\u540d\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"export"),"\t\u5bfc\u51fa\u7684shell\u53d8\u91cf\u540d\uff0c\u540c\u9009\u9879",(0,l.kt)("inlineCode",{parentName:"li"},"-e"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"file"),"\t\u6587\u4ef6\u540d\uff0c\u540c\u9009\u9879 ",(0,l.kt)("inlineCode",{parentName:"li"},"-f"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"function"),"\tshell\u51fd\u6570\u540d\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"group"),"\t\u7ec4\u540d\uff0c\u540c\u9009\u9879 ",(0,l.kt)("inlineCode",{parentName:"li"},"-g"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"helptopic"),"\t\u5185\u5efa\u547d\u4ee4help\u652f\u6301\u7684\u5e2e\u52a9\u4e3b\u9898\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"hostname"),"\t\u4e3b\u673a\u540d\uff0c\u4eceshell\u73af\u5883\u53d8\u91cfHOSTFILE\u4e2d\u83b7\u53d6\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"job"),"\t\u4f5c\u4e1a\u540d\uff0c\u540c\u9009\u9879 ",(0,l.kt)("inlineCode",{parentName:"li"},"-j"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"keyword"),"\tshell\u4fdd\u7559\u5b57\uff0c\u540c\u9009\u9879 ",(0,l.kt)("inlineCode",{parentName:"li"},"-k"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"running"),"\t\u6b63\u5728\u8fd0\u884c\u7684\u4f5c\u4e1a\u540d\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"service"),"\t\u670d\u52a1\u540d\uff0c\u540c\u9009\u9879 ",(0,l.kt)("inlineCode",{parentName:"li"},"-s"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setopt"),"\t\u5185\u5efa\u547d\u4ee4set\u7684\u9009\u9879 ",(0,l.kt)("inlineCode",{parentName:"li"},"-o")," \u53ef\u7528\u7684\u53c2\u6570\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"shopt"),"\t\u5185\u5efa\u547d\u4ee4shopt\u53ef\u63a5\u53d7\u7684\u9009\u9879\u540d\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"signal"),"\t\u4fe1\u53f7\u540d\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"stopped"),"\t\u6682\u505c\u7684\u4f5c\u4e1a\u540d\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"user"),"\t\u7528\u6237\u540d\uff0c\u540c\u9009\u9879 ",(0,l.kt)("inlineCode",{parentName:"li"},"-u"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"variable"),"\t\u6240\u6709\u7684shell\u53d8\u91cf\u540d\uff0c\u540c\u9009\u9879 ",(0,l.kt)("inlineCode",{parentName:"li"},"-v"),"\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-C command"),"\t\u5728\u5b50shell\u4e2d\u6267\u884c\u547d\u4ee4\uff0c\u5e76\u628a\u5176\u7ed3\u679c\u4f5c\u4e3a\u8865\u5168\u6761\u76ee\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-F function")," \u6307\u5b9afunction\u751f\u6210\u53ef\u9009\u5355\u8bcd\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5728\u51fd\u6570\u5b9a\u4e49\u4e2d\uff0c\u4e00\u4e9bshell\u53d8\u91cf\u53ef\u4ee5\u4f7f\u7528\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"COMP_LINE"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"COMP_POINT"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"COMP_KEY"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"COMP_TYPE"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u51fd\u6570\u53c2\u6570\u5b9a\u4e49\u662f\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"$1")," \u4e3a\u5f53\u524d\u8981\u8865\u5168\u53c2\u6570\u7684\u547d\u4ee4\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"$2")," \u4e3a\u5f53\u524d\u8981\u8865\u5168\u7684\u5355\u8bcd\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"$3")," \u4e3a\u5f53\u524d\u8981\u8865\u5168\u5355\u8bcd\u7684\u524d\u9762\u4e00\u4e2a\u5355\u8bcd\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8fd9\u4e9b\u90fd\u53ef\u4ee5\u5728\u81ea\u5b9a\u4e49\u51fd\u6570\u4e2d\u4f7f\u7528\u3002\u6700\u7ec8\u5355\u8bcd\u5217\u8868\u8981\u653e\u5230 ",(0,l.kt)("inlineCode",{parentName:"li"},"COMPREPLY")," \u8fd9\u4e2a\u6570\u7ec4\u4e2d\uff0cshell\u8865\u5168\u673a\u5236\u662f\u4ece\u8fd9\u4e2a\u6570\u7ec4\u4e2d\u53d6\u5355\u8bcd\u7684\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-G globpat"),"\t\u4f7f\u7528\u6587\u4ef6\u540d\u6269\u5c55\u6a21\u5f0fglobpat\u8fdb\u884c\u6269\u5c55\u4ee5\u751f\u6210\u53ef\u80fd\u7684\u8865\u5168\u6761\u76ee\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-P prefix"),"\t\u5728\u6240\u6709\u7684\u9009\u9879\u5e94\u7528\u5230\u8865\u5168\u7ed3\u679c\u540e\uff0c\u5728\u7ed3\u679c\u524d\u6dfb\u52a0\u524d\u7f00prefix\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-S suffix"),"\t\u5728\u6240\u6709\u7684\u9009\u9879\u5e94\u7528\u5230\u8865\u5168\u7ed3\u679c\u540e\uff0c\u5728\u7ed3\u679c\u540e\u6dfb\u52a0\u540e\u7f00suffix\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-W wordlist"),"\t\u4f7f\u7528\u7279\u6b8a\u53d8\u91cf ",(0,l.kt)("inlineCode",{parentName:"li"},"IFS")," \u4e2d\u7684\u5b57\u7b26\u62c6\u5206\u5355\u8bcd\u5217\u8868wordlist\uff0c\u5e76\u6269\u5c55\u62c6\u5206\u540e\u7684\u6bcf\u4e2a\u5355\u8bcd\uff0c\u7ed3\u679c\u4e2d\u4e0e\u5f85\u8865\u5168\u5355\u8bcd\u5339\u914d\u7684\u6761\u76ee\u5c31\u662f\u8865\u5168\u6761\u76ee\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-X filterpat"),"\tfilterpat\u662f\u8fdb\u884c\u6587\u4ef6\u540d\u6269\u5c55\u65f6\u4f7f\u7528\u7684\u6a21\u5f0f\uff0c\u5b83\u4f5c\u7528\u4e8e\u901a\u8fc7\u524d\u9762\u7684\u9009\u9879\u548c\u53c2\u6570\u751f\u6210\u7684\u8865\u5168\u5217\u8868\uff0c\u5e76\u628a\u6bcf\u4e2a\u4e0e\u8fc7\u6ee4\u6a21\u5f0f\u5339\u914d\u7684\u6761\u76ee\u5220\u9664\uff0c\u6a21\u5f0f\u4e2d\u524d\u5bfc\u7684\u53f9\u53f7\u8868\u793a\u5426\u5b9a\uff0c\u8fd9\u65f6\u4f1a\u5220\u9664\u4e0e\u8fc7\u6ee4\u6a21\u5f0f\u4e0d\u5339\u914d\u7684\u6761\u76ee\u3002")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"TIP: ",(0,l.kt)("inlineCode",{parentName:"p"},"IFS")," \u5185\u90e8\u5b57\u6bb5\u5206\u9694\u7b26\u3002\n\u7528\u4e8e\u8fed\u4ee3\u5b57\u7b26\u4e32\uff0c\u4f8b\u5982\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},'data="a,b,c"')," \u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},'local IFS=","')," , \u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"for item in $data")," \u8fed\u4ee3\u5b57\u7b26\u4e32\uff0c\u5185\u90e8item \u5373\u662f\u5355\u4e2a\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"a")," ",(0,l.kt)("inlineCode",{parentName:"p"},"b")," ",(0,l.kt)("inlineCode",{parentName:"p"},"c"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," -F \u8865\u5145\u8bf4\u660e\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"COMPREPLY")," \u53d8\u91cf\u7684\u5185\u5bb9\u603b\u662f\u4f1a\u663e\u793a\uff0c\u8865\u5168\u51fd\u6570\u9700\u8981\u81ea\u5df1\u5904\u7406\u5176\u4e2d\u7684\u5185\u5bb9\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"COMPREPLY")," \u53d8\u91cf\u4e2d\u53ea\u6709\u4e00\u4e2a\u5143\u7d20\uff0c\u90a3\u4e48\u8fd9\u4e2a\u8bcd\u4f1a\u81ea\u52a8\u8865\u5168\u5230\u547d\u4ee4\u4e4b\u540e\u3002\u8fd4\u56de\u591a\u4e2a\u5019\u9009\u5219\u4e0d\u4f1a\u89e6\u53d1\u8fd9\u4e2a\u529f\u80fd\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"COMP_WORDS"),"\uff1a\u5f53\u524d\u547d\u4ee4\u884c\u4e2d\u5df2\u7ecf\u8f93\u5165\u7684\u8bcd\u6570\u7ec4\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"COMP_CWORD"),"\uff1a\u5f53\u524d\u5149\u6807\u6240\u5904\u8bcd\u4f4d\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"COMP_WORDS")," \u6570\u7ec4\u4e2d\u7684\u7d22\u5f15\u503c\u3002\u65e2\u5f53\u6309\u4e0b tab \u952e\u65f6\u5149\u6807\u6240\u5904\u8bcd\u7684\u7d22\u5f15\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"COMP_LINE"),"\uff1a\u5f53\u524d\u547d\u4ee4\u884c\u3002"))),(0,l.kt)("p",null,"\u83b7\u53d6\u547d\u4ee4\u540e\u9762\u7684\u8bcd\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"COMP_WORDS[1]")," \u7684\u503c"),(0,l.kt)("h3",{id:"compgen-\u51fd\u6570"},"compgen \u51fd\u6570"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"compgen")," \u662f\u4e00\u4e2a\u7528\u4e8e\u751f\u6210\u8865\u5168\u5217\u8868\u7684\u5185\u7f6e\u547d\u4ee4\uff0c\u652f\u6301complete\u547d\u4ee4\u7684\u5927\u90e8\u5206\u53c2\u6570\uff08\u4f8b\u5982-W\u53c2\u6570\u6307\u5b9a\u8865\u5168\u8bcd\u5217\u8868\uff0c-d\u53c2\u6570\u8865\u5168\u76ee\u5f55\uff09\uff0c\u5e76\u80fd\u591f ",(0,l.kt)("strong",{parentName:"p"},"\u57fa\u4e8e\u7528\u6237\u5df2\u7ecf\u8f93\u5165\u7684\u5185\u5bb9\u8fdb\u884c\u8fc7\u6ee4")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ compgen --help\ncompgen: compgen [-abcdefgjksuv] [-o option] [-A action] [-G globpat] [-W wordlist]  [-F function] [-C command] [-X filterpat] [-P prefix] [-S suffix] [word]\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9009\u9879\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-F")),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6267\u884cshell \u51fd\u6570\uff0c\u51fd\u6570\u4e2d\u751f\u6210COMPREPLY\u4f5c\u4e3a\u5019\u9009\u7684\u8865\u5168\u7ed3\u679c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-C")),(0,l.kt)("td",{parentName:"tr",align:null},"command"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06 command \u547d\u4ee4\u7684\u6267\u884c\u7ed3\u679c\u4f5c\u4e3a\u5019\u9009\u7684\u8865\u5168 \u7ed3\u679c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-G")),(0,l.kt)("td",{parentName:"tr",align:null},"pattern"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06\u5339\u914d pattern\u7684\u6587\u4ef6\u540d\u4f5c\u4e3a\u5019\u9009\u7684\u8865\u5168\u7ed3\u679c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-W")),(0,l.kt)("td",{parentName:"tr",align:null},"wordlist"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5206\u5272 wordlist \u4e2d\u7684\u5355\u8bcd\uff0c\u4f5c\u4e3a\u5019\u9009\u7684\u8865\u5168\u7ed3\u679c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-p")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[name]")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5217\u51fa\u5f53\u524d\u6240\u6709\u7684\u8865\u5168\u547d\u4ee4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-r")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[name]")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5220\u9664\u67d0\u4e2a\u8865\u5168\u547d\u4ee4")))),(0,l.kt)("p",null,"\u6d4b\u8bd5\u4f7f\u7528\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ compgen -W "one two three"\none\ntwo\nthree\n\ninhere@Inhere-win10 MINGW64 /f/work (main)\n$ compgen -W "one two three" o\none\n\ninhere@Inhere-win10 MINGW64 /f/work (main)\n$ compgen -W "one two three" t\ntwo\nthree\n')),(0,l.kt)("h3",{id:"\u5e2e\u52a9\u8c03\u8bd5"},"\u5e2e\u52a9\u8c03\u8bd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6253\u5370\u5168\u90e8\u5df2\u5b9a\u4e49\u7684\u51fd\u6570\u540d\u79f0\ndeclare -F\n# \u67e5\u770b\u6307\u5b9a\u51fd\u6570\u7684\u5b9a\u4e49\ndeclare -f __my_completion\n")),(0,l.kt)("h2",{id:"\u5206\u5272\u5355\u8bcd\u5217\u8868\u4f5c\u4e3a\u8865\u5168\u6570\u636e"},"\u5206\u5272\u5355\u8bcd\u5217\u8868\u4f5c\u4e3a\u8865\u5168\u6570\u636e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'#!/usr/bin/env bash\n\n__my_completion () {\n    cur_name="${COMP_WORDS[COMP_CWORD]}"\n    # \u5019\u9009\u547d\u4ee4\n    commands="one two three"\n    COMPREPLY=($(compgen -W "$commands" -- "$cur_name"))\n}\n\ncomplete -F __my_completion myapp\n')),(0,l.kt)("h2",{id:"\u4f7f\u7528echo\u8fd4\u56de\u4f5c\u4e3a\u8865\u5168\u6570\u636e"},"\u4f7f\u7528echo\u8fd4\u56de\u4f5c\u4e3a\u8865\u5168\u6570\u636e"),(0,l.kt)("p",null,"\u7b80\u5355\u7684\u4f7f\u7528echo\u8fd4\u56de\u4f5c\u4e3a\u8865\u5168\u6570\u636e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"__my_completion () {\n    # \u5019\u9009\u547d\u4ee4\n    commands=\"one two three\"\n    echo $commands\n}\n\n# for use echo\ncomplete -o dirnames -C '__my_completion' myapp\n")),(0,l.kt)("h2",{id:"\u4f7f\u7528\u5916\u90e8\u51fd\u6570\u7684\u7ed3\u679c\u8865\u5168"},"\u4f7f\u7528\u5916\u90e8\u51fd\u6570\u7684\u7ed3\u679c\u8865\u5168"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'__my_completion () {\n    # \u8f93\u5165\u7684\u5173\u952e\u8bcd\n    local term="${COMP_WORDS[COMP_CWORD]}"\n    # \u4f7f\u7528\u5916\u90e8\u547d\u4ee4\u6765\u5339\u914d\u5173\u952e\u8bcd\u5e76\u8fd4\u56de\u7ed3\u679c\n    local commands=$(kite jump hint "$term" --no-name)\n\n    #    echo commands:\n    #    echo $commands --- ${commands[@]}\n    COMPREPLY=($commands)\n}\n\n# for use echo\ncomplete -o dirnames -F \'__my_completion\' myapp\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"TIP: \u7f16\u5199\u597d\u4e4b\u540e\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"source ./my_complete.sh")," \u4e34\u65f6\u52a0\u8f7d\u5230bash; \u8981\u4fdd\u6301\u4e00\u76f4\u751f\u6548\u9700\u8981\u914d\u7f6e\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},".bashrc"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u53c2\u8003\u6587\u7ae0\u94fe\u63a5\uff1a"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blog.csdn.net/qq_38883889/article/details/106543271"},"https://blog.csdn.net/qq_38883889/article/details/106543271")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blog.csdn.net/junyidcf/article/details/54178196"},"https://blog.csdn.net/junyidcf/article/details/54178196")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.infoq.cn/article/bash-programmable-completion-tutorial"},"https://www.infoq.cn/article/bash-programmable-completion-tutorial")))))}d.isMDXComponent=!0}}]);