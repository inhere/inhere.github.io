"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9362],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=u(r),k=l,d=g["".concat(p,".").concat(k)]||g[k]||m[k]||i;return r?n.createElement(d,a(a({ref:t},c),{},{components:r})):n.createElement(d,a({ref:t},c))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=r.length,a=new Array(i);a[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},6839:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(7462),l=(r(7294),r(3905));const i={title:"git \u4f7f\u7528\u8bb0\u5f55",tags:["git"],date:"2016-04-11T16:51",slug:"git-usage-records",authors:["inhere","network"]},a=void 0,o={permalink:"/en/blog/git-usage-records",editUrl:"https://github.com/inhere/inhere.github.io/tree/main/blog/2016/04-11-git-usage-records.md",source:"@site/blog/2016/04-11-git-usage-records.md",title:"git \u4f7f\u7528\u8bb0\u5f55",description:"git \u4f7f\u7528\u4e00\u4e9b\u8bb0\u5f55\uff0c\u5e38\u7528\u547d\u4ee4\u548c\u4e00\u4e9b\u7279\u6b8a\u9009\u9879",date:"2016-04-11T16:51:00.000Z",formattedDate:"April 11, 2016",tags:[{label:"git",permalink:"/en/blog/tags/git"}],readingTime:7.275,hasTruncateMarker:!0,authors:[{name:"inhere",title:"docs maintainer",url:"https://github.com/inhere",imageURL:"https://github.com/inhere.png",key:"inhere"},{name:"From Network",title:"Contents from network",key:"network"}],frontMatter:{title:"git \u4f7f\u7528\u8bb0\u5f55",tags:["git"],date:"2016-04-11T16:51",slug:"git-usage-records",authors:["inhere","network"]},prevItem:{title:"vim \u4f7f\u7528\u8bb0\u5f55",permalink:"/en/blog/vim-usage-records"},nextItem:{title:"\u5b89\u88c5centos 7 \u540e\u7684\u4e00\u4e9b\u8bbe\u7f6e\u8bb0\u5f55",permalink:"/en/blog/centos7-init-setting-after-install"}},p={authorsImageUrls:[void 0,void 0]},u=[{value:"pull\u548cmerge",id:"pull\u548cmerge",level:2},{value:"\u6587\u4ef6\u6743\u9650\u4fee\u6539\u5f15\u8d77\u7684\u51b2\u7a81",id:"\u6587\u4ef6\u6743\u9650\u4fee\u6539\u5f15\u8d77\u7684\u51b2\u7a81",level:2},{value:"\u89e3\u51b3\u529e\u6cd5\uff1a",id:"\u89e3\u51b3\u529e\u6cd5",level:3},{value:"Git\u6253TAG",id:"git\u6253tag",level:2},{value:"Git\u6253\u5305\u6e90\u7801",id:"git\u6253\u5305\u6e90\u7801",level:2},{value:"Git\u53eaclone\u6700\u65b0\u7248\u672c\u4ee3\u7801\u4e0d\u8981.git\u76ee\u5f55",id:"git\u53eaclone\u6700\u65b0\u7248\u672c\u4ee3\u7801\u4e0d\u8981git\u76ee\u5f55",level:2},{value:"\u4e0d\u4ea7\u751f merge commit",id:"\u4e0d\u4ea7\u751f-merge-commit",level:2},{value:"\u5408\u5e76\u65f6\u53ea\u4ea7\u751f\u5408\u5e76\u63d0\u4ea4",id:"\u5408\u5e76\u65f6\u53ea\u4ea7\u751f\u5408\u5e76\u63d0\u4ea4",level:2},{value:"\u6dfb\u52a0\u7a7a\u76ee\u5f55",id:"\u6dfb\u52a0\u7a7a\u76ee\u5f55",level:2},{value:"\u8f93\u51fa\u6700\u540e\u4e00\u6b21\u63d0\u4ea4\u7684\u6539\u53d8",id:"\u8f93\u51fa\u6700\u540e\u4e00\u6b21\u63d0\u4ea4\u7684\u6539\u53d8",level:2},{value:"\u8f93\u51fa\u4e24\u4e2a\u63d0\u4ea4\u95f4\u7684\u6539\u53d8",id:"\u8f93\u51fa\u4e24\u4e2a\u63d0\u4ea4\u95f4\u7684\u6539\u53d8",level:2},{value:"\u514b\u9686 \u6307\u5b9a\u7684\u8fdc\u7a0b\u5206\u652f",id:"\u514b\u9686-\u6307\u5b9a\u7684\u8fdc\u7a0b\u5206\u652f",level:2},{value:"\u5e94\u7528 \u4ece\u4e0d\u76f8\u5173\u7684\u672c\u5730\u4ed3\u5e93\u6765\u7684\u8865\u4e01",id:"\u5e94\u7528-\u4ece\u4e0d\u76f8\u5173\u7684\u672c\u5730\u4ed3\u5e93\u6765\u7684\u8865\u4e01",level:2},{value:"\u68c0\u6d4b \u4f60\u7684\u5206\u652f\u7684\u6539\u53d8\u662f\u5426\u4e3a\u5176\u5b83\u5206\u652f\u7684\u4e00\u90e8\u5206",id:"\u68c0\u6d4b-\u4f60\u7684\u5206\u652f\u7684\u6539\u53d8\u662f\u5426\u4e3a\u5176\u5b83\u5206\u652f\u7684\u4e00\u90e8\u5206",level:2},{value:"\u5f00\u59cb\u4e00\u4e2a\u65e0\u5386\u53f2\u7684\u65b0\u5206\u652f",id:"\u5f00\u59cb\u4e00\u4e2a\u65e0\u5386\u53f2\u7684\u65b0\u5206\u652f",level:2},{value:"\u65e0\u5207\u6362\u5206\u652f\u7684\u4ece\u5176\u5b83\u5206\u652fCheckout\u6587\u4ef6",id:"\u65e0\u5207\u6362\u5206\u652f\u7684\u4ece\u5176\u5b83\u5206\u652fcheckout\u6587\u4ef6",level:2},{value:"\u5ffd\u7565\u5df2\u8ffd\u8e2a\u6587\u4ef6\u7684\u53d8\u52a8",id:"\u5ffd\u7565\u5df2\u8ffd\u8e2a\u6587\u4ef6\u7684\u53d8\u52a8",level:2},{value:"\u68c0\u67e5\u63d0\u4ea4\u7684\u53d8\u52a8\u662f\u5426\u662frelease\u7684\u4e00\u90e8\u5206",id:"\u68c0\u67e5\u63d0\u4ea4\u7684\u53d8\u52a8\u662f\u5426\u662frelease\u7684\u4e00\u90e8\u5206",level:2},{value:"\u4f7f\u7528rebase\u63a8\u9001\u800c\u975emerge",id:"\u4f7f\u7528rebase\u63a8\u9001\u800c\u975emerge",level:2}],c={toc:u};function m(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"git")," \u4f7f\u7528\u4e00\u4e9b\u8bb0\u5f55\uff0c\u5e38\u7528\u547d\u4ee4\u548c\u4e00\u4e9b\u7279\u6b8a\u9009\u9879"),(0,l.kt)("h2",{id:"pull\u548cmerge"},"pull\u548cmerge"),(0,l.kt)("p",null,"\u63d0\u5021\u6dfb\u52a0\u9009\u9879 ",(0,l.kt)("inlineCode",{parentName:"p"},"--no-ff")," -- ",(0,l.kt)("em",{parentName:"p"},"\u4e0d\u4f7f\u7528\u5feb\u901f\u5408\u5e76")),(0,l.kt)("h2",{id:"\u6587\u4ef6\u6743\u9650\u4fee\u6539\u5f15\u8d77\u7684\u51b2\u7a81"},"\u6587\u4ef6\u6743\u9650\u4fee\u6539\u5f15\u8d77\u7684\u51b2\u7a81"),(0,l.kt)("p",null,"\u901a\u5e38\u662f\u56e0\u4e3a\u5f00\u53d1\u73af\u5883\u548c\u8fd0\u884c\u73af\u5883\u662f\u4e0d\u540c\u7684\u7cfb\u7edf\uff0c\u53d1\u5e03\u9879\u76ee\u5230\u7ebf\u4e0a\u65f6\uff0c\u5f88\u591a\u65f6\u5019\u9700\u8981\u4fee\u6539\u6587\u4ef6\u7684\u6743\u9650\u3002\u4f46git\u628a\u6587\u4ef6\u6743\u9650\u4e5f\u5217\u5165\u4e86\u7248\u672c\u7ba1\u7406\u3002"),(0,l.kt)("h3",{id:"\u89e3\u51b3\u529e\u6cd5"},"\u89e3\u51b3\u529e\u6cd5\uff1a"),(0,l.kt)("p",null,"git\u4e2d\u53ef\u4ee5\u52a0\u5165\u5ffd\u7565\u6587\u4ef6\u6743\u9650\u7684\u914d\u7f6e\uff0c\u5177\u4f53\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ git config core.filemode false // \u4ec5\u5bf9\u5f53\u524d\u9879\u76ee\u6709\u6548\n$ git config --global core.filemode false // \u5c06\u914d\u7f6e\u5e94\u7528\u5230\u5168\u5c40\n")),(0,l.kt)("p",null,"\u8fd9\u6837\u5c31\u8bbe\u7f6e\u4e86\u5ffd\u7565\u6587\u4ef6\u6743\u9650\u3002\u67e5\u770b\u4e0b\u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ git config -l\n\nalias.co=checkout\nalias.br=branch\ncore.filemode=false\ncore.repositoryformatversion=0\n")),(0,l.kt)("h2",{id:"git\u6253tag"},"Git\u6253TAG"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6253TAG\u4e5f\u5c31\u662f\u53d1\u5e03\u7248\u672c")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'$ git tag -a v1.2 -m "version 1.4"\n$ git push --tags\n')),(0,l.kt)("h2",{id:"git\u6253\u5305\u6e90\u7801"},"Git\u6253\u5305\u6e90\u7801"),(0,l.kt)("p",null,"\u5bf9Git\u7ba1\u7406\u7684\u6e90\u7801\u8fdb\u884c\u538b\u7f29\u6253\u5305\uff0c\u5982\u679c\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"tar xvzf xxxx.tag.gz xxxxx"),"\u7684\u8bdd\u5e76\u4e0d\u662f\u4e00\u4e2a\u5f88\u597d\u7684\u9009\u62e9\uff0c\u56e0\u4e3a\u4f1a\u5c06",(0,l.kt)("inlineCode",{parentName:"p"},".git/"),"\u76ee\u5f55\u4e0b\u7684\u4e2d\u95f4\u6587\u4ef6\u5168\u90e8\u538b\u7f29\uff0c\u5982\u679c\u53ea\u60f3\u8981\u67d0\u4e00\u4e2a\u7248\u672c\u7684\u6e90\u7801\u3002\nGit\u63d0\u4f9b\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"archive")," \u5b83\u4f1a\u7ed9\u6253\u5305\u4e00\u4efd\u7eaf\u51c0\u7684\u4ee3\u7801\u3002\u5f53\u7136\u8fd9\u4e2a\u53ea\u9002\u7528\u4e8e\u53d1\u90e8\u4e00\u4e2a\u7248\u672c\u7684\u6e90\u7801\uff0c\u800c\u4e0d\u662f\u5907\u4efdGit\u7ba1\u7406\u7684\u6574\u5957\u6e90\u7801\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ git archive xxxx\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"xxx\u4ee3\u8868SHA-1 Hash\u503c\u3002")),(0,l.kt)("h2",{id:"git\u53eaclone\u6700\u65b0\u7248\u672c\u4ee3\u7801\u4e0d\u8981git\u76ee\u5f55"},"Git\u53eaclone\u6700\u65b0\u7248\u672c\u4ee3\u7801\u4e0d\u8981.git\u76ee\u5f55"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"git clone --depth=1 git://someserver/somerepo dirformynewrepo\nrm -rf !$/.git\n")),(0,l.kt)("h2",{id:"\u4e0d\u4ea7\u751f-merge-commit"},"\u4e0d\u4ea7\u751f merge commit"),(0,l.kt)("p",null,"\u901a\u5e38 ",(0,l.kt)("inlineCode",{parentName:"p"},"merge/pull")," \u4f1a\u4ea7\u751f\u4e00\u4e2a merge commit,\u8ba9\u63d0\u4ea4\u8bb0\u5f55\u770b\u8d77\u6765\u4e0d\u592a\u7f8e\u89c2\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"rebase"),"\u9009\u9879\u6765\u5408\u5e76commit"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ git pull --rebase origin master\n")),(0,l.kt)("h2",{id:"\u5408\u5e76\u65f6\u53ea\u4ea7\u751f\u5408\u5e76\u63d0\u4ea4"},"\u5408\u5e76\u65f6\u53ea\u4ea7\u751f\u5408\u5e76\u63d0\u4ea4"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u8fd8\u6709\u5176\u5b83\u8bf4\u6cd5\uff1a\u5408\u5e76\u65f6\u4e0d\u5408\u5e76\u5386\u53f2\uff1b\u5408\u5e76\u65f6\u5c06\u6240\u6709commit\u5408\u4e3a\u4e00\u4e2a\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"git pull --squash another\n")),(0,l.kt)("p",null,"\u4e00\u822c\u7528\u4e8emaster\u5206\u652f\uff0c\u50cflinus\u7684linux\u5185\u6838\u4e00\u6837\u3002\n\u66f4\u591a\u4fe1\u606f\u89c1\u300aGit merge no history commit\u300b\u300agit merge \u2013squash\u4ecb\u7ecd\u300b"),(0,l.kt)("h2",{id:"\u6dfb\u52a0\u7a7a\u76ee\u5f55"},"\u6dfb\u52a0\u7a7a\u76ee\u5f55"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ find . -type d -empty -exec touch {}/.gitkeep \\;\n")),(0,l.kt)("p",null,"\u6267\u884c\u4ee5\u4e0a\u547d\u4ee4\u5c06\u4f1a\u5728\u7a7a\u76ee\u5f55\u4e2d\u6dfb\u52a0\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},".gitkeep"),"\u6587\u4ef6\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u4fdd\u8bc1\u7a7a\u76ee\u5f55\u4e0d\u88ab\u5ffd\u7565\uff0c\u4e14\u4e0d\u5f71\u54cd\u539f\u4ee3\u7801\u7684\u7ed3\u6784\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0a\u53c2\u8003\u8f6c\u81ea ",(0,l.kt)("a",{parentName:"p",href:"http://blog.csdn.net/kangear/article/details/13169395"},"Git\u6df1\u5ea6\u4f7f\u7528\u7ecf\u9a8c\u603b\u7ed3")),(0,l.kt)("h2",{id:"\u8f93\u51fa\u6700\u540e\u4e00\u6b21\u63d0\u4ea4\u7684\u6539\u53d8"},"\u8f93\u51fa\u6700\u540e\u4e00\u6b21\u63d0\u4ea4\u7684\u6539\u53d8"),(0,l.kt)("p",null,"\u8fd9\u4e2a\u547d\u4ee4\uff0c\u6211\u7ecf\u5e38\u4f7f\u7528\u5b83 \u6765\u53d1\u9001\u5176\u4ed6\u6ca1\u6709\u4f7f\u7528git\u7684\u4eba\u6765\u68c0\u67e5\u6216\u8005\u96c6\u6210\u6240\u4fee\u6539\u7684\u3002\u5b83\u4f1a\u8f93\u51fa\u6700\u8fd1\u63d0\u4ea4\u7684\u4fee\u6539\u5185\u5bb9\u5230\u4e00\u4e2azip\u6587\u4ef6\u4e2d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"git archive -o ../updated.zip HEAD $(git diff --name-only HEAD^)\n")),(0,l.kt)("h2",{id:"\u8f93\u51fa\u4e24\u4e2a\u63d0\u4ea4\u95f4\u7684\u6539\u53d8"},"\u8f93\u51fa\u4e24\u4e2a\u63d0\u4ea4\u95f4\u7684\u6539\u53d8"),(0,l.kt)("p",null,"\u7c7b\u4f3c\u7684\uff0c\u5982\u679c\u4f60\u9700\u8981\u8f93\u51fa\u67d0\u4e24\u4e2a\u63d0\u4ea4\u95f4\u7684\u6539\u53d8\u65f6\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"git archive -o ../latest.zip NEW_COMMIT_ID_HERE $(git diff --name-only OLD_COMMIT_ID_HERE NEW_COMMIT_ID_HERE)\n")),(0,l.kt)("h2",{id:"\u514b\u9686-\u6307\u5b9a\u7684\u8fdc\u7a0b\u5206\u652f"},"\u514b\u9686 \u6307\u5b9a\u7684\u8fdc\u7a0b\u5206\u652f"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u6e34\u671b\u53ea\u514b\u9686\u8fdc\u7a0b\u4ed3\u5e93\u7684\u4e00\u4e2a\u6307\u5b9a\u5206\u652f\uff0c\u800c\u4e0d\u662f\u6574\u4e2a\u4ed3\u5e93\u5206\u652f\uff0c\u8fd9\u5bf9\u4f60\u5e2e\u52a9\u5f88\u5927\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"git init\ngit remote add -t BRANCH_NAME_HERE -f origin REMOTE_REPO_URL_PATH_HERE\ngit checkout BRANCH_NAME_HERE\n")),(0,l.kt)("h2",{id:"\u5e94\u7528-\u4ece\u4e0d\u76f8\u5173\u7684\u672c\u5730\u4ed3\u5e93\u6765\u7684\u8865\u4e01"},"\u5e94\u7528 \u4ece\u4e0d\u76f8\u5173\u7684\u672c\u5730\u4ed3\u5e93\u6765\u7684\u8865\u4e01"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u9700\u8981\u5176\u5b83\u4e00\u4e9b\u4e0d\u76f8\u5173\u7684\u672c\u5730\u4ed3\u5e93\u4f5c\u4e3a\u4f60\u73b0\u5728\u4ed3\u5e93\u7684\u8865\u4e01\uff0c\u8fd9\u91cc\u5c31\u662f\u901a\u5f80\u90a3\u91cc\u7684\u6377\u5f84\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"git --git-dir=PATH_TO_OTHER_REPOSITORY_HERE/.git format-patch -k -1 --stdout COMMIT_HASH_ID_HERE| git am -3 -k\n")),(0,l.kt)("h2",{id:"\u68c0\u6d4b-\u4f60\u7684\u5206\u652f\u7684\u6539\u53d8\u662f\u5426\u4e3a\u5176\u5b83\u5206\u652f\u7684\u4e00\u90e8\u5206"},"\u68c0\u6d4b \u4f60\u7684\u5206\u652f\u7684\u6539\u53d8\u662f\u5426\u4e3a\u5176\u5b83\u5206\u652f\u7684\u4e00\u90e8\u5206"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"cherry"),"\u547d\u4ee4\u8ba9\u6211\u4eec\u68c0\u6d4b\u4f60\u7684\u5206\u652f\u7684\u6539\u53d8\u662f\u5426\u51fa\u73b0\u5728\u5176\u5b83\u4e00\u4e9b\u5206\u652f\u4e2d\u3002\u5b83\u901a\u8fc7+\u6216\u8005-\u7b26\u53f7\u6765\u663e\u793a\u4ece\u5f53\u524d\u5206\u652f\u4e0e\u6240\u7ed9\u7684\u5206\u652f\u4e4b\u95f4\u7684\u6539\u53d8\uff1a\u662f\u5426\u5408\u5e76\u4e86(merged)\u3002.+ \u6307\u793a\u6ca1\u6709\u51fa\u73b0\u5728\u6240\u7ed9\u5206\u652f\u4e2d\uff0c\u53cd\u4e4b\uff0c- \u5c31\u8868\u793a\u51fa\u73b0\u5728\u4e86\u6240\u7ed9\u7684\u5206\u652f\u4e2d\u4e86\u3002\u8fd9\u91cc\u5c31\u662f\u5982\u4f55\u53bb\u68c0\u6d4b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"git cherry -v OTHER_BRANCH_NAME_HERE\n# \u4f8b\u5982: \u68c0\u6d4bmaster\u5206\u652f\ngit cherry -v master\n")),(0,l.kt)("h2",{id:"\u5f00\u59cb\u4e00\u4e2a\u65e0\u5386\u53f2\u7684\u65b0\u5206\u652f"},"\u5f00\u59cb\u4e00\u4e2a\u65e0\u5386\u53f2\u7684\u65b0\u5206\u652f"),(0,l.kt)("p",null,"\u6709\u65f6\uff0c\u4f60\u9700\u8981\u5f00\u59cb\u4e00\u4e2a\u65b0\u5206\u652f\uff0c\u4f46\u662f\u53c8\u4e0d\u60f3\u628a\u5f88\u957f\u5f88\u957f\u7684\u5386\u53f2\u8bb0\u5f55\u5e26\u8fdb\u6765\uff0c\u4f8b\u5982\uff0c\u4f60\u60f3\u5728\u516c\u4f17\u533a\u57df\uff08\u5f00\u6e90\uff09\u653e\u7f6e\u4f60\u7684\u4ee3\u7801\uff0c\u4f46\u662f\u53c8\u4e0d\u60f3\u522b\u4eba\u77e5\u9053\u5b83\u7684\u5386\u53f2\u8bb0\u5f55\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"git checkout --orphan NEW_BRANCH_NAME_HERE\n")),(0,l.kt)("h2",{id:"\u65e0\u5207\u6362\u5206\u652f\u7684\u4ece\u5176\u5b83\u5206\u652fcheckout\u6587\u4ef6"},"\u65e0\u5207\u6362\u5206\u652f\u7684\u4ece\u5176\u5b83\u5206\u652fCheckout\u6587\u4ef6"),(0,l.kt)("p",null,"\u4e0d\u60f3\u5207\u6362\u5206\u652f\uff0c\u4f46\u662f\u53c8\u60f3\u4ece\u5176\u5b83\u5206\u652f\u4e2d\u83b7\u5f97\u4f60\u9700\u8981\u7684\u6587\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"git checkout BRANCH_NAME_HERE -- PATH_TO_FILE_IN_BRANCH_HERE\n")),(0,l.kt)("h2",{id:"\u5ffd\u7565\u5df2\u8ffd\u8e2a\u6587\u4ef6\u7684\u53d8\u52a8"},"\u5ffd\u7565\u5df2\u8ffd\u8e2a\u6587\u4ef6\u7684\u53d8\u52a8"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u6b63\u5728\u4e00\u4e2a\u56e2\u961f\u4e2d\u5de5\u4f5c\uff0c\u800c\u4e14\u5927\u5bb6\u90fd\u5728\u540c\u4e00\u6761branch\u4e0a\u9762\u5de5\u4f5c\uff0c\u90a3\u4e48\u60a8\u5f88\u6709\u53ef\u80fd\u4f1a\u7ecf\u5e38\u7528\u5230fetch\u548cmerge\u3002\u4f46\u662f\u6709\u65f6\u5019\u8fd9\u6837\u4f1a\u91cd\u7f6e\u60a8\u7684\u73af\u5883\u914d\u7f6e\u6587\u4ef6\uff0c\u5982\u6b64\u7684\u8bdd\uff0c\u60a8\u5c31\u5f97\u5728\u6bcf\u6b21merge\u540e\u4fee\u6539\u5b83\u3002\u4f7f\u7528\u8fd9\u4e00\u547d\u4ee4\uff0c\u60a8\u5c31\u80fd\u8981\u6c42git\u5ffd\u89c6\u6307\u5b9a\u6587\u4ef6\u7684\u53d8\u52a8\u3002\u8fd9\u6837\uff0c\u4e0b\u56de\u4f60\u518dmerge\u7684\u8bdd\uff0c\u8fd9\u4e2a\u6587\u4ef6\u5c31\u4e0d\u4f1a\u88ab\u4fee\u6539\u4e86\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"git update-index --assume-unchanged PATH_TO_FILE_HERE\n")),(0,l.kt)("h2",{id:"\u68c0\u67e5\u63d0\u4ea4\u7684\u53d8\u52a8\u662f\u5426\u662frelease\u7684\u4e00\u90e8\u5206"},"\u68c0\u67e5\u63d0\u4ea4\u7684\u53d8\u52a8\u662f\u5426\u662frelease\u7684\u4e00\u90e8\u5206"),(0,l.kt)("p",null,"name-rev\u547d\u4ee4\u80fd\u544a\u8bc9\u60a8\u4e00\u4e2acommit\u76f8\u5bf9\u4e8e\u6700\u8fd1\u4e00\u6b21release\u7684\u4f4d\u7f6e\u3002\u4f7f\u7528\u8fd9\u6761\u547d\u4ee4\uff0c\u60a8\u5c31\u53ef\u4ee5\u68c0\u67e5\u60a8\u6240\u505a\u51fa\u7684\u6539\u52a8\u662f\u5426\u662frelease\u7684\u4e00\u90e8\u5206\u4e86\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"git name-rev --name-only COMMIT_HASH_HERE\n")),(0,l.kt)("h2",{id:"\u4f7f\u7528rebase\u63a8\u9001\u800c\u975emerge"},"\u4f7f\u7528rebase\u63a8\u9001\u800c\u975emerge"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u6b63\u5728\u56e2\u961f\u4e2d\u5de5\u4f5c\u5e76\u4e14\u6574\u4e2a\u56e2\u961f\u90fd\u5728\u540c\u4e00\u6761branch\u4e0a\u9762\u5de5\u4f5c\uff0c\u90a3\u4e48\u60a8\u5c31\u5f97\u7ecf\u5e38\u5730\u8fdb\u884cfetch/merge\u6216\u8005pull\u3002Git\u4e2d\uff0c\u5206\u652f\u7684\u5408\u5e76\u4ee5\u6240\u63d0\u4ea4\u7684merge\u6765\u8bb0\u5f55\uff0c\u4ee5\u6b64\u8868\u660e\u4e00\u6761feature\u5206\u652f\u4f55\u65f6\u4e0e\u4e3b\u5206\u652f\u5408\u5e76\u3002\u4f46\u662f\u5728\u591a\u56e2\u961f\u6210\u5458\u5171\u540c\u5de5\u4f5c\u4e8e\u4e00\u6761branch\u7684\u60c5\u5f62\u4e2d\uff0c\u5e38\u89c4\u7684merge\u4f1a\u5bfc\u81f4log\u4e2d\u51fa\u73b0\u591a\u6761\u6d88\u606f\uff0c\u4ece\u800c\u4ea7\u751f\u6df7\u6dc6\u3002\u56e0\u6b64\uff0c\u60a8\u53ef\u4ee5\u5728pull\u7684\u65f6\u5019\u4f7f\u7528rebase\uff0c\u4ee5\u6b64\u6765\u51cf\u5c11\u65e0\u7528\u7684merge\u6d88\u606f\uff0c\u4ece\u800c\u4fdd\u6301\u5386\u53f2\u8bb0\u5f55\u7684\u6e05\u6670\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"git pull --rebase\n")),(0,l.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u5c06\u67d0\u6761branch\u914d\u7f6e\u4e3a\u603b\u662f\u4f7f\u7528rebase\u63a8\u9001\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"git config branch.BRANCH_NAME_HERE.rebase true\n")),(0,l.kt)("p",null,"\u8f6c\u81ea ",(0,l.kt)("a",{parentName:"p",href:"http://www.oschina.net/translate/10-useful-advanced-git-commands"},"10 \u4e2a\u5f88\u6709\u7528\u7684\u9ad8\u7ea7 Git \u547d\u4ee4")))}m.isMDXComponent=!0}}]);