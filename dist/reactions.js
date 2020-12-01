<<<<<<< HEAD
<<<<<<< HEAD
window.OpenStadComponents=function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}return o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=26)}({0:function(e,t){e.exports=window.React},1:function(e,t,n){(function(e){function t(e,t,n){var r=n[0],o=n.length;!e&&"object"===s(r)||(r={});for(var i=0;i<o;++i){var a,c=n[i];if("object"===s(c))for(var u in c){"__proto__"!==u&&(a=e?l.clone(c[u]):c[u],r[u]=t?function e(t,n){if("object"!==s(t))return n;for(var r in n)"object"===s(t[r])&&"object"===s(n[r])?t[r]=e(t[r],n[r]):t[r]=n[r];return t}(r[u],a):a)}}return r}function s(e){return{}.toString.call(e).slice(8,-1).toLowerCase()}var n,l;n=e&&"object"==typeof e.exports&&e.exports,(l=function(e){return t(!0===e,!1,arguments)}).recursive=function(e){return t(!0===e,!0,arguments)},l.clone=function(e){var t,n,r=e,o=s(e);if("array"===o)for(r=[],n=e.length,t=0;t<n;++t)r[t]=l.clone(e[t]);else if("object"===o)for(t in r={},e)r[t]=l.clone(e[t]);return r},n?e.exports=l:window.merge=l}).call(this,n(18)(e))},10:function(e,t,n){e.exports=n(15).Promise},11:function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function c(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var u,s=[],l=!1,f=-1;function p(){l&&u&&(l=!1,u.length?s=u.concat(s):f=-1,s.length&&d())}function d(){if(!l){var e=c(p);l=!0;for(var t=s.length;t;){for(u=s,s=[];++f<t;)u&&u[f].run();f=-1,t=s.length}u=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function y(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new h(e,t)),1!==s.length||l||c(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},15:function(e,t,fe){(function(ue,se){var le;e.exports=function(){"use strict";function n(e){return typeof e==="function"||typeof e==="object"&&e!==null}function s(e){return typeof e==="function"}var e=undefined;if(!Array.isArray){e=function(e){return Object.prototype.toString.call(e)==="[object Array]"}}else{e=Array.isArray}var r=e,o=0,i=undefined,a=undefined,c=function e(t,n){w[o]=t;w[o+1]=n;o+=2;if(o===2){if(a){a(O)}else{_()}}};function t(e){a=e}function u(e){c=e}var l=typeof window!=="undefined"?window:undefined,f=l||{},p=f.MutationObserver||f.WebKitMutationObserver,d=typeof self==="undefined"&&typeof ue!=="undefined"&&{}.toString.call(ue)==="[object process]",h=typeof Uint8ClampedArray!=="undefined"&&typeof importScripts!=="undefined"&&typeof MessageChannel!=="undefined";function y(){return function(){return ue.nextTick(O)}}function m(){return function(){i(O)}}function b(){var e=0;var t=new p(O);var n=document.createTextNode("");t.observe(n,{characterData:true});return function(){n.data=e=++e%2}}function v(){var e=new MessageChannel;e.port1.onmessage=O;return function(){return e.port2.postMessage(0)}}function g(){var e=setTimeout;return function(){return e(O,1)}}var w=new Array(1e3);function O(){for(var e=0;e<o;e+=2){var t=w[e];var n=w[e+1];t(n);w[e]=undefined;w[e+1]=undefined}o=0}function E(){try{var e=le;var t=fe(16);i=t.runOnLoop||t.runOnContext;return m()}catch(e){return g()}}var _=undefined;if(d){_=y()}else if(p){_=b()}else if(h){_=v()}else if(l===undefined&&"function"==="function"){_=E()}else{_=g()}function j(e,t){var n=arguments;var r=this;var o=new this.constructor(R);if(o[P]===undefined){Y(o)}var i=r._state;if(i){(function(){var e=n[i-1];c(function(){return X(i,o,e,r._result)})})()}else{z(r,o,e,t)}return o}function S(e){var t=this;if(e&&typeof e==="object"&&e.constructor===t){return e}var n=new t(R);M(n,e);return n}var P=Math.random().toString(36).substring(16);function R(){}var k=void 0,C=1,T=2,x=new q;function I(){return new TypeError("You cannot resolve a promise with itself")}function N(){return new TypeError("A promises callback cannot return that same promise.")}function D(e){try{return e.then}catch(e){x.error=e;return x}}function A(e,t,n,r){try{e.call(t,n,r)}catch(e){return e}}function F(e,r,o){c(function(t){var n=false;var e=A(o,r,function(e){if(n){return}n=true;if(r!==e){M(t,e)}else{V(t,e)}},function(e){if(n){return}n=true;H(t,e)},"Settle: "+(t._label||" unknown promise"));if(!n&&e){n=true;H(t,e)}},e)}function L(t,e){if(e._state===C){V(t,e._result)}else if(e._state===T){H(t,e._result)}else{z(e,undefined,function(e){return M(t,e)},function(e){return H(t,e)})}}function U(e,t,n){if(t.constructor===e.constructor&&n===j&&t.constructor.resolve===S){L(e,t)}else{if(n===x){H(e,x.error)}else if(n===undefined){V(e,t)}else if(s(n)){F(e,t,n)}else{V(e,t)}}}function M(e,t){if(e===t){H(e,I())}else if(n(t)){U(e,t,D(t))}else{V(e,t)}}function B(e){if(e._onerror){e._onerror(e._result)}K(e)}function V(e,t){if(e._state!==k){return}e._result=t;e._state=C;if(e._subscribers.length!==0){c(K,e)}}function H(e,t){if(e._state!==k){return}e._state=T;e._result=t;c(B,e)}function z(e,t,n,r){var o=e._subscribers;var i=o.length;e._onerror=null;o[i]=t;o[i+C]=n;o[i+T]=r;if(i===0&&e._state){c(K,e)}}function K(e){var t=e._subscribers;var n=e._state;if(t.length===0){return}var r=undefined,o=undefined,i=e._result;for(var a=0;a<t.length;a+=3){r=t[a];o=t[a+n];if(r){X(n,r,o,i)}else{o(i)}}e._subscribers.length=0}function q(){this.error=null}var J=new q;function W(e,t){try{return e(t)}catch(e){J.error=e;return J}}function X(e,t,n,r){var o=s(n),i=undefined,a=undefined,c=undefined,u=undefined;if(o){i=W(n,r);if(i===J){u=true;a=i.error;i=null}else{c=true}if(t===i){H(t,N());return}}else{i=r;c=true}if(t._state!==k){}else if(o&&c){M(t,i)}else if(u){H(t,a)}else if(e===C){V(t,i)}else if(e===T){H(t,i)}}function $(n,e){try{e(function e(t){M(n,t)},function e(t){H(n,t)})}catch(e){H(n,e)}}var G=0;function Z(){return G++}function Y(e){e[P]=G++;e._state=undefined;e._result=undefined;e._subscribers=[]}function Q(e,t){this._instanceConstructor=e;this.promise=new e(R);if(!this.promise[P]){Y(this.promise)}if(r(t)){this._input=t;this.length=t.length;this._remaining=t.length;this._result=new Array(this.length);if(this.length===0){V(this.promise,this._result)}else{this.length=this.length||0;this._enumerate();if(this._remaining===0){V(this.promise,this._result)}}}else{H(this.promise,ee())}}function ee(){return new Error("Array Methods must be provided an Array")}function te(e){return new Q(this,e).promise}function ne(o){var i=this;if(r(o))return new i(function(e,t){for(var n=o.length,r=0;r<n;r++)i.resolve(o[r]).then(e,t)});else return new i(function(e,t){return t(new TypeError("You must pass an array to race."))})}function re(e){var t=new this(R);return H(t,e),t}function oe(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function ie(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function ae(e){this[P]=Z();this._result=this._state=undefined;this._subscribers=[];if(R!==e){typeof e!=="function"&&oe();this instanceof ae?$(this,e):ie()}}function ce(){var e=undefined;if(typeof se!=="undefined"){e=se}else if(typeof self!=="undefined"){e=self}else{try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}}var t=e.Promise;if(t){var n=null;try{n=Object.prototype.toString.call(t.resolve())}catch(e){}if(n==="[object Promise]"&&!t.cast){return}}e.Promise=ae}return Q.prototype._enumerate=function(){for(var e=this.length,t=this._input,n=0;this._state===k&&n<e;n++)this._eachEntry(t[n],n)},Q.prototype._eachEntry=function(t,e){var n,r,o=this._instanceConstructor,i=o.resolve;i===S?(n=D(t))===j&&t._state!==k?this._settledAt(t._state,e,t._result):"function"!=typeof n?(this._remaining--,this._result[e]=t):o===ae?(U(r=new o(R),t,n),this._willSettleAt(r,e)):this._willSettleAt(new o(function(e){return e(t)}),e):this._willSettleAt(i(t),e)},Q.prototype._settledAt=function(e,t,n){var r=this.promise;r._state===k&&(this._remaining--,e===T?H(r,n):this._result[t]=n),0===this._remaining&&V(r,this._result)},Q.prototype._willSettleAt=function(e,t){var n=this;z(e,void 0,function(e){return n._settledAt(C,t,e)},function(e){return n._settledAt(T,t,e)})},ae.all=function(e){return new Q(this,e).promise},ae.race=function(o){var i=this;return r(o)?new i(function(e,t){for(var n=o.length,r=0;r<n;r++)i.resolve(o[r]).then(e,t)}):new i(function(e,t){return t(new TypeError("You must pass an array to race."))})},ae.resolve=S,ae.reject=function(e){var t=new this(R);return H(t,e),t},ae._setScheduler=function(e){a=e},ae._setAsap=function(e){c=e},ae._asap=c,ae.prototype={constructor:ae,then:j,catch:function(e){return this.then(null,e)}},ce(),ae.polyfill=ce,ae.Promise=ae}()}).call(this,fe(11),fe(8))},16:function(e,t){},18:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},2:function(e,t,n){"use strict";n(6),n(0),n(3),n(32);var r=n(1),o=n.n(r);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){var t,n,r=window.location.search.match(/(?:\?|&)jwt=([A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*)(?:&|$)/);return r&&(t=r[1],u.set("osc-jwt",t),"?"==(n=document.location.search.replace("jwt="+t,""))&&(n=""),document.location.search=n),t=u.get("osc-jwt"),e&&e.jwt&&(t=e.jwt,u.set("osc-jwt",t)),t}var c={get:function(e){var t=sessionStorage.getItem(e);try{t=JSON.parse(t)}catch(e){}return t},set:function(e,t){if("string"==typeof e){if(void 0===t&&(t=""),"object"==i(t))try{t=JSON.stringify(t)}catch(e){}sessionStorage.setItem(e,t)}},remove:function(e){sessionStorage.removeItem(e)}},u=c,s={admin:["admin","moderator","editor","member","anonymous","all"],moderator:["moderator","editor","member","anonymous","all"],editor:["editor","member","anonymous","all"],member:["member","anonymous","all"],anonymous:["anonymous","all"],all:["all"],owner:null};function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var f={get:function(e){var t=localStorage.getItem(e);try{t=JSON.parse(t)}catch(e){}return t},set:function(e,t){if("string"==typeof e){if(void 0===t&&(t=""),"object"==l(t))try{t=JSON.stringify(t)}catch(e){}localStorage.setItem(e,t)}},remove:function(e){localStorage.removeItem(e)}},p={api:{getHeaders:function(e){var t=o.a.recursive({"Content-type":"application/json"},e&&e.api&&e.api.headers),n=a();return n&&(t=o.a.recursive({"X-Authorization":"Bearer "+n},t)),t}},user:{getUser:function(e,t){t=t||function(e){console.log("getUser: next not defined."),console.log(e)};var n=e.user||u.get("osc-user");if(n)return t(null,n);var r=a(e);if(!r)return t(null,{});var o="".concat(e.api.url,"/oauth/site/").concat(e.siteId,"/me"),i={"X-Authorization":"Bearer ".concat(r),"Content-Type":"application/json"};fetch(o,{headers:i}).then(function(e){if(!e.ok)throw new Error("Error on fetch");return e.json()}).then(function(e){u.set("osc-user",e),t(null,e)}).catch(function(e){t(e)})},getJWT:a,logout:function(e,t){t=t||function(e){console.log("logout: next not defined.")};var n=e.user||u.get("osc-user");if(n)return t(null,n);var r=a(e);if(!r)return t(null,{});var o=e.api.url+"/oauth/site/"+e.siteId+"/me";fetch(o,{headers:{"X-Authorization":"Bearer "+r,"Content-Type":"application/json"}}).then(function(e){if(!e.ok)throw new Error("Error on fetch");return e.json()}).then(function(e){u.set("osc-user",e),t(null,e)}).catch(function(e){t(e)})},hasRole:function(e,t){var n=e.role;return Object.keys(s).includes(n)||(n="all"),s[n].includes(t)}},localStorage:f,sessionStorage:u,reactTemplate:function(e){var t=e.html,n=void 0===t?"":t,r=e;delete r.html;var o=0;return Object.keys(r).forEach(function(e){var t=new RegExp("^((?:.|\n|\r)*)\\{".concat(e,"\\}((?:.|\n|\r)*)$"),"g").exec(n);t&&(o++,n=React.createElement("span",null,React.createElement("span",{dangerouslySetInnerHTML:{__html:t[1]}}),r[e],React.createElement("span",{dangerouslySetInnerHTML:{__html:t[2]}})))}),0==o&&(n=React.createElement("span",{dangerouslySetInnerHTML:{__html:n}})),n}};t.a=p},26:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return F}),n.d(t,"Reactions",function(){return F});n(6);var r=n(0),p=n.n(r),o=n(3),i=n.n(o),a=(n(67),n(1)),c=n.n(a),u=n(4),d=n(2),s=n(5);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=b(i);return t=a?(e=b(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==l(r)&&"function"!=typeof r?m(n):r}}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(o,u["a"]);var e,t,n,r=y(o);function o(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var n=m(t=r.call(this,e));return n.defaultConfig={argumentId:null,api:{url:null,headers:null},user:{},descriptionMinLength:30,descriptionMaxLength:500,requiredUserRole:"member",formIntro:"",placeholder:""},n.config=c.a.recursive(n.defaultConfig,e.config||{}),n.config.loginUrl=n.config.loginUrl||"/oauth/login?returnTo="+encodeURIComponent(document.location.href),n.state={description:n.config.description||"",isValid:!1,isBusy:!1},t}return e=o,(t=[{key:"handleOnChange",value:function(e){(e=e||{}).description&&(e.isValid=this.description.isValid()),this.setState(e)}},{key:"canSubmit",value:function(){var e=this.config.requiredUserRole,t=this.props.user||{};return d.a.user.hasRole(t,e)}},{key:"submitForm",value:function(){var o=this;o.setState({isBusy:!0},function(){if(o.description.validate({showWarning:!0})){if(!o.canSubmit())return alert("Je bent niet ingelogd");var e="".concat(o.config.api&&o.config.api.url,"/api/site/").concat(o.config.siteId,"/idea/").concat(o.config.ideaId,"/argument").concat(o.config.argumentId?"/".concat(o.config.argumentId):""),t=d.a.api.getHeaders(o.config),n=o.config.argumentId?"PUT":"POST",r={parentId:o.config.parentId,sentiment:o.config.sentiment,description:o.state.description};fetch(e,{method:n,headers:t,body:JSON.stringify(r)}).then(function(e){if(e.ok)return e.json();throw e.text()}).then(function(n){"function"==typeof o.config.onSubmit&&o.config.onSubmit({description:o.state.description}),o.setState({description:"",isBusy:!1,isValid:!1},function(){var e,t;o.description.handleOnChange({value:""}),o.config.argumentId?(e=new CustomEvent("osc-reaction-edited",{detail:n}),document.dispatchEvent(e)):(t=new CustomEvent("osc-new-reaction-stored",{detail:n}),document.dispatchEvent(t))})}).catch(function(e){e.then(function(e){return alert(e),console.log(e)}),o.setState({isBusy:!1,isValid:!1})})}else o.setState({isBusy:!1,isValid:!1})})}},{key:"render",value:function(){var t=this,e={descriptionMinLength:t.config.descriptionMinLength||30,descriptionMaxLength:t.config.descriptionMaxLength||500},n=null;t.config.formIntro&&(n=p.a.createElement("div",{className:"osc-intro"},t.config.formIntro));var r=null,r=t.canSubmit()?p.a.createElement("div",{className:"osc-align-right-container"},p.a.createElement("button",{onClick:function(){t.state.isBusy||t.submitForm()},className:"osc-button-blue".concat(!t.state.isValid||t.state.isBusy?" osc-disabled":"")},"Verzenden")):p.a.createElement("div",{className:"osc-align-right-container"},p.a.createElement("button",{onClick:function(){d.a.localStorage.set("osc-reactions-login-pending",!0),document.location.href=t.config.loginUrl},className:"osc-button-blue osc-not-logged-in-button"},"Inloggen"));return p.a.createElement("div",{id:t.divId,className:"",ref:function(e){return t.instance=e}},n,p.a.createElement(s.a.InputWithCounter,{disabled:!this.canSubmit()||null,config:{inputType:"textarea",minLength:e.descriptionMinLength,maxLength:e.descriptionMaxLength,placeholder:t.config.placeholder},value:t.state.description,onChange:function(e){return t.handleOnChange({description:e.value})},ref:function(e){return t.description=e}}),r)}}])&&f(e.prototype,t),n&&f(e,n),o}();function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function O(o){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?w(Object(i),!0).forEach(function(e){var t,n,r;t=o,r=i[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):w(Object(i)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(i,e))})}return o}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=P(i);return t=a?(e=P(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==g(r)&&"function"!=typeof r?S(n):r}}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var R=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(f,u["a"]);var e,t,n,r=j(f);function f(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f);var n=S(t=r.call(this,e));return n.id=e.id||"osc-reaction-".concat(parseInt(1e6*Math.random())),n.defaultConfig={siteId:null,ideaId:null,title:null,descriptionMinLength:30,descriptionMaxLength:500,api:{url:null,headers:null},requiredUserRole:"member"},n.config=Object.assign(n.defaultConfig,e.config||{}),n.state={user:e.user,isMenuActive:!1,isReplyFromActive:!1,editMode:!1},t}return e=f,(t=[{key:"componentDidMount",value:function(){var t=this;this.storedListener=document.addEventListener("osc-new-reaction-stored",function(e){t.onNewReactionStored(e.detail)}),this.editedListener=document.addEventListener("osc-reaction-edited",function(e){t.onReactionEdited(e.detail)})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("osc-new-reaction-stored",this.storedListener),document.removeEventListener("osc-reaction-edited",this.editedListener)}},{key:"showMenu",value:function(){this.setState({isMenuActive:!0})}},{key:"toggleReplyForm",value:function(){this.setState({isReplyFromActive:!this.state.isReplyFromActive})}},{key:"toggleEditForm",value:function(){this.setState({editMode:!this.state.editMode})}},{key:"canEdit",value:function(){return this.props.data.can.edit}},{key:"canDelete",value:function(){return this.props.data.can.delete}},{key:"canLike",value:function(){if(this.config.isClosed)return!1;var e=this.config.requiredUserRole,t=this.props.user&&this.props.user.role;return"anonymous"==e&&t||"member"==e&&("member"==t||"admin"==t)||"admin"==e&&"admin"==t}},{key:"canReply",value:function(){return this.props.data.can.reply}},{key:"submitDelete",value:function(){var n=this;if(!n.canDelete())return alert("U kunt deze reactie niet verwijderen");var e="".concat(n.config.api&&n.config.api.url,"/api/site/").concat(n.config.siteId,"/idea/").concat(n.config.ideaId,"/argument/").concat(n.props.data.id),t=d.a.api.getHeaders(n.config);fetch(e,{method:"DELETE",headers:t,body:JSON.stringify({})}).then(function(e){if(e.ok)return e.json();throw e.text()}).then(function(e){n.setState({isDeleted:!0});var t=new CustomEvent("osc-reaction-deleted",{detail:{ideaId:n.config.ideaId}});document.dispatchEvent(t)}).catch(function(e){console.log(e),e.then(function(e){return console.log(e)})})}},{key:"submitLike",value:function(){var t=this;if(!t.canLike())return alert("U kunt deze reactie niet liken");var e="".concat(t.config.api&&t.config.api.url,"/api/site/").concat(t.config.siteId,"/idea/").concat(t.config.ideaId,"/argument/").concat(t.props.data.id,"/vote"),n=d.a.api.getHeaders(t.config);fetch(e,{method:"POST",headers:n,body:JSON.stringify({})}).then(function(e){if(e.ok)return e.json();throw e.text()}).then(function(e){t.setState({yes:e.yes,hasUserVoted:e.hasUserVoted})}).catch(function(e){console.log(e),e.then(function(e){return console.log(e)})})}},{key:"onNewReactionStored",value:function(){this.setState({isMenuActive:!1,isReplyFromActive:!1})}},{key:"onReactionEdited",value:function(e){e.id==this.props.data.id&&this.setState({editMode:!1,isMenuActive:!1})}},{key:"render",value:function(){var n=this,e=n.props.data||{can:{}};if(e.isDeleted)return null;console.log("--------------------"),console.log(e.user);var t=d.a.user.hasRole(e.user,"editor")?"osc-is-admin":"",r=p.a.createElement("div",{className:"osc-reaction-user ".concat(t)},e.user.nickName||e.user.fullName||"".concat(e.user.firstName," ").concat(e.user.lastName)),o=null;n.canEdit()&&n.canDelete()&&(o=p.a.createElement("div",{className:"osc-reaction-menu".concat(n.state.isMenuActive?" osc-reaction-hamburger-active":""),onClick:function(){n.showMenu()}},p.a.createElement("a",{className:"osc-reaction-delete",title:"Argument verwijderen",onClick:function(){confirm("Weet je het zeker?")&&n.submitDelete()}}),p.a.createElement("a",{className:"osc-reaction-edit",title:"Argument bewerken",onClick:function(){return n.toggleEditForm()}})));var i=p.a.createElement("div",{className:"osc-reaction-description"},e.description);n.state.editMode&&(i=p.a.createElement("div",{className:"osc-reaction-description"},p.a.createElement(v,{config:O(O({},n.config),{},{description:e.description,argumentId:e.id}),user:n.state.user,ref:function(e){return n.editForm=e}})));var a=null;e.parentId||(a=p.a.createElement("a",{className:"osc-reaction-like-button".concat((void 0!==n.state.hasUserVoted?n.state.hasUserVoted:e.hasUserVoted)?" osc-reaction-like-button-hasvoted":""),onClick:function(){return n.submitLike()}},"Mee eens (",p.a.createElement("span",null,0|(void 0!==n.state.yes?n.state.yes:e.yes)),")"));var c,u=null,s=null;n.canReply()&&!n.config.isClosed&&(u=p.a.createElement("a",{onClick:function(){return n.toggleReplyForm()},className:"osc-reply-button"},"Reageren"),n.state.isReplyFromActive&&((c=O(O({},n.config),{},{parentId:e.id})).formIntro="",s=p.a.createElement("div",{id:"osc-reaction-".concat(e.id),className:"osc-reply"},p.a.createElement(v,{config:c,user:n.state.user,ref:function(e){return n.editForm=e}}))));var l=null;return e.reactions&&e.reactions.length&&(l=p.a.createElement("ul",{className:"osc-reactions-list"},e.reactions.map(function(e){var t="osc-reaction-key-".concat(e.id||parseInt(1e6*Math.random()));return p.a.createElement("li",{key:t},p.a.createElement(f,{config:n.config,className:"osc-reply",user:n.state.user,data:e}))}))),p.a.createElement("div",null,p.a.createElement("div",{id:"osc-reaction-".concat(e.id),className:n.props.className||"osc-reaction"},o,r,p.a.createElement("div",{className:"osc-reaction-date"},e.createDateHumanized),i,a,u),s,l)}}])&&E(e.prototype,t),n&&E(e,n),f}();function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function T(o){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?C(Object(i),!0).forEach(function(e){var t,n,r;t=o,r=i[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):C(Object(i)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(i,e))})}return o}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function N(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=A(i);return t=a?(e=A(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==k(r)&&"function"!=typeof r?D(n):r}}function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var F=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(o,u["a"]);var e,t,n,r=N(o);function o(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var n=D(t=r.call(this,e));return n.id=e.id||"osc-reactions-".concat(parseInt(1e6*Math.random())),n.defaultConfig={scrollToNewReaction:!0,isClosed:!1,closedText:"De reactiemogelijkheid is gesloten",sentiment:void 0,siteId:null,ideaId:null,title:null,descriptionMinLength:30,descriptionMaxLength:500,user:null,loginUrl:"",api:{url:null,headers:null},requiredUserRole:"member",placeholder:"",formIntro:""},n.config=c.a.recursive(n.defaultConfig,n.config,e.config||{}),n.state={user:n.config.user,reactions:[]},t}return e=o,(t=[{key:"componentDidMount",value:function(){var n=this;n.state.user&&n.state.user.role?n.fetchData():d.a.user.getUser({user:n.config.user,jwt:n.config.jwt,siteId:n.config.siteId,api:n.config.api},function(e,t){n.setState({user:t},function(){n.fetchData()})}),this.storedListener=document.addEventListener("osc-new-reaction-stored",function(e){n.onNewReactionStored(e.detail)}),this.editedListener=document.addEventListener("osc-reaction-edited",function(e){n.onReactionEdited(e.detail)}),this.deletedListener=document.addEventListener("osc-reaction-deleted",function(e){n.onReactionDeleted(e.detail)})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("osc-new-reaction-stored",this.storedListener),document.removeEventListener("osc-reaction-edited",this.editedListener),document.removeEventListener("osc-reaction-deleted",this.deletedListener)}},{key:"fetchData",value:function(n){var r=this,e="".concat(r.config.api&&r.config.api.url,"/api/site/").concat(r.config.siteId,"/idea/").concat(r.config.ideaId,"/argument?sentiment=").concat(r.config.sentiment,"&withUser=1&withUserVote=1&withVoteCount=1&includeReactionsOnReactions=1"),t=d.a.api.getHeaders(r.config);fetch(e,{headers:t}).then(function(e){if(e.ok)return e.json();throw e.text()}).then(function(e){var t=T({},r.state);t.reactions=e,t.reactions.sort(function(e,t){return e.createdAt<t.createdAt}),r.setState(t,function(){if(n)return n()})}).catch(function(e){console.log(e),e.then(function(e){return console.log(e)})})}},{key:"onNewReactionStored",value:function(e){var t=this;this.fetchData(function(){t.config.scrollToNewReaction&&document.getElementById("osc-reaction-".concat(e.id))&&document.getElementById("osc-reaction-".concat(e.id)).scrollIntoView()})}},{key:"onReactionEdited",value:function(){this.fetchData()}},{key:"onReactionDeleted",value:function(){this.fetchData()}},{key:"render",value:function(){var t=this,n=this,e=p.a.createElement("ul",{className:"osc-reactions-list"},n.state.reactions.map(function(e){var t="osc-reaction-key-".concat(e.id||parseInt(1e6*Math.random()));return p.a.createElement("li",{key:t},p.a.createElement(R,{config:n.config,user:n.state.user,data:T({},e)}))})),r=n.config.title?p.a.createElement("h3",null,n.config.title):null,o=p.a.createElement(v,{config:n.config,user:n.state.user});return n.config.isClosed&&(o=n.config.closedText?p.a.createElement("div",{className:"osc-closed-text"},n.config.closedText):null),p.a.createElement("div",{id:this.id,className:n.props.className||"osc-reactions",ref:function(e){t.instance=e}},r,o,e,p.a.createElement("br",null),p.a.createElement("br",null))}}])&&x(e.prototype,t),n&&x(e,n),o}();F.renderElement=function(e,t){var n=e.attributes;i.a.render(p.a.createElement(F,{attributes:n,config:t}),e)}},3:function(e,t){e.exports=window.ReactDOM},32:function(e,t,n){},33:function(e,t,n){},4:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(0),a=n.n(r);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=p(i);return t=a?(e=p(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==c(r)&&"function"!=typeof r?f(n):r}}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var o=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(i,a.a.Component);var e,t,n,o=l(i);function i(n){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);var r=f(e=o.call(this,n));if(n.attributes&&Object.keys(n.attributes).forEach(function(e){var t=n.attributes[e];r[t.name]=t.value}),r.config=r.config||n.config,r.config)try{r.config=JSON.parse(r.config)}catch(e){}return r.divId=r.divId||r.config&&r.config.divId||n.id||"openstad-component-".concat(parseInt(1e8*Math.random())),window[r.divId]=f(e),e}return e=i,(t=[{key:"componentDidMount",value:function(){}}])&&u(e.prototype,t),n&&u(e,n),i}()},5:function(e,t,n){"use strict";n(6);var r=n(0),u=n.n(r),o=(n(3),n(33),n(1)),i=n.n(o),a=n(4);n(2);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=d(i);return t=a?(e=d(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==c(r)&&"function"!=typeof r?p(n):r}}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(o,a["a"]);var e,t,n,r=f(o);function o(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var n=p(t=r.call(this,e));return n.defaultConfig={choices:[],name:"",placeholder:"",disabled:!1,required:!1},n.config=i.a.recursive(n.defaultConfig,n.config,e.config||{}),n.state={value:e.value,error:null},t.onChange=e.onChange,t}return e=o,(t=[{key:"validate",value:function(e){var t=e.showErrors,n=!this.config.required||!!this.state.value,r=!n&&t?!0:"";return this.setState({isValid:n,error:r}),n}},{key:"handleOnChange",value:function(e){var t=this;e=e||{},t.setState(e,function(){t.validate({})}),"function"==typeof t.onChange&&t.onChange({name:t.config.name,value:e.value})}}])&&s(e.prototype,t),n&&s(e,n),o}();function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=g(i);return t=a?(e=g(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==y(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var w=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(o,h);var e,t,n,r=v(o);function o(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return e=o,(t=[{key:"render",value:function(){var t=this;return u.a.createElement("input",{type:"hidden",value:this.props.value,disabled:this.props.disabled,placeholder:this.config.placeholder,onChange:function(){return t.handleOnChange({value:t.input.value})},ref:function(e){return t.input=e}})}}])&&m(e.prototype,t),n&&m(e,n),o}();function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=S(i);return t=a?(e=S(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==O(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var P=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(o,h);var e,t,n,r=j(o);function o(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);(t=r.call(this,e)).config=i.a.recursive({allowMultiple:!1,imageserver:{process:"",fetch:""}},t.props.config,t.config||{});var n=[];return(e.value||[]).forEach(function(e){n.push({source:{url:e},options:{type:"local",file:{name:e},metadata:{poster:e}}})}),t.state={uploadedFiles:n},t}return e=o,(t=[{key:"componentDidMount",value:function(){this._loadedFiles=0,this.files=["https://unpkg.com/filepond/dist/filepond.js","https://unpkg.com/filepond-polyfill/dist/filepond-polyfill.js","https://unpkg.com/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.js","https://unpkg.com/filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.js","https://unpkg.com/filepond-plugin-file-validate-size/dist/filepond-plugin-file-validate-size.js","https://unpkg.com/filepond-plugin-file-poster/dist/filepond-plugin-file-poster.js"],this.loadNextFile()}},{key:"loadNextFile",value:function(){var e,t=this,n=t.files[t._loadedFiles];n&&((e=document.createElement("script")).src=n,e.async=!0,e&&(e.onload=function(){t.loadNextFile()},document.body.appendChild(e))),t._loadedFiles==t.files.length&&t.fileUploaderInit(),t._loadedFiles++}},{key:"validate",value:function(){var t=!0;return this.imageuploader&&this.imageuploader.getFiles&&this.imageuploader.getFiles().forEach(function(e){e.serverId||(t=!1)}),t}},{key:"fileUploaderInit",value:function(){var e,t=this,n=document.querySelector(".osc-image-upload-container");n&&(FilePond.registerPlugin(FilePondPluginImagePreview),FilePond.registerPlugin(FilePondPluginFileValidateSize),FilePond.registerPlugin(FilePondPluginFileValidateType),FilePond.registerPlugin(FilePondPluginFilePoster),e={acceptedFileTypes:["image/*"],allowFileSizeValidation:!0,allowMultiple:this.config.allowMultiple,allowReorder:!0,styleItemPanelAspectRatio:1,maxFileSize:"8mb",name:"image",maxFiles:5,allowBrowse:!0,files:this.state.uploadedFiles,server:{process:this.config.imageserver.process,fetch:this.config.imageserver.fetch},imageResizeTargetWidth:80,imageResizeTargetHeight:80,imageCropAspectRatio:"1:1",labelIdle:"Sleep afbeelding(en) naar deze plek of <span class='filepond--label-action'>KLIK HIER</span>",labelInvalidField:"Field contains invalid files",labelFileWaitingForSize:"Wachtend op grootte",labelFileSizeNotAvailable:"Grootte niet beschikbaar",labelFileCountSingular:"Bestand in lijst",labelFileCountPlural:"Bestanden in lijst",labelFileLoading:"Laden",labelFileAdded:"Toegevoegd",labelFileLoadError:"Fout bij het uploaden",labelFileRemoved:"Verwijderd",labelFileRemoveError:"Fout bij het verwijderen",labelFileProcessing:"Laden",labelFileProcessingComplete:"Afbeelding geladen",labelFileProcessingAborted:"Upload cancelled",labelFileProcessingError:"Error during upload",labelFileProcessingRevertError:"Error during revert",labelTapToCancel:"tap to cancel",labelTapToRetry:"tap to retry",labelTapToUndo:"tap to undo",labelButtonRemoveItem:"Verwijderen",labelButtonAbortItemLoad:"Abort",labelButtonRetryItemLoad:"Retry",labelButtonAbortItemProcessing:"Verwijder",labelButtonUndoItemProcessing:"Undo",labelButtonRetryItemProcessing:"Retry",labelButtonProcessItem:"Upload"},t.imageuploader=FilePond.create(n,e),document.querySelector(".filepond--root"),document.querySelector(".filepond--root").addEventListener("FilePond:processfile",function(e){e.detail&&e.detail.error&&console.log("Error uploding file: ",e.detail),t.fileUploaderUpdateCurrentInput()}),document.querySelector(".filepond--root").addEventListener("FilePond:removefile",function(e){e.detail&&e.detail.error&&console.log("Error uploding file: ",e.detail),t.fileUploaderUpdateCurrentInput()}),t.state.formfields&&t.imageuploader.addFiles(t.state.formfields.images))}},{key:"fileUploaderUpdateCurrentInput",value:function(){var n=this;n.state.value=[],this.imageuploader&&this.imageuploader.getFiles&&this.imageuploader.getFiles().forEach(function(e){try{var t="string"==typeof e.serverId?JSON.parse(e.serverId):e.serverId;n.state.value.push(t.url)}catch(e){console.log(e)}}),n.props.onChange({name:n.config.name,value:n.state.value})}},{key:"fileUploaderUploaderAddImages",value:function(e){this.imageuploader&&this.imageuploader.addFiles(e)}},{key:"render",value:function(){var e=null;return this.state.error&&(e=u.a.createElement("div",{className:"osc-form-error"},"Je hebt nog geen afbeelding geupload")),u.a.createElement("div",{className:"osc-image-upload-container"},u.a.createElement("input",{type:"file",className:"imageUploader-gebiedstool filepond-gebiedstool"}),e)}}])&&E(e.prototype,t),n&&E(e,n),o}();function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function T(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=I(i);return t=a?(e=I(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==R(r)&&"function"!=typeof r?x(n):r}}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var N=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(o,u.a.Component);var e,t,n,r=T(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=r.call(this,e)).state={value:t.props.value},t.onKeyUpx=t.onKeyUpx.bind(x(t)),t}return e=o,(t=[{key:"componentDidMount",value:function(){var e=this.props.value,e=this.filterHTML(e);this.input.innerHTML=e}},{key:"filterHTML",value:function(e){return e=(e=(e=e.replace(/<(\/?\s*(?:a [^>]+|a|b|i|strong|em|p|div|br|ul|li)\s*\/?)>/g,"[[[$1]]]")).replace(/<[^>]+>/g,"")).replace(/\[\[\[([^\]]+)\]\]\]/g,"<$1>")}},{key:"executeAction",value:function(e,t,n){e.preventDefault(),e.stopPropagation(),document.execCommand(t,!1,n),this.onKeyUp()}},{key:"onFocus",value:function(e){this.props.onFocus&&this.props.onFocus(e)}},{key:"onBlur",value:function(e){this.props.onBlur&&this.props.onBlur(e),this.props.onChange&&this.props.onChange({value:this.state.value})}},{key:"onKeyUpx",value:function(){var e=this.input.innerHTML,e=this.filterHTML(e);this.setState({value:e}),this.props.onKeyUp&&this.props.onKeyUp(e)}},{key:"render",value:function(){var t=this;return u.a.createElement("div",{className:"osc-html-editor"},u.a.createElement("div",{className:"osc-html-editor-buttons"},u.a.createElement("div",{className:"osc-html-editor-button osc-html-editor-button-bold",onMouseDown:function(e){return t.executeAction(e,"bold")}}," "),u.a.createElement("div",{className:"osc-html-editor-button osc-html-editor-button-italic",onMouseDown:function(e){return t.executeAction(e,"italic")}}," "),u.a.createElement("div",{className:"osc-html-editor-button osc-html-editor-button-insertunorderedlist",onMouseDown:function(e){return t.executeAction(e,"insertunorderedlist")}}," "),u.a.createElement("div",{className:"osc-html-editor-button osc-html-editor-button-createlink",onMouseDown:function(e){return t.executeAction(e,"createlink",prompt("Lank naar","http://"))}}," ")),u.a.createElement("div",{className:"osc-html-editor-content",contentEditable:!0,onFocus:function(e){return t.onFocus(e)},onBlur:function(e){return t.onBlur(e)},onKeyUp:function(){return t.onKeyUpx()},ref:function(e){return t.input=e}}))}}])&&k(e.prototype,t),n&&k(e,n),o}();function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=M(i);return t=a?(e=M(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==D(r)&&"function"!=typeof r?U(n):r}}function U(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var B=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(o,u.a.Component);var e,t,n,r=L(o);function o(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var n=U(t=r.call(this,e));return n.id=e.id||"osc-formfields-plaintext-with-counter-"+parseInt(1e6*Math.random()),n.defaultConfig={name:"tekst",inputType:"input",minLength:5,maxLength:10,placeholder:""},n.config=i.a.recursive(n.defaultConfig,n.config,e.config||{}),n.state={focused:!1,value:e.value||"",valueLength:e.value&&e.value.length||0},n.key=e.useKey||(n.id||"osc-input-with-counter-")+parseInt(1e7*Math.random),t.onChange=e.onChange,n.handleOnChange=n.handleOnChange.bind(U(t)),n.onInputFocus=n.onInputFocus.bind(U(t)),n.onInputBlur=n.onInputBlur.bind(U(t)),n.onInputKeyUp=n.onInputKeyUp.bind(U(t)),t}return e=o,(t=[{key:"isValid",value:function(){var e={isValid:!0,warning:null};return this.state.valueLength<this.config.minLength&&(e.warning="De tekst is te kort",e.isValid=!1),this.state.valueLength>this.config.maxLength&&(e.warning="De tekst is te lang",e.isValid=!1),this.setState(e),e.isValid}},{key:"validate",value:function(){return this.setState({showWarning:!0}),this.isValid()}},{key:"handleOnChange",value:function(e){e=e||{},this.setState(e),"function"==typeof this.onChange&&this.onChange({name:this.config.name,value:e.value})}},{key:"onInputFocus",value:function(){var e={focused:!0,showWarning:!1};this.setState(e)}},{key:"onInputBlur",value:function(){var e={focused:!1};this.setState(e)}},{key:"onInputKeyUp",value:function(e){var t={};t.value=e||this.input.value;var n=t.value.length;t.valueLength=n,t.isValid=n>=this.config.minLength&&n<=this.config.maxLength,this.setState(t)}},{key:"render",value:function(){var e,t=this,n=this,r=null,o=null;n.state.focused&&(r=n.state.valueLength<n.config.minLength?u.a.createElement("div",{className:"osc-form-counter osc-form-error"},"Nog minimaal ",u.a.createElement("span",{className:""},n.config.minLength-n.state.valueLength)," tekens"):(e=n.state.valueLength>n.config.maxLength?"osc-form-error":"",u.a.createElement("div",{className:"osc-form-counter "+e},"Je hebt nog ",u.a.createElement("span",{className:""},n.config.maxLength-n.state.valueLength)," tekens over."))),n.state.showWarning&&n.state.warning&&(o=u.a.createElement("div",{className:"osc-form-warning",ref:function(e){return t["form-warning"]=e}},n.state.warning));var i=null;switch(n.config.inputType){case"htmlarea":i=u.a.createElement(N,{value:this.state.value,onChange:n.handleOnChange,onFocus:n.onInputFocus,onBlur:n.onInputBlur,onKeyUp:n.onInputKeyUp});break;case"textarea":i=u.a.createElement("textarea",{key:n.key,ref:function(e){return n.input=e},value:this.state.value,disabled:this.props.disabled,placeholder:this.config.placeholder,onChange:function(){return n.handleOnChange({value:n.input.value})},onKeyUp:function(){return n.onInputKeyUp()},onFocus:function(e){return n.onInputFocus(e)},onBlur:function(e){return n.onInputBlur(e)}});break;case"input":default:i=u.a.createElement("input",{key:n.key,ref:function(e){return n.input=e},value:this.state.value,disabled:this.props.disabled,placeholder:this.config.placeholder,onChange:function(){return n.handleOnChange({value:n.input.value})},onKeyUp:function(){return n.onInputKeyUp()},onFocus:function(e){return n.onInputFocus(e)},onBlur:function(e){return n.onInputBlur(e)}})}return u.a.createElement("div",{id:n.id,ref:function(e){return n.instance=e},className:"osc-input-with-counter"},u.a.createElement("div",{className:"osc-form-feedback"},i,r,o))}}])&&A(e.prototype,t),n&&A(e,n),o}();function V(e){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function K(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=q(i);return t=a?(e=q(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==V(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function q(e){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var J=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(o,h);var e,t,n,r=K(o);function o(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return e=o,(t=[{key:"render",value:function(){var t=this,e=null;return t.state.error&&(e=u.a.createElement("div",{className:"osc-form-error"},"Je hebt nog geen keuze gemaakt")),u.a.createElement("div",{className:"osc-radios"},t.config.choices.map(function(e){return e.dangerousDescription?u.a.createElement("div",{className:"osc-radio-container",key:e.value},u.a.createElement("div",{className:"osc-radio-input".concat(t.state.value==e.value?" osc-radio-input-checked":"")},u.a.createElement("input",{type:"radio",name:t.divId,value:e.value,onChange:function(){return t.handleOnChange({value:e.value})}})),u.a.createElement("div",{className:"osc-radio-text",dangerouslySetInnerHTML:{__html:e.dangerousDescription}})):u.a.createElement("div",{className:"osc-radio-container",key:e.value},u.a.createElement("div",{className:"osc-radio-input".concat(t.state.value==e.value?" osc-radio-input-checked":"")},u.a.createElement("input",{type:"radio",name:t.divId,value:e.value,onChange:function(){return t.handleOnChange({value:e.value})}})),u.a.createElement("div",{className:"osc-radio-text"},e.dangerousDescription?null:e.description||e.title||e.value))}),e)}}])&&H(e.prototype,t),n&&H(e,n),o}();function W(e){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function X(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $(e,t){return($=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function G(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=Z(i);return t=a?(e=Z(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==W(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function Z(e){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Y=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$(e,t)}(o,h);var e,t,n,r=G(o);function o(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return e=o,(t=[{key:"validate",value:function(e){var t=e.showErrors,n=!0,r="";return this.state.value&&this.state.value.match(/^\s*\d{4}\s*[a-zA-Z][a-zA-Z]\s*$/)||(n=!1,t&&(r="Dit is geen postcode")),this.config.required&&!this.state.value&&(n=!1,t&&(r="Je hebt nog niets ingevuld")),this.setState({isValid:n,error:r}),n}},{key:"render",value:function(){var t=this,e=null;return t.state.error&&(e=u.a.createElement("div",{className:"osc-form-error"},t.state.error)),u.a.createElement("div",{className:"osc-textinput"},u.a.createElement("input",{type:"text",value:this.props.value,disabled:this.props.disabled,placeholder:this.config.placeholder,onChange:function(){return t.handleOnChange({value:t.input.value})},ref:function(e){return t.input=e}}),e)}}])&&X(e.prototype,t),n&&X(e,n),o}();function Q(e){return(Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ee(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function te(e,t){return(te=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ne(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=re(i);return t=a?(e=re(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==Q(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function re(e){return(re=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var oe=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&te(e,t)}(o,h);var e,t,n,r=ne(o);function o(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return e=o,(t=[{key:"componentDidMount",value:function(){var e=this.state.value||this.config.choices[0]&&this.config.choices[0].value;this.handleOnChange({value:e})}},{key:"render",value:function(){var t=this,e=null;return t.state.error&&(e=u.a.createElement("div",{className:"osc-form-error"},"Je hebt nog geen keuze gemaakt")),u.a.createElement("div",{className:"osc-select"},u.a.createElement("select",{value:this.state.value||"",disabled:this.props.disabled,placeholder:this.config.placeholder,onChange:function(){return t.handleOnChange({value:t.input.value})},ref:function(e){return t.input=e}},t.config.choices.map(function(e){return u.a.createElement("option",{value:e.value||"",key:e.value},e.description||e.title||e.value)})),e)}}])&&ee(e.prototype,t),n&&ee(e,n),o}();function ie(e){return(ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ae(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ce(e,t){return(ce=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ue(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=se(i);return t=a?(e=se(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==ie(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function se(e){return(se=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var le=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ce(e,t)}(o,h);var e,t,n,r=ue(o);function o(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return e=o,(t=[{key:"render",value:function(){var t=this,e=null;return t.state.error&&(e=u.a.createElement("div",{className:"osc-form-error"},"Je hebt nog niets ingevuld")),u.a.createElement("div",{className:"osc-textinput"},u.a.createElement("input",{type:"text",value:this.props.value,disabled:this.props.disabled,placeholder:this.config.placeholder,onChange:function(){return t.handleOnChange({value:t.input.value})},ref:function(e){return t.input=e}}),e)}}])&&ae(e.prototype,t),n&&ae(e,n),o}();function fe(e){return(fe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function pe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function de(e,t){return(de=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function he(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=ye(i);return t=a?(e=ye(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==fe(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function ye(e){return(ye=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var me=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&de(e,t)}(o,h);var e,t,n,r=he(o);function o(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return e=o,(t=[{key:"render",value:function(){var t=this,e=null;return t.state.error&&(e=u.a.createElement("div",{className:"osc-form-error"},"Je hebt nog niets ingevuld")),u.a.createElement("div",{className:"osc-textarea"},u.a.createElement("textarea",{value:this.props.value,disabled:this.props.disabled,placeholder:this.config.placeholder,onChange:function(){return t.handleOnChange({value:t.input.value})},ref:function(e){return t.input=e}},this.state.value),e)}}])&&pe(e.prototype,t),n&&pe(e,n),o}();function be(e){return(be="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ve(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function ge(o){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?ve(Object(i),!0).forEach(function(e){var t,n,r;t=o,r=i[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):ve(Object(i)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(i,e))})}return o}function we(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Oe(e,t){return(Oe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ee(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=je(i);return t=a?(e=je(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==be(r)&&"function"!=typeof r?_e(n):r}}function _e(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function je(e){return(je=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Se=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Oe(e,t)}(o,a["a"]);var e,t,n,r=Ee(o);function o(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var n=_e(t=r.call(this,e));return n.defaultConfig={inputType:null,validateAction:null,changeAction:null,required:!1,title:null,description:null,choices:[]},n.config=i.a.recursive(n.defaultConfig,n.config,e.config||{}),n.config.name=n.config.name||n.config.title.toLowerCase(),n.state={value:e.value||void 0},n.handleOnChange=n.handleOnChange.bind(n),n.onChange=e.onChange,t}return e=o,(t=[{key:"validate",value:function(e){var t=e.showErrors;return!this.input||this.input.validate({showErrors:t})}},{key:"handleOnChange",value:function(e){"function"==typeof this.onChange&&this.onChange(e)}},{key:"render",value:function(){var t=this,e=null;t.config.title&&(e=React.createElement("h3",{className:"osc-form-title"},t.config.title));var n=null;t.config.description&&(n=React.createElement("div",{className:"osc-form-description",dangerouslySetInnerHTML:{__html:t.config.description}}));var r=null;switch(t.config.inputType){case"hidden":r=React.createElement(w,{config:t.config,value:this.props.value||this.config.value,onChange:t.handleOnChange,ref:function(e){return t.input=e}});break;case"html-with-counter":case"htmlarea-with-counter":r=React.createElement(B,{config:ge(ge({},t.config),{},{inputType:"htmlarea"}),value:this.props.value||this.config.value,onChange:t.handleOnChange,ref:function(e){return t.input=e}});break;case"image-upload":r=React.createElement(P,{config:t.config,value:this.props.value||this.config.value,onChange:t.handleOnChange,ref:function(e){return t.input=e}});break;case"input-with-counter":case"text-with-counter":r=React.createElement(B,{config:ge({inputType:"input"},t.config),value:this.props.value||this.config.value,onChange:t.handleOnChange,ref:function(e){return t.input=e}});break;case"postcode":r=React.createElement(Y,{config:t.config,onChange:t.handleOnChange,ref:function(e){return t.input=e}});break;case"radios":r=React.createElement(J,{config:t.config,value:this.props.value||this.config.value,onChange:t.handleOnChange,ref:function(e){return t.input=e}});break;case"select":case"multiple-choice":r=React.createElement(oe,{config:t.config,value:this.props.value||this.config.value,onChange:t.handleOnChange,ref:function(e){return t.input=e}});break;case"text":r=React.createElement(le,{config:t.config,value:this.props.value||this.config.value,onChange:t.handleOnChange,ref:function(e){return t.input=e}});break;case"textarea":r=React.createElement(me,{config:t.config,value:this.props.value||this.config.value,onChange:t.handleOnChange,ref:function(e){return t.input=e}});break;case"textarea-with-counter":r=React.createElement(B,{config:ge(ge({},t.config),{},{inputType:"textarea"}),value:this.props.value||this.config.value,onChange:t.handleOnChange,ref:function(e){return t.input=e}})}return React.createElement("div",{id:t.id,ref:function(e){return t.instance=e},className:"osc-form-field"},e,n,r)}}])&&we(e.prototype,t),n&&we(e,n),o}();function Pe(e){return(Pe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Re(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function ke(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ce(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Te(e,t){return(Te=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function xe(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=Ne(i);return t=a?(e=Ne(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==Pe(r)&&"function"!=typeof r?Ie(n):r}}function Ie(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ne(e){return(Ne=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var De=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Te(e,t)}(o,a["a"]);var e,t,n,r=xe(o);function o(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var n=Ie(t=r.call(this,e));return n.defaultConfig={title:null,intro:null,fields:[]},n.config=i.a.recursive(n.defaultConfig,n.config,e.config||{}),n.state={values:e.values||{}},n.handleOnChange=n.handleOnChange.bind(Ie(t)),n.fields=[],t}return e=o,(t=[{key:"getValues",value:function(){return this.state.values}},{key:"validate",value:function(e){var t=e.showErrors,n=!0,r=null;return this.fields.forEach(function(e){e.validate({showErrors:t})||(n=!1,r=r||e)}),r&&r.instance&&r.instance.scrollIntoView&&r.instance.scrollIntoView({behavior:"smooth"}),n}},{key:"handleOnChange",value:function(e){var t=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Re(Object(n),!0).forEach(function(e){ke(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Re(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},this.state.values);t[e.name]=e.value,this.setState({values:t})}},{key:"render",value:function(){var n=this,e=null;n.config.title&&(e=React.createElement("h2",{className:"osc-form-title"},n.config.title));var t=null;n.config.intro&&(t=React.createElement("div",{className:"osc-form-intro",dangerouslySetInnerHTML:{__html:n.config.intro}}));var r=null;return n.config.fields&&n.config.fields.length&&(r=React.createElement("div",{className:"osc-form-fields"},n.config.fields.map(function(e,t){return React.createElement(Se,ke({config:e,onChange:n.handleOnChange,ref:function(e){return n.input=e},key:"osc-form-field-".concat(t)},"ref",function(e){n.fields[t]=e}))}))),React.createElement("div",{id:n.divId,className:"osc-form",ref:function(e){return n.instance=e}},e,t,r)}}])&&Ce(e.prototype,t),n&&Ce(e,n),o}();function Ae(e){return(Ae="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Fe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Le(e,t){return(Le=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ue(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=Be(i);return t=a?(e=Be(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==Ae(r)&&"function"!=typeof r?Me(n):r}}function Me(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Be(e){return(Be=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Ve=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Le(e,t)}(o,u.a.Component);var e,t,n,r=Ue(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=r.call(this,e)).state={value:t.props.value,touched:t.props.touched||!1},t.handleChange=t.handleChange.bind(Me(t)),t}return e=o,(t=[{key:"handleChange",value:function(e){var t=e.target.value;"function"==typeof this.props.onChange&&this.props.onChange(t),this.setState({value:t,touched:!0})}},{key:"doTouch",value:function(){"function"==typeof this.props.onChange&&this.props.onChange(50),this.setState({touched:!0})}},{key:"calcProgress",value:function(e,t,n){return 2*(n-e)/(t-e)-1}},{key:"render",value:function(){var t=this,e=t.state,n=e.value,r=e.touched,o=t.props,i=o.min,a=o.max,c=o.step;return u.a.createElement("div",{className:"".concat(t.props.className," osc-slider")},u.a.createElement("div",{className:"osc-slider-track-container"},u.a.createElement("div",{className:"osc-slider-track"}),u.a.createElement("div",{className:"osc-slider-track-progress-container"},u.a.createElement("div",{className:"osc-slider-track-progress",style:{transform:"scaleX("+t.calcProgress(i,a,n)+")"}})),u.a.createElement("div",{className:"osc-slider-track-dot-end osc-slider-track-dot-left"}),u.a.createElement("div",{className:"osc-slider-track-dot-start osc-slider-track-dot-center"}),u.a.createElement("div",{className:"osc-slider-track-dot-end osc-slider-track-dot-right"})),u.a.createElement("input",{type:"range",min:i,max:a,step:c,value:n,onClick:function(){r||t.doTouch()},onChange:t.handleChange,className:r?"osc-slider-input-range":"osc-slider-input-range osc-slider-untouched",ref:function(e){return t.input=e}}))}}])&&Fe(e.prototype,t),n&&Fe(e,n),o}();t.a={Form:De,FormField:Se,Hidden:w,ImageUpload:P,InputWithCounter:B,Postcode:Y,Radios:J,Select:oe,Text:le,Textarea:me,Slider:Ve}},6:function(e,t,n){"use strict";(function(i){var t,n,r="URLSearchParams"in self,o="Symbol"in self&&"iterator"in Symbol,c="FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(e){return!1}}(),a="FormData"in self,u="ArrayBuffer"in self;function s(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function l(e){return"string"!=typeof e&&(e=String(e)),e}function e(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return o&&(e[Symbol.iterator]=function(){return e}),e}function f(t){this.map={},t instanceof f?t.forEach(function(e,t){this.append(t,e)},this):Array.isArray(t)?t.forEach(function(e){this.append(e[0],e[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function p(e){if(e.bodyUsed)return i.reject(new TypeError("Already read"));e.bodyUsed=!0}function d(n){return new i(function(e,t){n.onload=function(){e(n.result)},n.onerror=function(){t(n.error)}})}function h(e){var t=new FileReader,n=d(t);return t.readAsArrayBuffer(e),n}function y(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function m(){return this.bodyUsed=!1,this._initBody=function(e){var t;(this._bodyInit=e)?"string"==typeof e?this._bodyText=e:c&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:a&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:r&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():u&&c&&((t=e)&&DataView.prototype.isPrototypeOf(t))?(this._bodyArrayBuffer=y(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):u&&(ArrayBuffer.prototype.isPrototypeOf(e)||n(e))?this._bodyArrayBuffer=y(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},c&&(this.blob=function(){var e=p(this);if(e)return e;if(this._bodyBlob)return i.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return i.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return i.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?p(this)||i.resolve(this._bodyArrayBuffer):this.blob().then(h)}),this.text=function(){var e,t,n,r=p(this);if(r)return r;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,n=d(t),t.readAsText(e),n;if(this._bodyArrayBuffer)return i.resolve(function(e){for(var t=new Uint8Array(e),n=new Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return i.resolve(this._bodyText)},a&&(this.formData=function(){return this.text().then(g)}),this.json=function(){return this.text().then(JSON.parse)},this}u&&(t=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],n=ArrayBuffer.isView||function(e){return e&&-1<t.indexOf(Object.prototype.toString.call(e))}),f.prototype.append=function(e,t){e=s(e),t=l(t);var n=this.map[e];this.map[e]=n?n+", "+t:t},f.prototype.delete=function(e){delete this.map[s(e)]},f.prototype.get=function(e){return e=s(e),this.has(e)?this.map[e]:null},f.prototype.has=function(e){return this.map.hasOwnProperty(s(e))},f.prototype.set=function(e,t){this.map[s(e)]=l(t)},f.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},f.prototype.keys=function(){var n=[];return this.forEach(function(e,t){n.push(t)}),e(n)},f.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),e(t)},f.prototype.entries=function(){var n=[];return this.forEach(function(e,t){n.push([t,e])}),e(n)},o&&(f.prototype[Symbol.iterator]=f.prototype.entries);var b=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function v(e,t){var n,r,o=(t=t||{}).body;if(e instanceof v){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new f(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,o||null==e._bodyInit||(o=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new f(t.headers)),this.method=(n=t.method||this.method||"GET",r=n.toUpperCase(),-1<b.indexOf(r)?r:n),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function g(e){var o=new FormData;return e.trim().split("&").forEach(function(e){var t,n,r;e&&(n=(t=e.split("=")).shift().replace(/\+/g," "),r=t.join("=").replace(/\+/g," "),o.append(decodeURIComponent(n),decodeURIComponent(r)))}),o}function w(e,t){t=t||{},this.type="default",this.status=void 0===t.status?200:t.status,this.ok=200<=this.status&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new f(t.headers),this.url=t.url||"",this._initBody(e)}v.prototype.clone=function(){return new v(this,{body:this._bodyInit})},m.call(v.prototype),m.call(w.prototype),w.prototype.clone=function(){return new w(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new f(this.headers),url:this.url})},w.error=function(){var e=new w(null,{status:0,statusText:""});return e.type="error",e};var O=[301,302,303,307,308];w.redirect=function(e,t){if(-1===O.indexOf(t))throw new RangeError("Invalid status code");return new w(null,{status:t,headers:{location:e}})};var E=self.DOMException;try{new E}catch(e){(E=function(e,t){this.message=e,this.name=t;var n=Error(e);this.stack=n.stack}).prototype=Object.create(Error.prototype),E.prototype.constructor=E}function _(o,a){return new i(function(r,e){var t=new v(o,a);if(t.signal&&t.signal.aborted)return e(new E("Aborted","AbortError"));var i=new XMLHttpRequest;function n(){i.abort()}i.onload=function(){var e,o,t={status:i.status,statusText:i.statusText,headers:(e=i.getAllResponseHeaders()||"",o=new f,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(e){var t,n=e.split(":"),r=n.shift().trim();r&&(t=n.join(":").trim(),o.append(r,t))}),o)};t.url="responseURL"in i?i.responseURL:t.headers.get("X-Request-URL");var n="response"in i?i.response:i.responseText;r(new w(n,t))},i.onerror=function(){e(new TypeError("Network request failed"))},i.ontimeout=function(){e(new TypeError("Network request failed"))},i.onabort=function(){e(new E("Aborted","AbortError"))},i.open(t.method,t.url,!0),"include"===t.credentials?i.withCredentials=!0:"omit"===t.credentials&&(i.withCredentials=!1),"responseType"in i&&c&&(i.responseType="blob"),t.headers.forEach(function(e,t){i.setRequestHeader(t,e)}),t.signal&&(t.signal.addEventListener("abort",n),i.onreadystatechange=function(){4===i.readyState&&t.signal.removeEventListener("abort",n)}),i.send(void 0===t._bodyInit?null:t._bodyInit)})}_.polyfill=!0,self.fetch||(self.fetch=_,self.Headers=f,self.Request=v,self.Response=w)}).call(this,n(10))},67:function(e,t,n){},8:function(e,t){var n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n}});
=======
window.OpenStadComponents=function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}return o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=26)}({0:function(e,t){e.exports=window.React},1:function(e,t,n){(function(e){function t(e,t,n){var r=n[0],o=n.length;!e&&"object"===s(r)||(r={});for(var i=0;i<o;++i){var a,c=n[i];if("object"===s(c))for(var u in c){"__proto__"!==u&&(a=e?l.clone(c[u]):c[u],r[u]=t?function e(t,n){if("object"!==s(t))return n;for(var r in n)"object"===s(t[r])&&"object"===s(n[r])?t[r]=e(t[r],n[r]):t[r]=n[r];return t}(r[u],a):a)}}return r}function s(e){return{}.toString.call(e).slice(8,-1).toLowerCase()}var n,l;n=e&&"object"==typeof e.exports&&e.exports,(l=function(e){return t(!0===e,!1,arguments)}).recursive=function(e){return t(!0===e,!0,arguments)},l.clone=function(e){var t,n,r=e,o=s(e);if("array"===o)for(r=[],n=e.length,t=0;t<n;++t)r[t]=l.clone(e[t]);else if("object"===o)for(t in r={},e)r[t]=l.clone(e[t]);return r},n?e.exports=l:window.merge=l}).call(this,n(17)(e))},11:function(e,t,n){e.exports=n(14).Promise},14:function(e,t,fe){(function(ue,se){var le;e.exports=function(){"use strict";function n(e){return typeof e==="function"||typeof e==="object"&&e!==null}function s(e){return typeof e==="function"}var e=undefined;if(!Array.isArray){e=function(e){return Object.prototype.toString.call(e)==="[object Array]"}}else{e=Array.isArray}var r=e,o=0,i=undefined,a=undefined,c=function e(t,n){w[o]=t;w[o+1]=n;o+=2;if(o===2){if(a){a(O)}else{_()}}};function t(e){a=e}function u(e){c=e}var l=typeof window!=="undefined"?window:undefined,f=l||{},p=f.MutationObserver||f.WebKitMutationObserver,d=typeof self==="undefined"&&typeof ue!=="undefined"&&{}.toString.call(ue)==="[object process]",h=typeof Uint8ClampedArray!=="undefined"&&typeof importScripts!=="undefined"&&typeof MessageChannel!=="undefined";function y(){return function(){return ue.nextTick(O)}}function m(){return function(){i(O)}}function b(){var e=0;var t=new p(O);var n=document.createTextNode("");t.observe(n,{characterData:true});return function(){n.data=e=++e%2}}function v(){var e=new MessageChannel;e.port1.onmessage=O;return function(){return e.port2.postMessage(0)}}function g(){var e=setTimeout;return function(){return e(O,1)}}var w=new Array(1e3);function O(){for(var e=0;e<o;e+=2){var t=w[e];var n=w[e+1];t(n);w[e]=undefined;w[e+1]=undefined}o=0}function E(){try{var e=le;var t=fe(16);i=t.runOnLoop||t.runOnContext;return m()}catch(e){return g()}}var _=undefined;if(d){_=y()}else if(p){_=b()}else if(h){_=v()}else if(l===undefined&&"function"==="function"){_=E()}else{_=g()}function j(e,t){var n=arguments;var r=this;var o=new this.constructor(R);if(o[P]===undefined){Y(o)}var i=r._state;if(i){(function(){var e=n[i-1];c(function(){return X(i,o,e,r._result)})})()}else{z(r,o,e,t)}return o}function S(e){var t=this;if(e&&typeof e==="object"&&e.constructor===t){return e}var n=new t(R);M(n,e);return n}var P=Math.random().toString(36).substring(16);function R(){}var k=void 0,C=1,T=2,x=new q;function I(){return new TypeError("You cannot resolve a promise with itself")}function N(){return new TypeError("A promises callback cannot return that same promise.")}function D(e){try{return e.then}catch(e){x.error=e;return x}}function A(e,t,n,r){try{e.call(t,n,r)}catch(e){return e}}function F(e,r,o){c(function(t){var n=false;var e=A(o,r,function(e){if(n){return}n=true;if(r!==e){M(t,e)}else{V(t,e)}},function(e){if(n){return}n=true;H(t,e)},"Settle: "+(t._label||" unknown promise"));if(!n&&e){n=true;H(t,e)}},e)}function L(t,e){if(e._state===C){V(t,e._result)}else if(e._state===T){H(t,e._result)}else{z(e,undefined,function(e){return M(t,e)},function(e){return H(t,e)})}}function U(e,t,n){if(t.constructor===e.constructor&&n===j&&t.constructor.resolve===S){L(e,t)}else{if(n===x){H(e,x.error)}else if(n===undefined){V(e,t)}else if(s(n)){F(e,t,n)}else{V(e,t)}}}function M(e,t){if(e===t){H(e,I())}else if(n(t)){U(e,t,D(t))}else{V(e,t)}}function B(e){if(e._onerror){e._onerror(e._result)}K(e)}function V(e,t){if(e._state!==k){return}e._result=t;e._state=C;if(e._subscribers.length!==0){c(K,e)}}function H(e,t){if(e._state!==k){return}e._state=T;e._result=t;c(B,e)}function z(e,t,n,r){var o=e._subscribers;var i=o.length;e._onerror=null;o[i]=t;o[i+C]=n;o[i+T]=r;if(i===0&&e._state){c(K,e)}}function K(e){var t=e._subscribers;var n=e._state;if(t.length===0){return}var r=undefined,o=undefined,i=e._result;for(var a=0;a<t.length;a+=3){r=t[a];o=t[a+n];if(r){X(n,r,o,i)}else{o(i)}}e._subscribers.length=0}function q(){this.error=null}var J=new q;function W(e,t){try{return e(t)}catch(e){J.error=e;return J}}function X(e,t,n,r){var o=s(n),i=undefined,a=undefined,c=undefined,u=undefined;if(o){i=W(n,r);if(i===J){u=true;a=i.error;i=null}else{c=true}if(t===i){H(t,N());return}}else{i=r;c=true}if(t._state!==k){}else if(o&&c){M(t,i)}else if(u){H(t,a)}else if(e===C){V(t,i)}else if(e===T){H(t,i)}}function $(n,e){try{e(function e(t){M(n,t)},function e(t){H(n,t)})}catch(e){H(n,e)}}var G=0;function Z(){return G++}function Y(e){e[P]=G++;e._state=undefined;e._result=undefined;e._subscribers=[]}function Q(e,t){this._instanceConstructor=e;this.promise=new e(R);if(!this.promise[P]){Y(this.promise)}if(r(t)){this._input=t;this.length=t.length;this._remaining=t.length;this._result=new Array(this.length);if(this.length===0){V(this.promise,this._result)}else{this.length=this.length||0;this._enumerate();if(this._remaining===0){V(this.promise,this._result)}}}else{H(this.promise,ee())}}function ee(){return new Error("Array Methods must be provided an Array")}function te(e){return new Q(this,e).promise}function ne(o){var i=this;if(r(o))return new i(function(e,t){for(var n=o.length,r=0;r<n;r++)i.resolve(o[r]).then(e,t)});else return new i(function(e,t){return t(new TypeError("You must pass an array to race."))})}function re(e){var t=new this(R);return H(t,e),t}function oe(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function ie(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function ae(e){this[P]=Z();this._result=this._state=undefined;this._subscribers=[];if(R!==e){typeof e!=="function"&&oe();this instanceof ae?$(this,e):ie()}}function ce(){var e=undefined;if(typeof se!=="undefined"){e=se}else if(typeof self!=="undefined"){e=self}else{try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}}var t=e.Promise;if(t){var n=null;try{n=Object.prototype.toString.call(t.resolve())}catch(e){}if(n==="[object Promise]"&&!t.cast){return}}e.Promise=ae}return Q.prototype._enumerate=function(){for(var e=this.length,t=this._input,n=0;this._state===k&&n<e;n++)this._eachEntry(t[n],n)},Q.prototype._eachEntry=function(t,e){var n,r,o=this._instanceConstructor,i=o.resolve;i===S?(n=D(t))===j&&t._state!==k?this._settledAt(t._state,e,t._result):"function"!=typeof n?(this._remaining--,this._result[e]=t):o===ae?(U(r=new o(R),t,n),this._willSettleAt(r,e)):this._willSettleAt(new o(function(e){return e(t)}),e):this._willSettleAt(i(t),e)},Q.prototype._settledAt=function(e,t,n){var r=this.promise;r._state===k&&(this._remaining--,e===T?H(r,n):this._result[t]=n),0===this._remaining&&V(r,this._result)},Q.prototype._willSettleAt=function(e,t){var n=this;z(e,void 0,function(e){return n._settledAt(C,t,e)},function(e){return n._settledAt(T,t,e)})},ae.all=function(e){return new Q(this,e).promise},ae.race=function(o){var i=this;return r(o)?new i(function(e,t){for(var n=o.length,r=0;r<n;r++)i.resolve(o[r]).then(e,t)}):new i(function(e,t){return t(new TypeError("You must pass an array to race."))})},ae.resolve=S,ae.reject=function(e){var t=new this(R);return H(t,e),t},ae._setScheduler=function(e){a=e},ae._setAsap=function(e){c=e},ae._asap=c,ae.prototype={constructor:ae,then:j,catch:function(e){return this.then(null,e)}},ce(),ae.polyfill=ce,ae.Promise=ae}()}).call(this,fe(15),fe(9))},15:function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function c(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var u,s=[],l=!1,f=-1;function p(){l&&u&&(l=!1,u.length?s=u.concat(s):f=-1,s.length&&d())}function d(){if(!l){var e=c(p);l=!0;for(var t=s.length;t;){for(u=s,s=[];++f<t;)u&&u[f].run();f=-1,t=s.length}u=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function y(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new h(e,t)),1!==s.length||l||c(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},16:function(e,t){},17:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},2:function(e,t,n){"use strict";n(6),n(0),n(3),n(32);var r=n(1),o=n.n(r);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){var t,n,r=window.location.search.match(/(?:\?|&)jwt=([A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*)(?:&|$)/);return r&&(t=r[1],u.set("osc-jwt",t),"?"==(n=document.location.search.replace("jwt="+t,""))&&(n=""),document.location.search=n),t=u.get("osc-jwt"),e&&e.jwt&&(t=e.jwt,u.set("osc-jwt",t)),t}var c={get:function(e){var t=sessionStorage.getItem(e);try{t=JSON.parse(t)}catch(e){}return t},set:function(e,t){if("string"==typeof e){if(void 0===t&&(t=""),"object"==i(t))try{t=JSON.stringify(t)}catch(e){}sessionStorage.setItem(e,t)}},remove:function(e){sessionStorage.removeItem(e)}},u=c,s={admin:["admin","moderator","editor","member","anonymous","all"],moderator:["moderator","editor","member","anonymous","all"],editor:["editor","member","anonymous","all"],member:["member","anonymous","all"],anonymous:["anonymous","all"],all:["all"],owner:null};function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var f={get:function(e){var t=localStorage.getItem(e);try{t=JSON.parse(t)}catch(e){}return t},set:function(e,t){if("string"==typeof e){if(void 0===t&&(t=""),"object"==l(t))try{t=JSON.stringify(t)}catch(e){}localStorage.setItem(e,t)}},remove:function(e){localStorage.removeItem(e)}},p={api:{getHeaders:function(e){var t=o.a.recursive({"Content-type":"application/json"},e&&e.api&&e.api.headers),n=a();return n&&(t=o.a.recursive({"X-Authorization":"Bearer "+n},t)),t}},user:{getUser:function(e,t){t=t||function(e){console.log("getUser: next not defined."),console.log(e)};var n=e.user||u.get("osc-user");if(n)return t(null,n);var r=a(e);if(!r)return t(null,{});var o="".concat(e.api.url,"/oauth/site/").concat(e.siteId,"/me"),i={"X-Authorization":"Bearer ".concat(r),"Content-Type":"application/json"};fetch(o,{headers:i}).then(function(e){if(!e.ok)throw new Error("Error on fetch");return e.json()}).then(function(e){u.set("osc-user",e),t(null,e)}).catch(function(e){t(e)})},getJWT:a,logout:function(e,t){t=t||function(e){console.log("logout: next not defined.")};var n=e.user||u.get("osc-user");if(n)return t(null,n);var r=a(e);if(!r)return t(null,{});var o=e.api.url+"/oauth/site/"+e.siteId+"/me";fetch(o,{headers:{"X-Authorization":"Bearer "+r,"Content-Type":"application/json"}}).then(function(e){if(!e.ok)throw new Error("Error on fetch");return e.json()}).then(function(e){u.set("osc-user",e),t(null,e)}).catch(function(e){t(e)})},hasRole:function(e,t){var n=e.role;return Object.keys(s).includes(n)||(n="all"),s[n].includes(t)}},localStorage:f,sessionStorage:u,reactTemplate:function(e){var t=e.html,n=void 0===t?"":t,r=e;delete r.html;var o=0;return Object.keys(r).forEach(function(e){var t=new RegExp("^((?:.|\n|\r)*)\\{".concat(e,"\\}((?:.|\n|\r)*)$"),"g").exec(n);t&&(o++,n=React.createElement("span",null,React.createElement("span",{dangerouslySetInnerHTML:{__html:t[1]}}),r[e],React.createElement("span",{dangerouslySetInnerHTML:{__html:t[2]}})))}),0==o&&(n=React.createElement("span",{dangerouslySetInnerHTML:{__html:n}})),n}};t.a=p},26:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return F}),n.d(t,"Reactions",function(){return F});n(6);var r=n(0),l=n.n(r),o=n(3),i=n.n(o),a=(n(69),n(1)),c=n.n(a),u=n(4),f=n(2),s=n(5);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=b(i);return t=a?(e=b(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==p(r)&&"function"!=typeof r?m(n):r}}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(o,u["a"]);var e,t,n,r=y(o);function o(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var n=m(t=r.call(this,e));return n.defaultConfig={argumentId:null,api:{url:null,headers:null},user:{},descriptionMinLength:30,descriptionMaxLength:500,requiredUserRole:"member",formIntro:"",placeholder:""},n.config=c.a.recursive(n.defaultConfig,e.config||{}),n.config.loginUrl=n.config.loginUrl||"/oauth/login?returnTo="+encodeURIComponent(document.location.href),n.state={description:n.config.description||"",isValid:!1,isBusy:!1},t}return e=o,(t=[{key:"handleOnChange",value:function(e){(e=e||{}).description&&(e.isValid=this.description.isValid()),this.setState(e)}},{key:"canSubmit",value:function(){var e=this.config.requiredUserRole,t=this.props.user&&this.props.user.role;return"anonymous"==e&&t||"member"==e&&("member"==t||"admin"==t)||"admin"==e&&"admin"==t}},{key:"submitForm",value:function(){var o=this;o.setState({isBusy:!0},function(){if(o.description.validate({showWarning:!0})){if(!o.canSubmit())return alert("Je bent niet ingelogd");var e="".concat(o.config.api&&o.config.api.url,"/api/site/").concat(o.config.siteId,"/idea/").concat(o.config.ideaId,"/argument").concat(o.config.argumentId?"/".concat(o.config.argumentId):""),t=f.a.api.getHeaders(o.config),n=o.config.argumentId?"PUT":"POST",r={parentId:o.config.parentId,sentiment:o.config.sentiment,description:o.state.description};fetch(e,{method:n,headers:t,body:JSON.stringify(r)}).then(function(e){if(e.ok)return e.json();throw e.text()}).then(function(n){"function"==typeof o.config.onSubmit&&o.config.onSubmit({description:o.state.description}),o.setState({description:"",isBusy:!1,isValid:!1},function(){var e,t;o.description.handleOnChange({value:""}),o.config.argumentId?(e=new CustomEvent("osc-reaction-edited",{detail:n}),document.dispatchEvent(e)):(t=new CustomEvent("osc-new-reaction-stored",{detail:n}),document.dispatchEvent(t))})}).catch(function(e){e.then(function(e){return alert(e),console.log(e)}),o.setState({isBusy:!1,isValid:!1})})}else o.setState({isBusy:!1,isValid:!1})})}},{key:"render",value:function(){var t=this,e={descriptionMinLength:t.config.descriptionMinLength||30,descriptionMaxLength:t.config.descriptionMaxLength||500},n=null;t.config.formIntro&&(n=l.a.createElement("div",{className:"osc-intro"},t.config.formIntro));var r=null,r=t.canSubmit()?l.a.createElement("div",{className:"osc-align-right-container"},l.a.createElement("button",{onClick:function(){t.state.isBusy||t.submitForm()},className:"osc-button-blue".concat(!t.state.isValid||t.state.isBusy?" osc-disabled":"")},"Verzenden")):l.a.createElement("div",{className:"osc-align-right-container"},l.a.createElement("button",{onClick:function(){f.a.localStorage.set("osc-reactions-login-pending",!0),document.location.href=t.config.loginUrl},className:"osc-button-blue osc-not-logged-in-button"},"Inloggen"));return l.a.createElement("div",{id:t.divId,className:"",ref:function(e){return t.instance=e}},n,l.a.createElement(s.a.InputWithCounter,{disabled:!this.canSubmit()||null,config:{inputType:"textarea",minLength:e.descriptionMinLength,maxLength:e.descriptionMaxLength,placeholder:t.config.placeholder},value:t.state.description,onChange:function(e){return t.handleOnChange({description:e.value})},ref:function(e){return t.description=e}}),r)}}])&&d(e.prototype,t),n&&d(e,n),o}();function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function O(o){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?w(Object(i),!0).forEach(function(e){var t,n,r;t=o,r=i[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):w(Object(i)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(i,e))})}return o}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=P(i);return t=a?(e=P(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==g(r)&&"function"!=typeof r?S(n):r}}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var R=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(s,u["a"]);var e,t,n,r=j(s);function s(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s);var n=S(t=r.call(this,e));return n.id=e.id||"osc-reaction-".concat(parseInt(1e6*Math.random())),n.defaultConfig={siteId:null,ideaId:null,title:null,descriptionMinLength:30,descriptionMaxLength:500,api:{url:null,headers:null},requiredUserRole:"member"},n.config=Object.assign(n.defaultConfig,e.config||{}),n.state={user:e.user,isMenuActive:!1,isReplyFromActive:!1,editMode:!1},t}return e=s,(t=[{key:"componentDidMount",value:function(){var t=this;this.storedListener=document.addEventListener("osc-new-reaction-stored",function(e){t.onNewReactionStored(e.detail)}),this.editedListener=document.addEventListener("osc-reaction-edited",function(e){t.onReactionEdited(e.detail)})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("osc-new-reaction-stored",this.storedListener),document.removeEventListener("osc-reaction-edited",this.editedListener)}},{key:"showMenu",value:function(){this.setState({isMenuActive:!0})}},{key:"toggleReplyForm",value:function(){this.setState({isReplyFromActive:!this.state.isReplyFromActive})}},{key:"toggleEditForm",value:function(){this.setState({editMode:!this.state.editMode})}},{key:"canEdit",value:function(){return this.props.data.can.edit}},{key:"canDelete",value:function(){return this.props.data.can.delete}},{key:"canLike",value:function(){if(this.config.isClosed)return!1;var e=this.config.requiredUserRole,t=this.props.user&&this.props.user.role;return"anonymous"==e&&t||"member"==e&&("member"==t||"admin"==t)||"admin"==e&&"admin"==t}},{key:"canReply",value:function(){return this.props.data.can.reply}},{key:"submitDelete",value:function(){var n=this;if(!n.canDelete())return alert("U kunt deze reactie niet verwijderen");var e="".concat(n.config.api&&n.config.api.url,"/api/site/").concat(n.config.siteId,"/idea/").concat(n.config.ideaId,"/argument/").concat(n.props.data.id),t=f.a.api.getHeaders(n.config);fetch(e,{method:"DELETE",headers:t,body:JSON.stringify({})}).then(function(e){if(e.ok)return e.json();throw e.text()}).then(function(e){n.setState({isDeleted:!0});var t=new CustomEvent("osc-reaction-deleted",{detail:{ideaId:n.config.ideaId}});document.dispatchEvent(t)}).catch(function(e){console.log(e),e.then(function(e){return console.log(e)})})}},{key:"submitLike",value:function(){var t=this;if(!t.canLike())return alert("U kunt deze reactie niet liken");var e="".concat(t.config.api&&t.config.api.url,"/api/site/").concat(t.config.siteId,"/idea/").concat(t.config.ideaId,"/argument/").concat(t.props.data.id,"/vote"),n=f.a.api.getHeaders(t.config);fetch(e,{method:"POST",headers:n,body:JSON.stringify({})}).then(function(e){if(e.ok)return e.json();throw e.text()}).then(function(e){t.setState({yes:e.yes,hasUserVoted:e.hasUserVoted})}).catch(function(e){console.log(e),e.then(function(e){return console.log(e)})})}},{key:"onNewReactionStored",value:function(){this.setState({isMenuActive:!1,isReplyFromActive:!1})}},{key:"onReactionEdited",value:function(e){e.id==this.props.data.id&&this.setState({editMode:!1,isMenuActive:!1})}},{key:"render",value:function(){var n=this,e=n.props.data||{can:{}};if(e.isDeleted)return null;var t=null;n.canEdit()&&n.canDelete()&&(t=l.a.createElement("div",{className:"osc-reaction-menu".concat(n.state.isMenuActive?" osc-reaction-hamburger-active":""),onClick:function(){n.showMenu()}},l.a.createElement("a",{className:"osc-reaction-delete",title:"Argument verwijderen",onClick:function(){confirm("Weet je het zeker?")&&n.submitDelete()}}),l.a.createElement("a",{className:"osc-reaction-edit",title:"Argument bewerken",onClick:function(){return n.toggleEditForm()}})));var r=l.a.createElement("div",{className:"osc-reaction-description"},e.description);n.state.editMode&&(r=l.a.createElement("div",{className:"osc-reaction-description"},l.a.createElement(v,{config:O(O({},n.config),{},{description:e.description,argumentId:e.id}),user:n.state.user,ref:function(e){return n.editForm=e}})));var o=null;e.parentId||(o=l.a.createElement("a",{className:"osc-reaction-like-button".concat((void 0!==n.state.hasUserVoted?n.state.hasUserVoted:e.hasUserVoted)?" osc-reaction-like-button-hasvoted":""),onClick:function(){return n.submitLike()}},"Mee eens (",l.a.createElement("span",null,0|(void 0!==n.state.yes?n.state.yes:e.yes)),")"));var i,a=null,c=null;n.canReply()&&!n.config.isClosed&&(a=l.a.createElement("a",{onClick:function(){return n.toggleReplyForm()},className:"osc-reply-button"},"Reageren"),n.state.isReplyFromActive&&((i=O(O({},n.config),{},{parentId:e.id})).formIntro="",c=l.a.createElement("div",{id:"osc-reaction-".concat(e.id),className:"osc-reply"},l.a.createElement(v,{config:i,user:n.state.user,ref:function(e){return n.editForm=e}}))));var u=null;return e.reactions&&e.reactions.length&&(u=l.a.createElement("ul",{className:"osc-reactions-list"},e.reactions.map(function(e){var t="osc-reaction-key-".concat(e.id||parseInt(1e6*Math.random()));return l.a.createElement("li",{key:t},l.a.createElement(s,{config:n.config,className:"osc-reply",user:n.state.user,data:e}))}))),l.a.createElement("div",null,l.a.createElement("div",{id:"osc-reaction-".concat(e.id),className:n.props.className||"osc-reaction"},t,l.a.createElement("div",{className:"osc-reaction-user"},e.user.nickName||e.user.fullName||"".concat(e.user.firstName," ").concat(e.user.lastName)),l.a.createElement("div",{className:"osc-reaction-date"},e.createDateHumanized),r,o,a),c,u)}}])&&E(e.prototype,t),n&&E(e,n),s}();function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function T(o){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?C(Object(i),!0).forEach(function(e){var t,n,r;t=o,r=i[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):C(Object(i)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(i,e))})}return o}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function N(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=A(i);return t=a?(e=A(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==k(r)&&"function"!=typeof r?D(n):r}}function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var F=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(o,u["a"]);var e,t,n,r=N(o);function o(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var n=D(t=r.call(this,e));return n.id=e.id||"osc-reactions-".concat(parseInt(1e6*Math.random())),n.defaultConfig={scrollToNewReaction:!0,isClosed:!1,closedText:"De reactiemogelijkheid is gesloten",sentiment:void 0,siteId:null,ideaId:null,title:null,descriptionMinLength:30,descriptionMaxLength:500,user:null,loginUrl:"",api:{url:null,headers:null},requiredUserRole:"member",placeholder:"",formIntro:""},n.config=c.a.recursive(n.defaultConfig,n.config,e.config||{}),n.state={user:n.config.user,reactions:[]},t}return e=o,(t=[{key:"componentDidMount",value:function(){var n=this;n.state.user&&n.state.user.role?n.fetchData():f.a.user.getUser({user:n.config.user,jwt:n.config.jwt,siteId:n.config.siteId,api:n.config.api},function(e,t){n.setState({user:t},function(){n.fetchData()})}),this.storedListener=document.addEventListener("osc-new-reaction-stored",function(e){n.onNewReactionStored(e.detail)}),this.editedListener=document.addEventListener("osc-reaction-edited",function(e){n.onReactionEdited(e.detail)}),this.deletedListener=document.addEventListener("osc-reaction-deleted",function(e){n.onReactionDeleted(e.detail)})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("osc-new-reaction-stored",this.storedListener),document.removeEventListener("osc-reaction-edited",this.editedListener),document.removeEventListener("osc-reaction-deleted",this.deletedListener)}},{key:"fetchData",value:function(n){var r=this,e="".concat(r.config.api&&r.config.api.url,"/api/site/").concat(r.config.siteId,"/idea/").concat(r.config.ideaId,"/argument?sentiment=").concat(r.config.sentiment,"&withUser=1&withUserVote=1&withVoteCount=1&includeReactionsOnReactions=1"),t=f.a.api.getHeaders(r.config);fetch(e,{headers:t}).then(function(e){if(e.ok)return e.json();throw e.text()}).then(function(e){var t=T({},r.state);t.reactions=e,t.reactions.sort(function(e,t){return e.createdAt<t.createdAt}),r.setState(t,function(){if(n)return n()})}).catch(function(e){console.log(e),e.then(function(e){return console.log(e)})})}},{key:"onNewReactionStored",value:function(e){var t=this;this.fetchData(function(){t.config.scrollToNewReaction&&document.getElementById("osc-reaction-".concat(e.id))&&document.getElementById("osc-reaction-".concat(e.id)).scrollIntoView()})}},{key:"onReactionEdited",value:function(){this.fetchData()}},{key:"onReactionDeleted",value:function(){this.fetchData()}},{key:"render",value:function(){var t=this,n=this,e=l.a.createElement("ul",{className:"osc-reactions-list"},n.state.reactions.map(function(e){var t="osc-reaction-key-".concat(e.id||parseInt(1e6*Math.random()));return l.a.createElement("li",{key:t},l.a.createElement(R,{config:n.config,user:n.state.user,data:T({},e)}))})),r=n.config.title?l.a.createElement("h3",null,n.config.title):null,o=l.a.createElement(v,{config:n.config,user:n.state.user});return n.config.isClosed&&(o=n.config.closedText?l.a.createElement("div",{className:"osc-closed-text"},n.config.closedText):null),l.a.createElement("div",{id:this.id,className:n.props.className||"osc-reactions",ref:function(e){t.instance=e}},r,o,e,l.a.createElement("br",null),l.a.createElement("br",null))}}])&&x(e.prototype,t),n&&x(e,n),o}();F.renderElement=function(e,t){var n=e.attributes;i.a.render(l.a.createElement(F,{attributes:n,config:t}),e)}},3:function(e,t){e.exports=window.ReactDOM},32:function(e,t,n){},33:function(e,t,n){},4:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(1),a=n.n(r),o=n(0),c=n.n(o);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=d(i);return t=a?(e=d(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==u(r)&&"function"!=typeof r?p(n):r}}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var i=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(i,c.a.Component);var e,t,n,o=f(i);function i(n){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);var r=p(e=o.call(this,n));if(n.attributes&&Object.keys(n.attributes).forEach(function(e){var t=n.attributes[e];r[t.name]=t.value}),r.config=r.config||n.config,"string"==typeof r.config)try{r.config=JSON.parse(r.config)}catch(e){}return r.config=a.a.recursive({siteId:null,api:{url:null,headers:null,isUserLoggedIn:!1},user:{}},r.config,r.props.config||{}),r.divId=r.divId||r.config&&r.config.divId||n.id||"openstad-component-".concat(parseInt(1e8*Math.random())),window[r.divId]=r,e}return e=i,(t=[{key:"componentDidMount",value:function(){}}])&&s(e.prototype,t),n&&s(e,n),i}()},5:function(e,t,n){"use strict";n(6);var r=n(0),u=n.n(r),o=(n(3),n(33),n(1)),i=n.n(o),a=n(4);n(2);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=d(i);return t=a?(e=d(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==c(r)&&"function"!=typeof r?p(n):r}}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(o,a["a"]);var e,t,n,r=f(o);function o(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var n=p(t=r.call(this,e));return n.defaultConfig={choices:[],name:"",placeholder:"",disabled:!1,required:!1},n.config=i.a.recursive(n.defaultConfig,n.config,e.config||{}),n.state={value:e.value,error:null},t.onChange=e.onChange,t}return e=o,(t=[{key:"validate",value:function(e){var t=e.showErrors,n=!this.config.required||!!this.state.value,r=!n&&t?!0:"";return this.setState({isValid:n,error:r}),n}},{key:"handleOnChange",value:function(e){var t=this;e=e||{},t.setState(e,function(){t.validate({})}),"function"==typeof t.onChange&&t.onChange({name:t.config.name,value:e.value})}}])&&s(e.prototype,t),n&&s(e,n),o}();function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=g(i);return t=a?(e=g(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==y(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var w=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(o,h);var e,t,n,r=v(o);function o(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return e=o,(t=[{key:"render",value:function(){var t=this;return u.a.createElement("input",{type:"hidden",value:this.props.value,disabled:this.props.disabled,placeholder:this.config.placeholder,onChange:function(){return t.handleOnChange({value:t.input.value})},ref:function(e){return t.input=e}})}}])&&m(e.prototype,t),n&&m(e,n),o}();function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=S(i);return t=a?(e=S(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==O(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var P=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(o,h);var e,t,n,r=j(o);function o(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);(t=r.call(this,e)).config=i.a.recursive({allowMultiple:!1,imageserver:{process:"",fetch:""}},t.props.config,t.config||{});var n=[];return(e.value||[]).forEach(function(e){n.push({source:{url:e},options:{type:"local",file:{name:e},metadata:{poster:e}}})}),t.state={uploadedFiles:n},t}return e=o,(t=[{key:"componentDidMount",value:function(){this._loadedFiles=0,this.files=["https://unpkg.com/filepond/dist/filepond.js","https://unpkg.com/filepond-polyfill/dist/filepond-polyfill.js","https://unpkg.com/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.js","https://unpkg.com/filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.js","https://unpkg.com/filepond-plugin-file-validate-size/dist/filepond-plugin-file-validate-size.js","https://unpkg.com/filepond-plugin-file-poster/dist/filepond-plugin-file-poster.js"],this.loadNextFile()}},{key:"loadNextFile",value:function(){var e,t=this,n=t.files[t._loadedFiles];n&&((e=document.createElement("script")).src=n,e.async=!0,e&&(e.onload=function(){t.loadNextFile()},document.body.appendChild(e))),t._loadedFiles==t.files.length&&t.fileUploaderInit(),t._loadedFiles++}},{key:"validate",value:function(){var t=!0;return this.imageuploader&&this.imageuploader.getFiles&&this.imageuploader.getFiles().forEach(function(e){e.serverId||(t=!1)}),t}},{key:"fileUploaderInit",value:function(){var e,t=this,n=document.querySelector(".osc-image-upload-container");n&&(FilePond.registerPlugin(FilePondPluginImagePreview),FilePond.registerPlugin(FilePondPluginFileValidateSize),FilePond.registerPlugin(FilePondPluginFileValidateType),FilePond.registerPlugin(FilePondPluginFilePoster),e={acceptedFileTypes:["image/*"],allowFileSizeValidation:!0,allowMultiple:this.config.allowMultiple,allowReorder:!0,styleItemPanelAspectRatio:1,maxFileSize:"8mb",name:"image",maxFiles:5,allowBrowse:!0,files:this.state.uploadedFiles,server:{process:this.config.imageserver.process,fetch:this.config.imageserver.fetch},imageResizeTargetWidth:80,imageResizeTargetHeight:80,imageCropAspectRatio:"1:1",labelIdle:"Sleep afbeelding(en) naar deze plek of <span class='filepond--label-action'>KLIK HIER</span>",labelInvalidField:"Field contains invalid files",labelFileWaitingForSize:"Wachtend op grootte",labelFileSizeNotAvailable:"Grootte niet beschikbaar",labelFileCountSingular:"Bestand in lijst",labelFileCountPlural:"Bestanden in lijst",labelFileLoading:"Laden",labelFileAdded:"Toegevoegd",labelFileLoadError:"Fout bij het uploaden",labelFileRemoved:"Verwijderd",labelFileRemoveError:"Fout bij het verwijderen",labelFileProcessing:"Laden",labelFileProcessingComplete:"Afbeelding geladen",labelFileProcessingAborted:"Upload cancelled",labelFileProcessingError:"Error during upload",labelFileProcessingRevertError:"Error during revert",labelTapToCancel:"tap to cancel",labelTapToRetry:"tap to retry",labelTapToUndo:"tap to undo",labelButtonRemoveItem:"Verwijderen",labelButtonAbortItemLoad:"Abort",labelButtonRetryItemLoad:"Retry",labelButtonAbortItemProcessing:"Verwijder",labelButtonUndoItemProcessing:"Undo",labelButtonRetryItemProcessing:"Retry",labelButtonProcessItem:"Upload"},t.imageuploader=FilePond.create(n,e),document.querySelector(".filepond--root"),document.querySelector(".filepond--root").addEventListener("FilePond:processfile",function(e){e.detail&&e.detail.error&&console.log("Error uploding file: ",e.detail),t.fileUploaderUpdateCurrentInput()}),document.querySelector(".filepond--root").addEventListener("FilePond:removefile",function(e){e.detail&&e.detail.error&&console.log("Error uploding file: ",e.detail),t.fileUploaderUpdateCurrentInput()}),t.state.formfields&&t.imageuploader.addFiles(t.state.formfields.images))}},{key:"fileUploaderUpdateCurrentInput",value:function(){var n=this;n.state.value=[],this.imageuploader&&this.imageuploader.getFiles&&this.imageuploader.getFiles().forEach(function(e){try{var t="string"==typeof e.serverId?JSON.parse(e.serverId):e.serverId;n.state.value.push(t.url)}catch(e){console.log(e)}}),n.props.onChange({name:n.config.name,value:n.state.value})}},{key:"fileUploaderUploaderAddImages",value:function(e){this.imageuploader&&this.imageuploader.addFiles(e)}},{key:"render",value:function(){var e=null;return this.state.error&&(e=u.a.createElement("div",{className:"osc-form-error"},"Je hebt nog geen afbeelding geupload")),u.a.createElement("div",{className:"osc-image-upload-container"},u.a.createElement("input",{type:"file",className:"imageUploader-gebiedstool filepond-gebiedstool"}),e)}}])&&E(e.prototype,t),n&&E(e,n),o}();function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function T(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=I(i);return t=a?(e=I(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==R(r)&&"function"!=typeof r?x(n):r}}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var N=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(o,u.a.Component);var e,t,n,r=T(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=r.call(this,e)).state={value:t.props.value},t.onKeyUpx=t.onKeyUpx.bind(x(t)),t}return e=o,(t=[{key:"componentDidMount",value:function(){var e=this.props.value,e=this.filterHTML(e);this.input.innerHTML=e}},{key:"filterHTML",value:function(e){return e=(e=(e=e.replace(/<(\/?\s*(?:a [^>]+|a|b|i|strong|em|p|div|br|ul|li)\s*\/?)>/g,"[[[$1]]]")).replace(/<[^>]+>/g,"")).replace(/\[\[\[([^\]]+)\]\]\]/g,"<$1>")}},{key:"executeAction",value:function(e,t,n){e.preventDefault(),e.stopPropagation(),document.execCommand(t,!1,n),this.onKeyUp()}},{key:"onFocus",value:function(e){this.props.onFocus&&this.props.onFocus(e)}},{key:"onBlur",value:function(e){this.props.onBlur&&this.props.onBlur(e),this.props.onChange&&this.props.onChange({value:this.state.value})}},{key:"onKeyUpx",value:function(){var e=this.input.innerHTML,e=this.filterHTML(e);this.setState({value:e}),this.props.onKeyUp&&this.props.onKeyUp(e)}},{key:"render",value:function(){var t=this;return u.a.createElement("div",{className:"osc-html-editor"},u.a.createElement("div",{className:"osc-html-editor-buttons"},u.a.createElement("div",{className:"osc-html-editor-button osc-html-editor-button-bold",onMouseDown:function(e){return t.executeAction(e,"bold")}}," "),u.a.createElement("div",{className:"osc-html-editor-button osc-html-editor-button-italic",onMouseDown:function(e){return t.executeAction(e,"italic")}}," "),u.a.createElement("div",{className:"osc-html-editor-button osc-html-editor-button-insertunorderedlist",onMouseDown:function(e){return t.executeAction(e,"insertunorderedlist")}}," "),u.a.createElement("div",{className:"osc-html-editor-button osc-html-editor-button-createlink",onMouseDown:function(e){return t.executeAction(e,"createlink",prompt("Lank naar","http://"))}}," ")),u.a.createElement("div",{className:"osc-html-editor-content",contentEditable:!0,onFocus:function(e){return t.onFocus(e)},onBlur:function(e){return t.onBlur(e)},onKeyUp:function(){return t.onKeyUpx()},ref:function(e){return t.input=e}}))}}])&&k(e.prototype,t),n&&k(e,n),o}();function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=M(i);return t=a?(e=M(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==D(r)&&"function"!=typeof r?U(n):r}}function U(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var B=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(o,u.a.Component);var e,t,n,r=L(o);function o(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var n=U(t=r.call(this,e));return n.id=e.id||"osc-formfields-plaintext-with-counter-"+parseInt(1e6*Math.random()),n.defaultConfig={name:"tekst",inputType:"input",minLength:5,maxLength:10,placeholder:""},n.config=i.a.recursive(n.defaultConfig,n.config,e.config||{}),n.state={focused:!1,value:e.value||"",valueLength:e.value&&e.value.length||0},n.key=e.useKey||(n.id||"osc-input-with-counter-")+parseInt(1e7*Math.random),t.onChange=e.onChange,n.handleOnChange=n.handleOnChange.bind(U(t)),n.onInputFocus=n.onInputFocus.bind(U(t)),n.onInputBlur=n.onInputBlur.bind(U(t)),n.onInputKeyUp=n.onInputKeyUp.bind(U(t)),t}return e=o,(t=[{key:"isValid",value:function(){var e={isValid:!0,warning:null};return this.state.valueLength<this.config.minLength&&(e.warning="De tekst is te kort",e.isValid=!1),this.state.valueLength>this.config.maxLength&&(e.warning="De tekst is te lang",e.isValid=!1),this.setState(e),e.isValid}},{key:"validate",value:function(){return this.setState({showWarning:!0}),this.isValid()}},{key:"handleOnChange",value:function(e){e=e||{},this.setState(e),"function"==typeof this.onChange&&this.onChange({name:this.config.name,value:e.value})}},{key:"onInputFocus",value:function(){var e={focused:!0,showWarning:!1};this.setState(e)}},{key:"onInputBlur",value:function(){var e={focused:!1};this.setState(e)}},{key:"onInputKeyUp",value:function(e){var t={};t.value=e||this.input.value;var n=t.value.length;t.valueLength=n,t.isValid=n>=this.config.minLength&&n<=this.config.maxLength,this.setState(t)}},{key:"render",value:function(){var e,t=this,n=this,r=null,o=null;n.state.focused&&(r=n.state.valueLength<n.config.minLength?u.a.createElement("div",{className:"osc-form-counter osc-form-error"},"Nog minimaal ",u.a.createElement("span",{className:""},n.config.minLength-n.state.valueLength)," tekens"):(e=n.state.valueLength>n.config.maxLength?"osc-form-error":"",u.a.createElement("div",{className:"osc-form-counter "+e},"Je hebt nog ",u.a.createElement("span",{className:""},n.config.maxLength-n.state.valueLength)," tekens over."))),n.state.showWarning&&n.state.warning&&(o=u.a.createElement("div",{className:"osc-form-warning",ref:function(e){return t["form-warning"]=e}},n.state.warning));var i=null;switch(n.config.inputType){case"htmlarea":i=u.a.createElement(N,{value:this.state.value,onChange:n.handleOnChange,onFocus:n.onInputFocus,onBlur:n.onInputBlur,onKeyUp:n.onInputKeyUp});break;case"textarea":i=u.a.createElement("textarea",{key:n.key,ref:function(e){return n.input=e},value:this.state.value,disabled:this.props.disabled,placeholder:this.config.placeholder,onChange:function(){return n.handleOnChange({value:n.input.value})},onKeyUp:function(){return n.onInputKeyUp()},onFocus:function(e){return n.onInputFocus(e)},onBlur:function(e){return n.onInputBlur(e)}});break;case"input":default:i=u.a.createElement("input",{key:n.key,ref:function(e){return n.input=e},value:this.state.value,disabled:this.props.disabled,placeholder:this.config.placeholder,onChange:function(){return n.handleOnChange({value:n.input.value})},onKeyUp:function(){return n.onInputKeyUp()},onFocus:function(e){return n.onInputFocus(e)},onBlur:function(e){return n.onInputBlur(e)}})}return u.a.createElement("div",{id:n.id,ref:function(e){return n.instance=e},className:"osc-input-with-counter"},u.a.createElement("div",{className:"osc-form-feedback"},i,r,o))}}])&&A(e.prototype,t),n&&A(e,n),o}();function V(e){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function K(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=q(i);return t=a?(e=q(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==V(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function q(e){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var J=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(o,h);var e,t,n,r=K(o);function o(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return e=o,(t=[{key:"render",value:function(){var t=this,e=null;return t.state.error&&(e=u.a.createElement("div",{className:"osc-form-error"},"Je hebt nog geen keuze gemaakt")),u.a.createElement("div",{className:"osc-radios"},t.config.choices.map(function(e){return e.dangerousDescription?u.a.createElement("div",{className:"osc-radio-container",key:e.value},u.a.createElement("div",{className:"osc-radio-input".concat(t.state.value==e.value?" osc-radio-input-checked":"")},u.a.createElement("input",{type:"radio",name:t.divId,value:e.value,onChange:function(){return t.handleOnChange({value:e.value})}})),u.a.createElement("div",{className:"osc-radio-text",dangerouslySetInnerHTML:{__html:e.dangerousDescription}})):u.a.createElement("div",{className:"osc-radio-container",key:e.value},u.a.createElement("div",{className:"osc-radio-input".concat(t.state.value==e.value?" osc-radio-input-checked":"")},u.a.createElement("input",{type:"radio",name:t.divId,value:e.value,onChange:function(){return t.handleOnChange({value:e.value})}})),u.a.createElement("div",{className:"osc-radio-text"},e.dangerousDescription?null:e.description||e.title||e.value))}),e)}}])&&H(e.prototype,t),n&&H(e,n),o}();function W(e){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function X(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $(e,t){return($=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function G(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=Z(i);return t=a?(e=Z(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==W(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function Z(e){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Y=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$(e,t)}(o,h);var e,t,n,r=G(o);function o(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return e=o,(t=[{key:"validate",value:function(e){var t=e.showErrors,n=!0,r="";return this.state.value&&this.state.value.match(/^\s*\d{4}\s*[a-zA-Z][a-zA-Z]\s*$/)||(n=!1,t&&(r="Dit is geen postcode")),this.config.required&&!this.state.value&&(n=!1,t&&(r="Je hebt nog niets ingevuld")),this.setState({isValid:n,error:r}),n}},{key:"render",value:function(){var t=this,e=null;return t.state.error&&(e=u.a.createElement("div",{className:"osc-form-error"},t.state.error)),u.a.createElement("div",{className:"osc-textinput"},u.a.createElement("input",{type:"text",value:this.props.value,disabled:this.props.disabled,placeholder:this.config.placeholder,onChange:function(){return t.handleOnChange({value:t.input.value})},ref:function(e){return t.input=e}}),e)}}])&&X(e.prototype,t),n&&X(e,n),o}();function Q(e){return(Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ee(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function te(e,t){return(te=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ne(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=re(i);return t=a?(e=re(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==Q(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function re(e){return(re=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var oe=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&te(e,t)}(o,h);var e,t,n,r=ne(o);function o(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return e=o,(t=[{key:"componentDidMount",value:function(){var e=this.state.value||this.config.choices[0]&&this.config.choices[0].value;this.handleOnChange({value:e})}},{key:"render",value:function(){var t=this,e=null;return t.state.error&&(e=u.a.createElement("div",{className:"osc-form-error"},"Je hebt nog geen keuze gemaakt")),u.a.createElement("div",{className:"osc-select"},u.a.createElement("select",{value:this.state.value||"",disabled:this.props.disabled,placeholder:this.config.placeholder,onChange:function(){return t.handleOnChange({value:t.input.value})},ref:function(e){return t.input=e}},t.config.choices.map(function(e){return u.a.createElement("option",{value:e.value||"",key:e.value},e.description||e.title||e.value)})),e)}}])&&ee(e.prototype,t),n&&ee(e,n),o}();function ie(e){return(ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ae(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ce(e,t){return(ce=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ue(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=se(i);return t=a?(e=se(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==ie(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function se(e){return(se=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var le=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ce(e,t)}(o,h);var e,t,n,r=ue(o);function o(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return e=o,(t=[{key:"render",value:function(){var t=this,e=null;return t.state.error&&(e=u.a.createElement("div",{className:"osc-form-error"},"Je hebt nog niets ingevuld")),u.a.createElement("div",{className:"osc-textinput"},u.a.createElement("input",{type:"text",value:this.props.value,disabled:this.props.disabled,placeholder:this.config.placeholder,onChange:function(){return t.handleOnChange({value:t.input.value})},ref:function(e){return t.input=e}}),e)}}])&&ae(e.prototype,t),n&&ae(e,n),o}();function fe(e){return(fe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function pe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function de(e,t){return(de=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function he(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=ye(i);return t=a?(e=ye(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==fe(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function ye(e){return(ye=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var me=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&de(e,t)}(o,h);var e,t,n,r=he(o);function o(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return e=o,(t=[{key:"render",value:function(){var t=this,e=null;return t.state.error&&(e=u.a.createElement("div",{className:"osc-form-error"},"Je hebt nog niets ingevuld")),u.a.createElement("div",{className:"osc-textarea"},u.a.createElement("textarea",{value:this.props.value,disabled:this.props.disabled,placeholder:this.config.placeholder,onChange:function(){return t.handleOnChange({value:t.input.value})},ref:function(e){return t.input=e}},this.state.value),e)}}])&&pe(e.prototype,t),n&&pe(e,n),o}();function be(e){return(be="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ve(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function ge(o){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?ve(Object(i),!0).forEach(function(e){var t,n,r;t=o,r=i[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):ve(Object(i)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(i,e))})}return o}function we(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Oe(e,t){return(Oe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ee(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=je(i);return t=a?(e=je(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==be(r)&&"function"!=typeof r?_e(n):r}}function _e(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function je(e){return(je=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Se=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Oe(e,t)}(o,a["a"]);var e,t,n,r=Ee(o);function o(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var n=_e(t=r.call(this,e));return n.defaultConfig={inputType:null,validateAction:null,changeAction:null,required:!1,title:null,description:null,choices:[]},n.config=i.a.recursive(n.defaultConfig,n.config,e.config||{}),n.config.name=n.config.name||n.config.title.toLowerCase(),n.state={value:e.value||void 0},n.handleOnChange=n.handleOnChange.bind(n),n.onChange=e.onChange,t}return e=o,(t=[{key:"validate",value:function(e){var t=e.showErrors;return!this.input||this.input.validate({showErrors:t})}},{key:"handleOnChange",value:function(e){"function"==typeof this.onChange&&this.onChange(e)}},{key:"render",value:function(){var t=this,e=null;t.config.title&&(e=React.createElement("h3",{className:"osc-form-title"},t.config.title));var n=null;t.config.description&&(n=React.createElement("div",{className:"osc-form-description",dangerouslySetInnerHTML:{__html:t.config.description}}));var r=null;switch(t.config.inputType){case"hidden":r=React.createElement(w,{config:t.config,value:this.props.value||this.config.value,onChange:t.handleOnChange,ref:function(e){return t.input=e}});break;case"html-with-counter":case"htmlarea-with-counter":r=React.createElement(B,{config:ge(ge({},t.config),{},{inputType:"htmlarea"}),value:this.props.value||this.config.value,onChange:t.handleOnChange,ref:function(e){return t.input=e}});break;case"image-upload":r=React.createElement(P,{config:t.config,value:this.props.value||this.config.value,onChange:t.handleOnChange,ref:function(e){return t.input=e}});break;case"input-with-counter":case"text-with-counter":r=React.createElement(B,{config:ge({inputType:"input"},t.config),value:this.props.value||this.config.value,onChange:t.handleOnChange,ref:function(e){return t.input=e}});break;case"postcode":r=React.createElement(Y,{config:t.config,onChange:t.handleOnChange,ref:function(e){return t.input=e}});break;case"radios":r=React.createElement(J,{config:t.config,value:this.props.value||this.config.value,onChange:t.handleOnChange,ref:function(e){return t.input=e}});break;case"select":case"multiple-choice":r=React.createElement(oe,{config:t.config,value:this.props.value||this.config.value,onChange:t.handleOnChange,ref:function(e){return t.input=e}});break;case"text":r=React.createElement(le,{config:t.config,value:this.props.value||this.config.value,onChange:t.handleOnChange,ref:function(e){return t.input=e}});break;case"textarea":r=React.createElement(me,{config:t.config,value:this.props.value||this.config.value,onChange:t.handleOnChange,ref:function(e){return t.input=e}});break;case"textarea-with-counter":r=React.createElement(B,{config:ge(ge({},t.config),{},{inputType:"textarea"}),value:this.props.value||this.config.value,onChange:t.handleOnChange,ref:function(e){return t.input=e}})}return React.createElement("div",{id:t.id,ref:function(e){return t.instance=e},className:"osc-form-field"},e,n,r)}}])&&we(e.prototype,t),n&&we(e,n),o}();function Pe(e){return(Pe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Re(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function ke(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ce(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Te(e,t){return(Te=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function xe(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=Ne(i);return t=a?(e=Ne(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==Pe(r)&&"function"!=typeof r?Ie(n):r}}function Ie(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ne(e){return(Ne=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var De=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Te(e,t)}(o,a["a"]);var e,t,n,r=xe(o);function o(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var n=Ie(t=r.call(this,e));return n.defaultConfig={title:null,intro:null,fields:[]},n.config=i.a.recursive(n.defaultConfig,n.config,e.config||{}),n.state={values:e.values||{}},n.handleOnChange=n.handleOnChange.bind(Ie(t)),n.fields=[],t}return e=o,(t=[{key:"getValues",value:function(){return this.state.values}},{key:"validate",value:function(e){var t=e.showErrors,n=!0,r=null;return this.fields.forEach(function(e){e.validate({showErrors:t})||(n=!1,r=r||e)}),r&&r.instance&&r.instance.scrollIntoView&&r.instance.scrollIntoView({behavior:"smooth"}),n}},{key:"handleOnChange",value:function(e){var t=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Re(Object(n),!0).forEach(function(e){ke(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Re(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},this.state.values);t[e.name]=e.value,this.setState({values:t})}},{key:"render",value:function(){var n=this,e=null;n.config.title&&(e=React.createElement("h2",{className:"osc-form-title"},n.config.title));var t=null;n.config.intro&&(t=React.createElement("div",{className:"osc-form-intro",dangerouslySetInnerHTML:{__html:n.config.intro}}));var r=null;return n.config.fields&&n.config.fields.length&&(r=React.createElement("div",{className:"osc-form-fields"},n.config.fields.map(function(e,t){return React.createElement(Se,ke({config:e,onChange:n.handleOnChange,ref:function(e){return n.input=e},key:"osc-form-field-".concat(t)},"ref",function(e){n.fields[t]=e}))}))),React.createElement("div",{id:n.divId,className:"osc-form",ref:function(e){return n.instance=e}},e,t,r)}}])&&Ce(e.prototype,t),n&&Ce(e,n),o}();function Ae(e){return(Ae="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Fe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Le(e,t){return(Le=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ue(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=Be(i);return t=a?(e=Be(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==Ae(r)&&"function"!=typeof r?Me(n):r}}function Me(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Be(e){return(Be=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Ve=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Le(e,t)}(o,u.a.Component);var e,t,n,r=Ue(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=r.call(this,e)).state={value:t.props.value,touched:t.props.touched||!1},t.handleChange=t.handleChange.bind(Me(t)),t}return e=o,(t=[{key:"handleChange",value:function(e){var t=e.target.value;"function"==typeof this.props.onChange&&this.props.onChange(t),this.setState({value:t,touched:!0})}},{key:"doTouch",value:function(){"function"==typeof this.props.onChange&&this.props.onChange(50),this.setState({touched:!0})}},{key:"calcProgress",value:function(e,t,n){return 2*(n-e)/(t-e)-1}},{key:"render",value:function(){var t=this,e=t.state,n=e.value,r=e.touched,o=t.props,i=o.min,a=o.max,c=o.step;return u.a.createElement("div",{className:"".concat(t.props.className," osc-slider")},u.a.createElement("div",{className:"osc-slider-track-container"},u.a.createElement("div",{className:"osc-slider-track"}),u.a.createElement("div",{className:"osc-slider-track-progress-container"},u.a.createElement("div",{className:"osc-slider-track-progress",style:{transform:"scaleX("+t.calcProgress(i,a,n)+")"}})),u.a.createElement("div",{className:"osc-slider-track-dot-end osc-slider-track-dot-left"}),u.a.createElement("div",{className:"osc-slider-track-dot-start osc-slider-track-dot-center"}),u.a.createElement("div",{className:"osc-slider-track-dot-end osc-slider-track-dot-right"})),u.a.createElement("input",{type:"range",min:i,max:a,step:c,value:n,onClick:function(){r||t.doTouch()},onChange:t.handleChange,className:r?"osc-slider-input-range":"osc-slider-input-range osc-slider-untouched",ref:function(e){return t.input=e}}))}}])&&Fe(e.prototype,t),n&&Fe(e,n),o}();t.a={Form:De,FormField:Se,Hidden:w,ImageUpload:P,InputWithCounter:B,Postcode:Y,Radios:J,Select:oe,Text:le,Textarea:me,Slider:Ve}},6:function(e,t,n){"use strict";(function(i){var t,n,r="URLSearchParams"in self,o="Symbol"in self&&"iterator"in Symbol,c="FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(e){return!1}}(),a="FormData"in self,u="ArrayBuffer"in self;function s(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function l(e){return"string"!=typeof e&&(e=String(e)),e}function e(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return o&&(e[Symbol.iterator]=function(){return e}),e}function f(t){this.map={},t instanceof f?t.forEach(function(e,t){this.append(t,e)},this):Array.isArray(t)?t.forEach(function(e){this.append(e[0],e[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function p(e){if(e.bodyUsed)return i.reject(new TypeError("Already read"));e.bodyUsed=!0}function d(n){return new i(function(e,t){n.onload=function(){e(n.result)},n.onerror=function(){t(n.error)}})}function h(e){var t=new FileReader,n=d(t);return t.readAsArrayBuffer(e),n}function y(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function m(){return this.bodyUsed=!1,this._initBody=function(e){var t;(this._bodyInit=e)?"string"==typeof e?this._bodyText=e:c&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:a&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:r&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():u&&c&&((t=e)&&DataView.prototype.isPrototypeOf(t))?(this._bodyArrayBuffer=y(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):u&&(ArrayBuffer.prototype.isPrototypeOf(e)||n(e))?this._bodyArrayBuffer=y(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},c&&(this.blob=function(){var e=p(this);if(e)return e;if(this._bodyBlob)return i.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return i.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return i.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?p(this)||i.resolve(this._bodyArrayBuffer):this.blob().then(h)}),this.text=function(){var e,t,n,r=p(this);if(r)return r;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,n=d(t),t.readAsText(e),n;if(this._bodyArrayBuffer)return i.resolve(function(e){for(var t=new Uint8Array(e),n=new Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return i.resolve(this._bodyText)},a&&(this.formData=function(){return this.text().then(g)}),this.json=function(){return this.text().then(JSON.parse)},this}u&&(t=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],n=ArrayBuffer.isView||function(e){return e&&-1<t.indexOf(Object.prototype.toString.call(e))}),f.prototype.append=function(e,t){e=s(e),t=l(t);var n=this.map[e];this.map[e]=n?n+", "+t:t},f.prototype.delete=function(e){delete this.map[s(e)]},f.prototype.get=function(e){return e=s(e),this.has(e)?this.map[e]:null},f.prototype.has=function(e){return this.map.hasOwnProperty(s(e))},f.prototype.set=function(e,t){this.map[s(e)]=l(t)},f.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},f.prototype.keys=function(){var n=[];return this.forEach(function(e,t){n.push(t)}),e(n)},f.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),e(t)},f.prototype.entries=function(){var n=[];return this.forEach(function(e,t){n.push([t,e])}),e(n)},o&&(f.prototype[Symbol.iterator]=f.prototype.entries);var b=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function v(e,t){var n,r,o=(t=t||{}).body;if(e instanceof v){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new f(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,o||null==e._bodyInit||(o=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new f(t.headers)),this.method=(n=t.method||this.method||"GET",r=n.toUpperCase(),-1<b.indexOf(r)?r:n),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function g(e){var o=new FormData;return e.trim().split("&").forEach(function(e){var t,n,r;e&&(n=(t=e.split("=")).shift().replace(/\+/g," "),r=t.join("=").replace(/\+/g," "),o.append(decodeURIComponent(n),decodeURIComponent(r)))}),o}function w(e,t){t=t||{},this.type="default",this.status=void 0===t.status?200:t.status,this.ok=200<=this.status&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new f(t.headers),this.url=t.url||"",this._initBody(e)}v.prototype.clone=function(){return new v(this,{body:this._bodyInit})},m.call(v.prototype),m.call(w.prototype),w.prototype.clone=function(){return new w(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new f(this.headers),url:this.url})},w.error=function(){var e=new w(null,{status:0,statusText:""});return e.type="error",e};var O=[301,302,303,307,308];w.redirect=function(e,t){if(-1===O.indexOf(t))throw new RangeError("Invalid status code");return new w(null,{status:t,headers:{location:e}})};var E=self.DOMException;try{new E}catch(e){(E=function(e,t){this.message=e,this.name=t;var n=Error(e);this.stack=n.stack}).prototype=Object.create(Error.prototype),E.prototype.constructor=E}function _(o,a){return new i(function(r,e){var t=new v(o,a);if(t.signal&&t.signal.aborted)return e(new E("Aborted","AbortError"));var i=new XMLHttpRequest;function n(){i.abort()}i.onload=function(){var e,o,t={status:i.status,statusText:i.statusText,headers:(e=i.getAllResponseHeaders()||"",o=new f,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(e){var t,n=e.split(":"),r=n.shift().trim();r&&(t=n.join(":").trim(),o.append(r,t))}),o)};t.url="responseURL"in i?i.responseURL:t.headers.get("X-Request-URL");var n="response"in i?i.response:i.responseText;r(new w(n,t))},i.onerror=function(){e(new TypeError("Network request failed"))},i.ontimeout=function(){e(new TypeError("Network request failed"))},i.onabort=function(){e(new E("Aborted","AbortError"))},i.open(t.method,t.url,!0),"include"===t.credentials?i.withCredentials=!0:"omit"===t.credentials&&(i.withCredentials=!1),"responseType"in i&&c&&(i.responseType="blob"),t.headers.forEach(function(e,t){i.setRequestHeader(t,e)}),t.signal&&(t.signal.addEventListener("abort",n),i.onreadystatechange=function(){4===i.readyState&&t.signal.removeEventListener("abort",n)}),i.send(void 0===t._bodyInit?null:t._bodyInit)})}_.polyfill=!0,self.fetch||(self.fetch=_,self.Headers=f,self.Request=v,self.Response=w)}).call(this,n(11))},69:function(e,t,n){},9:function(e,t){var n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n}});
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/reactions/index.jsx");
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

    var defaultConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var defaultdefaultConfig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, OpenStadComponent);

    _this = _super.call(this, props);

    var self = _assertThisInitialized(_this);

    if (props.attributes) {
      Object.keys(props.attributes).forEach(function (key) {
        var attribute = props.attributes[key];
        self[attribute.name] = attribute.value;
      });
    } // config


    if (typeof self.config == 'string') {
      try {
        self.config = JSON.parse(self.config);
      } catch (err) {}
    }

    var propsConfig = props.config || {};
    Object.keys(propsConfig).forEach(function (key) {
      return propsConfig[key] === undefined ? delete propsConfig[key] : {};
    }); // remove undefined

    self.config = merge__WEBPACK_IMPORTED_MODULE_0___default.a.recursive({
      siteId: null,
      api: {
        url: null,
        headers: null,
        isUserLoggedIn: false
      },
      user: {}
    }, defaultConfig, defaultdefaultConfig, propsConfig);
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

/***/ "./src/forms/component/default-input.jsx":
/*!***********************************************!*\
  !*** ./src/forms/component/default-input.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentDefaultInput; });
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");


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



var OpenStadComponentDefaultInput = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentDefaultInput, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentDefaultInput);

  function OpenStadComponentDefaultInput(props) {
    var _this;

    var defaultConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, OpenStadComponentDefaultInput);

    _this = _super.call(this, props, {
      choices: [],
      name: '',
      placeholder: '',
      disabled: false,
      required: false
    }, defaultConfig);

    var self = _assertThisInitialized(_this);

    self.state = {
      value: props.value,
      error: null
    };
    _this.onChange = props.onChange;
    return _this;
  }

  _createClass(OpenStadComponentDefaultInput, [{
    key: "validate",
    value: function validate(_ref) {
      var showErrors = _ref.showErrors;
      var isValid = this.config.required ? !!this.state.value : true;
      var error = '';
      if (!isValid && showErrors) error = true;
      this.setState({
        isValid: isValid,
        error: error
      });
      return isValid;
    }
  }, {
    key: "handleOnChange",
    value: function handleOnChange(data) {
      var self = this;
      data = data || {};
      self.setState(data, function () {
        self.validate({});
      });

      if (typeof self.onChange == 'function') {
        self.onChange({
          name: self.config.name,
          value: data.value
        });
      }
    }
  }]);

  return OpenStadComponentDefaultInput;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/forms/component/form-field.jsx":
/*!********************************************!*\
  !*** ./src/forms/component/form-field.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentFormField; });
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _hidden_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hidden.jsx */ "./src/forms/component/hidden.jsx");
/* harmony import */ var _image_upload_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-upload.jsx */ "./src/forms/component/image-upload.jsx");
/* harmony import */ var _input_with_counter_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input-with-counter.jsx */ "./src/forms/component/input-with-counter.jsx");
/* harmony import */ var _radios_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./radios.jsx */ "./src/forms/component/radios.jsx");
/* harmony import */ var _postcode_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./postcode.jsx */ "./src/forms/component/postcode.jsx");
/* harmony import */ var _select_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select.jsx */ "./src/forms/component/select.jsx");
/* harmony import */ var _textinput_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./textinput.jsx */ "./src/forms/component/textinput.jsx");
/* harmony import */ var _textarea_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./textarea.jsx */ "./src/forms/component/textarea.jsx");


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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











var OpenStadComponentFormField = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentFormField, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentFormField);

  function OpenStadComponentFormField(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentFormField);

    _this = _super.call(this, props, {
      inputType: null,
      validateAction: null,
      changeAction: null,
      required: false,
      title: null,
      description: null,
      choices: []
    });

    var self = _assertThisInitialized(_this);

    self.config.name = self.config.name || self.config.title.toLowerCase();
    self.state = {
      value: props.value || undefined
    };
    self.handleOnChange = self.handleOnChange.bind(self);
    self.onChange = props.onChange;
    return _this;
  }

  _createClass(OpenStadComponentFormField, [{
    key: "validate",
    value: function validate(_ref) {
      var showErrors = _ref.showErrors;
      return this.input ? this.input.validate({
        showErrors: showErrors
      }) : true;
    }
  }, {
    key: "handleOnChange",
    value: function handleOnChange(data) {
      // console.log("form field change", data);
      if (typeof this.onChange == 'function') {
        this.onChange(data);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      var titleHTML = null;

      if (self.config.title) {
        titleHTML = /*#__PURE__*/React.createElement("h3", {
          className: "osc-form-title"
        }, self.config.title);
      }

      var descriptionHTML = null;

      if (self.config.description) {
        descriptionHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-form-description",
          dangerouslySetInnerHTML: {
            __html: self.config.description
          }
        });
      }

      var fieldHTML = null;

      switch (self.config.inputType) {
        case 'hidden':
          fieldHTML = /*#__PURE__*/React.createElement(_hidden_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
            config: self.config,
            value: this.props.value || this.config.value,
            onChange: self.handleOnChange,
            ref: function ref(el) {
              return self.input = el;
            }
          });
          break;

        case 'html-with-counter':
        case 'htmlarea-with-counter':
          fieldHTML = /*#__PURE__*/React.createElement(_input_with_counter_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
            config: _objectSpread(_objectSpread({}, self.config), {}, {
              inputType: 'htmlarea'
            }),
            value: this.props.value || this.config.value,
            onChange: self.handleOnChange,
            ref: function ref(el) {
              return self.input = el;
            }
          });
          break;

        case 'image-upload':
          fieldHTML = /*#__PURE__*/React.createElement(_image_upload_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
            config: self.config,
            value: this.props.value || this.config.value,
            onChange: self.handleOnChange,
            ref: function ref(el) {
              return self.input = el;
            }
          });
          break;

        case 'input-with-counter':
        case 'text-with-counter':
          fieldHTML = /*#__PURE__*/React.createElement(_input_with_counter_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
            config: _objectSpread({
              inputType: 'input'
            }, self.config),
            value: this.props.value || this.config.value,
            onChange: self.handleOnChange,
            ref: function ref(el) {
              return self.input = el;
            }
          });
          break;

        case 'postcode':
          fieldHTML = /*#__PURE__*/React.createElement(_postcode_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
            config: self.config,
            onChange: self.handleOnChange,
            ref: function ref(el) {
              return self.input = el;
            }
          });
          break;

        case 'radios':
          fieldHTML = /*#__PURE__*/React.createElement(_radios_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
            config: self.config,
            value: this.props.value || this.config.value,
            onChange: self.handleOnChange,
            ref: function ref(el) {
              return self.input = el;
            }
          });
          break;

        case 'select':
        case 'multiple-choice':
          fieldHTML = /*#__PURE__*/React.createElement(_select_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
            config: self.config,
            value: this.props.value || this.config.value,
            onChange: self.handleOnChange,
            ref: function ref(el) {
              return self.input = el;
            }
          });
          break;

        case 'text':
          fieldHTML = /*#__PURE__*/React.createElement(_textinput_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
            config: self.config,
            value: this.props.value || this.config.value,
            onChange: self.handleOnChange,
            ref: function ref(el) {
              return self.input = el;
            }
          });
          break;

        case 'textarea':
          fieldHTML = /*#__PURE__*/React.createElement(_textarea_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
            config: self.config,
            value: this.props.value || this.config.value,
            onChange: self.handleOnChange,
            ref: function ref(el) {
              return self.input = el;
            }
          });
          break;

        case 'textarea-with-counter':
          fieldHTML = /*#__PURE__*/React.createElement(_input_with_counter_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
            config: _objectSpread(_objectSpread({}, self.config), {}, {
              inputType: 'textarea'
            }),
            value: this.props.value || this.config.value,
            onChange: self.handleOnChange,
            ref: function ref(el) {
              return self.input = el;
            }
          });
          break;

        default:
      }

      return /*#__PURE__*/React.createElement("div", {
        id: self.id,
        ref: function ref(el) {
          return self.instance = el;
        },
        className: "osc-form-field"
      }, titleHTML, descriptionHTML, fieldHTML);
    }
  }]);

  return OpenStadComponentFormField;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/forms/component/form.jsx":
/*!**************************************!*\
  !*** ./src/forms/component/form.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentForm; });
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/index.jsx */ "./src/libs/index.jsx");
/* harmony import */ var _form_field_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-field.jsx */ "./src/forms/component/form-field.jsx");


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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





var OpenStadComponentForm = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentForm, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentForm);

  function OpenStadComponentForm(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentForm);

    _this = _super.call(this, props, {
      title: null,
      intro: null,
      fields: []
    });

    var self = _assertThisInitialized(_this);

    self.state = {
      values: props.values || {}
    };
    self.handleOnChange = self.handleOnChange.bind(_assertThisInitialized(_this));
    self.fields = [];
    return _this;
  }

  _createClass(OpenStadComponentForm, [{
    key: "getValues",
    value: function getValues() {
      return this.state.values;
    }
  }, {
    key: "validate",
    value: function validate(_ref) {
      var showErrors = _ref.showErrors;
      var self = this;
      var isValid = true;
      var firstInvalid = null;
      self.fields.forEach(function (field) {
        if (!field.validate({
          showErrors: showErrors
        })) {
          isValid = false;
          if (!firstInvalid) firstInvalid = field;
        }
      });
      if (firstInvalid && firstInvalid.instance && firstInvalid.instance.scrollIntoView) firstInvalid.instance.scrollIntoView({
        behavior: 'smooth'
      }); // console.log(isValid);

      return isValid;
    }
  }, {
    key: "handleOnChange",
    value: function handleOnChange(data) {
      // console.log("formchange", data);
      var self = this;

      var values = _objectSpread({}, this.state.values);

      values[data.name] = data.value;
      this.setState({
        values: values
      });
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      var titleHTML = null;

      if (self.config.title) {
        titleHTML = /*#__PURE__*/React.createElement("h2", {
          className: "osc-form-title"
        }, self.config.title);
      }

      var introHTML = null;

      if (self.config.intro) {
        introHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-form-intro",
          dangerouslySetInnerHTML: {
            __html: self.config.intro
          }
        });
      }

      var fieldsHTML = null;

      if (self.config.fields && self.config.fields.length) {
        fieldsHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-form-fields"
        }, self.config.fields.map(function (fieldConfig, i) {
          return /*#__PURE__*/React.createElement(_form_field_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], _defineProperty({
            config: fieldConfig,
            onChange: self.handleOnChange,
            ref: function ref(el) {
              return self.input = el;
            },
            key: "osc-form-field-".concat(i)
          }, "ref", function ref(el) {
            self.fields[i] = el;
          }));
        }));
      }

      return /*#__PURE__*/React.createElement("div", {
        id: self.divId,
        className: "osc-form",
        ref: function ref(el) {
          return self.instance = el;
        }
      }, titleHTML, introHTML, fieldsHTML);
    }
  }]);

  return OpenStadComponentForm;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/forms/component/hidden.jsx":
/*!****************************************!*\
  !*** ./src/forms/component/hidden.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentSelect; });
/* harmony import */ var _default_input_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-input.jsx */ "./src/forms/component/default-input.jsx");


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



var OpenStadComponentSelect = /*#__PURE__*/function (_OpenStadComponentDef) {
  _inherits(OpenStadComponentSelect, _OpenStadComponentDef);

  var _super = _createSuper(OpenStadComponentSelect);

  function OpenStadComponentSelect() {
    _classCallCheck(this, OpenStadComponentSelect);

    return _super.apply(this, arguments);
  }

  _createClass(OpenStadComponentSelect, [{
    key: "render",
    value: function render() {
      var self = this;
      return /*#__PURE__*/React.createElement("input", {
        type: "hidden",
        value: this.props.value,
        disabled: this.props.disabled,
        placeholder: this.config.placeholder,
        onChange: function onChange(e) {
          return self.handleOnChange({
            value: self.input.value
          });
        },
        ref: function ref(el) {
          return self.input = el;
        }
      });
    }
  }]);

  return OpenStadComponentSelect;
}(_default_input_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/forms/component/htmlarea.jsx":
/*!******************************************!*\
  !*** ./src/forms/component/htmlarea.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentHTMLArea; });
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");


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

 // TODO: it is probably not ok to write your own html editor, but after intergrating ckeditor or react-rte the build was (more than) twice as large; a bettter solution must be possible

'use strict';

var OpenStadComponentHTMLArea = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentHTMLArea, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentHTMLArea);

  function OpenStadComponentHTMLArea(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentHTMLArea);

    _this = _super.call(this, props);
    _this.state = {
      value: _this.props.value
    };
    _this.onKeyUpx = _this.onKeyUpx.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(OpenStadComponentHTMLArea, [{
    key: "componentDidMount",
    value: function componentDidMount(prevProps, prevState) {
      var value = this.props.value;
      value = this.filterHTML(value);
      this.input.innerHTML = value;
    }
  }, {
    key: "filterHTML",
    value: function filterHTML(value) {
      value = value.replace(/<(\/?\s*(?:a [^>]+|a|b|i|strong|em|p|div|br|ul|li)\s*\/?)>/g, "[[[$1]]]");
      value = value.replace(/<[^>]+>/g, "");
      value = value.replace(/\[\[\[([^\]]+)\]\]\]/g, "<$1>");
      return value;
    }
  }, {
    key: "executeAction",
    value: function executeAction(e, command, args) {
      e.preventDefault();
      e.stopPropagation();
      document.execCommand(command, false, args);
      this.onKeyUp();
    }
  }, {
    key: "onFocus",
    value: function onFocus(e) {
      if (this.props.onFocus) {
        this.props.onFocus(e);
      }
    }
  }, {
    key: "onBlur",
    value: function onBlur(e) {
      if (this.props.onBlur) {
        this.props.onBlur(e);
      }

      if (this.props.onChange) {
        this.props.onChange({
          value: this.state.value
        });
      }
    }
  }, {
    key: "onKeyUpx",
    value: function onKeyUpx() {
      var value = this.input.innerHTML;
      value = this.filterHTML(value);
      this.setState({
        value: value
      });

      if (this.props.onKeyUp) {
        this.props.onKeyUp(value);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/React.createElement("div", {
        className: "osc-html-editor"
      }, /*#__PURE__*/React.createElement("div", {
        className: "osc-html-editor-buttons"
      }, /*#__PURE__*/React.createElement("div", {
        className: "osc-html-editor-button osc-html-editor-button-bold",
        onMouseDown: function onMouseDown(e) {
          return _this2.executeAction(e, 'bold');
        }
      }, "\xA0"), /*#__PURE__*/React.createElement("div", {
        className: "osc-html-editor-button osc-html-editor-button-italic",
        onMouseDown: function onMouseDown(e) {
          return _this2.executeAction(e, 'italic');
        }
      }, "\xA0"), /*#__PURE__*/React.createElement("div", {
        className: "osc-html-editor-button osc-html-editor-button-insertunorderedlist",
        onMouseDown: function onMouseDown(e) {
          return _this2.executeAction(e, 'insertunorderedlist');
        }
      }, "\xA0"), /*#__PURE__*/React.createElement("div", {
        className: "osc-html-editor-button osc-html-editor-button-createlink",
        onMouseDown: function onMouseDown(e) {
          return _this2.executeAction(e, 'createlink', prompt('Lank naar', 'http://'));
        }
      }, "\xA0")), /*#__PURE__*/React.createElement("div", {
        className: "osc-html-editor-content",
        contentEditable: true,
        onFocus: function onFocus(e) {
          return _this2.onFocus(e);
        },
        onBlur: function onBlur(e) {
          return _this2.onBlur(e);
        },
        onKeyUp: function onKeyUp(e) {
          return _this2.onKeyUpx();
        } // dangerouslySetInnerHTML={{ __html: this.state.value }}
        ,
        ref: function ref(el) {
          return _this2.input = el;
        }
      }));
    }
  }]);

  return OpenStadComponentHTMLArea;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



function EditButton(props) {
  return /*#__PURE__*/React.createElement("button", {
    key: props.cmd,
    onMouseDown: function onMouseDown(evt) {
      evt.preventDefault(); // Avoids loosing focus from the editable area

      document.execCommand(props.cmd, false, props.arg); // Send the command to the browser
    }
  }, props.name || props.cmd);
}

/***/ }),

/***/ "./src/forms/component/image-upload.jsx":
/*!**********************************************!*\
  !*** ./src/forms/component/image-upload.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentSelect; });
/* harmony import */ var _default_input_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-input.jsx */ "./src/forms/component/default-input.jsx");


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



var OpenStadComponentSelect = /*#__PURE__*/function (_OpenStadComponentDef) {
  _inherits(OpenStadComponentSelect, _OpenStadComponentDef);

  var _super = _createSuper(OpenStadComponentSelect);

  function OpenStadComponentSelect(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentSelect);

    _this = _super.call(this, props, {
      allowMultiple: false,
      imageserver: {
        process: '',
        fetch: ''
      }
    });
    var uploadedFiles = [];
    var value = props.value || [];
    value.forEach(function (image) {
      uploadedFiles.push({
        source: {
          url: image
        },
        options: {
          type: 'local',
          // mock file information
          file: {
            name: image //		 size: 3001025,
            //	 type: 'image/png'

          },
          metadata: {
            poster: image
          }
        }
      });
    });
    _this.state = {
      uploadedFiles: uploadedFiles
    };
    return _this;
  }

  _createClass(OpenStadComponentSelect, [{
    key: "componentDidMount",
    value: function componentDidMount(prevProps, prevState) {
      // filepond files
      this._loadedFiles = 0;
      this.files = ["https://unpkg.com/filepond/dist/filepond.js", "https://unpkg.com/filepond-polyfill/dist/filepond-polyfill.js", "https://unpkg.com/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.js", "https://unpkg.com/filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.js", "https://unpkg.com/filepond-plugin-file-validate-size/dist/filepond-plugin-file-validate-size.js", "https://unpkg.com/filepond-plugin-file-poster/dist/filepond-plugin-file-poster.js"];
      this.loadNextFile();
    }
  }, {
    key: "loadNextFile",
    value: function loadNextFile() {
      var self = this;
      var file = self.files[self._loadedFiles];

      if (file) {
        var element;
        element = document.createElement('script');
        element.src = file;
        element.async = true;

        if (element) {
          element.onload = function () {
            self.loadNextFile();
          };

          document.body.appendChild(element);
        }
      }

      if (self._loadedFiles == self.files.length) {
        self.fileUploaderInit();
      }

      self._loadedFiles++;
    }
  }, {
    key: "validate",
    value: function validate() {
      var isValid = true;

      if (this.imageuploader && this.imageuploader.getFiles) {
        var images = this.imageuploader.getFiles();
        images.forEach(function (image) {
          if (!image.serverId) {
            isValid = false;
          }
        });
      }

      return isValid;
    }
  }, {
    key: "fileUploaderInit",
    value: function fileUploaderInit() {
      var self = this;
      var containerElement = document.querySelector('.osc-image-upload-container');

      if (containerElement) {
        FilePond.registerPlugin(FilePondPluginImagePreview);
        FilePond.registerPlugin(FilePondPluginFileValidateSize);
        FilePond.registerPlugin(FilePondPluginFileValidateType);
        FilePond.registerPlugin(FilePondPluginFilePoster); // FilePond.setOptions({
        //   server: 'https://image-server2.openstadsdeel.nl/image/?access_token=MHhfb5U0m8vquAR81p',
        // });

        var filePondSettings = {
          // set allowed file types with mime types
          acceptedFileTypes: ['image/*'],
          allowFileSizeValidation: true,
          allowMultiple: this.config.allowMultiple,
          allowReorder: true,
          styleItemPanelAspectRatio: 1,
          maxFileSize: '8mb',
          name: 'image',
          maxFiles: 5,
          allowBrowse: true,
          files: this.state.uploadedFiles,
          server: {
            process: this.config.imageserver.process,
            fetch: this.config.imageserver.fetch
          },
          imageResizeTargetWidth: 80,
          imageResizeTargetHeight: 80,
          imageCropAspectRatio: '1:1',
          labelIdle: "Sleep afbeelding(en) naar deze plek of <span class='filepond--label-action'>KLIK HIER</span>",
          labelInvalidField: "Field contains invalid files",
          labelFileWaitingForSize: "Wachtend op grootte",
          labelFileSizeNotAvailable: "Grootte niet beschikbaar",
          labelFileCountSingular: "Bestand in lijst",
          labelFileCountPlural: "Bestanden in lijst",
          labelFileLoading: "Laden",
          labelFileAdded: "Toegevoegd",
          // assistive only
          labelFileLoadError: "Fout bij het uploaden",
          labelFileRemoved: "Verwijderd",
          // assistive only
          labelFileRemoveError: "Fout bij het verwijderen",
          labelFileProcessing: "Laden",
          labelFileProcessingComplete: "Afbeelding geladen",
          labelFileProcessingAborted: "Upload cancelled",
          labelFileProcessingError: "Error during upload",
          labelFileProcessingRevertError: "Error during revert",
          labelTapToCancel: "tap to cancel",
          labelTapToRetry: "tap to retry",
          labelTapToUndo: "tap to undo",
          labelButtonRemoveItem: "Verwijderen",
          labelButtonAbortItemLoad: "Abort",
          labelButtonRetryItemLoad: "Retry",
          labelButtonAbortItemProcessing: "Verwijder",
          labelButtonUndoItemProcessing: "Undo",
          labelButtonRetryItemProcessing: "Retry",
          labelButtonProcessItem: "Upload"
        };
        self.imageuploader = FilePond.create(containerElement, filePondSettings);
        var sortableInstance;
        var pondEl = document.querySelector('.filepond--root'); // tmp
        //self.state.value = ["https://image-server.staging.openstadsdeel.nl/image/85ef5669d9a5db2f0ec2adb6310620be"]
        //self.props.handleFieldChange(self.props.name, self.state.value )

        document.querySelector('.filepond--root').addEventListener('FilePond:processfile', function (e) {
          if (e.detail && e.detail.error) {
            console.log('Error uploding file: ', e.detail);
          }

          self.fileUploaderUpdateCurrentInput();
        });
        document.querySelector('.filepond--root').addEventListener('FilePond:removefile', function (e) {
          if (e.detail && e.detail.error) {
            console.log('Error uploding file: ', e.detail);
          }

          self.fileUploaderUpdateCurrentInput();
        });

        if (self.state.formfields) {
          self.imageuploader.addFiles(self.state.formfields.images);
        }
      }
    }
  }, {
    key: "fileUploaderUpdateCurrentInput",
    value: function fileUploaderUpdateCurrentInput() {
      var self = this;
      self.state.value = [];

      if (this.imageuploader && this.imageuploader.getFiles) {
        var images = this.imageuploader.getFiles();
        images.forEach(function (image) {
          try {
            var serverId = typeof image.serverId == 'string' ? JSON.parse(image.serverId) : image.serverId;
            self.state.value.push(serverId.url);
          } catch (err) {
            console.log(err);
          }
        });
      }

      self.props.onChange({
        name: self.config.name,
        value: self.state.value
      });
    }
  }, {
    key: "fileUploaderUploaderAddImages",
    value: function fileUploaderUploaderAddImages(images) {
      var self = this;

      if (this.imageuploader) {
        this.imageuploader.addFiles(images);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      var errorHTML = null;

      if (self.state.error) {
        errorHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-form-error"
        }, "Je hebt nog geen afbeelding geupload");
      }

      return /*#__PURE__*/React.createElement("div", {
        className: "osc-image-upload-container"
      }, /*#__PURE__*/React.createElement("input", {
        type: "file",
        className: "imageUploader-gebiedstool filepond-gebiedstool"
      }), errorHTML);
    }
  }]);

  return OpenStadComponentSelect;
}(_default_input_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/forms/component/input-with-counter.jsx":
/*!****************************************************!*\
  !*** ./src/forms/component/input-with-counter.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormfieldInputWithCounter; });
/* harmony import */ var _htmlarea_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlarea.jsx */ "./src/forms/component/htmlarea.jsx");
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
 //import CKEditor from '@ckeditor/ckeditor5-react';
//import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

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




var FormfieldInputWithCounter = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(FormfieldInputWithCounter, _OpenStadComponent);

  var _super = _createSuper(FormfieldInputWithCounter);

  function FormfieldInputWithCounter(props) {
    var _this;

    _classCallCheck(this, FormfieldInputWithCounter);

    _this = _super.call(this, props, {
      name: 'tekst',
      inputType: 'input',
      minLength: 5,
      maxLength: 1024,
      placeholder: ''
    });

    var self = _assertThisInitialized(_this);

    self.id = props.id || 'osc-formfields-plaintext-with-counter-' + parseInt(1000000 * Math.random());
    self.state = {
      focused: false,
      value: props.value || '',
      valueLength: props.value && props.value.length || 0
    };
    self.key = props.useKey || (self.id || 'osc-input-with-counter-') + parseInt(10000000 * Math.random);
    _this.onChange = props.onChange;
    self.handleOnChange = self.handleOnChange.bind(_assertThisInitialized(_this));
    self.onInputFocus = self.onInputFocus.bind(_assertThisInitialized(_this));
    self.onInputBlur = self.onInputBlur.bind(_assertThisInitialized(_this));
    self.onInputKeyUp = self.onInputKeyUp.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FormfieldInputWithCounter, [{
    key: "isValid",
    value: function isValid() {
      var state = {};
      state.isValid = true;
      state.warning = null;

      if (this.state.valueLength < this.config.minLength) {
        state.warning = "De tekst is te kort";
        state.isValid = false;
      }

      if (this.state.valueLength > this.config.maxLength) {
        state.warning = "De tekst is te lang";
        state.isValid = false;
      }

      this.setState(state);
      return state.isValid;
    }
  }, {
    key: "validate",
    value: function validate() {
      this.setState({
        showWarning: true
      });
      return this.isValid();
    }
  }, {
    key: "handleOnChange",
    value: function handleOnChange(data) {
      data = data || {};
      this.setState(data);

      if (typeof this.onChange == 'function') {
        this.onChange({
          name: this.config.name,
          value: data.value
        });
      }
    }
  }, {
    key: "onInputFocus",
    value: function onInputFocus() {
      var state = {};
      state.focused = true;
      state.showWarning = false;
      this.setState(state);
    }
  }, {
    key: "onInputBlur",
    value: function onInputBlur() {
      var state = {};
      state.focused = false;
      this.setState(state);
    }
  }, {
    key: "onInputKeyUp",
    value: function onInputKeyUp(value) {
      var state = {};
      state.value = value || this.input.value;
      var valueLength = state.value.length;
      state.valueLength = valueLength;
      state.isValid = valueLength >= this.config.minLength && valueLength <= this.config.maxLength;
      this.setState(state);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var self = this;
      var counter = null;
      var warning = null;

      if (self.state.focused) {
        if (self.state.valueLength < self.config.minLength) {
          counter = /*#__PURE__*/React.createElement("div", {
            className: "osc-form-counter osc-form-error"
          }, "Nog minimaal ", /*#__PURE__*/React.createElement("span", {
            className: ""
          }, self.config.minLength - self.state.valueLength), " tekens");
        } else {
          var error = self.state.valueLength > self.config.maxLength ? 'osc-form-error' : '';
          counter = /*#__PURE__*/React.createElement("div", {
            className: 'osc-form-counter ' + error
          }, "Je hebt nog ", /*#__PURE__*/React.createElement("span", {
            className: ""
          }, self.config.maxLength - self.state.valueLength), " tekens over.");
        }
      }

      if (self.state.showWarning && self.state.warning) {
        warning = /*#__PURE__*/React.createElement("div", {
          className: "osc-form-warning",
          ref: function ref(el) {
            return _this2['form-warning'] = el;
          }
        }, self.state.warning);
      }

      var inputHTML = null;

      switch (self.config.inputType) {
        case 'htmlarea':
          inputHTML = /*#__PURE__*/React.createElement(_htmlarea_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], {
            value: this.state.value,
            onChange: self.handleOnChange,
            onFocus: self.onInputFocus,
            onBlur: self.onInputBlur,
            onKeyUp: self.onInputKeyUp
          }); // inputHTML = (
          //   <CKEditor
          //     editor={ ClassicEditor }
          //     config={{ toolbar: [ 'h3', 'bold', 'italic', 'link' ] }}
          //     data={this.state.value}
          //     onInit={ editor => {
          //       // TODO: betere selector
          //       document.querySelector('.ck-content').addEventListener('keyup', function(e) {
          //         self.onInputKeyUp(e, editor.getData())
          //       })
          //     }}
          //     onChange={( event, editor ) => self.handleOnChange({ value: editor.getData() })}
          //     onFocus={e => self.onInputFocus(e)}
          //     onBlur={e => self.onInputBlur(e)}
          //   />
          // );

          break;

        case 'textarea':
          inputHTML = /*#__PURE__*/React.createElement("textarea", {
            key: self.key,
            ref: function ref(el) {
              return self.input = el;
            },
            value: this.state.value,
            disabled: this.props.disabled,
            placeholder: this.config.placeholder,
            onChange: function onChange(e) {
              return self.handleOnChange({
                value: self.input.value
              });
            },
            onKeyUp: function onKeyUp(e) {
              return self.onInputKeyUp();
            },
            onFocus: function onFocus(e) {
              return self.onInputFocus(e);
            },
            onBlur: function onBlur(e) {
              return self.onInputBlur(e);
            }
          });
          break;

        case 'input':
        default:
          inputHTML = /*#__PURE__*/React.createElement("input", {
            key: self.key,
            ref: function ref(el) {
              return self.input = el;
            },
            value: this.state.value,
            disabled: this.props.disabled,
            placeholder: this.config.placeholder,
            onChange: function onChange(e) {
              return self.handleOnChange({
                value: self.input.value
              });
            },
            onKeyUp: function onKeyUp(e) {
              return self.onInputKeyUp();
            },
            onFocus: function onFocus(e) {
              return self.onInputFocus(e);
            },
            onBlur: function onBlur(e) {
              return self.onInputBlur(e);
            }
          });
      }

      return /*#__PURE__*/React.createElement("div", {
        id: self.id,
        ref: function ref(el) {
          return self.instance = el;
        },
        className: "osc-input-with-counter"
      }, /*#__PURE__*/React.createElement("div", {
        className: "osc-form-feedback"
      }, inputHTML, counter, warning));
    }
  }]);

  return FormfieldInputWithCounter;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./src/forms/component/postcode.jsx":
/*!******************************************!*\
  !*** ./src/forms/component/postcode.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentPostcode; });
/* harmony import */ var _default_input_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-input.jsx */ "./src/forms/component/default-input.jsx");


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



var OpenStadComponentPostcode = /*#__PURE__*/function (_OpenStadComponentDef) {
  _inherits(OpenStadComponentPostcode, _OpenStadComponentDef);

  var _super = _createSuper(OpenStadComponentPostcode);

  function OpenStadComponentPostcode() {
    _classCallCheck(this, OpenStadComponentPostcode);

    return _super.apply(this, arguments);
  }

  _createClass(OpenStadComponentPostcode, [{
    key: "validate",
    value: function validate(_ref) {
      var showErrors = _ref.showErrors;
      var isValid = true;
      var error = '';

      if (!this.state.value || !this.state.value.match(/^\s*\d{4}\s*[a-zA-Z][a-zA-Z]\s*$/)) {
        isValid = false;
        if (showErrors) error = 'Dit is geen postcode';
      }

      if (this.config.required && !this.state.value) {
        isValid = false;
        if (showErrors) error = 'Je hebt nog niets ingevuld';
      }

      this.setState({
        isValid: isValid,
        error: error
      });
      return isValid;
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      var errorHTML = null;

      if (self.state.error) {
        errorHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-form-error"
        }, self.state.error);
      }

      return /*#__PURE__*/React.createElement("div", {
        className: "osc-textinput"
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        value: this.props.value,
        disabled: this.props.disabled,
        placeholder: this.config.placeholder,
        onChange: function onChange(e) {
          return self.handleOnChange({
            value: self.input.value
          });
        },
        ref: function ref(el) {
          return self.input = el;
        }
      }), errorHTML);
    }
  }]);

  return OpenStadComponentPostcode;
}(_default_input_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/forms/component/radios.jsx":
/*!****************************************!*\
  !*** ./src/forms/component/radios.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentRadios; });
/* harmony import */ var _default_input_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-input.jsx */ "./src/forms/component/default-input.jsx");


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



var OpenStadComponentRadios = /*#__PURE__*/function (_OpenStadComponentDef) {
  _inherits(OpenStadComponentRadios, _OpenStadComponentDef);

  var _super = _createSuper(OpenStadComponentRadios);

  function OpenStadComponentRadios() {
    _classCallCheck(this, OpenStadComponentRadios);

    return _super.apply(this, arguments);
  }

  _createClass(OpenStadComponentRadios, [{
    key: "render",
    value: function render() {
      var self = this;
      var errorHTML = null;

      if (self.state.error) {
        errorHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-form-error"
        }, "Je hebt nog geen keuze gemaakt");
      }

      return /*#__PURE__*/React.createElement("div", {
        className: "osc-radios"
      }, self.config.choices.map(function (choice) {
        if (choice.dangerousDescription) {
          return /*#__PURE__*/React.createElement("div", {
            className: "osc-radio-container",
            key: choice.value
          }, /*#__PURE__*/React.createElement("div", {
            className: "osc-radio-input".concat(self.state.value == choice.value ? ' osc-radio-input-checked' : '')
          }, /*#__PURE__*/React.createElement("input", {
            type: "radio",
            name: self.divId,
            value: choice.value,
            onChange: function onChange(e) {
              return self.handleOnChange({
                value: choice.value
              });
            }
          })), /*#__PURE__*/React.createElement("div", {
            className: "osc-radio-text",
            dangerouslySetInnerHTML: {
              __html: choice.dangerousDescription
            }
          }));
        } else {
          return /*#__PURE__*/React.createElement("div", {
            className: "osc-radio-container",
            key: choice.value
          }, /*#__PURE__*/React.createElement("div", {
            className: "osc-radio-input".concat(self.state.value == choice.value ? ' osc-radio-input-checked' : '')
          }, /*#__PURE__*/React.createElement("input", {
            type: "radio",
            name: self.divId,
            value: choice.value,
            onChange: function onChange(e) {
              return self.handleOnChange({
                value: choice.value
              });
            }
          })), /*#__PURE__*/React.createElement("div", {
            className: "osc-radio-text"
          }, choice.dangerousDescription ? null : choice.description || choice.title || choice.value));
        }
      }), errorHTML);
    }
  }]);

  return OpenStadComponentRadios;
}(_default_input_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/forms/component/select.jsx":
/*!****************************************!*\
  !*** ./src/forms/component/select.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentSelect; });
/* harmony import */ var _default_input_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-input.jsx */ "./src/forms/component/default-input.jsx");


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



var OpenStadComponentSelect = /*#__PURE__*/function (_OpenStadComponentDef) {
  _inherits(OpenStadComponentSelect, _OpenStadComponentDef);

  var _super = _createSuper(OpenStadComponentSelect);

  function OpenStadComponentSelect() {
    _classCallCheck(this, OpenStadComponentSelect);

    return _super.apply(this, arguments);
  }

  _createClass(OpenStadComponentSelect, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // init value
      var value = this.state.value || this.config.choices[0] && this.config.choices[0].value;
      this.handleOnChange({
        value: value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      var errorHTML = null;

      if (self.state.error) {
        errorHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-form-error"
        }, "Je hebt nog geen keuze gemaakt");
      }

      return /*#__PURE__*/React.createElement("div", {
        className: "osc-select"
      }, /*#__PURE__*/React.createElement("select", {
        value: this.state.value || '',
        disabled: this.props.disabled,
        placeholder: this.config.placeholder,
        onChange: function onChange(e) {
          return self.handleOnChange({
            value: self.input.value
          });
        },
        ref: function ref(el) {
          return self.input = el;
        }
      }, self.config.choices.map(function (choice) {
        return /*#__PURE__*/React.createElement("option", {
          value: choice.value || '',
          key: choice.value
        }, choice.description || choice.title || choice.value);
      })), errorHTML);
    }
  }]);

  return OpenStadComponentSelect;
}(_default_input_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/forms/component/slider.jsx":
/*!****************************************!*\
  !*** ./src/forms/component/slider.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");


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



var Slider = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(Slider, _OpenStadComponent);

  var _super = _createSuper(Slider);

  function Slider(props) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _super.call(this, props);
    _this.state = {
      value: _this.props.value,
      touched: _this.props.touched || false
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Slider, [{
    key: "handleChange",
    value: function handleChange(event) {
      var value = event.target.value;

      if (typeof this.props.onChange === 'function') {
        this.props.onChange(value);
      }

      this.setState({
        value: value,
        touched: true
      });
    }
  }, {
    key: "doTouch",
    value: function doTouch() {
      if (typeof this.props.onChange === 'function') {
        this.props.onChange(50);
      }

      this.setState({
        touched: true
      });
    }
  }, {
    key: "calcProgress",
    value: function calcProgress(min, max, value) {
      var range = max - min;
      var progInRange = value - min;
      return progInRange * 2 / range - 1;
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      var _self$state = self.state,
          value = _self$state.value,
          touched = _self$state.touched;
      var _self$props = self.props,
          min = _self$props.min,
          max = _self$props.max,
          step = _self$props.step;
      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(self.props.className, " osc-slider")
      }, /*#__PURE__*/React.createElement("div", {
        className: "osc-slider-track-container"
      }, /*#__PURE__*/React.createElement("div", {
        className: "osc-slider-track"
      }), /*#__PURE__*/React.createElement("div", {
        className: "osc-slider-track-progress-container"
      }, /*#__PURE__*/React.createElement("div", {
        className: "osc-slider-track-progress",
        style: {
          transform: 'scaleX(' + self.calcProgress(min, max, value) + ')'
        }
      })), /*#__PURE__*/React.createElement("div", {
        className: "osc-slider-track-dot-end osc-slider-track-dot-left"
      }), /*#__PURE__*/React.createElement("div", {
        className: "osc-slider-track-dot-start osc-slider-track-dot-center"
      }), /*#__PURE__*/React.createElement("div", {
        className: "osc-slider-track-dot-end osc-slider-track-dot-right"
      })), /*#__PURE__*/React.createElement("input", {
        type: "range",
        min: min,
        max: max,
        step: step,
        value: value,
        onClick: function onClick() {
          if (!touched) self.doTouch();
        },
        onChange: self.handleChange,
        className: touched ? 'osc-slider-input-range' : 'osc-slider-input-range osc-slider-untouched',
        ref: function ref(el) {
          return self.input = el;
        }
      }));
    }
  }]);

  return Slider;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Slider);

/***/ }),

/***/ "./src/forms/component/textarea.jsx":
/*!******************************************!*\
  !*** ./src/forms/component/textarea.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentSelect; });
/* harmony import */ var _default_input_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-input.jsx */ "./src/forms/component/default-input.jsx");


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



var OpenStadComponentSelect = /*#__PURE__*/function (_OpenStadComponentDef) {
  _inherits(OpenStadComponentSelect, _OpenStadComponentDef);

  var _super = _createSuper(OpenStadComponentSelect);

  function OpenStadComponentSelect() {
    _classCallCheck(this, OpenStadComponentSelect);

    return _super.apply(this, arguments);
  }

  _createClass(OpenStadComponentSelect, [{
    key: "render",
    value: function render() {
      var self = this;
      var errorHTML = null;

      if (self.state.error) {
        errorHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-form-error"
        }, "Je hebt nog niets ingevuld");
      }

      return /*#__PURE__*/React.createElement("div", {
        className: "osc-textarea"
      }, /*#__PURE__*/React.createElement("textarea", {
        value: this.props.value,
        disabled: this.props.disabled,
        placeholder: this.config.placeholder,
        onChange: function onChange(e) {
          return self.handleOnChange({
            value: self.input.value
          });
        },
        ref: function ref(el) {
          return self.input = el;
        }
      }, this.state.value), errorHTML);
    }
  }]);

  return OpenStadComponentSelect;
}(_default_input_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/forms/component/textinput.jsx":
/*!*******************************************!*\
  !*** ./src/forms/component/textinput.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentText; });
/* harmony import */ var _default_input_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-input.jsx */ "./src/forms/component/default-input.jsx");


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



var OpenStadComponentText = /*#__PURE__*/function (_OpenStadComponentDef) {
  _inherits(OpenStadComponentText, _OpenStadComponentDef);

  var _super = _createSuper(OpenStadComponentText);

  function OpenStadComponentText() {
    _classCallCheck(this, OpenStadComponentText);

    return _super.apply(this, arguments);
  }

  _createClass(OpenStadComponentText, [{
    key: "render",
    value: function render() {
      var self = this;
      var errorHTML = null;

      if (self.state.error) {
        errorHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-form-error"
        }, "Je hebt nog niets ingevuld");
      }

      return /*#__PURE__*/React.createElement("div", {
        className: "osc-textinput"
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        value: this.props.value,
        disabled: this.props.disabled,
        placeholder: this.config.placeholder,
        onChange: function onChange(e) {
          return self.handleOnChange({
            value: self.input.value
          });
        },
        ref: function ref(el) {
          return self.input = el;
        }
      }), errorHTML);
    }
  }]);

  return OpenStadComponentText;
}(_default_input_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/forms/css/default.less":
/*!************************************!*\
  !*** ./src/forms/css/default.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/forms/index.jsx":
/*!*****************************!*\
  !*** ./src/forms/index.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_default_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/default.less */ "./src/forms/css/default.less");
/* harmony import */ var _css_default_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_default_less__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_form_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/form.jsx */ "./src/forms/component/form.jsx");
/* harmony import */ var _component_form_field_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/form-field.jsx */ "./src/forms/component/form-field.jsx");
/* harmony import */ var _component_hidden_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/hidden.jsx */ "./src/forms/component/hidden.jsx");
/* harmony import */ var _component_image_upload_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/image-upload.jsx */ "./src/forms/component/image-upload.jsx");
/* harmony import */ var _component_input_with_counter_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/input-with-counter.jsx */ "./src/forms/component/input-with-counter.jsx");
/* harmony import */ var _component_postcode_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/postcode.jsx */ "./src/forms/component/postcode.jsx");
/* harmony import */ var _component_radios_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/radios.jsx */ "./src/forms/component/radios.jsx");
/* harmony import */ var _component_select_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/select.jsx */ "./src/forms/component/select.jsx");
/* harmony import */ var _component_textinput_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/textinput.jsx */ "./src/forms/component/textinput.jsx");
/* harmony import */ var _component_textarea_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/textarea.jsx */ "./src/forms/component/textarea.jsx");
/* harmony import */ var _component_slider_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/slider.jsx */ "./src/forms/component/slider.jsx");
// polyfills
//import 'core-js/es/map';
//import 'core-js/es/set';
 // react


 // import css to make sure it is generated in the result

 // the module












/* harmony default export */ __webpack_exports__["default"] = ({
  Form: _component_form_jsx__WEBPACK_IMPORTED_MODULE_4__["default"],
  FormField: _component_form_field_jsx__WEBPACK_IMPORTED_MODULE_5__["default"],
  Hidden: _component_hidden_jsx__WEBPACK_IMPORTED_MODULE_6__["default"],
  ImageUpload: _component_image_upload_jsx__WEBPACK_IMPORTED_MODULE_7__["default"],
  InputWithCounter: _component_input_with_counter_jsx__WEBPACK_IMPORTED_MODULE_8__["default"],
  Postcode: _component_postcode_jsx__WEBPACK_IMPORTED_MODULE_9__["default"],
  Radios: _component_radios_jsx__WEBPACK_IMPORTED_MODULE_10__["default"],
  Select: _component_select_jsx__WEBPACK_IMPORTED_MODULE_11__["default"],
  Text: _component_textinput_jsx__WEBPACK_IMPORTED_MODULE_12__["default"],
  Textarea: _component_textarea_jsx__WEBPACK_IMPORTED_MODULE_13__["default"],
  Slider: _component_slider_jsx__WEBPACK_IMPORTED_MODULE_14__["default"]
}); // render the base element
// function renderElement( elem, config ) {
//   let attributes = elem.attributes;
//   ReactDOM.render( <OpenStadComponentReactions attributes={attributes} config={config}/>, elem)
// }
// export {renderElement}

/***/ }),

/***/ "./src/libs/css/default.less":
/*!***********************************!*\
  !*** ./src/libs/css/default.less ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/libs/index.jsx":
/*!****************************!*\
  !*** ./src/libs/index.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_default_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/default.less */ "./src/libs/css/default.less");
/* harmony import */ var _css_default_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_default_less__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_api_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/api/index.js */ "./src/libs/lib/api/index.js");
/* harmony import */ var _lib_user_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/user/index.js */ "./src/libs/lib/user/index.js");
/* harmony import */ var _lib_local_storage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/local-storage.js */ "./src/libs/lib/local-storage.js");
/* harmony import */ var _lib_session_storage_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/session-storage.js */ "./src/libs/lib/session-storage.js");
/* harmony import */ var _lib_react_template_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/react-template.js */ "./src/libs/lib/react-template.js");
// polyfills
//import 'core-js/es/map';
//import 'core-js/es/set';
 // react


 // import css to make sure it is generated in the result

 // the module






var OpenStadComponentLibs = {
  api: _lib_api_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  user: _lib_user_index_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  localStorage: _lib_local_storage_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  sessionStorage: _lib_session_storage_js__WEBPACK_IMPORTED_MODULE_7__["default"],
  reactTemplate: _lib_react_template_js__WEBPACK_IMPORTED_MODULE_8__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (OpenStadComponentLibs);

/***/ }),

/***/ "./src/libs/lib/api/get-headers.js":
/*!*****************************************!*\
  !*** ./src/libs/lib/api/get-headers.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user_get_jwt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user/get-jwt.js */ "./src/libs/lib/user/get-jwt.js");


/* harmony default export */ __webpack_exports__["default"] = (function (config) {
  var headers = merge__WEBPACK_IMPORTED_MODULE_0___default.a.recursive({
    'Content-type': 'application/json'
  }, config && config.api && config.api.headers);
  var jwt = Object(_user_get_jwt_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

  if (jwt) {
    headers = merge__WEBPACK_IMPORTED_MODULE_0___default.a.recursive({
      "X-Authorization": "Bearer " + jwt
    }, headers);
  }

  return headers;
});

/***/ }),

/***/ "./src/libs/lib/api/index.js":
/*!***********************************!*\
  !*** ./src/libs/lib/api/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_headers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-headers.js */ "./src/libs/lib/api/get-headers.js");

var OpenStadComponentAPI = {
  getHeaders: _get_headers_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (OpenStadComponentAPI);

/***/ }),

/***/ "./src/libs/lib/local-storage.js":
/*!***************************************!*\
  !*** ./src/libs/lib/local-storage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var oscLocalStorage = {};

oscLocalStorage.get = function (name) {
  var value = localStorage.getItem(name);

  try {
    value = JSON.parse(value);
  } catch (err) {}

  return value;
};

oscLocalStorage.set = function (name, value) {
  if (typeof name != 'string') return;
  if (typeof value == 'undefined') value = "";

  if (_typeof(value) == 'object') {
    try {
      value = JSON.stringify(value);
    } catch (err) {}
  }

  ;
  localStorage.setItem(name, value);
};

oscLocalStorage.remove = function (name) {
  localStorage.removeItem(name);
};

/* harmony default export */ __webpack_exports__["default"] = (oscLocalStorage);

/***/ }),

/***/ "./src/libs/lib/react-template.js":
/*!****************************************!*\
  !*** ./src/libs/lib/react-template.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__);
 // TODO: dit werkt alleen als het er 1 is

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$html = _ref.html,
      html = _ref$html === void 0 ? '' : _ref$html;
  var args = arguments[0];
  delete args.html;
  var matches = 0;
  Object.keys(args).forEach(function (key) {
    var regEx = new RegExp("^((?:.|\n|\r)*)\\{".concat(key, "\\}((?:.|\n|\r)*)$"), 'g');
    var match = regEx.exec(html);

    if (match) {
      matches++;
      html = /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: match[1]
        }
      }), args[key], /*#__PURE__*/React.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: match[2]
        }
      }));
    }
  });
  if (matches == 0) html = /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
  return html;
});

