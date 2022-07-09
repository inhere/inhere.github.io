"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9572],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,g=c["".concat(u,".").concat(m)]||c[m]||p[m]||a;return n?r.createElement(g,l(l({ref:t},d),{},{components:n})):r.createElement(g,l({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9190:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={title:"Go \u6355\u83b7 os.Stdout \u7684\u8f93\u51fa",tags:["golang"],date:"2018-08-08T21:00",slug:"rewrite-os-stdout-in-golang",authors:"inhere"},l=void 0,i={permalink:"/en/rewrite-os-stdout-in-golang",editUrl:"https://github.com/inhere/inhere.github.io/tree/main/packages/blog/blog/2018/08-08-rewrite-os-stdout-in-golang.md",source:"@site/blog/2018/08-08-rewrite-os-stdout-in-golang.md",title:"Go \u6355\u83b7 os.Stdout \u7684\u8f93\u51fa",description:"Go \u91cc\u9762\u6709\u65f6\u5019\u6211\u4eec\u60f3\u6355\u83b7\uff0c\u6216\u8005\u4e22\u5f03\u901a\u8fc7fmt.Print\u7cfb\u5217\u65b9\u6cd5\u6253\u5370\u5230Stdout\u7684\u6570\u636e",date:"2018-08-08T21:00:00.000Z",formattedDate:"August 8, 2018",tags:[{label:"golang",permalink:"/en/tags/golang"}],readingTime:1.705,hasTruncateMarker:!0,authors:[{name:"inhere",title:"docs maintainer",url:"https://github.com/inhere",imageURL:"https://github.com/inhere.png",key:"inhere"}],frontMatter:{title:"Go \u6355\u83b7 os.Stdout \u7684\u8f93\u51fa",tags:["golang"],date:"2018-08-08T21:00",slug:"rewrite-os-stdout-in-golang",authors:"inhere"},prevItem:{title:"\u7ed9http.Handler\u5305\u88c5\u4e2d\u95f4\u4ef6",permalink:"/en/wrap-middleware-for-http-handler-in-golang"}},u={authorsImageUrls:[void 0]},s=[{value:"\u4e22\u5f03\u8f93\u51fa",id:"\u4e22\u5f03\u8f93\u51fa",level:2},{value:"\u6355\u83b7\u8f93\u51fa",id:"\u6355\u83b7\u8f93\u51fa",level:2}],d={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Go \u91cc\u9762\u6709\u65f6\u5019\u6211\u4eec\u60f3\u6355\u83b7\uff0c\u6216\u8005\u4e22\u5f03\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"fmt.Print"),"\u7cfb\u5217\u65b9\u6cd5\u6253\u5370\u5230Stdout\u7684\u6570\u636e"),(0,o.kt)("h2",{id:"\u4e22\u5f03\u8f93\u51fa"},"\u4e22\u5f03\u8f93\u51fa"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "os"\n    "fmt"\n)\n\nvar oldStdout *os.File\n\nfunc main()  {\n    discardStdout()\n    fmt.Println("Hello, playground")\n    restoreStdout()\n    fmt.Println("Hello, playground 2")\n    // Output:\n    // Hello, playground 2\n}\n\n// usage:\n// discardStdout()\n// fmt.Println("Hello, playground")\n// restoreStdout()\nfunc discardStdout() error {\n    // save old os.Stdout\n    oldStdout = os.Stdout\n\n    stdout, err := os.OpenFile(os.DevNull, os.O_WRONLY, 0)\n    if err == nil {\n        os.Stdout = stdout\n    }\n\n    return err\n}\n\nfunc restoreStdout()  {\n    if oldStdout != nil {\n        // close now\n        os.Stdout.Close()\n        // restore\n        os.Stdout = oldStdout\n        oldStdout = nil\n    }\n}\n')),(0,o.kt)("p",null,"\u8fd0\u884c\u793a\u4f8b\uff0c\u5c06\u53ea\u4f1a\u8f93\u51fa\uff1a ",(0,o.kt)("inlineCode",{parentName:"p"},"Hello, playground 2")),(0,o.kt)("h2",{id:"\u6355\u83b7\u8f93\u51fa"},"\u6355\u83b7\u8f93\u51fa"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6765\u81ea stackoverflow \u7684\u56de\u7b54")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"from: ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/10473800/in-go-how-do-i-capture-stdout-of-a-function-into-a-string"},"stackoverflow"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "os"\n    "fmt"\n    "io/ioutil"\n)\n\nfunc main() {\n    rescueStdout := os.Stdout\n    r, w, _ := os.Pipe()\n    os.Stdout = w\n\n    fmt.Println("Hello, playground") // this gets captured\n\n    w.Close() // Notice: must close before read\n    out, _ := ioutil.ReadAll(r)\n    os.Stdout = rescueStdout\n\n    fmt.Printf("Captured: %s", out) // prints: Captured: Hello, playground\n}\n')),(0,o.kt)("p",null,"\u7a0d\u52a0\u8c03\u6574\u4ee5\u65b9\u4fbf\u91cd\u590d\u4f7f\u7528\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "os"\n    "io/ioutil"\n    "fmt"\n)\n\nvar oldStdout, newReader *os.File\n\nfunc main()  {\n    rewriteStdout()\n    fmt.Println("Hello, playground")\n    msg := restoreStdout()\n\n    fmt.Print(msg)\n}\n\n// usage:\n// rewriteStdout()\n// fmt.Println("Hello, playground")\n// msg := restoreStdout()\nfunc rewriteStdout()  {\n    oldStdout = os.Stdout\n    r, w, _ := os.Pipe()\n    newReader = r\n    os.Stdout = w\n}\n\nfunc restoreStdout() string {\n    if newReader == nil {\n        return ""\n    }\n\n    // Notice: must close writer before read data\n    // close now writer\n    os.Stdout.Close()\n    // restore\n    os.Stdout = oldStdout\n    oldStdout = nil\n\n    // read data\n    out, _ := ioutil.ReadAll(newReader)\n\n    // close reader\n    newReader.Close()\n    newReader = nil\n\n    return string(out)\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a \u8981\u8bfb\u53d6 ",(0,o.kt)("inlineCode",{parentName:"p"},"newReader")," \u91cc\u7684\u6570\u636e\uff0c\u5fc5\u987b\u5148\u5173\u95ed writer. \u4e0d\u7136\u4f1a\u4e00\u76f4\u963b\u585e\u3002")))}p.isMDXComponent=!0}}]);