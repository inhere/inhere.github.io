"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4536],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),d=l,h=c["".concat(p,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6684:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(1966),l=(n(9496),n(9613));const a={title:"\u5b89\u88c5centos 7 \u540e\u7684\u4e00\u4e9b\u8bbe\u7f6e\u8bb0\u5f55",tags:["linux","centos"],date:"2016-04-09T16:51",slug:"centos7-init-setting-after-install",authors:"inhere"},o=void 0,i={permalink:"/blog/centos7-init-setting-after-install",editUrl:"https://github.com/inhere/inhere.github.io/tree/main/blog/2016/04-09-centos7-init-setting-after-install.md",source:"@site/blog/2016/04-09-centos7-init-setting-after-install.md",title:"\u5b89\u88c5centos 7 \u540e\u7684\u4e00\u4e9b\u8bbe\u7f6e\u8bb0\u5f55",description:"\u5b89\u88c5centos 7 \u540e\u7684\u4e00\u4e9b\u5e38\u7528\u8bbe\u7f6e\u8bb0\u5f55",date:"2016-04-09T16:51:00.000Z",formattedDate:"2016\u5e744\u67089\u65e5",tags:[{label:"linux",permalink:"/blog/tags/linux"},{label:"centos",permalink:"/blog/tags/centos"}],readingTime:3.87,hasTruncateMarker:!0,authors:[{name:"inhere",title:"docs maintainer",url:"https://github.com/inhere",imageURL:"https://github.com/inhere.png",key:"inhere"}],frontMatter:{title:"\u5b89\u88c5centos 7 \u540e\u7684\u4e00\u4e9b\u8bbe\u7f6e\u8bb0\u5f55",tags:["linux","centos"],date:"2016-04-09T16:51",slug:"centos7-init-setting-after-install",authors:"inhere"},prevItem:{title:"git \u4f7f\u7528\u8bb0\u5f55",permalink:"/blog/git-usage-records"},nextItem:{title:"git \u627e\u56de\u4e22\u5931 commit",permalink:"/blog/revert-lost-commit-by-git-reflog"}},p={authorsImageUrls:[void 0]},s=[{value:"\u6dfb\u52a0\u7528\u6237\u5230 sudoers",id:"\u6dfb\u52a0\u7528\u6237\u5230-sudoers",level:3},{value:"\u65e0\u6cd5\u4f7f\u7528\u4e2d\u6587\u8f93\u5165",id:"\u65e0\u6cd5\u4f7f\u7528\u4e2d\u6587\u8f93\u5165",level:3},{value:"windows,linux \u53cc\u7cfb\u7edf",id:"windowslinux-\u53cc\u7cfb\u7edf",level:3},{value:"\u6dfb\u52a0 \u963f\u91cc\u4e91\u7684epel\u6e90",id:"\u6dfb\u52a0-\u963f\u91cc\u4e91\u7684epel\u6e90",level:3},{value:"\u4fee\u6539home\u4e0b\u7684\u4e2d\u6587\u76ee\u5f55\u4e3a\u82f1\u6587\u76ee\u5f55",id:"\u4fee\u6539home\u4e0b\u7684\u4e2d\u6587\u76ee\u5f55\u4e3a\u82f1\u6587\u76ee\u5f55",level:3},{value:"\u4e00\u4e9b\u5e38\u7528\u5de5\u5177",id:"\u4e00\u4e9b\u5e38\u7528\u5de5\u5177",level:2},{value:"tmux",id:"tmux",level:3},{value:"git",id:"git",level:3},{value:"zsh \u548c oh-my-zsh",id:"zsh-\u548c-oh-my-zsh",level:3},{value:"rar \u538b\u7f29\u6587\u4ef6\u652f\u6301",id:"rar-\u538b\u7f29\u6587\u4ef6\u652f\u6301",level:3}],u={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5b89\u88c5centos 7 \u540e\u7684\u4e00\u4e9b\u5e38\u7528\u8bbe\u7f6e\u8bb0\u5f55"),(0,l.kt)("h3",{id:"\u6dfb\u52a0\u7528\u6237\u5230-sudoers"},"\u6dfb\u52a0\u7528\u6237\u5230 sudoers"),(0,l.kt)("p",null,"\u521a\u5b89\u88c5\u7cfb\u7edf\u540e \u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo [command] ...")," \u4f1a\u62a5\u9519\u8bef\u4fe1\u606f  ",(0,l.kt)("inlineCode",{parentName:"p"},"\u8be5\u7528\u6237\u4e0d\u5b58\u5728\u7fa4\u7ec4sudoers\u4e2d")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ su  // \u5207\u6362\u5230 root\n$ vim /etc/sudoers\n")),(0,l.kt)("p",null,"\u627e\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"}," root  ALL=(ALL)   ALL"),", \u540e\u9762\u6362\u884c\u5e76\u5c06\u5f53\u524d\u7528\u6237\u6dfb\u52a0\u8fdb\u53bb  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"root  ALL=(ALL)   ALL\n xxx   ALL=(ALL)   ALL\n")),(0,l.kt)("p",null,"\u4fdd\u5b58\u5e76\u9000\u51fa"),(0,l.kt)("h3",{id:"\u65e0\u6cd5\u4f7f\u7528\u4e2d\u6587\u8f93\u5165"},"\u65e0\u6cd5\u4f7f\u7528\u4e2d\u6587\u8f93\u5165"),(0,l.kt)("p",null,"\u5b9e\u9645\u4e0a \u5b89\u88c5\u7684\u7cfb\u7edf\u5df2\u7ecf\u6709\u62fc\u97f3\u8f93\u5165\u6cd5\u4e86\uff0c\u8bf7\u770b ",(0,l.kt)("a",{parentName:"p",href:"http://blog.csdn.net/alex_my/article/details/38223449"},"http://blog.csdn.net/alex_my/article/details/38223449")),(0,l.kt)("h3",{id:"windowslinux-\u53cc\u7cfb\u7edf"},"windows,linux \u53cc\u7cfb\u7edf"),(0,l.kt)("p",null,"\u6700\u597d\u662f\u5148\u5b89\u88c5\u4e86windows\u540e\u518d\u5b89\u88c5linux\u7cfb\u7edf"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6302\u8f7d ntfs \u5206\u533a\n\u8bf7\u770b ",(0,l.kt)("a",{parentName:"p",href:"http://yzone.net/blog/31"},"\u5b89\u88c5\u53cc\u7cfb\u7edf\u540e\uff0ccentos 7 \u5982\u4f55\u6302\u8f7d windows \u5206\u533a"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6062\u590dwindows\u7684\u5f15\u5bfc\u9879\n\u6253\u5f00\u7ec8\u7aef, \u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\u5c31\u4f1a\u81ea\u52a8\u67e5\u627e\u786c\u76d8\u4e0a\u5df2\u6709\u7684\u7cfb\u7edf\uff0c\u5e76\u6dfb\u52a0\u76f8\u5e94\u7684\u5f15\u5bfc"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ sudo update-grub // ubuntu \u4e00\u7c7b\u53ef\u7528\n$ sudo grub2-mkconfig -o /boot/grub2/grub.cfg // centos \u4e00\u7c7b\u53ef\u7528\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5220\u9664linux\u7cfb\u7edf\nwindows\u4e0a\u4e0b\u5728\u4e00\u4e2a\u5206\u533a\u52a9\u624b\u4e4b\u7c7b\u7684\u5de5\u5177\uff0c\u6062\u590d\u7cfb\u7edf\u786c\u76d8\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"mbr"),", \u5728\u683c\u5f0f\u5316 linux\u6240\u5728\u5206\u533a\u5373\u53ef")),(0,l.kt)("h3",{id:"\u6dfb\u52a0-\u963f\u91cc\u4e91\u7684epel\u6e90"},"\u6dfb\u52a0 \u963f\u91cc\u4e91\u7684epel\u6e90"),(0,l.kt)("p",null,"1.\u5907\u4efd(\u5982\u6709\u914d\u7f6e\u5176\u4ed6epel\u6e90)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mv /etc/yum.repos.d/epel.repo /etc/yum.repos.d/epel.repo.backup\nmv /etc/yum.repos.d/epel-testing.repo /etc/yum.repos.d/epel-testing.repo.backup\n")),(0,l.kt)("p",null,"2.\u4e0b\u8f7d\u65b0repo \u5230",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/yum.repos.d/")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"// epel(RHEL 7) \n$ sudo wget -O /etc/yum.repos.d/epel.repo http://mirrors.aliyun.com/repo/epel-7.repo\n$ sudo yum update // update\n")),(0,l.kt)("h3",{id:"\u4fee\u6539home\u4e0b\u7684\u4e2d\u6587\u76ee\u5f55\u4e3a\u82f1\u6587\u76ee\u5f55"},"\u4fee\u6539home\u4e0b\u7684\u4e2d\u6587\u76ee\u5f55\u4e3a\u82f1\u6587\u76ee\u5f55"),(0,l.kt)("p",null,"\u6253\u5f00\u7ec8\u7aef\uff0c\u5728\u7ec8\u7aef\u4e0b\u8f93\u5165\u547d\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ export LANG=en_US\n$ xdg-user-dirs-gtk-update\n")),(0,l.kt)("p",null,"\u8fd9\u4e2a\u65f6\u5019\u4f1a\u5f39\u51fa\u4e00\u4e2a\u914d\u7f6e\u754c\u9762\uff0c\u63d0\u793a\u662f\u5426\u5c06\u4e2d\u6587\u76ee\u5f55\u5207\u6362\u4e3a\u82f1\u6587\u76ee\u5f55\u3002\u9009\u4e2d\u4e0d\u518d\u63d0\u793a\uff0c\u786e\u5b9a\u3002\u7cfb\u7edf\u4f1a\u5220\u9664\u6ca1\u6709\u5185\u5bb9\u7684\u4e2d\u6587\u76ee\u5f55\uff0c\u800c\u6709\u5185\u5bb9\u7684\u76ee\u5f55\u4f1a\u4fdd\u6301\u3002\n\u5e76\u521b\u5efa8\u4e2a\u76f8\u5e94\u7684\u82f1\u6587\u76ee\u5f55\u5982\u4e0b\uff1a\u201cDesktop\u201d\u3001\u201cDownload\u201d\u3001\u201cTemplates\u201d\u3001\u201cPublic\u201d\u3001\u201cDocuments\u201d\u3001\u201cMusic\u201d\u3001\u201cPictures\u201d\u3001\u201cVideos\u201d\u3002\n\u6b64\u65f6\uff0c\u60a8\u5728\u201c\u4f4d\u7f6e\u201d\u91cc\u770b\u5230\u7684\u5e38\u7528\u4e2d\u6587\u76ee\u5f55\u5df2\u7ecf\u53d8\u6210\u82f1\u6587\u76ee\u5f55\u3002\u53ea\u9700\u8981\u5c06\u539f\u4e2d\u6587\u76ee\u5f55\u7684\u5185\u5bb9\u62f7\u8d1d\u5230\u76f8\u5e94\u82f1\u6587\u76ee\u5f55\uff0c\u5e76\u5220\u9664\u4e2d\u6587\u76ee\u5f55\u5373\u53ef\u3002\n\u63a5\u4e0b\u6765\u518d\u6267\u884c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ export LANG=zh_CN.UTF-8\n")),(0,l.kt)("p",null,"\u4ee5\u663e\u793a\u4e2d\u6587\u3002"),(0,l.kt)("h2",{id:"\u4e00\u4e9b\u5e38\u7528\u5de5\u5177"},"\u4e00\u4e9b\u5e38\u7528\u5de5\u5177"),(0,l.kt)("h3",{id:"tmux"},"tmux"),(0,l.kt)("p",null,"\u5b89\u88c5 tmux  ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo yum install tmux")),(0,l.kt)("h3",{id:"git"},"git"),(0,l.kt)("p",null,"\u4ed3\u5e93\u4e2d\u7684git\u7248\u672c\u6709\u4e9b\u8001\u4e86\uff0c\u63a8\u8350\u624b\u52a8\u5b89\u88c5\u6700\u65b0\u7248\u7684\n\u4e0b\u8f7d\u4f9d\u8d56\u5305"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ sudo yum install zlib-devel perl-ExtUtils-MakeMaker openssl-devel libcurl-devel expat-devel asciidoc xmlto\n")),(0,l.kt)("p",null,"\u6e90\u7801\u4e0b\u8f7d\u5730\u5740 ",(0,l.kt)("inlineCode",{parentName:"p"},"https://github.com/git/git/releases")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ wget -c https://github.com/git/git/archive/v2.8.1.tar.gz\n$ cd git-2.8.1/\n$ make prefix=/usr/local all doc  // all \u5bf9\u6240\u6709\u7528\u6237\u53ef\u7528\uff0cdoc \u662f\u751f\u6210\u6587\u6863 \n$ make prefix=/usr/local/git install\n")),(0,l.kt)("p",null,"\u52a0\u5165\u73af\u5883\u53d8\u91cf",(0,l.kt)("inlineCode",{parentName:"p"},"vim  ~/.bashrc")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"export PATH=/usr/local/git/bin:$PATH\n")),(0,l.kt)("h3",{id:"zsh-\u548c-oh-my-zsh"},"zsh \u548c oh-my-zsh"),(0,l.kt)("p",null,"\u67e5\u770b\u5df2\u6709\u7684shell ",(0,l.kt)("inlineCode",{parentName:"p"},"cat /etc/shells "),"\n\u82e5\u6ca1\u6709\uff0c\u5148\u5b89\u88c5 zsh "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ sudo yum install zsh\n$ chsh -s /bin/zsh \n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u82e5\u7528chsh\u547d\u4ee4\u4fee\u6539\u65e0\u6548\uff0c\u5219\u8fdb\u5165",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/passwd"),"\u4e2d\u4fee\u6539\u5f53\u524d\u7528\u6237\u7684shell\u73af\u5883\u3002")),(0,l.kt)("p",null,"\u5b89\u88c5oh-my-zsh -- ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/robbyrussell/oh-my-zsh"},"oh-my-zsh \u4e3b\u9875")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'sh -c "$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"\n')),(0,l.kt)("h3",{id:"rar-\u538b\u7f29\u6587\u4ef6\u652f\u6301"},"rar \u538b\u7f29\u6587\u4ef6\u652f\u6301"),(0,l.kt)("p",null,"\u5728liunx\u4e0b\u539f\u672c\u662f\u4e0d\u652f\u6301rar\u6587\u4ef6\u7684\uff0c\u9700\u8981\u5b89\u88c5liunx\u4e0b\u7684winrar\u7248\u672c\uff0c\u64cd\u4f5c\u5982\u4e0b"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4e0b\u8f7d\u9875\u9762 ",(0,l.kt)("a",{parentName:"p",href:"http://www.rarsoft.com/download.htm"},"http://www.rarsoft.com/download.htm"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ wget -O ~/Downloads/rarlinux-x64-5.3.tar.gz http://www.rarsoft.com/rar/rarlinux-x64-5.3.0.tar.gz\n$ cd ~/Downloads/\n$ tar -zxvf rarlinux-x64-5.3.tar.gz \n$ cd rar  \n$ sudo make                \n[sudo] password for inhere: \nmkdir -p /usr/local/bin\nmkdir -p /usr/local/lib\ncp rar unrar /usr/local/bin\ncp rarfiles.lst /etc\ncp default.sfx /usr/local/lib\n")),(0,l.kt)("p",null,"\u4e24\u4e2a\u5e38\u7528\u547d\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rar x yhcsh.rar //\u89e3\u538b yhcsh.rar \u5230\u5f53\u524d\u76ee\u5f55\nrar yhcsh.rar ./yhcsh/  //\u5c06 yhcsh \u76ee\u5f55\u6253\u5305\u4e3a yhcsh.rar\n")))}m.isMDXComponent=!0}}]);