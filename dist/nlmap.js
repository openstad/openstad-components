<<<<<<< HEAD
<<<<<<< HEAD
window.OpenStadComponents=function(r){var n={};function o(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}return o.m=r,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=36)}({0:function(t,e){t.exports=window.React},10:function(t,e,r){t.exports=r(15).Promise},11:function(t,e){var r,n,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(t){r=i}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(t){n=a}}();var c,u=[],l=!1,f=-1;function p(){l&&c&&(l=!1,c.length?u=c.concat(u):f=-1,u.length&&d())}function d(){if(!l){var t=s(p);l=!0;for(var e=u.length;e;){for(c=u,u=[];++f<e;)c&&c[f].run();f=-1,e=u.length}c=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function y(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(1<arguments.length)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];u.push(new h(t,e)),1!==u.length||l||s(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},15:function(t,e,ft){(function(ct,ut){var lt;t.exports=function(){"use strict";function r(t){return typeof t==="function"||typeof t==="object"&&t!==null}function u(t){return typeof t==="function"}var t=undefined;if(!Array.isArray){t=function(t){return Object.prototype.toString.call(t)==="[object Array]"}}else{t=Array.isArray}var n=t,o=0,i=undefined,a=undefined,s=function t(e,r){g[o]=e;g[o+1]=r;o+=2;if(o===2){if(a){a(w)}else{C()}}};function e(t){a=t}function c(t){s=t}var l=typeof window!=="undefined"?window:undefined,f=l||{},p=f.MutationObserver||f.WebKitMutationObserver,d=typeof self==="undefined"&&typeof ct!=="undefined"&&{}.toString.call(ct)==="[object process]",h=typeof Uint8ClampedArray!=="undefined"&&typeof importScripts!=="undefined"&&typeof MessageChannel!=="undefined";function y(){return function(){return ct.nextTick(w)}}function m(){return function(){i(w)}}function _(){var t=0;var e=new p(w);var r=document.createTextNode("");e.observe(r,{characterData:true});return function(){r.data=t=++t%2}}function v(){var t=new MessageChannel;t.port1.onmessage=w;return function(){return t.port2.postMessage(0)}}function b(){var t=setTimeout;return function(){return t(w,1)}}var g=new Array(1e3);function w(){for(var t=0;t<o;t+=2){var e=g[t];var r=g[t+1];e(r);g[t]=undefined;g[t+1]=undefined}o=0}function k(){try{var t=lt;var e=ft(16);i=e.runOnLoop||e.runOnContext;return m()}catch(t){return b()}}var C=undefined;if(d){C=y()}else if(p){C=_()}else if(h){C=v()}else if(l===undefined&&"function"==="function"){C=k()}else{C=b()}function O(t,e){var r=arguments;var n=this;var o=new this.constructor(M);if(o[P]===undefined){$(o)}var i=n._state;if(i){(function(){var t=r[i-1];s(function(){return Z(i,o,t,n._result)})})()}else{K(n,o,t,e)}return o}function E(t){var e=this;if(t&&typeof t==="object"&&t.constructor===e){return t}var r=new e(M);U(r,t);return r}var P=Math.random().toString(36).substring(16);function M(){}var A=void 0,T=1,j=2,L=new z;function S(){return new TypeError("You cannot resolve a promise with itself")}function x(){return new TypeError("A promises callback cannot return that same promise.")}function D(t){try{return t.then}catch(t){L.error=t;return L}}function F(t,e,r,n){try{t.call(e,r,n)}catch(t){return t}}function R(t,n,o){s(function(e){var r=false;var t=F(o,n,function(t){if(r){return}r=true;if(n!==t){U(e,t)}else{q(e,t)}},function(t){if(r){return}r=true;G(e,t)},"Settle: "+(e._label||" unknown promise"));if(!r&&t){r=true;G(e,t)}},t)}function B(e,t){if(t._state===T){q(e,t._result)}else if(t._state===j){G(e,t._result)}else{K(t,undefined,function(t){return U(e,t)},function(t){return G(e,t)})}}function I(t,e,r){if(e.constructor===t.constructor&&r===O&&e.constructor.resolve===E){B(t,e)}else{if(r===L){G(t,L.error)}else if(r===undefined){q(t,e)}else if(u(r)){R(t,e,r)}else{q(t,e)}}}function U(t,e){if(t===e){G(t,S())}else if(r(e)){I(t,e,D(e))}else{q(t,e)}}function N(t){if(t._onerror){t._onerror(t._result)}W(t)}function q(t,e){if(t._state!==A){return}t._result=e;t._state=T;if(t._subscribers.length!==0){s(W,t)}}function G(t,e){if(t._state!==A){return}t._state=j;t._result=e;s(N,t)}function K(t,e,r,n){var o=t._subscribers;var i=o.length;t._onerror=null;o[i]=e;o[i+T]=r;o[i+j]=n;if(i===0&&t._state){s(W,t)}}function W(t){var e=t._subscribers;var r=t._state;if(e.length===0){return}var n=undefined,o=undefined,i=t._result;for(var a=0;a<e.length;a+=3){n=e[a];o=e[a+r];if(n){Z(r,n,o,i)}else{o(i)}}t._subscribers.length=0}function z(){this.error=null}var H=new z;function Y(t,e){try{return t(e)}catch(t){H.error=t;return H}}function Z(t,e,r,n){var o=u(r),i=undefined,a=undefined,s=undefined,c=undefined;if(o){i=Y(r,n);if(i===H){c=true;a=i.error;i=null}else{s=true}if(e===i){G(e,x());return}}else{i=n;s=true}if(e._state!==A){}else if(o&&s){U(e,i)}else if(c){G(e,a)}else if(t===T){q(e,i)}else if(t===j){G(e,i)}}function J(r,t){try{t(function t(e){U(r,e)},function t(e){G(r,e)})}catch(t){G(r,t)}}var V=0;function X(){return V++}function $(t){t[P]=V++;t._state=undefined;t._result=undefined;t._subscribers=[]}function Q(t,e){this._instanceConstructor=t;this.promise=new t(M);if(!this.promise[P]){$(this.promise)}if(n(e)){this._input=e;this.length=e.length;this._remaining=e.length;this._result=new Array(this.length);if(this.length===0){q(this.promise,this._result)}else{this.length=this.length||0;this._enumerate();if(this._remaining===0){q(this.promise,this._result)}}}else{G(this.promise,tt())}}function tt(){return new Error("Array Methods must be provided an Array")}function et(t){return new Q(this,t).promise}function rt(o){var i=this;if(n(o))return new i(function(t,e){for(var r=o.length,n=0;n<r;n++)i.resolve(o[n]).then(t,e)});else return new i(function(t,e){return e(new TypeError("You must pass an array to race."))})}function nt(t){var e=new this(M);return G(e,t),e}function ot(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function it(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function at(t){this[P]=X();this._result=this._state=undefined;this._subscribers=[];if(M!==t){typeof t!=="function"&&ot();this instanceof at?J(this,t):it()}}function st(){var t=undefined;if(typeof ut!=="undefined"){t=ut}else if(typeof self!=="undefined"){t=self}else{try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}}var e=t.Promise;if(e){var r=null;try{r=Object.prototype.toString.call(e.resolve())}catch(t){}if(r==="[object Promise]"&&!e.cast){return}}t.Promise=at}return Q.prototype._enumerate=function(){for(var t=this.length,e=this._input,r=0;this._state===A&&r<t;r++)this._eachEntry(e[r],r)},Q.prototype._eachEntry=function(e,t){var r,n,o=this._instanceConstructor,i=o.resolve;i===E?(r=D(e))===O&&e._state!==A?this._settledAt(e._state,t,e._result):"function"!=typeof r?(this._remaining--,this._result[t]=e):o===at?(I(n=new o(M),e,r),this._willSettleAt(n,t)):this._willSettleAt(new o(function(t){return t(e)}),t):this._willSettleAt(i(e),t)},Q.prototype._settledAt=function(t,e,r){var n=this.promise;n._state===A&&(this._remaining--,t===j?G(n,r):this._result[e]=r),0===this._remaining&&q(n,this._result)},Q.prototype._willSettleAt=function(t,e){var r=this;K(t,void 0,function(t){return r._settledAt(T,e,t)},function(t){return r._settledAt(j,e,t)})},at.all=function(t){return new Q(this,t).promise},at.race=function(o){var i=this;return n(o)?new i(function(t,e){for(var r=o.length,n=0;n<r;n++)i.resolve(o[n]).then(t,e)}):new i(function(t,e){return e(new TypeError("You must pass an array to race."))})},at.resolve=E,at.reject=function(t){var e=new this(M);return G(e,t),e},at._setScheduler=function(t){a=t},at._setAsap=function(t){s=t},at._asap=s,at.prototype={constructor:at,then:O,catch:function(t){return this.then(null,t)}},st(),at.polyfill=st,at.Promise=at}()}).call(this,ft(11),ft(8))},16:function(t,e){},20:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return OpenStadComponentNLMap});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),react_dom__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__),_component_index_jsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),_lib_amaps_cluster_icon_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(58);function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function ownKeys(e,t){var r,n=Object.keys(e);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(e),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)),n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){_defineProperty(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function _defineProperty(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(r){var n=_isNativeReflectConstruct();return function(){var t,e=_getPrototypeOf(r);return _possibleConstructorReturn(this,n?(t=_getPrototypeOf(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments))}}function _possibleConstructorReturn(t,e){return!e||"object"!==_typeof(e)&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var OpenStadComponentNLMap=function(_OpenStadComponent){_inherits(OpenStadComponentNLMap,_OpenStadComponent);var _super=_createSuper(OpenStadComponentNLMap);function OpenStadComponentNLMap(t){var e;_classCallCheck(this,OpenStadComponentNLMap);var r=_assertThisInitialized(e=_super.call(this,t)),n={target:r.divId,style:"standaard",marker:!1,search:!1,center:{latitude:52.37104644463586,longitude:4.900402911007405},zoom:14,zoomposition:"bottomleft",disableDefaultUI:!0,polygon:null,autoZoomAndCenter:!1};switch(r.config=Object.assign(n,r.config||{}),r._loadedFiles=0,r.files=[{type:"css",href:"https://unpkg.com/leaflet@1.0.3/dist/leaflet.css"},{type:"script",src:"https://unpkg.com/leaflet@1.0.3/dist/leaflet.js"}],r.config.variant){case"amaps":r.files.push({type:"script",src:"https://map.data.amsterdam.nl/dist/amaps.iife.js"});break;default:r.files.push({type:"css",href:"https://nlmaps.nl/dist/assets/css/nlmaps.css"}),r.files.push({type:"script",src:"https://nlmaps.nl/dist/nlmaps.iife.js"})}return r.files.push({type:"css",href:"https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.css"}),r.files.push({type:"script",src:"https://unpkg.com/leaflet.markercluster@1.4.1/dist/leaflet.markercluster.js"}),r.markers=r.config.markers||[],e}return _createClass(OpenStadComponentNLMap,[{key:"componentDidMount",value:function(){var e=this;e.loadNextFile(function(){e.createMap(),e.mapIsReady=!0;var t=new CustomEvent("osc-map-is-ready",{detail:{id:e.divId}});document.dispatchEvent(t)})}},{key:"loadNextFile",value:function(t){var e,r=this,n=r.files[r._loadedFiles];n&&("script"===n.type&&((e=document.createElement("script")).src=n.src,e.async=!0),"css"===n.type&&((e=document.createElement("link")).href=n.href,e.rel="stylesheet"),e&&(e.onload=function(){r.loadNextFile(t)},this.instance.appendChild(e))),r._loadedFiles==r.files.length&&t(),r._loadedFiles++}},{key:"createMap",value:function createMap(){var self=this,iconCreateFunction,centerOn;switch(self.config.variant){case"amaps":self.map=amaps.createMap(_objectSpread({},self.config));break;default:self.map=nlmaps.createMap(self.config)}0==self.config.zoomControl&&self.map.removeControl(self.map.zoomControl),self.config.clustering&&self.config.clustering.isActive&&L.markerClusterGroup&&(iconCreateFunction=self.config.clustering.iconCreateFunction||_lib_amaps_cluster_icon_js__WEBPACK_IMPORTED_MODULE_3__.a.bind(self),iconCreateFunction&&"string"==typeof iconCreateFunction&&(iconCreateFunction=eval(iconCreateFunction)),self.markerClusterGroup=L.markerClusterGroup({iconCreateFunction:iconCreateFunction,showCoverageOnHover:self.config.clustering.showCoverageOnHover,maxClusterRadius:self.config.clustering.maxClusterRadius||80}),self.markerClusterGroup.on("clusterclick",self.onClusterClick),self.markerClusterGroup.on("animationend",self.onClusterAnimationEnd),self.map.addLayer(self.markerClusterGroup)),self.map.on("click",self.onMapClick),self.config.polygon&&self.createCutoutPolygon(self.config.polygon),self.markers.length&&self.markers.forEach(function(t){self.addMarker(t)}),self.config.autoZoomAndCenter&&(centerOn="polygon"==self.config.autoZoomAndCenter&&self.config.polygon||self.markers&&self.markers.length&&self.markers,self.editorMarker&&(centerOn=self.editorMarker.position?[self.editorMarker]:self.config.polygon),centerOn&&self.setBoundsAndCenter(centerOn))}},{key:"addMarkers",value:function(t){var e=this;t.forEach(function(t){e.addMarker(t)})}},{key:"addMarker",value:function addMarker(markerData){var self=this,icon=markerData.icon,iconCreateFunction,marker;icon||(iconCreateFunction=self.config.iconCreateFunction,iconCreateFunction&&"string"==typeof iconCreateFunction&&(iconCreateFunction=eval(iconCreateFunction),icon=iconCreateFunction())),marker=icon?L.marker([markerData.lat,markerData.lng],{icon:icon}):L.marker([markerData.lat,markerData.lng]),marker.visible=!0,marker.data=markerData.data,marker.doNotCluster=markerData.doNotCluster,markerData.href&&(markerData.onClick=function(){document.location.href=markerData.href});var onClick=self.onMarkerClick;return onClick&&("string"==typeof onClick&&(onClick=eval(onClick)),marker.on("click",onClick)),self.markerClusterGroup&&!markerData.doNotCluster?self.markerClusterGroup.addLayer(marker):self.map.addLayer(marker),self.markers.push(marker),marker}},{key:"removeMarker",value:function(t){var e;!t||-1<(e=this.markers.indexOf(t))&&(this.markers.splice(e,1),this.map.removeLayer(t),this.markerClusterGroup.removeLayer(t))}},{key:"updateMarker",value:function(t,e){var r;e.location&&(r=new L.LatLng(e.location.lat,e.location.lng),t.setLatLng(r))}},{key:"createClusterIcon",value:function(t){var e=t.getChildCount();return L.divIcon({html:e,className:"osc-nlmap-icon-cluster",iconSize:L.point(20,20),iconAnchor:[20,10]})}},{key:"createCutoutPolygon",value:function(t){var i=L.polygon(t).getBounds().getCenter(),a=0,s=0;t.forEach(function(t,e){var r=Math.sin(t.lng-i.lng)*Math.cos(t.lat),n=Math.cos(i.lat)*Math.sin(t.lat)-Math.sin(i.lat)*Math.cos(t.lat)*Math.cos(t.lng-i.lng),o=180*Math.atan2(r,n)/Math.PI;45-o<a&&(a=45-o,s=e)});var e=t.slice(0,s);t=t.slice(s,t.length).concat(e);var r=[{lat:-85,lng:-179.99},{lat:-85,lng:0},{lat:-85,lng:179.99},{lat:0,lng:179.99},{lat:85,lng:179.99},{lat:85,lng:0},{lat:85,lng:-179.99},{lat:85,lng:-179.99},{lat:0,lng:-179.99}],n=Object.assign({color:"#d00",fillColor:"#000",fillOpacity:.15},this.config.polygonStyle),o=L.polygon([r,t],n);return this.map.addLayer(o),o}},{key:"removePolygon",value:function(t){t&&this.map.removeLayer(t)}},{key:"setBoundsAndCenter",value:function(t){var e,r,n=this;Array.isArray(t)?(e=[],t.forEach(function(t){t._latlng?t=t._latlng:t.position&&(t=t.position.coordinates?{lat:t.position.coordinates[0],lng:t.position.coordinates[1]}:t.position),e.push(t)}),1==e.length?n.map.panTo(new L.LatLng(e[0].lat,e[0].lng)):(r=L.latLngBounds(e),n.map.fitBounds(r))):n.map.panTo(new L.LatLng(n.config.center.latitude,n.config.center.longitude))}},{key:"showMarkers",value:function(t){var e=this;t.forEach(function(t){e.showMarker(t)})}},{key:"showMarker",value:function(t){t.visible=!0,this.markerClusterGroup&&!t.doNotCluster?this.markerClusterGroup.addLayer(t):t.addTo(this.map)}},{key:"hideMarkers",value:function(t){var e=this;t.forEach(function(t){e.hideMarker(t)})}},{key:"hideMarker",value:function(t){t.visible=!1,this.markerClusterGroup&&!t.doNotCluster?this.markerClusterGroup.removeLayer(t):t.remove(this.map)}},{key:"setFilter",value:function(t){this.filterFunction=t,this.applyFilter()}},{key:"applyFilter",value:function(){var e=this;e.filterFunction?e.markers.forEach(function(t){e.filterFunction(t)?e.showMarker(t):e.hideMarker(t)}):e.markers.forEach(function(t){e.showMarker(t)})}},{key:"isPointInPolygon",value:function(t,e){if(!t)return!1;if(!e)return!0;for(var r=t.lat,n=t.lng,o=!1,i=0,a=e.length-1;i<e.length;a=i++){var s=e[i].lat,c=e[i].lng,u=e[a].lat,l=e[a].lng;n<c!=n<l&&r<(u-s)*(n-c)/(l-c)+s&&(o=!o)}return o}},{key:"getPointInfo",value:function(n,o,i){var t="https://api.data.amsterdam.nl/bag/nummeraanduiding/?format=json&locatie=[[lat]],[[lng]],50".replace(/\[\[lat\]\]/,(n=n||{}).lat).replace(/\[\[lng\]\]/,n.lng);fetch(t).then(function(t){return t.json()}).then(function(t){var e=t&&t.results&&t.results[0]&&t.results[0].landelijk_id,r="https://api.data.amsterdam.nl/bag/nummeraanduiding/[[id]]/?format=json".replace(/\[\[id\]\]/,e);fetch(r).then(function(t){return t.json()}).then(function(t){t.lat=n.lat,t.lng=n.lng,i&&i(t,o)})}).catch(function(t){console.log("Zoek adres: niet goed"),console.log(t),i&&i({},o)})}},{key:"onMapClick",value:function(t){var e=new CustomEvent("osc-map-click",{detail:t});document.dispatchEvent(e)}},{key:"onMarkerClick",value:function(t){var e=new CustomEvent("osc-map-marker-click",{detail:t});document.dispatchEvent(e)}},{key:"onClusterClick",value:function(t){var e=new CustomEvent("osc-map-cluster-click",{detail:t});document.dispatchEvent(e)}},{key:"onClusterAnimationEnd",value:function(t){var e=new CustomEvent("osc-map-cluster-animation-end",{detail:t});document.dispatchEvent(e)}},{key:"render",value:function(){var e=this;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{id:this.divId,className:this.props.className||"osc-nlmap",ref:function(t){return e.instance=t}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{id:this.divId+"-map"}))}}]),OpenStadComponentNLMap}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_2__.a)},3:function(t,e){t.exports=window.ReactDOM},36:function(t,e,r){"use strict";r.r(e);r(6);var n=r(0),o=r.n(n),i=r(3),a=r.n(i),s=(r(97),r(20));r.d(e,"default",function(){return s.a}),r.d(e,"NLMap",function(){return s.a}),s.a.renderElement=function(t,e){var r=t.attributes;a.a.render(o.a.createElement(s.a,{attributes:r,config:e}),t)}},4:function(t,e,r){"use strict";r.d(e,"a",function(){return o});var n=r(0),a=r.n(n);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e,r,n,o=p(i);return e=a?(t=p(this).constructor,Reflect.construct(o,arguments,t)):o.apply(this,arguments),r=this,!(n=e)||"object"!==s(n)&&"function"!=typeof n?f(r):n}}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var o=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(i,a.a.Component);var t,e,r,o=l(i);function i(r){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i);var n=f(t=o.call(this,r));if(r.attributes&&Object.keys(r.attributes).forEach(function(t){var e=r.attributes[t];n[e.name]=e.value}),n.config=n.config||r.config,n.config)try{n.config=JSON.parse(n.config)}catch(t){}return n.divId=n.divId||n.config&&n.config.divId||r.id||"openstad-component-".concat(parseInt(1e8*Math.random())),window[n.divId]=f(t),t}return t=i,(e=[{key:"componentDidMount",value:function(){}}])&&c(t.prototype,e),r&&c(t,r),i}()},58:function(module,__webpack_exports__,__webpack_require__){"use strict";function amapsCreateClusterIcon(cluster){var self=this,count=cluster.getChildCount(),markers=cluster.getAllChildMarkers(),colors={},total=markers.length,isFaded=!1;markers.forEach(function(entry){var type=entry.data&&eval("entry.data.".concat(self.config.typeField)),tmp=self.config.types.find(function(t){return type&&(t.id==type||t.name==type)}),color=tmp&&(tmp.color||tmp.backgroundColor)||"#164995";null==type&&(type="undef"),colors[color]||(colors[color]=0),colors[color]++,entry.data&&entry.data.isFaded&&(isFaded=!0)});var html='<svg viewBox="0 0 36 36"><circle cx="18" cy="18" r="14" fill="white"/>',soFar=0;return Object.keys(colors).forEach(function(t){var e=t,r=100*colors[t]/total;html+='  <path\n             d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"\n             fill="none"\n             transform="rotate('.concat(soFar/100*360,', 18, 18)"\n             stroke="').concat(e,'"\n             stroke-width="4"\n             stroke-dasharray="').concat(r,', 100"\n             />'),soFar+=r}),html+='<text x="18" y="21" text-anchor="middle" class="openstad-component-ideas-on-map-icon openstad-component-ideas-on-map-icon-text">'+count+"</text></svg>",L.divIcon({html:html,className:"openstad-component-ideas-on-map-icon-cluster",iconSize:L.point(36,36),iconAnchor:[18,18],isFaded:isFaded})}__webpack_require__.d(__webpack_exports__,"a",function(){return amapsCreateClusterIcon})},6:function(t,e,r){"use strict";(function(i){var e,r,n="URLSearchParams"in self,o="Symbol"in self&&"iterator"in Symbol,s="FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),a="FormData"in self,c="ArrayBuffer"in self;function u(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function l(t){return"string"!=typeof t&&(t=String(t)),t}function t(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return o&&(t[Symbol.iterator]=function(){return t}),t}function f(e){this.map={},e instanceof f?e.forEach(function(t,e){this.append(e,t)},this):Array.isArray(e)?e.forEach(function(t){this.append(t[0],t[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function p(t){if(t.bodyUsed)return i.reject(new TypeError("Already read"));t.bodyUsed=!0}function d(r){return new i(function(t,e){r.onload=function(){t(r.result)},r.onerror=function(){e(r.error)}})}function h(t){var e=new FileReader,r=d(e);return e.readAsArrayBuffer(t),r}function y(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function m(){return this.bodyUsed=!1,this._initBody=function(t){var e;(this._bodyInit=t)?"string"==typeof t?this._bodyText=t:s&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:a&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:n&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():c&&s&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=y(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):c&&(ArrayBuffer.prototype.isPrototypeOf(t)||r(t))?this._bodyArrayBuffer=y(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},s&&(this.blob=function(){var t=p(this);if(t)return t;if(this._bodyBlob)return i.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return i.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return i.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?p(this)||i.resolve(this._bodyArrayBuffer):this.blob().then(h)}),this.text=function(){var t,e,r,n=p(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=d(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return i.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return i.resolve(this._bodyText)},a&&(this.formData=function(){return this.text().then(b)}),this.json=function(){return this.text().then(JSON.parse)},this}c&&(e=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],r=ArrayBuffer.isView||function(t){return t&&-1<e.indexOf(Object.prototype.toString.call(t))}),f.prototype.append=function(t,e){t=u(t),e=l(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},f.prototype.delete=function(t){delete this.map[u(t)]},f.prototype.get=function(t){return t=u(t),this.has(t)?this.map[t]:null},f.prototype.has=function(t){return this.map.hasOwnProperty(u(t))},f.prototype.set=function(t,e){this.map[u(t)]=l(e)},f.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},f.prototype.keys=function(){var r=[];return this.forEach(function(t,e){r.push(e)}),t(r)},f.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),t(e)},f.prototype.entries=function(){var r=[];return this.forEach(function(t,e){r.push([e,t])}),t(r)},o&&(f.prototype[Symbol.iterator]=f.prototype.entries);var _=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function v(t,e){var r,n,o=(e=e||{}).body;if(t instanceof v){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new f(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new f(e.headers)),this.method=(r=e.method||this.method||"GET",n=r.toUpperCase(),-1<_.indexOf(n)?n:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function b(t){var o=new FormData;return t.trim().split("&").forEach(function(t){var e,r,n;t&&(r=(e=t.split("=")).shift().replace(/\+/g," "),n=e.join("=").replace(/\+/g," "),o.append(decodeURIComponent(r),decodeURIComponent(n)))}),o}function g(t,e){e=e||{},this.type="default",this.status=void 0===e.status?200:e.status,this.ok=200<=this.status&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new f(e.headers),this.url=e.url||"",this._initBody(t)}v.prototype.clone=function(){return new v(this,{body:this._bodyInit})},m.call(v.prototype),m.call(g.prototype),g.prototype.clone=function(){return new g(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new f(this.headers),url:this.url})},g.error=function(){var t=new g(null,{status:0,statusText:""});return t.type="error",t};var w=[301,302,303,307,308];g.redirect=function(t,e){if(-1===w.indexOf(e))throw new RangeError("Invalid status code");return new g(null,{status:e,headers:{location:t}})};var k=self.DOMException;try{new k}catch(t){(k=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),k.prototype.constructor=k}function C(o,a){return new i(function(n,t){var e=new v(o,a);if(e.signal&&e.signal.aborted)return t(new k("Aborted","AbortError"));var i=new XMLHttpRequest;function r(){i.abort()}i.onload=function(){var t,o,e={status:i.status,statusText:i.statusText,headers:(t=i.getAllResponseHeaders()||"",o=new f,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var e,r=t.split(":"),n=r.shift().trim();n&&(e=r.join(":").trim(),o.append(n,e))}),o)};e.url="responseURL"in i?i.responseURL:e.headers.get("X-Request-URL");var r="response"in i?i.response:i.responseText;n(new g(r,e))},i.onerror=function(){t(new TypeError("Network request failed"))},i.ontimeout=function(){t(new TypeError("Network request failed"))},i.onabort=function(){t(new k("Aborted","AbortError"))},i.open(e.method,e.url,!0),"include"===e.credentials?i.withCredentials=!0:"omit"===e.credentials&&(i.withCredentials=!1),"responseType"in i&&s&&(i.responseType="blob"),e.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),e.signal&&(e.signal.addEventListener("abort",r),i.onreadystatechange=function(){4===i.readyState&&e.signal.removeEventListener("abort",r)}),i.send(void 0===e._bodyInit?null:e._bodyInit)})}C.polyfill=!0,self.fetch||(self.fetch=C,self.Headers=f,self.Request=v,self.Response=g)}).call(this,r(10))},8:function(t,e){var r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},97:function(t,e,r){}});
=======
window.OpenStadComponents=function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}return o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=37)}({0:function(e,t){e.exports=window.React},1:function(e,t,n){(function(e){function t(e,t,n){var r=n[0],o=n.length;!e&&"object"===u(r)||(r={});for(var i=0;i<o;++i){var a,s=n[i];if("object"===u(s))for(var c in s){"__proto__"!==c&&(a=e?l.clone(s[c]):s[c],r[c]=t?function e(t,n){if("object"!==u(t))return n;for(var r in n)"object"===u(t[r])&&"object"===u(n[r])?t[r]=e(t[r],n[r]):t[r]=n[r];return t}(r[c],a):a)}}return r}function u(e){return{}.toString.call(e).slice(8,-1).toLowerCase()}var n,l;n=e&&"object"==typeof e.exports&&e.exports,(l=function(e){return t(!0===e,!1,arguments)}).recursive=function(e){return t(!0===e,!0,arguments)},l.clone=function(e){var t,n,r=e,o=u(e);if("array"===o)for(r=[],n=e.length,t=0;t<n;++t)r[t]=l.clone(e[t]);else if("object"===o)for(t in r={},e)r[t]=l.clone(e[t]);return r},n?e.exports=l:window.merge=l}).call(this,n(17)(e))},11:function(e,t,n){e.exports=n(14).Promise},14:function(e,t,fe){(function(ce,ue){var le;e.exports=function(){"use strict";function n(e){return typeof e==="function"||typeof e==="object"&&e!==null}function u(e){return typeof e==="function"}var e=undefined;if(!Array.isArray){e=function(e){return Object.prototype.toString.call(e)==="[object Array]"}}else{e=Array.isArray}var r=e,o=0,i=undefined,a=undefined,s=function e(t,n){g[o]=t;g[o+1]=n;o+=2;if(o===2){if(a){a(w)}else{C()}}};function t(e){a=e}function c(e){s=e}var l=typeof window!=="undefined"?window:undefined,f=l||{},p=f.MutationObserver||f.WebKitMutationObserver,d=typeof self==="undefined"&&typeof ce!=="undefined"&&{}.toString.call(ce)==="[object process]",h=typeof Uint8ClampedArray!=="undefined"&&typeof importScripts!=="undefined"&&typeof MessageChannel!=="undefined";function y(){return function(){return ce.nextTick(w)}}function _(){return function(){i(w)}}function m(){var e=0;var t=new p(w);var n=document.createTextNode("");t.observe(n,{characterData:true});return function(){n.data=e=++e%2}}function v(){var e=new MessageChannel;e.port1.onmessage=w;return function(){return e.port2.postMessage(0)}}function b(){var e=setTimeout;return function(){return e(w,1)}}var g=new Array(1e3);function w(){for(var e=0;e<o;e+=2){var t=g[e];var n=g[e+1];t(n);g[e]=undefined;g[e+1]=undefined}o=0}function k(){try{var e=le;var t=fe(16);i=t.runOnLoop||t.runOnContext;return _()}catch(e){return b()}}var C=undefined;if(d){C=y()}else if(p){C=m()}else if(h){C=v()}else if(l===undefined&&"function"==="function"){C=k()}else{C=b()}function O(e,t){var n=arguments;var r=this;var o=new this.constructor(j);if(o[P]===undefined){$(o)}var i=r._state;if(i){(function(){var e=n[i-1];s(function(){return Z(i,o,e,r._result)})})()}else{K(r,o,e,t)}return o}function E(e){var t=this;if(e&&typeof e==="object"&&e.constructor===t){return e}var n=new t(j);U(n,e);return n}var P=Math.random().toString(36).substring(16);function j(){}var M=void 0,A=1,T=2,L=new z;function x(){return new TypeError("You cannot resolve a promise with itself")}function S(){return new TypeError("A promises callback cannot return that same promise.")}function D(e){try{return e.then}catch(e){L.error=e;return L}}function F(e,t,n,r){try{e.call(t,n,r)}catch(e){return e}}function I(e,r,o){s(function(t){var n=false;var e=F(o,r,function(e){if(n){return}n=true;if(r!==e){U(t,e)}else{q(t,e)}},function(e){if(n){return}n=true;G(t,e)},"Settle: "+(t._label||" unknown promise"));if(!n&&e){n=true;G(t,e)}},e)}function R(t,e){if(e._state===A){q(t,e._result)}else if(e._state===T){G(t,e._result)}else{K(e,undefined,function(e){return U(t,e)},function(e){return G(t,e)})}}function B(e,t,n){if(t.constructor===e.constructor&&n===O&&t.constructor.resolve===E){R(e,t)}else{if(n===L){G(e,L.error)}else if(n===undefined){q(e,t)}else if(u(n)){I(e,t,n)}else{q(e,t)}}}function U(e,t){if(e===t){G(e,x())}else if(n(t)){B(e,t,D(t))}else{q(e,t)}}function N(e){if(e._onerror){e._onerror(e._result)}W(e)}function q(e,t){if(e._state!==M){return}e._result=t;e._state=A;if(e._subscribers.length!==0){s(W,e)}}function G(e,t){if(e._state!==M){return}e._state=T;e._result=t;s(N,e)}function K(e,t,n,r){var o=e._subscribers;var i=o.length;e._onerror=null;o[i]=t;o[i+A]=n;o[i+T]=r;if(i===0&&e._state){s(W,e)}}function W(e){var t=e._subscribers;var n=e._state;if(t.length===0){return}var r=undefined,o=undefined,i=e._result;for(var a=0;a<t.length;a+=3){r=t[a];o=t[a+n];if(r){Z(n,r,o,i)}else{o(i)}}e._subscribers.length=0}function z(){this.error=null}var H=new z;function Y(e,t){try{return e(t)}catch(e){H.error=e;return H}}function Z(e,t,n,r){var o=u(n),i=undefined,a=undefined,s=undefined,c=undefined;if(o){i=Y(n,r);if(i===H){c=true;a=i.error;i=null}else{s=true}if(t===i){G(t,S());return}}else{i=r;s=true}if(t._state!==M){}else if(o&&s){U(t,i)}else if(c){G(t,a)}else if(e===A){q(t,i)}else if(e===T){G(t,i)}}function J(n,e){try{e(function e(t){U(n,t)},function e(t){G(n,t)})}catch(e){G(n,e)}}var V=0;function X(){return V++}function $(e){e[P]=V++;e._state=undefined;e._result=undefined;e._subscribers=[]}function Q(e,t){this._instanceConstructor=e;this.promise=new e(j);if(!this.promise[P]){$(this.promise)}if(r(t)){this._input=t;this.length=t.length;this._remaining=t.length;this._result=new Array(this.length);if(this.length===0){q(this.promise,this._result)}else{this.length=this.length||0;this._enumerate();if(this._remaining===0){q(this.promise,this._result)}}}else{G(this.promise,ee())}}function ee(){return new Error("Array Methods must be provided an Array")}function te(e){return new Q(this,e).promise}function ne(o){var i=this;if(r(o))return new i(function(e,t){for(var n=o.length,r=0;r<n;r++)i.resolve(o[r]).then(e,t)});else return new i(function(e,t){return t(new TypeError("You must pass an array to race."))})}function re(e){var t=new this(j);return G(t,e),t}function oe(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function ie(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function ae(e){this[P]=X();this._result=this._state=undefined;this._subscribers=[];if(j!==e){typeof e!=="function"&&oe();this instanceof ae?J(this,e):ie()}}function se(){var e=undefined;if(typeof ue!=="undefined"){e=ue}else if(typeof self!=="undefined"){e=self}else{try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}}var t=e.Promise;if(t){var n=null;try{n=Object.prototype.toString.call(t.resolve())}catch(e){}if(n==="[object Promise]"&&!t.cast){return}}e.Promise=ae}return Q.prototype._enumerate=function(){for(var e=this.length,t=this._input,n=0;this._state===M&&n<e;n++)this._eachEntry(t[n],n)},Q.prototype._eachEntry=function(t,e){var n,r,o=this._instanceConstructor,i=o.resolve;i===E?(n=D(t))===O&&t._state!==M?this._settledAt(t._state,e,t._result):"function"!=typeof n?(this._remaining--,this._result[e]=t):o===ae?(B(r=new o(j),t,n),this._willSettleAt(r,e)):this._willSettleAt(new o(function(e){return e(t)}),e):this._willSettleAt(i(t),e)},Q.prototype._settledAt=function(e,t,n){var r=this.promise;r._state===M&&(this._remaining--,e===T?G(r,n):this._result[t]=n),0===this._remaining&&q(r,this._result)},Q.prototype._willSettleAt=function(e,t){var n=this;K(e,void 0,function(e){return n._settledAt(A,t,e)},function(e){return n._settledAt(T,t,e)})},ae.all=function(e){return new Q(this,e).promise},ae.race=function(o){var i=this;return r(o)?new i(function(e,t){for(var n=o.length,r=0;r<n;r++)i.resolve(o[r]).then(e,t)}):new i(function(e,t){return t(new TypeError("You must pass an array to race."))})},ae.resolve=E,ae.reject=function(e){var t=new this(j);return G(t,e),t},ae._setScheduler=function(e){a=e},ae._setAsap=function(e){s=e},ae._asap=s,ae.prototype={constructor:ae,then:O,catch:function(e){return this.then(null,e)}},se(),ae.polyfill=se,ae.Promise=ae}()}).call(this,fe(15),fe(9))},15:function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,u=[],l=!1,f=-1;function p(){l&&c&&(l=!1,c.length?u=c.concat(u):f=-1,u.length&&d())}function d(){if(!l){var e=s(p);l=!0;for(var t=u.length;t;){for(c=u,u=[];++f<t;)c&&c[f].run();f=-1,t=u.length}c=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function y(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new h(e,t)),1!==u.length||l||s(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},16:function(e,t){},17:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},20:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return OpenStadComponentNLMap});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),react_dom__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__),_component_index_jsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),_lib_amaps_cluster_icon_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(60);function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ownKeys(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(n),!0).forEach(function(e){_defineProperty(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(n){var r=_isNativeReflectConstruct();return function(){var e,t=_getPrototypeOf(n);return _possibleConstructorReturn(this,r?(e=_getPrototypeOf(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments))}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var OpenStadComponentNLMap=function(_OpenStadComponent){_inherits(OpenStadComponentNLMap,_OpenStadComponent);var _super=_createSuper(OpenStadComponentNLMap);function OpenStadComponentNLMap(e){var t;_classCallCheck(this,OpenStadComponentNLMap);var n=_assertThisInitialized(t=_super.call(this,e)),r={target:n.divId,style:"standaard",marker:!1,search:!1,center:{latitude:52.37104644463586,longitude:4.900402911007405},zoom:14,zoomposition:"bottomleft",disableDefaultUI:!0,polygon:null,autoZoomAndCenter:!1};switch(n.config=Object.assign(r,n.config||{}),n._loadedFiles=0,n.files=[{type:"css",href:"https://unpkg.com/leaflet@1.0.3/dist/leaflet.css"},{type:"script",src:"https://unpkg.com/leaflet@1.0.3/dist/leaflet.js"}],n.config.variant){case"amaps":n.files.push({type:"script",src:"https://map.data.amsterdam.nl/dist/amaps.iife.js"});break;default:n.files.push({type:"css",href:"https://nlmaps.nl/dist/assets/css/nlmaps.css"}),n.files.push({type:"script",src:"https://nlmaps.nl/dist/nlmaps.iife.js"})}return n.files.push({type:"css",href:"https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.css"}),n.files.push({type:"script",src:"https://unpkg.com/leaflet.markercluster@1.4.1/dist/leaflet.markercluster.js"}),n.markers=n.config.markers||[],t}return _createClass(OpenStadComponentNLMap,[{key:"componentDidMount",value:function(){var t=this;t.loadNextFile(function(){t.createMap(),t.mapIsReady=!0;var e=new CustomEvent("osc-map-is-ready",{detail:{id:t.divId}});document.dispatchEvent(e)})}},{key:"loadNextFile",value:function(e){var t,n=this,r=n.files[n._loadedFiles];r&&("script"===r.type&&((t=document.createElement("script")).src=r.src,t.async=!0),"css"===r.type&&((t=document.createElement("link")).href=r.href,t.rel="stylesheet"),t&&(t.onload=function(){n.loadNextFile(e)},this.instance.appendChild(t))),n._loadedFiles==n.files.length&&e(),n._loadedFiles++}},{key:"createMap",value:function createMap(){var self=this,iconCreateFunction,centerOn;switch(self.config.variant){case"amaps":self.map=amaps.createMap(_objectSpread({},self.config));break;default:self.map=nlmaps.createMap(self.config)}0==self.config.zoomControl&&self.map.removeControl(self.map.zoomControl),self.config.clustering&&self.config.clustering.isActive&&L.markerClusterGroup&&(iconCreateFunction=self.config.clustering.iconCreateFunction||_lib_amaps_cluster_icon_js__WEBPACK_IMPORTED_MODULE_3__.a.bind(self),iconCreateFunction&&"string"==typeof iconCreateFunction&&(iconCreateFunction=eval(iconCreateFunction)),self.markerClusterGroup=L.markerClusterGroup({iconCreateFunction:iconCreateFunction,showCoverageOnHover:self.config.clustering.showCoverageOnHover,maxClusterRadius:self.config.clustering.maxClusterRadius||80}),self.markerClusterGroup.on("clusterclick",self.onClusterClick),self.markerClusterGroup.on("animationend",self.onClusterAnimationEnd),self.map.addLayer(self.markerClusterGroup)),self.map.on("click",self.onMapClick),self.config.polygon&&self.createCutoutPolygon(self.config.polygon),self.markers.length&&self.markers.forEach(function(e){self.addMarker(e)}),self.config.autoZoomAndCenter&&(centerOn="polygon"==self.config.autoZoomAndCenter&&self.config.polygon||self.markers&&self.markers.length&&self.markers,self.editorMarker&&(centerOn=self.editorMarker.position?[self.editorMarker]:self.config.polygon),centerOn&&self.setBoundsAndCenter(centerOn))}},{key:"addMarkers",value:function(e){var t=this;e.forEach(function(e){t.addMarker(e)})}},{key:"addMarker",value:function addMarker(markerData){var self=this,icon=markerData.icon,iconCreateFunction,marker;icon||(iconCreateFunction=self.config.iconCreateFunction,iconCreateFunction&&"string"==typeof iconCreateFunction&&(iconCreateFunction=eval(iconCreateFunction),icon=iconCreateFunction())),marker=icon?L.marker([markerData.lat,markerData.lng],{icon:icon}):L.marker([markerData.lat,markerData.lng]),marker.visible=!0,marker.data=markerData.data,marker.doNotCluster=markerData.doNotCluster,markerData.href&&(markerData.onClick=function(){document.location.href=markerData.href});var onClick=self.onMarkerClick;return onClick&&("string"==typeof onClick&&(onClick=eval(onClick)),marker.on("click",onClick)),self.markerClusterGroup&&!markerData.doNotCluster?self.markerClusterGroup.addLayer(marker):self.map.addLayer(marker),self.markers.push(marker),marker}},{key:"removeMarker",value:function(e){var t;!e||-1<(t=this.markers.indexOf(e))&&(this.markers.splice(t,1),this.map.removeLayer(e),this.markerClusterGroup.removeLayer(e))}},{key:"updateMarker",value:function(e,t){var n;t.location&&(n=new L.LatLng(t.location.lat,t.location.lng),e.setLatLng(n))}},{key:"createClusterIcon",value:function(e){var t=e.getChildCount();return L.divIcon({html:t,className:"osc-nlmap-icon-cluster",iconSize:L.point(20,20),iconAnchor:[20,10]})}},{key:"createCutoutPolygon",value:function(e){var i=L.polygon(e).getBounds().getCenter(),a=0,s=0;e.forEach(function(e,t){var n=Math.sin(e.lng-i.lng)*Math.cos(e.lat),r=Math.cos(i.lat)*Math.sin(e.lat)-Math.sin(i.lat)*Math.cos(e.lat)*Math.cos(e.lng-i.lng),o=180*Math.atan2(n,r)/Math.PI;45-o<a&&(a=45-o,s=t)});var t=e.slice(0,s);e=e.slice(s,e.length).concat(t);var n=[{lat:-85,lng:-179.99},{lat:-85,lng:0},{lat:-85,lng:179.99},{lat:0,lng:179.99},{lat:85,lng:179.99},{lat:85,lng:0},{lat:85,lng:-179.99},{lat:85,lng:-179.99},{lat:0,lng:-179.99}],r=Object.assign({color:"#d00",fillColor:"#000",fillOpacity:.15},this.config.polygonStyle),o=L.polygon([n,e],r);return this.map.addLayer(o),o}},{key:"removePolygon",value:function(e){e&&this.map.removeLayer(e)}},{key:"setBoundsAndCenter",value:function(e){var t,n,r=this;Array.isArray(e)?(t=[],e.forEach(function(e){e._latlng?e=e._latlng:e.position&&(e=e.position.coordinates?{lat:e.position.coordinates[0],lng:e.position.coordinates[1]}:e.position),t.push(e)}),1==t.length?r.map.panTo(new L.LatLng(t[0].lat,t[0].lng)):(n=L.latLngBounds(t),r.map.fitBounds(n))):r.map.panTo(new L.LatLng(r.config.center.latitude,r.config.center.longitude))}},{key:"showMarkers",value:function(e){var t=this;e.forEach(function(e){t.showMarker(e)})}},{key:"showMarker",value:function(e){e.visible=!0,this.markerClusterGroup&&!e.doNotCluster?this.markerClusterGroup.addLayer(e):e.addTo(this.map)}},{key:"hideMarkers",value:function(e){var t=this;e.forEach(function(e){t.hideMarker(e)})}},{key:"hideMarker",value:function(e){e.visible=!1,this.markerClusterGroup&&!e.doNotCluster?this.markerClusterGroup.removeLayer(e):e.remove(this.map)}},{key:"setFilter",value:function(e){this.filterFunction=e,this.applyFilter()}},{key:"applyFilter",value:function(){var t=this;t.filterFunction?t.markers.forEach(function(e){t.filterFunction(e)?t.showMarker(e):t.hideMarker(e)}):t.markers.forEach(function(e){t.showMarker(e)})}},{key:"isPointInPolygon",value:function(e,t){if(!e)return!1;if(!t)return!0;for(var n=e.lat,r=e.lng,o=!1,i=0,a=t.length-1;i<t.length;a=i++){var s=t[i].lat,c=t[i].lng,u=t[a].lat,l=t[a].lng;r<c!=r<l&&n<(u-s)*(r-c)/(l-c)+s&&(o=!o)}return o}},{key:"getPointInfo",value:function(r,o,i){var e="https://api.data.amsterdam.nl/bag/nummeraanduiding/?format=json&locatie=[[lat]],[[lng]],50".replace(/\[\[lat\]\]/,(r=r||{}).lat).replace(/\[\[lng\]\]/,r.lng);fetch(e).then(function(e){return e.json()}).then(function(e){var t=e&&e.results&&e.results[0]&&e.results[0].landelijk_id,n="https://api.data.amsterdam.nl/bag/nummeraanduiding/[[id]]/?format=json".replace(/\[\[id\]\]/,t);fetch(n).then(function(e){return e.json()}).then(function(e){e.lat=r.lat,e.lng=r.lng,i&&i(e,o)})}).catch(function(e){console.log("Zoek adres: niet goed"),console.log(e),i&&i({},o)})}},{key:"onMapClick",value:function(e){var t=new CustomEvent("osc-map-click",{detail:e});document.dispatchEvent(t)}},{key:"onMarkerClick",value:function(e){var t=new CustomEvent("osc-map-marker-click",{detail:e});document.dispatchEvent(t)}},{key:"onClusterClick",value:function(e){var t=new CustomEvent("osc-map-cluster-click",{detail:e});document.dispatchEvent(t)}},{key:"onClusterAnimationEnd",value:function(e){var t=new CustomEvent("osc-map-cluster-animation-end",{detail:e});document.dispatchEvent(t)}},{key:"render",value:function(){var t=this;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{id:this.divId,className:this.props.className||"osc-nlmap",ref:function(e){return t.instance=e}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{id:this.divId+"-map"}))}}]),OpenStadComponentNLMap}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_2__.a)},3:function(e,t){e.exports=window.ReactDOM},37:function(e,t,n){"use strict";n.r(t);n(6);var r=n(0),o=n.n(r),i=n(3),a=n.n(i),s=(n(98),n(20));n.d(t,"default",function(){return s.a}),n.d(t,"NLMap",function(){return s.a}),s.a.renderElement=function(e,t){var n=e.attributes;a.a.render(o.a.createElement(s.a,{attributes:n,config:t}),e)}},4:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(1),a=n.n(r),o=n(0),s=n.n(o);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=d(i);return t=a?(e=d(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==c(r)&&"function"!=typeof r?p(n):r}}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var i=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(i,s.a.Component);var e,t,n,o=f(i);function i(n){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);var r=p(e=o.call(this,n));if(n.attributes&&Object.keys(n.attributes).forEach(function(e){var t=n.attributes[e];r[t.name]=t.value}),r.config=r.config||n.config,"string"==typeof r.config)try{r.config=JSON.parse(r.config)}catch(e){}return r.config=a.a.recursive({siteId:null,api:{url:null,headers:null,isUserLoggedIn:!1},user:{}},r.config,r.props.config||{}),r.divId=r.divId||r.config&&r.config.divId||n.id||"openstad-component-".concat(parseInt(1e8*Math.random())),window[r.divId]=r,e}return e=i,(t=[{key:"componentDidMount",value:function(){}}])&&u(e.prototype,t),n&&u(e,n),i}()},6:function(e,t,n){"use strict";(function(i){var t,n,r="URLSearchParams"in self,o="Symbol"in self&&"iterator"in Symbol,s="FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(e){return!1}}(),a="FormData"in self,c="ArrayBuffer"in self;function u(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function l(e){return"string"!=typeof e&&(e=String(e)),e}function e(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return o&&(e[Symbol.iterator]=function(){return e}),e}function f(t){this.map={},t instanceof f?t.forEach(function(e,t){this.append(t,e)},this):Array.isArray(t)?t.forEach(function(e){this.append(e[0],e[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function p(e){if(e.bodyUsed)return i.reject(new TypeError("Already read"));e.bodyUsed=!0}function d(n){return new i(function(e,t){n.onload=function(){e(n.result)},n.onerror=function(){t(n.error)}})}function h(e){var t=new FileReader,n=d(t);return t.readAsArrayBuffer(e),n}function y(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function _(){return this.bodyUsed=!1,this._initBody=function(e){var t;(this._bodyInit=e)?"string"==typeof e?this._bodyText=e:s&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:a&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:r&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():c&&s&&((t=e)&&DataView.prototype.isPrototypeOf(t))?(this._bodyArrayBuffer=y(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):c&&(ArrayBuffer.prototype.isPrototypeOf(e)||n(e))?this._bodyArrayBuffer=y(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},s&&(this.blob=function(){var e=p(this);if(e)return e;if(this._bodyBlob)return i.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return i.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return i.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?p(this)||i.resolve(this._bodyArrayBuffer):this.blob().then(h)}),this.text=function(){var e,t,n,r=p(this);if(r)return r;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,n=d(t),t.readAsText(e),n;if(this._bodyArrayBuffer)return i.resolve(function(e){for(var t=new Uint8Array(e),n=new Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return i.resolve(this._bodyText)},a&&(this.formData=function(){return this.text().then(b)}),this.json=function(){return this.text().then(JSON.parse)},this}c&&(t=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],n=ArrayBuffer.isView||function(e){return e&&-1<t.indexOf(Object.prototype.toString.call(e))}),f.prototype.append=function(e,t){e=u(e),t=l(t);var n=this.map[e];this.map[e]=n?n+", "+t:t},f.prototype.delete=function(e){delete this.map[u(e)]},f.prototype.get=function(e){return e=u(e),this.has(e)?this.map[e]:null},f.prototype.has=function(e){return this.map.hasOwnProperty(u(e))},f.prototype.set=function(e,t){this.map[u(e)]=l(t)},f.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},f.prototype.keys=function(){var n=[];return this.forEach(function(e,t){n.push(t)}),e(n)},f.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),e(t)},f.prototype.entries=function(){var n=[];return this.forEach(function(e,t){n.push([t,e])}),e(n)},o&&(f.prototype[Symbol.iterator]=f.prototype.entries);var m=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function v(e,t){var n,r,o=(t=t||{}).body;if(e instanceof v){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new f(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,o||null==e._bodyInit||(o=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new f(t.headers)),this.method=(n=t.method||this.method||"GET",r=n.toUpperCase(),-1<m.indexOf(r)?r:n),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function b(e){var o=new FormData;return e.trim().split("&").forEach(function(e){var t,n,r;e&&(n=(t=e.split("=")).shift().replace(/\+/g," "),r=t.join("=").replace(/\+/g," "),o.append(decodeURIComponent(n),decodeURIComponent(r)))}),o}function g(e,t){t=t||{},this.type="default",this.status=void 0===t.status?200:t.status,this.ok=200<=this.status&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new f(t.headers),this.url=t.url||"",this._initBody(e)}v.prototype.clone=function(){return new v(this,{body:this._bodyInit})},_.call(v.prototype),_.call(g.prototype),g.prototype.clone=function(){return new g(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new f(this.headers),url:this.url})},g.error=function(){var e=new g(null,{status:0,statusText:""});return e.type="error",e};var w=[301,302,303,307,308];g.redirect=function(e,t){if(-1===w.indexOf(t))throw new RangeError("Invalid status code");return new g(null,{status:t,headers:{location:e}})};var k=self.DOMException;try{new k}catch(e){(k=function(e,t){this.message=e,this.name=t;var n=Error(e);this.stack=n.stack}).prototype=Object.create(Error.prototype),k.prototype.constructor=k}function C(o,a){return new i(function(r,e){var t=new v(o,a);if(t.signal&&t.signal.aborted)return e(new k("Aborted","AbortError"));var i=new XMLHttpRequest;function n(){i.abort()}i.onload=function(){var e,o,t={status:i.status,statusText:i.statusText,headers:(e=i.getAllResponseHeaders()||"",o=new f,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(e){var t,n=e.split(":"),r=n.shift().trim();r&&(t=n.join(":").trim(),o.append(r,t))}),o)};t.url="responseURL"in i?i.responseURL:t.headers.get("X-Request-URL");var n="response"in i?i.response:i.responseText;r(new g(n,t))},i.onerror=function(){e(new TypeError("Network request failed"))},i.ontimeout=function(){e(new TypeError("Network request failed"))},i.onabort=function(){e(new k("Aborted","AbortError"))},i.open(t.method,t.url,!0),"include"===t.credentials?i.withCredentials=!0:"omit"===t.credentials&&(i.withCredentials=!1),"responseType"in i&&s&&(i.responseType="blob"),t.headers.forEach(function(e,t){i.setRequestHeader(t,e)}),t.signal&&(t.signal.addEventListener("abort",n),i.onreadystatechange=function(){4===i.readyState&&t.signal.removeEventListener("abort",n)}),i.send(void 0===t._bodyInit?null:t._bodyInit)})}C.polyfill=!0,self.fetch||(self.fetch=C,self.Headers=f,self.Request=v,self.Response=g)}).call(this,n(11))},60:function(module,__webpack_exports__,__webpack_require__){"use strict";function amapsCreateClusterIcon(cluster){var self=this,count=cluster.getChildCount(),markers=cluster.getAllChildMarkers(),colors={},total=markers.length,isFaded=!1;markers.forEach(function(entry){var type=entry.data&&eval("entry.data.".concat(self.config.typeField)),tmp=self.config.types.find(function(e){return type&&(e.id==type||e.name==type)}),color=tmp&&(tmp.color||tmp.backgroundColor)||"#164995";null==type&&(type="undef"),colors[color]||(colors[color]=0),colors[color]++,entry.data&&entry.data.isFaded&&(isFaded=!0)});var html='<svg viewBox="0 0 36 36"><circle cx="18" cy="18" r="14" fill="white"/>',soFar=0;return Object.keys(colors).forEach(function(e){var t=e,n=100*colors[e]/total;html+='  <path\n             d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"\n             fill="none"\n             transform="rotate('.concat(soFar/100*360,', 18, 18)"\n             stroke="').concat(t,'"\n             stroke-width="4"\n             stroke-dasharray="').concat(n,', 100"\n             />'),soFar+=n}),html+='<text x="18" y="21" text-anchor="middle" class="openstad-component-ideas-on-map-icon openstad-component-ideas-on-map-icon-text">'+count+"</text></svg>",L.divIcon({html:html,className:"openstad-component-ideas-on-map-icon-cluster",iconSize:L.point(36,36),iconAnchor:[18,18],isFaded:isFaded})}__webpack_require__.d(__webpack_exports__,"a",function(){return amapsCreateClusterIcon})},9:function(e,t){var n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},98:function(e,t,n){}});
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/nlmap/index.jsx");
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

/***/ "./src/nlmap/component/map.jsx":
/*!*************************************!*\
  !*** ./src/nlmap/component/map.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentNLMap; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _lib_amaps_cluster_icon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/amaps-cluster-icon.js */ "./src/nlmap/lib/amaps-cluster-icon.js");
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





'use strict';

var OpenStadComponentNLMap = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentNLMap, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentNLMap);

  function OpenStadComponentNLMap(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentNLMap);

    _this = _super.call(this, props);

    var self = _assertThisInitialized(_this); // config


    var defaultConfig = {
      target: self.divId,
      style: 'standaard',
      marker: false,
      search: false,
      center: {
        latitude: 52.37104644463586,
        longitude: 4.900402911007405
      },
      zoom: 14,
      zoomposition: 'bottomleft',
      disableDefaultUI: true,
      polygon: null,
      autoZoomAndCenter: false
    };
    self.config = Object.assign(defaultConfig, self.config || {}); // external css and script files

    self._loadedFiles = 0;
    self.files = [{
      type: 'css',
      href: "https://unpkg.com/leaflet@1.0.3/dist/leaflet.css"
    }, {
      type: 'script',
      src: "https://unpkg.com/leaflet@1.0.3/dist/leaflet.js"
    }];

    switch (self.config.variant) {
      case "amaps":
        // self.files.push({ type: 'css', href: "https://map.data.amsterdam.nl/dist/css/ams-map.css"}); // in tegenstelling tot wat ze beloven overschrijft dit ook css buiten de map
        self.files.push({
          type: 'script',
          src: "https://map.data.amsterdam.nl/dist/amaps.iife.js"
        });
        break;

      default:
        self.files.push({
          type: 'css',
          href: "https://nlmaps.nl/dist/assets/css/nlmaps.css"
        });
        self.files.push({
          type: 'script',
          src: "https://nlmaps.nl/dist/nlmaps.iife.js"
        });
    }

    self.files.push({
      type: 'css',
      href: "https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.css"
    });
    self.files.push({
      type: 'script',
      src: "https://unpkg.com/leaflet.markercluster@1.4.1/dist/leaflet.markercluster.js"
    });
    self.markers = self.config.markers || [];
    return _this;
  }

  _createClass(OpenStadComponentNLMap, [{
    key: "componentDidMount",
    value: function componentDidMount(prevProps, prevState) {
      var self = this;
      self.loadNextFile(function () {
        // initSingleClick();
        // loading script files is ready; create the map
        self.createMap(); // dispatch an event

        self.mapIsReady = true;
        var event = new CustomEvent('osc-map-is-ready', {
          detail: {
            id: self.divId
          }
        });
        document.dispatchEvent(event);
      });
    }
  }, {
    key: "loadNextFile",
    value: function loadNextFile(next) {
      var self = this;
      var file = self.files[self._loadedFiles];

      if (file) {
        var element;

        if (file.type === 'script') {
          element = document.createElement('script');
          element.src = file.src;
          element.async = true;
        }

        if (file.type === 'css') {
          element = document.createElement('link');
          element.href = file.href;
          element.rel = 'stylesheet';
        }

        if (element) {
          element.onload = function () {
            self.loadNextFile(next);
          };

          this.instance.appendChild(element);
        }
      }

      if (self._loadedFiles == self.files.length) {
        next();
      }

      self._loadedFiles++;
    }
  }, {
    key: "createMap",
    value: function createMap() {
      var self = this; // init map

      switch (self.config.variant) {
        case "amaps":
          self.map = amaps.createMap(_objectSpread({}, self.config));
          break;

        default:
          self.map = nlmaps.createMap(self.config);
      }

      if (self.config.zoomControl == false) {
        self.map.removeControl(self.map.zoomControl);
      } // clustering


      if (self.config.clustering && self.config.clustering.isActive && L.markerClusterGroup) {
        var iconCreateFunction = self.config.clustering.iconCreateFunction || _lib_amaps_cluster_icon_js__WEBPACK_IMPORTED_MODULE_3__["default"].bind(self); // ( self.config.variant == 'amaps' ? amapsCreateClusterIcon.bind(self) : self.createClusterIcon );

        if (iconCreateFunction && typeof iconCreateFunction == 'string') iconCreateFunction = eval(iconCreateFunction);
        self.markerClusterGroup = L.markerClusterGroup({
          iconCreateFunction: iconCreateFunction,
          showCoverageOnHover: self.config.clustering.showCoverageOnHover,
          maxClusterRadius: self.config.clustering.maxClusterRadius || 80
        });
        self.markerClusterGroup.on('clusterclick', self.onClusterClick);
        self.markerClusterGroup.on('animationend', self.onClusterAnimationEnd);
        self.map.addLayer(self.markerClusterGroup);
      } // on map click


      self.map.on('click', self.onMapClick); // add polygon

      if (self.config.polygon) {
        self.createCutoutPolygon(self.config.polygon);
      } // add markers


      if (self.markers.length) {
        self.markers.forEach(function (marker) {
          self.addMarker(marker);
        });
      } // set bounds and center


      if (self.config.autoZoomAndCenter) {
        var centerOn = self.config.autoZoomAndCenter == 'polygon' && self.config.polygon || self.markers && self.markers.length && self.markers;

        if (self.editorMarker) {
          if (self.editorMarker.position) {
            centerOn = [self.editorMarker];
          } else {
            centerOn = self.config.polygon;
          }
        }

        if (centerOn) {
          self.setBoundsAndCenter(centerOn);
        }
      }
    }
  }, {
    key: "addMarkers",
    value: function addMarkers(markerData) {
      var self = this;
      markerData.forEach(function (marker) {
        self.addMarker(marker);
      });
    }
  }, {
    key: "addMarker",
    value: function addMarker(markerData) {
      var self = this;
      var icon = markerData.icon;

      if (!icon) {
        var iconCreateFunction = self.config.iconCreateFunction;

        if (iconCreateFunction && typeof iconCreateFunction == 'string') {
          iconCreateFunction = eval(iconCreateFunction);
          icon = iconCreateFunction();
        }
      }

      var marker;

      if (icon) {
        marker = L.marker([markerData.lat, markerData.lng], {
          icon: icon
        });
      } else {
        marker = L.marker([markerData.lat, markerData.lng]);
      }

      marker.visible = true;
      marker.data = markerData.data;
      marker.doNotCluster = markerData.doNotCluster;

      if (markerData.href) {
        markerData.onClick = function () {
          document.location.href = markerData.href;
        };
      }

      var onClick = self.onMarkerClick;

      if (onClick) {
        if (typeof onClick == 'string') onClick = eval(onClick); // marker.on('singleclick', onClick);

        marker.on('click', onClick);
      }

      if (self.markerClusterGroup && !markerData.doNotCluster) {
        self.markerClusterGroup.addLayer(marker);
      } else {
        self.map.addLayer(marker);
      }

      self.markers.push(marker);
      return marker;
    }
  }, {
    key: "removeMarker",
    value: function removeMarker(marker) {
      if (!marker) return;
      var index = this.markers.indexOf(marker);

      if (index > -1) {
        this.markers.splice(index, 1);
        this.map.removeLayer(marker);
        this.markerClusterGroup.removeLayer(marker);
      }
    }
  }, {
    key: "updateMarker",
    value: function updateMarker(marker, newData) {
      if (newData.location) {
        var newLatLng = new L.LatLng(newData.location.lat, newData.location.lng);
        marker.setLatLng(newLatLng);
      }
    }
  }, {
    key: "createClusterIcon",
    value: function createClusterIcon(cluster) {
      var count = cluster.getChildCount();
      return L.divIcon({
        html: count,
        className: 'osc-nlmap-icon-cluster',
        iconSize: L.point(20, 20),
        iconAnchor: [20, 10]
      });
    }
  }, {
    key: "createCutoutPolygon",
    value: function createCutoutPolygon(polygon) {
      var self = this; // polygon must defined from the south west corner to work with the outer box

      var bounds = L.polygon(polygon).getBounds();
      var center = bounds.getCenter();
      var smallest = 0;
      var index = 0;
      polygon.forEach(function (point, i) {
        var y = Math.sin(point.lng - center.lng) * Math.cos(point.lat);
        var x = Math.cos(center.lat) * Math.sin(point.lat) - Math.sin(center.lat) * Math.cos(point.lat) * Math.cos(point.lng - center.lng);
        var bearing = Math.atan2(y, x) * 180 / Math.PI;

        if (45 - bearing < smallest) {
          smallest = 45 - bearing;
          index = i;
        }
      });
      var a = polygon.slice(0, index);
      var b = polygon.slice(index, polygon.length);
      polygon = b.concat(a); // outer box
      // TODO: should be calculated dynamically from the center point

      var delta1 = 0.01;
      var delta2 = 5;
      var outerBox = [{
        lat: -90 + delta2,
        lng: -180 + delta1
      }, {
        lat: -90 + delta2,
        lng: 0
      }, {
        lat: -90 + delta2,
        lng: 180 - delta1
      }, {
        lat: 0,
        lng: 180 - delta1
      }, {
        lat: 90 - delta2,
        lng: 180 - delta1
      }, {
        lat: 90 - delta2,
        lng: 0
      }, {
        lat: 90 - delta2,
        lng: -180 + delta1
      }, {
        lat: 90 - delta2,
        lng: -180 + delta1
      }, {
        lat: 0,
        lng: -180 + delta1
      }]; // polygon style

      var polygonStyle = Object.assign({
        "color": "#d00",
        "fillColor": "#000",
        "fillOpacity": 0.15
      }, self.config.polygonStyle);
      var result = L.polygon([outerBox, polygon], polygonStyle);
      self.map.addLayer(result);
      return result;
    }
  }, {
    key: "removePolygon",
    value: function removePolygon(polygon) {
      var self = this;

      if (polygon) {
        self.map.removeLayer(polygon);
      }
    }
  }, {
    key: "setBoundsAndCenter",
    value: function setBoundsAndCenter(points) {
      var self = this;

      if (!Array.isArray(points)) {
        self.map.panTo(new L.LatLng(self.config.center.latitude, self.config.center.longitude));
        return;
      }

      var poly = [];
      points.forEach(function (point) {
        if (point._latlng) {
          point = point._latlng;
        } else if (point.position) {
          point = point.position.coordinates ? {
            lat: point.position.coordinates[0],
            lng: point.position.coordinates[1]
          } : point.position;
        }

        poly.push(point);
      });

      if (poly.length == 1) {
        self.map.panTo(new L.LatLng(poly[0].lat, poly[0].lng));
      } else {
        var bounds = L.latLngBounds(poly);
        self.map.fitBounds(bounds);
      } // var zoom = parseInt(self.map.getZoom())
      // self.map.setZoom(zoom - 1)

    }
  }, {
    key: "showMarkers",
    value: function showMarkers(markers) {
      var self = this;
      markers.forEach(function (marker) {
        self.showMarker(marker);
      });
    }
  }, {
    key: "showMarker",
    value: function showMarker(marker) {
      var self = this;
      marker.visible = true;

      if (self.markerClusterGroup && !marker.doNotCluster) {
        self.markerClusterGroup.addLayer(marker);
      } else {
        marker.addTo(self.map);
      }
    }
  }, {
    key: "hideMarkers",
    value: function hideMarkers(markers) {
      var self = this;
      markers.forEach(function (marker) {
        self.hideMarker(marker);
      });
    }
  }, {
    key: "hideMarker",
    value: function hideMarker(marker) {
      var self = this;
      marker.visible = false;

      if (self.markerClusterGroup && !marker.doNotCluster) {
        self.markerClusterGroup.removeLayer(marker);
      } else {
        marker.remove(self.map);
      }
    }
  }, {
    key: "setFilter",
    value: function setFilter(filterFuntion) {
      var self = this;
      self.filterFunction = filterFuntion;
      self.applyFilter();
    }
  }, {
    key: "applyFilter",
    value: function applyFilter() {
      var self = this;

      if (self.filterFunction) {
        self.markers.forEach(function (marker) {
          if (self.filterFunction(marker)) {
            self.showMarker(marker);
          } else {
            self.hideMarker(marker);
          }
        });
      } else {
        self.markers.forEach(function (marker) {
          self.showMarker(marker);
        });
      }
    }
  }, {
    key: "isPointInPolygon",
    value: function isPointInPolygon(point, polygon) {
      if (!point) return false;
      if (!polygon) return true; // taken from http://pietschsoft.com/post/2008/07/02/Virtual-Earth-Polygon-Search-Is-Point-Within-Polygon

      var x = point.lat,
          y = point.lng;
      var inside = false;

      for (var i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        var xi = polygon[i].lat,
            yi = polygon[i].lng;
        var xj = polygon[j].lat,
            yj = polygon[j].lng;
        var intersect = yi > y != yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
        if (intersect) inside = !inside;
      }

      return inside;
    }
  }, {
    key: "getPointInfo",
    value: function getPointInfo(latlng, marker, next) {
      // TODO: configurabel
      var bagApiUrl1 = 'https://api.data.amsterdam.nl/bag/nummeraanduiding/?format=json&locatie=[[lat]],[[lng]],50';
      var bagApiUrl2 = 'https://api.data.amsterdam.nl/bag/nummeraanduiding/[[id]]/?format=json';
      var self = this;
      latlng = latlng || {};
      var url = bagApiUrl1.replace(/\[\[lat\]\]/, latlng.lat).replace(/\[\[lng\]\]/, latlng.lng);
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (json) {
        var id = json && json.results && json.results[0] && json.results[0].landelijk_id;
        var url = bagApiUrl2.replace(/\[\[id\]\]/, id);
        fetch(url).then(function (response) {
          return response.json();
        }).then(function (json) {
          json.lat = latlng.lat;
          json.lng = latlng.lng;
          if (next) next(json, marker);
        });
      })["catch"](function (err) {
        console.log('Zoek adres: niet goed');
        console.log(err);
        if (next) next({}, marker);
      });
    }
  }, {
    key: "onMapClick",
    value: function onMapClick(detail) {
      var event = new CustomEvent('osc-map-click', {
        detail: detail
      });
      document.dispatchEvent(event);
    }
  }, {
    key: "onMarkerClick",
    value: function onMarkerClick(detail) {
      var event = new CustomEvent('osc-map-marker-click', {
        detail: detail
      });
      document.dispatchEvent(event);
    }
  }, {
    key: "onClusterClick",
    value: function onClusterClick(detail) {
      var event = new CustomEvent('osc-map-cluster-click', {
        detail: detail
      });
      document.dispatchEvent(event);
    }
  }, {
    key: "onClusterAnimationEnd",
    value: function onClusterAnimationEnd(detail) {
      var event = new CustomEvent('osc-map-cluster-animation-end', {
        detail: detail
      });
      document.dispatchEvent(event);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: this.divId,
        className: this.props.className || 'osc-nlmap',
        ref: function ref(el) {
          return _this2.instance = el;
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: this.divId + '-map'
      }));
    }
  }]);

  return OpenStadComponentNLMap;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),

