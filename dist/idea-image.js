<<<<<<< HEAD
<<<<<<< HEAD
window.OpenStadComponents=function(r){var n={};function o(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}return o.m=r,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=14)}({0:function(t,e){t.exports=window.React},1:function(t,e,r){(function(t){function e(t,e,r){var n=r[0],o=r.length;!t&&"object"===c(n)||(n={});for(var i=0;i<o;++i){var s,u=r[i];if("object"===c(u))for(var a in u){"__proto__"!==a&&(s=t?f.clone(u[a]):u[a],n[a]=e?function t(e,r){if("object"!==c(e))return r;for(var n in r)"object"===c(e[n])&&"object"===c(r[n])?e[n]=t(e[n],r[n]):e[n]=r[n];return e}(n[a],s):s)}}return n}function c(t){return{}.toString.call(t).slice(8,-1).toLowerCase()}var r,f;r=t&&"object"==typeof t.exports&&t.exports,(f=function(t){return e(!0===t,!1,arguments)}).recursive=function(t){return e(!0===t,!0,arguments)},f.clone=function(t){var e,r,n=t,o=c(t);if("array"===o)for(n=[],r=t.length,e=0;e<r;++e)n[e]=f.clone(t[e]);else if("object"===o)for(e in n={},t)n[e]=f.clone(t[e]);return n},r?t.exports=f:window.merge=f}).call(this,r(18)(t))},10:function(t,e,r){t.exports=r(15).Promise},11:function(t,e){var r,n,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function u(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(t){r=i}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(t){n=s}}();var a,c=[],f=!1,l=-1;function h(){f&&a&&(f=!1,a.length?c=a.concat(c):l=-1,c.length&&d())}function d(){if(!f){var t=u(h);f=!0;for(var e=c.length;e;){for(a=c,c=[];++l<e;)a&&a[l].run();l=-1,e=c.length}a=null,f=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function y(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(1<arguments.length)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];c.push(new p(t,e)),1!==c.length||f||u(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},14:function(t,e,r){"use strict";r.r(e),r.d(e,"default",function(){return y}),r.d(e,"IdeaImage",function(){return y});r(6);var n=r(0),s=r.n(n),o=r(3),i=r.n(o),u=(r(65),r(1)),a=r.n(u),c=r(4);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(i){var s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e,r,n,o=p(i);return e=s?(t=p(this).constructor,Reflect.construct(o,arguments,t)):o.apply(this,arguments),r=this,!(n=e)||"object"!==f(n)&&"function"!=typeof n?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(r):n}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(o,c["a"]);var t,e,r,n=d(o);function o(t){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o);return(e=n.call(this,t)).config=a.a.recursive({allowMultipleImages:!1},e.config,e.props.config||{}),e.state={currentImageIndex:0,width:0},e}return t=o,(e=[{key:"componentDidMount",value:function(){var t=document.querySelector("#".concat(this.divId));this.setState({width:t.offsetWidth})}},{key:"setCurrentImageIndex",value:function(t){this.setState({currentImageIndex:t})}},{key:"render",value:function(){var i=this,t=i.props.idea;if(!t)return null;var e=t.extraData&&t.extraData.images||[],r=t.posterImage&&t.posterImage.key||t.extraData&&t.extraData.images&&t.extraData.images[i.state.currentImageIndex];return i.config.allowMultipleImages&&1<e.length?s.a.createElement("div",{id:i.divId,className:"osc-idea-multiple-images"},s.a.createElement("div",{className:"osc-idea-image-spacer"},s.a.createElement("div",{className:"osc-idea-image",style:r?{backgroundImage:"url(".concat(r,")")}:{},key:"image-"+t.id})),s.a.createElement("div",{className:"osc-idea-multiple-images-thumbs"},e.map(function(t,e){var r=.1*i.state.width,n=16*r/9,o=1.05*n*e;return s.a.createElement("div",{className:"osc-idea-image-thumb-spacer",key:"osc-idea-image-thumb-".concat(e),style:{left:o,width:n,height:r}},s.a.createElement("div",{className:"osc-idea-image-thumb",style:t?{backgroundImage:"url(".concat(t,")"),zIndex:10-e}:{},onClick:function(){return i.setCurrentImageIndex(e)}}))}))):s.a.createElement("div",{id:i.divId,className:"osc-idea-image-spacer"},s.a.createElement("div",{className:"osc-idea-image",style:r?{backgroundImage:"url(".concat(r,")")}:{},key:"image-"+t.id}))}}])&&l(t.prototype,e),r&&l(t,r),o}();y.renderElement=function(t,e){var r=t.attributes;i.a.render(s.a.createElement(y,{attributes:r,config:e}),t)}},15:function(t,e,lt){(function(at,ct){var ft;t.exports=function(){"use strict";function r(t){return typeof t==="function"||typeof t==="object"&&t!==null}function c(t){return typeof t==="function"}var t=undefined;if(!Array.isArray){t=function(t){return Object.prototype.toString.call(t)==="[object Array]"}}else{t=Array.isArray}var n=t,o=0,i=undefined,s=undefined,u=function t(e,r){g[o]=e;g[o+1]=r;o+=2;if(o===2){if(s){s(_)}else{T()}}};function e(t){s=t}function a(t){u=t}var f=typeof window!=="undefined"?window:undefined,l=f||{},h=l.MutationObserver||l.WebKitMutationObserver,d=typeof self==="undefined"&&typeof at!=="undefined"&&{}.toString.call(at)==="[object process]",p=typeof Uint8ClampedArray!=="undefined"&&typeof importScripts!=="undefined"&&typeof MessageChannel!=="undefined";function y(){return function(){return at.nextTick(_)}}function b(){return function(){i(_)}}function m(){var t=0;var e=new h(_);var r=document.createTextNode("");e.observe(r,{characterData:true});return function(){r.data=t=++t%2}}function v(){var t=new MessageChannel;t.port1.onmessage=_;return function(){return t.port2.postMessage(0)}}function w(){var t=setTimeout;return function(){return t(_,1)}}var g=new Array(1e3);function _(){for(var t=0;t<o;t+=2){var e=g[t];var r=g[t+1];e(r);g[t]=undefined;g[t+1]=undefined}o=0}function E(){try{var t=ft;var e=lt(16);i=e.runOnLoop||e.runOnContext;return b()}catch(t){return w()}}var T=undefined;if(d){T=y()}else if(h){T=m()}else if(p){T=v()}else if(f===undefined&&"function"==="function"){T=E()}else{T=w()}function A(t,e){var r=arguments;var n=this;var o=new this.constructor(j);if(o[x]===undefined){Q(o)}var i=n._state;if(i){(function(){var t=r[i-1];u(function(){return V(i,o,t,n._result)})})()}else{G(n,o,t,e)}return o}function O(t){var e=this;if(t&&typeof t==="object"&&t.constructor===e){return t}var r=new e(j);F(r,t);return r}var x=Math.random().toString(36).substring(16);function j(){}var S=void 0,I=1,P=2,B=new z;function R(){return new TypeError("You cannot resolve a promise with itself")}function k(){return new TypeError("A promises callback cannot return that same promise.")}function D(t){try{return t.then}catch(t){B.error=t;return B}}function U(t,e,r,n){try{t.call(e,r,n)}catch(t){return t}}function C(t,n,o){u(function(e){var r=false;var t=U(o,n,function(t){if(r){return}r=true;if(n!==t){F(e,t)}else{q(e,t)}},function(t){if(r){return}r=true;H(e,t)},"Settle: "+(e._label||" unknown promise"));if(!r&&t){r=true;H(e,t)}},t)}function L(e,t){if(t._state===I){q(e,t._result)}else if(t._state===P){H(e,t._result)}else{G(t,undefined,function(t){return F(e,t)},function(t){return H(e,t)})}}function M(t,e,r){if(e.constructor===t.constructor&&r===A&&e.constructor.resolve===O){L(t,e)}else{if(r===B){H(t,B.error)}else if(r===undefined){q(t,e)}else if(c(r)){C(t,e,r)}else{q(t,e)}}}function F(t,e){if(t===e){H(t,R())}else if(r(e)){M(t,e,D(e))}else{q(t,e)}}function N(t){if(t._onerror){t._onerror(t._result)}Y(t)}function q(t,e){if(t._state!==S){return}t._result=e;t._state=I;if(t._subscribers.length!==0){u(Y,t)}}function H(t,e){if(t._state!==S){return}t._state=P;t._result=e;u(N,t)}function G(t,e,r,n){var o=t._subscribers;var i=o.length;t._onerror=null;o[i]=e;o[i+I]=r;o[i+P]=n;if(i===0&&t._state){u(Y,t)}}function Y(t){var e=t._subscribers;var r=t._state;if(e.length===0){return}var n=undefined,o=undefined,i=t._result;for(var s=0;s<e.length;s+=3){n=e[s];o=e[s+r];if(n){V(r,n,o,i)}else{o(i)}}t._subscribers.length=0}function z(){this.error=null}var J=new z;function K(t,e){try{return t(e)}catch(t){J.error=t;return J}}function V(t,e,r,n){var o=c(r),i=undefined,s=undefined,u=undefined,a=undefined;if(o){i=K(r,n);if(i===J){a=true;s=i.error;i=null}else{u=true}if(e===i){H(e,k());return}}else{i=n;u=true}if(e._state!==S){}else if(o&&u){F(e,i)}else if(a){H(e,s)}else if(t===I){q(e,i)}else if(t===P){H(e,i)}}function W(r,t){try{t(function t(e){F(r,e)},function t(e){H(r,e)})}catch(t){H(r,t)}}var X=0;function $(){return X++}function Q(t){t[x]=X++;t._state=undefined;t._result=undefined;t._subscribers=[]}function Z(t,e){this._instanceConstructor=t;this.promise=new t(j);if(!this.promise[x]){Q(this.promise)}if(n(e)){this._input=e;this.length=e.length;this._remaining=e.length;this._result=new Array(this.length);if(this.length===0){q(this.promise,this._result)}else{this.length=this.length||0;this._enumerate();if(this._remaining===0){q(this.promise,this._result)}}}else{H(this.promise,tt())}}function tt(){return new Error("Array Methods must be provided an Array")}function et(t){return new Z(this,t).promise}function rt(o){var i=this;if(n(o))return new i(function(t,e){for(var r=o.length,n=0;n<r;n++)i.resolve(o[n]).then(t,e)});else return new i(function(t,e){return e(new TypeError("You must pass an array to race."))})}function nt(t){var e=new this(j);return H(e,t),e}function ot(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function it(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function st(t){this[x]=$();this._result=this._state=undefined;this._subscribers=[];if(j!==t){typeof t!=="function"&&ot();this instanceof st?W(this,t):it()}}function ut(){var t=undefined;if(typeof ct!=="undefined"){t=ct}else if(typeof self!=="undefined"){t=self}else{try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}}var e=t.Promise;if(e){var r=null;try{r=Object.prototype.toString.call(e.resolve())}catch(t){}if(r==="[object Promise]"&&!e.cast){return}}t.Promise=st}return Z.prototype._enumerate=function(){for(var t=this.length,e=this._input,r=0;this._state===S&&r<t;r++)this._eachEntry(e[r],r)},Z.prototype._eachEntry=function(e,t){var r,n,o=this._instanceConstructor,i=o.resolve;i===O?(r=D(e))===A&&e._state!==S?this._settledAt(e._state,t,e._result):"function"!=typeof r?(this._remaining--,this._result[t]=e):o===st?(M(n=new o(j),e,r),this._willSettleAt(n,t)):this._willSettleAt(new o(function(t){return t(e)}),t):this._willSettleAt(i(e),t)},Z.prototype._settledAt=function(t,e,r){var n=this.promise;n._state===S&&(this._remaining--,t===P?H(n,r):this._result[e]=r),0===this._remaining&&q(n,this._result)},Z.prototype._willSettleAt=function(t,e){var r=this;G(t,void 0,function(t){return r._settledAt(I,e,t)},function(t){return r._settledAt(P,e,t)})},st.all=function(t){return new Z(this,t).promise},st.race=function(o){var i=this;return n(o)?new i(function(t,e){for(var r=o.length,n=0;n<r;n++)i.resolve(o[n]).then(t,e)}):new i(function(t,e){return e(new TypeError("You must pass an array to race."))})},st.resolve=O,st.reject=function(t){var e=new this(j);return H(e,t),e},st._setScheduler=function(t){s=t},st._setAsap=function(t){u=t},st._asap=u,st.prototype={constructor:st,then:A,catch:function(t){return this.then(null,t)}},ut(),st.polyfill=ut,st.Promise=st}()}).call(this,lt(11),lt(8))},16:function(t,e){},18:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},3:function(t,e){t.exports=window.ReactDOM},4:function(t,e,r){"use strict";r.d(e,"a",function(){return o});var n=r(0),s=r.n(n);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(i){var s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e,r,n,o=h(i);return e=s?(t=h(this).constructor,Reflect.construct(o,arguments,t)):o.apply(this,arguments),r=this,!(n=e)||"object"!==u(n)&&"function"!=typeof n?l(r):n}}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var o=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(i,s.a.Component);var t,e,r,o=f(i);function i(r){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i);var n=l(t=o.call(this,r));if(r.attributes&&Object.keys(r.attributes).forEach(function(t){var e=r.attributes[t];n[e.name]=e.value}),n.config=n.config||r.config,n.config)try{n.config=JSON.parse(n.config)}catch(t){}return n.divId=n.divId||n.config&&n.config.divId||r.id||"openstad-component-".concat(parseInt(1e8*Math.random())),window[n.divId]=l(t),t}return t=i,(e=[{key:"componentDidMount",value:function(){}}])&&a(t.prototype,e),r&&a(t,r),i}()},6:function(t,e,r){"use strict";(function(i){var e,r,n="URLSearchParams"in self,o="Symbol"in self&&"iterator"in Symbol,u="FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),s="FormData"in self,a="ArrayBuffer"in self;function c(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function f(t){return"string"!=typeof t&&(t=String(t)),t}function t(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return o&&(t[Symbol.iterator]=function(){return t}),t}function l(e){this.map={},e instanceof l?e.forEach(function(t,e){this.append(e,t)},this):Array.isArray(e)?e.forEach(function(t){this.append(t[0],t[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function h(t){if(t.bodyUsed)return i.reject(new TypeError("Already read"));t.bodyUsed=!0}function d(r){return new i(function(t,e){r.onload=function(){t(r.result)},r.onerror=function(){e(r.error)}})}function p(t){var e=new FileReader,r=d(e);return e.readAsArrayBuffer(t),r}function y(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function b(){return this.bodyUsed=!1,this._initBody=function(t){var e;(this._bodyInit=t)?"string"==typeof t?this._bodyText=t:u&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:s&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:n&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():a&&u&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=y(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):a&&(ArrayBuffer.prototype.isPrototypeOf(t)||r(t))?this._bodyArrayBuffer=y(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},u&&(this.blob=function(){var t=h(this);if(t)return t;if(this._bodyBlob)return i.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return i.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return i.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?h(this)||i.resolve(this._bodyArrayBuffer):this.blob().then(p)}),this.text=function(){var t,e,r,n=h(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=d(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return i.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return i.resolve(this._bodyText)},s&&(this.formData=function(){return this.text().then(w)}),this.json=function(){return this.text().then(JSON.parse)},this}a&&(e=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],r=ArrayBuffer.isView||function(t){return t&&-1<e.indexOf(Object.prototype.toString.call(t))}),l.prototype.append=function(t,e){t=c(t),e=f(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},l.prototype.delete=function(t){delete this.map[c(t)]},l.prototype.get=function(t){return t=c(t),this.has(t)?this.map[t]:null},l.prototype.has=function(t){return this.map.hasOwnProperty(c(t))},l.prototype.set=function(t,e){this.map[c(t)]=f(e)},l.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},l.prototype.keys=function(){var r=[];return this.forEach(function(t,e){r.push(e)}),t(r)},l.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),t(e)},l.prototype.entries=function(){var r=[];return this.forEach(function(t,e){r.push([e,t])}),t(r)},o&&(l.prototype[Symbol.iterator]=l.prototype.entries);var m=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function v(t,e){var r,n,o=(e=e||{}).body;if(t instanceof v){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new l(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new l(e.headers)),this.method=(r=e.method||this.method||"GET",n=r.toUpperCase(),-1<m.indexOf(n)?n:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function w(t){var o=new FormData;return t.trim().split("&").forEach(function(t){var e,r,n;t&&(r=(e=t.split("=")).shift().replace(/\+/g," "),n=e.join("=").replace(/\+/g," "),o.append(decodeURIComponent(r),decodeURIComponent(n)))}),o}function g(t,e){e=e||{},this.type="default",this.status=void 0===e.status?200:e.status,this.ok=200<=this.status&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new l(e.headers),this.url=e.url||"",this._initBody(t)}v.prototype.clone=function(){return new v(this,{body:this._bodyInit})},b.call(v.prototype),b.call(g.prototype),g.prototype.clone=function(){return new g(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new l(this.headers),url:this.url})},g.error=function(){var t=new g(null,{status:0,statusText:""});return t.type="error",t};var _=[301,302,303,307,308];g.redirect=function(t,e){if(-1===_.indexOf(e))throw new RangeError("Invalid status code");return new g(null,{status:e,headers:{location:t}})};var E=self.DOMException;try{new E}catch(t){(E=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),E.prototype.constructor=E}function T(o,s){return new i(function(n,t){var e=new v(o,s);if(e.signal&&e.signal.aborted)return t(new E("Aborted","AbortError"));var i=new XMLHttpRequest;function r(){i.abort()}i.onload=function(){var t,o,e={status:i.status,statusText:i.statusText,headers:(t=i.getAllResponseHeaders()||"",o=new l,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var e,r=t.split(":"),n=r.shift().trim();n&&(e=r.join(":").trim(),o.append(n,e))}),o)};e.url="responseURL"in i?i.responseURL:e.headers.get("X-Request-URL");var r="response"in i?i.response:i.responseText;n(new g(r,e))},i.onerror=function(){t(new TypeError("Network request failed"))},i.ontimeout=function(){t(new TypeError("Network request failed"))},i.onabort=function(){t(new E("Aborted","AbortError"))},i.open(e.method,e.url,!0),"include"===e.credentials?i.withCredentials=!0:"omit"===e.credentials&&(i.withCredentials=!1),"responseType"in i&&u&&(i.responseType="blob"),e.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),e.signal&&(e.signal.addEventListener("abort",r),i.onreadystatechange=function(){4===i.readyState&&e.signal.removeEventListener("abort",r)}),i.send(void 0===e._bodyInit?null:e._bodyInit)})}T.polyfill=!0,self.fetch||(self.fetch=T,self.Headers=l,self.Request=v,self.Response=g)}).call(this,r(10))},65:function(t,e,r){},8:function(t,e){var r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r}});
=======
window.OpenStadComponents=function(r){var n={};function o(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}return o.m=r,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=10)}({0:function(t,e){t.exports=window.React},1:function(t,e,r){(function(t){function e(t,e,r){var n=r[0],o=r.length;!t&&"object"===c(n)||(n={});for(var i=0;i<o;++i){var s,u=r[i];if("object"===c(u))for(var a in u){"__proto__"!==a&&(s=t?f.clone(u[a]):u[a],n[a]=e?function t(e,r){if("object"!==c(e))return r;for(var n in r)"object"===c(e[n])&&"object"===c(r[n])?e[n]=t(e[n],r[n]):e[n]=r[n];return e}(n[a],s):s)}}return n}function c(t){return{}.toString.call(t).slice(8,-1).toLowerCase()}var r,f;r=t&&"object"==typeof t.exports&&t.exports,(f=function(t){return e(!0===t,!1,arguments)}).recursive=function(t){return e(!0===t,!0,arguments)},f.clone=function(t){var e,r,n=t,o=c(t);if("array"===o)for(n=[],r=t.length,e=0;e<r;++e)n[e]=f.clone(t[e]);else if("object"===o)for(e in n={},t)n[e]=f.clone(t[e]);return n},r?t.exports=f:window.merge=f}).call(this,r(17)(t))},10:function(t,e,r){"use strict";r.r(e),r.d(e,"default",function(){return y}),r.d(e,"IdeaImage",function(){return y});r(6);var n=r(0),s=r.n(n),o=r(3),i=r.n(o),u=(r(67),r(1)),a=r.n(u),c=r(4);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(i){var s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e,r,n,o=p(i);return e=s?(t=p(this).constructor,Reflect.construct(o,arguments,t)):o.apply(this,arguments),r=this,!(n=e)||"object"!==f(n)&&"function"!=typeof n?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(r):n}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(o,c["a"]);var t,e,r,n=d(o);function o(t){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o);return(e=n.call(this,t)).config=a.a.recursive({allowMultipleImages:!1},e.config,e.props.config||{}),e.state={currentImageIndex:0,width:0},e}return t=o,(e=[{key:"componentDidMount",value:function(){var t=document.querySelector("#".concat(this.divId));this.setState({width:t.offsetWidth})}},{key:"setCurrentImageIndex",value:function(t){this.setState({currentImageIndex:t})}},{key:"render",value:function(){var i=this,t=i.props.idea;if(!t)return null;var e=t.extraData&&t.extraData.images||[],r=t.posterImage&&t.posterImage.key||t.extraData&&t.extraData.images&&t.extraData.images[i.state.currentImageIndex];return i.config.allowMultipleImages&&1<e.length?s.a.createElement("div",{id:i.divId,className:"osc-idea-multiple-images"},s.a.createElement("div",{className:"osc-idea-image-spacer"},s.a.createElement("div",{className:"osc-idea-image",style:r?{backgroundImage:"url(".concat(r,")")}:{},key:"image-"+t.id})),s.a.createElement("div",{className:"osc-idea-multiple-images-thumbs"},e.map(function(t,e){var r=.1*i.state.width,n=16*r/9,o=1.05*n*e;return s.a.createElement("div",{className:"osc-idea-image-thumb-spacer",key:"osc-idea-image-thumb-".concat(e),style:{left:o,width:n,height:r}},s.a.createElement("div",{className:"osc-idea-image-thumb",style:t?{backgroundImage:"url(".concat(t,")"),zIndex:10-e}:{},onClick:function(){return i.setCurrentImageIndex(e)}}))}))):s.a.createElement("div",{id:i.divId,className:"osc-idea-image-spacer"},s.a.createElement("div",{className:"osc-idea-image",style:r?{backgroundImage:"url(".concat(r,")")}:{},key:"image-"+t.id}))}}])&&l(t.prototype,e),r&&l(t,r),o}();y.renderElement=function(t,e){var r=t.attributes;i.a.render(s.a.createElement(y,{attributes:r,config:e}),t)}},11:function(t,e,r){t.exports=r(14).Promise},14:function(t,e,lt){(function(at,ct){var ft;t.exports=function(){"use strict";function r(t){return typeof t==="function"||typeof t==="object"&&t!==null}function c(t){return typeof t==="function"}var t=undefined;if(!Array.isArray){t=function(t){return Object.prototype.toString.call(t)==="[object Array]"}}else{t=Array.isArray}var n=t,o=0,i=undefined,s=undefined,u=function t(e,r){w[o]=e;w[o+1]=r;o+=2;if(o===2){if(s){s(_)}else{T()}}};function e(t){s=t}function a(t){u=t}var f=typeof window!=="undefined"?window:undefined,l=f||{},h=l.MutationObserver||l.WebKitMutationObserver,d=typeof self==="undefined"&&typeof at!=="undefined"&&{}.toString.call(at)==="[object process]",p=typeof Uint8ClampedArray!=="undefined"&&typeof importScripts!=="undefined"&&typeof MessageChannel!=="undefined";function y(){return function(){return at.nextTick(_)}}function b(){return function(){i(_)}}function m(){var t=0;var e=new h(_);var r=document.createTextNode("");e.observe(r,{characterData:true});return function(){r.data=t=++t%2}}function v(){var t=new MessageChannel;t.port1.onmessage=_;return function(){return t.port2.postMessage(0)}}function g(){var t=setTimeout;return function(){return t(_,1)}}var w=new Array(1e3);function _(){for(var t=0;t<o;t+=2){var e=w[t];var r=w[t+1];e(r);w[t]=undefined;w[t+1]=undefined}o=0}function E(){try{var t=ft;var e=lt(16);i=e.runOnLoop||e.runOnContext;return b()}catch(t){return g()}}var T=undefined;if(d){T=y()}else if(h){T=m()}else if(p){T=v()}else if(f===undefined&&"function"==="function"){T=E()}else{T=g()}function A(t,e){var r=arguments;var n=this;var o=new this.constructor(j);if(o[x]===undefined){Q(o)}var i=n._state;if(i){(function(){var t=r[i-1];u(function(){return V(i,o,t,n._result)})})()}else{G(n,o,t,e)}return o}function O(t){var e=this;if(t&&typeof t==="object"&&t.constructor===e){return t}var r=new e(j);F(r,t);return r}var x=Math.random().toString(36).substring(16);function j(){}var S=void 0,I=1,P=2,B=new z;function R(){return new TypeError("You cannot resolve a promise with itself")}function k(){return new TypeError("A promises callback cannot return that same promise.")}function D(t){try{return t.then}catch(t){B.error=t;return B}}function U(t,e,r,n){try{t.call(e,r,n)}catch(t){return t}}function C(t,n,o){u(function(e){var r=false;var t=U(o,n,function(t){if(r){return}r=true;if(n!==t){F(e,t)}else{q(e,t)}},function(t){if(r){return}r=true;H(e,t)},"Settle: "+(e._label||" unknown promise"));if(!r&&t){r=true;H(e,t)}},t)}function L(e,t){if(t._state===I){q(e,t._result)}else if(t._state===P){H(e,t._result)}else{G(t,undefined,function(t){return F(e,t)},function(t){return H(e,t)})}}function M(t,e,r){if(e.constructor===t.constructor&&r===A&&e.constructor.resolve===O){L(t,e)}else{if(r===B){H(t,B.error)}else if(r===undefined){q(t,e)}else if(c(r)){C(t,e,r)}else{q(t,e)}}}function F(t,e){if(t===e){H(t,R())}else if(r(e)){M(t,e,D(e))}else{q(t,e)}}function N(t){if(t._onerror){t._onerror(t._result)}Y(t)}function q(t,e){if(t._state!==S){return}t._result=e;t._state=I;if(t._subscribers.length!==0){u(Y,t)}}function H(t,e){if(t._state!==S){return}t._state=P;t._result=e;u(N,t)}function G(t,e,r,n){var o=t._subscribers;var i=o.length;t._onerror=null;o[i]=e;o[i+I]=r;o[i+P]=n;if(i===0&&t._state){u(Y,t)}}function Y(t){var e=t._subscribers;var r=t._state;if(e.length===0){return}var n=undefined,o=undefined,i=t._result;for(var s=0;s<e.length;s+=3){n=e[s];o=e[s+r];if(n){V(r,n,o,i)}else{o(i)}}t._subscribers.length=0}function z(){this.error=null}var J=new z;function K(t,e){try{return t(e)}catch(t){J.error=t;return J}}function V(t,e,r,n){var o=c(r),i=undefined,s=undefined,u=undefined,a=undefined;if(o){i=K(r,n);if(i===J){a=true;s=i.error;i=null}else{u=true}if(e===i){H(e,k());return}}else{i=n;u=true}if(e._state!==S){}else if(o&&u){F(e,i)}else if(a){H(e,s)}else if(t===I){q(e,i)}else if(t===P){H(e,i)}}function W(r,t){try{t(function t(e){F(r,e)},function t(e){H(r,e)})}catch(t){H(r,t)}}var X=0;function $(){return X++}function Q(t){t[x]=X++;t._state=undefined;t._result=undefined;t._subscribers=[]}function Z(t,e){this._instanceConstructor=t;this.promise=new t(j);if(!this.promise[x]){Q(this.promise)}if(n(e)){this._input=e;this.length=e.length;this._remaining=e.length;this._result=new Array(this.length);if(this.length===0){q(this.promise,this._result)}else{this.length=this.length||0;this._enumerate();if(this._remaining===0){q(this.promise,this._result)}}}else{H(this.promise,tt())}}function tt(){return new Error("Array Methods must be provided an Array")}function et(t){return new Z(this,t).promise}function rt(o){var i=this;if(n(o))return new i(function(t,e){for(var r=o.length,n=0;n<r;n++)i.resolve(o[n]).then(t,e)});else return new i(function(t,e){return e(new TypeError("You must pass an array to race."))})}function nt(t){var e=new this(j);return H(e,t),e}function ot(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function it(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function st(t){this[x]=$();this._result=this._state=undefined;this._subscribers=[];if(j!==t){typeof t!=="function"&&ot();this instanceof st?W(this,t):it()}}function ut(){var t=undefined;if(typeof ct!=="undefined"){t=ct}else if(typeof self!=="undefined"){t=self}else{try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}}var e=t.Promise;if(e){var r=null;try{r=Object.prototype.toString.call(e.resolve())}catch(t){}if(r==="[object Promise]"&&!e.cast){return}}t.Promise=st}return Z.prototype._enumerate=function(){for(var t=this.length,e=this._input,r=0;this._state===S&&r<t;r++)this._eachEntry(e[r],r)},Z.prototype._eachEntry=function(e,t){var r,n,o=this._instanceConstructor,i=o.resolve;i===O?(r=D(e))===A&&e._state!==S?this._settledAt(e._state,t,e._result):"function"!=typeof r?(this._remaining--,this._result[t]=e):o===st?(M(n=new o(j),e,r),this._willSettleAt(n,t)):this._willSettleAt(new o(function(t){return t(e)}),t):this._willSettleAt(i(e),t)},Z.prototype._settledAt=function(t,e,r){var n=this.promise;n._state===S&&(this._remaining--,t===P?H(n,r):this._result[e]=r),0===this._remaining&&q(n,this._result)},Z.prototype._willSettleAt=function(t,e){var r=this;G(t,void 0,function(t){return r._settledAt(I,e,t)},function(t){return r._settledAt(P,e,t)})},st.all=function(t){return new Z(this,t).promise},st.race=function(o){var i=this;return n(o)?new i(function(t,e){for(var r=o.length,n=0;n<r;n++)i.resolve(o[n]).then(t,e)}):new i(function(t,e){return e(new TypeError("You must pass an array to race."))})},st.resolve=O,st.reject=function(t){var e=new this(j);return H(e,t),e},st._setScheduler=function(t){s=t},st._setAsap=function(t){u=t},st._asap=u,st.prototype={constructor:st,then:A,catch:function(t){return this.then(null,t)}},ut(),st.polyfill=ut,st.Promise=st}()}).call(this,lt(15),lt(9))},15:function(t,e){var r,n,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function u(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(t){r=i}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(t){n=s}}();var a,c=[],f=!1,l=-1;function h(){f&&a&&(f=!1,a.length?c=a.concat(c):l=-1,c.length&&d())}function d(){if(!f){var t=u(h);f=!0;for(var e=c.length;e;){for(a=c,c=[];++l<e;)a&&a[l].run();l=-1,e=c.length}a=null,f=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function y(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(1<arguments.length)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];c.push(new p(t,e)),1!==c.length||f||u(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},16:function(t,e){},17:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},3:function(t,e){t.exports=window.ReactDOM},4:function(t,e,r){"use strict";r.d(e,"a",function(){return i});var n=r(1),s=r.n(n),o=r(0),u=r.n(o);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(i){var s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e,r,n,o=d(i);return e=s?(t=d(this).constructor,Reflect.construct(o,arguments,t)):o.apply(this,arguments),r=this,!(n=e)||"object"!==a(n)&&"function"!=typeof n?h(r):n}}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var i=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(i,u.a.Component);var t,e,r,o=l(i);function i(r){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i);var n=h(t=o.call(this,r));if(r.attributes&&Object.keys(r.attributes).forEach(function(t){var e=r.attributes[t];n[e.name]=e.value}),n.config=n.config||r.config,"string"==typeof n.config)try{n.config=JSON.parse(n.config)}catch(t){}return n.config=s.a.recursive({siteId:null,api:{url:null,headers:null,isUserLoggedIn:!1},user:{}},n.config,n.props.config||{}),n.divId=n.divId||n.config&&n.config.divId||r.id||"openstad-component-".concat(parseInt(1e8*Math.random())),window[n.divId]=n,t}return t=i,(e=[{key:"componentDidMount",value:function(){}}])&&c(t.prototype,e),r&&c(t,r),i}()},6:function(t,e,r){"use strict";(function(i){var e,r,n="URLSearchParams"in self,o="Symbol"in self&&"iterator"in Symbol,u="FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),s="FormData"in self,a="ArrayBuffer"in self;function c(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function f(t){return"string"!=typeof t&&(t=String(t)),t}function t(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return o&&(t[Symbol.iterator]=function(){return t}),t}function l(e){this.map={},e instanceof l?e.forEach(function(t,e){this.append(e,t)},this):Array.isArray(e)?e.forEach(function(t){this.append(t[0],t[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function h(t){if(t.bodyUsed)return i.reject(new TypeError("Already read"));t.bodyUsed=!0}function d(r){return new i(function(t,e){r.onload=function(){t(r.result)},r.onerror=function(){e(r.error)}})}function p(t){var e=new FileReader,r=d(e);return e.readAsArrayBuffer(t),r}function y(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function b(){return this.bodyUsed=!1,this._initBody=function(t){var e;(this._bodyInit=t)?"string"==typeof t?this._bodyText=t:u&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:s&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:n&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():a&&u&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=y(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):a&&(ArrayBuffer.prototype.isPrototypeOf(t)||r(t))?this._bodyArrayBuffer=y(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},u&&(this.blob=function(){var t=h(this);if(t)return t;if(this._bodyBlob)return i.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return i.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return i.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?h(this)||i.resolve(this._bodyArrayBuffer):this.blob().then(p)}),this.text=function(){var t,e,r,n=h(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=d(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return i.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return i.resolve(this._bodyText)},s&&(this.formData=function(){return this.text().then(g)}),this.json=function(){return this.text().then(JSON.parse)},this}a&&(e=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],r=ArrayBuffer.isView||function(t){return t&&-1<e.indexOf(Object.prototype.toString.call(t))}),l.prototype.append=function(t,e){t=c(t),e=f(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},l.prototype.delete=function(t){delete this.map[c(t)]},l.prototype.get=function(t){return t=c(t),this.has(t)?this.map[t]:null},l.prototype.has=function(t){return this.map.hasOwnProperty(c(t))},l.prototype.set=function(t,e){this.map[c(t)]=f(e)},l.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},l.prototype.keys=function(){var r=[];return this.forEach(function(t,e){r.push(e)}),t(r)},l.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),t(e)},l.prototype.entries=function(){var r=[];return this.forEach(function(t,e){r.push([e,t])}),t(r)},o&&(l.prototype[Symbol.iterator]=l.prototype.entries);var m=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function v(t,e){var r,n,o=(e=e||{}).body;if(t instanceof v){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new l(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new l(e.headers)),this.method=(r=e.method||this.method||"GET",n=r.toUpperCase(),-1<m.indexOf(n)?n:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function g(t){var o=new FormData;return t.trim().split("&").forEach(function(t){var e,r,n;t&&(r=(e=t.split("=")).shift().replace(/\+/g," "),n=e.join("=").replace(/\+/g," "),o.append(decodeURIComponent(r),decodeURIComponent(n)))}),o}function w(t,e){e=e||{},this.type="default",this.status=void 0===e.status?200:e.status,this.ok=200<=this.status&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new l(e.headers),this.url=e.url||"",this._initBody(t)}v.prototype.clone=function(){return new v(this,{body:this._bodyInit})},b.call(v.prototype),b.call(w.prototype),w.prototype.clone=function(){return new w(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new l(this.headers),url:this.url})},w.error=function(){var t=new w(null,{status:0,statusText:""});return t.type="error",t};var _=[301,302,303,307,308];w.redirect=function(t,e){if(-1===_.indexOf(e))throw new RangeError("Invalid status code");return new w(null,{status:e,headers:{location:t}})};var E=self.DOMException;try{new E}catch(t){(E=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),E.prototype.constructor=E}function T(o,s){return new i(function(n,t){var e=new v(o,s);if(e.signal&&e.signal.aborted)return t(new E("Aborted","AbortError"));var i=new XMLHttpRequest;function r(){i.abort()}i.onload=function(){var t,o,e={status:i.status,statusText:i.statusText,headers:(t=i.getAllResponseHeaders()||"",o=new l,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var e,r=t.split(":"),n=r.shift().trim();n&&(e=r.join(":").trim(),o.append(n,e))}),o)};e.url="responseURL"in i?i.responseURL:e.headers.get("X-Request-URL");var r="response"in i?i.response:i.responseText;n(new w(r,e))},i.onerror=function(){t(new TypeError("Network request failed"))},i.ontimeout=function(){t(new TypeError("Network request failed"))},i.onabort=function(){t(new E("Aborted","AbortError"))},i.open(e.method,e.url,!0),"include"===e.credentials?i.withCredentials=!0:"omit"===e.credentials&&(i.withCredentials=!1),"responseType"in i&&u&&(i.responseType="blob"),e.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),e.signal&&(e.signal.addEventListener("abort",r),i.onreadystatechange=function(){4===i.readyState&&e.signal.removeEventListener("abort",r)}),i.send(void 0===e._bodyInit?null:e._bodyInit)})}T.polyfill=!0,self.fetch||(self.fetch=T,self.Headers=l,self.Request=v,self.Response=w)}).call(this,r(11))},67:function(t,e,r){},9:function(t,e){var r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r}});
>>>>>>> Refactor ideas-on-map
=======
window["OpenStadComponents"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/idea-image/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/es6-promise-promise/index.js":
/*!***************************************************!*\
  !*** ./node_modules/es6-promise-promise/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! es6-promise */ "./node_modules/es6-promise/dist/es6-promise.js").Promise;


/***/ }),

/***/ "./node_modules/es6-promise/dist/es6-promise.js":
/*!******************************************************!*\
  !*** ./node_modules/es6-promise/dist/es6-promise.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {var require;/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   3.3.1
 */

(function (global, factory) {
     true ? module.exports = factory() :
    undefined;
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  return typeof x === 'function' || typeof x === 'object' && x !== null;
}

function isFunction(x) {
  return typeof x === 'function';
}

var _isArray = undefined;
if (!Array.isArray) {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
} else {
  _isArray = Array.isArray;
}

var isArray = _isArray;

var len = 0;
var vertxNext = undefined;
var customSchedulerFn = undefined;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  return function () {
    vertxNext(flush);
  };
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var r = require;
    var vertx = __webpack_require__(/*! vertx */ 0);
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = undefined;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var _arguments = arguments;

  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;

  if (_state) {
    (function () {
      var callback = _arguments[_state - 1];
      asap(function () {
        return invokeCallback(_state, child, callback, parent._result);
      });
    })();
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  _resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(16);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

var GET_THEN_ERROR = new ErrorObject();

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function getThen(promise) {
  try {
    return promise.then;
  } catch (error) {
    GET_THEN_ERROR.error = error;
    return GET_THEN_ERROR;
  }
}

function tryThen(then, value, fulfillmentHandler, rejectionHandler) {
  try {
    then.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        _resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      _reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      _reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    _reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return _resolve(promise, value);
    }, function (reason) {
      return _reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$) {
  if (maybeThenable.constructor === promise.constructor && then$$ === then && maybeThenable.constructor.resolve === resolve) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$ === GET_THEN_ERROR) {
      _reject(promise, GET_THEN_ERROR.error);
    } else if (then$$ === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$)) {
      handleForeignThenable(promise, maybeThenable, then$$);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function _resolve(promise, value) {
  if (promise === value) {
    _reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    handleMaybeThenable(promise, value, getThen(value));
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function _reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;

  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = undefined,
      callback = undefined,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function ErrorObject() {
  this.error = null;
}

var TRY_CATCH_ERROR = new ErrorObject();

function tryCatch(callback, detail) {
  try {
    return callback(detail);
  } catch (e) {
    TRY_CATCH_ERROR.error = e;
    return TRY_CATCH_ERROR;
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = undefined,
      error = undefined,
      succeeded = undefined,
      failed = undefined;

  if (hasCallback) {
    value = tryCatch(callback, detail);

    if (value === TRY_CATCH_ERROR) {
      failed = true;
      error = value.error;
      value = null;
    } else {
      succeeded = true;
    }

    if (promise === value) {
      _reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
      _resolve(promise, value);
    } else if (failed) {
      _reject(promise, error);
    } else if (settled === FULFILLED) {
      fulfill(promise, value);
    } else if (settled === REJECTED) {
      _reject(promise, value);
    }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      _resolve(promise, value);
    }, function rejectPromise(reason) {
      _reject(promise, reason);
    });
  } catch (e) {
    _reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function Enumerator(Constructor, input) {
  this._instanceConstructor = Constructor;
  this.promise = new Constructor(noop);

  if (!this.promise[PROMISE_ID]) {
    makePromise(this.promise);
  }

  if (isArray(input)) {
    this._input = input;
    this.length = input.length;
    this._remaining = input.length;

    this._result = new Array(this.length);

    if (this.length === 0) {
      fulfill(this.promise, this._result);
    } else {
      this.length = this.length || 0;
      this._enumerate();
      if (this._remaining === 0) {
        fulfill(this.promise, this._result);
      }
    }
  } else {
    _reject(this.promise, validationError());
  }
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
};

Enumerator.prototype._enumerate = function () {
  var length = this.length;
  var _input = this._input;

  for (var i = 0; this._state === PENDING && i < length; i++) {
    this._eachEntry(_input[i], i);
  }
};

Enumerator.prototype._eachEntry = function (entry, i) {
  var c = this._instanceConstructor;
  var resolve$$ = c.resolve;

  if (resolve$$ === resolve) {
    var _then = getThen(entry);

    if (_then === then && entry._state !== PENDING) {
      this._settledAt(entry._state, i, entry._result);
    } else if (typeof _then !== 'function') {
      this._remaining--;
      this._result[i] = entry;
    } else if (c === Promise) {
      var promise = new c(noop);
      handleMaybeThenable(promise, entry, _then);
      this._willSettleAt(promise, i);
    } else {
      this._willSettleAt(new c(function (resolve$$) {
        return resolve$$(entry);
      }), i);
    }
  } else {
    this._willSettleAt(resolve$$(entry), i);
  }
};

Enumerator.prototype._settledAt = function (state, i, value) {
  var promise = this.promise;

  if (promise._state === PENDING) {
    this._remaining--;

    if (state === REJECTED) {
      _reject(promise, value);
    } else {
      this._result[i] = value;
    }
  }

  if (this._remaining === 0) {
    fulfill(promise, this._result);
  }
};

Enumerator.prototype._willSettleAt = function (promise, i) {
  var enumerator = this;

  subscribe(promise, undefined, function (value) {
    return enumerator._settledAt(FULFILLED, i, value);
  }, function (reason) {
    return enumerator._settledAt(REJECTED, i, reason);
  });
};

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  _reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {function} resolver
  Useful for tooling.
  @constructor
*/
function Promise(resolver) {
  this[PROMISE_ID] = nextId();
  this._result = this._state = undefined;
  this._subscribers = [];

  if (noop !== resolver) {
    typeof resolver !== 'function' && needsResolver();
    this instanceof Promise ? initializePromise(this, resolver) : needsNew();
  }
}

Promise.all = all;
Promise.race = race;
Promise.resolve = resolve;
Promise.reject = reject;
Promise._setScheduler = setScheduler;
Promise._setAsap = setAsap;
Promise._asap = asap;

Promise.prototype = {
  constructor: Promise,

  /**
    The primary way of interacting with a promise is through its `then` method,
    which registers callbacks to receive either a promise's eventual value or the
    reason why the promise cannot be fulfilled.
  
    ```js
    findUser().then(function(user){
      // user is available
    }, function(reason){
      // user is unavailable, and you are given the reason why
    });
    ```
  
    Chaining
    --------
  
    The return value of `then` is itself a promise.  This second, 'downstream'
    promise is resolved with the return value of the first promise's fulfillment
    or rejection handler, or rejected if the handler throws an exception.
  
    ```js
    findUser().then(function (user) {
      return user.name;
    }, function (reason) {
      return 'default name';
    }).then(function (userName) {
      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
      // will be `'default name'`
    });
  
    findUser().then(function (user) {
      throw new Error('Found user, but still unhappy');
    }, function (reason) {
      throw new Error('`findUser` rejected and we're unhappy');
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
    });
    ```
    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
  
    ```js
    findUser().then(function (user) {
      throw new PedagogicalException('Upstream error');
    }).then(function (value) {
      // never reached
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // The `PedgagocialException` is propagated all the way down to here
    });
    ```
  
    Assimilation
    ------------
  
    Sometimes the value you want to propagate to a downstream promise can only be
    retrieved asynchronously. This can be achieved by returning a promise in the
    fulfillment or rejection handler. The downstream promise will then be pending
    until the returned promise is settled. This is called *assimilation*.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // The user's comments are now available
    });
    ```
  
    If the assimliated promise rejects, then the downstream promise will also reject.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // If `findCommentsByAuthor` fulfills, we'll have the value here
    }, function (reason) {
      // If `findCommentsByAuthor` rejects, we'll have the reason here
    });
    ```
  
    Simple Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let result;
  
    try {
      result = findResult();
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
    findResult(function(result, err){
      if (err) {
        // failure
      } else {
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findResult().then(function(result){
      // success
    }, function(reason){
      // failure
    });
    ```
  
    Advanced Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let author, books;
  
    try {
      author = findAuthor();
      books  = findBooksByAuthor(author);
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
  
    function foundBooks(books) {
  
    }
  
    function failure(reason) {
  
    }
  
    findAuthor(function(author, err){
      if (err) {
        failure(err);
        // failure
      } else {
        try {
          findBoooksByAuthor(author, function(books, err) {
            if (err) {
              failure(err);
            } else {
              try {
                foundBooks(books);
              } catch(reason) {
                failure(reason);
              }
            }
          });
        } catch(error) {
          failure(err);
        }
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findAuthor().
      then(findBooksByAuthor).
      then(function(books){
        // found books
    }).catch(function(reason){
      // something went wrong
    });
    ```
  
    @method then
    @param {Function} onFulfilled
    @param {Function} onRejected
    Useful for tooling.
    @return {Promise}
  */
  then: then,

  /**
    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
    as the catch block of a try/catch statement.
  
    ```js
    function findAuthor(){
      throw new Error('couldn't find that author');
    }
  
    // synchronous
    try {
      findAuthor();
    } catch(reason) {
      // something went wrong
    }
  
    // async with promises
    findAuthor().catch(function(reason){
      // something went wrong
    });
    ```
  
    @method catch
    @param {Function} onRejection
    Useful for tooling.
    @return {Promise}
  */
  'catch': function _catch(onRejection) {
    return this.then(null, onRejection);
  }
};

function polyfill() {
    var local = undefined;

    if (typeof global !== 'undefined') {
        local = global;
    } else if (typeof self !== 'undefined') {
        local = self;
    } else {
        try {
            local = Function('return this')();
        } catch (e) {
            throw new Error('polyfill failed because global object is unavailable in this environment');
        }
    }

    var P = local.Promise;

    if (P) {
        var promiseToString = null;
        try {
            promiseToString = Object.prototype.toString.call(P.resolve());
        } catch (e) {
            // silently ignored
        }

        if (promiseToString === '[object Promise]' && !P.cast) {
            return;
        }
    }

    local.Promise = Promise;
}

polyfill();
// Strange compat..
Promise.polyfill = polyfill;
Promise.Promise = Promise;

return Promise;

})));
//# sourceMappingURL=es6-promise.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/merge/merge.js":
/*!*************************************!*\
  !*** ./node_modules/merge/merge.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/*!
 * @name JavaScript/NodeJS Merge v1.2.1
 * @author yeikos
 * @repository https://github.com/yeikos/js.merge

 * Copyright 2014 yeikos - MIT license
 * https://raw.github.com/yeikos/js.merge/master/LICENSE
 */

;(function(isNode) {

	/**
	 * Merge one or more objects 
	 * @param bool? clone
	 * @param mixed,... arguments
	 * @return object
	 */

	var Public = function(clone) {

		return merge(clone === true, false, arguments);

	}, publicName = 'merge';

	/**
	 * Merge two or more objects recursively 
	 * @param bool? clone
	 * @param mixed,... arguments
	 * @return object
	 */

	Public.recursive = function(clone) {

		return merge(clone === true, true, arguments);

	};

	/**
	 * Clone the input removing any reference
	 * @param mixed input
	 * @return mixed
	 */

	Public.clone = function(input) {

		var output = input,
			type = typeOf(input),
			index, size;

		if (type === 'array') {

			output = [];
			size = input.length;

			for (index=0;index<size;++index)

				output[index] = Public.clone(input[index]);

		} else if (type === 'object') {

			output = {};

			for (index in input)

				output[index] = Public.clone(input[index]);

		}

		return output;

	};

	/**
	 * Merge two objects recursively
	 * @param mixed input
	 * @param mixed extend
	 * @return mixed
	 */

	function merge_recursive(base, extend) {

		if (typeOf(base) !== 'object')

			return extend;

		for (var key in extend) {

			if (typeOf(base[key]) === 'object' && typeOf(extend[key]) === 'object') {

				base[key] = merge_recursive(base[key], extend[key]);

			} else {

				base[key] = extend[key];

			}

		}

		return base;

	}

	/**
	 * Merge two or more objects
	 * @param bool clone
	 * @param bool recursive
	 * @param array argv
	 * @return object
	 */

	function merge(clone, recursive, argv) {

		var result = argv[0],
			size = argv.length;

		if (clone || typeOf(result) !== 'object')

			result = {};

		for (var index=0;index<size;++index) {

			var item = argv[index],

				type = typeOf(item);

			if (type !== 'object') continue;

			for (var key in item) {

				if (key === '__proto__') continue;

				var sitem = clone ? Public.clone(item[key]) : item[key];

				if (recursive) {

					result[key] = merge_recursive(result[key], sitem);

				} else {

					result[key] = sitem;

				}

			}

		}

		return result;

	}

	/**
	 * Get type of variable
	 * @param mixed input
	 * @return string
	 *
	 * @see http://jsperf.com/typeofvar
	 */

	function typeOf(input) {

		return ({}).toString.call(input).slice(8, -1).toLowerCase();

	}

	if (isNode) {

		module.exports = Public;

	} else {

		window[publicName] = Public;

	}

})( true && module && typeof module.exports === 'object' && module.exports);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/whatwg-fetch/fetch.js":
/*!********************************************!*\
  !*** ./node_modules/whatwg-fetch/fetch.js ***!
  \********************************************/
/*! exports provided: Headers, Request, Response, DOMException, fetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Promise) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMException", function() { return DOMException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
var support = {
  searchParams: 'URLSearchParams' in self,
  iterable: 'Symbol' in self && 'iterator' in Symbol,
  blob:
    'FileReader' in self &&
    'Blob' in self &&
    (function() {
      try {
        new Blob()
        return true
      } catch (e) {
        return false
      }
    })(),
  formData: 'FormData' in self,
  arrayBuffer: 'ArrayBuffer' in self
}

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj)
}

if (support.arrayBuffer) {
  var viewClasses = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]'
  ]

  var isArrayBufferView =
    ArrayBuffer.isView ||
    function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name)
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
    throw new TypeError('Invalid character in header field name')
  }
  return name.toLowerCase()
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value)
  }
  return value
}

// Build a destructive iterator for the value list
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift()
      return {done: value === undefined, value: value}
    }
  }

  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator
    }
  }

  return iterator
}

function Headers(headers) {
  this.map = {}

  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value)
    }, this)
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      this.append(header[0], header[1])
    }, this)
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name])
    }, this)
  }
}

Headers.prototype.append = function(name, value) {
  name = normalizeName(name)
  value = normalizeValue(value)
  var oldValue = this.map[name]
  this.map[name] = oldValue ? oldValue + ', ' + value : value
}

Headers.prototype['delete'] = function(name) {
  delete this.map[normalizeName(name)]
}

Headers.prototype.get = function(name) {
  name = normalizeName(name)
  return this.has(name) ? this.map[name] : null
}

Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name))
}

Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value)
}

Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this)
    }
  }
}

Headers.prototype.keys = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push(name)
  })
  return iteratorFor(items)
}

Headers.prototype.values = function() {
  var items = []
  this.forEach(function(value) {
    items.push(value)
  })
  return iteratorFor(items)
}

Headers.prototype.entries = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push([name, value])
  })
  return iteratorFor(items)
}

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'))
  }
  body.bodyUsed = true
}

function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result)
    }
    reader.onerror = function() {
      reject(reader.error)
    }
  })
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsArrayBuffer(blob)
  return promise
}

function readBlobAsText(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsText(blob)
  return promise
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf)
  var chars = new Array(view.length)

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i])
  }
  return chars.join('')
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0)
  } else {
    var view = new Uint8Array(buf.byteLength)
    view.set(new Uint8Array(buf))
    return view.buffer
  }
}

function Body() {
  this.bodyUsed = false

  this._initBody = function(body) {
    this._bodyInit = body
    if (!body) {
      this._bodyText = ''
    } else if (typeof body === 'string') {
      this._bodyText = body
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString()
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer)
      // IE 10-11 can't handle a DataView body.
      this._bodyInit = new Blob([this._bodyArrayBuffer])
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body)
    } else {
      this._bodyText = body = Object.prototype.toString.call(body)
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8')
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type)
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
      }
    }
  }

  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob')
      } else {
        return Promise.resolve(new Blob([this._bodyText]))
      }
    }

    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
      } else {
        return this.blob().then(readBlobAsArrayBuffer)
      }
    }
  }

  this.text = function() {
    var rejected = consumed(this)
    if (rejected) {
      return rejected
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob)
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text')
    } else {
      return Promise.resolve(this._bodyText)
    }
  }

  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode)
    }
  }

  this.json = function() {
    return this.text().then(JSON.parse)
  }

  return this
}

// HTTP methods whose capitalization should be normalized
var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

function normalizeMethod(method) {
  var upcased = method.toUpperCase()
  return methods.indexOf(upcased) > -1 ? upcased : method
}

function Request(input, options) {
  options = options || {}
  var body = options.body

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read')
    }
    this.url = input.url
    this.credentials = input.credentials
    if (!options.headers) {
      this.headers = new Headers(input.headers)
    }
    this.method = input.method
    this.mode = input.mode
    this.signal = input.signal
    if (!body && input._bodyInit != null) {
      body = input._bodyInit
      input.bodyUsed = true
    }
  } else {
    this.url = String(input)
  }

  this.credentials = options.credentials || this.credentials || 'same-origin'
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers)
  }
  this.method = normalizeMethod(options.method || this.method || 'GET')
  this.mode = options.mode || this.mode || null
  this.signal = options.signal || this.signal
  this.referrer = null

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests')
  }
  this._initBody(body)
}

Request.prototype.clone = function() {
  return new Request(this, {body: this._bodyInit})
}

function decode(body) {
  var form = new FormData()
  body
    .trim()
    .split('&')
    .forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
  return form
}

function parseHeaders(rawHeaders) {
  var headers = new Headers()
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
  preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
    var parts = line.split(':')
    var key = parts.shift().trim()
    if (key) {
      var value = parts.join(':').trim()
      headers.append(key, value)
    }
  })
  return headers
}

Body.call(Request.prototype)

function Response(bodyInit, options) {
  if (!options) {
    options = {}
  }

  this.type = 'default'
  this.status = options.status === undefined ? 200 : options.status
  this.ok = this.status >= 200 && this.status < 300
  this.statusText = 'statusText' in options ? options.statusText : 'OK'
  this.headers = new Headers(options.headers)
  this.url = options.url || ''
  this._initBody(bodyInit)
}

Body.call(Response.prototype)

Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  })
}

Response.error = function() {
  var response = new Response(null, {status: 0, statusText: ''})
  response.type = 'error'
  return response
}

var redirectStatuses = [301, 302, 303, 307, 308]

Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code')
  }

  return new Response(null, {status: status, headers: {location: url}})
}

var DOMException = self.DOMException
try {
  new DOMException()
} catch (err) {
  DOMException = function(message, name) {
    this.message = message
    this.name = name
    var error = Error(message)
    this.stack = error.stack
  }
  DOMException.prototype = Object.create(Error.prototype)
  DOMException.prototype.constructor = DOMException
}

function fetch(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request(input, init)

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'))
    }

    var xhr = new XMLHttpRequest()

    function abortXhr() {
      xhr.abort()
    }

    xhr.onload = function() {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
      var body = 'response' in xhr ? xhr.response : xhr.responseText
      resolve(new Response(body, options))
    }

    xhr.onerror = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.ontimeout = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.onabort = function() {
      reject(new DOMException('Aborted', 'AbortError'))
    }

    xhr.open(request.method, request.url, true)

    if (request.credentials === 'include') {
      xhr.withCredentials = true
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false
    }

    if ('responseType' in xhr && support.blob) {
      xhr.responseType = 'blob'
    }

    request.headers.forEach(function(value, name) {
      xhr.setRequestHeader(name, value)
    })

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr)

      xhr.onreadystatechange = function() {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr)
        }
      }
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
  })
}

fetch.polyfill = true

if (!self.fetch) {
  self.fetch = fetch
  self.Headers = Headers
  self.Request = Request
  self.Response = Response
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! es6-promise-promise */ "./node_modules/es6-promise-promise/index.js")))

/***/ }),

