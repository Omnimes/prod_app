import{aR as L,e as h,o as u,f as s,aQ as c,bK as x,aU as M,b9 as w,bc as y,dl as V,d as P,cg as j,bD as S,cl as W,r as T,g as z,w as v,j as U,E as C,bG as F,bI as N,b1 as O,t as G,h as n,b0 as D,aq as _,ar as J,as as Q,H as Z,s as ee,V as te,c as ne,F as re}from"./index-BJxfEoqY.js";var ae=`
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
`,se={root:"p-scrollpanel p-component",contentContainer:"p-scrollpanel-content-container",content:"p-scrollpanel-content",barX:"p-scrollpanel-bar p-scrollpanel-bar-x",barY:"p-scrollpanel-bar p-scrollpanel-bar-y"},ie=L.extend({name:"scrollpanel",style:ae,classes:se}),oe={name:"BaseScrollPanel",extends:M,props:{step:{type:Number,default:5}},style:ie,provide:function(){return{$pcScrollPanel:this,$parentInstance:this}}},E={name:"ScrollPanel",extends:oe,inheritAttrs:!1,initialized:!1,documentResizeListener:null,documentMouseMoveListener:null,documentMouseUpListener:null,frame:null,scrollXRatio:null,scrollYRatio:null,isXBarClicked:!1,isYBarClicked:!1,lastPageX:null,lastPageY:null,timer:null,outsideClickListener:null,data:function(){return{orientation:"vertical",lastScrollTop:0,lastScrollLeft:0}},mounted:function(){this.$el.offsetParent&&this.initialize()},updated:function(){!this.initialized&&this.$el.offsetParent&&this.initialize()},beforeUnmount:function(){this.unbindDocumentResizeListener(),this.frame&&window.cancelAnimationFrame(this.frame)},methods:{initialize:function(){this.moveBar(),this.bindDocumentResizeListener(),this.calculateContainerHeight()},calculateContainerHeight:function(){var e=getComputedStyle(this.$el),i=getComputedStyle(this.$refs.xBar),o=V(this.$el)-parseInt(i.height,10);e["max-height"]!=="none"&&o===0&&(this.$refs.content.offsetHeight+parseInt(i.height,10)>parseInt(e["max-height"],10)?this.$el.style.height=e["max-height"]:this.$el.style.height=this.$refs.content.offsetHeight+parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth)+"px")},moveBar:function(){var e=this;if(this.$refs.content){var i=this.$refs.content.scrollWidth,o=this.$refs.content.clientWidth,d=(this.$el.clientHeight-this.$refs.xBar.clientHeight)*-1;this.scrollXRatio=o/i;var a=this.$refs.content.scrollHeight,r=this.$refs.content.clientHeight,g=(this.$el.clientWidth-this.$refs.yBar.clientWidth)*-1;this.scrollYRatio=r/a;var p=Math.max(this.scrollYRatio*100,10);this.frame=this.requestAnimationFrame(function(){e.$refs.xBar&&(e.scrollXRatio>=1?(e.$refs.xBar.setAttribute("data-p-scrollpanel-hidden","true"),!e.isUnstyled&&y(e.$refs.xBar,"p-scrollpanel-hidden")):(e.$refs.xBar.setAttribute("data-p-scrollpanel-hidden","false"),!e.isUnstyled&&w(e.$refs.xBar,"p-scrollpanel-hidden"),e.$refs.xBar.style.cssText="width:"+Math.max(e.scrollXRatio*100,10)+"%; inset-inline-start:"+Math.abs(e.$refs.content.scrollLeft)/i*100+"%;bottom:"+d+"px;")),e.$refs.yBar&&(e.scrollYRatio>=1?(e.$refs.yBar.setAttribute("data-p-scrollpanel-hidden","true"),!e.isUnstyled&&y(e.$refs.yBar,"p-scrollpanel-hidden")):(e.$refs.yBar.setAttribute("data-p-scrollpanel-hidden","false"),!e.isUnstyled&&w(e.$refs.yBar,"p-scrollpanel-hidden"),e.$refs.yBar.style.cssText="height:"+p+"%; top: calc("+e.$refs.content.scrollTop/(a-r)*(100-p)+"% - "+e.$refs.xBar.clientHeight+"px); inset-inline-end:"+g+"px;"))})}},onYBarMouseDown:function(e){this.isYBarClicked=!0,this.$refs.yBar.focus(),this.lastPageY=e.pageY,this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","true"),!this.isUnstyled&&y(this.$refs.yBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","true"),!this.isUnstyled&&y(document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),e.preventDefault()},onXBarMouseDown:function(e){this.isXBarClicked=!0,this.$refs.xBar.focus(),this.lastPageX=e.pageX,this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&y(this.$refs.xBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&y(document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),e.preventDefault()},onScroll:function(e){this.lastScrollLeft!==e.target.scrollLeft?(this.lastScrollLeft=e.target.scrollLeft,this.orientation="horizontal"):this.lastScrollTop!==e.target.scrollTop&&(this.lastScrollTop=e.target.scrollTop,this.orientation="vertical"),this.moveBar()},onKeyDown:function(e){if(this.orientation==="vertical")switch(e.code){case"ArrowDown":{this.setTimer("scrollTop",this.step),e.preventDefault();break}case"ArrowUp":{this.setTimer("scrollTop",this.step*-1),e.preventDefault();break}case"ArrowLeft":case"ArrowRight":{e.preventDefault();break}}else if(this.orientation==="horizontal")switch(e.code){case"ArrowRight":{this.setTimer("scrollLeft",this.step),e.preventDefault();break}case"ArrowLeft":{this.setTimer("scrollLeft",this.step*-1),e.preventDefault();break}case"ArrowDown":case"ArrowUp":{e.preventDefault();break}}},onKeyUp:function(){this.clearTimer()},repeat:function(e,i){this.$refs.content[e]+=i,this.moveBar()},setTimer:function(e,i){var o=this;this.clearTimer(),this.timer=setTimeout(function(){o.repeat(e,i)},40)},clearTimer:function(){this.timer&&clearTimeout(this.timer)},onDocumentMouseMove:function(e){this.isXBarClicked?this.onMouseMoveForXBar(e):this.isYBarClicked?this.onMouseMoveForYBar(e):(this.onMouseMoveForXBar(e),this.onMouseMoveForYBar(e))},onMouseMoveForXBar:function(e){var i=this,o=e.pageX-this.lastPageX;this.lastPageX=e.pageX,this.frame=this.requestAnimationFrame(function(){i.$refs.content.scrollLeft+=o/i.scrollXRatio})},onMouseMoveForYBar:function(e){var i=this,o=e.pageY-this.lastPageY;this.lastPageY=e.pageY,this.frame=this.requestAnimationFrame(function(){i.$refs.content.scrollTop+=o/i.scrollYRatio})},onFocus:function(e){this.$refs.xBar.isSameNode(e.target)?this.orientation="horizontal":this.$refs.yBar.isSameNode(e.target)&&(this.orientation="vertical")},onBlur:function(){this.orientation==="horizontal"&&(this.orientation="vertical")},onDocumentMouseUp:function(){this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&w(this.$refs.yBar,"p-scrollpanel-grabbed"),this.$refs.xBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&w(this.$refs.xBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&w(document.body,"p-scrollpanel-grabbed"),this.unbindDocumentMouseListeners(),this.isXBarClicked=!1,this.isYBarClicked=!1},requestAnimationFrame:function(e){var i=window.requestAnimationFrame||this.timeoutFrame;return i(e)},refresh:function(){this.moveBar()},scrollTop:function(e){var i=this.$refs.content.scrollHeight-this.$refs.content.clientHeight;e=e>i?i:e>0?e:0,this.$refs.content.scrollTop=e},timeoutFrame:function(e){setTimeout(e,0)},bindDocumentMouseListeners:function(){var e=this;this.documentMouseMoveListener||(this.documentMouseMoveListener=function(i){e.onDocumentMouseMove(i)},document.addEventListener("mousemove",this.documentMouseMoveListener)),this.documentMouseUpListener||(this.documentMouseUpListener=function(i){e.onDocumentMouseUp(i)},document.addEventListener("mouseup",this.documentMouseUpListener))},unbindDocumentMouseListeners:function(){this.documentMouseMoveListener&&(document.removeEventListener("mousemove",this.documentMouseMoveListener),this.documentMouseMoveListener=null),this.documentMouseUpListener&&(document.removeEventListener("mouseup",this.documentMouseUpListener),this.documentMouseUpListener=null)},bindDocumentResizeListener:function(){var e=this;this.documentResizeListener||(this.documentResizeListener=function(){e.moveBar()},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentResizeListener:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)}},computed:{contentId:function(){return this.$id+"_content"}}},le=["id"],ce=["aria-controls","aria-valuenow"],ue=["aria-controls","aria-valuenow"];function de(t,e,i,o,d,a){return u(),h("div",c({class:t.cx("root")},t.ptmi("root")),[s("div",c({class:t.cx("contentContainer")},t.ptm("contentContainer")),[s("div",c({ref:"content",id:a.contentId,class:t.cx("content"),onScroll:e[0]||(e[0]=function(){return a.onScroll&&a.onScroll.apply(a,arguments)}),onMouseenter:e[1]||(e[1]=function(){return a.moveBar&&a.moveBar.apply(a,arguments)})},t.ptm("content")),[x(t.$slots,"default")],16,le)],16),s("div",c({ref:"xBar",class:t.cx("barx"),tabindex:"0",role:"scrollbar","aria-orientation":"horizontal","aria-controls":a.contentId,"aria-valuenow":d.lastScrollLeft,onMousedown:e[2]||(e[2]=function(){return a.onXBarMouseDown&&a.onXBarMouseDown.apply(a,arguments)}),onKeydown:e[3]||(e[3]=function(r){return a.onKeyDown(r)}),onKeyup:e[4]||(e[4]=function(){return a.onKeyUp&&a.onKeyUp.apply(a,arguments)}),onFocus:e[5]||(e[5]=function(){return a.onFocus&&a.onFocus.apply(a,arguments)}),onBlur:e[6]||(e[6]=function(){return a.onBlur&&a.onBlur.apply(a,arguments)})},t.ptm("barx"),{"data-pc-group-section":"bar"}),null,16,ce),s("div",c({ref:"yBar",class:t.cx("bary"),tabindex:"0",role:"scrollbar","aria-orientation":"vertical","aria-controls":a.contentId,"aria-valuenow":d.lastScrollTop,onMousedown:e[7]||(e[7]=function(){return a.onYBarMouseDown&&a.onYBarMouseDown.apply(a,arguments)}),onKeydown:e[8]||(e[8]=function(r){return a.onKeyDown(r)}),onKeyup:e[9]||(e[9]=function(){return a.onKeyUp&&a.onKeyUp.apply(a,arguments)}),onFocus:e[10]||(e[10]=function(){return a.onFocus&&a.onFocus.apply(a,arguments)})},t.ptm("bary"),{"data-pc-group-section":"bar"}),null,16,ue)],16)}E.render=de;var pe=`
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
`,me={root:function(e){var i=e.props;return["p-scrolltop",{"p-scrolltop-sticky":i.target!=="window"}]},icon:"p-scrolltop-icon"},fe=L.extend({name:"scrolltop",style:pe,classes:me}),ve={name:"BaseScrollTop",extends:M,props:{target:{type:String,default:"window"},threshold:{type:Number,default:400},icon:{type:String,default:void 0},behavior:{type:String,default:"smooth"},buttonProps:{type:Object,default:function(){return{rounded:!0}}}},style:fe,provide:function(){return{$pcScrollTop:this,$parentInstance:this}}},R={name:"ScrollTop",extends:ve,inheritAttrs:!1,scrollListener:null,container:null,data:function(){return{visible:!1}},mounted:function(){this.target==="window"?this.bindDocumentScrollListener():this.target==="parent"&&this.bindParentScrollListener()},beforeUnmount:function(){this.target==="window"?this.unbindDocumentScrollListener():this.target==="parent"&&this.unbindParentScrollListener(),this.container&&(S.clear(this.container),this.overlay=null)},methods:{onClick:function(){var e=this.target==="window"?window:this.$el.parentElement;e.scroll({top:0,behavior:this.behavior})},checkVisibility:function(e){e>this.threshold?this.visible=!0:this.visible=!1},bindParentScrollListener:function(){var e=this;this.scrollListener=function(){e.checkVisibility(e.$el.parentElement.scrollTop)},this.$el.parentElement.addEventListener("scroll",this.scrollListener)},bindDocumentScrollListener:function(){var e=this;this.scrollListener=function(){e.checkVisibility(W())},window.addEventListener("scroll",this.scrollListener)},unbindParentScrollListener:function(){this.scrollListener&&(this.$el.parentElement.removeEventListener("scroll",this.scrollListener),this.scrollListener=null)},unbindDocumentScrollListener:function(){this.scrollListener&&(window.removeEventListener("scroll",this.scrollListener),this.scrollListener=null)},onEnter:function(e){S.set("overlay",e,this.$primevue.config.zIndex.overlay)},onAfterLeave:function(e){S.clear(e)},containerRef:function(e){this.container=e?e.$el:void 0}},computed:{scrollTopAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.scrollTop:void 0}},components:{ChevronUpIcon:j,Button:P}};function he(t,e,i,o,d,a){var r=T("Button");return u(),z(N,c({name:"p-scrolltop",appear:"",onEnter:a.onEnter,onAfterLeave:a.onAfterLeave},t.ptm("transition")),{default:v(function(){return[d.visible?(u(),z(r,c({key:0,ref:a.containerRef,class:t.cx("root"),onClick:a.onClick,"aria-label":a.scrollTopAriaLabel,unstyled:t.unstyled},t.buttonProps,{pt:t.ptm("root")}),{icon:v(function(g){return[x(t.$slots,"icon",{class:C(t.cx("icon"))},function(){return[(u(),z(F(t.icon?"span":"ChevronUpIcon"),c({class:[t.cx("icon"),t.icon,g.class]},t.ptm("root").icon,{"data-pc-section":"icon"}),null,16,["class"]))]})]}),_:3},16,["class","onClick","aria-label","unstyled","pt"])):U("",!0)]}),_:3},16,["onEnter","onAfterLeave"])}R.render=he;var be={root:"p-avatar-group p-component"},ge=L.extend({name:"avatargroup",classes:be}),ye={name:"BaseAvatarGroup",extends:M,style:ge,provide:function(){return{$pcAvatarGroup:this,$parentInstance:this}}},I={name:"AvatarGroup",extends:ye,inheritAttrs:!1};function we(t,e,i,o,d,a){return u(),h("div",c({class:t.cx("root")},t.ptmi("root")),[x(t.$slots,"default")],16)}I.render=we;var Be=`
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
`,Le={root:function(e){var i=e.props;return["p-avatar p-component",{"p-avatar-image":i.image!=null,"p-avatar-circle":i.shape==="circle","p-avatar-lg":i.size==="large","p-avatar-xl":i.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},xe=L.extend({name:"avatar",style:Be,classes:Le}),$e={name:"BaseAvatar",extends:M,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:xe,provide:function(){return{$pcAvatar:this,$parentInstance:this}}};function B(t){"@babel/helpers - typeof";return B=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(t)}function k(t,e,i){return(e=ze(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function ze(t){var e=Me(t,"string");return B(e)=="symbol"?e:e+""}function Me(t,e){if(B(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var o=i.call(t,e);if(B(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var X={name:"Avatar",extends:$e,inheritAttrs:!1,emits:["error"],methods:{onError:function(e){this.$emit("error",e)}},computed:{dataP:function(){return O(k(k({},this.shape,this.shape),this.size,this.size))}}},Se=["aria-labelledby","aria-label","data-p"],De=["data-p"],Ae=["data-p"],ke=["src","alt","data-p"];function Pe(t,e,i,o,d,a){return u(),h("div",c({class:t.cx("root"),"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel},t.ptmi("root"),{"data-p":a.dataP}),[x(t.$slots,"default",{},function(){return[t.label?(u(),h("span",c({key:0,class:t.cx("label")},t.ptm("label"),{"data-p":a.dataP}),G(t.label),17,De)):t.$slots.icon?(u(),z(F(t.$slots.icon),{key:1,class:C(t.cx("icon"))},null,8,["class"])):t.icon?(u(),h("span",c({key:2,class:[t.cx("icon"),t.icon]},t.ptm("icon"),{"data-p":a.dataP}),null,16,Ae)):t.image?(u(),h("img",c({key:3,src:t.image,alt:t.ariaLabel,onError:e[0]||(e[0]=function(){return a.onError&&a.onError.apply(a,arguments)})},t.ptm("image"),{"data-p":a.dataP}),null,16,ke)):U("",!0)]})],16,Se)}X.render=Pe;var Te=`
    .p-overlaybadge {
        position: relative;
    }

    .p-overlaybadge .p-badge {
        position: absolute;
        inset-block-start: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
        outline-width: dt('overlaybadge.outline.width');
        outline-style: solid;
        outline-color: dt('overlaybadge.outline.color');
    }

    .p-overlaybadge .p-badge:dir(rtl) {
        transform: translate(-50%, -50%);
    }
`,Ue={root:"p-overlaybadge"},Ce=L.extend({name:"overlaybadge",style:Te,classes:Ue}),Fe={name:"OverlayBadge",extends:D,style:Ce,provide:function(){return{$pcOverlayBadge:this,$parentInstance:this}}},Y={name:"OverlayBadge",extends:Fe,inheritAttrs:!1,components:{Badge:D}};function Ee(t,e,i,o,d,a){var r=T("Badge");return u(),h("div",c({class:t.cx("root")},t.ptmi("root")),[x(t.$slots,"default"),n(r,c(t.$props,{pt:t.ptm("pcBadge")}),null,16,["pt"])],16)}Y.render=Ee;const Re={class:"card"},Ie={class:"flex flex-col md:flex-row gap-4"},Xe={class:"md:w-1/2"},Ye={class:"md:w-1/2"},qe={class:"flex flex-col md:flex-row gap-8"},Ke={class:"md:w-1/2"},He={class:"card"},Ve={class:"flex gap-2"},je={class:"flex gap-6"},We={class:"flex gap-2"},Ne={class:"flex items-start gap-2"},Oe={class:"card"},Ge={class:"card"},_e={class:"md:w-1/2"},Je={class:"card"},Qe={class:"flex gap-2"},Ze={class:"flex gap-2"},et={class:"flex gap-2"},tt={class:"card"},nt={class:"flex items-center flex-col sm:flex-row"},rt={class:"flex items-center flex-col sm:flex-row"},at={class:"flex items-center flex-col sm:flex-row"},st={class:"card"},it={class:"rounded-border border border-surface p-6"},ot={class:"flex mb-4"},lt={class:"flex justify-between mt-4"},ut={__name:"MiscDoc",setup(t){const e=_(0);let i=null;function o(){i=setInterval(()=>{let a=e.value+Math.floor(Math.random()*10)+1;a>=100&&(a=100),e.value=a},2e3)}function d(){clearInterval(i),i=null}return J(()=>{o()}),Q(()=>{d()}),(a,r)=>{const g=Z,p=D,$=Y,A=P,f=X,q=I,K=R,H=E,l=ee,m=te,b=ne;return u(),h(re,null,[s("div",Re,[r[0]||(r[0]=s("div",{class:"font-semibold text-xl mb-4"},"ProgressBar",-1)),s("div",Ie,[s("div",Xe,[n(g,{value:e.value},null,8,["value"])]),s("div",Ye,[n(g,{value:50,showValue:!1})])])]),s("div",qe,[s("div",Ke,[s("div",He,[r[4]||(r[4]=s("div",{class:"font-semibold text-xl mb-4"},"Badge",-1)),s("div",Ve,[n(p,{value:2}),n(p,{value:8,severity:"success"}),n(p,{value:4,severity:"info"}),n(p,{value:12,severity:"Warn"}),n(p,{value:3,severity:"danger"})]),r[5]||(r[5]=s("div",{class:"font-semibold my-4"},"Overlay",-1)),s("div",je,[n($,{value:"2"},{default:v(()=>[...r[1]||(r[1]=[s("i",{class:"pi pi-bell",style:{"font-size":"2rem"}},null,-1)])]),_:1}),n($,{value:"4",severity:"danger"},{default:v(()=>[...r[2]||(r[2]=[s("i",{class:"pi pi-calendar",style:{"font-size":"2rem"}},null,-1)])]),_:1}),n($,{severity:"danger"},{default:v(()=>[...r[3]||(r[3]=[s("i",{class:"pi pi-envelope",style:{"font-size":"2rem"}},null,-1)])]),_:1})]),r[6]||(r[6]=s("div",{class:"font-semibold my-4"},"Button",-1)),s("div",We,[n(A,{label:"Emails",badge:"8",class:"mr-2"}),n(A,{label:"Messages",icon:"pi pi-users",severity:"warn",badge:"8",badgeClass:"p-badge-danger"})]),r[7]||(r[7]=s("div",{class:"font-semibold my-4"},"Sizes",-1)),s("div",Ne,[n(p,{value:2}),n(p,{value:4,size:"large",severity:"warn"}),n(p,{value:6,size:"xlarge",severity:"success"})])]),s("div",Oe,[r[8]||(r[8]=s("div",{class:"font-semibold text-xl mb-4"},"Avatar",-1)),r[9]||(r[9]=s("div",{class:"font-semibold mb-4"},"Group",-1)),n(q,null,{default:v(()=>[n(f,{image:"https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png",size:"large",shape:"circle"}),n(f,{image:"https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png",size:"large",shape:"circle"}),n(f,{image:"https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png",size:"large",shape:"circle"}),n(f,{image:"https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png",size:"large",shape:"circle"}),n(f,{image:"https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png",size:"large",shape:"circle"}),n(f,{label:"+2",shape:"circle",size:"large",style:{"background-color":"#9c27b0",color:"#ffffff"}})]),_:1}),r[10]||(r[10]=s("div",{class:"font-semibold my-4"},"Label - Circle",-1)),n(f,{label:"P",class:"mr-2",size:"xlarge",shape:"circle"}),n(f,{label:"V",class:"mr-2",size:"large",style:{"background-color":"#2196F3",color:"#ffffff"},shape:"circle"}),n(f,{label:"U",class:"mr-2",style:{"background-color":"#9c27b0",color:"#ffffff"},shape:"circle"}),r[11]||(r[11]=s("div",{class:"font-semibold my-4"},"Icon - Badge",-1)),n($,{value:"4",severity:"danger",class:"inline-flex"},{default:v(()=>[n(f,{label:"U",size:"xlarge"})]),_:1})]),s("div",Ge,[r[13]||(r[13]=s("div",{class:"font-semibold text-xl mb-4"},"ScrollTop",-1)),n(H,{style:{width:"250px",height:"200px"}},{default:v(()=>[r[12]||(r[12]=s("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus. Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec. ",-1)),n(K,{target:"parent",threshold:100,icon:"pi pi-arrow-up"})]),_:1})])]),s("div",_e,[s("div",Je,[r[14]||(r[14]=s("div",{class:"font-semibold text-xl mb-4"},"Tag",-1)),r[15]||(r[15]=s("div",{class:"font-semibold mb-4"},"Default",-1)),s("div",Qe,[n(l,{value:"Primary"}),n(l,{severity:"success",value:"Success"}),n(l,{severity:"info",value:"Info"}),n(l,{severity:"warn",value:"Warn"}),n(l,{severity:"danger",value:"Danger"})]),r[16]||(r[16]=s("div",{class:"font-semibold my-4"},"Pills",-1)),s("div",Ze,[n(l,{value:"Primary",rounded:!0}),n(l,{severity:"success",value:"Success",rounded:!0}),n(l,{severity:"info",value:"Info",rounded:!0}),n(l,{severity:"warn",value:"Warn",rounded:!0}),n(l,{severity:"danger",value:"Danger",rounded:!0})]),r[17]||(r[17]=s("div",{class:"font-semibold my-4"},"Icons",-1)),s("div",et,[n(l,{icon:"pi pi-user",value:"Primary"}),n(l,{icon:"pi pi-check",severity:"success",value:"Success"}),n(l,{icon:"pi pi-info-circle",severity:"info",value:"Info"}),n(l,{con:"pi pi-exclamation-triangle",severity:"warn",value:"Warn"}),n(l,{icon:"pi pi-times",severity:"danger",value:"Danger"})])]),s("div",tt,[r[18]||(r[18]=s("div",{class:"font-semibold text-xl mb-4"},"Chip",-1)),r[19]||(r[19]=s("div",{class:"font-semibold mb-4"},"Basic",-1)),s("div",nt,[n(m,{label:"Action",class:"mr-2 mb-2"}),n(m,{label:"Comedy",class:"mr-2 mb-2"}),n(m,{label:"Mystery",class:"mr-2 mb-2"}),n(m,{label:"Thriller",removable:!0,class:"mb-2"})]),r[20]||(r[20]=s("div",{class:"font-semibold my-4"},"Icon",-1)),s("div",rt,[n(m,{label:"Apple",icon:"pi pi-apple",class:"mr-2 mb-2"}),n(m,{label:"Facebook",icon:"pi pi-facebook",class:"mr-2 mb-2"}),n(m,{label:"Google",icon:"pi pi-google",class:"mr-2 mb-2"}),n(m,{label:"Microsoft",icon:"pi pi-microsoft",removable:!0,class:"mb-2"})]),r[21]||(r[21]=s("div",{class:"font-semibold my-4"},"Image",-1)),s("div",at,[n(m,{label:"Amy Elsner",image:"https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png",class:"mr-2 mb-2"}),n(m,{label:"Asiya Javayant",image:"https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png",class:"mr-2 mb-2"}),n(m,{label:"Onyama Limba",image:"https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png",class:"mr-2 mb-2"})])]),s("div",st,[r[22]||(r[22]=s("div",{class:"font-semibold text-xl mb-4"},"Skeleton",-1)),s("div",it,[s("div",ot,[n(b,{shape:"circle",size:"4rem",class:"mr-2"}),s("div",null,[n(b,{width:"10rem",class:"mb-2"}),n(b,{width:"5rem",class:"mb-2"}),n(b,{height:".5rem"})])]),n(b,{width:"100%",height:"150px"}),s("div",lt,[n(b,{width:"4rem",height:"2rem"}),n(b,{width:"4rem",height:"2rem"})])])])])])],64)}}};export{ut as default};
