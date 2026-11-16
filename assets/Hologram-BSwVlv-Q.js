import{aY as gl,aq as le,aC as Mn,aZ as _l,m as Gc,a_ as Oh,a$ as Bh,b0 as zh,_ as kh,ak as Hh,aB as Vh,al as ye,ax as _n,az as st,ar as Gh,as as Wh,e as Yt,o as Bt,h as te,w as vn,at as tt,c as ar,f as rt,t as dt,A as or,k as Ve,F as Ne,j as Se,g as Is,b as Xh,a as ha,E as Vn,d as Tn,i as xi,b1 as Yh,a9 as qh,x as Gn,ao as ei,B as $h,J as Kh,ay as lr}from"./index-9e883pGU.js";import{s as vl}from"./index-C5NT2Cr_.js";import{s as Zh}from"./index-D5IOzNQC.js";import{s as jh}from"./index-DCW9tUCr.js";import{C as Jh,a as Qh,_ as tu}from"./ComponentHologramPromptBuilder-DCrhmAzB.js";import"./index-37Gw6fir.js";import"./index-WXLZ3IRG.js";import"./index-C2B-Ib_a.js";var Vc;const ua=(Bh||((Vc=zh)==null?void 0:Vc.get)||(()=>null))("spBv1.0"),Wi=i=>Array.isArray(i)?i:Array.isArray(i==null?void 0:i.results)?i.results:Array.isArray(i==null?void 0:i.data)?i.data:[];function eu(i){const t=window.location.protocol==="https:"?"wss://":"ws://",e=String(i||"").trim().replace(/^https?:\/\//i,"").replace(/^wss?:\/\//i,"").replace(/^\/+/,"").replace(/\/+$/,"");if(!e)return"";const n=`${t}${e}`;return/\/mqtt$/i.test(n)?n:`${n}/mqtt`}function nu(i,t){const e=i.survey_low,n=i.survey_high;if(e==null&&n==null)return null;const s=parseFloat((t??"").toString());return!(Number.isNaN(s)||e!=null&&s<Number(e)||n!=null&&s>=Number(n))}function iu({axios:i,apiHost:t,dataEnc:e,onError:n,onConnect:s,onReconnect:r,onSignal:a}={}){const o=gl({}),l=le(!1),h=gl({messages:0,signals:0,lastAt:0}),d=le([]);let f=null,c=[],u=[];const m=(J,x="",b="get",Y=null)=>i(Gc(t,J,x,e(),b,Y)),y=J=>{var x;return((x=c.find(b=>Number(b.id)===Number(J)))==null?void 0:x.name)||""},p=J=>{var x;return((x=u.find(b=>Number(b.id)===Number(J)))==null?void 0:x.name)||""};function g(J){const x=String(J);return o[x]||(o[x]={color:null,nameStatus:"",typeEvent:null,date:"",updatedAt:0,substatuses:[],signals:{}}),o[x]}function A(J,x){var H;const b=(H=J.profil)==null?void 0:H[0];if(!b)return;const Y=g(J.machine);Y.color=b.colorBackground||Y.color,Y.nameStatus=b.nameStatus||"",Y.typeEvent=b.typeEvent??null,Y.date=x}function E(J,x){var $;const b=(($=J.profil)==null?void 0:$[0])||{},Y=g(J.machine),H={tag:J.tag,target:y(b.aliasValue)||J.tag,value:x,unit:p(b.unitValue)},U=Y.substatuses.findIndex(_=>_.tag===J.tag);U>=0?Y.substatuses.splice(U,1,H):Y.substatuses.push(H)}function w(J,x,b,{lastEvent:Y=!1,machine:H=null}={}){return d.value.filter(U=>!(U.tag!==J||H&&Number(U.machine)!==Number(H)||!Y&&U.topic!==x||Y&&x&&U.topic&&U.topic!==x)).map(U=>{var v,L;const $=(L=(v=U.profil)==null?void 0:v[0])==null?void 0:L.main,_=nu(U,b);let M=!1;return $===1?_!==null?M=_:M=(U.value??"").toString().toLowerCase()===(b??"").toString().toLowerCase()||U.value==="":$===2&&(M=U.value===""||U.value==null),M?U:null}).filter(Boolean)}function q(J,x,b,Y,H){const U=w(J,x,b,H),$=U.filter(v=>{var L,D;return((D=(L=v.profil)==null?void 0:L[0])==null?void 0:D.main)===1&&v.value!==""}),_=U.filter(v=>{var L,D;return((D=(L=v.profil)==null?void 0:L[0])==null?void 0:D.main)===1&&v.value===""});($.length?$:_).slice(0,1).forEach(v=>A(v,Y)),U.filter(v=>{var L,D;return((D=(L=v.profil)==null?void 0:L[0])==null?void 0:D.main)===2}).forEach(v=>E(v,b));const M=new Set;if(U.forEach(v=>{const L=g(v.machine);L.signals[J]=b,M.add(v.machine)}),!(H!=null&&H.lastEvent)&&M.size){const v=Date.now();h.signals+=1,h.lastAt=v,M.forEach(L=>{g(L).updatedAt=v,a&&a(L,J,b)})}}function N(){if(f)try{f.end(!0)}catch{}f=null,l.value=!1}async function R(J){var L,D;if(N(),Object.keys(o).forEach(I=>delete o[I]),h.messages=0,h.signals=0,h.lastAt=0,!J)return;const x=(I,K)=>I.catch(nt=>(n&&n(nt.message),{data:K})),[b,Y,H,U,$]=await Promise.all([x(m(Mn.settings,""),{results:[]}),x(m(Mn.statusesProfilesList,"/"),[]),x(m(Mn.machines,`/?server=${J}&limit=1000`),[]),m(Mn.listAliases,"/").catch(()=>({data:[]})),m(Mn.listUnits,"/").catch(()=>({data:[]}))]);c=Wi(U.data),u=Wi($.data);const _=Wi(Y.data),M=[];Wi(H.data).forEach(I=>{(I.machine_status||[]).forEach(K=>{var P,V;const nt=Array.isArray(K.profil)?(V=(P=K.profil)==null?void 0:P[0])==null?void 0:V.id:K.profil;M.push({...K,machine:K.machine??I.id,profil:_.filter(et=>Number(et.id)===Number(nt))})})}),d.value=M;try{const I=await m(Mn.events,"/last/","post",{server:J,line:0});Wi(I.data).forEach(K=>{q(K.tag,K.topic,K.value,_l(K.timestamp_add),{lastEvent:!0,machine:K.machine})})}catch(I){n&&n(I.message)}let v={};try{v=JSON.parse(((D=(L=Wi(b.data))==null?void 0:L[0])==null?void 0:D.data)||"{}")}catch{v={}}k(v)}function k(J){const x=eu(J.adress);if(!x)return;let b;try{b=new URL(x)}catch{return}const Y={clientId:(J.nameClient||"omnimes-hologram")+Math.floor(Math.random()*1e7),reconnectPeriod:Number(J.reconnectPeriod)||1e3,username:J.login,password:J.password};b.protocol!=="wss:"&&!b.port&&J.port&&(Y.port=Number(J.port)||8083),f=Oh.connect(x,Y),f.on("connect",()=>{l.value=!0,f.subscribe(J.topic||"#",{qos:Number(J.qos)||0}),s&&s()}),f.on("reconnect",()=>{l.value=!1,r&&r()}),f.on("message",(H,U)=>{let $=null;try{$=ua&&typeof ua.decodePayload=="function"?ua.decodePayload(U):null}catch{$=null}if(!$||!Array.isArray($.metrics))return;h.messages+=1;const _=[...$.metrics];$.metrics.forEach(M=>{var v;(M==null?void 0:M.type)==="DataSet"&&((v=M.value)!=null&&v.rows)&&M.name&&M.value.rows.forEach((L,D)=>{L&&_.push({name:`${M.name}/${D+1}`,value:L[0],timestamp:$.timestamp})})}),_.forEach(M=>{var L,D;if((M==null?void 0:M.name)===void 0||(M==null?void 0:M.type)==="DataSet")return;const v=((D=(L=M.value)==null?void 0:L.toString)==null?void 0:D.call(L))??M.value;q(M.name,H,v,_l(M.timestamp||$.timestamp))})})}return{live:o,connected:l,activity:h,statuses:d,start:R,stop:N}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qo="169",vs={ROTATE:0,DOLLY:1,PAN:2},ps={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},su=0,xl=1,ru=2,Wc=1,Xc=2,Zn=3,pi=0,nn=1,Pn=2,di=0,Ii=1,Kr=2,yl=3,Ml=4,au=5,Ai=100,ou=101,lu=102,cu=103,hu=104,uu=200,du=201,fu=202,pu=203,to=204,eo=205,mu=206,gu=207,_u=208,vu=209,xu=210,yu=211,Mu=212,Su=213,bu=214,no=0,io=1,so=2,Ms=3,ro=4,ao=5,oo=6,lo=7,Yc=0,Eu=1,wu=2,fi=0,Tu=1,Au=2,Ru=3,qc=4,Cu=5,Pu=6,Lu=7,$c=300,Ss=301,bs=302,co=303,ho=304,ia=306,mi=1e3,Li=1001,uo=1002,an=1003,Du=1004,cr=1005,Sn=1006,da=1007,Di=1008,Jn=1009,Kc=1010,Zc=1011,Js=1012,$o=1013,Ui=1014,On=1015,ir=1016,Ko=1017,Zo=1018,Es=1020,jc=35902,Jc=1021,Qc=1022,Dn=1023,th=1024,eh=1025,xs=1026,ws=1027,jo=1028,Jo=1029,nh=1030,Qo=1031,tl=1033,Vr=33776,Gr=33777,Wr=33778,Xr=33779,fo=35840,po=35841,mo=35842,go=35843,_o=36196,vo=37492,xo=37496,yo=37808,Mo=37809,So=37810,bo=37811,Eo=37812,wo=37813,To=37814,Ao=37815,Ro=37816,Co=37817,Po=37818,Lo=37819,Do=37820,Io=37821,Yr=36492,Uo=36494,No=36495,ih=36283,Fo=36284,Oo=36285,Bo=36286,Iu=3200,Uu=3201,sh=0,Nu=1,ui="",$e="srgb",_i="srgb-linear",el="display-p3",sa="display-p3-linear",Zr="linear",Me="srgb",jr="rec709",Jr="p3",Xi=7680,Sl=519,Fu=512,Ou=513,Bu=514,rh=515,zu=516,ku=517,Hu=518,Vu=519,zo=35044,bl="300 es",jn=2e3,Qr=2001;class Oi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let El=1234567;const qs=Math.PI/180,Qs=180/Math.PI;function Bn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]).toLowerCase()}function Oe(i,t,e){return Math.max(t,Math.min(e,i))}function nl(i,t){return(i%t+t)%t}function Gu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Wu(i,t,e){return i!==t?(e-i)/(t-i):0}function $s(i,t,e){return(1-e)*i+e*t}function Xu(i,t,e,n){return $s(i,t,1-Math.exp(-e*n))}function Yu(i,t=1){return t-Math.abs(nl(i,t*2)-t)}function qu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function $u(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ku(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Zu(i,t){return i+Math.random()*(t-i)}function ju(i){return i*(.5-Math.random())}function Ju(i){i!==void 0&&(El=i);let t=El+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Qu(i){return i*qs}function td(i){return i*Qs}function ed(i){return(i&i-1)===0&&i!==0}function nd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function id(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function sd(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),h=r((t+n)/2),d=a((t+n)/2),f=r((t-n)/2),c=a((t-n)/2),u=r((n-t)/2),m=a((n-t)/2);switch(s){case"XYX":i.set(o*d,l*f,l*c,o*h);break;case"YZY":i.set(l*c,o*d,l*f,o*h);break;case"ZXZ":i.set(l*f,l*c,o*d,o*h);break;case"XZX":i.set(o*d,l*m,l*u,o*h);break;case"YXY":i.set(l*u,o*d,l*m,o*h);break;case"ZYZ":i.set(l*m,l*u,o*d,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ln(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function de(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Nn={DEG2RAD:qs,RAD2DEG:Qs,generateUUID:Bn,clamp:Oe,euclideanModulo:nl,mapLinear:Gu,inverseLerp:Wu,lerp:$s,damp:Xu,pingpong:Yu,smoothstep:qu,smootherstep:$u,randInt:Ku,randFloat:Zu,randFloatSpread:ju,seededRandom:Ju,degToRad:Qu,radToDeg:td,isPowerOfTwo:ed,ceilPowerOfTwo:nd,floorPowerOfTwo:id,setQuaternionFromProperEuler:sd,normalize:de,denormalize:Ln};class vt{constructor(t=0,e=0){vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qt{constructor(t,e,n,s,r,a,o,l,h){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,h)}set(t,e,n,s,r,a,o,l,h){const d=this.elements;return d[0]=t,d[1]=s,d[2]=o,d[3]=e,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],h=n[1],d=n[4],f=n[7],c=n[2],u=n[5],m=n[8],y=s[0],p=s[3],g=s[6],A=s[1],E=s[4],w=s[7],q=s[2],N=s[5],R=s[8];return r[0]=a*y+o*A+l*q,r[3]=a*p+o*E+l*N,r[6]=a*g+o*w+l*R,r[1]=h*y+d*A+f*q,r[4]=h*p+d*E+f*N,r[7]=h*g+d*w+f*R,r[2]=c*y+u*A+m*q,r[5]=c*p+u*E+m*N,r[8]=c*g+u*w+m*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],d=t[8];return e*a*d-e*o*h-n*r*d+n*o*l+s*r*h-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],d=t[8],f=d*a-o*h,c=o*l-d*r,u=h*r-a*l,m=e*f+n*c+s*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/m;return t[0]=f*y,t[1]=(s*h-d*n)*y,t[2]=(o*n-s*a)*y,t[3]=c*y,t[4]=(d*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=u*y,t[7]=(n*l-h*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*a+h*o)+a+t,-s*h,s*l,-s*(-h*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(fa.makeScale(t,e)),this}rotate(t){return this.premultiply(fa.makeRotation(-t)),this}translate(t,e){return this.premultiply(fa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const fa=new Qt;function ah(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ta(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rd(){const i=ta("canvas");return i.style.display="block",i}const wl={};function qr(i){i in wl||(wl[i]=!0,console.warn(i))}function ad(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function od(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ld(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Tl=new Qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Al=new Qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Us={[_i]:{transfer:Zr,primaries:jr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[$e]:{transfer:Me,primaries:jr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[sa]:{transfer:Zr,primaries:Jr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Al),fromReference:i=>i.applyMatrix3(Tl)},[el]:{transfer:Me,primaries:Jr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Al),fromReference:i=>i.applyMatrix3(Tl).convertLinearToSRGB()}},cd=new Set([_i,sa]),ce={enabled:!0,_workingColorSpace:_i,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!cd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Us[t].toReference,s=Us[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Us[i].primaries},getTransfer:function(i){return i===ui?Zr:Us[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Us[t].luminanceCoefficients)}};function ys(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function pa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Yi;class hd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Yi===void 0&&(Yi=ta("canvas")),Yi.width=t.width,Yi.height=t.height;const n=Yi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Yi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ta("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ys(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ys(e[n]/255)*255):e[n]=ys(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ud=0;class oh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=Bn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ma(s[a].image)):r.push(ma(s[a]))}else r=ma(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ma(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dd=0;class Ke extends Oi{constructor(t=Ke.DEFAULT_IMAGE,e=Ke.DEFAULT_MAPPING,n=Li,s=Li,r=Sn,a=Di,o=Dn,l=Jn,h=Ke.DEFAULT_ANISOTROPY,d=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=Bn(),this.name="",this.source=new oh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$c)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case mi:t.x=t.x-Math.floor(t.x);break;case Li:t.x=t.x<0?0:1;break;case uo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case mi:t.y=t.y-Math.floor(t.y);break;case Li:t.y=t.y<0?0:1;break;case uo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=$c;Ke.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,n=0,s=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,h=l[0],d=l[4],f=l[8],c=l[1],u=l[5],m=l[9],y=l[2],p=l[6],g=l[10];if(Math.abs(d-c)<.01&&Math.abs(f-y)<.01&&Math.abs(m-p)<.01){if(Math.abs(d+c)<.1&&Math.abs(f+y)<.1&&Math.abs(m+p)<.1&&Math.abs(h+u+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(h+1)/2,w=(u+1)/2,q=(g+1)/2,N=(d+c)/4,R=(f+y)/4,k=(m+p)/4;return E>w&&E>q?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=N/n,r=R/n):w>q?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=N/s,r=k/s):q<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(q),n=R/r,s=k/r),this.set(n,s,r,e),this}let A=Math.sqrt((p-m)*(p-m)+(f-y)*(f-y)+(c-d)*(c-d));return Math.abs(A)<.001&&(A=1),this.x=(p-m)/A,this.y=(f-y)/A,this.z=(c-d)/A,this.w=Math.acos((h+u+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fd extends Oi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ke(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new oh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ni extends fd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class lh extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class pd extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],h=n[s+1],d=n[s+2],f=n[s+3];const c=r[a+0],u=r[a+1],m=r[a+2],y=r[a+3];if(o===0){t[e+0]=l,t[e+1]=h,t[e+2]=d,t[e+3]=f;return}if(o===1){t[e+0]=c,t[e+1]=u,t[e+2]=m,t[e+3]=y;return}if(f!==y||l!==c||h!==u||d!==m){let p=1-o;const g=l*c+h*u+d*m+f*y,A=g>=0?1:-1,E=1-g*g;if(E>Number.EPSILON){const q=Math.sqrt(E),N=Math.atan2(q,g*A);p=Math.sin(p*N)/q,o=Math.sin(o*N)/q}const w=o*A;if(l=l*p+c*w,h=h*p+u*w,d=d*p+m*w,f=f*p+y*w,p===1-o){const q=1/Math.sqrt(l*l+h*h+d*d+f*f);l*=q,h*=q,d*=q,f*=q}}t[e]=l,t[e+1]=h,t[e+2]=d,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],h=n[s+2],d=n[s+3],f=r[a],c=r[a+1],u=r[a+2],m=r[a+3];return t[e]=o*m+d*f+l*u-h*c,t[e+1]=l*m+d*c+h*f-o*u,t[e+2]=h*m+d*u+o*c-l*f,t[e+3]=d*m-o*f-l*c-h*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,h=o(n/2),d=o(s/2),f=o(r/2),c=l(n/2),u=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=c*d*f+h*u*m,this._y=h*u*f-c*d*m,this._z=h*d*m+c*u*f,this._w=h*d*f-c*u*m;break;case"YXZ":this._x=c*d*f+h*u*m,this._y=h*u*f-c*d*m,this._z=h*d*m-c*u*f,this._w=h*d*f+c*u*m;break;case"ZXY":this._x=c*d*f-h*u*m,this._y=h*u*f+c*d*m,this._z=h*d*m+c*u*f,this._w=h*d*f-c*u*m;break;case"ZYX":this._x=c*d*f-h*u*m,this._y=h*u*f+c*d*m,this._z=h*d*m-c*u*f,this._w=h*d*f+c*u*m;break;case"YZX":this._x=c*d*f+h*u*m,this._y=h*u*f+c*d*m,this._z=h*d*m-c*u*f,this._w=h*d*f-c*u*m;break;case"XZY":this._x=c*d*f-h*u*m,this._y=h*u*f-c*d*m,this._z=h*d*m+c*u*f,this._w=h*d*f+c*u*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],h=e[2],d=e[6],f=e[10],c=n+o+f;if(c>0){const u=.5/Math.sqrt(c+1);this._w=.25/u,this._x=(d-l)*u,this._y=(r-h)*u,this._z=(a-s)*u}else if(n>o&&n>f){const u=2*Math.sqrt(1+n-o-f);this._w=(d-l)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+h)/u}else if(o>f){const u=2*Math.sqrt(1+o-n-f);this._w=(r-h)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(l+d)/u}else{const u=2*Math.sqrt(1+f-n-o);this._w=(a-s)/u,this._x=(r+h)/u,this._y=(l+d)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,h=e._z,d=e._w;return this._x=n*d+a*o+s*h-r*l,this._y=s*d+a*l+r*o-n*h,this._z=r*d+a*h+n*l-s*o,this._w=a*d-n*o-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const u=1-e;return this._w=u*a+e*this._w,this._x=u*n+e*this._x,this._y=u*s+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}const h=Math.sqrt(l),d=Math.atan2(h,o),f=Math.sin((1-e)*d)/h,c=Math.sin(e*d)/h;return this._w=a*f+this._w*c,this._x=n*f+this._x*c,this._y=s*f+this._y*c,this._z=r*f+this._z*c,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,n=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Rl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Rl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,h=2*(a*s-o*n),d=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*h+a*f-o*d,this.y=n+l*d+o*h-r*f,this.z=s+l*f+r*d-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ga.copy(this).projectOnVector(t),this.sub(ga)}reflect(t){return this.sub(ga.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ga=new O,Rl=new Qn;class Bi{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,An):An.fromBufferAttribute(r,a),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hr.copy(n.boundingBox)),hr.applyMatrix4(t.matrixWorld),this.union(hr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ns),ur.subVectors(this.max,Ns),qi.subVectors(t.a,Ns),$i.subVectors(t.b,Ns),Ki.subVectors(t.c,Ns),ni.subVectors($i,qi),ii.subVectors(Ki,$i),yi.subVectors(qi,Ki);let e=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-yi.z,yi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,yi.z,0,-yi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-yi.y,yi.x,0];return!_a(e,qi,$i,Ki,ur)||(e=[1,0,0,0,1,0,0,0,1],!_a(e,qi,$i,Ki,ur))?!1:(dr.crossVectors(ni,ii),e=[dr.x,dr.y,dr.z],_a(e,qi,$i,Ki,ur))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Wn=[new O,new O,new O,new O,new O,new O,new O,new O],An=new O,hr=new Bi,qi=new O,$i=new O,Ki=new O,ni=new O,ii=new O,yi=new O,Ns=new O,ur=new O,dr=new O,Mi=new O;function _a(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Mi.fromArray(i,r);const o=s.x*Math.abs(Mi.x)+s.y*Math.abs(Mi.y)+s.z*Math.abs(Mi.z),l=t.dot(Mi),h=e.dot(Mi),d=n.dot(Mi);if(Math.max(-Math.max(l,h,d),Math.min(l,h,d))>o)return!1}return!0}const md=new Bi,Fs=new O,va=new O;class sr{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):md.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fs.subVectors(t,this.center);const e=Fs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Fs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(va.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fs.copy(t.center).add(va)),this.expandByPoint(Fs.copy(t.center).sub(va))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xn=new O,xa=new O,fr=new O,si=new O,ya=new O,pr=new O,Ma=new O;class il{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xn.copy(this.origin).addScaledVector(this.direction,e),Xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){xa.copy(t).add(e).multiplyScalar(.5),fr.copy(e).sub(t).normalize(),si.copy(this.origin).sub(xa);const r=t.distanceTo(e)*.5,a=-this.direction.dot(fr),o=si.dot(this.direction),l=-si.dot(fr),h=si.lengthSq(),d=Math.abs(1-a*a);let f,c,u,m;if(d>0)if(f=a*l-o,c=a*o-l,m=r*d,f>=0)if(c>=-m)if(c<=m){const y=1/d;f*=y,c*=y,u=f*(f+a*c+2*o)+c*(a*f+c+2*l)+h}else c=r,f=Math.max(0,-(a*c+o)),u=-f*f+c*(c+2*l)+h;else c=-r,f=Math.max(0,-(a*c+o)),u=-f*f+c*(c+2*l)+h;else c<=-m?(f=Math.max(0,-(-a*r+o)),c=f>0?-r:Math.min(Math.max(-r,-l),r),u=-f*f+c*(c+2*l)+h):c<=m?(f=0,c=Math.min(Math.max(-r,-l),r),u=c*(c+2*l)+h):(f=Math.max(0,-(a*r+o)),c=f>0?r:Math.min(Math.max(-r,-l),r),u=-f*f+c*(c+2*l)+h);else c=a>0?-r:r,f=Math.max(0,-(a*c+o)),u=-f*f+c*(c+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(xa).addScaledVector(fr,c),u}intersectSphere(t,e){Xn.subVectors(t.center,this.origin);const n=Xn.dot(this.direction),s=Xn.dot(Xn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const h=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,c=this.origin;return h>=0?(n=(t.min.x-c.x)*h,s=(t.max.x-c.x)*h):(n=(t.max.x-c.x)*h,s=(t.min.x-c.x)*h),d>=0?(r=(t.min.y-c.y)*d,a=(t.max.y-c.y)*d):(r=(t.max.y-c.y)*d,a=(t.min.y-c.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-c.z)*f,l=(t.max.z-c.z)*f):(o=(t.max.z-c.z)*f,l=(t.min.z-c.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Xn)!==null}intersectTriangle(t,e,n,s,r){ya.subVectors(e,t),pr.subVectors(n,t),Ma.crossVectors(ya,pr);let a=this.direction.dot(Ma),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;si.subVectors(this.origin,t);const l=o*this.direction.dot(pr.crossVectors(si,pr));if(l<0)return null;const h=o*this.direction.dot(ya.cross(si));if(h<0||l+h>a)return null;const d=-o*si.dot(Ma);return d<0?null:this.at(d/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,n,s,r,a,o,l,h,d,f,c,u,m,y,p){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,h,d,f,c,u,m,y,p)}set(t,e,n,s,r,a,o,l,h,d,f,c,u,m,y,p){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=h,g[6]=d,g[10]=f,g[14]=c,g[3]=u,g[7]=m,g[11]=y,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Zi.setFromMatrixColumn(t,0).length(),r=1/Zi.setFromMatrixColumn(t,1).length(),a=1/Zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),h=Math.sin(s),d=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const c=a*d,u=a*f,m=o*d,y=o*f;e[0]=l*d,e[4]=-l*f,e[8]=h,e[1]=u+m*h,e[5]=c-y*h,e[9]=-o*l,e[2]=y-c*h,e[6]=m+u*h,e[10]=a*l}else if(t.order==="YXZ"){const c=l*d,u=l*f,m=h*d,y=h*f;e[0]=c+y*o,e[4]=m*o-u,e[8]=a*h,e[1]=a*f,e[5]=a*d,e[9]=-o,e[2]=u*o-m,e[6]=y+c*o,e[10]=a*l}else if(t.order==="ZXY"){const c=l*d,u=l*f,m=h*d,y=h*f;e[0]=c-y*o,e[4]=-a*f,e[8]=m+u*o,e[1]=u+m*o,e[5]=a*d,e[9]=y-c*o,e[2]=-a*h,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const c=a*d,u=a*f,m=o*d,y=o*f;e[0]=l*d,e[4]=m*h-u,e[8]=c*h+y,e[1]=l*f,e[5]=y*h+c,e[9]=u*h-m,e[2]=-h,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const c=a*l,u=a*h,m=o*l,y=o*h;e[0]=l*d,e[4]=y-c*f,e[8]=m*f+u,e[1]=f,e[5]=a*d,e[9]=-o*d,e[2]=-h*d,e[6]=u*f+m,e[10]=c-y*f}else if(t.order==="XZY"){const c=a*l,u=a*h,m=o*l,y=o*h;e[0]=l*d,e[4]=-f,e[8]=h*d,e[1]=c*f+y,e[5]=a*d,e[9]=u*f-m,e[2]=m*f-u,e[6]=o*d,e[10]=y*f+c}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gd,t,_d)}lookAt(t,e,n){const s=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),ri.crossVectors(n,un),ri.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),ri.crossVectors(n,un)),ri.normalize(),mr.crossVectors(un,ri),s[0]=ri.x,s[4]=mr.x,s[8]=un.x,s[1]=ri.y,s[5]=mr.y,s[9]=un.y,s[2]=ri.z,s[6]=mr.z,s[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],h=n[12],d=n[1],f=n[5],c=n[9],u=n[13],m=n[2],y=n[6],p=n[10],g=n[14],A=n[3],E=n[7],w=n[11],q=n[15],N=s[0],R=s[4],k=s[8],J=s[12],x=s[1],b=s[5],Y=s[9],H=s[13],U=s[2],$=s[6],_=s[10],M=s[14],v=s[3],L=s[7],D=s[11],I=s[15];return r[0]=a*N+o*x+l*U+h*v,r[4]=a*R+o*b+l*$+h*L,r[8]=a*k+o*Y+l*_+h*D,r[12]=a*J+o*H+l*M+h*I,r[1]=d*N+f*x+c*U+u*v,r[5]=d*R+f*b+c*$+u*L,r[9]=d*k+f*Y+c*_+u*D,r[13]=d*J+f*H+c*M+u*I,r[2]=m*N+y*x+p*U+g*v,r[6]=m*R+y*b+p*$+g*L,r[10]=m*k+y*Y+p*_+g*D,r[14]=m*J+y*H+p*M+g*I,r[3]=A*N+E*x+w*U+q*v,r[7]=A*R+E*b+w*$+q*L,r[11]=A*k+E*Y+w*_+q*D,r[15]=A*J+E*H+w*M+q*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],h=t[13],d=t[2],f=t[6],c=t[10],u=t[14],m=t[3],y=t[7],p=t[11],g=t[15];return m*(+r*l*f-s*h*f-r*o*c+n*h*c+s*o*u-n*l*u)+y*(+e*l*u-e*h*c+r*a*c-s*a*u+s*h*d-r*l*d)+p*(+e*h*f-e*o*u-r*a*f+n*a*u+r*o*d-n*h*d)+g*(-s*o*d-e*l*f+e*o*c+s*a*f-n*a*c+n*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],d=t[8],f=t[9],c=t[10],u=t[11],m=t[12],y=t[13],p=t[14],g=t[15],A=f*p*h-y*c*h+y*l*u-o*p*u-f*l*g+o*c*g,E=m*c*h-d*p*h-m*l*u+a*p*u+d*l*g-a*c*g,w=d*y*h-m*f*h+m*o*u-a*y*u-d*o*g+a*f*g,q=m*f*l-d*y*l-m*o*c+a*y*c+d*o*p-a*f*p,N=e*A+n*E+s*w+r*q;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/N;return t[0]=A*R,t[1]=(y*c*r-f*p*r-y*s*u+n*p*u+f*s*g-n*c*g)*R,t[2]=(o*p*r-y*l*r+y*s*h-n*p*h-o*s*g+n*l*g)*R,t[3]=(f*l*r-o*c*r-f*s*h+n*c*h+o*s*u-n*l*u)*R,t[4]=E*R,t[5]=(d*p*r-m*c*r+m*s*u-e*p*u-d*s*g+e*c*g)*R,t[6]=(m*l*r-a*p*r-m*s*h+e*p*h+a*s*g-e*l*g)*R,t[7]=(a*c*r-d*l*r+d*s*h-e*c*h-a*s*u+e*l*u)*R,t[8]=w*R,t[9]=(m*f*r-d*y*r-m*n*u+e*y*u+d*n*g-e*f*g)*R,t[10]=(a*y*r-m*o*r+m*n*h-e*y*h-a*n*g+e*o*g)*R,t[11]=(d*o*r-a*f*r-d*n*h+e*f*h+a*n*u-e*o*u)*R,t[12]=q*R,t[13]=(d*y*s-m*f*s+m*n*c-e*y*c-d*n*p+e*f*p)*R,t[14]=(m*o*s-a*y*s-m*n*l+e*y*l+a*n*p-e*o*p)*R,t[15]=(a*f*s-d*o*s+d*n*l-e*f*l-a*n*c+e*o*c)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,h=r*a,d=r*o;return this.set(h*a+n,h*o-s*l,h*l+s*o,0,h*o+s*l,d*o+n,d*l-s*a,0,h*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,h=r+r,d=a+a,f=o+o,c=r*h,u=r*d,m=r*f,y=a*d,p=a*f,g=o*f,A=l*h,E=l*d,w=l*f,q=n.x,N=n.y,R=n.z;return s[0]=(1-(y+g))*q,s[1]=(u+w)*q,s[2]=(m-E)*q,s[3]=0,s[4]=(u-w)*N,s[5]=(1-(c+g))*N,s[6]=(p+A)*N,s[7]=0,s[8]=(m+E)*R,s[9]=(p-A)*R,s[10]=(1-(c+y))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Zi.set(s[0],s[1],s[2]).length();const a=Zi.set(s[4],s[5],s[6]).length(),o=Zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Rn.copy(this);const h=1/r,d=1/a,f=1/o;return Rn.elements[0]*=h,Rn.elements[1]*=h,Rn.elements[2]*=h,Rn.elements[4]*=d,Rn.elements[5]*=d,Rn.elements[6]*=d,Rn.elements[8]*=f,Rn.elements[9]*=f,Rn.elements[10]*=f,e.setFromRotationMatrix(Rn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=jn){const l=this.elements,h=2*r/(e-t),d=2*r/(n-s),f=(e+t)/(e-t),c=(n+s)/(n-s);let u,m;if(o===jn)u=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Qr)u=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=c,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=jn){const l=this.elements,h=1/(e-t),d=1/(n-s),f=1/(a-r),c=(e+t)*h,u=(n+s)*d;let m,y;if(o===jn)m=(a+r)*f,y=-2*f;else if(o===Qr)m=r*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-c,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=y,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Zi=new O,Rn=new ae,gd=new O(0,0,0),_d=new O(1,1,1),ri=new O,mr=new O,un=new O,Cl=new ae,Pl=new Qn;class wn{constructor(t=0,e=0,n=0,s=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],h=s[5],d=s[9],f=s[2],c=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(c,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Oe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(c,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(c,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Cl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Cl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Pl.setFromEuler(this),this.setFromQuaternion(Pl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class sl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vd=0;const Ll=new O,ji=new Qn,Yn=new ae,gr=new O,Os=new O,xd=new O,yd=new Qn,Dl=new O(1,0,0),Il=new O(0,1,0),Ul=new O(0,0,1),Nl={type:"added"},Md={type:"removed"},Ji={type:"childadded",child:null},Sa={type:"childremoved",child:null};class Be extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=Bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Be.DEFAULT_UP.clone();const t=new O,e=new wn,n=new Qn,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new Qt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=Be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.multiply(ji),this}rotateOnWorldAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.premultiply(ji),this}rotateX(t){return this.rotateOnAxis(Dl,t)}rotateY(t){return this.rotateOnAxis(Il,t)}rotateZ(t){return this.rotateOnAxis(Ul,t)}translateOnAxis(t,e){return Ll.copy(t).applyQuaternion(this.quaternion),this.position.add(Ll.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Dl,t)}translateY(t){return this.translateOnAxis(Il,t)}translateZ(t){return this.translateOnAxis(Ul,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?gr.copy(t):gr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Os,gr,this.up):Yn.lookAt(gr,Os,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),ji.setFromRotationMatrix(Yn),this.quaternion.premultiply(ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Nl),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Md),Sa.child=t,this.dispatchEvent(Sa),Sa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Nl),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,t,xd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,yd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let h=0,d=l.length;h<d;h++){const f=l[h];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),h=a(t.textures),d=a(t.images),f=a(t.shapes),c=a(t.skeletons),u=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),c.length>0&&(n.skeletons=c),u.length>0&&(n.animations=u),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const l=[];for(const h in o){const d=o[h];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Be.DEFAULT_UP=new O(0,1,0);Be.DEFAULT_MATRIX_AUTO_UPDATE=!0;Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new O,qn=new O,ba=new O,$n=new O,Qi=new O,ts=new O,Fl=new O,Ea=new O,wa=new O,Ta=new O,Aa=new ge,Ra=new ge,Ca=new ge;class bn{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Cn.subVectors(t,e),s.cross(Cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Cn.subVectors(s,e),qn.subVectors(n,e),ba.subVectors(t,e);const a=Cn.dot(Cn),o=Cn.dot(qn),l=Cn.dot(ba),h=qn.dot(qn),d=qn.dot(ba),f=a*h-o*o;if(f===0)return r.set(0,0,0),null;const c=1/f,u=(h*l-o*d)*c,m=(a*d-o*l)*c;return r.set(1-u-m,m,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$n.x),l.addScaledVector(a,$n.y),l.addScaledVector(o,$n.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Aa.setScalar(0),Ra.setScalar(0),Ca.setScalar(0),Aa.fromBufferAttribute(t,e),Ra.fromBufferAttribute(t,n),Ca.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Aa,r.x),a.addScaledVector(Ra,r.y),a.addScaledVector(Ca,r.z),a}static isFrontFacing(t,e,n,s){return Cn.subVectors(n,e),qn.subVectors(t,e),Cn.cross(qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Cn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),Cn.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return bn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return bn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return bn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return bn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Qi.subVectors(s,n),ts.subVectors(r,n),Ea.subVectors(t,n);const l=Qi.dot(Ea),h=ts.dot(Ea);if(l<=0&&h<=0)return e.copy(n);wa.subVectors(t,s);const d=Qi.dot(wa),f=ts.dot(wa);if(d>=0&&f<=d)return e.copy(s);const c=l*f-d*h;if(c<=0&&l>=0&&d<=0)return a=l/(l-d),e.copy(n).addScaledVector(Qi,a);Ta.subVectors(t,r);const u=Qi.dot(Ta),m=ts.dot(Ta);if(m>=0&&u<=m)return e.copy(r);const y=u*h-l*m;if(y<=0&&h>=0&&m<=0)return o=h/(h-m),e.copy(n).addScaledVector(ts,o);const p=d*m-u*f;if(p<=0&&f-d>=0&&u-m>=0)return Fl.subVectors(r,s),o=(f-d)/(f-d+(u-m)),e.copy(s).addScaledVector(Fl,o);const g=1/(p+y+c);return a=y*g,o=c*g,e.copy(n).addScaledVector(Qi,a).addScaledVector(ts,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ch={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},_r={h:0,s:0,l:0};function Pa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ce.workingColorSpace){if(t=nl(t,1),e=Oe(e,0,1),n=Oe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Pa(a,r,t+1/3),this.g=Pa(a,r,t),this.b=Pa(a,r,t-1/3)}return ce.toWorkingColorSpace(this,s),this}setStyle(t,e=$e){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){const n=ch[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this}copyLinearToSRGB(t){return this.r=pa(t.r),this.g=pa(t.g),this.b=pa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return ce.fromWorkingColorSpace(qe.copy(this),t),Math.round(Oe(qe.r*255,0,255))*65536+Math.round(Oe(qe.g*255,0,255))*256+Math.round(Oe(qe.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.fromWorkingColorSpace(qe.copy(this),e);const n=qe.r,s=qe.g,r=qe.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,h;const d=(o+a)/2;if(o===a)l=0,h=0;else{const f=a-o;switch(h=d<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=h,t.l=d,t}getRGB(t,e=ce.workingColorSpace){return ce.fromWorkingColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=$e){ce.fromWorkingColorSpace(qe.copy(this),t);const e=qe.r,n=qe.g,s=qe.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ai),this.setHSL(ai.h+t,ai.s+e,ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ai),t.getHSL(_r);const n=$s(ai.h,_r.h,e),s=$s(ai.s,_r.s,e),r=$s(ai.l,_r.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qe=new Kt;Kt.NAMES=ch;let Sd=0;class As extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=Bn(),this.name="",this.type="Material",this.blending=Ii,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=to,this.blendDst=eo,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(n.blending=this.blending),this.side!==pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==to&&(n.blendSrc=this.blendSrc),this.blendDst!==eo&&(n.blendDst=this.blendDst),this.blendEquation!==Ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class En extends As{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Re=new O,vr=new vt;class mn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=zo,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)vr.fromBufferAttribute(this,e),vr.applyMatrix3(t),this.setXY(e,vr.x,vr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ln(e,this.array)),e}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ln(e,this.array)),e}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ln(e,this.array)),e}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ln(e,this.array)),e}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array),r=de(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==zo&&(t.usage=this.usage),t}}class hh extends mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class uh extends mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ce extends mn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let bd=0;const xn=new ae,La=new Be,es=new O,dn=new Bi,Bs=new Bi,Fe=new O;class on extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=Bn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ah(t)?uh:hh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,n){return xn.makeTranslation(t,e,n),this.applyMatrix4(xn),this}scale(t,e,n){return xn.makeScale(t,e,n),this.applyMatrix4(xn),this}lookAt(t){return La.lookAt(t),La.updateMatrix(),this.applyMatrix4(La.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ce(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Bs.setFromBufferAttribute(o),this.morphTargetsRelative?(Fe.addVectors(dn.min,Bs.min),dn.expandByPoint(Fe),Fe.addVectors(dn.max,Bs.max),dn.expandByPoint(Fe)):(dn.expandByPoint(Bs.min),dn.expandByPoint(Bs.max))}dn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Fe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Fe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let h=0,d=o.count;h<d;h++)Fe.fromBufferAttribute(o,h),l&&(es.fromBufferAttribute(t,h),Fe.add(es)),s=Math.max(s,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let k=0;k<n.count;k++)o[k]=new O,l[k]=new O;const h=new O,d=new O,f=new O,c=new vt,u=new vt,m=new vt,y=new O,p=new O;function g(k,J,x){h.fromBufferAttribute(n,k),d.fromBufferAttribute(n,J),f.fromBufferAttribute(n,x),c.fromBufferAttribute(r,k),u.fromBufferAttribute(r,J),m.fromBufferAttribute(r,x),d.sub(h),f.sub(h),u.sub(c),m.sub(c);const b=1/(u.x*m.y-m.x*u.y);isFinite(b)&&(y.copy(d).multiplyScalar(m.y).addScaledVector(f,-u.y).multiplyScalar(b),p.copy(f).multiplyScalar(u.x).addScaledVector(d,-m.x).multiplyScalar(b),o[k].add(y),o[J].add(y),o[x].add(y),l[k].add(p),l[J].add(p),l[x].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let k=0,J=A.length;k<J;++k){const x=A[k],b=x.start,Y=x.count;for(let H=b,U=b+Y;H<U;H+=3)g(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const E=new O,w=new O,q=new O,N=new O;function R(k){q.fromBufferAttribute(s,k),N.copy(q);const J=o[k];E.copy(J),E.sub(q.multiplyScalar(q.dot(J))).normalize(),w.crossVectors(N,J);const b=w.dot(l[k])<0?-1:1;a.setXYZW(k,E.x,E.y,E.z,b)}for(let k=0,J=A.length;k<J;++k){const x=A[k],b=x.start,Y=x.count;for(let H=b,U=b+Y;H<U;H+=3)R(t.getX(H+0)),R(t.getX(H+1)),R(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let c=0,u=n.count;c<u;c++)n.setXYZ(c,0,0,0);const s=new O,r=new O,a=new O,o=new O,l=new O,h=new O,d=new O,f=new O;if(t)for(let c=0,u=t.count;c<u;c+=3){const m=t.getX(c+0),y=t.getX(c+1),p=t.getX(c+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,p),d.subVectors(a,r),f.subVectors(s,r),d.cross(f),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,y),h.fromBufferAttribute(n,p),o.add(d),l.add(d),h.add(d),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(p,h.x,h.y,h.z)}else for(let c=0,u=e.count;c<u;c+=3)s.fromBufferAttribute(e,c+0),r.fromBufferAttribute(e,c+1),a.fromBufferAttribute(e,c+2),d.subVectors(a,r),f.subVectors(s,r),d.cross(f),n.setXYZ(c+0,d.x,d.y,d.z),n.setXYZ(c+1,d.x,d.y,d.z),n.setXYZ(c+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(o,l){const h=o.array,d=o.itemSize,f=o.normalized,c=new h.constructor(l.length*d);let u=0,m=0;for(let y=0,p=l.length;y<p;y++){o.isInterleavedBufferAttribute?u=l[y]*o.data.stride+o.offset:u=l[y]*d;for(let g=0;g<d;g++)c[m++]=h[u++]}return new mn(c,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new on,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],h=t(l,n);e.setAttribute(o,h)}const r=this.morphAttributes;for(const o in r){const l=[],h=r[o];for(let d=0,f=h.length;d<f;d++){const c=h[d],u=t(c,n);l.push(u)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const h=n[l];t.data.attributes[l]=h.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],d=[];for(let f=0,c=h.length;f<c;f++){const u=h[f];d.push(u.toJSON(t.data))}d.length>0&&(s[l]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const h in s){const d=s[h];this.setAttribute(h,d.clone(e))}const r=t.morphAttributes;for(const h in r){const d=[],f=r[h];for(let c=0,u=f.length;c<u;c++)d.push(f[c].clone(e));this.morphAttributes[h]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let h=0,d=a.length;h<d;h++){const f=a[h];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ol=new ae,Si=new il,xr=new sr,Bl=new O,yr=new O,Mr=new O,Sr=new O,Da=new O,br=new O,zl=new O,Er=new O;class Zt extends Be{constructor(t=new on,e=new En){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){br.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const d=o[l],f=r[l];d!==0&&(Da.fromBufferAttribute(f,t),a?br.addScaledVector(Da,d):br.addScaledVector(Da.sub(e),d))}e.add(br)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(r),Si.copy(t.ray).recast(t.near),!(xr.containsPoint(Si.origin)===!1&&(Si.intersectSphere(xr,Bl)===null||Si.origin.distanceToSquared(Bl)>(t.far-t.near)**2))&&(Ol.copy(r).invert(),Si.copy(t.ray).applyMatrix4(Ol),!(n.boundingBox!==null&&Si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Si)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,c=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,y=c.length;m<y;m++){const p=c[m],g=a[p.materialIndex],A=Math.max(p.start,u.start),E=Math.min(o.count,Math.min(p.start+p.count,u.start+u.count));for(let w=A,q=E;w<q;w+=3){const N=o.getX(w),R=o.getX(w+1),k=o.getX(w+2);s=wr(this,g,t,n,h,d,f,N,R,k),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,u.start),y=Math.min(o.count,u.start+u.count);for(let p=m,g=y;p<g;p+=3){const A=o.getX(p),E=o.getX(p+1),w=o.getX(p+2);s=wr(this,a,t,n,h,d,f,A,E,w),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,y=c.length;m<y;m++){const p=c[m],g=a[p.materialIndex],A=Math.max(p.start,u.start),E=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let w=A,q=E;w<q;w+=3){const N=w,R=w+1,k=w+2;s=wr(this,g,t,n,h,d,f,N,R,k),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,u.start),y=Math.min(l.count,u.start+u.count);for(let p=m,g=y;p<g;p+=3){const A=p,E=p+1,w=p+2;s=wr(this,a,t,n,h,d,f,A,E,w),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Ed(i,t,e,n,s,r,a,o){let l;if(t.side===nn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===pi,o),l===null)return null;Er.copy(o),Er.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(Er);return h<e.near||h>e.far?null:{distance:h,point:Er.clone(),object:i}}function wr(i,t,e,n,s,r,a,o,l,h){i.getVertexPosition(o,yr),i.getVertexPosition(l,Mr),i.getVertexPosition(h,Sr);const d=Ed(i,t,e,n,yr,Mr,Sr,zl);if(d){const f=new O;bn.getBarycoord(zl,yr,Mr,Sr,f),s&&(d.uv=bn.getInterpolatedAttribute(s,o,l,h,f,new vt)),r&&(d.uv1=bn.getInterpolatedAttribute(r,o,l,h,f,new vt)),a&&(d.normal=bn.getInterpolatedAttribute(a,o,l,h,f,new O),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const c={a:o,b:l,c:h,normal:new O,materialIndex:0};bn.getNormal(yr,Mr,Sr,c.normal),d.face=c,d.barycoord=f}return d}class Ae extends on{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],h=[],d=[],f=[];let c=0,u=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ce(h,3)),this.setAttribute("normal",new Ce(d,3)),this.setAttribute("uv",new Ce(f,2));function m(y,p,g,A,E,w,q,N,R,k,J){const x=w/R,b=q/k,Y=w/2,H=q/2,U=N/2,$=R+1,_=k+1;let M=0,v=0;const L=new O;for(let D=0;D<_;D++){const I=D*b-H;for(let K=0;K<$;K++){const nt=K*x-Y;L[y]=nt*A,L[p]=I*E,L[g]=U,h.push(L.x,L.y,L.z),L[y]=0,L[p]=0,L[g]=N>0?1:-1,d.push(L.x,L.y,L.z),f.push(K/R),f.push(1-D/k),M+=1}}for(let D=0;D<k;D++)for(let I=0;I<R;I++){const K=c+I+$*D,nt=c+I+$*(D+1),P=c+(I+1)+$*(D+1),V=c+(I+1)+$*D;l.push(K,nt,V),l.push(nt,P,V),v+=6}o.addGroup(u,v,J),u+=v,c+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ae(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ts(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Qe(i){const t={};for(let e=0;e<i.length;e++){const n=Ts(i[e]);for(const s in n)t[s]=n[s]}return t}function wd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function dh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}const Td={clone:Ts,merge:Qe};var Ad=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends As{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ad,this.fragmentShader=Rd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ts(t.uniforms),this.uniformsGroups=wd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class fh extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new O,kl=new vt,Hl=new vt;class pn extends fh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Qs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qs*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(oi.x,oi.y).multiplyScalar(-t/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-t/oi.z)}getViewSize(t,e){return this.getViewBounds(t,kl,Hl),e.subVectors(Hl,kl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(qs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/h,s*=a.width/l,n*=a.height/h}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ns=-90,is=1;class Cd extends Be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new pn(ns,is,t,e);s.layers=this.layers,this.add(s);const r=new pn(ns,is,t,e);r.layers=this.layers,this.add(r);const a=new pn(ns,is,t,e);a.layers=this.layers,this.add(a);const o=new pn(ns,is,t,e);o.layers=this.layers,this.add(o);const l=new pn(ns,is,t,e);l.layers=this.layers,this.add(l);const h=new pn(ns,is,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const h of e)this.remove(h);if(t===jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,h,d]=this.children,f=t.getRenderTarget(),c=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,d),t.setRenderTarget(f,c,u),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class ph extends Ke{constructor(t,e,n,s,r,a,o,l,h,d){t=t!==void 0?t:[],e=e!==void 0?e:Ss,super(t,e,n,s,r,a,o,l,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Pd extends Ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ph(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Sn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ae(5,5,5),r=new gi({name:"CubemapFromEquirect",uniforms:Ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:di});r.uniforms.tEquirect.value=e;const a=new Zt(s,r),o=e.minFilter;return e.minFilter===Di&&(e.minFilter=Sn),new Cd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Ia=new O,Ld=new O,Dd=new Qt;class ci{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ia.subVectors(n,e).cross(Ld.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ia),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Dd.getNormalMatrix(t),s=this.coplanarPoint(Ia).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new sr,Tr=new O;class rl{constructor(t=new ci,e=new ci,n=new ci,s=new ci,r=new ci,a=new ci){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=jn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],h=s[4],d=s[5],f=s[6],c=s[7],u=s[8],m=s[9],y=s[10],p=s[11],g=s[12],A=s[13],E=s[14],w=s[15];if(n[0].setComponents(l-r,c-h,p-u,w-g).normalize(),n[1].setComponents(l+r,c+h,p+u,w+g).normalize(),n[2].setComponents(l+a,c+d,p+m,w+A).normalize(),n[3].setComponents(l-a,c-d,p-m,w-A).normalize(),n[4].setComponents(l-o,c-f,p-y,w-E).normalize(),e===jn)n[5].setComponents(l+o,c+f,p+y,w+E).normalize();else if(e===Qr)n[5].setComponents(o,f,y,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(t){return bi.center.set(0,0,0),bi.radius=.7071067811865476,bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Tr.x=s.normal.x>0?t.max.x:t.min.x,Tr.y=s.normal.y>0?t.max.y:t.min.y,Tr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Tr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function mh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Id(i){const t=new WeakMap;function e(o,l){const h=o.array,d=o.usage,f=h.byteLength,c=i.createBuffer();i.bindBuffer(l,c),i.bufferData(l,h,d),o.onUploadCallback();let u;if(h instanceof Float32Array)u=i.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)u=i.SHORT;else if(h instanceof Uint32Array)u=i.UNSIGNED_INT;else if(h instanceof Int32Array)u=i.INT;else if(h instanceof Int8Array)u=i.BYTE;else if(h instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:c,type:u,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,h){const d=l.array,f=l.updateRanges;if(i.bindBuffer(h,o),f.length===0)i.bufferSubData(h,0,d);else{f.sort((u,m)=>u.start-m.start);let c=0;for(let u=1;u<f.length;u++){const m=f[c],y=f[u];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++c,f[c]=y)}f.length=c+1;for(let u=0,m=f.length;u<m;u++){const y=f[u];i.bufferSubData(h,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=t.get(o);if(h===void 0)t.set(o,e(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,l),h.version=o.version}}return{get:s,remove:r,update:a}}class In extends on{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),h=o+1,d=l+1,f=t/o,c=e/l,u=[],m=[],y=[],p=[];for(let g=0;g<d;g++){const A=g*c-a;for(let E=0;E<h;E++){const w=E*f-r;m.push(w,-A,0),y.push(0,0,1),p.push(E/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let A=0;A<o;A++){const E=A+h*g,w=A+h*(g+1),q=A+1+h*(g+1),N=A+1+h*g;u.push(E,w,N),u.push(w,q,N)}this.setIndex(u),this.setAttribute("position",new Ce(m,3)),this.setAttribute("normal",new Ce(y,3)),this.setAttribute("uv",new Ce(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new In(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ud=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nd=`#ifdef USE_ALPHAHASH
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
#endif`,Fd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Od=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kd=`#ifdef USE_AOMAP
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
#endif`,Hd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vd=`#ifdef USE_BATCHING
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
#endif`,Gd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qd=`#ifdef USE_IRIDESCENCE
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
#endif`,$d=`#ifdef USE_BUMPMAP
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
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,sf=`#define PI 3.141592653589793
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
} // validated`,rf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,af=`vec3 transformedNormal = objectNormal;
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
#endif`,of=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uf="gl_FragColor = linearToOutputTexel( gl_FragColor );",df=`
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
}`,ff=`#ifdef USE_ENVMAP
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
#endif`,pf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mf=`#ifdef USE_ENVMAP
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
#endif`,gf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_f=`#ifdef USE_ENVMAP
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
#endif`,vf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sf=`#ifdef USE_GRADIENTMAP
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
}`,bf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ef=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tf=`uniform bool receiveShadow;
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
#endif`,Af=`#ifdef USE_ENVMAP
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
#endif`,Rf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Df=`PhysicalMaterial material;
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
#endif`,If=`struct PhysicalMaterial {
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
}`,Uf=`
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
#endif`,Nf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ff=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Of=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wf=`#if defined( USE_POINTS_UV )
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
#endif`,Xf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$f=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zf=`#ifdef USE_MORPHTARGETS
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
#endif`,jf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,np=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ip=`#ifdef USE_NORMALMAP
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
#endif`,sp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ap=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,op=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,up=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_p=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xp=`float getShadowMask() {
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
}`,yp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mp=`#ifdef USE_SKINNING
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
#endif`,Sp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bp=`#ifdef USE_SKINNING
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
#endif`,Ep=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ap=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rp=`#ifdef USE_TRANSMISSION
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
#endif`,Cp=`#ifdef USE_TRANSMISSION
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
#endif`,Pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ip=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Up=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Np=`uniform sampler2D t2D;
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
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Op=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kp=`#include <common>
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
}`,Hp=`#if DEPTH_PACKING == 3200
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
}`,Vp=`#define DISTANCE
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
}`,Gp=`#define DISTANCE
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
}`,Wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yp=`uniform float scale;
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
}`,qp=`uniform vec3 diffuse;
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
}`,$p=`#include <common>
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
}`,Kp=`uniform vec3 diffuse;
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
}`,Zp=`#define LAMBERT
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
}`,jp=`#define LAMBERT
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
}`,Jp=`#define MATCAP
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
}`,Qp=`#define MATCAP
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
}`,tm=`#define NORMAL
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
}`,em=`#define NORMAL
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
}`,nm=`#define PHONG
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
}`,im=`#define PHONG
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
}`,sm=`#define STANDARD
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
}`,rm=`#define STANDARD
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
}`,am=`#define TOON
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
}`,om=`#define TOON
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
}`,lm=`uniform float size;
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
}`,cm=`uniform vec3 diffuse;
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
}`,hm=`#include <common>
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
}`,um=`uniform vec3 color;
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
}`,dm=`uniform float rotation;
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
}`,fm=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:Ud,alphahash_pars_fragment:Nd,alphamap_fragment:Fd,alphamap_pars_fragment:Od,alphatest_fragment:Bd,alphatest_pars_fragment:zd,aomap_fragment:kd,aomap_pars_fragment:Hd,batching_pars_vertex:Vd,batching_vertex:Gd,begin_vertex:Wd,beginnormal_vertex:Xd,bsdfs:Yd,iridescence_fragment:qd,bumpmap_pars_fragment:$d,clipping_planes_fragment:Kd,clipping_planes_pars_fragment:Zd,clipping_planes_pars_vertex:jd,clipping_planes_vertex:Jd,color_fragment:Qd,color_pars_fragment:tf,color_pars_vertex:ef,color_vertex:nf,common:sf,cube_uv_reflection_fragment:rf,defaultnormal_vertex:af,displacementmap_pars_vertex:of,displacementmap_vertex:lf,emissivemap_fragment:cf,emissivemap_pars_fragment:hf,colorspace_fragment:uf,colorspace_pars_fragment:df,envmap_fragment:ff,envmap_common_pars_fragment:pf,envmap_pars_fragment:mf,envmap_pars_vertex:gf,envmap_physical_pars_fragment:Af,envmap_vertex:_f,fog_vertex:vf,fog_pars_vertex:xf,fog_fragment:yf,fog_pars_fragment:Mf,gradientmap_pars_fragment:Sf,lightmap_pars_fragment:bf,lights_lambert_fragment:Ef,lights_lambert_pars_fragment:wf,lights_pars_begin:Tf,lights_toon_fragment:Rf,lights_toon_pars_fragment:Cf,lights_phong_fragment:Pf,lights_phong_pars_fragment:Lf,lights_physical_fragment:Df,lights_physical_pars_fragment:If,lights_fragment_begin:Uf,lights_fragment_maps:Nf,lights_fragment_end:Ff,logdepthbuf_fragment:Of,logdepthbuf_pars_fragment:Bf,logdepthbuf_pars_vertex:zf,logdepthbuf_vertex:kf,map_fragment:Hf,map_pars_fragment:Vf,map_particle_fragment:Gf,map_particle_pars_fragment:Wf,metalnessmap_fragment:Xf,metalnessmap_pars_fragment:Yf,morphinstance_vertex:qf,morphcolor_vertex:$f,morphnormal_vertex:Kf,morphtarget_pars_vertex:Zf,morphtarget_vertex:jf,normal_fragment_begin:Jf,normal_fragment_maps:Qf,normal_pars_fragment:tp,normal_pars_vertex:ep,normal_vertex:np,normalmap_pars_fragment:ip,clearcoat_normal_fragment_begin:sp,clearcoat_normal_fragment_maps:rp,clearcoat_pars_fragment:ap,iridescence_pars_fragment:op,opaque_fragment:lp,packing:cp,premultiplied_alpha_fragment:hp,project_vertex:up,dithering_fragment:dp,dithering_pars_fragment:fp,roughnessmap_fragment:pp,roughnessmap_pars_fragment:mp,shadowmap_pars_fragment:gp,shadowmap_pars_vertex:_p,shadowmap_vertex:vp,shadowmask_pars_fragment:xp,skinbase_vertex:yp,skinning_pars_vertex:Mp,skinning_vertex:Sp,skinnormal_vertex:bp,specularmap_fragment:Ep,specularmap_pars_fragment:wp,tonemapping_fragment:Tp,tonemapping_pars_fragment:Ap,transmission_fragment:Rp,transmission_pars_fragment:Cp,uv_pars_fragment:Pp,uv_pars_vertex:Lp,uv_vertex:Dp,worldpos_vertex:Ip,background_vert:Up,background_frag:Np,backgroundCube_vert:Fp,backgroundCube_frag:Op,cube_vert:Bp,cube_frag:zp,depth_vert:kp,depth_frag:Hp,distanceRGBA_vert:Vp,distanceRGBA_frag:Gp,equirect_vert:Wp,equirect_frag:Xp,linedashed_vert:Yp,linedashed_frag:qp,meshbasic_vert:$p,meshbasic_frag:Kp,meshlambert_vert:Zp,meshlambert_frag:jp,meshmatcap_vert:Jp,meshmatcap_frag:Qp,meshnormal_vert:tm,meshnormal_frag:em,meshphong_vert:nm,meshphong_frag:im,meshphysical_vert:sm,meshphysical_frag:rm,meshtoon_vert:am,meshtoon_frag:om,points_vert:lm,points_frag:cm,shadow_vert:hm,shadow_frag:um,sprite_vert:dm,sprite_frag:fm},Mt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},Fn={basic:{uniforms:Qe([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Qe([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Qe([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Qe([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Qe([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Qe([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Qe([Mt.points,Mt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Qe([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Qe([Mt.common,Mt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Qe([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Qe([Mt.sprite,Mt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:Qe([Mt.common,Mt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:Qe([Mt.lights,Mt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Fn.physical={uniforms:Qe([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const Ar={r:0,b:0,g:0},Ei=new wn,pm=new ae;function mm(i,t,e,n,s,r,a){const o=new Kt(0);let l=r===!0?0:1,h,d,f=null,c=0,u=null;function m(A){let E=A.isScene===!0?A.background:null;return E&&E.isTexture&&(E=(A.backgroundBlurriness>0?e:t).get(E)),E}function y(A){let E=!1;const w=m(A);w===null?g(o,l):w&&w.isColor&&(g(w,1),E=!0);const q=i.xr.getEnvironmentBlendMode();q==="additive"?n.buffers.color.setClear(0,0,0,1,a):q==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(A,E){const w=m(E);w&&(w.isCubeTexture||w.mapping===ia)?(d===void 0&&(d=new Zt(new Ae(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:Ts(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(q,N,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Ei.copy(E.backgroundRotation),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),d.material.uniforms.envMap.value=w,d.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(pm.makeRotationFromEuler(Ei)),d.material.toneMapped=ce.getTransfer(w.colorSpace)!==Me,(f!==w||c!==w.version||u!==i.toneMapping)&&(d.material.needsUpdate=!0,f=w,c=w.version,u=i.toneMapping),d.layers.enableAll(),A.unshift(d,d.geometry,d.material,0,0,null)):w&&w.isTexture&&(h===void 0&&(h=new Zt(new In(2,2),new gi({name:"BackgroundMaterial",uniforms:Ts(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=w,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.toneMapped=ce.getTransfer(w.colorSpace)!==Me,w.matrixAutoUpdate===!0&&w.updateMatrix(),h.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||c!==w.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,f=w,c=w.version,u=i.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null))}function g(A,E){A.getRGB(Ar,dh(i)),n.buffers.color.setClear(Ar.r,Ar.g,Ar.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(A,E=1){o.set(A),l=E,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,g(o,l)},render:y,addToRenderList:p}}function gm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=c(null);let r=s,a=!1;function o(x,b,Y,H,U){let $=!1;const _=f(H,Y,b);r!==_&&(r=_,h(r.object)),$=u(x,H,Y,U),$&&m(x,H,Y,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,w(x,b,Y,H),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return i.createVertexArray()}function h(x){return i.bindVertexArray(x)}function d(x){return i.deleteVertexArray(x)}function f(x,b,Y){const H=Y.wireframe===!0;let U=n[x.id];U===void 0&&(U={},n[x.id]=U);let $=U[b.id];$===void 0&&($={},U[b.id]=$);let _=$[H];return _===void 0&&(_=c(l()),$[H]=_),_}function c(x){const b=[],Y=[],H=[];for(let U=0;U<e;U++)b[U]=0,Y[U]=0,H[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:Y,attributeDivisors:H,object:x,attributes:{},index:null}}function u(x,b,Y,H){const U=r.attributes,$=b.attributes;let _=0;const M=Y.getAttributes();for(const v in M)if(M[v].location>=0){const D=U[v];let I=$[v];if(I===void 0&&(v==="instanceMatrix"&&x.instanceMatrix&&(I=x.instanceMatrix),v==="instanceColor"&&x.instanceColor&&(I=x.instanceColor)),D===void 0||D.attribute!==I||I&&D.data!==I.data)return!0;_++}return r.attributesNum!==_||r.index!==H}function m(x,b,Y,H){const U={},$=b.attributes;let _=0;const M=Y.getAttributes();for(const v in M)if(M[v].location>=0){let D=$[v];D===void 0&&(v==="instanceMatrix"&&x.instanceMatrix&&(D=x.instanceMatrix),v==="instanceColor"&&x.instanceColor&&(D=x.instanceColor));const I={};I.attribute=D,D&&D.data&&(I.data=D.data),U[v]=I,_++}r.attributes=U,r.attributesNum=_,r.index=H}function y(){const x=r.newAttributes;for(let b=0,Y=x.length;b<Y;b++)x[b]=0}function p(x){g(x,0)}function g(x,b){const Y=r.newAttributes,H=r.enabledAttributes,U=r.attributeDivisors;Y[x]=1,H[x]===0&&(i.enableVertexAttribArray(x),H[x]=1),U[x]!==b&&(i.vertexAttribDivisor(x,b),U[x]=b)}function A(){const x=r.newAttributes,b=r.enabledAttributes;for(let Y=0,H=b.length;Y<H;Y++)b[Y]!==x[Y]&&(i.disableVertexAttribArray(Y),b[Y]=0)}function E(x,b,Y,H,U,$,_){_===!0?i.vertexAttribIPointer(x,b,Y,U,$):i.vertexAttribPointer(x,b,Y,H,U,$)}function w(x,b,Y,H){y();const U=H.attributes,$=Y.getAttributes(),_=b.defaultAttributeValues;for(const M in $){const v=$[M];if(v.location>=0){let L=U[M];if(L===void 0&&(M==="instanceMatrix"&&x.instanceMatrix&&(L=x.instanceMatrix),M==="instanceColor"&&x.instanceColor&&(L=x.instanceColor)),L!==void 0){const D=L.normalized,I=L.itemSize,K=t.get(L);if(K===void 0)continue;const nt=K.buffer,P=K.type,V=K.bytesPerElement,et=P===i.INT||P===i.UNSIGNED_INT||L.gpuType===$o;if(L.isInterleavedBufferAttribute){const lt=L.data,ft=lt.stride,ht=L.offset;if(lt.isInstancedInterleavedBuffer){for(let At=0;At<v.locationSize;At++)g(v.location+At,lt.meshPerAttribute);x.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let At=0;At<v.locationSize;At++)p(v.location+At);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let At=0;At<v.locationSize;At++)E(v.location+At,I/v.locationSize,P,D,ft*V,(ht+I/v.locationSize*At)*V,et)}else{if(L.isInstancedBufferAttribute){for(let lt=0;lt<v.locationSize;lt++)g(v.location+lt,L.meshPerAttribute);x.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let lt=0;lt<v.locationSize;lt++)p(v.location+lt);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let lt=0;lt<v.locationSize;lt++)E(v.location+lt,I/v.locationSize,P,D,I*V,I/v.locationSize*lt*V,et)}}else if(_!==void 0){const D=_[M];if(D!==void 0)switch(D.length){case 2:i.vertexAttrib2fv(v.location,D);break;case 3:i.vertexAttrib3fv(v.location,D);break;case 4:i.vertexAttrib4fv(v.location,D);break;default:i.vertexAttrib1fv(v.location,D)}}}}A()}function q(){k();for(const x in n){const b=n[x];for(const Y in b){const H=b[Y];for(const U in H)d(H[U].object),delete H[U];delete b[Y]}delete n[x]}}function N(x){if(n[x.id]===void 0)return;const b=n[x.id];for(const Y in b){const H=b[Y];for(const U in H)d(H[U].object),delete H[U];delete b[Y]}delete n[x.id]}function R(x){for(const b in n){const Y=n[b];if(Y[x.id]===void 0)continue;const H=Y[x.id];for(const U in H)d(H[U].object),delete H[U];delete Y[x.id]}}function k(){J(),a=!0,r!==s&&(r=s,h(r.object))}function J(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:k,resetDefaultState:J,dispose:q,releaseStatesOfGeometry:N,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:p,disableUnusedAttributes:A}}function _m(i,t,e){let n;function s(h){n=h}function r(h,d){i.drawArrays(n,h,d),e.update(d,n,1)}function a(h,d,f){f!==0&&(i.drawArraysInstanced(n,h,d,f),e.update(d,n,f))}function o(h,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,d,0,f);let u=0;for(let m=0;m<f;m++)u+=d[m];e.update(u,n,1)}function l(h,d,f,c){if(f===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let m=0;m<h.length;m++)a(h[m],d[m],c[m]);else{u.multiDrawArraysInstancedWEBGL(n,h,0,d,0,c,0,f);let m=0;for(let y=0;y<f;y++)m+=d[y];for(let y=0;y<c.length;y++)e.update(m,n,c[y])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function vm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Dn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const k=R===ir&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Jn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==On&&!k)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const d=l(h);d!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);const f=e.logarithmicDepthBuffer===!0,c=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(c===!0){const R=t.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}const u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),q=m>0,N=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:f,reverseDepthBuffer:c,maxTextures:u,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:A,maxVaryings:E,maxFragmentUniforms:w,vertexTextures:q,maxSamples:N}}function xm(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new ci,o=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,c){const u=f.length!==0||c||n!==0||s;return s=c,n=f.length,u},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,c){e=d(f,c,0)},this.setState=function(f,c,u){const m=f.clippingPlanes,y=f.clipIntersection,p=f.clipShadows,g=i.get(f);if(!s||m===null||m.length===0||r&&!p)r?d(null):h();else{const A=r?0:n,E=A*4;let w=g.clippingState||null;l.value=w,w=d(m,c,E,u);for(let q=0;q!==E;++q)w[q]=e[q];g.clippingState=w,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=A}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(f,c,u,m){const y=f!==null?f.length:0;let p=null;if(y!==0){if(p=l.value,m!==!0||p===null){const g=u+y*4,A=c.matrixWorldInverse;o.getNormalMatrix(A),(p===null||p.length<g)&&(p=new Float32Array(g));for(let E=0,w=u;E!==y;++E,w+=4)a.copy(f[E]).applyMatrix4(A,o),a.normal.toArray(p,w),p[w+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}function ym(i){let t=new WeakMap;function e(a,o){return o===co?a.mapping=Ss:o===ho&&(a.mapping=bs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===co||o===ho)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const h=new Pd(l.height);return h.fromEquirectangularTexture(i,a),t.set(a,h),a.addEventListener("dispose",s),e(h.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class gh extends fh{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ms=4,Vl=[.125,.215,.35,.446,.526,.582],Ri=20,Ua=new gh,Gl=new Kt;let Na=null,Fa=0,Oa=0,Ba=!1;const Ti=(1+Math.sqrt(5))/2,ss=1/Ti,Wl=[new O(-Ti,ss,0),new O(Ti,ss,0),new O(-ss,0,Ti),new O(ss,0,Ti),new O(0,Ti,-ss),new O(0,Ti,ss),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class ko{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Na=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),Ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ql(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Na,Fa,Oa),this._renderer.xr.enabled=Ba,t.scissorTest=!1,Rr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ss||t.mapping===bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Na=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),Ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:ir,format:Dn,colorSpace:_i,depthBuffer:!1},s=Xl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mm(r)),this._blurMaterial=Sm(r,t,e)}return s}_compileMaterial(t){const e=new Zt(this._lodPlanes[0],t);this._renderer.compile(e,Ua)}_sceneToCubeUV(t,e,n,s){const o=new pn(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,c=d.toneMapping;d.getClearColor(Gl),d.toneMapping=fi,d.autoClear=!1;const u=new En({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),m=new Zt(new Ae,u);let y=!1;const p=t.background;p?p.isColor&&(u.color.copy(p),t.background=null,y=!0):(u.color.copy(Gl),y=!0);for(let g=0;g<6;g++){const A=g%3;A===0?(o.up.set(0,l[g],0),o.lookAt(h[g],0,0)):A===1?(o.up.set(0,0,l[g]),o.lookAt(0,h[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,h[g]));const E=this._cubeSize;Rr(s,A*E,g>2?E:0,E,E),d.setRenderTarget(s),y&&d.render(m,o),d.render(t,o)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=c,d.autoClear=f,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ss||t.mapping===bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ql()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Zt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Rr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ua)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Wl[(s-r-1)%Wl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Zt(this._lodPlanes[s],h),c=h.uniforms,u=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Ri-1),y=r/m,p=isFinite(r)?1+Math.floor(d*y):Ri;p>Ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ri}`);const g=[];let A=0;for(let R=0;R<Ri;++R){const k=R/y,J=Math.exp(-k*k/2);g.push(J),R===0?A+=J:R<p&&(A+=2*J)}for(let R=0;R<g.length;R++)g[R]=g[R]/A;c.envMap.value=t.texture,c.samples.value=p,c.weights.value=g,c.latitudinal.value=a==="latitudinal",o&&(c.poleAxis.value=o);const{_lodMax:E}=this;c.dTheta.value=m,c.mipInt.value=E-n;const w=this._sizeLods[s],q=3*w*(s>E-ms?s-E+ms:0),N=4*(this._cubeSize-w);Rr(e,q,N,3*w,2*w),l.setRenderTarget(e),l.render(f,Ua)}}function Mm(i){const t=[],e=[],n=[];let s=i;const r=i-ms+1+Vl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-ms?l=Vl[a-i+ms-1]:a===0&&(l=0),n.push(l);const h=1/(o-2),d=-h,f=1+h,c=[d,d,f,d,f,f,d,d,f,f,d,f],u=6,m=6,y=3,p=2,g=1,A=new Float32Array(y*m*u),E=new Float32Array(p*m*u),w=new Float32Array(g*m*u);for(let N=0;N<u;N++){const R=N%3*2/3-1,k=N>2?0:-1,J=[R,k,0,R+2/3,k,0,R+2/3,k+1,0,R,k,0,R+2/3,k+1,0,R,k+1,0];A.set(J,y*m*N),E.set(c,p*m*N);const x=[N,N,N,N,N,N];w.set(x,g*m*N)}const q=new on;q.setAttribute("position",new mn(A,y)),q.setAttribute("uv",new mn(E,p)),q.setAttribute("faceIndex",new mn(w,g)),t.push(q),s>ms&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Xl(i,t,e){const n=new Ni(i,t,e);return n.texture.mapping=ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Sm(i,t,e){const n=new Float32Array(Ri),s=new O(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:al(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Yl(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:al(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function ql(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function al(){return`

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
	`}function bm(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,h=l===co||l===ho,d=l===Ss||l===bs;if(h||d){let f=t.get(o);const c=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==c)return e===null&&(e=new ko(i)),f=h?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const u=o.image;return h&&u&&u.height>0||d&&u&&s(u)?(e===null&&(e=new ko(i)),f=h?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0;const h=6;for(let d=0;d<h;d++)o[d]!==void 0&&l++;return l===h}function r(o){const l=o.target;l.removeEventListener("dispose",r);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Em(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&qr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function wm(i,t,e,n){const s={},r=new WeakMap;function a(f){const c=f.target;c.index!==null&&t.remove(c.index);for(const m in c.attributes)t.remove(c.attributes[m]);for(const m in c.morphAttributes){const y=c.morphAttributes[m];for(let p=0,g=y.length;p<g;p++)t.remove(y[p])}c.removeEventListener("dispose",a),delete s[c.id];const u=r.get(c);u&&(t.remove(u),r.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,e.memory.geometries--}function o(f,c){return s[c.id]===!0||(c.addEventListener("dispose",a),s[c.id]=!0,e.memory.geometries++),c}function l(f){const c=f.attributes;for(const m in c)t.update(c[m],i.ARRAY_BUFFER);const u=f.morphAttributes;for(const m in u){const y=u[m];for(let p=0,g=y.length;p<g;p++)t.update(y[p],i.ARRAY_BUFFER)}}function h(f){const c=[],u=f.index,m=f.attributes.position;let y=0;if(u!==null){const A=u.array;y=u.version;for(let E=0,w=A.length;E<w;E+=3){const q=A[E+0],N=A[E+1],R=A[E+2];c.push(q,N,N,R,R,q)}}else if(m!==void 0){const A=m.array;y=m.version;for(let E=0,w=A.length/3-1;E<w;E+=3){const q=E+0,N=E+1,R=E+2;c.push(q,N,N,R,R,q)}}else return;const p=new(ah(c)?uh:hh)(c,1);p.version=y;const g=r.get(f);g&&t.remove(g),r.set(f,p)}function d(f){const c=r.get(f);if(c){const u=f.index;u!==null&&c.version<u.version&&h(f)}else h(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function Tm(i,t,e){let n;function s(c){n=c}let r,a;function o(c){r=c.type,a=c.bytesPerElement}function l(c,u){i.drawElements(n,u,r,c*a),e.update(u,n,1)}function h(c,u,m){m!==0&&(i.drawElementsInstanced(n,u,r,c*a,m),e.update(u,n,m))}function d(c,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,c,0,m);let p=0;for(let g=0;g<m;g++)p+=u[g];e.update(p,n,1)}function f(c,u,m,y){if(m===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)h(c[g]/a,u[g],y[g]);else{p.multiDrawElementsInstancedWEBGL(n,u,0,r,c,0,y,0,m);let g=0;for(let A=0;A<m;A++)g+=u[A];for(let A=0;A<y.length;A++)e.update(g,n,y[A])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function Am(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Rm(i,t,e){const n=new WeakMap,s=new ge;function r(a,o,l){const h=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let c=n.get(o);if(c===void 0||c.count!==f){let J=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",J)};c!==void 0&&c.texture.dispose();const u=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let E=0;u===!0&&(E=1),m===!0&&(E=2),y===!0&&(E=3);let w=o.attributes.position.count*E,q=1;w>t.maxTextureSize&&(q=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const N=new Float32Array(w*q*4*f),R=new lh(N,w,q,f);R.type=On,R.needsUpdate=!0;const k=E*4;for(let x=0;x<f;x++){const b=p[x],Y=g[x],H=A[x],U=w*q*4*x;for(let $=0;$<b.count;$++){const _=$*k;u===!0&&(s.fromBufferAttribute(b,$),N[U+_+0]=s.x,N[U+_+1]=s.y,N[U+_+2]=s.z,N[U+_+3]=0),m===!0&&(s.fromBufferAttribute(Y,$),N[U+_+4]=s.x,N[U+_+5]=s.y,N[U+_+6]=s.z,N[U+_+7]=0),y===!0&&(s.fromBufferAttribute(H,$),N[U+_+8]=s.x,N[U+_+9]=s.y,N[U+_+10]=s.z,N[U+_+11]=H.itemSize===4?s.w:1)}}c={count:f,texture:R,size:new vt(w,q)},n.set(o,c),o.addEventListener("dispose",J)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let u=0;for(let y=0;y<h.length;y++)u+=h[y];const m=o.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",h)}l.getUniforms().setValue(i,"morphTargetsTexture",c.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",c.size)}return{update:r}}function Cm(i,t,e,n){let s=new WeakMap;function r(l){const h=n.render.frame,d=l.geometry,f=t.get(l,d);if(s.get(f)!==h&&(t.update(f),s.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const c=l.skeleton;s.get(c)!==h&&(c.update(),s.set(c,h))}return f}function a(){s=new WeakMap}function o(l){const h=l.target;h.removeEventListener("dispose",o),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}class _h extends Ke{constructor(t,e,n,s,r,a,o,l,h,d=xs){if(d!==xs&&d!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===xs&&(n=Ui),n===void 0&&d===ws&&(n=Es),super(null,s,r,a,o,l,d,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const vh=new Ke,$l=new _h(1,1),xh=new lh,yh=new pd,Mh=new ph,Kl=[],Zl=[],jl=new Float32Array(16),Jl=new Float32Array(9),Ql=new Float32Array(4);function Rs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Kl[s];if(r===void 0&&(r=new Float32Array(s),Kl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function De(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ra(i,t){let e=Zl[t];e===void 0&&(e=new Int32Array(t),Zl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Pm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Lm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2fv(this.addr,t),De(e,t)}}function Dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;i.uniform3fv(this.addr,t),De(e,t)}}function Im(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4fv(this.addr,t),De(e,t)}}function Um(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;Ql.set(n),i.uniformMatrix2fv(this.addr,!1,Ql),De(e,n)}}function Nm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;Jl.set(n),i.uniformMatrix3fv(this.addr,!1,Jl),De(e,n)}}function Fm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;jl.set(n),i.uniformMatrix4fv(this.addr,!1,jl),De(e,n)}}function Om(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2iv(this.addr,t),De(e,t)}}function zm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3iv(this.addr,t),De(e,t)}}function km(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4iv(this.addr,t),De(e,t)}}function Hm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Vm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2uiv(this.addr,t),De(e,t)}}function Gm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3uiv(this.addr,t),De(e,t)}}function Wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4uiv(this.addr,t),De(e,t)}}function Xm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?($l.compareFunction=rh,r=$l):r=vh,e.setTexture2D(t||r,s)}function Ym(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||yh,s)}function qm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Mh,s)}function $m(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||xh,s)}function Km(i){switch(i){case 5126:return Pm;case 35664:return Lm;case 35665:return Dm;case 35666:return Im;case 35674:return Um;case 35675:return Nm;case 35676:return Fm;case 5124:case 35670:return Om;case 35667:case 35671:return Bm;case 35668:case 35672:return zm;case 35669:case 35673:return km;case 5125:return Hm;case 36294:return Vm;case 36295:return Gm;case 36296:return Wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Xm;case 35679:case 36299:case 36307:return Ym;case 35680:case 36300:case 36308:case 36293:return qm;case 36289:case 36303:case 36311:case 36292:return $m}}function Zm(i,t){i.uniform1fv(this.addr,t)}function jm(i,t){const e=Rs(t,this.size,2);i.uniform2fv(this.addr,e)}function Jm(i,t){const e=Rs(t,this.size,3);i.uniform3fv(this.addr,e)}function Qm(i,t){const e=Rs(t,this.size,4);i.uniform4fv(this.addr,e)}function t0(i,t){const e=Rs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function e0(i,t){const e=Rs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function n0(i,t){const e=Rs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function i0(i,t){i.uniform1iv(this.addr,t)}function s0(i,t){i.uniform2iv(this.addr,t)}function r0(i,t){i.uniform3iv(this.addr,t)}function a0(i,t){i.uniform4iv(this.addr,t)}function o0(i,t){i.uniform1uiv(this.addr,t)}function l0(i,t){i.uniform2uiv(this.addr,t)}function c0(i,t){i.uniform3uiv(this.addr,t)}function h0(i,t){i.uniform4uiv(this.addr,t)}function u0(i,t,e){const n=this.cache,s=t.length,r=ra(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||vh,r[a])}function d0(i,t,e){const n=this.cache,s=t.length,r=ra(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||yh,r[a])}function f0(i,t,e){const n=this.cache,s=t.length,r=ra(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Mh,r[a])}function p0(i,t,e){const n=this.cache,s=t.length,r=ra(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||xh,r[a])}function m0(i){switch(i){case 5126:return Zm;case 35664:return jm;case 35665:return Jm;case 35666:return Qm;case 35674:return t0;case 35675:return e0;case 35676:return n0;case 5124:case 35670:return i0;case 35667:case 35671:return s0;case 35668:case 35672:return r0;case 35669:case 35673:return a0;case 5125:return o0;case 36294:return l0;case 36295:return c0;case 36296:return h0;case 35678:case 36198:case 36298:case 36306:case 35682:return u0;case 35679:case 36299:case 36307:return d0;case 35680:case 36300:case 36308:case 36293:return f0;case 36289:case 36303:case 36311:case 36292:return p0}}class g0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Km(e.type)}}class _0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=m0(e.type)}}class v0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const za=/(\w+)(\])?(\[|\.)?/g;function tc(i,t){i.seq.push(t),i.map[t.id]=t}function x0(i,t,e){const n=i.name,s=n.length;for(za.lastIndex=0;;){const r=za.exec(n),a=za.lastIndex;let o=r[1];const l=r[2]==="]",h=r[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===s){tc(e,h===void 0?new g0(o,i,t):new _0(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new v0(o),tc(e,f)),e=f}}}class $r{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);x0(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function ec(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const y0=37297;let M0=0;function S0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function b0(i){const t=ce.getPrimaries(ce.workingColorSpace),e=ce.getPrimaries(i);let n;switch(t===e?n="":t===Jr&&e===jr?n="LinearDisplayP3ToLinearSRGB":t===jr&&e===Jr&&(n="LinearSRGBToLinearDisplayP3"),i){case _i:case sa:return[n,"LinearTransferOETF"];case $e:case el:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function nc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+S0(i.getShaderSource(t),a)}else return s}function E0(i,t){const e=b0(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function w0(i,t){let e;switch(t){case Tu:e="Linear";break;case Au:e="Reinhard";break;case Ru:e="Cineon";break;case qc:e="ACESFilmic";break;case Pu:e="AgX";break;case Lu:e="Neutral";break;case Cu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Cr=new O;function T0(){ce.getLuminanceCoefficients(Cr);const i=Cr.x.toFixed(4),t=Cr.y.toFixed(4),e=Cr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function A0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ys).join(`
`)}function R0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function C0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ys(i){return i!==""}function ic(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const P0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ho(i){return i.replace(P0,D0)}const L0=new Map;function D0(i,t){let e=Jt[t];if(e===void 0){const n=L0.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ho(e)}const I0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rc(i){return i.replace(I0,U0)}function U0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ac(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function N0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Wc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Xc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zn&&(t="SHADOWMAP_TYPE_VSM"),t}function F0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ss:case bs:t="ENVMAP_TYPE_CUBE";break;case ia:t="ENVMAP_TYPE_CUBE_UV";break}return t}function O0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case bs:t="ENVMAP_MODE_REFRACTION";break}return t}function B0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Yc:t="ENVMAP_BLENDING_MULTIPLY";break;case Eu:t="ENVMAP_BLENDING_MIX";break;case wu:t="ENVMAP_BLENDING_ADD";break}return t}function z0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function k0(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=N0(e),h=F0(e),d=O0(e),f=B0(e),c=z0(e),u=A0(e),m=R0(r),y=s.createProgram();let p,g,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ys).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ys).join(`
`),g.length>0&&(g+=`
`)):(p=[ac(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ys).join(`
`),g=[ac(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMap?"#define "+f:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?Jt.tonemapping_pars_fragment:"",e.toneMapping!==fi?w0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,E0("linearToOutputTexel",e.outputColorSpace),T0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ys).join(`
`)),a=Ho(a),a=ic(a,e),a=sc(a,e),o=Ho(o),o=ic(o,e),o=sc(o,e),a=rc(a),o=rc(o),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const E=A+p+a,w=A+g+o,q=ec(s,s.VERTEX_SHADER,E),N=ec(s,s.FRAGMENT_SHADER,w);s.attachShader(y,q),s.attachShader(y,N),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(b){if(i.debug.checkShaderErrors){const Y=s.getProgramInfoLog(y).trim(),H=s.getShaderInfoLog(q).trim(),U=s.getShaderInfoLog(N).trim();let $=!0,_=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,q,N);else{const M=nc(s,q,"vertex"),v=nc(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+Y+`
`+M+`
`+v)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(H===""||U==="")&&(_=!1);_&&(b.diagnostics={runnable:$,programLog:Y,vertexShader:{log:H,prefix:p},fragmentShader:{log:U,prefix:g}})}s.deleteShader(q),s.deleteShader(N),k=new $r(s,y),J=C0(s,y)}let k;this.getUniforms=function(){return k===void 0&&R(this),k};let J;this.getAttributes=function(){return J===void 0&&R(this),J};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(y,y0)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=M0++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=q,this.fragmentShader=N,this}let H0=0;class V0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new G0(t),e.set(t,n)),n}}class G0{constructor(t){this.id=H0++,this.code=t,this.usedTimes=0}}function W0(i,t,e,n,s,r,a){const o=new sl,l=new V0,h=new Set,d=[],f=s.logarithmicDepthBuffer,c=s.reverseDepthBuffer,u=s.vertexTextures;let m=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return h.add(x),x===0?"uv":`uv${x}`}function g(x,b,Y,H,U){const $=H.fog,_=U.geometry,M=x.isMeshStandardMaterial?H.environment:null,v=(x.isMeshStandardMaterial?e:t).get(x.envMap||M),L=v&&v.mapping===ia?v.image.height:null,D=y[x.type];x.precision!==null&&(m=s.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const I=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,K=I!==void 0?I.length:0;let nt=0;_.morphAttributes.position!==void 0&&(nt=1),_.morphAttributes.normal!==void 0&&(nt=2),_.morphAttributes.color!==void 0&&(nt=3);let P,V,et,lt;if(D){const Ie=Fn[D];P=Ie.vertexShader,V=Ie.fragmentShader}else P=x.vertexShader,V=x.fragmentShader,l.update(x),et=l.getVertexShaderID(x),lt=l.getFragmentShaderID(x);const ft=i.getRenderTarget(),ht=U.isInstancedMesh===!0,At=U.isBatchedMesh===!0,zt=!!x.map,kt=!!x.matcap,B=!!v,Ee=!!x.aoMap,qt=!!x.lightMap,$t=!!x.bumpMap,Ht=!!x.normalMap,fe=!!x.displacementMap,Ut=!!x.emissiveMap,C=!!x.metalnessMap,S=!!x.roughnessMap,Z=x.anisotropy>0,ot=x.clearcoat>0,pt=x.dispersion>0,ct=x.iridescence>0,Lt=x.sheen>0,yt=x.transmission>0,Tt=Z&&!!x.anisotropyMap,ne=ot&&!!x.clearcoatMap,mt=ot&&!!x.clearcoatNormalMap,St=ot&&!!x.clearcoatRoughnessMap,Ft=ct&&!!x.iridescenceMap,Nt=ct&&!!x.iridescenceThicknessMap,wt=Lt&&!!x.sheenColorMap,ee=Lt&&!!x.sheenRoughnessMap,Xt=!!x.specularMap,he=!!x.specularColorMap,z=!!x.specularIntensityMap,Et=yt&&!!x.transmissionMap,it=yt&&!!x.thicknessMap,ut=!!x.gradientMap,gt=!!x.alphaMap,xt=x.alphaTest>0,Wt=!!x.alphaHash,_e=!!x.extensions;let We=fi;x.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(We=i.toneMapping);const jt={shaderID:D,shaderType:x.type,shaderName:x.name,vertexShader:P,fragmentShader:V,defines:x.defines,customVertexShaderID:et,customFragmentShaderID:lt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:At,batchingColor:At&&U._colorsTexture!==null,instancing:ht,instancingColor:ht&&U.instanceColor!==null,instancingMorph:ht&&U.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ft===null?i.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:_i,alphaToCoverage:!!x.alphaToCoverage,map:zt,matcap:kt,envMap:B,envMapMode:B&&v.mapping,envMapCubeUVHeight:L,aoMap:Ee,lightMap:qt,bumpMap:$t,normalMap:Ht,displacementMap:u&&fe,emissiveMap:Ut,normalMapObjectSpace:Ht&&x.normalMapType===Nu,normalMapTangentSpace:Ht&&x.normalMapType===sh,metalnessMap:C,roughnessMap:S,anisotropy:Z,anisotropyMap:Tt,clearcoat:ot,clearcoatMap:ne,clearcoatNormalMap:mt,clearcoatRoughnessMap:St,dispersion:pt,iridescence:ct,iridescenceMap:Ft,iridescenceThicknessMap:Nt,sheen:Lt,sheenColorMap:wt,sheenRoughnessMap:ee,specularMap:Xt,specularColorMap:he,specularIntensityMap:z,transmission:yt,transmissionMap:Et,thicknessMap:it,gradientMap:ut,opaque:x.transparent===!1&&x.blending===Ii&&x.alphaToCoverage===!1,alphaMap:gt,alphaTest:xt,alphaHash:Wt,combine:x.combine,mapUv:zt&&p(x.map.channel),aoMapUv:Ee&&p(x.aoMap.channel),lightMapUv:qt&&p(x.lightMap.channel),bumpMapUv:$t&&p(x.bumpMap.channel),normalMapUv:Ht&&p(x.normalMap.channel),displacementMapUv:fe&&p(x.displacementMap.channel),emissiveMapUv:Ut&&p(x.emissiveMap.channel),metalnessMapUv:C&&p(x.metalnessMap.channel),roughnessMapUv:S&&p(x.roughnessMap.channel),anisotropyMapUv:Tt&&p(x.anisotropyMap.channel),clearcoatMapUv:ne&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:mt&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:ee&&p(x.sheenRoughnessMap.channel),specularMapUv:Xt&&p(x.specularMap.channel),specularColorMapUv:he&&p(x.specularColorMap.channel),specularIntensityMapUv:z&&p(x.specularIntensityMap.channel),transmissionMapUv:Et&&p(x.transmissionMap.channel),thicknessMapUv:it&&p(x.thicknessMap.channel),alphaMapUv:gt&&p(x.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(Ht||Z),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!_.attributes.uv&&(zt||gt),fog:!!$,useFog:x.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:c,skinning:U.isSkinnedMesh===!0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:nt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&Y.length>0,shadowMapType:i.shadowMap.type,toneMapping:We,decodeVideoTexture:zt&&x.map.isVideoTexture===!0&&ce.getTransfer(x.map.colorSpace)===Me,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Pn,flipSided:x.side===nn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:_e&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&x.extensions.multiDraw===!0||At)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return jt.vertexUv1s=h.has(1),jt.vertexUv2s=h.has(2),jt.vertexUv3s=h.has(3),h.clear(),jt}function A(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const Y in x.defines)b.push(Y),b.push(x.defines[Y]);return x.isRawShaderMaterial===!1&&(E(b,x),w(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function E(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function w(x,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.alphaToCoverage&&o.enable(20),x.push(o.mask)}function q(x){const b=y[x.type];let Y;if(b){const H=Fn[b];Y=Td.clone(H.uniforms)}else Y=x.uniforms;return Y}function N(x,b){let Y;for(let H=0,U=d.length;H<U;H++){const $=d[H];if($.cacheKey===b){Y=$,++Y.usedTimes;break}}return Y===void 0&&(Y=new k0(i,b,x,r),d.push(Y)),Y}function R(x){if(--x.usedTimes===0){const b=d.indexOf(x);d[b]=d[d.length-1],d.pop(),x.destroy()}}function k(x){l.remove(x)}function J(){l.dispose()}return{getParameters:g,getProgramCacheKey:A,getUniforms:q,acquireProgram:N,releaseProgram:R,releaseShaderCache:k,programs:d,dispose:J}}function X0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Y0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function oc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function lc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f,c,u,m,y,p){let g=i[t];return g===void 0?(g={id:f.id,object:f,geometry:c,material:u,groupOrder:m,renderOrder:f.renderOrder,z:y,group:p},i[t]=g):(g.id=f.id,g.object=f,g.geometry=c,g.material=u,g.groupOrder=m,g.renderOrder=f.renderOrder,g.z=y,g.group=p),t++,g}function o(f,c,u,m,y,p){const g=a(f,c,u,m,y,p);u.transmission>0?n.push(g):u.transparent===!0?s.push(g):e.push(g)}function l(f,c,u,m,y,p){const g=a(f,c,u,m,y,p);u.transmission>0?n.unshift(g):u.transparent===!0?s.unshift(g):e.unshift(g)}function h(f,c){e.length>1&&e.sort(f||Y0),n.length>1&&n.sort(c||oc),s.length>1&&s.sort(c||oc)}function d(){for(let f=t,c=i.length;f<c;f++){const u=i[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:d,sort:h}}function q0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new lc,i.set(n,[a])):s>=r.length?(a=new lc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function $0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new Kt};break;case"SpotLight":e={position:new O,direction:new O,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function K0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Z0=0;function j0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function J0(i){const t=new $0,e=K0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new O);const s=new O,r=new ae,a=new ae;function o(h){let d=0,f=0,c=0;for(let J=0;J<9;J++)n.probe[J].set(0,0,0);let u=0,m=0,y=0,p=0,g=0,A=0,E=0,w=0,q=0,N=0,R=0;h.sort(j0);for(let J=0,x=h.length;J<x;J++){const b=h[J],Y=b.color,H=b.intensity,U=b.distance,$=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)d+=Y.r*H,f+=Y.g*H,c+=Y.b*H;else if(b.isLightProbe){for(let _=0;_<9;_++)n.probe[_].addScaledVector(b.sh.coefficients[_],H);R++}else if(b.isDirectionalLight){const _=t.get(b);if(_.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const M=b.shadow,v=e.get(b);v.shadowIntensity=M.intensity,v.shadowBias=M.bias,v.shadowNormalBias=M.normalBias,v.shadowRadius=M.radius,v.shadowMapSize=M.mapSize,n.directionalShadow[u]=v,n.directionalShadowMap[u]=$,n.directionalShadowMatrix[u]=b.shadow.matrix,A++}n.directional[u]=_,u++}else if(b.isSpotLight){const _=t.get(b);_.position.setFromMatrixPosition(b.matrixWorld),_.color.copy(Y).multiplyScalar(H),_.distance=U,_.coneCos=Math.cos(b.angle),_.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),_.decay=b.decay,n.spot[y]=_;const M=b.shadow;if(b.map&&(n.spotLightMap[q]=b.map,q++,M.updateMatrices(b),b.castShadow&&N++),n.spotLightMatrix[y]=M.matrix,b.castShadow){const v=e.get(b);v.shadowIntensity=M.intensity,v.shadowBias=M.bias,v.shadowNormalBias=M.normalBias,v.shadowRadius=M.radius,v.shadowMapSize=M.mapSize,n.spotShadow[y]=v,n.spotShadowMap[y]=$,w++}y++}else if(b.isRectAreaLight){const _=t.get(b);_.color.copy(Y).multiplyScalar(H),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),n.rectArea[p]=_,p++}else if(b.isPointLight){const _=t.get(b);if(_.color.copy(b.color).multiplyScalar(b.intensity),_.distance=b.distance,_.decay=b.decay,b.castShadow){const M=b.shadow,v=e.get(b);v.shadowIntensity=M.intensity,v.shadowBias=M.bias,v.shadowNormalBias=M.normalBias,v.shadowRadius=M.radius,v.shadowMapSize=M.mapSize,v.shadowCameraNear=M.camera.near,v.shadowCameraFar=M.camera.far,n.pointShadow[m]=v,n.pointShadowMap[m]=$,n.pointShadowMatrix[m]=b.shadow.matrix,E++}n.point[m]=_,m++}else if(b.isHemisphereLight){const _=t.get(b);_.skyColor.copy(b.color).multiplyScalar(H),_.groundColor.copy(b.groundColor).multiplyScalar(H),n.hemi[g]=_,g++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=c;const k=n.hash;(k.directionalLength!==u||k.pointLength!==m||k.spotLength!==y||k.rectAreaLength!==p||k.hemiLength!==g||k.numDirectionalShadows!==A||k.numPointShadows!==E||k.numSpotShadows!==w||k.numSpotMaps!==q||k.numLightProbes!==R)&&(n.directional.length=u,n.spot.length=y,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=w+q-N,n.spotLightMap.length=q,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=R,k.directionalLength=u,k.pointLength=m,k.spotLength=y,k.rectAreaLength=p,k.hemiLength=g,k.numDirectionalShadows=A,k.numPointShadows=E,k.numSpotShadows=w,k.numSpotMaps=q,k.numLightProbes=R,n.version=Z0++)}function l(h,d){let f=0,c=0,u=0,m=0,y=0;const p=d.matrixWorldInverse;for(let g=0,A=h.length;g<A;g++){const E=h[g];if(E.isDirectionalLight){const w=n.directional[f];w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),f++}else if(E.isSpotLight){const w=n.spot[u];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),u++}else if(E.isRectAreaLight){const w=n.rectArea[m];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(E.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(E.width*.5,0,0),w.halfHeight.set(0,E.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),m++}else if(E.isPointLight){const w=n.point[c];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(p),c++}else if(E.isHemisphereLight){const w=n.hemi[y];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(p),y++}}}return{setup:o,setupView:l,state:n}}function cc(i){const t=new J0(i),e=[],n=[];function s(d){h.camera=d,e.length=0,n.length=0}function r(d){e.push(d)}function a(d){n.push(d)}function o(){t.setup(e)}function l(d){t.setupView(e,d)}const h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Q0(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new cc(i),t.set(s,[o])):r>=a.length?(o=new cc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class tg extends As{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Iu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class eg extends As{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ng=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ig=`uniform sampler2D shadow_pass;
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
}`;function sg(i,t,e){let n=new rl;const s=new vt,r=new vt,a=new ge,o=new tg({depthPacking:Uu}),l=new eg,h={},d=e.maxTextureSize,f={[pi]:nn,[nn]:pi,[Pn]:Pn},c=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:ng,fragmentShader:ig}),u=c.clone();u.defines.HORIZONTAL_PASS=1;const m=new on;m.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Zt(m,c),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wc;let g=this.type;this.render=function(N,R,k){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||N.length===0)return;const J=i.getRenderTarget(),x=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(di),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const H=g!==Zn&&this.type===Zn,U=g===Zn&&this.type!==Zn;for(let $=0,_=N.length;$<_;$++){const M=N[$],v=M.shadow;if(v===void 0){console.warn("THREE.WebGLShadowMap:",M,"has no shadow.");continue}if(v.autoUpdate===!1&&v.needsUpdate===!1)continue;s.copy(v.mapSize);const L=v.getFrameExtents();if(s.multiply(L),r.copy(v.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/L.x),s.x=r.x*L.x,v.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/L.y),s.y=r.y*L.y,v.mapSize.y=r.y)),v.map===null||H===!0||U===!0){const I=this.type!==Zn?{minFilter:an,magFilter:an}:{};v.map!==null&&v.map.dispose(),v.map=new Ni(s.x,s.y,I),v.map.texture.name=M.name+".shadowMap",v.camera.updateProjectionMatrix()}i.setRenderTarget(v.map),i.clear();const D=v.getViewportCount();for(let I=0;I<D;I++){const K=v.getViewport(I);a.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),Y.viewport(a),v.updateMatrices(M,I),n=v.getFrustum(),w(R,k,v.camera,M,this.type)}v.isPointLightShadow!==!0&&this.type===Zn&&A(v,k),v.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(J,x,b)};function A(N,R){const k=t.update(y);c.defines.VSM_SAMPLES!==N.blurSamples&&(c.defines.VSM_SAMPLES=N.blurSamples,u.defines.VSM_SAMPLES=N.blurSamples,c.needsUpdate=!0,u.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Ni(s.x,s.y)),c.uniforms.shadow_pass.value=N.map.texture,c.uniforms.resolution.value=N.mapSize,c.uniforms.radius.value=N.radius,i.setRenderTarget(N.mapPass),i.clear(),i.renderBufferDirect(R,null,k,c,y,null),u.uniforms.shadow_pass.value=N.mapPass.texture,u.uniforms.resolution.value=N.mapSize,u.uniforms.radius.value=N.radius,i.setRenderTarget(N.map),i.clear(),i.renderBufferDirect(R,null,k,u,y,null)}function E(N,R,k,J){let x=null;const b=k.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(b!==void 0)x=b;else if(x=k.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const Y=x.uuid,H=R.uuid;let U=h[Y];U===void 0&&(U={},h[Y]=U);let $=U[H];$===void 0&&($=x.clone(),U[H]=$,R.addEventListener("dispose",q)),x=$}if(x.visible=R.visible,x.wireframe=R.wireframe,J===Zn?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:f[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,k.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const Y=i.properties.get(x);Y.light=k}return x}function w(N,R,k,J,x){if(N.visible===!1)return;if(N.layers.test(R.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&x===Zn)&&(!N.frustumCulled||n.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,N.matrixWorld);const H=t.update(N),U=N.material;if(Array.isArray(U)){const $=H.groups;for(let _=0,M=$.length;_<M;_++){const v=$[_],L=U[v.materialIndex];if(L&&L.visible){const D=E(N,L,J,x);N.onBeforeShadow(i,N,R,k,H,D,v),i.renderBufferDirect(k,null,H,D,N,v),N.onAfterShadow(i,N,R,k,H,D,v)}}}else if(U.visible){const $=E(N,U,J,x);N.onBeforeShadow(i,N,R,k,H,$,null),i.renderBufferDirect(k,null,H,$,N,null),N.onAfterShadow(i,N,R,k,H,$,null)}}const Y=N.children;for(let H=0,U=Y.length;H<U;H++)w(Y[H],R,k,J,x)}function q(N){N.target.removeEventListener("dispose",q);for(const k in h){const J=h[k],x=N.target.uuid;x in J&&(J[x].dispose(),delete J[x])}}}const rg={[no]:io,[so]:oo,[ro]:lo,[Ms]:ao,[io]:no,[oo]:so,[lo]:ro,[ao]:Ms};function ag(i){function t(){let z=!1;const Et=new ge;let it=null;const ut=new ge(0,0,0,0);return{setMask:function(gt){it!==gt&&!z&&(i.colorMask(gt,gt,gt,gt),it=gt)},setLocked:function(gt){z=gt},setClear:function(gt,xt,Wt,_e,We){We===!0&&(gt*=_e,xt*=_e,Wt*=_e),Et.set(gt,xt,Wt,_e),ut.equals(Et)===!1&&(i.clearColor(gt,xt,Wt,_e),ut.copy(Et))},reset:function(){z=!1,it=null,ut.set(-1,0,0,0)}}}function e(){let z=!1,Et=!1,it=null,ut=null,gt=null;return{setReversed:function(xt){Et=xt},setTest:function(xt){xt?et(i.DEPTH_TEST):lt(i.DEPTH_TEST)},setMask:function(xt){it!==xt&&!z&&(i.depthMask(xt),it=xt)},setFunc:function(xt){if(Et&&(xt=rg[xt]),ut!==xt){switch(xt){case no:i.depthFunc(i.NEVER);break;case io:i.depthFunc(i.ALWAYS);break;case so:i.depthFunc(i.LESS);break;case Ms:i.depthFunc(i.LEQUAL);break;case ro:i.depthFunc(i.EQUAL);break;case ao:i.depthFunc(i.GEQUAL);break;case oo:i.depthFunc(i.GREATER);break;case lo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ut=xt}},setLocked:function(xt){z=xt},setClear:function(xt){gt!==xt&&(i.clearDepth(xt),gt=xt)},reset:function(){z=!1,it=null,ut=null,gt=null}}}function n(){let z=!1,Et=null,it=null,ut=null,gt=null,xt=null,Wt=null,_e=null,We=null;return{setTest:function(jt){z||(jt?et(i.STENCIL_TEST):lt(i.STENCIL_TEST))},setMask:function(jt){Et!==jt&&!z&&(i.stencilMask(jt),Et=jt)},setFunc:function(jt,Ie,sn){(it!==jt||ut!==Ie||gt!==sn)&&(i.stencilFunc(jt,Ie,sn),it=jt,ut=Ie,gt=sn)},setOp:function(jt,Ie,sn){(xt!==jt||Wt!==Ie||_e!==sn)&&(i.stencilOp(jt,Ie,sn),xt=jt,Wt=Ie,_e=sn)},setLocked:function(jt){z=jt},setClear:function(jt){We!==jt&&(i.clearStencil(jt),We=jt)},reset:function(){z=!1,Et=null,it=null,ut=null,gt=null,xt=null,Wt=null,_e=null,We=null}}}const s=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap;let h={},d={},f=new WeakMap,c=[],u=null,m=!1,y=null,p=null,g=null,A=null,E=null,w=null,q=null,N=new Kt(0,0,0),R=0,k=!1,J=null,x=null,b=null,Y=null,H=null;const U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,_=0;const M=i.getParameter(i.VERSION);M.indexOf("WebGL")!==-1?(_=parseFloat(/^WebGL (\d)/.exec(M)[1]),$=_>=1):M.indexOf("OpenGL ES")!==-1&&(_=parseFloat(/^OpenGL ES (\d)/.exec(M)[1]),$=_>=2);let v=null,L={};const D=i.getParameter(i.SCISSOR_BOX),I=i.getParameter(i.VIEWPORT),K=new ge().fromArray(D),nt=new ge().fromArray(I);function P(z,Et,it,ut){const gt=new Uint8Array(4),xt=i.createTexture();i.bindTexture(z,xt),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Wt=0;Wt<it;Wt++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(Et,0,i.RGBA,1,1,ut,0,i.RGBA,i.UNSIGNED_BYTE,gt):i.texImage2D(Et+Wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,gt);return xt}const V={};V[i.TEXTURE_2D]=P(i.TEXTURE_2D,i.TEXTURE_2D,1),V[i.TEXTURE_CUBE_MAP]=P(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[i.TEXTURE_2D_ARRAY]=P(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),V[i.TEXTURE_3D]=P(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),et(i.DEPTH_TEST),r.setFunc(Ms),qt(!1),$t(xl),et(i.CULL_FACE),B(di);function et(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function lt(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function ft(z,Et){return d[z]!==Et?(i.bindFramebuffer(z,Et),d[z]=Et,z===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Et),z===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Et),!0):!1}function ht(z,Et){let it=c,ut=!1;if(z){it=f.get(Et),it===void 0&&(it=[],f.set(Et,it));const gt=z.textures;if(it.length!==gt.length||it[0]!==i.COLOR_ATTACHMENT0){for(let xt=0,Wt=gt.length;xt<Wt;xt++)it[xt]=i.COLOR_ATTACHMENT0+xt;it.length=gt.length,ut=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,ut=!0);ut&&i.drawBuffers(it)}function At(z){return u!==z?(i.useProgram(z),u=z,!0):!1}const zt={[Ai]:i.FUNC_ADD,[ou]:i.FUNC_SUBTRACT,[lu]:i.FUNC_REVERSE_SUBTRACT};zt[cu]=i.MIN,zt[hu]=i.MAX;const kt={[uu]:i.ZERO,[du]:i.ONE,[fu]:i.SRC_COLOR,[to]:i.SRC_ALPHA,[xu]:i.SRC_ALPHA_SATURATE,[_u]:i.DST_COLOR,[mu]:i.DST_ALPHA,[pu]:i.ONE_MINUS_SRC_COLOR,[eo]:i.ONE_MINUS_SRC_ALPHA,[vu]:i.ONE_MINUS_DST_COLOR,[gu]:i.ONE_MINUS_DST_ALPHA,[yu]:i.CONSTANT_COLOR,[Mu]:i.ONE_MINUS_CONSTANT_COLOR,[Su]:i.CONSTANT_ALPHA,[bu]:i.ONE_MINUS_CONSTANT_ALPHA};function B(z,Et,it,ut,gt,xt,Wt,_e,We,jt){if(z===di){m===!0&&(lt(i.BLEND),m=!1);return}if(m===!1&&(et(i.BLEND),m=!0),z!==au){if(z!==y||jt!==k){if((p!==Ai||E!==Ai)&&(i.blendEquation(i.FUNC_ADD),p=Ai,E=Ai),jt)switch(z){case Ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kr:i.blendFunc(i.ONE,i.ONE);break;case yl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ml:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case yl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ml:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}g=null,A=null,w=null,q=null,N.set(0,0,0),R=0,y=z,k=jt}return}gt=gt||Et,xt=xt||it,Wt=Wt||ut,(Et!==p||gt!==E)&&(i.blendEquationSeparate(zt[Et],zt[gt]),p=Et,E=gt),(it!==g||ut!==A||xt!==w||Wt!==q)&&(i.blendFuncSeparate(kt[it],kt[ut],kt[xt],kt[Wt]),g=it,A=ut,w=xt,q=Wt),(_e.equals(N)===!1||We!==R)&&(i.blendColor(_e.r,_e.g,_e.b,We),N.copy(_e),R=We),y=z,k=!1}function Ee(z,Et){z.side===Pn?lt(i.CULL_FACE):et(i.CULL_FACE);let it=z.side===nn;Et&&(it=!it),qt(it),z.blending===Ii&&z.transparent===!1?B(di):B(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),r.setFunc(z.depthFunc),r.setTest(z.depthTest),r.setMask(z.depthWrite),s.setMask(z.colorWrite);const ut=z.stencilWrite;a.setTest(ut),ut&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),fe(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function qt(z){J!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),J=z)}function $t(z){z!==su?(et(i.CULL_FACE),z!==x&&(z===xl?i.cullFace(i.BACK):z===ru?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):lt(i.CULL_FACE),x=z}function Ht(z){z!==b&&($&&i.lineWidth(z),b=z)}function fe(z,Et,it){z?(et(i.POLYGON_OFFSET_FILL),(Y!==Et||H!==it)&&(i.polygonOffset(Et,it),Y=Et,H=it)):lt(i.POLYGON_OFFSET_FILL)}function Ut(z){z?et(i.SCISSOR_TEST):lt(i.SCISSOR_TEST)}function C(z){z===void 0&&(z=i.TEXTURE0+U-1),v!==z&&(i.activeTexture(z),v=z)}function S(z,Et,it){it===void 0&&(v===null?it=i.TEXTURE0+U-1:it=v);let ut=L[it];ut===void 0&&(ut={type:void 0,texture:void 0},L[it]=ut),(ut.type!==z||ut.texture!==Et)&&(v!==it&&(i.activeTexture(it),v=it),i.bindTexture(z,Et||V[z]),ut.type=z,ut.texture=Et)}function Z(){const z=L[v];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function ot(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function pt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ct(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Lt(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function yt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Tt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ne(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function mt(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function St(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ft(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Nt(z){K.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),K.copy(z))}function wt(z){nt.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),nt.copy(z))}function ee(z,Et){let it=l.get(Et);it===void 0&&(it=new WeakMap,l.set(Et,it));let ut=it.get(z);ut===void 0&&(ut=i.getUniformBlockIndex(Et,z.name),it.set(z,ut))}function Xt(z,Et){const ut=l.get(Et).get(z);o.get(Et)!==ut&&(i.uniformBlockBinding(Et,ut,z.__bindingPointIndex),o.set(Et,ut))}function he(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},v=null,L={},d={},f=new WeakMap,c=[],u=null,m=!1,y=null,p=null,g=null,A=null,E=null,w=null,q=null,N=new Kt(0,0,0),R=0,k=!1,J=null,x=null,b=null,Y=null,H=null,K.set(0,0,i.canvas.width,i.canvas.height),nt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:et,disable:lt,bindFramebuffer:ft,drawBuffers:ht,useProgram:At,setBlending:B,setMaterial:Ee,setFlipSided:qt,setCullFace:$t,setLineWidth:Ht,setPolygonOffset:fe,setScissorTest:Ut,activeTexture:C,bindTexture:S,unbindTexture:Z,compressedTexImage2D:ot,compressedTexImage3D:pt,texImage2D:St,texImage3D:Ft,updateUBOMapping:ee,uniformBlockBinding:Xt,texStorage2D:ne,texStorage3D:mt,texSubImage2D:ct,texSubImage3D:Lt,compressedTexSubImage2D:yt,compressedTexSubImage3D:Tt,scissor:Nt,viewport:wt,reset:he}}function hc(i,t,e,n){const s=og(n);switch(e){case Jc:return i*t;case th:return i*t;case eh:return i*t*2;case jo:return i*t/s.components*s.byteLength;case Jo:return i*t/s.components*s.byteLength;case nh:return i*t*2/s.components*s.byteLength;case Qo:return i*t*2/s.components*s.byteLength;case Qc:return i*t*3/s.components*s.byteLength;case Dn:return i*t*4/s.components*s.byteLength;case tl:return i*t*4/s.components*s.byteLength;case Vr:case Gr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wr:case Xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case po:case go:return Math.max(i,16)*Math.max(t,8)/4;case fo:case mo:return Math.max(i,8)*Math.max(t,8)/2;case _o:case vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Mo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case So:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case bo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Eo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case wo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case To:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ao:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ro:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Co:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Po:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Lo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Do:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Io:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Yr:case Uo:case No:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ih:case Fo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Oo:case Bo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function og(i){switch(i){case Jn:case Kc:return{byteLength:1,components:1};case Js:case Zc:case ir:return{byteLength:2,components:1};case Ko:case Zo:return{byteLength:2,components:4};case Ui:case $o:case On:return{byteLength:4,components:1};case jc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function lg(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new vt,d=new WeakMap;let f;const c=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,S){return u?new OffscreenCanvas(C,S):ta("canvas")}function y(C,S,Z){let ot=1;const pt=Ut(C);if((pt.width>Z||pt.height>Z)&&(ot=Z/Math.max(pt.width,pt.height)),ot<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ct=Math.floor(ot*pt.width),Lt=Math.floor(ot*pt.height);f===void 0&&(f=m(ct,Lt));const yt=S?m(ct,Lt):f;return yt.width=ct,yt.height=Lt,yt.getContext("2d").drawImage(C,0,0,ct,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+ct+"x"+Lt+")."),yt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),C;return C}function p(C){return C.generateMipmaps&&C.minFilter!==an&&C.minFilter!==Sn}function g(C){i.generateMipmap(C)}function A(C,S,Z,ot,pt=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ct=S;if(S===i.RED&&(Z===i.FLOAT&&(ct=i.R32F),Z===i.HALF_FLOAT&&(ct=i.R16F),Z===i.UNSIGNED_BYTE&&(ct=i.R8)),S===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ct=i.R8UI),Z===i.UNSIGNED_SHORT&&(ct=i.R16UI),Z===i.UNSIGNED_INT&&(ct=i.R32UI),Z===i.BYTE&&(ct=i.R8I),Z===i.SHORT&&(ct=i.R16I),Z===i.INT&&(ct=i.R32I)),S===i.RG&&(Z===i.FLOAT&&(ct=i.RG32F),Z===i.HALF_FLOAT&&(ct=i.RG16F),Z===i.UNSIGNED_BYTE&&(ct=i.RG8)),S===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ct=i.RG8UI),Z===i.UNSIGNED_SHORT&&(ct=i.RG16UI),Z===i.UNSIGNED_INT&&(ct=i.RG32UI),Z===i.BYTE&&(ct=i.RG8I),Z===i.SHORT&&(ct=i.RG16I),Z===i.INT&&(ct=i.RG32I)),S===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ct=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(ct=i.RGB16UI),Z===i.UNSIGNED_INT&&(ct=i.RGB32UI),Z===i.BYTE&&(ct=i.RGB8I),Z===i.SHORT&&(ct=i.RGB16I),Z===i.INT&&(ct=i.RGB32I)),S===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ct=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(ct=i.RGBA16UI),Z===i.UNSIGNED_INT&&(ct=i.RGBA32UI),Z===i.BYTE&&(ct=i.RGBA8I),Z===i.SHORT&&(ct=i.RGBA16I),Z===i.INT&&(ct=i.RGBA32I)),S===i.RGB&&Z===i.UNSIGNED_INT_5_9_9_9_REV&&(ct=i.RGB9_E5),S===i.RGBA){const Lt=pt?Zr:ce.getTransfer(ot);Z===i.FLOAT&&(ct=i.RGBA32F),Z===i.HALF_FLOAT&&(ct=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(ct=Lt===Me?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT_4_4_4_4&&(ct=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(ct=i.RGB5_A1)}return(ct===i.R16F||ct===i.R32F||ct===i.RG16F||ct===i.RG32F||ct===i.RGBA16F||ct===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function E(C,S){let Z;return C?S===null||S===Ui||S===Es?Z=i.DEPTH24_STENCIL8:S===On?Z=i.DEPTH32F_STENCIL8:S===Js&&(Z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ui||S===Es?Z=i.DEPTH_COMPONENT24:S===On?Z=i.DEPTH_COMPONENT32F:S===Js&&(Z=i.DEPTH_COMPONENT16),Z}function w(C,S){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==an&&C.minFilter!==Sn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function q(C){const S=C.target;S.removeEventListener("dispose",q),R(S),S.isVideoTexture&&d.delete(S)}function N(C){const S=C.target;S.removeEventListener("dispose",N),J(S)}function R(C){const S=n.get(C);if(S.__webglInit===void 0)return;const Z=C.source,ot=c.get(Z);if(ot){const pt=ot[S.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&k(C),Object.keys(ot).length===0&&c.delete(Z)}n.remove(C)}function k(C){const S=n.get(C);i.deleteTexture(S.__webglTexture);const Z=C.source,ot=c.get(Z);delete ot[S.__cacheKey],a.memory.textures--}function J(C){const S=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(S.__webglFramebuffer[ot]))for(let pt=0;pt<S.__webglFramebuffer[ot].length;pt++)i.deleteFramebuffer(S.__webglFramebuffer[ot][pt]);else i.deleteFramebuffer(S.__webglFramebuffer[ot]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[ot])}else{if(Array.isArray(S.__webglFramebuffer))for(let ot=0;ot<S.__webglFramebuffer.length;ot++)i.deleteFramebuffer(S.__webglFramebuffer[ot]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ot=0;ot<S.__webglColorRenderbuffer.length;ot++)S.__webglColorRenderbuffer[ot]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[ot]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const Z=C.textures;for(let ot=0,pt=Z.length;ot<pt;ot++){const ct=n.get(Z[ot]);ct.__webglTexture&&(i.deleteTexture(ct.__webglTexture),a.memory.textures--),n.remove(Z[ot])}n.remove(C)}let x=0;function b(){x=0}function Y(){const C=x;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),x+=1,C}function H(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function U(C,S){const Z=n.get(C);if(C.isVideoTexture&&Ht(C),C.isRenderTargetTexture===!1&&C.version>0&&Z.__version!==C.version){const ot=C.image;if(ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(Z,C,S);return}}e.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+S)}function $(C,S){const Z=n.get(C);if(C.version>0&&Z.__version!==C.version){nt(Z,C,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+S)}function _(C,S){const Z=n.get(C);if(C.version>0&&Z.__version!==C.version){nt(Z,C,S);return}e.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+S)}function M(C,S){const Z=n.get(C);if(C.version>0&&Z.__version!==C.version){P(Z,C,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+S)}const v={[mi]:i.REPEAT,[Li]:i.CLAMP_TO_EDGE,[uo]:i.MIRRORED_REPEAT},L={[an]:i.NEAREST,[Du]:i.NEAREST_MIPMAP_NEAREST,[cr]:i.NEAREST_MIPMAP_LINEAR,[Sn]:i.LINEAR,[da]:i.LINEAR_MIPMAP_NEAREST,[Di]:i.LINEAR_MIPMAP_LINEAR},D={[Fu]:i.NEVER,[Vu]:i.ALWAYS,[Ou]:i.LESS,[rh]:i.LEQUAL,[Bu]:i.EQUAL,[Hu]:i.GEQUAL,[zu]:i.GREATER,[ku]:i.NOTEQUAL};function I(C,S){if(S.type===On&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Sn||S.magFilter===da||S.magFilter===cr||S.magFilter===Di||S.minFilter===Sn||S.minFilter===da||S.minFilter===cr||S.minFilter===Di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,v[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,v[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,v[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,L[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,L[S.minFilter]),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,D[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===an||S.minFilter!==cr&&S.minFilter!==Di||S.type===On&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const Z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function K(C,S){let Z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",q));const ot=S.source;let pt=c.get(ot);pt===void 0&&(pt={},c.set(ot,pt));const ct=H(S);if(ct!==C.__cacheKey){pt[ct]===void 0&&(pt[ct]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),pt[ct].usedTimes++;const Lt=pt[C.__cacheKey];Lt!==void 0&&(pt[C.__cacheKey].usedTimes--,Lt.usedTimes===0&&k(S)),C.__cacheKey=ct,C.__webglTexture=pt[ct].texture}return Z}function nt(C,S,Z){let ot=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ot=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ot=i.TEXTURE_3D);const pt=K(C,S),ct=S.source;e.bindTexture(ot,C.__webglTexture,i.TEXTURE0+Z);const Lt=n.get(ct);if(ct.version!==Lt.__version||pt===!0){e.activeTexture(i.TEXTURE0+Z);const yt=ce.getPrimaries(ce.workingColorSpace),Tt=S.colorSpace===ui?null:ce.getPrimaries(S.colorSpace),ne=S.colorSpace===ui||yt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let mt=y(S.image,!1,s.maxTextureSize);mt=fe(S,mt);const St=r.convert(S.format,S.colorSpace),Ft=r.convert(S.type);let Nt=A(S.internalFormat,St,Ft,S.colorSpace,S.isVideoTexture);I(ot,S);let wt;const ee=S.mipmaps,Xt=S.isVideoTexture!==!0,he=Lt.__version===void 0||pt===!0,z=ct.dataReady,Et=w(S,mt);if(S.isDepthTexture)Nt=E(S.format===ws,S.type),he&&(Xt?e.texStorage2D(i.TEXTURE_2D,1,Nt,mt.width,mt.height):e.texImage2D(i.TEXTURE_2D,0,Nt,mt.width,mt.height,0,St,Ft,null));else if(S.isDataTexture)if(ee.length>0){Xt&&he&&e.texStorage2D(i.TEXTURE_2D,Et,Nt,ee[0].width,ee[0].height);for(let it=0,ut=ee.length;it<ut;it++)wt=ee[it],Xt?z&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,wt.width,wt.height,St,Ft,wt.data):e.texImage2D(i.TEXTURE_2D,it,Nt,wt.width,wt.height,0,St,Ft,wt.data);S.generateMipmaps=!1}else Xt?(he&&e.texStorage2D(i.TEXTURE_2D,Et,Nt,mt.width,mt.height),z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt.width,mt.height,St,Ft,mt.data)):e.texImage2D(i.TEXTURE_2D,0,Nt,mt.width,mt.height,0,St,Ft,mt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Xt&&he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Nt,ee[0].width,ee[0].height,mt.depth);for(let it=0,ut=ee.length;it<ut;it++)if(wt=ee[it],S.format!==Dn)if(St!==null)if(Xt){if(z)if(S.layerUpdates.size>0){const gt=hc(wt.width,wt.height,S.format,S.type);for(const xt of S.layerUpdates){const Wt=wt.data.subarray(xt*gt/wt.data.BYTES_PER_ELEMENT,(xt+1)*gt/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,xt,wt.width,wt.height,1,St,Wt,0,0)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,wt.width,wt.height,mt.depth,St,wt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,Nt,wt.width,wt.height,mt.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,wt.width,wt.height,mt.depth,St,Ft,wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,Nt,wt.width,wt.height,mt.depth,0,St,Ft,wt.data)}else{Xt&&he&&e.texStorage2D(i.TEXTURE_2D,Et,Nt,ee[0].width,ee[0].height);for(let it=0,ut=ee.length;it<ut;it++)wt=ee[it],S.format!==Dn?St!==null?Xt?z&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,wt.width,wt.height,St,wt.data):e.compressedTexImage2D(i.TEXTURE_2D,it,Nt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?z&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,wt.width,wt.height,St,Ft,wt.data):e.texImage2D(i.TEXTURE_2D,it,Nt,wt.width,wt.height,0,St,Ft,wt.data)}else if(S.isDataArrayTexture)if(Xt){if(he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Nt,mt.width,mt.height,mt.depth),z)if(S.layerUpdates.size>0){const it=hc(mt.width,mt.height,S.format,S.type);for(const ut of S.layerUpdates){const gt=mt.data.subarray(ut*it/mt.data.BYTES_PER_ELEMENT,(ut+1)*it/mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ut,mt.width,mt.height,1,St,Ft,gt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,St,Ft,mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,mt.width,mt.height,mt.depth,0,St,Ft,mt.data);else if(S.isData3DTexture)Xt?(he&&e.texStorage3D(i.TEXTURE_3D,Et,Nt,mt.width,mt.height,mt.depth),z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,St,Ft,mt.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,mt.width,mt.height,mt.depth,0,St,Ft,mt.data);else if(S.isFramebufferTexture){if(he)if(Xt)e.texStorage2D(i.TEXTURE_2D,Et,Nt,mt.width,mt.height);else{let it=mt.width,ut=mt.height;for(let gt=0;gt<Et;gt++)e.texImage2D(i.TEXTURE_2D,gt,Nt,it,ut,0,St,Ft,null),it>>=1,ut>>=1}}else if(ee.length>0){if(Xt&&he){const it=Ut(ee[0]);e.texStorage2D(i.TEXTURE_2D,Et,Nt,it.width,it.height)}for(let it=0,ut=ee.length;it<ut;it++)wt=ee[it],Xt?z&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,St,Ft,wt):e.texImage2D(i.TEXTURE_2D,it,Nt,St,Ft,wt);S.generateMipmaps=!1}else if(Xt){if(he){const it=Ut(mt);e.texStorage2D(i.TEXTURE_2D,Et,Nt,it.width,it.height)}z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,Ft,mt)}else e.texImage2D(i.TEXTURE_2D,0,Nt,St,Ft,mt);p(S)&&g(ot),Lt.__version=ct.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function P(C,S,Z){if(S.image.length!==6)return;const ot=K(C,S),pt=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+Z);const ct=n.get(pt);if(pt.version!==ct.__version||ot===!0){e.activeTexture(i.TEXTURE0+Z);const Lt=ce.getPrimaries(ce.workingColorSpace),yt=S.colorSpace===ui?null:ce.getPrimaries(S.colorSpace),Tt=S.colorSpace===ui||Lt===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const ne=S.isCompressedTexture||S.image[0].isCompressedTexture,mt=S.image[0]&&S.image[0].isDataTexture,St=[];for(let ut=0;ut<6;ut++)!ne&&!mt?St[ut]=y(S.image[ut],!0,s.maxCubemapSize):St[ut]=mt?S.image[ut].image:S.image[ut],St[ut]=fe(S,St[ut]);const Ft=St[0],Nt=r.convert(S.format,S.colorSpace),wt=r.convert(S.type),ee=A(S.internalFormat,Nt,wt,S.colorSpace),Xt=S.isVideoTexture!==!0,he=ct.__version===void 0||ot===!0,z=pt.dataReady;let Et=w(S,Ft);I(i.TEXTURE_CUBE_MAP,S);let it;if(ne){Xt&&he&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,ee,Ft.width,Ft.height);for(let ut=0;ut<6;ut++){it=St[ut].mipmaps;for(let gt=0;gt<it.length;gt++){const xt=it[gt];S.format!==Dn?Nt!==null?Xt?z&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,gt,0,0,xt.width,xt.height,Nt,xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,gt,ee,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,gt,0,0,xt.width,xt.height,Nt,wt,xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,gt,ee,xt.width,xt.height,0,Nt,wt,xt.data)}}}else{if(it=S.mipmaps,Xt&&he){it.length>0&&Et++;const ut=Ut(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,ee,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(mt){Xt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,St[ut].width,St[ut].height,Nt,wt,St[ut].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,ee,St[ut].width,St[ut].height,0,Nt,wt,St[ut].data);for(let gt=0;gt<it.length;gt++){const Wt=it[gt].image[ut].image;Xt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,gt+1,0,0,Wt.width,Wt.height,Nt,wt,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,gt+1,ee,Wt.width,Wt.height,0,Nt,wt,Wt.data)}}else{Xt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Nt,wt,St[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,ee,Nt,wt,St[ut]);for(let gt=0;gt<it.length;gt++){const xt=it[gt];Xt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,gt+1,0,0,Nt,wt,xt.image[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,gt+1,ee,Nt,wt,xt.image[ut])}}}p(S)&&g(i.TEXTURE_CUBE_MAP),ct.__version=pt.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function V(C,S,Z,ot,pt,ct){const Lt=r.convert(Z.format,Z.colorSpace),yt=r.convert(Z.type),Tt=A(Z.internalFormat,Lt,yt,Z.colorSpace);if(!n.get(S).__hasExternalTextures){const mt=Math.max(1,S.width>>ct),St=Math.max(1,S.height>>ct);pt===i.TEXTURE_3D||pt===i.TEXTURE_2D_ARRAY?e.texImage3D(pt,ct,Tt,mt,St,S.depth,0,Lt,yt,null):e.texImage2D(pt,ct,Tt,mt,St,0,Lt,yt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),$t(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,pt,n.get(Z).__webglTexture,0,qt(S)):(pt===i.TEXTURE_2D||pt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ot,pt,n.get(Z).__webglTexture,ct),e.bindFramebuffer(i.FRAMEBUFFER,null)}function et(C,S,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer){const ot=S.depthTexture,pt=ot&&ot.isDepthTexture?ot.type:null,ct=E(S.stencilBuffer,pt),Lt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=qt(S);$t(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt,ct,S.width,S.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,ct,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ct,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Lt,i.RENDERBUFFER,C)}else{const ot=S.textures;for(let pt=0;pt<ot.length;pt++){const ct=ot[pt],Lt=r.convert(ct.format,ct.colorSpace),yt=r.convert(ct.type),Tt=A(ct.internalFormat,Lt,yt,ct.colorSpace),ne=qt(S);Z&&$t(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,Tt,S.width,S.height):$t(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,Tt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function lt(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),U(S.depthTexture,0);const ot=n.get(S.depthTexture).__webglTexture,pt=qt(S);if(S.depthTexture.format===xs)$t(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0,pt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0);else if(S.depthTexture.format===ws)$t(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0,pt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function ft(C){const S=n.get(C),Z=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const ot=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ot){const pt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ot.removeEventListener("dispose",pt)};ot.addEventListener("dispose",pt),S.__depthDisposeCallback=pt}S.__boundDepthTexture=ot}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");lt(S.__webglFramebuffer,C)}else if(Z){S.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ot]),S.__webglDepthbuffer[ot]===void 0)S.__webglDepthbuffer[ot]=i.createRenderbuffer(),et(S.__webglDepthbuffer[ot],C,!1);else{const pt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=S.__webglDepthbuffer[ot];i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,ct)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),et(S.__webglDepthbuffer,C,!1);else{const ot=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,pt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(C,S,Z){const ot=n.get(C);S!==void 0&&V(ot.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&ft(C)}function At(C){const S=C.texture,Z=n.get(C),ot=n.get(S);C.addEventListener("dispose",N);const pt=C.textures,ct=C.isWebGLCubeRenderTarget===!0,Lt=pt.length>1;if(Lt||(ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture()),ot.__version=S.version,a.memory.textures++),ct){Z.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(S.mipmaps&&S.mipmaps.length>0){Z.__webglFramebuffer[yt]=[];for(let Tt=0;Tt<S.mipmaps.length;Tt++)Z.__webglFramebuffer[yt][Tt]=i.createFramebuffer()}else Z.__webglFramebuffer[yt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){Z.__webglFramebuffer=[];for(let yt=0;yt<S.mipmaps.length;yt++)Z.__webglFramebuffer[yt]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(Lt)for(let yt=0,Tt=pt.length;yt<Tt;yt++){const ne=n.get(pt[yt]);ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&$t(C)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let yt=0;yt<pt.length;yt++){const Tt=pt[yt];Z.__webglColorRenderbuffer[yt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[yt]);const ne=r.convert(Tt.format,Tt.colorSpace),mt=r.convert(Tt.type),St=A(Tt.internalFormat,ne,mt,Tt.colorSpace,C.isXRRenderTarget===!0),Ft=qt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,St,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,Z.__webglColorRenderbuffer[yt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),et(Z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ct){e.bindTexture(i.TEXTURE_CUBE_MAP,ot.__webglTexture),I(i.TEXTURE_CUBE_MAP,S);for(let yt=0;yt<6;yt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Tt=0;Tt<S.mipmaps.length;Tt++)V(Z.__webglFramebuffer[yt][Tt],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Tt);else V(Z.__webglFramebuffer[yt],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);p(S)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let yt=0,Tt=pt.length;yt<Tt;yt++){const ne=pt[yt],mt=n.get(ne);e.bindTexture(i.TEXTURE_2D,mt.__webglTexture),I(i.TEXTURE_2D,ne),V(Z.__webglFramebuffer,C,ne,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,0),p(ne)&&g(i.TEXTURE_2D)}e.unbindTexture()}else{let yt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(yt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,ot.__webglTexture),I(yt,S),S.mipmaps&&S.mipmaps.length>0)for(let Tt=0;Tt<S.mipmaps.length;Tt++)V(Z.__webglFramebuffer[Tt],C,S,i.COLOR_ATTACHMENT0,yt,Tt);else V(Z.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,yt,0);p(S)&&g(yt),e.unbindTexture()}C.depthBuffer&&ft(C)}function zt(C){const S=C.textures;for(let Z=0,ot=S.length;Z<ot;Z++){const pt=S[Z];if(p(pt)){const ct=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Lt=n.get(pt).__webglTexture;e.bindTexture(ct,Lt),g(ct),e.unbindTexture()}}}const kt=[],B=[];function Ee(C){if(C.samples>0){if($t(C)===!1){const S=C.textures,Z=C.width,ot=C.height;let pt=i.COLOR_BUFFER_BIT;const ct=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=n.get(C),yt=S.length>1;if(yt)for(let Tt=0;Tt<S.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Tt=0;Tt<S.length;Tt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(pt|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(pt|=i.STENCIL_BUFFER_BIT)),yt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Tt]);const ne=n.get(S[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ne,0)}i.blitFramebuffer(0,0,Z,ot,0,0,Z,ot,pt,i.NEAREST),l===!0&&(kt.length=0,B.length=0,kt.push(i.COLOR_ATTACHMENT0+Tt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(kt.push(ct),B.push(ct),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,kt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),yt)for(let Tt=0;Tt<S.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Tt]);const ne=n.get(S[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,ne,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function qt(C){return Math.min(s.maxSamples,C.samples)}function $t(C){const S=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ht(C){const S=a.render.frame;d.get(C)!==S&&(d.set(C,S),C.update())}function fe(C,S){const Z=C.colorSpace,ot=C.format,pt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||Z!==_i&&Z!==ui&&(ce.getTransfer(Z)===Me?(ot!==Dn||pt!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),S}function Ut(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=Y,this.resetTextureUnits=b,this.setTexture2D=U,this.setTexture2DArray=$,this.setTexture3D=_,this.setTextureCube=M,this.rebindTextures=ht,this.setupRenderTarget=At,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=V,this.useMultisampledRTT=$t}function cg(i,t){function e(n,s=ui){let r;const a=ce.getTransfer(s);if(n===Jn)return i.UNSIGNED_BYTE;if(n===Ko)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Zo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===jc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Kc)return i.BYTE;if(n===Zc)return i.SHORT;if(n===Js)return i.UNSIGNED_SHORT;if(n===$o)return i.INT;if(n===Ui)return i.UNSIGNED_INT;if(n===On)return i.FLOAT;if(n===ir)return i.HALF_FLOAT;if(n===Jc)return i.ALPHA;if(n===Qc)return i.RGB;if(n===Dn)return i.RGBA;if(n===th)return i.LUMINANCE;if(n===eh)return i.LUMINANCE_ALPHA;if(n===xs)return i.DEPTH_COMPONENT;if(n===ws)return i.DEPTH_STENCIL;if(n===jo)return i.RED;if(n===Jo)return i.RED_INTEGER;if(n===nh)return i.RG;if(n===Qo)return i.RG_INTEGER;if(n===tl)return i.RGBA_INTEGER;if(n===Vr||n===Gr||n===Wr||n===Xr)if(a===Me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fo||n===po||n===mo||n===go)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===po)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===mo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===go)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_o||n===vo||n===xo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_o||n===vo)return a===Me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xo)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===yo||n===Mo||n===So||n===bo||n===Eo||n===wo||n===To||n===Ao||n===Ro||n===Co||n===Po||n===Lo||n===Do||n===Io)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===yo)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Mo)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===So)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bo)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Eo)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wo)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===To)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ao)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ro)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Co)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Po)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Lo)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Do)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Io)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yr||n===Uo||n===No)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Yr)return a===Me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Uo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===No)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ih||n===Fo||n===Oo||n===Bo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Yr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Fo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class hg extends pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class en extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ug={type:"move"};class ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new en,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new en,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new en,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(const y of t.hand.values()){const p=e.getJointPose(y,n),g=this._getHandJoint(h,y);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const d=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],c=d.position.distanceTo(f.position),u=.02,m=.005;h.inputState.pinching&&c>u+m?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&c<=u-m&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ug)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new en;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const dg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fg=`
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

}`;class pg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ke,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new gi({vertexShader:dg,fragmentShader:fg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Zt(new In(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mg extends Oi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,h=null,d=null,f=null,c=null,u=null,m=null;const y=new pg,p=e.getContextAttributes();let g=null,A=null;const E=[],w=[],q=new vt;let N=null;const R=new pn;R.layers.enable(1),R.viewport=new ge;const k=new pn;k.layers.enable(2),k.viewport=new ge;const J=[R,k],x=new hg;x.layers.enable(1),x.layers.enable(2);let b=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let V=E[P];return V===void 0&&(V=new ka,E[P]=V),V.getTargetRaySpace()},this.getControllerGrip=function(P){let V=E[P];return V===void 0&&(V=new ka,E[P]=V),V.getGripSpace()},this.getHand=function(P){let V=E[P];return V===void 0&&(V=new ka,E[P]=V),V.getHandSpace()};function H(P){const V=w.indexOf(P.inputSource);if(V===-1)return;const et=E[V];et!==void 0&&(et.update(P.inputSource,P.frame,h||a),et.dispatchEvent({type:P.type,data:P.inputSource}))}function U(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",$);for(let P=0;P<E.length;P++){const V=w[P];V!==null&&(w[P]=null,E[P].disconnect(V))}b=null,Y=null,y.reset(),t.setRenderTarget(g),u=null,c=null,f=null,s=null,A=null,nt.stop(),n.isPresenting=!1,t.setPixelRatio(N),t.setSize(q.width,q.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){r=P,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){o=P,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(P){h=P},this.getBaseLayer=function(){return c!==null?c:u},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(P){if(s=P,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",U),s.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await e.makeXRCompatible(),N=t.getPixelRatio(),t.getSize(q),s.renderState.layers===void 0){const V={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,V),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),A=new Ni(u.framebufferWidth,u.framebufferHeight,{format:Dn,type:Jn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let V=null,et=null,lt=null;p.depth&&(lt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,V=p.stencil?ws:xs,et=p.stencil?Es:Ui);const ft={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};f=new XRWebGLBinding(s,e),c=f.createProjectionLayer(ft),s.updateRenderState({layers:[c]}),t.setPixelRatio(1),t.setSize(c.textureWidth,c.textureHeight,!1),A=new Ni(c.textureWidth,c.textureHeight,{format:Dn,type:Jn,depthTexture:new _h(c.textureWidth,c.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await s.requestReferenceSpace(o),nt.setContext(s),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function $(P){for(let V=0;V<P.removed.length;V++){const et=P.removed[V],lt=w.indexOf(et);lt>=0&&(w[lt]=null,E[lt].disconnect(et))}for(let V=0;V<P.added.length;V++){const et=P.added[V];let lt=w.indexOf(et);if(lt===-1){for(let ht=0;ht<E.length;ht++)if(ht>=w.length){w.push(et),lt=ht;break}else if(w[ht]===null){w[ht]=et,lt=ht;break}if(lt===-1)break}const ft=E[lt];ft&&ft.connect(et)}}const _=new O,M=new O;function v(P,V,et){_.setFromMatrixPosition(V.matrixWorld),M.setFromMatrixPosition(et.matrixWorld);const lt=_.distanceTo(M),ft=V.projectionMatrix.elements,ht=et.projectionMatrix.elements,At=ft[14]/(ft[10]-1),zt=ft[14]/(ft[10]+1),kt=(ft[9]+1)/ft[5],B=(ft[9]-1)/ft[5],Ee=(ft[8]-1)/ft[0],qt=(ht[8]+1)/ht[0],$t=At*Ee,Ht=At*qt,fe=lt/(-Ee+qt),Ut=fe*-Ee;if(V.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(Ut),P.translateZ(fe),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert(),ft[10]===-1)P.projectionMatrix.copy(V.projectionMatrix),P.projectionMatrixInverse.copy(V.projectionMatrixInverse);else{const C=At+fe,S=zt+fe,Z=$t-Ut,ot=Ht+(lt-Ut),pt=kt*zt/S*C,ct=B*zt/S*C;P.projectionMatrix.makePerspective(Z,ot,pt,ct,C,S),P.projectionMatrixInverse.copy(P.projectionMatrix).invert()}}function L(P,V){V===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(V.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(s===null)return;let V=P.near,et=P.far;y.texture!==null&&(y.depthNear>0&&(V=y.depthNear),y.depthFar>0&&(et=y.depthFar)),x.near=k.near=R.near=V,x.far=k.far=R.far=et,(b!==x.near||Y!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),b=x.near,Y=x.far);const lt=P.parent,ft=x.cameras;L(x,lt);for(let ht=0;ht<ft.length;ht++)L(ft[ht],lt);ft.length===2?v(x,R,k):x.projectionMatrix.copy(R.projectionMatrix),D(P,x,lt)};function D(P,V,et){et===null?P.matrix.copy(V.matrixWorld):(P.matrix.copy(et.matrixWorld),P.matrix.invert(),P.matrix.multiply(V.matrixWorld)),P.matrix.decompose(P.position,P.quaternion,P.scale),P.updateMatrixWorld(!0),P.projectionMatrix.copy(V.projectionMatrix),P.projectionMatrixInverse.copy(V.projectionMatrixInverse),P.isPerspectiveCamera&&(P.fov=Qs*2*Math.atan(1/P.projectionMatrix.elements[5]),P.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(c===null&&u===null))return l},this.setFoveation=function(P){l=P,c!==null&&(c.fixedFoveation=P),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=P)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let I=null;function K(P,V){if(d=V.getViewerPose(h||a),m=V,d!==null){const et=d.views;u!==null&&(t.setRenderTargetFramebuffer(A,u.framebuffer),t.setRenderTarget(A));let lt=!1;et.length!==x.cameras.length&&(x.cameras.length=0,lt=!0);for(let ht=0;ht<et.length;ht++){const At=et[ht];let zt=null;if(u!==null)zt=u.getViewport(At);else{const B=f.getViewSubImage(c,At);zt=B.viewport,ht===0&&(t.setRenderTargetTextures(A,B.colorTexture,c.ignoreDepthValues?void 0:B.depthStencilTexture),t.setRenderTarget(A))}let kt=J[ht];kt===void 0&&(kt=new pn,kt.layers.enable(ht),kt.viewport=new ge,J[ht]=kt),kt.matrix.fromArray(At.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(At.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(zt.x,zt.y,zt.width,zt.height),ht===0&&(x.matrix.copy(kt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),lt===!0&&x.cameras.push(kt)}const ft=s.enabledFeatures;if(ft&&ft.includes("depth-sensing")){const ht=f.getDepthInformation(et[0]);ht&&ht.isValid&&ht.texture&&y.init(t,ht,s.renderState)}}for(let et=0;et<E.length;et++){const lt=w[et],ft=E[et];lt!==null&&ft!==void 0&&ft.update(lt,V,h||a)}I&&I(P,V),V.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:V}),m=null}const nt=new mh;nt.setAnimationLoop(K),this.setAnimationLoop=function(P){I=P},this.dispose=function(){}}}const wi=new wn,gg=new ae;function _g(i,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,dh(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,A,E,w){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(p,g):g.isMeshToonMaterial?(r(p,g),f(p,g)):g.isMeshPhongMaterial?(r(p,g),d(p,g)):g.isMeshStandardMaterial?(r(p,g),c(p,g),g.isMeshPhysicalMaterial&&u(p,g,w)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),y(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,A,E):g.isSpriteMaterial?h(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===nn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===nn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const A=t.get(g),E=A.envMap,w=A.envMapRotation;E&&(p.envMap.value=E,wi.copy(w),wi.x*=-1,wi.y*=-1,wi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),p.envMapRotation.value.setFromMatrix4(gg.makeRotationFromEuler(wi)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,A,E){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*A,p.scale.value=E*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function d(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function f(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function c(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function u(p,g,A){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===nn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function y(p,g){const A=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function vg(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,E){const w=E.program;n.uniformBlockBinding(A,w)}function h(A,E){let w=s[A.id];w===void 0&&(m(A),w=d(A),s[A.id]=w,A.addEventListener("dispose",p));const q=E.program;n.updateUBOMapping(A,q);const N=t.render.frame;r[A.id]!==N&&(c(A),r[A.id]=N)}function d(A){const E=f();A.__bindingPointIndex=E;const w=i.createBuffer(),q=A.__size,N=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,q,N),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,w),w}function f(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(A){const E=s[A.id],w=A.uniforms,q=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let N=0,R=w.length;N<R;N++){const k=Array.isArray(w[N])?w[N]:[w[N]];for(let J=0,x=k.length;J<x;J++){const b=k[J];if(u(b,N,J,q)===!0){const Y=b.__offset,H=Array.isArray(b.value)?b.value:[b.value];let U=0;for(let $=0;$<H.length;$++){const _=H[$],M=y(_);typeof _=="number"||typeof _=="boolean"?(b.__data[0]=_,i.bufferSubData(i.UNIFORM_BUFFER,Y+U,b.__data)):_.isMatrix3?(b.__data[0]=_.elements[0],b.__data[1]=_.elements[1],b.__data[2]=_.elements[2],b.__data[3]=0,b.__data[4]=_.elements[3],b.__data[5]=_.elements[4],b.__data[6]=_.elements[5],b.__data[7]=0,b.__data[8]=_.elements[6],b.__data[9]=_.elements[7],b.__data[10]=_.elements[8],b.__data[11]=0):(_.toArray(b.__data,U),U+=M.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(A,E,w,q){const N=A.value,R=E+"_"+w;if(q[R]===void 0)return typeof N=="number"||typeof N=="boolean"?q[R]=N:q[R]=N.clone(),!0;{const k=q[R];if(typeof N=="number"||typeof N=="boolean"){if(k!==N)return q[R]=N,!0}else if(k.equals(N)===!1)return k.copy(N),!0}return!1}function m(A){const E=A.uniforms;let w=0;const q=16;for(let R=0,k=E.length;R<k;R++){const J=Array.isArray(E[R])?E[R]:[E[R]];for(let x=0,b=J.length;x<b;x++){const Y=J[x],H=Array.isArray(Y.value)?Y.value:[Y.value];for(let U=0,$=H.length;U<$;U++){const _=H[U],M=y(_),v=w%q,L=v%M.boundary,D=v+L;w+=L,D!==0&&q-D<M.storage&&(w+=q-D),Y.__data=new Float32Array(M.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=w,w+=M.storage}}}const N=w%q;return N>0&&(w+=q-N),A.__size=w,A.__cache={},this}function y(A){const E={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(E.boundary=4,E.storage=4):A.isVector2?(E.boundary=8,E.storage=8):A.isVector3||A.isColor?(E.boundary=16,E.storage=12):A.isVector4?(E.boundary=16,E.storage=16):A.isMatrix3?(E.boundary=48,E.storage=48):A.isMatrix4?(E.boundary=64,E.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),E}function p(A){const E=A.target;E.removeEventListener("dispose",p);const w=a.indexOf(E.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function g(){for(const A in s)i.deleteBuffer(s[A]);a=[],s={},r={}}return{bind:l,update:h,dispose:g}}class xg{constructor(t={}){const{canvas:e=rd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let c;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");c=n.getContextAttributes().alpha}else c=a;const u=new Uint32Array(4),m=new Int32Array(4);let y=null,p=null;const g=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$e,this.toneMapping=fi,this.toneMappingExposure=1;const E=this;let w=!1,q=0,N=0,R=null,k=-1,J=null;const x=new ge,b=new ge;let Y=null;const H=new Kt(0);let U=0,$=e.width,_=e.height,M=1,v=null,L=null;const D=new ge(0,0,$,_),I=new ge(0,0,$,_);let K=!1;const nt=new rl;let P=!1,V=!1;const et=new ae,lt=new ae,ft=new O,ht=new ge,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function kt(){return R===null?M:1}let B=n;function Ee(T,G){return e.getContext(T,G)}try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${qo}`),e.addEventListener("webglcontextlost",ut,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",xt,!1),B===null){const G="webgl2";if(B=Ee(G,T),B===null)throw Ee(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let qt,$t,Ht,fe,Ut,C,S,Z,ot,pt,ct,Lt,yt,Tt,ne,mt,St,Ft,Nt,wt,ee,Xt,he,z;function Et(){qt=new Em(B),qt.init(),Xt=new cg(B,qt),$t=new vm(B,qt,t,Xt),Ht=new ag(B),$t.reverseDepthBuffer&&Ht.buffers.depth.setReversed(!0),fe=new Am(B),Ut=new X0,C=new lg(B,qt,Ht,Ut,$t,Xt,fe),S=new ym(E),Z=new bm(E),ot=new Id(B),he=new gm(B,ot),pt=new wm(B,ot,fe,he),ct=new Cm(B,pt,ot,fe),Nt=new Rm(B,$t,C),mt=new xm(Ut),Lt=new W0(E,S,Z,qt,$t,he,mt),yt=new _g(E,Ut),Tt=new q0,ne=new Q0(qt),Ft=new mm(E,S,Z,Ht,ct,c,l),St=new sg(E,ct,$t),z=new vg(B,fe,$t,Ht),wt=new _m(B,qt,fe),ee=new Tm(B,qt,fe),fe.programs=Lt.programs,E.capabilities=$t,E.extensions=qt,E.properties=Ut,E.renderLists=Tt,E.shadowMap=St,E.state=Ht,E.info=fe}Et();const it=new mg(E,B);this.xr=it,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const T=qt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=qt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return M},this.setPixelRatio=function(T){T!==void 0&&(M=T,this.setSize($,_,!1))},this.getSize=function(T){return T.set($,_)},this.setSize=function(T,G,j=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=T,_=G,e.width=Math.floor(T*M),e.height=Math.floor(G*M),j===!0&&(e.style.width=T+"px",e.style.height=G+"px"),this.setViewport(0,0,T,G)},this.getDrawingBufferSize=function(T){return T.set($*M,_*M).floor()},this.setDrawingBufferSize=function(T,G,j){$=T,_=G,M=j,e.width=Math.floor(T*j),e.height=Math.floor(G*j),this.setViewport(0,0,T,G)},this.getCurrentViewport=function(T){return T.copy(x)},this.getViewport=function(T){return T.copy(D)},this.setViewport=function(T,G,j,Q){T.isVector4?D.set(T.x,T.y,T.z,T.w):D.set(T,G,j,Q),Ht.viewport(x.copy(D).multiplyScalar(M).round())},this.getScissor=function(T){return T.copy(I)},this.setScissor=function(T,G,j,Q){T.isVector4?I.set(T.x,T.y,T.z,T.w):I.set(T,G,j,Q),Ht.scissor(b.copy(I).multiplyScalar(M).round())},this.getScissorTest=function(){return K},this.setScissorTest=function(T){Ht.setScissorTest(K=T)},this.setOpaqueSort=function(T){v=T},this.setTransparentSort=function(T){L=T},this.getClearColor=function(T){return T.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor.apply(Ft,arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha.apply(Ft,arguments)},this.clear=function(T=!0,G=!0,j=!0){let Q=0;if(T){let X=!1;if(R!==null){const _t=R.texture.format;X=_t===tl||_t===Qo||_t===Jo}if(X){const _t=R.texture.type,bt=_t===Jn||_t===Ui||_t===Js||_t===Es||_t===Ko||_t===Zo,Rt=Ft.getClearColor(),Ct=Ft.getClearAlpha(),Ot=Rt.r,Vt=Rt.g,Dt=Rt.b;bt?(u[0]=Ot,u[1]=Vt,u[2]=Dt,u[3]=Ct,B.clearBufferuiv(B.COLOR,0,u)):(m[0]=Ot,m[1]=Vt,m[2]=Dt,m[3]=Ct,B.clearBufferiv(B.COLOR,0,m))}else Q|=B.COLOR_BUFFER_BIT}G&&(Q|=B.DEPTH_BUFFER_BIT,B.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),j&&(Q|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ut,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),Tt.dispose(),ne.dispose(),Ut.dispose(),S.dispose(),Z.dispose(),ct.dispose(),he.dispose(),z.dispose(),Lt.dispose(),it.dispose(),it.removeEventListener("sessionstart",ki),it.removeEventListener("sessionend",Cs),kn.stop()};function ut(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const T=fe.autoReset,G=St.enabled,j=St.autoUpdate,Q=St.needsUpdate,X=St.type;Et(),fe.autoReset=T,St.enabled=G,St.autoUpdate=j,St.needsUpdate=Q,St.type=X}function xt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Wt(T){const G=T.target;G.removeEventListener("dispose",Wt),_e(G)}function _e(T){We(T),Ut.remove(T)}function We(T){const G=Ut.get(T).programs;G!==void 0&&(G.forEach(function(j){Lt.releaseProgram(j)}),T.isShaderMaterial&&Lt.releaseShaderCache(T))}this.renderBufferDirect=function(T,G,j,Q,X,_t){G===null&&(G=At);const bt=X.isMesh&&X.matrixWorld.determinant()<0,Rt=oa(T,G,j,Q,X);Ht.setMaterial(Q,bt);let Ct=j.index,Ot=1;if(Q.wireframe===!0){if(Ct=pt.getWireframeAttribute(j),Ct===void 0)return;Ot=2}const Vt=j.drawRange,Dt=j.attributes.position;let se=Vt.start*Ot,pe=(Vt.start+Vt.count)*Ot;_t!==null&&(se=Math.max(se,_t.start*Ot),pe=Math.min(pe,(_t.start+_t.count)*Ot)),Ct!==null?(se=Math.max(se,0),pe=Math.min(pe,Ct.count)):Dt!=null&&(se=Math.max(se,0),pe=Math.min(pe,Dt.count));const ve=pe-se;if(ve<0||ve===1/0)return;he.setup(X,Q,Rt,j,Ct);let Ze,re=wt;if(Ct!==null&&(Ze=ot.get(Ct),re=ee,re.setIndex(Ze)),X.isMesh)Q.wireframe===!0?(Ht.setLineWidth(Q.wireframeLinewidth*kt()),re.setMode(B.LINES)):re.setMode(B.TRIANGLES);else if(X.isLine){let It=Q.linewidth;It===void 0&&(It=1),Ht.setLineWidth(It*kt()),X.isLineSegments?re.setMode(B.LINES):X.isLineLoop?re.setMode(B.LINE_LOOP):re.setMode(B.LINE_STRIP)}else X.isPoints?re.setMode(B.POINTS):X.isSprite&&re.setMode(B.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)re.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(qt.get("WEBGL_multi_draw"))re.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const It=X._multiDrawStarts,we=X._multiDrawCounts,ie=X._multiDrawCount,je=Ct?ot.get(Ct).bytesPerElement:1,ti=Ut.get(Q).currentProgram.getUniforms();for(let Xe=0;Xe<ie;Xe++)ti.setValue(B,"_gl_DrawID",Xe),re.render(It[Xe]/je,we[Xe])}else if(X.isInstancedMesh)re.renderInstances(se,ve,X.count);else if(j.isInstancedBufferGeometry){const It=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,we=Math.min(j.instanceCount,It);re.renderInstances(se,ve,we)}else re.render(se,ve)};function jt(T,G,j){T.transparent===!0&&T.side===Pn&&T.forceSinglePass===!1?(T.side=nn,T.needsUpdate=!0,Ue(T,G,j),T.side=pi,T.needsUpdate=!0,Ue(T,G,j),T.side=Pn):Ue(T,G,j)}this.compile=function(T,G,j=null){j===null&&(j=T),p=ne.get(j),p.init(G),A.push(p),j.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),T!==j&&T.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();const Q=new Set;return T.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const _t=X.material;if(_t)if(Array.isArray(_t))for(let bt=0;bt<_t.length;bt++){const Rt=_t[bt];jt(Rt,j,X),Q.add(Rt)}else jt(_t,j,X),Q.add(_t)}),A.pop(),p=null,Q},this.compileAsync=function(T,G,j=null){const Q=this.compile(T,G,j);return new Promise(X=>{function _t(){if(Q.forEach(function(bt){Ut.get(bt).currentProgram.isReady()&&Q.delete(bt)}),Q.size===0){X(T);return}setTimeout(_t,10)}qt.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let Ie=null;function sn(T){Ie&&Ie(T)}function ki(){kn.stop()}function Cs(){kn.start()}const kn=new mh;kn.setAnimationLoop(sn),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(T){Ie=T,it.setAnimationLoop(T),T===null?kn.stop():kn.start()},it.addEventListener("sessionstart",ki),it.addEventListener("sessionend",Cs),this.render=function(T,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(G),G=it.getCamera()),T.isScene===!0&&T.onBeforeRender(E,T,G,R),p=ne.get(T,A.length),p.init(G),A.push(p),lt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),nt.setFromProjectionMatrix(lt),V=this.localClippingEnabled,P=mt.init(this.clippingPlanes,V),y=Tt.get(T,g.length),y.init(),g.push(y),it.enabled===!0&&it.isPresenting===!0){const _t=E.xr.getDepthSensingMesh();_t!==null&&Ps(_t,G,-1/0,E.sortObjects)}Ps(T,G,0,E.sortObjects),y.finish(),E.sortObjects===!0&&y.sort(v,L),zt=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,zt&&Ft.addToRenderList(y,T),this.info.render.frame++,P===!0&&mt.beginShadows();const j=p.state.shadowsArray;St.render(j,T,G),P===!0&&mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=y.opaque,X=y.transmissive;if(p.setupLights(),G.isArrayCamera){const _t=G.cameras;if(X.length>0)for(let bt=0,Rt=_t.length;bt<Rt;bt++){const Ct=_t[bt];ln(Q,X,T,Ct)}zt&&Ft.render(T);for(let bt=0,Rt=_t.length;bt<Rt;bt++){const Ct=_t[bt];rr(y,T,Ct,Ct.viewport)}}else X.length>0&&ln(Q,X,T,G),zt&&Ft.render(T),rr(y,T,G);R!==null&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(E,T,G),he.resetDefaultState(),k=-1,J=null,A.pop(),A.length>0?(p=A[A.length-1],P===!0&&mt.setGlobalState(E.clippingPlanes,p.state.camera)):p=null,g.pop(),g.length>0?y=g[g.length-1]:y=null};function Ps(T,G,j,Q){if(T.visible===!1)return;if(T.layers.test(G.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(G);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||nt.intersectsSprite(T)){Q&&ht.setFromMatrixPosition(T.matrixWorld).applyMatrix4(lt);const bt=ct.update(T),Rt=T.material;Rt.visible&&y.push(T,bt,Rt,j,ht.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||nt.intersectsObject(T))){const bt=ct.update(T),Rt=T.material;if(Q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ht.copy(T.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),ht.copy(bt.boundingSphere.center)),ht.applyMatrix4(T.matrixWorld).applyMatrix4(lt)),Array.isArray(Rt)){const Ct=bt.groups;for(let Ot=0,Vt=Ct.length;Ot<Vt;Ot++){const Dt=Ct[Ot],se=Rt[Dt.materialIndex];se&&se.visible&&y.push(T,bt,se,j,ht.z,Dt)}}else Rt.visible&&y.push(T,bt,Rt,j,ht.z,null)}}const _t=T.children;for(let bt=0,Rt=_t.length;bt<Rt;bt++)Ps(_t[bt],G,j,Q)}function rr(T,G,j,Q){const X=T.opaque,_t=T.transmissive,bt=T.transparent;p.setupLightsView(j),P===!0&&mt.setGlobalState(E.clippingPlanes,j),Q&&Ht.viewport(x.copy(Q)),X.length>0&&Hi(X,G,j),_t.length>0&&Hi(_t,G,j),bt.length>0&&Hi(bt,G,j),Ht.buffers.depth.setTest(!0),Ht.buffers.depth.setMask(!0),Ht.buffers.color.setMask(!0),Ht.setPolygonOffset(!1)}function ln(T,G,j,Q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Q.id]===void 0&&(p.state.transmissionRenderTarget[Q.id]=new Ni(1,1,{generateMipmaps:!0,type:qt.has("EXT_color_buffer_half_float")||qt.has("EXT_color_buffer_float")?ir:Jn,minFilter:Di,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ce.workingColorSpace}));const _t=p.state.transmissionRenderTarget[Q.id],bt=Q.viewport||x;_t.setSize(bt.z,bt.w);const Rt=E.getRenderTarget();E.setRenderTarget(_t),E.getClearColor(H),U=E.getClearAlpha(),U<1&&E.setClearColor(16777215,.5),E.clear(),zt&&Ft.render(j);const Ct=E.toneMapping;E.toneMapping=fi;const Ot=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),p.setupLightsView(Q),P===!0&&mt.setGlobalState(E.clippingPlanes,Q),Hi(T,j,Q),C.updateMultisampleRenderTarget(_t),C.updateRenderTargetMipmap(_t),qt.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let Dt=0,se=G.length;Dt<se;Dt++){const pe=G[Dt],ve=pe.object,Ze=pe.geometry,re=pe.material,It=pe.group;if(re.side===Pn&&ve.layers.test(Q.layers)){const we=re.side;re.side=nn,re.needsUpdate=!0,Vi(ve,j,Q,Ze,re,It),re.side=we,re.needsUpdate=!0,Vt=!0}}Vt===!0&&(C.updateMultisampleRenderTarget(_t),C.updateRenderTargetMipmap(_t))}E.setRenderTarget(Rt),E.setClearColor(H,U),Ot!==void 0&&(Q.viewport=Ot),E.toneMapping=Ct}function Hi(T,G,j){const Q=G.isScene===!0?G.overrideMaterial:null;for(let X=0,_t=T.length;X<_t;X++){const bt=T[X],Rt=bt.object,Ct=bt.geometry,Ot=Q===null?bt.material:Q,Vt=bt.group;Rt.layers.test(j.layers)&&Vi(Rt,G,j,Ct,Ot,Vt)}}function Vi(T,G,j,Q,X,_t){T.onBeforeRender(E,G,j,Q,X,_t),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(E,G,j,Q,T,_t),X.transparent===!0&&X.side===Pn&&X.forceSinglePass===!1?(X.side=nn,X.needsUpdate=!0,E.renderBufferDirect(j,G,Q,X,T,_t),X.side=pi,X.needsUpdate=!0,E.renderBufferDirect(j,G,Q,X,T,_t),X.side=Pn):E.renderBufferDirect(j,G,Q,X,T,_t),T.onAfterRender(E,G,j,Q,X,_t)}function Ue(T,G,j){G.isScene!==!0&&(G=At);const Q=Ut.get(T),X=p.state.lights,_t=p.state.shadowsArray,bt=X.state.version,Rt=Lt.getParameters(T,X.state,_t,G,j),Ct=Lt.getProgramCacheKey(Rt);let Ot=Q.programs;Q.environment=T.isMeshStandardMaterial?G.environment:null,Q.fog=G.fog,Q.envMap=(T.isMeshStandardMaterial?Z:S).get(T.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&T.envMap===null?G.environmentRotation:T.envMapRotation,Ot===void 0&&(T.addEventListener("dispose",Wt),Ot=new Map,Q.programs=Ot);let Vt=Ot.get(Ct);if(Vt!==void 0){if(Q.currentProgram===Vt&&Q.lightsStateVersion===bt)return vi(T,Rt),Vt}else Rt.uniforms=Lt.getUniforms(T),T.onBeforeCompile(Rt,E),Vt=Lt.acquireProgram(Rt,Ct),Ot.set(Ct,Vt),Q.uniforms=Rt.uniforms;const Dt=Q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Dt.clippingPlanes=mt.uniform),vi(T,Rt),Q.needsLights=ca(T),Q.lightsStateVersion=bt,Q.needsLights&&(Dt.ambientLightColor.value=X.state.ambient,Dt.lightProbe.value=X.state.probe,Dt.directionalLights.value=X.state.directional,Dt.directionalLightShadows.value=X.state.directionalShadow,Dt.spotLights.value=X.state.spot,Dt.spotLightShadows.value=X.state.spotShadow,Dt.rectAreaLights.value=X.state.rectArea,Dt.ltc_1.value=X.state.rectAreaLTC1,Dt.ltc_2.value=X.state.rectAreaLTC2,Dt.pointLights.value=X.state.point,Dt.pointLightShadows.value=X.state.pointShadow,Dt.hemisphereLights.value=X.state.hemi,Dt.directionalShadowMap.value=X.state.directionalShadowMap,Dt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Dt.spotShadowMap.value=X.state.spotShadowMap,Dt.spotLightMatrix.value=X.state.spotLightMatrix,Dt.spotLightMap.value=X.state.spotLightMap,Dt.pointShadowMap.value=X.state.pointShadowMap,Dt.pointShadowMatrix.value=X.state.pointShadowMatrix),Q.currentProgram=Vt,Q.uniformsList=null,Vt}function Hn(T){if(T.uniformsList===null){const G=T.currentProgram.getUniforms();T.uniformsList=$r.seqWithValue(G.seq,T.uniforms)}return T.uniformsList}function vi(T,G){const j=Ut.get(T);j.outputColorSpace=G.outputColorSpace,j.batching=G.batching,j.batchingColor=G.batchingColor,j.instancing=G.instancing,j.instancingColor=G.instancingColor,j.instancingMorph=G.instancingMorph,j.skinning=G.skinning,j.morphTargets=G.morphTargets,j.morphNormals=G.morphNormals,j.morphColors=G.morphColors,j.morphTargetsCount=G.morphTargetsCount,j.numClippingPlanes=G.numClippingPlanes,j.numIntersection=G.numClipIntersection,j.vertexAlphas=G.vertexAlphas,j.vertexTangents=G.vertexTangents,j.toneMapping=G.toneMapping}function oa(T,G,j,Q,X){G.isScene!==!0&&(G=At),C.resetTextureUnits();const _t=G.fog,bt=Q.isMeshStandardMaterial?G.environment:null,Rt=R===null?E.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:_i,Ct=(Q.isMeshStandardMaterial?Z:S).get(Q.envMap||bt),Ot=Q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Vt=!!j.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Dt=!!j.morphAttributes.position,se=!!j.morphAttributes.normal,pe=!!j.morphAttributes.color;let ve=fi;Q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ve=E.toneMapping);const Ze=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,re=Ze!==void 0?Ze.length:0,It=Ut.get(Q),we=p.state.lights;if(P===!0&&(V===!0||T!==J)){const ke=T===J&&Q.id===k;mt.setState(Q,T,ke)}let ie=!1;Q.version===It.__version?(It.needsLights&&It.lightsStateVersion!==we.state.version||It.outputColorSpace!==Rt||X.isBatchedMesh&&It.batching===!1||!X.isBatchedMesh&&It.batching===!0||X.isBatchedMesh&&It.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&It.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&It.instancing===!1||!X.isInstancedMesh&&It.instancing===!0||X.isSkinnedMesh&&It.skinning===!1||!X.isSkinnedMesh&&It.skinning===!0||X.isInstancedMesh&&It.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&It.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&It.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&It.instancingMorph===!1&&X.morphTexture!==null||It.envMap!==Ct||Q.fog===!0&&It.fog!==_t||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==mt.numPlanes||It.numIntersection!==mt.numIntersection)||It.vertexAlphas!==Ot||It.vertexTangents!==Vt||It.morphTargets!==Dt||It.morphNormals!==se||It.morphColors!==pe||It.toneMapping!==ve||It.morphTargetsCount!==re)&&(ie=!0):(ie=!0,It.__version=Q.version);let je=It.currentProgram;ie===!0&&(je=Ue(Q,G,X));let ti=!1,Xe=!1,ze=!1;const xe=je.getUniforms(),cn=It.uniforms;if(Ht.useProgram(je.program)&&(ti=!0,Xe=!0,ze=!0),Q.id!==k&&(k=Q.id,Xe=!0),ti||J!==T){$t.reverseDepthBuffer?(et.copy(T.projectionMatrix),od(et),ld(et),xe.setValue(B,"projectionMatrix",et)):xe.setValue(B,"projectionMatrix",T.projectionMatrix),xe.setValue(B,"viewMatrix",T.matrixWorldInverse);const ke=xe.map.cameraPosition;ke!==void 0&&ke.setValue(B,ft.setFromMatrixPosition(T.matrixWorld)),$t.logarithmicDepthBuffer&&xe.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&xe.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),J!==T&&(J=T,Xe=!0,ze=!0)}if(X.isSkinnedMesh){xe.setOptional(B,X,"bindMatrix"),xe.setOptional(B,X,"bindMatrixInverse");const ke=X.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),xe.setValue(B,"boneTexture",ke.boneTexture,C))}X.isBatchedMesh&&(xe.setOptional(B,X,"batchingTexture"),xe.setValue(B,"batchingTexture",X._matricesTexture,C),xe.setOptional(B,X,"batchingIdTexture"),xe.setValue(B,"batchingIdTexture",X._indirectTexture,C),xe.setOptional(B,X,"batchingColorTexture"),X._colorsTexture!==null&&xe.setValue(B,"batchingColorTexture",X._colorsTexture,C));const Ls=j.morphAttributes;if((Ls.position!==void 0||Ls.normal!==void 0||Ls.color!==void 0)&&Nt.update(X,j,je),(Xe||It.receiveShadow!==X.receiveShadow)&&(It.receiveShadow=X.receiveShadow,xe.setValue(B,"receiveShadow",X.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(cn.envMap.value=Ct,cn.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&G.environment!==null&&(cn.envMapIntensity.value=G.environmentIntensity),Xe&&(xe.setValue(B,"toneMappingExposure",E.toneMappingExposure),It.needsLights&&la(cn,ze),_t&&Q.fog===!0&&yt.refreshFogUniforms(cn,_t),yt.refreshMaterialUniforms(cn,Q,M,_,p.state.transmissionRenderTarget[T.id]),$r.upload(B,Hn(It),cn,C)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&($r.upload(B,Hn(It),cn,C),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&xe.setValue(B,"center",X.center),xe.setValue(B,"modelViewMatrix",X.modelViewMatrix),xe.setValue(B,"normalMatrix",X.normalMatrix),xe.setValue(B,"modelMatrix",X.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const ke=Q.uniformsGroups;for(let Gi=0,F=ke.length;Gi<F;Gi++){const W=ke[Gi];z.update(W,je),z.bind(W,je)}}return je}function la(T,G){T.ambientLightColor.needsUpdate=G,T.lightProbe.needsUpdate=G,T.directionalLights.needsUpdate=G,T.directionalLightShadows.needsUpdate=G,T.pointLights.needsUpdate=G,T.pointLightShadows.needsUpdate=G,T.spotLights.needsUpdate=G,T.spotLightShadows.needsUpdate=G,T.rectAreaLights.needsUpdate=G,T.hemisphereLights.needsUpdate=G}function ca(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,G,j){Ut.get(T.texture).__webglTexture=G,Ut.get(T.depthTexture).__webglTexture=j;const Q=Ut.get(T);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=j===void 0,Q.__autoAllocateDepthBuffer||qt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,G){const j=Ut.get(T);j.__webglFramebuffer=G,j.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(T,G=0,j=0){R=T,q=G,N=j;let Q=!0,X=null,_t=!1,bt=!1;if(T){const Ct=Ut.get(T);if(Ct.__useDefaultFramebuffer!==void 0)Ht.bindFramebuffer(B.FRAMEBUFFER,null),Q=!1;else if(Ct.__webglFramebuffer===void 0)C.setupRenderTarget(T);else if(Ct.__hasExternalTextures)C.rebindTextures(T,Ut.get(T.texture).__webglTexture,Ut.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Dt=T.depthTexture;if(Ct.__boundDepthTexture!==Dt){if(Dt!==null&&Ut.has(Dt)&&(T.width!==Dt.image.width||T.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(T)}}const Ot=T.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(bt=!0);const Vt=Ut.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Vt[G])?X=Vt[G][j]:X=Vt[G],_t=!0):T.samples>0&&C.useMultisampledRTT(T)===!1?X=Ut.get(T).__webglMultisampledFramebuffer:Array.isArray(Vt)?X=Vt[j]:X=Vt,x.copy(T.viewport),b.copy(T.scissor),Y=T.scissorTest}else x.copy(D).multiplyScalar(M).floor(),b.copy(I).multiplyScalar(M).floor(),Y=K;if(Ht.bindFramebuffer(B.FRAMEBUFFER,X)&&Q&&Ht.drawBuffers(T,X),Ht.viewport(x),Ht.scissor(b),Ht.setScissorTest(Y),_t){const Ct=Ut.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ct.__webglTexture,j)}else if(bt){const Ct=Ut.get(T.texture),Ot=G||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ct.__webglTexture,j||0,Ot)}k=-1},this.readRenderTargetPixels=function(T,G,j,Q,X,_t,bt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=Ut.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&bt!==void 0&&(Rt=Rt[bt]),Rt){Ht.bindFramebuffer(B.FRAMEBUFFER,Rt);try{const Ct=T.texture,Ot=Ct.format,Vt=Ct.type;if(!$t.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=T.width-Q&&j>=0&&j<=T.height-X&&B.readPixels(G,j,Q,X,Xt.convert(Ot),Xt.convert(Vt),_t)}finally{const Ct=R!==null?Ut.get(R).__webglFramebuffer:null;Ht.bindFramebuffer(B.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(T,G,j,Q,X,_t,bt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=Ut.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&bt!==void 0&&(Rt=Rt[bt]),Rt){const Ct=T.texture,Ot=Ct.format,Vt=Ct.type;if(!$t.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=T.width-Q&&j>=0&&j<=T.height-X){Ht.bindFramebuffer(B.FRAMEBUFFER,Rt);const Dt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Dt),B.bufferData(B.PIXEL_PACK_BUFFER,_t.byteLength,B.STREAM_READ),B.readPixels(G,j,Q,X,Xt.convert(Ot),Xt.convert(Vt),0);const se=R!==null?Ut.get(R).__webglFramebuffer:null;Ht.bindFramebuffer(B.FRAMEBUFFER,se);const pe=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await ad(B,pe,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Dt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,_t),B.deleteBuffer(Dt),B.deleteSync(pe),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,G=null,j=0){T.isTexture!==!0&&(qr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,T=arguments[1]);const Q=Math.pow(2,-j),X=Math.floor(T.image.width*Q),_t=Math.floor(T.image.height*Q),bt=G!==null?G.x:0,Rt=G!==null?G.y:0;C.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,j,0,0,bt,Rt,X,_t),Ht.unbindTexture()},this.copyTextureToTexture=function(T,G,j=null,Q=null,X=0){T.isTexture!==!0&&(qr("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,T=arguments[1],G=arguments[2],X=arguments[3]||0,j=null);let _t,bt,Rt,Ct,Ot,Vt;j!==null?(_t=j.max.x-j.min.x,bt=j.max.y-j.min.y,Rt=j.min.x,Ct=j.min.y):(_t=T.image.width,bt=T.image.height,Rt=0,Ct=0),Q!==null?(Ot=Q.x,Vt=Q.y):(Ot=0,Vt=0);const Dt=Xt.convert(G.format),se=Xt.convert(G.type);C.setTexture2D(G,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,G.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,G.unpackAlignment);const pe=B.getParameter(B.UNPACK_ROW_LENGTH),ve=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Ze=B.getParameter(B.UNPACK_SKIP_PIXELS),re=B.getParameter(B.UNPACK_SKIP_ROWS),It=B.getParameter(B.UNPACK_SKIP_IMAGES),we=T.isCompressedTexture?T.mipmaps[X]:T.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,we.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,we.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Rt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ct),T.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,X,Ot,Vt,_t,bt,Dt,se,we.data):T.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,X,Ot,Vt,we.width,we.height,Dt,we.data):B.texSubImage2D(B.TEXTURE_2D,X,Ot,Vt,_t,bt,Dt,se,we),B.pixelStorei(B.UNPACK_ROW_LENGTH,pe),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ve),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ze),B.pixelStorei(B.UNPACK_SKIP_ROWS,re),B.pixelStorei(B.UNPACK_SKIP_IMAGES,It),X===0&&G.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),Ht.unbindTexture()},this.copyTextureToTexture3D=function(T,G,j=null,Q=null,X=0){T.isTexture!==!0&&(qr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,Q=arguments[1]||null,T=arguments[2],G=arguments[3],X=arguments[4]||0);let _t,bt,Rt,Ct,Ot,Vt,Dt,se,pe;const ve=T.isCompressedTexture?T.mipmaps[X]:T.image;j!==null?(_t=j.max.x-j.min.x,bt=j.max.y-j.min.y,Rt=j.max.z-j.min.z,Ct=j.min.x,Ot=j.min.y,Vt=j.min.z):(_t=ve.width,bt=ve.height,Rt=ve.depth,Ct=0,Ot=0,Vt=0),Q!==null?(Dt=Q.x,se=Q.y,pe=Q.z):(Dt=0,se=0,pe=0);const Ze=Xt.convert(G.format),re=Xt.convert(G.type);let It;if(G.isData3DTexture)C.setTexture3D(G,0),It=B.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)C.setTexture2DArray(G,0),It=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,G.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,G.unpackAlignment);const we=B.getParameter(B.UNPACK_ROW_LENGTH),ie=B.getParameter(B.UNPACK_IMAGE_HEIGHT),je=B.getParameter(B.UNPACK_SKIP_PIXELS),ti=B.getParameter(B.UNPACK_SKIP_ROWS),Xe=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,ve.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ve.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ct),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ot),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Vt),T.isDataTexture||T.isData3DTexture?B.texSubImage3D(It,X,Dt,se,pe,_t,bt,Rt,Ze,re,ve.data):G.isCompressedArrayTexture?B.compressedTexSubImage3D(It,X,Dt,se,pe,_t,bt,Rt,Ze,ve.data):B.texSubImage3D(It,X,Dt,se,pe,_t,bt,Rt,Ze,re,ve),B.pixelStorei(B.UNPACK_ROW_LENGTH,we),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ie),B.pixelStorei(B.UNPACK_SKIP_PIXELS,je),B.pixelStorei(B.UNPACK_SKIP_ROWS,ti),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Xe),X===0&&G.generateMipmaps&&B.generateMipmap(It),Ht.unbindTexture()},this.initRenderTarget=function(T){Ut.get(T).__webglFramebuffer===void 0&&C.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),Ht.unbindTexture()},this.resetState=function(){q=0,N=0,R=null,Ht.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===el?"display-p3":"srgb",e.unpackColorSpace=ce.workingColorSpace===sa?"display-p3":"srgb"}}class ol{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Kt(t),this.near=e,this.far=n}clone(){return new ol(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Sh extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class yg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=zo,this.updateRanges=[],this.version=0,this.uuid=Bn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Je=new O;class ea{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ln(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ln(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ln(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ln(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array),r=de(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new mn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ea(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ll extends As{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let rs;const zs=new O,as=new O,os=new O,ls=new vt,ks=new vt,bh=new ae,Pr=new O,Hs=new O,Lr=new O,uc=new vt,Ha=new vt,dc=new vt;class Eh extends Be{constructor(t=new ll){if(super(),this.isSprite=!0,this.type="Sprite",rs===void 0){rs=new on;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new yg(e,5);rs.setIndex([0,1,2,0,2,3]),rs.setAttribute("position",new ea(n,3,0,!1)),rs.setAttribute("uv",new ea(n,2,3,!1))}this.geometry=rs,this.material=t,this.center=new vt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),as.setFromMatrixScale(this.matrixWorld),bh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),os.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&as.multiplyScalar(-os.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Dr(Pr.set(-.5,-.5,0),os,a,as,s,r),Dr(Hs.set(.5,-.5,0),os,a,as,s,r),Dr(Lr.set(.5,.5,0),os,a,as,s,r),uc.set(0,0),Ha.set(1,0),dc.set(1,1);let o=t.ray.intersectTriangle(Pr,Hs,Lr,!1,zs);if(o===null&&(Dr(Hs.set(-.5,.5,0),os,a,as,s,r),Ha.set(0,1),o=t.ray.intersectTriangle(Pr,Lr,Hs,!1,zs),o===null))return;const l=t.ray.origin.distanceTo(zs);l<t.near||l>t.far||e.push({distance:l,point:zs.clone(),uv:bn.getInterpolation(zs,Pr,Hs,Lr,uc,Ha,dc,new vt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Dr(i,t,e,n,s,r){ls.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ks.x=r*ls.x-s*ls.y,ks.y=s*ls.x+r*ls.y):ks.copy(ls),i.copy(t),i.x+=ks.x,i.y+=ks.y,i.applyMatrix4(bh)}class Mg extends Ke{constructor(t=null,e=1,n=1,s,r,a,o,l,h=an,d=an,f,c){super(null,a,o,l,h,d,s,r,f,c),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fc extends mn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const cs=new ae,pc=new ae,Ir=[],mc=new Bi,Sg=new ae,Vs=new Zt,Gs=new sr;class cl extends Zt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new fc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Sg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Bi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,cs),mc.copy(t.boundingBox).applyMatrix4(cs),this.boundingBox.union(mc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new sr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,cs),Gs.copy(t.boundingSphere).applyMatrix4(cs),this.boundingSphere.union(Gs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Vs.geometry=this.geometry,Vs.material=this.material,Vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gs.copy(this.boundingSphere),Gs.applyMatrix4(n),t.ray.intersectsSphere(Gs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,cs),pc.multiplyMatrices(n,cs),Vs.matrixWorld=pc,Vs.raycast(t,Ir);for(let a=0,o=Ir.length;a<o;a++){const l=Ir[a];l.instanceId=r,l.object=this,e.push(l)}Ir.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new fc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Mg(new Float32Array(s*this.count),s,this.count,jo,On));const r=this.morphTexture.source.data.data;let a=0;for(let h=0;h<n.length;h++)a+=n[h];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class zi extends Ke{constructor(t,e,n,s,r,a,o,l,h){super(t,e,n,s,r,a,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class zn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,h;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),h=n[s]-a,h<0)o=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const d=n[s],c=n[s+1]-d,u=(a-d)/c;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new vt:new O);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new O,s=[],r=[],a=[],o=new O,l=new ae;for(let u=0;u<=t;u++){const m=u/t;s[u]=this.getTangentAt(m,new O)}r[0]=new O,a[0]=new O;let h=Number.MAX_VALUE;const d=Math.abs(s[0].x),f=Math.abs(s[0].y),c=Math.abs(s[0].z);d<=h&&(h=d,n.set(1,0,0)),f<=h&&(h=f,n.set(0,1,0)),c<=h&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Oe(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(o,m))}a[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(Oe(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(u=-u);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],u*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class hl extends zn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new vt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const d=Math.cos(this.aRotation),f=Math.sin(this.aRotation),c=l-this.aX,u=h-this.aY;l=c*d-u*f+this.aX,h=c*f+u*d+this.aY}return n.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class bg extends hl{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ul(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,h){s(a,o,h*(o-r),h*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,h,d,f){let c=(a-r)/h-(o-r)/(h+d)+(o-a)/d,u=(o-a)/d-(l-a)/(d+f)+(l-o)/f;c*=d,u*=d,s(a,o,c,u)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Ur=new O,Va=new ul,Ga=new ul,Wa=new ul;class Eg extends zn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new O){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let h,d;this.closed||o>0?h=s[(o-1)%r]:(Ur.subVectors(s[0],s[1]).add(s[0]),h=Ur);const f=s[o%r],c=s[(o+1)%r];if(this.closed||o+2<r?d=s[(o+2)%r]:(Ur.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=Ur),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let m=Math.pow(h.distanceToSquared(f),u),y=Math.pow(f.distanceToSquared(c),u),p=Math.pow(c.distanceToSquared(d),u);y<1e-4&&(y=1),m<1e-4&&(m=y),p<1e-4&&(p=y),Va.initNonuniformCatmullRom(h.x,f.x,c.x,d.x,m,y,p),Ga.initNonuniformCatmullRom(h.y,f.y,c.y,d.y,m,y,p),Wa.initNonuniformCatmullRom(h.z,f.z,c.z,d.z,m,y,p)}else this.curveType==="catmullrom"&&(Va.initCatmullRom(h.x,f.x,c.x,d.x,this.tension),Ga.initCatmullRom(h.y,f.y,c.y,d.y,this.tension),Wa.initCatmullRom(h.z,f.z,c.z,d.z,this.tension));return n.set(Va.calc(l),Ga.calc(l),Wa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function gc(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function wg(i,t){const e=1-i;return e*e*t}function Tg(i,t){return 2*(1-i)*i*t}function Ag(i,t){return i*i*t}function Ks(i,t,e,n){return wg(i,t)+Tg(i,e)+Ag(i,n)}function Rg(i,t){const e=1-i;return e*e*e*t}function Cg(i,t){const e=1-i;return 3*e*e*i*t}function Pg(i,t){return 3*(1-i)*i*i*t}function Lg(i,t){return i*i*i*t}function Zs(i,t,e,n,s){return Rg(i,t)+Cg(i,e)+Pg(i,n)+Lg(i,s)}class wh extends zn{constructor(t=new vt,e=new vt,n=new vt,s=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new vt){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Zs(t,s.x,r.x,a.x,o.x),Zs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Dg extends zn{constructor(t=new O,e=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new O){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Zs(t,s.x,r.x,a.x,o.x),Zs(t,s.y,r.y,a.y,o.y),Zs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Th extends zn{constructor(t=new vt,e=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new vt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ig extends zn{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ah extends zn{constructor(t=new vt,e=new vt,n=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new vt){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ks(t,s.x,r.x,a.x),Ks(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ug extends zn{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ks(t,s.x,r.x,a.x),Ks(t,s.y,r.y,a.y),Ks(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rh extends zn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new vt){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],h=s[a],d=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(gc(o,l.x,h.x,d.x,f.x),gc(o,l.y,h.y,d.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new vt().fromArray(s))}return this}}var _c=Object.freeze({__proto__:null,ArcCurve:bg,CatmullRomCurve3:Eg,CubicBezierCurve:wh,CubicBezierCurve3:Dg,EllipseCurve:hl,LineCurve:Th,LineCurve3:Ig,QuadraticBezierCurve:Ah,QuadraticBezierCurve3:Ug,SplineCurve:Rh});class Ng extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _c[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),h=l===0?0:1-a/l;return o.getPointAt(h,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let h=0;h<l.length;h++){const d=l[h];n&&n.equals(d)||(e.push(d),n=d)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new _c[s.type]().fromJSON(s))}return this}}class Vo extends Ng{constructor(t){super(),this.type="Path",this.currentPoint=new vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Th(this.currentPoint.clone(),new vt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Ah(this.currentPoint.clone(),new vt(t,e),new vt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new wh(this.currentPoint.clone(),new vt(t,e),new vt(n,s),new vt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Rh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const h=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+h,e+d,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const h=new hl(t,e,n,s,r,a,o,l);if(this.curves.length>0){const f=h.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(h);const d=h.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class tn extends on{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const h=this;s=Math.floor(s),r=Math.floor(r);const d=[],f=[],c=[],u=[];let m=0;const y=[],p=n/2;let g=0;A(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(d),this.setAttribute("position",new Ce(f,3)),this.setAttribute("normal",new Ce(c,3)),this.setAttribute("uv",new Ce(u,2));function A(){const w=new O,q=new O;let N=0;const R=(e-t)/n;for(let k=0;k<=r;k++){const J=[],x=k/r,b=x*(e-t)+t;for(let Y=0;Y<=s;Y++){const H=Y/s,U=H*l+o,$=Math.sin(U),_=Math.cos(U);q.x=b*$,q.y=-x*n+p,q.z=b*_,f.push(q.x,q.y,q.z),w.set($,R,_).normalize(),c.push(w.x,w.y,w.z),u.push(H,1-x),J.push(m++)}y.push(J)}for(let k=0;k<s;k++)for(let J=0;J<r;J++){const x=y[J][k],b=y[J+1][k],Y=y[J+1][k+1],H=y[J][k+1];t>0&&(d.push(x,b,H),N+=3),e>0&&(d.push(b,Y,H),N+=3)}h.addGroup(g,N,0),g+=N}function E(w){const q=m,N=new vt,R=new O;let k=0;const J=w===!0?t:e,x=w===!0?1:-1;for(let Y=1;Y<=s;Y++)f.push(0,p*x,0),c.push(0,x,0),u.push(.5,.5),m++;const b=m;for(let Y=0;Y<=s;Y++){const U=Y/s*l+o,$=Math.cos(U),_=Math.sin(U);R.x=J*_,R.y=p*x,R.z=J*$,f.push(R.x,R.y,R.z),c.push(0,x,0),N.x=$*.5+.5,N.y=_*.5*x+.5,u.push(N.x,N.y),m++}for(let Y=0;Y<s;Y++){const H=q+Y,U=b+Y;w===!0?d.push(U,U+1,H):d.push(U+1,U,H),k+=3}h.addGroup(g,k,w===!0?1:2),g+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class na extends tn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new na(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ch extends Vo{constructor(t){super(t),this.uuid=Bn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Vo().fromJSON(s))}return this}}const Fg={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Ph(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,h,d,f,c,u;if(n&&(r=Hg(i,t,r,e)),i.length>80*e){o=h=i[0],l=d=i[1];for(let m=e;m<s;m+=e)f=i[m],c=i[m+1],f<o&&(o=f),c<l&&(l=c),f>h&&(h=f),c>d&&(d=c);u=Math.max(h-o,d-l),u=u!==0?32767/u:0}return tr(r,a,e,o,l,u,0),a}};function Ph(i,t,e,n,s){let r,a;if(s===Jg(i,t,e,n)>0)for(r=t;r<e;r+=n)a=vc(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=vc(r,i[r],i[r+1],a);return a&&aa(a,a.next)&&(nr(a),a=a.next),a}function Fi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(aa(e,e.next)||be(e.prev,e,e.next)===0)){if(nr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function tr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Yg(i,n,s,r);let o=i,l,h;for(;i.prev!==i.next;){if(l=i.prev,h=i.next,r?Bg(i,n,s,r):Og(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(h.i/e|0),nr(i),i=h.next,o=h.next;continue}if(i=h,i===o){a?a===1?(i=zg(Fi(i),t,e),tr(i,t,e,n,s,r,2)):a===2&&kg(i,t,e,n,s,r):tr(Fi(i),t,e,n,s,r,1);break}}}function Og(i){const t=i.prev,e=i,n=i.next;if(be(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,h=n.y,d=s<r?s<a?s:a:r<a?r:a,f=o<l?o<h?o:h:l<h?l:h,c=s>r?s>a?s:a:r>a?r:a,u=o>l?o>h?o:h:l>h?l:h;let m=n.next;for(;m!==t;){if(m.x>=d&&m.x<=c&&m.y>=f&&m.y<=u&&gs(s,o,r,l,a,h,m.x,m.y)&&be(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Bg(i,t,e,n){const s=i.prev,r=i,a=i.next;if(be(s,r,a)>=0)return!1;const o=s.x,l=r.x,h=a.x,d=s.y,f=r.y,c=a.y,u=o<l?o<h?o:h:l<h?l:h,m=d<f?d<c?d:c:f<c?f:c,y=o>l?o>h?o:h:l>h?l:h,p=d>f?d>c?d:c:f>c?f:c,g=Go(u,m,t,e,n),A=Go(y,p,t,e,n);let E=i.prevZ,w=i.nextZ;for(;E&&E.z>=g&&w&&w.z<=A;){if(E.x>=u&&E.x<=y&&E.y>=m&&E.y<=p&&E!==s&&E!==a&&gs(o,d,l,f,h,c,E.x,E.y)&&be(E.prev,E,E.next)>=0||(E=E.prevZ,w.x>=u&&w.x<=y&&w.y>=m&&w.y<=p&&w!==s&&w!==a&&gs(o,d,l,f,h,c,w.x,w.y)&&be(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;E&&E.z>=g;){if(E.x>=u&&E.x<=y&&E.y>=m&&E.y<=p&&E!==s&&E!==a&&gs(o,d,l,f,h,c,E.x,E.y)&&be(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;w&&w.z<=A;){if(w.x>=u&&w.x<=y&&w.y>=m&&w.y<=p&&w!==s&&w!==a&&gs(o,d,l,f,h,c,w.x,w.y)&&be(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function zg(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!aa(s,r)&&Lh(s,n,n.next,r)&&er(s,r)&&er(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),nr(n),nr(n.next),n=i=r),n=n.next}while(n!==i);return Fi(n)}function kg(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Kg(a,o)){let l=Dh(a,o);a=Fi(a,a.next),l=Fi(l,l.next),tr(a,t,e,n,s,r,0),tr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Hg(i,t,e,n){const s=[];let r,a,o,l,h;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,h=Ph(i,o,l,n,!1),h===h.next&&(h.steiner=!0),s.push($g(h));for(s.sort(Vg),r=0;r<s.length;r++)e=Gg(s[r],e);return e}function Vg(i,t){return i.x-t.x}function Gg(i,t){const e=Wg(i,t);if(!e)return t;const n=Dh(e,i);return Fi(n,n.next),Fi(e,e.next)}function Wg(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const c=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(c<=r&&c>n&&(n=c,s=e.x<e.next.x?e:e.next,c===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,l=s.x,h=s.y;let d=1/0,f;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&gs(a<h?r:n,a,l,h,a<h?n:r,a,e.x,e.y)&&(f=Math.abs(a-e.y)/(r-e.x),er(e,i)&&(f<d||f===d&&(e.x>s.x||e.x===s.x&&Xg(s,e)))&&(s=e,d=f)),e=e.next;while(e!==o);return s}function Xg(i,t){return be(i.prev,i,t.prev)<0&&be(t.next,i,i.next)<0}function Yg(i,t,e,n){let s=i;do s.z===0&&(s.z=Go(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,qg(s)}function qg(i){let t,e,n,s,r,a,o,l,h=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<h&&(o++,n=n.nextZ,!!n);t++);for(l=h;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,h*=2}while(a>1);return i}function Go(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function $g(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function gs(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Kg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Zg(i,t)&&(er(i,t)&&er(t,i)&&jg(i,t)&&(be(i.prev,i,t.prev)||be(i,t.prev,t))||aa(i,t)&&be(i.prev,i,i.next)>0&&be(t.prev,t,t.next)>0)}function be(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function aa(i,t){return i.x===t.x&&i.y===t.y}function Lh(i,t,e,n){const s=Fr(be(i,t,e)),r=Fr(be(i,t,n)),a=Fr(be(e,n,i)),o=Fr(be(e,n,t));return!!(s!==r&&a!==o||s===0&&Nr(i,e,t)||r===0&&Nr(i,n,t)||a===0&&Nr(e,i,n)||o===0&&Nr(e,t,n))}function Nr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Fr(i){return i>0?1:i<0?-1:0}function Zg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Lh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function er(i,t){return be(i.prev,i,i.next)<0?be(i,t,i.next)>=0&&be(i,i.prev,t)>=0:be(i,t,i.prev)<0||be(i,i.next,t)<0}function jg(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Dh(i,t){const e=new Wo(i.i,i.x,i.y),n=new Wo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function vc(i,t,e,n){const s=new Wo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function nr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Wo(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Jg(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class js{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return js.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];xc(t),yc(n,t);let a=t.length;e.forEach(xc);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,yc(n,e[l]);const o=Fg.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function xc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function yc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class dl extends on{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],h=[],d=[];let f=t;const c=(e-t)/s,u=new O,m=new vt;for(let y=0;y<=s;y++){for(let p=0;p<=n;p++){const g=r+p/n*a;u.x=f*Math.cos(g),u.y=f*Math.sin(g),l.push(u.x,u.y,u.z),h.push(0,0,1),m.x=(u.x/e+1)/2,m.y=(u.y/e+1)/2,d.push(m.x,m.y)}f+=c}for(let y=0;y<s;y++){const p=y*(n+1);for(let g=0;g<n;g++){const A=g+p,E=A,w=A+n+1,q=A+n+2,N=A+1;o.push(E,w,N),o.push(w,q,N)}}this.setIndex(o),this.setAttribute("position",new Ce(l,3)),this.setAttribute("normal",new Ce(h,3)),this.setAttribute("uv",new Ce(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class _s extends on{constructor(t=new Ch([new vt(0,.5),new vt(-.5,-.5),new vt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let d=0;d<t.length;d++)h(t[d]),this.addGroup(o,l,d),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ce(s,3)),this.setAttribute("normal",new Ce(r,3)),this.setAttribute("uv",new Ce(a,2));function h(d){const f=s.length/3,c=d.extractPoints(e);let u=c.shape;const m=c.holes;js.isClockWise(u)===!1&&(u=u.reverse());for(let p=0,g=m.length;p<g;p++){const A=m[p];js.isClockWise(A)===!0&&(m[p]=A.reverse())}const y=js.triangulateShape(u,m);for(let p=0,g=m.length;p<g;p++){const A=m[p];u=u.concat(A)}for(let p=0,g=u.length;p<g;p++){const A=u[p];s.push(A.x,A.y,0),r.push(0,0,1),a.push(A.x,A.y)}for(let p=0,g=y.length;p<g;p++){const A=y[p],E=A[0]+f,w=A[1]+f,q=A[2]+f;n.push(E,w,q),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Qg(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];n.push(a)}return new _s(n,t.curveSegments)}}function Qg(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class hi extends on{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let h=0;const d=[],f=new O,c=new O,u=[],m=[],y=[],p=[];for(let g=0;g<=n;g++){const A=[],E=g/n;let w=0;g===0&&a===0?w=.5/e:g===n&&l===Math.PI&&(w=-.5/e);for(let q=0;q<=e;q++){const N=q/e;f.x=-t*Math.cos(s+N*r)*Math.sin(a+E*o),f.y=t*Math.cos(a+E*o),f.z=t*Math.sin(s+N*r)*Math.sin(a+E*o),m.push(f.x,f.y,f.z),c.copy(f).normalize(),y.push(c.x,c.y,c.z),p.push(N+w,1-E),A.push(h++)}d.push(A)}for(let g=0;g<n;g++)for(let A=0;A<e;A++){const E=d[g][A+1],w=d[g][A],q=d[g+1][A],N=d[g+1][A+1];(g!==0||a>0)&&u.push(E,w,N),(g!==n-1||l<Math.PI)&&u.push(w,q,N)}this.setIndex(u),this.setAttribute("position",new Ce(m,3)),this.setAttribute("normal",new Ce(y,3)),this.setAttribute("uv",new Ce(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ge extends As{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sh,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class fl extends Be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class t_ extends fl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Xa=new ae,Mc=new O,Sc=new O;class Ih{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rl,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Mc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Mc),Sc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Sc),e.updateMatrixWorld(),Xa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const bc=new ae,Ws=new O,Ya=new O;class e_ extends Ih{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new vt(4,2),this._viewportCount=6,this._viewports=[new ge(2,1,1,1),new ge(0,1,1,1),new ge(3,1,1,1),new ge(1,1,1,1),new ge(3,0,1,1),new ge(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ws.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ws),Ya.copy(n.position),Ya.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ya),n.updateMatrixWorld(),s.makeTranslation(-Ws.x,-Ws.y,-Ws.z),bc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bc)}}class n_ extends fl{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new e_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class i_ extends Ih{constructor(){super(new gh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class s_ extends fl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.shadow=new i_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class r_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ec(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ec();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ec(){return performance.now()}const wc=new ae;class a_{constructor(t,e,n=0,s=1/0){this.ray=new il(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new sl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return wc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wc),this}intersectObject(t,e=!0,n=[]){return Xo(t,this,n,e),n.sort(Tc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Xo(t[s],this,n,e);return n.sort(Tc),n}}function Tc(i,t){return i.distance-t.distance}function Xo(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Xo(r[a],t,e,!0)}}class Ac{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Oe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class o_ extends Oi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qo);const Rc={type:"change"},pl={type:"start"},Uh={type:"end"},Or=new il,Cc=new ci,l_=Math.cos(70*Nn.DEG2RAD),Pe=new O,rn=2*Math.PI,me={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},qa=1e-6;class c_ extends o_{constructor(t,e=null){super(t,e),this.state=me.NONE,this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:vs.ROTATE,MIDDLE:vs.DOLLY,RIGHT:vs.PAN},this.touches={ONE:ps.ROTATE,TWO:ps.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new Qn,this._lastTargetPosition=new O,this._quat=new Qn().setFromUnitVectors(t.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ac,this._sphericalDelta=new Ac,this._scale=1,this._panOffset=new O,this._rotateStart=new vt,this._rotateEnd=new vt,this._rotateDelta=new vt,this._panStart=new vt,this._panEnd=new vt,this._panDelta=new vt,this._dollyStart=new vt,this._dollyEnd=new vt,this._dollyDelta=new vt,this._dollyDirection=new O,this._mouse=new vt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=u_.bind(this),this._onPointerDown=h_.bind(this),this._onPointerUp=d_.bind(this),this._onContextMenu=x_.bind(this),this._onMouseWheel=m_.bind(this),this._onKeyDown=g_.bind(this),this._onTouchStart=__.bind(this),this._onTouchMove=v_.bind(this),this._onMouseDown=f_.bind(this),this._onMouseMove=p_.bind(this),this._interceptControlDown=y_.bind(this),this._interceptControlUp=M_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Rc),this.update(),this.state=me.NONE}update(t=null){const e=this.object.position;Pe.copy(e).sub(this.target),Pe.applyQuaternion(this._quat),this._spherical.setFromVector3(Pe),this.autoRotate&&this.state===me.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=rn:n>Math.PI&&(n-=rn),s<-Math.PI?s+=rn:s>Math.PI&&(s-=rn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Pe.setFromSpherical(this._spherical),Pe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Pe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Pe.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new O(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const h=new O(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(o),this.object.updateMatrixWorld(),a=Pe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Or.origin.copy(this.object.position),Or.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Or.direction))<l_?this.object.lookAt(this.target):(Cc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Or.intersectPlane(Cc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>qa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>qa||this._lastTargetPosition.distanceToSquared(this.target)>qa?(this.dispatchEvent(Rc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?rn/60*this.autoRotateSpeed*t:rn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Pe.setFromMatrixColumn(e,0),Pe.multiplyScalar(-t),this._panOffset.add(Pe)}_panUp(t,e){this.screenSpacePanning===!0?Pe.setFromMatrixColumn(e,1):(Pe.setFromMatrixColumn(e,0),Pe.crossVectors(this.object.up,Pe)),Pe.multiplyScalar(t),this._panOffset.add(Pe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Pe.copy(s).sub(this.target);let r=Pe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/e.clientHeight),this._rotateUp(rn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/e.clientHeight),this._rotateUp(rn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new vt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function h_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function u_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function d_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Uh),this.state=me.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function f_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case vs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=me.DOLLY;break;case vs.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=me.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=me.ROTATE}break;case vs.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=me.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=me.PAN}break;default:this.state=me.NONE}this.state!==me.NONE&&this.dispatchEvent(pl)}function p_(i){switch(this.state){case me.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case me.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case me.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function m_(i){this.enabled===!1||this.enableZoom===!1||this.state!==me.NONE||(i.preventDefault(),this.dispatchEvent(pl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Uh))}function g_(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function __(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ps.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=me.TOUCH_ROTATE;break;case ps.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=me.TOUCH_PAN;break;default:this.state=me.NONE}break;case 2:switch(this.touches.TWO){case ps.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=me.TOUCH_DOLLY_PAN;break;case ps.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=me.TOUCH_DOLLY_ROTATE;break;default:this.state=me.NONE}break;default:this.state=me.NONE}this.state!==me.NONE&&this.dispatchEvent(pl)}function v_(i){switch(this._trackPointer(i),this.state){case me.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case me.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case me.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case me.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=me.NONE}}function x_(i){this.enabled!==!1&&i.preventDefault()}function y_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function M_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class S_ extends Sh{constructor(){super();const t=new Ae;t.deleteAttribute("uv");const e=new Ge({side:nn}),n=new Ge,s=new n_(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new Zt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new Zt(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new Zt(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new Zt(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const h=new Zt(t,n);h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),this.add(h);const d=new Zt(t,n);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);const f=new Zt(t,n);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);const c=new Zt(t,hs(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const u=new Zt(t,hs(50));u.position.set(-16.109,18.021,-8.207),u.scale.set(.1,2.425,2.751),this.add(u);const m=new Zt(t,hs(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);const y=new Zt(t,hs(43));y.position.set(-.462,8.89,14.52),y.scale.set(4.38,5.441,.088),this.add(y);const p=new Zt(t,hs(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);const g=new Zt(t,hs(100));g.position.set(0,20,0),g.scale.set(1,.1,1),this.add(g)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function hs(i){const t=new En;return t.color.setScalar(i),t}const Ci='Inter, "Segoe UI", Roboto, Arial, sans-serif',Br=2;function us(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}const $a=(i,t,e)=>new Kt(i).lerp(new Kt(t),e).getStyle();function Pc(i,t,e){let n=String(t);if(i.measureText(n).width<=e)return n;for(;n.length>3&&i.measureText(n+"…").width>e;)n=n.slice(0,-1);return n+"…"}function b_({title:i,number:t=null,status:e="",color:n=null,muted:s=!1,params:r=[],paramsLine:a=!1}){const o=document.createElement("canvas"),l=o.getContext("2d"),h=`${s?500:600} ${s?11.5:13}px ${Ci}`,d=`700 13px ${Ci}`,f=`600 11px ${Ci}`,c=`500 11px ${Ci}`,u=`700 11px ${Ci}`,m=String(i||""),y=t!=null?String(t):"",p=(r||[]).slice(0,6),g=a&&p.length?p.map(ht=>ht.value).join(" · "):"",A=!a&&p.length?p:[];l.font=h;const E=l.measureText(m).width;l.font=d;const w=y?l.measureText(y).width+6:0;l.font=f;const q=e?l.measureText(e).width:0,N=g?l.measureText(g).width:0;l.font=c;const R=A.reduce((ht,At)=>Math.max(ht,l.measureText(At.name).width),0);l.font=u;const k=A.reduce((ht,At)=>Math.max(ht,l.measureText(At.value).width),0),J=s?0:13,x=!!(m||y),b=x?s?20:24:0,Y=x?Math.ceil(9+J+w+E+10):0,H=e?18:0,U=e?Math.ceil(q+16):0,$=g?18:0,_=g?Math.ceil(N+16):0,M=15,v=A.length?A.length*M+8:0,L=A.length?Math.ceil(Math.min(170,R)+14+k+16):0,D=[b,H,$,v].filter(Boolean).length,I=3,K=9,nt=4,P=Math.min(520,Math.max(Y,U,_,L,20)+nt*2),V=nt+b+H+$+v+Math.max(0,D-1)*I+K+1;o.width=P*Br,o.height=V*Br,l.scale(Br,Br);let et=nt;if(x){const ht=(P-Math.min(Y,P-nt*2))/2,At=Math.min(Y,P-nt*2);l.save(),l.shadowColor="rgba(15, 23, 42, 0.28)",l.shadowBlur=5,l.shadowOffsetY=1.5,us(l,ht,et,At,b,b/2),l.fillStyle=s?"rgba(255, 255, 255, 0.86)":"#ffffff",l.fill(),l.restore(),us(l,ht+.5,et+.5,At-1,b-1,b/2),l.strokeStyle="rgba(15, 23, 42, 0.12)",l.lineWidth=1,l.stroke();let zt=ht+9;const kt=et+b/2;J&&(l.beginPath(),l.arc(zt+4,kt,4,0,Math.PI*2),l.fillStyle=n||"#94a3b8",l.fill(),zt+=J),l.textBaseline="middle",y&&(l.font=d,l.fillStyle="#0f172a",l.fillText(y,zt,kt+.5),zt+=w),l.font=h,l.fillStyle=s?"#475569":"#0f172a",l.fillText(Pc(l,m,ht+At-10-zt),zt,kt+.5),et+=b+I}if(l.textBaseline="middle",e){const ht=Math.min(U,P-nt*2),At=(P-ht)/2,zt=et,kt=n||"#64748b";us(l,At,zt,ht,H,H/2),l.fillStyle=$a(kt,"#ffffff",.8),l.fill(),l.strokeStyle=$a(kt,"#ffffff",.35),l.stroke(),l.font=f,l.fillStyle=$a(kt,"#000000",.5),l.textAlign="center",l.fillText(e,P/2,zt+H/2+.5,ht-12),l.textAlign="start",et+=H+I}if(g){const ht=Math.min(_,P-nt*2),At=(P-ht)/2;us(l,At,et,ht,$,$/2),l.fillStyle="rgba(255, 255, 255, 0.94)",l.fill(),l.strokeStyle="rgba(15, 23, 42, 0.14)",l.stroke(),l.font=f,l.fillStyle="#0f172a",l.textAlign="center",l.fillText(g,P/2,et+$/2+.5,ht-12),l.textAlign="start",et+=$+I}if(A.length){const ht=Math.min(L,P-nt*2),At=(P-ht)/2;l.save(),l.shadowColor="rgba(15, 23, 42, 0.2)",l.shadowBlur=4,us(l,At,et,ht,v,6),l.fillStyle="rgba(255, 255, 255, 0.95)",l.fill(),l.restore(),us(l,At+.5,et+.5,ht-1,v-1,6),l.strokeStyle="rgba(15, 23, 42, 0.12)",l.stroke(),A.forEach((zt,kt)=>{const B=et+4+kt*M+M/2;l.font=c,l.fillStyle="#475569",l.fillText(Pc(l,zt.name,ht-16-k-10),At+8,B+.5),l.font=u,l.fillStyle="#0f172a",l.textAlign="right",l.fillText(zt.value,At+ht-8,B+.5),l.textAlign="start"}),et+=v+I}const lt=et-(D?I:0);l.beginPath(),l.moveTo(P/2,lt),l.lineTo(P/2,V-1),l.strokeStyle=s?"rgba(71, 85, 105, 0.45)":"rgba(15, 23, 42, 0.55)",l.lineWidth=1.5,l.stroke(),l.beginPath(),l.arc(P/2,V-1.5,1.5,0,Math.PI*2),l.fillStyle=l.strokeStyle,l.fill();const ft=new zi(o);return ft.colorSpace=$e,ft.minFilter=Sn,ft.generateMipmaps=!1,{texture:ft,width:P,height:V}}function E_(i){const t=document.createElement("canvas"),e=t.getContext("2d"),n=`700 64px ${Ci}`;e.font=n;const s=Math.min(2048,Math.ceil(e.measureText(i).width+90));t.width=s,t.height=120,e.fillStyle="#ffffff",e.fillRect(0,0,s,120),e.fillStyle="#1d4ed8",e.fillRect(0,0,18,120),e.font=n,e.fillStyle="#0f172a",e.textBaseline="middle",e.fillText(i,48,64,s-70);const r=new zi(t);return r.colorSpace=$e,r.anisotropy=4,{texture:r,aspect:s/120}}function w_(i){const t=document.createElement("canvas"),e=t.getContext("2d"),n=`800 96px ${Ci}`;e.font=n;const s=Math.min(4096,Math.ceil(e.measureText(i).width+40));t.width=s,t.height=128,e.font=n,e.fillStyle="rgba(30, 41, 59, 0.9)",e.textBaseline="middle",e.fillText(i,20,68);const r=new zi(t);return r.colorSpace=$e,r.anisotropy=8,{texture:r,aspect:s/128}}function T_(){const i=document.createElement("canvas");i.width=128,i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.75)"),e.addColorStop(.6,"rgba(255,255,255,0.18)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);const n=new zi(i);return n.colorSpace=$e,n}function A_(i,t=0){const e=(Number(i.rot)||0)*Math.PI/180,n=Math.abs(Math.cos(e)),s=Math.abs(Math.sin(e)),r=((i.w||0)*n+(i.d||0)*s)/2+t,a=((i.w||0)*s+(i.d||0)*n)/2+t;return[i.x-r,i.x+r,i.z-a,i.z+a]}function R_(i){return i!=null&&i.h?i.h:Math.min(12,Math.max(6.5,6+Math.max((i==null?void 0:i.w)||0,(i==null?void 0:i.d)||0)/25))}function ml(i,t,e=1,n=1){const s=document.createElement("canvas");s.width=i,s.height=i,t(s.getContext("2d"),i);const r=new zi(s);return r.colorSpace=$e,r.wrapS=mi,r.wrapT=mi,r.repeat.set(e,n),r}function C_(i,t){let e=7;const n=()=>(e=e*16807%2147483647,e/2147483647);return ml(512,(s,r)=>{s.fillStyle="#ffffff",s.fillRect(0,0,r,r);for(let a=0;a<40;a+=1){const o=n()*r,l=n()*r,h=30+n()*110,d=s.createRadialGradient(o,l,0,o,l,h),f=n()>.5?0:255;d.addColorStop(0,`rgba(${f},${f},${f},${.035+n()*.03})`),d.addColorStop(1,`rgba(${f},${f},${f},0)`),s.fillStyle=d,s.fillRect(o-h,l-h,h*2,h*2)}for(let a=0;a<9e3;a+=1){const o=Math.floor(n()*120);s.fillStyle=`rgba(${o},${o},${o},${.03+n()*.05})`,s.fillRect(n()*r,n()*r,1+n()*1.5,1+n()*1.5)}s.fillStyle="rgba(70, 76, 84, 0.32)",s.fillRect(0,0,r,2),s.fillRect(0,0,2,r)},i,t)}function Nh(){return ml(128,(i,t)=>{i.fillStyle="#f5b800",i.fillRect(0,0,t,t),i.fillStyle="#1f2328";for(let e=-t;e<t*2;e+=32)i.beginPath(),i.moveTo(e,0),i.lineTo(e+16,0),i.lineTo(e+16-t,t),i.lineTo(e-t,t),i.closePath(),i.fill()},1,1)}function P_(i){return ml(128,(t,e)=>{t.fillStyle="#ffffff",t.fillRect(0,0,e,e),t.fillStyle="rgba(90, 100, 112, 0.18)",t.fillRect(0,0,3,e),t.fillStyle="rgba(255, 255, 255, 0.9)",t.fillRect(3,0,2,e),t.fillStyle="rgba(90, 100, 112, 0.07)",t.fillRect(e/2,0,2,e)},i,1)}function fn(i,t={}){return new Ge({color:i,roughness:.75,metalness:.05,...t})}function li(i,t,e,n,s,r,a,{shadow:o=!0}={}){const l=new Zt(new Ae(i,t,e),n);return l.position.set(s,r,a),l.castShadow=o,l.receiveShadow=!0,l}function L_(i,t,e,n,s){const r=[],a=[],o=(d,f,c,u)=>{const m=r.length/3;r.push(d,0,f,c,0,f,c,0,u,d,0,u),a.push(m,m+2,m+1,m,m+3,m+2)},l=(d,f)=>{for(let c=0;c<d;c+=n+s)f(c,Math.min(d,c+n))};l(i,(d,f)=>{o(-i/2+d,-t/2,-i/2+f,-t/2+e),o(-i/2+d,t/2-e,-i/2+f,t/2)}),l(t,(d,f)=>{o(-i/2,-t/2+d,-i/2+e,-t/2+f),o(i/2-e,-t/2+d,i/2,-t/2+f)});const h=new on;return h.setAttribute("position",new Ce(r,3)),h.setIndex(a),h.computeVertexNormals(),h}function ds(i,t,e,{shadow:n=!0}={}){if(!e.length)return null;const s=new cl(i,t,e.length),r=new ae,a=new Qn;return e.forEach((o,l)=>{a.setFromEuler(new wn(0,o.ry||0,0)),r.compose(new O(o.x,o.y,o.z),a,new O(o.sx??1,o.sy??1,o.sz??1)),s.setMatrixAt(l,r)}),s.instanceMatrix.needsUpdate=!0,s.computeBoundingBox(),s.computeBoundingSphere(),s.castShadow=n,s.receiveShadow=!0,s}function D_(i,{anisotropy:t=4}={}){const e=i.floor||{w:60,d:40},{w:n,d:s}=e,r=R_(e),a=new en,o=i.elements||[],l=i.aisles||[],h=o.filter(U=>!["label","crane","light"].includes(U.kind)).map(U=>A_(U,.45)),d=(U,$,_=.3)=>!h.some(M=>U+_>M[0]&&U-_<M[1]&&$+_>M[2]&&$-_<M[3]),f=Math.max(n,s),c=new Zt(new In(f*8,f*8),fn("#a9b1ba",{roughness:.95}));c.rotation.x=-Math.PI/2,c.position.y=-.04,c.receiveShadow=!0,a.add(c);const u=C_(n/6,s/6);u.anisotropy=t;const m=new Zt(new In(n,s),fn("#bfc5cc",{map:u,roughness:.78,metalness:0}));m.rotation.x=-Math.PI/2,m.receiveShadow=!0,a.add(m);const y=.25,p=.6,g=[],A=fn("#98a1ab",{roughness:.9}),E=fn("#7d97ad",{roughness:.1,metalness:.4,transparent:!0,opacity:.75}),w=fn("#5b636c",{roughness:.6,metalness:.3}),q=fn("#8a97a4",{roughness:.55,metalness:.35}),N=fn("#ffffff",{map:Nh(),roughness:.6});[{len:n+2*y,x:0,z:-s/2-y/2,ry:0,normal:[0,0,-1],door:!1},{len:n+2*y,x:0,z:s/2+y/2,ry:0,normal:[0,0,1],door:!1},{len:s,x:-n/2-y/2,z:0,ry:Math.PI/2,normal:[-1,0,0],door:s>14},{len:s,x:n/2+y/2,z:0,ry:Math.PI/2,normal:[1,0,0],door:s>14}].forEach(U=>{const $=new en;$.position.set(U.x,0,U.z),$.rotation.y=U.ry,$.add(li(U.len,p,y+.04,A,0,p/2,0));const _=new en,M=fn("#c7d0da",{map:P_(U.len/1),roughness:.6,metalness:.15}),v=r*.56,L=Math.min(r-.6,r*.74);if(_.add(li(U.len,v-p,y,M,0,p+(v-p)/2,0)),_.add(li(U.len,L-v,y*.5,E,0,(v+L)/2,0,{shadow:!1})),_.add(li(U.len,r-L,y,M,0,(L+r)/2,0)),_.add(li(U.len+.1,.18,y+.1,w,0,r+.09,0)),U.door){const I=Math.min(4.5,r*.62),K=-Math.sign(U.normal[0]||U.normal[2])*(y/2+.02),nt=li(4.5,I-p,.06,q,0,p+(I-p)/2,0);nt.position.z=K,_.add(nt),[-1,1].forEach(P=>{const V=li(.22,I,.22,N,P*2.36,I/2,nt.position.z*1.6);_.add(V)})}$.add(_),a.add($),g.push({upper:_,normal:new O(...U.normal),center:new O(U.x,r/2,U.z)})});const k=e.columns===0?0:e.columns||12;if(k>0){const U=Math.max(1,Math.round(n/k)),$=Math.max(1,Math.round(s/k)),_=Array.from({length:U+1},(P,V)=>-n/2+V*n/U),M=Array.from({length:$+1},(P,V)=>-s/2+V*s/$),v=(P,V)=>l.some(et=>Math.abs(P-et.x)<et.w/2+.3&&Math.abs(V-et.z)<et.d/2+.3),L=[];if(_.forEach(P=>{L.push([P,-s/2+.22]),L.push([P,s/2-.22])}),M.slice(1,-1).forEach(P=>{L.push([-n/2+.22,P]),L.push([n/2-.22,P])}),s>26){const P=Math.max(1,Math.round(s/24)-1);for(let V=1;V<=P;V+=1){const et=-s/2+V*s/(P+1);_.slice(1,-1).forEach(lt=>L.push([lt,et]))}}const D=L.filter(([P,V])=>d(P,V,.35)&&!v(P,V)),I=new Ae(1,1,1),K=fn("#7c8894",{roughness:.5,metalness:.45});[ds(I,K,D.map(([P,V])=>({x:P,y:r/2,z:V-.17,sx:.4,sy:r,sz:.04}))),ds(I,K,D.map(([P,V])=>({x:P,y:r/2,z:V+.17,sx:.4,sy:r,sz:.04}))),ds(I,K,D.map(([P,V])=>({x:P,y:r/2,z:V,sx:.04,sy:r,sz:.32}))),ds(I,N,D.map(([P,V])=>({x:P,y:.6,z:V,sx:.5,sy:1.2,sz:.5})))].filter(Boolean).forEach(P=>a.add(P))}const J=fn("#d3d7dc",{roughness:.8,transparent:!0,opacity:.6,polygonOffset:!0,polygonOffsetFactor:-1}),x=fn("#f2b100",{roughness:.55}),b=[];l.forEach(U=>{const $=new Zt(new In(U.w,U.d),J);$.rotation.x=-Math.PI/2,$.position.set(U.x,.004,U.z),$.receiveShadow=!0,a.add($);const _=U.w>=U.d,M=_?U.w:U.d,v=(_?U.d:U.w)/2-.08;[-1,1].forEach(L=>{const D=li(_?M:.12,.006,_?.12:M,x,U.x+(_?0:L*v),.006,U.z+(_?L*v:0),{shadow:!1});a.add(D)}),[-1,1].forEach(L=>[-1,1].forEach(D=>b.push([U.x+L*(U.w/2+.3),U.z+D*(U.d/2+.3)])))});const Y=[];(i.zones||[]).forEach(U=>{const $=U.color||"#2563eb",_=new Zt(L_(U.w,U.d,.12,.9,.55),new En({color:$,transparent:!0,opacity:.85,toneMapped:!1,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));if(_.position.set(U.x,.008,U.z),a.add(_),Y.push(_),U.name){const{texture:M,aspect:v}=w_(String(U.name).toUpperCase());M.anisotropy=t;let L=Math.min(1.3,Math.max(.55,U.d*.08)),D=L*v;D>U.w-1.2&&(D=Math.max(1,U.w-1.2),L=D/v);const I=new Zt(new In(D,L),new En({map:M,transparent:!0,opacity:.32,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));I.rotation.x=-Math.PI/2,I.position.set(U.x-U.w/2+.6+D/2,.01,U.z-U.d/2+.45+L/2),a.add(I),Y.push(I)}});const H=b.filter(([U,$])=>Math.abs(U)<n/2-.3&&Math.abs($)<s/2-.3&&d(U,$,.2)).slice(0,160);if(H.length){const U=new tn(.1,.1,1,14);a.add(ds(U,fn("#f2b100",{roughness:.5}),H.map(([$,_])=>({x:$,y:.5,z:_,sy:1})))),a.add(ds(U,fn("#1f2328",{roughness:.6}),H.map(([$,_])=>({x:$,y:.72,z:_,sx:1.03,sy:.12,sz:1.03}))))}return{group:a,walls:g,zones:Y,height:r}}function I_(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new on;let h=0;for(let d=0;d<i.length;++d){const f=i[d];let c=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const u in f.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(f.attributes[u]),c++}if(c!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const u in f.morphAttributes){if(!s.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;a[u]===void 0&&(a[u]=[]),a[u].push(f.morphAttributes[u])}if(t){let u;if(e)u=f.index.count;else if(f.attributes.position!==void 0)u=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,u,d),h+=u}}if(e){let d=0;const f=[];for(let c=0;c<i.length;++c){const u=i[c].index;for(let m=0;m<u.count;++m)f.push(u.getX(m)+d);d+=i[c].attributes.position.count}l.setIndex(f)}for(const d in r){const f=Lc(r[d]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;l.setAttribute(d,f)}for(const d in a){const f=a[d][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[d]=[];for(let c=0;c<f;++c){const u=[];for(let y=0;y<a[d].length;++y)u.push(a[d][y][c]);const m=Lc(u);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;l.morphAttributes[d].push(m)}}return l}function Lc(i){let t,e,n,s=-1,r=0;for(let h=0;h<i.length;++h){const d=i[h];if(t===void 0&&(t=d.array.constructor),t!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=d.itemSize),e!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=d.normalized),n!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=d.gpuType),s!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=d.count*e}const a=new t(r),o=new mn(a,e,n);let l=0;for(let h=0;h<i.length;++h){const d=i[h];if(d.isInterleavedBufferAttribute){const f=l/e;for(let c=0,u=d.count;c<u;c++)for(let m=0;m<e;m++){const y=d.getComponent(c,m);o.setComponent(c+f,m,y)}}else a.set(d.array,l);l+=d.count*e}return s!==void 0&&(o.gpuType=s),o}const zr={machine:"#2c6cb0",cnc:"#2c6cb0",mill:"#2c6cb0",lathe:"#2c6cb0",press:"#2f7d52",robot:"#f08a1c",conveyor:"#5c6670",oven:"#2c6cb0",tank:"#8d99a6",workstation:"#2c6cb0",saw:"#f0a30a",shear:"#2f5d8f",plasma:"#e8641b",furnace:"#5a6570",drill:"#557a66",welding:"#1f6fd1",blast:"#4e6a85",paint_booth:"#2c6cb0",packing:"#2c6cb0",agv:"#f2b705",forklift:"#f2b705",crane:"#f2b705",custom:"#8a97a4"},oe={body:"#e3e6ea",bodyDark:"#c9ced4",dark:"#2e3339",frame:"#59626c",steel:"#aab3bc",bright:"#c9d0d6",rubber:"#1d2024",wood:"#c4975d",cardboard:"#b98a57",crate:"#5b7894",rackBlue:"#1f5aa6",rackOrange:"#ef6c1a",yellow:"#f2b100",glass:"#86aac6",vest:["#f97316","#facc15"],trousers:"#273246",skin:"#e0b08a",helmet:["#f8fafc","#facc15","#f8fafc"]},kr=(i,t,e)=>Math.min(e,Math.max(t,i));function U_(i){let t=2166136261;for(const n of String(i))t=Math.imul(t^n.charCodeAt(0),16777619);let e=t>>>0;return()=>{e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function N_(){const i=document.createElement("canvas");i.width=64,i.height=64;const t=i.getContext("2d");t.clearRect(0,0,64,64),t.fillStyle="#ffffff",t.fillRect(0,0,64,5),t.fillRect(0,0,5,64);const e=new zi(i);return e.wrapS=mi,e.wrapT=mi,e.repeat.set(14,20),e}class Ka{constructor(t){this.kit=t,this.groups=new Map}add(t,e,n){const s=t+"|"+e.uuid;this.groups.has(s)||this.groups.set(s,{shape:t,material:e,items:[]}),this.groups.get(s).items.push(n)}flush(t){const e=new ae,n=new Qn,s=new wn,r=new Kt;this.groups.forEach(({shape:a,material:o,items:l})=>{const h=a==="cyl"?this.kit.unitCylX:this.kit.unitBox,d=new cl(h,o,l.length);l.forEach((f,c)=>{s.set(f.rx||0,f.ry||0,f.rz||0),n.setFromEuler(s),e.compose(new O(f.x,f.y,f.z),n,new O(f.sx,f.sy,f.sz)),d.setMatrixAt(c,e),f.color?d.setColorAt(c,r.set(f.color)):d.instanceColor&&d.setColorAt(c,r.set("#ffffff"))}),d.instanceColor&&(d.instanceColor.needsUpdate=!0),d.instanceMatrix.needsUpdate=!0,d.computeBoundingBox(),d.computeBoundingSphere(),d.castShadow=!0,d.receiveShadow=!0,t.add(d)}),this.groups.clear()}}class F_{constructor(){this.materials=new Map,this.glow=T_(),this.hazard=Nh(),this.fenceMesh=N_(),this.unitBox=new Ae(1,1,1),this.unitCylX=new tn(.5,.5,1,18).rotateZ(Math.PI/2)}mat(t,e){return this.materials.has(t)||this.materials.set(t,e()),this.materials.get(t)}paint(t,e=.5,n=.2){return this.mat(`p${t}|${e}|${n}`,()=>new Ge({color:t,roughness:e,metalness:n}))}get m(){const t=this;return{body:t.paint(oe.body,.45,.15),bodyDark:t.paint(oe.bodyDark,.5,.2),dark:t.paint(oe.dark,.55,.35),frame:t.paint(oe.frame,.5,.45),steel:t.paint(oe.steel,.32,.8),bright:t.paint(oe.bright,.22,.9),rubber:t.paint(oe.rubber,.9,0),wood:t.paint(oe.wood,.85,0),yellow:t.paint(oe.yellow,.45,.15),rackBlue:t.paint(oe.rackBlue,.45,.35),rackOrange:t.paint(oe.rackOrange,.45,.25),cardboard:t.mat("cardboard",()=>new Ge({color:"#ffffff",roughness:.92,metalness:0})),steelInst:t.mat("steelInst",()=>new Ge({color:"#ffffff",roughness:.35,metalness:.75})),glass:t.mat("glass",()=>new Ge({color:oe.glass,roughness:.08,metalness:.2,transparent:!0,opacity:.38,depthWrite:!1})),screen:t.mat("screen",()=>new Ge({color:"#0d1b2a",emissive:"#3b82f6",emissiveIntensity:.7,roughness:.3})),hazard:t.mat("hazard",()=>new Ge({map:t.hazard,roughness:.55})),fence:t.mat("fence",()=>new Ge({color:"#30353b",map:t.fenceMesh,alphaMap:t.fenceMesh,transparent:!0,alphaTest:.35,side:Pn,roughness:.6,metalness:.4})),film:t.mat("film",()=>new Ge({color:"#e2ecf3",transparent:!0,opacity:.32,roughness:.15,depthWrite:!1})),curtain:t.mat("curtain",()=>new Ge({color:"#c2410c",transparent:!0,opacity:.55,roughness:.5,side:Pn,depthWrite:!1})),liquid:t.mat("liquid",()=>new Ge({color:"#203a52",roughness:.06,metalness:.35})),hot:t.mat("hot",()=>new En({color:"#ff7a1a",toneMapped:!1})),lamp:t.mat("lamp",()=>new En({color:"#f5f8ff",toneMapped:!1}))}}glowSprite(t,e){const n=new Eh(new ll({map:this.glow,color:t,blending:Kr,transparent:!0,depthWrite:!1,toneMapped:!1,opacity:0}));return n.scale.set(e,e,1),n}build(t,e,{hallH:n=8}={}){const s=new en,r=this,a=this.m,o=t.kind,l=this.paint(t.color||zr[o]||zr.custom,.42,.2),h=this.paint(new Kt(t.color||zr[o]||zr.custom).multiplyScalar(.62).getStyle(),.5,.25),d=U_(t.id),f=new Ka(this),{w:c,h:u,d:m}=t;e.animators=e.animators||[],e.andonAt=null,e.top=u,e.front=m/2;const y=(_,M,v,L,D,I=s,K=0,nt=0,P=0)=>{const V=new Zt(_,M);return V.position.set(v,L,D),V.rotation.set(K,nt,P),V.castShadow=!0,V.receiveShadow=!0,I.add(V),V},p=(_,M,v,L,D,I,K,nt=s)=>y(new Ae(Math.max(.01,_),Math.max(.01,M),Math.max(.01,v)),L,D,I,K,nt),g=(_,M,v,L,D,I,K=s,nt=_,P=20)=>y(new tn(_,nt,Math.max(.01,M),P),v,L,D,I,K),A=(_,M,v,L,D,I,K=s,nt=20)=>y(new tn(_,_,Math.max(.01,M),nt),v,L,D,I,K,0,0,Math.PI/2),E=(_,M,v,L,D,I,K=s,nt=20)=>y(new tn(_,_,Math.max(.01,M),nt),v,L,D,I,K,Math.PI/2,0,0),w=(_,M,v,L=s)=>{const D=new en;return D.position.set(_,M,v),L.add(D),D},q=_=>(_.userData.keep=!0,_),N=(_,M,v,L=0,D=s)=>{const I=w(_,M,v,D);return I.rotation.y=L,p(.46,.36,.1,a.dark,0,0,0,I),p(.36,.25,.012,a.screen,0,.02,.056,I),p(.05,.05,.3,a.frame,0,0,-.2,I),I},R=(_,M,v,L,D=0,I=.16,K=.045)=>{for(let nt=_+I/2;nt<M;nt+=I)f.add("cyl",a.steelInst,{x:nt,y:v,z:D,sx:L,sy:K*2,sz:K*2,ry:Math.PI/2,color:"#b8c0c8"})},k=(_,M,v,L,D=0)=>{const I=M-_;if(I<.3)return;[-1,1].forEach(nt=>p(I,.1,.06,a.frame,(_+M)/2,v-.05,D+nt*(L/2-.03)));const K=Math.max(2,Math.round(I/1.4)+1);for(let nt=0;nt<K;nt+=1){const P=_+.08+nt*(I-.16)/(K-1);[-1,1].forEach(V=>p(.06,v-.1,.06,a.frame,P,(v-.1)/2,D+V*(L/2-.06)))}R(_,M,v+.01,L-.12,D)},J=(_,M,v,L,D,I,K)=>{const nt=_==="mixed"?["boxes","parts","steel","coils"][Math.floor(d()*4)]:_||"boxes";if(nt!=="empty")if(nt==="boxes"){const P=Math.max(1,Math.round(K/.42)),V=K/P;for(let et=0;et<P;et+=1)[-1,1].forEach(lt=>[-1,1].forEach(ft=>{const ht=.85+d()*.25;f.add("box",a.cardboard,{x:M+lt*D/4,y:v+V*et+V/2,z:L+ft*I/4,sx:D/2-.02,sy:V-.01,sz:I/2-.02,color:new Kt(oe.cardboard).multiplyScalar(ht).getStyle()})}))}else if(nt==="steel"){const V=Math.max(1,Math.min(3,Math.round(K/.12)));for(let et=0;et<V;et+=1)for(let lt=0;lt<4;lt+=1)f.add("box",a.steelInst,{x:M,y:v+.06+et*.11,z:L-I/2+(lt+.5)*(I/4),sx:D*1.15,sy:.1,sz:I/4-.03,color:d()>.5?"#9aa4ad":"#7e8892"})}else if(nt==="coils"){const P=Math.min(D,I)*.42;f.add("cyl",a.steelInst,{x:M,y:v+P,z:L,sx:Math.min(D,.55),sy:P*2,sz:P*2,color:"#8f99a3"})}else f.add("box",a.cardboard,{x:M,y:v+K*.42,z:L,sx:D,sy:K*.84,sz:I,color:oe.crate}),f.add("box",a.steelInst,{x:M,y:v+K*.86,z:L,sx:D*.8,sy:.05,sz:I*.8,color:"#6f7b86"})},x=(_,M,v,L,D,I,K)=>{f.add("box",a.cardboard,{x:_,y:M+.07,z:v,sx:L,sy:.14,sz:D,color:oe.wood}),J(I,_,M+.14,v,L-.04,D-.04,K)},b=(_,M,v,L,D,I=0)=>{const K=Math.hypot(v-_,L-M),nt=Math.atan2(L-M,v-_),P=Math.max(1,Math.ceil(K/1.4)),V=K/P;for(let et=0;et<=P;et+=1){const lt=et*V;f.add("box",a.cardboard,{x:_+Math.cos(nt)*lt,y:D/2,z:M+Math.sin(nt)*lt,sx:.07,sy:D,sz:.07,color:oe.yellow})}for(let et=0;et<P;et+=1){const lt=(et+.5)*V;if(I&&Math.abs(lt-K/2)<I/2)continue;const ft=_+Math.cos(nt)*lt,ht=M+Math.sin(nt)*lt,At=y(new Ae(V-.08,D-.2,.02),a.fence,ft,.12+(D-.2)/2,ht,s,0,-nt,0);At.castShadow=!1,f.add("box",a.cardboard,{x:ft,y:.07,z:ht,sx:V-.08,sy:.12,sz:.025,ry:-nt,color:"#6b7480"})}},Y=(_,M,v,L=0,D=0)=>{const I=L-_/2,K=L+_/2,nt=D-M/2,P=D+M/2;b(I,nt,K,nt,v),b(I,P,K,P,v,Math.min(1.4,_*.3)),b(I,nt,I,P,v),b(K,nt,K,P,v)},H=(_,M,v,L,D="#ffd27a",I=.9)=>{const K=r.glowSprite(D,I);return K.position.set(M,v,L),_.add(K),K},U=(_,M,v=1)=>{const L=Math.random();_.material.opacity=M?L>.25?.95:.35:0;const D=v*(.6+L*.9);_.scale.set(D,D,1)};switch(o){case"machine":case"cnc":case"mill":{const _=Math.min(.32,u*.1),M=(o==="mill"?u*.74:u*.86)-_;p(c,_,m,a.dark,0,_/2,0),p(c,M,m*.96,a.body,0,_+M/2,0),p(c+.04,u*.05,m*.96+.04,l,0,_+M-u*.032,0),p(c+.04,.08,m*.96+.04,h,0,_+.05,0);const v=c*.56,L=M*.74,D=_+M*.47;p(v,L,.05,a.bodyDark,-c*.12,D,m*.48+.025),p(v*.78,L*.6,.02,a.glass,-c*.12,D+L*.08,m*.48+.06),p(.04,L*.45,.06,a.steel,-c*.12+v*.42,D,m*.48+.08);const I=w(-c*.12,_,0);p(v*.7,.12,m*.45,a.frame,0,M*.28,0,I);const K=g(Math.min(c,m)*.05,M*.22,a.bright,0,M*.62,0,I),nt=p(v*.6,.02,m*.3,a.lamp,0,M*.92,0,I);nt.visible=!1,N(c*.36,_+M*.62,m*.48+.22,-.25),o==="mill"&&(p(c*.36,u*.2,m*.42,a.body,-c*.1,u*.74+u*.1,-m*.22),p(c*.36+.03,.06,m*.42+.03,l,-c*.1,u*.94+.03,-m*.22),e.top=u*.94),o!=="machine"&&(A(Math.min(u*.22,m*.3),.32,l,-c/2+.1,_+M*.55,-m*.1),p(.5,_+.55,m*.5,a.frame,c/2-.25,(_+.55)/2,-m*.2)),e.andonAt=[c*.42,_+M,-m*.36],e.animators.push((P,V,et,lt)=>{nt.visible=et,et&&(K.rotation.y+=V*28,K.position.y=M*.62-.05*(.5+.5*Math.sin(P*1.3+lt)),I.children[0].position.x=Math.sin(P*.5+lt)*v*.12)});break}case"lathe":{const _=u*.24;p(c,_,m*.8,a.dark,0,_/2,-m*.05),p(c*.96,u*.7,m*.86,a.body,0,_+u*.35,0),p(c*.96+.04,u*.05,m*.86+.04,l,0,_+u*.7,0),p(c*.5,u*.42,.03,a.glass,-c*.08,_+u*.38,m*.43+.03),p(c*.52,.05,.05,a.steel,-c*.08,_+u*.12,m*.43+.05);const M=w(-c*.28,_+u*.36,0);A(u*.11,.24,a.steel,0,0,0,M);for(let v=0;v<3;v+=1)p(.06,.06,.08,a.dark,.13,0,0,M).position.set(.13,Math.cos(v*2*Math.PI/3)*u*.08,Math.sin(v*2*Math.PI/3)*u*.08);A(u*.035,c*.32,a.bright,c*.17,0,0,M),p(.32,.3,.32,a.dark,c*.12,_+u*.42,.05),N(c*.4,_+u*.42,m*.43+.22,-.3),p(.6,_+.45,.5,a.frame,c/2-.3,(_+.45)/2,-m*.3),e.top=_+u*.725,e.andonAt=[c*.44,_+u*.725,-m*.32],e.animators.push((v,L,D)=>{D&&(M.rotation.x+=L*22)});break}case"drill":{const _=this.paint("#56605a",.6,.3);p(c,u*.08,m,_,0,u*.04,0);const M=Math.min(c,m)*.09;g(M,u*.86,l,-c*.36,u*.08+u*.43,0),g(M*1.15,u*.1,h,-c*.36,u*.99,0),p(c*.3,u*.12,m*.4,a.steel,c*.22,u*.08+u*.06,0);const v=w(-c*.36,u*.72,0);p(c*.84,u*.1,m*.22,l,c*.42,0,0,v);const L=w(c*.6,0,0,v);p(c*.2,u*.28,m*.3,l,0,-u*.04,0,L),g(.12,u*.12,a.dark,0,u*.16,0,L);const D=g(.045,u*.2,a.bright,0,-u*.26,0,L,.02);e.top=u*1.04,e.andonAt=[-c*.36,u*1.04,0],e.animators.push((I,K,nt,P)=>{nt&&(v.rotation.y=Math.sin(I*.22+P)*.3,D.rotation.y+=K*24,D.position.y=-u*.26-.08*(.5+.5*Math.sin(I*1.1+P)))});break}case"saw":{const _=Math.min(c*.42,2.6),M=c/2-_/2-c*.08,v=u*.42;p(_,v,m*.78,a.body,M,v/2,-m*.02),p(_+.04,.08,m*.78+.04,l,M,v-.12,-m*.02),p(_*1.06,.06,m*.82,a.dark,M,v+.03,-m*.02),p(.16,.3,m*.3,a.steel,M-_*.3,v+.2,-m*.1),p(.16,.3,m*.3,a.steel,M-_*.3,v+.2,m*.14);const L=w(M+_*.5,v+u*.12,-m*.05);p(_*1.12,u*.2,m*.34,l,-_*.56,u*.18,0,L),E(u*.17,m*.38,h,-_*1.06,u*.18,0,L),E(u*.17,m*.38,h,-.06,u*.18,0,L),p(.1,u*.2,.12,a.steel,-_*.78,u*.02,.05,L),p(.1,u*.2,.12,a.steel,-_*.34,u*.02,.05,L),p(_*.46,.02,.03,a.dark,-_*.56,-u*.06,.05,L),g(.05,u*.32,a.bright,M+_*.2,v+u*.2,-m*.3),k(-c/2,M-_/2,v,m*.4,.02),k(M+_/2,c/2,v,m*.4,.02),p(Math.max(.3,M-_/2+c/2-.2),.09,.09,a.bright,(-c/2+M-_/2)/2,v+.1,.02),p(Math.max(.3,M-_/2+c/2-.4),.09,.09,a.bright,(-c/2+M-_/2)/2,v+.1,.13),N(M-_*.2,v+u*.35,m*.42,.2),e.top=v+u*.48,e.andonAt=[M+_*.42,v+.03,-m*.36],e.animators.push((D,I,K,nt)=>{const P=((D*.07+nt)%1+1)%1;L.rotation.z=K?-.2*(1-P):-.25});break}case"shear":{const _=c/2-c*.07;[-1,1].forEach(v=>p(c*.12,u,m*.72,l,v*_,u/2,-m*.08)),p(c*.82,u*.42,m*.5,h,0,u*.21,-m*.08),p(c*.84,.05,m*.58,a.steel,0,u*.43,-m*.05);const M=w(0,u*.72,-m*.1);p(c*.78,u*.22,m*.32,l,0,0,0,M),p(c*.76,u*.06,.04,a.bright,0,-u*.13,m*.17,M),[-1,1].forEach(v=>g(Math.min(.18,c*.04),u*.22,a.steel,v*c*.3,u+u*.06,-m*.1));for(let v=-1;v<=1;v+=1)p(.08,.06,m*.42,a.frame,v*c*.3,u*.43,m*.29);p(c*.6,.02,m*.34,this.paint("#8693a0",.3,.7),0,u*.465,m*.24),p(c*.7,.1,.1,a.dark,0,u*.47,-m*.4),[-1,1].forEach(v=>p(.07,u*.6,.07,a.hazard,v*c*.46,u*.3,m*.46)),N(c*.47,u*.62,m*.4,-.4),e.andonAt=[_,u,-m*.36],e.animators.push((v,L,D,I)=>{M.position.y=D?u*.72-u*.09*Math.max(0,Math.sin(v*2+I)):u*.72});break}case"plasma":{const _=Math.min(u*.32,.8);p(c*.84,_,m*.8,a.dark,-c*.05,_/2,0);for(let D=-c*.46;D<c*.36;D+=.28)f.add("box",a.steelInst,{x:D,y:_+.05,z:0,sx:.025,sy:.1,sz:m*.78,color:"#5d666f"});p(c*.7,.025,m*.64,this.paint("#7f8b96",.3,.75),-c*.06,_+.11,0),[-1,1].forEach(D=>p(c,.12,.16,a.steel,0,_+.08,D*m*.45));const M=w(0,0,0);[-1,1].forEach(D=>p(.36,u-_-.1,.3,l,0,_+.14+(u-_-.1)/2,D*m*.45,M)),p(.42,.45,m*.98,l,0,u-.22,0,M),p(.18,.1,m*.9,a.dark,-.12,u+.02,0,M);const v=w(.3,0,0,M);p(.32,.5,.3,a.dark,0,u-.45,0,v),g(.035,u-_-.8,a.bright,0,_+.2+(u-_-.8)/2,0,v);const L=H(v,0,_+.16,0,"#ffd9a0",1.1);p(.5,1.3,.6,a.body,c/2-.3,.65,m*.24),p(.36,.26,.02,a.screen,c/2-.3,1,m*.24+.31),e.andonAt=[c/2-.3,1.3,m*.12],e.animators.push((D,I,K,nt)=>{K&&(M.position.x=Math.sin(D*.28+nt)*c*.32,v.position.z=Math.sin(D*.85+nt)*m*.3),U(L,K,1.1)});break}case"furnace":{const _=m*.78,M=-m*.11,v=this.paint("#5b6571",.65,.35);p(c,u*.8,_,v,0,u*.4,M),p(c*1.02,u*.05,_*1.02,this.paint("#7b8794",.5,.4),0,u*.825,M),[-1,1].forEach(nt=>p(.18,u*.96,.2,a.steel,nt*c*.34,u*.48,M+_/2+.1)),p(c*.72,.2,.22,a.steel,0,u*.95,M+_/2+.1);const L=p(c*.5,u*.42,.02,a.hot,0,u*.27,M+_/2+.005);q(L).castShadow=!1,L.visible=!1;const D=w(0,0,M+_/2+.12);p(c*.6,u*.55,.2,this.paint("#97a1ab",.45,.45),0,u*.3,0,D);const I=p(.12,.12,.02,a.hot,0,u*.42,.11,D);I.visible=!1;const K=H(s,0,u*.2,M+_/2+.6,"#ff8a3d",c*.8);[-1,1].forEach(nt=>{for(let P=0;P<3;P+=1)A(.09,.32,a.steel,nt*(c/2+.12),u*.2+P*u*.18,M-_*.2+P*.4);p(.06,.06,_*.9,a.yellow,nt*(c/2+.06),u*.12,M)}),g(.28,u*.55,a.steel,c*.3,u*.8+u*.275,M-_*.3),g(.36,.08,a.dark,c*.3,u*1.1,M-_*.3),p(.7,2,.45,a.body,-c*.43,1,m*.36),p(.32,.24,.02,a.screen,-c*.43,1.45,m*.36+.23),[-1,1].forEach(nt=>p(.08,.05,m/2-(M+_/2),a.steel,nt*c*.15,.03,(M+_/2+m/2)/2)),e.top=u*1.1,e.andonAt=[c*.42,u*.85,M+_*.3],e.animators.push((nt,P,V,et)=>{const lt=((nt*.045+et)%1+1)%1,ft=V&&lt<.18;D.position.y+=((ft?u*.36:0)-D.position.y)*Math.min(1,P*2),L.visible=V,I.visible=V,K.material.opacity=ft?.55+.15*Math.sin(nt*7):0});break}case"tank":{if(Math.abs(c-m)<.35*Math.max(c,m)){const M=Math.min(c,m)/2*.92,v=u*.14;for(let L=0;L<4;L+=1){const D=L*Math.PI/2+Math.PI/4;p(.12,v,.12,a.frame,Math.cos(D)*M*.75,v/2,Math.sin(D)*M*.75)}g(M,u*.72,a.steel,0,v+u*.36,0,s,M,32),y(new hi(M,32,12,0,Math.PI*2,0,Math.PI/2),a.steel,0,v+u*.72,0).scale.y=.35,g(M*.98,.06,a.frame,0,v+u*.5,0,s,M*.98,32),[-1,1].forEach(L=>p(.04,u*.8,.04,a.yellow,M+.15,v+u*.4,L*.2));for(let L=v+.3;L<u*.95;L+=.3)f.add("box",a.cardboard,{x:M+.15,y:L,z:0,sx:.03,sy:.03,sz:.4,color:oe.yellow});A(.08,M*.8,a.frame,-M-.2,v+.3,0),e.andonAt=[0,v+u*.72+M*.35,0]}else{const M=u*.62,v=.12;p(c,M,v,a.steel,0,M/2,-m/2+v/2),p(c,M,v,a.steel,0,M/2,m/2-v/2),p(v,M,m,a.steel,-c/2+v/2,M/2,0),p(v,M,m,a.steel,c/2-v/2,M/2,0),p(c-v*2,.02,m-v*2,a.liquid,0,M-.15,0),[-1,1].forEach(I=>{p(c,.04,.04,a.yellow,0,M+1,I*(m/2-.05)),p(.04,.04,m,a.yellow,I*(c/2-.05),M+1,0)});for(let I=-c/2+.05;I<=c/2;I+=Math.max(.6,c/5))[-1,1].forEach(K=>f.add("box",a.cardboard,{x:I,y:M+.5,z:K*(m/2-.05),sx:.04,sy:1,sz:.04,color:oe.yellow}));[-1,1].forEach(I=>p(.16,u,.16,h,I*c*.36,u/2,-m*.36)),p(c*.8,.2,.2,h,0,u-.1,-m*.36);const L=w(0,0,-m*.05);p(c*.45,.5,m*.45,this.paint("#4a525b",.6,.6),0,0,0,L),g(.02,1,a.dark,0,.75,0,L),g(.22,.45,l,c*.36,M+.25,m*.3);const D=[0,1,2].map(I=>H(s,(I-1)*c*.2,M+.3,0,"#f1f5f9",1.6));D.forEach(I=>I.material.blending=Ii),e.top=u,e.andonAt=[c*.36,u,-m*.36],e.animators.push((I,K,nt,P)=>{const V=((I*.06+P)%1+1)%1;L.position.y=nt?M+.3-Math.sin(V*Math.PI)*(M*.7):M+.4,D.forEach((et,lt)=>{const ft=((I*.25+lt/3+P)%1+1)%1;et.position.y=M+.2+ft*2.4,et.material.opacity=nt?.32*(1-ft):0;const ht=1.2+ft*2.2;et.scale.set(ht,ht,1)})})}break}case"welding":{const _=kr(u*.85,.8,.95),M=Math.min(c*.55,2),v=Math.min(m*.5,1.1),L=-c*.12,D=m*.08;p(M,.08,v,a.dark,L,_,D),[-1,1].forEach(lt=>[-1,1].forEach(ft=>p(.07,_,.07,a.frame,L+lt*(M/2-.08),_/2,D+ft*(v/2-.08)))),p(M*.55,.1,v*.4,a.bright,L,_+.09,D),p(.08,.45,v*.4,a.bright,L+M*.15,_+.3,D);const I=w(c*.3,0,-m*.22);p(.55,.72,.45,l,0,.5,0,I),p(.56,.16,.02,a.yellow,0,.66,.23,I),[-1,1].forEach(lt=>E(.08,.06,a.rubber,lt*.2,.08,.2,I)),g(.11,1.35,this.paint("#2f6f4f",.4,.3),c*.43,.7,-m*.38),g(.07,.12,a.steel,c*.43,1.42,-m*.38);const K=Math.max(1.8,u*1.6);[[-c/2+.05,-m/2+.05],[c*.2,-m/2+.05],[-c/2+.05,m*.35]].forEach(([lt,ft])=>p(.04,K,.04,a.yellow,lt,K/2,ft));const nt=p(c*.7,K-.35,.02,a.curtain,-c*.15,.2+(K-.35)/2,-m/2+.05);nt.castShadow=!1;const P=p(.02,K-.35,m*.8,a.curtain,-c/2+.05,.2+(K-.35)/2,-m*.07);P.castShadow=!1,g(.05,2.1,a.steel,-c*.3,1.05,-m*.4),y(new tn(.06,.06,1,10),a.steel,-c*.22,2,-m*.2,s,.9,0,0),y(new na(.2,.3,14,1,!0),a.steel,L,_+.75,D-.1,s,0,0,0).rotation.x=Math.PI;const V=H(s,L+.1,_+.2,D,"#cfe6ff",1.4),et=H(s,L+.1,_+.18,D+.05,"#ffb347",.7);e.top=K,e.andonAt=[c*.3,.86,-m*.22],e.animators.push((lt,ft,ht)=>{U(V,ht,1.4),U(et,ht,.8)});break}case"robot":{const _=kr(Math.min(u,3)/2.4,.7,1.4),M=Math.min(c,m)>=3.5,v=M?-c*.14:0;p(.8*_,.45*_,.8*_,a.dark,v,.225*_,0);const L=w(v,.45*_,0);g(.33*_,.22*_,l,0,.11*_,0,L);const D=w(0,.22*_,0,L);p(.55*_,.32*_,.5*_,l,0,.16*_,0,D),p(.22*_,.22*_,.22*_,a.dark,-.27*_,.22*_,.2*_,D);const I=w(0,.4*_,0,D);E(.2*_,.5*_,l,0,0,0,I),p(.24*_,1*_,.28*_,l,0,.5*_,0,I);const K=w(0,1*_,0,I);E(.17*_,.42*_,l,0,0,0,K),p(.95*_,.2*_,.22*_,l,.45*_,0,0,K),p(.26*_,.26*_,.26*_,a.dark,-.2*_,0,0,K);const nt=w(.95*_,0,0,K);A(.09*_,.2*_,h,0,0,0,nt),y(new tn(.035*_,.035*_,.4*_,10),a.dark,.14*_,-.16*_,0,nt,0,0,.6);const P=H(nt,.25*_,-.33*_,0,"#cfe6ff",1.3);if(I.rotation.z=-.35,K.rotation.z=-.55,M){const V=c*.2;p(.5,.9,.9,a.dark,V-.7,.45,0),p(.5,.9,.9,a.dark,V+.7,.45,0);const et=w(V,.95,0);A(.5,.06,this.paint("#3a4048",.5,.5),-.5,0,0,et),A(.5,.06,this.paint("#3a4048",.5,.5),.5,0,0,et),p(.9,.12,.6,a.bright,0,0,0,et),p(.12,.4,.6,a.bright,.25,.2,0,et),Y(c-.1,m-.1,2),p(.6,.9,.5,this.paint("#1f6fd1",.45,.2),-c/2+.55,.45,-m/2+.5),p(.6,1.8,.45,a.body,-c/2+1.3,.9,-m/2+.45),e.andonAt=[c/2-.1,2,m/2-.1],e.top=2.3,e.animators.push((lt,ft,ht)=>{ht&&(et.rotation.x+=ft*.4)})}else e.andonAt=[v+.42*_,.45*_,.3*_],e.top=2.2*_;e.animators.push((V,et,lt,ft)=>{lt&&(D.rotation.y=Math.sin(V*.7+ft)*.5,I.rotation.z=-.35+.14*Math.sin(V*1.1+ft),K.rotation.z=-.55+.2*Math.sin(V*1.6+ft+1),nt.rotation.x+=et*1.5),U(P,lt,1.3)});break}case"conveyor":{const _=Math.max(.4,u);[-1,1].forEach(v=>p(c,.14,.06,l,0,_-.07,v*(m/2-.03)));const M=Math.max(2,Math.round(c/1.6)+1);for(let v=0;v<M;v+=1){const L=-c/2+.1+v*(c-.2)/(M-1);[-1,1].forEach(D=>p(.06,_-.14,.06,a.frame,L,(_-.14)/2,D*(m/2-.08))),p(.05,.05,m-.16,a.frame,L,.25,0)}R(-c/2,c/2,_-.04,m-.1),p(.32,.26,.26,this.paint("#2c6cb0",.45,.3),c/2-.45,_-.32,m/2-.2),e.top=_;break}case"oven":{p(c*.86,u*.86,m,a.body,0,u*.43,0),p(c*.86+.04,u*.05,m+.04,l,0,u*.84,0);const _=[-1,1].map(M=>{const v=p(.02,u*.34,m*.6,a.hot,M*c*.43+M*.011,u*.3,0);return q(v).castShadow=!1,v.visible=!1,v});R(-c/2,-c*.43,u*.2,m*.62),R(c*.43,c/2,u*.2,m*.62),[-.25,.25].forEach(M=>g(.2,u*.4,a.steel,M*c,u*.86+u*.2,-m*.2)),N(c*.3,u*.5,m/2+.2,0),e.andonAt=[c*.38,u*.86,-m*.35],e.animators.push((M,v,L)=>_.forEach(D=>D.visible=L));break}case"press":{const _=c/2-c*.08;p(c,u*.18,m*.8,h,0,u*.09,0),[-1,1].forEach(v=>p(c*.16,u*.74,m*.7,l,v*_,u*.18+u*.37,0)),p(c,u*.16,m*.8,l,0,u*.92,0),g(Math.min(c,m)*.15,u*.14,a.steel,0,u*1.07,0),p(c*.62,u*.06,m*.6,a.steel,0,u*.21,0);const M=p(c*.6,u*.14,m*.55,a.frame,0,u*.62,0);q(M),[-1,1].forEach(v=>p(.07,u*.55,.07,a.hazard,v*c*.36,u*.45,m*.46)),N(c*.5+.1,u*.5,m*.3,-.6),e.top=u*1.14,e.andonAt=[_,u*1,-m*.3],e.animators.push((v,L,D,I)=>{M.position.y=D?u*.62-u*.2*(.5+.5*Math.sin(v*2.4+I)):u*.62});break}case"blast":{const _=w(-c*.06,0,0);p(c*.5,u*.72,m*.78,l,0,u*.36,0,_),p(c*.5+.04,u*.04,m*.78+.04,h,0,u*.7,0,_),[-1,1].forEach(v=>p(.03,u*.32,m*.42,a.rubber,v*(c*.25+.016),u*.26,0,_)),R(-c/2,-c*.31,u*.22,m*.42),R(c*.19,c/2,u*.22,m*.42),p(.5,u,.5,h,c*.1,u/2,-m*.38);const M=Math.min(c,m)*.15;g(M,u*.5,a.bodyDark,c*.38,u*.55,-m*.22,s,M,24),g(M,u*.25,a.bodyDark,c*.38,u*.18,-m*.22,s,.08,24),A(.14,c*.4,a.steel,c*.17,u*.86,-m*.22),[-1,1].forEach(v=>p(.04,.04,m*.78,a.yellow,-c*.06+v*c*.24,u*.72+1,0)),e.top=u,e.andonAt=[-c*.28,u*.72,m*.32],e.animators.push((v,L,D)=>{_.position.x=-c*.06+(D?(Math.random()-.5)*.02:0)});break}case"paint_booth":{const _=u*.82,M=this.paint("#eef1f4",.5,.05);p(c,_,.08,M,0,_/2,-m/2+.04),[-1,1].forEach(D=>p(.08,_,m,M,D*(c/2-.04),_/2,0)),p(c,.1,m,M,0,_+.05,0);const v=y(new In(c*.8,m*.6),a.lamp,0,_-.02,0,s,Math.PI/2,0,0);v.castShadow=!1,p(c*.8,_*.55,.16,this.paint("#9aa5b1",.7,.1),0,_*.4,-m/2+.17),p(c*.3,u*.18,m*.4,a.steel,-c*.2,_+.1+u*.09,-m*.15),g(.3,u*.12,a.steel,c*.2,_+.1+u*.06,-m*.2),p(c*1.3,.12,.12,a.dark,0,_-.35,0),[-1,1].forEach(D=>g(.04,1.4,a.dark,D*(c/2-.4),.7,m*.1));const L=[];for(let D=0;D<5;D+=1){const I=w(0,_-.4,0);g(.012,.5,a.dark,0,-.25,0,I),p(.55,.75,.06,this.paint(["#1d4ed8","#9aa4ad","#b91c1c"][D%3],.4,.35),0,-.9,0,I),L.push(I)}N(c/2+.15,1.3,m*.35,-1),e.andonAt=[c*.46,_+.1,m*.4],e.animators.push((D,I,K,nt)=>{L.forEach((P,V)=>{const et=((D*(K?.05:0)+V/L.length+nt)%1+1)%1;P.position.x=-c*.65+et*c*1.3})});break}case"packing":{const _=Math.min(c,m)*.3,M=w(-c*.08,0,0);g(_,.12,a.dark,0,.06,0,M,_,28),p(_*1.15,.14,_*.95,a.wood,0,.19,0,M);const v=Math.min(1.5,u*.55);for(let I=0;I<3;I+=1)[-1,1].forEach(K=>[-1,1].forEach(nt=>p(_*.55,v/3-.02,_*.45,this.paint(new Kt(oe.cardboard).multiplyScalar(.9+.1*((I+K+nt+4)%3)).getStyle(),.9,0),K*_/3.6,.26+(I+.5)*(v/3),nt*_/4.4,M)));const L=g(_*.72,v,a.film,0,.26+v/2,0,M,_*.72,24);L.castShadow=!1,p(.24,u,.24,a.body,c*.3,u/2,-m*.3);const D=w(c*.3,.6,-m*.3+.2);p(.36,.45,.3,l,0,0,0,D),g(.09,.5,this.paint("#f1f5f9",.3,0),-.12,0,.18,D),R(-c/2,-c*.08-_-.1,.4,m*.5),p(.5,1.4,.3,a.body,c*.4,.7,m*.35),p(.3,.2,.02,a.screen,c*.4,1.1,m*.35+.16),e.andonAt=[c*.3,u,-m*.3],e.animators.push((I,K,nt,P)=>{nt&&(M.rotation.y+=K*1.5,D.position.y=.4+(u-1)*(.5+.5*Math.sin(I*.35+P)))});break}case"workstation":{const _=Math.min(u,.92);p(c,.05,m,this.paint("#d7dde3",.6,.1),0,_,0),[-1,1].forEach(M=>[-1,1].forEach(v=>p(.05,_,.05,a.frame,M*(c/2-.06),_/2,v*(m/2-.06)))),[-1,1].forEach(M=>p(.04,1.1,.04,a.frame,M*(c/2-.06),_+.55,-m/2+.06)),p(c,.06,.12,a.frame,0,_+1.1,-m/2+.1),p(c*.8,.02,.08,a.lamp,0,_+1.06,-m/2+.12);for(let M=0;M<Math.max(2,Math.floor(c/.35));M+=1)f.add("box",a.cardboard,{x:-c/2+.2+M*.35,y:_+.55,z:-m/2+.12,sx:.28,sy:.14,sz:.2,color:M%2?"#2563eb":"#dc2626"});p(.5,.32,.03,a.screen,c*.25,_+.3,-m*.2),e.top=_+1.15,e.andonAt=[c/2-.06,_+1.1,-m/2+.06];break}case"rack":{const _=c>=m,M=_?c:m,v=_?m:c,L=w(0,0,0);_||(L.rotation.y=Math.PI/2);const D=Math.max(1,Math.round(M/2.7)),I=M/D,K=kr(Math.round(u/1.6),2,6),nt=u/K,P=t.load||"boxes",V=new Ka(this);for(let et=0;et<=D;et+=1){const lt=-M/2+et*I;[-1,1].forEach(ft=>V.add("box",a.cardboard,{x:lt,y:u/2,z:ft*v/2,sx:.09,sy:u,sz:.07,color:oe.rackBlue}));for(let ft=0;ft<K*2;ft+=1){const ht=(ft+.5)*(u/(K*2));V.add("box",a.cardboard,{x:lt,y:ht,z:0,sx:.03,sy:Math.hypot(v,u/(K*2)),sz:.03,rx:(ft%2?1:-1)*Math.atan2(v,u/(K*2)),color:oe.rackBlue})}}for(let et=0;et<D;et+=1){const lt=-M/2+(et+.5)*I;for(let ft=1;ft<K;ft+=1)[-1,1].forEach(ht=>V.add("box",a.cardboard,{x:lt,y:ft*nt,z:ht*(v/2-.02),sx:I-.09,sy:.12,sz:.05,color:oe.rackOrange}));for(let ft=0;ft<K;ft+=1){const ht=ft===0?0:ft*nt+.06,At=(ft===K-1?u-ht:nt-.06)-.25;if(At<.3)continue;if(P==="steel"){for(let Ee=0;Ee<2;Ee+=1)for(let qt=0;qt<4;qt+=1)d()<.15||V.add("box",a.steelInst,{x:lt,y:ht+.08+Ee*.13,z:-v/2+.12+(qt+.5)*((v-.24)/4),sx:I*.98,sy:.11,sz:(v-.24)/4-.04,color:d()>.5?"#9aa4ad":"#7d8791"});continue}const zt=Math.max(1,Math.floor(I/.95)),kt=I/zt-.12;for(let B=0;B<zt;B+=1){if(d()>.82)continue;const Ee=lt-I/2+(B+.5)*(I/zt),qt=Math.min(1.25,At)*(.6+d()*.4);V.add("box",a.cardboard,{x:Ee,y:ht+.07,z:0,sx:kt,sy:.14,sz:v-.1,color:oe.wood}),$(V,()=>J(P,Ee,ht+.14,0,kt-.04,v-.14,qt))}}}V.flush(L),e.top=u;break}case"buffer":{[-1,1].forEach(D=>{p(c,.006,.1,a.yellow,0,.006,D*(m/2-.05)),p(.1,.006,m,a.yellow,D*(c/2-.05),.006,0)});const _=Math.max(1,Math.floor(c/1.3)),M=Math.max(1,Math.floor(m/1.3)),v=c/_-.25,L=m/M-.25;for(let D=0;D<_;D+=1)for(let I=0;I<M;I+=1)d()>.7||x(-c/2+(D+.5)*(c/_),0,-m/2+(I+.5)*(m/M),v,L,t.load||"parts",Math.min(1.1,Math.max(.4,u*.8)));e.top=Math.min(1.3,u);break}case"pallet":x(0,0,0,c,m,t.load||"boxes",Math.max(.2,u-.14));break;case"agv":{p(c,.3,m,l,0,.2,0),p(c*.9,.04,m*.9,a.dark,0,.37,0),p(c*1.002,.03,m*1.002,r.mat("agvLed",()=>new En({color:"#38bdf8",toneMapped:!1})),0,.1,0),g(.08,.1,a.dark,c/2-.15,.42,0),t.load&&t.load!=="empty"&&x(0,.39,0,Math.min(c,1.2)-.1,Math.min(m,1)-.1,t.load,.6),e.vehicle=!0,e.top=1.1;break}case"forklift":{const _=Math.max(1.8,c),M=Math.max(.9,m),v=kr(u,1.9,2.3);p(_*.62,.55,M,l,-_*.06,.52,0),p(_*.24,.75,M*.98,a.dark,-_*.36,.58,0),[-1,1].forEach(I=>{E(.27,.24,a.rubber,_*.16,.27,I*(M/2-.12)),E(.22,.22,a.rubber,-_*.3,.22,I*(M/2-.12)),p(.05,v-.8,.05,a.dark,_*.12,.8+(v-.8)/2,I*(M/2-.06)),p(.05,v-.8,.05,a.dark,-_*.22,.8+(v-.8)/2,I*(M/2-.06))}),p(_*.4,.05,M,a.dark,-_*.05,v,0),p(.45,.12,.45,a.dark,-_*.1,.86,0),p(.08,.5,.45,a.dark,-_*.22,1.12,0),p(.42,.55,.32,this.paint(oe.vest[0],.7,0),-_*.08,1.22,0),y(new hi(.11,16,12),this.paint(oe.skin,.8,0),-_*.06,1.62,0),y(new hi(.125,16,10,0,Math.PI*2,0,Math.PI/2),this.paint("#facc15",.4,0),-_*.06,1.66,0),[-1,1].forEach(I=>p(.08,.06,.08,a.dark,_*.33,v*.5,I*M*.28)),[-1,1].forEach(I=>p(.1,v*1,.1,a.frame,_*.3,v*.5,I*M*.28));const L=w(_*.33,0,0);if(p(.06,.9,M*.8,a.frame,0,.55,0,L),[-1,1].forEach(I=>p(1.05,.05,.1,a.steel,.55,.1,I*M*.22,L)),t.load&&t.load!=="empty"){const I=new Ka(this);$(I,()=>x(.6,.13,0,1,Math.min(1.1,M),t.load,.7)),I.flush(L)}const D=p(.1,.1,.1,r.mat("beacon",()=>new En({color:"#fb923c",toneMapped:!1})),-_*.05,v+.08,0);q(D),e.vehicle=!0,e.top=v+.2,e.animators.push((I,K,nt)=>{D.visible=!nt||Math.sin(I*8)>0});break}case"crane":{const _=Math.max(4,u);[-1,1].forEach(I=>p(c,.45,.3,this.paint("#6b7785",.5,.5),0,_,I*m/2));const M=w(0,0,0);[-.45,.45].forEach(I=>p(.5,.8,m+.3,l,I,_+.62,0,M)),[-1,1].forEach(I=>p(2.2,.5,.7,h,0,_+.4,I*m/2,M));const v=w(0,_+1.2,0,M);p(1.5,.6,1.3,this.paint("#d99a00",.45,.25),0,.1,0,v),E(.28,1,a.dark,0,.1,0,v);const L=g(.025,1,a.dark,0,0,0,v),D=w(0,-3,0,v);p(.45,.5,.3,a.hazard,0,0,0,D),t.load&&t.load!=="empty"&&[-.2,0,.2].forEach(I=>p(3.2,.12,.16,a.steel,0,-.75,I,D)),e.crane=!0,e.top=_+1.6,e.animators.push((I,K,nt,P)=>{const V=nt?1:0;e.craneT=(e.craneT||P)+K*V;const et=e.craneT;M.position.x=Math.sin(et*.06)*c*.38,v.position.z=Math.sin(et*.11+1)*m*.3;const lt=2.4+Math.sin(et*.17)*1.2;D.position.y=-lt-.4,L.scale.y=lt,L.position.y=-lt/2-.1});break}case"fence":{const _=t.h&&t.h>=1?Math.min(t.h,3):2;m>=1?Y(c,m,_):b(-c/2,0,c/2,0,_),e.top=_;break}case"wall":p(c,u,m,this.paint("#cfd4d9",.85,0),0,u/2,0),p(c+.02,.12,m+.04,a.frame,0,u-.06,0);break;case"label":{const _=String(t.text||t.name||""),{texture:M,aspect:v}=E_(_);let L=.9,D=v*L;D>16&&(D=16,L=D/v);const I=t.h||Math.max(4,n-2.5),K=new Ge({map:M,emissive:"#ffffff",emissiveMap:M,emissiveIntensity:.35,roughness:.6}),nt=a.dark,P=new Zt(new Ae(D,L,.06),[nt,nt,nt,nt,K,K]);P.position.set(0,I,0),P.castShadow=!0,s.add(P),[-1,1].forEach(V=>g(.01,Math.max(.2,n-I-L/2),a.dark,V*D/2.4,(n+I+L/2)/2,0)),e.top=I+L,e.sign=P;break}case"light":{const _=Number(t.y)||0,M=Math.max(1,Math.round(c/5)),v=Math.max(1,Math.round(m/4.5)),L=new Ge({color:"#e8edf2",emissive:"#fff3d6",emissiveIntensity:0,roughness:.4}),D=new En({map:r.glow,color:"#fff1c8",transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1,blending:Kr,polygonOffset:!0,polygonOffsetFactor:-2}),I=Math.max(.2,n-_-u),K=[];for(let lt=0;lt<M;lt+=1)for(let ft=0;ft<v;ft+=1){const ht=-c/2+(lt+.5)*c/M,At=-m/2+(ft+.5)*m/v;f.add("box",a.cardboard,{x:ht,y:u*.6,z:At,sx:1.4,sy:u*.5,sz:.3,color:"#59616b"}),f.add("box",L,{x:ht,y:u*.3,z:At,sx:1.3,sy:.04,sz:.24}),[-.5,.5].forEach(zt=>f.add("box",a.cardboard,{x:ht+zt,y:u*.85+I/2,z:At,sx:.015,sy:I,sz:.015,color:"#3a4047"})),K.push([ht,At])}const nt=Math.min(7,Math.max(3.5,Math.min(c/M,m/v)*1.25)),P=new In(nt,nt).rotateX(-Math.PI/2),V=new cl(P,D,K.length),et=new ae;K.forEach(([lt,ft],ht)=>V.setMatrixAt(ht,et.makeTranslation(lt,-_+.015,ft))),V.instanceMatrix.needsUpdate=!0,V.computeBoundingSphere(),V.userData.noPick=!0,V.userData.keep=!0,V.renderOrder=1,s.add(V),e.light={diffuser:L,pool:D,level:.85,target:.85,flicker:!1},e.top=u+.1,e.front=0;break}case"custom":(t.parts||[]).forEach(_=>{const M=this.paint(_.color||oe.bodyDark,.5,.25);let v;_.shape==="box"?v=new Ae(_.w,_.h,_.d):_.shape==="sphere"?v=new hi(_.r,20,14):_.shape==="cone"?v=new na(_.r,_.h,20):v=new tn(_.r,_.r,_.h,20);const L=I=>(I||0)*Math.PI/180,D=_.rot||[0,0,0];y(v,M,_.x||0,_.y||0,_.z||0,s,L(D[0]),L(D[1]),L(D[2]))}),e.andonAt=t.machine_id?[c*.4,u,-m*.35]:null;break;default:p(c,u,m,a.body,0,u/2,0),e.andonAt=t.machine_id?[c*.4,u,-m*.35]:null}return f.flush(s),O_(s),s;function $(_,M){const v=f.add;f.add=(L,D,I)=>_.add(L,D,I);try{M()}finally{f.add=v}}}person(t=0){const e=new en,n=this.m,s=this.paint(oe.vest[t%2],.7,0),r=this.paint(oe.trousers,.8,0),a=(l,h,d,f,c)=>{const u=new Zt(l,h);return u.position.set(d,f,c),u.castShadow=!0,e.add(u),u};[-1,1].forEach(l=>{a(new Ae(.15,.82,.18),r,l*.1,.43,0),a(new Ae(.16,.08,.26),n.dark,l*.1,.04,.03)}),a(new Ae(.44,.6,.25),s,0,1.13,0),[.98,1.22].forEach(l=>a(new Ae(.45,.04,.26),this.paint("#d6dce2",.3,.4),0,l,0));const o=[-1,1].map(l=>{const h=new en;h.position.set(l*.29,1.4,0);const d=new Zt(new Ae(.12,.58,.14),r);d.position.y=-.29,d.castShadow=!0,h.add(d);const f=new Zt(new Ae(.1,.1,.1),this.paint(oe.skin,.8,0));return f.position.y=-.62,h.add(f),e.add(h),h});return a(new hi(.115,16,12),this.paint(oe.skin,.8,0),0,1.6,0),a(new hi(.135,16,10,0,Math.PI*2,0,Math.PI/2),this.paint(oe.helmet[t%3],.35,.05),0,1.64,0),e.userData.arms=o,e}}function O_(i){const t=new Map;i.children.forEach(e=>{if(!e.isMesh||e.isInstancedMesh||e.userData.keep||Array.isArray(e.material)||!e.geometry.index)return;const n=t.get(e.material)||[];n.push(e),t.set(e.material,n)}),t.forEach((e,n)=>{if(e.length<2)return;const s=e.map(h=>{h.updateMatrix();const d=h.geometry.clone().applyMatrix4(h.matrix);return d.index?d:null}),r=h=>Object.keys(h.attributes).sort().join(","),a=r(s[0]);if(s.some(h=>!h||r(h)!==a)){s.forEach(h=>h&&h.dispose());return}const o=I_(s,!1);if(s.forEach(h=>h.dispose()),!o)return;e.forEach(h=>{i.remove(h),h.geometry.dispose()});const l=new Zt(o,n);l.castShadow=!n.transparent,l.receiveShadow=!0,i.add(l)})}const Pi={busy:"#22c55e",blocked:"#f59e0b",starved:"#94a3b8",down:"#ef4444"},Hr="#2563eb",Xs="#94a3b8",Dc="#dde3e9",Ic=["#1c3b27","#4a3a10","#4a1818"],B_=1,Uc=new Set(["wall","label","fence","crane"]),z_=5,Fh={names:!0,status:!0,params:!1,paramNames:[],zones:!0,flows:!0,lights:!0},k_=i=>(Number(i)||0)*Math.PI/180;function H_(i,t){if(!i)return{level:.85,flicker:!1};if(t===0)return{level:1,flicker:!1};if(t===2)return{level:.55,flicker:!0};const e={};return new Kt(i).getHSL(e),{level:e.s<.15?0:.45,flicker:!1}}function fs(i){const t=Number(i);if(i===""||i===null||i===void 0||!Number.isFinite(t))return String(i??"");const e=Math.abs(t);return t.toLocaleString(void 0,{maximumFractionDigits:e>=100?0:e>=10?1:2})}function V_(i,t){const e=Number(i);if(e===1)return 0;if(e===3)return 2;if(e===2||e===4)return 1;if(!t)return-1;const n={};return new Kt(t).getHSL(n),n.s<.15?-1:n.h<.05||n.h>.92?2:n.h>.2&&n.h<.47?0:1}function Yo(i,t,e){const n=new Ch;return n.moveTo(-i+e,-t),n.lineTo(i-e,-t),n.quadraticCurveTo(i,-t,i,-t+e),n.lineTo(i,t-e),n.quadraticCurveTo(i,t,i-e,t),n.lineTo(-i+e,t),n.quadraticCurveTo(-i,t,-i,t-e),n.lineTo(-i,-t+e),n.quadraticCurveTo(-i,-t,-i+e,-t),n}function Za(i,t,e,n){const s=Yo(i,t,n),r=Yo(i-e,t-e,Math.max(.05,n-e));return s.holes.push(new Vo(r.getPoints(8).reverse())),s}function G_(){const i=document.createElement("canvas");i.width=128,i.height=64;const t=i.getContext("2d");t.clearRect(0,0,128,64),t.fillStyle="rgba(255,255,255,0.35)",t.fillRect(0,26,128,12),t.fillStyle="#ffffff",t.beginPath(),t.moveTo(48,6),t.lineTo(80,32),t.lineTo(48,58),t.lineTo(36,58),t.lineTo(66,32),t.lineTo(36,6),t.closePath(),t.fill();const e=new zi(i);return e.wrapS=mi,e.colorSpace=$e,e}function Nc(i){const t=[0];for(let e=1;e<i.length;e+=1)t.push(t[e-1]+i[e].distanceTo(i[e-1]));return{points:i,cum:t,total:t[t.length-1]||0}}function ja(i,t,e){const{points:n,cum:s,total:r}=i;if(n.length===1||r===0)return{pos:e.copy(n[0]),dir:new O(1,0,0)};const a=Math.min(Math.max(0,t),r);let o=1;for(;o<s.length-1&&s[o]<a;)o+=1;const l=s[o]-s[o-1]||1,h=(a-s[o-1])/l;return e.lerpVectors(n[o-1],n[o],h),{pos:e,dir:n[o].clone().sub(n[o-1])}}class W_{constructor(t,{onSelect:e}={}){this.container=t,this.onSelect=e,this.items=new Map,this.flowLines=[],this.particles=[],this.layers={...Fh},this.mode="live",this.simRunning=!1,this.anyWorking=!1,this.selectedId=null,this.numbers=new Map,this.clock=new r_,this.tween=null,this.renderer=new xg({antialias:!0,alpha:!1,preserveDrawingBuffer:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Xc,this.renderer.toneMapping=qc,this.renderer.toneMappingExposure=1.05,this.renderer.domElement.style.display="block",this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.cursor="grab",t.appendChild(this.renderer.domElement),this.scene=new Sh,this.scene.background=new Kt(Dc),this.scene.fog=new ol(Dc,120,500),this.setupEnvironment(),this.camera=new pn(42,1,.3,3e3),this.controls=new c_(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.maxPolarAngle=Math.PI*.49,this.controls.minDistance=3,this.controls.addEventListener("start",()=>{this.tween=null}),this.hemi=new t_("#ffffff","#7d7a74",.8),this.scene.add(this.hemi),this.sun=new s_("#fff6e8",2.7),this.sun.castShadow=!0,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.03,this.scene.add(this.sun),this.scene.add(this.sun.target),this.root=new en,this.scene.add(this.root),this.particleGroup=new en,this.scene.add(this.particleGroup),this.chevron=G_(),this.raycaster=new a_,this.pointer=new vt,this.downAt=null,this.hoverAt=0,this.handlePointerDown=n=>{this.downAt=[n.clientX,n.clientY],this.renderer.domElement.style.cursor="grabbing"},this.handlePointerUp=n=>{this.renderer.domElement.style.cursor="grab",this.pick(n)},this.handlePointerMove=n=>this.hover(n),this.renderer.domElement.addEventListener("pointerdown",this.handlePointerDown),this.renderer.domElement.addEventListener("pointerup",this.handlePointerUp),this.renderer.domElement.addEventListener("pointermove",this.handlePointerMove),this.handleContextLost=n=>n.preventDefault(),this.handleContextRestored=()=>{this.setupEnvironment(),this.sceneData&&this.setScene(this.sceneData,this.lastSettings||{})},this.renderer.domElement.addEventListener("webglcontextlost",this.handleContextLost),this.renderer.domElement.addEventListener("webglcontextrestored",this.handleContextRestored),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),this.resize(),this.animate=this.animate.bind(this),this.frame=requestAnimationFrame(this.animate)}setupEnvironment(){const t=new ko(this.renderer);this.envTexture&&this.envTexture.dispose(),this.envTexture=t.fromScene(new S_,.04).texture,t.dispose(),this.scene.environment=this.envTexture,this.scene.environmentIntensity=.45}resize(){const t=Math.max(1,this.container.clientWidth),e=Math.max(1,this.container.clientHeight);this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.viewHeight=e,this.items.forEach(n=>n.label&&this.scaleLabel(n.label))}scaleLabel(t){const e=2*Math.tan(Nn.degToRad(this.camera.fov)/2)/Math.max(1,this.viewHeight||1),[n,s]=t.userData.px;t.scale.set(n*e,s*e,1)}raycast(t){const e=this.renderer.domElement.getBoundingClientRect();this.pointer.x=(t.clientX-e.left)/e.width*2-1,this.pointer.y=-((t.clientY-e.top)/e.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera);const n=[];this.items.forEach(r=>r.pickables.forEach(a=>n.push(a)));const s=this.raycaster.intersectObjects(n,!1)[0];return s?s.object.userData.elementId:null}pick(t){if(!this.downAt||Math.hypot(t.clientX-this.downAt[0],t.clientY-this.downAt[1])>5)return;const e=this.raycast(t);this.select(e),this.onSelect&&this.onSelect(e)}hover(t){if(t.buttons)return;const e=performance.now();e-this.hoverAt<90||(this.hoverAt=e,this.renderer.domElement.style.cursor=this.raycast(t)?"pointer":"grab")}select(t){this.selectedId=t,this.items.forEach((e,n)=>{e.selected=n===t})}clear(){(e=>{e.traverse(n=>{var s;n.geometry&&!((s=this.sharedGeometries)!=null&&s.has(n.geometry))&&n.geometry.dispose(),n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(a=>{a.map&&a.map!==this.chevron&&a.map.dispose(),a.dispose()})})})(this.root),this.root.clear(),this.kit&&(this.kit.unitBox.dispose(),this.kit.unitCylX.dispose(),this.kit=null),this.particles.forEach(e=>this.particleGroup.remove(e.mesh)),this.particles=[],this.particleGeometry&&this.particleGeometry.dispose(),this.particleMaterial&&this.particleMaterial.dispose(),this.particleGeometry=null,this.items.clear(),this.flowLines=[],this.hall=null}setScene(t,e={}){this.clear(),this.kit=new F_,this.sharedGeometries=new Set([this.kit.unitBox,this.kit.unitCylX]),this.sceneData=t||{},this.lastSettings=e;const n=this.sceneData.floor||{w:60,d:40},s=Math.max(n.w,n.d);this.scene.fog.near=s*2.2,this.scene.fog.far=s*7,this.camera.near=Math.max(.1,Math.min(.5,s/200)),this.camera.far=Math.max(400,s*12),this.camera.updateProjectionMatrix(),this.hall=D_(this.sceneData,{anisotropy:Math.min(8,this.renderer.capabilities.getMaxAnisotropy())}),this.root.add(this.hall.group),this.fitShadows(n),this.setupProduct(),(this.sceneData.elements||[]).forEach(r=>this.buildElement(r)),this.buildFlows(),this.applyLayers(),this.resize(),this.applyCamera(e.camera,n)}fitShadows(t){const e=Math.max(t.w,t.d),n=e>70?4096:2048;this.sun.shadow.mapSize.x!==n&&(this.sun.shadow.mapSize.set(n,n),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null)),this.sun.position.set(-e*.35,e*.8+20,e*.45),this.sun.target.position.set(0,0,0);const s=this.sun.shadow.camera,r=e*.72;s.left=-r,s.right=r,s.top=r,s.bottom=-r,s.near=1,s.far=e*3+80,s.updateProjectionMatrix()}setupProduct(){const t=this.sceneData.product||{},e=t.kind||"box";e==="steel"?this.particleGeometry=new Ae(1.4,.14,.32):e==="part"?this.particleGeometry=new tn(.2,.2,.32,16):e==="pallet"?this.particleGeometry=new Ae(1,.8,.85):this.particleGeometry=new Ae(.55,.38,.45);const n=t.color||(e==="steel"||e==="part"?"#9aa4ad":"#b98a57"),s=e==="steel"||e==="part";this.particleMaterial=new Ge({color:n,roughness:s?.32:.9,metalness:s?.8:0})}fitCamera(t,e=54,n=-12){const s=Nn.degToRad(e),r=Nn.degToRad(n),a=new O(Math.cos(s)*Math.sin(r),Math.sin(s),Math.cos(s)*Math.cos(r)),o=new O(0,0,e>80?0:t.d*.04),l=[];[-.5,.5].forEach(c=>[-.5,.5].forEach(u=>[0,3].forEach(m=>l.push(new O(c*t.w,m,u*t.d)))));const h=this.camera.clone();let d=Math.max(t.w,t.d)*1.2;for(let c=0;c<8;c+=1){h.position.copy(o).addScaledVector(a,d),h.lookAt(o),h.updateMatrixWorld(!0);let u=0;l.forEach(m=>{const y=m.clone().project(h);u=Math.max(u,Math.abs(y.x),Math.abs(y.y))}),d*=u/.92}const f=o.clone().addScaledVector(a,d);return{position:[f.x,f.y,f.z],target:[o.x,o.y,o.z]}}applyCamera(t,e=(s=>(s=this.sceneData)==null?void 0:s.floor)()||{w:60,d:40},n=!1){const r=Math.max(e.w,e.d),a=t!=null&&t.position&&(t!=null&&t.target)?t:this.fitCamera(e);this.controls.maxDistance=r*3;const o=new O(...a.position),l=new O(...a.target);if(n){this.flyTo(o,l);return}this.tween=null,this.camera.position.copy(o),this.controls.target.copy(l),this.controls.update()}flyTo(t,e,n=.8){this.tween={fromPos:this.camera.position.clone(),fromTarget:this.controls.target.clone(),toPos:t,toTarget:e,t:0,duration:n}}topView(){var e;const t=((e=this.sceneData)==null?void 0:e.floor)||{w:60,d:40};this.applyCamera(this.fitCamera(t,89,0),t,!0)}focus(t){var l;const e=this.items.get(t);if(!e)return;const n=e.el,s=new O(n.x,Math.min(2,(n.h||2)*.4),n.z),r=this.camera.position.clone().sub(this.controls.target).normalize();r.y<.35&&(r.y=.35),r.normalize();const a=((l=this.sceneData)==null?void 0:l.floor)||{w:60,d:40},o=Nn.clamp(Math.max(n.w,n.d,n.h)*2.6+7,9,Math.max(a.w,a.d)*.8);this.flyTo(s.clone().addScaledVector(r,o),s)}zoom(t){const e=this.camera.position.clone().sub(this.controls.target),n=Nn.clamp(e.length()*t,this.controls.minDistance,this.controls.maxDistance);this.flyTo(this.controls.target.clone().add(e.setLength(n)),this.controls.target.clone(),.35)}getCamera(){const t=e=>Math.round(e*100)/100;return{position:[t(this.camera.position.x),t(this.camera.position.y),t(this.camera.position.z)],target:[t(this.controls.target.x),t(this.controls.target.y),t(this.controls.target.z)]}}buildElement(t){var r,a;const e={id:t.id,el:t,pickables:[],animators:[],working:!1,pulse:!1,flash:0,label:null,labelKey:"",statusColor:null,statusShown:!1,selected:!1},n=new en;n.position.set(t.x,t.y||0,t.z),n.rotation.y=k_(t.rot);const s=this.kit.build(t,e,{hallH:((r=this.hall)==null?void 0:r.height)||8});if(n.add(s),e.group=n,t.machine_id&&!e.light&&this.makeAndon(e,n),(t.machine_id||!Uc.has(t.kind))&&this.makeRings(e,n),t.operators){e.people=[];const o=t.operators;for(let l=0;l<o;l+=1){const h=this.kit.person(l),d=Math.min(o,Math.max(1,Math.floor(t.w/.9))),f=Math.floor(l/d),c=l%d,u=Math.min(d,o-f*d);h.position.set((c-(u-1)/2)*.9,0,e.front+.55+f*.8),h.rotation.y=Math.PI,n.add(h),e.people.push(h)}}if(e.vehicle&&((a=t.path)==null?void 0:a.length)>=2){const o=t.path.map(([c,u])=>new O(c,0,u)),h=o[0].distanceTo(o[o.length-1])<.5?o:[...o,...o.slice(1,-1).reverse(),o[0]];e.route=Nc(h),e.routeS=0,e.speed=t.kind==="agv"?1:1.6;const{pos:d,dir:f}=ja(e.route,0,new O);n.position.set(d.x,t.y||0,d.z),e.yaw=Math.atan2(-f.z,f.x),n.rotation.y=e.yaw}n.traverse(o=>{o.isMesh&&!o.userData.noPick&&(o.userData.elementId=t.id,e.pickables.push(o))}),this.root.add(n),this.items.set(t.id,e),this.nameLabel(e)}makeAndon(t,e){const n=t.el,[s,r,a]=t.andonAt||[n.w*.4,n.h,-n.d*.35],o=new en;o.position.set(s,r,a);const l=this.kit.paint("#2e3339",.5,.4),h=new Zt(new tn(.025,.025,.3,8),l);h.position.y=.15,o.add(h);const d=Ic.map((u,m)=>{const y=new Zt(new tn(.065,.065,.11,16),new Ge({color:u,roughness:.3,metalness:.1,emissive:"#000000"}));return y.position.y=.36+m*.12,o.add(y),y}),f=new Zt(new tn(.05,.066,.04,16),l);f.position.y=.36+2*.12+.075,o.add(f);const c=this.kit.glowSprite("#ffffff",1.5);c.userData.noPick=!0,o.add(c),e.add(o),t.andon={segs:d,glow:c,index:-1},t.top=Math.max(t.top||0,r+.72)}makeRings(t,e){const n=t.el;if(n.kind==="forklift"||n.kind==="agv")return;const s=n.w/2+.45,r=n.d/2+.45,a=l=>new En({color:l,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-3}),o=(l,h,d)=>{const f=new Zt(l,h);return f.rotation.x=-Math.PI/2,f.position.y=d,f.userData.noPick=!0,f.renderOrder=2,e.add(f),f};if(t.light){t.selRing=o(new _s(Za(s,r,.12,.55),6),a(Hr),.028-(Number(n.y)||0));return}t.ring=o(new _s(Za(s,r,.2,.4),6),a(Xs),.025),t.fill=o(new _s(Yo(s-.2,r-.2,.25),6),a(Xs),.018),n.machine_id&&(t.ping=o(new dl(.85,1,48),a("#ffffff"),.03),t.pingSize=Math.max(s,r)),t.selRing=o(new _s(Za(s+.35,r+.35,.12,.55),6),a(Hr),.028)}nameLabel(t){const e=t.el;if(Uc.has(e.kind)||!e.machine_id&&!e.name){this.clearLabel(t);return}this.updateLabel(t,{title:e.name||e.id,number:e.machine_id?t.number:null,muted:!e.machine_id})}clearLabel(t){t.label&&(t.group.remove(t.label),t.label.material.map.dispose(),t.label.material.dispose(),t.label=null,t.labelKey="")}shownLabel(t){const e=this.layers,n=e.params&&!t.muted?t.params||[]:[];let s="";return t.muted?s=e.names&&t.status||"":e.status&&!this.compact&&(s=t.status||""),{title:e.names?t.title:"",number:e.names?t.number:null,status:s,color:t.color,muted:t.muted,params:n,paramsLine:this.compact&&n.length>0}}updateLabel(t,e){t.labelOpts=e;const n=this.shownLabel(e);if(!n.title&&n.number==null&&!n.status&&!n.params.length||e.muted&&!this.layers.names){this.clearLabel(t),t.labelOpts=e;return}const r=JSON.stringify(n);if(r===t.labelKey)return;this.clearLabel(t),t.labelOpts=e,t.labelKey=r;const{texture:a,width:o,height:l}=b_(n),h=new ll({map:a,transparent:!0,depthWrite:!1,depthTest:!1,sizeAttenuation:!1,toneMapped:!1,fog:!1}),d=new Eh(h);d.center.set(.5,0),d.renderOrder=e.muted?9:10,d.userData={px:[o,l],muted:!!e.muted},d.position.set(0,(t.top||t.el.h||2)+.2,0),this.scaleLabel(d),t.group.add(d),t.label=d}refreshLabels(){this.items.forEach(t=>t.labelOpts&&this.updateLabel(t,t.labelOpts))}setLabelsVisible(t){this.setLayers({names:!!t})}setLayers(t={}){this.layers={...this.layers,...t},this.applyLayers(),this.refreshLabels()}applyLayers(){var e;const t=this.layers;(((e=this.hall)==null?void 0:e.zones)||[]).forEach(n=>n.visible=t.zones),this.flowLines.forEach(n=>n.meshes.forEach(s=>s.visible=t.flows)),t.flows||this.particles.forEach(n=>n.mesh.visible=!1),this.items.forEach(n=>{n.light&&(n.group.visible=t.lights)})}paramsFor(t){const e=this.layers.paramNames||[];return((t==null?void 0:t.substatuses)||[]).filter(n=>n.value!=="-"&&n.value!==void 0&&n.value!==null&&n.value!=="").filter(n=>!e.length||e.includes(n.target)).slice(0,z_).map(n=>({name:n.target,value:`${fs(n.value)}${n.unit?" "+n.unit:""}`}))}setNumbers(t){this.numbers=t||new Map,this.items.forEach((e,n)=>{e.number=this.numbers.get(n)??null})}declutter(){const t=this.renderer.domElement,e=t.clientWidth,n=t.clientHeight;if(!e||!n)return;const s=new O,r=[];this.items.forEach(o=>{if(!o.label||!o.group.visible)return;o.label.getWorldPosition(s);const l=s.distanceTo(this.camera.position);s.project(this.camera);const[h,d]=o.label.userData.px;r.push({sprite:o.label,prio:o.label.userData.muted?1:o.selected?-1:0,dist:l,x:(s.x+1)/2*e,y:(1-s.y)/2*n,w:h,h:d,behind:s.z>1})}),r.sort((o,l)=>o.prio-l.prio||o.dist-l.dist);const a=[];r.forEach(o=>{const l=o.prio===1?2:5;let h=0,d=null;for(;h<=l;h+=1){const c=o.y-h*o.h*.92;if(d={l:o.x-o.w/2,r:o.x+o.w/2,t:c-o.h,b:c},!a.some(u=>d.l<u.r&&d.r>u.l&&d.t<u.b&&d.b>u.t))break}const f=h<=l;o.sprite.center.y=-Math.min(h,l)*.92,o.sprite.visible=!o.behind&&!(this.compact&&o.prio===1)&&(f||o.prio<=0),f&&!o.behind&&a.push(d)})}buildFlows(){const t=new Map((this.sceneData.elements||[]).map(e=>[e.id,e]));(this.sceneData.flows||[]).forEach(e=>{var h;const n=t.get(e.from),s=t.get(e.to);if(!n||!s)return;const r=[[n.x,n.z]];(h=e.via)!=null&&h.length?r.push(...e.via):Math.abs(s.x-n.x)>.5&&Math.abs(s.z-n.z)>.5&&r.push([s.x,n.z]),r.push([s.x,s.z]);const a=Nc(r.map(([d,f])=>new O(d,B_,f))),o=[],l=[];for(let d=1;d<a.points.length;d+=1){const f=a.points[d-1],c=a.points[d],u=f.distanceTo(c);if(u<.2)continue;const m=this.chevron.clone();m.needsUpdate=!0,m.repeat.set(u/1.4,1);const y=new En({map:m,color:Hr,transparent:!0,opacity:.4,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-4}),p=new Zt(new In(u,.42),y);p.rotation.order="YXZ",p.rotation.set(-Math.PI/2,Math.atan2(-(c.z-f.z),c.x-f.x),0),p.position.set((f.x+c.x)/2,.022,(f.z+c.z)/2),p.renderOrder=3,this.root.add(p),o.push(y),l.push(p)}this.flowLines.push({flow:e,route:a,materials:o,meshes:l,nextEmit:0})}),this.applyFlowStyle()}applyFlowStyle(){const t=this.mode==="sim"?.75:.42;this.flowLines.forEach(e=>e.materials.forEach(n=>n.opacity=t))}paintStatus(t,e,n,{pulse:s=!1}={}){if(t.statusColor=e,t.statusShown=!!e,t.pulse=s,t.light){const{level:r,flicker:a}=H_(e,n);t.light.target=r,t.light.flicker=a}if(t.ring&&(t.ring.material.color.set(e||Xs),t.fill.material.color.set(e||Xs),t.ring.material.opacity=e?.92:0,t.fill.material.opacity=e?.16:0),t.andon){t.andon.index=e?n:-1,t.andon.segs.forEach((a,o)=>{const l=e&&o===n;a.material.color.set(l?e:Ic[o]),a.material.emissive.set(l?e:"#000000"),a.material.emissiveIntensity=l?2.2:0});const r=t.andon.glow;e&&n>=0?(r.position.y=t.andon.segs[n].position.y,r.material.color.set(e),r.material.opacity=.9):r.material.opacity=0}}setMode(t){this.mode=t,this.particles.forEach(e=>e.mesh.visible=!1),this.flowLines.forEach(e=>e.nextEmit=0),this.items.forEach(e=>{e.working=!1,e.flash=0}),this.applyFlowStyle()}setSimRunning(t){this.simRunning=t}signal(t,e,n){const s=/count|licznik|szt|pieces|produced/i.test(String(e||""));this.items.forEach(r=>{if(Number(r.el.machine_id)===Number(t)&&(r.flash=1,s)){const a=Number(n);Number.isFinite(a)&&Number.isFinite(r.lastCount)&&a>r.lastCount&&this.mode==="live"&&this.flowLines.filter(o=>o.flow.from===r.id).forEach(o=>this.spawnParticle(o.flow.from,o.flow.to)),Number.isFinite(a)&&(r.lastCount=a)}})}applyLive(t){this.mode="live";let e=!1;this.items.forEach(n=>{const s=n.el;if(!s.machine_id){n.statusShown&&this.paintStatus(n,null,-1),n.working=!1,this.nameLabel(n);return}const r=t[s.machine_id];n.working=Number(r==null?void 0:r.typeEvent)===1,e=e||n.working;const a=this.paramsFor(r);if(r&&r.color){this.paintStatus(n,r.color,V_(r.typeEvent,r.color),{pulse:Number(r.typeEvent)===3});const o=this.layers.params?[]:a.slice(0,1).map(l=>l.value);this.updateLabel(n,{title:s.name||s.id,number:n.number,status:[r.nameStatus||"",...o].filter(Boolean).join(" · "),color:r.color,params:a})}else this.paintStatus(n,null,-1),this.updateLabel(n,{title:s.name||s.id,number:n.number,color:null,params:a})}),this.anyWorking=e}applySimulation(t,e=[],n={}){this.mode="sim";const s=new Map(t.stations.map(a=>[a.id,a])),r={busy:0,blocked:1,starved:-1,down:2};this.items.forEach(a=>{const o=s.get(a.id);if(!o){a.working=!1,a.el.machine_id&&this.paintStatus(a,null,-1),this.nameLabel(a);return}const l=!a.el.machine_id&&o.role!=="station";if(o.role!=="station"){a.working=!1,this.paintStatus(a,null,-1),this.updateLabel(a,{title:o.name||a.el.name||a.el.id,number:a.number,status:`${o.done} ${n.pcs||"szt."}`,color:"#64748b",muted:l});return}const h=Pi[o.state]||Xs,d=t.bottleneck===a.id;a.working=o.state==="busy",this.paintStatus(a,h,r[o.state]??-1,{pulse:d||o.state==="down"});let f=`${n.busy||"praca"} ${Math.round(o.busy*100)}% · ${n.queue||"kolejka"} ${o.queue}/${o.queueCap}`;d&&(f=`${n.bottleneck||"wąskie gardło"} · ${f}`),this.updateLabel(a,{title:o.name||a.el.name||a.el.id,number:a.number,status:f,color:d?Pi.down:h})}),e.forEach(a=>this.spawnParticle(a.from,a.to))}spawnParticle(t,e){if(!this.layers.flows)return;const n=this.flowLines.find(r=>r.flow.from===t&&r.flow.to===e);if(!n||!this.particleGeometry||this.particles.filter(r=>r.mesh.visible).length>260)return;let s=this.particles.find(r=>!r.mesh.visible);if(!s){const r=new Zt(this.particleGeometry,this.particleMaterial);r.castShadow=!0,this.particleGroup.add(r),s={mesh:r},this.particles.push(s)}s.route=n.route,s.s=0,s.speed=Nn.clamp(n.route.total/2.6,1.6,6),s.mesh.visible=!0}animate(){var o;this.frame=requestAnimationFrame(this.animate);const t=Math.min(.1,this.clock.getDelta()),e=this.clock.elapsedTime;if(this.tween){const l=this.tween;l.t=Math.min(1,l.t+t/l.duration);const h=l.t<.5?2*l.t*l.t:1-Math.pow(-2*l.t+2,2)/2;this.camera.position.lerpVectors(l.fromPos,l.toPos,h),this.controls.target.lerpVectors(l.fromTarget,l.toTarget,h),l.t>=1&&(this.tween=null)}this.controls.update();const n=(o=this.sceneData)==null?void 0:o.floor;if(n&&!this.tween){const l=this.controls.target,h=Nn.clamp(l.x,-n.w/2,n.w/2),d=Nn.clamp(l.z,-n.d/2,n.d/2),f=Nn.clamp(l.y,0,12);if(h!==l.x||f!==l.y||d!==l.z){const c=new O(h-l.x,f-l.y,d-l.z);l.add(c),this.camera.position.add(c)}}this.hall&&this.hall.walls.forEach(l=>{l.upper.visible=this.camera.position.clone().sub(l.center).dot(l.normal)<0});const s=this.mode==="live"?this.anyWorking:this.simRunning,r=new O;this.items.forEach(l=>{const h=l.el,d=h.x*.7+h.z*.3,f=l.vehicle||l.crane?s:l.working;if(l.animators.forEach(c=>c(e,t,f,d)),l.light){const c=l.light;c.level+=(c.target-c.level)*Math.min(1,t*3);const u=c.flicker&&Math.sin(e*23+d*3)>.55?c.level*.25:c.level;c.diffuser.emissiveIntensity=.05+u*1.8,c.pool.opacity=u*.26}if(l.ring&&l.statusShown){const c=l.pulse?.5+.5*Math.abs(Math.sin(e*3.5)):1;l.ring.material.opacity=.35+.57*c,l.fill.material.opacity=l.pulse?.08+.18*c:.16}if(l.andon&&l.andon.index>=0&&(l.andon.glow.material.opacity=l.pulse?Math.sin(e*7)>0?.95:.12:.85),l.selRing&&(l.selRing.material.opacity=l.selected?.7+.25*Math.sin(e*3):0),l.ping)if(l.flash>0){l.flash=Math.max(0,l.flash-t*1.1);const c=.6+(1-l.flash)*(l.pingSize+1.5);l.ping.scale.set(c,c,1),l.ping.material.color.set(l.statusColor||Hr),l.ping.material.opacity=l.flash*.75}else l.ping.material.opacity=0;if(l.people&&l.people.forEach((c,u)=>{const[m,y]=c.userData.arms,p=l.working?Math.sin(e*2.6+u+d)*.45:0;m.rotation.x=-.25+p,y.rotation.x=-.25-p}),l.route&&s){l.routeS=(l.routeS+t*l.speed)%l.route.total;const{pos:c,dir:u}=ja(l.route,l.routeS,r);l.group.position.x=c.x,l.group.position.z=c.z;let y=Math.atan2(-u.z,u.x)-l.yaw;for(;y>Math.PI;)y-=Math.PI*2;for(;y<-Math.PI;)y+=Math.PI*2;l.yaw+=y*Math.min(1,t*3),l.group.rotation.y=l.yaw}}),this.mode==="live"&&this.flowLines.forEach(l=>{var u,m;const h=this.items.get(l.flow.from),d=this.items.get(l.flow.to);if(!(h&&h.working||h&&!h.el.machine_id&&d&&d.working)||e<(l.nextEmit||0))return;this.spawnParticle(l.flow.from,l.flow.to);const c=Number((m=(u=h==null?void 0:h.el)==null?void 0:u.sim)==null?void 0:m.cycle_s)||60;l.nextEmit=e+Math.min(7,Math.max(2,c/22))*(.75+Math.random()*.5)});const a=this.mode==="sim"&&!this.simRunning?0:.5;if(this.flowLines.forEach(l=>l.materials.forEach(h=>h.map.offset.x-=t*a)),e-(this.declutterAt||0)>.2){this.declutterAt=e;const l=this.camera.position.distanceTo(this.controls.target)>45;l!==this.compact&&(this.compact=l,this.refreshLabels()),this.declutter()}this.particles.forEach(l=>{if(!l.mesh.visible)return;if(l.s+=t*l.speed,l.s>=l.route.total){l.mesh.visible=!1;return}const{pos:h,dir:d}=ja(l.route,l.s,r);l.mesh.position.copy(h),l.mesh.rotation.y=Math.atan2(-d.z,d.x)}),this.renderer.render(this.scene,this.camera)}dispose(){cancelAnimationFrame(this.frame),this.resizeObserver.disconnect();const t=this.renderer.domElement;t.removeEventListener("pointerdown",this.handlePointerDown),t.removeEventListener("pointerup",this.handlePointerUp),t.removeEventListener("pointermove",this.handlePointerMove),t.removeEventListener("webglcontextlost",this.handleContextLost),t.removeEventListener("webglcontextrestored",this.handleContextRestored),this.clear(),this.chevron.dispose(),this.envTexture&&this.envTexture.dispose(),this.controls.dispose(),this.renderer.dispose(),t.parentNode&&t.parentNode.removeChild(t)}}const X_=5,Y_=30,q_=.5;function $_(i){let t=i>>>0;return function(){t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}function yn(i,t){const e=Number(i);return Number.isFinite(e)?e:t}function K_(i){return i==="conveyor"||i==="oven"}function Z_(i){const t=Array.isArray(i==null?void 0:i.elements)?i.elements:[],e=Array.isArray(i==null?void 0:i.flows)?i.flows:[],n=new Map(t.map(f=>[f.id,f])),s=new Map(t.map(f=>[f.id,0])),r=new Map;e.forEach(f=>{!n.has(f.from)||!n.has(f.to)||(s.set(f.to,s.get(f.to)+1),r.has(f.from)||r.set(f.from,[]),r.get(f.from).push(f.to))});const a=(f,c)=>n.get(f).x-n.get(c).x||n.get(f).z-n.get(c).z,o=new Set(e.flatMap(f=>[f.from,f.to]));let l=t.filter(f=>o.has(f.id)&&s.get(f.id)===0).map(f=>f.id).sort(a);const h=new Set,d=[];for(;l.length;){const f=[];l.forEach(c=>{h.has(c)||(h.add(c),d.push(c),(r.get(c)||[]).forEach(u=>{s.set(u,s.get(u)-1),s.get(u)===0&&f.push(u)}))}),l=f.sort(a)}return t.filter(f=>!h.has(f.id)).map(f=>f.id).sort(a).forEach(f=>d.push(f)),d.filter(f=>n.get(f).machine_id)}function Fc(i){var o,l;const t=Array.isArray(i==null?void 0:i.elements)?i.elements:[],e=Array.isArray(i==null?void 0:i.flows)?i.flows:[],n=new Set(t.map(h=>h.id)),s={},r={};e.forEach(h=>{n.has(h.from)&&n.has(h.to)&&(r[h.from]=(r[h.from]||0)+1,s[h.to]=(s[h.to]||0)+1)});const a={};return t.forEach(h=>{const d=h.sim||{};if(!(s[h.id]||r[h.id])&&!d.role)return;const c=d.role||(s[h.id]?r[h.id]?"station":"sink":"source"),u=K_(h.kind);let m=yn(d.cycle_s,null);m==null&&(m=c!=="station"?0:u?Math.max(1,yn(h.w,2)/q_):Y_),a[h.id]={id:h.id,name:h.name||h.id,kind:h.kind,machine_id:h.machine_id||null,role:c,cycle_s:m,capacity:Math.max(1,Math.round(yn(d.capacity,u&&c==="station"?Math.max(1,Math.round(yn(h.w,1))):1))),mtbf_s:Math.max(0,yn(d.mtbf_s,0)),stop_s:Math.max(0,yn(d.stop_s,0)),arrival_s:d.arrival_s!=null?yn(d.arrival_s,null):null}}),{stations:a,flows:e.filter(h=>a[h.from]&&a[h.to]).map(h=>({from:h.from,to:h.to,buffer:Math.max(0,Math.round(yn(h.buffer,X_)))})),arrival_s:((o=i==null?void 0:i.simulation)==null?void 0:o.arrival_s)!=null?yn(i.simulation.arrival_s,null):null,horizon_h:yn((l=i==null?void 0:i.simulation)==null?void 0:l.horizon_h,8),seed:1}}class j_{constructor(t){this.params=t,this.reset()}reset(){const t=this.params;this.rand=$_(yn(t.seed,1)*2654435761),this.time=0,this.transfers=[],this.queues=t.flows.map(e=>({...e,count:0,area:0,max:0})),this.stations={},Object.values(t.stations).forEach(e=>{const n=this.queues.filter(o=>o.to===e.id),s=this.queues.filter(o=>o.from===e.id),r=e.role||(n.length===0?"source":s.length===0?"sink":"station"),a=r==="source"?yn(e.arrival_s??t.arrival_s,0):0;this.stations[e.id]={...e,role:r,inputs:n,outputs:s,slots:Array.from({length:Math.max(1,e.capacity)},()=>({state:"idle",remaining:0})),arrival:a,nextArrival:a,waiting:0,down:0,untilStop:this.sampleUptime(e),rr:0,done:0,time:{busy:0,blocked:0,starved:0,down:0}}}),this.order=this.topologicalOrder()}sampleUptime(t){return t.mtbf_s>0?-Math.log(1-this.rand())*t.mtbf_s:1/0}sampleStop(t){return t.stop_s>0?Math.max(1,-Math.log(1-this.rand())*t.stop_s):0}topologicalOrder(){const t=Object.keys(this.stations),e=Object.fromEntries(t.map(r=>[r,0]));this.queues.forEach(r=>{e[r.to]+=1});const n=t.filter(r=>e[r]===0),s=[];for(;n.length;){const r=n.shift();s.push(r),this.stations[r].outputs.forEach(a=>{e[a.to]-=1,e[a.to]===0&&n.push(a.to)})}return t.forEach(r=>{s.includes(r)||s.push(r)}),s.reverse()}pushOut(t){if(t.role==="sink"||t.outputs.length===0)return t.done+=1,!0;let e=null;return t.outputs.forEach(n=>{n.count<n.buffer&&(!e||n.count<e.count)&&(e=n)}),e?(e.count+=1,e.max=Math.max(e.max,e.count),t.done+=1,this.transfers.length<400&&this.transfers.push({from:e.from,to:e.to,t:this.time}),!0):!1}pullIn(t){if(t.role==="source")return t.arrival<=0?!0:t.waiting>0?(t.waiting-=1,!0):!1;const e=t.inputs.length;for(let n=0;n<e;n+=1){const s=t.inputs[(t.rr+n)%e];if(s.count>0)return s.count-=1,t.rr=(t.rr+n+1)%e,!0}return!1}step(t){this.transfers=[];const e=this.order;for(const n of e){const s=this.stations[n];if(s.role==="source"&&s.arrival>0)for(s.nextArrival-=t;s.nextArrival<=0;)s.waiting+=1,s.nextArrival+=s.arrival;if(s.down>0){s.down-=t,s.time.down+=t;continue}let r=!1,a=!1,o=!1;s.slots.forEach(l=>{l.state==="busy"&&(l.remaining-=t,l.remaining<=1e-9&&(l.state="blocked")),l.state==="blocked"&&this.pushOut(s)&&(l.state="idle"),l.state==="idle"&&this.pullIn(s)&&(s.cycle_s>0?(l.state="busy",l.remaining=s.cycle_s):l.state=this.pushOut(s)?"idle":"blocked"),l.state==="busy"?r=!0:l.state==="blocked"?a=!0:o=!0}),r?(s.time.busy+=t,s.untilStop-=t,s.untilStop<=0&&(s.down=this.sampleStop(s),s.untilStop=this.sampleUptime(s))):a?s.time.blocked+=t:o&&(s.time.starved+=t)}this.queues.forEach(n=>{n.area+=n.count*t}),this.time+=t}runFor(t,e=1){const n=Math.ceil(t/e);for(let s=0;s<n;s+=1)this.step(e);this.transfers=[]}stationState(t){const e=this.stations[t];return e?e.down>0?"down":e.slots.some(n=>n.state==="busy")?"busy":e.slots.some(n=>n.state==="blocked")?"blocked":"starved":null}stats(){const t=Math.max(this.time,1e-9),e=Object.values(this.stations).map(o=>({id:o.id,name:o.name,role:o.role,state:this.stationState(o.id),busy:o.time.busy/t,blocked:o.time.blocked/t,starved:o.time.starved/t,down:o.time.down/t,done:o.done,perHour:o.done/t*3600,queue:o.inputs.reduce((l,h)=>l+h.count,0),queueCap:o.inputs.reduce((l,h)=>l+h.buffer,0)})),n=e.filter(o=>o.role==="station");let s=null;n.forEach(o=>{const l=o.busy+o.down;(!s||l>s.busy+s.down)&&(s=o)});const a=e.filter(o=>o.role==="sink").reduce((o,l)=>o+l.done,0);return{time:this.time,finished:a,throughputPerHour:a/t*3600,wip:this.queues.reduce((o,l)=>o+l.count,0)+Object.values(this.stations).reduce((o,l)=>o+l.slots.filter(h=>h.state!=="idle").length,0),bottleneck:s?s.id:null,stations:e,queues:this.queues.map(o=>({from:o.from,to:o.to,count:o.count,buffer:o.buffer,avg:o.area/t,max:o.max}))}}}const J_={1:"work",2:"unplanned",3:"failure",4:"planned"},Q_=/^(kwh|mwh|m3|nm3|szt\.?|\.szt|pcs|sztuk|kvarh)$/i,tv=/całkowit|calkowit|licznik|total|wyprodukowan|produced/i,ev=[[/temperat|temp\b|°c/i,"temperature"],[/wibrac|vibrat/i,"vibration"],[/ciśnien|cisnien|pressure|bar\b/i,"pressure"],[/wilgotn|humid/i,"humidity"],[/\bph\b/i,"ph"],[/moc|power|prąd|prad|current|zużycie chwilowe|obciąż/i,"power"]];function Oc(i,t){const e=J_[Number(i)];if(e)return e;if(!t)return"unknown";const n=String(t).match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);if(!n)return"unknown";const[s,r,a]=n.slice(1).map(c=>parseInt(c,16)/255),o=Math.max(s,r,a),l=Math.min(s,r,a),h=(o+l)/2;if((o===l?0:h>.5?(o-l)/(2-o-l):(o-l)/(o+l))<.15)return"planned";let f=0;return o===s?f=((r-a)/(o-l)+(r<a?6:0))/6:o===r?f=((a-s)/(o-l)+2)/6:f=((s-r)/(o-l)+4)/6,f<.05||f>.92?"failure":f>.2&&f<.47?"work":"unplanned"}function Ja(i){const t=Math.max(0,Math.round(Number(i)||0));if(t<60)return`${t} s`;const e=Math.floor(t/60);if(e<60)return`${e} min`;const n=Math.floor(e/60);return n<48?`${n} h ${String(e%60).padStart(2,"0")} min`:`${Math.floor(n/24)} d ${n%24} h`}const Qa=i=>`${Math.round((Number(i)||0)*100)}%`,Kn=(i,t=1)=>Number.isFinite(Number(i))?Number(i).toLocaleString(void 0,{maximumFractionDigits:t}):"–";function nv(i){const t=`${i.name} ${i.unit}`,e=ev.find(([n])=>n.test(t));return e?e[1]:"generic"}function Bc(i,t){const e=String(t||"").trim();return e==="W"?i/1e3:e==="kW"?i:null}function iv({insights:i,live:t,upstream:e=[],downstream:n=[],t:s,nowS:r=Date.now()/1e3}){const a=[],o=(i==null?void 0:i.days)||7,l=t!=null&&t.color?Oc(t.typeEvent,t.color):null,h=(i==null?void 0:i.current)||null,d=l||(h==null?void 0:h.category)||"unknown",f=h&&h.category===d,c=f?Math.max(h.seconds||0,r-(h.since||r)):null,u=c!==null?Ja(c):s("hologram.reco.unknownDuration"),m=R=>R.find(k=>{var J;return((J=k.live)==null?void 0:J.color)&&!["work","unknown"].includes(Oc(k.live.typeEvent,k.live.color))}),y=(i==null?void 0:i.kpi)||{},p=i==null?void 0:i.last_sample_age_s;!(t!=null&&t.color)&&(p==null||p>900)&&a.push({severity:"danger",title:s("hologram.reco.noData.title"),text:p?s("hologram.reco.noData.textAge",{ago:Ja(p)}):s("hologram.reco.noData.text")});const g=m(e),A=m(n),E=R=>{var k;return{name:[R.number,R.name].filter(Boolean).join(" "),status:((k=R.live)==null?void 0:k.nameStatus)||""}};if(d==="failure"){const R=[s("hologram.reco.failure.text")];y.failures&&R.push(s("hologram.reco.failure.history",{n:y.failures,days:o,mttr:Kn(y.mttr_min,0)})),f&&h.p75_s&&c>h.p75_s&&R.push(s("hologram.reco.failure.long")),A&&R.push(s("hologram.reco.failure.downstream",E(A))),a.push({severity:"danger",title:s("hologram.reco.failure.title",{dur:u}),text:R.join(" ")})}else if(d==="unplanned"){const R=[];g?R.push(s("hologram.reco.unplanned.upstream",E(g))):A?R.push(s("hologram.reco.unplanned.downstream",E(A))):R.push(s("hologram.reco.unplanned.local")),f&&h.typical_s&&c>2*h.typical_s&&R.push(s("hologram.reco.unplanned.longer",{x:Kn(c/h.typical_s,1),typical:Ja(h.typical_s)})),a.push({severity:"warn",title:s("hologram.reco.unplanned.title",{dur:u}),text:R.join(" ")})}else d==="planned"?a.push({severity:"info",title:s("hologram.reco.planned.title",{dur:u,status:(t==null?void 0:t.nameStatus)||(h==null?void 0:h.name)||""}),text:s("hologram.reco.planned.text")}):d==="work"&&(A&&a.push({severity:"warn",title:s("hologram.reco.blocked.title"),text:s("hologram.reco.blocked.text",E(A))}),g&&a.push({severity:"info",title:s("hologram.reco.starved.title"),text:s("hologram.reco.starved.text",E(g))}));if(y.short_stops>=5&&a.push({severity:"warn",title:s("hologram.reco.shortStops.title",{n:y.short_stops,days:o}),text:s("hologram.reco.shortStops.text")}),y.availability!==null&&y.availability!==void 0&&y.availability<.75){const k=(i.states||[]).filter(J=>["unplanned","failure"].includes(J.category)).sort((J,x)=>x.share-J.share)[0];a.push({severity:"warn",title:s("hologram.reco.availability.title",{pct:Qa(y.availability),days:o}),text:k?s("hologram.reco.availability.text",{state:k.name||s(`hologram.reco.states.${k.category}`),share:Qa(k.share)}):s("hologram.reco.availability.textNoLoss")})}y.failures>=2&&y.mtbf_h!==null&&y.mtbf_h<24&&a.push({severity:"warn",title:s("hologram.reco.mtbf.title",{h:Kn(y.mtbf_h,1)}),text:s("hologram.reco.mtbf.text",{mttr:Kn(y.mttr_min,0),n:y.failures,days:o})});const w=((i==null?void 0:i.states)||[]).filter(R=>["planned","unplanned"].includes(R.category)).reduce((R,k)=>R+(k.seconds||0),0);let q=!1;((i==null?void 0:i.measurements)||[]).forEach(R=>{var $;if(R.counter||R.p05===void 0||R.p95===void 0||R.p95<=R.p05)return;const k=Number(R.current),J=R.p95-R.p05;!(Q_.test(String(R.unit||"").trim())||tv.test(R.name||""))&&(k>R.p95+J*.05||k<R.p05-J*.05)&&a.push({severity:"warn",title:s("hologram.reco.anomaly.title",{name:R.name,value:`${Kn(k,R.decimals)} ${R.unit}`.trim()}),text:s("hologram.reco.anomaly.text",{days:o,lo:Kn(R.p05,R.decimals),hi:`${Kn(R.p95,R.decimals)} ${R.unit}`.trim(),hint:s(`hologram.reco.hint.${nv(R)}`)})});const b=($=R.by_category)==null?void 0:$.work,Y=["planned","unplanned"].map(_=>{var M;return(M=R.by_category)==null?void 0:M[_]}).filter(_=>Number.isFinite(_)),H=Y.length?Bc(Y.reduce((_,M)=>_+M,0)/Y.length,R.unit):null,U=Number.isFinite(b)?Bc(b,R.unit):null;!q&&H!==null&&U&&H>.15*U&&w>3600&&(q=!0,a.push({severity:"info",title:s("hologram.reco.energy.title",{value:`${Kn(H,2)} kW`}),text:s("hologram.reco.energy.text",{pct:Qa(H/U),kwh:Kn(H*w/3600,0),days:o})}))}),!a.some(R=>R.severity==="danger"||R.severity==="warn")&&d==="work"&&a.unshift({severity:"ok",title:s("hologram.reco.ok.title"),text:s("hologram.reco.ok.text",{days:o})});const N={danger:0,warn:1,info:2,ok:3};return a.sort((R,k)=>N[R.severity]-N[k.severity])}function sv(i,t,e){const n=(i==null?void 0:i.flows)||[],s=new Map(((i==null?void 0:i.elements)||[]).map(l=>[l.id,l])),r=[],a=new Set([t]);let o=[t];for(let l=0;l<4&&o.length;l+=1){const h=[];o.forEach(d=>{n.filter(f=>e==="up"?f.to===d:f.from===d).map(f=>e==="up"?f.from:f.to).forEach(f=>{if(a.has(f))return;a.add(f);const c=s.get(f);c&&(c.machine_id?r.push(c):h.push(f))})}),o=h}return r}const rv={key:0,class:"flex flex-col gap-3"},av={key:1,class:"hologram-empty"},ov={class:"hologram-empty__title"},lv={class:"hologram-empty__text"},cv={class:"hologram-empty__steps"},hv=["title"],uv=["title"],dv={class:"hologram-layout__label"},fv={class:"hologram-layers"},pv={class:"hologram-layers__title"},mv=["for"],gv={key:0,class:"hologram-layers__params"},_v={for:"hologram-layer-param-names"},vv={class:"hologram-viewport"},xv={key:0,class:"hologram-kpis"},yv={class:"hologram-kpi__label"},Mv={class:"hologram-kpi__value"},Sv={class:"hologram-kpi__sub"},bv={class:"hologram-kpi"},Ev={class:"hologram-kpi__label"},wv={class:"hologram-kpi__value is-good"},Tv={class:"hologram-kpi__sub"},Av={class:"hologram-kpi"},Rv={class:"hologram-kpi__label"},Cv={class:"hologram-kpi__sub"},Pv={class:"hologram-kpi"},Lv={class:"hologram-kpi__label"},Dv={class:"hologram-kpi__sub"},Iv={key:1,class:"hologram-kpis"},Uv={class:"hologram-kpi"},Nv={class:"hologram-kpi__label"},Fv={class:"hologram-kpi__value"},Ov={class:"hologram-kpi__sub"},Bv={class:"hologram-kpi"},zv={class:"hologram-kpi__label"},kv={class:"hologram-kpi__value"},Hv={class:"hologram-kpi__sub"},Vv={class:"hologram-kpi hologram-kpi--wide"},Gv={class:"hologram-kpi__label"},Wv={class:"hologram-kpi__value is-bad hologram-kpi__text"},Xv={class:"hologram-kpi__sub"},Yv={class:"hologram-mapctl"},qv=["title","aria-label"],$v=["title","aria-label"],Kv=["title","aria-label"],Zv=["title","aria-label"],jv={key:2,class:"hologram-simbar"},Jv=["title"],Qv={class:"hologram-muted"},tx={key:4,class:"hologram-panel"},ex={class:"hologram-panel__head"},nx={key:0,class:"hologram-panel__num"},ix={class:"hologram-facts"},sx={class:"hologram-panel__sub"},rx={class:"hologram-signals"},ax=["aria-busy"],ox={class:"hologram-panel__sub"},lx={key:0,class:"hologram-reco__kpis"},cx={key:1,class:"flex flex-col gap-2"},hx={class:"hologram-reco__list"},ux={class:"hologram-reco__note"},dx={class:"hologram-panel__sub"},fx={class:"hologram-panel__grid"},px=["for"],mx=["for"],gx={key:5,class:"hologram-hint"},_x=["aria-label"],vx=["onClick"],xx={class:"hologram-mcard__top"},yx={class:"hologram-mcard__num"},Mx={class:"hologram-mcard__name"},Sx={class:"hologram-mcard__meta"},bx={class:"hologram-muted"},Ex={key:0,class:"hologram-arrival"},wx={for:"hologram-arrival"},Tx={class:"hologram-stations"},Ax={class:"hologram-stations__head"},Rx={class:"hologram-muted"},Cx={key:0,class:"hologram-stations__grid"},Px=["for"],Lx=["for"],Dx=["for"],Ix=["for"],Ux={class:"hologram-panel__sub"},zc="omni-hologram-view-v1",kc="#94a3b8",Hc=7,Nx={__name:"ComponentHologram",setup(i){const t=[1,10,60,300],n=Hh().proxy,s=()=>{var F,W;return(W=(F=n.$store)==null?void 0:F.state)==null?void 0:W.dataEnc},r=(F,W="",at="get",Gt=null)=>n.axios(Gc(n.$apiHost,F,W,s(),at,Gt)),a=F=>Array.isArray(F)?F:Array.isArray(F==null?void 0:F.results)?F.results:[],o=(F,W)=>{var at;return(at=n.$toast)==null?void 0:at.add({severity:F,summary:st(F==="error"?"error":"success"),detail:W,life:F==="error"?5e3:3e3})},l=Vh(),h=ye(()=>l.canWrite("hologram"));function d(){try{return JSON.parse(localStorage.getItem(zc)||"{}")||{}}catch{return{}}}function f(F){try{localStorage.setItem(zc,JSON.stringify({...d(),...F}))}catch{}}const c=d(),u=le(!0),m=le([]),y=le([]),p=le([]),g=le([]),A=le(c.id||null),E=le(null),w=le(c.mode==="sim"?"sim":"live"),q=c.layers&&typeof c.layers=="object"?c.layers:{},N=le({...Fh,...q,paramNames:Array.isArray(q.paramNames)?q.paramNames:[]}),R=le(null),k=["names","status","params","zones","flows","lights"],x=le(["side","bottom","none"].includes(c.cards)?c.cards:"side"),b=le(null),Y=le(null),H=le(null);let U=null;function $(){const F=Y.value;if(!F||window.innerWidth<=991){H.value=null;return}const W=F.getBoundingClientRect().top+(ze.value?0:window.scrollY);H.value=Math.max(480,Math.floor(window.innerHeight-W-(ze.value?14:32)))}_n(b,F=>{U==null||U.disconnect(),F&&(U=new ResizeObserver(()=>$()),U.observe(F),lr($))});const _=le(null),M=le(null);let v=null;const L=ye(()=>[{value:"side",label:st("hologram.layout.side"),icon:"pi pi-objects-column"},{value:"bottom",label:st("hologram.layout.bottom"),icon:"pi pi-table"},{value:"none",label:st("hologram.layout.none"),icon:"pi pi-eye-slash"}]),D=ye(()=>[{label:st("hologram.modeLive"),value:"live",icon:"pi pi-wifi"},{label:st("hologram.modeSim"),value:"sim",icon:"pi pi-sliders-h"}]),I=ye(()=>m.value.map(F=>({value:F.id,label:`${F.name} · v${F.version}`}))),K=ye(()=>{var F;return zt((F=E.value)==null?void 0:F.scene)}),nt=ye(()=>new Map((K.value.elements||[]).map(F=>[F.id,F]))),P=ye(()=>nt.value.get(_.value)||null),V=ye(()=>Z_(K.value)),et=ye(()=>new Map(V.value.map((F,W)=>[F,W+1])));function lt(F){var W;return((W=y.value.find(at=>Number(at.id)===Number(F)))==null?void 0:W.name)||`#${F}`}function ft(F){var W;return((W=p.value.find(at=>Number(at.id)===Number(F)))==null?void 0:W.name)||(F?`#${F}`:"")}function ht(F){return g.value.find(W=>Number(W.id)===Number(F))||null}function At(F){return st(`hologram.kinds.${F}`)}function zt(F){return Array.isArray(F==null?void 0:F.elements)?{...F,elements:F.elements.map(W=>{var Gt;const at=W.machine_id?(Gt=ht(W.machine_id))==null?void 0:Gt.name:"";return at&&at!==W.name?{...W,name:at}:W})}:F||{}}function kt(F){return Object.values((F==null?void 0:F.stations)||{}).forEach(W=>{const at=At(W.kind);W.name===W.id&&!at.startsWith("hologram.")&&(W.name=`${at} ${W.id}`)}),F}const B=F=>String(F).padStart(2,"0"),Ee=ye(()=>{var W;const F=K.value.scope||{type:"park"};if(F.type==="line")return st("hologram.scope.lines",{list:(F.line_ids||[]).map(ft).join(", ")});if(F.type==="machines"){const at=F.machine_ids||[];return at.length===1?((W=ht(at[0]))==null?void 0:W.name)||st("hologram.scope.machines",{n:1}):st("hologram.scope.machines",{n:at.length})}return st("hologram.scope.park",{park:E.value?lt(E.value.server):""})});let qt=!1;const $t=iu({axios:n.axios,apiHost:n.$apiHost,dataEnc:s,onError:F=>o("error",F),onConnect:()=>o("success",st("hologram.liveConnected")),onReconnect:()=>{var F;qt||(qt=!0,(F=n.$toast)==null||F.add({severity:"warn",summary:st("hologram.liveReconnect"),life:3e3}))},onSignal:(F,W,at)=>{w.value==="live"&&(v==null||v.signal(F,W,at))}}),Ht=le(Date.now());let fe=null;const Ut=ye(()=>{const F=$t.activity.lastAt?Math.max(0,Math.round((Ht.value-$t.activity.lastAt)/1e3)):null;return{connected:$t.connected.value,fresh:F!==null&&F<30,signals:$t.activity.signals,last:F}});let C=null;_n(()=>$t.live,()=>{w.value!=="live"||C||(C=requestAnimationFrame(()=>{C=null,v==null||v.applyLive($t.live)}))},{deep:!0});const S=F=>F!=null&&F.machine_id&&$t.live[String(F.machine_id)]||null,Z=ye(()=>{const F={total:0,working:0,stopped:0,failure:0,noData:0};return(K.value.elements||[]).forEach(W=>{if(!W.machine_id)return;F.total+=1;const at=S(W),Gt=Number(at==null?void 0:at.typeEvent);!at||!at.color?F.noData+=1:Gt===1?F.working+=1:Gt===3?F.failure+=1:F.stopped+=1}),F}),ot=ye(()=>S(P.value)),pt=ye(()=>(K.value.elements||[]).some(F=>F.kind==="light")),ct=ye(()=>k.filter(F=>F!=="lights"||pt.value).map(F=>({key:F,label:st(`hologram.layers.${F}`),hint:st(`hologram.layers.${F}Hint`)}))),Lt=ye(()=>{const F=new Set;return(K.value.elements||[]).forEach(W=>{var at;return(((at=S(W))==null?void 0:at.substatuses)||[]).forEach(Gt=>Gt.target&&F.add(Gt.target))}),N.value.paramNames.forEach(W=>F.add(W)),[...F].sort((W,at)=>W.localeCompare(at)).map(W=>({label:W,value:W}))}),yt=ye(()=>ct.value.filter(F=>!N.value[F.key]).length);function Tt(F,W){N.value={...N.value,[F]:W},f({layers:N.value,layersTouched:!0})}function ne(F){N.value={...N.value,paramNames:F||[]},f({layers:N.value,layersTouched:!0})}_n(N,F=>v==null?void 0:v.setLayers(F),{deep:!0});const mt=new Map,St=le(null),Ft=le(!1),Nt=le("");let wt=null;async function ee(F=!1){var He,Te;const W=P.value,at=W==null?void 0:W.machine_id;if(w.value!=="live"||!at||!E.value){St.value=null;return}const Gt=`${E.value.id}:${at}`;wt=Gt;const ue=mt.get(Gt);if(ue&&!F&&Date.now()-ue.at<6e4){St.value=ue.data,Nt.value="";return}Ft.value=!ue,ue&&(St.value=ue.data);try{const hn=await r(Mn.hologram,`/${E.value.id}/insights/?machine=${at}&days=${Hc}`);mt.set(Gt,{at:Date.now(),data:hn.data}),wt===Gt&&(St.value=hn.data,Nt.value="")}catch(hn){wt===Gt&&(Nt.value=((Te=(He=hn==null?void 0:hn.response)==null?void 0:He.data)==null?void 0:Te.detail)||hn.message)}finally{wt===Gt&&(Ft.value=!1)}}_n([_,w],()=>ee()),_n(()=>{var F,W;return[(F=ot.value)==null?void 0:F.typeEvent,(W=ot.value)==null?void 0:W.nameStatus]},(F,W)=>{W&&(F[0]!==W[0]||F[1]!==W[1])&&ee(!0)});const Xt=F=>P.value?sv(K.value,P.value.id,F).map(W=>{var at;return{name:W.name||((at=ht(W.machine_id))==null?void 0:at.name)||W.id,number:et.value.get(W.id)?B(et.value.get(W.id)):"",live:S(W)}}):[],he=ye(()=>{var F;return w.value!=="live"||!((F=P.value)!=null&&F.machine_id)?[]:!St.value&&!ot.value?[]:iv({insights:St.value,live:ot.value,upstream:Xt("up"),downstream:Xt("down"),t:st,nowS:Ht.value/1e3})}),z=ye(()=>{var at;const F=(at=St.value)==null?void 0:at.kpi;if(!F)return[];const W=[];return F.availability!==null&&F.availability!==void 0&&W.push({label:st("hologram.reco.kpiAvailability"),value:`${Math.round(F.availability*100)}%`}),W.push({label:st("hologram.reco.kpiFailures"),value:String(F.failures||0)}),F.mtbf_h&&W.push({label:"MTBF",value:`${fs(F.mtbf_h)} h`}),F.mttr_min&&W.push({label:"MTTR",value:`${fs(F.mttr_min)} min`}),W}),Et={danger:"pi pi-exclamation-circle",warn:"pi pi-exclamation-triangle",info:"pi pi-info-circle",ok:"pi pi-check-circle"};function it(F){if(!F)return"";const W=String(F).match(/(\d{1,2}:\d{2})(:\d{2})?/);return W?W[1]:String(F)}function ut(F){const W=((F==null?void 0:F.substatuses)||[]).find(at=>at.value!=="-"&&at.value!==void 0&&at.value!==null&&at.value!=="");return W?{value:`${fs(W.value)}${W.unit?" "+W.unit:""}`,name:W.target}:null}const gt=le(null),xt=le(null),Wt=le(!1),_e=le(c.speed&&t.includes(c.speed)?c.speed:60),We=t.map(F=>({label:`×${F}`,value:F}));let jt=null,Ie=null,sn=0,ki=0;const Cs=ye(()=>(K.value.flows||[]).length>0),kn=ye(()=>gt.value?Object.values(gt.value.stations):[]),Ps=ye(()=>({busy:st("hologram.sim.busy"),queue:st("hologram.sim.queue"),pcs:st("hologram.sim.pcs"),bottleneck:st("hologram.sim.bottleneck")})),rr=ye(()=>{var W,at,Gt,ue;const F=(W=xt.value)==null?void 0:W.bottleneck;return F?((ue=(Gt=(at=gt.value)==null?void 0:at.stations)==null?void 0:Gt[F])==null?void 0:ue.name)||F:st("hologram.sim.none")}),ln=ye(()=>{var F,W;return P.value&&((W=(F=gt.value)==null?void 0:F.stations)==null?void 0:W[P.value.id])||null});function Hi(F){const W=Math.floor(F||0);return`${Math.floor(W/3600)} h ${String(Math.floor(W%3600/60)).padStart(2,"0")} min`}function Vi(F){return`${Math.round((F||0)*100)}%`}function Ue(F){var W;return((W=xt.value)==null?void 0:W.stations.find(at=>at.id===F))||null}function Hn(){gt.value&&(jt=new j_(gt.value),vi())}function vi(){jt&&(xt.value=jt.stats(),w.value==="sim"&&(v==null||v.applySimulation(xt.value,[],Ps.value)))}function oa(){gt.value=kt(Fc(K.value)),Wt.value=!1,Hn()}function la(){jt||Hn(),Wt.value=!Wt.value,sn=0}function ca(){Wt.value=!1,Hn()}function T(){Wt.value=!1,Hn(),jt.runFor((gt.value.horizon_h||8)*3600,1),vi()}function G(F){Ie=requestAnimationFrame(G);const W=sn?Math.min(.25,(F-sn)/1e3):0;if(sn=F,!Wt.value||!jt||w.value!=="sim")return;let at=W*_e.value,Gt=0;for(;at>0;){const ue=Math.min(1,at);jt.step(ue),at-=ue;for(const He of jt.transfers){if(Gt>=40)break;v==null||v.spawnParticle(He.from,He.to),Gt+=1}}ki+=W,ki>=.25&&(ki=0,vi())}function j(){const F=Wt.value;Hn(),Wt.value=F}_n(_e,F=>f({speed:F})),_n(Wt,F=>v==null?void 0:v.setSimRunning(F));const Q={busy:"busy",blocked:"blocked",starved:"starved",down:"down"},X=ye(()=>V.value.map(F=>nt.value.get(F)).filter(Boolean).map(F=>{var ue,He,Te,hn;const W={id:F.id,number:B(et.value.get(F.id)),name:F.name||((ue=ht(F.machine_id))==null?void 0:ue.name)||F.id};if(w.value==="sim"){const gn=Ue(F.id),Ds=(Te=(He=gt.value)==null?void 0:He.stations)==null?void 0:Te[F.id],Pt=(gn==null?void 0:gn.role)==="station"?Q[gn.state]:null;return W.color=Pt?Pi[Pt]:kc,W.state=Pt?st(`hologram.sim.${Pt}`):st("hologram.cards.outOfFlow"),W.alert=((hn=xt.value)==null?void 0:hn.bottleneck)===F.id,W.meta=Ds&&(gn==null?void 0:gn.role)==="station"?st("hologram.cards.simMeta",{cycle:fs(Ds.cycle_s),busy:Vi(gn.busy),queue:gn.queue}):"",W}const at=S(F);W.color=(at==null?void 0:at.color)||kc,W.state=(at==null?void 0:at.nameStatus)||st("hologram.noLiveData"),W.alert=Number(at==null?void 0:at.typeEvent)===3;const Gt=ut(at);return W.meta=Gt?`${Gt.value} · ${Gt.name}`:at!=null&&at.date?st("hologram.cards.since",{time:it(at.date)}):"",W})),_t=F=>({color:F,background:`color-mix(in srgb, ${F} 14%, transparent)`,borderColor:`color-mix(in srgb, ${F} 40%, transparent)`});function bt(F){_.value=F,v==null||v.select(F),v==null||v.focus(F)}function Rt(){_.value=null,v==null||v.select(null)}async function Ct(){var F;u.value=!0;try{const[W,at,Gt]=await Promise.all([r(Mn.hologram,"/?limit=200"),r(Mn.listServers,"/"),r(Mn.listLines,"/").catch(()=>({data:[]}))]);m.value=a(W.data),y.value=a(at.data),p.value=a(Gt.data),m.value.some(ue=>ue.id===A.value)||(A.value=((F=m.value[0])==null?void 0:F.id)||null)}catch(W){o("error",W.message)}finally{u.value=!1}}async function Ot(F){if(!F){E.value=null,$t.stop();return}try{const W=await r(Mn.hologram,`/${F}/`);await Vt(W.data,!0),f({id:F})}catch(W){o("error",`${st("hologram.loadError")}: ${W.message}`)}}async function Vt(F,W){var ue,He;const at=((ue=E.value)==null?void 0:ue.server)!==F.server;E.value=F;const Gt=m.value.findIndex(Te=>Te.id===F.id);Gt>=0&&m.value.splice(Gt,1,{...m.value[Gt],...F}),_.value=null,d().layersTouched||(N.value={...N.value,names:((He=F.settings)==null?void 0:He.labels)!==!1}),(W||at)&&await Dt(F.server),await lr(),!v&&M.value&&(v=new W_(M.value,{onSelect:Te=>_.value=Te})),v==null||v.setLayers(N.value),v==null||v.setScene(K.value,F.settings||{}),v==null||v.setNumbers(et.value),gt.value=kt(Fc(K.value)),Wt.value=!1,Hn(),(W||at)&&(qt=!1,$t.start(F.server).catch(Te=>o("error",Te.message))),se()}async function Dt(F){try{const W=await r(Mn.listMachines,"/");g.value=a(W.data).filter(at=>Number(at.server)===Number(F))}catch{g.value=[]}}function se(){v&&(v.setMode(w.value),w.value==="live"?(Wt.value=!1,v.applyLive($t.live)):vi())}let pe=!1;_n(A,F=>{pe&&Ot(F)}),_n(w,F=>{f({mode:F}),se()}),_n(x,async F=>{f({cards:F}),await lr(),$(),requestAnimationFrame(()=>ve())}),_n(_,F=>v==null?void 0:v.select(F));function ve(){var F,W;v==null||v.applyCamera((W=(F=E.value)==null?void 0:F.settings)==null?void 0:W.camera,K.value.floor,!0)}function Ze(){v==null||v.topView()}const re=()=>v==null?void 0:v.zoom(.7),It=()=>v==null?void 0:v.zoom(1.4),we=le(!1),ie=le(!1),je=le(!1),ti=()=>v==null?void 0:v.getCamera();function Xe(F){Vt(F,!1)}const ze=le(!1);let xe=!1;const cn=()=>document.fullscreenElement||document.webkitFullscreenElement||null;function Ls(){var at;if(ze.value){ze.value=!1,cn()&&((at=document.exitFullscreen||document.webkitExitFullscreen)==null||at.call(document));return}ze.value=!0;const F=document.documentElement,W=F.requestFullscreen||F.webkitRequestFullscreen;try{const Gt=W==null?void 0:W.call(F);Gt&&typeof Gt.catch=="function"&&Gt.catch(()=>{})}catch{}}_n(ze,()=>lr($));function ke(){cn()?xe=!0:xe&&(xe=!1,ze.value=!1)}function Gi(F){F.key==="Escape"&&ze.value&&!cn()&&(ze.value=!1)}return Gh(async()=>{Ie=requestAnimationFrame(G),fe=setInterval(()=>Ht.value=Date.now(),1e3),document.addEventListener("fullscreenchange",ke),document.addEventListener("webkitfullscreenchange",ke),document.addEventListener("keydown",Gi),window.addEventListener("resize",$),await Ct(),pe=!0,A.value&&await Ot(A.value)}),Wh(()=>{var F;cancelAnimationFrame(Ie),clearInterval(fe),document.removeEventListener("fullscreenchange",ke),document.removeEventListener("webkitfullscreenchange",ke),document.removeEventListener("keydown",Gi),window.removeEventListener("resize",$),U==null||U.disconnect(),ze.value&&cn()&&((F=document.exitFullscreen||document.webkitExitFullscreen)==null||F.call(document)),C&&cancelAnimationFrame(C),$t.stop(),v==null||v.dispose(),v=null}),(F,W)=>(Bt(),Yt("div",{class:Vn(["hologram-root",{"is-fullscreen":ze.value}])},[te(tt($h),null,{content:vn(()=>{var at,Gt,ue,He,Te,hn,gn,Ds;return[u.value?(Bt(),Yt("div",rv,[te(tt(ar),{height:"2.5rem"}),te(tt(ar),{height:"28rem"})])):m.value.length?(Bt(),Yt(Ne,{key:2},[rt("div",{ref_key:"toolbarEl",ref:b,class:"hologram-toolbar"},[te(tt(Xh),{modelValue:A.value,"onUpdate:modelValue":W[0]||(W[0]=Pt=>A.value=Pt),options:I.value,optionLabel:"label",optionValue:"value",placeholder:tt(st)("hologram.select"),size:"small",class:"hologram-select"},null,8,["modelValue","options","placeholder"]),te(tt(ha),{modelValue:w.value,"onUpdate:modelValue":W[1]||(W[1]=Pt=>w.value=Pt),options:D.value,optionLabel:"label",optionValue:"value",allowEmpty:!1,size:"small"},null,8,["modelValue","options"]),E.value?(Bt(),Yt("span",{key:0,class:"hologram-scope",title:tt(st)("hologram.extendHint")},[W[16]||(W[16]=rt("i",{class:"pi pi-th-large","aria-hidden":"true"},null,-1)),Ve(dt(Ee.value),1)],8,hv)):Se("",!0),W[17]||(W[17]=rt("span",{class:"hologram-toolbar__spacer"},null,-1)),te(tt(ha),{modelValue:x.value,"onUpdate:modelValue":W[2]||(W[2]=Pt=>x.value=Pt),options:L.value,optionLabel:"label",optionValue:"value",allowEmpty:!1,size:"small",title:tt(st)("hologram.layout.title"),"aria-label":tt(st)("hologram.layout.title")},{option:vn(({option:Pt})=>[rt("i",{class:Vn(Pt.icon),title:Pt.label,"aria-hidden":"true"},null,10,uv),rt("span",dv,dt(Pt.label),1)]),_:1},8,["modelValue","options","title","aria-label"]),te(tt(Tn),{label:tt(st)("hologram.layers.button"),icon:"pi pi-clone",severity:"secondary",outlined:"",size:"small",badge:yt.value?String(ct.value.length-yt.value)+"/"+ct.value.length:void 0,badgeSeverity:"secondary",title:tt(st)("hologram.layers.title"),"aria-haspopup":"true",onClick:W[3]||(W[3]=Pt=>{var Un;return(Un=R.value)==null?void 0:Un.toggle(Pt)})},null,8,["label","badge","title"]),te(tt(jh),{ref_key:"layersPanel",ref:R},{default:vn(()=>[rt("div",fv,[rt("h5",pv,dt(tt(st)("hologram.layers.title")),1),(Bt(!0),Yt(Ne,null,xi(ct.value,Pt=>(Bt(),Yt("div",{key:Pt.key,class:"hologram-layers__row"},[te(tt(Yh),{modelValue:!!N.value[Pt.key],inputId:`hologram-layer-${Pt.key}`,"onUpdate:modelValue":Un=>Tt(Pt.key,Un)},null,8,["modelValue","inputId","onUpdate:modelValue"]),rt("label",{for:`hologram-layer-${Pt.key}`},[rt("span",null,dt(Pt.label),1),rt("small",null,dt(Pt.hint),1)],8,mv)]))),128)),N.value.params?(Bt(),Yt("div",gv,[rt("label",_v,dt(tt(st)("hologram.layers.paramNames")),1),te(tt(qh),{modelValue:N.value.paramNames,options:Lt.value,optionLabel:"label",optionValue:"value",inputId:"hologram-layer-param-names",placeholder:tt(st)("hologram.layers.paramNamesAll"),emptyMessage:tt(st)("hologram.layers.paramNamesEmpty"),display:"chip",maxSelectedLabels:3,filter:"",size:"small",fluid:"","onUpdate:modelValue":ne},null,8,["modelValue","options","placeholder","emptyMessage"])])):Se("",!0)])]),_:1},512),te(tt(Tn),{label:ze.value?tt(st)("hologram.exitFullscreen"):tt(st)("hologram.fullscreen"),icon:ze.value?"pi pi-window-minimize":"pi pi-window-maximize",severity:"secondary",outlined:"",size:"small",onClick:Ls},null,8,["label","icon"]),h.value?(Bt(),Is(tt(Tn),{key:1,label:tt(st)("hologram.configure"),icon:"pi pi-cog",severity:"secondary",outlined:"",size:"small",disabled:!E.value,onClick:W[4]||(W[4]=Pt=>ie.value=!0)},null,8,["label","disabled"])):Se("",!0),h.value?(Bt(),Is(tt(Tn),{key:2,label:tt(st)("hologram.versions"),icon:"pi pi-history",severity:"secondary",outlined:"",size:"small",disabled:!E.value,onClick:W[5]||(W[5]=Pt=>je.value=!0)},null,8,["label","disabled"])):Se("",!0)],512),rt("div",{ref_key:"stageEl",ref:Y,class:Vn(["hologram-stage",`is-${x.value}`]),style:Gn(H.value?{height:`${H.value}px`}:null)},[rt("div",vv,[rt("div",{ref_key:"canvasHost",ref:M,class:"hologram-canvas"},null,512),w.value==="live"?(Bt(),Yt("div",xv,[rt("div",{class:Vn(["hologram-kpi hologram-kpi--live",{"is-on":Ut.value.connected&&Ut.value.fresh,"is-wait":Ut.value.connected&&!Ut.value.fresh}])},[rt("span",yv,[W[18]||(W[18]=rt("span",{class:"hologram-live__dot"},null,-1)),Ve(dt(Ut.value.connected?tt(st)("hologram.live"):tt(st)("hologram.liveConnecting")),1)]),rt("strong",Mv,dt(Ut.value.signals),1),rt("span",Sv,[Ve(dt(tt(st)("hologram.kpi.signals")),1),Ut.value.last!==null?(Bt(),Yt(Ne,{key:0},[Ve(" · "+dt(tt(st)("hologram.liveLast",{s:Ut.value.last})),1)],64)):Se("",!0)])],2),rt("div",bv,[rt("span",Ev,dt(tt(st)("hologram.kpi.working")),1),rt("strong",wv,[Ve(dt(Z.value.working),1),rt("small",null," / "+dt(Z.value.total),1)]),rt("span",Tv,dt(tt(st)("hologram.kpi.machines")),1)]),rt("div",Av,[rt("span",Rv,dt(tt(st)("hologram.kpi.stopped")),1),rt("strong",{class:Vn(["hologram-kpi__value",{"is-warn":Z.value.stopped}])},dt(Z.value.stopped),3),rt("span",Cv,dt(tt(st)("hologram.kpi.stoppedHint")),1)]),rt("div",Pv,[rt("span",Lv,dt(tt(st)("hologram.kpi.failures")),1),rt("strong",{class:Vn(["hologram-kpi__value",{"is-bad":Z.value.failure}])},dt(Z.value.failure),3),rt("span",Dv,dt(Z.value.noData?tt(st)("hologram.kpi.noData",{n:Z.value.noData}):tt(st)("hologram.kpi.failuresHint")),1)])])):Cs.value&&xt.value?(Bt(),Yt("div",Iv,[rt("div",Uv,[rt("span",Nv,dt(tt(st)("hologram.sim.throughput")),1),rt("strong",Fv,[Ve(dt(xt.value.throughputPerHour.toFixed(1)),1),rt("small",null,dt(tt(st)("hologram.sim.perHour")),1)]),rt("span",Ov,dt(tt(st)("hologram.sim.time"))+" "+dt(Hi(xt.value.time)),1)]),rt("div",Bv,[rt("span",zv,dt(tt(st)("hologram.sim.finished")),1),rt("strong",kv,[Ve(dt(xt.value.finished),1),rt("small",null,dt(tt(st)("hologram.sim.pcs")),1)]),rt("span",Hv,dt(tt(st)("hologram.sim.wip"))+" "+dt(xt.value.wip),1)]),rt("div",Vv,[rt("span",Gv,dt(tt(st)("hologram.sim.bottleneck")),1),rt("strong",Wv,dt(rr.value),1),rt("span",Xv,dt(tt(st)("hologram.kpi.bottleneckHint")),1)])])):Se("",!0),rt("div",Yv,[rt("button",{type:"button",title:tt(st)("hologram.zoomIn"),"aria-label":tt(st)("hologram.zoomIn"),onClick:re},[...W[19]||(W[19]=[rt("i",{class:"pi pi-plus"},null,-1)])],8,qv),rt("button",{type:"button",title:tt(st)("hologram.zoomOut"),"aria-label":tt(st)("hologram.zoomOut"),onClick:It},[...W[20]||(W[20]=[rt("i",{class:"pi pi-minus"},null,-1)])],8,$v),rt("button",{type:"button",title:tt(st)("hologram.resetView"),"aria-label":tt(st)("hologram.resetView"),onClick:ve},[...W[21]||(W[21]=[rt("i",{class:"pi pi-home"},null,-1)])],8,Kv),rt("button",{type:"button",title:tt(st)("hologram.topView"),"aria-label":tt(st)("hologram.topView"),onClick:Ze},[...W[22]||(W[22]=[rt("i",{class:"pi pi-map"},null,-1)])],8,Zv)]),w.value==="sim"&&Cs.value?(Bt(),Yt("div",jv,[te(tt(Tn),{label:Wt.value?tt(st)("hologram.sim.pause"):tt(st)("hologram.sim.run"),icon:Wt.value?"pi pi-pause":"pi pi-play",severity:"primary",size:"small",onClick:la},null,8,["label","icon"]),te(tt(ha),{modelValue:_e.value,"onUpdate:modelValue":W[6]||(W[6]=Pt=>_e.value=Pt),options:tt(We),optionLabel:"label",optionValue:"value",allowEmpty:!1,size:"small",title:tt(st)("hologram.sim.speed")},null,8,["modelValue","options","title"]),te(tt(Tn),{icon:"pi pi-replay",severity:"secondary",outlined:"",size:"small",title:tt(st)("hologram.sim.reset"),"aria-label":tt(st)("hologram.sim.reset"),onClick:ca},null,8,["title","aria-label"]),te(tt(Tn),{label:tt(st)("hologram.sim.fastForward",{h:((at=gt.value)==null?void 0:at.horizon_h)||8}),icon:"pi pi-forward",severity:"secondary",outlined:"",size:"small",onClick:T},null,8,["label"]),te(tt(Tn),{label:tt(st)("hologram.sim.paramsOpen"),icon:"pi pi-sliders-h",severity:"secondary",outlined:"",size:"small",onClick:W[7]||(W[7]=Pt=>we.value=!0)},null,8,["label"]),rt("span",{class:"hologram-legend",title:tt(st)("hologram.sim.legendHint")},[rt("span",Qv,dt(tt(st)("hologram.sim.legendTitle"))+":",1),(Bt(!0),Yt(Ne,null,xi(tt(Pi),(Pt,Un)=>(Bt(),Yt("span",{key:Un},[rt("span",{class:"hologram-dot",style:Gn({background:Pt})},null,4),Ve(dt(tt(st)(`hologram.sim.${Un}`)),1)]))),128))],8,Jv)])):w.value==="sim"?(Bt(),Is(tt(or),{key:3,severity:"warn",size:"small",class:"hologram-simbar"},{default:vn(()=>[Ve(dt(tt(st)("hologram.sim.noFlows")),1)]),_:1})):Se("",!0),P.value?(Bt(),Yt("aside",tx,[rt("div",ex,[et.value.get(P.value.id)?(Bt(),Yt("span",nx,dt(B(et.value.get(P.value.id))),1)):Se("",!0),rt("h4",null,dt(P.value.name||P.value.id),1),te(tt(Tn),{icon:"pi pi-times",text:"",rounded:"",size:"small",severity:"secondary","aria-label":tt(st)("hologram.close"),onClick:Rt},null,8,["aria-label"])]),w.value==="live"&&P.value.machine_id?(Bt(),Yt("span",{key:0,class:"hologram-state",style:Gn(_t(((Gt=ot.value)==null?void 0:Gt.color)||"#94a3b8"))},[rt("span",{class:"hologram-dot",style:Gn({background:((ue=ot.value)==null?void 0:ue.color)||"#94a3b8"})},null,4),Ve(dt(((He=ot.value)==null?void 0:He.nameStatus)||tt(st)("hologram.noLiveData")),1)],4)):Se("",!0),w.value==="sim"&&((Te=Ue(P.value.id))==null?void 0:Te.role)==="station"?(Bt(),Yt("span",{key:1,class:"hologram-state",style:Gn(_t(tt(Pi)[Ue(P.value.id).state]))},[rt("span",{class:"hologram-dot",style:Gn({background:tt(Pi)[Ue(P.value.id).state]})},null,4),Ve(dt(tt(st)(`hologram.sim.${Ue(P.value.id).state}`)),1)],4)):Se("",!0),rt("dl",ix,[rt("dt",null,dt(tt(st)("hologram.kind")),1),rt("dd",null,dt(At(P.value.kind)),1),P.value.machine_id?(Bt(),Yt(Ne,{key:0},[rt("dt",null,dt(tt(st)("hologram.machine")),1),rt("dd",null,dt(((hn=ht(P.value.machine_id))==null?void 0:hn.name)||`#${P.value.machine_id}`),1),rt("dt",null,dt(tt(st)("hologram.line")),1),rt("dd",null,dt(ft(P.value.line_id||((gn=ht(P.value.machine_id))==null?void 0:gn.line))||"–"),1)],64)):(Bt(),Yt(Ne,{key:1},[rt("dt",null,dt(tt(st)("hologram.machine")),1),rt("dd",null,dt(tt(st)("hologram.noMachine")),1)],64)),w.value==="live"&&((Ds=ot.value)!=null&&Ds.date)?(Bt(),Yt(Ne,{key:2},[rt("dt",null,dt(tt(st)("hologram.since")),1),rt("dd",null,dt(ot.value.date),1)],64)):Se("",!0),P.value.operators?(Bt(),Yt(Ne,{key:3},[rt("dt",null,dt(tt(st)("hologram.operators")),1),rt("dd",null,dt(P.value.operators),1)],64)):Se("",!0),w.value==="sim"&&Ue(P.value.id)?(Bt(),Yt(Ne,{key:4},[rt("dt",null,dt(tt(st)("hologram.sim.utilization")),1),rt("dd",null,dt(Vi(Ue(P.value.id).busy)),1),rt("dt",null,dt(tt(st)("hologram.sim.finished")),1),rt("dd",null,dt(Ue(P.value.id).done)+" "+dt(tt(st)("hologram.sim.pcs")),1),rt("dt",null,dt(tt(st)("hologram.sim.queue")),1),rt("dd",null,dt(Ue(P.value.id).queue)+" / "+dt(Ue(P.value.id).queueCap),1)],64)):Se("",!0)]),w.value==="live"&&ot.value&&ot.value.substatuses.length?(Bt(),Yt(Ne,{key:2},[rt("h5",sx,dt(tt(st)("hologram.signals")),1),rt("ul",rx,[(Bt(!0),Yt(Ne,null,xi(ot.value.substatuses,Pt=>(Bt(),Yt("li",{key:Pt.tag},[rt("span",null,dt(Pt.target),1),rt("strong",null,dt(tt(fs)(Pt.value))+" "+dt(Pt.unit),1)]))),128))])],64)):Se("",!0),w.value==="live"&&P.value.machine_id?(Bt(),Yt("section",{key:3,class:"hologram-reco","aria-busy":Ft.value},[rt("h5",ox,dt(tt(st)("hologram.reco.title")),1),z.value.length?(Bt(),Yt("div",lx,[(Bt(!0),Yt(Ne,null,xi(z.value,Pt=>(Bt(),Yt("span",{key:Pt.label,class:"hologram-reco__kpi"},[rt("small",null,dt(Pt.label),1),rt("strong",null,dt(Pt.value),1)]))),128))])):Se("",!0),Ft.value&&!he.value.length?(Bt(),Yt("div",cx,[te(tt(ar),{height:"2.6rem"}),te(tt(ar),{height:"2.6rem"})])):Se("",!0),Nt.value?(Bt(),Is(tt(or),{key:2,severity:"warn",size:"small",class:"mb-2"},{default:vn(()=>[Ve(dt(tt(st)("hologram.reco.error",{msg:Nt.value})),1)]),_:1})):Se("",!0),rt("ul",hx,[(Bt(!0),Yt(Ne,null,xi(he.value,(Pt,Un)=>(Bt(),Yt("li",{key:Un,class:Vn(["hologram-reco__item",`is-${Pt.severity}`])},[rt("i",{class:Vn(Et[Pt.severity]),"aria-hidden":"true"},null,2),rt("div",null,[rt("strong",null,dt(Pt.title),1),rt("p",null,dt(Pt.text),1)])],2))),128))]),rt("p",ux,dt(tt(st)("hologram.reco.footnote",{days:Hc})),1)],8,ax)):Se("",!0),w.value==="sim"&&ln.value&&ln.value.role==="station"?(Bt(),Yt(Ne,{key:4},[rt("h5",dx,dt(tt(st)("hologram.sim.params")),1),rt("div",fx,[rt("label",{for:`panel-cycle-${ln.value.id}`},dt(tt(st)("hologram.sim.cycle")),9,px),te(tt(ei),{modelValue:ln.value.cycle_s,"onUpdate:modelValue":[W[8]||(W[8]=Pt=>ln.value.cycle_s=Pt),j],inputId:`panel-cycle-${ln.value.id}`,size:"small",min:.1,maxFractionDigits:1,useGrouping:!1,fluid:""},null,8,["modelValue","inputId"]),rt("label",{for:`panel-cap-${ln.value.id}`},dt(tt(st)("hologram.sim.capacity")),9,mx),te(tt(ei),{modelValue:ln.value.capacity,"onUpdate:modelValue":[W[9]||(W[9]=Pt=>ln.value.capacity=Pt),j],inputId:`panel-cap-${ln.value.id}`,size:"small",min:1,max:100,useGrouping:!1,fluid:""},null,8,["modelValue","inputId"])])],64)):Se("",!0)])):w.value==="live"?(Bt(),Yt("div",gx,dt(tt(st)("hologram.noSelection")),1)):Se("",!0)]),X.value.length&&x.value!=="none"?(Bt(),Yt("div",{key:0,class:"hologram-cards",role:"list","aria-label":tt(st)("hologram.layout.title")},[(Bt(!0),Yt(Ne,null,xi(X.value,Pt=>(Bt(),Yt("button",{key:Pt.id,type:"button",role:"listitem",class:Vn(["hologram-mcard",{"is-selected":Pt.id===_.value,"is-alert":Pt.alert}]),style:Gn({"--state":Pt.color}),onClick:Un=>bt(Pt.id)},[rt("span",xx,[rt("span",yx,dt(Pt.number),1),rt("span",{class:"hologram-mcard__state",style:Gn(_t(Pt.color))},dt(Pt.state),5)]),rt("span",Mx,dt(Pt.name),1),rt("span",Sx,dt(Pt.meta),1)],14,vx))),128))],8,_x)):Se("",!0)],6)],64)):(Bt(),Yt("div",av,[W[15]||(W[15]=rt("i",{class:"pi pi-box hologram-empty__icon","aria-hidden":"true"},null,-1)),rt("h3",ov,dt(tt(st)("hologram.mcpOnlyTitle")),1),rt("p",lv,dt(tt(st)("hologram.mcpOnlyText")),1),te(tt(or),{severity:"info",size:"small",class:"mb-3"},{default:vn(()=>[Ve(dt(tt(st)("hologram.mcpModelHint")),1)]),_:1}),rt("ol",cv,[rt("li",null,dt(tt(st)("hologram.mcpStep1")),1),rt("li",null,dt(tt(st)("hologram.mcpStep2")),1),rt("li",null,dt(tt(st)("hologram.mcpStep3")),1)]),te(Jh,{holograms:m.value},null,8,["holograms"])]))]}),_:1}),te(tt(Kh),{visible:we.value,"onUpdate:visible":W[12]||(W[12]=at=>we.value=at),modal:"",header:tt(st)("hologram.sim.params"),style:{width:"60rem",maxWidth:"95vw"}},{footer:vn(()=>[te(tt(Tn),{label:tt(st)("hologram.sim.restore"),icon:"pi pi-undo",severity:"secondary",outlined:"",size:"small",onClick:oa},null,8,["label"]),te(tt(Tn),{label:tt(st)("hologram.close"),icon:"pi pi-check",severity:"primary",size:"small",onClick:W[11]||(W[11]=at=>we.value=!1)},null,8,["label"])]),default:vn(()=>[rt("p",bx,dt(tt(st)("hologram.sim.hint")),1),te(tt(or),{severity:"secondary",size:"small",class:"hologram-params-help"},{default:vn(()=>[rt("ul",null,[rt("li",null,dt(tt(st)("hologram.sim.helpCapacity")),1),rt("li",null,dt(tt(st)("hologram.sim.helpBuffer")),1),rt("li",null,dt(tt(st)("hologram.sim.helpStops")),1)])]),_:1}),gt.value?(Bt(),Yt("div",Ex,[rt("label",wx,dt(tt(st)("hologram.sim.arrival")),1),te(tt(ei),{modelValue:gt.value.arrival_s,"onUpdate:modelValue":[W[10]||(W[10]=at=>gt.value.arrival_s=at),j],inputId:"hologram-arrival",size:"small",min:.1,maxFractionDigits:1,useGrouping:!1,placeholder:tt(st)("hologram.sim.arrivalHint")},null,8,["modelValue","placeholder"])])):Se("",!0),rt("ul",Tx,[(Bt(!0),Yt(Ne,null,xi(kn.value,at=>{var Gt,ue,He;return Bt(),Yt("li",{key:at.id},[rt("div",Ax,[rt("span",null,[rt("span",{class:"hologram-dot",style:Gn({background:at.role==="station"&&tt(Pi)[(Gt=Ue(at.id))==null?void 0:Gt.state]||"#94a3b8"})},null,4),Ve(dt(at.name),1)]),rt("small",Rx,[at.role==="station"?(Bt(),Yt(Ne,{key:0},[Ve(dt(tt(st)("hologram.sim.utilization"))+" "+dt(Vi((ue=Ue(at.id))==null?void 0:ue.busy)),1)],64)):(Bt(),Yt(Ne,{key:1},[Ve(dt(((He=Ue(at.id))==null?void 0:He.done)||0)+" "+dt(tt(st)("hologram.sim.pcs")),1)],64))])]),at.role==="station"?(Bt(),Yt("div",Cx,[rt("label",{for:`sim-cycle-${at.id}`},dt(tt(st)("hologram.sim.cycle")),9,Px),rt("label",{for:`sim-cap-${at.id}`},dt(tt(st)("hologram.sim.capacity")),9,Lx),rt("label",{for:`sim-mtbf-${at.id}`},dt(tt(st)("hologram.sim.mtbf")),9,Dx),rt("label",{for:`sim-stop-${at.id}`},dt(tt(st)("hologram.sim.stop")),9,Ix),te(tt(ei),{modelValue:at.cycle_s,"onUpdate:modelValue":[Te=>at.cycle_s=Te,j],inputId:`sim-cycle-${at.id}`,size:"small",min:.1,maxFractionDigits:1,useGrouping:!1,fluid:""},null,8,["modelValue","onUpdate:modelValue","inputId"]),te(tt(ei),{modelValue:at.capacity,"onUpdate:modelValue":[Te=>at.capacity=Te,j],inputId:`sim-cap-${at.id}`,size:"small",min:1,max:100,useGrouping:!1,fluid:""},null,8,["modelValue","onUpdate:modelValue","inputId"]),te(tt(ei),{modelValue:at.mtbf_s,"onUpdate:modelValue":[Te=>at.mtbf_s=Te,j],inputId:`sim-mtbf-${at.id}`,size:"small",min:0,useGrouping:!1,fluid:""},null,8,["modelValue","onUpdate:modelValue","inputId"]),te(tt(ei),{modelValue:at.stop_s,"onUpdate:modelValue":[Te=>at.stop_s=Te,j],inputId:`sim-stop-${at.id}`,size:"small",min:0,useGrouping:!1,fluid:""},null,8,["modelValue","onUpdate:modelValue","inputId"])])):Se("",!0)])}),128))]),rt("h5",Ux,dt(tt(st)("hologram.sim.buffers")),1),gt.value?(Bt(),Is(tt(Zh),{key:1,value:gt.value.flows,size:"small",scrollable:"",scrollHeight:"16rem"},{default:vn(()=>[te(tt(vl),{header:tt(st)("hologram.sim.station")},{body:vn(({data:at})=>{var Gt,ue;return[Ve(dt((Gt=gt.value.stations[at.from])==null?void 0:Gt.name)+" → "+dt((ue=gt.value.stations[at.to])==null?void 0:ue.name),1)]}),_:1},8,["header"]),te(tt(vl),{header:tt(st)("hologram.sim.buffer"),style:{width:"9rem"}},{body:vn(({data:at})=>[te(tt(ei),{modelValue:at.buffer,"onUpdate:modelValue":[Gt=>at.buffer=Gt,j],size:"small",min:0,useGrouping:!1,fluid:""},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["header"])]),_:1},8,["value"])):Se("",!0)]),_:1},8,["visible","header"]),te(Qh,{visible:ie.value,"onUpdate:visible":W[13]||(W[13]=at=>ie.value=at),hologram:E.value,machines:g.value,currentCamera:ti,onSaved:Xe},null,8,["visible","hologram","machines"]),te(tu,{visible:je.value,"onUpdate:visible":W[14]||(W[14]=at=>je.value=at),hologram:E.value,onRestored:Xe},null,8,["visible","hologram"])],2))}},Fx=kh(Nx,[["__scopeId","data-v-8c801821"]]),Xx={__name:"Hologram",setup(i){return(t,e)=>(Bt(),Yt("div",null,[te(Fx)]))}};export{Xx as default};
