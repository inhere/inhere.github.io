"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9572],{9613:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>g});var r=n(9496);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=r.createContext({}),s=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},d=function(t){var e=s(t.components);return r.createElement(u.Provider,{value:e},t.children)},p="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,l=t.originalType,u=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),p=s(n),m=o,g=p["".concat(u,".").concat(m)]||p[m]||c[m]||l;return n?r.createElement(g,a(a({ref:e},d),{},{components:n})):r.createElement(g,a({ref:e},d))}));function g(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var l=n.length,a=new Array(l);a[0]=m;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[p]="string"==typeof t?t:o,a[1]=i;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7537:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(1966),o=(n(9496),n(9613));const l={title:"Go \u6355\u83b7 os.Stdout \u7684\u8f93\u51fa",tags:["golang"],date:"2018-08-08T21:00",slug:"rewrite-os-stdout-in-golang",authors:"inhere"},a=void 0,i={permalink:"/blog/rewrite-os-stdout-in-golang",editUrl:"https://github.com/inhere/inhere.github.io/tree/main/blog/2018/08-08-rewrite-os-stdout-in-golang.md",source:"@site/blog/2018/08-08-rewrite-os-stdout-in-golang.md",title:"Go \u6355\u83b7 os.Stdout \u7684\u8f93\u51fa",description:"Go \u91cc\u9762\u6709\u65f6\u5019\u6211\u4eec\u60f3\u6355\u83b7\uff0c\u6216\u8005\u4e22\u5f03\u901a\u8fc7fmt.Print\u7cfb\u5217\u65b9\u6cd5\u6253\u5370\u5230Stdout\u7684\u6570\u636e",date:"2018-08-08T21:00:00.000Z",formattedDate:"2018\u5e748\u67088\u65e5",tags:[{label:"golang",permalink:"/blog/tags/golang"}],readingTime:1.705,hasTruncateMarker:!0,authors:[{name:"inhere",title:"docs maintainer",url:"https://github.com/inhere",imageURL:"https://github.com/inhere.png",key:"inhere"}],frontMatter:{title:"Go \u6355\u83b7 os.Stdout \u7684\u8f93\u51fa",tags:["golang"],date:"2018-08-08T21:00",slug:"rewrite-os-stdout-in-golang",authors:"inhere"},prevItem:{title:"\u7ed9http.Handler\u5305\u88c5\u4e2d\u95f4\u4ef6",permalink:"/blog/wrap-middleware-for-http-handler-in-golang"},nextItem:{title:"php\u4e2d\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u6a21\u5f0f\u4fee\u9970\u7b26",permalink:"/blog/regex-pattern-mode-in-php"}},u={authorsImageUrls:[void 0]},s=[{value:"\u4e22\u5f03\u8f93\u51fa",id:"\u4e22\u5f03\u8f93\u51fa",level:2},{value:"\u6355\u83b7\u8f93\u51fa",id:"\u6355\u83b7\u8f93\u51fa",level:2}],d={toc:s},p="wrapper";function c(t){let{components:e,...n}=t;return(0,o.kt)(p,(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Go \u91cc\u9762\u6709\u65f6\u5019\u6211\u4eec\u60f3\u6355\u83b7\uff0c\u6216\u8005\u4e22\u5f03\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"fmt.Print"),"\u7cfb\u5217\u65b9\u6cd5\u6253\u5370\u5230Stdout\u7684\u6570\u636e"),(0,o.kt)("h2",{id:"\u4e22\u5f03\u8f93\u51fa"},"\u4e22\u5f03\u8f93\u51fa"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "os"\n    "fmt"\n)\n\nvar oldStdout *os.File\n\nfunc main()  {\n    discardStdout()\n    fmt.Println("Hello, playground")\n    restoreStdout()\n    fmt.Println("Hello, playground 2")\n    // Output:\n    // Hello, playground 2\n}\n\n// usage:\n// discardStdout()\n// fmt.Println("Hello, playground")\n// restoreStdout()\nfunc discardStdout() error {\n    // save old os.Stdout\n    oldStdout = os.Stdout\n\n    stdout, err := os.OpenFile(os.DevNull, os.O_WRONLY, 0)\n    if err == nil {\n        os.Stdout = stdout\n    }\n\n    return err\n}\n\nfunc restoreStdout()  {\n    if oldStdout != nil {\n        // close now\n        os.Stdout.Close()\n        // restore\n        os.Stdout = oldStdout\n        oldStdout = nil\n    }\n}\n')),(0,o.kt)("p",null,"\u8fd0\u884c\u793a\u4f8b\uff0c\u5c06\u53ea\u4f1a\u8f93\u51fa\uff1a ",(0,o.kt)("inlineCode",{parentName:"p"},"Hello, playground 2")),(0,o.kt)("h2",{id:"\u6355\u83b7\u8f93\u51fa"},"\u6355\u83b7\u8f93\u51fa"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6765\u81ea stackoverflow \u7684\u56de\u7b54")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"from: ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/10473800/in-go-how-do-i-capture-stdout-of-a-function-into-a-string"},"stackoverflow"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "os"\n    "fmt"\n    "io/ioutil"\n)\n\nfunc main() {\n    rescueStdout := os.Stdout\n    r, w, _ := os.Pipe()\n    os.Stdout = w\n\n    fmt.Println("Hello, playground") // this gets captured\n\n    w.Close() // Notice: must close before read\n    out, _ := ioutil.ReadAll(r)\n    os.Stdout = rescueStdout\n\n    fmt.Printf("Captured: %s", out) // prints: Captured: Hello, playground\n}\n')),(0,o.kt)("p",null,"\u7a0d\u52a0\u8c03\u6574\u4ee5\u65b9\u4fbf\u91cd\u590d\u4f7f\u7528\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "os"\n    "io/ioutil"\n    "fmt"\n)\n\nvar oldStdout, newReader *os.File\n\nfunc main()  {\n    rewriteStdout()\n    fmt.Println("Hello, playground")\n    msg := restoreStdout()\n\n    fmt.Print(msg)\n}\n\n// usage:\n// rewriteStdout()\n// fmt.Println("Hello, playground")\n// msg := restoreStdout()\nfunc rewriteStdout()  {\n    oldStdout = os.Stdout\n    r, w, _ := os.Pipe()\n    newReader = r\n    os.Stdout = w\n}\n\nfunc restoreStdout() string {\n    if newReader == nil {\n        return ""\n    }\n\n    // Notice: must close writer before read data\n    // close now writer\n    os.Stdout.Close()\n    // restore\n    os.Stdout = oldStdout\n    oldStdout = nil\n\n    // read data\n    out, _ := ioutil.ReadAll(newReader)\n\n    // close reader\n    newReader.Close()\n    newReader = nil\n\n    return string(out)\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a \u8981\u8bfb\u53d6 ",(0,o.kt)("inlineCode",{parentName:"p"},"newReader")," \u91cc\u7684\u6570\u636e\uff0c\u5fc5\u987b\u5148\u5173\u95ed writer. \u4e0d\u7136\u4f1a\u4e00\u76f4\u963b\u585e\u3002")))}c.isMDXComponent=!0}}]);