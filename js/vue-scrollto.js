/**
 * Minified by jsDelivr using UglifyJS v3.4.4.
 * Original file: /npm/vue-scrollto@2.11.0/vue-scrollto.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):n["vue-scrollto"]=e()}(this,function(){"use strict";var f=4,c=1e-7,l=10,r="function"==typeof Float32Array;function t(n,e){return 1-3*e+3*n}function i(n,e){return 3*e-6*n}function u(n){return 3*n}function d(n,e,o){return((t(e,o)*n+i(e,o))*n+u(e))*n}function s(n,e,o){return 3*t(e,o)*n*n+2*i(e,o)*n+u(e)}var F=function(i,e,u,o){if(!(0<=i&&i<=1&&0<=u&&u<=1))throw new Error("bezier x values must be in [0, 1] range");var a=r?new Float32Array(11):new Array(11);if(i!==e||u!==o)for(var n=0;n<11;++n)a[n]=d(.1*n,i,u);function t(n){for(var e=0,o=1;10!==o&&a[o]<=n;++o)e+=.1;var t=e+.1*((n-a[--o])/(a[o+1]-a[o])),r=s(t,i,u);return.001<=r?function(n,e,o,t){for(var r=0;r<f;++r){var i=s(e,o,t);if(0===i)return e;e-=(d(e,o,t)-n)/i}return e}(n,t,i,u):0===r?t:function(n,e,o,t,r){for(var i,u,a=0;0<(i=d(u=e+(o-e)/2,t,r)-n)?o=u:e=u,Math.abs(i)>c&&++a<l;);return u}(n,e,e+.1,i,u)}return function(n){return i===e&&u===o?n:0===n?0:1===n?1:d(t(n),e,o)}},M={ease:[.25,.1,.25,1],linear:[0,0,1,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]},a=!1;try{var n=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,n)}catch(n){}var P=function(n){return"string"!=typeof n?n:document.querySelector(n)},V=function(n,e,o){var t=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{passive:!1};e instanceof Array||(e=[e]);for(var r=0;r<e.length;r++)n.addEventListener(e[r],o,!!a&&t)},k=function(n,e,o){e instanceof Array||(e=[e]);for(var t=0;t<e.length;t++)n.removeEventListener(e[t],o)},q=function(n){for(var e=0,o=0;e+=n.offsetTop||0,o+=n.offsetLeft||0,n=n.offsetParent;);return{top:e,left:o}},N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},e=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},z=["mousedown","wheel","DOMMouseScroll","mousewheel","keyup","touchmove"],$={container:"body",duration:500,easing:"ease",offset:0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0};function o(n){$=e({},$,n)}var v=function(){var c=void 0,l=void 0,d=void 0,s=void 0,v=void 0,y=void 0,p=void 0,m=void 0,b=void 0,w=void 0,g=void 0,h=void 0,S=void 0,L=void 0,T=void 0,E=void 0,x=void 0,A=void 0,C=void 0,D=function(n){y&&(C=n,A=!0)},O=void 0,e=void 0,o=void 0,t=void 0;function j(n){if(A)return r();e||(e=n),o=n-e,t=Math.min(o/d,1),t=O(t),i(l,L+x*t,h+E*t),o<d?window.requestAnimationFrame(j):r()}function r(){A||i(l,T,S),e=!1,k(l,z,D),A&&b&&b(C,c),!A&&m&&m(c)}function i(n,e,o){g&&(n.scrollTop=e),w&&(n.scrollLeft=o),"body"===n.tagName.toLowerCase()&&(g&&(document.documentElement.scrollTop=e),w&&(document.documentElement.scrollLeft=o))}return function(n,e){var o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};if("object"===(void 0===e?"undefined":N(e))?o=e:"number"==typeof e&&(o.duration=e),!(c=P(n)))return console.warn("[vue-scrollto warn]: Trying to scroll to an element that is not on the page: "+n);l=P(o.container||$.container),d=o.duration||$.duration,s=o.easing||$.easing,v=o.offset||$.offset,y=o.hasOwnProperty("cancelable")?!1!==o.cancelable:$.cancelable,p=o.onStart||$.onStart,m=o.onDone||$.onDone,b=o.onCancel||$.onCancel,w=void 0===o.x?$.x:o.x,g=void 0===o.y?$.y:o.y;var t,r,i,u,a=q(l),f=q(c);return"function"==typeof v&&(v=v()),r=(t=l).scrollTop,"body"===t.tagName.toLowerCase()&&(r=r||document.documentElement.scrollTop),L=r,T=f.top-a.top+v,u=(i=l).scrollLeft,"body"===i.tagName.toLowerCase()&&(u=u||document.documentElement.scrollLeft),h=u,S=f.left-a.left+v,A=!1,x=T-L,E=S-h,"string"==typeof s&&(s=M[s]||M.ease),O=F.apply(F,s),x||E?(p&&p(c),V(l,z,D,{passive:!0}),window.requestAnimationFrame(j),function(){A=!(C=null)}):void 0}}(),y=[];function p(n){var e=function(n){for(var e=0;e<y.length;++e)if(y[e].el===n)return y[e]}(n);return e||(y.push(e={el:n,binding:{}}),e)}function m(n){n.preventDefault();var e=p(this).binding;if("string"==typeof e.value)return v(e.value);v(e.value.el||e.value.element,e.value)}var b={bind:function(n,e){p(n).binding=e,V(n,"click",m)},unbind:function(n){!function(n){for(var e=0;e<y.length;++e)if(y[e].el===n)return y.splice(e,1)}(n),k(n,"click",m)},update:function(n,e){p(n).binding=e},scrollTo:v,bindings:y},w=function(n,e){e&&o(e),n.directive("scroll-to",b),n.prototype.$scrollTo=b.scrollTo};return"undefined"!=typeof window&&window.Vue&&(window.VueScrollTo=b,window.VueScrollTo.setDefaults=o,Vue.use(w)),b.install=w,b});
//# sourceMappingURL=/sm/08cfd1930c32877a28b9e72190c2cf61c8cff136c6869bbc070cbfc26ed970f0.map