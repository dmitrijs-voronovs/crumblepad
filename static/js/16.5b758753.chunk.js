(this.webpackJsonpcrumblePad=this.webpackJsonpcrumblePad||[]).push([[16],{500:function(e,t,o){"use strict";o.r(t),o.d(t,"ion_popover",(function(){return b}));var n=o(2),r=o(63),i=(o(8),o(31),o(27)),a=(o(44),o(37)),s=o(550),c=o(552),l=o(553),p=function(e,t){var o="top",n="left",r=e.querySelector(".popover-content"),a=r.getBoundingClientRect(),s=a.width,c=a.height,l=e.ownerDocument.defaultView.innerWidth,p=e.ownerDocument.defaultView.innerHeight,d=t&&t.target&&t.target.getBoundingClientRect(),f=null!=d&&"top"in d?d.top:p/2-c/2,v=null!=d&&"left"in d?d.left:l/2,b=d&&d.width||0,h=d&&d.height||0,m=e.querySelector(".popover-arrow"),g=m.getBoundingClientRect(),w=g.width,y=g.height;null==d&&(m.style.display="none");var O={top:f+h,left:v+b/2-w/2},j={top:f+h+(y-1),left:v+b/2-s/2},x=!1,E=!1;j.left<u+25?(x=!0,j.left=u):s+u+j.left+25>l&&(E=!0,j.left=l-s-u,n="right"),f+h+c>p&&f-c>0?(O.top=f-(y+1),j.top=f-c-(y-1),e.className=e.className+" popover-bottom",o="bottom"):f+h+c>p&&(r.style.bottom=u+"%"),m.style.top=O.top+"px",m.style.left=O.left+"px",r.style.top=j.top+"px",r.style.left=j.left+"px",x&&(r.style.left="calc("+j.left+"px + var(--ion-safe-area-left, 0px))"),E&&(r.style.left="calc("+j.left+"px - var(--ion-safe-area-right, 0px))"),r.style.transformOrigin=o+" "+n;var _=Object(i.a)(),k=Object(i.a)(),D=Object(i.a)();return k.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,.08),D.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),_.addElement(e).easing("ease").duration(100).addAnimation([k,D])},u=5,d=function(e){var t=Object(i.a)(),o=Object(i.a)(),n=Object(i.a)();return o.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.08,0),n.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),t.addElement(e).easing("ease").duration(500).addAnimation([o,n])},f=function(e,t){var o=e.ownerDocument,n="rtl"===o.dir,r="top",a=n?"right":"left",s=e.querySelector(".popover-content"),c=s.getBoundingClientRect(),l=c.width,p=c.height,u=o.defaultView.innerWidth,d=o.defaultView.innerHeight,f=t&&t.target&&t.target.getBoundingClientRect(),v=null!=f&&"bottom"in f?f.bottom:d/2-p/2,b=null!=f&&"left"in f?n?f.left-l+f.width:f.left:u/2-l/2,h=f&&f.height||0,m={top:v,left:b};m.left<12?(m.left=12,a="left"):l+12+m.left>u&&(m.left=u-l-12,a="right"),v+h+p>d&&v-p>0?(m.top=v-p-h,e.className=e.className+" popover-bottom",r="bottom"):v+h+p>d&&(s.style.bottom="12px");var g=Object(i.a)(),w=Object(i.a)(),y=Object(i.a)(),O=Object(i.a)(),j=Object(i.a)();return w.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,.32),y.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),O.addElement(s).beforeStyles({top:m.top+"px",left:m.left+"px","transform-origin":r+" "+a}).fromTo("transform","scale(0.001)","scale(1)"),j.addElement(e.querySelector(".popover-viewport")).fromTo("opacity",.01,1),g.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([w,y,O,j])},v=function(e){var t=Object(i.a)(),o=Object(i.a)(),n=Object(i.a)();return o.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.32,0),n.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),t.addElement(e).easing("ease").duration(500).addAnimation([o,n])},b=function(){function e(e){var t=this;Object(r.l)(this,e),this.presented=!1,this.mode=Object(r.d)(this),this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),t.dismiss()},this.onBackdropTap=function(){t.dismiss(void 0,a.a)},this.onLifecycle=function(e){var o=t.usersElement,n=h[e.type];if(o&&n){var r=new CustomEvent(n,{bubbles:!1,cancelable:!1,detail:e.detail});o.dispatchEvent(r)}},Object(a.e)(this.el),this.didPresent=Object(r.e)(this,"ionPopoverDidPresent",7),this.willPresent=Object(r.e)(this,"ionPopoverWillPresent",7),this.willDismiss=Object(r.e)(this,"ionPopoverWillDismiss",7),this.didDismiss=Object(r.e)(this,"ionPopoverDidDismiss",7)}return e.prototype.present=function(){return Object(n.__awaiter)(this,void 0,void 0,(function(){var e,t,o;return Object(n.__generator)(this,(function(n){switch(n.label){case 0:if(this.presented)return[2];if(!(e=this.el.querySelector(".popover-content")))throw new Error("container is undefined");return t=Object.assign(Object.assign({},this.componentProps),{popover:this.el}),o=this,[4,Object(c.a)(this.delegate,e,this.component,["popover-viewport",this.el["s-sc"]],t)];case 1:return o.usersElement=n.sent(),[4,Object(l.a)(this.usersElement)];case 2:return n.sent(),[2,Object(a.f)(this,"popoverEnter",p,f,this.event)]}}))}))},e.prototype.dismiss=function(e,t){return Object(n.__awaiter)(this,void 0,void 0,(function(){var o;return Object(n.__generator)(this,(function(n){switch(n.label){case 0:return[4,Object(a.g)(this,e,t,"popoverLeave",d,v,this.event)];case 1:return(o=n.sent())?[4,Object(c.b)(this.delegate,this.usersElement)]:[3,3];case 2:n.sent(),n.label=3;case 3:return[2,o]}}))}))},e.prototype.onDidDismiss=function(){return Object(a.h)(this.el,"ionPopoverDidDismiss")},e.prototype.onWillDismiss=function(){return Object(a.h)(this.el,"ionPopoverWillDismiss")},e.prototype.render=function(){var e,t=Object(r.d)(this),o=this.onLifecycle;return Object(r.i)(r.a,{"aria-modal":"true","no-router":!0,style:{zIndex:""+(2e4+this.overlayIndex)},class:Object.assign(Object.assign({},Object(s.b)(this.cssClass)),(e={},e[t]=!0,e["popover-translucent"]=this.translucent,e)),onIonPopoverDidPresent:o,onIonPopoverWillPresent:o,onIonPopoverWillDismiss:o,onIonPopoverDidDismiss:o,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap},Object(r.i)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),Object(r.i)("div",{class:"popover-wrapper"},Object(r.i)("div",{class:"popover-arrow"}),Object(r.i)("div",{class:"popover-content"})))},Object.defineProperty(e.prototype,"el",{get:function(){return Object(r.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return'.sc-ion-popover-ios-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1001}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios:after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, [dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, [dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios:after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after{top:-6px}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, .popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}'},enumerable:!0,configurable:!0}),e}(),h={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"}},550:function(e,t,o){"use strict";o.d(t,"a",(function(){return i})),o.d(t,"b",(function(){return a})),o.d(t,"c",(function(){return r})),o.d(t,"d",(function(){return c}));var n=o(2),r=function(e,t){return null!==t.closest(e)},i=function(e){var t;return"string"===typeof e&&e.length>0?((t={"ion-color":!0})["ion-color-"+e]=!0,t):void 0},a=function(e){var t={};return function(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter((function(e){return null!=e})).map((function(e){return e.trim()})).filter((function(e){return""!==e})):[]}(e).forEach((function(e){return t[e]=!0})),t},s=/^[a-z][a-z0-9+\-.]*:/,c=function(e,t,o){return Object(n.__awaiter)(void 0,void 0,void 0,(function(){var r;return Object(n.__generator)(this,(function(n){return null!=e&&"#"!==e[0]&&!s.test(e)&&(r=document.querySelector("ion-router"))?(null!=t&&t.preventDefault(),[2,r.push(e,o)]):[2,!1]}))}))}},552:function(e,t,o){"use strict";o.d(t,"a",(function(){return r})),o.d(t,"b",(function(){return i}));var n=o(2),r=function(e,t,o,r,i){return Object(n.__awaiter)(void 0,void 0,void 0,(function(){var a;return Object(n.__generator)(this,(function(n){switch(n.label){case 0:if(e)return[2,e.attachViewToDom(t,o,i,r)];if("string"!==typeof o&&!(o instanceof HTMLElement))throw new Error("framework delegate is missing");return a="string"===typeof o?t.ownerDocument&&t.ownerDocument.createElement(o):o,r&&r.forEach((function(e){return a.classList.add(e)})),i&&Object.assign(a,i),t.appendChild(a),a.componentOnReady?[4,a.componentOnReady()]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2,a]}}))}))},i=function(e,t){if(t){if(e){var o=t.parentElement;return e.removeViewFromDom(o,t)}t.remove()}return Promise.resolve()}},553:function(e,t,o){"use strict";o.d(t,"a",(function(){return y})),o.d(t,"b",(function(){return x})),o.d(t,"c",(function(){return g})),o.d(t,"d",(function(){return O})),o.d(t,"e",(function(){return a}));var n=o(2),r=o(63),i=o(44),a=function(e){return new Promise((function(t,o){Object(r.m)((function(){s(e),c(e).then((function(o){o.animation&&o.animation.destroy(),l(e),t(o)}),(function(t){l(e),o(t)}))}))}))},s=function(e){var t=e.enteringEl,o=e.leavingEl;j(t,o,e.direction),e.showGoBack?t.classList.add("can-go-back"):t.classList.remove("can-go-back"),O(t,!1),o&&O(o,!1)},c=function(e){return Object(n.__awaiter)(void 0,void 0,void 0,(function(){var t;return Object(n.__generator)(this,(function(o){switch(o.label){case 0:return[4,p(e)];case 1:return t=o.sent(),[2,t?u(t,e):d(e)]}}))}))},l=function(e){var t=e.enteringEl,o=e.leavingEl;t.classList.remove("ion-page-invisible"),void 0!==o&&o.classList.remove("ion-page-invisible")},p=function(e){return Object(n.__awaiter)(void 0,void 0,void 0,(function(){var t;return Object(n.__generator)(this,(function(n){switch(n.label){case 0:return e.leavingEl&&e.animated&&0!==e.duration?e.animationBuilder?[2,e.animationBuilder]:"ios"!==e.mode?[3,2]:[4,o.e(91).then(o.bind(null,557))]:[2,void 0];case 1:return t=n.sent().iosTransitionAnimation,[3,4];case 2:return[4,o.e(92).then(o.bind(null,558))];case 3:t=n.sent().mdTransitionAnimation,n.label=4;case 4:return[2,t]}}))}))},u=function(e,t){return Object(n.__awaiter)(void 0,void 0,void 0,(function(){var r,i;return Object(n.__generator)(this,(function(n){switch(n.label){case 0:return[4,f(t,!0)];case 1:n.sent(),n.label=2;case 2:return n.trys.push([2,5,,6]),[4,o.e(3).then(o.bind(null,453))];case 3:return[4,n.sent().create(e,t.baseEl,t)];case 4:return r=n.sent(),[3,6];case 5:return n.sent(),r=e(t.baseEl,t),[3,6];case 6:return h(t.enteringEl,t.leavingEl),[4,b(r,t)];case 7:return i=n.sent(),t.progressCallback&&t.progressCallback(void 0),i&&m(t.enteringEl,t.leavingEl),[2,{hasCompleted:i,animation:r}]}}))}))},d=function(e){return Object(n.__awaiter)(void 0,void 0,void 0,(function(){var t,o;return Object(n.__generator)(this,(function(n){switch(n.label){case 0:return t=e.enteringEl,o=e.leavingEl,[4,f(e,!1)];case 1:return n.sent(),h(t,o),m(t,o),[2,{hasCompleted:!0}]}}))}))},f=function(e,t){return Object(n.__awaiter)(void 0,void 0,void 0,(function(){var o,r;return Object(n.__generator)(this,(function(n){switch(n.label){case 0:return o=void 0!==e.deepWait?e.deepWait:t,r=o?[y(e.enteringEl),y(e.leavingEl)]:[w(e.enteringEl),w(e.leavingEl)],[4,Promise.all(r)];case 1:return n.sent(),[4,v(e.viewIsReady,e.enteringEl)];case 2:return n.sent(),[2]}}))}))},v=function(e,t){return Object(n.__awaiter)(void 0,void 0,void 0,(function(){return Object(n.__generator)(this,(function(o){switch(o.label){case 0:return e?[4,e(t)]:[3,2];case 1:o.sent(),o.label=2;case 2:return[2]}}))}))},b=function(e,t){var o=t.progressCallback,n=new Promise((function(t){e.onFinish((function(o){"number"===typeof o?t(1===o):void 0!==e.hasCompleted&&t(e.hasCompleted)}))}));return o?(e.progressStart(!0),o(e)):e.play(),n},h=function(e,t){g(t,i.c),g(e,i.a)},m=function(e,t){g(e,i.b),g(t,i.d)},g=function(e,t){if(e){var o=new CustomEvent(t,{bubbles:!1,cancelable:!1});e.dispatchEvent(o)}},w=function(e){return e&&e.componentOnReady?e.componentOnReady():Promise.resolve()},y=function e(t){return Object(n.__awaiter)(void 0,void 0,void 0,(function(){var o;return Object(n.__generator)(this,(function(n){switch(n.label){case 0:return(o=t)?null==o.componentOnReady?[3,2]:[4,o.componentOnReady()]:[3,4];case 1:if(null!=n.sent())return[2];n.label=2;case 2:return[4,Promise.all(Array.from(o.children).map(e))];case 3:n.sent(),n.label=4;case 4:return[2]}}))}))},O=function(e,t){t?(e.setAttribute("aria-hidden","true"),e.classList.add("ion-page-hidden")):(e.hidden=!1,e.removeAttribute("aria-hidden"),e.classList.remove("ion-page-hidden"))},j=function(e,t,o){void 0!==e&&(e.style.zIndex="back"===o?"99":"101"),void 0!==t&&(t.style.zIndex="100")},x=function(e){if(e.classList.contains("ion-page"))return e;var t=e.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");return t||e}}}]);
//# sourceMappingURL=16.5b758753.chunk.js.map