/***/ }),

/***/ "./src/libs/lib/session-storage.js":
/*!*****************************************!*\
  !*** ./src/libs/lib/session-storage.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var oscSessionStorage = {};

oscSessionStorage.get = function (name) {
  var value = sessionStorage.getItem(name);

  try {
    value = JSON.parse(value);
  } catch (err) {}

  return value;
};

oscSessionStorage.set = function (name, value) {
  if (typeof name != 'string') return;
  if (typeof value == 'undefined') value = "";

  if (_typeof(value) == 'object') {
    try {
      value = JSON.stringify(value);
    } catch (err) {}
  }

  ;
  sessionStorage.setItem(name, value);
};

oscSessionStorage.remove = function (name) {
  sessionStorage.removeItem(name);
};

/* harmony default export */ __webpack_exports__["default"] = (oscSessionStorage);

/***/ }),

/***/ "./src/libs/lib/user/get-jwt.js":
/*!**************************************!*\
  !*** ./src/libs/lib/user/get-jwt.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _session_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../session-storage.js */ "./src/libs/lib/session-storage.js");

/* harmony default export */ __webpack_exports__["default"] = (function (config) {
  var jwt; // jwt in url

  var match = window.location.search.match(/(?:\?|&)jwt=([A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*)(?:&|$)/);

  if (match) {
    jwt = match[1];
    _session_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].set('osc-jwt', jwt);
    var search = document.location.search.replace('jwt=' + jwt, '');
    if (search == '?') search = '';
    document.location.search = search;
  }

  jwt = _session_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('osc-jwt');

  if (config && config.jwt) {
    jwt = config.jwt;
    _session_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].set('osc-jwt', jwt);
  }

  return jwt;
});

