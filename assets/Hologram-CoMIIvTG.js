import{aM as jo,aq as ue,aN as un,aO as Jo,m as bc,aP as xh,aQ as Mh,aR as yh,_ as Sh,ak as Eh,ax as gn,al as we,aS as ot,ar as bh,as as wh,e as jt,o as qt,h as Qt,w as wn,at as it,c as Qo,f as ht,t as pt,A as tl,k as De,F as Be,j as Pe,b as Th,a as Xr,E as ei,aT as Ah,d as _n,x as Tn,g as el,i as Vs,ao as On,B as Rh,J as Ch,ay as Gs}from"./index-CBZH6zHh.js";import{s as nl}from"./index-BFfx5NYQ.js";import{s as Ph}from"./index-C463aESx.js";import{C as Lh,a as Dh,_ as Ih}from"./ComponentHologramPromptBuilder-DvO_SQch.js";import"./index-DaRyHQzU.js";import"./index-CT699Hwj.js";import"./index-DUvyqCuX.js";var Ec;const Yr=(Mh||((Ec=yh)==null?void 0:Ec.get)||(()=>null))("spBv1.0"),Ti=i=>Array.isArray(i)?i:Array.isArray(i==null?void 0:i.results)?i.results:Array.isArray(i==null?void 0:i.data)?i.data:[];function Uh(i){const t=window.location.protocol==="https:"?"wss://":"ws://",e=String(i||"").trim().replace(/^https?:\/\//i,"").replace(/^wss?:\/\//i,"").replace(/^\/+/,"").replace(/\/+$/,"");if(!e)return"";const n=`${t}${e}`;return/\/mqtt$/i.test(n)?n:`${n}/mqtt`}function Nh(i,t){const e=i.survey_low,n=i.survey_high;if(e==null&&n==null)return null;const s=parseFloat((t??"").toString());return!(Number.isNaN(s)||e!=null&&s<Number(e)||n!=null&&s>=Number(n))}function Fh({axios:i,apiHost:t,dataEnc:e,onError:n,onConnect:s,onReconnect:r,onSignal:a}={}){const o=jo({}),l=ue(!1),h=jo({messages:0,signals:0,lastAt:0}),d=ue([]);let p=null,c=[],u=[];const m=(Q,v="",E="get",W=null)=>i(bc(t,Q,v,e(),E,W)),M=Q=>{var v;return((v=c.find(E=>Number(E.id)===Number(Q)))==null?void 0:v.name)||""},f=Q=>{var v;return((v=u.find(E=>Number(E.id)===Number(Q)))==null?void 0:v.name)||""};function g(Q){const v=String(Q);return o[v]||(o[v]={color:null,nameStatus:"",typeEvent:null,date:"",updatedAt:0,substatuses:[],signals:{}}),o[v]}function R(Q,v){var A;const E=(A=Q.profil)==null?void 0:A[0];if(!E)return;const W=g(Q.machine);W.color=E.colorBackground||W.color,W.nameStatus=E.nameStatus||"",W.typeEvent=E.typeEvent??null,W.date=v}function w(Q,v){var $;const E=(($=Q.profil)==null?void 0:$[0])||{},W=g(Q.machine),A={tag:Q.tag,target:M(E.aliasValue)||Q.tag,value:v,unit:f(E.unitValue)},z=W.substatuses.findIndex(_=>_.tag===Q.tag);z>=0?W.substatuses.splice(z,1,A):W.substatuses.push(A)}function T(Q,v,E,{lastEvent:W=!1,machine:A=null}={}){return d.value.filter(z=>!(z.tag!==Q||A&&Number(z.machine)!==Number(A)||!W&&z.topic!==v||W&&v&&z.topic&&z.topic!==v)).map(z=>{var x,C;const $=(C=(x=z.profil)==null?void 0:x[0])==null?void 0:C.main,_=Nh(z,E);let S=!1;return $===1?_!==null?S=_:S=(z.value??"").toString().toLowerCase()===(E??"").toString().toLowerCase()||z.value==="":$===2&&(S=z.value===""||z.value==null),S?z:null}).filter(Boolean)}function Y(Q,v,E,W,A){const z=T(Q,v,E,A),$=z.filter(x=>{var C,L;return((L=(C=x.profil)==null?void 0:C[0])==null?void 0:L.main)===1&&x.value!==""}),_=z.filter(x=>{var C,L;return((L=(C=x.profil)==null?void 0:C[0])==null?void 0:L.main)===1&&x.value===""});($.length?$:_).slice(0,1).forEach(x=>R(x,W)),z.filter(x=>{var C,L;return((L=(C=x.profil)==null?void 0:C[0])==null?void 0:L.main)===2}).forEach(x=>w(x,E));const S=new Set;if(z.forEach(x=>{const C=g(x.machine);C.signals[Q]=E,S.add(x.machine)}),!(A!=null&&A.lastEvent)&&S.size){const x=Date.now();h.signals+=1,h.lastAt=x,S.forEach(C=>{g(C).updatedAt=x,a&&a(C,Q,E)})}}function U(){if(p)try{p.end(!0)}catch{}p=null,l.value=!1}async function I(Q){var C,L;if(U(),Object.keys(o).forEach(N=>delete o[N]),h.messages=0,h.signals=0,h.lastAt=0,!Q)return;const v=(N,et)=>N.catch(K=>(n&&n(K.message),{data:et})),[E,W,A,z,$]=await Promise.all([v(m(un.settings,""),{results:[]}),v(m(un.statusesProfilesList,"/"),[]),v(m(un.machines,`/?server=${Q}&limit=1000`),[]),m(un.listAliases,"/").catch(()=>({data:[]})),m(un.listUnits,"/").catch(()=>({data:[]}))]);c=Ti(z.data),u=Ti($.data);const _=Ti(W.data),S=[];Ti(A.data).forEach(N=>{(N.machine_status||[]).forEach(et=>{var B,j;const K=Array.isArray(et.profil)?(j=(B=et.profil)==null?void 0:B[0])==null?void 0:j.id:et.profil;S.push({...et,machine:et.machine??N.id,profil:_.filter(st=>Number(st.id)===Number(K))})})}),d.value=S;try{const N=await m(un.events,"/last/","post",{server:Q,line:0});Ti(N.data).forEach(et=>{Y(et.tag,et.topic,et.value,Jo(et.timestamp_add),{lastEvent:!0,machine:et.machine})})}catch(N){n&&n(N.message)}let x={};try{x=JSON.parse(((L=(C=Ti(E.data))==null?void 0:C[0])==null?void 0:L.data)||"{}")}catch{x={}}X(x)}function X(Q){const v=Uh(Q.adress);if(!v)return;let E;try{E=new URL(v)}catch{return}const W={clientId:(Q.nameClient||"omnimes-hologram")+Math.floor(Math.random()*1e7),reconnectPeriod:Number(Q.reconnectPeriod)||1e3,username:Q.login,password:Q.password};E.protocol!=="wss:"&&!E.port&&Q.port&&(W.port=Number(Q.port)||8083),p=xh.connect(v,W),p.on("connect",()=>{l.value=!0,p.subscribe(Q.topic||"#",{qos:Number(Q.qos)||0}),s&&s()}),p.on("reconnect",()=>{l.value=!1,r&&r()}),p.on("message",(A,z)=>{let $=null;try{$=Yr&&typeof Yr.decodePayload=="function"?Yr.decodePayload(z):null}catch{$=null}if(!$||!Array.isArray($.metrics))return;h.messages+=1;const _=[...$.metrics];$.metrics.forEach(S=>{var x;(S==null?void 0:S.type)==="DataSet"&&((x=S.value)!=null&&x.rows)&&S.name&&S.value.rows.forEach((C,L)=>{C&&_.push({name:`${S.name}/${L+1}`,value:C[0],timestamp:$.timestamp})})}),_.forEach(S=>{var C,L;if((S==null?void 0:S.name)===void 0||(S==null?void 0:S.type)==="DataSet")return;const x=((L=(C=S.value)==null?void 0:C.toString)==null?void 0:L.call(C))??S.value;Y(S.name,A,x,Jo(S.timestamp||$.timestamp))})})}return{live:o,connected:l,activity:h,statuses:d,start:I,stop:U}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ro="169",ji={ROTATE:0,DOLLY:1,PAN:2},$i={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Oh=0,il=1,Bh=2,wc=1,Tc=2,Dn=3,Kn=0,Ge=1,dn=2,$n=0,pi=1,Ua=2,sl=3,rl=4,zh=5,ci=100,kh=101,Hh=102,Vh=103,Gh=104,Wh=200,Xh=201,Yh=202,qh=203,Na=204,Fa=205,$h=206,Zh=207,Kh=208,jh=209,Jh=210,Qh=211,tu=212,eu=213,nu=214,Oa=0,Ba=1,za=2,ts=3,ka=4,Ha=5,Va=6,Ga=7,Ac=0,iu=1,su=2,Zn=0,ru=1,au=2,ou=3,Rc=4,lu=5,cu=6,hu=7,Cc=300,es=301,ns=302,Wa=303,Xa=304,Or=306,jn=1e3,di=1001,Ya=1002,Xe=1003,uu=1004,Ws=1005,nn=1006,qr=1007,fi=1008,Un=1009,Pc=1010,Lc=1011,Is=1012,Co=1013,mi=1014,Mn=1015,Bs=1016,Po=1017,Lo=1018,is=1020,Dc=35902,Ic=1021,Uc=1022,pn=1023,Nc=1024,Fc=1025,Ji=1026,ss=1027,Do=1028,Io=1029,Oc=1030,Uo=1031,No=1033,Sr=33776,Er=33777,br=33778,wr=33779,qa=35840,$a=35841,Za=35842,Ka=35843,ja=36196,Ja=37492,Qa=37496,to=37808,eo=37809,no=37810,io=37811,so=37812,ro=37813,ao=37814,oo=37815,lo=37816,co=37817,ho=37818,uo=37819,fo=37820,po=37821,Tr=36492,mo=36494,go=36495,Bc=36283,_o=36284,vo=36285,xo=36286,du=3200,fu=3201,zc=0,pu=1,qn="",Fe="srgb",Qn="srgb-linear",Fo="display-p3",Br="display-p3-linear",Pr="linear",de="srgb",Lr="rec709",Dr="p3",Ai=7680,al=519,mu=512,gu=513,_u=514,kc=515,vu=516,xu=517,Mu=518,yu=519,Mo=35044,ol="300 es",In=2e3,Ir=2001;class vi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ll=1234567;const Ts=Math.PI/180,Us=180/Math.PI;function Sn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function Ae(i,t,e){return Math.max(t,Math.min(e,i))}function Oo(i,t){return(i%t+t)%t}function Su(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Eu(i,t,e){return i!==t?(e-i)/(t-i):0}function As(i,t,e){return(1-e)*i+e*t}function bu(i,t,e,n){return As(i,t,1-Math.exp(-e*n))}function wu(i,t=1){return t-Math.abs(Oo(i,t*2)-t)}function Tu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Au(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ru(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Cu(i,t){return i+Math.random()*(t-i)}function Pu(i){return i*(.5-Math.random())}function Lu(i){i!==void 0&&(ll=i);let t=ll+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Du(i){return i*Ts}function Iu(i){return i*Us}function Uu(i){return(i&i-1)===0&&i!==0}function Nu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Fu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ou(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),h=r((t+n)/2),d=a((t+n)/2),p=r((t-n)/2),c=a((t-n)/2),u=r((n-t)/2),m=a((n-t)/2);switch(s){case"XYX":i.set(o*d,l*p,l*c,o*h);break;case"YZY":i.set(l*c,o*d,l*p,o*h);break;case"ZXZ":i.set(l*p,l*c,o*d,o*h);break;case"XZX":i.set(o*d,l*m,l*u,o*h);break;case"YXY":i.set(l*u,o*d,l*m,o*h);break;case"ZYZ":i.set(l*m,l*u,o*d,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function oe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const vn={DEG2RAD:Ts,RAD2DEG:Us,generateUUID:Sn,clamp:Ae,euclideanModulo:Oo,mapLinear:Su,inverseLerp:Eu,lerp:As,damp:bu,pingpong:wu,smoothstep:Tu,smootherstep:Au,randInt:Ru,randFloat:Cu,randFloatSpread:Pu,seededRandom:Lu,degToRad:Du,radToDeg:Iu,isPowerOfTwo:Uu,ceilPowerOfTwo:Nu,floorPowerOfTwo:Fu,setQuaternionFromProperEuler:Ou,normalize:oe,denormalize:fn};class vt{constructor(t=0,e=0){vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(t,e,n,s,r,a,o,l,h){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,h)}set(t,e,n,s,r,a,o,l,h){const d=this.elements;return d[0]=t,d[1]=s,d[2]=o,d[3]=e,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],h=n[1],d=n[4],p=n[7],c=n[2],u=n[5],m=n[8],M=s[0],f=s[3],g=s[6],R=s[1],w=s[4],T=s[7],Y=s[2],U=s[5],I=s[8];return r[0]=a*M+o*R+l*Y,r[3]=a*f+o*w+l*U,r[6]=a*g+o*T+l*I,r[1]=h*M+d*R+p*Y,r[4]=h*f+d*w+p*U,r[7]=h*g+d*T+p*I,r[2]=c*M+u*R+m*Y,r[5]=c*f+u*w+m*U,r[8]=c*g+u*T+m*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],d=t[8];return e*a*d-e*o*h-n*r*d+n*o*l+s*r*h-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],d=t[8],p=d*a-o*h,c=o*l-d*r,u=h*r-a*l,m=e*p+n*c+s*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/m;return t[0]=p*M,t[1]=(s*h-d*n)*M,t[2]=(o*n-s*a)*M,t[3]=c*M,t[4]=(d*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=u*M,t[7]=(n*l-h*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*a+h*o)+a+t,-s*h,s*l,-s*(-h*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply($r.makeScale(t,e)),this}rotate(t){return this.premultiply($r.makeRotation(-t)),this}translate(t,e){return this.premultiply($r.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const $r=new Yt;function Hc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bu(){const i=Ur("canvas");return i.style.display="block",i}const cl={};function Ar(i){i in cl||(cl[i]=!0,console.warn(i))}function zu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ku(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Hu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const hl=new Yt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ul=new Yt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),fs={[Qn]:{transfer:Pr,primaries:Lr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Fe]:{transfer:de,primaries:Lr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Br]:{transfer:Pr,primaries:Dr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(ul),fromReference:i=>i.applyMatrix3(hl)},[Fo]:{transfer:de,primaries:Dr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(ul),fromReference:i=>i.applyMatrix3(hl).convertLinearToSRGB()}},Vu=new Set([Qn,Br]),ae={enabled:!0,_workingColorSpace:Qn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Vu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=fs[t].toReference,s=fs[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return fs[i].primaries},getTransfer:function(i){return i===qn?Pr:fs[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(fs[t].luminanceCoefficients)}};function Qi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ri;class Gu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ri===void 0&&(Ri=Ur("canvas")),Ri.width=t.width,Ri.height=t.height;const n=Ri.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ri}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ur("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Qi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qi(e[n]/255)*255):e[n]=Qi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Wu=0;class Vc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=Sn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Kr(s[a].image)):r.push(Kr(s[a]))}else r=Kr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Kr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xu=0;class Oe extends vi{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,n=di,s=di,r=nn,a=fi,o=pn,l=Un,h=Oe.DEFAULT_ANISOTROPY,d=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=Sn(),this.name="",this.source=new Vc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jn:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case Ya:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jn:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case Ya:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=Cc;Oe.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,n=0,s=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,h=l[0],d=l[4],p=l[8],c=l[1],u=l[5],m=l[9],M=l[2],f=l[6],g=l[10];if(Math.abs(d-c)<.01&&Math.abs(p-M)<.01&&Math.abs(m-f)<.01){if(Math.abs(d+c)<.1&&Math.abs(p+M)<.1&&Math.abs(m+f)<.1&&Math.abs(h+u+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(h+1)/2,T=(u+1)/2,Y=(g+1)/2,U=(d+c)/4,I=(p+M)/4,X=(m+f)/4;return w>T&&w>Y?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=U/n,r=I/n):T>Y?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=U/s,r=X/s):Y<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(Y),n=I/r,s=X/r),this.set(n,s,r,e),this}let R=Math.sqrt((f-m)*(f-m)+(p-M)*(p-M)+(c-d)*(c-d));return Math.abs(R)<.001&&(R=1),this.x=(f-m)/R,this.y=(p-M)/R,this.z=(c-d)/R,this.w=Math.acos((h+u+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yu extends vi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Oe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Vc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends Yu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Gc extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class qu extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],h=n[s+1],d=n[s+2],p=n[s+3];const c=r[a+0],u=r[a+1],m=r[a+2],M=r[a+3];if(o===0){t[e+0]=l,t[e+1]=h,t[e+2]=d,t[e+3]=p;return}if(o===1){t[e+0]=c,t[e+1]=u,t[e+2]=m,t[e+3]=M;return}if(p!==M||l!==c||h!==u||d!==m){let f=1-o;const g=l*c+h*u+d*m+p*M,R=g>=0?1:-1,w=1-g*g;if(w>Number.EPSILON){const Y=Math.sqrt(w),U=Math.atan2(Y,g*R);f=Math.sin(f*U)/Y,o=Math.sin(o*U)/Y}const T=o*R;if(l=l*f+c*T,h=h*f+u*T,d=d*f+m*T,p=p*f+M*T,f===1-o){const Y=1/Math.sqrt(l*l+h*h+d*d+p*p);l*=Y,h*=Y,d*=Y,p*=Y}}t[e]=l,t[e+1]=h,t[e+2]=d,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],h=n[s+2],d=n[s+3],p=r[a],c=r[a+1],u=r[a+2],m=r[a+3];return t[e]=o*m+d*p+l*u-h*c,t[e+1]=l*m+d*c+h*p-o*u,t[e+2]=h*m+d*u+o*c-l*p,t[e+3]=d*m-o*p-l*c-h*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,h=o(n/2),d=o(s/2),p=o(r/2),c=l(n/2),u=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=c*d*p+h*u*m,this._y=h*u*p-c*d*m,this._z=h*d*m+c*u*p,this._w=h*d*p-c*u*m;break;case"YXZ":this._x=c*d*p+h*u*m,this._y=h*u*p-c*d*m,this._z=h*d*m-c*u*p,this._w=h*d*p+c*u*m;break;case"ZXY":this._x=c*d*p-h*u*m,this._y=h*u*p+c*d*m,this._z=h*d*m+c*u*p,this._w=h*d*p-c*u*m;break;case"ZYX":this._x=c*d*p-h*u*m,this._y=h*u*p+c*d*m,this._z=h*d*m-c*u*p,this._w=h*d*p+c*u*m;break;case"YZX":this._x=c*d*p+h*u*m,this._y=h*u*p+c*d*m,this._z=h*d*m-c*u*p,this._w=h*d*p-c*u*m;break;case"XZY":this._x=c*d*p-h*u*m,this._y=h*u*p-c*d*m,this._z=h*d*m+c*u*p,this._w=h*d*p+c*u*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],h=e[2],d=e[6],p=e[10],c=n+o+p;if(c>0){const u=.5/Math.sqrt(c+1);this._w=.25/u,this._x=(d-l)*u,this._y=(r-h)*u,this._z=(a-s)*u}else if(n>o&&n>p){const u=2*Math.sqrt(1+n-o-p);this._w=(d-l)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+h)/u}else if(o>p){const u=2*Math.sqrt(1+o-n-p);this._w=(r-h)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(l+d)/u}else{const u=2*Math.sqrt(1+p-n-o);this._w=(a-s)/u,this._x=(r+h)/u,this._y=(l+d)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,h=e._z,d=e._w;return this._x=n*d+a*o+s*h-r*l,this._y=s*d+a*l+r*o-n*h,this._z=r*d+a*h+n*l-s*o,this._w=a*d-n*o-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const u=1-e;return this._w=u*a+e*this._w,this._x=u*n+e*this._x,this._y=u*s+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}const h=Math.sqrt(l),d=Math.atan2(h,o),p=Math.sin((1-e)*d)/h,c=Math.sin(e*d)/h;return this._w=a*p+this._w*c,this._x=n*p+this._x*c,this._y=s*p+this._y*c,this._z=r*p+this._z*c,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(dl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(dl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,h=2*(a*s-o*n),d=2*(o*e-r*s),p=2*(r*n-a*e);return this.x=e+l*h+a*p-o*d,this.y=n+l*d+o*h-r*p,this.z=s+l*p+r*d-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return jr.copy(this).projectOnVector(t),this.sub(jr)}reflect(t){return this.sub(jr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jr=new F,dl=new Nn;class xi{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ln):ln.fromBufferAttribute(r,a),ln.applyMatrix4(t.matrixWorld),this.expandByPoint(ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xs.copy(n.boundingBox)),Xs.applyMatrix4(t.matrixWorld),this.union(Xs)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ln),ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ps),Ys.subVectors(this.max,ps),Ci.subVectors(t.a,ps),Pi.subVectors(t.b,ps),Li.subVectors(t.c,ps),Bn.subVectors(Pi,Ci),zn.subVectors(Li,Pi),ni.subVectors(Ci,Li);let e=[0,-Bn.z,Bn.y,0,-zn.z,zn.y,0,-ni.z,ni.y,Bn.z,0,-Bn.x,zn.z,0,-zn.x,ni.z,0,-ni.x,-Bn.y,Bn.x,0,-zn.y,zn.x,0,-ni.y,ni.x,0];return!Jr(e,Ci,Pi,Li,Ys)||(e=[1,0,0,0,1,0,0,0,1],!Jr(e,Ci,Pi,Li,Ys))?!1:(qs.crossVectors(Bn,zn),e=[qs.x,qs.y,qs.z],Jr(e,Ci,Pi,Li,Ys))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(An),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const An=[new F,new F,new F,new F,new F,new F,new F,new F],ln=new F,Xs=new xi,Ci=new F,Pi=new F,Li=new F,Bn=new F,zn=new F,ni=new F,ps=new F,Ys=new F,qs=new F,ii=new F;function Jr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ii.fromArray(i,r);const o=s.x*Math.abs(ii.x)+s.y*Math.abs(ii.y)+s.z*Math.abs(ii.z),l=t.dot(ii),h=e.dot(ii),d=n.dot(ii);if(Math.max(-Math.max(l,h,d),Math.min(l,h,d))>o)return!1}return!0}const $u=new xi,ms=new F,Qr=new F;class zs{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):$u.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ms.subVectors(t,this.center);const e=ms.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ms,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ms.copy(t.center).add(Qr)),this.expandByPoint(ms.copy(t.center).sub(Qr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Rn=new F,ta=new F,$s=new F,kn=new F,ea=new F,Zs=new F,na=new F;class Bo{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Rn.copy(this.origin).addScaledVector(this.direction,e),Rn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ta.copy(t).add(e).multiplyScalar(.5),$s.copy(e).sub(t).normalize(),kn.copy(this.origin).sub(ta);const r=t.distanceTo(e)*.5,a=-this.direction.dot($s),o=kn.dot(this.direction),l=-kn.dot($s),h=kn.lengthSq(),d=Math.abs(1-a*a);let p,c,u,m;if(d>0)if(p=a*l-o,c=a*o-l,m=r*d,p>=0)if(c>=-m)if(c<=m){const M=1/d;p*=M,c*=M,u=p*(p+a*c+2*o)+c*(a*p+c+2*l)+h}else c=r,p=Math.max(0,-(a*c+o)),u=-p*p+c*(c+2*l)+h;else c=-r,p=Math.max(0,-(a*c+o)),u=-p*p+c*(c+2*l)+h;else c<=-m?(p=Math.max(0,-(-a*r+o)),c=p>0?-r:Math.min(Math.max(-r,-l),r),u=-p*p+c*(c+2*l)+h):c<=m?(p=0,c=Math.min(Math.max(-r,-l),r),u=c*(c+2*l)+h):(p=Math.max(0,-(a*r+o)),c=p>0?r:Math.min(Math.max(-r,-l),r),u=-p*p+c*(c+2*l)+h);else c=a>0?-r:r,p=Math.max(0,-(a*c+o)),u=-p*p+c*(c+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(ta).addScaledVector($s,c),u}intersectSphere(t,e){Rn.subVectors(t.center,this.origin);const n=Rn.dot(this.direction),s=Rn.dot(Rn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const h=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,c=this.origin;return h>=0?(n=(t.min.x-c.x)*h,s=(t.max.x-c.x)*h):(n=(t.max.x-c.x)*h,s=(t.min.x-c.x)*h),d>=0?(r=(t.min.y-c.y)*d,a=(t.max.y-c.y)*d):(r=(t.max.y-c.y)*d,a=(t.min.y-c.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-c.z)*p,l=(t.max.z-c.z)*p):(o=(t.max.z-c.z)*p,l=(t.min.z-c.z)*p),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Rn)!==null}intersectTriangle(t,e,n,s,r){ea.subVectors(e,t),Zs.subVectors(n,t),na.crossVectors(ea,Zs);let a=this.direction.dot(na),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;kn.subVectors(this.origin,t);const l=o*this.direction.dot(Zs.crossVectors(kn,Zs));if(l<0)return null;const h=o*this.direction.dot(ea.cross(kn));if(h<0||l+h>a)return null;const d=-o*kn.dot(na);return d<0?null:this.at(d/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,n,s,r,a,o,l,h,d,p,c,u,m,M,f){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,h,d,p,c,u,m,M,f)}set(t,e,n,s,r,a,o,l,h,d,p,c,u,m,M,f){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=h,g[6]=d,g[10]=p,g[14]=c,g[3]=u,g[7]=m,g[11]=M,g[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Di.setFromMatrixColumn(t,0).length(),r=1/Di.setFromMatrixColumn(t,1).length(),a=1/Di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),h=Math.sin(s),d=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){const c=a*d,u=a*p,m=o*d,M=o*p;e[0]=l*d,e[4]=-l*p,e[8]=h,e[1]=u+m*h,e[5]=c-M*h,e[9]=-o*l,e[2]=M-c*h,e[6]=m+u*h,e[10]=a*l}else if(t.order==="YXZ"){const c=l*d,u=l*p,m=h*d,M=h*p;e[0]=c+M*o,e[4]=m*o-u,e[8]=a*h,e[1]=a*p,e[5]=a*d,e[9]=-o,e[2]=u*o-m,e[6]=M+c*o,e[10]=a*l}else if(t.order==="ZXY"){const c=l*d,u=l*p,m=h*d,M=h*p;e[0]=c-M*o,e[4]=-a*p,e[8]=m+u*o,e[1]=u+m*o,e[5]=a*d,e[9]=M-c*o,e[2]=-a*h,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const c=a*d,u=a*p,m=o*d,M=o*p;e[0]=l*d,e[4]=m*h-u,e[8]=c*h+M,e[1]=l*p,e[5]=M*h+c,e[9]=u*h-m,e[2]=-h,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const c=a*l,u=a*h,m=o*l,M=o*h;e[0]=l*d,e[4]=M-c*p,e[8]=m*p+u,e[1]=p,e[5]=a*d,e[9]=-o*d,e[2]=-h*d,e[6]=u*p+m,e[10]=c-M*p}else if(t.order==="XZY"){const c=a*l,u=a*h,m=o*l,M=o*h;e[0]=l*d,e[4]=-p,e[8]=h*d,e[1]=c*p+M,e[5]=a*d,e[9]=u*p-m,e[2]=m*p-u,e[6]=o*d,e[10]=M*p+c}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zu,t,Ku)}lookAt(t,e,n){const s=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),Hn.crossVectors(n,$e),Hn.lengthSq()===0&&(Math.abs(n.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),Hn.crossVectors(n,$e)),Hn.normalize(),Ks.crossVectors($e,Hn),s[0]=Hn.x,s[4]=Ks.x,s[8]=$e.x,s[1]=Hn.y,s[5]=Ks.y,s[9]=$e.y,s[2]=Hn.z,s[6]=Ks.z,s[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],h=n[12],d=n[1],p=n[5],c=n[9],u=n[13],m=n[2],M=n[6],f=n[10],g=n[14],R=n[3],w=n[7],T=n[11],Y=n[15],U=s[0],I=s[4],X=s[8],Q=s[12],v=s[1],E=s[5],W=s[9],A=s[13],z=s[2],$=s[6],_=s[10],S=s[14],x=s[3],C=s[7],L=s[11],N=s[15];return r[0]=a*U+o*v+l*z+h*x,r[4]=a*I+o*E+l*$+h*C,r[8]=a*X+o*W+l*_+h*L,r[12]=a*Q+o*A+l*S+h*N,r[1]=d*U+p*v+c*z+u*x,r[5]=d*I+p*E+c*$+u*C,r[9]=d*X+p*W+c*_+u*L,r[13]=d*Q+p*A+c*S+u*N,r[2]=m*U+M*v+f*z+g*x,r[6]=m*I+M*E+f*$+g*C,r[10]=m*X+M*W+f*_+g*L,r[14]=m*Q+M*A+f*S+g*N,r[3]=R*U+w*v+T*z+Y*x,r[7]=R*I+w*E+T*$+Y*C,r[11]=R*X+w*W+T*_+Y*L,r[15]=R*Q+w*A+T*S+Y*N,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],h=t[13],d=t[2],p=t[6],c=t[10],u=t[14],m=t[3],M=t[7],f=t[11],g=t[15];return m*(+r*l*p-s*h*p-r*o*c+n*h*c+s*o*u-n*l*u)+M*(+e*l*u-e*h*c+r*a*c-s*a*u+s*h*d-r*l*d)+f*(+e*h*p-e*o*u-r*a*p+n*a*u+r*o*d-n*h*d)+g*(-s*o*d-e*l*p+e*o*c+s*a*p-n*a*c+n*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],d=t[8],p=t[9],c=t[10],u=t[11],m=t[12],M=t[13],f=t[14],g=t[15],R=p*f*h-M*c*h+M*l*u-o*f*u-p*l*g+o*c*g,w=m*c*h-d*f*h-m*l*u+a*f*u+d*l*g-a*c*g,T=d*M*h-m*p*h+m*o*u-a*M*u-d*o*g+a*p*g,Y=m*p*l-d*M*l-m*o*c+a*M*c+d*o*f-a*p*f,U=e*R+n*w+s*T+r*Y;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/U;return t[0]=R*I,t[1]=(M*c*r-p*f*r-M*s*u+n*f*u+p*s*g-n*c*g)*I,t[2]=(o*f*r-M*l*r+M*s*h-n*f*h-o*s*g+n*l*g)*I,t[3]=(p*l*r-o*c*r-p*s*h+n*c*h+o*s*u-n*l*u)*I,t[4]=w*I,t[5]=(d*f*r-m*c*r+m*s*u-e*f*u-d*s*g+e*c*g)*I,t[6]=(m*l*r-a*f*r-m*s*h+e*f*h+a*s*g-e*l*g)*I,t[7]=(a*c*r-d*l*r+d*s*h-e*c*h-a*s*u+e*l*u)*I,t[8]=T*I,t[9]=(m*p*r-d*M*r-m*n*u+e*M*u+d*n*g-e*p*g)*I,t[10]=(a*M*r-m*o*r+m*n*h-e*M*h-a*n*g+e*o*g)*I,t[11]=(d*o*r-a*p*r-d*n*h+e*p*h+a*n*u-e*o*u)*I,t[12]=Y*I,t[13]=(d*M*s-m*p*s+m*n*c-e*M*c-d*n*f+e*p*f)*I,t[14]=(m*o*s-a*M*s-m*n*l+e*M*l+a*n*f-e*o*f)*I,t[15]=(a*p*s-d*o*s+d*n*l-e*p*l-a*n*c+e*o*c)*I,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,h=r*a,d=r*o;return this.set(h*a+n,h*o-s*l,h*l+s*o,0,h*o+s*l,d*o+n,d*l-s*a,0,h*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,h=r+r,d=a+a,p=o+o,c=r*h,u=r*d,m=r*p,M=a*d,f=a*p,g=o*p,R=l*h,w=l*d,T=l*p,Y=n.x,U=n.y,I=n.z;return s[0]=(1-(M+g))*Y,s[1]=(u+T)*Y,s[2]=(m-w)*Y,s[3]=0,s[4]=(u-T)*U,s[5]=(1-(c+g))*U,s[6]=(f+R)*U,s[7]=0,s[8]=(m+w)*I,s[9]=(f-R)*I,s[10]=(1-(c+M))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Di.set(s[0],s[1],s[2]).length();const a=Di.set(s[4],s[5],s[6]).length(),o=Di.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],cn.copy(this);const h=1/r,d=1/a,p=1/o;return cn.elements[0]*=h,cn.elements[1]*=h,cn.elements[2]*=h,cn.elements[4]*=d,cn.elements[5]*=d,cn.elements[6]*=d,cn.elements[8]*=p,cn.elements[9]*=p,cn.elements[10]*=p,e.setFromRotationMatrix(cn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=In){const l=this.elements,h=2*r/(e-t),d=2*r/(n-s),p=(e+t)/(e-t),c=(n+s)/(n-s);let u,m;if(o===In)u=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Ir)u=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=c,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=In){const l=this.elements,h=1/(e-t),d=1/(n-s),p=1/(a-r),c=(e+t)*h,u=(n+s)*d;let m,M;if(o===In)m=(a+r)*p,M=-2*p;else if(o===Ir)m=r*p,M=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-c,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=M,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Di=new F,cn=new se,Zu=new F(0,0,0),Ku=new F(1,1,1),Hn=new F,Ks=new F,$e=new F,fl=new se,pl=new Nn;class rn{constructor(t=0,e=0,n=0,s=rn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],h=s[5],d=s[9],p=s[2],c=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(Ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(c,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-p,u),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ae(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(c,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(c,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return fl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pl.setFromEuler(this),this.setFromQuaternion(pl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rn.DEFAULT_ORDER="XYZ";class zo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ju=0;const ml=new F,Ii=new Nn,Cn=new se,js=new F,gs=new F,Ju=new F,Qu=new Nn,gl=new F(1,0,0),_l=new F(0,1,0),vl=new F(0,0,1),xl={type:"added"},td={type:"removed"},Ui={type:"childadded",child:null},ia={type:"childremoved",child:null};class Re extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=Sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Re.DEFAULT_UP.clone();const t=new F,e=new rn,n=new Nn,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new Yt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=Re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.premultiply(Ii),this}rotateX(t){return this.rotateOnAxis(gl,t)}rotateY(t){return this.rotateOnAxis(_l,t)}rotateZ(t){return this.rotateOnAxis(vl,t)}translateOnAxis(t,e){return ml.copy(t).applyQuaternion(this.quaternion),this.position.add(ml.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gl,t)}translateY(t){return this.translateOnAxis(_l,t)}translateZ(t){return this.translateOnAxis(vl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?js.copy(t):js.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(gs,js,this.up):Cn.lookAt(js,gs,this.up),this.quaternion.setFromRotationMatrix(Cn),s&&(Cn.extractRotation(s.matrixWorld),Ii.setFromRotationMatrix(Cn),this.quaternion.premultiply(Ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xl),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(td),ia.child=t,this.dispatchEvent(ia),ia.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xl),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,t,Ju),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,Qu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let h=0,d=l.length;h<d;h++){const p=l[h];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),h=a(t.textures),d=a(t.images),p=a(t.shapes),c=a(t.skeletons),u=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),c.length>0&&(n.skeletons=c),u.length>0&&(n.animations=u),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const l=[];for(const h in o){const d=o[h];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Re.DEFAULT_UP=new F(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new F,Pn=new F,sa=new F,Ln=new F,Ni=new F,Fi=new F,Ml=new F,ra=new F,aa=new F,oa=new F,la=new ce,ca=new ce,ha=new ce;class sn{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),hn.subVectors(t,e),s.cross(hn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){hn.subVectors(s,e),Pn.subVectors(n,e),sa.subVectors(t,e);const a=hn.dot(hn),o=hn.dot(Pn),l=hn.dot(sa),h=Pn.dot(Pn),d=Pn.dot(sa),p=a*h-o*o;if(p===0)return r.set(0,0,0),null;const c=1/p,u=(h*l-o*d)*c,m=(a*d-o*l)*c;return r.set(1-u-m,m,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ln.x),l.addScaledVector(a,Ln.y),l.addScaledVector(o,Ln.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return la.setScalar(0),ca.setScalar(0),ha.setScalar(0),la.fromBufferAttribute(t,e),ca.fromBufferAttribute(t,n),ha.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(la,r.x),a.addScaledVector(ca,r.y),a.addScaledVector(ha,r.z),a}static isFrontFacing(t,e,n,s){return hn.subVectors(n,e),Pn.subVectors(t,e),hn.cross(Pn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),hn.cross(Pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return sn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return sn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Ni.subVectors(s,n),Fi.subVectors(r,n),ra.subVectors(t,n);const l=Ni.dot(ra),h=Fi.dot(ra);if(l<=0&&h<=0)return e.copy(n);aa.subVectors(t,s);const d=Ni.dot(aa),p=Fi.dot(aa);if(d>=0&&p<=d)return e.copy(s);const c=l*p-d*h;if(c<=0&&l>=0&&d<=0)return a=l/(l-d),e.copy(n).addScaledVector(Ni,a);oa.subVectors(t,r);const u=Ni.dot(oa),m=Fi.dot(oa);if(m>=0&&u<=m)return e.copy(r);const M=u*h-l*m;if(M<=0&&h>=0&&m<=0)return o=h/(h-m),e.copy(n).addScaledVector(Fi,o);const f=d*m-u*p;if(f<=0&&p-d>=0&&u-m>=0)return Ml.subVectors(r,s),o=(p-d)/(p-d+(u-m)),e.copy(s).addScaledVector(Ml,o);const g=1/(f+M+c);return a=M*g,o=c*g,e.copy(n).addScaledVector(Ni,a).addScaledVector(Fi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Wc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},Js={h:0,s:0,l:0};function ua(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ae.workingColorSpace){if(t=Oo(t,1),e=Ae(e,0,1),n=Ae(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ua(a,r,t+1/3),this.g=ua(a,r,t),this.b=ua(a,r,t-1/3)}return ae.toWorkingColorSpace(this,s),this}setStyle(t,e=Fe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){const n=Wc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qi(t.r),this.g=Qi(t.g),this.b=Qi(t.b),this}copyLinearToSRGB(t){return this.r=Zr(t.r),this.g=Zr(t.g),this.b=Zr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return ae.fromWorkingColorSpace(Ue.copy(this),t),Math.round(Ae(Ue.r*255,0,255))*65536+Math.round(Ae(Ue.g*255,0,255))*256+Math.round(Ae(Ue.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace(Ue.copy(this),e);const n=Ue.r,s=Ue.g,r=Ue.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,h;const d=(o+a)/2;if(o===a)l=0,h=0;else{const p=a-o;switch(h=d<=.5?p/(a+o):p/(2-a-o),a){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=h,t.l=d,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=Fe){ae.fromWorkingColorSpace(Ue.copy(this),t);const e=Ue.r,n=Ue.g,s=Ue.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Vn),this.setHSL(Vn.h+t,Vn.s+e,Vn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vn),t.getHSL(Js);const n=As(Vn.h,Js.h,e),s=As(Vn.s,Js.s,e),r=As(Vn.l,Js.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ue=new Vt;Vt.NAMES=Wc;let ed=0;class as extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=Sn(),this.name="",this.type="Material",this.blending=pi,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Na,this.blendDst=Fa,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=al,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ai,this.stencilZFail=Ai,this.stencilZPass=Ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pi&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Na&&(n.blendSrc=this.blendSrc),this.blendDst!==Fa&&(n.blendDst=this.blendDst),this.blendEquation!==ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ts&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==al&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class mn extends as{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=Ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ve=new F,Qs=new vt;class Je{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Mo,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qs.fromBufferAttribute(this,e),Qs.applyMatrix3(t),this.setXY(e,Qs.x,Qs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fn(e,this.array)),e}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fn(e,this.array)),e}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fn(e,this.array)),e}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),s=oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),s=oe(s,this.array),r=oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Mo&&(t.usage=this.usage),t}}class Xc extends Je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Yc extends Je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class xe extends Je{constructor(t,e,n){super(new Float32Array(t),e,n)}}let nd=0;const tn=new se,da=new Re,Oi=new F,Ze=new xi,_s=new xi,Te=new F;class Ye extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=Sn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hc(t)?Yc:Xc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return tn.makeRotationFromQuaternion(t),this.applyMatrix4(tn),this}rotateX(t){return tn.makeRotationX(t),this.applyMatrix4(tn),this}rotateY(t){return tn.makeRotationY(t),this.applyMatrix4(tn),this}rotateZ(t){return tn.makeRotationZ(t),this.applyMatrix4(tn),this}translate(t,e,n){return tn.makeTranslation(t,e,n),this.applyMatrix4(tn),this}scale(t,e,n){return tn.makeScale(t,e,n),this.applyMatrix4(tn),this}lookAt(t){return da.lookAt(t),da.updateMatrix(),this.applyMatrix4(da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new xe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ze.setFromBufferAttribute(r),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];_s.setFromBufferAttribute(o),this.morphTargetsRelative?(Te.addVectors(Ze.min,_s.min),Ze.expandByPoint(Te),Te.addVectors(Ze.max,_s.max),Ze.expandByPoint(Te)):(Ze.expandByPoint(_s.min),Ze.expandByPoint(_s.max))}Ze.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Te.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Te));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let h=0,d=o.count;h<d;h++)Te.fromBufferAttribute(o,h),l&&(Oi.fromBufferAttribute(t,h),Te.add(Oi)),s=Math.max(s,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Je(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let X=0;X<n.count;X++)o[X]=new F,l[X]=new F;const h=new F,d=new F,p=new F,c=new vt,u=new vt,m=new vt,M=new F,f=new F;function g(X,Q,v){h.fromBufferAttribute(n,X),d.fromBufferAttribute(n,Q),p.fromBufferAttribute(n,v),c.fromBufferAttribute(r,X),u.fromBufferAttribute(r,Q),m.fromBufferAttribute(r,v),d.sub(h),p.sub(h),u.sub(c),m.sub(c);const E=1/(u.x*m.y-m.x*u.y);isFinite(E)&&(M.copy(d).multiplyScalar(m.y).addScaledVector(p,-u.y).multiplyScalar(E),f.copy(p).multiplyScalar(u.x).addScaledVector(d,-m.x).multiplyScalar(E),o[X].add(M),o[Q].add(M),o[v].add(M),l[X].add(f),l[Q].add(f),l[v].add(f))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let X=0,Q=R.length;X<Q;++X){const v=R[X],E=v.start,W=v.count;for(let A=E,z=E+W;A<z;A+=3)g(t.getX(A+0),t.getX(A+1),t.getX(A+2))}const w=new F,T=new F,Y=new F,U=new F;function I(X){Y.fromBufferAttribute(s,X),U.copy(Y);const Q=o[X];w.copy(Q),w.sub(Y.multiplyScalar(Y.dot(Q))).normalize(),T.crossVectors(U,Q);const E=T.dot(l[X])<0?-1:1;a.setXYZW(X,w.x,w.y,w.z,E)}for(let X=0,Q=R.length;X<Q;++X){const v=R[X],E=v.start,W=v.count;for(let A=E,z=E+W;A<z;A+=3)I(t.getX(A+0)),I(t.getX(A+1)),I(t.getX(A+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let c=0,u=n.count;c<u;c++)n.setXYZ(c,0,0,0);const s=new F,r=new F,a=new F,o=new F,l=new F,h=new F,d=new F,p=new F;if(t)for(let c=0,u=t.count;c<u;c+=3){const m=t.getX(c+0),M=t.getX(c+1),f=t.getX(c+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,f),d.subVectors(a,r),p.subVectors(s,r),d.cross(p),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,M),h.fromBufferAttribute(n,f),o.add(d),l.add(d),h.add(d),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(f,h.x,h.y,h.z)}else for(let c=0,u=e.count;c<u;c+=3)s.fromBufferAttribute(e,c+0),r.fromBufferAttribute(e,c+1),a.fromBufferAttribute(e,c+2),d.subVectors(a,r),p.subVectors(s,r),d.cross(p),n.setXYZ(c+0,d.x,d.y,d.z),n.setXYZ(c+1,d.x,d.y,d.z),n.setXYZ(c+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(o,l){const h=o.array,d=o.itemSize,p=o.normalized,c=new h.constructor(l.length*d);let u=0,m=0;for(let M=0,f=l.length;M<f;M++){o.isInterleavedBufferAttribute?u=l[M]*o.data.stride+o.offset:u=l[M]*d;for(let g=0;g<d;g++)c[m++]=h[u++]}return new Je(c,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ye,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],h=t(l,n);e.setAttribute(o,h)}const r=this.morphAttributes;for(const o in r){const l=[],h=r[o];for(let d=0,p=h.length;d<p;d++){const c=h[d],u=t(c,n);l.push(u)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const h=n[l];t.data.attributes[l]=h.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],d=[];for(let p=0,c=h.length;p<c;p++){const u=h[p];d.push(u.toJSON(t.data))}d.length>0&&(s[l]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const h in s){const d=s[h];this.setAttribute(h,d.clone(e))}const r=t.morphAttributes;for(const h in r){const d=[],p=r[h];for(let c=0,u=p.length;c<u;c++)d.push(p[c].clone(e));this.morphAttributes[h]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let h=0,d=a.length;h<d;h++){const p=a[h];this.addGroup(p.start,p.count,p.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yl=new se,si=new Bo,tr=new zs,Sl=new F,er=new F,nr=new F,ir=new F,fa=new F,sr=new F,El=new F,rr=new F;class Ht extends Re{constructor(t=new Ye,e=new mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){sr.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const d=o[l],p=r[l];d!==0&&(fa.fromBufferAttribute(p,t),a?sr.addScaledVector(fa,d):sr.addScaledVector(fa.sub(e),d))}e.add(sr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(r),si.copy(t.ray).recast(t.near),!(tr.containsPoint(si.origin)===!1&&(si.intersectSphere(tr,Sl)===null||si.origin.distanceToSquared(Sl)>(t.far-t.near)**2))&&(yl.copy(r).invert(),si.copy(t.ray).applyMatrix4(yl),!(n.boundingBox!==null&&si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,si)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,d=r.attributes.uv1,p=r.attributes.normal,c=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,M=c.length;m<M;m++){const f=c[m],g=a[f.materialIndex],R=Math.max(f.start,u.start),w=Math.min(o.count,Math.min(f.start+f.count,u.start+u.count));for(let T=R,Y=w;T<Y;T+=3){const U=o.getX(T),I=o.getX(T+1),X=o.getX(T+2);s=ar(this,g,t,n,h,d,p,U,I,X),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const m=Math.max(0,u.start),M=Math.min(o.count,u.start+u.count);for(let f=m,g=M;f<g;f+=3){const R=o.getX(f),w=o.getX(f+1),T=o.getX(f+2);s=ar(this,a,t,n,h,d,p,R,w,T),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,M=c.length;m<M;m++){const f=c[m],g=a[f.materialIndex],R=Math.max(f.start,u.start),w=Math.min(l.count,Math.min(f.start+f.count,u.start+u.count));for(let T=R,Y=w;T<Y;T+=3){const U=T,I=T+1,X=T+2;s=ar(this,g,t,n,h,d,p,U,I,X),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const m=Math.max(0,u.start),M=Math.min(l.count,u.start+u.count);for(let f=m,g=M;f<g;f+=3){const R=f,w=f+1,T=f+2;s=ar(this,a,t,n,h,d,p,R,w,T),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}}function id(i,t,e,n,s,r,a,o){let l;if(t.side===Ge?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Kn,o),l===null)return null;rr.copy(o),rr.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(rr);return h<e.near||h>e.far?null:{distance:h,point:rr.clone(),object:i}}function ar(i,t,e,n,s,r,a,o,l,h){i.getVertexPosition(o,er),i.getVertexPosition(l,nr),i.getVertexPosition(h,ir);const d=id(i,t,e,n,er,nr,ir,El);if(d){const p=new F;sn.getBarycoord(El,er,nr,ir,p),s&&(d.uv=sn.getInterpolatedAttribute(s,o,l,h,p,new vt)),r&&(d.uv1=sn.getInterpolatedAttribute(r,o,l,h,p,new vt)),a&&(d.normal=sn.getInterpolatedAttribute(a,o,l,h,p,new F),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const c={a:o,b:l,c:h,normal:new F,materialIndex:0};sn.getNormal(er,nr,ir,c.normal),d.face=c,d.barycoord=p}return d}class ge extends Ye{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],h=[],d=[],p=[];let c=0,u=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new xe(h,3)),this.setAttribute("normal",new xe(d,3)),this.setAttribute("uv",new xe(p,2));function m(M,f,g,R,w,T,Y,U,I,X,Q){const v=T/I,E=Y/X,W=T/2,A=Y/2,z=U/2,$=I+1,_=X+1;let S=0,x=0;const C=new F;for(let L=0;L<_;L++){const N=L*E-A;for(let et=0;et<$;et++){const K=et*v-W;C[M]=K*R,C[f]=N*w,C[g]=z,h.push(C.x,C.y,C.z),C[M]=0,C[f]=0,C[g]=U>0?1:-1,d.push(C.x,C.y,C.z),p.push(et/I),p.push(1-L/X),S+=1}}for(let L=0;L<X;L++)for(let N=0;N<I;N++){const et=c+N+$*L,K=c+N+$*(L+1),B=c+(N+1)+$*(L+1),j=c+(N+1)+$*L;l.push(et,K,j),l.push(K,B,j),x+=6}o.addGroup(u,x,Q),u+=x,c+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ge(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function rs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ke(i){const t={};for(let e=0;e<i.length;e++){const n=rs(i[e]);for(const s in n)t[s]=n[s]}return t}function sd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function qc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const rd={clone:rs,merge:ke};var ad=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,od=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends as{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ad,this.fragmentShader=od,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rs(t.uniforms),this.uniformsGroups=sd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class $c extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=In}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gn=new F,bl=new vt,wl=new vt;class je extends $c{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Us*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ts*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Us*2*Math.atan(Math.tan(Ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z)}getViewSize(t,e){return this.getViewBounds(t,bl,wl),e.subVectors(wl,bl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ts*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/h,s*=a.width/l,n*=a.height/h}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Bi=-90,zi=1;class ld extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new je(Bi,zi,t,e);s.layers=this.layers,this.add(s);const r=new je(Bi,zi,t,e);r.layers=this.layers,this.add(r);const a=new je(Bi,zi,t,e);a.layers=this.layers,this.add(a);const o=new je(Bi,zi,t,e);o.layers=this.layers,this.add(o);const l=new je(Bi,zi,t,e);l.layers=this.layers,this.add(l);const h=new je(Bi,zi,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const h of e)this.remove(h);if(t===In)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ir)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,h,d]=this.children,p=t.getRenderTarget(),c=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),t.render(e,d),t.setRenderTarget(p,c,u),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Zc extends Oe{constructor(t,e,n,s,r,a,o,l,h,d){t=t!==void 0?t:[],e=e!==void 0?e:es,super(t,e,n,s,r,a,o,l,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class cd extends gi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Zc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ge(5,5,5),r=new Jn({name:"CubemapFromEquirect",uniforms:rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:$n});r.uniforms.tEquirect.value=e;const a=new Ht(s,r),o=e.minFilter;return e.minFilter===fi&&(e.minFilter=nn),new ld(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const pa=new F,hd=new F,ud=new Yt;class Xn{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=pa.subVectors(n,e).cross(hd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(pa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ud.getNormalMatrix(t),s=this.coplanarPoint(pa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ri=new zs,or=new F;class ko{constructor(t=new Xn,e=new Xn,n=new Xn,s=new Xn,r=new Xn,a=new Xn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=In){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],h=s[4],d=s[5],p=s[6],c=s[7],u=s[8],m=s[9],M=s[10],f=s[11],g=s[12],R=s[13],w=s[14],T=s[15];if(n[0].setComponents(l-r,c-h,f-u,T-g).normalize(),n[1].setComponents(l+r,c+h,f+u,T+g).normalize(),n[2].setComponents(l+a,c+d,f+m,T+R).normalize(),n[3].setComponents(l-a,c-d,f-m,T-R).normalize(),n[4].setComponents(l-o,c-p,f-M,T-w).normalize(),e===In)n[5].setComponents(l+o,c+p,f+M,T+w).normalize();else if(e===Ir)n[5].setComponents(o,p,M,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(t){return ri.center.set(0,0,0),ri.radius=.7071067811865476,ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(or.x=s.normal.x>0?t.max.x:t.min.x,or.y=s.normal.y>0?t.max.y:t.min.y,or.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(or)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function dd(i){const t=new WeakMap;function e(o,l){const h=o.array,d=o.usage,p=h.byteLength,c=i.createBuffer();i.bindBuffer(l,c),i.bufferData(l,h,d),o.onUploadCallback();let u;if(h instanceof Float32Array)u=i.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)u=i.SHORT;else if(h instanceof Uint32Array)u=i.UNSIGNED_INT;else if(h instanceof Int32Array)u=i.INT;else if(h instanceof Int8Array)u=i.BYTE;else if(h instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:c,type:u,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,h){const d=l.array,p=l.updateRanges;if(i.bindBuffer(h,o),p.length===0)i.bufferSubData(h,0,d);else{p.sort((u,m)=>u.start-m.start);let c=0;for(let u=1;u<p.length;u++){const m=p[c],M=p[u];M.start<=m.start+m.count+1?m.count=Math.max(m.count,M.start+M.count-m.start):(++c,p[c]=M)}p.length=c+1;for(let u=0,m=p.length;u<m;u++){const M=p[u];i.bufferSubData(h,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=t.get(o);if(h===void 0)t.set(o,e(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,l),h.version=o.version}}return{get:s,remove:r,update:a}}class yn extends Ye{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),h=o+1,d=l+1,p=t/o,c=e/l,u=[],m=[],M=[],f=[];for(let g=0;g<d;g++){const R=g*c-a;for(let w=0;w<h;w++){const T=w*p-r;m.push(T,-R,0),M.push(0,0,1),f.push(w/o),f.push(1-g/l)}}for(let g=0;g<l;g++)for(let R=0;R<o;R++){const w=R+h*g,T=R+h*(g+1),Y=R+1+h*(g+1),U=R+1+h*g;u.push(w,T,U),u.push(T,Y,U)}this.setIndex(u),this.setAttribute("position",new xe(m,3)),this.setAttribute("normal",new xe(M,3)),this.setAttribute("uv",new xe(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yn(t.width,t.height,t.widthSegments,t.heightSegments)}}var fd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pd=`#ifdef USE_ALPHAHASH
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
#endif`,md=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_d=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xd=`#ifdef USE_AOMAP
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
#endif`,Md=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yd=`#ifdef USE_BATCHING
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
#endif`,Sd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ed=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Td=`#ifdef USE_IRIDESCENCE
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
#endif`,Ad=`#ifdef USE_BUMPMAP
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
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Fd=`#define PI 3.141592653589793
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
} // validated`,Od=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bd=`vec3 transformedNormal = objectNormal;
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
#endif`,zd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wd=`
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
}`,Xd=`#ifdef USE_ENVMAP
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
#endif`,Yd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qd=`#ifdef USE_ENVMAP
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
#endif`,$d=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zd=`#ifdef USE_ENVMAP
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
#endif`,Kd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tf=`#ifdef USE_GRADIENTMAP
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
}`,ef=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rf=`uniform bool receiveShadow;
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
#endif`,af=`#ifdef USE_ENVMAP
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
#endif`,of=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uf=`PhysicalMaterial material;
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
#endif`,df=`struct PhysicalMaterial {
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
}`,ff=`
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
#endif`,pf=`#if defined( RE_IndirectDiffuse )
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
#endif`,mf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_f=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ef=`#if defined( USE_POINTS_UV )
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
#endif`,bf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Af=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cf=`#ifdef USE_MORPHTARGETS
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
#endif`,Pf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Df=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,If=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ff=`#ifdef USE_NORMALMAP
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
#endif`,Of=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$f=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jf=`float getShadowMask() {
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
}`,Qf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tp=`#ifdef USE_SKINNING
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
#endif`,ep=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,np=`#ifdef USE_SKINNING
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
#endif`,ip=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ap=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,op=`#ifdef USE_TRANSMISSION
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
#endif`,lp=`#ifdef USE_TRANSMISSION
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
#endif`,cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pp=`uniform sampler2D t2D;
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
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xp=`#include <common>
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
}`,Mp=`#if DEPTH_PACKING == 3200
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
}`,yp=`#define DISTANCE
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
}`,Sp=`#define DISTANCE
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
}`,Ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wp=`uniform float scale;
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
}`,Tp=`uniform vec3 diffuse;
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
}`,Ap=`#include <common>
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
}`,Rp=`uniform vec3 diffuse;
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
}`,Cp=`#define LAMBERT
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
}`,Pp=`#define LAMBERT
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
}`,Lp=`#define MATCAP
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
}`,Dp=`#define MATCAP
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
}`,Ip=`#define NORMAL
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
}`,Up=`#define NORMAL
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
}`,Np=`#define PHONG
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
}`,Fp=`#define PHONG
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
}`,Op=`#define STANDARD
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
}`,Bp=`#define STANDARD
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
}`,zp=`#define TOON
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
}`,kp=`#define TOON
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
}`,Hp=`uniform float size;
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
}`,Vp=`uniform vec3 diffuse;
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
}`,Gp=`#include <common>
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
}`,Wp=`uniform vec3 color;
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
}`,Xp=`uniform float rotation;
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
}`,Yp=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:fd,alphahash_pars_fragment:pd,alphamap_fragment:md,alphamap_pars_fragment:gd,alphatest_fragment:_d,alphatest_pars_fragment:vd,aomap_fragment:xd,aomap_pars_fragment:Md,batching_pars_vertex:yd,batching_vertex:Sd,begin_vertex:Ed,beginnormal_vertex:bd,bsdfs:wd,iridescence_fragment:Td,bumpmap_pars_fragment:Ad,clipping_planes_fragment:Rd,clipping_planes_pars_fragment:Cd,clipping_planes_pars_vertex:Pd,clipping_planes_vertex:Ld,color_fragment:Dd,color_pars_fragment:Id,color_pars_vertex:Ud,color_vertex:Nd,common:Fd,cube_uv_reflection_fragment:Od,defaultnormal_vertex:Bd,displacementmap_pars_vertex:zd,displacementmap_vertex:kd,emissivemap_fragment:Hd,emissivemap_pars_fragment:Vd,colorspace_fragment:Gd,colorspace_pars_fragment:Wd,envmap_fragment:Xd,envmap_common_pars_fragment:Yd,envmap_pars_fragment:qd,envmap_pars_vertex:$d,envmap_physical_pars_fragment:af,envmap_vertex:Zd,fog_vertex:Kd,fog_pars_vertex:jd,fog_fragment:Jd,fog_pars_fragment:Qd,gradientmap_pars_fragment:tf,lightmap_pars_fragment:ef,lights_lambert_fragment:nf,lights_lambert_pars_fragment:sf,lights_pars_begin:rf,lights_toon_fragment:of,lights_toon_pars_fragment:lf,lights_phong_fragment:cf,lights_phong_pars_fragment:hf,lights_physical_fragment:uf,lights_physical_pars_fragment:df,lights_fragment_begin:ff,lights_fragment_maps:pf,lights_fragment_end:mf,logdepthbuf_fragment:gf,logdepthbuf_pars_fragment:_f,logdepthbuf_pars_vertex:vf,logdepthbuf_vertex:xf,map_fragment:Mf,map_pars_fragment:yf,map_particle_fragment:Sf,map_particle_pars_fragment:Ef,metalnessmap_fragment:bf,metalnessmap_pars_fragment:wf,morphinstance_vertex:Tf,morphcolor_vertex:Af,morphnormal_vertex:Rf,morphtarget_pars_vertex:Cf,morphtarget_vertex:Pf,normal_fragment_begin:Lf,normal_fragment_maps:Df,normal_pars_fragment:If,normal_pars_vertex:Uf,normal_vertex:Nf,normalmap_pars_fragment:Ff,clearcoat_normal_fragment_begin:Of,clearcoat_normal_fragment_maps:Bf,clearcoat_pars_fragment:zf,iridescence_pars_fragment:kf,opaque_fragment:Hf,packing:Vf,premultiplied_alpha_fragment:Gf,project_vertex:Wf,dithering_fragment:Xf,dithering_pars_fragment:Yf,roughnessmap_fragment:qf,roughnessmap_pars_fragment:$f,shadowmap_pars_fragment:Zf,shadowmap_pars_vertex:Kf,shadowmap_vertex:jf,shadowmask_pars_fragment:Jf,skinbase_vertex:Qf,skinning_pars_vertex:tp,skinning_vertex:ep,skinnormal_vertex:np,specularmap_fragment:ip,specularmap_pars_fragment:sp,tonemapping_fragment:rp,tonemapping_pars_fragment:ap,transmission_fragment:op,transmission_pars_fragment:lp,uv_pars_fragment:cp,uv_pars_vertex:hp,uv_vertex:up,worldpos_vertex:dp,background_vert:fp,background_frag:pp,backgroundCube_vert:mp,backgroundCube_frag:gp,cube_vert:_p,cube_frag:vp,depth_vert:xp,depth_frag:Mp,distanceRGBA_vert:yp,distanceRGBA_frag:Sp,equirect_vert:Ep,equirect_frag:bp,linedashed_vert:wp,linedashed_frag:Tp,meshbasic_vert:Ap,meshbasic_frag:Rp,meshlambert_vert:Cp,meshlambert_frag:Pp,meshmatcap_vert:Lp,meshmatcap_frag:Dp,meshnormal_vert:Ip,meshnormal_frag:Up,meshphong_vert:Np,meshphong_frag:Fp,meshphysical_vert:Op,meshphysical_frag:Bp,meshtoon_vert:zp,meshtoon_frag:kp,points_vert:Hp,points_frag:Vp,shadow_vert:Gp,shadow_frag:Wp,sprite_vert:Xp,sprite_frag:Yp},yt={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},xn={basic:{uniforms:ke([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:ke([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:ke([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:ke([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:ke([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:ke([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:ke([yt.points,yt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:ke([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:ke([yt.common,yt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:ke([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:ke([yt.sprite,yt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:ke([yt.common,yt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:ke([yt.lights,yt.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};xn.physical={uniforms:ke([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const lr={r:0,b:0,g:0},ai=new rn,qp=new se;function $p(i,t,e,n,s,r,a){const o=new Vt(0);let l=r===!0?0:1,h,d,p=null,c=0,u=null;function m(R){let w=R.isScene===!0?R.background:null;return w&&w.isTexture&&(w=(R.backgroundBlurriness>0?e:t).get(w)),w}function M(R){let w=!1;const T=m(R);T===null?g(o,l):T&&T.isColor&&(g(T,1),w=!0);const Y=i.xr.getEnvironmentBlendMode();Y==="additive"?n.buffers.color.setClear(0,0,0,1,a):Y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(R,w){const T=m(w);T&&(T.isCubeTexture||T.mapping===Or)?(d===void 0&&(d=new Ht(new ge(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:rs(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(Y,U,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),ai.copy(w.backgroundRotation),ai.x*=-1,ai.y*=-1,ai.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),d.material.uniforms.envMap.value=T,d.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(qp.makeRotationFromEuler(ai)),d.material.toneMapped=ae.getTransfer(T.colorSpace)!==de,(p!==T||c!==T.version||u!==i.toneMapping)&&(d.material.needsUpdate=!0,p=T,c=T.version,u=i.toneMapping),d.layers.enableAll(),R.unshift(d,d.geometry,d.material,0,0,null)):T&&T.isTexture&&(h===void 0&&(h=new Ht(new yn(2,2),new Jn({name:"BackgroundMaterial",uniforms:rs(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=T,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.toneMapped=ae.getTransfer(T.colorSpace)!==de,T.matrixAutoUpdate===!0&&T.updateMatrix(),h.material.uniforms.uvTransform.value.copy(T.matrix),(p!==T||c!==T.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,p=T,c=T.version,u=i.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null))}function g(R,w){R.getRGB(lr,qc(i)),n.buffers.color.setClear(lr.r,lr.g,lr.b,w,a)}return{getClearColor:function(){return o},setClearColor:function(R,w=1){o.set(R),l=w,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(R){l=R,g(o,l)},render:M,addToRenderList:f}}function Zp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=c(null);let r=s,a=!1;function o(v,E,W,A,z){let $=!1;const _=p(A,W,E);r!==_&&(r=_,h(r.object)),$=u(v,A,W,z),$&&m(v,A,W,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,T(v,E,W,A),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return i.createVertexArray()}function h(v){return i.bindVertexArray(v)}function d(v){return i.deleteVertexArray(v)}function p(v,E,W){const A=W.wireframe===!0;let z=n[v.id];z===void 0&&(z={},n[v.id]=z);let $=z[E.id];$===void 0&&($={},z[E.id]=$);let _=$[A];return _===void 0&&(_=c(l()),$[A]=_),_}function c(v){const E=[],W=[],A=[];for(let z=0;z<e;z++)E[z]=0,W[z]=0,A[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:W,attributeDivisors:A,object:v,attributes:{},index:null}}function u(v,E,W,A){const z=r.attributes,$=E.attributes;let _=0;const S=W.getAttributes();for(const x in S)if(S[x].location>=0){const L=z[x];let N=$[x];if(N===void 0&&(x==="instanceMatrix"&&v.instanceMatrix&&(N=v.instanceMatrix),x==="instanceColor"&&v.instanceColor&&(N=v.instanceColor)),L===void 0||L.attribute!==N||N&&L.data!==N.data)return!0;_++}return r.attributesNum!==_||r.index!==A}function m(v,E,W,A){const z={},$=E.attributes;let _=0;const S=W.getAttributes();for(const x in S)if(S[x].location>=0){let L=$[x];L===void 0&&(x==="instanceMatrix"&&v.instanceMatrix&&(L=v.instanceMatrix),x==="instanceColor"&&v.instanceColor&&(L=v.instanceColor));const N={};N.attribute=L,L&&L.data&&(N.data=L.data),z[x]=N,_++}r.attributes=z,r.attributesNum=_,r.index=A}function M(){const v=r.newAttributes;for(let E=0,W=v.length;E<W;E++)v[E]=0}function f(v){g(v,0)}function g(v,E){const W=r.newAttributes,A=r.enabledAttributes,z=r.attributeDivisors;W[v]=1,A[v]===0&&(i.enableVertexAttribArray(v),A[v]=1),z[v]!==E&&(i.vertexAttribDivisor(v,E),z[v]=E)}function R(){const v=r.newAttributes,E=r.enabledAttributes;for(let W=0,A=E.length;W<A;W++)E[W]!==v[W]&&(i.disableVertexAttribArray(W),E[W]=0)}function w(v,E,W,A,z,$,_){_===!0?i.vertexAttribIPointer(v,E,W,z,$):i.vertexAttribPointer(v,E,W,A,z,$)}function T(v,E,W,A){M();const z=A.attributes,$=W.getAttributes(),_=E.defaultAttributeValues;for(const S in $){const x=$[S];if(x.location>=0){let C=z[S];if(C===void 0&&(S==="instanceMatrix"&&v.instanceMatrix&&(C=v.instanceMatrix),S==="instanceColor"&&v.instanceColor&&(C=v.instanceColor)),C!==void 0){const L=C.normalized,N=C.itemSize,et=t.get(C);if(et===void 0)continue;const K=et.buffer,B=et.type,j=et.bytesPerElement,st=B===i.INT||B===i.UNSIGNED_INT||C.gpuType===Co;if(C.isInterleavedBufferAttribute){const lt=C.data,mt=lt.stride,_t=C.offset;if(lt.isInstancedInterleavedBuffer){for(let Gt=0;Gt<x.locationSize;Gt++)g(x.location+Gt,lt.meshPerAttribute);v.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Gt=0;Gt<x.locationSize;Gt++)f(x.location+Gt);i.bindBuffer(i.ARRAY_BUFFER,K);for(let Gt=0;Gt<x.locationSize;Gt++)w(x.location+Gt,N/x.locationSize,B,L,mt*j,(_t+N/x.locationSize*Gt)*j,st)}else{if(C.isInstancedBufferAttribute){for(let lt=0;lt<x.locationSize;lt++)g(x.location+lt,C.meshPerAttribute);v.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let lt=0;lt<x.locationSize;lt++)f(x.location+lt);i.bindBuffer(i.ARRAY_BUFFER,K);for(let lt=0;lt<x.locationSize;lt++)w(x.location+lt,N/x.locationSize,B,L,N*j,N/x.locationSize*lt*j,st)}}else if(_!==void 0){const L=_[S];if(L!==void 0)switch(L.length){case 2:i.vertexAttrib2fv(x.location,L);break;case 3:i.vertexAttrib3fv(x.location,L);break;case 4:i.vertexAttrib4fv(x.location,L);break;default:i.vertexAttrib1fv(x.location,L)}}}}R()}function Y(){X();for(const v in n){const E=n[v];for(const W in E){const A=E[W];for(const z in A)d(A[z].object),delete A[z];delete E[W]}delete n[v]}}function U(v){if(n[v.id]===void 0)return;const E=n[v.id];for(const W in E){const A=E[W];for(const z in A)d(A[z].object),delete A[z];delete E[W]}delete n[v.id]}function I(v){for(const E in n){const W=n[E];if(W[v.id]===void 0)continue;const A=W[v.id];for(const z in A)d(A[z].object),delete A[z];delete W[v.id]}}function X(){Q(),a=!0,r!==s&&(r=s,h(r.object))}function Q(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:X,resetDefaultState:Q,dispose:Y,releaseStatesOfGeometry:U,releaseStatesOfProgram:I,initAttributes:M,enableAttribute:f,disableUnusedAttributes:R}}function Kp(i,t,e){let n;function s(h){n=h}function r(h,d){i.drawArrays(n,h,d),e.update(d,n,1)}function a(h,d,p){p!==0&&(i.drawArraysInstanced(n,h,d,p),e.update(d,n,p))}function o(h,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,d,0,p);let u=0;for(let m=0;m<p;m++)u+=d[m];e.update(u,n,1)}function l(h,d,p,c){if(p===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let m=0;m<h.length;m++)a(h[m],d[m],c[m]);else{u.multiDrawArraysInstancedWEBGL(n,h,0,d,0,c,0,p);let m=0;for(let M=0;M<p;M++)m+=d[M];for(let M=0;M<c.length;M++)e.update(m,n,c[M])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function jp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==pn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const X=I===Bs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Un&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Mn&&!X)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const d=l(h);d!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);const p=e.logarithmicDepthBuffer===!0,c=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(c===!0){const I=t.get("EXT_clip_control");I.clipControlEXT(I.LOWER_LEFT_EXT,I.ZERO_TO_ONE_EXT)}const u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),Y=m>0,U=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:p,reverseDepthBuffer:c,maxTextures:u,maxVertexTextures:m,maxTextureSize:M,maxCubemapSize:f,maxAttributes:g,maxVertexUniforms:R,maxVaryings:w,maxFragmentUniforms:T,vertexTextures:Y,maxSamples:U}}function Jp(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Xn,o=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,c){const u=p.length!==0||c||n!==0||s;return s=c,n=p.length,u},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,c){e=d(p,c,0)},this.setState=function(p,c,u){const m=p.clippingPlanes,M=p.clipIntersection,f=p.clipShadows,g=i.get(p);if(!s||m===null||m.length===0||r&&!f)r?d(null):h();else{const R=r?0:n,w=R*4;let T=g.clippingState||null;l.value=T,T=d(m,c,w,u);for(let Y=0;Y!==w;++Y)T[Y]=e[Y];g.clippingState=T,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=R}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(p,c,u,m){const M=p!==null?p.length:0;let f=null;if(M!==0){if(f=l.value,m!==!0||f===null){const g=u+M*4,R=c.matrixWorldInverse;o.getNormalMatrix(R),(f===null||f.length<g)&&(f=new Float32Array(g));for(let w=0,T=u;w!==M;++w,T+=4)a.copy(p[w]).applyMatrix4(R,o),a.normal.toArray(f,T),f[T+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,f}}function Qp(i){let t=new WeakMap;function e(a,o){return o===Wa?a.mapping=es:o===Xa&&(a.mapping=ns),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Wa||o===Xa)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const h=new cd(l.height);return h.fromEquirectangularTexture(i,a),t.set(a,h),a.addEventListener("dispose",s),e(h.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class jc extends $c{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Zi=4,Tl=[.125,.215,.35,.446,.526,.582],hi=20,ma=new jc,Al=new Vt;let ga=null,_a=0,va=0,xa=!1;const li=(1+Math.sqrt(5))/2,ki=1/li,Rl=[new F(-li,ki,0),new F(li,ki,0),new F(-ki,0,li),new F(ki,0,li),new F(0,li,-ki),new F(0,li,ki),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class yo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ga=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ll(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ga,_a,va),this._renderer.xr.enabled=xa,t.scissorTest=!1,cr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===es||t.mapping===ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ga=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Bs,format:pn,colorSpace:Qn,depthBuffer:!1},s=Cl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tm(r)),this._blurMaterial=em(r,t,e)}return s}_compileMaterial(t){const e=new Ht(this._lodPlanes[0],t);this._renderer.compile(e,ma)}_sceneToCubeUV(t,e,n,s){const o=new je(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,c=d.toneMapping;d.getClearColor(Al),d.toneMapping=Zn,d.autoClear=!1;const u=new mn({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),m=new Ht(new ge,u);let M=!1;const f=t.background;f?f.isColor&&(u.color.copy(f),t.background=null,M=!0):(u.color.copy(Al),M=!0);for(let g=0;g<6;g++){const R=g%3;R===0?(o.up.set(0,l[g],0),o.lookAt(h[g],0,0)):R===1?(o.up.set(0,0,l[g]),o.lookAt(0,h[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,h[g]));const w=this._cubeSize;cr(s,R*w,g>2?w:0,w,w),d.setRenderTarget(s),M&&d.render(m,o),d.render(t,o)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=c,d.autoClear=p,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===es||t.mapping===ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ll()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ht(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;cr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ma)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Rl[(s-r-1)%Rl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new Ht(this._lodPlanes[s],h),c=h.uniforms,u=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*hi-1),M=r/m,f=isFinite(r)?1+Math.floor(d*M):hi;f>hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${hi}`);const g=[];let R=0;for(let I=0;I<hi;++I){const X=I/M,Q=Math.exp(-X*X/2);g.push(Q),I===0?R+=Q:I<f&&(R+=2*Q)}for(let I=0;I<g.length;I++)g[I]=g[I]/R;c.envMap.value=t.texture,c.samples.value=f,c.weights.value=g,c.latitudinal.value=a==="latitudinal",o&&(c.poleAxis.value=o);const{_lodMax:w}=this;c.dTheta.value=m,c.mipInt.value=w-n;const T=this._sizeLods[s],Y=3*T*(s>w-Zi?s-w+Zi:0),U=4*(this._cubeSize-T);cr(e,Y,U,3*T,2*T),l.setRenderTarget(e),l.render(p,ma)}}function tm(i){const t=[],e=[],n=[];let s=i;const r=i-Zi+1+Tl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Zi?l=Tl[a-i+Zi-1]:a===0&&(l=0),n.push(l);const h=1/(o-2),d=-h,p=1+h,c=[d,d,p,d,p,p,d,d,p,p,d,p],u=6,m=6,M=3,f=2,g=1,R=new Float32Array(M*m*u),w=new Float32Array(f*m*u),T=new Float32Array(g*m*u);for(let U=0;U<u;U++){const I=U%3*2/3-1,X=U>2?0:-1,Q=[I,X,0,I+2/3,X,0,I+2/3,X+1,0,I,X,0,I+2/3,X+1,0,I,X+1,0];R.set(Q,M*m*U),w.set(c,f*m*U);const v=[U,U,U,U,U,U];T.set(v,g*m*U)}const Y=new Ye;Y.setAttribute("position",new Je(R,M)),Y.setAttribute("uv",new Je(w,f)),Y.setAttribute("faceIndex",new Je(T,g)),t.push(Y),s>Zi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Cl(i,t,e){const n=new gi(i,t,e);return n.texture.mapping=Or,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function cr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function em(i,t,e){const n=new Float32Array(hi),s=new F(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ho(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Pl(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ho(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Ll(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Ho(){return`

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
	`}function nm(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,h=l===Wa||l===Xa,d=l===es||l===ns;if(h||d){let p=t.get(o);const c=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==c)return e===null&&(e=new yo(i)),p=h?e.fromEquirectangular(o,p):e.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,t.set(o,p),p.texture;if(p!==void 0)return p.texture;{const u=o.image;return h&&u&&u.height>0||d&&u&&s(u)?(e===null&&(e=new yo(i)),p=h?e.fromEquirectangular(o):e.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,t.set(o,p),o.addEventListener("dispose",r),p.texture):null}}}return o}function s(o){let l=0;const h=6;for(let d=0;d<h;d++)o[d]!==void 0&&l++;return l===h}function r(o){const l=o.target;l.removeEventListener("dispose",r);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function im(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ar("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function sm(i,t,e,n){const s={},r=new WeakMap;function a(p){const c=p.target;c.index!==null&&t.remove(c.index);for(const m in c.attributes)t.remove(c.attributes[m]);for(const m in c.morphAttributes){const M=c.morphAttributes[m];for(let f=0,g=M.length;f<g;f++)t.remove(M[f])}c.removeEventListener("dispose",a),delete s[c.id];const u=r.get(c);u&&(t.remove(u),r.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,e.memory.geometries--}function o(p,c){return s[c.id]===!0||(c.addEventListener("dispose",a),s[c.id]=!0,e.memory.geometries++),c}function l(p){const c=p.attributes;for(const m in c)t.update(c[m],i.ARRAY_BUFFER);const u=p.morphAttributes;for(const m in u){const M=u[m];for(let f=0,g=M.length;f<g;f++)t.update(M[f],i.ARRAY_BUFFER)}}function h(p){const c=[],u=p.index,m=p.attributes.position;let M=0;if(u!==null){const R=u.array;M=u.version;for(let w=0,T=R.length;w<T;w+=3){const Y=R[w+0],U=R[w+1],I=R[w+2];c.push(Y,U,U,I,I,Y)}}else if(m!==void 0){const R=m.array;M=m.version;for(let w=0,T=R.length/3-1;w<T;w+=3){const Y=w+0,U=w+1,I=w+2;c.push(Y,U,U,I,I,Y)}}else return;const f=new(Hc(c)?Yc:Xc)(c,1);f.version=M;const g=r.get(p);g&&t.remove(g),r.set(p,f)}function d(p){const c=r.get(p);if(c){const u=p.index;u!==null&&c.version<u.version&&h(p)}else h(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:d}}function rm(i,t,e){let n;function s(c){n=c}let r,a;function o(c){r=c.type,a=c.bytesPerElement}function l(c,u){i.drawElements(n,u,r,c*a),e.update(u,n,1)}function h(c,u,m){m!==0&&(i.drawElementsInstanced(n,u,r,c*a,m),e.update(u,n,m))}function d(c,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,c,0,m);let f=0;for(let g=0;g<m;g++)f+=u[g];e.update(f,n,1)}function p(c,u,m,M){if(m===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)h(c[g]/a,u[g],M[g]);else{f.multiDrawElementsInstancedWEBGL(n,u,0,r,c,0,M,0,m);let g=0;for(let R=0;R<m;R++)g+=u[R];for(let R=0;R<M.length;R++)e.update(g,n,M[R])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function am(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function om(i,t,e){const n=new WeakMap,s=new ce;function r(a,o,l){const h=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0;let c=n.get(o);if(c===void 0||c.count!==p){let Q=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",Q)};c!==void 0&&c.texture.dispose();const u=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let w=0;u===!0&&(w=1),m===!0&&(w=2),M===!0&&(w=3);let T=o.attributes.position.count*w,Y=1;T>t.maxTextureSize&&(Y=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const U=new Float32Array(T*Y*4*p),I=new Gc(U,T,Y,p);I.type=Mn,I.needsUpdate=!0;const X=w*4;for(let v=0;v<p;v++){const E=f[v],W=g[v],A=R[v],z=T*Y*4*v;for(let $=0;$<E.count;$++){const _=$*X;u===!0&&(s.fromBufferAttribute(E,$),U[z+_+0]=s.x,U[z+_+1]=s.y,U[z+_+2]=s.z,U[z+_+3]=0),m===!0&&(s.fromBufferAttribute(W,$),U[z+_+4]=s.x,U[z+_+5]=s.y,U[z+_+6]=s.z,U[z+_+7]=0),M===!0&&(s.fromBufferAttribute(A,$),U[z+_+8]=s.x,U[z+_+9]=s.y,U[z+_+10]=s.z,U[z+_+11]=A.itemSize===4?s.w:1)}}c={count:p,texture:I,size:new vt(T,Y)},n.set(o,c),o.addEventListener("dispose",Q)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let u=0;for(let M=0;M<h.length;M++)u+=h[M];const m=o.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",h)}l.getUniforms().setValue(i,"morphTargetsTexture",c.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",c.size)}return{update:r}}function lm(i,t,e,n){let s=new WeakMap;function r(l){const h=n.render.frame,d=l.geometry,p=t.get(l,d);if(s.get(p)!==h&&(t.update(p),s.set(p,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const c=l.skeleton;s.get(c)!==h&&(c.update(),s.set(c,h))}return p}function a(){s=new WeakMap}function o(l){const h=l.target;h.removeEventListener("dispose",o),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}class Jc extends Oe{constructor(t,e,n,s,r,a,o,l,h,d=Ji){if(d!==Ji&&d!==ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Ji&&(n=mi),n===void 0&&d===ss&&(n=is),super(null,s,r,a,o,l,d,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Xe,this.minFilter=l!==void 0?l:Xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Qc=new Oe,Dl=new Jc(1,1),th=new Gc,eh=new qu,nh=new Zc,Il=[],Ul=[],Nl=new Float32Array(16),Fl=new Float32Array(9),Ol=new Float32Array(4);function os(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Il[s];if(r===void 0&&(r=new Float32Array(s),Il[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Se(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ee(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function zr(i,t){let e=Ul[t];e===void 0&&(e=new Int32Array(t),Ul[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function cm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function hm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2fv(this.addr,t),Ee(e,t)}}function um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;i.uniform3fv(this.addr,t),Ee(e,t)}}function dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4fv(this.addr,t),Ee(e,t)}}function fm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;Ol.set(n),i.uniformMatrix2fv(this.addr,!1,Ol),Ee(e,n)}}function pm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;Fl.set(n),i.uniformMatrix3fv(this.addr,!1,Fl),Ee(e,n)}}function mm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;Nl.set(n),i.uniformMatrix4fv(this.addr,!1,Nl),Ee(e,n)}}function gm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function _m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2iv(this.addr,t),Ee(e,t)}}function vm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3iv(this.addr,t),Ee(e,t)}}function xm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4iv(this.addr,t),Ee(e,t)}}function Mm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ym(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2uiv(this.addr,t),Ee(e,t)}}function Sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3uiv(this.addr,t),Ee(e,t)}}function Em(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4uiv(this.addr,t),Ee(e,t)}}function bm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Dl.compareFunction=kc,r=Dl):r=Qc,e.setTexture2D(t||r,s)}function wm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||eh,s)}function Tm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||nh,s)}function Am(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||th,s)}function Rm(i){switch(i){case 5126:return cm;case 35664:return hm;case 35665:return um;case 35666:return dm;case 35674:return fm;case 35675:return pm;case 35676:return mm;case 5124:case 35670:return gm;case 35667:case 35671:return _m;case 35668:case 35672:return vm;case 35669:case 35673:return xm;case 5125:return Mm;case 36294:return ym;case 36295:return Sm;case 36296:return Em;case 35678:case 36198:case 36298:case 36306:case 35682:return bm;case 35679:case 36299:case 36307:return wm;case 35680:case 36300:case 36308:case 36293:return Tm;case 36289:case 36303:case 36311:case 36292:return Am}}function Cm(i,t){i.uniform1fv(this.addr,t)}function Pm(i,t){const e=os(t,this.size,2);i.uniform2fv(this.addr,e)}function Lm(i,t){const e=os(t,this.size,3);i.uniform3fv(this.addr,e)}function Dm(i,t){const e=os(t,this.size,4);i.uniform4fv(this.addr,e)}function Im(i,t){const e=os(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Um(i,t){const e=os(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Nm(i,t){const e=os(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Fm(i,t){i.uniform1iv(this.addr,t)}function Om(i,t){i.uniform2iv(this.addr,t)}function Bm(i,t){i.uniform3iv(this.addr,t)}function zm(i,t){i.uniform4iv(this.addr,t)}function km(i,t){i.uniform1uiv(this.addr,t)}function Hm(i,t){i.uniform2uiv(this.addr,t)}function Vm(i,t){i.uniform3uiv(this.addr,t)}function Gm(i,t){i.uniform4uiv(this.addr,t)}function Wm(i,t,e){const n=this.cache,s=t.length,r=zr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Qc,r[a])}function Xm(i,t,e){const n=this.cache,s=t.length,r=zr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||eh,r[a])}function Ym(i,t,e){const n=this.cache,s=t.length,r=zr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||nh,r[a])}function qm(i,t,e){const n=this.cache,s=t.length,r=zr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||th,r[a])}function $m(i){switch(i){case 5126:return Cm;case 35664:return Pm;case 35665:return Lm;case 35666:return Dm;case 35674:return Im;case 35675:return Um;case 35676:return Nm;case 5124:case 35670:return Fm;case 35667:case 35671:return Om;case 35668:case 35672:return Bm;case 35669:case 35673:return zm;case 5125:return km;case 36294:return Hm;case 36295:return Vm;case 36296:return Gm;case 35678:case 36198:case 36298:case 36306:case 35682:return Wm;case 35679:case 36299:case 36307:return Xm;case 35680:case 36300:case 36308:case 36293:return Ym;case 36289:case 36303:case 36311:case 36292:return qm}}class Zm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Rm(e.type)}}class Km{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$m(e.type)}}class jm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Ma=/(\w+)(\])?(\[|\.)?/g;function Bl(i,t){i.seq.push(t),i.map[t.id]=t}function Jm(i,t,e){const n=i.name,s=n.length;for(Ma.lastIndex=0;;){const r=Ma.exec(n),a=Ma.lastIndex;let o=r[1];const l=r[2]==="]",h=r[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===s){Bl(e,h===void 0?new Zm(o,i,t):new Km(o,i,t));break}else{let p=e.map[o];p===void 0&&(p=new jm(o),Bl(e,p)),e=p}}}class Rr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Jm(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function zl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Qm=37297;let t0=0;function e0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function n0(i){const t=ae.getPrimaries(ae.workingColorSpace),e=ae.getPrimaries(i);let n;switch(t===e?n="":t===Dr&&e===Lr?n="LinearDisplayP3ToLinearSRGB":t===Lr&&e===Dr&&(n="LinearSRGBToLinearDisplayP3"),i){case Qn:case Br:return[n,"LinearTransferOETF"];case Fe:case Fo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function kl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+e0(i.getShaderSource(t),a)}else return s}function i0(i,t){const e=n0(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function s0(i,t){let e;switch(t){case ru:e="Linear";break;case au:e="Reinhard";break;case ou:e="Cineon";break;case Rc:e="ACESFilmic";break;case cu:e="AgX";break;case hu:e="Neutral";break;case lu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const hr=new F;function r0(){ae.getLuminanceCoefficients(hr);const i=hr.x.toFixed(4),t=hr.y.toFixed(4),e=hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function a0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ws).join(`
`)}function o0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function l0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ws(i){return i!==""}function Hl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const c0=/^[ \t]*#include +<([\w\d./]+)>/gm;function So(i){return i.replace(c0,u0)}const h0=new Map;function u0(i,t){let e=Xt[t];if(e===void 0){const n=h0.get(t);if(n!==void 0)e=Xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return So(e)}const d0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gl(i){return i.replace(d0,f0)}function f0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function p0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===wc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Tc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Dn&&(t="SHADOWMAP_TYPE_VSM"),t}function m0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case es:case ns:t="ENVMAP_TYPE_CUBE";break;case Or:t="ENVMAP_TYPE_CUBE_UV";break}return t}function g0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ns:t="ENVMAP_MODE_REFRACTION";break}return t}function _0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ac:t="ENVMAP_BLENDING_MULTIPLY";break;case iu:t="ENVMAP_BLENDING_MIX";break;case su:t="ENVMAP_BLENDING_ADD";break}return t}function v0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function x0(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=p0(e),h=m0(e),d=g0(e),p=_0(e),c=v0(e),u=a0(e),m=o0(r),M=s.createProgram();let f,g,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ws).join(`
`),f.length>0&&(f+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ws).join(`
`),g.length>0&&(g+=`
`)):(f=[Wl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ws).join(`
`),g=[Wl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMap?"#define "+p:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zn?"#define TONE_MAPPING":"",e.toneMapping!==Zn?Xt.tonemapping_pars_fragment:"",e.toneMapping!==Zn?s0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,i0("linearToOutputTexel",e.outputColorSpace),r0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ws).join(`
`)),a=So(a),a=Hl(a,e),a=Vl(a,e),o=So(o),o=Hl(o,e),o=Vl(o,e),a=Gl(a),o=Gl(o),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,f=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,g=["#define varying in",e.glslVersion===ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const w=R+f+a,T=R+g+o,Y=zl(s,s.VERTEX_SHADER,w),U=zl(s,s.FRAGMENT_SHADER,T);s.attachShader(M,Y),s.attachShader(M,U),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function I(E){if(i.debug.checkShaderErrors){const W=s.getProgramInfoLog(M).trim(),A=s.getShaderInfoLog(Y).trim(),z=s.getShaderInfoLog(U).trim();let $=!0,_=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,Y,U);else{const S=kl(s,Y,"vertex"),x=kl(s,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+W+`
`+S+`
`+x)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(A===""||z==="")&&(_=!1);_&&(E.diagnostics={runnable:$,programLog:W,vertexShader:{log:A,prefix:f},fragmentShader:{log:z,prefix:g}})}s.deleteShader(Y),s.deleteShader(U),X=new Rr(s,M),Q=l0(s,M)}let X;this.getUniforms=function(){return X===void 0&&I(this),X};let Q;this.getAttributes=function(){return Q===void 0&&I(this),Q};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(M,Qm)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=t0++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=Y,this.fragmentShader=U,this}let M0=0;class y0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new S0(t),e.set(t,n)),n}}class S0{constructor(t){this.id=M0++,this.code=t,this.usedTimes=0}}function E0(i,t,e,n,s,r,a){const o=new zo,l=new y0,h=new Set,d=[],p=s.logarithmicDepthBuffer,c=s.reverseDepthBuffer,u=s.vertexTextures;let m=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v){return h.add(v),v===0?"uv":`uv${v}`}function g(v,E,W,A,z){const $=A.fog,_=z.geometry,S=v.isMeshStandardMaterial?A.environment:null,x=(v.isMeshStandardMaterial?e:t).get(v.envMap||S),C=x&&x.mapping===Or?x.image.height:null,L=M[v.type];v.precision!==null&&(m=s.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const N=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,et=N!==void 0?N.length:0;let K=0;_.morphAttributes.position!==void 0&&(K=1),_.morphAttributes.normal!==void 0&&(K=2),_.morphAttributes.color!==void 0&&(K=3);let B,j,st,lt;if(L){const Le=xn[L];B=Le.vertexShader,j=Le.fragmentShader}else B=v.vertexShader,j=v.fragmentShader,l.update(v),st=l.getVertexShaderID(v),lt=l.getFragmentShaderID(v);const mt=i.getRenderTarget(),_t=z.isInstancedMesh===!0,Gt=z.isBatchedMesh===!0,$t=!!v.map,kt=!!v.matcap,O=!!x,fe=!!v.aoMap,Ut=!!v.lightMap,Wt=!!v.bumpMap,Bt=!!v.normalMap,he=!!v.displacementMap,Pt=!!v.emissiveMap,P=!!v.metalnessMap,y=!!v.roughnessMap,Z=v.anisotropy>0,at=v.clearcoat>0,ut=v.dispersion>0,rt=v.iridescence>0,Lt=v.sheen>0,xt=v.transmission>0,At=Z&&!!v.anisotropyMap,Jt=at&&!!v.clearcoatMap,dt=at&&!!v.clearcoatNormalMap,Ct=at&&!!v.clearcoatRoughnessMap,It=rt&&!!v.iridescenceMap,zt=rt&&!!v.iridescenceThicknessMap,Rt=Lt&&!!v.sheenColorMap,Ot=Lt&&!!v.sheenRoughnessMap,Nt=!!v.specularMap,ee=!!v.specularColorMap,H=!!v.specularIntensityMap,wt=xt&&!!v.transmissionMap,nt=xt&&!!v.thicknessMap,ct=!!v.gradientMap,Et=!!v.alphaMap,Mt=v.alphaTest>0,Zt=!!v.alphaHash,pe=!!v.extensions;let be=Zn;v.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(be=i.toneMapping);const te={shaderID:L,shaderType:v.type,shaderName:v.name,vertexShader:B,fragmentShader:j,defines:v.defines,customVertexShaderID:st,customFragmentShaderID:lt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,batching:Gt,batchingColor:Gt&&z._colorsTexture!==null,instancing:_t,instancingColor:_t&&z.instanceColor!==null,instancingMorph:_t&&z.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:mt===null?i.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:Qn,alphaToCoverage:!!v.alphaToCoverage,map:$t,matcap:kt,envMap:O,envMapMode:O&&x.mapping,envMapCubeUVHeight:C,aoMap:fe,lightMap:Ut,bumpMap:Wt,normalMap:Bt,displacementMap:u&&he,emissiveMap:Pt,normalMapObjectSpace:Bt&&v.normalMapType===pu,normalMapTangentSpace:Bt&&v.normalMapType===zc,metalnessMap:P,roughnessMap:y,anisotropy:Z,anisotropyMap:At,clearcoat:at,clearcoatMap:Jt,clearcoatNormalMap:dt,clearcoatRoughnessMap:Ct,dispersion:ut,iridescence:rt,iridescenceMap:It,iridescenceThicknessMap:zt,sheen:Lt,sheenColorMap:Rt,sheenRoughnessMap:Ot,specularMap:Nt,specularColorMap:ee,specularIntensityMap:H,transmission:xt,transmissionMap:wt,thicknessMap:nt,gradientMap:ct,opaque:v.transparent===!1&&v.blending===pi&&v.alphaToCoverage===!1,alphaMap:Et,alphaTest:Mt,alphaHash:Zt,combine:v.combine,mapUv:$t&&f(v.map.channel),aoMapUv:fe&&f(v.aoMap.channel),lightMapUv:Ut&&f(v.lightMap.channel),bumpMapUv:Wt&&f(v.bumpMap.channel),normalMapUv:Bt&&f(v.normalMap.channel),displacementMapUv:he&&f(v.displacementMap.channel),emissiveMapUv:Pt&&f(v.emissiveMap.channel),metalnessMapUv:P&&f(v.metalnessMap.channel),roughnessMapUv:y&&f(v.roughnessMap.channel),anisotropyMapUv:At&&f(v.anisotropyMap.channel),clearcoatMapUv:Jt&&f(v.clearcoatMap.channel),clearcoatNormalMapUv:dt&&f(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&f(v.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&f(v.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&f(v.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&f(v.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&f(v.sheenRoughnessMap.channel),specularMapUv:Nt&&f(v.specularMap.channel),specularColorMapUv:ee&&f(v.specularColorMap.channel),specularIntensityMapUv:H&&f(v.specularIntensityMap.channel),transmissionMapUv:wt&&f(v.transmissionMap.channel),thicknessMapUv:nt&&f(v.thicknessMap.channel),alphaMapUv:Et&&f(v.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(Bt||Z),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!_.attributes.uv&&($t||Et),fog:!!$,useFog:v.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:c,skinning:z.isSkinnedMesh===!0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:K,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&W.length>0,shadowMapType:i.shadowMap.type,toneMapping:be,decodeVideoTexture:$t&&v.map.isVideoTexture===!0&&ae.getTransfer(v.map.colorSpace)===de,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===dn,flipSided:v.side===Ge,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:pe&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&v.extensions.multiDraw===!0||Gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return te.vertexUv1s=h.has(1),te.vertexUv2s=h.has(2),te.vertexUv3s=h.has(3),h.clear(),te}function R(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const W in v.defines)E.push(W),E.push(v.defines[W]);return v.isRawShaderMaterial===!1&&(w(E,v),T(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function w(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function T(v,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reverseDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.alphaToCoverage&&o.enable(20),v.push(o.mask)}function Y(v){const E=M[v.type];let W;if(E){const A=xn[E];W=rd.clone(A.uniforms)}else W=v.uniforms;return W}function U(v,E){let W;for(let A=0,z=d.length;A<z;A++){const $=d[A];if($.cacheKey===E){W=$,++W.usedTimes;break}}return W===void 0&&(W=new x0(i,E,v,r),d.push(W)),W}function I(v){if(--v.usedTimes===0){const E=d.indexOf(v);d[E]=d[d.length-1],d.pop(),v.destroy()}}function X(v){l.remove(v)}function Q(){l.dispose()}return{getParameters:g,getProgramCacheKey:R,getUniforms:Y,acquireProgram:U,releaseProgram:I,releaseShaderCache:X,programs:d,dispose:Q}}function b0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function w0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Xl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Yl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(p,c,u,m,M,f){let g=i[t];return g===void 0?(g={id:p.id,object:p,geometry:c,material:u,groupOrder:m,renderOrder:p.renderOrder,z:M,group:f},i[t]=g):(g.id=p.id,g.object=p,g.geometry=c,g.material=u,g.groupOrder=m,g.renderOrder=p.renderOrder,g.z=M,g.group=f),t++,g}function o(p,c,u,m,M,f){const g=a(p,c,u,m,M,f);u.transmission>0?n.push(g):u.transparent===!0?s.push(g):e.push(g)}function l(p,c,u,m,M,f){const g=a(p,c,u,m,M,f);u.transmission>0?n.unshift(g):u.transparent===!0?s.unshift(g):e.unshift(g)}function h(p,c){e.length>1&&e.sort(p||w0),n.length>1&&n.sort(c||Xl),s.length>1&&s.sort(c||Xl)}function d(){for(let p=t,c=i.length;p<c;p++){const u=i[p];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:d,sort:h}}function T0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Yl,i.set(n,[a])):s>=r.length?(a=new Yl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function A0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Vt};break;case"SpotLight":e={position:new F,direction:new F,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function R0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let C0=0;function P0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function L0(i){const t=new A0,e=R0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new F);const s=new F,r=new se,a=new se;function o(h){let d=0,p=0,c=0;for(let Q=0;Q<9;Q++)n.probe[Q].set(0,0,0);let u=0,m=0,M=0,f=0,g=0,R=0,w=0,T=0,Y=0,U=0,I=0;h.sort(P0);for(let Q=0,v=h.length;Q<v;Q++){const E=h[Q],W=E.color,A=E.intensity,z=E.distance,$=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)d+=W.r*A,p+=W.g*A,c+=W.b*A;else if(E.isLightProbe){for(let _=0;_<9;_++)n.probe[_].addScaledVector(E.sh.coefficients[_],A);I++}else if(E.isDirectionalLight){const _=t.get(E);if(_.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const S=E.shadow,x=e.get(E);x.shadowIntensity=S.intensity,x.shadowBias=S.bias,x.shadowNormalBias=S.normalBias,x.shadowRadius=S.radius,x.shadowMapSize=S.mapSize,n.directionalShadow[u]=x,n.directionalShadowMap[u]=$,n.directionalShadowMatrix[u]=E.shadow.matrix,R++}n.directional[u]=_,u++}else if(E.isSpotLight){const _=t.get(E);_.position.setFromMatrixPosition(E.matrixWorld),_.color.copy(W).multiplyScalar(A),_.distance=z,_.coneCos=Math.cos(E.angle),_.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),_.decay=E.decay,n.spot[M]=_;const S=E.shadow;if(E.map&&(n.spotLightMap[Y]=E.map,Y++,S.updateMatrices(E),E.castShadow&&U++),n.spotLightMatrix[M]=S.matrix,E.castShadow){const x=e.get(E);x.shadowIntensity=S.intensity,x.shadowBias=S.bias,x.shadowNormalBias=S.normalBias,x.shadowRadius=S.radius,x.shadowMapSize=S.mapSize,n.spotShadow[M]=x,n.spotShadowMap[M]=$,T++}M++}else if(E.isRectAreaLight){const _=t.get(E);_.color.copy(W).multiplyScalar(A),_.halfWidth.set(E.width*.5,0,0),_.halfHeight.set(0,E.height*.5,0),n.rectArea[f]=_,f++}else if(E.isPointLight){const _=t.get(E);if(_.color.copy(E.color).multiplyScalar(E.intensity),_.distance=E.distance,_.decay=E.decay,E.castShadow){const S=E.shadow,x=e.get(E);x.shadowIntensity=S.intensity,x.shadowBias=S.bias,x.shadowNormalBias=S.normalBias,x.shadowRadius=S.radius,x.shadowMapSize=S.mapSize,x.shadowCameraNear=S.camera.near,x.shadowCameraFar=S.camera.far,n.pointShadow[m]=x,n.pointShadowMap[m]=$,n.pointShadowMatrix[m]=E.shadow.matrix,w++}n.point[m]=_,m++}else if(E.isHemisphereLight){const _=t.get(E);_.skyColor.copy(E.color).multiplyScalar(A),_.groundColor.copy(E.groundColor).multiplyScalar(A),n.hemi[g]=_,g++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=c;const X=n.hash;(X.directionalLength!==u||X.pointLength!==m||X.spotLength!==M||X.rectAreaLength!==f||X.hemiLength!==g||X.numDirectionalShadows!==R||X.numPointShadows!==w||X.numSpotShadows!==T||X.numSpotMaps!==Y||X.numLightProbes!==I)&&(n.directional.length=u,n.spot.length=M,n.rectArea.length=f,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=T+Y-U,n.spotLightMap.length=Y,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=I,X.directionalLength=u,X.pointLength=m,X.spotLength=M,X.rectAreaLength=f,X.hemiLength=g,X.numDirectionalShadows=R,X.numPointShadows=w,X.numSpotShadows=T,X.numSpotMaps=Y,X.numLightProbes=I,n.version=C0++)}function l(h,d){let p=0,c=0,u=0,m=0,M=0;const f=d.matrixWorldInverse;for(let g=0,R=h.length;g<R;g++){const w=h[g];if(w.isDirectionalLight){const T=n.directional[p];T.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),p++}else if(w.isSpotLight){const T=n.spot[u];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),u++}else if(w.isRectAreaLight){const T=n.rectArea[m];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(f),a.identity(),r.copy(w.matrixWorld),r.premultiply(f),a.extractRotation(r),T.halfWidth.set(w.width*.5,0,0),T.halfHeight.set(0,w.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),m++}else if(w.isPointLight){const T=n.point[c];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(f),c++}else if(w.isHemisphereLight){const T=n.hemi[M];T.direction.setFromMatrixPosition(w.matrixWorld),T.direction.transformDirection(f),M++}}}return{setup:o,setupView:l,state:n}}function ql(i){const t=new L0(i),e=[],n=[];function s(d){h.camera=d,e.length=0,n.length=0}function r(d){e.push(d)}function a(d){n.push(d)}function o(){t.setup(e)}function l(d){t.setupView(e,d)}const h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function D0(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new ql(i),t.set(s,[o])):r>=a.length?(o=new ql(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class I0 extends as{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=du,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class U0 extends as{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const N0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,F0=`uniform sampler2D shadow_pass;
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
}`;function O0(i,t,e){let n=new ko;const s=new vt,r=new vt,a=new ce,o=new I0({depthPacking:fu}),l=new U0,h={},d=e.maxTextureSize,p={[Kn]:Ge,[Ge]:Kn,[dn]:dn},c=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:N0,fragmentShader:F0}),u=c.clone();u.defines.HORIZONTAL_PASS=1;const m=new Ye;m.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Ht(m,c),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wc;let g=this.type;this.render=function(U,I,X){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||U.length===0)return;const Q=i.getRenderTarget(),v=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),W=i.state;W.setBlending($n),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const A=g!==Dn&&this.type===Dn,z=g===Dn&&this.type!==Dn;for(let $=0,_=U.length;$<_;$++){const S=U[$],x=S.shadow;if(x===void 0){console.warn("THREE.WebGLShadowMap:",S,"has no shadow.");continue}if(x.autoUpdate===!1&&x.needsUpdate===!1)continue;s.copy(x.mapSize);const C=x.getFrameExtents();if(s.multiply(C),r.copy(x.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/C.x),s.x=r.x*C.x,x.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/C.y),s.y=r.y*C.y,x.mapSize.y=r.y)),x.map===null||A===!0||z===!0){const N=this.type!==Dn?{minFilter:Xe,magFilter:Xe}:{};x.map!==null&&x.map.dispose(),x.map=new gi(s.x,s.y,N),x.map.texture.name=S.name+".shadowMap",x.camera.updateProjectionMatrix()}i.setRenderTarget(x.map),i.clear();const L=x.getViewportCount();for(let N=0;N<L;N++){const et=x.getViewport(N);a.set(r.x*et.x,r.y*et.y,r.x*et.z,r.y*et.w),W.viewport(a),x.updateMatrices(S,N),n=x.getFrustum(),T(I,X,x.camera,S,this.type)}x.isPointLightShadow!==!0&&this.type===Dn&&R(x,X),x.needsUpdate=!1}g=this.type,f.needsUpdate=!1,i.setRenderTarget(Q,v,E)};function R(U,I){const X=t.update(M);c.defines.VSM_SAMPLES!==U.blurSamples&&(c.defines.VSM_SAMPLES=U.blurSamples,u.defines.VSM_SAMPLES=U.blurSamples,c.needsUpdate=!0,u.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new gi(s.x,s.y)),c.uniforms.shadow_pass.value=U.map.texture,c.uniforms.resolution.value=U.mapSize,c.uniforms.radius.value=U.radius,i.setRenderTarget(U.mapPass),i.clear(),i.renderBufferDirect(I,null,X,c,M,null),u.uniforms.shadow_pass.value=U.mapPass.texture,u.uniforms.resolution.value=U.mapSize,u.uniforms.radius.value=U.radius,i.setRenderTarget(U.map),i.clear(),i.renderBufferDirect(I,null,X,u,M,null)}function w(U,I,X,Q){let v=null;const E=X.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(E!==void 0)v=E;else if(v=X.isPointLight===!0?l:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const W=v.uuid,A=I.uuid;let z=h[W];z===void 0&&(z={},h[W]=z);let $=z[A];$===void 0&&($=v.clone(),z[A]=$,I.addEventListener("dispose",Y)),v=$}if(v.visible=I.visible,v.wireframe=I.wireframe,Q===Dn?v.side=I.shadowSide!==null?I.shadowSide:I.side:v.side=I.shadowSide!==null?I.shadowSide:p[I.side],v.alphaMap=I.alphaMap,v.alphaTest=I.alphaTest,v.map=I.map,v.clipShadows=I.clipShadows,v.clippingPlanes=I.clippingPlanes,v.clipIntersection=I.clipIntersection,v.displacementMap=I.displacementMap,v.displacementScale=I.displacementScale,v.displacementBias=I.displacementBias,v.wireframeLinewidth=I.wireframeLinewidth,v.linewidth=I.linewidth,X.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const W=i.properties.get(v);W.light=X}return v}function T(U,I,X,Q,v){if(U.visible===!1)return;if(U.layers.test(I.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&v===Dn)&&(!U.frustumCulled||n.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,U.matrixWorld);const A=t.update(U),z=U.material;if(Array.isArray(z)){const $=A.groups;for(let _=0,S=$.length;_<S;_++){const x=$[_],C=z[x.materialIndex];if(C&&C.visible){const L=w(U,C,Q,v);U.onBeforeShadow(i,U,I,X,A,L,x),i.renderBufferDirect(X,null,A,L,U,x),U.onAfterShadow(i,U,I,X,A,L,x)}}}else if(z.visible){const $=w(U,z,Q,v);U.onBeforeShadow(i,U,I,X,A,$,null),i.renderBufferDirect(X,null,A,$,U,null),U.onAfterShadow(i,U,I,X,A,$,null)}}const W=U.children;for(let A=0,z=W.length;A<z;A++)T(W[A],I,X,Q,v)}function Y(U){U.target.removeEventListener("dispose",Y);for(const X in h){const Q=h[X],v=U.target.uuid;v in Q&&(Q[v].dispose(),delete Q[v])}}}const B0={[Oa]:Ba,[za]:Va,[ka]:Ga,[ts]:Ha,[Ba]:Oa,[Va]:za,[Ga]:ka,[Ha]:ts};function z0(i){function t(){let H=!1;const wt=new ce;let nt=null;const ct=new ce(0,0,0,0);return{setMask:function(Et){nt!==Et&&!H&&(i.colorMask(Et,Et,Et,Et),nt=Et)},setLocked:function(Et){H=Et},setClear:function(Et,Mt,Zt,pe,be){be===!0&&(Et*=pe,Mt*=pe,Zt*=pe),wt.set(Et,Mt,Zt,pe),ct.equals(wt)===!1&&(i.clearColor(Et,Mt,Zt,pe),ct.copy(wt))},reset:function(){H=!1,nt=null,ct.set(-1,0,0,0)}}}function e(){let H=!1,wt=!1,nt=null,ct=null,Et=null;return{setReversed:function(Mt){wt=Mt},setTest:function(Mt){Mt?st(i.DEPTH_TEST):lt(i.DEPTH_TEST)},setMask:function(Mt){nt!==Mt&&!H&&(i.depthMask(Mt),nt=Mt)},setFunc:function(Mt){if(wt&&(Mt=B0[Mt]),ct!==Mt){switch(Mt){case Oa:i.depthFunc(i.NEVER);break;case Ba:i.depthFunc(i.ALWAYS);break;case za:i.depthFunc(i.LESS);break;case ts:i.depthFunc(i.LEQUAL);break;case ka:i.depthFunc(i.EQUAL);break;case Ha:i.depthFunc(i.GEQUAL);break;case Va:i.depthFunc(i.GREATER);break;case Ga:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ct=Mt}},setLocked:function(Mt){H=Mt},setClear:function(Mt){Et!==Mt&&(i.clearDepth(Mt),Et=Mt)},reset:function(){H=!1,nt=null,ct=null,Et=null}}}function n(){let H=!1,wt=null,nt=null,ct=null,Et=null,Mt=null,Zt=null,pe=null,be=null;return{setTest:function(te){H||(te?st(i.STENCIL_TEST):lt(i.STENCIL_TEST))},setMask:function(te){wt!==te&&!H&&(i.stencilMask(te),wt=te)},setFunc:function(te,Le,an){(nt!==te||ct!==Le||Et!==an)&&(i.stencilFunc(te,Le,an),nt=te,ct=Le,Et=an)},setOp:function(te,Le,an){(Mt!==te||Zt!==Le||pe!==an)&&(i.stencilOp(te,Le,an),Mt=te,Zt=Le,pe=an)},setLocked:function(te){H=te},setClear:function(te){be!==te&&(i.clearStencil(te),be=te)},reset:function(){H=!1,wt=null,nt=null,ct=null,Et=null,Mt=null,Zt=null,pe=null,be=null}}}const s=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap;let h={},d={},p=new WeakMap,c=[],u=null,m=!1,M=null,f=null,g=null,R=null,w=null,T=null,Y=null,U=new Vt(0,0,0),I=0,X=!1,Q=null,v=null,E=null,W=null,A=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,_=0;const S=i.getParameter(i.VERSION);S.indexOf("WebGL")!==-1?(_=parseFloat(/^WebGL (\d)/.exec(S)[1]),$=_>=1):S.indexOf("OpenGL ES")!==-1&&(_=parseFloat(/^OpenGL ES (\d)/.exec(S)[1]),$=_>=2);let x=null,C={};const L=i.getParameter(i.SCISSOR_BOX),N=i.getParameter(i.VIEWPORT),et=new ce().fromArray(L),K=new ce().fromArray(N);function B(H,wt,nt,ct){const Et=new Uint8Array(4),Mt=i.createTexture();i.bindTexture(H,Mt),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<nt;Zt++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(wt,0,i.RGBA,1,1,ct,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(wt+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return Mt}const j={};j[i.TEXTURE_2D]=B(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=B(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=B(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=B(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),st(i.DEPTH_TEST),r.setFunc(ts),Ut(!1),Wt(il),st(i.CULL_FACE),O($n);function st(H){h[H]!==!0&&(i.enable(H),h[H]=!0)}function lt(H){h[H]!==!1&&(i.disable(H),h[H]=!1)}function mt(H,wt){return d[H]!==wt?(i.bindFramebuffer(H,wt),d[H]=wt,H===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=wt),H===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=wt),!0):!1}function _t(H,wt){let nt=c,ct=!1;if(H){nt=p.get(wt),nt===void 0&&(nt=[],p.set(wt,nt));const Et=H.textures;if(nt.length!==Et.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let Mt=0,Zt=Et.length;Mt<Zt;Mt++)nt[Mt]=i.COLOR_ATTACHMENT0+Mt;nt.length=Et.length,ct=!0}}else nt[0]!==i.BACK&&(nt[0]=i.BACK,ct=!0);ct&&i.drawBuffers(nt)}function Gt(H){return u!==H?(i.useProgram(H),u=H,!0):!1}const $t={[ci]:i.FUNC_ADD,[kh]:i.FUNC_SUBTRACT,[Hh]:i.FUNC_REVERSE_SUBTRACT};$t[Vh]=i.MIN,$t[Gh]=i.MAX;const kt={[Wh]:i.ZERO,[Xh]:i.ONE,[Yh]:i.SRC_COLOR,[Na]:i.SRC_ALPHA,[Jh]:i.SRC_ALPHA_SATURATE,[Kh]:i.DST_COLOR,[$h]:i.DST_ALPHA,[qh]:i.ONE_MINUS_SRC_COLOR,[Fa]:i.ONE_MINUS_SRC_ALPHA,[jh]:i.ONE_MINUS_DST_COLOR,[Zh]:i.ONE_MINUS_DST_ALPHA,[Qh]:i.CONSTANT_COLOR,[tu]:i.ONE_MINUS_CONSTANT_COLOR,[eu]:i.CONSTANT_ALPHA,[nu]:i.ONE_MINUS_CONSTANT_ALPHA};function O(H,wt,nt,ct,Et,Mt,Zt,pe,be,te){if(H===$n){m===!0&&(lt(i.BLEND),m=!1);return}if(m===!1&&(st(i.BLEND),m=!0),H!==zh){if(H!==M||te!==X){if((f!==ci||w!==ci)&&(i.blendEquation(i.FUNC_ADD),f=ci,w=ci),te)switch(H){case pi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ua:i.blendFunc(i.ONE,i.ONE);break;case sl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case pi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ua:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case sl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}g=null,R=null,T=null,Y=null,U.set(0,0,0),I=0,M=H,X=te}return}Et=Et||wt,Mt=Mt||nt,Zt=Zt||ct,(wt!==f||Et!==w)&&(i.blendEquationSeparate($t[wt],$t[Et]),f=wt,w=Et),(nt!==g||ct!==R||Mt!==T||Zt!==Y)&&(i.blendFuncSeparate(kt[nt],kt[ct],kt[Mt],kt[Zt]),g=nt,R=ct,T=Mt,Y=Zt),(pe.equals(U)===!1||be!==I)&&(i.blendColor(pe.r,pe.g,pe.b,be),U.copy(pe),I=be),M=H,X=!1}function fe(H,wt){H.side===dn?lt(i.CULL_FACE):st(i.CULL_FACE);let nt=H.side===Ge;wt&&(nt=!nt),Ut(nt),H.blending===pi&&H.transparent===!1?O($n):O(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),r.setFunc(H.depthFunc),r.setTest(H.depthTest),r.setMask(H.depthWrite),s.setMask(H.colorWrite);const ct=H.stencilWrite;a.setTest(ct),ct&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),he(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(H){Q!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),Q=H)}function Wt(H){H!==Oh?(st(i.CULL_FACE),H!==v&&(H===il?i.cullFace(i.BACK):H===Bh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):lt(i.CULL_FACE),v=H}function Bt(H){H!==E&&($&&i.lineWidth(H),E=H)}function he(H,wt,nt){H?(st(i.POLYGON_OFFSET_FILL),(W!==wt||A!==nt)&&(i.polygonOffset(wt,nt),W=wt,A=nt)):lt(i.POLYGON_OFFSET_FILL)}function Pt(H){H?st(i.SCISSOR_TEST):lt(i.SCISSOR_TEST)}function P(H){H===void 0&&(H=i.TEXTURE0+z-1),x!==H&&(i.activeTexture(H),x=H)}function y(H,wt,nt){nt===void 0&&(x===null?nt=i.TEXTURE0+z-1:nt=x);let ct=C[nt];ct===void 0&&(ct={type:void 0,texture:void 0},C[nt]=ct),(ct.type!==H||ct.texture!==wt)&&(x!==nt&&(i.activeTexture(nt),x=nt),i.bindTexture(H,wt||j[H]),ct.type=H,ct.texture=wt)}function Z(){const H=C[x];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function at(){try{i.compressedTexImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ut(){try{i.compressedTexImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function rt(){try{i.texSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Lt(){try{i.texSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function xt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function At(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Jt(){try{i.texStorage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function dt(){try{i.texStorage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ct(){try{i.texImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function It(){try{i.texImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function zt(H){et.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),et.copy(H))}function Rt(H){K.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),K.copy(H))}function Ot(H,wt){let nt=l.get(wt);nt===void 0&&(nt=new WeakMap,l.set(wt,nt));let ct=nt.get(H);ct===void 0&&(ct=i.getUniformBlockIndex(wt,H.name),nt.set(H,ct))}function Nt(H,wt){const ct=l.get(wt).get(H);o.get(wt)!==ct&&(i.uniformBlockBinding(wt,ct,H.__bindingPointIndex),o.set(wt,ct))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},x=null,C={},d={},p=new WeakMap,c=[],u=null,m=!1,M=null,f=null,g=null,R=null,w=null,T=null,Y=null,U=new Vt(0,0,0),I=0,X=!1,Q=null,v=null,E=null,W=null,A=null,et.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:st,disable:lt,bindFramebuffer:mt,drawBuffers:_t,useProgram:Gt,setBlending:O,setMaterial:fe,setFlipSided:Ut,setCullFace:Wt,setLineWidth:Bt,setPolygonOffset:he,setScissorTest:Pt,activeTexture:P,bindTexture:y,unbindTexture:Z,compressedTexImage2D:at,compressedTexImage3D:ut,texImage2D:Ct,texImage3D:It,updateUBOMapping:Ot,uniformBlockBinding:Nt,texStorage2D:Jt,texStorage3D:dt,texSubImage2D:rt,texSubImage3D:Lt,compressedTexSubImage2D:xt,compressedTexSubImage3D:At,scissor:zt,viewport:Rt,reset:ee}}function $l(i,t,e,n){const s=k0(n);switch(e){case Ic:return i*t;case Nc:return i*t;case Fc:return i*t*2;case Do:return i*t/s.components*s.byteLength;case Io:return i*t/s.components*s.byteLength;case Oc:return i*t*2/s.components*s.byteLength;case Uo:return i*t*2/s.components*s.byteLength;case Uc:return i*t*3/s.components*s.byteLength;case pn:return i*t*4/s.components*s.byteLength;case No:return i*t*4/s.components*s.byteLength;case Sr:case Er:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case br:case wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $a:case Ka:return Math.max(i,16)*Math.max(t,8)/4;case qa:case Za:return Math.max(i,8)*Math.max(t,8)/2;case ja:case Ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case to:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case eo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case no:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case io:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case so:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ro:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ao:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case oo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case lo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case co:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ho:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case uo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case fo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case po:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Tr:case mo:case go:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Bc:case _o:return Math.ceil(i/4)*Math.ceil(t/4)*8;case vo:case xo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function k0(i){switch(i){case Un:case Pc:return{byteLength:1,components:1};case Is:case Lc:case Bs:return{byteLength:2,components:1};case Po:case Lo:return{byteLength:2,components:4};case mi:case Co:case Mn:return{byteLength:4,components:1};case Dc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function H0(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new vt,d=new WeakMap;let p;const c=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,y){return u?new OffscreenCanvas(P,y):Ur("canvas")}function M(P,y,Z){let at=1;const ut=Pt(P);if((ut.width>Z||ut.height>Z)&&(at=Z/Math.max(ut.width,ut.height)),at<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const rt=Math.floor(at*ut.width),Lt=Math.floor(at*ut.height);p===void 0&&(p=m(rt,Lt));const xt=y?m(rt,Lt):p;return xt.width=rt,xt.height=Lt,xt.getContext("2d").drawImage(P,0,0,rt,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ut.width+"x"+ut.height+") to ("+rt+"x"+Lt+")."),xt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ut.width+"x"+ut.height+")."),P;return P}function f(P){return P.generateMipmaps&&P.minFilter!==Xe&&P.minFilter!==nn}function g(P){i.generateMipmap(P)}function R(P,y,Z,at,ut=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let rt=y;if(y===i.RED&&(Z===i.FLOAT&&(rt=i.R32F),Z===i.HALF_FLOAT&&(rt=i.R16F),Z===i.UNSIGNED_BYTE&&(rt=i.R8)),y===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(rt=i.R8UI),Z===i.UNSIGNED_SHORT&&(rt=i.R16UI),Z===i.UNSIGNED_INT&&(rt=i.R32UI),Z===i.BYTE&&(rt=i.R8I),Z===i.SHORT&&(rt=i.R16I),Z===i.INT&&(rt=i.R32I)),y===i.RG&&(Z===i.FLOAT&&(rt=i.RG32F),Z===i.HALF_FLOAT&&(rt=i.RG16F),Z===i.UNSIGNED_BYTE&&(rt=i.RG8)),y===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(rt=i.RG8UI),Z===i.UNSIGNED_SHORT&&(rt=i.RG16UI),Z===i.UNSIGNED_INT&&(rt=i.RG32UI),Z===i.BYTE&&(rt=i.RG8I),Z===i.SHORT&&(rt=i.RG16I),Z===i.INT&&(rt=i.RG32I)),y===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),Z===i.UNSIGNED_INT&&(rt=i.RGB32UI),Z===i.BYTE&&(rt=i.RGB8I),Z===i.SHORT&&(rt=i.RGB16I),Z===i.INT&&(rt=i.RGB32I)),y===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),Z===i.UNSIGNED_INT&&(rt=i.RGBA32UI),Z===i.BYTE&&(rt=i.RGBA8I),Z===i.SHORT&&(rt=i.RGBA16I),Z===i.INT&&(rt=i.RGBA32I)),y===i.RGB&&Z===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),y===i.RGBA){const Lt=ut?Pr:ae.getTransfer(at);Z===i.FLOAT&&(rt=i.RGBA32F),Z===i.HALF_FLOAT&&(rt=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(rt=Lt===de?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function w(P,y){let Z;return P?y===null||y===mi||y===is?Z=i.DEPTH24_STENCIL8:y===Mn?Z=i.DEPTH32F_STENCIL8:y===Is&&(Z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===mi||y===is?Z=i.DEPTH_COMPONENT24:y===Mn?Z=i.DEPTH_COMPONENT32F:y===Is&&(Z=i.DEPTH_COMPONENT16),Z}function T(P,y){return f(P)===!0||P.isFramebufferTexture&&P.minFilter!==Xe&&P.minFilter!==nn?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function Y(P){const y=P.target;y.removeEventListener("dispose",Y),I(y),y.isVideoTexture&&d.delete(y)}function U(P){const y=P.target;y.removeEventListener("dispose",U),Q(y)}function I(P){const y=n.get(P);if(y.__webglInit===void 0)return;const Z=P.source,at=c.get(Z);if(at){const ut=at[y.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&X(P),Object.keys(at).length===0&&c.delete(Z)}n.remove(P)}function X(P){const y=n.get(P);i.deleteTexture(y.__webglTexture);const Z=P.source,at=c.get(Z);delete at[y.__cacheKey],a.memory.textures--}function Q(P){const y=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(y.__webglFramebuffer[at]))for(let ut=0;ut<y.__webglFramebuffer[at].length;ut++)i.deleteFramebuffer(y.__webglFramebuffer[at][ut]);else i.deleteFramebuffer(y.__webglFramebuffer[at]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[at])}else{if(Array.isArray(y.__webglFramebuffer))for(let at=0;at<y.__webglFramebuffer.length;at++)i.deleteFramebuffer(y.__webglFramebuffer[at]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let at=0;at<y.__webglColorRenderbuffer.length;at++)y.__webglColorRenderbuffer[at]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[at]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const Z=P.textures;for(let at=0,ut=Z.length;at<ut;at++){const rt=n.get(Z[at]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),a.memory.textures--),n.remove(Z[at])}n.remove(P)}let v=0;function E(){v=0}function W(){const P=v;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),v+=1,P}function A(P){const y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function z(P,y){const Z=n.get(P);if(P.isVideoTexture&&Bt(P),P.isRenderTargetTexture===!1&&P.version>0&&Z.__version!==P.version){const at=P.image;if(at===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(Z,P,y);return}}e.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+y)}function $(P,y){const Z=n.get(P);if(P.version>0&&Z.__version!==P.version){K(Z,P,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+y)}function _(P,y){const Z=n.get(P);if(P.version>0&&Z.__version!==P.version){K(Z,P,y);return}e.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+y)}function S(P,y){const Z=n.get(P);if(P.version>0&&Z.__version!==P.version){B(Z,P,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+y)}const x={[jn]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[Ya]:i.MIRRORED_REPEAT},C={[Xe]:i.NEAREST,[uu]:i.NEAREST_MIPMAP_NEAREST,[Ws]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[qr]:i.LINEAR_MIPMAP_NEAREST,[fi]:i.LINEAR_MIPMAP_LINEAR},L={[mu]:i.NEVER,[yu]:i.ALWAYS,[gu]:i.LESS,[kc]:i.LEQUAL,[_u]:i.EQUAL,[Mu]:i.GEQUAL,[vu]:i.GREATER,[xu]:i.NOTEQUAL};function N(P,y){if(y.type===Mn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===nn||y.magFilter===qr||y.magFilter===Ws||y.magFilter===fi||y.minFilter===nn||y.minFilter===qr||y.minFilter===Ws||y.minFilter===fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,x[y.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,x[y.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,x[y.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,C[y.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,C[y.minFilter]),y.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,L[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Xe||y.minFilter!==Ws&&y.minFilter!==fi||y.type===Mn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const Z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function et(P,y){let Z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",Y));const at=y.source;let ut=c.get(at);ut===void 0&&(ut={},c.set(at,ut));const rt=A(y);if(rt!==P.__cacheKey){ut[rt]===void 0&&(ut[rt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),ut[rt].usedTimes++;const Lt=ut[P.__cacheKey];Lt!==void 0&&(ut[P.__cacheKey].usedTimes--,Lt.usedTimes===0&&X(y)),P.__cacheKey=rt,P.__webglTexture=ut[rt].texture}return Z}function K(P,y,Z){let at=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(at=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(at=i.TEXTURE_3D);const ut=et(P,y),rt=y.source;e.bindTexture(at,P.__webglTexture,i.TEXTURE0+Z);const Lt=n.get(rt);if(rt.version!==Lt.__version||ut===!0){e.activeTexture(i.TEXTURE0+Z);const xt=ae.getPrimaries(ae.workingColorSpace),At=y.colorSpace===qn?null:ae.getPrimaries(y.colorSpace),Jt=y.colorSpace===qn||xt===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let dt=M(y.image,!1,s.maxTextureSize);dt=he(y,dt);const Ct=r.convert(y.format,y.colorSpace),It=r.convert(y.type);let zt=R(y.internalFormat,Ct,It,y.colorSpace,y.isVideoTexture);N(at,y);let Rt;const Ot=y.mipmaps,Nt=y.isVideoTexture!==!0,ee=Lt.__version===void 0||ut===!0,H=rt.dataReady,wt=T(y,dt);if(y.isDepthTexture)zt=w(y.format===ss,y.type),ee&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,zt,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,zt,dt.width,dt.height,0,Ct,It,null));else if(y.isDataTexture)if(Ot.length>0){Nt&&ee&&e.texStorage2D(i.TEXTURE_2D,wt,zt,Ot[0].width,Ot[0].height);for(let nt=0,ct=Ot.length;nt<ct;nt++)Rt=Ot[nt],Nt?H&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,Rt.width,Rt.height,Ct,It,Rt.data):e.texImage2D(i.TEXTURE_2D,nt,zt,Rt.width,Rt.height,0,Ct,It,Rt.data);y.generateMipmaps=!1}else Nt?(ee&&e.texStorage2D(i.TEXTURE_2D,wt,zt,dt.width,dt.height),H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt.width,dt.height,Ct,It,dt.data)):e.texImage2D(i.TEXTURE_2D,0,zt,dt.width,dt.height,0,Ct,It,dt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Nt&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,zt,Ot[0].width,Ot[0].height,dt.depth);for(let nt=0,ct=Ot.length;nt<ct;nt++)if(Rt=Ot[nt],y.format!==pn)if(Ct!==null)if(Nt){if(H)if(y.layerUpdates.size>0){const Et=$l(Rt.width,Rt.height,y.format,y.type);for(const Mt of y.layerUpdates){const Zt=Rt.data.subarray(Mt*Et/Rt.data.BYTES_PER_ELEMENT,(Mt+1)*Et/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,Mt,Rt.width,Rt.height,1,Ct,Zt,0,0)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,Rt.width,Rt.height,dt.depth,Ct,Rt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,zt,Rt.width,Rt.height,dt.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?H&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,Rt.width,Rt.height,dt.depth,Ct,It,Rt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,zt,Rt.width,Rt.height,dt.depth,0,Ct,It,Rt.data)}else{Nt&&ee&&e.texStorage2D(i.TEXTURE_2D,wt,zt,Ot[0].width,Ot[0].height);for(let nt=0,ct=Ot.length;nt<ct;nt++)Rt=Ot[nt],y.format!==pn?Ct!==null?Nt?H&&e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,Rt.width,Rt.height,Ct,Rt.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,zt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?H&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,Rt.width,Rt.height,Ct,It,Rt.data):e.texImage2D(i.TEXTURE_2D,nt,zt,Rt.width,Rt.height,0,Ct,It,Rt.data)}else if(y.isDataArrayTexture)if(Nt){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,zt,dt.width,dt.height,dt.depth),H)if(y.layerUpdates.size>0){const nt=$l(dt.width,dt.height,y.format,y.type);for(const ct of y.layerUpdates){const Et=dt.data.subarray(ct*nt/dt.data.BYTES_PER_ELEMENT,(ct+1)*nt/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ct,dt.width,dt.height,1,Ct,It,Et)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Ct,It,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,zt,dt.width,dt.height,dt.depth,0,Ct,It,dt.data);else if(y.isData3DTexture)Nt?(ee&&e.texStorage3D(i.TEXTURE_3D,wt,zt,dt.width,dt.height,dt.depth),H&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Ct,It,dt.data)):e.texImage3D(i.TEXTURE_3D,0,zt,dt.width,dt.height,dt.depth,0,Ct,It,dt.data);else if(y.isFramebufferTexture){if(ee)if(Nt)e.texStorage2D(i.TEXTURE_2D,wt,zt,dt.width,dt.height);else{let nt=dt.width,ct=dt.height;for(let Et=0;Et<wt;Et++)e.texImage2D(i.TEXTURE_2D,Et,zt,nt,ct,0,Ct,It,null),nt>>=1,ct>>=1}}else if(Ot.length>0){if(Nt&&ee){const nt=Pt(Ot[0]);e.texStorage2D(i.TEXTURE_2D,wt,zt,nt.width,nt.height)}for(let nt=0,ct=Ot.length;nt<ct;nt++)Rt=Ot[nt],Nt?H&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,Ct,It,Rt):e.texImage2D(i.TEXTURE_2D,nt,zt,Ct,It,Rt);y.generateMipmaps=!1}else if(Nt){if(ee){const nt=Pt(dt);e.texStorage2D(i.TEXTURE_2D,wt,zt,nt.width,nt.height)}H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct,It,dt)}else e.texImage2D(i.TEXTURE_2D,0,zt,Ct,It,dt);f(y)&&g(at),Lt.__version=rt.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function B(P,y,Z){if(y.image.length!==6)return;const at=et(P,y),ut=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+Z);const rt=n.get(ut);if(ut.version!==rt.__version||at===!0){e.activeTexture(i.TEXTURE0+Z);const Lt=ae.getPrimaries(ae.workingColorSpace),xt=y.colorSpace===qn?null:ae.getPrimaries(y.colorSpace),At=y.colorSpace===qn||Lt===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const Jt=y.isCompressedTexture||y.image[0].isCompressedTexture,dt=y.image[0]&&y.image[0].isDataTexture,Ct=[];for(let ct=0;ct<6;ct++)!Jt&&!dt?Ct[ct]=M(y.image[ct],!0,s.maxCubemapSize):Ct[ct]=dt?y.image[ct].image:y.image[ct],Ct[ct]=he(y,Ct[ct]);const It=Ct[0],zt=r.convert(y.format,y.colorSpace),Rt=r.convert(y.type),Ot=R(y.internalFormat,zt,Rt,y.colorSpace),Nt=y.isVideoTexture!==!0,ee=rt.__version===void 0||at===!0,H=ut.dataReady;let wt=T(y,It);N(i.TEXTURE_CUBE_MAP,y);let nt;if(Jt){Nt&&ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,Ot,It.width,It.height);for(let ct=0;ct<6;ct++){nt=Ct[ct].mipmaps;for(let Et=0;Et<nt.length;Et++){const Mt=nt[Et];y.format!==pn?zt!==null?Nt?H&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Et,0,0,Mt.width,Mt.height,zt,Mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Et,Ot,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Et,0,0,Mt.width,Mt.height,zt,Rt,Mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Et,Ot,Mt.width,Mt.height,0,zt,Rt,Mt.data)}}}else{if(nt=y.mipmaps,Nt&&ee){nt.length>0&&wt++;const ct=Pt(Ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,Ot,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(dt){Nt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Ct[ct].width,Ct[ct].height,zt,Rt,Ct[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Ot,Ct[ct].width,Ct[ct].height,0,zt,Rt,Ct[ct].data);for(let Et=0;Et<nt.length;Et++){const Zt=nt[Et].image[ct].image;Nt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Et+1,0,0,Zt.width,Zt.height,zt,Rt,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Et+1,Ot,Zt.width,Zt.height,0,zt,Rt,Zt.data)}}else{Nt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,zt,Rt,Ct[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Ot,zt,Rt,Ct[ct]);for(let Et=0;Et<nt.length;Et++){const Mt=nt[Et];Nt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Et+1,0,0,zt,Rt,Mt.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Et+1,Ot,zt,Rt,Mt.image[ct])}}}f(y)&&g(i.TEXTURE_CUBE_MAP),rt.__version=ut.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function j(P,y,Z,at,ut,rt){const Lt=r.convert(Z.format,Z.colorSpace),xt=r.convert(Z.type),At=R(Z.internalFormat,Lt,xt,Z.colorSpace);if(!n.get(y).__hasExternalTextures){const dt=Math.max(1,y.width>>rt),Ct=Math.max(1,y.height>>rt);ut===i.TEXTURE_3D||ut===i.TEXTURE_2D_ARRAY?e.texImage3D(ut,rt,At,dt,Ct,y.depth,0,Lt,xt,null):e.texImage2D(ut,rt,At,dt,Ct,0,Lt,xt,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),Wt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,ut,n.get(Z).__webglTexture,0,Ut(y)):(ut===i.TEXTURE_2D||ut>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,at,ut,n.get(Z).__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(P,y,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,P),y.depthBuffer){const at=y.depthTexture,ut=at&&at.isDepthTexture?at.type:null,rt=w(y.stencilBuffer,ut),Lt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=Ut(y);Wt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt,rt,y.width,y.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,rt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,rt,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Lt,i.RENDERBUFFER,P)}else{const at=y.textures;for(let ut=0;ut<at.length;ut++){const rt=at[ut],Lt=r.convert(rt.format,rt.colorSpace),xt=r.convert(rt.type),At=R(rt.internalFormat,Lt,xt,rt.colorSpace),Jt=Ut(y);Z&&Wt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt,At,y.width,y.height):Wt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt,At,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,At,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function lt(P,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),z(y.depthTexture,0);const at=n.get(y.depthTexture).__webglTexture,ut=Ut(y);if(y.depthTexture.format===Ji)Wt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0);else if(y.depthTexture.format===ss)Wt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function mt(P){const y=n.get(P),Z=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){const at=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),at){const ut=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,at.removeEventListener("dispose",ut)};at.addEventListener("dispose",ut),y.__depthDisposeCallback=ut}y.__boundDepthTexture=at}if(P.depthTexture&&!y.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");lt(y.__webglFramebuffer,P)}else if(Z){y.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[at]),y.__webglDepthbuffer[at]===void 0)y.__webglDepthbuffer[at]=i.createRenderbuffer(),st(y.__webglDepthbuffer[at],P,!1);else{const ut=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=y.__webglDepthbuffer[at];i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,rt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),st(y.__webglDepthbuffer,P,!1);else{const at=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,ut)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(P,y,Z){const at=n.get(P);y!==void 0&&j(at.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&mt(P)}function Gt(P){const y=P.texture,Z=n.get(P),at=n.get(y);P.addEventListener("dispose",U);const ut=P.textures,rt=P.isWebGLCubeRenderTarget===!0,Lt=ut.length>1;if(Lt||(at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture()),at.__version=y.version,a.memory.textures++),rt){Z.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(y.mipmaps&&y.mipmaps.length>0){Z.__webglFramebuffer[xt]=[];for(let At=0;At<y.mipmaps.length;At++)Z.__webglFramebuffer[xt][At]=i.createFramebuffer()}else Z.__webglFramebuffer[xt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){Z.__webglFramebuffer=[];for(let xt=0;xt<y.mipmaps.length;xt++)Z.__webglFramebuffer[xt]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(Lt)for(let xt=0,At=ut.length;xt<At;xt++){const Jt=n.get(ut[xt]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&Wt(P)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let xt=0;xt<ut.length;xt++){const At=ut[xt];Z.__webglColorRenderbuffer[xt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[xt]);const Jt=r.convert(At.format,At.colorSpace),dt=r.convert(At.type),Ct=R(At.internalFormat,Jt,dt,At.colorSpace,P.isXRRenderTarget===!0),It=Ut(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,It,Ct,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,Z.__webglColorRenderbuffer[xt])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),st(Z.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture),N(i.TEXTURE_CUBE_MAP,y);for(let xt=0;xt<6;xt++)if(y.mipmaps&&y.mipmaps.length>0)for(let At=0;At<y.mipmaps.length;At++)j(Z.__webglFramebuffer[xt][At],P,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,At);else j(Z.__webglFramebuffer[xt],P,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);f(y)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let xt=0,At=ut.length;xt<At;xt++){const Jt=ut[xt],dt=n.get(Jt);e.bindTexture(i.TEXTURE_2D,dt.__webglTexture),N(i.TEXTURE_2D,Jt),j(Z.__webglFramebuffer,P,Jt,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,0),f(Jt)&&g(i.TEXTURE_2D)}e.unbindTexture()}else{let xt=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(xt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,at.__webglTexture),N(xt,y),y.mipmaps&&y.mipmaps.length>0)for(let At=0;At<y.mipmaps.length;At++)j(Z.__webglFramebuffer[At],P,y,i.COLOR_ATTACHMENT0,xt,At);else j(Z.__webglFramebuffer,P,y,i.COLOR_ATTACHMENT0,xt,0);f(y)&&g(xt),e.unbindTexture()}P.depthBuffer&&mt(P)}function $t(P){const y=P.textures;for(let Z=0,at=y.length;Z<at;Z++){const ut=y[Z];if(f(ut)){const rt=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Lt=n.get(ut).__webglTexture;e.bindTexture(rt,Lt),g(rt),e.unbindTexture()}}}const kt=[],O=[];function fe(P){if(P.samples>0){if(Wt(P)===!1){const y=P.textures,Z=P.width,at=P.height;let ut=i.COLOR_BUFFER_BIT;const rt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=n.get(P),xt=y.length>1;if(xt)for(let At=0;At<y.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let At=0;At<y.length;At++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ut|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ut|=i.STENCIL_BUFFER_BIT)),xt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[At]);const Jt=n.get(y[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Jt,0)}i.blitFramebuffer(0,0,Z,at,0,0,Z,at,ut,i.NEAREST),l===!0&&(kt.length=0,O.length=0,kt.push(i.COLOR_ATTACHMENT0+At),P.depthBuffer&&P.resolveDepthBuffer===!1&&(kt.push(rt),O.push(rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,kt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xt)for(let At=0;At<y.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[At]);const Jt=n.get(y[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,Jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const y=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Ut(P){return Math.min(s.maxSamples,P.samples)}function Wt(P){const y=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Bt(P){const y=a.render.frame;d.get(P)!==y&&(d.set(P,y),P.update())}function he(P,y){const Z=P.colorSpace,at=P.format,ut=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Z!==Qn&&Z!==qn&&(ae.getTransfer(Z)===de?(at!==pn||ut!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),y}function Pt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=W,this.resetTextureUnits=E,this.setTexture2D=z,this.setTexture2DArray=$,this.setTexture3D=_,this.setTextureCube=S,this.rebindTextures=_t,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=j,this.useMultisampledRTT=Wt}function V0(i,t){function e(n,s=qn){let r;const a=ae.getTransfer(s);if(n===Un)return i.UNSIGNED_BYTE;if(n===Po)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Lo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Dc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pc)return i.BYTE;if(n===Lc)return i.SHORT;if(n===Is)return i.UNSIGNED_SHORT;if(n===Co)return i.INT;if(n===mi)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===Bs)return i.HALF_FLOAT;if(n===Ic)return i.ALPHA;if(n===Uc)return i.RGB;if(n===pn)return i.RGBA;if(n===Nc)return i.LUMINANCE;if(n===Fc)return i.LUMINANCE_ALPHA;if(n===Ji)return i.DEPTH_COMPONENT;if(n===ss)return i.DEPTH_STENCIL;if(n===Do)return i.RED;if(n===Io)return i.RED_INTEGER;if(n===Oc)return i.RG;if(n===Uo)return i.RG_INTEGER;if(n===No)return i.RGBA_INTEGER;if(n===Sr||n===Er||n===br||n===wr)if(a===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Sr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Sr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qa||n===$a||n===Za||n===Ka)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===qa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$a)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ka)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ja||n===Ja||n===Qa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ja||n===Ja)return a===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qa)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===to||n===eo||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===to)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===eo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===no)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===io)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===so)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ro)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ao)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===co)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ho)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===uo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===po)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Tr||n===mo||n===go)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Tr)return a===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===go)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bc||n===_o||n===vo||n===xo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Tr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_o)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class G0 extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ve extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}}const W0={type:"move"};class ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(const M of t.hand.values()){const f=e.getJointPose(M,n),g=this._getHandJoint(h,M);f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=f.radius),g.visible=f!==null}const d=h.joints["index-finger-tip"],p=h.joints["thumb-tip"],c=d.position.distanceTo(p.position),u=.02,m=.005;h.inputState.pinching&&c>u+m?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&c<=u-m&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(W0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ve;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const X0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Y0=`
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

}`;class q0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Oe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Jn({vertexShader:X0,fragmentShader:Y0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ht(new yn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $0 extends vi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,h=null,d=null,p=null,c=null,u=null,m=null;const M=new q0,f=e.getContextAttributes();let g=null,R=null;const w=[],T=[],Y=new vt;let U=null;const I=new je;I.layers.enable(1),I.viewport=new ce;const X=new je;X.layers.enable(2),X.viewport=new ce;const Q=[I,X],v=new G0;v.layers.enable(1),v.layers.enable(2);let E=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let j=w[B];return j===void 0&&(j=new ya,w[B]=j),j.getTargetRaySpace()},this.getControllerGrip=function(B){let j=w[B];return j===void 0&&(j=new ya,w[B]=j),j.getGripSpace()},this.getHand=function(B){let j=w[B];return j===void 0&&(j=new ya,w[B]=j),j.getHandSpace()};function A(B){const j=T.indexOf(B.inputSource);if(j===-1)return;const st=w[j];st!==void 0&&(st.update(B.inputSource,B.frame,h||a),st.dispatchEvent({type:B.type,data:B.inputSource}))}function z(){s.removeEventListener("select",A),s.removeEventListener("selectstart",A),s.removeEventListener("selectend",A),s.removeEventListener("squeeze",A),s.removeEventListener("squeezestart",A),s.removeEventListener("squeezeend",A),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",$);for(let B=0;B<w.length;B++){const j=T[B];j!==null&&(T[B]=null,w[B].disconnect(j))}E=null,W=null,M.reset(),t.setRenderTarget(g),u=null,c=null,p=null,s=null,R=null,K.stop(),n.isPresenting=!1,t.setPixelRatio(U),t.setSize(Y.width,Y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(B){h=B},this.getBaseLayer=function(){return c!==null?c:u},this.getBinding=function(){return p},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",A),s.addEventListener("selectstart",A),s.addEventListener("selectend",A),s.addEventListener("squeeze",A),s.addEventListener("squeezestart",A),s.addEventListener("squeezeend",A),s.addEventListener("end",z),s.addEventListener("inputsourceschange",$),f.xrCompatible!==!0&&await e.makeXRCompatible(),U=t.getPixelRatio(),t.getSize(Y),s.renderState.layers===void 0){const j={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,j),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),R=new gi(u.framebufferWidth,u.framebufferHeight,{format:pn,type:Un,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let j=null,st=null,lt=null;f.depth&&(lt=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=f.stencil?ss:Ji,st=f.stencil?is:mi);const mt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};p=new XRWebGLBinding(s,e),c=p.createProjectionLayer(mt),s.updateRenderState({layers:[c]}),t.setPixelRatio(1),t.setSize(c.textureWidth,c.textureHeight,!1),R=new gi(c.textureWidth,c.textureHeight,{format:pn,type:Un,depthTexture:new Jc(c.textureWidth,c.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await s.requestReferenceSpace(o),K.setContext(s),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function $(B){for(let j=0;j<B.removed.length;j++){const st=B.removed[j],lt=T.indexOf(st);lt>=0&&(T[lt]=null,w[lt].disconnect(st))}for(let j=0;j<B.added.length;j++){const st=B.added[j];let lt=T.indexOf(st);if(lt===-1){for(let _t=0;_t<w.length;_t++)if(_t>=T.length){T.push(st),lt=_t;break}else if(T[_t]===null){T[_t]=st,lt=_t;break}if(lt===-1)break}const mt=w[lt];mt&&mt.connect(st)}}const _=new F,S=new F;function x(B,j,st){_.setFromMatrixPosition(j.matrixWorld),S.setFromMatrixPosition(st.matrixWorld);const lt=_.distanceTo(S),mt=j.projectionMatrix.elements,_t=st.projectionMatrix.elements,Gt=mt[14]/(mt[10]-1),$t=mt[14]/(mt[10]+1),kt=(mt[9]+1)/mt[5],O=(mt[9]-1)/mt[5],fe=(mt[8]-1)/mt[0],Ut=(_t[8]+1)/_t[0],Wt=Gt*fe,Bt=Gt*Ut,he=lt/(-fe+Ut),Pt=he*-fe;if(j.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Pt),B.translateZ(he),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),mt[10]===-1)B.projectionMatrix.copy(j.projectionMatrix),B.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const P=Gt+he,y=$t+he,Z=Wt-Pt,at=Bt+(lt-Pt),ut=kt*$t/y*P,rt=O*$t/y*P;B.projectionMatrix.makePerspective(Z,at,ut,rt,P,y),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function C(B,j){j===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(j.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;let j=B.near,st=B.far;M.texture!==null&&(M.depthNear>0&&(j=M.depthNear),M.depthFar>0&&(st=M.depthFar)),v.near=X.near=I.near=j,v.far=X.far=I.far=st,(E!==v.near||W!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),E=v.near,W=v.far);const lt=B.parent,mt=v.cameras;C(v,lt);for(let _t=0;_t<mt.length;_t++)C(mt[_t],lt);mt.length===2?x(v,I,X):v.projectionMatrix.copy(I.projectionMatrix),L(B,v,lt)};function L(B,j,st){st===null?B.matrix.copy(j.matrixWorld):(B.matrix.copy(st.matrixWorld),B.matrix.invert(),B.matrix.multiply(j.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(j.projectionMatrix),B.projectionMatrixInverse.copy(j.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Us*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(c===null&&u===null))return l},this.setFoveation=function(B){l=B,c!==null&&(c.fixedFoveation=B),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=B)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(v)};let N=null;function et(B,j){if(d=j.getViewerPose(h||a),m=j,d!==null){const st=d.views;u!==null&&(t.setRenderTargetFramebuffer(R,u.framebuffer),t.setRenderTarget(R));let lt=!1;st.length!==v.cameras.length&&(v.cameras.length=0,lt=!0);for(let _t=0;_t<st.length;_t++){const Gt=st[_t];let $t=null;if(u!==null)$t=u.getViewport(Gt);else{const O=p.getViewSubImage(c,Gt);$t=O.viewport,_t===0&&(t.setRenderTargetTextures(R,O.colorTexture,c.ignoreDepthValues?void 0:O.depthStencilTexture),t.setRenderTarget(R))}let kt=Q[_t];kt===void 0&&(kt=new je,kt.layers.enable(_t),kt.viewport=new ce,Q[_t]=kt),kt.matrix.fromArray(Gt.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Gt.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set($t.x,$t.y,$t.width,$t.height),_t===0&&(v.matrix.copy(kt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),lt===!0&&v.cameras.push(kt)}const mt=s.enabledFeatures;if(mt&&mt.includes("depth-sensing")){const _t=p.getDepthInformation(st[0]);_t&&_t.isValid&&_t.texture&&M.init(t,_t,s.renderState)}}for(let st=0;st<w.length;st++){const lt=T[st],mt=w[st];lt!==null&&mt!==void 0&&mt.update(lt,j,h||a)}N&&N(B,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),m=null}const K=new Kc;K.setAnimationLoop(et),this.setAnimationLoop=function(B){N=B},this.dispose=function(){}}}const oi=new rn,Z0=new se;function K0(i,t){function e(f,g){f.matrixAutoUpdate===!0&&f.updateMatrix(),g.value.copy(f.matrix)}function n(f,g){g.color.getRGB(f.fogColor.value,qc(i)),g.isFog?(f.fogNear.value=g.near,f.fogFar.value=g.far):g.isFogExp2&&(f.fogDensity.value=g.density)}function s(f,g,R,w,T){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(f,g):g.isMeshToonMaterial?(r(f,g),p(f,g)):g.isMeshPhongMaterial?(r(f,g),d(f,g)):g.isMeshStandardMaterial?(r(f,g),c(f,g),g.isMeshPhysicalMaterial&&u(f,g,T)):g.isMeshMatcapMaterial?(r(f,g),m(f,g)):g.isMeshDepthMaterial?r(f,g):g.isMeshDistanceMaterial?(r(f,g),M(f,g)):g.isMeshNormalMaterial?r(f,g):g.isLineBasicMaterial?(a(f,g),g.isLineDashedMaterial&&o(f,g)):g.isPointsMaterial?l(f,g,R,w):g.isSpriteMaterial?h(f,g):g.isShadowMaterial?(f.color.value.copy(g.color),f.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(f,g){f.opacity.value=g.opacity,g.color&&f.diffuse.value.copy(g.color),g.emissive&&f.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(f.map.value=g.map,e(g.map,f.mapTransform)),g.alphaMap&&(f.alphaMap.value=g.alphaMap,e(g.alphaMap,f.alphaMapTransform)),g.bumpMap&&(f.bumpMap.value=g.bumpMap,e(g.bumpMap,f.bumpMapTransform),f.bumpScale.value=g.bumpScale,g.side===Ge&&(f.bumpScale.value*=-1)),g.normalMap&&(f.normalMap.value=g.normalMap,e(g.normalMap,f.normalMapTransform),f.normalScale.value.copy(g.normalScale),g.side===Ge&&f.normalScale.value.negate()),g.displacementMap&&(f.displacementMap.value=g.displacementMap,e(g.displacementMap,f.displacementMapTransform),f.displacementScale.value=g.displacementScale,f.displacementBias.value=g.displacementBias),g.emissiveMap&&(f.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,f.emissiveMapTransform)),g.specularMap&&(f.specularMap.value=g.specularMap,e(g.specularMap,f.specularMapTransform)),g.alphaTest>0&&(f.alphaTest.value=g.alphaTest);const R=t.get(g),w=R.envMap,T=R.envMapRotation;w&&(f.envMap.value=w,oi.copy(T),oi.x*=-1,oi.y*=-1,oi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),f.envMapRotation.value.setFromMatrix4(Z0.makeRotationFromEuler(oi)),f.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=g.reflectivity,f.ior.value=g.ior,f.refractionRatio.value=g.refractionRatio),g.lightMap&&(f.lightMap.value=g.lightMap,f.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,f.lightMapTransform)),g.aoMap&&(f.aoMap.value=g.aoMap,f.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,f.aoMapTransform))}function a(f,g){f.diffuse.value.copy(g.color),f.opacity.value=g.opacity,g.map&&(f.map.value=g.map,e(g.map,f.mapTransform))}function o(f,g){f.dashSize.value=g.dashSize,f.totalSize.value=g.dashSize+g.gapSize,f.scale.value=g.scale}function l(f,g,R,w){f.diffuse.value.copy(g.color),f.opacity.value=g.opacity,f.size.value=g.size*R,f.scale.value=w*.5,g.map&&(f.map.value=g.map,e(g.map,f.uvTransform)),g.alphaMap&&(f.alphaMap.value=g.alphaMap,e(g.alphaMap,f.alphaMapTransform)),g.alphaTest>0&&(f.alphaTest.value=g.alphaTest)}function h(f,g){f.diffuse.value.copy(g.color),f.opacity.value=g.opacity,f.rotation.value=g.rotation,g.map&&(f.map.value=g.map,e(g.map,f.mapTransform)),g.alphaMap&&(f.alphaMap.value=g.alphaMap,e(g.alphaMap,f.alphaMapTransform)),g.alphaTest>0&&(f.alphaTest.value=g.alphaTest)}function d(f,g){f.specular.value.copy(g.specular),f.shininess.value=Math.max(g.shininess,1e-4)}function p(f,g){g.gradientMap&&(f.gradientMap.value=g.gradientMap)}function c(f,g){f.metalness.value=g.metalness,g.metalnessMap&&(f.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,f.metalnessMapTransform)),f.roughness.value=g.roughness,g.roughnessMap&&(f.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,f.roughnessMapTransform)),g.envMap&&(f.envMapIntensity.value=g.envMapIntensity)}function u(f,g,R){f.ior.value=g.ior,g.sheen>0&&(f.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),f.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(f.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,f.sheenColorMapTransform)),g.sheenRoughnessMap&&(f.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,f.sheenRoughnessMapTransform))),g.clearcoat>0&&(f.clearcoat.value=g.clearcoat,f.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(f.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,f.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(f.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ge&&f.clearcoatNormalScale.value.negate())),g.dispersion>0&&(f.dispersion.value=g.dispersion),g.iridescence>0&&(f.iridescence.value=g.iridescence,f.iridescenceIOR.value=g.iridescenceIOR,f.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(f.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,f.iridescenceMapTransform)),g.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),g.transmission>0&&(f.transmission.value=g.transmission,f.transmissionSamplerMap.value=R.texture,f.transmissionSamplerSize.value.set(R.width,R.height),g.transmissionMap&&(f.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,f.transmissionMapTransform)),f.thickness.value=g.thickness,g.thicknessMap&&(f.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=g.attenuationDistance,f.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(f.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(f.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=g.specularIntensity,f.specularColor.value.copy(g.specularColor),g.specularColorMap&&(f.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,f.specularColorMapTransform)),g.specularIntensityMap&&(f.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,f.specularIntensityMapTransform))}function m(f,g){g.matcap&&(f.matcap.value=g.matcap)}function M(f,g){const R=t.get(g).light;f.referencePosition.value.setFromMatrixPosition(R.matrixWorld),f.nearDistance.value=R.shadow.camera.near,f.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function j0(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,w){const T=w.program;n.uniformBlockBinding(R,T)}function h(R,w){let T=s[R.id];T===void 0&&(m(R),T=d(R),s[R.id]=T,R.addEventListener("dispose",f));const Y=w.program;n.updateUBOMapping(R,Y);const U=t.render.frame;r[R.id]!==U&&(c(R),r[R.id]=U)}function d(R){const w=p();R.__bindingPointIndex=w;const T=i.createBuffer(),Y=R.__size,U=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,Y,U),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,T),T}function p(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(R){const w=s[R.id],T=R.uniforms,Y=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let U=0,I=T.length;U<I;U++){const X=Array.isArray(T[U])?T[U]:[T[U]];for(let Q=0,v=X.length;Q<v;Q++){const E=X[Q];if(u(E,U,Q,Y)===!0){const W=E.__offset,A=Array.isArray(E.value)?E.value:[E.value];let z=0;for(let $=0;$<A.length;$++){const _=A[$],S=M(_);typeof _=="number"||typeof _=="boolean"?(E.__data[0]=_,i.bufferSubData(i.UNIFORM_BUFFER,W+z,E.__data)):_.isMatrix3?(E.__data[0]=_.elements[0],E.__data[1]=_.elements[1],E.__data[2]=_.elements[2],E.__data[3]=0,E.__data[4]=_.elements[3],E.__data[5]=_.elements[4],E.__data[6]=_.elements[5],E.__data[7]=0,E.__data[8]=_.elements[6],E.__data[9]=_.elements[7],E.__data[10]=_.elements[8],E.__data[11]=0):(_.toArray(E.__data,z),z+=S.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(R,w,T,Y){const U=R.value,I=w+"_"+T;if(Y[I]===void 0)return typeof U=="number"||typeof U=="boolean"?Y[I]=U:Y[I]=U.clone(),!0;{const X=Y[I];if(typeof U=="number"||typeof U=="boolean"){if(X!==U)return Y[I]=U,!0}else if(X.equals(U)===!1)return X.copy(U),!0}return!1}function m(R){const w=R.uniforms;let T=0;const Y=16;for(let I=0,X=w.length;I<X;I++){const Q=Array.isArray(w[I])?w[I]:[w[I]];for(let v=0,E=Q.length;v<E;v++){const W=Q[v],A=Array.isArray(W.value)?W.value:[W.value];for(let z=0,$=A.length;z<$;z++){const _=A[z],S=M(_),x=T%Y,C=x%S.boundary,L=x+C;T+=C,L!==0&&Y-L<S.storage&&(T+=Y-L),W.__data=new Float32Array(S.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=T,T+=S.storage}}}const U=T%Y;return U>0&&(T+=Y-U),R.__size=T,R.__cache={},this}function M(R){const w={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(w.boundary=4,w.storage=4):R.isVector2?(w.boundary=8,w.storage=8):R.isVector3||R.isColor?(w.boundary=16,w.storage=12):R.isVector4?(w.boundary=16,w.storage=16):R.isMatrix3?(w.boundary=48,w.storage=48):R.isMatrix4?(w.boundary=64,w.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),w}function f(R){const w=R.target;w.removeEventListener("dispose",f);const T=a.indexOf(w.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function g(){for(const R in s)i.deleteBuffer(s[R]);a=[],s={},r={}}return{bind:l,update:h,dispose:g}}class J0{constructor(t={}){const{canvas:e=Bu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1}=t;this.isWebGLRenderer=!0;let c;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");c=n.getContextAttributes().alpha}else c=a;const u=new Uint32Array(4),m=new Int32Array(4);let M=null,f=null;const g=[],R=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fe,this.toneMapping=Zn,this.toneMappingExposure=1;const w=this;let T=!1,Y=0,U=0,I=null,X=-1,Q=null;const v=new ce,E=new ce;let W=null;const A=new Vt(0);let z=0,$=e.width,_=e.height,S=1,x=null,C=null;const L=new ce(0,0,$,_),N=new ce(0,0,$,_);let et=!1;const K=new ko;let B=!1,j=!1;const st=new se,lt=new se,mt=new F,_t=new ce,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $t=!1;function kt(){return I===null?S:1}let O=n;function fe(b,V){return e.getContext(b,V)}try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ro}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),O===null){const V="webgl2";if(O=fe(V,b),O===null)throw fe(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ut,Wt,Bt,he,Pt,P,y,Z,at,ut,rt,Lt,xt,At,Jt,dt,Ct,It,zt,Rt,Ot,Nt,ee,H;function wt(){Ut=new im(O),Ut.init(),Nt=new V0(O,Ut),Wt=new jp(O,Ut,t,Nt),Bt=new z0(O),Wt.reverseDepthBuffer&&Bt.buffers.depth.setReversed(!0),he=new am(O),Pt=new b0,P=new H0(O,Ut,Bt,Pt,Wt,Nt,he),y=new Qp(w),Z=new nm(w),at=new dd(O),ee=new Zp(O,at),ut=new sm(O,at,he,ee),rt=new lm(O,ut,at,he),zt=new om(O,Wt,P),dt=new Jp(Pt),Lt=new E0(w,y,Z,Ut,Wt,ee,dt),xt=new K0(w,Pt),At=new T0,Jt=new D0(Ut),It=new $p(w,y,Z,Bt,rt,c,l),Ct=new O0(w,rt,Wt),H=new j0(O,he,Wt,Bt),Rt=new Kp(O,Ut,he),Ot=new rm(O,Ut,he),he.programs=Lt.programs,w.capabilities=Wt,w.extensions=Ut,w.properties=Pt,w.renderLists=At,w.shadowMap=Ct,w.state=Bt,w.info=he}wt();const nt=new $0(w,O);this.xr=nt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const b=Ut.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ut.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return S},this.setPixelRatio=function(b){b!==void 0&&(S=b,this.setSize($,_,!1))},this.getSize=function(b){return b.set($,_)},this.setSize=function(b,V,J=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=b,_=V,e.width=Math.floor(b*S),e.height=Math.floor(V*S),J===!0&&(e.style.width=b+"px",e.style.height=V+"px"),this.setViewport(0,0,b,V)},this.getDrawingBufferSize=function(b){return b.set($*S,_*S).floor()},this.setDrawingBufferSize=function(b,V,J){$=b,_=V,S=J,e.width=Math.floor(b*J),e.height=Math.floor(V*J),this.setViewport(0,0,b,V)},this.getCurrentViewport=function(b){return b.copy(v)},this.getViewport=function(b){return b.copy(L)},this.setViewport=function(b,V,J,tt){b.isVector4?L.set(b.x,b.y,b.z,b.w):L.set(b,V,J,tt),Bt.viewport(v.copy(L).multiplyScalar(S).round())},this.getScissor=function(b){return b.copy(N)},this.setScissor=function(b,V,J,tt){b.isVector4?N.set(b.x,b.y,b.z,b.w):N.set(b,V,J,tt),Bt.scissor(E.copy(N).multiplyScalar(S).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(b){Bt.setScissorTest(et=b)},this.setOpaqueSort=function(b){x=b},this.setTransparentSort=function(b){C=b},this.getClearColor=function(b){return b.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(b=!0,V=!0,J=!0){let tt=0;if(b){let G=!1;if(I!==null){const ft=I.texture.format;G=ft===No||ft===Uo||ft===Io}if(G){const ft=I.texture.type,D=ft===Un||ft===mi||ft===Is||ft===is||ft===Po||ft===Lo,k=It.getClearColor(),q=It.getClearAlpha(),gt=k.r,Tt=k.g,bt=k.b;D?(u[0]=gt,u[1]=Tt,u[2]=bt,u[3]=q,O.clearBufferuiv(O.COLOR,0,u)):(m[0]=gt,m[1]=Tt,m[2]=bt,m[3]=q,O.clearBufferiv(O.COLOR,0,m))}else tt|=O.COLOR_BUFFER_BIT}V&&(tt|=O.DEPTH_BUFFER_BIT,O.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),J&&(tt|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),At.dispose(),Jt.dispose(),Pt.dispose(),y.dispose(),Z.dispose(),rt.dispose(),ee.dispose(),H.dispose(),Lt.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",ls),nt.removeEventListener("sessionend",cs),bn.stop()};function ct(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const b=he.autoReset,V=Ct.enabled,J=Ct.autoUpdate,tt=Ct.needsUpdate,G=Ct.type;wt(),he.autoReset=b,Ct.enabled=V,Ct.autoUpdate=J,Ct.needsUpdate=tt,Ct.type=G}function Mt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Zt(b){const V=b.target;V.removeEventListener("dispose",Zt),pe(V)}function pe(b){be(b),Pt.remove(b)}function be(b){const V=Pt.get(b).programs;V!==void 0&&(V.forEach(function(J){Lt.releaseProgram(J)}),b.isShaderMaterial&&Lt.releaseShaderCache(b))}this.renderBufferDirect=function(b,V,J,tt,G,ft){V===null&&(V=Gt);const D=G.isMesh&&G.matrixWorld.determinant()<0,k=ds(b,V,J,tt,G);Bt.setMaterial(tt,D);let q=J.index,gt=1;if(tt.wireframe===!0){if(q=ut.getWireframeAttribute(J),q===void 0)return;gt=2}const Tt=J.drawRange,bt=J.attributes.position;let Ft=Tt.start*gt,ne=(Tt.start+Tt.count)*gt;ft!==null&&(Ft=Math.max(Ft,ft.start*gt),ne=Math.min(ne,(ft.start+ft.count)*gt)),q!==null?(Ft=Math.max(Ft,0),ne=Math.min(ne,q.count)):bt!=null&&(Ft=Math.max(Ft,0),ne=Math.min(ne,bt.count));const Kt=ne-Ft;if(Kt<0||Kt===1/0)return;ee.setup(G,tt,k,J,q);let Me,St=Rt;if(q!==null&&(Me=at.get(q),St=Ot,St.setIndex(Me)),G.isMesh)tt.wireframe===!0?(Bt.setLineWidth(tt.wireframeLinewidth*kt()),St.setMode(O.LINES)):St.setMode(O.TRIANGLES);else if(G.isLine){let Dt=tt.linewidth;Dt===void 0&&(Dt=1),Bt.setLineWidth(Dt*kt()),G.isLineSegments?St.setMode(O.LINES):G.isLineLoop?St.setMode(O.LINE_LOOP):St.setMode(O.LINE_STRIP)}else G.isPoints?St.setMode(O.POINTS):G.isSprite&&St.setMode(O.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)St.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Ut.get("WEBGL_multi_draw"))St.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Dt=G._multiDrawStarts,Ce=G._multiDrawCounts,re=G._multiDrawCount,on=q?at.get(q).bytesPerElement:1,wi=Pt.get(tt).currentProgram.getUniforms();for(let qe=0;qe<re;qe++)wi.setValue(O,"_gl_DrawID",qe),St.render(Dt[qe]/on,Ce[qe])}else if(G.isInstancedMesh)St.renderInstances(Ft,Kt,G.count);else if(J.isInstancedBufferGeometry){const Dt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ce=Math.min(J.instanceCount,Dt);St.renderInstances(Ft,Kt,Ce)}else St.render(Ft,Kt)};function te(b,V,J){b.transparent===!0&&b.side===dn&&b.forceSinglePass===!1?(b.side=Ge,b.needsUpdate=!0,Ei(b,V,J),b.side=Kn,b.needsUpdate=!0,Ei(b,V,J),b.side=dn):Ei(b,V,J)}this.compile=function(b,V,J=null){J===null&&(J=b),f=Jt.get(J),f.init(V),R.push(f),J.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),b!==J&&b.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),f.setupLights();const tt=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ft=G.material;if(ft)if(Array.isArray(ft))for(let D=0;D<ft.length;D++){const k=ft[D];te(k,J,G),tt.add(k)}else te(ft,J,G),tt.add(ft)}),R.pop(),f=null,tt},this.compileAsync=function(b,V,J=null){const tt=this.compile(b,V,J);return new Promise(G=>{function ft(){if(tt.forEach(function(D){Pt.get(D).currentProgram.isReady()&&tt.delete(D)}),tt.size===0){G(b);return}setTimeout(ft,10)}Ut.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let Le=null;function an(b){Le&&Le(b)}function ls(){bn.stop()}function cs(){bn.start()}const bn=new Kc;bn.setAnimationLoop(an),typeof self<"u"&&bn.setContext(self),this.setAnimationLoop=function(b){Le=b,nt.setAnimationLoop(b),b===null?bn.stop():bn.start()},nt.addEventListener("sessionstart",ls),nt.addEventListener("sessionend",cs),this.render=function(b,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(V),V=nt.getCamera()),b.isScene===!0&&b.onBeforeRender(w,b,V,I),f=Jt.get(b,R.length),f.init(V),R.push(f),lt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),K.setFromProjectionMatrix(lt),j=this.localClippingEnabled,B=dt.init(this.clippingPlanes,j),M=At.get(b,g.length),M.init(),g.push(M),nt.enabled===!0&&nt.isPresenting===!0){const ft=w.xr.getDepthSensingMesh();ft!==null&&yi(ft,V,-1/0,w.sortObjects)}yi(b,V,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(x,C),$t=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,$t&&It.addToRenderList(M,b),this.info.render.frame++,B===!0&&dt.beginShadows();const J=f.state.shadowsArray;Ct.render(J,b,V),B===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const tt=M.opaque,G=M.transmissive;if(f.setupLights(),V.isArrayCamera){const ft=V.cameras;if(G.length>0)for(let D=0,k=ft.length;D<k;D++){const q=ft[D];us(tt,G,b,q)}$t&&It.render(b);for(let D=0,k=ft.length;D<k;D++){const q=ft[D];hs(M,b,q,q.viewport)}}else G.length>0&&us(tt,G,b,V),$t&&It.render(b),hs(M,b,V);I!==null&&(P.updateMultisampleRenderTarget(I),P.updateRenderTargetMipmap(I)),b.isScene===!0&&b.onAfterRender(w,b,V),ee.resetDefaultState(),X=-1,Q=null,R.pop(),R.length>0?(f=R[R.length-1],B===!0&&dt.setGlobalState(w.clippingPlanes,f.state.camera)):f=null,g.pop(),g.length>0?M=g[g.length-1]:M=null};function yi(b,V,J,tt){if(b.visible===!1)return;if(b.layers.test(V.layers)){if(b.isGroup)J=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(V);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||K.intersectsSprite(b)){tt&&_t.setFromMatrixPosition(b.matrixWorld).applyMatrix4(lt);const D=rt.update(b),k=b.material;k.visible&&M.push(b,D,k,J,_t.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||K.intersectsObject(b))){const D=rt.update(b),k=b.material;if(tt&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),_t.copy(b.boundingSphere.center)):(D.boundingSphere===null&&D.computeBoundingSphere(),_t.copy(D.boundingSphere.center)),_t.applyMatrix4(b.matrixWorld).applyMatrix4(lt)),Array.isArray(k)){const q=D.groups;for(let gt=0,Tt=q.length;gt<Tt;gt++){const bt=q[gt],Ft=k[bt.materialIndex];Ft&&Ft.visible&&M.push(b,D,Ft,J,_t.z,bt)}}else k.visible&&M.push(b,D,k,J,_t.z,null)}}const ft=b.children;for(let D=0,k=ft.length;D<k;D++)yi(ft[D],V,J,tt)}function hs(b,V,J,tt){const G=b.opaque,ft=b.transmissive,D=b.transparent;f.setupLightsView(J),B===!0&&dt.setGlobalState(w.clippingPlanes,J),tt&&Bt.viewport(v.copy(tt)),G.length>0&&Si(G,V,J),ft.length>0&&Si(ft,V,J),D.length>0&&Si(D,V,J),Bt.buffers.depth.setTest(!0),Bt.buffers.depth.setMask(!0),Bt.buffers.color.setMask(!0),Bt.setPolygonOffset(!1)}function us(b,V,J,tt){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[tt.id]===void 0&&(f.state.transmissionRenderTarget[tt.id]=new gi(1,1,{generateMipmaps:!0,type:Ut.has("EXT_color_buffer_half_float")||Ut.has("EXT_color_buffer_float")?Bs:Un,minFilter:fi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));const ft=f.state.transmissionRenderTarget[tt.id],D=tt.viewport||v;ft.setSize(D.z,D.w);const k=w.getRenderTarget();w.setRenderTarget(ft),w.getClearColor(A),z=w.getClearAlpha(),z<1&&w.setClearColor(16777215,.5),w.clear(),$t&&It.render(J);const q=w.toneMapping;w.toneMapping=Zn;const gt=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),f.setupLightsView(tt),B===!0&&dt.setGlobalState(w.clippingPlanes,tt),Si(b,J,tt),P.updateMultisampleRenderTarget(ft),P.updateRenderTargetMipmap(ft),Ut.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let bt=0,Ft=V.length;bt<Ft;bt++){const ne=V[bt],Kt=ne.object,Me=ne.geometry,St=ne.material,Dt=ne.group;if(St.side===dn&&Kt.layers.test(tt.layers)){const Ce=St.side;St.side=Ge,St.needsUpdate=!0,ks(Kt,J,tt,Me,St,Dt),St.side=Ce,St.needsUpdate=!0,Tt=!0}}Tt===!0&&(P.updateMultisampleRenderTarget(ft),P.updateRenderTargetMipmap(ft))}w.setRenderTarget(k),w.setClearColor(A,z),gt!==void 0&&(tt.viewport=gt),w.toneMapping=q}function Si(b,V,J){const tt=V.isScene===!0?V.overrideMaterial:null;for(let G=0,ft=b.length;G<ft;G++){const D=b[G],k=D.object,q=D.geometry,gt=tt===null?D.material:tt,Tt=D.group;k.layers.test(J.layers)&&ks(k,V,J,q,gt,Tt)}}function ks(b,V,J,tt,G,ft){b.onBeforeRender(w,V,J,tt,G,ft),b.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(w,V,J,tt,b,ft),G.transparent===!0&&G.side===dn&&G.forceSinglePass===!1?(G.side=Ge,G.needsUpdate=!0,w.renderBufferDirect(J,V,tt,G,b,ft),G.side=Kn,G.needsUpdate=!0,w.renderBufferDirect(J,V,tt,G,b,ft),G.side=dn):w.renderBufferDirect(J,V,tt,G,b,ft),b.onAfterRender(w,V,J,tt,G,ft)}function Ei(b,V,J){V.isScene!==!0&&(V=Gt);const tt=Pt.get(b),G=f.state.lights,ft=f.state.shadowsArray,D=G.state.version,k=Lt.getParameters(b,G.state,ft,V,J),q=Lt.getProgramCacheKey(k);let gt=tt.programs;tt.environment=b.isMeshStandardMaterial?V.environment:null,tt.fog=V.fog,tt.envMap=(b.isMeshStandardMaterial?Z:y).get(b.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&b.envMap===null?V.environmentRotation:b.envMapRotation,gt===void 0&&(b.addEventListener("dispose",Zt),gt=new Map,tt.programs=gt);let Tt=gt.get(q);if(Tt!==void 0){if(tt.currentProgram===Tt&&tt.lightsStateVersion===D)return bi(b,k),Tt}else k.uniforms=Lt.getUniforms(b),b.onBeforeCompile(k,w),Tt=Lt.acquireProgram(k,q),gt.set(q,Tt),tt.uniforms=k.uniforms;const bt=tt.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(bt.clippingPlanes=dt.uniform),bi(b,k),tt.needsLights=Hs(b),tt.lightsStateVersion=D,tt.needsLights&&(bt.ambientLightColor.value=G.state.ambient,bt.lightProbe.value=G.state.probe,bt.directionalLights.value=G.state.directional,bt.directionalLightShadows.value=G.state.directionalShadow,bt.spotLights.value=G.state.spot,bt.spotLightShadows.value=G.state.spotShadow,bt.rectAreaLights.value=G.state.rectArea,bt.ltc_1.value=G.state.rectAreaLTC1,bt.ltc_2.value=G.state.rectAreaLTC2,bt.pointLights.value=G.state.point,bt.pointLightShadows.value=G.state.pointShadow,bt.hemisphereLights.value=G.state.hemi,bt.directionalShadowMap.value=G.state.directionalShadowMap,bt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,bt.spotShadowMap.value=G.state.spotShadowMap,bt.spotLightMatrix.value=G.state.spotLightMatrix,bt.spotLightMap.value=G.state.spotLightMap,bt.pointShadowMap.value=G.state.pointShadowMap,bt.pointShadowMatrix.value=G.state.pointShadowMatrix),tt.currentProgram=Tt,tt.uniformsList=null,Tt}function ti(b){if(b.uniformsList===null){const V=b.currentProgram.getUniforms();b.uniformsList=Rr.seqWithValue(V.seq,b.uniforms)}return b.uniformsList}function bi(b,V){const J=Pt.get(b);J.outputColorSpace=V.outputColorSpace,J.batching=V.batching,J.batchingColor=V.batchingColor,J.instancing=V.instancing,J.instancingColor=V.instancingColor,J.instancingMorph=V.instancingMorph,J.skinning=V.skinning,J.morphTargets=V.morphTargets,J.morphNormals=V.morphNormals,J.morphColors=V.morphColors,J.morphTargetsCount=V.morphTargetsCount,J.numClippingPlanes=V.numClippingPlanes,J.numIntersection=V.numClipIntersection,J.vertexAlphas=V.vertexAlphas,J.vertexTangents=V.vertexTangents,J.toneMapping=V.toneMapping}function ds(b,V,J,tt,G){V.isScene!==!0&&(V=Gt),P.resetTextureUnits();const ft=V.fog,D=tt.isMeshStandardMaterial?V.environment:null,k=I===null?w.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Qn,q=(tt.isMeshStandardMaterial?Z:y).get(tt.envMap||D),gt=tt.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Tt=!!J.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),bt=!!J.morphAttributes.position,Ft=!!J.morphAttributes.normal,ne=!!J.morphAttributes.color;let Kt=Zn;tt.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Kt=w.toneMapping);const Me=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,St=Me!==void 0?Me.length:0,Dt=Pt.get(tt),Ce=f.state.lights;if(B===!0&&(j===!0||b!==Q)){const Qe=b===Q&&tt.id===X;dt.setState(tt,b,Qe)}let re=!1;tt.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Ce.state.version||Dt.outputColorSpace!==k||G.isBatchedMesh&&Dt.batching===!1||!G.isBatchedMesh&&Dt.batching===!0||G.isBatchedMesh&&Dt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Dt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Dt.instancing===!1||!G.isInstancedMesh&&Dt.instancing===!0||G.isSkinnedMesh&&Dt.skinning===!1||!G.isSkinnedMesh&&Dt.skinning===!0||G.isInstancedMesh&&Dt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Dt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Dt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Dt.instancingMorph===!1&&G.morphTexture!==null||Dt.envMap!==q||tt.fog===!0&&Dt.fog!==ft||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==dt.numPlanes||Dt.numIntersection!==dt.numIntersection)||Dt.vertexAlphas!==gt||Dt.vertexTangents!==Tt||Dt.morphTargets!==bt||Dt.morphNormals!==Ft||Dt.morphColors!==ne||Dt.toneMapping!==Kt||Dt.morphTargetsCount!==St)&&(re=!0):(re=!0,Dt.__version=tt.version);let on=Dt.currentProgram;re===!0&&(on=Ei(tt,V,G));let wi=!1,qe=!1,Vr=!1;const _e=on.getUniforms(),Fn=Dt.uniforms;if(Bt.useProgram(on.program)&&(wi=!0,qe=!0,Vr=!0),tt.id!==X&&(X=tt.id,qe=!0),wi||Q!==b){Wt.reverseDepthBuffer?(st.copy(b.projectionMatrix),ku(st),Hu(st),_e.setValue(O,"projectionMatrix",st)):_e.setValue(O,"projectionMatrix",b.projectionMatrix),_e.setValue(O,"viewMatrix",b.matrixWorldInverse);const Qe=_e.map.cameraPosition;Qe!==void 0&&Qe.setValue(O,mt.setFromMatrixPosition(b.matrixWorld)),Wt.logarithmicDepthBuffer&&_e.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&_e.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),Q!==b&&(Q=b,qe=!0,Vr=!0)}if(G.isSkinnedMesh){_e.setOptional(O,G,"bindMatrix"),_e.setOptional(O,G,"bindMatrixInverse");const Qe=G.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),_e.setValue(O,"boneTexture",Qe.boneTexture,P))}G.isBatchedMesh&&(_e.setOptional(O,G,"batchingTexture"),_e.setValue(O,"batchingTexture",G._matricesTexture,P),_e.setOptional(O,G,"batchingIdTexture"),_e.setValue(O,"batchingIdTexture",G._indirectTexture,P),_e.setOptional(O,G,"batchingColorTexture"),G._colorsTexture!==null&&_e.setValue(O,"batchingColorTexture",G._colorsTexture,P));const Gr=J.morphAttributes;if((Gr.position!==void 0||Gr.normal!==void 0||Gr.color!==void 0)&&zt.update(G,J,on),(qe||Dt.receiveShadow!==G.receiveShadow)&&(Dt.receiveShadow=G.receiveShadow,_e.setValue(O,"receiveShadow",G.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(Fn.envMap.value=q,Fn.flipEnvMap.value=q.isCubeTexture&&q.isRenderTargetTexture===!1?-1:1),tt.isMeshStandardMaterial&&tt.envMap===null&&V.environment!==null&&(Fn.envMapIntensity.value=V.environmentIntensity),qe&&(_e.setValue(O,"toneMappingExposure",w.toneMappingExposure),Dt.needsLights&&Hr(Fn,Vr),ft&&tt.fog===!0&&xt.refreshFogUniforms(Fn,ft),xt.refreshMaterialUniforms(Fn,tt,S,_,f.state.transmissionRenderTarget[b.id]),Rr.upload(O,ti(Dt),Fn,P)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(Rr.upload(O,ti(Dt),Fn,P),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&_e.setValue(O,"center",G.center),_e.setValue(O,"modelViewMatrix",G.modelViewMatrix),_e.setValue(O,"normalMatrix",G.normalMatrix),_e.setValue(O,"modelMatrix",G.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const Qe=tt.uniformsGroups;for(let Wr=0,vh=Qe.length;Wr<vh;Wr++){const Ko=Qe[Wr];H.update(Ko,on),H.bind(Ko,on)}}return on}function Hr(b,V){b.ambientLightColor.needsUpdate=V,b.lightProbe.needsUpdate=V,b.directionalLights.needsUpdate=V,b.directionalLightShadows.needsUpdate=V,b.pointLights.needsUpdate=V,b.pointLightShadows.needsUpdate=V,b.spotLights.needsUpdate=V,b.spotLightShadows.needsUpdate=V,b.rectAreaLights.needsUpdate=V,b.hemisphereLights.needsUpdate=V}function Hs(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(b,V,J){Pt.get(b.texture).__webglTexture=V,Pt.get(b.depthTexture).__webglTexture=J;const tt=Pt.get(b);tt.__hasExternalTextures=!0,tt.__autoAllocateDepthBuffer=J===void 0,tt.__autoAllocateDepthBuffer||Ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),tt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,V){const J=Pt.get(b);J.__webglFramebuffer=V,J.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(b,V=0,J=0){I=b,Y=V,U=J;let tt=!0,G=null,ft=!1,D=!1;if(b){const q=Pt.get(b);if(q.__useDefaultFramebuffer!==void 0)Bt.bindFramebuffer(O.FRAMEBUFFER,null),tt=!1;else if(q.__webglFramebuffer===void 0)P.setupRenderTarget(b);else if(q.__hasExternalTextures)P.rebindTextures(b,Pt.get(b.texture).__webglTexture,Pt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const bt=b.depthTexture;if(q.__boundDepthTexture!==bt){if(bt!==null&&Pt.has(bt)&&(b.width!==bt.image.width||b.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(b)}}const gt=b.texture;(gt.isData3DTexture||gt.isDataArrayTexture||gt.isCompressedArrayTexture)&&(D=!0);const Tt=Pt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Tt[V])?G=Tt[V][J]:G=Tt[V],ft=!0):b.samples>0&&P.useMultisampledRTT(b)===!1?G=Pt.get(b).__webglMultisampledFramebuffer:Array.isArray(Tt)?G=Tt[J]:G=Tt,v.copy(b.viewport),E.copy(b.scissor),W=b.scissorTest}else v.copy(L).multiplyScalar(S).floor(),E.copy(N).multiplyScalar(S).floor(),W=et;if(Bt.bindFramebuffer(O.FRAMEBUFFER,G)&&tt&&Bt.drawBuffers(b,G),Bt.viewport(v),Bt.scissor(E),Bt.setScissorTest(W),ft){const q=Pt.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+V,q.__webglTexture,J)}else if(D){const q=Pt.get(b.texture),gt=V||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,q.__webglTexture,J||0,gt)}X=-1},this.readRenderTargetPixels=function(b,V,J,tt,G,ft,D){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let k=Pt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&D!==void 0&&(k=k[D]),k){Bt.bindFramebuffer(O.FRAMEBUFFER,k);try{const q=b.texture,gt=q.format,Tt=q.type;if(!Wt.textureFormatReadable(gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=b.width-tt&&J>=0&&J<=b.height-G&&O.readPixels(V,J,tt,G,Nt.convert(gt),Nt.convert(Tt),ft)}finally{const q=I!==null?Pt.get(I).__webglFramebuffer:null;Bt.bindFramebuffer(O.FRAMEBUFFER,q)}}},this.readRenderTargetPixelsAsync=async function(b,V,J,tt,G,ft,D){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let k=Pt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&D!==void 0&&(k=k[D]),k){const q=b.texture,gt=q.format,Tt=q.type;if(!Wt.textureFormatReadable(gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=b.width-tt&&J>=0&&J<=b.height-G){Bt.bindFramebuffer(O.FRAMEBUFFER,k);const bt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,bt),O.bufferData(O.PIXEL_PACK_BUFFER,ft.byteLength,O.STREAM_READ),O.readPixels(V,J,tt,G,Nt.convert(gt),Nt.convert(Tt),0);const Ft=I!==null?Pt.get(I).__webglFramebuffer:null;Bt.bindFramebuffer(O.FRAMEBUFFER,Ft);const ne=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await zu(O,ne,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,bt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ft),O.deleteBuffer(bt),O.deleteSync(ne),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,V=null,J=0){b.isTexture!==!0&&(Ar("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,b=arguments[1]);const tt=Math.pow(2,-J),G=Math.floor(b.image.width*tt),ft=Math.floor(b.image.height*tt),D=V!==null?V.x:0,k=V!==null?V.y:0;P.setTexture2D(b,0),O.copyTexSubImage2D(O.TEXTURE_2D,J,0,0,D,k,G,ft),Bt.unbindTexture()},this.copyTextureToTexture=function(b,V,J=null,tt=null,G=0){b.isTexture!==!0&&(Ar("WebGLRenderer: copyTextureToTexture function signature has changed."),tt=arguments[0]||null,b=arguments[1],V=arguments[2],G=arguments[3]||0,J=null);let ft,D,k,q,gt,Tt;J!==null?(ft=J.max.x-J.min.x,D=J.max.y-J.min.y,k=J.min.x,q=J.min.y):(ft=b.image.width,D=b.image.height,k=0,q=0),tt!==null?(gt=tt.x,Tt=tt.y):(gt=0,Tt=0);const bt=Nt.convert(V.format),Ft=Nt.convert(V.type);P.setTexture2D(V,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment);const ne=O.getParameter(O.UNPACK_ROW_LENGTH),Kt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Me=O.getParameter(O.UNPACK_SKIP_PIXELS),St=O.getParameter(O.UNPACK_SKIP_ROWS),Dt=O.getParameter(O.UNPACK_SKIP_IMAGES),Ce=b.isCompressedTexture?b.mipmaps[G]:b.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,Ce.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ce.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,k),O.pixelStorei(O.UNPACK_SKIP_ROWS,q),b.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,G,gt,Tt,ft,D,bt,Ft,Ce.data):b.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,G,gt,Tt,Ce.width,Ce.height,bt,Ce.data):O.texSubImage2D(O.TEXTURE_2D,G,gt,Tt,ft,D,bt,Ft,Ce),O.pixelStorei(O.UNPACK_ROW_LENGTH,ne),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Kt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Me),O.pixelStorei(O.UNPACK_SKIP_ROWS,St),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Dt),G===0&&V.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Bt.unbindTexture()},this.copyTextureToTexture3D=function(b,V,J=null,tt=null,G=0){b.isTexture!==!0&&(Ar("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,tt=arguments[1]||null,b=arguments[2],V=arguments[3],G=arguments[4]||0);let ft,D,k,q,gt,Tt,bt,Ft,ne;const Kt=b.isCompressedTexture?b.mipmaps[G]:b.image;J!==null?(ft=J.max.x-J.min.x,D=J.max.y-J.min.y,k=J.max.z-J.min.z,q=J.min.x,gt=J.min.y,Tt=J.min.z):(ft=Kt.width,D=Kt.height,k=Kt.depth,q=0,gt=0,Tt=0),tt!==null?(bt=tt.x,Ft=tt.y,ne=tt.z):(bt=0,Ft=0,ne=0);const Me=Nt.convert(V.format),St=Nt.convert(V.type);let Dt;if(V.isData3DTexture)P.setTexture3D(V,0),Dt=O.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)P.setTexture2DArray(V,0),Dt=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment);const Ce=O.getParameter(O.UNPACK_ROW_LENGTH),re=O.getParameter(O.UNPACK_IMAGE_HEIGHT),on=O.getParameter(O.UNPACK_SKIP_PIXELS),wi=O.getParameter(O.UNPACK_SKIP_ROWS),qe=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Kt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Kt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,q),O.pixelStorei(O.UNPACK_SKIP_ROWS,gt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Tt),b.isDataTexture||b.isData3DTexture?O.texSubImage3D(Dt,G,bt,Ft,ne,ft,D,k,Me,St,Kt.data):V.isCompressedArrayTexture?O.compressedTexSubImage3D(Dt,G,bt,Ft,ne,ft,D,k,Me,Kt.data):O.texSubImage3D(Dt,G,bt,Ft,ne,ft,D,k,Me,St,Kt),O.pixelStorei(O.UNPACK_ROW_LENGTH,Ce),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,re),O.pixelStorei(O.UNPACK_SKIP_PIXELS,on),O.pixelStorei(O.UNPACK_SKIP_ROWS,wi),O.pixelStorei(O.UNPACK_SKIP_IMAGES,qe),G===0&&V.generateMipmaps&&O.generateMipmap(Dt),Bt.unbindTexture()},this.initRenderTarget=function(b){Pt.get(b).__webglFramebuffer===void 0&&P.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?P.setTextureCube(b,0):b.isData3DTexture?P.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?P.setTexture2DArray(b,0):P.setTexture2D(b,0),Bt.unbindTexture()},this.resetState=function(){Y=0,U=0,I=null,Bt.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Fo?"display-p3":"srgb",e.unpackColorSpace=ae.workingColorSpace===Br?"display-p3":"srgb"}}class Vo{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Vt(t),this.near=e,this.far=n}clone(){return new Vo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ih extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Q0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Mo,this.updateRanges=[],this.version=0,this.uuid=Sn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ze=new F;class Nr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=fn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=fn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=fn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=fn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),s=oe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),s=oe(s,this.array),r=oe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Je(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Nr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Go extends as{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Hi;const vs=new F,Vi=new F,Gi=new F,Wi=new vt,xs=new vt,sh=new se,ur=new F,Ms=new F,dr=new F,Zl=new vt,Sa=new vt,Kl=new vt;class rh extends Re{constructor(t=new Go){if(super(),this.isSprite=!0,this.type="Sprite",Hi===void 0){Hi=new Ye;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Q0(e,5);Hi.setIndex([0,1,2,0,2,3]),Hi.setAttribute("position",new Nr(n,3,0,!1)),Hi.setAttribute("uv",new Nr(n,2,3,!1))}this.geometry=Hi,this.material=t,this.center=new vt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vi.setFromMatrixScale(this.matrixWorld),sh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Gi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vi.multiplyScalar(-Gi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;fr(ur.set(-.5,-.5,0),Gi,a,Vi,s,r),fr(Ms.set(.5,-.5,0),Gi,a,Vi,s,r),fr(dr.set(.5,.5,0),Gi,a,Vi,s,r),Zl.set(0,0),Sa.set(1,0),Kl.set(1,1);let o=t.ray.intersectTriangle(ur,Ms,dr,!1,vs);if(o===null&&(fr(Ms.set(-.5,.5,0),Gi,a,Vi,s,r),Sa.set(0,1),o=t.ray.intersectTriangle(ur,dr,Ms,!1,vs),o===null))return;const l=t.ray.origin.distanceTo(vs);l<t.near||l>t.far||e.push({distance:l,point:vs.clone(),uv:sn.getInterpolation(vs,ur,Ms,dr,Zl,Sa,Kl,new vt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function fr(i,t,e,n,s,r){Wi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(xs.x=r*Wi.x-s*Wi.y,xs.y=s*Wi.x+r*Wi.y):xs.copy(Wi),i.copy(t),i.x+=xs.x,i.y+=xs.y,i.applyMatrix4(sh)}class tg extends Oe{constructor(t=null,e=1,n=1,s,r,a,o,l,h=Xe,d=Xe,p,c){super(null,a,o,l,h,d,s,r,p,c),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jl extends Je{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Xi=new se,Jl=new se,pr=[],Ql=new xi,eg=new se,ys=new Ht,Ss=new zs;class ah extends Ht{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new jl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,eg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new xi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xi),Ql.copy(t.boundingBox).applyMatrix4(Xi),this.boundingBox.union(Ql)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new zs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xi),Ss.copy(t.boundingSphere).applyMatrix4(Xi),this.boundingSphere.union(Ss)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ys.geometry=this.geometry,ys.material=this.material,ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ss.copy(this.boundingSphere),Ss.applyMatrix4(n),t.ray.intersectsSphere(Ss)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Xi),Jl.multiplyMatrices(n,Xi),ys.matrixWorld=Jl,ys.raycast(t,pr);for(let a=0,o=pr.length;a<o;a++){const l=pr[a];l.instanceId=r,l.object=this,e.push(l)}pr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new jl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new tg(new Float32Array(s*this.count),s,this.count,Do,Mn));const r=this.morphTexture.source.data.data;let a=0;for(let h=0;h<n.length;h++)a+=n[h];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Mi extends Oe{constructor(t,e,n,s,r,a,o,l,h){super(t,e,n,s,r,a,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class En{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,h;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),h=n[s]-a,h<0)o=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const d=n[s],c=n[s+1]-d,u=(a-d)/c;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new vt:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new F,s=[],r=[],a=[],o=new F,l=new se;for(let u=0;u<=t;u++){const m=u/t;s[u]=this.getTangentAt(m,new F)}r[0]=new F,a[0]=new F;let h=Number.MAX_VALUE;const d=Math.abs(s[0].x),p=Math.abs(s[0].y),c=Math.abs(s[0].z);d<=h&&(h=d,n.set(1,0,0)),p<=h&&(h=p,n.set(0,1,0)),c<=h&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Ae(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(o,m))}a[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(Ae(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(u=-u);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],u*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Wo extends En{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new vt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const d=Math.cos(this.aRotation),p=Math.sin(this.aRotation),c=l-this.aX,u=h-this.aY;l=c*d-u*p+this.aX,h=c*p+u*d+this.aY}return n.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ng extends Wo{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Xo(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,h){s(a,o,h*(o-r),h*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,h,d,p){let c=(a-r)/h-(o-r)/(h+d)+(o-a)/d,u=(o-a)/d-(l-a)/(d+p)+(l-o)/p;c*=d,u*=d,s(a,o,c,u)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const mr=new F,Ea=new Xo,ba=new Xo,wa=new Xo;class ig extends En{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new F){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let h,d;this.closed||o>0?h=s[(o-1)%r]:(mr.subVectors(s[0],s[1]).add(s[0]),h=mr);const p=s[o%r],c=s[(o+1)%r];if(this.closed||o+2<r?d=s[(o+2)%r]:(mr.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=mr),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let m=Math.pow(h.distanceToSquared(p),u),M=Math.pow(p.distanceToSquared(c),u),f=Math.pow(c.distanceToSquared(d),u);M<1e-4&&(M=1),m<1e-4&&(m=M),f<1e-4&&(f=M),Ea.initNonuniformCatmullRom(h.x,p.x,c.x,d.x,m,M,f),ba.initNonuniformCatmullRom(h.y,p.y,c.y,d.y,m,M,f),wa.initNonuniformCatmullRom(h.z,p.z,c.z,d.z,m,M,f)}else this.curveType==="catmullrom"&&(Ea.initCatmullRom(h.x,p.x,c.x,d.x,this.tension),ba.initCatmullRom(h.y,p.y,c.y,d.y,this.tension),wa.initCatmullRom(h.z,p.z,c.z,d.z,this.tension));return n.set(Ea.calc(l),ba.calc(l),wa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new F().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function tc(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function sg(i,t){const e=1-i;return e*e*t}function rg(i,t){return 2*(1-i)*i*t}function ag(i,t){return i*i*t}function Rs(i,t,e,n){return sg(i,t)+rg(i,e)+ag(i,n)}function og(i,t){const e=1-i;return e*e*e*t}function lg(i,t){const e=1-i;return 3*e*e*i*t}function cg(i,t){return 3*(1-i)*i*i*t}function hg(i,t){return i*i*i*t}function Cs(i,t,e,n,s){return og(i,t)+lg(i,e)+cg(i,n)+hg(i,s)}class oh extends En{constructor(t=new vt,e=new vt,n=new vt,s=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new vt){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Cs(t,s.x,r.x,a.x,o.x),Cs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ug extends En{constructor(t=new F,e=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new F){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Cs(t,s.x,r.x,a.x,o.x),Cs(t,s.y,r.y,a.y,o.y),Cs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class lh extends En{constructor(t=new vt,e=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new vt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class dg extends En{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ch extends En{constructor(t=new vt,e=new vt,n=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new vt){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Rs(t,s.x,r.x,a.x),Rs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fg extends En{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Rs(t,s.x,r.x,a.x),Rs(t,s.y,r.y,a.y),Rs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hh extends En{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new vt){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],h=s[a],d=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return n.set(tc(o,l.x,h.x,d.x,p.x),tc(o,l.y,h.y,d.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new vt().fromArray(s))}return this}}var ec=Object.freeze({__proto__:null,ArcCurve:ng,CatmullRomCurve3:ig,CubicBezierCurve:oh,CubicBezierCurve3:ug,EllipseCurve:Wo,LineCurve:lh,LineCurve3:dg,QuadraticBezierCurve:ch,QuadraticBezierCurve3:fg,SplineCurve:hh});class pg extends En{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ec[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),h=l===0?0:1-a/l;return o.getPointAt(h,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let h=0;h<l.length;h++){const d=l[h];n&&n.equals(d)||(e.push(d),n=d)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new ec[s.type]().fromJSON(s))}return this}}class Eo extends pg{constructor(t){super(),this.type="Path",this.currentPoint=new vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new lh(this.currentPoint.clone(),new vt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new ch(this.currentPoint.clone(),new vt(t,e),new vt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new oh(this.currentPoint.clone(),new vt(t,e),new vt(n,s),new vt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new hh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const h=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+h,e+d,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const h=new Wo(t,e,n,s,r,a,o,l);if(this.curves.length>0){const p=h.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(h);const d=h.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class He extends Ye{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const h=this;s=Math.floor(s),r=Math.floor(r);const d=[],p=[],c=[],u=[];let m=0;const M=[],f=n/2;let g=0;R(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(d),this.setAttribute("position",new xe(p,3)),this.setAttribute("normal",new xe(c,3)),this.setAttribute("uv",new xe(u,2));function R(){const T=new F,Y=new F;let U=0;const I=(e-t)/n;for(let X=0;X<=r;X++){const Q=[],v=X/r,E=v*(e-t)+t;for(let W=0;W<=s;W++){const A=W/s,z=A*l+o,$=Math.sin(z),_=Math.cos(z);Y.x=E*$,Y.y=-v*n+f,Y.z=E*_,p.push(Y.x,Y.y,Y.z),T.set($,I,_).normalize(),c.push(T.x,T.y,T.z),u.push(A,1-v),Q.push(m++)}M.push(Q)}for(let X=0;X<s;X++)for(let Q=0;Q<r;Q++){const v=M[Q][X],E=M[Q+1][X],W=M[Q+1][X+1],A=M[Q][X+1];t>0&&(d.push(v,E,A),U+=3),e>0&&(d.push(E,W,A),U+=3)}h.addGroup(g,U,0),g+=U}function w(T){const Y=m,U=new vt,I=new F;let X=0;const Q=T===!0?t:e,v=T===!0?1:-1;for(let W=1;W<=s;W++)p.push(0,f*v,0),c.push(0,v,0),u.push(.5,.5),m++;const E=m;for(let W=0;W<=s;W++){const z=W/s*l+o,$=Math.cos(z),_=Math.sin(z);I.x=Q*_,I.y=f*v,I.z=Q*$,p.push(I.x,I.y,I.z),c.push(0,v,0),U.x=$*.5+.5,U.y=_*.5*v+.5,u.push(U.x,U.y),m++}for(let W=0;W<s;W++){const A=Y+W,z=E+W;T===!0?d.push(z,z+1,A):d.push(z+1,z,A),X+=3}h.addGroup(g,X,T===!0?1:2),g+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new He(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Fr extends He{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Fr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class uh extends Eo{constructor(t){super(t),this.uuid=Sn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Eo().fromJSON(s))}return this}}const mg={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=dh(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,h,d,p,c,u;if(n&&(r=Mg(i,t,r,e)),i.length>80*e){o=h=i[0],l=d=i[1];for(let m=e;m<s;m+=e)p=i[m],c=i[m+1],p<o&&(o=p),c<l&&(l=c),p>h&&(h=p),c>d&&(d=c);u=Math.max(h-o,d-l),u=u!==0?32767/u:0}return Ns(r,a,e,o,l,u,0),a}};function dh(i,t,e,n,s){let r,a;if(s===Lg(i,t,e,n)>0)for(r=t;r<e;r+=n)a=nc(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=nc(r,i[r],i[r+1],a);return a&&kr(a,a.next)&&(Os(a),a=a.next),a}function _i(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(kr(e,e.next)||me(e.prev,e,e.next)===0)){if(Os(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ns(i,t,e,n,s,r,a){if(!i)return;!a&&r&&wg(i,n,s,r);let o=i,l,h;for(;i.prev!==i.next;){if(l=i.prev,h=i.next,r?_g(i,n,s,r):gg(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(h.i/e|0),Os(i),i=h.next,o=h.next;continue}if(i=h,i===o){a?a===1?(i=vg(_i(i),t,e),Ns(i,t,e,n,s,r,2)):a===2&&xg(i,t,e,n,s,r):Ns(_i(i),t,e,n,s,r,1);break}}}function gg(i){const t=i.prev,e=i,n=i.next;if(me(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,h=n.y,d=s<r?s<a?s:a:r<a?r:a,p=o<l?o<h?o:h:l<h?l:h,c=s>r?s>a?s:a:r>a?r:a,u=o>l?o>h?o:h:l>h?l:h;let m=n.next;for(;m!==t;){if(m.x>=d&&m.x<=c&&m.y>=p&&m.y<=u&&Ki(s,o,r,l,a,h,m.x,m.y)&&me(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function _g(i,t,e,n){const s=i.prev,r=i,a=i.next;if(me(s,r,a)>=0)return!1;const o=s.x,l=r.x,h=a.x,d=s.y,p=r.y,c=a.y,u=o<l?o<h?o:h:l<h?l:h,m=d<p?d<c?d:c:p<c?p:c,M=o>l?o>h?o:h:l>h?l:h,f=d>p?d>c?d:c:p>c?p:c,g=bo(u,m,t,e,n),R=bo(M,f,t,e,n);let w=i.prevZ,T=i.nextZ;for(;w&&w.z>=g&&T&&T.z<=R;){if(w.x>=u&&w.x<=M&&w.y>=m&&w.y<=f&&w!==s&&w!==a&&Ki(o,d,l,p,h,c,w.x,w.y)&&me(w.prev,w,w.next)>=0||(w=w.prevZ,T.x>=u&&T.x<=M&&T.y>=m&&T.y<=f&&T!==s&&T!==a&&Ki(o,d,l,p,h,c,T.x,T.y)&&me(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;w&&w.z>=g;){if(w.x>=u&&w.x<=M&&w.y>=m&&w.y<=f&&w!==s&&w!==a&&Ki(o,d,l,p,h,c,w.x,w.y)&&me(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;T&&T.z<=R;){if(T.x>=u&&T.x<=M&&T.y>=m&&T.y<=f&&T!==s&&T!==a&&Ki(o,d,l,p,h,c,T.x,T.y)&&me(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function vg(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!kr(s,r)&&fh(s,n,n.next,r)&&Fs(s,r)&&Fs(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Os(n),Os(n.next),n=i=r),n=n.next}while(n!==i);return _i(n)}function xg(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Rg(a,o)){let l=ph(a,o);a=_i(a,a.next),l=_i(l,l.next),Ns(a,t,e,n,s,r,0),Ns(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Mg(i,t,e,n){const s=[];let r,a,o,l,h;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,h=dh(i,o,l,n,!1),h===h.next&&(h.steiner=!0),s.push(Ag(h));for(s.sort(yg),r=0;r<s.length;r++)e=Sg(s[r],e);return e}function yg(i,t){return i.x-t.x}function Sg(i,t){const e=Eg(i,t);if(!e)return t;const n=ph(e,i);return _i(n,n.next),_i(e,e.next)}function Eg(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const c=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(c<=r&&c>n&&(n=c,s=e.x<e.next.x?e:e.next,c===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,l=s.x,h=s.y;let d=1/0,p;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Ki(a<h?r:n,a,l,h,a<h?n:r,a,e.x,e.y)&&(p=Math.abs(a-e.y)/(r-e.x),Fs(e,i)&&(p<d||p===d&&(e.x>s.x||e.x===s.x&&bg(s,e)))&&(s=e,d=p)),e=e.next;while(e!==o);return s}function bg(i,t){return me(i.prev,i,t.prev)<0&&me(t.next,i,i.next)<0}function wg(i,t,e,n){let s=i;do s.z===0&&(s.z=bo(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Tg(s)}function Tg(i){let t,e,n,s,r,a,o,l,h=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<h&&(o++,n=n.nextZ,!!n);t++);for(l=h;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,h*=2}while(a>1);return i}function bo(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Ag(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ki(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Rg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Cg(i,t)&&(Fs(i,t)&&Fs(t,i)&&Pg(i,t)&&(me(i.prev,i,t.prev)||me(i,t.prev,t))||kr(i,t)&&me(i.prev,i,i.next)>0&&me(t.prev,t,t.next)>0)}function me(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function kr(i,t){return i.x===t.x&&i.y===t.y}function fh(i,t,e,n){const s=_r(me(i,t,e)),r=_r(me(i,t,n)),a=_r(me(e,n,i)),o=_r(me(e,n,t));return!!(s!==r&&a!==o||s===0&&gr(i,e,t)||r===0&&gr(i,n,t)||a===0&&gr(e,i,n)||o===0&&gr(e,t,n))}function gr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function _r(i){return i>0?1:i<0?-1:0}function Cg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&fh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Fs(i,t){return me(i.prev,i,i.next)<0?me(i,t,i.next)>=0&&me(i,i.prev,t)>=0:me(i,t,i.prev)<0||me(i,i.next,t)<0}function Pg(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ph(i,t){const e=new wo(i.i,i.x,i.y),n=new wo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function nc(i,t,e,n){const s=new wo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Os(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function wo(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Lg(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Ps{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Ps.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];ic(t),sc(n,t);let a=t.length;e.forEach(ic);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,sc(n,e[l]);const o=mg.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function ic(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function sc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Yo extends Ye{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],h=[],d=[];let p=t;const c=(e-t)/s,u=new F,m=new vt;for(let M=0;M<=s;M++){for(let f=0;f<=n;f++){const g=r+f/n*a;u.x=p*Math.cos(g),u.y=p*Math.sin(g),l.push(u.x,u.y,u.z),h.push(0,0,1),m.x=(u.x/e+1)/2,m.y=(u.y/e+1)/2,d.push(m.x,m.y)}p+=c}for(let M=0;M<s;M++){const f=M*(n+1);for(let g=0;g<n;g++){const R=g+f,w=R,T=R+n+1,Y=R+n+2,U=R+1;o.push(w,T,U),o.push(T,Y,U)}}this.setIndex(o),this.setAttribute("position",new xe(l,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ls extends Ye{constructor(t=new uh([new vt(0,.5),new vt(-.5,-.5),new vt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let d=0;d<t.length;d++)h(t[d]),this.addGroup(o,l,d),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new xe(s,3)),this.setAttribute("normal",new xe(r,3)),this.setAttribute("uv",new xe(a,2));function h(d){const p=s.length/3,c=d.extractPoints(e);let u=c.shape;const m=c.holes;Ps.isClockWise(u)===!1&&(u=u.reverse());for(let f=0,g=m.length;f<g;f++){const R=m[f];Ps.isClockWise(R)===!0&&(m[f]=R.reverse())}const M=Ps.triangulateShape(u,m);for(let f=0,g=m.length;f<g;f++){const R=m[f];u=u.concat(R)}for(let f=0,g=u.length;f<g;f++){const R=u[f];s.push(R.x,R.y,0),r.push(0,0,1),a.push(R.x,R.y)}for(let f=0,g=M.length;f<g;f++){const R=M[f],w=R[0]+p,T=R[1]+p,Y=R[2]+p;n.push(w,T,Y),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Dg(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];n.push(a)}return new Ls(n,t.curveSegments)}}function Dg(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Yn extends Ye{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let h=0;const d=[],p=new F,c=new F,u=[],m=[],M=[],f=[];for(let g=0;g<=n;g++){const R=[],w=g/n;let T=0;g===0&&a===0?T=.5/e:g===n&&l===Math.PI&&(T=-.5/e);for(let Y=0;Y<=e;Y++){const U=Y/e;p.x=-t*Math.cos(s+U*r)*Math.sin(a+w*o),p.y=t*Math.cos(a+w*o),p.z=t*Math.sin(s+U*r)*Math.sin(a+w*o),m.push(p.x,p.y,p.z),c.copy(p).normalize(),M.push(c.x,c.y,c.z),f.push(U+T,1-w),R.push(h++)}d.push(R)}for(let g=0;g<n;g++)for(let R=0;R<e;R++){const w=d[g][R+1],T=d[g][R],Y=d[g+1][R],U=d[g+1][R+1];(g!==0||a>0)&&u.push(w,T,U),(g!==n-1||l<Math.PI)&&u.push(T,Y,U)}this.setIndex(u),this.setAttribute("position",new xe(m,3)),this.setAttribute("normal",new xe(M,3)),this.setAttribute("uv",new xe(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ne extends as{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zc,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class qo extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Ig extends qo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ta=new se,rc=new F,ac=new F;class mh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ko,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;rc.setFromMatrixPosition(t.matrixWorld),e.position.copy(rc),ac.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ac),e.updateMatrixWorld(),Ta.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ta),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ta)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const oc=new se,Es=new F,Aa=new F;class Ug extends mh{constructor(){super(new je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new vt(4,2),this._viewportCount=6,this._viewports=[new ce(2,1,1,1),new ce(0,1,1,1),new ce(3,1,1,1),new ce(1,1,1,1),new ce(3,0,1,1),new ce(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Es.setFromMatrixPosition(t.matrixWorld),n.position.copy(Es),Aa.copy(n.position),Aa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Aa),n.updateMatrixWorld(),s.makeTranslation(-Es.x,-Es.y,-Es.z),oc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oc)}}class Ng extends qo{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ug}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Fg extends mh{constructor(){super(new jc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Og extends qo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new Fg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Bg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=lc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=lc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function lc(){return performance.now()}const cc=new se;class zg{constructor(t,e,n=0,s=1/0){this.ray=new Bo(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new zo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return cc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cc),this}intersectObject(t,e=!0,n=[]){return To(t,this,n,e),n.sort(hc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)To(t[s],this,n,e);return n.sort(hc),n}}function hc(i,t){return i.distance-t.distance}function To(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)To(r[a],t,e,!0)}}class uc{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ae(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class kg extends vi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ro}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ro);const dc={type:"change"},$o={type:"start"},gh={type:"end"},vr=new Bo,fc=new Xn,Hg=Math.cos(70*vn.DEG2RAD),ye=new F,We=2*Math.PI,le={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ra=1e-6;class Vg extends kg{constructor(t,e=null){super(t,e),this.state=le.NONE,this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ji.ROTATE,MIDDLE:ji.DOLLY,RIGHT:ji.PAN},this.touches={ONE:$i.ROTATE,TWO:$i.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new Nn,this._lastTargetPosition=new F,this._quat=new Nn().setFromUnitVectors(t.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new uc,this._sphericalDelta=new uc,this._scale=1,this._panOffset=new F,this._rotateStart=new vt,this._rotateEnd=new vt,this._rotateDelta=new vt,this._panStart=new vt,this._panEnd=new vt,this._panDelta=new vt,this._dollyStart=new vt,this._dollyEnd=new vt,this._dollyDelta=new vt,this._dollyDirection=new F,this._mouse=new vt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Wg.bind(this),this._onPointerDown=Gg.bind(this),this._onPointerUp=Xg.bind(this),this._onContextMenu=Jg.bind(this),this._onMouseWheel=$g.bind(this),this._onKeyDown=Zg.bind(this),this._onTouchStart=Kg.bind(this),this._onTouchMove=jg.bind(this),this._onMouseDown=Yg.bind(this),this._onMouseMove=qg.bind(this),this._interceptControlDown=Qg.bind(this),this._interceptControlUp=t_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(dc),this.update(),this.state=le.NONE}update(t=null){const e=this.object.position;ye.copy(e).sub(this.target),ye.applyQuaternion(this._quat),this._spherical.setFromVector3(ye),this.autoRotate&&this.state===le.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=We:n>Math.PI&&(n-=We),s<-Math.PI?s+=We:s>Math.PI&&(s-=We),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(ye.setFromSpherical(this._spherical),ye.applyQuaternion(this._quatInverse),e.copy(this.target).add(ye),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=ye.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new F(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const h=new F(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(o),this.object.updateMatrixWorld(),a=ye.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(vr.origin.copy(this.object.position),vr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(vr.direction))<Hg?this.object.lookAt(this.target):(fc.setFromNormalAndCoplanarPoint(this.object.up,this.target),vr.intersectPlane(fc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ra||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ra||this._lastTargetPosition.distanceToSquared(this.target)>Ra?(this.dispatchEvent(dc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?We/60*this.autoRotateSpeed*t:We/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ye.setFromMatrixColumn(e,0),ye.multiplyScalar(-t),this._panOffset.add(ye)}_panUp(t,e){this.screenSpacePanning===!0?ye.setFromMatrixColumn(e,1):(ye.setFromMatrixColumn(e,0),ye.crossVectors(this.object.up,ye)),ye.multiplyScalar(t),this._panOffset.add(ye)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ye.copy(s).sub(this.target);let r=ye.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(We*this._rotateDelta.x/e.clientHeight),this._rotateUp(We*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(We*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-We*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(We*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-We*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(We*this._rotateDelta.x/e.clientHeight),this._rotateUp(We*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new vt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Gg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Wg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Xg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(gh),this.state=le.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Yg(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ji.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=le.DOLLY;break;case ji.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=le.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=le.ROTATE}break;case ji.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=le.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=le.PAN}break;default:this.state=le.NONE}this.state!==le.NONE&&this.dispatchEvent($o)}function qg(i){switch(this.state){case le.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case le.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case le.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function $g(i){this.enabled===!1||this.enableZoom===!1||this.state!==le.NONE||(i.preventDefault(),this.dispatchEvent($o),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(gh))}function Zg(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Kg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case $i.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=le.TOUCH_ROTATE;break;case $i.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=le.TOUCH_PAN;break;default:this.state=le.NONE}break;case 2:switch(this.touches.TWO){case $i.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=le.TOUCH_DOLLY_PAN;break;case $i.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=le.TOUCH_DOLLY_ROTATE;break;default:this.state=le.NONE}break;default:this.state=le.NONE}this.state!==le.NONE&&this.dispatchEvent($o)}function jg(i){switch(this._trackPointer(i),this.state){case le.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case le.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case le.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case le.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=le.NONE}}function Jg(i){this.enabled!==!1&&i.preventDefault()}function Qg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function t_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class e_ extends ih{constructor(){super();const t=new ge;t.deleteAttribute("uv");const e=new Ne({side:Ge}),n=new Ne,s=new Ng(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new Ht(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new Ht(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new Ht(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new Ht(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const h=new Ht(t,n);h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),this.add(h);const d=new Ht(t,n);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);const p=new Ht(t,n);p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);const c=new Ht(t,Yi(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const u=new Ht(t,Yi(50));u.position.set(-16.109,18.021,-8.207),u.scale.set(.1,2.425,2.751),this.add(u);const m=new Ht(t,Yi(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);const M=new Ht(t,Yi(43));M.position.set(-.462,8.89,14.52),M.scale.set(4.38,5.441,.088),this.add(M);const f=new Ht(t,Yi(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const g=new Ht(t,Yi(100));g.position.set(0,20,0),g.scale.set(1,.1,1),this.add(g)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Yi(i){const t=new mn;return t.color.setScalar(i),t}const Ds='Inter, "Segoe UI", Roboto, Arial, sans-serif',xr=2;function Ca(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}const Pa=(i,t,e)=>new Vt(i).lerp(new Vt(t),e).getStyle();function n_({title:i,number:t=null,status:e="",color:n=null,muted:s=!1}){const r=document.createElement("canvas"),a=r.getContext("2d"),o=`${s?500:600} ${s?11.5:13}px ${Ds}`,l=`700 13px ${Ds}`,h=`600 11px ${Ds}`,d=String(i||""),p=t!=null?String(t):"";a.font=o;const c=a.measureText(d).width;a.font=l;const u=p?a.measureText(p).width+6:0;a.font=h;const m=e?a.measureText(e).width:0,M=s?0:13,f=s?20:24,g=Math.ceil(9+M+u+c+10),R=e?18:0,w=e?Math.ceil(m+16):0,T=e?3:0,Y=9,U=4,I=Math.min(520,Math.max(g,w)+U*2),X=U+f+T+R+Y+1;r.width=I*xr,r.height=X*xr,a.scale(xr,xr);const Q=(I-Math.min(g,I-U*2))/2,v=Math.min(g,I-U*2);a.save(),a.shadowColor="rgba(15, 23, 42, 0.28)",a.shadowBlur=5,a.shadowOffsetY=1.5,Ca(a,Q,U,v,f,f/2),a.fillStyle=s?"rgba(255, 255, 255, 0.86)":"#ffffff",a.fill(),a.restore(),Ca(a,Q+.5,U+.5,v-1,f-1,f/2),a.strokeStyle="rgba(15, 23, 42, 0.12)",a.lineWidth=1,a.stroke();let E=Q+9;const W=U+f/2;M&&(a.beginPath(),a.arc(E+4,W,4,0,Math.PI*2),a.fillStyle=n||"#94a3b8",a.fill(),E+=M),a.textBaseline="middle",p&&(a.font=l,a.fillStyle="#0f172a",a.fillText(p,E,W+.5),E+=u),a.font=o,a.fillStyle=s?"#475569":"#0f172a";const A=Q+v-10-E;let z=d;if(c>A){for(;z.length>3&&a.measureText(z+"…").width>A;)z=z.slice(0,-1);z+="…"}if(a.fillText(z,E,W+.5),e){const S=Math.min(w,I-U*2),x=(I-S)/2,C=U+f+T,L=n||"#64748b";Ca(a,x,C,S,R,R/2),a.fillStyle=Pa(L,"#ffffff",.8),a.fill(),a.strokeStyle=Pa(L,"#ffffff",.35),a.stroke(),a.font=h,a.fillStyle=Pa(L,"#000000",.5),a.textAlign="center",a.fillText(e,I/2,C+R/2+.5,S-12),a.textAlign="start"}const $=U+f+T+R;a.beginPath(),a.moveTo(I/2,$),a.lineTo(I/2,X-1),a.strokeStyle=s?"rgba(71, 85, 105, 0.45)":"rgba(15, 23, 42, 0.55)",a.lineWidth=1.5,a.stroke(),a.beginPath(),a.arc(I/2,X-1.5,1.5,0,Math.PI*2),a.fillStyle=a.strokeStyle,a.fill();const _=new Mi(r);return _.colorSpace=Fe,_.minFilter=nn,_.generateMipmaps=!1,{texture:_,width:I,height:X}}function i_(i){const t=document.createElement("canvas"),e=t.getContext("2d"),n=`700 64px ${Ds}`;e.font=n;const s=Math.min(2048,Math.ceil(e.measureText(i).width+90));t.width=s,t.height=120,e.fillStyle="#ffffff",e.fillRect(0,0,s,120),e.fillStyle="#1d4ed8",e.fillRect(0,0,18,120),e.font=n,e.fillStyle="#0f172a",e.textBaseline="middle",e.fillText(i,48,64,s-70);const r=new Mi(t);return r.colorSpace=Fe,r.anisotropy=4,{texture:r,aspect:s/120}}function s_(i){const t=document.createElement("canvas"),e=t.getContext("2d"),n=`800 96px ${Ds}`;e.font=n;const s=Math.min(4096,Math.ceil(e.measureText(i).width+40));t.width=s,t.height=128,e.font=n,e.fillStyle="rgba(30, 41, 59, 0.9)",e.textBaseline="middle",e.fillText(i,20,68);const r=new Mi(t);return r.colorSpace=Fe,r.anisotropy=8,{texture:r,aspect:s/128}}function r_(){const i=document.createElement("canvas");i.width=128,i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.75)"),e.addColorStop(.6,"rgba(255,255,255,0.18)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);const n=new Mi(i);return n.colorSpace=Fe,n}function a_(i,t=0){const e=(Number(i.rot)||0)*Math.PI/180,n=Math.abs(Math.cos(e)),s=Math.abs(Math.sin(e)),r=((i.w||0)*n+(i.d||0)*s)/2+t,a=((i.w||0)*s+(i.d||0)*n)/2+t;return[i.x-r,i.x+r,i.z-a,i.z+a]}function o_(i){return i!=null&&i.h?i.h:Math.min(12,Math.max(6.5,6+Math.max((i==null?void 0:i.w)||0,(i==null?void 0:i.d)||0)/25))}function Zo(i,t,e=1,n=1){const s=document.createElement("canvas");s.width=i,s.height=i,t(s.getContext("2d"),i);const r=new Mi(s);return r.colorSpace=Fe,r.wrapS=jn,r.wrapT=jn,r.repeat.set(e,n),r}function l_(i,t){let e=7;const n=()=>(e=e*16807%2147483647,e/2147483647);return Zo(512,(s,r)=>{s.fillStyle="#ffffff",s.fillRect(0,0,r,r);for(let a=0;a<40;a+=1){const o=n()*r,l=n()*r,h=30+n()*110,d=s.createRadialGradient(o,l,0,o,l,h),p=n()>.5?0:255;d.addColorStop(0,`rgba(${p},${p},${p},${.035+n()*.03})`),d.addColorStop(1,`rgba(${p},${p},${p},0)`),s.fillStyle=d,s.fillRect(o-h,l-h,h*2,h*2)}for(let a=0;a<9e3;a+=1){const o=Math.floor(n()*120);s.fillStyle=`rgba(${o},${o},${o},${.03+n()*.05})`,s.fillRect(n()*r,n()*r,1+n()*1.5,1+n()*1.5)}s.fillStyle="rgba(70, 76, 84, 0.32)",s.fillRect(0,0,r,2),s.fillRect(0,0,2,r)},i,t)}function _h(){return Zo(128,(i,t)=>{i.fillStyle="#f5b800",i.fillRect(0,0,t,t),i.fillStyle="#1f2328";for(let e=-t;e<t*2;e+=32)i.beginPath(),i.moveTo(e,0),i.lineTo(e+16,0),i.lineTo(e+16-t,t),i.lineTo(e-t,t),i.closePath(),i.fill()},1,1)}function c_(i){return Zo(128,(t,e)=>{t.fillStyle="#ffffff",t.fillRect(0,0,e,e),t.fillStyle="rgba(90, 100, 112, 0.18)",t.fillRect(0,0,3,e),t.fillStyle="rgba(255, 255, 255, 0.9)",t.fillRect(3,0,2,e),t.fillStyle="rgba(90, 100, 112, 0.07)",t.fillRect(e/2,0,2,e)},i,1)}function Ke(i,t={}){return new Ne({color:i,roughness:.75,metalness:.05,...t})}function Wn(i,t,e,n,s,r,a,{shadow:o=!0}={}){const l=new Ht(new ge(i,t,e),n);return l.position.set(s,r,a),l.castShadow=o,l.receiveShadow=!0,l}function h_(i,t,e,n,s){const r=[],a=[],o=(d,p,c,u)=>{const m=r.length/3;r.push(d,0,p,c,0,p,c,0,u,d,0,u),a.push(m,m+2,m+1,m,m+3,m+2)},l=(d,p)=>{for(let c=0;c<d;c+=n+s)p(c,Math.min(d,c+n))};l(i,(d,p)=>{o(-i/2+d,-t/2,-i/2+p,-t/2+e),o(-i/2+d,t/2-e,-i/2+p,t/2)}),l(t,(d,p)=>{o(-i/2,-t/2+d,-i/2+e,-t/2+p),o(i/2-e,-t/2+d,i/2,-t/2+p)});const h=new Ye;return h.setAttribute("position",new xe(r,3)),h.setIndex(a),h.computeVertexNormals(),h}function qi(i,t,e,{shadow:n=!0}={}){if(!e.length)return null;const s=new ah(i,t,e.length),r=new se,a=new Nn;return e.forEach((o,l)=>{a.setFromEuler(new rn(0,o.ry||0,0)),r.compose(new F(o.x,o.y,o.z),a,new F(o.sx??1,o.sy??1,o.sz??1)),s.setMatrixAt(l,r)}),s.instanceMatrix.needsUpdate=!0,s.computeBoundingBox(),s.computeBoundingSphere(),s.castShadow=n,s.receiveShadow=!0,s}function u_(i,{anisotropy:t=4}={}){const e=i.floor||{w:60,d:40},{w:n,d:s}=e,r=o_(e),a=new Ve,o=i.elements||[],l=i.aisles||[],h=o.filter(A=>A.kind!=="label"&&A.kind!=="crane").map(A=>a_(A,.45)),d=(A,z,$=.3)=>!h.some(_=>A+$>_[0]&&A-$<_[1]&&z+$>_[2]&&z-$<_[3]),p=Math.max(n,s),c=new Ht(new yn(p*8,p*8),Ke("#a9b1ba",{roughness:.95}));c.rotation.x=-Math.PI/2,c.position.y=-.04,c.receiveShadow=!0,a.add(c);const u=l_(n/6,s/6);u.anisotropy=t;const m=new Ht(new yn(n,s),Ke("#bfc5cc",{map:u,roughness:.78,metalness:0}));m.rotation.x=-Math.PI/2,m.receiveShadow=!0,a.add(m);const M=.25,f=.6,g=[],R=Ke("#98a1ab",{roughness:.9}),w=Ke("#7d97ad",{roughness:.1,metalness:.4,transparent:!0,opacity:.75}),T=Ke("#5b636c",{roughness:.6,metalness:.3}),Y=Ke("#8a97a4",{roughness:.55,metalness:.35}),U=Ke("#ffffff",{map:_h(),roughness:.6});[{len:n+2*M,x:0,z:-s/2-M/2,ry:0,normal:[0,0,-1],door:!1},{len:n+2*M,x:0,z:s/2+M/2,ry:0,normal:[0,0,1],door:!1},{len:s,x:-n/2-M/2,z:0,ry:Math.PI/2,normal:[-1,0,0],door:s>14},{len:s,x:n/2+M/2,z:0,ry:Math.PI/2,normal:[1,0,0],door:s>14}].forEach(A=>{const z=new Ve;z.position.set(A.x,0,A.z),z.rotation.y=A.ry,z.add(Wn(A.len,f,M+.04,R,0,f/2,0));const $=new Ve,_=Ke("#c7d0da",{map:c_(A.len/1),roughness:.6,metalness:.15}),S=r*.56,x=Math.min(r-.6,r*.74);if($.add(Wn(A.len,S-f,M,_,0,f+(S-f)/2,0)),$.add(Wn(A.len,x-S,M*.5,w,0,(S+x)/2,0,{shadow:!1})),$.add(Wn(A.len,r-x,M,_,0,(x+r)/2,0)),$.add(Wn(A.len+.1,.18,M+.1,T,0,r+.09,0)),A.door){const L=Math.min(4.5,r*.62),N=-Math.sign(A.normal[0]||A.normal[2])*(M/2+.02),et=Wn(4.5,L-f,.06,Y,0,f+(L-f)/2,0);et.position.z=N,$.add(et),[-1,1].forEach(K=>{const B=Wn(.22,L,.22,U,K*2.36,L/2,et.position.z*1.6);$.add(B)})}z.add($),a.add(z),g.push({upper:$,normal:new F(...A.normal),center:new F(A.x,r/2,A.z)})});const X=e.columns===0?0:e.columns||12;if(X>0){const A=Math.max(1,Math.round(n/X)),z=Math.max(1,Math.round(s/X)),$=Array.from({length:A+1},(K,B)=>-n/2+B*n/A),_=Array.from({length:z+1},(K,B)=>-s/2+B*s/z),S=(K,B)=>l.some(j=>Math.abs(K-j.x)<j.w/2+.3&&Math.abs(B-j.z)<j.d/2+.3),x=[];if($.forEach(K=>{x.push([K,-s/2+.22]),x.push([K,s/2-.22])}),_.slice(1,-1).forEach(K=>{x.push([-n/2+.22,K]),x.push([n/2-.22,K])}),s>26){const K=Math.max(1,Math.round(s/24)-1);for(let B=1;B<=K;B+=1){const j=-s/2+B*s/(K+1);$.slice(1,-1).forEach(st=>x.push([st,j]))}}const C=x.filter(([K,B])=>d(K,B,.35)&&!S(K,B)),L=new ge(1,1,1),N=Ke("#7c8894",{roughness:.5,metalness:.45});[qi(L,N,C.map(([K,B])=>({x:K,y:r/2,z:B-.17,sx:.4,sy:r,sz:.04}))),qi(L,N,C.map(([K,B])=>({x:K,y:r/2,z:B+.17,sx:.4,sy:r,sz:.04}))),qi(L,N,C.map(([K,B])=>({x:K,y:r/2,z:B,sx:.04,sy:r,sz:.32}))),qi(L,U,C.map(([K,B])=>({x:K,y:.6,z:B,sx:.5,sy:1.2,sz:.5})))].filter(Boolean).forEach(K=>a.add(K))}const Q=Ke("#d3d7dc",{roughness:.8,transparent:!0,opacity:.6,polygonOffset:!0,polygonOffsetFactor:-1}),v=Ke("#f2b100",{roughness:.55}),E=[];l.forEach(A=>{const z=new Ht(new yn(A.w,A.d),Q);z.rotation.x=-Math.PI/2,z.position.set(A.x,.004,A.z),z.receiveShadow=!0,a.add(z);const $=A.w>=A.d,_=$?A.w:A.d,S=($?A.d:A.w)/2-.08;[-1,1].forEach(x=>{const C=Wn($?_:.12,.006,$?.12:_,v,A.x+($?0:x*S),.006,A.z+($?x*S:0),{shadow:!1});a.add(C)}),[-1,1].forEach(x=>[-1,1].forEach(C=>E.push([A.x+x*(A.w/2+.3),A.z+C*(A.d/2+.3)])))}),(i.zones||[]).forEach(A=>{const z=A.color||"#2563eb",$=new Ht(h_(A.w,A.d,.12,.9,.55),new mn({color:z,transparent:!0,opacity:.85,toneMapped:!1,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));if($.position.set(A.x,.008,A.z),a.add($),A.name){const{texture:_,aspect:S}=s_(String(A.name).toUpperCase());_.anisotropy=t;let x=Math.min(1.3,Math.max(.55,A.d*.08)),C=x*S;C>A.w-1.2&&(C=Math.max(1,A.w-1.2),x=C/S);const L=new Ht(new yn(C,x),new mn({map:_,transparent:!0,opacity:.32,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));L.rotation.x=-Math.PI/2,L.position.set(A.x-A.w/2+.6+C/2,.01,A.z-A.d/2+.45+x/2),a.add(L)}});const W=E.filter(([A,z])=>Math.abs(A)<n/2-.3&&Math.abs(z)<s/2-.3&&d(A,z,.2)).slice(0,160);if(W.length){const A=new He(.1,.1,1,14);a.add(qi(A,Ke("#f2b100",{roughness:.5}),W.map(([z,$])=>({x:z,y:.5,z:$,sy:1})))),a.add(qi(A,Ke("#1f2328",{roughness:.6}),W.map(([z,$])=>({x:z,y:.72,z:$,sx:1.03,sy:.12,sz:1.03}))))}return{group:a,walls:g,height:r}}function d_(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Ye;let h=0;for(let d=0;d<i.length;++d){const p=i[d];let c=0;if(e!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const u in p.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(p.attributes[u]),c++}if(c!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(o!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const u in p.morphAttributes){if(!s.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;a[u]===void 0&&(a[u]=[]),a[u].push(p.morphAttributes[u])}if(t){let u;if(e)u=p.index.count;else if(p.attributes.position!==void 0)u=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,u,d),h+=u}}if(e){let d=0;const p=[];for(let c=0;c<i.length;++c){const u=i[c].index;for(let m=0;m<u.count;++m)p.push(u.getX(m)+d);d+=i[c].attributes.position.count}l.setIndex(p)}for(const d in r){const p=pc(r[d]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;l.setAttribute(d,p)}for(const d in a){const p=a[d][0].length;if(p===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[d]=[];for(let c=0;c<p;++c){const u=[];for(let M=0;M<a[d].length;++M)u.push(a[d][M][c]);const m=pc(u);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;l.morphAttributes[d].push(m)}}return l}function pc(i){let t,e,n,s=-1,r=0;for(let h=0;h<i.length;++h){const d=i[h];if(t===void 0&&(t=d.array.constructor),t!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=d.itemSize),e!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=d.normalized),n!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=d.gpuType),s!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=d.count*e}const a=new t(r),o=new Je(a,e,n);let l=0;for(let h=0;h<i.length;++h){const d=i[h];if(d.isInterleavedBufferAttribute){const p=l/e;for(let c=0,u=d.count;c<u;c++)for(let m=0;m<e;m++){const M=d.getComponent(c,m);o.setComponent(c+p,m,M)}}else a.set(d.array,l);l+=d.count*e}return s!==void 0&&(o.gpuType=s),o}const Mr={machine:"#2c6cb0",cnc:"#2c6cb0",mill:"#2c6cb0",lathe:"#2c6cb0",press:"#2f7d52",robot:"#f08a1c",conveyor:"#5c6670",oven:"#2c6cb0",tank:"#8d99a6",workstation:"#2c6cb0",saw:"#f0a30a",shear:"#2f5d8f",plasma:"#e8641b",furnace:"#5a6570",drill:"#557a66",welding:"#1f6fd1",blast:"#4e6a85",paint_booth:"#2c6cb0",packing:"#2c6cb0",agv:"#f2b705",forklift:"#f2b705",crane:"#f2b705",custom:"#8a97a4"},ie={body:"#e3e6ea",bodyDark:"#c9ced4",dark:"#2e3339",frame:"#59626c",steel:"#aab3bc",bright:"#c9d0d6",rubber:"#1d2024",wood:"#c4975d",cardboard:"#b98a57",crate:"#5b7894",rackBlue:"#1f5aa6",rackOrange:"#ef6c1a",yellow:"#f2b100",glass:"#86aac6",vest:["#f97316","#facc15"],trousers:"#273246",skin:"#e0b08a",helmet:["#f8fafc","#facc15","#f8fafc"]},yr=(i,t,e)=>Math.min(e,Math.max(t,i));function f_(i){let t=2166136261;for(const n of String(i))t=Math.imul(t^n.charCodeAt(0),16777619);let e=t>>>0;return()=>{e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function p_(){const i=document.createElement("canvas");i.width=64,i.height=64;const t=i.getContext("2d");t.clearRect(0,0,64,64),t.fillStyle="#ffffff",t.fillRect(0,0,64,5),t.fillRect(0,0,5,64);const e=new Mi(i);return e.wrapS=jn,e.wrapT=jn,e.repeat.set(14,20),e}class La{constructor(t){this.kit=t,this.groups=new Map}add(t,e,n){const s=t+"|"+e.uuid;this.groups.has(s)||this.groups.set(s,{shape:t,material:e,items:[]}),this.groups.get(s).items.push(n)}flush(t){const e=new se,n=new Nn,s=new rn,r=new Vt;this.groups.forEach(({shape:a,material:o,items:l})=>{const h=a==="cyl"?this.kit.unitCylX:this.kit.unitBox,d=new ah(h,o,l.length);l.forEach((p,c)=>{s.set(p.rx||0,p.ry||0,p.rz||0),n.setFromEuler(s),e.compose(new F(p.x,p.y,p.z),n,new F(p.sx,p.sy,p.sz)),d.setMatrixAt(c,e),p.color?d.setColorAt(c,r.set(p.color)):d.instanceColor&&d.setColorAt(c,r.set("#ffffff"))}),d.instanceColor&&(d.instanceColor.needsUpdate=!0),d.instanceMatrix.needsUpdate=!0,d.computeBoundingBox(),d.computeBoundingSphere(),d.castShadow=!0,d.receiveShadow=!0,t.add(d)}),this.groups.clear()}}class m_{constructor(){this.materials=new Map,this.glow=r_(),this.hazard=_h(),this.fenceMesh=p_(),this.unitBox=new ge(1,1,1),this.unitCylX=new He(.5,.5,1,18).rotateZ(Math.PI/2)}mat(t,e){return this.materials.has(t)||this.materials.set(t,e()),this.materials.get(t)}paint(t,e=.5,n=.2){return this.mat(`p${t}|${e}|${n}`,()=>new Ne({color:t,roughness:e,metalness:n}))}get m(){const t=this;return{body:t.paint(ie.body,.45,.15),bodyDark:t.paint(ie.bodyDark,.5,.2),dark:t.paint(ie.dark,.55,.35),frame:t.paint(ie.frame,.5,.45),steel:t.paint(ie.steel,.32,.8),bright:t.paint(ie.bright,.22,.9),rubber:t.paint(ie.rubber,.9,0),wood:t.paint(ie.wood,.85,0),yellow:t.paint(ie.yellow,.45,.15),rackBlue:t.paint(ie.rackBlue,.45,.35),rackOrange:t.paint(ie.rackOrange,.45,.25),cardboard:t.mat("cardboard",()=>new Ne({color:"#ffffff",roughness:.92,metalness:0})),steelInst:t.mat("steelInst",()=>new Ne({color:"#ffffff",roughness:.35,metalness:.75})),glass:t.mat("glass",()=>new Ne({color:ie.glass,roughness:.08,metalness:.2,transparent:!0,opacity:.38,depthWrite:!1})),screen:t.mat("screen",()=>new Ne({color:"#0d1b2a",emissive:"#3b82f6",emissiveIntensity:.7,roughness:.3})),hazard:t.mat("hazard",()=>new Ne({map:t.hazard,roughness:.55})),fence:t.mat("fence",()=>new Ne({color:"#30353b",map:t.fenceMesh,alphaMap:t.fenceMesh,transparent:!0,alphaTest:.35,side:dn,roughness:.6,metalness:.4})),film:t.mat("film",()=>new Ne({color:"#e2ecf3",transparent:!0,opacity:.32,roughness:.15,depthWrite:!1})),curtain:t.mat("curtain",()=>new Ne({color:"#c2410c",transparent:!0,opacity:.55,roughness:.5,side:dn,depthWrite:!1})),liquid:t.mat("liquid",()=>new Ne({color:"#203a52",roughness:.06,metalness:.35})),hot:t.mat("hot",()=>new mn({color:"#ff7a1a",toneMapped:!1})),lamp:t.mat("lamp",()=>new mn({color:"#f5f8ff",toneMapped:!1}))}}glowSprite(t,e){const n=new rh(new Go({map:this.glow,color:t,blending:Ua,transparent:!0,depthWrite:!1,toneMapped:!1,opacity:0}));return n.scale.set(e,e,1),n}build(t,e,{hallH:n=8}={}){const s=new Ve,r=this,a=this.m,o=t.kind,l=this.paint(t.color||Mr[o]||Mr.custom,.42,.2),h=this.paint(new Vt(t.color||Mr[o]||Mr.custom).multiplyScalar(.62).getStyle(),.5,.25),d=f_(t.id),p=new La(this),{w:c,h:u,d:m}=t;e.animators=e.animators||[],e.andonAt=null,e.top=u,e.front=m/2;const M=(_,S,x,C,L,N=s,et=0,K=0,B=0)=>{const j=new Ht(_,S);return j.position.set(x,C,L),j.rotation.set(et,K,B),j.castShadow=!0,j.receiveShadow=!0,N.add(j),j},f=(_,S,x,C,L,N,et,K=s)=>M(new ge(Math.max(.01,_),Math.max(.01,S),Math.max(.01,x)),C,L,N,et,K),g=(_,S,x,C,L,N,et=s,K=_,B=20)=>M(new He(_,K,Math.max(.01,S),B),x,C,L,N,et),R=(_,S,x,C,L,N,et=s,K=20)=>M(new He(_,_,Math.max(.01,S),K),x,C,L,N,et,0,0,Math.PI/2),w=(_,S,x,C,L,N,et=s,K=20)=>M(new He(_,_,Math.max(.01,S),K),x,C,L,N,et,Math.PI/2,0,0),T=(_,S,x,C=s)=>{const L=new Ve;return L.position.set(_,S,x),C.add(L),L},Y=_=>(_.userData.keep=!0,_),U=(_,S,x,C=0,L=s)=>{const N=T(_,S,x,L);return N.rotation.y=C,f(.46,.36,.1,a.dark,0,0,0,N),f(.36,.25,.012,a.screen,0,.02,.056,N),f(.05,.05,.3,a.frame,0,0,-.2,N),N},I=(_,S,x,C,L=0,N=.16,et=.045)=>{for(let K=_+N/2;K<S;K+=N)p.add("cyl",a.steelInst,{x:K,y:x,z:L,sx:C,sy:et*2,sz:et*2,ry:Math.PI/2,color:"#b8c0c8"})},X=(_,S,x,C,L=0)=>{const N=S-_;if(N<.3)return;[-1,1].forEach(K=>f(N,.1,.06,a.frame,(_+S)/2,x-.05,L+K*(C/2-.03)));const et=Math.max(2,Math.round(N/1.4)+1);for(let K=0;K<et;K+=1){const B=_+.08+K*(N-.16)/(et-1);[-1,1].forEach(j=>f(.06,x-.1,.06,a.frame,B,(x-.1)/2,L+j*(C/2-.06)))}I(_,S,x+.01,C-.12,L)},Q=(_,S,x,C,L,N,et)=>{const K=_==="mixed"?["boxes","parts","steel","coils"][Math.floor(d()*4)]:_||"boxes";if(K!=="empty")if(K==="boxes"){const B=Math.max(1,Math.round(et/.42)),j=et/B;for(let st=0;st<B;st+=1)[-1,1].forEach(lt=>[-1,1].forEach(mt=>{const _t=.85+d()*.25;p.add("box",a.cardboard,{x:S+lt*L/4,y:x+j*st+j/2,z:C+mt*N/4,sx:L/2-.02,sy:j-.01,sz:N/2-.02,color:new Vt(ie.cardboard).multiplyScalar(_t).getStyle()})}))}else if(K==="steel"){const j=Math.max(1,Math.min(3,Math.round(et/.12)));for(let st=0;st<j;st+=1)for(let lt=0;lt<4;lt+=1)p.add("box",a.steelInst,{x:S,y:x+.06+st*.11,z:C-N/2+(lt+.5)*(N/4),sx:L*1.15,sy:.1,sz:N/4-.03,color:d()>.5?"#9aa4ad":"#7e8892"})}else if(K==="coils"){const B=Math.min(L,N)*.42;p.add("cyl",a.steelInst,{x:S,y:x+B,z:C,sx:Math.min(L,.55),sy:B*2,sz:B*2,color:"#8f99a3"})}else p.add("box",a.cardboard,{x:S,y:x+et*.42,z:C,sx:L,sy:et*.84,sz:N,color:ie.crate}),p.add("box",a.steelInst,{x:S,y:x+et*.86,z:C,sx:L*.8,sy:.05,sz:N*.8,color:"#6f7b86"})},v=(_,S,x,C,L,N,et)=>{p.add("box",a.cardboard,{x:_,y:S+.07,z:x,sx:C,sy:.14,sz:L,color:ie.wood}),Q(N,_,S+.14,x,C-.04,L-.04,et)},E=(_,S,x,C,L,N=0)=>{const et=Math.hypot(x-_,C-S),K=Math.atan2(C-S,x-_),B=Math.max(1,Math.ceil(et/1.4)),j=et/B;for(let st=0;st<=B;st+=1){const lt=st*j;p.add("box",a.cardboard,{x:_+Math.cos(K)*lt,y:L/2,z:S+Math.sin(K)*lt,sx:.07,sy:L,sz:.07,color:ie.yellow})}for(let st=0;st<B;st+=1){const lt=(st+.5)*j;if(N&&Math.abs(lt-et/2)<N/2)continue;const mt=_+Math.cos(K)*lt,_t=S+Math.sin(K)*lt,Gt=M(new ge(j-.08,L-.2,.02),a.fence,mt,.12+(L-.2)/2,_t,s,0,-K,0);Gt.castShadow=!1,p.add("box",a.cardboard,{x:mt,y:.07,z:_t,sx:j-.08,sy:.12,sz:.025,ry:-K,color:"#6b7480"})}},W=(_,S,x,C=0,L=0)=>{const N=C-_/2,et=C+_/2,K=L-S/2,B=L+S/2;E(N,K,et,K,x),E(N,B,et,B,x,Math.min(1.4,_*.3)),E(N,K,N,B,x),E(et,K,et,B,x)},A=(_,S,x,C,L="#ffd27a",N=.9)=>{const et=r.glowSprite(L,N);return et.position.set(S,x,C),_.add(et),et},z=(_,S,x=1)=>{const C=Math.random();_.material.opacity=S?C>.25?.95:.35:0;const L=x*(.6+C*.9);_.scale.set(L,L,1)};switch(o){case"machine":case"cnc":case"mill":{const _=Math.min(.32,u*.1),S=(o==="mill"?u*.74:u*.86)-_;f(c,_,m,a.dark,0,_/2,0),f(c,S,m*.96,a.body,0,_+S/2,0),f(c+.04,u*.05,m*.96+.04,l,0,_+S-u*.032,0),f(c+.04,.08,m*.96+.04,h,0,_+.05,0);const x=c*.56,C=S*.74,L=_+S*.47;f(x,C,.05,a.bodyDark,-c*.12,L,m*.48+.025),f(x*.78,C*.6,.02,a.glass,-c*.12,L+C*.08,m*.48+.06),f(.04,C*.45,.06,a.steel,-c*.12+x*.42,L,m*.48+.08);const N=T(-c*.12,_,0);f(x*.7,.12,m*.45,a.frame,0,S*.28,0,N);const et=g(Math.min(c,m)*.05,S*.22,a.bright,0,S*.62,0,N),K=f(x*.6,.02,m*.3,a.lamp,0,S*.92,0,N);K.visible=!1,U(c*.36,_+S*.62,m*.48+.22,-.25),o==="mill"&&(f(c*.36,u*.2,m*.42,a.body,-c*.1,u*.74+u*.1,-m*.22),f(c*.36+.03,.06,m*.42+.03,l,-c*.1,u*.94+.03,-m*.22),e.top=u*.94),o!=="machine"&&(R(Math.min(u*.22,m*.3),.32,l,-c/2+.1,_+S*.55,-m*.1),f(.5,_+.55,m*.5,a.frame,c/2-.25,(_+.55)/2,-m*.2)),e.andonAt=[c*.42,_+S,-m*.36],e.animators.push((B,j,st,lt)=>{K.visible=st,st&&(et.rotation.y+=j*28,et.position.y=S*.62-.05*(.5+.5*Math.sin(B*1.3+lt)),N.children[0].position.x=Math.sin(B*.5+lt)*x*.12)});break}case"lathe":{const _=u*.24;f(c,_,m*.8,a.dark,0,_/2,-m*.05),f(c*.96,u*.7,m*.86,a.body,0,_+u*.35,0),f(c*.96+.04,u*.05,m*.86+.04,l,0,_+u*.7,0),f(c*.5,u*.42,.03,a.glass,-c*.08,_+u*.38,m*.43+.03),f(c*.52,.05,.05,a.steel,-c*.08,_+u*.12,m*.43+.05);const S=T(-c*.28,_+u*.36,0);R(u*.11,.24,a.steel,0,0,0,S);for(let x=0;x<3;x+=1)f(.06,.06,.08,a.dark,.13,0,0,S).position.set(.13,Math.cos(x*2*Math.PI/3)*u*.08,Math.sin(x*2*Math.PI/3)*u*.08);R(u*.035,c*.32,a.bright,c*.17,0,0,S),f(.32,.3,.32,a.dark,c*.12,_+u*.42,.05),U(c*.4,_+u*.42,m*.43+.22,-.3),f(.6,_+.45,.5,a.frame,c/2-.3,(_+.45)/2,-m*.3),e.top=_+u*.725,e.andonAt=[c*.44,_+u*.725,-m*.32],e.animators.push((x,C,L)=>{L&&(S.rotation.x+=C*22)});break}case"drill":{const _=this.paint("#56605a",.6,.3);f(c,u*.08,m,_,0,u*.04,0);const S=Math.min(c,m)*.09;g(S,u*.86,l,-c*.36,u*.08+u*.43,0),g(S*1.15,u*.1,h,-c*.36,u*.99,0),f(c*.3,u*.12,m*.4,a.steel,c*.22,u*.08+u*.06,0);const x=T(-c*.36,u*.72,0);f(c*.84,u*.1,m*.22,l,c*.42,0,0,x);const C=T(c*.6,0,0,x);f(c*.2,u*.28,m*.3,l,0,-u*.04,0,C),g(.12,u*.12,a.dark,0,u*.16,0,C);const L=g(.045,u*.2,a.bright,0,-u*.26,0,C,.02);e.top=u*1.04,e.andonAt=[-c*.36,u*1.04,0],e.animators.push((N,et,K,B)=>{K&&(x.rotation.y=Math.sin(N*.22+B)*.3,L.rotation.y+=et*24,L.position.y=-u*.26-.08*(.5+.5*Math.sin(N*1.1+B)))});break}case"saw":{const _=Math.min(c*.42,2.6),S=c/2-_/2-c*.08,x=u*.42;f(_,x,m*.78,a.body,S,x/2,-m*.02),f(_+.04,.08,m*.78+.04,l,S,x-.12,-m*.02),f(_*1.06,.06,m*.82,a.dark,S,x+.03,-m*.02),f(.16,.3,m*.3,a.steel,S-_*.3,x+.2,-m*.1),f(.16,.3,m*.3,a.steel,S-_*.3,x+.2,m*.14);const C=T(S+_*.5,x+u*.12,-m*.05);f(_*1.12,u*.2,m*.34,l,-_*.56,u*.18,0,C),w(u*.17,m*.38,h,-_*1.06,u*.18,0,C),w(u*.17,m*.38,h,-.06,u*.18,0,C),f(.1,u*.2,.12,a.steel,-_*.78,u*.02,.05,C),f(.1,u*.2,.12,a.steel,-_*.34,u*.02,.05,C),f(_*.46,.02,.03,a.dark,-_*.56,-u*.06,.05,C),g(.05,u*.32,a.bright,S+_*.2,x+u*.2,-m*.3),X(-c/2,S-_/2,x,m*.4,.02),X(S+_/2,c/2,x,m*.4,.02),f(Math.max(.3,S-_/2+c/2-.2),.09,.09,a.bright,(-c/2+S-_/2)/2,x+.1,.02),f(Math.max(.3,S-_/2+c/2-.4),.09,.09,a.bright,(-c/2+S-_/2)/2,x+.1,.13),U(S-_*.2,x+u*.35,m*.42,.2),e.top=x+u*.48,e.andonAt=[S+_*.42,x+.03,-m*.36],e.animators.push((L,N,et,K)=>{const B=((L*.07+K)%1+1)%1;C.rotation.z=et?-.2*(1-B):-.25});break}case"shear":{const _=c/2-c*.07;[-1,1].forEach(x=>f(c*.12,u,m*.72,l,x*_,u/2,-m*.08)),f(c*.82,u*.42,m*.5,h,0,u*.21,-m*.08),f(c*.84,.05,m*.58,a.steel,0,u*.43,-m*.05);const S=T(0,u*.72,-m*.1);f(c*.78,u*.22,m*.32,l,0,0,0,S),f(c*.76,u*.06,.04,a.bright,0,-u*.13,m*.17,S),[-1,1].forEach(x=>g(Math.min(.18,c*.04),u*.22,a.steel,x*c*.3,u+u*.06,-m*.1));for(let x=-1;x<=1;x+=1)f(.08,.06,m*.42,a.frame,x*c*.3,u*.43,m*.29);f(c*.6,.02,m*.34,this.paint("#8693a0",.3,.7),0,u*.465,m*.24),f(c*.7,.1,.1,a.dark,0,u*.47,-m*.4),[-1,1].forEach(x=>f(.07,u*.6,.07,a.hazard,x*c*.46,u*.3,m*.46)),U(c*.47,u*.62,m*.4,-.4),e.andonAt=[_,u,-m*.36],e.animators.push((x,C,L,N)=>{S.position.y=L?u*.72-u*.09*Math.max(0,Math.sin(x*2+N)):u*.72});break}case"plasma":{const _=Math.min(u*.32,.8);f(c*.84,_,m*.8,a.dark,-c*.05,_/2,0);for(let L=-c*.46;L<c*.36;L+=.28)p.add("box",a.steelInst,{x:L,y:_+.05,z:0,sx:.025,sy:.1,sz:m*.78,color:"#5d666f"});f(c*.7,.025,m*.64,this.paint("#7f8b96",.3,.75),-c*.06,_+.11,0),[-1,1].forEach(L=>f(c,.12,.16,a.steel,0,_+.08,L*m*.45));const S=T(0,0,0);[-1,1].forEach(L=>f(.36,u-_-.1,.3,l,0,_+.14+(u-_-.1)/2,L*m*.45,S)),f(.42,.45,m*.98,l,0,u-.22,0,S),f(.18,.1,m*.9,a.dark,-.12,u+.02,0,S);const x=T(.3,0,0,S);f(.32,.5,.3,a.dark,0,u-.45,0,x),g(.035,u-_-.8,a.bright,0,_+.2+(u-_-.8)/2,0,x);const C=A(x,0,_+.16,0,"#ffd9a0",1.1);f(.5,1.3,.6,a.body,c/2-.3,.65,m*.24),f(.36,.26,.02,a.screen,c/2-.3,1,m*.24+.31),e.andonAt=[c/2-.3,1.3,m*.12],e.animators.push((L,N,et,K)=>{et&&(S.position.x=Math.sin(L*.28+K)*c*.32,x.position.z=Math.sin(L*.85+K)*m*.3),z(C,et,1.1)});break}case"furnace":{const _=m*.78,S=-m*.11,x=this.paint("#5b6571",.65,.35);f(c,u*.8,_,x,0,u*.4,S),f(c*1.02,u*.05,_*1.02,this.paint("#7b8794",.5,.4),0,u*.825,S),[-1,1].forEach(K=>f(.18,u*.96,.2,a.steel,K*c*.34,u*.48,S+_/2+.1)),f(c*.72,.2,.22,a.steel,0,u*.95,S+_/2+.1);const C=f(c*.5,u*.42,.02,a.hot,0,u*.27,S+_/2+.005);Y(C).castShadow=!1,C.visible=!1;const L=T(0,0,S+_/2+.12);f(c*.6,u*.55,.2,this.paint("#97a1ab",.45,.45),0,u*.3,0,L);const N=f(.12,.12,.02,a.hot,0,u*.42,.11,L);N.visible=!1;const et=A(s,0,u*.2,S+_/2+.6,"#ff8a3d",c*.8);[-1,1].forEach(K=>{for(let B=0;B<3;B+=1)R(.09,.32,a.steel,K*(c/2+.12),u*.2+B*u*.18,S-_*.2+B*.4);f(.06,.06,_*.9,a.yellow,K*(c/2+.06),u*.12,S)}),g(.28,u*.55,a.steel,c*.3,u*.8+u*.275,S-_*.3),g(.36,.08,a.dark,c*.3,u*1.1,S-_*.3),f(.7,2,.45,a.body,-c*.43,1,m*.36),f(.32,.24,.02,a.screen,-c*.43,1.45,m*.36+.23),[-1,1].forEach(K=>f(.08,.05,m/2-(S+_/2),a.steel,K*c*.15,.03,(S+_/2+m/2)/2)),e.top=u*1.1,e.andonAt=[c*.42,u*.85,S+_*.3],e.animators.push((K,B,j,st)=>{const lt=((K*.045+st)%1+1)%1,mt=j&&lt<.18;L.position.y+=((mt?u*.36:0)-L.position.y)*Math.min(1,B*2),C.visible=j,N.visible=j,et.material.opacity=mt?.55+.15*Math.sin(K*7):0});break}case"tank":{if(Math.abs(c-m)<.35*Math.max(c,m)){const S=Math.min(c,m)/2*.92,x=u*.14;for(let C=0;C<4;C+=1){const L=C*Math.PI/2+Math.PI/4;f(.12,x,.12,a.frame,Math.cos(L)*S*.75,x/2,Math.sin(L)*S*.75)}g(S,u*.72,a.steel,0,x+u*.36,0,s,S,32),M(new Yn(S,32,12,0,Math.PI*2,0,Math.PI/2),a.steel,0,x+u*.72,0).scale.y=.35,g(S*.98,.06,a.frame,0,x+u*.5,0,s,S*.98,32),[-1,1].forEach(C=>f(.04,u*.8,.04,a.yellow,S+.15,x+u*.4,C*.2));for(let C=x+.3;C<u*.95;C+=.3)p.add("box",a.cardboard,{x:S+.15,y:C,z:0,sx:.03,sy:.03,sz:.4,color:ie.yellow});R(.08,S*.8,a.frame,-S-.2,x+.3,0),e.andonAt=[0,x+u*.72+S*.35,0]}else{const S=u*.62,x=.12;f(c,S,x,a.steel,0,S/2,-m/2+x/2),f(c,S,x,a.steel,0,S/2,m/2-x/2),f(x,S,m,a.steel,-c/2+x/2,S/2,0),f(x,S,m,a.steel,c/2-x/2,S/2,0),f(c-x*2,.02,m-x*2,a.liquid,0,S-.15,0),[-1,1].forEach(N=>{f(c,.04,.04,a.yellow,0,S+1,N*(m/2-.05)),f(.04,.04,m,a.yellow,N*(c/2-.05),S+1,0)});for(let N=-c/2+.05;N<=c/2;N+=Math.max(.6,c/5))[-1,1].forEach(et=>p.add("box",a.cardboard,{x:N,y:S+.5,z:et*(m/2-.05),sx:.04,sy:1,sz:.04,color:ie.yellow}));[-1,1].forEach(N=>f(.16,u,.16,h,N*c*.36,u/2,-m*.36)),f(c*.8,.2,.2,h,0,u-.1,-m*.36);const C=T(0,0,-m*.05);f(c*.45,.5,m*.45,this.paint("#4a525b",.6,.6),0,0,0,C),g(.02,1,a.dark,0,.75,0,C),g(.22,.45,l,c*.36,S+.25,m*.3);const L=[0,1,2].map(N=>A(s,(N-1)*c*.2,S+.3,0,"#f1f5f9",1.6));L.forEach(N=>N.material.blending=pi),e.top=u,e.andonAt=[c*.36,u,-m*.36],e.animators.push((N,et,K,B)=>{const j=((N*.06+B)%1+1)%1;C.position.y=K?S+.3-Math.sin(j*Math.PI)*(S*.7):S+.4,L.forEach((st,lt)=>{const mt=((N*.25+lt/3+B)%1+1)%1;st.position.y=S+.2+mt*2.4,st.material.opacity=K?.32*(1-mt):0;const _t=1.2+mt*2.2;st.scale.set(_t,_t,1)})})}break}case"welding":{const _=yr(u*.85,.8,.95),S=Math.min(c*.55,2),x=Math.min(m*.5,1.1),C=-c*.12,L=m*.08;f(S,.08,x,a.dark,C,_,L),[-1,1].forEach(lt=>[-1,1].forEach(mt=>f(.07,_,.07,a.frame,C+lt*(S/2-.08),_/2,L+mt*(x/2-.08)))),f(S*.55,.1,x*.4,a.bright,C,_+.09,L),f(.08,.45,x*.4,a.bright,C+S*.15,_+.3,L);const N=T(c*.3,0,-m*.22);f(.55,.72,.45,l,0,.5,0,N),f(.56,.16,.02,a.yellow,0,.66,.23,N),[-1,1].forEach(lt=>w(.08,.06,a.rubber,lt*.2,.08,.2,N)),g(.11,1.35,this.paint("#2f6f4f",.4,.3),c*.43,.7,-m*.38),g(.07,.12,a.steel,c*.43,1.42,-m*.38);const et=Math.max(1.8,u*1.6);[[-c/2+.05,-m/2+.05],[c*.2,-m/2+.05],[-c/2+.05,m*.35]].forEach(([lt,mt])=>f(.04,et,.04,a.yellow,lt,et/2,mt));const K=f(c*.7,et-.35,.02,a.curtain,-c*.15,.2+(et-.35)/2,-m/2+.05);K.castShadow=!1;const B=f(.02,et-.35,m*.8,a.curtain,-c/2+.05,.2+(et-.35)/2,-m*.07);B.castShadow=!1,g(.05,2.1,a.steel,-c*.3,1.05,-m*.4),M(new He(.06,.06,1,10),a.steel,-c*.22,2,-m*.2,s,.9,0,0),M(new Fr(.2,.3,14,1,!0),a.steel,C,_+.75,L-.1,s,0,0,0).rotation.x=Math.PI;const j=A(s,C+.1,_+.2,L,"#cfe6ff",1.4),st=A(s,C+.1,_+.18,L+.05,"#ffb347",.7);e.top=et,e.andonAt=[c*.3,.86,-m*.22],e.animators.push((lt,mt,_t)=>{z(j,_t,1.4),z(st,_t,.8)});break}case"robot":{const _=yr(Math.min(u,3)/2.4,.7,1.4),S=Math.min(c,m)>=3.5,x=S?-c*.14:0;f(.8*_,.45*_,.8*_,a.dark,x,.225*_,0);const C=T(x,.45*_,0);g(.33*_,.22*_,l,0,.11*_,0,C);const L=T(0,.22*_,0,C);f(.55*_,.32*_,.5*_,l,0,.16*_,0,L),f(.22*_,.22*_,.22*_,a.dark,-.27*_,.22*_,.2*_,L);const N=T(0,.4*_,0,L);w(.2*_,.5*_,l,0,0,0,N),f(.24*_,1*_,.28*_,l,0,.5*_,0,N);const et=T(0,1*_,0,N);w(.17*_,.42*_,l,0,0,0,et),f(.95*_,.2*_,.22*_,l,.45*_,0,0,et),f(.26*_,.26*_,.26*_,a.dark,-.2*_,0,0,et);const K=T(.95*_,0,0,et);R(.09*_,.2*_,h,0,0,0,K),M(new He(.035*_,.035*_,.4*_,10),a.dark,.14*_,-.16*_,0,K,0,0,.6);const B=A(K,.25*_,-.33*_,0,"#cfe6ff",1.3);if(N.rotation.z=-.35,et.rotation.z=-.55,S){const j=c*.2;f(.5,.9,.9,a.dark,j-.7,.45,0),f(.5,.9,.9,a.dark,j+.7,.45,0);const st=T(j,.95,0);R(.5,.06,this.paint("#3a4048",.5,.5),-.5,0,0,st),R(.5,.06,this.paint("#3a4048",.5,.5),.5,0,0,st),f(.9,.12,.6,a.bright,0,0,0,st),f(.12,.4,.6,a.bright,.25,.2,0,st),W(c-.1,m-.1,2),f(.6,.9,.5,this.paint("#1f6fd1",.45,.2),-c/2+.55,.45,-m/2+.5),f(.6,1.8,.45,a.body,-c/2+1.3,.9,-m/2+.45),e.andonAt=[c/2-.1,2,m/2-.1],e.top=2.3,e.animators.push((lt,mt,_t)=>{_t&&(st.rotation.x+=mt*.4)})}else e.andonAt=[x+.42*_,.45*_,.3*_],e.top=2.2*_;e.animators.push((j,st,lt,mt)=>{lt&&(L.rotation.y=Math.sin(j*.7+mt)*.5,N.rotation.z=-.35+.14*Math.sin(j*1.1+mt),et.rotation.z=-.55+.2*Math.sin(j*1.6+mt+1),K.rotation.x+=st*1.5),z(B,lt,1.3)});break}case"conveyor":{const _=Math.max(.4,u);[-1,1].forEach(x=>f(c,.14,.06,l,0,_-.07,x*(m/2-.03)));const S=Math.max(2,Math.round(c/1.6)+1);for(let x=0;x<S;x+=1){const C=-c/2+.1+x*(c-.2)/(S-1);[-1,1].forEach(L=>f(.06,_-.14,.06,a.frame,C,(_-.14)/2,L*(m/2-.08))),f(.05,.05,m-.16,a.frame,C,.25,0)}I(-c/2,c/2,_-.04,m-.1),f(.32,.26,.26,this.paint("#2c6cb0",.45,.3),c/2-.45,_-.32,m/2-.2),e.top=_;break}case"oven":{f(c*.86,u*.86,m,a.body,0,u*.43,0),f(c*.86+.04,u*.05,m+.04,l,0,u*.84,0);const _=[-1,1].map(S=>{const x=f(.02,u*.34,m*.6,a.hot,S*c*.43+S*.011,u*.3,0);return Y(x).castShadow=!1,x.visible=!1,x});I(-c/2,-c*.43,u*.2,m*.62),I(c*.43,c/2,u*.2,m*.62),[-.25,.25].forEach(S=>g(.2,u*.4,a.steel,S*c,u*.86+u*.2,-m*.2)),U(c*.3,u*.5,m/2+.2,0),e.andonAt=[c*.38,u*.86,-m*.35],e.animators.push((S,x,C)=>_.forEach(L=>L.visible=C));break}case"press":{const _=c/2-c*.08;f(c,u*.18,m*.8,h,0,u*.09,0),[-1,1].forEach(x=>f(c*.16,u*.74,m*.7,l,x*_,u*.18+u*.37,0)),f(c,u*.16,m*.8,l,0,u*.92,0),g(Math.min(c,m)*.15,u*.14,a.steel,0,u*1.07,0),f(c*.62,u*.06,m*.6,a.steel,0,u*.21,0);const S=f(c*.6,u*.14,m*.55,a.frame,0,u*.62,0);Y(S),[-1,1].forEach(x=>f(.07,u*.55,.07,a.hazard,x*c*.36,u*.45,m*.46)),U(c*.5+.1,u*.5,m*.3,-.6),e.top=u*1.14,e.andonAt=[_,u*1,-m*.3],e.animators.push((x,C,L,N)=>{S.position.y=L?u*.62-u*.2*(.5+.5*Math.sin(x*2.4+N)):u*.62});break}case"blast":{const _=T(-c*.06,0,0);f(c*.5,u*.72,m*.78,l,0,u*.36,0,_),f(c*.5+.04,u*.04,m*.78+.04,h,0,u*.7,0,_),[-1,1].forEach(x=>f(.03,u*.32,m*.42,a.rubber,x*(c*.25+.016),u*.26,0,_)),I(-c/2,-c*.31,u*.22,m*.42),I(c*.19,c/2,u*.22,m*.42),f(.5,u,.5,h,c*.1,u/2,-m*.38);const S=Math.min(c,m)*.15;g(S,u*.5,a.bodyDark,c*.38,u*.55,-m*.22,s,S,24),g(S,u*.25,a.bodyDark,c*.38,u*.18,-m*.22,s,.08,24),R(.14,c*.4,a.steel,c*.17,u*.86,-m*.22),[-1,1].forEach(x=>f(.04,.04,m*.78,a.yellow,-c*.06+x*c*.24,u*.72+1,0)),e.top=u,e.andonAt=[-c*.28,u*.72,m*.32],e.animators.push((x,C,L)=>{_.position.x=-c*.06+(L?(Math.random()-.5)*.02:0)});break}case"paint_booth":{const _=u*.82,S=this.paint("#eef1f4",.5,.05);f(c,_,.08,S,0,_/2,-m/2+.04),[-1,1].forEach(L=>f(.08,_,m,S,L*(c/2-.04),_/2,0)),f(c,.1,m,S,0,_+.05,0);const x=M(new yn(c*.8,m*.6),a.lamp,0,_-.02,0,s,Math.PI/2,0,0);x.castShadow=!1,f(c*.8,_*.55,.16,this.paint("#9aa5b1",.7,.1),0,_*.4,-m/2+.17),f(c*.3,u*.18,m*.4,a.steel,-c*.2,_+.1+u*.09,-m*.15),g(.3,u*.12,a.steel,c*.2,_+.1+u*.06,-m*.2),f(c*1.3,.12,.12,a.dark,0,_-.35,0),[-1,1].forEach(L=>g(.04,1.4,a.dark,L*(c/2-.4),.7,m*.1));const C=[];for(let L=0;L<5;L+=1){const N=T(0,_-.4,0);g(.012,.5,a.dark,0,-.25,0,N),f(.55,.75,.06,this.paint(["#1d4ed8","#9aa4ad","#b91c1c"][L%3],.4,.35),0,-.9,0,N),C.push(N)}U(c/2+.15,1.3,m*.35,-1),e.andonAt=[c*.46,_+.1,m*.4],e.animators.push((L,N,et,K)=>{C.forEach((B,j)=>{const st=((L*(et?.05:0)+j/C.length+K)%1+1)%1;B.position.x=-c*.65+st*c*1.3})});break}case"packing":{const _=Math.min(c,m)*.3,S=T(-c*.08,0,0);g(_,.12,a.dark,0,.06,0,S,_,28),f(_*1.15,.14,_*.95,a.wood,0,.19,0,S);const x=Math.min(1.5,u*.55);for(let N=0;N<3;N+=1)[-1,1].forEach(et=>[-1,1].forEach(K=>f(_*.55,x/3-.02,_*.45,this.paint(new Vt(ie.cardboard).multiplyScalar(.9+.1*((N+et+K+4)%3)).getStyle(),.9,0),et*_/3.6,.26+(N+.5)*(x/3),K*_/4.4,S)));const C=g(_*.72,x,a.film,0,.26+x/2,0,S,_*.72,24);C.castShadow=!1,f(.24,u,.24,a.body,c*.3,u/2,-m*.3);const L=T(c*.3,.6,-m*.3+.2);f(.36,.45,.3,l,0,0,0,L),g(.09,.5,this.paint("#f1f5f9",.3,0),-.12,0,.18,L),I(-c/2,-c*.08-_-.1,.4,m*.5),f(.5,1.4,.3,a.body,c*.4,.7,m*.35),f(.3,.2,.02,a.screen,c*.4,1.1,m*.35+.16),e.andonAt=[c*.3,u,-m*.3],e.animators.push((N,et,K,B)=>{K&&(S.rotation.y+=et*1.5,L.position.y=.4+(u-1)*(.5+.5*Math.sin(N*.35+B)))});break}case"workstation":{const _=Math.min(u,.92);f(c,.05,m,this.paint("#d7dde3",.6,.1),0,_,0),[-1,1].forEach(S=>[-1,1].forEach(x=>f(.05,_,.05,a.frame,S*(c/2-.06),_/2,x*(m/2-.06)))),[-1,1].forEach(S=>f(.04,1.1,.04,a.frame,S*(c/2-.06),_+.55,-m/2+.06)),f(c,.06,.12,a.frame,0,_+1.1,-m/2+.1),f(c*.8,.02,.08,a.lamp,0,_+1.06,-m/2+.12);for(let S=0;S<Math.max(2,Math.floor(c/.35));S+=1)p.add("box",a.cardboard,{x:-c/2+.2+S*.35,y:_+.55,z:-m/2+.12,sx:.28,sy:.14,sz:.2,color:S%2?"#2563eb":"#dc2626"});f(.5,.32,.03,a.screen,c*.25,_+.3,-m*.2),e.top=_+1.15,e.andonAt=[c/2-.06,_+1.1,-m/2+.06];break}case"rack":{const _=c>=m,S=_?c:m,x=_?m:c,C=T(0,0,0);_||(C.rotation.y=Math.PI/2);const L=Math.max(1,Math.round(S/2.7)),N=S/L,et=yr(Math.round(u/1.6),2,6),K=u/et,B=t.load||"boxes",j=new La(this);for(let st=0;st<=L;st+=1){const lt=-S/2+st*N;[-1,1].forEach(mt=>j.add("box",a.cardboard,{x:lt,y:u/2,z:mt*x/2,sx:.09,sy:u,sz:.07,color:ie.rackBlue}));for(let mt=0;mt<et*2;mt+=1){const _t=(mt+.5)*(u/(et*2));j.add("box",a.cardboard,{x:lt,y:_t,z:0,sx:.03,sy:Math.hypot(x,u/(et*2)),sz:.03,rx:(mt%2?1:-1)*Math.atan2(x,u/(et*2)),color:ie.rackBlue})}}for(let st=0;st<L;st+=1){const lt=-S/2+(st+.5)*N;for(let mt=1;mt<et;mt+=1)[-1,1].forEach(_t=>j.add("box",a.cardboard,{x:lt,y:mt*K,z:_t*(x/2-.02),sx:N-.09,sy:.12,sz:.05,color:ie.rackOrange}));for(let mt=0;mt<et;mt+=1){const _t=mt===0?0:mt*K+.06,Gt=(mt===et-1?u-_t:K-.06)-.25;if(Gt<.3)continue;if(B==="steel"){for(let fe=0;fe<2;fe+=1)for(let Ut=0;Ut<4;Ut+=1)d()<.15||j.add("box",a.steelInst,{x:lt,y:_t+.08+fe*.13,z:-x/2+.12+(Ut+.5)*((x-.24)/4),sx:N*.98,sy:.11,sz:(x-.24)/4-.04,color:d()>.5?"#9aa4ad":"#7d8791"});continue}const $t=Math.max(1,Math.floor(N/.95)),kt=N/$t-.12;for(let O=0;O<$t;O+=1){if(d()>.82)continue;const fe=lt-N/2+(O+.5)*(N/$t),Ut=Math.min(1.25,Gt)*(.6+d()*.4);j.add("box",a.cardboard,{x:fe,y:_t+.07,z:0,sx:kt,sy:.14,sz:x-.1,color:ie.wood}),$(j,()=>Q(B,fe,_t+.14,0,kt-.04,x-.14,Ut))}}}j.flush(C),e.top=u;break}case"buffer":{[-1,1].forEach(L=>{f(c,.006,.1,a.yellow,0,.006,L*(m/2-.05)),f(.1,.006,m,a.yellow,L*(c/2-.05),.006,0)});const _=Math.max(1,Math.floor(c/1.3)),S=Math.max(1,Math.floor(m/1.3)),x=c/_-.25,C=m/S-.25;for(let L=0;L<_;L+=1)for(let N=0;N<S;N+=1)d()>.7||v(-c/2+(L+.5)*(c/_),0,-m/2+(N+.5)*(m/S),x,C,t.load||"parts",Math.min(1.1,Math.max(.4,u*.8)));e.top=Math.min(1.3,u);break}case"pallet":v(0,0,0,c,m,t.load||"boxes",Math.max(.2,u-.14));break;case"agv":{f(c,.3,m,l,0,.2,0),f(c*.9,.04,m*.9,a.dark,0,.37,0),f(c*1.002,.03,m*1.002,r.mat("agvLed",()=>new mn({color:"#38bdf8",toneMapped:!1})),0,.1,0),g(.08,.1,a.dark,c/2-.15,.42,0),t.load&&t.load!=="empty"&&v(0,.39,0,Math.min(c,1.2)-.1,Math.min(m,1)-.1,t.load,.6),e.vehicle=!0,e.top=1.1;break}case"forklift":{const _=Math.max(1.8,c),S=Math.max(.9,m),x=yr(u,1.9,2.3);f(_*.62,.55,S,l,-_*.06,.52,0),f(_*.24,.75,S*.98,a.dark,-_*.36,.58,0),[-1,1].forEach(N=>{w(.27,.24,a.rubber,_*.16,.27,N*(S/2-.12)),w(.22,.22,a.rubber,-_*.3,.22,N*(S/2-.12)),f(.05,x-.8,.05,a.dark,_*.12,.8+(x-.8)/2,N*(S/2-.06)),f(.05,x-.8,.05,a.dark,-_*.22,.8+(x-.8)/2,N*(S/2-.06))}),f(_*.4,.05,S,a.dark,-_*.05,x,0),f(.45,.12,.45,a.dark,-_*.1,.86,0),f(.08,.5,.45,a.dark,-_*.22,1.12,0),f(.42,.55,.32,this.paint(ie.vest[0],.7,0),-_*.08,1.22,0),M(new Yn(.11,16,12),this.paint(ie.skin,.8,0),-_*.06,1.62,0),M(new Yn(.125,16,10,0,Math.PI*2,0,Math.PI/2),this.paint("#facc15",.4,0),-_*.06,1.66,0),[-1,1].forEach(N=>f(.08,.06,.08,a.dark,_*.33,x*.5,N*S*.28)),[-1,1].forEach(N=>f(.1,x*1,.1,a.frame,_*.3,x*.5,N*S*.28));const C=T(_*.33,0,0);if(f(.06,.9,S*.8,a.frame,0,.55,0,C),[-1,1].forEach(N=>f(1.05,.05,.1,a.steel,.55,.1,N*S*.22,C)),t.load&&t.load!=="empty"){const N=new La(this);$(N,()=>v(.6,.13,0,1,Math.min(1.1,S),t.load,.7)),N.flush(C)}const L=f(.1,.1,.1,r.mat("beacon",()=>new mn({color:"#fb923c",toneMapped:!1})),-_*.05,x+.08,0);Y(L),e.vehicle=!0,e.top=x+.2,e.animators.push((N,et,K)=>{L.visible=!K||Math.sin(N*8)>0});break}case"crane":{const _=Math.max(4,u);[-1,1].forEach(N=>f(c,.45,.3,this.paint("#6b7785",.5,.5),0,_,N*m/2));const S=T(0,0,0);[-.45,.45].forEach(N=>f(.5,.8,m+.3,l,N,_+.62,0,S)),[-1,1].forEach(N=>f(2.2,.5,.7,h,0,_+.4,N*m/2,S));const x=T(0,_+1.2,0,S);f(1.5,.6,1.3,this.paint("#d99a00",.45,.25),0,.1,0,x),w(.28,1,a.dark,0,.1,0,x);const C=g(.025,1,a.dark,0,0,0,x),L=T(0,-3,0,x);f(.45,.5,.3,a.hazard,0,0,0,L),t.load&&t.load!=="empty"&&[-.2,0,.2].forEach(N=>f(3.2,.12,.16,a.steel,0,-.75,N,L)),e.crane=!0,e.top=_+1.6,e.animators.push((N,et,K,B)=>{const j=K?1:0;e.craneT=(e.craneT||B)+et*j;const st=e.craneT;S.position.x=Math.sin(st*.06)*c*.38,x.position.z=Math.sin(st*.11+1)*m*.3;const lt=2.4+Math.sin(st*.17)*1.2;L.position.y=-lt-.4,C.scale.y=lt,C.position.y=-lt/2-.1});break}case"fence":{const _=t.h&&t.h>=1?Math.min(t.h,3):2;m>=1?W(c,m,_):E(-c/2,0,c/2,0,_),e.top=_;break}case"wall":f(c,u,m,this.paint("#cfd4d9",.85,0),0,u/2,0),f(c+.02,.12,m+.04,a.frame,0,u-.06,0);break;case"label":{const _=String(t.text||t.name||""),{texture:S,aspect:x}=i_(_);let C=.9,L=x*C;L>16&&(L=16,C=L/x);const N=t.h||Math.max(4,n-2.5),et=new Ne({map:S,emissive:"#ffffff",emissiveMap:S,emissiveIntensity:.35,roughness:.6}),K=a.dark,B=new Ht(new ge(L,C,.06),[K,K,K,K,et,et]);B.position.set(0,N,0),B.castShadow=!0,s.add(B),[-1,1].forEach(j=>g(.01,Math.max(.2,n-N-C/2),a.dark,j*L/2.4,(n+N+C/2)/2,0)),e.top=N+C,e.sign=B;break}case"custom":(t.parts||[]).forEach(_=>{const S=this.paint(_.color||ie.bodyDark,.5,.25);let x;_.shape==="box"?x=new ge(_.w,_.h,_.d):_.shape==="sphere"?x=new Yn(_.r,20,14):_.shape==="cone"?x=new Fr(_.r,_.h,20):x=new He(_.r,_.r,_.h,20);const C=N=>(N||0)*Math.PI/180,L=_.rot||[0,0,0];M(x,S,_.x||0,_.y||0,_.z||0,s,C(L[0]),C(L[1]),C(L[2]))}),e.andonAt=t.machine_id?[c*.4,u,-m*.35]:null;break;default:f(c,u,m,a.body,0,u/2,0),e.andonAt=t.machine_id?[c*.4,u,-m*.35]:null}return p.flush(s),g_(s),s;function $(_,S){const x=p.add;p.add=(C,L,N)=>_.add(C,L,N);try{S()}finally{p.add=x}}}person(t=0){const e=new Ve,n=this.m,s=this.paint(ie.vest[t%2],.7,0),r=this.paint(ie.trousers,.8,0),a=(l,h,d,p,c)=>{const u=new Ht(l,h);return u.position.set(d,p,c),u.castShadow=!0,e.add(u),u};[-1,1].forEach(l=>{a(new ge(.15,.82,.18),r,l*.1,.43,0),a(new ge(.16,.08,.26),n.dark,l*.1,.04,.03)}),a(new ge(.44,.6,.25),s,0,1.13,0),[.98,1.22].forEach(l=>a(new ge(.45,.04,.26),this.paint("#d6dce2",.3,.4),0,l,0));const o=[-1,1].map(l=>{const h=new Ve;h.position.set(l*.29,1.4,0);const d=new Ht(new ge(.12,.58,.14),r);d.position.y=-.29,d.castShadow=!0,h.add(d);const p=new Ht(new ge(.1,.1,.1),this.paint(ie.skin,.8,0));return p.position.y=-.62,h.add(p),e.add(h),h});return a(new Yn(.115,16,12),this.paint(ie.skin,.8,0),0,1.6,0),a(new Yn(.135,16,10,0,Math.PI*2,0,Math.PI/2),this.paint(ie.helmet[t%3],.35,.05),0,1.64,0),e.userData.arms=o,e}}function g_(i){const t=new Map;i.children.forEach(e=>{if(!e.isMesh||e.isInstancedMesh||e.userData.keep||Array.isArray(e.material)||!e.geometry.index)return;const n=t.get(e.material)||[];n.push(e),t.set(e.material,n)}),t.forEach((e,n)=>{if(e.length<2)return;const s=e.map(h=>{h.updateMatrix();const d=h.geometry.clone().applyMatrix4(h.matrix);return d.index?d:null}),r=h=>Object.keys(h.attributes).sort().join(","),a=r(s[0]);if(s.some(h=>!h||r(h)!==a)){s.forEach(h=>h&&h.dispose());return}const o=d_(s,!1);if(s.forEach(h=>h.dispose()),!o)return;e.forEach(h=>{i.remove(h),h.geometry.dispose()});const l=new Ht(o,n);l.castShadow=!n.transparent,l.receiveShadow=!0,i.add(l)})}const ui={busy:"#22c55e",blocked:"#f59e0b",starved:"#94a3b8",down:"#ef4444"},Da="#2563eb",bs="#94a3b8",mc="#dde3e9",gc=["#1c3b27","#4a3a10","#4a1818"],__=1,_c=new Set(["wall","label","fence","crane"]),v_=i=>(Number(i)||0)*Math.PI/180;function Cr(i){const t=Number(i);if(i===""||i===null||i===void 0||!Number.isFinite(t))return String(i??"");const e=Math.abs(t);return t.toLocaleString(void 0,{maximumFractionDigits:e>=100?0:e>=10?1:2})}function x_(i,t){const e=Number(i);if(e===1)return 0;if(e===3)return 2;if(e===2||e===4)return 1;if(!t)return-1;const n={};return new Vt(t).getHSL(n),n.s<.15?-1:n.h<.05||n.h>.92?2:n.h>.2&&n.h<.47?0:1}function Ao(i,t,e){const n=new uh;return n.moveTo(-i+e,-t),n.lineTo(i-e,-t),n.quadraticCurveTo(i,-t,i,-t+e),n.lineTo(i,t-e),n.quadraticCurveTo(i,t,i-e,t),n.lineTo(-i+e,t),n.quadraticCurveTo(-i,t,-i,t-e),n.lineTo(-i,-t+e),n.quadraticCurveTo(-i,-t,-i+e,-t),n}function vc(i,t,e,n){const s=Ao(i,t,n),r=Ao(i-e,t-e,Math.max(.05,n-e));return s.holes.push(new Eo(r.getPoints(8).reverse())),s}function M_(){const i=document.createElement("canvas");i.width=128,i.height=64;const t=i.getContext("2d");t.clearRect(0,0,128,64),t.fillStyle="rgba(255,255,255,0.35)",t.fillRect(0,26,128,12),t.fillStyle="#ffffff",t.beginPath(),t.moveTo(48,6),t.lineTo(80,32),t.lineTo(48,58),t.lineTo(36,58),t.lineTo(66,32),t.lineTo(36,6),t.closePath(),t.fill();const e=new Mi(i);return e.wrapS=jn,e.colorSpace=Fe,e}function xc(i){const t=[0];for(let e=1;e<i.length;e+=1)t.push(t[e-1]+i[e].distanceTo(i[e-1]));return{points:i,cum:t,total:t[t.length-1]||0}}function Ia(i,t,e){const{points:n,cum:s,total:r}=i;if(n.length===1||r===0)return{pos:e.copy(n[0]),dir:new F(1,0,0)};const a=Math.min(Math.max(0,t),r);let o=1;for(;o<s.length-1&&s[o]<a;)o+=1;const l=s[o]-s[o-1]||1,h=(a-s[o-1])/l;return e.lerpVectors(n[o-1],n[o],h),{pos:e,dir:n[o].clone().sub(n[o-1])}}class y_{constructor(t,{onSelect:e}={}){this.container=t,this.onSelect=e,this.items=new Map,this.flowLines=[],this.particles=[],this.labelsVisible=!0,this.mode="live",this.simRunning=!1,this.anyWorking=!1,this.selectedId=null,this.numbers=new Map,this.clock=new Bg,this.tween=null,this.renderer=new J0({antialias:!0,alpha:!1,preserveDrawingBuffer:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Tc,this.renderer.toneMapping=Rc,this.renderer.toneMappingExposure=1.05,this.renderer.domElement.style.display="block",this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.cursor="grab",t.appendChild(this.renderer.domElement),this.scene=new ih,this.scene.background=new Vt(mc),this.scene.fog=new Vo(mc,120,500),this.setupEnvironment(),this.camera=new je(42,1,.3,3e3),this.controls=new Vg(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.maxPolarAngle=Math.PI*.49,this.controls.minDistance=3,this.controls.addEventListener("start",()=>{this.tween=null}),this.hemi=new Ig("#ffffff","#7d7a74",.8),this.scene.add(this.hemi),this.sun=new Og("#fff6e8",2.7),this.sun.castShadow=!0,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.03,this.scene.add(this.sun),this.scene.add(this.sun.target),this.root=new Ve,this.scene.add(this.root),this.particleGroup=new Ve,this.scene.add(this.particleGroup),this.chevron=M_(),this.raycaster=new zg,this.pointer=new vt,this.downAt=null,this.hoverAt=0,this.handlePointerDown=n=>{this.downAt=[n.clientX,n.clientY],this.renderer.domElement.style.cursor="grabbing"},this.handlePointerUp=n=>{this.renderer.domElement.style.cursor="grab",this.pick(n)},this.handlePointerMove=n=>this.hover(n),this.renderer.domElement.addEventListener("pointerdown",this.handlePointerDown),this.renderer.domElement.addEventListener("pointerup",this.handlePointerUp),this.renderer.domElement.addEventListener("pointermove",this.handlePointerMove),this.handleContextLost=n=>n.preventDefault(),this.handleContextRestored=()=>{this.setupEnvironment(),this.sceneData&&this.setScene(this.sceneData,this.lastSettings||{})},this.renderer.domElement.addEventListener("webglcontextlost",this.handleContextLost),this.renderer.domElement.addEventListener("webglcontextrestored",this.handleContextRestored),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),this.resize(),this.animate=this.animate.bind(this),this.frame=requestAnimationFrame(this.animate)}setupEnvironment(){const t=new yo(this.renderer);this.envTexture&&this.envTexture.dispose(),this.envTexture=t.fromScene(new e_,.04).texture,t.dispose(),this.scene.environment=this.envTexture,this.scene.environmentIntensity=.45}resize(){const t=Math.max(1,this.container.clientWidth),e=Math.max(1,this.container.clientHeight);this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.viewHeight=e,this.items.forEach(n=>n.label&&this.scaleLabel(n.label))}scaleLabel(t){const e=2*Math.tan(vn.degToRad(this.camera.fov)/2)/Math.max(1,this.viewHeight||1),[n,s]=t.userData.px;t.scale.set(n*e,s*e,1)}raycast(t){const e=this.renderer.domElement.getBoundingClientRect();this.pointer.x=(t.clientX-e.left)/e.width*2-1,this.pointer.y=-((t.clientY-e.top)/e.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera);const n=[];this.items.forEach(r=>r.pickables.forEach(a=>n.push(a)));const s=this.raycaster.intersectObjects(n,!1)[0];return s?s.object.userData.elementId:null}pick(t){if(!this.downAt||Math.hypot(t.clientX-this.downAt[0],t.clientY-this.downAt[1])>5)return;const e=this.raycast(t);this.select(e),this.onSelect&&this.onSelect(e)}hover(t){if(t.buttons)return;const e=performance.now();e-this.hoverAt<90||(this.hoverAt=e,this.renderer.domElement.style.cursor=this.raycast(t)?"pointer":"grab")}select(t){this.selectedId=t,this.items.forEach((e,n)=>{e.selected=n===t})}clear(){(e=>{e.traverse(n=>{var s;n.geometry&&!((s=this.sharedGeometries)!=null&&s.has(n.geometry))&&n.geometry.dispose(),n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(a=>{a.map&&a.map!==this.chevron&&a.map.dispose(),a.dispose()})})})(this.root),this.root.clear(),this.kit&&(this.kit.unitBox.dispose(),this.kit.unitCylX.dispose(),this.kit=null),this.particles.forEach(e=>this.particleGroup.remove(e.mesh)),this.particles=[],this.particleGeometry&&this.particleGeometry.dispose(),this.particleMaterial&&this.particleMaterial.dispose(),this.particleGeometry=null,this.items.clear(),this.flowLines=[],this.hall=null}setScene(t,e={}){this.clear(),this.kit=new m_,this.sharedGeometries=new Set([this.kit.unitBox,this.kit.unitCylX]),this.sceneData=t||{},this.lastSettings=e;const n=this.sceneData.floor||{w:60,d:40},s=Math.max(n.w,n.d);this.scene.fog.near=s*2.2,this.scene.fog.far=s*7,this.camera.near=Math.max(.1,Math.min(.5,s/200)),this.camera.far=Math.max(400,s*12),this.camera.updateProjectionMatrix(),this.hall=u_(this.sceneData,{anisotropy:Math.min(8,this.renderer.capabilities.getMaxAnisotropy())}),this.root.add(this.hall.group),this.fitShadows(n),this.setupProduct(),(this.sceneData.elements||[]).forEach(r=>this.buildElement(r)),this.buildFlows(),this.setLabelsVisible(e.labels!==!1),this.resize(),this.applyCamera(e.camera,n)}fitShadows(t){const e=Math.max(t.w,t.d),n=e>70?4096:2048;this.sun.shadow.mapSize.x!==n&&(this.sun.shadow.mapSize.set(n,n),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null)),this.sun.position.set(-e*.35,e*.8+20,e*.45),this.sun.target.position.set(0,0,0);const s=this.sun.shadow.camera,r=e*.72;s.left=-r,s.right=r,s.top=r,s.bottom=-r,s.near=1,s.far=e*3+80,s.updateProjectionMatrix()}setupProduct(){const t=this.sceneData.product||{},e=t.kind||"box";e==="steel"?this.particleGeometry=new ge(1.4,.14,.32):e==="part"?this.particleGeometry=new He(.2,.2,.32,16):e==="pallet"?this.particleGeometry=new ge(1,.8,.85):this.particleGeometry=new ge(.55,.38,.45);const n=t.color||(e==="steel"||e==="part"?"#9aa4ad":"#b98a57"),s=e==="steel"||e==="part";this.particleMaterial=new Ne({color:n,roughness:s?.32:.9,metalness:s?.8:0})}fitCamera(t,e=54,n=-12){const s=vn.degToRad(e),r=vn.degToRad(n),a=new F(Math.cos(s)*Math.sin(r),Math.sin(s),Math.cos(s)*Math.cos(r)),o=new F(0,0,e>80?0:t.d*.04),l=[];[-.5,.5].forEach(c=>[-.5,.5].forEach(u=>[0,3].forEach(m=>l.push(new F(c*t.w,m,u*t.d)))));const h=this.camera.clone();let d=Math.max(t.w,t.d)*1.2;for(let c=0;c<8;c+=1){h.position.copy(o).addScaledVector(a,d),h.lookAt(o),h.updateMatrixWorld(!0);let u=0;l.forEach(m=>{const M=m.clone().project(h);u=Math.max(u,Math.abs(M.x),Math.abs(M.y))}),d*=u/.92}const p=o.clone().addScaledVector(a,d);return{position:[p.x,p.y,p.z],target:[o.x,o.y,o.z]}}applyCamera(t,e=(s=>(s=this.sceneData)==null?void 0:s.floor)()||{w:60,d:40},n=!1){const r=Math.max(e.w,e.d),a=t!=null&&t.position&&(t!=null&&t.target)?t:this.fitCamera(e);this.controls.maxDistance=r*3;const o=new F(...a.position),l=new F(...a.target);if(n){this.flyTo(o,l);return}this.tween=null,this.camera.position.copy(o),this.controls.target.copy(l),this.controls.update()}flyTo(t,e,n=.8){this.tween={fromPos:this.camera.position.clone(),fromTarget:this.controls.target.clone(),toPos:t,toTarget:e,t:0,duration:n}}topView(){var e;const t=((e=this.sceneData)==null?void 0:e.floor)||{w:60,d:40};this.applyCamera(this.fitCamera(t,89,0),t,!0)}focus(t){var l;const e=this.items.get(t);if(!e)return;const n=e.el,s=new F(n.x,Math.min(2,(n.h||2)*.4),n.z),r=this.camera.position.clone().sub(this.controls.target).normalize();r.y<.35&&(r.y=.35),r.normalize();const a=((l=this.sceneData)==null?void 0:l.floor)||{w:60,d:40},o=vn.clamp(Math.max(n.w,n.d,n.h)*2.6+7,9,Math.max(a.w,a.d)*.8);this.flyTo(s.clone().addScaledVector(r,o),s)}zoom(t){const e=this.camera.position.clone().sub(this.controls.target),n=vn.clamp(e.length()*t,this.controls.minDistance,this.controls.maxDistance);this.flyTo(this.controls.target.clone().add(e.setLength(n)),this.controls.target.clone(),.35)}getCamera(){const t=e=>Math.round(e*100)/100;return{position:[t(this.camera.position.x),t(this.camera.position.y),t(this.camera.position.z)],target:[t(this.controls.target.x),t(this.controls.target.y),t(this.controls.target.z)]}}buildElement(t){var r,a;const e={id:t.id,el:t,pickables:[],animators:[],working:!1,pulse:!1,flash:0,label:null,labelKey:"",statusColor:null,statusShown:!1,selected:!1},n=new Ve;n.position.set(t.x,t.y||0,t.z),n.rotation.y=v_(t.rot);const s=this.kit.build(t,e,{hallH:((r=this.hall)==null?void 0:r.height)||8});if(n.add(s),e.group=n,t.machine_id&&this.makeAndon(e,n),(t.machine_id||!_c.has(t.kind))&&this.makeRings(e,n),t.operators){e.people=[];const o=t.operators;for(let l=0;l<o;l+=1){const h=this.kit.person(l),d=Math.min(o,Math.max(1,Math.floor(t.w/.9))),p=Math.floor(l/d),c=l%d,u=Math.min(d,o-p*d);h.position.set((c-(u-1)/2)*.9,0,e.front+.55+p*.8),h.rotation.y=Math.PI,n.add(h),e.people.push(h)}}if(e.vehicle&&((a=t.path)==null?void 0:a.length)>=2){const o=t.path.map(([c,u])=>new F(c,0,u)),h=o[0].distanceTo(o[o.length-1])<.5?o:[...o,...o.slice(1,-1).reverse(),o[0]];e.route=xc(h),e.routeS=0,e.speed=t.kind==="agv"?1:1.6;const{pos:d,dir:p}=Ia(e.route,0,new F);n.position.set(d.x,t.y||0,d.z),e.yaw=Math.atan2(-p.z,p.x),n.rotation.y=e.yaw}n.traverse(o=>{o.isMesh&&!o.userData.noPick&&(o.userData.elementId=t.id,e.pickables.push(o))}),this.root.add(n),this.items.set(t.id,e),this.nameLabel(e)}makeAndon(t,e){const n=t.el,[s,r,a]=t.andonAt||[n.w*.4,n.h,-n.d*.35],o=new Ve;o.position.set(s,r,a);const l=this.kit.paint("#2e3339",.5,.4),h=new Ht(new He(.025,.025,.3,8),l);h.position.y=.15,o.add(h);const d=gc.map((u,m)=>{const M=new Ht(new He(.065,.065,.11,16),new Ne({color:u,roughness:.3,metalness:.1,emissive:"#000000"}));return M.position.y=.36+m*.12,o.add(M),M}),p=new Ht(new He(.05,.066,.04,16),l);p.position.y=.36+2*.12+.075,o.add(p);const c=this.kit.glowSprite("#ffffff",1.5);c.userData.noPick=!0,o.add(c),e.add(o),t.andon={segs:d,glow:c,index:-1},t.top=Math.max(t.top||0,r+.72)}makeRings(t,e){const n=t.el;if(n.kind==="forklift"||n.kind==="agv")return;const s=n.w/2+.45,r=n.d/2+.45,a=l=>new mn({color:l,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-3}),o=(l,h,d)=>{const p=new Ht(l,h);return p.rotation.x=-Math.PI/2,p.position.y=d,p.userData.noPick=!0,p.renderOrder=2,e.add(p),p};t.ring=o(new Ls(vc(s,r,.2,.4),6),a(bs),.025),t.fill=o(new Ls(Ao(s-.2,r-.2,.25),6),a(bs),.018),n.machine_id&&(t.ping=o(new Yo(.85,1,48),a("#ffffff"),.03),t.pingSize=Math.max(s,r)),t.selRing=o(new Ls(vc(s+.35,r+.35,.12,.55),6),a(Da),.028)}nameLabel(t){const e=t.el;if(_c.has(e.kind)||!e.machine_id&&!e.name){this.clearLabel(t);return}this.updateLabel(t,{title:e.name||e.id,number:e.machine_id?t.number:null,muted:!e.machine_id})}clearLabel(t){t.label&&(t.group.remove(t.label),t.label.material.map.dispose(),t.label.material.dispose(),t.label=null,t.labelKey="")}updateLabel(t,e){t.labelOpts=e;const n=this.compact&&!e.muted?{...e,status:""}:e,s=JSON.stringify(n);if(s===t.labelKey)return;this.clearLabel(t),t.labelKey=s;const{texture:r,width:a,height:o}=n_(n),l=new Go({map:r,transparent:!0,depthWrite:!1,depthTest:!1,sizeAttenuation:!1,toneMapped:!1,fog:!1}),h=new rh(l);h.center.set(.5,0),h.renderOrder=e.muted?9:10,h.userData={px:[a,o],muted:!!e.muted},h.position.set(0,(t.top||t.el.h||2)+.2,0),h.visible=this.labelsVisible,this.scaleLabel(h),t.group.add(h),t.label=h}refreshLabels(){this.items.forEach(t=>t.labelOpts&&this.updateLabel(t,t.labelOpts))}setLabelsVisible(t){this.labelsVisible=t,this.items.forEach(e=>{e.label&&(e.label.visible=t)})}setNumbers(t){this.numbers=t||new Map,this.items.forEach((e,n)=>{e.number=this.numbers.get(n)??null})}declutter(){const t=this.renderer.domElement,e=t.clientWidth,n=t.clientHeight;if(!e||!n)return;const s=new F,r=[];this.items.forEach(o=>{if(!o.label)return;o.label.getWorldPosition(s);const l=s.distanceTo(this.camera.position);s.project(this.camera);const[h,d]=o.label.userData.px;r.push({sprite:o.label,prio:o.label.userData.muted?1:o.selected?-1:0,dist:l,x:(s.x+1)/2*e,y:(1-s.y)/2*n,w:h,h:d,behind:s.z>1})}),r.sort((o,l)=>o.prio-l.prio||o.dist-l.dist);const a=[];r.forEach(o=>{const l=o.prio===1?2:5;let h=0,d=null;for(;h<=l;h+=1){const c=o.y-h*o.h*.92;if(d={l:o.x-o.w/2,r:o.x+o.w/2,t:c-o.h,b:c},!a.some(u=>d.l<u.r&&d.r>u.l&&d.t<u.b&&d.b>u.t))break}const p=h<=l;o.sprite.center.y=-Math.min(h,l)*.92,o.sprite.visible=this.labelsVisible&&!o.behind&&!(this.compact&&o.prio===1)&&(p||o.prio<=0),p&&!o.behind&&a.push(d)})}buildFlows(){const t=new Map((this.sceneData.elements||[]).map(e=>[e.id,e]));(this.sceneData.flows||[]).forEach(e=>{var l;const n=t.get(e.from),s=t.get(e.to);if(!n||!s)return;const r=[[n.x,n.z]];(l=e.via)!=null&&l.length?r.push(...e.via):Math.abs(s.x-n.x)>.5&&Math.abs(s.z-n.z)>.5&&r.push([s.x,n.z]),r.push([s.x,s.z]);const a=xc(r.map(([h,d])=>new F(h,__,d))),o=[];for(let h=1;h<a.points.length;h+=1){const d=a.points[h-1],p=a.points[h],c=d.distanceTo(p);if(c<.2)continue;const u=this.chevron.clone();u.needsUpdate=!0,u.repeat.set(c/1.4,1);const m=new mn({map:u,color:Da,transparent:!0,opacity:.4,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-4}),M=new Ht(new yn(c,.42),m);M.rotation.order="YXZ",M.rotation.set(-Math.PI/2,Math.atan2(-(p.z-d.z),p.x-d.x),0),M.position.set((d.x+p.x)/2,.022,(d.z+p.z)/2),M.renderOrder=3,this.root.add(M),o.push(m)}this.flowLines.push({flow:e,route:a,materials:o,nextEmit:0})}),this.applyFlowStyle()}applyFlowStyle(){const t=this.mode==="sim"?.75:.42;this.flowLines.forEach(e=>e.materials.forEach(n=>n.opacity=t))}paintStatus(t,e,n,{pulse:s=!1}={}){if(t.statusColor=e,t.statusShown=!!e,t.pulse=s,t.ring&&(t.ring.material.color.set(e||bs),t.fill.material.color.set(e||bs),t.ring.material.opacity=e?.92:0,t.fill.material.opacity=e?.16:0),t.andon){t.andon.index=e?n:-1,t.andon.segs.forEach((a,o)=>{const l=e&&o===n;a.material.color.set(l?e:gc[o]),a.material.emissive.set(l?e:"#000000"),a.material.emissiveIntensity=l?2.2:0});const r=t.andon.glow;e&&n>=0?(r.position.y=t.andon.segs[n].position.y,r.material.color.set(e),r.material.opacity=.9):r.material.opacity=0}}setMode(t){this.mode=t,this.particles.forEach(e=>e.mesh.visible=!1),this.flowLines.forEach(e=>e.nextEmit=0),this.items.forEach(e=>{e.working=!1,e.flash=0}),this.applyFlowStyle()}setSimRunning(t){this.simRunning=t}signal(t,e,n){const s=/count|licznik|szt|pieces|produced/i.test(String(e||""));this.items.forEach(r=>{if(Number(r.el.machine_id)===Number(t)&&(r.flash=1,s)){const a=Number(n);Number.isFinite(a)&&Number.isFinite(r.lastCount)&&a>r.lastCount&&this.mode==="live"&&this.flowLines.filter(o=>o.flow.from===r.id).forEach(o=>this.spawnParticle(o.flow.from,o.flow.to)),Number.isFinite(a)&&(r.lastCount=a)}})}applyLive(t){this.mode="live";let e=!1;this.items.forEach(n=>{const s=n.el;if(!s.machine_id){n.statusShown&&this.paintStatus(n,null,-1),n.working=!1,this.nameLabel(n);return}const r=t[s.machine_id];if(n.working=Number(r==null?void 0:r.typeEvent)===1,e=e||n.working,r&&r.color){this.paintStatus(n,r.color,x_(r.typeEvent,r.color),{pulse:Number(r.typeEvent)===3});const a=(r.substatuses||[]).filter(o=>o.value!=="-"&&o.value!==void 0&&o.value!==null&&o.value!=="").slice(0,1).map(o=>`${Cr(o.value)}${o.unit?" "+o.unit:""}`);this.updateLabel(n,{title:s.name||s.id,number:n.number,status:[r.nameStatus||"",...a].filter(Boolean).join(" · "),color:r.color})}else this.paintStatus(n,null,-1),this.updateLabel(n,{title:s.name||s.id,number:n.number,color:null})}),this.anyWorking=e}applySimulation(t,e=[],n={}){this.mode="sim";const s=new Map(t.stations.map(a=>[a.id,a])),r={busy:0,blocked:1,starved:-1,down:2};this.items.forEach(a=>{const o=s.get(a.id);if(!o){a.working=!1,a.el.machine_id&&this.paintStatus(a,null,-1),this.nameLabel(a);return}const l=!a.el.machine_id&&o.role!=="station";if(o.role!=="station"){a.working=!1,this.paintStatus(a,null,-1),this.updateLabel(a,{title:a.el.name||a.el.id,number:a.number,status:`${o.done} ${n.pcs||"szt."}`,color:"#64748b",muted:l});return}const h=ui[o.state]||bs,d=t.bottleneck===a.id;a.working=o.state==="busy",this.paintStatus(a,h,r[o.state]??-1,{pulse:d||o.state==="down"});let p=`${n.busy||"praca"} ${Math.round(o.busy*100)}% · ${n.queue||"kolejka"} ${o.queue}/${o.queueCap}`;d&&(p=`${n.bottleneck||"wąskie gardło"} · ${p}`),this.updateLabel(a,{title:a.el.name||a.el.id,number:a.number,status:p,color:d?ui.down:h})}),e.forEach(a=>this.spawnParticle(a.from,a.to))}spawnParticle(t,e){const n=this.flowLines.find(r=>r.flow.from===t&&r.flow.to===e);if(!n||!this.particleGeometry||this.particles.filter(r=>r.mesh.visible).length>260)return;let s=this.particles.find(r=>!r.mesh.visible);if(!s){const r=new Ht(this.particleGeometry,this.particleMaterial);r.castShadow=!0,this.particleGroup.add(r),s={mesh:r},this.particles.push(s)}s.route=n.route,s.s=0,s.speed=vn.clamp(n.route.total/2.6,1.6,6),s.mesh.visible=!0}animate(){var o;this.frame=requestAnimationFrame(this.animate);const t=Math.min(.1,this.clock.getDelta()),e=this.clock.elapsedTime;if(this.tween){const l=this.tween;l.t=Math.min(1,l.t+t/l.duration);const h=l.t<.5?2*l.t*l.t:1-Math.pow(-2*l.t+2,2)/2;this.camera.position.lerpVectors(l.fromPos,l.toPos,h),this.controls.target.lerpVectors(l.fromTarget,l.toTarget,h),l.t>=1&&(this.tween=null)}this.controls.update();const n=(o=this.sceneData)==null?void 0:o.floor;if(n&&!this.tween){const l=this.controls.target,h=vn.clamp(l.x,-n.w/2,n.w/2),d=vn.clamp(l.z,-n.d/2,n.d/2),p=vn.clamp(l.y,0,12);if(h!==l.x||p!==l.y||d!==l.z){const c=new F(h-l.x,p-l.y,d-l.z);l.add(c),this.camera.position.add(c)}}this.hall&&this.hall.walls.forEach(l=>{l.upper.visible=this.camera.position.clone().sub(l.center).dot(l.normal)<0});const s=this.mode==="live"?this.anyWorking:this.simRunning,r=new F;this.items.forEach(l=>{const h=l.el,d=h.x*.7+h.z*.3,p=l.vehicle||l.crane?s:l.working;if(l.animators.forEach(c=>c(e,t,p,d)),l.ring&&l.statusShown){const c=l.pulse?.5+.5*Math.abs(Math.sin(e*3.5)):1;l.ring.material.opacity=.35+.57*c,l.fill.material.opacity=l.pulse?.08+.18*c:.16}if(l.andon&&l.andon.index>=0&&(l.andon.glow.material.opacity=l.pulse?Math.sin(e*7)>0?.95:.12:.85),l.selRing&&(l.selRing.material.opacity=l.selected?.7+.25*Math.sin(e*3):0),l.ping)if(l.flash>0){l.flash=Math.max(0,l.flash-t*1.1);const c=.6+(1-l.flash)*(l.pingSize+1.5);l.ping.scale.set(c,c,1),l.ping.material.color.set(l.statusColor||Da),l.ping.material.opacity=l.flash*.75}else l.ping.material.opacity=0;if(l.people&&l.people.forEach((c,u)=>{const[m,M]=c.userData.arms,f=l.working?Math.sin(e*2.6+u+d)*.45:0;m.rotation.x=-.25+f,M.rotation.x=-.25-f}),l.route&&s){l.routeS=(l.routeS+t*l.speed)%l.route.total;const{pos:c,dir:u}=Ia(l.route,l.routeS,r);l.group.position.x=c.x,l.group.position.z=c.z;let M=Math.atan2(-u.z,u.x)-l.yaw;for(;M>Math.PI;)M-=Math.PI*2;for(;M<-Math.PI;)M+=Math.PI*2;l.yaw+=M*Math.min(1,t*3),l.group.rotation.y=l.yaw}}),this.mode==="live"&&this.flowLines.forEach(l=>{var u,m;const h=this.items.get(l.flow.from),d=this.items.get(l.flow.to);if(!(h&&h.working||h&&!h.el.machine_id&&d&&d.working)||e<(l.nextEmit||0))return;this.spawnParticle(l.flow.from,l.flow.to);const c=Number((m=(u=h==null?void 0:h.el)==null?void 0:u.sim)==null?void 0:m.cycle_s)||60;l.nextEmit=e+Math.min(7,Math.max(2,c/22))*(.75+Math.random()*.5)});const a=this.mode==="sim"&&!this.simRunning?0:.5;if(this.flowLines.forEach(l=>l.materials.forEach(h=>h.map.offset.x-=t*a)),e-(this.declutterAt||0)>.2){this.declutterAt=e;const l=this.camera.position.distanceTo(this.controls.target)>45;l!==this.compact&&(this.compact=l,this.refreshLabels()),this.declutter()}this.particles.forEach(l=>{if(!l.mesh.visible)return;if(l.s+=t*l.speed,l.s>=l.route.total){l.mesh.visible=!1;return}const{pos:h,dir:d}=Ia(l.route,l.s,r);l.mesh.position.copy(h),l.mesh.rotation.y=Math.atan2(-d.z,d.x)}),this.renderer.render(this.scene,this.camera)}dispose(){cancelAnimationFrame(this.frame),this.resizeObserver.disconnect();const t=this.renderer.domElement;t.removeEventListener("pointerdown",this.handlePointerDown),t.removeEventListener("pointerup",this.handlePointerUp),t.removeEventListener("pointermove",this.handlePointerMove),t.removeEventListener("webglcontextlost",this.handleContextLost),t.removeEventListener("webglcontextrestored",this.handleContextRestored),this.clear(),this.chevron.dispose(),this.envTexture&&this.envTexture.dispose(),this.controls.dispose(),this.renderer.dispose(),t.parentNode&&t.parentNode.removeChild(t)}}const S_=5,E_=30,b_=.5;function w_(i){let t=i>>>0;return function(){t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}function en(i,t){const e=Number(i);return Number.isFinite(e)?e:t}function T_(i){return i==="conveyor"||i==="oven"}function A_(i){const t=Array.isArray(i==null?void 0:i.elements)?i.elements:[],e=Array.isArray(i==null?void 0:i.flows)?i.flows:[],n=new Map(t.map(p=>[p.id,p])),s=new Map(t.map(p=>[p.id,0])),r=new Map;e.forEach(p=>{!n.has(p.from)||!n.has(p.to)||(s.set(p.to,s.get(p.to)+1),r.has(p.from)||r.set(p.from,[]),r.get(p.from).push(p.to))});const a=(p,c)=>n.get(p).x-n.get(c).x||n.get(p).z-n.get(c).z,o=new Set(e.flatMap(p=>[p.from,p.to]));let l=t.filter(p=>o.has(p.id)&&s.get(p.id)===0).map(p=>p.id).sort(a);const h=new Set,d=[];for(;l.length;){const p=[];l.forEach(c=>{h.has(c)||(h.add(c),d.push(c),(r.get(c)||[]).forEach(u=>{s.set(u,s.get(u)-1),s.get(u)===0&&p.push(u)}))}),l=p.sort(a)}return t.filter(p=>!h.has(p.id)).map(p=>p.id).sort(a).forEach(p=>d.push(p)),d.filter(p=>n.get(p).machine_id)}function Mc(i){var o,l;const t=Array.isArray(i==null?void 0:i.elements)?i.elements:[],e=Array.isArray(i==null?void 0:i.flows)?i.flows:[],n=new Set(t.map(h=>h.id)),s={},r={};e.forEach(h=>{n.has(h.from)&&n.has(h.to)&&(r[h.from]=(r[h.from]||0)+1,s[h.to]=(s[h.to]||0)+1)});const a={};return t.forEach(h=>{const d=h.sim||{};if(!(s[h.id]||r[h.id])&&!d.role)return;const c=d.role||(s[h.id]?r[h.id]?"station":"sink":"source"),u=T_(h.kind);let m=en(d.cycle_s,null);m==null&&(m=c!=="station"?0:u?Math.max(1,en(h.w,2)/b_):E_),a[h.id]={id:h.id,name:h.name||h.id,kind:h.kind,machine_id:h.machine_id||null,role:c,cycle_s:m,capacity:Math.max(1,Math.round(en(d.capacity,u&&c==="station"?Math.max(1,Math.round(en(h.w,1))):1))),mtbf_s:Math.max(0,en(d.mtbf_s,0)),stop_s:Math.max(0,en(d.stop_s,0)),arrival_s:d.arrival_s!=null?en(d.arrival_s,null):null}}),{stations:a,flows:e.filter(h=>a[h.from]&&a[h.to]).map(h=>({from:h.from,to:h.to,buffer:Math.max(0,Math.round(en(h.buffer,S_)))})),arrival_s:((o=i==null?void 0:i.simulation)==null?void 0:o.arrival_s)!=null?en(i.simulation.arrival_s,null):null,horizon_h:en((l=i==null?void 0:i.simulation)==null?void 0:l.horizon_h,8),seed:1}}class R_{constructor(t){this.params=t,this.reset()}reset(){const t=this.params;this.rand=w_(en(t.seed,1)*2654435761),this.time=0,this.transfers=[],this.queues=t.flows.map(e=>({...e,count:0,area:0,max:0})),this.stations={},Object.values(t.stations).forEach(e=>{const n=this.queues.filter(o=>o.to===e.id),s=this.queues.filter(o=>o.from===e.id),r=e.role||(n.length===0?"source":s.length===0?"sink":"station"),a=r==="source"?en(e.arrival_s??t.arrival_s,0):0;this.stations[e.id]={...e,role:r,inputs:n,outputs:s,slots:Array.from({length:Math.max(1,e.capacity)},()=>({state:"idle",remaining:0})),arrival:a,nextArrival:a,waiting:0,down:0,untilStop:this.sampleUptime(e),rr:0,done:0,time:{busy:0,blocked:0,starved:0,down:0}}}),this.order=this.topologicalOrder()}sampleUptime(t){return t.mtbf_s>0?-Math.log(1-this.rand())*t.mtbf_s:1/0}sampleStop(t){return t.stop_s>0?Math.max(1,-Math.log(1-this.rand())*t.stop_s):0}topologicalOrder(){const t=Object.keys(this.stations),e=Object.fromEntries(t.map(r=>[r,0]));this.queues.forEach(r=>{e[r.to]+=1});const n=t.filter(r=>e[r]===0),s=[];for(;n.length;){const r=n.shift();s.push(r),this.stations[r].outputs.forEach(a=>{e[a.to]-=1,e[a.to]===0&&n.push(a.to)})}return t.forEach(r=>{s.includes(r)||s.push(r)}),s.reverse()}pushOut(t){if(t.role==="sink"||t.outputs.length===0)return t.done+=1,!0;let e=null;return t.outputs.forEach(n=>{n.count<n.buffer&&(!e||n.count<e.count)&&(e=n)}),e?(e.count+=1,e.max=Math.max(e.max,e.count),t.done+=1,this.transfers.length<400&&this.transfers.push({from:e.from,to:e.to,t:this.time}),!0):!1}pullIn(t){if(t.role==="source")return t.arrival<=0?!0:t.waiting>0?(t.waiting-=1,!0):!1;const e=t.inputs.length;for(let n=0;n<e;n+=1){const s=t.inputs[(t.rr+n)%e];if(s.count>0)return s.count-=1,t.rr=(t.rr+n+1)%e,!0}return!1}step(t){this.transfers=[];const e=this.order;for(const n of e){const s=this.stations[n];if(s.role==="source"&&s.arrival>0)for(s.nextArrival-=t;s.nextArrival<=0;)s.waiting+=1,s.nextArrival+=s.arrival;if(s.down>0){s.down-=t,s.time.down+=t;continue}let r=!1,a=!1,o=!1;s.slots.forEach(l=>{l.state==="busy"&&(l.remaining-=t,l.remaining<=1e-9&&(l.state="blocked")),l.state==="blocked"&&this.pushOut(s)&&(l.state="idle"),l.state==="idle"&&this.pullIn(s)&&(s.cycle_s>0?(l.state="busy",l.remaining=s.cycle_s):l.state=this.pushOut(s)?"idle":"blocked"),l.state==="busy"?r=!0:l.state==="blocked"?a=!0:o=!0}),r?(s.time.busy+=t,s.untilStop-=t,s.untilStop<=0&&(s.down=this.sampleStop(s),s.untilStop=this.sampleUptime(s))):a?s.time.blocked+=t:o&&(s.time.starved+=t)}this.queues.forEach(n=>{n.area+=n.count*t}),this.time+=t}runFor(t,e=1){const n=Math.ceil(t/e);for(let s=0;s<n;s+=1)this.step(e);this.transfers=[]}stationState(t){const e=this.stations[t];return e?e.down>0?"down":e.slots.some(n=>n.state==="busy")?"busy":e.slots.some(n=>n.state==="blocked")?"blocked":"starved":null}stats(){const t=Math.max(this.time,1e-9),e=Object.values(this.stations).map(o=>({id:o.id,name:o.name,role:o.role,state:this.stationState(o.id),busy:o.time.busy/t,blocked:o.time.blocked/t,starved:o.time.starved/t,down:o.time.down/t,done:o.done,perHour:o.done/t*3600,queue:o.inputs.reduce((l,h)=>l+h.count,0),queueCap:o.inputs.reduce((l,h)=>l+h.buffer,0)})),n=e.filter(o=>o.role==="station");let s=null;n.forEach(o=>{const l=o.busy+o.down;(!s||l>s.busy+s.down)&&(s=o)});const a=e.filter(o=>o.role==="sink").reduce((o,l)=>o+l.done,0);return{time:this.time,finished:a,throughputPerHour:a/t*3600,wip:this.queues.reduce((o,l)=>o+l.count,0)+Object.values(this.stations).reduce((o,l)=>o+l.slots.filter(h=>h.state!=="idle").length,0),bottleneck:s?s.id:null,stations:e,queues:this.queues.map(o=>({from:o.from,to:o.to,count:o.count,buffer:o.buffer,avg:o.area/t,max:o.max}))}}}const C_={key:0,class:"flex flex-col gap-3"},P_={key:1,class:"hologram-empty"},L_={class:"hologram-empty__title"},D_={class:"hologram-empty__text"},I_={class:"hologram-empty__steps"},U_=["title"],N_=["title"],F_={class:"hologram-layout__label"},O_={class:"hologram-viewport"},B_={key:0,class:"hologram-kpis"},z_={class:"hologram-kpi__label"},k_={class:"hologram-kpi__value"},H_={class:"hologram-kpi__sub"},V_={class:"hologram-kpi"},G_={class:"hologram-kpi__label"},W_={class:"hologram-kpi__value is-good"},X_={class:"hologram-kpi__sub"},Y_={class:"hologram-kpi"},q_={class:"hologram-kpi__label"},$_={class:"hologram-kpi__sub"},Z_={class:"hologram-kpi"},K_={class:"hologram-kpi__label"},j_={class:"hologram-kpi__sub"},J_={key:1,class:"hologram-kpis"},Q_={class:"hologram-kpi"},tv={class:"hologram-kpi__label"},ev={class:"hologram-kpi__value"},nv={class:"hologram-kpi__sub"},iv={class:"hologram-kpi"},sv={class:"hologram-kpi__label"},rv={class:"hologram-kpi__value"},av={class:"hologram-kpi__sub"},ov={class:"hologram-kpi hologram-kpi--wide"},lv={class:"hologram-kpi__label"},cv={class:"hologram-kpi__value is-bad hologram-kpi__text"},hv={class:"hologram-kpi__sub"},uv={class:"hologram-mapctl"},dv=["title","aria-label"],fv=["title","aria-label"],pv=["title","aria-label"],mv=["title","aria-label"],gv={key:2,class:"hologram-simbar"},_v={class:"hologram-legend"},vv={key:4,class:"hologram-panel"},xv={class:"hologram-panel__head"},Mv={key:0,class:"hologram-panel__num"},yv={class:"hologram-facts"},Sv={class:"hologram-panel__sub"},Ev={class:"hologram-signals"},bv={class:"hologram-panel__sub"},wv={class:"hologram-panel__grid"},Tv=["for"],Av=["for"],Rv={key:5,class:"hologram-hint"},Cv=["aria-label"],Pv=["onClick"],Lv={class:"hologram-mcard__top"},Dv={class:"hologram-mcard__num"},Iv={class:"hologram-mcard__name"},Uv={class:"hologram-mcard__meta"},Nv={class:"hologram-muted"},Fv={key:0,class:"hologram-arrival"},Ov={for:"hologram-arrival"},Bv={class:"hologram-stations"},zv={class:"hologram-stations__head"},kv={class:"hologram-muted"},Hv={key:0,class:"hologram-stations__grid"},Vv=["for"],Gv=["for"],Wv=["for"],Xv=["for"],Yv={class:"hologram-panel__sub"},yc="omni-hologram-view-v1",Sc="#94a3b8",qv={__name:"ComponentHologram",setup(i){const t=[1,10,60,300],n=Eh().proxy,s=()=>{var D,k;return(k=(D=n.$store)==null?void 0:D.state)==null?void 0:k.dataEnc},r=(D,k="",q="get",gt=null)=>n.axios(bc(n.$apiHost,D,k,s(),q,gt)),a=D=>Array.isArray(D)?D:Array.isArray(D==null?void 0:D.results)?D.results:[],o=(D,k)=>{var q;return(q=n.$toast)==null?void 0:q.add({severity:D,summary:ot(D==="error"?"error":"success"),detail:k,life:D==="error"?5e3:3e3})};function l(){try{return JSON.parse(localStorage.getItem(yc)||"{}")||{}}catch{return{}}}function h(D){try{localStorage.setItem(yc,JSON.stringify({...l(),...D}))}catch{}}const d=l(),p=ue(!0),c=ue([]),u=ue([]),m=ue([]),M=ue([]),f=ue(d.id||null),g=ue(null),R=ue(d.mode==="sim"?"sim":"live"),w=ue(!0),Y=ue(["side","bottom","none"].includes(d.cards)?d.cards:"side"),U=ue(null),I=ue(null),X=ue(null);let Q=null;function v(){const D=I.value;if(!D||window.innerWidth<=991){X.value=null;return}const k=D.getBoundingClientRect().top+(b.value?0:window.scrollY);X.value=Math.max(480,Math.floor(window.innerHeight-k-(b.value?14:32)))}gn(U,D=>{Q==null||Q.disconnect(),D&&(Q=new ResizeObserver(()=>v()),Q.observe(D),Gs(v))});const E=ue(null),W=ue(null);let A=null;const z=we(()=>[{value:"side",label:ot("hologram.layout.side"),icon:"pi pi-objects-column"},{value:"bottom",label:ot("hologram.layout.bottom"),icon:"pi pi-table"},{value:"none",label:ot("hologram.layout.none"),icon:"pi pi-eye-slash"}]),$=we(()=>[{label:ot("hologram.modeLive"),value:"live",icon:"pi pi-wifi"},{label:ot("hologram.modeSim"),value:"sim",icon:"pi pi-sliders-h"}]),_=we(()=>c.value.map(D=>({value:D.id,label:`${D.name} · v${D.version}`}))),S=we(()=>{var D;return((D=g.value)==null?void 0:D.scene)||{}}),x=we(()=>new Map((S.value.elements||[]).map(D=>[D.id,D]))),C=we(()=>x.value.get(E.value)||null),L=we(()=>A_(S.value)),N=we(()=>new Map(L.value.map((D,k)=>[D,k+1])));function et(D){var k;return((k=u.value.find(q=>Number(q.id)===Number(D)))==null?void 0:k.name)||`#${D}`}function K(D){var k;return((k=m.value.find(q=>Number(q.id)===Number(D)))==null?void 0:k.name)||(D?`#${D}`:"")}function B(D){return M.value.find(k=>Number(k.id)===Number(D))||null}function j(D){return ot(`hologram.kinds.${D}`)}const st=D=>String(D).padStart(2,"0"),lt=we(()=>{var k;const D=S.value.scope||{type:"park"};if(D.type==="line")return ot("hologram.scope.lines",{list:(D.line_ids||[]).map(K).join(", ")});if(D.type==="machines"){const q=D.machine_ids||[];return q.length===1?((k=B(q[0]))==null?void 0:k.name)||ot("hologram.scope.machines",{n:1}):ot("hologram.scope.machines",{n:q.length})}return ot("hologram.scope.park",{park:g.value?et(g.value.server):""})});let mt=!1;const _t=Fh({axios:n.axios,apiHost:n.$apiHost,dataEnc:s,onError:D=>o("error",D),onConnect:()=>o("success",ot("hologram.liveConnected")),onReconnect:()=>{var D;mt||(mt=!0,(D=n.$toast)==null||D.add({severity:"warn",summary:ot("hologram.liveReconnect"),life:3e3}))},onSignal:(D,k,q)=>{R.value==="live"&&(A==null||A.signal(D,k,q))}}),Gt=ue(Date.now());let $t=null;const kt=we(()=>{const D=_t.activity.lastAt?Math.max(0,Math.round((Gt.value-_t.activity.lastAt)/1e3)):null;return{connected:_t.connected.value,fresh:D!==null&&D<30,signals:_t.activity.signals,last:D}});let O=null;gn(()=>_t.live,()=>{R.value!=="live"||O||(O=requestAnimationFrame(()=>{O=null,A==null||A.applyLive(_t.live)}))},{deep:!0});const fe=D=>D!=null&&D.machine_id&&_t.live[String(D.machine_id)]||null,Ut=we(()=>{const D={total:0,working:0,stopped:0,failure:0,noData:0};return(S.value.elements||[]).forEach(k=>{if(!k.machine_id)return;D.total+=1;const q=fe(k),gt=Number(q==null?void 0:q.typeEvent);!q||!q.color?D.noData+=1:gt===1?D.working+=1:gt===3?D.failure+=1:D.stopped+=1}),D}),Wt=we(()=>fe(C.value));function Bt(D){if(!D)return"";const k=String(D).match(/(\d{1,2}:\d{2})(:\d{2})?/);return k?k[1]:String(D)}function he(D){const k=((D==null?void 0:D.substatuses)||[]).find(q=>q.value!=="-"&&q.value!==void 0&&q.value!==null&&q.value!=="");return k?{value:`${Cr(k.value)}${k.unit?" "+k.unit:""}`,name:k.target}:null}const Pt=ue(null),P=ue(null),y=ue(!1),Z=ue(d.speed&&t.includes(d.speed)?d.speed:60),at=t.map(D=>({label:`×${D}`,value:D}));let ut=null,rt=null,Lt=0,xt=0;const At=we(()=>(S.value.flows||[]).length>0),Jt=we(()=>Pt.value?Object.values(Pt.value.stations):[]),dt=we(()=>({busy:ot("hologram.sim.busy"),queue:ot("hologram.sim.queue"),pcs:ot("hologram.sim.pcs"),bottleneck:ot("hologram.sim.bottleneck")})),Ct=we(()=>{var k,q,gt,Tt;const D=(k=P.value)==null?void 0:k.bottleneck;return D?((Tt=(gt=(q=Pt.value)==null?void 0:q.stations)==null?void 0:gt[D])==null?void 0:Tt.name)||D:ot("hologram.sim.none")}),It=we(()=>{var D,k;return C.value&&((k=(D=Pt.value)==null?void 0:D.stations)==null?void 0:k[C.value.id])||null});function zt(D){const k=Math.floor(D||0);return`${Math.floor(k/3600)} h ${String(Math.floor(k%3600/60)).padStart(2,"0")} min`}function Rt(D){return`${Math.round((D||0)*100)}%`}function Ot(D){var k;return((k=P.value)==null?void 0:k.stations.find(q=>q.id===D))||null}function Nt(){Pt.value&&(ut=new R_(Pt.value),ee())}function ee(){ut&&(P.value=ut.stats(),R.value==="sim"&&(A==null||A.applySimulation(P.value,[],dt.value)))}function H(){Pt.value=Mc(S.value),y.value=!1,Nt()}function wt(){ut||Nt(),y.value=!y.value,Lt=0}function nt(){y.value=!1,Nt()}function ct(){y.value=!1,Nt(),ut.runFor((Pt.value.horizon_h||8)*3600,1),ee()}function Et(D){rt=requestAnimationFrame(Et);const k=Lt?Math.min(.25,(D-Lt)/1e3):0;if(Lt=D,!y.value||!ut||R.value!=="sim")return;let q=k*Z.value,gt=0;for(;q>0;){const Tt=Math.min(1,q);ut.step(Tt),q-=Tt;for(const bt of ut.transfers){if(gt>=40)break;A==null||A.spawnParticle(bt.from,bt.to),gt+=1}}xt+=k,xt>=.25&&(xt=0,ee())}function Mt(){const D=y.value;Nt(),y.value=D}gn(Z,D=>h({speed:D})),gn(y,D=>A==null?void 0:A.setSimRunning(D));const Zt={busy:"busy",blocked:"blocked",starved:"starved",down:"down"},pe=we(()=>L.value.map(D=>x.value.get(D)).filter(Boolean).map(D=>{var Tt,bt,Ft,ne;const k={id:D.id,number:st(N.value.get(D.id)),name:D.name||((Tt=B(D.machine_id))==null?void 0:Tt.name)||D.id};if(R.value==="sim"){const Kt=Ot(D.id),Me=(Ft=(bt=Pt.value)==null?void 0:bt.stations)==null?void 0:Ft[D.id],St=(Kt==null?void 0:Kt.role)==="station"?Zt[Kt.state]:null;return k.color=St?ui[St]:Sc,k.state=St?ot(`hologram.sim.${St}`):ot("hologram.cards.outOfFlow"),k.alert=((ne=P.value)==null?void 0:ne.bottleneck)===D.id,k.meta=Me&&(Kt==null?void 0:Kt.role)==="station"?ot("hologram.cards.simMeta",{cycle:Cr(Me.cycle_s),busy:Rt(Kt.busy),queue:Kt.queue}):"",k}const q=fe(D);k.color=(q==null?void 0:q.color)||Sc,k.state=(q==null?void 0:q.nameStatus)||ot("hologram.noLiveData"),k.alert=Number(q==null?void 0:q.typeEvent)===3;const gt=he(q);return k.meta=gt?`${gt.value} · ${gt.name}`:q!=null&&q.date?ot("hologram.cards.since",{time:Bt(q.date)}):"",k})),be=D=>({color:D,background:`color-mix(in srgb, ${D} 14%, transparent)`,borderColor:`color-mix(in srgb, ${D} 40%, transparent)`});function te(D){E.value=D,A==null||A.select(D),A==null||A.focus(D)}function Le(){E.value=null,A==null||A.select(null)}async function an(){var D;p.value=!0;try{const[k,q,gt]=await Promise.all([r(un.hologram,"/?limit=200"),r(un.listServers,"/"),r(un.listLines,"/").catch(()=>({data:[]}))]);c.value=a(k.data),u.value=a(q.data),m.value=a(gt.data),c.value.some(Tt=>Tt.id===f.value)||(f.value=((D=c.value[0])==null?void 0:D.id)||null)}catch(k){o("error",k.message)}finally{p.value=!1}}async function ls(D){if(!D){g.value=null,_t.stop();return}try{const k=await r(un.hologram,`/${D}/`);await cs(k.data,!0),h({id:D})}catch(k){o("error",`${ot("hologram.loadError")}: ${k.message}`)}}async function cs(D,k){var Tt,bt;const q=((Tt=g.value)==null?void 0:Tt.server)!==D.server;g.value=D;const gt=c.value.findIndex(Ft=>Ft.id===D.id);gt>=0&&c.value.splice(gt,1,{...c.value[gt],...D}),E.value=null,w.value=((bt=D.settings)==null?void 0:bt.labels)!==!1,await Gs(),!A&&W.value&&(A=new y_(W.value,{onSelect:Ft=>E.value=Ft})),A==null||A.setScene(D.scene,D.settings||{}),A==null||A.setNumbers(N.value),Pt.value=Mc(D.scene),y.value=!1,Nt(),(k||q)&&(mt=!1,_t.start(D.server).catch(Ft=>o("error",Ft.message)),bn(D.server)),yi()}async function bn(D){try{const k=await r(un.listMachines,"/");M.value=a(k.data).filter(q=>Number(q.server)===Number(D))}catch{M.value=[]}}function yi(){A&&(A.setMode(R.value),R.value==="live"?(y.value=!1,A.applyLive(_t.live)):ee())}let hs=!1;gn(f,D=>{hs&&ls(D)}),gn(R,D=>{h({mode:D}),yi()}),gn(w,D=>A==null?void 0:A.setLabelsVisible(D)),gn(Y,async D=>{h({cards:D}),await Gs(),v(),requestAnimationFrame(()=>us())}),gn(E,D=>A==null?void 0:A.select(D));function us(){var D,k;A==null||A.applyCamera((k=(D=g.value)==null?void 0:D.settings)==null?void 0:k.camera,S.value.floor,!0)}function Si(){A==null||A.topView()}const ks=()=>A==null?void 0:A.zoom(.7),Ei=()=>A==null?void 0:A.zoom(1.4),ti=ue(!1),bi=ue(!1),ds=ue(!1),Hr=()=>A==null?void 0:A.getCamera();function Hs(D){cs(D,!1)}const b=ue(!1);let V=!1;const J=()=>document.fullscreenElement||document.webkitFullscreenElement||null;function tt(){var q;if(b.value){b.value=!1,J()&&((q=document.exitFullscreen||document.webkitExitFullscreen)==null||q.call(document));return}b.value=!0;const D=document.documentElement,k=D.requestFullscreen||D.webkitRequestFullscreen;try{const gt=k==null?void 0:k.call(D);gt&&typeof gt.catch=="function"&&gt.catch(()=>{})}catch{}}gn(b,()=>Gs(v));function G(){J()?V=!0:V&&(V=!1,b.value=!1)}function ft(D){D.key==="Escape"&&b.value&&!J()&&(b.value=!1)}return bh(async()=>{rt=requestAnimationFrame(Et),$t=setInterval(()=>Gt.value=Date.now(),1e3),document.addEventListener("fullscreenchange",G),document.addEventListener("webkitfullscreenchange",G),document.addEventListener("keydown",ft),window.addEventListener("resize",v),await an(),hs=!0,f.value&&await ls(f.value)}),wh(()=>{var D;cancelAnimationFrame(rt),clearInterval($t),document.removeEventListener("fullscreenchange",G),document.removeEventListener("webkitfullscreenchange",G),document.removeEventListener("keydown",ft),window.removeEventListener("resize",v),Q==null||Q.disconnect(),b.value&&J()&&((D=document.exitFullscreen||document.webkitExitFullscreen)==null||D.call(document)),O&&cancelAnimationFrame(O),_t.stop(),A==null||A.dispose(),A=null}),(D,k)=>(qt(),jt("div",{class:ei(["hologram-root",{"is-fullscreen":b.value}])},[Qt(it(Rh),null,{content:wn(()=>{var q,gt,Tt,bt,Ft,ne,Kt,Me;return[p.value?(qt(),jt("div",C_,[Qt(it(Qo),{height:"2.5rem"}),Qt(it(Qo),{height:"28rem"})])):c.value.length?(qt(),jt(Be,{key:2},[ht("div",{ref_key:"toolbarEl",ref:U,class:"hologram-toolbar"},[Qt(it(Th),{modelValue:f.value,"onUpdate:modelValue":k[0]||(k[0]=St=>f.value=St),options:_.value,optionLabel:"label",optionValue:"value",placeholder:it(ot)("hologram.select"),size:"small",class:"hologram-select"},null,8,["modelValue","options","placeholder"]),Qt(it(Xr),{modelValue:R.value,"onUpdate:modelValue":k[1]||(k[1]=St=>R.value=St),options:$.value,optionLabel:"label",optionValue:"value",allowEmpty:!1,size:"small"},null,8,["modelValue","options"]),g.value?(qt(),jt("span",{key:0,class:"hologram-scope",title:it(ot)("hologram.extendHint")},[k[16]||(k[16]=ht("i",{class:"pi pi-th-large","aria-hidden":"true"},null,-1)),De(pt(lt.value),1)],8,U_)):Pe("",!0),k[17]||(k[17]=ht("span",{class:"hologram-toolbar__spacer"},null,-1)),Qt(it(Xr),{modelValue:Y.value,"onUpdate:modelValue":k[2]||(k[2]=St=>Y.value=St),options:z.value,optionLabel:"label",optionValue:"value",allowEmpty:!1,size:"small",title:it(ot)("hologram.layout.title"),"aria-label":it(ot)("hologram.layout.title")},{option:wn(({option:St})=>[ht("i",{class:ei(St.icon),title:St.label,"aria-hidden":"true"},null,10,N_),ht("span",F_,pt(St.label),1)]),_:1},8,["modelValue","options","title","aria-label"]),Qt(it(Ah),{modelValue:w.value,"onUpdate:modelValue":k[3]||(k[3]=St=>w.value=St),onLabel:it(ot)("hologram.labels"),offLabel:it(ot)("hologram.labels"),onIcon:"pi pi-tag",offIcon:"pi pi-tag",size:"small"},null,8,["modelValue","onLabel","offLabel"]),Qt(it(_n),{label:b.value?it(ot)("hologram.exitFullscreen"):it(ot)("hologram.fullscreen"),icon:b.value?"pi pi-window-minimize":"pi pi-window-maximize",severity:"secondary",outlined:"",size:"small",onClick:tt},null,8,["label","icon"]),Qt(it(_n),{label:it(ot)("hologram.configure"),icon:"pi pi-cog",severity:"secondary",outlined:"",size:"small",disabled:!g.value,onClick:k[4]||(k[4]=St=>bi.value=!0)},null,8,["label","disabled"]),Qt(it(_n),{label:it(ot)("hologram.versions"),icon:"pi pi-history",severity:"secondary",outlined:"",size:"small",disabled:!g.value,onClick:k[5]||(k[5]=St=>ds.value=!0)},null,8,["label","disabled"])],512),ht("div",{ref_key:"stageEl",ref:I,class:ei(["hologram-stage",`is-${Y.value}`]),style:Tn(X.value?{height:`${X.value}px`}:null)},[ht("div",O_,[ht("div",{ref_key:"canvasHost",ref:W,class:"hologram-canvas"},null,512),R.value==="live"?(qt(),jt("div",B_,[ht("div",{class:ei(["hologram-kpi hologram-kpi--live",{"is-on":kt.value.connected&&kt.value.fresh,"is-wait":kt.value.connected&&!kt.value.fresh}])},[ht("span",z_,[k[18]||(k[18]=ht("span",{class:"hologram-live__dot"},null,-1)),De(pt(kt.value.connected?it(ot)("hologram.live"):it(ot)("hologram.liveConnecting")),1)]),ht("strong",k_,pt(kt.value.signals),1),ht("span",H_,[De(pt(it(ot)("hologram.kpi.signals")),1),kt.value.last!==null?(qt(),jt(Be,{key:0},[De(" · "+pt(it(ot)("hologram.liveLast",{s:kt.value.last})),1)],64)):Pe("",!0)])],2),ht("div",V_,[ht("span",G_,pt(it(ot)("hologram.kpi.working")),1),ht("strong",W_,[De(pt(Ut.value.working),1),ht("small",null," / "+pt(Ut.value.total),1)]),ht("span",X_,pt(it(ot)("hologram.kpi.machines")),1)]),ht("div",Y_,[ht("span",q_,pt(it(ot)("hologram.kpi.stopped")),1),ht("strong",{class:ei(["hologram-kpi__value",{"is-warn":Ut.value.stopped}])},pt(Ut.value.stopped),3),ht("span",$_,pt(it(ot)("hologram.kpi.stoppedHint")),1)]),ht("div",Z_,[ht("span",K_,pt(it(ot)("hologram.kpi.failures")),1),ht("strong",{class:ei(["hologram-kpi__value",{"is-bad":Ut.value.failure}])},pt(Ut.value.failure),3),ht("span",j_,pt(Ut.value.noData?it(ot)("hologram.kpi.noData",{n:Ut.value.noData}):it(ot)("hologram.kpi.failuresHint")),1)])])):At.value&&P.value?(qt(),jt("div",J_,[ht("div",Q_,[ht("span",tv,pt(it(ot)("hologram.sim.throughput")),1),ht("strong",ev,[De(pt(P.value.throughputPerHour.toFixed(1)),1),ht("small",null,pt(it(ot)("hologram.sim.perHour")),1)]),ht("span",nv,pt(it(ot)("hologram.sim.time"))+" "+pt(zt(P.value.time)),1)]),ht("div",iv,[ht("span",sv,pt(it(ot)("hologram.sim.finished")),1),ht("strong",rv,[De(pt(P.value.finished),1),ht("small",null,pt(it(ot)("hologram.sim.pcs")),1)]),ht("span",av,pt(it(ot)("hologram.sim.wip"))+" "+pt(P.value.wip),1)]),ht("div",ov,[ht("span",lv,pt(it(ot)("hologram.sim.bottleneck")),1),ht("strong",cv,pt(Ct.value),1),ht("span",hv,pt(it(ot)("hologram.kpi.bottleneckHint")),1)])])):Pe("",!0),ht("div",uv,[ht("button",{type:"button",title:it(ot)("hologram.zoomIn"),"aria-label":it(ot)("hologram.zoomIn"),onClick:ks},[...k[19]||(k[19]=[ht("i",{class:"pi pi-plus"},null,-1)])],8,dv),ht("button",{type:"button",title:it(ot)("hologram.zoomOut"),"aria-label":it(ot)("hologram.zoomOut"),onClick:Ei},[...k[20]||(k[20]=[ht("i",{class:"pi pi-minus"},null,-1)])],8,fv),ht("button",{type:"button",title:it(ot)("hologram.resetView"),"aria-label":it(ot)("hologram.resetView"),onClick:us},[...k[21]||(k[21]=[ht("i",{class:"pi pi-home"},null,-1)])],8,pv),ht("button",{type:"button",title:it(ot)("hologram.topView"),"aria-label":it(ot)("hologram.topView"),onClick:Si},[...k[22]||(k[22]=[ht("i",{class:"pi pi-map"},null,-1)])],8,mv)]),R.value==="sim"&&At.value?(qt(),jt("div",gv,[Qt(it(_n),{label:y.value?it(ot)("hologram.sim.pause"):it(ot)("hologram.sim.run"),icon:y.value?"pi pi-pause":"pi pi-play",severity:"primary",size:"small",onClick:wt},null,8,["label","icon"]),Qt(it(Xr),{modelValue:Z.value,"onUpdate:modelValue":k[6]||(k[6]=St=>Z.value=St),options:it(at),optionLabel:"label",optionValue:"value",allowEmpty:!1,size:"small",title:it(ot)("hologram.sim.speed")},null,8,["modelValue","options","title"]),Qt(it(_n),{icon:"pi pi-replay",severity:"secondary",outlined:"",size:"small",title:it(ot)("hologram.sim.reset"),"aria-label":it(ot)("hologram.sim.reset"),onClick:nt},null,8,["title","aria-label"]),Qt(it(_n),{label:it(ot)("hologram.sim.fastForward",{h:((q=Pt.value)==null?void 0:q.horizon_h)||8}),icon:"pi pi-forward",severity:"secondary",outlined:"",size:"small",onClick:ct},null,8,["label"]),Qt(it(_n),{label:it(ot)("hologram.sim.paramsOpen"),icon:"pi pi-sliders-h",severity:"secondary",outlined:"",size:"small",onClick:k[7]||(k[7]=St=>ti.value=!0)},null,8,["label"]),ht("span",_v,[(qt(!0),jt(Be,null,Vs(it(ui),(St,Dt)=>(qt(),jt("span",{key:Dt},[ht("span",{class:"hologram-dot",style:Tn({background:St})},null,4),De(pt(it(ot)(`hologram.sim.${Dt}`)),1)]))),128))])])):R.value==="sim"?(qt(),el(it(tl),{key:3,severity:"warn",size:"small",class:"hologram-simbar"},{default:wn(()=>[De(pt(it(ot)("hologram.sim.noFlows")),1)]),_:1})):Pe("",!0),C.value?(qt(),jt("aside",vv,[ht("div",xv,[N.value.get(C.value.id)?(qt(),jt("span",Mv,pt(st(N.value.get(C.value.id))),1)):Pe("",!0),ht("h4",null,pt(C.value.name||C.value.id),1),Qt(it(_n),{icon:"pi pi-times",text:"",rounded:"",size:"small",severity:"secondary","aria-label":it(ot)("hologram.close"),onClick:Le},null,8,["aria-label"])]),R.value==="live"&&C.value.machine_id?(qt(),jt("span",{key:0,class:"hologram-state",style:Tn(be(((gt=Wt.value)==null?void 0:gt.color)||"#94a3b8"))},[ht("span",{class:"hologram-dot",style:Tn({background:((Tt=Wt.value)==null?void 0:Tt.color)||"#94a3b8"})},null,4),De(pt(((bt=Wt.value)==null?void 0:bt.nameStatus)||it(ot)("hologram.noLiveData")),1)],4)):Pe("",!0),R.value==="sim"&&((Ft=Ot(C.value.id))==null?void 0:Ft.role)==="station"?(qt(),jt("span",{key:1,class:"hologram-state",style:Tn(be(it(ui)[Ot(C.value.id).state]))},[ht("span",{class:"hologram-dot",style:Tn({background:it(ui)[Ot(C.value.id).state]})},null,4),De(pt(it(ot)(`hologram.sim.${Ot(C.value.id).state}`)),1)],4)):Pe("",!0),ht("dl",yv,[ht("dt",null,pt(it(ot)("hologram.kind")),1),ht("dd",null,pt(j(C.value.kind)),1),C.value.machine_id?(qt(),jt(Be,{key:0},[ht("dt",null,pt(it(ot)("hologram.machine")),1),ht("dd",null,pt(((ne=B(C.value.machine_id))==null?void 0:ne.name)||`#${C.value.machine_id}`),1),ht("dt",null,pt(it(ot)("hologram.line")),1),ht("dd",null,pt(K(C.value.line_id||((Kt=B(C.value.machine_id))==null?void 0:Kt.line))||"–"),1)],64)):(qt(),jt(Be,{key:1},[ht("dt",null,pt(it(ot)("hologram.machine")),1),ht("dd",null,pt(it(ot)("hologram.noMachine")),1)],64)),R.value==="live"&&((Me=Wt.value)!=null&&Me.date)?(qt(),jt(Be,{key:2},[ht("dt",null,pt(it(ot)("hologram.since")),1),ht("dd",null,pt(Wt.value.date),1)],64)):Pe("",!0),C.value.operators?(qt(),jt(Be,{key:3},[ht("dt",null,pt(it(ot)("hologram.operators")),1),ht("dd",null,pt(C.value.operators),1)],64)):Pe("",!0),R.value==="sim"&&Ot(C.value.id)?(qt(),jt(Be,{key:4},[ht("dt",null,pt(it(ot)("hologram.sim.utilization")),1),ht("dd",null,pt(Rt(Ot(C.value.id).busy)),1),ht("dt",null,pt(it(ot)("hologram.sim.finished")),1),ht("dd",null,pt(Ot(C.value.id).done)+" "+pt(it(ot)("hologram.sim.pcs")),1),ht("dt",null,pt(it(ot)("hologram.sim.queue")),1),ht("dd",null,pt(Ot(C.value.id).queue)+" / "+pt(Ot(C.value.id).queueCap),1)],64)):Pe("",!0)]),R.value==="live"&&Wt.value&&Wt.value.substatuses.length?(qt(),jt(Be,{key:2},[ht("h5",Sv,pt(it(ot)("hologram.signals")),1),ht("ul",Ev,[(qt(!0),jt(Be,null,Vs(Wt.value.substatuses,St=>(qt(),jt("li",{key:St.tag},[ht("span",null,pt(St.target),1),ht("strong",null,pt(it(Cr)(St.value))+" "+pt(St.unit),1)]))),128))])],64)):Pe("",!0),R.value==="sim"&&It.value&&It.value.role==="station"?(qt(),jt(Be,{key:3},[ht("h5",bv,pt(it(ot)("hologram.sim.params")),1),ht("div",wv,[ht("label",{for:`panel-cycle-${It.value.id}`},pt(it(ot)("hologram.sim.cycle")),9,Tv),Qt(it(On),{modelValue:It.value.cycle_s,"onUpdate:modelValue":[k[8]||(k[8]=St=>It.value.cycle_s=St),Mt],inputId:`panel-cycle-${It.value.id}`,size:"small",min:.1,maxFractionDigits:1,useGrouping:!1,fluid:""},null,8,["modelValue","inputId"]),ht("label",{for:`panel-cap-${It.value.id}`},pt(it(ot)("hologram.sim.capacity")),9,Av),Qt(it(On),{modelValue:It.value.capacity,"onUpdate:modelValue":[k[9]||(k[9]=St=>It.value.capacity=St),Mt],inputId:`panel-cap-${It.value.id}`,size:"small",min:1,max:100,useGrouping:!1,fluid:""},null,8,["modelValue","inputId"])])],64)):Pe("",!0)])):R.value==="live"?(qt(),jt("div",Rv,pt(it(ot)("hologram.noSelection")),1)):Pe("",!0)]),pe.value.length&&Y.value!=="none"?(qt(),jt("div",{key:0,class:"hologram-cards",role:"list","aria-label":it(ot)("hologram.layout.title")},[(qt(!0),jt(Be,null,Vs(pe.value,St=>(qt(),jt("button",{key:St.id,type:"button",role:"listitem",class:ei(["hologram-mcard",{"is-selected":St.id===E.value,"is-alert":St.alert}]),style:Tn({"--state":St.color}),onClick:Dt=>te(St.id)},[ht("span",Lv,[ht("span",Dv,pt(St.number),1),ht("span",{class:"hologram-mcard__state",style:Tn(be(St.color))},pt(St.state),5)]),ht("span",Iv,pt(St.name),1),ht("span",Uv,pt(St.meta),1)],14,Pv))),128))],8,Cv)):Pe("",!0)],6)],64)):(qt(),jt("div",P_,[k[15]||(k[15]=ht("i",{class:"pi pi-box hologram-empty__icon","aria-hidden":"true"},null,-1)),ht("h3",L_,pt(it(ot)("hologram.mcpOnlyTitle")),1),ht("p",D_,pt(it(ot)("hologram.mcpOnlyText")),1),Qt(it(tl),{severity:"info",size:"small",class:"mb-3"},{default:wn(()=>[De(pt(it(ot)("hologram.mcpModelHint")),1)]),_:1}),ht("ol",I_,[ht("li",null,pt(it(ot)("hologram.mcpStep1")),1),ht("li",null,pt(it(ot)("hologram.mcpStep2")),1),ht("li",null,pt(it(ot)("hologram.mcpStep3")),1)]),Qt(Lh,{holograms:c.value},null,8,["holograms"])]))]}),_:1}),Qt(it(Ch),{visible:ti.value,"onUpdate:visible":k[12]||(k[12]=q=>ti.value=q),modal:"",header:it(ot)("hologram.sim.params"),style:{width:"60rem",maxWidth:"95vw"}},{footer:wn(()=>[Qt(it(_n),{label:it(ot)("hologram.sim.restore"),icon:"pi pi-undo",severity:"secondary",outlined:"",size:"small",onClick:H},null,8,["label"]),Qt(it(_n),{label:it(ot)("hologram.close"),icon:"pi pi-check",severity:"primary",size:"small",onClick:k[11]||(k[11]=q=>ti.value=!1)},null,8,["label"])]),default:wn(()=>[ht("p",Nv,pt(it(ot)("hologram.sim.hint")),1),Pt.value?(qt(),jt("div",Fv,[ht("label",Ov,pt(it(ot)("hologram.sim.arrival")),1),Qt(it(On),{modelValue:Pt.value.arrival_s,"onUpdate:modelValue":[k[10]||(k[10]=q=>Pt.value.arrival_s=q),Mt],inputId:"hologram-arrival",size:"small",min:.1,maxFractionDigits:1,useGrouping:!1,placeholder:it(ot)("hologram.sim.arrivalHint")},null,8,["modelValue","placeholder"])])):Pe("",!0),ht("ul",Bv,[(qt(!0),jt(Be,null,Vs(Jt.value,q=>{var gt,Tt,bt;return qt(),jt("li",{key:q.id},[ht("div",zv,[ht("span",null,[ht("span",{class:"hologram-dot",style:Tn({background:q.role==="station"&&it(ui)[(gt=Ot(q.id))==null?void 0:gt.state]||"#94a3b8"})},null,4),De(pt(q.name),1)]),ht("small",kv,[q.role==="station"?(qt(),jt(Be,{key:0},[De(pt(it(ot)("hologram.sim.utilization"))+" "+pt(Rt((Tt=Ot(q.id))==null?void 0:Tt.busy)),1)],64)):(qt(),jt(Be,{key:1},[De(pt(((bt=Ot(q.id))==null?void 0:bt.done)||0)+" "+pt(it(ot)("hologram.sim.pcs")),1)],64))])]),q.role==="station"?(qt(),jt("div",Hv,[ht("label",{for:`sim-cycle-${q.id}`},pt(it(ot)("hologram.sim.cycle")),9,Vv),ht("label",{for:`sim-cap-${q.id}`},pt(it(ot)("hologram.sim.capacity")),9,Gv),ht("label",{for:`sim-mtbf-${q.id}`},pt(it(ot)("hologram.sim.mtbf")),9,Wv),ht("label",{for:`sim-stop-${q.id}`},pt(it(ot)("hologram.sim.stop")),9,Xv),Qt(it(On),{modelValue:q.cycle_s,"onUpdate:modelValue":[Ft=>q.cycle_s=Ft,Mt],inputId:`sim-cycle-${q.id}`,size:"small",min:.1,maxFractionDigits:1,useGrouping:!1,fluid:""},null,8,["modelValue","onUpdate:modelValue","inputId"]),Qt(it(On),{modelValue:q.capacity,"onUpdate:modelValue":[Ft=>q.capacity=Ft,Mt],inputId:`sim-cap-${q.id}`,size:"small",min:1,max:100,useGrouping:!1,fluid:""},null,8,["modelValue","onUpdate:modelValue","inputId"]),Qt(it(On),{modelValue:q.mtbf_s,"onUpdate:modelValue":[Ft=>q.mtbf_s=Ft,Mt],inputId:`sim-mtbf-${q.id}`,size:"small",min:0,useGrouping:!1,fluid:""},null,8,["modelValue","onUpdate:modelValue","inputId"]),Qt(it(On),{modelValue:q.stop_s,"onUpdate:modelValue":[Ft=>q.stop_s=Ft,Mt],inputId:`sim-stop-${q.id}`,size:"small",min:0,useGrouping:!1,fluid:""},null,8,["modelValue","onUpdate:modelValue","inputId"])])):Pe("",!0)])}),128))]),ht("h5",Yv,pt(it(ot)("hologram.sim.buffers")),1),Pt.value?(qt(),el(it(Ph),{key:1,value:Pt.value.flows,size:"small",scrollable:"",scrollHeight:"16rem"},{default:wn(()=>[Qt(it(nl),{header:it(ot)("hologram.sim.station")},{body:wn(({data:q})=>{var gt,Tt;return[De(pt((gt=Pt.value.stations[q.from])==null?void 0:gt.name)+" → "+pt((Tt=Pt.value.stations[q.to])==null?void 0:Tt.name),1)]}),_:1},8,["header"]),Qt(it(nl),{header:it(ot)("hologram.sim.buffer"),style:{width:"9rem"}},{body:wn(({data:q})=>[Qt(it(On),{modelValue:q.buffer,"onUpdate:modelValue":[gt=>q.buffer=gt,Mt],size:"small",min:0,useGrouping:!1,fluid:""},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["header"])]),_:1},8,["value"])):Pe("",!0)]),_:1},8,["visible","header"]),Qt(Dh,{visible:bi.value,"onUpdate:visible":k[13]||(k[13]=q=>bi.value=q),hologram:g.value,machines:M.value,currentCamera:Hr,onSaved:Hs},null,8,["visible","hologram","machines"]),Qt(Ih,{visible:ds.value,"onUpdate:visible":k[14]||(k[14]=q=>ds.value=q),hologram:g.value,onRestored:Hs},null,8,["visible","hologram"])],2))}},$v=Sh(qv,[["__scopeId","data-v-bc41144c"]]),nx={__name:"Hologram",setup(i){return(t,e)=>(qt(),jt("div",null,[Qt($v)]))}};export{nx as default};
