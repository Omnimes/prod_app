import{aM as Jo,aq as pe,aN as un,aO as Qo,m as bc,aP as xh,aQ as Mh,aR as yh,_ as Sh,ak as Eh,ax as _n,al as Te,aS as rt,ar as bh,as as wh,e as ee,o as Kt,h as ne,w as vn,at as nt,c as tl,f as lt,t as ft,A as Xr,k as De,F as Be,j as Pe,b as Th,a as Yr,E as ei,aT as Ah,d as xn,x as Tn,g as el,i as Gs,ao as On,B as Rh,J as Ch,ay as Ws}from"./index-COtWosF6.js";import{s as nl}from"./index-B4wNqFxU.js";import{s as Ph}from"./index-DLgDJRTV.js";import{C as Lh,a as Dh,_ as Ih}from"./ComponentHologramPromptBuilder-B10czRw1.js";import"./index-Bbv645jV.js";import"./index-TfpT7uyP.js";import"./index-DUciEGez.js";var Ec;const qr=(Mh||((Ec=yh)==null?void 0:Ec.get)||(()=>null))("spBv1.0"),wi=i=>Array.isArray(i)?i:Array.isArray(i==null?void 0:i.results)?i.results:Array.isArray(i==null?void 0:i.data)?i.data:[];function Uh(i){const t=window.location.protocol==="https:"?"wss://":"ws://",e=String(i||"").trim().replace(/^https?:\/\//i,"").replace(/^wss?:\/\//i,"").replace(/^\/+/,"").replace(/\/+$/,"");if(!e)return"";const n=`${t}${e}`;return/\/mqtt$/i.test(n)?n:`${n}/mqtt`}function Nh(i,t){const e=i.survey_low,n=i.survey_high;if(e==null&&n==null)return null;const s=parseFloat((t??"").toString());return!(Number.isNaN(s)||e!=null&&s<Number(e)||n!=null&&s>=Number(n))}function Fh({axios:i,apiHost:t,dataEnc:e,onError:n,onConnect:s,onReconnect:r,onSignal:a}={}){const o=Jo({}),l=pe(!1),h=Jo({messages:0,signals:0,lastAt:0}),d=pe([]);let p=null,c=[],u=[];const m=(Q,v="",E="get",W=null)=>i(bc(t,Q,v,e(),E,W)),M=Q=>{var v;return((v=c.find(E=>Number(E.id)===Number(Q)))==null?void 0:v.name)||""},f=Q=>{var v;return((v=u.find(E=>Number(E.id)===Number(Q)))==null?void 0:v.name)||""};function g(Q){const v=String(Q);return o[v]||(o[v]={color:null,nameStatus:"",typeEvent:null,date:"",updatedAt:0,substatuses:[],signals:{}}),o[v]}function R(Q,v){var A;const E=(A=Q.profil)==null?void 0:A[0];if(!E)return;const W=g(Q.machine);W.color=E.colorBackground||W.color,W.nameStatus=E.nameStatus||"",W.typeEvent=E.typeEvent??null,W.date=v}function b(Q,v){var K;const E=((K=Q.profil)==null?void 0:K[0])||{},W=g(Q.machine),A={tag:Q.tag,target:M(E.aliasValue)||Q.tag,value:v,unit:f(E.unitValue)},z=W.substatuses.findIndex(_=>_.tag===Q.tag);z>=0?W.substatuses.splice(z,1,A):W.substatuses.push(A)}function T(Q,v,E,{lastEvent:W=!1,machine:A=null}={}){return d.value.filter(z=>!(z.tag!==Q||A&&Number(z.machine)!==Number(A)||!W&&z.topic!==v||W&&v&&z.topic&&z.topic!==v)).map(z=>{var x,C;const K=(C=(x=z.profil)==null?void 0:x[0])==null?void 0:C.main,_=Nh(z,E);let S=!1;return K===1?_!==null?S=_:S=(z.value??"").toString().toLowerCase()===(E??"").toString().toLowerCase()||z.value==="":K===2&&(S=z.value===""||z.value==null),S?z:null}).filter(Boolean)}function Y(Q,v,E,W,A){const z=T(Q,v,E,A),K=z.filter(x=>{var C,L;return((L=(C=x.profil)==null?void 0:C[0])==null?void 0:L.main)===1&&x.value!==""}),_=z.filter(x=>{var C,L;return((L=(C=x.profil)==null?void 0:C[0])==null?void 0:L.main)===1&&x.value===""});(K.length?K:_).slice(0,1).forEach(x=>R(x,W)),z.filter(x=>{var C,L;return((L=(C=x.profil)==null?void 0:C[0])==null?void 0:L.main)===2}).forEach(x=>b(x,E));const S=new Set;if(z.forEach(x=>{const C=g(x.machine);C.signals[Q]=E,S.add(x.machine)}),!(A!=null&&A.lastEvent)&&S.size){const x=Date.now();h.signals+=1,h.lastAt=x,S.forEach(C=>{g(C).updatedAt=x,a&&a(C,Q,E)})}}function U(){if(p)try{p.end(!0)}catch{}p=null,l.value=!1}async function I(Q){var C,L;if(U(),Object.keys(o).forEach(N=>delete o[N]),h.messages=0,h.signals=0,h.lastAt=0,!Q)return;const v=(N,et)=>N.catch(J=>(n&&n(J.message),{data:et})),[E,W,A,z,K]=await Promise.all([v(m(un.settings,""),{results:[]}),v(m(un.statusesProfilesList,"/"),[]),v(m(un.machines,`/?server=${Q}&limit=1000`),[]),m(un.listAliases,"/").catch(()=>({data:[]})),m(un.listUnits,"/").catch(()=>({data:[]}))]);c=wi(z.data),u=wi(K.data);const _=wi(W.data),S=[];wi(A.data).forEach(N=>{(N.machine_status||[]).forEach(et=>{var O,j;const J=Array.isArray(et.profil)?(j=(O=et.profil)==null?void 0:O[0])==null?void 0:j.id:et.profil;S.push({...et,machine:et.machine??N.id,profil:_.filter(at=>Number(at.id)===Number(J))})})}),d.value=S;try{const N=await m(un.events,"/last/","post",{server:Q,line:0});wi(N.data).forEach(et=>{Y(et.tag,et.topic,et.value,Qo(et.timestamp_add),{lastEvent:!0,machine:et.machine})})}catch(N){n&&n(N.message)}let x={};try{x=JSON.parse(((L=(C=wi(E.data))==null?void 0:C[0])==null?void 0:L.data)||"{}")}catch{x={}}X(x)}function X(Q){const v=Uh(Q.adress);if(!v)return;let E;try{E=new URL(v)}catch{return}const W={clientId:(Q.nameClient||"omnimes-hologram")+Math.floor(Math.random()*1e7),reconnectPeriod:Number(Q.reconnectPeriod)||1e3,username:Q.login,password:Q.password};E.protocol!=="wss:"&&!E.port&&Q.port&&(W.port=Number(Q.port)||8083),p=xh.connect(v,W),p.on("connect",()=>{l.value=!0,p.subscribe(Q.topic||"#",{qos:Number(Q.qos)||0}),s&&s()}),p.on("reconnect",()=>{l.value=!1,r&&r()}),p.on("message",(A,z)=>{let K=null;try{K=qr&&typeof qr.decodePayload=="function"?qr.decodePayload(z):null}catch{K=null}if(!K||!Array.isArray(K.metrics))return;h.messages+=1;const _=[...K.metrics];K.metrics.forEach(S=>{var x;(S==null?void 0:S.type)==="DataSet"&&((x=S.value)!=null&&x.rows)&&S.name&&S.value.rows.forEach((C,L)=>{C&&_.push({name:`${S.name}/${L+1}`,value:C[0],timestamp:K.timestamp})})}),_.forEach(S=>{var C,L;if((S==null?void 0:S.name)===void 0||(S==null?void 0:S.type)==="DataSet")return;const x=((L=(C=S.value)==null?void 0:C.toString)==null?void 0:L.call(C))??S.value;Y(S.name,A,x,Qo(S.timestamp||K.timestamp))})})}return{live:o,connected:l,activity:h,statuses:d,start:I,stop:U}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Co="169",Ki={ROTATE:0,DOLLY:1,PAN:2},qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Oh=0,il=1,Bh=2,wc=1,Tc=2,Dn=3,Kn=0,Ge=1,dn=2,$n=0,pi=1,Na=2,sl=3,rl=4,zh=5,ci=100,kh=101,Hh=102,Vh=103,Gh=104,Wh=200,Xh=201,Yh=202,qh=203,Fa=204,Oa=205,$h=206,Zh=207,Kh=208,jh=209,Jh=210,Qh=211,tu=212,eu=213,nu=214,Ba=0,za=1,ka=2,Qi=3,Ha=4,Va=5,Ga=6,Wa=7,Ac=0,iu=1,su=2,Zn=0,ru=1,au=2,ou=3,Rc=4,lu=5,cu=6,hu=7,Cc=300,ts=301,es=302,Xa=303,Ya=304,Br=306,jn=1e3,di=1001,qa=1002,Xe=1003,uu=1004,Xs=1005,nn=1006,$r=1007,fi=1008,Un=1009,Pc=1010,Lc=1011,Ls=1012,Po=1013,mi=1014,Sn=1015,Fs=1016,Lo=1017,Do=1018,ns=1020,Dc=35902,Ic=1021,Uc=1022,pn=1023,Nc=1024,Fc=1025,ji=1026,is=1027,Io=1028,Uo=1029,Oc=1030,No=1031,Fo=1033,Er=33776,br=33777,wr=33778,Tr=33779,$a=35840,Za=35841,Ka=35842,ja=35843,Ja=36196,Qa=37492,to=37496,eo=37808,no=37809,io=37810,so=37811,ro=37812,ao=37813,oo=37814,lo=37815,co=37816,ho=37817,uo=37818,fo=37819,po=37820,mo=37821,Ar=36492,go=36494,_o=36495,Bc=36283,vo=36284,xo=36285,Mo=36286,du=3200,fu=3201,zc=0,pu=1,qn="",Fe="srgb",Qn="srgb-linear",Oo="display-p3",zr="display-p3-linear",Lr="linear",me="srgb",Dr="rec709",Ir="p3",Ti=7680,al=519,mu=512,gu=513,_u=514,kc=515,vu=516,xu=517,Mu=518,yu=519,yo=35044,ol="300 es",In=2e3,Ur=2001;class vi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ll=1234567;const bs=Math.PI/180,Ds=180/Math.PI;function bn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function Re(i,t,e){return Math.max(t,Math.min(e,i))}function Bo(i,t){return(i%t+t)%t}function Su(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Eu(i,t,e){return i!==t?(e-i)/(t-i):0}function ws(i,t,e){return(1-e)*i+e*t}function bu(i,t,e,n){return ws(i,t,1-Math.exp(-e*n))}function wu(i,t=1){return t-Math.abs(Bo(i,t*2)-t)}function Tu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Au(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ru(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Cu(i,t){return i+Math.random()*(t-i)}function Pu(i){return i*(.5-Math.random())}function Lu(i){i!==void 0&&(ll=i);let t=ll+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Du(i){return i*bs}function Iu(i){return i*Ds}function Uu(i){return(i&i-1)===0&&i!==0}function Nu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Fu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ou(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),h=r((t+n)/2),d=a((t+n)/2),p=r((t-n)/2),c=a((t-n)/2),u=r((n-t)/2),m=a((n-t)/2);switch(s){case"XYX":i.set(o*d,l*p,l*c,o*h);break;case"YZY":i.set(l*c,o*d,l*p,o*h);break;case"ZXZ":i.set(l*p,l*c,o*d,o*h);break;case"XZX":i.set(o*d,l*m,l*u,o*h);break;case"YXY":i.set(l*u,o*d,l*m,o*h);break;case"ZYZ":i.set(l*m,l*u,o*d,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ue(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Mn={DEG2RAD:bs,RAD2DEG:Ds,generateUUID:bn,clamp:Re,euclideanModulo:Bo,mapLinear:Su,inverseLerp:Eu,lerp:ws,damp:bu,pingpong:wu,smoothstep:Tu,smootherstep:Au,randInt:Ru,randFloat:Cu,randFloatSpread:Pu,seededRandom:Lu,degToRad:Du,radToDeg:Iu,isPowerOfTwo:Uu,ceilPowerOfTwo:Nu,floorPowerOfTwo:Fu,setQuaternionFromProperEuler:Ou,normalize:ue,denormalize:fn};class _t{constructor(t=0,e=0){_t.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $t{constructor(t,e,n,s,r,a,o,l,h){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,h)}set(t,e,n,s,r,a,o,l,h){const d=this.elements;return d[0]=t,d[1]=s,d[2]=o,d[3]=e,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],h=n[1],d=n[4],p=n[7],c=n[2],u=n[5],m=n[8],M=s[0],f=s[3],g=s[6],R=s[1],b=s[4],T=s[7],Y=s[2],U=s[5],I=s[8];return r[0]=a*M+o*R+l*Y,r[3]=a*f+o*b+l*U,r[6]=a*g+o*T+l*I,r[1]=h*M+d*R+p*Y,r[4]=h*f+d*b+p*U,r[7]=h*g+d*T+p*I,r[2]=c*M+u*R+m*Y,r[5]=c*f+u*b+m*U,r[8]=c*g+u*T+m*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],d=t[8];return e*a*d-e*o*h-n*r*d+n*o*l+s*r*h-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],d=t[8],p=d*a-o*h,c=o*l-d*r,u=h*r-a*l,m=e*p+n*c+s*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/m;return t[0]=p*M,t[1]=(s*h-d*n)*M,t[2]=(o*n-s*a)*M,t[3]=c*M,t[4]=(d*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=u*M,t[7]=(n*l-h*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*a+h*o)+a+t,-s*h,s*l,-s*(-h*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Zr.makeScale(t,e)),this}rotate(t){return this.premultiply(Zr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Zr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Zr=new $t;function Hc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Nr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bu(){const i=Nr("canvas");return i.style.display="block",i}const cl={};function Rr(i){i in cl||(cl[i]=!0,console.warn(i))}function zu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ku(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Hu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const hl=new $t().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ul=new $t().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),us={[Qn]:{transfer:Lr,primaries:Dr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Fe]:{transfer:me,primaries:Dr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[zr]:{transfer:Lr,primaries:Ir,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(ul),fromReference:i=>i.applyMatrix3(hl)},[Oo]:{transfer:me,primaries:Ir,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(ul),fromReference:i=>i.applyMatrix3(hl).convertLinearToSRGB()}},Vu=new Set([Qn,zr]),le={enabled:!0,_workingColorSpace:Qn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Vu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=us[t].toReference,s=us[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return us[i].primaries},getTransfer:function(i){return i===qn?Lr:us[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(us[t].luminanceCoefficients)}};function Ji(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Kr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ai;class Gu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ai===void 0&&(Ai=Nr("canvas")),Ai.width=t.width,Ai.height=t.height;const n=Ai.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ai}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Nr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ji(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ji(e[n]/255)*255):e[n]=Ji(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Wu=0;class Vc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=bn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(jr(s[a].image)):r.push(jr(s[a]))}else r=jr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function jr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xu=0;class Oe extends vi{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,n=di,s=di,r=nn,a=fi,o=pn,l=Un,h=Oe.DEFAULT_ANISOTROPY,d=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=bn(),this.name="",this.source=new Vc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jn:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case qa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jn:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case qa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=Cc;Oe.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,n=0,s=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,h=l[0],d=l[4],p=l[8],c=l[1],u=l[5],m=l[9],M=l[2],f=l[6],g=l[10];if(Math.abs(d-c)<.01&&Math.abs(p-M)<.01&&Math.abs(m-f)<.01){if(Math.abs(d+c)<.1&&Math.abs(p+M)<.1&&Math.abs(m+f)<.1&&Math.abs(h+u+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(h+1)/2,T=(u+1)/2,Y=(g+1)/2,U=(d+c)/4,I=(p+M)/4,X=(m+f)/4;return b>T&&b>Y?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=U/n,r=I/n):T>Y?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=U/s,r=X/s):Y<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(Y),n=I/r,s=X/r),this.set(n,s,r,e),this}let R=Math.sqrt((f-m)*(f-m)+(p-M)*(p-M)+(c-d)*(c-d));return Math.abs(R)<.001&&(R=1),this.x=(f-m)/R,this.y=(p-M)/R,this.z=(c-d)/R,this.w=Math.acos((h+u+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yu extends vi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Oe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Vc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends Yu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Gc extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class qu extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],h=n[s+1],d=n[s+2],p=n[s+3];const c=r[a+0],u=r[a+1],m=r[a+2],M=r[a+3];if(o===0){t[e+0]=l,t[e+1]=h,t[e+2]=d,t[e+3]=p;return}if(o===1){t[e+0]=c,t[e+1]=u,t[e+2]=m,t[e+3]=M;return}if(p!==M||l!==c||h!==u||d!==m){let f=1-o;const g=l*c+h*u+d*m+p*M,R=g>=0?1:-1,b=1-g*g;if(b>Number.EPSILON){const Y=Math.sqrt(b),U=Math.atan2(Y,g*R);f=Math.sin(f*U)/Y,o=Math.sin(o*U)/Y}const T=o*R;if(l=l*f+c*T,h=h*f+u*T,d=d*f+m*T,p=p*f+M*T,f===1-o){const Y=1/Math.sqrt(l*l+h*h+d*d+p*p);l*=Y,h*=Y,d*=Y,p*=Y}}t[e]=l,t[e+1]=h,t[e+2]=d,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],h=n[s+2],d=n[s+3],p=r[a],c=r[a+1],u=r[a+2],m=r[a+3];return t[e]=o*m+d*p+l*u-h*c,t[e+1]=l*m+d*c+h*p-o*u,t[e+2]=h*m+d*u+o*c-l*p,t[e+3]=d*m-o*p-l*c-h*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,h=o(n/2),d=o(s/2),p=o(r/2),c=l(n/2),u=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=c*d*p+h*u*m,this._y=h*u*p-c*d*m,this._z=h*d*m+c*u*p,this._w=h*d*p-c*u*m;break;case"YXZ":this._x=c*d*p+h*u*m,this._y=h*u*p-c*d*m,this._z=h*d*m-c*u*p,this._w=h*d*p+c*u*m;break;case"ZXY":this._x=c*d*p-h*u*m,this._y=h*u*p+c*d*m,this._z=h*d*m+c*u*p,this._w=h*d*p-c*u*m;break;case"ZYX":this._x=c*d*p-h*u*m,this._y=h*u*p+c*d*m,this._z=h*d*m-c*u*p,this._w=h*d*p+c*u*m;break;case"YZX":this._x=c*d*p+h*u*m,this._y=h*u*p+c*d*m,this._z=h*d*m-c*u*p,this._w=h*d*p-c*u*m;break;case"XZY":this._x=c*d*p-h*u*m,this._y=h*u*p-c*d*m,this._z=h*d*m+c*u*p,this._w=h*d*p+c*u*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],h=e[2],d=e[6],p=e[10],c=n+o+p;if(c>0){const u=.5/Math.sqrt(c+1);this._w=.25/u,this._x=(d-l)*u,this._y=(r-h)*u,this._z=(a-s)*u}else if(n>o&&n>p){const u=2*Math.sqrt(1+n-o-p);this._w=(d-l)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+h)/u}else if(o>p){const u=2*Math.sqrt(1+o-n-p);this._w=(r-h)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(l+d)/u}else{const u=2*Math.sqrt(1+p-n-o);this._w=(a-s)/u,this._x=(r+h)/u,this._y=(l+d)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,h=e._z,d=e._w;return this._x=n*d+a*o+s*h-r*l,this._y=s*d+a*l+r*o-n*h,this._z=r*d+a*h+n*l-s*o,this._w=a*d-n*o-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const u=1-e;return this._w=u*a+e*this._w,this._x=u*n+e*this._x,this._y=u*s+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}const h=Math.sqrt(l),d=Math.atan2(h,o),p=Math.sin((1-e)*d)/h,c=Math.sin(e*d)/h;return this._w=a*p+this._w*c,this._x=n*p+this._x*c,this._y=s*p+this._y*c,this._z=r*p+this._z*c,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(dl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(dl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,h=2*(a*s-o*n),d=2*(o*e-r*s),p=2*(r*n-a*e);return this.x=e+l*h+a*p-o*d,this.y=n+l*d+o*h-r*p,this.z=s+l*p+r*d-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Jr.copy(this).projectOnVector(t),this.sub(Jr)}reflect(t){return this.sub(Jr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jr=new F,dl=new Nn;class xi{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ln):ln.fromBufferAttribute(r,a),ln.applyMatrix4(t.matrixWorld),this.expandByPoint(ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ys.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ys.copy(n.boundingBox)),Ys.applyMatrix4(t.matrixWorld),this.union(Ys)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ln),ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ds),qs.subVectors(this.max,ds),Ri.subVectors(t.a,ds),Ci.subVectors(t.b,ds),Pi.subVectors(t.c,ds),Bn.subVectors(Ci,Ri),zn.subVectors(Pi,Ci),ni.subVectors(Ri,Pi);let e=[0,-Bn.z,Bn.y,0,-zn.z,zn.y,0,-ni.z,ni.y,Bn.z,0,-Bn.x,zn.z,0,-zn.x,ni.z,0,-ni.x,-Bn.y,Bn.x,0,-zn.y,zn.x,0,-ni.y,ni.x,0];return!Qr(e,Ri,Ci,Pi,qs)||(e=[1,0,0,0,1,0,0,0,1],!Qr(e,Ri,Ci,Pi,qs))?!1:($s.crossVectors(Bn,zn),e=[$s.x,$s.y,$s.z],Qr(e,Ri,Ci,Pi,qs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(An),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const An=[new F,new F,new F,new F,new F,new F,new F,new F],ln=new F,Ys=new xi,Ri=new F,Ci=new F,Pi=new F,Bn=new F,zn=new F,ni=new F,ds=new F,qs=new F,$s=new F,ii=new F;function Qr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ii.fromArray(i,r);const o=s.x*Math.abs(ii.x)+s.y*Math.abs(ii.y)+s.z*Math.abs(ii.z),l=t.dot(ii),h=e.dot(ii),d=n.dot(ii);if(Math.max(-Math.max(l,h,d),Math.min(l,h,d))>o)return!1}return!0}const $u=new xi,fs=new F,ta=new F;class Os{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):$u.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fs.subVectors(t,this.center);const e=fs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(fs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ta.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fs.copy(t.center).add(ta)),this.expandByPoint(fs.copy(t.center).sub(ta))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Rn=new F,ea=new F,Zs=new F,kn=new F,na=new F,Ks=new F,ia=new F;class zo{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Rn.copy(this.origin).addScaledVector(this.direction,e),Rn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ea.copy(t).add(e).multiplyScalar(.5),Zs.copy(e).sub(t).normalize(),kn.copy(this.origin).sub(ea);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Zs),o=kn.dot(this.direction),l=-kn.dot(Zs),h=kn.lengthSq(),d=Math.abs(1-a*a);let p,c,u,m;if(d>0)if(p=a*l-o,c=a*o-l,m=r*d,p>=0)if(c>=-m)if(c<=m){const M=1/d;p*=M,c*=M,u=p*(p+a*c+2*o)+c*(a*p+c+2*l)+h}else c=r,p=Math.max(0,-(a*c+o)),u=-p*p+c*(c+2*l)+h;else c=-r,p=Math.max(0,-(a*c+o)),u=-p*p+c*(c+2*l)+h;else c<=-m?(p=Math.max(0,-(-a*r+o)),c=p>0?-r:Math.min(Math.max(-r,-l),r),u=-p*p+c*(c+2*l)+h):c<=m?(p=0,c=Math.min(Math.max(-r,-l),r),u=c*(c+2*l)+h):(p=Math.max(0,-(a*r+o)),c=p>0?r:Math.min(Math.max(-r,-l),r),u=-p*p+c*(c+2*l)+h);else c=a>0?-r:r,p=Math.max(0,-(a*c+o)),u=-p*p+c*(c+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(ea).addScaledVector(Zs,c),u}intersectSphere(t,e){Rn.subVectors(t.center,this.origin);const n=Rn.dot(this.direction),s=Rn.dot(Rn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const h=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,c=this.origin;return h>=0?(n=(t.min.x-c.x)*h,s=(t.max.x-c.x)*h):(n=(t.max.x-c.x)*h,s=(t.min.x-c.x)*h),d>=0?(r=(t.min.y-c.y)*d,a=(t.max.y-c.y)*d):(r=(t.max.y-c.y)*d,a=(t.min.y-c.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-c.z)*p,l=(t.max.z-c.z)*p):(o=(t.max.z-c.z)*p,l=(t.min.z-c.z)*p),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Rn)!==null}intersectTriangle(t,e,n,s,r){na.subVectors(e,t),Ks.subVectors(n,t),ia.crossVectors(na,Ks);let a=this.direction.dot(ia),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;kn.subVectors(this.origin,t);const l=o*this.direction.dot(Ks.crossVectors(kn,Ks));if(l<0)return null;const h=o*this.direction.dot(na.cross(kn));if(h<0||l+h>a)return null;const d=-o*kn.dot(ia);return d<0?null:this.at(d/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,n,s,r,a,o,l,h,d,p,c,u,m,M,f){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,h,d,p,c,u,m,M,f)}set(t,e,n,s,r,a,o,l,h,d,p,c,u,m,M,f){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=h,g[6]=d,g[10]=p,g[14]=c,g[3]=u,g[7]=m,g[11]=M,g[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Li.setFromMatrixColumn(t,0).length(),r=1/Li.setFromMatrixColumn(t,1).length(),a=1/Li.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),h=Math.sin(s),d=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){const c=a*d,u=a*p,m=o*d,M=o*p;e[0]=l*d,e[4]=-l*p,e[8]=h,e[1]=u+m*h,e[5]=c-M*h,e[9]=-o*l,e[2]=M-c*h,e[6]=m+u*h,e[10]=a*l}else if(t.order==="YXZ"){const c=l*d,u=l*p,m=h*d,M=h*p;e[0]=c+M*o,e[4]=m*o-u,e[8]=a*h,e[1]=a*p,e[5]=a*d,e[9]=-o,e[2]=u*o-m,e[6]=M+c*o,e[10]=a*l}else if(t.order==="ZXY"){const c=l*d,u=l*p,m=h*d,M=h*p;e[0]=c-M*o,e[4]=-a*p,e[8]=m+u*o,e[1]=u+m*o,e[5]=a*d,e[9]=M-c*o,e[2]=-a*h,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const c=a*d,u=a*p,m=o*d,M=o*p;e[0]=l*d,e[4]=m*h-u,e[8]=c*h+M,e[1]=l*p,e[5]=M*h+c,e[9]=u*h-m,e[2]=-h,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const c=a*l,u=a*h,m=o*l,M=o*h;e[0]=l*d,e[4]=M-c*p,e[8]=m*p+u,e[1]=p,e[5]=a*d,e[9]=-o*d,e[2]=-h*d,e[6]=u*p+m,e[10]=c-M*p}else if(t.order==="XZY"){const c=a*l,u=a*h,m=o*l,M=o*h;e[0]=l*d,e[4]=-p,e[8]=h*d,e[1]=c*p+M,e[5]=a*d,e[9]=u*p-m,e[2]=m*p-u,e[6]=o*d,e[10]=M*p+c}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zu,t,Ku)}lookAt(t,e,n){const s=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),Hn.crossVectors(n,$e),Hn.lengthSq()===0&&(Math.abs(n.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),Hn.crossVectors(n,$e)),Hn.normalize(),js.crossVectors($e,Hn),s[0]=Hn.x,s[4]=js.x,s[8]=$e.x,s[1]=Hn.y,s[5]=js.y,s[9]=$e.y,s[2]=Hn.z,s[6]=js.z,s[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],h=n[12],d=n[1],p=n[5],c=n[9],u=n[13],m=n[2],M=n[6],f=n[10],g=n[14],R=n[3],b=n[7],T=n[11],Y=n[15],U=s[0],I=s[4],X=s[8],Q=s[12],v=s[1],E=s[5],W=s[9],A=s[13],z=s[2],K=s[6],_=s[10],S=s[14],x=s[3],C=s[7],L=s[11],N=s[15];return r[0]=a*U+o*v+l*z+h*x,r[4]=a*I+o*E+l*K+h*C,r[8]=a*X+o*W+l*_+h*L,r[12]=a*Q+o*A+l*S+h*N,r[1]=d*U+p*v+c*z+u*x,r[5]=d*I+p*E+c*K+u*C,r[9]=d*X+p*W+c*_+u*L,r[13]=d*Q+p*A+c*S+u*N,r[2]=m*U+M*v+f*z+g*x,r[6]=m*I+M*E+f*K+g*C,r[10]=m*X+M*W+f*_+g*L,r[14]=m*Q+M*A+f*S+g*N,r[3]=R*U+b*v+T*z+Y*x,r[7]=R*I+b*E+T*K+Y*C,r[11]=R*X+b*W+T*_+Y*L,r[15]=R*Q+b*A+T*S+Y*N,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],h=t[13],d=t[2],p=t[6],c=t[10],u=t[14],m=t[3],M=t[7],f=t[11],g=t[15];return m*(+r*l*p-s*h*p-r*o*c+n*h*c+s*o*u-n*l*u)+M*(+e*l*u-e*h*c+r*a*c-s*a*u+s*h*d-r*l*d)+f*(+e*h*p-e*o*u-r*a*p+n*a*u+r*o*d-n*h*d)+g*(-s*o*d-e*l*p+e*o*c+s*a*p-n*a*c+n*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],d=t[8],p=t[9],c=t[10],u=t[11],m=t[12],M=t[13],f=t[14],g=t[15],R=p*f*h-M*c*h+M*l*u-o*f*u-p*l*g+o*c*g,b=m*c*h-d*f*h-m*l*u+a*f*u+d*l*g-a*c*g,T=d*M*h-m*p*h+m*o*u-a*M*u-d*o*g+a*p*g,Y=m*p*l-d*M*l-m*o*c+a*M*c+d*o*f-a*p*f,U=e*R+n*b+s*T+r*Y;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/U;return t[0]=R*I,t[1]=(M*c*r-p*f*r-M*s*u+n*f*u+p*s*g-n*c*g)*I,t[2]=(o*f*r-M*l*r+M*s*h-n*f*h-o*s*g+n*l*g)*I,t[3]=(p*l*r-o*c*r-p*s*h+n*c*h+o*s*u-n*l*u)*I,t[4]=b*I,t[5]=(d*f*r-m*c*r+m*s*u-e*f*u-d*s*g+e*c*g)*I,t[6]=(m*l*r-a*f*r-m*s*h+e*f*h+a*s*g-e*l*g)*I,t[7]=(a*c*r-d*l*r+d*s*h-e*c*h-a*s*u+e*l*u)*I,t[8]=T*I,t[9]=(m*p*r-d*M*r-m*n*u+e*M*u+d*n*g-e*p*g)*I,t[10]=(a*M*r-m*o*r+m*n*h-e*M*h-a*n*g+e*o*g)*I,t[11]=(d*o*r-a*p*r-d*n*h+e*p*h+a*n*u-e*o*u)*I,t[12]=Y*I,t[13]=(d*M*s-m*p*s+m*n*c-e*M*c-d*n*f+e*p*f)*I,t[14]=(m*o*s-a*M*s-m*n*l+e*M*l+a*n*f-e*o*f)*I,t[15]=(a*p*s-d*o*s+d*n*l-e*p*l-a*n*c+e*o*c)*I,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,h=r*a,d=r*o;return this.set(h*a+n,h*o-s*l,h*l+s*o,0,h*o+s*l,d*o+n,d*l-s*a,0,h*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,h=r+r,d=a+a,p=o+o,c=r*h,u=r*d,m=r*p,M=a*d,f=a*p,g=o*p,R=l*h,b=l*d,T=l*p,Y=n.x,U=n.y,I=n.z;return s[0]=(1-(M+g))*Y,s[1]=(u+T)*Y,s[2]=(m-b)*Y,s[3]=0,s[4]=(u-T)*U,s[5]=(1-(c+g))*U,s[6]=(f+R)*U,s[7]=0,s[8]=(m+b)*I,s[9]=(f-R)*I,s[10]=(1-(c+M))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Li.set(s[0],s[1],s[2]).length();const a=Li.set(s[4],s[5],s[6]).length(),o=Li.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],cn.copy(this);const h=1/r,d=1/a,p=1/o;return cn.elements[0]*=h,cn.elements[1]*=h,cn.elements[2]*=h,cn.elements[4]*=d,cn.elements[5]*=d,cn.elements[6]*=d,cn.elements[8]*=p,cn.elements[9]*=p,cn.elements[10]*=p,e.setFromRotationMatrix(cn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=In){const l=this.elements,h=2*r/(e-t),d=2*r/(n-s),p=(e+t)/(e-t),c=(n+s)/(n-s);let u,m;if(o===In)u=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Ur)u=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=c,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=In){const l=this.elements,h=1/(e-t),d=1/(n-s),p=1/(a-r),c=(e+t)*h,u=(n+s)*d;let m,M;if(o===In)m=(a+r)*p,M=-2*p;else if(o===Ur)m=r*p,M=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-c,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=M,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Li=new F,cn=new oe,Zu=new F(0,0,0),Ku=new F(1,1,1),Hn=new F,js=new F,$e=new F,fl=new oe,pl=new Nn;class rn{constructor(t=0,e=0,n=0,s=rn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],h=s[5],d=s[9],p=s[2],c=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(Re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(c,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Re(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-p,u),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Re(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(c,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(c,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return fl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pl.setFromEuler(this),this.setFromQuaternion(pl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rn.DEFAULT_ORDER="XYZ";class ko{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ju=0;const ml=new F,Di=new Nn,Cn=new oe,Js=new F,ps=new F,Ju=new F,Qu=new Nn,gl=new F(1,0,0),_l=new F(0,1,0),vl=new F(0,0,1),xl={type:"added"},td={type:"removed"},Ii={type:"childadded",child:null},sa={type:"childremoved",child:null};class Ce extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ce.DEFAULT_UP.clone();const t=new F,e=new rn,n=new Nn,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new $t}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=Ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ko,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Di.setFromAxisAngle(t,e),this.quaternion.multiply(Di),this}rotateOnWorldAxis(t,e){return Di.setFromAxisAngle(t,e),this.quaternion.premultiply(Di),this}rotateX(t){return this.rotateOnAxis(gl,t)}rotateY(t){return this.rotateOnAxis(_l,t)}rotateZ(t){return this.rotateOnAxis(vl,t)}translateOnAxis(t,e){return ml.copy(t).applyQuaternion(this.quaternion),this.position.add(ml.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gl,t)}translateY(t){return this.translateOnAxis(_l,t)}translateZ(t){return this.translateOnAxis(vl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Js.copy(t):Js.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(ps,Js,this.up):Cn.lookAt(Js,ps,this.up),this.quaternion.setFromRotationMatrix(Cn),s&&(Cn.extractRotation(s.matrixWorld),Di.setFromRotationMatrix(Cn),this.quaternion.premultiply(Di.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xl),Ii.child=t,this.dispatchEvent(Ii),Ii.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(td),sa.child=t,this.dispatchEvent(sa),sa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xl),Ii.child=t,this.dispatchEvent(Ii),Ii.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,t,Ju),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,Qu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let h=0,d=l.length;h<d;h++){const p=l[h];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),h=a(t.textures),d=a(t.images),p=a(t.shapes),c=a(t.skeletons),u=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),c.length>0&&(n.skeletons=c),u.length>0&&(n.animations=u),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const l=[];for(const h in o){const d=o[h];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ce.DEFAULT_UP=new F(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new F,Pn=new F,ra=new F,Ln=new F,Ui=new F,Ni=new F,Ml=new F,aa=new F,oa=new F,la=new F,ca=new fe,ha=new fe,ua=new fe;class sn{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),hn.subVectors(t,e),s.cross(hn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){hn.subVectors(s,e),Pn.subVectors(n,e),ra.subVectors(t,e);const a=hn.dot(hn),o=hn.dot(Pn),l=hn.dot(ra),h=Pn.dot(Pn),d=Pn.dot(ra),p=a*h-o*o;if(p===0)return r.set(0,0,0),null;const c=1/p,u=(h*l-o*d)*c,m=(a*d-o*l)*c;return r.set(1-u-m,m,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ln.x),l.addScaledVector(a,Ln.y),l.addScaledVector(o,Ln.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return ca.setScalar(0),ha.setScalar(0),ua.setScalar(0),ca.fromBufferAttribute(t,e),ha.fromBufferAttribute(t,n),ua.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ca,r.x),a.addScaledVector(ha,r.y),a.addScaledVector(ua,r.z),a}static isFrontFacing(t,e,n,s){return hn.subVectors(n,e),Pn.subVectors(t,e),hn.cross(Pn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),hn.cross(Pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return sn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return sn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Ui.subVectors(s,n),Ni.subVectors(r,n),aa.subVectors(t,n);const l=Ui.dot(aa),h=Ni.dot(aa);if(l<=0&&h<=0)return e.copy(n);oa.subVectors(t,s);const d=Ui.dot(oa),p=Ni.dot(oa);if(d>=0&&p<=d)return e.copy(s);const c=l*p-d*h;if(c<=0&&l>=0&&d<=0)return a=l/(l-d),e.copy(n).addScaledVector(Ui,a);la.subVectors(t,r);const u=Ui.dot(la),m=Ni.dot(la);if(m>=0&&u<=m)return e.copy(r);const M=u*h-l*m;if(M<=0&&h>=0&&m<=0)return o=h/(h-m),e.copy(n).addScaledVector(Ni,o);const f=d*m-u*p;if(f<=0&&p-d>=0&&u-m>=0)return Ml.subVectors(r,s),o=(p-d)/(p-d+(u-m)),e.copy(s).addScaledVector(Ml,o);const g=1/(f+M+c);return a=M*g,o=c*g,e.copy(n).addScaledVector(Ui,a).addScaledVector(Ni,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Wc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},Qs={h:0,s:0,l:0};function da(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Wt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=le.workingColorSpace){if(t=Bo(t,1),e=Re(e,0,1),n=Re(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=da(a,r,t+1/3),this.g=da(a,r,t),this.b=da(a,r,t-1/3)}return le.toWorkingColorSpace(this,s),this}setStyle(t,e=Fe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){const n=Wc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ji(t.r),this.g=Ji(t.g),this.b=Ji(t.b),this}copyLinearToSRGB(t){return this.r=Kr(t.r),this.g=Kr(t.g),this.b=Kr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return le.fromWorkingColorSpace(Ue.copy(this),t),Math.round(Re(Ue.r*255,0,255))*65536+Math.round(Re(Ue.g*255,0,255))*256+Math.round(Re(Ue.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.fromWorkingColorSpace(Ue.copy(this),e);const n=Ue.r,s=Ue.g,r=Ue.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,h;const d=(o+a)/2;if(o===a)l=0,h=0;else{const p=a-o;switch(h=d<=.5?p/(a+o):p/(2-a-o),a){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=h,t.l=d,t}getRGB(t,e=le.workingColorSpace){return le.fromWorkingColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=Fe){le.fromWorkingColorSpace(Ue.copy(this),t);const e=Ue.r,n=Ue.g,s=Ue.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Vn),this.setHSL(Vn.h+t,Vn.s+e,Vn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vn),t.getHSL(Qs);const n=ws(Vn.h,Qs.h,e),s=ws(Vn.s,Qs.s,e),r=ws(Vn.l,Qs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ue=new Wt;Wt.NAMES=Wc;let ed=0;class rs extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=bn(),this.name="",this.type="Material",this.blending=pi,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fa,this.blendDst=Oa,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=al,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ti,this.stencilZFail=Ti,this.stencilZPass=Ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pi&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fa&&(n.blendSrc=this.blendSrc),this.blendDst!==Oa&&(n.blendDst=this.blendDst),this.blendEquation!==ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==al&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class mn extends rs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=Ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xe=new F,tr=new _t;class Je{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=yo,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)tr.fromBufferAttribute(this,e),tr.applyMatrix3(t),this.setXY(e,tr.x,tr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==yo&&(t.usage=this.usage),t}}class Xc extends Je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Yc extends Je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Me extends Je{constructor(t,e,n){super(new Float32Array(t),e,n)}}let nd=0;const tn=new oe,fa=new Ce,Fi=new F,Ze=new xi,ms=new xi,Ae=new F;class Ye extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=bn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hc(t)?Yc:Xc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return tn.makeRotationFromQuaternion(t),this.applyMatrix4(tn),this}rotateX(t){return tn.makeRotationX(t),this.applyMatrix4(tn),this}rotateY(t){return tn.makeRotationY(t),this.applyMatrix4(tn),this}rotateZ(t){return tn.makeRotationZ(t),this.applyMatrix4(tn),this}translate(t,e,n){return tn.makeTranslation(t,e,n),this.applyMatrix4(tn),this}scale(t,e,n){return tn.makeScale(t,e,n),this.applyMatrix4(tn),this}lookAt(t){return fa.lookAt(t),fa.updateMatrix(),this.applyMatrix4(fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Me(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ze.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Os);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ms.setFromBufferAttribute(o),this.morphTargetsRelative?(Ae.addVectors(Ze.min,ms.min),Ze.expandByPoint(Ae),Ae.addVectors(Ze.max,ms.max),Ze.expandByPoint(Ae)):(Ze.expandByPoint(ms.min),Ze.expandByPoint(ms.max))}Ze.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ae.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ae));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let h=0,d=o.count;h<d;h++)Ae.fromBufferAttribute(o,h),l&&(Fi.fromBufferAttribute(t,h),Ae.add(Fi)),s=Math.max(s,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Je(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let X=0;X<n.count;X++)o[X]=new F,l[X]=new F;const h=new F,d=new F,p=new F,c=new _t,u=new _t,m=new _t,M=new F,f=new F;function g(X,Q,v){h.fromBufferAttribute(n,X),d.fromBufferAttribute(n,Q),p.fromBufferAttribute(n,v),c.fromBufferAttribute(r,X),u.fromBufferAttribute(r,Q),m.fromBufferAttribute(r,v),d.sub(h),p.sub(h),u.sub(c),m.sub(c);const E=1/(u.x*m.y-m.x*u.y);isFinite(E)&&(M.copy(d).multiplyScalar(m.y).addScaledVector(p,-u.y).multiplyScalar(E),f.copy(p).multiplyScalar(u.x).addScaledVector(d,-m.x).multiplyScalar(E),o[X].add(M),o[Q].add(M),o[v].add(M),l[X].add(f),l[Q].add(f),l[v].add(f))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let X=0,Q=R.length;X<Q;++X){const v=R[X],E=v.start,W=v.count;for(let A=E,z=E+W;A<z;A+=3)g(t.getX(A+0),t.getX(A+1),t.getX(A+2))}const b=new F,T=new F,Y=new F,U=new F;function I(X){Y.fromBufferAttribute(s,X),U.copy(Y);const Q=o[X];b.copy(Q),b.sub(Y.multiplyScalar(Y.dot(Q))).normalize(),T.crossVectors(U,Q);const E=T.dot(l[X])<0?-1:1;a.setXYZW(X,b.x,b.y,b.z,E)}for(let X=0,Q=R.length;X<Q;++X){const v=R[X],E=v.start,W=v.count;for(let A=E,z=E+W;A<z;A+=3)I(t.getX(A+0)),I(t.getX(A+1)),I(t.getX(A+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let c=0,u=n.count;c<u;c++)n.setXYZ(c,0,0,0);const s=new F,r=new F,a=new F,o=new F,l=new F,h=new F,d=new F,p=new F;if(t)for(let c=0,u=t.count;c<u;c+=3){const m=t.getX(c+0),M=t.getX(c+1),f=t.getX(c+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,f),d.subVectors(a,r),p.subVectors(s,r),d.cross(p),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,M),h.fromBufferAttribute(n,f),o.add(d),l.add(d),h.add(d),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(f,h.x,h.y,h.z)}else for(let c=0,u=e.count;c<u;c+=3)s.fromBufferAttribute(e,c+0),r.fromBufferAttribute(e,c+1),a.fromBufferAttribute(e,c+2),d.subVectors(a,r),p.subVectors(s,r),d.cross(p),n.setXYZ(c+0,d.x,d.y,d.z),n.setXYZ(c+1,d.x,d.y,d.z),n.setXYZ(c+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(o,l){const h=o.array,d=o.itemSize,p=o.normalized,c=new h.constructor(l.length*d);let u=0,m=0;for(let M=0,f=l.length;M<f;M++){o.isInterleavedBufferAttribute?u=l[M]*o.data.stride+o.offset:u=l[M]*d;for(let g=0;g<d;g++)c[m++]=h[u++]}return new Je(c,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ye,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],h=t(l,n);e.setAttribute(o,h)}const r=this.morphAttributes;for(const o in r){const l=[],h=r[o];for(let d=0,p=h.length;d<p;d++){const c=h[d],u=t(c,n);l.push(u)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const h=n[l];t.data.attributes[l]=h.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],d=[];for(let p=0,c=h.length;p<c;p++){const u=h[p];d.push(u.toJSON(t.data))}d.length>0&&(s[l]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const h in s){const d=s[h];this.setAttribute(h,d.clone(e))}const r=t.morphAttributes;for(const h in r){const d=[],p=r[h];for(let c=0,u=p.length;c<u;c++)d.push(p[c].clone(e));this.morphAttributes[h]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let h=0,d=a.length;h<d;h++){const p=a[h];this.addGroup(p.start,p.count,p.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yl=new oe,si=new zo,er=new Os,Sl=new F,nr=new F,ir=new F,sr=new F,pa=new F,rr=new F,El=new F,ar=new F;class Gt extends Ce{constructor(t=new Ye,e=new mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){rr.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const d=o[l],p=r[l];d!==0&&(pa.fromBufferAttribute(p,t),a?rr.addScaledVector(pa,d):rr.addScaledVector(pa.sub(e),d))}e.add(rr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere),er.applyMatrix4(r),si.copy(t.ray).recast(t.near),!(er.containsPoint(si.origin)===!1&&(si.intersectSphere(er,Sl)===null||si.origin.distanceToSquared(Sl)>(t.far-t.near)**2))&&(yl.copy(r).invert(),si.copy(t.ray).applyMatrix4(yl),!(n.boundingBox!==null&&si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,si)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,d=r.attributes.uv1,p=r.attributes.normal,c=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,M=c.length;m<M;m++){const f=c[m],g=a[f.materialIndex],R=Math.max(f.start,u.start),b=Math.min(o.count,Math.min(f.start+f.count,u.start+u.count));for(let T=R,Y=b;T<Y;T+=3){const U=o.getX(T),I=o.getX(T+1),X=o.getX(T+2);s=or(this,g,t,n,h,d,p,U,I,X),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const m=Math.max(0,u.start),M=Math.min(o.count,u.start+u.count);for(let f=m,g=M;f<g;f+=3){const R=o.getX(f),b=o.getX(f+1),T=o.getX(f+2);s=or(this,a,t,n,h,d,p,R,b,T),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,M=c.length;m<M;m++){const f=c[m],g=a[f.materialIndex],R=Math.max(f.start,u.start),b=Math.min(l.count,Math.min(f.start+f.count,u.start+u.count));for(let T=R,Y=b;T<Y;T+=3){const U=T,I=T+1,X=T+2;s=or(this,g,t,n,h,d,p,U,I,X),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const m=Math.max(0,u.start),M=Math.min(l.count,u.start+u.count);for(let f=m,g=M;f<g;f+=3){const R=f,b=f+1,T=f+2;s=or(this,a,t,n,h,d,p,R,b,T),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}}function id(i,t,e,n,s,r,a,o){let l;if(t.side===Ge?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Kn,o),l===null)return null;ar.copy(o),ar.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(ar);return h<e.near||h>e.far?null:{distance:h,point:ar.clone(),object:i}}function or(i,t,e,n,s,r,a,o,l,h){i.getVertexPosition(o,nr),i.getVertexPosition(l,ir),i.getVertexPosition(h,sr);const d=id(i,t,e,n,nr,ir,sr,El);if(d){const p=new F;sn.getBarycoord(El,nr,ir,sr,p),s&&(d.uv=sn.getInterpolatedAttribute(s,o,l,h,p,new _t)),r&&(d.uv1=sn.getInterpolatedAttribute(r,o,l,h,p,new _t)),a&&(d.normal=sn.getInterpolatedAttribute(a,o,l,h,p,new F),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const c={a:o,b:l,c:h,normal:new F,materialIndex:0};sn.getNormal(nr,ir,sr,c.normal),d.face=c,d.barycoord=p}return d}class _e extends Ye{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],h=[],d=[],p=[];let c=0,u=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Me(h,3)),this.setAttribute("normal",new Me(d,3)),this.setAttribute("uv",new Me(p,2));function m(M,f,g,R,b,T,Y,U,I,X,Q){const v=T/I,E=Y/X,W=T/2,A=Y/2,z=U/2,K=I+1,_=X+1;let S=0,x=0;const C=new F;for(let L=0;L<_;L++){const N=L*E-A;for(let et=0;et<K;et++){const J=et*v-W;C[M]=J*R,C[f]=N*b,C[g]=z,h.push(C.x,C.y,C.z),C[M]=0,C[f]=0,C[g]=U>0?1:-1,d.push(C.x,C.y,C.z),p.push(et/I),p.push(1-L/X),S+=1}}for(let L=0;L<X;L++)for(let N=0;N<I;N++){const et=c+N+K*L,J=c+N+K*(L+1),O=c+(N+1)+K*(L+1),j=c+(N+1)+K*L;l.push(et,J,j),l.push(J,O,j),x+=6}o.addGroup(u,x,Q),u+=x,c+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ss(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ke(i){const t={};for(let e=0;e<i.length;e++){const n=ss(i[e]);for(const s in n)t[s]=n[s]}return t}function sd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function qc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}const rd={clone:ss,merge:ke};var ad=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,od=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends rs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ad,this.fragmentShader=od,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ss(t.uniforms),this.uniformsGroups=sd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class $c extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=In}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gn=new F,bl=new _t,wl=new _t;class je extends $c{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ds*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(bs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ds*2*Math.atan(Math.tan(bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z)}getViewSize(t,e){return this.getViewBounds(t,bl,wl),e.subVectors(wl,bl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(bs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/h,s*=a.width/l,n*=a.height/h}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Oi=-90,Bi=1;class ld extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new je(Oi,Bi,t,e);s.layers=this.layers,this.add(s);const r=new je(Oi,Bi,t,e);r.layers=this.layers,this.add(r);const a=new je(Oi,Bi,t,e);a.layers=this.layers,this.add(a);const o=new je(Oi,Bi,t,e);o.layers=this.layers,this.add(o);const l=new je(Oi,Bi,t,e);l.layers=this.layers,this.add(l);const h=new je(Oi,Bi,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const h of e)this.remove(h);if(t===In)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,h,d]=this.children,p=t.getRenderTarget(),c=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),t.render(e,d),t.setRenderTarget(p,c,u),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Zc extends Oe{constructor(t,e,n,s,r,a,o,l,h,d){t=t!==void 0?t:[],e=e!==void 0?e:ts,super(t,e,n,s,r,a,o,l,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class cd extends gi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Zc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _e(5,5,5),r=new Jn({name:"CubemapFromEquirect",uniforms:ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:$n});r.uniforms.tEquirect.value=e;const a=new Gt(s,r),o=e.minFilter;return e.minFilter===fi&&(e.minFilter=nn),new ld(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const ma=new F,hd=new F,ud=new $t;class Xn{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ma.subVectors(n,e).cross(hd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ma),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ud.getNormalMatrix(t),s=this.coplanarPoint(ma).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ri=new Os,lr=new F;class Ho{constructor(t=new Xn,e=new Xn,n=new Xn,s=new Xn,r=new Xn,a=new Xn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=In){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],h=s[4],d=s[5],p=s[6],c=s[7],u=s[8],m=s[9],M=s[10],f=s[11],g=s[12],R=s[13],b=s[14],T=s[15];if(n[0].setComponents(l-r,c-h,f-u,T-g).normalize(),n[1].setComponents(l+r,c+h,f+u,T+g).normalize(),n[2].setComponents(l+a,c+d,f+m,T+R).normalize(),n[3].setComponents(l-a,c-d,f-m,T-R).normalize(),n[4].setComponents(l-o,c-p,f-M,T-b).normalize(),e===In)n[5].setComponents(l+o,c+p,f+M,T+b).normalize();else if(e===Ur)n[5].setComponents(o,p,M,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(t){return ri.center.set(0,0,0),ri.radius=.7071067811865476,ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(lr.x=s.normal.x>0?t.max.x:t.min.x,lr.y=s.normal.y>0?t.max.y:t.min.y,lr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(lr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function dd(i){const t=new WeakMap;function e(o,l){const h=o.array,d=o.usage,p=h.byteLength,c=i.createBuffer();i.bindBuffer(l,c),i.bufferData(l,h,d),o.onUploadCallback();let u;if(h instanceof Float32Array)u=i.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)u=i.SHORT;else if(h instanceof Uint32Array)u=i.UNSIGNED_INT;else if(h instanceof Int32Array)u=i.INT;else if(h instanceof Int8Array)u=i.BYTE;else if(h instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:c,type:u,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,h){const d=l.array,p=l.updateRanges;if(i.bindBuffer(h,o),p.length===0)i.bufferSubData(h,0,d);else{p.sort((u,m)=>u.start-m.start);let c=0;for(let u=1;u<p.length;u++){const m=p[c],M=p[u];M.start<=m.start+m.count+1?m.count=Math.max(m.count,M.start+M.count-m.start):(++c,p[c]=M)}p.length=c+1;for(let u=0,m=p.length;u<m;u++){const M=p[u];i.bufferSubData(h,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=t.get(o);if(h===void 0)t.set(o,e(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,l),h.version=o.version}}return{get:s,remove:r,update:a}}class En extends Ye{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),h=o+1,d=l+1,p=t/o,c=e/l,u=[],m=[],M=[],f=[];for(let g=0;g<d;g++){const R=g*c-a;for(let b=0;b<h;b++){const T=b*p-r;m.push(T,-R,0),M.push(0,0,1),f.push(b/o),f.push(1-g/l)}}for(let g=0;g<l;g++)for(let R=0;R<o;R++){const b=R+h*g,T=R+h*(g+1),Y=R+1+h*(g+1),U=R+1+h*g;u.push(b,T,U),u.push(T,Y,U)}this.setIndex(u),this.setAttribute("position",new Me(m,3)),this.setAttribute("normal",new Me(M,3)),this.setAttribute("uv",new Me(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new En(t.width,t.height,t.widthSegments,t.heightSegments)}}var fd=`#ifdef USE_ALPHAHASH
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
}`,qt={alphahash_fragment:fd,alphahash_pars_fragment:pd,alphamap_fragment:md,alphamap_pars_fragment:gd,alphatest_fragment:_d,alphatest_pars_fragment:vd,aomap_fragment:xd,aomap_pars_fragment:Md,batching_pars_vertex:yd,batching_vertex:Sd,begin_vertex:Ed,beginnormal_vertex:bd,bsdfs:wd,iridescence_fragment:Td,bumpmap_pars_fragment:Ad,clipping_planes_fragment:Rd,clipping_planes_pars_fragment:Cd,clipping_planes_pars_vertex:Pd,clipping_planes_vertex:Ld,color_fragment:Dd,color_pars_fragment:Id,color_pars_vertex:Ud,color_vertex:Nd,common:Fd,cube_uv_reflection_fragment:Od,defaultnormal_vertex:Bd,displacementmap_pars_vertex:zd,displacementmap_vertex:kd,emissivemap_fragment:Hd,emissivemap_pars_fragment:Vd,colorspace_fragment:Gd,colorspace_pars_fragment:Wd,envmap_fragment:Xd,envmap_common_pars_fragment:Yd,envmap_pars_fragment:qd,envmap_pars_vertex:$d,envmap_physical_pars_fragment:af,envmap_vertex:Zd,fog_vertex:Kd,fog_pars_vertex:jd,fog_fragment:Jd,fog_pars_fragment:Qd,gradientmap_pars_fragment:tf,lightmap_pars_fragment:ef,lights_lambert_fragment:nf,lights_lambert_pars_fragment:sf,lights_pars_begin:rf,lights_toon_fragment:of,lights_toon_pars_fragment:lf,lights_phong_fragment:cf,lights_phong_pars_fragment:hf,lights_physical_fragment:uf,lights_physical_pars_fragment:df,lights_fragment_begin:ff,lights_fragment_maps:pf,lights_fragment_end:mf,logdepthbuf_fragment:gf,logdepthbuf_pars_fragment:_f,logdepthbuf_pars_vertex:vf,logdepthbuf_vertex:xf,map_fragment:Mf,map_pars_fragment:yf,map_particle_fragment:Sf,map_particle_pars_fragment:Ef,metalnessmap_fragment:bf,metalnessmap_pars_fragment:wf,morphinstance_vertex:Tf,morphcolor_vertex:Af,morphnormal_vertex:Rf,morphtarget_pars_vertex:Cf,morphtarget_vertex:Pf,normal_fragment_begin:Lf,normal_fragment_maps:Df,normal_pars_fragment:If,normal_pars_vertex:Uf,normal_vertex:Nf,normalmap_pars_fragment:Ff,clearcoat_normal_fragment_begin:Of,clearcoat_normal_fragment_maps:Bf,clearcoat_pars_fragment:zf,iridescence_pars_fragment:kf,opaque_fragment:Hf,packing:Vf,premultiplied_alpha_fragment:Gf,project_vertex:Wf,dithering_fragment:Xf,dithering_pars_fragment:Yf,roughnessmap_fragment:qf,roughnessmap_pars_fragment:$f,shadowmap_pars_fragment:Zf,shadowmap_pars_vertex:Kf,shadowmap_vertex:jf,shadowmask_pars_fragment:Jf,skinbase_vertex:Qf,skinning_pars_vertex:tp,skinning_vertex:ep,skinnormal_vertex:np,specularmap_fragment:ip,specularmap_pars_fragment:sp,tonemapping_fragment:rp,tonemapping_pars_fragment:ap,transmission_fragment:op,transmission_pars_fragment:lp,uv_pars_fragment:cp,uv_pars_vertex:hp,uv_vertex:up,worldpos_vertex:dp,background_vert:fp,background_frag:pp,backgroundCube_vert:mp,backgroundCube_frag:gp,cube_vert:_p,cube_frag:vp,depth_vert:xp,depth_frag:Mp,distanceRGBA_vert:yp,distanceRGBA_frag:Sp,equirect_vert:Ep,equirect_frag:bp,linedashed_vert:wp,linedashed_frag:Tp,meshbasic_vert:Ap,meshbasic_frag:Rp,meshlambert_vert:Cp,meshlambert_frag:Pp,meshmatcap_vert:Lp,meshmatcap_frag:Dp,meshnormal_vert:Ip,meshnormal_frag:Up,meshphong_vert:Np,meshphong_frag:Fp,meshphysical_vert:Op,meshphysical_frag:Bp,meshtoon_vert:zp,meshtoon_frag:kp,points_vert:Hp,points_frag:Vp,shadow_vert:Gp,shadow_frag:Wp,sprite_vert:Xp,sprite_frag:Yp},xt={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},yn={basic:{uniforms:ke([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:ke([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:ke([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:ke([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:ke([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:ke([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:ke([xt.points,xt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:ke([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:ke([xt.common,xt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:ke([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:ke([xt.sprite,xt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:ke([xt.common,xt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:ke([xt.lights,xt.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};yn.physical={uniforms:ke([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const cr={r:0,b:0,g:0},ai=new rn,qp=new oe;function $p(i,t,e,n,s,r,a){const o=new Wt(0);let l=r===!0?0:1,h,d,p=null,c=0,u=null;function m(R){let b=R.isScene===!0?R.background:null;return b&&b.isTexture&&(b=(R.backgroundBlurriness>0?e:t).get(b)),b}function M(R){let b=!1;const T=m(R);T===null?g(o,l):T&&T.isColor&&(g(T,1),b=!0);const Y=i.xr.getEnvironmentBlendMode();Y==="additive"?n.buffers.color.setClear(0,0,0,1,a):Y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(R,b){const T=m(b);T&&(T.isCubeTexture||T.mapping===Br)?(d===void 0&&(d=new Gt(new _e(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:ss(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(Y,U,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),ai.copy(b.backgroundRotation),ai.x*=-1,ai.y*=-1,ai.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),d.material.uniforms.envMap.value=T,d.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(qp.makeRotationFromEuler(ai)),d.material.toneMapped=le.getTransfer(T.colorSpace)!==me,(p!==T||c!==T.version||u!==i.toneMapping)&&(d.material.needsUpdate=!0,p=T,c=T.version,u=i.toneMapping),d.layers.enableAll(),R.unshift(d,d.geometry,d.material,0,0,null)):T&&T.isTexture&&(h===void 0&&(h=new Gt(new En(2,2),new Jn({name:"BackgroundMaterial",uniforms:ss(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=T,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.toneMapped=le.getTransfer(T.colorSpace)!==me,T.matrixAutoUpdate===!0&&T.updateMatrix(),h.material.uniforms.uvTransform.value.copy(T.matrix),(p!==T||c!==T.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,p=T,c=T.version,u=i.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null))}function g(R,b){R.getRGB(cr,qc(i)),n.buffers.color.setClear(cr.r,cr.g,cr.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(R,b=1){o.set(R),l=b,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(R){l=R,g(o,l)},render:M,addToRenderList:f}}function Zp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=c(null);let r=s,a=!1;function o(v,E,W,A,z){let K=!1;const _=p(A,W,E);r!==_&&(r=_,h(r.object)),K=u(v,A,W,z),K&&m(v,A,W,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,T(v,E,W,A),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return i.createVertexArray()}function h(v){return i.bindVertexArray(v)}function d(v){return i.deleteVertexArray(v)}function p(v,E,W){const A=W.wireframe===!0;let z=n[v.id];z===void 0&&(z={},n[v.id]=z);let K=z[E.id];K===void 0&&(K={},z[E.id]=K);let _=K[A];return _===void 0&&(_=c(l()),K[A]=_),_}function c(v){const E=[],W=[],A=[];for(let z=0;z<e;z++)E[z]=0,W[z]=0,A[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:W,attributeDivisors:A,object:v,attributes:{},index:null}}function u(v,E,W,A){const z=r.attributes,K=E.attributes;let _=0;const S=W.getAttributes();for(const x in S)if(S[x].location>=0){const L=z[x];let N=K[x];if(N===void 0&&(x==="instanceMatrix"&&v.instanceMatrix&&(N=v.instanceMatrix),x==="instanceColor"&&v.instanceColor&&(N=v.instanceColor)),L===void 0||L.attribute!==N||N&&L.data!==N.data)return!0;_++}return r.attributesNum!==_||r.index!==A}function m(v,E,W,A){const z={},K=E.attributes;let _=0;const S=W.getAttributes();for(const x in S)if(S[x].location>=0){let L=K[x];L===void 0&&(x==="instanceMatrix"&&v.instanceMatrix&&(L=v.instanceMatrix),x==="instanceColor"&&v.instanceColor&&(L=v.instanceColor));const N={};N.attribute=L,L&&L.data&&(N.data=L.data),z[x]=N,_++}r.attributes=z,r.attributesNum=_,r.index=A}function M(){const v=r.newAttributes;for(let E=0,W=v.length;E<W;E++)v[E]=0}function f(v){g(v,0)}function g(v,E){const W=r.newAttributes,A=r.enabledAttributes,z=r.attributeDivisors;W[v]=1,A[v]===0&&(i.enableVertexAttribArray(v),A[v]=1),z[v]!==E&&(i.vertexAttribDivisor(v,E),z[v]=E)}function R(){const v=r.newAttributes,E=r.enabledAttributes;for(let W=0,A=E.length;W<A;W++)E[W]!==v[W]&&(i.disableVertexAttribArray(W),E[W]=0)}function b(v,E,W,A,z,K,_){_===!0?i.vertexAttribIPointer(v,E,W,z,K):i.vertexAttribPointer(v,E,W,A,z,K)}function T(v,E,W,A){M();const z=A.attributes,K=W.getAttributes(),_=E.defaultAttributeValues;for(const S in K){const x=K[S];if(x.location>=0){let C=z[S];if(C===void 0&&(S==="instanceMatrix"&&v.instanceMatrix&&(C=v.instanceMatrix),S==="instanceColor"&&v.instanceColor&&(C=v.instanceColor)),C!==void 0){const L=C.normalized,N=C.itemSize,et=t.get(C);if(et===void 0)continue;const J=et.buffer,O=et.type,j=et.bytesPerElement,at=O===i.INT||O===i.UNSIGNED_INT||C.gpuType===Po;if(C.isInterleavedBufferAttribute){const ct=C.data,gt=ct.stride,bt=C.offset;if(ct.isInstancedInterleavedBuffer){for(let Ht=0;Ht<x.locationSize;Ht++)g(x.location+Ht,ct.meshPerAttribute);v.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Ht=0;Ht<x.locationSize;Ht++)f(x.location+Ht);i.bindBuffer(i.ARRAY_BUFFER,J);for(let Ht=0;Ht<x.locationSize;Ht++)b(x.location+Ht,N/x.locationSize,O,L,gt*j,(bt+N/x.locationSize*Ht)*j,at)}else{if(C.isInstancedBufferAttribute){for(let ct=0;ct<x.locationSize;ct++)g(x.location+ct,C.meshPerAttribute);v.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let ct=0;ct<x.locationSize;ct++)f(x.location+ct);i.bindBuffer(i.ARRAY_BUFFER,J);for(let ct=0;ct<x.locationSize;ct++)b(x.location+ct,N/x.locationSize,O,L,N*j,N/x.locationSize*ct*j,at)}}else if(_!==void 0){const L=_[S];if(L!==void 0)switch(L.length){case 2:i.vertexAttrib2fv(x.location,L);break;case 3:i.vertexAttrib3fv(x.location,L);break;case 4:i.vertexAttrib4fv(x.location,L);break;default:i.vertexAttrib1fv(x.location,L)}}}}R()}function Y(){X();for(const v in n){const E=n[v];for(const W in E){const A=E[W];for(const z in A)d(A[z].object),delete A[z];delete E[W]}delete n[v]}}function U(v){if(n[v.id]===void 0)return;const E=n[v.id];for(const W in E){const A=E[W];for(const z in A)d(A[z].object),delete A[z];delete E[W]}delete n[v.id]}function I(v){for(const E in n){const W=n[E];if(W[v.id]===void 0)continue;const A=W[v.id];for(const z in A)d(A[z].object),delete A[z];delete W[v.id]}}function X(){Q(),a=!0,r!==s&&(r=s,h(r.object))}function Q(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:X,resetDefaultState:Q,dispose:Y,releaseStatesOfGeometry:U,releaseStatesOfProgram:I,initAttributes:M,enableAttribute:f,disableUnusedAttributes:R}}function Kp(i,t,e){let n;function s(h){n=h}function r(h,d){i.drawArrays(n,h,d),e.update(d,n,1)}function a(h,d,p){p!==0&&(i.drawArraysInstanced(n,h,d,p),e.update(d,n,p))}function o(h,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,d,0,p);let u=0;for(let m=0;m<p;m++)u+=d[m];e.update(u,n,1)}function l(h,d,p,c){if(p===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let m=0;m<h.length;m++)a(h[m],d[m],c[m]);else{u.multiDrawArraysInstancedWEBGL(n,h,0,d,0,c,0,p);let m=0;for(let M=0;M<p;M++)m+=d[M];for(let M=0;M<c.length;M++)e.update(m,n,c[M])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function jp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==pn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const X=I===Fs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Un&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Sn&&!X)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const d=l(h);d!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);const p=e.logarithmicDepthBuffer===!0,c=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(c===!0){const I=t.get("EXT_clip_control");I.clipControlEXT(I.LOWER_LEFT_EXT,I.ZERO_TO_ONE_EXT)}const u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),Y=m>0,U=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:p,reverseDepthBuffer:c,maxTextures:u,maxVertexTextures:m,maxTextureSize:M,maxCubemapSize:f,maxAttributes:g,maxVertexUniforms:R,maxVaryings:b,maxFragmentUniforms:T,vertexTextures:Y,maxSamples:U}}function Jp(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Xn,o=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,c){const u=p.length!==0||c||n!==0||s;return s=c,n=p.length,u},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,c){e=d(p,c,0)},this.setState=function(p,c,u){const m=p.clippingPlanes,M=p.clipIntersection,f=p.clipShadows,g=i.get(p);if(!s||m===null||m.length===0||r&&!f)r?d(null):h();else{const R=r?0:n,b=R*4;let T=g.clippingState||null;l.value=T,T=d(m,c,b,u);for(let Y=0;Y!==b;++Y)T[Y]=e[Y];g.clippingState=T,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=R}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(p,c,u,m){const M=p!==null?p.length:0;let f=null;if(M!==0){if(f=l.value,m!==!0||f===null){const g=u+M*4,R=c.matrixWorldInverse;o.getNormalMatrix(R),(f===null||f.length<g)&&(f=new Float32Array(g));for(let b=0,T=u;b!==M;++b,T+=4)a.copy(p[b]).applyMatrix4(R,o),a.normal.toArray(f,T),f[T+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,f}}function Qp(i){let t=new WeakMap;function e(a,o){return o===Xa?a.mapping=ts:o===Ya&&(a.mapping=es),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Xa||o===Ya)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const h=new cd(l.height);return h.fromEquirectangularTexture(i,a),t.set(a,h),a.addEventListener("dispose",s),e(h.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class jc extends $c{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const $i=4,Tl=[.125,.215,.35,.446,.526,.582],hi=20,ga=new jc,Al=new Wt;let _a=null,va=0,xa=0,Ma=!1;const li=(1+Math.sqrt(5))/2,zi=1/li,Rl=[new F(-li,zi,0),new F(li,zi,0),new F(-zi,0,li),new F(zi,0,li),new F(0,li,-zi),new F(0,li,zi),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class So{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){_a=this._renderer.getRenderTarget(),va=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),Ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ll(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(_a,va,xa),this._renderer.xr.enabled=Ma,t.scissorTest=!1,hr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ts||t.mapping===es?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_a=this._renderer.getRenderTarget(),va=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),Ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Fs,format:pn,colorSpace:Qn,depthBuffer:!1},s=Cl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tm(r)),this._blurMaterial=em(r,t,e)}return s}_compileMaterial(t){const e=new Gt(this._lodPlanes[0],t);this._renderer.compile(e,ga)}_sceneToCubeUV(t,e,n,s){const o=new je(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,c=d.toneMapping;d.getClearColor(Al),d.toneMapping=Zn,d.autoClear=!1;const u=new mn({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),m=new Gt(new _e,u);let M=!1;const f=t.background;f?f.isColor&&(u.color.copy(f),t.background=null,M=!0):(u.color.copy(Al),M=!0);for(let g=0;g<6;g++){const R=g%3;R===0?(o.up.set(0,l[g],0),o.lookAt(h[g],0,0)):R===1?(o.up.set(0,0,l[g]),o.lookAt(0,h[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,h[g]));const b=this._cubeSize;hr(s,R*b,g>2?b:0,b,b),d.setRenderTarget(s),M&&d.render(m,o),d.render(t,o)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=c,d.autoClear=p,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ts||t.mapping===es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ll()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Gt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;hr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ga)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Rl[(s-r-1)%Rl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new Gt(this._lodPlanes[s],h),c=h.uniforms,u=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*hi-1),M=r/m,f=isFinite(r)?1+Math.floor(d*M):hi;f>hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${hi}`);const g=[];let R=0;for(let I=0;I<hi;++I){const X=I/M,Q=Math.exp(-X*X/2);g.push(Q),I===0?R+=Q:I<f&&(R+=2*Q)}for(let I=0;I<g.length;I++)g[I]=g[I]/R;c.envMap.value=t.texture,c.samples.value=f,c.weights.value=g,c.latitudinal.value=a==="latitudinal",o&&(c.poleAxis.value=o);const{_lodMax:b}=this;c.dTheta.value=m,c.mipInt.value=b-n;const T=this._sizeLods[s],Y=3*T*(s>b-$i?s-b+$i:0),U=4*(this._cubeSize-T);hr(e,Y,U,3*T,2*T),l.setRenderTarget(e),l.render(p,ga)}}function tm(i){const t=[],e=[],n=[];let s=i;const r=i-$i+1+Tl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-$i?l=Tl[a-i+$i-1]:a===0&&(l=0),n.push(l);const h=1/(o-2),d=-h,p=1+h,c=[d,d,p,d,p,p,d,d,p,p,d,p],u=6,m=6,M=3,f=2,g=1,R=new Float32Array(M*m*u),b=new Float32Array(f*m*u),T=new Float32Array(g*m*u);for(let U=0;U<u;U++){const I=U%3*2/3-1,X=U>2?0:-1,Q=[I,X,0,I+2/3,X,0,I+2/3,X+1,0,I,X,0,I+2/3,X+1,0,I,X+1,0];R.set(Q,M*m*U),b.set(c,f*m*U);const v=[U,U,U,U,U,U];T.set(v,g*m*U)}const Y=new Ye;Y.setAttribute("position",new Je(R,M)),Y.setAttribute("uv",new Je(b,f)),Y.setAttribute("faceIndex",new Je(T,g)),t.push(Y),s>$i&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Cl(i,t,e){const n=new gi(i,t,e);return n.texture.mapping=Br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function em(i,t,e){const n=new Float32Array(hi),s=new F(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Vo(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Pl(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vo(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Ll(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Vo(){return`

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
	`}function nm(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,h=l===Xa||l===Ya,d=l===ts||l===es;if(h||d){let p=t.get(o);const c=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==c)return e===null&&(e=new So(i)),p=h?e.fromEquirectangular(o,p):e.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,t.set(o,p),p.texture;if(p!==void 0)return p.texture;{const u=o.image;return h&&u&&u.height>0||d&&u&&s(u)?(e===null&&(e=new So(i)),p=h?e.fromEquirectangular(o):e.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,t.set(o,p),o.addEventListener("dispose",r),p.texture):null}}}return o}function s(o){let l=0;const h=6;for(let d=0;d<h;d++)o[d]!==void 0&&l++;return l===h}function r(o){const l=o.target;l.removeEventListener("dispose",r);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function im(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Rr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function sm(i,t,e,n){const s={},r=new WeakMap;function a(p){const c=p.target;c.index!==null&&t.remove(c.index);for(const m in c.attributes)t.remove(c.attributes[m]);for(const m in c.morphAttributes){const M=c.morphAttributes[m];for(let f=0,g=M.length;f<g;f++)t.remove(M[f])}c.removeEventListener("dispose",a),delete s[c.id];const u=r.get(c);u&&(t.remove(u),r.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,e.memory.geometries--}function o(p,c){return s[c.id]===!0||(c.addEventListener("dispose",a),s[c.id]=!0,e.memory.geometries++),c}function l(p){const c=p.attributes;for(const m in c)t.update(c[m],i.ARRAY_BUFFER);const u=p.morphAttributes;for(const m in u){const M=u[m];for(let f=0,g=M.length;f<g;f++)t.update(M[f],i.ARRAY_BUFFER)}}function h(p){const c=[],u=p.index,m=p.attributes.position;let M=0;if(u!==null){const R=u.array;M=u.version;for(let b=0,T=R.length;b<T;b+=3){const Y=R[b+0],U=R[b+1],I=R[b+2];c.push(Y,U,U,I,I,Y)}}else if(m!==void 0){const R=m.array;M=m.version;for(let b=0,T=R.length/3-1;b<T;b+=3){const Y=b+0,U=b+1,I=b+2;c.push(Y,U,U,I,I,Y)}}else return;const f=new(Hc(c)?Yc:Xc)(c,1);f.version=M;const g=r.get(p);g&&t.remove(g),r.set(p,f)}function d(p){const c=r.get(p);if(c){const u=p.index;u!==null&&c.version<u.version&&h(p)}else h(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:d}}function rm(i,t,e){let n;function s(c){n=c}let r,a;function o(c){r=c.type,a=c.bytesPerElement}function l(c,u){i.drawElements(n,u,r,c*a),e.update(u,n,1)}function h(c,u,m){m!==0&&(i.drawElementsInstanced(n,u,r,c*a,m),e.update(u,n,m))}function d(c,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,c,0,m);let f=0;for(let g=0;g<m;g++)f+=u[g];e.update(f,n,1)}function p(c,u,m,M){if(m===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)h(c[g]/a,u[g],M[g]);else{f.multiDrawElementsInstancedWEBGL(n,u,0,r,c,0,M,0,m);let g=0;for(let R=0;R<m;R++)g+=u[R];for(let R=0;R<M.length;R++)e.update(g,n,M[R])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function am(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function om(i,t,e){const n=new WeakMap,s=new fe;function r(a,o,l){const h=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0;let c=n.get(o);if(c===void 0||c.count!==p){let Q=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",Q)};c!==void 0&&c.texture.dispose();const u=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let b=0;u===!0&&(b=1),m===!0&&(b=2),M===!0&&(b=3);let T=o.attributes.position.count*b,Y=1;T>t.maxTextureSize&&(Y=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const U=new Float32Array(T*Y*4*p),I=new Gc(U,T,Y,p);I.type=Sn,I.needsUpdate=!0;const X=b*4;for(let v=0;v<p;v++){const E=f[v],W=g[v],A=R[v],z=T*Y*4*v;for(let K=0;K<E.count;K++){const _=K*X;u===!0&&(s.fromBufferAttribute(E,K),U[z+_+0]=s.x,U[z+_+1]=s.y,U[z+_+2]=s.z,U[z+_+3]=0),m===!0&&(s.fromBufferAttribute(W,K),U[z+_+4]=s.x,U[z+_+5]=s.y,U[z+_+6]=s.z,U[z+_+7]=0),M===!0&&(s.fromBufferAttribute(A,K),U[z+_+8]=s.x,U[z+_+9]=s.y,U[z+_+10]=s.z,U[z+_+11]=A.itemSize===4?s.w:1)}}c={count:p,texture:I,size:new _t(T,Y)},n.set(o,c),o.addEventListener("dispose",Q)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let u=0;for(let M=0;M<h.length;M++)u+=h[M];const m=o.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",h)}l.getUniforms().setValue(i,"morphTargetsTexture",c.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",c.size)}return{update:r}}function lm(i,t,e,n){let s=new WeakMap;function r(l){const h=n.render.frame,d=l.geometry,p=t.get(l,d);if(s.get(p)!==h&&(t.update(p),s.set(p,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const c=l.skeleton;s.get(c)!==h&&(c.update(),s.set(c,h))}return p}function a(){s=new WeakMap}function o(l){const h=l.target;h.removeEventListener("dispose",o),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}class Jc extends Oe{constructor(t,e,n,s,r,a,o,l,h,d=ji){if(d!==ji&&d!==is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===ji&&(n=mi),n===void 0&&d===is&&(n=ns),super(null,s,r,a,o,l,d,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Xe,this.minFilter=l!==void 0?l:Xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Qc=new Oe,Dl=new Jc(1,1),th=new Gc,eh=new qu,nh=new Zc,Il=[],Ul=[],Nl=new Float32Array(16),Fl=new Float32Array(9),Ol=new Float32Array(4);function as(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Il[s];if(r===void 0&&(r=new Float32Array(s),Il[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ee(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function kr(i,t){let e=Ul[t];e===void 0&&(e=new Int32Array(t),Ul[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function cm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function hm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2fv(this.addr,t),be(e,t)}}function um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;i.uniform3fv(this.addr,t),be(e,t)}}function dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4fv(this.addr,t),be(e,t)}}function fm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Ee(e,n))return;Ol.set(n),i.uniformMatrix2fv(this.addr,!1,Ol),be(e,n)}}function pm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Ee(e,n))return;Fl.set(n),i.uniformMatrix3fv(this.addr,!1,Fl),be(e,n)}}function mm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Ee(e,n))return;Nl.set(n),i.uniformMatrix4fv(this.addr,!1,Nl),be(e,n)}}function gm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function _m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2iv(this.addr,t),be(e,t)}}function vm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3iv(this.addr,t),be(e,t)}}function xm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4iv(this.addr,t),be(e,t)}}function Mm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ym(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2uiv(this.addr,t),be(e,t)}}function Sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3uiv(this.addr,t),be(e,t)}}function Em(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4uiv(this.addr,t),be(e,t)}}function bm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Dl.compareFunction=kc,r=Dl):r=Qc,e.setTexture2D(t||r,s)}function wm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||eh,s)}function Tm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||nh,s)}function Am(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||th,s)}function Rm(i){switch(i){case 5126:return cm;case 35664:return hm;case 35665:return um;case 35666:return dm;case 35674:return fm;case 35675:return pm;case 35676:return mm;case 5124:case 35670:return gm;case 35667:case 35671:return _m;case 35668:case 35672:return vm;case 35669:case 35673:return xm;case 5125:return Mm;case 36294:return ym;case 36295:return Sm;case 36296:return Em;case 35678:case 36198:case 36298:case 36306:case 35682:return bm;case 35679:case 36299:case 36307:return wm;case 35680:case 36300:case 36308:case 36293:return Tm;case 36289:case 36303:case 36311:case 36292:return Am}}function Cm(i,t){i.uniform1fv(this.addr,t)}function Pm(i,t){const e=as(t,this.size,2);i.uniform2fv(this.addr,e)}function Lm(i,t){const e=as(t,this.size,3);i.uniform3fv(this.addr,e)}function Dm(i,t){const e=as(t,this.size,4);i.uniform4fv(this.addr,e)}function Im(i,t){const e=as(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Um(i,t){const e=as(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Nm(i,t){const e=as(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Fm(i,t){i.uniform1iv(this.addr,t)}function Om(i,t){i.uniform2iv(this.addr,t)}function Bm(i,t){i.uniform3iv(this.addr,t)}function zm(i,t){i.uniform4iv(this.addr,t)}function km(i,t){i.uniform1uiv(this.addr,t)}function Hm(i,t){i.uniform2uiv(this.addr,t)}function Vm(i,t){i.uniform3uiv(this.addr,t)}function Gm(i,t){i.uniform4uiv(this.addr,t)}function Wm(i,t,e){const n=this.cache,s=t.length,r=kr(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Qc,r[a])}function Xm(i,t,e){const n=this.cache,s=t.length,r=kr(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||eh,r[a])}function Ym(i,t,e){const n=this.cache,s=t.length,r=kr(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||nh,r[a])}function qm(i,t,e){const n=this.cache,s=t.length,r=kr(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||th,r[a])}function $m(i){switch(i){case 5126:return Cm;case 35664:return Pm;case 35665:return Lm;case 35666:return Dm;case 35674:return Im;case 35675:return Um;case 35676:return Nm;case 5124:case 35670:return Fm;case 35667:case 35671:return Om;case 35668:case 35672:return Bm;case 35669:case 35673:return zm;case 5125:return km;case 36294:return Hm;case 36295:return Vm;case 36296:return Gm;case 35678:case 36198:case 36298:case 36306:case 35682:return Wm;case 35679:case 36299:case 36307:return Xm;case 35680:case 36300:case 36308:case 36293:return Ym;case 36289:case 36303:case 36311:case 36292:return qm}}class Zm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Rm(e.type)}}class Km{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$m(e.type)}}class jm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const ya=/(\w+)(\])?(\[|\.)?/g;function Bl(i,t){i.seq.push(t),i.map[t.id]=t}function Jm(i,t,e){const n=i.name,s=n.length;for(ya.lastIndex=0;;){const r=ya.exec(n),a=ya.lastIndex;let o=r[1];const l=r[2]==="]",h=r[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===s){Bl(e,h===void 0?new Zm(o,i,t):new Km(o,i,t));break}else{let p=e.map[o];p===void 0&&(p=new jm(o),Bl(e,p)),e=p}}}class Cr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Jm(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function zl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Qm=37297;let t0=0;function e0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function n0(i){const t=le.getPrimaries(le.workingColorSpace),e=le.getPrimaries(i);let n;switch(t===e?n="":t===Ir&&e===Dr?n="LinearDisplayP3ToLinearSRGB":t===Dr&&e===Ir&&(n="LinearSRGBToLinearDisplayP3"),i){case Qn:case zr:return[n,"LinearTransferOETF"];case Fe:case Oo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function kl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+e0(i.getShaderSource(t),a)}else return s}function i0(i,t){const e=n0(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function s0(i,t){let e;switch(t){case ru:e="Linear";break;case au:e="Reinhard";break;case ou:e="Cineon";break;case Rc:e="ACESFilmic";break;case cu:e="AgX";break;case hu:e="Neutral";break;case lu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ur=new F;function r0(){le.getLuminanceCoefficients(ur);const i=ur.x.toFixed(4),t=ur.y.toFixed(4),e=ur.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function a0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Es).join(`
`)}function o0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function l0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Es(i){return i!==""}function Hl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const c0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eo(i){return i.replace(c0,u0)}const h0=new Map;function u0(i,t){let e=qt[t];if(e===void 0){const n=h0.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Eo(e)}const d0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gl(i){return i.replace(d0,f0)}function f0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function p0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===wc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Tc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Dn&&(t="SHADOWMAP_TYPE_VSM"),t}function m0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ts:case es:t="ENVMAP_TYPE_CUBE";break;case Br:t="ENVMAP_TYPE_CUBE_UV";break}return t}function g0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case es:t="ENVMAP_MODE_REFRACTION";break}return t}function _0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ac:t="ENVMAP_BLENDING_MULTIPLY";break;case iu:t="ENVMAP_BLENDING_MIX";break;case su:t="ENVMAP_BLENDING_ADD";break}return t}function v0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function x0(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=p0(e),h=m0(e),d=g0(e),p=_0(e),c=v0(e),u=a0(e),m=o0(r),M=s.createProgram();let f,g,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Es).join(`
`),f.length>0&&(f+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Es).join(`
`),g.length>0&&(g+=`
`)):(f=[Wl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),g=[Wl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMap?"#define "+p:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zn?"#define TONE_MAPPING":"",e.toneMapping!==Zn?qt.tonemapping_pars_fragment:"",e.toneMapping!==Zn?s0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,i0("linearToOutputTexel",e.outputColorSpace),r0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Es).join(`
`)),a=Eo(a),a=Hl(a,e),a=Vl(a,e),o=Eo(o),o=Hl(o,e),o=Vl(o,e),a=Gl(a),o=Gl(o),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,f=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,g=["#define varying in",e.glslVersion===ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const b=R+f+a,T=R+g+o,Y=zl(s,s.VERTEX_SHADER,b),U=zl(s,s.FRAGMENT_SHADER,T);s.attachShader(M,Y),s.attachShader(M,U),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function I(E){if(i.debug.checkShaderErrors){const W=s.getProgramInfoLog(M).trim(),A=s.getShaderInfoLog(Y).trim(),z=s.getShaderInfoLog(U).trim();let K=!0,_=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,Y,U);else{const S=kl(s,Y,"vertex"),x=kl(s,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+W+`
`+S+`
`+x)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(A===""||z==="")&&(_=!1);_&&(E.diagnostics={runnable:K,programLog:W,vertexShader:{log:A,prefix:f},fragmentShader:{log:z,prefix:g}})}s.deleteShader(Y),s.deleteShader(U),X=new Cr(s,M),Q=l0(s,M)}let X;this.getUniforms=function(){return X===void 0&&I(this),X};let Q;this.getAttributes=function(){return Q===void 0&&I(this),Q};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(M,Qm)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=t0++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=Y,this.fragmentShader=U,this}let M0=0;class y0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new S0(t),e.set(t,n)),n}}class S0{constructor(t){this.id=M0++,this.code=t,this.usedTimes=0}}function E0(i,t,e,n,s,r,a){const o=new ko,l=new y0,h=new Set,d=[],p=s.logarithmicDepthBuffer,c=s.reverseDepthBuffer,u=s.vertexTextures;let m=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v){return h.add(v),v===0?"uv":`uv${v}`}function g(v,E,W,A,z){const K=A.fog,_=z.geometry,S=v.isMeshStandardMaterial?A.environment:null,x=(v.isMeshStandardMaterial?e:t).get(v.envMap||S),C=x&&x.mapping===Br?x.image.height:null,L=M[v.type];v.precision!==null&&(m=s.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const N=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,et=N!==void 0?N.length:0;let J=0;_.morphAttributes.position!==void 0&&(J=1),_.morphAttributes.normal!==void 0&&(J=2),_.morphAttributes.color!==void 0&&(J=3);let O,j,at,ct;if(L){const we=yn[L];O=we.vertexShader,j=we.fragmentShader}else O=v.vertexShader,j=v.fragmentShader,l.update(v),at=l.getVertexShaderID(v),ct=l.getFragmentShaderID(v);const gt=i.getRenderTarget(),bt=z.isInstancedMesh===!0,Ht=z.isBatchedMesh===!0,zt=!!v.map,Zt=!!v.matcap,B=!!x,ce=!!v.aoMap,Ft=!!v.lightMap,jt=!!v.bumpMap,Dt=!!v.normalMap,ie=!!v.displacementMap,Ot=!!v.emissiveMap,P=!!v.metalnessMap,y=!!v.roughnessMap,q=v.anisotropy>0,st=v.clearcoat>0,ut=v.dispersion>0,ot=v.iridescence>0,At=v.sheen>0,vt=v.transmission>0,wt=q&&!!v.anisotropyMap,Jt=st&&!!v.clearcoatMap,pt=st&&!!v.clearcoatNormalMap,Rt=st&&!!v.clearcoatRoughnessMap,Ut=ot&&!!v.iridescenceMap,Nt=ot&&!!v.iridescenceThicknessMap,Mt=At&&!!v.sheenColorMap,Qt=At&&!!v.sheenRoughnessMap,Bt=!!v.specularMap,Xt=!!v.specularColorMap,k=!!v.specularIntensityMap,St=vt&&!!v.transmissionMap,it=vt&&!!v.thicknessMap,ht=!!v.gradientMap,Et=!!v.alphaMap,Tt=v.alphaTest>0,te=!!v.alphaHash,he=!!v.extensions;let Le=Zn;v.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(Le=i.toneMapping);const se={shaderID:L,shaderType:v.type,shaderName:v.name,vertexShader:O,fragmentShader:j,defines:v.defines,customVertexShaderID:at,customFragmentShaderID:ct,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,batching:Ht,batchingColor:Ht&&z._colorsTexture!==null,instancing:bt,instancingColor:bt&&z.instanceColor!==null,instancingMorph:bt&&z.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:gt===null?i.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:Qn,alphaToCoverage:!!v.alphaToCoverage,map:zt,matcap:Zt,envMap:B,envMapMode:B&&x.mapping,envMapCubeUVHeight:C,aoMap:ce,lightMap:Ft,bumpMap:jt,normalMap:Dt,displacementMap:u&&ie,emissiveMap:Ot,normalMapObjectSpace:Dt&&v.normalMapType===pu,normalMapTangentSpace:Dt&&v.normalMapType===zc,metalnessMap:P,roughnessMap:y,anisotropy:q,anisotropyMap:wt,clearcoat:st,clearcoatMap:Jt,clearcoatNormalMap:pt,clearcoatRoughnessMap:Rt,dispersion:ut,iridescence:ot,iridescenceMap:Ut,iridescenceThicknessMap:Nt,sheen:At,sheenColorMap:Mt,sheenRoughnessMap:Qt,specularMap:Bt,specularColorMap:Xt,specularIntensityMap:k,transmission:vt,transmissionMap:St,thicknessMap:it,gradientMap:ht,opaque:v.transparent===!1&&v.blending===pi&&v.alphaToCoverage===!1,alphaMap:Et,alphaTest:Tt,alphaHash:te,combine:v.combine,mapUv:zt&&f(v.map.channel),aoMapUv:ce&&f(v.aoMap.channel),lightMapUv:Ft&&f(v.lightMap.channel),bumpMapUv:jt&&f(v.bumpMap.channel),normalMapUv:Dt&&f(v.normalMap.channel),displacementMapUv:ie&&f(v.displacementMap.channel),emissiveMapUv:Ot&&f(v.emissiveMap.channel),metalnessMapUv:P&&f(v.metalnessMap.channel),roughnessMapUv:y&&f(v.roughnessMap.channel),anisotropyMapUv:wt&&f(v.anisotropyMap.channel),clearcoatMapUv:Jt&&f(v.clearcoatMap.channel),clearcoatNormalMapUv:pt&&f(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&f(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ut&&f(v.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&f(v.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&f(v.sheenColorMap.channel),sheenRoughnessMapUv:Qt&&f(v.sheenRoughnessMap.channel),specularMapUv:Bt&&f(v.specularMap.channel),specularColorMapUv:Xt&&f(v.specularColorMap.channel),specularIntensityMapUv:k&&f(v.specularIntensityMap.channel),transmissionMapUv:St&&f(v.transmissionMap.channel),thicknessMapUv:it&&f(v.thicknessMap.channel),alphaMapUv:Et&&f(v.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(Dt||q),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!_.attributes.uv&&(zt||Et),fog:!!K,useFog:v.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:c,skinning:z.isSkinnedMesh===!0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:J,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&W.length>0,shadowMapType:i.shadowMap.type,toneMapping:Le,decodeVideoTexture:zt&&v.map.isVideoTexture===!0&&le.getTransfer(v.map.colorSpace)===me,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===dn,flipSided:v.side===Ge,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:he&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&v.extensions.multiDraw===!0||Ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return se.vertexUv1s=h.has(1),se.vertexUv2s=h.has(2),se.vertexUv3s=h.has(3),h.clear(),se}function R(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const W in v.defines)E.push(W),E.push(v.defines[W]);return v.isRawShaderMaterial===!1&&(b(E,v),T(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function b(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function T(v,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reverseDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.alphaToCoverage&&o.enable(20),v.push(o.mask)}function Y(v){const E=M[v.type];let W;if(E){const A=yn[E];W=rd.clone(A.uniforms)}else W=v.uniforms;return W}function U(v,E){let W;for(let A=0,z=d.length;A<z;A++){const K=d[A];if(K.cacheKey===E){W=K,++W.usedTimes;break}}return W===void 0&&(W=new x0(i,E,v,r),d.push(W)),W}function I(v){if(--v.usedTimes===0){const E=d.indexOf(v);d[E]=d[d.length-1],d.pop(),v.destroy()}}function X(v){l.remove(v)}function Q(){l.dispose()}return{getParameters:g,getProgramCacheKey:R,getUniforms:Y,acquireProgram:U,releaseProgram:I,releaseShaderCache:X,programs:d,dispose:Q}}function b0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function w0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Xl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Yl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(p,c,u,m,M,f){let g=i[t];return g===void 0?(g={id:p.id,object:p,geometry:c,material:u,groupOrder:m,renderOrder:p.renderOrder,z:M,group:f},i[t]=g):(g.id=p.id,g.object=p,g.geometry=c,g.material=u,g.groupOrder=m,g.renderOrder=p.renderOrder,g.z=M,g.group=f),t++,g}function o(p,c,u,m,M,f){const g=a(p,c,u,m,M,f);u.transmission>0?n.push(g):u.transparent===!0?s.push(g):e.push(g)}function l(p,c,u,m,M,f){const g=a(p,c,u,m,M,f);u.transmission>0?n.unshift(g):u.transparent===!0?s.unshift(g):e.unshift(g)}function h(p,c){e.length>1&&e.sort(p||w0),n.length>1&&n.sort(c||Xl),s.length>1&&s.sort(c||Xl)}function d(){for(let p=t,c=i.length;p<c;p++){const u=i[p];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:d,sort:h}}function T0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Yl,i.set(n,[a])):s>=r.length?(a=new Yl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function A0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Wt};break;case"SpotLight":e={position:new F,direction:new F,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function R0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let C0=0;function P0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function L0(i){const t=new A0,e=R0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new F);const s=new F,r=new oe,a=new oe;function o(h){let d=0,p=0,c=0;for(let Q=0;Q<9;Q++)n.probe[Q].set(0,0,0);let u=0,m=0,M=0,f=0,g=0,R=0,b=0,T=0,Y=0,U=0,I=0;h.sort(P0);for(let Q=0,v=h.length;Q<v;Q++){const E=h[Q],W=E.color,A=E.intensity,z=E.distance,K=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)d+=W.r*A,p+=W.g*A,c+=W.b*A;else if(E.isLightProbe){for(let _=0;_<9;_++)n.probe[_].addScaledVector(E.sh.coefficients[_],A);I++}else if(E.isDirectionalLight){const _=t.get(E);if(_.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const S=E.shadow,x=e.get(E);x.shadowIntensity=S.intensity,x.shadowBias=S.bias,x.shadowNormalBias=S.normalBias,x.shadowRadius=S.radius,x.shadowMapSize=S.mapSize,n.directionalShadow[u]=x,n.directionalShadowMap[u]=K,n.directionalShadowMatrix[u]=E.shadow.matrix,R++}n.directional[u]=_,u++}else if(E.isSpotLight){const _=t.get(E);_.position.setFromMatrixPosition(E.matrixWorld),_.color.copy(W).multiplyScalar(A),_.distance=z,_.coneCos=Math.cos(E.angle),_.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),_.decay=E.decay,n.spot[M]=_;const S=E.shadow;if(E.map&&(n.spotLightMap[Y]=E.map,Y++,S.updateMatrices(E),E.castShadow&&U++),n.spotLightMatrix[M]=S.matrix,E.castShadow){const x=e.get(E);x.shadowIntensity=S.intensity,x.shadowBias=S.bias,x.shadowNormalBias=S.normalBias,x.shadowRadius=S.radius,x.shadowMapSize=S.mapSize,n.spotShadow[M]=x,n.spotShadowMap[M]=K,T++}M++}else if(E.isRectAreaLight){const _=t.get(E);_.color.copy(W).multiplyScalar(A),_.halfWidth.set(E.width*.5,0,0),_.halfHeight.set(0,E.height*.5,0),n.rectArea[f]=_,f++}else if(E.isPointLight){const _=t.get(E);if(_.color.copy(E.color).multiplyScalar(E.intensity),_.distance=E.distance,_.decay=E.decay,E.castShadow){const S=E.shadow,x=e.get(E);x.shadowIntensity=S.intensity,x.shadowBias=S.bias,x.shadowNormalBias=S.normalBias,x.shadowRadius=S.radius,x.shadowMapSize=S.mapSize,x.shadowCameraNear=S.camera.near,x.shadowCameraFar=S.camera.far,n.pointShadow[m]=x,n.pointShadowMap[m]=K,n.pointShadowMatrix[m]=E.shadow.matrix,b++}n.point[m]=_,m++}else if(E.isHemisphereLight){const _=t.get(E);_.skyColor.copy(E.color).multiplyScalar(A),_.groundColor.copy(E.groundColor).multiplyScalar(A),n.hemi[g]=_,g++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=c;const X=n.hash;(X.directionalLength!==u||X.pointLength!==m||X.spotLength!==M||X.rectAreaLength!==f||X.hemiLength!==g||X.numDirectionalShadows!==R||X.numPointShadows!==b||X.numSpotShadows!==T||X.numSpotMaps!==Y||X.numLightProbes!==I)&&(n.directional.length=u,n.spot.length=M,n.rectArea.length=f,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=T+Y-U,n.spotLightMap.length=Y,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=I,X.directionalLength=u,X.pointLength=m,X.spotLength=M,X.rectAreaLength=f,X.hemiLength=g,X.numDirectionalShadows=R,X.numPointShadows=b,X.numSpotShadows=T,X.numSpotMaps=Y,X.numLightProbes=I,n.version=C0++)}function l(h,d){let p=0,c=0,u=0,m=0,M=0;const f=d.matrixWorldInverse;for(let g=0,R=h.length;g<R;g++){const b=h[g];if(b.isDirectionalLight){const T=n.directional[p];T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),p++}else if(b.isSpotLight){const T=n.spot[u];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),u++}else if(b.isRectAreaLight){const T=n.rectArea[m];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(f),a.identity(),r.copy(b.matrixWorld),r.premultiply(f),a.extractRotation(r),T.halfWidth.set(b.width*.5,0,0),T.halfHeight.set(0,b.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),m++}else if(b.isPointLight){const T=n.point[c];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(f),c++}else if(b.isHemisphereLight){const T=n.hemi[M];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(f),M++}}}return{setup:o,setupView:l,state:n}}function ql(i){const t=new L0(i),e=[],n=[];function s(d){h.camera=d,e.length=0,n.length=0}function r(d){e.push(d)}function a(d){n.push(d)}function o(){t.setup(e)}function l(d){t.setupView(e,d)}const h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function D0(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new ql(i),t.set(s,[o])):r>=a.length?(o=new ql(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class I0 extends rs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=du,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class U0 extends rs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const N0=`void main() {
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
}`;function O0(i,t,e){let n=new Ho;const s=new _t,r=new _t,a=new fe,o=new I0({depthPacking:fu}),l=new U0,h={},d=e.maxTextureSize,p={[Kn]:Ge,[Ge]:Kn,[dn]:dn},c=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:N0,fragmentShader:F0}),u=c.clone();u.defines.HORIZONTAL_PASS=1;const m=new Ye;m.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Gt(m,c),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wc;let g=this.type;this.render=function(U,I,X){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||U.length===0)return;const Q=i.getRenderTarget(),v=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),W=i.state;W.setBlending($n),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const A=g!==Dn&&this.type===Dn,z=g===Dn&&this.type!==Dn;for(let K=0,_=U.length;K<_;K++){const S=U[K],x=S.shadow;if(x===void 0){console.warn("THREE.WebGLShadowMap:",S,"has no shadow.");continue}if(x.autoUpdate===!1&&x.needsUpdate===!1)continue;s.copy(x.mapSize);const C=x.getFrameExtents();if(s.multiply(C),r.copy(x.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/C.x),s.x=r.x*C.x,x.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/C.y),s.y=r.y*C.y,x.mapSize.y=r.y)),x.map===null||A===!0||z===!0){const N=this.type!==Dn?{minFilter:Xe,magFilter:Xe}:{};x.map!==null&&x.map.dispose(),x.map=new gi(s.x,s.y,N),x.map.texture.name=S.name+".shadowMap",x.camera.updateProjectionMatrix()}i.setRenderTarget(x.map),i.clear();const L=x.getViewportCount();for(let N=0;N<L;N++){const et=x.getViewport(N);a.set(r.x*et.x,r.y*et.y,r.x*et.z,r.y*et.w),W.viewport(a),x.updateMatrices(S,N),n=x.getFrustum(),T(I,X,x.camera,S,this.type)}x.isPointLightShadow!==!0&&this.type===Dn&&R(x,X),x.needsUpdate=!1}g=this.type,f.needsUpdate=!1,i.setRenderTarget(Q,v,E)};function R(U,I){const X=t.update(M);c.defines.VSM_SAMPLES!==U.blurSamples&&(c.defines.VSM_SAMPLES=U.blurSamples,u.defines.VSM_SAMPLES=U.blurSamples,c.needsUpdate=!0,u.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new gi(s.x,s.y)),c.uniforms.shadow_pass.value=U.map.texture,c.uniforms.resolution.value=U.mapSize,c.uniforms.radius.value=U.radius,i.setRenderTarget(U.mapPass),i.clear(),i.renderBufferDirect(I,null,X,c,M,null),u.uniforms.shadow_pass.value=U.mapPass.texture,u.uniforms.resolution.value=U.mapSize,u.uniforms.radius.value=U.radius,i.setRenderTarget(U.map),i.clear(),i.renderBufferDirect(I,null,X,u,M,null)}function b(U,I,X,Q){let v=null;const E=X.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(E!==void 0)v=E;else if(v=X.isPointLight===!0?l:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const W=v.uuid,A=I.uuid;let z=h[W];z===void 0&&(z={},h[W]=z);let K=z[A];K===void 0&&(K=v.clone(),z[A]=K,I.addEventListener("dispose",Y)),v=K}if(v.visible=I.visible,v.wireframe=I.wireframe,Q===Dn?v.side=I.shadowSide!==null?I.shadowSide:I.side:v.side=I.shadowSide!==null?I.shadowSide:p[I.side],v.alphaMap=I.alphaMap,v.alphaTest=I.alphaTest,v.map=I.map,v.clipShadows=I.clipShadows,v.clippingPlanes=I.clippingPlanes,v.clipIntersection=I.clipIntersection,v.displacementMap=I.displacementMap,v.displacementScale=I.displacementScale,v.displacementBias=I.displacementBias,v.wireframeLinewidth=I.wireframeLinewidth,v.linewidth=I.linewidth,X.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const W=i.properties.get(v);W.light=X}return v}function T(U,I,X,Q,v){if(U.visible===!1)return;if(U.layers.test(I.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&v===Dn)&&(!U.frustumCulled||n.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,U.matrixWorld);const A=t.update(U),z=U.material;if(Array.isArray(z)){const K=A.groups;for(let _=0,S=K.length;_<S;_++){const x=K[_],C=z[x.materialIndex];if(C&&C.visible){const L=b(U,C,Q,v);U.onBeforeShadow(i,U,I,X,A,L,x),i.renderBufferDirect(X,null,A,L,U,x),U.onAfterShadow(i,U,I,X,A,L,x)}}}else if(z.visible){const K=b(U,z,Q,v);U.onBeforeShadow(i,U,I,X,A,K,null),i.renderBufferDirect(X,null,A,K,U,null),U.onAfterShadow(i,U,I,X,A,K,null)}}const W=U.children;for(let A=0,z=W.length;A<z;A++)T(W[A],I,X,Q,v)}function Y(U){U.target.removeEventListener("dispose",Y);for(const X in h){const Q=h[X],v=U.target.uuid;v in Q&&(Q[v].dispose(),delete Q[v])}}}const B0={[Ba]:za,[ka]:Ga,[Ha]:Wa,[Qi]:Va,[za]:Ba,[Ga]:ka,[Wa]:Ha,[Va]:Qi};function z0(i){function t(){let k=!1;const St=new fe;let it=null;const ht=new fe(0,0,0,0);return{setMask:function(Et){it!==Et&&!k&&(i.colorMask(Et,Et,Et,Et),it=Et)},setLocked:function(Et){k=Et},setClear:function(Et,Tt,te,he,Le){Le===!0&&(Et*=he,Tt*=he,te*=he),St.set(Et,Tt,te,he),ht.equals(St)===!1&&(i.clearColor(Et,Tt,te,he),ht.copy(St))},reset:function(){k=!1,it=null,ht.set(-1,0,0,0)}}}function e(){let k=!1,St=!1,it=null,ht=null,Et=null;return{setReversed:function(Tt){St=Tt},setTest:function(Tt){Tt?at(i.DEPTH_TEST):ct(i.DEPTH_TEST)},setMask:function(Tt){it!==Tt&&!k&&(i.depthMask(Tt),it=Tt)},setFunc:function(Tt){if(St&&(Tt=B0[Tt]),ht!==Tt){switch(Tt){case Ba:i.depthFunc(i.NEVER);break;case za:i.depthFunc(i.ALWAYS);break;case ka:i.depthFunc(i.LESS);break;case Qi:i.depthFunc(i.LEQUAL);break;case Ha:i.depthFunc(i.EQUAL);break;case Va:i.depthFunc(i.GEQUAL);break;case Ga:i.depthFunc(i.GREATER);break;case Wa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ht=Tt}},setLocked:function(Tt){k=Tt},setClear:function(Tt){Et!==Tt&&(i.clearDepth(Tt),Et=Tt)},reset:function(){k=!1,it=null,ht=null,Et=null}}}function n(){let k=!1,St=null,it=null,ht=null,Et=null,Tt=null,te=null,he=null,Le=null;return{setTest:function(se){k||(se?at(i.STENCIL_TEST):ct(i.STENCIL_TEST))},setMask:function(se){St!==se&&!k&&(i.stencilMask(se),St=se)},setFunc:function(se,we,an){(it!==se||ht!==we||Et!==an)&&(i.stencilFunc(se,we,an),it=se,ht=we,Et=an)},setOp:function(se,we,an){(Tt!==se||te!==we||he!==an)&&(i.stencilOp(se,we,an),Tt=se,te=we,he=an)},setLocked:function(se){k=se},setClear:function(se){Le!==se&&(i.clearStencil(se),Le=se)},reset:function(){k=!1,St=null,it=null,ht=null,Et=null,Tt=null,te=null,he=null,Le=null}}}const s=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap;let h={},d={},p=new WeakMap,c=[],u=null,m=!1,M=null,f=null,g=null,R=null,b=null,T=null,Y=null,U=new Wt(0,0,0),I=0,X=!1,Q=null,v=null,E=null,W=null,A=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,_=0;const S=i.getParameter(i.VERSION);S.indexOf("WebGL")!==-1?(_=parseFloat(/^WebGL (\d)/.exec(S)[1]),K=_>=1):S.indexOf("OpenGL ES")!==-1&&(_=parseFloat(/^OpenGL ES (\d)/.exec(S)[1]),K=_>=2);let x=null,C={};const L=i.getParameter(i.SCISSOR_BOX),N=i.getParameter(i.VIEWPORT),et=new fe().fromArray(L),J=new fe().fromArray(N);function O(k,St,it,ht){const Et=new Uint8Array(4),Tt=i.createTexture();i.bindTexture(k,Tt),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let te=0;te<it;te++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(St,0,i.RGBA,1,1,ht,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(St+te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return Tt}const j={};j[i.TEXTURE_2D]=O(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=O(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=O(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=O(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),at(i.DEPTH_TEST),r.setFunc(Qi),Ft(!1),jt(il),at(i.CULL_FACE),B($n);function at(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function ct(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function gt(k,St){return d[k]!==St?(i.bindFramebuffer(k,St),d[k]=St,k===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=St),k===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=St),!0):!1}function bt(k,St){let it=c,ht=!1;if(k){it=p.get(St),it===void 0&&(it=[],p.set(St,it));const Et=k.textures;if(it.length!==Et.length||it[0]!==i.COLOR_ATTACHMENT0){for(let Tt=0,te=Et.length;Tt<te;Tt++)it[Tt]=i.COLOR_ATTACHMENT0+Tt;it.length=Et.length,ht=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,ht=!0);ht&&i.drawBuffers(it)}function Ht(k){return u!==k?(i.useProgram(k),u=k,!0):!1}const zt={[ci]:i.FUNC_ADD,[kh]:i.FUNC_SUBTRACT,[Hh]:i.FUNC_REVERSE_SUBTRACT};zt[Vh]=i.MIN,zt[Gh]=i.MAX;const Zt={[Wh]:i.ZERO,[Xh]:i.ONE,[Yh]:i.SRC_COLOR,[Fa]:i.SRC_ALPHA,[Jh]:i.SRC_ALPHA_SATURATE,[Kh]:i.DST_COLOR,[$h]:i.DST_ALPHA,[qh]:i.ONE_MINUS_SRC_COLOR,[Oa]:i.ONE_MINUS_SRC_ALPHA,[jh]:i.ONE_MINUS_DST_COLOR,[Zh]:i.ONE_MINUS_DST_ALPHA,[Qh]:i.CONSTANT_COLOR,[tu]:i.ONE_MINUS_CONSTANT_COLOR,[eu]:i.CONSTANT_ALPHA,[nu]:i.ONE_MINUS_CONSTANT_ALPHA};function B(k,St,it,ht,Et,Tt,te,he,Le,se){if(k===$n){m===!0&&(ct(i.BLEND),m=!1);return}if(m===!1&&(at(i.BLEND),m=!0),k!==zh){if(k!==M||se!==X){if((f!==ci||b!==ci)&&(i.blendEquation(i.FUNC_ADD),f=ci,b=ci),se)switch(k){case pi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Na:i.blendFunc(i.ONE,i.ONE);break;case sl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case pi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Na:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case sl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}g=null,R=null,T=null,Y=null,U.set(0,0,0),I=0,M=k,X=se}return}Et=Et||St,Tt=Tt||it,te=te||ht,(St!==f||Et!==b)&&(i.blendEquationSeparate(zt[St],zt[Et]),f=St,b=Et),(it!==g||ht!==R||Tt!==T||te!==Y)&&(i.blendFuncSeparate(Zt[it],Zt[ht],Zt[Tt],Zt[te]),g=it,R=ht,T=Tt,Y=te),(he.equals(U)===!1||Le!==I)&&(i.blendColor(he.r,he.g,he.b,Le),U.copy(he),I=Le),M=k,X=!1}function ce(k,St){k.side===dn?ct(i.CULL_FACE):at(i.CULL_FACE);let it=k.side===Ge;St&&(it=!it),Ft(it),k.blending===pi&&k.transparent===!1?B($n):B(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),r.setFunc(k.depthFunc),r.setTest(k.depthTest),r.setMask(k.depthWrite),s.setMask(k.colorWrite);const ht=k.stencilWrite;a.setTest(ht),ht&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ie(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(k){Q!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),Q=k)}function jt(k){k!==Oh?(at(i.CULL_FACE),k!==v&&(k===il?i.cullFace(i.BACK):k===Bh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ct(i.CULL_FACE),v=k}function Dt(k){k!==E&&(K&&i.lineWidth(k),E=k)}function ie(k,St,it){k?(at(i.POLYGON_OFFSET_FILL),(W!==St||A!==it)&&(i.polygonOffset(St,it),W=St,A=it)):ct(i.POLYGON_OFFSET_FILL)}function Ot(k){k?at(i.SCISSOR_TEST):ct(i.SCISSOR_TEST)}function P(k){k===void 0&&(k=i.TEXTURE0+z-1),x!==k&&(i.activeTexture(k),x=k)}function y(k,St,it){it===void 0&&(x===null?it=i.TEXTURE0+z-1:it=x);let ht=C[it];ht===void 0&&(ht={type:void 0,texture:void 0},C[it]=ht),(ht.type!==k||ht.texture!==St)&&(x!==it&&(i.activeTexture(it),x=it),i.bindTexture(k,St||j[k]),ht.type=k,ht.texture=St)}function q(){const k=C[x];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function st(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ut(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ot(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function At(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function vt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function wt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Jt(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pt(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Rt(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ut(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Nt(k){et.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),et.copy(k))}function Mt(k){J.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),J.copy(k))}function Qt(k,St){let it=l.get(St);it===void 0&&(it=new WeakMap,l.set(St,it));let ht=it.get(k);ht===void 0&&(ht=i.getUniformBlockIndex(St,k.name),it.set(k,ht))}function Bt(k,St){const ht=l.get(St).get(k);o.get(St)!==ht&&(i.uniformBlockBinding(St,ht,k.__bindingPointIndex),o.set(St,ht))}function Xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},x=null,C={},d={},p=new WeakMap,c=[],u=null,m=!1,M=null,f=null,g=null,R=null,b=null,T=null,Y=null,U=new Wt(0,0,0),I=0,X=!1,Q=null,v=null,E=null,W=null,A=null,et.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:at,disable:ct,bindFramebuffer:gt,drawBuffers:bt,useProgram:Ht,setBlending:B,setMaterial:ce,setFlipSided:Ft,setCullFace:jt,setLineWidth:Dt,setPolygonOffset:ie,setScissorTest:Ot,activeTexture:P,bindTexture:y,unbindTexture:q,compressedTexImage2D:st,compressedTexImage3D:ut,texImage2D:Rt,texImage3D:Ut,updateUBOMapping:Qt,uniformBlockBinding:Bt,texStorage2D:Jt,texStorage3D:pt,texSubImage2D:ot,texSubImage3D:At,compressedTexSubImage2D:vt,compressedTexSubImage3D:wt,scissor:Nt,viewport:Mt,reset:Xt}}function $l(i,t,e,n){const s=k0(n);switch(e){case Ic:return i*t;case Nc:return i*t;case Fc:return i*t*2;case Io:return i*t/s.components*s.byteLength;case Uo:return i*t/s.components*s.byteLength;case Oc:return i*t*2/s.components*s.byteLength;case No:return i*t*2/s.components*s.byteLength;case Uc:return i*t*3/s.components*s.byteLength;case pn:return i*t*4/s.components*s.byteLength;case Fo:return i*t*4/s.components*s.byteLength;case Er:case br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wr:case Tr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Za:case ja:return Math.max(i,16)*Math.max(t,8)/4;case $a:case Ka:return Math.max(i,8)*Math.max(t,8)/2;case Ja:case Qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case to:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case no:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case io:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case so:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ro:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ao:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case oo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case lo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case co:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ho:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case uo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case fo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case po:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case mo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ar:case go:case _o:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Bc:case vo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case xo:case Mo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function k0(i){switch(i){case Un:case Pc:return{byteLength:1,components:1};case Ls:case Lc:case Fs:return{byteLength:2,components:1};case Lo:case Do:return{byteLength:2,components:4};case mi:case Po:case Sn:return{byteLength:4,components:1};case Dc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function H0(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new _t,d=new WeakMap;let p;const c=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,y){return u?new OffscreenCanvas(P,y):Nr("canvas")}function M(P,y,q){let st=1;const ut=Ot(P);if((ut.width>q||ut.height>q)&&(st=q/Math.max(ut.width,ut.height)),st<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ot=Math.floor(st*ut.width),At=Math.floor(st*ut.height);p===void 0&&(p=m(ot,At));const vt=y?m(ot,At):p;return vt.width=ot,vt.height=At,vt.getContext("2d").drawImage(P,0,0,ot,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ut.width+"x"+ut.height+") to ("+ot+"x"+At+")."),vt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ut.width+"x"+ut.height+")."),P;return P}function f(P){return P.generateMipmaps&&P.minFilter!==Xe&&P.minFilter!==nn}function g(P){i.generateMipmap(P)}function R(P,y,q,st,ut=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ot=y;if(y===i.RED&&(q===i.FLOAT&&(ot=i.R32F),q===i.HALF_FLOAT&&(ot=i.R16F),q===i.UNSIGNED_BYTE&&(ot=i.R8)),y===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(ot=i.R8UI),q===i.UNSIGNED_SHORT&&(ot=i.R16UI),q===i.UNSIGNED_INT&&(ot=i.R32UI),q===i.BYTE&&(ot=i.R8I),q===i.SHORT&&(ot=i.R16I),q===i.INT&&(ot=i.R32I)),y===i.RG&&(q===i.FLOAT&&(ot=i.RG32F),q===i.HALF_FLOAT&&(ot=i.RG16F),q===i.UNSIGNED_BYTE&&(ot=i.RG8)),y===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(ot=i.RG8UI),q===i.UNSIGNED_SHORT&&(ot=i.RG16UI),q===i.UNSIGNED_INT&&(ot=i.RG32UI),q===i.BYTE&&(ot=i.RG8I),q===i.SHORT&&(ot=i.RG16I),q===i.INT&&(ot=i.RG32I)),y===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(ot=i.RGB8UI),q===i.UNSIGNED_SHORT&&(ot=i.RGB16UI),q===i.UNSIGNED_INT&&(ot=i.RGB32UI),q===i.BYTE&&(ot=i.RGB8I),q===i.SHORT&&(ot=i.RGB16I),q===i.INT&&(ot=i.RGB32I)),y===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(ot=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(ot=i.RGBA16UI),q===i.UNSIGNED_INT&&(ot=i.RGBA32UI),q===i.BYTE&&(ot=i.RGBA8I),q===i.SHORT&&(ot=i.RGBA16I),q===i.INT&&(ot=i.RGBA32I)),y===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(ot=i.RGB9_E5),y===i.RGBA){const At=ut?Lr:le.getTransfer(st);q===i.FLOAT&&(ot=i.RGBA32F),q===i.HALF_FLOAT&&(ot=i.RGBA16F),q===i.UNSIGNED_BYTE&&(ot=At===me?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(ot=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(ot=i.RGB5_A1)}return(ot===i.R16F||ot===i.R32F||ot===i.RG16F||ot===i.RG32F||ot===i.RGBA16F||ot===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function b(P,y){let q;return P?y===null||y===mi||y===ns?q=i.DEPTH24_STENCIL8:y===Sn?q=i.DEPTH32F_STENCIL8:y===Ls&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===mi||y===ns?q=i.DEPTH_COMPONENT24:y===Sn?q=i.DEPTH_COMPONENT32F:y===Ls&&(q=i.DEPTH_COMPONENT16),q}function T(P,y){return f(P)===!0||P.isFramebufferTexture&&P.minFilter!==Xe&&P.minFilter!==nn?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function Y(P){const y=P.target;y.removeEventListener("dispose",Y),I(y),y.isVideoTexture&&d.delete(y)}function U(P){const y=P.target;y.removeEventListener("dispose",U),Q(y)}function I(P){const y=n.get(P);if(y.__webglInit===void 0)return;const q=P.source,st=c.get(q);if(st){const ut=st[y.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&X(P),Object.keys(st).length===0&&c.delete(q)}n.remove(P)}function X(P){const y=n.get(P);i.deleteTexture(y.__webglTexture);const q=P.source,st=c.get(q);delete st[y.__cacheKey],a.memory.textures--}function Q(P){const y=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(y.__webglFramebuffer[st]))for(let ut=0;ut<y.__webglFramebuffer[st].length;ut++)i.deleteFramebuffer(y.__webglFramebuffer[st][ut]);else i.deleteFramebuffer(y.__webglFramebuffer[st]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[st])}else{if(Array.isArray(y.__webglFramebuffer))for(let st=0;st<y.__webglFramebuffer.length;st++)i.deleteFramebuffer(y.__webglFramebuffer[st]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let st=0;st<y.__webglColorRenderbuffer.length;st++)y.__webglColorRenderbuffer[st]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[st]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const q=P.textures;for(let st=0,ut=q.length;st<ut;st++){const ot=n.get(q[st]);ot.__webglTexture&&(i.deleteTexture(ot.__webglTexture),a.memory.textures--),n.remove(q[st])}n.remove(P)}let v=0;function E(){v=0}function W(){const P=v;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),v+=1,P}function A(P){const y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function z(P,y){const q=n.get(P);if(P.isVideoTexture&&Dt(P),P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){const st=P.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(q,P,y);return}}e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+y)}function K(P,y){const q=n.get(P);if(P.version>0&&q.__version!==P.version){J(q,P,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+y)}function _(P,y){const q=n.get(P);if(P.version>0&&q.__version!==P.version){J(q,P,y);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+y)}function S(P,y){const q=n.get(P);if(P.version>0&&q.__version!==P.version){O(q,P,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+y)}const x={[jn]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[qa]:i.MIRRORED_REPEAT},C={[Xe]:i.NEAREST,[uu]:i.NEAREST_MIPMAP_NEAREST,[Xs]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[$r]:i.LINEAR_MIPMAP_NEAREST,[fi]:i.LINEAR_MIPMAP_LINEAR},L={[mu]:i.NEVER,[yu]:i.ALWAYS,[gu]:i.LESS,[kc]:i.LEQUAL,[_u]:i.EQUAL,[Mu]:i.GEQUAL,[vu]:i.GREATER,[xu]:i.NOTEQUAL};function N(P,y){if(y.type===Sn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===nn||y.magFilter===$r||y.magFilter===Xs||y.magFilter===fi||y.minFilter===nn||y.minFilter===$r||y.minFilter===Xs||y.minFilter===fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,x[y.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,x[y.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,x[y.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,C[y.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,C[y.minFilter]),y.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,L[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Xe||y.minFilter!==Xs&&y.minFilter!==fi||y.type===Sn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function et(P,y){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",Y));const st=y.source;let ut=c.get(st);ut===void 0&&(ut={},c.set(st,ut));const ot=A(y);if(ot!==P.__cacheKey){ut[ot]===void 0&&(ut[ot]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,q=!0),ut[ot].usedTimes++;const At=ut[P.__cacheKey];At!==void 0&&(ut[P.__cacheKey].usedTimes--,At.usedTimes===0&&X(y)),P.__cacheKey=ot,P.__webglTexture=ut[ot].texture}return q}function J(P,y,q){let st=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(st=i.TEXTURE_3D);const ut=et(P,y),ot=y.source;e.bindTexture(st,P.__webglTexture,i.TEXTURE0+q);const At=n.get(ot);if(ot.version!==At.__version||ut===!0){e.activeTexture(i.TEXTURE0+q);const vt=le.getPrimaries(le.workingColorSpace),wt=y.colorSpace===qn?null:le.getPrimaries(y.colorSpace),Jt=y.colorSpace===qn||vt===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let pt=M(y.image,!1,s.maxTextureSize);pt=ie(y,pt);const Rt=r.convert(y.format,y.colorSpace),Ut=r.convert(y.type);let Nt=R(y.internalFormat,Rt,Ut,y.colorSpace,y.isVideoTexture);N(st,y);let Mt;const Qt=y.mipmaps,Bt=y.isVideoTexture!==!0,Xt=At.__version===void 0||ut===!0,k=ot.dataReady,St=T(y,pt);if(y.isDepthTexture)Nt=b(y.format===is,y.type),Xt&&(Bt?e.texStorage2D(i.TEXTURE_2D,1,Nt,pt.width,pt.height):e.texImage2D(i.TEXTURE_2D,0,Nt,pt.width,pt.height,0,Rt,Ut,null));else if(y.isDataTexture)if(Qt.length>0){Bt&&Xt&&e.texStorage2D(i.TEXTURE_2D,St,Nt,Qt[0].width,Qt[0].height);for(let it=0,ht=Qt.length;it<ht;it++)Mt=Qt[it],Bt?k&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,Mt.width,Mt.height,Rt,Ut,Mt.data):e.texImage2D(i.TEXTURE_2D,it,Nt,Mt.width,Mt.height,0,Rt,Ut,Mt.data);y.generateMipmaps=!1}else Bt?(Xt&&e.texStorage2D(i.TEXTURE_2D,St,Nt,pt.width,pt.height),k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt.width,pt.height,Rt,Ut,pt.data)):e.texImage2D(i.TEXTURE_2D,0,Nt,pt.width,pt.height,0,Rt,Ut,pt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Bt&&Xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Nt,Qt[0].width,Qt[0].height,pt.depth);for(let it=0,ht=Qt.length;it<ht;it++)if(Mt=Qt[it],y.format!==pn)if(Rt!==null)if(Bt){if(k)if(y.layerUpdates.size>0){const Et=$l(Mt.width,Mt.height,y.format,y.type);for(const Tt of y.layerUpdates){const te=Mt.data.subarray(Tt*Et/Mt.data.BYTES_PER_ELEMENT,(Tt+1)*Et/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,Tt,Mt.width,Mt.height,1,Rt,te,0,0)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,Mt.width,Mt.height,pt.depth,Rt,Mt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,Nt,Mt.width,Mt.height,pt.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?k&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,Mt.width,Mt.height,pt.depth,Rt,Ut,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,Nt,Mt.width,Mt.height,pt.depth,0,Rt,Ut,Mt.data)}else{Bt&&Xt&&e.texStorage2D(i.TEXTURE_2D,St,Nt,Qt[0].width,Qt[0].height);for(let it=0,ht=Qt.length;it<ht;it++)Mt=Qt[it],y.format!==pn?Rt!==null?Bt?k&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,Mt.width,Mt.height,Rt,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,it,Nt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?k&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,Mt.width,Mt.height,Rt,Ut,Mt.data):e.texImage2D(i.TEXTURE_2D,it,Nt,Mt.width,Mt.height,0,Rt,Ut,Mt.data)}else if(y.isDataArrayTexture)if(Bt){if(Xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Nt,pt.width,pt.height,pt.depth),k)if(y.layerUpdates.size>0){const it=$l(pt.width,pt.height,y.format,y.type);for(const ht of y.layerUpdates){const Et=pt.data.subarray(ht*it/pt.data.BYTES_PER_ELEMENT,(ht+1)*it/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ht,pt.width,pt.height,1,Rt,Ut,Et)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,Rt,Ut,pt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,pt.width,pt.height,pt.depth,0,Rt,Ut,pt.data);else if(y.isData3DTexture)Bt?(Xt&&e.texStorage3D(i.TEXTURE_3D,St,Nt,pt.width,pt.height,pt.depth),k&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,Rt,Ut,pt.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,pt.width,pt.height,pt.depth,0,Rt,Ut,pt.data);else if(y.isFramebufferTexture){if(Xt)if(Bt)e.texStorage2D(i.TEXTURE_2D,St,Nt,pt.width,pt.height);else{let it=pt.width,ht=pt.height;for(let Et=0;Et<St;Et++)e.texImage2D(i.TEXTURE_2D,Et,Nt,it,ht,0,Rt,Ut,null),it>>=1,ht>>=1}}else if(Qt.length>0){if(Bt&&Xt){const it=Ot(Qt[0]);e.texStorage2D(i.TEXTURE_2D,St,Nt,it.width,it.height)}for(let it=0,ht=Qt.length;it<ht;it++)Mt=Qt[it],Bt?k&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,Rt,Ut,Mt):e.texImage2D(i.TEXTURE_2D,it,Nt,Rt,Ut,Mt);y.generateMipmaps=!1}else if(Bt){if(Xt){const it=Ot(pt);e.texStorage2D(i.TEXTURE_2D,St,Nt,it.width,it.height)}k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Rt,Ut,pt)}else e.texImage2D(i.TEXTURE_2D,0,Nt,Rt,Ut,pt);f(y)&&g(st),At.__version=ot.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function O(P,y,q){if(y.image.length!==6)return;const st=et(P,y),ut=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+q);const ot=n.get(ut);if(ut.version!==ot.__version||st===!0){e.activeTexture(i.TEXTURE0+q);const At=le.getPrimaries(le.workingColorSpace),vt=y.colorSpace===qn?null:le.getPrimaries(y.colorSpace),wt=y.colorSpace===qn||At===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const Jt=y.isCompressedTexture||y.image[0].isCompressedTexture,pt=y.image[0]&&y.image[0].isDataTexture,Rt=[];for(let ht=0;ht<6;ht++)!Jt&&!pt?Rt[ht]=M(y.image[ht],!0,s.maxCubemapSize):Rt[ht]=pt?y.image[ht].image:y.image[ht],Rt[ht]=ie(y,Rt[ht]);const Ut=Rt[0],Nt=r.convert(y.format,y.colorSpace),Mt=r.convert(y.type),Qt=R(y.internalFormat,Nt,Mt,y.colorSpace),Bt=y.isVideoTexture!==!0,Xt=ot.__version===void 0||st===!0,k=ut.dataReady;let St=T(y,Ut);N(i.TEXTURE_CUBE_MAP,y);let it;if(Jt){Bt&&Xt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,St,Qt,Ut.width,Ut.height);for(let ht=0;ht<6;ht++){it=Rt[ht].mipmaps;for(let Et=0;Et<it.length;Et++){const Tt=it[Et];y.format!==pn?Nt!==null?Bt?k&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Et,0,0,Tt.width,Tt.height,Nt,Tt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Et,Qt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Et,0,0,Tt.width,Tt.height,Nt,Mt,Tt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Et,Qt,Tt.width,Tt.height,0,Nt,Mt,Tt.data)}}}else{if(it=y.mipmaps,Bt&&Xt){it.length>0&&St++;const ht=Ot(Rt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,St,Qt,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(pt){Bt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Rt[ht].width,Rt[ht].height,Nt,Mt,Rt[ht].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Qt,Rt[ht].width,Rt[ht].height,0,Nt,Mt,Rt[ht].data);for(let Et=0;Et<it.length;Et++){const te=it[Et].image[ht].image;Bt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Et+1,0,0,te.width,te.height,Nt,Mt,te.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Et+1,Qt,te.width,te.height,0,Nt,Mt,te.data)}}else{Bt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Nt,Mt,Rt[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Qt,Nt,Mt,Rt[ht]);for(let Et=0;Et<it.length;Et++){const Tt=it[Et];Bt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Et+1,0,0,Nt,Mt,Tt.image[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Et+1,Qt,Nt,Mt,Tt.image[ht])}}}f(y)&&g(i.TEXTURE_CUBE_MAP),ot.__version=ut.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function j(P,y,q,st,ut,ot){const At=r.convert(q.format,q.colorSpace),vt=r.convert(q.type),wt=R(q.internalFormat,At,vt,q.colorSpace);if(!n.get(y).__hasExternalTextures){const pt=Math.max(1,y.width>>ot),Rt=Math.max(1,y.height>>ot);ut===i.TEXTURE_3D||ut===i.TEXTURE_2D_ARRAY?e.texImage3D(ut,ot,wt,pt,Rt,y.depth,0,At,vt,null):e.texImage2D(ut,ot,wt,pt,Rt,0,At,vt,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),jt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,ut,n.get(q).__webglTexture,0,Ft(y)):(ut===i.TEXTURE_2D||ut>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,ut,n.get(q).__webglTexture,ot),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(P,y,q){if(i.bindRenderbuffer(i.RENDERBUFFER,P),y.depthBuffer){const st=y.depthTexture,ut=st&&st.isDepthTexture?st.type:null,ot=b(y.stencilBuffer,ut),At=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=Ft(y);jt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,ot,y.width,y.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,ot,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ot,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,P)}else{const st=y.textures;for(let ut=0;ut<st.length;ut++){const ot=st[ut],At=r.convert(ot.format,ot.colorSpace),vt=r.convert(ot.type),wt=R(ot.internalFormat,At,vt,ot.colorSpace),Jt=Ft(y);q&&jt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt,wt,y.width,y.height):jt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt,wt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,wt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ct(P,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),z(y.depthTexture,0);const st=n.get(y.depthTexture).__webglTexture,ut=Ft(y);if(y.depthTexture.format===ji)jt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0);else if(y.depthTexture.format===is)jt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function gt(P){const y=n.get(P),q=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){const st=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),st){const ut=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,st.removeEventListener("dispose",ut)};st.addEventListener("dispose",ut),y.__depthDisposeCallback=ut}y.__boundDepthTexture=st}if(P.depthTexture&&!y.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");ct(y.__webglFramebuffer,P)}else if(q){y.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[st]),y.__webglDepthbuffer[st]===void 0)y.__webglDepthbuffer[st]=i.createRenderbuffer(),at(y.__webglDepthbuffer[st],P,!1);else{const ut=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=y.__webglDepthbuffer[st];i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,ot)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),at(y.__webglDepthbuffer,P,!1);else{const st=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,ut)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(P,y,q){const st=n.get(P);y!==void 0&&j(st.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&gt(P)}function Ht(P){const y=P.texture,q=n.get(P),st=n.get(y);P.addEventListener("dispose",U);const ut=P.textures,ot=P.isWebGLCubeRenderTarget===!0,At=ut.length>1;if(At||(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=y.version,a.memory.textures++),ot){q.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer[vt]=[];for(let wt=0;wt<y.mipmaps.length;wt++)q.__webglFramebuffer[vt][wt]=i.createFramebuffer()}else q.__webglFramebuffer[vt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer=[];for(let vt=0;vt<y.mipmaps.length;vt++)q.__webglFramebuffer[vt]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(At)for(let vt=0,wt=ut.length;vt<wt;vt++){const Jt=n.get(ut[vt]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&jt(P)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let vt=0;vt<ut.length;vt++){const wt=ut[vt];q.__webglColorRenderbuffer[vt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[vt]);const Jt=r.convert(wt.format,wt.colorSpace),pt=r.convert(wt.type),Rt=R(wt.internalFormat,Jt,pt,wt.colorSpace,P.isXRRenderTarget===!0),Ut=Ft(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,Rt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,q.__webglColorRenderbuffer[vt])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),at(q.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ot){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),N(i.TEXTURE_CUBE_MAP,y);for(let vt=0;vt<6;vt++)if(y.mipmaps&&y.mipmaps.length>0)for(let wt=0;wt<y.mipmaps.length;wt++)j(q.__webglFramebuffer[vt][wt],P,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,wt);else j(q.__webglFramebuffer[vt],P,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);f(y)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let vt=0,wt=ut.length;vt<wt;vt++){const Jt=ut[vt],pt=n.get(Jt);e.bindTexture(i.TEXTURE_2D,pt.__webglTexture),N(i.TEXTURE_2D,Jt),j(q.__webglFramebuffer,P,Jt,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,0),f(Jt)&&g(i.TEXTURE_2D)}e.unbindTexture()}else{let vt=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(vt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,st.__webglTexture),N(vt,y),y.mipmaps&&y.mipmaps.length>0)for(let wt=0;wt<y.mipmaps.length;wt++)j(q.__webglFramebuffer[wt],P,y,i.COLOR_ATTACHMENT0,vt,wt);else j(q.__webglFramebuffer,P,y,i.COLOR_ATTACHMENT0,vt,0);f(y)&&g(vt),e.unbindTexture()}P.depthBuffer&&gt(P)}function zt(P){const y=P.textures;for(let q=0,st=y.length;q<st;q++){const ut=y[q];if(f(ut)){const ot=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,At=n.get(ut).__webglTexture;e.bindTexture(ot,At),g(ot),e.unbindTexture()}}}const Zt=[],B=[];function ce(P){if(P.samples>0){if(jt(P)===!1){const y=P.textures,q=P.width,st=P.height;let ut=i.COLOR_BUFFER_BIT;const ot=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(P),vt=y.length>1;if(vt)for(let wt=0;wt<y.length;wt++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let wt=0;wt<y.length;wt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ut|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ut|=i.STENCIL_BUFFER_BIT)),vt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[wt]);const Jt=n.get(y[wt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Jt,0)}i.blitFramebuffer(0,0,q,st,0,0,q,st,ut,i.NEAREST),l===!0&&(Zt.length=0,B.length=0,Zt.push(i.COLOR_ATTACHMENT0+wt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Zt.push(ot),B.push(ot),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Zt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),vt)for(let wt=0;wt<y.length;wt++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,At.__webglColorRenderbuffer[wt]);const Jt=n.get(y[wt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,Jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const y=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Ft(P){return Math.min(s.maxSamples,P.samples)}function jt(P){const y=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Dt(P){const y=a.render.frame;d.get(P)!==y&&(d.set(P,y),P.update())}function ie(P,y){const q=P.colorSpace,st=P.format,ut=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||q!==Qn&&q!==qn&&(le.getTransfer(q)===me?(st!==pn||ut!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),y}function Ot(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=W,this.resetTextureUnits=E,this.setTexture2D=z,this.setTexture2DArray=K,this.setTexture3D=_,this.setTextureCube=S,this.rebindTextures=bt,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=j,this.useMultisampledRTT=jt}function V0(i,t){function e(n,s=qn){let r;const a=le.getTransfer(s);if(n===Un)return i.UNSIGNED_BYTE;if(n===Lo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Do)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Dc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pc)return i.BYTE;if(n===Lc)return i.SHORT;if(n===Ls)return i.UNSIGNED_SHORT;if(n===Po)return i.INT;if(n===mi)return i.UNSIGNED_INT;if(n===Sn)return i.FLOAT;if(n===Fs)return i.HALF_FLOAT;if(n===Ic)return i.ALPHA;if(n===Uc)return i.RGB;if(n===pn)return i.RGBA;if(n===Nc)return i.LUMINANCE;if(n===Fc)return i.LUMINANCE_ALPHA;if(n===ji)return i.DEPTH_COMPONENT;if(n===is)return i.DEPTH_STENCIL;if(n===Io)return i.RED;if(n===Uo)return i.RED_INTEGER;if(n===Oc)return i.RG;if(n===No)return i.RG_INTEGER;if(n===Fo)return i.RGBA_INTEGER;if(n===Er||n===br||n===wr||n===Tr)if(a===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Er)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Er)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$a||n===Za||n===Ka||n===ja)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$a)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ka)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ja||n===Qa||n===to)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ja||n===Qa)return a===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===to)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===eo||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===mo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===eo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===no)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===io)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===so)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ro)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ao)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===oo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===co)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ho)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===uo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===po)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===mo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ar||n===go||n===_o)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ar)return a===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===go)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_o)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bc||n===vo||n===xo||n===Mo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ar)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Mo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ns?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class G0 extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ve extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const W0={type:"move"};class Sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(const M of t.hand.values()){const f=e.getJointPose(M,n),g=this._getHandJoint(h,M);f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=f.radius),g.visible=f!==null}const d=h.joints["index-finger-tip"],p=h.joints["thumb-tip"],c=d.position.distanceTo(p.position),u=.02,m=.005;h.inputState.pinching&&c>u+m?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&c<=u-m&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(W0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ve;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const X0=`
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

}`;class q0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Oe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Jn({vertexShader:X0,fragmentShader:Y0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Gt(new En(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $0 extends vi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,h=null,d=null,p=null,c=null,u=null,m=null;const M=new q0,f=e.getContextAttributes();let g=null,R=null;const b=[],T=[],Y=new _t;let U=null;const I=new je;I.layers.enable(1),I.viewport=new fe;const X=new je;X.layers.enable(2),X.viewport=new fe;const Q=[I,X],v=new G0;v.layers.enable(1),v.layers.enable(2);let E=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let j=b[O];return j===void 0&&(j=new Sa,b[O]=j),j.getTargetRaySpace()},this.getControllerGrip=function(O){let j=b[O];return j===void 0&&(j=new Sa,b[O]=j),j.getGripSpace()},this.getHand=function(O){let j=b[O];return j===void 0&&(j=new Sa,b[O]=j),j.getHandSpace()};function A(O){const j=T.indexOf(O.inputSource);if(j===-1)return;const at=b[j];at!==void 0&&(at.update(O.inputSource,O.frame,h||a),at.dispatchEvent({type:O.type,data:O.inputSource}))}function z(){s.removeEventListener("select",A),s.removeEventListener("selectstart",A),s.removeEventListener("selectend",A),s.removeEventListener("squeeze",A),s.removeEventListener("squeezestart",A),s.removeEventListener("squeezeend",A),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",K);for(let O=0;O<b.length;O++){const j=T[O];j!==null&&(T[O]=null,b[O].disconnect(j))}E=null,W=null,M.reset(),t.setRenderTarget(g),u=null,c=null,p=null,s=null,R=null,J.stop(),n.isPresenting=!1,t.setPixelRatio(U),t.setSize(Y.width,Y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(O){h=O},this.getBaseLayer=function(){return c!==null?c:u},this.getBinding=function(){return p},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(O){if(s=O,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",A),s.addEventListener("selectstart",A),s.addEventListener("selectend",A),s.addEventListener("squeeze",A),s.addEventListener("squeezestart",A),s.addEventListener("squeezeend",A),s.addEventListener("end",z),s.addEventListener("inputsourceschange",K),f.xrCompatible!==!0&&await e.makeXRCompatible(),U=t.getPixelRatio(),t.getSize(Y),s.renderState.layers===void 0){const j={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,j),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),R=new gi(u.framebufferWidth,u.framebufferHeight,{format:pn,type:Un,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let j=null,at=null,ct=null;f.depth&&(ct=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=f.stencil?is:ji,at=f.stencil?ns:mi);const gt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};p=new XRWebGLBinding(s,e),c=p.createProjectionLayer(gt),s.updateRenderState({layers:[c]}),t.setPixelRatio(1),t.setSize(c.textureWidth,c.textureHeight,!1),R=new gi(c.textureWidth,c.textureHeight,{format:pn,type:Un,depthTexture:new Jc(c.textureWidth,c.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await s.requestReferenceSpace(o),J.setContext(s),J.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function K(O){for(let j=0;j<O.removed.length;j++){const at=O.removed[j],ct=T.indexOf(at);ct>=0&&(T[ct]=null,b[ct].disconnect(at))}for(let j=0;j<O.added.length;j++){const at=O.added[j];let ct=T.indexOf(at);if(ct===-1){for(let bt=0;bt<b.length;bt++)if(bt>=T.length){T.push(at),ct=bt;break}else if(T[bt]===null){T[bt]=at,ct=bt;break}if(ct===-1)break}const gt=b[ct];gt&&gt.connect(at)}}const _=new F,S=new F;function x(O,j,at){_.setFromMatrixPosition(j.matrixWorld),S.setFromMatrixPosition(at.matrixWorld);const ct=_.distanceTo(S),gt=j.projectionMatrix.elements,bt=at.projectionMatrix.elements,Ht=gt[14]/(gt[10]-1),zt=gt[14]/(gt[10]+1),Zt=(gt[9]+1)/gt[5],B=(gt[9]-1)/gt[5],ce=(gt[8]-1)/gt[0],Ft=(bt[8]+1)/bt[0],jt=Ht*ce,Dt=Ht*Ft,ie=ct/(-ce+Ft),Ot=ie*-ce;if(j.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Ot),O.translateZ(ie),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),gt[10]===-1)O.projectionMatrix.copy(j.projectionMatrix),O.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const P=Ht+ie,y=zt+ie,q=jt-Ot,st=Dt+(ct-Ot),ut=Zt*zt/y*P,ot=B*zt/y*P;O.projectionMatrix.makePerspective(q,st,ut,ot,P,y),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function C(O,j){j===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(j.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(s===null)return;let j=O.near,at=O.far;M.texture!==null&&(M.depthNear>0&&(j=M.depthNear),M.depthFar>0&&(at=M.depthFar)),v.near=X.near=I.near=j,v.far=X.far=I.far=at,(E!==v.near||W!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),E=v.near,W=v.far);const ct=O.parent,gt=v.cameras;C(v,ct);for(let bt=0;bt<gt.length;bt++)C(gt[bt],ct);gt.length===2?x(v,I,X):v.projectionMatrix.copy(I.projectionMatrix),L(O,v,ct)};function L(O,j,at){at===null?O.matrix.copy(j.matrixWorld):(O.matrix.copy(at.matrixWorld),O.matrix.invert(),O.matrix.multiply(j.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(j.projectionMatrix),O.projectionMatrixInverse.copy(j.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=Ds*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(c===null&&u===null))return l},this.setFoveation=function(O){l=O,c!==null&&(c.fixedFoveation=O),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=O)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(v)};let N=null;function et(O,j){if(d=j.getViewerPose(h||a),m=j,d!==null){const at=d.views;u!==null&&(t.setRenderTargetFramebuffer(R,u.framebuffer),t.setRenderTarget(R));let ct=!1;at.length!==v.cameras.length&&(v.cameras.length=0,ct=!0);for(let bt=0;bt<at.length;bt++){const Ht=at[bt];let zt=null;if(u!==null)zt=u.getViewport(Ht);else{const B=p.getViewSubImage(c,Ht);zt=B.viewport,bt===0&&(t.setRenderTargetTextures(R,B.colorTexture,c.ignoreDepthValues?void 0:B.depthStencilTexture),t.setRenderTarget(R))}let Zt=Q[bt];Zt===void 0&&(Zt=new je,Zt.layers.enable(bt),Zt.viewport=new fe,Q[bt]=Zt),Zt.matrix.fromArray(Ht.transform.matrix),Zt.matrix.decompose(Zt.position,Zt.quaternion,Zt.scale),Zt.projectionMatrix.fromArray(Ht.projectionMatrix),Zt.projectionMatrixInverse.copy(Zt.projectionMatrix).invert(),Zt.viewport.set(zt.x,zt.y,zt.width,zt.height),bt===0&&(v.matrix.copy(Zt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ct===!0&&v.cameras.push(Zt)}const gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")){const bt=p.getDepthInformation(at[0]);bt&&bt.isValid&&bt.texture&&M.init(t,bt,s.renderState)}}for(let at=0;at<b.length;at++){const ct=T[at],gt=b[at];ct!==null&&gt!==void 0&&gt.update(ct,j,h||a)}N&&N(O,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),m=null}const J=new Kc;J.setAnimationLoop(et),this.setAnimationLoop=function(O){N=O},this.dispose=function(){}}}const oi=new rn,Z0=new oe;function K0(i,t){function e(f,g){f.matrixAutoUpdate===!0&&f.updateMatrix(),g.value.copy(f.matrix)}function n(f,g){g.color.getRGB(f.fogColor.value,qc(i)),g.isFog?(f.fogNear.value=g.near,f.fogFar.value=g.far):g.isFogExp2&&(f.fogDensity.value=g.density)}function s(f,g,R,b,T){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(f,g):g.isMeshToonMaterial?(r(f,g),p(f,g)):g.isMeshPhongMaterial?(r(f,g),d(f,g)):g.isMeshStandardMaterial?(r(f,g),c(f,g),g.isMeshPhysicalMaterial&&u(f,g,T)):g.isMeshMatcapMaterial?(r(f,g),m(f,g)):g.isMeshDepthMaterial?r(f,g):g.isMeshDistanceMaterial?(r(f,g),M(f,g)):g.isMeshNormalMaterial?r(f,g):g.isLineBasicMaterial?(a(f,g),g.isLineDashedMaterial&&o(f,g)):g.isPointsMaterial?l(f,g,R,b):g.isSpriteMaterial?h(f,g):g.isShadowMaterial?(f.color.value.copy(g.color),f.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(f,g){f.opacity.value=g.opacity,g.color&&f.diffuse.value.copy(g.color),g.emissive&&f.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(f.map.value=g.map,e(g.map,f.mapTransform)),g.alphaMap&&(f.alphaMap.value=g.alphaMap,e(g.alphaMap,f.alphaMapTransform)),g.bumpMap&&(f.bumpMap.value=g.bumpMap,e(g.bumpMap,f.bumpMapTransform),f.bumpScale.value=g.bumpScale,g.side===Ge&&(f.bumpScale.value*=-1)),g.normalMap&&(f.normalMap.value=g.normalMap,e(g.normalMap,f.normalMapTransform),f.normalScale.value.copy(g.normalScale),g.side===Ge&&f.normalScale.value.negate()),g.displacementMap&&(f.displacementMap.value=g.displacementMap,e(g.displacementMap,f.displacementMapTransform),f.displacementScale.value=g.displacementScale,f.displacementBias.value=g.displacementBias),g.emissiveMap&&(f.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,f.emissiveMapTransform)),g.specularMap&&(f.specularMap.value=g.specularMap,e(g.specularMap,f.specularMapTransform)),g.alphaTest>0&&(f.alphaTest.value=g.alphaTest);const R=t.get(g),b=R.envMap,T=R.envMapRotation;b&&(f.envMap.value=b,oi.copy(T),oi.x*=-1,oi.y*=-1,oi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),f.envMapRotation.value.setFromMatrix4(Z0.makeRotationFromEuler(oi)),f.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=g.reflectivity,f.ior.value=g.ior,f.refractionRatio.value=g.refractionRatio),g.lightMap&&(f.lightMap.value=g.lightMap,f.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,f.lightMapTransform)),g.aoMap&&(f.aoMap.value=g.aoMap,f.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,f.aoMapTransform))}function a(f,g){f.diffuse.value.copy(g.color),f.opacity.value=g.opacity,g.map&&(f.map.value=g.map,e(g.map,f.mapTransform))}function o(f,g){f.dashSize.value=g.dashSize,f.totalSize.value=g.dashSize+g.gapSize,f.scale.value=g.scale}function l(f,g,R,b){f.diffuse.value.copy(g.color),f.opacity.value=g.opacity,f.size.value=g.size*R,f.scale.value=b*.5,g.map&&(f.map.value=g.map,e(g.map,f.uvTransform)),g.alphaMap&&(f.alphaMap.value=g.alphaMap,e(g.alphaMap,f.alphaMapTransform)),g.alphaTest>0&&(f.alphaTest.value=g.alphaTest)}function h(f,g){f.diffuse.value.copy(g.color),f.opacity.value=g.opacity,f.rotation.value=g.rotation,g.map&&(f.map.value=g.map,e(g.map,f.mapTransform)),g.alphaMap&&(f.alphaMap.value=g.alphaMap,e(g.alphaMap,f.alphaMapTransform)),g.alphaTest>0&&(f.alphaTest.value=g.alphaTest)}function d(f,g){f.specular.value.copy(g.specular),f.shininess.value=Math.max(g.shininess,1e-4)}function p(f,g){g.gradientMap&&(f.gradientMap.value=g.gradientMap)}function c(f,g){f.metalness.value=g.metalness,g.metalnessMap&&(f.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,f.metalnessMapTransform)),f.roughness.value=g.roughness,g.roughnessMap&&(f.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,f.roughnessMapTransform)),g.envMap&&(f.envMapIntensity.value=g.envMapIntensity)}function u(f,g,R){f.ior.value=g.ior,g.sheen>0&&(f.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),f.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(f.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,f.sheenColorMapTransform)),g.sheenRoughnessMap&&(f.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,f.sheenRoughnessMapTransform))),g.clearcoat>0&&(f.clearcoat.value=g.clearcoat,f.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(f.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,f.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(f.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ge&&f.clearcoatNormalScale.value.negate())),g.dispersion>0&&(f.dispersion.value=g.dispersion),g.iridescence>0&&(f.iridescence.value=g.iridescence,f.iridescenceIOR.value=g.iridescenceIOR,f.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(f.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,f.iridescenceMapTransform)),g.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),g.transmission>0&&(f.transmission.value=g.transmission,f.transmissionSamplerMap.value=R.texture,f.transmissionSamplerSize.value.set(R.width,R.height),g.transmissionMap&&(f.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,f.transmissionMapTransform)),f.thickness.value=g.thickness,g.thicknessMap&&(f.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=g.attenuationDistance,f.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(f.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(f.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=g.specularIntensity,f.specularColor.value.copy(g.specularColor),g.specularColorMap&&(f.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,f.specularColorMapTransform)),g.specularIntensityMap&&(f.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,f.specularIntensityMapTransform))}function m(f,g){g.matcap&&(f.matcap.value=g.matcap)}function M(f,g){const R=t.get(g).light;f.referencePosition.value.setFromMatrixPosition(R.matrixWorld),f.nearDistance.value=R.shadow.camera.near,f.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function j0(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,b){const T=b.program;n.uniformBlockBinding(R,T)}function h(R,b){let T=s[R.id];T===void 0&&(m(R),T=d(R),s[R.id]=T,R.addEventListener("dispose",f));const Y=b.program;n.updateUBOMapping(R,Y);const U=t.render.frame;r[R.id]!==U&&(c(R),r[R.id]=U)}function d(R){const b=p();R.__bindingPointIndex=b;const T=i.createBuffer(),Y=R.__size,U=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,Y,U),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,T),T}function p(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(R){const b=s[R.id],T=R.uniforms,Y=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let U=0,I=T.length;U<I;U++){const X=Array.isArray(T[U])?T[U]:[T[U]];for(let Q=0,v=X.length;Q<v;Q++){const E=X[Q];if(u(E,U,Q,Y)===!0){const W=E.__offset,A=Array.isArray(E.value)?E.value:[E.value];let z=0;for(let K=0;K<A.length;K++){const _=A[K],S=M(_);typeof _=="number"||typeof _=="boolean"?(E.__data[0]=_,i.bufferSubData(i.UNIFORM_BUFFER,W+z,E.__data)):_.isMatrix3?(E.__data[0]=_.elements[0],E.__data[1]=_.elements[1],E.__data[2]=_.elements[2],E.__data[3]=0,E.__data[4]=_.elements[3],E.__data[5]=_.elements[4],E.__data[6]=_.elements[5],E.__data[7]=0,E.__data[8]=_.elements[6],E.__data[9]=_.elements[7],E.__data[10]=_.elements[8],E.__data[11]=0):(_.toArray(E.__data,z),z+=S.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(R,b,T,Y){const U=R.value,I=b+"_"+T;if(Y[I]===void 0)return typeof U=="number"||typeof U=="boolean"?Y[I]=U:Y[I]=U.clone(),!0;{const X=Y[I];if(typeof U=="number"||typeof U=="boolean"){if(X!==U)return Y[I]=U,!0}else if(X.equals(U)===!1)return X.copy(U),!0}return!1}function m(R){const b=R.uniforms;let T=0;const Y=16;for(let I=0,X=b.length;I<X;I++){const Q=Array.isArray(b[I])?b[I]:[b[I]];for(let v=0,E=Q.length;v<E;v++){const W=Q[v],A=Array.isArray(W.value)?W.value:[W.value];for(let z=0,K=A.length;z<K;z++){const _=A[z],S=M(_),x=T%Y,C=x%S.boundary,L=x+C;T+=C,L!==0&&Y-L<S.storage&&(T+=Y-L),W.__data=new Float32Array(S.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=T,T+=S.storage}}}const U=T%Y;return U>0&&(T+=Y-U),R.__size=T,R.__cache={},this}function M(R){const b={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(b.boundary=4,b.storage=4):R.isVector2?(b.boundary=8,b.storage=8):R.isVector3||R.isColor?(b.boundary=16,b.storage=12):R.isVector4?(b.boundary=16,b.storage=16):R.isMatrix3?(b.boundary=48,b.storage=48):R.isMatrix4?(b.boundary=64,b.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),b}function f(R){const b=R.target;b.removeEventListener("dispose",f);const T=a.indexOf(b.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function g(){for(const R in s)i.deleteBuffer(s[R]);a=[],s={},r={}}return{bind:l,update:h,dispose:g}}class J0{constructor(t={}){const{canvas:e=Bu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1}=t;this.isWebGLRenderer=!0;let c;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");c=n.getContextAttributes().alpha}else c=a;const u=new Uint32Array(4),m=new Int32Array(4);let M=null,f=null;const g=[],R=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fe,this.toneMapping=Zn,this.toneMappingExposure=1;const b=this;let T=!1,Y=0,U=0,I=null,X=-1,Q=null;const v=new fe,E=new fe;let W=null;const A=new Wt(0);let z=0,K=e.width,_=e.height,S=1,x=null,C=null;const L=new fe(0,0,K,_),N=new fe(0,0,K,_);let et=!1;const J=new Ho;let O=!1,j=!1;const at=new oe,ct=new oe,gt=new F,bt=new fe,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function Zt(){return I===null?S:1}let B=n;function ce(w,V){return e.getContext(w,V)}try{const w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Co}`),e.addEventListener("webglcontextlost",ht,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),B===null){const V="webgl2";if(B=ce(V,w),B===null)throw ce(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ft,jt,Dt,ie,Ot,P,y,q,st,ut,ot,At,vt,wt,Jt,pt,Rt,Ut,Nt,Mt,Qt,Bt,Xt,k;function St(){Ft=new im(B),Ft.init(),Bt=new V0(B,Ft),jt=new jp(B,Ft,t,Bt),Dt=new z0(B),jt.reverseDepthBuffer&&Dt.buffers.depth.setReversed(!0),ie=new am(B),Ot=new b0,P=new H0(B,Ft,Dt,Ot,jt,Bt,ie),y=new Qp(b),q=new nm(b),st=new dd(B),Xt=new Zp(B,st),ut=new sm(B,st,ie,Xt),ot=new lm(B,ut,st,ie),Nt=new om(B,jt,P),pt=new Jp(Ot),At=new E0(b,y,q,Ft,jt,Xt,pt),vt=new K0(b,Ot),wt=new T0,Jt=new D0(Ft),Ut=new $p(b,y,q,Dt,ot,c,l),Rt=new O0(b,ot,jt),k=new j0(B,ie,jt,Dt),Mt=new Kp(B,Ft,ie),Qt=new rm(B,Ft,ie),ie.programs=At.programs,b.capabilities=jt,b.extensions=Ft,b.properties=Ot,b.renderLists=wt,b.shadowMap=Rt,b.state=Dt,b.info=ie}St();const it=new $0(b,B);this.xr=it,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const w=Ft.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ft.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return S},this.setPixelRatio=function(w){w!==void 0&&(S=w,this.setSize(K,_,!1))},this.getSize=function(w){return w.set(K,_)},this.setSize=function(w,V,$=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=w,_=V,e.width=Math.floor(w*S),e.height=Math.floor(V*S),$===!0&&(e.style.width=w+"px",e.style.height=V+"px"),this.setViewport(0,0,w,V)},this.getDrawingBufferSize=function(w){return w.set(K*S,_*S).floor()},this.setDrawingBufferSize=function(w,V,$){K=w,_=V,S=$,e.width=Math.floor(w*$),e.height=Math.floor(V*$),this.setViewport(0,0,w,V)},this.getCurrentViewport=function(w){return w.copy(v)},this.getViewport=function(w){return w.copy(L)},this.setViewport=function(w,V,$,tt){w.isVector4?L.set(w.x,w.y,w.z,w.w):L.set(w,V,$,tt),Dt.viewport(v.copy(L).multiplyScalar(S).round())},this.getScissor=function(w){return w.copy(N)},this.setScissor=function(w,V,$,tt){w.isVector4?N.set(w.x,w.y,w.z,w.w):N.set(w,V,$,tt),Dt.scissor(E.copy(N).multiplyScalar(S).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(w){Dt.setScissorTest(et=w)},this.setOpaqueSort=function(w){x=w},this.setTransparentSort=function(w){C=w},this.getClearColor=function(w){return w.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(w=!0,V=!0,$=!0){let tt=0;if(w){let G=!1;if(I!==null){const mt=I.texture.format;G=mt===Fo||mt===No||mt===Uo}if(G){const mt=I.texture.type,yt=mt===Un||mt===mi||mt===Ls||mt===ns||mt===Lo||mt===Do,Ct=Ut.getClearColor(),D=Ut.getClearAlpha(),H=Ct.r,Z=Ct.g,dt=Ct.b;yt?(u[0]=H,u[1]=Z,u[2]=dt,u[3]=D,B.clearBufferuiv(B.COLOR,0,u)):(m[0]=H,m[1]=Z,m[2]=dt,m[3]=D,B.clearBufferiv(B.COLOR,0,m))}else tt|=B.COLOR_BUFFER_BIT}V&&(tt|=B.DEPTH_BUFFER_BIT,B.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),$&&(tt|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),wt.dispose(),Jt.dispose(),Ot.dispose(),y.dispose(),q.dispose(),ot.dispose(),Xt.dispose(),k.dispose(),At.dispose(),it.dispose(),it.removeEventListener("sessionstart",Bs),it.removeEventListener("sessionend",zs),gn.stop()};function ht(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const w=ie.autoReset,V=Rt.enabled,$=Rt.autoUpdate,tt=Rt.needsUpdate,G=Rt.type;St(),ie.autoReset=w,Rt.enabled=V,Rt.autoUpdate=$,Rt.needsUpdate=tt,Rt.type=G}function Tt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function te(w){const V=w.target;V.removeEventListener("dispose",te),he(V)}function he(w){Le(w),Ot.remove(w)}function Le(w){const V=Ot.get(w).programs;V!==void 0&&(V.forEach(function($){At.releaseProgram($)}),w.isShaderMaterial&&At.releaseShaderCache(w))}this.renderBufferDirect=function(w,V,$,tt,G,mt){V===null&&(V=Ht);const yt=G.isMesh&&G.matrixWorld.determinant()<0,Ct=Ei(w,V,$,tt,G);Dt.setMaterial(tt,yt);let D=$.index,H=1;if(tt.wireframe===!0){if(D=ut.getWireframeAttribute($),D===void 0)return;H=2}const Z=$.drawRange,dt=$.attributes.position;let It=Z.start*H,Yt=(Z.start+Z.count)*H;mt!==null&&(It=Math.max(It,mt.start*H),Yt=Math.min(Yt,(mt.start+mt.count)*H)),D!==null?(It=Math.max(It,0),Yt=Math.min(Yt,D.count)):dt!=null&&(It=Math.max(It,0),Yt=Math.min(Yt,dt.count));const Vt=Yt-It;if(Vt<0||Vt===1/0)return;Xt.setup(G,tt,Ct,$,D);let ye,kt=Mt;if(D!==null&&(ye=st.get(D),kt=Qt,kt.setIndex(ye)),G.isMesh)tt.wireframe===!0?(Dt.setLineWidth(tt.wireframeLinewidth*Zt()),kt.setMode(B.LINES)):kt.setMode(B.TRIANGLES);else if(G.isLine){let Pt=tt.linewidth;Pt===void 0&&(Pt=1),Dt.setLineWidth(Pt*Zt()),G.isLineSegments?kt.setMode(B.LINES):G.isLineLoop?kt.setMode(B.LINE_LOOP):kt.setMode(B.LINE_STRIP)}else G.isPoints?kt.setMode(B.POINTS):G.isSprite&&kt.setMode(B.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)kt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Ft.get("WEBGL_multi_draw"))kt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Pt=G._multiDrawStarts,Lt=G._multiDrawCounts,re=G._multiDrawCount,on=D?st.get(D).bytesPerElement:1,bi=Ot.get(tt).currentProgram.getUniforms();for(let qe=0;qe<re;qe++)bi.setValue(B,"_gl_DrawID",qe),kt.render(Pt[qe]/on,Lt[qe])}else if(G.isInstancedMesh)kt.renderInstances(It,Vt,G.count);else if($.isInstancedBufferGeometry){const Pt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Lt=Math.min($.instanceCount,Pt);kt.renderInstances(It,Vt,Lt)}else kt.render(It,Vt)};function se(w,V,$){w.transparent===!0&&w.side===dn&&w.forceSinglePass===!1?(w.side=Ge,w.needsUpdate=!0,Si(w,V,$),w.side=Kn,w.needsUpdate=!0,Si(w,V,$),w.side=dn):Si(w,V,$)}this.compile=function(w,V,$=null){$===null&&($=w),f=Jt.get($),f.init(V),R.push(f),$.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),w!==$&&w.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),f.setupLights();const tt=new Set;return w.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const mt=G.material;if(mt)if(Array.isArray(mt))for(let yt=0;yt<mt.length;yt++){const Ct=mt[yt];se(Ct,$,G),tt.add(Ct)}else se(mt,$,G),tt.add(mt)}),R.pop(),f=null,tt},this.compileAsync=function(w,V,$=null){const tt=this.compile(w,V,$);return new Promise(G=>{function mt(){if(tt.forEach(function(yt){Ot.get(yt).currentProgram.isReady()&&tt.delete(yt)}),tt.size===0){G(w);return}setTimeout(mt,10)}Ft.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let we=null;function an(w){we&&we(w)}function Bs(){gn.stop()}function zs(){gn.start()}const gn=new Kc;gn.setAnimationLoop(an),typeof self<"u"&&gn.setContext(self),this.setAnimationLoop=function(w){we=w,it.setAnimationLoop(w),w===null?gn.stop():gn.start()},it.addEventListener("sessionstart",Bs),it.addEventListener("sessionend",zs),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(V),V=it.getCamera()),w.isScene===!0&&w.onBeforeRender(b,w,V,I),f=Jt.get(w,R.length),f.init(V),R.push(f),ct.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),J.setFromProjectionMatrix(ct),j=this.localClippingEnabled,O=pt.init(this.clippingPlanes,j),M=wt.get(w,g.length),M.init(),g.push(M),it.enabled===!0&&it.isPresenting===!0){const mt=b.xr.getDepthSensingMesh();mt!==null&&yi(mt,V,-1/0,b.sortObjects)}yi(w,V,0,b.sortObjects),M.finish(),b.sortObjects===!0&&M.sort(x,C),zt=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,zt&&Ut.addToRenderList(M,w),this.info.render.frame++,O===!0&&pt.beginShadows();const $=f.state.shadowsArray;Rt.render($,w,V),O===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset();const tt=M.opaque,G=M.transmissive;if(f.setupLights(),V.isArrayCamera){const mt=V.cameras;if(G.length>0)for(let yt=0,Ct=mt.length;yt<Ct;yt++){const D=mt[yt];os(tt,G,w,D)}zt&&Ut.render(w);for(let yt=0,Ct=mt.length;yt<Ct;yt++){const D=mt[yt];ks(M,w,D,D.viewport)}}else G.length>0&&os(tt,G,w,V),zt&&Ut.render(w),ks(M,w,V);I!==null&&(P.updateMultisampleRenderTarget(I),P.updateRenderTargetMipmap(I)),w.isScene===!0&&w.onAfterRender(b,w,V),Xt.resetDefaultState(),X=-1,Q=null,R.pop(),R.length>0?(f=R[R.length-1],O===!0&&pt.setGlobalState(b.clippingPlanes,f.state.camera)):f=null,g.pop(),g.length>0?M=g[g.length-1]:M=null};function yi(w,V,$,tt){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||J.intersectsSprite(w)){tt&&bt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ct);const yt=ot.update(w),Ct=w.material;Ct.visible&&M.push(w,yt,Ct,$,bt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||J.intersectsObject(w))){const yt=ot.update(w),Ct=w.material;if(tt&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),bt.copy(w.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),bt.copy(yt.boundingSphere.center)),bt.applyMatrix4(w.matrixWorld).applyMatrix4(ct)),Array.isArray(Ct)){const D=yt.groups;for(let H=0,Z=D.length;H<Z;H++){const dt=D[H],It=Ct[dt.materialIndex];It&&It.visible&&M.push(w,yt,It,$,bt.z,dt)}}else Ct.visible&&M.push(w,yt,Ct,$,bt.z,null)}}const mt=w.children;for(let yt=0,Ct=mt.length;yt<Ct;yt++)yi(mt[yt],V,$,tt)}function ks(w,V,$,tt){const G=w.opaque,mt=w.transmissive,yt=w.transparent;f.setupLightsView($),O===!0&&pt.setGlobalState(b.clippingPlanes,$),tt&&Dt.viewport(v.copy(tt)),G.length>0&&ti(G,V,$),mt.length>0&&ti(mt,V,$),yt.length>0&&ti(yt,V,$),Dt.buffers.depth.setTest(!0),Dt.buffers.depth.setMask(!0),Dt.buffers.color.setMask(!0),Dt.setPolygonOffset(!1)}function os(w,V,$,tt){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[tt.id]===void 0&&(f.state.transmissionRenderTarget[tt.id]=new gi(1,1,{generateMipmaps:!0,type:Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float")?Fs:Un,minFilter:fi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));const mt=f.state.transmissionRenderTarget[tt.id],yt=tt.viewport||v;mt.setSize(yt.z,yt.w);const Ct=b.getRenderTarget();b.setRenderTarget(mt),b.getClearColor(A),z=b.getClearAlpha(),z<1&&b.setClearColor(16777215,.5),b.clear(),zt&&Ut.render($);const D=b.toneMapping;b.toneMapping=Zn;const H=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),f.setupLightsView(tt),O===!0&&pt.setGlobalState(b.clippingPlanes,tt),ti(w,$,tt),P.updateMultisampleRenderTarget(mt),P.updateRenderTargetMipmap(mt),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let Z=!1;for(let dt=0,It=V.length;dt<It;dt++){const Yt=V[dt],Vt=Yt.object,ye=Yt.geometry,kt=Yt.material,Pt=Yt.group;if(kt.side===dn&&Vt.layers.test(tt.layers)){const Lt=kt.side;kt.side=Ge,kt.needsUpdate=!0,ls(Vt,$,tt,ye,kt,Pt),kt.side=Lt,kt.needsUpdate=!0,Z=!0}}Z===!0&&(P.updateMultisampleRenderTarget(mt),P.updateRenderTargetMipmap(mt))}b.setRenderTarget(Ct),b.setClearColor(A,z),H!==void 0&&(tt.viewport=H),b.toneMapping=D}function ti(w,V,$){const tt=V.isScene===!0?V.overrideMaterial:null;for(let G=0,mt=w.length;G<mt;G++){const yt=w[G],Ct=yt.object,D=yt.geometry,H=tt===null?yt.material:tt,Z=yt.group;Ct.layers.test($.layers)&&ls(Ct,V,$,D,H,Z)}}function ls(w,V,$,tt,G,mt){w.onBeforeRender(b,V,$,tt,G,mt),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(b,V,$,tt,w,mt),G.transparent===!0&&G.side===dn&&G.forceSinglePass===!1?(G.side=Ge,G.needsUpdate=!0,b.renderBufferDirect($,V,tt,G,w,mt),G.side=Kn,G.needsUpdate=!0,b.renderBufferDirect($,V,tt,G,w,mt),G.side=dn):b.renderBufferDirect($,V,tt,G,w,mt),w.onAfterRender(b,V,$,tt,G,mt)}function Si(w,V,$){V.isScene!==!0&&(V=Ht);const tt=Ot.get(w),G=f.state.lights,mt=f.state.shadowsArray,yt=G.state.version,Ct=At.getParameters(w,G.state,mt,V,$),D=At.getProgramCacheKey(Ct);let H=tt.programs;tt.environment=w.isMeshStandardMaterial?V.environment:null,tt.fog=V.fog,tt.envMap=(w.isMeshStandardMaterial?q:y).get(w.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&w.envMap===null?V.environmentRotation:w.envMapRotation,H===void 0&&(w.addEventListener("dispose",te),H=new Map,tt.programs=H);let Z=H.get(D);if(Z!==void 0){if(tt.currentProgram===Z&&tt.lightsStateVersion===yt)return Vs(w,Ct),Z}else Ct.uniforms=At.getUniforms(w),w.onBeforeCompile(Ct,b),Z=At.acquireProgram(Ct,D),H.set(D,Z),tt.uniforms=Ct.uniforms;const dt=tt.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(dt.clippingPlanes=pt.uniform),Vs(w,Ct),tt.needsLights=hs(w),tt.lightsStateVersion=yt,tt.needsLights&&(dt.ambientLightColor.value=G.state.ambient,dt.lightProbe.value=G.state.probe,dt.directionalLights.value=G.state.directional,dt.directionalLightShadows.value=G.state.directionalShadow,dt.spotLights.value=G.state.spot,dt.spotLightShadows.value=G.state.spotShadow,dt.rectAreaLights.value=G.state.rectArea,dt.ltc_1.value=G.state.rectAreaLTC1,dt.ltc_2.value=G.state.rectAreaLTC2,dt.pointLights.value=G.state.point,dt.pointLightShadows.value=G.state.pointShadow,dt.hemisphereLights.value=G.state.hemi,dt.directionalShadowMap.value=G.state.directionalShadowMap,dt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,dt.spotShadowMap.value=G.state.spotShadowMap,dt.spotLightMatrix.value=G.state.spotLightMatrix,dt.spotLightMap.value=G.state.spotLightMap,dt.pointShadowMap.value=G.state.pointShadowMap,dt.pointShadowMatrix.value=G.state.pointShadowMatrix),tt.currentProgram=Z,tt.uniformsList=null,Z}function Hs(w){if(w.uniformsList===null){const V=w.currentProgram.getUniforms();w.uniformsList=Cr.seqWithValue(V.seq,w.uniforms)}return w.uniformsList}function Vs(w,V){const $=Ot.get(w);$.outputColorSpace=V.outputColorSpace,$.batching=V.batching,$.batchingColor=V.batchingColor,$.instancing=V.instancing,$.instancingColor=V.instancingColor,$.instancingMorph=V.instancingMorph,$.skinning=V.skinning,$.morphTargets=V.morphTargets,$.morphNormals=V.morphNormals,$.morphColors=V.morphColors,$.morphTargetsCount=V.morphTargetsCount,$.numClippingPlanes=V.numClippingPlanes,$.numIntersection=V.numClipIntersection,$.vertexAlphas=V.vertexAlphas,$.vertexTangents=V.vertexTangents,$.toneMapping=V.toneMapping}function Ei(w,V,$,tt,G){V.isScene!==!0&&(V=Ht),P.resetTextureUnits();const mt=V.fog,yt=tt.isMeshStandardMaterial?V.environment:null,Ct=I===null?b.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Qn,D=(tt.isMeshStandardMaterial?q:y).get(tt.envMap||yt),H=tt.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Z=!!$.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),dt=!!$.morphAttributes.position,It=!!$.morphAttributes.normal,Yt=!!$.morphAttributes.color;let Vt=Zn;tt.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Vt=b.toneMapping);const ye=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,kt=ye!==void 0?ye.length:0,Pt=Ot.get(tt),Lt=f.state.lights;if(O===!0&&(j===!0||w!==Q)){const Qe=w===Q&&tt.id===X;pt.setState(tt,w,Qe)}let re=!1;tt.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==Lt.state.version||Pt.outputColorSpace!==Ct||G.isBatchedMesh&&Pt.batching===!1||!G.isBatchedMesh&&Pt.batching===!0||G.isBatchedMesh&&Pt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Pt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Pt.instancing===!1||!G.isInstancedMesh&&Pt.instancing===!0||G.isSkinnedMesh&&Pt.skinning===!1||!G.isSkinnedMesh&&Pt.skinning===!0||G.isInstancedMesh&&Pt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Pt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Pt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Pt.instancingMorph===!1&&G.morphTexture!==null||Pt.envMap!==D||tt.fog===!0&&Pt.fog!==mt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==pt.numPlanes||Pt.numIntersection!==pt.numIntersection)||Pt.vertexAlphas!==H||Pt.vertexTangents!==Z||Pt.morphTargets!==dt||Pt.morphNormals!==It||Pt.morphColors!==Yt||Pt.toneMapping!==Vt||Pt.morphTargetsCount!==kt)&&(re=!0):(re=!0,Pt.__version=tt.version);let on=Pt.currentProgram;re===!0&&(on=Si(tt,V,G));let bi=!1,qe=!1,Vr=!1;const ve=on.getUniforms(),Fn=Pt.uniforms;if(Dt.useProgram(on.program)&&(bi=!0,qe=!0,Vr=!0),tt.id!==X&&(X=tt.id,qe=!0),bi||Q!==w){jt.reverseDepthBuffer?(at.copy(w.projectionMatrix),ku(at),Hu(at),ve.setValue(B,"projectionMatrix",at)):ve.setValue(B,"projectionMatrix",w.projectionMatrix),ve.setValue(B,"viewMatrix",w.matrixWorldInverse);const Qe=ve.map.cameraPosition;Qe!==void 0&&Qe.setValue(B,gt.setFromMatrixPosition(w.matrixWorld)),jt.logarithmicDepthBuffer&&ve.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&ve.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),Q!==w&&(Q=w,qe=!0,Vr=!0)}if(G.isSkinnedMesh){ve.setOptional(B,G,"bindMatrix"),ve.setOptional(B,G,"bindMatrixInverse");const Qe=G.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),ve.setValue(B,"boneTexture",Qe.boneTexture,P))}G.isBatchedMesh&&(ve.setOptional(B,G,"batchingTexture"),ve.setValue(B,"batchingTexture",G._matricesTexture,P),ve.setOptional(B,G,"batchingIdTexture"),ve.setValue(B,"batchingIdTexture",G._indirectTexture,P),ve.setOptional(B,G,"batchingColorTexture"),G._colorsTexture!==null&&ve.setValue(B,"batchingColorTexture",G._colorsTexture,P));const Gr=$.morphAttributes;if((Gr.position!==void 0||Gr.normal!==void 0||Gr.color!==void 0)&&Nt.update(G,$,on),(qe||Pt.receiveShadow!==G.receiveShadow)&&(Pt.receiveShadow=G.receiveShadow,ve.setValue(B,"receiveShadow",G.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(Fn.envMap.value=D,Fn.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1),tt.isMeshStandardMaterial&&tt.envMap===null&&V.environment!==null&&(Fn.envMapIntensity.value=V.environmentIntensity),qe&&(ve.setValue(B,"toneMappingExposure",b.toneMappingExposure),Pt.needsLights&&cs(Fn,Vr),mt&&tt.fog===!0&&vt.refreshFogUniforms(Fn,mt),vt.refreshMaterialUniforms(Fn,tt,S,_,f.state.transmissionRenderTarget[w.id]),Cr.upload(B,Hs(Pt),Fn,P)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(Cr.upload(B,Hs(Pt),Fn,P),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&ve.setValue(B,"center",G.center),ve.setValue(B,"modelViewMatrix",G.modelViewMatrix),ve.setValue(B,"normalMatrix",G.normalMatrix),ve.setValue(B,"modelMatrix",G.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const Qe=tt.uniformsGroups;for(let Wr=0,vh=Qe.length;Wr<vh;Wr++){const jo=Qe[Wr];k.update(jo,on),k.bind(jo,on)}}return on}function cs(w,V){w.ambientLightColor.needsUpdate=V,w.lightProbe.needsUpdate=V,w.directionalLights.needsUpdate=V,w.directionalLightShadows.needsUpdate=V,w.pointLights.needsUpdate=V,w.pointLightShadows.needsUpdate=V,w.spotLights.needsUpdate=V,w.spotLightShadows.needsUpdate=V,w.rectAreaLights.needsUpdate=V,w.hemisphereLights.needsUpdate=V}function hs(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,V,$){Ot.get(w.texture).__webglTexture=V,Ot.get(w.depthTexture).__webglTexture=$;const tt=Ot.get(w);tt.__hasExternalTextures=!0,tt.__autoAllocateDepthBuffer=$===void 0,tt.__autoAllocateDepthBuffer||Ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),tt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,V){const $=Ot.get(w);$.__webglFramebuffer=V,$.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(w,V=0,$=0){I=w,Y=V,U=$;let tt=!0,G=null,mt=!1,yt=!1;if(w){const D=Ot.get(w);if(D.__useDefaultFramebuffer!==void 0)Dt.bindFramebuffer(B.FRAMEBUFFER,null),tt=!1;else if(D.__webglFramebuffer===void 0)P.setupRenderTarget(w);else if(D.__hasExternalTextures)P.rebindTextures(w,Ot.get(w.texture).__webglTexture,Ot.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const dt=w.depthTexture;if(D.__boundDepthTexture!==dt){if(dt!==null&&Ot.has(dt)&&(w.width!==dt.image.width||w.height!==dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(w)}}const H=w.texture;(H.isData3DTexture||H.isDataArrayTexture||H.isCompressedArrayTexture)&&(yt=!0);const Z=Ot.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Z[V])?G=Z[V][$]:G=Z[V],mt=!0):w.samples>0&&P.useMultisampledRTT(w)===!1?G=Ot.get(w).__webglMultisampledFramebuffer:Array.isArray(Z)?G=Z[$]:G=Z,v.copy(w.viewport),E.copy(w.scissor),W=w.scissorTest}else v.copy(L).multiplyScalar(S).floor(),E.copy(N).multiplyScalar(S).floor(),W=et;if(Dt.bindFramebuffer(B.FRAMEBUFFER,G)&&tt&&Dt.drawBuffers(w,G),Dt.viewport(v),Dt.scissor(E),Dt.setScissorTest(W),mt){const D=Ot.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+V,D.__webglTexture,$)}else if(yt){const D=Ot.get(w.texture),H=V||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,D.__webglTexture,$||0,H)}X=-1},this.readRenderTargetPixels=function(w,V,$,tt,G,mt,yt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Ot.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&yt!==void 0&&(Ct=Ct[yt]),Ct){Dt.bindFramebuffer(B.FRAMEBUFFER,Ct);try{const D=w.texture,H=D.format,Z=D.type;if(!jt.textureFormatReadable(H)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!jt.textureTypeReadable(Z)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=w.width-tt&&$>=0&&$<=w.height-G&&B.readPixels(V,$,tt,G,Bt.convert(H),Bt.convert(Z),mt)}finally{const D=I!==null?Ot.get(I).__webglFramebuffer:null;Dt.bindFramebuffer(B.FRAMEBUFFER,D)}}},this.readRenderTargetPixelsAsync=async function(w,V,$,tt,G,mt,yt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=Ot.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&yt!==void 0&&(Ct=Ct[yt]),Ct){const D=w.texture,H=D.format,Z=D.type;if(!jt.textureFormatReadable(H))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!jt.textureTypeReadable(Z))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=w.width-tt&&$>=0&&$<=w.height-G){Dt.bindFramebuffer(B.FRAMEBUFFER,Ct);const dt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,dt),B.bufferData(B.PIXEL_PACK_BUFFER,mt.byteLength,B.STREAM_READ),B.readPixels(V,$,tt,G,Bt.convert(H),Bt.convert(Z),0);const It=I!==null?Ot.get(I).__webglFramebuffer:null;Dt.bindFramebuffer(B.FRAMEBUFFER,It);const Yt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await zu(B,Yt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,dt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,mt),B.deleteBuffer(dt),B.deleteSync(Yt),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,V=null,$=0){w.isTexture!==!0&&(Rr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1]);const tt=Math.pow(2,-$),G=Math.floor(w.image.width*tt),mt=Math.floor(w.image.height*tt),yt=V!==null?V.x:0,Ct=V!==null?V.y:0;P.setTexture2D(w,0),B.copyTexSubImage2D(B.TEXTURE_2D,$,0,0,yt,Ct,G,mt),Dt.unbindTexture()},this.copyTextureToTexture=function(w,V,$=null,tt=null,G=0){w.isTexture!==!0&&(Rr("WebGLRenderer: copyTextureToTexture function signature has changed."),tt=arguments[0]||null,w=arguments[1],V=arguments[2],G=arguments[3]||0,$=null);let mt,yt,Ct,D,H,Z;$!==null?(mt=$.max.x-$.min.x,yt=$.max.y-$.min.y,Ct=$.min.x,D=$.min.y):(mt=w.image.width,yt=w.image.height,Ct=0,D=0),tt!==null?(H=tt.x,Z=tt.y):(H=0,Z=0);const dt=Bt.convert(V.format),It=Bt.convert(V.type);P.setTexture2D(V,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,V.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,V.unpackAlignment);const Yt=B.getParameter(B.UNPACK_ROW_LENGTH),Vt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),ye=B.getParameter(B.UNPACK_SKIP_PIXELS),kt=B.getParameter(B.UNPACK_SKIP_ROWS),Pt=B.getParameter(B.UNPACK_SKIP_IMAGES),Lt=w.isCompressedTexture?w.mipmaps[G]:w.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,Lt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Lt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ct),B.pixelStorei(B.UNPACK_SKIP_ROWS,D),w.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,G,H,Z,mt,yt,dt,It,Lt.data):w.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,G,H,Z,Lt.width,Lt.height,dt,Lt.data):B.texSubImage2D(B.TEXTURE_2D,G,H,Z,mt,yt,dt,It,Lt),B.pixelStorei(B.UNPACK_ROW_LENGTH,Yt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Vt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ye),B.pixelStorei(B.UNPACK_SKIP_ROWS,kt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Pt),G===0&&V.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),Dt.unbindTexture()},this.copyTextureToTexture3D=function(w,V,$=null,tt=null,G=0){w.isTexture!==!0&&(Rr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,tt=arguments[1]||null,w=arguments[2],V=arguments[3],G=arguments[4]||0);let mt,yt,Ct,D,H,Z,dt,It,Yt;const Vt=w.isCompressedTexture?w.mipmaps[G]:w.image;$!==null?(mt=$.max.x-$.min.x,yt=$.max.y-$.min.y,Ct=$.max.z-$.min.z,D=$.min.x,H=$.min.y,Z=$.min.z):(mt=Vt.width,yt=Vt.height,Ct=Vt.depth,D=0,H=0,Z=0),tt!==null?(dt=tt.x,It=tt.y,Yt=tt.z):(dt=0,It=0,Yt=0);const ye=Bt.convert(V.format),kt=Bt.convert(V.type);let Pt;if(V.isData3DTexture)P.setTexture3D(V,0),Pt=B.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)P.setTexture2DArray(V,0),Pt=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,V.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,V.unpackAlignment);const Lt=B.getParameter(B.UNPACK_ROW_LENGTH),re=B.getParameter(B.UNPACK_IMAGE_HEIGHT),on=B.getParameter(B.UNPACK_SKIP_PIXELS),bi=B.getParameter(B.UNPACK_SKIP_ROWS),qe=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Vt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Vt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,D),B.pixelStorei(B.UNPACK_SKIP_ROWS,H),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Z),w.isDataTexture||w.isData3DTexture?B.texSubImage3D(Pt,G,dt,It,Yt,mt,yt,Ct,ye,kt,Vt.data):V.isCompressedArrayTexture?B.compressedTexSubImage3D(Pt,G,dt,It,Yt,mt,yt,Ct,ye,Vt.data):B.texSubImage3D(Pt,G,dt,It,Yt,mt,yt,Ct,ye,kt,Vt),B.pixelStorei(B.UNPACK_ROW_LENGTH,Lt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,re),B.pixelStorei(B.UNPACK_SKIP_PIXELS,on),B.pixelStorei(B.UNPACK_SKIP_ROWS,bi),B.pixelStorei(B.UNPACK_SKIP_IMAGES,qe),G===0&&V.generateMipmaps&&B.generateMipmap(Pt),Dt.unbindTexture()},this.initRenderTarget=function(w){Ot.get(w).__webglFramebuffer===void 0&&P.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?P.setTextureCube(w,0):w.isData3DTexture?P.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?P.setTexture2DArray(w,0):P.setTexture2D(w,0),Dt.unbindTexture()},this.resetState=function(){Y=0,U=0,I=null,Dt.reset(),Xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Oo?"display-p3":"srgb",e.unpackColorSpace=le.workingColorSpace===zr?"display-p3":"srgb"}}class Go{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Wt(t),this.near=e,this.far=n}clone(){return new Go(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ih extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Q0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=yo,this.updateRanges=[],this.version=0,this.uuid=bn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ze=new F;class Fr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=fn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=fn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=fn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=fn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Je(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Fr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Wo extends rs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ki;const gs=new F,Hi=new F,Vi=new F,Gi=new _t,_s=new _t,sh=new oe,dr=new F,vs=new F,fr=new F,Zl=new _t,Ea=new _t,Kl=new _t;class rh extends Ce{constructor(t=new Wo){if(super(),this.isSprite=!0,this.type="Sprite",ki===void 0){ki=new Ye;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Q0(e,5);ki.setIndex([0,1,2,0,2,3]),ki.setAttribute("position",new Fr(n,3,0,!1)),ki.setAttribute("uv",new Fr(n,2,3,!1))}this.geometry=ki,this.material=t,this.center=new _t(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hi.setFromMatrixScale(this.matrixWorld),sh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Vi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hi.multiplyScalar(-Vi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;pr(dr.set(-.5,-.5,0),Vi,a,Hi,s,r),pr(vs.set(.5,-.5,0),Vi,a,Hi,s,r),pr(fr.set(.5,.5,0),Vi,a,Hi,s,r),Zl.set(0,0),Ea.set(1,0),Kl.set(1,1);let o=t.ray.intersectTriangle(dr,vs,fr,!1,gs);if(o===null&&(pr(vs.set(-.5,.5,0),Vi,a,Hi,s,r),Ea.set(0,1),o=t.ray.intersectTriangle(dr,fr,vs,!1,gs),o===null))return;const l=t.ray.origin.distanceTo(gs);l<t.near||l>t.far||e.push({distance:l,point:gs.clone(),uv:sn.getInterpolation(gs,dr,vs,fr,Zl,Ea,Kl,new _t),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function pr(i,t,e,n,s,r){Gi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(_s.x=r*Gi.x-s*Gi.y,_s.y=s*Gi.x+r*Gi.y):_s.copy(Gi),i.copy(t),i.x+=_s.x,i.y+=_s.y,i.applyMatrix4(sh)}class tg extends Oe{constructor(t=null,e=1,n=1,s,r,a,o,l,h=Xe,d=Xe,p,c){super(null,a,o,l,h,d,s,r,p,c),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jl extends Je{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Wi=new oe,Jl=new oe,mr=[],Ql=new xi,eg=new oe,xs=new Gt,Ms=new Os;class ah extends Gt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new jl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,eg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new xi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Wi),Ql.copy(t.boundingBox).applyMatrix4(Wi),this.boundingBox.union(Ql)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Os),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Wi),Ms.copy(t.boundingSphere).applyMatrix4(Wi),this.boundingSphere.union(Ms)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(xs.geometry=this.geometry,xs.material=this.material,xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ms.copy(this.boundingSphere),Ms.applyMatrix4(n),t.ray.intersectsSphere(Ms)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Wi),Jl.multiplyMatrices(n,Wi),xs.matrixWorld=Jl,xs.raycast(t,mr);for(let a=0,o=mr.length;a<o;a++){const l=mr[a];l.instanceId=r,l.object=this,e.push(l)}mr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new jl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new tg(new Float32Array(s*this.count),s,this.count,Io,Sn));const r=this.morphTexture.source.data.data;let a=0;for(let h=0;h<n.length;h++)a+=n[h];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Mi extends Oe{constructor(t,e,n,s,r,a,o,l,h){super(t,e,n,s,r,a,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,h;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),h=n[s]-a,h<0)o=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const d=n[s],c=n[s+1]-d,u=(a-d)/c;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new _t:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new F,s=[],r=[],a=[],o=new F,l=new oe;for(let u=0;u<=t;u++){const m=u/t;s[u]=this.getTangentAt(m,new F)}r[0]=new F,a[0]=new F;let h=Number.MAX_VALUE;const d=Math.abs(s[0].x),p=Math.abs(s[0].y),c=Math.abs(s[0].z);d<=h&&(h=d,n.set(1,0,0)),p<=h&&(h=p,n.set(0,1,0)),c<=h&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Re(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(o,m))}a[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(Re(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(u=-u);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],u*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Xo extends wn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new _t){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const d=Math.cos(this.aRotation),p=Math.sin(this.aRotation),c=l-this.aX,u=h-this.aY;l=c*d-u*p+this.aX,h=c*p+u*d+this.aY}return n.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ng extends Xo{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Yo(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,h){s(a,o,h*(o-r),h*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,h,d,p){let c=(a-r)/h-(o-r)/(h+d)+(o-a)/d,u=(o-a)/d-(l-a)/(d+p)+(l-o)/p;c*=d,u*=d,s(a,o,c,u)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const gr=new F,ba=new Yo,wa=new Yo,Ta=new Yo;class ig extends wn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new F){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let h,d;this.closed||o>0?h=s[(o-1)%r]:(gr.subVectors(s[0],s[1]).add(s[0]),h=gr);const p=s[o%r],c=s[(o+1)%r];if(this.closed||o+2<r?d=s[(o+2)%r]:(gr.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=gr),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let m=Math.pow(h.distanceToSquared(p),u),M=Math.pow(p.distanceToSquared(c),u),f=Math.pow(c.distanceToSquared(d),u);M<1e-4&&(M=1),m<1e-4&&(m=M),f<1e-4&&(f=M),ba.initNonuniformCatmullRom(h.x,p.x,c.x,d.x,m,M,f),wa.initNonuniformCatmullRom(h.y,p.y,c.y,d.y,m,M,f),Ta.initNonuniformCatmullRom(h.z,p.z,c.z,d.z,m,M,f)}else this.curveType==="catmullrom"&&(ba.initCatmullRom(h.x,p.x,c.x,d.x,this.tension),wa.initCatmullRom(h.y,p.y,c.y,d.y,this.tension),Ta.initCatmullRom(h.z,p.z,c.z,d.z,this.tension));return n.set(ba.calc(l),wa.calc(l),Ta.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new F().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function tc(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function sg(i,t){const e=1-i;return e*e*t}function rg(i,t){return 2*(1-i)*i*t}function ag(i,t){return i*i*t}function Ts(i,t,e,n){return sg(i,t)+rg(i,e)+ag(i,n)}function og(i,t){const e=1-i;return e*e*e*t}function lg(i,t){const e=1-i;return 3*e*e*i*t}function cg(i,t){return 3*(1-i)*i*i*t}function hg(i,t){return i*i*i*t}function As(i,t,e,n,s){return og(i,t)+lg(i,e)+cg(i,n)+hg(i,s)}class oh extends wn{constructor(t=new _t,e=new _t,n=new _t,s=new _t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new _t){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(As(t,s.x,r.x,a.x,o.x),As(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ug extends wn{constructor(t=new F,e=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new F){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(As(t,s.x,r.x,a.x,o.x),As(t,s.y,r.y,a.y,o.y),As(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class lh extends wn{constructor(t=new _t,e=new _t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new _t){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class dg extends wn{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ch extends wn{constructor(t=new _t,e=new _t,n=new _t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new _t){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ts(t,s.x,r.x,a.x),Ts(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fg extends wn{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ts(t,s.x,r.x,a.x),Ts(t,s.y,r.y,a.y),Ts(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hh extends wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new _t){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],h=s[a],d=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return n.set(tc(o,l.x,h.x,d.x,p.x),tc(o,l.y,h.y,d.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new _t().fromArray(s))}return this}}var ec=Object.freeze({__proto__:null,ArcCurve:ng,CatmullRomCurve3:ig,CubicBezierCurve:oh,CubicBezierCurve3:ug,EllipseCurve:Xo,LineCurve:lh,LineCurve3:dg,QuadraticBezierCurve:ch,QuadraticBezierCurve3:fg,SplineCurve:hh});class pg extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ec[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),h=l===0?0:1-a/l;return o.getPointAt(h,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let h=0;h<l.length;h++){const d=l[h];n&&n.equals(d)||(e.push(d),n=d)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new ec[s.type]().fromJSON(s))}return this}}class bo extends pg{constructor(t){super(),this.type="Path",this.currentPoint=new _t,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new lh(this.currentPoint.clone(),new _t(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new ch(this.currentPoint.clone(),new _t(t,e),new _t(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new oh(this.currentPoint.clone(),new _t(t,e),new _t(n,s),new _t(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new hh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const h=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+h,e+d,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const h=new Xo(t,e,n,s,r,a,o,l);if(this.curves.length>0){const p=h.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(h);const d=h.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class He extends Ye{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const h=this;s=Math.floor(s),r=Math.floor(r);const d=[],p=[],c=[],u=[];let m=0;const M=[],f=n/2;let g=0;R(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(d),this.setAttribute("position",new Me(p,3)),this.setAttribute("normal",new Me(c,3)),this.setAttribute("uv",new Me(u,2));function R(){const T=new F,Y=new F;let U=0;const I=(e-t)/n;for(let X=0;X<=r;X++){const Q=[],v=X/r,E=v*(e-t)+t;for(let W=0;W<=s;W++){const A=W/s,z=A*l+o,K=Math.sin(z),_=Math.cos(z);Y.x=E*K,Y.y=-v*n+f,Y.z=E*_,p.push(Y.x,Y.y,Y.z),T.set(K,I,_).normalize(),c.push(T.x,T.y,T.z),u.push(A,1-v),Q.push(m++)}M.push(Q)}for(let X=0;X<s;X++)for(let Q=0;Q<r;Q++){const v=M[Q][X],E=M[Q+1][X],W=M[Q+1][X+1],A=M[Q][X+1];t>0&&(d.push(v,E,A),U+=3),e>0&&(d.push(E,W,A),U+=3)}h.addGroup(g,U,0),g+=U}function b(T){const Y=m,U=new _t,I=new F;let X=0;const Q=T===!0?t:e,v=T===!0?1:-1;for(let W=1;W<=s;W++)p.push(0,f*v,0),c.push(0,v,0),u.push(.5,.5),m++;const E=m;for(let W=0;W<=s;W++){const z=W/s*l+o,K=Math.cos(z),_=Math.sin(z);I.x=Q*_,I.y=f*v,I.z=Q*K,p.push(I.x,I.y,I.z),c.push(0,v,0),U.x=K*.5+.5,U.y=_*.5*v+.5,u.push(U.x,U.y),m++}for(let W=0;W<s;W++){const A=Y+W,z=E+W;T===!0?d.push(z,z+1,A):d.push(z+1,z,A),X+=3}h.addGroup(g,X,T===!0?1:2),g+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new He(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Or extends He{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Or(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class uh extends bo{constructor(t){super(t),this.uuid=bn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new bo().fromJSON(s))}return this}}const mg={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=dh(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,h,d,p,c,u;if(n&&(r=Mg(i,t,r,e)),i.length>80*e){o=h=i[0],l=d=i[1];for(let m=e;m<s;m+=e)p=i[m],c=i[m+1],p<o&&(o=p),c<l&&(l=c),p>h&&(h=p),c>d&&(d=c);u=Math.max(h-o,d-l),u=u!==0?32767/u:0}return Is(r,a,e,o,l,u,0),a}};function dh(i,t,e,n,s){let r,a;if(s===Lg(i,t,e,n)>0)for(r=t;r<e;r+=n)a=nc(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=nc(r,i[r],i[r+1],a);return a&&Hr(a,a.next)&&(Ns(a),a=a.next),a}function _i(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Hr(e,e.next)||ge(e.prev,e,e.next)===0)){if(Ns(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Is(i,t,e,n,s,r,a){if(!i)return;!a&&r&&wg(i,n,s,r);let o=i,l,h;for(;i.prev!==i.next;){if(l=i.prev,h=i.next,r?_g(i,n,s,r):gg(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(h.i/e|0),Ns(i),i=h.next,o=h.next;continue}if(i=h,i===o){a?a===1?(i=vg(_i(i),t,e),Is(i,t,e,n,s,r,2)):a===2&&xg(i,t,e,n,s,r):Is(_i(i),t,e,n,s,r,1);break}}}function gg(i){const t=i.prev,e=i,n=i.next;if(ge(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,h=n.y,d=s<r?s<a?s:a:r<a?r:a,p=o<l?o<h?o:h:l<h?l:h,c=s>r?s>a?s:a:r>a?r:a,u=o>l?o>h?o:h:l>h?l:h;let m=n.next;for(;m!==t;){if(m.x>=d&&m.x<=c&&m.y>=p&&m.y<=u&&Zi(s,o,r,l,a,h,m.x,m.y)&&ge(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function _g(i,t,e,n){const s=i.prev,r=i,a=i.next;if(ge(s,r,a)>=0)return!1;const o=s.x,l=r.x,h=a.x,d=s.y,p=r.y,c=a.y,u=o<l?o<h?o:h:l<h?l:h,m=d<p?d<c?d:c:p<c?p:c,M=o>l?o>h?o:h:l>h?l:h,f=d>p?d>c?d:c:p>c?p:c,g=wo(u,m,t,e,n),R=wo(M,f,t,e,n);let b=i.prevZ,T=i.nextZ;for(;b&&b.z>=g&&T&&T.z<=R;){if(b.x>=u&&b.x<=M&&b.y>=m&&b.y<=f&&b!==s&&b!==a&&Zi(o,d,l,p,h,c,b.x,b.y)&&ge(b.prev,b,b.next)>=0||(b=b.prevZ,T.x>=u&&T.x<=M&&T.y>=m&&T.y<=f&&T!==s&&T!==a&&Zi(o,d,l,p,h,c,T.x,T.y)&&ge(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;b&&b.z>=g;){if(b.x>=u&&b.x<=M&&b.y>=m&&b.y<=f&&b!==s&&b!==a&&Zi(o,d,l,p,h,c,b.x,b.y)&&ge(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;T&&T.z<=R;){if(T.x>=u&&T.x<=M&&T.y>=m&&T.y<=f&&T!==s&&T!==a&&Zi(o,d,l,p,h,c,T.x,T.y)&&ge(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function vg(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Hr(s,r)&&fh(s,n,n.next,r)&&Us(s,r)&&Us(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ns(n),Ns(n.next),n=i=r),n=n.next}while(n!==i);return _i(n)}function xg(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Rg(a,o)){let l=ph(a,o);a=_i(a,a.next),l=_i(l,l.next),Is(a,t,e,n,s,r,0),Is(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Mg(i,t,e,n){const s=[];let r,a,o,l,h;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,h=dh(i,o,l,n,!1),h===h.next&&(h.steiner=!0),s.push(Ag(h));for(s.sort(yg),r=0;r<s.length;r++)e=Sg(s[r],e);return e}function yg(i,t){return i.x-t.x}function Sg(i,t){const e=Eg(i,t);if(!e)return t;const n=ph(e,i);return _i(n,n.next),_i(e,e.next)}function Eg(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const c=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(c<=r&&c>n&&(n=c,s=e.x<e.next.x?e:e.next,c===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,l=s.x,h=s.y;let d=1/0,p;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Zi(a<h?r:n,a,l,h,a<h?n:r,a,e.x,e.y)&&(p=Math.abs(a-e.y)/(r-e.x),Us(e,i)&&(p<d||p===d&&(e.x>s.x||e.x===s.x&&bg(s,e)))&&(s=e,d=p)),e=e.next;while(e!==o);return s}function bg(i,t){return ge(i.prev,i,t.prev)<0&&ge(t.next,i,i.next)<0}function wg(i,t,e,n){let s=i;do s.z===0&&(s.z=wo(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Tg(s)}function Tg(i){let t,e,n,s,r,a,o,l,h=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<h&&(o++,n=n.nextZ,!!n);t++);for(l=h;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,h*=2}while(a>1);return i}function wo(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Ag(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Zi(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Rg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Cg(i,t)&&(Us(i,t)&&Us(t,i)&&Pg(i,t)&&(ge(i.prev,i,t.prev)||ge(i,t.prev,t))||Hr(i,t)&&ge(i.prev,i,i.next)>0&&ge(t.prev,t,t.next)>0)}function ge(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Hr(i,t){return i.x===t.x&&i.y===t.y}function fh(i,t,e,n){const s=vr(ge(i,t,e)),r=vr(ge(i,t,n)),a=vr(ge(e,n,i)),o=vr(ge(e,n,t));return!!(s!==r&&a!==o||s===0&&_r(i,e,t)||r===0&&_r(i,n,t)||a===0&&_r(e,i,n)||o===0&&_r(e,t,n))}function _r(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function vr(i){return i>0?1:i<0?-1:0}function Cg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&fh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Us(i,t){return ge(i.prev,i,i.next)<0?ge(i,t,i.next)>=0&&ge(i,i.prev,t)>=0:ge(i,t,i.prev)<0||ge(i,i.next,t)<0}function Pg(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ph(i,t){const e=new To(i.i,i.x,i.y),n=new To(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function nc(i,t,e,n){const s=new To(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ns(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function To(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Lg(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Rs{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Rs.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];ic(t),sc(n,t);let a=t.length;e.forEach(ic);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,sc(n,e[l]);const o=mg.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function ic(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function sc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class qo extends Ye{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],h=[],d=[];let p=t;const c=(e-t)/s,u=new F,m=new _t;for(let M=0;M<=s;M++){for(let f=0;f<=n;f++){const g=r+f/n*a;u.x=p*Math.cos(g),u.y=p*Math.sin(g),l.push(u.x,u.y,u.z),h.push(0,0,1),m.x=(u.x/e+1)/2,m.y=(u.y/e+1)/2,d.push(m.x,m.y)}p+=c}for(let M=0;M<s;M++){const f=M*(n+1);for(let g=0;g<n;g++){const R=g+f,b=R,T=R+n+1,Y=R+n+2,U=R+1;o.push(b,T,U),o.push(T,Y,U)}}this.setIndex(o),this.setAttribute("position",new Me(l,3)),this.setAttribute("normal",new Me(h,3)),this.setAttribute("uv",new Me(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Cs extends Ye{constructor(t=new uh([new _t(0,.5),new _t(-.5,-.5),new _t(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let d=0;d<t.length;d++)h(t[d]),this.addGroup(o,l,d),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Me(s,3)),this.setAttribute("normal",new Me(r,3)),this.setAttribute("uv",new Me(a,2));function h(d){const p=s.length/3,c=d.extractPoints(e);let u=c.shape;const m=c.holes;Rs.isClockWise(u)===!1&&(u=u.reverse());for(let f=0,g=m.length;f<g;f++){const R=m[f];Rs.isClockWise(R)===!0&&(m[f]=R.reverse())}const M=Rs.triangulateShape(u,m);for(let f=0,g=m.length;f<g;f++){const R=m[f];u=u.concat(R)}for(let f=0,g=u.length;f<g;f++){const R=u[f];s.push(R.x,R.y,0),r.push(0,0,1),a.push(R.x,R.y)}for(let f=0,g=M.length;f<g;f++){const R=M[f],b=R[0]+p,T=R[1]+p,Y=R[2]+p;n.push(b,T,Y),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Dg(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];n.push(a)}return new Cs(n,t.curveSegments)}}function Dg(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Yn extends Ye{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let h=0;const d=[],p=new F,c=new F,u=[],m=[],M=[],f=[];for(let g=0;g<=n;g++){const R=[],b=g/n;let T=0;g===0&&a===0?T=.5/e:g===n&&l===Math.PI&&(T=-.5/e);for(let Y=0;Y<=e;Y++){const U=Y/e;p.x=-t*Math.cos(s+U*r)*Math.sin(a+b*o),p.y=t*Math.cos(a+b*o),p.z=t*Math.sin(s+U*r)*Math.sin(a+b*o),m.push(p.x,p.y,p.z),c.copy(p).normalize(),M.push(c.x,c.y,c.z),f.push(U+T,1-b),R.push(h++)}d.push(R)}for(let g=0;g<n;g++)for(let R=0;R<e;R++){const b=d[g][R+1],T=d[g][R],Y=d[g+1][R],U=d[g+1][R+1];(g!==0||a>0)&&u.push(b,T,U),(g!==n-1||l<Math.PI)&&u.push(T,Y,U)}this.setIndex(u),this.setAttribute("position",new Me(m,3)),this.setAttribute("normal",new Me(M,3)),this.setAttribute("uv",new Me(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ne extends rs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zc,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $o extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Ig extends $o{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Aa=new oe,rc=new F,ac=new F;class mh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ho,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;rc.setFromMatrixPosition(t.matrixWorld),e.position.copy(rc),ac.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ac),e.updateMatrixWorld(),Aa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Aa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Aa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const oc=new oe,ys=new F,Ra=new F;class Ug extends mh{constructor(){super(new je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _t(4,2),this._viewportCount=6,this._viewports=[new fe(2,1,1,1),new fe(0,1,1,1),new fe(3,1,1,1),new fe(1,1,1,1),new fe(3,0,1,1),new fe(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ys.setFromMatrixPosition(t.matrixWorld),n.position.copy(ys),Ra.copy(n.position),Ra.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ra),n.updateMatrixWorld(),s.makeTranslation(-ys.x,-ys.y,-ys.z),oc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oc)}}class Ng extends $o{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ug}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Fg extends mh{constructor(){super(new jc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Og extends $o{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new Fg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Bg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=lc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=lc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function lc(){return performance.now()}const cc=new oe;class zg{constructor(t,e,n=0,s=1/0){this.ray=new zo(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ko,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return cc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cc),this}intersectObject(t,e=!0,n=[]){return Ao(t,this,n,e),n.sort(hc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ao(t[s],this,n,e);return n.sort(hc),n}}function hc(i,t){return i.distance-t.distance}function Ao(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Ao(r[a],t,e,!0)}}class uc{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Re(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class kg extends vi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Co}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Co);const dc={type:"change"},Zo={type:"start"},gh={type:"end"},xr=new zo,fc=new Xn,Hg=Math.cos(70*Mn.DEG2RAD),Se=new F,We=2*Math.PI,de={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ca=1e-6;class Vg extends kg{constructor(t,e=null){super(t,e),this.state=de.NONE,this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ki.ROTATE,MIDDLE:Ki.DOLLY,RIGHT:Ki.PAN},this.touches={ONE:qi.ROTATE,TWO:qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new Nn,this._lastTargetPosition=new F,this._quat=new Nn().setFromUnitVectors(t.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new uc,this._sphericalDelta=new uc,this._scale=1,this._panOffset=new F,this._rotateStart=new _t,this._rotateEnd=new _t,this._rotateDelta=new _t,this._panStart=new _t,this._panEnd=new _t,this._panDelta=new _t,this._dollyStart=new _t,this._dollyEnd=new _t,this._dollyDelta=new _t,this._dollyDirection=new F,this._mouse=new _t,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Wg.bind(this),this._onPointerDown=Gg.bind(this),this._onPointerUp=Xg.bind(this),this._onContextMenu=Jg.bind(this),this._onMouseWheel=$g.bind(this),this._onKeyDown=Zg.bind(this),this._onTouchStart=Kg.bind(this),this._onTouchMove=jg.bind(this),this._onMouseDown=Yg.bind(this),this._onMouseMove=qg.bind(this),this._interceptControlDown=Qg.bind(this),this._interceptControlUp=t_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(dc),this.update(),this.state=de.NONE}update(t=null){const e=this.object.position;Se.copy(e).sub(this.target),Se.applyQuaternion(this._quat),this._spherical.setFromVector3(Se),this.autoRotate&&this.state===de.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=We:n>Math.PI&&(n-=We),s<-Math.PI?s+=We:s>Math.PI&&(s-=We),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Se.setFromSpherical(this._spherical),Se.applyQuaternion(this._quatInverse),e.copy(this.target).add(Se),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Se.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new F(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const h=new F(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(o),this.object.updateMatrixWorld(),a=Se.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(xr.origin.copy(this.object.position),xr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xr.direction))<Hg?this.object.lookAt(this.target):(fc.setFromNormalAndCoplanarPoint(this.object.up,this.target),xr.intersectPlane(fc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ca||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ca||this._lastTargetPosition.distanceToSquared(this.target)>Ca?(this.dispatchEvent(dc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?We/60*this.autoRotateSpeed*t:We/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Se.setFromMatrixColumn(e,0),Se.multiplyScalar(-t),this._panOffset.add(Se)}_panUp(t,e){this.screenSpacePanning===!0?Se.setFromMatrixColumn(e,1):(Se.setFromMatrixColumn(e,0),Se.crossVectors(this.object.up,Se)),Se.multiplyScalar(t),this._panOffset.add(Se)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Se.copy(s).sub(this.target);let r=Se.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(We*this._rotateDelta.x/e.clientHeight),this._rotateUp(We*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(We*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-We*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(We*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-We*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(We*this._rotateDelta.x/e.clientHeight),this._rotateUp(We*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new _t,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Gg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Wg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Xg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(gh),this.state=de.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Yg(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ki.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=de.DOLLY;break;case Ki.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=de.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=de.ROTATE}break;case Ki.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=de.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=de.PAN}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(Zo)}function qg(i){switch(this.state){case de.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case de.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case de.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function $g(i){this.enabled===!1||this.enableZoom===!1||this.state!==de.NONE||(i.preventDefault(),this.dispatchEvent(Zo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(gh))}function Zg(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Kg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case qi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=de.TOUCH_ROTATE;break;case qi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=de.TOUCH_PAN;break;default:this.state=de.NONE}break;case 2:switch(this.touches.TWO){case qi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=de.TOUCH_DOLLY_PAN;break;case qi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=de.TOUCH_DOLLY_ROTATE;break;default:this.state=de.NONE}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(Zo)}function jg(i){switch(this._trackPointer(i),this.state){case de.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case de.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case de.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case de.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=de.NONE}}function Jg(i){this.enabled!==!1&&i.preventDefault()}function Qg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function t_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class e_ extends ih{constructor(){super();const t=new _e;t.deleteAttribute("uv");const e=new Ne({side:Ge}),n=new Ne,s=new Ng(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new Gt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new Gt(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new Gt(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new Gt(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const h=new Gt(t,n);h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),this.add(h);const d=new Gt(t,n);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);const p=new Gt(t,n);p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);const c=new Gt(t,Xi(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const u=new Gt(t,Xi(50));u.position.set(-16.109,18.021,-8.207),u.scale.set(.1,2.425,2.751),this.add(u);const m=new Gt(t,Xi(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);const M=new Gt(t,Xi(43));M.position.set(-.462,8.89,14.52),M.scale.set(4.38,5.441,.088),this.add(M);const f=new Gt(t,Xi(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const g=new Gt(t,Xi(100));g.position.set(0,20,0),g.scale.set(1,.1,1),this.add(g)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Xi(i){const t=new mn;return t.color.setScalar(i),t}const Ps='Inter, "Segoe UI", Roboto, Arial, sans-serif',Mr=2;function Pa(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}const La=(i,t,e)=>new Wt(i).lerp(new Wt(t),e).getStyle();function n_({title:i,number:t=null,status:e="",color:n=null,muted:s=!1}){const r=document.createElement("canvas"),a=r.getContext("2d"),o=`${s?500:600} ${s?11.5:13}px ${Ps}`,l=`700 13px ${Ps}`,h=`600 11px ${Ps}`,d=String(i||""),p=t!=null?String(t):"";a.font=o;const c=a.measureText(d).width;a.font=l;const u=p?a.measureText(p).width+6:0;a.font=h;const m=e?a.measureText(e).width:0,M=s?0:13,f=s?20:24,g=Math.ceil(9+M+u+c+10),R=e?18:0,b=e?Math.ceil(m+16):0,T=e?3:0,Y=9,U=4,I=Math.min(520,Math.max(g,b)+U*2),X=U+f+T+R+Y+1;r.width=I*Mr,r.height=X*Mr,a.scale(Mr,Mr);const Q=(I-Math.min(g,I-U*2))/2,v=Math.min(g,I-U*2);a.save(),a.shadowColor="rgba(15, 23, 42, 0.28)",a.shadowBlur=5,a.shadowOffsetY=1.5,Pa(a,Q,U,v,f,f/2),a.fillStyle=s?"rgba(255, 255, 255, 0.86)":"#ffffff",a.fill(),a.restore(),Pa(a,Q+.5,U+.5,v-1,f-1,f/2),a.strokeStyle="rgba(15, 23, 42, 0.12)",a.lineWidth=1,a.stroke();let E=Q+9;const W=U+f/2;M&&(a.beginPath(),a.arc(E+4,W,4,0,Math.PI*2),a.fillStyle=n||"#94a3b8",a.fill(),E+=M),a.textBaseline="middle",p&&(a.font=l,a.fillStyle="#0f172a",a.fillText(p,E,W+.5),E+=u),a.font=o,a.fillStyle=s?"#475569":"#0f172a";const A=Q+v-10-E;let z=d;if(c>A){for(;z.length>3&&a.measureText(z+"…").width>A;)z=z.slice(0,-1);z+="…"}if(a.fillText(z,E,W+.5),e){const S=Math.min(b,I-U*2),x=(I-S)/2,C=U+f+T,L=n||"#64748b";Pa(a,x,C,S,R,R/2),a.fillStyle=La(L,"#ffffff",.8),a.fill(),a.strokeStyle=La(L,"#ffffff",.35),a.stroke(),a.font=h,a.fillStyle=La(L,"#000000",.5),a.textAlign="center",a.fillText(e,I/2,C+R/2+.5,S-12),a.textAlign="start"}const K=U+f+T+R;a.beginPath(),a.moveTo(I/2,K),a.lineTo(I/2,X-1),a.strokeStyle=s?"rgba(71, 85, 105, 0.45)":"rgba(15, 23, 42, 0.55)",a.lineWidth=1.5,a.stroke(),a.beginPath(),a.arc(I/2,X-1.5,1.5,0,Math.PI*2),a.fillStyle=a.strokeStyle,a.fill();const _=new Mi(r);return _.colorSpace=Fe,_.minFilter=nn,_.generateMipmaps=!1,{texture:_,width:I,height:X}}function i_(i){const t=document.createElement("canvas"),e=t.getContext("2d"),n=`700 64px ${Ps}`;e.font=n;const s=Math.min(2048,Math.ceil(e.measureText(i).width+90));t.width=s,t.height=120,e.fillStyle="#ffffff",e.fillRect(0,0,s,120),e.fillStyle="#1d4ed8",e.fillRect(0,0,18,120),e.font=n,e.fillStyle="#0f172a",e.textBaseline="middle",e.fillText(i,48,64,s-70);const r=new Mi(t);return r.colorSpace=Fe,r.anisotropy=4,{texture:r,aspect:s/120}}function s_(i){const t=document.createElement("canvas"),e=t.getContext("2d"),n=`800 96px ${Ps}`;e.font=n;const s=Math.min(4096,Math.ceil(e.measureText(i).width+40));t.width=s,t.height=128,e.font=n,e.fillStyle="rgba(30, 41, 59, 0.9)",e.textBaseline="middle",e.fillText(i,20,68);const r=new Mi(t);return r.colorSpace=Fe,r.anisotropy=8,{texture:r,aspect:s/128}}function r_(){const i=document.createElement("canvas");i.width=128,i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.75)"),e.addColorStop(.6,"rgba(255,255,255,0.18)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);const n=new Mi(i);return n.colorSpace=Fe,n}function a_(i,t=0){const e=(Number(i.rot)||0)*Math.PI/180,n=Math.abs(Math.cos(e)),s=Math.abs(Math.sin(e)),r=((i.w||0)*n+(i.d||0)*s)/2+t,a=((i.w||0)*s+(i.d||0)*n)/2+t;return[i.x-r,i.x+r,i.z-a,i.z+a]}function o_(i){return i!=null&&i.h?i.h:Math.min(12,Math.max(6.5,6+Math.max((i==null?void 0:i.w)||0,(i==null?void 0:i.d)||0)/25))}function Ko(i,t,e=1,n=1){const s=document.createElement("canvas");s.width=i,s.height=i,t(s.getContext("2d"),i);const r=new Mi(s);return r.colorSpace=Fe,r.wrapS=jn,r.wrapT=jn,r.repeat.set(e,n),r}function l_(i,t){let e=7;const n=()=>(e=e*16807%2147483647,e/2147483647);return Ko(512,(s,r)=>{s.fillStyle="#ffffff",s.fillRect(0,0,r,r);for(let a=0;a<40;a+=1){const o=n()*r,l=n()*r,h=30+n()*110,d=s.createRadialGradient(o,l,0,o,l,h),p=n()>.5?0:255;d.addColorStop(0,`rgba(${p},${p},${p},${.035+n()*.03})`),d.addColorStop(1,`rgba(${p},${p},${p},0)`),s.fillStyle=d,s.fillRect(o-h,l-h,h*2,h*2)}for(let a=0;a<9e3;a+=1){const o=Math.floor(n()*120);s.fillStyle=`rgba(${o},${o},${o},${.03+n()*.05})`,s.fillRect(n()*r,n()*r,1+n()*1.5,1+n()*1.5)}s.fillStyle="rgba(70, 76, 84, 0.32)",s.fillRect(0,0,r,2),s.fillRect(0,0,2,r)},i,t)}function _h(){return Ko(128,(i,t)=>{i.fillStyle="#f5b800",i.fillRect(0,0,t,t),i.fillStyle="#1f2328";for(let e=-t;e<t*2;e+=32)i.beginPath(),i.moveTo(e,0),i.lineTo(e+16,0),i.lineTo(e+16-t,t),i.lineTo(e-t,t),i.closePath(),i.fill()},1,1)}function c_(i){return Ko(128,(t,e)=>{t.fillStyle="#ffffff",t.fillRect(0,0,e,e),t.fillStyle="rgba(90, 100, 112, 0.18)",t.fillRect(0,0,3,e),t.fillStyle="rgba(255, 255, 255, 0.9)",t.fillRect(3,0,2,e),t.fillStyle="rgba(90, 100, 112, 0.07)",t.fillRect(e/2,0,2,e)},i,1)}function Ke(i,t={}){return new Ne({color:i,roughness:.75,metalness:.05,...t})}function Wn(i,t,e,n,s,r,a,{shadow:o=!0}={}){const l=new Gt(new _e(i,t,e),n);return l.position.set(s,r,a),l.castShadow=o,l.receiveShadow=!0,l}function h_(i,t,e,n,s){const r=[],a=[],o=(d,p,c,u)=>{const m=r.length/3;r.push(d,0,p,c,0,p,c,0,u,d,0,u),a.push(m,m+2,m+1,m,m+3,m+2)},l=(d,p)=>{for(let c=0;c<d;c+=n+s)p(c,Math.min(d,c+n))};l(i,(d,p)=>{o(-i/2+d,-t/2,-i/2+p,-t/2+e),o(-i/2+d,t/2-e,-i/2+p,t/2)}),l(t,(d,p)=>{o(-i/2,-t/2+d,-i/2+e,-t/2+p),o(i/2-e,-t/2+d,i/2,-t/2+p)});const h=new Ye;return h.setAttribute("position",new Me(r,3)),h.setIndex(a),h.computeVertexNormals(),h}function Yi(i,t,e,{shadow:n=!0}={}){if(!e.length)return null;const s=new ah(i,t,e.length),r=new oe,a=new Nn;return e.forEach((o,l)=>{a.setFromEuler(new rn(0,o.ry||0,0)),r.compose(new F(o.x,o.y,o.z),a,new F(o.sx??1,o.sy??1,o.sz??1)),s.setMatrixAt(l,r)}),s.instanceMatrix.needsUpdate=!0,s.computeBoundingBox(),s.computeBoundingSphere(),s.castShadow=n,s.receiveShadow=!0,s}function u_(i,{anisotropy:t=4}={}){const e=i.floor||{w:60,d:40},{w:n,d:s}=e,r=o_(e),a=new Ve,o=i.elements||[],l=i.aisles||[],h=o.filter(A=>A.kind!=="label"&&A.kind!=="crane").map(A=>a_(A,.45)),d=(A,z,K=.3)=>!h.some(_=>A+K>_[0]&&A-K<_[1]&&z+K>_[2]&&z-K<_[3]),p=Math.max(n,s),c=new Gt(new En(p*8,p*8),Ke("#a9b1ba",{roughness:.95}));c.rotation.x=-Math.PI/2,c.position.y=-.04,c.receiveShadow=!0,a.add(c);const u=l_(n/6,s/6);u.anisotropy=t;const m=new Gt(new En(n,s),Ke("#bfc5cc",{map:u,roughness:.78,metalness:0}));m.rotation.x=-Math.PI/2,m.receiveShadow=!0,a.add(m);const M=.25,f=.6,g=[],R=Ke("#98a1ab",{roughness:.9}),b=Ke("#7d97ad",{roughness:.1,metalness:.4,transparent:!0,opacity:.75}),T=Ke("#5b636c",{roughness:.6,metalness:.3}),Y=Ke("#8a97a4",{roughness:.55,metalness:.35}),U=Ke("#ffffff",{map:_h(),roughness:.6});[{len:n+2*M,x:0,z:-s/2-M/2,ry:0,normal:[0,0,-1],door:!1},{len:n+2*M,x:0,z:s/2+M/2,ry:0,normal:[0,0,1],door:!1},{len:s,x:-n/2-M/2,z:0,ry:Math.PI/2,normal:[-1,0,0],door:s>14},{len:s,x:n/2+M/2,z:0,ry:Math.PI/2,normal:[1,0,0],door:s>14}].forEach(A=>{const z=new Ve;z.position.set(A.x,0,A.z),z.rotation.y=A.ry,z.add(Wn(A.len,f,M+.04,R,0,f/2,0));const K=new Ve,_=Ke("#c7d0da",{map:c_(A.len/1),roughness:.6,metalness:.15}),S=r*.56,x=Math.min(r-.6,r*.74);if(K.add(Wn(A.len,S-f,M,_,0,f+(S-f)/2,0)),K.add(Wn(A.len,x-S,M*.5,b,0,(S+x)/2,0,{shadow:!1})),K.add(Wn(A.len,r-x,M,_,0,(x+r)/2,0)),K.add(Wn(A.len+.1,.18,M+.1,T,0,r+.09,0)),A.door){const L=Math.min(4.5,r*.62),N=-Math.sign(A.normal[0]||A.normal[2])*(M/2+.02),et=Wn(4.5,L-f,.06,Y,0,f+(L-f)/2,0);et.position.z=N,K.add(et),[-1,1].forEach(J=>{const O=Wn(.22,L,.22,U,J*2.36,L/2,et.position.z*1.6);K.add(O)})}z.add(K),a.add(z),g.push({upper:K,normal:new F(...A.normal),center:new F(A.x,r/2,A.z)})});const X=e.columns===0?0:e.columns||12;if(X>0){const A=Math.max(1,Math.round(n/X)),z=Math.max(1,Math.round(s/X)),K=Array.from({length:A+1},(J,O)=>-n/2+O*n/A),_=Array.from({length:z+1},(J,O)=>-s/2+O*s/z),S=(J,O)=>l.some(j=>Math.abs(J-j.x)<j.w/2+.3&&Math.abs(O-j.z)<j.d/2+.3),x=[];if(K.forEach(J=>{x.push([J,-s/2+.22]),x.push([J,s/2-.22])}),_.slice(1,-1).forEach(J=>{x.push([-n/2+.22,J]),x.push([n/2-.22,J])}),s>26){const J=Math.max(1,Math.round(s/24)-1);for(let O=1;O<=J;O+=1){const j=-s/2+O*s/(J+1);K.slice(1,-1).forEach(at=>x.push([at,j]))}}const C=x.filter(([J,O])=>d(J,O,.35)&&!S(J,O)),L=new _e(1,1,1),N=Ke("#7c8894",{roughness:.5,metalness:.45});[Yi(L,N,C.map(([J,O])=>({x:J,y:r/2,z:O-.17,sx:.4,sy:r,sz:.04}))),Yi(L,N,C.map(([J,O])=>({x:J,y:r/2,z:O+.17,sx:.4,sy:r,sz:.04}))),Yi(L,N,C.map(([J,O])=>({x:J,y:r/2,z:O,sx:.04,sy:r,sz:.32}))),Yi(L,U,C.map(([J,O])=>({x:J,y:.6,z:O,sx:.5,sy:1.2,sz:.5})))].filter(Boolean).forEach(J=>a.add(J))}const Q=Ke("#d3d7dc",{roughness:.8,transparent:!0,opacity:.6,polygonOffset:!0,polygonOffsetFactor:-1}),v=Ke("#f2b100",{roughness:.55}),E=[];l.forEach(A=>{const z=new Gt(new En(A.w,A.d),Q);z.rotation.x=-Math.PI/2,z.position.set(A.x,.004,A.z),z.receiveShadow=!0,a.add(z);const K=A.w>=A.d,_=K?A.w:A.d,S=(K?A.d:A.w)/2-.08;[-1,1].forEach(x=>{const C=Wn(K?_:.12,.006,K?.12:_,v,A.x+(K?0:x*S),.006,A.z+(K?x*S:0),{shadow:!1});a.add(C)}),[-1,1].forEach(x=>[-1,1].forEach(C=>E.push([A.x+x*(A.w/2+.3),A.z+C*(A.d/2+.3)])))}),(i.zones||[]).forEach(A=>{const z=A.color||"#2563eb",K=new Gt(h_(A.w,A.d,.12,.9,.55),new mn({color:z,transparent:!0,opacity:.85,toneMapped:!1,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));if(K.position.set(A.x,.008,A.z),a.add(K),A.name){const{texture:_,aspect:S}=s_(String(A.name).toUpperCase());_.anisotropy=t;let x=Math.min(1.3,Math.max(.55,A.d*.08)),C=x*S;C>A.w-1.2&&(C=Math.max(1,A.w-1.2),x=C/S);const L=new Gt(new En(C,x),new mn({map:_,transparent:!0,opacity:.32,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));L.rotation.x=-Math.PI/2,L.position.set(A.x-A.w/2+.6+C/2,.01,A.z-A.d/2+.45+x/2),a.add(L)}});const W=E.filter(([A,z])=>Math.abs(A)<n/2-.3&&Math.abs(z)<s/2-.3&&d(A,z,.2)).slice(0,160);if(W.length){const A=new He(.1,.1,1,14);a.add(Yi(A,Ke("#f2b100",{roughness:.5}),W.map(([z,K])=>({x:z,y:.5,z:K,sy:1})))),a.add(Yi(A,Ke("#1f2328",{roughness:.6}),W.map(([z,K])=>({x:z,y:.72,z:K,sx:1.03,sy:.12,sz:1.03}))))}return{group:a,walls:g,height:r}}function d_(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Ye;let h=0;for(let d=0;d<i.length;++d){const p=i[d];let c=0;if(e!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const u in p.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(p.attributes[u]),c++}if(c!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(o!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const u in p.morphAttributes){if(!s.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;a[u]===void 0&&(a[u]=[]),a[u].push(p.morphAttributes[u])}if(t){let u;if(e)u=p.index.count;else if(p.attributes.position!==void 0)u=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,u,d),h+=u}}if(e){let d=0;const p=[];for(let c=0;c<i.length;++c){const u=i[c].index;for(let m=0;m<u.count;++m)p.push(u.getX(m)+d);d+=i[c].attributes.position.count}l.setIndex(p)}for(const d in r){const p=pc(r[d]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;l.setAttribute(d,p)}for(const d in a){const p=a[d][0].length;if(p===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[d]=[];for(let c=0;c<p;++c){const u=[];for(let M=0;M<a[d].length;++M)u.push(a[d][M][c]);const m=pc(u);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;l.morphAttributes[d].push(m)}}return l}function pc(i){let t,e,n,s=-1,r=0;for(let h=0;h<i.length;++h){const d=i[h];if(t===void 0&&(t=d.array.constructor),t!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=d.itemSize),e!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=d.normalized),n!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=d.gpuType),s!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=d.count*e}const a=new t(r),o=new Je(a,e,n);let l=0;for(let h=0;h<i.length;++h){const d=i[h];if(d.isInterleavedBufferAttribute){const p=l/e;for(let c=0,u=d.count;c<u;c++)for(let m=0;m<e;m++){const M=d.getComponent(c,m);o.setComponent(c+p,m,M)}}else a.set(d.array,l);l+=d.count*e}return s!==void 0&&(o.gpuType=s),o}const yr={machine:"#2c6cb0",cnc:"#2c6cb0",mill:"#2c6cb0",lathe:"#2c6cb0",press:"#2f7d52",robot:"#f08a1c",conveyor:"#5c6670",oven:"#2c6cb0",tank:"#8d99a6",workstation:"#2c6cb0",saw:"#f0a30a",shear:"#2f5d8f",plasma:"#e8641b",furnace:"#5a6570",drill:"#557a66",welding:"#1f6fd1",blast:"#4e6a85",paint_booth:"#2c6cb0",packing:"#2c6cb0",agv:"#f2b705",forklift:"#f2b705",crane:"#f2b705",custom:"#8a97a4"},ae={body:"#e3e6ea",bodyDark:"#c9ced4",dark:"#2e3339",frame:"#59626c",steel:"#aab3bc",bright:"#c9d0d6",rubber:"#1d2024",wood:"#c4975d",cardboard:"#b98a57",crate:"#5b7894",rackBlue:"#1f5aa6",rackOrange:"#ef6c1a",yellow:"#f2b100",glass:"#86aac6",vest:["#f97316","#facc15"],trousers:"#273246",skin:"#e0b08a",helmet:["#f8fafc","#facc15","#f8fafc"]},Sr=(i,t,e)=>Math.min(e,Math.max(t,i));function f_(i){let t=2166136261;for(const n of String(i))t=Math.imul(t^n.charCodeAt(0),16777619);let e=t>>>0;return()=>{e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function p_(){const i=document.createElement("canvas");i.width=64,i.height=64;const t=i.getContext("2d");t.clearRect(0,0,64,64),t.fillStyle="#ffffff",t.fillRect(0,0,64,5),t.fillRect(0,0,5,64);const e=new Mi(i);return e.wrapS=jn,e.wrapT=jn,e.repeat.set(14,20),e}class Da{constructor(t){this.kit=t,this.groups=new Map}add(t,e,n){const s=t+"|"+e.uuid;this.groups.has(s)||this.groups.set(s,{shape:t,material:e,items:[]}),this.groups.get(s).items.push(n)}flush(t){const e=new oe,n=new Nn,s=new rn,r=new Wt;this.groups.forEach(({shape:a,material:o,items:l})=>{const h=a==="cyl"?this.kit.unitCylX:this.kit.unitBox,d=new ah(h,o,l.length);l.forEach((p,c)=>{s.set(p.rx||0,p.ry||0,p.rz||0),n.setFromEuler(s),e.compose(new F(p.x,p.y,p.z),n,new F(p.sx,p.sy,p.sz)),d.setMatrixAt(c,e),p.color?d.setColorAt(c,r.set(p.color)):d.instanceColor&&d.setColorAt(c,r.set("#ffffff"))}),d.instanceColor&&(d.instanceColor.needsUpdate=!0),d.instanceMatrix.needsUpdate=!0,d.computeBoundingBox(),d.computeBoundingSphere(),d.castShadow=!0,d.receiveShadow=!0,t.add(d)}),this.groups.clear()}}class m_{constructor(){this.materials=new Map,this.glow=r_(),this.hazard=_h(),this.fenceMesh=p_(),this.unitBox=new _e(1,1,1),this.unitCylX=new He(.5,.5,1,18).rotateZ(Math.PI/2)}mat(t,e){return this.materials.has(t)||this.materials.set(t,e()),this.materials.get(t)}paint(t,e=.5,n=.2){return this.mat(`p${t}|${e}|${n}`,()=>new Ne({color:t,roughness:e,metalness:n}))}get m(){const t=this;return{body:t.paint(ae.body,.45,.15),bodyDark:t.paint(ae.bodyDark,.5,.2),dark:t.paint(ae.dark,.55,.35),frame:t.paint(ae.frame,.5,.45),steel:t.paint(ae.steel,.32,.8),bright:t.paint(ae.bright,.22,.9),rubber:t.paint(ae.rubber,.9,0),wood:t.paint(ae.wood,.85,0),yellow:t.paint(ae.yellow,.45,.15),rackBlue:t.paint(ae.rackBlue,.45,.35),rackOrange:t.paint(ae.rackOrange,.45,.25),cardboard:t.mat("cardboard",()=>new Ne({color:"#ffffff",roughness:.92,metalness:0})),steelInst:t.mat("steelInst",()=>new Ne({color:"#ffffff",roughness:.35,metalness:.75})),glass:t.mat("glass",()=>new Ne({color:ae.glass,roughness:.08,metalness:.2,transparent:!0,opacity:.38,depthWrite:!1})),screen:t.mat("screen",()=>new Ne({color:"#0d1b2a",emissive:"#3b82f6",emissiveIntensity:.7,roughness:.3})),hazard:t.mat("hazard",()=>new Ne({map:t.hazard,roughness:.55})),fence:t.mat("fence",()=>new Ne({color:"#30353b",map:t.fenceMesh,alphaMap:t.fenceMesh,transparent:!0,alphaTest:.35,side:dn,roughness:.6,metalness:.4})),film:t.mat("film",()=>new Ne({color:"#e2ecf3",transparent:!0,opacity:.32,roughness:.15,depthWrite:!1})),curtain:t.mat("curtain",()=>new Ne({color:"#c2410c",transparent:!0,opacity:.55,roughness:.5,side:dn,depthWrite:!1})),liquid:t.mat("liquid",()=>new Ne({color:"#203a52",roughness:.06,metalness:.35})),hot:t.mat("hot",()=>new mn({color:"#ff7a1a",toneMapped:!1})),lamp:t.mat("lamp",()=>new mn({color:"#f5f8ff",toneMapped:!1}))}}glowSprite(t,e){const n=new rh(new Wo({map:this.glow,color:t,blending:Na,transparent:!0,depthWrite:!1,toneMapped:!1,opacity:0}));return n.scale.set(e,e,1),n}build(t,e,{hallH:n=8}={}){const s=new Ve,r=this,a=this.m,o=t.kind,l=this.paint(t.color||yr[o]||yr.custom,.42,.2),h=this.paint(new Wt(t.color||yr[o]||yr.custom).multiplyScalar(.62).getStyle(),.5,.25),d=f_(t.id),p=new Da(this),{w:c,h:u,d:m}=t;e.animators=e.animators||[],e.andonAt=null,e.top=u,e.front=m/2;const M=(_,S,x,C,L,N=s,et=0,J=0,O=0)=>{const j=new Gt(_,S);return j.position.set(x,C,L),j.rotation.set(et,J,O),j.castShadow=!0,j.receiveShadow=!0,N.add(j),j},f=(_,S,x,C,L,N,et,J=s)=>M(new _e(Math.max(.01,_),Math.max(.01,S),Math.max(.01,x)),C,L,N,et,J),g=(_,S,x,C,L,N,et=s,J=_,O=20)=>M(new He(_,J,Math.max(.01,S),O),x,C,L,N,et),R=(_,S,x,C,L,N,et=s,J=20)=>M(new He(_,_,Math.max(.01,S),J),x,C,L,N,et,0,0,Math.PI/2),b=(_,S,x,C,L,N,et=s,J=20)=>M(new He(_,_,Math.max(.01,S),J),x,C,L,N,et,Math.PI/2,0,0),T=(_,S,x,C=s)=>{const L=new Ve;return L.position.set(_,S,x),C.add(L),L},Y=_=>(_.userData.keep=!0,_),U=(_,S,x,C=0,L=s)=>{const N=T(_,S,x,L);return N.rotation.y=C,f(.46,.36,.1,a.dark,0,0,0,N),f(.36,.25,.012,a.screen,0,.02,.056,N),f(.05,.05,.3,a.frame,0,0,-.2,N),N},I=(_,S,x,C,L=0,N=.16,et=.045)=>{for(let J=_+N/2;J<S;J+=N)p.add("cyl",a.steelInst,{x:J,y:x,z:L,sx:C,sy:et*2,sz:et*2,ry:Math.PI/2,color:"#b8c0c8"})},X=(_,S,x,C,L=0)=>{const N=S-_;if(N<.3)return;[-1,1].forEach(J=>f(N,.1,.06,a.frame,(_+S)/2,x-.05,L+J*(C/2-.03)));const et=Math.max(2,Math.round(N/1.4)+1);for(let J=0;J<et;J+=1){const O=_+.08+J*(N-.16)/(et-1);[-1,1].forEach(j=>f(.06,x-.1,.06,a.frame,O,(x-.1)/2,L+j*(C/2-.06)))}I(_,S,x+.01,C-.12,L)},Q=(_,S,x,C,L,N,et)=>{const J=_==="mixed"?["boxes","parts","steel","coils"][Math.floor(d()*4)]:_||"boxes";if(J!=="empty")if(J==="boxes"){const O=Math.max(1,Math.round(et/.42)),j=et/O;for(let at=0;at<O;at+=1)[-1,1].forEach(ct=>[-1,1].forEach(gt=>{const bt=.85+d()*.25;p.add("box",a.cardboard,{x:S+ct*L/4,y:x+j*at+j/2,z:C+gt*N/4,sx:L/2-.02,sy:j-.01,sz:N/2-.02,color:new Wt(ae.cardboard).multiplyScalar(bt).getStyle()})}))}else if(J==="steel"){const j=Math.max(1,Math.min(3,Math.round(et/.12)));for(let at=0;at<j;at+=1)for(let ct=0;ct<4;ct+=1)p.add("box",a.steelInst,{x:S,y:x+.06+at*.11,z:C-N/2+(ct+.5)*(N/4),sx:L*1.15,sy:.1,sz:N/4-.03,color:d()>.5?"#9aa4ad":"#7e8892"})}else if(J==="coils"){const O=Math.min(L,N)*.42;p.add("cyl",a.steelInst,{x:S,y:x+O,z:C,sx:Math.min(L,.55),sy:O*2,sz:O*2,color:"#8f99a3"})}else p.add("box",a.cardboard,{x:S,y:x+et*.42,z:C,sx:L,sy:et*.84,sz:N,color:ae.crate}),p.add("box",a.steelInst,{x:S,y:x+et*.86,z:C,sx:L*.8,sy:.05,sz:N*.8,color:"#6f7b86"})},v=(_,S,x,C,L,N,et)=>{p.add("box",a.cardboard,{x:_,y:S+.07,z:x,sx:C,sy:.14,sz:L,color:ae.wood}),Q(N,_,S+.14,x,C-.04,L-.04,et)},E=(_,S,x,C,L,N=0)=>{const et=Math.hypot(x-_,C-S),J=Math.atan2(C-S,x-_),O=Math.max(1,Math.ceil(et/1.4)),j=et/O;for(let at=0;at<=O;at+=1){const ct=at*j;p.add("box",a.cardboard,{x:_+Math.cos(J)*ct,y:L/2,z:S+Math.sin(J)*ct,sx:.07,sy:L,sz:.07,color:ae.yellow})}for(let at=0;at<O;at+=1){const ct=(at+.5)*j;if(N&&Math.abs(ct-et/2)<N/2)continue;const gt=_+Math.cos(J)*ct,bt=S+Math.sin(J)*ct,Ht=M(new _e(j-.08,L-.2,.02),a.fence,gt,.12+(L-.2)/2,bt,s,0,-J,0);Ht.castShadow=!1,p.add("box",a.cardboard,{x:gt,y:.07,z:bt,sx:j-.08,sy:.12,sz:.025,ry:-J,color:"#6b7480"})}},W=(_,S,x,C=0,L=0)=>{const N=C-_/2,et=C+_/2,J=L-S/2,O=L+S/2;E(N,J,et,J,x),E(N,O,et,O,x,Math.min(1.4,_*.3)),E(N,J,N,O,x),E(et,J,et,O,x)},A=(_,S,x,C,L="#ffd27a",N=.9)=>{const et=r.glowSprite(L,N);return et.position.set(S,x,C),_.add(et),et},z=(_,S,x=1)=>{const C=Math.random();_.material.opacity=S?C>.25?.95:.35:0;const L=x*(.6+C*.9);_.scale.set(L,L,1)};switch(o){case"machine":case"cnc":case"mill":{const _=Math.min(.32,u*.1),S=(o==="mill"?u*.74:u*.86)-_;f(c,_,m,a.dark,0,_/2,0),f(c,S,m*.96,a.body,0,_+S/2,0),f(c+.04,u*.05,m*.96+.04,l,0,_+S-u*.032,0),f(c+.04,.08,m*.96+.04,h,0,_+.05,0);const x=c*.56,C=S*.74,L=_+S*.47;f(x,C,.05,a.bodyDark,-c*.12,L,m*.48+.025),f(x*.78,C*.6,.02,a.glass,-c*.12,L+C*.08,m*.48+.06),f(.04,C*.45,.06,a.steel,-c*.12+x*.42,L,m*.48+.08);const N=T(-c*.12,_,0);f(x*.7,.12,m*.45,a.frame,0,S*.28,0,N);const et=g(Math.min(c,m)*.05,S*.22,a.bright,0,S*.62,0,N),J=f(x*.6,.02,m*.3,a.lamp,0,S*.92,0,N);J.visible=!1,U(c*.36,_+S*.62,m*.48+.22,-.25),o==="mill"&&(f(c*.36,u*.2,m*.42,a.body,-c*.1,u*.74+u*.1,-m*.22),f(c*.36+.03,.06,m*.42+.03,l,-c*.1,u*.94+.03,-m*.22),e.top=u*.94),o!=="machine"&&(R(Math.min(u*.22,m*.3),.32,l,-c/2+.1,_+S*.55,-m*.1),f(.5,_+.55,m*.5,a.frame,c/2-.25,(_+.55)/2,-m*.2)),e.andonAt=[c*.42,_+S,-m*.36],e.animators.push((O,j,at,ct)=>{J.visible=at,at&&(et.rotation.y+=j*28,et.position.y=S*.62-.05*(.5+.5*Math.sin(O*1.3+ct)),N.children[0].position.x=Math.sin(O*.5+ct)*x*.12)});break}case"lathe":{const _=u*.24;f(c,_,m*.8,a.dark,0,_/2,-m*.05),f(c*.96,u*.7,m*.86,a.body,0,_+u*.35,0),f(c*.96+.04,u*.05,m*.86+.04,l,0,_+u*.7,0),f(c*.5,u*.42,.03,a.glass,-c*.08,_+u*.38,m*.43+.03),f(c*.52,.05,.05,a.steel,-c*.08,_+u*.12,m*.43+.05);const S=T(-c*.28,_+u*.36,0);R(u*.11,.24,a.steel,0,0,0,S);for(let x=0;x<3;x+=1)f(.06,.06,.08,a.dark,.13,0,0,S).position.set(.13,Math.cos(x*2*Math.PI/3)*u*.08,Math.sin(x*2*Math.PI/3)*u*.08);R(u*.035,c*.32,a.bright,c*.17,0,0,S),f(.32,.3,.32,a.dark,c*.12,_+u*.42,.05),U(c*.4,_+u*.42,m*.43+.22,-.3),f(.6,_+.45,.5,a.frame,c/2-.3,(_+.45)/2,-m*.3),e.top=_+u*.725,e.andonAt=[c*.44,_+u*.725,-m*.32],e.animators.push((x,C,L)=>{L&&(S.rotation.x+=C*22)});break}case"drill":{const _=this.paint("#56605a",.6,.3);f(c,u*.08,m,_,0,u*.04,0);const S=Math.min(c,m)*.09;g(S,u*.86,l,-c*.36,u*.08+u*.43,0),g(S*1.15,u*.1,h,-c*.36,u*.99,0),f(c*.3,u*.12,m*.4,a.steel,c*.22,u*.08+u*.06,0);const x=T(-c*.36,u*.72,0);f(c*.84,u*.1,m*.22,l,c*.42,0,0,x);const C=T(c*.6,0,0,x);f(c*.2,u*.28,m*.3,l,0,-u*.04,0,C),g(.12,u*.12,a.dark,0,u*.16,0,C);const L=g(.045,u*.2,a.bright,0,-u*.26,0,C,.02);e.top=u*1.04,e.andonAt=[-c*.36,u*1.04,0],e.animators.push((N,et,J,O)=>{J&&(x.rotation.y=Math.sin(N*.22+O)*.3,L.rotation.y+=et*24,L.position.y=-u*.26-.08*(.5+.5*Math.sin(N*1.1+O)))});break}case"saw":{const _=Math.min(c*.42,2.6),S=c/2-_/2-c*.08,x=u*.42;f(_,x,m*.78,a.body,S,x/2,-m*.02),f(_+.04,.08,m*.78+.04,l,S,x-.12,-m*.02),f(_*1.06,.06,m*.82,a.dark,S,x+.03,-m*.02),f(.16,.3,m*.3,a.steel,S-_*.3,x+.2,-m*.1),f(.16,.3,m*.3,a.steel,S-_*.3,x+.2,m*.14);const C=T(S+_*.5,x+u*.12,-m*.05);f(_*1.12,u*.2,m*.34,l,-_*.56,u*.18,0,C),b(u*.17,m*.38,h,-_*1.06,u*.18,0,C),b(u*.17,m*.38,h,-.06,u*.18,0,C),f(.1,u*.2,.12,a.steel,-_*.78,u*.02,.05,C),f(.1,u*.2,.12,a.steel,-_*.34,u*.02,.05,C),f(_*.46,.02,.03,a.dark,-_*.56,-u*.06,.05,C),g(.05,u*.32,a.bright,S+_*.2,x+u*.2,-m*.3),X(-c/2,S-_/2,x,m*.4,.02),X(S+_/2,c/2,x,m*.4,.02),f(Math.max(.3,S-_/2+c/2-.2),.09,.09,a.bright,(-c/2+S-_/2)/2,x+.1,.02),f(Math.max(.3,S-_/2+c/2-.4),.09,.09,a.bright,(-c/2+S-_/2)/2,x+.1,.13),U(S-_*.2,x+u*.35,m*.42,.2),e.top=x+u*.48,e.andonAt=[S+_*.42,x+.03,-m*.36],e.animators.push((L,N,et,J)=>{const O=((L*.07+J)%1+1)%1;C.rotation.z=et?-.2*(1-O):-.25});break}case"shear":{const _=c/2-c*.07;[-1,1].forEach(x=>f(c*.12,u,m*.72,l,x*_,u/2,-m*.08)),f(c*.82,u*.42,m*.5,h,0,u*.21,-m*.08),f(c*.84,.05,m*.58,a.steel,0,u*.43,-m*.05);const S=T(0,u*.72,-m*.1);f(c*.78,u*.22,m*.32,l,0,0,0,S),f(c*.76,u*.06,.04,a.bright,0,-u*.13,m*.17,S),[-1,1].forEach(x=>g(Math.min(.18,c*.04),u*.22,a.steel,x*c*.3,u+u*.06,-m*.1));for(let x=-1;x<=1;x+=1)f(.08,.06,m*.42,a.frame,x*c*.3,u*.43,m*.29);f(c*.6,.02,m*.34,this.paint("#8693a0",.3,.7),0,u*.465,m*.24),f(c*.7,.1,.1,a.dark,0,u*.47,-m*.4),[-1,1].forEach(x=>f(.07,u*.6,.07,a.hazard,x*c*.46,u*.3,m*.46)),U(c*.47,u*.62,m*.4,-.4),e.andonAt=[_,u,-m*.36],e.animators.push((x,C,L,N)=>{S.position.y=L?u*.72-u*.09*Math.max(0,Math.sin(x*2+N)):u*.72});break}case"plasma":{const _=Math.min(u*.32,.8);f(c*.84,_,m*.8,a.dark,-c*.05,_/2,0);for(let L=-c*.46;L<c*.36;L+=.28)p.add("box",a.steelInst,{x:L,y:_+.05,z:0,sx:.025,sy:.1,sz:m*.78,color:"#5d666f"});f(c*.7,.025,m*.64,this.paint("#7f8b96",.3,.75),-c*.06,_+.11,0),[-1,1].forEach(L=>f(c,.12,.16,a.steel,0,_+.08,L*m*.45));const S=T(0,0,0);[-1,1].forEach(L=>f(.36,u-_-.1,.3,l,0,_+.14+(u-_-.1)/2,L*m*.45,S)),f(.42,.45,m*.98,l,0,u-.22,0,S),f(.18,.1,m*.9,a.dark,-.12,u+.02,0,S);const x=T(.3,0,0,S);f(.32,.5,.3,a.dark,0,u-.45,0,x),g(.035,u-_-.8,a.bright,0,_+.2+(u-_-.8)/2,0,x);const C=A(x,0,_+.16,0,"#ffd9a0",1.1);f(.5,1.3,.6,a.body,c/2-.3,.65,m*.24),f(.36,.26,.02,a.screen,c/2-.3,1,m*.24+.31),e.andonAt=[c/2-.3,1.3,m*.12],e.animators.push((L,N,et,J)=>{et&&(S.position.x=Math.sin(L*.28+J)*c*.32,x.position.z=Math.sin(L*.85+J)*m*.3),z(C,et,1.1)});break}case"furnace":{const _=m*.78,S=-m*.11,x=this.paint("#5b6571",.65,.35);f(c,u*.8,_,x,0,u*.4,S),f(c*1.02,u*.05,_*1.02,this.paint("#7b8794",.5,.4),0,u*.825,S),[-1,1].forEach(J=>f(.18,u*.96,.2,a.steel,J*c*.34,u*.48,S+_/2+.1)),f(c*.72,.2,.22,a.steel,0,u*.95,S+_/2+.1);const C=f(c*.5,u*.42,.02,a.hot,0,u*.27,S+_/2+.005);Y(C).castShadow=!1,C.visible=!1;const L=T(0,0,S+_/2+.12);f(c*.6,u*.55,.2,this.paint("#97a1ab",.45,.45),0,u*.3,0,L);const N=f(.12,.12,.02,a.hot,0,u*.42,.11,L);N.visible=!1;const et=A(s,0,u*.2,S+_/2+.6,"#ff8a3d",c*.8);[-1,1].forEach(J=>{for(let O=0;O<3;O+=1)R(.09,.32,a.steel,J*(c/2+.12),u*.2+O*u*.18,S-_*.2+O*.4);f(.06,.06,_*.9,a.yellow,J*(c/2+.06),u*.12,S)}),g(.28,u*.55,a.steel,c*.3,u*.8+u*.275,S-_*.3),g(.36,.08,a.dark,c*.3,u*1.1,S-_*.3),f(.7,2,.45,a.body,-c*.43,1,m*.36),f(.32,.24,.02,a.screen,-c*.43,1.45,m*.36+.23),[-1,1].forEach(J=>f(.08,.05,m/2-(S+_/2),a.steel,J*c*.15,.03,(S+_/2+m/2)/2)),e.top=u*1.1,e.andonAt=[c*.42,u*.85,S+_*.3],e.animators.push((J,O,j,at)=>{const ct=((J*.045+at)%1+1)%1,gt=j&&ct<.18;L.position.y+=((gt?u*.36:0)-L.position.y)*Math.min(1,O*2),C.visible=j,N.visible=j,et.material.opacity=gt?.55+.15*Math.sin(J*7):0});break}case"tank":{if(Math.abs(c-m)<.35*Math.max(c,m)){const S=Math.min(c,m)/2*.92,x=u*.14;for(let C=0;C<4;C+=1){const L=C*Math.PI/2+Math.PI/4;f(.12,x,.12,a.frame,Math.cos(L)*S*.75,x/2,Math.sin(L)*S*.75)}g(S,u*.72,a.steel,0,x+u*.36,0,s,S,32),M(new Yn(S,32,12,0,Math.PI*2,0,Math.PI/2),a.steel,0,x+u*.72,0).scale.y=.35,g(S*.98,.06,a.frame,0,x+u*.5,0,s,S*.98,32),[-1,1].forEach(C=>f(.04,u*.8,.04,a.yellow,S+.15,x+u*.4,C*.2));for(let C=x+.3;C<u*.95;C+=.3)p.add("box",a.cardboard,{x:S+.15,y:C,z:0,sx:.03,sy:.03,sz:.4,color:ae.yellow});R(.08,S*.8,a.frame,-S-.2,x+.3,0),e.andonAt=[0,x+u*.72+S*.35,0]}else{const S=u*.62,x=.12;f(c,S,x,a.steel,0,S/2,-m/2+x/2),f(c,S,x,a.steel,0,S/2,m/2-x/2),f(x,S,m,a.steel,-c/2+x/2,S/2,0),f(x,S,m,a.steel,c/2-x/2,S/2,0),f(c-x*2,.02,m-x*2,a.liquid,0,S-.15,0),[-1,1].forEach(N=>{f(c,.04,.04,a.yellow,0,S+1,N*(m/2-.05)),f(.04,.04,m,a.yellow,N*(c/2-.05),S+1,0)});for(let N=-c/2+.05;N<=c/2;N+=Math.max(.6,c/5))[-1,1].forEach(et=>p.add("box",a.cardboard,{x:N,y:S+.5,z:et*(m/2-.05),sx:.04,sy:1,sz:.04,color:ae.yellow}));[-1,1].forEach(N=>f(.16,u,.16,h,N*c*.36,u/2,-m*.36)),f(c*.8,.2,.2,h,0,u-.1,-m*.36);const C=T(0,0,-m*.05);f(c*.45,.5,m*.45,this.paint("#4a525b",.6,.6),0,0,0,C),g(.02,1,a.dark,0,.75,0,C),g(.22,.45,l,c*.36,S+.25,m*.3);const L=[0,1,2].map(N=>A(s,(N-1)*c*.2,S+.3,0,"#f1f5f9",1.6));L.forEach(N=>N.material.blending=pi),e.top=u,e.andonAt=[c*.36,u,-m*.36],e.animators.push((N,et,J,O)=>{const j=((N*.06+O)%1+1)%1;C.position.y=J?S+.3-Math.sin(j*Math.PI)*(S*.7):S+.4,L.forEach((at,ct)=>{const gt=((N*.25+ct/3+O)%1+1)%1;at.position.y=S+.2+gt*2.4,at.material.opacity=J?.32*(1-gt):0;const bt=1.2+gt*2.2;at.scale.set(bt,bt,1)})})}break}case"welding":{const _=Sr(u*.85,.8,.95),S=Math.min(c*.55,2),x=Math.min(m*.5,1.1),C=-c*.12,L=m*.08;f(S,.08,x,a.dark,C,_,L),[-1,1].forEach(ct=>[-1,1].forEach(gt=>f(.07,_,.07,a.frame,C+ct*(S/2-.08),_/2,L+gt*(x/2-.08)))),f(S*.55,.1,x*.4,a.bright,C,_+.09,L),f(.08,.45,x*.4,a.bright,C+S*.15,_+.3,L);const N=T(c*.3,0,-m*.22);f(.55,.72,.45,l,0,.5,0,N),f(.56,.16,.02,a.yellow,0,.66,.23,N),[-1,1].forEach(ct=>b(.08,.06,a.rubber,ct*.2,.08,.2,N)),g(.11,1.35,this.paint("#2f6f4f",.4,.3),c*.43,.7,-m*.38),g(.07,.12,a.steel,c*.43,1.42,-m*.38);const et=Math.max(1.8,u*1.6);[[-c/2+.05,-m/2+.05],[c*.2,-m/2+.05],[-c/2+.05,m*.35]].forEach(([ct,gt])=>f(.04,et,.04,a.yellow,ct,et/2,gt));const J=f(c*.7,et-.35,.02,a.curtain,-c*.15,.2+(et-.35)/2,-m/2+.05);J.castShadow=!1;const O=f(.02,et-.35,m*.8,a.curtain,-c/2+.05,.2+(et-.35)/2,-m*.07);O.castShadow=!1,g(.05,2.1,a.steel,-c*.3,1.05,-m*.4),M(new He(.06,.06,1,10),a.steel,-c*.22,2,-m*.2,s,.9,0,0),M(new Or(.2,.3,14,1,!0),a.steel,C,_+.75,L-.1,s,0,0,0).rotation.x=Math.PI;const j=A(s,C+.1,_+.2,L,"#cfe6ff",1.4),at=A(s,C+.1,_+.18,L+.05,"#ffb347",.7);e.top=et,e.andonAt=[c*.3,.86,-m*.22],e.animators.push((ct,gt,bt)=>{z(j,bt,1.4),z(at,bt,.8)});break}case"robot":{const _=Sr(Math.min(u,3)/2.4,.7,1.4),S=Math.min(c,m)>=3.5,x=S?-c*.14:0;f(.8*_,.45*_,.8*_,a.dark,x,.225*_,0);const C=T(x,.45*_,0);g(.33*_,.22*_,l,0,.11*_,0,C);const L=T(0,.22*_,0,C);f(.55*_,.32*_,.5*_,l,0,.16*_,0,L),f(.22*_,.22*_,.22*_,a.dark,-.27*_,.22*_,.2*_,L);const N=T(0,.4*_,0,L);b(.2*_,.5*_,l,0,0,0,N),f(.24*_,1*_,.28*_,l,0,.5*_,0,N);const et=T(0,1*_,0,N);b(.17*_,.42*_,l,0,0,0,et),f(.95*_,.2*_,.22*_,l,.45*_,0,0,et),f(.26*_,.26*_,.26*_,a.dark,-.2*_,0,0,et);const J=T(.95*_,0,0,et);R(.09*_,.2*_,h,0,0,0,J),M(new He(.035*_,.035*_,.4*_,10),a.dark,.14*_,-.16*_,0,J,0,0,.6);const O=A(J,.25*_,-.33*_,0,"#cfe6ff",1.3);if(N.rotation.z=-.35,et.rotation.z=-.55,S){const j=c*.2;f(.5,.9,.9,a.dark,j-.7,.45,0),f(.5,.9,.9,a.dark,j+.7,.45,0);const at=T(j,.95,0);R(.5,.06,this.paint("#3a4048",.5,.5),-.5,0,0,at),R(.5,.06,this.paint("#3a4048",.5,.5),.5,0,0,at),f(.9,.12,.6,a.bright,0,0,0,at),f(.12,.4,.6,a.bright,.25,.2,0,at),W(c-.1,m-.1,2),f(.6,.9,.5,this.paint("#1f6fd1",.45,.2),-c/2+.55,.45,-m/2+.5),f(.6,1.8,.45,a.body,-c/2+1.3,.9,-m/2+.45),e.andonAt=[c/2-.1,2,m/2-.1],e.top=2.3,e.animators.push((ct,gt,bt)=>{bt&&(at.rotation.x+=gt*.4)})}else e.andonAt=[x+.42*_,.45*_,.3*_],e.top=2.2*_;e.animators.push((j,at,ct,gt)=>{ct&&(L.rotation.y=Math.sin(j*.7+gt)*.5,N.rotation.z=-.35+.14*Math.sin(j*1.1+gt),et.rotation.z=-.55+.2*Math.sin(j*1.6+gt+1),J.rotation.x+=at*1.5),z(O,ct,1.3)});break}case"conveyor":{const _=Math.max(.4,u);[-1,1].forEach(x=>f(c,.14,.06,l,0,_-.07,x*(m/2-.03)));const S=Math.max(2,Math.round(c/1.6)+1);for(let x=0;x<S;x+=1){const C=-c/2+.1+x*(c-.2)/(S-1);[-1,1].forEach(L=>f(.06,_-.14,.06,a.frame,C,(_-.14)/2,L*(m/2-.08))),f(.05,.05,m-.16,a.frame,C,.25,0)}I(-c/2,c/2,_-.04,m-.1),f(.32,.26,.26,this.paint("#2c6cb0",.45,.3),c/2-.45,_-.32,m/2-.2),e.top=_;break}case"oven":{f(c*.86,u*.86,m,a.body,0,u*.43,0),f(c*.86+.04,u*.05,m+.04,l,0,u*.84,0);const _=[-1,1].map(S=>{const x=f(.02,u*.34,m*.6,a.hot,S*c*.43+S*.011,u*.3,0);return Y(x).castShadow=!1,x.visible=!1,x});I(-c/2,-c*.43,u*.2,m*.62),I(c*.43,c/2,u*.2,m*.62),[-.25,.25].forEach(S=>g(.2,u*.4,a.steel,S*c,u*.86+u*.2,-m*.2)),U(c*.3,u*.5,m/2+.2,0),e.andonAt=[c*.38,u*.86,-m*.35],e.animators.push((S,x,C)=>_.forEach(L=>L.visible=C));break}case"press":{const _=c/2-c*.08;f(c,u*.18,m*.8,h,0,u*.09,0),[-1,1].forEach(x=>f(c*.16,u*.74,m*.7,l,x*_,u*.18+u*.37,0)),f(c,u*.16,m*.8,l,0,u*.92,0),g(Math.min(c,m)*.15,u*.14,a.steel,0,u*1.07,0),f(c*.62,u*.06,m*.6,a.steel,0,u*.21,0);const S=f(c*.6,u*.14,m*.55,a.frame,0,u*.62,0);Y(S),[-1,1].forEach(x=>f(.07,u*.55,.07,a.hazard,x*c*.36,u*.45,m*.46)),U(c*.5+.1,u*.5,m*.3,-.6),e.top=u*1.14,e.andonAt=[_,u*1,-m*.3],e.animators.push((x,C,L,N)=>{S.position.y=L?u*.62-u*.2*(.5+.5*Math.sin(x*2.4+N)):u*.62});break}case"blast":{const _=T(-c*.06,0,0);f(c*.5,u*.72,m*.78,l,0,u*.36,0,_),f(c*.5+.04,u*.04,m*.78+.04,h,0,u*.7,0,_),[-1,1].forEach(x=>f(.03,u*.32,m*.42,a.rubber,x*(c*.25+.016),u*.26,0,_)),I(-c/2,-c*.31,u*.22,m*.42),I(c*.19,c/2,u*.22,m*.42),f(.5,u,.5,h,c*.1,u/2,-m*.38);const S=Math.min(c,m)*.15;g(S,u*.5,a.bodyDark,c*.38,u*.55,-m*.22,s,S,24),g(S,u*.25,a.bodyDark,c*.38,u*.18,-m*.22,s,.08,24),R(.14,c*.4,a.steel,c*.17,u*.86,-m*.22),[-1,1].forEach(x=>f(.04,.04,m*.78,a.yellow,-c*.06+x*c*.24,u*.72+1,0)),e.top=u,e.andonAt=[-c*.28,u*.72,m*.32],e.animators.push((x,C,L)=>{_.position.x=-c*.06+(L?(Math.random()-.5)*.02:0)});break}case"paint_booth":{const _=u*.82,S=this.paint("#eef1f4",.5,.05);f(c,_,.08,S,0,_/2,-m/2+.04),[-1,1].forEach(L=>f(.08,_,m,S,L*(c/2-.04),_/2,0)),f(c,.1,m,S,0,_+.05,0);const x=M(new En(c*.8,m*.6),a.lamp,0,_-.02,0,s,Math.PI/2,0,0);x.castShadow=!1,f(c*.8,_*.55,.16,this.paint("#9aa5b1",.7,.1),0,_*.4,-m/2+.17),f(c*.3,u*.18,m*.4,a.steel,-c*.2,_+.1+u*.09,-m*.15),g(.3,u*.12,a.steel,c*.2,_+.1+u*.06,-m*.2),f(c*1.3,.12,.12,a.dark,0,_-.35,0),[-1,1].forEach(L=>g(.04,1.4,a.dark,L*(c/2-.4),.7,m*.1));const C=[];for(let L=0;L<5;L+=1){const N=T(0,_-.4,0);g(.012,.5,a.dark,0,-.25,0,N),f(.55,.75,.06,this.paint(["#1d4ed8","#9aa4ad","#b91c1c"][L%3],.4,.35),0,-.9,0,N),C.push(N)}U(c/2+.15,1.3,m*.35,-1),e.andonAt=[c*.46,_+.1,m*.4],e.animators.push((L,N,et,J)=>{C.forEach((O,j)=>{const at=((L*(et?.05:0)+j/C.length+J)%1+1)%1;O.position.x=-c*.65+at*c*1.3})});break}case"packing":{const _=Math.min(c,m)*.3,S=T(-c*.08,0,0);g(_,.12,a.dark,0,.06,0,S,_,28),f(_*1.15,.14,_*.95,a.wood,0,.19,0,S);const x=Math.min(1.5,u*.55);for(let N=0;N<3;N+=1)[-1,1].forEach(et=>[-1,1].forEach(J=>f(_*.55,x/3-.02,_*.45,this.paint(new Wt(ae.cardboard).multiplyScalar(.9+.1*((N+et+J+4)%3)).getStyle(),.9,0),et*_/3.6,.26+(N+.5)*(x/3),J*_/4.4,S)));const C=g(_*.72,x,a.film,0,.26+x/2,0,S,_*.72,24);C.castShadow=!1,f(.24,u,.24,a.body,c*.3,u/2,-m*.3);const L=T(c*.3,.6,-m*.3+.2);f(.36,.45,.3,l,0,0,0,L),g(.09,.5,this.paint("#f1f5f9",.3,0),-.12,0,.18,L),I(-c/2,-c*.08-_-.1,.4,m*.5),f(.5,1.4,.3,a.body,c*.4,.7,m*.35),f(.3,.2,.02,a.screen,c*.4,1.1,m*.35+.16),e.andonAt=[c*.3,u,-m*.3],e.animators.push((N,et,J,O)=>{J&&(S.rotation.y+=et*1.5,L.position.y=.4+(u-1)*(.5+.5*Math.sin(N*.35+O)))});break}case"workstation":{const _=Math.min(u,.92);f(c,.05,m,this.paint("#d7dde3",.6,.1),0,_,0),[-1,1].forEach(S=>[-1,1].forEach(x=>f(.05,_,.05,a.frame,S*(c/2-.06),_/2,x*(m/2-.06)))),[-1,1].forEach(S=>f(.04,1.1,.04,a.frame,S*(c/2-.06),_+.55,-m/2+.06)),f(c,.06,.12,a.frame,0,_+1.1,-m/2+.1),f(c*.8,.02,.08,a.lamp,0,_+1.06,-m/2+.12);for(let S=0;S<Math.max(2,Math.floor(c/.35));S+=1)p.add("box",a.cardboard,{x:-c/2+.2+S*.35,y:_+.55,z:-m/2+.12,sx:.28,sy:.14,sz:.2,color:S%2?"#2563eb":"#dc2626"});f(.5,.32,.03,a.screen,c*.25,_+.3,-m*.2),e.top=_+1.15,e.andonAt=[c/2-.06,_+1.1,-m/2+.06];break}case"rack":{const _=c>=m,S=_?c:m,x=_?m:c,C=T(0,0,0);_||(C.rotation.y=Math.PI/2);const L=Math.max(1,Math.round(S/2.7)),N=S/L,et=Sr(Math.round(u/1.6),2,6),J=u/et,O=t.load||"boxes",j=new Da(this);for(let at=0;at<=L;at+=1){const ct=-S/2+at*N;[-1,1].forEach(gt=>j.add("box",a.cardboard,{x:ct,y:u/2,z:gt*x/2,sx:.09,sy:u,sz:.07,color:ae.rackBlue}));for(let gt=0;gt<et*2;gt+=1){const bt=(gt+.5)*(u/(et*2));j.add("box",a.cardboard,{x:ct,y:bt,z:0,sx:.03,sy:Math.hypot(x,u/(et*2)),sz:.03,rx:(gt%2?1:-1)*Math.atan2(x,u/(et*2)),color:ae.rackBlue})}}for(let at=0;at<L;at+=1){const ct=-S/2+(at+.5)*N;for(let gt=1;gt<et;gt+=1)[-1,1].forEach(bt=>j.add("box",a.cardboard,{x:ct,y:gt*J,z:bt*(x/2-.02),sx:N-.09,sy:.12,sz:.05,color:ae.rackOrange}));for(let gt=0;gt<et;gt+=1){const bt=gt===0?0:gt*J+.06,Ht=(gt===et-1?u-bt:J-.06)-.25;if(Ht<.3)continue;if(O==="steel"){for(let ce=0;ce<2;ce+=1)for(let Ft=0;Ft<4;Ft+=1)d()<.15||j.add("box",a.steelInst,{x:ct,y:bt+.08+ce*.13,z:-x/2+.12+(Ft+.5)*((x-.24)/4),sx:N*.98,sy:.11,sz:(x-.24)/4-.04,color:d()>.5?"#9aa4ad":"#7d8791"});continue}const zt=Math.max(1,Math.floor(N/.95)),Zt=N/zt-.12;for(let B=0;B<zt;B+=1){if(d()>.82)continue;const ce=ct-N/2+(B+.5)*(N/zt),Ft=Math.min(1.25,Ht)*(.6+d()*.4);j.add("box",a.cardboard,{x:ce,y:bt+.07,z:0,sx:Zt,sy:.14,sz:x-.1,color:ae.wood}),K(j,()=>Q(O,ce,bt+.14,0,Zt-.04,x-.14,Ft))}}}j.flush(C),e.top=u;break}case"buffer":{[-1,1].forEach(L=>{f(c,.006,.1,a.yellow,0,.006,L*(m/2-.05)),f(.1,.006,m,a.yellow,L*(c/2-.05),.006,0)});const _=Math.max(1,Math.floor(c/1.3)),S=Math.max(1,Math.floor(m/1.3)),x=c/_-.25,C=m/S-.25;for(let L=0;L<_;L+=1)for(let N=0;N<S;N+=1)d()>.7||v(-c/2+(L+.5)*(c/_),0,-m/2+(N+.5)*(m/S),x,C,t.load||"parts",Math.min(1.1,Math.max(.4,u*.8)));e.top=Math.min(1.3,u);break}case"pallet":v(0,0,0,c,m,t.load||"boxes",Math.max(.2,u-.14));break;case"agv":{f(c,.3,m,l,0,.2,0),f(c*.9,.04,m*.9,a.dark,0,.37,0),f(c*1.002,.03,m*1.002,r.mat("agvLed",()=>new mn({color:"#38bdf8",toneMapped:!1})),0,.1,0),g(.08,.1,a.dark,c/2-.15,.42,0),t.load&&t.load!=="empty"&&v(0,.39,0,Math.min(c,1.2)-.1,Math.min(m,1)-.1,t.load,.6),e.vehicle=!0,e.top=1.1;break}case"forklift":{const _=Math.max(1.8,c),S=Math.max(.9,m),x=Sr(u,1.9,2.3);f(_*.62,.55,S,l,-_*.06,.52,0),f(_*.24,.75,S*.98,a.dark,-_*.36,.58,0),[-1,1].forEach(N=>{b(.27,.24,a.rubber,_*.16,.27,N*(S/2-.12)),b(.22,.22,a.rubber,-_*.3,.22,N*(S/2-.12)),f(.05,x-.8,.05,a.dark,_*.12,.8+(x-.8)/2,N*(S/2-.06)),f(.05,x-.8,.05,a.dark,-_*.22,.8+(x-.8)/2,N*(S/2-.06))}),f(_*.4,.05,S,a.dark,-_*.05,x,0),f(.45,.12,.45,a.dark,-_*.1,.86,0),f(.08,.5,.45,a.dark,-_*.22,1.12,0),f(.42,.55,.32,this.paint(ae.vest[0],.7,0),-_*.08,1.22,0),M(new Yn(.11,16,12),this.paint(ae.skin,.8,0),-_*.06,1.62,0),M(new Yn(.125,16,10,0,Math.PI*2,0,Math.PI/2),this.paint("#facc15",.4,0),-_*.06,1.66,0),[-1,1].forEach(N=>f(.08,.06,.08,a.dark,_*.33,x*.5,N*S*.28)),[-1,1].forEach(N=>f(.1,x*1,.1,a.frame,_*.3,x*.5,N*S*.28));const C=T(_*.33,0,0);if(f(.06,.9,S*.8,a.frame,0,.55,0,C),[-1,1].forEach(N=>f(1.05,.05,.1,a.steel,.55,.1,N*S*.22,C)),t.load&&t.load!=="empty"){const N=new Da(this);K(N,()=>v(.6,.13,0,1,Math.min(1.1,S),t.load,.7)),N.flush(C)}const L=f(.1,.1,.1,r.mat("beacon",()=>new mn({color:"#fb923c",toneMapped:!1})),-_*.05,x+.08,0);Y(L),e.vehicle=!0,e.top=x+.2,e.animators.push((N,et,J)=>{L.visible=!J||Math.sin(N*8)>0});break}case"crane":{const _=Math.max(4,u);[-1,1].forEach(N=>f(c,.45,.3,this.paint("#6b7785",.5,.5),0,_,N*m/2));const S=T(0,0,0);[-.45,.45].forEach(N=>f(.5,.8,m+.3,l,N,_+.62,0,S)),[-1,1].forEach(N=>f(2.2,.5,.7,h,0,_+.4,N*m/2,S));const x=T(0,_+1.2,0,S);f(1.5,.6,1.3,this.paint("#d99a00",.45,.25),0,.1,0,x),b(.28,1,a.dark,0,.1,0,x);const C=g(.025,1,a.dark,0,0,0,x),L=T(0,-3,0,x);f(.45,.5,.3,a.hazard,0,0,0,L),t.load&&t.load!=="empty"&&[-.2,0,.2].forEach(N=>f(3.2,.12,.16,a.steel,0,-.75,N,L)),e.crane=!0,e.top=_+1.6,e.animators.push((N,et,J,O)=>{const j=J?1:0;e.craneT=(e.craneT||O)+et*j;const at=e.craneT;S.position.x=Math.sin(at*.06)*c*.38,x.position.z=Math.sin(at*.11+1)*m*.3;const ct=2.4+Math.sin(at*.17)*1.2;L.position.y=-ct-.4,C.scale.y=ct,C.position.y=-ct/2-.1});break}case"fence":{const _=t.h&&t.h>=1?Math.min(t.h,3):2;m>=1?W(c,m,_):E(-c/2,0,c/2,0,_),e.top=_;break}case"wall":f(c,u,m,this.paint("#cfd4d9",.85,0),0,u/2,0),f(c+.02,.12,m+.04,a.frame,0,u-.06,0);break;case"label":{const _=String(t.text||t.name||""),{texture:S,aspect:x}=i_(_);let C=.9,L=x*C;L>16&&(L=16,C=L/x);const N=t.h||Math.max(4,n-2.5),et=new Ne({map:S,emissive:"#ffffff",emissiveMap:S,emissiveIntensity:.35,roughness:.6}),J=a.dark,O=new Gt(new _e(L,C,.06),[J,J,J,J,et,et]);O.position.set(0,N,0),O.castShadow=!0,s.add(O),[-1,1].forEach(j=>g(.01,Math.max(.2,n-N-C/2),a.dark,j*L/2.4,(n+N+C/2)/2,0)),e.top=N+C,e.sign=O;break}case"custom":(t.parts||[]).forEach(_=>{const S=this.paint(_.color||ae.bodyDark,.5,.25);let x;_.shape==="box"?x=new _e(_.w,_.h,_.d):_.shape==="sphere"?x=new Yn(_.r,20,14):_.shape==="cone"?x=new Or(_.r,_.h,20):x=new He(_.r,_.r,_.h,20);const C=N=>(N||0)*Math.PI/180,L=_.rot||[0,0,0];M(x,S,_.x||0,_.y||0,_.z||0,s,C(L[0]),C(L[1]),C(L[2]))}),e.andonAt=t.machine_id?[c*.4,u,-m*.35]:null;break;default:f(c,u,m,a.body,0,u/2,0),e.andonAt=t.machine_id?[c*.4,u,-m*.35]:null}return p.flush(s),g_(s),s;function K(_,S){const x=p.add;p.add=(C,L,N)=>_.add(C,L,N);try{S()}finally{p.add=x}}}person(t=0){const e=new Ve,n=this.m,s=this.paint(ae.vest[t%2],.7,0),r=this.paint(ae.trousers,.8,0),a=(l,h,d,p,c)=>{const u=new Gt(l,h);return u.position.set(d,p,c),u.castShadow=!0,e.add(u),u};[-1,1].forEach(l=>{a(new _e(.15,.82,.18),r,l*.1,.43,0),a(new _e(.16,.08,.26),n.dark,l*.1,.04,.03)}),a(new _e(.44,.6,.25),s,0,1.13,0),[.98,1.22].forEach(l=>a(new _e(.45,.04,.26),this.paint("#d6dce2",.3,.4),0,l,0));const o=[-1,1].map(l=>{const h=new Ve;h.position.set(l*.29,1.4,0);const d=new Gt(new _e(.12,.58,.14),r);d.position.y=-.29,d.castShadow=!0,h.add(d);const p=new Gt(new _e(.1,.1,.1),this.paint(ae.skin,.8,0));return p.position.y=-.62,h.add(p),e.add(h),h});return a(new Yn(.115,16,12),this.paint(ae.skin,.8,0),0,1.6,0),a(new Yn(.135,16,10,0,Math.PI*2,0,Math.PI/2),this.paint(ae.helmet[t%3],.35,.05),0,1.64,0),e.userData.arms=o,e}}function g_(i){const t=new Map;i.children.forEach(e=>{if(!e.isMesh||e.isInstancedMesh||e.userData.keep||Array.isArray(e.material)||!e.geometry.index)return;const n=t.get(e.material)||[];n.push(e),t.set(e.material,n)}),t.forEach((e,n)=>{if(e.length<2)return;const s=e.map(h=>{h.updateMatrix();const d=h.geometry.clone().applyMatrix4(h.matrix);return d.index?d:null}),r=h=>Object.keys(h.attributes).sort().join(","),a=r(s[0]);if(s.some(h=>!h||r(h)!==a)){s.forEach(h=>h&&h.dispose());return}const o=d_(s,!1);if(s.forEach(h=>h.dispose()),!o)return;e.forEach(h=>{i.remove(h),h.geometry.dispose()});const l=new Gt(o,n);l.castShadow=!n.transparent,l.receiveShadow=!0,i.add(l)})}const ui={busy:"#22c55e",blocked:"#f59e0b",starved:"#94a3b8",down:"#ef4444"},Ia="#2563eb",Ss="#94a3b8",mc="#dde3e9",gc=["#1c3b27","#4a3a10","#4a1818"],__=1,_c=new Set(["wall","label","fence","crane"]),v_=i=>(Number(i)||0)*Math.PI/180;function Pr(i){const t=Number(i);if(i===""||i===null||i===void 0||!Number.isFinite(t))return String(i??"");const e=Math.abs(t);return t.toLocaleString(void 0,{maximumFractionDigits:e>=100?0:e>=10?1:2})}function x_(i,t){const e=Number(i);if(e===1)return 0;if(e===3)return 2;if(e===2||e===4)return 1;if(!t)return-1;const n={};return new Wt(t).getHSL(n),n.s<.15?-1:n.h<.05||n.h>.92?2:n.h>.2&&n.h<.47?0:1}function Ro(i,t,e){const n=new uh;return n.moveTo(-i+e,-t),n.lineTo(i-e,-t),n.quadraticCurveTo(i,-t,i,-t+e),n.lineTo(i,t-e),n.quadraticCurveTo(i,t,i-e,t),n.lineTo(-i+e,t),n.quadraticCurveTo(-i,t,-i,t-e),n.lineTo(-i,-t+e),n.quadraticCurveTo(-i,-t,-i+e,-t),n}function vc(i,t,e,n){const s=Ro(i,t,n),r=Ro(i-e,t-e,Math.max(.05,n-e));return s.holes.push(new bo(r.getPoints(8).reverse())),s}function M_(){const i=document.createElement("canvas");i.width=128,i.height=64;const t=i.getContext("2d");t.clearRect(0,0,128,64),t.fillStyle="rgba(255,255,255,0.35)",t.fillRect(0,26,128,12),t.fillStyle="#ffffff",t.beginPath(),t.moveTo(48,6),t.lineTo(80,32),t.lineTo(48,58),t.lineTo(36,58),t.lineTo(66,32),t.lineTo(36,6),t.closePath(),t.fill();const e=new Mi(i);return e.wrapS=jn,e.colorSpace=Fe,e}function xc(i){const t=[0];for(let e=1;e<i.length;e+=1)t.push(t[e-1]+i[e].distanceTo(i[e-1]));return{points:i,cum:t,total:t[t.length-1]||0}}function Ua(i,t,e){const{points:n,cum:s,total:r}=i;if(n.length===1||r===0)return{pos:e.copy(n[0]),dir:new F(1,0,0)};const a=Math.min(Math.max(0,t),r);let o=1;for(;o<s.length-1&&s[o]<a;)o+=1;const l=s[o]-s[o-1]||1,h=(a-s[o-1])/l;return e.lerpVectors(n[o-1],n[o],h),{pos:e,dir:n[o].clone().sub(n[o-1])}}class y_{constructor(t,{onSelect:e}={}){this.container=t,this.onSelect=e,this.items=new Map,this.flowLines=[],this.particles=[],this.labelsVisible=!0,this.mode="live",this.simRunning=!1,this.anyWorking=!1,this.selectedId=null,this.numbers=new Map,this.clock=new Bg,this.tween=null,this.renderer=new J0({antialias:!0,alpha:!1,preserveDrawingBuffer:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Tc,this.renderer.toneMapping=Rc,this.renderer.toneMappingExposure=1.05,this.renderer.domElement.style.display="block",this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.cursor="grab",t.appendChild(this.renderer.domElement),this.scene=new ih,this.scene.background=new Wt(mc),this.scene.fog=new Go(mc,120,500),this.setupEnvironment(),this.camera=new je(42,1,.3,3e3),this.controls=new Vg(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.maxPolarAngle=Math.PI*.49,this.controls.minDistance=3,this.controls.addEventListener("start",()=>{this.tween=null}),this.hemi=new Ig("#ffffff","#7d7a74",.8),this.scene.add(this.hemi),this.sun=new Og("#fff6e8",2.7),this.sun.castShadow=!0,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.03,this.scene.add(this.sun),this.scene.add(this.sun.target),this.root=new Ve,this.scene.add(this.root),this.particleGroup=new Ve,this.scene.add(this.particleGroup),this.chevron=M_(),this.raycaster=new zg,this.pointer=new _t,this.downAt=null,this.hoverAt=0,this.handlePointerDown=n=>{this.downAt=[n.clientX,n.clientY],this.renderer.domElement.style.cursor="grabbing"},this.handlePointerUp=n=>{this.renderer.domElement.style.cursor="grab",this.pick(n)},this.handlePointerMove=n=>this.hover(n),this.renderer.domElement.addEventListener("pointerdown",this.handlePointerDown),this.renderer.domElement.addEventListener("pointerup",this.handlePointerUp),this.renderer.domElement.addEventListener("pointermove",this.handlePointerMove),this.handleContextLost=n=>n.preventDefault(),this.handleContextRestored=()=>{this.setupEnvironment(),this.sceneData&&this.setScene(this.sceneData,this.lastSettings||{})},this.renderer.domElement.addEventListener("webglcontextlost",this.handleContextLost),this.renderer.domElement.addEventListener("webglcontextrestored",this.handleContextRestored),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),this.resize(),this.animate=this.animate.bind(this),this.frame=requestAnimationFrame(this.animate)}setupEnvironment(){const t=new So(this.renderer);this.envTexture&&this.envTexture.dispose(),this.envTexture=t.fromScene(new e_,.04).texture,t.dispose(),this.scene.environment=this.envTexture,this.scene.environmentIntensity=.45}resize(){const t=Math.max(1,this.container.clientWidth),e=Math.max(1,this.container.clientHeight);this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.viewHeight=e,this.items.forEach(n=>n.label&&this.scaleLabel(n.label))}scaleLabel(t){const e=2*Math.tan(Mn.degToRad(this.camera.fov)/2)/Math.max(1,this.viewHeight||1),[n,s]=t.userData.px;t.scale.set(n*e,s*e,1)}raycast(t){const e=this.renderer.domElement.getBoundingClientRect();this.pointer.x=(t.clientX-e.left)/e.width*2-1,this.pointer.y=-((t.clientY-e.top)/e.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera);const n=[];this.items.forEach(r=>r.pickables.forEach(a=>n.push(a)));const s=this.raycaster.intersectObjects(n,!1)[0];return s?s.object.userData.elementId:null}pick(t){if(!this.downAt||Math.hypot(t.clientX-this.downAt[0],t.clientY-this.downAt[1])>5)return;const e=this.raycast(t);this.select(e),this.onSelect&&this.onSelect(e)}hover(t){if(t.buttons)return;const e=performance.now();e-this.hoverAt<90||(this.hoverAt=e,this.renderer.domElement.style.cursor=this.raycast(t)?"pointer":"grab")}select(t){this.selectedId=t,this.items.forEach((e,n)=>{e.selected=n===t})}clear(){(e=>{e.traverse(n=>{var s;n.geometry&&!((s=this.sharedGeometries)!=null&&s.has(n.geometry))&&n.geometry.dispose(),n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(a=>{a.map&&a.map!==this.chevron&&a.map.dispose(),a.dispose()})})})(this.root),this.root.clear(),this.kit&&(this.kit.unitBox.dispose(),this.kit.unitCylX.dispose(),this.kit=null),this.particles.forEach(e=>this.particleGroup.remove(e.mesh)),this.particles=[],this.particleGeometry&&this.particleGeometry.dispose(),this.particleMaterial&&this.particleMaterial.dispose(),this.particleGeometry=null,this.items.clear(),this.flowLines=[],this.hall=null}setScene(t,e={}){this.clear(),this.kit=new m_,this.sharedGeometries=new Set([this.kit.unitBox,this.kit.unitCylX]),this.sceneData=t||{},this.lastSettings=e;const n=this.sceneData.floor||{w:60,d:40},s=Math.max(n.w,n.d);this.scene.fog.near=s*2.2,this.scene.fog.far=s*7,this.camera.near=Math.max(.1,Math.min(.5,s/200)),this.camera.far=Math.max(400,s*12),this.camera.updateProjectionMatrix(),this.hall=u_(this.sceneData,{anisotropy:Math.min(8,this.renderer.capabilities.getMaxAnisotropy())}),this.root.add(this.hall.group),this.fitShadows(n),this.setupProduct(),(this.sceneData.elements||[]).forEach(r=>this.buildElement(r)),this.buildFlows(),this.setLabelsVisible(e.labels!==!1),this.resize(),this.applyCamera(e.camera,n)}fitShadows(t){const e=Math.max(t.w,t.d),n=e>70?4096:2048;this.sun.shadow.mapSize.x!==n&&(this.sun.shadow.mapSize.set(n,n),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null)),this.sun.position.set(-e*.35,e*.8+20,e*.45),this.sun.target.position.set(0,0,0);const s=this.sun.shadow.camera,r=e*.72;s.left=-r,s.right=r,s.top=r,s.bottom=-r,s.near=1,s.far=e*3+80,s.updateProjectionMatrix()}setupProduct(){const t=this.sceneData.product||{},e=t.kind||"box";e==="steel"?this.particleGeometry=new _e(1.4,.14,.32):e==="part"?this.particleGeometry=new He(.2,.2,.32,16):e==="pallet"?this.particleGeometry=new _e(1,.8,.85):this.particleGeometry=new _e(.55,.38,.45);const n=t.color||(e==="steel"||e==="part"?"#9aa4ad":"#b98a57"),s=e==="steel"||e==="part";this.particleMaterial=new Ne({color:n,roughness:s?.32:.9,metalness:s?.8:0})}fitCamera(t,e=54,n=-12){const s=Mn.degToRad(e),r=Mn.degToRad(n),a=new F(Math.cos(s)*Math.sin(r),Math.sin(s),Math.cos(s)*Math.cos(r)),o=new F(0,0,e>80?0:t.d*.04),l=[];[-.5,.5].forEach(c=>[-.5,.5].forEach(u=>[0,3].forEach(m=>l.push(new F(c*t.w,m,u*t.d)))));const h=this.camera.clone();let d=Math.max(t.w,t.d)*1.2;for(let c=0;c<8;c+=1){h.position.copy(o).addScaledVector(a,d),h.lookAt(o),h.updateMatrixWorld(!0);let u=0;l.forEach(m=>{const M=m.clone().project(h);u=Math.max(u,Math.abs(M.x),Math.abs(M.y))}),d*=u/.92}const p=o.clone().addScaledVector(a,d);return{position:[p.x,p.y,p.z],target:[o.x,o.y,o.z]}}applyCamera(t,e=(s=>(s=this.sceneData)==null?void 0:s.floor)()||{w:60,d:40},n=!1){const r=Math.max(e.w,e.d),a=t!=null&&t.position&&(t!=null&&t.target)?t:this.fitCamera(e);this.controls.maxDistance=r*3;const o=new F(...a.position),l=new F(...a.target);if(n){this.flyTo(o,l);return}this.tween=null,this.camera.position.copy(o),this.controls.target.copy(l),this.controls.update()}flyTo(t,e,n=.8){this.tween={fromPos:this.camera.position.clone(),fromTarget:this.controls.target.clone(),toPos:t,toTarget:e,t:0,duration:n}}topView(){var e;const t=((e=this.sceneData)==null?void 0:e.floor)||{w:60,d:40};this.applyCamera(this.fitCamera(t,89,0),t,!0)}focus(t){var l;const e=this.items.get(t);if(!e)return;const n=e.el,s=new F(n.x,Math.min(2,(n.h||2)*.4),n.z),r=this.camera.position.clone().sub(this.controls.target).normalize();r.y<.35&&(r.y=.35),r.normalize();const a=((l=this.sceneData)==null?void 0:l.floor)||{w:60,d:40},o=Mn.clamp(Math.max(n.w,n.d,n.h)*2.6+7,9,Math.max(a.w,a.d)*.8);this.flyTo(s.clone().addScaledVector(r,o),s)}zoom(t){const e=this.camera.position.clone().sub(this.controls.target),n=Mn.clamp(e.length()*t,this.controls.minDistance,this.controls.maxDistance);this.flyTo(this.controls.target.clone().add(e.setLength(n)),this.controls.target.clone(),.35)}getCamera(){const t=e=>Math.round(e*100)/100;return{position:[t(this.camera.position.x),t(this.camera.position.y),t(this.camera.position.z)],target:[t(this.controls.target.x),t(this.controls.target.y),t(this.controls.target.z)]}}buildElement(t){var r,a;const e={id:t.id,el:t,pickables:[],animators:[],working:!1,pulse:!1,flash:0,label:null,labelKey:"",statusColor:null,statusShown:!1,selected:!1},n=new Ve;n.position.set(t.x,t.y||0,t.z),n.rotation.y=v_(t.rot);const s=this.kit.build(t,e,{hallH:((r=this.hall)==null?void 0:r.height)||8});if(n.add(s),e.group=n,t.machine_id&&this.makeAndon(e,n),(t.machine_id||!_c.has(t.kind))&&this.makeRings(e,n),t.operators){e.people=[];const o=t.operators;for(let l=0;l<o;l+=1){const h=this.kit.person(l),d=Math.min(o,Math.max(1,Math.floor(t.w/.9))),p=Math.floor(l/d),c=l%d,u=Math.min(d,o-p*d);h.position.set((c-(u-1)/2)*.9,0,e.front+.55+p*.8),h.rotation.y=Math.PI,n.add(h),e.people.push(h)}}if(e.vehicle&&((a=t.path)==null?void 0:a.length)>=2){const o=t.path.map(([c,u])=>new F(c,0,u)),h=o[0].distanceTo(o[o.length-1])<.5?o:[...o,...o.slice(1,-1).reverse(),o[0]];e.route=xc(h),e.routeS=0,e.speed=t.kind==="agv"?1:1.6;const{pos:d,dir:p}=Ua(e.route,0,new F);n.position.set(d.x,t.y||0,d.z),e.yaw=Math.atan2(-p.z,p.x),n.rotation.y=e.yaw}n.traverse(o=>{o.isMesh&&!o.userData.noPick&&(o.userData.elementId=t.id,e.pickables.push(o))}),this.root.add(n),this.items.set(t.id,e),this.nameLabel(e)}makeAndon(t,e){const n=t.el,[s,r,a]=t.andonAt||[n.w*.4,n.h,-n.d*.35],o=new Ve;o.position.set(s,r,a);const l=this.kit.paint("#2e3339",.5,.4),h=new Gt(new He(.025,.025,.3,8),l);h.position.y=.15,o.add(h);const d=gc.map((u,m)=>{const M=new Gt(new He(.065,.065,.11,16),new Ne({color:u,roughness:.3,metalness:.1,emissive:"#000000"}));return M.position.y=.36+m*.12,o.add(M),M}),p=new Gt(new He(.05,.066,.04,16),l);p.position.y=.36+2*.12+.075,o.add(p);const c=this.kit.glowSprite("#ffffff",1.5);c.userData.noPick=!0,o.add(c),e.add(o),t.andon={segs:d,glow:c,index:-1},t.top=Math.max(t.top||0,r+.72)}makeRings(t,e){const n=t.el;if(n.kind==="forklift"||n.kind==="agv")return;const s=n.w/2+.45,r=n.d/2+.45,a=l=>new mn({color:l,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-3}),o=(l,h,d)=>{const p=new Gt(l,h);return p.rotation.x=-Math.PI/2,p.position.y=d,p.userData.noPick=!0,p.renderOrder=2,e.add(p),p};t.ring=o(new Cs(vc(s,r,.2,.4),6),a(Ss),.025),t.fill=o(new Cs(Ro(s-.2,r-.2,.25),6),a(Ss),.018),n.machine_id&&(t.ping=o(new qo(.85,1,48),a("#ffffff"),.03),t.pingSize=Math.max(s,r)),t.selRing=o(new Cs(vc(s+.35,r+.35,.12,.55),6),a(Ia),.028)}nameLabel(t){const e=t.el;if(_c.has(e.kind)||!e.machine_id&&!e.name){this.clearLabel(t);return}this.updateLabel(t,{title:e.name||e.id,number:e.machine_id?t.number:null,muted:!e.machine_id})}clearLabel(t){t.label&&(t.group.remove(t.label),t.label.material.map.dispose(),t.label.material.dispose(),t.label=null,t.labelKey="")}updateLabel(t,e){t.labelOpts=e;const n=this.compact&&!e.muted?{...e,status:""}:e,s=JSON.stringify(n);if(s===t.labelKey)return;this.clearLabel(t),t.labelKey=s;const{texture:r,width:a,height:o}=n_(n),l=new Wo({map:r,transparent:!0,depthWrite:!1,depthTest:!1,sizeAttenuation:!1,toneMapped:!1,fog:!1}),h=new rh(l);h.center.set(.5,0),h.renderOrder=e.muted?9:10,h.userData={px:[a,o],muted:!!e.muted},h.position.set(0,(t.top||t.el.h||2)+.2,0),h.visible=this.labelsVisible,this.scaleLabel(h),t.group.add(h),t.label=h}refreshLabels(){this.items.forEach(t=>t.labelOpts&&this.updateLabel(t,t.labelOpts))}setLabelsVisible(t){this.labelsVisible=t,this.items.forEach(e=>{e.label&&(e.label.visible=t)})}setNumbers(t){this.numbers=t||new Map,this.items.forEach((e,n)=>{e.number=this.numbers.get(n)??null})}declutter(){const t=this.renderer.domElement,e=t.clientWidth,n=t.clientHeight;if(!e||!n)return;const s=new F,r=[];this.items.forEach(o=>{if(!o.label)return;o.label.getWorldPosition(s);const l=s.distanceTo(this.camera.position);s.project(this.camera);const[h,d]=o.label.userData.px;r.push({sprite:o.label,prio:o.label.userData.muted?1:o.selected?-1:0,dist:l,x:(s.x+1)/2*e,y:(1-s.y)/2*n,w:h,h:d,behind:s.z>1})}),r.sort((o,l)=>o.prio-l.prio||o.dist-l.dist);const a=[];r.forEach(o=>{const l=o.prio===1?2:5;let h=0,d=null;for(;h<=l;h+=1){const c=o.y-h*o.h*.92;if(d={l:o.x-o.w/2,r:o.x+o.w/2,t:c-o.h,b:c},!a.some(u=>d.l<u.r&&d.r>u.l&&d.t<u.b&&d.b>u.t))break}const p=h<=l;o.sprite.center.y=-Math.min(h,l)*.92,o.sprite.visible=this.labelsVisible&&!o.behind&&!(this.compact&&o.prio===1)&&(p||o.prio<=0),p&&!o.behind&&a.push(d)})}buildFlows(){const t=new Map((this.sceneData.elements||[]).map(e=>[e.id,e]));(this.sceneData.flows||[]).forEach(e=>{var l;const n=t.get(e.from),s=t.get(e.to);if(!n||!s)return;const r=[[n.x,n.z]];(l=e.via)!=null&&l.length?r.push(...e.via):Math.abs(s.x-n.x)>.5&&Math.abs(s.z-n.z)>.5&&r.push([s.x,n.z]),r.push([s.x,s.z]);const a=xc(r.map(([h,d])=>new F(h,__,d))),o=[];for(let h=1;h<a.points.length;h+=1){const d=a.points[h-1],p=a.points[h],c=d.distanceTo(p);if(c<.2)continue;const u=this.chevron.clone();u.needsUpdate=!0,u.repeat.set(c/1.4,1);const m=new mn({map:u,color:Ia,transparent:!0,opacity:.4,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-4}),M=new Gt(new En(c,.42),m);M.rotation.order="YXZ",M.rotation.set(-Math.PI/2,Math.atan2(-(p.z-d.z),p.x-d.x),0),M.position.set((d.x+p.x)/2,.022,(d.z+p.z)/2),M.renderOrder=3,this.root.add(M),o.push(m)}this.flowLines.push({flow:e,route:a,materials:o,nextEmit:0})}),this.applyFlowStyle()}applyFlowStyle(){const t=this.mode==="sim"?.75:.42;this.flowLines.forEach(e=>e.materials.forEach(n=>n.opacity=t))}paintStatus(t,e,n,{pulse:s=!1}={}){if(t.statusColor=e,t.statusShown=!!e,t.pulse=s,t.ring&&(t.ring.material.color.set(e||Ss),t.fill.material.color.set(e||Ss),t.ring.material.opacity=e?.92:0,t.fill.material.opacity=e?.16:0),t.andon){t.andon.index=e?n:-1,t.andon.segs.forEach((a,o)=>{const l=e&&o===n;a.material.color.set(l?e:gc[o]),a.material.emissive.set(l?e:"#000000"),a.material.emissiveIntensity=l?2.2:0});const r=t.andon.glow;e&&n>=0?(r.position.y=t.andon.segs[n].position.y,r.material.color.set(e),r.material.opacity=.9):r.material.opacity=0}}setMode(t){this.mode=t,this.particles.forEach(e=>e.mesh.visible=!1),this.flowLines.forEach(e=>e.nextEmit=0),this.items.forEach(e=>{e.working=!1,e.flash=0}),this.applyFlowStyle()}setSimRunning(t){this.simRunning=t}signal(t,e,n){const s=/count|licznik|szt|pieces|produced/i.test(String(e||""));this.items.forEach(r=>{if(Number(r.el.machine_id)===Number(t)&&(r.flash=1,s)){const a=Number(n);Number.isFinite(a)&&Number.isFinite(r.lastCount)&&a>r.lastCount&&this.mode==="live"&&this.flowLines.filter(o=>o.flow.from===r.id).forEach(o=>this.spawnParticle(o.flow.from,o.flow.to)),Number.isFinite(a)&&(r.lastCount=a)}})}applyLive(t){this.mode="live";let e=!1;this.items.forEach(n=>{const s=n.el;if(!s.machine_id){n.statusShown&&this.paintStatus(n,null,-1),n.working=!1,this.nameLabel(n);return}const r=t[s.machine_id];if(n.working=Number(r==null?void 0:r.typeEvent)===1,e=e||n.working,r&&r.color){this.paintStatus(n,r.color,x_(r.typeEvent,r.color),{pulse:Number(r.typeEvent)===3});const a=(r.substatuses||[]).filter(o=>o.value!=="-"&&o.value!==void 0&&o.value!==null&&o.value!=="").slice(0,1).map(o=>`${Pr(o.value)}${o.unit?" "+o.unit:""}`);this.updateLabel(n,{title:s.name||s.id,number:n.number,status:[r.nameStatus||"",...a].filter(Boolean).join(" · "),color:r.color})}else this.paintStatus(n,null,-1),this.updateLabel(n,{title:s.name||s.id,number:n.number,color:null})}),this.anyWorking=e}applySimulation(t,e=[],n={}){this.mode="sim";const s=new Map(t.stations.map(a=>[a.id,a])),r={busy:0,blocked:1,starved:-1,down:2};this.items.forEach(a=>{const o=s.get(a.id);if(!o){a.working=!1,a.el.machine_id&&this.paintStatus(a,null,-1),this.nameLabel(a);return}const l=!a.el.machine_id&&o.role!=="station";if(o.role!=="station"){a.working=!1,this.paintStatus(a,null,-1),this.updateLabel(a,{title:o.name||a.el.name||a.el.id,number:a.number,status:`${o.done} ${n.pcs||"szt."}`,color:"#64748b",muted:l});return}const h=ui[o.state]||Ss,d=t.bottleneck===a.id;a.working=o.state==="busy",this.paintStatus(a,h,r[o.state]??-1,{pulse:d||o.state==="down"});let p=`${n.busy||"praca"} ${Math.round(o.busy*100)}% · ${n.queue||"kolejka"} ${o.queue}/${o.queueCap}`;d&&(p=`${n.bottleneck||"wąskie gardło"} · ${p}`),this.updateLabel(a,{title:o.name||a.el.name||a.el.id,number:a.number,status:p,color:d?ui.down:h})}),e.forEach(a=>this.spawnParticle(a.from,a.to))}spawnParticle(t,e){const n=this.flowLines.find(r=>r.flow.from===t&&r.flow.to===e);if(!n||!this.particleGeometry||this.particles.filter(r=>r.mesh.visible).length>260)return;let s=this.particles.find(r=>!r.mesh.visible);if(!s){const r=new Gt(this.particleGeometry,this.particleMaterial);r.castShadow=!0,this.particleGroup.add(r),s={mesh:r},this.particles.push(s)}s.route=n.route,s.s=0,s.speed=Mn.clamp(n.route.total/2.6,1.6,6),s.mesh.visible=!0}animate(){var o;this.frame=requestAnimationFrame(this.animate);const t=Math.min(.1,this.clock.getDelta()),e=this.clock.elapsedTime;if(this.tween){const l=this.tween;l.t=Math.min(1,l.t+t/l.duration);const h=l.t<.5?2*l.t*l.t:1-Math.pow(-2*l.t+2,2)/2;this.camera.position.lerpVectors(l.fromPos,l.toPos,h),this.controls.target.lerpVectors(l.fromTarget,l.toTarget,h),l.t>=1&&(this.tween=null)}this.controls.update();const n=(o=this.sceneData)==null?void 0:o.floor;if(n&&!this.tween){const l=this.controls.target,h=Mn.clamp(l.x,-n.w/2,n.w/2),d=Mn.clamp(l.z,-n.d/2,n.d/2),p=Mn.clamp(l.y,0,12);if(h!==l.x||p!==l.y||d!==l.z){const c=new F(h-l.x,p-l.y,d-l.z);l.add(c),this.camera.position.add(c)}}this.hall&&this.hall.walls.forEach(l=>{l.upper.visible=this.camera.position.clone().sub(l.center).dot(l.normal)<0});const s=this.mode==="live"?this.anyWorking:this.simRunning,r=new F;this.items.forEach(l=>{const h=l.el,d=h.x*.7+h.z*.3,p=l.vehicle||l.crane?s:l.working;if(l.animators.forEach(c=>c(e,t,p,d)),l.ring&&l.statusShown){const c=l.pulse?.5+.5*Math.abs(Math.sin(e*3.5)):1;l.ring.material.opacity=.35+.57*c,l.fill.material.opacity=l.pulse?.08+.18*c:.16}if(l.andon&&l.andon.index>=0&&(l.andon.glow.material.opacity=l.pulse?Math.sin(e*7)>0?.95:.12:.85),l.selRing&&(l.selRing.material.opacity=l.selected?.7+.25*Math.sin(e*3):0),l.ping)if(l.flash>0){l.flash=Math.max(0,l.flash-t*1.1);const c=.6+(1-l.flash)*(l.pingSize+1.5);l.ping.scale.set(c,c,1),l.ping.material.color.set(l.statusColor||Ia),l.ping.material.opacity=l.flash*.75}else l.ping.material.opacity=0;if(l.people&&l.people.forEach((c,u)=>{const[m,M]=c.userData.arms,f=l.working?Math.sin(e*2.6+u+d)*.45:0;m.rotation.x=-.25+f,M.rotation.x=-.25-f}),l.route&&s){l.routeS=(l.routeS+t*l.speed)%l.route.total;const{pos:c,dir:u}=Ua(l.route,l.routeS,r);l.group.position.x=c.x,l.group.position.z=c.z;let M=Math.atan2(-u.z,u.x)-l.yaw;for(;M>Math.PI;)M-=Math.PI*2;for(;M<-Math.PI;)M+=Math.PI*2;l.yaw+=M*Math.min(1,t*3),l.group.rotation.y=l.yaw}}),this.mode==="live"&&this.flowLines.forEach(l=>{var u,m;const h=this.items.get(l.flow.from),d=this.items.get(l.flow.to);if(!(h&&h.working||h&&!h.el.machine_id&&d&&d.working)||e<(l.nextEmit||0))return;this.spawnParticle(l.flow.from,l.flow.to);const c=Number((m=(u=h==null?void 0:h.el)==null?void 0:u.sim)==null?void 0:m.cycle_s)||60;l.nextEmit=e+Math.min(7,Math.max(2,c/22))*(.75+Math.random()*.5)});const a=this.mode==="sim"&&!this.simRunning?0:.5;if(this.flowLines.forEach(l=>l.materials.forEach(h=>h.map.offset.x-=t*a)),e-(this.declutterAt||0)>.2){this.declutterAt=e;const l=this.camera.position.distanceTo(this.controls.target)>45;l!==this.compact&&(this.compact=l,this.refreshLabels()),this.declutter()}this.particles.forEach(l=>{if(!l.mesh.visible)return;if(l.s+=t*l.speed,l.s>=l.route.total){l.mesh.visible=!1;return}const{pos:h,dir:d}=Ua(l.route,l.s,r);l.mesh.position.copy(h),l.mesh.rotation.y=Math.atan2(-d.z,d.x)}),this.renderer.render(this.scene,this.camera)}dispose(){cancelAnimationFrame(this.frame),this.resizeObserver.disconnect();const t=this.renderer.domElement;t.removeEventListener("pointerdown",this.handlePointerDown),t.removeEventListener("pointerup",this.handlePointerUp),t.removeEventListener("pointermove",this.handlePointerMove),t.removeEventListener("webglcontextlost",this.handleContextLost),t.removeEventListener("webglcontextrestored",this.handleContextRestored),this.clear(),this.chevron.dispose(),this.envTexture&&this.envTexture.dispose(),this.controls.dispose(),this.renderer.dispose(),t.parentNode&&t.parentNode.removeChild(t)}}const S_=5,E_=30,b_=.5;function w_(i){let t=i>>>0;return function(){t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}function en(i,t){const e=Number(i);return Number.isFinite(e)?e:t}function T_(i){return i==="conveyor"||i==="oven"}function A_(i){const t=Array.isArray(i==null?void 0:i.elements)?i.elements:[],e=Array.isArray(i==null?void 0:i.flows)?i.flows:[],n=new Map(t.map(p=>[p.id,p])),s=new Map(t.map(p=>[p.id,0])),r=new Map;e.forEach(p=>{!n.has(p.from)||!n.has(p.to)||(s.set(p.to,s.get(p.to)+1),r.has(p.from)||r.set(p.from,[]),r.get(p.from).push(p.to))});const a=(p,c)=>n.get(p).x-n.get(c).x||n.get(p).z-n.get(c).z,o=new Set(e.flatMap(p=>[p.from,p.to]));let l=t.filter(p=>o.has(p.id)&&s.get(p.id)===0).map(p=>p.id).sort(a);const h=new Set,d=[];for(;l.length;){const p=[];l.forEach(c=>{h.has(c)||(h.add(c),d.push(c),(r.get(c)||[]).forEach(u=>{s.set(u,s.get(u)-1),s.get(u)===0&&p.push(u)}))}),l=p.sort(a)}return t.filter(p=>!h.has(p.id)).map(p=>p.id).sort(a).forEach(p=>d.push(p)),d.filter(p=>n.get(p).machine_id)}function Mc(i){var o,l;const t=Array.isArray(i==null?void 0:i.elements)?i.elements:[],e=Array.isArray(i==null?void 0:i.flows)?i.flows:[],n=new Set(t.map(h=>h.id)),s={},r={};e.forEach(h=>{n.has(h.from)&&n.has(h.to)&&(r[h.from]=(r[h.from]||0)+1,s[h.to]=(s[h.to]||0)+1)});const a={};return t.forEach(h=>{const d=h.sim||{};if(!(s[h.id]||r[h.id])&&!d.role)return;const c=d.role||(s[h.id]?r[h.id]?"station":"sink":"source"),u=T_(h.kind);let m=en(d.cycle_s,null);m==null&&(m=c!=="station"?0:u?Math.max(1,en(h.w,2)/b_):E_),a[h.id]={id:h.id,name:h.name||h.id,kind:h.kind,machine_id:h.machine_id||null,role:c,cycle_s:m,capacity:Math.max(1,Math.round(en(d.capacity,u&&c==="station"?Math.max(1,Math.round(en(h.w,1))):1))),mtbf_s:Math.max(0,en(d.mtbf_s,0)),stop_s:Math.max(0,en(d.stop_s,0)),arrival_s:d.arrival_s!=null?en(d.arrival_s,null):null}}),{stations:a,flows:e.filter(h=>a[h.from]&&a[h.to]).map(h=>({from:h.from,to:h.to,buffer:Math.max(0,Math.round(en(h.buffer,S_)))})),arrival_s:((o=i==null?void 0:i.simulation)==null?void 0:o.arrival_s)!=null?en(i.simulation.arrival_s,null):null,horizon_h:en((l=i==null?void 0:i.simulation)==null?void 0:l.horizon_h,8),seed:1}}class R_{constructor(t){this.params=t,this.reset()}reset(){const t=this.params;this.rand=w_(en(t.seed,1)*2654435761),this.time=0,this.transfers=[],this.queues=t.flows.map(e=>({...e,count:0,area:0,max:0})),this.stations={},Object.values(t.stations).forEach(e=>{const n=this.queues.filter(o=>o.to===e.id),s=this.queues.filter(o=>o.from===e.id),r=e.role||(n.length===0?"source":s.length===0?"sink":"station"),a=r==="source"?en(e.arrival_s??t.arrival_s,0):0;this.stations[e.id]={...e,role:r,inputs:n,outputs:s,slots:Array.from({length:Math.max(1,e.capacity)},()=>({state:"idle",remaining:0})),arrival:a,nextArrival:a,waiting:0,down:0,untilStop:this.sampleUptime(e),rr:0,done:0,time:{busy:0,blocked:0,starved:0,down:0}}}),this.order=this.topologicalOrder()}sampleUptime(t){return t.mtbf_s>0?-Math.log(1-this.rand())*t.mtbf_s:1/0}sampleStop(t){return t.stop_s>0?Math.max(1,-Math.log(1-this.rand())*t.stop_s):0}topologicalOrder(){const t=Object.keys(this.stations),e=Object.fromEntries(t.map(r=>[r,0]));this.queues.forEach(r=>{e[r.to]+=1});const n=t.filter(r=>e[r]===0),s=[];for(;n.length;){const r=n.shift();s.push(r),this.stations[r].outputs.forEach(a=>{e[a.to]-=1,e[a.to]===0&&n.push(a.to)})}return t.forEach(r=>{s.includes(r)||s.push(r)}),s.reverse()}pushOut(t){if(t.role==="sink"||t.outputs.length===0)return t.done+=1,!0;let e=null;return t.outputs.forEach(n=>{n.count<n.buffer&&(!e||n.count<e.count)&&(e=n)}),e?(e.count+=1,e.max=Math.max(e.max,e.count),t.done+=1,this.transfers.length<400&&this.transfers.push({from:e.from,to:e.to,t:this.time}),!0):!1}pullIn(t){if(t.role==="source")return t.arrival<=0?!0:t.waiting>0?(t.waiting-=1,!0):!1;const e=t.inputs.length;for(let n=0;n<e;n+=1){const s=t.inputs[(t.rr+n)%e];if(s.count>0)return s.count-=1,t.rr=(t.rr+n+1)%e,!0}return!1}step(t){this.transfers=[];const e=this.order;for(const n of e){const s=this.stations[n];if(s.role==="source"&&s.arrival>0)for(s.nextArrival-=t;s.nextArrival<=0;)s.waiting+=1,s.nextArrival+=s.arrival;if(s.down>0){s.down-=t,s.time.down+=t;continue}let r=!1,a=!1,o=!1;s.slots.forEach(l=>{l.state==="busy"&&(l.remaining-=t,l.remaining<=1e-9&&(l.state="blocked")),l.state==="blocked"&&this.pushOut(s)&&(l.state="idle"),l.state==="idle"&&this.pullIn(s)&&(s.cycle_s>0?(l.state="busy",l.remaining=s.cycle_s):l.state=this.pushOut(s)?"idle":"blocked"),l.state==="busy"?r=!0:l.state==="blocked"?a=!0:o=!0}),r?(s.time.busy+=t,s.untilStop-=t,s.untilStop<=0&&(s.down=this.sampleStop(s),s.untilStop=this.sampleUptime(s))):a?s.time.blocked+=t:o&&(s.time.starved+=t)}this.queues.forEach(n=>{n.area+=n.count*t}),this.time+=t}runFor(t,e=1){const n=Math.ceil(t/e);for(let s=0;s<n;s+=1)this.step(e);this.transfers=[]}stationState(t){const e=this.stations[t];return e?e.down>0?"down":e.slots.some(n=>n.state==="busy")?"busy":e.slots.some(n=>n.state==="blocked")?"blocked":"starved":null}stats(){const t=Math.max(this.time,1e-9),e=Object.values(this.stations).map(o=>({id:o.id,name:o.name,role:o.role,state:this.stationState(o.id),busy:o.time.busy/t,blocked:o.time.blocked/t,starved:o.time.starved/t,down:o.time.down/t,done:o.done,perHour:o.done/t*3600,queue:o.inputs.reduce((l,h)=>l+h.count,0),queueCap:o.inputs.reduce((l,h)=>l+h.buffer,0)})),n=e.filter(o=>o.role==="station");let s=null;n.forEach(o=>{const l=o.busy+o.down;(!s||l>s.busy+s.down)&&(s=o)});const a=e.filter(o=>o.role==="sink").reduce((o,l)=>o+l.done,0);return{time:this.time,finished:a,throughputPerHour:a/t*3600,wip:this.queues.reduce((o,l)=>o+l.count,0)+Object.values(this.stations).reduce((o,l)=>o+l.slots.filter(h=>h.state!=="idle").length,0),bottleneck:s?s.id:null,stations:e,queues:this.queues.map(o=>({from:o.from,to:o.to,count:o.count,buffer:o.buffer,avg:o.area/t,max:o.max}))}}}const C_={key:0,class:"flex flex-col gap-3"},P_={key:1,class:"hologram-empty"},L_={class:"hologram-empty__title"},D_={class:"hologram-empty__text"},I_={class:"hologram-empty__steps"},U_=["title"],N_=["title"],F_={class:"hologram-layout__label"},O_={class:"hologram-viewport"},B_={key:0,class:"hologram-kpis"},z_={class:"hologram-kpi__label"},k_={class:"hologram-kpi__value"},H_={class:"hologram-kpi__sub"},V_={class:"hologram-kpi"},G_={class:"hologram-kpi__label"},W_={class:"hologram-kpi__value is-good"},X_={class:"hologram-kpi__sub"},Y_={class:"hologram-kpi"},q_={class:"hologram-kpi__label"},$_={class:"hologram-kpi__sub"},Z_={class:"hologram-kpi"},K_={class:"hologram-kpi__label"},j_={class:"hologram-kpi__sub"},J_={key:1,class:"hologram-kpis"},Q_={class:"hologram-kpi"},tv={class:"hologram-kpi__label"},ev={class:"hologram-kpi__value"},nv={class:"hologram-kpi__sub"},iv={class:"hologram-kpi"},sv={class:"hologram-kpi__label"},rv={class:"hologram-kpi__value"},av={class:"hologram-kpi__sub"},ov={class:"hologram-kpi hologram-kpi--wide"},lv={class:"hologram-kpi__label"},cv={class:"hologram-kpi__value is-bad hologram-kpi__text"},hv={class:"hologram-kpi__sub"},uv={class:"hologram-mapctl"},dv=["title","aria-label"],fv=["title","aria-label"],pv=["title","aria-label"],mv=["title","aria-label"],gv={key:2,class:"hologram-simbar"},_v=["title"],vv={class:"hologram-muted"},xv={key:4,class:"hologram-panel"},Mv={class:"hologram-panel__head"},yv={key:0,class:"hologram-panel__num"},Sv={class:"hologram-facts"},Ev={class:"hologram-panel__sub"},bv={class:"hologram-signals"},wv={class:"hologram-panel__sub"},Tv={class:"hologram-panel__grid"},Av=["for"],Rv=["for"],Cv={key:5,class:"hologram-hint"},Pv=["aria-label"],Lv=["onClick"],Dv={class:"hologram-mcard__top"},Iv={class:"hologram-mcard__num"},Uv={class:"hologram-mcard__name"},Nv={class:"hologram-mcard__meta"},Fv={class:"hologram-muted"},Ov={key:0,class:"hologram-arrival"},Bv={for:"hologram-arrival"},zv={class:"hologram-stations"},kv={class:"hologram-stations__head"},Hv={class:"hologram-muted"},Vv={key:0,class:"hologram-stations__grid"},Gv=["for"],Wv=["for"],Xv=["for"],Yv=["for"],qv={class:"hologram-panel__sub"},yc="omni-hologram-view-v1",Sc="#94a3b8",$v={__name:"ComponentHologram",setup(i){const t=[1,10,60,300],n=Eh().proxy,s=()=>{var D,H;return(H=(D=n.$store)==null?void 0:D.state)==null?void 0:H.dataEnc},r=(D,H="",Z="get",dt=null)=>n.axios(bc(n.$apiHost,D,H,s(),Z,dt)),a=D=>Array.isArray(D)?D:Array.isArray(D==null?void 0:D.results)?D.results:[],o=(D,H)=>{var Z;return(Z=n.$toast)==null?void 0:Z.add({severity:D,summary:rt(D==="error"?"error":"success"),detail:H,life:D==="error"?5e3:3e3})};function l(){try{return JSON.parse(localStorage.getItem(yc)||"{}")||{}}catch{return{}}}function h(D){try{localStorage.setItem(yc,JSON.stringify({...l(),...D}))}catch{}}const d=l(),p=pe(!0),c=pe([]),u=pe([]),m=pe([]),M=pe([]),f=pe(d.id||null),g=pe(null),R=pe(d.mode==="sim"?"sim":"live"),b=pe(!0),Y=pe(["side","bottom","none"].includes(d.cards)?d.cards:"side"),U=pe(null),I=pe(null),X=pe(null);let Q=null;function v(){const D=I.value;if(!D||window.innerWidth<=991){X.value=null;return}const H=D.getBoundingClientRect().top+($.value?0:window.scrollY);X.value=Math.max(480,Math.floor(window.innerHeight-H-($.value?14:32)))}_n(U,D=>{Q==null||Q.disconnect(),D&&(Q=new ResizeObserver(()=>v()),Q.observe(D),Ws(v))});const E=pe(null),W=pe(null);let A=null;const z=Te(()=>[{value:"side",label:rt("hologram.layout.side"),icon:"pi pi-objects-column"},{value:"bottom",label:rt("hologram.layout.bottom"),icon:"pi pi-table"},{value:"none",label:rt("hologram.layout.none"),icon:"pi pi-eye-slash"}]),K=Te(()=>[{label:rt("hologram.modeLive"),value:"live",icon:"pi pi-wifi"},{label:rt("hologram.modeSim"),value:"sim",icon:"pi pi-sliders-h"}]),_=Te(()=>c.value.map(D=>({value:D.id,label:`${D.name} · v${D.version}`}))),S=Te(()=>{var D;return at((D=g.value)==null?void 0:D.scene)}),x=Te(()=>new Map((S.value.elements||[]).map(D=>[D.id,D]))),C=Te(()=>x.value.get(E.value)||null),L=Te(()=>A_(S.value)),N=Te(()=>new Map(L.value.map((D,H)=>[D,H+1])));function et(D){var H;return((H=u.value.find(Z=>Number(Z.id)===Number(D)))==null?void 0:H.name)||`#${D}`}function J(D){var H;return((H=m.value.find(Z=>Number(Z.id)===Number(D)))==null?void 0:H.name)||(D?`#${D}`:"")}function O(D){return M.value.find(H=>Number(H.id)===Number(D))||null}function j(D){return rt(`hologram.kinds.${D}`)}function at(D){return Array.isArray(D==null?void 0:D.elements)?{...D,elements:D.elements.map(H=>{var dt;const Z=H.machine_id?(dt=O(H.machine_id))==null?void 0:dt.name:"";return Z&&Z!==H.name?{...H,name:Z}:H})}:D||{}}function ct(D){return Object.values((D==null?void 0:D.stations)||{}).forEach(H=>{const Z=j(H.kind);H.name===H.id&&!Z.startsWith("hologram.")&&(H.name=`${Z} ${H.id}`)}),D}const gt=D=>String(D).padStart(2,"0"),bt=Te(()=>{var H;const D=S.value.scope||{type:"park"};if(D.type==="line")return rt("hologram.scope.lines",{list:(D.line_ids||[]).map(J).join(", ")});if(D.type==="machines"){const Z=D.machine_ids||[];return Z.length===1?((H=O(Z[0]))==null?void 0:H.name)||rt("hologram.scope.machines",{n:1}):rt("hologram.scope.machines",{n:Z.length})}return rt("hologram.scope.park",{park:g.value?et(g.value.server):""})});let Ht=!1;const zt=Fh({axios:n.axios,apiHost:n.$apiHost,dataEnc:s,onError:D=>o("error",D),onConnect:()=>o("success",rt("hologram.liveConnected")),onReconnect:()=>{var D;Ht||(Ht=!0,(D=n.$toast)==null||D.add({severity:"warn",summary:rt("hologram.liveReconnect"),life:3e3}))},onSignal:(D,H,Z)=>{R.value==="live"&&(A==null||A.signal(D,H,Z))}}),Zt=pe(Date.now());let B=null;const ce=Te(()=>{const D=zt.activity.lastAt?Math.max(0,Math.round((Zt.value-zt.activity.lastAt)/1e3)):null;return{connected:zt.connected.value,fresh:D!==null&&D<30,signals:zt.activity.signals,last:D}});let Ft=null;_n(()=>zt.live,()=>{R.value!=="live"||Ft||(Ft=requestAnimationFrame(()=>{Ft=null,A==null||A.applyLive(zt.live)}))},{deep:!0});const jt=D=>D!=null&&D.machine_id&&zt.live[String(D.machine_id)]||null,Dt=Te(()=>{const D={total:0,working:0,stopped:0,failure:0,noData:0};return(S.value.elements||[]).forEach(H=>{if(!H.machine_id)return;D.total+=1;const Z=jt(H),dt=Number(Z==null?void 0:Z.typeEvent);!Z||!Z.color?D.noData+=1:dt===1?D.working+=1:dt===3?D.failure+=1:D.stopped+=1}),D}),ie=Te(()=>jt(C.value));function Ot(D){if(!D)return"";const H=String(D).match(/(\d{1,2}:\d{2})(:\d{2})?/);return H?H[1]:String(D)}function P(D){const H=((D==null?void 0:D.substatuses)||[]).find(Z=>Z.value!=="-"&&Z.value!==void 0&&Z.value!==null&&Z.value!=="");return H?{value:`${Pr(H.value)}${H.unit?" "+H.unit:""}`,name:H.target}:null}const y=pe(null),q=pe(null),st=pe(!1),ut=pe(d.speed&&t.includes(d.speed)?d.speed:60),ot=t.map(D=>({label:`×${D}`,value:D}));let At=null,vt=null,wt=0,Jt=0;const pt=Te(()=>(S.value.flows||[]).length>0),Rt=Te(()=>y.value?Object.values(y.value.stations):[]),Ut=Te(()=>({busy:rt("hologram.sim.busy"),queue:rt("hologram.sim.queue"),pcs:rt("hologram.sim.pcs"),bottleneck:rt("hologram.sim.bottleneck")})),Nt=Te(()=>{var H,Z,dt,It;const D=(H=q.value)==null?void 0:H.bottleneck;return D?((It=(dt=(Z=y.value)==null?void 0:Z.stations)==null?void 0:dt[D])==null?void 0:It.name)||D:rt("hologram.sim.none")}),Mt=Te(()=>{var D,H;return C.value&&((H=(D=y.value)==null?void 0:D.stations)==null?void 0:H[C.value.id])||null});function Qt(D){const H=Math.floor(D||0);return`${Math.floor(H/3600)} h ${String(Math.floor(H%3600/60)).padStart(2,"0")} min`}function Bt(D){return`${Math.round((D||0)*100)}%`}function Xt(D){var H;return((H=q.value)==null?void 0:H.stations.find(Z=>Z.id===D))||null}function k(){y.value&&(At=new R_(y.value),St())}function St(){At&&(q.value=At.stats(),R.value==="sim"&&(A==null||A.applySimulation(q.value,[],Ut.value)))}function it(){y.value=ct(Mc(S.value)),st.value=!1,k()}function ht(){At||k(),st.value=!st.value,wt=0}function Et(){st.value=!1,k()}function Tt(){st.value=!1,k(),At.runFor((y.value.horizon_h||8)*3600,1),St()}function te(D){vt=requestAnimationFrame(te);const H=wt?Math.min(.25,(D-wt)/1e3):0;if(wt=D,!st.value||!At||R.value!=="sim")return;let Z=H*ut.value,dt=0;for(;Z>0;){const It=Math.min(1,Z);At.step(It),Z-=It;for(const Yt of At.transfers){if(dt>=40)break;A==null||A.spawnParticle(Yt.from,Yt.to),dt+=1}}Jt+=H,Jt>=.25&&(Jt=0,St())}function he(){const D=st.value;k(),st.value=D}_n(ut,D=>h({speed:D})),_n(st,D=>A==null?void 0:A.setSimRunning(D));const Le={busy:"busy",blocked:"blocked",starved:"starved",down:"down"},se=Te(()=>L.value.map(D=>x.value.get(D)).filter(Boolean).map(D=>{var It,Yt,Vt,ye;const H={id:D.id,number:gt(N.value.get(D.id)),name:D.name||((It=O(D.machine_id))==null?void 0:It.name)||D.id};if(R.value==="sim"){const kt=Xt(D.id),Pt=(Vt=(Yt=y.value)==null?void 0:Yt.stations)==null?void 0:Vt[D.id],Lt=(kt==null?void 0:kt.role)==="station"?Le[kt.state]:null;return H.color=Lt?ui[Lt]:Sc,H.state=Lt?rt(`hologram.sim.${Lt}`):rt("hologram.cards.outOfFlow"),H.alert=((ye=q.value)==null?void 0:ye.bottleneck)===D.id,H.meta=Pt&&(kt==null?void 0:kt.role)==="station"?rt("hologram.cards.simMeta",{cycle:Pr(Pt.cycle_s),busy:Bt(kt.busy),queue:kt.queue}):"",H}const Z=jt(D);H.color=(Z==null?void 0:Z.color)||Sc,H.state=(Z==null?void 0:Z.nameStatus)||rt("hologram.noLiveData"),H.alert=Number(Z==null?void 0:Z.typeEvent)===3;const dt=P(Z);return H.meta=dt?`${dt.value} · ${dt.name}`:Z!=null&&Z.date?rt("hologram.cards.since",{time:Ot(Z.date)}):"",H})),we=D=>({color:D,background:`color-mix(in srgb, ${D} 14%, transparent)`,borderColor:`color-mix(in srgb, ${D} 40%, transparent)`});function an(D){E.value=D,A==null||A.select(D),A==null||A.focus(D)}function Bs(){E.value=null,A==null||A.select(null)}async function zs(){var D;p.value=!0;try{const[H,Z,dt]=await Promise.all([r(un.hologram,"/?limit=200"),r(un.listServers,"/"),r(un.listLines,"/").catch(()=>({data:[]}))]);c.value=a(H.data),u.value=a(Z.data),m.value=a(dt.data),c.value.some(It=>It.id===f.value)||(f.value=((D=c.value[0])==null?void 0:D.id)||null)}catch(H){o("error",H.message)}finally{p.value=!1}}async function gn(D){if(!D){g.value=null,zt.stop();return}try{const H=await r(un.hologram,`/${D}/`);await yi(H.data,!0),h({id:D})}catch(H){o("error",`${rt("hologram.loadError")}: ${H.message}`)}}async function yi(D,H){var It,Yt;const Z=((It=g.value)==null?void 0:It.server)!==D.server;g.value=D;const dt=c.value.findIndex(Vt=>Vt.id===D.id);dt>=0&&c.value.splice(dt,1,{...c.value[dt],...D}),E.value=null,b.value=((Yt=D.settings)==null?void 0:Yt.labels)!==!1,(H||Z)&&await ks(D.server),await Ws(),!A&&W.value&&(A=new y_(W.value,{onSelect:Vt=>E.value=Vt})),A==null||A.setScene(S.value,D.settings||{}),A==null||A.setNumbers(N.value),y.value=ct(Mc(S.value)),st.value=!1,k(),(H||Z)&&(Ht=!1,zt.start(D.server).catch(Vt=>o("error",Vt.message))),os()}async function ks(D){try{const H=await r(un.listMachines,"/");M.value=a(H.data).filter(Z=>Number(Z.server)===Number(D))}catch{M.value=[]}}function os(){A&&(A.setMode(R.value),R.value==="live"?(st.value=!1,A.applyLive(zt.live)):St())}let ti=!1;_n(f,D=>{ti&&gn(D)}),_n(R,D=>{h({mode:D}),os()}),_n(b,D=>A==null?void 0:A.setLabelsVisible(D)),_n(Y,async D=>{h({cards:D}),await Ws(),v(),requestAnimationFrame(()=>ls())}),_n(E,D=>A==null?void 0:A.select(D));function ls(){var D,H;A==null||A.applyCamera((H=(D=g.value)==null?void 0:D.settings)==null?void 0:H.camera,S.value.floor,!0)}function Si(){A==null||A.topView()}const Hs=()=>A==null?void 0:A.zoom(.7),Vs=()=>A==null?void 0:A.zoom(1.4),Ei=pe(!1),cs=pe(!1),hs=pe(!1),w=()=>A==null?void 0:A.getCamera();function V(D){yi(D,!1)}const $=pe(!1);let tt=!1;const G=()=>document.fullscreenElement||document.webkitFullscreenElement||null;function mt(){var Z;if($.value){$.value=!1,G()&&((Z=document.exitFullscreen||document.webkitExitFullscreen)==null||Z.call(document));return}$.value=!0;const D=document.documentElement,H=D.requestFullscreen||D.webkitRequestFullscreen;try{const dt=H==null?void 0:H.call(D);dt&&typeof dt.catch=="function"&&dt.catch(()=>{})}catch{}}_n($,()=>Ws(v));function yt(){G()?tt=!0:tt&&(tt=!1,$.value=!1)}function Ct(D){D.key==="Escape"&&$.value&&!G()&&($.value=!1)}return bh(async()=>{vt=requestAnimationFrame(te),B=setInterval(()=>Zt.value=Date.now(),1e3),document.addEventListener("fullscreenchange",yt),document.addEventListener("webkitfullscreenchange",yt),document.addEventListener("keydown",Ct),window.addEventListener("resize",v),await zs(),ti=!0,f.value&&await gn(f.value)}),wh(()=>{var D;cancelAnimationFrame(vt),clearInterval(B),document.removeEventListener("fullscreenchange",yt),document.removeEventListener("webkitfullscreenchange",yt),document.removeEventListener("keydown",Ct),window.removeEventListener("resize",v),Q==null||Q.disconnect(),$.value&&G()&&((D=document.exitFullscreen||document.webkitExitFullscreen)==null||D.call(document)),Ft&&cancelAnimationFrame(Ft),zt.stop(),A==null||A.dispose(),A=null}),(D,H)=>(Kt(),ee("div",{class:ei(["hologram-root",{"is-fullscreen":$.value}])},[ne(nt(Rh),null,{content:vn(()=>{var Z,dt,It,Yt,Vt,ye,kt,Pt;return[p.value?(Kt(),ee("div",C_,[ne(nt(tl),{height:"2.5rem"}),ne(nt(tl),{height:"28rem"})])):c.value.length?(Kt(),ee(Be,{key:2},[lt("div",{ref_key:"toolbarEl",ref:U,class:"hologram-toolbar"},[ne(nt(Th),{modelValue:f.value,"onUpdate:modelValue":H[0]||(H[0]=Lt=>f.value=Lt),options:_.value,optionLabel:"label",optionValue:"value",placeholder:nt(rt)("hologram.select"),size:"small",class:"hologram-select"},null,8,["modelValue","options","placeholder"]),ne(nt(Yr),{modelValue:R.value,"onUpdate:modelValue":H[1]||(H[1]=Lt=>R.value=Lt),options:K.value,optionLabel:"label",optionValue:"value",allowEmpty:!1,size:"small"},null,8,["modelValue","options"]),g.value?(Kt(),ee("span",{key:0,class:"hologram-scope",title:nt(rt)("hologram.extendHint")},[H[16]||(H[16]=lt("i",{class:"pi pi-th-large","aria-hidden":"true"},null,-1)),De(ft(bt.value),1)],8,U_)):Pe("",!0),H[17]||(H[17]=lt("span",{class:"hologram-toolbar__spacer"},null,-1)),ne(nt(Yr),{modelValue:Y.value,"onUpdate:modelValue":H[2]||(H[2]=Lt=>Y.value=Lt),options:z.value,optionLabel:"label",optionValue:"value",allowEmpty:!1,size:"small",title:nt(rt)("hologram.layout.title"),"aria-label":nt(rt)("hologram.layout.title")},{option:vn(({option:Lt})=>[lt("i",{class:ei(Lt.icon),title:Lt.label,"aria-hidden":"true"},null,10,N_),lt("span",F_,ft(Lt.label),1)]),_:1},8,["modelValue","options","title","aria-label"]),ne(nt(Ah),{modelValue:b.value,"onUpdate:modelValue":H[3]||(H[3]=Lt=>b.value=Lt),onLabel:nt(rt)("hologram.labels"),offLabel:nt(rt)("hologram.labels"),onIcon:"pi pi-tag",offIcon:"pi pi-tag",size:"small"},null,8,["modelValue","onLabel","offLabel"]),ne(nt(xn),{label:$.value?nt(rt)("hologram.exitFullscreen"):nt(rt)("hologram.fullscreen"),icon:$.value?"pi pi-window-minimize":"pi pi-window-maximize",severity:"secondary",outlined:"",size:"small",onClick:mt},null,8,["label","icon"]),ne(nt(xn),{label:nt(rt)("hologram.configure"),icon:"pi pi-cog",severity:"secondary",outlined:"",size:"small",disabled:!g.value,onClick:H[4]||(H[4]=Lt=>cs.value=!0)},null,8,["label","disabled"]),ne(nt(xn),{label:nt(rt)("hologram.versions"),icon:"pi pi-history",severity:"secondary",outlined:"",size:"small",disabled:!g.value,onClick:H[5]||(H[5]=Lt=>hs.value=!0)},null,8,["label","disabled"])],512),lt("div",{ref_key:"stageEl",ref:I,class:ei(["hologram-stage",`is-${Y.value}`]),style:Tn(X.value?{height:`${X.value}px`}:null)},[lt("div",O_,[lt("div",{ref_key:"canvasHost",ref:W,class:"hologram-canvas"},null,512),R.value==="live"?(Kt(),ee("div",B_,[lt("div",{class:ei(["hologram-kpi hologram-kpi--live",{"is-on":ce.value.connected&&ce.value.fresh,"is-wait":ce.value.connected&&!ce.value.fresh}])},[lt("span",z_,[H[18]||(H[18]=lt("span",{class:"hologram-live__dot"},null,-1)),De(ft(ce.value.connected?nt(rt)("hologram.live"):nt(rt)("hologram.liveConnecting")),1)]),lt("strong",k_,ft(ce.value.signals),1),lt("span",H_,[De(ft(nt(rt)("hologram.kpi.signals")),1),ce.value.last!==null?(Kt(),ee(Be,{key:0},[De(" · "+ft(nt(rt)("hologram.liveLast",{s:ce.value.last})),1)],64)):Pe("",!0)])],2),lt("div",V_,[lt("span",G_,ft(nt(rt)("hologram.kpi.working")),1),lt("strong",W_,[De(ft(Dt.value.working),1),lt("small",null," / "+ft(Dt.value.total),1)]),lt("span",X_,ft(nt(rt)("hologram.kpi.machines")),1)]),lt("div",Y_,[lt("span",q_,ft(nt(rt)("hologram.kpi.stopped")),1),lt("strong",{class:ei(["hologram-kpi__value",{"is-warn":Dt.value.stopped}])},ft(Dt.value.stopped),3),lt("span",$_,ft(nt(rt)("hologram.kpi.stoppedHint")),1)]),lt("div",Z_,[lt("span",K_,ft(nt(rt)("hologram.kpi.failures")),1),lt("strong",{class:ei(["hologram-kpi__value",{"is-bad":Dt.value.failure}])},ft(Dt.value.failure),3),lt("span",j_,ft(Dt.value.noData?nt(rt)("hologram.kpi.noData",{n:Dt.value.noData}):nt(rt)("hologram.kpi.failuresHint")),1)])])):pt.value&&q.value?(Kt(),ee("div",J_,[lt("div",Q_,[lt("span",tv,ft(nt(rt)("hologram.sim.throughput")),1),lt("strong",ev,[De(ft(q.value.throughputPerHour.toFixed(1)),1),lt("small",null,ft(nt(rt)("hologram.sim.perHour")),1)]),lt("span",nv,ft(nt(rt)("hologram.sim.time"))+" "+ft(Qt(q.value.time)),1)]),lt("div",iv,[lt("span",sv,ft(nt(rt)("hologram.sim.finished")),1),lt("strong",rv,[De(ft(q.value.finished),1),lt("small",null,ft(nt(rt)("hologram.sim.pcs")),1)]),lt("span",av,ft(nt(rt)("hologram.sim.wip"))+" "+ft(q.value.wip),1)]),lt("div",ov,[lt("span",lv,ft(nt(rt)("hologram.sim.bottleneck")),1),lt("strong",cv,ft(Nt.value),1),lt("span",hv,ft(nt(rt)("hologram.kpi.bottleneckHint")),1)])])):Pe("",!0),lt("div",uv,[lt("button",{type:"button",title:nt(rt)("hologram.zoomIn"),"aria-label":nt(rt)("hologram.zoomIn"),onClick:Hs},[...H[19]||(H[19]=[lt("i",{class:"pi pi-plus"},null,-1)])],8,dv),lt("button",{type:"button",title:nt(rt)("hologram.zoomOut"),"aria-label":nt(rt)("hologram.zoomOut"),onClick:Vs},[...H[20]||(H[20]=[lt("i",{class:"pi pi-minus"},null,-1)])],8,fv),lt("button",{type:"button",title:nt(rt)("hologram.resetView"),"aria-label":nt(rt)("hologram.resetView"),onClick:ls},[...H[21]||(H[21]=[lt("i",{class:"pi pi-home"},null,-1)])],8,pv),lt("button",{type:"button",title:nt(rt)("hologram.topView"),"aria-label":nt(rt)("hologram.topView"),onClick:Si},[...H[22]||(H[22]=[lt("i",{class:"pi pi-map"},null,-1)])],8,mv)]),R.value==="sim"&&pt.value?(Kt(),ee("div",gv,[ne(nt(xn),{label:st.value?nt(rt)("hologram.sim.pause"):nt(rt)("hologram.sim.run"),icon:st.value?"pi pi-pause":"pi pi-play",severity:"primary",size:"small",onClick:ht},null,8,["label","icon"]),ne(nt(Yr),{modelValue:ut.value,"onUpdate:modelValue":H[6]||(H[6]=Lt=>ut.value=Lt),options:nt(ot),optionLabel:"label",optionValue:"value",allowEmpty:!1,size:"small",title:nt(rt)("hologram.sim.speed")},null,8,["modelValue","options","title"]),ne(nt(xn),{icon:"pi pi-replay",severity:"secondary",outlined:"",size:"small",title:nt(rt)("hologram.sim.reset"),"aria-label":nt(rt)("hologram.sim.reset"),onClick:Et},null,8,["title","aria-label"]),ne(nt(xn),{label:nt(rt)("hologram.sim.fastForward",{h:((Z=y.value)==null?void 0:Z.horizon_h)||8}),icon:"pi pi-forward",severity:"secondary",outlined:"",size:"small",onClick:Tt},null,8,["label"]),ne(nt(xn),{label:nt(rt)("hologram.sim.paramsOpen"),icon:"pi pi-sliders-h",severity:"secondary",outlined:"",size:"small",onClick:H[7]||(H[7]=Lt=>Ei.value=!0)},null,8,["label"]),lt("span",{class:"hologram-legend",title:nt(rt)("hologram.sim.legendHint")},[lt("span",vv,ft(nt(rt)("hologram.sim.legendTitle"))+":",1),(Kt(!0),ee(Be,null,Gs(nt(ui),(Lt,re)=>(Kt(),ee("span",{key:re},[lt("span",{class:"hologram-dot",style:Tn({background:Lt})},null,4),De(ft(nt(rt)(`hologram.sim.${re}`)),1)]))),128))],8,_v)])):R.value==="sim"?(Kt(),el(nt(Xr),{key:3,severity:"warn",size:"small",class:"hologram-simbar"},{default:vn(()=>[De(ft(nt(rt)("hologram.sim.noFlows")),1)]),_:1})):Pe("",!0),C.value?(Kt(),ee("aside",xv,[lt("div",Mv,[N.value.get(C.value.id)?(Kt(),ee("span",yv,ft(gt(N.value.get(C.value.id))),1)):Pe("",!0),lt("h4",null,ft(C.value.name||C.value.id),1),ne(nt(xn),{icon:"pi pi-times",text:"",rounded:"",size:"small",severity:"secondary","aria-label":nt(rt)("hologram.close"),onClick:Bs},null,8,["aria-label"])]),R.value==="live"&&C.value.machine_id?(Kt(),ee("span",{key:0,class:"hologram-state",style:Tn(we(((dt=ie.value)==null?void 0:dt.color)||"#94a3b8"))},[lt("span",{class:"hologram-dot",style:Tn({background:((It=ie.value)==null?void 0:It.color)||"#94a3b8"})},null,4),De(ft(((Yt=ie.value)==null?void 0:Yt.nameStatus)||nt(rt)("hologram.noLiveData")),1)],4)):Pe("",!0),R.value==="sim"&&((Vt=Xt(C.value.id))==null?void 0:Vt.role)==="station"?(Kt(),ee("span",{key:1,class:"hologram-state",style:Tn(we(nt(ui)[Xt(C.value.id).state]))},[lt("span",{class:"hologram-dot",style:Tn({background:nt(ui)[Xt(C.value.id).state]})},null,4),De(ft(nt(rt)(`hologram.sim.${Xt(C.value.id).state}`)),1)],4)):Pe("",!0),lt("dl",Sv,[lt("dt",null,ft(nt(rt)("hologram.kind")),1),lt("dd",null,ft(j(C.value.kind)),1),C.value.machine_id?(Kt(),ee(Be,{key:0},[lt("dt",null,ft(nt(rt)("hologram.machine")),1),lt("dd",null,ft(((ye=O(C.value.machine_id))==null?void 0:ye.name)||`#${C.value.machine_id}`),1),lt("dt",null,ft(nt(rt)("hologram.line")),1),lt("dd",null,ft(J(C.value.line_id||((kt=O(C.value.machine_id))==null?void 0:kt.line))||"–"),1)],64)):(Kt(),ee(Be,{key:1},[lt("dt",null,ft(nt(rt)("hologram.machine")),1),lt("dd",null,ft(nt(rt)("hologram.noMachine")),1)],64)),R.value==="live"&&((Pt=ie.value)!=null&&Pt.date)?(Kt(),ee(Be,{key:2},[lt("dt",null,ft(nt(rt)("hologram.since")),1),lt("dd",null,ft(ie.value.date),1)],64)):Pe("",!0),C.value.operators?(Kt(),ee(Be,{key:3},[lt("dt",null,ft(nt(rt)("hologram.operators")),1),lt("dd",null,ft(C.value.operators),1)],64)):Pe("",!0),R.value==="sim"&&Xt(C.value.id)?(Kt(),ee(Be,{key:4},[lt("dt",null,ft(nt(rt)("hologram.sim.utilization")),1),lt("dd",null,ft(Bt(Xt(C.value.id).busy)),1),lt("dt",null,ft(nt(rt)("hologram.sim.finished")),1),lt("dd",null,ft(Xt(C.value.id).done)+" "+ft(nt(rt)("hologram.sim.pcs")),1),lt("dt",null,ft(nt(rt)("hologram.sim.queue")),1),lt("dd",null,ft(Xt(C.value.id).queue)+" / "+ft(Xt(C.value.id).queueCap),1)],64)):Pe("",!0)]),R.value==="live"&&ie.value&&ie.value.substatuses.length?(Kt(),ee(Be,{key:2},[lt("h5",Ev,ft(nt(rt)("hologram.signals")),1),lt("ul",bv,[(Kt(!0),ee(Be,null,Gs(ie.value.substatuses,Lt=>(Kt(),ee("li",{key:Lt.tag},[lt("span",null,ft(Lt.target),1),lt("strong",null,ft(nt(Pr)(Lt.value))+" "+ft(Lt.unit),1)]))),128))])],64)):Pe("",!0),R.value==="sim"&&Mt.value&&Mt.value.role==="station"?(Kt(),ee(Be,{key:3},[lt("h5",wv,ft(nt(rt)("hologram.sim.params")),1),lt("div",Tv,[lt("label",{for:`panel-cycle-${Mt.value.id}`},ft(nt(rt)("hologram.sim.cycle")),9,Av),ne(nt(On),{modelValue:Mt.value.cycle_s,"onUpdate:modelValue":[H[8]||(H[8]=Lt=>Mt.value.cycle_s=Lt),he],inputId:`panel-cycle-${Mt.value.id}`,size:"small",min:.1,maxFractionDigits:1,useGrouping:!1,fluid:""},null,8,["modelValue","inputId"]),lt("label",{for:`panel-cap-${Mt.value.id}`},ft(nt(rt)("hologram.sim.capacity")),9,Rv),ne(nt(On),{modelValue:Mt.value.capacity,"onUpdate:modelValue":[H[9]||(H[9]=Lt=>Mt.value.capacity=Lt),he],inputId:`panel-cap-${Mt.value.id}`,size:"small",min:1,max:100,useGrouping:!1,fluid:""},null,8,["modelValue","inputId"])])],64)):Pe("",!0)])):R.value==="live"?(Kt(),ee("div",Cv,ft(nt(rt)("hologram.noSelection")),1)):Pe("",!0)]),se.value.length&&Y.value!=="none"?(Kt(),ee("div",{key:0,class:"hologram-cards",role:"list","aria-label":nt(rt)("hologram.layout.title")},[(Kt(!0),ee(Be,null,Gs(se.value,Lt=>(Kt(),ee("button",{key:Lt.id,type:"button",role:"listitem",class:ei(["hologram-mcard",{"is-selected":Lt.id===E.value,"is-alert":Lt.alert}]),style:Tn({"--state":Lt.color}),onClick:re=>an(Lt.id)},[lt("span",Dv,[lt("span",Iv,ft(Lt.number),1),lt("span",{class:"hologram-mcard__state",style:Tn(we(Lt.color))},ft(Lt.state),5)]),lt("span",Uv,ft(Lt.name),1),lt("span",Nv,ft(Lt.meta),1)],14,Lv))),128))],8,Pv)):Pe("",!0)],6)],64)):(Kt(),ee("div",P_,[H[15]||(H[15]=lt("i",{class:"pi pi-box hologram-empty__icon","aria-hidden":"true"},null,-1)),lt("h3",L_,ft(nt(rt)("hologram.mcpOnlyTitle")),1),lt("p",D_,ft(nt(rt)("hologram.mcpOnlyText")),1),ne(nt(Xr),{severity:"info",size:"small",class:"mb-3"},{default:vn(()=>[De(ft(nt(rt)("hologram.mcpModelHint")),1)]),_:1}),lt("ol",I_,[lt("li",null,ft(nt(rt)("hologram.mcpStep1")),1),lt("li",null,ft(nt(rt)("hologram.mcpStep2")),1),lt("li",null,ft(nt(rt)("hologram.mcpStep3")),1)]),ne(Lh,{holograms:c.value},null,8,["holograms"])]))]}),_:1}),ne(nt(Ch),{visible:Ei.value,"onUpdate:visible":H[12]||(H[12]=Z=>Ei.value=Z),modal:"",header:nt(rt)("hologram.sim.params"),style:{width:"60rem",maxWidth:"95vw"}},{footer:vn(()=>[ne(nt(xn),{label:nt(rt)("hologram.sim.restore"),icon:"pi pi-undo",severity:"secondary",outlined:"",size:"small",onClick:it},null,8,["label"]),ne(nt(xn),{label:nt(rt)("hologram.close"),icon:"pi pi-check",severity:"primary",size:"small",onClick:H[11]||(H[11]=Z=>Ei.value=!1)},null,8,["label"])]),default:vn(()=>[lt("p",Fv,ft(nt(rt)("hologram.sim.hint")),1),ne(nt(Xr),{severity:"secondary",size:"small",class:"hologram-params-help"},{default:vn(()=>[lt("ul",null,[lt("li",null,ft(nt(rt)("hologram.sim.helpCapacity")),1),lt("li",null,ft(nt(rt)("hologram.sim.helpBuffer")),1),lt("li",null,ft(nt(rt)("hologram.sim.helpStops")),1)])]),_:1}),y.value?(Kt(),ee("div",Ov,[lt("label",Bv,ft(nt(rt)("hologram.sim.arrival")),1),ne(nt(On),{modelValue:y.value.arrival_s,"onUpdate:modelValue":[H[10]||(H[10]=Z=>y.value.arrival_s=Z),he],inputId:"hologram-arrival",size:"small",min:.1,maxFractionDigits:1,useGrouping:!1,placeholder:nt(rt)("hologram.sim.arrivalHint")},null,8,["modelValue","placeholder"])])):Pe("",!0),lt("ul",zv,[(Kt(!0),ee(Be,null,Gs(Rt.value,Z=>{var dt,It,Yt;return Kt(),ee("li",{key:Z.id},[lt("div",kv,[lt("span",null,[lt("span",{class:"hologram-dot",style:Tn({background:Z.role==="station"&&nt(ui)[(dt=Xt(Z.id))==null?void 0:dt.state]||"#94a3b8"})},null,4),De(ft(Z.name),1)]),lt("small",Hv,[Z.role==="station"?(Kt(),ee(Be,{key:0},[De(ft(nt(rt)("hologram.sim.utilization"))+" "+ft(Bt((It=Xt(Z.id))==null?void 0:It.busy)),1)],64)):(Kt(),ee(Be,{key:1},[De(ft(((Yt=Xt(Z.id))==null?void 0:Yt.done)||0)+" "+ft(nt(rt)("hologram.sim.pcs")),1)],64))])]),Z.role==="station"?(Kt(),ee("div",Vv,[lt("label",{for:`sim-cycle-${Z.id}`},ft(nt(rt)("hologram.sim.cycle")),9,Gv),lt("label",{for:`sim-cap-${Z.id}`},ft(nt(rt)("hologram.sim.capacity")),9,Wv),lt("label",{for:`sim-mtbf-${Z.id}`},ft(nt(rt)("hologram.sim.mtbf")),9,Xv),lt("label",{for:`sim-stop-${Z.id}`},ft(nt(rt)("hologram.sim.stop")),9,Yv),ne(nt(On),{modelValue:Z.cycle_s,"onUpdate:modelValue":[Vt=>Z.cycle_s=Vt,he],inputId:`sim-cycle-${Z.id}`,size:"small",min:.1,maxFractionDigits:1,useGrouping:!1,fluid:""},null,8,["modelValue","onUpdate:modelValue","inputId"]),ne(nt(On),{modelValue:Z.capacity,"onUpdate:modelValue":[Vt=>Z.capacity=Vt,he],inputId:`sim-cap-${Z.id}`,size:"small",min:1,max:100,useGrouping:!1,fluid:""},null,8,["modelValue","onUpdate:modelValue","inputId"]),ne(nt(On),{modelValue:Z.mtbf_s,"onUpdate:modelValue":[Vt=>Z.mtbf_s=Vt,he],inputId:`sim-mtbf-${Z.id}`,size:"small",min:0,useGrouping:!1,fluid:""},null,8,["modelValue","onUpdate:modelValue","inputId"]),ne(nt(On),{modelValue:Z.stop_s,"onUpdate:modelValue":[Vt=>Z.stop_s=Vt,he],inputId:`sim-stop-${Z.id}`,size:"small",min:0,useGrouping:!1,fluid:""},null,8,["modelValue","onUpdate:modelValue","inputId"])])):Pe("",!0)])}),128))]),lt("h5",qv,ft(nt(rt)("hologram.sim.buffers")),1),y.value?(Kt(),el(nt(Ph),{key:1,value:y.value.flows,size:"small",scrollable:"",scrollHeight:"16rem"},{default:vn(()=>[ne(nt(nl),{header:nt(rt)("hologram.sim.station")},{body:vn(({data:Z})=>{var dt,It;return[De(ft((dt=y.value.stations[Z.from])==null?void 0:dt.name)+" → "+ft((It=y.value.stations[Z.to])==null?void 0:It.name),1)]}),_:1},8,["header"]),ne(nt(nl),{header:nt(rt)("hologram.sim.buffer"),style:{width:"9rem"}},{body:vn(({data:Z})=>[ne(nt(On),{modelValue:Z.buffer,"onUpdate:modelValue":[dt=>Z.buffer=dt,he],size:"small",min:0,useGrouping:!1,fluid:""},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["header"])]),_:1},8,["value"])):Pe("",!0)]),_:1},8,["visible","header"]),ne(Dh,{visible:cs.value,"onUpdate:visible":H[13]||(H[13]=Z=>cs.value=Z),hologram:g.value,machines:M.value,currentCamera:w,onSaved:V},null,8,["visible","hologram","machines"]),ne(Ih,{visible:hs.value,"onUpdate:visible":H[14]||(H[14]=Z=>hs.value=Z),hologram:g.value,onRestored:V},null,8,["visible","hologram"])],2))}},Zv=Sh($v,[["__scopeId","data-v-1065f435"]]),ix={__name:"Hologram",setup(i){return(t,e)=>(Kt(),ee("div",null,[ne(Zv)]))}};export{ix as default};