/***/ }),

/***/ "./src/libs/lib/user/get-user.js":
/*!***************************************!*\
  !*** ./src/libs/lib/user/get-user.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _session_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../session-storage.js */ "./src/libs/lib/session-storage.js");
/* harmony import */ var _get_jwt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-jwt.js */ "./src/libs/lib/user/get-jwt.js");


/* harmony default export */ __webpack_exports__["default"] = (function (config, next) {
  next = next || function (user) {
    console.log('getUser: next not defined.');
    console.log(user);
  };

  var user = config.user || _session_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('osc-user');

  if (user) {
    // return user
    return next(null, user);
  } // jwt


  var jwt = Object(_get_jwt_js__WEBPACK_IMPORTED_MODULE_1__["default"])(config);

  if (!jwt) {
    // return no user
    return next(null, {});
  } // fetch user


  var url = "".concat(config.api.url, "/oauth/site/").concat(config.siteId, "/me");
  var headers = {
    'X-Authorization': "Bearer ".concat(jwt),
    'Content-Type': 'application/json'
  };
  fetch(url, {
    headers: headers
  }).then(function (response) {
    if (!response.ok) throw new Error('Error on fetch');
    return response.json();
  }).then(function (json) {
    _session_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].set('osc-user', json);
    next(null, json);
  })["catch"](function (err) {
    next(err);
  });
});