/***/ "./src/component/index.jsx":
/*!*********************************!*\
  !*** ./src/component/index.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponent; });
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



'use strict';

var OpenStadComponent = /*#__PURE__*/function (_React$Component) {
  _inherits(OpenStadComponent, _React$Component);

  var _super = _createSuper(OpenStadComponent);

  function OpenStadComponent(props) {
    var _this;

    _classCallCheck(this, OpenStadComponent);

    _this = _super.call(this, props);

    var self = _assertThisInitialized(_this);

    if (props.attributes) {
      Object.keys(props.attributes).forEach(function (key) {
        var attribute = props.attributes[key];
        self[attribute.name] = attribute.value;
      });
    } // config


    self.config = self.config || props.config;

    if (typeof self.config == 'string') {
      try {
        self.config = JSON.parse(self.config);
      } catch (err) {}
    }

    var defaultConfig = {
      siteId: null,
      api: {
        url: null,
        headers: null,
        isUserLoggedIn: false
      },
      user: {}
    };
    self.config = merge__WEBPACK_IMPORTED_MODULE_0___default.a.recursive(defaultConfig, self.config, self.props.config || {});
    self.divId = self.divId || self.config && self.config.divId || props.id || "openstad-component-".concat(parseInt(100000000 * Math.random()));
    window[self.divId] = self;
    return _this;
  }

  _createClass(OpenStadComponent, [{
    key: "componentDidMount",
    value: function componentDidMount(prevProps, prevState) {// let event = new Event('isReady');
      // self.isReady = true;
      // self.instance.dispatchEvent(event);
    }
  }]);

  return OpenStadComponent;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ }),

