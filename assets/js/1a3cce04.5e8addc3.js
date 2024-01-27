"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4296],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var p=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);n&&(p=p.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,p)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,p,i=function(e,n){if(null==e)return{};var t,p,i={},o=Object.keys(e);for(p=0;p<o.length;p++)t=o[p],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(p=0;p<o.length;p++)t=o[p],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=p.createContext({}),s=function(e){var n=p.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=s(e.components);return p.createElement(l.Provider,{value:n},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return p.createElement(p.Fragment,{},n)}},d=p.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=s(t),d=i,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||o;return t?p.createElement(m,r(r({ref:n},c),{},{components:t})):p.createElement(m,r({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=d;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[u]="string"==typeof e?e:i,r[1]=a;for(var s=2;s<o;s++)r[s]=t[s];return p.createElement.apply(null,r)}return p.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9971:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var p=t(1966),i=(t(9496),t(9613));const o={title:"\u5728Windows\u4e0b\u4f7f\u7528\u591a\u4e2a\u7248\u672c\u7684PHP\u8bb0\u5f55",tags:["windows","php","scoop"],date:"2023-10-16T15:12",slug:"use-multi-version-php-on-windows",authors:"inhere"},r=void 0,a={permalink:"/blog/use-multi-version-php-on-windows",editUrl:"https://github.com/inhere/inhere.github.io/tree/main/blog/2023/10-18-use-multi-version-php-on-windows.md",source:"@site/blog/2023/10-18-use-multi-version-php-on-windows.md",title:"\u5728Windows\u4e0b\u4f7f\u7528\u591a\u4e2a\u7248\u672c\u7684PHP\u8bb0\u5f55",description:"\u5728Windows\u4e0b\u4f7f\u7528\u591a\u4e2a\u7248\u672c\u7684PHP\u5982\u4f55\u914d\u7f6e\u8bb0\u5f55\uff0c\u6211\u4f1a\u540c\u65f6\u4f7f\u7528 PHP7 \u548c PHP8\u7248\u672c\u5728 Windows \u4e0b\u3002",date:"2023-10-16T15:12:00.000Z",formattedDate:"2023\u5e7410\u670816\u65e5",tags:[{label:"windows",permalink:"/blog/tags/windows"},{label:"php",permalink:"/blog/tags/php"},{label:"scoop",permalink:"/blog/tags/scoop"}],readingTime:4.44,hasTruncateMarker:!0,authors:[{name:"inhere",title:"docs maintainer",url:"https://github.com/inhere",imageURL:"https://github.com/inhere.png",key:"inhere"}],frontMatter:{title:"\u5728Windows\u4e0b\u4f7f\u7528\u591a\u4e2a\u7248\u672c\u7684PHP\u8bb0\u5f55",tags:["windows","php","scoop"],date:"2023-10-16T15:12",slug:"use-multi-version-php-on-windows",authors:"inhere"},prevItem:{title:"gookit/goutil - Go\u5e38\u7528\u529f\u80fd\u7684\u6269\u5c55\u5de5\u5177\u5e93\uff0c\u53d1\u5e03 v0.6.14 \u7248\u672c",permalink:"/blog/gookit-goutil-release-v0.6.14"},nextItem:{title:"gookit/goutil - Go\u5e38\u7528\u529f\u80fd\u7684\u6269\u5c55\u5de5\u5177\u5e93\uff0c\u53d1\u5e03 v0.6.12 \u7248\u672c",permalink:"/blog/gookit-goutil-release-v0.6.12"}},l={authorsImageUrls:[void 0]},s=[{value:"\u5b89\u88c5PHP",id:"\u5b89\u88c5php",level:2},{value:"\u5b89\u88c5xdebug\u6269\u5c55",id:"\u5b89\u88c5xdebug\u6269\u5c55",level:3},{value:"\u914d\u7f6ePHP",id:"\u914d\u7f6ephp",level:2},{value:"\u6269\u5c55\u914d\u7f6e\u76ee\u5f55",id:"\u6269\u5c55\u914d\u7f6e\u76ee\u5f55",level:3},{value:"\u5feb\u901f\u4f7f\u7528PHP7",id:"\u5feb\u901f\u4f7f\u7528php7",level:2},{value:"\u65b9\u6cd5\u4e00",id:"\u65b9\u6cd5\u4e00",level:3},{value:"\u65b9\u6cd5\u4e8c",id:"\u65b9\u6cd5\u4e8c",level:3},{value:"\u65b9\u6cd5\u4e09",id:"\u65b9\u6cd5\u4e09",level:3},{value:"PHPStorm \u91cc\u65e0\u6cd5\u52a0\u8f7dext",id:"phpstorm-\u91cc\u65e0\u6cd5\u52a0\u8f7dext",level:2}],c={toc:s},u="wrapper";function h(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,p.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5728Windows\u4e0b\u4f7f\u7528\u591a\u4e2a\u7248\u672c\u7684PHP\u5982\u4f55\u914d\u7f6e\u8bb0\u5f55\uff0c\u6211\u4f1a\u540c\u65f6\u4f7f\u7528 PHP7 \u548c PHP8\u7248\u672c\u5728 Windows \u4e0b\u3002"),(0,i.kt)("h2",{id:"\u5b89\u88c5php"},"\u5b89\u88c5PHP"),(0,i.kt)("p",null,"\u901a\u8fc7 Windows \u5305\u7ba1\u7406\u5de5\u5177 scoop \u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u5b89\u88c5 PHP, git, go \u7b49\u5f00\u53d1\u5de5\u5177\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5b89\u88c5PHP 7.4 \u7248\u672c\nscoop install php-nts@7.4\n\n# \u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684 PHP 8.x\nscoop install php-nts\n")),(0,i.kt)("p",null,"scoop \u5b89\u88c5\u7684\u5de5\u5177\u90fd\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"USER_HOME/scoop/apps/")," \u4e0b\uff0c\u5b89\u88c5\u540e scoop \u8bbe\u7f6e\u5728\u73af\u5883\u53d8\u91cf\u4e0b\u7684PHP\u7248\u672c\u662f\u6700\u540e\u5b89\u88c5 PHP8."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ php -v\nPHP 8.2.11 (cli) (built: Sep 26 2023 15:25:14) (NTS Visual C++ 2019 x64)\nCopyright (c) The PHP Group\nZend Engine v4.2.11, Copyright (c) Zend Technologies\n")),(0,i.kt)("h3",{id:"\u5b89\u88c5xdebug\u6269\u5c55"},"\u5b89\u88c5xdebug\u6269\u5c55"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# for php7.4\n$ scoop install php7.4-xdebug\n# for php8\n$ scoop install php-xdebug\n")),(0,i.kt)("h2",{id:"\u914d\u7f6ephp"},"\u914d\u7f6ePHP"),(0,i.kt)("p",null,"\u5230PHP\u5b89\u88c5\u76ee\u5f55\u4e0b\uff0c\u62f7\u8d1d ",(0,i.kt)("inlineCode",{parentName:"p"},"php.ini-ENV")," \u4e3a php.ini \u6587\u4ef6\u3002\u7136\u540e\u53ef\u4ee5\u7f16\u8f91\u5b83\uff0c\u6253\u5f00\u4e00\u4e9b\u5e38\u7528\u6269\u5c55\u3002"),(0,i.kt)("p",null,"\u67e5\u770b\u52a0\u8f7d\u7684\u914d\u7f6e\u6587\u4ef6\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ php --ini\nConfiguration File (php.ini) Path:\nLoaded Configuration File:         C:\\Users\\inhere\\scoop\\apps\\php-nts\\current\\php.ini\nScan for additional .ini files in: (none)\nAdditional .ini files parsed:      (none)\n")),(0,i.kt)("h3",{id:"\u6269\u5c55\u914d\u7f6e\u76ee\u5f55"},"\u6269\u5c55\u914d\u7f6e\u76ee\u5f55"),(0,i.kt)("p",null,"\u53ef\u4ee5\u6ce8\u610f\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"Scan for additional .ini files")," \u662f\u7a7a\u7684\uff0c\u5219\u662f\u9ed8\u8ba4\u6ca1\u6709\u8bbe\u7f6e\u6269\u5c55\u914d\u7f6e\u6587\u4ef6\u626b\u63cf\u76ee\u5f55\u3002\u53ef\u4ee5\u901a\u8fc7\u73af\u5883\u53d8\u91cf ",(0,i.kt)("inlineCode",{parentName:"p"},"PHP_INI_SCAN_DIR=path/to/conf.d")," \u8bbe\u7f6e\u9644\u52a0\u914d\u7f6e\u626b\u63cf\u76ee\u5f55"),(0,i.kt)("p",null,"\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u7cfb\u7edf>\u9ad8\u7ea7\u7cfb\u7edf\u8bbe\u7f6e")," \u65b0\u589e\u73af\u5883\u53d8\u91cf ",(0,i.kt)("inlineCode",{parentName:"p"},"PHP_INI_SCAN_DIR")," \u503c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"%USERPROFILE%/scoop/apps/php-nts/current/conf.d")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u53c2\u8003\u6587\u6863 ",(0,i.kt)("a",{parentName:"p",href:"https://www.php.net/manual/zh/configuration.file.php"},"https://www.php.net/manual/zh/configuration.file.php"))),(0,i.kt)("h2",{id:"\u5feb\u901f\u4f7f\u7528php7"},"\u5feb\u901f\u4f7f\u7528PHP7"),(0,i.kt)("p",null,"\u56e0\u4e3a\u6709\u591a\u4e2a\u7248\u672c\u7684PHP\uff0cPHP7\u7684\u6269\u5c55\u548c\u5176\u4ed6\u914d\u7f6e\u6587\u4ef6\u4e0ePHP8\u7684\u4e0d\u80fd\u5171\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"PHP_INI_SCAN_DIR")," \u8bbe\u7f6e\uff0c\u4f1a\u6709\u7248\u672c\u51b2\u7a81\u3002"),(0,i.kt)("h3",{id:"\u65b9\u6cd5\u4e00"},"\u65b9\u6cd5\u4e00"),(0,i.kt)("p",null,"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"scoop shim")," \u521b\u5efa\u4e00\u4e2a\u65b0\u7684bin\u540d\u79f0 ",(0,i.kt)("inlineCode",{parentName:"p"},"php7")," \u6307\u5411\u5b89\u88c5\u7684php7\u7684\u771f\u5b9e\u8def\u5f84\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bat"},'$ scoop shim add php7 "C:\\Users\\inhere\\scoop\\apps\\php7.4-nts\\current\\php.exe"\n# \u73b0\u5728\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528php7\u4e86\n$ php7 --ini\nConfiguration File (php.ini) Path:\nLoaded Configuration File:         C:\\Users\\inhere\\scoop\\apps\\php7.4-nts\\current\\php.ini\nScan for additional .ini files in: C:\\Users\\inhere/scoop/apps/php-nts/current/conf.d\nAdditional .ini files parsed:      (none)\n')),(0,i.kt)("p",null,"\u8fd9\u6837\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"cmd, git-bash, pwsh")," \u7ec8\u7aef\u73af\u5883\u4e0b ",(0,i.kt)("inlineCode",{parentName:"p"},"php7")," \u547d\u4ee4\u90fd\u662f\u53ef\u4ee5\u7528\u7684\u3002\n\u4e0d\u8fc7\uff0c\u6709\u4e00\u4e2a ",(0,i.kt)("strong",{parentName:"p"},"\u95ee\u9898\u662f")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Scan for additional .ini files")," \u4f7f\u7528\u7684\u5168\u5c40\u7684PHP ",(0,i.kt)("inlineCode",{parentName:"p"},"PHP_INI_SCAN_DIR")," \u8bbe\u7f6e\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u51b2\u7a81\u3002"),(0,i.kt)("p",null,"\u5220\u9664 shim \u8bbe\u7f6e\uff1a ",(0,i.kt)("inlineCode",{parentName:"p"},"scoop shim rm php7")),(0,i.kt)("h3",{id:"\u65b9\u6cd5\u4e8c"},"\u65b9\u6cd5\u4e8c"),(0,i.kt)("p",null,"\u6211\u4e3b\u8981\u4f7f\u7528\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"git-bash")," \u4f5c\u4e3a\u547d\u4ee4\u884c\u73af\u5883\uff0c\u5411\u4e0b\u9762\u8fd9\u6837\u6307\u5b9a ",(0,i.kt)("inlineCode",{parentName:"p"},"php7")," \u8def\u5f84\u8c03\u7528\u4e5f\u662f\u53ef\u4ee5\u7684\u3002\u800c\u4e14\u81ea\u5b9a\u4e49\u4e86\u9644\u52a0\u914d\u7f6e\u626b\u82d7\u8def\u5f84\uff0c\u4e0d\u4f1a\u4e0ePHP8\u51b2\u7a81\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ PHP_INI_SCAN_DIR=$HOME/scoop/apps/php7.4-nts/current/conf.d $HOME/scoop/apps/php7.4-nts/currentphp.exe --ini\nConfiguration File (php.ini) Path:\nLoaded Configuration File:         C:\\Users\\inhere\\scoop\\apps\\php7.4-nts\\current\\php.ini\nScan for additional .ini files in: C:/Users/inhere/scoop/apps/php7.4-nts/current/conf.d\nAdditional .ini files parsed:      C:/Users/inhere/scoop/apps/php7.4-nts/current/conf.d\\extensions.ini,\nC:/Users/inhere/scoop/apps/php7.4-nts/current/conf.d\\xdebug.ini\n\n")),(0,i.kt)("p",null,"\u914d\u7f6e\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"php7")," \u522b\u540d(\u5199\u5165 ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.bashrc"),")\uff0c\u65b9\u4fbf\u547d\u4ee4\u884c\u4f7f\u7528\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"alias php7='PHP_INI_SCAN_DIR=$HOME/scoop/apps/php7.4-nts/current/conf.d $HOME/scoop/apps/php7.4-nts/current/php'\n")),(0,i.kt)("p",null,"\u5feb\u901f\u4f7f\u7528:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ php7 -v\nPHP 7.4.33 (cli) (built: Nov  2 2022 15:06:48) ( NTS Visual C++ 2017 x64 )\nCopyright (c) The PHP Group\nZend Engine v3.4.0, Copyright (c) Zend Technologies\n    with Xdebug v3.1.6, Copyright (c) 2002-2022, by Derick Rethans\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u95ee\u9898\uff1a\u8fd9\u6837\u914d\u7f6e\u7684\u522b\u540d\uff0c\u4ec5\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"git-bash")," \u73af\u5883\u4e0b\u6709\u6548\u3002cmd\u3001pwsh \u7ec8\u7aef\u73af\u5883\u4e0b\u4e0d\u53ef\u7528\u3002")),(0,i.kt)("h3",{id:"\u65b9\u6cd5\u4e09"},"\u65b9\u6cd5\u4e09"),(0,i.kt)("p",null,"\u7f16\u5199\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"php7.cmd")," \u653e\u5728\u73af\u5883PATH\u7684\u76ee\u5f55\u4e0b\uff0c\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee\u5230\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bat"},'@echo off\nrem alias command for php7.exe\n\nrem override set ENV var PHP_INI_SCAN_DIR\nset PHP_INI_SCAN_DIR=C:\\Users\\inhere\\scoop\\apps\\php7.4-nts\\current\\conf.d\n\n"C:\\Users\\inhere\\scoop\\apps\\php7.4-nts\\current\\php.exe" %*\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"TIPs"),": \u901a\u8fc7\u811a\u672c\u91cc\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"set")," \u547d\u4ee4\u6307\u5b9a\u4e86\u8fd0\u884cPHP7\u65f6\u7684\u9644\u52a0\u914d\u7f6e\u626b\u82d7\u76ee\u5f55\uff0c\u4fdd\u8bc1\u8fd0\u884c\u65f6\u4e0d\u4f1a\u52a0\u8f7d\u9519\u4e71\u3002")),(0,i.kt)("p",null,"\u67e5\u770b\u6548\u679c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bat"},"$ php7.cmd --ini\nConfiguration File (php.ini) Path:\nLoaded Configuration File:         C:\\Users\\inhere\\scoop\\apps\\php7.4-nts\\current\\php.ini\nScan for additional .ini files in: C:\\Users\\inhere\\scoop\\apps\\php7.4-nts\\current\\conf.d\nAdditional .ini files parsed:      C:\\Users\\inhere\\scoop\\apps\\php7.4-nts\\current\\conf.d\\extensions.ini,\nC:\\Users\\inhere\\scoop\\apps\\php7.4-nts\\current\\conf.d\\xdebug.ini\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u5c0f\u95ee\u9898\uff1a\u5728 cmd,pwsh \u53ef\u4ee5\u7701\u7565 ",(0,i.kt)("inlineCode",{parentName:"p"},".cmd")," \u8fd0\u884c php7\uff0c\u4f46\u662f\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"git-bash")," \u4e0b\u4e0d\u884c\uff0c\u56e0\u6b64\u8fd8\u662f\u914d\u7f6e\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"bash alias")," \u6bd4\u8f83\u65b9\u4fbf\u3002")),(0,i.kt)("h2",{id:"phpstorm-\u91cc\u65e0\u6cd5\u52a0\u8f7dext"},"PHPStorm \u91cc\u65e0\u6cd5\u52a0\u8f7dext"),(0,i.kt)("p",null,"PHPStorm \u91cc\u76f4\u63a5\u914d\u7f6e\u7684 php7.4-nts/php.exe \u6587\u4ef6\u8def\u5f84\u3002\u65e0\u6cd5\u81ea\u7531\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"PHP_INI_SCAN_DIR"),"\uff0c\u4f1a\u5bfc\u81f4\u65e0\u6cd5\u52a0\u8f7d ",(0,i.kt)("inlineCode",{parentName:"p"},"conf.d")," \u76ee\u5f55\u4e0b\u7684\u65b0\u589e\u6269\u5c55\u914d\u7f6e\u3002"),(0,i.kt)("p",null,"\u89e3\u51b3\u529e\u6cd5\uff1a\u4e0d\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"conf.d/*.ini")," \u6765\u52a0\u8f7d\u989d\u5916\u914d\u7f6e\u3002\u65b0\u589e\u7684\u6269\u5c55\u90fd\u76f4\u63a5\u6dfb\u52a0\u5230 php.ini \u6587\u4ef6\u91cc"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"extension=redis\n")))}h.isMDXComponent=!0}}]);