/***/ }),

/***/ "./src/libs/lib/user/has-role.js":
/*!***************************************!*\
  !*** ./src/libs/lib/user/has-role.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _session_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../session-storage.js */ "./src/libs/lib/session-storage.js");
/* harmony import */ var _get_jwt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-jwt.js */ "./src/libs/lib/user/get-jwt.js");


var roles = {
  admin: ['admin', 'moderator', 'editor', 'member', 'anonymous', 'all'],
  moderator: ['moderator', 'editor', 'member', 'anonymous', 'all'],
  editor: ['editor', 'member', 'anonymous', 'all'],
  member: ['member', 'anonymous', 'all'],
  anonymous: ['anonymous', 'all'],
  all: ['all'],
  // special
  owner: null // special

};
/* harmony default export */ __webpack_exports__["default"] = (function (user, requiredRole) {
  var userRole = user.role;
  if (!Object.keys(roles).includes(userRole)) userRole = 'all';
  return roles[userRole].includes(requiredRole);
});

/***/ }),

/***/ "./src/libs/lib/user/index.js":
/*!************************************!*\
  !*** ./src/libs/lib/user/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_user_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-user.js */ "./src/libs/lib/user/get-user.js");
/* harmony import */ var _get_jwt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-jwt.js */ "./src/libs/lib/user/get-jwt.js");
/* harmony import */ var _logout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logout.js */ "./src/libs/lib/user/logout.js");
/* harmony import */ var _has_role_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./has-role.js */ "./src/libs/lib/user/has-role.js");




