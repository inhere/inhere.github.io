"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4080],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>y});var l=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=l.createContext({}),s=function(e){var n=l.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return l.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},k=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(t),k=r,y=u["".concat(p,".").concat(k)]||u[k]||m[k]||a;return t?l.createElement(y,o(o({ref:n},c),{},{components:t})):l.createElement(y,o({ref:n},c))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=k;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<a;s++)o[s]=t[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}k.displayName="MDXCreateElement"},755:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var l=t(1966),r=(t(9496),t(9613));const a={title:"Mysql\u7684\u9501\u673a\u5236\u89e3\u8bfb",tags:["mysql","lock"],date:"2016-09-07T21:17",slug:"lock-intro-in-mysql",authors:"inhere"},o=void 0,i={permalink:"/blog/lock-intro-in-mysql",editUrl:"https://github.com/inhere/inhere.github.io/tree/main/blog/2016/09-07-lock-intro-in-mysql.md",source:"@site/blog/2016/09-07-lock-intro-in-mysql.md",title:"Mysql\u7684\u9501\u673a\u5236\u89e3\u8bfb",description:"Mysql\u7684\u9501\u673a\u5236\u89e3\u8bfb\u8bf4\u660e",date:"2016-09-07T21:17:00.000Z",formattedDate:"2016\u5e749\u67087\u65e5",tags:[{label:"mysql",permalink:"/blog/tags/mysql"},{label:"lock",permalink:"/blog/tags/lock"}],readingTime:13.14,hasTruncateMarker:!0,authors:[{name:"inhere",title:"docs maintainer",url:"https://github.com/inhere",imageURL:"https://github.com/inhere.png",key:"inhere"}],frontMatter:{title:"Mysql\u7684\u9501\u673a\u5236\u89e3\u8bfb",tags:["mysql","lock"],date:"2016-09-07T21:17",slug:"lock-intro-in-mysql",authors:"inhere"},prevItem:{title:"linux \u547d\u4ee4 sed \u8be6\u89e3",permalink:"/blog/sec-command-usage-in-linux"},nextItem:{title:"Linux \u547d\u4ee4\u795e\u5668 lsof \u5165\u95e8",permalink:"/blog/lsof-command-usage-in-linux"}},p={authorsImageUrls:[void 0]},s=[{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",level:2},{value:"\u5171\u4eab\u9501",id:"\u5171\u4eab\u9501",level:3},{value:"\u6392\u5b83\u9501",id:"\u6392\u5b83\u9501",level:3},{value:"\u610f\u5411\u9501",id:"\u610f\u5411\u9501",level:3},{value:"\u9501\u7684\u4e92\u65a5\u4e0e\u517c\u5bb9\u5173\u7cfb",id:"\u9501\u7684\u4e92\u65a5\u4e0e\u517c\u5bb9\u5173\u7cfb",level:3},{value:"MySQL\u6709\u4e09\u79cd\u9501\u7684\u7ea7\u522b\uff1a\u9875\u7ea7\u3001\u8868\u7ea7\u3001\u884c\u7ea7\u3002",id:"mysql\u6709\u4e09\u79cd\u9501\u7684\u7ea7\u522b\u9875\u7ea7\u8868\u7ea7\u884c\u7ea7",level:2},{value:"MyISAM\u8868\u9501",id:"myisam\u8868\u9501",level:2},{value:"1\u3001\u67e5\u8be2\u8868\u7ea7\u9501\u4e89\u7528\u60c5\u51b5",id:"1\u67e5\u8be2\u8868\u7ea7\u9501\u4e89\u7528\u60c5\u51b5",level:3},{value:"2\u3001MySQL\u8868\u7ea7\u9501\u7684\u9501\u6a21\u5f0f",id:"2mysql\u8868\u7ea7\u9501\u7684\u9501\u6a21\u5f0f",level:3},{value:"3\u3001\u5e76\u53d1\u63d2\u5165",id:"3\u5e76\u53d1\u63d2\u5165",level:3},{value:"4\u3001MyISAM\u7684\u9501\u8c03\u5ea6",id:"4myisam\u7684\u9501\u8c03\u5ea6",level:3}],c={toc:s},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,l.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Mysql\u7684\u9501\u673a\u5236\u89e3\u8bfb\u8bf4\u660e"),(0,r.kt)("h2",{id:"\u57fa\u672c\u6982\u5ff5"},"\u57fa\u672c\u6982\u5ff5"),(0,r.kt)("h3",{id:"\u5171\u4eab\u9501"},"\u5171\u4eab\u9501"),(0,r.kt)("p",null,"\u5171\u4eab\u9501\u7684\u4ee3\u53f7\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"S"),"\uff0c\u662fShare\u7684\u7f29\u5199\uff0c\u5171\u4eab\u9501\u7684\u9501\u7c92\u5ea6\u662f\u884c\u6216\u8005\u5143\u7ec4\uff08\u591a\u4e2a\u884c\uff09\u3002\u4e00\u4e2a\u4e8b\u52a1\u83b7\u53d6\u4e86\u5171\u4eab\u9501\u4e4b\u540e\uff0c\u53ef\u4ee5\u5bf9\u9501\u5b9a\u8303\u56f4\u5185\u7684\u6570\u636e",(0,r.kt)("strong",{parentName:"p"},"\u6267\u884c\u8bfb\u64cd\u4f5c"),"\u3002 "),(0,r.kt)("h3",{id:"\u6392\u5b83\u9501"},"\u6392\u5b83\u9501"),(0,r.kt)("p",null,"\u6392\u5b83\u9501\u7684\u4ee3\u53f7\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"X"),"\uff0c\u662feXclusive\u7684\u7f29\u5199\uff0c\u6392\u5b83\u9501\u7684\u7c92\u5ea6\u4e0e\u5171\u4eab\u9501\u76f8\u540c\uff0c\u4e5f\u662f\u884c\u6216\u8005\u5143\u7ec4\u3002\u4e00\u4e2a\u4e8b\u52a1\u83b7\u53d6\u4e86\u6392\u5b83\u9501\u4e4b\u540e\uff0c\u53ef\u4ee5\u5bf9\u9501\u5b9a\u8303\u56f4\u5185\u7684\u6570\u636e",(0,r.kt)("strong",{parentName:"p"},"\u6267\u884c\u5199\u64cd\u4f5c"),"\u3002"),(0,r.kt)("p",null,"\u4f8b\uff1a\u5047\u8bbe\u6709\u4e24\u4e2a\u4e8b\u52a1t1\u548ct2"),(0,r.kt)("p",null,"\u5982\u679c\u4e8b\u52a1t1\u83b7\u53d6\u4e86\u4e00\u4e2a\u5143\u7ec4\u7684\u5171\u4eab\u9501\uff0c\u4e8b\u52a1t2\u8fd8\u53ef\u4ee5\u7acb\u5373\u83b7\u53d6\u8fd9\u4e2a\u5143\u7ec4\u7684\u5171\u4eab\u9501\uff0c\u4f46\u4e0d\u80fd\u7acb\u5373\u83b7\u53d6\u8fd9\u4e2a\u5143\u7ec4\u7684\u6392\u5b83\u9501\uff08\u5fc5\u987b\u7b49\u5230t1\u91ca\u653e\u5171\u4eab\u9501\u4e4b\u540e\uff09\u3002\n\u5982\u679c\u4e8b\u52a1t1\u83b7\u53d6\u4e86\u4e00\u4e2a\u5143\u7ec4\u7684\u6392\u5b83\u9501\uff0c\u4e8b\u52a1t2\u4e0d\u80fd\u7acb\u5373\u83b7\u53d6\u8fd9\u4e2a\u5143\u7ec4\u7684\u6392\u5171\u4eab\u9501\uff0c\u4e5f\u4e0d\u80fd\u7acb\u5373\u83b7\u53d6\u8fd9\u4e2a\u5143\u7ec4\u7684\u6392\u5b83\u9501\uff08\u5fc5\u987b\u7b49\u5230t1\u91ca\u653e\u6392\u5b83\u9501\u4e4b\u540e\uff09\u3002"),(0,r.kt)("h3",{id:"\u610f\u5411\u9501"},"\u610f\u5411\u9501"),(0,r.kt)("p",null,"\u610f\u5411\u9501\u662f",(0,r.kt)("strong",{parentName:"p"},"\u4e00\u79cd\u8868\u9501\uff0c\u9501\u5b9a\u7684\u7c92\u5ea6\u662f\u6574\u5f20\u8868"),"\uff0c\u5206\u4e3a",(0,r.kt)("strong",{parentName:"p"},"\u610f\u5411\u5171\u4eab\u9501(IS)"),"\u548c",(0,r.kt)("strong",{parentName:"p"},"\u610f\u5411\u6392\u5b83\u9501(IX)"),"\u4e24\u7c7b\u3002"),(0,r.kt)("p",null,"\u610f\u5411\u5171\u4eab\u9501\u8868\u793a\u4e00\u4e2a\u4e8b\u52a1\u6709\u610f\u5bf9\u6570\u636e\u4e0a\u5171\u4eab\u9501\u6216\u8005\u6392\u5b83\u9501\u3002\u201c\u6709\u610f\u201d\u8fd9\u4e24\u4e2a\u5b57\u8868\u8fbe\u7684\u610f\u601d\u6bd4\u8f83\u5fae\u5999\uff0c\u8bf4\u7684\u660e\u767d\u70b9\u5c31\u662f\u6307\u4e8b\u52a1\u60f3\u5e72\u8fd9\u4e2a\u4e8b\u4f46\u8fd8\u6ca1\u771f\u53bb\u5e72\u3002\n\u4e3e\u4f8b\u8bf4\u660e\u4e0b\u610f\u5411\u5171\u4eab\u9501\uff0c\u6bd4\u5982\u4e00\u4e2a\u4e8b\u52a1t\u6267\u884c\u4e86\u8fd9\u6837\u4e00\u4e2a\u8bed\u53e5\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"select * from table lock in share model")," \uff0c\u5982\u679c\u8fd9\u4e2a\u8bed\u53e5\u6267\u884c\u6210\u529f\uff0c\u5c31\u5bf9\u8868table\u4e0a\u4e86\u4e00\u4e2a\u610f\u5411\u5171\u4eab\u9501\u3002\n",(0,r.kt)("inlineCode",{parentName:"p"},"lock in share model")," \u5c31\u662f\u8bf4\u4e8b\u52a1t1\u5728\u63a5\u4e0b\u6765\u8981\u6267\u884c\u7684\u8bed\u53e5\u4e2d\u8981\u83b7\u53d6S\u9501\u3002\u5982\u679ct1\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"select * from table lock in share model"),"\u6267\u884c\u6210\u529f\uff0c\u90a3\u4e48\u63a5\u4e0b\u6765t1\u5e94\u8be5\u53ef\u4ee5\u7545\u901a\u65e0\u963b\u7684\u53bb\u6267\u884c\u53ea\u9700\u8981\u5171\u4eab\u9501\u7684\u8bed\u53e5\u4e86\u3002"),(0,r.kt)("p",null,"\u610f\u5411\u6392\u5b83\u9501\u7684\u542b\u4e49\u540c\u7406\u53ef\u77e5\uff0c\u4e0a\u4f8b\u4e2d\u8981\u83b7\u53d6\u610f\u5411\u6392\u5b83\u9501\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"select * from table for update")," \u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"lock in share model")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"for update"),"\u8fd9\u4e24\u4e2a\u4e1c\u897f\u5728\u6570\u636e\u7387\u7406\u8bba\u4e2d\u8fd8\u6709\u4e2a\u5b66\u540d\u53eb",(0,r.kt)("strong",{parentName:"p"},"\u60b2\u89c2\u9501"),"\uff0c\u4e0e\u60b2\u89c2\u9501\u76f8\u5bf9\u7684\u5f53\u7136\u8fd8\u6709\u4e50\u89c2\u9501\u3002\u5927\u5bb6\u53ef\u4ee5\u770b\u5230\u5404\u79cd\u9501\u90fd\u662f\u6210\u53cc\u6210\u5bf9\u51fa\u73b0\u7684\u3002\u5173\u4e8e\u60b2\u89c2\u9501\u548c\u4e50\u89c2\u9501\u7684\u95ee\u9898\u6682\u4e14\u4e0d\u8868\u3002 "),(0,r.kt)("h3",{id:"\u9501\u7684\u4e92\u65a5\u4e0e\u517c\u5bb9\u5173\u7cfb"},"\u9501\u7684\u4e92\u65a5\u4e0e\u517c\u5bb9\u5173\u7cfb"),(0,r.kt)("p",null,"\u9501\u548c\u9501\u4e4b\u95f4\u7684\u5173\u7cfb\uff0c\u8981\u4e48\u662f\u76f8\u5bb9\u7684\uff0c\u8981\u4e48\u662f\u4e92\u65a5\u7684\u3002\n\u9501a\u548c\u9501b\u76f8\u5bb9\u662f\u6307\uff1a\u64cd\u4f5c\u540c\u6837\u4e00\u7ec4\u6570\u636e\u65f6\uff0c\u5982\u679c\u4e8b\u52a1t1\u83b7\u53d6\u4e86\u9501a,\u53e6\u4e00\u4e2a\u4e8b\u52a1t2\u8fd8\u53ef\u4ee5\u83b7\u53d6\u9501b\uff1b\n\u9501a\u548c\u9501b\u4e92\u65a5\u662f\u6307\uff1a\u64cd\u4f5c\u540c\u6837\u4e00\u7ec4\u6570\u636e\u65f6\uff0c\u5982\u679c\u4e8b\u52a1t1\u83b7\u53d6\u4e86\u9501a\uff0c\u53e6\u4e00\u4e2a\u4e8b\u52a1t2\u5728t1\u91ca\u653e\u9501a\u4e4b\u524d\u65e0\u6cd5\u83b7\u53d6\u9501b\u3002"),(0,r.kt)("p",null,"\u4e0a\u9762\u63d0\u5230\u7684\u5171\u4eab\u9501\u3001\u6392\u5b83\u9501\u3001\u610f\u5411\u5171\u4eab\u9501\u3001\u610f\u5411\u6392\u5b83\u9501\u76f8\u4e92\u4e4b\u524d\u90fd\u662f\u6709\u517c\u5bb9/\u4e92\u65a5\u5173\u7cfb\u7684\uff0c\u53ef\u4ee5\u7528\u4e00\u4e2a\u517c\u5bb9\u6027\u77e9\u9635\u8868\u793a(y\u8868\u793a\u517c\u5bb9\uff0cn\u8868\u793a\u4e0d\u517c\u5bb9):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    X    S    IX    IS\nX  n     n    n     n\nS  n     y    n     y\nIX n     n    y     y\nIS n     y    y     y  \n")),(0,r.kt)("p",null,"\u517c\u5bb9\u6027\u77e9\u9635\u4e3a\u4ec0\u4e48\u662f\u8fd9\u4e2a\u6837\u5b50\u7684\uff1f"),(0,r.kt)("p",null,"X\u548cS\u7684\u76f8\u4e92\u5173\u7cfb\u5728\u4e0a\u6587\u4e2d\u89e3\u91ca\u8fc7\u4e86\uff0cIX\u548cIS\u7684\u76f8\u4e92\u5173\u7cfb\u5168\u90e8\u662f\u517c\u5bb9\uff0c\u8fd9\u4e5f\u5f88\u597d\u7406\u89e3\uff0c\u56e0\u4e3a\u5b83\u4eec\u90fd\u53ea\u662f\u201c\u6709\u610f\u201d\uff0c\u8fd8\u5904\u4e8eYY\u9636\u6bb5\uff0c\u6ca1\u6709\u771f\u5e72\uff0c\u6240\u4ee5\u662f\u53ef\u4ee5\u517c\u5bb9\u7684\uff1b\n\u5269\u4e0b\u7684\u5c31\u662fX\u548cIX\uff0cX\u548cIS, S\u548cIX\uff0c S\u548cIS\u7684\u5173\u7cfb\u4e86\uff0c\u6211\u4eec\u53ef\u4ee5\u7531X\u548cS\u7684\u5173\u7cfb\u63a8\u5bfc\u51fa\u8fd9\u56db\u7ec4\u5173\u7cfb\u3002"),(0,r.kt)("p",null,"\u7b80\u5355\u7684\u8bf4\uff1aX\u548cIX\u7684=X\u548cX\u7684\u5173\u7cfb\u3002\u4e3a\u4ec0\u4e48\u5462\uff1f\u56e0\u4e3a\u4e8b\u52a1\u5728\u83b7\u53d6IX\u9501\u540e\uff0c\u63a5\u4e0b\u6765\u5c31\u6709\u6743\u5229\u83b7\u53d6X\u9501\u3002\u5982\u679cX\u548cIX\u517c\u5bb9\u7684\u8bdd\uff0c\u5c31\u4f1a\u51fa\u73b0\u4e24\u4e2a\u4e8b\u52a1\u90fd\u83b7\u53d6\u4e86X\u9501\u7684\u60c5\u51b5\uff0c\u8fd9\u4e0e\u6211\u4eec\u5df2\u77e5\u7684X\u4e0eX\u4e92\u65a5\u662f\u77db\u76fe\u7684\uff0c\u6240\u4ee5X\u4e0eIX\u53ea\u80fd\u662f\u4e92\u65a5\u5173\u7cfb\u3002"),(0,r.kt)("p",null,"\u5176\u4f59\u7684\u4e09\u7ec4\u5173\u7cfb\u540c\u7406\uff0c\u53ef\u7528\u540c\u6837\u7684\u65b9\u5f0f\u63a8\u5bfc\u51fa\u6765\u3002"),(0,r.kt)("h2",{id:"mysql\u6709\u4e09\u79cd\u9501\u7684\u7ea7\u522b\u9875\u7ea7\u8868\u7ea7\u884c\u7ea7"},"MySQL\u6709\u4e09\u79cd\u9501\u7684\u7ea7\u522b\uff1a\u9875\u7ea7\u3001\u8868\u7ea7\u3001\u884c\u7ea7\u3002"),(0,r.kt)("p",null,"MyISAM\u548cMEMORY\u5b58\u50a8\u5f15\u64ce\u91c7\u7528\u7684\u662f",(0,r.kt)("strong",{parentName:"p"},"\u8868\u7ea7\u9501\uff08table-level locking\uff09"),"\uff1b\nBDB\u5b58\u50a8\u5f15\u64ce\u91c7\u7528\u7684\u662f",(0,r.kt)("strong",{parentName:"p"},"\u9875\u9762\u9501\uff08page-level locking\uff09"),"\uff0c\u4f46\u4e5f\u652f\u6301\u8868\u7ea7\u9501\uff1b\nInnoDB\u5b58\u50a8\u5f15\u64ce\u65e2\u652f\u6301",(0,r.kt)("strong",{parentName:"p"},"\u884c\u7ea7\u9501\uff08row-level locking\uff09"),"\uff0c\u4e5f\u652f\u6301\u8868\u7ea7\u9501\uff0c\u4f46\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u662f\u91c7\u7528\u884c\u7ea7\u9501\u3002"),(0,r.kt)("p",null,"MySQL\u8fd93\u79cd\u9501\u7684\u7279\u6027\u53ef\u5927\u81f4\u5f52\u7eb3\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8868\u7ea7\u9501\uff1a\u5f00\u9500\u5c0f\uff0c\u52a0\u9501\u5feb\uff1b\u4e0d\u4f1a\u51fa\u73b0\u6b7b\u9501\uff1b\u9501\u5b9a\u7c92\u5ea6\u5927\uff0c\u53d1\u751f\u9501\u51b2\u7a81\u7684\u6982\u7387\u6700\u9ad8,\u5e76\u53d1\u5ea6\u6700\u4f4e\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u884c\u7ea7\u9501\uff1a\u5f00\u9500\u5927\uff0c\u52a0\u9501\u6162\uff1b\u4f1a\u51fa\u73b0\u6b7b\u9501\uff1b\u9501\u5b9a\u7c92\u5ea6\u6700\u5c0f\uff0c\u53d1\u751f\u9501\u51b2\u7a81\u7684\u6982\u7387\u6700\u4f4e,\u5e76\u53d1\u5ea6\u4e5f\u6700\u9ad8\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u9875\u9762\u9501\uff1a\u5f00\u9500\u548c\u52a0\u9501\u65f6\u95f4\u754c\u4e8e\u8868\u9501\u548c\u884c\u9501\u4e4b\u95f4\uff1b\u4f1a\u51fa\u73b0\u6b7b\u9501\uff1b\u9501\u5b9a\u7c92\u5ea6\u754c\u4e8e\u8868\u9501\u548c\u884c\u9501\u4e4b\u95f4\uff0c\u5e76\u53d1\u5ea6\u4e00\u822c\u3002")),(0,r.kt)("h2",{id:"myisam\u8868\u9501"},"MyISAM\u8868\u9501"),(0,r.kt)("p",null,"MyISAM\u5b58\u50a8\u5f15\u64ce\u53ea\u652f\u6301\u8868\u9501\uff0c\u662f\u73b0\u5728\u7528\u5f97\u6700\u591a\u7684\u5b58\u50a8\u5f15\u64ce\u3002"),(0,r.kt)("h3",{id:"1\u67e5\u8be2\u8868\u7ea7\u9501\u4e89\u7528\u60c5\u51b5"},"1\u3001\u67e5\u8be2\u8868\u7ea7\u9501\u4e89\u7528\u60c5\u51b5"),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u68c0\u67e5table_locks_waited\u548ctable_locks_immediate\u72b6\u6001\u53d8\u91cf\u6765\u5206\u6790\u7cfb\u7edf\u4e0a\u7684\u8868\u9501\u5b9a\u4e89\u593a\uff1a\nmysql> show status like \u2018table%\u2019;\n+\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2013+\u2014\u2014\u2014-+\n| Variable_name | Value |\n+\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2013+\u2014\u2014\u2014-+\n| Table_locks_immediate | 76939364 |\n| Table_locks_waited | 305089 |\n+\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2013+\u2014\u2014\u2014-+\n2 rows in set (0.00 sec)Table_locks_waited\u7684\u503c\u6bd4\u8f83\u9ad8\uff0c\u8bf4\u660e\u5b58\u5728\u7740\u8f83\u4e25\u91cd\u7684\u8868\u7ea7\u9501\u4e89\u7528\u60c5\u51b5\u3002"),(0,r.kt)("h3",{id:"2mysql\u8868\u7ea7\u9501\u7684\u9501\u6a21\u5f0f"},"2\u3001MySQL\u8868\u7ea7\u9501\u7684\u9501\u6a21\u5f0f"),(0,r.kt)("p",null,"MySQL\u7684\u8868\u7ea7\u9501\u6709\u4e24\u79cd\u6a21\u5f0f\uff1a",(0,r.kt)("strong",{parentName:"p"},"\u8868\u5171\u4eab\u8bfb\u9501\uff08Table Read Lock\uff09"),"\u548c ",(0,r.kt)("strong",{parentName:"p"},"\u8868\u72ec\u5360\u5199\u9501\uff08Table Write Lock\uff09"),"\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"MyISAM\u5728\u6267\u884c\u67e5\u8be2\u8bed\u53e5\uff08SELECT\uff09\u524d\uff0c\u4f1a\u81ea\u52a8\u7ed9\u6d89\u53ca\u7684\u6240\u6709\u8868\u52a0\u8bfb\u9501\uff0c\u5728\u6267\u884c\u66f4\u65b0\u64cd\u4f5c\uff08UPDATE\u3001DELETE\u3001INSERT\u7b49\uff09\u524d\uff0c\u4f1a\u81ea\u52a8\u7ed9\u6d89\u53ca\u7684\u8868\u52a0\u5199\u9501\u3002")),(0,r.kt)("p",null,"\u6240\u4ee5\u5bf9MyISAM\u8868\u8fdb\u884c\u64cd\u4f5c\uff0c\u4f1a\u6709\u4ee5\u4e0b\u60c5\u51b5\uff1a"),(0,r.kt)("p",null,"a. \u5bf9MyISAM\u8868\u7684\u8bfb\u64cd\u4f5c\uff08\u52a0\u8bfb\u9501\uff09\uff0c\u4e0d\u4f1a\u963b\u585e\u5176\u4ed6\u8fdb\u7a0b\u5bf9\u540c\u4e00\u8868\u7684\u8bfb\u8bf7\u6c42\uff0c\u4f46\u4f1a\u963b\u585e\u5bf9\u540c\u4e00\u8868\u7684\u5199\u8bf7\u6c42\u3002\u53ea\u6709\u5f53\u8bfb\u9501\u91ca\u653e\u540e\uff0c\u624d\u4f1a\u6267\u884c\u5176\u5b83\u8fdb\u7a0b\u7684\u5199\u64cd\u4f5c\u3002\nb. \u5bf9MyISAM\u8868\u7684\u5199\u64cd\u4f5c\uff08\u52a0\u5199\u9501\uff09\uff0c\u4f1a\u963b\u585e\u5176\u4ed6\u8fdb\u7a0b\u5bf9\u540c\u4e00\u8868\u7684\u8bfb\u548c\u5199\u64cd\u4f5c\uff0c\u53ea\u6709\u5f53\u5199\u9501\u91ca\u653e\u540e\uff0c\u624d\u4f1a\u6267\u884c\u5176\u5b83\u8fdb\u7a0b\u7684\u8bfb\u5199\u64cd\u4f5c\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u901a\u8fc7\u4f8b\u5b50\u6765\u8fdb\u884c\u9a8c\u8bc1\u4ee5\u4e0a\u89c2\u70b9\u3002\u6570\u636e\u8868gz_phone\u91cc\u6709\u4e8c\u767e\u591a\u4e07\u6570\u636e\uff0c\u5b57\u6bb5id,phone,ua,day\u3002\u73b0\u5728\u540c\u65f6\u7528\u591a\u4e2a\u5ba2\u6237\u7aef\u540c\u65f6\u5bf9\u8be5\u8868\u8fdb\u884c\u64cd\u4f5c\u5206\u6790\u3002"),(0,r.kt)("p",null,"a\u3001\u5f53\u6211\u7528\u5ba2\u6237\u7aef1\u8fdb\u884c\u4e00\u4e2a\u6bd4\u8f83\u957f\u65f6\u95f4\u7684\u8bfb\u64cd\u4f5c\u65f6\uff0c\u5206\u522b\u7528\u5ba2\u6237\u7aef2\u8fdb\u884c\u8bfb\u548c\u5199\u64cd\u4f5c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\nclient1:\nmysql>select count(*) from gz_phone group by ua;\n75508 rows in set (3 min 15.87 sec) client2:\nselect id,phone from gz_phone limit 1000,10;\n+\u2014\u2014+\u2014\u2014-+\n| id | phone |\n+\u2014\u2014+\u2014\u2014-+\n| 1001 | 2222 |\n| 1002 | 2222 |\n| 1003 | 2222 |\n| 1004 | 2222 |\n| 1005 | 2222 |\n| 1006 | 2222 |\n| 1007 | 2222 |\n| 1008 | 2222 |\n| 1009 | 2222 |\n| 1010 | 2222 |\n+\u2014\u2014+\u2014\u2014-+\n10 rows in set (0.01 sec)\nmysql> update gz_phone set phone=\u201911111111111\u2032where id=1001;\nQuery OK, 0 rows affected (2 min 57.88 sec)\nRows matched: 1 Changed: 0 Warnings: 0\n")),(0,r.kt)("p",null,"\u8bf4\u660e\u5f53\u6570\u636e\u8868\u6709\u4e00\u4e2a\u8bfb\u9501\u65f6\uff0c\u5176\u5b83\u8fdb\u7a0b\u7684\u67e5\u8be2\u64cd\u4f5c\u53ef\u4ee5\u9a6c\u4e0a\u6267\u884c\uff0c\u4f46\u66f4\u65b0\u64cd\u4f5c\u9700\u7b49\u5f85\u8bfb\u9501\u91ca\u653e\u540e\u624d\u4f1a\u6267\u884c\u3002"),(0,r.kt)("p",null,"b\u3001\u5f53\u7528\u5ba2\u6237\u7aef1\u8fdb\u884c\u4e00\u4e2a\u8f83\u957f\u65f6\u95f4\u7684\u66f4\u65b0\u64cd\u4f5c\u65f6\uff0c\u7528\u5ba2\u6237\u7aef2,3\u5206\u522b\u8fdb\u884c\u8bfb\u5199\u64cd\u4f5c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"client1:\nmysql> update gz_phone set phone=\u201911111111111\u2032;\nQuery OK, 1671823 rows affected (3 min 4.03 sec)\nRows matched: 2212070 Changed: 1671823 Warnings: 0 client2:\nmysql> select id,phone,ua,day from gz_phone limit 10;\n+\u2014-+\u2014\u2014-+\u2014\u2014\u2014\u2014\u2014\u2014-+\u2014\u2014\u2014\u2014+\n| id | phone | ua | day |\n+\u2014-+\u2014\u2014-+\u2014\u2014\u2014\u2014\u2014\u2014-+\u2014\u2014\u2014\u2014+\n| 1 | 2222 | SonyEricssonK310c | 2007-12-19 |\n| 2 | 2222 | SonyEricssonK750c | 2007-12-19 |\n| 3 | 2222 | MAUI WAP Browser | 2007-12-19 |\n| 4 | 2222 | Nokia3108 | 2007-12-19 |\n| 5 | 2222 | LENOVO-I750 | 2007-12-19 |\n| 6 | 2222 | BIRD_D636 | 2007-12-19 |\n| 7 | 2222 | SonyEricssonS500c | 2007-12-19 |\n| 8 | 2222 | SAMSUNG-SGH-E258 | 2007-12-19 |\n| 9 | 2222 | NokiaN73-1 | 2007-12-19 |\n| 10 | 2222 | Nokia2610 | 2007-12-19 |\n+\u2014-+\u2014\u2014-+\u2014\u2014\u2014\u2014\u2014\u2014-+\u2014\u2014\u2014\u2014+\n10 rows in set (2 min 58.56 sec) client3:\nmysql> update gz_phone set phone=\u201955555\u2032where id=1;\nQuery OK, 1 row affected (3 min 50.16 sec)\nRows matched: 1 Changed: 1 Warnings: 0\n")),(0,r.kt)("p",null,"\u8bf4\u660e\u5f53\u6570\u636e\u8868\u6709\u4e00\u4e2a\u5199\u9501\u65f6\uff0c\u5176\u5b83\u8fdb\u7a0b\u7684\u8bfb\u5199\u64cd\u4f5c\u90fd\u9700\u7b49\u5f85\u8bfb\u9501\u91ca\u653e\u540e\u624d\u4f1a\u6267\u884c\u3002"),(0,r.kt)("h3",{id:"3\u5e76\u53d1\u63d2\u5165"},"3\u3001\u5e76\u53d1\u63d2\u5165"),(0,r.kt)("p",null,"\u539f\u5219\u4e0a\u6570\u636e\u8868\u6709\u4e00\u4e2a\u8bfb\u9501\u65f6\uff0c\u5176\u5b83\u8fdb\u7a0b\u65e0\u6cd5\u5bf9\u6b64\u8868\u8fdb\u884c\u66f4\u65b0\u64cd\u4f5c\uff0c\u4f46\u5728\u4e00\u5b9a\u6761\u4ef6\u4e0b\uff0cMyISAM\u8868\u4e5f\u652f\u6301\u67e5\u8be2\u548c\u63d2\u5165\u64cd\u4f5c\u7684\u5e76\u53d1\u8fdb\u884c\u3002"),(0,r.kt)("p",null,"MyISAM\u5b58\u50a8\u5f15\u64ce\u6709\u4e00\u4e2a\u7cfb\u7edf\u53d8\u91cfconcurrent_insert\uff0c\u4e13\u95e8\u7528\u4ee5\u63a7\u5236\u5176\u5e76\u53d1\u63d2\u5165\u7684\u884c\u4e3a\uff0c\u5176\u503c\u5206\u522b\u53ef\u4ee5\u4e3a0\u30011\u62162\u3002"),(0,r.kt)("p",null,"a. \u5f53concurrent_insert\u8bbe\u7f6e\u4e3a0\u65f6\uff0c\u4e0d\u5141\u8bb8\u5e76\u53d1\u63d2\u5165\u3002\nb. \u5f53concurrent_insert\u8bbe\u7f6e\u4e3a1\u65f6\uff0c\u5982\u679cMyISAM\u8868\u4e2d\u6ca1\u6709\u7a7a\u6d1e\uff08\u5373\u8868\u7684\u4e2d\u95f4\u6ca1\u6709\u88ab\u5220\u9664\u7684\u884c\uff09\uff0cMyISAM\u5141\u8bb8\u5728\u4e00\u4e2a\u8fdb\u7a0b\u8bfb\u8868\u7684\u540c\u65f6\uff0c\u53e6\u4e00\u4e2a\u8fdb\u7a0b\u4ece\u8868\u5c3e\u63d2\u5165\u8bb0\u5f55\u3002\u8fd9\u4e5f\u662fMySQL\u7684\u9ed8\u8ba4\u8bbe\u7f6e\u3002\nc. \u5f53concurrent_insert\u8bbe\u7f6e\u4e3a2\u65f6\uff0c\u65e0\u8bbaMyISAM\u8868\u4e2d\u6709\u6ca1\u6709\u7a7a\u6d1e\uff0c\u90fd\u5141\u8bb8\u5728\u8868\u5c3e\u5e76\u53d1\u63d2\u5165\u8bb0\u5f55\u3002"),(0,r.kt)("h3",{id:"4myisam\u7684\u9501\u8c03\u5ea6"},"4\u3001MyISAM\u7684\u9501\u8c03\u5ea6"),(0,r.kt)("p",null,"\u7531\u4e8eMySQL\u8ba4\u4e3a\u5199\u8bf7\u6c42\u4e00\u822c\u6bd4\u8bfb\u8bf7\u6c42\u8981\u91cd\u8981\uff0c\u6240\u4ee5\u5982\u679c\u6709\u8bfb\u5199\u8bf7\u6c42\u540c\u65f6\u8fdb\u884c\u7684\u8bdd\uff0cMYSQL\u5c06\u4f1a\u4f18\u5148\u6267\u884c\u5199\u64cd\u4f5c\u3002\u8fd9\u6837MyISAM\u8868\u5728\u8fdb\u884c\u5927\u91cf\u7684\u66f4\u65b0\u64cd\u4f5c\u65f6\uff08\u7279\u522b\u662f\u66f4\u65b0\u7684\u5b57\u6bb5\u4e2d\u5b58\u5728\u7d22\u5f15\u7684\u60c5\u51b5\u4e0b\uff09\uff0c\u4f1a\u9020\u6210\u67e5\u8be2\u64cd\u4f5c\u5f88\u96be\u83b7\u5f97\u8bfb\u9501\uff0c\u4ece\u800c\u5bfc\u81f4\u67e5\u8be2\u963b\u585e\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4e00\u4e9b\u8bbe\u7f6e\u6765\u8c03\u8282MyISAM\u7684\u8c03\u5ea6\u884c\u4e3a\uff1a"),(0,r.kt)("p",null,"a. \u901a\u8fc7\u6307\u5b9a\u542f\u52a8\u53c2\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"low-priority-updates"),"\uff0c\u4f7fMyISAM\u5f15\u64ce\u9ed8\u8ba4\u7ed9\u4e88\u8bfb\u8bf7\u6c42\u4ee5\u4f18\u5148\u7684\u6743\u5229\u3002\nb. \u901a\u8fc7\u6267\u884c\u547d\u4ee4",(0,r.kt)("inlineCode",{parentName:"p"},"SET LOW_PRIORITY_UPDATES=1"),"\uff0c\u4f7f\u8be5\u8fde\u63a5\u53d1\u51fa\u7684\u66f4\u65b0\u8bf7\u6c42\u4f18\u5148\u7ea7\u964d\u4f4e\u3002\nc. \u901a\u8fc7\u6307\u5b9a ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"UPDATE"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")," \u8bed\u53e5\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"LOW_PRIORITY"),"\u5c5e\u6027\uff0c\u964d\u4f4e\u8be5\u8bed\u53e5\u7684\u4f18\u5148\u7ea7\u3002"),(0,r.kt)("p",null,"\u4e0a\u97623\u79cd\u65b9\u6cd5\u90fd\u662f\u8981\u4e48\u66f4\u65b0\u4f18\u5148\uff0c\u8981\u4e48\u67e5\u8be2\u4f18\u5148\u7684\u65b9\u6cd5\u3002\u8fd9\u91cc\u8981\u8bf4\u660e\u7684\u5c31\u662f\uff0c\u4e0d\u8981\u76f2\u76ee\u7684\u7ed9mysql\u8bbe\u7f6e\u4e3a\u8bfb\u4f18\u5148\uff0c\u56e0\u4e3a\u4e00\u4e9b\u9700\u8981\u957f\u65f6\u95f4\u8fd0\u884c\u7684\u67e5\u8be2\u64cd\u4f5c\uff0c\u4e5f\u4f1a\u4f7f\u5199\u8fdb\u7a0b\u201c\u997f\u6b7b\u201d\u3002\u53ea\u6709\u6839\u636e\u4f60\u7684\u5b9e\u9645\u60c5\u51b5\uff0c\u6765\u51b3\u5b9a\u8bbe\u7f6e\u54ea\u79cd\u64cd\u4f5c\u4f18\u5148\u3002\u8fd9\u4e9b\u65b9\u6cd5\u8fd8\u662f\u6ca1\u6709\u4ece\u6839\u672c\u4e0a\u540c\u65f6\u89e3\u51b3\u67e5\u8be2\u548c\u66f4\u65b0\u7684\u95ee\u9898\u3002"),(0,r.kt)("p",null,"\u5728\u4e00\u4e2a\u6709\u5927\u6570\u636e\u91cf\u9ad8\u5e76\u53d1\u8868\u7684mysql\u91cc\uff0c\u6211\u4eec\u8fd8\u53ef\u91c7\u7528\u53e6\u4e00\u79cd\u7b56\u7565\u6765\u8fdb\u884c\u4f18\u5316\uff0c\u90a3\u5c31\u662f\u901a\u8fc7mysql\u4e3b\u4ece\uff08\u8bfb\u5199\uff09\u5206\u79bb\u6765\u5b9e\u73b0\u8d1f\u8f7d\u5747\u8861\uff0c\u8fd9\u6837\u53ef\u907f\u514d\u4f18\u5148\u54ea\u4e00\u79cd\u64cd\u4f5c\u4ece\u800c\u53ef\u80fd\u5bfc\u81f4\u53e6\u4e00\u79cd\u64cd\u4f5c\u7684\u5835\u585e\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8f6c\u81ea\uff1a",(0,r.kt)("a",{parentName:"p",href:"http://blog.csdn.net/andyxm/article/details/44810313"},"CSDN\u535a\u5ba2"))))}m.isMDXComponent=!0}}]);