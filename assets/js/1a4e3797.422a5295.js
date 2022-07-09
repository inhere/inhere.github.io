"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7920],{8824:(e,t,n)=>{n.d(t,{c:()=>u});var a=n(7294),r=n(2263);const l=["zero","one","two","few","many","other"];function s(e){return l.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+t.message+"\n"),c}}),[e])}function u(){const e=o();return{selectMessage:(t,n)=>function(e,t,n){const a=e.split("|");if(1===a.length)return a[0];a.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms.join(",")+"), but the message contains "+a.length+": "+e);const r=n.select(t),l=n.pluralForms.indexOf(r);return a[Math.min(l,a.length-1)]}(n,t,e)}}},1473:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var a=n(7294),r=n(2263),l=n(6357),s=n(5742),c=n(9960),o=n(5999),u=n(373),m=n(8824),i=n(143),h=n(6775),p=n(412);const d=function(){const e=(0,h.k6)(),t=(0,h.TH)(),{siteConfig:{baseUrl:n}}=(0,r.Z)();return{searchValue:p.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:n=>{const a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:e=>n+"search?q="+encodeURIComponent(e)}};var g=n(22),f=n(8202),E=n(2539),y=n(726),S=n(1073),w=n(311);const b="searchQueryInput_CFBF",I="searchResultItem_U687",v="searchResultItemPath_uIbk",F="searchResultItemSummary_oZHr";var P=n(3926);function R(){const{siteConfig:{baseUrl:e}}=(0,r.Z)(),t=(0,i.gA)();let n=e;const{preferredVersion:l}=(0,u.J)(null==t?void 0:t.pluginId);l&&!l.isLast&&(n=l.path+"/");const{selectMessage:c}=(0,m.c)(),{searchValue:h,updateSearchPath:p}=d(),[E,y]=(0,a.useState)(h),[S,I]=(0,a.useState)(),[v,F]=(0,a.useState)(),P=(0,a.useMemo)((()=>E?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:E}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[E]);(0,a.useEffect)((()=>{p(E),S&&(E?S(E,(e=>{F(e)})):F(void 0))}),[E,S]);const R=(0,a.useCallback)((e=>{y(e.target.value)}),[]);return(0,a.useEffect)((()=>{h&&h!==E&&y(h)}),[h]),(0,a.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,g.w)(n);I((()=>(0,f.v)(e,t,100)))}()}),[n]),a.createElement(a.Fragment,null,a.createElement(s.Z,null,a.createElement("meta",{property:"robots",content:"noindex, follow"}),a.createElement("title",null,P)),a.createElement("div",{className:"container margin-vert--lg"},a.createElement("h1",null,P),a.createElement("input",{type:"search",name:"q",className:b,"aria-label":"Search",onChange:R,value:E,autoComplete:"off",autoFocus:!0}),!S&&E&&a.createElement("div",null,a.createElement(w.Z,null)),v&&(v.length>0?a.createElement("p",null,c(v.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:v.length}))):a.createElement("p",null,(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),a.createElement("section",null,v&&v.map((e=>a.createElement(_,{key:e.document.i,searchResult:e}))))))}function _(e){let{searchResult:{document:t,type:n,page:r,tokens:l,metadata:s}}=e;const o=0===n,u=2===n,m=(o?t.b:r.b).slice(),i=u?t.s:t.t;return o||m.push(r.t),a.createElement("article",{className:I},a.createElement("h2",null,a.createElement(c.Z,{to:t.u+(t.h||""),dangerouslySetInnerHTML:{__html:u?(0,E.C)(i,l):(0,y.o)(i,(0,S.m)(s,"t"),l,100)}})),m.length>0&&a.createElement("p",{className:v},(0,P.e)(m)),u&&a.createElement("p",{className:F,dangerouslySetInnerHTML:{__html:(0,y.o)(t.t,(0,S.m)(s,"t"),l,100)}}))}const k=function(){return a.createElement(l.Z,null,a.createElement(R,null))}}}]);