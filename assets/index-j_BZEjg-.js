import{b9 as f,ba as c,bo as $,bK as l,bs as i,bJ as b,e as v,o as d,bd as p,r as y,g as m,c3 as s,w as x,f as u,j as h,t as k,b1 as w,E as C}from"./index-DrrM5pX5.js";var D={root:function(t){var a=t.instance;return["p-step",{"p-step-active":a.active,"p-disabled":a.isStepDisabled}]},header:"p-step-header",number:"p-step-number",title:"p-step-title"},P=f.extend({name:"step",classes:D}),S={name:"StepperSeparator",hostName:"Stepper",extends:c,inject:{$pcStepper:{default:null}}};function V(e,t,a,r,o,n){return d(),v("span",p({class:e.cx("separator")},e.ptmo(n.$pcStepper.pt,"separator")),null,16)}S.render=V;var z={name:"BaseStep",extends:c,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"}},style:P,provide:function(){return{$pcStep:this,$parentInstance:this}}},B={name:"Step",extends:z,inheritAttrs:!1,inject:{$pcStepper:{default:null},$pcStepList:{default:null},$pcStepItem:{default:null}},data:function(){return{isSeparatorVisible:!1,isCompleted:!1}},mounted:function(){if(this.$el&&this.$pcStepList){var t=l(this.$el,i(this.$pcStepper.$el,'[data-pc-name="step"]')),a=l(b(this.$pcStepper.$el,'[data-pc-name="step"][data-p-active="true"]'),i(this.$pcStepper.$el,'[data-pc-name="step"]')),r=i(this.$pcStepper.$el,'[data-pc-name="step"]').length;this.isSeparatorVisible=t!==r-1,this.isCompleted=t<a}},updated:function(){var t=l(this.$el,i(this.$pcStepper.$el,'[data-pc-name="step"]')),a=l(b(this.$pcStepper.$el,'[data-pc-name="step"][data-p-active="true"]'),i(this.$pcStepper.$el,'[data-pc-name="step"]'));this.isCompleted=t<a},methods:{getPTOptions:function(t){var a=t==="root"?this.ptmi:this.ptm;return a(t,{context:{active:this.active,disabled:this.isStepDisabled}})},onStepClick:function(){this.$pcStepper.updateValue(this.activeValue)}},computed:{active:function(){return this.$pcStepper.isStepActive(this.activeValue)},activeValue:function(){var t;return this.$pcStepItem?(t=this.$pcStepItem)===null||t===void 0?void 0:t.value:this.value},isStepDisabled:function(){return!this.active&&(this.$pcStepper.isStepDisabled()||this.disabled)},id:function(){var t;return"".concat((t=this.$pcStepper)===null||t===void 0?void 0:t.$id,"_step_").concat(this.activeValue)},ariaControls:function(){var t;return"".concat((t=this.$pcStepper)===null||t===void 0?void 0:t.$id,"_steppanel_").concat(this.activeValue)},a11yAttrs:function(){return{root:{role:"presentation","aria-current":this.active?"step":void 0,"data-pc-name":"step","data-pc-section":"root","data-p-disabled":this.isStepDisabled,"data-p-active":this.active},header:{id:this.id,role:"tab",taindex:this.disabled?-1:void 0,"aria-controls":this.ariaControls,"data-pc-section":"header",disabled:this.isStepDisabled,onClick:this.onStepClick}}},dataP:function(){return $({disabled:this.isStepDisabled,readonly:this.$pcStepper.linear,active:this.active,completed:this.isCompleted,vertical:this.$pcStepItem!=null})}},components:{StepperSeparator:S}},A=["id","tabindex","aria-controls","disabled","data-p"],I=["data-p"],O=["data-p"];function j(e,t,a,r,o,n){var g=y("StepperSeparator");return e.asChild?s(e.$slots,"default",{key:1,class:C(e.cx("root")),active:n.active,value:e.value,a11yAttrs:n.a11yAttrs,activateCallback:n.onStepClick}):(d(),m(w(e.as),p({key:0,class:e.cx("root"),"aria-current":n.active?"step":void 0,role:"presentation","data-p-active":n.active,"data-p-disabled":n.isStepDisabled,"data-p":n.dataP},n.getPTOptions("root")),{default:x(function(){return[u("button",p({id:n.id,class:e.cx("header"),role:"tab",type:"button",tabindex:n.isStepDisabled?-1:void 0,"aria-controls":n.ariaControls,disabled:n.isStepDisabled,onClick:t[0]||(t[0]=function(){return n.onStepClick&&n.onStepClick.apply(n,arguments)}),"data-p":n.dataP},n.getPTOptions("header")),[u("span",p({class:e.cx("number"),"data-p":n.dataP},n.getPTOptions("number")),k(n.activeValue),17,I),u("span",p({class:e.cx("title"),"data-p":n.dataP},n.getPTOptions("title")),[s(e.$slots,"default")],16,O)],16,A),o.isSeparatorVisible?(d(),m(g,{key:0,"data-p":n.dataP},null,8,["data-p"])):h("",!0)]}),_:3},16,["class","aria-current","data-p-active","data-p-disabled","data-p"]))}B.render=j;var L={root:"p-steplist"},T=f.extend({name:"steplist",classes:L}),_={name:"BaseStepList",extends:c,style:T,provide:function(){return{$pcStepList:this,$parentInstance:this}}},N={name:"StepList",extends:_,inheritAttrs:!1};function E(e,t,a,r,o,n){return d(),v("div",p({class:e.cx("root")},e.ptmi("root")),[s(e.$slots,"default")],16)}N.render=E;var J=`
    .p-steplist {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        padding: 0;
        list-style-type: none;
        overflow-x: auto;
    }

    .p-step {
        position: relative;
        display: flex;
        flex: 1 1 auto;
        align-items: center;
        gap: dt('stepper.step.gap');
        padding: dt('stepper.step.padding');
    }

    .p-step:last-of-type {
        flex: initial;
    }

    .p-step-header {
        border: 0 none;
        display: inline-flex;
        align-items: center;
        text-decoration: none;
        cursor: pointer;
        transition:
            background dt('stepper.transition.duration'),
            color dt('stepper.transition.duration'),
            border-color dt('stepper.transition.duration'),
            outline-color dt('stepper.transition.duration'),
            box-shadow dt('stepper.transition.duration');
        border-radius: dt('stepper.step.header.border.radius');
        outline-color: transparent;
        background: transparent;
        padding: dt('stepper.step.header.padding');
        gap: dt('stepper.step.header.gap');
    }

    .p-step-header:focus-visible {
        box-shadow: dt('stepper.step.header.focus.ring.shadow');
        outline: dt('stepper.step.header.focus.ring.width') dt('stepper.step.header.focus.ring.style') dt('stepper.step.header.focus.ring.color');
        outline-offset: dt('stepper.step.header.focus.ring.offset');
    }

    .p-stepper.p-stepper-readonly .p-step {
        cursor: auto;
    }

    .p-step-title {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
        color: dt('stepper.step.title.color');
        font-weight: dt('stepper.step.title.font.weight');
        transition:
            background dt('stepper.transition.duration'),
            color dt('stepper.transition.duration'),
            border-color dt('stepper.transition.duration'),
            box-shadow dt('stepper.transition.duration'),
            outline-color dt('stepper.transition.duration');
    }

    .p-step-number {
        display: flex;
        align-items: center;
        justify-content: center;
        color: dt('stepper.step.number.color');
        border: 2px solid dt('stepper.step.number.border.color');
        background: dt('stepper.step.number.background');
        min-width: dt('stepper.step.number.size');
        height: dt('stepper.step.number.size');
        line-height: dt('stepper.step.number.size');
        font-size: dt('stepper.step.number.font.size');
        z-index: 1;
        border-radius: dt('stepper.step.number.border.radius');
        position: relative;
        font-weight: dt('stepper.step.number.font.weight');
    }

    .p-step-number::after {
        content: ' ';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: dt('stepper.step.number.border.radius');
        box-shadow: dt('stepper.step.number.shadow');
    }

    .p-step-active .p-step-header {
        cursor: default;
    }

    .p-step-active .p-step-number {
        background: dt('stepper.step.number.active.background');
        border-color: dt('stepper.step.number.active.border.color');
        color: dt('stepper.step.number.active.color');
    }

    .p-step-active .p-step-title {
        color: dt('stepper.step.title.active.color');
    }

    .p-step:not(.p-disabled):focus-visible {
        outline: dt('focus.ring.width') dt('focus.ring.style') dt('focus.ring.color');
        outline-offset: dt('focus.ring.offset');
    }

    .p-step:has(~ .p-step-active) .p-stepper-separator {
        background: dt('stepper.separator.active.background');
    }

    .p-stepper-separator {
        flex: 1 1 0;
        background: dt('stepper.separator.background');
        width: 100%;
        height: dt('stepper.separator.size');
        transition:
            background dt('stepper.transition.duration'),
            color dt('stepper.transition.duration'),
            border-color dt('stepper.transition.duration'),
            box-shadow dt('stepper.transition.duration'),
            outline-color dt('stepper.transition.duration');
    }

    .p-steppanels {
        padding: dt('stepper.steppanels.padding');
    }

    .p-steppanel {
        background: dt('stepper.steppanel.background');
        color: dt('stepper.steppanel.color');
    }

    .p-stepper:has(.p-stepitem) {
        display: flex;
        flex-direction: column;
    }

    .p-stepitem {
        display: flex;
        flex-direction: column;
        flex: initial;
    }

    .p-stepitem.p-stepitem-active {
        flex: 1 1 auto;
    }

    .p-stepitem .p-step {
        flex: initial;
    }
    
    .p-stepitem .p-steppanel {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-stepitem .p-steppanel-content-wrapper {
        display: flex;
        flex: 1 1 auto;
        min-height: 0;
    }
    .p-stepitem .p-steppanel-content {
        width: 100%;
        padding: dt('stepper.steppanel.padding');
        margin-inline-start: 1rem;
    }

    .p-stepitem .p-stepper-separator {
        flex: 0 0 auto;
        width: dt('stepper.separator.size');
        height: auto;
        margin: dt('stepper.separator.margin');
        position: relative;
        left: calc(-1 * dt('stepper.separator.size'));
    }

    .p-stepitem .p-stepper-separator:dir(rtl) {
        left: calc(-9 * dt('stepper.separator.size'));
    }

    .p-stepitem:has(~ .p-stepitem-active) .p-stepper-separator {
        background: dt('stepper.separator.active.background');
    }

    .p-stepitem:last-of-type .p-steppanel {
        padding-inline-start: dt('stepper.step.number.size');
    }
`,K={root:function(t){var a=t.props;return["p-stepper p-component",{"p-readonly":a.linear}]},separator:"p-stepper-separator"},Y=f.extend({name:"stepper",style:J,classes:K}),q={name:"BaseStepper",extends:c,props:{value:{type:[String,Number],default:void 0},linear:{type:Boolean,default:!1}},style:Y,provide:function(){return{$pcStepper:this,$parentInstance:this}}},F={name:"Stepper",extends:q,inheritAttrs:!1,emits:["update:value"],data:function(){return{d_value:this.value}},watch:{value:function(t){this.d_value=t}},methods:{updateValue:function(t){this.d_value!==t&&(this.d_value=t,this.$emit("update:value",t))},isStepActive:function(t){return this.d_value===t},isStepDisabled:function(){return this.linear}}};function G(e,t,a,r,o,n){return d(),v("div",p({class:e.cx("root"),role:"tablist"},e.ptmi("root")),[e.$slots.start?s(e.$slots,"start",{key:0}):h("",!0),s(e.$slots,"default"),e.$slots.end?s(e.$slots,"end",{key:1}):h("",!0)],16)}F.render=G;export{N as a,B as b,F as s};
