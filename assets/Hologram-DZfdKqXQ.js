import{_ as va,al as ae,e as Ft,o as Et,f as it,x as Ln,az as Z,j as ce,g as xn,k as Me,t as ot,at as V,a as ea,c as er,F as De,i as Hn,h as Ht,d as nn,w as be,E as Dn,aY as pu,ak as hh,aq as ee,ax as He,A as nr,aK as mu,b as uh,J as dh,m as hl,aC as hn,aZ as kl,a_ as Bl,a$ as gu,b0 as _u,b1 as vu,aB as xu,ar as yu,as as Mu,b2 as Su,a9 as bu,ao as ri,B as Eu,ay as Qi}from"./index-DYu_zzii.js";import{s as Ui}from"./index-DsMRtZ8_.js";import{s as fh}from"./index-DtoCF517.js";import{s as wu}from"./index-ChSR0hia.js";import{C as Tu,a as Au,_ as Ru}from"./ComponentHologramPromptBuilder-CiZ-PHS8.js";import"./index-CYbgzAzn.js";import"./index-K9Ur5f67.js";import"./index-Ct8vIGh3.js";const xi={electricity:{color:"#eab308",path:"M13 2 4 14h7l-1 8 9-12h-7l1-8z",stroke:!1},water:{color:"#0ea5e9",path:"M12 2.6c-.3 0-.5.1-.7.4C8.7 6.4 5 11.1 5 14.6a7 7 0 0 0 14 0c0-3.5-3.7-8.2-6.3-11.6-.2-.3-.4-.4-.7-.4z",stroke:!1},gas:{color:"#f97316",path:"M12 2c.6 3.1-1.1 4.9-2.7 6.5C7.7 10.1 6 11.9 6 15a6 6 0 0 0 12 0c0-2.2-1-4.1-2.3-5.4.1 1.7-.5 2.9-1.6 3.5.4-4-1.1-7.8-2.1-11.1z",stroke:!1},air:{color:"#14b8a6",path:"M3 8.5h11.5a3 3 0 1 0-3-3M3 15.5h14.5a3 3 0 1 1-3 3M3 12h8",stroke:!0},heat:{color:"#db2777",path:"M7.5 20c-2-2.5 2-4.5 0-7s2-4.5 0-7M12.5 20c-2-2.5 2-4.5 0-7s2-4.5 0-7M17.5 20c-2-2.5 2-4.5 0-7s2-4.5 0-7",stroke:!0},other:{color:"#8b5cf6",path:"M4 16a8 8 0 1 1 16 0M12 16l4.5-5",stroke:!0}},Cu=Object.keys(xi),Aa=6,ph=3,Pu=/^(wh|kwh|mwh|kvarh|m3|m³|nm3|nm³|l|gj|mj|w|kw|mw|(n?m3|n?m³)\/(h|min)|l\/(h|min|s)|kg\/h|t\/h)$/i,Lu=[[/powietrz|spręż|sprez|compressed|\bair\b/i,"air"],[/gaz|\bgas\b|metan|lpg|lng/i,"gas"],[/wod|water|ściek|sciek|sewage/i,"water"],[/ciepł|ciepl|\bheat|\bpar[ay]\b|steam|\bgj\b/i,"heat"],[/energi|energy|\bmoc\b|power|prąd|prad|elektr/i,"electricity"]],Du=/^(w|kw|mw|wh|kwh|mwh|kvarh)$/i,mh=i=>String(i||"").replace(/\s+/g,"");function Iu(i,t=[]){const e=Lu.find(([n])=>n.test(i));return e?e[1]:t.some(n=>Du.test(mh(n)))?"electricity":"other"}function Uu(i=[]){return i.some(t=>Pu.test(mh(t)))}function Nu(i){return i==="kWh"?"kW":i==="MWh"?"MW":i?`${i}/h`:"/h"}const sr=(i,t="")=>{const e=Number(i)||0,n=Math.abs(e),s=e.toLocaleString(void 0,{maximumFractionDigits:n>=100?0:n>=10?1:2});return t?`${s} ${t}`:s},Ti=i=>`${Math.round((Number(i)||0)*100)}%`;function ul(i){const t=Number(i==null?void 0:i.total)||0;return((i==null?void 0:i.machines)||[]).filter(e=>e.value>0).map((e,n)=>({...e,rank:n+1,share:t>0&&i.mode!=="avg"?e.value/t:null}))}function Ou(i=[]){const t=new Map;return i.forEach(e=>{const n=xi[e.medium]||xi.other;ul(e).slice(0,ph).forEach(s=>{const r=t.get(s.machine)||[],a=r.find(l=>l.medium===e.medium);if(a&&a.rank<=s.rank)return;const o={medium:e.medium,rank:s.rank,share:s.share,color:n.color,path:n.path,stroke:n.stroke};t.set(s.machine,[...r.filter(l=>l!==a),o].sort((l,h)=>l.rank-h.rank))})}),t}function Fu({entries:i=[],period:t,nameOf:e,t:n}){const s=[],r=new Set,a=(h,u,p)=>!r.has(`${h}:${u}:${p}`),o=(h,u,p)=>r.add(`${h}:${u}:${p}`);i.forEach(h=>{const u=xi[h.medium]?h.medium:"other",p=ul(h),c=(h.skipped||[]).filter(b=>b.reason==="noisy").length,d={medium:u,param:h.param};if(!p.length){s.push({...d,severity:"info",title:n("hologram.media.reco.noData.title",{param:h.param}),text:c?n("hologram.media.reco.noData.noisy"):n("hologram.media.reco.noData.text",{period:t})});return}const f=b=>sr(b,h.unit);if(h.mode==="avg"){const b=p[0];s.push({...d,severity:"info",machine:b.machine,title:n("hologram.media.reco.avg.title",{param:h.param,name:e(b.machine)}),text:n("hologram.media.reco.avg.text",{value:f(b.value),period:t})});return}let x=null;h.prev_total>0&&h.total/h.prev_total-1>=.15&&(x=p.filter(S=>S.prev!==null&&S.prev!==void 0).sort((S,w)=>w.value-w.prev-(S.value-S.prev))[0]||null,s.push({...d,severity:"warn",machine:x==null?void 0:x.machine,title:n("hologram.media.reco.hallGrowth.title",{param:h.param,pct:Ti(h.total/h.prev_total-1)}),text:n("hologram.media.reco.hallGrowth.text",{value:f(h.total),prev:f(h.prev_total),period:t})+(x?" "+n("hologram.media.reco.hallGrowth.most",{name:e(x.machine),pct:Ti(x.prev>0?x.value/x.prev-1:1)}):"")})),p.slice(0,5).filter(b=>b.prev>0&&b.value/b.prev-1>=.25&&b.value-b.prev>=.05*h.total&&b.machine!==(x==null?void 0:x.machine)&&a("growth",u,b.machine)).slice(0,2).forEach(b=>{o("growth",u,b.machine),s.push({...d,severity:"warn",machine:b.machine,title:n("hologram.media.reco.growth.title",{name:e(b.machine),pct:Ti(b.value/b.prev-1),param:h.param}),text:n("hologram.media.reco.growth.text",{value:f(b.value),prev:f(b.prev),period:t,hint:n(`hologram.media.hint.${u}.growth`)})})}),p.slice(0,3).filter(b=>b.mean>0&&b.base!==null&&b.base/b.mean>=.5&&a("base",u,b.machine)).slice(0,2).forEach(b=>{o("base",u,b.machine),s.push({...d,severity:"warn",machine:b.machine,title:n("hologram.media.reco.base.title",{name:e(b.machine),base:sr(b.base,Nu(h.unit)),pct:Ti(b.base/b.mean)}),text:n(`hologram.media.hint.${u}.base`)})});const m=p.slice(0,3),g=m.reduce((b,S)=>b+(S.share||0),0);if(p.length>=4&&g>=.6)s.push({...d,severity:"info",machine:m[0].machine,title:n("hologram.media.reco.pareto.title",{n:m.length,pct:Ti(g),param:h.param}),text:n("hologram.media.reco.pareto.text",{names:m.map(b=>`${e(b.machine)} ${Ti(b.share)}`).join(", ")})});else{const b=p[0];s.push({...d,severity:"info",machine:b.machine,title:n("hologram.media.reco.top.title",{param:h.param,name:e(b.machine)}),text:n("hologram.media.reco.top.text",{value:f(b.value),period:t,share:Ti(b.share)})})}c&&s.push({...d,severity:"info",title:n("hologram.media.reco.noisy.title",{param:h.param,n:c}),text:n("hologram.media.reco.noData.noisy")})});const l={warn:0,info:1};return s.sort((h,u)=>l[h.severity]-l[u.severity])}const ku=["d","fill","stroke"],Bu={__name:"ComponentHologramMediaIcon",props:{medium:{type:String,default:"other"}},setup(i){const t=i,e=ae(()=>xi[t.medium]||xi.other);return(n,s)=>(Et(),Ft("svg",{class:"holo-media-icon",viewBox:"0 0 24 24",style:Ln({color:e.value.color}),"aria-hidden":"true",focusable:"false"},[it("path",{d:e.value.path,fill:e.value.stroke?"none":"currentColor",stroke:e.value.stroke?"currentColor":"none","stroke-width":"2.4","stroke-linecap":"round","stroke-linejoin":"round"},null,8,ku)],4))}},ca=va(Bu,[["__scopeId","data-v-0d3d96b1"]]),zu=["aria-label","aria-busy"],Hu={class:"holo-media__bar"},Vu={class:"holo-media__title"},Gu={key:1,class:"holo-media__muted"},Wu={key:3,class:"holo-media__groups"},Xu=["title"],$u={class:"holo-media__param-name"},Yu={key:0},qu=["title","onClick"],Ku={class:"holo-media__name"},Zu={key:0,class:"holo-media__muted"},ju={key:4,class:"holo-media__error"},Ju={key:0,class:"holo-media__recos"},Qu={class:"holo-media__note"},td={__name:"ComponentHologramMedia",props:{data:{type:Object,default:null},loading:{type:Boolean,default:!1},error:{type:String,default:""},days:{type:Number,default:7},open:{type:Boolean,default:!1},configured:{type:Boolean,default:!1},canEdit:{type:Boolean,default:!1},nameOf:{type:Function,required:!0}},emits:["update:days","update:open","focus","configure"],setup(i,{emit:t}){const e=i,n=t,s=ae(()=>[1,7,30].map(c=>({value:c,label:Z(`hologram.media.period.d${c}`)}))),r=ae(()=>Z(`hologram.media.period.d${e.days}`)),a=c=>(xi[c]||xi.other).color,o=c=>new Date(c*1e3).toLocaleString(void 0,{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}),l=ae(()=>{var c;return(((c=e.data)==null?void 0:c.media)||[]).map(d=>({...d,top:ul(d).slice(0,ph).map(f=>({...f,name:e.nameOf(f.machine),shown:f.share!==null?`${Math.round(f.share*100)}%`:sr(f.value,d.unit),hint:[`${f.rank}. ${e.nameOf(f.machine)}: ${sr(f.value,d.unit)}${f.share!==null?` (${Math.round(f.share*100)}%)`:""}`,f.partial_from?Z("hologram.media.partial",{time:o(f.partial_from)}):""].filter(Boolean).join(" · ")})),totalText:d.mode==="avg"?Z("hologram.media.average"):d.machines.length?sr(d.total,d.unit):""}))}),h=ae(()=>e.data?Fu({entries:e.data.media||[],period:r.value,nameOf:e.nameOf,t:Z}):[]),u=ae(()=>h.value.filter(c=>c.severity==="warn").length),p={warn:"pi pi-exclamation-triangle",info:"pi pi-info-circle"};return(c,d)=>(Et(),Ft("section",{class:"holo-media","aria-label":V(Z)("hologram.media.title"),"aria-busy":i.loading},[it("div",Hu,[it("span",Vu,[d[3]||(d[3]=it("i",{class:"pi pi-chart-bar","aria-hidden":"true"},null,-1)),Me(ot(V(Z)("hologram.media.title")),1)]),i.configured?(Et(),xn(V(ea),{key:0,modelValue:i.days,options:s.value,optionLabel:"label",optionValue:"value",allowEmpty:!1,size:"small","aria-label":V(Z)("hologram.media.periodLabel"),"onUpdate:modelValue":d[0]||(d[0]=f=>n("update:days",f))},null,8,["modelValue","options","aria-label"])):ce("",!0),i.configured?i.loading&&!i.data?(Et(),xn(V(er),{key:2,width:"22rem",height:"1.7rem"})):(Et(),Ft("div",Wu,[(Et(!0),Ft(De,null,Hn(l.value,f=>(Et(),Ft("div",{key:f.param,class:"holo-media__group"},[it("span",{class:"holo-media__param",title:f.param},[Ht(ca,{medium:f.medium},null,8,["medium"]),it("span",$u,ot(f.param),1),f.totalText?(Et(),Ft("small",Yu,ot(f.totalText),1)):ce("",!0)],8,Xu),(Et(!0),Ft(De,null,Hn(f.top,x=>(Et(),Ft("button",{key:x.machine,type:"button",class:"holo-media__chip",title:x.hint,onClick:m=>n("focus",x.machine)},[it("span",{class:"holo-media__rank",style:Ln({background:a(f.medium)})},ot(x.rank),5),it("span",Ku,ot(x.name),1),it("strong",null,ot(x.shown),1)],8,qu))),128)),f.top.length?ce("",!0):(Et(),Ft("span",Zu,ot(V(Z)("hologram.media.noData")),1))]))),128))])):(Et(),Ft("span",Gu,ot(V(Z)("hologram.media.empty")),1)),i.error?(Et(),Ft("span",ju,[d[4]||(d[4]=it("i",{class:"pi pi-exclamation-triangle","aria-hidden":"true"},null,-1)),Me(ot(V(Z)("hologram.media.error",{msg:i.error})),1)])):ce("",!0),d[5]||(d[5]=it("span",{class:"holo-media__spacer"},null,-1)),h.value.length?(Et(),xn(V(nn),{key:5,label:V(Z)("hologram.media.recoButton"),icon:i.open?"pi pi-chevron-up":"pi pi-lightbulb",severity:"secondary",outlined:"",size:"small",badge:String(h.value.length),badgeSeverity:u.value?"warn":"secondary","aria-expanded":i.open,onClick:d[1]||(d[1]=f=>n("update:open",!i.open))},null,8,["label","icon","badge","badgeSeverity","aria-expanded"])):ce("",!0),i.canEdit?(Et(),xn(V(nn),{key:6,label:V(Z)("hologram.media.configure"),icon:"pi pi-sliders-h",severity:"secondary",outlined:"",size:"small",onClick:d[2]||(d[2]=f=>n("configure"))},null,8,["label"])):ce("",!0)]),i.open&&h.value.length?(Et(),Ft("ul",Ju,[(Et(!0),Ft(De,null,Hn(h.value,(f,x)=>(Et(),Ft("li",{key:x},[(Et(),xn(pu(f.machine?"button":"div"),{type:f.machine?"button":void 0,class:Dn(["holo-media__reco",`is-${f.severity}`]),onClick:m=>f.machine&&n("focus",f.machine)},{default:be(()=>[it("i",{class:Dn(p[f.severity]),"aria-hidden":"true"},null,2),it("div",null,[it("strong",null,[Ht(ca,{medium:f.medium},null,8,["medium"]),Me(" "+ot(f.title),1)]),it("p",null,ot(f.text),1)])]),_:2},1032,["type","class","onClick"]))]))),128)),it("li",Qu,ot(V(Z)("hologram.media.footnote",{period:r.value})),1)])):ce("",!0)],8,zu))}},ed=va(td,[["__scopeId","data-v-67bdacaf"]]),nd={class:"holo-muted"},id=["for"],sd={key:0,class:"holo-muted"},rd={class:"holo-media-dlg__opt"},ad={class:"holo-media-dlg__opt"},od={class:"holo-muted holo-media-dlg__count"},ld={__name:"ComponentHologramMediaDialog",props:{visible:{type:Boolean,default:!1},hologram:{type:Object,default:null},available:{type:Array,default:()=>[]}},emits:["update:visible","saved"],setup(i,{emit:t}){const e=i,n=t,s=hh().proxy,r=(p,c)=>{var d;return(d=s.$toast)==null?void 0:d.add({severity:p,summary:Z(p==="error"?"error":"success"),detail:c,life:p==="error"?5e3:3e3})},a=ee([]),o=ee(!1),l=ae(()=>Cu.map(p=>({value:p,label:Z(`hologram.media.kinds.${p}`)}))),h=ae(()=>a.value.filter(p=>p.selected).length);He(()=>e.visible,p=>{var m,g;if(!p)return;const c=Array.isArray((g=(m=e.hologram)==null?void 0:m.settings)==null?void 0:g.media)?e.hologram.settings.media:null,d=new Map((c||[]).map(b=>[b.param,b.medium])),f=e.available.map(b=>({...b,selected:c?d.has(b.param):Uu(b.units),medium:d.get(b.param)||Iu(b.param,b.units)}));(c||[]).filter(b=>!f.some(S=>S.param===b.param)).forEach(b=>f.push({param:b.param,units:[],machines:0,selected:!0,medium:b.medium}));let x=Aa;f.forEach(b=>{b.selected&&x--<=0&&(b.selected=!1)}),a.value=f.sort((b,S)=>Number(S.selected)-Number(b.selected))},{immediate:!0});async function u(){var c,d;const p=a.value.filter(f=>f.selected).map(f=>({param:f.param,medium:f.medium}));o.value=!0;try{const f=await s.axios(hl(s.$apiHost,hn.hologram,`/${e.hologram.id}/`,(d=(c=s.$store)==null?void 0:c.state)==null?void 0:d.dataEnc,"patch",{settings:{...e.hologram.settings||{},media:p}}));n("saved",f.data),n("update:visible",!1),r("success",Z("hologram.media.dialog.saved"))}catch(f){r("error",f.message)}finally{o.value=!1}}return(p,c)=>(Et(),xn(V(dh),{visible:i.visible,modal:"",header:V(Z)("hologram.media.dialog.title"),style:{width:"52rem",maxWidth:"95vw"},"onUpdate:visible":c[1]||(c[1]=d=>n("update:visible",d))},{footer:be(()=>[it("span",od,ot(V(Z)("hologram.media.dialog.count",{n:h.value,max:V(Aa)})),1),Ht(V(nn),{label:V(Z)("cancel"),severity:"secondary",outlined:"",size:"small",onClick:c[0]||(c[0]=d=>n("update:visible",!1))},null,8,["label"]),Ht(V(nn),{label:V(Z)("hologram.media.dialog.save"),icon:"pi pi-save",severity:"primary",size:"small",loading:o.value,onClick:u},null,8,["label","loading"])]),default:be(()=>[it("p",nd,ot(V(Z)("hologram.media.dialog.hint")),1),Ht(V(nr),{severity:"secondary",size:"small",class:"mb-3"},{default:be(()=>[Me(ot(V(Z)("hologram.media.dialog.how")),1)]),_:1}),Ht(V(fh),{value:a.value,size:"small",dataKey:"param",scrollable:"",scrollHeight:"24rem"},{empty:be(()=>[Me(ot(V(Z)("hologram.media.dialog.empty")),1)]),default:be(()=>[Ht(V(Ui),{style:{width:"3rem"}},{body:be(({data:d,index:f})=>[Ht(V(mu),{modelValue:d.selected,"onUpdate:modelValue":x=>d.selected=x,binary:"",inputId:`holo-media-${f}`,disabled:!d.selected&&h.value>=V(Aa),"aria-label":d.param},null,8,["modelValue","onUpdate:modelValue","inputId","disabled","aria-label"])]),_:1}),Ht(V(Ui),{header:V(Z)("hologram.media.dialog.param")},{body:be(({data:d,index:f})=>[it("label",{for:`holo-media-${f}`,class:"holo-media-dlg__param"},ot(d.param),9,id),d.machines?ce("",!0):(Et(),Ft("small",sd," · "+ot(V(Z)("hologram.media.dialog.missing")),1))]),_:1},8,["header"]),Ht(V(Ui),{header:V(Z)("hologram.media.dialog.unit"),style:{width:"8rem"}},{body:be(({data:d})=>[Me(ot(d.units.join(", ")||"–"),1)]),_:1},8,["header"]),Ht(V(Ui),{header:V(Z)("hologram.media.dialog.machines"),style:{width:"7rem"}},{body:be(({data:d})=>[Me(ot(d.machines),1)]),_:1},8,["header"]),Ht(V(Ui),{header:V(Z)("hologram.media.dialog.medium"),style:{width:"15rem"}},{body:be(({data:d})=>[Ht(V(uh),{modelValue:d.medium,"onUpdate:modelValue":f=>d.medium=f,options:l.value,optionLabel:"label",optionValue:"value",size:"small",fluid:"",disabled:!d.selected,"aria-label":V(Z)("hologram.media.dialog.medium")},{value:be(({value:f})=>[it("span",rd,[Ht(ca,{medium:f},null,8,["medium"]),Me(ot(V(Z)(`hologram.media.kinds.${f}`)),1)])]),option:be(({option:f})=>[it("span",ad,[Ht(ca,{medium:f.value},null,8,["medium"]),Me(ot(f.label),1)])]),_:1},8,["modelValue","onUpdate:modelValue","options","disabled","aria-label"])]),_:1},8,["header"])]),_:1},8,["value"])]),_:1},8,["visible","header"]))}},cd=va(ld,[["__scopeId","data-v-102350cb"]]);var ch;const Ra=(_u||((ch=vu)==null?void 0:ch.get)||(()=>null))("spBv1.0"),ts=i=>Array.isArray(i)?i:Array.isArray(i==null?void 0:i.results)?i.results:Array.isArray(i==null?void 0:i.data)?i.data:[];function hd(i){const t=window.location.protocol==="https:"?"wss://":"ws://",e=String(i||"").trim().replace(/^https?:\/\//i,"").replace(/^wss?:\/\//i,"").replace(/^\/+/,"").replace(/\/+$/,"");if(!e)return"";const n=`${t}${e}`;return/\/mqtt$/i.test(n)?n:`${n}/mqtt`}function ud(i,t){const e=i.survey_low,n=i.survey_high;if(e==null&&n==null)return null;const s=parseFloat((t??"").toString());return!(Number.isNaN(s)||e!=null&&s<Number(e)||n!=null&&s>=Number(n))}function dd({axios:i,apiHost:t,dataEnc:e,onError:n,onConnect:s,onReconnect:r,onSignal:a}={}){const o=kl({}),l=ee(!1),h=kl({messages:0,signals:0,lastAt:0}),u=ee([]);let p=null,c=[],d=[];const f=(tt,v="",T="get",$=null)=>i(hl(t,tt,v,e(),T,$)),x=tt=>{var v;return((v=c.find(T=>Number(T.id)===Number(tt)))==null?void 0:v.name)||""},m=tt=>{var v;return((v=d.find(T=>Number(T.id)===Number(tt)))==null?void 0:v.name)||""};function g(tt){const v=String(tt);return o[v]||(o[v]={color:null,nameStatus:"",typeEvent:null,date:"",updatedAt:0,substatuses:[],signals:{}}),o[v]}function b(tt,v){var W;const T=(W=tt.profil)==null?void 0:W[0];if(!T)return;const $=g(tt.machine);$.color=T.colorBackground||$.color,$.nameStatus=T.nameStatus||"",$.typeEvent=T.typeEvent??null,$.date=v}function S(tt,v){var K;const T=((K=tt.profil)==null?void 0:K[0])||{},$=g(tt.machine),W={tag:tt.tag,target:x(T.aliasValue)||tt.tag,value:v,unit:m(T.unitValue)},N=$.substatuses.findIndex(_=>_.tag===tt.tag);N>=0?$.substatuses.splice(N,1,W):$.substatuses.push(W)}function w(tt,v,T,{lastEvent:$=!1,machine:W=null}={}){return u.value.filter(N=>!(N.tag!==tt||W&&Number(N.machine)!==Number(W)||!$&&N.topic!==v||$&&v&&N.topic&&N.topic!==v)).map(N=>{var y,R;const K=(R=(y=N.profil)==null?void 0:y[0])==null?void 0:R.main,_=ud(N,T);let M=!1;return K===1?_!==null?M=_:M=(N.value??"").toString().toLowerCase()===(T??"").toString().toLowerCase()||N.value==="":K===2&&(M=N.value===""||N.value==null),M?N:null}).filter(Boolean)}function q(tt,v,T,$,W){const N=w(tt,v,T,W),K=N.filter(y=>{var R,D;return((D=(R=y.profil)==null?void 0:R[0])==null?void 0:D.main)===1&&y.value!==""}),_=N.filter(y=>{var R,D;return((D=(R=y.profil)==null?void 0:R[0])==null?void 0:D.main)===1&&y.value===""});(K.length?K:_).slice(0,1).forEach(y=>b(y,$)),N.filter(y=>{var R,D;return((D=(R=y.profil)==null?void 0:R[0])==null?void 0:D.main)===2}).forEach(y=>S(y,T));const M=new Set;if(N.forEach(y=>{const R=g(y.machine);R.signals[tt]=T,M.add(y.machine)}),!(W!=null&&W.lastEvent)&&M.size){const y=Date.now();h.signals+=1,h.lastAt=y,M.forEach(R=>{g(R).updatedAt=y,a&&a(R,tt,T)})}}function I(){if(p)try{p.end(!0)}catch{}p=null,l.value=!1}async function C(tt){var R,D;if(I(),Object.keys(o).forEach(U=>delete o[U]),h.messages=0,h.signals=0,h.lastAt=0,!tt)return;const v=(U,J)=>U.catch(et=>(n&&n(et.message),{data:J})),[T,$,W,N,K]=await Promise.all([v(f(hn.settings,""),{results:[]}),v(f(hn.statusesProfilesList,"/"),[]),v(f(hn.machines,`/?server=${tt}&limit=1000`),[]),f(hn.listAliases,"/").catch(()=>({data:[]})),f(hn.listUnits,"/").catch(()=>({data:[]}))]);c=ts(N.data),d=ts(K.data);const _=ts($.data),M=[];ts(W.data).forEach(U=>{(U.machine_status||[]).forEach(J=>{var B,k;const et=Array.isArray(J.profil)?(k=(B=J.profil)==null?void 0:B[0])==null?void 0:k.id:J.profil;M.push({...J,machine:J.machine??U.id,profil:_.filter(st=>Number(st.id)===Number(et))})})}),u.value=M;try{const U=await f(hn.events,"/last/","post",{server:tt,line:0});ts(U.data).forEach(J=>{q(J.tag,J.topic,J.value,Bl(J.timestamp_add),{lastEvent:!0,machine:J.machine})})}catch(U){n&&n(U.message)}let y={};try{y=JSON.parse(((D=(R=ts(T.data))==null?void 0:R[0])==null?void 0:D.data)||"{}")}catch{y={}}G(y)}function G(tt){const v=hd(tt.adress);if(!v)return;let T;try{T=new URL(v)}catch{return}const $={clientId:(tt.nameClient||"omnimes-hologram")+Math.floor(Math.random()*1e7),reconnectPeriod:Number(tt.reconnectPeriod)||1e3,username:tt.login,password:tt.password};T.protocol!=="wss:"&&!T.port&&tt.port&&($.port=Number(tt.port)||8083),p=gu.connect(v,$),p.on("connect",()=>{l.value=!0,p.subscribe(tt.topic||"#",{qos:Number(tt.qos)||0}),s&&s()}),p.on("reconnect",()=>{l.value=!1,r&&r()}),p.on("message",(W,N)=>{let K=null;try{K=Ra&&typeof Ra.decodePayload=="function"?Ra.decodePayload(N):null}catch{K=null}if(!K||!Array.isArray(K.metrics))return;h.messages+=1;const _=[...K.metrics];K.metrics.forEach(M=>{var y;(M==null?void 0:M.type)==="DataSet"&&((y=M.value)!=null&&y.rows)&&M.name&&M.value.rows.forEach((R,D)=>{R&&_.push({name:`${M.name}/${D+1}`,value:R[0],timestamp:K.timestamp})})}),_.forEach(M=>{var R,D;if((M==null?void 0:M.name)===void 0||(M==null?void 0:M.type)==="DataSet")return;const y=((D=(R=M.value)==null?void 0:R.toString)==null?void 0:D.call(R))??M.value;q(M.name,W,y,Bl(M.timestamp||K.timestamp))})})}return{live:o,connected:l,activity:h,statuses:u,start:C,stop:I}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dl="169",As={ROTATE:0,DOLLY:1,PAN:2},bs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fd=0,zl=1,pd=2,gh=1,_h=2,Qn=3,yi=0,an=1,In=2,_i=0,zi=1,ha=2,Hl=3,Vl=4,md=5,Ni=100,gd=101,_d=102,vd=103,xd=104,yd=200,Md=201,Sd=202,bd=203,vo=204,xo=205,Ed=206,wd=207,Td=208,Ad=209,Rd=210,Cd=211,Pd=212,Ld=213,Dd=214,yo=0,Mo=1,So=2,Ps=3,bo=4,Eo=5,wo=6,To=7,vh=0,Id=1,Ud=2,vi=0,Nd=1,Od=2,Fd=3,xh=4,kd=5,Bd=6,zd=7,yh=300,Ls=301,Ds=302,Ao=303,Ro=304,xa=306,Mi=1e3,ki=1001,Co=1002,un=1003,Hd=1004,Sr=1005,En=1006,Ca=1007,Bi=1008,ni=1009,Mh=1010,Sh=1011,hr=1012,fl=1013,Hi=1014,Gn=1015,mr=1016,pl=1017,ml=1018,Is=1020,bh=35902,Eh=1021,wh=1022,Nn=1023,Th=1024,Ah=1025,Rs=1026,Us=1027,gl=1028,_l=1029,Rh=1030,vl=1031,xl=1033,na=33776,ia=33777,sa=33778,ra=33779,Po=35840,Lo=35841,Do=35842,Io=35843,Uo=36196,No=37492,Oo=37496,Fo=37808,ko=37809,Bo=37810,zo=37811,Ho=37812,Vo=37813,Go=37814,Wo=37815,Xo=37816,$o=37817,Yo=37818,qo=37819,Ko=37820,Zo=37821,aa=36492,jo=36494,Jo=36495,Ch=36283,Qo=36284,tl=36285,el=36286,Vd=3200,Gd=3201,Ph=0,Wd=1,gi="",Ke="srgb",bi="srgb-linear",yl="display-p3",ya="display-p3-linear",ua="linear",Se="srgb",da="rec709",fa="p3",es=7680,Gl=519,Xd=512,$d=513,Yd=514,Lh=515,qd=516,Kd=517,Zd=518,jd=519,nl=35044,Wl="300 es",ei=2e3,pa=2001;class Wi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xl=1234567;const rr=Math.PI/180,ur=180/Math.PI;function Wn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]).toLowerCase()}function Ve(i,t,e){return Math.max(t,Math.min(e,i))}function Ml(i,t){return(i%t+t)%t}function Jd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Qd(i,t,e){return i!==t?(e-i)/(t-i):0}function ar(i,t,e){return(1-e)*i+e*t}function tf(i,t,e,n){return ar(i,t,1-Math.exp(-e*n))}function ef(i,t=1){return t-Math.abs(Ml(i,t*2)-t)}function nf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function sf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function rf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function af(i,t){return i+Math.random()*(t-i)}function of(i){return i*(.5-Math.random())}function lf(i){i!==void 0&&(Xl=i);let t=Xl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function cf(i){return i*rr}function hf(i){return i*ur}function uf(i){return(i&i-1)===0&&i!==0}function df(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ff(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function pf(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),h=r((t+n)/2),u=a((t+n)/2),p=r((t-n)/2),c=a((t-n)/2),d=r((n-t)/2),f=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*p,l*c,o*h);break;case"YZY":i.set(l*c,o*u,l*p,o*h);break;case"ZXZ":i.set(l*p,l*c,o*u,o*h);break;case"XZX":i.set(o*u,l*f,l*d,o*h);break;case"YXY":i.set(l*d,o*u,l*f,o*h);break;case"ZYZ":i.set(l*f,l*d,o*u,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Un(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const zn={DEG2RAD:rr,RAD2DEG:ur,generateUUID:Wn,clamp:Ve,euclideanModulo:Ml,mapLinear:Jd,inverseLerp:Qd,lerp:ar,damp:tf,pingpong:ef,smoothstep:nf,smootherstep:sf,randInt:rf,randFloat:af,randFloatSpread:of,seededRandom:lf,degToRad:cf,radToDeg:hf,isPowerOfTwo:uf,ceilPowerOfTwo:df,floorPowerOfTwo:ff,setQuaternionFromProperEuler:pf,normalize:ge,denormalize:Un};class xt{constructor(t=0,e=0){xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qt{constructor(t,e,n,s,r,a,o,l,h){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,h)}set(t,e,n,s,r,a,o,l,h){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],h=n[1],u=n[4],p=n[7],c=n[2],d=n[5],f=n[8],x=s[0],m=s[3],g=s[6],b=s[1],S=s[4],w=s[7],q=s[2],I=s[5],C=s[8];return r[0]=a*x+o*b+l*q,r[3]=a*m+o*S+l*I,r[6]=a*g+o*w+l*C,r[1]=h*x+u*b+p*q,r[4]=h*m+u*S+p*I,r[7]=h*g+u*w+p*C,r[2]=c*x+d*b+f*q,r[5]=c*m+d*S+f*I,r[8]=c*g+d*w+f*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],u=t[8];return e*a*u-e*o*h-n*r*u+n*o*l+s*r*h-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],u=t[8],p=u*a-o*h,c=o*l-u*r,d=h*r-a*l,f=e*p+n*c+s*d;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/f;return t[0]=p*x,t[1]=(s*h-u*n)*x,t[2]=(o*n-s*a)*x,t[3]=c*x,t[4]=(u*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=d*x,t[7]=(n*l-h*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*a+h*o)+a+t,-s*h,s*l,-s*(-h*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Pa.makeScale(t,e)),this}rotate(t){return this.premultiply(Pa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Pa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Pa=new Qt;function Dh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ma(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function mf(){const i=ma("canvas");return i.style.display="block",i}const $l={};function oa(i){i in $l||($l[i]=!0,console.warn(i))}function gf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function _f(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function vf(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Yl=new Qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ql=new Qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Gs={[bi]:{transfer:ua,primaries:da,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Ke]:{transfer:Se,primaries:da,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ya]:{transfer:ua,primaries:fa,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(ql),fromReference:i=>i.applyMatrix3(Yl)},[yl]:{transfer:Se,primaries:fa,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(ql),fromReference:i=>i.applyMatrix3(Yl).convertLinearToSRGB()}},xf=new Set([bi,ya]),me={enabled:!0,_workingColorSpace:bi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!xf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Gs[t].toReference,s=Gs[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Gs[i].primaries},getTransfer:function(i){return i===gi?ua:Gs[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Gs[t].luminanceCoefficients)}};function Cs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function La(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ns;class yf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ns===void 0&&(ns=ma("canvas")),ns.width=t.width,ns.height=t.height;const n=ns.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ns}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ma("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Cs(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Cs(e[n]/255)*255):e[n]=Cs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Mf=0;class Ih{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=Wn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Da(s[a].image)):r.push(Da(s[a]))}else r=Da(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Da(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sf=0;class Ze extends Wi{constructor(t=Ze.DEFAULT_IMAGE,e=Ze.DEFAULT_MAPPING,n=ki,s=ki,r=En,a=Bi,o=Nn,l=ni,h=Ze.DEFAULT_ANISOTROPY,u=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=Wn(),this.name="",this.source=new Ih(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mi:t.x=t.x-Math.floor(t.x);break;case ki:t.x=t.x<0?0:1;break;case Co:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mi:t.y=t.y-Math.floor(t.y);break;case ki:t.y=t.y<0?0:1;break;case Co:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=yh;Ze.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,s=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,h=l[0],u=l[4],p=l[8],c=l[1],d=l[5],f=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(u-c)<.01&&Math.abs(p-x)<.01&&Math.abs(f-m)<.01){if(Math.abs(u+c)<.1&&Math.abs(p+x)<.1&&Math.abs(f+m)<.1&&Math.abs(h+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(h+1)/2,w=(d+1)/2,q=(g+1)/2,I=(u+c)/4,C=(p+x)/4,G=(f+m)/4;return S>w&&S>q?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=I/n,r=C/n):w>q?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=I/s,r=G/s):q<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(q),n=C/r,s=G/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-f)*(m-f)+(p-x)*(p-x)+(c-u)*(c-u));return Math.abs(b)<.001&&(b=1),this.x=(m-f)/b,this.y=(p-x)/b,this.z=(c-u)/b,this.w=Math.acos((h+d+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bf extends Wi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ze(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ih(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends bf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Uh extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ef extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ii{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],h=n[s+1],u=n[s+2],p=n[s+3];const c=r[a+0],d=r[a+1],f=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=h,t[e+2]=u,t[e+3]=p;return}if(o===1){t[e+0]=c,t[e+1]=d,t[e+2]=f,t[e+3]=x;return}if(p!==x||l!==c||h!==d||u!==f){let m=1-o;const g=l*c+h*d+u*f+p*x,b=g>=0?1:-1,S=1-g*g;if(S>Number.EPSILON){const q=Math.sqrt(S),I=Math.atan2(q,g*b);m=Math.sin(m*I)/q,o=Math.sin(o*I)/q}const w=o*b;if(l=l*m+c*w,h=h*m+d*w,u=u*m+f*w,p=p*m+x*w,m===1-o){const q=1/Math.sqrt(l*l+h*h+u*u+p*p);l*=q,h*=q,u*=q,p*=q}}t[e]=l,t[e+1]=h,t[e+2]=u,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],h=n[s+2],u=n[s+3],p=r[a],c=r[a+1],d=r[a+2],f=r[a+3];return t[e]=o*f+u*p+l*d-h*c,t[e+1]=l*f+u*c+h*p-o*d,t[e+2]=h*f+u*d+o*c-l*p,t[e+3]=u*f-o*p-l*c-h*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,h=o(n/2),u=o(s/2),p=o(r/2),c=l(n/2),d=l(s/2),f=l(r/2);switch(a){case"XYZ":this._x=c*u*p+h*d*f,this._y=h*d*p-c*u*f,this._z=h*u*f+c*d*p,this._w=h*u*p-c*d*f;break;case"YXZ":this._x=c*u*p+h*d*f,this._y=h*d*p-c*u*f,this._z=h*u*f-c*d*p,this._w=h*u*p+c*d*f;break;case"ZXY":this._x=c*u*p-h*d*f,this._y=h*d*p+c*u*f,this._z=h*u*f+c*d*p,this._w=h*u*p-c*d*f;break;case"ZYX":this._x=c*u*p-h*d*f,this._y=h*d*p+c*u*f,this._z=h*u*f-c*d*p,this._w=h*u*p+c*d*f;break;case"YZX":this._x=c*u*p+h*d*f,this._y=h*d*p+c*u*f,this._z=h*u*f-c*d*p,this._w=h*u*p-c*d*f;break;case"XZY":this._x=c*u*p-h*d*f,this._y=h*d*p-c*u*f,this._z=h*u*f+c*d*p,this._w=h*u*p+c*d*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],h=e[2],u=e[6],p=e[10],c=n+o+p;if(c>0){const d=.5/Math.sqrt(c+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-h)*d,this._z=(a-s)*d}else if(n>o&&n>p){const d=2*Math.sqrt(1+n-o-p);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+h)/d}else if(o>p){const d=2*Math.sqrt(1+o-n-p);this._w=(r-h)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+p-n-o);this._w=(a-s)/d,this._x=(r+h)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ve(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,h=e._z,u=e._w;return this._x=n*u+a*o+s*h-r*l,this._y=s*u+a*l+r*o-n*h,this._z=r*u+a*h+n*l-s*o,this._w=a*u-n*o-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const h=Math.sqrt(l),u=Math.atan2(h,o),p=Math.sin((1-e)*u)/h,c=Math.sin(e*u)/h;return this._w=a*p+this._w*c,this._x=n*p+this._x*c,this._y=s*p+this._y*c,this._z=r*p+this._z*c,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Kl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Kl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,h=2*(a*s-o*n),u=2*(o*e-r*s),p=2*(r*n-a*e);return this.x=e+l*h+a*p-o*u,this.y=n+l*u+o*h-r*p,this.z=s+l*p+r*u-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ia.copy(this).projectOnVector(t),this.sub(Ia)}reflect(t){return this.sub(Ia.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ia=new F,Kl=new ii;class Xi{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Rn):Rn.fromBufferAttribute(r,a),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),br.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),br.copy(n.boundingBox)),br.applyMatrix4(t.matrixWorld),this.union(br)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ws),Er.subVectors(this.max,Ws),is.subVectors(t.a,Ws),ss.subVectors(t.b,Ws),rs.subVectors(t.c,Ws),ai.subVectors(ss,is),oi.subVectors(rs,ss),Ai.subVectors(is,rs);let e=[0,-ai.z,ai.y,0,-oi.z,oi.y,0,-Ai.z,Ai.y,ai.z,0,-ai.x,oi.z,0,-oi.x,Ai.z,0,-Ai.x,-ai.y,ai.x,0,-oi.y,oi.x,0,-Ai.y,Ai.x,0];return!Ua(e,is,ss,rs,Er)||(e=[1,0,0,0,1,0,0,0,1],!Ua(e,is,ss,rs,Er))?!1:(wr.crossVectors(ai,oi),e=[wr.x,wr.y,wr.z],Ua(e,is,ss,rs,Er))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Yn=[new F,new F,new F,new F,new F,new F,new F,new F],Rn=new F,br=new Xi,is=new F,ss=new F,rs=new F,ai=new F,oi=new F,Ai=new F,Ws=new F,Er=new F,wr=new F,Ri=new F;function Ua(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ri.fromArray(i,r);const o=s.x*Math.abs(Ri.x)+s.y*Math.abs(Ri.y)+s.z*Math.abs(Ri.z),l=t.dot(Ri),h=e.dot(Ri),u=n.dot(Ri);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>o)return!1}return!0}const wf=new Xi,Xs=new F,Na=new F;class gr{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):wf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xs.subVectors(t,this.center);const e=Xs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Xs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Na.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xs.copy(t.center).add(Na)),this.expandByPoint(Xs.copy(t.center).sub(Na))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new F,Oa=new F,Tr=new F,li=new F,Fa=new F,Ar=new F,ka=new F;class Sl{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(qn.copy(this.origin).addScaledVector(this.direction,e),qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Oa.copy(t).add(e).multiplyScalar(.5),Tr.copy(e).sub(t).normalize(),li.copy(this.origin).sub(Oa);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Tr),o=li.dot(this.direction),l=-li.dot(Tr),h=li.lengthSq(),u=Math.abs(1-a*a);let p,c,d,f;if(u>0)if(p=a*l-o,c=a*o-l,f=r*u,p>=0)if(c>=-f)if(c<=f){const x=1/u;p*=x,c*=x,d=p*(p+a*c+2*o)+c*(a*p+c+2*l)+h}else c=r,p=Math.max(0,-(a*c+o)),d=-p*p+c*(c+2*l)+h;else c=-r,p=Math.max(0,-(a*c+o)),d=-p*p+c*(c+2*l)+h;else c<=-f?(p=Math.max(0,-(-a*r+o)),c=p>0?-r:Math.min(Math.max(-r,-l),r),d=-p*p+c*(c+2*l)+h):c<=f?(p=0,c=Math.min(Math.max(-r,-l),r),d=c*(c+2*l)+h):(p=Math.max(0,-(a*r+o)),c=p>0?r:Math.min(Math.max(-r,-l),r),d=-p*p+c*(c+2*l)+h);else c=a>0?-r:r,p=Math.max(0,-(a*c+o)),d=-p*p+c*(c+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Oa).addScaledVector(Tr,c),d}intersectSphere(t,e){qn.subVectors(t.center,this.origin);const n=qn.dot(this.direction),s=qn.dot(qn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const h=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,c=this.origin;return h>=0?(n=(t.min.x-c.x)*h,s=(t.max.x-c.x)*h):(n=(t.max.x-c.x)*h,s=(t.min.x-c.x)*h),u>=0?(r=(t.min.y-c.y)*u,a=(t.max.y-c.y)*u):(r=(t.max.y-c.y)*u,a=(t.min.y-c.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-c.z)*p,l=(t.max.z-c.z)*p):(o=(t.max.z-c.z)*p,l=(t.min.z-c.z)*p),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,qn)!==null}intersectTriangle(t,e,n,s,r){Fa.subVectors(e,t),Ar.subVectors(n,t),ka.crossVectors(Fa,Ar);let a=this.direction.dot(ka),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;li.subVectors(this.origin,t);const l=o*this.direction.dot(Ar.crossVectors(li,Ar));if(l<0)return null;const h=o*this.direction.dot(Fa.cross(li));if(h<0||l+h>a)return null;const u=-o*li.dot(ka);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(t,e,n,s,r,a,o,l,h,u,p,c,d,f,x,m){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,h,u,p,c,d,f,x,m)}set(t,e,n,s,r,a,o,l,h,u,p,c,d,f,x,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=h,g[6]=u,g[10]=p,g[14]=c,g[3]=d,g[7]=f,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/as.setFromMatrixColumn(t,0).length(),r=1/as.setFromMatrixColumn(t,1).length(),a=1/as.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),h=Math.sin(s),u=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){const c=a*u,d=a*p,f=o*u,x=o*p;e[0]=l*u,e[4]=-l*p,e[8]=h,e[1]=d+f*h,e[5]=c-x*h,e[9]=-o*l,e[2]=x-c*h,e[6]=f+d*h,e[10]=a*l}else if(t.order==="YXZ"){const c=l*u,d=l*p,f=h*u,x=h*p;e[0]=c+x*o,e[4]=f*o-d,e[8]=a*h,e[1]=a*p,e[5]=a*u,e[9]=-o,e[2]=d*o-f,e[6]=x+c*o,e[10]=a*l}else if(t.order==="ZXY"){const c=l*u,d=l*p,f=h*u,x=h*p;e[0]=c-x*o,e[4]=-a*p,e[8]=f+d*o,e[1]=d+f*o,e[5]=a*u,e[9]=x-c*o,e[2]=-a*h,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const c=a*u,d=a*p,f=o*u,x=o*p;e[0]=l*u,e[4]=f*h-d,e[8]=c*h+x,e[1]=l*p,e[5]=x*h+c,e[9]=d*h-f,e[2]=-h,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const c=a*l,d=a*h,f=o*l,x=o*h;e[0]=l*u,e[4]=x-c*p,e[8]=f*p+d,e[1]=p,e[5]=a*u,e[9]=-o*u,e[2]=-h*u,e[6]=d*p+f,e[10]=c-x*p}else if(t.order==="XZY"){const c=a*l,d=a*h,f=o*l,x=o*h;e[0]=l*u,e[4]=-p,e[8]=h*u,e[1]=c*p+x,e[5]=a*u,e[9]=d*p-f,e[2]=f*p-d,e[6]=o*u,e[10]=x*p+c}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Tf,t,Af)}lookAt(t,e,n){const s=this.elements;return gn.subVectors(t,e),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),ci.crossVectors(n,gn),ci.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),ci.crossVectors(n,gn)),ci.normalize(),Rr.crossVectors(gn,ci),s[0]=ci.x,s[4]=Rr.x,s[8]=gn.x,s[1]=ci.y,s[5]=Rr.y,s[9]=gn.y,s[2]=ci.z,s[6]=Rr.z,s[10]=gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],h=n[12],u=n[1],p=n[5],c=n[9],d=n[13],f=n[2],x=n[6],m=n[10],g=n[14],b=n[3],S=n[7],w=n[11],q=n[15],I=s[0],C=s[4],G=s[8],tt=s[12],v=s[1],T=s[5],$=s[9],W=s[13],N=s[2],K=s[6],_=s[10],M=s[14],y=s[3],R=s[7],D=s[11],U=s[15];return r[0]=a*I+o*v+l*N+h*y,r[4]=a*C+o*T+l*K+h*R,r[8]=a*G+o*$+l*_+h*D,r[12]=a*tt+o*W+l*M+h*U,r[1]=u*I+p*v+c*N+d*y,r[5]=u*C+p*T+c*K+d*R,r[9]=u*G+p*$+c*_+d*D,r[13]=u*tt+p*W+c*M+d*U,r[2]=f*I+x*v+m*N+g*y,r[6]=f*C+x*T+m*K+g*R,r[10]=f*G+x*$+m*_+g*D,r[14]=f*tt+x*W+m*M+g*U,r[3]=b*I+S*v+w*N+q*y,r[7]=b*C+S*T+w*K+q*R,r[11]=b*G+S*$+w*_+q*D,r[15]=b*tt+S*W+w*M+q*U,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],h=t[13],u=t[2],p=t[6],c=t[10],d=t[14],f=t[3],x=t[7],m=t[11],g=t[15];return f*(+r*l*p-s*h*p-r*o*c+n*h*c+s*o*d-n*l*d)+x*(+e*l*d-e*h*c+r*a*c-s*a*d+s*h*u-r*l*u)+m*(+e*h*p-e*o*d-r*a*p+n*a*d+r*o*u-n*h*u)+g*(-s*o*u-e*l*p+e*o*c+s*a*p-n*a*c+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],u=t[8],p=t[9],c=t[10],d=t[11],f=t[12],x=t[13],m=t[14],g=t[15],b=p*m*h-x*c*h+x*l*d-o*m*d-p*l*g+o*c*g,S=f*c*h-u*m*h-f*l*d+a*m*d+u*l*g-a*c*g,w=u*x*h-f*p*h+f*o*d-a*x*d-u*o*g+a*p*g,q=f*p*l-u*x*l-f*o*c+a*x*c+u*o*m-a*p*m,I=e*b+n*S+s*w+r*q;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/I;return t[0]=b*C,t[1]=(x*c*r-p*m*r-x*s*d+n*m*d+p*s*g-n*c*g)*C,t[2]=(o*m*r-x*l*r+x*s*h-n*m*h-o*s*g+n*l*g)*C,t[3]=(p*l*r-o*c*r-p*s*h+n*c*h+o*s*d-n*l*d)*C,t[4]=S*C,t[5]=(u*m*r-f*c*r+f*s*d-e*m*d-u*s*g+e*c*g)*C,t[6]=(f*l*r-a*m*r-f*s*h+e*m*h+a*s*g-e*l*g)*C,t[7]=(a*c*r-u*l*r+u*s*h-e*c*h-a*s*d+e*l*d)*C,t[8]=w*C,t[9]=(f*p*r-u*x*r-f*n*d+e*x*d+u*n*g-e*p*g)*C,t[10]=(a*x*r-f*o*r+f*n*h-e*x*h-a*n*g+e*o*g)*C,t[11]=(u*o*r-a*p*r-u*n*h+e*p*h+a*n*d-e*o*d)*C,t[12]=q*C,t[13]=(u*x*s-f*p*s+f*n*c-e*x*c-u*n*m+e*p*m)*C,t[14]=(f*o*s-a*x*s-f*n*l+e*x*l+a*n*m-e*o*m)*C,t[15]=(a*p*s-u*o*s+u*n*l-e*p*l-a*n*c+e*o*c)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,h=r*a,u=r*o;return this.set(h*a+n,h*o-s*l,h*l+s*o,0,h*o+s*l,u*o+n,u*l-s*a,0,h*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,h=r+r,u=a+a,p=o+o,c=r*h,d=r*u,f=r*p,x=a*u,m=a*p,g=o*p,b=l*h,S=l*u,w=l*p,q=n.x,I=n.y,C=n.z;return s[0]=(1-(x+g))*q,s[1]=(d+w)*q,s[2]=(f-S)*q,s[3]=0,s[4]=(d-w)*I,s[5]=(1-(c+g))*I,s[6]=(m+b)*I,s[7]=0,s[8]=(f+S)*C,s[9]=(m-b)*C,s[10]=(1-(c+x))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=as.set(s[0],s[1],s[2]).length();const a=as.set(s[4],s[5],s[6]).length(),o=as.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Cn.copy(this);const h=1/r,u=1/a,p=1/o;return Cn.elements[0]*=h,Cn.elements[1]*=h,Cn.elements[2]*=h,Cn.elements[4]*=u,Cn.elements[5]*=u,Cn.elements[6]*=u,Cn.elements[8]*=p,Cn.elements[9]*=p,Cn.elements[10]*=p,e.setFromRotationMatrix(Cn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=ei){const l=this.elements,h=2*r/(e-t),u=2*r/(n-s),p=(e+t)/(e-t),c=(n+s)/(n-s);let d,f;if(o===ei)d=-(a+r)/(a-r),f=-2*a*r/(a-r);else if(o===pa)d=-a/(a-r),f=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=u,l[9]=c,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=ei){const l=this.elements,h=1/(e-t),u=1/(n-s),p=1/(a-r),c=(e+t)*h,d=(n+s)*u;let f,x;if(o===ei)f=(a+r)*p,x=-2*p;else if(o===pa)f=r*p,x=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-c,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const as=new F,Cn=new ue,Tf=new F(0,0,0),Af=new F(1,1,1),ci=new F,Rr=new F,gn=new F,Zl=new ue,jl=new ii;class An{constructor(t=0,e=0,n=0,s=An.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],h=s[5],u=s[9],p=s[2],c=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(c,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ve(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(c,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(c,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Zl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jl.setFromEuler(this),this.setFromQuaternion(jl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}An.DEFAULT_ORDER="XYZ";class bl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Rf=0;const Jl=new F,os=new ii,Kn=new ue,Cr=new F,$s=new F,Cf=new F,Pf=new ii,Ql=new F(1,0,0),tc=new F(0,1,0),ec=new F(0,0,1),nc={type:"added"},Lf={type:"removed"},ls={type:"childadded",child:null},Ba={type:"childremoved",child:null};class Ge extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ge.DEFAULT_UP.clone();const t=new F,e=new An,n=new ii,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new Qt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=Ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.multiply(os),this}rotateOnWorldAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.premultiply(os),this}rotateX(t){return this.rotateOnAxis(Ql,t)}rotateY(t){return this.rotateOnAxis(tc,t)}rotateZ(t){return this.rotateOnAxis(ec,t)}translateOnAxis(t,e){return Jl.copy(t).applyQuaternion(this.quaternion),this.position.add(Jl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ql,t)}translateY(t){return this.translateOnAxis(tc,t)}translateZ(t){return this.translateOnAxis(ec,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Cr.copy(t):Cr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt($s,Cr,this.up):Kn.lookAt(Cr,$s,this.up),this.quaternion.setFromRotationMatrix(Kn),s&&(Kn.extractRotation(s.matrixWorld),os.setFromRotationMatrix(Kn),this.quaternion.premultiply(os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nc),ls.child=t,this.dispatchEvent(ls),ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Lf),Ba.child=t,this.dispatchEvent(Ba),Ba.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nc),ls.child=t,this.dispatchEvent(ls),ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,t,Cf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,Pf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){const p=l[h];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),h=a(t.textures),u=a(t.images),p=a(t.shapes),c=a(t.skeletons),d=a(t.animations),f=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),c.length>0&&(n.skeletons=c),d.length>0&&(n.animations=d),f.length>0&&(n.nodes=f)}return n.object=s,n;function a(o){const l=[];for(const h in o){const u=o[h];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ge.DEFAULT_UP=new F(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new F,Zn=new F,za=new F,jn=new F,cs=new F,hs=new F,ic=new F,Ha=new F,Va=new F,Ga=new F,Wa=new ve,Xa=new ve,$a=new ve;class wn{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Pn.subVectors(t,e),s.cross(Pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Pn.subVectors(s,e),Zn.subVectors(n,e),za.subVectors(t,e);const a=Pn.dot(Pn),o=Pn.dot(Zn),l=Pn.dot(za),h=Zn.dot(Zn),u=Zn.dot(za),p=a*h-o*o;if(p===0)return r.set(0,0,0),null;const c=1/p,d=(h*l-o*u)*c,f=(a*u-o*l)*c;return r.set(1-d-f,f,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,jn.x),l.addScaledVector(a,jn.y),l.addScaledVector(o,jn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Wa.setScalar(0),Xa.setScalar(0),$a.setScalar(0),Wa.fromBufferAttribute(t,e),Xa.fromBufferAttribute(t,n),$a.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Wa,r.x),a.addScaledVector(Xa,r.y),a.addScaledVector($a,r.z),a}static isFrontFacing(t,e,n,s){return Pn.subVectors(n,e),Zn.subVectors(t,e),Pn.cross(Zn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Pn.cross(Zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return wn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return wn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return wn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;cs.subVectors(s,n),hs.subVectors(r,n),Ha.subVectors(t,n);const l=cs.dot(Ha),h=hs.dot(Ha);if(l<=0&&h<=0)return e.copy(n);Va.subVectors(t,s);const u=cs.dot(Va),p=hs.dot(Va);if(u>=0&&p<=u)return e.copy(s);const c=l*p-u*h;if(c<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(cs,a);Ga.subVectors(t,r);const d=cs.dot(Ga),f=hs.dot(Ga);if(f>=0&&d<=f)return e.copy(r);const x=d*h-l*f;if(x<=0&&h>=0&&f<=0)return o=h/(h-f),e.copy(n).addScaledVector(hs,o);const m=u*f-d*p;if(m<=0&&p-u>=0&&d-f>=0)return ic.subVectors(r,s),o=(p-u)/(p-u+(d-f)),e.copy(s).addScaledVector(ic,o);const g=1/(m+x+c);return a=x*g,o=c*g,e.copy(n).addScaledVector(cs,a).addScaledVector(hs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},Pr={h:0,s:0,l:0};function Ya(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=me.workingColorSpace){if(t=Ml(t,1),e=Ve(e,0,1),n=Ve(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ya(a,r,t+1/3),this.g=Ya(a,r,t),this.b=Ya(a,r,t-1/3)}return me.toWorkingColorSpace(this,s),this}setStyle(t,e=Ke){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){const n=Nh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Cs(t.r),this.g=Cs(t.g),this.b=Cs(t.b),this}copyLinearToSRGB(t){return this.r=La(t.r),this.g=La(t.g),this.b=La(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return me.fromWorkingColorSpace(qe.copy(this),t),Math.round(Ve(qe.r*255,0,255))*65536+Math.round(Ve(qe.g*255,0,255))*256+Math.round(Ve(qe.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.fromWorkingColorSpace(qe.copy(this),e);const n=qe.r,s=qe.g,r=qe.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,h;const u=(o+a)/2;if(o===a)l=0,h=0;else{const p=a-o;switch(h=u<=.5?p/(a+o):p/(2-a-o),a){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=h,t.l=u,t}getRGB(t,e=me.workingColorSpace){return me.fromWorkingColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=Ke){me.fromWorkingColorSpace(qe.copy(this),t);const e=qe.r,n=qe.g,s=qe.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(hi),this.setHSL(hi.h+t,hi.s+e,hi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(hi),t.getHSL(Pr);const n=ar(hi.h,Pr.h,e),s=ar(hi.s,Pr.s,e),r=ar(hi.l,Pr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qe=new Zt;Zt.NAMES=Nh;let Df=0;class Os extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=Wn(),this.name="",this.type="Material",this.blending=zi,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vo,this.blendDst=xo,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zi&&(n.blending=this.blending),this.side!==yi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vo&&(n.blendSrc=this.blendSrc),this.blendDst!==xo&&(n.blendDst=this.blendDst),this.blendEquation!==Ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Tn extends Os{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ue=new F,Lr=new xt;class Mn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=nl,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Lr.fromBufferAttribute(this,e),Lr.applyMatrix3(t),this.setXY(e,Lr.x,Lr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Un(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Un(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Un(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Un(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==nl&&(t.usage=this.usage),t}}class Oh extends Mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Fh extends Mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ne extends Mn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let If=0;const Sn=new ue,qa=new Ge,us=new F,_n=new Xi,Ys=new Xi,ze=new F;class dn extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dh(t)?Fh:Oh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Sn.makeRotationFromQuaternion(t),this.applyMatrix4(Sn),this}rotateX(t){return Sn.makeRotationX(t),this.applyMatrix4(Sn),this}rotateY(t){return Sn.makeRotationY(t),this.applyMatrix4(Sn),this}rotateZ(t){return Sn.makeRotationZ(t),this.applyMatrix4(Sn),this}translate(t,e,n){return Sn.makeTranslation(t,e,n),this.applyMatrix4(Sn),this}scale(t,e,n){return Sn.makeScale(t,e,n),this.applyMatrix4(Sn),this}lookAt(t){return qa.lookAt(t),qa.updateMatrix(),this.applyMatrix4(qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ne(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ys.setFromBufferAttribute(o),this.morphTargetsRelative?(ze.addVectors(_n.min,Ys.min),_n.expandByPoint(ze),ze.addVectors(_n.max,Ys.max),_n.expandByPoint(ze)):(_n.expandByPoint(Ys.min),_n.expandByPoint(Ys.max))}_n.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ze));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)ze.fromBufferAttribute(o,h),l&&(us.fromBufferAttribute(t,h),ze.add(us)),s=Math.max(s,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let G=0;G<n.count;G++)o[G]=new F,l[G]=new F;const h=new F,u=new F,p=new F,c=new xt,d=new xt,f=new xt,x=new F,m=new F;function g(G,tt,v){h.fromBufferAttribute(n,G),u.fromBufferAttribute(n,tt),p.fromBufferAttribute(n,v),c.fromBufferAttribute(r,G),d.fromBufferAttribute(r,tt),f.fromBufferAttribute(r,v),u.sub(h),p.sub(h),d.sub(c),f.sub(c);const T=1/(d.x*f.y-f.x*d.y);isFinite(T)&&(x.copy(u).multiplyScalar(f.y).addScaledVector(p,-d.y).multiplyScalar(T),m.copy(p).multiplyScalar(d.x).addScaledVector(u,-f.x).multiplyScalar(T),o[G].add(x),o[tt].add(x),o[v].add(x),l[G].add(m),l[tt].add(m),l[v].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let G=0,tt=b.length;G<tt;++G){const v=b[G],T=v.start,$=v.count;for(let W=T,N=T+$;W<N;W+=3)g(t.getX(W+0),t.getX(W+1),t.getX(W+2))}const S=new F,w=new F,q=new F,I=new F;function C(G){q.fromBufferAttribute(s,G),I.copy(q);const tt=o[G];S.copy(tt),S.sub(q.multiplyScalar(q.dot(tt))).normalize(),w.crossVectors(I,tt);const T=w.dot(l[G])<0?-1:1;a.setXYZW(G,S.x,S.y,S.z,T)}for(let G=0,tt=b.length;G<tt;++G){const v=b[G],T=v.start,$=v.count;for(let W=T,N=T+$;W<N;W+=3)C(t.getX(W+0)),C(t.getX(W+1)),C(t.getX(W+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let c=0,d=n.count;c<d;c++)n.setXYZ(c,0,0,0);const s=new F,r=new F,a=new F,o=new F,l=new F,h=new F,u=new F,p=new F;if(t)for(let c=0,d=t.count;c<d;c+=3){const f=t.getX(c+0),x=t.getX(c+1),m=t.getX(c+2);s.fromBufferAttribute(e,f),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),o.fromBufferAttribute(n,f),l.fromBufferAttribute(n,x),h.fromBufferAttribute(n,m),o.add(u),l.add(u),h.add(u),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let c=0,d=e.count;c<d;c+=3)s.fromBufferAttribute(e,c+0),r.fromBufferAttribute(e,c+1),a.fromBufferAttribute(e,c+2),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),n.setXYZ(c+0,u.x,u.y,u.z),n.setXYZ(c+1,u.x,u.y,u.z),n.setXYZ(c+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(o,l){const h=o.array,u=o.itemSize,p=o.normalized,c=new h.constructor(l.length*u);let d=0,f=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*u;for(let g=0;g<u;g++)c[f++]=h[d++]}return new Mn(c,u,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new dn,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],h=t(l,n);e.setAttribute(o,h)}const r=this.morphAttributes;for(const o in r){const l=[],h=r[o];for(let u=0,p=h.length;u<p;u++){const c=h[u],d=t(c,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const h=n[l];t.data.attributes[l]=h.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],u=[];for(let p=0,c=h.length;p<c;p++){const d=h[p];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const h in s){const u=s[h];this.setAttribute(h,u.clone(e))}const r=t.morphAttributes;for(const h in r){const u=[],p=r[h];for(let c=0,d=p.length;c<d;c++)u.push(p[c].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let h=0,u=a.length;h<u;h++){const p=a[h];this.addGroup(p.start,p.count,p.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sc=new ue,Ci=new Sl,Dr=new gr,rc=new F,Ir=new F,Ur=new F,Nr=new F,Ka=new F,Or=new F,ac=new F,Fr=new F;class jt extends Ge{constructor(t=new dn,e=new Tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Or.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const u=o[l],p=r[l];u!==0&&(Ka.fromBufferAttribute(p,t),a?Or.addScaledVector(Ka,u):Or.addScaledVector(Ka.sub(e),u))}e.add(Or)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(r),Ci.copy(t.ray).recast(t.near),!(Dr.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(Dr,rc)===null||Ci.origin.distanceToSquared(rc)>(t.far-t.near)**2))&&(sc.copy(r).invert(),Ci.copy(t.ray).applyMatrix4(sc),!(n.boundingBox!==null&&Ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ci)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,p=r.attributes.normal,c=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,x=c.length;f<x;f++){const m=c[f],g=a[m.materialIndex],b=Math.max(m.start,d.start),S=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let w=b,q=S;w<q;w+=3){const I=o.getX(w),C=o.getX(w+1),G=o.getX(w+2);s=kr(this,g,t,n,h,u,p,I,C,G),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const f=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=f,g=x;m<g;m+=3){const b=o.getX(m),S=o.getX(m+1),w=o.getX(m+2);s=kr(this,a,t,n,h,u,p,b,S,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let f=0,x=c.length;f<x;f++){const m=c[f],g=a[m.materialIndex],b=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let w=b,q=S;w<q;w+=3){const I=w,C=w+1,G=w+2;s=kr(this,g,t,n,h,u,p,I,C,G),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const f=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=f,g=x;m<g;m+=3){const b=m,S=m+1,w=m+2;s=kr(this,a,t,n,h,u,p,b,S,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Uf(i,t,e,n,s,r,a,o){let l;if(t.side===an?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===yi,o),l===null)return null;Fr.copy(o),Fr.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(Fr);return h<e.near||h>e.far?null:{distance:h,point:Fr.clone(),object:i}}function kr(i,t,e,n,s,r,a,o,l,h){i.getVertexPosition(o,Ir),i.getVertexPosition(l,Ur),i.getVertexPosition(h,Nr);const u=Uf(i,t,e,n,Ir,Ur,Nr,ac);if(u){const p=new F;wn.getBarycoord(ac,Ir,Ur,Nr,p),s&&(u.uv=wn.getInterpolatedAttribute(s,o,l,h,p,new xt)),r&&(u.uv1=wn.getInterpolatedAttribute(r,o,l,h,p,new xt)),a&&(u.normal=wn.getInterpolatedAttribute(a,o,l,h,p,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const c={a:o,b:l,c:h,normal:new F,materialIndex:0};wn.getNormal(Ir,Ur,Nr,c.normal),u.face=c,u.barycoord=p}return u}class Pe extends dn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],h=[],u=[],p=[];let c=0,d=0;f("z","y","x",-1,-1,n,e,t,a,r,0),f("z","y","x",1,-1,n,e,-t,a,r,1),f("x","z","y",1,1,t,n,e,s,a,2),f("x","z","y",1,-1,t,n,-e,s,a,3),f("x","y","z",1,-1,t,e,n,s,r,4),f("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ne(h,3)),this.setAttribute("normal",new Ne(u,3)),this.setAttribute("uv",new Ne(p,2));function f(x,m,g,b,S,w,q,I,C,G,tt){const v=w/C,T=q/G,$=w/2,W=q/2,N=I/2,K=C+1,_=G+1;let M=0,y=0;const R=new F;for(let D=0;D<_;D++){const U=D*T-W;for(let J=0;J<K;J++){const et=J*v-$;R[x]=et*b,R[m]=U*S,R[g]=N,h.push(R.x,R.y,R.z),R[x]=0,R[m]=0,R[g]=I>0?1:-1,u.push(R.x,R.y,R.z),p.push(J/C),p.push(1-D/G),M+=1}}for(let D=0;D<G;D++)for(let U=0;U<C;U++){const J=c+U+K*D,et=c+U+K*(D+1),B=c+(U+1)+K*(D+1),k=c+(U+1)+K*D;l.push(J,et,k),l.push(et,B,k),y+=6}o.addGroup(d,y,tt),d+=y,c+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ns(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function en(i){const t={};for(let e=0;e<i.length;e++){const n=Ns(i[e]);for(const s in n)t[s]=n[s]}return t}function Nf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function kh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}const Of={clone:Ns,merge:en};var Ff=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Si extends Os{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ff,this.fragmentShader=kf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ns(t.uniforms),this.uniformsGroups=Nf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Bh extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=ei}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ui=new F,oc=new xt,lc=new xt;class yn extends Bh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ur*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(rr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ur*2*Math.atan(Math.tan(rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ui.x,ui.y).multiplyScalar(-t/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-t/ui.z)}getViewSize(t,e){return this.getViewBounds(t,oc,lc),e.subVectors(lc,oc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(rr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/h,s*=a.width/l,n*=a.height/h}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ds=-90,fs=1;class Bf extends Ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new yn(ds,fs,t,e);s.layers=this.layers,this.add(s);const r=new yn(ds,fs,t,e);r.layers=this.layers,this.add(r);const a=new yn(ds,fs,t,e);a.layers=this.layers,this.add(a);const o=new yn(ds,fs,t,e);o.layers=this.layers,this.add(o);const l=new yn(ds,fs,t,e);l.layers=this.layers,this.add(l);const h=new yn(ds,fs,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const h of e)this.remove(h);if(t===ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===pa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,h,u]=this.children,p=t.getRenderTarget(),c=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),f=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(p,c,d),t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class zh extends Ze{constructor(t,e,n,s,r,a,o,l,h,u){t=t!==void 0?t:[],e=e!==void 0?e:Ls,super(t,e,n,s,r,a,o,l,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class zf extends Vi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new zh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:En}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Pe(5,5,5),r=new Si({name:"CubemapFromEquirect",uniforms:Ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:_i});r.uniforms.tEquirect.value=e;const a=new jt(s,r),o=e.minFilter;return e.minFilter===Bi&&(e.minFilter=En),new Bf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Za=new F,Hf=new F,Vf=new Qt;class pi{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Za.subVectors(n,e).cross(Hf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Za),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Vf.getNormalMatrix(t),s=this.coplanarPoint(Za).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pi=new gr,Br=new F;class El{constructor(t=new pi,e=new pi,n=new pi,s=new pi,r=new pi,a=new pi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ei){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],h=s[4],u=s[5],p=s[6],c=s[7],d=s[8],f=s[9],x=s[10],m=s[11],g=s[12],b=s[13],S=s[14],w=s[15];if(n[0].setComponents(l-r,c-h,m-d,w-g).normalize(),n[1].setComponents(l+r,c+h,m+d,w+g).normalize(),n[2].setComponents(l+a,c+u,m+f,w+b).normalize(),n[3].setComponents(l-a,c-u,m-f,w-b).normalize(),n[4].setComponents(l-o,c-p,m-x,w-S).normalize(),e===ei)n[5].setComponents(l+o,c+p,m+x,w+S).normalize();else if(e===pa)n[5].setComponents(o,p,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(t){return Pi.center.set(0,0,0),Pi.radius=.7071067811865476,Pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Br.x=s.normal.x>0?t.max.x:t.min.x,Br.y=s.normal.y>0?t.max.y:t.min.y,Br.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Br)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Gf(i){const t=new WeakMap;function e(o,l){const h=o.array,u=o.usage,p=h.byteLength,c=i.createBuffer();i.bindBuffer(l,c),i.bufferData(l,h,u),o.onUploadCallback();let d;if(h instanceof Float32Array)d=i.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)d=i.SHORT;else if(h instanceof Uint32Array)d=i.UNSIGNED_INT;else if(h instanceof Int32Array)d=i.INT;else if(h instanceof Int8Array)d=i.BYTE;else if(h instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:c,type:d,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,h){const u=l.array,p=l.updateRanges;if(i.bindBuffer(h,o),p.length===0)i.bufferSubData(h,0,u);else{p.sort((d,f)=>d.start-f.start);let c=0;for(let d=1;d<p.length;d++){const f=p[c],x=p[d];x.start<=f.start+f.count+1?f.count=Math.max(f.count,x.start+x.count-f.start):(++c,p[c]=x)}p.length=c+1;for(let d=0,f=p.length;d<f;d++){const x=p[d];i.bufferSubData(h,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=t.get(o);if(h===void 0)t.set(o,e(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,l),h.version=o.version}}return{get:s,remove:r,update:a}}class On extends dn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),h=o+1,u=l+1,p=t/o,c=e/l,d=[],f=[],x=[],m=[];for(let g=0;g<u;g++){const b=g*c-a;for(let S=0;S<h;S++){const w=S*p-r;f.push(w,-b,0),x.push(0,0,1),m.push(S/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let b=0;b<o;b++){const S=b+h*g,w=b+h*(g+1),q=b+1+h*(g+1),I=b+1+h*g;d.push(S,w,I),d.push(w,q,I)}this.setIndex(d),this.setAttribute("position",new Ne(f,3)),this.setAttribute("normal",new Ne(x,3)),this.setAttribute("uv",new Ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new On(t.width,t.height,t.widthSegments,t.heightSegments)}}var Wf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$f=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Qf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ep=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,np=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ip=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,fp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_p=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,bp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ep=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ap=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Dp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ip=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Up=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Np=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Op=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Fp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Vp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$p=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,em=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,im=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,am=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,om=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,um=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_m=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,xm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ym=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Em=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Tm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Am=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Rm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Lm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Im=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Um=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Om=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,km=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Vm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$m=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Km=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,t0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,n0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,i0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,s0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,l0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,h0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,u0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,p0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,v0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,x0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,M0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,S0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jt={alphahash_fragment:Wf,alphahash_pars_fragment:Xf,alphamap_fragment:$f,alphamap_pars_fragment:Yf,alphatest_fragment:qf,alphatest_pars_fragment:Kf,aomap_fragment:Zf,aomap_pars_fragment:jf,batching_pars_vertex:Jf,batching_vertex:Qf,begin_vertex:tp,beginnormal_vertex:ep,bsdfs:np,iridescence_fragment:ip,bumpmap_pars_fragment:sp,clipping_planes_fragment:rp,clipping_planes_pars_fragment:ap,clipping_planes_pars_vertex:op,clipping_planes_vertex:lp,color_fragment:cp,color_pars_fragment:hp,color_pars_vertex:up,color_vertex:dp,common:fp,cube_uv_reflection_fragment:pp,defaultnormal_vertex:mp,displacementmap_pars_vertex:gp,displacementmap_vertex:_p,emissivemap_fragment:vp,emissivemap_pars_fragment:xp,colorspace_fragment:yp,colorspace_pars_fragment:Mp,envmap_fragment:Sp,envmap_common_pars_fragment:bp,envmap_pars_fragment:Ep,envmap_pars_vertex:wp,envmap_physical_pars_fragment:Op,envmap_vertex:Tp,fog_vertex:Ap,fog_pars_vertex:Rp,fog_fragment:Cp,fog_pars_fragment:Pp,gradientmap_pars_fragment:Lp,lightmap_pars_fragment:Dp,lights_lambert_fragment:Ip,lights_lambert_pars_fragment:Up,lights_pars_begin:Np,lights_toon_fragment:Fp,lights_toon_pars_fragment:kp,lights_phong_fragment:Bp,lights_phong_pars_fragment:zp,lights_physical_fragment:Hp,lights_physical_pars_fragment:Vp,lights_fragment_begin:Gp,lights_fragment_maps:Wp,lights_fragment_end:Xp,logdepthbuf_fragment:$p,logdepthbuf_pars_fragment:Yp,logdepthbuf_pars_vertex:qp,logdepthbuf_vertex:Kp,map_fragment:Zp,map_pars_fragment:jp,map_particle_fragment:Jp,map_particle_pars_fragment:Qp,metalnessmap_fragment:tm,metalnessmap_pars_fragment:em,morphinstance_vertex:nm,morphcolor_vertex:im,morphnormal_vertex:sm,morphtarget_pars_vertex:rm,morphtarget_vertex:am,normal_fragment_begin:om,normal_fragment_maps:lm,normal_pars_fragment:cm,normal_pars_vertex:hm,normal_vertex:um,normalmap_pars_fragment:dm,clearcoat_normal_fragment_begin:fm,clearcoat_normal_fragment_maps:pm,clearcoat_pars_fragment:mm,iridescence_pars_fragment:gm,opaque_fragment:_m,packing:vm,premultiplied_alpha_fragment:xm,project_vertex:ym,dithering_fragment:Mm,dithering_pars_fragment:Sm,roughnessmap_fragment:bm,roughnessmap_pars_fragment:Em,shadowmap_pars_fragment:wm,shadowmap_pars_vertex:Tm,shadowmap_vertex:Am,shadowmask_pars_fragment:Rm,skinbase_vertex:Cm,skinning_pars_vertex:Pm,skinning_vertex:Lm,skinnormal_vertex:Dm,specularmap_fragment:Im,specularmap_pars_fragment:Um,tonemapping_fragment:Nm,tonemapping_pars_fragment:Om,transmission_fragment:Fm,transmission_pars_fragment:km,uv_pars_fragment:Bm,uv_pars_vertex:zm,uv_vertex:Hm,worldpos_vertex:Vm,background_vert:Gm,background_frag:Wm,backgroundCube_vert:Xm,backgroundCube_frag:$m,cube_vert:Ym,cube_frag:qm,depth_vert:Km,depth_frag:Zm,distanceRGBA_vert:jm,distanceRGBA_frag:Jm,equirect_vert:Qm,equirect_frag:t0,linedashed_vert:e0,linedashed_frag:n0,meshbasic_vert:i0,meshbasic_frag:s0,meshlambert_vert:r0,meshlambert_frag:a0,meshmatcap_vert:o0,meshmatcap_frag:l0,meshnormal_vert:c0,meshnormal_frag:h0,meshphong_vert:u0,meshphong_frag:d0,meshphysical_vert:f0,meshphysical_frag:p0,meshtoon_vert:m0,meshtoon_frag:g0,points_vert:_0,points_frag:v0,shadow_vert:x0,shadow_frag:y0,sprite_vert:M0,sprite_frag:S0},St={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},Vn={basic:{uniforms:en([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:en([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:en([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:en([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:en([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:en([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:en([St.points,St.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:en([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:en([St.common,St.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:en([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:en([St.sprite,St.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:en([St.common,St.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:en([St.lights,St.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Vn.physical={uniforms:en([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const zr={r:0,b:0,g:0},Li=new An,b0=new ue;function E0(i,t,e,n,s,r,a){const o=new Zt(0);let l=r===!0?0:1,h,u,p=null,c=0,d=null;function f(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?e:t).get(S)),S}function x(b){let S=!1;const w=f(b);w===null?g(o,l):w&&w.isColor&&(g(w,1),S=!0);const q=i.xr.getEnvironmentBlendMode();q==="additive"?n.buffers.color.setClear(0,0,0,1,a):q==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,S){const w=f(S);w&&(w.isCubeTexture||w.mapping===xa)?(u===void 0&&(u=new jt(new Pe(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:Ns(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(q,I,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Li.copy(S.backgroundRotation),Li.x*=-1,Li.y*=-1,Li.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(b0.makeRotationFromEuler(Li)),u.material.toneMapped=me.getTransfer(w.colorSpace)!==Se,(p!==w||c!==w.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,p=w,c=w.version,d=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(h===void 0&&(h=new jt(new On(2,2),new Si({name:"BackgroundMaterial",uniforms:Ns(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=w,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.toneMapped=me.getTransfer(w.colorSpace)!==Se,w.matrixAutoUpdate===!0&&w.updateMatrix(),h.material.uniforms.uvTransform.value.copy(w.matrix),(p!==w||c!==w.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,p=w,c=w.version,d=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null))}function g(b,S){b.getRGB(zr,kh(i)),n.buffers.color.setClear(zr.r,zr.g,zr.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(b,S=1){o.set(b),l=S,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,g(o,l)},render:x,addToRenderList:m}}function w0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=c(null);let r=s,a=!1;function o(v,T,$,W,N){let K=!1;const _=p(W,$,T);r!==_&&(r=_,h(r.object)),K=d(v,W,$,N),K&&f(v,W,$,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,w(v,T,$,W),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return i.createVertexArray()}function h(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function p(v,T,$){const W=$.wireframe===!0;let N=n[v.id];N===void 0&&(N={},n[v.id]=N);let K=N[T.id];K===void 0&&(K={},N[T.id]=K);let _=K[W];return _===void 0&&(_=c(l()),K[W]=_),_}function c(v){const T=[],$=[],W=[];for(let N=0;N<e;N++)T[N]=0,$[N]=0,W[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:$,attributeDivisors:W,object:v,attributes:{},index:null}}function d(v,T,$,W){const N=r.attributes,K=T.attributes;let _=0;const M=$.getAttributes();for(const y in M)if(M[y].location>=0){const D=N[y];let U=K[y];if(U===void 0&&(y==="instanceMatrix"&&v.instanceMatrix&&(U=v.instanceMatrix),y==="instanceColor"&&v.instanceColor&&(U=v.instanceColor)),D===void 0||D.attribute!==U||U&&D.data!==U.data)return!0;_++}return r.attributesNum!==_||r.index!==W}function f(v,T,$,W){const N={},K=T.attributes;let _=0;const M=$.getAttributes();for(const y in M)if(M[y].location>=0){let D=K[y];D===void 0&&(y==="instanceMatrix"&&v.instanceMatrix&&(D=v.instanceMatrix),y==="instanceColor"&&v.instanceColor&&(D=v.instanceColor));const U={};U.attribute=D,D&&D.data&&(U.data=D.data),N[y]=U,_++}r.attributes=N,r.attributesNum=_,r.index=W}function x(){const v=r.newAttributes;for(let T=0,$=v.length;T<$;T++)v[T]=0}function m(v){g(v,0)}function g(v,T){const $=r.newAttributes,W=r.enabledAttributes,N=r.attributeDivisors;$[v]=1,W[v]===0&&(i.enableVertexAttribArray(v),W[v]=1),N[v]!==T&&(i.vertexAttribDivisor(v,T),N[v]=T)}function b(){const v=r.newAttributes,T=r.enabledAttributes;for(let $=0,W=T.length;$<W;$++)T[$]!==v[$]&&(i.disableVertexAttribArray($),T[$]=0)}function S(v,T,$,W,N,K,_){_===!0?i.vertexAttribIPointer(v,T,$,N,K):i.vertexAttribPointer(v,T,$,W,N,K)}function w(v,T,$,W){x();const N=W.attributes,K=$.getAttributes(),_=T.defaultAttributeValues;for(const M in K){const y=K[M];if(y.location>=0){let R=N[M];if(R===void 0&&(M==="instanceMatrix"&&v.instanceMatrix&&(R=v.instanceMatrix),M==="instanceColor"&&v.instanceColor&&(R=v.instanceColor)),R!==void 0){const D=R.normalized,U=R.itemSize,J=t.get(R);if(J===void 0)continue;const et=J.buffer,B=J.type,k=J.bytesPerElement,st=B===i.INT||B===i.UNSIGNED_INT||R.gpuType===fl;if(R.isInterleavedBufferAttribute){const at=R.data,dt=at.stride,vt=R.offset;if(at.isInstancedInterleavedBuffer){for(let Ot=0;Ot<y.locationSize;Ot++)g(y.location+Ot,at.meshPerAttribute);v.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Ot=0;Ot<y.locationSize;Ot++)m(y.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,et);for(let Ot=0;Ot<y.locationSize;Ot++)S(y.location+Ot,U/y.locationSize,B,D,dt*k,(vt+U/y.locationSize*Ot)*k,st)}else{if(R.isInstancedBufferAttribute){for(let at=0;at<y.locationSize;at++)g(y.location+at,R.meshPerAttribute);v.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let at=0;at<y.locationSize;at++)m(y.location+at);i.bindBuffer(i.ARRAY_BUFFER,et);for(let at=0;at<y.locationSize;at++)S(y.location+at,U/y.locationSize,B,D,U*k,U/y.locationSize*at*k,st)}}else if(_!==void 0){const D=_[M];if(D!==void 0)switch(D.length){case 2:i.vertexAttrib2fv(y.location,D);break;case 3:i.vertexAttrib3fv(y.location,D);break;case 4:i.vertexAttrib4fv(y.location,D);break;default:i.vertexAttrib1fv(y.location,D)}}}}b()}function q(){G();for(const v in n){const T=n[v];for(const $ in T){const W=T[$];for(const N in W)u(W[N].object),delete W[N];delete T[$]}delete n[v]}}function I(v){if(n[v.id]===void 0)return;const T=n[v.id];for(const $ in T){const W=T[$];for(const N in W)u(W[N].object),delete W[N];delete T[$]}delete n[v.id]}function C(v){for(const T in n){const $=n[T];if($[v.id]===void 0)continue;const W=$[v.id];for(const N in W)u(W[N].object),delete W[N];delete $[v.id]}}function G(){tt(),a=!0,r!==s&&(r=s,h(r.object))}function tt(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:G,resetDefaultState:tt,dispose:q,releaseStatesOfGeometry:I,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function T0(i,t,e){let n;function s(h){n=h}function r(h,u){i.drawArrays(n,h,u),e.update(u,n,1)}function a(h,u,p){p!==0&&(i.drawArraysInstanced(n,h,u,p),e.update(u,n,p))}function o(h,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,u,0,p);let d=0;for(let f=0;f<p;f++)d+=u[f];e.update(d,n,1)}function l(h,u,p,c){if(p===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<h.length;f++)a(h[f],u[f],c[f]);else{d.multiDrawArraysInstancedWEBGL(n,h,0,u,0,c,0,p);let f=0;for(let x=0;x<p;x++)f+=u[x];for(let x=0;x<c.length;x++)e.update(f,n,c[x])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function A0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Nn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const G=C===mr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==ni&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Gn&&!G)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const u=l(h);u!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);const p=e.logarithmicDepthBuffer===!0,c=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(c===!0){const C=t.get("EXT_clip_control");C.clipControlEXT(C.LOWER_LEFT_EXT,C.ZERO_TO_ONE_EXT)}const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),q=f>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:p,reverseDepthBuffer:c,maxTextures:d,maxVertexTextures:f,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:w,vertexTextures:q,maxSamples:I}}function R0(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new pi,o=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,c){const d=p.length!==0||c||n!==0||s;return s=c,n=p.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,c){e=u(p,c,0)},this.setState=function(p,c,d){const f=p.clippingPlanes,x=p.clipIntersection,m=p.clipShadows,g=i.get(p);if(!s||f===null||f.length===0||r&&!m)r?u(null):h();else{const b=r?0:n,S=b*4;let w=g.clippingState||null;l.value=w,w=u(f,c,S,d);for(let q=0;q!==S;++q)w[q]=e[q];g.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(p,c,d,f){const x=p!==null?p.length:0;let m=null;if(x!==0){if(m=l.value,f!==!0||m===null){const g=d+x*4,b=c.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<g)&&(m=new Float32Array(g));for(let S=0,w=d;S!==x;++S,w+=4)a.copy(p[S]).applyMatrix4(b,o),a.normal.toArray(m,w),m[w+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function C0(i){let t=new WeakMap;function e(a,o){return o===Ao?a.mapping=Ls:o===Ro&&(a.mapping=Ds),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ao||o===Ro)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const h=new zf(l.height);return h.fromEquirectangularTexture(i,a),t.set(a,h),a.addEventListener("dispose",s),e(h.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Vh extends Bh{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Es=4,cc=[.125,.215,.35,.446,.526,.582],Oi=20,ja=new Vh,hc=new Zt;let Ja=null,Qa=0,to=0,eo=!1;const Ii=(1+Math.sqrt(5))/2,ps=1/Ii,uc=[new F(-Ii,ps,0),new F(Ii,ps,0),new F(-ps,0,Ii),new F(ps,0,Ii),new F(0,Ii,-ps),new F(0,Ii,ps),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class il{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ja=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),to=this._renderer.getActiveMipmapLevel(),eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ja,Qa,to),this._renderer.xr.enabled=eo,t.scissorTest=!1,Hr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ls||t.mapping===Ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ja=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),to=this._renderer.getActiveMipmapLevel(),eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:mr,format:Nn,colorSpace:bi,depthBuffer:!1},s=dc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=P0(r)),this._blurMaterial=L0(r,t,e)}return s}_compileMaterial(t){const e=new jt(this._lodPlanes[0],t);this._renderer.compile(e,ja)}_sceneToCubeUV(t,e,n,s){const o=new yn(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,c=u.toneMapping;u.getClearColor(hc),u.toneMapping=vi,u.autoClear=!1;const d=new Tn({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),f=new jt(new Pe,d);let x=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy(hc),x=!0);for(let g=0;g<6;g++){const b=g%3;b===0?(o.up.set(0,l[g],0),o.lookAt(h[g],0,0)):b===1?(o.up.set(0,0,l[g]),o.lookAt(0,h[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,h[g]));const S=this._cubeSize;Hr(s,b*S,g>2?S:0,S,S),u.setRenderTarget(s),x&&u.render(f,o),u.render(t,o)}f.geometry.dispose(),f.material.dispose(),u.toneMapping=c,u.autoClear=p,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ls||t.mapping===Ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=pc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new jt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Hr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ja)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=uc[(s-r-1)%uc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,p=new jt(this._lodPlanes[s],h),c=h.uniforms,d=this._sizeLods[n]-1,f=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Oi-1),x=r/f,m=isFinite(r)?1+Math.floor(u*x):Oi;m>Oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Oi}`);const g=[];let b=0;for(let C=0;C<Oi;++C){const G=C/x,tt=Math.exp(-G*G/2);g.push(tt),C===0?b+=tt:C<m&&(b+=2*tt)}for(let C=0;C<g.length;C++)g[C]=g[C]/b;c.envMap.value=t.texture,c.samples.value=m,c.weights.value=g,c.latitudinal.value=a==="latitudinal",o&&(c.poleAxis.value=o);const{_lodMax:S}=this;c.dTheta.value=f,c.mipInt.value=S-n;const w=this._sizeLods[s],q=3*w*(s>S-Es?s-S+Es:0),I=4*(this._cubeSize-w);Hr(e,q,I,3*w,2*w),l.setRenderTarget(e),l.render(p,ja)}}function P0(i){const t=[],e=[],n=[];let s=i;const r=i-Es+1+cc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Es?l=cc[a-i+Es-1]:a===0&&(l=0),n.push(l);const h=1/(o-2),u=-h,p=1+h,c=[u,u,p,u,p,p,u,u,p,p,u,p],d=6,f=6,x=3,m=2,g=1,b=new Float32Array(x*f*d),S=new Float32Array(m*f*d),w=new Float32Array(g*f*d);for(let I=0;I<d;I++){const C=I%3*2/3-1,G=I>2?0:-1,tt=[C,G,0,C+2/3,G,0,C+2/3,G+1,0,C,G,0,C+2/3,G+1,0,C,G+1,0];b.set(tt,x*f*I),S.set(c,m*f*I);const v=[I,I,I,I,I,I];w.set(v,g*f*I)}const q=new dn;q.setAttribute("position",new Mn(b,x)),q.setAttribute("uv",new Mn(S,m)),q.setAttribute("faceIndex",new Mn(w,g)),t.push(q),s>Es&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function dc(i,t,e){const n=new Vi(i,t,e);return n.texture.mapping=xa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function L0(i,t,e){const n=new Float32Array(Oi),s=new F(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function fc(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function pc(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function wl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function D0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,h=l===Ao||l===Ro,u=l===Ls||l===Ds;if(h||u){let p=t.get(o);const c=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==c)return e===null&&(e=new il(i)),p=h?e.fromEquirectangular(o,p):e.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,t.set(o,p),p.texture;if(p!==void 0)return p.texture;{const d=o.image;return h&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new il(i)),p=h?e.fromEquirectangular(o):e.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,t.set(o,p),o.addEventListener("dispose",r),p.texture):null}}}return o}function s(o){let l=0;const h=6;for(let u=0;u<h;u++)o[u]!==void 0&&l++;return l===h}function r(o){const l=o.target;l.removeEventListener("dispose",r);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function I0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&oa("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function U0(i,t,e,n){const s={},r=new WeakMap;function a(p){const c=p.target;c.index!==null&&t.remove(c.index);for(const f in c.attributes)t.remove(c.attributes[f]);for(const f in c.morphAttributes){const x=c.morphAttributes[f];for(let m=0,g=x.length;m<g;m++)t.remove(x[m])}c.removeEventListener("dispose",a),delete s[c.id];const d=r.get(c);d&&(t.remove(d),r.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,e.memory.geometries--}function o(p,c){return s[c.id]===!0||(c.addEventListener("dispose",a),s[c.id]=!0,e.memory.geometries++),c}function l(p){const c=p.attributes;for(const f in c)t.update(c[f],i.ARRAY_BUFFER);const d=p.morphAttributes;for(const f in d){const x=d[f];for(let m=0,g=x.length;m<g;m++)t.update(x[m],i.ARRAY_BUFFER)}}function h(p){const c=[],d=p.index,f=p.attributes.position;let x=0;if(d!==null){const b=d.array;x=d.version;for(let S=0,w=b.length;S<w;S+=3){const q=b[S+0],I=b[S+1],C=b[S+2];c.push(q,I,I,C,C,q)}}else if(f!==void 0){const b=f.array;x=f.version;for(let S=0,w=b.length/3-1;S<w;S+=3){const q=S+0,I=S+1,C=S+2;c.push(q,I,I,C,C,q)}}else return;const m=new(Dh(c)?Fh:Oh)(c,1);m.version=x;const g=r.get(p);g&&t.remove(g),r.set(p,m)}function u(p){const c=r.get(p);if(c){const d=p.index;d!==null&&c.version<d.version&&h(p)}else h(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:u}}function N0(i,t,e){let n;function s(c){n=c}let r,a;function o(c){r=c.type,a=c.bytesPerElement}function l(c,d){i.drawElements(n,d,r,c*a),e.update(d,n,1)}function h(c,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,c*a,f),e.update(d,n,f))}function u(c,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,c,0,f);let m=0;for(let g=0;g<f;g++)m+=d[g];e.update(m,n,1)}function p(c,d,f,x){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)h(c[g]/a,d[g],x[g]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,c,0,x,0,f);let g=0;for(let b=0;b<f;b++)g+=d[b];for(let b=0;b<x.length;b++)e.update(g,n,x[b])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=u,this.renderMultiDrawInstances=p}function O0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function F0(i,t,e){const n=new WeakMap,s=new ve;function r(a,o,l){const h=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0;let c=n.get(o);if(c===void 0||c.count!==p){let tt=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",tt)};c!==void 0&&c.texture.dispose();const d=o.morphAttributes.position!==void 0,f=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let S=0;d===!0&&(S=1),f===!0&&(S=2),x===!0&&(S=3);let w=o.attributes.position.count*S,q=1;w>t.maxTextureSize&&(q=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const I=new Float32Array(w*q*4*p),C=new Uh(I,w,q,p);C.type=Gn,C.needsUpdate=!0;const G=S*4;for(let v=0;v<p;v++){const T=m[v],$=g[v],W=b[v],N=w*q*4*v;for(let K=0;K<T.count;K++){const _=K*G;d===!0&&(s.fromBufferAttribute(T,K),I[N+_+0]=s.x,I[N+_+1]=s.y,I[N+_+2]=s.z,I[N+_+3]=0),f===!0&&(s.fromBufferAttribute($,K),I[N+_+4]=s.x,I[N+_+5]=s.y,I[N+_+6]=s.z,I[N+_+7]=0),x===!0&&(s.fromBufferAttribute(W,K),I[N+_+8]=s.x,I[N+_+9]=s.y,I[N+_+10]=s.z,I[N+_+11]=W.itemSize===4?s.w:1)}}c={count:p,texture:C,size:new xt(w,q)},n.set(o,c),o.addEventListener("dispose",tt)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let x=0;x<h.length;x++)d+=h[x];const f=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",f),l.getUniforms().setValue(i,"morphTargetInfluences",h)}l.getUniforms().setValue(i,"morphTargetsTexture",c.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",c.size)}return{update:r}}function k0(i,t,e,n){let s=new WeakMap;function r(l){const h=n.render.frame,u=l.geometry,p=t.get(l,u);if(s.get(p)!==h&&(t.update(p),s.set(p,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const c=l.skeleton;s.get(c)!==h&&(c.update(),s.set(c,h))}return p}function a(){s=new WeakMap}function o(l){const h=l.target;h.removeEventListener("dispose",o),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}class Gh extends Ze{constructor(t,e,n,s,r,a,o,l,h,u=Rs){if(u!==Rs&&u!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Rs&&(n=Hi),n===void 0&&u===Us&&(n=Is),super(null,s,r,a,o,l,u,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:un,this.minFilter=l!==void 0?l:un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Wh=new Ze,mc=new Gh(1,1),Xh=new Uh,$h=new Ef,Yh=new zh,gc=[],_c=[],vc=new Float32Array(16),xc=new Float32Array(9),yc=new Float32Array(4);function Fs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=gc[s];if(r===void 0&&(r=new Float32Array(s),gc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ma(i,t){let e=_c[t];e===void 0&&(e=new Int32Array(t),_c[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function B0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function z0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),ke(e,t)}}function H0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),ke(e,t)}}function V0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),ke(e,t)}}function G0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(Fe(e,n))return;yc.set(n),i.uniformMatrix2fv(this.addr,!1,yc),ke(e,n)}}function W0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(Fe(e,n))return;xc.set(n),i.uniformMatrix3fv(this.addr,!1,xc),ke(e,n)}}function X0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(Fe(e,n))return;vc.set(n),i.uniformMatrix4fv(this.addr,!1,vc),ke(e,n)}}function $0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Y0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),ke(e,t)}}function q0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),ke(e,t)}}function K0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),ke(e,t)}}function Z0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function j0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),ke(e,t)}}function J0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),ke(e,t)}}function Q0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),ke(e,t)}}function tg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(mc.compareFunction=Lh,r=mc):r=Wh,e.setTexture2D(t||r,s)}function eg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||$h,s)}function ng(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Yh,s)}function ig(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Xh,s)}function sg(i){switch(i){case 5126:return B0;case 35664:return z0;case 35665:return H0;case 35666:return V0;case 35674:return G0;case 35675:return W0;case 35676:return X0;case 5124:case 35670:return $0;case 35667:case 35671:return Y0;case 35668:case 35672:return q0;case 35669:case 35673:return K0;case 5125:return Z0;case 36294:return j0;case 36295:return J0;case 36296:return Q0;case 35678:case 36198:case 36298:case 36306:case 35682:return tg;case 35679:case 36299:case 36307:return eg;case 35680:case 36300:case 36308:case 36293:return ng;case 36289:case 36303:case 36311:case 36292:return ig}}function rg(i,t){i.uniform1fv(this.addr,t)}function ag(i,t){const e=Fs(t,this.size,2);i.uniform2fv(this.addr,e)}function og(i,t){const e=Fs(t,this.size,3);i.uniform3fv(this.addr,e)}function lg(i,t){const e=Fs(t,this.size,4);i.uniform4fv(this.addr,e)}function cg(i,t){const e=Fs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function hg(i,t){const e=Fs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ug(i,t){const e=Fs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function dg(i,t){i.uniform1iv(this.addr,t)}function fg(i,t){i.uniform2iv(this.addr,t)}function pg(i,t){i.uniform3iv(this.addr,t)}function mg(i,t){i.uniform4iv(this.addr,t)}function gg(i,t){i.uniform1uiv(this.addr,t)}function _g(i,t){i.uniform2uiv(this.addr,t)}function vg(i,t){i.uniform3uiv(this.addr,t)}function xg(i,t){i.uniform4uiv(this.addr,t)}function yg(i,t,e){const n=this.cache,s=t.length,r=Ma(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Wh,r[a])}function Mg(i,t,e){const n=this.cache,s=t.length,r=Ma(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||$h,r[a])}function Sg(i,t,e){const n=this.cache,s=t.length,r=Ma(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Yh,r[a])}function bg(i,t,e){const n=this.cache,s=t.length,r=Ma(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Xh,r[a])}function Eg(i){switch(i){case 5126:return rg;case 35664:return ag;case 35665:return og;case 35666:return lg;case 35674:return cg;case 35675:return hg;case 35676:return ug;case 5124:case 35670:return dg;case 35667:case 35671:return fg;case 35668:case 35672:return pg;case 35669:case 35673:return mg;case 5125:return gg;case 36294:return _g;case 36295:return vg;case 36296:return xg;case 35678:case 36198:case 36298:case 36306:case 35682:return yg;case 35679:case 36299:case 36307:return Mg;case 35680:case 36300:case 36308:case 36293:return Sg;case 36289:case 36303:case 36311:case 36292:return bg}}class wg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=sg(e.type)}}class Tg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Eg(e.type)}}class Ag{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const no=/(\w+)(\])?(\[|\.)?/g;function Mc(i,t){i.seq.push(t),i.map[t.id]=t}function Rg(i,t,e){const n=i.name,s=n.length;for(no.lastIndex=0;;){const r=no.exec(n),a=no.lastIndex;let o=r[1];const l=r[2]==="]",h=r[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===s){Mc(e,h===void 0?new wg(o,i,t):new Tg(o,i,t));break}else{let p=e.map[o];p===void 0&&(p=new Ag(o),Mc(e,p)),e=p}}}class la{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Rg(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Sc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Cg=37297;let Pg=0;function Lg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Dg(i){const t=me.getPrimaries(me.workingColorSpace),e=me.getPrimaries(i);let n;switch(t===e?n="":t===fa&&e===da?n="LinearDisplayP3ToLinearSRGB":t===da&&e===fa&&(n="LinearSRGBToLinearDisplayP3"),i){case bi:case ya:return[n,"LinearTransferOETF"];case Ke:case yl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function bc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Lg(i.getShaderSource(t),a)}else return s}function Ig(i,t){const e=Dg(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Ug(i,t){let e;switch(t){case Nd:e="Linear";break;case Od:e="Reinhard";break;case Fd:e="Cineon";break;case xh:e="ACESFilmic";break;case Bd:e="AgX";break;case zd:e="Neutral";break;case kd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Vr=new F;function Ng(){me.getLuminanceCoefficients(Vr);const i=Vr.x.toFixed(4),t=Vr.y.toFixed(4),e=Vr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Og(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ir).join(`
`)}function Fg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function kg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ir(i){return i!==""}function Ec(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Bg=/^[ \t]*#include +<([\w\d./]+)>/gm;function sl(i){return i.replace(Bg,Hg)}const zg=new Map;function Hg(i,t){let e=Jt[t];if(e===void 0){const n=zg.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return sl(e)}const Vg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tc(i){return i.replace(Vg,Gg)}function Gg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ac(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Wg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===gh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===_h?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Qn&&(t="SHADOWMAP_TYPE_VSM"),t}function Xg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ls:case Ds:t="ENVMAP_TYPE_CUBE";break;case xa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $g(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ds:t="ENVMAP_MODE_REFRACTION";break}return t}function Yg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case vh:t="ENVMAP_BLENDING_MULTIPLY";break;case Id:t="ENVMAP_BLENDING_MIX";break;case Ud:t="ENVMAP_BLENDING_ADD";break}return t}function qg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Kg(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Wg(e),h=Xg(e),u=$g(e),p=Yg(e),c=qg(e),d=Og(e),f=Fg(r),x=s.createProgram();let m,g,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(ir).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(ir).join(`
`),g.length>0&&(g+=`
`)):(m=[Ac(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ir).join(`
`),g=[Ac(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+p:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vi?"#define TONE_MAPPING":"",e.toneMapping!==vi?Jt.tonemapping_pars_fragment:"",e.toneMapping!==vi?Ug("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,Ig("linearToOutputTexel",e.outputColorSpace),Ng(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ir).join(`
`)),a=sl(a),a=Ec(a,e),a=wc(a,e),o=sl(o),o=Ec(o,e),o=wc(o,e),a=Tc(a),o=Tc(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===Wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const S=b+m+a,w=b+g+o,q=Sc(s,s.VERTEX_SHADER,S),I=Sc(s,s.FRAGMENT_SHADER,w);s.attachShader(x,q),s.attachShader(x,I),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(T){if(i.debug.checkShaderErrors){const $=s.getProgramInfoLog(x).trim(),W=s.getShaderInfoLog(q).trim(),N=s.getShaderInfoLog(I).trim();let K=!0,_=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,q,I);else{const M=bc(s,q,"vertex"),y=bc(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+$+`
`+M+`
`+y)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(W===""||N==="")&&(_=!1);_&&(T.diagnostics={runnable:K,programLog:$,vertexShader:{log:W,prefix:m},fragmentShader:{log:N,prefix:g}})}s.deleteShader(q),s.deleteShader(I),G=new la(s,x),tt=kg(s,x)}let G;this.getUniforms=function(){return G===void 0&&C(this),G};let tt;this.getAttributes=function(){return tt===void 0&&C(this),tt};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,Cg)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Pg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=q,this.fragmentShader=I,this}let Zg=0;class jg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Jg(t),e.set(t,n)),n}}class Jg{constructor(t){this.id=Zg++,this.code=t,this.usedTimes=0}}function Qg(i,t,e,n,s,r,a){const o=new bl,l=new jg,h=new Set,u=[],p=s.logarithmicDepthBuffer,c=s.reverseDepthBuffer,d=s.vertexTextures;let f=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return h.add(v),v===0?"uv":`uv${v}`}function g(v,T,$,W,N){const K=W.fog,_=N.geometry,M=v.isMeshStandardMaterial?W.environment:null,y=(v.isMeshStandardMaterial?e:t).get(v.envMap||M),R=y&&y.mapping===xa?y.image.height:null,D=x[v.type];v.precision!==null&&(f=s.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const U=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,J=U!==void 0?U.length:0;let et=0;_.morphAttributes.position!==void 0&&(et=1),_.morphAttributes.normal!==void 0&&(et=2),_.morphAttributes.color!==void 0&&(et=3);let B,k,st,at;if(D){const Ce=Vn[D];B=Ce.vertexShader,k=Ce.fragmentShader}else B=v.vertexShader,k=v.fragmentShader,l.update(v),st=l.getVertexShaderID(v),at=l.getFragmentShaderID(v);const dt=i.getRenderTarget(),vt=N.isInstancedMesh===!0,Ot=N.isBatchedMesh===!0,zt=!!v.map,Kt=!!v.matcap,O=!!y,ye=!!v.aoMap,Yt=!!v.lightMap,Mt=!!v.bumpMap,ft=!!v.normalMap,Wt=!!v.displacementMap,Dt=!!v.emissiveMap,P=!!v.metalnessMap,E=!!v.roughnessMap,j=v.anisotropy>0,lt=v.clearcoat>0,ut=v.dispersion>0,ct=v.iridescence>0,Nt=v.sheen>0,bt=v.transmission>0,Lt=j&&!!v.anisotropyMap,oe=lt&&!!v.clearcoatMap,mt=lt&&!!v.clearcoatNormalMap,It=lt&&!!v.clearcoatRoughnessMap,Vt=ct&&!!v.iridescenceMap,Xt=ct&&!!v.iridescenceThicknessMap,wt=Nt&&!!v.sheenColorMap,ne=Nt&&!!v.sheenRoughnessMap,qt=!!v.specularMap,fe=!!v.specularColorMap,H=!!v.specularIntensityMap,At=bt&&!!v.transmissionMap,rt=bt&&!!v.thicknessMap,ht=!!v.gradientMap,yt=!!v.alphaMap,Pt=v.alphaTest>0,se=!!v.alphaHash,Re=!!v.extensions;let $e=vi;v.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&($e=i.toneMapping);const le={shaderID:D,shaderType:v.type,shaderName:v.name,vertexShader:B,fragmentShader:k,defines:v.defines,customVertexShaderID:st,customFragmentShaderID:at,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Ot,batchingColor:Ot&&N._colorsTexture!==null,instancing:vt,instancingColor:vt&&N.instanceColor!==null,instancingMorph:vt&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:dt===null?i.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:bi,alphaToCoverage:!!v.alphaToCoverage,map:zt,matcap:Kt,envMap:O,envMapMode:O&&y.mapping,envMapCubeUVHeight:R,aoMap:ye,lightMap:Yt,bumpMap:Mt,normalMap:ft,displacementMap:d&&Wt,emissiveMap:Dt,normalMapObjectSpace:ft&&v.normalMapType===Wd,normalMapTangentSpace:ft&&v.normalMapType===Ph,metalnessMap:P,roughnessMap:E,anisotropy:j,anisotropyMap:Lt,clearcoat:lt,clearcoatMap:oe,clearcoatNormalMap:mt,clearcoatRoughnessMap:It,dispersion:ut,iridescence:ct,iridescenceMap:Vt,iridescenceThicknessMap:Xt,sheen:Nt,sheenColorMap:wt,sheenRoughnessMap:ne,specularMap:qt,specularColorMap:fe,specularIntensityMap:H,transmission:bt,transmissionMap:At,thicknessMap:rt,gradientMap:ht,opaque:v.transparent===!1&&v.blending===zi&&v.alphaToCoverage===!1,alphaMap:yt,alphaTest:Pt,alphaHash:se,combine:v.combine,mapUv:zt&&m(v.map.channel),aoMapUv:ye&&m(v.aoMap.channel),lightMapUv:Yt&&m(v.lightMap.channel),bumpMapUv:Mt&&m(v.bumpMap.channel),normalMapUv:ft&&m(v.normalMap.channel),displacementMapUv:Wt&&m(v.displacementMap.channel),emissiveMapUv:Dt&&m(v.emissiveMap.channel),metalnessMapUv:P&&m(v.metalnessMap.channel),roughnessMapUv:E&&m(v.roughnessMap.channel),anisotropyMapUv:Lt&&m(v.anisotropyMap.channel),clearcoatMapUv:oe&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:mt&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:It&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:ne&&m(v.sheenRoughnessMap.channel),specularMapUv:qt&&m(v.specularMap.channel),specularColorMapUv:fe&&m(v.specularColorMap.channel),specularIntensityMapUv:H&&m(v.specularIntensityMap.channel),transmissionMapUv:At&&m(v.transmissionMap.channel),thicknessMapUv:rt&&m(v.thicknessMap.channel),alphaMapUv:yt&&m(v.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(ft||j),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!_.attributes.uv&&(zt||yt),fog:!!K,useFog:v.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:c,skinning:N.isSkinnedMesh===!0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:et,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&$.length>0,shadowMapType:i.shadowMap.type,toneMapping:$e,decodeVideoTexture:zt&&v.map.isVideoTexture===!0&&me.getTransfer(v.map.colorSpace)===Se,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===In,flipSided:v.side===an,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Re&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&v.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return le.vertexUv1s=h.has(1),le.vertexUv2s=h.has(2),le.vertexUv3s=h.has(3),h.clear(),le}function b(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const $ in v.defines)T.push($),T.push(v.defines[$]);return v.isRawShaderMaterial===!1&&(S(T,v),w(T,v),T.push(i.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function S(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function w(v,T){o.disableAll(),T.supportsVertexTextures&&o.enable(0),T.instancing&&o.enable(1),T.instancingColor&&o.enable(2),T.instancingMorph&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),T.dispersion&&o.enable(20),T.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reverseDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.alphaToCoverage&&o.enable(20),v.push(o.mask)}function q(v){const T=x[v.type];let $;if(T){const W=Vn[T];$=Of.clone(W.uniforms)}else $=v.uniforms;return $}function I(v,T){let $;for(let W=0,N=u.length;W<N;W++){const K=u[W];if(K.cacheKey===T){$=K,++$.usedTimes;break}}return $===void 0&&($=new Kg(i,T,v,r),u.push($)),$}function C(v){if(--v.usedTimes===0){const T=u.indexOf(v);u[T]=u[u.length-1],u.pop(),v.destroy()}}function G(v){l.remove(v)}function tt(){l.dispose()}return{getParameters:g,getProgramCacheKey:b,getUniforms:q,acquireProgram:I,releaseProgram:C,releaseShaderCache:G,programs:u,dispose:tt}}function t_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function e_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Rc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Cc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(p,c,d,f,x,m){let g=i[t];return g===void 0?(g={id:p.id,object:p,geometry:c,material:d,groupOrder:f,renderOrder:p.renderOrder,z:x,group:m},i[t]=g):(g.id=p.id,g.object=p,g.geometry=c,g.material=d,g.groupOrder=f,g.renderOrder=p.renderOrder,g.z=x,g.group=m),t++,g}function o(p,c,d,f,x,m){const g=a(p,c,d,f,x,m);d.transmission>0?n.push(g):d.transparent===!0?s.push(g):e.push(g)}function l(p,c,d,f,x,m){const g=a(p,c,d,f,x,m);d.transmission>0?n.unshift(g):d.transparent===!0?s.unshift(g):e.unshift(g)}function h(p,c){e.length>1&&e.sort(p||e_),n.length>1&&n.sort(c||Rc),s.length>1&&s.sort(c||Rc)}function u(){for(let p=t,c=i.length;p<c;p++){const d=i[p];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:h}}function n_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Cc,i.set(n,[a])):s>=r.length?(a=new Cc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function i_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Zt};break;case"SpotLight":e={position:new F,direction:new F,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function s_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let r_=0;function a_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function o_(i){const t=new i_,e=s_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new F);const s=new F,r=new ue,a=new ue;function o(h){let u=0,p=0,c=0;for(let tt=0;tt<9;tt++)n.probe[tt].set(0,0,0);let d=0,f=0,x=0,m=0,g=0,b=0,S=0,w=0,q=0,I=0,C=0;h.sort(a_);for(let tt=0,v=h.length;tt<v;tt++){const T=h[tt],$=T.color,W=T.intensity,N=T.distance,K=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=$.r*W,p+=$.g*W,c+=$.b*W;else if(T.isLightProbe){for(let _=0;_<9;_++)n.probe[_].addScaledVector(T.sh.coefficients[_],W);C++}else if(T.isDirectionalLight){const _=t.get(T);if(_.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const M=T.shadow,y=e.get(T);y.shadowIntensity=M.intensity,y.shadowBias=M.bias,y.shadowNormalBias=M.normalBias,y.shadowRadius=M.radius,y.shadowMapSize=M.mapSize,n.directionalShadow[d]=y,n.directionalShadowMap[d]=K,n.directionalShadowMatrix[d]=T.shadow.matrix,b++}n.directional[d]=_,d++}else if(T.isSpotLight){const _=t.get(T);_.position.setFromMatrixPosition(T.matrixWorld),_.color.copy($).multiplyScalar(W),_.distance=N,_.coneCos=Math.cos(T.angle),_.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),_.decay=T.decay,n.spot[x]=_;const M=T.shadow;if(T.map&&(n.spotLightMap[q]=T.map,q++,M.updateMatrices(T),T.castShadow&&I++),n.spotLightMatrix[x]=M.matrix,T.castShadow){const y=e.get(T);y.shadowIntensity=M.intensity,y.shadowBias=M.bias,y.shadowNormalBias=M.normalBias,y.shadowRadius=M.radius,y.shadowMapSize=M.mapSize,n.spotShadow[x]=y,n.spotShadowMap[x]=K,w++}x++}else if(T.isRectAreaLight){const _=t.get(T);_.color.copy($).multiplyScalar(W),_.halfWidth.set(T.width*.5,0,0),_.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=_,m++}else if(T.isPointLight){const _=t.get(T);if(_.color.copy(T.color).multiplyScalar(T.intensity),_.distance=T.distance,_.decay=T.decay,T.castShadow){const M=T.shadow,y=e.get(T);y.shadowIntensity=M.intensity,y.shadowBias=M.bias,y.shadowNormalBias=M.normalBias,y.shadowRadius=M.radius,y.shadowMapSize=M.mapSize,y.shadowCameraNear=M.camera.near,y.shadowCameraFar=M.camera.far,n.pointShadow[f]=y,n.pointShadowMap[f]=K,n.pointShadowMatrix[f]=T.shadow.matrix,S++}n.point[f]=_,f++}else if(T.isHemisphereLight){const _=t.get(T);_.skyColor.copy(T.color).multiplyScalar(W),_.groundColor.copy(T.groundColor).multiplyScalar(W),n.hemi[g]=_,g++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=c;const G=n.hash;(G.directionalLength!==d||G.pointLength!==f||G.spotLength!==x||G.rectAreaLength!==m||G.hemiLength!==g||G.numDirectionalShadows!==b||G.numPointShadows!==S||G.numSpotShadows!==w||G.numSpotMaps!==q||G.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=f,n.hemi.length=g,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=w+q-I,n.spotLightMap.length=q,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=C,G.directionalLength=d,G.pointLength=f,G.spotLength=x,G.rectAreaLength=m,G.hemiLength=g,G.numDirectionalShadows=b,G.numPointShadows=S,G.numSpotShadows=w,G.numSpotMaps=q,G.numLightProbes=C,n.version=r_++)}function l(h,u){let p=0,c=0,d=0,f=0,x=0;const m=u.matrixWorldInverse;for(let g=0,b=h.length;g<b;g++){const S=h[g];if(S.isDirectionalLight){const w=n.directional[p];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),p++}else if(S.isSpotLight){const w=n.spot[d];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),d++}else if(S.isRectAreaLight){const w=n.rectArea[f];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),f++}else if(S.isPointLight){const w=n.point[c];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),c++}else if(S.isHemisphereLight){const w=n.hemi[x];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function Pc(i){const t=new o_(i),e=[],n=[];function s(u){h.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function l_(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Pc(i),t.set(s,[o])):r>=a.length?(o=new Pc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class c_ extends Os{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class h_ extends Os{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const u_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,d_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function f_(i,t,e){let n=new El;const s=new xt,r=new xt,a=new ve,o=new c_({depthPacking:Gd}),l=new h_,h={},u=e.maxTextureSize,p={[yi]:an,[an]:yi,[In]:In},c=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:u_,fragmentShader:d_}),d=c.clone();d.defines.HORIZONTAL_PASS=1;const f=new dn;f.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new jt(f,c),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gh;let g=this.type;this.render=function(I,C,G){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const tt=i.getRenderTarget(),v=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),$=i.state;$.setBlending(_i),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const W=g!==Qn&&this.type===Qn,N=g===Qn&&this.type!==Qn;for(let K=0,_=I.length;K<_;K++){const M=I[K],y=M.shadow;if(y===void 0){console.warn("THREE.WebGLShadowMap:",M,"has no shadow.");continue}if(y.autoUpdate===!1&&y.needsUpdate===!1)continue;s.copy(y.mapSize);const R=y.getFrameExtents();if(s.multiply(R),r.copy(y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/R.x),s.x=r.x*R.x,y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/R.y),s.y=r.y*R.y,y.mapSize.y=r.y)),y.map===null||W===!0||N===!0){const U=this.type!==Qn?{minFilter:un,magFilter:un}:{};y.map!==null&&y.map.dispose(),y.map=new Vi(s.x,s.y,U),y.map.texture.name=M.name+".shadowMap",y.camera.updateProjectionMatrix()}i.setRenderTarget(y.map),i.clear();const D=y.getViewportCount();for(let U=0;U<D;U++){const J=y.getViewport(U);a.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),$.viewport(a),y.updateMatrices(M,U),n=y.getFrustum(),w(C,G,y.camera,M,this.type)}y.isPointLightShadow!==!0&&this.type===Qn&&b(y,G),y.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(tt,v,T)};function b(I,C){const G=t.update(x);c.defines.VSM_SAMPLES!==I.blurSamples&&(c.defines.VSM_SAMPLES=I.blurSamples,d.defines.VSM_SAMPLES=I.blurSamples,c.needsUpdate=!0,d.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Vi(s.x,s.y)),c.uniforms.shadow_pass.value=I.map.texture,c.uniforms.resolution.value=I.mapSize,c.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(C,null,G,c,x,null),d.uniforms.shadow_pass.value=I.mapPass.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(C,null,G,d,x,null)}function S(I,C,G,tt){let v=null;const T=G.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(T!==void 0)v=T;else if(v=G.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const $=v.uuid,W=C.uuid;let N=h[$];N===void 0&&(N={},h[$]=N);let K=N[W];K===void 0&&(K=v.clone(),N[W]=K,C.addEventListener("dispose",q)),v=K}if(v.visible=C.visible,v.wireframe=C.wireframe,tt===Qn?v.side=C.shadowSide!==null?C.shadowSide:C.side:v.side=C.shadowSide!==null?C.shadowSide:p[C.side],v.alphaMap=C.alphaMap,v.alphaTest=C.alphaTest,v.map=C.map,v.clipShadows=C.clipShadows,v.clippingPlanes=C.clippingPlanes,v.clipIntersection=C.clipIntersection,v.displacementMap=C.displacementMap,v.displacementScale=C.displacementScale,v.displacementBias=C.displacementBias,v.wireframeLinewidth=C.wireframeLinewidth,v.linewidth=C.linewidth,G.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const $=i.properties.get(v);$.light=G}return v}function w(I,C,G,tt,v){if(I.visible===!1)return;if(I.layers.test(C.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&v===Qn)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,I.matrixWorld);const W=t.update(I),N=I.material;if(Array.isArray(N)){const K=W.groups;for(let _=0,M=K.length;_<M;_++){const y=K[_],R=N[y.materialIndex];if(R&&R.visible){const D=S(I,R,tt,v);I.onBeforeShadow(i,I,C,G,W,D,y),i.renderBufferDirect(G,null,W,D,I,y),I.onAfterShadow(i,I,C,G,W,D,y)}}}else if(N.visible){const K=S(I,N,tt,v);I.onBeforeShadow(i,I,C,G,W,K,null),i.renderBufferDirect(G,null,W,K,I,null),I.onAfterShadow(i,I,C,G,W,K,null)}}const $=I.children;for(let W=0,N=$.length;W<N;W++)w($[W],C,G,tt,v)}function q(I){I.target.removeEventListener("dispose",q);for(const G in h){const tt=h[G],v=I.target.uuid;v in tt&&(tt[v].dispose(),delete tt[v])}}}const p_={[yo]:Mo,[So]:wo,[bo]:To,[Ps]:Eo,[Mo]:yo,[wo]:So,[To]:bo,[Eo]:Ps};function m_(i){function t(){let H=!1;const At=new ve;let rt=null;const ht=new ve(0,0,0,0);return{setMask:function(yt){rt!==yt&&!H&&(i.colorMask(yt,yt,yt,yt),rt=yt)},setLocked:function(yt){H=yt},setClear:function(yt,Pt,se,Re,$e){$e===!0&&(yt*=Re,Pt*=Re,se*=Re),At.set(yt,Pt,se,Re),ht.equals(At)===!1&&(i.clearColor(yt,Pt,se,Re),ht.copy(At))},reset:function(){H=!1,rt=null,ht.set(-1,0,0,0)}}}function e(){let H=!1,At=!1,rt=null,ht=null,yt=null;return{setReversed:function(Pt){At=Pt},setTest:function(Pt){Pt?st(i.DEPTH_TEST):at(i.DEPTH_TEST)},setMask:function(Pt){rt!==Pt&&!H&&(i.depthMask(Pt),rt=Pt)},setFunc:function(Pt){if(At&&(Pt=p_[Pt]),ht!==Pt){switch(Pt){case yo:i.depthFunc(i.NEVER);break;case Mo:i.depthFunc(i.ALWAYS);break;case So:i.depthFunc(i.LESS);break;case Ps:i.depthFunc(i.LEQUAL);break;case bo:i.depthFunc(i.EQUAL);break;case Eo:i.depthFunc(i.GEQUAL);break;case wo:i.depthFunc(i.GREATER);break;case To:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ht=Pt}},setLocked:function(Pt){H=Pt},setClear:function(Pt){yt!==Pt&&(i.clearDepth(Pt),yt=Pt)},reset:function(){H=!1,rt=null,ht=null,yt=null}}}function n(){let H=!1,At=null,rt=null,ht=null,yt=null,Pt=null,se=null,Re=null,$e=null;return{setTest:function(le){H||(le?st(i.STENCIL_TEST):at(i.STENCIL_TEST))},setMask:function(le){At!==le&&!H&&(i.stencilMask(le),At=le)},setFunc:function(le,Ce,on){(rt!==le||ht!==Ce||yt!==on)&&(i.stencilFunc(le,Ce,on),rt=le,ht=Ce,yt=on)},setOp:function(le,Ce,on){(Pt!==le||se!==Ce||Re!==on)&&(i.stencilOp(le,Ce,on),Pt=le,se=Ce,Re=on)},setLocked:function(le){H=le},setClear:function(le){$e!==le&&(i.clearStencil(le),$e=le)},reset:function(){H=!1,At=null,rt=null,ht=null,yt=null,Pt=null,se=null,Re=null,$e=null}}}const s=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap;let h={},u={},p=new WeakMap,c=[],d=null,f=!1,x=null,m=null,g=null,b=null,S=null,w=null,q=null,I=new Zt(0,0,0),C=0,G=!1,tt=null,v=null,T=null,$=null,W=null;const N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,_=0;const M=i.getParameter(i.VERSION);M.indexOf("WebGL")!==-1?(_=parseFloat(/^WebGL (\d)/.exec(M)[1]),K=_>=1):M.indexOf("OpenGL ES")!==-1&&(_=parseFloat(/^OpenGL ES (\d)/.exec(M)[1]),K=_>=2);let y=null,R={};const D=i.getParameter(i.SCISSOR_BOX),U=i.getParameter(i.VIEWPORT),J=new ve().fromArray(D),et=new ve().fromArray(U);function B(H,At,rt,ht){const yt=new Uint8Array(4),Pt=i.createTexture();i.bindTexture(H,Pt),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let se=0;se<rt;se++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(At,0,i.RGBA,1,1,ht,0,i.RGBA,i.UNSIGNED_BYTE,yt):i.texImage2D(At+se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,yt);return Pt}const k={};k[i.TEXTURE_2D]=B(i.TEXTURE_2D,i.TEXTURE_2D,1),k[i.TEXTURE_CUBE_MAP]=B(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[i.TEXTURE_2D_ARRAY]=B(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),k[i.TEXTURE_3D]=B(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),st(i.DEPTH_TEST),r.setFunc(Ps),Yt(!1),Mt(zl),st(i.CULL_FACE),O(_i);function st(H){h[H]!==!0&&(i.enable(H),h[H]=!0)}function at(H){h[H]!==!1&&(i.disable(H),h[H]=!1)}function dt(H,At){return u[H]!==At?(i.bindFramebuffer(H,At),u[H]=At,H===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=At),H===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=At),!0):!1}function vt(H,At){let rt=c,ht=!1;if(H){rt=p.get(At),rt===void 0&&(rt=[],p.set(At,rt));const yt=H.textures;if(rt.length!==yt.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let Pt=0,se=yt.length;Pt<se;Pt++)rt[Pt]=i.COLOR_ATTACHMENT0+Pt;rt.length=yt.length,ht=!0}}else rt[0]!==i.BACK&&(rt[0]=i.BACK,ht=!0);ht&&i.drawBuffers(rt)}function Ot(H){return d!==H?(i.useProgram(H),d=H,!0):!1}const zt={[Ni]:i.FUNC_ADD,[gd]:i.FUNC_SUBTRACT,[_d]:i.FUNC_REVERSE_SUBTRACT};zt[vd]=i.MIN,zt[xd]=i.MAX;const Kt={[yd]:i.ZERO,[Md]:i.ONE,[Sd]:i.SRC_COLOR,[vo]:i.SRC_ALPHA,[Rd]:i.SRC_ALPHA_SATURATE,[Td]:i.DST_COLOR,[Ed]:i.DST_ALPHA,[bd]:i.ONE_MINUS_SRC_COLOR,[xo]:i.ONE_MINUS_SRC_ALPHA,[Ad]:i.ONE_MINUS_DST_COLOR,[wd]:i.ONE_MINUS_DST_ALPHA,[Cd]:i.CONSTANT_COLOR,[Pd]:i.ONE_MINUS_CONSTANT_COLOR,[Ld]:i.CONSTANT_ALPHA,[Dd]:i.ONE_MINUS_CONSTANT_ALPHA};function O(H,At,rt,ht,yt,Pt,se,Re,$e,le){if(H===_i){f===!0&&(at(i.BLEND),f=!1);return}if(f===!1&&(st(i.BLEND),f=!0),H!==md){if(H!==x||le!==G){if((m!==Ni||S!==Ni)&&(i.blendEquation(i.FUNC_ADD),m=Ni,S=Ni),le)switch(H){case zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ha:i.blendFunc(i.ONE,i.ONE);break;case Hl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ha:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Hl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}g=null,b=null,w=null,q=null,I.set(0,0,0),C=0,x=H,G=le}return}yt=yt||At,Pt=Pt||rt,se=se||ht,(At!==m||yt!==S)&&(i.blendEquationSeparate(zt[At],zt[yt]),m=At,S=yt),(rt!==g||ht!==b||Pt!==w||se!==q)&&(i.blendFuncSeparate(Kt[rt],Kt[ht],Kt[Pt],Kt[se]),g=rt,b=ht,w=Pt,q=se),(Re.equals(I)===!1||$e!==C)&&(i.blendColor(Re.r,Re.g,Re.b,$e),I.copy(Re),C=$e),x=H,G=!1}function ye(H,At){H.side===In?at(i.CULL_FACE):st(i.CULL_FACE);let rt=H.side===an;At&&(rt=!rt),Yt(rt),H.blending===zi&&H.transparent===!1?O(_i):O(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),r.setFunc(H.depthFunc),r.setTest(H.depthTest),r.setMask(H.depthWrite),s.setMask(H.colorWrite);const ht=H.stencilWrite;a.setTest(ht),ht&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Wt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):at(i.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(H){tt!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),tt=H)}function Mt(H){H!==fd?(st(i.CULL_FACE),H!==v&&(H===zl?i.cullFace(i.BACK):H===pd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):at(i.CULL_FACE),v=H}function ft(H){H!==T&&(K&&i.lineWidth(H),T=H)}function Wt(H,At,rt){H?(st(i.POLYGON_OFFSET_FILL),($!==At||W!==rt)&&(i.polygonOffset(At,rt),$=At,W=rt)):at(i.POLYGON_OFFSET_FILL)}function Dt(H){H?st(i.SCISSOR_TEST):at(i.SCISSOR_TEST)}function P(H){H===void 0&&(H=i.TEXTURE0+N-1),y!==H&&(i.activeTexture(H),y=H)}function E(H,At,rt){rt===void 0&&(y===null?rt=i.TEXTURE0+N-1:rt=y);let ht=R[rt];ht===void 0&&(ht={type:void 0,texture:void 0},R[rt]=ht),(ht.type!==H||ht.texture!==At)&&(y!==rt&&(i.activeTexture(rt),y=rt),i.bindTexture(H,At||k[H]),ht.type=H,ht.texture=At)}function j(){const H=R[y];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function lt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ut(){try{i.compressedTexImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ct(){try{i.texSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Nt(){try{i.texSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function bt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Lt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function oe(){try{i.texStorage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function mt(){try{i.texStorage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function It(){try{i.texImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Vt(){try{i.texImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Xt(H){J.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),J.copy(H))}function wt(H){et.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),et.copy(H))}function ne(H,At){let rt=l.get(At);rt===void 0&&(rt=new WeakMap,l.set(At,rt));let ht=rt.get(H);ht===void 0&&(ht=i.getUniformBlockIndex(At,H.name),rt.set(H,ht))}function qt(H,At){const ht=l.get(At).get(H);o.get(At)!==ht&&(i.uniformBlockBinding(At,ht,H.__bindingPointIndex),o.set(At,ht))}function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},y=null,R={},u={},p=new WeakMap,c=[],d=null,f=!1,x=null,m=null,g=null,b=null,S=null,w=null,q=null,I=new Zt(0,0,0),C=0,G=!1,tt=null,v=null,T=null,$=null,W=null,J.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:st,disable:at,bindFramebuffer:dt,drawBuffers:vt,useProgram:Ot,setBlending:O,setMaterial:ye,setFlipSided:Yt,setCullFace:Mt,setLineWidth:ft,setPolygonOffset:Wt,setScissorTest:Dt,activeTexture:P,bindTexture:E,unbindTexture:j,compressedTexImage2D:lt,compressedTexImage3D:ut,texImage2D:It,texImage3D:Vt,updateUBOMapping:ne,uniformBlockBinding:qt,texStorage2D:oe,texStorage3D:mt,texSubImage2D:ct,texSubImage3D:Nt,compressedTexSubImage2D:bt,compressedTexSubImage3D:Lt,scissor:Xt,viewport:wt,reset:fe}}function Lc(i,t,e,n){const s=g_(n);switch(e){case Eh:return i*t;case Th:return i*t;case Ah:return i*t*2;case gl:return i*t/s.components*s.byteLength;case _l:return i*t/s.components*s.byteLength;case Rh:return i*t*2/s.components*s.byteLength;case vl:return i*t*2/s.components*s.byteLength;case wh:return i*t*3/s.components*s.byteLength;case Nn:return i*t*4/s.components*s.byteLength;case xl:return i*t*4/s.components*s.byteLength;case na:case ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case sa:case ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Lo:case Io:return Math.max(i,16)*Math.max(t,8)/4;case Po:case Do:return Math.max(i,8)*Math.max(t,8)/2;case Uo:case No:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Oo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ko:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Bo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case zo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Vo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Go:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Wo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case $o:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case qo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ko:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Zo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case aa:case jo:case Jo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ch:case Qo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case tl:case el:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function g_(i){switch(i){case ni:case Mh:return{byteLength:1,components:1};case hr:case Sh:case mr:return{byteLength:2,components:1};case pl:case ml:return{byteLength:2,components:4};case Hi:case fl:case Gn:return{byteLength:4,components:1};case bh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function __(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new xt,u=new WeakMap;let p;const c=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(P,E){return d?new OffscreenCanvas(P,E):ma("canvas")}function x(P,E,j){let lt=1;const ut=Dt(P);if((ut.width>j||ut.height>j)&&(lt=j/Math.max(ut.width,ut.height)),lt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ct=Math.floor(lt*ut.width),Nt=Math.floor(lt*ut.height);p===void 0&&(p=f(ct,Nt));const bt=E?f(ct,Nt):p;return bt.width=ct,bt.height=Nt,bt.getContext("2d").drawImage(P,0,0,ct,Nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ut.width+"x"+ut.height+") to ("+ct+"x"+Nt+")."),bt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ut.width+"x"+ut.height+")."),P;return P}function m(P){return P.generateMipmaps&&P.minFilter!==un&&P.minFilter!==En}function g(P){i.generateMipmap(P)}function b(P,E,j,lt,ut=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ct=E;if(E===i.RED&&(j===i.FLOAT&&(ct=i.R32F),j===i.HALF_FLOAT&&(ct=i.R16F),j===i.UNSIGNED_BYTE&&(ct=i.R8)),E===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(ct=i.R8UI),j===i.UNSIGNED_SHORT&&(ct=i.R16UI),j===i.UNSIGNED_INT&&(ct=i.R32UI),j===i.BYTE&&(ct=i.R8I),j===i.SHORT&&(ct=i.R16I),j===i.INT&&(ct=i.R32I)),E===i.RG&&(j===i.FLOAT&&(ct=i.RG32F),j===i.HALF_FLOAT&&(ct=i.RG16F),j===i.UNSIGNED_BYTE&&(ct=i.RG8)),E===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(ct=i.RG8UI),j===i.UNSIGNED_SHORT&&(ct=i.RG16UI),j===i.UNSIGNED_INT&&(ct=i.RG32UI),j===i.BYTE&&(ct=i.RG8I),j===i.SHORT&&(ct=i.RG16I),j===i.INT&&(ct=i.RG32I)),E===i.RGB_INTEGER&&(j===i.UNSIGNED_BYTE&&(ct=i.RGB8UI),j===i.UNSIGNED_SHORT&&(ct=i.RGB16UI),j===i.UNSIGNED_INT&&(ct=i.RGB32UI),j===i.BYTE&&(ct=i.RGB8I),j===i.SHORT&&(ct=i.RGB16I),j===i.INT&&(ct=i.RGB32I)),E===i.RGBA_INTEGER&&(j===i.UNSIGNED_BYTE&&(ct=i.RGBA8UI),j===i.UNSIGNED_SHORT&&(ct=i.RGBA16UI),j===i.UNSIGNED_INT&&(ct=i.RGBA32UI),j===i.BYTE&&(ct=i.RGBA8I),j===i.SHORT&&(ct=i.RGBA16I),j===i.INT&&(ct=i.RGBA32I)),E===i.RGB&&j===i.UNSIGNED_INT_5_9_9_9_REV&&(ct=i.RGB9_E5),E===i.RGBA){const Nt=ut?ua:me.getTransfer(lt);j===i.FLOAT&&(ct=i.RGBA32F),j===i.HALF_FLOAT&&(ct=i.RGBA16F),j===i.UNSIGNED_BYTE&&(ct=Nt===Se?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT_4_4_4_4&&(ct=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(ct=i.RGB5_A1)}return(ct===i.R16F||ct===i.R32F||ct===i.RG16F||ct===i.RG32F||ct===i.RGBA16F||ct===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function S(P,E){let j;return P?E===null||E===Hi||E===Is?j=i.DEPTH24_STENCIL8:E===Gn?j=i.DEPTH32F_STENCIL8:E===hr&&(j=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Hi||E===Is?j=i.DEPTH_COMPONENT24:E===Gn?j=i.DEPTH_COMPONENT32F:E===hr&&(j=i.DEPTH_COMPONENT16),j}function w(P,E){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==un&&P.minFilter!==En?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function q(P){const E=P.target;E.removeEventListener("dispose",q),C(E),E.isVideoTexture&&u.delete(E)}function I(P){const E=P.target;E.removeEventListener("dispose",I),tt(E)}function C(P){const E=n.get(P);if(E.__webglInit===void 0)return;const j=P.source,lt=c.get(j);if(lt){const ut=lt[E.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&G(P),Object.keys(lt).length===0&&c.delete(j)}n.remove(P)}function G(P){const E=n.get(P);i.deleteTexture(E.__webglTexture);const j=P.source,lt=c.get(j);delete lt[E.__cacheKey],a.memory.textures--}function tt(P){const E=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(E.__webglFramebuffer[lt]))for(let ut=0;ut<E.__webglFramebuffer[lt].length;ut++)i.deleteFramebuffer(E.__webglFramebuffer[lt][ut]);else i.deleteFramebuffer(E.__webglFramebuffer[lt]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[lt])}else{if(Array.isArray(E.__webglFramebuffer))for(let lt=0;lt<E.__webglFramebuffer.length;lt++)i.deleteFramebuffer(E.__webglFramebuffer[lt]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let lt=0;lt<E.__webglColorRenderbuffer.length;lt++)E.__webglColorRenderbuffer[lt]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[lt]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const j=P.textures;for(let lt=0,ut=j.length;lt<ut;lt++){const ct=n.get(j[lt]);ct.__webglTexture&&(i.deleteTexture(ct.__webglTexture),a.memory.textures--),n.remove(j[lt])}n.remove(P)}let v=0;function T(){v=0}function $(){const P=v;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),v+=1,P}function W(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function N(P,E){const j=n.get(P);if(P.isVideoTexture&&ft(P),P.isRenderTargetTexture===!1&&P.version>0&&j.__version!==P.version){const lt=P.image;if(lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(j,P,E);return}}e.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+E)}function K(P,E){const j=n.get(P);if(P.version>0&&j.__version!==P.version){et(j,P,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+E)}function _(P,E){const j=n.get(P);if(P.version>0&&j.__version!==P.version){et(j,P,E);return}e.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+E)}function M(P,E){const j=n.get(P);if(P.version>0&&j.__version!==P.version){B(j,P,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+E)}const y={[Mi]:i.REPEAT,[ki]:i.CLAMP_TO_EDGE,[Co]:i.MIRRORED_REPEAT},R={[un]:i.NEAREST,[Hd]:i.NEAREST_MIPMAP_NEAREST,[Sr]:i.NEAREST_MIPMAP_LINEAR,[En]:i.LINEAR,[Ca]:i.LINEAR_MIPMAP_NEAREST,[Bi]:i.LINEAR_MIPMAP_LINEAR},D={[Xd]:i.NEVER,[jd]:i.ALWAYS,[$d]:i.LESS,[Lh]:i.LEQUAL,[Yd]:i.EQUAL,[Zd]:i.GEQUAL,[qd]:i.GREATER,[Kd]:i.NOTEQUAL};function U(P,E){if(E.type===Gn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===En||E.magFilter===Ca||E.magFilter===Sr||E.magFilter===Bi||E.minFilter===En||E.minFilter===Ca||E.minFilter===Sr||E.minFilter===Bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,y[E.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,y[E.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,y[E.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,R[E.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,R[E.minFilter]),E.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,D[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===un||E.minFilter!==Sr&&E.minFilter!==Bi||E.type===Gn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const j=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function J(P,E){let j=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",q));const lt=E.source;let ut=c.get(lt);ut===void 0&&(ut={},c.set(lt,ut));const ct=W(E);if(ct!==P.__cacheKey){ut[ct]===void 0&&(ut[ct]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,j=!0),ut[ct].usedTimes++;const Nt=ut[P.__cacheKey];Nt!==void 0&&(ut[P.__cacheKey].usedTimes--,Nt.usedTimes===0&&G(E)),P.__cacheKey=ct,P.__webglTexture=ut[ct].texture}return j}function et(P,E,j){let lt=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(lt=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(lt=i.TEXTURE_3D);const ut=J(P,E),ct=E.source;e.bindTexture(lt,P.__webglTexture,i.TEXTURE0+j);const Nt=n.get(ct);if(ct.version!==Nt.__version||ut===!0){e.activeTexture(i.TEXTURE0+j);const bt=me.getPrimaries(me.workingColorSpace),Lt=E.colorSpace===gi?null:me.getPrimaries(E.colorSpace),oe=E.colorSpace===gi||bt===Lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let mt=x(E.image,!1,s.maxTextureSize);mt=Wt(E,mt);const It=r.convert(E.format,E.colorSpace),Vt=r.convert(E.type);let Xt=b(E.internalFormat,It,Vt,E.colorSpace,E.isVideoTexture);U(lt,E);let wt;const ne=E.mipmaps,qt=E.isVideoTexture!==!0,fe=Nt.__version===void 0||ut===!0,H=ct.dataReady,At=w(E,mt);if(E.isDepthTexture)Xt=S(E.format===Us,E.type),fe&&(qt?e.texStorage2D(i.TEXTURE_2D,1,Xt,mt.width,mt.height):e.texImage2D(i.TEXTURE_2D,0,Xt,mt.width,mt.height,0,It,Vt,null));else if(E.isDataTexture)if(ne.length>0){qt&&fe&&e.texStorage2D(i.TEXTURE_2D,At,Xt,ne[0].width,ne[0].height);for(let rt=0,ht=ne.length;rt<ht;rt++)wt=ne[rt],qt?H&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,wt.width,wt.height,It,Vt,wt.data):e.texImage2D(i.TEXTURE_2D,rt,Xt,wt.width,wt.height,0,It,Vt,wt.data);E.generateMipmaps=!1}else qt?(fe&&e.texStorage2D(i.TEXTURE_2D,At,Xt,mt.width,mt.height),H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt.width,mt.height,It,Vt,mt.data)):e.texImage2D(i.TEXTURE_2D,0,Xt,mt.width,mt.height,0,It,Vt,mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){qt&&fe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,Xt,ne[0].width,ne[0].height,mt.depth);for(let rt=0,ht=ne.length;rt<ht;rt++)if(wt=ne[rt],E.format!==Nn)if(It!==null)if(qt){if(H)if(E.layerUpdates.size>0){const yt=Lc(wt.width,wt.height,E.format,E.type);for(const Pt of E.layerUpdates){const se=wt.data.subarray(Pt*yt/wt.data.BYTES_PER_ELEMENT,(Pt+1)*yt/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,Pt,wt.width,wt.height,1,It,se,0,0)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,wt.width,wt.height,mt.depth,It,wt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,Xt,wt.width,wt.height,mt.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?H&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,wt.width,wt.height,mt.depth,It,Vt,wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,Xt,wt.width,wt.height,mt.depth,0,It,Vt,wt.data)}else{qt&&fe&&e.texStorage2D(i.TEXTURE_2D,At,Xt,ne[0].width,ne[0].height);for(let rt=0,ht=ne.length;rt<ht;rt++)wt=ne[rt],E.format!==Nn?It!==null?qt?H&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,wt.width,wt.height,It,wt.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,Xt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?H&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,wt.width,wt.height,It,Vt,wt.data):e.texImage2D(i.TEXTURE_2D,rt,Xt,wt.width,wt.height,0,It,Vt,wt.data)}else if(E.isDataArrayTexture)if(qt){if(fe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,Xt,mt.width,mt.height,mt.depth),H)if(E.layerUpdates.size>0){const rt=Lc(mt.width,mt.height,E.format,E.type);for(const ht of E.layerUpdates){const yt=mt.data.subarray(ht*rt/mt.data.BYTES_PER_ELEMENT,(ht+1)*rt/mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ht,mt.width,mt.height,1,It,Vt,yt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,It,Vt,mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Xt,mt.width,mt.height,mt.depth,0,It,Vt,mt.data);else if(E.isData3DTexture)qt?(fe&&e.texStorage3D(i.TEXTURE_3D,At,Xt,mt.width,mt.height,mt.depth),H&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,It,Vt,mt.data)):e.texImage3D(i.TEXTURE_3D,0,Xt,mt.width,mt.height,mt.depth,0,It,Vt,mt.data);else if(E.isFramebufferTexture){if(fe)if(qt)e.texStorage2D(i.TEXTURE_2D,At,Xt,mt.width,mt.height);else{let rt=mt.width,ht=mt.height;for(let yt=0;yt<At;yt++)e.texImage2D(i.TEXTURE_2D,yt,Xt,rt,ht,0,It,Vt,null),rt>>=1,ht>>=1}}else if(ne.length>0){if(qt&&fe){const rt=Dt(ne[0]);e.texStorage2D(i.TEXTURE_2D,At,Xt,rt.width,rt.height)}for(let rt=0,ht=ne.length;rt<ht;rt++)wt=ne[rt],qt?H&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,It,Vt,wt):e.texImage2D(i.TEXTURE_2D,rt,Xt,It,Vt,wt);E.generateMipmaps=!1}else if(qt){if(fe){const rt=Dt(mt);e.texStorage2D(i.TEXTURE_2D,At,Xt,rt.width,rt.height)}H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,It,Vt,mt)}else e.texImage2D(i.TEXTURE_2D,0,Xt,It,Vt,mt);m(E)&&g(lt),Nt.__version=ct.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function B(P,E,j){if(E.image.length!==6)return;const lt=J(P,E),ut=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+j);const ct=n.get(ut);if(ut.version!==ct.__version||lt===!0){e.activeTexture(i.TEXTURE0+j);const Nt=me.getPrimaries(me.workingColorSpace),bt=E.colorSpace===gi?null:me.getPrimaries(E.colorSpace),Lt=E.colorSpace===gi||Nt===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);const oe=E.isCompressedTexture||E.image[0].isCompressedTexture,mt=E.image[0]&&E.image[0].isDataTexture,It=[];for(let ht=0;ht<6;ht++)!oe&&!mt?It[ht]=x(E.image[ht],!0,s.maxCubemapSize):It[ht]=mt?E.image[ht].image:E.image[ht],It[ht]=Wt(E,It[ht]);const Vt=It[0],Xt=r.convert(E.format,E.colorSpace),wt=r.convert(E.type),ne=b(E.internalFormat,Xt,wt,E.colorSpace),qt=E.isVideoTexture!==!0,fe=ct.__version===void 0||lt===!0,H=ut.dataReady;let At=w(E,Vt);U(i.TEXTURE_CUBE_MAP,E);let rt;if(oe){qt&&fe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,At,ne,Vt.width,Vt.height);for(let ht=0;ht<6;ht++){rt=It[ht].mipmaps;for(let yt=0;yt<rt.length;yt++){const Pt=rt[yt];E.format!==Nn?Xt!==null?qt?H&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,yt,0,0,Pt.width,Pt.height,Xt,Pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,yt,ne,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,yt,0,0,Pt.width,Pt.height,Xt,wt,Pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,yt,ne,Pt.width,Pt.height,0,Xt,wt,Pt.data)}}}else{if(rt=E.mipmaps,qt&&fe){rt.length>0&&At++;const ht=Dt(It[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,At,ne,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(mt){qt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,It[ht].width,It[ht].height,Xt,wt,It[ht].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,ne,It[ht].width,It[ht].height,0,Xt,wt,It[ht].data);for(let yt=0;yt<rt.length;yt++){const se=rt[yt].image[ht].image;qt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,yt+1,0,0,se.width,se.height,Xt,wt,se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,yt+1,ne,se.width,se.height,0,Xt,wt,se.data)}}else{qt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Xt,wt,It[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,ne,Xt,wt,It[ht]);for(let yt=0;yt<rt.length;yt++){const Pt=rt[yt];qt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,yt+1,0,0,Xt,wt,Pt.image[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,yt+1,ne,Xt,wt,Pt.image[ht])}}}m(E)&&g(i.TEXTURE_CUBE_MAP),ct.__version=ut.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function k(P,E,j,lt,ut,ct){const Nt=r.convert(j.format,j.colorSpace),bt=r.convert(j.type),Lt=b(j.internalFormat,Nt,bt,j.colorSpace);if(!n.get(E).__hasExternalTextures){const mt=Math.max(1,E.width>>ct),It=Math.max(1,E.height>>ct);ut===i.TEXTURE_3D||ut===i.TEXTURE_2D_ARRAY?e.texImage3D(ut,ct,Lt,mt,It,E.depth,0,Nt,bt,null):e.texImage2D(ut,ct,Lt,mt,It,0,Nt,bt,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),Mt(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,ut,n.get(j).__webglTexture,0,Yt(E)):(ut===i.TEXTURE_2D||ut>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,lt,ut,n.get(j).__webglTexture,ct),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(P,E,j){if(i.bindRenderbuffer(i.RENDERBUFFER,P),E.depthBuffer){const lt=E.depthTexture,ut=lt&&lt.isDepthTexture?lt.type:null,ct=S(E.stencilBuffer,ut),Nt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=Yt(E);Mt(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt,ct,E.width,E.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,ct,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ct,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Nt,i.RENDERBUFFER,P)}else{const lt=E.textures;for(let ut=0;ut<lt.length;ut++){const ct=lt[ut],Nt=r.convert(ct.format,ct.colorSpace),bt=r.convert(ct.type),Lt=b(ct.internalFormat,Nt,bt,ct.colorSpace),oe=Yt(E);j&&Mt(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,Lt,E.width,E.height):Mt(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,Lt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Lt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function at(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),N(E.depthTexture,0);const lt=n.get(E.depthTexture).__webglTexture,ut=Yt(E);if(E.depthTexture.format===Rs)Mt(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,lt,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,lt,0);else if(E.depthTexture.format===Us)Mt(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,lt,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,lt,0);else throw new Error("Unknown depthTexture format")}function dt(P){const E=n.get(P),j=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const lt=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),lt){const ut=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,lt.removeEventListener("dispose",ut)};lt.addEventListener("dispose",ut),E.__depthDisposeCallback=ut}E.__boundDepthTexture=lt}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");at(E.__webglFramebuffer,P)}else if(j){E.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[lt]),E.__webglDepthbuffer[lt]===void 0)E.__webglDepthbuffer[lt]=i.createRenderbuffer(),st(E.__webglDepthbuffer[lt],P,!1);else{const ut=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=E.__webglDepthbuffer[lt];i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,ct)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),st(E.__webglDepthbuffer,P,!1);else{const lt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,ut)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function vt(P,E,j){const lt=n.get(P);E!==void 0&&k(lt.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&dt(P)}function Ot(P){const E=P.texture,j=n.get(P),lt=n.get(E);P.addEventListener("dispose",I);const ut=P.textures,ct=P.isWebGLCubeRenderTarget===!0,Nt=ut.length>1;if(Nt||(lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture()),lt.__version=E.version,a.memory.textures++),ct){j.__webglFramebuffer=[];for(let bt=0;bt<6;bt++)if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer[bt]=[];for(let Lt=0;Lt<E.mipmaps.length;Lt++)j.__webglFramebuffer[bt][Lt]=i.createFramebuffer()}else j.__webglFramebuffer[bt]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer=[];for(let bt=0;bt<E.mipmaps.length;bt++)j.__webglFramebuffer[bt]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(Nt)for(let bt=0,Lt=ut.length;bt<Lt;bt++){const oe=n.get(ut[bt]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&Mt(P)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let bt=0;bt<ut.length;bt++){const Lt=ut[bt];j.__webglColorRenderbuffer[bt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[bt]);const oe=r.convert(Lt.format,Lt.colorSpace),mt=r.convert(Lt.type),It=b(Lt.internalFormat,oe,mt,Lt.colorSpace,P.isXRRenderTarget===!0),Vt=Yt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,It,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,j.__webglColorRenderbuffer[bt])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),st(j.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ct){e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture),U(i.TEXTURE_CUBE_MAP,E);for(let bt=0;bt<6;bt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Lt=0;Lt<E.mipmaps.length;Lt++)k(j.__webglFramebuffer[bt][Lt],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Lt);else k(j.__webglFramebuffer[bt],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0);m(E)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Nt){for(let bt=0,Lt=ut.length;bt<Lt;bt++){const oe=ut[bt],mt=n.get(oe);e.bindTexture(i.TEXTURE_2D,mt.__webglTexture),U(i.TEXTURE_2D,oe),k(j.__webglFramebuffer,P,oe,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,0),m(oe)&&g(i.TEXTURE_2D)}e.unbindTexture()}else{let bt=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(bt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(bt,lt.__webglTexture),U(bt,E),E.mipmaps&&E.mipmaps.length>0)for(let Lt=0;Lt<E.mipmaps.length;Lt++)k(j.__webglFramebuffer[Lt],P,E,i.COLOR_ATTACHMENT0,bt,Lt);else k(j.__webglFramebuffer,P,E,i.COLOR_ATTACHMENT0,bt,0);m(E)&&g(bt),e.unbindTexture()}P.depthBuffer&&dt(P)}function zt(P){const E=P.textures;for(let j=0,lt=E.length;j<lt;j++){const ut=E[j];if(m(ut)){const ct=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Nt=n.get(ut).__webglTexture;e.bindTexture(ct,Nt),g(ct),e.unbindTexture()}}}const Kt=[],O=[];function ye(P){if(P.samples>0){if(Mt(P)===!1){const E=P.textures,j=P.width,lt=P.height;let ut=i.COLOR_BUFFER_BIT;const ct=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Nt=n.get(P),bt=E.length>1;if(bt)for(let Lt=0;Lt<E.length;Lt++)e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Lt=0;Lt<E.length;Lt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ut|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ut|=i.STENCIL_BUFFER_BIT)),bt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Nt.__webglColorRenderbuffer[Lt]);const oe=n.get(E[Lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,j,lt,0,0,j,lt,ut,i.NEAREST),l===!0&&(Kt.length=0,O.length=0,Kt.push(i.COLOR_ATTACHMENT0+Lt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Kt.push(ct),O.push(ct),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Kt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),bt)for(let Lt=0;Lt<E.length;Lt++){e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,Nt.__webglColorRenderbuffer[Lt]);const oe=n.get(E[Lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,oe,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const E=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Yt(P){return Math.min(s.maxSamples,P.samples)}function Mt(P){const E=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ft(P){const E=a.render.frame;u.get(P)!==E&&(u.set(P,E),P.update())}function Wt(P,E){const j=P.colorSpace,lt=P.format,ut=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||j!==bi&&j!==gi&&(me.getTransfer(j)===Se?(lt!==Nn||ut!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),E}function Dt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=$,this.resetTextureUnits=T,this.setTexture2D=N,this.setTexture2DArray=K,this.setTexture3D=_,this.setTextureCube=M,this.rebindTextures=vt,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=k,this.useMultisampledRTT=Mt}function v_(i,t){function e(n,s=gi){let r;const a=me.getTransfer(s);if(n===ni)return i.UNSIGNED_BYTE;if(n===pl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ml)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Mh)return i.BYTE;if(n===Sh)return i.SHORT;if(n===hr)return i.UNSIGNED_SHORT;if(n===fl)return i.INT;if(n===Hi)return i.UNSIGNED_INT;if(n===Gn)return i.FLOAT;if(n===mr)return i.HALF_FLOAT;if(n===Eh)return i.ALPHA;if(n===wh)return i.RGB;if(n===Nn)return i.RGBA;if(n===Th)return i.LUMINANCE;if(n===Ah)return i.LUMINANCE_ALPHA;if(n===Rs)return i.DEPTH_COMPONENT;if(n===Us)return i.DEPTH_STENCIL;if(n===gl)return i.RED;if(n===_l)return i.RED_INTEGER;if(n===Rh)return i.RG;if(n===vl)return i.RG_INTEGER;if(n===xl)return i.RGBA_INTEGER;if(n===na||n===ia||n===sa||n===ra)if(a===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===na)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===na)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ra)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Po||n===Lo||n===Do||n===Io)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Po)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Lo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Do)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Io)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Uo||n===No||n===Oo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Uo||n===No)return a===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Oo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Fo||n===ko||n===Bo||n===zo||n===Ho||n===Vo||n===Go||n===Wo||n===Xo||n===$o||n===Yo||n===qo||n===Ko||n===Zo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ko)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ho)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Go)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$o)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ko)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===aa||n===jo||n===Jo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===aa)return a===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ch||n===Qo||n===tl||n===el)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===aa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Qo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===tl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===el)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class x_ extends yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class rn extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const y_={type:"move"};class io{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),g=this._getHandJoint(h,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const u=h.joints["index-finger-tip"],p=h.joints["thumb-tip"],c=u.position.distanceTo(p.position),d=.02,f=.005;h.inputState.pinching&&c>d+f?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&c<=d-f&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(y_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new rn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const M_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,S_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class b_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ze,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Si({vertexShader:M_,fragmentShader:S_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new jt(new On(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class E_ extends Wi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,h=null,u=null,p=null,c=null,d=null,f=null;const x=new b_,m=e.getContextAttributes();let g=null,b=null;const S=[],w=[],q=new xt;let I=null;const C=new yn;C.layers.enable(1),C.viewport=new ve;const G=new yn;G.layers.enable(2),G.viewport=new ve;const tt=[C,G],v=new x_;v.layers.enable(1),v.layers.enable(2);let T=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let k=S[B];return k===void 0&&(k=new io,S[B]=k),k.getTargetRaySpace()},this.getControllerGrip=function(B){let k=S[B];return k===void 0&&(k=new io,S[B]=k),k.getGripSpace()},this.getHand=function(B){let k=S[B];return k===void 0&&(k=new io,S[B]=k),k.getHandSpace()};function W(B){const k=w.indexOf(B.inputSource);if(k===-1)return;const st=S[k];st!==void 0&&(st.update(B.inputSource,B.frame,h||a),st.dispatchEvent({type:B.type,data:B.inputSource}))}function N(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",K);for(let B=0;B<S.length;B++){const k=w[B];k!==null&&(w[B]=null,S[B].disconnect(k))}T=null,$=null,x.reset(),t.setRenderTarget(g),d=null,c=null,p=null,s=null,b=null,et.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(q.width,q.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(B){h=B},this.getBaseLayer=function(){return c!==null?c:d},this.getBinding=function(){return p},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",N),s.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(q),s.renderState.layers===void 0){const k={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,k),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Vi(d.framebufferWidth,d.framebufferHeight,{format:Nn,type:ni,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let k=null,st=null,at=null;m.depth&&(at=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,k=m.stencil?Us:Rs,st=m.stencil?Is:Hi);const dt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};p=new XRWebGLBinding(s,e),c=p.createProjectionLayer(dt),s.updateRenderState({layers:[c]}),t.setPixelRatio(1),t.setSize(c.textureWidth,c.textureHeight,!1),b=new Vi(c.textureWidth,c.textureHeight,{format:Nn,type:ni,depthTexture:new Gh(c.textureWidth,c.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await s.requestReferenceSpace(o),et.setContext(s),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function K(B){for(let k=0;k<B.removed.length;k++){const st=B.removed[k],at=w.indexOf(st);at>=0&&(w[at]=null,S[at].disconnect(st))}for(let k=0;k<B.added.length;k++){const st=B.added[k];let at=w.indexOf(st);if(at===-1){for(let vt=0;vt<S.length;vt++)if(vt>=w.length){w.push(st),at=vt;break}else if(w[vt]===null){w[vt]=st,at=vt;break}if(at===-1)break}const dt=S[at];dt&&dt.connect(st)}}const _=new F,M=new F;function y(B,k,st){_.setFromMatrixPosition(k.matrixWorld),M.setFromMatrixPosition(st.matrixWorld);const at=_.distanceTo(M),dt=k.projectionMatrix.elements,vt=st.projectionMatrix.elements,Ot=dt[14]/(dt[10]-1),zt=dt[14]/(dt[10]+1),Kt=(dt[9]+1)/dt[5],O=(dt[9]-1)/dt[5],ye=(dt[8]-1)/dt[0],Yt=(vt[8]+1)/vt[0],Mt=Ot*ye,ft=Ot*Yt,Wt=at/(-ye+Yt),Dt=Wt*-ye;if(k.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Dt),B.translateZ(Wt),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),dt[10]===-1)B.projectionMatrix.copy(k.projectionMatrix),B.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{const P=Ot+Wt,E=zt+Wt,j=Mt-Dt,lt=ft+(at-Dt),ut=Kt*zt/E*P,ct=O*zt/E*P;B.projectionMatrix.makePerspective(j,lt,ut,ct,P,E),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function R(B,k){k===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(k.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;let k=B.near,st=B.far;x.texture!==null&&(x.depthNear>0&&(k=x.depthNear),x.depthFar>0&&(st=x.depthFar)),v.near=G.near=C.near=k,v.far=G.far=C.far=st,(T!==v.near||$!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,$=v.far);const at=B.parent,dt=v.cameras;R(v,at);for(let vt=0;vt<dt.length;vt++)R(dt[vt],at);dt.length===2?y(v,C,G):v.projectionMatrix.copy(C.projectionMatrix),D(B,v,at)};function D(B,k,st){st===null?B.matrix.copy(k.matrixWorld):(B.matrix.copy(st.matrixWorld),B.matrix.invert(),B.matrix.multiply(k.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(k.projectionMatrix),B.projectionMatrixInverse.copy(k.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=ur*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(c===null&&d===null))return l},this.setFoveation=function(B){l=B,c!==null&&(c.fixedFoveation=B),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=B)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let U=null;function J(B,k){if(u=k.getViewerPose(h||a),f=k,u!==null){const st=u.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let at=!1;st.length!==v.cameras.length&&(v.cameras.length=0,at=!0);for(let vt=0;vt<st.length;vt++){const Ot=st[vt];let zt=null;if(d!==null)zt=d.getViewport(Ot);else{const O=p.getViewSubImage(c,Ot);zt=O.viewport,vt===0&&(t.setRenderTargetTextures(b,O.colorTexture,c.ignoreDepthValues?void 0:O.depthStencilTexture),t.setRenderTarget(b))}let Kt=tt[vt];Kt===void 0&&(Kt=new yn,Kt.layers.enable(vt),Kt.viewport=new ve,tt[vt]=Kt),Kt.matrix.fromArray(Ot.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(Ot.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(zt.x,zt.y,zt.width,zt.height),vt===0&&(v.matrix.copy(Kt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),at===!0&&v.cameras.push(Kt)}const dt=s.enabledFeatures;if(dt&&dt.includes("depth-sensing")){const vt=p.getDepthInformation(st[0]);vt&&vt.isValid&&vt.texture&&x.init(t,vt,s.renderState)}}for(let st=0;st<S.length;st++){const at=w[st],dt=S[st];at!==null&&dt!==void 0&&dt.update(at,k,h||a)}U&&U(B,k),k.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:k}),f=null}const et=new Hh;et.setAnimationLoop(J),this.setAnimationLoop=function(B){U=B},this.dispose=function(){}}}const Di=new An,w_=new ue;function T_(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,kh(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,b,S,w){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(m,g):g.isMeshToonMaterial?(r(m,g),p(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g)):g.isMeshStandardMaterial?(r(m,g),c(m,g),g.isMeshPhysicalMaterial&&d(m,g,w)):g.isMeshMatcapMaterial?(r(m,g),f(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,b,S):g.isSpriteMaterial?h(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===an&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===an&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const b=t.get(g),S=b.envMap,w=b.envMapRotation;S&&(m.envMap.value=S,Di.copy(w),Di.x*=-1,Di.y*=-1,Di.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),m.envMapRotation.value.setFromMatrix4(w_.makeRotationFromEuler(Di)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,b,S){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*b,m.scale.value=S*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function p(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function c(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,b){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===an&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function f(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){const b=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function A_(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){const w=S.program;n.uniformBlockBinding(b,w)}function h(b,S){let w=s[b.id];w===void 0&&(f(b),w=u(b),s[b.id]=w,b.addEventListener("dispose",m));const q=S.program;n.updateUBOMapping(b,q);const I=t.render.frame;r[b.id]!==I&&(c(b),r[b.id]=I)}function u(b){const S=p();b.__bindingPointIndex=S;const w=i.createBuffer(),q=b.__size,I=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,q,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,w),w}function p(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(b){const S=s[b.id],w=b.uniforms,q=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let I=0,C=w.length;I<C;I++){const G=Array.isArray(w[I])?w[I]:[w[I]];for(let tt=0,v=G.length;tt<v;tt++){const T=G[tt];if(d(T,I,tt,q)===!0){const $=T.__offset,W=Array.isArray(T.value)?T.value:[T.value];let N=0;for(let K=0;K<W.length;K++){const _=W[K],M=x(_);typeof _=="number"||typeof _=="boolean"?(T.__data[0]=_,i.bufferSubData(i.UNIFORM_BUFFER,$+N,T.__data)):_.isMatrix3?(T.__data[0]=_.elements[0],T.__data[1]=_.elements[1],T.__data[2]=_.elements[2],T.__data[3]=0,T.__data[4]=_.elements[3],T.__data[5]=_.elements[4],T.__data[6]=_.elements[5],T.__data[7]=0,T.__data[8]=_.elements[6],T.__data[9]=_.elements[7],T.__data[10]=_.elements[8],T.__data[11]=0):(_.toArray(T.__data,N),N+=M.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,$,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(b,S,w,q){const I=b.value,C=S+"_"+w;if(q[C]===void 0)return typeof I=="number"||typeof I=="boolean"?q[C]=I:q[C]=I.clone(),!0;{const G=q[C];if(typeof I=="number"||typeof I=="boolean"){if(G!==I)return q[C]=I,!0}else if(G.equals(I)===!1)return G.copy(I),!0}return!1}function f(b){const S=b.uniforms;let w=0;const q=16;for(let C=0,G=S.length;C<G;C++){const tt=Array.isArray(S[C])?S[C]:[S[C]];for(let v=0,T=tt.length;v<T;v++){const $=tt[v],W=Array.isArray($.value)?$.value:[$.value];for(let N=0,K=W.length;N<K;N++){const _=W[N],M=x(_),y=w%q,R=y%M.boundary,D=y+R;w+=R,D!==0&&q-D<M.storage&&(w+=q-D),$.__data=new Float32Array(M.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=w,w+=M.storage}}}const I=w%q;return I>0&&(w+=q-I),b.__size=w,b.__cache={},this}function x(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function m(b){const S=b.target;S.removeEventListener("dispose",m);const w=a.indexOf(S.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function g(){for(const b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:h,dispose:g}}class R_{constructor(t={}){const{canvas:e=mf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1}=t;this.isWebGLRenderer=!0;let c;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");c=n.getContextAttributes().alpha}else c=a;const d=new Uint32Array(4),f=new Int32Array(4);let x=null,m=null;const g=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ke,this.toneMapping=vi,this.toneMappingExposure=1;const S=this;let w=!1,q=0,I=0,C=null,G=-1,tt=null;const v=new ve,T=new ve;let $=null;const W=new Zt(0);let N=0,K=e.width,_=e.height,M=1,y=null,R=null;const D=new ve(0,0,K,_),U=new ve(0,0,K,_);let J=!1;const et=new El;let B=!1,k=!1;const st=new ue,at=new ue,dt=new F,vt=new ve,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function Kt(){return C===null?M:1}let O=n;function ye(A,X){return e.getContext(A,X)}try{const A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${dl}`),e.addEventListener("webglcontextlost",ht,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",Pt,!1),O===null){const X="webgl2";if(O=ye(X,A),O===null)throw ye(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Yt,Mt,ft,Wt,Dt,P,E,j,lt,ut,ct,Nt,bt,Lt,oe,mt,It,Vt,Xt,wt,ne,qt,fe,H;function At(){Yt=new I0(O),Yt.init(),qt=new v_(O,Yt),Mt=new A0(O,Yt,t,qt),ft=new m_(O),Mt.reverseDepthBuffer&&ft.buffers.depth.setReversed(!0),Wt=new O0(O),Dt=new t_,P=new __(O,Yt,ft,Dt,Mt,qt,Wt),E=new C0(S),j=new D0(S),lt=new Gf(O),fe=new w0(O,lt),ut=new U0(O,lt,Wt,fe),ct=new k0(O,ut,lt,Wt),Xt=new F0(O,Mt,P),mt=new R0(Dt),Nt=new Qg(S,E,j,Yt,Mt,fe,mt),bt=new T_(S,Dt),Lt=new n_,oe=new l_(Yt),Vt=new E0(S,E,j,ft,ct,c,l),It=new f_(S,ct,Mt),H=new A_(O,Wt,Mt,ft),wt=new T0(O,Yt,Wt),ne=new N0(O,Yt,Wt),Wt.programs=Nt.programs,S.capabilities=Mt,S.extensions=Yt,S.properties=Dt,S.renderLists=Lt,S.shadowMap=It,S.state=ft,S.info=Wt}At();const rt=new E_(S,O);this.xr=rt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=Yt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Yt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return M},this.setPixelRatio=function(A){A!==void 0&&(M=A,this.setSize(K,_,!1))},this.getSize=function(A){return A.set(K,_)},this.setSize=function(A,X,Q=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=A,_=X,e.width=Math.floor(A*M),e.height=Math.floor(X*M),Q===!0&&(e.style.width=A+"px",e.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(K*M,_*M).floor()},this.setDrawingBufferSize=function(A,X,Q){K=A,_=X,M=Q,e.width=Math.floor(A*Q),e.height=Math.floor(X*Q),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(v)},this.getViewport=function(A){return A.copy(D)},this.setViewport=function(A,X,Q,nt){A.isVector4?D.set(A.x,A.y,A.z,A.w):D.set(A,X,Q,nt),ft.viewport(v.copy(D).multiplyScalar(M).round())},this.getScissor=function(A){return A.copy(U)},this.setScissor=function(A,X,Q,nt){A.isVector4?U.set(A.x,A.y,A.z,A.w):U.set(A,X,Q,nt),ft.scissor(T.copy(U).multiplyScalar(M).round())},this.getScissorTest=function(){return J},this.setScissorTest=function(A){ft.setScissorTest(J=A)},this.setOpaqueSort=function(A){y=A},this.setTransparentSort=function(A){R=A},this.getClearColor=function(A){return A.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor.apply(Vt,arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha.apply(Vt,arguments)},this.clear=function(A=!0,X=!0,Q=!0){let nt=0;if(A){let Y=!1;if(C!==null){const gt=C.texture.format;Y=gt===xl||gt===vl||gt===_l}if(Y){const gt=C.texture.type,Tt=gt===ni||gt===Hi||gt===hr||gt===Is||gt===pl||gt===ml,Ut=Vt.getClearColor(),Rt=Vt.getClearAlpha(),$t=Ut.r,Gt=Ut.g,Ct=Ut.b;Tt?(d[0]=$t,d[1]=Gt,d[2]=Ct,d[3]=Rt,O.clearBufferuiv(O.COLOR,0,d)):(f[0]=$t,f[1]=Gt,f[2]=Ct,f[3]=Rt,O.clearBufferiv(O.COLOR,0,f))}else nt|=O.COLOR_BUFFER_BIT}X&&(nt|=O.DEPTH_BUFFER_BIT,O.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Q&&(nt|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",Pt,!1),Lt.dispose(),oe.dispose(),Dt.dispose(),E.dispose(),j.dispose(),ct.dispose(),fe.dispose(),H.dispose(),Nt.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",si),rt.removeEventListener("sessionend",Ei),Fn.stop()};function ht(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const A=Wt.autoReset,X=It.enabled,Q=It.autoUpdate,nt=It.needsUpdate,Y=It.type;At(),Wt.autoReset=A,It.enabled=X,It.autoUpdate=Q,It.needsUpdate=nt,It.type=Y}function Pt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function se(A){const X=A.target;X.removeEventListener("dispose",se),Re(X)}function Re(A){$e(A),Dt.remove(A)}function $e(A){const X=Dt.get(A).programs;X!==void 0&&(X.forEach(function(Q){Nt.releaseProgram(Q)}),A.isShaderMaterial&&Nt.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,Q,nt,Y,gt){X===null&&(X=Ot);const Tt=Y.isMesh&&Y.matrixWorld.determinant()<0,Ut=je(A,X,Q,nt,Y);ft.setMaterial(nt,Tt);let Rt=Q.index,$t=1;if(nt.wireframe===!0){if(Rt=ut.getWireframeAttribute(Q),Rt===void 0)return;$t=2}const Gt=Q.drawRange,Ct=Q.attributes.position;let ie=Gt.start*$t,pe=(Gt.start+Gt.count)*$t;gt!==null&&(ie=Math.max(ie,gt.start*$t),pe=Math.min(pe,(gt.start+gt.count)*$t)),Rt!==null?(ie=Math.max(ie,0),pe=Math.min(pe,Rt.count)):Ct!=null&&(ie=Math.max(ie,0),pe=Math.min(pe,Ct.count));const Ee=pe-ie;if(Ee<0||Ee===1/0)return;fe.setup(Y,nt,Ut,Q,Rt);let Je,he=wt;if(Rt!==null&&(Je=lt.get(Rt),he=ne,he.setIndex(Je)),Y.isMesh)nt.wireframe===!0?(ft.setLineWidth(nt.wireframeLinewidth*Kt()),he.setMode(O.LINES)):he.setMode(O.TRIANGLES);else if(Y.isLine){let Bt=nt.linewidth;Bt===void 0&&(Bt=1),ft.setLineWidth(Bt*Kt()),Y.isLineSegments?he.setMode(O.LINES):Y.isLineLoop?he.setMode(O.LINE_LOOP):he.setMode(O.LINE_STRIP)}else Y.isPoints?he.setMode(O.POINTS):Y.isSprite&&he.setMode(O.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)he.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(Yt.get("WEBGL_multi_draw"))he.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Bt=Y._multiDrawStarts,Ie=Y._multiDrawCounts,te=Y._multiDrawCount,pn=Rt?lt.get(Rt).bytesPerElement:1,$n=Dt.get(nt).currentProgram.getUniforms();for(let We=0;We<te;We++)$n.setValue(O,"_gl_DrawID",We),he.render(Bt[We]/pn,Ie[We])}else if(Y.isInstancedMesh)he.renderInstances(ie,Ee,Y.count);else if(Q.isInstancedBufferGeometry){const Bt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ie=Math.min(Q.instanceCount,Bt);he.renderInstances(ie,Ee,Ie)}else he.render(ie,Ee)};function le(A,X,Q){A.transparent===!0&&A.side===In&&A.forceSinglePass===!1?(A.side=an,A.needsUpdate=!0,Ki(A,X,Q),A.side=yi,A.needsUpdate=!0,Ki(A,X,Q),A.side=In):Ki(A,X,Q)}this.compile=function(A,X,Q=null){Q===null&&(Q=A),m=oe.get(Q),m.init(X),b.push(m),Q.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),A!==Q&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),m.setupLights();const nt=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const gt=Y.material;if(gt)if(Array.isArray(gt))for(let Tt=0;Tt<gt.length;Tt++){const Ut=gt[Tt];le(Ut,Q,Y),nt.add(Ut)}else le(gt,Q,Y),nt.add(gt)}),b.pop(),m=null,nt},this.compileAsync=function(A,X,Q=null){const nt=this.compile(A,X,Q);return new Promise(Y=>{function gt(){if(nt.forEach(function(Tt){Dt.get(Tt).currentProgram.isReady()&&nt.delete(Tt)}),nt.size===0){Y(A);return}setTimeout(gt,10)}Yt.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let Ce=null;function on(A){Ce&&Ce(A)}function si(){Fn.stop()}function Ei(){Fn.start()}const Fn=new Hh;Fn.setAnimationLoop(on),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(A){Ce=A,rt.setAnimationLoop(A),A===null?Fn.stop():Fn.start()},rt.addEventListener("sessionstart",si),rt.addEventListener("sessionend",Ei),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(X),X=rt.getCamera()),A.isScene===!0&&A.onBeforeRender(S,A,X,C),m=oe.get(A,b.length),m.init(X),b.push(m),at.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),et.setFromProjectionMatrix(at),k=this.localClippingEnabled,B=mt.init(this.clippingPlanes,k),x=Lt.get(A,g.length),x.init(),g.push(x),rt.enabled===!0&&rt.isPresenting===!0){const gt=S.xr.getDepthSensingMesh();gt!==null&&Yi(gt,X,-1/0,S.sortObjects)}Yi(A,X,0,S.sortObjects),x.finish(),S.sortObjects===!0&&x.sort(y,R),zt=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,zt&&Vt.addToRenderList(x,A),this.info.render.frame++,B===!0&&mt.beginShadows();const Q=m.state.shadowsArray;It.render(Q,A,X),B===!0&&mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const nt=x.opaque,Y=x.transmissive;if(m.setupLights(),X.isArrayCamera){const gt=X.cameras;if(Y.length>0)for(let Tt=0,Ut=gt.length;Tt<Ut;Tt++){const Rt=gt[Tt];Bs(nt,Y,A,Rt)}zt&&Vt.render(A);for(let Tt=0,Ut=gt.length;Tt<Ut;Tt++){const Rt=gt[Tt];ks(x,A,Rt,Rt.viewport)}}else Y.length>0&&Bs(nt,Y,A,X),zt&&Vt.render(A),ks(x,A,X);C!==null&&(P.updateMultisampleRenderTarget(C),P.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(S,A,X),fe.resetDefaultState(),G=-1,tt=null,b.pop(),b.length>0?(m=b[b.length-1],B===!0&&mt.setGlobalState(S.clippingPlanes,m.state.camera)):m=null,g.pop(),g.length>0?x=g[g.length-1]:x=null};function Yi(A,X,Q,nt){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||et.intersectsSprite(A)){nt&&vt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(at);const Tt=ct.update(A),Ut=A.material;Ut.visible&&x.push(A,Tt,Ut,Q,vt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||et.intersectsObject(A))){const Tt=ct.update(A),Ut=A.material;if(nt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),vt.copy(A.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),vt.copy(Tt.boundingSphere.center)),vt.applyMatrix4(A.matrixWorld).applyMatrix4(at)),Array.isArray(Ut)){const Rt=Tt.groups;for(let $t=0,Gt=Rt.length;$t<Gt;$t++){const Ct=Rt[$t],ie=Ut[Ct.materialIndex];ie&&ie.visible&&x.push(A,Tt,ie,Q,vt.z,Ct)}}else Ut.visible&&x.push(A,Tt,Ut,Q,vt.z,null)}}const gt=A.children;for(let Tt=0,Ut=gt.length;Tt<Ut;Tt++)Yi(gt[Tt],X,Q,nt)}function ks(A,X,Q,nt){const Y=A.opaque,gt=A.transmissive,Tt=A.transparent;m.setupLightsView(Q),B===!0&&mt.setGlobalState(S.clippingPlanes,Q),nt&&ft.viewport(v.copy(nt)),Y.length>0&&qi(Y,X,Q),gt.length>0&&qi(gt,X,Q),Tt.length>0&&qi(Tt,X,Q),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function Bs(A,X,Q,nt){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[nt.id]===void 0&&(m.state.transmissionRenderTarget[nt.id]=new Vi(1,1,{generateMipmaps:!0,type:Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float")?mr:ni,minFilter:Bi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:me.workingColorSpace}));const gt=m.state.transmissionRenderTarget[nt.id],Tt=nt.viewport||v;gt.setSize(Tt.z,Tt.w);const Ut=S.getRenderTarget();S.setRenderTarget(gt),S.getClearColor(W),N=S.getClearAlpha(),N<1&&S.setClearColor(16777215,.5),S.clear(),zt&&Vt.render(Q);const Rt=S.toneMapping;S.toneMapping=vi;const $t=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),m.setupLightsView(nt),B===!0&&mt.setGlobalState(S.clippingPlanes,nt),qi(A,Q,nt),P.updateMultisampleRenderTarget(gt),P.updateRenderTargetMipmap(gt),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Ct=0,ie=X.length;Ct<ie;Ct++){const pe=X[Ct],Ee=pe.object,Je=pe.geometry,he=pe.material,Bt=pe.group;if(he.side===In&&Ee.layers.test(nt.layers)){const Ie=he.side;he.side=an,he.needsUpdate=!0,_r(Ee,Q,nt,Je,he,Bt),he.side=Ie,he.needsUpdate=!0,Gt=!0}}Gt===!0&&(P.updateMultisampleRenderTarget(gt),P.updateRenderTargetMipmap(gt))}S.setRenderTarget(Ut),S.setClearColor(W,N),$t!==void 0&&(nt.viewport=$t),S.toneMapping=Rt}function qi(A,X,Q){const nt=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,gt=A.length;Y<gt;Y++){const Tt=A[Y],Ut=Tt.object,Rt=Tt.geometry,$t=nt===null?Tt.material:nt,Gt=Tt.group;Ut.layers.test(Q.layers)&&_r(Ut,X,Q,Rt,$t,Gt)}}function _r(A,X,Q,nt,Y,gt){A.onBeforeRender(S,X,Q,nt,Y,gt),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(S,X,Q,nt,A,gt),Y.transparent===!0&&Y.side===In&&Y.forceSinglePass===!1?(Y.side=an,Y.needsUpdate=!0,S.renderBufferDirect(Q,X,nt,Y,A,gt),Y.side=yi,Y.needsUpdate=!0,S.renderBufferDirect(Q,X,nt,Y,A,gt),Y.side=In):S.renderBufferDirect(Q,X,nt,Y,A,gt),A.onAfterRender(S,X,Q,nt,Y,gt)}function Ki(A,X,Q){X.isScene!==!0&&(X=Ot);const nt=Dt.get(A),Y=m.state.lights,gt=m.state.shadowsArray,Tt=Y.state.version,Ut=Nt.getParameters(A,Y.state,gt,X,Q),Rt=Nt.getProgramCacheKey(Ut);let $t=nt.programs;nt.environment=A.isMeshStandardMaterial?X.environment:null,nt.fog=X.fog,nt.envMap=(A.isMeshStandardMaterial?j:E).get(A.envMap||nt.environment),nt.envMapRotation=nt.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,$t===void 0&&(A.addEventListener("dispose",se),$t=new Map,nt.programs=$t);let Gt=$t.get(Rt);if(Gt!==void 0){if(nt.currentProgram===Gt&&nt.lightsStateVersion===Tt)return fn(A,Ut),Gt}else Ut.uniforms=Nt.getUniforms(A),A.onBeforeCompile(Ut,S),Gt=Nt.acquireProgram(Ut,Rt),$t.set(Rt,Gt),nt.uniforms=Ut.uniforms;const Ct=nt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ct.clippingPlanes=mt.uniform),fn(A,Ut),nt.needsLights=ba(A),nt.lightsStateVersion=Tt,nt.needsLights&&(Ct.ambientLightColor.value=Y.state.ambient,Ct.lightProbe.value=Y.state.probe,Ct.directionalLights.value=Y.state.directional,Ct.directionalLightShadows.value=Y.state.directionalShadow,Ct.spotLights.value=Y.state.spot,Ct.spotLightShadows.value=Y.state.spotShadow,Ct.rectAreaLights.value=Y.state.rectArea,Ct.ltc_1.value=Y.state.rectAreaLTC1,Ct.ltc_2.value=Y.state.rectAreaLTC2,Ct.pointLights.value=Y.state.point,Ct.pointLightShadows.value=Y.state.pointShadow,Ct.hemisphereLights.value=Y.state.hemi,Ct.directionalShadowMap.value=Y.state.directionalShadowMap,Ct.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ct.spotShadowMap.value=Y.state.spotShadowMap,Ct.spotLightMatrix.value=Y.state.spotLightMatrix,Ct.spotLightMap.value=Y.state.spotLightMap,Ct.pointShadowMap.value=Y.state.pointShadowMap,Ct.pointShadowMatrix.value=Y.state.pointShadowMatrix),nt.currentProgram=Gt,nt.uniformsList=null,Gt}function Le(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=la.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function fn(A,X){const Q=Dt.get(A);Q.outputColorSpace=X.outputColorSpace,Q.batching=X.batching,Q.batchingColor=X.batchingColor,Q.instancing=X.instancing,Q.instancingColor=X.instancingColor,Q.instancingMorph=X.instancingMorph,Q.skinning=X.skinning,Q.morphTargets=X.morphTargets,Q.morphNormals=X.morphNormals,Q.morphColors=X.morphColors,Q.morphTargetsCount=X.morphTargetsCount,Q.numClippingPlanes=X.numClippingPlanes,Q.numIntersection=X.numClipIntersection,Q.vertexAlphas=X.vertexAlphas,Q.vertexTangents=X.vertexTangents,Q.toneMapping=X.toneMapping}function je(A,X,Q,nt,Y){X.isScene!==!0&&(X=Ot),P.resetTextureUnits();const gt=X.fog,Tt=nt.isMeshStandardMaterial?X.environment:null,Ut=C===null?S.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:bi,Rt=(nt.isMeshStandardMaterial?j:E).get(nt.envMap||Tt),$t=nt.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Gt=!!Q.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Ct=!!Q.morphAttributes.position,ie=!!Q.morphAttributes.normal,pe=!!Q.morphAttributes.color;let Ee=vi;nt.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ee=S.toneMapping);const Je=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,he=Je!==void 0?Je.length:0,Bt=Dt.get(nt),Ie=m.state.lights;if(B===!0&&(k===!0||A!==tt)){const Qe=A===tt&&nt.id===G;mt.setState(nt,A,Qe)}let te=!1;nt.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==Ie.state.version||Bt.outputColorSpace!==Ut||Y.isBatchedMesh&&Bt.batching===!1||!Y.isBatchedMesh&&Bt.batching===!0||Y.isBatchedMesh&&Bt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Bt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Bt.instancing===!1||!Y.isInstancedMesh&&Bt.instancing===!0||Y.isSkinnedMesh&&Bt.skinning===!1||!Y.isSkinnedMesh&&Bt.skinning===!0||Y.isInstancedMesh&&Bt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Bt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Bt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Bt.instancingMorph===!1&&Y.morphTexture!==null||Bt.envMap!==Rt||nt.fog===!0&&Bt.fog!==gt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==mt.numPlanes||Bt.numIntersection!==mt.numIntersection)||Bt.vertexAlphas!==$t||Bt.vertexTangents!==Gt||Bt.morphTargets!==Ct||Bt.morphNormals!==ie||Bt.morphColors!==pe||Bt.toneMapping!==Ee||Bt.morphTargetsCount!==he)&&(te=!0):(te=!0,Bt.__version=nt.version);let pn=Bt.currentProgram;te===!0&&(pn=Ki(nt,X,Y));let $n=!1,We=!1,ji=!1;const Te=pn.getUniforms(),kn=Bt.uniforms;if(ft.useProgram(pn.program)&&($n=!0,We=!0,ji=!0),nt.id!==G&&(G=nt.id,We=!0),$n||tt!==A){Mt.reverseDepthBuffer?(st.copy(A.projectionMatrix),_f(st),vf(st),Te.setValue(O,"projectionMatrix",st)):Te.setValue(O,"projectionMatrix",A.projectionMatrix),Te.setValue(O,"viewMatrix",A.matrixWorldInverse);const Qe=Te.map.cameraPosition;Qe!==void 0&&Qe.setValue(O,dt.setFromMatrixPosition(A.matrixWorld)),Mt.logarithmicDepthBuffer&&Te.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Te.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),tt!==A&&(tt=A,We=!0,ji=!0)}if(Y.isSkinnedMesh){Te.setOptional(O,Y,"bindMatrix"),Te.setOptional(O,Y,"bindMatrixInverse");const Qe=Y.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),Te.setValue(O,"boneTexture",Qe.boneTexture,P))}Y.isBatchedMesh&&(Te.setOptional(O,Y,"batchingTexture"),Te.setValue(O,"batchingTexture",Y._matricesTexture,P),Te.setOptional(O,Y,"batchingIdTexture"),Te.setValue(O,"batchingIdTexture",Y._indirectTexture,P),Te.setOptional(O,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Te.setValue(O,"batchingColorTexture",Y._colorsTexture,P));const Ji=Q.morphAttributes;if((Ji.position!==void 0||Ji.normal!==void 0||Ji.color!==void 0)&&Xt.update(Y,Q,pn),(We||Bt.receiveShadow!==Y.receiveShadow)&&(Bt.receiveShadow=Y.receiveShadow,Te.setValue(O,"receiveShadow",Y.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(kn.envMap.value=Rt,kn.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),nt.isMeshStandardMaterial&&nt.envMap===null&&X.environment!==null&&(kn.envMapIntensity.value=X.environmentIntensity),We&&(Te.setValue(O,"toneMappingExposure",S.toneMappingExposure),Bt.needsLights&&Zi(kn,ji),gt&&nt.fog===!0&&bt.refreshFogUniforms(kn,gt),bt.refreshMaterialUniforms(kn,nt,M,_,m.state.transmissionRenderTarget[A.id]),la.upload(O,Le(Bt),kn,P)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(la.upload(O,Le(Bt),kn,P),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Te.setValue(O,"center",Y.center),Te.setValue(O,"modelViewMatrix",Y.modelViewMatrix),Te.setValue(O,"normalMatrix",Y.normalMatrix),Te.setValue(O,"modelMatrix",Y.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){const Qe=nt.uniformsGroups;for(let zs=0,vr=Qe.length;zs<vr;zs++){const Hs=Qe[zs];H.update(Hs,pn),H.bind(Hs,pn)}}return pn}function Zi(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function ba(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,X,Q){Dt.get(A.texture).__webglTexture=X,Dt.get(A.depthTexture).__webglTexture=Q;const nt=Dt.get(A);nt.__hasExternalTextures=!0,nt.__autoAllocateDepthBuffer=Q===void 0,nt.__autoAllocateDepthBuffer||Yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),nt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,X){const Q=Dt.get(A);Q.__webglFramebuffer=X,Q.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,Q=0){C=A,q=X,I=Q;let nt=!0,Y=null,gt=!1,Tt=!1;if(A){const Rt=Dt.get(A);if(Rt.__useDefaultFramebuffer!==void 0)ft.bindFramebuffer(O.FRAMEBUFFER,null),nt=!1;else if(Rt.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(Rt.__hasExternalTextures)P.rebindTextures(A,Dt.get(A.texture).__webglTexture,Dt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ct=A.depthTexture;if(Rt.__boundDepthTexture!==Ct){if(Ct!==null&&Dt.has(Ct)&&(A.width!==Ct.image.width||A.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}const $t=A.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Tt=!0);const Gt=Dt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Gt[X])?Y=Gt[X][Q]:Y=Gt[X],gt=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?Y=Dt.get(A).__webglMultisampledFramebuffer:Array.isArray(Gt)?Y=Gt[Q]:Y=Gt,v.copy(A.viewport),T.copy(A.scissor),$=A.scissorTest}else v.copy(D).multiplyScalar(M).floor(),T.copy(U).multiplyScalar(M).floor(),$=J;if(ft.bindFramebuffer(O.FRAMEBUFFER,Y)&&nt&&ft.drawBuffers(A,Y),ft.viewport(v),ft.scissor(T),ft.setScissorTest($),gt){const Rt=Dt.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+X,Rt.__webglTexture,Q)}else if(Tt){const Rt=Dt.get(A.texture),$t=X||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Rt.__webglTexture,Q||0,$t)}G=-1},this.readRenderTargetPixels=function(A,X,Q,nt,Y,gt,Tt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=Dt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ut=Ut[Tt]),Ut){ft.bindFramebuffer(O.FRAMEBUFFER,Ut);try{const Rt=A.texture,$t=Rt.format,Gt=Rt.type;if(!Mt.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-nt&&Q>=0&&Q<=A.height-Y&&O.readPixels(X,Q,nt,Y,qt.convert($t),qt.convert(Gt),gt)}finally{const Rt=C!==null?Dt.get(C).__webglFramebuffer:null;ft.bindFramebuffer(O.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(A,X,Q,nt,Y,gt,Tt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=Dt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ut=Ut[Tt]),Ut){const Rt=A.texture,$t=Rt.format,Gt=Rt.type;if(!Mt.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=A.width-nt&&Q>=0&&Q<=A.height-Y){ft.bindFramebuffer(O.FRAMEBUFFER,Ut);const Ct=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ct),O.bufferData(O.PIXEL_PACK_BUFFER,gt.byteLength,O.STREAM_READ),O.readPixels(X,Q,nt,Y,qt.convert($t),qt.convert(Gt),0);const ie=C!==null?Dt.get(C).__webglFramebuffer:null;ft.bindFramebuffer(O.FRAMEBUFFER,ie);const pe=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await gf(O,pe,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ct),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,gt),O.deleteBuffer(Ct),O.deleteSync(pe),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,X=null,Q=0){A.isTexture!==!0&&(oa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1]);const nt=Math.pow(2,-Q),Y=Math.floor(A.image.width*nt),gt=Math.floor(A.image.height*nt),Tt=X!==null?X.x:0,Ut=X!==null?X.y:0;P.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,Q,0,0,Tt,Ut,Y,gt),ft.unbindTexture()},this.copyTextureToTexture=function(A,X,Q=null,nt=null,Y=0){A.isTexture!==!0&&(oa("WebGLRenderer: copyTextureToTexture function signature has changed."),nt=arguments[0]||null,A=arguments[1],X=arguments[2],Y=arguments[3]||0,Q=null);let gt,Tt,Ut,Rt,$t,Gt;Q!==null?(gt=Q.max.x-Q.min.x,Tt=Q.max.y-Q.min.y,Ut=Q.min.x,Rt=Q.min.y):(gt=A.image.width,Tt=A.image.height,Ut=0,Rt=0),nt!==null?($t=nt.x,Gt=nt.y):($t=0,Gt=0);const Ct=qt.convert(X.format),ie=qt.convert(X.type);P.setTexture2D(X,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,X.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,X.unpackAlignment);const pe=O.getParameter(O.UNPACK_ROW_LENGTH),Ee=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Je=O.getParameter(O.UNPACK_SKIP_PIXELS),he=O.getParameter(O.UNPACK_SKIP_ROWS),Bt=O.getParameter(O.UNPACK_SKIP_IMAGES),Ie=A.isCompressedTexture?A.mipmaps[Y]:A.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,Ie.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ie.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ut),O.pixelStorei(O.UNPACK_SKIP_ROWS,Rt),A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Y,$t,Gt,gt,Tt,Ct,ie,Ie.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Y,$t,Gt,Ie.width,Ie.height,Ct,Ie.data):O.texSubImage2D(O.TEXTURE_2D,Y,$t,Gt,gt,Tt,Ct,ie,Ie),O.pixelStorei(O.UNPACK_ROW_LENGTH,pe),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ee),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Je),O.pixelStorei(O.UNPACK_SKIP_ROWS,he),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Bt),Y===0&&X.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),ft.unbindTexture()},this.copyTextureToTexture3D=function(A,X,Q=null,nt=null,Y=0){A.isTexture!==!0&&(oa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,nt=arguments[1]||null,A=arguments[2],X=arguments[3],Y=arguments[4]||0);let gt,Tt,Ut,Rt,$t,Gt,Ct,ie,pe;const Ee=A.isCompressedTexture?A.mipmaps[Y]:A.image;Q!==null?(gt=Q.max.x-Q.min.x,Tt=Q.max.y-Q.min.y,Ut=Q.max.z-Q.min.z,Rt=Q.min.x,$t=Q.min.y,Gt=Q.min.z):(gt=Ee.width,Tt=Ee.height,Ut=Ee.depth,Rt=0,$t=0,Gt=0),nt!==null?(Ct=nt.x,ie=nt.y,pe=nt.z):(Ct=0,ie=0,pe=0);const Je=qt.convert(X.format),he=qt.convert(X.type);let Bt;if(X.isData3DTexture)P.setTexture3D(X,0),Bt=O.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)P.setTexture2DArray(X,0),Bt=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,X.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,X.unpackAlignment);const Ie=O.getParameter(O.UNPACK_ROW_LENGTH),te=O.getParameter(O.UNPACK_IMAGE_HEIGHT),pn=O.getParameter(O.UNPACK_SKIP_PIXELS),$n=O.getParameter(O.UNPACK_SKIP_ROWS),We=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ee.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ee.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Rt),O.pixelStorei(O.UNPACK_SKIP_ROWS,$t),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Gt),A.isDataTexture||A.isData3DTexture?O.texSubImage3D(Bt,Y,Ct,ie,pe,gt,Tt,Ut,Je,he,Ee.data):X.isCompressedArrayTexture?O.compressedTexSubImage3D(Bt,Y,Ct,ie,pe,gt,Tt,Ut,Je,Ee.data):O.texSubImage3D(Bt,Y,Ct,ie,pe,gt,Tt,Ut,Je,he,Ee),O.pixelStorei(O.UNPACK_ROW_LENGTH,Ie),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,te),O.pixelStorei(O.UNPACK_SKIP_PIXELS,pn),O.pixelStorei(O.UNPACK_SKIP_ROWS,$n),O.pixelStorei(O.UNPACK_SKIP_IMAGES,We),Y===0&&X.generateMipmaps&&O.generateMipmap(Bt),ft.unbindTexture()},this.initRenderTarget=function(A){Dt.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),ft.unbindTexture()},this.resetState=function(){q=0,I=0,C=null,ft.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===yl?"display-p3":"srgb",e.unpackColorSpace=me.workingColorSpace===ya?"display-p3":"srgb"}}class Tl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Zt(t),this.near=e,this.far=n}clone(){return new Tl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class qh extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class C_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=nl,this.updateRanges=[],this.version=0,this.uuid=Wn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const tn=new F;class ga{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Un(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Un(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Un(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Un(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Mn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ga(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Al extends Os{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ms;const qs=new F,gs=new F,_s=new F,vs=new xt,Ks=new xt,Kh=new ue,Gr=new F,Zs=new F,Wr=new F,Dc=new xt,so=new xt,Ic=new xt;class Zh extends Ge{constructor(t=new Al){if(super(),this.isSprite=!0,this.type="Sprite",ms===void 0){ms=new dn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new C_(e,5);ms.setIndex([0,1,2,0,2,3]),ms.setAttribute("position",new ga(n,3,0,!1)),ms.setAttribute("uv",new ga(n,2,3,!1))}this.geometry=ms,this.material=t,this.center=new xt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gs.setFromMatrixScale(this.matrixWorld),Kh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),_s.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gs.multiplyScalar(-_s.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Xr(Gr.set(-.5,-.5,0),_s,a,gs,s,r),Xr(Zs.set(.5,-.5,0),_s,a,gs,s,r),Xr(Wr.set(.5,.5,0),_s,a,gs,s,r),Dc.set(0,0),so.set(1,0),Ic.set(1,1);let o=t.ray.intersectTriangle(Gr,Zs,Wr,!1,qs);if(o===null&&(Xr(Zs.set(-.5,.5,0),_s,a,gs,s,r),so.set(0,1),o=t.ray.intersectTriangle(Gr,Wr,Zs,!1,qs),o===null))return;const l=t.ray.origin.distanceTo(qs);l<t.near||l>t.far||e.push({distance:l,point:qs.clone(),uv:wn.getInterpolation(qs,Gr,Zs,Wr,Dc,so,Ic,new xt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Xr(i,t,e,n,s,r){vs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ks.x=r*vs.x-s*vs.y,Ks.y=s*vs.x+r*vs.y):Ks.copy(vs),i.copy(t),i.x+=Ks.x,i.y+=Ks.y,i.applyMatrix4(Kh)}class P_ extends Ze{constructor(t=null,e=1,n=1,s,r,a,o,l,h=un,u=un,p,c){super(null,a,o,l,h,u,s,r,p,c),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uc extends Mn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const xs=new ue,Nc=new ue,$r=[],Oc=new Xi,L_=new ue,js=new jt,Js=new gr;class Rl extends jt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Uc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,L_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Xi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xs),Oc.copy(t.boundingBox).applyMatrix4(xs),this.boundingBox.union(Oc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new gr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xs),Js.copy(t.boundingSphere).applyMatrix4(xs),this.boundingSphere.union(Js)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(js.geometry=this.geometry,js.material=this.material,js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Js.copy(this.boundingSphere),Js.applyMatrix4(n),t.ray.intersectsSphere(Js)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,xs),Nc.multiplyMatrices(n,xs),js.matrixWorld=Nc,js.raycast(t,$r);for(let a=0,o=$r.length;a<o;a++){const l=$r[a];l.instanceId=r,l.object=this,e.push(l)}$r.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Uc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new P_(new Float32Array(s*this.count),s,this.count,gl,Gn));const r=this.morphTexture.source.data.data;let a=0;for(let h=0;h<n.length;h++)a+=n[h];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class $i extends Ze{constructor(t,e,n,s,r,a,o,l,h){super(t,e,n,s,r,a,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,h;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),h=n[s]-a,h<0)o=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const u=n[s],c=n[s+1]-u,d=(a-u)/c;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new xt:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new F,s=[],r=[],a=[],o=new F,l=new ue;for(let d=0;d<=t;d++){const f=d/t;s[d]=this.getTangentAt(f,new F)}r[0]=new F,a[0]=new F;let h=Number.MAX_VALUE;const u=Math.abs(s[0].x),p=Math.abs(s[0].y),c=Math.abs(s[0].z);u<=h&&(h=u,n.set(1,0,0)),p<=h&&(h=p,n.set(0,1,0)),c<=h&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const f=Math.acos(Ve(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,f))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Ve(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let f=1;f<=t;f++)r[f].applyMatrix4(l.makeRotationAxis(s[f],d*f)),a[f].crossVectors(s[f],r[f])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Cl extends Xn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new xt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),p=Math.sin(this.aRotation),c=l-this.aX,d=h-this.aY;l=c*u-d*p+this.aX,h=c*p+d*u+this.aY}return n.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class D_ extends Cl{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Pl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,h){s(a,o,h*(o-r),h*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,h,u,p){let c=(a-r)/h-(o-r)/(h+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+p)+(l-o)/p;c*=u,d*=u,s(a,o,c,d)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Yr=new F,ro=new Pl,ao=new Pl,oo=new Pl;class I_ extends Xn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new F){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let h,u;this.closed||o>0?h=s[(o-1)%r]:(Yr.subVectors(s[0],s[1]).add(s[0]),h=Yr);const p=s[o%r],c=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Yr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Yr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let f=Math.pow(h.distanceToSquared(p),d),x=Math.pow(p.distanceToSquared(c),d),m=Math.pow(c.distanceToSquared(u),d);x<1e-4&&(x=1),f<1e-4&&(f=x),m<1e-4&&(m=x),ro.initNonuniformCatmullRom(h.x,p.x,c.x,u.x,f,x,m),ao.initNonuniformCatmullRom(h.y,p.y,c.y,u.y,f,x,m),oo.initNonuniformCatmullRom(h.z,p.z,c.z,u.z,f,x,m)}else this.curveType==="catmullrom"&&(ro.initCatmullRom(h.x,p.x,c.x,u.x,this.tension),ao.initCatmullRom(h.y,p.y,c.y,u.y,this.tension),oo.initCatmullRom(h.z,p.z,c.z,u.z,this.tension));return n.set(ro.calc(l),ao.calc(l),oo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new F().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Fc(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function U_(i,t){const e=1-i;return e*e*t}function N_(i,t){return 2*(1-i)*i*t}function O_(i,t){return i*i*t}function or(i,t,e,n){return U_(i,t)+N_(i,e)+O_(i,n)}function F_(i,t){const e=1-i;return e*e*e*t}function k_(i,t){const e=1-i;return 3*e*e*i*t}function B_(i,t){return 3*(1-i)*i*i*t}function z_(i,t){return i*i*i*t}function lr(i,t,e,n,s){return F_(i,t)+k_(i,e)+B_(i,n)+z_(i,s)}class jh extends Xn{constructor(t=new xt,e=new xt,n=new xt,s=new xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new xt){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(lr(t,s.x,r.x,a.x,o.x),lr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class H_ extends Xn{constructor(t=new F,e=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new F){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(lr(t,s.x,r.x,a.x,o.x),lr(t,s.y,r.y,a.y,o.y),lr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Jh extends Xn{constructor(t=new xt,e=new xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new xt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new xt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class V_ extends Xn{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Qh extends Xn{constructor(t=new xt,e=new xt,n=new xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new xt){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(or(t,s.x,r.x,a.x),or(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class G_ extends Xn{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(or(t,s.x,r.x,a.x),or(t,s.y,r.y,a.y),or(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tu extends Xn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new xt){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],h=s[a],u=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return n.set(Fc(o,l.x,h.x,u.x,p.x),Fc(o,l.y,h.y,u.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new xt().fromArray(s))}return this}}var kc=Object.freeze({__proto__:null,ArcCurve:D_,CatmullRomCurve3:I_,CubicBezierCurve:jh,CubicBezierCurve3:H_,EllipseCurve:Cl,LineCurve:Jh,LineCurve3:V_,QuadraticBezierCurve:Qh,QuadraticBezierCurve3:G_,SplineCurve:tu});class W_ extends Xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new kc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),h=l===0?0:1-a/l;return o.getPointAt(h,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let h=0;h<l.length;h++){const u=l[h];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new kc[s.type]().fromJSON(s))}return this}}class rl extends W_{constructor(t){super(),this.type="Path",this.currentPoint=new xt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Jh(this.currentPoint.clone(),new xt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Qh(this.currentPoint.clone(),new xt(t,e),new xt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new jh(this.currentPoint.clone(),new xt(t,e),new xt(n,s),new xt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new tu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const h=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+h,e+u,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const h=new Cl(t,e,n,s,r,a,o,l);if(this.curves.length>0){const p=h.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(h);const u=h.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class sn extends dn{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const h=this;s=Math.floor(s),r=Math.floor(r);const u=[],p=[],c=[],d=[];let f=0;const x=[],m=n/2;let g=0;b(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Ne(p,3)),this.setAttribute("normal",new Ne(c,3)),this.setAttribute("uv",new Ne(d,2));function b(){const w=new F,q=new F;let I=0;const C=(e-t)/n;for(let G=0;G<=r;G++){const tt=[],v=G/r,T=v*(e-t)+t;for(let $=0;$<=s;$++){const W=$/s,N=W*l+o,K=Math.sin(N),_=Math.cos(N);q.x=T*K,q.y=-v*n+m,q.z=T*_,p.push(q.x,q.y,q.z),w.set(K,C,_).normalize(),c.push(w.x,w.y,w.z),d.push(W,1-v),tt.push(f++)}x.push(tt)}for(let G=0;G<s;G++)for(let tt=0;tt<r;tt++){const v=x[tt][G],T=x[tt+1][G],$=x[tt+1][G+1],W=x[tt][G+1];t>0&&(u.push(v,T,W),I+=3),e>0&&(u.push(T,$,W),I+=3)}h.addGroup(g,I,0),g+=I}function S(w){const q=f,I=new xt,C=new F;let G=0;const tt=w===!0?t:e,v=w===!0?1:-1;for(let $=1;$<=s;$++)p.push(0,m*v,0),c.push(0,v,0),d.push(.5,.5),f++;const T=f;for(let $=0;$<=s;$++){const N=$/s*l+o,K=Math.cos(N),_=Math.sin(N);C.x=tt*_,C.y=m*v,C.z=tt*K,p.push(C.x,C.y,C.z),c.push(0,v,0),I.x=K*.5+.5,I.y=_*.5*v+.5,d.push(I.x,I.y),f++}for(let $=0;$<s;$++){const W=q+$,N=T+$;w===!0?u.push(N,N+1,W):u.push(N+1,N,W),G+=3}h.addGroup(g,G,w===!0?1:2),g+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _a extends sn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new _a(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class eu extends rl{constructor(t){super(t),this.uuid=Wn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new rl().fromJSON(s))}return this}}const X_={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=nu(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,h,u,p,c,d;if(n&&(r=Z_(i,t,r,e)),i.length>80*e){o=h=i[0],l=u=i[1];for(let f=e;f<s;f+=e)p=i[f],c=i[f+1],p<o&&(o=p),c<l&&(l=c),p>h&&(h=p),c>u&&(u=c);d=Math.max(h-o,u-l),d=d!==0?32767/d:0}return dr(r,a,e,o,l,d,0),a}};function nu(i,t,e,n,s){let r,a;if(s===ov(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Bc(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Bc(r,i[r],i[r+1],a);return a&&Sa(a,a.next)&&(pr(a),a=a.next),a}function Gi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Sa(e,e.next)||Ae(e.prev,e,e.next)===0)){if(pr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function dr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&ev(i,n,s,r);let o=i,l,h;for(;i.prev!==i.next;){if(l=i.prev,h=i.next,r?Y_(i,n,s,r):$_(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(h.i/e|0),pr(i),i=h.next,o=h.next;continue}if(i=h,i===o){a?a===1?(i=q_(Gi(i),t,e),dr(i,t,e,n,s,r,2)):a===2&&K_(i,t,e,n,s,r):dr(Gi(i),t,e,n,s,r,1);break}}}function $_(i){const t=i.prev,e=i,n=i.next;if(Ae(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,h=n.y,u=s<r?s<a?s:a:r<a?r:a,p=o<l?o<h?o:h:l<h?l:h,c=s>r?s>a?s:a:r>a?r:a,d=o>l?o>h?o:h:l>h?l:h;let f=n.next;for(;f!==t;){if(f.x>=u&&f.x<=c&&f.y>=p&&f.y<=d&&ws(s,o,r,l,a,h,f.x,f.y)&&Ae(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Y_(i,t,e,n){const s=i.prev,r=i,a=i.next;if(Ae(s,r,a)>=0)return!1;const o=s.x,l=r.x,h=a.x,u=s.y,p=r.y,c=a.y,d=o<l?o<h?o:h:l<h?l:h,f=u<p?u<c?u:c:p<c?p:c,x=o>l?o>h?o:h:l>h?l:h,m=u>p?u>c?u:c:p>c?p:c,g=al(d,f,t,e,n),b=al(x,m,t,e,n);let S=i.prevZ,w=i.nextZ;for(;S&&S.z>=g&&w&&w.z<=b;){if(S.x>=d&&S.x<=x&&S.y>=f&&S.y<=m&&S!==s&&S!==a&&ws(o,u,l,p,h,c,S.x,S.y)&&Ae(S.prev,S,S.next)>=0||(S=S.prevZ,w.x>=d&&w.x<=x&&w.y>=f&&w.y<=m&&w!==s&&w!==a&&ws(o,u,l,p,h,c,w.x,w.y)&&Ae(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;S&&S.z>=g;){if(S.x>=d&&S.x<=x&&S.y>=f&&S.y<=m&&S!==s&&S!==a&&ws(o,u,l,p,h,c,S.x,S.y)&&Ae(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;w&&w.z<=b;){if(w.x>=d&&w.x<=x&&w.y>=f&&w.y<=m&&w!==s&&w!==a&&ws(o,u,l,p,h,c,w.x,w.y)&&Ae(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function q_(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Sa(s,r)&&iu(s,n,n.next,r)&&fr(s,r)&&fr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),pr(n),pr(n.next),n=i=r),n=n.next}while(n!==i);return Gi(n)}function K_(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&sv(a,o)){let l=su(a,o);a=Gi(a,a.next),l=Gi(l,l.next),dr(a,t,e,n,s,r,0),dr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Z_(i,t,e,n){const s=[];let r,a,o,l,h;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,h=nu(i,o,l,n,!1),h===h.next&&(h.steiner=!0),s.push(iv(h));for(s.sort(j_),r=0;r<s.length;r++)e=J_(s[r],e);return e}function j_(i,t){return i.x-t.x}function J_(i,t){const e=Q_(i,t);if(!e)return t;const n=su(e,i);return Gi(n,n.next),Gi(e,e.next)}function Q_(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const c=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(c<=r&&c>n&&(n=c,s=e.x<e.next.x?e:e.next,c===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,l=s.x,h=s.y;let u=1/0,p;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&ws(a<h?r:n,a,l,h,a<h?n:r,a,e.x,e.y)&&(p=Math.abs(a-e.y)/(r-e.x),fr(e,i)&&(p<u||p===u&&(e.x>s.x||e.x===s.x&&tv(s,e)))&&(s=e,u=p)),e=e.next;while(e!==o);return s}function tv(i,t){return Ae(i.prev,i,t.prev)<0&&Ae(t.next,i,i.next)<0}function ev(i,t,e,n){let s=i;do s.z===0&&(s.z=al(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,nv(s)}function nv(i){let t,e,n,s,r,a,o,l,h=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<h&&(o++,n=n.nextZ,!!n);t++);for(l=h;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,h*=2}while(a>1);return i}function al(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function iv(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ws(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function sv(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!rv(i,t)&&(fr(i,t)&&fr(t,i)&&av(i,t)&&(Ae(i.prev,i,t.prev)||Ae(i,t.prev,t))||Sa(i,t)&&Ae(i.prev,i,i.next)>0&&Ae(t.prev,t,t.next)>0)}function Ae(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Sa(i,t){return i.x===t.x&&i.y===t.y}function iu(i,t,e,n){const s=Kr(Ae(i,t,e)),r=Kr(Ae(i,t,n)),a=Kr(Ae(e,n,i)),o=Kr(Ae(e,n,t));return!!(s!==r&&a!==o||s===0&&qr(i,e,t)||r===0&&qr(i,n,t)||a===0&&qr(e,i,n)||o===0&&qr(e,t,n))}function qr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Kr(i){return i>0?1:i<0?-1:0}function rv(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&iu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function fr(i,t){return Ae(i.prev,i,i.next)<0?Ae(i,t,i.next)>=0&&Ae(i,i.prev,t)>=0:Ae(i,t,i.prev)<0||Ae(i,i.next,t)<0}function av(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function su(i,t){const e=new ol(i.i,i.x,i.y),n=new ol(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Bc(i,t,e,n){const s=new ol(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function pr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ol(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ov(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class cr{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return cr.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];zc(t),Hc(n,t);let a=t.length;e.forEach(zc);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Hc(n,e[l]);const o=X_.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function zc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Hc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Ll extends dn{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],h=[],u=[];let p=t;const c=(e-t)/s,d=new F,f=new xt;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const g=r+m/n*a;d.x=p*Math.cos(g),d.y=p*Math.sin(g),l.push(d.x,d.y,d.z),h.push(0,0,1),f.x=(d.x/e+1)/2,f.y=(d.y/e+1)/2,u.push(f.x,f.y)}p+=c}for(let x=0;x<s;x++){const m=x*(n+1);for(let g=0;g<n;g++){const b=g+m,S=b,w=b+n+1,q=b+n+2,I=b+1;o.push(S,w,I),o.push(w,q,I)}}this.setIndex(o),this.setAttribute("position",new Ne(l,3)),this.setAttribute("normal",new Ne(h,3)),this.setAttribute("uv",new Ne(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ll(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ts extends dn{constructor(t=new eu([new xt(0,.5),new xt(-.5,-.5),new xt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let u=0;u<t.length;u++)h(t[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ne(s,3)),this.setAttribute("normal",new Ne(r,3)),this.setAttribute("uv",new Ne(a,2));function h(u){const p=s.length/3,c=u.extractPoints(e);let d=c.shape;const f=c.holes;cr.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,g=f.length;m<g;m++){const b=f[m];cr.isClockWise(b)===!0&&(f[m]=b.reverse())}const x=cr.triangulateShape(d,f);for(let m=0,g=f.length;m<g;m++){const b=f[m];d=d.concat(b)}for(let m=0,g=d.length;m<g;m++){const b=d[m];s.push(b.x,b.y,0),r.push(0,0,1),a.push(b.x,b.y)}for(let m=0,g=x.length;m<g;m++){const b=x[m],S=b[0]+p,w=b[1]+p,q=b[2]+p;n.push(S,w,q),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return lv(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];n.push(a)}return new Ts(n,t.curveSegments)}}function lv(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class mi extends dn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let h=0;const u=[],p=new F,c=new F,d=[],f=[],x=[],m=[];for(let g=0;g<=n;g++){const b=[],S=g/n;let w=0;g===0&&a===0?w=.5/e:g===n&&l===Math.PI&&(w=-.5/e);for(let q=0;q<=e;q++){const I=q/e;p.x=-t*Math.cos(s+I*r)*Math.sin(a+S*o),p.y=t*Math.cos(a+S*o),p.z=t*Math.sin(s+I*r)*Math.sin(a+S*o),f.push(p.x,p.y,p.z),c.copy(p).normalize(),x.push(c.x,c.y,c.z),m.push(I+w,1-S),b.push(h++)}u.push(b)}for(let g=0;g<n;g++)for(let b=0;b<e;b++){const S=u[g][b+1],w=u[g][b],q=u[g+1][b],I=u[g+1][b+1];(g!==0||a>0)&&d.push(S,w,I),(g!==n-1||l<Math.PI)&&d.push(w,q,I)}this.setIndex(d),this.setAttribute("position",new Ne(f,3)),this.setAttribute("normal",new Ne(x,3)),this.setAttribute("uv",new Ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Xe extends Os{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ph,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Dl extends Ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class cv extends Dl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const lo=new ue,Vc=new F,Gc=new F;class ru{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new El,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Vc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Vc),Gc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gc),e.updateMatrixWorld(),lo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(lo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Wc=new ue,Qs=new F,co=new F;class hv extends ru{constructor(){super(new yn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xt(4,2),this._viewportCount=6,this._viewports=[new ve(2,1,1,1),new ve(0,1,1,1),new ve(3,1,1,1),new ve(1,1,1,1),new ve(3,0,1,1),new ve(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Qs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Qs),co.copy(n.position),co.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(co),n.updateMatrixWorld(),s.makeTranslation(-Qs.x,-Qs.y,-Qs.z),Wc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wc)}}class uv extends Dl{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new hv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class dv extends ru{constructor(){super(new Vh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fv extends Dl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.shadow=new dv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class pv{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Xc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Xc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Xc(){return performance.now()}const $c=new ue;class mv{constructor(t,e,n=0,s=1/0){this.ray=new Sl(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new bl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return $c.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($c),this}intersectObject(t,e=!0,n=[]){return ll(t,this,n,e),n.sort(Yc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ll(t[s],this,n,e);return n.sort(Yc),n}}function Yc(i,t){return i.distance-t.distance}function ll(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)ll(r[a],t,e,!0)}}class qc{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ve(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class gv extends Wi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dl);const Kc={type:"change"},Il={type:"start"},au={type:"end"},Zr=new Sl,Zc=new pi,_v=Math.cos(70*zn.DEG2RAD),Oe=new F,cn=2*Math.PI,_e={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ho=1e-6;class vv extends gv{constructor(t,e=null){super(t,e),this.state=_e.NONE,this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:As.ROTATE,MIDDLE:As.DOLLY,RIGHT:As.PAN},this.touches={ONE:bs.ROTATE,TWO:bs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new ii,this._lastTargetPosition=new F,this._quat=new ii().setFromUnitVectors(t.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new qc,this._sphericalDelta=new qc,this._scale=1,this._panOffset=new F,this._rotateStart=new xt,this._rotateEnd=new xt,this._rotateDelta=new xt,this._panStart=new xt,this._panEnd=new xt,this._panDelta=new xt,this._dollyStart=new xt,this._dollyEnd=new xt,this._dollyDelta=new xt,this._dollyDirection=new F,this._mouse=new xt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=yv.bind(this),this._onPointerDown=xv.bind(this),this._onPointerUp=Mv.bind(this),this._onContextMenu=Rv.bind(this),this._onMouseWheel=Ev.bind(this),this._onKeyDown=wv.bind(this),this._onTouchStart=Tv.bind(this),this._onTouchMove=Av.bind(this),this._onMouseDown=Sv.bind(this),this._onMouseMove=bv.bind(this),this._interceptControlDown=Cv.bind(this),this._interceptControlUp=Pv.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Kc),this.update(),this.state=_e.NONE}update(t=null){const e=this.object.position;Oe.copy(e).sub(this.target),Oe.applyQuaternion(this._quat),this._spherical.setFromVector3(Oe),this.autoRotate&&this.state===_e.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=cn:n>Math.PI&&(n-=cn),s<-Math.PI?s+=cn:s>Math.PI&&(s-=cn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Oe.setFromSpherical(this._spherical),Oe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Oe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Oe.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new F(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const h=new F(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(o),this.object.updateMatrixWorld(),a=Oe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Zr.origin.copy(this.object.position),Zr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Zr.direction))<_v?this.object.lookAt(this.target):(Zc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Zr.intersectPlane(Zc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ho||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ho||this._lastTargetPosition.distanceToSquared(this.target)>ho?(this.dispatchEvent(Kc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?cn/60*this.autoRotateSpeed*t:cn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Oe.setFromMatrixColumn(e,0),Oe.multiplyScalar(-t),this._panOffset.add(Oe)}_panUp(t,e){this.screenSpacePanning===!0?Oe.setFromMatrixColumn(e,1):(Oe.setFromMatrixColumn(e,0),Oe.crossVectors(this.object.up,Oe)),Oe.multiplyScalar(t),this._panOffset.add(Oe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Oe.copy(s).sub(this.target);let r=Oe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(cn*this._rotateDelta.x/e.clientHeight),this._rotateUp(cn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(cn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-cn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(cn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-cn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(cn*this._rotateDelta.x/e.clientHeight),this._rotateUp(cn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new xt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function xv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function yv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Mv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(au),this.state=_e.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Sv(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case As.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=_e.DOLLY;break;case As.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=_e.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=_e.ROTATE}break;case As.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=_e.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=_e.PAN}break;default:this.state=_e.NONE}this.state!==_e.NONE&&this.dispatchEvent(Il)}function bv(i){switch(this.state){case _e.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case _e.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case _e.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Ev(i){this.enabled===!1||this.enableZoom===!1||this.state!==_e.NONE||(i.preventDefault(),this.dispatchEvent(Il),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(au))}function wv(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Tv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case bs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=_e.TOUCH_ROTATE;break;case bs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=_e.TOUCH_PAN;break;default:this.state=_e.NONE}break;case 2:switch(this.touches.TWO){case bs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=_e.TOUCH_DOLLY_PAN;break;case bs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=_e.TOUCH_DOLLY_ROTATE;break;default:this.state=_e.NONE}break;default:this.state=_e.NONE}this.state!==_e.NONE&&this.dispatchEvent(Il)}function Av(i){switch(this._trackPointer(i),this.state){case _e.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case _e.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case _e.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case _e.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=_e.NONE}}function Rv(i){this.enabled!==!1&&i.preventDefault()}function Cv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Pv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Lv extends qh{constructor(){super();const t=new Pe;t.deleteAttribute("uv");const e=new Xe({side:an}),n=new Xe,s=new uv(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new jt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new jt(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new jt(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new jt(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const h=new jt(t,n);h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),this.add(h);const u=new jt(t,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const p=new jt(t,n);p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);const c=new jt(t,ys(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const d=new jt(t,ys(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const f=new jt(t,ys(17));f.position.set(14.904,12.198,-1.832),f.scale.set(.15,4.265,6.331),this.add(f);const x=new jt(t,ys(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);const m=new jt(t,ys(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const g=new jt(t,ys(100));g.position.set(0,20,0),g.scale.set(1,.1,1),this.add(g)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function ys(i){const t=new Tn;return t.color.setScalar(i),t}const ti='Inter, "Segoe UI", Roboto, Arial, sans-serif',jr=2;function di(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}const uo=(i,t,e)=>new Zt(i).lerp(new Zt(t),e).getStyle();function jc(i,t,e){let n=String(t);if(i.measureText(n).width<=e)return n;for(;n.length>3&&i.measureText(n+"…").width>e;)n=n.slice(0,-1);return n+"…"}function Dv({title:i,number:t=null,status:e="",color:n=null,muted:s=!1,params:r=[],paramsLine:a=!1,media:o=[],mediaShare:l=!1}){const h=document.createElement("canvas"),u=h.getContext("2d"),p=`${s?500:600} ${s?11.5:13}px ${ti}`,c=`700 13px ${ti}`,d=`600 11px ${ti}`,f=`500 11px ${ti}`,x=`700 11px ${ti}`,m=`700 11px ${ti}`,g=`600 10.5px ${ti}`,b=String(i||""),S=t!=null?String(t):"",w=(r||[]).slice(0,6),q=a&&w.length?w.map(Mt=>Mt.value).join(" · "):"",I=!a&&w.length?w:[];u.font=p;const C=u.measureText(b).width;u.font=c;const G=S?u.measureText(S).width+6:0;u.font=d;const tt=e?u.measureText(e).width:0,v=q?u.measureText(q).width:0;u.font=f;const T=I.reduce((Mt,ft)=>Math.max(Mt,u.measureText(ft.name).width),0);u.font=x;const $=I.reduce((Mt,ft)=>Math.max(Mt,u.measureText(ft.value).width),0),W=(o||[]).slice(0,4).map(Mt=>{const ft=String(Mt.rank),Wt=l&&Mt.share!==null&&Mt.share!==void 0?`${Math.round(Mt.share*100)}%`:"";u.font=m;const Dt=u.measureText(ft).width;u.font=g;const P=Wt?u.measureText(Wt).width+4:0;return{...Mt,rank:ft,share:Wt,rankW:Dt,w:Math.ceil(22+Dt+P+7)}}),N=s?0:13,K=!!(b||S),_=K?s?20:24:0,M=K?Math.ceil(9+N+G+C+10):0,y=e?18:0,R=e?Math.ceil(tt+16):0,D=q?18:0,U=q?Math.ceil(v+16):0,J=15,et=I.length?I.length*J+8:0,B=I.length?Math.ceil(Math.min(170,T)+14+$+16):0,k=3,st=W.length?19:0,at=W.reduce((Mt,ft)=>Mt+ft.w,0)+Math.max(0,W.length-1)*k,dt=[st,_,y,D,et].filter(Boolean).length,vt=9,Ot=4,zt=Math.min(520,Math.max(M,R,U,B,at,20)+Ot*2),Kt=Ot+st+_+y+D+et+Math.max(0,dt-1)*k+vt+1;h.width=zt*jr,h.height=Kt*jr,u.scale(jr,jr);let O=Ot;if(W.length){let Mt=(zt-at)/2;u.textBaseline="middle",W.forEach(ft=>{u.save(),u.shadowColor="rgba(15, 23, 42, 0.3)",u.shadowBlur=4,u.shadowOffsetY=1,di(u,Mt,O,ft.w,st,st/2),u.fillStyle="rgba(15, 23, 42, 0.92)",u.fill(),u.restore(),di(u,Mt+.6,O+.6,ft.w-1.2,st-1.2,st/2),u.strokeStyle=ft.color,u.lineWidth=1.2,u.stroke(),u.save(),u.translate(Mt+6,O+3),u.scale(13/24,13/24);const Wt=new Path2D(ft.path);ft.stroke?(u.strokeStyle=ft.color,u.lineWidth=2.6,u.lineCap="round",u.lineJoin="round",u.stroke(Wt)):(u.fillStyle=ft.color,u.fill(Wt)),u.restore();let Dt=Mt+6+13+3;u.font=m,u.fillStyle="#ffffff",u.fillText(ft.rank,Dt,O+st/2+.5),Dt+=ft.rankW+4,ft.share&&(u.font=g,u.fillStyle="#cbd5e1",u.fillText(ft.share,Dt,O+st/2+.5)),Mt+=ft.w+k}),O+=st+k}if(K){const Mt=(zt-Math.min(M,zt-Ot*2))/2,ft=Math.min(M,zt-Ot*2);u.save(),u.shadowColor="rgba(15, 23, 42, 0.28)",u.shadowBlur=5,u.shadowOffsetY=1.5,di(u,Mt,O,ft,_,_/2),u.fillStyle=s?"rgba(255, 255, 255, 0.86)":"#ffffff",u.fill(),u.restore(),di(u,Mt+.5,O+.5,ft-1,_-1,_/2),u.strokeStyle="rgba(15, 23, 42, 0.12)",u.lineWidth=1,u.stroke();let Wt=Mt+9;const Dt=O+_/2;N&&(u.beginPath(),u.arc(Wt+4,Dt,4,0,Math.PI*2),u.fillStyle=n||"#94a3b8",u.fill(),Wt+=N),u.textBaseline="middle",S&&(u.font=c,u.fillStyle="#0f172a",u.fillText(S,Wt,Dt+.5),Wt+=G),u.font=p,u.fillStyle=s?"#475569":"#0f172a",u.fillText(jc(u,b,Mt+ft-10-Wt),Wt,Dt+.5),O+=_+k}if(u.textBaseline="middle",e){const Mt=Math.min(R,zt-Ot*2),ft=(zt-Mt)/2,Wt=O,Dt=n||"#64748b";di(u,ft,Wt,Mt,y,y/2),u.fillStyle=uo(Dt,"#ffffff",.8),u.fill(),u.strokeStyle=uo(Dt,"#ffffff",.35),u.stroke(),u.font=d,u.fillStyle=uo(Dt,"#000000",.5),u.textAlign="center",u.fillText(e,zt/2,Wt+y/2+.5,Mt-12),u.textAlign="start",O+=y+k}if(q){const Mt=Math.min(U,zt-Ot*2),ft=(zt-Mt)/2;di(u,ft,O,Mt,D,D/2),u.fillStyle="rgba(255, 255, 255, 0.94)",u.fill(),u.strokeStyle="rgba(15, 23, 42, 0.14)",u.stroke(),u.font=d,u.fillStyle="#0f172a",u.textAlign="center",u.fillText(q,zt/2,O+D/2+.5,Mt-12),u.textAlign="start",O+=D+k}if(I.length){const Mt=Math.min(B,zt-Ot*2),ft=(zt-Mt)/2;u.save(),u.shadowColor="rgba(15, 23, 42, 0.2)",u.shadowBlur=4,di(u,ft,O,Mt,et,6),u.fillStyle="rgba(255, 255, 255, 0.95)",u.fill(),u.restore(),di(u,ft+.5,O+.5,Mt-1,et-1,6),u.strokeStyle="rgba(15, 23, 42, 0.12)",u.stroke(),I.forEach((Wt,Dt)=>{const P=O+4+Dt*J+J/2;u.font=f,u.fillStyle="#475569",u.fillText(jc(u,Wt.name,Mt-16-$-10),ft+8,P+.5),u.font=x,u.fillStyle="#0f172a",u.textAlign="right",u.fillText(Wt.value,ft+Mt-8,P+.5),u.textAlign="start"}),O+=et+k}const ye=O-(dt?k:0);u.beginPath(),u.moveTo(zt/2,ye),u.lineTo(zt/2,Kt-1),u.strokeStyle=s?"rgba(71, 85, 105, 0.45)":"rgba(15, 23, 42, 0.55)",u.lineWidth=1.5,u.stroke(),u.beginPath(),u.arc(zt/2,Kt-1.5,1.5,0,Math.PI*2),u.fillStyle=u.strokeStyle,u.fill();const Yt=new $i(h);return Yt.colorSpace=Ke,Yt.minFilter=En,Yt.generateMipmaps=!1,{texture:Yt,width:zt,height:Kt}}function Iv(i){const t=document.createElement("canvas"),e=t.getContext("2d"),n=`700 64px ${ti}`;e.font=n;const s=Math.min(2048,Math.ceil(e.measureText(i).width+90));t.width=s,t.height=120,e.fillStyle="#ffffff",e.fillRect(0,0,s,120),e.fillStyle="#1d4ed8",e.fillRect(0,0,18,120),e.font=n,e.fillStyle="#0f172a",e.textBaseline="middle",e.fillText(i,48,64,s-70);const r=new $i(t);return r.colorSpace=Ke,r.anisotropy=4,{texture:r,aspect:s/120}}function Uv(i){const t=document.createElement("canvas"),e=t.getContext("2d"),n=`800 96px ${ti}`;e.font=n;const s=Math.min(4096,Math.ceil(e.measureText(i).width+40));t.width=s,t.height=128,e.font=n,e.fillStyle="rgba(30, 41, 59, 0.9)",e.textBaseline="middle",e.fillText(i,20,68);const r=new $i(t);return r.colorSpace=Ke,r.anisotropy=8,{texture:r,aspect:s/128}}function Nv(){const i=document.createElement("canvas");i.width=128,i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.75)"),e.addColorStop(.6,"rgba(255,255,255,0.18)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);const n=new $i(i);return n.colorSpace=Ke,n}function Ov(i,t=0){const e=(Number(i.rot)||0)*Math.PI/180,n=Math.abs(Math.cos(e)),s=Math.abs(Math.sin(e)),r=((i.w||0)*n+(i.d||0)*s)/2+t,a=((i.w||0)*s+(i.d||0)*n)/2+t;return[i.x-r,i.x+r,i.z-a,i.z+a]}function Fv(i){return i!=null&&i.h?i.h:Math.min(12,Math.max(6.5,6+Math.max((i==null?void 0:i.w)||0,(i==null?void 0:i.d)||0)/25))}function Ul(i,t,e=1,n=1){const s=document.createElement("canvas");s.width=i,s.height=i,t(s.getContext("2d"),i);const r=new $i(s);return r.colorSpace=Ke,r.wrapS=Mi,r.wrapT=Mi,r.repeat.set(e,n),r}function kv(i,t){let e=7;const n=()=>(e=e*16807%2147483647,e/2147483647);return Ul(512,(s,r)=>{s.fillStyle="#ffffff",s.fillRect(0,0,r,r);for(let a=0;a<40;a+=1){const o=n()*r,l=n()*r,h=30+n()*110,u=s.createRadialGradient(o,l,0,o,l,h),p=n()>.5?0:255;u.addColorStop(0,`rgba(${p},${p},${p},${.035+n()*.03})`),u.addColorStop(1,`rgba(${p},${p},${p},0)`),s.fillStyle=u,s.fillRect(o-h,l-h,h*2,h*2)}for(let a=0;a<9e3;a+=1){const o=Math.floor(n()*120);s.fillStyle=`rgba(${o},${o},${o},${.03+n()*.05})`,s.fillRect(n()*r,n()*r,1+n()*1.5,1+n()*1.5)}s.fillStyle="rgba(70, 76, 84, 0.32)",s.fillRect(0,0,r,2),s.fillRect(0,0,2,r)},i,t)}function ou(){return Ul(128,(i,t)=>{i.fillStyle="#f5b800",i.fillRect(0,0,t,t),i.fillStyle="#1f2328";for(let e=-t;e<t*2;e+=32)i.beginPath(),i.moveTo(e,0),i.lineTo(e+16,0),i.lineTo(e+16-t,t),i.lineTo(e-t,t),i.closePath(),i.fill()},1,1)}function Bv(i){return Ul(128,(t,e)=>{t.fillStyle="#ffffff",t.fillRect(0,0,e,e),t.fillStyle="rgba(90, 100, 112, 0.18)",t.fillRect(0,0,3,e),t.fillStyle="rgba(255, 255, 255, 0.9)",t.fillRect(3,0,2,e),t.fillStyle="rgba(90, 100, 112, 0.07)",t.fillRect(e/2,0,2,e)},i,1)}function vn(i,t={}){return new Xe({color:i,roughness:.75,metalness:.05,...t})}function fi(i,t,e,n,s,r,a,{shadow:o=!0}={}){const l=new jt(new Pe(i,t,e),n);return l.position.set(s,r,a),l.castShadow=o,l.receiveShadow=!0,l}function zv(i,t,e,n,s){const r=[],a=[],o=(u,p,c,d)=>{const f=r.length/3;r.push(u,0,p,c,0,p,c,0,d,u,0,d),a.push(f,f+2,f+1,f,f+3,f+2)},l=(u,p)=>{for(let c=0;c<u;c+=n+s)p(c,Math.min(u,c+n))};l(i,(u,p)=>{o(-i/2+u,-t/2,-i/2+p,-t/2+e),o(-i/2+u,t/2-e,-i/2+p,t/2)}),l(t,(u,p)=>{o(-i/2,-t/2+u,-i/2+e,-t/2+p),o(i/2-e,-t/2+u,i/2,-t/2+p)});const h=new dn;return h.setAttribute("position",new Ne(r,3)),h.setIndex(a),h.computeVertexNormals(),h}function Ms(i,t,e,{shadow:n=!0}={}){if(!e.length)return null;const s=new Rl(i,t,e.length),r=new ue,a=new ii;return e.forEach((o,l)=>{a.setFromEuler(new An(0,o.ry||0,0)),r.compose(new F(o.x,o.y,o.z),a,new F(o.sx??1,o.sy??1,o.sz??1)),s.setMatrixAt(l,r)}),s.instanceMatrix.needsUpdate=!0,s.computeBoundingBox(),s.computeBoundingSphere(),s.castShadow=n,s.receiveShadow=!0,s}function Hv(i,{anisotropy:t=4}={}){const e=i.floor||{w:60,d:40},{w:n,d:s}=e,r=Fv(e),a=new rn,o=i.elements||[],l=i.aisles||[],h=o.filter(N=>!["label","crane","light"].includes(N.kind)).map(N=>Ov(N,.45)),u=(N,K,_=.3)=>!h.some(M=>N+_>M[0]&&N-_<M[1]&&K+_>M[2]&&K-_<M[3]),p=Math.max(n,s),c=new jt(new On(p*8,p*8),vn("#a9b1ba",{roughness:.95}));c.rotation.x=-Math.PI/2,c.position.y=-.04,c.receiveShadow=!0,a.add(c);const d=kv(n/6,s/6);d.anisotropy=t;const f=new jt(new On(n,s),vn("#bfc5cc",{map:d,roughness:.78,metalness:0}));f.rotation.x=-Math.PI/2,f.receiveShadow=!0,a.add(f);const x=.25,m=.6,g=[],b=vn("#98a1ab",{roughness:.9}),S=vn("#7d97ad",{roughness:.1,metalness:.4,transparent:!0,opacity:.75}),w=vn("#5b636c",{roughness:.6,metalness:.3}),q=vn("#8a97a4",{roughness:.55,metalness:.35}),I=vn("#ffffff",{map:ou(),roughness:.6});[{len:n+2*x,x:0,z:-s/2-x/2,ry:0,normal:[0,0,-1],door:!1},{len:n+2*x,x:0,z:s/2+x/2,ry:0,normal:[0,0,1],door:!1},{len:s,x:-n/2-x/2,z:0,ry:Math.PI/2,normal:[-1,0,0],door:s>14},{len:s,x:n/2+x/2,z:0,ry:Math.PI/2,normal:[1,0,0],door:s>14}].forEach(N=>{const K=new rn;K.position.set(N.x,0,N.z),K.rotation.y=N.ry,K.add(fi(N.len,m,x+.04,b,0,m/2,0));const _=new rn,M=vn("#c7d0da",{map:Bv(N.len/1),roughness:.6,metalness:.15}),y=r*.56,R=Math.min(r-.6,r*.74);if(_.add(fi(N.len,y-m,x,M,0,m+(y-m)/2,0)),_.add(fi(N.len,R-y,x*.5,S,0,(y+R)/2,0,{shadow:!1})),_.add(fi(N.len,r-R,x,M,0,(R+r)/2,0)),_.add(fi(N.len+.1,.18,x+.1,w,0,r+.09,0)),N.door){const U=Math.min(4.5,r*.62),J=-Math.sign(N.normal[0]||N.normal[2])*(x/2+.02),et=fi(4.5,U-m,.06,q,0,m+(U-m)/2,0);et.position.z=J,_.add(et),[-1,1].forEach(B=>{const k=fi(.22,U,.22,I,B*2.36,U/2,et.position.z*1.6);_.add(k)})}K.add(_),a.add(K),g.push({upper:_,normal:new F(...N.normal),center:new F(N.x,r/2,N.z)})});const G=e.columns===0?0:e.columns||12;if(G>0){const N=Math.max(1,Math.round(n/G)),K=Math.max(1,Math.round(s/G)),_=Array.from({length:N+1},(B,k)=>-n/2+k*n/N),M=Array.from({length:K+1},(B,k)=>-s/2+k*s/K),y=(B,k)=>l.some(st=>Math.abs(B-st.x)<st.w/2+.3&&Math.abs(k-st.z)<st.d/2+.3),R=[];if(_.forEach(B=>{R.push([B,-s/2+.22]),R.push([B,s/2-.22])}),M.slice(1,-1).forEach(B=>{R.push([-n/2+.22,B]),R.push([n/2-.22,B])}),s>26){const B=Math.max(1,Math.round(s/24)-1);for(let k=1;k<=B;k+=1){const st=-s/2+k*s/(B+1);_.slice(1,-1).forEach(at=>R.push([at,st]))}}const D=R.filter(([B,k])=>u(B,k,.35)&&!y(B,k)),U=new Pe(1,1,1),J=vn("#7c8894",{roughness:.5,metalness:.45});[Ms(U,J,D.map(([B,k])=>({x:B,y:r/2,z:k-.17,sx:.4,sy:r,sz:.04}))),Ms(U,J,D.map(([B,k])=>({x:B,y:r/2,z:k+.17,sx:.4,sy:r,sz:.04}))),Ms(U,J,D.map(([B,k])=>({x:B,y:r/2,z:k,sx:.04,sy:r,sz:.32}))),Ms(U,I,D.map(([B,k])=>({x:B,y:.6,z:k,sx:.5,sy:1.2,sz:.5})))].filter(Boolean).forEach(B=>a.add(B))}const tt=vn("#d3d7dc",{roughness:.8,transparent:!0,opacity:.6,polygonOffset:!0,polygonOffsetFactor:-1}),v=vn("#f2b100",{roughness:.55}),T=[];l.forEach(N=>{const K=new jt(new On(N.w,N.d),tt);K.rotation.x=-Math.PI/2,K.position.set(N.x,.004,N.z),K.receiveShadow=!0,a.add(K);const _=N.w>=N.d,M=_?N.w:N.d,y=(_?N.d:N.w)/2-.08;[-1,1].forEach(R=>{const D=fi(_?M:.12,.006,_?.12:M,v,N.x+(_?0:R*y),.006,N.z+(_?R*y:0),{shadow:!1});a.add(D)}),[-1,1].forEach(R=>[-1,1].forEach(D=>T.push([N.x+R*(N.w/2+.3),N.z+D*(N.d/2+.3)])))});const $=[];(i.zones||[]).forEach(N=>{const K=N.color||"#2563eb",_=new jt(zv(N.w,N.d,.12,.9,.55),new Tn({color:K,transparent:!0,opacity:.85,toneMapped:!1,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));if(_.position.set(N.x,.008,N.z),a.add(_),$.push(_),N.name){const{texture:M,aspect:y}=Uv(String(N.name).toUpperCase());M.anisotropy=t;let R=Math.min(1.3,Math.max(.55,N.d*.08)),D=R*y;D>N.w-1.2&&(D=Math.max(1,N.w-1.2),R=D/y);const U=new jt(new On(D,R),new Tn({map:M,transparent:!0,opacity:.32,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));U.rotation.x=-Math.PI/2,U.position.set(N.x-N.w/2+.6+D/2,.01,N.z-N.d/2+.45+R/2),a.add(U),$.push(U)}});const W=T.filter(([N,K])=>Math.abs(N)<n/2-.3&&Math.abs(K)<s/2-.3&&u(N,K,.2)).slice(0,160);if(W.length){const N=new sn(.1,.1,1,14);a.add(Ms(N,vn("#f2b100",{roughness:.5}),W.map(([K,_])=>({x:K,y:.5,z:_,sy:1})))),a.add(Ms(N,vn("#1f2328",{roughness:.6}),W.map(([K,_])=>({x:K,y:.72,z:_,sx:1.03,sy:.12,sz:1.03}))))}return{group:a,walls:g,zones:$,height:r}}function Vv(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new dn;let h=0;for(let u=0;u<i.length;++u){const p=i[u];let c=0;if(e!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in p.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(p.attributes[d]),c++}if(c!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in p.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(p.morphAttributes[d])}if(t){let d;if(e)d=p.index.count;else if(p.attributes.position!==void 0)d=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,d,u),h+=d}}if(e){let u=0;const p=[];for(let c=0;c<i.length;++c){const d=i[c].index;for(let f=0;f<d.count;++f)p.push(d.getX(f)+u);u+=i[c].attributes.position.count}l.setIndex(p)}for(const u in r){const p=Jc(r[u]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,p)}for(const u in a){const p=a[u][0].length;if(p===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let c=0;c<p;++c){const d=[];for(let x=0;x<a[u].length;++x)d.push(a[u][x][c]);const f=Jc(d);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(f)}}return l}function Jc(i){let t,e,n,s=-1,r=0;for(let h=0;h<i.length;++h){const u=i[h];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const a=new t(r),o=new Mn(a,e,n);let l=0;for(let h=0;h<i.length;++h){const u=i[h];if(u.isInterleavedBufferAttribute){const p=l/e;for(let c=0,d=u.count;c<d;c++)for(let f=0;f<e;f++){const x=u.getComponent(c,f);o.setComponent(c+p,f,x)}}else a.set(u.array,l);l+=u.count*e}return s!==void 0&&(o.gpuType=s),o}const Jr={machine:"#2c6cb0",cnc:"#2c6cb0",mill:"#2c6cb0",lathe:"#2c6cb0",press:"#2f7d52",robot:"#f08a1c",conveyor:"#5c6670",oven:"#2c6cb0",tank:"#8d99a6",workstation:"#2c6cb0",saw:"#f0a30a",shear:"#2f5d8f",plasma:"#e8641b",furnace:"#5a6570",drill:"#557a66",welding:"#1f6fd1",blast:"#4e6a85",paint_booth:"#2c6cb0",packing:"#2c6cb0",agv:"#f2b705",forklift:"#f2b705",crane:"#f2b705",custom:"#8a97a4"},de={body:"#e3e6ea",bodyDark:"#c9ced4",dark:"#2e3339",frame:"#59626c",steel:"#aab3bc",bright:"#c9d0d6",rubber:"#1d2024",wood:"#c4975d",cardboard:"#b98a57",crate:"#5b7894",rackBlue:"#1f5aa6",rackOrange:"#ef6c1a",yellow:"#f2b100",glass:"#86aac6",vest:["#f97316","#facc15"],trousers:"#273246",skin:"#e0b08a",helmet:["#f8fafc","#facc15","#f8fafc"]},Qr=(i,t,e)=>Math.min(e,Math.max(t,i));function Gv(i){let t=2166136261;for(const n of String(i))t=Math.imul(t^n.charCodeAt(0),16777619);let e=t>>>0;return()=>{e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function Wv(){const i=document.createElement("canvas");i.width=64,i.height=64;const t=i.getContext("2d");t.clearRect(0,0,64,64),t.fillStyle="#ffffff",t.fillRect(0,0,64,5),t.fillRect(0,0,5,64);const e=new $i(i);return e.wrapS=Mi,e.wrapT=Mi,e.repeat.set(14,20),e}class fo{constructor(t){this.kit=t,this.groups=new Map}add(t,e,n){const s=t+"|"+e.uuid;this.groups.has(s)||this.groups.set(s,{shape:t,material:e,items:[]}),this.groups.get(s).items.push(n)}flush(t){const e=new ue,n=new ii,s=new An,r=new Zt;this.groups.forEach(({shape:a,material:o,items:l})=>{const h=a==="cyl"?this.kit.unitCylX:this.kit.unitBox,u=new Rl(h,o,l.length);l.forEach((p,c)=>{s.set(p.rx||0,p.ry||0,p.rz||0),n.setFromEuler(s),e.compose(new F(p.x,p.y,p.z),n,new F(p.sx,p.sy,p.sz)),u.setMatrixAt(c,e),p.color?u.setColorAt(c,r.set(p.color)):u.instanceColor&&u.setColorAt(c,r.set("#ffffff"))}),u.instanceColor&&(u.instanceColor.needsUpdate=!0),u.instanceMatrix.needsUpdate=!0,u.computeBoundingBox(),u.computeBoundingSphere(),u.castShadow=!0,u.receiveShadow=!0,t.add(u)}),this.groups.clear()}}class Xv{constructor(){this.materials=new Map,this.glow=Nv(),this.hazard=ou(),this.fenceMesh=Wv(),this.unitBox=new Pe(1,1,1),this.unitCylX=new sn(.5,.5,1,18).rotateZ(Math.PI/2)}mat(t,e){return this.materials.has(t)||this.materials.set(t,e()),this.materials.get(t)}paint(t,e=.5,n=.2){return this.mat(`p${t}|${e}|${n}`,()=>new Xe({color:t,roughness:e,metalness:n}))}get m(){const t=this;return{body:t.paint(de.body,.45,.15),bodyDark:t.paint(de.bodyDark,.5,.2),dark:t.paint(de.dark,.55,.35),frame:t.paint(de.frame,.5,.45),steel:t.paint(de.steel,.32,.8),bright:t.paint(de.bright,.22,.9),rubber:t.paint(de.rubber,.9,0),wood:t.paint(de.wood,.85,0),yellow:t.paint(de.yellow,.45,.15),rackBlue:t.paint(de.rackBlue,.45,.35),rackOrange:t.paint(de.rackOrange,.45,.25),cardboard:t.mat("cardboard",()=>new Xe({color:"#ffffff",roughness:.92,metalness:0})),steelInst:t.mat("steelInst",()=>new Xe({color:"#ffffff",roughness:.35,metalness:.75})),glass:t.mat("glass",()=>new Xe({color:de.glass,roughness:.08,metalness:.2,transparent:!0,opacity:.38,depthWrite:!1})),screen:t.mat("screen",()=>new Xe({color:"#0d1b2a",emissive:"#3b82f6",emissiveIntensity:.7,roughness:.3})),hazard:t.mat("hazard",()=>new Xe({map:t.hazard,roughness:.55})),fence:t.mat("fence",()=>new Xe({color:"#30353b",map:t.fenceMesh,alphaMap:t.fenceMesh,transparent:!0,alphaTest:.35,side:In,roughness:.6,metalness:.4})),film:t.mat("film",()=>new Xe({color:"#e2ecf3",transparent:!0,opacity:.32,roughness:.15,depthWrite:!1})),curtain:t.mat("curtain",()=>new Xe({color:"#c2410c",transparent:!0,opacity:.55,roughness:.5,side:In,depthWrite:!1})),liquid:t.mat("liquid",()=>new Xe({color:"#203a52",roughness:.06,metalness:.35})),hot:t.mat("hot",()=>new Tn({color:"#ff7a1a",toneMapped:!1})),lamp:t.mat("lamp",()=>new Tn({color:"#f5f8ff",toneMapped:!1}))}}glowSprite(t,e){const n=new Zh(new Al({map:this.glow,color:t,blending:ha,transparent:!0,depthWrite:!1,toneMapped:!1,opacity:0}));return n.scale.set(e,e,1),n}build(t,e,{hallH:n=8}={}){const s=new rn,r=this,a=this.m,o=t.kind,l=this.paint(t.color||Jr[o]||Jr.custom,.42,.2),h=this.paint(new Zt(t.color||Jr[o]||Jr.custom).multiplyScalar(.62).getStyle(),.5,.25),u=Gv(t.id),p=new fo(this),{w:c,h:d,d:f}=t;e.animators=e.animators||[],e.andonAt=null,e.top=d,e.front=f/2;const x=(_,M,y,R,D,U=s,J=0,et=0,B=0)=>{const k=new jt(_,M);return k.position.set(y,R,D),k.rotation.set(J,et,B),k.castShadow=!0,k.receiveShadow=!0,U.add(k),k},m=(_,M,y,R,D,U,J,et=s)=>x(new Pe(Math.max(.01,_),Math.max(.01,M),Math.max(.01,y)),R,D,U,J,et),g=(_,M,y,R,D,U,J=s,et=_,B=20)=>x(new sn(_,et,Math.max(.01,M),B),y,R,D,U,J),b=(_,M,y,R,D,U,J=s,et=20)=>x(new sn(_,_,Math.max(.01,M),et),y,R,D,U,J,0,0,Math.PI/2),S=(_,M,y,R,D,U,J=s,et=20)=>x(new sn(_,_,Math.max(.01,M),et),y,R,D,U,J,Math.PI/2,0,0),w=(_,M,y,R=s)=>{const D=new rn;return D.position.set(_,M,y),R.add(D),D},q=_=>(_.userData.keep=!0,_),I=(_,M,y,R=0,D=s)=>{const U=w(_,M,y,D);return U.rotation.y=R,m(.46,.36,.1,a.dark,0,0,0,U),m(.36,.25,.012,a.screen,0,.02,.056,U),m(.05,.05,.3,a.frame,0,0,-.2,U),U},C=(_,M,y,R,D=0,U=.16,J=.045)=>{for(let et=_+U/2;et<M;et+=U)p.add("cyl",a.steelInst,{x:et,y,z:D,sx:R,sy:J*2,sz:J*2,ry:Math.PI/2,color:"#b8c0c8"})},G=(_,M,y,R,D=0)=>{const U=M-_;if(U<.3)return;[-1,1].forEach(et=>m(U,.1,.06,a.frame,(_+M)/2,y-.05,D+et*(R/2-.03)));const J=Math.max(2,Math.round(U/1.4)+1);for(let et=0;et<J;et+=1){const B=_+.08+et*(U-.16)/(J-1);[-1,1].forEach(k=>m(.06,y-.1,.06,a.frame,B,(y-.1)/2,D+k*(R/2-.06)))}C(_,M,y+.01,R-.12,D)},tt=(_,M,y,R,D,U,J)=>{const et=_==="mixed"?["boxes","parts","steel","coils"][Math.floor(u()*4)]:_||"boxes";if(et!=="empty")if(et==="boxes"){const B=Math.max(1,Math.round(J/.42)),k=J/B;for(let st=0;st<B;st+=1)[-1,1].forEach(at=>[-1,1].forEach(dt=>{const vt=.85+u()*.25;p.add("box",a.cardboard,{x:M+at*D/4,y:y+k*st+k/2,z:R+dt*U/4,sx:D/2-.02,sy:k-.01,sz:U/2-.02,color:new Zt(de.cardboard).multiplyScalar(vt).getStyle()})}))}else if(et==="steel"){const k=Math.max(1,Math.min(3,Math.round(J/.12)));for(let st=0;st<k;st+=1)for(let at=0;at<4;at+=1)p.add("box",a.steelInst,{x:M,y:y+.06+st*.11,z:R-U/2+(at+.5)*(U/4),sx:D*1.15,sy:.1,sz:U/4-.03,color:u()>.5?"#9aa4ad":"#7e8892"})}else if(et==="coils"){const B=Math.min(D,U)*.42;p.add("cyl",a.steelInst,{x:M,y:y+B,z:R,sx:Math.min(D,.55),sy:B*2,sz:B*2,color:"#8f99a3"})}else p.add("box",a.cardboard,{x:M,y:y+J*.42,z:R,sx:D,sy:J*.84,sz:U,color:de.crate}),p.add("box",a.steelInst,{x:M,y:y+J*.86,z:R,sx:D*.8,sy:.05,sz:U*.8,color:"#6f7b86"})},v=(_,M,y,R,D,U,J)=>{p.add("box",a.cardboard,{x:_,y:M+.07,z:y,sx:R,sy:.14,sz:D,color:de.wood}),tt(U,_,M+.14,y,R-.04,D-.04,J)},T=(_,M,y,R,D,U=0)=>{const J=Math.hypot(y-_,R-M),et=Math.atan2(R-M,y-_),B=Math.max(1,Math.ceil(J/1.4)),k=J/B;for(let st=0;st<=B;st+=1){const at=st*k;p.add("box",a.cardboard,{x:_+Math.cos(et)*at,y:D/2,z:M+Math.sin(et)*at,sx:.07,sy:D,sz:.07,color:de.yellow})}for(let st=0;st<B;st+=1){const at=(st+.5)*k;if(U&&Math.abs(at-J/2)<U/2)continue;const dt=_+Math.cos(et)*at,vt=M+Math.sin(et)*at,Ot=x(new Pe(k-.08,D-.2,.02),a.fence,dt,.12+(D-.2)/2,vt,s,0,-et,0);Ot.castShadow=!1,p.add("box",a.cardboard,{x:dt,y:.07,z:vt,sx:k-.08,sy:.12,sz:.025,ry:-et,color:"#6b7480"})}},$=(_,M,y,R=0,D=0)=>{const U=R-_/2,J=R+_/2,et=D-M/2,B=D+M/2;T(U,et,J,et,y),T(U,B,J,B,y,Math.min(1.4,_*.3)),T(U,et,U,B,y),T(J,et,J,B,y)},W=(_,M,y,R,D="#ffd27a",U=.9)=>{const J=r.glowSprite(D,U);return J.position.set(M,y,R),_.add(J),J},N=(_,M,y=1)=>{const R=Math.random();_.material.opacity=M?R>.25?.95:.35:0;const D=y*(.6+R*.9);_.scale.set(D,D,1)};switch(o){case"machine":case"cnc":case"mill":{const _=Math.min(.32,d*.1),M=(o==="mill"?d*.74:d*.86)-_;m(c,_,f,a.dark,0,_/2,0),m(c,M,f*.96,a.body,0,_+M/2,0),m(c+.04,d*.05,f*.96+.04,l,0,_+M-d*.032,0),m(c+.04,.08,f*.96+.04,h,0,_+.05,0);const y=c*.56,R=M*.74,D=_+M*.47;m(y,R,.05,a.bodyDark,-c*.12,D,f*.48+.025),m(y*.78,R*.6,.02,a.glass,-c*.12,D+R*.08,f*.48+.06),m(.04,R*.45,.06,a.steel,-c*.12+y*.42,D,f*.48+.08);const U=w(-c*.12,_,0);m(y*.7,.12,f*.45,a.frame,0,M*.28,0,U);const J=g(Math.min(c,f)*.05,M*.22,a.bright,0,M*.62,0,U),et=m(y*.6,.02,f*.3,a.lamp,0,M*.92,0,U);et.visible=!1,I(c*.36,_+M*.62,f*.48+.22,-.25),o==="mill"&&(m(c*.36,d*.2,f*.42,a.body,-c*.1,d*.74+d*.1,-f*.22),m(c*.36+.03,.06,f*.42+.03,l,-c*.1,d*.94+.03,-f*.22),e.top=d*.94),o!=="machine"&&(b(Math.min(d*.22,f*.3),.32,l,-c/2+.1,_+M*.55,-f*.1),m(.5,_+.55,f*.5,a.frame,c/2-.25,(_+.55)/2,-f*.2)),e.andonAt=[c*.42,_+M,-f*.36],e.animators.push((B,k,st,at)=>{et.visible=st,st&&(J.rotation.y+=k*28,J.position.y=M*.62-.05*(.5+.5*Math.sin(B*1.3+at)),U.children[0].position.x=Math.sin(B*.5+at)*y*.12)});break}case"lathe":{const _=d*.24;m(c,_,f*.8,a.dark,0,_/2,-f*.05),m(c*.96,d*.7,f*.86,a.body,0,_+d*.35,0),m(c*.96+.04,d*.05,f*.86+.04,l,0,_+d*.7,0),m(c*.5,d*.42,.03,a.glass,-c*.08,_+d*.38,f*.43+.03),m(c*.52,.05,.05,a.steel,-c*.08,_+d*.12,f*.43+.05);const M=w(-c*.28,_+d*.36,0);b(d*.11,.24,a.steel,0,0,0,M);for(let y=0;y<3;y+=1)m(.06,.06,.08,a.dark,.13,0,0,M).position.set(.13,Math.cos(y*2*Math.PI/3)*d*.08,Math.sin(y*2*Math.PI/3)*d*.08);b(d*.035,c*.32,a.bright,c*.17,0,0,M),m(.32,.3,.32,a.dark,c*.12,_+d*.42,.05),I(c*.4,_+d*.42,f*.43+.22,-.3),m(.6,_+.45,.5,a.frame,c/2-.3,(_+.45)/2,-f*.3),e.top=_+d*.725,e.andonAt=[c*.44,_+d*.725,-f*.32],e.animators.push((y,R,D)=>{D&&(M.rotation.x+=R*22)});break}case"drill":{const _=this.paint("#56605a",.6,.3);m(c,d*.08,f,_,0,d*.04,0);const M=Math.min(c,f)*.09;g(M,d*.86,l,-c*.36,d*.08+d*.43,0),g(M*1.15,d*.1,h,-c*.36,d*.99,0),m(c*.3,d*.12,f*.4,a.steel,c*.22,d*.08+d*.06,0);const y=w(-c*.36,d*.72,0);m(c*.84,d*.1,f*.22,l,c*.42,0,0,y);const R=w(c*.6,0,0,y);m(c*.2,d*.28,f*.3,l,0,-d*.04,0,R),g(.12,d*.12,a.dark,0,d*.16,0,R);const D=g(.045,d*.2,a.bright,0,-d*.26,0,R,.02);e.top=d*1.04,e.andonAt=[-c*.36,d*1.04,0],e.animators.push((U,J,et,B)=>{et&&(y.rotation.y=Math.sin(U*.22+B)*.3,D.rotation.y+=J*24,D.position.y=-d*.26-.08*(.5+.5*Math.sin(U*1.1+B)))});break}case"saw":{const _=Math.min(c*.42,2.6),M=c/2-_/2-c*.08,y=d*.42;m(_,y,f*.78,a.body,M,y/2,-f*.02),m(_+.04,.08,f*.78+.04,l,M,y-.12,-f*.02),m(_*1.06,.06,f*.82,a.dark,M,y+.03,-f*.02),m(.16,.3,f*.3,a.steel,M-_*.3,y+.2,-f*.1),m(.16,.3,f*.3,a.steel,M-_*.3,y+.2,f*.14);const R=w(M+_*.5,y+d*.12,-f*.05);m(_*1.12,d*.2,f*.34,l,-_*.56,d*.18,0,R),S(d*.17,f*.38,h,-_*1.06,d*.18,0,R),S(d*.17,f*.38,h,-.06,d*.18,0,R),m(.1,d*.2,.12,a.steel,-_*.78,d*.02,.05,R),m(.1,d*.2,.12,a.steel,-_*.34,d*.02,.05,R),m(_*.46,.02,.03,a.dark,-_*.56,-d*.06,.05,R),g(.05,d*.32,a.bright,M+_*.2,y+d*.2,-f*.3),G(-c/2,M-_/2,y,f*.4,.02),G(M+_/2,c/2,y,f*.4,.02),m(Math.max(.3,M-_/2+c/2-.2),.09,.09,a.bright,(-c/2+M-_/2)/2,y+.1,.02),m(Math.max(.3,M-_/2+c/2-.4),.09,.09,a.bright,(-c/2+M-_/2)/2,y+.1,.13),I(M-_*.2,y+d*.35,f*.42,.2),e.top=y+d*.48,e.andonAt=[M+_*.42,y+.03,-f*.36],e.animators.push((D,U,J,et)=>{const B=((D*.07+et)%1+1)%1;R.rotation.z=J?-.2*(1-B):-.25});break}case"shear":{const _=c/2-c*.07;[-1,1].forEach(y=>m(c*.12,d,f*.72,l,y*_,d/2,-f*.08)),m(c*.82,d*.42,f*.5,h,0,d*.21,-f*.08),m(c*.84,.05,f*.58,a.steel,0,d*.43,-f*.05);const M=w(0,d*.72,-f*.1);m(c*.78,d*.22,f*.32,l,0,0,0,M),m(c*.76,d*.06,.04,a.bright,0,-d*.13,f*.17,M),[-1,1].forEach(y=>g(Math.min(.18,c*.04),d*.22,a.steel,y*c*.3,d+d*.06,-f*.1));for(let y=-1;y<=1;y+=1)m(.08,.06,f*.42,a.frame,y*c*.3,d*.43,f*.29);m(c*.6,.02,f*.34,this.paint("#8693a0",.3,.7),0,d*.465,f*.24),m(c*.7,.1,.1,a.dark,0,d*.47,-f*.4),[-1,1].forEach(y=>m(.07,d*.6,.07,a.hazard,y*c*.46,d*.3,f*.46)),I(c*.47,d*.62,f*.4,-.4),e.andonAt=[_,d,-f*.36],e.animators.push((y,R,D,U)=>{M.position.y=D?d*.72-d*.09*Math.max(0,Math.sin(y*2+U)):d*.72});break}case"plasma":{const _=Math.min(d*.32,.8);m(c*.84,_,f*.8,a.dark,-c*.05,_/2,0);for(let D=-c*.46;D<c*.36;D+=.28)p.add("box",a.steelInst,{x:D,y:_+.05,z:0,sx:.025,sy:.1,sz:f*.78,color:"#5d666f"});m(c*.7,.025,f*.64,this.paint("#7f8b96",.3,.75),-c*.06,_+.11,0),[-1,1].forEach(D=>m(c,.12,.16,a.steel,0,_+.08,D*f*.45));const M=w(0,0,0);[-1,1].forEach(D=>m(.36,d-_-.1,.3,l,0,_+.14+(d-_-.1)/2,D*f*.45,M)),m(.42,.45,f*.98,l,0,d-.22,0,M),m(.18,.1,f*.9,a.dark,-.12,d+.02,0,M);const y=w(.3,0,0,M);m(.32,.5,.3,a.dark,0,d-.45,0,y),g(.035,d-_-.8,a.bright,0,_+.2+(d-_-.8)/2,0,y);const R=W(y,0,_+.16,0,"#ffd9a0",1.1);m(.5,1.3,.6,a.body,c/2-.3,.65,f*.24),m(.36,.26,.02,a.screen,c/2-.3,1,f*.24+.31),e.andonAt=[c/2-.3,1.3,f*.12],e.animators.push((D,U,J,et)=>{J&&(M.position.x=Math.sin(D*.28+et)*c*.32,y.position.z=Math.sin(D*.85+et)*f*.3),N(R,J,1.1)});break}case"furnace":{const _=f*.78,M=-f*.11,y=this.paint("#5b6571",.65,.35);m(c,d*.8,_,y,0,d*.4,M),m(c*1.02,d*.05,_*1.02,this.paint("#7b8794",.5,.4),0,d*.825,M),[-1,1].forEach(et=>m(.18,d*.96,.2,a.steel,et*c*.34,d*.48,M+_/2+.1)),m(c*.72,.2,.22,a.steel,0,d*.95,M+_/2+.1);const R=m(c*.5,d*.42,.02,a.hot,0,d*.27,M+_/2+.005);q(R).castShadow=!1,R.visible=!1;const D=w(0,0,M+_/2+.12);m(c*.6,d*.55,.2,this.paint("#97a1ab",.45,.45),0,d*.3,0,D);const U=m(.12,.12,.02,a.hot,0,d*.42,.11,D);U.visible=!1;const J=W(s,0,d*.2,M+_/2+.6,"#ff8a3d",c*.8);[-1,1].forEach(et=>{for(let B=0;B<3;B+=1)b(.09,.32,a.steel,et*(c/2+.12),d*.2+B*d*.18,M-_*.2+B*.4);m(.06,.06,_*.9,a.yellow,et*(c/2+.06),d*.12,M)}),g(.28,d*.55,a.steel,c*.3,d*.8+d*.275,M-_*.3),g(.36,.08,a.dark,c*.3,d*1.1,M-_*.3),m(.7,2,.45,a.body,-c*.43,1,f*.36),m(.32,.24,.02,a.screen,-c*.43,1.45,f*.36+.23),[-1,1].forEach(et=>m(.08,.05,f/2-(M+_/2),a.steel,et*c*.15,.03,(M+_/2+f/2)/2)),e.top=d*1.1,e.andonAt=[c*.42,d*.85,M+_*.3],e.animators.push((et,B,k,st)=>{const at=((et*.045+st)%1+1)%1,dt=k&&at<.18;D.position.y+=((dt?d*.36:0)-D.position.y)*Math.min(1,B*2),R.visible=k,U.visible=k,J.material.opacity=dt?.55+.15*Math.sin(et*7):0});break}case"tank":{if(Math.abs(c-f)<.35*Math.max(c,f)){const M=Math.min(c,f)/2*.92,y=d*.14;for(let R=0;R<4;R+=1){const D=R*Math.PI/2+Math.PI/4;m(.12,y,.12,a.frame,Math.cos(D)*M*.75,y/2,Math.sin(D)*M*.75)}g(M,d*.72,a.steel,0,y+d*.36,0,s,M,32),x(new mi(M,32,12,0,Math.PI*2,0,Math.PI/2),a.steel,0,y+d*.72,0).scale.y=.35,g(M*.98,.06,a.frame,0,y+d*.5,0,s,M*.98,32),[-1,1].forEach(R=>m(.04,d*.8,.04,a.yellow,M+.15,y+d*.4,R*.2));for(let R=y+.3;R<d*.95;R+=.3)p.add("box",a.cardboard,{x:M+.15,y:R,z:0,sx:.03,sy:.03,sz:.4,color:de.yellow});b(.08,M*.8,a.frame,-M-.2,y+.3,0),e.andonAt=[0,y+d*.72+M*.35,0]}else{const M=d*.62,y=.12;m(c,M,y,a.steel,0,M/2,-f/2+y/2),m(c,M,y,a.steel,0,M/2,f/2-y/2),m(y,M,f,a.steel,-c/2+y/2,M/2,0),m(y,M,f,a.steel,c/2-y/2,M/2,0),m(c-y*2,.02,f-y*2,a.liquid,0,M-.15,0),[-1,1].forEach(U=>{m(c,.04,.04,a.yellow,0,M+1,U*(f/2-.05)),m(.04,.04,f,a.yellow,U*(c/2-.05),M+1,0)});for(let U=-c/2+.05;U<=c/2;U+=Math.max(.6,c/5))[-1,1].forEach(J=>p.add("box",a.cardboard,{x:U,y:M+.5,z:J*(f/2-.05),sx:.04,sy:1,sz:.04,color:de.yellow}));[-1,1].forEach(U=>m(.16,d,.16,h,U*c*.36,d/2,-f*.36)),m(c*.8,.2,.2,h,0,d-.1,-f*.36);const R=w(0,0,-f*.05);m(c*.45,.5,f*.45,this.paint("#4a525b",.6,.6),0,0,0,R),g(.02,1,a.dark,0,.75,0,R),g(.22,.45,l,c*.36,M+.25,f*.3);const D=[0,1,2].map(U=>W(s,(U-1)*c*.2,M+.3,0,"#f1f5f9",1.6));D.forEach(U=>U.material.blending=zi),e.top=d,e.andonAt=[c*.36,d,-f*.36],e.animators.push((U,J,et,B)=>{const k=((U*.06+B)%1+1)%1;R.position.y=et?M+.3-Math.sin(k*Math.PI)*(M*.7):M+.4,D.forEach((st,at)=>{const dt=((U*.25+at/3+B)%1+1)%1;st.position.y=M+.2+dt*2.4,st.material.opacity=et?.32*(1-dt):0;const vt=1.2+dt*2.2;st.scale.set(vt,vt,1)})})}break}case"welding":{const _=Qr(d*.85,.8,.95),M=Math.min(c*.55,2),y=Math.min(f*.5,1.1),R=-c*.12,D=f*.08;m(M,.08,y,a.dark,R,_,D),[-1,1].forEach(at=>[-1,1].forEach(dt=>m(.07,_,.07,a.frame,R+at*(M/2-.08),_/2,D+dt*(y/2-.08)))),m(M*.55,.1,y*.4,a.bright,R,_+.09,D),m(.08,.45,y*.4,a.bright,R+M*.15,_+.3,D);const U=w(c*.3,0,-f*.22);m(.55,.72,.45,l,0,.5,0,U),m(.56,.16,.02,a.yellow,0,.66,.23,U),[-1,1].forEach(at=>S(.08,.06,a.rubber,at*.2,.08,.2,U)),g(.11,1.35,this.paint("#2f6f4f",.4,.3),c*.43,.7,-f*.38),g(.07,.12,a.steel,c*.43,1.42,-f*.38);const J=Math.max(1.8,d*1.6);[[-c/2+.05,-f/2+.05],[c*.2,-f/2+.05],[-c/2+.05,f*.35]].forEach(([at,dt])=>m(.04,J,.04,a.yellow,at,J/2,dt));const et=m(c*.7,J-.35,.02,a.curtain,-c*.15,.2+(J-.35)/2,-f/2+.05);et.castShadow=!1;const B=m(.02,J-.35,f*.8,a.curtain,-c/2+.05,.2+(J-.35)/2,-f*.07);B.castShadow=!1,g(.05,2.1,a.steel,-c*.3,1.05,-f*.4),x(new sn(.06,.06,1,10),a.steel,-c*.22,2,-f*.2,s,.9,0,0),x(new _a(.2,.3,14,1,!0),a.steel,R,_+.75,D-.1,s,0,0,0).rotation.x=Math.PI;const k=W(s,R+.1,_+.2,D,"#cfe6ff",1.4),st=W(s,R+.1,_+.18,D+.05,"#ffb347",.7);e.top=J,e.andonAt=[c*.3,.86,-f*.22],e.animators.push((at,dt,vt)=>{N(k,vt,1.4),N(st,vt,.8)});break}case"robot":{const _=Qr(Math.min(d,3)/2.4,.7,1.4),M=Math.min(c,f)>=3.5,y=M?-c*.14:0;m(.8*_,.45*_,.8*_,a.dark,y,.225*_,0);const R=w(y,.45*_,0);g(.33*_,.22*_,l,0,.11*_,0,R);const D=w(0,.22*_,0,R);m(.55*_,.32*_,.5*_,l,0,.16*_,0,D),m(.22*_,.22*_,.22*_,a.dark,-.27*_,.22*_,.2*_,D);const U=w(0,.4*_,0,D);S(.2*_,.5*_,l,0,0,0,U),m(.24*_,1*_,.28*_,l,0,.5*_,0,U);const J=w(0,1*_,0,U);S(.17*_,.42*_,l,0,0,0,J),m(.95*_,.2*_,.22*_,l,.45*_,0,0,J),m(.26*_,.26*_,.26*_,a.dark,-.2*_,0,0,J);const et=w(.95*_,0,0,J);b(.09*_,.2*_,h,0,0,0,et),x(new sn(.035*_,.035*_,.4*_,10),a.dark,.14*_,-.16*_,0,et,0,0,.6);const B=W(et,.25*_,-.33*_,0,"#cfe6ff",1.3);if(U.rotation.z=-.35,J.rotation.z=-.55,M){const k=c*.2;m(.5,.9,.9,a.dark,k-.7,.45,0),m(.5,.9,.9,a.dark,k+.7,.45,0);const st=w(k,.95,0);b(.5,.06,this.paint("#3a4048",.5,.5),-.5,0,0,st),b(.5,.06,this.paint("#3a4048",.5,.5),.5,0,0,st),m(.9,.12,.6,a.bright,0,0,0,st),m(.12,.4,.6,a.bright,.25,.2,0,st),$(c-.1,f-.1,2),m(.6,.9,.5,this.paint("#1f6fd1",.45,.2),-c/2+.55,.45,-f/2+.5),m(.6,1.8,.45,a.body,-c/2+1.3,.9,-f/2+.45),e.andonAt=[c/2-.1,2,f/2-.1],e.top=2.3,e.animators.push((at,dt,vt)=>{vt&&(st.rotation.x+=dt*.4)})}else e.andonAt=[y+.42*_,.45*_,.3*_],e.top=2.2*_;e.animators.push((k,st,at,dt)=>{at&&(D.rotation.y=Math.sin(k*.7+dt)*.5,U.rotation.z=-.35+.14*Math.sin(k*1.1+dt),J.rotation.z=-.55+.2*Math.sin(k*1.6+dt+1),et.rotation.x+=st*1.5),N(B,at,1.3)});break}case"conveyor":{const _=Math.max(.4,d);[-1,1].forEach(y=>m(c,.14,.06,l,0,_-.07,y*(f/2-.03)));const M=Math.max(2,Math.round(c/1.6)+1);for(let y=0;y<M;y+=1){const R=-c/2+.1+y*(c-.2)/(M-1);[-1,1].forEach(D=>m(.06,_-.14,.06,a.frame,R,(_-.14)/2,D*(f/2-.08))),m(.05,.05,f-.16,a.frame,R,.25,0)}C(-c/2,c/2,_-.04,f-.1),m(.32,.26,.26,this.paint("#2c6cb0",.45,.3),c/2-.45,_-.32,f/2-.2),e.top=_;break}case"oven":{m(c*.86,d*.86,f,a.body,0,d*.43,0),m(c*.86+.04,d*.05,f+.04,l,0,d*.84,0);const _=[-1,1].map(M=>{const y=m(.02,d*.34,f*.6,a.hot,M*c*.43+M*.011,d*.3,0);return q(y).castShadow=!1,y.visible=!1,y});C(-c/2,-c*.43,d*.2,f*.62),C(c*.43,c/2,d*.2,f*.62),[-.25,.25].forEach(M=>g(.2,d*.4,a.steel,M*c,d*.86+d*.2,-f*.2)),I(c*.3,d*.5,f/2+.2,0),e.andonAt=[c*.38,d*.86,-f*.35],e.animators.push((M,y,R)=>_.forEach(D=>D.visible=R));break}case"press":{const _=c/2-c*.08;m(c,d*.18,f*.8,h,0,d*.09,0),[-1,1].forEach(y=>m(c*.16,d*.74,f*.7,l,y*_,d*.18+d*.37,0)),m(c,d*.16,f*.8,l,0,d*.92,0),g(Math.min(c,f)*.15,d*.14,a.steel,0,d*1.07,0),m(c*.62,d*.06,f*.6,a.steel,0,d*.21,0);const M=m(c*.6,d*.14,f*.55,a.frame,0,d*.62,0);q(M),[-1,1].forEach(y=>m(.07,d*.55,.07,a.hazard,y*c*.36,d*.45,f*.46)),I(c*.5+.1,d*.5,f*.3,-.6),e.top=d*1.14,e.andonAt=[_,d*1,-f*.3],e.animators.push((y,R,D,U)=>{M.position.y=D?d*.62-d*.2*(.5+.5*Math.sin(y*2.4+U)):d*.62});break}case"blast":{const _=w(-c*.06,0,0);m(c*.5,d*.72,f*.78,l,0,d*.36,0,_),m(c*.5+.04,d*.04,f*.78+.04,h,0,d*.7,0,_),[-1,1].forEach(y=>m(.03,d*.32,f*.42,a.rubber,y*(c*.25+.016),d*.26,0,_)),C(-c/2,-c*.31,d*.22,f*.42),C(c*.19,c/2,d*.22,f*.42),m(.5,d,.5,h,c*.1,d/2,-f*.38);const M=Math.min(c,f)*.15;g(M,d*.5,a.bodyDark,c*.38,d*.55,-f*.22,s,M,24),g(M,d*.25,a.bodyDark,c*.38,d*.18,-f*.22,s,.08,24),b(.14,c*.4,a.steel,c*.17,d*.86,-f*.22),[-1,1].forEach(y=>m(.04,.04,f*.78,a.yellow,-c*.06+y*c*.24,d*.72+1,0)),e.top=d,e.andonAt=[-c*.28,d*.72,f*.32],e.animators.push((y,R,D)=>{_.position.x=-c*.06+(D?(Math.random()-.5)*.02:0)});break}case"paint_booth":{const _=d*.82,M=this.paint("#eef1f4",.5,.05);m(c,_,.08,M,0,_/2,-f/2+.04),[-1,1].forEach(D=>m(.08,_,f,M,D*(c/2-.04),_/2,0)),m(c,.1,f,M,0,_+.05,0);const y=x(new On(c*.8,f*.6),a.lamp,0,_-.02,0,s,Math.PI/2,0,0);y.castShadow=!1,m(c*.8,_*.55,.16,this.paint("#9aa5b1",.7,.1),0,_*.4,-f/2+.17),m(c*.3,d*.18,f*.4,a.steel,-c*.2,_+.1+d*.09,-f*.15),g(.3,d*.12,a.steel,c*.2,_+.1+d*.06,-f*.2),m(c*1.3,.12,.12,a.dark,0,_-.35,0),[-1,1].forEach(D=>g(.04,1.4,a.dark,D*(c/2-.4),.7,f*.1));const R=[];for(let D=0;D<5;D+=1){const U=w(0,_-.4,0);g(.012,.5,a.dark,0,-.25,0,U),m(.55,.75,.06,this.paint(["#1d4ed8","#9aa4ad","#b91c1c"][D%3],.4,.35),0,-.9,0,U),R.push(U)}I(c/2+.15,1.3,f*.35,-1),e.andonAt=[c*.46,_+.1,f*.4],e.animators.push((D,U,J,et)=>{R.forEach((B,k)=>{const st=((D*(J?.05:0)+k/R.length+et)%1+1)%1;B.position.x=-c*.65+st*c*1.3})});break}case"packing":{const _=Math.min(c,f)*.3,M=w(-c*.08,0,0);g(_,.12,a.dark,0,.06,0,M,_,28),m(_*1.15,.14,_*.95,a.wood,0,.19,0,M);const y=Math.min(1.5,d*.55);for(let U=0;U<3;U+=1)[-1,1].forEach(J=>[-1,1].forEach(et=>m(_*.55,y/3-.02,_*.45,this.paint(new Zt(de.cardboard).multiplyScalar(.9+.1*((U+J+et+4)%3)).getStyle(),.9,0),J*_/3.6,.26+(U+.5)*(y/3),et*_/4.4,M)));const R=g(_*.72,y,a.film,0,.26+y/2,0,M,_*.72,24);R.castShadow=!1,m(.24,d,.24,a.body,c*.3,d/2,-f*.3);const D=w(c*.3,.6,-f*.3+.2);m(.36,.45,.3,l,0,0,0,D),g(.09,.5,this.paint("#f1f5f9",.3,0),-.12,0,.18,D),C(-c/2,-c*.08-_-.1,.4,f*.5),m(.5,1.4,.3,a.body,c*.4,.7,f*.35),m(.3,.2,.02,a.screen,c*.4,1.1,f*.35+.16),e.andonAt=[c*.3,d,-f*.3],e.animators.push((U,J,et,B)=>{et&&(M.rotation.y+=J*1.5,D.position.y=.4+(d-1)*(.5+.5*Math.sin(U*.35+B)))});break}case"workstation":{const _=Math.min(d,.92);m(c,.05,f,this.paint("#d7dde3",.6,.1),0,_,0),[-1,1].forEach(M=>[-1,1].forEach(y=>m(.05,_,.05,a.frame,M*(c/2-.06),_/2,y*(f/2-.06)))),[-1,1].forEach(M=>m(.04,1.1,.04,a.frame,M*(c/2-.06),_+.55,-f/2+.06)),m(c,.06,.12,a.frame,0,_+1.1,-f/2+.1),m(c*.8,.02,.08,a.lamp,0,_+1.06,-f/2+.12);for(let M=0;M<Math.max(2,Math.floor(c/.35));M+=1)p.add("box",a.cardboard,{x:-c/2+.2+M*.35,y:_+.55,z:-f/2+.12,sx:.28,sy:.14,sz:.2,color:M%2?"#2563eb":"#dc2626"});m(.5,.32,.03,a.screen,c*.25,_+.3,-f*.2),e.top=_+1.15,e.andonAt=[c/2-.06,_+1.1,-f/2+.06];break}case"rack":{const _=c>=f,M=_?c:f,y=_?f:c,R=w(0,0,0);_||(R.rotation.y=Math.PI/2);const D=Math.max(1,Math.round(M/2.7)),U=M/D,J=Qr(Math.round(d/1.6),2,6),et=d/J,B=t.load||"boxes",k=new fo(this);for(let st=0;st<=D;st+=1){const at=-M/2+st*U;[-1,1].forEach(dt=>k.add("box",a.cardboard,{x:at,y:d/2,z:dt*y/2,sx:.09,sy:d,sz:.07,color:de.rackBlue}));for(let dt=0;dt<J*2;dt+=1){const vt=(dt+.5)*(d/(J*2));k.add("box",a.cardboard,{x:at,y:vt,z:0,sx:.03,sy:Math.hypot(y,d/(J*2)),sz:.03,rx:(dt%2?1:-1)*Math.atan2(y,d/(J*2)),color:de.rackBlue})}}for(let st=0;st<D;st+=1){const at=-M/2+(st+.5)*U;for(let dt=1;dt<J;dt+=1)[-1,1].forEach(vt=>k.add("box",a.cardboard,{x:at,y:dt*et,z:vt*(y/2-.02),sx:U-.09,sy:.12,sz:.05,color:de.rackOrange}));for(let dt=0;dt<J;dt+=1){const vt=dt===0?0:dt*et+.06,Ot=(dt===J-1?d-vt:et-.06)-.25;if(Ot<.3)continue;if(B==="steel"){for(let ye=0;ye<2;ye+=1)for(let Yt=0;Yt<4;Yt+=1)u()<.15||k.add("box",a.steelInst,{x:at,y:vt+.08+ye*.13,z:-y/2+.12+(Yt+.5)*((y-.24)/4),sx:U*.98,sy:.11,sz:(y-.24)/4-.04,color:u()>.5?"#9aa4ad":"#7d8791"});continue}const zt=Math.max(1,Math.floor(U/.95)),Kt=U/zt-.12;for(let O=0;O<zt;O+=1){if(u()>.82)continue;const ye=at-U/2+(O+.5)*(U/zt),Yt=Math.min(1.25,Ot)*(.6+u()*.4);k.add("box",a.cardboard,{x:ye,y:vt+.07,z:0,sx:Kt,sy:.14,sz:y-.1,color:de.wood}),K(k,()=>tt(B,ye,vt+.14,0,Kt-.04,y-.14,Yt))}}}k.flush(R),e.top=d;break}case"buffer":{[-1,1].forEach(D=>{m(c,.006,.1,a.yellow,0,.006,D*(f/2-.05)),m(.1,.006,f,a.yellow,D*(c/2-.05),.006,0)});const _=Math.max(1,Math.floor(c/1.3)),M=Math.max(1,Math.floor(f/1.3)),y=c/_-.25,R=f/M-.25;for(let D=0;D<_;D+=1)for(let U=0;U<M;U+=1)u()>.7||v(-c/2+(D+.5)*(c/_),0,-f/2+(U+.5)*(f/M),y,R,t.load||"parts",Math.min(1.1,Math.max(.4,d*.8)));e.top=Math.min(1.3,d);break}case"pallet":v(0,0,0,c,f,t.load||"boxes",Math.max(.2,d-.14));break;case"agv":{m(c,.3,f,l,0,.2,0),m(c*.9,.04,f*.9,a.dark,0,.37,0),m(c*1.002,.03,f*1.002,r.mat("agvLed",()=>new Tn({color:"#38bdf8",toneMapped:!1})),0,.1,0),g(.08,.1,a.dark,c/2-.15,.42,0),t.load&&t.load!=="empty"&&v(0,.39,0,Math.min(c,1.2)-.1,Math.min(f,1)-.1,t.load,.6),e.vehicle=!0,e.top=1.1;break}case"forklift":{const _=Math.max(1.8,c),M=Math.max(.9,f),y=Qr(d,1.9,2.3);m(_*.62,.55,M,l,-_*.06,.52,0),m(_*.24,.75,M*.98,a.dark,-_*.36,.58,0),[-1,1].forEach(U=>{S(.27,.24,a.rubber,_*.16,.27,U*(M/2-.12)),S(.22,.22,a.rubber,-_*.3,.22,U*(M/2-.12)),m(.05,y-.8,.05,a.dark,_*.12,.8+(y-.8)/2,U*(M/2-.06)),m(.05,y-.8,.05,a.dark,-_*.22,.8+(y-.8)/2,U*(M/2-.06))}),m(_*.4,.05,M,a.dark,-_*.05,y,0),m(.45,.12,.45,a.dark,-_*.1,.86,0),m(.08,.5,.45,a.dark,-_*.22,1.12,0),m(.42,.55,.32,this.paint(de.vest[0],.7,0),-_*.08,1.22,0),x(new mi(.11,16,12),this.paint(de.skin,.8,0),-_*.06,1.62,0),x(new mi(.125,16,10,0,Math.PI*2,0,Math.PI/2),this.paint("#facc15",.4,0),-_*.06,1.66,0),[-1,1].forEach(U=>m(.08,.06,.08,a.dark,_*.33,y*.5,U*M*.28)),[-1,1].forEach(U=>m(.1,y*1,.1,a.frame,_*.3,y*.5,U*M*.28));const R=w(_*.33,0,0);if(m(.06,.9,M*.8,a.frame,0,.55,0,R),[-1,1].forEach(U=>m(1.05,.05,.1,a.steel,.55,.1,U*M*.22,R)),t.load&&t.load!=="empty"){const U=new fo(this);K(U,()=>v(.6,.13,0,1,Math.min(1.1,M),t.load,.7)),U.flush(R)}const D=m(.1,.1,.1,r.mat("beacon",()=>new Tn({color:"#fb923c",toneMapped:!1})),-_*.05,y+.08,0);q(D),e.vehicle=!0,e.top=y+.2,e.animators.push((U,J,et)=>{D.visible=!et||Math.sin(U*8)>0});break}case"crane":{const _=Math.max(4,d);[-1,1].forEach(U=>m(c,.45,.3,this.paint("#6b7785",.5,.5),0,_,U*f/2));const M=w(0,0,0);[-.45,.45].forEach(U=>m(.5,.8,f+.3,l,U,_+.62,0,M)),[-1,1].forEach(U=>m(2.2,.5,.7,h,0,_+.4,U*f/2,M));const y=w(0,_+1.2,0,M);m(1.5,.6,1.3,this.paint("#d99a00",.45,.25),0,.1,0,y),S(.28,1,a.dark,0,.1,0,y);const R=g(.025,1,a.dark,0,0,0,y),D=w(0,-3,0,y);m(.45,.5,.3,a.hazard,0,0,0,D),t.load&&t.load!=="empty"&&[-.2,0,.2].forEach(U=>m(3.2,.12,.16,a.steel,0,-.75,U,D)),e.crane=!0,e.top=_+1.6,e.animators.push((U,J,et,B)=>{const k=et?1:0;e.craneT=(e.craneT||B)+J*k;const st=e.craneT;M.position.x=Math.sin(st*.06)*c*.38,y.position.z=Math.sin(st*.11+1)*f*.3;const at=2.4+Math.sin(st*.17)*1.2;D.position.y=-at-.4,R.scale.y=at,R.position.y=-at/2-.1});break}case"fence":{const _=t.h&&t.h>=1?Math.min(t.h,3):2;f>=1?$(c,f,_):T(-c/2,0,c/2,0,_),e.top=_;break}case"wall":m(c,d,f,this.paint("#cfd4d9",.85,0),0,d/2,0),m(c+.02,.12,f+.04,a.frame,0,d-.06,0);break;case"label":{const _=String(t.text||t.name||""),{texture:M,aspect:y}=Iv(_);let R=.9,D=y*R;D>16&&(D=16,R=D/y);const U=t.h||Math.max(4,n-2.5),J=new Xe({map:M,emissive:"#ffffff",emissiveMap:M,emissiveIntensity:.35,roughness:.6}),et=a.dark,B=new jt(new Pe(D,R,.06),[et,et,et,et,J,J]);B.position.set(0,U,0),B.castShadow=!0,s.add(B),[-1,1].forEach(k=>g(.01,Math.max(.2,n-U-R/2),a.dark,k*D/2.4,(n+U+R/2)/2,0)),e.top=U+R,e.sign=B;break}case"light":{const _=Number(t.y)||0,M=Math.max(1,Math.round(c/5)),y=Math.max(1,Math.round(f/4.5)),R=new Xe({color:"#e8edf2",emissive:"#fff3d6",emissiveIntensity:0,roughness:.4}),D=new Tn({map:r.glow,color:"#fff1c8",transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1,blending:ha,polygonOffset:!0,polygonOffsetFactor:-2}),U=Math.max(.2,n-_-d),J=[];for(let at=0;at<M;at+=1)for(let dt=0;dt<y;dt+=1){const vt=-c/2+(at+.5)*c/M,Ot=-f/2+(dt+.5)*f/y;p.add("box",a.cardboard,{x:vt,y:d*.6,z:Ot,sx:1.4,sy:d*.5,sz:.3,color:"#59616b"}),p.add("box",R,{x:vt,y:d*.3,z:Ot,sx:1.3,sy:.04,sz:.24}),[-.5,.5].forEach(zt=>p.add("box",a.cardboard,{x:vt+zt,y:d*.85+U/2,z:Ot,sx:.015,sy:U,sz:.015,color:"#3a4047"})),J.push([vt,Ot])}const et=Math.min(7,Math.max(3.5,Math.min(c/M,f/y)*1.25)),B=new On(et,et).rotateX(-Math.PI/2),k=new Rl(B,D,J.length),st=new ue;J.forEach(([at,dt],vt)=>k.setMatrixAt(vt,st.makeTranslation(at,-_+.015,dt))),k.instanceMatrix.needsUpdate=!0,k.computeBoundingSphere(),k.userData.noPick=!0,k.userData.keep=!0,k.renderOrder=1,s.add(k),e.light={diffuser:R,pool:D,level:.85,target:.85,flicker:!1},e.top=d+.1,e.front=0;break}case"custom":(t.parts||[]).forEach(_=>{const M=this.paint(_.color||de.bodyDark,.5,.25);let y;_.shape==="box"?y=new Pe(_.w,_.h,_.d):_.shape==="sphere"?y=new mi(_.r,20,14):_.shape==="cone"?y=new _a(_.r,_.h,20):y=new sn(_.r,_.r,_.h,20);const R=U=>(U||0)*Math.PI/180,D=_.rot||[0,0,0];x(y,M,_.x||0,_.y||0,_.z||0,s,R(D[0]),R(D[1]),R(D[2]))}),e.andonAt=t.machine_id?[c*.4,d,-f*.35]:null;break;default:m(c,d,f,a.body,0,d/2,0),e.andonAt=t.machine_id?[c*.4,d,-f*.35]:null}return p.flush(s),$v(s),s;function K(_,M){const y=p.add;p.add=(R,D,U)=>_.add(R,D,U);try{M()}finally{p.add=y}}}person(t=0){const e=new rn,n=this.m,s=this.paint(de.vest[t%2],.7,0),r=this.paint(de.trousers,.8,0),a=(l,h,u,p,c)=>{const d=new jt(l,h);return d.position.set(u,p,c),d.castShadow=!0,e.add(d),d};[-1,1].forEach(l=>{a(new Pe(.15,.82,.18),r,l*.1,.43,0),a(new Pe(.16,.08,.26),n.dark,l*.1,.04,.03)}),a(new Pe(.44,.6,.25),s,0,1.13,0),[.98,1.22].forEach(l=>a(new Pe(.45,.04,.26),this.paint("#d6dce2",.3,.4),0,l,0));const o=[-1,1].map(l=>{const h=new rn;h.position.set(l*.29,1.4,0);const u=new jt(new Pe(.12,.58,.14),r);u.position.y=-.29,u.castShadow=!0,h.add(u);const p=new jt(new Pe(.1,.1,.1),this.paint(de.skin,.8,0));return p.position.y=-.62,h.add(p),e.add(h),h});return a(new mi(.115,16,12),this.paint(de.skin,.8,0),0,1.6,0),a(new mi(.135,16,10,0,Math.PI*2,0,Math.PI/2),this.paint(de.helmet[t%3],.35,.05),0,1.64,0),e.userData.arms=o,e}}function $v(i){const t=new Map;i.children.forEach(e=>{if(!e.isMesh||e.isInstancedMesh||e.userData.keep||Array.isArray(e.material)||!e.geometry.index)return;const n=t.get(e.material)||[];n.push(e),t.set(e.material,n)}),t.forEach((e,n)=>{if(e.length<2)return;const s=e.map(h=>{h.updateMatrix();const u=h.geometry.clone().applyMatrix4(h.matrix);return u.index?u:null}),r=h=>Object.keys(h.attributes).sort().join(","),a=r(s[0]);if(s.some(h=>!h||r(h)!==a)){s.forEach(h=>h&&h.dispose());return}const o=Vv(s,!1);if(s.forEach(h=>h.dispose()),!o)return;e.forEach(h=>{i.remove(h),h.geometry.dispose()});const l=new jt(o,n);l.castShadow=!n.transparent,l.receiveShadow=!0,i.add(l)})}const Fi={busy:"#22c55e",blocked:"#f59e0b",starved:"#94a3b8",down:"#ef4444"},ta="#2563eb",tr="#94a3b8",Qc="#dde3e9",th=["#1c3b27","#4a3a10","#4a1818"],Yv=1,eh=new Set(["wall","label","fence","crane"]),qv=5,lu={names:!0,status:!0,params:!1,paramNames:[],media:!0,zones:!0,flows:!0,lights:!0},Kv=i=>(Number(i)||0)*Math.PI/180;function Zv(i,t){if(!i)return{level:.85,flicker:!1};if(t===0)return{level:1,flicker:!1};if(t===2)return{level:.55,flicker:!0};const e={};return new Zt(i).getHSL(e),{level:e.s<.15?0:.45,flicker:!1}}function Ss(i){const t=Number(i);if(i===""||i===null||i===void 0||!Number.isFinite(t))return String(i??"");const e=Math.abs(t);return t.toLocaleString(void 0,{maximumFractionDigits:e>=100?0:e>=10?1:2})}function jv(i,t){const e=Number(i);if(e===1)return 0;if(e===3)return 2;if(e===2||e===4)return 1;if(!t)return-1;const n={};return new Zt(t).getHSL(n),n.s<.15?-1:n.h<.05||n.h>.92?2:n.h>.2&&n.h<.47?0:1}function cl(i,t,e){const n=new eu;return n.moveTo(-i+e,-t),n.lineTo(i-e,-t),n.quadraticCurveTo(i,-t,i,-t+e),n.lineTo(i,t-e),n.quadraticCurveTo(i,t,i-e,t),n.lineTo(-i+e,t),n.quadraticCurveTo(-i,t,-i,t-e),n.lineTo(-i,-t+e),n.quadraticCurveTo(-i,-t,-i+e,-t),n}function po(i,t,e,n){const s=cl(i,t,n),r=cl(i-e,t-e,Math.max(.05,n-e));return s.holes.push(new rl(r.getPoints(8).reverse())),s}function Jv(){const i=document.createElement("canvas");i.width=128,i.height=64;const t=i.getContext("2d");t.clearRect(0,0,128,64),t.fillStyle="rgba(255,255,255,0.35)",t.fillRect(0,26,128,12),t.fillStyle="#ffffff",t.beginPath(),t.moveTo(48,6),t.lineTo(80,32),t.lineTo(48,58),t.lineTo(36,58),t.lineTo(66,32),t.lineTo(36,6),t.closePath(),t.fill();const e=new $i(i);return e.wrapS=Mi,e.colorSpace=Ke,e}function nh(i){const t=[0];for(let e=1;e<i.length;e+=1)t.push(t[e-1]+i[e].distanceTo(i[e-1]));return{points:i,cum:t,total:t[t.length-1]||0}}function mo(i,t,e){const{points:n,cum:s,total:r}=i;if(n.length===1||r===0)return{pos:e.copy(n[0]),dir:new F(1,0,0)};const a=Math.min(Math.max(0,t),r);let o=1;for(;o<s.length-1&&s[o]<a;)o+=1;const l=s[o]-s[o-1]||1,h=(a-s[o-1])/l;return e.lerpVectors(n[o-1],n[o],h),{pos:e,dir:n[o].clone().sub(n[o-1])}}class Qv{constructor(t,{onSelect:e}={}){this.container=t,this.onSelect=e,this.items=new Map,this.flowLines=[],this.particles=[],this.layers={...lu},this.mode="live",this.simRunning=!1,this.anyWorking=!1,this.selectedId=null,this.numbers=new Map,this.clock=new pv,this.tween=null,this.renderer=new R_({antialias:!0,alpha:!1,preserveDrawingBuffer:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=_h,this.renderer.toneMapping=xh,this.renderer.toneMappingExposure=1.05,this.renderer.domElement.style.display="block",this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.cursor="grab",t.appendChild(this.renderer.domElement),this.scene=new qh,this.scene.background=new Zt(Qc),this.scene.fog=new Tl(Qc,120,500),this.setupEnvironment(),this.camera=new yn(42,1,.3,3e3),this.controls=new vv(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.maxPolarAngle=Math.PI*.49,this.controls.minDistance=3,this.controls.addEventListener("start",()=>{this.tween=null}),this.hemi=new cv("#ffffff","#7d7a74",.8),this.scene.add(this.hemi),this.sun=new fv("#fff6e8",2.7),this.sun.castShadow=!0,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.03,this.scene.add(this.sun),this.scene.add(this.sun.target),this.root=new rn,this.scene.add(this.root),this.particleGroup=new rn,this.scene.add(this.particleGroup),this.chevron=Jv(),this.raycaster=new mv,this.pointer=new xt,this.downAt=null,this.hoverAt=0,this.handlePointerDown=n=>{this.downAt=[n.clientX,n.clientY],this.renderer.domElement.style.cursor="grabbing"},this.handlePointerUp=n=>{this.renderer.domElement.style.cursor="grab",this.pick(n)},this.handlePointerMove=n=>this.hover(n),this.renderer.domElement.addEventListener("pointerdown",this.handlePointerDown),this.renderer.domElement.addEventListener("pointerup",this.handlePointerUp),this.renderer.domElement.addEventListener("pointermove",this.handlePointerMove),this.handleContextLost=n=>n.preventDefault(),this.handleContextRestored=()=>{this.setupEnvironment(),this.sceneData&&this.setScene(this.sceneData,this.lastSettings||{})},this.renderer.domElement.addEventListener("webglcontextlost",this.handleContextLost),this.renderer.domElement.addEventListener("webglcontextrestored",this.handleContextRestored),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),this.resize(),this.animate=this.animate.bind(this),this.frame=requestAnimationFrame(this.animate)}setupEnvironment(){const t=new il(this.renderer);this.envTexture&&this.envTexture.dispose(),this.envTexture=t.fromScene(new Lv,.04).texture,t.dispose(),this.scene.environment=this.envTexture,this.scene.environmentIntensity=.45}resize(){const t=Math.max(1,this.container.clientWidth),e=Math.max(1,this.container.clientHeight);this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.viewHeight=e,this.items.forEach(n=>n.label&&this.scaleLabel(n.label))}scaleLabel(t){const e=2*Math.tan(zn.degToRad(this.camera.fov)/2)/Math.max(1,this.viewHeight||1),[n,s]=t.userData.px;t.scale.set(n*e,s*e,1)}raycast(t){const e=this.renderer.domElement.getBoundingClientRect();this.pointer.x=(t.clientX-e.left)/e.width*2-1,this.pointer.y=-((t.clientY-e.top)/e.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera);const n=[];this.items.forEach(r=>r.pickables.forEach(a=>n.push(a)));const s=this.raycaster.intersectObjects(n,!1)[0];return s?s.object.userData.elementId:null}pick(t){if(!this.downAt||Math.hypot(t.clientX-this.downAt[0],t.clientY-this.downAt[1])>5)return;const e=this.raycast(t);this.select(e),this.onSelect&&this.onSelect(e)}hover(t){if(t.buttons)return;const e=performance.now();e-this.hoverAt<90||(this.hoverAt=e,this.renderer.domElement.style.cursor=this.raycast(t)?"pointer":"grab")}select(t){this.selectedId=t,this.items.forEach((e,n)=>{e.selected=n===t})}clear(){(e=>{e.traverse(n=>{var s;n.geometry&&!((s=this.sharedGeometries)!=null&&s.has(n.geometry))&&n.geometry.dispose(),n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(a=>{a.map&&a.map!==this.chevron&&a.map.dispose(),a.dispose()})})})(this.root),this.root.clear(),this.kit&&(this.kit.unitBox.dispose(),this.kit.unitCylX.dispose(),this.kit=null),this.particles.forEach(e=>this.particleGroup.remove(e.mesh)),this.particles=[],this.particleGeometry&&this.particleGeometry.dispose(),this.particleMaterial&&this.particleMaterial.dispose(),this.particleGeometry=null,this.items.clear(),this.flowLines=[],this.hall=null}setScene(t,e={}){this.clear(),this.kit=new Xv,this.sharedGeometries=new Set([this.kit.unitBox,this.kit.unitCylX]),this.sceneData=t||{},this.lastSettings=e;const n=this.sceneData.floor||{w:60,d:40},s=Math.max(n.w,n.d);this.scene.fog.near=s*2.2,this.scene.fog.far=s*7,this.camera.near=Math.max(.1,Math.min(.5,s/200)),this.camera.far=Math.max(400,s*12),this.camera.updateProjectionMatrix(),this.hall=Hv(this.sceneData,{anisotropy:Math.min(8,this.renderer.capabilities.getMaxAnisotropy())}),this.root.add(this.hall.group),this.fitShadows(n),this.setupProduct(),(this.sceneData.elements||[]).forEach(r=>this.buildElement(r)),this.buildFlows(),this.applyLayers(),this.resize(),this.applyCamera(e.camera,n)}fitShadows(t){const e=Math.max(t.w,t.d),n=e>70?4096:2048;this.sun.shadow.mapSize.x!==n&&(this.sun.shadow.mapSize.set(n,n),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null)),this.sun.position.set(-e*.35,e*.8+20,e*.45),this.sun.target.position.set(0,0,0);const s=this.sun.shadow.camera,r=e*.72;s.left=-r,s.right=r,s.top=r,s.bottom=-r,s.near=1,s.far=e*3+80,s.updateProjectionMatrix()}setupProduct(){const t=this.sceneData.product||{},e=t.kind||"box";e==="steel"?this.particleGeometry=new Pe(1.4,.14,.32):e==="part"?this.particleGeometry=new sn(.2,.2,.32,16):e==="pallet"?this.particleGeometry=new Pe(1,.8,.85):this.particleGeometry=new Pe(.55,.38,.45);const n=t.color||(e==="steel"||e==="part"?"#9aa4ad":"#b98a57"),s=e==="steel"||e==="part";this.particleMaterial=new Xe({color:n,roughness:s?.32:.9,metalness:s?.8:0})}fitCamera(t,e=54,n=-12){const s=zn.degToRad(e),r=zn.degToRad(n),a=new F(Math.cos(s)*Math.sin(r),Math.sin(s),Math.cos(s)*Math.cos(r)),o=new F(0,0,e>80?0:t.d*.04),l=[];[-.5,.5].forEach(c=>[-.5,.5].forEach(d=>[0,3].forEach(f=>l.push(new F(c*t.w,f,d*t.d)))));const h=this.camera.clone();let u=Math.max(t.w,t.d)*1.2;for(let c=0;c<8;c+=1){h.position.copy(o).addScaledVector(a,u),h.lookAt(o),h.updateMatrixWorld(!0);let d=0;l.forEach(f=>{const x=f.clone().project(h);d=Math.max(d,Math.abs(x.x),Math.abs(x.y))}),u*=d/.92}const p=o.clone().addScaledVector(a,u);return{position:[p.x,p.y,p.z],target:[o.x,o.y,o.z]}}applyCamera(t,e=(s=>(s=this.sceneData)==null?void 0:s.floor)()||{w:60,d:40},n=!1){const r=Math.max(e.w,e.d),a=t!=null&&t.position&&(t!=null&&t.target)?t:this.fitCamera(e);this.controls.maxDistance=r*3;const o=new F(...a.position),l=new F(...a.target);if(n){this.flyTo(o,l);return}this.tween=null,this.camera.position.copy(o),this.controls.target.copy(l),this.controls.update()}flyTo(t,e,n=.8){this.tween={fromPos:this.camera.position.clone(),fromTarget:this.controls.target.clone(),toPos:t,toTarget:e,t:0,duration:n}}topView(){var e;const t=((e=this.sceneData)==null?void 0:e.floor)||{w:60,d:40};this.applyCamera(this.fitCamera(t,89,0),t,!0)}focus(t){var l;const e=this.items.get(t);if(!e)return;const n=e.el,s=new F(n.x,Math.min(2,(n.h||2)*.4),n.z),r=this.camera.position.clone().sub(this.controls.target).normalize();r.y<.35&&(r.y=.35),r.normalize();const a=((l=this.sceneData)==null?void 0:l.floor)||{w:60,d:40},o=zn.clamp(Math.max(n.w,n.d,n.h)*2.6+7,9,Math.max(a.w,a.d)*.8);this.flyTo(s.clone().addScaledVector(r,o),s)}zoom(t){const e=this.camera.position.clone().sub(this.controls.target),n=zn.clamp(e.length()*t,this.controls.minDistance,this.controls.maxDistance);this.flyTo(this.controls.target.clone().add(e.setLength(n)),this.controls.target.clone(),.35)}getCamera(){const t=e=>Math.round(e*100)/100;return{position:[t(this.camera.position.x),t(this.camera.position.y),t(this.camera.position.z)],target:[t(this.controls.target.x),t(this.controls.target.y),t(this.controls.target.z)]}}buildElement(t){var r,a,o;const e={id:t.id,el:t,pickables:[],animators:[],working:!1,pulse:!1,flash:0,label:null,labelKey:"",statusColor:null,statusShown:!1,selected:!1,mediaMarks:t.machine_id&&((r=this.mediaMarks)==null?void 0:r.get(Number(t.machine_id)))||null},n=new rn;n.position.set(t.x,t.y||0,t.z),n.rotation.y=Kv(t.rot);const s=this.kit.build(t,e,{hallH:((a=this.hall)==null?void 0:a.height)||8});if(n.add(s),e.group=n,t.machine_id&&!e.light&&this.makeAndon(e,n),(t.machine_id||!eh.has(t.kind))&&this.makeRings(e,n),t.operators){e.people=[];const l=t.operators;for(let h=0;h<l;h+=1){const u=this.kit.person(h),p=Math.min(l,Math.max(1,Math.floor(t.w/.9))),c=Math.floor(h/p),d=h%p,f=Math.min(p,l-c*p);u.position.set((d-(f-1)/2)*.9,0,e.front+.55+c*.8),u.rotation.y=Math.PI,n.add(u),e.people.push(u)}}if(e.vehicle&&((o=t.path)==null?void 0:o.length)>=2){const l=t.path.map(([d,f])=>new F(d,0,f)),u=l[0].distanceTo(l[l.length-1])<.5?l:[...l,...l.slice(1,-1).reverse(),l[0]];e.route=nh(u),e.routeS=0,e.speed=t.kind==="agv"?1:1.6;const{pos:p,dir:c}=mo(e.route,0,new F);n.position.set(p.x,t.y||0,p.z),e.yaw=Math.atan2(-c.z,c.x),n.rotation.y=e.yaw}n.traverse(l=>{l.isMesh&&!l.userData.noPick&&(l.userData.elementId=t.id,e.pickables.push(l))}),this.root.add(n),this.items.set(t.id,e),this.nameLabel(e)}makeAndon(t,e){const n=t.el,[s,r,a]=t.andonAt||[n.w*.4,n.h,-n.d*.35],o=new rn;o.position.set(s,r,a);const l=this.kit.paint("#2e3339",.5,.4),h=new jt(new sn(.025,.025,.3,8),l);h.position.y=.15,o.add(h);const u=th.map((d,f)=>{const x=new jt(new sn(.065,.065,.11,16),new Xe({color:d,roughness:.3,metalness:.1,emissive:"#000000"}));return x.position.y=.36+f*.12,o.add(x),x}),p=new jt(new sn(.05,.066,.04,16),l);p.position.y=.36+2*.12+.075,o.add(p);const c=this.kit.glowSprite("#ffffff",1.5);c.userData.noPick=!0,o.add(c),e.add(o),t.andon={segs:u,glow:c,index:-1},t.top=Math.max(t.top||0,r+.72)}makeRings(t,e){const n=t.el;if(n.kind==="forklift"||n.kind==="agv")return;const s=n.w/2+.45,r=n.d/2+.45,a=l=>new Tn({color:l,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-3}),o=(l,h,u)=>{const p=new jt(l,h);return p.rotation.x=-Math.PI/2,p.position.y=u,p.userData.noPick=!0,p.renderOrder=2,e.add(p),p};if(t.light){t.selRing=o(new Ts(po(s,r,.12,.55),6),a(ta),.028-(Number(n.y)||0));return}t.ring=o(new Ts(po(s,r,.2,.4),6),a(tr),.025),t.fill=o(new Ts(cl(s-.2,r-.2,.25),6),a(tr),.018),n.machine_id&&(t.ping=o(new Ll(.85,1,48),a("#ffffff"),.03),t.pingSize=Math.max(s,r)),t.selRing=o(new Ts(po(s+.35,r+.35,.12,.55),6),a(ta),.028)}nameLabel(t){const e=t.el;if(eh.has(e.kind)||!e.machine_id&&!e.name){this.clearLabel(t);return}this.updateLabel(t,{title:e.name||e.id,number:e.machine_id?t.number:null,muted:!e.machine_id})}clearLabel(t){t.label&&(t.group.remove(t.label),t.label.material.map.dispose(),t.label.material.dispose(),t.label=null,t.labelKey="")}shownLabel(t){const e=this.layers,n=e.params&&!t.muted?t.params||[]:[];let s="";return t.muted?s=e.names&&t.status||"":e.status&&!this.compact&&(s=t.status||""),{title:e.names?t.title:"",number:e.names?t.number:null,status:s,color:t.color,muted:t.muted,params:n,paramsLine:this.compact&&n.length>0,media:e.media&&this.mode==="live"&&!t.muted?t.media||[]:[],mediaShare:!this.compact}}updateLabel(t,e){t.labelOpts=e;const n=this.shownLabel({...e,media:t.mediaMarks});if(!n.title&&n.number==null&&!n.status&&!n.params.length&&!n.media.length||e.muted&&!this.layers.names){this.clearLabel(t),t.labelOpts=e;return}const r=JSON.stringify(n);if(r===t.labelKey)return;this.clearLabel(t),t.labelOpts=e,t.labelKey=r;const{texture:a,width:o,height:l}=Dv(n),h=new Al({map:a,transparent:!0,depthWrite:!1,depthTest:!1,sizeAttenuation:!1,toneMapped:!1,fog:!1}),u=new Zh(h);u.center.set(.5,0),u.renderOrder=e.muted?9:10,u.userData={px:[o,l],muted:!!e.muted},u.position.set(0,(t.top||t.el.h||2)+.2,0),this.scaleLabel(u),t.group.add(u),t.label=u}refreshLabels(){this.items.forEach(t=>t.labelOpts&&this.updateLabel(t,t.labelOpts))}setLabelsVisible(t){this.setLayers({names:!!t})}setLayers(t={}){this.layers={...this.layers,...t},this.applyLayers(),this.refreshLabels()}applyLayers(){var e;const t=this.layers;(((e=this.hall)==null?void 0:e.zones)||[]).forEach(n=>n.visible=t.zones),this.flowLines.forEach(n=>n.meshes.forEach(s=>s.visible=t.flows)),t.flows||this.particles.forEach(n=>n.mesh.visible=!1),this.items.forEach(n=>{n.light&&(n.group.visible=t.lights)})}paramsFor(t){const e=this.layers.paramNames||[];return((t==null?void 0:t.substatuses)||[]).filter(n=>n.value!=="-"&&n.value!==void 0&&n.value!==null&&n.value!=="").filter(n=>!e.length||e.includes(n.target)).slice(0,qv).map(n=>({name:n.target,value:`${Ss(n.value)}${n.unit?" "+n.unit:""}`}))}setMediaMarks(t){this.mediaMarks=t||new Map,this.items.forEach(e=>{e.mediaMarks=e.el.machine_id&&this.mediaMarks.get(Number(e.el.machine_id))||null}),this.refreshLabels()}setNumbers(t){this.numbers=t||new Map,this.items.forEach((e,n)=>{e.number=this.numbers.get(n)??null})}declutter(){const t=this.renderer.domElement,e=t.clientWidth,n=t.clientHeight;if(!e||!n)return;const s=new F,r=[];this.items.forEach(o=>{if(!o.label||!o.group.visible)return;o.label.getWorldPosition(s);const l=s.distanceTo(this.camera.position);s.project(this.camera);const[h,u]=o.label.userData.px;r.push({sprite:o.label,prio:o.label.userData.muted?1:o.selected?-1:0,dist:l,x:(s.x+1)/2*e,y:(1-s.y)/2*n,w:h,h:u,behind:s.z>1})}),r.sort((o,l)=>o.prio-l.prio||o.dist-l.dist);const a=[];r.forEach(o=>{const l=o.prio===1?2:5;let h=0,u=null;for(;h<=l;h+=1){const c=o.y-h*o.h*.92;if(u={l:o.x-o.w/2,r:o.x+o.w/2,t:c-o.h,b:c},!a.some(d=>u.l<d.r&&u.r>d.l&&u.t<d.b&&u.b>d.t))break}const p=h<=l;o.sprite.center.y=-Math.min(h,l)*.92,o.sprite.visible=!o.behind&&!(this.compact&&o.prio===1)&&(p||o.prio<=0),p&&!o.behind&&a.push(u)})}buildFlows(){const t=new Map((this.sceneData.elements||[]).map(e=>[e.id,e]));(this.sceneData.flows||[]).forEach(e=>{var h;const n=t.get(e.from),s=t.get(e.to);if(!n||!s)return;const r=[[n.x,n.z]];(h=e.via)!=null&&h.length?r.push(...e.via):Math.abs(s.x-n.x)>.5&&Math.abs(s.z-n.z)>.5&&r.push([s.x,n.z]),r.push([s.x,s.z]);const a=nh(r.map(([u,p])=>new F(u,Yv,p))),o=[],l=[];for(let u=1;u<a.points.length;u+=1){const p=a.points[u-1],c=a.points[u],d=p.distanceTo(c);if(d<.2)continue;const f=this.chevron.clone();f.needsUpdate=!0,f.repeat.set(d/1.4,1);const x=new Tn({map:f,color:ta,transparent:!0,opacity:.4,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-4}),m=new jt(new On(d,.42),x);m.rotation.order="YXZ",m.rotation.set(-Math.PI/2,Math.atan2(-(c.z-p.z),c.x-p.x),0),m.position.set((p.x+c.x)/2,.022,(p.z+c.z)/2),m.renderOrder=3,this.root.add(m),o.push(x),l.push(m)}this.flowLines.push({flow:e,route:a,materials:o,meshes:l,nextEmit:0})}),this.applyFlowStyle()}applyFlowStyle(){const t=this.mode==="sim"?.75:.42;this.flowLines.forEach(e=>e.materials.forEach(n=>n.opacity=t))}paintStatus(t,e,n,{pulse:s=!1}={}){if(t.statusColor=e,t.statusShown=!!e,t.pulse=s,t.light){const{level:r,flicker:a}=Zv(e,n);t.light.target=r,t.light.flicker=a}if(t.ring&&(t.ring.material.color.set(e||tr),t.fill.material.color.set(e||tr),t.ring.material.opacity=e?.92:0,t.fill.material.opacity=e?.16:0),t.andon){t.andon.index=e?n:-1,t.andon.segs.forEach((a,o)=>{const l=e&&o===n;a.material.color.set(l?e:th[o]),a.material.emissive.set(l?e:"#000000"),a.material.emissiveIntensity=l?2.2:0});const r=t.andon.glow;e&&n>=0?(r.position.y=t.andon.segs[n].position.y,r.material.color.set(e),r.material.opacity=.9):r.material.opacity=0}}setMode(t){this.mode=t,this.particles.forEach(e=>e.mesh.visible=!1),this.flowLines.forEach(e=>e.nextEmit=0),this.items.forEach(e=>{e.working=!1,e.flash=0}),this.applyFlowStyle()}setSimRunning(t){this.simRunning=t}signal(t,e,n){const s=/count|licznik|szt|pieces|produced/i.test(String(e||""));this.items.forEach(r=>{if(Number(r.el.machine_id)===Number(t)&&(r.flash=1,s)){const a=Number(n);Number.isFinite(a)&&Number.isFinite(r.lastCount)&&a>r.lastCount&&this.mode==="live"&&this.flowLines.filter(o=>o.flow.from===r.id).forEach(o=>this.spawnParticle(o.flow.from,o.flow.to)),Number.isFinite(a)&&(r.lastCount=a)}})}applyLive(t){this.mode="live";let e=!1;this.items.forEach(n=>{const s=n.el;if(!s.machine_id){n.statusShown&&this.paintStatus(n,null,-1),n.working=!1,this.nameLabel(n);return}const r=t[s.machine_id];n.working=Number(r==null?void 0:r.typeEvent)===1,e=e||n.working;const a=this.paramsFor(r);if(r&&r.color){this.paintStatus(n,r.color,jv(r.typeEvent,r.color),{pulse:Number(r.typeEvent)===3});const o=this.layers.params?[]:a.slice(0,1).map(l=>l.value);this.updateLabel(n,{title:s.name||s.id,number:n.number,status:[r.nameStatus||"",...o].filter(Boolean).join(" · "),color:r.color,params:a})}else this.paintStatus(n,null,-1),this.updateLabel(n,{title:s.name||s.id,number:n.number,color:null,params:a})}),this.anyWorking=e}applySimulation(t,e=[],n={}){this.mode="sim";const s=new Map(t.stations.map(a=>[a.id,a])),r={busy:0,blocked:1,starved:-1,down:2};this.items.forEach(a=>{const o=s.get(a.id);if(!o){a.working=!1,a.el.machine_id&&this.paintStatus(a,null,-1),this.nameLabel(a);return}const l=!a.el.machine_id&&o.role!=="station";if(o.role!=="station"){a.working=!1,this.paintStatus(a,null,-1),this.updateLabel(a,{title:o.name||a.el.name||a.el.id,number:a.number,status:`${o.done} ${n.pcs||"szt."}`,color:"#64748b",muted:l});return}const h=Fi[o.state]||tr,u=t.bottleneck===a.id;a.working=o.state==="busy",this.paintStatus(a,h,r[o.state]??-1,{pulse:u||o.state==="down"});let p=`${n.busy||"praca"} ${Math.round(o.busy*100)}% · ${n.queue||"kolejka"} ${o.queue}/${o.queueCap}`;u&&(p=`${n.bottleneck||"wąskie gardło"} · ${p}`),this.updateLabel(a,{title:o.name||a.el.name||a.el.id,number:a.number,status:p,color:u?Fi.down:h})}),e.forEach(a=>this.spawnParticle(a.from,a.to))}spawnParticle(t,e){if(!this.layers.flows)return;const n=this.flowLines.find(r=>r.flow.from===t&&r.flow.to===e);if(!n||!this.particleGeometry||this.particles.filter(r=>r.mesh.visible).length>260)return;let s=this.particles.find(r=>!r.mesh.visible);if(!s){const r=new jt(this.particleGeometry,this.particleMaterial);r.castShadow=!0,this.particleGroup.add(r),s={mesh:r},this.particles.push(s)}s.route=n.route,s.s=0,s.speed=zn.clamp(n.route.total/2.6,1.6,6),s.mesh.visible=!0}animate(){var o;this.frame=requestAnimationFrame(this.animate);const t=Math.min(.1,this.clock.getDelta()),e=this.clock.elapsedTime;if(this.tween){const l=this.tween;l.t=Math.min(1,l.t+t/l.duration);const h=l.t<.5?2*l.t*l.t:1-Math.pow(-2*l.t+2,2)/2;this.camera.position.lerpVectors(l.fromPos,l.toPos,h),this.controls.target.lerpVectors(l.fromTarget,l.toTarget,h),l.t>=1&&(this.tween=null)}this.controls.update();const n=(o=this.sceneData)==null?void 0:o.floor;if(n&&!this.tween){const l=this.controls.target,h=zn.clamp(l.x,-n.w/2,n.w/2),u=zn.clamp(l.z,-n.d/2,n.d/2),p=zn.clamp(l.y,0,12);if(h!==l.x||p!==l.y||u!==l.z){const c=new F(h-l.x,p-l.y,u-l.z);l.add(c),this.camera.position.add(c)}}this.hall&&this.hall.walls.forEach(l=>{l.upper.visible=this.camera.position.clone().sub(l.center).dot(l.normal)<0});const s=this.mode==="live"?this.anyWorking:this.simRunning,r=new F;this.items.forEach(l=>{const h=l.el,u=h.x*.7+h.z*.3,p=l.vehicle||l.crane?s:l.working;if(l.animators.forEach(c=>c(e,t,p,u)),l.light){const c=l.light;c.level+=(c.target-c.level)*Math.min(1,t*3);const d=c.flicker&&Math.sin(e*23+u*3)>.55?c.level*.25:c.level;c.diffuser.emissiveIntensity=.05+d*1.8,c.pool.opacity=d*.26}if(l.ring&&l.statusShown){const c=l.pulse?.5+.5*Math.abs(Math.sin(e*3.5)):1;l.ring.material.opacity=.35+.57*c,l.fill.material.opacity=l.pulse?.08+.18*c:.16}if(l.andon&&l.andon.index>=0&&(l.andon.glow.material.opacity=l.pulse?Math.sin(e*7)>0?.95:.12:.85),l.selRing&&(l.selRing.material.opacity=l.selected?.7+.25*Math.sin(e*3):0),l.ping)if(l.flash>0){l.flash=Math.max(0,l.flash-t*1.1);const c=.6+(1-l.flash)*(l.pingSize+1.5);l.ping.scale.set(c,c,1),l.ping.material.color.set(l.statusColor||ta),l.ping.material.opacity=l.flash*.75}else l.ping.material.opacity=0;if(l.people&&l.people.forEach((c,d)=>{const[f,x]=c.userData.arms,m=l.working?Math.sin(e*2.6+d+u)*.45:0;f.rotation.x=-.25+m,x.rotation.x=-.25-m}),l.route&&s){l.routeS=(l.routeS+t*l.speed)%l.route.total;const{pos:c,dir:d}=mo(l.route,l.routeS,r);l.group.position.x=c.x,l.group.position.z=c.z;let x=Math.atan2(-d.z,d.x)-l.yaw;for(;x>Math.PI;)x-=Math.PI*2;for(;x<-Math.PI;)x+=Math.PI*2;l.yaw+=x*Math.min(1,t*3),l.group.rotation.y=l.yaw}}),this.mode==="live"&&this.flowLines.forEach(l=>{var d,f;const h=this.items.get(l.flow.from),u=this.items.get(l.flow.to);if(!(h&&h.working||h&&!h.el.machine_id&&u&&u.working)||e<(l.nextEmit||0))return;this.spawnParticle(l.flow.from,l.flow.to);const c=Number((f=(d=h==null?void 0:h.el)==null?void 0:d.sim)==null?void 0:f.cycle_s)||60;l.nextEmit=e+Math.min(7,Math.max(2,c/22))*(.75+Math.random()*.5)});const a=this.mode==="sim"&&!this.simRunning?0:.5;if(this.flowLines.forEach(l=>l.materials.forEach(h=>h.map.offset.x-=t*a)),e-(this.declutterAt||0)>.2){this.declutterAt=e;const l=this.camera.position.distanceTo(this.controls.target)>45;l!==this.compact&&(this.compact=l,this.refreshLabels()),this.declutter()}this.particles.forEach(l=>{if(!l.mesh.visible)return;if(l.s+=t*l.speed,l.s>=l.route.total){l.mesh.visible=!1;return}const{pos:h,dir:u}=mo(l.route,l.s,r);l.mesh.position.copy(h),l.mesh.rotation.y=Math.atan2(-u.z,u.x)}),this.renderer.render(this.scene,this.camera)}dispose(){cancelAnimationFrame(this.frame),this.resizeObserver.disconnect();const t=this.renderer.domElement;t.removeEventListener("pointerdown",this.handlePointerDown),t.removeEventListener("pointerup",this.handlePointerUp),t.removeEventListener("pointermove",this.handlePointerMove),t.removeEventListener("webglcontextlost",this.handleContextLost),t.removeEventListener("webglcontextrestored",this.handleContextRestored),this.clear(),this.chevron.dispose(),this.envTexture&&this.envTexture.dispose(),this.controls.dispose(),this.renderer.dispose(),t.parentNode&&t.parentNode.removeChild(t)}}const tx=5,ex=30,nx=.5;function ix(i){let t=i>>>0;return function(){t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}function bn(i,t){const e=Number(i);return Number.isFinite(e)?e:t}function sx(i){return i==="conveyor"||i==="oven"}function rx(i){const t=Array.isArray(i==null?void 0:i.elements)?i.elements:[],e=Array.isArray(i==null?void 0:i.flows)?i.flows:[],n=new Map(t.map(p=>[p.id,p])),s=new Map(t.map(p=>[p.id,0])),r=new Map;e.forEach(p=>{!n.has(p.from)||!n.has(p.to)||(s.set(p.to,s.get(p.to)+1),r.has(p.from)||r.set(p.from,[]),r.get(p.from).push(p.to))});const a=(p,c)=>n.get(p).x-n.get(c).x||n.get(p).z-n.get(c).z,o=new Set(e.flatMap(p=>[p.from,p.to]));let l=t.filter(p=>o.has(p.id)&&s.get(p.id)===0).map(p=>p.id).sort(a);const h=new Set,u=[];for(;l.length;){const p=[];l.forEach(c=>{h.has(c)||(h.add(c),u.push(c),(r.get(c)||[]).forEach(d=>{s.set(d,s.get(d)-1),s.get(d)===0&&p.push(d)}))}),l=p.sort(a)}return t.filter(p=>!h.has(p.id)).map(p=>p.id).sort(a).forEach(p=>u.push(p)),u.filter(p=>n.get(p).machine_id)}function ih(i){var o,l;const t=Array.isArray(i==null?void 0:i.elements)?i.elements:[],e=Array.isArray(i==null?void 0:i.flows)?i.flows:[],n=new Set(t.map(h=>h.id)),s={},r={};e.forEach(h=>{n.has(h.from)&&n.has(h.to)&&(r[h.from]=(r[h.from]||0)+1,s[h.to]=(s[h.to]||0)+1)});const a={};return t.forEach(h=>{const u=h.sim||{};if(!(s[h.id]||r[h.id])&&!u.role)return;const c=u.role||(s[h.id]?r[h.id]?"station":"sink":"source"),d=sx(h.kind);let f=bn(u.cycle_s,null);f==null&&(f=c!=="station"?0:d?Math.max(1,bn(h.w,2)/nx):ex),a[h.id]={id:h.id,name:h.name||h.id,kind:h.kind,machine_id:h.machine_id||null,role:c,cycle_s:f,capacity:Math.max(1,Math.round(bn(u.capacity,d&&c==="station"?Math.max(1,Math.round(bn(h.w,1))):1))),mtbf_s:Math.max(0,bn(u.mtbf_s,0)),stop_s:Math.max(0,bn(u.stop_s,0)),arrival_s:u.arrival_s!=null?bn(u.arrival_s,null):null}}),{stations:a,flows:e.filter(h=>a[h.from]&&a[h.to]).map(h=>({from:h.from,to:h.to,buffer:Math.max(0,Math.round(bn(h.buffer,tx)))})),arrival_s:((o=i==null?void 0:i.simulation)==null?void 0:o.arrival_s)!=null?bn(i.simulation.arrival_s,null):null,horizon_h:bn((l=i==null?void 0:i.simulation)==null?void 0:l.horizon_h,8),seed:1}}class ax{constructor(t){this.params=t,this.reset()}reset(){const t=this.params;this.rand=ix(bn(t.seed,1)*2654435761),this.time=0,this.transfers=[],this.queues=t.flows.map(e=>({...e,count:0,area:0,max:0})),this.stations={},Object.values(t.stations).forEach(e=>{const n=this.queues.filter(o=>o.to===e.id),s=this.queues.filter(o=>o.from===e.id),r=e.role||(n.length===0?"source":s.length===0?"sink":"station"),a=r==="source"?bn(e.arrival_s??t.arrival_s,0):0;this.stations[e.id]={...e,role:r,inputs:n,outputs:s,slots:Array.from({length:Math.max(1,e.capacity)},()=>({state:"idle",remaining:0})),arrival:a,nextArrival:a,waiting:0,down:0,untilStop:this.sampleUptime(e),rr:0,done:0,time:{busy:0,blocked:0,starved:0,down:0}}}),this.order=this.topologicalOrder()}sampleUptime(t){return t.mtbf_s>0?-Math.log(1-this.rand())*t.mtbf_s:1/0}sampleStop(t){return t.stop_s>0?Math.max(1,-Math.log(1-this.rand())*t.stop_s):0}topologicalOrder(){const t=Object.keys(this.stations),e=Object.fromEntries(t.map(r=>[r,0]));this.queues.forEach(r=>{e[r.to]+=1});const n=t.filter(r=>e[r]===0),s=[];for(;n.length;){const r=n.shift();s.push(r),this.stations[r].outputs.forEach(a=>{e[a.to]-=1,e[a.to]===0&&n.push(a.to)})}return t.forEach(r=>{s.includes(r)||s.push(r)}),s.reverse()}pushOut(t){if(t.role==="sink"||t.outputs.length===0)return t.done+=1,!0;let e=null;return t.outputs.forEach(n=>{n.count<n.buffer&&(!e||n.count<e.count)&&(e=n)}),e?(e.count+=1,e.max=Math.max(e.max,e.count),t.done+=1,this.transfers.length<400&&this.transfers.push({from:e.from,to:e.to,t:this.time}),!0):!1}pullIn(t){if(t.role==="source")return t.arrival<=0?!0:t.waiting>0?(t.waiting-=1,!0):!1;const e=t.inputs.length;for(let n=0;n<e;n+=1){const s=t.inputs[(t.rr+n)%e];if(s.count>0)return s.count-=1,t.rr=(t.rr+n+1)%e,!0}return!1}step(t){this.transfers=[];const e=this.order;for(const n of e){const s=this.stations[n];if(s.role==="source"&&s.arrival>0)for(s.nextArrival-=t;s.nextArrival<=0;)s.waiting+=1,s.nextArrival+=s.arrival;if(s.down>0){s.down-=t,s.time.down+=t;continue}let r=!1,a=!1,o=!1;s.slots.forEach(l=>{l.state==="busy"&&(l.remaining-=t,l.remaining<=1e-9&&(l.state="blocked")),l.state==="blocked"&&this.pushOut(s)&&(l.state="idle"),l.state==="idle"&&this.pullIn(s)&&(s.cycle_s>0?(l.state="busy",l.remaining=s.cycle_s):l.state=this.pushOut(s)?"idle":"blocked"),l.state==="busy"?r=!0:l.state==="blocked"?a=!0:o=!0}),r?(s.time.busy+=t,s.untilStop-=t,s.untilStop<=0&&(s.down=this.sampleStop(s),s.untilStop=this.sampleUptime(s))):a?s.time.blocked+=t:o&&(s.time.starved+=t)}this.queues.forEach(n=>{n.area+=n.count*t}),this.time+=t}runFor(t,e=1){const n=Math.ceil(t/e);for(let s=0;s<n;s+=1)this.step(e);this.transfers=[]}stationState(t){const e=this.stations[t];return e?e.down>0?"down":e.slots.some(n=>n.state==="busy")?"busy":e.slots.some(n=>n.state==="blocked")?"blocked":"starved":null}stats(){const t=Math.max(this.time,1e-9),e=Object.values(this.stations).map(o=>({id:o.id,name:o.name,role:o.role,state:this.stationState(o.id),busy:o.time.busy/t,blocked:o.time.blocked/t,starved:o.time.starved/t,down:o.time.down/t,done:o.done,perHour:o.done/t*3600,queue:o.inputs.reduce((l,h)=>l+h.count,0),queueCap:o.inputs.reduce((l,h)=>l+h.buffer,0)})),n=e.filter(o=>o.role==="station");let s=null;n.forEach(o=>{const l=o.busy+o.down;(!s||l>s.busy+s.down)&&(s=o)});const a=e.filter(o=>o.role==="sink").reduce((o,l)=>o+l.done,0);return{time:this.time,finished:a,throughputPerHour:a/t*3600,wip:this.queues.reduce((o,l)=>o+l.count,0)+Object.values(this.stations).reduce((o,l)=>o+l.slots.filter(h=>h.state!=="idle").length,0),bottleneck:s?s.id:null,stations:e,queues:this.queues.map(o=>({from:o.from,to:o.to,count:o.count,buffer:o.buffer,avg:o.area/t,max:o.max}))}}}const ox={1:"work",2:"unplanned",3:"failure",4:"planned"},lx=/^(kwh|mwh|m3|nm3|szt\.?|\.szt|pcs|sztuk|kvarh)$/i,cx=/całkowit|calkowit|licznik|total|wyprodukowan|produced/i,hx=[[/temperat|temp\b|°c/i,"temperature"],[/wibrac|vibrat/i,"vibration"],[/ciśnien|cisnien|pressure|bar\b/i,"pressure"],[/wilgotn|humid/i,"humidity"],[/\bph\b/i,"ph"],[/moc|power|prąd|prad|current|zużycie chwilowe|obciąż/i,"power"]];function sh(i,t){const e=ox[Number(i)];if(e)return e;if(!t)return"unknown";const n=String(t).match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);if(!n)return"unknown";const[s,r,a]=n.slice(1).map(c=>parseInt(c,16)/255),o=Math.max(s,r,a),l=Math.min(s,r,a),h=(o+l)/2;if((o===l?0:h>.5?(o-l)/(2-o-l):(o-l)/(o+l))<.15)return"planned";let p=0;return o===s?p=((r-a)/(o-l)+(r<a?6:0))/6:o===r?p=((a-s)/(o-l)+2)/6:p=((s-r)/(o-l)+4)/6,p<.05||p>.92?"failure":p>.2&&p<.47?"work":"unplanned"}function go(i){const t=Math.max(0,Math.round(Number(i)||0));if(t<60)return`${t} s`;const e=Math.floor(t/60);if(e<60)return`${e} min`;const n=Math.floor(e/60);return n<48?`${n} h ${String(e%60).padStart(2,"0")} min`:`${Math.floor(n/24)} d ${n%24} h`}const _o=i=>`${Math.round((Number(i)||0)*100)}%`,Jn=(i,t=1)=>Number.isFinite(Number(i))?Number(i).toLocaleString(void 0,{maximumFractionDigits:t}):"–";function ux(i){const t=`${i.name} ${i.unit}`,e=hx.find(([n])=>n.test(t));return e?e[1]:"generic"}function rh(i,t){const e=String(t||"").trim();return e==="W"?i/1e3:e==="kW"?i:null}function dx({insights:i,live:t,upstream:e=[],downstream:n=[],t:s,nowS:r=Date.now()/1e3}){const a=[],o=(i==null?void 0:i.days)||7,l=t!=null&&t.color?sh(t.typeEvent,t.color):null,h=(i==null?void 0:i.current)||null,u=l||(h==null?void 0:h.category)||"unknown",p=h&&h.category===u,c=p?Math.max(h.seconds||0,r-(h.since||r)):null,d=c!==null?go(c):s("hologram.reco.unknownDuration"),f=C=>C.find(G=>{var tt;return((tt=G.live)==null?void 0:tt.color)&&!["work","unknown"].includes(sh(G.live.typeEvent,G.live.color))}),x=(i==null?void 0:i.kpi)||{},m=i==null?void 0:i.last_sample_age_s;!(t!=null&&t.color)&&(m==null||m>900)&&a.push({severity:"danger",title:s("hologram.reco.noData.title"),text:m?s("hologram.reco.noData.textAge",{ago:go(m)}):s("hologram.reco.noData.text")});const g=f(e),b=f(n),S=C=>{var G;return{name:[C.number,C.name].filter(Boolean).join(" "),status:((G=C.live)==null?void 0:G.nameStatus)||""}};if(u==="failure"){const C=[s("hologram.reco.failure.text")];x.failures&&C.push(s("hologram.reco.failure.history",{n:x.failures,days:o,mttr:Jn(x.mttr_min,0)})),p&&h.p75_s&&c>h.p75_s&&C.push(s("hologram.reco.failure.long")),b&&C.push(s("hologram.reco.failure.downstream",S(b))),a.push({severity:"danger",title:s("hologram.reco.failure.title",{dur:d}),text:C.join(" ")})}else if(u==="unplanned"){const C=[];g?C.push(s("hologram.reco.unplanned.upstream",S(g))):b?C.push(s("hologram.reco.unplanned.downstream",S(b))):C.push(s("hologram.reco.unplanned.local")),p&&h.typical_s&&c>2*h.typical_s&&C.push(s("hologram.reco.unplanned.longer",{x:Jn(c/h.typical_s,1),typical:go(h.typical_s)})),a.push({severity:"warn",title:s("hologram.reco.unplanned.title",{dur:d}),text:C.join(" ")})}else u==="planned"?a.push({severity:"info",title:s("hologram.reco.planned.title",{dur:d,status:(t==null?void 0:t.nameStatus)||(h==null?void 0:h.name)||""}),text:s("hologram.reco.planned.text")}):u==="work"&&(b&&a.push({severity:"warn",title:s("hologram.reco.blocked.title"),text:s("hologram.reco.blocked.text",S(b))}),g&&a.push({severity:"info",title:s("hologram.reco.starved.title"),text:s("hologram.reco.starved.text",S(g))}));if(x.short_stops>=5&&a.push({severity:"warn",title:s("hologram.reco.shortStops.title",{n:x.short_stops,days:o}),text:s("hologram.reco.shortStops.text")}),x.availability!==null&&x.availability!==void 0&&x.availability<.75){const G=(i.states||[]).filter(tt=>["unplanned","failure"].includes(tt.category)).sort((tt,v)=>v.share-tt.share)[0];a.push({severity:"warn",title:s("hologram.reco.availability.title",{pct:_o(x.availability),days:o}),text:G?s("hologram.reco.availability.text",{state:G.name||s(`hologram.reco.states.${G.category}`),share:_o(G.share)}):s("hologram.reco.availability.textNoLoss")})}x.failures>=2&&x.mtbf_h!==null&&x.mtbf_h<24&&a.push({severity:"warn",title:s("hologram.reco.mtbf.title",{h:Jn(x.mtbf_h,1)}),text:s("hologram.reco.mtbf.text",{mttr:Jn(x.mttr_min,0),n:x.failures,days:o})});const w=((i==null?void 0:i.states)||[]).filter(C=>["planned","unplanned"].includes(C.category)).reduce((C,G)=>C+(G.seconds||0),0);let q=!1;((i==null?void 0:i.measurements)||[]).forEach(C=>{var K;if(C.counter||C.p05===void 0||C.p95===void 0||C.p95<=C.p05)return;const G=Number(C.current),tt=C.p95-C.p05;!(lx.test(String(C.unit||"").trim())||cx.test(C.name||""))&&(G>C.p95+tt*.05||G<C.p05-tt*.05)&&a.push({severity:"warn",title:s("hologram.reco.anomaly.title",{name:C.name,value:`${Jn(G,C.decimals)} ${C.unit}`.trim()}),text:s("hologram.reco.anomaly.text",{days:o,lo:Jn(C.p05,C.decimals),hi:`${Jn(C.p95,C.decimals)} ${C.unit}`.trim(),hint:s(`hologram.reco.hint.${ux(C)}`)})});const T=(K=C.by_category)==null?void 0:K.work,$=["planned","unplanned"].map(_=>{var M;return(M=C.by_category)==null?void 0:M[_]}).filter(_=>Number.isFinite(_)),W=$.length?rh($.reduce((_,M)=>_+M,0)/$.length,C.unit):null,N=Number.isFinite(T)?rh(T,C.unit):null;!q&&W!==null&&N&&W>.15*N&&w>3600&&(q=!0,a.push({severity:"info",title:s("hologram.reco.energy.title",{value:`${Jn(W,2)} kW`}),text:s("hologram.reco.energy.text",{pct:_o(W/N),kwh:Jn(W*w/3600,0),days:o})}))}),!a.some(C=>C.severity==="danger"||C.severity==="warn")&&u==="work"&&a.unshift({severity:"ok",title:s("hologram.reco.ok.title"),text:s("hologram.reco.ok.text",{days:o})});const I={danger:0,warn:1,info:2,ok:3};return a.sort((C,G)=>I[C.severity]-I[G.severity])}function fx(i,t,e){const n=(i==null?void 0:i.flows)||[],s=new Map(((i==null?void 0:i.elements)||[]).map(l=>[l.id,l])),r=[],a=new Set([t]);let o=[t];for(let l=0;l<4&&o.length;l+=1){const h=[];o.forEach(u=>{n.filter(p=>e==="up"?p.to===u:p.from===u).map(p=>e==="up"?p.from:p.to).forEach(p=>{if(a.has(p))return;a.add(p);const c=s.get(p);c&&(c.machine_id?r.push(c):h.push(p))})}),o=h}return r}const px={key:0,class:"flex flex-col gap-3"},mx={key:1,class:"hologram-empty"},gx={class:"hologram-empty__title"},_x={class:"hologram-empty__text"},vx={class:"hologram-empty__steps"},xx=["title"],yx=["title"],Mx={class:"hologram-layout__label"},Sx={class:"hologram-layers"},bx={class:"hologram-layers__title"},Ex=["for"],wx={key:0,class:"hologram-layers__params"},Tx={for:"hologram-layer-param-names"},Ax={class:"hologram-viewport"},Rx={key:0,class:"hologram-kpis"},Cx={class:"hologram-kpi__label"},Px={class:"hologram-kpi__value"},Lx={class:"hologram-kpi__sub"},Dx={class:"hologram-kpi"},Ix={class:"hologram-kpi__label"},Ux={class:"hologram-kpi__value is-good"},Nx={class:"hologram-kpi__sub"},Ox={class:"hologram-kpi"},Fx={class:"hologram-kpi__label"},kx={class:"hologram-kpi__sub"},Bx={class:"hologram-kpi"},zx={class:"hologram-kpi__label"},Hx={class:"hologram-kpi__sub"},Vx={key:1,class:"hologram-kpis"},Gx={class:"hologram-kpi"},Wx={class:"hologram-kpi__label"},Xx={class:"hologram-kpi__value"},$x={class:"hologram-kpi__sub"},Yx={class:"hologram-kpi"},qx={class:"hologram-kpi__label"},Kx={class:"hologram-kpi__value"},Zx={class:"hologram-kpi__sub"},jx={class:"hologram-kpi hologram-kpi--wide"},Jx={class:"hologram-kpi__label"},Qx={class:"hologram-kpi__value is-bad hologram-kpi__text"},ty={class:"hologram-kpi__sub"},ey={class:"hologram-mapctl"},ny=["title","aria-label"],iy=["title","aria-label"],sy=["title","aria-label"],ry=["title","aria-label"],ay={key:2,class:"hologram-simbar"},oy=["title"],ly={class:"hologram-muted"},cy={key:4,class:"hologram-panel"},hy={class:"hologram-panel__head"},uy={key:0,class:"hologram-panel__num"},dy={class:"hologram-facts"},fy={class:"hologram-panel__sub"},py={class:"hologram-signals"},my=["aria-busy"],gy={class:"hologram-panel__sub"},_y={key:0,class:"hologram-reco__kpis"},vy={key:1,class:"flex flex-col gap-2"},xy={class:"hologram-reco__list"},yy={class:"hologram-reco__note"},My={class:"hologram-panel__sub"},Sy={class:"hologram-panel__grid"},by=["for"],Ey=["for"],wy={key:5,class:"hologram-hint"},Ty=["aria-label"],Ay=["onClick"],Ry={class:"hologram-mcard__top"},Cy={class:"hologram-mcard__num"},Py={class:"hologram-mcard__name"},Ly={class:"hologram-mcard__meta"},Dy={class:"hologram-muted"},Iy={key:0,class:"hologram-arrival"},Uy={for:"hologram-arrival"},Ny={class:"hologram-stations"},Oy={class:"hologram-stations__head"},Fy={class:"hologram-muted"},ky={key:0,class:"hologram-stations__grid"},By=["for"],zy=["for"],Hy=["for"],Vy=["for"],Gy={class:"hologram-panel__sub"},ah="omni-hologram-view-v1",oh="#94a3b8",Wy=5*60*1e3,lh=7,Xy={__name:"ComponentHologram",setup(i){const t=[1,10,60,300],n=hh().proxy,s=()=>{var L,z;return(z=(L=n.$store)==null?void 0:L.state)==null?void 0:z.dataEnc},r=(L,z="",pt="get",_t=null)=>n.axios(hl(n.$apiHost,L,z,s(),pt,_t)),a=L=>Array.isArray(L)?L:Array.isArray(L==null?void 0:L.results)?L.results:[],o=(L,z)=>{var pt;return(pt=n.$toast)==null?void 0:pt.add({severity:L,summary:Z(L==="error"?"error":"success"),detail:z,life:L==="error"?5e3:3e3})},l=xu(),h=ae(()=>l.canWrite("hologram"));function u(){try{return JSON.parse(localStorage.getItem(ah)||"{}")||{}}catch{return{}}}function p(L){try{localStorage.setItem(ah,JSON.stringify({...u(),...L}))}catch{}}const c=u(),d=ee(!0),f=ee([]),x=ee([]),m=ee([]),g=ee([]),b=ee(c.id||null),S=ee(null),w=ee(c.mode==="sim"?"sim":"live"),q=c.layers&&typeof c.layers=="object"?c.layers:{},I=ee({...lu,...q,paramNames:Array.isArray(q.paramNames)?q.paramNames:[]}),C=ee(null),G=["names","status","params","media","zones","flows","lights"],v=ee(["side","bottom","none"].includes(c.cards)?c.cards:"side"),T=ee(null),$=ee(null),W=ee(null),N=ee(null);let K=null;function _(){const L=W.value;if(!L||window.innerWidth<=991){N.value=null;return}const z=L.getBoundingClientRect().top+(mn.value?0:window.scrollY);N.value=Math.max(480,Math.floor(window.innerHeight-z-(mn.value?14:32)))}He(T,L=>{var z;K==null||K.disconnect(),L&&(K=new ResizeObserver(()=>_()),K.observe(L),(z=$.value)!=null&&z.$el&&K.observe($.value.$el),Qi(_))}),He($,L=>{L!=null&&L.$el&&(K==null||K.observe(L.$el)),Qi(_)});const M=ee(null),y=ee(null);let R=null;const D=ae(()=>[{value:"side",label:Z("hologram.layout.side"),icon:"pi pi-objects-column"},{value:"bottom",label:Z("hologram.layout.bottom"),icon:"pi pi-table"},{value:"none",label:Z("hologram.layout.none"),icon:"pi pi-eye-slash"}]),U=ae(()=>[{label:Z("hologram.modeLive"),value:"live",icon:"pi pi-wifi"},{label:Z("hologram.modeSim"),value:"sim",icon:"pi pi-sliders-h"}]),J=ae(()=>f.value.map(L=>({value:L.id,label:`${L.name} · v${L.version}`}))),et=ae(()=>{var L;return Kt((L=S.value)==null?void 0:L.scene)}),B=ae(()=>new Map((et.value.elements||[]).map(L=>[L.id,L]))),k=ae(()=>B.value.get(M.value)||null),st=ae(()=>rx(et.value)),at=ae(()=>new Map(st.value.map((L,z)=>[L,z+1])));function dt(L){var z;return((z=x.value.find(pt=>Number(pt.id)===Number(L)))==null?void 0:z.name)||`#${L}`}function vt(L){var z;return((z=m.value.find(pt=>Number(pt.id)===Number(L)))==null?void 0:z.name)||(L?`#${L}`:"")}function Ot(L){return g.value.find(z=>Number(z.id)===Number(L))||null}function zt(L){return Z(`hologram.kinds.${L}`)}function Kt(L){return Array.isArray(L==null?void 0:L.elements)?{...L,elements:L.elements.map(z=>{var _t;const pt=z.machine_id?(_t=Ot(z.machine_id))==null?void 0:_t.name:"";return pt&&pt!==z.name?{...z,name:pt}:z})}:L||{}}function O(L){return Object.values((L==null?void 0:L.stations)||{}).forEach(z=>{const pt=zt(z.kind);z.name===z.id&&!pt.startsWith("hologram.")&&(z.name=`${pt} ${z.id}`)}),L}const ye=L=>String(L).padStart(2,"0"),Yt=ae(()=>{var z;const L=et.value.scope||{type:"park"};if(L.type==="line")return Z("hologram.scope.lines",{list:(L.line_ids||[]).map(vt).join(", ")});if(L.type==="machines"){const pt=L.machine_ids||[];return pt.length===1?((z=Ot(pt[0]))==null?void 0:z.name)||Z("hologram.scope.machines",{n:1}):Z("hologram.scope.machines",{n:pt.length})}return Z("hologram.scope.park",{park:S.value?dt(S.value.server):""})});let Mt=!1;const ft=dd({axios:n.axios,apiHost:n.$apiHost,dataEnc:s,onError:L=>o("error",L),onConnect:()=>o("success",Z("hologram.liveConnected")),onReconnect:()=>{var L;Mt||(Mt=!0,(L=n.$toast)==null||L.add({severity:"warn",summary:Z("hologram.liveReconnect"),life:3e3}))},onSignal:(L,z,pt)=>{w.value==="live"&&(R==null||R.signal(L,z,pt))}}),Wt=ee(Date.now());let Dt=null;const P=ae(()=>{const L=ft.activity.lastAt?Math.max(0,Math.round((Wt.value-ft.activity.lastAt)/1e3)):null;return{connected:ft.connected.value,fresh:L!==null&&L<30,signals:ft.activity.signals,last:L}});let E=null;He(()=>ft.live,()=>{w.value!=="live"||E||(E=requestAnimationFrame(()=>{E=null,R==null||R.applyLive(ft.live)}))},{deep:!0});const j=L=>L!=null&&L.machine_id&&ft.live[String(L.machine_id)]||null,lt=ae(()=>{const L={total:0,working:0,stopped:0,failure:0,noData:0};return(et.value.elements||[]).forEach(z=>{if(!z.machine_id)return;L.total+=1;const pt=j(z),_t=Number(pt==null?void 0:pt.typeEvent);!pt||!pt.color?L.noData+=1:_t===1?L.working+=1:_t===3?L.failure+=1:L.stopped+=1}),L}),ut=ae(()=>j(k.value)),ct=ae(()=>(et.value.elements||[]).some(L=>L.kind==="light")),Nt=ae(()=>G.filter(L=>(L!=="lights"||ct.value)&&(L!=="media"||rt.value||h.value)).map(L=>({key:L,label:Z(`hologram.layers.${L}`),hint:Z(`hologram.layers.${L}Hint`)}))),bt=ae(()=>{const L=new Set;return(et.value.elements||[]).forEach(z=>{var pt;return(((pt=j(z))==null?void 0:pt.substatuses)||[]).forEach(_t=>_t.target&&L.add(_t.target))}),I.value.paramNames.forEach(z=>L.add(z)),[...L].sort((z,pt)=>z.localeCompare(pt)).map(z=>({label:z,value:z}))}),Lt=ae(()=>Nt.value.filter(L=>!I.value[L.key]).length);function oe(L,z){I.value={...I.value,[L]:z},p({layers:I.value,layersTouched:!0})}function mt(L){I.value={...I.value,paramNames:L||[]},p({layers:I.value,layersTouched:!0})}He(I,L=>R==null?void 0:R.setLayers(L),{deep:!0});const Vt=ee([1,7,30].includes(c.mediaDays)?c.mediaDays:7),Xt=ee(!!c.mediaOpen),wt=ee(null),ne=ee(!1),qt=ee(""),fe=ee(!1);let H="",At=null;const rt=ae(()=>{var L,z;return Array.isArray((z=(L=S.value)==null?void 0:L.settings)==null?void 0:z.media)&&S.value.settings.media.length>0}),ht=ae(()=>!!S.value&&w.value==="live"&&!!I.value.media&&(rt.value||h.value));async function yt(){var pt,_t,re;const L=S.value;if(!L||!(rt.value||h.value)){wt.value=null;return}const z=`${L.id}:${Vt.value}:${JSON.stringify(((pt=L.settings)==null?void 0:pt.media)||[])}`;H=z,ne.value=!0;try{const xe=await r(hn.hologram,`/${L.id}/media/?days=${Vt.value}`);H===z&&(wt.value=xe.data,qt.value="")}catch(xe){H===z&&(qt.value=((re=(_t=xe==null?void 0:xe.response)==null?void 0:_t.data)==null?void 0:re.detail)||xe.message)}finally{H===z&&(ne.value=!1)}}function Pt(L){var pt;const z=(et.value.elements||[]).find(_t=>Number(_t.machine_id)===Number(L));return((pt=Ot(L))==null?void 0:pt.name)||(z==null?void 0:z.name)||`#${L}`}function se(L){const z=(et.value.elements||[]).find(pt=>Number(pt.machine_id)===Number(L));z&&ji(z.id)}async function Re(){wt.value||await yt(),fe.value=!0}function $e(L){S.value={...S.value,settings:L.settings},yt()}He(Vt,L=>{p({mediaDays:L}),yt()}),He(Xt,L=>p({mediaOpen:L})),He(ht,(L,z)=>{L&&!z&&!wt.value&&yt(),Qi(_)}),He(wt,L=>R==null?void 0:R.setMediaMarks(Ou((L==null?void 0:L.media)||[])));const le=new Map,Ce=ee(null),on=ee(!1),si=ee("");let Ei=null;async function Fn(L=!1){var xe,ln;const z=k.value,pt=z==null?void 0:z.machine_id;if(w.value!=="live"||!pt||!S.value){Ce.value=null;return}const _t=`${S.value.id}:${pt}`;Ei=_t;const re=le.get(_t);if(re&&!L&&Date.now()-re.at<6e4){Ce.value=re.data,si.value="";return}on.value=!re,re&&(Ce.value=re.data);try{const we=await r(hn.hologram,`/${S.value.id}/insights/?machine=${pt}&days=${lh}`);le.set(_t,{at:Date.now(),data:we.data}),Ei===_t&&(Ce.value=we.data,si.value="")}catch(we){Ei===_t&&(si.value=((ln=(xe=we==null?void 0:we.response)==null?void 0:xe.data)==null?void 0:ln.detail)||we.message)}finally{Ei===_t&&(on.value=!1)}}He([M,w],()=>Fn()),He(()=>{var L,z;return[(L=ut.value)==null?void 0:L.typeEvent,(z=ut.value)==null?void 0:z.nameStatus]},(L,z)=>{z&&(L[0]!==z[0]||L[1]!==z[1])&&Fn(!0)});const Yi=L=>k.value?fx(et.value,k.value.id,L).map(z=>{var pt;return{name:z.name||((pt=Ot(z.machine_id))==null?void 0:pt.name)||z.id,number:at.value.get(z.id)?ye(at.value.get(z.id)):"",live:j(z)}}):[],ks=ae(()=>{var L;return w.value!=="live"||!((L=k.value)!=null&&L.machine_id)?[]:!Ce.value&&!ut.value?[]:dx({insights:Ce.value,live:ut.value,upstream:Yi("up"),downstream:Yi("down"),t:Z,nowS:Wt.value/1e3})}),Bs=ae(()=>{var pt;const L=(pt=Ce.value)==null?void 0:pt.kpi;if(!L)return[];const z=[];return L.availability!==null&&L.availability!==void 0&&z.push({label:Z("hologram.reco.kpiAvailability"),value:`${Math.round(L.availability*100)}%`}),z.push({label:Z("hologram.reco.kpiFailures"),value:String(L.failures||0)}),L.mtbf_h&&z.push({label:"MTBF",value:`${Ss(L.mtbf_h)} h`}),L.mttr_min&&z.push({label:"MTTR",value:`${Ss(L.mttr_min)} min`}),z}),qi={danger:"pi pi-exclamation-circle",warn:"pi pi-exclamation-triangle",info:"pi pi-info-circle",ok:"pi pi-check-circle"};function _r(L){if(!L)return"";const z=String(L).match(/(\d{1,2}:\d{2})(:\d{2})?/);return z?z[1]:String(L)}function Ki(L){const z=((L==null?void 0:L.substatuses)||[]).find(pt=>pt.value!=="-"&&pt.value!==void 0&&pt.value!==null&&pt.value!=="");return z?{value:`${Ss(z.value)}${z.unit?" "+z.unit:""}`,name:z.target}:null}const Le=ee(null),fn=ee(null),je=ee(!1),Zi=ee(c.speed&&t.includes(c.speed)?c.speed:60),ba=t.map(L=>({label:`×${L}`,value:L}));let A=null,X=null,Q=0,nt=0;const Y=ae(()=>(et.value.flows||[]).length>0),gt=ae(()=>Le.value?Object.values(Le.value.stations):[]),Tt=ae(()=>({busy:Z("hologram.sim.busy"),queue:Z("hologram.sim.queue"),pcs:Z("hologram.sim.pcs"),bottleneck:Z("hologram.sim.bottleneck")})),Ut=ae(()=>{var z,pt,_t,re;const L=(z=fn.value)==null?void 0:z.bottleneck;return L?((re=(_t=(pt=Le.value)==null?void 0:pt.stations)==null?void 0:_t[L])==null?void 0:re.name)||L:Z("hologram.sim.none")}),Rt=ae(()=>{var L,z;return k.value&&((z=(L=Le.value)==null?void 0:L.stations)==null?void 0:z[k.value.id])||null});function $t(L){const z=Math.floor(L||0);return`${Math.floor(z/3600)} h ${String(Math.floor(z%3600/60)).padStart(2,"0")} min`}function Gt(L){return`${Math.round((L||0)*100)}%`}function Ct(L){var z;return((z=fn.value)==null?void 0:z.stations.find(pt=>pt.id===L))||null}function ie(){Le.value&&(A=new ax(Le.value),pe())}function pe(){A&&(fn.value=A.stats(),w.value==="sim"&&(R==null||R.applySimulation(fn.value,[],Tt.value)))}function Ee(){Le.value=O(ih(et.value)),je.value=!1,ie()}function Je(){A||ie(),je.value=!je.value,Q=0}function he(){je.value=!1,ie()}function Bt(){je.value=!1,ie(),A.runFor((Le.value.horizon_h||8)*3600,1),pe()}function Ie(L){X=requestAnimationFrame(Ie);const z=Q?Math.min(.25,(L-Q)/1e3):0;if(Q=L,!je.value||!A||w.value!=="sim")return;let pt=z*Zi.value,_t=0;for(;pt>0;){const re=Math.min(1,pt);A.step(re),pt-=re;for(const xe of A.transfers){if(_t>=40)break;R==null||R.spawnParticle(xe.from,xe.to),_t+=1}}nt+=z,nt>=.25&&(nt=0,pe())}function te(){const L=je.value;ie(),je.value=L}He(Zi,L=>p({speed:L})),He(je,L=>R==null?void 0:R.setSimRunning(L));const pn={busy:"busy",blocked:"blocked",starved:"starved",down:"down"},$n=ae(()=>st.value.map(L=>B.value.get(L)).filter(Boolean).map(L=>{var re,xe,ln,we;const z={id:L.id,number:ye(at.value.get(L.id)),name:L.name||((re=Ot(L.machine_id))==null?void 0:re.name)||L.id};if(w.value==="sim"){const Be=Ct(L.id),Vs=(ln=(xe=Le.value)==null?void 0:xe.stations)==null?void 0:ln[L.id],wi=(Be==null?void 0:Be.role)==="station"?pn[Be.state]:null;return z.color=wi?Fi[wi]:oh,z.state=wi?Z(`hologram.sim.${wi}`):Z("hologram.cards.outOfFlow"),z.alert=((we=fn.value)==null?void 0:we.bottleneck)===L.id,z.meta=Vs&&(Be==null?void 0:Be.role)==="station"?Z("hologram.cards.simMeta",{cycle:Ss(Vs.cycle_s),busy:Gt(Be.busy),queue:Be.queue}):"",z}const pt=j(L);z.color=(pt==null?void 0:pt.color)||oh,z.state=(pt==null?void 0:pt.nameStatus)||Z("hologram.noLiveData"),z.alert=Number(pt==null?void 0:pt.typeEvent)===3;const _t=Ki(pt);return z.meta=_t?`${_t.value} · ${_t.name}`:pt!=null&&pt.date?Z("hologram.cards.since",{time:_r(pt.date)}):"",z})),We=L=>({color:L,background:`color-mix(in srgb, ${L} 14%, transparent)`,borderColor:`color-mix(in srgb, ${L} 40%, transparent)`});function ji(L){M.value=L,R==null||R.select(L),R==null||R.focus(L)}function Te(){M.value=null,R==null||R.select(null)}async function kn(){var L;d.value=!0;try{const[z,pt,_t]=await Promise.all([r(hn.hologram,"/?limit=200"),r(hn.listServers,"/"),r(hn.listLines,"/").catch(()=>({data:[]}))]);f.value=a(z.data),x.value=a(pt.data),m.value=a(_t.data),f.value.some(re=>re.id===b.value)||(b.value=((L=f.value[0])==null?void 0:L.id)||null)}catch(z){o("error",z.message)}finally{d.value=!1}}async function Ji(L){if(!L){S.value=null,ft.stop();return}try{const z=await r(hn.hologram,`/${L}/`);await Qe(z.data,!0),p({id:L})}catch(z){o("error",`${Z("hologram.loadError")}: ${z.message}`)}}async function Qe(L,z){var xe,ln,we;const pt=((xe=S.value)==null?void 0:xe.server)!==L.server,_t=((ln=S.value)==null?void 0:ln.id)!==L.id;S.value=L,_t&&(wt.value=null);const re=f.value.findIndex(Be=>Be.id===L.id);re>=0&&f.value.splice(re,1,{...f.value[re],...L}),M.value=null,u().layersTouched||(I.value={...I.value,names:((we=L.settings)==null?void 0:we.labels)!==!1}),(z||pt)&&await zs(L.server),await Qi(),!R&&y.value&&(R=new Qv(y.value,{onSelect:Be=>M.value=Be})),R==null||R.setLayers(I.value),R==null||R.setScene(et.value,L.settings||{}),R==null||R.setNumbers(at.value),Le.value=O(ih(et.value)),je.value=!1,ie(),(z||pt)&&(Mt=!1,ft.start(L.server).catch(Be=>o("error",Be.message))),vr(),yt()}async function zs(L){try{const z=await r(hn.listMachines,"/");g.value=a(z.data).filter(pt=>Number(pt.server)===Number(L))}catch{g.value=[]}}function vr(){R&&(R.setMode(w.value),w.value==="live"?(je.value=!1,R.applyLive(ft.live)):pe())}let Hs=!1;He(b,L=>{Hs&&Ji(L)}),He(w,L=>{p({mode:L}),vr()}),He(v,async L=>{p({cards:L}),await Qi(),_(),requestAnimationFrame(()=>Nl())}),He(M,L=>R==null?void 0:R.select(L));function Nl(){var L,z;R==null||R.applyCamera((z=(L=S.value)==null?void 0:L.settings)==null?void 0:z.camera,et.value.floor,!0)}function cu(){R==null||R.topView()}const hu=()=>R==null?void 0:R.zoom(.7),uu=()=>R==null?void 0:R.zoom(1.4),xr=ee(!1),Ea=ee(!1),wa=ee(!1),du=()=>R==null?void 0:R.getCamera();function Ol(L){Qe(L,!1)}const mn=ee(!1);let Ta=!1;const yr=()=>document.fullscreenElement||document.webkitFullscreenElement||null;function fu(){var pt;if(mn.value){mn.value=!1,yr()&&((pt=document.exitFullscreen||document.webkitExitFullscreen)==null||pt.call(document));return}mn.value=!0;const L=document.documentElement,z=L.requestFullscreen||L.webkitRequestFullscreen;try{const _t=z==null?void 0:z.call(L);_t&&typeof _t.catch=="function"&&_t.catch(()=>{})}catch{}}He(mn,()=>Qi(_));function Mr(){yr()?Ta=!0:Ta&&(Ta=!1,mn.value=!1)}function Fl(L){L.key==="Escape"&&mn.value&&!yr()&&(mn.value=!1)}return yu(async()=>{X=requestAnimationFrame(Ie),Dt=setInterval(()=>Wt.value=Date.now(),1e3),At=setInterval(()=>ht.value&&yt(),Wy),document.addEventListener("fullscreenchange",Mr),document.addEventListener("webkitfullscreenchange",Mr),document.addEventListener("keydown",Fl),window.addEventListener("resize",_),await kn(),Hs=!0,b.value&&await Ji(b.value)}),Mu(()=>{var L;cancelAnimationFrame(X),clearInterval(Dt),clearInterval(At),document.removeEventListener("fullscreenchange",Mr),document.removeEventListener("webkitfullscreenchange",Mr),document.removeEventListener("keydown",Fl),window.removeEventListener("resize",_),K==null||K.disconnect(),mn.value&&yr()&&((L=document.exitFullscreen||document.webkitExitFullscreen)==null||L.call(document)),E&&cancelAnimationFrame(E),ft.stop(),R==null||R.dispose(),R=null}),(L,z)=>{var pt;return Et(),Ft("div",{class:Dn(["hologram-root",{"is-fullscreen":mn.value}])},[Ht(V(Eu),null,{content:be(()=>{var _t,re,xe,ln,we,Be,Vs,wi;return[d.value?(Et(),Ft("div",px,[Ht(V(er),{height:"2.5rem"}),Ht(V(er),{height:"28rem"})])):f.value.length?(Et(),Ft(De,{key:2},[it("div",{ref_key:"toolbarEl",ref:T,class:"hologram-toolbar"},[Ht(V(uh),{modelValue:b.value,"onUpdate:modelValue":z[0]||(z[0]=kt=>b.value=kt),options:J.value,optionLabel:"label",optionValue:"value",placeholder:V(Z)("hologram.select"),size:"small",class:"hologram-select"},null,8,["modelValue","options","placeholder"]),Ht(V(ea),{modelValue:w.value,"onUpdate:modelValue":z[1]||(z[1]=kt=>w.value=kt),options:U.value,optionLabel:"label",optionValue:"value",allowEmpty:!1,size:"small"},null,8,["modelValue","options"]),S.value?(Et(),Ft("span",{key:0,class:"hologram-scope",title:V(Z)("hologram.extendHint")},[z[19]||(z[19]=it("i",{class:"pi pi-th-large","aria-hidden":"true"},null,-1)),Me(ot(Yt.value),1)],8,xx)):ce("",!0),z[20]||(z[20]=it("span",{class:"hologram-toolbar__spacer"},null,-1)),Ht(V(ea),{modelValue:v.value,"onUpdate:modelValue":z[2]||(z[2]=kt=>v.value=kt),options:D.value,optionLabel:"label",optionValue:"value",allowEmpty:!1,size:"small",title:V(Z)("hologram.layout.title"),"aria-label":V(Z)("hologram.layout.title")},{option:be(({option:kt})=>[it("i",{class:Dn(kt.icon),title:kt.label,"aria-hidden":"true"},null,10,yx),it("span",Mx,ot(kt.label),1)]),_:1},8,["modelValue","options","title","aria-label"]),Ht(V(nn),{label:V(Z)("hologram.layers.button"),icon:"pi pi-clone",severity:"secondary",outlined:"",size:"small",badge:Lt.value?String(Nt.value.length-Lt.value)+"/"+Nt.value.length:void 0,badgeSeverity:"secondary",title:V(Z)("hologram.layers.title"),"aria-haspopup":"true",onClick:z[3]||(z[3]=kt=>{var Bn;return(Bn=C.value)==null?void 0:Bn.toggle(kt)})},null,8,["label","badge","title"]),Ht(V(wu),{ref_key:"layersPanel",ref:C},{default:be(()=>[it("div",Sx,[it("h5",bx,ot(V(Z)("hologram.layers.title")),1),(Et(!0),Ft(De,null,Hn(Nt.value,kt=>(Et(),Ft("div",{key:kt.key,class:"hologram-layers__row"},[Ht(V(Su),{modelValue:!!I.value[kt.key],inputId:`hologram-layer-${kt.key}`,"onUpdate:modelValue":Bn=>oe(kt.key,Bn)},null,8,["modelValue","inputId","onUpdate:modelValue"]),it("label",{for:`hologram-layer-${kt.key}`},[it("span",null,ot(kt.label),1),it("small",null,ot(kt.hint),1)],8,Ex)]))),128)),I.value.params?(Et(),Ft("div",wx,[it("label",Tx,ot(V(Z)("hologram.layers.paramNames")),1),Ht(V(bu),{modelValue:I.value.paramNames,options:bt.value,optionLabel:"label",optionValue:"value",inputId:"hologram-layer-param-names",placeholder:V(Z)("hologram.layers.paramNamesAll"),emptyMessage:V(Z)("hologram.layers.paramNamesEmpty"),display:"chip",maxSelectedLabels:3,filter:"",size:"small",fluid:"","onUpdate:modelValue":mt},null,8,["modelValue","options","placeholder","emptyMessage"])])):ce("",!0)])]),_:1},512),Ht(V(nn),{label:mn.value?V(Z)("hologram.exitFullscreen"):V(Z)("hologram.fullscreen"),icon:mn.value?"pi pi-window-minimize":"pi pi-window-maximize",severity:"secondary",outlined:"",size:"small",onClick:fu},null,8,["label","icon"]),h.value?(Et(),xn(V(nn),{key:1,label:V(Z)("hologram.configure"),icon:"pi pi-cog",severity:"secondary",outlined:"",size:"small",disabled:!S.value,onClick:z[4]||(z[4]=kt=>Ea.value=!0)},null,8,["label","disabled"])):ce("",!0),h.value?(Et(),xn(V(nn),{key:2,label:V(Z)("hologram.versions"),icon:"pi pi-history",severity:"secondary",outlined:"",size:"small",disabled:!S.value,onClick:z[5]||(z[5]=kt=>wa.value=!0)},null,8,["label","disabled"])):ce("",!0)],512),ht.value?(Et(),xn(ed,{key:0,ref_key:"mediaEl",ref:$,days:Vt.value,"onUpdate:days":z[6]||(z[6]=kt=>Vt.value=kt),open:Xt.value,"onUpdate:open":z[7]||(z[7]=kt=>Xt.value=kt),data:wt.value,loading:ne.value,error:qt.value,configured:rt.value,canEdit:h.value,nameOf:Pt,onFocus:se,onConfigure:Re},null,8,["days","open","data","loading","error","configured","canEdit"])):ce("",!0),it("div",{ref_key:"stageEl",ref:W,class:Dn(["hologram-stage",`is-${v.value}`]),style:Ln(N.value?{height:`${N.value}px`}:null)},[it("div",Ax,[it("div",{ref_key:"canvasHost",ref:y,class:"hologram-canvas"},null,512),w.value==="live"?(Et(),Ft("div",Rx,[it("div",{class:Dn(["hologram-kpi hologram-kpi--live",{"is-on":P.value.connected&&P.value.fresh,"is-wait":P.value.connected&&!P.value.fresh}])},[it("span",Cx,[z[21]||(z[21]=it("span",{class:"hologram-live__dot"},null,-1)),Me(ot(P.value.connected?V(Z)("hologram.live"):V(Z)("hologram.liveConnecting")),1)]),it("strong",Px,ot(P.value.signals),1),it("span",Lx,[Me(ot(V(Z)("hologram.kpi.signals")),1),P.value.last!==null?(Et(),Ft(De,{key:0},[Me(" · "+ot(V(Z)("hologram.liveLast",{s:P.value.last})),1)],64)):ce("",!0)])],2),it("div",Dx,[it("span",Ix,ot(V(Z)("hologram.kpi.working")),1),it("strong",Ux,[Me(ot(lt.value.working),1),it("small",null," / "+ot(lt.value.total),1)]),it("span",Nx,ot(V(Z)("hologram.kpi.machines")),1)]),it("div",Ox,[it("span",Fx,ot(V(Z)("hologram.kpi.stopped")),1),it("strong",{class:Dn(["hologram-kpi__value",{"is-warn":lt.value.stopped}])},ot(lt.value.stopped),3),it("span",kx,ot(V(Z)("hologram.kpi.stoppedHint")),1)]),it("div",Bx,[it("span",zx,ot(V(Z)("hologram.kpi.failures")),1),it("strong",{class:Dn(["hologram-kpi__value",{"is-bad":lt.value.failure}])},ot(lt.value.failure),3),it("span",Hx,ot(lt.value.noData?V(Z)("hologram.kpi.noData",{n:lt.value.noData}):V(Z)("hologram.kpi.failuresHint")),1)])])):Y.value&&fn.value?(Et(),Ft("div",Vx,[it("div",Gx,[it("span",Wx,ot(V(Z)("hologram.sim.throughput")),1),it("strong",Xx,[Me(ot(fn.value.throughputPerHour.toFixed(1)),1),it("small",null,ot(V(Z)("hologram.sim.perHour")),1)]),it("span",$x,ot(V(Z)("hologram.sim.time"))+" "+ot($t(fn.value.time)),1)]),it("div",Yx,[it("span",qx,ot(V(Z)("hologram.sim.finished")),1),it("strong",Kx,[Me(ot(fn.value.finished),1),it("small",null,ot(V(Z)("hologram.sim.pcs")),1)]),it("span",Zx,ot(V(Z)("hologram.sim.wip"))+" "+ot(fn.value.wip),1)]),it("div",jx,[it("span",Jx,ot(V(Z)("hologram.sim.bottleneck")),1),it("strong",Qx,ot(Ut.value),1),it("span",ty,ot(V(Z)("hologram.kpi.bottleneckHint")),1)])])):ce("",!0),it("div",ey,[it("button",{type:"button",title:V(Z)("hologram.zoomIn"),"aria-label":V(Z)("hologram.zoomIn"),onClick:hu},[...z[22]||(z[22]=[it("i",{class:"pi pi-plus"},null,-1)])],8,ny),it("button",{type:"button",title:V(Z)("hologram.zoomOut"),"aria-label":V(Z)("hologram.zoomOut"),onClick:uu},[...z[23]||(z[23]=[it("i",{class:"pi pi-minus"},null,-1)])],8,iy),it("button",{type:"button",title:V(Z)("hologram.resetView"),"aria-label":V(Z)("hologram.resetView"),onClick:Nl},[...z[24]||(z[24]=[it("i",{class:"pi pi-home"},null,-1)])],8,sy),it("button",{type:"button",title:V(Z)("hologram.topView"),"aria-label":V(Z)("hologram.topView"),onClick:cu},[...z[25]||(z[25]=[it("i",{class:"pi pi-map"},null,-1)])],8,ry)]),w.value==="sim"&&Y.value?(Et(),Ft("div",ay,[Ht(V(nn),{label:je.value?V(Z)("hologram.sim.pause"):V(Z)("hologram.sim.run"),icon:je.value?"pi pi-pause":"pi pi-play",severity:"primary",size:"small",onClick:Je},null,8,["label","icon"]),Ht(V(ea),{modelValue:Zi.value,"onUpdate:modelValue":z[8]||(z[8]=kt=>Zi.value=kt),options:V(ba),optionLabel:"label",optionValue:"value",allowEmpty:!1,size:"small",title:V(Z)("hologram.sim.speed")},null,8,["modelValue","options","title"]),Ht(V(nn),{icon:"pi pi-replay",severity:"secondary",outlined:"",size:"small",title:V(Z)("hologram.sim.reset"),"aria-label":V(Z)("hologram.sim.reset"),onClick:he},null,8,["title","aria-label"]),Ht(V(nn),{label:V(Z)("hologram.sim.fastForward",{h:((_t=Le.value)==null?void 0:_t.horizon_h)||8}),icon:"pi pi-forward",severity:"secondary",outlined:"",size:"small",onClick:Bt},null,8,["label"]),Ht(V(nn),{label:V(Z)("hologram.sim.paramsOpen"),icon:"pi pi-sliders-h",severity:"secondary",outlined:"",size:"small",onClick:z[9]||(z[9]=kt=>xr.value=!0)},null,8,["label"]),it("span",{class:"hologram-legend",title:V(Z)("hologram.sim.legendHint")},[it("span",ly,ot(V(Z)("hologram.sim.legendTitle"))+":",1),(Et(!0),Ft(De,null,Hn(V(Fi),(kt,Bn)=>(Et(),Ft("span",{key:Bn},[it("span",{class:"hologram-dot",style:Ln({background:kt})},null,4),Me(ot(V(Z)(`hologram.sim.${Bn}`)),1)]))),128))],8,oy)])):w.value==="sim"?(Et(),xn(V(nr),{key:3,severity:"warn",size:"small",class:"hologram-simbar"},{default:be(()=>[Me(ot(V(Z)("hologram.sim.noFlows")),1)]),_:1})):ce("",!0),k.value?(Et(),Ft("aside",cy,[it("div",hy,[at.value.get(k.value.id)?(Et(),Ft("span",uy,ot(ye(at.value.get(k.value.id))),1)):ce("",!0),it("h4",null,ot(k.value.name||k.value.id),1),Ht(V(nn),{icon:"pi pi-times",text:"",rounded:"",size:"small",severity:"secondary","aria-label":V(Z)("hologram.close"),onClick:Te},null,8,["aria-label"])]),w.value==="live"&&k.value.machine_id?(Et(),Ft("span",{key:0,class:"hologram-state",style:Ln(We(((re=ut.value)==null?void 0:re.color)||"#94a3b8"))},[it("span",{class:"hologram-dot",style:Ln({background:((xe=ut.value)==null?void 0:xe.color)||"#94a3b8"})},null,4),Me(ot(((ln=ut.value)==null?void 0:ln.nameStatus)||V(Z)("hologram.noLiveData")),1)],4)):ce("",!0),w.value==="sim"&&((we=Ct(k.value.id))==null?void 0:we.role)==="station"?(Et(),Ft("span",{key:1,class:"hologram-state",style:Ln(We(V(Fi)[Ct(k.value.id).state]))},[it("span",{class:"hologram-dot",style:Ln({background:V(Fi)[Ct(k.value.id).state]})},null,4),Me(ot(V(Z)(`hologram.sim.${Ct(k.value.id).state}`)),1)],4)):ce("",!0),it("dl",dy,[it("dt",null,ot(V(Z)("hologram.kind")),1),it("dd",null,ot(zt(k.value.kind)),1),k.value.machine_id?(Et(),Ft(De,{key:0},[it("dt",null,ot(V(Z)("hologram.machine")),1),it("dd",null,ot(((Be=Ot(k.value.machine_id))==null?void 0:Be.name)||`#${k.value.machine_id}`),1),it("dt",null,ot(V(Z)("hologram.line")),1),it("dd",null,ot(vt(k.value.line_id||((Vs=Ot(k.value.machine_id))==null?void 0:Vs.line))||"–"),1)],64)):(Et(),Ft(De,{key:1},[it("dt",null,ot(V(Z)("hologram.machine")),1),it("dd",null,ot(V(Z)("hologram.noMachine")),1)],64)),w.value==="live"&&((wi=ut.value)!=null&&wi.date)?(Et(),Ft(De,{key:2},[it("dt",null,ot(V(Z)("hologram.since")),1),it("dd",null,ot(ut.value.date),1)],64)):ce("",!0),k.value.operators?(Et(),Ft(De,{key:3},[it("dt",null,ot(V(Z)("hologram.operators")),1),it("dd",null,ot(k.value.operators),1)],64)):ce("",!0),w.value==="sim"&&Ct(k.value.id)?(Et(),Ft(De,{key:4},[it("dt",null,ot(V(Z)("hologram.sim.utilization")),1),it("dd",null,ot(Gt(Ct(k.value.id).busy)),1),it("dt",null,ot(V(Z)("hologram.sim.finished")),1),it("dd",null,ot(Ct(k.value.id).done)+" "+ot(V(Z)("hologram.sim.pcs")),1),it("dt",null,ot(V(Z)("hologram.sim.queue")),1),it("dd",null,ot(Ct(k.value.id).queue)+" / "+ot(Ct(k.value.id).queueCap),1)],64)):ce("",!0)]),w.value==="live"&&ut.value&&ut.value.substatuses.length?(Et(),Ft(De,{key:2},[it("h5",fy,ot(V(Z)("hologram.signals")),1),it("ul",py,[(Et(!0),Ft(De,null,Hn(ut.value.substatuses,kt=>(Et(),Ft("li",{key:kt.tag},[it("span",null,ot(kt.target),1),it("strong",null,ot(V(Ss)(kt.value))+" "+ot(kt.unit),1)]))),128))])],64)):ce("",!0),w.value==="live"&&k.value.machine_id?(Et(),Ft("section",{key:3,class:"hologram-reco","aria-busy":on.value},[it("h5",gy,ot(V(Z)("hologram.reco.title")),1),Bs.value.length?(Et(),Ft("div",_y,[(Et(!0),Ft(De,null,Hn(Bs.value,kt=>(Et(),Ft("span",{key:kt.label,class:"hologram-reco__kpi"},[it("small",null,ot(kt.label),1),it("strong",null,ot(kt.value),1)]))),128))])):ce("",!0),on.value&&!ks.value.length?(Et(),Ft("div",vy,[Ht(V(er),{height:"2.6rem"}),Ht(V(er),{height:"2.6rem"})])):ce("",!0),si.value?(Et(),xn(V(nr),{key:2,severity:"warn",size:"small",class:"mb-2"},{default:be(()=>[Me(ot(V(Z)("hologram.reco.error",{msg:si.value})),1)]),_:1})):ce("",!0),it("ul",xy,[(Et(!0),Ft(De,null,Hn(ks.value,(kt,Bn)=>(Et(),Ft("li",{key:Bn,class:Dn(["hologram-reco__item",`is-${kt.severity}`])},[it("i",{class:Dn(qi[kt.severity]),"aria-hidden":"true"},null,2),it("div",null,[it("strong",null,ot(kt.title),1),it("p",null,ot(kt.text),1)])],2))),128))]),it("p",yy,ot(V(Z)("hologram.reco.footnote",{days:lh})),1)],8,my)):ce("",!0),w.value==="sim"&&Rt.value&&Rt.value.role==="station"?(Et(),Ft(De,{key:4},[it("h5",My,ot(V(Z)("hologram.sim.params")),1),it("div",Sy,[it("label",{for:`panel-cycle-${Rt.value.id}`},ot(V(Z)("hologram.sim.cycle")),9,by),Ht(V(ri),{modelValue:Rt.value.cycle_s,"onUpdate:modelValue":[z[10]||(z[10]=kt=>Rt.value.cycle_s=kt),te],inputId:`panel-cycle-${Rt.value.id}`,size:"small",min:.1,maxFractionDigits:1,useGrouping:!1,fluid:""},null,8,["modelValue","inputId"]),it("label",{for:`panel-cap-${Rt.value.id}`},ot(V(Z)("hologram.sim.capacity")),9,Ey),Ht(V(ri),{modelValue:Rt.value.capacity,"onUpdate:modelValue":[z[11]||(z[11]=kt=>Rt.value.capacity=kt),te],inputId:`panel-cap-${Rt.value.id}`,size:"small",min:1,max:100,useGrouping:!1,fluid:""},null,8,["modelValue","inputId"])])],64)):ce("",!0)])):w.value==="live"?(Et(),Ft("div",wy,ot(V(Z)("hologram.noSelection")),1)):ce("",!0)]),$n.value.length&&v.value!=="none"?(Et(),Ft("div",{key:0,class:"hologram-cards",role:"list","aria-label":V(Z)("hologram.layout.title")},[(Et(!0),Ft(De,null,Hn($n.value,kt=>(Et(),Ft("button",{key:kt.id,type:"button",role:"listitem",class:Dn(["hologram-mcard",{"is-selected":kt.id===M.value,"is-alert":kt.alert}]),style:Ln({"--state":kt.color}),onClick:Bn=>ji(kt.id)},[it("span",Ry,[it("span",Cy,ot(kt.number),1),it("span",{class:"hologram-mcard__state",style:Ln(We(kt.color))},ot(kt.state),5)]),it("span",Py,ot(kt.name),1),it("span",Ly,ot(kt.meta),1)],14,Ay))),128))],8,Ty)):ce("",!0)],6)],64)):(Et(),Ft("div",mx,[z[18]||(z[18]=it("i",{class:"pi pi-box hologram-empty__icon","aria-hidden":"true"},null,-1)),it("h3",gx,ot(V(Z)("hologram.mcpOnlyTitle")),1),it("p",_x,ot(V(Z)("hologram.mcpOnlyText")),1),Ht(V(nr),{severity:"info",size:"small",class:"mb-3"},{default:be(()=>[Me(ot(V(Z)("hologram.mcpModelHint")),1)]),_:1}),it("ol",vx,[it("li",null,ot(V(Z)("hologram.mcpStep1")),1),it("li",null,ot(V(Z)("hologram.mcpStep2")),1),it("li",null,ot(V(Z)("hologram.mcpStep3")),1)]),Ht(Tu,{holograms:f.value},null,8,["holograms"])]))]}),_:1}),Ht(V(dh),{visible:xr.value,"onUpdate:visible":z[14]||(z[14]=_t=>xr.value=_t),modal:"",header:V(Z)("hologram.sim.params"),style:{width:"60rem",maxWidth:"95vw"}},{footer:be(()=>[Ht(V(nn),{label:V(Z)("hologram.sim.restore"),icon:"pi pi-undo",severity:"secondary",outlined:"",size:"small",onClick:Ee},null,8,["label"]),Ht(V(nn),{label:V(Z)("hologram.close"),icon:"pi pi-check",severity:"primary",size:"small",onClick:z[13]||(z[13]=_t=>xr.value=!1)},null,8,["label"])]),default:be(()=>[it("p",Dy,ot(V(Z)("hologram.sim.hint")),1),Ht(V(nr),{severity:"secondary",size:"small",class:"hologram-params-help"},{default:be(()=>[it("ul",null,[it("li",null,ot(V(Z)("hologram.sim.helpCapacity")),1),it("li",null,ot(V(Z)("hologram.sim.helpBuffer")),1),it("li",null,ot(V(Z)("hologram.sim.helpStops")),1)])]),_:1}),Le.value?(Et(),Ft("div",Iy,[it("label",Uy,ot(V(Z)("hologram.sim.arrival")),1),Ht(V(ri),{modelValue:Le.value.arrival_s,"onUpdate:modelValue":[z[12]||(z[12]=_t=>Le.value.arrival_s=_t),te],inputId:"hologram-arrival",size:"small",min:.1,maxFractionDigits:1,useGrouping:!1,placeholder:V(Z)("hologram.sim.arrivalHint")},null,8,["modelValue","placeholder"])])):ce("",!0),it("ul",Ny,[(Et(!0),Ft(De,null,Hn(gt.value,_t=>{var re,xe,ln;return Et(),Ft("li",{key:_t.id},[it("div",Oy,[it("span",null,[it("span",{class:"hologram-dot",style:Ln({background:_t.role==="station"&&V(Fi)[(re=Ct(_t.id))==null?void 0:re.state]||"#94a3b8"})},null,4),Me(ot(_t.name),1)]),it("small",Fy,[_t.role==="station"?(Et(),Ft(De,{key:0},[Me(ot(V(Z)("hologram.sim.utilization"))+" "+ot(Gt((xe=Ct(_t.id))==null?void 0:xe.busy)),1)],64)):(Et(),Ft(De,{key:1},[Me(ot(((ln=Ct(_t.id))==null?void 0:ln.done)||0)+" "+ot(V(Z)("hologram.sim.pcs")),1)],64))])]),_t.role==="station"?(Et(),Ft("div",ky,[it("label",{for:`sim-cycle-${_t.id}`},ot(V(Z)("hologram.sim.cycle")),9,By),it("label",{for:`sim-cap-${_t.id}`},ot(V(Z)("hologram.sim.capacity")),9,zy),it("label",{for:`sim-mtbf-${_t.id}`},ot(V(Z)("hologram.sim.mtbf")),9,Hy),it("label",{for:`sim-stop-${_t.id}`},ot(V(Z)("hologram.sim.stop")),9,Vy),Ht(V(ri),{modelValue:_t.cycle_s,"onUpdate:modelValue":[we=>_t.cycle_s=we,te],inputId:`sim-cycle-${_t.id}`,size:"small",min:.1,maxFractionDigits:1,useGrouping:!1,fluid:""},null,8,["modelValue","onUpdate:modelValue","inputId"]),Ht(V(ri),{modelValue:_t.capacity,"onUpdate:modelValue":[we=>_t.capacity=we,te],inputId:`sim-cap-${_t.id}`,size:"small",min:1,max:100,useGrouping:!1,fluid:""},null,8,["modelValue","onUpdate:modelValue","inputId"]),Ht(V(ri),{modelValue:_t.mtbf_s,"onUpdate:modelValue":[we=>_t.mtbf_s=we,te],inputId:`sim-mtbf-${_t.id}`,size:"small",min:0,useGrouping:!1,fluid:""},null,8,["modelValue","onUpdate:modelValue","inputId"]),Ht(V(ri),{modelValue:_t.stop_s,"onUpdate:modelValue":[we=>_t.stop_s=we,te],inputId:`sim-stop-${_t.id}`,size:"small",min:0,useGrouping:!1,fluid:""},null,8,["modelValue","onUpdate:modelValue","inputId"])])):ce("",!0)])}),128))]),it("h5",Gy,ot(V(Z)("hologram.sim.buffers")),1),Le.value?(Et(),xn(V(fh),{key:1,value:Le.value.flows,size:"small",scrollable:"",scrollHeight:"16rem"},{default:be(()=>[Ht(V(Ui),{header:V(Z)("hologram.sim.station")},{body:be(({data:_t})=>{var re,xe;return[Me(ot((re=Le.value.stations[_t.from])==null?void 0:re.name)+" → "+ot((xe=Le.value.stations[_t.to])==null?void 0:xe.name),1)]}),_:1},8,["header"]),Ht(V(Ui),{header:V(Z)("hologram.sim.buffer"),style:{width:"9rem"}},{body:be(({data:_t})=>[Ht(V(ri),{modelValue:_t.buffer,"onUpdate:modelValue":[re=>_t.buffer=re,te],size:"small",min:0,useGrouping:!1,fluid:""},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["header"])]),_:1},8,["value"])):ce("",!0)]),_:1},8,["visible","header"]),Ht(Au,{visible:Ea.value,"onUpdate:visible":z[15]||(z[15]=_t=>Ea.value=_t),hologram:S.value,machines:g.value,currentCamera:du,onSaved:Ol},null,8,["visible","hologram","machines"]),Ht(Ru,{visible:wa.value,"onUpdate:visible":z[16]||(z[16]=_t=>wa.value=_t),hologram:S.value,onRestored:Ol},null,8,["visible","hologram"]),h.value?(Et(),xn(cd,{key:0,visible:fe.value,"onUpdate:visible":z[17]||(z[17]=_t=>fe.value=_t),hologram:S.value,available:((pt=wt.value)==null?void 0:pt.available)||[],onSaved:$e},null,8,["visible","hologram","available"])):ce("",!0)],2)}}},$y=va(Xy,[["__scopeId","data-v-f48de3a1"]]),eM={__name:"Hologram",setup(i){return(t,e)=>(Et(),Ft("div",null,[Ht($y)]))}};export{eM as default};
