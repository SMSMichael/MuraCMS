!function(t){var e={};function r(a){if(e[a])return e[a].exports;var n=e[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=308)}({16:function(t,e,r){
/*! mobile-drag-drop 2.3.0-rc.1 | Copyright (c) 2019 Tim Ruffles | MIT License */
!function(t){"use strict";var e="dnd-poly-",r="dnd-poly-",a=r+"dragstart-pending",n=r+"dragstart-cancel",o=["none","copy","copyLink","copyMove","link","linkMove","move","all"],i=["none","copy","move","link"],s=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}();function d(t){return t&&t.tagName}function l(t,e,r){void 0===r&&(r=!0),document.addEventListener(t,e,!!s&&{passive:r})}function u(t,e){document.removeEventListener(t,e)}function c(t,e,r,a){void 0===a&&(a=!1);var n=s?{passive:!0,capture:a}:a;return t.addEventListener(e,r,n),{off:function(){t.removeEventListener(e,r,n)}}}function h(t){return 0===t.length?0:t.reduce((function(t,e){return e+t}),0)/t.length}function f(t,e){for(var r=0;r<t.changedTouches.length;r++)if(t.changedTouches[r].identifier===e)return!0;return!1}function g(t,e,r){for(var a=[],n=[],o=0;o<e.touches.length;o++){var i=e.touches[o];a.push(i[t+"X"]),n.push(i[t+"Y"])}r.x=h(a),r.y=h(n)}var p=["","-webkit-"];function m(t,e,r,a,n){void 0===n&&(n=!0);var o=e.x,i=e.y;a&&(o+=a.x,i+=a.y),n&&(o-=parseInt(t.offsetWidth,10)/2,i-=parseInt(t.offsetHeight,10)/2);for(var s="translate3d("+o+"px,"+i+"px, 0)",d=0;d<p.length;d++){var l=p[d]+"transform";t.style[l]=s+" "+r[d]}}var v=function(){function t(t,e){this.t=t,this.i=e,this.s=i[0]}return Object.defineProperty(t.prototype,"dropEffect",{get:function(){return this.s},set:function(t){0!==this.t.mode&&o.indexOf(t)>-1&&(this.s=t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"types",{get:function(){if(0!==this.t.mode)return Object.freeze(this.t.types)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"effectAllowed",{get:function(){return this.t.effectAllowed},set:function(t){2===this.t.mode&&o.indexOf(t)>-1&&(this.t.effectAllowed=t)},enumerable:!0,configurable:!0}),t.prototype.setData=function(t,e){if(2===this.t.mode){if(t.indexOf(" ")>-1)throw new Error("illegal arg: type contains space");this.t.data[t]=e,-1===this.t.types.indexOf(t)&&this.t.types.push(t)}},t.prototype.getData=function(t){if(1===this.t.mode||2===this.t.mode)return this.t.data[t]||""},t.prototype.clearData=function(t){if(2===this.t.mode){if(t&&this.t.data[t]){delete this.t.data[t];var e=this.t.types.indexOf(t);return void(e>-1&&this.t.types.splice(e,1))}this.t.data={},this.t.types=[]}},t.prototype.setDragImage=function(t,e,r){2===this.t.mode&&this.i(t,e,r)},t}();function b(t,e){return t?t===o[0]?i[0]:0===t.indexOf(o[1])||t===o[7]?i[1]:0===t.indexOf(o[4])?i[3]:t===o[6]?i[2]:i[1]:3===e.nodeType&&"A"===e.tagName?i[3]:i[1]}function y(t,e,r,a,n,o,i){void 0===o&&(o=!0),void 0===i&&(i=null);var s=function(t,e,r,a,n,o,i){void 0===i&&(i=null);var s=e.changedTouches[0],d=new Event(r,{bubbles:!0,cancelable:a});d.dataTransfer=o,d.relatedTarget=i,d.screenX=s.screenX,d.screenY=s.screenY,d.clientX=s.clientX,d.clientY=s.clientY,d.pageX=s.pageX,d.pageY=s.pageY;var l=t.getBoundingClientRect();return d.offsetX=d.clientX-l.left,d.offsetY=d.clientY-l.top,d}(e,r,t,o,document.defaultView,n,i),d=!e.dispatchEvent(s);return a.mode=0,d}function M(t,e){if(!t||t===o[7])return e;if(e===i[1]){if(0===t.indexOf(i[1]))return i[1]}else if(e===i[3]){if(0===t.indexOf(i[3])||t.indexOf("Link")>-1)return i[3]}else if(e===i[2]&&(0===t.indexOf(i[2])||t.indexOf("Move")>-1))return i[2];return i[0]}var j,C=function(){function t(t,e,r,a){this.h=t,this.o=e,this.u=r,this.l=a,this.v=0,this.p=null,this.g=null,this.m=t,this.I=t.changedTouches[0],this.j=this.C.bind(this),this.S=this.k.bind(this),l("touchmove",this.j,!1),l("touchend",this.S,!1),l("touchcancel",this.S,!1)}return t.prototype.A=function(){var t=this;this.v=1,this.O=i[0],this.D={data:{},effectAllowed:void 0,mode:3,types:[]},this.M={x:null,y:null},this.F={x:null,y:null};var e=this.u;if(this.N=new v(this.D,(function(r,a,n){e=r,"number"!=typeof a&&"number"!=typeof n||(t.P={x:a||0,y:n||0})})),this.D.mode=2,this.N.dropEffect=i[0],y("dragstart",this.u,this.m,this.D,this.N))return this.v=3,this.T(),!1;g("page",this.m,this.F);var r,a=this.o.dragImageSetup(e);if(this.L=(r=a,p.map((function(t){var e=r.style[t+"transform"];return e&&"none"!==e?e.replace(/translate\(\D*\d+[^,]*,\D*\d+[^,]*\)\s*/g,""):""}))),a.style.position="absolute",a.style.left="0px",a.style.top="0px",a.style.zIndex="999999",a.classList.add("dnd-poly-drag-image"),a.classList.add("dnd-poly-icon"),this._=a,!this.P)if(this.o.dragImageOffset)this.P={x:this.o.dragImageOffset.x,y:this.o.dragImageOffset.y};else if(this.o.dragImageCenterOnTouch){var n=getComputedStyle(e);this.P={x:0-parseInt(n.marginLeft,10),y:0-parseInt(n.marginTop,10)}}else{var o=e.getBoundingClientRect();n=getComputedStyle(e),this.P={x:o.left-this.I.clientX-parseInt(n.marginLeft,10)+o.width/2,y:o.top-this.I.clientY-parseInt(n.marginTop,10)+o.height/2}}return m(this._,this.F,this.L,this.P,this.o.dragImageCenterOnTouch),document.body.appendChild(this._),this.V=window.setInterval((function(){t.X||(t.X=!0,t.Y(),t.X=!1)}),this.o.iterationInterval),!0},t.prototype.T=function(){this.V&&(clearInterval(this.V),this.V=null),u("touchmove",this.j),u("touchend",this.S),u("touchcancel",this.S),this._&&(this._.parentNode.removeChild(this._),this._=null),this.l(this.o,this.m,this.v)},t.prototype.C=function(t){var e=this;if(!1!==f(t,this.I.identifier)){if(this.m=t,0===this.v){var r=void 0;if(this.o.dragStartConditionOverride)try{r=this.o.dragStartConditionOverride(t)}catch(t){r=!1}else r=1===t.touches.length;return r?void(!0===this.A()&&(this.h.preventDefault(),t.preventDefault())):void this.T()}if(t.preventDefault(),g("client",t,this.M),g("page",t,this.F),this.o.dragImageTranslateOverride)try{var a=!1;if(this.o.dragImageTranslateOverride(t,{x:this.M.x,y:this.M.y},this.p,(function(t,r){e._&&(a=!0,e.M.x+=t,e.M.y+=r,e.F.x+=t,e.F.y+=r,m(e._,e.F,e.L,e.P,e.o.dragImageCenterOnTouch))})),a)return}catch(t){}m(this._,this.F,this.L,this.P,this.o.dragImageCenterOnTouch)}},t.prototype.k=function(t){if(!1!==f(t,this.I.identifier)){if(this.o.dragImageTranslateOverride)try{this.o.dragImageTranslateOverride(void 0,void 0,void 0,(function(){}))}catch(t){}0!==this.v?(t.preventDefault(),this.v="touchcancel"===t.type?3:2):this.T()}},t.prototype.Y=function(){var t=this,r=this.O;this.D.mode=3,this.N.dropEffect=i[0];var a=y("drag",this.u,this.m,this.D,this.N);if(a&&(this.O=i[0]),a||2===this.v||3===this.v)return this.q(this.v)?void function(t,e,r,a){var n=getComputedStyle(t);if("hidden"!==n.visibility&&"none"!==n.display){e.classList.add("dnd-poly-snapback");var o=getComputedStyle(e),i=parseFloat(o.transitionDuration);if(isNaN(i)||0===i)a();else{var s=t.getBoundingClientRect(),d={x:s.left,y:s.top};d.x+=document.body.scrollLeft||document.documentElement.scrollLeft,d.y+=document.body.scrollTop||document.documentElement.scrollTop,d.x-=parseInt(n.marginLeft,10),d.y-=parseInt(n.marginTop,10);var l=parseFloat(o.transitionDelay),u=Math.round(1e3*(i+l));m(e,d,r,void 0,!1),setTimeout(a,u)}}else a()}(this.u,this._,this.L,(function(){t.B()})):void this.B();var n=this.o.elementFromPoint(this.M.x,this.M.y),o=this.g;n!==this.p&&n!==this.g&&(this.p=n,null!==this.g&&(this.D.mode=3,this.N.dropEffect=i[0],y("dragexit",this.g,this.m,this.D,this.N,!1)),null===this.p?this.g=this.p:(this.D.mode=3,this.N.dropEffect=b(this.D.effectAllowed,this.u),y("dragenter",this.p,this.m,this.D,this.N)?(this.g=this.p,this.O=M(this.N.effectAllowed,this.N.dropEffect)):this.p!==document.body&&(this.g=document.body))),o!==this.g&&d(o)&&(this.D.mode=3,this.N.dropEffect=i[0],y("dragleave",o,this.m,this.D,this.N,!1,this.g)),d(this.g)&&(this.D.mode=3,this.N.dropEffect=b(this.D.effectAllowed,this.u),!1===y("dragover",this.g,this.m,this.D,this.N)?this.O=i[0]:this.O=M(this.N.effectAllowed,this.N.dropEffect)),r!==this.O&&this._.classList.remove(e+r);var s=e+this.O;this._.classList.add(s)},t.prototype.q=function(t){var e=this.O===i[0]||null===this.g||3===t;return e?d(this.g)&&(this.D.mode=3,this.N.dropEffect=i[0],y("dragleave",this.g,this.m,this.D,this.N,!1)):d(this.g)&&(this.D.mode=1,this.N.dropEffect=this.O,!0===y("drop",this.g,this.m,this.D,this.N)?this.O=this.N.dropEffect:this.O=i[0]),e},t.prototype.B=function(){this.D.mode=3,this.N.dropEffect=this.O,y("dragend",this.u,this.m,this.D,this.N,!1),this.v=2,this.T()},t}(),D={iterationInterval:150,tryFindDraggableTarget:function(t){var e=t.target;do{if(!1!==e.draggable){if(!0===e.draggable)return e;if(e.getAttribute&&"true"===e.getAttribute("draggable"))return e}}while((e=e.parentNode)&&e!==document.body)},dragImageSetup:function(t){var e=t.cloneNode(!0);return function t(e,r){if(1===e.nodeType){for(var a=getComputedStyle(e),n=0;n<a.length;n++){var o=a[n];r.style.setProperty(o,a.getPropertyValue(o),a.getPropertyPriority(o))}if(r.style.pointerEvents="none",r.removeAttribute("id"),r.removeAttribute("class"),r.removeAttribute("draggable"),"CANVAS"===r.nodeName){var i=e,s=r,d=i.getContext("2d").getImageData(0,0,i.width,i.height);s.getContext("2d").putImageData(d,0,0)}}if(e.hasChildNodes())for(n=0;n<e.childNodes.length;n++)t(e.childNodes[n],r.childNodes[n])}(t,e),e},elementFromPoint:function(t,e){return document.elementFromPoint(t,e)}};function O(t){if(!j){var e=D.tryFindDraggableTarget(t);if(e)try{j=new C(t,D,e,w)}catch(e){throw w(D,t,3),e}}}function E(t){var e=t.target,r=function(t){i.off(),s.off(),d.off(),l.off(),e&&e.dispatchEvent(new CustomEvent(n,{bubbles:!0,cancelable:!0})),clearTimeout(o)};e&&e.dispatchEvent(new CustomEvent(a,{bubbles:!0,cancelable:!0}));var o=window.setTimeout((function(){i.off(),s.off(),d.off(),l.off(),O(t)}),D.holdToDrag),i=c(e,"touchend",r),s=c(e,"touchcancel",r),d=c(e,"touchmove",r),l=c(window,"scroll",r,!0)}function w(t,e,r){if(0===r&&t.defaultActionOverride)try{t.defaultActionOverride(e),e.defaultPrevented}catch(t){}j=null}t.polyfill=function(t){if(t&&Object.keys(t).forEach((function(e){D[e]=t[e]})),!D.forceApply){var e=(r={dragEvents:"ondragstart"in document.documentElement,draggable:"draggable"in document.documentElement,userAgentSupportingNativeDnD:void 0},a=!!window.chrome||/chrome/i.test(navigator.userAgent),r.userAgentSupportingNativeDnD=!(/iPad|iPhone|iPod|Android/.test(navigator.userAgent)||a&&"ontouchstart"in document.documentElement),r);if(e.userAgentSupportingNativeDnD&&e.draggable&&e.dragEvents)return!1}var r,a;return D.holdToDrag?l("touchstart",E,!1):l("touchstart",O,!1),!0},Object.defineProperty(t,"__esModule",{value:!0})}(e)},17:function(t,e,r){!function(t){"use strict";function e(t){return t===document.body||t===document.documentElement}function r(t,r){var a;if(e(t))a=0===r?t.clientLeft:t.clientTop;else{var n=t.getBoundingClientRect();a=0===r?n.left:n.top}return a}function a(t,r){return e(t)?0===r?window.innerWidth:window.innerHeight:0===r?t.clientWidth:t.clientHeight}function n(t,r,a){var n=0===r?"scrollLeft":"scrollTop",o=e(t);if(2===arguments.length)return o?document.body[n]||document.documentElement[n]:t[n];o?(document.documentElement[n]+=a,document.body[n]+=a):t[n]+=a}function o(t){var e=getComputedStyle(t);return t.scrollHeight>t.clientHeight&&("scroll"===e.overflowY||"auto"===e.overflowY)||t.scrollWidth>t.clientWidth&&("scroll"===e.overflowX||"auto"===e.overflowX)}function i(t,e,r){return t<r?-1:e-t<r?1:0}function s(t,e,r,a){return-1===t?Math.abs(e-a):1===t?Math.abs(r-e-a):0}function d(t,e,r){var a=0===t?r.scrollX:r.scrollY;return 1===e?a>=(0===t?r.scrollWidth-r.width:r.scrollHeight-r.height):-1!==e||a<=0}var l,u,c,h,f,g={threshold:75,velocityFn:function(t,e){var r=t/e;return r*r*r*e}},p={horizontal:0,vertical:0},m={x:0,y:0};function v(){l||(l=window.requestAnimationFrame(b))}function b(){var t=0,r=0,a=e(h);0!==p.horizontal&&(t=Math.round(g.velocityFn(m.x,g.threshold)*p.horizontal),n(h,0,t)),0!==p.vertical&&(r=Math.round(g.velocityFn(m.y,g.threshold)*p.vertical),n(h,1,r)),a?f(t,r):f(0,0),l=null,y(u,h,g.threshold,p,m)&&v()}function y(t,e,o,l,u){if(!t||!e)return!1;var c={x:r(e,0),y:r(e,1),width:a(e,0),height:a(e,1),scrollX:n(e,0),scrollY:n(e,1),scrollWidth:e.scrollWidth,scrollHeight:e.scrollHeight},h={x:t.x-c.x,y:t.y-c.y};return l.horizontal=i(h.x,c.width,o),l.vertical=i(h.y,c.height,o),l.horizontal&&d(0,l.horizontal,c)?l.horizontal=0:l.horizontal&&(u.x=s(l.horizontal,h.x,c.width,o)),l.vertical&&d(1,l.vertical,c)?l.vertical=0:l.vertical&&(u.y=s(l.vertical,h.y,c.height,o)),!(!l.horizontal&&!l.vertical)}var M=function(t,e,r,a){u=e,f=a,c!==r&&(h=function(t){do{if(!t)return;if(o(t))return t;if(t===document.documentElement)return null}while(t=t.parentNode);return null}(c=r)),y(u,h,g.threshold,p,m)?v():l&&(window.cancelAnimationFrame(l),l=null)};t.scrollBehaviourDragImageTranslateOverride=M,Object.defineProperty(t,"__esModule",{value:!0})}(e)},2:function(t,e,r){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=function(t,e){var r=t[1]||"",a=t[3];if(!a)return r;if(e&&"function"==typeof btoa){var n=(i=a,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(d," */")),o=a.sources.map((function(t){return"/*# sourceURL=".concat(a.sourceRoot).concat(t," */")}));return[r].concat(o).concat([n]).join("\n")}var i,s,d;return[r].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(r,"}"):r})).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var a={},n=0;n<this.length;n++){var o=this[n][0];null!=o&&(a[o]=!0)}for(var i=0;i<t.length;i++){var s=t[i];null!=s[0]&&a[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="(".concat(s[2],") and (").concat(r,")")),e.push(s))}},e}},3:function(t,e,r){"use strict";var a,n={},o=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},i=function(){var t={};return function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}t[e]=r}return t[e]}}();function s(t,e){for(var r=[],a={},n=0;n<t.length;n++){var o=t[n],i=e.base?o[0]+e.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};a[i]?a[i].parts.push(s):r.push(a[i]={id:i,parts:[s]})}return r}function d(t,e){for(var r=0;r<t.length;r++){var a=t[r],o=n[a.id],i=0;if(o){for(o.refs++;i<o.parts.length;i++)o.parts[i](a.parts[i]);for(;i<a.parts.length;i++)o.parts.push(m(a.parts[i],e))}else{for(var s=[];i<a.parts.length;i++)s.push(m(a.parts[i],e));n[a.id]={id:a.id,refs:1,parts:s}}}}function l(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var a=r.nc;a&&(t.attributes.nonce=a)}if(Object.keys(t.attributes).forEach((function(r){e.setAttribute(r,t.attributes[r])})),"function"==typeof t.insert)t.insert(e);else{var n=i(t.insert||"head");if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(e)}return e}var u,c=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function h(t,e,r,a){var n=r?"":a.css;if(t.styleSheet)t.styleSheet.cssText=c(e,n);else{var o=document.createTextNode(n),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(o,i[e]):t.appendChild(o)}}function f(t,e,r){var a=r.css,n=r.media,o=r.sourceMap;if(n&&t.setAttribute("media",n),o&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}var g=null,p=0;function m(t,e){var r,a,n;if(e.singleton){var o=p++;r=g||(g=l(e)),a=h.bind(null,r,o,!1),n=h.bind(null,r,o,!0)}else r=l(e),a=f.bind(null,r,e),n=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(r)};return a(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;a(t=e)}else n()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o());var r=s(t,e);return d(r,e),function(t){for(var a=[],o=0;o<r.length;o++){var i=r[o],l=n[i.id];l&&(l.refs--,a.push(l))}t&&d(s(t,e),e);for(var u=0;u<a.length;u++){var c=a[u];if(0===c.refs){for(var h=0;h<c.parts.length;h++)c.parts[h]();delete n[c.id]}}}}},308:function(t,e,r){"use strict";r.r(e);var a=r(16),n=r(17);r(309),Object(a.polyfill)({dragImageTranslateOverride:n.scrollBehaviourDragImageTranslateOverride}),r(311),r(312)},309:function(t,e,r){var a=r(310);"string"==typeof a&&(a=[[t.i,a,""]]);var n={insert:"head",singleton:!1};r(3)(a,n);a.locals&&(t.exports=a.locals)},310:function(t,e,r){(t.exports=r(2)(!1)).push([t.i,"\n.dnd-poly-drag-image {\n    opacity: .5 !important;\n}\n\n.dnd-poly-drag-image.dnd-poly-snapback {\n    transition-property: transform, -webkit-transform !important;\n    transition-duration: 250ms !important;\n    transition-timing-function: ease-out !important;\n}\n",""])},311:function(t,e){t.exports=Mura},312:function(t,e){var r=function(t,e,r){return Array.prototype.slice.call(t,e,r)};function a(t){t.stopPropagation?t.stopPropagation():window.event&&(window.event.cancelBubble=!0)}function n(t){t.dataTransfer.setData("Text",""),t.dataTransfer.dropEffect="copy",dragEl=this,elDropHandled=!1,newMuraObject=!1,muraLooseDropTarget=null,MuraInlineEditor.sidebarAction("showobjects"),Mura(".mura-object-selected").removeClass("mura-object-selected"),Mura(".mura-region, .mura-region .mura-editable").addClass("mura-region-active"),Mura('.mura-region div[data-object="container"], .mura-region .mura-editable div[data-object="container"]').addClass("mura-container-active"),Mura(this).addClass("mura-object-selected")}function o(){dragEl=null,elDropHandled=!1,newMuraObject=!1,Mura(".mura-object-selected").removeClass("mura-object-selected"),Mura(".mura-region, .mura-region .mura-editable").removeClass("mura-region-active"),Mura('.mura-region div[data-object="container"], .mura-region .mura-editable div[data-object="container"]').removeClass("mura-container-active")}function i(t){if(t.preventDefault(),t.dataTransfer.dropEffect="copy",dragEl||newMuraObject){var e=Mura(".mura-drop-target");muraLooseDropTarget=this,e.length&&(e.removeClass("mura-drop-target").removeClass("mura-append").removeClass("mura-prepend"),e.attr("class")||e.removeAttr("class")),Mura(this).addClass("mura-drop-target").addClass("mura-"+l(t,this))}}function s(t){Mura(this).removeClass("mura-drop-target").removeClass("mura-append").removeClass("mura-prepend"),muraLooseDropTarget=null,Mura(this).attr("class")||Mura(this).removeAttr("class")}function d(t,e,r){var a=e.getBoundingClientRect();if("prepend"==r)return t.clientY-a.top;a.bottom;return a.bottom-t.clientY}function l(t,e){var r=e.getBoundingClientRect(),a=r.top,n=r.bottom,o=(n-a)/2+a,i="append";return e.className.indexOf("mura-prepend")&&(i="prepend"),n==a?i:t.clientY<=o?"prepend":"append"}function u(t){void 0!==t.clientY&&(t.clientY<150&&t.clientY>1&&E(-1),t.clientY>Mura(window).height()-150&&E(1))}function c(t){var e=Mura(".mura-drop-target").node;if(e&&(dragEl||newMuraObject))if(dragEl&&dragEl!=this){var r=d(t,e,o=l(t,e));if("container"==e.getAttribute("data-object")&&r>5){var n=Mura(e).children(".mura-object-content");if(!n.length)return;n.node.childNodes.length?n[o](dragEl):n.append(dragEl)}else{if(r<5&&!("prepend"==o&&e.previousSibling||"append"==o&&e.nextSibling))(i=Mura(e).parent().parent().closest('.mura-object[data-object="container"]')).length&&(e=i.node);"append"==o?e.parentNode.insertBefore(dragEl,e.nextSibling):e.parentNode.insertBefore(dragEl,e)}Mura("#adminSave").show(),Mura(e).closest(".mura-region-local").data("dirty",!0),elDropHandled=!0,a(t)}else if(dragEl==e){var o,i;if((r=d(t,e,o=l(t,e)))<5&&!("prepend"==o&&e.previousSibling||"append"==o&&e.nextSibling))(i=Mura(e).parent().parent().closest('.mura-object[data-object="container"]')).length&&(e=i.node,"append"==o?e.parentNode.insertBefore(dragEl,e.node.nextSibling):e.parentNode.insertBefore(dragEl,e.node));elDropHandled=!0,a(t)}else C.call(e,t);Mura(".mura-drop-target").removeClass("mura-drop-target").removeClass("mura-append").removeClass("mura-prepend"),muraLooseDropTarget=null,newMuraObject=!1,Mura(e).attr("class")||Mura(e).removeAttr("class")}function h(t){Mura(".mura-active-target").removeClass("mura-active-target");Mura(".mura-container-active");var e=Mura(this);if(e.hasClass("mura-object-selected")||Mura(this).addClass("mura-active-target"),"container"==e.data("object"))e.addClass("mura-container-active");else{var r=e.closest('div[data-object="container"]');r.length&&r.addClass("mura-container-active")}}function f(t){var e=Mura(this);e.removeClass("mura-active-target");var r=!0;if(void 0!==Mura.currentObjectInstanceID&&Mura.currentObjectInstanceID)if("container"==e.data("object")&&Mura.currentObjectInstanceID==e.data("instanceid"))r=!1;else{var a=e.closest('div[data-object="container"]');if(a.length)a.find('div[data-instanceid="'+Mura.currentObjectInstanceID+'"]').length&&(r=!1)}r&&e.removeClass("mura-container-active")}function g(t){var e=Mura(t),r=e.parent().closest(".mura-object");if(!r.length||r.length&&"container"==r.data("object")){if("container"==e.data("object"))var a=!0;else;e.off("drag",u).off("dragenter",n).off("dragover",i).off("drop",c).off("dragleave",s).on("drag",u).on("dragstart",n).on("dragend",o).on("dragover",i).on("dragleave",s).on("drop",c).attr("draggable",!0).hover(h,f,a)}}function p(t,e,r){if(t.closest(".mura-region").length){for(var a=t.parent().closest(".mura-object");a.length&&"container"!=a.data("object");)t=a,a=a.parent().closest(".mura-object");t.length&&t.addClass("mura-drop-target").addClass("mura-"+l(e,r))}}function m(t){if(t.preventDefault(),t.dataTransfer.dropEffect="copy",!Mura(".mura-drop-target").length&&(dragEl||newMuraObject)){var e=Mura(this).closest(".mura-object");e.length?p(e,t,this):Mura(this).addClass("mura-drop-target").addClass("mura-"+l(t,this))}}function v(t){if(t.preventDefault(),dragEl||newMuraObject){var e=Mura(".mura-drop-target");muraLooseDropTarget=this,e.length&&(e.removeClass("mura-drop-target").removeClass("mura-append").removeClass("mura-prepend"),e.attr("class")||e.removeAttr("class"));var r=Mura(this).closest(".mura-object");r.length?p(r,t,this):(r=Mura(this).closest(".mura-object")).length?r.addClass("mura-drop-target").addClass("mura-"+l(t,this)):Mura(this).addClass("mura-drop-target").addClass("mura-"+l(t,this))}}function b(t){Mura(this).removeClass("mura-drop-target").removeClass("mura-append").removeClass("mura-prepend"),muraLooseDropTarget=null,Mura(this).attr("class")||Mura(this).removeAttr("class")}function y(t){if(a(t),dragEl||newMuraObject){var e=Mura(".mura-drop-target").node;if(e){if(dragEl&&dragEl!=e){var r=l(t,e);if("container"==e.getAttribute("data-object")){var n=Mura(e).children(".mura-object-content");n.node.childNodes.length?n[r](dragEl):n.append(dragEl)}else try{"append"==r?e.parentNode.insertBefore(dragEl,e.nextSibling):e.parentNode.insertBefore(dragEl,e)}catch(t){}var o=Mura(dragEl);Mura("#adminSave").show(),o.addClass("mura-async-object"),"text"==o.data("object")&&"client"==o.data("render")&&"false"==o.data("async")||o.data("async",!0),Mura(e).closest(".mura-region-local").data("dirty",!0),Mura(e).hasClass("mura-object")?g(e):M(this),elDropHandled=!0,a(t)}else dragEl==e&&(elDropHandled=!0,a(t));C.call(e,t)}}Mura(".mura-drop-target").removeClass("mura-drop-target").removeClass("mura-append").removeClass("mura-prepend"),muraLooseDropTarget=null,newMuraObject=!1,Mura(this).attr("class")||Mura(this).removeAttr("class")}function M(t){Mura(t).off("dragenter",m).off("dragover",v).off("drop",y).off("dragleave",b).on("dragenter",m).on("dragover",v).on("dragleave",b).on("drop",y)}function j(){Mura(".mura-objectclass").each((function(){var t=Mura(this);t.data("inited")||(t.attr("draggable",!0),t.on("dragstart",(function(e){dragEl=null,elDropHandled=!1,newMuraObject=!0,muraLooseDropTarget=null,Mura("#dragtype").html(t.data("object")),Mura(".mura-sidebar").addClass("mura-sidebar--dragging"),Mura(".mura-region, .mura-region .mura-editable").addClass("mura-region-active"),Mura('.mura-region div[data-object="container"], .mura-region .mura-editable div[data-object="container"]').addClass("mura-container-active"),e.dataTransfer.setData("text",JSON.stringify({object:t.data("object"),objectname:t.data("objectname"),objectid:t.data("objectid"),objecticonclass:t.data("objecticonclass")}))})).on("dragend",(function(){if(Mura("#dragtype").html(""),dragEl=null,elDropHandled=!1,newMuraObject=!1,Mura(".mura-sidebar").removeClass("mura-sidebar--dragging"),Mura(".mura-region, .mura-region .mura-editable").removeClass("mura-region-active"),Mura('.mura-region div[data-object="container"], .mura-region .mura-editable div[data-object="container"]').removeClass("mura-container-active"),void 0!==Mura.currentObjectInstanceID&&Mura.currentObjectInstanceID){var t=Mura('div[data-instanceid="'+Mura.currentObjectInstanceID+'"]');if("container"==t.data("object")&&t.addClass("mura-container-active"),container=t.closest('div[data-object="container"]'),container.length)container.find('div[data-instanceid="'+Mura.currentObjectInstanceID+'"]').length&&container.addClass("mura-container-active")}})).on("drag",u),t.data("inited",!0))}))}function C(t){t.preventDefault(),t.stopPropagation&&t.stopPropagation();var e=t.dataTransfer.getData("text");if(""!=e)try{e=JSON.parse(e)}catch(t){e=""}if("object"==typeof e&&e.object){var r=document.createElement("DIV");r.setAttribute("data-object",e.object),r.setAttribute("data-objectname",e.objectname),r.setAttribute("data-objecticonclass",e.objecticonclass),r.setAttribute("data-async",!0),r.setAttribute("data-perm","author"),r.setAttribute("data-instanceid",Mura.createUUID()),r.setAttribute("class","mura-async-object mura-object mura-active"),e.objectid?r.setAttribute("data-objectid",e.objectid):r.setAttribute("data-objectid",Mura.createUUID());var n=Mura(this),o=l(t,this);if(n.hasClass("mura-object")){var i=d(t,n.node,o);if("container"==n.data("object")&&i>5){var s=n.children(".mura-object-content");s.node.childNodes.length?s[o](r):s.append(r)}else{if(i<5&&!("prepend"==o&&n.previousSibling||"append"==o&&n.nextSibling)){var u=n.parent().parent().closest('.mura-object[data-object="container"]');u.length&&(n=u)}"append"==o?n.node.parentNode.insertBefore(r,n.node.nextSibling):n.node.parentNode.insertBefore(r,n.node)}}else n.hasClass("mura-region-local")?this.appendChild(r):"append"==o?this.parentNode.insertBefore(r,this.nextSibling):this.parentNode.insertBefore(r,this);g(r),Mura.processAsyncObject(r),r=Mura(r),openFrontEndToolsModal(r.node,!0),r.on("click",Mura.handleObjectClick),r.closest(".mura-region-local").data("dirty",!0),r.on("dragover",(function(){})),Mura("#adminSave").show(),a(t)}}function D(t){t.preventDefault(),t.dataTransfer.dropEffect="copy"}function O(t){var e,n,o;if(t.preventDefault(),!Mura(this).find(".mura-object").length)return t.stopPropagation&&t.stopPropagation(),dragEl&&dragEl!==this?(e=this.parentNode,o=r(dragEl.parentNode.children).indexOf(dragEl),n=r(this.parentNode.children).indexOf(this),this.parentNode===dragEl.parentNode&&n>o?e.insertBefore(dragEl,this.nextSibling):this.appendChild(dragEl),Mura("#adminSave").show(),Mura(dragEl).data("async",!0),Mura(dragEl).addClass("mura-async-object"),Mura(this).data("dirty",!0),elDropHandled=!0,a(t)):dragEl==this&&(elDropHandled=!0,a(t)),C.call(this,t),muraLooseDropTarget=null,Mura(".mura-drop-target").removeClass("mura-drop-target").removeClass("mura-append").removeClass("mura-prepend"),!0}function E(t){var e=Mura(window).scrollTop();window.scrollTo({top:e+t})}Mura.initLayoutManager=function(t){if(t){var e=t.node?t:Mura(t);t=t.node||t}else{t=(e=Mura("body")).node,j(),Mura("body").removeClass("mura-sidebar-state__hidden--right").removeClass("mura-editing").addClass("mura-sidebar-state__pushed--right").addClass("mura-editing")}Mura.editing=!0,Mura(window).trigger("resize"),Mura("#frontEndToolsSidebariframe"),e.find(".mxp-editable").each((function(){var t=Mura(this);t.hasClass("mura-region-local")||(t.addClass("mura-region-local"),t.data("inited",!1),t.data("loose",!0),t.data("perm","editor"))})),e.find('.mura-region-local[data-inited="false"]').each((function(){var t=Mura(this);(!t.data("loose")||t.data("loose")&&"<p></p>"==t.html()||""==Mura.trim(t.html()))&&t.on("drop",O).on("dragover",D).data("inited","true")})),e.find(".mura-region-local .mura-object").each((function(){g(this)})),e.find('.mura-region-local .mura-object[data-object="container"], .mura-region-local div, .mura-region-local[data-loose="true"] p, .mura-region-local[data-loose="true"] h1, .mura-region-local[data-loose="true"] h2, .mura-region-local[data-loose="true"] h3, .mura-region-local[data-loose="true"] h4, .mura-region-local[data-loose="true"] img, .mura-region-local[data-loose="true"] table, .mura-region-local[data-loose="true"] article, .mura-region-local[data-loose="true"] dl').each((function(){M(this)})),e.find("div.mura-object[data-targetattr]").hover(h,f)},Mura.deInitLayoutManager=function(){Mura.editing=!1,Mura("body").removeClass("mura-editing"),Mura("body").removeClass("mura-sidebar-state__pushed--right"),Mura(".mura-region-local .mura-object").each((function(){Mura(this).off("drag",u).off("dragenter",n).off("dragover",i).off("drop",c).off("dragleave",s).off("dragstart",n).off("dragend",o).off("mouseover",h).off("mouseout",f).off("touchstart",h).off("touchend",f).attr("draggable",!1).removeClass("mura-active").removeClass("mura-object-selected").removeClass("mura-object-select").removeClass("mura-active-target")})),Mura(".mura-region-local").off("drop",O).off("dragover",D).data("inited","false"),Mura('.mura-region-local .mura-object[data-object="container"], .mura-region-local div, .mura-region-local[data-loose="true"] p, .mura-region-local[data-loose="true"] h1, .mura-region-local[data-loose="true"] h2, .mura-region-local[data-loose="true"] h3, .mura-region-local[data-loose="true"] h4, .mura-region-local[data-loose="true"] img, .mura-region-local[data-loose="true"] table, .mura-region-local[data-loose="true"] article, .mura-region-local[data-loose="true"] dl').off("dragenter",m).off("dragover",v).off("drop",y).off("dragleave",b),Mura(".mura-editable-attribute").each((function(){var t=Mura(this);if("undefined"!=typeof CKEDITOR&&CKEDITOR.instances[t.attr("id")]){var e=CKEDITOR.instances[t.attr("id")];e.updateElement(),e.destroy(!0)}t.attr("contenteditable","false"),t.removeClass("mura-active"),t.data("manualedit",!1),t.off("dblclick")}))},Mura.loadObjectClass=function(t,e,r,a,n,o){var i="muraAction=cArch.loadclass&compactDisplay=true&layoutmanager=true&siteid="+t+"&classid="+e+"&subclassid="+r+"&contentid="+a+"&parentid="+n+"&cacheid="+Math.random();if("plugins"==e)var s=Mura("#pluginList");else{s=Mura("#classList");Mura("#classListContainer").show()}return s.html(Mura.preloaderMarkup),Mura.ajax({url:Mura.adminpath+"?"+i,success:function(t){s.html(t),j()}}),!1},Mura.initLooseDropTarget=M,Mura.initDraggableObject=g,Mura.initDraggableObject_hoverin=h,Mura.initDraggableObject_hoverout=f}});