"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6770],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),i=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=i(e.components);return a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=i(t),d=r,h=m["".concat(u,".").concat(d)]||m[d]||p[d]||l;return t?a.createElement(h,s(s({ref:n},c),{},{components:t})):a.createElement(h,s({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var i=2;i<l;i++)s[i]=t[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8919:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>f,default:()=>T,frontMatter:()=>b,metadata:()=>y,toc:()=>N});var a=t(7462),r=t(7294),l=t(3905),s=t(6010),o=t(2389),u=t(7392),i=t(7094),c=t(2466);const p="tabList__CuJ",m="tabItem_LNqP";function d(e){var n,t;const{lazy:l,block:o,defaultValue:d,values:h,groupId:g,className:k}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=h?h:b.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),y=(0,u.l)(f,((e,n)=>e.value===n.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===d?d:null!=(n=null!=d?d:null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)?n:b[0].props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+f.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:w}=(0,i.U)(),[T,j]=(0,r.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:C}=(0,c.o5)();if(null!=g){const e=N[g];null!=e&&e!==T&&f.some((n=>n.value===e))&&j(e)}const O=e=>{const n=e.currentTarget,t=x.indexOf(n),a=f[t].value;a!==T&&(C(n),j(a),null!=g&&w(g,String(a)))},I=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var a;const n=x.indexOf(e.currentTarget)+1;t=null!=(a=x[n])?a:x[0];break}case"ArrowLeft":{var r;const n=x.indexOf(e.currentTarget)-1;t=null!=(r=x[n])?r:x[x.length-1];break}}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},k)},f.map((e=>{let{value:n,label:t,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:e=>x.push(e),onKeyDown:I,onFocus:O,onClick:O},l,{className:(0,s.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),l?(0,r.cloneElement)(b.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==T})))))}function h(e){const n=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}const g="tabItem_Ymn6";function k(e){let{children:n,hidden:t,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,s.Z)(g,a),hidden:t},n)}const b={title:"\u5b89\u88c5\u5e76\u914d\u7f6e docusaurus v2\u7ad9\u70b9",tags:["docusaurus"],date:"2022-07-09T17:13",slug:"install-and-config-docusaurus-v2.md",authors:"inhere"},f=void 0,y={permalink:"/blog/install-and-config-docusaurus-v2.md",editUrl:"https://github.com/inhere/inhere.github.io/tree/main/blog/2022/07-09-install-and-config-docusaurus-v2.md",source:"@site/blog/2022/07-09-install-and-config-docusaurus-v2.md",title:"\u5b89\u88c5\u5e76\u914d\u7f6e docusaurus v2\u7ad9\u70b9",description:"\u7b80\u5355\u8bb0\u5f55\u4e00\u4e0b\u5982\u4f55\u5b89\u88c5\u548c\u4f7f\u7528 Docusaurus \u6765\u6784\u5efa\u81ea\u5df1\u7684\u535a\u5ba2\u548c\u6587\u6863\u7ad9\u70b9\u3002",date:"2022-07-09T17:13:00.000Z",formattedDate:"2022\u5e747\u67089\u65e5",tags:[{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],readingTime:3.985,hasTruncateMarker:!0,authors:[{name:"inhere",title:"docs maintainer",url:"https://github.com/inhere",imageURL:"https://github.com/inhere.png",key:"inhere"}],frontMatter:{title:"\u5b89\u88c5\u5e76\u914d\u7f6e docusaurus v2\u7ad9\u70b9",tags:["docusaurus"],date:"2022-07-09T17:13",slug:"install-and-config-docusaurus-v2.md",authors:"inhere"},prevItem:{title:"\u901a\u8fc7 scoop \u5728Windows \u4e0b\u5b89\u88c5\u5de5\u5177",permalink:"/blog/install-tools-by-scoop-on-windows"},nextItem:{title:"cflag - wraps and extends Go flag build pertty CLI command",permalink:"/blog/gookit-goutil-cflag-intro"}},v={authorsImageUrls:[void 0]},N=[{value:"\u751f\u6210\u65b0\u7ad9\u70b9",id:"\u751f\u6210\u65b0\u7ad9\u70b9",level:2},{value:"\u914d\u7f6e\u7ad9\u70b9",id:"\u914d\u7f6e\u7ad9\u70b9",level:2},{value:"\u914d\u7f6e\u591a\u8bed\u8a00",id:"\u914d\u7f6e\u591a\u8bed\u8a00",level:3},{value:"GitHab Pages",id:"githab-pages",level:2},{value:"\u6dfb\u52a0\u5e38\u7528\u63d2\u4ef6",id:"\u6dfb\u52a0\u5e38\u7528\u63d2\u4ef6",level:2},{value:"npm2yarn",id:"npm2yarn",level:3},{value:"docusaurus-search-local",id:"docusaurus-search-local",level:3},{value:"openapi-docs",id:"openapi-docs",level:3},{value:"\u4e00\u4e9b\u4f7f\u7528\u8bf4\u660e",id:"\u4e00\u4e9b\u4f7f\u7528\u8bf4\u660e",level:2},{value:"\u5f3a\u8c03\u63d0\u793a",id:"\u5f3a\u8c03\u63d0\u793a",level:3},{value:"\u4ee3\u7801\u884c\u9ad8\u4eae",id:"\u4ee3\u7801\u884c\u9ad8\u4eae",level:3}],w={toc:N};function T(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},w,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u7b80\u5355\u8bb0\u5f55\u4e00\u4e0b\u5982\u4f55\u5b89\u88c5\u548c\u4f7f\u7528 Docusaurus \u6765\u6784\u5efa\u81ea\u5df1\u7684\u535a\u5ba2\u548c\u6587\u6863\u7ad9\u70b9\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Docusaurus \u7684\u5b98\u65b9\u6587\u6863 ",(0,l.kt)("a",{parentName:"p",href:"https://docusaurus.io/zh-CN/docs"},"https://docusaurus.io/zh-CN/docs"))),(0,l.kt)("h2",{id:"\u751f\u6210\u65b0\u7ad9\u70b9"},"\u751f\u6210\u65b0\u7ad9\u70b9"),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"classic")," \u6a21\u677f\u751f\u6210\u4e00\u4e2a\u65b0\u7684 Docusaurus \u7ad9\u70b9 ",(0,l.kt)("inlineCode",{parentName:"p"},"my-website"),"\u3002"),(0,l.kt)("p",null,"\u8fd0\u884c\u547d\u4ee4\u540e\uff0c\u7ecf\u5178\u6a21\u677f\u5c06\u81ea\u52a8\u6dfb\u52a0\u5230\u60a8\u7684\u9879\u76ee\u4e2d"),(0,l.kt)(h,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(k,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm init docusaurus@latest my-website classic\n"))),(0,l.kt)(k,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn init docusaurus@latest my-website classic\n")))),(0,l.kt)("p",null,"\u8fdb\u5165\u751f\u6210\u7684\u7ad9\u70b9\u76ee\u5f55"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd my-website\n")),(0,l.kt)("p",null,"\u542f\u52a8\u5e76\u8fd0\u884c\u5f00\u53d1\u670d\u52a1\u5668:"),(0,l.kt)(h,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(k,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start\n"))),(0,l.kt)(k,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run start\n")))),(0,l.kt)("p",null,"\u6253\u5f00\u9875\u9762 ",(0,l.kt)("inlineCode",{parentName:"p"},"docs/intro.md")," \u5e76\u7f16\u8f91\u4e00\u4e9b\u884c,\u53ef\u4ee5\u770b\u5230\u8be5\u7ad9\u70b9\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u5e76\u663e\u793a\u6700\u65b0\u7684\u66f4\u6539\u3002"),(0,l.kt)("h2",{id:"\u914d\u7f6e\u7ad9\u70b9"},"\u914d\u7f6e\u7ad9\u70b9"),(0,l.kt)("p",null,"\u57fa\u7840\u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"const config = {\n  title: \"Inhere's Site\",\n  tagline: \"Inhere's site, blogs and project docs\",\n  url: 'https://inhere.github.io',\n  baseUrl: '/',\n  trailingSlash: false,\n\n  organizationName: 'inhere', // Usually your GitHub org/user name.\n  projectName: 'inhere.github.io', // Usually your repo name.\n  deploymentBranch: 'gh-pages',\n\n  // ...\n}\n")),(0,l.kt)("p",null,"\u6587\u6863\u548c\u535a\u5ba2\u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"  presets: [\n    [\n      'classic',\n      /** @type {import('@docusaurus/preset-classic').Options} */\n      ({\n        docs: {\n          sidebarPath: require.resolve('./sidebars.js'),\n          // Please change this to your repo.\n          // Remove this to remove the \"edit this page\" links.\n          editUrl: 'https://github.com/inhere/inhere.github.io/tree/main/',\n        },\n        blog: {\n          showReadingTime: true,\n          postsPerPage: 6,\n          // routeBasePath: '/', // \u628a\u535a\u5ba2\u653e\u5728\u7ad9\u70b9\u6839\u90e8\n          blogSidebarCount: 6, // \u9ed8\u8ba4 5\n          // Remove this to remove the \"edit this page\" links.\n          editUrl: 'https://github.com/inhere/inhere.github.io/tree/main/',\n        },\n      }),\n    ],\n  ],\n")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u5b8c\u6574\u914d\u7f6e\u8bf7\u770b ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/inhere/inhere.github.io/blob/main/docusaurus.config.js"},"https://github.com/inhere/inhere.github.io/blob/main/docusaurus.config.js"))),(0,l.kt)("h3",{id:"\u914d\u7f6e\u591a\u8bed\u8a00"},"\u914d\u7f6e\u591a\u8bed\u8a00"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"i18n: {\n    defaultLocale: 'zh-CN',\n    locales: [ \"zh-CN\", 'en'],\n    localeConfigs: {\n      en: {\n        htmlLang: 'en-GB',\n      },\n    },\n  },\n")),(0,l.kt)("p",null,"\u8fd9\u91cc\u6211\u662f\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"zh-CN")," \u4e3a\u4e3b\uff0c\u751f\u6210 ",(0,l.kt)("inlineCode",{parentName:"p"},"en")," \u7ffb\u8bd1\u6587\u6863"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm run write-translations -- --locale en\n")),(0,l.kt)("h2",{id:"githab-pages"},"GitHab Pages"),(0,l.kt)("p",null,"\u53c2\u8003\u5b98\u65b9\u6587\u6863\u6dfb\u52a0 GitHab Actions \u5982\u4e0b\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u8fd9\u6837\u5728\u6bcf\u6b21\u63a8\u9001\u5230\u4ed3\u5e93\u65f6\u5c31\u4f1a\u89e6\u53d1\u81ea\u52a8\u6784\u5efa\uff0c\n\u5e76\u4e14\u4f1a\u81ea\u52a8\u90e8\u7f72\u6784\u5efa\u7684\u9759\u6001\u6587\u4ef6\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"gh-pages")," \u5206\u652f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},".github/workflows/deploy.yml\n.github/workflows/test-deploy.yml\n")),(0,l.kt)("h2",{id:"\u6dfb\u52a0\u5e38\u7528\u63d2\u4ef6"},"\u6dfb\u52a0\u5e38\u7528\u63d2\u4ef6"),(0,l.kt)("h3",{id:"npm2yarn"},"npm2yarn"),(0,l.kt)("p",null,"\u53ef\u4ee5\u540c\u65f6\u663e\u793a npm \u548c Yarn \u7684 CLI \u547d\u4ee4\u3002\n\u7136\u540e\u8981\u4f7f\u7528\u5b83\uff0c\u53ea\u9700\u5728\u4ee3\u7801\u5757\u4e2d\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"npm2yarn")," \u952e\uff1a"),(0,l.kt)(h,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(k,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @docusaurus/remark-plugin-npm2yarn\n"))),(0,l.kt)(k,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @docusaurus/remark-plugin-npm2yarn\n")))),(0,l.kt)("p",null,"\u914d\u7f6e\u63d2\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-start\n          remarkPlugins: [\n            [require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}],\n          ],\n          // highlight-end\n        },\n        pages: {\n          // highlight-next-line\n          remarkPlugins: [require('@docusaurus/remark-plugin-npm2yarn')],\n        },\n        blog: {\n          // ...\n        },\n      },\n    ],\n  ],\n};\n")),(0,l.kt)("h3",{id:"docusaurus-search-local"},"docusaurus-search-local"),(0,l.kt)("p",null,"\u7528\u4e8e Docusaurus v2 \u7684\u652f\u6301\u79bb\u7ebf\u672c\u5730\u641c\u7d22\u7684\u63d2\u4ef6"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u63d2\u4ef6\u4ed3\u5e93 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/easyops-cn/docusaurus-search-local"},"https://github.com/easyops-cn/docusaurus-search-local"))),(0,l.kt)("p",null,"\u5b89\u88c5\u63d2\u4ef6\uff1a"),(0,l.kt)(h,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(k,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @easyops-cn/docusaurus-search-local\n"))),(0,l.kt)(k,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @easyops-cn/docusaurus-search-local\n")))),(0,l.kt)("p",null,"\u914d\u7f6e\u63d2\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  // ... Your other configurations.\n  themes: [\n    // ... Your other themes.\n    [\n      // highlight-start\n      require.resolve("@easyops-cn/docusaurus-search-local"),\n      {\n        // ... Your options.\n        // `hashed` is recommended as long-term-cache of index file is possible.\n        hashed: true,\n        // For Docs using Chinese, The is recommended to set to:\n        language: ["en", "zh"],\n      },\n      // highlight-end\n    ],\n  ],\n};\n')),(0,l.kt)("p",null,"\u7c7b\u4f3c\u63d2\u4ef6\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/praveenn77/docusaurus-lunr-search"},"https://github.com/praveenn77/docusaurus-lunr-search")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/cmfcmf/docusaurus-search-local"},"https://github.com/cmfcmf/docusaurus-search-local"))),(0,l.kt)("h3",{id:"openapi-docs"},"openapi-docs"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"GitHub ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/PaloAltoNetworks/docusaurus-openapi-docs"},"https://github.com/PaloAltoNetworks/docusaurus-openapi-docs"))),(0,l.kt)("p",null,"Installation"),(0,l.kt)("p",null,"Plugin:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add docusaurus-plugin-openapi-docs\n")),(0,l.kt)("p",null,"Theme:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add docusaurus-theme-openapi-docs\n")),(0,l.kt)("h2",{id:"\u4e00\u4e9b\u4f7f\u7528\u8bf4\u660e"},"\u4e00\u4e9b\u4f7f\u7528\u8bf4\u660e"),(0,l.kt)("p",null,"\u4e00\u4e9b\u6709\u7528\u7684\u4f7f\u7528\u8bf4\u660e"),(0,l.kt)("h3",{id:"\u5f3a\u8c03\u63d0\u793a"},"\u5f3a\u8c03\u63d0\u793a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},":::note\n\n\u4e00\u4e9b\u5305\u542b _Markdown_ `\u8bed\u6cd5` \u7684 **\u5185\u5bb9**\u3002\n\n:::\n\n:::tip\n\n\u4e00\u4e9b\u5305\u542b _Markdown_ `\u8bed\u6cd5` \u7684 **\u5185\u5bb9**\u3002\n\n:::\n\n:::info\n\n\u4e00\u4e9b\u5305\u542b _Markdown_ `\u8bed\u6cd5` \u7684 **\u5185\u5bb9**\u3002\n\n:::\n\n:::caution\n\n\u4e00\u4e9b\u5305\u542b _Markdown_ `\u8bed\u6cd5` \u7684 **\u5185\u5bb9**\u3002\n\n:::\n\n:::danger\n\n\u4e00\u4e9b\u5305\u542b _Markdown_ `\u8bed\u6cd5` \u7684 **\u5185\u5bb9**\u3002\n\n:::\n")),(0,l.kt)("p",null,"\u6548\u679c\u5982\u4e0b\uff1a"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u4e00\u4e9b\u5305\u542b ",(0,l.kt)("em",{parentName:"p"},"Markdown")," ",(0,l.kt)("inlineCode",{parentName:"p"},"\u8bed\u6cd5")," \u7684 ",(0,l.kt)("strong",{parentName:"p"},"\u5185\u5bb9"),"\u3002")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u4e00\u4e9b\u5305\u542b ",(0,l.kt)("em",{parentName:"p"},"Markdown")," ",(0,l.kt)("inlineCode",{parentName:"p"},"\u8bed\u6cd5")," \u7684 ",(0,l.kt)("strong",{parentName:"p"},"\u5185\u5bb9"),"\u3002")),(0,l.kt)("h3",{id:"\u4ee3\u7801\u884c\u9ad8\u4eae"},"\u4ee3\u7801\u884c\u9ad8\u4eae"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"highlight-next-line"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"highlight-start"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"highlight-end")," \u7b49\u6ce8\u91ca\u6765\u9009\u62e9\u8981\u9ad8\u4eae\u7684\u884c\u3002"),(0,l.kt)("p",null,"\u6548\u679c\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function HighlightSomeText(highlight) {\n  if (highlight) {\n    // highlight-next-line\n    return '\u8fd9\u884c\u88ab\u9ad8\u4eae\u4e86\uff01';\n  }\n\n  return '\u8fd9\u91cc\u4e0d\u4f1a';\n}\n\nfunction HighlightMoreText(highlight) {\n  // highlight-start\n  if (highlight) {\n    return '\u8fd9\u5757\u88ab\u9ad8\u4eae\u4e86\uff01';\n  }\n  // highlight-end\n\n  return '\u8fd9\u91cc\u4e0d\u4f1a';\n}\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u539f\u6587\u6863 ",(0,l.kt)("a",{parentName:"p",href:"https://docusaurus.io/zh-CN/docs/markdown-features/code-blocks#line-highlighting"},"https://docusaurus.io/zh-CN/docs/markdown-features/code-blocks#line-highlighting"))))}T.isMDXComponent=!0}}]);