/***/ "./src/idea-image/component/idea-image.jsx":
/*!*************************************************!*\
  !*** ./src/idea-image/component/idea-image.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentIdeaImage; });
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




'use strict';

var OpenStadComponentIdeaImage = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentIdeaImage, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentIdeaImage);

  function OpenStadComponentIdeaImage(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentIdeaImage);

    _this = _super.call(this, props); // config

    var defaultConfig = {
      allowMultipleImages: false
    };
    _this.config = merge__WEBPACK_IMPORTED_MODULE_0___default.a.recursive(defaultConfig, _this.config, _this.props.config || {});
    _this.state = {
      currentImageIndex: 0,
      width: 0
    };
    return _this;
  }

  _createClass(OpenStadComponentIdeaImage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var elem = document.querySelector("#".concat(this.divId));
      this.setState({
        width: elem.offsetWidth
      });
    }
  }, {
    key: "setCurrentImageIndex",
    value: function setCurrentImageIndex(which) {
      this.setState({
        currentImageIndex: which
      });
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      var idea = self.props.idea;
      if (!idea) return null;
      var images = idea.extraData && idea.extraData.images || [];
      var image = idea.posterImage && idea.posterImage.key || idea.extraData && idea.extraData.images && idea.extraData.images[self.state.currentImageIndex];

      if (self.config.allowMultipleImages && images.length > 1) {
        // multiple
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          id: self.divId,
          className: "osc-idea-multiple-images"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-idea-image-spacer"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-idea-image",
          style: image ? {
            backgroundImage: "url(".concat(image, ")")
          } : {},
          key: 'image-' + idea.id
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-idea-multiple-images-thumbs"
        }, images.map(function (thumb, i) {
          var height = 0.1 * self.state.width;
          var width = height * 16 / 9; // let left = ( width *  1.07) * i + ( self.state.width - width *  1.07* images.length ) / 2;

          var left = width * 1.05 * i;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "osc-idea-image-thumb-spacer",
            key: "osc-idea-image-thumb-".concat(i),
            style: {
              left: left,
              width: width,
              height: height
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "osc-idea-image-thumb",
            style: thumb ? {
              backgroundImage: "url(".concat(thumb, ")"),
              zIndex: 10 - i
            } : {},
            onClick: function onClick(e) {
              return self.setCurrentImageIndex(i);
            }
          }));
        })));
      } else {
        // singular
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          id: self.divId,
          className: "osc-idea-image-spacer"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-idea-image",
          style: image ? {
            backgroundImage: "url(".concat(image, ")")
          } : {},
          key: 'image-' + idea.id
        }));
      }
    }
  }]);

  return OpenStadComponentIdeaImage;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),

/***/ "./src/idea-image/css/default.less":
/*!*****************************************!*\
  !*** ./src/idea-image/css/default.less ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/idea-image/index.jsx":
/*!**********************************!*\
  !*** ./src/idea-image/index.jsx ***!
  \**********************************/
/*! exports provided: default, IdeaImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_default_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/default.less */ "./src/idea-image/css/default.less");
/* harmony import */ var _css_default_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_default_less__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_idea_image_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/idea-image.jsx */ "./src/idea-image/component/idea-image.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _component_idea_image_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdeaImage", function() { return _component_idea_image_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]; });

// polyfills
 // react


 // import css to make sure it is generated in the result

 // the module

 // render elements

_component_idea_image_jsx__WEBPACK_IMPORTED_MODULE_4__["default"].renderElement = function renderElement(elem, config) {
  var attributes = elem.attributes;
  react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_component_idea_image_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    attributes: attributes,
    config: config
  }), elem);
};



/***/ }),

/***/ 0:
/*!***********************!*\
  !*** vertx (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["ReactDOM"]; }());

/***/ })

/******/ });
//# sourceMappingURL=idea-image.js.map
>>>>>>> Add ideas-overview to ideas-on-map, including some refactoring
