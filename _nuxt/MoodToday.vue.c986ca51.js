import{u as h}from"./dayjs.982a1439.js";import l from"./moods.de4b4883.js";import{d as Y,q as i,z as v,J as y,o as e,g as s,e as t,f as o,F as c,r as d,i as _,t as u}from"./entry.e068cd25.js";const M={class:"heti--serif grid grid-cols-1 relative justify-items-center items-center w-full h-64 text-sm p-4 overflow-hidden"},g=t("div",{class:"h-full w-12 absolute left-0 top-0 bg-gradient-to-r from-white dark:from-zinc-900 z-1"},null,-1),D=t("div",{class:"h-full w-12 absolute right-0 top-0 bg-gradient-to-l from-white dark:from-zinc-900 z-1"},null,-1),w=["src"],x={class:"animate-scroll py-5 m-auto list-none absolute top-1/2 -translate-y-1/2 left-0 heti--sans -z-1"},b={class:"w-fit flex relative font-black text-lg"},k={class:"whitespace-nowrap py-0 px-1"},z={key:0},j={class:"text-indigo-600 font-bold uppercase"},T={key:1,class:"text-sm"},C=Y({__name:"MoodToday",setup(B){const m=h(),p=Object.keys(l),n=i(0),a=i(""),f=v(()=>m().format(" YYYY-MM-DD  YYYY-MM-DD  YYYY-MM-DD  YYYY-MM-DD  YYYY-MM-DD "));return y(()=>{n.value=Math.floor(Math.random()*31),a.value=p[n.value]}),(N,F)=>(e(),s("div",M,[g,D,t("img",{alt:"mood",src:o(l)[o(a)],class:"w-20 h-20 hover:animate-spin-y-1.5 object-cover overflow-visible"},null,8,w),t("ul",x,[(e(),s(c,null,d(8,r=>t("li",{key:r,class:"relative mx-auto p-0 -m-1.5 list-none"},[t("div",b,[(e(),s(c,null,d(5,J=>t("span",k,[r%2===1?(e(),s("span",z,[_("今天的我，是"),t("span",j,u(o(a)),1),_("的我。")])):(e(),s("span",T,u(o(f)),1))])),64))])])),64))])]))}});export{C as _};
