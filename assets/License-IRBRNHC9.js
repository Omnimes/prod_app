import{bS as M,bT as V,bU as P,o as l,g as c,bV as z,bW as T,l as h,_ as D,I as C,c as E,D as N,a0 as x,f as A,i as m,h as r,k as b,w as _,G as S,t as n,F as U,m as y,p as v,q as g}from"./index-DSRUV_2X.js";var B=`
    .p-divider-horizontal {
        display: flex;
        width: 100%;
        position: relative;
        align-items: center;
        margin: dt('divider.horizontal.margin');
        padding: dt('divider.horizontal.padding');
    }

    .p-divider-horizontal:before {
        position: absolute;
        display: block;
        inset-block-start: 50%;
        inset-inline-start: 0;
        width: 100%;
        content: '';
        border-block-start: 1px solid dt('divider.border.color');
    }

    .p-divider-horizontal .p-divider-content {
        padding: dt('divider.horizontal.content.padding');
    }

    .p-divider-vertical {
        min-height: 100%;
        display: flex;
        position: relative;
        justify-content: center;
        margin: dt('divider.vertical.margin');
        padding: dt('divider.vertical.padding');
    }

    .p-divider-vertical:before {
        position: absolute;
        display: block;
        inset-block-start: 0;
        inset-inline-start: 50%;
        height: 100%;
        content: '';
        border-inline-start: 1px solid dt('divider.border.color');
    }

    .p-divider.p-divider-vertical .p-divider-content {
        padding: dt('divider.vertical.content.padding');
    }

    .p-divider-content {
        z-index: 1;
        background: dt('divider.content.background');
        color: dt('divider.content.color');
    }

    .p-divider-solid.p-divider-horizontal:before {
        border-block-start-style: solid;
    }

    .p-divider-solid.p-divider-vertical:before {
        border-inline-start-style: solid;
    }

    .p-divider-dashed.p-divider-horizontal:before {
        border-block-start-style: dashed;
    }

    .p-divider-dashed.p-divider-vertical:before {
        border-inline-start-style: dashed;
    }

    .p-divider-dotted.p-divider-horizontal:before {
        border-block-start-style: dotted;
    }

    .p-divider-dotted.p-divider-vertical:before {
        border-inline-start-style: dotted;
    }

    .p-divider-left:dir(rtl),
    .p-divider-right:dir(rtl) {
        flex-direction: row-reverse;
    }
`,H={root:function(t){var i=t.props;return{justifyContent:i.layout==="horizontal"?i.align==="center"||i.align===null?"center":i.align==="left"?"flex-start":i.align==="right"?"flex-end":null:null,alignItems:i.layout==="vertical"?i.align==="center"||i.align===null?"center":i.align==="top"?"flex-start":i.align==="bottom"?"flex-end":null:null}}},I={root:function(t){var i=t.props;return["p-divider p-component","p-divider-"+i.layout,"p-divider-"+i.type,{"p-divider-left":i.layout==="horizontal"&&(!i.align||i.align==="left")},{"p-divider-center":i.layout==="horizontal"&&i.align==="center"},{"p-divider-right":i.layout==="horizontal"&&i.align==="right"},{"p-divider-top":i.layout==="vertical"&&i.align==="top"},{"p-divider-center":i.layout==="vertical"&&(!i.align||i.align==="center")},{"p-divider-bottom":i.layout==="vertical"&&i.align==="bottom"}]},content:"p-divider-content"},K=M.extend({name:"divider",style:B,classes:I,inlineStyles:H}),j={name:"BaseDivider",extends:V,props:{align:{type:String,default:null},layout:{type:String,default:"horizontal"},type:{type:String,default:"solid"}},style:K,provide:function(){return{$pcDivider:this,$parentInstance:this}}};function k(e){"@babel/helpers - typeof";return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(e)}function L(e,t,i){return(t=G(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function G(e){var t=Y(e,"string");return k(t)=="symbol"?t:t+""}function Y(e,t){if(k(e)!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var o=i.call(e,t);if(k(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var w={name:"Divider",extends:j,inheritAttrs:!1,computed:{dataP:function(){return P(L(L(L({},this.align,this.align),this.layout,this.layout),this.type,this.type))}}},J=["aria-orientation","data-p"],O=["data-p"];function q(e,t,i,o,a,s){return l(),c("div",z({class:e.cx("root"),style:e.sx("root"),role:"separator","aria-orientation":e.layout,"data-p":s.dataP},e.ptmi("root")),[e.$slots.default?(l(),c("div",z({key:0,class:e.cx("content"),"data-p":s.dataP},e.ptm("content")),[T(e.$slots,"default")],16,O)):h("",!0)],16,J)}w.render=q;const W={name:"ComponentLicence",components:{Button:A,Card:x,Divider:w,Message:N,Skeleton:E,Textarea:C},data(){return{config:g,licence:{count:0},numberUsedMachines:null,numberUsedStatuses:null,loading:!0,key:null,isLicenseValid:this.$store.state.isLicenseValid,licenseFlagsResolved:[0,0,0,0],licenseStatus:null}},computed:{licenseFlags(){return this.licenseFlagsResolved},effectiveStatus(){var i,o;const e=Number(this.licenseFlags[0]||0),t=Number((i=this.currentLicence)==null?void 0:i.left_days);if(e===4||((o=this.licenseStatus)==null?void 0:o.status)==="grace")return 4;if(Number.isFinite(t)){if(t<=0)return 3;if(e===0&&t<=7)return 1}return e},showFallbackExpiringAlert(){return Number(this.licenseFlags[0]||0)===0&&this.effectiveStatus===1},licenseBlockReasonCode(){return Number(this.licenseFlags[3]||0)},blockedReasonMessageKey(){const e=this.licenseBlockReasonCode;return e===1?"codeEnteredAfter24H":e===2?"removeLeftData":e===3?"licenseTamperDate":e===4?"licenseTamperLeftDays":e===5?"licenseTamperMachine":e===6?"licenseTamperSignal":e===7?"licenseTamperMultiple":e===8?"licenseGraceEnded":e===9?"licenseTamperGrace":""},blockedReasonMessage(){const e=this.blockedReasonMessageKey;return e?this.$t(e):`${this.$t("licenseKeyHasExpired")}. ${this.$t("pleaseEnterValidLicenseKey")}`},currentLicence(){var e,t;return((t=(e=this.licence)==null?void 0:e.results)==null?void 0:t[0])||null},contact(){var e;return((e=this.licenseStatus)==null?void 0:e.contact)||{email:"support@omnimes.com",www:"https://www.omnimes.com",phone:""}},statusMessage(){var e;return((e=this.licenseStatus)==null?void 0:e.message)||(this.effectiveStatus==3?this.blockedReasonMessage:"")},licenceContainerClass(){return this.effectiveStatus!=3?"border-green-500":"border-red-500"},dotSeverity(){return this.effectiveStatus!=3?"success":"danger"},isPerpetualLicence(){var i;if(!((i=this.currentLicence)!=null&&i.date_end))return!1;const e=new Date(this.currentLicence.date_end),t=new Date;return t.setFullYear(t.getFullYear()+100),e>t}},created(){this.syncLicenseFlags(),this.getStatus(),this.get(),this.probeLicenseMiddlewareCode(),this.getCountMachines(),this.getCountStatuses()},methods:{hasBlockedStatus(e){return Array.isArray(e)&&Number(e[0]||0)===3},normalizeLicenseFlags(e){const t=[0,0,0,0];if(Array.isArray(e)&&e.length>0)return[...e.map(o=>Number(o)).filter(o=>!Number.isNaN(o)),...t].slice(0,4);if(typeof e=="string"&&e.trim().length>0)try{const i=JSON.parse(e);if(Array.isArray(i)&&i.length>0)return[...i.map(a=>Number(a)).filter(a=>!Number.isNaN(a)),...t].slice(0,4)}catch{const o=e.split(",").map(a=>Number(String(a).trim())).filter(a=>!Number.isNaN(a));if(o.length>0)return[...o,...t].slice(0,4)}return t},extractLicenseFlags(e){var i,o,a,s,d;if(!e||typeof e!="object")return null;const t=[e.code,(i=e.results)==null?void 0:i.code,(o=e.data)==null?void 0:o.code,(a=e.result)==null?void 0:a.code,(d=(s=e.results)==null?void 0:s[0])==null?void 0:d.code];for(const u of t){const p=this.normalizeLicenseFlags(u);if(p.some(f=>Number(f)!==0)||u===0||u==="0"||Array.isArray(u)&&u.length>0)return p}if(Array.isArray(e.results)){const u=e.results.map(f=>f==null?void 0:f.code).find(f=>f!=null),p=this.normalizeLicenseFlags(u);if(p.some(f=>Number(f)!==0)||u!==void 0)return p}return null},syncLicenseFlags(e=null){var u;const t=this.normalizeLicenseFlags(e??this.extractLicenseFlags(this.licence)??((u=this.licence)==null?void 0:u.code)),i=this.normalizeLicenseFlags(this.$store.state.isLicenseValid),o=this.normalizeLicenseFlags(localStorage.getItem("isLicenseValid")),a=[t,i,o],s=a.find(p=>this.hasBlockedStatus(p));if(s){this.licenseFlagsResolved=s;return}const d=a.find(p=>Number((p==null?void 0:p[0])||0)>0);this.licenseFlagsResolved=d||[0,0,0,0]},toastSuccess(e){this.$toast.add({severity:"success",summary:this.$t("success"),detail:e,life:3e3})},toastError(e){this.$toast.add({severity:"error",summary:this.$t("error"),detail:e,life:4e3})},async get(){await v(g(this.$apiHost,this.$endpointSubscriptions,"",this.$store.state.dataEnc)).then(e=>{this.licence=e.data;const t=this.extractLicenseFlags(e==null?void 0:e.data);Array.isArray(t)&&this.$store.commit("setIsLicenseValid",t),this.syncLicenseFlags(t)}).catch(e=>{this.toastError(e.message)}).finally(()=>{this.syncLicenseFlags(),this.loading=!1,this.$forceUpdate()})},async getStatus(){try{const e=await v(g(this.$apiHost,this.$endpointSubscriptions,"/status/",this.$store.state.dataEnc));this.licenseStatus=e!=null&&e.data&&typeof e.data=="object"?e.data:null}catch{this.licenseStatus=null}},async probeLicenseMiddlewareCode(){var e;try{const t=await v(g(this.$apiHost,this.$endpointEvents,"/?limit=1",this.$store.state.dataEnc)),i=this.extractLicenseFlags(t==null?void 0:t.data);if(Array.isArray(i)){this.$store.commit("setIsLicenseValid",i),this.syncLicenseFlags(i);return}}catch(t){const i=this.extractLicenseFlags((e=t==null?void 0:t.response)==null?void 0:e.data);if(Array.isArray(i)){this.$store.commit("setIsLicenseValid",i),this.syncLicenseFlags(i);return}}this.syncLicenseFlags()},async getCountMachines(){await v(g(this.$apiHost,this.$endpointMachinesCount,"/",this.$store.state.dataEnc)).then(e=>{this.numberUsedMachines=e.data}).catch(e=>{this.toastError(e.message)}).finally(()=>{this.$forceUpdate()})},async getCountStatuses(){await v(g(this.$apiHost,this.$endpointStatusesCount,"/",this.$store.state.dataEnc)).then(e=>{this.numberUsedStatuses=e.data}).catch(e=>{this.toastError(e.message)}).finally(()=>{this.$forceUpdate()})},async activate(e){try{let t;e>0?t=await v(g(this.$apiHost,this.$endpointSubscriptions,"/"+e+"/",this.$store.state.dataEnc,"put",{key:this.key})):t=await v(g(this.$apiHost,this.$endpointSubscriptions+"/","",this.$store.state.dataEnc,"post",{key:this.key})),this.handleResponse(t)}catch(t){this.handleException(t)}},handleResponse(e){this.get(),this.getStatus(),this.$forceUpdate(),e.data.error?this.toastError(this.$t(e.data.error)):this.toastSuccess(this.$t("validLicenseKeyEntered"))},handleException(){this.toastError(this.$t("invalidLicenseKey"))}}},Q={class:"component-licence"},X={key:0,class:"licence-skeleton"},Z={class:"licence-skeleton-stats"},ee={class:"flex items-center gap-2 text-2xl font-semibold mb-2"},te={class:"mt-0 mb-3"},ie={class:"font-medium mb-1"},se={class:"mt-0 mb-3 pl-5 list-decimal"},ne={class:"flex flex-wrap gap-x-5 gap-y-1 text-sm"},re={class:"font-medium"},ae=["href"],le={key:1},oe=["href"],ce={key:3,class:"mb-4"},de={class:"block text-900 font-medium mb-2",for:"licence-key"},ue={key:1,class:"mb-4"},he={class:"block text-600 mb-2"},pe={class:"text-4xl font-semibold"},me={key:2,class:"mt-0"},fe={key:0},ye={class:"flex align-items-center mb-3"},ge={key:3,class:"flex align-items-center"},ve={key:6,class:"surface-card border-1 border-300 border-round p-4"},be={class:"text-3xl font-semibold"};function Se(e,t,i,o,a,s){const d=E,u=N,p=C,f=A,$=w,R=x;return l(),c("div",Q,[a.loading?(l(),c("div",X,[m(d,{width:"32%",height:"1.25rem"}),m(d,{width:"100%",height:"5.5rem"}),m(d,{width:"7.5rem",height:"2.25rem"}),m(d,{width:"100%",height:"1px"}),m(d,{width:"45%",height:"1.15rem"}),m(d,{width:"64%",height:"2.3rem"}),m(d,{width:"88%",height:"1.1rem"}),m(d,{width:"100%",height:"1px"}),r("div",Z,[m(d,{width:"54%",height:"1.15rem"}),m(d,{width:"66%",height:"1.15rem"})])])):(l(),b(R,{key:1},{content:_(()=>[s.effectiveStatus==3||s.effectiveStatus==4?(l(),c("div",{key:0,class:S(["border-1 border-round p-4 mb-4",s.effectiveStatus==3?"border-red-500":"border-orange-400"])},[r("div",ee,[r("i",{class:S(s.effectiveStatus==3?"pi pi-lock text-red-500":"pi pi-exclamation-triangle text-orange-500")},null,2),r("span",null,n(s.effectiveStatus==3?e.$t("licenseExpiredTitle"):e.$t("licenseGraceTitle")),1)]),r("p",te,n(s.statusMessage),1),e.$cloud?h("",!0):(l(),c(U,{key:0},[r("div",ie,n(e.$t("licenseRenewTitle")),1),r("ol",se,[r("li",null,n(e.$t("licenseRenewStep1",{email:s.contact.email})),1),r("li",null,n(e.$t("licenseRenewStep2")),1),r("li",null,n(e.$t("licenseRenewStep3")),1)])],64)),r("div",ne,[r("span",re,n(e.$t("licenseContactTitle"))+":",1),s.contact.email?(l(),c("a",{key:0,href:`mailto:${s.contact.email}`},[t[2]||(t[2]=r("i",{class:"pi pi-envelope mr-1"},null,-1)),y(n(s.contact.email),1)],8,ae)):h("",!0),s.contact.phone?(l(),c("span",le,[t[3]||(t[3]=r("i",{class:"pi pi-phone mr-1"},null,-1)),y(n(s.contact.phone),1)])):h("",!0),s.contact.www?(l(),c("a",{key:2,href:s.contact.www,target:"_blank",rel:"noopener noreferrer"},[t[4]||(t[4]=r("i",{class:"pi pi-globe mr-1"},null,-1)),y(n(s.contact.www),1)],8,oe)):h("",!0)])],2)):h("",!0),s.showFallbackExpiringAlert?(l(),b(u,{key:1,severity:"warn",closable:!1,class:"mb-4"},{default:_(()=>[y(n(e.$t("licenceseExpIn"))+n(s.currentLicence.left_days)+" "+n(e.$t("days")),1)]),_:1})):h("",!0),s.licenseFlags[2]==1?(l(),b(u,{key:2,severity:"warn",closable:!1,class:"mb-4"},{default:_(()=>[y(n(e.$t("activateLicence")),1)]),_:1})):h("",!0),e.$cloud?h("",!0):(l(),c("div",ce,[r("label",de,n(e.$t("enterYourLicenseCode")),1),m(p,{id:"licence-key",modelValue:a.key,"onUpdate:modelValue":t[0]||(t[0]=F=>a.key=F),rows:"4",class:"w-full mb-3",autoResize:""},null,8,["modelValue"]),m(f,{label:e.$t("activate"),icon:"pi pi-check",size:"small",onClick:t[1]||(t[1]=F=>s.activate(a.licence.count>0?a.licence.results[0].id:0))},null,8,["label"])])),e.$cloud?h("",!0):(l(),b($,{key:4,class:"my-4"})),s.currentLicence?(l(),c("div",{key:5,class:S(["surface-card border-1 border-round p-4",s.licenceContainerClass])},[s.effectiveStatus==3?(l(),b(u,{key:0,severity:"error",closable:!1,class:"mb-3"},{default:_(()=>[y(n(s.blockedReasonMessage),1)]),_:1})):h("",!0),!e.$cloud&&!s.isPerpetualLicence?(l(),c("div",ue,[r("span",he,n(e.$t("licenseHeld")),1),r("span",pe,n(s.currentLicence.date_end),1)])):h("",!0),e.$cloud?h("",!0):(l(),c("p",me,[y(n(e.$t("dateRelase"))+" ",1),r("strong",null,n(s.currentLicence.date_relase),1),!e.$cloud&&!s.isPerpetualLicence?(l(),c("span",fe,[y(n(e.$t("daysLeft"))+" ",1),r("strong",null,n(s.currentLicence.left_days),1)])):h("",!0)])),m($),r("div",ye,[r("span",{class:S(["license-dot mr-2",`license-dot--${s.dotSeverity}`]),"aria-hidden":"true"},null,2),r("span",null,n(s.currentLicence.signal)+" - "+n(e.$t("countSignalLicence")),1)]),a.numberUsedStatuses?(l(),c("div",ge,[r("span",{class:S(["license-dot mr-2",`license-dot--${s.dotSeverity}`]),"aria-hidden":"true"},null,2),r("span",null,n(a.numberUsedStatuses.count)+" / "+n(s.currentLicence.signal)+" - "+n(e.$t("countStatusesUsed")),1)])):h("",!0)],2)):(l(),c("div",ve,[r("span",be,n(e.$t("noLicence")),1)]))]),_:1}))])}const ke=D(W,[["render",Se],["__scopeId","data-v-e83b2674"]]),_e={class:"row"},Le={class:"col-lg-12 col-md-12 col-sm-12"},$e={__name:"License",setup(e){return(t,i)=>(l(),c("div",null,[r("div",_e,[r("div",Le,[m(ke)])])]))}};export{$e as default};
