"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4224],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=s(t),f=o,h=m["".concat(c,".").concat(f)]||m[f]||p[f]||l;return t?r.createElement(h,i(i({ref:n},u),{},{components:t})):r.createElement(h,i({ref:n},u))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,i=new Array(l);i[0]=f;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[m]="string"==typeof e?e:o,i[1]=a;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2713:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var r=t(1966),o=(t(9496),t(9613));const l={title:"\u5728shell\u811a\u672c\u91cc\u7b80\u5355\u5feb\u901f\u7684\u4f7f\u7528\u989c\u8272",authors:"inhere",tags:["shell","bash","linux","cli-color"],date:"2019-11-08T22:04",slug:"simple-use-color-in-shell"},i=void 0,a={permalink:"/en/blog/simple-use-color-in-shell",editUrl:"https://github.com/inhere/inhere.github.io/tree/main/blog/2019/11-08-simple-use-color-shell.md",source:"@site/blog/2019/11-08-simple-use-color-shell.md",title:"\u5728shell\u811a\u672c\u91cc\u7b80\u5355\u5feb\u901f\u7684\u4f7f\u7528\u989c\u8272",description:"\u5728shell\u811a\u672c\u91cc\u7b80\u5355\u5feb\u901f\u7684\u4f7f\u7528\u989c\u8272\u7684\u4ee3\u7801\u5b9e\u73b0",date:"2019-11-08T22:04:00.000Z",formattedDate:"November 8, 2019",tags:[{label:"shell",permalink:"/en/blog/tags/shell"},{label:"bash",permalink:"/en/blog/tags/bash"},{label:"linux",permalink:"/en/blog/tags/linux"},{label:"cli-color",permalink:"/en/blog/tags/cli-color"}],readingTime:1.2,hasTruncateMarker:!0,authors:[{name:"inhere",title:"docs maintainer",url:"https://github.com/inhere",imageURL:"https://github.com/inhere.png",key:"inhere"}],frontMatter:{title:"\u5728shell\u811a\u672c\u91cc\u7b80\u5355\u5feb\u901f\u7684\u4f7f\u7528\u989c\u8272",authors:"inhere",tags:["shell","bash","linux","cli-color"],date:"2019-11-08T22:04",slug:"simple-use-color-in-shell"},prevItem:{title:"ZSH\u81ea\u52a8\u8865\u5168\u811a\u672c\u7f16\u5199",permalink:"/en/blog/2021/07/28/zsh-completions-howto"},nextItem:{title:"Long Blog Post",permalink:"/en/blog/long-blog-post"}},c={authorsImageUrls:[void 0]},s=[{value:"\u811a\u672c\u4ee3\u7801",id:"\u811a\u672c\u4ee3\u7801",level:2},{value:"\u5728\u5176\u4ed6\u811a\u672c\u5f15\u5165",id:"\u5728\u5176\u4ed6\u811a\u672c\u5f15\u5165",level:2}],u={toc:s},m="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(m,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728shell\u811a\u672c\u91cc\u7b80\u5355\u5feb\u901f\u7684\u4f7f\u7528\u989c\u8272\u7684\u4ee3\u7801\u5b9e\u73b0"),(0,o.kt)("h2",{id:"\u811a\u672c\u4ee3\u7801"},"\u811a\u672c\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'#!/usr/bin/env bash\n#\n# some common functions\n# file: scripts/common-func.sh\n\n# Usage:\n# user_confirm\n# user_confirm "custom question"\nfunction user_confirm() {\n    local yes=0\n    local msg="Confirm continue"\n\n    # override default message\n    [[ "$1" != "" ]] && msg=$1\n\n    # read user input\n    read -p "$msg? [y/n]" yn\n\n    if [[ ${yn} == [Yy]* ]]; then\n        return 0\n    fi\n\n    return 1\n}\n\n# Usage:\n# colored_text "message text"\n# colored_text "message text" "red"\n# colored_text "message text" "blue"\nfunction colored_text() {\n    NOC=\'\\033[0m\' # No Color\n    RED=\'\\033[0;31m\'\n    BLUE=\'\\033[0;34m\'\n    CYAN=\'\\033[0;36m\'\n    GREEN=\'\\033[0;32m\'\n    YELLOW=\'\\033[0;33m\'\n\n#    [[ "$2" = "" ]] && $2="green"\n\n    if [[ "$2" = "red" ]]; then\n        echo -e "${RED}$1${NOC}"\n    elif [[ "$2" = "blue" ]]; then\n        echo -e "${BLUE}$1${NOC}"\n    elif [[ "$2" = "cyan" ]]; then\n        echo -e "${CYAN}$1${NOC}"\n    elif [[ "$2" = "yellow" ]]; then\n        echo -e "${YELLOW}$1${NOC}"\n    else # default green\n        echo -e "${GREEN}$1${NOC}"\n    fi\n}\n\n# quick use color print text\nfunction red_text() {\n    colored_text "$1" red\n}\n\nfunction blue_text() {\n    colored_text "$1" blue\n}\n\nfunction cyan_text() {\n    colored_text "$1" cyan\n}\n\nfunction green_text() {\n    colored_text "$1" green\n}\n\nfunction yellow_text() {\n    colored_text "$1" yellow\n}\n')),(0,o.kt)("h2",{id:"\u5728\u5176\u4ed6\u811a\u672c\u5f15\u5165"},"\u5728\u5176\u4ed6\u811a\u672c\u5f15\u5165"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# import common functions\nsource "$(dirname $0)/scripts/common-func.sh"\n\ncolored_text "Will test components:"\n\n# do something ...\n\ncyan_text "\\nTest Completed!"\n')))}p.isMDXComponent=!0}}]);