var OpenStadComponentUser = {
  getUser: _get_user_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  getJWT: _get_jwt_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  logout: _logout_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  hasRole: _has_role_js__WEBPACK_IMPORTED_MODULE_3__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (OpenStadComponentUser);

/***/ }),

/***/ "./src/libs/lib/user/logout.js":
/*!*************************************!*\
  !*** ./src/libs/lib/user/logout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _session_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../session-storage.js */ "./src/libs/lib/session-storage.js");
/* harmony import */ var _get_jwt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-jwt.js */ "./src/libs/lib/user/get-jwt.js");


/* harmony default export */ __webpack_exports__["default"] = (function (config, next) {
  next = next || function (user) {
    console.log('logout: next not defined.');
  };

  var user = config.user || _session_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('osc-user');

  if (user) {
    // return user
    return next(null, user);
  } // jwt


  var jwt = Object(_get_jwt_js__WEBPACK_IMPORTED_MODULE_1__["default"])(config);

  if (!jwt) {
    // return no user
    return next(null, {});
  } // fetch user


  var url = config.api.url + '/oauth/site/' + config.siteId + '/me';
  var headers = {
    'X-Authorization': 'Bearer ' + jwt,
    'Content-Type': 'application/json'
  };
  fetch(url, {
    headers: headers
  }).then(function (response) {
    if (!response.ok) throw new Error('Error on fetch');
    return response.json();
  }).then(function (json) {
    _session_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].set('osc-user', json);
    next(null, json);
  })["catch"](function (err) {
    next(err);
  });
});

