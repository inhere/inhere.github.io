"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9970],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),b=a,m=u["".concat(i,".").concat(b)]||u[b]||h[b]||l;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},6265:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(1966),a=(n(9496),n(9613));const l={title:"\u7b80\u5355\u5feb\u901f\u7684\u914d\u7f6e\u81ea\u5df1\u7684bash\u73af\u5883",authors:"inhere",tags:["shell","bash","linux"],date:"2021-08-08T11:26"},o=void 0,s={permalink:"/blog/2021/08/08/quick-config-bashrc",editUrl:"https://github.com/inhere/inhere.github.io/tree/main/blog/2021/08-08-quick-config-bashrc.md",source:"@site/blog/2021/08-08-quick-config-bashrc.md",title:"\u7b80\u5355\u5feb\u901f\u7684\u914d\u7f6e\u81ea\u5df1\u7684bash\u73af\u5883",description:"\u7b80\u5355\u5feb\u901f\u7684\u914d\u7f6e\u81ea\u5df1\u7684bash\u73af\u5883",date:"2021-08-08T11:26:00.000Z",formattedDate:"2021\u5e748\u67088\u65e5",tags:[{label:"shell",permalink:"/blog/tags/shell"},{label:"bash",permalink:"/blog/tags/bash"},{label:"linux",permalink:"/blog/tags/linux"}],readingTime:1.05,hasTruncateMarker:!0,authors:[{name:"inhere",title:"docs maintainer",url:"https://github.com/inhere",imageURL:"https://github.com/inhere.png",key:"inhere"}],frontMatter:{title:"\u7b80\u5355\u5feb\u901f\u7684\u914d\u7f6e\u81ea\u5df1\u7684bash\u73af\u5883",authors:"inhere",tags:["shell","bash","linux"],date:"2021-08-08T11:26"},prevItem:{title:"\u5b66\u4e60\u7f16\u5199bash\u547d\u4ee4\u81ea\u52a8\u8865\u5168",permalink:"/blog/2021/08/09/learn-bash-completion"},nextItem:{title:"MDX Blog Post",permalink:"/blog/mdx-blog-post"}},i={authorsImageUrls:[void 0]},c=[{value:"\u81ea\u52a8\u52a0\u8f7d\u6307\u5b9a\u76ee\u5f55\u7684\u811a\u672c",id:"\u81ea\u52a8\u52a0\u8f7d\u6307\u5b9a\u76ee\u5f55\u7684\u811a\u672c",level:2},{value:"\u914d\u7f6e\u5e38\u7528\u522b\u540d\u548c\u51fd\u6570",id:"\u914d\u7f6e\u5e38\u7528\u522b\u540d\u548c\u51fd\u6570",level:2}],p={toc:c},u="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u7b80\u5355\u5feb\u901f\u7684\u914d\u7f6e\u81ea\u5df1\u7684bash\u73af\u5883"),(0,a.kt)("h2",{id:"\u81ea\u52a8\u52a0\u8f7d\u6307\u5b9a\u76ee\u5f55\u7684\u811a\u672c"},"\u81ea\u52a8\u52a0\u8f7d\u6307\u5b9a\u76ee\u5f55\u7684\u811a\u672c"),(0,a.kt)("p",null,"\u5feb\u901f\u7684\u914d\u7f6ebashrc\u652f\u6301\u81ea\u52a8\u52a0\u8f7d\u6307\u5b9a\u76ee\u5f55\u7684bash\u811a\u672c"),(0,a.kt)("p",null,"\u60f3\u8981\u5c06bash\u811a\u672c\u653e\u7f6e\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.bash-scripts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir ~/.bash-scripts\n")),(0,a.kt)("p",null,"\u4f7f\u7528vim\u6253\u5f00 ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.bashrc"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"vim ~/.bashrc\n")),(0,a.kt)("p",null,"\u6dfb\u52a0\u5982\u4e0b\u5185\u5bb9:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"#\n#\n# use for custom config an .bashrc, support auto load *.bash files\n#\n\n## auto load bash files\nfor file in .bash-scripts/*.bash\ndo\n    # shellcheck disable=SC1090\n    test -f $file && . $file\ndone\n\n## load custom aliases file.\nlocal customAliasFile=~/.my-aliases.sh\n# shellcheck disable=SC1090\ntest -f $customAliasFile && . $customAliasFile\n\n")),(0,a.kt)("h2",{id:"\u914d\u7f6e\u5e38\u7528\u522b\u540d\u548c\u51fd\u6570"},"\u914d\u7f6e\u5e38\u7528\u522b\u540d\u548c\u51fd\u6570"),(0,a.kt)("p",null,"\u6211\u5c06\u81ea\u5df1\u7684\u5e38\u7528\u522b\u540d\u548c\u51fd\u6570 \u653e\u7f6e\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.my-aliases.sh")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'##\n## aliases\n##\nalias ls="ls --color=auto"\nalias ll="ls -al"\nalias gst="git status"\n\n##\n## reload bash\n##\nfunction reload_bash(){\n    source ~/.bashrc\n}\n\n##\n## proxy setting\n##\nfunction proxy_off(){\n    unset http_proxy\n    unset https_proxy\n    echo -e "proxy closed"\n}\n\nfunction proxy_on() {\n    export no_proxy="localhost,127.0.0.1,localaddress,.localdomain.com"\n    export http_proxy="http://127.0.0.1:10801"\n    export https_proxy=$http_proxy\n    echo -e "proxy opened"\n}\n\n')))}h.isMDXComponent=!0}}]);