"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7920],{8268:(e,t,r)=>{r.d(t,{c:()=>u});var a=r(9496),n=r(4818);const s=["zero","one","two","few","many","other"];function l(e){return s.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function u(){const e=o();return{selectMessage:(t,r)=>function(e,t,r){const a=e.split("|");if(1===a.length)return a[0];a.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const n=r.select(t),s=r.pluralForms.indexOf(n);return a[Math.min(s,a.length-1)]}(r,t,e)}}},7485:(e,t,r)=>{r.r(t),r.d(t,{default:()=>_});var a=r(9496),n=r(4818),s=r(6813),l=r(8516),c=r(7530),o=r(6456),u=r(8268),m=r(5924),h=r(3442),i=r(4039),p=r(5734);const g=function(){const e=(0,i.Z)(),t=(0,h.k6)(),r=(0,h.TH)(),{siteConfig:{baseUrl:a}}=(0,n.Z)(),s=e?new URLSearchParams(r.search):null,l=s?.get("q")||"",c=s?.get("ctx")||"",o=s?.get("version")||"",u=e=>{const t=new URLSearchParams(r.search);return e?t.set("q",e):t.delete("q"),t};return{searchValue:l,searchContext:c&&Array.isArray(p.Kc)&&p.Kc.some((e=>"string"==typeof e?e===c:e.path===c))?c:"",searchVersion:o,updateSearchPath:e=>{const r=u(e);t.replace({search:r.toString()})},updateSearchContext:e=>{const a=new URLSearchParams(r.search);a.set("ctx",e),t.replace({search:a.toString()})},generateSearchPageLink:e=>{const t=u(e);return`${a}search?${t.toString()}`}}};var d=r(7494),y=r(4209),f=r(9082),E=r(3852),S=r(8382),C=r(8334),I=r(8195),w=r(2680);const x={searchContextInput:"searchContextInput_xfOF",searchQueryInput:"searchQueryInput_qX05",searchResultItem:"searchResultItem_z7rU",searchResultItemPath:"searchResultItemPath_H0Yo",searchResultItemSummary:"searchResultItemSummary_B_ET",searchQueryColumn:"searchQueryColumn_j0XS",searchContextColumn:"searchContextColumn_TyNY"};var v=r(1696);function P(){const{siteConfig:{baseUrl:e},i18n:{currentLocale:t}}=(0,n.Z)(),{selectMessage:r}=(0,u.c)(),{searchValue:s,searchContext:c,searchVersion:h,updateSearchPath:i,updateSearchContext:f}=g(),[E,S]=(0,a.useState)(s),[C,w]=(0,a.useState)(),[P,_]=(0,a.useState)(),b=`${e}${h}`,A=(0,a.useMemo)((()=>E?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:E}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[E]);(0,a.useEffect)((()=>{i(E),C&&(E?C(E,(e=>{_(e)})):_(void 0))}),[E,C]);const F=(0,a.useCallback)((e=>{S(e.target.value)}),[]);return(0,a.useEffect)((()=>{s&&s!==E&&S(s)}),[s]),(0,a.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=!Array.isArray(p.Kc)||c||p.pQ?await(0,d.w)(b,c):{wrappedIndexes:[],zhDictionary:[]};w((()=>(0,y.v)(e,t,100)))}()}),[c,b]),a.createElement(a.Fragment,null,a.createElement(l.Z,null,a.createElement("meta",{property:"robots",content:"noindex, follow"}),a.createElement("title",null,A)),a.createElement("div",{className:"container margin-vert--lg"},a.createElement("h1",null,A),a.createElement("div",{className:"row"},a.createElement("div",{className:(0,m.Z)("col",{[x.searchQueryColumn]:Array.isArray(p.Kc),"col--9":Array.isArray(p.Kc),"col--12":!Array.isArray(p.Kc)})},a.createElement("input",{type:"search",name:"q",className:x.searchQueryInput,"aria-label":"Search",onChange:F,value:E,autoComplete:"off",autoFocus:!0})),Array.isArray(p.Kc)?a.createElement("div",{className:(0,m.Z)("col","col--3","padding-left--none",x.searchContextColumn)},a.createElement("select",{name:"search-context",className:x.searchContextInput,id:"context-selector",value:c,onChange:e=>f(e.target.value)},p.pQ&&a.createElement("option",{value:""},(0,o.I)({id:"theme.SearchPage.searchContext.everywhere",message:"Everywhere"})),p.Kc.map((e=>{const{label:r,path:n}=(0,v._)(e,t);return a.createElement("option",{key:n,value:n},r)})))):null),!C&&E&&a.createElement("div",null,a.createElement(I.Z,null)),P&&(P.length>0?a.createElement("p",null,r(P.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:P.length}))):a.createElement("p",null,(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),a.createElement("section",null,P&&P.map((e=>a.createElement(R,{key:e.document.i,searchResult:e}))))))}function R(e){let{searchResult:{document:t,type:r,page:n,tokens:s,metadata:l}}=e;const o=r===f.P.Title,u=r===f.P.Keywords,m=r===f.P.Description,h=m||u,i=o||h,g=r===f.P.Content,d=(o?t.b:n.b).slice(),y=g||h?t.s:t.t;i||d.push(n.t);let I="";if(p.vc&&s.length>0){const e=new URLSearchParams;for(const t of s)e.append("_highlight",t);I=`?${e.toString()}`}return a.createElement("article",{className:x.searchResultItem},a.createElement("h2",null,a.createElement(c.Z,{to:t.u+I+(t.h||""),dangerouslySetInnerHTML:{__html:g||h?(0,E.C)(y,s):(0,S.o)(y,(0,C.m)(l,"t"),s,100)}})),d.length>0&&a.createElement("p",{className:x.searchResultItemPath},(0,w.e)(d)),(g||m)&&a.createElement("p",{className:x.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,S.o)(t.t,(0,C.m)(l,"t"),s,100)}}))}const _=function(){return a.createElement(s.Z,null,a.createElement(P,null))}}}]);