/***/ }),

/***/ "./src/reactions/component/reaction-form.jsx":
/*!***************************************************!*\
  !*** ./src/reactions/component/reaction-form.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentReactionForm; });
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/index.jsx */ "./src/libs/index.jsx");
/* harmony import */ var _forms_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../forms/index.jsx */ "./src/forms/index.jsx");


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





var OpenStadComponentReactionForm = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentReactionForm, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentReactionForm);

  function OpenStadComponentReactionForm(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentReactionForm);

    _this = _super.call(this, props, {
      argumentId: null,
      api: {
        url: null,
        headers: null
      },
      user: {},
      descriptionMinLength: 30,
      descriptionMaxLength: 500,
      requiredUserRole: 'member',
      formIntro: '',
      placeholder: ''
    });
    _this.config.loginUrl = _this.config.loginUrl || '/oauth/login?returnTo=' + encodeURIComponent(document.location.href);
    _this.state = {
      description: _this.config.description || '',
      isValid: false,
      isBusy: false
    };
    return _this;
  }

  _createClass(OpenStadComponentReactionForm, [{
    key: "handleOnChange",
    value: function handleOnChange(data) {
      data = data || {};
      if (data.description) data.isValid = this.description.isValid();
      this.setState(data);
    }
  }, {
    key: "canSubmit",
    value: function canSubmit() {
      var requiredUserRole = this.config.requiredUserRole;
      var userRole = this.props.user && this.props.user.role; // todo: nieuwe rollen structuur

      return requiredUserRole == 'anonymous' && userRole || requiredUserRole == 'member' && (userRole == 'member' || userRole == 'admin') || requiredUserRole == 'admin' && userRole == 'admin';
    }
  }, {
    key: "submitForm",
    value: function submitForm() {
      var self = this;
      self.setState({
        isBusy: true
      }, function () {
        var isValid = self.description.validate({
          showWarning: true
        });

        if (!isValid) {
          self.setState({
            isBusy: false,
            isValid: false
          });
          return;
        }

        if (!self.canSubmit()) return alert('Je bent niet ingelogd');
        var url = "".concat(self.config.api && self.config.api.url, "/api/site/").concat(self.config.siteId, "/idea/").concat(self.config.ideaId, "/argument").concat(self.config.argumentId ? "/".concat(self.config.argumentId) : '');
        var headers = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].api.getHeaders(self.config);
        var method = self.config.argumentId ? 'PUT' : 'POST';
        var body = {
          parentId: self.config.parentId,
          sentiment: self.config.sentiment,
          description: self.state.description
        };
        fetch(url, {
          method: method,
          headers: headers,
          body: JSON.stringify(body)
        }).then(function (response) {
          if (response.ok) {
            return response.json();
          }

          throw response.text();
        }).then(function (json) {
          if (typeof self.config.onSubmit == 'function') {
            self.config.onSubmit({
              description: self.state.description
            });
          }

          self.setState({
            description: '',
            isBusy: false,
            isValid: false
          }, function () {
            self.description.handleOnChange({
              value: ''
            });

            if (self.config.argumentId) {
              var event = new CustomEvent('osc-reaction-edited', {
                detail: json
              });
              document.dispatchEvent(event);
            } else {
              var _event = new CustomEvent('osc-new-reaction-stored', {
                detail: json
              });

              document.dispatchEvent(_event);
            }
          });
        })["catch"](function (error) {
          error.then(function (messages) {
            alert(messages);
            return console.log(messages);
          });
          self.setState({
            isBusy: false,
            isValid: false
          });
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      var config = {
        descriptionMinLength: self.config.descriptionMinLength || 30,
        descriptionMaxLength: self.config.descriptionMaxLength || 500
      };
      var formIntro = null;

      if (self.config.formIntro) {
        formIntro = /*#__PURE__*/React.createElement("div", {
          className: "osc-intro"
        }, self.config.formIntro);
      }

      var submitButtonHTML = null;

      if (self.canSubmit()) {
        submitButtonHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-align-right-container"
        }, /*#__PURE__*/React.createElement("button", {
          onClick: function onClick(e) {
            if (!self.state.isBusy) self.submitForm();
          },
          className: "osc-button-blue".concat(!self.state.isValid || self.state.isBusy ? ' osc-disabled' : '')
        }, "Verzenden"));
      } else {
        submitButtonHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-align-right-container"
        }, /*#__PURE__*/React.createElement("button", {
          onClick: function onClick() {
            _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].localStorage.set('osc-reactions-login-pending', true);
            document.location.href = self.config.loginUrl;
          },
          className: "osc-button-blue osc-not-logged-in-button"
        }, "Inloggen"));
      }

      return /*#__PURE__*/React.createElement("div", {
        id: self.divId,
        className: "",
        ref: function ref(el) {
          return self.instance = el;
        }
      }, formIntro, /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].InputWithCounter, {
        disabled: this.canSubmit() ? null : true,
        config: {
          inputType: 'textarea',
          minLength: config.descriptionMinLength,
          maxLength: config.descriptionMaxLength,
          placeholder: self.config.placeholder
        },
        value: self.state.description,
        onChange: function onChange(data) {
          return self.handleOnChange({
            description: data.value
          });
        },
        ref: function ref(el) {
          return self.description = el;
        }
      }), submitButtonHTML);
    }
  }]);

  return OpenStadComponentReactionForm;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/reactions/component/reaction.jsx":