/***/ "./src/nlmap/css/default.less":
/*!************************************!*\
  !*** ./src/nlmap/css/default.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/nlmap/index.jsx":
/*!*****************************!*\
  !*** ./src/nlmap/index.jsx ***!
  \*****************************/
/*! exports provided: default, NLMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_default_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/default.less */ "./src/nlmap/css/default.less");
/* harmony import */ var _css_default_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_default_less__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_map_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/map.jsx */ "./src/nlmap/component/map.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _component_map_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NLMap", function() { return _component_map_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]; });

// polyfills
 // react


 // import css to make sure it is generated in the result

 // the module

 // render elements

_component_map_jsx__WEBPACK_IMPORTED_MODULE_4__["default"].renderElement = function renderElement(elem, config) {
  var attributes = elem.attributes;
  react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_component_map_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    attributes: attributes,
    config: config
  }), elem);
};



/***/ }),

/***/ "./src/nlmap/lib/amaps-cluster-icon.js":
/*!*********************************************!*\
  !*** ./src/nlmap/lib/amaps-cluster-icon.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return amapsCreateClusterIcon; });
function amapsCreateClusterIcon(cluster) {
  var self = this;
  var count = cluster.getChildCount(); // todo: configurable

  var markers = cluster.getAllChildMarkers();
  var colors = {};
  var total = markers.length;
  var isFaded = false;
  markers.forEach(function (entry) {
    var type = entry.data && eval("entry.data.".concat(self.config.typeField));
    var tmp = self.config.types.find(function (entry) {
      return type && (entry.id == type || entry.name == type);
    });
    var color = tmp && (tmp.color || tmp.backgroundColor) || '#164995';
    if (type == undefined) type = 'undef';
    if (!colors[color]) colors[color] = 0;
    colors[color]++;
    if (entry.data && entry.data.isFaded) isFaded = true;
  });
  var html = '<svg viewBox="0 0 36 36"><circle cx="18" cy="18" r="14" fill="white"/>';
  var soFar = 0;
  Object.keys(colors).forEach(function (key) {
    var myColor = key;
    var perc = 100 * colors[key] / total;
    var angle = soFar / 100 * 360;
    html += "  <path\n             d=\"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831\"\n             fill=\"none\"\n             transform=\"rotate(".concat(angle, ", 18, 18)\"\n             stroke=\"").concat(myColor, "\"\n             stroke-width=\"4\"\n             stroke-dasharray=\"").concat(perc, ", 100\"\n             />");
    soFar = soFar + perc;
  });
  html += '<text x="18" y="21" text-anchor="middle" class="openstad-component-ideas-on-map-icon openstad-component-ideas-on-map-icon-text">' + count + '</text></svg>';
  return L.divIcon({
    html: html,
    className: 'openstad-component-ideas-on-map-icon-cluster',
    iconSize: L.point(36, 36),
    iconAnchor: [18, 18],
    isFaded: isFaded
  });
}

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
//# sourceMappingURL=nlmap.js.map
>>>>>>> Add ideas-overview to ideas-on-map, including some refactoring
