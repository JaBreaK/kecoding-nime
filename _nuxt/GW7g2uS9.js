import{f as y,e as L,a4 as D,a5 as B,o as I,g as o,t as V,P as u,J as s,I as b}from"./CPIMTh_-.js";import{d as _,z as n}from"./CS_v0reC.js";const[q,r]=y("cell"),z={tag:I("div"),icon:String,size:String,title:o,value:o,label:o,center:Boolean,isLink:Boolean,border:V,iconPrefix:String,valueClass:u,labelClass:u,titleClass:u,titleStyle:null,arrowDirection:String,required:{type:[Boolean,String],default:null},clickable:{type:Boolean,default:null}},A=L({},z,D);var J=_({name:q,props:A,setup(e,{slots:a}){const v=B(),g=()=>{if(a.label||s(e.label))return n("div",{class:[r("label"),e.labelClass]},[a.label?a.label():e.label])},m=()=>{var l;if(a.title||s(e.title)){const t=(l=a.title)==null?void 0:l.call(a);return Array.isArray(t)&&t.length===0?void 0:n("div",{class:[r("title"),e.titleClass],style:e.titleStyle},[t||n("span",null,[e.title]),g()])}},h=()=>{const l=a.value||a.default;if(l||s(e.value))return n("div",{class:[r("value"),e.valueClass]},[l?l():n("span",null,[e.value])])},P=()=>{if(a.icon)return a.icon();if(e.icon)return n(b,{name:e.icon,class:r("left-icon"),classPrefix:e.iconPrefix},null)},S=()=>{if(a["right-icon"])return a["right-icon"]();if(e.isLink){const l=e.arrowDirection&&e.arrowDirection!=="right"?`arrow-${e.arrowDirection}`:"arrow";return n(b,{name:l,class:r("right-icon")},null)}};return()=>{var l;const{tag:t,size:i,center:k,border:w,isLink:C,required:x}=e,c=(l=e.clickable)!=null?l:C,d={center:k,required:!!x,clickable:c,borderless:!w};return i&&(d[i]=!!i),n(t,{class:r(d),role:c?"button":void 0,tabindex:c?0:void 0,onClick:v},{default:()=>{var f;return[P(),m(),h(),S(),(f=a.extra)==null?void 0:f.call(a)]}})}}});export{z as c,J as s};