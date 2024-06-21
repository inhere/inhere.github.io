"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9319],{7064:(e,t,a)=>{a.d(t,{Z:()=>p});var l=a(9496),n=a(5924),r=a(4373),i=a(1620),o=a(7530),s=a(6456);const m={sidebar:"sidebar_RKtQ",sidebarItemTitle:"sidebarItemTitle_FhMI",sidebarItemList:"sidebarItemList_UcJN",sidebarItem:"sidebarItem_410U",sidebarItemLink:"sidebarItemLink_Z50W",sidebarItemLinkActive:"sidebarItemLinkActive_m6hy"};function c(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,n.Z)(m.sidebar,"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(m.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.Z)(m.sidebarItemList,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:m.sidebarItem},l.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:m.sidebarItemLink,activeClassName:m.sidebarItemLinkActive},e.title)))))))}var u=a(4046);function d(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function g(e){return l.createElement(u.Zo,{component:d,props:e})}function h(e){let{sidebar:t}=e;const a=(0,i.i)();return t?.items.length?"mobile"===a?l.createElement(g,{sidebar:t}):l.createElement(c,{sidebar:t}):null}function p(e){const{sidebar:t,toc:a,children:i,...o}=e,s=t&&t.items.length>0;return l.createElement(r.Z,o,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(h,{sidebar:t}),l.createElement("main",{className:(0,n.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&l.createElement("div",{className:"col col--2"},a))))}},1667:(e,t,a)=>{a.d(t,{Z:()=>B});var l=a(9496),n=a(5924),r=a(2173),i=a(8148);function o(e){let{children:t,className:a}=e;const{frontMatter:n,assets:o,metadata:{description:s}}=(0,r.C)(),{withBaseUrl:m}=(0,i.C)(),c=o.image??n.image,u=n.keywords??[];return l.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},s&&l.createElement("meta",{itemProp:"description",content:s}),c&&l.createElement("link",{itemProp:"image",href:m(c,{absolute:!0})}),u.length>0&&l.createElement("meta",{itemProp:"keywords",content:u.join(",")}),t)}var s=a(7530);const m={title:"title_y9ha"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:i}=(0,r.C)(),{permalink:o,title:c}=a,u=i?"h1":"h2";return l.createElement(u,{className:(0,n.Z)(m.title,t),itemProp:"headline"},i?c:l.createElement(s.Z,{itemProp:"url",to:o},c))}var u=a(6456),d=a(8268);const g={container:"container_El6s"};function h(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,d.c)();return t=>{const a=Math.ceil(t);return e(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return l.createElement(l.Fragment,null,a(t))}function p(e){let{date:t,formattedDate:a}=e;return l.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function E(){return l.createElement(l.Fragment,null," \xb7 ")}function b(e){let{className:t}=e;const{metadata:a}=(0,r.C)(),{date:i,formattedDate:o,readingTime:s}=a;return l.createElement("div",{className:(0,n.Z)(g.container,"margin-vert--md",t)},l.createElement(p,{date:i,formattedDate:o}),void 0!==s&&l.createElement(l.Fragment,null,l.createElement(E,null),l.createElement(h,{readingTime:s})))}function f(e){return e.href?l.createElement(s.Z,e):l.createElement(l.Fragment,null,e.children)}function v(e){let{author:t,className:a}=e;const{name:r,title:i,url:o,imageURL:s,email:m}=t,c=o||m&&`mailto:${m}`||void 0;return l.createElement("div",{className:(0,n.Z)("avatar margin-bottom--sm",a)},s&&l.createElement(f,{href:c,className:"avatar__photo-link"},l.createElement("img",{className:"avatar__photo",src:s,alt:r,itemProp:"image"})),r&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(f,{href:c,itemProp:"url"},l.createElement("span",{itemProp:"name"},r))),i&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},i)))}const N={authorCol:"authorCol_ZYyr",imageOnlyAuthorRow:"imageOnlyAuthorRow_ujRT",imageOnlyAuthorCol:"imageOnlyAuthorCol_bcUb"};function _(e){let{className:t}=e;const{metadata:{authors:a},assets:i}=(0,r.C)();if(0===a.length)return null;const o=a.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",o?N.imageOnlyAuthorRow:"row",t)},a.map(((e,t)=>l.createElement("div",{className:(0,n.Z)(!o&&"col col--6",o?N.imageOnlyAuthorCol:N.authorCol),key:t},l.createElement(v,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})))))}function P(){return l.createElement("header",null,l.createElement(c,null),l.createElement(b,null),l.createElement(_,null))}var Z=a(5848),k=a(618);function C(e){let{children:t,className:a}=e;const{isBlogPostPage:i}=(0,r.C)();return l.createElement("div",{id:i?Z.blogPostContainerID:void 0,className:(0,n.Z)("markdown",a),itemProp:"articleBody"},l.createElement(k.Z,null,t))}var y=a(9996),T=a(7434),w=a(1966);function I(){return l.createElement("b",null,l.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function F(e){const{blogPostTitle:t,...a}=e;return l.createElement(s.Z,(0,w.Z)({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),l.createElement(I,null))}const L={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_GP_3"};function R(){const{metadata:e,isBlogPostPage:t}=(0,r.C)(),{tags:a,title:i,editUrl:o,hasTruncateMarker:s}=e,m=!t&&s,c=a.length>0;return c||m||o?l.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",t&&L.blogPostFooterDetailsFull)},c&&l.createElement("div",{className:(0,n.Z)("col",{"col--9":m})},l.createElement(T.Z,{tags:a})),t&&o&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(y.Z,{editUrl:o})),m&&l.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":c})},l.createElement(F,{blogPostTitle:i,to:e.permalink}))):null}function B(e){let{children:t,className:a}=e;const i=function(){const{isBlogPostPage:e}=(0,r.C)();return e?void 0:"margin-bottom--xl"}();return l.createElement(o,{className:(0,n.Z)(i,a)},l.createElement(P,null),l.createElement(C,null,t),l.createElement(R,null))}},9996:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(9496),n=a(6456),r=a(7956),i=a(1966),o=a(5924);const s={iconEdit:"iconEdit_Y1Rf"};function m(e){let{className:t,...a}=e;return l.createElement("svg",(0,i.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(s.iconEdit,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function c(e){let{editUrl:t}=e;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},l.createElement(m,null),l.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},1674:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(9496),n=a(5924),r=a(7530);function i(e){const{permalink:t,title:a,subLabel:i,isNext:o}=e;return l.createElement(r.Z,{className:(0,n.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},i&&l.createElement("div",{className:"pagination-nav__sublabel"},i),l.createElement("div",{className:"pagination-nav__label"},a))}},7813:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(9496),n=a(5924),r=a(7530);const i={tag:"tag_plK1",tagRegular:"tagRegular_SSGO",tagWithCount:"tagWithCount_hmDD"};function o(e){let{permalink:t,label:a,count:o}=e;return l.createElement(r.Z,{href:t,className:(0,n.Z)(i.tag,o?i.tagWithCount:i.tagRegular)},a,o&&l.createElement("span",null,o))}},7434:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(9496),n=a(5924),r=a(6456),i=a(7813);const o={tags:"tags_Dgru",tag:"tag_omUF"};function s(e){let{tags:t}=e;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,n.Z)(o.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return l.createElement("li",{key:a,className:o.tag},l.createElement(i.Z,{label:t,permalink:a}))}))))}},2173:(e,t,a)=>{a.d(t,{C:()=>o,n:()=>i});var l=a(9496),n=a(2095);const r=l.createContext(null);function i(e){let{children:t,content:a,isBlogPostPage:n=!1}=e;const i=function(e){let{content:t,isBlogPostPage:a}=e;return(0,l.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:n});return l.createElement(r.Provider,{value:i},t)}function o(){const e=(0,l.useContext)(r);if(null===e)throw new n.i6("BlogPostProvider");return e}},8268:(e,t,a)=>{a.d(t,{c:()=>m});var l=a(9496),n=a(4818);const r=["zero","one","two","few","many","other"];function i(e){return r.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function s(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,l.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function m(){const e=s();return{selectMessage:(t,a)=>function(e,t,a){const l=e.split("|");if(1===l.length)return l[0];l.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${l.length}: ${e}`);const n=a.select(t),r=a.pluralForms.indexOf(n);return l[Math.min(r,l.length-1)]}(a,t,e)}}}}]);