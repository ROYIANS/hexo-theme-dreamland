import{d as y,w as g,u as x,j as M,q as w,o,b as a,f as e,g as t,F as r,r as p,i,t as c,aG as D}from"./entry.00c261f4.js";import u from"./moods.dea9423e.js";const v={class:"heti--serif grid grid-cols-1 relative justify-items-center items-center w-full h-64 text-sm p-4 overflow-hidden"},k=e("div",{class:"h-full w-12 absolute left-0 top-0 bg-gradient-to-r from-white dark:from-zinc-900 z-1"},null,-1),b=e("div",{class:"h-full w-12 absolute right-0 top-0 bg-gradient-to-l from-white dark:from-zinc-900 z-1"},null,-1),z=["src"],j={class:"animate-scroll py-5 m-auto list-none absolute top-1/2 -translate-y-1/2 left-0 heti--sans -z-1"},T={class:"w-fit flex relative font-black text-lg"},B={class:"whitespace-nowrap py-0 px-1"},C={key:0},F={class:"text-indigo-600 font-bold uppercase"},N={key:1,class:"text-sm"},J=y({__name:"MoodToday",async setup(V){let n,l;const m=D(),h=([n,l]=g(()=>x()),n=await n,l(),n),f=M(()=>m().format(" YYYY-MM-DD  YYYY-MM-DD  YYYY-MM-DD  YYYY-MM-DD  YYYY-MM-DD ")),s=h.getMoodToday(),Y=w((s==null?void 0:s.mood)||"star");return(q,A)=>(o(),a("div",v,[k,b,e("img",{alt:"mood",src:t(u)[t(Y)]||t(u).star,class:"w-20 h-20 hover:animate-spin-y-1.5 object-cover"},null,8,z),e("ul",j,[(o(),a(r,null,p(8,d=>e("li",{key:d,class:"relative mx-auto p-0 -m-1.5 list-none"},[e("div",T,[(o(),a(r,null,p(5,E=>{var _;return e("span",B,[d%2===1?(o(),a("span",C,[!t(s)||!t(s).description?(o(),a(r,{key:0},[i(" 今天的我，是"),e("span",F,c(((_=t(s))==null?void 0:_.name)||"未知"),1),i("的我。 ")],64)):(o(),a(r,{key:1},[i(c(t(s).description),1)],64))])):(o(),a("span",N,c(t(f)),1))])}),64))])])),64))])]))}});export{J as _};