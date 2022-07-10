"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1149],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),i=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(n),m=a,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(g,l(l({ref:t},c),{},{components:n})):o.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var i=2;i<r;i++)l[i]=n[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7317:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>i});var o=n(7462),a=(n(7294),n(3905));const r={title:"\u901a\u8fc7 scoop \u5728Windows \u4e0b\u5b89\u88c5\u5de5\u5177",tags:["tool","windows","scoop"],date:"2022-07-10T14:38",slug:"install-tools-by-scoop-on-windows",authors:"inhere"},l=void 0,s={permalink:"/blog/install-tools-by-scoop-on-windows",editUrl:"https://github.com/inhere/inhere.github.io/tree/main/blog/2022/07-10-install-tools-by-scoop-on-windows.md",source:"@site/blog/2022/07-10-install-tools-by-scoop-on-windows.md",title:"\u901a\u8fc7 scoop \u5728Windows \u4e0b\u5b89\u88c5\u5de5\u5177",description:"scoop \u662f\u4e00\u4e2aWindows \u4e0b\u7684\u5e94\u7528\u5305\u5b89\u88c5\u7ba1\u7406\u5de5\u5177\uff0c\u7c7b\u4f3c\u4e8e Linux \u4e0b\u7684 yum,apt \u548cMacOs \u4e0b\u7684 brew\u3002",date:"2022-07-10T14:38:00.000Z",formattedDate:"2022\u5e747\u670810\u65e5",tags:[{label:"tool",permalink:"/blog/tags/tool"},{label:"windows",permalink:"/blog/tags/windows"},{label:"scoop",permalink:"/blog/tags/scoop"}],readingTime:1.6,hasTruncateMarker:!0,authors:[{name:"inhere",title:"docs maintainer",url:"https://github.com/inhere",imageURL:"https://github.com/inhere.png",key:"inhere"}],frontMatter:{title:"\u901a\u8fc7 scoop \u5728Windows \u4e0b\u5b89\u88c5\u5de5\u5177",tags:["tool","windows","scoop"],date:"2022-07-10T14:38",slug:"install-tools-by-scoop-on-windows",authors:"inhere"},nextItem:{title:"\u5b89\u88c5\u5e76\u914d\u7f6e docusaurus v2\u7ad9\u70b9",permalink:"/blog/install-and-config-docusaurus-v2.md"}},p={authorsImageUrls:[void 0]},i=[{value:"\u5b89\u88c5Scoop",id:"\u5b89\u88c5scoop",level:2},{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:2},{value:"\u641c\u7d22\u5de5\u5177",id:"\u641c\u7d22\u5de5\u5177",level:3},{value:"\u5b89\u88c5\u5de5\u5177",id:"\u5b89\u88c5\u5de5\u5177",level:3},{value:"\u5378\u8f7d\u8f6f\u4ef6",id:"\u5378\u8f7d\u8f6f\u4ef6",level:3},{value:"\u66f4\u65b0scoop\u53ca\u8f6f\u4ef6",id:"\u66f4\u65b0scoop\u53ca\u8f6f\u4ef6",level:3},{value:"\u5b89\u88c5aria2\u52a0\u901f\u4e0b\u8f7d",id:"\u5b89\u88c5aria2\u52a0\u901f\u4e0b\u8f7d",level:3},{value:"\u5b89\u88c5\u5e38\u7528\u5de5\u5177",id:"\u5b89\u88c5\u5e38\u7528\u5de5\u5177",level:2},{value:"\u57fa\u7840\u5de5\u5177",id:"\u57fa\u7840\u5de5\u5177",level:3},{value:"\u8bed\u8a00\u73af\u5883",id:"\u8bed\u8a00\u73af\u5883",level:3},{value:"\u5176\u4ed6\u5de5\u5177",id:"\u5176\u4ed6\u5de5\u5177",level:3}],c={toc:i};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"scoop")," \u662f\u4e00\u4e2aWindows \u4e0b\u7684\u5e94\u7528\u5305\u5b89\u88c5\u7ba1\u7406\u5de5\u5177\uff0c\u7c7b\u4f3c\u4e8e Linux \u4e0b\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"yum,apt")," \u548cMacOs \u4e0b\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"brew"),"\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7\u4f7f\u7528 scoop \u53ef\u4ee5\u65b9\u4fbf\u5feb\u901f\u7684\u5b89\u88c5\u5e38\u7528\u7684\u5f00\u53d1\u5de5\u5177\uff0c\u4f1a\u81ea\u52a8\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\uff0c\u4f8b\u5982 php, go, rust \u7b49\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Scoop github: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ScoopInstaller/Scoop"},"https://github.com/ScoopInstaller/Scoop")," ")),(0,a.kt)("h2",{id:"\u5b89\u88c5scoop"},"\u5b89\u88c5Scoop"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"powershell",powershell:!0},"iwr -useb get.scoop.sh | iex\n")),(0,a.kt)("p",null,"\u6dfb\u52a0bucket \u652f\u6301\u66f4\u591a\u5de5\u5177:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"scoop bucket add extras\n")),(0,a.kt)("h2",{id:"\u57fa\u672c\u4f7f\u7528"},"\u57fa\u672c\u4f7f\u7528"),(0,a.kt)("p",null,"\u67e5\u770b\u53ef\u7528\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"scoop \n")),(0,a.kt)("h3",{id:"\u641c\u7d22\u5de5\u5177"},"\u641c\u7d22\u5de5\u5177"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"scoop search git\nscoop search php\nscoop search go\n")),(0,a.kt)("p",null,"\u8f93\u51fa\u7c7b\u4f3c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"inhere@Inhere-win10 MINGW64 /f/work\n$ scoop search php\nResults from local buckets...\n\nName           Version              Source Binaries\n----           -------              ------ --------\nappengine-go   1.9.70               extras php_cli.ps1\neclipse-php    2022-06              extras\nphp-nts-xdebug 3.1.5-8.1            extras\nphp-xdebug     3.1.5-8.1            extras\nphpstorm       2022.1.3-221.5921.28 extras\nxampp          8.1.6-0              extras php.exe\nphp-nts        8.1.8                main\nphp            8.1.8                main\n")),(0,a.kt)("h3",{id:"\u5b89\u88c5\u5de5\u5177"},"\u5b89\u88c5\u5de5\u5177"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"scoop install git\n")),(0,a.kt)("h3",{id:"\u5378\u8f7d\u8f6f\u4ef6"},"\u5378\u8f7d\u8f6f\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"scoop uninstall git\n")),(0,a.kt)("h3",{id:"\u66f4\u65b0scoop\u53ca\u8f6f\u4ef6"},"\u66f4\u65b0scoop\u53ca\u8f6f\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"scoop update #\u66f4\u65b0 scoop \u81ea\u5df1\nscoop update git #\u66f4\u65b0 git\n")),(0,a.kt)("h3",{id:"\u5b89\u88c5aria2\u52a0\u901f\u4e0b\u8f7d"},"\u5b89\u88c5aria2\u52a0\u901f\u4e0b\u8f7d"),(0,a.kt)("p",null,"scoop\u5b89\u88c5aria2\u540e\uff0cscoop\u4f1a\u81ea\u52a8\u8c03\u7528aria2\u8fdb\u884c\u591a\u7ebf\u7a0b\u4e0b\u8f7d\u4ee5\u52a0\u901f\u4e0b\u8f7d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"scoop install aria2\n# \u5173\u95ed\u6bcf\u6b21\u8fd0\u884c\u65f6\u7684\u544a\u8b66\u63d0\u793a\nscoop config aria2-warning-enabled false\n")),(0,a.kt)("h2",{id:"\u5b89\u88c5\u5e38\u7528\u5de5\u5177"},"\u5b89\u88c5\u5e38\u7528\u5de5\u5177"),(0,a.kt)("h3",{id:"\u57fa\u7840\u5de5\u5177"},"\u57fa\u7840\u5de5\u5177"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"scoop search git\n")),(0,a.kt)("h3",{id:"\u8bed\u8a00\u73af\u5883"},"\u8bed\u8a00\u73af\u5883"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"scoop search php\nscoop search go\nscoop search nodejs\n")),(0,a.kt)("h3",{id:"\u5176\u4ed6\u5de5\u5177"},"\u5176\u4ed6\u5de5\u5177"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"scoop install composer\nscoop install yarn\n")))}u.isMDXComponent=!0}}]);