/*!**********************************************!*\
  !*** ./src/reactions/component/reaction.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentReaction; });
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/index.jsx */ "./src/libs/index.jsx");
/* harmony import */ var _reaction_form_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reaction-form.jsx */ "./src/reactions/component/reaction-form.jsx");


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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





var OpenStadComponentReaction = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentReaction, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentReaction);

  function OpenStadComponentReaction(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentReaction);

    _this = _super.call(this, props, {
      siteId: null,
      ideaId: null,
      title: null,
      descriptionMinLength: 30,
      descriptionMaxLength: 500,
      api: {
        url: null,
        headers: null
      },
      requiredUserRole: 'member'
    });
    _this.state = {
      user: props.user,
      isMenuActive: false,
      isReplyFromActive: false,
      editMode: false
    };
    return _this;
  }

  _createClass(OpenStadComponentReaction, [{
    key: "componentDidMount",
    value: function componentDidMount(prevProps, prevState) {
      var self = this;

      self.newReactionStoredListener = function (event) {
        self.onNewReactionStored(event.detail);
      };

      document.addEventListener('osc-new-reaction-stored', self.newReactionStoredListener);

      self.reactionEditedListener = function (event) {
        self.onReactionEdited(event.detail);
      };

      document.addEventListener('osc-reaction-edited', self.reactionEditedListener);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('osc-new-reaction-stored', this.newReactionStoredListener);
      document.removeEventListener('osc-reaction-edited', this.reactionEditedListener);
    }
  }, {
    key: "showMenu",
    value: function showMenu() {
      this.setState({
        isMenuActive: true
      });
    }
  }, {
    key: "toggleReplyForm",
    value: function toggleReplyForm() {
      this.setState({
        isReplyFromActive: !this.state.isReplyFromActive
      });
    }
  }, {
    key: "toggleEditForm",
    value: function toggleEditForm(what) {
      this.setState({
        editMode: !this.state.editMode
      });
    }
  }, {
    key: "canEdit",
    value: function canEdit() {
      return this.props.data.can.edit;
    }
  }, {
    key: "canDelete",
    value: function canDelete() {
      return this.props.data.can["delete"];
    }
  }, {
    key: "canLike",
    value: function canLike() {
      if (this.config.isClosed) return false;
      var requiredUserRole = this.config.requiredUserRole;
      var userRole = this.props.user && this.props.user.role;
      return requiredUserRole == 'anonymous' && userRole || requiredUserRole == 'member' && (userRole == 'member' || userRole == 'admin') || requiredUserRole == 'admin' && userRole == 'admin';
    }
  }, {
    key: "canReply",
    value: function canReply() {
      return this.props.data.can.reply;
    }
  }, {
    key: "submitDelete",
    value: function submitDelete() {
      var self = this;
      if (!self.canDelete()) return alert('U kunt deze reactie niet verwijderen');
      var url = "".concat(self.config.api && self.config.api.url, "/api/site/").concat(self.config.siteId, "/idea/").concat(self.config.ideaId, "/argument/").concat(self.props.data.id);
      var headers = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].api.getHeaders(self.config);
      var body = {};
      fetch(url, {
        method: 'DELETE',
        headers: headers,
        body: JSON.stringify(body)
      }).then(function (response) {
        if (response.ok) {
          return response.json();
        }

        throw response.text();
      }).then(function (json) {
        self.setState({
          isDeleted: true
        });
        var event = new CustomEvent('osc-reaction-deleted', {
          detail: {
            ideaId: self.config.ideaId
          }
        });
        document.dispatchEvent(event);
      })["catch"](function (error) {
        console.log(error);
        error.then(function (messages) {
          return console.log(messages);
        });
      });
    }
  }, {
    key: "submitLike",
    value: function submitLike() {
      var self = this;
      if (!self.canLike()) return alert('U kunt deze reactie niet liken');
      var url = "".concat(self.config.api && self.config.api.url, "/api/site/").concat(self.config.siteId, "/idea/").concat(self.config.ideaId, "/argument/").concat(self.props.data.id, "/vote");
      var headers = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].api.getHeaders(self.config);
      var body = {};
      fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
      }).then(function (response) {
        if (response.ok) {
          return response.json();
        }

        throw response.text();
      }).then(function (json) {
        // console.log({ yes: json.yes, hasUserVoted: json.hasUserVoted });
        self.setState({
          yes: json.yes,
          hasUserVoted: json.hasUserVoted
        });
      })["catch"](function (error) {
        console.log(error);
        error.then(function (messages) {
          return console.log(messages);
        });
      });
    }
  }, {
    key: "onNewReactionStored",
    value: function onNewReactionStored(reaction) {
      this.setState({
        isMenuActive: false,
        isReplyFromActive: false
      });
    }
  }, {
    key: "onReactionEdited",
    value: function onReactionEdited(reaction) {
      if (reaction.id == this.props.data.id) {
        this.setState({
          editMode: false,
          isMenuActive: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      var data = self.props.data || {
        can: {}
      };
      if (data.isDeleted) return null;
      var menuHTML = null;

      if (self.canEdit() && self.canDelete()) {
        menuHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-reaction-menu".concat(self.state.isMenuActive ? ' osc-reaction-hamburger-active' : ''),
          onClick: function onClick() {
            self.showMenu();
          }
        }, /*#__PURE__*/React.createElement("a", {
          className: "osc-reaction-delete",
          title: "Argument verwijderen",
          onClick: function onClick() {
            if (confirm('Weet je het zeker?')) self.submitDelete();
          }
        }), /*#__PURE__*/React.createElement("a", {
          className: "osc-reaction-edit",
          title: "Argument bewerken",
          onClick: function onClick() {
            return self.toggleEditForm();
          }
        }));
      }

      var descriptionHTML = /*#__PURE__*/React.createElement("div", {
        className: "osc-reaction-description"
      }, data.description);

      if (self.state.editMode) {
        descriptionHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-reaction-description"
        }, /*#__PURE__*/React.createElement(_reaction_form_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
          config: _objectSpread(_objectSpread({}, self.config), {}, {
            description: data.description,
            argumentId: data.id
          }),
          user: self.state.user,
          ref: function ref(el) {
            return self.editForm = el;
          }
        }));
      }

      var likeButtonHTML = null;

      if (!data.parentId) {
        likeButtonHTML = /*#__PURE__*/React.createElement("a", {
          className: "osc-reaction-like-button".concat((typeof self.state.hasUserVoted != 'undefined' ? self.state.hasUserVoted : data.hasUserVoted) ? ' osc-reaction-like-button-hasvoted' : ''),
          onClick: function onClick() {
            return self.submitLike();
          }
        }, "Mee eens (", /*#__PURE__*/React.createElement("span", null, (typeof self.state.yes != 'undefined' ? self.state.yes : data.yes) | 0), ")");
      }

      var replyButtonHTML = null;
      var replyFormHTML = null;

      if (self.canReply() && !self.config.isClosed) {
        replyButtonHTML = /*#__PURE__*/React.createElement("a", {
          onClick: function onClick() {
            return self.toggleReplyForm();
          },
          className: "osc-reply-button"
        }, "Reageren");

        if (self.state.isReplyFromActive) {
          var config = _objectSpread(_objectSpread({}, self.config), {}, {
            parentId: data.id
          });

          config.formIntro = '';
          replyFormHTML = /*#__PURE__*/React.createElement("div", {
            id: "osc-reaction-".concat(data.id),
            className: "osc-reply"
          }, /*#__PURE__*/React.createElement(_reaction_form_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
            config: config,
            user: self.state.user,
            ref: function ref(el) {
              return self.editForm = el;
            }
          }));
        }
      }

      var repliesHTML = null;

      if (data.reactions && data.reactions.length) {
        repliesHTML = /*#__PURE__*/React.createElement("ul", {
          className: "osc-reactions-list"
        }, data.reactions.map(function (reaction) {
          var key = "osc-reaction-key-".concat(reaction.id || parseInt(1000000 * Math.random()));
          return /*#__PURE__*/React.createElement("li", {
            key: key
          }, /*#__PURE__*/React.createElement(OpenStadComponentReaction, {
            config: self.config,
            className: "osc-reply",
            user: self.state.user,
            data: reaction
          }));
        }));
      }

      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        id: "osc-reaction-".concat(data.id),
        className: self.props.className || 'osc-reaction'
      }, menuHTML, /*#__PURE__*/React.createElement("div", {
        className: "osc-reaction-user"
      }, data.user.nickName || data.user.fullName || "".concat(data.user.firstName, " ").concat(data.user.lastName)), /*#__PURE__*/React.createElement("div", {
        className: "osc-reaction-date"
      }, data.createDateHumanized), descriptionHTML, likeButtonHTML, replyButtonHTML), replyFormHTML, repliesHTML);
    }
  }]);

  return OpenStadComponentReaction;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/reactions/component/reactions.jsx":
