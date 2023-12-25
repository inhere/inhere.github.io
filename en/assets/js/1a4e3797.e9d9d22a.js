"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7920],{8268:(e,t,r)=>{r.d(t,{c:()=>u});var a=r(9496),n=r(4818);const s=["zero","one","two","few","many","other"];function l(e){return s.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function u(){const e=o();return{selectMessage:(t,r)=>function(e,t,r){const a=e.split("|");if(1===a.length)return a[0];a.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const n=r.select(t),s=r.pluralForms.indexOf(n);return a[Math.min(s,a.length-1)]}(r,t,e)}}},2997:(e,t,r)=>{r.r(t),r.d(t,{default:()=>P});var a=r(9496),n=r(4818),s=r(1694),l=r(8516),c=r(7530),o=r(6456),u=r(8268),m=r(5924),h=r(3442),i=r(4039),p=r(8617);const g=function(){const e=(0,i.Z)(),t=(0,h.k6)(),r=(0,h.TH)(),{siteConfig:{baseUrl:a}}=(0,n.Z)(),s=e?new URLSearchParams(r.search):null,l=s?.get("q")||"",c=s?.get("ctx")||"",o=s?.get("version")||"",u=e=>{const t=new URLSearchParams(r.search);return e?t.set("q",e):t.delete("q"),t};return{searchValue:l,searchContext:c&&Array.isArray(p.Kc)&&p.Kc.some((e=>"string"==typeof e?e===c:e.path===c))?c:"",searchVersion:o,updateSearchPath:e=>{const r=u(e);t.replace({search:r.toString()})},updateSearchContext:e=>{const a=new URLSearchParams(r.search);a.set("ctx",e),t.replace({search:a.toString()})},generateSearchPageLink:e=>{const t=u(e);return`${a}search?${t.toString()}`}}};var d=r(3983),y=r(2911),f=r(7344),E=r(2645),S=r(2709),C=r(8204),I=r(3687);const x={searchContextInput:"searchContextInput_mY1H",searchQueryInput:"searchQueryInput_hKPu",searchResultItem:"searchResultItem_Byks",searchResultItemPath:"searchResultItemPath_zatS",searchResultItemSummary:"searchResultItemSummary_KXLL",searchQueryColumn:"searchQueryColumn_xdX3",searchContextColumn:"searchContextColumn_rca4"};var w=r(9977);function v(){const{siteConfig:{baseUrl:e},i18n:{currentLocale:t}}=(0,n.Z)(),{selectMessage:r}=(0,u.c)(),{searchValue:s,searchContext:c,searchVersion:h,updateSearchPath:i,updateSearchContext:f}=g(),[E,S]=(0,a.useState)(s),[I,v]=(0,a.useState)(),[P,_]=(0,a.useState)(),b=`${e}${h}`,k=(0,a.useMemo)((()=>E?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:E}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[E]);(0,a.useEffect)((()=>{i(E),I&&(E?I(E,(e=>{_(e)})):_(void 0))}),[E,I]);const A=(0,a.useCallback)((e=>{S(e.target.value)}),[]);return(0,a.useEffect)((()=>{s&&s!==E&&S(s)}),[s]),(0,a.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=!Array.isArray(p.Kc)||c||p.pQ?await(0,d.w)(b,c):{wrappedIndexes:[],zhDictionary:[]};v((()=>(0,y.v)(e,t,100)))}()}),[c,b]),a.createElement(a.Fragment,null,a.createElement(l.Z,null,a.createElement("meta",{property:"robots",content:"noindex, follow"}),a.createElement("title",null,k)),a.createElement("div",{className:"container margin-vert--lg"},a.createElement("h1",null,k),a.createElement("div",{className:"row"},a.createElement("div",{className:(0,m.Z)("col",{[x.searchQueryColumn]:Array.isArray(p.Kc),"col--9":Array.isArray(p.Kc),"col--12":!Array.isArray(p.Kc)})},a.createElement("input",{type:"search",name:"q",className:x.searchQueryInput,"aria-label":"Search",onChange:A,value:E,autoComplete:"off",autoFocus:!0})),Array.isArray(p.Kc)?a.createElement("div",{className:(0,m.Z)("col","col--3","padding-left--none",x.searchContextColumn)},a.createElement("select",{name:"search-context",className:x.searchContextInput,id:"context-selector",value:c,onChange:e=>f(e.target.value)},p.pQ&&a.createElement("option",{value:""},(0,o.I)({id:"theme.SearchPage.searchContext.everywhere",message:"everywhere"})),p.Kc.map((e=>{const{label:r,path:n}=(0,w._)(e,t);return a.createElement("option",{key:n,value:n},r)})))):null),!I&&E&&a.createElement("div",null,a.createElement(C.Z,null)),P&&(P.length>0?a.createElement("p",null,r(P.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:P.length}))):a.createElement("p",null,(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),a.createElement("section",null,P&&P.map((e=>a.createElement(R,{key:e.document.i,searchResult:e}))))))}function R(e){let{searchResult:{document:t,type:r,page:n,tokens:s,metadata:l}}=e;const o=0===r,u=2===r,m=(o?t.b:n.b).slice(),h=u?t.s:t.t;o||m.push(n.t);let i="";if(p.vc&&s.length>0){const e=new URLSearchParams;for(const t of s)e.append("_highlight",t);i=`?${e.toString()}`}return a.createElement("article",{className:x.searchResultItem},a.createElement("h2",null,a.createElement(c.Z,{to:t.u+i+(t.h||""),dangerouslySetInnerHTML:{__html:u?(0,f.C)(h,s):(0,E.o)(h,(0,S.m)(l,"t"),s,100)}})),m.length>0&&a.createElement("p",{className:x.searchResultItemPath},(0,I.e)(m)),u&&a.createElement("p",{className:x.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,E.o)(t.t,(0,S.m)(l,"t"),s,100)}}))}const P=function(){return a.createElement(s.Z,null,a.createElement(v,null))}}}]);