import{_ as j}from"./default.vue.faaa7e8f.js";import{u as O}from"./composables.4af66cc4.js";import{N as P,a as k}from"./p.447a7916.js";import{k as w,l as V,s as H,m as T,p as B,q as D,d as M,v as I,x as $,y as K,z as q,A,B as S,C as G,D as C,N as W,E as X,a as _,e as Y,f as v,G as b,g as h,h as m,H as y,j as z,I as J,c as L,r as R,F as E}from"./entry.c7679bea.js";import{_ as Q}from"./_plugin-vue_export-helper.c27b6911.js";import"./remixicon.04499968.js";import"./Header.vue.23abb727.js";import"./Popover.76b65170.js";import"./light.e31b1e48.js";import"./format-length.c9d165c6.js";import"./cssr.5d23b379.js";import"./use-merged-state.59454b28.js";import"./Icon.6c12346b.js";import"./light.2b7eaf01.js";import"./create.f805babe.js";import"./light.76ba8784.js";import"./Footer.vue.5b3bc8f5.js";const U=p=>{const{baseColor:e,textColor2:l,bodyColor:s,cardColor:i,dividerColor:o,actionColor:r,scrollbarColor:t,scrollbarColorHover:u,invertedColor:n}=p;return{textColor:l,textColorInverted:"#FFF",color:s,colorEmbedded:r,headerColor:i,headerColorInverted:n,footerColor:r,footerColorInverted:n,headerBorderColor:o,headerBorderColorInverted:n,footerBorderColor:o,footerBorderColorInverted:n,siderBorderColor:o,siderBorderColorInverted:n,siderColor:i,siderColorInverted:n,siderToggleButtonBorder:`1px solid ${o}`,siderToggleButtonColor:e,siderToggleButtonIconColor:l,siderToggleButtonIconColorInverted:l,siderToggleBarColor:T(s,t),siderToggleBarColorHover:T(s,u),__invertScrollbar:"true"}},Z=w({name:"Layout",common:V,peers:{Scrollbar:H},self:U}),ee=Z,oe={type:String,default:"static"},te=B("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[B("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),D("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),re={embedded:Boolean,position:oe,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},le=X("n-layout");function se(p){return M({name:p?"LayoutContent":"Layout",props:Object.assign(Object.assign({},I.props),re),setup(e){const l=$(null),s=$(null),{mergedClsPrefixRef:i,inlineThemeDisabled:o}=K(e),r=I("Layout","-layout",te,ee,e,i);function t(a,c){if(e.nativeScrollbar){const{value:d}=l;d&&(c===void 0?d.scrollTo(a):d.scrollTo(a,c))}else{const{value:d}=s;d&&d.scrollTo(a,c)}}q(le,e);let u=0,n=0;const g=a=>{var c;const d=a.target;u=d.scrollLeft,n=d.scrollTop,(c=e.onScroll)===null||c===void 0||c.call(e,a)};A(()=>{if(e.nativeScrollbar){const a=l.value;a&&(a.scrollTop=n,a.scrollLeft=u)}});const N={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},F={scrollTo:t},x=S(()=>{const{common:{cubicBezierEaseInOut:a},self:c}=r.value;return{"--n-bezier":a,"--n-color":e.embedded?c.colorEmbedded:c.color,"--n-text-color":c.textColor}}),f=o?G("layout",S(()=>e.embedded?"e":""),x,e):void 0;return Object.assign({mergedClsPrefix:i,scrollableElRef:l,scrollbarInstRef:s,hasSiderStyle:N,mergedTheme:r,handleNativeElScroll:g,cssVars:o?void 0:x,themeClass:f==null?void 0:f.themeClass,onRender:f==null?void 0:f.onRender},F)},render(){var e;const{mergedClsPrefix:l,hasSider:s}=this;(e=this.onRender)===null||e===void 0||e.call(this);const i=s?this.hasSiderStyle:void 0,o=[this.themeClass,p&&`${l}-layout-content`,`${l}-layout`,`${l}-layout--${this.position}-positioned`];return C("div",{class:o,style:this.cssVars},this.nativeScrollbar?C("div",{ref:"scrollableElRef",class:`${l}-layout-scroll-container`,style:[this.contentStyle,i],onScroll:this.handleNativeElScroll},this.$slots):C(W,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,i]}),this.$slots))}})}const ne=se(!1),ae={class:"banner",style:{overflow:"hidden"}},ie={class:"banner-text"},ce=M({__name:"not-found",setup(p){const e=O(),l=S(()=>e.value?"margin-top: 0; font-size: 64px !important":"margin-top: 0; font-size: 80px !important"),s=(o,r)=>{const t=r-o,u=Math.random();return o+Math.round(t*u)},i=o=>{const r=s(1,20)+10,t=.02*o,u=s(1,20)+20,n=["float","floatReverse","float2","floatReverse2"],g=n[s(0,n.length)];return{top:`${s(1,100)/(100+r/8)*100}%`,left:`${s(1,100)/(100+r/10)*100}%`,fontSize:`${r}px`,filter:`blur(${t}px)`,animation:`${u}s ${g} infinite`}};return(o,r)=>(_(),Y(j,null,{default:v(()=>[b(m(ne),{"native-scrollbar":!1,position:m(e)?"static":"absolute",style:y(m(e)?void 0:"top: var(--header-height);")},{default:v(()=>[h("div",ae,[h("div",ie,[b(m(P),{style:y(m(l)),class:"naive-title"},{default:v(()=>[h("span",{onMouseenter:r[0]||(r[0]=(...t)=>o.handleTitleMouseEnter&&o.handleTitleMouseEnter(...t)),onMouseleave:r[1]||(r[1]=(...t)=>o.handleTitleMouseLeave&&o.handleTitleMouseLeave(...t))},"404",32)]),_:1},8,["style"]),b(m(k),{style:{"font-size":"16px","margin-top":"0","margin-bottom":"0"}},{default:v(()=>[z(" notFound ")]),_:1}),h("div",null,[b(m(J),{ghost:!1,size:"large",type:"primary",text:"",tag:"a",href:"/"},{default:v(()=>[z(" t('home') ")]),_:1})])]),(_(),L(E,null,R(40,t=>h("span",{key:`4-${t}`,class:"particle",style:y(i(t))},"4",4)),64)),(_(),L(E,null,R(40,t=>h("span",{key:`0-${t}`,class:"particle",style:y(i(40+t))},"0",4)),64))])]),_:1},8,["position","style"])]),_:1}))}});const $e=Q(ce,[["__scopeId","data-v-112a9d12"]]);export{$e as default};