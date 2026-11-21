import{c2 as $,ce as M,cS as w,cT as y,eR as q,o as p,g as b,h as a,c4 as c,cM as S,f as A,dp as K,c$ as z,dY as H,r as V,k as B,w as v,E as P,bJ as T,l as U,cN as N,co as W,t as j,X as _,a6 as G,i as n,aw as O,ci as J,eS as Q,s as Z,aH as ee,c as te,F as ne,J as re}from"./index-CnLA_YPI.js";var se=`
    .p-scrollpanel-content-container {
        overflow: hidden;
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1;
        float: left;
    }

    .p-scrollpanel-content {
        height: calc(100% + calc(2 * dt('scrollpanel.bar.size')));
        width: calc(100% + calc(2 * dt('scrollpanel.bar.size')));
        padding-inline: 0 calc(2 * dt('scrollpanel.bar.size'));
        padding-block: 0 calc(2 * dt('scrollpanel.bar.size'));
        position: relative;
        overflow: auto;
        box-sizing: border-box;
        scrollbar-width: none;
    }

    .p-scrollpanel-content::-webkit-scrollbar {
        display: none;
    }

    .p-scrollpanel-bar {
        position: relative;
        border-radius: dt('scrollpanel.bar.border.radius');
        z-index: 2;
        cursor: pointer;
        opacity: 0;
        outline-color: transparent;
        background: dt('scrollpanel.bar.background');
        border: 0 none;
        transition:
            outline-color dt('scrollpanel.transition.duration'),
            opacity dt('scrollpanel.transition.duration');
    }

    .p-scrollpanel-bar:focus-visible {
        box-shadow: dt('scrollpanel.bar.focus.ring.shadow');
        outline: dt('scrollpanel.barfocus.ring.width') dt('scrollpanel.bar.focus.ring.style') dt('scrollpanel.bar.focus.ring.color');
        outline-offset: dt('scrollpanel.barfocus.ring.offset');
    }

    .p-scrollpanel-bar-y {
        width: dt('scrollpanel.bar.size');
        inset-block-start: 0;
    }

    .p-scrollpanel-bar-x {
        height: dt('scrollpanel.bar.size');
        inset-block-end: 0;
    }

    .p-scrollpanel-hidden {
        visibility: hidden;
    }

    .p-scrollpanel:hover .p-scrollpanel-bar,
    .p-scrollpanel:active .p-scrollpanel-bar {
        opacity: 1;
    }

    .p-scrollpanel-grabbed {
        user-select: none;
    }
`,ae={root:"p-scrollpanel p-component",contentContainer:"p-scrollpanel-content-container",content:"p-scrollpanel-content",barX:"p-scrollpanel-bar p-scrollpanel-bar-x",barY:"p-scrollpanel-bar p-scrollpanel-bar-y"},ie=$.extend({name:"scrollpanel",style:se,classes:ae}),oe={name:"BaseScrollPanel",extends:M,props:{step:{type:Number,default:5}},style:ie,provide:function(){return{$pcScrollPanel:this,$parentInstance:this}}},C={name:"ScrollPanel",extends:oe,inheritAttrs:!1,initialized:!1,documentResizeListener:null,documentMouseMoveListener:null,documentMouseUpListener:null,frame:null,scrollXRatio:null,scrollYRatio:null,isXBarClicked:!1,isYBarClicked:!1,lastPageX:null,lastPageY:null,timer:null,outsideClickListener:null,data:function(){return{orientation:"vertical",lastScrollTop:0,lastScrollLeft:0}},mounted:function(){this.$el.offsetParent&&this.initialize()},updated:function(){!this.initialized&&this.$el.offsetParent&&this.initialize()},beforeUnmount:function(){this.unbindDocumentResizeListener(),this.frame&&window.cancelAnimationFrame(this.frame)},methods:{initialize:function(){this.moveBar(),this.bindDocumentResizeListener(),this.calculateContainerHeight()},calculateContainerHeight:function(){var e=getComputedStyle(this.$el),i=getComputedStyle(this.$refs.xBar),o=q(this.$el)-parseInt(i.height,10);e["max-height"]!=="none"&&o===0&&(this.$refs.content.offsetHeight+parseInt(i.height,10)>parseInt(e["max-height"],10)?this.$el.style.height=e["max-height"]:this.$el.style.height=this.$refs.content.offsetHeight+parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth)+"px")},moveBar:function(){var e=this;if(this.$refs.content){var i=this.$refs.content.scrollWidth,o=this.$refs.content.clientWidth,m=(this.$el.clientHeight-this.$refs.xBar.clientHeight)*-1;this.scrollXRatio=o/i;var r=this.$refs.content.scrollHeight,s=this.$refs.content.clientHeight,g=(this.$el.clientWidth-this.$refs.yBar.clientWidth)*-1;this.scrollYRatio=s/r;var u=Math.max(this.scrollYRatio*100,10);this.frame=this.requestAnimationFrame(function(){e.$refs.xBar&&(e.scrollXRatio>=1?(e.$refs.xBar.setAttribute("data-p-scrollpanel-hidden","true"),!e.isUnstyled&&y(e.$refs.xBar,"p-scrollpanel-hidden")):(e.$refs.xBar.setAttribute("data-p-scrollpanel-hidden","false"),!e.isUnstyled&&w(e.$refs.xBar,"p-scrollpanel-hidden"),e.$refs.xBar.style.cssText="width:"+Math.max(e.scrollXRatio*100,10)+"%; inset-inline-start:"+Math.abs(e.$refs.content.scrollLeft)/i*100+"%;bottom:"+m+"px;")),e.$refs.yBar&&(e.scrollYRatio>=1?(e.$refs.yBar.setAttribute("data-p-scrollpanel-hidden","true"),!e.isUnstyled&&y(e.$refs.yBar,"p-scrollpanel-hidden")):(e.$refs.yBar.setAttribute("data-p-scrollpanel-hidden","false"),!e.isUnstyled&&w(e.$refs.yBar,"p-scrollpanel-hidden"),e.$refs.yBar.style.cssText="height:"+u+"%; top: calc("+e.$refs.content.scrollTop/(r-s)*(100-u)+"% - "+e.$refs.xBar.clientHeight+"px); inset-inline-end:"+g+"px;"))})}},onYBarMouseDown:function(e){this.isYBarClicked=!0,this.$refs.yBar.focus(),this.lastPageY=e.pageY,this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","true"),!this.isUnstyled&&y(this.$refs.yBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","true"),!this.isUnstyled&&y(document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),e.preventDefault()},onXBarMouseDown:function(e){this.isXBarClicked=!0,this.$refs.xBar.focus(),this.lastPageX=e.pageX,this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&y(this.$refs.xBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&y(document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),e.preventDefault()},onScroll:function(e){this.lastScrollLeft!==e.target.scrollLeft?(this.lastScrollLeft=e.target.scrollLeft,this.orientation="horizontal"):this.lastScrollTop!==e.target.scrollTop&&(this.lastScrollTop=e.target.scrollTop,this.orientation="vertical"),this.moveBar()},onKeyDown:function(e){if(this.orientation==="vertical")switch(e.code){case"ArrowDown":{this.setTimer("scrollTop",this.step),e.preventDefault();break}case"ArrowUp":{this.setTimer("scrollTop",this.step*-1),e.preventDefault();break}case"ArrowLeft":case"ArrowRight":{e.preventDefault();break}}else if(this.orientation==="horizontal")switch(e.code){case"ArrowRight":{this.setTimer("scrollLeft",this.step),e.preventDefault();break}case"ArrowLeft":{this.setTimer("scrollLeft",this.step*-1),e.preventDefault();break}case"ArrowDown":case"ArrowUp":{e.preventDefault();break}}},onKeyUp:function(){this.clearTimer()},repeat:function(e,i){this.$refs.content[e]+=i,this.moveBar()},setTimer:function(e,i){var o=this;this.clearTimer(),this.timer=setTimeout(function(){o.repeat(e,i)},40)},clearTimer:function(){this.timer&&clearTimeout(this.timer)},onDocumentMouseMove:function(e){this.isXBarClicked?this.onMouseMoveForXBar(e):this.isYBarClicked?this.onMouseMoveForYBar(e):(this.onMouseMoveForXBar(e),this.onMouseMoveForYBar(e))},onMouseMoveForXBar:function(e){var i=this,o=e.pageX-this.lastPageX;this.lastPageX=e.pageX,this.frame=this.requestAnimationFrame(function(){i.$refs.content.scrollLeft+=o/i.scrollXRatio})},onMouseMoveForYBar:function(e){var i=this,o=e.pageY-this.lastPageY;this.lastPageY=e.pageY,this.frame=this.requestAnimationFrame(function(){i.$refs.content.scrollTop+=o/i.scrollYRatio})},onFocus:function(e){this.$refs.xBar.isSameNode(e.target)?this.orientation="horizontal":this.$refs.yBar.isSameNode(e.target)&&(this.orientation="vertical")},onBlur:function(){this.orientation==="horizontal"&&(this.orientation="vertical")},onDocumentMouseUp:function(){this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&w(this.$refs.yBar,"p-scrollpanel-grabbed"),this.$refs.xBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&w(this.$refs.xBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&w(document.body,"p-scrollpanel-grabbed"),this.unbindDocumentMouseListeners(),this.isXBarClicked=!1,this.isYBarClicked=!1},requestAnimationFrame:function(e){var i=window.requestAnimationFrame||this.timeoutFrame;return i(e)},refresh:function(){this.moveBar()},scrollTop:function(e){var i=this.$refs.content.scrollHeight-this.$refs.content.clientHeight;e=e>i?i:e>0?e:0,this.$refs.content.scrollTop=e},timeoutFrame:function(e){setTimeout(e,0)},bindDocumentMouseListeners:function(){var e=this;this.documentMouseMoveListener||(this.documentMouseMoveListener=function(i){e.onDocumentMouseMove(i)},document.addEventListener("mousemove",this.documentMouseMoveListener)),this.documentMouseUpListener||(this.documentMouseUpListener=function(i){e.onDocumentMouseUp(i)},document.addEventListener("mouseup",this.documentMouseUpListener))},unbindDocumentMouseListeners:function(){this.documentMouseMoveListener&&(document.removeEventListener("mousemove",this.documentMouseMoveListener),this.documentMouseMoveListener=null),this.documentMouseUpListener&&(document.removeEventListener("mouseup",this.documentMouseUpListener),this.documentMouseUpListener=null)},bindDocumentResizeListener:function(){var e=this;this.documentResizeListener||(this.documentResizeListener=function(){e.moveBar()},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentResizeListener:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)}},computed:{contentId:function(){return this.$id+"_content"}}},le=["id"],ce=["aria-controls","aria-valuenow"],ue=["aria-controls","aria-valuenow"];function de(t,e,i,o,m,r){return p(),b("div",c({class:t.cx("root")},t.ptmi("root")),[a("div",c({class:t.cx("contentContainer")},t.ptm("contentContainer")),[a("div",c({ref:"content",id:r.contentId,class:t.cx("content"),onScroll:e[0]||(e[0]=function(){return r.onScroll&&r.onScroll.apply(r,arguments)}),onMouseenter:e[1]||(e[1]=function(){return r.moveBar&&r.moveBar.apply(r,arguments)})},t.ptm("content")),[S(t.$slots,"default")],16,le)],16),a("div",c({ref:"xBar",class:t.cx("barx"),tabindex:"0",role:"scrollbar","aria-orientation":"horizontal","aria-controls":r.contentId,"aria-valuenow":m.lastScrollLeft,onMousedown:e[2]||(e[2]=function(){return r.onXBarMouseDown&&r.onXBarMouseDown.apply(r,arguments)}),onKeydown:e[3]||(e[3]=function(s){return r.onKeyDown(s)}),onKeyup:e[4]||(e[4]=function(){return r.onKeyUp&&r.onKeyUp.apply(r,arguments)}),onFocus:e[5]||(e[5]=function(){return r.onFocus&&r.onFocus.apply(r,arguments)}),onBlur:e[6]||(e[6]=function(){return r.onBlur&&r.onBlur.apply(r,arguments)})},t.ptm("barx"),{"data-pc-group-section":"bar"}),null,16,ce),a("div",c({ref:"yBar",class:t.cx("bary"),tabindex:"0",role:"scrollbar","aria-orientation":"vertical","aria-controls":r.contentId,"aria-valuenow":m.lastScrollTop,onMousedown:e[7]||(e[7]=function(){return r.onYBarMouseDown&&r.onYBarMouseDown.apply(r,arguments)}),onKeydown:e[8]||(e[8]=function(s){return r.onKeyDown(s)}),onKeyup:e[9]||(e[9]=function(){return r.onKeyUp&&r.onKeyUp.apply(r,arguments)}),onFocus:e[10]||(e[10]=function(){return r.onFocus&&r.onFocus.apply(r,arguments)})},t.ptm("bary"),{"data-pc-group-section":"bar"}),null,16,ue)],16)}C.render=de;var pe=`
    .p-scrolltop.p-button {
        position: fixed !important;
        inset-block-end: 20px;
        inset-inline-end: 20px;
    }

    .p-scrolltop-sticky.p-button {
        position: sticky !important;
        display: flex;
        margin-inline-start: auto;
    }

    .p-scrolltop-enter-from {
        opacity: 0;
    }

    .p-scrolltop-enter-active {
        transition: opacity 300ms;
    }

    .p-scrolltop-leave-to {
        opacity: 0;
    }

    .p-scrolltop-leave-active {
        transition: opacity 300ms;
    }
`,me={root:function(e){var i=e.props;return["p-scrolltop",{"p-scrolltop-sticky":i.target!=="window"}]},icon:"p-scrolltop-icon"},fe=$.extend({name:"scrolltop",style:pe,classes:me}),ve={name:"BaseScrollTop",extends:M,props:{target:{type:String,default:"window"},threshold:{type:Number,default:400},icon:{type:String,default:void 0},behavior:{type:String,default:"smooth"},buttonProps:{type:Object,default:function(){return{rounded:!0}}}},style:fe,provide:function(){return{$pcScrollTop:this,$parentInstance:this}}},F={name:"ScrollTop",extends:ve,inheritAttrs:!1,scrollListener:null,container:null,data:function(){return{visible:!1}},mounted:function(){this.target==="window"?this.bindDocumentScrollListener():this.target==="parent"&&this.bindParentScrollListener()},beforeUnmount:function(){this.target==="window"?this.unbindDocumentScrollListener():this.target==="parent"&&this.unbindParentScrollListener(),this.container&&(z.clear(this.container),this.overlay=null)},methods:{onClick:function(){var e=this.target==="window"?window:this.$el.parentElement;e.scroll({top:0,behavior:this.behavior})},checkVisibility:function(e){e>this.threshold?this.visible=!0:this.visible=!1},bindParentScrollListener:function(){var e=this;this.scrollListener=function(){e.checkVisibility(e.$el.parentElement.scrollTop)},this.$el.parentElement.addEventListener("scroll",this.scrollListener)},bindDocumentScrollListener:function(){var e=this;this.scrollListener=function(){e.checkVisibility(H())},window.addEventListener("scroll",this.scrollListener)},unbindParentScrollListener:function(){this.scrollListener&&(this.$el.parentElement.removeEventListener("scroll",this.scrollListener),this.scrollListener=null)},unbindDocumentScrollListener:function(){this.scrollListener&&(window.removeEventListener("scroll",this.scrollListener),this.scrollListener=null)},onEnter:function(e){z.set("overlay",e,this.$primevue.config.zIndex.overlay)},onAfterLeave:function(e){z.clear(e)},containerRef:function(e){this.container=e?e.$el:void 0}},computed:{scrollTopAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.scrollTop:void 0}},components:{ChevronUpIcon:K,Button:A}};function he(t,e,i,o,m,r){var s=V("Button");return p(),B(N,c({name:"p-scrolltop",appear:"",onEnter:r.onEnter,onAfterLeave:r.onAfterLeave},t.ptm("transition")),{default:v(function(){return[m.visible?(p(),B(s,c({key:0,ref:r.containerRef,class:t.cx("root"),onClick:r.onClick,"aria-label":r.scrollTopAriaLabel,unstyled:t.unstyled},t.buttonProps,{pt:t.ptm("root")}),{icon:v(function(g){return[S(t.$slots,"icon",{class:P(t.cx("icon"))},function(){return[(p(),B(T(t.icon?"span":"ChevronUpIcon"),c({class:[t.cx("icon"),t.icon,g.class]},t.ptm("root").icon,{"data-pc-section":"icon"}),null,16,["class"]))]})]}),_:3},16,["class","onClick","aria-label","unstyled","pt"])):U("",!0)]}),_:3},16,["onEnter","onAfterLeave"])}F.render=he;var be={root:"p-avatar-group p-component"},ge=$.extend({name:"avatargroup",classes:be}),ye={name:"BaseAvatarGroup",extends:M,style:ge,provide:function(){return{$pcAvatarGroup:this,$parentInstance:this}}},E={name:"AvatarGroup",extends:ye,inheritAttrs:!1};function we(t,e,i,o,m,r){return p(),b("div",c({class:t.cx("root")},t.ptmi("root")),[S(t.$slots,"default")],16)}E.render=we;var Le=`
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: dt('avatar.width');
        height: dt('avatar.height');
        font-size: dt('avatar.font.size');
        background: dt('avatar.background');
        color: dt('avatar.color');
        border-radius: dt('avatar.border.radius');
    }

    .p-avatar-image {
        background: transparent;
    }

    .p-avatar-circle {
        border-radius: 50%;
    }

    .p-avatar-circle img {
        border-radius: 50%;
    }

    .p-avatar-icon {
        font-size: dt('avatar.icon.size');
        width: dt('avatar.icon.size');
        height: dt('avatar.icon.size');
    }

    .p-avatar img {
        width: 100%;
        height: 100%;
    }

    .p-avatar-lg {
        width: dt('avatar.lg.width');
        height: dt('avatar.lg.width');
        font-size: dt('avatar.lg.font.size');
    }

    .p-avatar-lg .p-avatar-icon {
        font-size: dt('avatar.lg.icon.size');
        width: dt('avatar.lg.icon.size');
        height: dt('avatar.lg.icon.size');
    }

    .p-avatar-xl {
        width: dt('avatar.xl.width');
        height: dt('avatar.xl.width');
        font-size: dt('avatar.xl.font.size');
    }

    .p-avatar-xl .p-avatar-icon {
        font-size: dt('avatar.xl.icon.size');
        width: dt('avatar.xl.icon.size');
        height: dt('avatar.xl.icon.size');
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }

    .p-avatar-group .p-avatar + .p-avatar {
        margin-inline-start: dt('avatar.group.offset');
    }

    .p-avatar-group .p-avatar {
        border: 2px solid dt('avatar.group.border.color');
    }

    .p-avatar-group .p-avatar-lg + .p-avatar-lg {
        margin-inline-start: dt('avatar.lg.group.offset');
    }

    .p-avatar-group .p-avatar-xl + .p-avatar-xl {
        margin-inline-start: dt('avatar.xl.group.offset');
    }
`,xe={root:function(e){var i=e.props;return["p-avatar p-component",{"p-avatar-image":i.image!=null,"p-avatar-circle":i.shape==="circle","p-avatar-lg":i.size==="large","p-avatar-xl":i.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},Be=$.extend({name:"avatar",style:Le,classes:xe}),$e={name:"BaseAvatar",extends:M,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Be,provide:function(){return{$pcAvatar:this,$parentInstance:this}}};function L(t){"@babel/helpers - typeof";return L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(t)}function k(t,e,i){return(e=Me(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Me(t){var e=Se(t,"string");return L(e)=="symbol"?e:e+""}function Se(t,e){if(L(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var o=i.call(t,e);if(L(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var R={name:"Avatar",extends:$e,inheritAttrs:!1,emits:["error"],methods:{onError:function(e){this.$emit("error",e)}},computed:{dataP:function(){return W(k(k({},this.shape,this.shape),this.size,this.size))}}},ze=["aria-labelledby","aria-label","data-p"],De=["data-p"],ke=["data-p"],Ae=["src","alt","data-p"];function Pe(t,e,i,o,m,r){return p(),b("div",c({class:t.cx("root"),"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel},t.ptmi("root"),{"data-p":r.dataP}),[S(t.$slots,"default",{},function(){return[t.label?(p(),b("span",c({key:0,class:t.cx("label")},t.ptm("label"),{"data-p":r.dataP}),j(t.label),17,De)):t.$slots.icon?(p(),B(T(t.$slots.icon),{key:1,class:P(t.cx("icon"))},null,8,["class"])):t.icon?(p(),b("span",c({key:2,class:[t.cx("icon"),t.icon]},t.ptm("icon"),{"data-p":r.dataP}),null,16,ke)):t.image?(p(),b("img",c({key:3,src:t.image,alt:t.ariaLabel,onError:e[0]||(e[0]=function(){return r.onError&&r.onError.apply(r,arguments)})},t.ptm("image"),{"data-p":r.dataP}),null,16,Ae)):U("",!0)]})],16,ze)}R.render=Pe;const Te={class:"card"},Ue={class:"flex flex-col md:flex-row gap-4"},Ce={class:"md:w-1/2"},Fe={class:"md:w-1/2"},Ee={class:"flex flex-col md:flex-row gap-8"},Re={class:"md:w-1/2"},Xe={class:"card"},Ye={class:"flex gap-2"},Ie={class:"flex gap-6"},qe={class:"flex gap-2"},Ke={class:"flex items-start gap-2"},He={class:"card"},Ve={class:"card"},Ne={class:"md:w-1/2"},We={class:"card"},je={class:"flex gap-2"},_e={class:"flex gap-2"},Ge={class:"flex gap-2"},Oe={class:"card"},Je={class:"flex items-center flex-col sm:flex-row"},Qe={class:"flex items-center flex-col sm:flex-row"},Ze={class:"flex items-center flex-col sm:flex-row"},et={class:"card"},tt={class:"rounded-border border border-surface p-6"},nt={class:"flex mb-4"},rt={class:"flex justify-between mt-4"},at={__name:"MiscDoc",setup(t){const e=re(0);let i=null;function o(){i=setInterval(()=>{let r=e.value+Math.floor(Math.random()*10)+1;r>=100&&(r=100),e.value=r},2e3)}function m(){clearInterval(i),i=null}return _(()=>{o()}),G(()=>{m()}),(r,s)=>{const g=O,u=J,x=Q,D=A,f=R,X=E,Y=F,I=C,l=Z,d=ee,h=te;return p(),b(ne,null,[a("div",Te,[s[0]||(s[0]=a("div",{class:"font-semibold text-xl mb-4"},"ProgressBar",-1)),a("div",Ue,[a("div",Ce,[n(g,{value:e.value},null,8,["value"])]),a("div",Fe,[n(g,{value:50,showValue:!1})])])]),a("div",Ee,[a("div",Re,[a("div",Xe,[s[4]||(s[4]=a("div",{class:"font-semibold text-xl mb-4"},"Badge",-1)),a("div",Ye,[n(u,{value:2}),n(u,{value:8,severity:"success"}),n(u,{value:4,severity:"info"}),n(u,{value:12,severity:"Warn"}),n(u,{value:3,severity:"danger"})]),s[5]||(s[5]=a("div",{class:"font-semibold my-4"},"Overlay",-1)),a("div",Ie,[n(x,{value:"2"},{default:v(()=>[...s[1]||(s[1]=[a("i",{class:"pi pi-bell",style:{"font-size":"2rem"}},null,-1)])]),_:1}),n(x,{value:"4",severity:"danger"},{default:v(()=>[...s[2]||(s[2]=[a("i",{class:"pi pi-calendar",style:{"font-size":"2rem"}},null,-1)])]),_:1}),n(x,{severity:"danger"},{default:v(()=>[...s[3]||(s[3]=[a("i",{class:"pi pi-envelope",style:{"font-size":"2rem"}},null,-1)])]),_:1})]),s[6]||(s[6]=a("div",{class:"font-semibold my-4"},"Button",-1)),a("div",qe,[n(D,{label:"Emails",badge:"8",class:"mr-2"}),n(D,{label:"Messages",icon:"pi pi-users",severity:"warn",badge:"8",badgeClass:"p-badge-danger"})]),s[7]||(s[7]=a("div",{class:"font-semibold my-4"},"Sizes",-1)),a("div",Ke,[n(u,{value:2}),n(u,{value:4,size:"large",severity:"warn"}),n(u,{value:6,size:"xlarge",severity:"success"})])]),a("div",He,[s[8]||(s[8]=a("div",{class:"font-semibold text-xl mb-4"},"Avatar",-1)),s[9]||(s[9]=a("div",{class:"font-semibold mb-4"},"Group",-1)),n(X,null,{default:v(()=>[n(f,{image:"https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png",size:"large",shape:"circle"}),n(f,{image:"https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png",size:"large",shape:"circle"}),n(f,{image:"https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png",size:"large",shape:"circle"}),n(f,{image:"https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png",size:"large",shape:"circle"}),n(f,{image:"https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png",size:"large",shape:"circle"}),n(f,{label:"+2",shape:"circle",size:"large",style:{"background-color":"#9c27b0",color:"#ffffff"}})]),_:1}),s[10]||(s[10]=a("div",{class:"font-semibold my-4"},"Label - Circle",-1)),n(f,{label:"P",class:"mr-2",size:"xlarge",shape:"circle"}),n(f,{label:"V",class:"mr-2",size:"large",style:{"background-color":"#2196F3",color:"#ffffff"},shape:"circle"}),n(f,{label:"U",class:"mr-2",style:{"background-color":"#9c27b0",color:"#ffffff"},shape:"circle"}),s[11]||(s[11]=a("div",{class:"font-semibold my-4"},"Icon - Badge",-1)),n(x,{value:"4",severity:"danger",class:"inline-flex"},{default:v(()=>[n(f,{label:"U",size:"xlarge"})]),_:1})]),a("div",Ve,[s[13]||(s[13]=a("div",{class:"font-semibold text-xl mb-4"},"ScrollTop",-1)),n(I,{style:{width:"250px",height:"200px"}},{default:v(()=>[s[12]||(s[12]=a("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus. Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec. ",-1)),n(Y,{target:"parent",threshold:100,icon:"pi pi-arrow-up"})]),_:1})])]),a("div",Ne,[a("div",We,[s[14]||(s[14]=a("div",{class:"font-semibold text-xl mb-4"},"Tag",-1)),s[15]||(s[15]=a("div",{class:"font-semibold mb-4"},"Default",-1)),a("div",je,[n(l,{value:"Primary"}),n(l,{severity:"success",value:"Success"}),n(l,{severity:"info",value:"Info"}),n(l,{severity:"warn",value:"Warn"}),n(l,{severity:"danger",value:"Danger"})]),s[16]||(s[16]=a("div",{class:"font-semibold my-4"},"Pills",-1)),a("div",_e,[n(l,{value:"Primary",rounded:!0}),n(l,{severity:"success",value:"Success",rounded:!0}),n(l,{severity:"info",value:"Info",rounded:!0}),n(l,{severity:"warn",value:"Warn",rounded:!0}),n(l,{severity:"danger",value:"Danger",rounded:!0})]),s[17]||(s[17]=a("div",{class:"font-semibold my-4"},"Icons",-1)),a("div",Ge,[n(l,{icon:"pi pi-user",value:"Primary"}),n(l,{icon:"pi pi-check",severity:"success",value:"Success"}),n(l,{icon:"pi pi-info-circle",severity:"info",value:"Info"}),n(l,{con:"pi pi-exclamation-triangle",severity:"warn",value:"Warn"}),n(l,{icon:"pi pi-times",severity:"danger",value:"Danger"})])]),a("div",Oe,[s[18]||(s[18]=a("div",{class:"font-semibold text-xl mb-4"},"Chip",-1)),s[19]||(s[19]=a("div",{class:"font-semibold mb-4"},"Basic",-1)),a("div",Je,[n(d,{label:"Action",class:"mr-2 mb-2"}),n(d,{label:"Comedy",class:"mr-2 mb-2"}),n(d,{label:"Mystery",class:"mr-2 mb-2"}),n(d,{label:"Thriller",removable:!0,class:"mb-2"})]),s[20]||(s[20]=a("div",{class:"font-semibold my-4"},"Icon",-1)),a("div",Qe,[n(d,{label:"Apple",icon:"pi pi-apple",class:"mr-2 mb-2"}),n(d,{label:"Facebook",icon:"pi pi-facebook",class:"mr-2 mb-2"}),n(d,{label:"Google",icon:"pi pi-google",class:"mr-2 mb-2"}),n(d,{label:"Microsoft",icon:"pi pi-microsoft",removable:!0,class:"mb-2"})]),s[21]||(s[21]=a("div",{class:"font-semibold my-4"},"Image",-1)),a("div",Ze,[n(d,{label:"Amy Elsner",image:"https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png",class:"mr-2 mb-2"}),n(d,{label:"Asiya Javayant",image:"https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png",class:"mr-2 mb-2"}),n(d,{label:"Onyama Limba",image:"https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png",class:"mr-2 mb-2"})])]),a("div",et,[s[22]||(s[22]=a("div",{class:"font-semibold text-xl mb-4"},"Skeleton",-1)),a("div",tt,[a("div",nt,[n(h,{shape:"circle",size:"4rem",class:"mr-2"}),a("div",null,[n(h,{width:"10rem",class:"mb-2"}),n(h,{width:"5rem",class:"mb-2"}),n(h,{height:".5rem"})])]),n(h,{width:"100%",height:"150px"}),a("div",rt,[n(h,{width:"4rem",height:"2rem"}),n(h,{width:"4rem",height:"2rem"})])])])])])],64)}}};export{at as default};
