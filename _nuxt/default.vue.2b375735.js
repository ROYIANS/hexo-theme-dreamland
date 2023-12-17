import{u as x,a as w}from"./remixicon.29ecea00.js";import{_ as S}from"./Header.vue.1b3f271d.js";import{_ as v}from"./Footer.vue.2fa65843.js";import{d as y,a as p,c as u,t as T,i as h,g as c,w as $,u as j,o as B,G as m,h as d,J as D,F as L}from"./entry.d0a23d1f.js";const A={class:"fixed right-4 bottom-10 z-1000 grid grid-cols-1 gap-y-2 justify-center items-center font-normal text-sm text-center"},N=c("span",{title:"_p('go_top')",class:"opacity-0 p-4 bg-gray-100 dark:bg-black w-5 h-5 rounded-sm cursor-pointer flex justify-center items-center",id:"go-top"},[c("i",{class:"ri-arrow-up-line"})],-1),E={key:0,id:"translateLink",class:"p-4 bg-gray-100 dark:bg-black w-5 h-5 rounded-sm cursor-pointer flex justify-center items-center"},R={key:1,title:"_p('toggle_book_content')",id:"toggle-catalog",class:"p-4 bg-gray-100 dark:bg-black w-5 h-5 rounded-sm cursor-pointer flex justify-center items-center"},U=c("i",{class:"ri-book-2-fill"},null,-1),M=[U],V=c("span",{title:"_p('toggle_theme')",id:"toggle-dark",class:"p-4 bg-gray-100 dark:bg-black w-5 h-5 rounded-sm cursor-pointer flex justify-center items-center"},[c("i",{class:"",id:"theme-icon"})],-1),F=y({__name:"index",props:{translate:{type:Boolean,default:!0},translateTarget:{type:String,default:"繁"},book:{type:Boolean,default:!0}},setup(s){return(o,l)=>(p(),u("div",A,[N,s.translate?(p(),u("span",E,T(s.translateTarget),1)):h("",!0),s.book?(p(),u("span",R,M)):h("",!0),V]))}});function H(){const s=document.createElement("canvas"),o=s.getContext("2d"),l=(e,n,i)=>{s.width=e,s.height=e,o.fillStyle=i;for(let a=0;a<e;a++)for(let r=0;r<e;r++)Math.random()>.5&&o.fillRect(a,r,1,1);s.toBlob(a=>{const r=URL.createObjectURL(a);document.documentElement.style.setProperty(n,`url(${r})`)})},t=document.documentElement.classList.contains("dark")?"hsla(0,0%,7%,0.14)":"hsla(36, 33%, 97%, 0.1375)";l(256,"--grain-square-white-opacity-blend",t)}const I={class:"pt-12 px-0 md:px-12"},P=y({__name:"default",props:{pageTitle:{type:String,default:null},pageAuthor:{type:String,default:null},pageKeywords:{type:String,default:null},pageDescription:{type:String,default:null}},async setup(s){let o,l;const g=([o,l]=$(()=>j()),o=await o,l(),o),t=g.getSiteConfig(),e=g.getThemeConfig(),n=s,i=(e==null?void 0:e.head)||{},a=(t==null?void 0:t.title)||"Untitled",r=e==null?void 0:e.nav,_=e==null?void 0:e.favicon,f=(t==null?void 0:t.author)||"佚名",k=e==null?void 0:e.links;return x({title:n.pageTitle?`${n.pageTitle} - ${a}`:a,description:n.pageDescription||(t==null?void 0:t.description),keywords:n.pageKeywords||(t==null?void 0:t.keywords),author:n.pageAuthor||(t==null?void 0:t.author)}),w({bodyAttrs:{class:"heti--sans bg-white dark:bg-zinc-900 text-gray-700 dark:text-gray-200"},link:[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Long+Cang&family=Noto+Sans+SC:wght@100;300;400;700;900&family=Noto+Serif+SC:wght@200;300;400;700;900&display=swap"},{rel:"icon",type:"image/x-icon",href:_},...i.links||[]],script:[{src:"https://unpkg.com/heti/umd/heti-addon.min.js"},...i.scripts||[]]}),B(()=>{H()}),(b,K)=>(p(),u(L,null,[m(S,{"site-title":d(a),"page-title":s.pageTitle,"nav-items":d(r)},null,8,["site-title","page-title","nav-items"]),c("main",I,[D(b.$slots,"default")]),m(v,{author:d(f),links:d(k)},null,8,["author","links"]),m(F)],64))}});export{P as _};
