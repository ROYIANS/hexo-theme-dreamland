import{bS as m,B as p,x as W,Q as M,l as k,W as B}from"./entry.d0a23d1f.js";const P={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};function T(o){return`(min-width: ${o}px)`}const s={};function g(o=P){if(!m)return p(()=>[]);if(typeof window.matchMedia!="function")return p(()=>[]);const n=W({}),r=Object.keys(o),h=(t,e)=>{t.matches?n.value[e]=!0:n.value[e]=!1};return r.forEach(t=>{const e=o[t];let a,i;s[e]===void 0?(a=window.matchMedia(T(e)),a.addEventListener?a.addEventListener("change",d=>{i.forEach(l=>{l(d,t)})}):a.addListener&&a.addListener(d=>{i.forEach(l=>{l(d,t)})}),i=new Set,s[e]={mql:a,cbs:i}):(a=s[e].mql,i=s[e].cbs),i.add(h),a.matches&&i.forEach(d=>{d(a,t)})}),M(()=>{r.forEach(t=>{const{cbs:e}=s[o[t]];e.has(h)&&e.delete(h)})}),p(()=>{const{value:t}=n;return r.filter(e=>t[e])})}function b(o){if(!m)return p(()=>{});const n=o!==void 0?g(o):g();return p(()=>{const{value:r}=n;if(r.length!==0)return r[r.length-1]})}const z={headerFontSize1:"30px",headerFontSize2:"22px",headerFontSize3:"18px",headerFontSize4:"16px",headerFontSize5:"16px",headerFontSize6:"16px",headerMargin1:"28px 0 20px 0",headerMargin2:"28px 0 20px 0",headerMargin3:"28px 0 20px 0",headerMargin4:"28px 0 18px 0",headerMargin5:"28px 0 18px 0",headerMargin6:"28px 0 18px 0",headerPrefixWidth1:"16px",headerPrefixWidth2:"16px",headerPrefixWidth3:"12px",headerPrefixWidth4:"12px",headerPrefixWidth5:"12px",headerPrefixWidth6:"12px",headerBarWidth1:"4px",headerBarWidth2:"4px",headerBarWidth3:"3px",headerBarWidth4:"3px",headerBarWidth5:"3px",headerBarWidth6:"3px",pMargin:"16px 0 16px 0",liMargin:".25em 0 0 0",olPadding:"0 0 0 2em",ulPadding:"0 0 0 2em"},F=o=>{const{primaryColor:n,textColor2:r,borderColor:h,lineHeight:t,fontSize:e,borderRadiusSmall:a,dividerColor:i,fontWeightStrong:d,textColor1:l,textColor3:x,infoColor:c,warningColor:u,errorColor:f,successColor:C,codeColor:S}=o;return Object.assign(Object.assign({},z),{aTextColor:n,blockquoteTextColor:r,blockquotePrefixColor:h,blockquoteLineHeight:t,blockquoteFontSize:e,codeBorderRadius:a,liTextColor:r,liLineHeight:t,liFontSize:e,hrColor:i,headerFontWeight:d,headerTextColor:l,pTextColor:r,pTextColor1Depth:l,pTextColor2Depth:r,pTextColor3Depth:x,pLineHeight:t,pFontSize:e,headerBarColor:n,headerBarColorPrimary:n,headerBarColorInfo:c,headerBarColorError:f,headerBarColorWarning:u,headerBarColorSuccess:C,textColor:r,textColor1Depth:l,textColor2Depth:r,textColor3Depth:x,textColorPrimary:n,textColorInfo:c,textColorSuccess:C,textColorWarning:u,textColorError:f,codeTextColor:r,codeColor:S,codeBorder:"1px solid #0000"})},L={name:"Typography",common:k,self:F},y=L;function E(){const o=b();return B(()=>o.value==="xs")}function w(){const o=b();return B(()=>o.value==="s")}export{w as a,F as s,y as t,E as u};