/*!***********************************************!*\
  !*** ./src/reactions/component/reactions.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentReactions; });
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/index.jsx */ "./src/libs/index.jsx");
/* harmony import */ var _reaction_form_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reaction-form.jsx */ "./src/reactions/component/reaction-form.jsx");
/* harmony import */ var _reaction_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reaction.jsx */ "./src/reactions/component/reaction.jsx");


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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






var OpenStadComponentReactions = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentReactions, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentReactions);

  function OpenStadComponentReactions(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentReactions);

    _this = _super.call(this, props, {
      scrollToNewReaction: true,
      isClosed: false,
      closedText: 'De reactiemogelijkheid is gesloten',
      sentiment: undefined,
      siteId: null,
      ideaId: null,
      title: null,
      user: null,
      loginUrl: '',
      api: {
        url: null,
        headers: null
      },
      requiredUserRole: 'member',
      placeholder: '',
      formIntro: ''
    });
    _this.state = {
      user: _this.config.user,
      reactions: []
    };
    return _this;
  }

  _createClass(OpenStadComponentReactions, [{
    key: "componentDidMount",
    value: function componentDidMount(prevProps, prevState) {
      var self = this; // user

      if (!(self.state.user && self.state.user.role)) {
        _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].user.getUser({
          user: self.config.user,
          jwt: self.config.jwt,
          siteId: self.config.siteId,
          api: self.config.api
        }, function (err, user) {
          self.setState({
            user: user
          }, function () {
            self.fetchData();
          });
        });
      } else {
        self.fetchData();
      }

      self.newReactionStoredListener = function (event) {
        self.onNewReactionStored(event.detail);
      };

      document.addEventListener('osc-new-reaction-stored', self.newReactionStoredListener);

      self.reactionEditedListener = function (event) {
        self.onReactionEdited(event.detail);
      };

      document.addEventListener('osc-reaction-edited', self.reactionEditedListener);

      self.reactionDeletedListener = function (event) {
        self.onReactionDeleted(event.detail);
      };

      document.addEventListener('osc-reaction-deleted', self.reactionDeletedListener);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('osc-new-reaction-stored', this.newReactionStoredListener);
      document.removeEventListener('osc-reaction-edited', this.reactionEditedListener);
      document.removeEventListener('osc-reaction-deleted', this.reactionDeletedListener);
    }
  }, {
    key: "fetchData",
    value: function fetchData(next) {
      var self = this;
      var url = "".concat(self.config.api && self.config.api.url, "/api/site/").concat(self.config.siteId, "/idea/").concat(self.config.ideaId, "/argument?sentiment=").concat(self.config.sentiment, "&withUser=1&withUserVote=1&withVoteCount=1&includeReactionsOnReactions=1");
      var headers = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].api.getHeaders(self.config);
      fetch(url, {
        headers: headers
      }).then(function (response) {
        if (response.ok) {
          return response.json();
        }

        throw response.text();
      }).then(function (json) {
        var state = _objectSpread({}, self.state);

        state.reactions = json;
        state.reactions.sort(function (a, b) {
          return a.createdAt < b.createdAt;
        }); // console.log(state.reactions);

        self.setState(state, function () {
          if (next) return next();
        });
      })["catch"](function (error) {
        console.log(error);
        error.then(function (messages) {
          return console.log(messages);
        });
      });
    }
  }, {
    key: "onNewReactionStored",
    value: function onNewReactionStored(reaction) {
      var _this2 = this;

      this.fetchData(function () {
        if (_this2.config.scrollToNewReaction) {
          var element = document.getElementById("osc-reaction-".concat(reaction.id));
          if (element) document.getElementById("osc-reaction-".concat(reaction.id)).scrollIntoView();
        }
      });
    }
  }, {
    key: "onReactionEdited",
    value: function onReactionEdited(reaction) {
      this.fetchData();
    }
  }, {
    key: "onReactionDeleted",
    value: function onReactionDeleted(reaction) {
      this.fetchData();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var self = this;
      var reactions = /*#__PURE__*/React.createElement("ul", {
        className: "osc-reactions-list"
      }, self.state.reactions.map(function (reaction) {
        var key = "osc-reaction-key-".concat(reaction.id || parseInt(1000000 * Math.random()));
        return /*#__PURE__*/React.createElement("li", {
          key: key
        }, /*#__PURE__*/React.createElement(_reaction_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
          config: self.config,
          user: self.state.user,
          data: _objectSpread({}, reaction)
        }));
      }));
      var title = self.config.title ? /*#__PURE__*/React.createElement("h3", null, self.config.title) : null;
      var reactionFormHTML = /*#__PURE__*/React.createElement(_reaction_form_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        config: self.config,
        user: self.state.user
      });

      if (self.config.isClosed) {
        if (self.config.closedText) {
          reactionFormHTML = /*#__PURE__*/React.createElement("div", {
            className: "osc-closed-text"
          }, self.config.closedText);
        } else {
          reactionFormHTML = null;
        }
      }

      return /*#__PURE__*/React.createElement("div", {
        id: this.id,
        className: self.props.className || 'osc-reactions',
        ref: function ref(el) {
          _this3.instance = el;
        }
      }, title, reactionFormHTML, reactions, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null));
    }
  }]);

  return OpenStadComponentReactions;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/reactions/css/default.less":
/*!****************************************!*\
  !*** ./src/reactions/css/default.less ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/reactions/index.jsx":
/*!*********************************!*\
  !*** ./src/reactions/index.jsx ***!
  \*********************************/
/*! exports provided: default, Reactions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_default_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/default.less */ "./src/reactions/css/default.less");
/* harmony import */ var _css_default_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_default_less__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_reactions_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/reactions.jsx */ "./src/reactions/component/reactions.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _component_reactions_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Reactions", function() { return _component_reactions_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]; });

// polyfills
 // react


 // import css to make sure it is generated in the result

 // the module

 // render elements

_component_reactions_jsx__WEBPACK_IMPORTED_MODULE_4__["default"].renderElement = function renderElement(elem, config) {
  var attributes = elem.attributes;
  react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_component_reactions_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
//# sourceMappingURL=reactions.js.map
>>>>>>> Add ideas-overview to ideas-on-map, including some refactoring
