"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5113],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=r.createContext({}),s=function(e){var t=r.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(g.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,g=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,f=c["".concat(g,".").concat(m)]||c[m]||u[m]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5093:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={title:"cflag - wraps and extends Go flag build pertty CLI command",tags:["golang","gookit","flag","cli","console"],date:"2022-07-09T16:00",slug:"gookit-goutil-cflag-intro",authors:"inhere"},o=void 0,i={permalink:"/en/blog/gookit-goutil-cflag-intro",editUrl:"https://github.com/inhere/inhere.github.io/tree/main/blog/2022/07-09-gookit-goutil-cflag-usage.md",source:"@site/i18n/en/docusaurus-plugin-content-blog/2022/07-09-gookit-goutil-cflag-usage.md",title:"cflag - wraps and extends Go flag build pertty CLI command",description:"cflag - wraps and extends Go flag build pertty CLI command",date:"2022-07-09T16:00:00.000Z",formattedDate:"July 9, 2022",tags:[{label:"golang",permalink:"/en/blog/tags/golang"},{label:"gookit",permalink:"/en/blog/tags/gookit"},{label:"flag",permalink:"/en/blog/tags/flag"},{label:"cli",permalink:"/en/blog/tags/cli"},{label:"console",permalink:"/en/blog/tags/console"}],readingTime:1.39,hasTruncateMarker:!1,authors:[{name:"inhere",title:"docs maintainer",url:"https://github.com/inhere",imageURL:"https://github.com/inhere.png",key:"inhere"}],frontMatter:{title:"cflag - wraps and extends Go flag build pertty CLI command",tags:["golang","gookit","flag","cli","console"],date:"2022-07-09T16:00",slug:"gookit-goutil-cflag-intro",authors:"inhere"},prevItem:{title:"\u5b89\u88c5\u5e76\u914d\u7f6e docusaurus v2\u7ad9\u70b9",permalink:"/en/blog/install-and-config-docusaurus-v2.md"},nextItem:{title:"gitw - Git \u547d\u4ee4\u5305\u88c5\u5668\uff0c\u751f\u6210 git \u53d8\u66f4\u8bb0\u5f55\u65e5\u5fd7",permalink:"/en/blog/gookit-gitw-intro"}},g={authorsImageUrls:[void 0]},s=[{value:"Use flag",id:"use-flag",level:2},{value:"Show Help",id:"show-help",level:3},{value:"\u4e0d\u8db3\u7684\u70b9",id:"\u4e0d\u8db3\u7684\u70b9",level:3},{value:"Use cflag",id:"use-cflag",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"cflag")," - wraps and extends Go flag build pertty CLI command"),(0,a.kt)("p",null,"TODO image"),(0,a.kt)("h2",{id:"use-flag"},"Use flag"),(0,a.kt)("p",null,"\u4f7f\u7528Go ",(0,a.kt)("inlineCode",{parentName:"p"},"flag")," \u5305\u6784\u5efa\u4e00\u4e2a\u547d\u4ee4\u5e94\u7528\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "flag"\n    "os"\n\n    "github.com/gookit/goutil/cliutil"\n    "github.com/gookit/goutil/dump"\n)\n\nvar opts1 = struct {\n    age  int\n    name string\n    str1 string\n    lOpt string\n}{}\n\n// go run ./_example/rawflag.go\n// go run ./cflag/_example/rawflag.go -h\nfunc main() {\n    c := flag.NewFlagSet("mycmd", flag.ContinueOnError)\n\n    c.IntVar(&opts1.age, "age", 0, "this is a int option")\n    c.StringVar(&opts1.name, "name", "", "this is a string option and required")\n    c.StringVar(&opts1.str1, "str1", "def-val", "this is a string option with default value")\n    c.StringVar(&opts1.lOpt, "long-opt", "", "this is a string option with shorts")\n\n    err := c.Parse(os.Args[1:])\n    if err != nil {\n        if err != flag.ErrHelp {\n            cliutil.Errorln("Error:", err.Error())\n        }\n        return\n    }\n\n    // after parse, do something\n    handleFunc1()\n}\n\nfunc handleFunc1() {\n    cliutil.Infoln("after parse, do something")\n\n    dump.P(opts1)\n}\n')),(0,a.kt)("h3",{id:"show-help"},"Show Help"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go run ./cflag/_example/rawflag.go -h\n")),(0,a.kt)("p",null,"TODO image"),(0,a.kt)("h3",{id:"\u4e0d\u8db3\u7684\u70b9"},"\u4e0d\u8db3\u7684\u70b9"),(0,a.kt)("p",null,"\u5b83\u662fGo\u5185\u7f6e\u7684\u5305\uff0c\u4f7f\u7528\u4e5f\u975e\u5e38\u7b80\u5355\u3002\u4f46\u662f\u6709\u4e00\u4e9b\u4e0d\u8db3\u7684\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u7ed9\u9009\u9879\u6dfb\u52a0\u77ed\u9009\u9879"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u89e3\u6790\u540e\u7eed\u53c2\u6570\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u68c0\u67e5\u9009\u9879\u662f\u5426\u4e3a\u7a7a"),(0,a.kt)("li",{parentName:"ul"},"\u6e32\u67d3\u7684\u5e2e\u52a9\u4fe1\u606f\u975e\u5e38\u7b80\u964b")),(0,a.kt)("h2",{id:"use-cflag"},"Use cflag"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"cflag")," - Wraps and extends go ",(0,a.kt)("inlineCode",{parentName:"p"},"flag.FlagSet")," to build simple command line applications"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Supports auto-rendering of pretty help messages"),(0,a.kt)("li",{parentName:"ul"},"Allows adding short options to flag options, and multiples"),(0,a.kt)("li",{parentName:"ul"},"Allows binding named parameters"),(0,a.kt)("li",{parentName:"ul"},"Allows setting arguments or options as required"),(0,a.kt)("li",{parentName:"ul"},"Allows setting validators for arguments or options")))}u.isMDXComponent=!0}}]);