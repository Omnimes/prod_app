import{aM as Qo,aq as pe,aN as un,aO as tl,m as bc,aP as xh,aQ as Mh,aR as yh,_ as Sh,ak as Eh,aF as bh,al as Ee,ax as _n,aS as ot,ar as wh,as as Th,e as ee,o as Kt,h as ie,w as vn,at as it,c as el,f as lt,t as dt,A as Yr,k as Ie,F as ze,j as be,g as Hs,b as Ah,a as qr,E as ni,aT as Rh,d as xn,x as An,i as Vs,ao as Bn,B as Ch,J as Ph,ay as Gs}from"./index-D_mjEuro.js";import{s as nl}from"./index-D2ReZ3-I.js";import{s as Lh}from"./index-OlU5oN46.js";import{C as Dh,a as Ih,_ as Uh}from"./ComponentHologramPromptBuilder-DVaL6aDY.js";import"./index-CQsWiXKl.js";import"./index-q9SWnH3_.js";import"./index-_oEd9pI5.js";var Ec;const $r=(Mh||((Ec=yh)==null?void 0:Ec.get)||(()=>null))("spBv1.0"),wi=i=>Array.isArray(i)?i:Array.isArray(i==null?void 0:i.results)?i.results:Array.isArray(i==null?void 0:i.data)?i.data:[];function Nh(i){const t=window.location.protocol==="https:"?"wss://":"ws://",e=String(i||"").trim().replace(/^https?:\/\//i,"").replace(/^wss?:\/\//i,"").replace(/^\/+/,"").replace(/\/+$/,"");if(!e)return"";const n=`${t}${e}`;return/\/mqtt$/i.test(n)?n:`${n}/mqtt`}function Fh(i,t){const e=i.survey_low,n=i.survey_high;if(e==null&&n==null)return null;const s=parseFloat((t??"").toString());return!(Number.isNaN(s)||e!=null&&s<Number(e)||n!=null&&s>=Number(n))}function Oh({axios:i,apiHost:t,dataEnc:e,onError:n,onConnect:s,onReconnect:r,onSignal:a}={}){const o=Qo({}),l=pe(!1),h=Qo({messages:0,signals:0,lastAt:0}),d=pe([]);let p=null,c=[],u=[];const m=(Q,v="",S="get",X=null)=>i(bc(t,Q,v,e(),S,X)),M=Q=>{var v;return((v=c.find(S=>Number(S.id)===Number(Q)))==null?void 0:v.name)||""},f=Q=>{var v;return((v=u.find(S=>Number(S.id)===Number(Q)))==null?void 0:v.name)||""};function g(Q){const v=String(Q);return o[v]||(o[v]={color:null,nameStatus:"",typeEvent:null,date:"",updatedAt:0,substatuses:[],signals:{}}),o[v]}function A(Q,v){var I;const S=(I=Q.profil)==null?void 0:I[0];if(!S)return;const X=g(Q.machine);X.color=S.colorBackground||X.color,X.nameStatus=S.nameStatus||"",X.typeEvent=S.typeEvent??null,X.date=v}function b(Q,v){var O;const S=((O=Q.profil)==null?void 0:O[0])||{},X=g(Q.machine),I={tag:Q.tag,target:M(S.aliasValue)||Q.tag,value:v,unit:f(S.unitValue)},H=X.substatuses.findIndex(_=>_.tag===Q.tag);H>=0?X.substatuses.splice(H,1,I):X.substatuses.push(I)}function w(Q,v,S,{lastEvent:X=!1,machine:I=null}={}){return d.value.filter(H=>!(H.tag!==Q||I&&Number(H.machine)!==Number(I)||!X&&H.topic!==v||X&&v&&H.topic&&H.topic!==v)).map(H=>{var x,C;const O=(C=(x=H.profil)==null?void 0:x[0])==null?void 0:C.main,_=Fh(H,S);let y=!1;return O===1?_!==null?y=_:y=(H.value??"").toString().toLowerCase()===(S??"").toString().toLowerCase()||H.value==="":O===2&&(y=H.value===""||H.value==null),y?H:null}).filter(Boolean)}function q(Q,v,S,X,I){const H=w(Q,v,S,I),O=H.filter(x=>{var C,L;return((L=(C=x.profil)==null?void 0:C[0])==null?void 0:L.main)===1&&x.value!==""}),_=H.filter(x=>{var C,L;return((L=(C=x.profil)==null?void 0:C[0])==null?void 0:L.main)===1&&x.value===""});(O.length?O:_).slice(0,1).forEach(x=>A(x,X)),H.filter(x=>{var C,L;return((L=(C=x.profil)==null?void 0:C[0])==null?void 0:L.main)===2}).forEach(x=>b(x,S));const y=new Set;if(H.forEach(x=>{const C=g(x.machine);C.signals[Q]=S,y.add(x.machine)}),!(I!=null&&I.lastEvent)&&y.size){const x=Date.now();h.signals+=1,h.lastAt=x,y.forEach(C=>{g(C).updatedAt=x,a&&a(C,Q,S)})}}function N(){if(p)try{p.end(!0)}catch{}p=null,l.value=!1}async function D(Q){var C,L;if(N(),Object.keys(o).forEach(P=>delete o[P]),h.messages=0,h.signals=0,h.lastAt=0,!Q)return;const v=(P,tt)=>P.catch($=>(n&&n($.message),{data:tt})),[S,X,I,H,O]=await Promise.all([v(m(un.settings,""),{results:[]}),v(m(un.statusesProfilesList,"/"),[]),v(m(un.machines,`/?server=${Q}&limit=1000`),[]),m(un.listAliases,"/").catch(()=>({data:[]})),m(un.listUnits,"/").catch(()=>({data:[]}))]);c=wi(H.data),u=wi(O.data);const _=wi(X.data),y=[];wi(I.data).forEach(P=>{(P.machine_status||[]).forEach(tt=>{var z,Z;const $=Array.isArray(tt.profil)?(Z=(z=tt.profil)==null?void 0:z[0])==null?void 0:Z.id:tt.profil;y.push({...tt,machine:tt.machine??P.id,profil:_.filter(at=>Number(at.id)===Number($))})})}),d.value=y;try{const P=await m(un.events,"/last/","post",{server:Q,line:0});wi(P.data).forEach(tt=>{q(tt.tag,tt.topic,tt.value,tl(tt.timestamp_add),{lastEvent:!0,machine:tt.machine})})}catch(P){n&&n(P.message)}let x={};try{x=JSON.parse(((L=(C=wi(S.data))==null?void 0:C[0])==null?void 0:L.data)||"{}")}catch{x={}}Y(x)}function Y(Q){const v=Nh(Q.adress);if(!v)return;let S;try{S=new URL(v)}catch{return}const X={clientId:(Q.nameClient||"omnimes-hologram")+Math.floor(Math.random()*1e7),reconnectPeriod:Number(Q.reconnectPeriod)||1e3,username:Q.login,password:Q.password};S.protocol!=="wss:"&&!S.port&&Q.port&&(X.port=Number(Q.port)||8083),p=xh.connect(v,X),p.on("connect",()=>{l.value=!0,p.subscribe(Q.topic||"#",{qos:Number(Q.qos)||0}),s&&s()}),p.on("reconnect",()=>{l.value=!1,r&&r()}),p.on("message",(I,H)=>{let O=null;try{O=$r&&typeof $r.decodePayload=="function"?$r.decodePayload(H):null}catch{O=null}if(!O||!Array.isArray(O.metrics))return;h.messages+=1;const _=[...O.metrics];O.metrics.forEach(y=>{var x;(y==null?void 0:y.type)==="DataSet"&&((x=y.value)!=null&&x.rows)&&y.name&&y.value.rows.forEach((C,L)=>{C&&_.push({name:`${y.name}/${L+1}`,value:C[0],timestamp:O.timestamp})})}),_.forEach(y=>{var C,L;if((y==null?void 0:y.name)===void 0||(y==null?void 0:y.type)==="DataSet")return;const x=((L=(C=y.value)==null?void 0:C.toString)==null?void 0:L.call(C))??y.value;q(y.name,I,x,tl(y.timestamp||O.timestamp))})})}return{live:o,connected:l,activity:h,statuses:d,start:D,stop:N}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Po="169",Ki={ROTATE:0,DOLLY:1,PAN:2},qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Bh=0,il=1,zh=2,wc=1,Tc=2,In=3,jn=0,We=1,dn=2,Zn=0,mi=1,Fa=2,sl=3,rl=4,kh=5,hi=100,Hh=101,Vh=102,Gh=103,Wh=104,Xh=200,Yh=201,qh=202,$h=203,Oa=204,Ba=205,Zh=206,Kh=207,jh=208,Jh=209,Qh=210,tu=211,eu=212,nu=213,iu=214,za=0,ka=1,Ha=2,Qi=3,Va=4,Ga=5,Wa=6,Xa=7,Ac=0,su=1,ru=2,Kn=0,au=1,ou=2,lu=3,Rc=4,cu=5,hu=6,uu=7,Cc=300,ts=301,es=302,Ya=303,qa=304,Or=306,Jn=1e3,fi=1001,$a=1002,Ye=1003,du=1004,Ws=1005,rn=1006,Zr=1007,pi=1008,Nn=1009,Pc=1010,Lc=1011,Ds=1012,Lo=1013,gi=1014,Sn=1015,Os=1016,Do=1017,Io=1018,ns=1020,Dc=35902,Ic=1021,Uc=1022,pn=1023,Nc=1024,Fc=1025,ji=1026,is=1027,Uo=1028,No=1029,Oc=1030,Fo=1031,Oo=1033,Sr=33776,Er=33777,br=33778,wr=33779,Za=35840,Ka=35841,ja=35842,Ja=35843,Qa=36196,to=37492,eo=37496,no=37808,io=37809,so=37810,ro=37811,ao=37812,oo=37813,lo=37814,co=37815,ho=37816,uo=37817,fo=37818,po=37819,mo=37820,go=37821,Tr=36492,_o=36494,vo=36495,Bc=36283,xo=36284,Mo=36285,yo=36286,fu=3200,pu=3201,zc=0,mu=1,$n="",Oe="srgb",ti="srgb-linear",Bo="display-p3",Br="display-p3-linear",Pr="linear",me="srgb",Lr="rec709",Dr="p3",Ti=7680,al=519,gu=512,_u=513,vu=514,kc=515,xu=516,Mu=517,yu=518,Su=519,So=35044,ol="300 es",Un=2e3,Ir=2001;class xi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ll=1234567;const ws=Math.PI/180,Is=180/Math.PI;function bn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]).toLowerCase()}function Ce(i,t,e){return Math.max(t,Math.min(e,i))}function zo(i,t){return(i%t+t)%t}function Eu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function bu(i,t,e){return i!==t?(e-i)/(t-i):0}function Ts(i,t,e){return(1-e)*i+e*t}function wu(i,t,e,n){return Ts(i,t,1-Math.exp(-e*n))}function Tu(i,t=1){return t-Math.abs(zo(i,t*2)-t)}function Au(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ru(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Cu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Pu(i,t){return i+Math.random()*(t-i)}function Lu(i){return i*(.5-Math.random())}function Du(i){i!==void 0&&(ll=i);let t=ll+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Iu(i){return i*ws}function Uu(i){return i*Is}function Nu(i){return(i&i-1)===0&&i!==0}function Fu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ou(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Bu(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),h=r((t+n)/2),d=a((t+n)/2),p=r((t-n)/2),c=a((t-n)/2),u=r((n-t)/2),m=a((n-t)/2);switch(s){case"XYX":i.set(o*d,l*p,l*c,o*h);break;case"YZY":i.set(l*c,o*d,l*p,o*h);break;case"ZXZ":i.set(l*p,l*c,o*d,o*h);break;case"XZX":i.set(o*d,l*m,l*u,o*h);break;case"YXY":i.set(l*u,o*d,l*m,o*h);break;case"ZYZ":i.set(l*m,l*u,o*d,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ce(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Mn={DEG2RAD:ws,RAD2DEG:Is,generateUUID:bn,clamp:Ce,euclideanModulo:zo,mapLinear:Eu,inverseLerp:bu,lerp:Ts,damp:wu,pingpong:Tu,smoothstep:Au,smootherstep:Ru,randInt:Cu,randFloat:Pu,randFloatSpread:Lu,seededRandom:Du,degToRad:Iu,radToDeg:Uu,isPowerOfTwo:Nu,ceilPowerOfTwo:Fu,floorPowerOfTwo:Ou,setQuaternionFromProperEuler:Bu,normalize:ce,denormalize:fn};class _t{constructor(t=0,e=0){_t.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zt{constructor(t,e,n,s,r,a,o,l,h){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,h)}set(t,e,n,s,r,a,o,l,h){const d=this.elements;return d[0]=t,d[1]=s,d[2]=o,d[3]=e,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],h=n[1],d=n[4],p=n[7],c=n[2],u=n[5],m=n[8],M=s[0],f=s[3],g=s[6],A=s[1],b=s[4],w=s[7],q=s[2],N=s[5],D=s[8];return r[0]=a*M+o*A+l*q,r[3]=a*f+o*b+l*N,r[6]=a*g+o*w+l*D,r[1]=h*M+d*A+p*q,r[4]=h*f+d*b+p*N,r[7]=h*g+d*w+p*D,r[2]=c*M+u*A+m*q,r[5]=c*f+u*b+m*N,r[8]=c*g+u*w+m*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],d=t[8];return e*a*d-e*o*h-n*r*d+n*o*l+s*r*h-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],d=t[8],p=d*a-o*h,c=o*l-d*r,u=h*r-a*l,m=e*p+n*c+s*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/m;return t[0]=p*M,t[1]=(s*h-d*n)*M,t[2]=(o*n-s*a)*M,t[3]=c*M,t[4]=(d*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=u*M,t[7]=(n*l-h*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*a+h*o)+a+t,-s*h,s*l,-s*(-h*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Kr.makeScale(t,e)),this}rotate(t){return this.premultiply(Kr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Kr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Kr=new Zt;function Hc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zu(){const i=Ur("canvas");return i.style.display="block",i}const cl={};function Ar(i){i in cl||(cl[i]=!0,console.warn(i))}function ku(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Hu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Vu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const hl=new Zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ul=new Zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ds={[ti]:{transfer:Pr,primaries:Lr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Oe]:{transfer:me,primaries:Lr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Br]:{transfer:Pr,primaries:Dr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(ul),fromReference:i=>i.applyMatrix3(hl)},[Bo]:{transfer:me,primaries:Dr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(ul),fromReference:i=>i.applyMatrix3(hl).convertLinearToSRGB()}},Gu=new Set([ti,Br]),oe={enabled:!0,_workingColorSpace:ti,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Gu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=ds[t].toReference,s=ds[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return ds[i].primaries},getTransfer:function(i){return i===$n?Pr:ds[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(ds[t].luminanceCoefficients)}};function Ji(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function jr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ai;class Wu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ai===void 0&&(Ai=Ur("canvas")),Ai.width=t.width,Ai.height=t.height;const n=Ai.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ai}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ur("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ji(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ji(e[n]/255)*255):e[n]=Ji(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Xu=0;class Vc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=bn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Jr(s[a].image)):r.push(Jr(s[a]))}else r=Jr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Jr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yu=0;class Be extends xi{constructor(t=Be.DEFAULT_IMAGE,e=Be.DEFAULT_MAPPING,n=fi,s=fi,r=rn,a=pi,o=pn,l=Nn,h=Be.DEFAULT_ANISOTROPY,d=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=bn(),this.name="",this.source=new Vc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Jn:t.x=t.x-Math.floor(t.x);break;case fi:t.x=t.x<0?0:1;break;case $a:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Jn:t.y=t.y-Math.floor(t.y);break;case fi:t.y=t.y<0?0:1;break;case $a:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=Cc;Be.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,n=0,s=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,h=l[0],d=l[4],p=l[8],c=l[1],u=l[5],m=l[9],M=l[2],f=l[6],g=l[10];if(Math.abs(d-c)<.01&&Math.abs(p-M)<.01&&Math.abs(m-f)<.01){if(Math.abs(d+c)<.1&&Math.abs(p+M)<.1&&Math.abs(m+f)<.1&&Math.abs(h+u+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(h+1)/2,w=(u+1)/2,q=(g+1)/2,N=(d+c)/4,D=(p+M)/4,Y=(m+f)/4;return b>w&&b>q?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=N/n,r=D/n):w>q?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=N/s,r=Y/s):q<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(q),n=D/r,s=Y/r),this.set(n,s,r,e),this}let A=Math.sqrt((f-m)*(f-m)+(p-M)*(p-M)+(c-d)*(c-d));return Math.abs(A)<.001&&(A=1),this.x=(f-m)/A,this.y=(p-M)/A,this.z=(c-d)/A,this.w=Math.acos((h+u+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qu extends xi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Be(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Vc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _i extends qu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Gc extends Be{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class $u extends Be{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],h=n[s+1],d=n[s+2],p=n[s+3];const c=r[a+0],u=r[a+1],m=r[a+2],M=r[a+3];if(o===0){t[e+0]=l,t[e+1]=h,t[e+2]=d,t[e+3]=p;return}if(o===1){t[e+0]=c,t[e+1]=u,t[e+2]=m,t[e+3]=M;return}if(p!==M||l!==c||h!==u||d!==m){let f=1-o;const g=l*c+h*u+d*m+p*M,A=g>=0?1:-1,b=1-g*g;if(b>Number.EPSILON){const q=Math.sqrt(b),N=Math.atan2(q,g*A);f=Math.sin(f*N)/q,o=Math.sin(o*N)/q}const w=o*A;if(l=l*f+c*w,h=h*f+u*w,d=d*f+m*w,p=p*f+M*w,f===1-o){const q=1/Math.sqrt(l*l+h*h+d*d+p*p);l*=q,h*=q,d*=q,p*=q}}t[e]=l,t[e+1]=h,t[e+2]=d,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],h=n[s+2],d=n[s+3],p=r[a],c=r[a+1],u=r[a+2],m=r[a+3];return t[e]=o*m+d*p+l*u-h*c,t[e+1]=l*m+d*c+h*p-o*u,t[e+2]=h*m+d*u+o*c-l*p,t[e+3]=d*m-o*p-l*c-h*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,h=o(n/2),d=o(s/2),p=o(r/2),c=l(n/2),u=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=c*d*p+h*u*m,this._y=h*u*p-c*d*m,this._z=h*d*m+c*u*p,this._w=h*d*p-c*u*m;break;case"YXZ":this._x=c*d*p+h*u*m,this._y=h*u*p-c*d*m,this._z=h*d*m-c*u*p,this._w=h*d*p+c*u*m;break;case"ZXY":this._x=c*d*p-h*u*m,this._y=h*u*p+c*d*m,this._z=h*d*m+c*u*p,this._w=h*d*p-c*u*m;break;case"ZYX":this._x=c*d*p-h*u*m,this._y=h*u*p+c*d*m,this._z=h*d*m-c*u*p,this._w=h*d*p+c*u*m;break;case"YZX":this._x=c*d*p+h*u*m,this._y=h*u*p+c*d*m,this._z=h*d*m-c*u*p,this._w=h*d*p-c*u*m;break;case"XZY":this._x=c*d*p-h*u*m,this._y=h*u*p-c*d*m,this._z=h*d*m+c*u*p,this._w=h*d*p+c*u*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],h=e[2],d=e[6],p=e[10],c=n+o+p;if(c>0){const u=.5/Math.sqrt(c+1);this._w=.25/u,this._x=(d-l)*u,this._y=(r-h)*u,this._z=(a-s)*u}else if(n>o&&n>p){const u=2*Math.sqrt(1+n-o-p);this._w=(d-l)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+h)/u}else if(o>p){const u=2*Math.sqrt(1+o-n-p);this._w=(r-h)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(l+d)/u}else{const u=2*Math.sqrt(1+p-n-o);this._w=(a-s)/u,this._x=(r+h)/u,this._y=(l+d)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,h=e._z,d=e._w;return this._x=n*d+a*o+s*h-r*l,this._y=s*d+a*l+r*o-n*h,this._z=r*d+a*h+n*l-s*o,this._w=a*d-n*o-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const u=1-e;return this._w=u*a+e*this._w,this._x=u*n+e*this._x,this._y=u*s+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}const h=Math.sqrt(l),d=Math.atan2(h,o),p=Math.sin((1-e)*d)/h,c=Math.sin(e*d)/h;return this._w=a*p+this._w*c,this._x=n*p+this._x*c,this._y=s*p+this._y*c,this._z=r*p+this._z*c,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(dl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(dl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,h=2*(a*s-o*n),d=2*(o*e-r*s),p=2*(r*n-a*e);return this.x=e+l*h+a*p-o*d,this.y=n+l*d+o*h-r*p,this.z=s+l*p+r*d-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Qr.copy(this).projectOnVector(t),this.sub(Qr)}reflect(t){return this.sub(Qr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qr=new F,dl=new Fn;class Mi{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ln):ln.fromBufferAttribute(r,a),ln.applyMatrix4(t.matrixWorld),this.expandByPoint(ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xs.copy(n.boundingBox)),Xs.applyMatrix4(t.matrixWorld),this.union(Xs)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ln),ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fs),Ys.subVectors(this.max,fs),Ri.subVectors(t.a,fs),Ci.subVectors(t.b,fs),Pi.subVectors(t.c,fs),zn.subVectors(Ci,Ri),kn.subVectors(Pi,Ci),ii.subVectors(Ri,Pi);let e=[0,-zn.z,zn.y,0,-kn.z,kn.y,0,-ii.z,ii.y,zn.z,0,-zn.x,kn.z,0,-kn.x,ii.z,0,-ii.x,-zn.y,zn.x,0,-kn.y,kn.x,0,-ii.y,ii.x,0];return!ta(e,Ri,Ci,Pi,Ys)||(e=[1,0,0,0,1,0,0,0,1],!ta(e,Ri,Ci,Pi,Ys))?!1:(qs.crossVectors(zn,kn),e=[qs.x,qs.y,qs.z],ta(e,Ri,Ci,Pi,Ys))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Rn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Rn=[new F,new F,new F,new F,new F,new F,new F,new F],ln=new F,Xs=new Mi,Ri=new F,Ci=new F,Pi=new F,zn=new F,kn=new F,ii=new F,fs=new F,Ys=new F,qs=new F,si=new F;function ta(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){si.fromArray(i,r);const o=s.x*Math.abs(si.x)+s.y*Math.abs(si.y)+s.z*Math.abs(si.z),l=t.dot(si),h=e.dot(si),d=n.dot(si);if(Math.max(-Math.max(l,h,d),Math.min(l,h,d))>o)return!1}return!0}const Zu=new Mi,ps=new F,ea=new F;class Bs{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Zu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ps.subVectors(t,this.center);const e=ps.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ps,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ea.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ps.copy(t.center).add(ea)),this.expandByPoint(ps.copy(t.center).sub(ea))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Cn=new F,na=new F,$s=new F,Hn=new F,ia=new F,Zs=new F,sa=new F;class ko{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Cn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Cn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Cn.copy(this.origin).addScaledVector(this.direction,e),Cn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){na.copy(t).add(e).multiplyScalar(.5),$s.copy(e).sub(t).normalize(),Hn.copy(this.origin).sub(na);const r=t.distanceTo(e)*.5,a=-this.direction.dot($s),o=Hn.dot(this.direction),l=-Hn.dot($s),h=Hn.lengthSq(),d=Math.abs(1-a*a);let p,c,u,m;if(d>0)if(p=a*l-o,c=a*o-l,m=r*d,p>=0)if(c>=-m)if(c<=m){const M=1/d;p*=M,c*=M,u=p*(p+a*c+2*o)+c*(a*p+c+2*l)+h}else c=r,p=Math.max(0,-(a*c+o)),u=-p*p+c*(c+2*l)+h;else c=-r,p=Math.max(0,-(a*c+o)),u=-p*p+c*(c+2*l)+h;else c<=-m?(p=Math.max(0,-(-a*r+o)),c=p>0?-r:Math.min(Math.max(-r,-l),r),u=-p*p+c*(c+2*l)+h):c<=m?(p=0,c=Math.min(Math.max(-r,-l),r),u=c*(c+2*l)+h):(p=Math.max(0,-(a*r+o)),c=p>0?r:Math.min(Math.max(-r,-l),r),u=-p*p+c*(c+2*l)+h);else c=a>0?-r:r,p=Math.max(0,-(a*c+o)),u=-p*p+c*(c+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(na).addScaledVector($s,c),u}intersectSphere(t,e){Cn.subVectors(t.center,this.origin);const n=Cn.dot(this.direction),s=Cn.dot(Cn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const h=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,c=this.origin;return h>=0?(n=(t.min.x-c.x)*h,s=(t.max.x-c.x)*h):(n=(t.max.x-c.x)*h,s=(t.min.x-c.x)*h),d>=0?(r=(t.min.y-c.y)*d,a=(t.max.y-c.y)*d):(r=(t.max.y-c.y)*d,a=(t.min.y-c.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-c.z)*p,l=(t.max.z-c.z)*p):(o=(t.max.z-c.z)*p,l=(t.min.z-c.z)*p),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Cn)!==null}intersectTriangle(t,e,n,s,r){ia.subVectors(e,t),Zs.subVectors(n,t),sa.crossVectors(ia,Zs);let a=this.direction.dot(sa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hn.subVectors(this.origin,t);const l=o*this.direction.dot(Zs.crossVectors(Hn,Zs));if(l<0)return null;const h=o*this.direction.dot(ia.cross(Hn));if(h<0||l+h>a)return null;const d=-o*Hn.dot(sa);return d<0?null:this.at(d/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class re{constructor(t,e,n,s,r,a,o,l,h,d,p,c,u,m,M,f){re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,h,d,p,c,u,m,M,f)}set(t,e,n,s,r,a,o,l,h,d,p,c,u,m,M,f){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=h,g[6]=d,g[10]=p,g[14]=c,g[3]=u,g[7]=m,g[11]=M,g[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Li.setFromMatrixColumn(t,0).length(),r=1/Li.setFromMatrixColumn(t,1).length(),a=1/Li.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),h=Math.sin(s),d=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){const c=a*d,u=a*p,m=o*d,M=o*p;e[0]=l*d,e[4]=-l*p,e[8]=h,e[1]=u+m*h,e[5]=c-M*h,e[9]=-o*l,e[2]=M-c*h,e[6]=m+u*h,e[10]=a*l}else if(t.order==="YXZ"){const c=l*d,u=l*p,m=h*d,M=h*p;e[0]=c+M*o,e[4]=m*o-u,e[8]=a*h,e[1]=a*p,e[5]=a*d,e[9]=-o,e[2]=u*o-m,e[6]=M+c*o,e[10]=a*l}else if(t.order==="ZXY"){const c=l*d,u=l*p,m=h*d,M=h*p;e[0]=c-M*o,e[4]=-a*p,e[8]=m+u*o,e[1]=u+m*o,e[5]=a*d,e[9]=M-c*o,e[2]=-a*h,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const c=a*d,u=a*p,m=o*d,M=o*p;e[0]=l*d,e[4]=m*h-u,e[8]=c*h+M,e[1]=l*p,e[5]=M*h+c,e[9]=u*h-m,e[2]=-h,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const c=a*l,u=a*h,m=o*l,M=o*h;e[0]=l*d,e[4]=M-c*p,e[8]=m*p+u,e[1]=p,e[5]=a*d,e[9]=-o*d,e[2]=-h*d,e[6]=u*p+m,e[10]=c-M*p}else if(t.order==="XZY"){const c=a*l,u=a*h,m=o*l,M=o*h;e[0]=l*d,e[4]=-p,e[8]=h*d,e[1]=c*p+M,e[5]=a*d,e[9]=u*p-m,e[2]=m*p-u,e[6]=o*d,e[10]=M*p+c}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ku,t,ju)}lookAt(t,e,n){const s=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),Vn.crossVectors(n,Ze),Vn.lengthSq()===0&&(Math.abs(n.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),Vn.crossVectors(n,Ze)),Vn.normalize(),Ks.crossVectors(Ze,Vn),s[0]=Vn.x,s[4]=Ks.x,s[8]=Ze.x,s[1]=Vn.y,s[5]=Ks.y,s[9]=Ze.y,s[2]=Vn.z,s[6]=Ks.z,s[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],h=n[12],d=n[1],p=n[5],c=n[9],u=n[13],m=n[2],M=n[6],f=n[10],g=n[14],A=n[3],b=n[7],w=n[11],q=n[15],N=s[0],D=s[4],Y=s[8],Q=s[12],v=s[1],S=s[5],X=s[9],I=s[13],H=s[2],O=s[6],_=s[10],y=s[14],x=s[3],C=s[7],L=s[11],P=s[15];return r[0]=a*N+o*v+l*H+h*x,r[4]=a*D+o*S+l*O+h*C,r[8]=a*Y+o*X+l*_+h*L,r[12]=a*Q+o*I+l*y+h*P,r[1]=d*N+p*v+c*H+u*x,r[5]=d*D+p*S+c*O+u*C,r[9]=d*Y+p*X+c*_+u*L,r[13]=d*Q+p*I+c*y+u*P,r[2]=m*N+M*v+f*H+g*x,r[6]=m*D+M*S+f*O+g*C,r[10]=m*Y+M*X+f*_+g*L,r[14]=m*Q+M*I+f*y+g*P,r[3]=A*N+b*v+w*H+q*x,r[7]=A*D+b*S+w*O+q*C,r[11]=A*Y+b*X+w*_+q*L,r[15]=A*Q+b*I+w*y+q*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],h=t[13],d=t[2],p=t[6],c=t[10],u=t[14],m=t[3],M=t[7],f=t[11],g=t[15];return m*(+r*l*p-s*h*p-r*o*c+n*h*c+s*o*u-n*l*u)+M*(+e*l*u-e*h*c+r*a*c-s*a*u+s*h*d-r*l*d)+f*(+e*h*p-e*o*u-r*a*p+n*a*u+r*o*d-n*h*d)+g*(-s*o*d-e*l*p+e*o*c+s*a*p-n*a*c+n*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],d=t[8],p=t[9],c=t[10],u=t[11],m=t[12],M=t[13],f=t[14],g=t[15],A=p*f*h-M*c*h+M*l*u-o*f*u-p*l*g+o*c*g,b=m*c*h-d*f*h-m*l*u+a*f*u+d*l*g-a*c*g,w=d*M*h-m*p*h+m*o*u-a*M*u-d*o*g+a*p*g,q=m*p*l-d*M*l-m*o*c+a*M*c+d*o*f-a*p*f,N=e*A+n*b+s*w+r*q;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/N;return t[0]=A*D,t[1]=(M*c*r-p*f*r-M*s*u+n*f*u+p*s*g-n*c*g)*D,t[2]=(o*f*r-M*l*r+M*s*h-n*f*h-o*s*g+n*l*g)*D,t[3]=(p*l*r-o*c*r-p*s*h+n*c*h+o*s*u-n*l*u)*D,t[4]=b*D,t[5]=(d*f*r-m*c*r+m*s*u-e*f*u-d*s*g+e*c*g)*D,t[6]=(m*l*r-a*f*r-m*s*h+e*f*h+a*s*g-e*l*g)*D,t[7]=(a*c*r-d*l*r+d*s*h-e*c*h-a*s*u+e*l*u)*D,t[8]=w*D,t[9]=(m*p*r-d*M*r-m*n*u+e*M*u+d*n*g-e*p*g)*D,t[10]=(a*M*r-m*o*r+m*n*h-e*M*h-a*n*g+e*o*g)*D,t[11]=(d*o*r-a*p*r-d*n*h+e*p*h+a*n*u-e*o*u)*D,t[12]=q*D,t[13]=(d*M*s-m*p*s+m*n*c-e*M*c-d*n*f+e*p*f)*D,t[14]=(m*o*s-a*M*s-m*n*l+e*M*l+a*n*f-e*o*f)*D,t[15]=(a*p*s-d*o*s+d*n*l-e*p*l-a*n*c+e*o*c)*D,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,h=r*a,d=r*o;return this.set(h*a+n,h*o-s*l,h*l+s*o,0,h*o+s*l,d*o+n,d*l-s*a,0,h*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,h=r+r,d=a+a,p=o+o,c=r*h,u=r*d,m=r*p,M=a*d,f=a*p,g=o*p,A=l*h,b=l*d,w=l*p,q=n.x,N=n.y,D=n.z;return s[0]=(1-(M+g))*q,s[1]=(u+w)*q,s[2]=(m-b)*q,s[3]=0,s[4]=(u-w)*N,s[5]=(1-(c+g))*N,s[6]=(f+A)*N,s[7]=0,s[8]=(m+b)*D,s[9]=(f-A)*D,s[10]=(1-(c+M))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Li.set(s[0],s[1],s[2]).length();const a=Li.set(s[4],s[5],s[6]).length(),o=Li.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],cn.copy(this);const h=1/r,d=1/a,p=1/o;return cn.elements[0]*=h,cn.elements[1]*=h,cn.elements[2]*=h,cn.elements[4]*=d,cn.elements[5]*=d,cn.elements[6]*=d,cn.elements[8]*=p,cn.elements[9]*=p,cn.elements[10]*=p,e.setFromRotationMatrix(cn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Un){const l=this.elements,h=2*r/(e-t),d=2*r/(n-s),p=(e+t)/(e-t),c=(n+s)/(n-s);let u,m;if(o===Un)u=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Ir)u=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=c,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Un){const l=this.elements,h=1/(e-t),d=1/(n-s),p=1/(a-r),c=(e+t)*h,u=(n+s)*d;let m,M;if(o===Un)m=(a+r)*p,M=-2*p;else if(o===Ir)m=r*p,M=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-c,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=M,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Li=new F,cn=new re,Ku=new F(0,0,0),ju=new F(1,1,1),Vn=new F,Ks=new F,Ze=new F,fl=new re,pl=new Fn;class on{constructor(t=0,e=0,n=0,s=on.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],h=s[5],d=s[9],p=s[2],c=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(c,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-p,u),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ce(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(c,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(c,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return fl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pl.setFromEuler(this),this.setFromQuaternion(pl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}on.DEFAULT_ORDER="XYZ";class Ho{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ju=0;const ml=new F,Di=new Fn,Pn=new re,js=new F,ms=new F,Qu=new F,td=new Fn,gl=new F(1,0,0),_l=new F(0,1,0),vl=new F(0,0,1),xl={type:"added"},ed={type:"removed"},Ii={type:"childadded",child:null},ra={type:"childremoved",child:null};class Pe extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pe.DEFAULT_UP.clone();const t=new F,e=new on,n=new Fn,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new Zt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=Pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ho,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Di.setFromAxisAngle(t,e),this.quaternion.multiply(Di),this}rotateOnWorldAxis(t,e){return Di.setFromAxisAngle(t,e),this.quaternion.premultiply(Di),this}rotateX(t){return this.rotateOnAxis(gl,t)}rotateY(t){return this.rotateOnAxis(_l,t)}rotateZ(t){return this.rotateOnAxis(vl,t)}translateOnAxis(t,e){return ml.copy(t).applyQuaternion(this.quaternion),this.position.add(ml.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gl,t)}translateY(t){return this.translateOnAxis(_l,t)}translateZ(t){return this.translateOnAxis(vl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?js.copy(t):js.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(ms,js,this.up):Pn.lookAt(js,ms,this.up),this.quaternion.setFromRotationMatrix(Pn),s&&(Pn.extractRotation(s.matrixWorld),Di.setFromRotationMatrix(Pn),this.quaternion.premultiply(Di.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xl),Ii.child=t,this.dispatchEvent(Ii),Ii.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ed),ra.child=t,this.dispatchEvent(ra),ra.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xl),Ii.child=t,this.dispatchEvent(Ii),Ii.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,t,Qu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,td,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let h=0,d=l.length;h<d;h++){const p=l[h];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),h=a(t.textures),d=a(t.images),p=a(t.shapes),c=a(t.skeletons),u=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),c.length>0&&(n.skeletons=c),u.length>0&&(n.animations=u),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const l=[];for(const h in o){const d=o[h];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Pe.DEFAULT_UP=new F(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new F,Ln=new F,aa=new F,Dn=new F,Ui=new F,Ni=new F,Ml=new F,oa=new F,la=new F,ca=new F,ha=new fe,ua=new fe,da=new fe;class an{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),hn.subVectors(t,e),s.cross(hn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){hn.subVectors(s,e),Ln.subVectors(n,e),aa.subVectors(t,e);const a=hn.dot(hn),o=hn.dot(Ln),l=hn.dot(aa),h=Ln.dot(Ln),d=Ln.dot(aa),p=a*h-o*o;if(p===0)return r.set(0,0,0),null;const c=1/p,u=(h*l-o*d)*c,m=(a*d-o*l)*c;return r.set(1-u-m,m,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Dn.x),l.addScaledVector(a,Dn.y),l.addScaledVector(o,Dn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return ha.setScalar(0),ua.setScalar(0),da.setScalar(0),ha.fromBufferAttribute(t,e),ua.fromBufferAttribute(t,n),da.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ha,r.x),a.addScaledVector(ua,r.y),a.addScaledVector(da,r.z),a}static isFrontFacing(t,e,n,s){return hn.subVectors(n,e),Ln.subVectors(t,e),hn.cross(Ln).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),hn.cross(Ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return an.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return an.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return an.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return an.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return an.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Ui.subVectors(s,n),Ni.subVectors(r,n),oa.subVectors(t,n);const l=Ui.dot(oa),h=Ni.dot(oa);if(l<=0&&h<=0)return e.copy(n);la.subVectors(t,s);const d=Ui.dot(la),p=Ni.dot(la);if(d>=0&&p<=d)return e.copy(s);const c=l*p-d*h;if(c<=0&&l>=0&&d<=0)return a=l/(l-d),e.copy(n).addScaledVector(Ui,a);ca.subVectors(t,r);const u=Ui.dot(ca),m=Ni.dot(ca);if(m>=0&&u<=m)return e.copy(r);const M=u*h-l*m;if(M<=0&&h>=0&&m<=0)return o=h/(h-m),e.copy(n).addScaledVector(Ni,o);const f=d*m-u*p;if(f<=0&&p-d>=0&&u-m>=0)return Ml.subVectors(r,s),o=(p-d)/(p-d+(u-m)),e.copy(s).addScaledVector(Ml,o);const g=1/(f+M+c);return a=M*g,o=c*g,e.copy(n).addScaledVector(Ui,a).addScaledVector(Ni,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Wc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},Js={h:0,s:0,l:0};function fa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=zo(t,1),e=Ce(e,0,1),n=Ce(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=fa(a,r,t+1/3),this.g=fa(a,r,t),this.b=fa(a,r,t-1/3)}return oe.toWorkingColorSpace(this,s),this}setStyle(t,e=Oe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){const n=Wc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ji(t.r),this.g=Ji(t.g),this.b=Ji(t.b),this}copyLinearToSRGB(t){return this.r=jr(t.r),this.g=jr(t.g),this.b=jr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return oe.fromWorkingColorSpace(Ne.copy(this),t),Math.round(Ce(Ne.r*255,0,255))*65536+Math.round(Ce(Ne.g*255,0,255))*256+Math.round(Ce(Ne.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(Ne.copy(this),e);const n=Ne.r,s=Ne.g,r=Ne.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,h;const d=(o+a)/2;if(o===a)l=0,h=0;else{const p=a-o;switch(h=d<=.5?p/(a+o):p/(2-a-o),a){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=h,t.l=d,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=Oe){oe.fromWorkingColorSpace(Ne.copy(this),t);const e=Ne.r,n=Ne.g,s=Ne.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Gn),this.setHSL(Gn.h+t,Gn.s+e,Gn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Gn),t.getHSL(Js);const n=Ts(Gn.h,Js.h,e),s=Ts(Gn.s,Js.s,e),r=Ts(Gn.l,Js.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new Gt;Gt.NAMES=Wc;let nd=0;class rs extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=bn(),this.name="",this.type="Material",this.blending=mi,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oa,this.blendDst=Ba,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=al,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ti,this.stencilZFail=Ti,this.stencilZPass=Ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mi&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Oa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ba&&(n.blendDst=this.blendDst),this.blendEquation!==hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==al&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class mn extends rs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=Ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ye=new F,Qs=new _t;class Qe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=So,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qs.fromBufferAttribute(this,e),Qs.applyMatrix3(t),this.setXY(e,Qs.x,Qs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ce(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array),r=ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==So&&(t.usage=this.usage),t}}class Xc extends Qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Yc extends Qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Se extends Qe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let id=0;const nn=new re,pa=new Pe,Fi=new F,Ke=new Mi,gs=new Mi,Re=new F;class qe extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=bn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hc(t)?Yc:Xc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,n){return nn.makeTranslation(t,e,n),this.applyMatrix4(nn),this}scale(t,e,n){return nn.makeScale(t,e,n),this.applyMatrix4(nn),this}lookAt(t){return pa.lookAt(t),pa.updateMatrix(),this.applyMatrix4(pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Se(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ke.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];gs.setFromBufferAttribute(o),this.morphTargetsRelative?(Re.addVectors(Ke.min,gs.min),Ke.expandByPoint(Re),Re.addVectors(Ke.max,gs.max),Ke.expandByPoint(Re)):(Ke.expandByPoint(gs.min),Ke.expandByPoint(gs.max))}Ke.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Re.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Re));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let h=0,d=o.count;h<d;h++)Re.fromBufferAttribute(o,h),l&&(Fi.fromBufferAttribute(t,h),Re.add(Fi)),s=Math.max(s,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let Y=0;Y<n.count;Y++)o[Y]=new F,l[Y]=new F;const h=new F,d=new F,p=new F,c=new _t,u=new _t,m=new _t,M=new F,f=new F;function g(Y,Q,v){h.fromBufferAttribute(n,Y),d.fromBufferAttribute(n,Q),p.fromBufferAttribute(n,v),c.fromBufferAttribute(r,Y),u.fromBufferAttribute(r,Q),m.fromBufferAttribute(r,v),d.sub(h),p.sub(h),u.sub(c),m.sub(c);const S=1/(u.x*m.y-m.x*u.y);isFinite(S)&&(M.copy(d).multiplyScalar(m.y).addScaledVector(p,-u.y).multiplyScalar(S),f.copy(p).multiplyScalar(u.x).addScaledVector(d,-m.x).multiplyScalar(S),o[Y].add(M),o[Q].add(M),o[v].add(M),l[Y].add(f),l[Q].add(f),l[v].add(f))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let Y=0,Q=A.length;Y<Q;++Y){const v=A[Y],S=v.start,X=v.count;for(let I=S,H=S+X;I<H;I+=3)g(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const b=new F,w=new F,q=new F,N=new F;function D(Y){q.fromBufferAttribute(s,Y),N.copy(q);const Q=o[Y];b.copy(Q),b.sub(q.multiplyScalar(q.dot(Q))).normalize(),w.crossVectors(N,Q);const S=w.dot(l[Y])<0?-1:1;a.setXYZW(Y,b.x,b.y,b.z,S)}for(let Y=0,Q=A.length;Y<Q;++Y){const v=A[Y],S=v.start,X=v.count;for(let I=S,H=S+X;I<H;I+=3)D(t.getX(I+0)),D(t.getX(I+1)),D(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let c=0,u=n.count;c<u;c++)n.setXYZ(c,0,0,0);const s=new F,r=new F,a=new F,o=new F,l=new F,h=new F,d=new F,p=new F;if(t)for(let c=0,u=t.count;c<u;c+=3){const m=t.getX(c+0),M=t.getX(c+1),f=t.getX(c+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,f),d.subVectors(a,r),p.subVectors(s,r),d.cross(p),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,M),h.fromBufferAttribute(n,f),o.add(d),l.add(d),h.add(d),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(f,h.x,h.y,h.z)}else for(let c=0,u=e.count;c<u;c+=3)s.fromBufferAttribute(e,c+0),r.fromBufferAttribute(e,c+1),a.fromBufferAttribute(e,c+2),d.subVectors(a,r),p.subVectors(s,r),d.cross(p),n.setXYZ(c+0,d.x,d.y,d.z),n.setXYZ(c+1,d.x,d.y,d.z),n.setXYZ(c+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(o,l){const h=o.array,d=o.itemSize,p=o.normalized,c=new h.constructor(l.length*d);let u=0,m=0;for(let M=0,f=l.length;M<f;M++){o.isInterleavedBufferAttribute?u=l[M]*o.data.stride+o.offset:u=l[M]*d;for(let g=0;g<d;g++)c[m++]=h[u++]}return new Qe(c,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new qe,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],h=t(l,n);e.setAttribute(o,h)}const r=this.morphAttributes;for(const o in r){const l=[],h=r[o];for(let d=0,p=h.length;d<p;d++){const c=h[d],u=t(c,n);l.push(u)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const h=n[l];t.data.attributes[l]=h.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],d=[];for(let p=0,c=h.length;p<c;p++){const u=h[p];d.push(u.toJSON(t.data))}d.length>0&&(s[l]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const h in s){const d=s[h];this.setAttribute(h,d.clone(e))}const r=t.morphAttributes;for(const h in r){const d=[],p=r[h];for(let c=0,u=p.length;c<u;c++)d.push(p[c].clone(e));this.morphAttributes[h]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let h=0,d=a.length;h<d;h++){const p=a[h];this.addGroup(p.start,p.count,p.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yl=new re,ri=new ko,tr=new Bs,Sl=new F,er=new F,nr=new F,ir=new F,ma=new F,sr=new F,El=new F,rr=new F;class Vt extends Pe{constructor(t=new qe,e=new mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){sr.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const d=o[l],p=r[l];d!==0&&(ma.fromBufferAttribute(p,t),a?sr.addScaledVector(ma,d):sr.addScaledVector(ma.sub(e),d))}e.add(sr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(r),ri.copy(t.ray).recast(t.near),!(tr.containsPoint(ri.origin)===!1&&(ri.intersectSphere(tr,Sl)===null||ri.origin.distanceToSquared(Sl)>(t.far-t.near)**2))&&(yl.copy(r).invert(),ri.copy(t.ray).applyMatrix4(yl),!(n.boundingBox!==null&&ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ri)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,d=r.attributes.uv1,p=r.attributes.normal,c=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,M=c.length;m<M;m++){const f=c[m],g=a[f.materialIndex],A=Math.max(f.start,u.start),b=Math.min(o.count,Math.min(f.start+f.count,u.start+u.count));for(let w=A,q=b;w<q;w+=3){const N=o.getX(w),D=o.getX(w+1),Y=o.getX(w+2);s=ar(this,g,t,n,h,d,p,N,D,Y),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const m=Math.max(0,u.start),M=Math.min(o.count,u.start+u.count);for(let f=m,g=M;f<g;f+=3){const A=o.getX(f),b=o.getX(f+1),w=o.getX(f+2);s=ar(this,a,t,n,h,d,p,A,b,w),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,M=c.length;m<M;m++){const f=c[m],g=a[f.materialIndex],A=Math.max(f.start,u.start),b=Math.min(l.count,Math.min(f.start+f.count,u.start+u.count));for(let w=A,q=b;w<q;w+=3){const N=w,D=w+1,Y=w+2;s=ar(this,g,t,n,h,d,p,N,D,Y),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const m=Math.max(0,u.start),M=Math.min(l.count,u.start+u.count);for(let f=m,g=M;f<g;f+=3){const A=f,b=f+1,w=f+2;s=ar(this,a,t,n,h,d,p,A,b,w),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}}function sd(i,t,e,n,s,r,a,o){let l;if(t.side===We?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===jn,o),l===null)return null;rr.copy(o),rr.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(rr);return h<e.near||h>e.far?null:{distance:h,point:rr.clone(),object:i}}function ar(i,t,e,n,s,r,a,o,l,h){i.getVertexPosition(o,er),i.getVertexPosition(l,nr),i.getVertexPosition(h,ir);const d=sd(i,t,e,n,er,nr,ir,El);if(d){const p=new F;an.getBarycoord(El,er,nr,ir,p),s&&(d.uv=an.getInterpolatedAttribute(s,o,l,h,p,new _t)),r&&(d.uv1=an.getInterpolatedAttribute(r,o,l,h,p,new _t)),a&&(d.normal=an.getInterpolatedAttribute(a,o,l,h,p,new F),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const c={a:o,b:l,c:h,normal:new F,materialIndex:0};an.getNormal(er,nr,ir,c.normal),d.face=c,d.barycoord=p}return d}class xe extends qe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],h=[],d=[],p=[];let c=0,u=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Se(h,3)),this.setAttribute("normal",new Se(d,3)),this.setAttribute("uv",new Se(p,2));function m(M,f,g,A,b,w,q,N,D,Y,Q){const v=w/D,S=q/Y,X=w/2,I=q/2,H=N/2,O=D+1,_=Y+1;let y=0,x=0;const C=new F;for(let L=0;L<_;L++){const P=L*S-I;for(let tt=0;tt<O;tt++){const $=tt*v-X;C[M]=$*A,C[f]=P*b,C[g]=H,h.push(C.x,C.y,C.z),C[M]=0,C[f]=0,C[g]=N>0?1:-1,d.push(C.x,C.y,C.z),p.push(tt/D),p.push(1-L/Y),y+=1}}for(let L=0;L<Y;L++)for(let P=0;P<D;P++){const tt=c+P+O*L,$=c+P+O*(L+1),z=c+(P+1)+O*(L+1),Z=c+(P+1)+O*L;l.push(tt,$,Z),l.push($,z,Z),x+=6}o.addGroup(u,x,Q),u+=x,c+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ss(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function He(i){const t={};for(let e=0;e<i.length;e++){const n=ss(i[e]);for(const s in n)t[s]=n[s]}return t}function rd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function qc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const ad={clone:ss,merge:He};var od=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ld=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qn extends rs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=od,this.fragmentShader=ld,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ss(t.uniforms),this.uniformsGroups=rd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class $c extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=Un}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wn=new F,bl=new _t,wl=new _t;class Je extends $c{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Is*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ws*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Is*2*Math.atan(Math.tan(ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z)}getViewSize(t,e){return this.getViewBounds(t,bl,wl),e.subVectors(wl,bl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ws*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/h,s*=a.width/l,n*=a.height/h}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Oi=-90,Bi=1;class cd extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Je(Oi,Bi,t,e);s.layers=this.layers,this.add(s);const r=new Je(Oi,Bi,t,e);r.layers=this.layers,this.add(r);const a=new Je(Oi,Bi,t,e);a.layers=this.layers,this.add(a);const o=new Je(Oi,Bi,t,e);o.layers=this.layers,this.add(o);const l=new Je(Oi,Bi,t,e);l.layers=this.layers,this.add(l);const h=new Je(Oi,Bi,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const h of e)this.remove(h);if(t===Un)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ir)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,h,d]=this.children,p=t.getRenderTarget(),c=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),t.render(e,d),t.setRenderTarget(p,c,u),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Zc extends Be{constructor(t,e,n,s,r,a,o,l,h,d){t=t!==void 0?t:[],e=e!==void 0?e:ts,super(t,e,n,s,r,a,o,l,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class hd extends _i{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Zc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:rn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new xe(5,5,5),r=new Qn({name:"CubemapFromEquirect",uniforms:ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:Zn});r.uniforms.tEquirect.value=e;const a=new Vt(s,r),o=e.minFilter;return e.minFilter===pi&&(e.minFilter=rn),new cd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const ga=new F,ud=new F,dd=new Zt;class Yn{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ga.subVectors(n,e).cross(ud.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ga),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||dd.getNormalMatrix(t),s=this.coplanarPoint(ga).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ai=new Bs,or=new F;class Vo{constructor(t=new Yn,e=new Yn,n=new Yn,s=new Yn,r=new Yn,a=new Yn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Un){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],h=s[4],d=s[5],p=s[6],c=s[7],u=s[8],m=s[9],M=s[10],f=s[11],g=s[12],A=s[13],b=s[14],w=s[15];if(n[0].setComponents(l-r,c-h,f-u,w-g).normalize(),n[1].setComponents(l+r,c+h,f+u,w+g).normalize(),n[2].setComponents(l+a,c+d,f+m,w+A).normalize(),n[3].setComponents(l-a,c-d,f-m,w-A).normalize(),n[4].setComponents(l-o,c-p,f-M,w-b).normalize(),e===Un)n[5].setComponents(l+o,c+p,f+M,w+b).normalize();else if(e===Ir)n[5].setComponents(o,p,M,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(t){return ai.center.set(0,0,0),ai.radius=.7071067811865476,ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(or.x=s.normal.x>0?t.max.x:t.min.x,or.y=s.normal.y>0?t.max.y:t.min.y,or.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(or)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function fd(i){const t=new WeakMap;function e(o,l){const h=o.array,d=o.usage,p=h.byteLength,c=i.createBuffer();i.bindBuffer(l,c),i.bufferData(l,h,d),o.onUploadCallback();let u;if(h instanceof Float32Array)u=i.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)u=i.SHORT;else if(h instanceof Uint32Array)u=i.UNSIGNED_INT;else if(h instanceof Int32Array)u=i.INT;else if(h instanceof Int8Array)u=i.BYTE;else if(h instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:c,type:u,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,h){const d=l.array,p=l.updateRanges;if(i.bindBuffer(h,o),p.length===0)i.bufferSubData(h,0,d);else{p.sort((u,m)=>u.start-m.start);let c=0;for(let u=1;u<p.length;u++){const m=p[c],M=p[u];M.start<=m.start+m.count+1?m.count=Math.max(m.count,M.start+M.count-m.start):(++c,p[c]=M)}p.length=c+1;for(let u=0,m=p.length;u<m;u++){const M=p[u];i.bufferSubData(h,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=t.get(o);if(h===void 0)t.set(o,e(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,l),h.version=o.version}}return{get:s,remove:r,update:a}}class En extends qe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),h=o+1,d=l+1,p=t/o,c=e/l,u=[],m=[],M=[],f=[];for(let g=0;g<d;g++){const A=g*c-a;for(let b=0;b<h;b++){const w=b*p-r;m.push(w,-A,0),M.push(0,0,1),f.push(b/o),f.push(1-g/l)}}for(let g=0;g<l;g++)for(let A=0;A<o;A++){const b=A+h*g,w=A+h*(g+1),q=A+1+h*(g+1),N=A+1+h*g;u.push(b,w,N),u.push(w,q,N)}this.setIndex(u),this.setAttribute("position",new Se(m,3)),this.setAttribute("normal",new Se(M,3)),this.setAttribute("uv",new Se(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new En(t.width,t.height,t.widthSegments,t.heightSegments)}}var pd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,md=`#ifdef USE_ALPHAHASH
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
#endif`,gd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_d=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Md=`#ifdef USE_AOMAP
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
#endif`,yd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sd=`#ifdef USE_BATCHING
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
#endif`,Ed=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Td=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ad=`#ifdef USE_IRIDESCENCE
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
#endif`,Rd=`#ifdef USE_BUMPMAP
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
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Od=`#define PI 3.141592653589793
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
} // validated`,Bd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zd=`vec3 transformedNormal = objectNormal;
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
#endif`,kd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xd=`
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
}`,Yd=`#ifdef USE_ENVMAP
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
#endif`,qd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$d=`#ifdef USE_ENVMAP
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
#endif`,Zd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kd=`#ifdef USE_ENVMAP
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
#endif`,jd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ef=`#ifdef USE_GRADIENTMAP
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
}`,nf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,af=`uniform bool receiveShadow;
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
#endif`,of=`#ifdef USE_ENVMAP
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
#endif`,lf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,df=`PhysicalMaterial material;
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
#endif`,ff=`struct PhysicalMaterial {
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
}`,pf=`
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
#endif`,mf=`#if defined( RE_IndirectDiffuse )
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
#endif`,gf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_f=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ef=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bf=`#if defined( USE_POINTS_UV )
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
#endif`,wf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Af=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pf=`#ifdef USE_MORPHTARGETS
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
#endif`,Lf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Df=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,If=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Uf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ff=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Of=`#ifdef USE_NORMALMAP
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
#endif`,Bf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$f=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qf=`float getShadowMask() {
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
}`,tp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ep=`#ifdef USE_SKINNING
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
#endif`,np=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ip=`#ifdef USE_SKINNING
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
#endif`,sp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ap=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,op=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lp=`#ifdef USE_TRANSMISSION
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
#endif`,cp=`#ifdef USE_TRANSMISSION
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
#endif`,hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mp=`uniform sampler2D t2D;
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
}`,gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_p=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mp=`#include <common>
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
}`,yp=`#if DEPTH_PACKING == 3200
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
}`,Sp=`#define DISTANCE
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
}`,Ep=`#define DISTANCE
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
}`,bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tp=`uniform float scale;
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
}`,Ap=`uniform vec3 diffuse;
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
}`,Rp=`#include <common>
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
}`,Cp=`uniform vec3 diffuse;
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
}`,Pp=`#define LAMBERT
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
}`,Lp=`#define LAMBERT
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
}`,Dp=`#define MATCAP
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
}`,Ip=`#define MATCAP
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
}`,Up=`#define NORMAL
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
}`,Np=`#define NORMAL
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
}`,Fp=`#define PHONG
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
}`,Op=`#define PHONG
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
}`,Bp=`#define STANDARD
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
}`,zp=`#define STANDARD
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
}`,kp=`#define TOON
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
}`,Hp=`#define TOON
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
}`,Vp=`uniform float size;
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
}`,Gp=`uniform vec3 diffuse;
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
}`,Wp=`#include <common>
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
}`,Xp=`uniform vec3 color;
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
}`,Yp=`uniform float rotation;
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
}`,qp=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:pd,alphahash_pars_fragment:md,alphamap_fragment:gd,alphamap_pars_fragment:_d,alphatest_fragment:vd,alphatest_pars_fragment:xd,aomap_fragment:Md,aomap_pars_fragment:yd,batching_pars_vertex:Sd,batching_vertex:Ed,begin_vertex:bd,beginnormal_vertex:wd,bsdfs:Td,iridescence_fragment:Ad,bumpmap_pars_fragment:Rd,clipping_planes_fragment:Cd,clipping_planes_pars_fragment:Pd,clipping_planes_pars_vertex:Ld,clipping_planes_vertex:Dd,color_fragment:Id,color_pars_fragment:Ud,color_pars_vertex:Nd,color_vertex:Fd,common:Od,cube_uv_reflection_fragment:Bd,defaultnormal_vertex:zd,displacementmap_pars_vertex:kd,displacementmap_vertex:Hd,emissivemap_fragment:Vd,emissivemap_pars_fragment:Gd,colorspace_fragment:Wd,colorspace_pars_fragment:Xd,envmap_fragment:Yd,envmap_common_pars_fragment:qd,envmap_pars_fragment:$d,envmap_pars_vertex:Zd,envmap_physical_pars_fragment:of,envmap_vertex:Kd,fog_vertex:jd,fog_pars_vertex:Jd,fog_fragment:Qd,fog_pars_fragment:tf,gradientmap_pars_fragment:ef,lightmap_pars_fragment:nf,lights_lambert_fragment:sf,lights_lambert_pars_fragment:rf,lights_pars_begin:af,lights_toon_fragment:lf,lights_toon_pars_fragment:cf,lights_phong_fragment:hf,lights_phong_pars_fragment:uf,lights_physical_fragment:df,lights_physical_pars_fragment:ff,lights_fragment_begin:pf,lights_fragment_maps:mf,lights_fragment_end:gf,logdepthbuf_fragment:_f,logdepthbuf_pars_fragment:vf,logdepthbuf_pars_vertex:xf,logdepthbuf_vertex:Mf,map_fragment:yf,map_pars_fragment:Sf,map_particle_fragment:Ef,map_particle_pars_fragment:bf,metalnessmap_fragment:wf,metalnessmap_pars_fragment:Tf,morphinstance_vertex:Af,morphcolor_vertex:Rf,morphnormal_vertex:Cf,morphtarget_pars_vertex:Pf,morphtarget_vertex:Lf,normal_fragment_begin:Df,normal_fragment_maps:If,normal_pars_fragment:Uf,normal_pars_vertex:Nf,normal_vertex:Ff,normalmap_pars_fragment:Of,clearcoat_normal_fragment_begin:Bf,clearcoat_normal_fragment_maps:zf,clearcoat_pars_fragment:kf,iridescence_pars_fragment:Hf,opaque_fragment:Vf,packing:Gf,premultiplied_alpha_fragment:Wf,project_vertex:Xf,dithering_fragment:Yf,dithering_pars_fragment:qf,roughnessmap_fragment:$f,roughnessmap_pars_fragment:Zf,shadowmap_pars_fragment:Kf,shadowmap_pars_vertex:jf,shadowmap_vertex:Jf,shadowmask_pars_fragment:Qf,skinbase_vertex:tp,skinning_pars_vertex:ep,skinning_vertex:np,skinnormal_vertex:ip,specularmap_fragment:sp,specularmap_pars_fragment:rp,tonemapping_fragment:ap,tonemapping_pars_fragment:op,transmission_fragment:lp,transmission_pars_fragment:cp,uv_pars_fragment:hp,uv_pars_vertex:up,uv_vertex:dp,worldpos_vertex:fp,background_vert:pp,background_frag:mp,backgroundCube_vert:gp,backgroundCube_frag:_p,cube_vert:vp,cube_frag:xp,depth_vert:Mp,depth_frag:yp,distanceRGBA_vert:Sp,distanceRGBA_frag:Ep,equirect_vert:bp,equirect_frag:wp,linedashed_vert:Tp,linedashed_frag:Ap,meshbasic_vert:Rp,meshbasic_frag:Cp,meshlambert_vert:Pp,meshlambert_frag:Lp,meshmatcap_vert:Dp,meshmatcap_frag:Ip,meshnormal_vert:Up,meshnormal_frag:Np,meshphong_vert:Fp,meshphong_frag:Op,meshphysical_vert:Bp,meshphysical_frag:zp,meshtoon_vert:kp,meshtoon_frag:Hp,points_vert:Vp,points_frag:Gp,shadow_vert:Wp,shadow_frag:Xp,sprite_vert:Yp,sprite_frag:qp},vt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},yn={basic:{uniforms:He([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:He([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:He([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:He([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:He([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:He([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:He([vt.points,vt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:He([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:He([vt.common,vt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:He([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:He([vt.sprite,vt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:He([vt.common,vt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:He([vt.lights,vt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};yn.physical={uniforms:He([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const lr={r:0,b:0,g:0},oi=new on,$p=new re;function Zp(i,t,e,n,s,r,a){const o=new Gt(0);let l=r===!0?0:1,h,d,p=null,c=0,u=null;function m(A){let b=A.isScene===!0?A.background:null;return b&&b.isTexture&&(b=(A.backgroundBlurriness>0?e:t).get(b)),b}function M(A){let b=!1;const w=m(A);w===null?g(o,l):w&&w.isColor&&(g(w,1),b=!0);const q=i.xr.getEnvironmentBlendMode();q==="additive"?n.buffers.color.setClear(0,0,0,1,a):q==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(A,b){const w=m(b);w&&(w.isCubeTexture||w.mapping===Or)?(d===void 0&&(d=new Vt(new xe(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:ss(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(q,N,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),oi.copy(b.backgroundRotation),oi.x*=-1,oi.y*=-1,oi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),d.material.uniforms.envMap.value=w,d.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4($p.makeRotationFromEuler(oi)),d.material.toneMapped=oe.getTransfer(w.colorSpace)!==me,(p!==w||c!==w.version||u!==i.toneMapping)&&(d.material.needsUpdate=!0,p=w,c=w.version,u=i.toneMapping),d.layers.enableAll(),A.unshift(d,d.geometry,d.material,0,0,null)):w&&w.isTexture&&(h===void 0&&(h=new Vt(new En(2,2),new Qn({name:"BackgroundMaterial",uniforms:ss(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=w,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.toneMapped=oe.getTransfer(w.colorSpace)!==me,w.matrixAutoUpdate===!0&&w.updateMatrix(),h.material.uniforms.uvTransform.value.copy(w.matrix),(p!==w||c!==w.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,p=w,c=w.version,u=i.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null))}function g(A,b){A.getRGB(lr,qc(i)),n.buffers.color.setClear(lr.r,lr.g,lr.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(A,b=1){o.set(A),l=b,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,g(o,l)},render:M,addToRenderList:f}}function Kp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=c(null);let r=s,a=!1;function o(v,S,X,I,H){let O=!1;const _=p(I,X,S);r!==_&&(r=_,h(r.object)),O=u(v,I,X,H),O&&m(v,I,X,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,w(v,S,X,I),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function h(v){return i.bindVertexArray(v)}function d(v){return i.deleteVertexArray(v)}function p(v,S,X){const I=X.wireframe===!0;let H=n[v.id];H===void 0&&(H={},n[v.id]=H);let O=H[S.id];O===void 0&&(O={},H[S.id]=O);let _=O[I];return _===void 0&&(_=c(l()),O[I]=_),_}function c(v){const S=[],X=[],I=[];for(let H=0;H<e;H++)S[H]=0,X[H]=0,I[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:X,attributeDivisors:I,object:v,attributes:{},index:null}}function u(v,S,X,I){const H=r.attributes,O=S.attributes;let _=0;const y=X.getAttributes();for(const x in y)if(y[x].location>=0){const L=H[x];let P=O[x];if(P===void 0&&(x==="instanceMatrix"&&v.instanceMatrix&&(P=v.instanceMatrix),x==="instanceColor"&&v.instanceColor&&(P=v.instanceColor)),L===void 0||L.attribute!==P||P&&L.data!==P.data)return!0;_++}return r.attributesNum!==_||r.index!==I}function m(v,S,X,I){const H={},O=S.attributes;let _=0;const y=X.getAttributes();for(const x in y)if(y[x].location>=0){let L=O[x];L===void 0&&(x==="instanceMatrix"&&v.instanceMatrix&&(L=v.instanceMatrix),x==="instanceColor"&&v.instanceColor&&(L=v.instanceColor));const P={};P.attribute=L,L&&L.data&&(P.data=L.data),H[x]=P,_++}r.attributes=H,r.attributesNum=_,r.index=I}function M(){const v=r.newAttributes;for(let S=0,X=v.length;S<X;S++)v[S]=0}function f(v){g(v,0)}function g(v,S){const X=r.newAttributes,I=r.enabledAttributes,H=r.attributeDivisors;X[v]=1,I[v]===0&&(i.enableVertexAttribArray(v),I[v]=1),H[v]!==S&&(i.vertexAttribDivisor(v,S),H[v]=S)}function A(){const v=r.newAttributes,S=r.enabledAttributes;for(let X=0,I=S.length;X<I;X++)S[X]!==v[X]&&(i.disableVertexAttribArray(X),S[X]=0)}function b(v,S,X,I,H,O,_){_===!0?i.vertexAttribIPointer(v,S,X,H,O):i.vertexAttribPointer(v,S,X,I,H,O)}function w(v,S,X,I){M();const H=I.attributes,O=X.getAttributes(),_=S.defaultAttributeValues;for(const y in O){const x=O[y];if(x.location>=0){let C=H[y];if(C===void 0&&(y==="instanceMatrix"&&v.instanceMatrix&&(C=v.instanceMatrix),y==="instanceColor"&&v.instanceColor&&(C=v.instanceColor)),C!==void 0){const L=C.normalized,P=C.itemSize,tt=t.get(C);if(tt===void 0)continue;const $=tt.buffer,z=tt.type,Z=tt.bytesPerElement,at=z===i.INT||z===i.UNSIGNED_INT||C.gpuType===Lo;if(C.isInterleavedBufferAttribute){const ct=C.data,mt=ct.stride,St=C.offset;if(ct.isInstancedInterleavedBuffer){for(let Wt=0;Wt<x.locationSize;Wt++)g(x.location+Wt,ct.meshPerAttribute);v.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Wt=0;Wt<x.locationSize;Wt++)f(x.location+Wt);i.bindBuffer(i.ARRAY_BUFFER,$);for(let Wt=0;Wt<x.locationSize;Wt++)b(x.location+Wt,P/x.locationSize,z,L,mt*Z,(St+P/x.locationSize*Wt)*Z,at)}else{if(C.isInstancedBufferAttribute){for(let ct=0;ct<x.locationSize;ct++)g(x.location+ct,C.meshPerAttribute);v.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let ct=0;ct<x.locationSize;ct++)f(x.location+ct);i.bindBuffer(i.ARRAY_BUFFER,$);for(let ct=0;ct<x.locationSize;ct++)b(x.location+ct,P/x.locationSize,z,L,P*Z,P/x.locationSize*ct*Z,at)}}else if(_!==void 0){const L=_[y];if(L!==void 0)switch(L.length){case 2:i.vertexAttrib2fv(x.location,L);break;case 3:i.vertexAttrib3fv(x.location,L);break;case 4:i.vertexAttrib4fv(x.location,L);break;default:i.vertexAttrib1fv(x.location,L)}}}}A()}function q(){Y();for(const v in n){const S=n[v];for(const X in S){const I=S[X];for(const H in I)d(I[H].object),delete I[H];delete S[X]}delete n[v]}}function N(v){if(n[v.id]===void 0)return;const S=n[v.id];for(const X in S){const I=S[X];for(const H in I)d(I[H].object),delete I[H];delete S[X]}delete n[v.id]}function D(v){for(const S in n){const X=n[S];if(X[v.id]===void 0)continue;const I=X[v.id];for(const H in I)d(I[H].object),delete I[H];delete X[v.id]}}function Y(){Q(),a=!0,r!==s&&(r=s,h(r.object))}function Q(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:Y,resetDefaultState:Q,dispose:q,releaseStatesOfGeometry:N,releaseStatesOfProgram:D,initAttributes:M,enableAttribute:f,disableUnusedAttributes:A}}function jp(i,t,e){let n;function s(h){n=h}function r(h,d){i.drawArrays(n,h,d),e.update(d,n,1)}function a(h,d,p){p!==0&&(i.drawArraysInstanced(n,h,d,p),e.update(d,n,p))}function o(h,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,d,0,p);let u=0;for(let m=0;m<p;m++)u+=d[m];e.update(u,n,1)}function l(h,d,p,c){if(p===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let m=0;m<h.length;m++)a(h[m],d[m],c[m]);else{u.multiDrawArraysInstancedWEBGL(n,h,0,d,0,c,0,p);let m=0;for(let M=0;M<p;M++)m+=d[M];for(let M=0;M<c.length;M++)e.update(m,n,c[M])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Jp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(D){return!(D!==pn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){const Y=D===Os&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==Nn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Sn&&!Y)}function l(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const d=l(h);d!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);const p=e.logarithmicDepthBuffer===!0,c=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(c===!0){const D=t.get("EXT_clip_control");D.clipControlEXT(D.LOWER_LEFT_EXT,D.ZERO_TO_ONE_EXT)}const u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),q=m>0,N=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:p,reverseDepthBuffer:c,maxTextures:u,maxVertexTextures:m,maxTextureSize:M,maxCubemapSize:f,maxAttributes:g,maxVertexUniforms:A,maxVaryings:b,maxFragmentUniforms:w,vertexTextures:q,maxSamples:N}}function Qp(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Yn,o=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,c){const u=p.length!==0||c||n!==0||s;return s=c,n=p.length,u},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,c){e=d(p,c,0)},this.setState=function(p,c,u){const m=p.clippingPlanes,M=p.clipIntersection,f=p.clipShadows,g=i.get(p);if(!s||m===null||m.length===0||r&&!f)r?d(null):h();else{const A=r?0:n,b=A*4;let w=g.clippingState||null;l.value=w,w=d(m,c,b,u);for(let q=0;q!==b;++q)w[q]=e[q];g.clippingState=w,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=A}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(p,c,u,m){const M=p!==null?p.length:0;let f=null;if(M!==0){if(f=l.value,m!==!0||f===null){const g=u+M*4,A=c.matrixWorldInverse;o.getNormalMatrix(A),(f===null||f.length<g)&&(f=new Float32Array(g));for(let b=0,w=u;b!==M;++b,w+=4)a.copy(p[b]).applyMatrix4(A,o),a.normal.toArray(f,w),f[w+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,f}}function tm(i){let t=new WeakMap;function e(a,o){return o===Ya?a.mapping=ts:o===qa&&(a.mapping=es),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ya||o===qa)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const h=new hd(l.height);return h.fromEquirectangularTexture(i,a),t.set(a,h),a.addEventListener("dispose",s),e(h.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class jc extends $c{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const $i=4,Tl=[.125,.215,.35,.446,.526,.582],ui=20,_a=new jc,Al=new Gt;let va=null,xa=0,Ma=0,ya=!1;const ci=(1+Math.sqrt(5))/2,zi=1/ci,Rl=[new F(-ci,zi,0),new F(ci,zi,0),new F(-zi,0,ci),new F(zi,0,ci),new F(0,ci,-zi),new F(0,ci,zi),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class Eo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){va=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ll(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(va,xa,Ma),this._renderer.xr.enabled=ya,t.scissorTest=!1,cr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ts||t.mapping===es?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),va=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Os,format:pn,colorSpace:ti,depthBuffer:!1},s=Cl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=em(r)),this._blurMaterial=nm(r,t,e)}return s}_compileMaterial(t){const e=new Vt(this._lodPlanes[0],t);this._renderer.compile(e,_a)}_sceneToCubeUV(t,e,n,s){const o=new Je(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,c=d.toneMapping;d.getClearColor(Al),d.toneMapping=Kn,d.autoClear=!1;const u=new mn({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),m=new Vt(new xe,u);let M=!1;const f=t.background;f?f.isColor&&(u.color.copy(f),t.background=null,M=!0):(u.color.copy(Al),M=!0);for(let g=0;g<6;g++){const A=g%3;A===0?(o.up.set(0,l[g],0),o.lookAt(h[g],0,0)):A===1?(o.up.set(0,0,l[g]),o.lookAt(0,h[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,h[g]));const b=this._cubeSize;cr(s,A*b,g>2?b:0,b,b),d.setRenderTarget(s),M&&d.render(m,o),d.render(t,o)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=c,d.autoClear=p,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ts||t.mapping===es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ll()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Vt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;cr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,_a)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Rl[(s-r-1)%Rl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new Vt(this._lodPlanes[s],h),c=h.uniforms,u=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*ui-1),M=r/m,f=isFinite(r)?1+Math.floor(d*M):ui;f>ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${ui}`);const g=[];let A=0;for(let D=0;D<ui;++D){const Y=D/M,Q=Math.exp(-Y*Y/2);g.push(Q),D===0?A+=Q:D<f&&(A+=2*Q)}for(let D=0;D<g.length;D++)g[D]=g[D]/A;c.envMap.value=t.texture,c.samples.value=f,c.weights.value=g,c.latitudinal.value=a==="latitudinal",o&&(c.poleAxis.value=o);const{_lodMax:b}=this;c.dTheta.value=m,c.mipInt.value=b-n;const w=this._sizeLods[s],q=3*w*(s>b-$i?s-b+$i:0),N=4*(this._cubeSize-w);cr(e,q,N,3*w,2*w),l.setRenderTarget(e),l.render(p,_a)}}function em(i){const t=[],e=[],n=[];let s=i;const r=i-$i+1+Tl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-$i?l=Tl[a-i+$i-1]:a===0&&(l=0),n.push(l);const h=1/(o-2),d=-h,p=1+h,c=[d,d,p,d,p,p,d,d,p,p,d,p],u=6,m=6,M=3,f=2,g=1,A=new Float32Array(M*m*u),b=new Float32Array(f*m*u),w=new Float32Array(g*m*u);for(let N=0;N<u;N++){const D=N%3*2/3-1,Y=N>2?0:-1,Q=[D,Y,0,D+2/3,Y,0,D+2/3,Y+1,0,D,Y,0,D+2/3,Y+1,0,D,Y+1,0];A.set(Q,M*m*N),b.set(c,f*m*N);const v=[N,N,N,N,N,N];w.set(v,g*m*N)}const q=new qe;q.setAttribute("position",new Qe(A,M)),q.setAttribute("uv",new Qe(b,f)),q.setAttribute("faceIndex",new Qe(w,g)),t.push(q),s>$i&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Cl(i,t,e){const n=new _i(i,t,e);return n.texture.mapping=Or,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function cr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function nm(i,t,e){const n=new Float32Array(ui),s=new F(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Go(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Pl(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Go(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Ll(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Go(){return`

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
	`}function im(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,h=l===Ya||l===qa,d=l===ts||l===es;if(h||d){let p=t.get(o);const c=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==c)return e===null&&(e=new Eo(i)),p=h?e.fromEquirectangular(o,p):e.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,t.set(o,p),p.texture;if(p!==void 0)return p.texture;{const u=o.image;return h&&u&&u.height>0||d&&u&&s(u)?(e===null&&(e=new Eo(i)),p=h?e.fromEquirectangular(o):e.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,t.set(o,p),o.addEventListener("dispose",r),p.texture):null}}}return o}function s(o){let l=0;const h=6;for(let d=0;d<h;d++)o[d]!==void 0&&l++;return l===h}function r(o){const l=o.target;l.removeEventListener("dispose",r);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function sm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ar("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function rm(i,t,e,n){const s={},r=new WeakMap;function a(p){const c=p.target;c.index!==null&&t.remove(c.index);for(const m in c.attributes)t.remove(c.attributes[m]);for(const m in c.morphAttributes){const M=c.morphAttributes[m];for(let f=0,g=M.length;f<g;f++)t.remove(M[f])}c.removeEventListener("dispose",a),delete s[c.id];const u=r.get(c);u&&(t.remove(u),r.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,e.memory.geometries--}function o(p,c){return s[c.id]===!0||(c.addEventListener("dispose",a),s[c.id]=!0,e.memory.geometries++),c}function l(p){const c=p.attributes;for(const m in c)t.update(c[m],i.ARRAY_BUFFER);const u=p.morphAttributes;for(const m in u){const M=u[m];for(let f=0,g=M.length;f<g;f++)t.update(M[f],i.ARRAY_BUFFER)}}function h(p){const c=[],u=p.index,m=p.attributes.position;let M=0;if(u!==null){const A=u.array;M=u.version;for(let b=0,w=A.length;b<w;b+=3){const q=A[b+0],N=A[b+1],D=A[b+2];c.push(q,N,N,D,D,q)}}else if(m!==void 0){const A=m.array;M=m.version;for(let b=0,w=A.length/3-1;b<w;b+=3){const q=b+0,N=b+1,D=b+2;c.push(q,N,N,D,D,q)}}else return;const f=new(Hc(c)?Yc:Xc)(c,1);f.version=M;const g=r.get(p);g&&t.remove(g),r.set(p,f)}function d(p){const c=r.get(p);if(c){const u=p.index;u!==null&&c.version<u.version&&h(p)}else h(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:d}}function am(i,t,e){let n;function s(c){n=c}let r,a;function o(c){r=c.type,a=c.bytesPerElement}function l(c,u){i.drawElements(n,u,r,c*a),e.update(u,n,1)}function h(c,u,m){m!==0&&(i.drawElementsInstanced(n,u,r,c*a,m),e.update(u,n,m))}function d(c,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,c,0,m);let f=0;for(let g=0;g<m;g++)f+=u[g];e.update(f,n,1)}function p(c,u,m,M){if(m===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)h(c[g]/a,u[g],M[g]);else{f.multiDrawElementsInstancedWEBGL(n,u,0,r,c,0,M,0,m);let g=0;for(let A=0;A<m;A++)g+=u[A];for(let A=0;A<M.length;A++)e.update(g,n,M[A])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function om(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function lm(i,t,e){const n=new WeakMap,s=new fe;function r(a,o,l){const h=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0;let c=n.get(o);if(c===void 0||c.count!==p){let Q=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",Q)};c!==void 0&&c.texture.dispose();const u=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let b=0;u===!0&&(b=1),m===!0&&(b=2),M===!0&&(b=3);let w=o.attributes.position.count*b,q=1;w>t.maxTextureSize&&(q=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const N=new Float32Array(w*q*4*p),D=new Gc(N,w,q,p);D.type=Sn,D.needsUpdate=!0;const Y=b*4;for(let v=0;v<p;v++){const S=f[v],X=g[v],I=A[v],H=w*q*4*v;for(let O=0;O<S.count;O++){const _=O*Y;u===!0&&(s.fromBufferAttribute(S,O),N[H+_+0]=s.x,N[H+_+1]=s.y,N[H+_+2]=s.z,N[H+_+3]=0),m===!0&&(s.fromBufferAttribute(X,O),N[H+_+4]=s.x,N[H+_+5]=s.y,N[H+_+6]=s.z,N[H+_+7]=0),M===!0&&(s.fromBufferAttribute(I,O),N[H+_+8]=s.x,N[H+_+9]=s.y,N[H+_+10]=s.z,N[H+_+11]=I.itemSize===4?s.w:1)}}c={count:p,texture:D,size:new _t(w,q)},n.set(o,c),o.addEventListener("dispose",Q)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let u=0;for(let M=0;M<h.length;M++)u+=h[M];const m=o.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",h)}l.getUniforms().setValue(i,"morphTargetsTexture",c.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",c.size)}return{update:r}}function cm(i,t,e,n){let s=new WeakMap;function r(l){const h=n.render.frame,d=l.geometry,p=t.get(l,d);if(s.get(p)!==h&&(t.update(p),s.set(p,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const c=l.skeleton;s.get(c)!==h&&(c.update(),s.set(c,h))}return p}function a(){s=new WeakMap}function o(l){const h=l.target;h.removeEventListener("dispose",o),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}class Jc extends Be{constructor(t,e,n,s,r,a,o,l,h,d=ji){if(d!==ji&&d!==is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===ji&&(n=gi),n===void 0&&d===is&&(n=ns),super(null,s,r,a,o,l,d,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ye,this.minFilter=l!==void 0?l:Ye,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Qc=new Be,Dl=new Jc(1,1),th=new Gc,eh=new $u,nh=new Zc,Il=[],Ul=[],Nl=new Float32Array(16),Fl=new Float32Array(9),Ol=new Float32Array(4);function as(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Il[s];if(r===void 0&&(r=new Float32Array(s),Il[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Te(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ae(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function zr(i,t){let e=Ul[t];e===void 0&&(e=new Int32Array(t),Ul[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function hm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2fv(this.addr,t),Ae(e,t)}}function dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;i.uniform3fv(this.addr,t),Ae(e,t)}}function fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4fv(this.addr,t),Ae(e,t)}}function pm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;Ol.set(n),i.uniformMatrix2fv(this.addr,!1,Ol),Ae(e,n)}}function mm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;Fl.set(n),i.uniformMatrix3fv(this.addr,!1,Fl),Ae(e,n)}}function gm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;Nl.set(n),i.uniformMatrix4fv(this.addr,!1,Nl),Ae(e,n)}}function _m(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function vm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2iv(this.addr,t),Ae(e,t)}}function xm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3iv(this.addr,t),Ae(e,t)}}function Mm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4iv(this.addr,t),Ae(e,t)}}function ym(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2uiv(this.addr,t),Ae(e,t)}}function Em(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3uiv(this.addr,t),Ae(e,t)}}function bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4uiv(this.addr,t),Ae(e,t)}}function wm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Dl.compareFunction=kc,r=Dl):r=Qc,e.setTexture2D(t||r,s)}function Tm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||eh,s)}function Am(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||nh,s)}function Rm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||th,s)}function Cm(i){switch(i){case 5126:return hm;case 35664:return um;case 35665:return dm;case 35666:return fm;case 35674:return pm;case 35675:return mm;case 35676:return gm;case 5124:case 35670:return _m;case 35667:case 35671:return vm;case 35668:case 35672:return xm;case 35669:case 35673:return Mm;case 5125:return ym;case 36294:return Sm;case 36295:return Em;case 36296:return bm;case 35678:case 36198:case 36298:case 36306:case 35682:return wm;case 35679:case 36299:case 36307:return Tm;case 35680:case 36300:case 36308:case 36293:return Am;case 36289:case 36303:case 36311:case 36292:return Rm}}function Pm(i,t){i.uniform1fv(this.addr,t)}function Lm(i,t){const e=as(t,this.size,2);i.uniform2fv(this.addr,e)}function Dm(i,t){const e=as(t,this.size,3);i.uniform3fv(this.addr,e)}function Im(i,t){const e=as(t,this.size,4);i.uniform4fv(this.addr,e)}function Um(i,t){const e=as(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Nm(i,t){const e=as(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Fm(i,t){const e=as(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Om(i,t){i.uniform1iv(this.addr,t)}function Bm(i,t){i.uniform2iv(this.addr,t)}function zm(i,t){i.uniform3iv(this.addr,t)}function km(i,t){i.uniform4iv(this.addr,t)}function Hm(i,t){i.uniform1uiv(this.addr,t)}function Vm(i,t){i.uniform2uiv(this.addr,t)}function Gm(i,t){i.uniform3uiv(this.addr,t)}function Wm(i,t){i.uniform4uiv(this.addr,t)}function Xm(i,t,e){const n=this.cache,s=t.length,r=zr(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Qc,r[a])}function Ym(i,t,e){const n=this.cache,s=t.length,r=zr(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||eh,r[a])}function qm(i,t,e){const n=this.cache,s=t.length,r=zr(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||nh,r[a])}function $m(i,t,e){const n=this.cache,s=t.length,r=zr(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||th,r[a])}function Zm(i){switch(i){case 5126:return Pm;case 35664:return Lm;case 35665:return Dm;case 35666:return Im;case 35674:return Um;case 35675:return Nm;case 35676:return Fm;case 5124:case 35670:return Om;case 35667:case 35671:return Bm;case 35668:case 35672:return zm;case 35669:case 35673:return km;case 5125:return Hm;case 36294:return Vm;case 36295:return Gm;case 36296:return Wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Xm;case 35679:case 36299:case 36307:return Ym;case 35680:case 36300:case 36308:case 36293:return qm;case 36289:case 36303:case 36311:case 36292:return $m}}class Km{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Cm(e.type)}}class jm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zm(e.type)}}class Jm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Sa=/(\w+)(\])?(\[|\.)?/g;function Bl(i,t){i.seq.push(t),i.map[t.id]=t}function Qm(i,t,e){const n=i.name,s=n.length;for(Sa.lastIndex=0;;){const r=Sa.exec(n),a=Sa.lastIndex;let o=r[1];const l=r[2]==="]",h=r[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===s){Bl(e,h===void 0?new Km(o,i,t):new jm(o,i,t));break}else{let p=e.map[o];p===void 0&&(p=new Jm(o),Bl(e,p)),e=p}}}class Rr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Qm(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function zl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const t0=37297;let e0=0;function n0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function i0(i){const t=oe.getPrimaries(oe.workingColorSpace),e=oe.getPrimaries(i);let n;switch(t===e?n="":t===Dr&&e===Lr?n="LinearDisplayP3ToLinearSRGB":t===Lr&&e===Dr&&(n="LinearSRGBToLinearDisplayP3"),i){case ti:case Br:return[n,"LinearTransferOETF"];case Oe:case Bo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function kl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+n0(i.getShaderSource(t),a)}else return s}function s0(i,t){const e=i0(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function r0(i,t){let e;switch(t){case au:e="Linear";break;case ou:e="Reinhard";break;case lu:e="Cineon";break;case Rc:e="ACESFilmic";break;case hu:e="AgX";break;case uu:e="Neutral";break;case cu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const hr=new F;function a0(){oe.getLuminanceCoefficients(hr);const i=hr.x.toFixed(4),t=hr.y.toFixed(4),e=hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function o0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bs).join(`
`)}function l0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function c0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function bs(i){return i!==""}function Hl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const h0=/^[ \t]*#include +<([\w\d./]+)>/gm;function bo(i){return i.replace(h0,d0)}const u0=new Map;function d0(i,t){let e=$t[t];if(e===void 0){const n=u0.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return bo(e)}const f0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gl(i){return i.replace(f0,p0)}function p0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function m0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===wc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Tc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===In&&(t="SHADOWMAP_TYPE_VSM"),t}function g0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ts:case es:t="ENVMAP_TYPE_CUBE";break;case Or:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case es:t="ENVMAP_MODE_REFRACTION";break}return t}function v0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ac:t="ENVMAP_BLENDING_MULTIPLY";break;case su:t="ENVMAP_BLENDING_MIX";break;case ru:t="ENVMAP_BLENDING_ADD";break}return t}function x0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function M0(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=m0(e),h=g0(e),d=_0(e),p=v0(e),c=x0(e),u=o0(e),m=l0(r),M=s.createProgram();let f,g,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(bs).join(`
`),f.length>0&&(f+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(bs).join(`
`),g.length>0&&(g+=`
`)):(f=[Wl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),g=[Wl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMap?"#define "+p:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Kn?"#define TONE_MAPPING":"",e.toneMapping!==Kn?$t.tonemapping_pars_fragment:"",e.toneMapping!==Kn?r0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,s0("linearToOutputTexel",e.outputColorSpace),a0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(bs).join(`
`)),a=bo(a),a=Hl(a,e),a=Vl(a,e),o=bo(o),o=Hl(o,e),o=Vl(o,e),a=Gl(a),o=Gl(o),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,f=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,g=["#define varying in",e.glslVersion===ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const b=A+f+a,w=A+g+o,q=zl(s,s.VERTEX_SHADER,b),N=zl(s,s.FRAGMENT_SHADER,w);s.attachShader(M,q),s.attachShader(M,N),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function D(S){if(i.debug.checkShaderErrors){const X=s.getProgramInfoLog(M).trim(),I=s.getShaderInfoLog(q).trim(),H=s.getShaderInfoLog(N).trim();let O=!0,_=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,q,N);else{const y=kl(s,q,"vertex"),x=kl(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+X+`
`+y+`
`+x)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(I===""||H==="")&&(_=!1);_&&(S.diagnostics={runnable:O,programLog:X,vertexShader:{log:I,prefix:f},fragmentShader:{log:H,prefix:g}})}s.deleteShader(q),s.deleteShader(N),Y=new Rr(s,M),Q=c0(s,M)}let Y;this.getUniforms=function(){return Y===void 0&&D(this),Y};let Q;this.getAttributes=function(){return Q===void 0&&D(this),Q};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(M,t0)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=e0++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=q,this.fragmentShader=N,this}let y0=0;class S0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new E0(t),e.set(t,n)),n}}class E0{constructor(t){this.id=y0++,this.code=t,this.usedTimes=0}}function b0(i,t,e,n,s,r,a){const o=new Ho,l=new S0,h=new Set,d=[],p=s.logarithmicDepthBuffer,c=s.reverseDepthBuffer,u=s.vertexTextures;let m=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v){return h.add(v),v===0?"uv":`uv${v}`}function g(v,S,X,I,H){const O=I.fog,_=H.geometry,y=v.isMeshStandardMaterial?I.environment:null,x=(v.isMeshStandardMaterial?e:t).get(v.envMap||y),C=x&&x.mapping===Or?x.image.height:null,L=M[v.type];v.precision!==null&&(m=s.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const P=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,tt=P!==void 0?P.length:0;let $=0;_.morphAttributes.position!==void 0&&($=1),_.morphAttributes.normal!==void 0&&($=2),_.morphAttributes.color!==void 0&&($=3);let z,Z,at,ct;if(L){const De=yn[L];z=De.vertexShader,Z=De.fragmentShader}else z=v.vertexShader,Z=v.fragmentShader,l.update(v),at=l.getVertexShaderID(v),ct=l.getFragmentShaderID(v);const mt=i.getRenderTarget(),St=H.isInstancedMesh===!0,Wt=H.isBatchedMesh===!0,ne=!!v.map,Yt=!!v.matcap,B=!!x,ge=!!v.aoMap,Ht=!!v.lightMap,Xt=!!v.bumpMap,Nt=!!v.normalMap,le=!!v.displacementMap,It=!!v.emissiveMap,R=!!v.metalnessMap,E=!!v.roughnessMap,K=v.anisotropy>0,st=v.clearcoat>0,ut=v.dispersion>0,rt=v.iridescence>0,Pt=v.sheen>0,xt=v.transmission>0,yt=K&&!!v.anisotropyMap,jt=st&&!!v.clearcoatMap,ft=st&&!!v.clearcoatNormalMap,wt=st&&!!v.clearcoatRoughnessMap,Bt=rt&&!!v.iridescenceMap,zt=rt&&!!v.iridescenceThicknessMap,Tt=Pt&&!!v.sheenColorMap,Jt=Pt&&!!v.sheenRoughnessMap,Ut=!!v.specularMap,he=!!v.specularColorMap,V=!!v.specularIntensityMap,gt=xt&&!!v.transmissionMap,nt=xt&&!!v.thicknessMap,ht=!!v.gradientMap,Et=!!v.alphaMap,bt=v.alphaTest>0,te=!!v.alphaHash,ve=!!v.extensions;let Le=Kn;v.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(Le=i.toneMapping);const qt={shaderID:L,shaderType:v.type,shaderName:v.name,vertexShader:z,fragmentShader:Z,defines:v.defines,customVertexShaderID:at,customFragmentShaderID:ct,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,batching:Wt,batchingColor:Wt&&H._colorsTexture!==null,instancing:St,instancingColor:St&&H.instanceColor!==null,instancingMorph:St&&H.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:mt===null?i.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:ti,alphaToCoverage:!!v.alphaToCoverage,map:ne,matcap:Yt,envMap:B,envMapMode:B&&x.mapping,envMapCubeUVHeight:C,aoMap:ge,lightMap:Ht,bumpMap:Xt,normalMap:Nt,displacementMap:u&&le,emissiveMap:It,normalMapObjectSpace:Nt&&v.normalMapType===mu,normalMapTangentSpace:Nt&&v.normalMapType===zc,metalnessMap:R,roughnessMap:E,anisotropy:K,anisotropyMap:yt,clearcoat:st,clearcoatMap:jt,clearcoatNormalMap:ft,clearcoatRoughnessMap:wt,dispersion:ut,iridescence:rt,iridescenceMap:Bt,iridescenceThicknessMap:zt,sheen:Pt,sheenColorMap:Tt,sheenRoughnessMap:Jt,specularMap:Ut,specularColorMap:he,specularIntensityMap:V,transmission:xt,transmissionMap:gt,thicknessMap:nt,gradientMap:ht,opaque:v.transparent===!1&&v.blending===mi&&v.alphaToCoverage===!1,alphaMap:Et,alphaTest:bt,alphaHash:te,combine:v.combine,mapUv:ne&&f(v.map.channel),aoMapUv:ge&&f(v.aoMap.channel),lightMapUv:Ht&&f(v.lightMap.channel),bumpMapUv:Xt&&f(v.bumpMap.channel),normalMapUv:Nt&&f(v.normalMap.channel),displacementMapUv:le&&f(v.displacementMap.channel),emissiveMapUv:It&&f(v.emissiveMap.channel),metalnessMapUv:R&&f(v.metalnessMap.channel),roughnessMapUv:E&&f(v.roughnessMap.channel),anisotropyMapUv:yt&&f(v.anisotropyMap.channel),clearcoatMapUv:jt&&f(v.clearcoatMap.channel),clearcoatNormalMapUv:ft&&f(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&f(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&f(v.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&f(v.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&f(v.sheenColorMap.channel),sheenRoughnessMapUv:Jt&&f(v.sheenRoughnessMap.channel),specularMapUv:Ut&&f(v.specularMap.channel),specularColorMapUv:he&&f(v.specularColorMap.channel),specularIntensityMapUv:V&&f(v.specularIntensityMap.channel),transmissionMapUv:gt&&f(v.transmissionMap.channel),thicknessMapUv:nt&&f(v.thicknessMap.channel),alphaMapUv:Et&&f(v.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(Nt||K),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!_.attributes.uv&&(ne||Et),fog:!!O,useFog:v.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:c,skinning:H.isSkinnedMesh===!0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:$,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&X.length>0,shadowMapType:i.shadowMap.type,toneMapping:Le,decodeVideoTexture:ne&&v.map.isVideoTexture===!0&&oe.getTransfer(v.map.colorSpace)===me,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===dn,flipSided:v.side===We,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ve&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&v.extensions.multiDraw===!0||Wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return qt.vertexUv1s=h.has(1),qt.vertexUv2s=h.has(2),qt.vertexUv3s=h.has(3),h.clear(),qt}function A(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const X in v.defines)S.push(X),S.push(v.defines[X]);return v.isRawShaderMaterial===!1&&(b(S,v),w(S,v),S.push(i.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function b(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function w(v,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),v.push(o.mask)}function q(v){const S=M[v.type];let X;if(S){const I=yn[S];X=ad.clone(I.uniforms)}else X=v.uniforms;return X}function N(v,S){let X;for(let I=0,H=d.length;I<H;I++){const O=d[I];if(O.cacheKey===S){X=O,++X.usedTimes;break}}return X===void 0&&(X=new M0(i,S,v,r),d.push(X)),X}function D(v){if(--v.usedTimes===0){const S=d.indexOf(v);d[S]=d[d.length-1],d.pop(),v.destroy()}}function Y(v){l.remove(v)}function Q(){l.dispose()}return{getParameters:g,getProgramCacheKey:A,getUniforms:q,acquireProgram:N,releaseProgram:D,releaseShaderCache:Y,programs:d,dispose:Q}}function w0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function T0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Xl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Yl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(p,c,u,m,M,f){let g=i[t];return g===void 0?(g={id:p.id,object:p,geometry:c,material:u,groupOrder:m,renderOrder:p.renderOrder,z:M,group:f},i[t]=g):(g.id=p.id,g.object=p,g.geometry=c,g.material=u,g.groupOrder=m,g.renderOrder=p.renderOrder,g.z=M,g.group=f),t++,g}function o(p,c,u,m,M,f){const g=a(p,c,u,m,M,f);u.transmission>0?n.push(g):u.transparent===!0?s.push(g):e.push(g)}function l(p,c,u,m,M,f){const g=a(p,c,u,m,M,f);u.transmission>0?n.unshift(g):u.transparent===!0?s.unshift(g):e.unshift(g)}function h(p,c){e.length>1&&e.sort(p||T0),n.length>1&&n.sort(c||Xl),s.length>1&&s.sort(c||Xl)}function d(){for(let p=t,c=i.length;p<c;p++){const u=i[p];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:d,sort:h}}function A0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Yl,i.set(n,[a])):s>=r.length?(a=new Yl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function R0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Gt};break;case"SpotLight":e={position:new F,direction:new F,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function C0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let P0=0;function L0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function D0(i){const t=new R0,e=C0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new F);const s=new F,r=new re,a=new re;function o(h){let d=0,p=0,c=0;for(let Q=0;Q<9;Q++)n.probe[Q].set(0,0,0);let u=0,m=0,M=0,f=0,g=0,A=0,b=0,w=0,q=0,N=0,D=0;h.sort(L0);for(let Q=0,v=h.length;Q<v;Q++){const S=h[Q],X=S.color,I=S.intensity,H=S.distance,O=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)d+=X.r*I,p+=X.g*I,c+=X.b*I;else if(S.isLightProbe){for(let _=0;_<9;_++)n.probe[_].addScaledVector(S.sh.coefficients[_],I);D++}else if(S.isDirectionalLight){const _=t.get(S);if(_.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const y=S.shadow,x=e.get(S);x.shadowIntensity=y.intensity,x.shadowBias=y.bias,x.shadowNormalBias=y.normalBias,x.shadowRadius=y.radius,x.shadowMapSize=y.mapSize,n.directionalShadow[u]=x,n.directionalShadowMap[u]=O,n.directionalShadowMatrix[u]=S.shadow.matrix,A++}n.directional[u]=_,u++}else if(S.isSpotLight){const _=t.get(S);_.position.setFromMatrixPosition(S.matrixWorld),_.color.copy(X).multiplyScalar(I),_.distance=H,_.coneCos=Math.cos(S.angle),_.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),_.decay=S.decay,n.spot[M]=_;const y=S.shadow;if(S.map&&(n.spotLightMap[q]=S.map,q++,y.updateMatrices(S),S.castShadow&&N++),n.spotLightMatrix[M]=y.matrix,S.castShadow){const x=e.get(S);x.shadowIntensity=y.intensity,x.shadowBias=y.bias,x.shadowNormalBias=y.normalBias,x.shadowRadius=y.radius,x.shadowMapSize=y.mapSize,n.spotShadow[M]=x,n.spotShadowMap[M]=O,w++}M++}else if(S.isRectAreaLight){const _=t.get(S);_.color.copy(X).multiplyScalar(I),_.halfWidth.set(S.width*.5,0,0),_.halfHeight.set(0,S.height*.5,0),n.rectArea[f]=_,f++}else if(S.isPointLight){const _=t.get(S);if(_.color.copy(S.color).multiplyScalar(S.intensity),_.distance=S.distance,_.decay=S.decay,S.castShadow){const y=S.shadow,x=e.get(S);x.shadowIntensity=y.intensity,x.shadowBias=y.bias,x.shadowNormalBias=y.normalBias,x.shadowRadius=y.radius,x.shadowMapSize=y.mapSize,x.shadowCameraNear=y.camera.near,x.shadowCameraFar=y.camera.far,n.pointShadow[m]=x,n.pointShadowMap[m]=O,n.pointShadowMatrix[m]=S.shadow.matrix,b++}n.point[m]=_,m++}else if(S.isHemisphereLight){const _=t.get(S);_.skyColor.copy(S.color).multiplyScalar(I),_.groundColor.copy(S.groundColor).multiplyScalar(I),n.hemi[g]=_,g++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=c;const Y=n.hash;(Y.directionalLength!==u||Y.pointLength!==m||Y.spotLength!==M||Y.rectAreaLength!==f||Y.hemiLength!==g||Y.numDirectionalShadows!==A||Y.numPointShadows!==b||Y.numSpotShadows!==w||Y.numSpotMaps!==q||Y.numLightProbes!==D)&&(n.directional.length=u,n.spot.length=M,n.rectArea.length=f,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=w+q-N,n.spotLightMap.length=q,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=D,Y.directionalLength=u,Y.pointLength=m,Y.spotLength=M,Y.rectAreaLength=f,Y.hemiLength=g,Y.numDirectionalShadows=A,Y.numPointShadows=b,Y.numSpotShadows=w,Y.numSpotMaps=q,Y.numLightProbes=D,n.version=P0++)}function l(h,d){let p=0,c=0,u=0,m=0,M=0;const f=d.matrixWorldInverse;for(let g=0,A=h.length;g<A;g++){const b=h[g];if(b.isDirectionalLight){const w=n.directional[p];w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),p++}else if(b.isSpotLight){const w=n.spot[u];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),u++}else if(b.isRectAreaLight){const w=n.rectArea[m];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(f),a.identity(),r.copy(b.matrixWorld),r.premultiply(f),a.extractRotation(r),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),m++}else if(b.isPointLight){const w=n.point[c];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(f),c++}else if(b.isHemisphereLight){const w=n.hemi[M];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(f),M++}}}return{setup:o,setupView:l,state:n}}function ql(i){const t=new D0(i),e=[],n=[];function s(d){h.camera=d,e.length=0,n.length=0}function r(d){e.push(d)}function a(d){n.push(d)}function o(){t.setup(e)}function l(d){t.setupView(e,d)}const h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function I0(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new ql(i),t.set(s,[o])):r>=a.length?(o=new ql(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class U0 extends rs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class N0 extends rs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const F0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,O0=`uniform sampler2D shadow_pass;
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
}`;function B0(i,t,e){let n=new Vo;const s=new _t,r=new _t,a=new fe,o=new U0({depthPacking:pu}),l=new N0,h={},d=e.maxTextureSize,p={[jn]:We,[We]:jn,[dn]:dn},c=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:F0,fragmentShader:O0}),u=c.clone();u.defines.HORIZONTAL_PASS=1;const m=new qe;m.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Vt(m,c),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wc;let g=this.type;this.render=function(N,D,Y){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||N.length===0)return;const Q=i.getRenderTarget(),v=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),X=i.state;X.setBlending(Zn),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const I=g!==In&&this.type===In,H=g===In&&this.type!==In;for(let O=0,_=N.length;O<_;O++){const y=N[O],x=y.shadow;if(x===void 0){console.warn("THREE.WebGLShadowMap:",y,"has no shadow.");continue}if(x.autoUpdate===!1&&x.needsUpdate===!1)continue;s.copy(x.mapSize);const C=x.getFrameExtents();if(s.multiply(C),r.copy(x.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/C.x),s.x=r.x*C.x,x.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/C.y),s.y=r.y*C.y,x.mapSize.y=r.y)),x.map===null||I===!0||H===!0){const P=this.type!==In?{minFilter:Ye,magFilter:Ye}:{};x.map!==null&&x.map.dispose(),x.map=new _i(s.x,s.y,P),x.map.texture.name=y.name+".shadowMap",x.camera.updateProjectionMatrix()}i.setRenderTarget(x.map),i.clear();const L=x.getViewportCount();for(let P=0;P<L;P++){const tt=x.getViewport(P);a.set(r.x*tt.x,r.y*tt.y,r.x*tt.z,r.y*tt.w),X.viewport(a),x.updateMatrices(y,P),n=x.getFrustum(),w(D,Y,x.camera,y,this.type)}x.isPointLightShadow!==!0&&this.type===In&&A(x,Y),x.needsUpdate=!1}g=this.type,f.needsUpdate=!1,i.setRenderTarget(Q,v,S)};function A(N,D){const Y=t.update(M);c.defines.VSM_SAMPLES!==N.blurSamples&&(c.defines.VSM_SAMPLES=N.blurSamples,u.defines.VSM_SAMPLES=N.blurSamples,c.needsUpdate=!0,u.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new _i(s.x,s.y)),c.uniforms.shadow_pass.value=N.map.texture,c.uniforms.resolution.value=N.mapSize,c.uniforms.radius.value=N.radius,i.setRenderTarget(N.mapPass),i.clear(),i.renderBufferDirect(D,null,Y,c,M,null),u.uniforms.shadow_pass.value=N.mapPass.texture,u.uniforms.resolution.value=N.mapSize,u.uniforms.radius.value=N.radius,i.setRenderTarget(N.map),i.clear(),i.renderBufferDirect(D,null,Y,u,M,null)}function b(N,D,Y,Q){let v=null;const S=Y.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(S!==void 0)v=S;else if(v=Y.isPointLight===!0?l:o,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const X=v.uuid,I=D.uuid;let H=h[X];H===void 0&&(H={},h[X]=H);let O=H[I];O===void 0&&(O=v.clone(),H[I]=O,D.addEventListener("dispose",q)),v=O}if(v.visible=D.visible,v.wireframe=D.wireframe,Q===In?v.side=D.shadowSide!==null?D.shadowSide:D.side:v.side=D.shadowSide!==null?D.shadowSide:p[D.side],v.alphaMap=D.alphaMap,v.alphaTest=D.alphaTest,v.map=D.map,v.clipShadows=D.clipShadows,v.clippingPlanes=D.clippingPlanes,v.clipIntersection=D.clipIntersection,v.displacementMap=D.displacementMap,v.displacementScale=D.displacementScale,v.displacementBias=D.displacementBias,v.wireframeLinewidth=D.wireframeLinewidth,v.linewidth=D.linewidth,Y.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const X=i.properties.get(v);X.light=Y}return v}function w(N,D,Y,Q,v){if(N.visible===!1)return;if(N.layers.test(D.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&v===In)&&(!N.frustumCulled||n.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,N.matrixWorld);const I=t.update(N),H=N.material;if(Array.isArray(H)){const O=I.groups;for(let _=0,y=O.length;_<y;_++){const x=O[_],C=H[x.materialIndex];if(C&&C.visible){const L=b(N,C,Q,v);N.onBeforeShadow(i,N,D,Y,I,L,x),i.renderBufferDirect(Y,null,I,L,N,x),N.onAfterShadow(i,N,D,Y,I,L,x)}}}else if(H.visible){const O=b(N,H,Q,v);N.onBeforeShadow(i,N,D,Y,I,O,null),i.renderBufferDirect(Y,null,I,O,N,null),N.onAfterShadow(i,N,D,Y,I,O,null)}}const X=N.children;for(let I=0,H=X.length;I<H;I++)w(X[I],D,Y,Q,v)}function q(N){N.target.removeEventListener("dispose",q);for(const Y in h){const Q=h[Y],v=N.target.uuid;v in Q&&(Q[v].dispose(),delete Q[v])}}}const z0={[za]:ka,[Ha]:Wa,[Va]:Xa,[Qi]:Ga,[ka]:za,[Wa]:Ha,[Xa]:Va,[Ga]:Qi};function k0(i){function t(){let V=!1;const gt=new fe;let nt=null;const ht=new fe(0,0,0,0);return{setMask:function(Et){nt!==Et&&!V&&(i.colorMask(Et,Et,Et,Et),nt=Et)},setLocked:function(Et){V=Et},setClear:function(Et,bt,te,ve,Le){Le===!0&&(Et*=ve,bt*=ve,te*=ve),gt.set(Et,bt,te,ve),ht.equals(gt)===!1&&(i.clearColor(Et,bt,te,ve),ht.copy(gt))},reset:function(){V=!1,nt=null,ht.set(-1,0,0,0)}}}function e(){let V=!1,gt=!1,nt=null,ht=null,Et=null;return{setReversed:function(bt){gt=bt},setTest:function(bt){bt?at(i.DEPTH_TEST):ct(i.DEPTH_TEST)},setMask:function(bt){nt!==bt&&!V&&(i.depthMask(bt),nt=bt)},setFunc:function(bt){if(gt&&(bt=z0[bt]),ht!==bt){switch(bt){case za:i.depthFunc(i.NEVER);break;case ka:i.depthFunc(i.ALWAYS);break;case Ha:i.depthFunc(i.LESS);break;case Qi:i.depthFunc(i.LEQUAL);break;case Va:i.depthFunc(i.EQUAL);break;case Ga:i.depthFunc(i.GEQUAL);break;case Wa:i.depthFunc(i.GREATER);break;case Xa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ht=bt}},setLocked:function(bt){V=bt},setClear:function(bt){Et!==bt&&(i.clearDepth(bt),Et=bt)},reset:function(){V=!1,nt=null,ht=null,Et=null}}}function n(){let V=!1,gt=null,nt=null,ht=null,Et=null,bt=null,te=null,ve=null,Le=null;return{setTest:function(qt){V||(qt?at(i.STENCIL_TEST):ct(i.STENCIL_TEST))},setMask:function(qt){gt!==qt&&!V&&(i.stencilMask(qt),gt=qt)},setFunc:function(qt,De,tn){(nt!==qt||ht!==De||Et!==tn)&&(i.stencilFunc(qt,De,tn),nt=qt,ht=De,Et=tn)},setOp:function(qt,De,tn){(bt!==qt||te!==De||ve!==tn)&&(i.stencilOp(qt,De,tn),bt=qt,te=De,ve=tn)},setLocked:function(qt){V=qt},setClear:function(qt){Le!==qt&&(i.clearStencil(qt),Le=qt)},reset:function(){V=!1,gt=null,nt=null,ht=null,Et=null,bt=null,te=null,ve=null,Le=null}}}const s=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap;let h={},d={},p=new WeakMap,c=[],u=null,m=!1,M=null,f=null,g=null,A=null,b=null,w=null,q=null,N=new Gt(0,0,0),D=0,Y=!1,Q=null,v=null,S=null,X=null,I=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,_=0;const y=i.getParameter(i.VERSION);y.indexOf("WebGL")!==-1?(_=parseFloat(/^WebGL (\d)/.exec(y)[1]),O=_>=1):y.indexOf("OpenGL ES")!==-1&&(_=parseFloat(/^OpenGL ES (\d)/.exec(y)[1]),O=_>=2);let x=null,C={};const L=i.getParameter(i.SCISSOR_BOX),P=i.getParameter(i.VIEWPORT),tt=new fe().fromArray(L),$=new fe().fromArray(P);function z(V,gt,nt,ht){const Et=new Uint8Array(4),bt=i.createTexture();i.bindTexture(V,bt),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let te=0;te<nt;te++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(gt,0,i.RGBA,1,1,ht,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(gt+te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return bt}const Z={};Z[i.TEXTURE_2D]=z(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),at(i.DEPTH_TEST),r.setFunc(Qi),Ht(!1),Xt(il),at(i.CULL_FACE),B(Zn);function at(V){h[V]!==!0&&(i.enable(V),h[V]=!0)}function ct(V){h[V]!==!1&&(i.disable(V),h[V]=!1)}function mt(V,gt){return d[V]!==gt?(i.bindFramebuffer(V,gt),d[V]=gt,V===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=gt),V===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=gt),!0):!1}function St(V,gt){let nt=c,ht=!1;if(V){nt=p.get(gt),nt===void 0&&(nt=[],p.set(gt,nt));const Et=V.textures;if(nt.length!==Et.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let bt=0,te=Et.length;bt<te;bt++)nt[bt]=i.COLOR_ATTACHMENT0+bt;nt.length=Et.length,ht=!0}}else nt[0]!==i.BACK&&(nt[0]=i.BACK,ht=!0);ht&&i.drawBuffers(nt)}function Wt(V){return u!==V?(i.useProgram(V),u=V,!0):!1}const ne={[hi]:i.FUNC_ADD,[Hh]:i.FUNC_SUBTRACT,[Vh]:i.FUNC_REVERSE_SUBTRACT};ne[Gh]=i.MIN,ne[Wh]=i.MAX;const Yt={[Xh]:i.ZERO,[Yh]:i.ONE,[qh]:i.SRC_COLOR,[Oa]:i.SRC_ALPHA,[Qh]:i.SRC_ALPHA_SATURATE,[jh]:i.DST_COLOR,[Zh]:i.DST_ALPHA,[$h]:i.ONE_MINUS_SRC_COLOR,[Ba]:i.ONE_MINUS_SRC_ALPHA,[Jh]:i.ONE_MINUS_DST_COLOR,[Kh]:i.ONE_MINUS_DST_ALPHA,[tu]:i.CONSTANT_COLOR,[eu]:i.ONE_MINUS_CONSTANT_COLOR,[nu]:i.CONSTANT_ALPHA,[iu]:i.ONE_MINUS_CONSTANT_ALPHA};function B(V,gt,nt,ht,Et,bt,te,ve,Le,qt){if(V===Zn){m===!0&&(ct(i.BLEND),m=!1);return}if(m===!1&&(at(i.BLEND),m=!0),V!==kh){if(V!==M||qt!==Y){if((f!==hi||b!==hi)&&(i.blendEquation(i.FUNC_ADD),f=hi,b=hi),qt)switch(V){case mi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fa:i.blendFunc(i.ONE,i.ONE);break;case sl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case mi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case sl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}g=null,A=null,w=null,q=null,N.set(0,0,0),D=0,M=V,Y=qt}return}Et=Et||gt,bt=bt||nt,te=te||ht,(gt!==f||Et!==b)&&(i.blendEquationSeparate(ne[gt],ne[Et]),f=gt,b=Et),(nt!==g||ht!==A||bt!==w||te!==q)&&(i.blendFuncSeparate(Yt[nt],Yt[ht],Yt[bt],Yt[te]),g=nt,A=ht,w=bt,q=te),(ve.equals(N)===!1||Le!==D)&&(i.blendColor(ve.r,ve.g,ve.b,Le),N.copy(ve),D=Le),M=V,Y=!1}function ge(V,gt){V.side===dn?ct(i.CULL_FACE):at(i.CULL_FACE);let nt=V.side===We;gt&&(nt=!nt),Ht(nt),V.blending===mi&&V.transparent===!1?B(Zn):B(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),r.setFunc(V.depthFunc),r.setTest(V.depthTest),r.setMask(V.depthWrite),s.setMask(V.colorWrite);const ht=V.stencilWrite;a.setTest(ht),ht&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),le(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(V){Q!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),Q=V)}function Xt(V){V!==Bh?(at(i.CULL_FACE),V!==v&&(V===il?i.cullFace(i.BACK):V===zh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ct(i.CULL_FACE),v=V}function Nt(V){V!==S&&(O&&i.lineWidth(V),S=V)}function le(V,gt,nt){V?(at(i.POLYGON_OFFSET_FILL),(X!==gt||I!==nt)&&(i.polygonOffset(gt,nt),X=gt,I=nt)):ct(i.POLYGON_OFFSET_FILL)}function It(V){V?at(i.SCISSOR_TEST):ct(i.SCISSOR_TEST)}function R(V){V===void 0&&(V=i.TEXTURE0+H-1),x!==V&&(i.activeTexture(V),x=V)}function E(V,gt,nt){nt===void 0&&(x===null?nt=i.TEXTURE0+H-1:nt=x);let ht=C[nt];ht===void 0&&(ht={type:void 0,texture:void 0},C[nt]=ht),(ht.type!==V||ht.texture!==gt)&&(x!==nt&&(i.activeTexture(nt),x=nt),i.bindTexture(V,gt||Z[V]),ht.type=V,ht.texture=gt)}function K(){const V=C[x];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function st(){try{i.compressedTexImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ut(){try{i.compressedTexImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function rt(){try{i.texSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pt(){try{i.texSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function xt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function yt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function jt(){try{i.texStorage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ft(){try{i.texStorage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function wt(){try{i.texImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Bt(){try{i.texImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function zt(V){tt.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),tt.copy(V))}function Tt(V){$.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),$.copy(V))}function Jt(V,gt){let nt=l.get(gt);nt===void 0&&(nt=new WeakMap,l.set(gt,nt));let ht=nt.get(V);ht===void 0&&(ht=i.getUniformBlockIndex(gt,V.name),nt.set(V,ht))}function Ut(V,gt){const ht=l.get(gt).get(V);o.get(gt)!==ht&&(i.uniformBlockBinding(gt,ht,V.__bindingPointIndex),o.set(gt,ht))}function he(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},x=null,C={},d={},p=new WeakMap,c=[],u=null,m=!1,M=null,f=null,g=null,A=null,b=null,w=null,q=null,N=new Gt(0,0,0),D=0,Y=!1,Q=null,v=null,S=null,X=null,I=null,tt.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:at,disable:ct,bindFramebuffer:mt,drawBuffers:St,useProgram:Wt,setBlending:B,setMaterial:ge,setFlipSided:Ht,setCullFace:Xt,setLineWidth:Nt,setPolygonOffset:le,setScissorTest:It,activeTexture:R,bindTexture:E,unbindTexture:K,compressedTexImage2D:st,compressedTexImage3D:ut,texImage2D:wt,texImage3D:Bt,updateUBOMapping:Jt,uniformBlockBinding:Ut,texStorage2D:jt,texStorage3D:ft,texSubImage2D:rt,texSubImage3D:Pt,compressedTexSubImage2D:xt,compressedTexSubImage3D:yt,scissor:zt,viewport:Tt,reset:he}}function $l(i,t,e,n){const s=H0(n);switch(e){case Ic:return i*t;case Nc:return i*t;case Fc:return i*t*2;case Uo:return i*t/s.components*s.byteLength;case No:return i*t/s.components*s.byteLength;case Oc:return i*t*2/s.components*s.byteLength;case Fo:return i*t*2/s.components*s.byteLength;case Uc:return i*t*3/s.components*s.byteLength;case pn:return i*t*4/s.components*s.byteLength;case Oo:return i*t*4/s.components*s.byteLength;case Sr:case Er:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case br:case wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ka:case Ja:return Math.max(i,16)*Math.max(t,8)/4;case Za:case ja:return Math.max(i,8)*Math.max(t,8)/2;case Qa:case to:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case no:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case io:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case so:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ro:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ao:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case oo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case lo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case co:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ho:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case uo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case fo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case po:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case mo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case go:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Tr:case _o:case vo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Bc:case xo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Mo:case yo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function H0(i){switch(i){case Nn:case Pc:return{byteLength:1,components:1};case Ds:case Lc:case Os:return{byteLength:2,components:1};case Do:case Io:return{byteLength:2,components:4};case gi:case Lo:case Sn:return{byteLength:4,components:1};case Dc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function V0(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new _t,d=new WeakMap;let p;const c=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,E){return u?new OffscreenCanvas(R,E):Ur("canvas")}function M(R,E,K){let st=1;const ut=It(R);if((ut.width>K||ut.height>K)&&(st=K/Math.max(ut.width,ut.height)),st<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const rt=Math.floor(st*ut.width),Pt=Math.floor(st*ut.height);p===void 0&&(p=m(rt,Pt));const xt=E?m(rt,Pt):p;return xt.width=rt,xt.height=Pt,xt.getContext("2d").drawImage(R,0,0,rt,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ut.width+"x"+ut.height+") to ("+rt+"x"+Pt+")."),xt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ut.width+"x"+ut.height+")."),R;return R}function f(R){return R.generateMipmaps&&R.minFilter!==Ye&&R.minFilter!==rn}function g(R){i.generateMipmap(R)}function A(R,E,K,st,ut=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let rt=E;if(E===i.RED&&(K===i.FLOAT&&(rt=i.R32F),K===i.HALF_FLOAT&&(rt=i.R16F),K===i.UNSIGNED_BYTE&&(rt=i.R8)),E===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(rt=i.R8UI),K===i.UNSIGNED_SHORT&&(rt=i.R16UI),K===i.UNSIGNED_INT&&(rt=i.R32UI),K===i.BYTE&&(rt=i.R8I),K===i.SHORT&&(rt=i.R16I),K===i.INT&&(rt=i.R32I)),E===i.RG&&(K===i.FLOAT&&(rt=i.RG32F),K===i.HALF_FLOAT&&(rt=i.RG16F),K===i.UNSIGNED_BYTE&&(rt=i.RG8)),E===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(rt=i.RG8UI),K===i.UNSIGNED_SHORT&&(rt=i.RG16UI),K===i.UNSIGNED_INT&&(rt=i.RG32UI),K===i.BYTE&&(rt=i.RG8I),K===i.SHORT&&(rt=i.RG16I),K===i.INT&&(rt=i.RG32I)),E===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),K===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),K===i.UNSIGNED_INT&&(rt=i.RGB32UI),K===i.BYTE&&(rt=i.RGB8I),K===i.SHORT&&(rt=i.RGB16I),K===i.INT&&(rt=i.RGB32I)),E===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),K===i.UNSIGNED_INT&&(rt=i.RGBA32UI),K===i.BYTE&&(rt=i.RGBA8I),K===i.SHORT&&(rt=i.RGBA16I),K===i.INT&&(rt=i.RGBA32I)),E===i.RGB&&K===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),E===i.RGBA){const Pt=ut?Pr:oe.getTransfer(st);K===i.FLOAT&&(rt=i.RGBA32F),K===i.HALF_FLOAT&&(rt=i.RGBA16F),K===i.UNSIGNED_BYTE&&(rt=Pt===me?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function b(R,E){let K;return R?E===null||E===gi||E===ns?K=i.DEPTH24_STENCIL8:E===Sn?K=i.DEPTH32F_STENCIL8:E===Ds&&(K=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===gi||E===ns?K=i.DEPTH_COMPONENT24:E===Sn?K=i.DEPTH_COMPONENT32F:E===Ds&&(K=i.DEPTH_COMPONENT16),K}function w(R,E){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ye&&R.minFilter!==rn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function q(R){const E=R.target;E.removeEventListener("dispose",q),D(E),E.isVideoTexture&&d.delete(E)}function N(R){const E=R.target;E.removeEventListener("dispose",N),Q(E)}function D(R){const E=n.get(R);if(E.__webglInit===void 0)return;const K=R.source,st=c.get(K);if(st){const ut=st[E.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&Y(R),Object.keys(st).length===0&&c.delete(K)}n.remove(R)}function Y(R){const E=n.get(R);i.deleteTexture(E.__webglTexture);const K=R.source,st=c.get(K);delete st[E.__cacheKey],a.memory.textures--}function Q(R){const E=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(E.__webglFramebuffer[st]))for(let ut=0;ut<E.__webglFramebuffer[st].length;ut++)i.deleteFramebuffer(E.__webglFramebuffer[st][ut]);else i.deleteFramebuffer(E.__webglFramebuffer[st]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[st])}else{if(Array.isArray(E.__webglFramebuffer))for(let st=0;st<E.__webglFramebuffer.length;st++)i.deleteFramebuffer(E.__webglFramebuffer[st]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let st=0;st<E.__webglColorRenderbuffer.length;st++)E.__webglColorRenderbuffer[st]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[st]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const K=R.textures;for(let st=0,ut=K.length;st<ut;st++){const rt=n.get(K[st]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),a.memory.textures--),n.remove(K[st])}n.remove(R)}let v=0;function S(){v=0}function X(){const R=v;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),v+=1,R}function I(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function H(R,E){const K=n.get(R);if(R.isVideoTexture&&Nt(R),R.isRenderTargetTexture===!1&&R.version>0&&K.__version!==R.version){const st=R.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(K,R,E);return}}e.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+E)}function O(R,E){const K=n.get(R);if(R.version>0&&K.__version!==R.version){$(K,R,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+E)}function _(R,E){const K=n.get(R);if(R.version>0&&K.__version!==R.version){$(K,R,E);return}e.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+E)}function y(R,E){const K=n.get(R);if(R.version>0&&K.__version!==R.version){z(K,R,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+E)}const x={[Jn]:i.REPEAT,[fi]:i.CLAMP_TO_EDGE,[$a]:i.MIRRORED_REPEAT},C={[Ye]:i.NEAREST,[du]:i.NEAREST_MIPMAP_NEAREST,[Ws]:i.NEAREST_MIPMAP_LINEAR,[rn]:i.LINEAR,[Zr]:i.LINEAR_MIPMAP_NEAREST,[pi]:i.LINEAR_MIPMAP_LINEAR},L={[gu]:i.NEVER,[Su]:i.ALWAYS,[_u]:i.LESS,[kc]:i.LEQUAL,[vu]:i.EQUAL,[yu]:i.GEQUAL,[xu]:i.GREATER,[Mu]:i.NOTEQUAL};function P(R,E){if(E.type===Sn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===rn||E.magFilter===Zr||E.magFilter===Ws||E.magFilter===pi||E.minFilter===rn||E.minFilter===Zr||E.minFilter===Ws||E.minFilter===pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,x[E.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,x[E.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,x[E.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,C[E.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,C[E.minFilter]),E.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,L[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ye||E.minFilter!==Ws&&E.minFilter!==pi||E.type===Sn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function tt(R,E){let K=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",q));const st=E.source;let ut=c.get(st);ut===void 0&&(ut={},c.set(st,ut));const rt=I(E);if(rt!==R.__cacheKey){ut[rt]===void 0&&(ut[rt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,K=!0),ut[rt].usedTimes++;const Pt=ut[R.__cacheKey];Pt!==void 0&&(ut[R.__cacheKey].usedTimes--,Pt.usedTimes===0&&Y(E)),R.__cacheKey=rt,R.__webglTexture=ut[rt].texture}return K}function $(R,E,K){let st=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(st=i.TEXTURE_3D);const ut=tt(R,E),rt=E.source;e.bindTexture(st,R.__webglTexture,i.TEXTURE0+K);const Pt=n.get(rt);if(rt.version!==Pt.__version||ut===!0){e.activeTexture(i.TEXTURE0+K);const xt=oe.getPrimaries(oe.workingColorSpace),yt=E.colorSpace===$n?null:oe.getPrimaries(E.colorSpace),jt=E.colorSpace===$n||xt===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let ft=M(E.image,!1,s.maxTextureSize);ft=le(E,ft);const wt=r.convert(E.format,E.colorSpace),Bt=r.convert(E.type);let zt=A(E.internalFormat,wt,Bt,E.colorSpace,E.isVideoTexture);P(st,E);let Tt;const Jt=E.mipmaps,Ut=E.isVideoTexture!==!0,he=Pt.__version===void 0||ut===!0,V=rt.dataReady,gt=w(E,ft);if(E.isDepthTexture)zt=b(E.format===is,E.type),he&&(Ut?e.texStorage2D(i.TEXTURE_2D,1,zt,ft.width,ft.height):e.texImage2D(i.TEXTURE_2D,0,zt,ft.width,ft.height,0,wt,Bt,null));else if(E.isDataTexture)if(Jt.length>0){Ut&&he&&e.texStorage2D(i.TEXTURE_2D,gt,zt,Jt[0].width,Jt[0].height);for(let nt=0,ht=Jt.length;nt<ht;nt++)Tt=Jt[nt],Ut?V&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,Tt.width,Tt.height,wt,Bt,Tt.data):e.texImage2D(i.TEXTURE_2D,nt,zt,Tt.width,Tt.height,0,wt,Bt,Tt.data);E.generateMipmaps=!1}else Ut?(he&&e.texStorage2D(i.TEXTURE_2D,gt,zt,ft.width,ft.height),V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft.width,ft.height,wt,Bt,ft.data)):e.texImage2D(i.TEXTURE_2D,0,zt,ft.width,ft.height,0,wt,Bt,ft.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ut&&he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,zt,Jt[0].width,Jt[0].height,ft.depth);for(let nt=0,ht=Jt.length;nt<ht;nt++)if(Tt=Jt[nt],E.format!==pn)if(wt!==null)if(Ut){if(V)if(E.layerUpdates.size>0){const Et=$l(Tt.width,Tt.height,E.format,E.type);for(const bt of E.layerUpdates){const te=Tt.data.subarray(bt*Et/Tt.data.BYTES_PER_ELEMENT,(bt+1)*Et/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,bt,Tt.width,Tt.height,1,wt,te,0,0)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,Tt.width,Tt.height,ft.depth,wt,Tt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,zt,Tt.width,Tt.height,ft.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?V&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,Tt.width,Tt.height,ft.depth,wt,Bt,Tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,zt,Tt.width,Tt.height,ft.depth,0,wt,Bt,Tt.data)}else{Ut&&he&&e.texStorage2D(i.TEXTURE_2D,gt,zt,Jt[0].width,Jt[0].height);for(let nt=0,ht=Jt.length;nt<ht;nt++)Tt=Jt[nt],E.format!==pn?wt!==null?Ut?V&&e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,Tt.width,Tt.height,wt,Tt.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,zt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?V&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,Tt.width,Tt.height,wt,Bt,Tt.data):e.texImage2D(i.TEXTURE_2D,nt,zt,Tt.width,Tt.height,0,wt,Bt,Tt.data)}else if(E.isDataArrayTexture)if(Ut){if(he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,zt,ft.width,ft.height,ft.depth),V)if(E.layerUpdates.size>0){const nt=$l(ft.width,ft.height,E.format,E.type);for(const ht of E.layerUpdates){const Et=ft.data.subarray(ht*nt/ft.data.BYTES_PER_ELEMENT,(ht+1)*nt/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ht,ft.width,ft.height,1,wt,Bt,Et)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,wt,Bt,ft.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,zt,ft.width,ft.height,ft.depth,0,wt,Bt,ft.data);else if(E.isData3DTexture)Ut?(he&&e.texStorage3D(i.TEXTURE_3D,gt,zt,ft.width,ft.height,ft.depth),V&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,wt,Bt,ft.data)):e.texImage3D(i.TEXTURE_3D,0,zt,ft.width,ft.height,ft.depth,0,wt,Bt,ft.data);else if(E.isFramebufferTexture){if(he)if(Ut)e.texStorage2D(i.TEXTURE_2D,gt,zt,ft.width,ft.height);else{let nt=ft.width,ht=ft.height;for(let Et=0;Et<gt;Et++)e.texImage2D(i.TEXTURE_2D,Et,zt,nt,ht,0,wt,Bt,null),nt>>=1,ht>>=1}}else if(Jt.length>0){if(Ut&&he){const nt=It(Jt[0]);e.texStorage2D(i.TEXTURE_2D,gt,zt,nt.width,nt.height)}for(let nt=0,ht=Jt.length;nt<ht;nt++)Tt=Jt[nt],Ut?V&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,wt,Bt,Tt):e.texImage2D(i.TEXTURE_2D,nt,zt,wt,Bt,Tt);E.generateMipmaps=!1}else if(Ut){if(he){const nt=It(ft);e.texStorage2D(i.TEXTURE_2D,gt,zt,nt.width,nt.height)}V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt,Bt,ft)}else e.texImage2D(i.TEXTURE_2D,0,zt,wt,Bt,ft);f(E)&&g(st),Pt.__version=rt.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function z(R,E,K){if(E.image.length!==6)return;const st=tt(R,E),ut=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+K);const rt=n.get(ut);if(ut.version!==rt.__version||st===!0){e.activeTexture(i.TEXTURE0+K);const Pt=oe.getPrimaries(oe.workingColorSpace),xt=E.colorSpace===$n?null:oe.getPrimaries(E.colorSpace),yt=E.colorSpace===$n||Pt===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const jt=E.isCompressedTexture||E.image[0].isCompressedTexture,ft=E.image[0]&&E.image[0].isDataTexture,wt=[];for(let ht=0;ht<6;ht++)!jt&&!ft?wt[ht]=M(E.image[ht],!0,s.maxCubemapSize):wt[ht]=ft?E.image[ht].image:E.image[ht],wt[ht]=le(E,wt[ht]);const Bt=wt[0],zt=r.convert(E.format,E.colorSpace),Tt=r.convert(E.type),Jt=A(E.internalFormat,zt,Tt,E.colorSpace),Ut=E.isVideoTexture!==!0,he=rt.__version===void 0||st===!0,V=ut.dataReady;let gt=w(E,Bt);P(i.TEXTURE_CUBE_MAP,E);let nt;if(jt){Ut&&he&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Jt,Bt.width,Bt.height);for(let ht=0;ht<6;ht++){nt=wt[ht].mipmaps;for(let Et=0;Et<nt.length;Et++){const bt=nt[Et];E.format!==pn?zt!==null?Ut?V&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Et,0,0,bt.width,bt.height,zt,bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Et,Jt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Et,0,0,bt.width,bt.height,zt,Tt,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Et,Jt,bt.width,bt.height,0,zt,Tt,bt.data)}}}else{if(nt=E.mipmaps,Ut&&he){nt.length>0&&gt++;const ht=It(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Jt,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(ft){Ut?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,wt[ht].width,wt[ht].height,zt,Tt,wt[ht].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Jt,wt[ht].width,wt[ht].height,0,zt,Tt,wt[ht].data);for(let Et=0;Et<nt.length;Et++){const te=nt[Et].image[ht].image;Ut?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Et+1,0,0,te.width,te.height,zt,Tt,te.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Et+1,Jt,te.width,te.height,0,zt,Tt,te.data)}}else{Ut?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,zt,Tt,wt[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Jt,zt,Tt,wt[ht]);for(let Et=0;Et<nt.length;Et++){const bt=nt[Et];Ut?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Et+1,0,0,zt,Tt,bt.image[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Et+1,Jt,zt,Tt,bt.image[ht])}}}f(E)&&g(i.TEXTURE_CUBE_MAP),rt.__version=ut.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Z(R,E,K,st,ut,rt){const Pt=r.convert(K.format,K.colorSpace),xt=r.convert(K.type),yt=A(K.internalFormat,Pt,xt,K.colorSpace);if(!n.get(E).__hasExternalTextures){const ft=Math.max(1,E.width>>rt),wt=Math.max(1,E.height>>rt);ut===i.TEXTURE_3D||ut===i.TEXTURE_2D_ARRAY?e.texImage3D(ut,rt,yt,ft,wt,E.depth,0,Pt,xt,null):e.texImage2D(ut,rt,yt,ft,wt,0,Pt,xt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Xt(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,ut,n.get(K).__webglTexture,0,Ht(E)):(ut===i.TEXTURE_2D||ut>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,ut,n.get(K).__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(R,E,K){if(i.bindRenderbuffer(i.RENDERBUFFER,R),E.depthBuffer){const st=E.depthTexture,ut=st&&st.isDepthTexture?st.type:null,rt=b(E.stencilBuffer,ut),Pt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=Ht(E);Xt(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt,rt,E.width,E.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,rt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,rt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pt,i.RENDERBUFFER,R)}else{const st=E.textures;for(let ut=0;ut<st.length;ut++){const rt=st[ut],Pt=r.convert(rt.format,rt.colorSpace),xt=r.convert(rt.type),yt=A(rt.internalFormat,Pt,xt,rt.colorSpace),jt=Ht(E);K&&Xt(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,jt,yt,E.width,E.height):Xt(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,jt,yt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,yt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ct(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),H(E.depthTexture,0);const st=n.get(E.depthTexture).__webglTexture,ut=Ht(E);if(E.depthTexture.format===ji)Xt(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0);else if(E.depthTexture.format===is)Xt(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function mt(R){const E=n.get(R),K=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const st=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),st){const ut=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,st.removeEventListener("dispose",ut)};st.addEventListener("dispose",ut),E.__depthDisposeCallback=ut}E.__boundDepthTexture=st}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");ct(E.__webglFramebuffer,R)}else if(K){E.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[st]),E.__webglDepthbuffer[st]===void 0)E.__webglDepthbuffer[st]=i.createRenderbuffer(),at(E.__webglDepthbuffer[st],R,!1);else{const ut=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=E.__webglDepthbuffer[st];i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,rt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),at(E.__webglDepthbuffer,R,!1);else{const st=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,ut)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function St(R,E,K){const st=n.get(R);E!==void 0&&Z(st.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&mt(R)}function Wt(R){const E=R.texture,K=n.get(R),st=n.get(E);R.addEventListener("dispose",N);const ut=R.textures,rt=R.isWebGLCubeRenderTarget===!0,Pt=ut.length>1;if(Pt||(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=E.version,a.memory.textures++),rt){K.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer[xt]=[];for(let yt=0;yt<E.mipmaps.length;yt++)K.__webglFramebuffer[xt][yt]=i.createFramebuffer()}else K.__webglFramebuffer[xt]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer=[];for(let xt=0;xt<E.mipmaps.length;xt++)K.__webglFramebuffer[xt]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(Pt)for(let xt=0,yt=ut.length;xt<yt;xt++){const jt=n.get(ut[xt]);jt.__webglTexture===void 0&&(jt.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Xt(R)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let xt=0;xt<ut.length;xt++){const yt=ut[xt];K.__webglColorRenderbuffer[xt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[xt]);const jt=r.convert(yt.format,yt.colorSpace),ft=r.convert(yt.type),wt=A(yt.internalFormat,jt,ft,yt.colorSpace,R.isXRRenderTarget===!0),Bt=Ht(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,wt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,K.__webglColorRenderbuffer[xt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),at(K.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),P(i.TEXTURE_CUBE_MAP,E);for(let xt=0;xt<6;xt++)if(E.mipmaps&&E.mipmaps.length>0)for(let yt=0;yt<E.mipmaps.length;yt++)Z(K.__webglFramebuffer[xt][yt],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,yt);else Z(K.__webglFramebuffer[xt],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);f(E)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let xt=0,yt=ut.length;xt<yt;xt++){const jt=ut[xt],ft=n.get(jt);e.bindTexture(i.TEXTURE_2D,ft.__webglTexture),P(i.TEXTURE_2D,jt),Z(K.__webglFramebuffer,R,jt,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,0),f(jt)&&g(i.TEXTURE_2D)}e.unbindTexture()}else{let xt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(xt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,st.__webglTexture),P(xt,E),E.mipmaps&&E.mipmaps.length>0)for(let yt=0;yt<E.mipmaps.length;yt++)Z(K.__webglFramebuffer[yt],R,E,i.COLOR_ATTACHMENT0,xt,yt);else Z(K.__webglFramebuffer,R,E,i.COLOR_ATTACHMENT0,xt,0);f(E)&&g(xt),e.unbindTexture()}R.depthBuffer&&mt(R)}function ne(R){const E=R.textures;for(let K=0,st=E.length;K<st;K++){const ut=E[K];if(f(ut)){const rt=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Pt=n.get(ut).__webglTexture;e.bindTexture(rt,Pt),g(rt),e.unbindTexture()}}}const Yt=[],B=[];function ge(R){if(R.samples>0){if(Xt(R)===!1){const E=R.textures,K=R.width,st=R.height;let ut=i.COLOR_BUFFER_BIT;const rt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=n.get(R),xt=E.length>1;if(xt)for(let yt=0;yt<E.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let yt=0;yt<E.length;yt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ut|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ut|=i.STENCIL_BUFFER_BIT)),xt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[yt]);const jt=n.get(E[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,jt,0)}i.blitFramebuffer(0,0,K,st,0,0,K,st,ut,i.NEAREST),l===!0&&(Yt.length=0,B.length=0,Yt.push(i.COLOR_ATTACHMENT0+yt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Yt.push(rt),B.push(rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Yt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xt)for(let yt=0;yt<E.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[yt]);const jt=n.get(E[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Ht(R){return Math.min(s.maxSamples,R.samples)}function Xt(R){const E=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Nt(R){const E=a.render.frame;d.get(R)!==E&&(d.set(R,E),R.update())}function le(R,E){const K=R.colorSpace,st=R.format,ut=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||K!==ti&&K!==$n&&(oe.getTransfer(K)===me?(st!==pn||ut!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),E}function It(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(h.width=R.naturalWidth||R.width,h.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(h.width=R.displayWidth,h.height=R.displayHeight):(h.width=R.width,h.height=R.height),h}this.allocateTextureUnit=X,this.resetTextureUnits=S,this.setTexture2D=H,this.setTexture2DArray=O,this.setTexture3D=_,this.setTextureCube=y,this.rebindTextures=St,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=Xt}function G0(i,t){function e(n,s=$n){let r;const a=oe.getTransfer(s);if(n===Nn)return i.UNSIGNED_BYTE;if(n===Do)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Io)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Dc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pc)return i.BYTE;if(n===Lc)return i.SHORT;if(n===Ds)return i.UNSIGNED_SHORT;if(n===Lo)return i.INT;if(n===gi)return i.UNSIGNED_INT;if(n===Sn)return i.FLOAT;if(n===Os)return i.HALF_FLOAT;if(n===Ic)return i.ALPHA;if(n===Uc)return i.RGB;if(n===pn)return i.RGBA;if(n===Nc)return i.LUMINANCE;if(n===Fc)return i.LUMINANCE_ALPHA;if(n===ji)return i.DEPTH_COMPONENT;if(n===is)return i.DEPTH_STENCIL;if(n===Uo)return i.RED;if(n===No)return i.RED_INTEGER;if(n===Oc)return i.RG;if(n===Fo)return i.RG_INTEGER;if(n===Oo)return i.RGBA_INTEGER;if(n===Sr||n===Er||n===br||n===wr)if(a===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Sr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Sr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Za||n===Ka||n===ja||n===Ja)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ka)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ja)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Qa||n===to||n===eo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Qa||n===to)return a===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===eo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===mo||n===go)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===no)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===io)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===so)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ro)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ao)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===lo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===co)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ho)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===po)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===mo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===go)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Tr||n===_o||n===vo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Tr)return a===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_o)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bc||n===xo||n===Mo||n===yo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Tr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===xo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Mo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ns?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class W0 extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ge extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const X0={type:"move"};class Ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(const M of t.hand.values()){const f=e.getJointPose(M,n),g=this._getHandJoint(h,M);f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=f.radius),g.visible=f!==null}const d=h.joints["index-finger-tip"],p=h.joints["thumb-tip"],c=d.position.distanceTo(p.position),u=.02,m=.005;h.inputState.pinching&&c>u+m?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&c<=u-m&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(X0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ge;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Y0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,q0=`
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

}`;class $0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Be,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Qn({vertexShader:Y0,fragmentShader:q0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Vt(new En(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Z0 extends xi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,h=null,d=null,p=null,c=null,u=null,m=null;const M=new $0,f=e.getContextAttributes();let g=null,A=null;const b=[],w=[],q=new _t;let N=null;const D=new Je;D.layers.enable(1),D.viewport=new fe;const Y=new Je;Y.layers.enable(2),Y.viewport=new fe;const Q=[D,Y],v=new W0;v.layers.enable(1),v.layers.enable(2);let S=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let Z=b[z];return Z===void 0&&(Z=new Ea,b[z]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(z){let Z=b[z];return Z===void 0&&(Z=new Ea,b[z]=Z),Z.getGripSpace()},this.getHand=function(z){let Z=b[z];return Z===void 0&&(Z=new Ea,b[z]=Z),Z.getHandSpace()};function I(z){const Z=w.indexOf(z.inputSource);if(Z===-1)return;const at=b[Z];at!==void 0&&(at.update(z.inputSource,z.frame,h||a),at.dispatchEvent({type:z.type,data:z.inputSource}))}function H(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",O);for(let z=0;z<b.length;z++){const Z=w[z];Z!==null&&(w[z]=null,b[z].disconnect(Z))}S=null,X=null,M.reset(),t.setRenderTarget(g),u=null,c=null,p=null,s=null,A=null,$.stop(),n.isPresenting=!1,t.setPixelRatio(N),t.setSize(q.width,q.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(z){h=z},this.getBaseLayer=function(){return c!==null?c:u},this.getBinding=function(){return p},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",H),s.addEventListener("inputsourceschange",O),f.xrCompatible!==!0&&await e.makeXRCompatible(),N=t.getPixelRatio(),t.getSize(q),s.renderState.layers===void 0){const Z={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,Z),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),A=new _i(u.framebufferWidth,u.framebufferHeight,{format:pn,type:Nn,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let Z=null,at=null,ct=null;f.depth&&(ct=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=f.stencil?is:ji,at=f.stencil?ns:gi);const mt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};p=new XRWebGLBinding(s,e),c=p.createProjectionLayer(mt),s.updateRenderState({layers:[c]}),t.setPixelRatio(1),t.setSize(c.textureWidth,c.textureHeight,!1),A=new _i(c.textureWidth,c.textureHeight,{format:pn,type:Nn,depthTexture:new Jc(c.textureWidth,c.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await s.requestReferenceSpace(o),$.setContext(s),$.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function O(z){for(let Z=0;Z<z.removed.length;Z++){const at=z.removed[Z],ct=w.indexOf(at);ct>=0&&(w[ct]=null,b[ct].disconnect(at))}for(let Z=0;Z<z.added.length;Z++){const at=z.added[Z];let ct=w.indexOf(at);if(ct===-1){for(let St=0;St<b.length;St++)if(St>=w.length){w.push(at),ct=St;break}else if(w[St]===null){w[St]=at,ct=St;break}if(ct===-1)break}const mt=b[ct];mt&&mt.connect(at)}}const _=new F,y=new F;function x(z,Z,at){_.setFromMatrixPosition(Z.matrixWorld),y.setFromMatrixPosition(at.matrixWorld);const ct=_.distanceTo(y),mt=Z.projectionMatrix.elements,St=at.projectionMatrix.elements,Wt=mt[14]/(mt[10]-1),ne=mt[14]/(mt[10]+1),Yt=(mt[9]+1)/mt[5],B=(mt[9]-1)/mt[5],ge=(mt[8]-1)/mt[0],Ht=(St[8]+1)/St[0],Xt=Wt*ge,Nt=Wt*Ht,le=ct/(-ge+Ht),It=le*-ge;if(Z.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(It),z.translateZ(le),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),mt[10]===-1)z.projectionMatrix.copy(Z.projectionMatrix),z.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const R=Wt+le,E=ne+le,K=Xt-It,st=Nt+(ct-It),ut=Yt*ne/E*R,rt=B*ne/E*R;z.projectionMatrix.makePerspective(K,st,ut,rt,R,E),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function C(z,Z){Z===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(Z.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;let Z=z.near,at=z.far;M.texture!==null&&(M.depthNear>0&&(Z=M.depthNear),M.depthFar>0&&(at=M.depthFar)),v.near=Y.near=D.near=Z,v.far=Y.far=D.far=at,(S!==v.near||X!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),S=v.near,X=v.far);const ct=z.parent,mt=v.cameras;C(v,ct);for(let St=0;St<mt.length;St++)C(mt[St],ct);mt.length===2?x(v,D,Y):v.projectionMatrix.copy(D.projectionMatrix),L(z,v,ct)};function L(z,Z,at){at===null?z.matrix.copy(Z.matrixWorld):(z.matrix.copy(at.matrixWorld),z.matrix.invert(),z.matrix.multiply(Z.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(Z.projectionMatrix),z.projectionMatrixInverse.copy(Z.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Is*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(c===null&&u===null))return l},this.setFoveation=function(z){l=z,c!==null&&(c.fixedFoveation=z),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=z)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(v)};let P=null;function tt(z,Z){if(d=Z.getViewerPose(h||a),m=Z,d!==null){const at=d.views;u!==null&&(t.setRenderTargetFramebuffer(A,u.framebuffer),t.setRenderTarget(A));let ct=!1;at.length!==v.cameras.length&&(v.cameras.length=0,ct=!0);for(let St=0;St<at.length;St++){const Wt=at[St];let ne=null;if(u!==null)ne=u.getViewport(Wt);else{const B=p.getViewSubImage(c,Wt);ne=B.viewport,St===0&&(t.setRenderTargetTextures(A,B.colorTexture,c.ignoreDepthValues?void 0:B.depthStencilTexture),t.setRenderTarget(A))}let Yt=Q[St];Yt===void 0&&(Yt=new Je,Yt.layers.enable(St),Yt.viewport=new fe,Q[St]=Yt),Yt.matrix.fromArray(Wt.transform.matrix),Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Yt.projectionMatrix.fromArray(Wt.projectionMatrix),Yt.projectionMatrixInverse.copy(Yt.projectionMatrix).invert(),Yt.viewport.set(ne.x,ne.y,ne.width,ne.height),St===0&&(v.matrix.copy(Yt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ct===!0&&v.cameras.push(Yt)}const mt=s.enabledFeatures;if(mt&&mt.includes("depth-sensing")){const St=p.getDepthInformation(at[0]);St&&St.isValid&&St.texture&&M.init(t,St,s.renderState)}}for(let at=0;at<b.length;at++){const ct=w[at],mt=b[at];ct!==null&&mt!==void 0&&mt.update(ct,Z,h||a)}P&&P(z,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),m=null}const $=new Kc;$.setAnimationLoop(tt),this.setAnimationLoop=function(z){P=z},this.dispose=function(){}}}const li=new on,K0=new re;function j0(i,t){function e(f,g){f.matrixAutoUpdate===!0&&f.updateMatrix(),g.value.copy(f.matrix)}function n(f,g){g.color.getRGB(f.fogColor.value,qc(i)),g.isFog?(f.fogNear.value=g.near,f.fogFar.value=g.far):g.isFogExp2&&(f.fogDensity.value=g.density)}function s(f,g,A,b,w){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(f,g):g.isMeshToonMaterial?(r(f,g),p(f,g)):g.isMeshPhongMaterial?(r(f,g),d(f,g)):g.isMeshStandardMaterial?(r(f,g),c(f,g),g.isMeshPhysicalMaterial&&u(f,g,w)):g.isMeshMatcapMaterial?(r(f,g),m(f,g)):g.isMeshDepthMaterial?r(f,g):g.isMeshDistanceMaterial?(r(f,g),M(f,g)):g.isMeshNormalMaterial?r(f,g):g.isLineBasicMaterial?(a(f,g),g.isLineDashedMaterial&&o(f,g)):g.isPointsMaterial?l(f,g,A,b):g.isSpriteMaterial?h(f,g):g.isShadowMaterial?(f.color.value.copy(g.color),f.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(f,g){f.opacity.value=g.opacity,g.color&&f.diffuse.value.copy(g.color),g.emissive&&f.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(f.map.value=g.map,e(g.map,f.mapTransform)),g.alphaMap&&(f.alphaMap.value=g.alphaMap,e(g.alphaMap,f.alphaMapTransform)),g.bumpMap&&(f.bumpMap.value=g.bumpMap,e(g.bumpMap,f.bumpMapTransform),f.bumpScale.value=g.bumpScale,g.side===We&&(f.bumpScale.value*=-1)),g.normalMap&&(f.normalMap.value=g.normalMap,e(g.normalMap,f.normalMapTransform),f.normalScale.value.copy(g.normalScale),g.side===We&&f.normalScale.value.negate()),g.displacementMap&&(f.displacementMap.value=g.displacementMap,e(g.displacementMap,f.displacementMapTransform),f.displacementScale.value=g.displacementScale,f.displacementBias.value=g.displacementBias),g.emissiveMap&&(f.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,f.emissiveMapTransform)),g.specularMap&&(f.specularMap.value=g.specularMap,e(g.specularMap,f.specularMapTransform)),g.alphaTest>0&&(f.alphaTest.value=g.alphaTest);const A=t.get(g),b=A.envMap,w=A.envMapRotation;b&&(f.envMap.value=b,li.copy(w),li.x*=-1,li.y*=-1,li.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),f.envMapRotation.value.setFromMatrix4(K0.makeRotationFromEuler(li)),f.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=g.reflectivity,f.ior.value=g.ior,f.refractionRatio.value=g.refractionRatio),g.lightMap&&(f.lightMap.value=g.lightMap,f.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,f.lightMapTransform)),g.aoMap&&(f.aoMap.value=g.aoMap,f.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,f.aoMapTransform))}function a(f,g){f.diffuse.value.copy(g.color),f.opacity.value=g.opacity,g.map&&(f.map.value=g.map,e(g.map,f.mapTransform))}function o(f,g){f.dashSize.value=g.dashSize,f.totalSize.value=g.dashSize+g.gapSize,f.scale.value=g.scale}function l(f,g,A,b){f.diffuse.value.copy(g.color),f.opacity.value=g.opacity,f.size.value=g.size*A,f.scale.value=b*.5,g.map&&(f.map.value=g.map,e(g.map,f.uvTransform)),g.alphaMap&&(f.alphaMap.value=g.alphaMap,e(g.alphaMap,f.alphaMapTransform)),g.alphaTest>0&&(f.alphaTest.value=g.alphaTest)}function h(f,g){f.diffuse.value.copy(g.color),f.opacity.value=g.opacity,f.rotation.value=g.rotation,g.map&&(f.map.value=g.map,e(g.map,f.mapTransform)),g.alphaMap&&(f.alphaMap.value=g.alphaMap,e(g.alphaMap,f.alphaMapTransform)),g.alphaTest>0&&(f.alphaTest.value=g.alphaTest)}function d(f,g){f.specular.value.copy(g.specular),f.shininess.value=Math.max(g.shininess,1e-4)}function p(f,g){g.gradientMap&&(f.gradientMap.value=g.gradientMap)}function c(f,g){f.metalness.value=g.metalness,g.metalnessMap&&(f.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,f.metalnessMapTransform)),f.roughness.value=g.roughness,g.roughnessMap&&(f.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,f.roughnessMapTransform)),g.envMap&&(f.envMapIntensity.value=g.envMapIntensity)}function u(f,g,A){f.ior.value=g.ior,g.sheen>0&&(f.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),f.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(f.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,f.sheenColorMapTransform)),g.sheenRoughnessMap&&(f.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,f.sheenRoughnessMapTransform))),g.clearcoat>0&&(f.clearcoat.value=g.clearcoat,f.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(f.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,f.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(f.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===We&&f.clearcoatNormalScale.value.negate())),g.dispersion>0&&(f.dispersion.value=g.dispersion),g.iridescence>0&&(f.iridescence.value=g.iridescence,f.iridescenceIOR.value=g.iridescenceIOR,f.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(f.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,f.iridescenceMapTransform)),g.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),g.transmission>0&&(f.transmission.value=g.transmission,f.transmissionSamplerMap.value=A.texture,f.transmissionSamplerSize.value.set(A.width,A.height),g.transmissionMap&&(f.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,f.transmissionMapTransform)),f.thickness.value=g.thickness,g.thicknessMap&&(f.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=g.attenuationDistance,f.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(f.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(f.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=g.specularIntensity,f.specularColor.value.copy(g.specularColor),g.specularColorMap&&(f.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,f.specularColorMapTransform)),g.specularIntensityMap&&(f.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,f.specularIntensityMapTransform))}function m(f,g){g.matcap&&(f.matcap.value=g.matcap)}function M(f,g){const A=t.get(g).light;f.referencePosition.value.setFromMatrixPosition(A.matrixWorld),f.nearDistance.value=A.shadow.camera.near,f.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function J0(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,b){const w=b.program;n.uniformBlockBinding(A,w)}function h(A,b){let w=s[A.id];w===void 0&&(m(A),w=d(A),s[A.id]=w,A.addEventListener("dispose",f));const q=b.program;n.updateUBOMapping(A,q);const N=t.render.frame;r[A.id]!==N&&(c(A),r[A.id]=N)}function d(A){const b=p();A.__bindingPointIndex=b;const w=i.createBuffer(),q=A.__size,N=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,q,N),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,w),w}function p(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(A){const b=s[A.id],w=A.uniforms,q=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let N=0,D=w.length;N<D;N++){const Y=Array.isArray(w[N])?w[N]:[w[N]];for(let Q=0,v=Y.length;Q<v;Q++){const S=Y[Q];if(u(S,N,Q,q)===!0){const X=S.__offset,I=Array.isArray(S.value)?S.value:[S.value];let H=0;for(let O=0;O<I.length;O++){const _=I[O],y=M(_);typeof _=="number"||typeof _=="boolean"?(S.__data[0]=_,i.bufferSubData(i.UNIFORM_BUFFER,X+H,S.__data)):_.isMatrix3?(S.__data[0]=_.elements[0],S.__data[1]=_.elements[1],S.__data[2]=_.elements[2],S.__data[3]=0,S.__data[4]=_.elements[3],S.__data[5]=_.elements[4],S.__data[6]=_.elements[5],S.__data[7]=0,S.__data[8]=_.elements[6],S.__data[9]=_.elements[7],S.__data[10]=_.elements[8],S.__data[11]=0):(_.toArray(S.__data,H),H+=y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(A,b,w,q){const N=A.value,D=b+"_"+w;if(q[D]===void 0)return typeof N=="number"||typeof N=="boolean"?q[D]=N:q[D]=N.clone(),!0;{const Y=q[D];if(typeof N=="number"||typeof N=="boolean"){if(Y!==N)return q[D]=N,!0}else if(Y.equals(N)===!1)return Y.copy(N),!0}return!1}function m(A){const b=A.uniforms;let w=0;const q=16;for(let D=0,Y=b.length;D<Y;D++){const Q=Array.isArray(b[D])?b[D]:[b[D]];for(let v=0,S=Q.length;v<S;v++){const X=Q[v],I=Array.isArray(X.value)?X.value:[X.value];for(let H=0,O=I.length;H<O;H++){const _=I[H],y=M(_),x=w%q,C=x%y.boundary,L=x+C;w+=C,L!==0&&q-L<y.storage&&(w+=q-L),X.__data=new Float32Array(y.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=w,w+=y.storage}}}const N=w%q;return N>0&&(w+=q-N),A.__size=w,A.__cache={},this}function M(A){const b={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(b.boundary=4,b.storage=4):A.isVector2?(b.boundary=8,b.storage=8):A.isVector3||A.isColor?(b.boundary=16,b.storage=12):A.isVector4?(b.boundary=16,b.storage=16):A.isMatrix3?(b.boundary=48,b.storage=48):A.isMatrix4?(b.boundary=64,b.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),b}function f(A){const b=A.target;b.removeEventListener("dispose",f);const w=a.indexOf(b.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function g(){for(const A in s)i.deleteBuffer(s[A]);a=[],s={},r={}}return{bind:l,update:h,dispose:g}}class Q0{constructor(t={}){const{canvas:e=zu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1}=t;this.isWebGLRenderer=!0;let c;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");c=n.getContextAttributes().alpha}else c=a;const u=new Uint32Array(4),m=new Int32Array(4);let M=null,f=null;const g=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Oe,this.toneMapping=Kn,this.toneMappingExposure=1;const b=this;let w=!1,q=0,N=0,D=null,Y=-1,Q=null;const v=new fe,S=new fe;let X=null;const I=new Gt(0);let H=0,O=e.width,_=e.height,y=1,x=null,C=null;const L=new fe(0,0,O,_),P=new fe(0,0,O,_);let tt=!1;const $=new Vo;let z=!1,Z=!1;const at=new re,ct=new re,mt=new F,St=new fe,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ne=!1;function Yt(){return D===null?y:1}let B=n;function ge(T,W){return e.getContext(T,W)}try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Po}`),e.addEventListener("webglcontextlost",ht,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",bt,!1),B===null){const W="webgl2";if(B=ge(W,T),B===null)throw ge(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ht,Xt,Nt,le,It,R,E,K,st,ut,rt,Pt,xt,yt,jt,ft,wt,Bt,zt,Tt,Jt,Ut,he,V;function gt(){Ht=new sm(B),Ht.init(),Ut=new G0(B,Ht),Xt=new Jp(B,Ht,t,Ut),Nt=new k0(B),Xt.reverseDepthBuffer&&Nt.buffers.depth.setReversed(!0),le=new om(B),It=new w0,R=new V0(B,Ht,Nt,It,Xt,Ut,le),E=new tm(b),K=new im(b),st=new fd(B),he=new Kp(B,st),ut=new rm(B,st,le,he),rt=new cm(B,ut,st,le),zt=new lm(B,Xt,R),ft=new Qp(It),Pt=new b0(b,E,K,Ht,Xt,he,ft),xt=new j0(b,It),yt=new A0,jt=new I0(Ht),Bt=new Zp(b,E,K,Nt,rt,c,l),wt=new B0(b,rt,Xt),V=new J0(B,le,Xt,Nt),Tt=new jp(B,Ht,le),Jt=new am(B,Ht,le),le.programs=Pt.programs,b.capabilities=Xt,b.extensions=Ht,b.properties=It,b.renderLists=yt,b.shadowMap=wt,b.state=Nt,b.info=le}gt();const nt=new Z0(b,B);this.xr=nt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const T=Ht.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ht.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return y},this.setPixelRatio=function(T){T!==void 0&&(y=T,this.setSize(O,_,!1))},this.getSize=function(T){return T.set(O,_)},this.setSize=function(T,W,j=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=T,_=W,e.width=Math.floor(T*y),e.height=Math.floor(W*y),j===!0&&(e.style.width=T+"px",e.style.height=W+"px"),this.setViewport(0,0,T,W)},this.getDrawingBufferSize=function(T){return T.set(O*y,_*y).floor()},this.setDrawingBufferSize=function(T,W,j){O=T,_=W,y=j,e.width=Math.floor(T*j),e.height=Math.floor(W*j),this.setViewport(0,0,T,W)},this.getCurrentViewport=function(T){return T.copy(v)},this.getViewport=function(T){return T.copy(L)},this.setViewport=function(T,W,j,J){T.isVector4?L.set(T.x,T.y,T.z,T.w):L.set(T,W,j,J),Nt.viewport(v.copy(L).multiplyScalar(y).round())},this.getScissor=function(T){return T.copy(P)},this.setScissor=function(T,W,j,J){T.isVector4?P.set(T.x,T.y,T.z,T.w):P.set(T,W,j,J),Nt.scissor(S.copy(P).multiplyScalar(y).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(T){Nt.setScissorTest(tt=T)},this.setOpaqueSort=function(T){x=T},this.setTransparentSort=function(T){C=T},this.getClearColor=function(T){return T.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(T=!0,W=!0,j=!0){let J=0;if(T){let G=!1;if(D!==null){const pt=D.texture.format;G=pt===Oo||pt===Fo||pt===No}if(G){const pt=D.texture.type,Mt=pt===Nn||pt===gi||pt===Ds||pt===ns||pt===Do||pt===Io,Ct=Bt.getClearColor(),At=Bt.getClearAlpha(),Ft=Ct.r,U=Ct.g,k=Ct.b;Mt?(u[0]=Ft,u[1]=U,u[2]=k,u[3]=At,B.clearBufferuiv(B.COLOR,0,u)):(m[0]=Ft,m[1]=U,m[2]=k,m[3]=At,B.clearBufferiv(B.COLOR,0,m))}else J|=B.COLOR_BUFFER_BIT}W&&(J|=B.DEPTH_BUFFER_BIT,B.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),j&&(J|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),yt.dispose(),jt.dispose(),It.dispose(),E.dispose(),K.dispose(),rt.dispose(),he.dispose(),V.dispose(),Pt.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",Si),nt.removeEventListener("sessionend",zs),Tn.stop()};function ht(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const T=le.autoReset,W=wt.enabled,j=wt.autoUpdate,J=wt.needsUpdate,G=wt.type;gt(),le.autoReset=T,wt.enabled=W,wt.autoUpdate=j,wt.needsUpdate=J,wt.type=G}function bt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function te(T){const W=T.target;W.removeEventListener("dispose",te),ve(W)}function ve(T){Le(T),It.remove(T)}function Le(T){const W=It.get(T).programs;W!==void 0&&(W.forEach(function(j){Pt.releaseProgram(j)}),T.isShaderMaterial&&Pt.releaseShaderCache(T))}this.renderBufferDirect=function(T,W,j,J,G,pt){W===null&&(W=Wt);const Mt=G.isMesh&&G.matrixWorld.determinant()<0,Ct=Hr(T,W,j,J,G);Nt.setMaterial(J,Mt);let At=j.index,Ft=1;if(J.wireframe===!0){if(At=ut.getWireframeAttribute(j),At===void 0)return;Ft=2}const U=j.drawRange,k=j.attributes.position;let et=U.start*Ft,Rt=(U.start+U.count)*Ft;pt!==null&&(et=Math.max(et,pt.start*Ft),Rt=Math.min(Rt,(pt.start+pt.count)*Ft)),At!==null?(et=Math.max(et,0),Rt=Math.min(Rt,At.count)):k!=null&&(et=Math.max(et,0),Rt=Math.min(Rt,k.count));const kt=Rt-et;if(kt<0||kt===1/0)return;he.setup(G,J,Ct,j,At);let ue,Ot=Tt;if(At!==null&&(ue=st.get(At),Ot=Jt,Ot.setIndex(ue)),G.isMesh)J.wireframe===!0?(Nt.setLineWidth(J.wireframeLinewidth*Yt()),Ot.setMode(B.LINES)):Ot.setMode(B.TRIANGLES);else if(G.isLine){let Lt=J.linewidth;Lt===void 0&&(Lt=1),Nt.setLineWidth(Lt*Yt()),G.isLineSegments?Ot.setMode(B.LINES):G.isLineLoop?Ot.setMode(B.LINE_LOOP):Ot.setMode(B.LINE_STRIP)}else G.isPoints?Ot.setMode(B.POINTS):G.isSprite&&Ot.setMode(B.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Ot.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Ht.get("WEBGL_multi_draw"))Ot.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Lt=G._multiDrawStarts,ae=G._multiDrawCounts,Qt=G._multiDrawCount,Dt=At?st.get(At).bytesPerElement:1,gn=It.get(J).currentProgram.getUniforms();for(let $e=0;$e<Qt;$e++)gn.setValue(B,"_gl_DrawID",$e),Ot.render(Lt[$e]/Dt,ae[$e])}else if(G.isInstancedMesh)Ot.renderInstances(et,kt,G.count);else if(j.isInstancedBufferGeometry){const Lt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,ae=Math.min(j.instanceCount,Lt);Ot.renderInstances(et,kt,ae)}else Ot.render(et,kt)};function qt(T,W,j){T.transparent===!0&&T.side===dn&&T.forceSinglePass===!1?(T.side=We,T.needsUpdate=!0,ei(T,W,j),T.side=jn,T.needsUpdate=!0,ei(T,W,j),T.side=dn):ei(T,W,j)}this.compile=function(T,W,j=null){j===null&&(j=T),f=jt.get(j),f.init(W),A.push(f),j.traverseVisible(function(G){G.isLight&&G.layers.test(W.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),T!==j&&T.traverseVisible(function(G){G.isLight&&G.layers.test(W.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),f.setupLights();const J=new Set;return T.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const pt=G.material;if(pt)if(Array.isArray(pt))for(let Mt=0;Mt<pt.length;Mt++){const Ct=pt[Mt];qt(Ct,j,G),J.add(Ct)}else qt(pt,j,G),J.add(pt)}),A.pop(),f=null,J},this.compileAsync=function(T,W,j=null){const J=this.compile(T,W,j);return new Promise(G=>{function pt(){if(J.forEach(function(Mt){It.get(Mt).currentProgram.isReady()&&J.delete(Mt)}),J.size===0){G(T);return}setTimeout(pt,10)}Ht.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let De=null;function tn(T){De&&De(T)}function Si(){Tn.stop()}function zs(){Tn.start()}const Tn=new Kc;Tn.setAnimationLoop(tn),typeof self<"u"&&Tn.setContext(self),this.setAnimationLoop=function(T){De=T,nt.setAnimationLoop(T),T===null?Tn.stop():Tn.start()},nt.addEventListener("sessionstart",Si),nt.addEventListener("sessionend",zs),this.render=function(T,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(W),W=nt.getCamera()),T.isScene===!0&&T.onBeforeRender(b,T,W,D),f=jt.get(T,A.length),f.init(W),A.push(f),ct.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),$.setFromProjectionMatrix(ct),Z=this.localClippingEnabled,z=ft.init(this.clippingPlanes,Z),M=yt.get(T,g.length),M.init(),g.push(M),nt.enabled===!0&&nt.isPresenting===!0){const pt=b.xr.getDepthSensingMesh();pt!==null&&os(pt,W,-1/0,b.sortObjects)}os(T,W,0,b.sortObjects),M.finish(),b.sortObjects===!0&&M.sort(x,C),ne=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,ne&&Bt.addToRenderList(M,T),this.info.render.frame++,z===!0&&ft.beginShadows();const j=f.state.shadowsArray;wt.render(j,T,W),z===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=M.opaque,G=M.transmissive;if(f.setupLights(),W.isArrayCamera){const pt=W.cameras;if(G.length>0)for(let Mt=0,Ct=pt.length;Mt<Ct;Mt++){const At=pt[Mt];cs(J,G,T,At)}ne&&Bt.render(T);for(let Mt=0,Ct=pt.length;Mt<Ct;Mt++){const At=pt[Mt];ls(M,T,At,At.viewport)}}else G.length>0&&cs(J,G,T,W),ne&&Bt.render(T),ls(M,T,W);D!==null&&(R.updateMultisampleRenderTarget(D),R.updateRenderTargetMipmap(D)),T.isScene===!0&&T.onAfterRender(b,T,W),he.resetDefaultState(),Y=-1,Q=null,A.pop(),A.length>0?(f=A[A.length-1],z===!0&&ft.setGlobalState(b.clippingPlanes,f.state.camera)):f=null,g.pop(),g.length>0?M=g[g.length-1]:M=null};function os(T,W,j,J){if(T.visible===!1)return;if(T.layers.test(W.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(W);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||$.intersectsSprite(T)){J&&St.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ct);const Mt=rt.update(T),Ct=T.material;Ct.visible&&M.push(T,Mt,Ct,j,St.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||$.intersectsObject(T))){const Mt=rt.update(T),Ct=T.material;if(J&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),St.copy(T.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),St.copy(Mt.boundingSphere.center)),St.applyMatrix4(T.matrixWorld).applyMatrix4(ct)),Array.isArray(Ct)){const At=Mt.groups;for(let Ft=0,U=At.length;Ft<U;Ft++){const k=At[Ft],et=Ct[k.materialIndex];et&&et.visible&&M.push(T,Mt,et,j,St.z,k)}}else Ct.visible&&M.push(T,Mt,Ct,j,St.z,null)}}const pt=T.children;for(let Mt=0,Ct=pt.length;Mt<Ct;Mt++)os(pt[Mt],W,j,J)}function ls(T,W,j,J){const G=T.opaque,pt=T.transmissive,Mt=T.transparent;f.setupLightsView(j),z===!0&&ft.setGlobalState(b.clippingPlanes,j),J&&Nt.viewport(v.copy(J)),G.length>0&&Ei(G,W,j),pt.length>0&&Ei(pt,W,j),Mt.length>0&&Ei(Mt,W,j),Nt.buffers.depth.setTest(!0),Nt.buffers.depth.setMask(!0),Nt.buffers.color.setMask(!0),Nt.setPolygonOffset(!1)}function cs(T,W,j,J){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[J.id]===void 0&&(f.state.transmissionRenderTarget[J.id]=new _i(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float")?Os:Nn,minFilter:pi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));const pt=f.state.transmissionRenderTarget[J.id],Mt=J.viewport||v;pt.setSize(Mt.z,Mt.w);const Ct=b.getRenderTarget();b.setRenderTarget(pt),b.getClearColor(I),H=b.getClearAlpha(),H<1&&b.setClearColor(16777215,.5),b.clear(),ne&&Bt.render(j);const At=b.toneMapping;b.toneMapping=Kn;const Ft=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),f.setupLightsView(J),z===!0&&ft.setGlobalState(b.clippingPlanes,J),Ei(T,j,J),R.updateMultisampleRenderTarget(pt),R.updateRenderTargetMipmap(pt),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let U=!1;for(let k=0,et=W.length;k<et;k++){const Rt=W[k],kt=Rt.object,ue=Rt.geometry,Ot=Rt.material,Lt=Rt.group;if(Ot.side===dn&&kt.layers.test(J.layers)){const ae=Ot.side;Ot.side=We,Ot.needsUpdate=!0,hs(kt,j,J,ue,Ot,Lt),Ot.side=ae,Ot.needsUpdate=!0,U=!0}}U===!0&&(R.updateMultisampleRenderTarget(pt),R.updateRenderTargetMipmap(pt))}b.setRenderTarget(Ct),b.setClearColor(I,H),Ft!==void 0&&(J.viewport=Ft),b.toneMapping=At}function Ei(T,W,j){const J=W.isScene===!0?W.overrideMaterial:null;for(let G=0,pt=T.length;G<pt;G++){const Mt=T[G],Ct=Mt.object,At=Mt.geometry,Ft=J===null?Mt.material:J,U=Mt.group;Ct.layers.test(j.layers)&&hs(Ct,W,j,At,Ft,U)}}function hs(T,W,j,J,G,pt){T.onBeforeRender(b,W,j,J,G,pt),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(b,W,j,J,T,pt),G.transparent===!0&&G.side===dn&&G.forceSinglePass===!1?(G.side=We,G.needsUpdate=!0,b.renderBufferDirect(j,W,J,G,T,pt),G.side=jn,G.needsUpdate=!0,b.renderBufferDirect(j,W,J,G,T,pt),G.side=dn):b.renderBufferDirect(j,W,J,G,T,pt),T.onAfterRender(b,W,j,J,G,pt)}function ei(T,W,j){W.isScene!==!0&&(W=Wt);const J=It.get(T),G=f.state.lights,pt=f.state.shadowsArray,Mt=G.state.version,Ct=Pt.getParameters(T,G.state,pt,W,j),At=Pt.getProgramCacheKey(Ct);let Ft=J.programs;J.environment=T.isMeshStandardMaterial?W.environment:null,J.fog=W.fog,J.envMap=(T.isMeshStandardMaterial?K:E).get(T.envMap||J.environment),J.envMapRotation=J.environment!==null&&T.envMap===null?W.environmentRotation:T.envMapRotation,Ft===void 0&&(T.addEventListener("dispose",te),Ft=new Map,J.programs=Ft);let U=Ft.get(At);if(U!==void 0){if(J.currentProgram===U&&J.lightsStateVersion===Mt)return ks(T,Ct),U}else Ct.uniforms=Pt.getUniforms(T),T.onBeforeCompile(Ct,b),U=Pt.acquireProgram(Ct,At),Ft.set(At,U),J.uniforms=Ct.uniforms;const k=J.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(k.clippingPlanes=ft.uniform),ks(T,Ct),J.needsLights=bi(T),J.lightsStateVersion=Mt,J.needsLights&&(k.ambientLightColor.value=G.state.ambient,k.lightProbe.value=G.state.probe,k.directionalLights.value=G.state.directional,k.directionalLightShadows.value=G.state.directionalShadow,k.spotLights.value=G.state.spot,k.spotLightShadows.value=G.state.spotShadow,k.rectAreaLights.value=G.state.rectArea,k.ltc_1.value=G.state.rectAreaLTC1,k.ltc_2.value=G.state.rectAreaLTC2,k.pointLights.value=G.state.point,k.pointLightShadows.value=G.state.pointShadow,k.hemisphereLights.value=G.state.hemi,k.directionalShadowMap.value=G.state.directionalShadowMap,k.directionalShadowMatrix.value=G.state.directionalShadowMatrix,k.spotShadowMap.value=G.state.spotShadowMap,k.spotLightMatrix.value=G.state.spotLightMatrix,k.spotLightMap.value=G.state.spotLightMap,k.pointShadowMap.value=G.state.pointShadowMap,k.pointShadowMatrix.value=G.state.pointShadowMatrix),J.currentProgram=U,J.uniformsList=null,U}function us(T){if(T.uniformsList===null){const W=T.currentProgram.getUniforms();T.uniformsList=Rr.seqWithValue(W.seq,T.uniforms)}return T.uniformsList}function ks(T,W){const j=It.get(T);j.outputColorSpace=W.outputColorSpace,j.batching=W.batching,j.batchingColor=W.batchingColor,j.instancing=W.instancing,j.instancingColor=W.instancingColor,j.instancingMorph=W.instancingMorph,j.skinning=W.skinning,j.morphTargets=W.morphTargets,j.morphNormals=W.morphNormals,j.morphColors=W.morphColors,j.morphTargetsCount=W.morphTargetsCount,j.numClippingPlanes=W.numClippingPlanes,j.numIntersection=W.numClipIntersection,j.vertexAlphas=W.vertexAlphas,j.vertexTangents=W.vertexTangents,j.toneMapping=W.toneMapping}function Hr(T,W,j,J,G){W.isScene!==!0&&(W=Wt),R.resetTextureUnits();const pt=W.fog,Mt=J.isMeshStandardMaterial?W.environment:null,Ct=D===null?b.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ti,At=(J.isMeshStandardMaterial?K:E).get(J.envMap||Mt),Ft=J.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,U=!!j.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),k=!!j.morphAttributes.position,et=!!j.morphAttributes.normal,Rt=!!j.morphAttributes.color;let kt=Kn;J.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(kt=b.toneMapping);const ue=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Ot=ue!==void 0?ue.length:0,Lt=It.get(J),ae=f.state.lights;if(z===!0&&(Z===!0||T!==Q)){const en=T===Q&&J.id===Y;ft.setState(J,T,en)}let Qt=!1;J.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==ae.state.version||Lt.outputColorSpace!==Ct||G.isBatchedMesh&&Lt.batching===!1||!G.isBatchedMesh&&Lt.batching===!0||G.isBatchedMesh&&Lt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Lt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Lt.instancing===!1||!G.isInstancedMesh&&Lt.instancing===!0||G.isSkinnedMesh&&Lt.skinning===!1||!G.isSkinnedMesh&&Lt.skinning===!0||G.isInstancedMesh&&Lt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Lt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Lt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Lt.instancingMorph===!1&&G.morphTexture!==null||Lt.envMap!==At||J.fog===!0&&Lt.fog!==pt||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==ft.numPlanes||Lt.numIntersection!==ft.numIntersection)||Lt.vertexAlphas!==Ft||Lt.vertexTangents!==U||Lt.morphTargets!==k||Lt.morphNormals!==et||Lt.morphColors!==Rt||Lt.toneMapping!==kt||Lt.morphTargetsCount!==Ot)&&(Qt=!0):(Qt=!0,Lt.__version=J.version);let Dt=Lt.currentProgram;Qt===!0&&(Dt=ei(J,W,G));let gn=!1,$e=!1,Gr=!1;const Me=Dt.getUniforms(),On=Lt.uniforms;if(Nt.useProgram(Dt.program)&&(gn=!0,$e=!0,Gr=!0),J.id!==Y&&(Y=J.id,$e=!0),gn||Q!==T){Xt.reverseDepthBuffer?(at.copy(T.projectionMatrix),Hu(at),Vu(at),Me.setValue(B,"projectionMatrix",at)):Me.setValue(B,"projectionMatrix",T.projectionMatrix),Me.setValue(B,"viewMatrix",T.matrixWorldInverse);const en=Me.map.cameraPosition;en!==void 0&&en.setValue(B,mt.setFromMatrixPosition(T.matrixWorld)),Xt.logarithmicDepthBuffer&&Me.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Me.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),Q!==T&&(Q=T,$e=!0,Gr=!0)}if(G.isSkinnedMesh){Me.setOptional(B,G,"bindMatrix"),Me.setOptional(B,G,"bindMatrixInverse");const en=G.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),Me.setValue(B,"boneTexture",en.boneTexture,R))}G.isBatchedMesh&&(Me.setOptional(B,G,"batchingTexture"),Me.setValue(B,"batchingTexture",G._matricesTexture,R),Me.setOptional(B,G,"batchingIdTexture"),Me.setValue(B,"batchingIdTexture",G._indirectTexture,R),Me.setOptional(B,G,"batchingColorTexture"),G._colorsTexture!==null&&Me.setValue(B,"batchingColorTexture",G._colorsTexture,R));const Wr=j.morphAttributes;if((Wr.position!==void 0||Wr.normal!==void 0||Wr.color!==void 0)&&zt.update(G,j,Dt),($e||Lt.receiveShadow!==G.receiveShadow)&&(Lt.receiveShadow=G.receiveShadow,Me.setValue(B,"receiveShadow",G.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(On.envMap.value=At,On.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&W.environment!==null&&(On.envMapIntensity.value=W.environmentIntensity),$e&&(Me.setValue(B,"toneMappingExposure",b.toneMappingExposure),Lt.needsLights&&Vr(On,Gr),pt&&J.fog===!0&&xt.refreshFogUniforms(On,pt),xt.refreshMaterialUniforms(On,J,y,_,f.state.transmissionRenderTarget[T.id]),Rr.upload(B,us(Lt),On,R)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Rr.upload(B,us(Lt),On,R),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Me.setValue(B,"center",G.center),Me.setValue(B,"modelViewMatrix",G.modelViewMatrix),Me.setValue(B,"normalMatrix",G.normalMatrix),Me.setValue(B,"modelMatrix",G.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const en=J.uniformsGroups;for(let Xr=0,vh=en.length;Xr<vh;Xr++){const Jo=en[Xr];V.update(Jo,Dt),V.bind(Jo,Dt)}}return Dt}function Vr(T,W){T.ambientLightColor.needsUpdate=W,T.lightProbe.needsUpdate=W,T.directionalLights.needsUpdate=W,T.directionalLightShadows.needsUpdate=W,T.pointLights.needsUpdate=W,T.pointLightShadows.needsUpdate=W,T.spotLights.needsUpdate=W,T.spotLightShadows.needsUpdate=W,T.rectAreaLights.needsUpdate=W,T.hemisphereLights.needsUpdate=W}function bi(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(T,W,j){It.get(T.texture).__webglTexture=W,It.get(T.depthTexture).__webglTexture=j;const J=It.get(T);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=j===void 0,J.__autoAllocateDepthBuffer||Ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,W){const j=It.get(T);j.__webglFramebuffer=W,j.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(T,W=0,j=0){D=T,q=W,N=j;let J=!0,G=null,pt=!1,Mt=!1;if(T){const At=It.get(T);if(At.__useDefaultFramebuffer!==void 0)Nt.bindFramebuffer(B.FRAMEBUFFER,null),J=!1;else if(At.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(At.__hasExternalTextures)R.rebindTextures(T,It.get(T.texture).__webglTexture,It.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const k=T.depthTexture;if(At.__boundDepthTexture!==k){if(k!==null&&It.has(k)&&(T.width!==k.image.width||T.height!==k.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}const Ft=T.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(Mt=!0);const U=It.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(U[W])?G=U[W][j]:G=U[W],pt=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?G=It.get(T).__webglMultisampledFramebuffer:Array.isArray(U)?G=U[j]:G=U,v.copy(T.viewport),S.copy(T.scissor),X=T.scissorTest}else v.copy(L).multiplyScalar(y).floor(),S.copy(P).multiplyScalar(y).floor(),X=tt;if(Nt.bindFramebuffer(B.FRAMEBUFFER,G)&&J&&Nt.drawBuffers(T,G),Nt.viewport(v),Nt.scissor(S),Nt.setScissorTest(X),pt){const At=It.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+W,At.__webglTexture,j)}else if(Mt){const At=It.get(T.texture),Ft=W||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,At.__webglTexture,j||0,Ft)}Y=-1},this.readRenderTargetPixels=function(T,W,j,J,G,pt,Mt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=It.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Mt!==void 0&&(Ct=Ct[Mt]),Ct){Nt.bindFramebuffer(B.FRAMEBUFFER,Ct);try{const At=T.texture,Ft=At.format,U=At.type;if(!Xt.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(U)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=T.width-J&&j>=0&&j<=T.height-G&&B.readPixels(W,j,J,G,Ut.convert(Ft),Ut.convert(U),pt)}finally{const At=D!==null?It.get(D).__webglFramebuffer:null;Nt.bindFramebuffer(B.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(T,W,j,J,G,pt,Mt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=It.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Mt!==void 0&&(Ct=Ct[Mt]),Ct){const At=T.texture,Ft=At.format,U=At.type;if(!Xt.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(U))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=T.width-J&&j>=0&&j<=T.height-G){Nt.bindFramebuffer(B.FRAMEBUFFER,Ct);const k=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,k),B.bufferData(B.PIXEL_PACK_BUFFER,pt.byteLength,B.STREAM_READ),B.readPixels(W,j,J,G,Ut.convert(Ft),Ut.convert(U),0);const et=D!==null?It.get(D).__webglFramebuffer:null;Nt.bindFramebuffer(B.FRAMEBUFFER,et);const Rt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await ku(B,Rt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,k),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,pt),B.deleteBuffer(k),B.deleteSync(Rt),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,W=null,j=0){T.isTexture!==!0&&(Ar("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,T=arguments[1]);const J=Math.pow(2,-j),G=Math.floor(T.image.width*J),pt=Math.floor(T.image.height*J),Mt=W!==null?W.x:0,Ct=W!==null?W.y:0;R.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,j,0,0,Mt,Ct,G,pt),Nt.unbindTexture()},this.copyTextureToTexture=function(T,W,j=null,J=null,G=0){T.isTexture!==!0&&(Ar("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,T=arguments[1],W=arguments[2],G=arguments[3]||0,j=null);let pt,Mt,Ct,At,Ft,U;j!==null?(pt=j.max.x-j.min.x,Mt=j.max.y-j.min.y,Ct=j.min.x,At=j.min.y):(pt=T.image.width,Mt=T.image.height,Ct=0,At=0),J!==null?(Ft=J.x,U=J.y):(Ft=0,U=0);const k=Ut.convert(W.format),et=Ut.convert(W.type);R.setTexture2D(W,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const Rt=B.getParameter(B.UNPACK_ROW_LENGTH),kt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),ue=B.getParameter(B.UNPACK_SKIP_PIXELS),Ot=B.getParameter(B.UNPACK_SKIP_ROWS),Lt=B.getParameter(B.UNPACK_SKIP_IMAGES),ae=T.isCompressedTexture?T.mipmaps[G]:T.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,ae.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ae.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ct),B.pixelStorei(B.UNPACK_SKIP_ROWS,At),T.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,G,Ft,U,pt,Mt,k,et,ae.data):T.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,G,Ft,U,ae.width,ae.height,k,ae.data):B.texSubImage2D(B.TEXTURE_2D,G,Ft,U,pt,Mt,k,et,ae),B.pixelStorei(B.UNPACK_ROW_LENGTH,Rt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,kt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ue),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ot),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Lt),G===0&&W.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),Nt.unbindTexture()},this.copyTextureToTexture3D=function(T,W,j=null,J=null,G=0){T.isTexture!==!0&&(Ar("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,J=arguments[1]||null,T=arguments[2],W=arguments[3],G=arguments[4]||0);let pt,Mt,Ct,At,Ft,U,k,et,Rt;const kt=T.isCompressedTexture?T.mipmaps[G]:T.image;j!==null?(pt=j.max.x-j.min.x,Mt=j.max.y-j.min.y,Ct=j.max.z-j.min.z,At=j.min.x,Ft=j.min.y,U=j.min.z):(pt=kt.width,Mt=kt.height,Ct=kt.depth,At=0,Ft=0,U=0),J!==null?(k=J.x,et=J.y,Rt=J.z):(k=0,et=0,Rt=0);const ue=Ut.convert(W.format),Ot=Ut.convert(W.type);let Lt;if(W.isData3DTexture)R.setTexture3D(W,0),Lt=B.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)R.setTexture2DArray(W,0),Lt=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const ae=B.getParameter(B.UNPACK_ROW_LENGTH),Qt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Dt=B.getParameter(B.UNPACK_SKIP_PIXELS),gn=B.getParameter(B.UNPACK_SKIP_ROWS),$e=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,kt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,kt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,At),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ft),B.pixelStorei(B.UNPACK_SKIP_IMAGES,U),T.isDataTexture||T.isData3DTexture?B.texSubImage3D(Lt,G,k,et,Rt,pt,Mt,Ct,ue,Ot,kt.data):W.isCompressedArrayTexture?B.compressedTexSubImage3D(Lt,G,k,et,Rt,pt,Mt,Ct,ue,kt.data):B.texSubImage3D(Lt,G,k,et,Rt,pt,Mt,Ct,ue,Ot,kt),B.pixelStorei(B.UNPACK_ROW_LENGTH,ae),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Qt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Dt),B.pixelStorei(B.UNPACK_SKIP_ROWS,gn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,$e),G===0&&W.generateMipmaps&&B.generateMipmap(Lt),Nt.unbindTexture()},this.initRenderTarget=function(T){It.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),Nt.unbindTexture()},this.resetState=function(){q=0,N=0,D=null,Nt.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Bo?"display-p3":"srgb",e.unpackColorSpace=oe.workingColorSpace===Br?"display-p3":"srgb"}}class Wo{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Gt(t),this.near=e,this.far=n}clone(){return new Wo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ih extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class tg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=So,this.updateRanges=[],this.version=0,this.uuid=bn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ke=new F;class Nr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ce(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=fn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=fn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=fn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=fn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array),r=ce(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Qe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Nr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Xo extends rs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ki;const _s=new F,Hi=new F,Vi=new F,Gi=new _t,vs=new _t,sh=new re,ur=new F,xs=new F,dr=new F,Zl=new _t,ba=new _t,Kl=new _t;class rh extends Pe{constructor(t=new Xo){if(super(),this.isSprite=!0,this.type="Sprite",ki===void 0){ki=new qe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new tg(e,5);ki.setIndex([0,1,2,0,2,3]),ki.setAttribute("position",new Nr(n,3,0,!1)),ki.setAttribute("uv",new Nr(n,2,3,!1))}this.geometry=ki,this.material=t,this.center=new _t(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hi.setFromMatrixScale(this.matrixWorld),sh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Vi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hi.multiplyScalar(-Vi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;fr(ur.set(-.5,-.5,0),Vi,a,Hi,s,r),fr(xs.set(.5,-.5,0),Vi,a,Hi,s,r),fr(dr.set(.5,.5,0),Vi,a,Hi,s,r),Zl.set(0,0),ba.set(1,0),Kl.set(1,1);let o=t.ray.intersectTriangle(ur,xs,dr,!1,_s);if(o===null&&(fr(xs.set(-.5,.5,0),Vi,a,Hi,s,r),ba.set(0,1),o=t.ray.intersectTriangle(ur,dr,xs,!1,_s),o===null))return;const l=t.ray.origin.distanceTo(_s);l<t.near||l>t.far||e.push({distance:l,point:_s.clone(),uv:an.getInterpolation(_s,ur,xs,dr,Zl,ba,Kl,new _t),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function fr(i,t,e,n,s,r){Gi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(vs.x=r*Gi.x-s*Gi.y,vs.y=s*Gi.x+r*Gi.y):vs.copy(Gi),i.copy(t),i.x+=vs.x,i.y+=vs.y,i.applyMatrix4(sh)}class eg extends Be{constructor(t=null,e=1,n=1,s,r,a,o,l,h=Ye,d=Ye,p,c){super(null,a,o,l,h,d,s,r,p,c),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jl extends Qe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Wi=new re,Jl=new re,pr=[],Ql=new Mi,ng=new re,Ms=new Vt,ys=new Bs;class ah extends Vt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new jl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ng)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Mi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Wi),Ql.copy(t.boundingBox).applyMatrix4(Wi),this.boundingBox.union(Ql)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Wi),ys.copy(t.boundingSphere).applyMatrix4(Wi),this.boundingSphere.union(ys)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ms.geometry=this.geometry,Ms.material=this.material,Ms.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ys.copy(this.boundingSphere),ys.applyMatrix4(n),t.ray.intersectsSphere(ys)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Wi),Jl.multiplyMatrices(n,Wi),Ms.matrixWorld=Jl,Ms.raycast(t,pr);for(let a=0,o=pr.length;a<o;a++){const l=pr[a];l.instanceId=r,l.object=this,e.push(l)}pr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new jl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new eg(new Float32Array(s*this.count),s,this.count,Uo,Sn));const r=this.morphTexture.source.data.data;let a=0;for(let h=0;h<n.length;h++)a+=n[h];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class yi extends Be{constructor(t,e,n,s,r,a,o,l,h){super(t,e,n,s,r,a,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,h;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),h=n[s]-a,h<0)o=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const d=n[s],c=n[s+1]-d,u=(a-d)/c;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new _t:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new F,s=[],r=[],a=[],o=new F,l=new re;for(let u=0;u<=t;u++){const m=u/t;s[u]=this.getTangentAt(m,new F)}r[0]=new F,a[0]=new F;let h=Number.MAX_VALUE;const d=Math.abs(s[0].x),p=Math.abs(s[0].y),c=Math.abs(s[0].z);d<=h&&(h=d,n.set(1,0,0)),p<=h&&(h=p,n.set(0,1,0)),c<=h&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Ce(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(o,m))}a[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(Ce(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(u=-u);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],u*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Yo extends wn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new _t){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const d=Math.cos(this.aRotation),p=Math.sin(this.aRotation),c=l-this.aX,u=h-this.aY;l=c*d-u*p+this.aX,h=c*p+u*d+this.aY}return n.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ig extends Yo{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function qo(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,h){s(a,o,h*(o-r),h*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,h,d,p){let c=(a-r)/h-(o-r)/(h+d)+(o-a)/d,u=(o-a)/d-(l-a)/(d+p)+(l-o)/p;c*=d,u*=d,s(a,o,c,u)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const mr=new F,wa=new qo,Ta=new qo,Aa=new qo;class sg extends wn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new F){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let h,d;this.closed||o>0?h=s[(o-1)%r]:(mr.subVectors(s[0],s[1]).add(s[0]),h=mr);const p=s[o%r],c=s[(o+1)%r];if(this.closed||o+2<r?d=s[(o+2)%r]:(mr.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=mr),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let m=Math.pow(h.distanceToSquared(p),u),M=Math.pow(p.distanceToSquared(c),u),f=Math.pow(c.distanceToSquared(d),u);M<1e-4&&(M=1),m<1e-4&&(m=M),f<1e-4&&(f=M),wa.initNonuniformCatmullRom(h.x,p.x,c.x,d.x,m,M,f),Ta.initNonuniformCatmullRom(h.y,p.y,c.y,d.y,m,M,f),Aa.initNonuniformCatmullRom(h.z,p.z,c.z,d.z,m,M,f)}else this.curveType==="catmullrom"&&(wa.initCatmullRom(h.x,p.x,c.x,d.x,this.tension),Ta.initCatmullRom(h.y,p.y,c.y,d.y,this.tension),Aa.initCatmullRom(h.z,p.z,c.z,d.z,this.tension));return n.set(wa.calc(l),Ta.calc(l),Aa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new F().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function tc(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function rg(i,t){const e=1-i;return e*e*t}function ag(i,t){return 2*(1-i)*i*t}function og(i,t){return i*i*t}function As(i,t,e,n){return rg(i,t)+ag(i,e)+og(i,n)}function lg(i,t){const e=1-i;return e*e*e*t}function cg(i,t){const e=1-i;return 3*e*e*i*t}function hg(i,t){return 3*(1-i)*i*i*t}function ug(i,t){return i*i*i*t}function Rs(i,t,e,n,s){return lg(i,t)+cg(i,e)+hg(i,n)+ug(i,s)}class oh extends wn{constructor(t=new _t,e=new _t,n=new _t,s=new _t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new _t){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Rs(t,s.x,r.x,a.x,o.x),Rs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class dg extends wn{constructor(t=new F,e=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new F){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Rs(t,s.x,r.x,a.x,o.x),Rs(t,s.y,r.y,a.y,o.y),Rs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class lh extends wn{constructor(t=new _t,e=new _t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new _t){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fg extends wn{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ch extends wn{constructor(t=new _t,e=new _t,n=new _t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new _t){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(As(t,s.x,r.x,a.x),As(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pg extends wn{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(As(t,s.x,r.x,a.x),As(t,s.y,r.y,a.y),As(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hh extends wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new _t){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],h=s[a],d=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return n.set(tc(o,l.x,h.x,d.x,p.x),tc(o,l.y,h.y,d.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new _t().fromArray(s))}return this}}var ec=Object.freeze({__proto__:null,ArcCurve:ig,CatmullRomCurve3:sg,CubicBezierCurve:oh,CubicBezierCurve3:dg,EllipseCurve:Yo,LineCurve:lh,LineCurve3:fg,QuadraticBezierCurve:ch,QuadraticBezierCurve3:pg,SplineCurve:hh});class mg extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ec[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),h=l===0?0:1-a/l;return o.getPointAt(h,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let h=0;h<l.length;h++){const d=l[h];n&&n.equals(d)||(e.push(d),n=d)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new ec[s.type]().fromJSON(s))}return this}}class wo extends mg{constructor(t){super(),this.type="Path",this.currentPoint=new _t,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new lh(this.currentPoint.clone(),new _t(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new ch(this.currentPoint.clone(),new _t(t,e),new _t(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new oh(this.currentPoint.clone(),new _t(t,e),new _t(n,s),new _t(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new hh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const h=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+h,e+d,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const h=new Yo(t,e,n,s,r,a,o,l);if(this.curves.length>0){const p=h.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(h);const d=h.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ve extends qe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const h=this;s=Math.floor(s),r=Math.floor(r);const d=[],p=[],c=[],u=[];let m=0;const M=[],f=n/2;let g=0;A(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(d),this.setAttribute("position",new Se(p,3)),this.setAttribute("normal",new Se(c,3)),this.setAttribute("uv",new Se(u,2));function A(){const w=new F,q=new F;let N=0;const D=(e-t)/n;for(let Y=0;Y<=r;Y++){const Q=[],v=Y/r,S=v*(e-t)+t;for(let X=0;X<=s;X++){const I=X/s,H=I*l+o,O=Math.sin(H),_=Math.cos(H);q.x=S*O,q.y=-v*n+f,q.z=S*_,p.push(q.x,q.y,q.z),w.set(O,D,_).normalize(),c.push(w.x,w.y,w.z),u.push(I,1-v),Q.push(m++)}M.push(Q)}for(let Y=0;Y<s;Y++)for(let Q=0;Q<r;Q++){const v=M[Q][Y],S=M[Q+1][Y],X=M[Q+1][Y+1],I=M[Q][Y+1];t>0&&(d.push(v,S,I),N+=3),e>0&&(d.push(S,X,I),N+=3)}h.addGroup(g,N,0),g+=N}function b(w){const q=m,N=new _t,D=new F;let Y=0;const Q=w===!0?t:e,v=w===!0?1:-1;for(let X=1;X<=s;X++)p.push(0,f*v,0),c.push(0,v,0),u.push(.5,.5),m++;const S=m;for(let X=0;X<=s;X++){const H=X/s*l+o,O=Math.cos(H),_=Math.sin(H);D.x=Q*_,D.y=f*v,D.z=Q*O,p.push(D.x,D.y,D.z),c.push(0,v,0),N.x=O*.5+.5,N.y=_*.5*v+.5,u.push(N.x,N.y),m++}for(let X=0;X<s;X++){const I=q+X,H=S+X;w===!0?d.push(H,H+1,I):d.push(H+1,H,I),Y+=3}h.addGroup(g,Y,w===!0?1:2),g+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ve(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Fr extends Ve{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Fr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class uh extends wo{constructor(t){super(t),this.uuid=bn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new wo().fromJSON(s))}return this}}const gg={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=dh(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,h,d,p,c,u;if(n&&(r=yg(i,t,r,e)),i.length>80*e){o=h=i[0],l=d=i[1];for(let m=e;m<s;m+=e)p=i[m],c=i[m+1],p<o&&(o=p),c<l&&(l=c),p>h&&(h=p),c>d&&(d=c);u=Math.max(h-o,d-l),u=u!==0?32767/u:0}return Us(r,a,e,o,l,u,0),a}};function dh(i,t,e,n,s){let r,a;if(s===Dg(i,t,e,n)>0)for(r=t;r<e;r+=n)a=nc(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=nc(r,i[r],i[r+1],a);return a&&kr(a,a.next)&&(Fs(a),a=a.next),a}function vi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(kr(e,e.next)||_e(e.prev,e,e.next)===0)){if(Fs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Us(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Tg(i,n,s,r);let o=i,l,h;for(;i.prev!==i.next;){if(l=i.prev,h=i.next,r?vg(i,n,s,r):_g(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(h.i/e|0),Fs(i),i=h.next,o=h.next;continue}if(i=h,i===o){a?a===1?(i=xg(vi(i),t,e),Us(i,t,e,n,s,r,2)):a===2&&Mg(i,t,e,n,s,r):Us(vi(i),t,e,n,s,r,1);break}}}function _g(i){const t=i.prev,e=i,n=i.next;if(_e(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,h=n.y,d=s<r?s<a?s:a:r<a?r:a,p=o<l?o<h?o:h:l<h?l:h,c=s>r?s>a?s:a:r>a?r:a,u=o>l?o>h?o:h:l>h?l:h;let m=n.next;for(;m!==t;){if(m.x>=d&&m.x<=c&&m.y>=p&&m.y<=u&&Zi(s,o,r,l,a,h,m.x,m.y)&&_e(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function vg(i,t,e,n){const s=i.prev,r=i,a=i.next;if(_e(s,r,a)>=0)return!1;const o=s.x,l=r.x,h=a.x,d=s.y,p=r.y,c=a.y,u=o<l?o<h?o:h:l<h?l:h,m=d<p?d<c?d:c:p<c?p:c,M=o>l?o>h?o:h:l>h?l:h,f=d>p?d>c?d:c:p>c?p:c,g=To(u,m,t,e,n),A=To(M,f,t,e,n);let b=i.prevZ,w=i.nextZ;for(;b&&b.z>=g&&w&&w.z<=A;){if(b.x>=u&&b.x<=M&&b.y>=m&&b.y<=f&&b!==s&&b!==a&&Zi(o,d,l,p,h,c,b.x,b.y)&&_e(b.prev,b,b.next)>=0||(b=b.prevZ,w.x>=u&&w.x<=M&&w.y>=m&&w.y<=f&&w!==s&&w!==a&&Zi(o,d,l,p,h,c,w.x,w.y)&&_e(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;b&&b.z>=g;){if(b.x>=u&&b.x<=M&&b.y>=m&&b.y<=f&&b!==s&&b!==a&&Zi(o,d,l,p,h,c,b.x,b.y)&&_e(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;w&&w.z<=A;){if(w.x>=u&&w.x<=M&&w.y>=m&&w.y<=f&&w!==s&&w!==a&&Zi(o,d,l,p,h,c,w.x,w.y)&&_e(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function xg(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!kr(s,r)&&fh(s,n,n.next,r)&&Ns(s,r)&&Ns(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Fs(n),Fs(n.next),n=i=r),n=n.next}while(n!==i);return vi(n)}function Mg(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Cg(a,o)){let l=ph(a,o);a=vi(a,a.next),l=vi(l,l.next),Us(a,t,e,n,s,r,0),Us(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function yg(i,t,e,n){const s=[];let r,a,o,l,h;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,h=dh(i,o,l,n,!1),h===h.next&&(h.steiner=!0),s.push(Rg(h));for(s.sort(Sg),r=0;r<s.length;r++)e=Eg(s[r],e);return e}function Sg(i,t){return i.x-t.x}function Eg(i,t){const e=bg(i,t);if(!e)return t;const n=ph(e,i);return vi(n,n.next),vi(e,e.next)}function bg(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const c=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(c<=r&&c>n&&(n=c,s=e.x<e.next.x?e:e.next,c===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,l=s.x,h=s.y;let d=1/0,p;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Zi(a<h?r:n,a,l,h,a<h?n:r,a,e.x,e.y)&&(p=Math.abs(a-e.y)/(r-e.x),Ns(e,i)&&(p<d||p===d&&(e.x>s.x||e.x===s.x&&wg(s,e)))&&(s=e,d=p)),e=e.next;while(e!==o);return s}function wg(i,t){return _e(i.prev,i,t.prev)<0&&_e(t.next,i,i.next)<0}function Tg(i,t,e,n){let s=i;do s.z===0&&(s.z=To(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ag(s)}function Ag(i){let t,e,n,s,r,a,o,l,h=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<h&&(o++,n=n.nextZ,!!n);t++);for(l=h;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,h*=2}while(a>1);return i}function To(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Rg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Zi(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Cg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Pg(i,t)&&(Ns(i,t)&&Ns(t,i)&&Lg(i,t)&&(_e(i.prev,i,t.prev)||_e(i,t.prev,t))||kr(i,t)&&_e(i.prev,i,i.next)>0&&_e(t.prev,t,t.next)>0)}function _e(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function kr(i,t){return i.x===t.x&&i.y===t.y}function fh(i,t,e,n){const s=_r(_e(i,t,e)),r=_r(_e(i,t,n)),a=_r(_e(e,n,i)),o=_r(_e(e,n,t));return!!(s!==r&&a!==o||s===0&&gr(i,e,t)||r===0&&gr(i,n,t)||a===0&&gr(e,i,n)||o===0&&gr(e,t,n))}function gr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function _r(i){return i>0?1:i<0?-1:0}function Pg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&fh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ns(i,t){return _e(i.prev,i,i.next)<0?_e(i,t,i.next)>=0&&_e(i,i.prev,t)>=0:_e(i,t,i.prev)<0||_e(i,i.next,t)<0}function Lg(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ph(i,t){const e=new Ao(i.i,i.x,i.y),n=new Ao(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function nc(i,t,e,n){const s=new Ao(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Fs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ao(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Dg(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Cs{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Cs.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];ic(t),sc(n,t);let a=t.length;e.forEach(ic);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,sc(n,e[l]);const o=gg.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function ic(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function sc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class $o extends qe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],h=[],d=[];let p=t;const c=(e-t)/s,u=new F,m=new _t;for(let M=0;M<=s;M++){for(let f=0;f<=n;f++){const g=r+f/n*a;u.x=p*Math.cos(g),u.y=p*Math.sin(g),l.push(u.x,u.y,u.z),h.push(0,0,1),m.x=(u.x/e+1)/2,m.y=(u.y/e+1)/2,d.push(m.x,m.y)}p+=c}for(let M=0;M<s;M++){const f=M*(n+1);for(let g=0;g<n;g++){const A=g+f,b=A,w=A+n+1,q=A+n+2,N=A+1;o.push(b,w,N),o.push(w,q,N)}}this.setIndex(o),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(h,3)),this.setAttribute("uv",new Se(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $o(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ps extends qe{constructor(t=new uh([new _t(0,.5),new _t(-.5,-.5),new _t(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let d=0;d<t.length;d++)h(t[d]),this.addGroup(o,l,d),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Se(s,3)),this.setAttribute("normal",new Se(r,3)),this.setAttribute("uv",new Se(a,2));function h(d){const p=s.length/3,c=d.extractPoints(e);let u=c.shape;const m=c.holes;Cs.isClockWise(u)===!1&&(u=u.reverse());for(let f=0,g=m.length;f<g;f++){const A=m[f];Cs.isClockWise(A)===!0&&(m[f]=A.reverse())}const M=Cs.triangulateShape(u,m);for(let f=0,g=m.length;f<g;f++){const A=m[f];u=u.concat(A)}for(let f=0,g=u.length;f<g;f++){const A=u[f];s.push(A.x,A.y,0),r.push(0,0,1),a.push(A.x,A.y)}for(let f=0,g=M.length;f<g;f++){const A=M[f],b=A[0]+p,w=A[1]+p,q=A[2]+p;n.push(b,w,q),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Ig(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];n.push(a)}return new Ps(n,t.curveSegments)}}function Ig(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class qn extends qe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let h=0;const d=[],p=new F,c=new F,u=[],m=[],M=[],f=[];for(let g=0;g<=n;g++){const A=[],b=g/n;let w=0;g===0&&a===0?w=.5/e:g===n&&l===Math.PI&&(w=-.5/e);for(let q=0;q<=e;q++){const N=q/e;p.x=-t*Math.cos(s+N*r)*Math.sin(a+b*o),p.y=t*Math.cos(a+b*o),p.z=t*Math.sin(s+N*r)*Math.sin(a+b*o),m.push(p.x,p.y,p.z),c.copy(p).normalize(),M.push(c.x,c.y,c.z),f.push(N+w,1-b),A.push(h++)}d.push(A)}for(let g=0;g<n;g++)for(let A=0;A<e;A++){const b=d[g][A+1],w=d[g][A],q=d[g+1][A],N=d[g+1][A+1];(g!==0||a>0)&&u.push(b,w,N),(g!==n-1||l<Math.PI)&&u.push(w,q,N)}this.setIndex(u),this.setAttribute("position",new Se(m,3)),this.setAttribute("normal",new Se(M,3)),this.setAttribute("uv",new Se(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Fe extends rs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zc,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Zo extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Ug extends Zo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ra=new re,rc=new F,ac=new F;class mh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vo,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;rc.setFromMatrixPosition(t.matrixWorld),e.position.copy(rc),ac.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ac),e.updateMatrixWorld(),Ra.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ra),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ra)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const oc=new re,Ss=new F,Ca=new F;class Ng extends mh{constructor(){super(new Je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _t(4,2),this._viewportCount=6,this._viewports=[new fe(2,1,1,1),new fe(0,1,1,1),new fe(3,1,1,1),new fe(1,1,1,1),new fe(3,0,1,1),new fe(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ss.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ss),Ca.copy(n.position),Ca.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ca),n.updateMatrixWorld(),s.makeTranslation(-Ss.x,-Ss.y,-Ss.z),oc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oc)}}class Fg extends Zo{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ng}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Og extends mh{constructor(){super(new jc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bg extends Zo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new Og}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class zg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=lc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=lc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function lc(){return performance.now()}const cc=new re;class kg{constructor(t,e,n=0,s=1/0){this.ray=new ko(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ho,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return cc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cc),this}intersectObject(t,e=!0,n=[]){return Ro(t,this,n,e),n.sort(hc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ro(t[s],this,n,e);return n.sort(hc),n}}function hc(i,t){return i.distance-t.distance}function Ro(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Ro(r[a],t,e,!0)}}class uc{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ce(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Hg extends xi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Po}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Po);const dc={type:"change"},Ko={type:"start"},gh={type:"end"},vr=new ko,fc=new Yn,Vg=Math.cos(70*Mn.DEG2RAD),we=new F,Xe=2*Math.PI,de={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Pa=1e-6;class Gg extends Hg{constructor(t,e=null){super(t,e),this.state=de.NONE,this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ki.ROTATE,MIDDLE:Ki.DOLLY,RIGHT:Ki.PAN},this.touches={ONE:qi.ROTATE,TWO:qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new Fn,this._lastTargetPosition=new F,this._quat=new Fn().setFromUnitVectors(t.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new uc,this._sphericalDelta=new uc,this._scale=1,this._panOffset=new F,this._rotateStart=new _t,this._rotateEnd=new _t,this._rotateDelta=new _t,this._panStart=new _t,this._panEnd=new _t,this._panDelta=new _t,this._dollyStart=new _t,this._dollyEnd=new _t,this._dollyDelta=new _t,this._dollyDirection=new F,this._mouse=new _t,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Xg.bind(this),this._onPointerDown=Wg.bind(this),this._onPointerUp=Yg.bind(this),this._onContextMenu=Qg.bind(this),this._onMouseWheel=Zg.bind(this),this._onKeyDown=Kg.bind(this),this._onTouchStart=jg.bind(this),this._onTouchMove=Jg.bind(this),this._onMouseDown=qg.bind(this),this._onMouseMove=$g.bind(this),this._interceptControlDown=t_.bind(this),this._interceptControlUp=e_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(dc),this.update(),this.state=de.NONE}update(t=null){const e=this.object.position;we.copy(e).sub(this.target),we.applyQuaternion(this._quat),this._spherical.setFromVector3(we),this.autoRotate&&this.state===de.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Xe:n>Math.PI&&(n-=Xe),s<-Math.PI?s+=Xe:s>Math.PI&&(s-=Xe),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(we.setFromSpherical(this._spherical),we.applyQuaternion(this._quatInverse),e.copy(this.target).add(we),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=we.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new F(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const h=new F(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(o),this.object.updateMatrixWorld(),a=we.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(vr.origin.copy(this.object.position),vr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(vr.direction))<Vg?this.object.lookAt(this.target):(fc.setFromNormalAndCoplanarPoint(this.object.up,this.target),vr.intersectPlane(fc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Pa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Pa||this._lastTargetPosition.distanceToSquared(this.target)>Pa?(this.dispatchEvent(dc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Xe/60*this.autoRotateSpeed*t:Xe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){we.setFromMatrixColumn(e,0),we.multiplyScalar(-t),this._panOffset.add(we)}_panUp(t,e){this.screenSpacePanning===!0?we.setFromMatrixColumn(e,1):(we.setFromMatrixColumn(e,0),we.crossVectors(this.object.up,we)),we.multiplyScalar(t),this._panOffset.add(we)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;we.copy(s).sub(this.target);let r=we.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Xe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Xe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Xe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Xe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Xe*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Xe*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Xe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Xe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new _t,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Wg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Xg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Yg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(gh),this.state=de.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function qg(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ki.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=de.DOLLY;break;case Ki.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=de.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=de.ROTATE}break;case Ki.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=de.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=de.PAN}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(Ko)}function $g(i){switch(this.state){case de.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case de.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case de.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Zg(i){this.enabled===!1||this.enableZoom===!1||this.state!==de.NONE||(i.preventDefault(),this.dispatchEvent(Ko),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(gh))}function Kg(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function jg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case qi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=de.TOUCH_ROTATE;break;case qi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=de.TOUCH_PAN;break;default:this.state=de.NONE}break;case 2:switch(this.touches.TWO){case qi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=de.TOUCH_DOLLY_PAN;break;case qi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=de.TOUCH_DOLLY_ROTATE;break;default:this.state=de.NONE}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(Ko)}function Jg(i){switch(this._trackPointer(i),this.state){case de.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case de.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case de.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case de.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=de.NONE}}function Qg(i){this.enabled!==!1&&i.preventDefault()}function t_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function e_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class n_ extends ih{constructor(){super();const t=new xe;t.deleteAttribute("uv");const e=new Fe({side:We}),n=new Fe,s=new Fg(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new Vt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new Vt(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new Vt(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new Vt(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const h=new Vt(t,n);h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),this.add(h);const d=new Vt(t,n);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);const p=new Vt(t,n);p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);const c=new Vt(t,Xi(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const u=new Vt(t,Xi(50));u.position.set(-16.109,18.021,-8.207),u.scale.set(.1,2.425,2.751),this.add(u);const m=new Vt(t,Xi(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);const M=new Vt(t,Xi(43));M.position.set(-.462,8.89,14.52),M.scale.set(4.38,5.441,.088),this.add(M);const f=new Vt(t,Xi(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const g=new Vt(t,Xi(100));g.position.set(0,20,0),g.scale.set(1,.1,1),this.add(g)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Xi(i){const t=new mn;return t.color.setScalar(i),t}const Ls='Inter, "Segoe UI", Roboto, Arial, sans-serif',xr=2;function La(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}const Da=(i,t,e)=>new Gt(i).lerp(new Gt(t),e).getStyle();function i_({title:i,number:t=null,status:e="",color:n=null,muted:s=!1}){const r=document.createElement("canvas"),a=r.getContext("2d"),o=`${s?500:600} ${s?11.5:13}px ${Ls}`,l=`700 13px ${Ls}`,h=`600 11px ${Ls}`,d=String(i||""),p=t!=null?String(t):"";a.font=o;const c=a.measureText(d).width;a.font=l;const u=p?a.measureText(p).width+6:0;a.font=h;const m=e?a.measureText(e).width:0,M=s?0:13,f=s?20:24,g=Math.ceil(9+M+u+c+10),A=e?18:0,b=e?Math.ceil(m+16):0,w=e?3:0,q=9,N=4,D=Math.min(520,Math.max(g,b)+N*2),Y=N+f+w+A+q+1;r.width=D*xr,r.height=Y*xr,a.scale(xr,xr);const Q=(D-Math.min(g,D-N*2))/2,v=Math.min(g,D-N*2);a.save(),a.shadowColor="rgba(15, 23, 42, 0.28)",a.shadowBlur=5,a.shadowOffsetY=1.5,La(a,Q,N,v,f,f/2),a.fillStyle=s?"rgba(255, 255, 255, 0.86)":"#ffffff",a.fill(),a.restore(),La(a,Q+.5,N+.5,v-1,f-1,f/2),a.strokeStyle="rgba(15, 23, 42, 0.12)",a.lineWidth=1,a.stroke();let S=Q+9;const X=N+f/2;M&&(a.beginPath(),a.arc(S+4,X,4,0,Math.PI*2),a.fillStyle=n||"#94a3b8",a.fill(),S+=M),a.textBaseline="middle",p&&(a.font=l,a.fillStyle="#0f172a",a.fillText(p,S,X+.5),S+=u),a.font=o,a.fillStyle=s?"#475569":"#0f172a";const I=Q+v-10-S;let H=d;if(c>I){for(;H.length>3&&a.measureText(H+"…").width>I;)H=H.slice(0,-1);H+="…"}if(a.fillText(H,S,X+.5),e){const y=Math.min(b,D-N*2),x=(D-y)/2,C=N+f+w,L=n||"#64748b";La(a,x,C,y,A,A/2),a.fillStyle=Da(L,"#ffffff",.8),a.fill(),a.strokeStyle=Da(L,"#ffffff",.35),a.stroke(),a.font=h,a.fillStyle=Da(L,"#000000",.5),a.textAlign="center",a.fillText(e,D/2,C+A/2+.5,y-12),a.textAlign="start"}const O=N+f+w+A;a.beginPath(),a.moveTo(D/2,O),a.lineTo(D/2,Y-1),a.strokeStyle=s?"rgba(71, 85, 105, 0.45)":"rgba(15, 23, 42, 0.55)",a.lineWidth=1.5,a.stroke(),a.beginPath(),a.arc(D/2,Y-1.5,1.5,0,Math.PI*2),a.fillStyle=a.strokeStyle,a.fill();const _=new yi(r);return _.colorSpace=Oe,_.minFilter=rn,_.generateMipmaps=!1,{texture:_,width:D,height:Y}}function s_(i){const t=document.createElement("canvas"),e=t.getContext("2d"),n=`700 64px ${Ls}`;e.font=n;const s=Math.min(2048,Math.ceil(e.measureText(i).width+90));t.width=s,t.height=120,e.fillStyle="#ffffff",e.fillRect(0,0,s,120),e.fillStyle="#1d4ed8",e.fillRect(0,0,18,120),e.font=n,e.fillStyle="#0f172a",e.textBaseline="middle",e.fillText(i,48,64,s-70);const r=new yi(t);return r.colorSpace=Oe,r.anisotropy=4,{texture:r,aspect:s/120}}function r_(i){const t=document.createElement("canvas"),e=t.getContext("2d"),n=`800 96px ${Ls}`;e.font=n;const s=Math.min(4096,Math.ceil(e.measureText(i).width+40));t.width=s,t.height=128,e.font=n,e.fillStyle="rgba(30, 41, 59, 0.9)",e.textBaseline="middle",e.fillText(i,20,68);const r=new yi(t);return r.colorSpace=Oe,r.anisotropy=8,{texture:r,aspect:s/128}}function a_(){const i=document.createElement("canvas");i.width=128,i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.75)"),e.addColorStop(.6,"rgba(255,255,255,0.18)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);const n=new yi(i);return n.colorSpace=Oe,n}function o_(i,t=0){const e=(Number(i.rot)||0)*Math.PI/180,n=Math.abs(Math.cos(e)),s=Math.abs(Math.sin(e)),r=((i.w||0)*n+(i.d||0)*s)/2+t,a=((i.w||0)*s+(i.d||0)*n)/2+t;return[i.x-r,i.x+r,i.z-a,i.z+a]}function l_(i){return i!=null&&i.h?i.h:Math.min(12,Math.max(6.5,6+Math.max((i==null?void 0:i.w)||0,(i==null?void 0:i.d)||0)/25))}function jo(i,t,e=1,n=1){const s=document.createElement("canvas");s.width=i,s.height=i,t(s.getContext("2d"),i);const r=new yi(s);return r.colorSpace=Oe,r.wrapS=Jn,r.wrapT=Jn,r.repeat.set(e,n),r}function c_(i,t){let e=7;const n=()=>(e=e*16807%2147483647,e/2147483647);return jo(512,(s,r)=>{s.fillStyle="#ffffff",s.fillRect(0,0,r,r);for(let a=0;a<40;a+=1){const o=n()*r,l=n()*r,h=30+n()*110,d=s.createRadialGradient(o,l,0,o,l,h),p=n()>.5?0:255;d.addColorStop(0,`rgba(${p},${p},${p},${.035+n()*.03})`),d.addColorStop(1,`rgba(${p},${p},${p},0)`),s.fillStyle=d,s.fillRect(o-h,l-h,h*2,h*2)}for(let a=0;a<9e3;a+=1){const o=Math.floor(n()*120);s.fillStyle=`rgba(${o},${o},${o},${.03+n()*.05})`,s.fillRect(n()*r,n()*r,1+n()*1.5,1+n()*1.5)}s.fillStyle="rgba(70, 76, 84, 0.32)",s.fillRect(0,0,r,2),s.fillRect(0,0,2,r)},i,t)}function _h(){return jo(128,(i,t)=>{i.fillStyle="#f5b800",i.fillRect(0,0,t,t),i.fillStyle="#1f2328";for(let e=-t;e<t*2;e+=32)i.beginPath(),i.moveTo(e,0),i.lineTo(e+16,0),i.lineTo(e+16-t,t),i.lineTo(e-t,t),i.closePath(),i.fill()},1,1)}function h_(i){return jo(128,(t,e)=>{t.fillStyle="#ffffff",t.fillRect(0,0,e,e),t.fillStyle="rgba(90, 100, 112, 0.18)",t.fillRect(0,0,3,e),t.fillStyle="rgba(255, 255, 255, 0.9)",t.fillRect(3,0,2,e),t.fillStyle="rgba(90, 100, 112, 0.07)",t.fillRect(e/2,0,2,e)},i,1)}function je(i,t={}){return new Fe({color:i,roughness:.75,metalness:.05,...t})}function Xn(i,t,e,n,s,r,a,{shadow:o=!0}={}){const l=new Vt(new xe(i,t,e),n);return l.position.set(s,r,a),l.castShadow=o,l.receiveShadow=!0,l}function u_(i,t,e,n,s){const r=[],a=[],o=(d,p,c,u)=>{const m=r.length/3;r.push(d,0,p,c,0,p,c,0,u,d,0,u),a.push(m,m+2,m+1,m,m+3,m+2)},l=(d,p)=>{for(let c=0;c<d;c+=n+s)p(c,Math.min(d,c+n))};l(i,(d,p)=>{o(-i/2+d,-t/2,-i/2+p,-t/2+e),o(-i/2+d,t/2-e,-i/2+p,t/2)}),l(t,(d,p)=>{o(-i/2,-t/2+d,-i/2+e,-t/2+p),o(i/2-e,-t/2+d,i/2,-t/2+p)});const h=new qe;return h.setAttribute("position",new Se(r,3)),h.setIndex(a),h.computeVertexNormals(),h}function Yi(i,t,e,{shadow:n=!0}={}){if(!e.length)return null;const s=new ah(i,t,e.length),r=new re,a=new Fn;return e.forEach((o,l)=>{a.setFromEuler(new on(0,o.ry||0,0)),r.compose(new F(o.x,o.y,o.z),a,new F(o.sx??1,o.sy??1,o.sz??1)),s.setMatrixAt(l,r)}),s.instanceMatrix.needsUpdate=!0,s.computeBoundingBox(),s.computeBoundingSphere(),s.castShadow=n,s.receiveShadow=!0,s}function d_(i,{anisotropy:t=4}={}){const e=i.floor||{w:60,d:40},{w:n,d:s}=e,r=l_(e),a=new Ge,o=i.elements||[],l=i.aisles||[],h=o.filter(I=>I.kind!=="label"&&I.kind!=="crane").map(I=>o_(I,.45)),d=(I,H,O=.3)=>!h.some(_=>I+O>_[0]&&I-O<_[1]&&H+O>_[2]&&H-O<_[3]),p=Math.max(n,s),c=new Vt(new En(p*8,p*8),je("#a9b1ba",{roughness:.95}));c.rotation.x=-Math.PI/2,c.position.y=-.04,c.receiveShadow=!0,a.add(c);const u=c_(n/6,s/6);u.anisotropy=t;const m=new Vt(new En(n,s),je("#bfc5cc",{map:u,roughness:.78,metalness:0}));m.rotation.x=-Math.PI/2,m.receiveShadow=!0,a.add(m);const M=.25,f=.6,g=[],A=je("#98a1ab",{roughness:.9}),b=je("#7d97ad",{roughness:.1,metalness:.4,transparent:!0,opacity:.75}),w=je("#5b636c",{roughness:.6,metalness:.3}),q=je("#8a97a4",{roughness:.55,metalness:.35}),N=je("#ffffff",{map:_h(),roughness:.6});[{len:n+2*M,x:0,z:-s/2-M/2,ry:0,normal:[0,0,-1],door:!1},{len:n+2*M,x:0,z:s/2+M/2,ry:0,normal:[0,0,1],door:!1},{len:s,x:-n/2-M/2,z:0,ry:Math.PI/2,normal:[-1,0,0],door:s>14},{len:s,x:n/2+M/2,z:0,ry:Math.PI/2,normal:[1,0,0],door:s>14}].forEach(I=>{const H=new Ge;H.position.set(I.x,0,I.z),H.rotation.y=I.ry,H.add(Xn(I.len,f,M+.04,A,0,f/2,0));const O=new Ge,_=je("#c7d0da",{map:h_(I.len/1),roughness:.6,metalness:.15}),y=r*.56,x=Math.min(r-.6,r*.74);if(O.add(Xn(I.len,y-f,M,_,0,f+(y-f)/2,0)),O.add(Xn(I.len,x-y,M*.5,b,0,(y+x)/2,0,{shadow:!1})),O.add(Xn(I.len,r-x,M,_,0,(x+r)/2,0)),O.add(Xn(I.len+.1,.18,M+.1,w,0,r+.09,0)),I.door){const L=Math.min(4.5,r*.62),P=-Math.sign(I.normal[0]||I.normal[2])*(M/2+.02),tt=Xn(4.5,L-f,.06,q,0,f+(L-f)/2,0);tt.position.z=P,O.add(tt),[-1,1].forEach($=>{const z=Xn(.22,L,.22,N,$*2.36,L/2,tt.position.z*1.6);O.add(z)})}H.add(O),a.add(H),g.push({upper:O,normal:new F(...I.normal),center:new F(I.x,r/2,I.z)})});const Y=e.columns===0?0:e.columns||12;if(Y>0){const I=Math.max(1,Math.round(n/Y)),H=Math.max(1,Math.round(s/Y)),O=Array.from({length:I+1},($,z)=>-n/2+z*n/I),_=Array.from({length:H+1},($,z)=>-s/2+z*s/H),y=($,z)=>l.some(Z=>Math.abs($-Z.x)<Z.w/2+.3&&Math.abs(z-Z.z)<Z.d/2+.3),x=[];if(O.forEach($=>{x.push([$,-s/2+.22]),x.push([$,s/2-.22])}),_.slice(1,-1).forEach($=>{x.push([-n/2+.22,$]),x.push([n/2-.22,$])}),s>26){const $=Math.max(1,Math.round(s/24)-1);for(let z=1;z<=$;z+=1){const Z=-s/2+z*s/($+1);O.slice(1,-1).forEach(at=>x.push([at,Z]))}}const C=x.filter(([$,z])=>d($,z,.35)&&!y($,z)),L=new xe(1,1,1),P=je("#7c8894",{roughness:.5,metalness:.45});[Yi(L,P,C.map(([$,z])=>({x:$,y:r/2,z:z-.17,sx:.4,sy:r,sz:.04}))),Yi(L,P,C.map(([$,z])=>({x:$,y:r/2,z:z+.17,sx:.4,sy:r,sz:.04}))),Yi(L,P,C.map(([$,z])=>({x:$,y:r/2,z,sx:.04,sy:r,sz:.32}))),Yi(L,N,C.map(([$,z])=>({x:$,y:.6,z,sx:.5,sy:1.2,sz:.5})))].filter(Boolean).forEach($=>a.add($))}const Q=je("#d3d7dc",{roughness:.8,transparent:!0,opacity:.6,polygonOffset:!0,polygonOffsetFactor:-1}),v=je("#f2b100",{roughness:.55}),S=[];l.forEach(I=>{const H=new Vt(new En(I.w,I.d),Q);H.rotation.x=-Math.PI/2,H.position.set(I.x,.004,I.z),H.receiveShadow=!0,a.add(H);const O=I.w>=I.d,_=O?I.w:I.d,y=(O?I.d:I.w)/2-.08;[-1,1].forEach(x=>{const C=Xn(O?_:.12,.006,O?.12:_,v,I.x+(O?0:x*y),.006,I.z+(O?x*y:0),{shadow:!1});a.add(C)}),[-1,1].forEach(x=>[-1,1].forEach(C=>S.push([I.x+x*(I.w/2+.3),I.z+C*(I.d/2+.3)])))}),(i.zones||[]).forEach(I=>{const H=I.color||"#2563eb",O=new Vt(u_(I.w,I.d,.12,.9,.55),new mn({color:H,transparent:!0,opacity:.85,toneMapped:!1,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));if(O.position.set(I.x,.008,I.z),a.add(O),I.name){const{texture:_,aspect:y}=r_(String(I.name).toUpperCase());_.anisotropy=t;let x=Math.min(1.3,Math.max(.55,I.d*.08)),C=x*y;C>I.w-1.2&&(C=Math.max(1,I.w-1.2),x=C/y);const L=new Vt(new En(C,x),new mn({map:_,transparent:!0,opacity:.32,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));L.rotation.x=-Math.PI/2,L.position.set(I.x-I.w/2+.6+C/2,.01,I.z-I.d/2+.45+x/2),a.add(L)}});const X=S.filter(([I,H])=>Math.abs(I)<n/2-.3&&Math.abs(H)<s/2-.3&&d(I,H,.2)).slice(0,160);if(X.length){const I=new Ve(.1,.1,1,14);a.add(Yi(I,je("#f2b100",{roughness:.5}),X.map(([H,O])=>({x:H,y:.5,z:O,sy:1})))),a.add(Yi(I,je("#1f2328",{roughness:.6}),X.map(([H,O])=>({x:H,y:.72,z:O,sx:1.03,sy:.12,sz:1.03}))))}return{group:a,walls:g,height:r}}function f_(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new qe;let h=0;for(let d=0;d<i.length;++d){const p=i[d];let c=0;if(e!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const u in p.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(p.attributes[u]),c++}if(c!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(o!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const u in p.morphAttributes){if(!s.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;a[u]===void 0&&(a[u]=[]),a[u].push(p.morphAttributes[u])}if(t){let u;if(e)u=p.index.count;else if(p.attributes.position!==void 0)u=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,u,d),h+=u}}if(e){let d=0;const p=[];for(let c=0;c<i.length;++c){const u=i[c].index;for(let m=0;m<u.count;++m)p.push(u.getX(m)+d);d+=i[c].attributes.position.count}l.setIndex(p)}for(const d in r){const p=pc(r[d]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;l.setAttribute(d,p)}for(const d in a){const p=a[d][0].length;if(p===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[d]=[];for(let c=0;c<p;++c){const u=[];for(let M=0;M<a[d].length;++M)u.push(a[d][M][c]);const m=pc(u);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;l.morphAttributes[d].push(m)}}return l}function pc(i){let t,e,n,s=-1,r=0;for(let h=0;h<i.length;++h){const d=i[h];if(t===void 0&&(t=d.array.constructor),t!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=d.itemSize),e!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=d.normalized),n!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=d.gpuType),s!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=d.count*e}const a=new t(r),o=new Qe(a,e,n);let l=0;for(let h=0;h<i.length;++h){const d=i[h];if(d.isInterleavedBufferAttribute){const p=l/e;for(let c=0,u=d.count;c<u;c++)for(let m=0;m<e;m++){const M=d.getComponent(c,m);o.setComponent(c+p,m,M)}}else a.set(d.array,l);l+=d.count*e}return s!==void 0&&(o.gpuType=s),o}const Mr={machine:"#2c6cb0",cnc:"#2c6cb0",mill:"#2c6cb0",lathe:"#2c6cb0",press:"#2f7d52",robot:"#f08a1c",conveyor:"#5c6670",oven:"#2c6cb0",tank:"#8d99a6",workstation:"#2c6cb0",saw:"#f0a30a",shear:"#2f5d8f",plasma:"#e8641b",furnace:"#5a6570",drill:"#557a66",welding:"#1f6fd1",blast:"#4e6a85",paint_booth:"#2c6cb0",packing:"#2c6cb0",agv:"#f2b705",forklift:"#f2b705",crane:"#f2b705",custom:"#8a97a4"},se={body:"#e3e6ea",bodyDark:"#c9ced4",dark:"#2e3339",frame:"#59626c",steel:"#aab3bc",bright:"#c9d0d6",rubber:"#1d2024",wood:"#c4975d",cardboard:"#b98a57",crate:"#5b7894",rackBlue:"#1f5aa6",rackOrange:"#ef6c1a",yellow:"#f2b100",glass:"#86aac6",vest:["#f97316","#facc15"],trousers:"#273246",skin:"#e0b08a",helmet:["#f8fafc","#facc15","#f8fafc"]},yr=(i,t,e)=>Math.min(e,Math.max(t,i));function p_(i){let t=2166136261;for(const n of String(i))t=Math.imul(t^n.charCodeAt(0),16777619);let e=t>>>0;return()=>{e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function m_(){const i=document.createElement("canvas");i.width=64,i.height=64;const t=i.getContext("2d");t.clearRect(0,0,64,64),t.fillStyle="#ffffff",t.fillRect(0,0,64,5),t.fillRect(0,0,5,64);const e=new yi(i);return e.wrapS=Jn,e.wrapT=Jn,e.repeat.set(14,20),e}class Ia{constructor(t){this.kit=t,this.groups=new Map}add(t,e,n){const s=t+"|"+e.uuid;this.groups.has(s)||this.groups.set(s,{shape:t,material:e,items:[]}),this.groups.get(s).items.push(n)}flush(t){const e=new re,n=new Fn,s=new on,r=new Gt;this.groups.forEach(({shape:a,material:o,items:l})=>{const h=a==="cyl"?this.kit.unitCylX:this.kit.unitBox,d=new ah(h,o,l.length);l.forEach((p,c)=>{s.set(p.rx||0,p.ry||0,p.rz||0),n.setFromEuler(s),e.compose(new F(p.x,p.y,p.z),n,new F(p.sx,p.sy,p.sz)),d.setMatrixAt(c,e),p.color?d.setColorAt(c,r.set(p.color)):d.instanceColor&&d.setColorAt(c,r.set("#ffffff"))}),d.instanceColor&&(d.instanceColor.needsUpdate=!0),d.instanceMatrix.needsUpdate=!0,d.computeBoundingBox(),d.computeBoundingSphere(),d.castShadow=!0,d.receiveShadow=!0,t.add(d)}),this.groups.clear()}}class g_{constructor(){this.materials=new Map,this.glow=a_(),this.hazard=_h(),this.fenceMesh=m_(),this.unitBox=new xe(1,1,1),this.unitCylX=new Ve(.5,.5,1,18).rotateZ(Math.PI/2)}mat(t,e){return this.materials.has(t)||this.materials.set(t,e()),this.materials.get(t)}paint(t,e=.5,n=.2){return this.mat(`p${t}|${e}|${n}`,()=>new Fe({color:t,roughness:e,metalness:n}))}get m(){const t=this;return{body:t.paint(se.body,.45,.15),bodyDark:t.paint(se.bodyDark,.5,.2),dark:t.paint(se.dark,.55,.35),frame:t.paint(se.frame,.5,.45),steel:t.paint(se.steel,.32,.8),bright:t.paint(se.bright,.22,.9),rubber:t.paint(se.rubber,.9,0),wood:t.paint(se.wood,.85,0),yellow:t.paint(se.yellow,.45,.15),rackBlue:t.paint(se.rackBlue,.45,.35),rackOrange:t.paint(se.rackOrange,.45,.25),cardboard:t.mat("cardboard",()=>new Fe({color:"#ffffff",roughness:.92,metalness:0})),steelInst:t.mat("steelInst",()=>new Fe({color:"#ffffff",roughness:.35,metalness:.75})),glass:t.mat("glass",()=>new Fe({color:se.glass,roughness:.08,metalness:.2,transparent:!0,opacity:.38,depthWrite:!1})),screen:t.mat("screen",()=>new Fe({color:"#0d1b2a",emissive:"#3b82f6",emissiveIntensity:.7,roughness:.3})),hazard:t.mat("hazard",()=>new Fe({map:t.hazard,roughness:.55})),fence:t.mat("fence",()=>new Fe({color:"#30353b",map:t.fenceMesh,alphaMap:t.fenceMesh,transparent:!0,alphaTest:.35,side:dn,roughness:.6,metalness:.4})),film:t.mat("film",()=>new Fe({color:"#e2ecf3",transparent:!0,opacity:.32,roughness:.15,depthWrite:!1})),curtain:t.mat("curtain",()=>new Fe({color:"#c2410c",transparent:!0,opacity:.55,roughness:.5,side:dn,depthWrite:!1})),liquid:t.mat("liquid",()=>new Fe({color:"#203a52",roughness:.06,metalness:.35})),hot:t.mat("hot",()=>new mn({color:"#ff7a1a",toneMapped:!1})),lamp:t.mat("lamp",()=>new mn({color:"#f5f8ff",toneMapped:!1}))}}glowSprite(t,e){const n=new rh(new Xo({map:this.glow,color:t,blending:Fa,transparent:!0,depthWrite:!1,toneMapped:!1,opacity:0}));return n.scale.set(e,e,1),n}build(t,e,{hallH:n=8}={}){const s=new Ge,r=this,a=this.m,o=t.kind,l=this.paint(t.color||Mr[o]||Mr.custom,.42,.2),h=this.paint(new Gt(t.color||Mr[o]||Mr.custom).multiplyScalar(.62).getStyle(),.5,.25),d=p_(t.id),p=new Ia(this),{w:c,h:u,d:m}=t;e.animators=e.animators||[],e.andonAt=null,e.top=u,e.front=m/2;const M=(_,y,x,C,L,P=s,tt=0,$=0,z=0)=>{const Z=new Vt(_,y);return Z.position.set(x,C,L),Z.rotation.set(tt,$,z),Z.castShadow=!0,Z.receiveShadow=!0,P.add(Z),Z},f=(_,y,x,C,L,P,tt,$=s)=>M(new xe(Math.max(.01,_),Math.max(.01,y),Math.max(.01,x)),C,L,P,tt,$),g=(_,y,x,C,L,P,tt=s,$=_,z=20)=>M(new Ve(_,$,Math.max(.01,y),z),x,C,L,P,tt),A=(_,y,x,C,L,P,tt=s,$=20)=>M(new Ve(_,_,Math.max(.01,y),$),x,C,L,P,tt,0,0,Math.PI/2),b=(_,y,x,C,L,P,tt=s,$=20)=>M(new Ve(_,_,Math.max(.01,y),$),x,C,L,P,tt,Math.PI/2,0,0),w=(_,y,x,C=s)=>{const L=new Ge;return L.position.set(_,y,x),C.add(L),L},q=_=>(_.userData.keep=!0,_),N=(_,y,x,C=0,L=s)=>{const P=w(_,y,x,L);return P.rotation.y=C,f(.46,.36,.1,a.dark,0,0,0,P),f(.36,.25,.012,a.screen,0,.02,.056,P),f(.05,.05,.3,a.frame,0,0,-.2,P),P},D=(_,y,x,C,L=0,P=.16,tt=.045)=>{for(let $=_+P/2;$<y;$+=P)p.add("cyl",a.steelInst,{x:$,y:x,z:L,sx:C,sy:tt*2,sz:tt*2,ry:Math.PI/2,color:"#b8c0c8"})},Y=(_,y,x,C,L=0)=>{const P=y-_;if(P<.3)return;[-1,1].forEach($=>f(P,.1,.06,a.frame,(_+y)/2,x-.05,L+$*(C/2-.03)));const tt=Math.max(2,Math.round(P/1.4)+1);for(let $=0;$<tt;$+=1){const z=_+.08+$*(P-.16)/(tt-1);[-1,1].forEach(Z=>f(.06,x-.1,.06,a.frame,z,(x-.1)/2,L+Z*(C/2-.06)))}D(_,y,x+.01,C-.12,L)},Q=(_,y,x,C,L,P,tt)=>{const $=_==="mixed"?["boxes","parts","steel","coils"][Math.floor(d()*4)]:_||"boxes";if($!=="empty")if($==="boxes"){const z=Math.max(1,Math.round(tt/.42)),Z=tt/z;for(let at=0;at<z;at+=1)[-1,1].forEach(ct=>[-1,1].forEach(mt=>{const St=.85+d()*.25;p.add("box",a.cardboard,{x:y+ct*L/4,y:x+Z*at+Z/2,z:C+mt*P/4,sx:L/2-.02,sy:Z-.01,sz:P/2-.02,color:new Gt(se.cardboard).multiplyScalar(St).getStyle()})}))}else if($==="steel"){const Z=Math.max(1,Math.min(3,Math.round(tt/.12)));for(let at=0;at<Z;at+=1)for(let ct=0;ct<4;ct+=1)p.add("box",a.steelInst,{x:y,y:x+.06+at*.11,z:C-P/2+(ct+.5)*(P/4),sx:L*1.15,sy:.1,sz:P/4-.03,color:d()>.5?"#9aa4ad":"#7e8892"})}else if($==="coils"){const z=Math.min(L,P)*.42;p.add("cyl",a.steelInst,{x:y,y:x+z,z:C,sx:Math.min(L,.55),sy:z*2,sz:z*2,color:"#8f99a3"})}else p.add("box",a.cardboard,{x:y,y:x+tt*.42,z:C,sx:L,sy:tt*.84,sz:P,color:se.crate}),p.add("box",a.steelInst,{x:y,y:x+tt*.86,z:C,sx:L*.8,sy:.05,sz:P*.8,color:"#6f7b86"})},v=(_,y,x,C,L,P,tt)=>{p.add("box",a.cardboard,{x:_,y:y+.07,z:x,sx:C,sy:.14,sz:L,color:se.wood}),Q(P,_,y+.14,x,C-.04,L-.04,tt)},S=(_,y,x,C,L,P=0)=>{const tt=Math.hypot(x-_,C-y),$=Math.atan2(C-y,x-_),z=Math.max(1,Math.ceil(tt/1.4)),Z=tt/z;for(let at=0;at<=z;at+=1){const ct=at*Z;p.add("box",a.cardboard,{x:_+Math.cos($)*ct,y:L/2,z:y+Math.sin($)*ct,sx:.07,sy:L,sz:.07,color:se.yellow})}for(let at=0;at<z;at+=1){const ct=(at+.5)*Z;if(P&&Math.abs(ct-tt/2)<P/2)continue;const mt=_+Math.cos($)*ct,St=y+Math.sin($)*ct,Wt=M(new xe(Z-.08,L-.2,.02),a.fence,mt,.12+(L-.2)/2,St,s,0,-$,0);Wt.castShadow=!1,p.add("box",a.cardboard,{x:mt,y:.07,z:St,sx:Z-.08,sy:.12,sz:.025,ry:-$,color:"#6b7480"})}},X=(_,y,x,C=0,L=0)=>{const P=C-_/2,tt=C+_/2,$=L-y/2,z=L+y/2;S(P,$,tt,$,x),S(P,z,tt,z,x,Math.min(1.4,_*.3)),S(P,$,P,z,x),S(tt,$,tt,z,x)},I=(_,y,x,C,L="#ffd27a",P=.9)=>{const tt=r.glowSprite(L,P);return tt.position.set(y,x,C),_.add(tt),tt},H=(_,y,x=1)=>{const C=Math.random();_.material.opacity=y?C>.25?.95:.35:0;const L=x*(.6+C*.9);_.scale.set(L,L,1)};switch(o){case"machine":case"cnc":case"mill":{const _=Math.min(.32,u*.1),y=(o==="mill"?u*.74:u*.86)-_;f(c,_,m,a.dark,0,_/2,0),f(c,y,m*.96,a.body,0,_+y/2,0),f(c+.04,u*.05,m*.96+.04,l,0,_+y-u*.032,0),f(c+.04,.08,m*.96+.04,h,0,_+.05,0);const x=c*.56,C=y*.74,L=_+y*.47;f(x,C,.05,a.bodyDark,-c*.12,L,m*.48+.025),f(x*.78,C*.6,.02,a.glass,-c*.12,L+C*.08,m*.48+.06),f(.04,C*.45,.06,a.steel,-c*.12+x*.42,L,m*.48+.08);const P=w(-c*.12,_,0);f(x*.7,.12,m*.45,a.frame,0,y*.28,0,P);const tt=g(Math.min(c,m)*.05,y*.22,a.bright,0,y*.62,0,P),$=f(x*.6,.02,m*.3,a.lamp,0,y*.92,0,P);$.visible=!1,N(c*.36,_+y*.62,m*.48+.22,-.25),o==="mill"&&(f(c*.36,u*.2,m*.42,a.body,-c*.1,u*.74+u*.1,-m*.22),f(c*.36+.03,.06,m*.42+.03,l,-c*.1,u*.94+.03,-m*.22),e.top=u*.94),o!=="machine"&&(A(Math.min(u*.22,m*.3),.32,l,-c/2+.1,_+y*.55,-m*.1),f(.5,_+.55,m*.5,a.frame,c/2-.25,(_+.55)/2,-m*.2)),e.andonAt=[c*.42,_+y,-m*.36],e.animators.push((z,Z,at,ct)=>{$.visible=at,at&&(tt.rotation.y+=Z*28,tt.position.y=y*.62-.05*(.5+.5*Math.sin(z*1.3+ct)),P.children[0].position.x=Math.sin(z*.5+ct)*x*.12)});break}case"lathe":{const _=u*.24;f(c,_,m*.8,a.dark,0,_/2,-m*.05),f(c*.96,u*.7,m*.86,a.body,0,_+u*.35,0),f(c*.96+.04,u*.05,m*.86+.04,l,0,_+u*.7,0),f(c*.5,u*.42,.03,a.glass,-c*.08,_+u*.38,m*.43+.03),f(c*.52,.05,.05,a.steel,-c*.08,_+u*.12,m*.43+.05);const y=w(-c*.28,_+u*.36,0);A(u*.11,.24,a.steel,0,0,0,y);for(let x=0;x<3;x+=1)f(.06,.06,.08,a.dark,.13,0,0,y).position.set(.13,Math.cos(x*2*Math.PI/3)*u*.08,Math.sin(x*2*Math.PI/3)*u*.08);A(u*.035,c*.32,a.bright,c*.17,0,0,y),f(.32,.3,.32,a.dark,c*.12,_+u*.42,.05),N(c*.4,_+u*.42,m*.43+.22,-.3),f(.6,_+.45,.5,a.frame,c/2-.3,(_+.45)/2,-m*.3),e.top=_+u*.725,e.andonAt=[c*.44,_+u*.725,-m*.32],e.animators.push((x,C,L)=>{L&&(y.rotation.x+=C*22)});break}case"drill":{const _=this.paint("#56605a",.6,.3);f(c,u*.08,m,_,0,u*.04,0);const y=Math.min(c,m)*.09;g(y,u*.86,l,-c*.36,u*.08+u*.43,0),g(y*1.15,u*.1,h,-c*.36,u*.99,0),f(c*.3,u*.12,m*.4,a.steel,c*.22,u*.08+u*.06,0);const x=w(-c*.36,u*.72,0);f(c*.84,u*.1,m*.22,l,c*.42,0,0,x);const C=w(c*.6,0,0,x);f(c*.2,u*.28,m*.3,l,0,-u*.04,0,C),g(.12,u*.12,a.dark,0,u*.16,0,C);const L=g(.045,u*.2,a.bright,0,-u*.26,0,C,.02);e.top=u*1.04,e.andonAt=[-c*.36,u*1.04,0],e.animators.push((P,tt,$,z)=>{$&&(x.rotation.y=Math.sin(P*.22+z)*.3,L.rotation.y+=tt*24,L.position.y=-u*.26-.08*(.5+.5*Math.sin(P*1.1+z)))});break}case"saw":{const _=Math.min(c*.42,2.6),y=c/2-_/2-c*.08,x=u*.42;f(_,x,m*.78,a.body,y,x/2,-m*.02),f(_+.04,.08,m*.78+.04,l,y,x-.12,-m*.02),f(_*1.06,.06,m*.82,a.dark,y,x+.03,-m*.02),f(.16,.3,m*.3,a.steel,y-_*.3,x+.2,-m*.1),f(.16,.3,m*.3,a.steel,y-_*.3,x+.2,m*.14);const C=w(y+_*.5,x+u*.12,-m*.05);f(_*1.12,u*.2,m*.34,l,-_*.56,u*.18,0,C),b(u*.17,m*.38,h,-_*1.06,u*.18,0,C),b(u*.17,m*.38,h,-.06,u*.18,0,C),f(.1,u*.2,.12,a.steel,-_*.78,u*.02,.05,C),f(.1,u*.2,.12,a.steel,-_*.34,u*.02,.05,C),f(_*.46,.02,.03,a.dark,-_*.56,-u*.06,.05,C),g(.05,u*.32,a.bright,y+_*.2,x+u*.2,-m*.3),Y(-c/2,y-_/2,x,m*.4,.02),Y(y+_/2,c/2,x,m*.4,.02),f(Math.max(.3,y-_/2+c/2-.2),.09,.09,a.bright,(-c/2+y-_/2)/2,x+.1,.02),f(Math.max(.3,y-_/2+c/2-.4),.09,.09,a.bright,(-c/2+y-_/2)/2,x+.1,.13),N(y-_*.2,x+u*.35,m*.42,.2),e.top=x+u*.48,e.andonAt=[y+_*.42,x+.03,-m*.36],e.animators.push((L,P,tt,$)=>{const z=((L*.07+$)%1+1)%1;C.rotation.z=tt?-.2*(1-z):-.25});break}case"shear":{const _=c/2-c*.07;[-1,1].forEach(x=>f(c*.12,u,m*.72,l,x*_,u/2,-m*.08)),f(c*.82,u*.42,m*.5,h,0,u*.21,-m*.08),f(c*.84,.05,m*.58,a.steel,0,u*.43,-m*.05);const y=w(0,u*.72,-m*.1);f(c*.78,u*.22,m*.32,l,0,0,0,y),f(c*.76,u*.06,.04,a.bright,0,-u*.13,m*.17,y),[-1,1].forEach(x=>g(Math.min(.18,c*.04),u*.22,a.steel,x*c*.3,u+u*.06,-m*.1));for(let x=-1;x<=1;x+=1)f(.08,.06,m*.42,a.frame,x*c*.3,u*.43,m*.29);f(c*.6,.02,m*.34,this.paint("#8693a0",.3,.7),0,u*.465,m*.24),f(c*.7,.1,.1,a.dark,0,u*.47,-m*.4),[-1,1].forEach(x=>f(.07,u*.6,.07,a.hazard,x*c*.46,u*.3,m*.46)),N(c*.47,u*.62,m*.4,-.4),e.andonAt=[_,u,-m*.36],e.animators.push((x,C,L,P)=>{y.position.y=L?u*.72-u*.09*Math.max(0,Math.sin(x*2+P)):u*.72});break}case"plasma":{const _=Math.min(u*.32,.8);f(c*.84,_,m*.8,a.dark,-c*.05,_/2,0);for(let L=-c*.46;L<c*.36;L+=.28)p.add("box",a.steelInst,{x:L,y:_+.05,z:0,sx:.025,sy:.1,sz:m*.78,color:"#5d666f"});f(c*.7,.025,m*.64,this.paint("#7f8b96",.3,.75),-c*.06,_+.11,0),[-1,1].forEach(L=>f(c,.12,.16,a.steel,0,_+.08,L*m*.45));const y=w(0,0,0);[-1,1].forEach(L=>f(.36,u-_-.1,.3,l,0,_+.14+(u-_-.1)/2,L*m*.45,y)),f(.42,.45,m*.98,l,0,u-.22,0,y),f(.18,.1,m*.9,a.dark,-.12,u+.02,0,y);const x=w(.3,0,0,y);f(.32,.5,.3,a.dark,0,u-.45,0,x),g(.035,u-_-.8,a.bright,0,_+.2+(u-_-.8)/2,0,x);const C=I(x,0,_+.16,0,"#ffd9a0",1.1);f(.5,1.3,.6,a.body,c/2-.3,.65,m*.24),f(.36,.26,.02,a.screen,c/2-.3,1,m*.24+.31),e.andonAt=[c/2-.3,1.3,m*.12],e.animators.push((L,P,tt,$)=>{tt&&(y.position.x=Math.sin(L*.28+$)*c*.32,x.position.z=Math.sin(L*.85+$)*m*.3),H(C,tt,1.1)});break}case"furnace":{const _=m*.78,y=-m*.11,x=this.paint("#5b6571",.65,.35);f(c,u*.8,_,x,0,u*.4,y),f(c*1.02,u*.05,_*1.02,this.paint("#7b8794",.5,.4),0,u*.825,y),[-1,1].forEach($=>f(.18,u*.96,.2,a.steel,$*c*.34,u*.48,y+_/2+.1)),f(c*.72,.2,.22,a.steel,0,u*.95,y+_/2+.1);const C=f(c*.5,u*.42,.02,a.hot,0,u*.27,y+_/2+.005);q(C).castShadow=!1,C.visible=!1;const L=w(0,0,y+_/2+.12);f(c*.6,u*.55,.2,this.paint("#97a1ab",.45,.45),0,u*.3,0,L);const P=f(.12,.12,.02,a.hot,0,u*.42,.11,L);P.visible=!1;const tt=I(s,0,u*.2,y+_/2+.6,"#ff8a3d",c*.8);[-1,1].forEach($=>{for(let z=0;z<3;z+=1)A(.09,.32,a.steel,$*(c/2+.12),u*.2+z*u*.18,y-_*.2+z*.4);f(.06,.06,_*.9,a.yellow,$*(c/2+.06),u*.12,y)}),g(.28,u*.55,a.steel,c*.3,u*.8+u*.275,y-_*.3),g(.36,.08,a.dark,c*.3,u*1.1,y-_*.3),f(.7,2,.45,a.body,-c*.43,1,m*.36),f(.32,.24,.02,a.screen,-c*.43,1.45,m*.36+.23),[-1,1].forEach($=>f(.08,.05,m/2-(y+_/2),a.steel,$*c*.15,.03,(y+_/2+m/2)/2)),e.top=u*1.1,e.andonAt=[c*.42,u*.85,y+_*.3],e.animators.push(($,z,Z,at)=>{const ct=(($*.045+at)%1+1)%1,mt=Z&&ct<.18;L.position.y+=((mt?u*.36:0)-L.position.y)*Math.min(1,z*2),C.visible=Z,P.visible=Z,tt.material.opacity=mt?.55+.15*Math.sin($*7):0});break}case"tank":{if(Math.abs(c-m)<.35*Math.max(c,m)){const y=Math.min(c,m)/2*.92,x=u*.14;for(let C=0;C<4;C+=1){const L=C*Math.PI/2+Math.PI/4;f(.12,x,.12,a.frame,Math.cos(L)*y*.75,x/2,Math.sin(L)*y*.75)}g(y,u*.72,a.steel,0,x+u*.36,0,s,y,32),M(new qn(y,32,12,0,Math.PI*2,0,Math.PI/2),a.steel,0,x+u*.72,0).scale.y=.35,g(y*.98,.06,a.frame,0,x+u*.5,0,s,y*.98,32),[-1,1].forEach(C=>f(.04,u*.8,.04,a.yellow,y+.15,x+u*.4,C*.2));for(let C=x+.3;C<u*.95;C+=.3)p.add("box",a.cardboard,{x:y+.15,y:C,z:0,sx:.03,sy:.03,sz:.4,color:se.yellow});A(.08,y*.8,a.frame,-y-.2,x+.3,0),e.andonAt=[0,x+u*.72+y*.35,0]}else{const y=u*.62,x=.12;f(c,y,x,a.steel,0,y/2,-m/2+x/2),f(c,y,x,a.steel,0,y/2,m/2-x/2),f(x,y,m,a.steel,-c/2+x/2,y/2,0),f(x,y,m,a.steel,c/2-x/2,y/2,0),f(c-x*2,.02,m-x*2,a.liquid,0,y-.15,0),[-1,1].forEach(P=>{f(c,.04,.04,a.yellow,0,y+1,P*(m/2-.05)),f(.04,.04,m,a.yellow,P*(c/2-.05),y+1,0)});for(let P=-c/2+.05;P<=c/2;P+=Math.max(.6,c/5))[-1,1].forEach(tt=>p.add("box",a.cardboard,{x:P,y:y+.5,z:tt*(m/2-.05),sx:.04,sy:1,sz:.04,color:se.yellow}));[-1,1].forEach(P=>f(.16,u,.16,h,P*c*.36,u/2,-m*.36)),f(c*.8,.2,.2,h,0,u-.1,-m*.36);const C=w(0,0,-m*.05);f(c*.45,.5,m*.45,this.paint("#4a525b",.6,.6),0,0,0,C),g(.02,1,a.dark,0,.75,0,C),g(.22,.45,l,c*.36,y+.25,m*.3);const L=[0,1,2].map(P=>I(s,(P-1)*c*.2,y+.3,0,"#f1f5f9",1.6));L.forEach(P=>P.material.blending=mi),e.top=u,e.andonAt=[c*.36,u,-m*.36],e.animators.push((P,tt,$,z)=>{const Z=((P*.06+z)%1+1)%1;C.position.y=$?y+.3-Math.sin(Z*Math.PI)*(y*.7):y+.4,L.forEach((at,ct)=>{const mt=((P*.25+ct/3+z)%1+1)%1;at.position.y=y+.2+mt*2.4,at.material.opacity=$?.32*(1-mt):0;const St=1.2+mt*2.2;at.scale.set(St,St,1)})})}break}case"welding":{const _=yr(u*.85,.8,.95),y=Math.min(c*.55,2),x=Math.min(m*.5,1.1),C=-c*.12,L=m*.08;f(y,.08,x,a.dark,C,_,L),[-1,1].forEach(ct=>[-1,1].forEach(mt=>f(.07,_,.07,a.frame,C+ct*(y/2-.08),_/2,L+mt*(x/2-.08)))),f(y*.55,.1,x*.4,a.bright,C,_+.09,L),f(.08,.45,x*.4,a.bright,C+y*.15,_+.3,L);const P=w(c*.3,0,-m*.22);f(.55,.72,.45,l,0,.5,0,P),f(.56,.16,.02,a.yellow,0,.66,.23,P),[-1,1].forEach(ct=>b(.08,.06,a.rubber,ct*.2,.08,.2,P)),g(.11,1.35,this.paint("#2f6f4f",.4,.3),c*.43,.7,-m*.38),g(.07,.12,a.steel,c*.43,1.42,-m*.38);const tt=Math.max(1.8,u*1.6);[[-c/2+.05,-m/2+.05],[c*.2,-m/2+.05],[-c/2+.05,m*.35]].forEach(([ct,mt])=>f(.04,tt,.04,a.yellow,ct,tt/2,mt));const $=f(c*.7,tt-.35,.02,a.curtain,-c*.15,.2+(tt-.35)/2,-m/2+.05);$.castShadow=!1;const z=f(.02,tt-.35,m*.8,a.curtain,-c/2+.05,.2+(tt-.35)/2,-m*.07);z.castShadow=!1,g(.05,2.1,a.steel,-c*.3,1.05,-m*.4),M(new Ve(.06,.06,1,10),a.steel,-c*.22,2,-m*.2,s,.9,0,0),M(new Fr(.2,.3,14,1,!0),a.steel,C,_+.75,L-.1,s,0,0,0).rotation.x=Math.PI;const Z=I(s,C+.1,_+.2,L,"#cfe6ff",1.4),at=I(s,C+.1,_+.18,L+.05,"#ffb347",.7);e.top=tt,e.andonAt=[c*.3,.86,-m*.22],e.animators.push((ct,mt,St)=>{H(Z,St,1.4),H(at,St,.8)});break}case"robot":{const _=yr(Math.min(u,3)/2.4,.7,1.4),y=Math.min(c,m)>=3.5,x=y?-c*.14:0;f(.8*_,.45*_,.8*_,a.dark,x,.225*_,0);const C=w(x,.45*_,0);g(.33*_,.22*_,l,0,.11*_,0,C);const L=w(0,.22*_,0,C);f(.55*_,.32*_,.5*_,l,0,.16*_,0,L),f(.22*_,.22*_,.22*_,a.dark,-.27*_,.22*_,.2*_,L);const P=w(0,.4*_,0,L);b(.2*_,.5*_,l,0,0,0,P),f(.24*_,1*_,.28*_,l,0,.5*_,0,P);const tt=w(0,1*_,0,P);b(.17*_,.42*_,l,0,0,0,tt),f(.95*_,.2*_,.22*_,l,.45*_,0,0,tt),f(.26*_,.26*_,.26*_,a.dark,-.2*_,0,0,tt);const $=w(.95*_,0,0,tt);A(.09*_,.2*_,h,0,0,0,$),M(new Ve(.035*_,.035*_,.4*_,10),a.dark,.14*_,-.16*_,0,$,0,0,.6);const z=I($,.25*_,-.33*_,0,"#cfe6ff",1.3);if(P.rotation.z=-.35,tt.rotation.z=-.55,y){const Z=c*.2;f(.5,.9,.9,a.dark,Z-.7,.45,0),f(.5,.9,.9,a.dark,Z+.7,.45,0);const at=w(Z,.95,0);A(.5,.06,this.paint("#3a4048",.5,.5),-.5,0,0,at),A(.5,.06,this.paint("#3a4048",.5,.5),.5,0,0,at),f(.9,.12,.6,a.bright,0,0,0,at),f(.12,.4,.6,a.bright,.25,.2,0,at),X(c-.1,m-.1,2),f(.6,.9,.5,this.paint("#1f6fd1",.45,.2),-c/2+.55,.45,-m/2+.5),f(.6,1.8,.45,a.body,-c/2+1.3,.9,-m/2+.45),e.andonAt=[c/2-.1,2,m/2-.1],e.top=2.3,e.animators.push((ct,mt,St)=>{St&&(at.rotation.x+=mt*.4)})}else e.andonAt=[x+.42*_,.45*_,.3*_],e.top=2.2*_;e.animators.push((Z,at,ct,mt)=>{ct&&(L.rotation.y=Math.sin(Z*.7+mt)*.5,P.rotation.z=-.35+.14*Math.sin(Z*1.1+mt),tt.rotation.z=-.55+.2*Math.sin(Z*1.6+mt+1),$.rotation.x+=at*1.5),H(z,ct,1.3)});break}case"conveyor":{const _=Math.max(.4,u);[-1,1].forEach(x=>f(c,.14,.06,l,0,_-.07,x*(m/2-.03)));const y=Math.max(2,Math.round(c/1.6)+1);for(let x=0;x<y;x+=1){const C=-c/2+.1+x*(c-.2)/(y-1);[-1,1].forEach(L=>f(.06,_-.14,.06,a.frame,C,(_-.14)/2,L*(m/2-.08))),f(.05,.05,m-.16,a.frame,C,.25,0)}D(-c/2,c/2,_-.04,m-.1),f(.32,.26,.26,this.paint("#2c6cb0",.45,.3),c/2-.45,_-.32,m/2-.2),e.top=_;break}case"oven":{f(c*.86,u*.86,m,a.body,0,u*.43,0),f(c*.86+.04,u*.05,m+.04,l,0,u*.84,0);const _=[-1,1].map(y=>{const x=f(.02,u*.34,m*.6,a.hot,y*c*.43+y*.011,u*.3,0);return q(x).castShadow=!1,x.visible=!1,x});D(-c/2,-c*.43,u*.2,m*.62),D(c*.43,c/2,u*.2,m*.62),[-.25,.25].forEach(y=>g(.2,u*.4,a.steel,y*c,u*.86+u*.2,-m*.2)),N(c*.3,u*.5,m/2+.2,0),e.andonAt=[c*.38,u*.86,-m*.35],e.animators.push((y,x,C)=>_.forEach(L=>L.visible=C));break}case"press":{const _=c/2-c*.08;f(c,u*.18,m*.8,h,0,u*.09,0),[-1,1].forEach(x=>f(c*.16,u*.74,m*.7,l,x*_,u*.18+u*.37,0)),f(c,u*.16,m*.8,l,0,u*.92,0),g(Math.min(c,m)*.15,u*.14,a.steel,0,u*1.07,0),f(c*.62,u*.06,m*.6,a.steel,0,u*.21,0);const y=f(c*.6,u*.14,m*.55,a.frame,0,u*.62,0);q(y),[-1,1].forEach(x=>f(.07,u*.55,.07,a.hazard,x*c*.36,u*.45,m*.46)),N(c*.5+.1,u*.5,m*.3,-.6),e.top=u*1.14,e.andonAt=[_,u*1,-m*.3],e.animators.push((x,C,L,P)=>{y.position.y=L?u*.62-u*.2*(.5+.5*Math.sin(x*2.4+P)):u*.62});break}case"blast":{const _=w(-c*.06,0,0);f(c*.5,u*.72,m*.78,l,0,u*.36,0,_),f(c*.5+.04,u*.04,m*.78+.04,h,0,u*.7,0,_),[-1,1].forEach(x=>f(.03,u*.32,m*.42,a.rubber,x*(c*.25+.016),u*.26,0,_)),D(-c/2,-c*.31,u*.22,m*.42),D(c*.19,c/2,u*.22,m*.42),f(.5,u,.5,h,c*.1,u/2,-m*.38);const y=Math.min(c,m)*.15;g(y,u*.5,a.bodyDark,c*.38,u*.55,-m*.22,s,y,24),g(y,u*.25,a.bodyDark,c*.38,u*.18,-m*.22,s,.08,24),A(.14,c*.4,a.steel,c*.17,u*.86,-m*.22),[-1,1].forEach(x=>f(.04,.04,m*.78,a.yellow,-c*.06+x*c*.24,u*.72+1,0)),e.top=u,e.andonAt=[-c*.28,u*.72,m*.32],e.animators.push((x,C,L)=>{_.position.x=-c*.06+(L?(Math.random()-.5)*.02:0)});break}case"paint_booth":{const _=u*.82,y=this.paint("#eef1f4",.5,.05);f(c,_,.08,y,0,_/2,-m/2+.04),[-1,1].forEach(L=>f(.08,_,m,y,L*(c/2-.04),_/2,0)),f(c,.1,m,y,0,_+.05,0);const x=M(new En(c*.8,m*.6),a.lamp,0,_-.02,0,s,Math.PI/2,0,0);x.castShadow=!1,f(c*.8,_*.55,.16,this.paint("#9aa5b1",.7,.1),0,_*.4,-m/2+.17),f(c*.3,u*.18,m*.4,a.steel,-c*.2,_+.1+u*.09,-m*.15),g(.3,u*.12,a.steel,c*.2,_+.1+u*.06,-m*.2),f(c*1.3,.12,.12,a.dark,0,_-.35,0),[-1,1].forEach(L=>g(.04,1.4,a.dark,L*(c/2-.4),.7,m*.1));const C=[];for(let L=0;L<5;L+=1){const P=w(0,_-.4,0);g(.012,.5,a.dark,0,-.25,0,P),f(.55,.75,.06,this.paint(["#1d4ed8","#9aa4ad","#b91c1c"][L%3],.4,.35),0,-.9,0,P),C.push(P)}N(c/2+.15,1.3,m*.35,-1),e.andonAt=[c*.46,_+.1,m*.4],e.animators.push((L,P,tt,$)=>{C.forEach((z,Z)=>{const at=((L*(tt?.05:0)+Z/C.length+$)%1+1)%1;z.position.x=-c*.65+at*c*1.3})});break}case"packing":{const _=Math.min(c,m)*.3,y=w(-c*.08,0,0);g(_,.12,a.dark,0,.06,0,y,_,28),f(_*1.15,.14,_*.95,a.wood,0,.19,0,y);const x=Math.min(1.5,u*.55);for(let P=0;P<3;P+=1)[-1,1].forEach(tt=>[-1,1].forEach($=>f(_*.55,x/3-.02,_*.45,this.paint(new Gt(se.cardboard).multiplyScalar(.9+.1*((P+tt+$+4)%3)).getStyle(),.9,0),tt*_/3.6,.26+(P+.5)*(x/3),$*_/4.4,y)));const C=g(_*.72,x,a.film,0,.26+x/2,0,y,_*.72,24);C.castShadow=!1,f(.24,u,.24,a.body,c*.3,u/2,-m*.3);const L=w(c*.3,.6,-m*.3+.2);f(.36,.45,.3,l,0,0,0,L),g(.09,.5,this.paint("#f1f5f9",.3,0),-.12,0,.18,L),D(-c/2,-c*.08-_-.1,.4,m*.5),f(.5,1.4,.3,a.body,c*.4,.7,m*.35),f(.3,.2,.02,a.screen,c*.4,1.1,m*.35+.16),e.andonAt=[c*.3,u,-m*.3],e.animators.push((P,tt,$,z)=>{$&&(y.rotation.y+=tt*1.5,L.position.y=.4+(u-1)*(.5+.5*Math.sin(P*.35+z)))});break}case"workstation":{const _=Math.min(u,.92);f(c,.05,m,this.paint("#d7dde3",.6,.1),0,_,0),[-1,1].forEach(y=>[-1,1].forEach(x=>f(.05,_,.05,a.frame,y*(c/2-.06),_/2,x*(m/2-.06)))),[-1,1].forEach(y=>f(.04,1.1,.04,a.frame,y*(c/2-.06),_+.55,-m/2+.06)),f(c,.06,.12,a.frame,0,_+1.1,-m/2+.1),f(c*.8,.02,.08,a.lamp,0,_+1.06,-m/2+.12);for(let y=0;y<Math.max(2,Math.floor(c/.35));y+=1)p.add("box",a.cardboard,{x:-c/2+.2+y*.35,y:_+.55,z:-m/2+.12,sx:.28,sy:.14,sz:.2,color:y%2?"#2563eb":"#dc2626"});f(.5,.32,.03,a.screen,c*.25,_+.3,-m*.2),e.top=_+1.15,e.andonAt=[c/2-.06,_+1.1,-m/2+.06];break}case"rack":{const _=c>=m,y=_?c:m,x=_?m:c,C=w(0,0,0);_||(C.rotation.y=Math.PI/2);const L=Math.max(1,Math.round(y/2.7)),P=y/L,tt=yr(Math.round(u/1.6),2,6),$=u/tt,z=t.load||"boxes",Z=new Ia(this);for(let at=0;at<=L;at+=1){const ct=-y/2+at*P;[-1,1].forEach(mt=>Z.add("box",a.cardboard,{x:ct,y:u/2,z:mt*x/2,sx:.09,sy:u,sz:.07,color:se.rackBlue}));for(let mt=0;mt<tt*2;mt+=1){const St=(mt+.5)*(u/(tt*2));Z.add("box",a.cardboard,{x:ct,y:St,z:0,sx:.03,sy:Math.hypot(x,u/(tt*2)),sz:.03,rx:(mt%2?1:-1)*Math.atan2(x,u/(tt*2)),color:se.rackBlue})}}for(let at=0;at<L;at+=1){const ct=-y/2+(at+.5)*P;for(let mt=1;mt<tt;mt+=1)[-1,1].forEach(St=>Z.add("box",a.cardboard,{x:ct,y:mt*$,z:St*(x/2-.02),sx:P-.09,sy:.12,sz:.05,color:se.rackOrange}));for(let mt=0;mt<tt;mt+=1){const St=mt===0?0:mt*$+.06,Wt=(mt===tt-1?u-St:$-.06)-.25;if(Wt<.3)continue;if(z==="steel"){for(let ge=0;ge<2;ge+=1)for(let Ht=0;Ht<4;Ht+=1)d()<.15||Z.add("box",a.steelInst,{x:ct,y:St+.08+ge*.13,z:-x/2+.12+(Ht+.5)*((x-.24)/4),sx:P*.98,sy:.11,sz:(x-.24)/4-.04,color:d()>.5?"#9aa4ad":"#7d8791"});continue}const ne=Math.max(1,Math.floor(P/.95)),Yt=P/ne-.12;for(let B=0;B<ne;B+=1){if(d()>.82)continue;const ge=ct-P/2+(B+.5)*(P/ne),Ht=Math.min(1.25,Wt)*(.6+d()*.4);Z.add("box",a.cardboard,{x:ge,y:St+.07,z:0,sx:Yt,sy:.14,sz:x-.1,color:se.wood}),O(Z,()=>Q(z,ge,St+.14,0,Yt-.04,x-.14,Ht))}}}Z.flush(C),e.top=u;break}case"buffer":{[-1,1].forEach(L=>{f(c,.006,.1,a.yellow,0,.006,L*(m/2-.05)),f(.1,.006,m,a.yellow,L*(c/2-.05),.006,0)});const _=Math.max(1,Math.floor(c/1.3)),y=Math.max(1,Math.floor(m/1.3)),x=c/_-.25,C=m/y-.25;for(let L=0;L<_;L+=1)for(let P=0;P<y;P+=1)d()>.7||v(-c/2+(L+.5)*(c/_),0,-m/2+(P+.5)*(m/y),x,C,t.load||"parts",Math.min(1.1,Math.max(.4,u*.8)));e.top=Math.min(1.3,u);break}case"pallet":v(0,0,0,c,m,t.load||"boxes",Math.max(.2,u-.14));break;case"agv":{f(c,.3,m,l,0,.2,0),f(c*.9,.04,m*.9,a.dark,0,.37,0),f(c*1.002,.03,m*1.002,r.mat("agvLed",()=>new mn({color:"#38bdf8",toneMapped:!1})),0,.1,0),g(.08,.1,a.dark,c/2-.15,.42,0),t.load&&t.load!=="empty"&&v(0,.39,0,Math.min(c,1.2)-.1,Math.min(m,1)-.1,t.load,.6),e.vehicle=!0,e.top=1.1;break}case"forklift":{const _=Math.max(1.8,c),y=Math.max(.9,m),x=yr(u,1.9,2.3);f(_*.62,.55,y,l,-_*.06,.52,0),f(_*.24,.75,y*.98,a.dark,-_*.36,.58,0),[-1,1].forEach(P=>{b(.27,.24,a.rubber,_*.16,.27,P*(y/2-.12)),b(.22,.22,a.rubber,-_*.3,.22,P*(y/2-.12)),f(.05,x-.8,.05,a.dark,_*.12,.8+(x-.8)/2,P*(y/2-.06)),f(.05,x-.8,.05,a.dark,-_*.22,.8+(x-.8)/2,P*(y/2-.06))}),f(_*.4,.05,y,a.dark,-_*.05,x,0),f(.45,.12,.45,a.dark,-_*.1,.86,0),f(.08,.5,.45,a.dark,-_*.22,1.12,0),f(.42,.55,.32,this.paint(se.vest[0],.7,0),-_*.08,1.22,0),M(new qn(.11,16,12),this.paint(se.skin,.8,0),-_*.06,1.62,0),M(new qn(.125,16,10,0,Math.PI*2,0,Math.PI/2),this.paint("#facc15",.4,0),-_*.06,1.66,0),[-1,1].forEach(P=>f(.08,.06,.08,a.dark,_*.33,x*.5,P*y*.28)),[-1,1].forEach(P=>f(.1,x*1,.1,a.frame,_*.3,x*.5,P*y*.28));const C=w(_*.33,0,0);if(f(.06,.9,y*.8,a.frame,0,.55,0,C),[-1,1].forEach(P=>f(1.05,.05,.1,a.steel,.55,.1,P*y*.22,C)),t.load&&t.load!=="empty"){const P=new Ia(this);O(P,()=>v(.6,.13,0,1,Math.min(1.1,y),t.load,.7)),P.flush(C)}const L=f(.1,.1,.1,r.mat("beacon",()=>new mn({color:"#fb923c",toneMapped:!1})),-_*.05,x+.08,0);q(L),e.vehicle=!0,e.top=x+.2,e.animators.push((P,tt,$)=>{L.visible=!$||Math.sin(P*8)>0});break}case"crane":{const _=Math.max(4,u);[-1,1].forEach(P=>f(c,.45,.3,this.paint("#6b7785",.5,.5),0,_,P*m/2));const y=w(0,0,0);[-.45,.45].forEach(P=>f(.5,.8,m+.3,l,P,_+.62,0,y)),[-1,1].forEach(P=>f(2.2,.5,.7,h,0,_+.4,P*m/2,y));const x=w(0,_+1.2,0,y);f(1.5,.6,1.3,this.paint("#d99a00",.45,.25),0,.1,0,x),b(.28,1,a.dark,0,.1,0,x);const C=g(.025,1,a.dark,0,0,0,x),L=w(0,-3,0,x);f(.45,.5,.3,a.hazard,0,0,0,L),t.load&&t.load!=="empty"&&[-.2,0,.2].forEach(P=>f(3.2,.12,.16,a.steel,0,-.75,P,L)),e.crane=!0,e.top=_+1.6,e.animators.push((P,tt,$,z)=>{const Z=$?1:0;e.craneT=(e.craneT||z)+tt*Z;const at=e.craneT;y.position.x=Math.sin(at*.06)*c*.38,x.position.z=Math.sin(at*.11+1)*m*.3;const ct=2.4+Math.sin(at*.17)*1.2;L.position.y=-ct-.4,C.scale.y=ct,C.position.y=-ct/2-.1});break}case"fence":{const _=t.h&&t.h>=1?Math.min(t.h,3):2;m>=1?X(c,m,_):S(-c/2,0,c/2,0,_),e.top=_;break}case"wall":f(c,u,m,this.paint("#cfd4d9",.85,0),0,u/2,0),f(c+.02,.12,m+.04,a.frame,0,u-.06,0);break;case"label":{const _=String(t.text||t.name||""),{texture:y,aspect:x}=s_(_);let C=.9,L=x*C;L>16&&(L=16,C=L/x);const P=t.h||Math.max(4,n-2.5),tt=new Fe({map:y,emissive:"#ffffff",emissiveMap:y,emissiveIntensity:.35,roughness:.6}),$=a.dark,z=new Vt(new xe(L,C,.06),[$,$,$,$,tt,tt]);z.position.set(0,P,0),z.castShadow=!0,s.add(z),[-1,1].forEach(Z=>g(.01,Math.max(.2,n-P-C/2),a.dark,Z*L/2.4,(n+P+C/2)/2,0)),e.top=P+C,e.sign=z;break}case"custom":(t.parts||[]).forEach(_=>{const y=this.paint(_.color||se.bodyDark,.5,.25);let x;_.shape==="box"?x=new xe(_.w,_.h,_.d):_.shape==="sphere"?x=new qn(_.r,20,14):_.shape==="cone"?x=new Fr(_.r,_.h,20):x=new Ve(_.r,_.r,_.h,20);const C=P=>(P||0)*Math.PI/180,L=_.rot||[0,0,0];M(x,y,_.x||0,_.y||0,_.z||0,s,C(L[0]),C(L[1]),C(L[2]))}),e.andonAt=t.machine_id?[c*.4,u,-m*.35]:null;break;default:f(c,u,m,a.body,0,u/2,0),e.andonAt=t.machine_id?[c*.4,u,-m*.35]:null}return p.flush(s),__(s),s;function O(_,y){const x=p.add;p.add=(C,L,P)=>_.add(C,L,P);try{y()}finally{p.add=x}}}person(t=0){const e=new Ge,n=this.m,s=this.paint(se.vest[t%2],.7,0),r=this.paint(se.trousers,.8,0),a=(l,h,d,p,c)=>{const u=new Vt(l,h);return u.position.set(d,p,c),u.castShadow=!0,e.add(u),u};[-1,1].forEach(l=>{a(new xe(.15,.82,.18),r,l*.1,.43,0),a(new xe(.16,.08,.26),n.dark,l*.1,.04,.03)}),a(new xe(.44,.6,.25),s,0,1.13,0),[.98,1.22].forEach(l=>a(new xe(.45,.04,.26),this.paint("#d6dce2",.3,.4),0,l,0));const o=[-1,1].map(l=>{const h=new Ge;h.position.set(l*.29,1.4,0);const d=new Vt(new xe(.12,.58,.14),r);d.position.y=-.29,d.castShadow=!0,h.add(d);const p=new Vt(new xe(.1,.1,.1),this.paint(se.skin,.8,0));return p.position.y=-.62,h.add(p),e.add(h),h});return a(new qn(.115,16,12),this.paint(se.skin,.8,0),0,1.6,0),a(new qn(.135,16,10,0,Math.PI*2,0,Math.PI/2),this.paint(se.helmet[t%3],.35,.05),0,1.64,0),e.userData.arms=o,e}}function __(i){const t=new Map;i.children.forEach(e=>{if(!e.isMesh||e.isInstancedMesh||e.userData.keep||Array.isArray(e.material)||!e.geometry.index)return;const n=t.get(e.material)||[];n.push(e),t.set(e.material,n)}),t.forEach((e,n)=>{if(e.length<2)return;const s=e.map(h=>{h.updateMatrix();const d=h.geometry.clone().applyMatrix4(h.matrix);return d.index?d:null}),r=h=>Object.keys(h.attributes).sort().join(","),a=r(s[0]);if(s.some(h=>!h||r(h)!==a)){s.forEach(h=>h&&h.dispose());return}const o=f_(s,!1);if(s.forEach(h=>h.dispose()),!o)return;e.forEach(h=>{i.remove(h),h.geometry.dispose()});const l=new Vt(o,n);l.castShadow=!n.transparent,l.receiveShadow=!0,i.add(l)})}const di={busy:"#22c55e",blocked:"#f59e0b",starved:"#94a3b8",down:"#ef4444"},Ua="#2563eb",Es="#94a3b8",mc="#dde3e9",gc=["#1c3b27","#4a3a10","#4a1818"],v_=1,_c=new Set(["wall","label","fence","crane"]),x_=i=>(Number(i)||0)*Math.PI/180;function Cr(i){const t=Number(i);if(i===""||i===null||i===void 0||!Number.isFinite(t))return String(i??"");const e=Math.abs(t);return t.toLocaleString(void 0,{maximumFractionDigits:e>=100?0:e>=10?1:2})}function M_(i,t){const e=Number(i);if(e===1)return 0;if(e===3)return 2;if(e===2||e===4)return 1;if(!t)return-1;const n={};return new Gt(t).getHSL(n),n.s<.15?-1:n.h<.05||n.h>.92?2:n.h>.2&&n.h<.47?0:1}function Co(i,t,e){const n=new uh;return n.moveTo(-i+e,-t),n.lineTo(i-e,-t),n.quadraticCurveTo(i,-t,i,-t+e),n.lineTo(i,t-e),n.quadraticCurveTo(i,t,i-e,t),n.lineTo(-i+e,t),n.quadraticCurveTo(-i,t,-i,t-e),n.lineTo(-i,-t+e),n.quadraticCurveTo(-i,-t,-i+e,-t),n}function vc(i,t,e,n){const s=Co(i,t,n),r=Co(i-e,t-e,Math.max(.05,n-e));return s.holes.push(new wo(r.getPoints(8).reverse())),s}function y_(){const i=document.createElement("canvas");i.width=128,i.height=64;const t=i.getContext("2d");t.clearRect(0,0,128,64),t.fillStyle="rgba(255,255,255,0.35)",t.fillRect(0,26,128,12),t.fillStyle="#ffffff",t.beginPath(),t.moveTo(48,6),t.lineTo(80,32),t.lineTo(48,58),t.lineTo(36,58),t.lineTo(66,32),t.lineTo(36,6),t.closePath(),t.fill();const e=new yi(i);return e.wrapS=Jn,e.colorSpace=Oe,e}function xc(i){const t=[0];for(let e=1;e<i.length;e+=1)t.push(t[e-1]+i[e].distanceTo(i[e-1]));return{points:i,cum:t,total:t[t.length-1]||0}}function Na(i,t,e){const{points:n,cum:s,total:r}=i;if(n.length===1||r===0)return{pos:e.copy(n[0]),dir:new F(1,0,0)};const a=Math.min(Math.max(0,t),r);let o=1;for(;o<s.length-1&&s[o]<a;)o+=1;const l=s[o]-s[o-1]||1,h=(a-s[o-1])/l;return e.lerpVectors(n[o-1],n[o],h),{pos:e,dir:n[o].clone().sub(n[o-1])}}class S_{constructor(t,{onSelect:e}={}){this.container=t,this.onSelect=e,this.items=new Map,this.flowLines=[],this.particles=[],this.labelsVisible=!0,this.mode="live",this.simRunning=!1,this.anyWorking=!1,this.selectedId=null,this.numbers=new Map,this.clock=new zg,this.tween=null,this.renderer=new Q0({antialias:!0,alpha:!1,preserveDrawingBuffer:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Tc,this.renderer.toneMapping=Rc,this.renderer.toneMappingExposure=1.05,this.renderer.domElement.style.display="block",this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.cursor="grab",t.appendChild(this.renderer.domElement),this.scene=new ih,this.scene.background=new Gt(mc),this.scene.fog=new Wo(mc,120,500),this.setupEnvironment(),this.camera=new Je(42,1,.3,3e3),this.controls=new Gg(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.maxPolarAngle=Math.PI*.49,this.controls.minDistance=3,this.controls.addEventListener("start",()=>{this.tween=null}),this.hemi=new Ug("#ffffff","#7d7a74",.8),this.scene.add(this.hemi),this.sun=new Bg("#fff6e8",2.7),this.sun.castShadow=!0,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.03,this.scene.add(this.sun),this.scene.add(this.sun.target),this.root=new Ge,this.scene.add(this.root),this.particleGroup=new Ge,this.scene.add(this.particleGroup),this.chevron=y_(),this.raycaster=new kg,this.pointer=new _t,this.downAt=null,this.hoverAt=0,this.handlePointerDown=n=>{this.downAt=[n.clientX,n.clientY],this.renderer.domElement.style.cursor="grabbing"},this.handlePointerUp=n=>{this.renderer.domElement.style.cursor="grab",this.pick(n)},this.handlePointerMove=n=>this.hover(n),this.renderer.domElement.addEventListener("pointerdown",this.handlePointerDown),this.renderer.domElement.addEventListener("pointerup",this.handlePointerUp),this.renderer.domElement.addEventListener("pointermove",this.handlePointerMove),this.handleContextLost=n=>n.preventDefault(),this.handleContextRestored=()=>{this.setupEnvironment(),this.sceneData&&this.setScene(this.sceneData,this.lastSettings||{})},this.renderer.domElement.addEventListener("webglcontextlost",this.handleContextLost),this.renderer.domElement.addEventListener("webglcontextrestored",this.handleContextRestored),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),this.resize(),this.animate=this.animate.bind(this),this.frame=requestAnimationFrame(this.animate)}setupEnvironment(){const t=new Eo(this.renderer);this.envTexture&&this.envTexture.dispose(),this.envTexture=t.fromScene(new n_,.04).texture,t.dispose(),this.scene.environment=this.envTexture,this.scene.environmentIntensity=.45}resize(){const t=Math.max(1,this.container.clientWidth),e=Math.max(1,this.container.clientHeight);this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.viewHeight=e,this.items.forEach(n=>n.label&&this.scaleLabel(n.label))}scaleLabel(t){const e=2*Math.tan(Mn.degToRad(this.camera.fov)/2)/Math.max(1,this.viewHeight||1),[n,s]=t.userData.px;t.scale.set(n*e,s*e,1)}raycast(t){const e=this.renderer.domElement.getBoundingClientRect();this.pointer.x=(t.clientX-e.left)/e.width*2-1,this.pointer.y=-((t.clientY-e.top)/e.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera);const n=[];this.items.forEach(r=>r.pickables.forEach(a=>n.push(a)));const s=this.raycaster.intersectObjects(n,!1)[0];return s?s.object.userData.elementId:null}pick(t){if(!this.downAt||Math.hypot(t.clientX-this.downAt[0],t.clientY-this.downAt[1])>5)return;const e=this.raycast(t);this.select(e),this.onSelect&&this.onSelect(e)}hover(t){if(t.buttons)return;const e=performance.now();e-this.hoverAt<90||(this.hoverAt=e,this.renderer.domElement.style.cursor=this.raycast(t)?"pointer":"grab")}select(t){this.selectedId=t,this.items.forEach((e,n)=>{e.selected=n===t})}clear(){(e=>{e.traverse(n=>{var s;n.geometry&&!((s=this.sharedGeometries)!=null&&s.has(n.geometry))&&n.geometry.dispose(),n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(a=>{a.map&&a.map!==this.chevron&&a.map.dispose(),a.dispose()})})})(this.root),this.root.clear(),this.kit&&(this.kit.unitBox.dispose(),this.kit.unitCylX.dispose(),this.kit=null),this.particles.forEach(e=>this.particleGroup.remove(e.mesh)),this.particles=[],this.particleGeometry&&this.particleGeometry.dispose(),this.particleMaterial&&this.particleMaterial.dispose(),this.particleGeometry=null,this.items.clear(),this.flowLines=[],this.hall=null}setScene(t,e={}){this.clear(),this.kit=new g_,this.sharedGeometries=new Set([this.kit.unitBox,this.kit.unitCylX]),this.sceneData=t||{},this.lastSettings=e;const n=this.sceneData.floor||{w:60,d:40},s=Math.max(n.w,n.d);this.scene.fog.near=s*2.2,this.scene.fog.far=s*7,this.camera.near=Math.max(.1,Math.min(.5,s/200)),this.camera.far=Math.max(400,s*12),this.camera.updateProjectionMatrix(),this.hall=d_(this.sceneData,{anisotropy:Math.min(8,this.renderer.capabilities.getMaxAnisotropy())}),this.root.add(this.hall.group),this.fitShadows(n),this.setupProduct(),(this.sceneData.elements||[]).forEach(r=>this.buildElement(r)),this.buildFlows(),this.setLabelsVisible(e.labels!==!1),this.resize(),this.applyCamera(e.camera,n)}fitShadows(t){const e=Math.max(t.w,t.d),n=e>70?4096:2048;this.sun.shadow.mapSize.x!==n&&(this.sun.shadow.mapSize.set(n,n),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null)),this.sun.position.set(-e*.35,e*.8+20,e*.45),this.sun.target.position.set(0,0,0);const s=this.sun.shadow.camera,r=e*.72;s.left=-r,s.right=r,s.top=r,s.bottom=-r,s.near=1,s.far=e*3+80,s.updateProjectionMatrix()}setupProduct(){const t=this.sceneData.product||{},e=t.kind||"box";e==="steel"?this.particleGeometry=new xe(1.4,.14,.32):e==="part"?this.particleGeometry=new Ve(.2,.2,.32,16):e==="pallet"?this.particleGeometry=new xe(1,.8,.85):this.particleGeometry=new xe(.55,.38,.45);const n=t.color||(e==="steel"||e==="part"?"#9aa4ad":"#b98a57"),s=e==="steel"||e==="part";this.particleMaterial=new Fe({color:n,roughness:s?.32:.9,metalness:s?.8:0})}fitCamera(t,e=54,n=-12){const s=Mn.degToRad(e),r=Mn.degToRad(n),a=new F(Math.cos(s)*Math.sin(r),Math.sin(s),Math.cos(s)*Math.cos(r)),o=new F(0,0,e>80?0:t.d*.04),l=[];[-.5,.5].forEach(c=>[-.5,.5].forEach(u=>[0,3].forEach(m=>l.push(new F(c*t.w,m,u*t.d)))));const h=this.camera.clone();let d=Math.max(t.w,t.d)*1.2;for(let c=0;c<8;c+=1){h.position.copy(o).addScaledVector(a,d),h.lookAt(o),h.updateMatrixWorld(!0);let u=0;l.forEach(m=>{const M=m.clone().project(h);u=Math.max(u,Math.abs(M.x),Math.abs(M.y))}),d*=u/.92}const p=o.clone().addScaledVector(a,d);return{position:[p.x,p.y,p.z],target:[o.x,o.y,o.z]}}applyCamera(t,e=(s=>(s=this.sceneData)==null?void 0:s.floor)()||{w:60,d:40},n=!1){const r=Math.max(e.w,e.d),a=t!=null&&t.position&&(t!=null&&t.target)?t:this.fitCamera(e);this.controls.maxDistance=r*3;const o=new F(...a.position),l=new F(...a.target);if(n){this.flyTo(o,l);return}this.tween=null,this.camera.position.copy(o),this.controls.target.copy(l),this.controls.update()}flyTo(t,e,n=.8){this.tween={fromPos:this.camera.position.clone(),fromTarget:this.controls.target.clone(),toPos:t,toTarget:e,t:0,duration:n}}topView(){var e;const t=((e=this.sceneData)==null?void 0:e.floor)||{w:60,d:40};this.applyCamera(this.fitCamera(t,89,0),t,!0)}focus(t){var l;const e=this.items.get(t);if(!e)return;const n=e.el,s=new F(n.x,Math.min(2,(n.h||2)*.4),n.z),r=this.camera.position.clone().sub(this.controls.target).normalize();r.y<.35&&(r.y=.35),r.normalize();const a=((l=this.sceneData)==null?void 0:l.floor)||{w:60,d:40},o=Mn.clamp(Math.max(n.w,n.d,n.h)*2.6+7,9,Math.max(a.w,a.d)*.8);this.flyTo(s.clone().addScaledVector(r,o),s)}zoom(t){const e=this.camera.position.clone().sub(this.controls.target),n=Mn.clamp(e.length()*t,this.controls.minDistance,this.controls.maxDistance);this.flyTo(this.controls.target.clone().add(e.setLength(n)),this.controls.target.clone(),.35)}getCamera(){const t=e=>Math.round(e*100)/100;return{position:[t(this.camera.position.x),t(this.camera.position.y),t(this.camera.position.z)],target:[t(this.controls.target.x),t(this.controls.target.y),t(this.controls.target.z)]}}buildElement(t){var r,a;const e={id:t.id,el:t,pickables:[],animators:[],working:!1,pulse:!1,flash:0,label:null,labelKey:"",statusColor:null,statusShown:!1,selected:!1},n=new Ge;n.position.set(t.x,t.y||0,t.z),n.rotation.y=x_(t.rot);const s=this.kit.build(t,e,{hallH:((r=this.hall)==null?void 0:r.height)||8});if(n.add(s),e.group=n,t.machine_id&&this.makeAndon(e,n),(t.machine_id||!_c.has(t.kind))&&this.makeRings(e,n),t.operators){e.people=[];const o=t.operators;for(let l=0;l<o;l+=1){const h=this.kit.person(l),d=Math.min(o,Math.max(1,Math.floor(t.w/.9))),p=Math.floor(l/d),c=l%d,u=Math.min(d,o-p*d);h.position.set((c-(u-1)/2)*.9,0,e.front+.55+p*.8),h.rotation.y=Math.PI,n.add(h),e.people.push(h)}}if(e.vehicle&&((a=t.path)==null?void 0:a.length)>=2){const o=t.path.map(([c,u])=>new F(c,0,u)),h=o[0].distanceTo(o[o.length-1])<.5?o:[...o,...o.slice(1,-1).reverse(),o[0]];e.route=xc(h),e.routeS=0,e.speed=t.kind==="agv"?1:1.6;const{pos:d,dir:p}=Na(e.route,0,new F);n.position.set(d.x,t.y||0,d.z),e.yaw=Math.atan2(-p.z,p.x),n.rotation.y=e.yaw}n.traverse(o=>{o.isMesh&&!o.userData.noPick&&(o.userData.elementId=t.id,e.pickables.push(o))}),this.root.add(n),this.items.set(t.id,e),this.nameLabel(e)}makeAndon(t,e){const n=t.el,[s,r,a]=t.andonAt||[n.w*.4,n.h,-n.d*.35],o=new Ge;o.position.set(s,r,a);const l=this.kit.paint("#2e3339",.5,.4),h=new Vt(new Ve(.025,.025,.3,8),l);h.position.y=.15,o.add(h);const d=gc.map((u,m)=>{const M=new Vt(new Ve(.065,.065,.11,16),new Fe({color:u,roughness:.3,metalness:.1,emissive:"#000000"}));return M.position.y=.36+m*.12,o.add(M),M}),p=new Vt(new Ve(.05,.066,.04,16),l);p.position.y=.36+2*.12+.075,o.add(p);const c=this.kit.glowSprite("#ffffff",1.5);c.userData.noPick=!0,o.add(c),e.add(o),t.andon={segs:d,glow:c,index:-1},t.top=Math.max(t.top||0,r+.72)}makeRings(t,e){const n=t.el;if(n.kind==="forklift"||n.kind==="agv")return;const s=n.w/2+.45,r=n.d/2+.45,a=l=>new mn({color:l,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-3}),o=(l,h,d)=>{const p=new Vt(l,h);return p.rotation.x=-Math.PI/2,p.position.y=d,p.userData.noPick=!0,p.renderOrder=2,e.add(p),p};t.ring=o(new Ps(vc(s,r,.2,.4),6),a(Es),.025),t.fill=o(new Ps(Co(s-.2,r-.2,.25),6),a(Es),.018),n.machine_id&&(t.ping=o(new $o(.85,1,48),a("#ffffff"),.03),t.pingSize=Math.max(s,r)),t.selRing=o(new Ps(vc(s+.35,r+.35,.12,.55),6),a(Ua),.028)}nameLabel(t){const e=t.el;if(_c.has(e.kind)||!e.machine_id&&!e.name){this.clearLabel(t);return}this.updateLabel(t,{title:e.name||e.id,number:e.machine_id?t.number:null,muted:!e.machine_id})}clearLabel(t){t.label&&(t.group.remove(t.label),t.label.material.map.dispose(),t.label.material.dispose(),t.label=null,t.labelKey="")}updateLabel(t,e){t.labelOpts=e;const n=this.compact&&!e.muted?{...e,status:""}:e,s=JSON.stringify(n);if(s===t.labelKey)return;this.clearLabel(t),t.labelKey=s;const{texture:r,width:a,height:o}=i_(n),l=new Xo({map:r,transparent:!0,depthWrite:!1,depthTest:!1,sizeAttenuation:!1,toneMapped:!1,fog:!1}),h=new rh(l);h.center.set(.5,0),h.renderOrder=e.muted?9:10,h.userData={px:[a,o],muted:!!e.muted},h.position.set(0,(t.top||t.el.h||2)+.2,0),h.visible=this.labelsVisible,this.scaleLabel(h),t.group.add(h),t.label=h}refreshLabels(){this.items.forEach(t=>t.labelOpts&&this.updateLabel(t,t.labelOpts))}setLabelsVisible(t){this.labelsVisible=t,this.items.forEach(e=>{e.label&&(e.label.visible=t)})}setNumbers(t){this.numbers=t||new Map,this.items.forEach((e,n)=>{e.number=this.numbers.get(n)??null})}declutter(){const t=this.renderer.domElement,e=t.clientWidth,n=t.clientHeight;if(!e||!n)return;const s=new F,r=[];this.items.forEach(o=>{if(!o.label)return;o.label.getWorldPosition(s);const l=s.distanceTo(this.camera.position);s.project(this.camera);const[h,d]=o.label.userData.px;r.push({sprite:o.label,prio:o.label.userData.muted?1:o.selected?-1:0,dist:l,x:(s.x+1)/2*e,y:(1-s.y)/2*n,w:h,h:d,behind:s.z>1})}),r.sort((o,l)=>o.prio-l.prio||o.dist-l.dist);const a=[];r.forEach(o=>{const l=o.prio===1?2:5;let h=0,d=null;for(;h<=l;h+=1){const c=o.y-h*o.h*.92;if(d={l:o.x-o.w/2,r:o.x+o.w/2,t:c-o.h,b:c},!a.some(u=>d.l<u.r&&d.r>u.l&&d.t<u.b&&d.b>u.t))break}const p=h<=l;o.sprite.center.y=-Math.min(h,l)*.92,o.sprite.visible=this.labelsVisible&&!o.behind&&!(this.compact&&o.prio===1)&&(p||o.prio<=0),p&&!o.behind&&a.push(d)})}buildFlows(){const t=new Map((this.sceneData.elements||[]).map(e=>[e.id,e]));(this.sceneData.flows||[]).forEach(e=>{var l;const n=t.get(e.from),s=t.get(e.to);if(!n||!s)return;const r=[[n.x,n.z]];(l=e.via)!=null&&l.length?r.push(...e.via):Math.abs(s.x-n.x)>.5&&Math.abs(s.z-n.z)>.5&&r.push([s.x,n.z]),r.push([s.x,s.z]);const a=xc(r.map(([h,d])=>new F(h,v_,d))),o=[];for(let h=1;h<a.points.length;h+=1){const d=a.points[h-1],p=a.points[h],c=d.distanceTo(p);if(c<.2)continue;const u=this.chevron.clone();u.needsUpdate=!0,u.repeat.set(c/1.4,1);const m=new mn({map:u,color:Ua,transparent:!0,opacity:.4,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-4}),M=new Vt(new En(c,.42),m);M.rotation.order="YXZ",M.rotation.set(-Math.PI/2,Math.atan2(-(p.z-d.z),p.x-d.x),0),M.position.set((d.x+p.x)/2,.022,(d.z+p.z)/2),M.renderOrder=3,this.root.add(M),o.push(m)}this.flowLines.push({flow:e,route:a,materials:o,nextEmit:0})}),this.applyFlowStyle()}applyFlowStyle(){const t=this.mode==="sim"?.75:.42;this.flowLines.forEach(e=>e.materials.forEach(n=>n.opacity=t))}paintStatus(t,e,n,{pulse:s=!1}={}){if(t.statusColor=e,t.statusShown=!!e,t.pulse=s,t.ring&&(t.ring.material.color.set(e||Es),t.fill.material.color.set(e||Es),t.ring.material.opacity=e?.92:0,t.fill.material.opacity=e?.16:0),t.andon){t.andon.index=e?n:-1,t.andon.segs.forEach((a,o)=>{const l=e&&o===n;a.material.color.set(l?e:gc[o]),a.material.emissive.set(l?e:"#000000"),a.material.emissiveIntensity=l?2.2:0});const r=t.andon.glow;e&&n>=0?(r.position.y=t.andon.segs[n].position.y,r.material.color.set(e),r.material.opacity=.9):r.material.opacity=0}}setMode(t){this.mode=t,this.particles.forEach(e=>e.mesh.visible=!1),this.flowLines.forEach(e=>e.nextEmit=0),this.items.forEach(e=>{e.working=!1,e.flash=0}),this.applyFlowStyle()}setSimRunning(t){this.simRunning=t}signal(t,e,n){const s=/count|licznik|szt|pieces|produced/i.test(String(e||""));this.items.forEach(r=>{if(Number(r.el.machine_id)===Number(t)&&(r.flash=1,s)){const a=Number(n);Number.isFinite(a)&&Number.isFinite(r.lastCount)&&a>r.lastCount&&this.mode==="live"&&this.flowLines.filter(o=>o.flow.from===r.id).forEach(o=>this.spawnParticle(o.flow.from,o.flow.to)),Number.isFinite(a)&&(r.lastCount=a)}})}applyLive(t){this.mode="live";let e=!1;this.items.forEach(n=>{const s=n.el;if(!s.machine_id){n.statusShown&&this.paintStatus(n,null,-1),n.working=!1,this.nameLabel(n);return}const r=t[s.machine_id];if(n.working=Number(r==null?void 0:r.typeEvent)===1,e=e||n.working,r&&r.color){this.paintStatus(n,r.color,M_(r.typeEvent,r.color),{pulse:Number(r.typeEvent)===3});const a=(r.substatuses||[]).filter(o=>o.value!=="-"&&o.value!==void 0&&o.value!==null&&o.value!=="").slice(0,1).map(o=>`${Cr(o.value)}${o.unit?" "+o.unit:""}`);this.updateLabel(n,{title:s.name||s.id,number:n.number,status:[r.nameStatus||"",...a].filter(Boolean).join(" · "),color:r.color})}else this.paintStatus(n,null,-1),this.updateLabel(n,{title:s.name||s.id,number:n.number,color:null})}),this.anyWorking=e}applySimulation(t,e=[],n={}){this.mode="sim";const s=new Map(t.stations.map(a=>[a.id,a])),r={busy:0,blocked:1,starved:-1,down:2};this.items.forEach(a=>{const o=s.get(a.id);if(!o){a.working=!1,a.el.machine_id&&this.paintStatus(a,null,-1),this.nameLabel(a);return}const l=!a.el.machine_id&&o.role!=="station";if(o.role!=="station"){a.working=!1,this.paintStatus(a,null,-1),this.updateLabel(a,{title:o.name||a.el.name||a.el.id,number:a.number,status:`${o.done} ${n.pcs||"szt."}`,color:"#64748b",muted:l});return}const h=di[o.state]||Es,d=t.bottleneck===a.id;a.working=o.state==="busy",this.paintStatus(a,h,r[o.state]??-1,{pulse:d||o.state==="down"});let p=`${n.busy||"praca"} ${Math.round(o.busy*100)}% · ${n.queue||"kolejka"} ${o.queue}/${o.queueCap}`;d&&(p=`${n.bottleneck||"wąskie gardło"} · ${p}`),this.updateLabel(a,{title:o.name||a.el.name||a.el.id,number:a.number,status:p,color:d?di.down:h})}),e.forEach(a=>this.spawnParticle(a.from,a.to))}spawnParticle(t,e){const n=this.flowLines.find(r=>r.flow.from===t&&r.flow.to===e);if(!n||!this.particleGeometry||this.particles.filter(r=>r.mesh.visible).length>260)return;let s=this.particles.find(r=>!r.mesh.visible);if(!s){const r=new Vt(this.particleGeometry,this.particleMaterial);r.castShadow=!0,this.particleGroup.add(r),s={mesh:r},this.particles.push(s)}s.route=n.route,s.s=0,s.speed=Mn.clamp(n.route.total/2.6,1.6,6),s.mesh.visible=!0}animate(){var o;this.frame=requestAnimationFrame(this.animate);const t=Math.min(.1,this.clock.getDelta()),e=this.clock.elapsedTime;if(this.tween){const l=this.tween;l.t=Math.min(1,l.t+t/l.duration);const h=l.t<.5?2*l.t*l.t:1-Math.pow(-2*l.t+2,2)/2;this.camera.position.lerpVectors(l.fromPos,l.toPos,h),this.controls.target.lerpVectors(l.fromTarget,l.toTarget,h),l.t>=1&&(this.tween=null)}this.controls.update();const n=(o=this.sceneData)==null?void 0:o.floor;if(n&&!this.tween){const l=this.controls.target,h=Mn.clamp(l.x,-n.w/2,n.w/2),d=Mn.clamp(l.z,-n.d/2,n.d/2),p=Mn.clamp(l.y,0,12);if(h!==l.x||p!==l.y||d!==l.z){const c=new F(h-l.x,p-l.y,d-l.z);l.add(c),this.camera.position.add(c)}}this.hall&&this.hall.walls.forEach(l=>{l.upper.visible=this.camera.position.clone().sub(l.center).dot(l.normal)<0});const s=this.mode==="live"?this.anyWorking:this.simRunning,r=new F;this.items.forEach(l=>{const h=l.el,d=h.x*.7+h.z*.3,p=l.vehicle||l.crane?s:l.working;if(l.animators.forEach(c=>c(e,t,p,d)),l.ring&&l.statusShown){const c=l.pulse?.5+.5*Math.abs(Math.sin(e*3.5)):1;l.ring.material.opacity=.35+.57*c,l.fill.material.opacity=l.pulse?.08+.18*c:.16}if(l.andon&&l.andon.index>=0&&(l.andon.glow.material.opacity=l.pulse?Math.sin(e*7)>0?.95:.12:.85),l.selRing&&(l.selRing.material.opacity=l.selected?.7+.25*Math.sin(e*3):0),l.ping)if(l.flash>0){l.flash=Math.max(0,l.flash-t*1.1);const c=.6+(1-l.flash)*(l.pingSize+1.5);l.ping.scale.set(c,c,1),l.ping.material.color.set(l.statusColor||Ua),l.ping.material.opacity=l.flash*.75}else l.ping.material.opacity=0;if(l.people&&l.people.forEach((c,u)=>{const[m,M]=c.userData.arms,f=l.working?Math.sin(e*2.6+u+d)*.45:0;m.rotation.x=-.25+f,M.rotation.x=-.25-f}),l.route&&s){l.routeS=(l.routeS+t*l.speed)%l.route.total;const{pos:c,dir:u}=Na(l.route,l.routeS,r);l.group.position.x=c.x,l.group.position.z=c.z;let M=Math.atan2(-u.z,u.x)-l.yaw;for(;M>Math.PI;)M-=Math.PI*2;for(;M<-Math.PI;)M+=Math.PI*2;l.yaw+=M*Math.min(1,t*3),l.group.rotation.y=l.yaw}}),this.mode==="live"&&this.flowLines.forEach(l=>{var u,m;const h=this.items.get(l.flow.from),d=this.items.get(l.flow.to);if(!(h&&h.working||h&&!h.el.machine_id&&d&&d.working)||e<(l.nextEmit||0))return;this.spawnParticle(l.flow.from,l.flow.to);const c=Number((m=(u=h==null?void 0:h.el)==null?void 0:u.sim)==null?void 0:m.cycle_s)||60;l.nextEmit=e+Math.min(7,Math.max(2,c/22))*(.75+Math.random()*.5)});const a=this.mode==="sim"&&!this.simRunning?0:.5;if(this.flowLines.forEach(l=>l.materials.forEach(h=>h.map.offset.x-=t*a)),e-(this.declutterAt||0)>.2){this.declutterAt=e;const l=this.camera.position.distanceTo(this.controls.target)>45;l!==this.compact&&(this.compact=l,this.refreshLabels()),this.declutter()}this.particles.forEach(l=>{if(!l.mesh.visible)return;if(l.s+=t*l.speed,l.s>=l.route.total){l.mesh.visible=!1;return}const{pos:h,dir:d}=Na(l.route,l.s,r);l.mesh.position.copy(h),l.mesh.rotation.y=Math.atan2(-d.z,d.x)}),this.renderer.render(this.scene,this.camera)}dispose(){cancelAnimationFrame(this.frame),this.resizeObserver.disconnect();const t=this.renderer.domElement;t.removeEventListener("pointerdown",this.handlePointerDown),t.removeEventListener("pointerup",this.handlePointerUp),t.removeEventListener("pointermove",this.handlePointerMove),t.removeEventListener("webglcontextlost",this.handleContextLost),t.removeEventListener("webglcontextrestored",this.handleContextRestored),this.clear(),this.chevron.dispose(),this.envTexture&&this.envTexture.dispose(),this.controls.dispose(),this.renderer.dispose(),t.parentNode&&t.parentNode.removeChild(t)}}const E_=5,b_=30,w_=.5;function T_(i){let t=i>>>0;return function(){t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}function sn(i,t){const e=Number(i);return Number.isFinite(e)?e:t}function A_(i){return i==="conveyor"||i==="oven"}function R_(i){const t=Array.isArray(i==null?void 0:i.elements)?i.elements:[],e=Array.isArray(i==null?void 0:i.flows)?i.flows:[],n=new Map(t.map(p=>[p.id,p])),s=new Map(t.map(p=>[p.id,0])),r=new Map;e.forEach(p=>{!n.has(p.from)||!n.has(p.to)||(s.set(p.to,s.get(p.to)+1),r.has(p.from)||r.set(p.from,[]),r.get(p.from).push(p.to))});const a=(p,c)=>n.get(p).x-n.get(c).x||n.get(p).z-n.get(c).z,o=new Set(e.flatMap(p=>[p.from,p.to]));let l=t.filter(p=>o.has(p.id)&&s.get(p.id)===0).map(p=>p.id).sort(a);const h=new Set,d=[];for(;l.length;){const p=[];l.forEach(c=>{h.has(c)||(h.add(c),d.push(c),(r.get(c)||[]).forEach(u=>{s.set(u,s.get(u)-1),s.get(u)===0&&p.push(u)}))}),l=p.sort(a)}return t.filter(p=>!h.has(p.id)).map(p=>p.id).sort(a).forEach(p=>d.push(p)),d.filter(p=>n.get(p).machine_id)}function Mc(i){var o,l;const t=Array.isArray(i==null?void 0:i.elements)?i.elements:[],e=Array.isArray(i==null?void 0:i.flows)?i.flows:[],n=new Set(t.map(h=>h.id)),s={},r={};e.forEach(h=>{n.has(h.from)&&n.has(h.to)&&(r[h.from]=(r[h.from]||0)+1,s[h.to]=(s[h.to]||0)+1)});const a={};return t.forEach(h=>{const d=h.sim||{};if(!(s[h.id]||r[h.id])&&!d.role)return;const c=d.role||(s[h.id]?r[h.id]?"station":"sink":"source"),u=A_(h.kind);let m=sn(d.cycle_s,null);m==null&&(m=c!=="station"?0:u?Math.max(1,sn(h.w,2)/w_):b_),a[h.id]={id:h.id,name:h.name||h.id,kind:h.kind,machine_id:h.machine_id||null,role:c,cycle_s:m,capacity:Math.max(1,Math.round(sn(d.capacity,u&&c==="station"?Math.max(1,Math.round(sn(h.w,1))):1))),mtbf_s:Math.max(0,sn(d.mtbf_s,0)),stop_s:Math.max(0,sn(d.stop_s,0)),arrival_s:d.arrival_s!=null?sn(d.arrival_s,null):null}}),{stations:a,flows:e.filter(h=>a[h.from]&&a[h.to]).map(h=>({from:h.from,to:h.to,buffer:Math.max(0,Math.round(sn(h.buffer,E_)))})),arrival_s:((o=i==null?void 0:i.simulation)==null?void 0:o.arrival_s)!=null?sn(i.simulation.arrival_s,null):null,horizon_h:sn((l=i==null?void 0:i.simulation)==null?void 0:l.horizon_h,8),seed:1}}class C_{constructor(t){this.params=t,this.reset()}reset(){const t=this.params;this.rand=T_(sn(t.seed,1)*2654435761),this.time=0,this.transfers=[],this.queues=t.flows.map(e=>({...e,count:0,area:0,max:0})),this.stations={},Object.values(t.stations).forEach(e=>{const n=this.queues.filter(o=>o.to===e.id),s=this.queues.filter(o=>o.from===e.id),r=e.role||(n.length===0?"source":s.length===0?"sink":"station"),a=r==="source"?sn(e.arrival_s??t.arrival_s,0):0;this.stations[e.id]={...e,role:r,inputs:n,outputs:s,slots:Array.from({length:Math.max(1,e.capacity)},()=>({state:"idle",remaining:0})),arrival:a,nextArrival:a,waiting:0,down:0,untilStop:this.sampleUptime(e),rr:0,done:0,time:{busy:0,blocked:0,starved:0,down:0}}}),this.order=this.topologicalOrder()}sampleUptime(t){return t.mtbf_s>0?-Math.log(1-this.rand())*t.mtbf_s:1/0}sampleStop(t){return t.stop_s>0?Math.max(1,-Math.log(1-this.rand())*t.stop_s):0}topologicalOrder(){const t=Object.keys(this.stations),e=Object.fromEntries(t.map(r=>[r,0]));this.queues.forEach(r=>{e[r.to]+=1});const n=t.filter(r=>e[r]===0),s=[];for(;n.length;){const r=n.shift();s.push(r),this.stations[r].outputs.forEach(a=>{e[a.to]-=1,e[a.to]===0&&n.push(a.to)})}return t.forEach(r=>{s.includes(r)||s.push(r)}),s.reverse()}pushOut(t){if(t.role==="sink"||t.outputs.length===0)return t.done+=1,!0;let e=null;return t.outputs.forEach(n=>{n.count<n.buffer&&(!e||n.count<e.count)&&(e=n)}),e?(e.count+=1,e.max=Math.max(e.max,e.count),t.done+=1,this.transfers.length<400&&this.transfers.push({from:e.from,to:e.to,t:this.time}),!0):!1}pullIn(t){if(t.role==="source")return t.arrival<=0?!0:t.waiting>0?(t.waiting-=1,!0):!1;const e=t.inputs.length;for(let n=0;n<e;n+=1){const s=t.inputs[(t.rr+n)%e];if(s.count>0)return s.count-=1,t.rr=(t.rr+n+1)%e,!0}return!1}step(t){this.transfers=[];const e=this.order;for(const n of e){const s=this.stations[n];if(s.role==="source"&&s.arrival>0)for(s.nextArrival-=t;s.nextArrival<=0;)s.waiting+=1,s.nextArrival+=s.arrival;if(s.down>0){s.down-=t,s.time.down+=t;continue}let r=!1,a=!1,o=!1;s.slots.forEach(l=>{l.state==="busy"&&(l.remaining-=t,l.remaining<=1e-9&&(l.state="blocked")),l.state==="blocked"&&this.pushOut(s)&&(l.state="idle"),l.state==="idle"&&this.pullIn(s)&&(s.cycle_s>0?(l.state="busy",l.remaining=s.cycle_s):l.state=this.pushOut(s)?"idle":"blocked"),l.state==="busy"?r=!0:l.state==="blocked"?a=!0:o=!0}),r?(s.time.busy+=t,s.untilStop-=t,s.untilStop<=0&&(s.down=this.sampleStop(s),s.untilStop=this.sampleUptime(s))):a?s.time.blocked+=t:o&&(s.time.starved+=t)}this.queues.forEach(n=>{n.area+=n.count*t}),this.time+=t}runFor(t,e=1){const n=Math.ceil(t/e);for(let s=0;s<n;s+=1)this.step(e);this.transfers=[]}stationState(t){const e=this.stations[t];return e?e.down>0?"down":e.slots.some(n=>n.state==="busy")?"busy":e.slots.some(n=>n.state==="blocked")?"blocked":"starved":null}stats(){const t=Math.max(this.time,1e-9),e=Object.values(this.stations).map(o=>({id:o.id,name:o.name,role:o.role,state:this.stationState(o.id),busy:o.time.busy/t,blocked:o.time.blocked/t,starved:o.time.starved/t,down:o.time.down/t,done:o.done,perHour:o.done/t*3600,queue:o.inputs.reduce((l,h)=>l+h.count,0),queueCap:o.inputs.reduce((l,h)=>l+h.buffer,0)})),n=e.filter(o=>o.role==="station");let s=null;n.forEach(o=>{const l=o.busy+o.down;(!s||l>s.busy+s.down)&&(s=o)});const a=e.filter(o=>o.role==="sink").reduce((o,l)=>o+l.done,0);return{time:this.time,finished:a,throughputPerHour:a/t*3600,wip:this.queues.reduce((o,l)=>o+l.count,0)+Object.values(this.stations).reduce((o,l)=>o+l.slots.filter(h=>h.state!=="idle").length,0),bottleneck:s?s.id:null,stations:e,queues:this.queues.map(o=>({from:o.from,to:o.to,count:o.count,buffer:o.buffer,avg:o.area/t,max:o.max}))}}}const P_={key:0,class:"flex flex-col gap-3"},L_={key:1,class:"hologram-empty"},D_={class:"hologram-empty__title"},I_={class:"hologram-empty__text"},U_={class:"hologram-empty__steps"},N_=["title"],F_=["title"],O_={class:"hologram-layout__label"},B_={class:"hologram-viewport"},z_={key:0,class:"hologram-kpis"},k_={class:"hologram-kpi__label"},H_={class:"hologram-kpi__value"},V_={class:"hologram-kpi__sub"},G_={class:"hologram-kpi"},W_={class:"hologram-kpi__label"},X_={class:"hologram-kpi__value is-good"},Y_={class:"hologram-kpi__sub"},q_={class:"hologram-kpi"},$_={class:"hologram-kpi__label"},Z_={class:"hologram-kpi__sub"},K_={class:"hologram-kpi"},j_={class:"hologram-kpi__label"},J_={class:"hologram-kpi__sub"},Q_={key:1,class:"hologram-kpis"},tv={class:"hologram-kpi"},ev={class:"hologram-kpi__label"},nv={class:"hologram-kpi__value"},iv={class:"hologram-kpi__sub"},sv={class:"hologram-kpi"},rv={class:"hologram-kpi__label"},av={class:"hologram-kpi__value"},ov={class:"hologram-kpi__sub"},lv={class:"hologram-kpi hologram-kpi--wide"},cv={class:"hologram-kpi__label"},hv={class:"hologram-kpi__value is-bad hologram-kpi__text"},uv={class:"hologram-kpi__sub"},dv={class:"hologram-mapctl"},fv=["title","aria-label"],pv=["title","aria-label"],mv=["title","aria-label"],gv=["title","aria-label"],_v={key:2,class:"hologram-simbar"},vv=["title"],xv={class:"hologram-muted"},Mv={key:4,class:"hologram-panel"},yv={class:"hologram-panel__head"},Sv={key:0,class:"hologram-panel__num"},Ev={class:"hologram-facts"},bv={class:"hologram-panel__sub"},wv={class:"hologram-signals"},Tv={class:"hologram-panel__sub"},Av={class:"hologram-panel__grid"},Rv=["for"],Cv=["for"],Pv={key:5,class:"hologram-hint"},Lv=["aria-label"],Dv=["onClick"],Iv={class:"hologram-mcard__top"},Uv={class:"hologram-mcard__num"},Nv={class:"hologram-mcard__name"},Fv={class:"hologram-mcard__meta"},Ov={class:"hologram-muted"},Bv={key:0,class:"hologram-arrival"},zv={for:"hologram-arrival"},kv={class:"hologram-stations"},Hv={class:"hologram-stations__head"},Vv={class:"hologram-muted"},Gv={key:0,class:"hologram-stations__grid"},Wv=["for"],Xv=["for"],Yv=["for"],qv=["for"],$v={class:"hologram-panel__sub"},yc="omni-hologram-view-v1",Sc="#94a3b8",Zv={__name:"ComponentHologram",setup(i){const t=[1,10,60,300],n=Eh().proxy,s=()=>{var U,k;return(k=(U=n.$store)==null?void 0:U.state)==null?void 0:k.dataEnc},r=(U,k="",et="get",Rt=null)=>n.axios(bc(n.$apiHost,U,k,s(),et,Rt)),a=U=>Array.isArray(U)?U:Array.isArray(U==null?void 0:U.results)?U.results:[],o=(U,k)=>{var et;return(et=n.$toast)==null?void 0:et.add({severity:U,summary:ot(U==="error"?"error":"success"),detail:k,life:U==="error"?5e3:3e3})},l=bh(),h=Ee(()=>l.canWrite("hologram"));function d(){try{return JSON.parse(localStorage.getItem(yc)||"{}")||{}}catch{return{}}}function p(U){try{localStorage.setItem(yc,JSON.stringify({...d(),...U}))}catch{}}const c=d(),u=pe(!0),m=pe([]),M=pe([]),f=pe([]),g=pe([]),A=pe(c.id||null),b=pe(null),w=pe(c.mode==="sim"?"sim":"live"),q=pe(!0),D=pe(["side","bottom","none"].includes(c.cards)?c.cards:"side"),Y=pe(null),Q=pe(null),v=pe(null);let S=null;function X(){const U=Q.value;if(!U||window.innerWidth<=991){v.value=null;return}const k=U.getBoundingClientRect().top+(G.value?0:window.scrollY);v.value=Math.max(480,Math.floor(window.innerHeight-k-(G.value?14:32)))}_n(Y,U=>{S==null||S.disconnect(),U&&(S=new ResizeObserver(()=>X()),S.observe(U),Gs(X))});const I=pe(null),H=pe(null);let O=null;const _=Ee(()=>[{value:"side",label:ot("hologram.layout.side"),icon:"pi pi-objects-column"},{value:"bottom",label:ot("hologram.layout.bottom"),icon:"pi pi-table"},{value:"none",label:ot("hologram.layout.none"),icon:"pi pi-eye-slash"}]),y=Ee(()=>[{label:ot("hologram.modeLive"),value:"live",icon:"pi pi-wifi"},{label:ot("hologram.modeSim"),value:"sim",icon:"pi pi-sliders-h"}]),x=Ee(()=>m.value.map(U=>({value:U.id,label:`${U.name} · v${U.version}`}))),C=Ee(()=>{var U;return mt((U=b.value)==null?void 0:U.scene)}),L=Ee(()=>new Map((C.value.elements||[]).map(U=>[U.id,U]))),P=Ee(()=>L.value.get(I.value)||null),tt=Ee(()=>R_(C.value)),$=Ee(()=>new Map(tt.value.map((U,k)=>[U,k+1])));function z(U){var k;return((k=M.value.find(et=>Number(et.id)===Number(U)))==null?void 0:k.name)||`#${U}`}function Z(U){var k;return((k=f.value.find(et=>Number(et.id)===Number(U)))==null?void 0:k.name)||(U?`#${U}`:"")}function at(U){return g.value.find(k=>Number(k.id)===Number(U))||null}function ct(U){return ot(`hologram.kinds.${U}`)}function mt(U){return Array.isArray(U==null?void 0:U.elements)?{...U,elements:U.elements.map(k=>{var Rt;const et=k.machine_id?(Rt=at(k.machine_id))==null?void 0:Rt.name:"";return et&&et!==k.name?{...k,name:et}:k})}:U||{}}function St(U){return Object.values((U==null?void 0:U.stations)||{}).forEach(k=>{const et=ct(k.kind);k.name===k.id&&!et.startsWith("hologram.")&&(k.name=`${et} ${k.id}`)}),U}const Wt=U=>String(U).padStart(2,"0"),ne=Ee(()=>{var k;const U=C.value.scope||{type:"park"};if(U.type==="line")return ot("hologram.scope.lines",{list:(U.line_ids||[]).map(Z).join(", ")});if(U.type==="machines"){const et=U.machine_ids||[];return et.length===1?((k=at(et[0]))==null?void 0:k.name)||ot("hologram.scope.machines",{n:1}):ot("hologram.scope.machines",{n:et.length})}return ot("hologram.scope.park",{park:b.value?z(b.value.server):""})});let Yt=!1;const B=Oh({axios:n.axios,apiHost:n.$apiHost,dataEnc:s,onError:U=>o("error",U),onConnect:()=>o("success",ot("hologram.liveConnected")),onReconnect:()=>{var U;Yt||(Yt=!0,(U=n.$toast)==null||U.add({severity:"warn",summary:ot("hologram.liveReconnect"),life:3e3}))},onSignal:(U,k,et)=>{w.value==="live"&&(O==null||O.signal(U,k,et))}}),ge=pe(Date.now());let Ht=null;const Xt=Ee(()=>{const U=B.activity.lastAt?Math.max(0,Math.round((ge.value-B.activity.lastAt)/1e3)):null;return{connected:B.connected.value,fresh:U!==null&&U<30,signals:B.activity.signals,last:U}});let Nt=null;_n(()=>B.live,()=>{w.value!=="live"||Nt||(Nt=requestAnimationFrame(()=>{Nt=null,O==null||O.applyLive(B.live)}))},{deep:!0});const le=U=>U!=null&&U.machine_id&&B.live[String(U.machine_id)]||null,It=Ee(()=>{const U={total:0,working:0,stopped:0,failure:0,noData:0};return(C.value.elements||[]).forEach(k=>{if(!k.machine_id)return;U.total+=1;const et=le(k),Rt=Number(et==null?void 0:et.typeEvent);!et||!et.color?U.noData+=1:Rt===1?U.working+=1:Rt===3?U.failure+=1:U.stopped+=1}),U}),R=Ee(()=>le(P.value));function E(U){if(!U)return"";const k=String(U).match(/(\d{1,2}:\d{2})(:\d{2})?/);return k?k[1]:String(U)}function K(U){const k=((U==null?void 0:U.substatuses)||[]).find(et=>et.value!=="-"&&et.value!==void 0&&et.value!==null&&et.value!=="");return k?{value:`${Cr(k.value)}${k.unit?" "+k.unit:""}`,name:k.target}:null}const st=pe(null),ut=pe(null),rt=pe(!1),Pt=pe(c.speed&&t.includes(c.speed)?c.speed:60),xt=t.map(U=>({label:`×${U}`,value:U}));let yt=null,jt=null,ft=0,wt=0;const Bt=Ee(()=>(C.value.flows||[]).length>0),zt=Ee(()=>st.value?Object.values(st.value.stations):[]),Tt=Ee(()=>({busy:ot("hologram.sim.busy"),queue:ot("hologram.sim.queue"),pcs:ot("hologram.sim.pcs"),bottleneck:ot("hologram.sim.bottleneck")})),Jt=Ee(()=>{var k,et,Rt,kt;const U=(k=ut.value)==null?void 0:k.bottleneck;return U?((kt=(Rt=(et=st.value)==null?void 0:et.stations)==null?void 0:Rt[U])==null?void 0:kt.name)||U:ot("hologram.sim.none")}),Ut=Ee(()=>{var U,k;return P.value&&((k=(U=st.value)==null?void 0:U.stations)==null?void 0:k[P.value.id])||null});function he(U){const k=Math.floor(U||0);return`${Math.floor(k/3600)} h ${String(Math.floor(k%3600/60)).padStart(2,"0")} min`}function V(U){return`${Math.round((U||0)*100)}%`}function gt(U){var k;return((k=ut.value)==null?void 0:k.stations.find(et=>et.id===U))||null}function nt(){st.value&&(yt=new C_(st.value),ht())}function ht(){yt&&(ut.value=yt.stats(),w.value==="sim"&&(O==null||O.applySimulation(ut.value,[],Tt.value)))}function Et(){st.value=St(Mc(C.value)),rt.value=!1,nt()}function bt(){yt||nt(),rt.value=!rt.value,ft=0}function te(){rt.value=!1,nt()}function ve(){rt.value=!1,nt(),yt.runFor((st.value.horizon_h||8)*3600,1),ht()}function Le(U){jt=requestAnimationFrame(Le);const k=ft?Math.min(.25,(U-ft)/1e3):0;if(ft=U,!rt.value||!yt||w.value!=="sim")return;let et=k*Pt.value,Rt=0;for(;et>0;){const kt=Math.min(1,et);yt.step(kt),et-=kt;for(const ue of yt.transfers){if(Rt>=40)break;O==null||O.spawnParticle(ue.from,ue.to),Rt+=1}}wt+=k,wt>=.25&&(wt=0,ht())}function qt(){const U=rt.value;nt(),rt.value=U}_n(Pt,U=>p({speed:U})),_n(rt,U=>O==null?void 0:O.setSimRunning(U));const De={busy:"busy",blocked:"blocked",starved:"starved",down:"down"},tn=Ee(()=>tt.value.map(U=>L.value.get(U)).filter(Boolean).map(U=>{var kt,ue,Ot,Lt;const k={id:U.id,number:Wt($.value.get(U.id)),name:U.name||((kt=at(U.machine_id))==null?void 0:kt.name)||U.id};if(w.value==="sim"){const ae=gt(U.id),Qt=(Ot=(ue=st.value)==null?void 0:ue.stations)==null?void 0:Ot[U.id],Dt=(ae==null?void 0:ae.role)==="station"?De[ae.state]:null;return k.color=Dt?di[Dt]:Sc,k.state=Dt?ot(`hologram.sim.${Dt}`):ot("hologram.cards.outOfFlow"),k.alert=((Lt=ut.value)==null?void 0:Lt.bottleneck)===U.id,k.meta=Qt&&(ae==null?void 0:ae.role)==="station"?ot("hologram.cards.simMeta",{cycle:Cr(Qt.cycle_s),busy:V(ae.busy),queue:ae.queue}):"",k}const et=le(U);k.color=(et==null?void 0:et.color)||Sc,k.state=(et==null?void 0:et.nameStatus)||ot("hologram.noLiveData"),k.alert=Number(et==null?void 0:et.typeEvent)===3;const Rt=K(et);return k.meta=Rt?`${Rt.value} · ${Rt.name}`:et!=null&&et.date?ot("hologram.cards.since",{time:E(et.date)}):"",k})),Si=U=>({color:U,background:`color-mix(in srgb, ${U} 14%, transparent)`,borderColor:`color-mix(in srgb, ${U} 40%, transparent)`});function zs(U){I.value=U,O==null||O.select(U),O==null||O.focus(U)}function Tn(){I.value=null,O==null||O.select(null)}async function os(){var U;u.value=!0;try{const[k,et,Rt]=await Promise.all([r(un.hologram,"/?limit=200"),r(un.listServers,"/"),r(un.listLines,"/").catch(()=>({data:[]}))]);m.value=a(k.data),M.value=a(et.data),f.value=a(Rt.data),m.value.some(kt=>kt.id===A.value)||(A.value=((U=m.value[0])==null?void 0:U.id)||null)}catch(k){o("error",k.message)}finally{u.value=!1}}async function ls(U){if(!U){b.value=null,B.stop();return}try{const k=await r(un.hologram,`/${U}/`);await cs(k.data,!0),p({id:U})}catch(k){o("error",`${ot("hologram.loadError")}: ${k.message}`)}}async function cs(U,k){var kt,ue;const et=((kt=b.value)==null?void 0:kt.server)!==U.server;b.value=U;const Rt=m.value.findIndex(Ot=>Ot.id===U.id);Rt>=0&&m.value.splice(Rt,1,{...m.value[Rt],...U}),I.value=null,q.value=((ue=U.settings)==null?void 0:ue.labels)!==!1,(k||et)&&await Ei(U.server),await Gs(),!O&&H.value&&(O=new S_(H.value,{onSelect:Ot=>I.value=Ot})),O==null||O.setScene(C.value,U.settings||{}),O==null||O.setNumbers($.value),st.value=St(Mc(C.value)),rt.value=!1,nt(),(k||et)&&(Yt=!1,B.start(U.server).catch(Ot=>o("error",Ot.message))),hs()}async function Ei(U){try{const k=await r(un.listMachines,"/");g.value=a(k.data).filter(et=>Number(et.server)===Number(U))}catch{g.value=[]}}function hs(){O&&(O.setMode(w.value),w.value==="live"?(rt.value=!1,O.applyLive(B.live)):ht())}let ei=!1;_n(A,U=>{ei&&ls(U)}),_n(w,U=>{p({mode:U}),hs()}),_n(q,U=>O==null?void 0:O.setLabelsVisible(U)),_n(D,async U=>{p({cards:U}),await Gs(),X(),requestAnimationFrame(()=>us())}),_n(I,U=>O==null?void 0:O.select(U));function us(){var U,k;O==null||O.applyCamera((k=(U=b.value)==null?void 0:U.settings)==null?void 0:k.camera,C.value.floor,!0)}function ks(){O==null||O.topView()}const Hr=()=>O==null?void 0:O.zoom(.7),Vr=()=>O==null?void 0:O.zoom(1.4),bi=pe(!1),T=pe(!1),W=pe(!1),j=()=>O==null?void 0:O.getCamera();function J(U){cs(U,!1)}const G=pe(!1);let pt=!1;const Mt=()=>document.fullscreenElement||document.webkitFullscreenElement||null;function Ct(){var et;if(G.value){G.value=!1,Mt()&&((et=document.exitFullscreen||document.webkitExitFullscreen)==null||et.call(document));return}G.value=!0;const U=document.documentElement,k=U.requestFullscreen||U.webkitRequestFullscreen;try{const Rt=k==null?void 0:k.call(U);Rt&&typeof Rt.catch=="function"&&Rt.catch(()=>{})}catch{}}_n(G,()=>Gs(X));function At(){Mt()?pt=!0:pt&&(pt=!1,G.value=!1)}function Ft(U){U.key==="Escape"&&G.value&&!Mt()&&(G.value=!1)}return wh(async()=>{jt=requestAnimationFrame(Le),Ht=setInterval(()=>ge.value=Date.now(),1e3),document.addEventListener("fullscreenchange",At),document.addEventListener("webkitfullscreenchange",At),document.addEventListener("keydown",Ft),window.addEventListener("resize",X),await os(),ei=!0,A.value&&await ls(A.value)}),Th(()=>{var U;cancelAnimationFrame(jt),clearInterval(Ht),document.removeEventListener("fullscreenchange",At),document.removeEventListener("webkitfullscreenchange",At),document.removeEventListener("keydown",Ft),window.removeEventListener("resize",X),S==null||S.disconnect(),G.value&&Mt()&&((U=document.exitFullscreen||document.webkitExitFullscreen)==null||U.call(document)),Nt&&cancelAnimationFrame(Nt),B.stop(),O==null||O.dispose(),O=null}),(U,k)=>(Kt(),ee("div",{class:ni(["hologram-root",{"is-fullscreen":G.value}])},[ie(it(Ch),null,{content:vn(()=>{var et,Rt,kt,ue,Ot,Lt,ae,Qt;return[u.value?(Kt(),ee("div",P_,[ie(it(el),{height:"2.5rem"}),ie(it(el),{height:"28rem"})])):m.value.length?(Kt(),ee(ze,{key:2},[lt("div",{ref_key:"toolbarEl",ref:Y,class:"hologram-toolbar"},[ie(it(Ah),{modelValue:A.value,"onUpdate:modelValue":k[0]||(k[0]=Dt=>A.value=Dt),options:x.value,optionLabel:"label",optionValue:"value",placeholder:it(ot)("hologram.select"),size:"small",class:"hologram-select"},null,8,["modelValue","options","placeholder"]),ie(it(qr),{modelValue:w.value,"onUpdate:modelValue":k[1]||(k[1]=Dt=>w.value=Dt),options:y.value,optionLabel:"label",optionValue:"value",allowEmpty:!1,size:"small"},null,8,["modelValue","options"]),b.value?(Kt(),ee("span",{key:0,class:"hologram-scope",title:it(ot)("hologram.extendHint")},[k[16]||(k[16]=lt("i",{class:"pi pi-th-large","aria-hidden":"true"},null,-1)),Ie(dt(ne.value),1)],8,N_)):be("",!0),k[17]||(k[17]=lt("span",{class:"hologram-toolbar__spacer"},null,-1)),ie(it(qr),{modelValue:D.value,"onUpdate:modelValue":k[2]||(k[2]=Dt=>D.value=Dt),options:_.value,optionLabel:"label",optionValue:"value",allowEmpty:!1,size:"small",title:it(ot)("hologram.layout.title"),"aria-label":it(ot)("hologram.layout.title")},{option:vn(({option:Dt})=>[lt("i",{class:ni(Dt.icon),title:Dt.label,"aria-hidden":"true"},null,10,F_),lt("span",O_,dt(Dt.label),1)]),_:1},8,["modelValue","options","title","aria-label"]),ie(it(Rh),{modelValue:q.value,"onUpdate:modelValue":k[3]||(k[3]=Dt=>q.value=Dt),onLabel:it(ot)("hologram.labels"),offLabel:it(ot)("hologram.labels"),onIcon:"pi pi-tag",offIcon:"pi pi-tag",size:"small"},null,8,["modelValue","onLabel","offLabel"]),ie(it(xn),{label:G.value?it(ot)("hologram.exitFullscreen"):it(ot)("hologram.fullscreen"),icon:G.value?"pi pi-window-minimize":"pi pi-window-maximize",severity:"secondary",outlined:"",size:"small",onClick:Ct},null,8,["label","icon"]),h.value?(Kt(),Hs(it(xn),{key:1,label:it(ot)("hologram.configure"),icon:"pi pi-cog",severity:"secondary",outlined:"",size:"small",disabled:!b.value,onClick:k[4]||(k[4]=Dt=>T.value=!0)},null,8,["label","disabled"])):be("",!0),h.value?(Kt(),Hs(it(xn),{key:2,label:it(ot)("hologram.versions"),icon:"pi pi-history",severity:"secondary",outlined:"",size:"small",disabled:!b.value,onClick:k[5]||(k[5]=Dt=>W.value=!0)},null,8,["label","disabled"])):be("",!0)],512),lt("div",{ref_key:"stageEl",ref:Q,class:ni(["hologram-stage",`is-${D.value}`]),style:An(v.value?{height:`${v.value}px`}:null)},[lt("div",B_,[lt("div",{ref_key:"canvasHost",ref:H,class:"hologram-canvas"},null,512),w.value==="live"?(Kt(),ee("div",z_,[lt("div",{class:ni(["hologram-kpi hologram-kpi--live",{"is-on":Xt.value.connected&&Xt.value.fresh,"is-wait":Xt.value.connected&&!Xt.value.fresh}])},[lt("span",k_,[k[18]||(k[18]=lt("span",{class:"hologram-live__dot"},null,-1)),Ie(dt(Xt.value.connected?it(ot)("hologram.live"):it(ot)("hologram.liveConnecting")),1)]),lt("strong",H_,dt(Xt.value.signals),1),lt("span",V_,[Ie(dt(it(ot)("hologram.kpi.signals")),1),Xt.value.last!==null?(Kt(),ee(ze,{key:0},[Ie(" · "+dt(it(ot)("hologram.liveLast",{s:Xt.value.last})),1)],64)):be("",!0)])],2),lt("div",G_,[lt("span",W_,dt(it(ot)("hologram.kpi.working")),1),lt("strong",X_,[Ie(dt(It.value.working),1),lt("small",null," / "+dt(It.value.total),1)]),lt("span",Y_,dt(it(ot)("hologram.kpi.machines")),1)]),lt("div",q_,[lt("span",$_,dt(it(ot)("hologram.kpi.stopped")),1),lt("strong",{class:ni(["hologram-kpi__value",{"is-warn":It.value.stopped}])},dt(It.value.stopped),3),lt("span",Z_,dt(it(ot)("hologram.kpi.stoppedHint")),1)]),lt("div",K_,[lt("span",j_,dt(it(ot)("hologram.kpi.failures")),1),lt("strong",{class:ni(["hologram-kpi__value",{"is-bad":It.value.failure}])},dt(It.value.failure),3),lt("span",J_,dt(It.value.noData?it(ot)("hologram.kpi.noData",{n:It.value.noData}):it(ot)("hologram.kpi.failuresHint")),1)])])):Bt.value&&ut.value?(Kt(),ee("div",Q_,[lt("div",tv,[lt("span",ev,dt(it(ot)("hologram.sim.throughput")),1),lt("strong",nv,[Ie(dt(ut.value.throughputPerHour.toFixed(1)),1),lt("small",null,dt(it(ot)("hologram.sim.perHour")),1)]),lt("span",iv,dt(it(ot)("hologram.sim.time"))+" "+dt(he(ut.value.time)),1)]),lt("div",sv,[lt("span",rv,dt(it(ot)("hologram.sim.finished")),1),lt("strong",av,[Ie(dt(ut.value.finished),1),lt("small",null,dt(it(ot)("hologram.sim.pcs")),1)]),lt("span",ov,dt(it(ot)("hologram.sim.wip"))+" "+dt(ut.value.wip),1)]),lt("div",lv,[lt("span",cv,dt(it(ot)("hologram.sim.bottleneck")),1),lt("strong",hv,dt(Jt.value),1),lt("span",uv,dt(it(ot)("hologram.kpi.bottleneckHint")),1)])])):be("",!0),lt("div",dv,[lt("button",{type:"button",title:it(ot)("hologram.zoomIn"),"aria-label":it(ot)("hologram.zoomIn"),onClick:Hr},[...k[19]||(k[19]=[lt("i",{class:"pi pi-plus"},null,-1)])],8,fv),lt("button",{type:"button",title:it(ot)("hologram.zoomOut"),"aria-label":it(ot)("hologram.zoomOut"),onClick:Vr},[...k[20]||(k[20]=[lt("i",{class:"pi pi-minus"},null,-1)])],8,pv),lt("button",{type:"button",title:it(ot)("hologram.resetView"),"aria-label":it(ot)("hologram.resetView"),onClick:us},[...k[21]||(k[21]=[lt("i",{class:"pi pi-home"},null,-1)])],8,mv),lt("button",{type:"button",title:it(ot)("hologram.topView"),"aria-label":it(ot)("hologram.topView"),onClick:ks},[...k[22]||(k[22]=[lt("i",{class:"pi pi-map"},null,-1)])],8,gv)]),w.value==="sim"&&Bt.value?(Kt(),ee("div",_v,[ie(it(xn),{label:rt.value?it(ot)("hologram.sim.pause"):it(ot)("hologram.sim.run"),icon:rt.value?"pi pi-pause":"pi pi-play",severity:"primary",size:"small",onClick:bt},null,8,["label","icon"]),ie(it(qr),{modelValue:Pt.value,"onUpdate:modelValue":k[6]||(k[6]=Dt=>Pt.value=Dt),options:it(xt),optionLabel:"label",optionValue:"value",allowEmpty:!1,size:"small",title:it(ot)("hologram.sim.speed")},null,8,["modelValue","options","title"]),ie(it(xn),{icon:"pi pi-replay",severity:"secondary",outlined:"",size:"small",title:it(ot)("hologram.sim.reset"),"aria-label":it(ot)("hologram.sim.reset"),onClick:te},null,8,["title","aria-label"]),ie(it(xn),{label:it(ot)("hologram.sim.fastForward",{h:((et=st.value)==null?void 0:et.horizon_h)||8}),icon:"pi pi-forward",severity:"secondary",outlined:"",size:"small",onClick:ve},null,8,["label"]),ie(it(xn),{label:it(ot)("hologram.sim.paramsOpen"),icon:"pi pi-sliders-h",severity:"secondary",outlined:"",size:"small",onClick:k[7]||(k[7]=Dt=>bi.value=!0)},null,8,["label"]),lt("span",{class:"hologram-legend",title:it(ot)("hologram.sim.legendHint")},[lt("span",xv,dt(it(ot)("hologram.sim.legendTitle"))+":",1),(Kt(!0),ee(ze,null,Vs(it(di),(Dt,gn)=>(Kt(),ee("span",{key:gn},[lt("span",{class:"hologram-dot",style:An({background:Dt})},null,4),Ie(dt(it(ot)(`hologram.sim.${gn}`)),1)]))),128))],8,vv)])):w.value==="sim"?(Kt(),Hs(it(Yr),{key:3,severity:"warn",size:"small",class:"hologram-simbar"},{default:vn(()=>[Ie(dt(it(ot)("hologram.sim.noFlows")),1)]),_:1})):be("",!0),P.value?(Kt(),ee("aside",Mv,[lt("div",yv,[$.value.get(P.value.id)?(Kt(),ee("span",Sv,dt(Wt($.value.get(P.value.id))),1)):be("",!0),lt("h4",null,dt(P.value.name||P.value.id),1),ie(it(xn),{icon:"pi pi-times",text:"",rounded:"",size:"small",severity:"secondary","aria-label":it(ot)("hologram.close"),onClick:Tn},null,8,["aria-label"])]),w.value==="live"&&P.value.machine_id?(Kt(),ee("span",{key:0,class:"hologram-state",style:An(Si(((Rt=R.value)==null?void 0:Rt.color)||"#94a3b8"))},[lt("span",{class:"hologram-dot",style:An({background:((kt=R.value)==null?void 0:kt.color)||"#94a3b8"})},null,4),Ie(dt(((ue=R.value)==null?void 0:ue.nameStatus)||it(ot)("hologram.noLiveData")),1)],4)):be("",!0),w.value==="sim"&&((Ot=gt(P.value.id))==null?void 0:Ot.role)==="station"?(Kt(),ee("span",{key:1,class:"hologram-state",style:An(Si(it(di)[gt(P.value.id).state]))},[lt("span",{class:"hologram-dot",style:An({background:it(di)[gt(P.value.id).state]})},null,4),Ie(dt(it(ot)(`hologram.sim.${gt(P.value.id).state}`)),1)],4)):be("",!0),lt("dl",Ev,[lt("dt",null,dt(it(ot)("hologram.kind")),1),lt("dd",null,dt(ct(P.value.kind)),1),P.value.machine_id?(Kt(),ee(ze,{key:0},[lt("dt",null,dt(it(ot)("hologram.machine")),1),lt("dd",null,dt(((Lt=at(P.value.machine_id))==null?void 0:Lt.name)||`#${P.value.machine_id}`),1),lt("dt",null,dt(it(ot)("hologram.line")),1),lt("dd",null,dt(Z(P.value.line_id||((ae=at(P.value.machine_id))==null?void 0:ae.line))||"–"),1)],64)):(Kt(),ee(ze,{key:1},[lt("dt",null,dt(it(ot)("hologram.machine")),1),lt("dd",null,dt(it(ot)("hologram.noMachine")),1)],64)),w.value==="live"&&((Qt=R.value)!=null&&Qt.date)?(Kt(),ee(ze,{key:2},[lt("dt",null,dt(it(ot)("hologram.since")),1),lt("dd",null,dt(R.value.date),1)],64)):be("",!0),P.value.operators?(Kt(),ee(ze,{key:3},[lt("dt",null,dt(it(ot)("hologram.operators")),1),lt("dd",null,dt(P.value.operators),1)],64)):be("",!0),w.value==="sim"&&gt(P.value.id)?(Kt(),ee(ze,{key:4},[lt("dt",null,dt(it(ot)("hologram.sim.utilization")),1),lt("dd",null,dt(V(gt(P.value.id).busy)),1),lt("dt",null,dt(it(ot)("hologram.sim.finished")),1),lt("dd",null,dt(gt(P.value.id).done)+" "+dt(it(ot)("hologram.sim.pcs")),1),lt("dt",null,dt(it(ot)("hologram.sim.queue")),1),lt("dd",null,dt(gt(P.value.id).queue)+" / "+dt(gt(P.value.id).queueCap),1)],64)):be("",!0)]),w.value==="live"&&R.value&&R.value.substatuses.length?(Kt(),ee(ze,{key:2},[lt("h5",bv,dt(it(ot)("hologram.signals")),1),lt("ul",wv,[(Kt(!0),ee(ze,null,Vs(R.value.substatuses,Dt=>(Kt(),ee("li",{key:Dt.tag},[lt("span",null,dt(Dt.target),1),lt("strong",null,dt(it(Cr)(Dt.value))+" "+dt(Dt.unit),1)]))),128))])],64)):be("",!0),w.value==="sim"&&Ut.value&&Ut.value.role==="station"?(Kt(),ee(ze,{key:3},[lt("h5",Tv,dt(it(ot)("hologram.sim.params")),1),lt("div",Av,[lt("label",{for:`panel-cycle-${Ut.value.id}`},dt(it(ot)("hologram.sim.cycle")),9,Rv),ie(it(Bn),{modelValue:Ut.value.cycle_s,"onUpdate:modelValue":[k[8]||(k[8]=Dt=>Ut.value.cycle_s=Dt),qt],inputId:`panel-cycle-${Ut.value.id}`,size:"small",min:.1,maxFractionDigits:1,useGrouping:!1,fluid:""},null,8,["modelValue","inputId"]),lt("label",{for:`panel-cap-${Ut.value.id}`},dt(it(ot)("hologram.sim.capacity")),9,Cv),ie(it(Bn),{modelValue:Ut.value.capacity,"onUpdate:modelValue":[k[9]||(k[9]=Dt=>Ut.value.capacity=Dt),qt],inputId:`panel-cap-${Ut.value.id}`,size:"small",min:1,max:100,useGrouping:!1,fluid:""},null,8,["modelValue","inputId"])])],64)):be("",!0)])):w.value==="live"?(Kt(),ee("div",Pv,dt(it(ot)("hologram.noSelection")),1)):be("",!0)]),tn.value.length&&D.value!=="none"?(Kt(),ee("div",{key:0,class:"hologram-cards",role:"list","aria-label":it(ot)("hologram.layout.title")},[(Kt(!0),ee(ze,null,Vs(tn.value,Dt=>(Kt(),ee("button",{key:Dt.id,type:"button",role:"listitem",class:ni(["hologram-mcard",{"is-selected":Dt.id===I.value,"is-alert":Dt.alert}]),style:An({"--state":Dt.color}),onClick:gn=>zs(Dt.id)},[lt("span",Iv,[lt("span",Uv,dt(Dt.number),1),lt("span",{class:"hologram-mcard__state",style:An(Si(Dt.color))},dt(Dt.state),5)]),lt("span",Nv,dt(Dt.name),1),lt("span",Fv,dt(Dt.meta),1)],14,Dv))),128))],8,Lv)):be("",!0)],6)],64)):(Kt(),ee("div",L_,[k[15]||(k[15]=lt("i",{class:"pi pi-box hologram-empty__icon","aria-hidden":"true"},null,-1)),lt("h3",D_,dt(it(ot)("hologram.mcpOnlyTitle")),1),lt("p",I_,dt(it(ot)("hologram.mcpOnlyText")),1),ie(it(Yr),{severity:"info",size:"small",class:"mb-3"},{default:vn(()=>[Ie(dt(it(ot)("hologram.mcpModelHint")),1)]),_:1}),lt("ol",U_,[lt("li",null,dt(it(ot)("hologram.mcpStep1")),1),lt("li",null,dt(it(ot)("hologram.mcpStep2")),1),lt("li",null,dt(it(ot)("hologram.mcpStep3")),1)]),ie(Dh,{holograms:m.value},null,8,["holograms"])]))]}),_:1}),ie(it(Ph),{visible:bi.value,"onUpdate:visible":k[12]||(k[12]=et=>bi.value=et),modal:"",header:it(ot)("hologram.sim.params"),style:{width:"60rem",maxWidth:"95vw"}},{footer:vn(()=>[ie(it(xn),{label:it(ot)("hologram.sim.restore"),icon:"pi pi-undo",severity:"secondary",outlined:"",size:"small",onClick:Et},null,8,["label"]),ie(it(xn),{label:it(ot)("hologram.close"),icon:"pi pi-check",severity:"primary",size:"small",onClick:k[11]||(k[11]=et=>bi.value=!1)},null,8,["label"])]),default:vn(()=>[lt("p",Ov,dt(it(ot)("hologram.sim.hint")),1),ie(it(Yr),{severity:"secondary",size:"small",class:"hologram-params-help"},{default:vn(()=>[lt("ul",null,[lt("li",null,dt(it(ot)("hologram.sim.helpCapacity")),1),lt("li",null,dt(it(ot)("hologram.sim.helpBuffer")),1),lt("li",null,dt(it(ot)("hologram.sim.helpStops")),1)])]),_:1}),st.value?(Kt(),ee("div",Bv,[lt("label",zv,dt(it(ot)("hologram.sim.arrival")),1),ie(it(Bn),{modelValue:st.value.arrival_s,"onUpdate:modelValue":[k[10]||(k[10]=et=>st.value.arrival_s=et),qt],inputId:"hologram-arrival",size:"small",min:.1,maxFractionDigits:1,useGrouping:!1,placeholder:it(ot)("hologram.sim.arrivalHint")},null,8,["modelValue","placeholder"])])):be("",!0),lt("ul",kv,[(Kt(!0),ee(ze,null,Vs(zt.value,et=>{var Rt,kt,ue;return Kt(),ee("li",{key:et.id},[lt("div",Hv,[lt("span",null,[lt("span",{class:"hologram-dot",style:An({background:et.role==="station"&&it(di)[(Rt=gt(et.id))==null?void 0:Rt.state]||"#94a3b8"})},null,4),Ie(dt(et.name),1)]),lt("small",Vv,[et.role==="station"?(Kt(),ee(ze,{key:0},[Ie(dt(it(ot)("hologram.sim.utilization"))+" "+dt(V((kt=gt(et.id))==null?void 0:kt.busy)),1)],64)):(Kt(),ee(ze,{key:1},[Ie(dt(((ue=gt(et.id))==null?void 0:ue.done)||0)+" "+dt(it(ot)("hologram.sim.pcs")),1)],64))])]),et.role==="station"?(Kt(),ee("div",Gv,[lt("label",{for:`sim-cycle-${et.id}`},dt(it(ot)("hologram.sim.cycle")),9,Wv),lt("label",{for:`sim-cap-${et.id}`},dt(it(ot)("hologram.sim.capacity")),9,Xv),lt("label",{for:`sim-mtbf-${et.id}`},dt(it(ot)("hologram.sim.mtbf")),9,Yv),lt("label",{for:`sim-stop-${et.id}`},dt(it(ot)("hologram.sim.stop")),9,qv),ie(it(Bn),{modelValue:et.cycle_s,"onUpdate:modelValue":[Ot=>et.cycle_s=Ot,qt],inputId:`sim-cycle-${et.id}`,size:"small",min:.1,maxFractionDigits:1,useGrouping:!1,fluid:""},null,8,["modelValue","onUpdate:modelValue","inputId"]),ie(it(Bn),{modelValue:et.capacity,"onUpdate:modelValue":[Ot=>et.capacity=Ot,qt],inputId:`sim-cap-${et.id}`,size:"small",min:1,max:100,useGrouping:!1,fluid:""},null,8,["modelValue","onUpdate:modelValue","inputId"]),ie(it(Bn),{modelValue:et.mtbf_s,"onUpdate:modelValue":[Ot=>et.mtbf_s=Ot,qt],inputId:`sim-mtbf-${et.id}`,size:"small",min:0,useGrouping:!1,fluid:""},null,8,["modelValue","onUpdate:modelValue","inputId"]),ie(it(Bn),{modelValue:et.stop_s,"onUpdate:modelValue":[Ot=>et.stop_s=Ot,qt],inputId:`sim-stop-${et.id}`,size:"small",min:0,useGrouping:!1,fluid:""},null,8,["modelValue","onUpdate:modelValue","inputId"])])):be("",!0)])}),128))]),lt("h5",$v,dt(it(ot)("hologram.sim.buffers")),1),st.value?(Kt(),Hs(it(Lh),{key:1,value:st.value.flows,size:"small",scrollable:"",scrollHeight:"16rem"},{default:vn(()=>[ie(it(nl),{header:it(ot)("hologram.sim.station")},{body:vn(({data:et})=>{var Rt,kt;return[Ie(dt((Rt=st.value.stations[et.from])==null?void 0:Rt.name)+" → "+dt((kt=st.value.stations[et.to])==null?void 0:kt.name),1)]}),_:1},8,["header"]),ie(it(nl),{header:it(ot)("hologram.sim.buffer"),style:{width:"9rem"}},{body:vn(({data:et})=>[ie(it(Bn),{modelValue:et.buffer,"onUpdate:modelValue":[Rt=>et.buffer=Rt,qt],size:"small",min:0,useGrouping:!1,fluid:""},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["header"])]),_:1},8,["value"])):be("",!0)]),_:1},8,["visible","header"]),ie(Ih,{visible:T.value,"onUpdate:visible":k[13]||(k[13]=et=>T.value=et),hologram:b.value,machines:g.value,currentCamera:j,onSaved:J},null,8,["visible","hologram","machines"]),ie(Uh,{visible:W.value,"onUpdate:visible":k[14]||(k[14]=et=>W.value=et),hologram:b.value,onRestored:J},null,8,["visible","hologram"])],2))}},Kv=Sh(Zv,[["__scopeId","data-v-c9c60fe2"]]),sx={__name:"Hologram",setup(i){return(t,e)=>(Kt(),ee("div",null,[ie(Kv)]))}};export{sx as default};
