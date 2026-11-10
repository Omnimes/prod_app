import{aS as I,aV as M,b2 as G,bw as A,ds as oe,bi as le,dt as ae,dq as ue,b7 as S,bc as z,b4 as de,e as h,o as m,F as j,i as pe,g as C,j as $,bH as H,aR as p,f as r,bL as P,bI as ce,h as o,ae as O,t as R,E as me,w as a,ag as fe,bJ as he,bP as ge,aY as ve,aq as q,aD as be,ce as ye,cf as Se,I as ze,d as Pe,k as g,dl as xe,dm as we,du as _e,dv as Ee,dn as Le,aE as qe,B as $e,aM as Te}from"./index-DhBiOBhZ.js";import{s as Ie}from"./index-PZP0YYjN.js";import{s as Me}from"./index-BPbk1WaX.js";import{s as ke,a as De,b as Ae,c as je}from"./index-DQfCWxRS.js";import{s as Oe}from"./index-D39Brj2j.js";var Re=`
    .p-splitter {
        display: flex;
        flex-wrap: nowrap;
        border: 1px solid dt('splitter.border.color');
        background: dt('splitter.background');
        border-radius: dt('border.radius.md');
        color: dt('splitter.color');
    }

    .p-splitter-vertical {
        flex-direction: column;
    }

    .p-splitter-gutter {
        flex-grow: 0;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
        background: dt('splitter.gutter.background');
    }

    .p-splitter-gutter-handle {
        border-radius: dt('splitter.handle.border.radius');
        background: dt('splitter.handle.background');
        transition:
            outline-color dt('splitter.transition.duration'),
            box-shadow dt('splitter.transition.duration');
        outline-color: transparent;
    }

    .p-splitter-gutter-handle:focus-visible {
        box-shadow: dt('splitter.handle.focus.ring.shadow');
        outline: dt('splitter.handle.focus.ring.width') dt('splitter.handle.focus.ring.style') dt('splitter.handle.focus.ring.color');
        outline-offset: dt('splitter.handle.focus.ring.offset');
    }

    .p-splitter-horizontal.p-splitter-resizing {
        cursor: col-resize;
        user-select: none;
    }

    .p-splitter-vertical.p-splitter-resizing {
        cursor: row-resize;
        user-select: none;
    }

    .p-splitter-horizontal > .p-splitter-gutter > .p-splitter-gutter-handle {
        height: dt('splitter.handle.size');
        width: 100%;
    }

    .p-splitter-vertical > .p-splitter-gutter > .p-splitter-gutter-handle {
        width: dt('splitter.handle.size');
        height: 100%;
    }

    .p-splitter-horizontal > .p-splitter-gutter {
        cursor: col-resize;
    }

    .p-splitter-vertical > .p-splitter-gutter {
        cursor: row-resize;
    }

    .p-splitterpanel {
        flex-grow: 1;
        overflow: hidden;
    }

    .p-splitterpanel-nested {
        display: flex;
    }

    .p-splitterpanel .p-splitter {
        flex-grow: 1;
        border: 0 none;
    }
`,Be={root:function(e){var n=e.props;return["p-splitter p-component","p-splitter-"+n.layout]},gutter:"p-splitter-gutter",gutterHandle:"p-splitter-gutter-handle"},Ne=I.extend({name:"splitter",style:Re,classes:Be}),Ue={name:"BaseSplitter",extends:M,props:{layout:{type:String,default:"horizontal"},gutterSize:{type:Number,default:4},stateKey:{type:String,default:null},stateStorage:{type:String,default:"session"},step:{type:Number,default:5}},style:Ne,provide:function(){return{$pcSplitter:this,$parentInstance:this}}};function v(t){"@babel/helpers - typeof";return v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(t)}function B(t,e,n){return(e=Ke(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ke(t){var e=Ge(t,"string");return v(e)=="symbol"?e:e+""}function Ge(t,e){if(v(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var l=n.call(t,e);if(v(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function N(t){return Ve(t)||Fe(t)||He(t)||Ce()}function Ce(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function He(t,e){if(t){if(typeof t=="string")return T(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?T(t,e):void 0}}function Fe(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ve(t){if(Array.isArray(t))return T(t)}function T(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,l=Array(e);n<e;n++)l[n]=t[n];return l}var F={name:"Splitter",extends:Ue,inheritAttrs:!1,emits:["resizestart","resizeend","resize"],dragging:!1,mouseMoveListener:null,mouseUpListener:null,touchMoveListener:null,touchEndListener:null,size:null,gutterElement:null,startPos:null,prevPanelElement:null,nextPanelElement:null,nextPanelSize:null,prevPanelSize:null,panelSizes:null,prevPanelIndex:null,timer:null,data:function(){return{prevSize:null}},mounted:function(){this.initializePanels()},beforeUnmount:function(){this.clear(),this.unbindMouseListeners()},methods:{isSplitterPanel:function(e){return e.type.name==="SplitterPanel"},initializePanels:function(){var e=this;if(this.panels&&this.panels.length){var n=!1;if(this.isStateful()&&(n=this.restoreState()),!n){var l=N(this.$el.children).filter(function(s){return s.getAttribute("data-pc-name")==="splitterpanel"}),u=[];this.panels.map(function(s,i){var d=s.props&&de(s.props.size)?s.props.size:null,f=d??100/e.panels.length;u[i]=f,l[i].style.flexBasis="calc("+f+"% - "+(e.panels.length-1)*e.gutterSize+"px)"}),this.panelSizes=u,this.prevSize=parseFloat(u[0]).toFixed(4)}}},onResizeStart:function(e,n,l){this.gutterElement=e.currentTarget||e.target.parentElement,this.size=this.horizontal?ae(this.$el):ue(this.$el),l||(this.dragging=!0,this.startPos=this.layout==="horizontal"?e.pageX||e.changedTouches[0].pageX:e.pageY||e.changedTouches[0].pageY),this.prevPanelElement=this.gutterElement.previousElementSibling,this.nextPanelElement=this.gutterElement.nextElementSibling,l?(this.prevPanelSize=this.horizontal?S(this.prevPanelElement,!0):z(this.prevPanelElement,!0),this.nextPanelSize=this.horizontal?S(this.nextPanelElement,!0):z(this.nextPanelElement,!0)):(this.prevPanelSize=100*(this.horizontal?S(this.prevPanelElement,!0):z(this.prevPanelElement,!0))/this.size,this.nextPanelSize=100*(this.horizontal?S(this.nextPanelElement,!0):z(this.nextPanelElement,!0))/this.size),this.prevPanelIndex=n,this.$emit("resizestart",{originalEvent:e,sizes:this.panelSizes}),this.$refs.gutter[n].setAttribute("data-p-gutter-resizing",!0),this.$el.setAttribute("data-p-resizing",!0)},onResize:function(e,n,l){var u,s,i;l?this.horizontal?(s=100*(this.prevPanelSize+n)/this.size,i=100*(this.nextPanelSize-n)/this.size):(s=100*(this.prevPanelSize-n)/this.size,i=100*(this.nextPanelSize+n)/this.size):(this.horizontal?le(this.$el)?u=(this.startPos-e.pageX)*100/this.size:u=(e.pageX-this.startPos)*100/this.size:u=(e.pageY-this.startPos)*100/this.size,s=this.prevPanelSize+u,i=this.nextPanelSize-u),this.validateResize(s,i)||(s=Math.min(Math.max(this.prevPanelMinSize,s),100-this.nextPanelMinSize),i=Math.min(Math.max(this.nextPanelMinSize,i),100-this.prevPanelMinSize)),this.prevPanelElement.style.flexBasis="calc("+s+"% - "+(this.panels.length-1)*this.gutterSize+"px)",this.nextPanelElement.style.flexBasis="calc("+i+"% - "+(this.panels.length-1)*this.gutterSize+"px)",this.panelSizes[this.prevPanelIndex]=s,this.panelSizes[this.prevPanelIndex+1]=i,this.prevSize=parseFloat(s).toFixed(4),this.$emit("resize",{originalEvent:e,sizes:this.panelSizes})},onResizeEnd:function(e){this.isStateful()&&this.saveState(),this.$emit("resizeend",{originalEvent:e,sizes:this.panelSizes}),this.$refs.gutter.forEach(function(n){return n.setAttribute("data-p-gutter-resizing",!1)}),this.$el.setAttribute("data-p-resizing",!1),this.clear()},repeat:function(e,n,l){this.onResizeStart(e,n,!0),this.onResize(e,l,!0)},setTimer:function(e,n,l){var u=this;this.timer||(this.timer=setInterval(function(){u.repeat(e,n,l)},40))},clearTimer:function(){this.timer&&(clearInterval(this.timer),this.timer=null)},onGutterKeyUp:function(){this.clearTimer(),this.onResizeEnd()},onGutterKeyDown:function(e,n){switch(e.code){case"ArrowLeft":{this.layout==="horizontal"&&this.setTimer(e,n,this.step*-1),e.preventDefault();break}case"ArrowRight":{this.layout==="horizontal"&&this.setTimer(e,n,this.step),e.preventDefault();break}case"ArrowDown":{this.layout==="vertical"&&this.setTimer(e,n,this.step*-1),e.preventDefault();break}case"ArrowUp":{this.layout==="vertical"&&this.setTimer(e,n,this.step),e.preventDefault();break}}},onGutterMouseDown:function(e,n){this.onResizeStart(e,n),this.bindMouseListeners()},onGutterTouchStart:function(e,n){this.onResizeStart(e,n),this.bindTouchListeners(),e.preventDefault()},onGutterTouchMove:function(e){this.onResize(e),e.preventDefault()},onGutterTouchEnd:function(e){this.onResizeEnd(e),this.unbindTouchListeners(),e.preventDefault()},bindMouseListeners:function(){var e=this;this.mouseMoveListener||(this.mouseMoveListener=function(n){return e.onResize(n)},document.addEventListener("mousemove",this.mouseMoveListener)),this.mouseUpListener||(this.mouseUpListener=function(n){e.onResizeEnd(n),e.unbindMouseListeners()},document.addEventListener("mouseup",this.mouseUpListener))},bindTouchListeners:function(){var e=this;this.touchMoveListener||(this.touchMoveListener=function(n){return e.onResize(n.changedTouches[0])},document.addEventListener("touchmove",this.touchMoveListener)),this.touchEndListener||(this.touchEndListener=function(n){e.resizeEnd(n),e.unbindTouchListeners()},document.addEventListener("touchend",this.touchEndListener))},validateResize:function(e,n){return!(e>100||e<0||n>100||n<0||this.prevPanelMinSize>e||this.nextPanelMinSize>n)},unbindMouseListeners:function(){this.mouseMoveListener&&(document.removeEventListener("mousemove",this.mouseMoveListener),this.mouseMoveListener=null),this.mouseUpListener&&(document.removeEventListener("mouseup",this.mouseUpListener),this.mouseUpListener=null)},unbindTouchListeners:function(){this.touchMoveListener&&(document.removeEventListener("touchmove",this.touchMoveListener),this.touchMoveListener=null),this.touchEndListener&&(document.removeEventListener("touchend",this.touchEndListener),this.touchEndListener=null)},clear:function(){this.dragging=!1,this.size=null,this.startPos=null,this.prevPanelElement=null,this.nextPanelElement=null,this.prevPanelSize=null,this.nextPanelSize=null,this.gutterElement=null,this.prevPanelIndex=null},isStateful:function(){return this.stateKey!=null},getStorage:function(){switch(this.stateStorage){case"local":return window.localStorage;case"session":return window.sessionStorage;default:throw new Error(this.stateStorage+' is not a valid value for the state storage, supported values are "local" and "session".')}},saveState:function(){oe(this.panelSizes)&&this.getStorage().setItem(this.stateKey,JSON.stringify(this.panelSizes))},restoreState:function(){var e=this,n=this.getStorage(),l=n.getItem(this.stateKey);if(l){this.panelSizes=JSON.parse(l);var u=N(this.$el.children).filter(function(s){return s.getAttribute("data-pc-name")==="splitterpanel"});return u.forEach(function(s,i){s.style.flexBasis="calc("+e.panelSizes[i]+"% - "+(e.panels.length-1)*e.gutterSize+"px)"}),!0}return!1},resetState:function(){this.initializePanels()}},computed:{panels:function(){var e=this,n=[];return this.$slots.default().forEach(function(l){e.isSplitterPanel(l)?n.push(l):l.children instanceof Array&&l.children.forEach(function(u){e.isSplitterPanel(u)&&n.push(u)})}),n},gutterStyle:function(){return this.horizontal?{width:this.gutterSize+"px"}:{height:this.gutterSize+"px"}},horizontal:function(){return this.layout==="horizontal"},getPTOptions:function(){var e;return{context:{nested:(e=this.$parentInstance)===null||e===void 0?void 0:e.nestedState}}},prevPanelMinSize:function(){var e=A(this.panels[this.prevPanelIndex],"minSize");return this.panels[this.prevPanelIndex].props&&e?e:0},nextPanelMinSize:function(){var e=A(this.panels[this.prevPanelIndex+1],"minSize");return this.panels[this.prevPanelIndex+1].props&&e?e:0},dataP:function(){var e;return G(B(B({},this.layout,this.layout),"nested",((e=this.$parentInstance)===null||e===void 0?void 0:e.nestedState)!=null))}}},We=["data-p"],Xe=["onMousedown","onTouchstart","onTouchmove","onTouchend","data-p"],Ye=["aria-orientation","aria-valuenow","onKeydown","data-p"];function Je(t,e,n,l,u,s){return m(),h("div",p({class:t.cx("root"),"data-p-resizing":!1,"data-p":s.dataP},t.ptmi("root",s.getPTOptions)),[(m(!0),h(j,null,pe(s.panels,function(i,d){return m(),h(j,{key:d},[(m(),C(H(i),{tabindex:"-1"})),d!==s.panels.length-1?(m(),h("div",p({key:0,ref_for:!0,ref:"gutter",class:t.cx("gutter"),role:"separator",tabindex:"-1",onMousedown:function(c){return s.onGutterMouseDown(c,d)},onTouchstart:function(c){return s.onGutterTouchStart(c,d)},onTouchmove:function(c){return s.onGutterTouchMove(c,d)},onTouchend:function(c){return s.onGutterTouchEnd(c,d)},"data-p-gutter-resizing":!1,"data-p":s.dataP},{ref_for:!0},t.ptm("gutter")),[r("div",p({class:t.cx("gutterHandle"),tabindex:"0",style:[s.gutterStyle],"aria-orientation":t.layout,"aria-valuenow":u.prevSize,onKeyup:e[0]||(e[0]=function(){return s.onGutterKeyUp&&s.onGutterKeyUp.apply(s,arguments)}),onKeydown:function(c){return s.onGutterKeyDown(c,d)},"data-p":s.dataP},{ref_for:!0},t.ptm("gutterHandle")),null,16,Ye)],16,Xe)):$("",!0)],64)}),128))],16,We)}F.render=Je;var Qe={root:function(e){var n=e.instance;return["p-splitterpanel",{"p-splitterpanel-nested":n.isNested}]}},Ze=I.extend({name:"splitterpanel",classes:Qe}),et={name:"BaseSplitterPanel",extends:M,props:{size:{type:Number,default:null},minSize:{type:Number,default:null}},style:Ze,provide:function(){return{$pcSplitterPanel:this,$parentInstance:this}}},V={name:"SplitterPanel",extends:et,inheritAttrs:!1,data:function(){return{nestedState:null}},computed:{isNested:function(){var e=this;return this.$slots.default().some(function(n){return e.nestedState=n.type.name==="Splitter"?!0:null,e.nestedState})},getPTOptions:function(){return{context:{nested:this.isNested}}}}};function tt(t,e,n,l,u,s){return m(),h("div",p({ref:"container",class:t.cx("root")},t.ptmi("root",s.getPTOptions)),[P(t.$slots,"default")],16)}V.render=tt;var nt=`
    .p-fieldset {
        background: dt('fieldset.background');
        border: 1px solid dt('fieldset.border.color');
        border-radius: dt('fieldset.border.radius');
        color: dt('fieldset.color');
        padding: dt('fieldset.padding');
        margin: 0;
    }

    .p-fieldset-legend {
        background: dt('fieldset.legend.background');
        border-radius: dt('fieldset.legend.border.radius');
        border-width: dt('fieldset.legend.border.width');
        border-style: solid;
        border-color: dt('fieldset.legend.border.color');
        padding: dt('fieldset.legend.padding');
        transition:
            background dt('fieldset.transition.duration'),
            color dt('fieldset.transition.duration'),
            outline-color dt('fieldset.transition.duration'),
            box-shadow dt('fieldset.transition.duration');
    }

    .p-fieldset-toggleable > .p-fieldset-legend {
        padding: 0;
    }

    .p-fieldset-toggle-button {
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        text-decoration: none;
        display: flex;
        gap: dt('fieldset.legend.gap');
        align-items: center;
        justify-content: center;
        padding: dt('fieldset.legend.padding');
        background: transparent;
        border: 0 none;
        border-radius: dt('fieldset.legend.border.radius');
        transition:
            background dt('fieldset.transition.duration'),
            color dt('fieldset.transition.duration'),
            outline-color dt('fieldset.transition.duration'),
            box-shadow dt('fieldset.transition.duration');
        outline-color: transparent;
    }

    .p-fieldset-legend-label {
        font-weight: dt('fieldset.legend.font.weight');
    }

    .p-fieldset-toggle-button:focus-visible {
        box-shadow: dt('fieldset.legend.focus.ring.shadow');
        outline: dt('fieldset.legend.focus.ring.width') dt('fieldset.legend.focus.ring.style') dt('fieldset.legend.focus.ring.color');
        outline-offset: dt('fieldset.legend.focus.ring.offset');
    }

    .p-fieldset-toggleable > .p-fieldset-legend:hover {
        color: dt('fieldset.legend.hover.color');
        background: dt('fieldset.legend.hover.background');
    }

    .p-fieldset-toggle-icon {
        color: dt('fieldset.toggle.icon.color');
        transition: color dt('fieldset.transition.duration');
    }

    .p-fieldset-toggleable > .p-fieldset-legend:hover .p-fieldset-toggle-icon {
        color: dt('fieldset.toggle.icon.hover.color');
    }

    .p-fieldset-content-container {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-fieldset-content-wrapper {
        min-height: 0;
    }

    .p-fieldset-content {
        padding: dt('fieldset.content.padding');
    }
`,it={root:function(e){var n=e.props;return["p-fieldset p-component",{"p-fieldset-toggleable":n.toggleable}]},legend:"p-fieldset-legend",legendLabel:"p-fieldset-legend-label",toggleButton:"p-fieldset-toggle-button",toggleIcon:"p-fieldset-toggle-icon",contentContainer:"p-fieldset-content-container",contentWrapper:"p-fieldset-content-wrapper",content:"p-fieldset-content"},st=I.extend({name:"fieldset",style:nt,classes:it}),rt={name:"BaseFieldset",extends:M,props:{legend:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},style:st,provide:function(){return{$pcFieldset:this,$parentInstance:this}}},W={name:"Fieldset",extends:rt,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(e){this.d_collapsed=e}},methods:{toggle:function(e){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:e,value:this.d_collapsed})},onKeyDown:function(e){(e.code==="Enter"||e.code==="NumpadEnter"||e.code==="Space")&&(this.toggle(e),e.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.legend},dataP:function(){return G({toggleable:this.toggleable})}},directives:{ripple:ve},components:{PlusIcon:Ie,MinusIcon:ge}};function b(t){"@babel/helpers - typeof";return b=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(t)}function U(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter(function(u){return Object.getOwnPropertyDescriptor(t,u).enumerable})),n.push.apply(n,l)}return n}function K(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?U(Object(n),!0).forEach(function(l){ot(t,l,n[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach(function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(n,l))})}return t}function ot(t,e,n){return(e=lt(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function lt(t){var e=at(t,"string");return b(e)=="symbol"?e:e+""}function at(t,e){if(b(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var l=n.call(t,e);if(b(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var ut=["data-p"],dt=["data-p"],pt=["id"],ct=["id","aria-controls","aria-expanded","aria-label"],mt=["id","aria-labelledby"];function ft(t,e,n,l,u,s){var i=ce("ripple");return m(),h("fieldset",p({class:t.cx("root"),"data-p":s.dataP},t.ptmi("root")),[r("legend",p({class:t.cx("legend"),"data-p":s.dataP},t.ptm("legend")),[P(t.$slots,"legend",{toggleCallback:s.toggle},function(){return[t.toggleable?$("",!0):(m(),h("span",p({key:0,id:t.$id+"_header",class:t.cx("legendLabel")},t.ptm("legendLabel")),R(t.legend),17,pt)),t.toggleable?O((m(),h("button",p({key:1,id:t.$id+"_header",type:"button","aria-controls":t.$id+"_content","aria-expanded":!u.d_collapsed,"aria-label":s.buttonAriaLabel,class:t.cx("toggleButton"),onClick:e[0]||(e[0]=function(){return s.toggle&&s.toggle.apply(s,arguments)}),onKeydown:e[1]||(e[1]=function(){return s.onKeyDown&&s.onKeyDown.apply(s,arguments)})},K(K({},t.toggleButtonProps),t.ptm("toggleButton"))),[P(t.$slots,t.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:u.d_collapsed,class:me(t.cx("toggleIcon"))},function(){return[(m(),C(H(u.d_collapsed?"PlusIcon":"MinusIcon"),p({class:t.cx("toggleIcon")},t.ptm("toggleIcon")),null,16,["class"]))]}),r("span",p({class:t.cx("legendLabel")},t.ptm("legendLabel")),R(t.legend),17)],16,ct)),[[i]]):$("",!0)]})],16,dt),o(he,p({name:"p-collapsible"},t.ptm("transition")),{default:a(function(){return[O(r("div",p({id:t.$id+"_content",class:t.cx("contentContainer"),role:"region","aria-labelledby":t.$id+"_header"},t.ptm("contentContainer")),[r("div",p({class:t.cx("contentWrapper")},t.ptm("contentWrapper")),[r("div",p({class:t.cx("content")},t.ptm("content")),[P(t.$slots,"default")],16)],16)],16,mt),[[fe,!u.d_collapsed]])]}),_:3},16)],16,ut)}W.render=ft;const ht={class:"flex flex-col"},gt={class:"card"},vt={class:"flex flex-col md:flex-row gap-8"},bt={class:"md:w-1/2"},yt={class:"card"},St={class:"card"},zt={class:"md:w-1/2 mt-6 md:mt-0"},Pt={class:"card"},xt={class:"card"},wt={class:"flex items-center justify-between mb-0"},_t={class:"card mt-8"},Et={class:"flex flex-col md:flex-row"},Lt={class:"w-full md:w-5/12 flex flex-col items-center justify-center gap-3 py-5"},qt={class:"flex flex-col gap-2"},$t={class:"flex flex-col gap-2"},Tt={class:"flex"},It={class:"w-full md:w-2/12"},Mt={class:"w-full md:w-5/12 flex items-center justify-center py-5"},kt={class:"card"},Bt={__name:"PanelsDoc",setup(t){const e=q([{label:"Save",icon:"pi pi-check"},{label:"Update",icon:"pi pi-upload"},{label:"Delete",icon:"pi pi-trash"},{label:"Home Page",icon:"pi pi-home"}]),n=q([{label:"Save",icon:"pi pi-fw pi-check"},{label:"Update",icon:"pi pi-fw pi-refresh"},{label:"Delete",icon:"pi pi-fw pi-trash"}]),l=q(null);function u(){l.value.toggle(event)}return(s,i)=>{const d=Pe,f=Se,c=ze,X=ye,Y=be,J=Oe,x=De,w=Ae,_=ke,Q=je,E=we,Z=xe,L=Ee,ee=_e,te=Le,ne=Me,ie=W,se=qe,re=$e,k=Te,y=V,D=F;return m(),h("div",ht,[r("div",gt,[i[1]||(i[1]=r("div",{class:"font-semibold text-xl mb-4"},"Toolbar",-1)),o(J,null,{start:a(()=>[o(d,{icon:"pi pi-plus",class:"mr-2",severity:"secondary",text:""}),o(d,{icon:"pi pi-print",class:"mr-2",severity:"secondary",text:""}),o(d,{icon:"pi pi-upload",severity:"secondary",text:""})]),center:a(()=>[o(X,null,{default:a(()=>[o(f,null,{default:a(()=>[...i[0]||(i[0]=[r("i",{class:"pi pi-search"},null,-1)])]),_:1}),o(c,{placeholder:"Search"})]),_:1})]),end:a(()=>[o(Y,{label:"Save",model:e.value},null,8,["model"])]),_:1})]),r("div",vt,[r("div",bt,[r("div",yt,[i[8]||(i[8]=r("div",{class:"font-semibold text-xl mb-4"},"Accordion",-1)),o(Q,{value:"0"},{default:a(()=>[o(_,{value:"0"},{default:a(()=>[o(x,null,{default:a(()=>[...i[2]||(i[2]=[g("Header I",-1)])]),_:1}),o(w,null,{default:a(()=>[...i[3]||(i[3]=[r("p",{class:"m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1)])]),_:1})]),_:1}),o(_,{value:"1"},{default:a(()=>[o(x,null,{default:a(()=>[...i[4]||(i[4]=[g("Header II",-1)])]),_:1}),o(w,null,{default:a(()=>[...i[5]||(i[5]=[r("p",{class:"m-0"}," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. ",-1)])]),_:1})]),_:1}),o(_,{value:"2"},{default:a(()=>[o(x,null,{default:a(()=>[...i[6]||(i[6]=[g("Header III",-1)])]),_:1}),o(w,null,{default:a(()=>[...i[7]||(i[7]=[r("p",{class:"m-0"}," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. ",-1)])]),_:1})]),_:1})]),_:1})]),r("div",St,[i[15]||(i[15]=r("div",{class:"font-semibold text-xl mb-4"},"Tabs",-1)),o(te,{value:"0"},{default:a(()=>[o(Z,null,{default:a(()=>[o(E,{value:"0"},{default:a(()=>[...i[9]||(i[9]=[g("Header I",-1)])]),_:1}),o(E,{value:"1"},{default:a(()=>[...i[10]||(i[10]=[g("Header II",-1)])]),_:1}),o(E,{value:"2"},{default:a(()=>[...i[11]||(i[11]=[g("Header III",-1)])]),_:1})]),_:1}),o(ee,null,{default:a(()=>[o(L,{value:"0"},{default:a(()=>[...i[12]||(i[12]=[r("p",{class:"m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1)])]),_:1}),o(L,{value:"1"},{default:a(()=>[...i[13]||(i[13]=[r("p",{class:"m-0"}," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. ",-1)])]),_:1}),o(L,{value:"2"},{default:a(()=>[...i[14]||(i[14]=[r("p",{class:"m-0"}," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. ",-1)])]),_:1})]),_:1})]),_:1})])]),r("div",zt,[r("div",Pt,[i[17]||(i[17]=r("div",{class:"font-semibold text-xl mb-4"},"Panel",-1)),o(ne,{header:"Header",toggleable:!0},{default:a(()=>[...i[16]||(i[16]=[r("p",{class:"leading-normal m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1)])]),_:1})]),r("div",xt,[i[19]||(i[19]=r("div",{class:"font-semibold text-xl mb-4"},"Fieldset",-1)),o(ie,{legend:"Legend",toggleable:!0},{default:a(()=>[...i[18]||(i[18]=[r("p",{class:"leading-normal m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1)])]),_:1})]),o(re,null,{title:a(()=>[r("div",wt,[i[20]||(i[20]=r("div",{class:"font-semibold text-xl mb-4"},"Card",-1)),o(d,{icon:"pi pi-plus",class:"p-button-text",onClick:u})]),o(se,{id:"config_menu",ref_key:"menuRef",ref:l,model:n.value,popup:!0},null,8,["model"])]),content:a(()=>[...i[21]||(i[21]=[r("p",{class:"leading-normal m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1)])]),_:1})])]),r("div",_t,[i[26]||(i[26]=r("div",{class:"font-semibold text-xl mb-4"},"Divider",-1)),r("div",Et,[r("div",Lt,[r("div",qt,[i[22]||(i[22]=r("label",{for:"username"},"Username",-1)),o(c,{id:"username",type:"text"})]),r("div",$t,[i[23]||(i[23]=r("label",{for:"password"},"Password",-1)),o(c,{id:"password",type:"password"})]),r("div",Tt,[o(d,{label:"Login",icon:"pi pi-user",class:"w-full max-w-[17.35rem] mx-auto"})])]),r("div",It,[o(k,{layout:"vertical",class:"hidden! md:flex!"},{default:a(()=>[...i[24]||(i[24]=[r("b",null,"OR",-1)])]),_:1}),o(k,{layout:"horizontal",class:"flex! md:hidden!",align:"center"},{default:a(()=>[...i[25]||(i[25]=[r("b",null,"OR",-1)])]),_:1})]),r("div",Mt,[o(d,{label:"Sign Up",icon:"pi pi-user-plus",severity:"success",class:"w-full max-w-[17.35rem] mx-auto"})])])]),r("div",kt,[i[30]||(i[30]=r("div",{class:"font-semibold text-xl mb-4"},"Splitter",-1)),o(D,{style:{height:"300px"},class:"mb-8"},{default:a(()=>[o(y,{size:30,minSize:10},{default:a(()=>[...i[27]||(i[27]=[r("div",{className:"h-full flex items-center justify-center"},"Panel 1",-1)])]),_:1}),o(y,{size:70},{default:a(()=>[o(D,{layout:"vertical"},{default:a(()=>[o(y,{size:15},{default:a(()=>[...i[28]||(i[28]=[r("div",{className:"h-full flex items-center justify-center"},"Panel 2",-1)])]),_:1}),o(y,{size:50},{default:a(()=>[...i[29]||(i[29]=[r("div",{className:"h-full flex items-center justify-center"},"Panel 3",-1)])]),_:1})]),_:1})]),_:1})]),_:1})])])}}};export{Bt as default};
