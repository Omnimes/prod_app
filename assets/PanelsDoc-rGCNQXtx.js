import{aL as S,aO as z,aX as F,bp as R,dd as de,bb as pe,d9 as ce,da as fe,b0 as x,b5 as $,aZ as me,d as m,o as c,F as w,h as he,f as D,i as T,bA as j,aK as p,e as r,bE as g,bB as ge,g as a,a9 as A,t as N,B as H,w as l,ab as V,bC as ve,c6 as be,aR as ye,be as Se,ai as M,au as ze,c4 as Pe,c5 as xe,G as $e,c as we,j as v,av as Te,z as _e}from"./index-D0yFeaPy.js";import{s as Le}from"./index-BrmtAe3i.js";import{s as Ee}from"./index-B0kDG25c.js";import{s as qe}from"./index-C9HgPSuR.js";import{s as Ie,a as Me,b as Ae}from"./index-DS1pezQk.js";import{s as ke,a as De,b as je,c as Oe}from"./index-PfW3kov3.js";import{s as Be}from"./index-B_tJLHgm.js";var Re=`
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
`,Ne={root:function(e){var n=e.props;return["p-splitter p-component","p-splitter-"+n.layout]},gutter:"p-splitter-gutter",gutterHandle:"p-splitter-gutter-handle"},Ue=S.extend({name:"splitter",style:Re,classes:Ne}),Ce={name:"BaseSplitter",extends:z,props:{layout:{type:String,default:"horizontal"},gutterSize:{type:Number,default:4},stateKey:{type:String,default:null},stateStorage:{type:String,default:"session"},step:{type:Number,default:5}},style:Ue,provide:function(){return{$pcSplitter:this,$parentInstance:this}}};function b(t){"@babel/helpers - typeof";return b=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(t)}function U(t,e,n){return(e=Ke(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ke(t){var e=Ge(t,"string");return b(e)=="symbol"?e:e+""}function Ge(t,e){if(b(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var o=n.call(t,e);if(b(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function C(t){return Xe(t)||Ve(t)||He(t)||Fe()}function Fe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function He(t,e){if(t){if(typeof t=="string")return k(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(t,e):void 0}}function Ve(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Xe(t){if(Array.isArray(t))return k(t)}function k(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}var X={name:"Splitter",extends:Ce,inheritAttrs:!1,emits:["resizestart","resizeend","resize"],dragging:!1,mouseMoveListener:null,mouseUpListener:null,touchMoveListener:null,touchEndListener:null,size:null,gutterElement:null,startPos:null,prevPanelElement:null,nextPanelElement:null,nextPanelSize:null,prevPanelSize:null,panelSizes:null,prevPanelIndex:null,timer:null,data:function(){return{prevSize:null}},mounted:function(){this.initializePanels()},beforeUnmount:function(){this.clear(),this.unbindMouseListeners()},methods:{isSplitterPanel:function(e){return e.type.name==="SplitterPanel"},initializePanels:function(){var e=this;if(this.panels&&this.panels.length){var n=!1;if(this.isStateful()&&(n=this.restoreState()),!n){var o=C(this.$el.children).filter(function(s){return s.getAttribute("data-pc-name")==="splitterpanel"}),u=[];this.panels.map(function(s,i){var d=s.props&&me(s.props.size)?s.props.size:null,h=d??100/e.panels.length;u[i]=h,o[i].style.flexBasis="calc("+h+"% - "+(e.panels.length-1)*e.gutterSize+"px)"}),this.panelSizes=u,this.prevSize=parseFloat(u[0]).toFixed(4)}}},onResizeStart:function(e,n,o){this.gutterElement=e.currentTarget||e.target.parentElement,this.size=this.horizontal?ce(this.$el):fe(this.$el),o||(this.dragging=!0,this.startPos=this.layout==="horizontal"?e.pageX||e.changedTouches[0].pageX:e.pageY||e.changedTouches[0].pageY),this.prevPanelElement=this.gutterElement.previousElementSibling,this.nextPanelElement=this.gutterElement.nextElementSibling,o?(this.prevPanelSize=this.horizontal?x(this.prevPanelElement,!0):$(this.prevPanelElement,!0),this.nextPanelSize=this.horizontal?x(this.nextPanelElement,!0):$(this.nextPanelElement,!0)):(this.prevPanelSize=100*(this.horizontal?x(this.prevPanelElement,!0):$(this.prevPanelElement,!0))/this.size,this.nextPanelSize=100*(this.horizontal?x(this.nextPanelElement,!0):$(this.nextPanelElement,!0))/this.size),this.prevPanelIndex=n,this.$emit("resizestart",{originalEvent:e,sizes:this.panelSizes}),this.$refs.gutter[n].setAttribute("data-p-gutter-resizing",!0),this.$el.setAttribute("data-p-resizing",!0)},onResize:function(e,n,o){var u,s,i;o?this.horizontal?(s=100*(this.prevPanelSize+n)/this.size,i=100*(this.nextPanelSize-n)/this.size):(s=100*(this.prevPanelSize-n)/this.size,i=100*(this.nextPanelSize+n)/this.size):(this.horizontal?pe(this.$el)?u=(this.startPos-e.pageX)*100/this.size:u=(e.pageX-this.startPos)*100/this.size:u=(e.pageY-this.startPos)*100/this.size,s=this.prevPanelSize+u,i=this.nextPanelSize-u),this.validateResize(s,i)||(s=Math.min(Math.max(this.prevPanelMinSize,s),100-this.nextPanelMinSize),i=Math.min(Math.max(this.nextPanelMinSize,i),100-this.prevPanelMinSize)),this.prevPanelElement.style.flexBasis="calc("+s+"% - "+(this.panels.length-1)*this.gutterSize+"px)",this.nextPanelElement.style.flexBasis="calc("+i+"% - "+(this.panels.length-1)*this.gutterSize+"px)",this.panelSizes[this.prevPanelIndex]=s,this.panelSizes[this.prevPanelIndex+1]=i,this.prevSize=parseFloat(s).toFixed(4),this.$emit("resize",{originalEvent:e,sizes:this.panelSizes})},onResizeEnd:function(e){this.isStateful()&&this.saveState(),this.$emit("resizeend",{originalEvent:e,sizes:this.panelSizes}),this.$refs.gutter.forEach(function(n){return n.setAttribute("data-p-gutter-resizing",!1)}),this.$el.setAttribute("data-p-resizing",!1),this.clear()},repeat:function(e,n,o){this.onResizeStart(e,n,!0),this.onResize(e,o,!0)},setTimer:function(e,n,o){var u=this;this.timer||(this.timer=setInterval(function(){u.repeat(e,n,o)},40))},clearTimer:function(){this.timer&&(clearInterval(this.timer),this.timer=null)},onGutterKeyUp:function(){this.clearTimer(),this.onResizeEnd()},onGutterKeyDown:function(e,n){switch(e.code){case"ArrowLeft":{this.layout==="horizontal"&&this.setTimer(e,n,this.step*-1),e.preventDefault();break}case"ArrowRight":{this.layout==="horizontal"&&this.setTimer(e,n,this.step),e.preventDefault();break}case"ArrowDown":{this.layout==="vertical"&&this.setTimer(e,n,this.step*-1),e.preventDefault();break}case"ArrowUp":{this.layout==="vertical"&&this.setTimer(e,n,this.step),e.preventDefault();break}}},onGutterMouseDown:function(e,n){this.onResizeStart(e,n),this.bindMouseListeners()},onGutterTouchStart:function(e,n){this.onResizeStart(e,n),this.bindTouchListeners(),e.preventDefault()},onGutterTouchMove:function(e){this.onResize(e),e.preventDefault()},onGutterTouchEnd:function(e){this.onResizeEnd(e),this.unbindTouchListeners(),e.preventDefault()},bindMouseListeners:function(){var e=this;this.mouseMoveListener||(this.mouseMoveListener=function(n){return e.onResize(n)},document.addEventListener("mousemove",this.mouseMoveListener)),this.mouseUpListener||(this.mouseUpListener=function(n){e.onResizeEnd(n),e.unbindMouseListeners()},document.addEventListener("mouseup",this.mouseUpListener))},bindTouchListeners:function(){var e=this;this.touchMoveListener||(this.touchMoveListener=function(n){return e.onResize(n.changedTouches[0])},document.addEventListener("touchmove",this.touchMoveListener)),this.touchEndListener||(this.touchEndListener=function(n){e.resizeEnd(n),e.unbindTouchListeners()},document.addEventListener("touchend",this.touchEndListener))},validateResize:function(e,n){return!(e>100||e<0||n>100||n<0||this.prevPanelMinSize>e||this.nextPanelMinSize>n)},unbindMouseListeners:function(){this.mouseMoveListener&&(document.removeEventListener("mousemove",this.mouseMoveListener),this.mouseMoveListener=null),this.mouseUpListener&&(document.removeEventListener("mouseup",this.mouseUpListener),this.mouseUpListener=null)},unbindTouchListeners:function(){this.touchMoveListener&&(document.removeEventListener("touchmove",this.touchMoveListener),this.touchMoveListener=null),this.touchEndListener&&(document.removeEventListener("touchend",this.touchEndListener),this.touchEndListener=null)},clear:function(){this.dragging=!1,this.size=null,this.startPos=null,this.prevPanelElement=null,this.nextPanelElement=null,this.prevPanelSize=null,this.nextPanelSize=null,this.gutterElement=null,this.prevPanelIndex=null},isStateful:function(){return this.stateKey!=null},getStorage:function(){switch(this.stateStorage){case"local":return window.localStorage;case"session":return window.sessionStorage;default:throw new Error(this.stateStorage+' is not a valid value for the state storage, supported values are "local" and "session".')}},saveState:function(){de(this.panelSizes)&&this.getStorage().setItem(this.stateKey,JSON.stringify(this.panelSizes))},restoreState:function(){var e=this,n=this.getStorage(),o=n.getItem(this.stateKey);if(o){this.panelSizes=JSON.parse(o);var u=C(this.$el.children).filter(function(s){return s.getAttribute("data-pc-name")==="splitterpanel"});return u.forEach(function(s,i){s.style.flexBasis="calc("+e.panelSizes[i]+"% - "+(e.panels.length-1)*e.gutterSize+"px)"}),!0}return!1},resetState:function(){this.initializePanels()}},computed:{panels:function(){var e=this,n=[];return this.$slots.default().forEach(function(o){e.isSplitterPanel(o)?n.push(o):o.children instanceof Array&&o.children.forEach(function(u){e.isSplitterPanel(u)&&n.push(u)})}),n},gutterStyle:function(){return this.horizontal?{width:this.gutterSize+"px"}:{height:this.gutterSize+"px"}},horizontal:function(){return this.layout==="horizontal"},getPTOptions:function(){var e;return{context:{nested:(e=this.$parentInstance)===null||e===void 0?void 0:e.nestedState}}},prevPanelMinSize:function(){var e=R(this.panels[this.prevPanelIndex],"minSize");return this.panels[this.prevPanelIndex].props&&e?e:0},nextPanelMinSize:function(){var e=R(this.panels[this.prevPanelIndex+1],"minSize");return this.panels[this.prevPanelIndex+1].props&&e?e:0},dataP:function(){var e;return F(U(U({},this.layout,this.layout),"nested",((e=this.$parentInstance)===null||e===void 0?void 0:e.nestedState)!=null))}}},We=["data-p"],Ye=["onMousedown","onTouchstart","onTouchmove","onTouchend","data-p"],Je=["aria-orientation","aria-valuenow","onKeydown","data-p"];function Ze(t,e,n,o,u,s){return c(),m("div",p({class:t.cx("root"),"data-p-resizing":!1,"data-p":s.dataP},t.ptmi("root",s.getPTOptions)),[(c(!0),m(w,null,he(s.panels,function(i,d){return c(),m(w,{key:d},[(c(),D(j(i),{tabindex:"-1"})),d!==s.panels.length-1?(c(),m("div",p({key:0,ref_for:!0,ref:"gutter",class:t.cx("gutter"),role:"separator",tabindex:"-1",onMousedown:function(f){return s.onGutterMouseDown(f,d)},onTouchstart:function(f){return s.onGutterTouchStart(f,d)},onTouchmove:function(f){return s.onGutterTouchMove(f,d)},onTouchend:function(f){return s.onGutterTouchEnd(f,d)},"data-p-gutter-resizing":!1,"data-p":s.dataP},{ref_for:!0},t.ptm("gutter")),[r("div",p({class:t.cx("gutterHandle"),tabindex:"0",style:[s.gutterStyle],"aria-orientation":t.layout,"aria-valuenow":u.prevSize,onKeyup:e[0]||(e[0]=function(){return s.onGutterKeyUp&&s.onGutterKeyUp.apply(s,arguments)}),onKeydown:function(f){return s.onGutterKeyDown(f,d)},"data-p":s.dataP},{ref_for:!0},t.ptm("gutterHandle")),null,16,Je)],16,Ye)):T("",!0)],64)}),128))],16,We)}X.render=Ze;var Qe={root:function(e){var n=e.instance;return["p-splitterpanel",{"p-splitterpanel-nested":n.isNested}]}},et=S.extend({name:"splitterpanel",classes:Qe}),tt={name:"BaseSplitterPanel",extends:z,props:{size:{type:Number,default:null},minSize:{type:Number,default:null}},style:et,provide:function(){return{$pcSplitterPanel:this,$parentInstance:this}}},W={name:"SplitterPanel",extends:tt,inheritAttrs:!1,data:function(){return{nestedState:null}},computed:{isNested:function(){var e=this;return this.$slots.default().some(function(n){return e.nestedState=n.type.name==="Splitter"?!0:null,e.nestedState})},getPTOptions:function(){return{context:{nested:this.isNested}}}}};function nt(t,e,n,o,u,s){return c(),m("div",p({ref:"container",class:t.cx("root")},t.ptmi("root",s.getPTOptions)),[g(t.$slots,"default")],16)}W.render=nt;var it=`
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
`,st={root:function(e){var n=e.props;return["p-fieldset p-component",{"p-fieldset-toggleable":n.toggleable}]},legend:"p-fieldset-legend",legendLabel:"p-fieldset-legend-label",toggleButton:"p-fieldset-toggle-button",toggleIcon:"p-fieldset-toggle-icon",contentContainer:"p-fieldset-content-container",contentWrapper:"p-fieldset-content-wrapper",content:"p-fieldset-content"},rt=S.extend({name:"fieldset",style:it,classes:st}),ot={name:"BaseFieldset",extends:z,props:{legend:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},style:rt,provide:function(){return{$pcFieldset:this,$parentInstance:this}}},Y={name:"Fieldset",extends:ot,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(e){this.d_collapsed=e}},methods:{toggle:function(e){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:e,value:this.d_collapsed})},onKeyDown:function(e){(e.code==="Enter"||e.code==="NumpadEnter"||e.code==="Space")&&(this.toggle(e),e.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.legend},dataP:function(){return F({toggleable:this.toggleable})}},directives:{ripple:ye},components:{PlusIcon:Ee,MinusIcon:be}};function y(t){"@babel/helpers - typeof";return y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(t)}function K(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(u){return Object.getOwnPropertyDescriptor(t,u).enumerable})),n.push.apply(n,o)}return n}function G(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?K(Object(n),!0).forEach(function(o){at(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))})}return t}function at(t,e,n){return(e=lt(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function lt(t){var e=ut(t,"string");return y(e)=="symbol"?e:e+""}function ut(t,e){if(y(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var o=n.call(t,e);if(y(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var dt=["data-p"],pt=["data-p"],ct=["id"],ft=["id","aria-controls","aria-expanded","aria-label"],mt=["id","aria-labelledby"];function ht(t,e,n,o,u,s){var i=ge("ripple");return c(),m("fieldset",p({class:t.cx("root"),"data-p":s.dataP},t.ptmi("root")),[r("legend",p({class:t.cx("legend"),"data-p":s.dataP},t.ptm("legend")),[g(t.$slots,"legend",{toggleCallback:s.toggle},function(){return[t.toggleable?T("",!0):(c(),m("span",p({key:0,id:t.$id+"_header",class:t.cx("legendLabel")},t.ptm("legendLabel")),N(t.legend),17,ct)),t.toggleable?A((c(),m("button",p({key:1,id:t.$id+"_header",type:"button","aria-controls":t.$id+"_content","aria-expanded":!u.d_collapsed,"aria-label":s.buttonAriaLabel,class:t.cx("toggleButton"),onClick:e[0]||(e[0]=function(){return s.toggle&&s.toggle.apply(s,arguments)}),onKeydown:e[1]||(e[1]=function(){return s.onKeyDown&&s.onKeyDown.apply(s,arguments)})},G(G({},t.toggleButtonProps),t.ptm("toggleButton"))),[g(t.$slots,t.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:u.d_collapsed,class:H(t.cx("toggleIcon"))},function(){return[(c(),D(j(u.d_collapsed?"PlusIcon":"MinusIcon"),p({class:t.cx("toggleIcon")},t.ptm("toggleIcon")),null,16,["class"]))]}),r("span",p({class:t.cx("legendLabel")},t.ptm("legendLabel")),N(t.legend),17)],16,ft)),[[i]]):T("",!0)]})],16,pt),a(ve,p({name:"p-collapsible"},t.ptm("transition")),{default:l(function(){return[A(r("div",p({id:t.$id+"_content",class:t.cx("contentContainer"),role:"region","aria-labelledby":t.$id+"_header"},t.ptm("contentContainer")),[r("div",p({class:t.cx("contentWrapper")},t.ptm("contentWrapper")),[r("div",p({class:t.cx("content")},t.ptm("content")),[g(t.$slots,"default")],16)],16)],16,mt),[[V,!u.d_collapsed]])]}),_:3},16)],16,dt)}Y.render=ht;var gt={root:"p-tabpanels"},vt=S.extend({name:"tabpanels",classes:gt}),bt={name:"BaseTabPanels",extends:z,props:{},style:vt,provide:function(){return{$pcTabPanels:this,$parentInstance:this}}},J={name:"TabPanels",extends:bt,inheritAttrs:!1};function yt(t,e,n,o,u,s){return c(),m("div",p({class:t.cx("root"),role:"presentation"},t.ptmi("root")),[g(t.$slots,"default")],16)}J.render=yt;var St={root:function(e){var n=e.instance;return["p-tabpanel",{"p-tabpanel-active":n.active}]}},zt=S.extend({name:"tabpanel",classes:St}),Pt={name:"BaseTabPanel",extends:z,props:{value:{type:[String,Number],default:void 0},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1},header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean},style:zt,provide:function(){return{$pcTabPanel:this,$parentInstance:this}}},Z={name:"TabPanel",extends:Pt,inheritAttrs:!1,inject:["$pcTabs"],computed:{active:function(){var e;return Se((e=this.$pcTabs)===null||e===void 0?void 0:e.d_value,this.value)},id:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tabpanel_").concat(this.value)},ariaLabelledby:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tab_").concat(this.value)},attrs:function(){return p(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){var e;return{id:this.id,tabindex:(e=this.$pcTabs)===null||e===void 0?void 0:e.tabindex,role:"tabpanel","aria-labelledby":this.ariaLabelledby,"data-pc-name":"tabpanel","data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function xt(t,e,n,o,u,s){var i,d;return s.$pcTabs?(c(),m(w,{key:1},[t.asChild?g(t.$slots,"default",{key:1,class:H(t.cx("root")),active:s.active,a11yAttrs:s.a11yAttrs}):(c(),m(w,{key:0},[!((i=s.$pcTabs)!==null&&i!==void 0&&i.lazy)||s.active?A((c(),D(j(t.as),p({key:0,class:t.cx("root")},s.attrs),{default:l(function(){return[g(t.$slots,"default")]}),_:3},16,["class"])),[[V,(d=s.$pcTabs)!==null&&d!==void 0&&d.lazy?!0:s.active]]):T("",!0)],64))],64)):g(t.$slots,"default",{key:0})}Z.render=xt;const $t={class:"flex flex-col"},wt={class:"card"},Tt={class:"flex flex-col md:flex-row gap-8"},_t={class:"md:w-1/2"},Lt={class:"card"},Et={class:"card"},qt={class:"md:w-1/2 mt-6 md:mt-0"},It={class:"card"},Mt={class:"card"},At={class:"flex items-center justify-between mb-0"},kt={class:"card mt-8"},Dt={class:"flex flex-col md:flex-row"},jt={class:"w-full md:w-5/12 flex flex-col items-center justify-center gap-3 py-5"},Ot={class:"flex flex-col gap-2"},Bt={class:"flex flex-col gap-2"},Rt={class:"flex"},Nt={class:"w-full md:w-2/12"},Ut={class:"w-full md:w-5/12 flex items-center justify-center py-5"},Ct={class:"card"},Yt={__name:"PanelsDoc",setup(t){const e=M([{label:"Save",icon:"pi pi-check"},{label:"Update",icon:"pi pi-upload"},{label:"Delete",icon:"pi pi-trash"},{label:"Home Page",icon:"pi pi-home"}]),n=M([{label:"Save",icon:"pi pi-fw pi-check"},{label:"Update",icon:"pi pi-fw pi-refresh"},{label:"Delete",icon:"pi pi-fw pi-trash"}]),o=M(null);function u(){o.value.toggle(event)}return(s,i)=>{const d=we,h=xe,f=$e,Q=Pe,ee=ze,te=Be,_=De,L=je,E=ke,ne=Oe,q=Me,ie=Ie,I=Z,se=J,re=Ae,oe=qe,ae=Y,le=Te,ue=_e,O=Le,P=W,B=X;return c(),m("div",$t,[r("div",wt,[i[1]||(i[1]=r("div",{class:"font-semibold text-xl mb-4"},"Toolbar",-1)),a(te,null,{start:l(()=>[a(d,{icon:"pi pi-plus",class:"mr-2",severity:"secondary",text:""}),a(d,{icon:"pi pi-print",class:"mr-2",severity:"secondary",text:""}),a(d,{icon:"pi pi-upload",severity:"secondary",text:""})]),center:l(()=>[a(Q,null,{default:l(()=>[a(h,null,{default:l(()=>[...i[0]||(i[0]=[r("i",{class:"pi pi-search"},null,-1)])]),_:1}),a(f,{placeholder:"Search"})]),_:1})]),end:l(()=>[a(ee,{label:"Save",model:e.value},null,8,["model"])]),_:1})]),r("div",Tt,[r("div",_t,[r("div",Lt,[i[8]||(i[8]=r("div",{class:"font-semibold text-xl mb-4"},"Accordion",-1)),a(ne,{value:"0"},{default:l(()=>[a(E,{value:"0"},{default:l(()=>[a(_,null,{default:l(()=>[...i[2]||(i[2]=[v("Header I",-1)])]),_:1}),a(L,null,{default:l(()=>[...i[3]||(i[3]=[r("p",{class:"m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1)])]),_:1})]),_:1}),a(E,{value:"1"},{default:l(()=>[a(_,null,{default:l(()=>[...i[4]||(i[4]=[v("Header II",-1)])]),_:1}),a(L,null,{default:l(()=>[...i[5]||(i[5]=[r("p",{class:"m-0"}," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. ",-1)])]),_:1})]),_:1}),a(E,{value:"2"},{default:l(()=>[a(_,null,{default:l(()=>[...i[6]||(i[6]=[v("Header III",-1)])]),_:1}),a(L,null,{default:l(()=>[...i[7]||(i[7]=[r("p",{class:"m-0"}," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. ",-1)])]),_:1})]),_:1})]),_:1})]),r("div",Et,[i[15]||(i[15]=r("div",{class:"font-semibold text-xl mb-4"},"Tabs",-1)),a(re,{value:"0"},{default:l(()=>[a(ie,null,{default:l(()=>[a(q,{value:"0"},{default:l(()=>[...i[9]||(i[9]=[v("Header I",-1)])]),_:1}),a(q,{value:"1"},{default:l(()=>[...i[10]||(i[10]=[v("Header II",-1)])]),_:1}),a(q,{value:"2"},{default:l(()=>[...i[11]||(i[11]=[v("Header III",-1)])]),_:1})]),_:1}),a(se,null,{default:l(()=>[a(I,{value:"0"},{default:l(()=>[...i[12]||(i[12]=[r("p",{class:"m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1)])]),_:1}),a(I,{value:"1"},{default:l(()=>[...i[13]||(i[13]=[r("p",{class:"m-0"}," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. ",-1)])]),_:1}),a(I,{value:"2"},{default:l(()=>[...i[14]||(i[14]=[r("p",{class:"m-0"}," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. ",-1)])]),_:1})]),_:1})]),_:1})])]),r("div",qt,[r("div",It,[i[17]||(i[17]=r("div",{class:"font-semibold text-xl mb-4"},"Panel",-1)),a(oe,{header:"Header",toggleable:!0},{default:l(()=>[...i[16]||(i[16]=[r("p",{class:"leading-normal m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1)])]),_:1})]),r("div",Mt,[i[19]||(i[19]=r("div",{class:"font-semibold text-xl mb-4"},"Fieldset",-1)),a(ae,{legend:"Legend",toggleable:!0},{default:l(()=>[...i[18]||(i[18]=[r("p",{class:"leading-normal m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1)])]),_:1})]),a(ue,null,{title:l(()=>[r("div",At,[i[20]||(i[20]=r("div",{class:"font-semibold text-xl mb-4"},"Card",-1)),a(d,{icon:"pi pi-plus",class:"p-button-text",onClick:u})]),a(le,{id:"config_menu",ref_key:"menuRef",ref:o,model:n.value,popup:!0},null,8,["model"])]),content:l(()=>[...i[21]||(i[21]=[r("p",{class:"leading-normal m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1)])]),_:1})])]),r("div",kt,[i[26]||(i[26]=r("div",{class:"font-semibold text-xl mb-4"},"Divider",-1)),r("div",Dt,[r("div",jt,[r("div",Ot,[i[22]||(i[22]=r("label",{for:"username"},"Username",-1)),a(f,{id:"username",type:"text"})]),r("div",Bt,[i[23]||(i[23]=r("label",{for:"password"},"Password",-1)),a(f,{id:"password",type:"password"})]),r("div",Rt,[a(d,{label:"Login",icon:"pi pi-user",class:"w-full max-w-[17.35rem] mx-auto"})])]),r("div",Nt,[a(O,{layout:"vertical",class:"hidden! md:flex!"},{default:l(()=>[...i[24]||(i[24]=[r("b",null,"OR",-1)])]),_:1}),a(O,{layout:"horizontal",class:"flex! md:hidden!",align:"center"},{default:l(()=>[...i[25]||(i[25]=[r("b",null,"OR",-1)])]),_:1})]),r("div",Ut,[a(d,{label:"Sign Up",icon:"pi pi-user-plus",severity:"success",class:"w-full max-w-[17.35rem] mx-auto"})])])]),r("div",Ct,[i[30]||(i[30]=r("div",{class:"font-semibold text-xl mb-4"},"Splitter",-1)),a(B,{style:{height:"300px"},class:"mb-8"},{default:l(()=>[a(P,{size:30,minSize:10},{default:l(()=>[...i[27]||(i[27]=[r("div",{className:"h-full flex items-center justify-center"},"Panel 1",-1)])]),_:1}),a(P,{size:70},{default:l(()=>[a(B,{layout:"vertical"},{default:l(()=>[a(P,{size:15},{default:l(()=>[...i[28]||(i[28]=[r("div",{className:"h-full flex items-center justify-center"},"Panel 2",-1)])]),_:1}),a(P,{size:50},{default:l(()=>[...i[29]||(i[29]=[r("div",{className:"h-full flex items-center justify-center"},"Panel 3",-1)])]),_:1})]),_:1})]),_:1})]),_:1})])])}}};export{Yt as default};
