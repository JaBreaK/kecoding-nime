import{s as q,a as z,_ as A}from"./D2VWXsg2.js";import{a as F,A as R,n as V,v as E}from"./CPIMTh_-.js";import{s as O}from"./BQwMB-y9.js";import{s as K}from"./CdtElGv0.js";import{_ as U}from"./D7t2mj_N.js";import{a as Y,s as Z}from"./3zhkehnZ.js";import"./DydMEu4S.js";import{u as G}from"./CUgsq2x-.js";import{_ as H}from"./DlAUqK2U.js";import{a as f,k as Q,J as n,z as r,u as i,L as _,q as W,$ as X,I as o,F as k,a0 as w,P as tt,Y as v,O as p,M as e,C as at,Z as et,_ as ot}from"./CS_v0reC.js";import"./BUTK-O5U.js";import"./oIgI_nF1.js";const y=u=>(et("data-v-70529784"),u=u(),ot(),u),st={style:{"padding-bottom":"80px !important"}},nt={key:0,class:"text-center"},rt={key:1},it={class:"m-3"},ct={class:"mx-3"},lt={class:"grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3"},dt={style:{position:"relative"}},_t=["data-src"],ut={class:"ngewibu__cover-mask"},mt={class:"ngewibu__cover-mask-text ngewibu__cover-mask-text--bold text-wrap"},vt={key:0,class:"bstar-video-card__cover-label bstar-video-card__cover-label--normal text-white",style:{"background-color":"rgba(244, 114, 182, 1)","font-weight":"700"}},pt=y(()=>e("i",{class:"fa fa-alarm-clock me-1 text-white"},null,-1)),ft={key:1,class:"bstar-video-card__cover-label bstar-video-card__cover-label--normal text-white",style:{"background-color":"#1989fa","font-weight":"700"}},bt=y(()=>e("i",{class:"fa fa-rss me-1 text-white"},null,-1)),ht={class:"mt-0"},gt={__name:"jadwal",setup(u){const m=f(0),x=F(),b=t=>{const s=["Senin","Selasa","Rabu","Kamis","Jumat","Sabtu","Minggu"],c=parseInt(t,10);return isNaN(c)||c<0||c>7?"Invalid day number":s[c===0?0:c-1]},D=G({selector:"html",attribute:"class",valueDark:"van-theme-dark",valueLight:"van-theme-light"}),l=f([]),h=f(!0),I=async()=>{try{const{data:t}=await $fetch(`${R}/api/jadwal`);l.value=t,$()}catch(t){console.error(t)}finally{h.value=!1}},$=()=>{if(l.value&&l.value){const t=l.value.findIndex(s=>s.is_today);m.value=t!==-1?t:0}};Q(()=>{I()});const N=new Date().toLocaleString("default",{month:"short"});return(t,s)=>{const c=q,S=E,B=O,T=K,j=U,L=Z,P=Y,C=z,J=A,M=X("lazy-load");return o(),n("div",st,[r(c,{onClick:s[0]||(s[0]=d=>("navBacks"in t?t.navBacks:i(V))(i(x))),class:"nav-override",theme:i(D),title:"Jadwal tayang","left-text":"Back","left-arrow":""},null,8,["theme"]),i(h)?(o(),n("div",nt,[r(S,{class:"my-3",type:"spinner",color:"rgba(244, 114, 182, 1)"})])):(o(),n("div",rt,[r(P,{active:i(m),"onUpdate:active":s[1]||(s[1]=d=>W(m)?m.value=d:null),sticky:""},{default:_(()=>[(o(!0),n(k,null,w(i(l),(d,g)=>(o(),tt(L,{key:g},{title:_(()=>[v(p(b(d.day_of_week)),1)]),default:_(()=>[e("div",it,[r(B,null,{default:_(()=>[v(p(b(d.day_of_week)+", "+d.date+" "+i(N)+" 2023"),1)]),_:2},1024)]),e("div",ct,[e("div",lt,[(o(!0),n(k,null,w(i(l)[g].episodes,a=>(o(),n("div",{key:a},[r(j,{to:a.published===1?"/play/"+a.season_id+"/"+a.episode_id:"/play/"+a.season_id,title:a.title,class:"text-decoration-none"},{default:_(()=>[e("div",dt,[at(e("img",{"data-src":"https://origin.ngewibu.workers.dev/?q=im&g="+a.cover+"@720w_405h_1e_1c_90q.webp",alt:"Image description",class:"w-full h-auto object-contain cover"},null,8,_t),[[M]]),e("div",ut,[e("span",mt,p(a.pub_index.replace("Full","Tamat").replace("Perbarui ke","Terbaru").replace("Terbaru","")),1)]),a.published?(o(),n("span",ft,[bt,v("Sudah tayang ")])):(o(),n("span",vt,[pt,v(p(a.pub_time),1)]))]),e("div",ht,[r(T,{class:"judul ng-text",content:a.title},null,8,["content"])])]),_:2},1032,["to","title"])]))),128))])])]),_:2},1024))),128))]),_:1},8,["active"])])),r(C,{bottom:"10vh"}),r(J)])}}},Pt=H(gt,[["__scopeId","data-v-70529784"]]);export{Pt as default};
