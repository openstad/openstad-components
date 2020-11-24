<<<<<<< HEAD
<<<<<<< HEAD
window.OpenStadComponents=function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}return o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=99)}([function(e,t){e.exports=window.React},function(e,t,n){(function(e){function t(e,t,n){var r=n[0],o=n.length;!e&&"object"===s(r)||(r={});for(var i=0;i<o;++i){var a,c=n[i];if("object"===s(c))for(var u in c){"__proto__"!==u&&(a=e?l.clone(c[u]):c[u],r[u]=t?function e(t,n){if("object"!==s(t))return n;for(var r in n)"object"===s(t[r])&&"object"===s(n[r])?t[r]=e(t[r],n[r]):t[r]=n[r];return t}(r[u],a):a)}}return r}function s(e){return{}.toString.call(e).slice(8,-1).toLowerCase()}var n,l;n=e&&"object"==typeof e.exports&&e.exports,(l=function(e){return t(!0===e,!1,arguments)}).recursive=function(e){return t(!0===e,!0,arguments)},l.clone=function(e){var t,n,r=e,o=s(e);if("array"===o)for(r=[],n=e.length,t=0;t<n;++t)r[t]=l.clone(e[t]);else if("object"===o)for(t in r={},e)r[t]=l.clone(e[t]);return r},n?e.exports=l:window.merge=l}).call(this,n(18)(e))},function(e,t,n){"use strict";n(6),n(0),n(3),n(32);var r=n(1),o=n.n(r);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){var t,n,r=window.location.search.match(/(?:\?|&)jwt=([A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*)(?:&|$)/);return r&&(t=r[1],u.set("osc-jwt",t),"?"==(n=document.location.search.replace("jwt="+t,""))&&(n=""),document.location.search=n),t=u.get("osc-jwt"),e&&e.jwt&&(t=e.jwt,u.set("osc-jwt",t)),t}var c={get:function(e){var t=sessionStorage.getItem(e);try{t=JSON.parse(t)}catch(e){}return t},set:function(e,t){if("string"==typeof e){if(void 0===t&&(t=""),"object"==i(t))try{t=JSON.stringify(t)}catch(e){}sessionStorage.setItem(e,t)}},remove:function(e){sessionStorage.removeItem(e)}},u=c,s={admin:["admin","moderator","editor","member","anonymous","all"],moderator:["moderator","editor","member","anonymous","all"],editor:["editor","member","anonymous","all"],member:["member","anonymous","all"],anonymous:["anonymous","all"],all:["all"],owner:null};function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var f={get:function(e){var t=localStorage.getItem(e);try{t=JSON.parse(t)}catch(e){}return t},set:function(e,t){if("string"==typeof e){if(void 0===t&&(t=""),"object"==l(t))try{t=JSON.stringify(t)}catch(e){}localStorage.setItem(e,t)}},remove:function(e){localStorage.removeItem(e)}},p={api:{getHeaders:function(e){var t=o.a.recursive({"Content-type":"application/json"},e&&e.api&&e.api.headers),n=a();return n&&(t=o.a.recursive({"X-Authorization":"Bearer "+n},t)),t}},user:{getUser:function(e,t){t=t||function(e){console.log("getUser: next not defined."),console.log(e)};var n=e.user||u.get("osc-user");if(n)return t(null,n);var r=a(e);if(!r)return t(null,{});var o="".concat(e.api.url,"/oauth/site/").concat(e.siteId,"/me"),i={"X-Authorization":"Bearer ".concat(r),"Content-Type":"application/json"};fetch(o,{headers:i}).then(function(e){if(!e.ok)throw new Error("Error on fetch");return e.json()}).then(function(e){u.set("osc-user",e),t(null,e)}).catch(function(e){t(e)})},getJWT:a,logout:function(e,t){t=t||function(e){console.log("logout: next not defined.")};var n=e.user||u.get("osc-user");if(n)return t(null,n);var r=a(e);if(!r)return t(null,{});var o=e.api.url+"/oauth/site/"+e.siteId+"/me";fetch(o,{headers:{"X-Authorization":"Bearer "+r,"Content-Type":"application/json"}}).then(function(e){if(!e.ok)throw new Error("Error on fetch");return e.json()}).then(function(e){u.set("osc-user",e),t(null,e)}).catch(function(e){t(e)})},hasRole:function(e,t){var n=e.role;return Object.keys(s).includes(n)||(n="all"),s[n].includes(t)}},localStorage:f,sessionStorage:u,reactTemplate:function(e){var t=e.html,n=void 0===t?"":t,r=e;delete r.html;var o=0;return Object.keys(r).forEach(function(e){var t=new RegExp("^((?:.|\n|\r)*)\\{".concat(e,"\\}((?:.|\n|\r)*)$"),"g").exec(n);t&&(o++,n=React.createElement("span",null,React.createElement("span",{dangerouslySetInnerHTML:{__html:t[1]}}),r[e],React.createElement("span",{dangerouslySetInnerHTML:{__html:t[2]}})))}),0==o&&(n=React.createElement("span",{dangerouslySetInnerHTML:{__html:n}})),n}};t.a=p},function(e,t){e.exports=window.ReactDOM},function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(0),a=n.n(r);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=p(i);return t=a?(e=p(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==c(r)&&"function"!=typeof r?f(n):r}}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var o=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(i,a.a.Component);var e,t,n,o=l(i);function i(n){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);var r=f(e=o.call(this,n));if(n.attributes&&Object.keys(n.attributes).forEach(function(e){var t=n.attributes[e];r[t.name]=t.value}),r.config=r.config||n.config,r.config)try{r.config=JSON.parse(r.config)}catch(e){}return r.divId=r.divId||r.config&&r.config.divId||n.id||"openstad-component-".concat(parseInt(1e8*Math.random())),window[r.divId]=f(e),e}return e=i,(t=[{key:"componentDidMount",value:function(){}}])&&u(e.prototype,t),n&&u(e,n),i}()},function(e,t,n){"use strict";n(6);var r=n(0),u=n.n(r),o=(n(3),n(33),n(1)),i=n.n(o),a=n(4);n(2);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=d(i);return t=a?(e=d(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==c(r)&&"function"!=typeof r?p(n):r}}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(o,a["a"]);var e,t,n,r=f(o);function o(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var n=p(t=r.call(this,e));return n.defaultConfig={choices:[],name:"",placeholder:"",disabled:!1,required:!1},n.config=i.a.recursive(n.defaultConfig,n.config,e.config||{}),n.state={value:e.value,error:null},t.onChange=e.onChange,t}return e=o,(t=[{key:"validate",value:function(e){var t=e.showErrors,n=!this.config.required||!!this.state.value,r=!n&&t?!0:"";return this.setState({isValid:n,error:r}),n}},{key:"handleOnChange",value:function(e){var t=this;e=e||{},t.setState(e,function(){t.validate({})}),"function"==typeof t.onChange&&t.onChange({name:t.config.name,value:e.value})}}])&&s(e.prototype,t),n&&s(e,n),o}();function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=b(i);return t=a?(e=b(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==g(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var w=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(o,h);var e,t,n,r=v(o);function o(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return e=o,(t=[{key:"render",value:function(){var t=this;return u.a.createElement("input",{type:"hidden",value:this.props.value,disabled:this.props.disabled,placeholder:this.config.placeholder,onChange:function(){return t.handleOnChange({value:t.input.value})},ref:function(e){return t.input=e}})}}])&&m(e.prototype,t),n&&m(e,n),o}();function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=T(i);return t=a?(e=T(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==E(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var C=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(o,h);var e,t,n,r=S(o);function o(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);(t=r.call(this,e)).config=i.a.recursive({allowMultiple:!1,imageserver:{process:"",fetch:""}},t.props.config,t.config||{});var n=[];return(e.value||[]).forEach(function(e){n.push({source:{url:e},options:{type:"local",file:{name:e},metadata:{poster:e}}})}),t.state={uploadedFiles:n},t}return e=o,(t=[{key:"componentDidMount",value:function(){this._loadedFiles=0,this.files=["https://unpkg.com/filepond/dist/filepond.js","https://unpkg.com/filepond-polyfill/dist/filepond-polyfill.js","https://unpkg.com/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.js","https://unpkg.com/filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.js","https://unpkg.com/filepond-plugin-file-validate-size/dist/filepond-plugin-file-validate-size.js","https://unpkg.com/filepond-plugin-file-poster/dist/filepond-plugin-file-poster.js"],this.loadNextFile()}},{key:"loadNextFile",value:function(){var e,t=this,n=t.files[t._loadedFiles];n&&((e=document.createElement("script")).src=n,e.async=!0,e&&(e.onload=function(){t.loadNextFile()},document.body.appendChild(e))),t._loadedFiles==t.files.length&&t.fileUploaderInit(),t._loadedFiles++}},{key:"validate",value:function(){var t=!0;return this.imageuploader&&this.imageuploader.getFiles&&this.imageuploader.getFiles().forEach(function(e){e.serverId||(t=!1)}),t}},{key:"fileUploaderInit",value:function(){var e,t=this,n=document.querySelector(".osc-image-upload-container");n&&(FilePond.registerPlugin(FilePondPluginImagePreview),FilePond.registerPlugin(FilePondPluginFileValidateSize),FilePond.registerPlugin(FilePondPluginFileValidateType),FilePond.registerPlugin(FilePondPluginFilePoster),e={acceptedFileTypes:["image/*"],allowFileSizeValidation:!0,allowMultiple:this.config.allowMultiple,allowReorder:!0,styleItemPanelAspectRatio:1,maxFileSize:"8mb",name:"image",maxFiles:5,allowBrowse:!0,files:this.state.uploadedFiles,server:{process:this.config.imageserver.process,fetch:this.config.imageserver.fetch},imageResizeTargetWidth:80,imageResizeTargetHeight:80,imageCropAspectRatio:"1:1",labelIdle:"Sleep afbeelding(en) naar deze plek of <span class='filepond--label-action'>KLIK HIER</span>",labelInvalidField:"Field contains invalid files",labelFileWaitingForSize:"Wachtend op grootte",labelFileSizeNotAvailable:"Grootte niet beschikbaar",labelFileCountSingular:"Bestand in lijst",labelFileCountPlural:"Bestanden in lijst",labelFileLoading:"Laden",labelFileAdded:"Toegevoegd",labelFileLoadError:"Fout bij het uploaden",labelFileRemoved:"Verwijderd",labelFileRemoveError:"Fout bij het verwijderen",labelFileProcessing:"Laden",labelFileProcessingComplete:"Afbeelding geladen",labelFileProcessingAborted:"Upload cancelled",labelFileProcessingError:"Error during upload",labelFileProcessingRevertError:"Error during revert",labelTapToCancel:"tap to cancel",labelTapToRetry:"tap to retry",labelTapToUndo:"tap to undo",labelButtonRemoveItem:"Verwijderen",labelButtonAbortItemLoad:"Abort",labelButtonRetryItemLoad:"Retry",labelButtonAbortItemProcessing:"Verwijder",labelButtonUndoItemProcessing:"Undo",labelButtonRetryItemProcessing:"Retry",labelButtonProcessItem:"Upload"},t.imageuploader=FilePond.create(n,e),document.querySelector(".filepond--root"),document.querySelector(".filepond--root").addEventListener("FilePond:processfile",function(e){e.detail&&e.detail.error&&console.log("Error uploding file: ",e.detail),t.fileUploaderUpdateCurrentInput()}),document.querySelector(".filepond--root").addEventListener("FilePond:removefile",function(e){e.detail&&e.detail.error&&console.log("Error uploding file: ",e.detail),t.fileUploaderUpdateCurrentInput()}),t.state.formfields&&t.imageuploader.addFiles(t.state.formfields.images))}},{key:"fileUploaderUpdateCurrentInput",value:function(){var n=this;n.state.value=[],this.imageuploader&&this.imageuploader.getFiles&&this.imageuploader.getFiles().forEach(function(e){try{var t="string"==typeof e.serverId?JSON.parse(e.serverId):e.serverId;n.state.value.push(t.url)}catch(e){console.log(e)}}),n.props.onChange({name:n.config.name,value:n.state.value})}},{key:"fileUploaderUploaderAddImages",value:function(e){this.imageuploader&&this.imageuploader.addFiles(e)}},{key:"render",value:function(){var e=null;return this.state.error&&(e=u.a.createElement("div",{className:"osc-form-error"},"Je hebt nog geen afbeelding geupload")),u.a.createElement("div",{className:"osc-image-upload-container"},u.a.createElement("input",{type:"file",className:"imageUploader-gebiedstool filepond-gebiedstool"}),e)}}])&&O(e.prototype,t),n&&O(e,n),o}();function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=A(i);return t=a?(e=A(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==R(r)&&"function"!=typeof r?I(n):r}}function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var j=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(o,u.a.Component);var e,t,n,r=k(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=r.call(this,e)).state={value:t.props.value},t.onKeyUpx=t.onKeyUpx.bind(I(t)),t}return e=o,(t=[{key:"componentDidMount",value:function(){var e=this.props.value,e=this.filterHTML(e);this.input.innerHTML=e}},{key:"filterHTML",value:function(e){return e=(e=(e=e.replace(/<(\/?\s*(?:a [^>]+|a|b|i|strong|em|p|div|br|ul|li)\s*\/?)>/g,"[[[$1]]]")).replace(/<[^>]+>/g,"")).replace(/\[\[\[([^\]]+)\]\]\]/g,"<$1>")}},{key:"executeAction",value:function(e,t,n){e.preventDefault(),e.stopPropagation(),document.execCommand(t,!1,n),this.onKeyUp()}},{key:"onFocus",value:function(e){this.props.onFocus&&this.props.onFocus(e)}},{key:"onBlur",value:function(e){this.props.onBlur&&this.props.onBlur(e),this.props.onChange&&this.props.onChange({value:this.state.value})}},{key:"onKeyUpx",value:function(){var e=this.input.innerHTML,e=this.filterHTML(e);this.setState({value:e}),this.props.onKeyUp&&this.props.onKeyUp(e)}},{key:"render",value:function(){var t=this;return u.a.createElement("div",{className:"osc-html-editor"},u.a.createElement("div",{className:"osc-html-editor-buttons"},u.a.createElement("div",{className:"osc-html-editor-button osc-html-editor-button-bold",onMouseDown:function(e){return t.executeAction(e,"bold")}}," "),u.a.createElement("div",{className:"osc-html-editor-button osc-html-editor-button-italic",onMouseDown:function(e){return t.executeAction(e,"italic")}}," "),u.a.createElement("div",{className:"osc-html-editor-button osc-html-editor-button-insertunorderedlist",onMouseDown:function(e){return t.executeAction(e,"insertunorderedlist")}}," "),u.a.createElement("div",{className:"osc-html-editor-button osc-html-editor-button-createlink",onMouseDown:function(e){return t.executeAction(e,"createlink",prompt("Lank naar","http://"))}}," ")),u.a.createElement("div",{className:"osc-html-editor-content",contentEditable:!0,onFocus:function(e){return t.onFocus(e)},onBlur:function(e){return t.onBlur(e)},onKeyUp:function(){return t.onKeyUpx()},ref:function(e){return t.input=e}}))}}])&&x(e.prototype,t),n&&x(e,n),o}();function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function N(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=F(i);return t=a?(e=F(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==L(r)&&"function"!=typeof r?M(n):r}}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var q=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(o,u.a.Component);var e,t,n,r=N(o);function o(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var n=M(t=r.call(this,e));return n.id=e.id||"osc-formfields-plaintext-with-counter-"+parseInt(1e6*Math.random()),n.defaultConfig={name:"tekst",inputType:"input",minLength:5,maxLength:10,placeholder:""},n.config=i.a.recursive(n.defaultConfig,n.config,e.config||{}),n.state={focused:!1,value:e.value||"",valueLength:e.value&&e.value.length||0},n.key=e.useKey||(n.id||"osc-input-with-counter-")+parseInt(1e7*Math.random),t.onChange=e.onChange,n.handleOnChange=n.handleOnChange.bind(M(t)),n.onInputFocus=n.onInputFocus.bind(M(t)),n.onInputBlur=n.onInputBlur.bind(M(t)),n.onInputKeyUp=n.onInputKeyUp.bind(M(t)),t}return e=o,(t=[{key:"isValid",value:function(){var e={isValid:!0,warning:null};return this.state.valueLength<this.config.minLength&&(e.warning="De tekst is te kort",e.isValid=!1),this.state.valueLength>this.config.maxLength&&(e.warning="De tekst is te lang",e.isValid=!1),this.setState(e),e.isValid}},{key:"validate",value:function(){return this.setState({showWarning:!0}),this.isValid()}},{key:"handleOnChange",value:function(e){e=e||{},this.setState(e),"function"==typeof this.onChange&&this.onChange({name:this.config.name,value:e.value})}},{key:"onInputFocus",value:function(){var e={focused:!0,showWarning:!1};this.setState(e)}},{key:"onInputBlur",value:function(){var e={focused:!1};this.setState(e)}},{key:"onInputKeyUp",value:function(e){var t={};t.value=e||this.input.value;var n=t.value.length;t.valueLength=n,t.isValid=n>=this.config.minLength&&n<=this.config.maxLength,this.setState(t)}},{key:"render",value:function(){var e,t=this,n=this,r=null,o=null;n.state.focused&&(r=n.state.valueLength<n.config.minLength?u.a.createElement("div",{className:"osc-form-counter osc-form-error"},"Nog minimaal ",u.a.createElement("span",{className:""},n.config.minLength-n.state.valueLength)," tekens"):(e=n.state.valueLength>n.config.maxLength?"osc-form-error":"",u.a.createElement("div",{className:"osc-form-counter "+e},"Je hebt nog ",u.a.createElement("span",{className:""},n.config.maxLength-n.state.valueLength)," tekens over."))),n.state.showWarning&&n.state.warning&&(o=u.a.createElement("div",{className:"osc-form-warning",ref:function(e){return t["form-warning"]=e}},n.state.warning));var i=null;switch(n.config.inputType){case"htmlarea":i=u.a.createElement(j,{value:this.state.value,onChange:n.handleOnChange,onFocus:n.onInputFocus,onBlur:n.onInputBlur,onKeyUp:n.onInputKeyUp});break;case"textarea":i=u.a.createElement("textarea",{key:n.key,ref:function(e){return n.input=e},value:this.state.value,disabled:this.props.disabled,placeholder:this.config.placeholder,onChange:function(){return n.handleOnChange({value:n.input.value})},onKeyUp:function(){return n.onInputKeyUp()},onFocus:function(e){return n.onInputFocus(e)},onBlur:function(e){return n.onInputBlur(e)}});break;case"input":default:i=u.a.createElement("input",{key:n.key,ref:function(e){return n.input=e},value:this.state.value,disabled:this.props.disabled,placeholder:this.config.placeholder,onChange:function(){return n.handleOnChange({value:n.input.value})},onKeyUp:function(){return n.onInputKeyUp()},onFocus:function(e){return n.onInputFocus(e)},onBlur:function(e){return n.onInputBlur(e)}})}return u.a.createElement("div",{id:n.id,ref:function(e){return n.instance=e},className:"osc-input-with-counter"},u.a.createElement("div",{className:"osc-form-feedback"},i,r,o))}}])&&B(e.prototype,t),n&&B(e,n),o}();function U(e){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function H(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=W(i);return t=a?(e=W(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==U(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function W(e){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var z=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(o,h);var e,t,n,r=H(o);function o(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return e=o,(t=[{key:"render",value:function(){var t=this,e=null;return t.state.error&&(e=u.a.createElement("div",{className:"osc-form-error"},"Je hebt nog geen keuze gemaakt")),u.a.createElement("div",{className:"osc-radios"},t.config.choices.map(function(e){return e.dangerousDescription?u.a.createElement("div",{className:"osc-radio-container",key:e.value},u.a.createElement("div",{className:"osc-radio-input".concat(t.state.value==e.value?" osc-radio-input-checked":"")},u.a.createElement("input",{type:"radio",name:t.divId,value:e.value,onChange:function(){return t.handleOnChange({value:e.value})}})),u.a.createElement("div",{className:"osc-radio-text",dangerouslySetInnerHTML:{__html:e.dangerousDescription}})):u.a.createElement("div",{className:"osc-radio-container",key:e.value},u.a.createElement("div",{className:"osc-radio-input".concat(t.state.value==e.value?" osc-radio-input-checked":"")},u.a.createElement("input",{type:"radio",name:t.divId,value:e.value,onChange:function(){return t.handleOnChange({value:e.value})}})),u.a.createElement("div",{className:"osc-radio-text"},e.dangerousDescription?null:e.description||e.title||e.value))}),e)}}])&&G(e.prototype,t),n&&G(e,n),o}();function K(e){return(K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function J(e,t){return(J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function X(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=Z(i);return t=a?(e=Z(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==K(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function Z(e){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Y=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}(o,h);var e,t,n,r=X(o);function o(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return e=o,(t=[{key:"validate",value:function(e){var t=e.showErrors,n=!0,r="";return this.state.value&&this.state.value.match(/^\s*\d{4}\s*[a-zA-Z][a-zA-Z]\s*$/)||(n=!1,t&&(r="Dit is geen postcode")),this.config.required&&!this.state.value&&(n=!1,t&&(r="Je hebt nog niets ingevuld")),this.setState({isValid:n,error:r}),n}},{key:"render",value:function(){var t=this,e=null;return t.state.error&&(e=u.a.createElement("div",{className:"osc-form-error"},t.state.error)),u.a.createElement("div",{className:"osc-textinput"},u.a.createElement("input",{type:"text",value:this.props.value,disabled:this.props.disabled,placeholder:this.config.placeholder,onChange:function(){return t.handleOnChange({value:t.input.value})},ref:function(e){return t.input=e}}),e)}}])&&Q(e.prototype,t),n&&Q(e,n),o}();function $(e){return($="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ee(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function te(e,t){return(te=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ne(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=re(i);return t=a?(e=re(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==$(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function re(e){return(re=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var oe=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&te(e,t)}(o,h);var e,t,n,r=ne(o);function o(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return e=o,(t=[{key:"componentDidMount",value:function(){var e=this.state.value||this.config.choices[0]&&this.config.choices[0].value;this.handleOnChange({value:e})}},{key:"render",value:function(){var t=this,e=null;return t.state.error&&(e=u.a.createElement("div",{className:"osc-form-error"},"Je hebt nog geen keuze gemaakt")),u.a.createElement("div",{className:"osc-select"},u.a.createElement("select",{value:this.state.value||"",disabled:this.props.disabled,placeholder:this.config.placeholder,onChange:function(){return t.handleOnChange({value:t.input.value})},ref:function(e){return t.input=e}},t.config.choices.map(function(e){return u.a.createElement("option",{value:e.value||"",key:e.value},e.description||e.title||e.value)})),e)}}])&&ee(e.prototype,t),n&&ee(e,n),o}();function ie(e){return(ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ae(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ce(e,t){return(ce=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ue(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=se(i);return t=a?(e=se(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==ie(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function se(e){return(se=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var le=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ce(e,t)}(o,h);var e,t,n,r=ue(o);function o(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return e=o,(t=[{key:"render",value:function(){var t=this,e=null;return t.state.error&&(e=u.a.createElement("div",{className:"osc-form-error"},"Je hebt nog niets ingevuld")),u.a.createElement("div",{className:"osc-textinput"},u.a.createElement("input",{type:"text",value:this.props.value,disabled:this.props.disabled,placeholder:this.config.placeholder,onChange:function(){return t.handleOnChange({value:t.input.value})},ref:function(e){return t.input=e}}),e)}}])&&ae(e.prototype,t),n&&ae(e,n),o}();function fe(e){return(fe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function pe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function de(e,t){return(de=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function he(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=ge(i);return t=a?(e=ge(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==fe(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function ge(e){return(ge=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var me=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&de(e,t)}(o,h);var e,t,n,r=he(o);function o(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return e=o,(t=[{key:"render",value:function(){var t=this,e=null;return t.state.error&&(e=u.a.createElement("div",{className:"osc-form-error"},"Je hebt nog niets ingevuld")),u.a.createElement("div",{className:"osc-textarea"},u.a.createElement("textarea",{value:this.props.value,disabled:this.props.disabled,placeholder:this.config.placeholder,onChange:function(){return t.handleOnChange({value:t.input.value})},ref:function(e){return t.input=e}},this.state.value),e)}}])&&pe(e.prototype,t),n&&pe(e,n),o}();function ye(e){return(ye="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ve(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function be(o){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?ve(Object(i),!0).forEach(function(e){var t,n,r;t=o,r=i[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):ve(Object(i)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(i,e))})}return o}function we(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ee(e,t){return(Ee=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Oe(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=Se(i);return t=a?(e=Se(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==ye(r)&&"function"!=typeof r?_e(n):r}}function _e(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Se(e){return(Se=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Te=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ee(e,t)}(o,a["a"]);var e,t,n,r=Oe(o);function o(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var n=_e(t=r.call(this,e));return n.defaultConfig={inputType:null,validateAction:null,changeAction:null,required:!1,title:null,description:null,choices:[]},n.config=i.a.recursive(n.defaultConfig,n.config,e.config||{}),n.config.name=n.config.name||n.config.title.toLowerCase(),n.state={value:e.value||void 0},n.handleOnChange=n.handleOnChange.bind(n),n.onChange=e.onChange,t}return e=o,(t=[{key:"validate",value:function(e){var t=e.showErrors;return!this.input||this.input.validate({showErrors:t})}},{key:"handleOnChange",value:function(e){"function"==typeof this.onChange&&this.onChange(e)}},{key:"render",value:function(){var t=this,e=null;t.config.title&&(e=React.createElement("h3",{className:"osc-form-title"},t.config.title));var n=null;t.config.description&&(n=React.createElement("div",{className:"osc-form-description",dangerouslySetInnerHTML:{__html:t.config.description}}));var r=null;switch(t.config.inputType){case"hidden":r=React.createElement(w,{config:t.config,value:this.props.value||this.config.value,onChange:t.handleOnChange,ref:function(e){return t.input=e}});break;case"html-with-counter":case"htmlarea-with-counter":r=React.createElement(q,{config:be(be({},t.config),{},{inputType:"htmlarea"}),value:this.props.value||this.config.value,onChange:t.handleOnChange,ref:function(e){return t.input=e}});break;case"image-upload":r=React.createElement(C,{config:t.config,value:this.props.value||this.config.value,onChange:t.handleOnChange,ref:function(e){return t.input=e}});break;case"input-with-counter":case"text-with-counter":r=React.createElement(q,{config:be({inputType:"input"},t.config),value:this.props.value||this.config.value,onChange:t.handleOnChange,ref:function(e){return t.input=e}});break;case"postcode":r=React.createElement(Y,{config:t.config,onChange:t.handleOnChange,ref:function(e){return t.input=e}});break;case"radios":r=React.createElement(z,{config:t.config,value:this.props.value||this.config.value,onChange:t.handleOnChange,ref:function(e){return t.input=e}});break;case"select":case"multiple-choice":r=React.createElement(oe,{config:t.config,value:this.props.value||this.config.value,onChange:t.handleOnChange,ref:function(e){return t.input=e}});break;case"text":r=React.createElement(le,{config:t.config,value:this.props.value||this.config.value,onChange:t.handleOnChange,ref:function(e){return t.input=e}});break;case"textarea":r=React.createElement(me,{config:t.config,value:this.props.value||this.config.value,onChange:t.handleOnChange,ref:function(e){return t.input=e}});break;case"textarea-with-counter":r=React.createElement(q,{config:be(be({},t.config),{},{inputType:"textarea"}),value:this.props.value||this.config.value,onChange:t.handleOnChange,ref:function(e){return t.input=e}})}return React.createElement("div",{id:t.id,ref:function(e){return t.instance=e},className:"osc-form-field"},e,n,r)}}])&&we(e.prototype,t),n&&we(e,n),o}();function Ce(e){return(Ce="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Re(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function xe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Pe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ke(e,t){return(ke=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ie(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=je(i);return t=a?(e=je(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==Ce(r)&&"function"!=typeof r?Ae(n):r}}function Ae(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function je(e){return(je=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Le=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ke(e,t)}(o,a["a"]);var e,t,n,r=Ie(o);function o(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var n=Ae(t=r.call(this,e));return n.defaultConfig={title:null,intro:null,fields:[]},n.config=i.a.recursive(n.defaultConfig,n.config,e.config||{}),n.state={values:e.values||{}},n.handleOnChange=n.handleOnChange.bind(Ae(t)),n.fields=[],t}return e=o,(t=[{key:"getValues",value:function(){return this.state.values}},{key:"validate",value:function(e){var t=e.showErrors,n=!0,r=null;return this.fields.forEach(function(e){e.validate({showErrors:t})||(n=!1,r=r||e)}),r&&r.instance&&r.instance.scrollIntoView&&r.instance.scrollIntoView({behavior:"smooth"}),n}},{key:"handleOnChange",value:function(e){var t=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Re(Object(n),!0).forEach(function(e){xe(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Re(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},this.state.values);t[e.name]=e.value,this.setState({values:t})}},{key:"render",value:function(){var n=this,e=null;n.config.title&&(e=React.createElement("h2",{className:"osc-form-title"},n.config.title));var t=null;n.config.intro&&(t=React.createElement("div",{className:"osc-form-intro",dangerouslySetInnerHTML:{__html:n.config.intro}}));var r=null;return n.config.fields&&n.config.fields.length&&(r=React.createElement("div",{className:"osc-form-fields"},n.config.fields.map(function(e,t){return React.createElement(Te,xe({config:e,onChange:n.handleOnChange,ref:function(e){return n.input=e},key:"osc-form-field-".concat(t)},"ref",function(e){n.fields[t]=e}))}))),React.createElement("div",{id:n.divId,className:"osc-form",ref:function(e){return n.instance=e}},e,t,r)}}])&&Pe(e.prototype,t),n&&Pe(e,n),o}();function Be(e){return(Be="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function De(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ne(e,t){return(Ne=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Me(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=qe(i);return t=a?(e=qe(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==Be(r)&&"function"!=typeof r?Fe(n):r}}function Fe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function qe(e){return(qe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Ue=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ne(e,t)}(o,u.a.Component);var e,t,n,r=Me(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=r.call(this,e)).state={value:t.props.value,touched:t.props.touched||!1},t.handleChange=t.handleChange.bind(Fe(t)),t}return e=o,(t=[{key:"handleChange",value:function(e){var t=e.target.value;"function"==typeof this.props.onChange&&this.props.onChange(t),this.setState({value:t,touched:!0})}},{key:"doTouch",value:function(){"function"==typeof this.props.onChange&&this.props.onChange(50),this.setState({touched:!0})}},{key:"calcProgress",value:function(e,t,n){return 2*(n-e)/(t-e)-1}},{key:"render",value:function(){var t=this,e=t.state,n=e.value,r=e.touched,o=t.props,i=o.min,a=o.max,c=o.step;return u.a.createElement("div",{className:"".concat(t.props.className," osc-slider")},u.a.createElement("div",{className:"osc-slider-track-container"},u.a.createElement("div",{className:"osc-slider-track"}),u.a.createElement("div",{className:"osc-slider-track-progress-container"},u.a.createElement("div",{className:"osc-slider-track-progress",style:{transform:"scaleX("+t.calcProgress(i,a,n)+")"}})),u.a.createElement("div",{className:"osc-slider-track-dot-end osc-slider-track-dot-left"}),u.a.createElement("div",{className:"osc-slider-track-dot-start osc-slider-track-dot-center"}),u.a.createElement("div",{className:"osc-slider-track-dot-end osc-slider-track-dot-right"})),u.a.createElement("input",{type:"range",min:i,max:a,step:c,value:n,onClick:function(){r||t.doTouch()},onChange:t.handleChange,className:r?"osc-slider-input-range":"osc-slider-input-range osc-slider-untouched",ref:function(e){return t.input=e}}))}}])&&De(e.prototype,t),n&&De(e,n),o}();t.a={Form:Le,FormField:Te,Hidden:w,ImageUpload:C,InputWithCounter:q,Postcode:Y,Radios:z,Select:oe,Text:le,Textarea:me,Slider:Ue}},function(e,t,n){"use strict";(function(i){var t,n,r="URLSearchParams"in self,o="Symbol"in self&&"iterator"in Symbol,c="FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(e){return!1}}(),a="FormData"in self,u="ArrayBuffer"in self;function s(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function l(e){return"string"!=typeof e&&(e=String(e)),e}function e(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return o&&(e[Symbol.iterator]=function(){return e}),e}function f(t){this.map={},t instanceof f?t.forEach(function(e,t){this.append(t,e)},this):Array.isArray(t)?t.forEach(function(e){this.append(e[0],e[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function p(e){if(e.bodyUsed)return i.reject(new TypeError("Already read"));e.bodyUsed=!0}function d(n){return new i(function(e,t){n.onload=function(){e(n.result)},n.onerror=function(){t(n.error)}})}function h(e){var t=new FileReader,n=d(t);return t.readAsArrayBuffer(e),n}function g(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function m(){return this.bodyUsed=!1,this._initBody=function(e){var t;(this._bodyInit=e)?"string"==typeof e?this._bodyText=e:c&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:a&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:r&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():u&&c&&((t=e)&&DataView.prototype.isPrototypeOf(t))?(this._bodyArrayBuffer=g(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):u&&(ArrayBuffer.prototype.isPrototypeOf(e)||n(e))?this._bodyArrayBuffer=g(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},c&&(this.blob=function(){var e=p(this);if(e)return e;if(this._bodyBlob)return i.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return i.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return i.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?p(this)||i.resolve(this._bodyArrayBuffer):this.blob().then(h)}),this.text=function(){var e,t,n,r=p(this);if(r)return r;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,n=d(t),t.readAsText(e),n;if(this._bodyArrayBuffer)return i.resolve(function(e){for(var t=new Uint8Array(e),n=new Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return i.resolve(this._bodyText)},a&&(this.formData=function(){return this.text().then(b)}),this.json=function(){return this.text().then(JSON.parse)},this}u&&(t=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],n=ArrayBuffer.isView||function(e){return e&&-1<t.indexOf(Object.prototype.toString.call(e))}),f.prototype.append=function(e,t){e=s(e),t=l(t);var n=this.map[e];this.map[e]=n?n+", "+t:t},f.prototype.delete=function(e){delete this.map[s(e)]},f.prototype.get=function(e){return e=s(e),this.has(e)?this.map[e]:null},f.prototype.has=function(e){return this.map.hasOwnProperty(s(e))},f.prototype.set=function(e,t){this.map[s(e)]=l(t)},f.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},f.prototype.keys=function(){var n=[];return this.forEach(function(e,t){n.push(t)}),e(n)},f.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),e(t)},f.prototype.entries=function(){var n=[];return this.forEach(function(e,t){n.push([t,e])}),e(n)},o&&(f.prototype[Symbol.iterator]=f.prototype.entries);var y=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function v(e,t){var n,r,o=(t=t||{}).body;if(e instanceof v){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new f(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,o||null==e._bodyInit||(o=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new f(t.headers)),this.method=(n=t.method||this.method||"GET",r=n.toUpperCase(),-1<y.indexOf(r)?r:n),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function b(e){var o=new FormData;return e.trim().split("&").forEach(function(e){var t,n,r;e&&(n=(t=e.split("=")).shift().replace(/\+/g," "),r=t.join("=").replace(/\+/g," "),o.append(decodeURIComponent(n),decodeURIComponent(r)))}),o}function w(e,t){t=t||{},this.type="default",this.status=void 0===t.status?200:t.status,this.ok=200<=this.status&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new f(t.headers),this.url=t.url||"",this._initBody(e)}v.prototype.clone=function(){return new v(this,{body:this._bodyInit})},m.call(v.prototype),m.call(w.prototype),w.prototype.clone=function(){return new w(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new f(this.headers),url:this.url})},w.error=function(){var e=new w(null,{status:0,statusText:""});return e.type="error",e};var E=[301,302,303,307,308];w.redirect=function(e,t){if(-1===E.indexOf(t))throw new RangeError("Invalid status code");return new w(null,{status:t,headers:{location:e}})};var O=self.DOMException;try{new O}catch(e){(O=function(e,t){this.message=e,this.name=t;var n=Error(e);this.stack=n.stack}).prototype=Object.create(Error.prototype),O.prototype.constructor=O}function _(o,a){return new i(function(r,e){var t=new v(o,a);if(t.signal&&t.signal.aborted)return e(new O("Aborted","AbortError"));var i=new XMLHttpRequest;function n(){i.abort()}i.onload=function(){var e,o,t={status:i.status,statusText:i.statusText,headers:(e=i.getAllResponseHeaders()||"",o=new f,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(e){var t,n=e.split(":"),r=n.shift().trim();r&&(t=n.join(":").trim(),o.append(r,t))}),o)};t.url="responseURL"in i?i.responseURL:t.headers.get("X-Request-URL");var n="response"in i?i.response:i.responseText;r(new w(n,t))},i.onerror=function(){e(new TypeError("Network request failed"))},i.ontimeout=function(){e(new TypeError("Network request failed"))},i.onabort=function(){e(new O("Aborted","AbortError"))},i.open(t.method,t.url,!0),"include"===t.credentials?i.withCredentials=!0:"omit"===t.credentials&&(i.withCredentials=!1),"responseType"in i&&c&&(i.responseType="blob"),t.headers.forEach(function(e,t){i.setRequestHeader(t,e)}),t.signal&&(t.signal.addEventListener("abort",n),i.onreadystatechange=function(){4===i.readyState&&t.signal.removeEventListener("abort",n)}),i.send(void 0===t._bodyInit?null:t._bodyInit)})}_.polyfill=!0,self.fetch||(self.fetch=_,self.Headers=f,self.Request=v,self.Response=w)}).call(this,n(10))},function(n,e,t){(function(e){function t(e){return e&&e.Math==Math&&e}n.exports=t("object"==typeof globalThis&&globalThis)||t("object"==typeof window&&window)||t("object"==typeof self&&self)||t("object"==typeof e&&e)||Function("return this")()}).call(this,t(8))},function(e,t){var n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){e.exports=n(15).Promise},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function c(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var u,s=[],l=!1,f=-1;function p(){l&&u&&(l=!1,u.length?s=u.concat(s):f=-1,s.length&&d())}function d(){if(!l){var e=c(p);l=!0;for(var t=s.length;t;){for(u=s,s=[];++f<t;)u&&u[f].run();f=-1,t=s.length}u=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function g(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new h(e,t)),1!==s.length||l||c(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=g,o.addListener=g,o.once=g,o.off=g,o.removeListener=g,o.removeAllListeners=g,o.emit=g,o.prependListener=g,o.prependOnceListener=g,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){var r=n(13);e.exports=!r(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},,function(e,t,fe){(function(ue,se){var le;e.exports=function(){"use strict";function n(e){return typeof e==="function"||typeof e==="object"&&e!==null}function s(e){return typeof e==="function"}var e=undefined;if(!Array.isArray){e=function(e){return Object.prototype.toString.call(e)==="[object Array]"}}else{e=Array.isArray}var r=e,o=0,i=undefined,a=undefined,c=function e(t,n){w[o]=t;w[o+1]=n;o+=2;if(o===2){if(a){a(E)}else{_()}}};function t(e){a=e}function u(e){c=e}var l=typeof window!=="undefined"?window:undefined,f=l||{},p=f.MutationObserver||f.WebKitMutationObserver,d=typeof self==="undefined"&&typeof ue!=="undefined"&&{}.toString.call(ue)==="[object process]",h=typeof Uint8ClampedArray!=="undefined"&&typeof importScripts!=="undefined"&&typeof MessageChannel!=="undefined";function g(){return function(){return ue.nextTick(E)}}function m(){return function(){i(E)}}function y(){var e=0;var t=new p(E);var n=document.createTextNode("");t.observe(n,{characterData:true});return function(){n.data=e=++e%2}}function v(){var e=new MessageChannel;e.port1.onmessage=E;return function(){return e.port2.postMessage(0)}}function b(){var e=setTimeout;return function(){return e(E,1)}}var w=new Array(1e3);function E(){for(var e=0;e<o;e+=2){var t=w[e];var n=w[e+1];t(n);w[e]=undefined;w[e+1]=undefined}o=0}function O(){try{var e=le;var t=fe(16);i=t.runOnLoop||t.runOnContext;return m()}catch(e){return b()}}var _=undefined;if(d){_=g()}else if(p){_=y()}else if(h){_=v()}else if(l===undefined&&"function"==="function"){_=O()}else{_=b()}function S(e,t){var n=arguments;var r=this;var o=new this.constructor(R);if(o[C]===undefined){Y(o)}var i=r._state;if(i){(function(){var e=n[i-1];c(function(){return Q(i,o,e,r._result)})})()}else{V(r,o,e,t)}return o}function T(e){var t=this;if(e&&typeof e==="object"&&e.constructor===t){return e}var n=new t(R);F(n,e);return n}var C=Math.random().toString(36).substring(16);function R(){}var x=void 0,P=1,k=2,I=new W;function A(){return new TypeError("You cannot resolve a promise with itself")}function j(){return new TypeError("A promises callback cannot return that same promise.")}function L(e){try{return e.then}catch(e){I.error=e;return I}}function B(e,t,n,r){try{e.call(t,n,r)}catch(e){return e}}function D(e,r,o){c(function(t){var n=false;var e=B(o,r,function(e){if(n){return}n=true;if(r!==e){F(t,e)}else{U(t,e)}},function(e){if(n){return}n=true;G(t,e)},"Settle: "+(t._label||" unknown promise"));if(!n&&e){n=true;G(t,e)}},e)}function N(t,e){if(e._state===P){U(t,e._result)}else if(e._state===k){G(t,e._result)}else{V(e,undefined,function(e){return F(t,e)},function(e){return G(t,e)})}}function M(e,t,n){if(t.constructor===e.constructor&&n===S&&t.constructor.resolve===T){N(e,t)}else{if(n===I){G(e,I.error)}else if(n===undefined){U(e,t)}else if(s(n)){D(e,t,n)}else{U(e,t)}}}function F(e,t){if(e===t){G(e,A())}else if(n(t)){M(e,t,L(t))}else{U(e,t)}}function q(e){if(e._onerror){e._onerror(e._result)}H(e)}function U(e,t){if(e._state!==x){return}e._result=t;e._state=P;if(e._subscribers.length!==0){c(H,e)}}function G(e,t){if(e._state!==x){return}e._state=k;e._result=t;c(q,e)}function V(e,t,n,r){var o=e._subscribers;var i=o.length;e._onerror=null;o[i]=t;o[i+P]=n;o[i+k]=r;if(i===0&&e._state){c(H,e)}}function H(e){var t=e._subscribers;var n=e._state;if(t.length===0){return}var r=undefined,o=undefined,i=e._result;for(var a=0;a<t.length;a+=3){r=t[a];o=t[a+n];if(r){Q(n,r,o,i)}else{o(i)}}e._subscribers.length=0}function W(){this.error=null}var z=new W;function K(e,t){try{return e(t)}catch(e){z.error=e;return z}}function Q(e,t,n,r){var o=s(n),i=undefined,a=undefined,c=undefined,u=undefined;if(o){i=K(n,r);if(i===z){u=true;a=i.error;i=null}else{c=true}if(t===i){G(t,j());return}}else{i=r;c=true}if(t._state!==x){}else if(o&&c){F(t,i)}else if(u){G(t,a)}else if(e===P){U(t,i)}else if(e===k){G(t,i)}}function J(n,e){try{e(function e(t){F(n,t)},function e(t){G(n,t)})}catch(e){G(n,e)}}var X=0;function Z(){return X++}function Y(e){e[C]=X++;e._state=undefined;e._result=undefined;e._subscribers=[]}function $(e,t){this._instanceConstructor=e;this.promise=new e(R);if(!this.promise[C]){Y(this.promise)}if(r(t)){this._input=t;this.length=t.length;this._remaining=t.length;this._result=new Array(this.length);if(this.length===0){U(this.promise,this._result)}else{this.length=this.length||0;this._enumerate();if(this._remaining===0){U(this.promise,this._result)}}}else{G(this.promise,ee())}}function ee(){return new Error("Array Methods must be provided an Array")}function te(e){return new $(this,e).promise}function ne(o){var i=this;if(r(o))return new i(function(e,t){for(var n=o.length,r=0;r<n;r++)i.resolve(o[r]).then(e,t)});else return new i(function(e,t){return t(new TypeError("You must pass an array to race."))})}function re(e){var t=new this(R);return G(t,e),t}function oe(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function ie(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function ae(e){this[C]=Z();this._result=this._state=undefined;this._subscribers=[];if(R!==e){typeof e!=="function"&&oe();this instanceof ae?J(this,e):ie()}}function ce(){var e=undefined;if(typeof se!=="undefined"){e=se}else if(typeof self!=="undefined"){e=self}else{try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}}var t=e.Promise;if(t){var n=null;try{n=Object.prototype.toString.call(t.resolve())}catch(e){}if(n==="[object Promise]"&&!t.cast){return}}e.Promise=ae}return $.prototype._enumerate=function(){for(var e=this.length,t=this._input,n=0;this._state===x&&n<e;n++)this._eachEntry(t[n],n)},$.prototype._eachEntry=function(t,e){var n,r,o=this._instanceConstructor,i=o.resolve;i===T?(n=L(t))===S&&t._state!==x?this._settledAt(t._state,e,t._result):"function"!=typeof n?(this._remaining--,this._result[e]=t):o===ae?(M(r=new o(R),t,n),this._willSettleAt(r,e)):this._willSettleAt(new o(function(e){return e(t)}),e):this._willSettleAt(i(t),e)},$.prototype._settledAt=function(e,t,n){var r=this.promise;r._state===x&&(this._remaining--,e===k?G(r,n):this._result[t]=n),0===this._remaining&&U(r,this._result)},$.prototype._willSettleAt=function(e,t){var n=this;V(e,void 0,function(e){return n._settledAt(P,t,e)},function(e){return n._settledAt(k,t,e)})},ae.all=function(e){return new $(this,e).promise},ae.race=function(o){var i=this;return r(o)?new i(function(e,t){for(var n=o.length,r=0;r<n;r++)i.resolve(o[r]).then(e,t)}):new i(function(e,t){return t(new TypeError("You must pass an array to race."))})},ae.resolve=T,ae.reject=function(e){var t=new this(R);return G(t,e),t},ae._setScheduler=function(e){a=e},ae._setAsap=function(e){c=e},ae._asap=c,ae.prototype={constructor:ae,then:S,catch:function(e){return this.then(null,e)}},ce(),ae.polyfill=ce,ae.Promise=ae}()}).call(this,fe(11),fe(8))},function(e,t){},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return OpenStadComponentLightbox});var merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),merge__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),react_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3),react_dom__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(n){var r=_isNativeReflectConstruct();return function(){var e,t=_getPrototypeOf(n);return _possibleConstructorReturn(this,r?(e=_getPrototypeOf(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments))}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var OpenStadComponentLightbox=function(_React$Component){_inherits(OpenStadComponentLightbox,_React$Component);var _super=_createSuper(OpenStadComponentLightbox);function OpenStadComponentLightbox(e){var t;return _classCallCheck(this,OpenStadComponentLightbox),(t=_super.call(this,e)).defaultConfig={},t.config=merge__WEBPACK_IMPORTED_MODULE_0___default.a.recursive(t.defaultConfig,t.config,e.config||{}),t.state={images:[],startIndex:0},t.recalcSizes=t.recalcSizes.bind(_assertThisInitialized(t)),t}return _createClass(OpenStadComponentLightbox,[{key:"componentDidMount",value:function(){var t=this;document.addEventListener("osc-show-light-box",function(e){t.showLightbox(e.detail)}),document.body.appendChild(this.instance)}},{key:"showLightbox",value:function showLightbox(data){var self=this,aspectRatio;try{aspectRatio=eval(data.aspectRatio.replace&&data.aspectRatio.replace("x","/"))}catch(e){}"number"!=typeof aspectRatio&&(aspectRatio=16/9),self.setState({images:data.images,startIndex:data.startIndex,aspectRatio:aspectRatio},function(){self.instance.style.display="block",self.recalcSizes()}),window.addEventListener("resize",self.recalcSizes)}},{key:"hideLightbox",value:function(){this.instance.style.display="none",window.removeEventListener("resize",self.recalcSizes)}},{key:"showImage",value:function(e,t){e.stopPropagation(),this.mainImage.src=t}},{key:"recalcSizes",value:function(){var e,t,n,r,o,i,a=this;a.mainContainer&&((e=a.mainContainer.offsetWidth)/(t=a.mainContainer.offsetHeight)>a.state.aspectRatio?(n=.8*t,a.mainImageContainer.style.height=n+"px",a.mainImageContainer.style.width=a.state.aspectRatio*n+"px",a.mainImageContainer.style.top=(t-n)/2+"px",a.mainImageContainer.style.left=(e-a.state.aspectRatio*n)/2+"px"):(r=e,a.mainImageContainer.style.width=r+"px",a.mainImageContainer.style.height=1/a.state.aspectRatio*r+"px",a.mainImageContainer.style.top=(t-1/a.state.aspectRatio*r)/2+"px",a.mainImageContainer.style.left=0),a.mainImage.style.width=a.mainImageContainer.style.width,a.mainImage.style.height=a.mainImageContainer.style.height,o=a.state.aspectRatio*a.navigationContainer.offsetHeight,(i=a.state.images.length*o+20*a.state.images.length)>a.navigationContainer.offsetWidth&&(i=a.navigationContainer.offsetWidth,o=i/a.state.images.length-20),a.navigationContainer.style.width=i+"px",a.state.images.map(function(e,t){var n=parseInt(o);a["lighbox-image-container-".concat(t)].style.width=n+"px",a["lighbox-image-container-".concat(t)].style.height=parseInt(1/a.state.aspectRatio*n)+"px",a["lighbox-image-".concat(t)].style.width=a["lighbox-image-container-".concat(t)].style.width,a["lighbox-image-".concat(t)].style.height=a["lighbox-image-container-".concat(t)].style.height}))}},{key:"render",value:function(){var e=this,r=this;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"osc-lightbox",onClick:function(){e.hideLightbox()},ref:function(e){return r.instance=e}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"osc-close-button",onClick:function(e){return r.hideLightbox(e)}}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"osc-lightbox-main-container",ref:function(e){return r.mainContainer=e}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"osc-image-container",ref:function(e){return r.mainImageContainer=e}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img",{src:r.state.images[r.state.startIndex]&&r.state.images[r.state.startIndex].src,ref:function(e){return r.mainImage=e}}))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"osc-lightbox-navigation-container"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"osc-lightbox-navigation",ref:function(e){return r.navigationContainer=e}},r.state.images.map(function(t,n){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"osc-image-container",style:{backgroundImage:"url(".concat(t.src,")")},onClick:function(e){return r.showImage(e,t.src)},key:"lighbox-image-container-".concat(n),ref:function(e){return r["lighbox-image-container-".concat(n)]=e}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img",{src:t.src,ref:function(e){return r["lighbox-image-".concat(n)]=e}}))}))))}}]),OpenStadComponentLightbox}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component)},,,function(e,t,n){var r=n(12),o=n(23),i=n(39);e.exports=r?function(e,t,n){return o.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var r=n(12),o=n(44),i=n(24),a=n(43),c=Object.defineProperty;t.f=r?c:function(e,t,n){if(i(e),t=a(t,!0),i(n),o)try{return c(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var r=n(17);e.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return h}),n.d(t,"PreviousNextButtonBlock",function(){return h});n(6);var r=n(0),a=n.n(r),o=n(3),i=n.n(o),c=(n(93),n(1)),u=n.n(c);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=d(i);return t=a?(e=d(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==s(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(o,a.a.Component);var e,t,n,r=p(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=r.call(this,e)).defaultConfig={previousAction:e.previousAction,nextAction:e.nextAction,previousUrl:e.previousUrl,nextUrl:e.nextUrl,previousLabel:e.previousLabel||"Vorige",nextLabel:e.nextLabel||"Volgende"},t.config=u.a.recursive(t.defaultConfig,t.config,e.config||{}),t}return e=o,(t=[{key:"render",value:function(){var e,t,n=this,r=this,o=this.config.previousAction;this.config.previousUrl&&(o=function(){document.location.href="".concat(n.config.previousUrl)}),o&&(e=a.a.createElement("div",{className:"osc-previous-button",onClick:function(e){o(e)}},this.config.previousLabel));var i=this.config.nextAction;return this.config.nextUrl&&(i=function(){document.location.href="".concat(n.config.nextUrl)}),i&&(t=a.a.createElement("div",{className:"osc-next-button",onClick:function(e){i(e)}},this.config.nextLabel)),a.a.createElement("div",{className:"osc-previous-next-button-block",ref:function(e){return r.instance=e}},e,t)}}])&&l(e.prototype,t),n&&l(e,n),o}();h.renderElement=function(e,t){var n=e.attributes;i.a.render(a.a.createElement(h,{attributes:n,config:t}),e)}},,,function(e,t,n){var r=n(40),o=n(42);e.exports=function(e){return r(o(e))}},function(e,t,n){var r=n(7),o=n(22);e.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(e,t){e.exports={}},function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);n(6),n(94);var r=n(0),o=n.n(r),i=n(3),a=n.n(i),c=(n(96),n(19));n.d(t,"default",function(){return c.a}),n.d(t,"Lightbox",function(){return c.a}),c.a.renderElement=function(e,t){var n=e.attributes;a.a.render(o.a.createElement(c.a,{attributes:n,config:t}),e)}},,,function(e,t,n){var r=n(12),o=n(71),i=n(39),a=n(28),c=n(43),u=n(9),s=n(44),l=Object.getOwnPropertyDescriptor;t.f=r?l:function(e,t){if(e=a(e),t=c(t,!0),s)try{return l(e,t)}catch(e){}if(u(e,t))return i(!o.f.call(e,t),e[t])}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){var r=n(13),o=n(41),i="".split;e.exports=r(function(){return!Object("z").propertyIsEnumerable(0)})?function(e){return"String"==o(e)?i.call(e,""):Object(e)}:Object},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},function(e,t,n){var o=n(17);e.exports=function(e,t){if(!o(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!o(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!o(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!o(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}},function(e,t,n){var r=n(12),o=n(13),i=n(45);e.exports=!r&&!o(function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){var r=n(7),o=n(17),i=r.document,a=o(i)&&o(i.createElement);e.exports=function(e){return a?i.createElement(e):{}}},function(e,t,n){var r=n(47),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(e){return o.call(e)}),e.exports=r.inspectSource},function(e,t,n){var r=n(7),o=n(29),i="__core-js_shared__",a=r[i]||o(i,{});e.exports=a},function(e,t,n){var r=n(49),o=n(50),i=r("keys");e.exports=function(e){return i[e]||(i[e]=o(e))}},function(e,t,n){var r=n(75),o=n(47);(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++n+r).toString(36)}},function(e,t,n){function r(e){return"function"==typeof e?e:void 0}var o=n(78),i=n(7);e.exports=function(e,t){return arguments.length<2?r(o[e])||r(i[e]):o[e]&&o[e][t]||i[e]&&i[e][t]}},function(e,t,n){var a=n(9),c=n(28),u=n(80).indexOf,s=n(30);e.exports=function(e,t){var n,r=c(e),o=0,i=[];for(n in r)!a(s,n)&&a(r,n)&&i.push(n);for(;t.length>o;)a(r,n=t[o++])&&(~u(i,n)||i.push(n));return i}},function(e,t,n){var r=n(54),o=Math.min;e.exports=function(e){return 0<e?o(r(e),9007199254740991):0}},function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(0<e?r:n)(e)}},function(e,t,n){var i=n(84);e.exports=function(r,o,e){if(i(r),void 0===o)return r;switch(e){case 0:return function(){return r.call(o)};case 1:return function(e){return r.call(o,e)};case 2:return function(e,t){return r.call(o,e,t)};case 3:return function(e,t,n){return r.call(o,e,t,n)}}return function(){return r.apply(o,arguments)}}},function(e,t,n){var r=n(7),o=n(49),i=n(9),a=n(50),c=n(57),u=n(88),s=o("wks"),l=r.Symbol,f=u?l:l&&l.withoutSetter||a;e.exports=function(e){return i(s,e)||(c&&i(l,e)?s[e]=l[e]:s[e]=f("Symbol."+e)),s[e]}},function(e,t,n){var r=n(13);e.exports=!!Object.getOwnPropertySymbols&&!r(function(){return!String(Symbol())})},,,function(e,t,n){var l=n(7),f=n(38).f,p=n(22),d=n(72),h=n(29),g=n(76),m=n(83);e.exports=function(e,t){var n,r,o,i,a=e.target,c=e.global,u=e.stat,s=c?l:u?l[a]||h(a,{}):(l[a]||{}).prototype;if(s)for(n in t){if(o=t[n],r=e.noTargetGet?(i=f(s,n))&&i.value:s[n],!m(c?n:a+(u?".":"#")+n,e.forced)&&void 0!==r){if(typeof o==typeof r)continue;g(o,r)}(e.sham||r&&r.sham)&&p(o,"sham",!0),d(s,n,o,e)}}},function(e,t,n){function r(d){var h=1==d,g=2==d,m=3==d,y=4==d,v=6==d,b=5==d||v;return function(e,t,n,r){for(var o,i,a=O(e),c=E(a),u=w(t,n,3),s=_(c.length),l=0,f=r||S,p=h?f(e,s):g?f(e,0):void 0;l<s;l++)if((b||l in c)&&(i=u(o=c[l],l,a),d))if(h)p[l]=i;else if(i)switch(d){case 3:return!0;case 5:return o;case 6:return l;case 2:T.call(p,o)}else if(y)return!1;return v?-1:m||y?y:p}}var w=n(55),E=n(40),O=n(85),_=n(53),S=n(86),T=[].push;e.exports={forEach:r(0),map:r(1),filter:r(2),some:r(3),every:r(4),find:r(5),findIndex:r(6)}},function(e,t,n){var r=n(56),o=n(89),i=n(23),a=r("unscopables"),c=Array.prototype;null==c[a]&&i.f(c,a,{configurable:!0,value:o(null)}),e.exports=function(e){c[a][e]=!0}},function(e,t,n){function a(e){throw e}var c=n(12),u=n(13),s=n(9),l=Object.defineProperty,f={};e.exports=function(e,t){if(s(f,e))return f[e];var n=[][e],r=!!s(t=t||{},"ACCESSORS")&&t.ACCESSORS,o=s(t,0)?t[0]:a,i=s(t,1)?t[1]:void 0;return f[e]=!!n&&!u(function(){if(r&&!c)return!0;var e={length:-1};r?l(e,1,{enumerable:!0,get:a}):e[1]=1,n.call(e,o,i)})}},function(e,t,n){var r=n(7),o=n(55),i=Function.call;e.exports=function(e,t,n){return o(i,r[e].prototype[t],n)}},,,,,,function(e,t){!function(){if("undefined"!=typeof window)try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default")}catch(e){function t(e,t){var n,r;return(t=t||{}).bubbles=!!t.bubbles,t.cancelable=!!t.cancelable,(n=document.createEvent("CustomEvent")).initCustomEvent(e,t.bubbles,t.cancelable,t.detail),r=n.preventDefault,n.preventDefault=function(){r.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},n}t.prototype=window.Event.prototype,window.CustomEvent=t}}()},function(e,t,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);t.f=i?function(e){var t=o(this,e);return!!t&&t.enumerable}:r},function(e,t,n){var c=n(7),u=n(22),s=n(9),l=n(29),r=n(46),o=n(73),i=o.get,f=o.enforce,p=String(String).split("String");(e.exports=function(e,t,n,r){var o=!!r&&!!r.unsafe,i=!!r&&!!r.enumerable,a=!!r&&!!r.noTargetGet;"function"==typeof n&&("string"!=typeof t||s(n,"name")||u(n,"name",t),f(n).source=p.join("string"==typeof t?t:"")),e!==c?(o?!a&&e[t]&&(i=!0):delete e[t],i?e[t]=n:u(e,t,n)):i?e[t]=n:l(t,n)})(Function.prototype,"toString",function(){return"function"==typeof this&&i(this).source||r(this)})},function(e,t,n){var r,o,i,a,c,u,s,l,f=n(74),p=n(7),d=n(17),h=n(22),g=n(9),m=n(48),y=n(30),v=p.WeakMap;s=f?(r=new v,o=r.get,i=r.has,a=r.set,c=function(e,t){return a.call(r,e,t),t},u=function(e){return o.call(r,e)||{}},function(e){return i.call(r,e)}):(y[l=m("state")]=!0,c=function(e,t){return h(e,l,t),t},u=function(e){return g(e,l)?e[l]:{}},function(e){return g(e,l)}),e.exports={set:c,get:u,has:s,enforce:function(e){return s(e)?u(e):c(e,{})},getterFor:function(n){return function(e){var t;if(!d(e)||(t=u(e)).type!==n)throw TypeError("Incompatible receiver, "+n+" required");return t}}}},function(e,t,n){var r=n(7),o=n(46),i=r.WeakMap;e.exports="function"==typeof i&&/native code/.test(o(i))},function(e,t){e.exports=!1},function(e,t,n){var c=n(9),u=n(77),s=n(38),l=n(23);e.exports=function(e,t){for(var n=u(t),r=l.f,o=s.f,i=0;i<n.length;i++){var a=n[i];c(e,a)||r(e,a,o(t,a))}}},function(e,t,n){var r=n(51),o=n(79),i=n(82),a=n(24);e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(a(e)),n=i.f;return n?t.concat(n(e)):t}},function(e,t,n){var r=n(7);e.exports=r},function(e,t,n){var r=n(52),o=n(31).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},function(e,t,n){function r(c){return function(e,t,n){var r,o=u(e),i=s(o.length),a=l(n,i);if(c&&t!=t){for(;a<i;)if((r=o[a++])!=r)return!0}else for(;a<i;a++)if((c||a in o)&&o[a]===t)return c||a||0;return!c&&-1}}var u=n(28),s=n(53),l=n(81);e.exports={includes:r(!0),indexOf:r(!1)}},function(e,t,n){var r=n(54),o=Math.max,i=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):i(n,t)}},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t,n){function r(e,t){var n=c[a(e)];return n==s||n!=u&&("function"==typeof t?o(t):!!t)}var o=n(13),i=/#|\.prototype\./,a=r.normalize=function(e){return String(e).replace(i,".").toLowerCase()},c=r.data={},u=r.NATIVE="N",s=r.POLYFILL="P";e.exports=r},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},function(e,t,n){var r=n(42);e.exports=function(e){return Object(r(e))}},function(e,t,n){var r=n(17),o=n(87),i=n(56)("species");e.exports=function(e,t){var n;return o(e)&&("function"==typeof(n=e.constructor)&&(n===Array||o(n.prototype))||r(n)&&null===(n=n[i]))&&(n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},function(e,t,n){var r=n(41);e.exports=Array.isArray||function(e){return"Array"==r(e)}},function(e,t,n){var r=n(57);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(e,t,n){function r(){}function o(e){return"<script>"+e+"</"+h+">"}var i,a=n(24),c=n(90),u=n(31),s=n(30),l=n(92),f=n(45),p=n(48),d="prototype",h="script",g=p("IE_PROTO"),m=function(){try{i=document.domain&&new ActiveXObject("htmlfile")}catch(e){}var e,t;m=i?function(e){e.write(o("")),e.close();var t=e.parentWindow.Object;return e=null,t}(i):((t=f("iframe")).style.display="none",l.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(o("document.F=Object")),e.close(),e.F);for(var n=u.length;n--;)delete m[d][u[n]];return m()};s[g]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(r[d]=a(e),n=new r,r[d]=null,n[g]=e):n=m(),void 0===t?n:c(n,t)}},function(e,t,n){var r=n(12),a=n(23),c=n(24),u=n(91);e.exports=r?Object.defineProperties:function(e,t){c(e);for(var n,r=u(t),o=r.length,i=0;i<o;)a.f(e,n=r[i++],t[n]);return e}},function(e,t,n){var r=n(52),o=n(31);e.exports=Object.keys||function(e){return r(e,o)}},function(e,t,n){var r=n(51);e.exports=r("document","documentElement")},function(e,t,n){},function(e,t,n){n(95);var r=n(64);e.exports=r("Array","findIndex")},function(e,t,n){"use strict";var r=n(60),o=n(61).findIndex,i=n(62),a=n(63),c="findIndex",u=!0,s=a(c);c in[]&&Array(1)[c](function(){u=!1}),r({target:"Array",proto:!0,forced:u||!s},{findIndex:function(e,t){return o(this,e,1<arguments.length?t:void 0)}}),i(c)},function(e,t,n){},,,function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return me}),n.d(t,"ChoicesGuide",function(){return me}),n.d(t,"ChoicesGuideResult",function(){return Pe});n(6),n(104),n(70);var r=n(0),o=n.n(r),i=n(3),a=n.n(i),c=(n(107),n(1)),u=n.n(c),s=n(2),l=n(4),v=n(5);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=g(i);return t=a?(e=g(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==b(r)&&"function"!=typeof r?h(n):r}}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(o,l["a"]);var e,t,n,r=d(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=r.call(this,e)).config.aspectRatio=t.config.aspectRatio||"16x9",t.questionId=e.data.id,t.answerDimensions=e.answerDimensions||1,t.onLiveUpdates=t.config.liveUpdatesFunction,t.state={value:50,isAnswered:!1},t.onChangeHandler=t.onChangeHandler.bind(h(t)),t}return e=o,(t=[{key:"onChangeHandler",value:function(e){var t=this,n={value:e,isAnswered:!0,error:void 0};this.setState(n,function(){t.liveUpdates()})}},{key:"isValid",value:function(){return!(void 0===(this.props.data||{}).value&&!this.state.isAnswered)||(this.setState({error:"Je hebt nog geen keuze gemaakt"}),!1)}},{key:"getAnswer",value:function(){if(this.state.isAnswered){var e;this.props.data;return"number"==typeof this.state.value||"string"==typeof this.state.value?(e={x:this.state.value},1<this.answerDimensions&&(e.y=this.state.value),2<this.answerDimensions&&(e.z=this.state.value)):(e={x:this.state.value.x},1<this.answerDimensions&&(e.y=this.state.value.y),2<this.answerDimensions&&(e.z=this.state.value.z)),e}}},{key:"liveUpdates",value:function(){this.onLiveUpdates&&this.onLiveUpdates()}},{key:"showLightbox",value:function(t){var e=[{src:this.questionImageA.src},{src:this.questionImageB.src}],n=e.findIndex(function(e){return e.src==t.src}),r=new window.CustomEvent("osc-show-light-box",{detail:{images:e,startIndex:n,aspectRatio:this.config.aspectRatio}});document.dispatchEvent(r)}},{key:"render",value:function(){var o=this,i=this,a=i.props.data||{},e=!1;i.state.error&&(e=!0);var t=i.state.isAnswered,n="object"==b(a.value)?a.value.x:void 0!==a.value?a.value:"not defined";"not defined"===n?n=this.state.value:t=!0;var r,c=null,u=a.images;u&&(Array.isArray(u)||(u=[u]),r=u[0],c=React.createElement("div",{className:"osc-question-image-container osc-question-image-aspect-".concat(i.config.aspectRatio)},React.createElement("div",{className:"osc-question-image-aspect-container"},React.createElement("img",{className:"osc-question-image",src:r.src}))));var s=React.createElement("div",{className:"osc-question-description"},React.createElement("div",{className:"osc-question-description-text",dangerouslySetInnerHTML:{__html:a.description}})),l=null;switch(a.type){case"continuous":l=React.createElement("div",{className:"osc-question-selector"},React.createElement(v.a.Slider,{min:"0",max:"100",step:"1",value:n,className:"osc-question-selector-slider",config:{},touched:t,onChange:function(e){return i.onChangeHandler(e)},ref:function(e){return i.selector=e}}),React.createElement("div",{className:"osc-question-selector-minlabel",dangerouslySetInnerHTML:{__html:a.minLabel}}),React.createElement("div",{className:"osc-question-selector-maxlabel",dangerouslySetInnerHTML:{__html:a.maxLabel}}));break;case"a-to-b":var f=a.values&&a.values.A&&a.values.A.label||"A",p=a.values&&a.values.B&&a.values.B.label||"B",d=a.values&&a.values.A&&a.values.A.questionText,h=a.values&&a.values.B&&a.values.B.questionText;d&&h&&(s=React.createElement("div",{className:"osc-question-description"},React.createElement("div",{className:"osc-question-description-text",dangerouslySetInnerHTML:{__html:a.description}}),React.createElement("div",{className:"osc-question-description-text"},React.createElement("div",{className:"osc-question-description-label"},f),React.createElement("div",{className:"osc-question-description-labeled-text"},d)),React.createElement("div",{className:"osc-question-description-text"},React.createElement("div",{className:"osc-question-description-label"},p),React.createElement("div",{className:"osc-question-description-labeled-text"},h))));var g=a.values&&a.values.A&&a.values.A.questionImage,m=a.values&&a.values.B&&a.values.B.questionImage;g&&m&&(s=React.createElement("div",{className:"osc-question-description"},React.createElement("div",{className:"osc-question-description-text",dangerouslySetInnerHTML:{__html:a.description}}),React.createElement("div",{className:"osc-question-description-image-container osc-question-description-image-container-a"},React.createElement("div",{className:"osc-question-description-label osc-question-description-label-a"},f),React.createElement("div",{className:"osc-question-image-container osc-question-image-aspect-".concat(i.config.aspectRatio)},React.createElement("div",{className:"osc-question-image-aspect-container"},React.createElement("img",{className:"osc-question-description-image",src:g.src,style:{cursor:"pointer"},onClick:function(){return i.showLightbox(i.questionImageA)},ref:function(e){return i.questionImageA=e}})))),React.createElement("div",{className:"osc-question-description-image-container osc-question-description-image-container-b"},React.createElement("div",{className:"osc-question-description-label osc-question-description-label-b"},p),React.createElement("div",{className:"osc-question-image-container osc-question-image-aspect-".concat(i.config.aspectRatio)},React.createElement("div",{className:"osc-question-image-aspect-container"},React.createElement("img",{className:"osc-question-description-image",src:m.src,style:{cursor:"pointer"},onClick:function(){return i.showLightbox(i.questionImageB)},ref:function(e){return i.questionImageB=e}})))))),l=React.createElement("div",{className:"osc-question-selector"},React.createElement("div",{className:"osc-question-selector-label-a"},f),React.createElement("div",{className:"osc-question-selector-label-b"},p),React.createElement(v.a.Slider,{min:"0",max:"100",step:"1",value:n,className:"osc-question-selector-slider",config:{},touched:t,onChange:function(e){return i.onChangeHandler(e)},ref:function(e){return i.selector=e}}),React.createElement("div",{className:"osc-question-selector-minlabel",dangerouslySetInnerHTML:{__html:a.minLabel}}),React.createElement("div",{className:"osc-question-selector-maxlabel",dangerouslySetInnerHTML:{__html:a.maxLabel}}));break;case"enum-radio":l=React.createElement("div",{className:"osc-question-selector"},a.values&&a.values.map(function(t,e){var n=parseInt(1e6*Math.random()),r=!1;"object"==b(a.value)?(r=!0,Object.keys(a.value).forEach(function(e){a.value[e]!==t.value[e]&&(r=!1)})):a.value===t.value&&(r=!0);"undefined"!=a.value?a.value:o.state.value;return React.createElement("div",{key:"div-value-".concat(n),className:"osc-radio-container"},React.createElement("div",{className:"osc-radio-input".concat(r?" osc-radio-input-checked":"")},React.createElement("input",{name:"enum-radio-".concat(a.id),type:"radio",onChange:function(){return i.onChangeHandler(t.value)},key:"button-value-".concat(n)})),React.createElement("div",{className:"osc-radio-text"},t.text))}));break;case"enum-buttons":l=React.createElement("div",{className:"osc-question-selector"},a.values&&a.values.map(function(e,t){return React.createElement("button",{onClick:function(){return i.onChangeHandler(e.value)},key:"button-value-".concat(e.value)},e.text)}));break;default:l=React.createElement("div",null,"Type ",a.type," is (nog) niet geimplementeerd.")}var y=null;return e&&(y=React.createElement("div",{className:"osc-error-text"},i.state.error)),React.createElement("div",{id:i.props.config.divId,className:"osc-question osc-question-".concat(a.type).concat(e?" osc-error":"")},c,React.createElement("div",{className:"osc-question-content",id:i.props.config.divId+"-content"},React.createElement("h3",{className:"osc-question-title"}," ",a.title),s,l,y))}}])&&f(e.prototype,t),n&&f(e,n),o}();function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function E(o){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?w(Object(i),!0).forEach(function(e){var t,n,r;t=o,r=i[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):w(Object(i)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(i,e))})}return o}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=C(i);return t=a?(e=C(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==y(r)&&"function"!=typeof r?T(n):r}}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var R=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(o,l["a"]);var e,t,n,r=S(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=r.call(this,e)).noOfQuestionsToShow=t.config.noOfQuestionsToShow||1,t.onLiveUpdates=t.config.liveUpdatesFunction,t.questionElements=[],t.state={currentQuestion:0,values:{}},t.liveUpdates=t.liveUpdates.bind(T(t)),t}return e=o,(t=[{key:"componentDidMount",value:function(){}},{key:"isValid",value:function(){var n=this,r=!0,e=n.props.data.questions.slice(n.state.currentQuestion,n.state.currentQuestion+n.noOfQuestionsToShow),o=!1;return e.forEach(function(e,t){n.questionElements[t].isValid()||(o||setTimeout(function(){document.querySelector("#".concat(n.questionElements[t].config.divId,"-content")).scrollIntoView({behavior:"smooth"})},250),r=!(o=!0))}),r}},{key:"getAnswers",value:function(){var r=this,o=u()({},this.props.data&&this.props.data.values,r.state.values);return r.props.data&&r.props.data.questions.forEach(function(t,e){var n=r.questionElements.find(function(e){return e&&e.questionId==t.id});n&&void 0!==n.getAnswer()&&(o[t.id]=n.getAnswer())}),r.setState({values:o}),o}},{key:"gotoNextQuestion",value:function(){if(this.isValid()){var e=this.state.currentQuestion+this.noOfQuestionsToShow;return e>=this.props.data.questions.length?(e=0,this.setState({currentQuestion:e}),{isReady:!0,currentQuestion:e}):(this.setState({currentQuestion:e}),{isReady:!1,currentQuestion:e})}}},{key:"gotoPreviousQuestion",value:function(){var e=this.state.currentQuestion-this.noOfQuestionsToShow;return e<0?(e=0,this.setState({currentQuestion:e}),{isBeginning:!0,currentQuestion:e}):(this.setState({currentQuestion:e}),{isBeginning:!1,currentQuestion:e})}},{key:"liveUpdates",value:function(){this.onLiveUpdates&&this.onLiveUpdates()}},{key:"render",value:function(){var n=this,r=n.props.data||{questions:[]},e=r.questions.slice(n.state.currentQuestion,n.state.currentQuestion+n.noOfQuestionsToShow),o=u()({},this.props.data&&this.props.data.values,n.state.values),t=React.createElement("div",{className:"osc-questions"},e.map(function(e,t){return React.createElement(m,{config:{liveUpdatesFunction:n.liveUpdates,divId:"osc-question-".concat(e.id),aspectRatio:n.config.aspectRatio},data:E(E({},e),{},{value:o[e.id]}),answerDimensions:r.answerDimensions,key:"question-".concat(e.id),ref:function(e){n.questionElements[t]=e}})}));return React.createElement("div",{id:this.id,className:"osc-question-group"},React.createElement("h3",{className:"osc-question-group-title"},r.title),React.createElement("div",{className:"osc-question-group-description",dangerouslySetInnerHTML:{__html:r.description}}),t)}}])&&O(e.prototype,t),n&&O(e,n),o}();function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=A(i);return t=a?(e=A(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==x(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var j=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(o,l["a"]);var e,t,n,r=I(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=r.call(this,e)).defaultConfig={plane:{topleft:{title:"metrostad",bgImage:{src:"https://image-server.staging.openstadsdeel.nl/image/719fd5b8dc6953db41b187723d3fc5c9"}},topright:{title:"mozaïekstad",bgImage:{src:"https://image-server.staging.openstadsdeel.nl/image/01484fc7716420635beab879658e00b1"}},bottomleft:{title:"museumstad",bgImage:{src:"https://image-server.staging.openstadsdeel.nl/image/85ef5669d9a5db2f0ec2adb6310620be"}},bottomright:{title:"dorpenstad",bgImage:{src:"https://image-server.staging.openstadsdeel.nl/image/befd03bc1a415bd767f9912e3dcd18a8"}}}},t.config=u.a.recursive(t.defaultConfig,t.config,e.config||{}),t.state={},t}return e=o,(t=[{key:"getPreferedChoice",value:function(e){if(e){var t,n=document.querySelector("#".concat(this.divId))&&document.querySelector("#".concat(this.divId)).offsetWidth/2||90,r=n+(void 0===e.y?0:e.y)*(n/100),o=n+(void 0===e.x?0:e.x)*(n/100);return r<n&&o<n&&(t=this.config.plane.topleft),r<n&&n<o&&(t=this.config.plane.topright),n<r&&o<n&&(t=this.config.plane.bottomleft),n<r&&n<o&&(t=this.config.plane.bottomright),t}}},{key:"getTitle",value:function(e,t){if(e){var n=this.getPreferedChoice(e),r=t?n&&n.title:n?"Je gaat nu richting "+(n&&n.title):"Je staat precies tussen meerdere scenario's in";return r}}},{key:"render",value:function(){var e,t=this.props.score,n=document.querySelector("#".concat(this.divId))&&document.querySelector("#".concat(this.divId)).offsetWidth/2||90,r=n+(void 0===t.y?0:t.y)*(n/100),o=n+(void 0===t.x?0:t.x)*(n/100),i=null,a=this.props.data&&this.props.data.images;return a&&(Array.isArray(a)||(a=[a]),e=a[0],i=React.createElement("img",{className:"osc-choice-plane-background-image",src:e.src,style:{width:2*n,height:2*n}})),React.createElement("div",{id:this.divId,className:"osc-choice-plane-plane",ref:function(e){self.planePlaneElement=e}},i,React.createElement("div",{className:"osc-point",style:{top:r,left:o}}),React.createElement("div",{style:{clear:"both"}}))}}])&&P(e.prototype,t),n&&P(e,n),o}();function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function D(o){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?B(Object(i),!0).forEach(function(e){var t,n,r;t=o,r=i[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):B(Object(i)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(i,e))})}return o}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function F(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=q(i);return t=a?(e=q(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==L(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function q(e){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var U=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(o,l["a"]);var e,t,n,r=F(o);function o(e){var t;switch(!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=r.call(this,e)).defaultConfig={type:"default",withPercentage:!1,minLabel:null,maxLabel:null,barColor:{default:"#bed200",min:"#ff9100",max:"#bed200"}},t.config=u.a.recursive("clone",t.defaultConfig,t.config,e.config||{}),null==t.config.barColor.min&&(t.config.barColor.min="#ff9100"),null==t.config.barColor.max&&(t.config.barColor.max="#bed200"),t.answerDimensions=e.answerDimensions||1,e.answerDimensions){case 2:t.dimensions=["x","y"];break;case 3:t.dimensions=["x","y","z"];break;default:t.dimensions=["x"]}return t.answers=e.data&&e.data.answers||{},Object.keys(t.answers).forEach(function(e){t.answers[e]==parseInt(t.answers[e])&&(t.answers[e]={x:parseInt(t.answers[e])})}),t.state={score:t.props.score||0},t}return e=o,(t=[{key:"getScore",value:function(){return this.planeElement?0:this.state.score}},{key:"getTitle",value:function(e,t){return this.planeElement?this.planeElement.getTitle(e,t):this.props.data&&this.props.data.title}},{key:"calculateScore",value:function(e){var n=this,a=this.answers,t=e||{},c=(Object.keys(a).length,{});Object.keys(a).forEach(function(e){var r=a[e]||{},o=t[e]||(n.config.startWithAllQuestionsAnswered?{x:50,y:50,z:50}:{}),i=c[e]={};n.dimensions.forEach(function(e){if(void 0!==r[e]&&void 0!==o[e]){var t=void 0!==r[e]?r[e]:[0,100];if(Array.isArray(t)){var n=t[1]-t[0];return i[e]=t[0]+o[e]/100*n}return t==parseInt(t)?i[e]=100-Math.abs(parseInt(t)-o[e]):i[e]=o[e]}})});var r={};return Object.keys(a).forEach(function(t){n.dimensions.forEach(function(e){r[e]=r[e]||{score:[],noOfAnswers:0},void 0!==c[t][e]&&r[e].score.push(c[t][e]),a[t]&&void 0!==a[t][e]&&r[e].noOfAnswers++})}),Object.keys(r).forEach(function(e){r[e]=r[e].score.length?r[e].score.reduce(function(e,t){return e+t})/r[e].noOfAnswers:void 0}),this.setState({score:r}),r}},{key:"render",value:function(){var t=this,e=t.state.score,n=null;switch(this.config.type){case"plane":n=React.createElement(j,{config:D({},t.config),data:D({},t.props.data),score:e,ref:function(e){t.planeElement=e}});break;case"minus-to-plus-100":var r=null,o=parseInt(2*(e.x-50));t.config.withPercentage&&(r=React.createElement("div",{className:"osc-percentage"},o,"%"));var i=t.config.barColor.max.match(/#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/i),a=t.config.barColor.min.match(/#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/i),c=parseInt(a[1],16)+(parseInt(i[1],16)-parseInt(a[1],16))*(e.x/100),u=parseInt(a[2],16)+(parseInt(i[2],16)-parseInt(a[2],16))*(e.x/100),s=parseInt(a[3],16)+(parseInt(i[3],16)-parseInt(a[3],16))*(e.x/100),l={backgroundColor:"rgb(".concat(c,",").concat(u,",").concat(s,")")};0<=o&&(l.width=o/2+"%",l.left="50%",l.right="auto"),o<0&&(l.width=-o/2+"%",l.left="auto",l.right="50%"),n=React.createElement("div",{className:"osc-choice-default"},React.createElement("h4",null,t.props.data.title),React.createElement("div",{className:"osc-choice-bar osc-from-center".concat(t.config.withPercentage?" osc-with-percentage":"")},React.createElement("div",{className:"osc-choice-bar-progress",style:l})),r);break;case"zero-to-100":default:var f,p=null;t.config.withPercentage&&(f=parseInt(e.x),p=React.createElement("div",{className:"osc-percentage"},f,"%")),l={width:(e.x||0)+"%",backgroundColor:t.config.barColor.default},n=React.createElement("div",{className:"osc-choice-default"},React.createElement("h4",null,t.props.data.title),React.createElement("div",{className:"osc-choice-bar".concat(t.config.withPercentage?" osc-with-percentage":"")},React.createElement("div",{className:"osc-choice-bar-mask"}),React.createElement("div",{className:"osc-choice-bar-progress",style:l})),p)}var d=null;return(t.config.minLabel||t.config.maxLabel)&&(d=React.createElement("div",{className:"osc-minmax-labels"},React.createElement("div",{className:"osc-min-label"},t.config.minLabel),React.createElement("div",{className:"osc-max-label"},t.config.maxLabel))),React.createElement("li",{className:"osc-choice"},n,d)}}])&&N(e.prototype,t),n&&N(e,n),o}();function G(e){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function H(o){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?V(Object(i),!0).forEach(function(e){var t,n,r;t=o,r=i[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):V(Object(i)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(i,e))})}return o}function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function K(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=Q(i);return t=a?(e=Q(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==G(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function Q(e){return(Q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var J=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(o,l["a"]);var e,t,n,r=K(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=r.call(this,e)).defaultConfig={type:"default",sticky:null,withPercentage:!1,minLabel:null,maxLabel:null},t.config=u.a.recursive(t.defaultConfig,t.config,e.config||{}),t.choiceElements=[],t.state={title:"Je hebt nog geen keuze gemaakt",scores:e.scores},t}return e=o,(t=[{key:"componentDidMount",value:function(){}},{key:"calculateScores",value:function(t){var n={};return this.choiceElements.forEach(function(e){n[e.config.divId]=e.calculateScore(t)}),this.setState({scores:n}),n}},{key:"getPreferedChoice",value:function(){var n=this.state.scores;switch(this.config.type){case"plane":return this.choiceElements[0];default:var t=Object.keys(n).sort(function(e,t){return n[t].x-n[e].x})[0];return this.choiceElements.find(function(e){return e&&e.config.divId==t})}}},{key:"render",value:function(){var r=this;return React.createElement("ul",{className:"osc-choices"},Object.keys(r.props.choices).map(function(e,t){var n=r.props.choices[e];return React.createElement(U,{config:H({divId:"choice-".concat(n.id)},r.config),data:n,score:r.props.scores&&r.props.scores["choice-".concat(n.id)],answerDimensions:r.props.answerDimensions,key:"choice-".concat(n.id),ref:function(e){r.choiceElements[t]=e}})}))}}])&&W(e.prototype,t),n&&W(e,n),o}();function X(e){return(X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Y(e,t){return(Y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function $(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=te(i);return t=a?(e=te(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==X(r)&&"function"!=typeof r?ee(n):r}}function ee(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function te(e){return(te=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var ne=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Y(e,t)}(o,l["a"]);var e,t,n,r=$(o);function o(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var n=ee(t=r.call(this,e));return n.id=e.id||"osc-choices-guide-".concat(parseInt(1e6*Math.random())),n.defaultConfig={siteId:null,loginUrl:null,noOfQuestionsToShow:1,api:{url:null}},n.config=u.a.recursive(n.defaultConfig,n.config,e.config||{}),n.state={choicesGuideId:n.props.data.choicesGuideId,currentTarget:{},busy:!1},n.onFinished=n.props.onFinished,t}return e=o,(t=[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(){var n=this,e="".concat(n.config.api&&n.config.api.url,"/api/site/").concat(n.config.siteId,"/choicesguide/").concat(n.config.choicesGuideId,"?includeChoices=1&includeQuestions=1"),t=s.a.api.getHeaders();fetch(e,{headers:t}).then(function(e){return e.json()}).then(function(e){var t={};t.choicesGuideId=e.id,t.title=e.title,t.description=e.description,t.images=e.images,t.choices=e.choices||[],t.questionGroups=e.questiongroups||[],t.busy=!1,n.setState(t,function(){n.setCurrentForm({what:"choices-guide"})})}).catch(function(e){console.log("Niet goed"),console.log(e)})}},{key:"handleFieldChange",value:function(t){var n=this.state.currentTarget;Object.keys(t).forEach(function(e){n[e]=t[e]}),this.setState({currentTarget:n})}},{key:"setCurrentForm",value:function(t){var e,n,r;switch(t.what){case"choices-guide":t.title=this.state.title,t.description=this.state.description,t.images=this.state.images?JSON.stringify(this.state.images):"";break;case"choice":n=t.questionGroupId?(e=this.state.questionGroups.find(function(e){return e.id==t.questionGroupId})||{}).choices&&e.choices.find(function(e){return e.id==t.choiceId})||{}:this.state.choices.find(function(e){return e.id==t.choicesId})||{},t.title=n.title,t.description=n.description,t.images=n.images?JSON.stringify(n.images):"",t.answers=n.answers?JSON.stringify(n.answers):"",t.seqnr=n.seqnr||0;break;case"question-group":e=this.state.questionGroups.find(function(e){return e.id==t.questionGroupId})||{},t.answerDimensions=e.answerDimensions,t.title=e.title,t.description=e.description,t.images=e.images?JSON.stringify(e.images):"",t.seqnr=e.seqnr||0;break;case"question":r=(e=this.state.questionGroups.find(function(e){return e.id==t.questionGroupId})||{}).questions&&e.questions.find(function(e){return e.id==t.questionId})||{},t.title=r.title,t.description=r.description,t.images=r.images?JSON.stringify(r.images):"",t.minLabel=r.minLabel,t.maxLabel=r.maxLabel,t.type=r.type,t.values=r.values?JSON.stringify(r.values):"",t.seqnr=r.seqnr||0}this.setState({currentTarget:t})}},{key:"submitForm",value:function(){var o=this;o.setState({busy:!0},function(){var e,t,n;if(0,!o.config.user||!o.config.user.role||"admin"!=o.config.user.role)return alert("Je mag dit niet");switch(o.state.currentTarget.what){case"choices-guide":n=o.state.choicesGuideId,e="".concat(o.config.api&&o.config.api.url,"/api/site/").concat(o.config.siteId,"/choicesguide"),t={title:o.state.currentTarget.title,description:o.state.currentTarget.description,images:o.state.currentTarget.images};break;case"choice":n=o.state.currentTarget.choiceId,e=o.state.currentTarget.questionGroupId?"".concat(o.config.api&&o.config.api.url,"/api/site/").concat(o.config.siteId,"/choicesguide/").concat(o.state.choicesGuideId,"/questiongroup/").concat(o.state.currentTarget.questionGroupId,"/choice"):"".concat(o.config.api&&o.config.api.url,"/api/site/").concat(o.config.siteId,"/choicesguide/").concat(o.state.choicesGuideId,"/choice"),t={title:o.state.currentTarget.title,description:o.state.currentTarget.description,images:o.state.currentTarget.images,answers:o.state.currentTarget.answers?JSON.parse(o.state.currentTarget.answers):"",seqnr:o.state.currentTarget.seqnr};break;case"question-group":n=o.state.currentTarget.questionGroupId,e="".concat(o.config.api&&o.config.api.url,"/api/site/").concat(o.config.siteId,"/choicesguide/").concat(o.state.choicesGuideId,"/questiongroup"),t={answerDimensions:o.state.currentTarget.answerDimensions,title:o.state.currentTarget.title,description:o.state.currentTarget.description,images:o.state.currentTarget.images,seqnr:o.state.currentTarget.seqnr};break;case"question":n=o.state.currentTarget.questionId,e="".concat(o.config.api&&o.config.api.url,"/api/site/").concat(o.config.siteId,"/choicesguide/").concat(o.state.choicesGuideId,"/questiongroup/").concat(o.state.currentTarget.questionGroupId,"/question"),t={title:o.state.currentTarget.title,description:o.state.currentTarget.description,images:o.state.currentTarget.images,minLabel:o.state.currentTarget.minLabel,maxLabel:o.state.currentTarget.maxLabel,type:o.state.currentTarget.type,values:o.state.currentTarget.values?JSON.parse(o.state.currentTarget.values):"",seqnr:o.state.currentTarget.seqnr}}e+=n?"/".concat(n):"";var r=s.a.api.getHeaders(o.config);fetch(e,{method:n?"PUT":"POST",headers:r,body:JSON.stringify(t)}).then(function(e){if(e.ok)return e.json();throw e.text()}).then(function(e){o.fetchData()}).catch(function(e){e.then(function(e){return console.log(e)}),o.setState({busy:!1})})})}},{key:"deleteElement",value:function(e){var t,n=e.what,r=e.questionGroupId,o=e.choiceId,i=e.questionId,a=e.title,c=this;if(confirm("Je gaat "+n+" "+a+" verwijderen. Weet je het zeker?")){switch(n){case"question-group":t="".concat(c.config.api&&c.config.api.url,"/api/site/").concat(c.config.siteId,"/choicesguide/").concat(c.state.choicesGuideId,"/questiongroup/").concat(r);break;case"choice":t="".concat(c.config.api&&c.config.api.url,"/api/site/").concat(c.config.siteId,"/choicesguide/").concat(c.state.choicesGuideId,"/questiongroup/").concat(r,"/choice/").concat(o);break;case"question":t="".concat(c.config.api&&c.config.api.url,"/api/site/").concat(c.config.siteId,"/choicesguide/").concat(c.state.choicesGuideId,"/questiongroup/").concat(r,"/question/").concat(i)}var u=s.a.api.getHeaders(c.config);fetch(t,{method:"DELETE",headers:u}).then(function(e){if(e.ok)return e.json();throw e.text()}).then(function(e){c.fetchData()}).catch(function(e){e.then(function(e){return console.log(e)}),c.setState({busy:!1})})}}},{key:"render",value:function(){var e,t,n,a=this,r=null,o=null,i=null,c=React.createElement("button",{onClick:function(){a.setCurrentForm({what:"choices-guide"})}},"Terug"),u=React.createElement("button",{onClick:function(){return a.submitForm()}},"Submit");switch(a.state.currentTarget.what){case"choices-guide":r="Bewerk keuzewijzer",o=React.createElement("div",{className:"openstad-form"},React.createElement("h3",null,"Titel"),React.createElement(v.a.InputWithCounter,{key:"x1",config:{inputType:"input",minLength:1,maxLength:1e3},value:a.state.currentTarget.title,onChange:function(e){return a.handleFieldChange({title:e.value})},ref:function(e){a.titleField=e}}),React.createElement("h3",null,"Beschrijving"),React.createElement(v.a.InputWithCounter,{key:"x2",config:{inputType:"textarea",minLength:1,maxLength:1e3},value:a.state.currentTarget.description,onChange:function(e){return a.handleFieldChange({description:e.value})},ref:function(e){return a.descriptionField=e}}),React.createElement("h3",null,"Afbeeldingen"),React.createElement(v.a.Textarea,{key:"i1",config:{},value:a.state.currentTarget.images,onChange:function(e){return a.handleFieldChange({images:e.value})},ref:function(e){return a.imagesField=e}})),i=React.createElement("div",{className:"openstad-form"},React.createElement("h4",null,"Vraaggroepen"),Object.keys(a.state.questionGroups).map(function(e,t){var n,r=a.state.questionGroups[e],o=React.createElement("ul",null,Object.keys(r.questions).map(function(e,t){var n=r.questions[e];return React.createElement("li",null,"(",n.id,") - ",n.title," - ",n.seqnr,"-",React.createElement("a",{href:"#",onClick:function(){return a.setCurrentForm({what:"question",questionGroupId:r.id,questionId:n.id})}},"Bewerk"),"-",React.createElement("a",{href:"#",onClick:function(){return a.deleteElement({what:"question",questionGroupId:r.id,questionId:n.id,title:n.title})}},"Verwijder"))}),React.createElement("li",null,React.createElement("a",{href:"#",onClick:function(){return a.setCurrentForm({what:"question",questionGroupId:r.id})}},"Nieuwe vraag"))),i=React.createElement("ul",null,Object.keys(r.choices).map(function(e,t){var n=r.choices[e];return React.createElement("li",null,n.title," - ",n.seqnr,"- ",React.createElement("a",{href:"#",onClick:function(){return a.setCurrentForm({what:"choice",questionGroupId:r.id,choiceId:n.id})}},"Bewerk"),"- ",React.createElement("a",{href:"#",onClick:function(){return a.deleteElement({what:"choice",questionGroupId:r.id,choiceId:n.id,title:n.title})}},"Verwijder"))}),React.createElement("li",null,React.createElement("a",{href:"#",onClick:function(){return a.setCurrentForm({what:"choice",questionGroupId:r.id})}},"Nieuwe keuze")));return 0==Object.keys(r.choices).length&&0==Object.keys(r.questions).length&&(n=React.createElement("a",{href:"#",onClick:function(){return a.deleteElement({what:"question-group",questionGroupId:r.id,title:r.title})}},"Verwijder")),React.createElement("div",null,r.title," - ",r.seqnr,"- ",React.createElement("a",{href:"#",onClick:function(){return a.setCurrentForm({what:"question-group",questionGroupId:r.id})}},"Bewerk"),"- ",n,o,i)}),React.createElement("a",{href:"#",onClick:function(){return a.setCurrentForm({what:"question-group"})}},"Nieuwe groep")),c=React.createElement("button",{onClick:function(){a.onFinished&&a.onFinished()}},"Terug");break;case"choice":r="Bewerk Keuze",o=React.createElement("div",null,React.createElement("h3",null,"Titel"),React.createElement(v.a.InputWithCounter,{config:{inputType:"input",minLength:1,maxLength:1e3},value:a.state.currentTarget.title,onChange:function(e){return a.handleFieldChange({title:e.value})},ref:function(e){return a.titleField=e}}),React.createElement("h3",null,"Beschrijving"),React.createElement(v.a.InputWithCounter,{config:{inputType:"textarea",minLength:1,maxLength:1e3},value:a.state.currentTarget.description,onChange:function(e){return a.handleFieldChange({description:e.value})},ref:function(e){return a.descriptionField=e}}),React.createElement("h3",null,"Afbeeldingen"),React.createElement(v.a.Textarea,{key:"i2",config:{},value:a.state.currentTarget.images,onChange:function(e){return a.handleFieldChange({images:e.value})},ref:function(e){return a.imagesField=e}}),React.createElement("h3",null,"Antwoorden"),React.createElement(v.a.Text,{config:{},value:a.state.currentTarget.answers,onChange:function(e){return a.handleFieldChange({answers:e.value})},ref:function(e){return a.answersField=e}}),React.createElement("h3",null,"Volgorde nummer"),React.createElement(v.a.Text,{config:{},value:a.state.currentTarget.seqnr,onChange:function(e){return a.handleFieldChange({seqnr:e.value})},ref:function(e){return a.seqnrField=e}}));break;case"question-group":r="Bewerk Vragengroep",o=React.createElement("div",{className:"openstad-form"},React.createElement("h3",null,"Titel"),React.createElement(v.a.InputWithCounter,{config:{inputType:"input",minLength:1,maxLength:1e3},value:a.state.currentTarget.title,onChange:function(e){return a.handleFieldChange({title:e.value})},ref:function(e){return a.titleField=e}}),React.createElement("h3",null,"Beschrijving"),React.createElement(v.a.InputWithCounter,{config:{inputType:"textarea",minLength:1,maxLength:1e3},value:a.state.currentTarget.description,onChange:function(e){return a.handleFieldChange({description:e.value})},ref:function(e){return a.descriptionField=e}}),React.createElement("h3",null,"Afbeeldingen"),React.createElement(v.a.Textarea,{key:"i3",config:{},value:a.state.currentTarget.images,onChange:function(e){return a.handleFieldChange({images:e.value})},ref:function(e){return a.imagesField=e}}),React.createElement("h3",null,"Aantal dimensies in antwoorden"),React.createElement("select",{key:"dezemoetnogweg2".concat(a.state.currentTarget.questionGroupId),value:a.state.currentTarget.answerDimensions,onChange:function(){return a.handleFieldChange({answerDimensions:a.answerDimensionsField.value})},ref:function(e){return a.answerDimensionsField=e}},React.createElement("option",{value:"1"},"1"),React.createElement("option",{value:"2"},"2"),React.createElement("option",{value:"3"},"3")),React.createElement("h3",null,"Volgorde nummer"),React.createElement(v.a.Text,{config:{},value:a.state.currentTarget.seqnr,onChange:function(e){return a.handleFieldChange({seqnr:e.value})},ref:function(e){return a.seqnrField=e}}));break;case"question":r="Bewerk Vraag ".concat(a.state.currentTarget.questionId),o=React.createElement("div",{className:"openstad-form"},React.createElement("h3",null,"Titel"),React.createElement(v.a.InputWithCounter,{config:{inputType:"input",minLength:1,maxLength:1e3},value:a.state.currentTarget.title,onChange:function(e){return a.handleFieldChange({title:e.value})},ref:function(e){return a.titleField=e}}),React.createElement("h3",null,"Beschrijving"),React.createElement(v.a.InputWithCounter,{config:{inputType:"textarea",minLength:1,maxLength:1e3},value:a.state.currentTarget.description,onChange:function(e){return a.handleFieldChange({description:e.value})},ref:function(e){return a.descriptionField=e}}),React.createElement("h3",null,"Afbeeldingen"),React.createElement(v.a.Textarea,{key:"i4",config:{},value:a.state.currentTarget.images,onChange:function(e){return a.handleFieldChange({images:e.value})},ref:function(e){return a.imagesField=e}}),React.createElement("h3",null,"Label minimale waarde"),React.createElement(v.a.InputWithCounter,{config:{inputType:"input",minLength:1,maxLength:1e3},value:a.state.currentTarget.minLabel,onChange:function(e){return a.handleFieldChange({minLabel:e.value})},ref:function(e){return a.minLabelField=e}}),React.createElement("h3",null,"Label maximale waarde"),React.createElement(v.a.InputWithCounter,{config:(n=1e3,(t="maxLength")in(e={inputType:"input",maxLength:1})?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e),value:a.state.currentTarget.maxLabel,onChange:function(e){return a.handleFieldChange({maxLabel:e.value})},ref:function(e){return a.maxLabelField=e}}),React.createElement("h3",null,"Type"),React.createElement("select",{key:"dezemoetnogweg".concat(a.state.currentTarget.questionGroupId),value:a.state.currentTarget.type,onChange:function(){return a.handleFieldChange({type:a.typeField.value})},ref:function(e){return a.typeField=e}},React.createElement("option",{value:"continuous"},"continue"),React.createElement("option",{value:"a-to-b"},"van a naar b"),React.createElement("option",{value:"enum-buttons"},"multiple choice - buttons"),React.createElement("option",{value:"enum-radio"},"multiple choice - radio")),React.createElement("h3",null,"Waarden"),React.createElement(v.a.Textarea,{config:{},value:a.state.currentTarget.values,onChange:function(e){return a.handleFieldChange({values:e.value})},ref:function(e){return a.valuesField=e}}),React.createElement("h3",null,"Volgorde nummer"),React.createElement(v.a.Text,{config:{},value:a.state.currentTarget.seqnr,onChange:function(e){return a.handleFieldChange({seqnr:e.value})},ref:function(e){return a.seqnrField=e}}));break;default:c=React.createElement("button",{onClick:function(){a.onFinished&&a.onFinished()}},"Terug"),u=null}return React.createElement("div",{id:this.divId,className:"osc-form".concat(this.state.busy?" osc-busy":"")},React.createElement("h2",null,r),o,React.createElement("br",null),React.createElement("br",null),c,u,i)}}])&&Z(e.prototype,t),n&&Z(e,n),o}(),re=n(25),oe=n(35);function ie(e){var t=e.config,n="".concat(t.api&&t.api.url,"/api/site/").concat(t.siteId,"/choicesguide/").concat(t.choicesGuideId,"?includeChoices=1&includeQuestions=1"),r=s.a.api.getHeaders();return fetch(n,{headers:r}).then(function(e){return e.json()}).then(function(e){return{choicesGuideId:e.id,images:e.images,title:e.title,description:e.description,choices:e.choices||[],questionGroups:e.questiongroups||[],status:"active"}})}function ae(e){return(ae="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ce(e){return function(e){if(Array.isArray(e))return ue(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return ue(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ue(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ue(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function se(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function le(o){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?se(Object(i),!0).forEach(function(e){var t,n,r;t=o,r=i[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):se(Object(i)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(i,e))})}return o}function fe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function pe(e,t){return(pe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function de(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=ge(i);return t=a?(e=ge(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==ae(r)&&"function"!=typeof r?he(n):r}}function he(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ge(e){return(ge=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var me=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&pe(e,t)}(a,l["a"]);var e,t,n,i=de(a);function a(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);var n=he(t=i.call(this,e));n.id=e.id||"osc-choices-guide-".concat(parseInt(1e6*Math.random())),n.defaultConfig={siteId:null,loginUrl:null,noOfQuestionsToShow:1,api:{url:null},sticky:null,choices:{title:{noPreferenceYet:"Je hebt nog geen keuze gemaakt",preference:"<b>Jouw voorkeur:</b>{preferredChoice}",inBetween:"Je staat precies tussen meerdere voorkeuren in"},withPercentage:!1,minLabel:null,maxLabel:null}},n.config=u.a.recursive(n.defaultConfig,n.config,e.config||{}),!n.config.aspectRatio&&n.config.choices&&n.config.choices.type&&"plane"==n.config.choices.type&&(n.config.aspectRatio="10x7");var r=s.a.sessionStorage.get("osc-choices-guide.values")||{},o=s.a.sessionStorage.get("osc-choices-guide.scores")||{};return n.state={editMode:!1,title:"Loading....",questionGroups:[],choices:[],currentQuestionGroupIndex:void 0,currentQuestion:void 0,status:"init",values:r[t.config.choicesGuideId],scores:o[t.config.choicesGuideId]},n.liveUpdates=n.liveUpdates.bind(he(t)),n.hideEditForm=n.hideEditForm.bind(he(t)),t}return e=a,(t=[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(){var t=this;ie({config:t.config}).then(function(e){t.setState(e,function(){t.startGuide()})}).catch(function(e){console.log("Niet goed"),console.log(e)})}},{key:"startGuide",value:function(){var t=this,e={currentQuestionGroupIndex:0};t.setState(e,function(){t.liveUpdates();var e=new window.CustomEvent("osc-choices-guide-is-ready");document.dispatchEvent(e)})}},{key:"showEditForm",value:function(){this.setState({editMode:!0})}},{key:"hideEditForm",value:function(){var e=s.a.sessionStorage.get("osc-choices-guide.values")||{},t=s.a.sessionStorage.get("osc-choices-guide.scores")||{};this.setState({editMode:!1,title:"Loading....",questionGroups:[],choices:[],currentQuestionGroupIndex:void 0,status:"init",values:e[this.config.choicesGuideId],scores:t[this.config.choicesGuideId]},function(){this.fetchData()})}},{key:"gotoNextQuestion",value:function(){var e=this,t={};t.values=u()(e.state.values||{},e.questionGroupElement.getAnswers()),e.setState(t),e.choicesElement.calculateScores(t.values);var n=e.questionGroupElement.gotoNextQuestion(),r=n.isReady,o=n.currentQuestion;e.setState({currentQuestion:o},function(){r?e.gotoNextGroup():window.scrollTo(0,0)})}},{key:"gotoPreviousQuestion",value:function(){var e=this;if("result"==this.state.status)return this.gotoPreviousGroup();var t={};t.values=u()(this.state.values||{},this.questionGroupElement.getAnswers()),this.setState(t),this.choicesElement.calculateScores(t.values);var n=this.questionGroupElement.gotoPreviousQuestion(),r=n.isBeginning,o=n.currentQuestion;this.setState({currentQuestion:o},function(){r?e.gotoPreviousGroup():window.scrollTo(0,0)})}},{key:"gotoNextGroup",value:function(){var e=this,t=le({},this.state);t.currentQuestionGroupIndex<t.questionGroups.length-1?(t.values=u()(t.values||{},this.questionGroupElement.getAnswers()),t.currentQuestionGroupIndex++,this.setState(t,function(){e.liveUpdates(),window.scrollTo(0,0)})):this.gotoResult()}},{key:"gotoPreviousGroup",value:function(){var e=this,t={};t.currentQuestionGroupIndex=this.state.currentQuestionGroupIndex-1,"result"==this.state.status&&(t.currentQuestionGroupIndex=this.state.questionGroups.length-1,t.status="active"),this.setState(t,function(){e.liveUpdates(),window.scrollTo(0,0)})}},{key:"gotoResult",value:function(){document.location.href=this.config.afterUrl}},{key:"liveUpdates",value:function(){var n=this,r=u()(this.state.values||{},this.questionGroupElement.getAnswers()),o=this.choicesElement.calculateScores(r);this.setState({scores:o,firstAnswerGiven:0<Object.keys(r).length},function(){var e=s.a.sessionStorage.get("osc-choices-guide.values")||{};e[n.config.choicesGuideId]=r,s.a.sessionStorage.set("osc-choices-guide.values",e);var t=s.a.sessionStorage.get("osc-choices-guide.scores")||{};t[n.config.choicesGuideId]=o,s.a.sessionStorage.set("osc-choices-guide.scores",t)})}},{key:"render",value:function(){var e,t=this,n=this,r=n.state.choices,o=1;0<=n.state.currentQuestionGroupIndex&&(e=n.state.questionGroups[n.state.currentQuestionGroupIndex])&&(e.values=n.state.values||{},e&&e.choices&&(r=e.choices,o=e.answerDimensions));var i,a=null,c=n.state.images;c&&(Array.isArray(c)||(c=[c]),i=c[0],a=React.createElement("img",{className:"osc-image",src:i.src}));var u,s,l,f,p,d,h,g,m,y,v,b,w=null;return n.state.editMode?w=React.createElement("div",{className:"osc-choices-guide-content"},React.createElement(ne,{config:n.config,onFinished:n.hideEditForm,data:le({},n.state)})):"result"==n.state.status?alert("Hier had je niet moeten komen"):w="init"==n.state.status?React.createElement("div",{className:"osc-choices-guide-content"},React.createElement("div",{className:"osc-intro"},"Laden...")):(u=null,l="<b>Je hebt nog geen keuze gemaakt</b>",l=n.state.firstAnswerGiven&&n.choicesElement?(s=n.choicesElement.getPreferedChoice(),n.config.choices.title.preference.replace("{preferredChoice}",s&&s.getTitle(n.state.scores[s.config.divId])||l)):n.config.choices.title.noPreferenceYet,u=React.createElement("div",{id:"osc-choices-container-"+this.divId,className:"osc-choices-container osc-accordeon osc-closed".concat("hidden"==n.config.choices.type?" osc-hidden":""),ref:function(e){n.choicesAccordeon=e}},React.createElement("div",{onClick:function(){t.choicesAccordeon.className.match(" osc-closed")?t.choicesAccordeon.className=t.choicesAccordeon.className.replace(" osc-closed"," osc-open"):t.choicesAccordeon.className=t.choicesAccordeon.className.replace(" osc-open"," osc-closed")},className:"osc-accordeon-button",dangerouslySetInnerHTML:{__html:l}}),React.createElement("div",{className:"osc-accordeon-content"},React.createElement(J,{config:n.config.choices,choices:ce(r),scores:le({},n.state.scores),answerDimensions:o,firstAnswerGiven:!!n.state.firstAnswerGiven,ref:function(e){n.choicesElement=e},key:"choices"}))),f=React.createElement(R,{config:{noOfQuestionsToShow:this.config.noOfQuestionsToShow,liveUpdatesFunction:n.liveUpdates,aspectRatio:n.config.aspectRatio},data:e,ref:function(e){n.questionGroupElement=e},key:"group".concat(n.state.currentQuestionsGroupIndex)}),p=null,n.config.user&&n.config.user.role&&"admin"==n.config.user.role&&(p=React.createElement("button",{className:"osc-editbutton osc-edit",onClick:function(){return n.showEditForm()}},"Bewerk keuzewijzer")),g=h=d=null,"result"==n.state.status||0<n.state.currentQuestionGroupIndex||0<n.state.currentQuestion?(h=function(){n.gotoPreviousQuestion()},g="Terug"):n.config.beforeUrl&&(d=n.config.beforeUrl,g="Introductie"),v=y=m=null,"init"!=n.state.status&&"result"!=n.state.status?(y=function(){n.gotoNextQuestion()},v="Volgende"):n.config.afterUrl&&(m=n.config.afterUrl,v="Resultaat"),b=null,(g||v)&&(b=React.createElement(re.default,{previousAction:h,previousUrl:d,previousLabel:g,nextAction:y,nextUrl:m,nextLabel:v})),React.createElement("div",{className:"osc-choices-guide-content"},p,u,f,b)),React.createElement("div",{id:this.divId,className:"osc-choices-guide"},React.createElement(oe.default,null),a,w)}}])&&fe(e.prototype,t),n&&fe(e,n),a}(),ye=n(100),ve=n.n(ye);function be(e){return(be="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function we(e){return function(e){if(Array.isArray(e))return Ee(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return Ee(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ee(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Oe(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function _e(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Oe(Object(n),!0).forEach(function(e){Se(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Oe(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function Se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Te(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ce(e,t){return(Ce=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Re(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=xe(i);return t=a?(e=xe(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==be(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function xe(e){return(xe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Pe=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ce(e,t)}(i,l["a"]);var e,t,n,o=Re(i);function i(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e)).defaultConfig={type:"default",submission:{type:"none"},choices:{title:{noPreferenceYet:"Je hebt nog geen keuze gemaakt",preference:"Jouw voorkeur is {preferredChoice}",inBetween:"Je staat precies tussen meerdere voorkeuren in"},withPercentage:!0,minLabel:null,maxLabel:null}},t.config=u.a.recursive(t.defaultConfig,t.config,e.config||{}),t.config=u.a.recursive(t.defaultConfig,t.config,e.config||{});var n=s.a.sessionStorage.get("osc-choices-guide.values")||{},r=s.a.sessionStorage.get("osc-choices-guide.scores")||{};return t.state={title:"",answers:n[t.config.choicesGuideId],scores:r[t.config.choicesGuideId]},t}return e=i,(t=[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(){var t=this;ie({config:t.config}).then(function(e){t.setState(e,function(){t.startGuide()})}).catch(function(e){console.log("Niet goed"),console.log(e)})}},{key:"startGuide",value:function(){var e,t,n,r=this,o=(r.choicesElement&&r.choicesElement.calculateScores(r.state.answers),""),i=-1;r.choicesElement&&((t=r.choicesElement.getPreferedChoice())&&((e=t.getTitle(r.state.scores[t.config.divId],!0))?(o=r.config.choices.title.preference.replace("{preferredChoice}",e),i=t.divId):o=r.config.choices.title.noPreferenceYet),r.setState({title:o}),n=new window.CustomEvent("osc-choices-guide-result-is-ready",{detail:{preferredChoice:{name:e,title:o,preferredChoiceId:i},answers:r.state.answers,scores:r.state.scores}}),document.dispatchEvent(n),"auto"==r.config.submission.type&&r.submitResult())}},{key:"submitResult",value:function(){var i=this;if("form"==i.config.submission.type){var a=i.form.getValues();if(!i.form.validate({showErrors:!0}))return}ve.a.get(function(e){var t;try{t=JSON.stringify(e)}catch(e){}var n="".concat(i.config.api&&i.config.api.url,"/api/site/").concat(i.config.siteId,"/choicesguide/").concat(i.config.choicesGuideId,"/result"),r=s.a.api.getHeaders(i.config),o={result:{answers:i.state.answers,scores:i.state.scores},extraData:a,userFingerprint:btoa(t)};fetch(n,{method:"POST",headers:r,body:JSON.stringify(o)}).then(function(e){if(e.ok)return e.json();throw e.text()}).then(function(e){"form"==i.config.submission.type&&(document.location.href=i.config.afterUrl)}).catch(function(e){e.then(function(e){return console.log(e)})})})}},{key:"render",value:function(){var e,t,n,r=this,o=(r.props&&r.props.data,r.state.choices),i=1;r.state.questionGroups&&(n=r.state.questionGroups.find(function(e){return e.id==r.config.questionGroupId}))&&(n.values=r.state.values||{},n&&n.choices&&(o=n.choices,i=n.answerDimensions));var a=null;if(o)switch(r.config.choices.type){case"plane":var c=o&&o[0]&&o[0].images;c&&1<c.length&&(o[0].images=o&&o[0]&&o[0].images[1]),a=React.createElement(J,(Se(e={config:_e(_e({},r.config.choices),{},{sticky:!1,size:630}),scores:r.state.scores,answerDimensions:i},"scores",_e({},r.state.scores)),Se(e,"choices",we(o)),Se(e,"firstAnswerGiven",!0),Se(e,"ref",function(e){r.choicesElement=e}),Se(e,"key","choices"),e));break;default:a=React.createElement(J,(Se(t={config:_e(_e({},r.config.choices),{},{sticky:!1,size:630}),scores:r.state.scores,answerDimensions:i},"scores",_e({},r.state.scores)),Se(t,"choices",we(o)),Se(t,"firstAnswerGiven",!0),Se(t,"ref",function(e){r.choicesElement=e}),Se(t,"key","choices"),t))}var u=null;r.config.moreInfoUrl&&r.config.moreInfoLabel&&(u=React.createElement("div",{className:"osc-more-info-link"},React.createElement("a",{href:r.config.moreInfoUrl},r.config.moreInfoLabel)));var s,l,f,p=null,d=null;return"form"==r.config.submission.type&&(p=React.createElement(v.a.Form,{config:r.config.submission.form,ref:function(e){r.form=e}}),l=s=null,r.config.beforeUrl&&(s=r.config.beforeUrl,l=r.config.beforeLabel||"Vorige"),f=r.config.afterLabel||"Opslaan",(l||f)&&(d=React.createElement(re.default,{previousAction:null,previousUrl:s,previousLabel:l,nextAction:function(){r.submitResult()},nextUrl:null,nextLabel:f}))),React.createElement("div",{className:"osc-choices-guide"},React.createElement("div",{className:"osc-result"},React.createElement("div",{className:"osc-result-content"},React.createElement("div",{className:"osc-choices-container"},React.createElement("h3",{dangerouslySetInnerHTML:{__html:r.state.title}}),a),u,p)),d)}}])&&Te(e.prototype,t),n&&Te(e,n),i}();me.renderElement=function(e,t){var n=e.attributes;a.a.render(o.a.createElement(me,{attributes:n,config:t}),e)},Pe.renderElement=function(e,t){var n=e.attributes;a.a.render(o.a.createElement(Pe,{attributes:n,config:t}),e)}},function(o,i,a){(function(U){var n,r;!function(e,t){"use strict";"undefined"!=typeof window&&a(108)?void 0===(r="function"==typeof(n=t)?n.call(i,a,i,o):n)||(o.exports=r):o.exports?o.exports=t():e.exports?e.exports=t():e.Fingerprint2=t()}(this,function(){"use strict";function f(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var n=[0,0,0,0];return n[3]+=e[3]+t[3],n[2]+=n[3]>>>16,n[3]&=65535,n[2]+=e[2]+t[2],n[1]+=n[2]>>>16,n[2]&=65535,n[1]+=e[1]+t[1],n[0]+=n[1]>>>16,n[1]&=65535,n[0]+=e[0]+t[0],n[0]&=65535,[n[0]<<16|n[1],n[2]<<16|n[3]]}function p(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var n=[0,0,0,0];return n[3]+=e[3]*t[3],n[2]+=n[3]>>>16,n[3]&=65535,n[2]+=e[2]*t[3],n[1]+=n[2]>>>16,n[2]&=65535,n[2]+=e[3]*t[2],n[1]+=n[2]>>>16,n[2]&=65535,n[1]+=e[1]*t[3],n[0]+=n[1]>>>16,n[1]&=65535,n[1]+=e[2]*t[2],n[0]+=n[1]>>>16,n[1]&=65535,n[1]+=e[3]*t[1],n[0]+=n[1]>>>16,n[1]&=65535,n[0]+=e[0]*t[3]+e[1]*t[2]+e[2]*t[1]+e[3]*t[0],n[0]&=65535,[n[0]<<16|n[1],n[2]<<16|n[3]]}function d(e,t){return 32===(t%=64)?[e[1],e[0]]:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t|e[0]>>>32-t]:(t-=32,[e[1]<<t|e[0]>>>32-t,e[0]<<t|e[1]>>>32-t])}function h(e,t){return 0===(t%=64)?e:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t]:[e[1]<<t-32,0]}function g(e,t){return[e[0]^t[0],e[1]^t[1]]}function m(e){return e=g(e,[0,e[0]>>>1]),e=p(e,[4283543511,3981806797]),e=g(e,[0,e[0]>>>1]),e=p(e,[3301882366,444984403]),e=g(e,[0,e[0]>>>1])}function c(e,t){t=t||0;for(var n=(e=e||"").length%16,r=e.length-n,o=[0,t],i=[0,t],a=[0,0],c=[0,0],u=[2277735313,289559509],s=[1291169091,658871167],l=0;l<r;l+=16)a=[255&e.charCodeAt(l+4)|(255&e.charCodeAt(l+5))<<8|(255&e.charCodeAt(l+6))<<16|(255&e.charCodeAt(l+7))<<24,255&e.charCodeAt(l)|(255&e.charCodeAt(l+1))<<8|(255&e.charCodeAt(l+2))<<16|(255&e.charCodeAt(l+3))<<24],c=[255&e.charCodeAt(l+12)|(255&e.charCodeAt(l+13))<<8|(255&e.charCodeAt(l+14))<<16|(255&e.charCodeAt(l+15))<<24,255&e.charCodeAt(l+8)|(255&e.charCodeAt(l+9))<<8|(255&e.charCodeAt(l+10))<<16|(255&e.charCodeAt(l+11))<<24],a=p(a,u),a=d(a,31),a=p(a,s),o=g(o,a),o=d(o,27),o=f(o,i),o=f(p(o,[0,5]),[0,1390208809]),c=p(c,s),c=d(c,33),c=p(c,u),i=g(i,c),i=d(i,31),i=f(i,o),i=f(p(i,[0,5]),[0,944331445]);switch(a=[0,0],c=[0,0],n){case 15:c=g(c,h([0,e.charCodeAt(l+14)],48));case 14:c=g(c,h([0,e.charCodeAt(l+13)],40));case 13:c=g(c,h([0,e.charCodeAt(l+12)],32));case 12:c=g(c,h([0,e.charCodeAt(l+11)],24));case 11:c=g(c,h([0,e.charCodeAt(l+10)],16));case 10:c=g(c,h([0,e.charCodeAt(l+9)],8));case 9:c=g(c,[0,e.charCodeAt(l+8)]),c=p(c,s),c=d(c,33),c=p(c,u),i=g(i,c);case 8:a=g(a,h([0,e.charCodeAt(l+7)],56));case 7:a=g(a,h([0,e.charCodeAt(l+6)],48));case 6:a=g(a,h([0,e.charCodeAt(l+5)],40));case 5:a=g(a,h([0,e.charCodeAt(l+4)],32));case 4:a=g(a,h([0,e.charCodeAt(l+3)],24));case 3:a=g(a,h([0,e.charCodeAt(l+2)],16));case 2:a=g(a,h([0,e.charCodeAt(l+1)],8));case 1:a=g(a,[0,e.charCodeAt(l)]),a=p(a,u),a=d(a,31),a=p(a,s),o=g(o,a)}return o=g(o,[0,e.length]),i=g(i,[0,e.length]),o=f(o,i),i=f(i,o),o=m(o),i=m(i),o=f(o,i),i=f(i,o),("00000000"+(o[0]>>>0).toString(16)).slice(-8)+("00000000"+(o[1]>>>0).toString(16)).slice(-8)+("00000000"+(i[0]>>>0).toString(16)).slice(-8)+("00000000"+(i[1]>>>0).toString(16)).slice(-8)}function s(e,t){if(Array.prototype.forEach&&e.forEach===Array.prototype.forEach)e.forEach(t);else if(e.length===+e.length)for(var n=0,r=e.length;n<r;n++)t(e[n],n,e);else for(var o in e)e.hasOwnProperty(o)&&t(e[o],o,e)}function u(e,r){var o=[];return null==e?o:Array.prototype.map&&e.map===Array.prototype.map?e.map(r):(s(e,function(e,t,n){o.push(r(e,t,n))}),o)}function r(e){throw new Error("'new Fingerprint()' is deprecated, see https://github.com/Valve/fingerprintjs2#upgrade-guide-from-182-to-200")}var e={preprocessor:null,audio:{timeout:1e3,excludeIOS11:!0},fonts:{swfContainerId:"fingerprintjs2",swfPath:"flash/compiled/FontList.swf",userDefinedFonts:[],extendedJsFonts:!1},screen:{detectScreenOrientation:!0},plugins:{sortPluginsFor:[/palemoon/i],excludeIE:!1},extraComponents:[],excludes:{enumerateDevices:!0,pixelRatio:!0,doNotTrack:!0,fontsFlash:!0},NOT_AVAILABLE:"not available",ERROR:"error",EXCLUDED:"excluded"},n=function(){return navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices},o=function(e){var t=[window.screen.width,window.screen.height];return e.screen.detectScreenOrientation&&t.sort().reverse(),t},i=function(e){if(window.screen.availWidth&&window.screen.availHeight){var t=[window.screen.availHeight,window.screen.availWidth];return e.screen.detectScreenOrientation&&t.sort().reverse(),t}return e.NOT_AVAILABLE},a=function(e){if(null==navigator.plugins)return e.NOT_AVAILABLE;for(var t=[],n=0,r=navigator.plugins.length;n<r;n++)navigator.plugins[n]&&t.push(navigator.plugins[n]);return y(e)&&(t=t.sort(function(e,t){return e.name>t.name?1:e.name<t.name?-1:0})),u(t,function(e){var t=u(e,function(e){return[e.type,e.suffixes]});return[e.name,e.description,t]})},l=function(t){var e=[];return Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(window,"ActiveXObject")||"ActiveXObject"in window?e=u(["AcroPDF.PDF","Adodb.Stream","AgControl.AgControl","DevalVRXCtrl.DevalVRXCtrl.1","MacromediaFlashPaper.MacromediaFlashPaper","Msxml2.DOMDocument","Msxml2.XMLHTTP","PDF.PdfCtrl","QuickTime.QuickTime","QuickTimeCheckObject.QuickTimeCheck.1","RealPlayer","RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)","RealVideo.RealVideo(tm) ActiveX Control (32-bit)","Scripting.Dictionary","SWCtl.SWCtl","Shell.UIHelper","ShockwaveFlash.ShockwaveFlash","Skype.Detection","TDCCtl.TDCCtl","WMPlayer.OCX","rmocx.RealPlayer G2 Control","rmocx.RealPlayer G2 Control.1"],function(e){try{return new window.ActiveXObject(e),e}catch(e){return t.ERROR}}):e.push(t.NOT_AVAILABLE),navigator.plugins&&(e=e.concat(a(t))),e},y=function(e){for(var t=!1,n=0,r=e.plugins.sortPluginsFor.length;n<r;n++){var o=e.plugins.sortPluginsFor[n];if(navigator.userAgent.match(o)){t=!0;break}}return t},v=function(t){try{return!!window.sessionStorage}catch(e){return t.ERROR}},b=function(t){try{return!!window.localStorage}catch(e){return t.ERROR}},w=function(t){try{return!!window.indexedDB}catch(e){return t.ERROR}},E=function(e){return navigator.hardwareConcurrency?navigator.hardwareConcurrency:e.NOT_AVAILABLE},O=function(e){return navigator.cpuClass||e.NOT_AVAILABLE},_=function(e){return navigator.platform?navigator.platform:e.NOT_AVAILABLE},S=function(e){return navigator.doNotTrack?navigator.doNotTrack:navigator.msDoNotTrack?navigator.msDoNotTrack:window.doNotTrack?window.doNotTrack:e.NOT_AVAILABLE},t=function(){var t,e=0;void 0!==navigator.maxTouchPoints?e=navigator.maxTouchPoints:void 0!==navigator.msMaxTouchPoints&&(e=navigator.msMaxTouchPoints);try{document.createEvent("TouchEvent"),t=!0}catch(e){t=!1}return[e,t,"ontouchstart"in window]},T=function(e){var t=[],n=document.createElement("canvas");n.width=2e3,n.height=200,n.style.display="inline";var r=n.getContext("2d");return r.rect(0,0,10,10),r.rect(2,2,6,6),t.push("canvas winding:"+(!1===r.isPointInPath(5,5,"evenodd")?"yes":"no")),r.textBaseline="alphabetic",r.fillStyle="#f60",r.fillRect(125,1,62,20),r.fillStyle="#069",e.dontUseFakeFontInCanvas?r.font="11pt Arial":r.font="11pt no-real-font-123",r.fillText("Cwm fjordbank glyphs vext quiz, 😃",2,15),r.fillStyle="rgba(102, 204, 0, 0.2)",r.font="18pt Arial",r.fillText("Cwm fjordbank glyphs vext quiz, 😃",4,45),r.globalCompositeOperation="multiply",r.fillStyle="rgb(255,0,255)",r.beginPath(),r.arc(50,50,50,0,2*Math.PI,!0),r.closePath(),r.fill(),r.fillStyle="rgb(0,255,255)",r.beginPath(),r.arc(100,50,50,0,2*Math.PI,!0),r.closePath(),r.fill(),r.fillStyle="rgb(255,255,0)",r.beginPath(),r.arc(75,100,50,0,2*Math.PI,!0),r.closePath(),r.fill(),r.fillStyle="rgb(255,0,255)",r.arc(75,75,75,0,2*Math.PI,!0),r.arc(75,75,25,0,2*Math.PI,!0),r.fill("evenodd"),n.toDataURL&&t.push("canvas fp:"+n.toDataURL()),t},C=function(){function e(e){return a.clearColor(0,0,0,1),a.enable(a.DEPTH_TEST),a.depthFunc(a.LEQUAL),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),"["+e[0]+", "+e[1]+"]"}var a=F();if(!a)return null;var c=[],t=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,t);var n=new Float32Array([-.2,-.9,0,.4,-.26,0,0,.732134444,0]);a.bufferData(a.ARRAY_BUFFER,n,a.STATIC_DRAW),t.itemSize=3,t.numItems=3;var r=a.createProgram(),o=a.createShader(a.VERTEX_SHADER);a.shaderSource(o,"attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"),a.compileShader(o);var i=a.createShader(a.FRAGMENT_SHADER);a.shaderSource(i,"precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"),a.compileShader(i),a.attachShader(r,o),a.attachShader(r,i),a.linkProgram(r),a.useProgram(r),r.vertexPosAttrib=a.getAttribLocation(r,"attrVertex"),r.offsetUniform=a.getUniformLocation(r,"uniformOffset"),a.enableVertexAttribArray(r.vertexPosArray),a.vertexAttribPointer(r.vertexPosAttrib,t.itemSize,a.FLOAT,!1,0,0),a.uniform2f(r.offsetUniform,1,1),a.drawArrays(a.TRIANGLE_STRIP,0,t.numItems);try{c.push(a.canvas.toDataURL())}catch(e){}c.push("extensions:"+(a.getSupportedExtensions()||[]).join(";")),c.push("webgl aliased line width range:"+e(a.getParameter(a.ALIASED_LINE_WIDTH_RANGE))),c.push("webgl aliased point size range:"+e(a.getParameter(a.ALIASED_POINT_SIZE_RANGE))),c.push("webgl alpha bits:"+a.getParameter(a.ALPHA_BITS)),c.push("webgl antialiasing:"+(a.getContextAttributes().antialias?"yes":"no")),c.push("webgl blue bits:"+a.getParameter(a.BLUE_BITS)),c.push("webgl depth bits:"+a.getParameter(a.DEPTH_BITS)),c.push("webgl green bits:"+a.getParameter(a.GREEN_BITS)),c.push("webgl max anisotropy:"+function(e){var t=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic");if(t){var n=e.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT);return 0===n&&(n=2),n}return null}(a)),c.push("webgl max combined texture image units:"+a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS)),c.push("webgl max cube map texture size:"+a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE)),c.push("webgl max fragment uniform vectors:"+a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS)),c.push("webgl max render buffer size:"+a.getParameter(a.MAX_RENDERBUFFER_SIZE)),c.push("webgl max texture image units:"+a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS)),c.push("webgl max texture size:"+a.getParameter(a.MAX_TEXTURE_SIZE)),c.push("webgl max varying vectors:"+a.getParameter(a.MAX_VARYING_VECTORS)),c.push("webgl max vertex attribs:"+a.getParameter(a.MAX_VERTEX_ATTRIBS)),c.push("webgl max vertex texture image units:"+a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS)),c.push("webgl max vertex uniform vectors:"+a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS)),c.push("webgl max viewport dims:"+e(a.getParameter(a.MAX_VIEWPORT_DIMS))),c.push("webgl red bits:"+a.getParameter(a.RED_BITS)),c.push("webgl renderer:"+a.getParameter(a.RENDERER)),c.push("webgl shading language version:"+a.getParameter(a.SHADING_LANGUAGE_VERSION)),c.push("webgl stencil bits:"+a.getParameter(a.STENCIL_BITS)),c.push("webgl vendor:"+a.getParameter(a.VENDOR)),c.push("webgl version:"+a.getParameter(a.VERSION));try{var u=a.getExtension("WEBGL_debug_renderer_info");u&&(c.push("webgl unmasked vendor:"+a.getParameter(u.UNMASKED_VENDOR_WEBGL)),c.push("webgl unmasked renderer:"+a.getParameter(u.UNMASKED_RENDERER_WEBGL)))}catch(e){}return a.getShaderPrecisionFormat&&s(["FLOAT","INT"],function(i){s(["VERTEX","FRAGMENT"],function(o){s(["HIGH","MEDIUM","LOW"],function(r){s(["precision","rangeMin","rangeMax"],function(e){var t=a.getShaderPrecisionFormat(a[o+"_SHADER"],a[r+"_"+i])[e];"precision"!==e&&(e="precision "+e);var n=["webgl ",o.toLowerCase()," shader ",r.toLowerCase()," ",i.toLowerCase()," ",e,":",t].join("");c.push(n)})})})}),c},R=function(){try{var e=F(),t=e.getExtension("WEBGL_debug_renderer_info");return e.getParameter(t.UNMASKED_VENDOR_WEBGL)+"~"+e.getParameter(t.UNMASKED_RENDERER_WEBGL)}catch(e){return null}},x=function(){var e=document.createElement("div");e.innerHTML="&nbsp;";var t=!(e.className="adsbox");try{document.body.appendChild(e),t=0===document.getElementsByClassName("adsbox")[0].offsetHeight,document.body.removeChild(e)}catch(e){t=!1}return t},P=function(){if(void 0!==navigator.languages)try{if(navigator.languages[0].substr(0,2)!==navigator.language.substr(0,2))return!0}catch(e){return!0}return!1},k=function(){return window.screen.width<window.screen.availWidth||window.screen.height<window.screen.availHeight},I=function(){var e=navigator.userAgent.toLowerCase(),t=navigator.oscpu,n=navigator.platform.toLowerCase(),r=0<=e.indexOf("windows phone")?"Windows Phone":0<=e.indexOf("win")?"Windows":0<=e.indexOf("android")?"Android":0<=e.indexOf("linux")||0<=e.indexOf("cros")?"Linux":0<=e.indexOf("iphone")||0<=e.indexOf("ipad")?"iOS":0<=e.indexOf("mac")?"Mac":"Other";if(("ontouchstart"in window||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints)&&"Windows Phone"!==r&&"Android"!==r&&"iOS"!==r&&"Other"!==r)return!0;if(void 0!==t){if(0<=(t=t.toLowerCase()).indexOf("win")&&"Windows"!==r&&"Windows Phone"!==r)return!0;if(0<=t.indexOf("linux")&&"Linux"!==r&&"Android"!==r)return!0;if(0<=t.indexOf("mac")&&"Mac"!==r&&"iOS"!==r)return!0;if((-1===t.indexOf("win")&&-1===t.indexOf("linux")&&-1===t.indexOf("mac"))!=("Other"===r))return!0}return 0<=n.indexOf("win")&&"Windows"!==r&&"Windows Phone"!==r||((0<=n.indexOf("linux")||0<=n.indexOf("android")||0<=n.indexOf("pike"))&&"Linux"!==r&&"Android"!==r||((0<=n.indexOf("mac")||0<=n.indexOf("ipad")||0<=n.indexOf("ipod")||0<=n.indexOf("iphone"))&&"Mac"!==r&&"iOS"!==r||((n.indexOf("win")<0&&n.indexOf("linux")<0&&n.indexOf("mac")<0&&n.indexOf("iphone")<0&&n.indexOf("ipad")<0)!=("Other"===r)||void 0===navigator.plugins&&"Windows"!==r&&"Windows Phone"!==r)))},A=function(){var e=navigator.userAgent.toLowerCase(),t=navigator.productSub,n=0<=e.indexOf("firefox")?"Firefox":0<=e.indexOf("opera")||0<=e.indexOf("opr")?"Opera":0<=e.indexOf("chrome")?"Chrome":0<=e.indexOf("safari")?"Safari":0<=e.indexOf("trident")?"Internet Explorer":"Other";if(("Chrome"===n||"Safari"===n||"Opera"===n)&&"20030107"!==t)return!0;var r,o=eval.toString().length;if(37===o&&"Safari"!==n&&"Firefox"!==n&&"Other"!==n)return!0;if(39===o&&"Internet Explorer"!==n&&"Other"!==n)return!0;if(33===o&&"Chrome"!==n&&"Opera"!==n&&"Other"!==n)return!0;try{throw"a"}catch(e){try{e.toSource(),r=!0}catch(e){r=!1}}return r&&"Firefox"!==n&&"Other"!==n},j=function(){var e=document.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},L=function(){if(!j())return!1;var e=F();return!!window.WebGLRenderingContext&&!!e},B=function(){return"Microsoft Internet Explorer"===navigator.appName||!("Netscape"!==navigator.appName||!/Trident/.test(navigator.userAgent))},D=function(){return void 0!==window.swfobject},N=function(){return window.swfobject.hasFlashPlayerVersion("9.0.0")},M=function(t,e){var n="___fp_swf_loaded";window[n]=function(e){t(e)};var r,o,i=e.fonts.swfContainerId;(o=document.createElement("div")).setAttribute("id",r.fonts.swfContainerId),document.body.appendChild(o);var a={onReady:n};window.swfobject.embedSWF(e.fonts.swfPath,i,"1","1","9.0.0",!1,a,{allowScriptAccess:"always",menu:"false"},{})},F=function(){var e=document.createElement("canvas"),t=null;try{t=e.getContext("webgl")||e.getContext("experimental-webgl")}catch(e){}return t=t||null},q=[{key:"userAgent",getData:function(e){e(navigator.userAgent)}},{key:"webdriver",getData:function(e,t){e(null==navigator.webdriver?t.NOT_AVAILABLE:navigator.webdriver)}},{key:"language",getData:function(e,t){e(navigator.language||navigator.userLanguage||navigator.browserLanguage||navigator.systemLanguage||t.NOT_AVAILABLE)}},{key:"colorDepth",getData:function(e,t){e(window.screen.colorDepth||t.NOT_AVAILABLE)}},{key:"deviceMemory",getData:function(e,t){e(navigator.deviceMemory||t.NOT_AVAILABLE)}},{key:"pixelRatio",getData:function(e,t){e(window.devicePixelRatio||t.NOT_AVAILABLE)}},{key:"hardwareConcurrency",getData:function(e,t){e(E(t))}},{key:"screenResolution",getData:function(e,t){e(o(t))}},{key:"availableScreenResolution",getData:function(e,t){e(i(t))}},{key:"timezoneOffset",getData:function(e){e((new Date).getTimezoneOffset())}},{key:"timezone",getData:function(e,t){window.Intl&&window.Intl.DateTimeFormat?e((new window.Intl.DateTimeFormat).resolvedOptions().timeZone):e(t.NOT_AVAILABLE)}},{key:"sessionStorage",getData:function(e,t){e(v(t))}},{key:"localStorage",getData:function(e,t){e(b(t))}},{key:"indexedDb",getData:function(e,t){e(w(t))}},{key:"addBehavior",getData:function(e){e(!(!document.body||!document.body.addBehavior))}},{key:"openDatabase",getData:function(e){e(!!window.openDatabase)}},{key:"cpuClass",getData:function(e,t){e(O(t))}},{key:"platform",getData:function(e,t){e(_(t))}},{key:"doNotTrack",getData:function(e,t){e(S(t))}},{key:"plugins",getData:function(e,t){B()?t.plugins.excludeIE?e(t.EXCLUDED):e(l(t)):e(a(t))}},{key:"canvas",getData:function(e,t){j()?e(T(t)):e(t.NOT_AVAILABLE)}},{key:"webgl",getData:function(e,t){L()?e(C()):e(t.NOT_AVAILABLE)}},{key:"webglVendorAndRenderer",getData:function(e){L()?e(R()):e()}},{key:"adBlock",getData:function(e){e(x())}},{key:"hasLiedLanguages",getData:function(e){e(P())}},{key:"hasLiedResolution",getData:function(e){e(k())}},{key:"hasLiedOs",getData:function(e){e(I())}},{key:"hasLiedBrowser",getData:function(e){e(A())}},{key:"touchSupport",getData:function(e){e(t())}},{key:"fonts",getData:function(e,t){var l=["monospace","sans-serif","serif"],f=["Andale Mono","Arial","Arial Black","Arial Hebrew","Arial MT","Arial Narrow","Arial Rounded MT Bold","Arial Unicode MS","Bitstream Vera Sans Mono","Book Antiqua","Bookman Old Style","Calibri","Cambria","Cambria Math","Century","Century Gothic","Century Schoolbook","Comic Sans","Comic Sans MS","Consolas","Courier","Courier New","Geneva","Georgia","Helvetica","Helvetica Neue","Impact","Lucida Bright","Lucida Calligraphy","Lucida Console","Lucida Fax","LUCIDA GRANDE","Lucida Handwriting","Lucida Sans","Lucida Sans Typewriter","Lucida Sans Unicode","Microsoft Sans Serif","Monaco","Monotype Corsiva","MS Gothic","MS Outlook","MS PGothic","MS Reference Sans Serif","MS Sans Serif","MS Serif","MYRIAD","MYRIAD PRO","Palatino","Palatino Linotype","Segoe Print","Segoe Script","Segoe UI","Segoe UI Light","Segoe UI Semibold","Segoe UI Symbol","Tahoma","Times","Times New Roman","Times New Roman PS","Trebuchet MS","Verdana","Wingdings","Wingdings 2","Wingdings 3"];t.fonts.extendedJsFonts&&(f=f.concat(["Abadi MT Condensed Light","Academy Engraved LET","ADOBE CASLON PRO","Adobe Garamond","ADOBE GARAMOND PRO","Agency FB","Aharoni","Albertus Extra Bold","Albertus Medium","Algerian","Amazone BT","American Typewriter","American Typewriter Condensed","AmerType Md BT","Andalus","Angsana New","AngsanaUPC","Antique Olive","Aparajita","Apple Chancery","Apple Color Emoji","Apple SD Gothic Neo","Arabic Typesetting","ARCHER","ARNO PRO","Arrus BT","Aurora Cn BT","AvantGarde Bk BT","AvantGarde Md BT","AVENIR","Ayuthaya","Bandy","Bangla Sangam MN","Bank Gothic","BankGothic Md BT","Baskerville","Baskerville Old Face","Batang","BatangChe","Bauer Bodoni","Bauhaus 93","Bazooka","Bell MT","Bembo","Benguiat Bk BT","Berlin Sans FB","Berlin Sans FB Demi","Bernard MT Condensed","BernhardFashion BT","BernhardMod BT","Big Caslon","BinnerD","Blackadder ITC","BlairMdITC TT","Bodoni 72","Bodoni 72 Oldstyle","Bodoni 72 Smallcaps","Bodoni MT","Bodoni MT Black","Bodoni MT Condensed","Bodoni MT Poster Compressed","Bookshelf Symbol 7","Boulder","Bradley Hand","Bradley Hand ITC","Bremen Bd BT","Britannic Bold","Broadway","Browallia New","BrowalliaUPC","Brush Script MT","Californian FB","Calisto MT","Calligrapher","Candara","CaslonOpnface BT","Castellar","Centaur","Cezanne","CG Omega","CG Times","Chalkboard","Chalkboard SE","Chalkduster","Charlesworth","Charter Bd BT","Charter BT","Chaucer","ChelthmITC Bk BT","Chiller","Clarendon","Clarendon Condensed","CloisterBlack BT","Cochin","Colonna MT","Constantia","Cooper Black","Copperplate","Copperplate Gothic","Copperplate Gothic Bold","Copperplate Gothic Light","CopperplGoth Bd BT","Corbel","Cordia New","CordiaUPC","Cornerstone","Coronet","Cuckoo","Curlz MT","DaunPenh","Dauphin","David","DB LCD Temp","DELICIOUS","Denmark","DFKai-SB","Didot","DilleniaUPC","DIN","DokChampa","Dotum","DotumChe","Ebrima","Edwardian Script ITC","Elephant","English 111 Vivace BT","Engravers MT","EngraversGothic BT","Eras Bold ITC","Eras Demi ITC","Eras Light ITC","Eras Medium ITC","EucrosiaUPC","Euphemia","Euphemia UCAS","EUROSTILE","Exotc350 Bd BT","FangSong","Felix Titling","Fixedsys","FONTIN","Footlight MT Light","Forte","FrankRuehl","Fransiscan","Freefrm721 Blk BT","FreesiaUPC","Freestyle Script","French Script MT","FrnkGothITC Bk BT","Fruitger","FRUTIGER","Futura","Futura Bk BT","Futura Lt BT","Futura Md BT","Futura ZBlk BT","FuturaBlack BT","Gabriola","Galliard BT","Gautami","Geeza Pro","Geometr231 BT","Geometr231 Hv BT","Geometr231 Lt BT","GeoSlab 703 Lt BT","GeoSlab 703 XBd BT","Gigi","Gill Sans","Gill Sans MT","Gill Sans MT Condensed","Gill Sans MT Ext Condensed Bold","Gill Sans Ultra Bold","Gill Sans Ultra Bold Condensed","Gisha","Gloucester MT Extra Condensed","GOTHAM","GOTHAM BOLD","Goudy Old Style","Goudy Stout","GoudyHandtooled BT","GoudyOLSt BT","Gujarati Sangam MN","Gulim","GulimChe","Gungsuh","GungsuhChe","Gurmukhi MN","Haettenschweiler","Harlow Solid Italic","Harrington","Heather","Heiti SC","Heiti TC","HELV","Herald","High Tower Text","Hiragino Kaku Gothic ProN","Hiragino Mincho ProN","Hoefler Text","Humanst 521 Cn BT","Humanst521 BT","Humanst521 Lt BT","Imprint MT Shadow","Incised901 Bd BT","Incised901 BT","Incised901 Lt BT","INCONSOLATA","Informal Roman","Informal011 BT","INTERSTATE","IrisUPC","Iskoola Pota","JasmineUPC","Jazz LET","Jenson","Jester","Jokerman","Juice ITC","Kabel Bk BT","Kabel Ult BT","Kailasa","KaiTi","Kalinga","Kannada Sangam MN","Kartika","Kaufmann Bd BT","Kaufmann BT","Khmer UI","KodchiangUPC","Kokila","Korinna BT","Kristen ITC","Krungthep","Kunstler Script","Lao UI","Latha","Leelawadee","Letter Gothic","Levenim MT","LilyUPC","Lithograph","Lithograph Light","Long Island","Lydian BT","Magneto","Maiandra GD","Malayalam Sangam MN","Malgun Gothic","Mangal","Marigold","Marion","Marker Felt","Market","Marlett","Matisse ITC","Matura MT Script Capitals","Meiryo","Meiryo UI","Microsoft Himalaya","Microsoft JhengHei","Microsoft New Tai Lue","Microsoft PhagsPa","Microsoft Tai Le","Microsoft Uighur","Microsoft YaHei","Microsoft Yi Baiti","MingLiU","MingLiU_HKSCS","MingLiU_HKSCS-ExtB","MingLiU-ExtB","Minion","Minion Pro","Miriam","Miriam Fixed","Mistral","Modern","Modern No. 20","Mona Lisa Solid ITC TT","Mongolian Baiti","MONO","MoolBoran","Mrs Eaves","MS LineDraw","MS Mincho","MS PMincho","MS Reference Specialty","MS UI Gothic","MT Extra","MUSEO","MV Boli","Nadeem","Narkisim","NEVIS","News Gothic","News GothicMT","NewsGoth BT","Niagara Engraved","Niagara Solid","Noteworthy","NSimSun","Nyala","OCR A Extended","Old Century","Old English Text MT","Onyx","Onyx BT","OPTIMA","Oriya Sangam MN","OSAKA","OzHandicraft BT","Palace Script MT","Papyrus","Parchment","Party LET","Pegasus","Perpetua","Perpetua Titling MT","PetitaBold","Pickwick","Plantagenet Cherokee","Playbill","PMingLiU","PMingLiU-ExtB","Poor Richard","Poster","PosterBodoni BT","PRINCETOWN LET","Pristina","PTBarnum BT","Pythagoras","Raavi","Rage Italic","Ravie","Ribbon131 Bd BT","Rockwell","Rockwell Condensed","Rockwell Extra Bold","Rod","Roman","Sakkal Majalla","Santa Fe LET","Savoye LET","Sceptre","Script","Script MT Bold","SCRIPTINA","Serifa","Serifa BT","Serifa Th BT","ShelleyVolante BT","Sherwood","Shonar Bangla","Showcard Gothic","Shruti","Signboard","SILKSCREEN","SimHei","Simplified Arabic","Simplified Arabic Fixed","SimSun","SimSun-ExtB","Sinhala Sangam MN","Sketch Rockwell","Skia","Small Fonts","Snap ITC","Snell Roundhand","Socket","Souvenir Lt BT","Staccato222 BT","Steamer","Stencil","Storybook","Styllo","Subway","Swis721 BlkEx BT","Swiss911 XCm BT","Sylfaen","Synchro LET","System","Tamil Sangam MN","Technical","Teletype","Telugu Sangam MN","Tempus Sans ITC","Terminal","Thonburi","Traditional Arabic","Trajan","TRAJAN PRO","Tristan","Tubular","Tunga","Tw Cen MT","Tw Cen MT Condensed","Tw Cen MT Condensed Extra Bold","TypoUpright BT","Unicorn","Univers","Univers CE 55 Medium","Univers Condensed","Utsaah","Vagabond","Vani","Vijaya","Viner Hand ITC","VisualUI","Vivaldi","Vladimir Script","Vrinda","Westminster","WHITNEY","Wide Latin","ZapfEllipt BT","ZapfHumnst BT","ZapfHumnst Dm BT","Zapfino","Zurich BlkEx BT","Zurich Ex BT","ZWAdobeF"])),f=(f=f.concat(t.fonts.userDefinedFonts)).filter(function(e,t){return f.indexOf(e)===t});function p(){var e=document.createElement("span");return e.style.position="absolute",e.style.left="-9999px",e.style.fontSize="72px",e.style.fontStyle="normal",e.style.fontWeight="normal",e.style.letterSpacing="normal",e.style.lineBreak="auto",e.style.lineHeight="normal",e.style.textTransform="none",e.style.textAlign="left",e.style.textDecoration="none",e.style.textShadow="none",e.style.whiteSpace="normal",e.style.wordBreak="normal",e.style.wordSpacing="normal",e.innerHTML="mmmmmmmmmmlli",e}var n=document.getElementsByTagName("body")[0],o=document.createElement("div"),d=document.createElement("div"),r={},i={},a=function(){for(var e=[],t=0,n=l.length;t<n;t++){var r=p();r.style.fontFamily=l[t],o.appendChild(r),e.push(r)}return e}();n.appendChild(o);for(var c=0,u=l.length;c<u;c++)r[l[c]]=a[c].offsetWidth,i[l[c]]=a[c].offsetHeight;var s=function(){for(var e,t,n,r={},o=0,i=f.length;o<i;o++){for(var a=[],c=0,u=l.length;c<u;c++){var s=(e=f[o],t=l[c],n=void 0,(n=p()).style.fontFamily="'"+e+"',"+t,n);d.appendChild(s),a.push(s)}r[f[o]]=a}return r}();n.appendChild(d);for(var h=[],g=0,m=f.length;g<m;g++)!function(e){for(var t=!1,n=0;n<l.length;n++)if(t=e[n].offsetWidth!==r[l[n]]||e[n].offsetHeight!==i[l[n]])return t;return t}(s[f[g]])||h.push(f[g]);n.removeChild(d),n.removeChild(o),e(h)},pauseBefore:!0},{key:"fontsFlash",getData:function(t,e){return D()?N()?e.fonts.swfPath?void M(function(e){t(e)},e):t("missing options.fonts.swfPath"):t("flash not installed"):t("swf object not loaded")},pauseBefore:!0},{key:"audio",getData:function(n,e){var t=e.audio;if(t.excludeIOS11&&navigator.userAgent.match(/OS 11.+Version\/11.+Safari/))return n(e.EXCLUDED);var r=window.OfflineAudioContext||window.webkitOfflineAudioContext;if(null==r)return n(e.NOT_AVAILABLE);var o=new r(1,44100,44100),i=o.createOscillator();i.type="triangle",i.frequency.setValueAtTime(1e4,o.currentTime);var a=o.createDynamicsCompressor();s([["threshold",-50],["knee",40],["ratio",12],["reduction",-20],["attack",0],["release",.25]],function(e){void 0!==a[e[0]]&&"function"==typeof a[e[0]].setValueAtTime&&a[e[0]].setValueAtTime(e[1],o.currentTime)}),i.connect(a),a.connect(o.destination),i.start(0),o.startRendering();var c=setTimeout(function(){return console.warn('Audio fingerprint timed out. Please report bug at https://github.com/Valve/fingerprintjs2 with your user agent: "'+navigator.userAgent+'".'),o.oncomplete=function(){},o=null,n("audioTimeout")},t.timeout);o.oncomplete=function(e){var t;try{clearTimeout(c),t=e.renderedBuffer.getChannelData(0).slice(4500,5e3).reduce(function(e,t){return e+Math.abs(t)},0).toString(),i.disconnect(),a.disconnect()}catch(e){return void n(e)}n(t)}}},{key:"enumerateDevices",getData:function(t,e){if(!n())return t(e.NOT_AVAILABLE);navigator.mediaDevices.enumerateDevices().then(function(e){t(e.map(function(e){return"id="+e.deviceId+";gid="+e.groupId+";"+e.kind+";"+e.label}))}).catch(function(e){t(e)})}}];return r.get=function(n,r){(function(e,t){if(null==t)return;var n,r;for(r in t)null==(n=t[r])||Object.prototype.hasOwnProperty.call(e,r)||(e[r]=n)})(n=r?n||{}:(r=n,{}),e),n.components=n.extraComponents.concat(q);var o={data:[],addPreprocessedComponent:function(e,t){"function"==typeof n.preprocessor&&(t=n.preprocessor(e,t)),o.data.push({key:e,value:t})}},i=-1,a=function(e){if((i+=1)>=n.components.length)r(o.data);else{var t=n.components[i];if(n.excludes[t.key])a(!1);else{if(!e&&t.pauseBefore)return--i,void setTimeout(function(){a(!0)},1);try{t.getData(function(e){o.addPreprocessedComponent(t.key,e),a(!1)},n)}catch(e){o.addPreprocessedComponent(t.key,String(e)),a(!1)}}}};a(!1)},r.getPromise=function(n){return new U(function(e,t){r.get(n,e)})},r.getV18=function(i,a){return null==a&&(a=i,i={}),r.get(i,function(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];if(r.value===(i.NOT_AVAILABLE||"not available"))t.push({key:r.key,value:"unknown"});else if("plugins"===r.key)t.push({key:"plugins",value:u(r.value,function(e){var t=u(e[2],function(e){return e.join?e.join("~"):e}).join(",");return[e[0],e[1],t].join("::")})});else if(-1!==["canvas","webgl"].indexOf(r.key))t.push({key:r.key,value:r.value.join("~")});else if(-1!==["sessionStorage","localStorage","indexedDb","addBehavior","openDatabase"].indexOf(r.key)){if(!r.value)continue;t.push({key:r.key,value:1})}else r.value?t.push(r.value.join?{key:r.key,value:r.value.join(";")}:r):t.push({key:r.key,value:r.value})}var o=c(u(t,function(e){return e.value}).join("~~~"),31);a(o,t)})},r.x64hash128=c,r.VERSION="2.1.0",r})}).call(this,a(10))},,,,function(e,t,n){n(106);var r=n(64);e.exports=r("Array","find")},,function(e,t,n){"use strict";var r=n(60),o=n(61).find,i=n(62),a=n(63),c="find",u=!0,s=a(c);c in[]&&Array(1).find(function(){u=!1}),r({target:"Array",proto:!0,forced:u||!s},{find:function(e,t){return o(this,e,1<arguments.length?t:void 0)}}),i(c)},function(e,t,n){},function(t,e){(function(e){t.exports=e}).call(this,{})}]);
=======
window.OpenStadComponents=function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}return o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=100)}([function(e,t){e.exports=window.React},function(e,t,n){(function(e){function t(e,t,n){var r=n[0],o=n.length;!e&&"object"===s(r)||(r={});for(var i=0;i<o;++i){var a,c=n[i];if("object"===s(c))for(var u in c){"__proto__"!==u&&(a=e?l.clone(c[u]):c[u],r[u]=t?function e(t,n){if("object"!==s(t))return n;for(var r in n)"object"===s(t[r])&&"object"===s(n[r])?t[r]=e(t[r],n[r]):t[r]=n[r];return t}(r[u],a):a)}}return r}function s(e){return{}.toString.call(e).slice(8,-1).toLowerCase()}var n,l;n=e&&"object"==typeof e.exports&&e.exports,(l=function(e){return t(!0===e,!1,arguments)}).recursive=function(e){return t(!0===e,!0,arguments)},l.clone=function(e){var t,n,r=e,o=s(e);if("array"===o)for(r=[],n=e.length,t=0;t<n;++t)r[t]=l.clone(e[t]);else if("object"===o)for(t in r={},e)r[t]=l.clone(e[t]);return r},n?e.exports=l:window.merge=l}).call(this,n(17)(e))},function(e,t,n){"use strict";n(6),n(0),n(3),n(32);var r=n(1),o=n.n(r);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){var t,n,r=window.location.search.match(/(?:\?|&)jwt=([A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*)(?:&|$)/);return r&&(t=r[1],u.set("osc-jwt",t),"?"==(n=document.location.search.replace("jwt="+t,""))&&(n=""),document.location.search=n),t=u.get("osc-jwt"),e&&e.jwt&&(t=e.jwt,u.set("osc-jwt",t)),t}var c={get:function(e){var t=sessionStorage.getItem(e);try{t=JSON.parse(t)}catch(e){}return t},set:function(e,t){if("string"==typeof e){if(void 0===t&&(t=""),"object"==i(t))try{t=JSON.stringify(t)}catch(e){}sessionStorage.setItem(e,t)}},remove:function(e){sessionStorage.removeItem(e)}},u=c,s={admin:["admin","moderator","editor","member","anonymous","all"],moderator:["moderator","editor","member","anonymous","all"],editor:["editor","member","anonymous","all"],member:["member","anonymous","all"],anonymous:["anonymous","all"],all:["all"],owner:null};function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var f={get:function(e){var t=localStorage.getItem(e);try{t=JSON.parse(t)}catch(e){}return t},set:function(e,t){if("string"==typeof e){if(void 0===t&&(t=""),"object"==l(t))try{t=JSON.stringify(t)}catch(e){}localStorage.setItem(e,t)}},remove:function(e){localStorage.removeItem(e)}},p={api:{getHeaders:function(e){var t=o.a.recursive({"Content-type":"application/json"},e&&e.api&&e.api.headers),n=a();return n&&(t=o.a.recursive({"X-Authorization":"Bearer "+n},t)),t}},user:{getUser:function(e,t){t=t||function(e){console.log("getUser: next not defined."),console.log(e)};var n=e.user||u.get("osc-user");if(n)return t(null,n);var r=a(e);if(!r)return t(null,{});var o="".concat(e.api.url,"/oauth/site/").concat(e.siteId,"/me"),i={"X-Authorization":"Bearer ".concat(r),"Content-Type":"application/json"};fetch(o,{headers:i}).then(function(e){if(!e.ok)throw new Error("Error on fetch");return e.json()}).then(function(e){u.set("osc-user",e),t(null,e)}).catch(function(e){t(e)})},getJWT:a,logout:function(e,t){t=t||function(e){console.log("logout: next not defined.")};var n=e.user||u.get("osc-user");if(n)return t(null,n);var r=a(e);if(!r)return t(null,{});var o=e.api.url+"/oauth/site/"+e.siteId+"/me";fetch(o,{headers:{"X-Authorization":"Bearer "+r,"Content-Type":"application/json"}}).then(function(e){if(!e.ok)throw new Error("Error on fetch");return e.json()}).then(function(e){u.set("osc-user",e),t(null,e)}).catch(function(e){t(e)})},hasRole:function(e,t){var n=e.role;return Object.keys(s).includes(n)||(n="all"),s[n].includes(t)}},localStorage:f,sessionStorage:u,reactTemplate:function(e){var t=e.html,n=void 0===t?"":t,r=e;delete r.html;var o=0;return Object.keys(r).forEach(function(e){var t=new RegExp("^((?:.|\n|\r)*)\\{".concat(e,"\\}((?:.|\n|\r)*)$"),"g").exec(n);t&&(o++,n=React.createElement("span",null,React.createElement("span",{dangerouslySetInnerHTML:{__html:t[1]}}),r[e],React.createElement("span",{dangerouslySetInnerHTML:{__html:t[2]}})))}),0==o&&(n=React.createElement("span",{dangerouslySetInnerHTML:{__html:n}})),n}};t.a=p},function(e,t){e.exports=window.ReactDOM},function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(1),a=n.n(r),o=n(0),c=n.n(o);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=d(i);return t=a?(e=d(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==u(r)&&"function"!=typeof r?p(n):r}}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var i=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(i,c.a.Component);var e,t,n,o=f(i);function i(n){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);var r=p(e=o.call(this,n));if(n.attributes&&Object.keys(n.attributes).forEach(function(e){var t=n.attributes[e];r[t.name]=t.value}),r.config=r.config||n.config,"string"==typeof r.config)try{r.config=JSON.parse(r.config)}catch(e){}return r.config=a.a.recursive({siteId:null,api:{url:null,headers:null,isUserLoggedIn:!1},user:{}},r.config,r.props.config||{}),r.divId=r.divId||r.config&&r.config.divId||n.id||"openstad-component-".concat(parseInt(1e8*Math.random())),window[r.divId]=r,e}return e=i,(t=[{key:"componentDidMount",value:function(){}}])&&s(e.prototype,t),n&&s(e,n),i}()},function(e,t,n){"use strict";n(6);var r=n(0),u=n.n(r),o=(n(3),n(33),n(1)),i=n.n(o),a=n(4);n(2);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=d(i);return t=a?(e=d(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==c(r)&&"function"!=typeof r?p(n):r}}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(o,a["a"]);var e,t,n,r=f(o);function o(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var n=p(t=r.call(this,e));return n.defaultConfig={choices:[],name:"",placeholder:"",disabled:!1,required:!1},n.config=i.a.recursive(n.defaultConfig,n.config,e.config||{}),n.state={value:e.value,error:null},t.onChange=e.onChange,t}return e=o,(t=[{key:"validate",value:function(e){var t=e.showErrors,n=!this.config.required||!!this.state.value,r=!n&&t?!0:"";return this.setState({isValid:n,error:r}),n}},{key:"handleOnChange",value:function(e){var t=this;e=e||{},t.setState(e,function(){t.validate({})}),"function"==typeof t.onChange&&t.onChange({name:t.config.name,value:e.value})}}])&&s(e.prototype,t),n&&s(e,n),o}();function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=b(i);return t=a?(e=b(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==g(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var w=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(o,h);var e,t,n,r=v(o);function o(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return e=o,(t=[{key:"render",value:function(){var t=this;return u.a.createElement("input",{type:"hidden",value:this.props.value,disabled:this.props.disabled,placeholder:this.config.placeholder,onChange:function(){return t.handleOnChange({value:t.input.value})},ref:function(e){return t.input=e}})}}])&&m(e.prototype,t),n&&m(e,n),o}();function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=T(i);return t=a?(e=T(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==E(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var C=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(o,h);var e,t,n,r=S(o);function o(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);(t=r.call(this,e)).config=i.a.recursive({allowMultiple:!1,imageserver:{process:"",fetch:""}},t.props.config,t.config||{});var n=[];return(e.value||[]).forEach(function(e){n.push({source:{url:e},options:{type:"local",file:{name:e},metadata:{poster:e}}})}),t.state={uploadedFiles:n},t}return e=o,(t=[{key:"componentDidMount",value:function(){this._loadedFiles=0,this.files=["https://unpkg.com/filepond/dist/filepond.js","https://unpkg.com/filepond-polyfill/dist/filepond-polyfill.js","https://unpkg.com/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.js","https://unpkg.com/filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.js","https://unpkg.com/filepond-plugin-file-validate-size/dist/filepond-plugin-file-validate-size.js","https://unpkg.com/filepond-plugin-file-poster/dist/filepond-plugin-file-poster.js"],this.loadNextFile()}},{key:"loadNextFile",value:function(){var e,t=this,n=t.files[t._loadedFiles];n&&((e=document.createElement("script")).src=n,e.async=!0,e&&(e.onload=function(){t.loadNextFile()},document.body.appendChild(e))),t._loadedFiles==t.files.length&&t.fileUploaderInit(),t._loadedFiles++}},{key:"validate",value:function(){var t=!0;return this.imageuploader&&this.imageuploader.getFiles&&this.imageuploader.getFiles().forEach(function(e){e.serverId||(t=!1)}),t}},{key:"fileUploaderInit",value:function(){var e,t=this,n=document.querySelector(".osc-image-upload-container");n&&(FilePond.registerPlugin(FilePondPluginImagePreview),FilePond.registerPlugin(FilePondPluginFileValidateSize),FilePond.registerPlugin(FilePondPluginFileValidateType),FilePond.registerPlugin(FilePondPluginFilePoster),e={acceptedFileTypes:["image/*"],allowFileSizeValidation:!0,allowMultiple:this.config.allowMultiple,allowReorder:!0,styleItemPanelAspectRatio:1,maxFileSize:"8mb",name:"image",maxFiles:5,allowBrowse:!0,files:this.state.uploadedFiles,server:{process:this.config.imageserver.process,fetch:this.config.imageserver.fetch},imageResizeTargetWidth:80,imageResizeTargetHeight:80,imageCropAspectRatio:"1:1",labelIdle:"Sleep afbeelding(en) naar deze plek of <span class='filepond--label-action'>KLIK HIER</span>",labelInvalidField:"Field contains invalid files",labelFileWaitingForSize:"Wachtend op grootte",labelFileSizeNotAvailable:"Grootte niet beschikbaar",labelFileCountSingular:"Bestand in lijst",labelFileCountPlural:"Bestanden in lijst",labelFileLoading:"Laden",labelFileAdded:"Toegevoegd",labelFileLoadError:"Fout bij het uploaden",labelFileRemoved:"Verwijderd",labelFileRemoveError:"Fout bij het verwijderen",labelFileProcessing:"Laden",labelFileProcessingComplete:"Afbeelding geladen",labelFileProcessingAborted:"Upload cancelled",labelFileProcessingError:"Error during upload",labelFileProcessingRevertError:"Error during revert",labelTapToCancel:"tap to cancel",labelTapToRetry:"tap to retry",labelTapToUndo:"tap to undo",labelButtonRemoveItem:"Verwijderen",labelButtonAbortItemLoad:"Abort",labelButtonRetryItemLoad:"Retry",labelButtonAbortItemProcessing:"Verwijder",labelButtonUndoItemProcessing:"Undo",labelButtonRetryItemProcessing:"Retry",labelButtonProcessItem:"Upload"},t.imageuploader=FilePond.create(n,e),document.querySelector(".filepond--root"),document.querySelector(".filepond--root").addEventListener("FilePond:processfile",function(e){e.detail&&e.detail.error&&console.log("Error uploding file: ",e.detail),t.fileUploaderUpdateCurrentInput()}),document.querySelector(".filepond--root").addEventListener("FilePond:removefile",function(e){e.detail&&e.detail.error&&console.log("Error uploding file: ",e.detail),t.fileUploaderUpdateCurrentInput()}),t.state.formfields&&t.imageuploader.addFiles(t.state.formfields.images))}},{key:"fileUploaderUpdateCurrentInput",value:function(){var n=this;n.state.value=[],this.imageuploader&&this.imageuploader.getFiles&&this.imageuploader.getFiles().forEach(function(e){try{var t="string"==typeof e.serverId?JSON.parse(e.serverId):e.serverId;n.state.value.push(t.url)}catch(e){console.log(e)}}),n.props.onChange({name:n.config.name,value:n.state.value})}},{key:"fileUploaderUploaderAddImages",value:function(e){this.imageuploader&&this.imageuploader.addFiles(e)}},{key:"render",value:function(){var e=null;return this.state.error&&(e=u.a.createElement("div",{className:"osc-form-error"},"Je hebt nog geen afbeelding geupload")),u.a.createElement("div",{className:"osc-image-upload-container"},u.a.createElement("input",{type:"file",className:"imageUploader-gebiedstool filepond-gebiedstool"}),e)}}])&&O(e.prototype,t),n&&O(e,n),o}();function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=I(i);return t=a?(e=I(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==R(r)&&"function"!=typeof r?A(n):r}}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var j=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(o,u.a.Component);var e,t,n,r=k(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=r.call(this,e)).state={value:t.props.value},t.onKeyUpx=t.onKeyUpx.bind(A(t)),t}return e=o,(t=[{key:"componentDidMount",value:function(){var e=this.props.value,e=this.filterHTML(e);this.input.innerHTML=e}},{key:"filterHTML",value:function(e){return e=(e=(e=e.replace(/<(\/?\s*(?:a [^>]+|a|b|i|strong|em|p|div|br|ul|li)\s*\/?)>/g,"[[[$1]]]")).replace(/<[^>]+>/g,"")).replace(/\[\[\[([^\]]+)\]\]\]/g,"<$1>")}},{key:"executeAction",value:function(e,t,n){e.preventDefault(),e.stopPropagation(),document.execCommand(t,!1,n),this.onKeyUp()}},{key:"onFocus",value:function(e){this.props.onFocus&&this.props.onFocus(e)}},{key:"onBlur",value:function(e){this.props.onBlur&&this.props.onBlur(e),this.props.onChange&&this.props.onChange({value:this.state.value})}},{key:"onKeyUpx",value:function(){var e=this.input.innerHTML,e=this.filterHTML(e);this.setState({value:e}),this.props.onKeyUp&&this.props.onKeyUp(e)}},{key:"render",value:function(){var t=this;return u.a.createElement("div",{className:"osc-html-editor"},u.a.createElement("div",{className:"osc-html-editor-buttons"},u.a.createElement("div",{className:"osc-html-editor-button osc-html-editor-button-bold",onMouseDown:function(e){return t.executeAction(e,"bold")}}," "),u.a.createElement("div",{className:"osc-html-editor-button osc-html-editor-button-italic",onMouseDown:function(e){return t.executeAction(e,"italic")}}," "),u.a.createElement("div",{className:"osc-html-editor-button osc-html-editor-button-insertunorderedlist",onMouseDown:function(e){return t.executeAction(e,"insertunorderedlist")}}," "),u.a.createElement("div",{className:"osc-html-editor-button osc-html-editor-button-createlink",onMouseDown:function(e){return t.executeAction(e,"createlink",prompt("Lank naar","http://"))}}," ")),u.a.createElement("div",{className:"osc-html-editor-content",contentEditable:!0,onFocus:function(e){return t.onFocus(e)},onBlur:function(e){return t.onBlur(e)},onKeyUp:function(){return t.onKeyUpx()},ref:function(e){return t.input=e}}))}}])&&x(e.prototype,t),n&&x(e,n),o}();function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function N(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=F(i);return t=a?(e=F(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==D(r)&&"function"!=typeof r?M(n):r}}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var U=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(o,u.a.Component);var e,t,n,r=N(o);function o(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var n=M(t=r.call(this,e));return n.id=e.id||"osc-formfields-plaintext-with-counter-"+parseInt(1e6*Math.random()),n.defaultConfig={name:"tekst",inputType:"input",minLength:5,maxLength:10,placeholder:""},n.config=i.a.recursive(n.defaultConfig,n.config,e.config||{}),n.state={focused:!1,value:e.value||"",valueLength:e.value&&e.value.length||0},n.key=e.useKey||(n.id||"osc-input-with-counter-")+parseInt(1e7*Math.random),t.onChange=e.onChange,n.handleOnChange=n.handleOnChange.bind(M(t)),n.onInputFocus=n.onInputFocus.bind(M(t)),n.onInputBlur=n.onInputBlur.bind(M(t)),n.onInputKeyUp=n.onInputKeyUp.bind(M(t)),t}return e=o,(t=[{key:"isValid",value:function(){var e={isValid:!0,warning:null};return this.state.valueLength<this.config.minLength&&(e.warning="De tekst is te kort",e.isValid=!1),this.state.valueLength>this.config.maxLength&&(e.warning="De tekst is te lang",e.isValid=!1),this.setState(e),e.isValid}},{key:"validate",value:function(){return this.setState({showWarning:!0}),this.isValid()}},{key:"handleOnChange",value:function(e){e=e||{},this.setState(e),"function"==typeof this.onChange&&this.onChange({name:this.config.name,value:e.value})}},{key:"onInputFocus",value:function(){var e={focused:!0,showWarning:!1};this.setState(e)}},{key:"onInputBlur",value:function(){var e={focused:!1};this.setState(e)}},{key:"onInputKeyUp",value:function(e){var t={};t.value=e||this.input.value;var n=t.value.length;t.valueLength=n,t.isValid=n>=this.config.minLength&&n<=this.config.maxLength,this.setState(t)}},{key:"render",value:function(){var e,t=this,n=this,r=null,o=null;n.state.focused&&(r=n.state.valueLength<n.config.minLength?u.a.createElement("div",{className:"osc-form-counter osc-form-error"},"Nog minimaal ",u.a.createElement("span",{className:""},n.config.minLength-n.state.valueLength)," tekens"):(e=n.state.valueLength>n.config.maxLength?"osc-form-error":"",u.a.createElement("div",{className:"osc-form-counter "+e},"Je hebt nog ",u.a.createElement("span",{className:""},n.config.maxLength-n.state.valueLength)," tekens over."))),n.state.showWarning&&n.state.warning&&(o=u.a.createElement("div",{className:"osc-form-warning",ref:function(e){return t["form-warning"]=e}},n.state.warning));var i=null;switch(n.config.inputType){case"htmlarea":i=u.a.createElement(j,{value:this.state.value,onChange:n.handleOnChange,onFocus:n.onInputFocus,onBlur:n.onInputBlur,onKeyUp:n.onInputKeyUp});break;case"textarea":i=u.a.createElement("textarea",{key:n.key,ref:function(e){return n.input=e},value:this.state.value,disabled:this.props.disabled,placeholder:this.config.placeholder,onChange:function(){return n.handleOnChange({value:n.input.value})},onKeyUp:function(){return n.onInputKeyUp()},onFocus:function(e){return n.onInputFocus(e)},onBlur:function(e){return n.onInputBlur(e)}});break;case"input":default:i=u.a.createElement("input",{key:n.key,ref:function(e){return n.input=e},value:this.state.value,disabled:this.props.disabled,placeholder:this.config.placeholder,onChange:function(){return n.handleOnChange({value:n.input.value})},onKeyUp:function(){return n.onInputKeyUp()},onFocus:function(e){return n.onInputFocus(e)},onBlur:function(e){return n.onInputBlur(e)}})}return u.a.createElement("div",{id:n.id,ref:function(e){return n.instance=e},className:"osc-input-with-counter"},u.a.createElement("div",{className:"osc-form-feedback"},i,r,o))}}])&&B(e.prototype,t),n&&B(e,n),o}();function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function H(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=W(i);return t=a?(e=W(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==q(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function W(e){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var z=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(o,h);var e,t,n,r=H(o);function o(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return e=o,(t=[{key:"render",value:function(){var t=this,e=null;return t.state.error&&(e=u.a.createElement("div",{className:"osc-form-error"},"Je hebt nog geen keuze gemaakt")),u.a.createElement("div",{className:"osc-radios"},t.config.choices.map(function(e){return e.dangerousDescription?u.a.createElement("div",{className:"osc-radio-container",key:e.value},u.a.createElement("div",{className:"osc-radio-input".concat(t.state.value==e.value?" osc-radio-input-checked":"")},u.a.createElement("input",{type:"radio",name:t.divId,value:e.value,onChange:function(){return t.handleOnChange({value:e.value})}})),u.a.createElement("div",{className:"osc-radio-text",dangerouslySetInnerHTML:{__html:e.dangerousDescription}})):u.a.createElement("div",{className:"osc-radio-container",key:e.value},u.a.createElement("div",{className:"osc-radio-input".concat(t.state.value==e.value?" osc-radio-input-checked":"")},u.a.createElement("input",{type:"radio",name:t.divId,value:e.value,onChange:function(){return t.handleOnChange({value:e.value})}})),u.a.createElement("div",{className:"osc-radio-text"},e.dangerousDescription?null:e.description||e.title||e.value))}),e)}}])&&G(e.prototype,t),n&&G(e,n),o}();function K(e){return(K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function X(e,t){return(X=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function J(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=Z(i);return t=a?(e=Z(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==K(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function Z(e){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Y=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&X(e,t)}(o,h);var e,t,n,r=J(o);function o(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return e=o,(t=[{key:"validate",value:function(e){var t=e.showErrors,n=!0,r="";return this.state.value&&this.state.value.match(/^\s*\d{4}\s*[a-zA-Z][a-zA-Z]\s*$/)||(n=!1,t&&(r="Dit is geen postcode")),this.config.required&&!this.state.value&&(n=!1,t&&(r="Je hebt nog niets ingevuld")),this.setState({isValid:n,error:r}),n}},{key:"render",value:function(){var t=this,e=null;return t.state.error&&(e=u.a.createElement("div",{className:"osc-form-error"},t.state.error)),u.a.createElement("div",{className:"osc-textinput"},u.a.createElement("input",{type:"text",value:this.props.value,disabled:this.props.disabled,placeholder:this.config.placeholder,onChange:function(){return t.handleOnChange({value:t.input.value})},ref:function(e){return t.input=e}}),e)}}])&&Q(e.prototype,t),n&&Q(e,n),o}();function $(e){return($="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ee(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function te(e,t){return(te=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ne(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=re(i);return t=a?(e=re(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==$(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function re(e){return(re=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var oe=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&te(e,t)}(o,h);var e,t,n,r=ne(o);function o(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return e=o,(t=[{key:"componentDidMount",value:function(){var e=this.state.value||this.config.choices[0]&&this.config.choices[0].value;this.handleOnChange({value:e})}},{key:"render",value:function(){var t=this,e=null;return t.state.error&&(e=u.a.createElement("div",{className:"osc-form-error"},"Je hebt nog geen keuze gemaakt")),u.a.createElement("div",{className:"osc-select"},u.a.createElement("select",{value:this.state.value||"",disabled:this.props.disabled,placeholder:this.config.placeholder,onChange:function(){return t.handleOnChange({value:t.input.value})},ref:function(e){return t.input=e}},t.config.choices.map(function(e){return u.a.createElement("option",{value:e.value||"",key:e.value},e.description||e.title||e.value)})),e)}}])&&ee(e.prototype,t),n&&ee(e,n),o}();function ie(e){return(ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ae(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ce(e,t){return(ce=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ue(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=se(i);return t=a?(e=se(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==ie(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function se(e){return(se=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var le=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ce(e,t)}(o,h);var e,t,n,r=ue(o);function o(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return e=o,(t=[{key:"render",value:function(){var t=this,e=null;return t.state.error&&(e=u.a.createElement("div",{className:"osc-form-error"},"Je hebt nog niets ingevuld")),u.a.createElement("div",{className:"osc-textinput"},u.a.createElement("input",{type:"text",value:this.props.value,disabled:this.props.disabled,placeholder:this.config.placeholder,onChange:function(){return t.handleOnChange({value:t.input.value})},ref:function(e){return t.input=e}}),e)}}])&&ae(e.prototype,t),n&&ae(e,n),o}();function fe(e){return(fe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function pe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function de(e,t){return(de=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function he(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=ge(i);return t=a?(e=ge(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==fe(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function ge(e){return(ge=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var me=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&de(e,t)}(o,h);var e,t,n,r=he(o);function o(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return e=o,(t=[{key:"render",value:function(){var t=this,e=null;return t.state.error&&(e=u.a.createElement("div",{className:"osc-form-error"},"Je hebt nog niets ingevuld")),u.a.createElement("div",{className:"osc-textarea"},u.a.createElement("textarea",{value:this.props.value,disabled:this.props.disabled,placeholder:this.config.placeholder,onChange:function(){return t.handleOnChange({value:t.input.value})},ref:function(e){return t.input=e}},this.state.value),e)}}])&&pe(e.prototype,t),n&&pe(e,n),o}();function ye(e){return(ye="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ve(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function be(o){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?ve(Object(i),!0).forEach(function(e){var t,n,r;t=o,r=i[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):ve(Object(i)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(i,e))})}return o}function we(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ee(e,t){return(Ee=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Oe(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=Se(i);return t=a?(e=Se(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==ye(r)&&"function"!=typeof r?_e(n):r}}function _e(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Se(e){return(Se=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Te=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ee(e,t)}(o,a["a"]);var e,t,n,r=Oe(o);function o(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var n=_e(t=r.call(this,e));return n.defaultConfig={inputType:null,validateAction:null,changeAction:null,required:!1,title:null,description:null,choices:[]},n.config=i.a.recursive(n.defaultConfig,n.config,e.config||{}),n.config.name=n.config.name||n.config.title.toLowerCase(),n.state={value:e.value||void 0},n.handleOnChange=n.handleOnChange.bind(n),n.onChange=e.onChange,t}return e=o,(t=[{key:"validate",value:function(e){var t=e.showErrors;return!this.input||this.input.validate({showErrors:t})}},{key:"handleOnChange",value:function(e){"function"==typeof this.onChange&&this.onChange(e)}},{key:"render",value:function(){var t=this,e=null;t.config.title&&(e=React.createElement("h3",{className:"osc-form-title"},t.config.title));var n=null;t.config.description&&(n=React.createElement("div",{className:"osc-form-description",dangerouslySetInnerHTML:{__html:t.config.description}}));var r=null;switch(t.config.inputType){case"hidden":r=React.createElement(w,{config:t.config,value:this.props.value||this.config.value,onChange:t.handleOnChange,ref:function(e){return t.input=e}});break;case"html-with-counter":case"htmlarea-with-counter":r=React.createElement(U,{config:be(be({},t.config),{},{inputType:"htmlarea"}),value:this.props.value||this.config.value,onChange:t.handleOnChange,ref:function(e){return t.input=e}});break;case"image-upload":r=React.createElement(C,{config:t.config,value:this.props.value||this.config.value,onChange:t.handleOnChange,ref:function(e){return t.input=e}});break;case"input-with-counter":case"text-with-counter":r=React.createElement(U,{config:be({inputType:"input"},t.config),value:this.props.value||this.config.value,onChange:t.handleOnChange,ref:function(e){return t.input=e}});break;case"postcode":r=React.createElement(Y,{config:t.config,onChange:t.handleOnChange,ref:function(e){return t.input=e}});break;case"radios":r=React.createElement(z,{config:t.config,value:this.props.value||this.config.value,onChange:t.handleOnChange,ref:function(e){return t.input=e}});break;case"select":case"multiple-choice":r=React.createElement(oe,{config:t.config,value:this.props.value||this.config.value,onChange:t.handleOnChange,ref:function(e){return t.input=e}});break;case"text":r=React.createElement(le,{config:t.config,value:this.props.value||this.config.value,onChange:t.handleOnChange,ref:function(e){return t.input=e}});break;case"textarea":r=React.createElement(me,{config:t.config,value:this.props.value||this.config.value,onChange:t.handleOnChange,ref:function(e){return t.input=e}});break;case"textarea-with-counter":r=React.createElement(U,{config:be(be({},t.config),{},{inputType:"textarea"}),value:this.props.value||this.config.value,onChange:t.handleOnChange,ref:function(e){return t.input=e}})}return React.createElement("div",{id:t.id,ref:function(e){return t.instance=e},className:"osc-form-field"},e,n,r)}}])&&we(e.prototype,t),n&&we(e,n),o}();function Ce(e){return(Ce="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Re(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function xe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Pe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ke(e,t){return(ke=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ae(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=je(i);return t=a?(e=je(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==Ce(r)&&"function"!=typeof r?Ie(n):r}}function Ie(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function je(e){return(je=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var De=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ke(e,t)}(o,a["a"]);var e,t,n,r=Ae(o);function o(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var n=Ie(t=r.call(this,e));return n.defaultConfig={title:null,intro:null,fields:[]},n.config=i.a.recursive(n.defaultConfig,n.config,e.config||{}),n.state={values:e.values||{}},n.handleOnChange=n.handleOnChange.bind(Ie(t)),n.fields=[],t}return e=o,(t=[{key:"getValues",value:function(){return this.state.values}},{key:"validate",value:function(e){var t=e.showErrors,n=!0,r=null;return this.fields.forEach(function(e){e.validate({showErrors:t})||(n=!1,r=r||e)}),r&&r.instance&&r.instance.scrollIntoView&&r.instance.scrollIntoView({behavior:"smooth"}),n}},{key:"handleOnChange",value:function(e){var t=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Re(Object(n),!0).forEach(function(e){xe(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Re(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},this.state.values);t[e.name]=e.value,this.setState({values:t})}},{key:"render",value:function(){var n=this,e=null;n.config.title&&(e=React.createElement("h2",{className:"osc-form-title"},n.config.title));var t=null;n.config.intro&&(t=React.createElement("div",{className:"osc-form-intro",dangerouslySetInnerHTML:{__html:n.config.intro}}));var r=null;return n.config.fields&&n.config.fields.length&&(r=React.createElement("div",{className:"osc-form-fields"},n.config.fields.map(function(e,t){return React.createElement(Te,xe({config:e,onChange:n.handleOnChange,ref:function(e){return n.input=e},key:"osc-form-field-".concat(t)},"ref",function(e){n.fields[t]=e}))}))),React.createElement("div",{id:n.divId,className:"osc-form",ref:function(e){return n.instance=e}},e,t,r)}}])&&Pe(e.prototype,t),n&&Pe(e,n),o}();function Be(e){return(Be="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Le(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ne(e,t){return(Ne=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Me(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=Ue(i);return t=a?(e=Ue(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==Be(r)&&"function"!=typeof r?Fe(n):r}}function Fe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ue(e){return(Ue=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var qe=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ne(e,t)}(o,u.a.Component);var e,t,n,r=Me(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=r.call(this,e)).state={value:t.props.value,touched:t.props.touched||!1},t.handleChange=t.handleChange.bind(Fe(t)),t}return e=o,(t=[{key:"handleChange",value:function(e){var t=e.target.value;"function"==typeof this.props.onChange&&this.props.onChange(t),this.setState({value:t,touched:!0})}},{key:"doTouch",value:function(){"function"==typeof this.props.onChange&&this.props.onChange(50),this.setState({touched:!0})}},{key:"calcProgress",value:function(e,t,n){return 2*(n-e)/(t-e)-1}},{key:"render",value:function(){var t=this,e=t.state,n=e.value,r=e.touched,o=t.props,i=o.min,a=o.max,c=o.step;return u.a.createElement("div",{className:"".concat(t.props.className," osc-slider")},u.a.createElement("div",{className:"osc-slider-track-container"},u.a.createElement("div",{className:"osc-slider-track"}),u.a.createElement("div",{className:"osc-slider-track-progress-container"},u.a.createElement("div",{className:"osc-slider-track-progress",style:{transform:"scaleX("+t.calcProgress(i,a,n)+")"}})),u.a.createElement("div",{className:"osc-slider-track-dot-end osc-slider-track-dot-left"}),u.a.createElement("div",{className:"osc-slider-track-dot-start osc-slider-track-dot-center"}),u.a.createElement("div",{className:"osc-slider-track-dot-end osc-slider-track-dot-right"})),u.a.createElement("input",{type:"range",min:i,max:a,step:c,value:n,onClick:function(){r||t.doTouch()},onChange:t.handleChange,className:r?"osc-slider-input-range":"osc-slider-input-range osc-slider-untouched",ref:function(e){return t.input=e}}))}}])&&Le(e.prototype,t),n&&Le(e,n),o}();t.a={Form:De,FormField:Te,Hidden:w,ImageUpload:C,InputWithCounter:U,Postcode:Y,Radios:z,Select:oe,Text:le,Textarea:me,Slider:qe}},function(e,t,n){"use strict";(function(i){var t,n,r="URLSearchParams"in self,o="Symbol"in self&&"iterator"in Symbol,c="FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(e){return!1}}(),a="FormData"in self,u="ArrayBuffer"in self;function s(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function l(e){return"string"!=typeof e&&(e=String(e)),e}function e(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return o&&(e[Symbol.iterator]=function(){return e}),e}function f(t){this.map={},t instanceof f?t.forEach(function(e,t){this.append(t,e)},this):Array.isArray(t)?t.forEach(function(e){this.append(e[0],e[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function p(e){if(e.bodyUsed)return i.reject(new TypeError("Already read"));e.bodyUsed=!0}function d(n){return new i(function(e,t){n.onload=function(){e(n.result)},n.onerror=function(){t(n.error)}})}function h(e){var t=new FileReader,n=d(t);return t.readAsArrayBuffer(e),n}function g(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function m(){return this.bodyUsed=!1,this._initBody=function(e){var t;(this._bodyInit=e)?"string"==typeof e?this._bodyText=e:c&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:a&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:r&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():u&&c&&((t=e)&&DataView.prototype.isPrototypeOf(t))?(this._bodyArrayBuffer=g(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):u&&(ArrayBuffer.prototype.isPrototypeOf(e)||n(e))?this._bodyArrayBuffer=g(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},c&&(this.blob=function(){var e=p(this);if(e)return e;if(this._bodyBlob)return i.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return i.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return i.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?p(this)||i.resolve(this._bodyArrayBuffer):this.blob().then(h)}),this.text=function(){var e,t,n,r=p(this);if(r)return r;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,n=d(t),t.readAsText(e),n;if(this._bodyArrayBuffer)return i.resolve(function(e){for(var t=new Uint8Array(e),n=new Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return i.resolve(this._bodyText)},a&&(this.formData=function(){return this.text().then(b)}),this.json=function(){return this.text().then(JSON.parse)},this}u&&(t=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],n=ArrayBuffer.isView||function(e){return e&&-1<t.indexOf(Object.prototype.toString.call(e))}),f.prototype.append=function(e,t){e=s(e),t=l(t);var n=this.map[e];this.map[e]=n?n+", "+t:t},f.prototype.delete=function(e){delete this.map[s(e)]},f.prototype.get=function(e){return e=s(e),this.has(e)?this.map[e]:null},f.prototype.has=function(e){return this.map.hasOwnProperty(s(e))},f.prototype.set=function(e,t){this.map[s(e)]=l(t)},f.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},f.prototype.keys=function(){var n=[];return this.forEach(function(e,t){n.push(t)}),e(n)},f.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),e(t)},f.prototype.entries=function(){var n=[];return this.forEach(function(e,t){n.push([t,e])}),e(n)},o&&(f.prototype[Symbol.iterator]=f.prototype.entries);var y=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function v(e,t){var n,r,o=(t=t||{}).body;if(e instanceof v){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new f(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,o||null==e._bodyInit||(o=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new f(t.headers)),this.method=(n=t.method||this.method||"GET",r=n.toUpperCase(),-1<y.indexOf(r)?r:n),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function b(e){var o=new FormData;return e.trim().split("&").forEach(function(e){var t,n,r;e&&(n=(t=e.split("=")).shift().replace(/\+/g," "),r=t.join("=").replace(/\+/g," "),o.append(decodeURIComponent(n),decodeURIComponent(r)))}),o}function w(e,t){t=t||{},this.type="default",this.status=void 0===t.status?200:t.status,this.ok=200<=this.status&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new f(t.headers),this.url=t.url||"",this._initBody(e)}v.prototype.clone=function(){return new v(this,{body:this._bodyInit})},m.call(v.prototype),m.call(w.prototype),w.prototype.clone=function(){return new w(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new f(this.headers),url:this.url})},w.error=function(){var e=new w(null,{status:0,statusText:""});return e.type="error",e};var E=[301,302,303,307,308];w.redirect=function(e,t){if(-1===E.indexOf(t))throw new RangeError("Invalid status code");return new w(null,{status:t,headers:{location:e}})};var O=self.DOMException;try{new O}catch(e){(O=function(e,t){this.message=e,this.name=t;var n=Error(e);this.stack=n.stack}).prototype=Object.create(Error.prototype),O.prototype.constructor=O}function _(o,a){return new i(function(r,e){var t=new v(o,a);if(t.signal&&t.signal.aborted)return e(new O("Aborted","AbortError"));var i=new XMLHttpRequest;function n(){i.abort()}i.onload=function(){var e,o,t={status:i.status,statusText:i.statusText,headers:(e=i.getAllResponseHeaders()||"",o=new f,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(e){var t,n=e.split(":"),r=n.shift().trim();r&&(t=n.join(":").trim(),o.append(r,t))}),o)};t.url="responseURL"in i?i.responseURL:t.headers.get("X-Request-URL");var n="response"in i?i.response:i.responseText;r(new w(n,t))},i.onerror=function(){e(new TypeError("Network request failed"))},i.ontimeout=function(){e(new TypeError("Network request failed"))},i.onabort=function(){e(new O("Aborted","AbortError"))},i.open(t.method,t.url,!0),"include"===t.credentials?i.withCredentials=!0:"omit"===t.credentials&&(i.withCredentials=!1),"responseType"in i&&c&&(i.responseType="blob"),t.headers.forEach(function(e,t){i.setRequestHeader(t,e)}),t.signal&&(t.signal.addEventListener("abort",n),i.onreadystatechange=function(){4===i.readyState&&t.signal.removeEventListener("abort",n)}),i.send(void 0===t._bodyInit?null:t._bodyInit)})}_.polyfill=!0,self.fetch||(self.fetch=_,self.Headers=f,self.Request=v,self.Response=w)}).call(this,n(11))},function(n,e,t){(function(e){function t(e){return e&&e.Math==Math&&e}n.exports=t("object"==typeof globalThis&&globalThis)||t("object"==typeof window&&window)||t("object"==typeof self&&self)||t("object"==typeof e&&e)||Function("return this")()}).call(this,t(9))},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t){var n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},,function(e,t,n){e.exports=n(14).Promise},function(e,t,n){var r=n(13);e.exports=!r(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,fe){(function(ue,se){var le;e.exports=function(){"use strict";function n(e){return typeof e==="function"||typeof e==="object"&&e!==null}function s(e){return typeof e==="function"}var e=undefined;if(!Array.isArray){e=function(e){return Object.prototype.toString.call(e)==="[object Array]"}}else{e=Array.isArray}var r=e,o=0,i=undefined,a=undefined,c=function e(t,n){w[o]=t;w[o+1]=n;o+=2;if(o===2){if(a){a(E)}else{_()}}};function t(e){a=e}function u(e){c=e}var l=typeof window!=="undefined"?window:undefined,f=l||{},p=f.MutationObserver||f.WebKitMutationObserver,d=typeof self==="undefined"&&typeof ue!=="undefined"&&{}.toString.call(ue)==="[object process]",h=typeof Uint8ClampedArray!=="undefined"&&typeof importScripts!=="undefined"&&typeof MessageChannel!=="undefined";function g(){return function(){return ue.nextTick(E)}}function m(){return function(){i(E)}}function y(){var e=0;var t=new p(E);var n=document.createTextNode("");t.observe(n,{characterData:true});return function(){n.data=e=++e%2}}function v(){var e=new MessageChannel;e.port1.onmessage=E;return function(){return e.port2.postMessage(0)}}function b(){var e=setTimeout;return function(){return e(E,1)}}var w=new Array(1e3);function E(){for(var e=0;e<o;e+=2){var t=w[e];var n=w[e+1];t(n);w[e]=undefined;w[e+1]=undefined}o=0}function O(){try{var e=le;var t=fe(16);i=t.runOnLoop||t.runOnContext;return m()}catch(e){return b()}}var _=undefined;if(d){_=g()}else if(p){_=y()}else if(h){_=v()}else if(l===undefined&&"function"==="function"){_=O()}else{_=b()}function S(e,t){var n=arguments;var r=this;var o=new this.constructor(R);if(o[C]===undefined){Y(o)}var i=r._state;if(i){(function(){var e=n[i-1];c(function(){return Q(i,o,e,r._result)})})()}else{V(r,o,e,t)}return o}function T(e){var t=this;if(e&&typeof e==="object"&&e.constructor===t){return e}var n=new t(R);F(n,e);return n}var C=Math.random().toString(36).substring(16);function R(){}var x=void 0,P=1,k=2,A=new W;function I(){return new TypeError("You cannot resolve a promise with itself")}function j(){return new TypeError("A promises callback cannot return that same promise.")}function D(e){try{return e.then}catch(e){A.error=e;return A}}function B(e,t,n,r){try{e.call(t,n,r)}catch(e){return e}}function L(e,r,o){c(function(t){var n=false;var e=B(o,r,function(e){if(n){return}n=true;if(r!==e){F(t,e)}else{q(t,e)}},function(e){if(n){return}n=true;G(t,e)},"Settle: "+(t._label||" unknown promise"));if(!n&&e){n=true;G(t,e)}},e)}function N(t,e){if(e._state===P){q(t,e._result)}else if(e._state===k){G(t,e._result)}else{V(e,undefined,function(e){return F(t,e)},function(e){return G(t,e)})}}function M(e,t,n){if(t.constructor===e.constructor&&n===S&&t.constructor.resolve===T){N(e,t)}else{if(n===A){G(e,A.error)}else if(n===undefined){q(e,t)}else if(s(n)){L(e,t,n)}else{q(e,t)}}}function F(e,t){if(e===t){G(e,I())}else if(n(t)){M(e,t,D(t))}else{q(e,t)}}function U(e){if(e._onerror){e._onerror(e._result)}H(e)}function q(e,t){if(e._state!==x){return}e._result=t;e._state=P;if(e._subscribers.length!==0){c(H,e)}}function G(e,t){if(e._state!==x){return}e._state=k;e._result=t;c(U,e)}function V(e,t,n,r){var o=e._subscribers;var i=o.length;e._onerror=null;o[i]=t;o[i+P]=n;o[i+k]=r;if(i===0&&e._state){c(H,e)}}function H(e){var t=e._subscribers;var n=e._state;if(t.length===0){return}var r=undefined,o=undefined,i=e._result;for(var a=0;a<t.length;a+=3){r=t[a];o=t[a+n];if(r){Q(n,r,o,i)}else{o(i)}}e._subscribers.length=0}function W(){this.error=null}var z=new W;function K(e,t){try{return e(t)}catch(e){z.error=e;return z}}function Q(e,t,n,r){var o=s(n),i=undefined,a=undefined,c=undefined,u=undefined;if(o){i=K(n,r);if(i===z){u=true;a=i.error;i=null}else{c=true}if(t===i){G(t,j());return}}else{i=r;c=true}if(t._state!==x){}else if(o&&c){F(t,i)}else if(u){G(t,a)}else if(e===P){q(t,i)}else if(e===k){G(t,i)}}function X(n,e){try{e(function e(t){F(n,t)},function e(t){G(n,t)})}catch(e){G(n,e)}}var J=0;function Z(){return J++}function Y(e){e[C]=J++;e._state=undefined;e._result=undefined;e._subscribers=[]}function $(e,t){this._instanceConstructor=e;this.promise=new e(R);if(!this.promise[C]){Y(this.promise)}if(r(t)){this._input=t;this.length=t.length;this._remaining=t.length;this._result=new Array(this.length);if(this.length===0){q(this.promise,this._result)}else{this.length=this.length||0;this._enumerate();if(this._remaining===0){q(this.promise,this._result)}}}else{G(this.promise,ee())}}function ee(){return new Error("Array Methods must be provided an Array")}function te(e){return new $(this,e).promise}function ne(o){var i=this;if(r(o))return new i(function(e,t){for(var n=o.length,r=0;r<n;r++)i.resolve(o[r]).then(e,t)});else return new i(function(e,t){return t(new TypeError("You must pass an array to race."))})}function re(e){var t=new this(R);return G(t,e),t}function oe(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function ie(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function ae(e){this[C]=Z();this._result=this._state=undefined;this._subscribers=[];if(R!==e){typeof e!=="function"&&oe();this instanceof ae?X(this,e):ie()}}function ce(){var e=undefined;if(typeof se!=="undefined"){e=se}else if(typeof self!=="undefined"){e=self}else{try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}}var t=e.Promise;if(t){var n=null;try{n=Object.prototype.toString.call(t.resolve())}catch(e){}if(n==="[object Promise]"&&!t.cast){return}}e.Promise=ae}return $.prototype._enumerate=function(){for(var e=this.length,t=this._input,n=0;this._state===x&&n<e;n++)this._eachEntry(t[n],n)},$.prototype._eachEntry=function(t,e){var n,r,o=this._instanceConstructor,i=o.resolve;i===T?(n=D(t))===S&&t._state!==x?this._settledAt(t._state,e,t._result):"function"!=typeof n?(this._remaining--,this._result[e]=t):o===ae?(M(r=new o(R),t,n),this._willSettleAt(r,e)):this._willSettleAt(new o(function(e){return e(t)}),e):this._willSettleAt(i(t),e)},$.prototype._settledAt=function(e,t,n){var r=this.promise;r._state===x&&(this._remaining--,e===k?G(r,n):this._result[t]=n),0===this._remaining&&q(r,this._result)},$.prototype._willSettleAt=function(e,t){var n=this;V(e,void 0,function(e){return n._settledAt(P,t,e)},function(e){return n._settledAt(k,t,e)})},ae.all=function(e){return new $(this,e).promise},ae.race=function(o){var i=this;return r(o)?new i(function(e,t){for(var n=o.length,r=0;r<n;r++)i.resolve(o[r]).then(e,t)}):new i(function(e,t){return t(new TypeError("You must pass an array to race."))})},ae.resolve=T,ae.reject=function(e){var t=new this(R);return G(t,e),t},ae._setScheduler=function(e){a=e},ae._setAsap=function(e){c=e},ae._asap=c,ae.prototype={constructor:ae,then:S,catch:function(e){return this.then(null,e)}},ce(),ae.polyfill=ce,ae.Promise=ae}()}).call(this,fe(15),fe(9))},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function c(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var u,s=[],l=!1,f=-1;function p(){l&&u&&(l=!1,u.length?s=u.concat(s):f=-1,s.length&&d())}function d(){if(!l){var e=c(p);l=!0;for(var t=s.length;t;){for(u=s,s=[];++f<t;)u&&u[f].run();f=-1,t=s.length}u=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function g(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new h(e,t)),1!==s.length||l||c(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=g,o.addListener=g,o.once=g,o.off=g,o.removeListener=g,o.removeAllListeners=g,o.emit=g,o.prependListener=g,o.prependOnceListener=g,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t){},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return OpenStadComponentLightbox});var merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),merge__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),react_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3),react_dom__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(n){var r=_isNativeReflectConstruct();return function(){var e,t=_getPrototypeOf(n);return _possibleConstructorReturn(this,r?(e=_getPrototypeOf(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments))}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var OpenStadComponentLightbox=function(_React$Component){_inherits(OpenStadComponentLightbox,_React$Component);var _super=_createSuper(OpenStadComponentLightbox);function OpenStadComponentLightbox(e){var t;return _classCallCheck(this,OpenStadComponentLightbox),(t=_super.call(this,e)).defaultConfig={},t.config=merge__WEBPACK_IMPORTED_MODULE_0___default.a.recursive(t.defaultConfig,t.config,e.config||{}),t.state={images:[],startIndex:0},t.recalcSizes=t.recalcSizes.bind(_assertThisInitialized(t)),t}return _createClass(OpenStadComponentLightbox,[{key:"componentDidMount",value:function(){var t=this;document.addEventListener("osc-show-light-box",function(e){t.showLightbox(e.detail)}),document.body.appendChild(this.instance)}},{key:"showLightbox",value:function showLightbox(data){var self=this,aspectRatio;try{aspectRatio=eval(data.aspectRatio.replace&&data.aspectRatio.replace("x","/"))}catch(e){}"number"!=typeof aspectRatio&&(aspectRatio=16/9),self.setState({images:data.images,startIndex:data.startIndex,aspectRatio:aspectRatio},function(){self.instance.style.display="block",self.recalcSizes()}),window.addEventListener("resize",self.recalcSizes)}},{key:"hideLightbox",value:function(){this.instance.style.display="none",window.removeEventListener("resize",self.recalcSizes)}},{key:"showImage",value:function(e,t){e.stopPropagation(),this.mainImage.src=t}},{key:"recalcSizes",value:function(){var e,t,n,r,o,i,a=this;a.mainContainer&&((e=a.mainContainer.offsetWidth)/(t=a.mainContainer.offsetHeight)>a.state.aspectRatio?(n=.8*t,a.mainImageContainer.style.height=n+"px",a.mainImageContainer.style.width=a.state.aspectRatio*n+"px",a.mainImageContainer.style.top=(t-n)/2+"px",a.mainImageContainer.style.left=(e-a.state.aspectRatio*n)/2+"px"):(r=e,a.mainImageContainer.style.width=r+"px",a.mainImageContainer.style.height=1/a.state.aspectRatio*r+"px",a.mainImageContainer.style.top=(t-1/a.state.aspectRatio*r)/2+"px",a.mainImageContainer.style.left=0),a.mainImage.style.width=a.mainImageContainer.style.width,a.mainImage.style.height=a.mainImageContainer.style.height,o=a.state.aspectRatio*a.navigationContainer.offsetHeight,(i=a.state.images.length*o+20*a.state.images.length)>a.navigationContainer.offsetWidth&&(i=a.navigationContainer.offsetWidth,o=i/a.state.images.length-20),a.navigationContainer.style.width=i+"px",a.state.images.map(function(e,t){var n=parseInt(o);a["lighbox-image-container-".concat(t)].style.width=n+"px",a["lighbox-image-container-".concat(t)].style.height=parseInt(1/a.state.aspectRatio*n)+"px",a["lighbox-image-".concat(t)].style.width=a["lighbox-image-container-".concat(t)].style.width,a["lighbox-image-".concat(t)].style.height=a["lighbox-image-container-".concat(t)].style.height}))}},{key:"render",value:function(){var e=this,r=this;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"osc-lightbox",onClick:function(){e.hideLightbox()},ref:function(e){return r.instance=e}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"osc-close-button",onClick:function(e){return r.hideLightbox(e)}}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"osc-lightbox-main-container",ref:function(e){return r.mainContainer=e}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"osc-image-container",ref:function(e){return r.mainImageContainer=e}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img",{src:r.state.images[r.state.startIndex]&&r.state.images[r.state.startIndex].src,ref:function(e){return r.mainImage=e}}))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"osc-lightbox-navigation-container"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"osc-lightbox-navigation",ref:function(e){return r.navigationContainer=e}},r.state.images.map(function(t,n){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"osc-image-container",style:{backgroundImage:"url(".concat(t.src,")")},onClick:function(e){return r.showImage(e,t.src)},key:"lighbox-image-container-".concat(n),ref:function(e){return r["lighbox-image-container-".concat(n)]=e}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img",{src:t.src,ref:function(e){return r["lighbox-image-".concat(n)]=e}}))}))))}}]),OpenStadComponentLightbox}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component)},,,function(e,t,n){var r=n(12),o=n(23),i=n(41);e.exports=r?function(e,t,n){return o.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var r=n(12),o=n(46),i=n(24),a=n(45),c=Object.defineProperty;t.f=r?c:function(e,t,n){if(i(e),t=a(t,!0),i(n),o)try{return c(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var r=n(18);e.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return h}),n.d(t,"PreviousNextButtonBlock",function(){return h});n(6);var r=n(0),a=n.n(r),o=n(3),i=n.n(o),c=(n(94),n(1)),u=n.n(c);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=d(i);return t=a?(e=d(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==s(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(o,a.a.Component);var e,t,n,r=p(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=r.call(this,e)).defaultConfig={previousAction:e.previousAction,nextAction:e.nextAction,previousUrl:e.previousUrl,nextUrl:e.nextUrl,previousLabel:e.previousLabel||"Vorige",nextLabel:e.nextLabel||"Volgende"},t.config=u.a.recursive(t.defaultConfig,t.config,e.config||{}),t}return e=o,(t=[{key:"render",value:function(){var e,t,n=this,r=this,o=this.config.previousAction;this.config.previousUrl&&(o=function(){document.location.href="".concat(n.config.previousUrl)}),o&&(e=a.a.createElement("div",{className:"osc-previous-button",onClick:function(e){o(e)}},this.config.previousLabel));var i=this.config.nextAction;return this.config.nextUrl&&(i=function(){document.location.href="".concat(n.config.nextUrl)}),i&&(t=a.a.createElement("div",{className:"osc-next-button",onClick:function(e){i(e)}},this.config.nextLabel)),a.a.createElement("div",{className:"osc-previous-next-button-block",ref:function(e){return r.instance=e}},e,t)}}])&&l(e.prototype,t),n&&l(e,n),o}();h.renderElement=function(e,t){var n=e.attributes;i.a.render(a.a.createElement(h,{attributes:n,config:t}),e)}},,,function(e,t,n){var r=n(42),o=n(44);e.exports=function(e){return r(o(e))}},function(e,t,n){var r=n(7),o=n(22);e.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(e,t){e.exports={}},function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(e,t,n){},function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);n(6),n(95);var r=n(0),o=n.n(r),i=n(3),a=n.n(i),c=(n(97),n(19));n.d(t,"default",function(){return c.a}),n.d(t,"Lightbox",function(){return c.a}),c.a.renderElement=function(e,t){var n=e.attributes;a.a.render(o.a.createElement(c.a,{attributes:n,config:t}),e)}},,,,function(e,t,n){var r=n(12),o=n(72),i=n(41),a=n(28),c=n(45),u=n(8),s=n(46),l=Object.getOwnPropertyDescriptor;t.f=r?l:function(e,t){if(e=a(e),t=c(t,!0),s)try{return l(e,t)}catch(e){}if(u(e,t))return i(!o.f.call(e,t),e[t])}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){var r=n(13),o=n(43),i="".split;e.exports=r(function(){return!Object("z").propertyIsEnumerable(0)})?function(e){return"String"==o(e)?i.call(e,""):Object(e)}:Object},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},function(e,t,n){var o=n(18);e.exports=function(e,t){if(!o(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!o(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!o(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!o(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}},function(e,t,n){var r=n(12),o=n(13),i=n(47);e.exports=!r&&!o(function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){var r=n(7),o=n(18),i=r.document,a=o(i)&&o(i.createElement);e.exports=function(e){return a?i.createElement(e):{}}},function(e,t,n){var r=n(49),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(e){return o.call(e)}),e.exports=r.inspectSource},function(e,t,n){var r=n(7),o=n(29),i="__core-js_shared__",a=r[i]||o(i,{});e.exports=a},function(e,t,n){var r=n(51),o=n(52),i=r("keys");e.exports=function(e){return i[e]||(i[e]=o(e))}},function(e,t,n){var r=n(76),o=n(49);(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++n+r).toString(36)}},function(e,t,n){function r(e){return"function"==typeof e?e:void 0}var o=n(79),i=n(7);e.exports=function(e,t){return arguments.length<2?r(o[e])||r(i[e]):o[e]&&o[e][t]||i[e]&&i[e][t]}},function(e,t,n){var a=n(8),c=n(28),u=n(81).indexOf,s=n(30);e.exports=function(e,t){var n,r=c(e),o=0,i=[];for(n in r)!a(s,n)&&a(r,n)&&i.push(n);for(;t.length>o;)a(r,n=t[o++])&&(~u(i,n)||i.push(n));return i}},function(e,t,n){var r=n(56),o=Math.min;e.exports=function(e){return 0<e?o(r(e),9007199254740991):0}},function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(0<e?r:n)(e)}},function(e,t,n){var i=n(85);e.exports=function(r,o,e){if(i(r),void 0===o)return r;switch(e){case 0:return function(){return r.call(o)};case 1:return function(e){return r.call(o,e)};case 2:return function(e,t){return r.call(o,e,t)};case 3:return function(e,t,n){return r.call(o,e,t,n)}}return function(){return r.apply(o,arguments)}}},function(e,t,n){var r=n(7),o=n(51),i=n(8),a=n(52),c=n(59),u=n(89),s=o("wks"),l=r.Symbol,f=u?l:l&&l.withoutSetter||a;e.exports=function(e){return i(s,e)||(c&&i(l,e)?s[e]=l[e]:s[e]=f("Symbol."+e)),s[e]}},function(e,t,n){var r=n(13);e.exports=!!Object.getOwnPropertySymbols&&!r(function(){return!String(Symbol())})},,,function(e,t,n){var l=n(7),f=n(40).f,p=n(22),d=n(73),h=n(29),g=n(77),m=n(84);e.exports=function(e,t){var n,r,o,i,a=e.target,c=e.global,u=e.stat,s=c?l:u?l[a]||h(a,{}):(l[a]||{}).prototype;if(s)for(n in t){if(o=t[n],r=e.noTargetGet?(i=f(s,n))&&i.value:s[n],!m(c?n:a+(u?".":"#")+n,e.forced)&&void 0!==r){if(typeof o==typeof r)continue;g(o,r)}(e.sham||r&&r.sham)&&p(o,"sham",!0),d(s,n,o,e)}}},function(e,t,n){function r(d){var h=1==d,g=2==d,m=3==d,y=4==d,v=6==d,b=5==d||v;return function(e,t,n,r){for(var o,i,a=O(e),c=E(a),u=w(t,n,3),s=_(c.length),l=0,f=r||S,p=h?f(e,s):g?f(e,0):void 0;l<s;l++)if((b||l in c)&&(i=u(o=c[l],l,a),d))if(h)p[l]=i;else if(i)switch(d){case 3:return!0;case 5:return o;case 6:return l;case 2:T.call(p,o)}else if(y)return!1;return v?-1:m||y?y:p}}var w=n(57),E=n(42),O=n(86),_=n(55),S=n(87),T=[].push;e.exports={forEach:r(0),map:r(1),filter:r(2),some:r(3),every:r(4),find:r(5),findIndex:r(6)}},function(e,t,n){var r=n(58),o=n(90),i=n(23),a=r("unscopables"),c=Array.prototype;null==c[a]&&i.f(c,a,{configurable:!0,value:o(null)}),e.exports=function(e){c[a][e]=!0}},function(e,t,n){function a(e){throw e}var c=n(12),u=n(13),s=n(8),l=Object.defineProperty,f={};e.exports=function(e,t){if(s(f,e))return f[e];var n=[][e],r=!!s(t=t||{},"ACCESSORS")&&t.ACCESSORS,o=s(t,0)?t[0]:a,i=s(t,1)?t[1]:void 0;return f[e]=!!n&&!u(function(){if(r&&!c)return!0;var e={length:-1};r?l(e,1,{enumerable:!0,get:a}):e[1]=1,n.call(e,o,i)})}},function(e,t,n){var r=n(7),o=n(57),i=Function.call;e.exports=function(e,t,n){return o(i,r[e].prototype[t],n)}},,,,,function(e,t){!function(){if("undefined"!=typeof window)try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default")}catch(e){function t(e,t){var n,r;return(t=t||{}).bubbles=!!t.bubbles,t.cancelable=!!t.cancelable,(n=document.createEvent("CustomEvent")).initCustomEvent(e,t.bubbles,t.cancelable,t.detail),r=n.preventDefault,n.preventDefault=function(){r.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},n}t.prototype=window.Event.prototype,window.CustomEvent=t}}()},function(e,t,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);t.f=i?function(e){var t=o(this,e);return!!t&&t.enumerable}:r},function(e,t,n){var c=n(7),u=n(22),s=n(8),l=n(29),r=n(48),o=n(74),i=o.get,f=o.enforce,p=String(String).split("String");(e.exports=function(e,t,n,r){var o=!!r&&!!r.unsafe,i=!!r&&!!r.enumerable,a=!!r&&!!r.noTargetGet;"function"==typeof n&&("string"!=typeof t||s(n,"name")||u(n,"name",t),f(n).source=p.join("string"==typeof t?t:"")),e!==c?(o?!a&&e[t]&&(i=!0):delete e[t],i?e[t]=n:u(e,t,n)):i?e[t]=n:l(t,n)})(Function.prototype,"toString",function(){return"function"==typeof this&&i(this).source||r(this)})},function(e,t,n){var r,o,i,a,c,u,s,l,f=n(75),p=n(7),d=n(18),h=n(22),g=n(8),m=n(50),y=n(30),v=p.WeakMap;s=f?(r=new v,o=r.get,i=r.has,a=r.set,c=function(e,t){return a.call(r,e,t),t},u=function(e){return o.call(r,e)||{}},function(e){return i.call(r,e)}):(y[l=m("state")]=!0,c=function(e,t){return h(e,l,t),t},u=function(e){return g(e,l)?e[l]:{}},function(e){return g(e,l)}),e.exports={set:c,get:u,has:s,enforce:function(e){return s(e)?u(e):c(e,{})},getterFor:function(n){return function(e){var t;if(!d(e)||(t=u(e)).type!==n)throw TypeError("Incompatible receiver, "+n+" required");return t}}}},function(e,t,n){var r=n(7),o=n(48),i=r.WeakMap;e.exports="function"==typeof i&&/native code/.test(o(i))},function(e,t){e.exports=!1},function(e,t,n){var c=n(8),u=n(78),s=n(40),l=n(23);e.exports=function(e,t){for(var n=u(t),r=l.f,o=s.f,i=0;i<n.length;i++){var a=n[i];c(e,a)||r(e,a,o(t,a))}}},function(e,t,n){var r=n(53),o=n(80),i=n(83),a=n(24);e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(a(e)),n=i.f;return n?t.concat(n(e)):t}},function(e,t,n){var r=n(7);e.exports=r},function(e,t,n){var r=n(54),o=n(31).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},function(e,t,n){function r(c){return function(e,t,n){var r,o=u(e),i=s(o.length),a=l(n,i);if(c&&t!=t){for(;a<i;)if((r=o[a++])!=r)return!0}else for(;a<i;a++)if((c||a in o)&&o[a]===t)return c||a||0;return!c&&-1}}var u=n(28),s=n(55),l=n(82);e.exports={includes:r(!0),indexOf:r(!1)}},function(e,t,n){var r=n(56),o=Math.max,i=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):i(n,t)}},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t,n){function r(e,t){var n=c[a(e)];return n==s||n!=u&&("function"==typeof t?o(t):!!t)}var o=n(13),i=/#|\.prototype\./,a=r.normalize=function(e){return String(e).replace(i,".").toLowerCase()},c=r.data={},u=r.NATIVE="N",s=r.POLYFILL="P";e.exports=r},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},function(e,t,n){var r=n(44);e.exports=function(e){return Object(r(e))}},function(e,t,n){var r=n(18),o=n(88),i=n(58)("species");e.exports=function(e,t){var n;return o(e)&&("function"==typeof(n=e.constructor)&&(n===Array||o(n.prototype))||r(n)&&null===(n=n[i]))&&(n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},function(e,t,n){var r=n(43);e.exports=Array.isArray||function(e){return"Array"==r(e)}},function(e,t,n){var r=n(59);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(e,t,n){function r(){}function o(e){return"<script>"+e+"</"+h+">"}var i,a=n(24),c=n(91),u=n(31),s=n(30),l=n(93),f=n(47),p=n(50),d="prototype",h="script",g=p("IE_PROTO"),m=function(){try{i=document.domain&&new ActiveXObject("htmlfile")}catch(e){}var e,t;m=i?function(e){e.write(o("")),e.close();var t=e.parentWindow.Object;return e=null,t}(i):((t=f("iframe")).style.display="none",l.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(o("document.F=Object")),e.close(),e.F);for(var n=u.length;n--;)delete m[d][u[n]];return m()};s[g]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(r[d]=a(e),n=new r,r[d]=null,n[g]=e):n=m(),void 0===t?n:c(n,t)}},function(e,t,n){var r=n(12),a=n(23),c=n(24),u=n(92);e.exports=r?Object.defineProperties:function(e,t){c(e);for(var n,r=u(t),o=r.length,i=0;i<o;)a.f(e,n=r[i++],t[n]);return e}},function(e,t,n){var r=n(54),o=n(31);e.exports=Object.keys||function(e){return r(e,o)}},function(e,t,n){var r=n(53);e.exports=r("document","documentElement")},function(e,t,n){},function(e,t,n){n(96);var r=n(66);e.exports=r("Array","findIndex")},function(e,t,n){"use strict";var r=n(62),o=n(63).findIndex,i=n(64),a=n(65),c="findIndex",u=!0,s=a(c);c in[]&&Array(1)[c](function(){u=!1}),r({target:"Array",proto:!0,forced:u||!s},{findIndex:function(e,t){return o(this,e,1<arguments.length?t:void 0)}}),i(c)},function(e,t,n){},,,function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return me}),n.d(t,"ChoicesGuide",function(){return me}),n.d(t,"ChoicesGuideResult",function(){return Pe});n(6),n(105),n(71);var r=n(0),o=n.n(r),i=n(3),a=n.n(i),c=(n(108),n(1)),u=n.n(c),s=n(2),l=n(4),v=n(5);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=g(i);return t=a?(e=g(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==b(r)&&"function"!=typeof r?h(n):r}}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(o,l["a"]);var e,t,n,r=d(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=r.call(this,e)).config.aspectRatio=t.config.aspectRatio||"16x9",t.questionId=e.data.id,t.answerDimensions=e.answerDimensions||1,t.onLiveUpdates=t.config.liveUpdatesFunction,t.state={value:50,isAnswered:!1},t.onChangeHandler=t.onChangeHandler.bind(h(t)),t}return e=o,(t=[{key:"onChangeHandler",value:function(e){var t=this,n={value:e,isAnswered:!0,error:void 0};this.setState(n,function(){t.liveUpdates()})}},{key:"isValid",value:function(){return!(void 0===(this.props.data||{}).value&&!this.state.isAnswered)||(this.setState({error:"Je hebt nog geen keuze gemaakt"}),!1)}},{key:"getAnswer",value:function(){if(this.state.isAnswered){var e;this.props.data;return"number"==typeof this.state.value||"string"==typeof this.state.value?(e={x:this.state.value},1<this.answerDimensions&&(e.y=this.state.value),2<this.answerDimensions&&(e.z=this.state.value)):(e={x:this.state.value.x},1<this.answerDimensions&&(e.y=this.state.value.y),2<this.answerDimensions&&(e.z=this.state.value.z)),e}}},{key:"liveUpdates",value:function(){this.onLiveUpdates&&this.onLiveUpdates()}},{key:"showLightbox",value:function(t){var e=[{src:this.questionImageA.src},{src:this.questionImageB.src}],n=e.findIndex(function(e){return e.src==t.src}),r=new window.CustomEvent("osc-show-light-box",{detail:{images:e,startIndex:n,aspectRatio:this.config.aspectRatio}});document.dispatchEvent(r)}},{key:"render",value:function(){var o=this,i=this,a=i.props.data||{},e=!1;i.state.error&&(e=!0);var t=i.state.isAnswered,n="object"==b(a.value)?a.value.x:void 0!==a.value?a.value:"not defined";"not defined"===n?n=this.state.value:t=!0;var r,c=null,u=a.images;u&&(Array.isArray(u)||(u=[u]),r=u[0],c=React.createElement("div",{className:"osc-question-image-container osc-question-image-aspect-".concat(i.config.aspectRatio)},React.createElement("div",{className:"osc-question-image-aspect-container"},React.createElement("img",{className:"osc-question-image",src:r.src}))));var s=React.createElement("div",{className:"osc-question-description"},React.createElement("div",{className:"osc-question-description-text",dangerouslySetInnerHTML:{__html:a.description}})),l=null;switch(a.type){case"continuous":l=React.createElement("div",{className:"osc-question-selector"},React.createElement(v.a.Slider,{min:"0",max:"100",step:"1",value:n,className:"osc-question-selector-slider",config:{},touched:t,onChange:function(e){return i.onChangeHandler(e)},ref:function(e){return i.selector=e}}),React.createElement("div",{className:"osc-question-selector-minlabel",dangerouslySetInnerHTML:{__html:a.minLabel}}),React.createElement("div",{className:"osc-question-selector-maxlabel",dangerouslySetInnerHTML:{__html:a.maxLabel}}));break;case"a-to-b":var f=a.values&&a.values.A&&a.values.A.label||"A",p=a.values&&a.values.B&&a.values.B.label||"B",d=a.values&&a.values.A&&a.values.A.questionText,h=a.values&&a.values.B&&a.values.B.questionText;d&&h&&(s=React.createElement("div",{className:"osc-question-description"},React.createElement("div",{className:"osc-question-description-text",dangerouslySetInnerHTML:{__html:a.description}}),React.createElement("div",{className:"osc-question-description-text"},React.createElement("div",{className:"osc-question-description-label"},f),React.createElement("div",{className:"osc-question-description-labeled-text"},d)),React.createElement("div",{className:"osc-question-description-text"},React.createElement("div",{className:"osc-question-description-label"},p),React.createElement("div",{className:"osc-question-description-labeled-text"},h))));var g=a.values&&a.values.A&&a.values.A.questionImage,m=a.values&&a.values.B&&a.values.B.questionImage;g&&m&&(s=React.createElement("div",{className:"osc-question-description"},React.createElement("div",{className:"osc-question-description-text",dangerouslySetInnerHTML:{__html:a.description}}),React.createElement("div",{className:"osc-question-description-image-container osc-question-description-image-container-a"},React.createElement("div",{className:"osc-question-description-label osc-question-description-label-a"},f),React.createElement("div",{className:"osc-question-image-container osc-question-image-aspect-".concat(i.config.aspectRatio)},React.createElement("div",{className:"osc-question-image-aspect-container"},React.createElement("img",{className:"osc-question-description-image",src:g.src,style:{cursor:"pointer"},onClick:function(){return i.showLightbox(i.questionImageA)},ref:function(e){return i.questionImageA=e}})))),React.createElement("div",{className:"osc-question-description-image-container osc-question-description-image-container-b"},React.createElement("div",{className:"osc-question-description-label osc-question-description-label-b"},p),React.createElement("div",{className:"osc-question-image-container osc-question-image-aspect-".concat(i.config.aspectRatio)},React.createElement("div",{className:"osc-question-image-aspect-container"},React.createElement("img",{className:"osc-question-description-image",src:m.src,style:{cursor:"pointer"},onClick:function(){return i.showLightbox(i.questionImageB)},ref:function(e){return i.questionImageB=e}})))))),l=React.createElement("div",{className:"osc-question-selector"},React.createElement("div",{className:"osc-question-selector-label-a"},f),React.createElement("div",{className:"osc-question-selector-label-b"},p),React.createElement(v.a.Slider,{min:"0",max:"100",step:"1",value:n,className:"osc-question-selector-slider",config:{},touched:t,onChange:function(e){return i.onChangeHandler(e)},ref:function(e){return i.selector=e}}),React.createElement("div",{className:"osc-question-selector-minlabel",dangerouslySetInnerHTML:{__html:a.minLabel}}),React.createElement("div",{className:"osc-question-selector-maxlabel",dangerouslySetInnerHTML:{__html:a.maxLabel}}));break;case"enum-radio":l=React.createElement("div",{className:"osc-question-selector"},a.values&&a.values.map(function(t,e){var n=parseInt(1e6*Math.random()),r=!1;"object"==b(a.value)?(r=!0,Object.keys(a.value).forEach(function(e){a.value[e]!==t.value[e]&&(r=!1)})):a.value===t.value&&(r=!0);"undefined"!=a.value?a.value:o.state.value;return React.createElement("div",{key:"div-value-".concat(n),className:"osc-radio-container"},React.createElement("div",{className:"osc-radio-input".concat(r?" osc-radio-input-checked":"")},React.createElement("input",{name:"enum-radio-".concat(a.id),type:"radio",onChange:function(){return i.onChangeHandler(t.value)},key:"button-value-".concat(n)})),React.createElement("div",{className:"osc-radio-text"},t.text))}));break;case"enum-buttons":l=React.createElement("div",{className:"osc-question-selector"},a.values&&a.values.map(function(e,t){return React.createElement("button",{onClick:function(){return i.onChangeHandler(e.value)},key:"button-value-".concat(e.value)},e.text)}));break;default:l=React.createElement("div",null,"Type ",a.type," is (nog) niet geimplementeerd.")}var y=null;return e&&(y=React.createElement("div",{className:"osc-error-text"},i.state.error)),React.createElement("div",{id:i.props.config.divId,className:"osc-question osc-question-".concat(a.type).concat(e?" osc-error":"")},c,React.createElement("div",{className:"osc-question-content",id:i.props.config.divId+"-content"},React.createElement("h3",{className:"osc-question-title"}," ",a.title),s,l,y))}}])&&f(e.prototype,t),n&&f(e,n),o}();function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function E(o){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?w(Object(i),!0).forEach(function(e){var t,n,r;t=o,r=i[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):w(Object(i)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(i,e))})}return o}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=C(i);return t=a?(e=C(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==y(r)&&"function"!=typeof r?T(n):r}}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var R=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(o,l["a"]);var e,t,n,r=S(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=r.call(this,e)).noOfQuestionsToShow=t.config.noOfQuestionsToShow||1,t.onLiveUpdates=t.config.liveUpdatesFunction,t.questionElements=[],t.state={currentQuestion:0,values:{}},t.liveUpdates=t.liveUpdates.bind(T(t)),t}return e=o,(t=[{key:"componentDidMount",value:function(){}},{key:"isValid",value:function(){var n=this,r=!0,e=n.props.data.questions.slice(n.state.currentQuestion,n.state.currentQuestion+n.noOfQuestionsToShow),o=!1;return e.forEach(function(e,t){n.questionElements[t].isValid()||(o||setTimeout(function(){document.querySelector("#".concat(n.questionElements[t].config.divId,"-content")).scrollIntoView({behavior:"smooth"})},250),r=!(o=!0))}),r}},{key:"getAnswers",value:function(){var r=this,o=u()({},this.props.data&&this.props.data.values,r.state.values);return r.props.data&&r.props.data.questions.forEach(function(t,e){var n=r.questionElements.find(function(e){return e&&e.questionId==t.id});n&&void 0!==n.getAnswer()&&(o[t.id]=n.getAnswer())}),r.setState({values:o}),o}},{key:"gotoNextQuestion",value:function(){if(this.isValid()){var e=this.state.currentQuestion+this.noOfQuestionsToShow;return e>=this.props.data.questions.length?(e=0,this.setState({currentQuestion:e}),{isReady:!0,currentQuestion:e}):(this.setState({currentQuestion:e}),{isReady:!1,currentQuestion:e})}}},{key:"gotoPreviousQuestion",value:function(){var e=this.state.currentQuestion-this.noOfQuestionsToShow;return e<0?(e=0,this.setState({currentQuestion:e}),{isBeginning:!0,currentQuestion:e}):(this.setState({currentQuestion:e}),{isBeginning:!1,currentQuestion:e})}},{key:"liveUpdates",value:function(){this.onLiveUpdates&&this.onLiveUpdates()}},{key:"render",value:function(){var n=this,r=n.props.data||{questions:[]},e=r.questions.slice(n.state.currentQuestion,n.state.currentQuestion+n.noOfQuestionsToShow),o=u()({},this.props.data&&this.props.data.values,n.state.values),t=React.createElement("div",{className:"osc-questions"},e.map(function(e,t){return React.createElement(m,{config:{liveUpdatesFunction:n.liveUpdates,divId:"osc-question-".concat(e.id),aspectRatio:n.config.aspectRatio},data:E(E({},e),{},{value:o[e.id]}),answerDimensions:r.answerDimensions,key:"question-".concat(e.id),ref:function(e){n.questionElements[t]=e}})}));return React.createElement("div",{id:this.id,className:"osc-question-group"},React.createElement("h3",{className:"osc-question-group-title"},r.title),React.createElement("div",{className:"osc-question-group-description",dangerouslySetInnerHTML:{__html:r.description}}),t)}}])&&O(e.prototype,t),n&&O(e,n),o}();function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function A(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=I(i);return t=a?(e=I(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==x(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var j=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(o,l["a"]);var e,t,n,r=A(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=r.call(this,e)).defaultConfig={plane:{topleft:{title:"metrostad",bgImage:{src:"https://image-server.staging.openstadsdeel.nl/image/719fd5b8dc6953db41b187723d3fc5c9"}},topright:{title:"mozaïekstad",bgImage:{src:"https://image-server.staging.openstadsdeel.nl/image/01484fc7716420635beab879658e00b1"}},bottomleft:{title:"museumstad",bgImage:{src:"https://image-server.staging.openstadsdeel.nl/image/85ef5669d9a5db2f0ec2adb6310620be"}},bottomright:{title:"dorpenstad",bgImage:{src:"https://image-server.staging.openstadsdeel.nl/image/befd03bc1a415bd767f9912e3dcd18a8"}}}},t.config=u.a.recursive(t.defaultConfig,t.config,e.config||{}),t.state={},t}return e=o,(t=[{key:"getPreferedChoice",value:function(e){if(e){var t,n=document.querySelector("#".concat(this.divId))&&document.querySelector("#".concat(this.divId)).offsetWidth/2||90,r=n+(void 0===e.y?0:e.y)*(n/100),o=n+(void 0===e.x?0:e.x)*(n/100);return r<n&&o<n&&(t=this.config.plane.topleft),r<n&&n<o&&(t=this.config.plane.topright),n<r&&o<n&&(t=this.config.plane.bottomleft),n<r&&n<o&&(t=this.config.plane.bottomright),t}}},{key:"getTitle",value:function(e,t){if(e){var n=this.getPreferedChoice(e),r=t?n&&n.title:n?"Je gaat nu richting "+(n&&n.title):"Je staat precies tussen meerdere scenario's in";return r}}},{key:"render",value:function(){var e,t=this.props.score,n=document.querySelector("#".concat(this.divId))&&document.querySelector("#".concat(this.divId)).offsetWidth/2||90,r=n+(void 0===t.y?0:t.y)*(n/100),o=n+(void 0===t.x?0:t.x)*(n/100),i=null,a=this.props.data&&this.props.data.images;return a&&(Array.isArray(a)||(a=[a]),e=a[0],i=React.createElement("img",{className:"osc-choice-plane-background-image",src:e.src,style:{width:2*n,height:2*n}})),React.createElement("div",{id:this.divId,className:"osc-choice-plane-plane",ref:function(e){self.planePlaneElement=e}},i,React.createElement("div",{className:"osc-point",style:{top:r,left:o}}),React.createElement("div",{style:{clear:"both"}}))}}])&&P(e.prototype,t),n&&P(e,n),o}();function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function L(o){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?B(Object(i),!0).forEach(function(e){var t,n,r;t=o,r=i[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):B(Object(i)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(i,e))})}return o}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function F(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=U(i);return t=a?(e=U(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==D(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var q=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(o,l["a"]);var e,t,n,r=F(o);function o(e){var t;switch(!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=r.call(this,e)).defaultConfig={type:"default"},t.config=u.a.recursive(t.defaultConfig,t.config,e.config||{}),t.answerDimensions=e.answerDimensions||1,e.answerDimensions){case 2:t.dimensions=["x","y"];break;case 3:t.dimensions=["x","y","z"];break;default:t.dimensions=["x"]}return t.answers=e.data&&e.data.answers||{},Object.keys(t.answers).forEach(function(e){t.answers[e]==parseInt(t.answers[e])&&(t.answers[e]={x:parseInt(t.answers[e])})}),t.state={score:t.props.score||0},t}return e=o,(t=[{key:"getScore",value:function(){return this.planeElement?0:this.state.score}},{key:"getTitle",value:function(e,t){return this.planeElement?this.planeElement.getTitle(e,t):this.props.data&&this.props.data.title}},{key:"calculateScore",value:function(e){var n=this,a=this.answers,t=e||{},c=(Object.keys(a).length,{});Object.keys(a).forEach(function(e){var r=a[e]||{},o=t[e]||(n.config.startWithAllQuestionsAnswered?{x:50,y:50,z:50}:{}),i=c[e]={};n.dimensions.forEach(function(e){if(void 0!==r[e]&&void 0!==o[e]){var t=void 0!==r[e]?r[e]:[0,100];if(Array.isArray(t)){var n=t[1]-t[0];return i[e]=t[0]+o[e]/100*n}return t==parseInt(t)?i[e]=100-Math.abs(parseInt(t)-o[e]):i[e]=o[e]}})});var r={};return Object.keys(a).forEach(function(t){n.dimensions.forEach(function(e){r[e]=r[e]||{score:[],noOfAnswers:0},void 0!==c[t][e]&&r[e].score.push(c[t][e]),a[t]&&void 0!==a[t][e]&&r[e].noOfAnswers++})}),Object.keys(r).forEach(function(e){r[e]=r[e].score.length?r[e].score.reduce(function(e,t){return e+t})/r[e].noOfAnswers:void 0}),this.setState({score:r}),r}},{key:"render",value:function(){var t=this,e=t.state.score,n=null;switch(this.config.type){case"plane":n=React.createElement(j,{config:L({},t.config),data:L({},t.props.data),score:e,ref:function(e){t.planeElement=e}});break;default:var r,o=null;t.config.withPercentage&&(r=parseInt(t.state.score.x),o=React.createElement("div",{className:"osc-percentage"},r,"%")),n=React.createElement("div",{className:"osc-choice-default"},React.createElement("h4",null,t.props.data.title),React.createElement("div",{className:"osc-choice-bar".concat(t.config.withPercentage?" osc-with-percentage":"")},React.createElement("div",{className:"osc-choice-bar-mask"}),React.createElement("div",{className:"osc-choice-bar-progress",style:{width:(t.state.score.x||0)+"%"}})),o)}return React.createElement("li",{className:"osc-choice"},n)}}])&&N(e.prototype,t),n&&N(e,n),o}();function G(e){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function H(o){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?V(Object(i),!0).forEach(function(e){var t,n,r;t=o,r=i[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):V(Object(i)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(i,e))})}return o}function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function K(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=Q(i);return t=a?(e=Q(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==G(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function Q(e){return(Q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var X=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(o,l["a"]);var e,t,n,r=K(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=r.call(this,e)).defaultConfig={type:"default",sticky:null},t.config=u.a.recursive(t.defaultConfig,t.config,e.config||{}),t.choiceElements=[],t.state={title:"Je hebt nog geen keuze gemaakt",scores:e.scores},t}return e=o,(t=[{key:"componentDidMount",value:function(){}},{key:"calculateScores",value:function(t){var n={};return this.choiceElements.forEach(function(e){n[e.config.divId]=e.calculateScore(t)}),this.setState({scores:n}),n}},{key:"getPreferedChoice",value:function(){var n=this.state.scores;switch(this.config.type){case"plane":return this.choiceElements[0];default:var t=Object.keys(n).sort(function(e,t){return n[t].x-n[e].x})[0];return this.choiceElements.find(function(e){return e&&e.config.divId==t})}}},{key:"render",value:function(){var r=this;return React.createElement("ul",{className:"osc-choices"},Object.keys(r.props.choices).map(function(e,t){var n=r.props.choices[e];return React.createElement(q,{config:H({divId:"choice-".concat(n.id)},r.config),data:n,score:r.props.scores&&r.props.scores["choice-".concat(n.id)],answerDimensions:r.props.answerDimensions,key:"choice-".concat(n.id),ref:function(e){r.choiceElements[t]=e}})}))}}])&&W(e.prototype,t),n&&W(e,n),o}();function J(e){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Y(e,t){return(Y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function $(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=te(i);return t=a?(e=te(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==J(r)&&"function"!=typeof r?ee(n):r}}function ee(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function te(e){return(te=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var ne=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Y(e,t)}(o,l["a"]);var e,t,n,r=$(o);function o(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var n=ee(t=r.call(this,e));return n.id=e.id||"osc-choices-guide-".concat(parseInt(1e6*Math.random())),n.defaultConfig={siteId:null,loginUrl:null,noOfQuestionsToShow:1,api:{url:null}},n.config=u.a.recursive(n.defaultConfig,n.config,e.config||{}),n.state={choicesGuideId:n.props.data.choicesGuideId,currentTarget:{},busy:!1},n.onFinished=n.props.onFinished,t}return e=o,(t=[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(){var n=this,e="".concat(n.config.api&&n.config.api.url,"/api/site/").concat(n.config.siteId,"/choicesguide/").concat(n.config.choicesGuideId,"?includeChoices=1&includeQuestions=1"),t=s.a.api.getHeaders();fetch(e,{headers:t}).then(function(e){return e.json()}).then(function(e){var t={};t.choicesGuideId=e.id,t.title=e.title,t.description=e.description,t.images=e.images,t.choices=e.choices||[],t.questionGroups=e.questiongroups||[],t.busy=!1,n.setState(t,function(){n.setCurrentForm({what:"choices-guide"})})}).catch(function(e){console.log("Niet goed"),console.log(e)})}},{key:"handleFieldChange",value:function(t){var n=this.state.currentTarget;Object.keys(t).forEach(function(e){n[e]=t[e]}),this.setState({currentTarget:n})}},{key:"setCurrentForm",value:function(t){var e,n,r;switch(t.what){case"choices-guide":t.title=this.state.title,t.description=this.state.description,t.images=this.state.images?JSON.stringify(this.state.images):"";break;case"choice":n=t.questionGroupId?(e=this.state.questionGroups.find(function(e){return e.id==t.questionGroupId})||{}).choices&&e.choices.find(function(e){return e.id==t.choiceId})||{}:this.state.choices.find(function(e){return e.id==t.choicesId})||{},t.title=n.title,t.description=n.description,t.images=n.images?JSON.stringify(n.images):"",t.answers=n.answers?JSON.stringify(n.answers):"",t.seqnr=n.seqnr||0;break;case"question-group":e=this.state.questionGroups.find(function(e){return e.id==t.questionGroupId})||{},t.answerDimensions=e.answerDimensions,t.title=e.title,t.description=e.description,t.images=e.images?JSON.stringify(e.images):"",t.seqnr=e.seqnr||0;break;case"question":r=(e=this.state.questionGroups.find(function(e){return e.id==t.questionGroupId})||{}).questions&&e.questions.find(function(e){return e.id==t.questionId})||{},t.title=r.title,t.description=r.description,t.images=r.images?JSON.stringify(r.images):"",t.minLabel=r.minLabel,t.maxLabel=r.maxLabel,t.type=r.type,t.values=r.values?JSON.stringify(r.values):"",t.seqnr=r.seqnr||0}this.setState({currentTarget:t})}},{key:"submitForm",value:function(){var o=this;o.setState({busy:!0},function(){var e,t,n;if(0,!o.config.user||!o.config.user.role||"admin"!=o.config.user.role)return alert("Je mag dit niet");switch(o.state.currentTarget.what){case"choices-guide":n=o.state.choicesGuideId,e="".concat(o.config.api&&o.config.api.url,"/api/site/").concat(o.config.siteId,"/choicesguide"),t={title:o.state.currentTarget.title,description:o.state.currentTarget.description,images:o.state.currentTarget.images};break;case"choice":n=o.state.currentTarget.choiceId,e=o.state.currentTarget.questionGroupId?"".concat(o.config.api&&o.config.api.url,"/api/site/").concat(o.config.siteId,"/choicesguide/").concat(o.state.choicesGuideId,"/questiongroup/").concat(o.state.currentTarget.questionGroupId,"/choice"):"".concat(o.config.api&&o.config.api.url,"/api/site/").concat(o.config.siteId,"/choicesguide/").concat(o.state.choicesGuideId,"/choice"),t={title:o.state.currentTarget.title,description:o.state.currentTarget.description,images:o.state.currentTarget.images,answers:o.state.currentTarget.answers?JSON.parse(o.state.currentTarget.answers):"",seqnr:o.state.currentTarget.seqnr};break;case"question-group":n=o.state.currentTarget.questionGroupId,e="".concat(o.config.api&&o.config.api.url,"/api/site/").concat(o.config.siteId,"/choicesguide/").concat(o.state.choicesGuideId,"/questiongroup"),t={answerDimensions:o.state.currentTarget.answerDimensions,title:o.state.currentTarget.title,description:o.state.currentTarget.description,images:o.state.currentTarget.images,seqnr:o.state.currentTarget.seqnr};break;case"question":n=o.state.currentTarget.questionId,e="".concat(o.config.api&&o.config.api.url,"/api/site/").concat(o.config.siteId,"/choicesguide/").concat(o.state.choicesGuideId,"/questiongroup/").concat(o.state.currentTarget.questionGroupId,"/question"),t={title:o.state.currentTarget.title,description:o.state.currentTarget.description,images:o.state.currentTarget.images,minLabel:o.state.currentTarget.minLabel,maxLabel:o.state.currentTarget.maxLabel,type:o.state.currentTarget.type,values:o.state.currentTarget.values?JSON.parse(o.state.currentTarget.values):"",seqnr:o.state.currentTarget.seqnr}}e+=n?"/".concat(n):"";var r=s.a.api.getHeaders(o.config);fetch(e,{method:n?"PUT":"POST",headers:r,body:JSON.stringify(t)}).then(function(e){if(e.ok)return e.json();throw e.text()}).then(function(e){o.fetchData()}).catch(function(e){e.then(function(e){return console.log(e)}),o.setState({busy:!1})})})}},{key:"deleteElement",value:function(e){var t,n=e.what,r=e.questionGroupId,o=e.choiceId,i=e.questionId,a=e.title,c=this;if(confirm("Je gaat "+n+" "+a+" verwijderen. Weet je het zeker?")){switch(n){case"question-group":t="".concat(c.config.api&&c.config.api.url,"/api/site/").concat(c.config.siteId,"/choicesguide/").concat(c.state.choicesGuideId,"/questiongroup/").concat(r);break;case"choice":t="".concat(c.config.api&&c.config.api.url,"/api/site/").concat(c.config.siteId,"/choicesguide/").concat(c.state.choicesGuideId,"/questiongroup/").concat(r,"/choice/").concat(o);break;case"question":t="".concat(c.config.api&&c.config.api.url,"/api/site/").concat(c.config.siteId,"/choicesguide/").concat(c.state.choicesGuideId,"/questiongroup/").concat(r,"/question/").concat(i)}var u=s.a.api.getHeaders(c.config);fetch(t,{method:"DELETE",headers:u}).then(function(e){if(e.ok)return e.json();throw e.text()}).then(function(e){c.fetchData()}).catch(function(e){e.then(function(e){return console.log(e)}),c.setState({busy:!1})})}}},{key:"render",value:function(){var e,t,n,a=this,r=null,o=null,i=null,c=React.createElement("button",{onClick:function(){a.setCurrentForm({what:"choices-guide"})}},"Terug"),u=React.createElement("button",{onClick:function(){return a.submitForm()}},"Submit");switch(a.state.currentTarget.what){case"choices-guide":r="Bewerk keuzewijzer",o=React.createElement("div",{className:"openstad-form"},React.createElement("h3",null,"Titel"),React.createElement(v.a.InputWithCounter,{key:"x1",config:{inputType:"input",minLength:1,maxLength:1e3},value:a.state.currentTarget.title,onChange:function(e){return a.handleFieldChange({title:e.value})},ref:function(e){a.titleField=e}}),React.createElement("h3",null,"Beschrijving"),React.createElement(v.a.InputWithCounter,{key:"x2",config:{inputType:"textarea",minLength:1,maxLength:1e3},value:a.state.currentTarget.description,onChange:function(e){return a.handleFieldChange({description:e.value})},ref:function(e){return a.descriptionField=e}}),React.createElement("h3",null,"Afbeeldingen"),React.createElement(v.a.Textarea,{key:"i1",config:{},value:a.state.currentTarget.images,onChange:function(e){return a.handleFieldChange({images:e.value})},ref:function(e){return a.imagesField=e}})),i=React.createElement("div",{className:"openstad-form"},React.createElement("h4",null,"Vraaggroepen"),Object.keys(a.state.questionGroups).map(function(e,t){var n,r=a.state.questionGroups[e],o=React.createElement("ul",null,Object.keys(r.questions).map(function(e,t){var n=r.questions[e];return React.createElement("li",null,"(",n.id,") - ",n.title," - ",n.seqnr,"-",React.createElement("a",{href:"#",onClick:function(){return a.setCurrentForm({what:"question",questionGroupId:r.id,questionId:n.id})}},"Bewerk"),"-",React.createElement("a",{href:"#",onClick:function(){return a.deleteElement({what:"question",questionGroupId:r.id,questionId:n.id,title:n.title})}},"Verwijder"))}),React.createElement("li",null,React.createElement("a",{href:"#",onClick:function(){return a.setCurrentForm({what:"question",questionGroupId:r.id})}},"Nieuwe vraag"))),i=React.createElement("ul",null,Object.keys(r.choices).map(function(e,t){var n=r.choices[e];return React.createElement("li",null,n.title," - ",n.seqnr,"- ",React.createElement("a",{href:"#",onClick:function(){return a.setCurrentForm({what:"choice",questionGroupId:r.id,choiceId:n.id})}},"Bewerk"),"- ",React.createElement("a",{href:"#",onClick:function(){return a.deleteElement({what:"choice",questionGroupId:r.id,choiceId:n.id,title:n.title})}},"Verwijder"))}),React.createElement("li",null,React.createElement("a",{href:"#",onClick:function(){return a.setCurrentForm({what:"choice",questionGroupId:r.id})}},"Nieuwe keuze")));return 0==Object.keys(r.choices).length&&0==Object.keys(r.questions).length&&(n=React.createElement("a",{href:"#",onClick:function(){return a.deleteElement({what:"question-group",questionGroupId:r.id,title:r.title})}},"Verwijder")),React.createElement("div",null,r.title," - ",r.seqnr,"- ",React.createElement("a",{href:"#",onClick:function(){return a.setCurrentForm({what:"question-group",questionGroupId:r.id})}},"Bewerk"),"- ",n,o,i)}),React.createElement("a",{href:"#",onClick:function(){return a.setCurrentForm({what:"question-group"})}},"Nieuwe groep")),c=React.createElement("button",{onClick:function(){a.onFinished&&a.onFinished()}},"Terug");break;case"choice":r="Bewerk Keuze",o=React.createElement("div",null,React.createElement("h3",null,"Titel"),React.createElement(v.a.InputWithCounter,{config:{inputType:"input",minLength:1,maxLength:1e3},value:a.state.currentTarget.title,onChange:function(e){return a.handleFieldChange({title:e.value})},ref:function(e){return a.titleField=e}}),React.createElement("h3",null,"Beschrijving"),React.createElement(v.a.InputWithCounter,{config:{inputType:"textarea",minLength:1,maxLength:1e3},value:a.state.currentTarget.description,onChange:function(e){return a.handleFieldChange({description:e.value})},ref:function(e){return a.descriptionField=e}}),React.createElement("h3",null,"Afbeeldingen"),React.createElement(v.a.Textarea,{key:"i2",config:{},value:a.state.currentTarget.images,onChange:function(e){return a.handleFieldChange({images:e.value})},ref:function(e){return a.imagesField=e}}),React.createElement("h3",null,"Antwoorden"),React.createElement(v.a.Text,{config:{},value:a.state.currentTarget.answers,onChange:function(e){return a.handleFieldChange({answers:e.value})},ref:function(e){return a.answersField=e}}),React.createElement("h3",null,"Volgorde nummer"),React.createElement(v.a.Text,{config:{},value:a.state.currentTarget.seqnr,onChange:function(e){return a.handleFieldChange({seqnr:e.value})},ref:function(e){return a.seqnrField=e}}));break;case"question-group":r="Bewerk Vragengroep",o=React.createElement("div",{className:"openstad-form"},React.createElement("h3",null,"Titel"),React.createElement(v.a.InputWithCounter,{config:{inputType:"input",minLength:1,maxLength:1e3},value:a.state.currentTarget.title,onChange:function(e){return a.handleFieldChange({title:e.value})},ref:function(e){return a.titleField=e}}),React.createElement("h3",null,"Beschrijving"),React.createElement(v.a.InputWithCounter,{config:{inputType:"textarea",minLength:1,maxLength:1e3},value:a.state.currentTarget.description,onChange:function(e){return a.handleFieldChange({description:e.value})},ref:function(e){return a.descriptionField=e}}),React.createElement("h3",null,"Afbeeldingen"),React.createElement(v.a.Textarea,{key:"i3",config:{},value:a.state.currentTarget.images,onChange:function(e){return a.handleFieldChange({images:e.value})},ref:function(e){return a.imagesField=e}}),React.createElement("h3",null,"Aantal dimensies in antwoorden"),React.createElement("select",{key:"dezemoetnogweg2".concat(a.state.currentTarget.questionGroupId),value:a.state.currentTarget.answerDimensions,onChange:function(){return a.handleFieldChange({answerDimensions:a.answerDimensionsField.value})},ref:function(e){return a.answerDimensionsField=e}},React.createElement("option",{value:"1"},"1"),React.createElement("option",{value:"2"},"2"),React.createElement("option",{value:"3"},"3")),React.createElement("h3",null,"Volgorde nummer"),React.createElement(v.a.Text,{config:{},value:a.state.currentTarget.seqnr,onChange:function(e){return a.handleFieldChange({seqnr:e.value})},ref:function(e){return a.seqnrField=e}}));break;case"question":r="Bewerk Vraag ".concat(a.state.currentTarget.questionId),o=React.createElement("div",{className:"openstad-form"},React.createElement("h3",null,"Titel"),React.createElement(v.a.InputWithCounter,{config:{inputType:"input",minLength:1,maxLength:1e3},value:a.state.currentTarget.title,onChange:function(e){return a.handleFieldChange({title:e.value})},ref:function(e){return a.titleField=e}}),React.createElement("h3",null,"Beschrijving"),React.createElement(v.a.InputWithCounter,{config:{inputType:"textarea",minLength:1,maxLength:1e3},value:a.state.currentTarget.description,onChange:function(e){return a.handleFieldChange({description:e.value})},ref:function(e){return a.descriptionField=e}}),React.createElement("h3",null,"Afbeeldingen"),React.createElement(v.a.Textarea,{key:"i4",config:{},value:a.state.currentTarget.images,onChange:function(e){return a.handleFieldChange({images:e.value})},ref:function(e){return a.imagesField=e}}),React.createElement("h3",null,"Label minimale waarde"),React.createElement(v.a.InputWithCounter,{config:{inputType:"input",minLength:1,maxLength:1e3},value:a.state.currentTarget.minLabel,onChange:function(e){return a.handleFieldChange({minLabel:e.value})},ref:function(e){return a.minLabelField=e}}),React.createElement("h3",null,"Label maximale waarde"),React.createElement(v.a.InputWithCounter,{config:(n=1e3,(t="maxLength")in(e={inputType:"input",maxLength:1})?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e),value:a.state.currentTarget.maxLabel,onChange:function(e){return a.handleFieldChange({maxLabel:e.value})},ref:function(e){return a.maxLabelField=e}}),React.createElement("h3",null,"Type"),React.createElement("select",{key:"dezemoetnogweg".concat(a.state.currentTarget.questionGroupId),value:a.state.currentTarget.type,onChange:function(){return a.handleFieldChange({type:a.typeField.value})},ref:function(e){return a.typeField=e}},React.createElement("option",{value:"continuous"},"continue"),React.createElement("option",{value:"a-to-b"},"van a naar b"),React.createElement("option",{value:"enum-buttons"},"multiple choice - buttons"),React.createElement("option",{value:"enum-radio"},"multiple choice - radio")),React.createElement("h3",null,"Waarden"),React.createElement(v.a.Textarea,{config:{},value:a.state.currentTarget.values,onChange:function(e){return a.handleFieldChange({values:e.value})},ref:function(e){return a.valuesField=e}}),React.createElement("h3",null,"Volgorde nummer"),React.createElement(v.a.Text,{config:{},value:a.state.currentTarget.seqnr,onChange:function(e){return a.handleFieldChange({seqnr:e.value})},ref:function(e){return a.seqnrField=e}}));break;default:c=React.createElement("button",{onClick:function(){a.onFinished&&a.onFinished()}},"Terug"),u=null}return React.createElement("div",{id:this.divId,className:"osc-form".concat(this.state.busy?" osc-busy":"")},React.createElement("h2",null,r),o,React.createElement("br",null),React.createElement("br",null),c,u,i)}}])&&Z(e.prototype,t),n&&Z(e,n),o}(),re=n(25),oe=n(36);function ie(e){var t=e.config,n="".concat(t.api&&t.api.url,"/api/site/").concat(t.siteId,"/choicesguide/").concat(t.choicesGuideId,"?includeChoices=1&includeQuestions=1"),r=s.a.api.getHeaders();return fetch(n,{headers:r}).then(function(e){return e.json()}).then(function(e){return{choicesGuideId:e.id,images:e.images,title:e.title,description:e.description,choices:e.choices||[],questionGroups:e.questiongroups||[],status:"active"}})}function ae(e){return(ae="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ce(e){return function(e){if(Array.isArray(e))return ue(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return ue(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ue(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ue(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function se(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function le(o){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?se(Object(i),!0).forEach(function(e){var t,n,r;t=o,r=i[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):se(Object(i)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(i,e))})}return o}function fe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function pe(e,t){return(pe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function de(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=ge(i);return t=a?(e=ge(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==ae(r)&&"function"!=typeof r?he(n):r}}function he(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ge(e){return(ge=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var me=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&pe(e,t)}(a,l["a"]);var e,t,n,i=de(a);function a(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);var n=he(t=i.call(this,e));n.id=e.id||"osc-choices-guide-".concat(parseInt(1e6*Math.random())),n.defaultConfig={siteId:null,loginUrl:null,noOfQuestionsToShow:1,api:{url:null},sticky:null},n.config=u.a.recursive(n.defaultConfig,n.config,e.config||{}),!n.config.aspectRatio&&n.config.choices&&n.config.choices.type&&"plane"==n.config.choices.type&&(n.config.aspectRatio="10x7"),void 0===n.config.choiceTitleIncludesPreference&&n.config.choices&&n.config.choices.type&&"plane"==n.config.choices.type&&(n.config.choiceTitleIncludesPreference=!0);var r=s.a.sessionStorage.get("osc-choices-guide.values")||{},o=s.a.sessionStorage.get("osc-choices-guide.scores")||{};return n.state={editMode:!1,title:"Loading....",questionGroups:[],choices:[],currentQuestionGroupIndex:void 0,currentQuestion:void 0,status:"init",values:r[t.config.choicesGuideId],scores:o[t.config.choicesGuideId]},n.liveUpdates=n.liveUpdates.bind(he(t)),n.hideEditForm=n.hideEditForm.bind(he(t)),t}return e=a,(t=[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(){var t=this;ie({config:t.config}).then(function(e){t.setState(e,function(){t.startGuide()})}).catch(function(e){console.log("Niet goed"),console.log(e)})}},{key:"startGuide",value:function(){var t=this,e={currentQuestionGroupIndex:0};t.setState(e,function(){t.liveUpdates();var e=new window.CustomEvent("osc-choices-guide-is-ready");document.dispatchEvent(e)})}},{key:"showEditForm",value:function(){this.setState({editMode:!0})}},{key:"hideEditForm",value:function(){var e=s.a.sessionStorage.get("osc-choices-guide.values")||{},t=s.a.sessionStorage.get("osc-choices-guide.scores")||{};this.setState({editMode:!1,title:"Loading....",questionGroups:[],choices:[],currentQuestionGroupIndex:void 0,status:"init",values:e[this.config.choicesGuideId],scores:t[this.config.choicesGuideId]},function(){this.fetchData()})}},{key:"gotoNextQuestion",value:function(){var e=this,t={};t.values=u()(e.state.values||{},e.questionGroupElement.getAnswers()),e.setState(t),e.choicesElement.calculateScores(t.values);var n=e.questionGroupElement.gotoNextQuestion(),r=n.isReady,o=n.currentQuestion;e.setState({currentQuestion:o},function(){r?e.gotoNextGroup():window.scrollTo(0,0)})}},{key:"gotoPreviousQuestion",value:function(){var e=this;if("result"==this.state.status)return this.gotoPreviousGroup();var t={};t.values=u()(this.state.values||{},this.questionGroupElement.getAnswers()),this.setState(t),this.choicesElement.calculateScores(t.values);var n=this.questionGroupElement.gotoPreviousQuestion(),r=n.isBeginning,o=n.currentQuestion;this.setState({currentQuestion:o},function(){r?e.gotoPreviousGroup():window.scrollTo(0,0)})}},{key:"gotoNextGroup",value:function(){var e=this,t=le({},this.state);t.currentQuestionGroupIndex<t.questionGroups.length-1?(t.values=u()(t.values||{},this.questionGroupElement.getAnswers()),t.currentQuestionGroupIndex++,this.setState(t,function(){e.liveUpdates(),window.scrollTo(0,0)})):this.gotoResult()}},{key:"gotoPreviousGroup",value:function(){var e=this,t={};t.currentQuestionGroupIndex=this.state.currentQuestionGroupIndex-1,"result"==this.state.status&&(t.currentQuestionGroupIndex=this.state.questionGroups.length-1,t.status="active"),this.setState(t,function(){e.liveUpdates(),window.scrollTo(0,0)})}},{key:"gotoResult",value:function(){document.location.href=this.config.afterUrl}},{key:"liveUpdates",value:function(){var n=this,r=u()(this.state.values||{},this.questionGroupElement.getAnswers()),o=this.choicesElement.calculateScores(r);this.setState({scores:o,firstAnswerGiven:0<Object.keys(r).length},function(){var e=s.a.sessionStorage.get("osc-choices-guide.values")||{};e[n.config.choicesGuideId]=r,s.a.sessionStorage.set("osc-choices-guide.values",e);var t=s.a.sessionStorage.get("osc-choices-guide.scores")||{};t[n.config.choicesGuideId]=o,s.a.sessionStorage.set("osc-choices-guide.scores",t)})}},{key:"render",value:function(){var e,t=this,n=this,r=n.state.choices,o=1;0<=n.state.currentQuestionGroupIndex&&(e=n.state.questionGroups[n.state.currentQuestionGroupIndex])&&(e.values=n.state.values||{},e&&e.choices&&(r=e.choices,o=e.answerDimensions));var i,a=null,c=n.state.images;c&&(Array.isArray(c)||(c=[c]),i=c[0],a=React.createElement("img",{className:"osc-image",src:i.src}));var u,s,l,f,p,d,h,g,m,y,v,b,w=null;return n.state.editMode?w=React.createElement("div",{className:"osc-choices-guide-content"},React.createElement(ne,{config:n.config,onFinished:n.hideEditForm,data:le({},n.state)})):"result"==n.state.status?alert("Hier had je niet moeten komen"):w="init"==n.state.status?React.createElement("div",{className:"osc-choices-guide-content"},React.createElement("div",{className:"osc-intro"},"Laden...")):(u=null,l="<b>Je hebt nog geen keuze gemaakt</b>",n.config.choiceTitleIncludesPreference?n.state.firstAnswerGiven&&n.choicesElement&&(l="<b>Jouw voorkeur: </b>"+(s=n.choicesElement.getPreferedChoice()).getTitle(n.state.scores[s.config.divId])||!1):l="<b>Jouw voorkeur</b>",u=React.createElement("div",{id:"osc-choices-container-"+this.divId,className:"osc-choices-container osc-accordeon osc-closed",ref:function(e){n.choicesAccordeon=e}},React.createElement("div",{onClick:function(){t.choicesAccordeon.className.match(" osc-closed")?t.choicesAccordeon.className=t.choicesAccordeon.className.replace(" osc-closed"," osc-open"):t.choicesAccordeon.className=t.choicesAccordeon.className.replace(" osc-open"," osc-closed")},className:"osc-accordeon-button",dangerouslySetInnerHTML:{__html:l}}),React.createElement("div",{className:"osc-accordeon-content"},React.createElement(X,{config:n.config.choices,choices:ce(r),scores:le({},n.state.scores),answerDimensions:o,firstAnswerGiven:!!n.state.firstAnswerGiven,ref:function(e){n.choicesElement=e},key:"choices"}))),f=React.createElement(R,{config:{noOfQuestionsToShow:this.config.noOfQuestionsToShow,liveUpdatesFunction:n.liveUpdates,aspectRatio:n.config.aspectRatio},data:e,ref:function(e){n.questionGroupElement=e},key:"group".concat(n.state.currentQuestionsGroupIndex)}),p=null,n.config.user&&n.config.user.role&&"admin"==n.config.user.role&&(p=React.createElement("button",{className:"osc-editbutton osc-edit",onClick:function(){return n.showEditForm()}},"Bewerk keuzewijzer")),g=h=d=null,"result"==n.state.status||0<n.state.currentQuestionGroupIndex||0<n.state.currentQuestion?(h=function(){n.gotoPreviousQuestion()},g="Terug"):n.config.beforeUrl&&(d=n.config.beforeUrl,g="Introductie"),v=y=m=null,"init"!=n.state.status&&"result"!=n.state.status?(y=function(){n.gotoNextQuestion()},v="Volgende"):n.config.afterUrl&&(m=n.config.afterUrl,v="Resultaat"),b=null,(g||v)&&(b=React.createElement(re.default,{previousAction:h,previousUrl:d,previousLabel:g,nextAction:y,nextUrl:m,nextLabel:v})),React.createElement("div",{className:"osc-choices-guide-content"},p,u,f,b)),React.createElement("div",{id:this.divId,className:"osc-choices-guide"},React.createElement(oe.default,null),a,w)}}])&&fe(e.prototype,t),n&&fe(e,n),a}(),ye=n(101),ve=n.n(ye);function be(e){return(be="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function we(e){return function(e){if(Array.isArray(e))return Ee(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return Ee(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ee(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Oe(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function _e(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Oe(Object(n),!0).forEach(function(e){Se(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Oe(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function Se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Te(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ce(e,t){return(Ce=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Re(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=xe(i);return t=a?(e=xe(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==be(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function xe(e){return(xe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Pe=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ce(e,t)}(i,l["a"]);var e,t,n,o=Re(i);function i(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e)).defaultConfig={type:"default",submission:{type:"none"}};var n=s.a.sessionStorage.get("osc-choices-guide.values")||{},r=s.a.sessionStorage.get("osc-choices-guide.scores")||{};return t.state={title:"",answers:n[t.config.choicesGuideId],scores:r[t.config.choicesGuideId]},t}return e=i,(t=[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(){var t=this;ie({config:t.config}).then(function(e){t.setState(e,function(){t.startGuide()})}).catch(function(e){console.log("Niet goed"),console.log(e)})}},{key:"startGuide",value:function(){var e,t,n,r=this,o=(r.choicesElement&&r.choicesElement.calculateScores(r.state.answers),"..."),i=-1;r.choicesElement&&((t=r.choicesElement.getPreferedChoice())&&((e=t.getTitle(r.state.scores[t.config.divId],!0))?(o="Jouw voorkeur is "+e,i=t.divId,console.log(t)):o="Je staat precies tussen meerdere scenario's in"),r.setState({title:o}),n=new window.CustomEvent("osc-choices-guide-result-is-ready",{detail:{preferredChoice:{name:e,title:o,preferredChoiceId:i}}}),document.dispatchEvent(n),"auto"==r.config.submission.type&&r.submitResult())}},{key:"submitResult",value:function(){var i=this;if("form"==i.config.submission.type){var a=i.form.getValues();if(!i.form.validate({showErrors:!0}))return}ve.a.get(function(e){var t;try{t=JSON.stringify(e)}catch(e){}var n="".concat(i.config.api&&i.config.api.url,"/api/site/").concat(i.config.siteId,"/choicesguide/").concat(i.config.choicesGuideId,"/result"),r=s.a.api.getHeaders(i.config),o={result:{answers:i.state.answers,scores:i.state.scores},extraData:a,userFingerprint:btoa(t)};fetch(n,{method:"POST",headers:r,body:JSON.stringify(o)}).then(function(e){if(e.ok)return e.json();throw e.text()}).then(function(e){"form"==i.config.submission.type&&(document.location.href=i.config.afterUrl)}).catch(function(e){e.then(function(e){return console.log(e)})})})}},{key:"render",value:function(){var e,t,n,r=this,o=(r.props&&r.props.data,r.state.choices),i=1;r.state.questionGroups&&(n=r.state.questionGroups.find(function(e){return e.id==r.config.questionGroupId}))&&(n.values=r.state.values||{},n&&n.choices&&(o=n.choices,i=n.answerDimensions));var a=null;if(o)switch(r.config.choices.type){case"plane":var c=o&&o[0]&&o[0].images;c&&1<c.length&&(o[0].images=o&&o[0]&&o[0].images[1]),a=React.createElement(X,(Se(e={config:_e(_e({},r.config.choices),{},{sticky:!1,size:630}),scores:r.state.scores,answerDimensions:i},"scores",_e({},r.state.scores)),Se(e,"choices",we(o)),Se(e,"firstAnswerGiven",!0),Se(e,"ref",function(e){r.choicesElement=e}),Se(e,"key","choices"),e));break;default:a=React.createElement(X,(Se(t={config:_e(_e({},r.config.choices),{},{sticky:!1,size:630,withPercentage:!0}),scores:r.state.scores,answerDimensions:i},"scores",_e({},r.state.scores)),Se(t,"choices",we(o)),Se(t,"firstAnswerGiven",!0),Se(t,"ref",function(e){r.choicesElement=e}),Se(t,"key","choices"),t))}var u=null;r.config.moreInfoUrl&&r.config.moreInfoLabel&&(u=React.createElement("div",{className:"osc-more-info-link"},React.createElement("a",{href:r.config.moreInfoUrl},r.config.moreInfoLabel)));var s,l,f,p=null,d=null;return"form"==r.config.submission.type&&(p=React.createElement(v.a.Form,{config:r.config.submission.form,ref:function(e){r.form=e}}),l=s=null,r.config.beforeUrl&&(s=r.config.beforeUrl,l=r.config.beforeLabel||"Vorige"),f=r.config.afterLabel||"Opslaan",(l||f)&&(d=React.createElement(re.default,{previousAction:null,previousUrl:s,previousLabel:l,nextAction:function(){r.submitResult()},nextUrl:null,nextLabel:f}))),React.createElement("div",{className:"osc-choices-guide"},React.createElement("div",{className:"osc-result"},React.createElement("div",{className:"osc-result-content"},React.createElement("div",{className:"osc-choices-container"},a),u,p)),d)}}])&&Te(e.prototype,t),n&&Te(e,n),i}();me.renderElement=function(e,t){var n=e.attributes;a.a.render(o.a.createElement(me,{attributes:n,config:t}),e)},Pe.renderElement=function(e,t){var n=e.attributes;a.a.render(o.a.createElement(Pe,{attributes:n,config:t}),e)}},function(o,i,a){(function(q){var n,r;!function(e,t){"use strict";"undefined"!=typeof window&&a(109)?void 0===(r="function"==typeof(n=t)?n.call(i,a,i,o):n)||(o.exports=r):o.exports?o.exports=t():e.exports?e.exports=t():e.Fingerprint2=t()}(this,function(){"use strict";function f(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var n=[0,0,0,0];return n[3]+=e[3]+t[3],n[2]+=n[3]>>>16,n[3]&=65535,n[2]+=e[2]+t[2],n[1]+=n[2]>>>16,n[2]&=65535,n[1]+=e[1]+t[1],n[0]+=n[1]>>>16,n[1]&=65535,n[0]+=e[0]+t[0],n[0]&=65535,[n[0]<<16|n[1],n[2]<<16|n[3]]}function p(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var n=[0,0,0,0];return n[3]+=e[3]*t[3],n[2]+=n[3]>>>16,n[3]&=65535,n[2]+=e[2]*t[3],n[1]+=n[2]>>>16,n[2]&=65535,n[2]+=e[3]*t[2],n[1]+=n[2]>>>16,n[2]&=65535,n[1]+=e[1]*t[3],n[0]+=n[1]>>>16,n[1]&=65535,n[1]+=e[2]*t[2],n[0]+=n[1]>>>16,n[1]&=65535,n[1]+=e[3]*t[1],n[0]+=n[1]>>>16,n[1]&=65535,n[0]+=e[0]*t[3]+e[1]*t[2]+e[2]*t[1]+e[3]*t[0],n[0]&=65535,[n[0]<<16|n[1],n[2]<<16|n[3]]}function d(e,t){return 32===(t%=64)?[e[1],e[0]]:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t|e[0]>>>32-t]:(t-=32,[e[1]<<t|e[0]>>>32-t,e[0]<<t|e[1]>>>32-t])}function h(e,t){return 0===(t%=64)?e:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t]:[e[1]<<t-32,0]}function g(e,t){return[e[0]^t[0],e[1]^t[1]]}function m(e){return e=g(e,[0,e[0]>>>1]),e=p(e,[4283543511,3981806797]),e=g(e,[0,e[0]>>>1]),e=p(e,[3301882366,444984403]),e=g(e,[0,e[0]>>>1])}function c(e,t){t=t||0;for(var n=(e=e||"").length%16,r=e.length-n,o=[0,t],i=[0,t],a=[0,0],c=[0,0],u=[2277735313,289559509],s=[1291169091,658871167],l=0;l<r;l+=16)a=[255&e.charCodeAt(l+4)|(255&e.charCodeAt(l+5))<<8|(255&e.charCodeAt(l+6))<<16|(255&e.charCodeAt(l+7))<<24,255&e.charCodeAt(l)|(255&e.charCodeAt(l+1))<<8|(255&e.charCodeAt(l+2))<<16|(255&e.charCodeAt(l+3))<<24],c=[255&e.charCodeAt(l+12)|(255&e.charCodeAt(l+13))<<8|(255&e.charCodeAt(l+14))<<16|(255&e.charCodeAt(l+15))<<24,255&e.charCodeAt(l+8)|(255&e.charCodeAt(l+9))<<8|(255&e.charCodeAt(l+10))<<16|(255&e.charCodeAt(l+11))<<24],a=p(a,u),a=d(a,31),a=p(a,s),o=g(o,a),o=d(o,27),o=f(o,i),o=f(p(o,[0,5]),[0,1390208809]),c=p(c,s),c=d(c,33),c=p(c,u),i=g(i,c),i=d(i,31),i=f(i,o),i=f(p(i,[0,5]),[0,944331445]);switch(a=[0,0],c=[0,0],n){case 15:c=g(c,h([0,e.charCodeAt(l+14)],48));case 14:c=g(c,h([0,e.charCodeAt(l+13)],40));case 13:c=g(c,h([0,e.charCodeAt(l+12)],32));case 12:c=g(c,h([0,e.charCodeAt(l+11)],24));case 11:c=g(c,h([0,e.charCodeAt(l+10)],16));case 10:c=g(c,h([0,e.charCodeAt(l+9)],8));case 9:c=g(c,[0,e.charCodeAt(l+8)]),c=p(c,s),c=d(c,33),c=p(c,u),i=g(i,c);case 8:a=g(a,h([0,e.charCodeAt(l+7)],56));case 7:a=g(a,h([0,e.charCodeAt(l+6)],48));case 6:a=g(a,h([0,e.charCodeAt(l+5)],40));case 5:a=g(a,h([0,e.charCodeAt(l+4)],32));case 4:a=g(a,h([0,e.charCodeAt(l+3)],24));case 3:a=g(a,h([0,e.charCodeAt(l+2)],16));case 2:a=g(a,h([0,e.charCodeAt(l+1)],8));case 1:a=g(a,[0,e.charCodeAt(l)]),a=p(a,u),a=d(a,31),a=p(a,s),o=g(o,a)}return o=g(o,[0,e.length]),i=g(i,[0,e.length]),o=f(o,i),i=f(i,o),o=m(o),i=m(i),o=f(o,i),i=f(i,o),("00000000"+(o[0]>>>0).toString(16)).slice(-8)+("00000000"+(o[1]>>>0).toString(16)).slice(-8)+("00000000"+(i[0]>>>0).toString(16)).slice(-8)+("00000000"+(i[1]>>>0).toString(16)).slice(-8)}function s(e,t){if(Array.prototype.forEach&&e.forEach===Array.prototype.forEach)e.forEach(t);else if(e.length===+e.length)for(var n=0,r=e.length;n<r;n++)t(e[n],n,e);else for(var o in e)e.hasOwnProperty(o)&&t(e[o],o,e)}function u(e,r){var o=[];return null==e?o:Array.prototype.map&&e.map===Array.prototype.map?e.map(r):(s(e,function(e,t,n){o.push(r(e,t,n))}),o)}function r(e){throw new Error("'new Fingerprint()' is deprecated, see https://github.com/Valve/fingerprintjs2#upgrade-guide-from-182-to-200")}var e={preprocessor:null,audio:{timeout:1e3,excludeIOS11:!0},fonts:{swfContainerId:"fingerprintjs2",swfPath:"flash/compiled/FontList.swf",userDefinedFonts:[],extendedJsFonts:!1},screen:{detectScreenOrientation:!0},plugins:{sortPluginsFor:[/palemoon/i],excludeIE:!1},extraComponents:[],excludes:{enumerateDevices:!0,pixelRatio:!0,doNotTrack:!0,fontsFlash:!0},NOT_AVAILABLE:"not available",ERROR:"error",EXCLUDED:"excluded"},n=function(){return navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices},o=function(e){var t=[window.screen.width,window.screen.height];return e.screen.detectScreenOrientation&&t.sort().reverse(),t},i=function(e){if(window.screen.availWidth&&window.screen.availHeight){var t=[window.screen.availHeight,window.screen.availWidth];return e.screen.detectScreenOrientation&&t.sort().reverse(),t}return e.NOT_AVAILABLE},a=function(e){if(null==navigator.plugins)return e.NOT_AVAILABLE;for(var t=[],n=0,r=navigator.plugins.length;n<r;n++)navigator.plugins[n]&&t.push(navigator.plugins[n]);return y(e)&&(t=t.sort(function(e,t){return e.name>t.name?1:e.name<t.name?-1:0})),u(t,function(e){var t=u(e,function(e){return[e.type,e.suffixes]});return[e.name,e.description,t]})},l=function(t){var e=[];return Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(window,"ActiveXObject")||"ActiveXObject"in window?e=u(["AcroPDF.PDF","Adodb.Stream","AgControl.AgControl","DevalVRXCtrl.DevalVRXCtrl.1","MacromediaFlashPaper.MacromediaFlashPaper","Msxml2.DOMDocument","Msxml2.XMLHTTP","PDF.PdfCtrl","QuickTime.QuickTime","QuickTimeCheckObject.QuickTimeCheck.1","RealPlayer","RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)","RealVideo.RealVideo(tm) ActiveX Control (32-bit)","Scripting.Dictionary","SWCtl.SWCtl","Shell.UIHelper","ShockwaveFlash.ShockwaveFlash","Skype.Detection","TDCCtl.TDCCtl","WMPlayer.OCX","rmocx.RealPlayer G2 Control","rmocx.RealPlayer G2 Control.1"],function(e){try{return new window.ActiveXObject(e),e}catch(e){return t.ERROR}}):e.push(t.NOT_AVAILABLE),navigator.plugins&&(e=e.concat(a(t))),e},y=function(e){for(var t=!1,n=0,r=e.plugins.sortPluginsFor.length;n<r;n++){var o=e.plugins.sortPluginsFor[n];if(navigator.userAgent.match(o)){t=!0;break}}return t},v=function(t){try{return!!window.sessionStorage}catch(e){return t.ERROR}},b=function(t){try{return!!window.localStorage}catch(e){return t.ERROR}},w=function(t){try{return!!window.indexedDB}catch(e){return t.ERROR}},E=function(e){return navigator.hardwareConcurrency?navigator.hardwareConcurrency:e.NOT_AVAILABLE},O=function(e){return navigator.cpuClass||e.NOT_AVAILABLE},_=function(e){return navigator.platform?navigator.platform:e.NOT_AVAILABLE},S=function(e){return navigator.doNotTrack?navigator.doNotTrack:navigator.msDoNotTrack?navigator.msDoNotTrack:window.doNotTrack?window.doNotTrack:e.NOT_AVAILABLE},t=function(){var t,e=0;void 0!==navigator.maxTouchPoints?e=navigator.maxTouchPoints:void 0!==navigator.msMaxTouchPoints&&(e=navigator.msMaxTouchPoints);try{document.createEvent("TouchEvent"),t=!0}catch(e){t=!1}return[e,t,"ontouchstart"in window]},T=function(e){var t=[],n=document.createElement("canvas");n.width=2e3,n.height=200,n.style.display="inline";var r=n.getContext("2d");return r.rect(0,0,10,10),r.rect(2,2,6,6),t.push("canvas winding:"+(!1===r.isPointInPath(5,5,"evenodd")?"yes":"no")),r.textBaseline="alphabetic",r.fillStyle="#f60",r.fillRect(125,1,62,20),r.fillStyle="#069",e.dontUseFakeFontInCanvas?r.font="11pt Arial":r.font="11pt no-real-font-123",r.fillText("Cwm fjordbank glyphs vext quiz, 😃",2,15),r.fillStyle="rgba(102, 204, 0, 0.2)",r.font="18pt Arial",r.fillText("Cwm fjordbank glyphs vext quiz, 😃",4,45),r.globalCompositeOperation="multiply",r.fillStyle="rgb(255,0,255)",r.beginPath(),r.arc(50,50,50,0,2*Math.PI,!0),r.closePath(),r.fill(),r.fillStyle="rgb(0,255,255)",r.beginPath(),r.arc(100,50,50,0,2*Math.PI,!0),r.closePath(),r.fill(),r.fillStyle="rgb(255,255,0)",r.beginPath(),r.arc(75,100,50,0,2*Math.PI,!0),r.closePath(),r.fill(),r.fillStyle="rgb(255,0,255)",r.arc(75,75,75,0,2*Math.PI,!0),r.arc(75,75,25,0,2*Math.PI,!0),r.fill("evenodd"),n.toDataURL&&t.push("canvas fp:"+n.toDataURL()),t},C=function(){function e(e){return a.clearColor(0,0,0,1),a.enable(a.DEPTH_TEST),a.depthFunc(a.LEQUAL),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),"["+e[0]+", "+e[1]+"]"}var a=F();if(!a)return null;var c=[],t=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,t);var n=new Float32Array([-.2,-.9,0,.4,-.26,0,0,.732134444,0]);a.bufferData(a.ARRAY_BUFFER,n,a.STATIC_DRAW),t.itemSize=3,t.numItems=3;var r=a.createProgram(),o=a.createShader(a.VERTEX_SHADER);a.shaderSource(o,"attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"),a.compileShader(o);var i=a.createShader(a.FRAGMENT_SHADER);a.shaderSource(i,"precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"),a.compileShader(i),a.attachShader(r,o),a.attachShader(r,i),a.linkProgram(r),a.useProgram(r),r.vertexPosAttrib=a.getAttribLocation(r,"attrVertex"),r.offsetUniform=a.getUniformLocation(r,"uniformOffset"),a.enableVertexAttribArray(r.vertexPosArray),a.vertexAttribPointer(r.vertexPosAttrib,t.itemSize,a.FLOAT,!1,0,0),a.uniform2f(r.offsetUniform,1,1),a.drawArrays(a.TRIANGLE_STRIP,0,t.numItems);try{c.push(a.canvas.toDataURL())}catch(e){}c.push("extensions:"+(a.getSupportedExtensions()||[]).join(";")),c.push("webgl aliased line width range:"+e(a.getParameter(a.ALIASED_LINE_WIDTH_RANGE))),c.push("webgl aliased point size range:"+e(a.getParameter(a.ALIASED_POINT_SIZE_RANGE))),c.push("webgl alpha bits:"+a.getParameter(a.ALPHA_BITS)),c.push("webgl antialiasing:"+(a.getContextAttributes().antialias?"yes":"no")),c.push("webgl blue bits:"+a.getParameter(a.BLUE_BITS)),c.push("webgl depth bits:"+a.getParameter(a.DEPTH_BITS)),c.push("webgl green bits:"+a.getParameter(a.GREEN_BITS)),c.push("webgl max anisotropy:"+function(e){var t=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic");if(t){var n=e.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT);return 0===n&&(n=2),n}return null}(a)),c.push("webgl max combined texture image units:"+a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS)),c.push("webgl max cube map texture size:"+a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE)),c.push("webgl max fragment uniform vectors:"+a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS)),c.push("webgl max render buffer size:"+a.getParameter(a.MAX_RENDERBUFFER_SIZE)),c.push("webgl max texture image units:"+a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS)),c.push("webgl max texture size:"+a.getParameter(a.MAX_TEXTURE_SIZE)),c.push("webgl max varying vectors:"+a.getParameter(a.MAX_VARYING_VECTORS)),c.push("webgl max vertex attribs:"+a.getParameter(a.MAX_VERTEX_ATTRIBS)),c.push("webgl max vertex texture image units:"+a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS)),c.push("webgl max vertex uniform vectors:"+a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS)),c.push("webgl max viewport dims:"+e(a.getParameter(a.MAX_VIEWPORT_DIMS))),c.push("webgl red bits:"+a.getParameter(a.RED_BITS)),c.push("webgl renderer:"+a.getParameter(a.RENDERER)),c.push("webgl shading language version:"+a.getParameter(a.SHADING_LANGUAGE_VERSION)),c.push("webgl stencil bits:"+a.getParameter(a.STENCIL_BITS)),c.push("webgl vendor:"+a.getParameter(a.VENDOR)),c.push("webgl version:"+a.getParameter(a.VERSION));try{var u=a.getExtension("WEBGL_debug_renderer_info");u&&(c.push("webgl unmasked vendor:"+a.getParameter(u.UNMASKED_VENDOR_WEBGL)),c.push("webgl unmasked renderer:"+a.getParameter(u.UNMASKED_RENDERER_WEBGL)))}catch(e){}return a.getShaderPrecisionFormat&&s(["FLOAT","INT"],function(i){s(["VERTEX","FRAGMENT"],function(o){s(["HIGH","MEDIUM","LOW"],function(r){s(["precision","rangeMin","rangeMax"],function(e){var t=a.getShaderPrecisionFormat(a[o+"_SHADER"],a[r+"_"+i])[e];"precision"!==e&&(e="precision "+e);var n=["webgl ",o.toLowerCase()," shader ",r.toLowerCase()," ",i.toLowerCase()," ",e,":",t].join("");c.push(n)})})})}),c},R=function(){try{var e=F(),t=e.getExtension("WEBGL_debug_renderer_info");return e.getParameter(t.UNMASKED_VENDOR_WEBGL)+"~"+e.getParameter(t.UNMASKED_RENDERER_WEBGL)}catch(e){return null}},x=function(){var e=document.createElement("div");e.innerHTML="&nbsp;";var t=!(e.className="adsbox");try{document.body.appendChild(e),t=0===document.getElementsByClassName("adsbox")[0].offsetHeight,document.body.removeChild(e)}catch(e){t=!1}return t},P=function(){if(void 0!==navigator.languages)try{if(navigator.languages[0].substr(0,2)!==navigator.language.substr(0,2))return!0}catch(e){return!0}return!1},k=function(){return window.screen.width<window.screen.availWidth||window.screen.height<window.screen.availHeight},A=function(){var e=navigator.userAgent.toLowerCase(),t=navigator.oscpu,n=navigator.platform.toLowerCase(),r=0<=e.indexOf("windows phone")?"Windows Phone":0<=e.indexOf("win")?"Windows":0<=e.indexOf("android")?"Android":0<=e.indexOf("linux")||0<=e.indexOf("cros")?"Linux":0<=e.indexOf("iphone")||0<=e.indexOf("ipad")?"iOS":0<=e.indexOf("mac")?"Mac":"Other";if(("ontouchstart"in window||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints)&&"Windows Phone"!==r&&"Android"!==r&&"iOS"!==r&&"Other"!==r)return!0;if(void 0!==t){if(0<=(t=t.toLowerCase()).indexOf("win")&&"Windows"!==r&&"Windows Phone"!==r)return!0;if(0<=t.indexOf("linux")&&"Linux"!==r&&"Android"!==r)return!0;if(0<=t.indexOf("mac")&&"Mac"!==r&&"iOS"!==r)return!0;if((-1===t.indexOf("win")&&-1===t.indexOf("linux")&&-1===t.indexOf("mac"))!=("Other"===r))return!0}return 0<=n.indexOf("win")&&"Windows"!==r&&"Windows Phone"!==r||((0<=n.indexOf("linux")||0<=n.indexOf("android")||0<=n.indexOf("pike"))&&"Linux"!==r&&"Android"!==r||((0<=n.indexOf("mac")||0<=n.indexOf("ipad")||0<=n.indexOf("ipod")||0<=n.indexOf("iphone"))&&"Mac"!==r&&"iOS"!==r||((n.indexOf("win")<0&&n.indexOf("linux")<0&&n.indexOf("mac")<0&&n.indexOf("iphone")<0&&n.indexOf("ipad")<0)!=("Other"===r)||void 0===navigator.plugins&&"Windows"!==r&&"Windows Phone"!==r)))},I=function(){var e=navigator.userAgent.toLowerCase(),t=navigator.productSub,n=0<=e.indexOf("firefox")?"Firefox":0<=e.indexOf("opera")||0<=e.indexOf("opr")?"Opera":0<=e.indexOf("chrome")?"Chrome":0<=e.indexOf("safari")?"Safari":0<=e.indexOf("trident")?"Internet Explorer":"Other";if(("Chrome"===n||"Safari"===n||"Opera"===n)&&"20030107"!==t)return!0;var r,o=eval.toString().length;if(37===o&&"Safari"!==n&&"Firefox"!==n&&"Other"!==n)return!0;if(39===o&&"Internet Explorer"!==n&&"Other"!==n)return!0;if(33===o&&"Chrome"!==n&&"Opera"!==n&&"Other"!==n)return!0;try{throw"a"}catch(e){try{e.toSource(),r=!0}catch(e){r=!1}}return r&&"Firefox"!==n&&"Other"!==n},j=function(){var e=document.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},D=function(){if(!j())return!1;var e=F();return!!window.WebGLRenderingContext&&!!e},B=function(){return"Microsoft Internet Explorer"===navigator.appName||!("Netscape"!==navigator.appName||!/Trident/.test(navigator.userAgent))},L=function(){return void 0!==window.swfobject},N=function(){return window.swfobject.hasFlashPlayerVersion("9.0.0")},M=function(t,e){var n="___fp_swf_loaded";window[n]=function(e){t(e)};var r,o,i=e.fonts.swfContainerId;(o=document.createElement("div")).setAttribute("id",r.fonts.swfContainerId),document.body.appendChild(o);var a={onReady:n};window.swfobject.embedSWF(e.fonts.swfPath,i,"1","1","9.0.0",!1,a,{allowScriptAccess:"always",menu:"false"},{})},F=function(){var e=document.createElement("canvas"),t=null;try{t=e.getContext("webgl")||e.getContext("experimental-webgl")}catch(e){}return t=t||null},U=[{key:"userAgent",getData:function(e){e(navigator.userAgent)}},{key:"webdriver",getData:function(e,t){e(null==navigator.webdriver?t.NOT_AVAILABLE:navigator.webdriver)}},{key:"language",getData:function(e,t){e(navigator.language||navigator.userLanguage||navigator.browserLanguage||navigator.systemLanguage||t.NOT_AVAILABLE)}},{key:"colorDepth",getData:function(e,t){e(window.screen.colorDepth||t.NOT_AVAILABLE)}},{key:"deviceMemory",getData:function(e,t){e(navigator.deviceMemory||t.NOT_AVAILABLE)}},{key:"pixelRatio",getData:function(e,t){e(window.devicePixelRatio||t.NOT_AVAILABLE)}},{key:"hardwareConcurrency",getData:function(e,t){e(E(t))}},{key:"screenResolution",getData:function(e,t){e(o(t))}},{key:"availableScreenResolution",getData:function(e,t){e(i(t))}},{key:"timezoneOffset",getData:function(e){e((new Date).getTimezoneOffset())}},{key:"timezone",getData:function(e,t){window.Intl&&window.Intl.DateTimeFormat?e((new window.Intl.DateTimeFormat).resolvedOptions().timeZone):e(t.NOT_AVAILABLE)}},{key:"sessionStorage",getData:function(e,t){e(v(t))}},{key:"localStorage",getData:function(e,t){e(b(t))}},{key:"indexedDb",getData:function(e,t){e(w(t))}},{key:"addBehavior",getData:function(e){e(!(!document.body||!document.body.addBehavior))}},{key:"openDatabase",getData:function(e){e(!!window.openDatabase)}},{key:"cpuClass",getData:function(e,t){e(O(t))}},{key:"platform",getData:function(e,t){e(_(t))}},{key:"doNotTrack",getData:function(e,t){e(S(t))}},{key:"plugins",getData:function(e,t){B()?t.plugins.excludeIE?e(t.EXCLUDED):e(l(t)):e(a(t))}},{key:"canvas",getData:function(e,t){j()?e(T(t)):e(t.NOT_AVAILABLE)}},{key:"webgl",getData:function(e,t){D()?e(C()):e(t.NOT_AVAILABLE)}},{key:"webglVendorAndRenderer",getData:function(e){D()?e(R()):e()}},{key:"adBlock",getData:function(e){e(x())}},{key:"hasLiedLanguages",getData:function(e){e(P())}},{key:"hasLiedResolution",getData:function(e){e(k())}},{key:"hasLiedOs",getData:function(e){e(A())}},{key:"hasLiedBrowser",getData:function(e){e(I())}},{key:"touchSupport",getData:function(e){e(t())}},{key:"fonts",getData:function(e,t){var l=["monospace","sans-serif","serif"],f=["Andale Mono","Arial","Arial Black","Arial Hebrew","Arial MT","Arial Narrow","Arial Rounded MT Bold","Arial Unicode MS","Bitstream Vera Sans Mono","Book Antiqua","Bookman Old Style","Calibri","Cambria","Cambria Math","Century","Century Gothic","Century Schoolbook","Comic Sans","Comic Sans MS","Consolas","Courier","Courier New","Geneva","Georgia","Helvetica","Helvetica Neue","Impact","Lucida Bright","Lucida Calligraphy","Lucida Console","Lucida Fax","LUCIDA GRANDE","Lucida Handwriting","Lucida Sans","Lucida Sans Typewriter","Lucida Sans Unicode","Microsoft Sans Serif","Monaco","Monotype Corsiva","MS Gothic","MS Outlook","MS PGothic","MS Reference Sans Serif","MS Sans Serif","MS Serif","MYRIAD","MYRIAD PRO","Palatino","Palatino Linotype","Segoe Print","Segoe Script","Segoe UI","Segoe UI Light","Segoe UI Semibold","Segoe UI Symbol","Tahoma","Times","Times New Roman","Times New Roman PS","Trebuchet MS","Verdana","Wingdings","Wingdings 2","Wingdings 3"];t.fonts.extendedJsFonts&&(f=f.concat(["Abadi MT Condensed Light","Academy Engraved LET","ADOBE CASLON PRO","Adobe Garamond","ADOBE GARAMOND PRO","Agency FB","Aharoni","Albertus Extra Bold","Albertus Medium","Algerian","Amazone BT","American Typewriter","American Typewriter Condensed","AmerType Md BT","Andalus","Angsana New","AngsanaUPC","Antique Olive","Aparajita","Apple Chancery","Apple Color Emoji","Apple SD Gothic Neo","Arabic Typesetting","ARCHER","ARNO PRO","Arrus BT","Aurora Cn BT","AvantGarde Bk BT","AvantGarde Md BT","AVENIR","Ayuthaya","Bandy","Bangla Sangam MN","Bank Gothic","BankGothic Md BT","Baskerville","Baskerville Old Face","Batang","BatangChe","Bauer Bodoni","Bauhaus 93","Bazooka","Bell MT","Bembo","Benguiat Bk BT","Berlin Sans FB","Berlin Sans FB Demi","Bernard MT Condensed","BernhardFashion BT","BernhardMod BT","Big Caslon","BinnerD","Blackadder ITC","BlairMdITC TT","Bodoni 72","Bodoni 72 Oldstyle","Bodoni 72 Smallcaps","Bodoni MT","Bodoni MT Black","Bodoni MT Condensed","Bodoni MT Poster Compressed","Bookshelf Symbol 7","Boulder","Bradley Hand","Bradley Hand ITC","Bremen Bd BT","Britannic Bold","Broadway","Browallia New","BrowalliaUPC","Brush Script MT","Californian FB","Calisto MT","Calligrapher","Candara","CaslonOpnface BT","Castellar","Centaur","Cezanne","CG Omega","CG Times","Chalkboard","Chalkboard SE","Chalkduster","Charlesworth","Charter Bd BT","Charter BT","Chaucer","ChelthmITC Bk BT","Chiller","Clarendon","Clarendon Condensed","CloisterBlack BT","Cochin","Colonna MT","Constantia","Cooper Black","Copperplate","Copperplate Gothic","Copperplate Gothic Bold","Copperplate Gothic Light","CopperplGoth Bd BT","Corbel","Cordia New","CordiaUPC","Cornerstone","Coronet","Cuckoo","Curlz MT","DaunPenh","Dauphin","David","DB LCD Temp","DELICIOUS","Denmark","DFKai-SB","Didot","DilleniaUPC","DIN","DokChampa","Dotum","DotumChe","Ebrima","Edwardian Script ITC","Elephant","English 111 Vivace BT","Engravers MT","EngraversGothic BT","Eras Bold ITC","Eras Demi ITC","Eras Light ITC","Eras Medium ITC","EucrosiaUPC","Euphemia","Euphemia UCAS","EUROSTILE","Exotc350 Bd BT","FangSong","Felix Titling","Fixedsys","FONTIN","Footlight MT Light","Forte","FrankRuehl","Fransiscan","Freefrm721 Blk BT","FreesiaUPC","Freestyle Script","French Script MT","FrnkGothITC Bk BT","Fruitger","FRUTIGER","Futura","Futura Bk BT","Futura Lt BT","Futura Md BT","Futura ZBlk BT","FuturaBlack BT","Gabriola","Galliard BT","Gautami","Geeza Pro","Geometr231 BT","Geometr231 Hv BT","Geometr231 Lt BT","GeoSlab 703 Lt BT","GeoSlab 703 XBd BT","Gigi","Gill Sans","Gill Sans MT","Gill Sans MT Condensed","Gill Sans MT Ext Condensed Bold","Gill Sans Ultra Bold","Gill Sans Ultra Bold Condensed","Gisha","Gloucester MT Extra Condensed","GOTHAM","GOTHAM BOLD","Goudy Old Style","Goudy Stout","GoudyHandtooled BT","GoudyOLSt BT","Gujarati Sangam MN","Gulim","GulimChe","Gungsuh","GungsuhChe","Gurmukhi MN","Haettenschweiler","Harlow Solid Italic","Harrington","Heather","Heiti SC","Heiti TC","HELV","Herald","High Tower Text","Hiragino Kaku Gothic ProN","Hiragino Mincho ProN","Hoefler Text","Humanst 521 Cn BT","Humanst521 BT","Humanst521 Lt BT","Imprint MT Shadow","Incised901 Bd BT","Incised901 BT","Incised901 Lt BT","INCONSOLATA","Informal Roman","Informal011 BT","INTERSTATE","IrisUPC","Iskoola Pota","JasmineUPC","Jazz LET","Jenson","Jester","Jokerman","Juice ITC","Kabel Bk BT","Kabel Ult BT","Kailasa","KaiTi","Kalinga","Kannada Sangam MN","Kartika","Kaufmann Bd BT","Kaufmann BT","Khmer UI","KodchiangUPC","Kokila","Korinna BT","Kristen ITC","Krungthep","Kunstler Script","Lao UI","Latha","Leelawadee","Letter Gothic","Levenim MT","LilyUPC","Lithograph","Lithograph Light","Long Island","Lydian BT","Magneto","Maiandra GD","Malayalam Sangam MN","Malgun Gothic","Mangal","Marigold","Marion","Marker Felt","Market","Marlett","Matisse ITC","Matura MT Script Capitals","Meiryo","Meiryo UI","Microsoft Himalaya","Microsoft JhengHei","Microsoft New Tai Lue","Microsoft PhagsPa","Microsoft Tai Le","Microsoft Uighur","Microsoft YaHei","Microsoft Yi Baiti","MingLiU","MingLiU_HKSCS","MingLiU_HKSCS-ExtB","MingLiU-ExtB","Minion","Minion Pro","Miriam","Miriam Fixed","Mistral","Modern","Modern No. 20","Mona Lisa Solid ITC TT","Mongolian Baiti","MONO","MoolBoran","Mrs Eaves","MS LineDraw","MS Mincho","MS PMincho","MS Reference Specialty","MS UI Gothic","MT Extra","MUSEO","MV Boli","Nadeem","Narkisim","NEVIS","News Gothic","News GothicMT","NewsGoth BT","Niagara Engraved","Niagara Solid","Noteworthy","NSimSun","Nyala","OCR A Extended","Old Century","Old English Text MT","Onyx","Onyx BT","OPTIMA","Oriya Sangam MN","OSAKA","OzHandicraft BT","Palace Script MT","Papyrus","Parchment","Party LET","Pegasus","Perpetua","Perpetua Titling MT","PetitaBold","Pickwick","Plantagenet Cherokee","Playbill","PMingLiU","PMingLiU-ExtB","Poor Richard","Poster","PosterBodoni BT","PRINCETOWN LET","Pristina","PTBarnum BT","Pythagoras","Raavi","Rage Italic","Ravie","Ribbon131 Bd BT","Rockwell","Rockwell Condensed","Rockwell Extra Bold","Rod","Roman","Sakkal Majalla","Santa Fe LET","Savoye LET","Sceptre","Script","Script MT Bold","SCRIPTINA","Serifa","Serifa BT","Serifa Th BT","ShelleyVolante BT","Sherwood","Shonar Bangla","Showcard Gothic","Shruti","Signboard","SILKSCREEN","SimHei","Simplified Arabic","Simplified Arabic Fixed","SimSun","SimSun-ExtB","Sinhala Sangam MN","Sketch Rockwell","Skia","Small Fonts","Snap ITC","Snell Roundhand","Socket","Souvenir Lt BT","Staccato222 BT","Steamer","Stencil","Storybook","Styllo","Subway","Swis721 BlkEx BT","Swiss911 XCm BT","Sylfaen","Synchro LET","System","Tamil Sangam MN","Technical","Teletype","Telugu Sangam MN","Tempus Sans ITC","Terminal","Thonburi","Traditional Arabic","Trajan","TRAJAN PRO","Tristan","Tubular","Tunga","Tw Cen MT","Tw Cen MT Condensed","Tw Cen MT Condensed Extra Bold","TypoUpright BT","Unicorn","Univers","Univers CE 55 Medium","Univers Condensed","Utsaah","Vagabond","Vani","Vijaya","Viner Hand ITC","VisualUI","Vivaldi","Vladimir Script","Vrinda","Westminster","WHITNEY","Wide Latin","ZapfEllipt BT","ZapfHumnst BT","ZapfHumnst Dm BT","Zapfino","Zurich BlkEx BT","Zurich Ex BT","ZWAdobeF"])),f=(f=f.concat(t.fonts.userDefinedFonts)).filter(function(e,t){return f.indexOf(e)===t});function p(){var e=document.createElement("span");return e.style.position="absolute",e.style.left="-9999px",e.style.fontSize="72px",e.style.fontStyle="normal",e.style.fontWeight="normal",e.style.letterSpacing="normal",e.style.lineBreak="auto",e.style.lineHeight="normal",e.style.textTransform="none",e.style.textAlign="left",e.style.textDecoration="none",e.style.textShadow="none",e.style.whiteSpace="normal",e.style.wordBreak="normal",e.style.wordSpacing="normal",e.innerHTML="mmmmmmmmmmlli",e}var n=document.getElementsByTagName("body")[0],o=document.createElement("div"),d=document.createElement("div"),r={},i={},a=function(){for(var e=[],t=0,n=l.length;t<n;t++){var r=p();r.style.fontFamily=l[t],o.appendChild(r),e.push(r)}return e}();n.appendChild(o);for(var c=0,u=l.length;c<u;c++)r[l[c]]=a[c].offsetWidth,i[l[c]]=a[c].offsetHeight;var s=function(){for(var e,t,n,r={},o=0,i=f.length;o<i;o++){for(var a=[],c=0,u=l.length;c<u;c++){var s=(e=f[o],t=l[c],n=void 0,(n=p()).style.fontFamily="'"+e+"',"+t,n);d.appendChild(s),a.push(s)}r[f[o]]=a}return r}();n.appendChild(d);for(var h=[],g=0,m=f.length;g<m;g++)!function(e){for(var t=!1,n=0;n<l.length;n++)if(t=e[n].offsetWidth!==r[l[n]]||e[n].offsetHeight!==i[l[n]])return t;return t}(s[f[g]])||h.push(f[g]);n.removeChild(d),n.removeChild(o),e(h)},pauseBefore:!0},{key:"fontsFlash",getData:function(t,e){return L()?N()?e.fonts.swfPath?void M(function(e){t(e)},e):t("missing options.fonts.swfPath"):t("flash not installed"):t("swf object not loaded")},pauseBefore:!0},{key:"audio",getData:function(n,e){var t=e.audio;if(t.excludeIOS11&&navigator.userAgent.match(/OS 11.+Version\/11.+Safari/))return n(e.EXCLUDED);var r=window.OfflineAudioContext||window.webkitOfflineAudioContext;if(null==r)return n(e.NOT_AVAILABLE);var o=new r(1,44100,44100),i=o.createOscillator();i.type="triangle",i.frequency.setValueAtTime(1e4,o.currentTime);var a=o.createDynamicsCompressor();s([["threshold",-50],["knee",40],["ratio",12],["reduction",-20],["attack",0],["release",.25]],function(e){void 0!==a[e[0]]&&"function"==typeof a[e[0]].setValueAtTime&&a[e[0]].setValueAtTime(e[1],o.currentTime)}),i.connect(a),a.connect(o.destination),i.start(0),o.startRendering();var c=setTimeout(function(){return console.warn('Audio fingerprint timed out. Please report bug at https://github.com/Valve/fingerprintjs2 with your user agent: "'+navigator.userAgent+'".'),o.oncomplete=function(){},o=null,n("audioTimeout")},t.timeout);o.oncomplete=function(e){var t;try{clearTimeout(c),t=e.renderedBuffer.getChannelData(0).slice(4500,5e3).reduce(function(e,t){return e+Math.abs(t)},0).toString(),i.disconnect(),a.disconnect()}catch(e){return void n(e)}n(t)}}},{key:"enumerateDevices",getData:function(t,e){if(!n())return t(e.NOT_AVAILABLE);navigator.mediaDevices.enumerateDevices().then(function(e){t(e.map(function(e){return"id="+e.deviceId+";gid="+e.groupId+";"+e.kind+";"+e.label}))}).catch(function(e){t(e)})}}];return r.get=function(n,r){(function(e,t){if(null==t)return;var n,r;for(r in t)null==(n=t[r])||Object.prototype.hasOwnProperty.call(e,r)||(e[r]=n)})(n=r?n||{}:(r=n,{}),e),n.components=n.extraComponents.concat(U);var o={data:[],addPreprocessedComponent:function(e,t){"function"==typeof n.preprocessor&&(t=n.preprocessor(e,t)),o.data.push({key:e,value:t})}},i=-1,a=function(e){if((i+=1)>=n.components.length)r(o.data);else{var t=n.components[i];if(n.excludes[t.key])a(!1);else{if(!e&&t.pauseBefore)return--i,void setTimeout(function(){a(!0)},1);try{t.getData(function(e){o.addPreprocessedComponent(t.key,e),a(!1)},n)}catch(e){o.addPreprocessedComponent(t.key,String(e)),a(!1)}}}};a(!1)},r.getPromise=function(n){return new q(function(e,t){r.get(n,e)})},r.getV18=function(i,a){return null==a&&(a=i,i={}),r.get(i,function(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];if(r.value===(i.NOT_AVAILABLE||"not available"))t.push({key:r.key,value:"unknown"});else if("plugins"===r.key)t.push({key:"plugins",value:u(r.value,function(e){var t=u(e[2],function(e){return e.join?e.join("~"):e}).join(",");return[e[0],e[1],t].join("::")})});else if(-1!==["canvas","webgl"].indexOf(r.key))t.push({key:r.key,value:r.value.join("~")});else if(-1!==["sessionStorage","localStorage","indexedDb","addBehavior","openDatabase"].indexOf(r.key)){if(!r.value)continue;t.push({key:r.key,value:1})}else r.value?t.push(r.value.join?{key:r.key,value:r.value.join(";")}:r):t.push({key:r.key,value:r.value})}var o=c(u(t,function(e){return e.value}).join("~~~"),31);a(o,t)})},r.x64hash128=c,r.VERSION="2.1.0",r})}).call(this,a(11))},,,,function(e,t,n){n(107);var r=n(66);e.exports=r("Array","find")},,function(e,t,n){"use strict";var r=n(62),o=n(63).find,i=n(64),a=n(65),c="find",u=!0,s=a(c);c in[]&&Array(1).find(function(){u=!1}),r({target:"Array",proto:!0,forced:u||!s},{find:function(e,t){return o(this,e,1<arguments.length?t:void 0)}}),i(c)},function(e,t,n){},function(t,e){(function(e){t.exports=e}).call(this,{})}]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/choices-guide/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/core-js/es/array/find-index.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/es/array/find-index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.array.find-index */ "./node_modules/core-js/modules/es.array.find-index.js");
var entryUnbind = __webpack_require__(/*! ../../internals/entry-unbind */ "./node_modules/core-js/internals/entry-unbind.js");

module.exports = entryUnbind('Array', 'findIndex');


/***/ }),

/***/ "./node_modules/core-js/es/array/find.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/es/array/find.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
var entryUnbind = __webpack_require__(/*! ../../internals/entry-unbind */ "./node_modules/core-js/internals/entry-unbind.js");

module.exports = entryUnbind('Array', 'find');


/***/ }),

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-uses-to-length.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-uses-to-length.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/entry-unbind.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/entry-unbind.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");

var call = Function.call;

module.exports = function (CONSTRUCTOR, METHOD, length) {
  return bind(call, global[CONSTRUCTOR].prototype[METHOD], length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = global;


/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $findIndex = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").findIndex;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;

var USES_TO_LENGTH = arrayMethodUsesToLength(FIND_INDEX);

// Shouldn't skip holes
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

// `Array.prototype.findIndex` method
// https://tc39.github.io/ecma262/#sec-array.prototype.findindex
$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND_INDEX);


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $find = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").find;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var FIND = 'find';
var SKIPS_HOLES = true;

var USES_TO_LENGTH = arrayMethodUsesToLength(FIND);

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.github.io/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "./node_modules/custom-event-polyfill/polyfill.js":
/*!********************************************************!*\
  !*** ./node_modules/custom-event-polyfill/polyfill.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Polyfill for creating CustomEvents on IE9/10/11

// code pulled from:
// https://github.com/d4tocchini/customevent-polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent#Polyfill

(function() {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    var ce = new window.CustomEvent('test', { cancelable: true });
    ce.preventDefault();
    if (ce.defaultPrevented !== true) {
      // IE has problems with .preventDefault() on custom events
      // http://stackoverflow.com/questions/23349191
      throw new Error('Could not prevent default');
    }
  } catch (e) {
    var CustomEvent = function(event, params) {
      var evt, origPrevent;
      params = params || {};
      params.bubbles = !!params.bubbles;
      params.cancelable = !!params.cancelable;

      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(
        event,
        params.bubbles,
        params.cancelable,
        params.detail
      );
      origPrevent = evt.preventDefault;
      evt.preventDefault = function() {
        origPrevent.call(this);
        try {
          Object.defineProperty(this, 'defaultPrevented', {
            get: function() {
              return true;
            }
          });
        } catch (e) {
          this.defaultPrevented = true;
        }
      };
      return evt;
    };

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent; // expose definition to window
  }
})();


/***/ }),

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

/***/ "./node_modules/fingerprintjs2/fingerprint2.js":
/*!*****************************************************!*\
  !*** ./node_modules/fingerprintjs2/fingerprint2.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Promise) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
* Fingerprintjs2 2.1.0 - Modern & flexible browser fingerprint library v2
* https://github.com/Valve/fingerprintjs2
* Copyright (c) 2015 Valentin Vasilyev (valentin.vasilyev@outlook.com)
* Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL VALENTIN VASILYEV BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
* THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
/* global define */
(function (name, context, definition) {
  'use strict'
  if (typeof window !== 'undefined' && "function" === 'function' && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) { !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) } else if ( true && module.exports) { module.exports = definition() } else if (context.exports) { context.exports = definition() } else { context[name] = definition() }
})('Fingerprint2', this, function () {
  'use strict'

  /// MurmurHash3 related functions

  //
  // Given two 64bit ints (as an array of two 32bit ints) returns the two
  // added together as a 64bit int (as an array of two 32bit ints).
  //
  var x64Add = function (m, n) {
    m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff]
    n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff]
    var o = [0, 0, 0, 0]
    o[3] += m[3] + n[3]
    o[2] += o[3] >>> 16
    o[3] &= 0xffff
    o[2] += m[2] + n[2]
    o[1] += o[2] >>> 16
    o[2] &= 0xffff
    o[1] += m[1] + n[1]
    o[0] += o[1] >>> 16
    o[1] &= 0xffff
    o[0] += m[0] + n[0]
    o[0] &= 0xffff
    return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]]
  }

  //
  // Given two 64bit ints (as an array of two 32bit ints) returns the two
  // multiplied together as a 64bit int (as an array of two 32bit ints).
  //
  var x64Multiply = function (m, n) {
    m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff]
    n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff]
    var o = [0, 0, 0, 0]
    o[3] += m[3] * n[3]
    o[2] += o[3] >>> 16
    o[3] &= 0xffff
    o[2] += m[2] * n[3]
    o[1] += o[2] >>> 16
    o[2] &= 0xffff
    o[2] += m[3] * n[2]
    o[1] += o[2] >>> 16
    o[2] &= 0xffff
    o[1] += m[1] * n[3]
    o[0] += o[1] >>> 16
    o[1] &= 0xffff
    o[1] += m[2] * n[2]
    o[0] += o[1] >>> 16
    o[1] &= 0xffff
    o[1] += m[3] * n[1]
    o[0] += o[1] >>> 16
    o[1] &= 0xffff
    o[0] += (m[0] * n[3]) + (m[1] * n[2]) + (m[2] * n[1]) + (m[3] * n[0])
    o[0] &= 0xffff
    return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]]
  }
  //
  // Given a 64bit int (as an array of two 32bit ints) and an int
  // representing a number of bit positions, returns the 64bit int (as an
  // array of two 32bit ints) rotated left by that number of positions.
  //
  var x64Rotl = function (m, n) {
    n %= 64
    if (n === 32) {
      return [m[1], m[0]]
    } else if (n < 32) {
      return [(m[0] << n) | (m[1] >>> (32 - n)), (m[1] << n) | (m[0] >>> (32 - n))]
    } else {
      n -= 32
      return [(m[1] << n) | (m[0] >>> (32 - n)), (m[0] << n) | (m[1] >>> (32 - n))]
    }
  }
  //
  // Given a 64bit int (as an array of two 32bit ints) and an int
  // representing a number of bit positions, returns the 64bit int (as an
  // array of two 32bit ints) shifted left by that number of positions.
  //
  var x64LeftShift = function (m, n) {
    n %= 64
    if (n === 0) {
      return m
    } else if (n < 32) {
      return [(m[0] << n) | (m[1] >>> (32 - n)), m[1] << n]
    } else {
      return [m[1] << (n - 32), 0]
    }
  }
  //
  // Given two 64bit ints (as an array of two 32bit ints) returns the two
  // xored together as a 64bit int (as an array of two 32bit ints).
  //
  var x64Xor = function (m, n) {
    return [m[0] ^ n[0], m[1] ^ n[1]]
  }
  //
  // Given a block, returns murmurHash3's final x64 mix of that block.
  // (`[0, h[0] >>> 1]` is a 33 bit unsigned right shift. This is the
  // only place where we need to right shift 64bit ints.)
  //
  var x64Fmix = function (h) {
    h = x64Xor(h, [0, h[0] >>> 1])
    h = x64Multiply(h, [0xff51afd7, 0xed558ccd])
    h = x64Xor(h, [0, h[0] >>> 1])
    h = x64Multiply(h, [0xc4ceb9fe, 0x1a85ec53])
    h = x64Xor(h, [0, h[0] >>> 1])
    return h
  }

  //
  // Given a string and an optional seed as an int, returns a 128 bit
  // hash using the x64 flavor of MurmurHash3, as an unsigned hex.
  //
  var x64hash128 = function (key, seed) {
    key = key || ''
    seed = seed || 0
    var remainder = key.length % 16
    var bytes = key.length - remainder
    var h1 = [0, seed]
    var h2 = [0, seed]
    var k1 = [0, 0]
    var k2 = [0, 0]
    var c1 = [0x87c37b91, 0x114253d5]
    var c2 = [0x4cf5ad43, 0x2745937f]
    for (var i = 0; i < bytes; i = i + 16) {
      k1 = [((key.charCodeAt(i + 4) & 0xff)) | ((key.charCodeAt(i + 5) & 0xff) << 8) | ((key.charCodeAt(i + 6) & 0xff) << 16) | ((key.charCodeAt(i + 7) & 0xff) << 24), ((key.charCodeAt(i) & 0xff)) | ((key.charCodeAt(i + 1) & 0xff) << 8) | ((key.charCodeAt(i + 2) & 0xff) << 16) | ((key.charCodeAt(i + 3) & 0xff) << 24)]
      k2 = [((key.charCodeAt(i + 12) & 0xff)) | ((key.charCodeAt(i + 13) & 0xff) << 8) | ((key.charCodeAt(i + 14) & 0xff) << 16) | ((key.charCodeAt(i + 15) & 0xff) << 24), ((key.charCodeAt(i + 8) & 0xff)) | ((key.charCodeAt(i + 9) & 0xff) << 8) | ((key.charCodeAt(i + 10) & 0xff) << 16) | ((key.charCodeAt(i + 11) & 0xff) << 24)]
      k1 = x64Multiply(k1, c1)
      k1 = x64Rotl(k1, 31)
      k1 = x64Multiply(k1, c2)
      h1 = x64Xor(h1, k1)
      h1 = x64Rotl(h1, 27)
      h1 = x64Add(h1, h2)
      h1 = x64Add(x64Multiply(h1, [0, 5]), [0, 0x52dce729])
      k2 = x64Multiply(k2, c2)
      k2 = x64Rotl(k2, 33)
      k2 = x64Multiply(k2, c1)
      h2 = x64Xor(h2, k2)
      h2 = x64Rotl(h2, 31)
      h2 = x64Add(h2, h1)
      h2 = x64Add(x64Multiply(h2, [0, 5]), [0, 0x38495ab5])
    }
    k1 = [0, 0]
    k2 = [0, 0]
    switch (remainder) {
      case 15:
        k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 14)], 48))
      // fallthrough
      case 14:
        k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 13)], 40))
      // fallthrough
      case 13:
        k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 12)], 32))
      // fallthrough
      case 12:
        k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 11)], 24))
      // fallthrough
      case 11:
        k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 10)], 16))
      // fallthrough
      case 10:
        k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 9)], 8))
      // fallthrough
      case 9:
        k2 = x64Xor(k2, [0, key.charCodeAt(i + 8)])
        k2 = x64Multiply(k2, c2)
        k2 = x64Rotl(k2, 33)
        k2 = x64Multiply(k2, c1)
        h2 = x64Xor(h2, k2)
      // fallthrough
      case 8:
        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 7)], 56))
      // fallthrough
      case 7:
        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 6)], 48))
      // fallthrough
      case 6:
        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 5)], 40))
      // fallthrough
      case 5:
        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 4)], 32))
      // fallthrough
      case 4:
        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 3)], 24))
      // fallthrough
      case 3:
        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 2)], 16))
      // fallthrough
      case 2:
        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 1)], 8))
      // fallthrough
      case 1:
        k1 = x64Xor(k1, [0, key.charCodeAt(i)])
        k1 = x64Multiply(k1, c1)
        k1 = x64Rotl(k1, 31)
        k1 = x64Multiply(k1, c2)
        h1 = x64Xor(h1, k1)
      // fallthrough
    }
    h1 = x64Xor(h1, [0, key.length])
    h2 = x64Xor(h2, [0, key.length])
    h1 = x64Add(h1, h2)
    h2 = x64Add(h2, h1)
    h1 = x64Fmix(h1)
    h2 = x64Fmix(h2)
    h1 = x64Add(h1, h2)
    h2 = x64Add(h2, h1)
    return ('00000000' + (h1[0] >>> 0).toString(16)).slice(-8) + ('00000000' + (h1[1] >>> 0).toString(16)).slice(-8) + ('00000000' + (h2[0] >>> 0).toString(16)).slice(-8) + ('00000000' + (h2[1] >>> 0).toString(16)).slice(-8)
  }

  var defaultOptions = {
    preprocessor: null,
    audio: {
      timeout: 1000,
      // On iOS 11, audio context can only be used in response to user interaction.
      // We require users to explicitly enable audio fingerprinting on iOS 11.
      // See https://stackoverflow.com/questions/46363048/onaudioprocess-not-called-on-ios11#46534088
      excludeIOS11: true
    },
    fonts: {
      swfContainerId: 'fingerprintjs2',
      swfPath: 'flash/compiled/FontList.swf',
      userDefinedFonts: [],
      extendedJsFonts: false
    },
    screen: {
      // To ensure consistent fingerprints when users rotate their mobile devices
      detectScreenOrientation: true
    },
    plugins: {
      sortPluginsFor: [/palemoon/i],
      excludeIE: false
    },
    extraComponents: [],
    excludes: {
      // Unreliable on Windows, see https://github.com/Valve/fingerprintjs2/issues/375
      'enumerateDevices': true,
      // devicePixelRatio depends on browser zoom, and it's impossible to detect browser zoom
      'pixelRatio': true,
      // DNT depends on incognito mode for some browsers (Chrome) and it's impossible to detect incognito mode
      'doNotTrack': true,
      // uses js fonts already
      'fontsFlash': true
    },
    NOT_AVAILABLE: 'not available',
    ERROR: 'error',
    EXCLUDED: 'excluded'
  }

  var each = function (obj, iterator) {
    if (Array.prototype.forEach && obj.forEach === Array.prototype.forEach) {
      obj.forEach(iterator)
    } else if (obj.length === +obj.length) {
      for (var i = 0, l = obj.length; i < l; i++) {
        iterator(obj[i], i, obj)
      }
    } else {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          iterator(obj[key], key, obj)
        }
      }
    }
  }

  var map = function (obj, iterator) {
    var results = []
    // Not using strict equality so that this acts as a
    // shortcut to checking for `null` and `undefined`.
    if (obj == null) {
      return results
    }
    if (Array.prototype.map && obj.map === Array.prototype.map) { return obj.map(iterator) }
    each(obj, function (value, index, list) {
      results.push(iterator(value, index, list))
    })
    return results
  }

  var extendSoft = function (target, source) {
    if (source == null) { return target }
    var value
    var key
    for (key in source) {
      value = source[key]
      if (value != null && !(Object.prototype.hasOwnProperty.call(target, key))) {
        target[key] = value
      }
    }
    return target
  }

  // https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/enumerateDevices
  var enumerateDevicesKey = function (done, options) {
    if (!isEnumerateDevicesSupported()) {
      return done(options.NOT_AVAILABLE)
    }
    navigator.mediaDevices.enumerateDevices().then(function (devices) {
      done(devices.map(function (device) {
        return 'id=' + device.deviceId + ';gid=' + device.groupId + ';' + device.kind + ';' + device.label
      }))
    })
      .catch(function (error) {
        done(error)
      })
  }

  var isEnumerateDevicesSupported = function () {
    return (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices)
  }
  // Inspired by and based on https://github.com/cozylife/audio-fingerprint
  var audioKey = function (done, options) {
    var audioOptions = options.audio
    if (audioOptions.excludeIOS11 && navigator.userAgent.match(/OS 11.+Version\/11.+Safari/)) {
      // See comment for excludeUserAgent and https://stackoverflow.com/questions/46363048/onaudioprocess-not-called-on-ios11#46534088
      return done(options.EXCLUDED)
    }

    var AudioContext = window.OfflineAudioContext || window.webkitOfflineAudioContext

    if (AudioContext == null) {
      return done(options.NOT_AVAILABLE)
    }

    var context = new AudioContext(1, 44100, 44100)

    var oscillator = context.createOscillator()
    oscillator.type = 'triangle'
    oscillator.frequency.setValueAtTime(10000, context.currentTime)

    var compressor = context.createDynamicsCompressor()
    each([
      ['threshold', -50],
      ['knee', 40],
      ['ratio', 12],
      ['reduction', -20],
      ['attack', 0],
      ['release', 0.25]
    ], function (item) {
      if (compressor[item[0]] !== undefined && typeof compressor[item[0]].setValueAtTime === 'function') {
        compressor[item[0]].setValueAtTime(item[1], context.currentTime)
      }
    })

    oscillator.connect(compressor)
    compressor.connect(context.destination)
    oscillator.start(0)
    context.startRendering()

    var audioTimeoutId = setTimeout(function () {
      console.warn('Audio fingerprint timed out. Please report bug at https://github.com/Valve/fingerprintjs2 with your user agent: "' + navigator.userAgent + '".')
      context.oncomplete = function () { }
      context = null
      return done('audioTimeout')
    }, audioOptions.timeout)

    context.oncomplete = function (event) {
      var fingerprint
      try {
        clearTimeout(audioTimeoutId)
        fingerprint = event.renderedBuffer.getChannelData(0)
          .slice(4500, 5000)
          .reduce(function (acc, val) { return acc + Math.abs(val) }, 0)
          .toString()
        oscillator.disconnect()
        compressor.disconnect()
      } catch (error) {
        done(error)
        return
      }
      done(fingerprint)
    }
  }
  var UserAgent = function (done) {
    done(navigator.userAgent)
  }
  var webdriver = function (done, options) {
    done(navigator.webdriver == null ? options.NOT_AVAILABLE : navigator.webdriver)
  }
  var languageKey = function (done, options) {
    done(navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || options.NOT_AVAILABLE)
  }
  var colorDepthKey = function (done, options) {
    done(window.screen.colorDepth || options.NOT_AVAILABLE)
  }
  var deviceMemoryKey = function (done, options) {
    done(navigator.deviceMemory || options.NOT_AVAILABLE)
  }
  var pixelRatioKey = function (done, options) {
    done(window.devicePixelRatio || options.NOT_AVAILABLE)
  }
  var screenResolutionKey = function (done, options) {
    done(getScreenResolution(options))
  }
  var getScreenResolution = function (options) {
    var resolution = [window.screen.width, window.screen.height]
    if (options.screen.detectScreenOrientation) {
      resolution.sort().reverse()
    }
    return resolution
  }
  var availableScreenResolutionKey = function (done, options) {
    done(getAvailableScreenResolution(options))
  }
  var getAvailableScreenResolution = function (options) {
    if (window.screen.availWidth && window.screen.availHeight) {
      var available = [window.screen.availHeight, window.screen.availWidth]
      if (options.screen.detectScreenOrientation) {
        available.sort().reverse()
      }
      return available
    }
    // headless browsers
    return options.NOT_AVAILABLE
  }
  var timezoneOffset = function (done) {
    done(new Date().getTimezoneOffset())
  }
  var timezone = function (done, options) {
    if (window.Intl && window.Intl.DateTimeFormat) {
      done(new window.Intl.DateTimeFormat().resolvedOptions().timeZone)
      return
    }
    done(options.NOT_AVAILABLE)
  }
  var sessionStorageKey = function (done, options) {
    done(hasSessionStorage(options))
  }
  var localStorageKey = function (done, options) {
    done(hasLocalStorage(options))
  }
  var indexedDbKey = function (done, options) {
    done(hasIndexedDB(options))
  }
  var addBehaviorKey = function (done) {
    // body might not be defined at this point or removed programmatically
    done(!!(document.body && document.body.addBehavior))
  }
  var openDatabaseKey = function (done) {
    done(!!window.openDatabase)
  }
  var cpuClassKey = function (done, options) {
    done(getNavigatorCpuClass(options))
  }
  var platformKey = function (done, options) {
    done(getNavigatorPlatform(options))
  }
  var doNotTrackKey = function (done, options) {
    done(getDoNotTrack(options))
  }
  var canvasKey = function (done, options) {
    if (isCanvasSupported()) {
      done(getCanvasFp(options))
      return
    }
    done(options.NOT_AVAILABLE)
  }
  var webglKey = function (done, options) {
    if (isWebGlSupported()) {
      done(getWebglFp())
      return
    }
    done(options.NOT_AVAILABLE)
  }
  var webglVendorAndRendererKey = function (done) {
    if (isWebGlSupported()) {
      done(getWebglVendorAndRenderer())
      return
    }
    done()
  }
  var adBlockKey = function (done) {
    done(getAdBlock())
  }
  var hasLiedLanguagesKey = function (done) {
    done(getHasLiedLanguages())
  }
  var hasLiedResolutionKey = function (done) {
    done(getHasLiedResolution())
  }
  var hasLiedOsKey = function (done) {
    done(getHasLiedOs())
  }
  var hasLiedBrowserKey = function (done) {
    done(getHasLiedBrowser())
  }
  // flash fonts (will increase fingerprinting time 20X to ~ 130-150ms)
  var flashFontsKey = function (done, options) {
    // we do flash if swfobject is loaded
    if (!hasSwfObjectLoaded()) {
      return done('swf object not loaded')
    }
    if (!hasMinFlashInstalled()) {
      return done('flash not installed')
    }
    if (!options.fonts.swfPath) {
      return done('missing options.fonts.swfPath')
    }
    loadSwfAndDetectFonts(function (fonts) {
      done(fonts)
    }, options)
  }
  // kudos to http://www.lalit.org/lab/javascript-css-font-detect/
  var jsFontsKey = function (done, options) {
    // a font will be compared against all the three default fonts.
    // and if it doesn't match all 3 then that font is not available.
    var baseFonts = ['monospace', 'sans-serif', 'serif']

    var fontList = [
      'Andale Mono', 'Arial', 'Arial Black', 'Arial Hebrew', 'Arial MT', 'Arial Narrow', 'Arial Rounded MT Bold', 'Arial Unicode MS',
      'Bitstream Vera Sans Mono', 'Book Antiqua', 'Bookman Old Style',
      'Calibri', 'Cambria', 'Cambria Math', 'Century', 'Century Gothic', 'Century Schoolbook', 'Comic Sans', 'Comic Sans MS', 'Consolas', 'Courier', 'Courier New',
      'Geneva', 'Georgia',
      'Helvetica', 'Helvetica Neue',
      'Impact',
      'Lucida Bright', 'Lucida Calligraphy', 'Lucida Console', 'Lucida Fax', 'LUCIDA GRANDE', 'Lucida Handwriting', 'Lucida Sans', 'Lucida Sans Typewriter', 'Lucida Sans Unicode',
      'Microsoft Sans Serif', 'Monaco', 'Monotype Corsiva', 'MS Gothic', 'MS Outlook', 'MS PGothic', 'MS Reference Sans Serif', 'MS Sans Serif', 'MS Serif', 'MYRIAD', 'MYRIAD PRO',
      'Palatino', 'Palatino Linotype',
      'Segoe Print', 'Segoe Script', 'Segoe UI', 'Segoe UI Light', 'Segoe UI Semibold', 'Segoe UI Symbol',
      'Tahoma', 'Times', 'Times New Roman', 'Times New Roman PS', 'Trebuchet MS',
      'Verdana', 'Wingdings', 'Wingdings 2', 'Wingdings 3'
    ]

    if (options.fonts.extendedJsFonts) {
      var extendedFontList = [
        'Abadi MT Condensed Light', 'Academy Engraved LET', 'ADOBE CASLON PRO', 'Adobe Garamond', 'ADOBE GARAMOND PRO', 'Agency FB', 'Aharoni', 'Albertus Extra Bold', 'Albertus Medium', 'Algerian', 'Amazone BT', 'American Typewriter',
        'American Typewriter Condensed', 'AmerType Md BT', 'Andalus', 'Angsana New', 'AngsanaUPC', 'Antique Olive', 'Aparajita', 'Apple Chancery', 'Apple Color Emoji', 'Apple SD Gothic Neo', 'Arabic Typesetting', 'ARCHER',
        'ARNO PRO', 'Arrus BT', 'Aurora Cn BT', 'AvantGarde Bk BT', 'AvantGarde Md BT', 'AVENIR', 'Ayuthaya', 'Bandy', 'Bangla Sangam MN', 'Bank Gothic', 'BankGothic Md BT', 'Baskerville',
        'Baskerville Old Face', 'Batang', 'BatangChe', 'Bauer Bodoni', 'Bauhaus 93', 'Bazooka', 'Bell MT', 'Bembo', 'Benguiat Bk BT', 'Berlin Sans FB', 'Berlin Sans FB Demi', 'Bernard MT Condensed', 'BernhardFashion BT', 'BernhardMod BT', 'Big Caslon', 'BinnerD',
        'Blackadder ITC', 'BlairMdITC TT', 'Bodoni 72', 'Bodoni 72 Oldstyle', 'Bodoni 72 Smallcaps', 'Bodoni MT', 'Bodoni MT Black', 'Bodoni MT Condensed', 'Bodoni MT Poster Compressed',
        'Bookshelf Symbol 7', 'Boulder', 'Bradley Hand', 'Bradley Hand ITC', 'Bremen Bd BT', 'Britannic Bold', 'Broadway', 'Browallia New', 'BrowalliaUPC', 'Brush Script MT', 'Californian FB', 'Calisto MT', 'Calligrapher', 'Candara',
        'CaslonOpnface BT', 'Castellar', 'Centaur', 'Cezanne', 'CG Omega', 'CG Times', 'Chalkboard', 'Chalkboard SE', 'Chalkduster', 'Charlesworth', 'Charter Bd BT', 'Charter BT', 'Chaucer',
        'ChelthmITC Bk BT', 'Chiller', 'Clarendon', 'Clarendon Condensed', 'CloisterBlack BT', 'Cochin', 'Colonna MT', 'Constantia', 'Cooper Black', 'Copperplate', 'Copperplate Gothic', 'Copperplate Gothic Bold',
        'Copperplate Gothic Light', 'CopperplGoth Bd BT', 'Corbel', 'Cordia New', 'CordiaUPC', 'Cornerstone', 'Coronet', 'Cuckoo', 'Curlz MT', 'DaunPenh', 'Dauphin', 'David', 'DB LCD Temp', 'DELICIOUS', 'Denmark',
        'DFKai-SB', 'Didot', 'DilleniaUPC', 'DIN', 'DokChampa', 'Dotum', 'DotumChe', 'Ebrima', 'Edwardian Script ITC', 'Elephant', 'English 111 Vivace BT', 'Engravers MT', 'EngraversGothic BT', 'Eras Bold ITC', 'Eras Demi ITC', 'Eras Light ITC', 'Eras Medium ITC',
        'EucrosiaUPC', 'Euphemia', 'Euphemia UCAS', 'EUROSTILE', 'Exotc350 Bd BT', 'FangSong', 'Felix Titling', 'Fixedsys', 'FONTIN', 'Footlight MT Light', 'Forte',
        'FrankRuehl', 'Fransiscan', 'Freefrm721 Blk BT', 'FreesiaUPC', 'Freestyle Script', 'French Script MT', 'FrnkGothITC Bk BT', 'Fruitger', 'FRUTIGER',
        'Futura', 'Futura Bk BT', 'Futura Lt BT', 'Futura Md BT', 'Futura ZBlk BT', 'FuturaBlack BT', 'Gabriola', 'Galliard BT', 'Gautami', 'Geeza Pro', 'Geometr231 BT', 'Geometr231 Hv BT', 'Geometr231 Lt BT', 'GeoSlab 703 Lt BT',
        'GeoSlab 703 XBd BT', 'Gigi', 'Gill Sans', 'Gill Sans MT', 'Gill Sans MT Condensed', 'Gill Sans MT Ext Condensed Bold', 'Gill Sans Ultra Bold', 'Gill Sans Ultra Bold Condensed', 'Gisha', 'Gloucester MT Extra Condensed', 'GOTHAM', 'GOTHAM BOLD',
        'Goudy Old Style', 'Goudy Stout', 'GoudyHandtooled BT', 'GoudyOLSt BT', 'Gujarati Sangam MN', 'Gulim', 'GulimChe', 'Gungsuh', 'GungsuhChe', 'Gurmukhi MN', 'Haettenschweiler', 'Harlow Solid Italic', 'Harrington', 'Heather', 'Heiti SC', 'Heiti TC', 'HELV',
        'Herald', 'High Tower Text', 'Hiragino Kaku Gothic ProN', 'Hiragino Mincho ProN', 'Hoefler Text', 'Humanst 521 Cn BT', 'Humanst521 BT', 'Humanst521 Lt BT', 'Imprint MT Shadow', 'Incised901 Bd BT', 'Incised901 BT',
        'Incised901 Lt BT', 'INCONSOLATA', 'Informal Roman', 'Informal011 BT', 'INTERSTATE', 'IrisUPC', 'Iskoola Pota', 'JasmineUPC', 'Jazz LET', 'Jenson', 'Jester', 'Jokerman', 'Juice ITC', 'Kabel Bk BT', 'Kabel Ult BT', 'Kailasa', 'KaiTi', 'Kalinga', 'Kannada Sangam MN',
        'Kartika', 'Kaufmann Bd BT', 'Kaufmann BT', 'Khmer UI', 'KodchiangUPC', 'Kokila', 'Korinna BT', 'Kristen ITC', 'Krungthep', 'Kunstler Script', 'Lao UI', 'Latha', 'Leelawadee', 'Letter Gothic', 'Levenim MT', 'LilyUPC', 'Lithograph', 'Lithograph Light', 'Long Island',
        'Lydian BT', 'Magneto', 'Maiandra GD', 'Malayalam Sangam MN', 'Malgun Gothic',
        'Mangal', 'Marigold', 'Marion', 'Marker Felt', 'Market', 'Marlett', 'Matisse ITC', 'Matura MT Script Capitals', 'Meiryo', 'Meiryo UI', 'Microsoft Himalaya', 'Microsoft JhengHei', 'Microsoft New Tai Lue', 'Microsoft PhagsPa', 'Microsoft Tai Le',
        'Microsoft Uighur', 'Microsoft YaHei', 'Microsoft Yi Baiti', 'MingLiU', 'MingLiU_HKSCS', 'MingLiU_HKSCS-ExtB', 'MingLiU-ExtB', 'Minion', 'Minion Pro', 'Miriam', 'Miriam Fixed', 'Mistral', 'Modern', 'Modern No. 20', 'Mona Lisa Solid ITC TT', 'Mongolian Baiti',
        'MONO', 'MoolBoran', 'Mrs Eaves', 'MS LineDraw', 'MS Mincho', 'MS PMincho', 'MS Reference Specialty', 'MS UI Gothic', 'MT Extra', 'MUSEO', 'MV Boli',
        'Nadeem', 'Narkisim', 'NEVIS', 'News Gothic', 'News GothicMT', 'NewsGoth BT', 'Niagara Engraved', 'Niagara Solid', 'Noteworthy', 'NSimSun', 'Nyala', 'OCR A Extended', 'Old Century', 'Old English Text MT', 'Onyx', 'Onyx BT', 'OPTIMA', 'Oriya Sangam MN',
        'OSAKA', 'OzHandicraft BT', 'Palace Script MT', 'Papyrus', 'Parchment', 'Party LET', 'Pegasus', 'Perpetua', 'Perpetua Titling MT', 'PetitaBold', 'Pickwick', 'Plantagenet Cherokee', 'Playbill', 'PMingLiU', 'PMingLiU-ExtB',
        'Poor Richard', 'Poster', 'PosterBodoni BT', 'PRINCETOWN LET', 'Pristina', 'PTBarnum BT', 'Pythagoras', 'Raavi', 'Rage Italic', 'Ravie', 'Ribbon131 Bd BT', 'Rockwell', 'Rockwell Condensed', 'Rockwell Extra Bold', 'Rod', 'Roman', 'Sakkal Majalla',
        'Santa Fe LET', 'Savoye LET', 'Sceptre', 'Script', 'Script MT Bold', 'SCRIPTINA', 'Serifa', 'Serifa BT', 'Serifa Th BT', 'ShelleyVolante BT', 'Sherwood',
        'Shonar Bangla', 'Showcard Gothic', 'Shruti', 'Signboard', 'SILKSCREEN', 'SimHei', 'Simplified Arabic', 'Simplified Arabic Fixed', 'SimSun', 'SimSun-ExtB', 'Sinhala Sangam MN', 'Sketch Rockwell', 'Skia', 'Small Fonts', 'Snap ITC', 'Snell Roundhand', 'Socket',
        'Souvenir Lt BT', 'Staccato222 BT', 'Steamer', 'Stencil', 'Storybook', 'Styllo', 'Subway', 'Swis721 BlkEx BT', 'Swiss911 XCm BT', 'Sylfaen', 'Synchro LET', 'System', 'Tamil Sangam MN', 'Technical', 'Teletype', 'Telugu Sangam MN', 'Tempus Sans ITC',
        'Terminal', 'Thonburi', 'Traditional Arabic', 'Trajan', 'TRAJAN PRO', 'Tristan', 'Tubular', 'Tunga', 'Tw Cen MT', 'Tw Cen MT Condensed', 'Tw Cen MT Condensed Extra Bold',
        'TypoUpright BT', 'Unicorn', 'Univers', 'Univers CE 55 Medium', 'Univers Condensed', 'Utsaah', 'Vagabond', 'Vani', 'Vijaya', 'Viner Hand ITC', 'VisualUI', 'Vivaldi', 'Vladimir Script', 'Vrinda', 'Westminster', 'WHITNEY', 'Wide Latin',
        'ZapfEllipt BT', 'ZapfHumnst BT', 'ZapfHumnst Dm BT', 'Zapfino', 'Zurich BlkEx BT', 'Zurich Ex BT', 'ZWAdobeF']
      fontList = fontList.concat(extendedFontList)
    }

    fontList = fontList.concat(options.fonts.userDefinedFonts)

    // remove duplicate fonts
    fontList = fontList.filter(function (font, position) {
      return fontList.indexOf(font) === position
    })

    // we use m or w because these two characters take up the maximum width.
    // And we use a LLi so that the same matching fonts can get separated
    var testString = 'mmmmmmmmmmlli'

    // we test using 72px font size, we may use any size. I guess larger the better.
    var testSize = '72px'

    var h = document.getElementsByTagName('body')[0]

    // div to load spans for the base fonts
    var baseFontsDiv = document.createElement('div')

    // div to load spans for the fonts to detect
    var fontsDiv = document.createElement('div')

    var defaultWidth = {}
    var defaultHeight = {}

    // creates a span where the fonts will be loaded
    var createSpan = function () {
      var s = document.createElement('span')
      /*
       * We need this css as in some weird browser this
       * span elements shows up for a microSec which creates a
       * bad user experience
       */
      s.style.position = 'absolute'
      s.style.left = '-9999px'
      s.style.fontSize = testSize

      // css font reset to reset external styles
      s.style.fontStyle = 'normal'
      s.style.fontWeight = 'normal'
      s.style.letterSpacing = 'normal'
      s.style.lineBreak = 'auto'
      s.style.lineHeight = 'normal'
      s.style.textTransform = 'none'
      s.style.textAlign = 'left'
      s.style.textDecoration = 'none'
      s.style.textShadow = 'none'
      s.style.whiteSpace = 'normal'
      s.style.wordBreak = 'normal'
      s.style.wordSpacing = 'normal'

      s.innerHTML = testString
      return s
    }

    // creates a span and load the font to detect and a base font for fallback
    var createSpanWithFonts = function (fontToDetect, baseFont) {
      var s = createSpan()
      s.style.fontFamily = "'" + fontToDetect + "'," + baseFont
      return s
    }

    // creates spans for the base fonts and adds them to baseFontsDiv
    var initializeBaseFontsSpans = function () {
      var spans = []
      for (var index = 0, length = baseFonts.length; index < length; index++) {
        var s = createSpan()
        s.style.fontFamily = baseFonts[index]
        baseFontsDiv.appendChild(s)
        spans.push(s)
      }
      return spans
    }

    // creates spans for the fonts to detect and adds them to fontsDiv
    var initializeFontsSpans = function () {
      var spans = {}
      for (var i = 0, l = fontList.length; i < l; i++) {
        var fontSpans = []
        for (var j = 0, numDefaultFonts = baseFonts.length; j < numDefaultFonts; j++) {
          var s = createSpanWithFonts(fontList[i], baseFonts[j])
          fontsDiv.appendChild(s)
          fontSpans.push(s)
        }
        spans[fontList[i]] = fontSpans // Stores {fontName : [spans for that font]}
      }
      return spans
    }

    // checks if a font is available
    var isFontAvailable = function (fontSpans) {
      var detected = false
      for (var i = 0; i < baseFonts.length; i++) {
        detected = (fontSpans[i].offsetWidth !== defaultWidth[baseFonts[i]] || fontSpans[i].offsetHeight !== defaultHeight[baseFonts[i]])
        if (detected) {
          return detected
        }
      }
      return detected
    }

    // create spans for base fonts
    var baseFontsSpans = initializeBaseFontsSpans()

    // add the spans to the DOM
    h.appendChild(baseFontsDiv)

    // get the default width for the three base fonts
    for (var index = 0, length = baseFonts.length; index < length; index++) {
      defaultWidth[baseFonts[index]] = baseFontsSpans[index].offsetWidth // width for the default font
      defaultHeight[baseFonts[index]] = baseFontsSpans[index].offsetHeight // height for the default font
    }

    // create spans for fonts to detect
    var fontsSpans = initializeFontsSpans()

    // add all the spans to the DOM
    h.appendChild(fontsDiv)

    // check available fonts
    var available = []
    for (var i = 0, l = fontList.length; i < l; i++) {
      if (isFontAvailable(fontsSpans[fontList[i]])) {
        available.push(fontList[i])
      }
    }

    // remove spans from DOM
    h.removeChild(fontsDiv)
    h.removeChild(baseFontsDiv)
    done(available)
  }
  var pluginsComponent = function (done, options) {
    if (isIE()) {
      if (!options.plugins.excludeIE) {
        done(getIEPlugins(options))
      } else {
        done(options.EXCLUDED)
      }
    } else {
      done(getRegularPlugins(options))
    }
  }
  var getRegularPlugins = function (options) {
    if (navigator.plugins == null) {
      return options.NOT_AVAILABLE
    }

    var plugins = []
    // plugins isn't defined in Node envs.
    for (var i = 0, l = navigator.plugins.length; i < l; i++) {
      if (navigator.plugins[i]) { plugins.push(navigator.plugins[i]) }
    }

    // sorting plugins only for those user agents, that we know randomize the plugins
    // every time we try to enumerate them
    if (pluginsShouldBeSorted(options)) {
      plugins = plugins.sort(function (a, b) {
        if (a.name > b.name) { return 1 }
        if (a.name < b.name) { return -1 }
        return 0
      })
    }
    return map(plugins, function (p) {
      var mimeTypes = map(p, function (mt) {
        return [mt.type, mt.suffixes]
      })
      return [p.name, p.description, mimeTypes]
    })
  }
  var getIEPlugins = function (options) {
    var result = []
    if ((Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, 'ActiveXObject')) || ('ActiveXObject' in window)) {
      var names = [
        'AcroPDF.PDF', // Adobe PDF reader 7+
        'Adodb.Stream',
        'AgControl.AgControl', // Silverlight
        'DevalVRXCtrl.DevalVRXCtrl.1',
        'MacromediaFlashPaper.MacromediaFlashPaper',
        'Msxml2.DOMDocument',
        'Msxml2.XMLHTTP',
        'PDF.PdfCtrl', // Adobe PDF reader 6 and earlier, brrr
        'QuickTime.QuickTime', // QuickTime
        'QuickTimeCheckObject.QuickTimeCheck.1',
        'RealPlayer',
        'RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)',
        'RealVideo.RealVideo(tm) ActiveX Control (32-bit)',
        'Scripting.Dictionary',
        'SWCtl.SWCtl', // ShockWave player
        'Shell.UIHelper',
        'ShockwaveFlash.ShockwaveFlash', // flash plugin
        'Skype.Detection',
        'TDCCtl.TDCCtl',
        'WMPlayer.OCX', // Windows media player
        'rmocx.RealPlayer G2 Control',
        'rmocx.RealPlayer G2 Control.1'
      ]
      // starting to detect plugins in IE
      result = map(names, function (name) {
        try {
          // eslint-disable-next-line no-new
          new window.ActiveXObject(name)
          return name
        } catch (e) {
          return options.ERROR
        }
      })
    } else {
      result.push(options.NOT_AVAILABLE)
    }
    if (navigator.plugins) {
      result = result.concat(getRegularPlugins(options))
    }
    return result
  }
  var pluginsShouldBeSorted = function (options) {
    var should = false
    for (var i = 0, l = options.plugins.sortPluginsFor.length; i < l; i++) {
      var re = options.plugins.sortPluginsFor[i]
      if (navigator.userAgent.match(re)) {
        should = true
        break
      }
    }
    return should
  }
  var touchSupportKey = function (done) {
    done(getTouchSupport())
  }
  var hardwareConcurrencyKey = function (done, options) {
    done(getHardwareConcurrency(options))
  }
  var hasSessionStorage = function (options) {
    try {
      return !!window.sessionStorage
    } catch (e) {
      return options.ERROR // SecurityError when referencing it means it exists
    }
  }

  // https://bugzilla.mozilla.org/show_bug.cgi?id=781447
  var hasLocalStorage = function (options) {
    try {
      return !!window.localStorage
    } catch (e) {
      return options.ERROR // SecurityError when referencing it means it exists
    }
  }
  var hasIndexedDB = function (options) {
    try {
      return !!window.indexedDB
    } catch (e) {
      return options.ERROR // SecurityError when referencing it means it exists
    }
  }
  var getHardwareConcurrency = function (options) {
    if (navigator.hardwareConcurrency) {
      return navigator.hardwareConcurrency
    }
    return options.NOT_AVAILABLE
  }
  var getNavigatorCpuClass = function (options) {
    return navigator.cpuClass || options.NOT_AVAILABLE
  }
  var getNavigatorPlatform = function (options) {
    if (navigator.platform) {
      return navigator.platform
    } else {
      return options.NOT_AVAILABLE
    }
  }
  var getDoNotTrack = function (options) {
    if (navigator.doNotTrack) {
      return navigator.doNotTrack
    } else if (navigator.msDoNotTrack) {
      return navigator.msDoNotTrack
    } else if (window.doNotTrack) {
      return window.doNotTrack
    } else {
      return options.NOT_AVAILABLE
    }
  }
  // This is a crude and primitive touch screen detection.
  // It's not possible to currently reliably detect the  availability of a touch screen
  // with a JS, without actually subscribing to a touch event.
  // http://www.stucox.com/blog/you-cant-detect-a-touchscreen/
  // https://github.com/Modernizr/Modernizr/issues/548
  // method returns an array of 3 values:
  // maxTouchPoints, the success or failure of creating a TouchEvent,
  // and the availability of the 'ontouchstart' property

  var getTouchSupport = function () {
    var maxTouchPoints = 0
    var touchEvent
    if (typeof navigator.maxTouchPoints !== 'undefined') {
      maxTouchPoints = navigator.maxTouchPoints
    } else if (typeof navigator.msMaxTouchPoints !== 'undefined') {
      maxTouchPoints = navigator.msMaxTouchPoints
    }
    try {
      document.createEvent('TouchEvent')
      touchEvent = true
    } catch (_) {
      touchEvent = false
    }
    var touchStart = 'ontouchstart' in window
    return [maxTouchPoints, touchEvent, touchStart]
  }
  // https://www.browserleaks.com/canvas#how-does-it-work

  var getCanvasFp = function (options) {
    var result = []
    // Very simple now, need to make it more complex (geo shapes etc)
    var canvas = document.createElement('canvas')
    canvas.width = 2000
    canvas.height = 200
    canvas.style.display = 'inline'
    var ctx = canvas.getContext('2d')
    // detect browser support of canvas winding
    // http://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/
    // https://github.com/Modernizr/Modernizr/blob/master/feature-detects/canvas/winding.js
    ctx.rect(0, 0, 10, 10)
    ctx.rect(2, 2, 6, 6)
    result.push('canvas winding:' + ((ctx.isPointInPath(5, 5, 'evenodd') === false) ? 'yes' : 'no'))

    ctx.textBaseline = 'alphabetic'
    ctx.fillStyle = '#f60'
    ctx.fillRect(125, 1, 62, 20)
    ctx.fillStyle = '#069'
    // https://github.com/Valve/fingerprintjs2/issues/66
    if (options.dontUseFakeFontInCanvas) {
      ctx.font = '11pt Arial'
    } else {
      ctx.font = '11pt no-real-font-123'
    }
    ctx.fillText('Cwm fjordbank glyphs vext quiz, \ud83d\ude03', 2, 15)
    ctx.fillStyle = 'rgba(102, 204, 0, 0.2)'
    ctx.font = '18pt Arial'
    ctx.fillText('Cwm fjordbank glyphs vext quiz, \ud83d\ude03', 4, 45)

    // canvas blending
    // http://blogs.adobe.com/webplatform/2013/01/28/blending-features-in-canvas/
    // http://jsfiddle.net/NDYV8/16/
    ctx.globalCompositeOperation = 'multiply'
    ctx.fillStyle = 'rgb(255,0,255)'
    ctx.beginPath()
    ctx.arc(50, 50, 50, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.fill()
    ctx.fillStyle = 'rgb(0,255,255)'
    ctx.beginPath()
    ctx.arc(100, 50, 50, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.fill()
    ctx.fillStyle = 'rgb(255,255,0)'
    ctx.beginPath()
    ctx.arc(75, 100, 50, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.fill()
    ctx.fillStyle = 'rgb(255,0,255)'
    // canvas winding
    // http://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/
    // http://jsfiddle.net/NDYV8/19/
    ctx.arc(75, 75, 75, 0, Math.PI * 2, true)
    ctx.arc(75, 75, 25, 0, Math.PI * 2, true)
    ctx.fill('evenodd')

    if (canvas.toDataURL) { result.push('canvas fp:' + canvas.toDataURL()) }
    return result
  }
  var getWebglFp = function () {
    var gl
    var fa2s = function (fa) {
      gl.clearColor(0.0, 0.0, 0.0, 1.0)
      gl.enable(gl.DEPTH_TEST)
      gl.depthFunc(gl.LEQUAL)
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
      return '[' + fa[0] + ', ' + fa[1] + ']'
    }
    var maxAnisotropy = function (gl) {
      var ext = gl.getExtension('EXT_texture_filter_anisotropic') || gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic') || gl.getExtension('MOZ_EXT_texture_filter_anisotropic')
      if (ext) {
        var anisotropy = gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
        if (anisotropy === 0) {
          anisotropy = 2
        }
        return anisotropy
      } else {
        return null
      }
    }

    gl = getWebglCanvas()
    if (!gl) { return null }
    // WebGL fingerprinting is a combination of techniques, found in MaxMind antifraud script & Augur fingerprinting.
    // First it draws a gradient object with shaders and convers the image to the Base64 string.
    // Then it enumerates all WebGL extensions & capabilities and appends them to the Base64 string, resulting in a huge WebGL string, potentially very unique on each device
    // Since iOS supports webgl starting from version 8.1 and 8.1 runs on several graphics chips, the results may be different across ios devices, but we need to verify it.
    var result = []
    var vShaderTemplate = 'attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}'
    var fShaderTemplate = 'precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}'
    var vertexPosBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexPosBuffer)
    var vertices = new Float32Array([-0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.732134444, 0])
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
    vertexPosBuffer.itemSize = 3
    vertexPosBuffer.numItems = 3
    var program = gl.createProgram()
    var vshader = gl.createShader(gl.VERTEX_SHADER)
    gl.shaderSource(vshader, vShaderTemplate)
    gl.compileShader(vshader)
    var fshader = gl.createShader(gl.FRAGMENT_SHADER)
    gl.shaderSource(fshader, fShaderTemplate)
    gl.compileShader(fshader)
    gl.attachShader(program, vshader)
    gl.attachShader(program, fshader)
    gl.linkProgram(program)
    gl.useProgram(program)
    program.vertexPosAttrib = gl.getAttribLocation(program, 'attrVertex')
    program.offsetUniform = gl.getUniformLocation(program, 'uniformOffset')
    gl.enableVertexAttribArray(program.vertexPosArray)
    gl.vertexAttribPointer(program.vertexPosAttrib, vertexPosBuffer.itemSize, gl.FLOAT, !1, 0, 0)
    gl.uniform2f(program.offsetUniform, 1, 1)
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, vertexPosBuffer.numItems)
    try {
      result.push(gl.canvas.toDataURL())
    } catch (e) {
      /* .toDataURL may be absent or broken (blocked by extension) */
    }
    result.push('extensions:' + (gl.getSupportedExtensions() || []).join(';'))
    result.push('webgl aliased line width range:' + fa2s(gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE)))
    result.push('webgl aliased point size range:' + fa2s(gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE)))
    result.push('webgl alpha bits:' + gl.getParameter(gl.ALPHA_BITS))
    result.push('webgl antialiasing:' + (gl.getContextAttributes().antialias ? 'yes' : 'no'))
    result.push('webgl blue bits:' + gl.getParameter(gl.BLUE_BITS))
    result.push('webgl depth bits:' + gl.getParameter(gl.DEPTH_BITS))
    result.push('webgl green bits:' + gl.getParameter(gl.GREEN_BITS))
    result.push('webgl max anisotropy:' + maxAnisotropy(gl))
    result.push('webgl max combined texture image units:' + gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS))
    result.push('webgl max cube map texture size:' + gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE))
    result.push('webgl max fragment uniform vectors:' + gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS))
    result.push('webgl max render buffer size:' + gl.getParameter(gl.MAX_RENDERBUFFER_SIZE))
    result.push('webgl max texture image units:' + gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS))
    result.push('webgl max texture size:' + gl.getParameter(gl.MAX_TEXTURE_SIZE))
    result.push('webgl max varying vectors:' + gl.getParameter(gl.MAX_VARYING_VECTORS))
    result.push('webgl max vertex attribs:' + gl.getParameter(gl.MAX_VERTEX_ATTRIBS))
    result.push('webgl max vertex texture image units:' + gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS))
    result.push('webgl max vertex uniform vectors:' + gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS))
    result.push('webgl max viewport dims:' + fa2s(gl.getParameter(gl.MAX_VIEWPORT_DIMS)))
    result.push('webgl red bits:' + gl.getParameter(gl.RED_BITS))
    result.push('webgl renderer:' + gl.getParameter(gl.RENDERER))
    result.push('webgl shading language version:' + gl.getParameter(gl.SHADING_LANGUAGE_VERSION))
    result.push('webgl stencil bits:' + gl.getParameter(gl.STENCIL_BITS))
    result.push('webgl vendor:' + gl.getParameter(gl.VENDOR))
    result.push('webgl version:' + gl.getParameter(gl.VERSION))

    try {
      // Add the unmasked vendor and unmasked renderer if the debug_renderer_info extension is available
      var extensionDebugRendererInfo = gl.getExtension('WEBGL_debug_renderer_info')
      if (extensionDebugRendererInfo) {
        result.push('webgl unmasked vendor:' + gl.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL))
        result.push('webgl unmasked renderer:' + gl.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL))
      }
    } catch (e) { /* squelch */ }

    if (!gl.getShaderPrecisionFormat) {
      return result
    }

    each(['FLOAT', 'INT'], function (numType) {
      each(['VERTEX', 'FRAGMENT'], function (shader) {
        each(['HIGH', 'MEDIUM', 'LOW'], function (numSize) {
          each(['precision', 'rangeMin', 'rangeMax'], function (key) {
            var format = gl.getShaderPrecisionFormat(gl[shader + '_SHADER'], gl[numSize + '_' + numType])[key]
            if (key !== 'precision') {
              key = 'precision ' + key
            }
            var line = ['webgl ', shader.toLowerCase(), ' shader ', numSize.toLowerCase(), ' ', numType.toLowerCase(), ' ', key, ':', format].join('')
            result.push(line)
          })
        })
      })
    })
    return result
  }
  var getWebglVendorAndRenderer = function () {
    /* This a subset of the WebGL fingerprint with a lot of entropy, while being reasonably browser-independent */
    try {
      var glContext = getWebglCanvas()
      var extensionDebugRendererInfo = glContext.getExtension('WEBGL_debug_renderer_info')
      return glContext.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL) + '~' + glContext.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL)
    } catch (e) {
      return null
    }
  }
  var getAdBlock = function () {
    var ads = document.createElement('div')
    ads.innerHTML = '&nbsp;'
    ads.className = 'adsbox'
    var result = false
    try {
      // body may not exist, that's why we need try/catch
      document.body.appendChild(ads)
      result = document.getElementsByClassName('adsbox')[0].offsetHeight === 0
      document.body.removeChild(ads)
    } catch (e) {
      result = false
    }
    return result
  }
  var getHasLiedLanguages = function () {
    // We check if navigator.language is equal to the first language of navigator.languages
    // navigator.languages is undefined on IE11 (and potentially older IEs)
    if (typeof navigator.languages !== 'undefined') {
      try {
        var firstLanguages = navigator.languages[0].substr(0, 2)
        if (firstLanguages !== navigator.language.substr(0, 2)) {
          return true
        }
      } catch (err) {
        return true
      }
    }
    return false
  }
  var getHasLiedResolution = function () {
    return window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight
  }
  var getHasLiedOs = function () {
    var userAgent = navigator.userAgent.toLowerCase()
    var oscpu = navigator.oscpu
    var platform = navigator.platform.toLowerCase()
    var os
    // We extract the OS from the user agent (respect the order of the if else if statement)
    if (userAgent.indexOf('windows phone') >= 0) {
      os = 'Windows Phone'
    } else if (userAgent.indexOf('win') >= 0) {
      os = 'Windows'
    } else if (userAgent.indexOf('android') >= 0) {
      os = 'Android'
    } else if (userAgent.indexOf('linux') >= 0 || userAgent.indexOf('cros') >= 0) {
      os = 'Linux'
    } else if (userAgent.indexOf('iphone') >= 0 || userAgent.indexOf('ipad') >= 0) {
      os = 'iOS'
    } else if (userAgent.indexOf('mac') >= 0) {
      os = 'Mac'
    } else {
      os = 'Other'
    }
    // We detect if the person uses a mobile device
    var mobileDevice = (('ontouchstart' in window) ||
      (navigator.maxTouchPoints > 0) ||
      (navigator.msMaxTouchPoints > 0))

    if (mobileDevice && os !== 'Windows Phone' && os !== 'Android' && os !== 'iOS' && os !== 'Other') {
      return true
    }

    // We compare oscpu with the OS extracted from the UA
    if (typeof oscpu !== 'undefined') {
      oscpu = oscpu.toLowerCase()
      if (oscpu.indexOf('win') >= 0 && os !== 'Windows' && os !== 'Windows Phone') {
        return true
      } else if (oscpu.indexOf('linux') >= 0 && os !== 'Linux' && os !== 'Android') {
        return true
      } else if (oscpu.indexOf('mac') >= 0 && os !== 'Mac' && os !== 'iOS') {
        return true
      } else if ((oscpu.indexOf('win') === -1 && oscpu.indexOf('linux') === -1 && oscpu.indexOf('mac') === -1) !== (os === 'Other')) {
        return true
      }
    }

    // We compare platform with the OS extracted from the UA
    if (platform.indexOf('win') >= 0 && os !== 'Windows' && os !== 'Windows Phone') {
      return true
    } else if ((platform.indexOf('linux') >= 0 || platform.indexOf('android') >= 0 || platform.indexOf('pike') >= 0) && os !== 'Linux' && os !== 'Android') {
      return true
    } else if ((platform.indexOf('mac') >= 0 || platform.indexOf('ipad') >= 0 || platform.indexOf('ipod') >= 0 || platform.indexOf('iphone') >= 0) && os !== 'Mac' && os !== 'iOS') {
      return true
    } else {
      var platformIsOther = platform.indexOf('win') < 0 &&
        platform.indexOf('linux') < 0 &&
        platform.indexOf('mac') < 0 &&
        platform.indexOf('iphone') < 0 &&
        platform.indexOf('ipad') < 0
      if (platformIsOther !== (os === 'Other')) {
        return true
      }
    }

    return typeof navigator.plugins === 'undefined' && os !== 'Windows' && os !== 'Windows Phone'
  }
  var getHasLiedBrowser = function () {
    var userAgent = navigator.userAgent.toLowerCase()
    var productSub = navigator.productSub

    // we extract the browser from the user agent (respect the order of the tests)
    var browser
    if (userAgent.indexOf('firefox') >= 0) {
      browser = 'Firefox'
    } else if (userAgent.indexOf('opera') >= 0 || userAgent.indexOf('opr') >= 0) {
      browser = 'Opera'
    } else if (userAgent.indexOf('chrome') >= 0) {
      browser = 'Chrome'
    } else if (userAgent.indexOf('safari') >= 0) {
      browser = 'Safari'
    } else if (userAgent.indexOf('trident') >= 0) {
      browser = 'Internet Explorer'
    } else {
      browser = 'Other'
    }

    if ((browser === 'Chrome' || browser === 'Safari' || browser === 'Opera') && productSub !== '20030107') {
      return true
    }

    // eslint-disable-next-line no-eval
    var tempRes = eval.toString().length
    if (tempRes === 37 && browser !== 'Safari' && browser !== 'Firefox' && browser !== 'Other') {
      return true
    } else if (tempRes === 39 && browser !== 'Internet Explorer' && browser !== 'Other') {
      return true
    } else if (tempRes === 33 && browser !== 'Chrome' && browser !== 'Opera' && browser !== 'Other') {
      return true
    }

    // We create an error to see how it is handled
    var errFirefox
    try {
      // eslint-disable-next-line no-throw-literal
      throw 'a'
    } catch (err) {
      try {
        err.toSource()
        errFirefox = true
      } catch (errOfErr) {
        errFirefox = false
      }
    }
    return errFirefox && browser !== 'Firefox' && browser !== 'Other'
  }
  var isCanvasSupported = function () {
    var elem = document.createElement('canvas')
    return !!(elem.getContext && elem.getContext('2d'))
  }
  var isWebGlSupported = function () {
    // code taken from Modernizr
    if (!isCanvasSupported()) {
      return false
    }

    var glContext = getWebglCanvas()
    return !!window.WebGLRenderingContext && !!glContext
  }
  var isIE = function () {
    if (navigator.appName === 'Microsoft Internet Explorer') {
      return true
    } else if (navigator.appName === 'Netscape' && /Trident/.test(navigator.userAgent)) { // IE 11
      return true
    }
    return false
  }
  var hasSwfObjectLoaded = function () {
    return typeof window.swfobject !== 'undefined'
  }
  var hasMinFlashInstalled = function () {
    return window.swfobject.hasFlashPlayerVersion('9.0.0')
  }
  var addFlashDivNode = function (options) {
    var node = document.createElement('div')
    node.setAttribute('id', options.fonts.swfContainerId)
    document.body.appendChild(node)
  }
  var loadSwfAndDetectFonts = function (done, options) {
    var hiddenCallback = '___fp_swf_loaded'
    window[hiddenCallback] = function (fonts) {
      done(fonts)
    }
    var id = options.fonts.swfContainerId
    addFlashDivNode()
    var flashvars = { onReady: hiddenCallback }
    var flashparams = { allowScriptAccess: 'always', menu: 'false' }
    window.swfobject.embedSWF(options.fonts.swfPath, id, '1', '1', '9.0.0', false, flashvars, flashparams, {})
  }
  var getWebglCanvas = function () {
    var canvas = document.createElement('canvas')
    var gl = null
    try {
      gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    } catch (e) { /* squelch */ }
    if (!gl) { gl = null }
    return gl
  }

  var components = [
    { key: 'userAgent', getData: UserAgent },
    { key: 'webdriver', getData: webdriver },
    { key: 'language', getData: languageKey },
    { key: 'colorDepth', getData: colorDepthKey },
    { key: 'deviceMemory', getData: deviceMemoryKey },
    { key: 'pixelRatio', getData: pixelRatioKey },
    { key: 'hardwareConcurrency', getData: hardwareConcurrencyKey },
    { key: 'screenResolution', getData: screenResolutionKey },
    { key: 'availableScreenResolution', getData: availableScreenResolutionKey },
    { key: 'timezoneOffset', getData: timezoneOffset },
    { key: 'timezone', getData: timezone },
    { key: 'sessionStorage', getData: sessionStorageKey },
    { key: 'localStorage', getData: localStorageKey },
    { key: 'indexedDb', getData: indexedDbKey },
    { key: 'addBehavior', getData: addBehaviorKey },
    { key: 'openDatabase', getData: openDatabaseKey },
    { key: 'cpuClass', getData: cpuClassKey },
    { key: 'platform', getData: platformKey },
    { key: 'doNotTrack', getData: doNotTrackKey },
    { key: 'plugins', getData: pluginsComponent },
    { key: 'canvas', getData: canvasKey },
    { key: 'webgl', getData: webglKey },
    { key: 'webglVendorAndRenderer', getData: webglVendorAndRendererKey },
    { key: 'adBlock', getData: adBlockKey },
    { key: 'hasLiedLanguages', getData: hasLiedLanguagesKey },
    { key: 'hasLiedResolution', getData: hasLiedResolutionKey },
    { key: 'hasLiedOs', getData: hasLiedOsKey },
    { key: 'hasLiedBrowser', getData: hasLiedBrowserKey },
    { key: 'touchSupport', getData: touchSupportKey },
    { key: 'fonts', getData: jsFontsKey, pauseBefore: true },
    { key: 'fontsFlash', getData: flashFontsKey, pauseBefore: true },
    { key: 'audio', getData: audioKey },
    { key: 'enumerateDevices', getData: enumerateDevicesKey }
  ]

  var Fingerprint2 = function (options) {
    throw new Error("'new Fingerprint()' is deprecated, see https://github.com/Valve/fingerprintjs2#upgrade-guide-from-182-to-200")
  }

  Fingerprint2.get = function (options, callback) {
    if (!callback) {
      callback = options
      options = {}
    } else if (!options) {
      options = {}
    }
    extendSoft(options, defaultOptions)
    options.components = options.extraComponents.concat(components)

    var keys = {
      data: [],
      addPreprocessedComponent: function (key, value) {
        if (typeof options.preprocessor === 'function') {
          value = options.preprocessor(key, value)
        }
        keys.data.push({ key: key, value: value })
      }
    }

    var i = -1
    var chainComponents = function (alreadyWaited) {
      i += 1
      if (i >= options.components.length) { // on finish
        callback(keys.data)
        return
      }
      var component = options.components[i]

      if (options.excludes[component.key]) {
        chainComponents(false) // skip
        return
      }

      if (!alreadyWaited && component.pauseBefore) {
        i -= 1
        setTimeout(function () {
          chainComponents(true)
        }, 1)
        return
      }

      try {
        component.getData(function (value) {
          keys.addPreprocessedComponent(component.key, value)
          chainComponents(false)
        }, options)
      } catch (error) {
        // main body error
        keys.addPreprocessedComponent(component.key, String(error))
        chainComponents(false)
      }
    }

    chainComponents(false)
  }

  Fingerprint2.getPromise = function (options) {
    return new Promise(function (resolve, reject) {
      Fingerprint2.get(options, resolve)
    })
  }

  Fingerprint2.getV18 = function (options, callback) {
    if (callback == null) {
      callback = options
      options = {}
    }
    return Fingerprint2.get(options, function (components) {
      var newComponents = []
      for (var i = 0; i < components.length; i++) {
        var component = components[i]
        if (component.value === (options.NOT_AVAILABLE || 'not available')) {
          newComponents.push({ key: component.key, value: 'unknown' })
        } else if (component.key === 'plugins') {
          newComponents.push({
            key: 'plugins',
            value: map(component.value, function (p) {
              var mimeTypes = map(p[2], function (mt) {
                if (mt.join) { return mt.join('~') }
                return mt
              }).join(',')
              return [p[0], p[1], mimeTypes].join('::')
            })
          })
        } else if (['canvas', 'webgl'].indexOf(component.key) !== -1) {
          newComponents.push({ key: component.key, value: component.value.join('~') })
        } else if (['sessionStorage', 'localStorage', 'indexedDb', 'addBehavior', 'openDatabase'].indexOf(component.key) !== -1) {
          if (component.value) {
            newComponents.push({ key: component.key, value: 1 })
          } else {
            // skip
            continue
          }
        } else {
          if (component.value) {
            newComponents.push(component.value.join ? { key: component.key, value: component.value.join(';') } : component)
          } else {
            newComponents.push({ key: component.key, value: component.value })
          }
        }
      }
      var murmur = x64hash128(map(newComponents, function (component) { return component.value }).join('~~~'), 31)
      callback(murmur, newComponents)
    })
  }

  Fingerprint2.x64hash128 = x64hash128
  Fingerprint2.VERSION = '2.1.0'
  return Fingerprint2
})

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! es6-promise-promise */ "./node_modules/es6-promise-promise/index.js")))

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

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

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

/***/ "./src/choices-guide/component/choice-plane.jsx":
/*!******************************************************!*\
  !*** ./src/choices-guide/component/choice-plane.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentChoicePlane; });
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



var OpenStadComponentChoicePlane = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentChoicePlane, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentChoicePlane);

  function OpenStadComponentChoicePlane(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentChoicePlane);

    _this = _super.call(this, props, {
      plane: {
        topleft: {
          title: "metrostad",
          bgImage: {
            "src": "https://image-server.staging.openstadsdeel.nl/image/719fd5b8dc6953db41b187723d3fc5c9"
          }
        },
        topright: {
          title: "mozaïekstad",
          bgImage: {
            "src": "https://image-server.staging.openstadsdeel.nl/image/01484fc7716420635beab879658e00b1"
          }
        },
        bottomleft: {
          title: "museumstad",
          bgImage: {
            "src": "https://image-server.staging.openstadsdeel.nl/image/85ef5669d9a5db2f0ec2adb6310620be"
          }
        },
        bottomright: {
          title: "dorpenstad",
          bgImage: {
            "src": "https://image-server.staging.openstadsdeel.nl/image/befd03bc1a415bd767f9912e3dcd18a8"
          }
        }
      }
    });
    _this.state = {};
    return _this;
  }

  _createClass(OpenStadComponentChoicePlane, [{
    key: "getPreferedChoice",
    value: function getPreferedChoice(score) {
      if (!score) return;
      var prefered;
      var baseSize = document.querySelector("#".concat(this.divId)) && document.querySelector("#".concat(this.divId)).offsetWidth / 2 || 90;
      var top = baseSize + (typeof score.y == 'undefined' ? 0 : score.y) * (baseSize / 100);
      var left = baseSize + (typeof score.x == 'undefined' ? 0 : score.x) * (baseSize / 100);

      if (top < baseSize && left < baseSize) {
        prefered = this.config.plane.topleft;
      }

      if (top < baseSize && left > baseSize) {
        prefered = this.config.plane.topright;
      }

      if (top > baseSize && left < baseSize) {
        prefered = this.config.plane.bottomleft;
      }

      if (top > baseSize && left > baseSize) {
        prefered = this.config.plane.bottomright;
      }

      return prefered;
    }
  }, {
    key: "getTitle",
    value: function getTitle(score, nameOnly) {
      if (!score) return;
      var prefered = this.getPreferedChoice(score);
      var title;

      if (nameOnly) {
        title = prefered && prefered.title;
      } else {
        title = prefered ? 'Je gaat nu richting ' + (prefered && prefered.title) : 'Je staat precies tussen meerdere scenario\'s in';
      } // this.setState({title});


      return title;
    }
  }, {
    key: "render",
    value: function render() {
      var score = this.props.score;
      var baseSize = document.querySelector("#".concat(this.divId)) && document.querySelector("#".concat(this.divId)).offsetWidth / 2 || 90;
      var top = baseSize + (typeof score.y == 'undefined' ? 0 : score.y) * (baseSize / 100);
      var left = baseSize + (typeof score.x == 'undefined' ? 0 : score.x) * (baseSize / 100);
      var topleftHTML = null; // if ( this.config.plane.topleft && this.config.plane.topleft.bgImage ) {
      //   topleftHTML = (<div style={{ backgroundImage: `url(${this.config.plane.topleft.bgImage.src})` }} className="osc-choice-plane-background-image"/>)
      // }

      var toprightHTML = null; // if ( this.config.plane.topright && this.config.plane.topright.bgImage ) {
      //   toprightHTML = (<div style={{ backgroundImage: `url(${this.config.plane.topright.bgImage.src})` }} className="osc-choice-plane-background-image"/>)
      // }

      var bottomleftHTML = null; // if ( this.config.plane.bottomleft && this.config.plane.bottomleft.bgImage ) {
      //   bottomleftHTML = (<div style={{ backgroundImage: `url(${this.config.plane.bottomleft.bgImage.src})` }} className="osc-choice-plane-background-image"/>)
      // }

      var bottomrightHTML = null; // if ( this.config.plane.bottomright && this.config.plane.bottomright.bgImage ) {
      //   bottomrightHTML = (<div style={{ backgroundImage: `url(${this.config.plane.bottomright.bgImage.src})` }} className="osc-choice-plane-background-image"/>)
      // }

      var imageHTML = null;
      var images = this.props.data && this.props.data.images;

      if (images) {
        if (!Array.isArray(images)) images = [images];
        var image = images[0];
        imageHTML = /*#__PURE__*/React.createElement("img", {
          className: "osc-choice-plane-background-image",
          src: image.src,
          style: {
            width: 2 * baseSize,
            height: 2 * baseSize
          }
        });
      } // [{"src":"https://image-server2.openstadsdeel.nl/image/gran.canaria.01.jpg"},{"src":"https://image-server2.openstadsdeel.nl/image/gran.canaria.02.jpg"}]


      return /*#__PURE__*/React.createElement("div", {
        id: this.divId,
        className: "osc-choice-plane-plane",
        ref: function ref(el) {
          self.planePlaneElement = el;
        }
      }, imageHTML, /*#__PURE__*/React.createElement("div", {
        className: "osc-point",
        style: {
          top: top,
          left: left
        }
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          clear: 'both'
        }
      }));
    }
  }]);

  return OpenStadComponentChoicePlane;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/choices-guide/component/choice.jsx":
/*!************************************************!*\
  !*** ./src/choices-guide/component/choice.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentChoice; });
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _choice_plane_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./choice-plane.jsx */ "./src/choices-guide/component/choice-plane.jsx");


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




var OpenStadComponentChoice = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentChoice, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentChoice);

  function OpenStadComponentChoice(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentChoice);

    _this = _super.call(this, props, {
      type: 'default'
    });
    _this.answerDimensions = props.answerDimensions || 1;

    switch (props.answerDimensions) {
      case 2:
        _this.dimensions = ['x', 'y'];
        break;

      case 3:
        _this.dimensions = ['x', 'y', 'z'];
        break;

      default:
        _this.dimensions = ['x'];
    }

    _this.answers = props.data && props.data.answers || {};
    Object.keys(_this.answers).forEach(function (id) {
      if (_this.answers[id] == parseInt(_this.answers[id])) {
        _this.answers[id] = {
          x: parseInt(_this.answers[id])
        };
      }
    });
    _this.state = {
      score: _this.props.score || 0
    };
    return _this;
  }

  _createClass(OpenStadComponentChoice, [{
    key: "getScore",
    value: function getScore() {
      var score = this.planeElement ? 0 : this.state.score;
      return score;
    }
  }, {
    key: "getTitle",
    value: function getTitle(score, nameOnly) {
      return this.planeElement ? this.planeElement.getTitle(score, nameOnly) : this.props.data && this.props.data.title;
    }
  }, {
    key: "calculateScore",
    value: function calculateScore(answers) {
      var _this2 = this;

      var self = this;
      var myAnswers = self.answers;
      var givenAnswers = answers || {};
      var noOfAnswers = Object.keys(myAnswers).length;
      var results = {};
      Object.keys(myAnswers).forEach(function (id) {
        var myAnswer = myAnswers[id] || {};
        var givenAnswer = givenAnswers[id] || (_this2.config.startWithAllQuestionsAnswered ? {
          x: 50,
          y: 50,
          z: 50
        } : {});
        var result = results[id] = {};

        _this2.dimensions.forEach(function (dimension) {
          if (typeof myAnswer[dimension] == 'undefined') return;
          if (typeof givenAnswer[dimension] == 'undefined') return;
          var def = typeof myAnswer[dimension] != 'undefined' ? myAnswer[dimension] : [0, 100];

          if (Array.isArray(def)) {
            // percentage of range
            var range = def[1] - def[0];
            return result[dimension] = def[0] + range * (givenAnswer[dimension] / 100);
          }

          if (def == parseInt(def)) {
            // defined value
            return result[dimension] = 100 - Math.abs(parseInt(def) - givenAnswer[dimension]);
          } // default: percentage


          return result[dimension] = givenAnswer[dimension];
        });
      });
      var scores = {};
      Object.keys(myAnswers).forEach(function (id) {
        _this2.dimensions.forEach(function (dimension) {
          scores[dimension] = scores[dimension] || {
            score: [],
            noOfAnswers: 0
          };

          if (typeof results[id][dimension] != 'undefined') {
            scores[dimension].score.push(results[id][dimension]);
          }

          if (myAnswers[id] && typeof myAnswers[id][dimension] != 'undefined') {
            scores[dimension].noOfAnswers++;
          }
        });
      });
      Object.keys(scores).forEach(function (dimension) {
        scores[dimension] = scores[dimension].score.length ? scores[dimension].score.reduce(function (accumulator, currentValue) {
          return accumulator + currentValue;
        }) / scores[dimension].noOfAnswers : undefined;
      });
      self.setState({
        score: scores
      });
      return scores;
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      var score = self.state.score;
      var scoreHTML = null;

      switch (this.config.type) {
        case 'plane':
          scoreHTML = /*#__PURE__*/React.createElement(_choice_plane_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
            config: _objectSpread({}, self.config),
            data: _objectSpread({}, self.props.data),
            score: score,
            ref: function ref(el) {
              self.planeElement = el;
            }
          });
          break;

        default:
          var percentageHTML = null;

          if (self.config.withPercentage) {
            var percentage = parseInt(self.state.score.x);
            percentageHTML = /*#__PURE__*/React.createElement("div", {
              className: "osc-percentage"
            }, percentage, "%");
          }

          scoreHTML = /*#__PURE__*/React.createElement("div", {
            className: "osc-choice-default"
          }, /*#__PURE__*/React.createElement("h4", null, self.props.data.title), /*#__PURE__*/React.createElement("div", {
            className: "osc-choice-bar".concat(self.config.withPercentage ? ' osc-with-percentage' : '')
          }, /*#__PURE__*/React.createElement("div", {
            className: "osc-choice-bar-mask"
          }), /*#__PURE__*/React.createElement("div", {
            className: "osc-choice-bar-progress",
            style: {
              width: (self.state.score.x || 0) + '%'
            }
          })), percentageHTML);
      }

      return /*#__PURE__*/React.createElement("li", {
        className: "osc-choice"
      }, scoreHTML);
    }
  }]);

  return OpenStadComponentChoice;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/choices-guide/component/choices-guide-result.jsx":
/*!**************************************************************!*\
  !*** ./src/choices-guide/component/choices-guide-result.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentChoicesGuideResult; });
/* harmony import */ var fingerprintjs2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fingerprintjs2 */ "./node_modules/fingerprintjs2/fingerprint2.js");
/* harmony import */ var fingerprintjs2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fingerprintjs2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _libs_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libs/index.jsx */ "./src/libs/index.jsx");
/* harmony import */ var _choices_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./choices.jsx */ "./src/choices-guide/component/choices.jsx");
/* harmony import */ var _choice_plane_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./choice-plane.jsx */ "./src/choices-guide/component/choice-plane.jsx");
/* harmony import */ var _forms_index_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../forms/index.jsx */ "./src/forms/index.jsx");
/* harmony import */ var _previous_next_button_block_index_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../previous-next-button-block/index.jsx */ "./src/previous-next-button-block/index.jsx");
/* harmony import */ var _lib_fetch_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/fetch.js */ "./src/choices-guide/lib/fetch.js");


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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










var OpenStadComponentChoicesGuideResult = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentChoicesGuideResult, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentChoicesGuideResult);

  function OpenStadComponentChoicesGuideResult(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentChoicesGuideResult);

    _this = _super.call(this, props, {
      type: 'default',
      submission: {
        type: 'none'
      }
    });
    var allValues = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].sessionStorage.get('osc-choices-guide.values') || {};
    var allScores = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].sessionStorage.get('osc-choices-guide.scores') || {};
    _this.state = {
      title: '',
      answers: allValues[_this.config.choicesGuideId],
      scores: allScores[_this.config.choicesGuideId]
    };
    return _this;
  }

  _createClass(OpenStadComponentChoicesGuideResult, [{
    key: "componentDidMount",
    value: function componentDidMount(prevProps, prevState) {
      this.fetchData();
    }
  }, {
    key: "fetchData",
    value: function fetchData() {
      var self = this;
      Object(_lib_fetch_js__WEBPACK_IMPORTED_MODULE_7__["default"])({
        config: self.config
      }).then(function (data) {
        self.setState(data, function () {
          self.startGuide();
        });
      })["catch"](function (err) {
        console.log('Niet goed');
        console.log(err);
      });
    }
  }, {
    key: "startGuide",
    value: function startGuide() {
      var self = this;
      var scores = self.choicesElement && self.choicesElement.calculateScores(self.state.answers);
      var choicesTitle = '...';
      var name;
      var preferredChoiceId = -1;

      if (self.choicesElement) {
        var choiceElement = self.choicesElement.getPreferedChoice();

        if (choiceElement) {
          name = choiceElement.getTitle(self.state.scores[choiceElement.config.divId], true);

          if (name) {
            choicesTitle = 'Jouw voorkeur is ' + name;
            preferredChoiceId = choiceElement.divId;
            console.log(choiceElement);
          } else {
            choicesTitle = 'Je staat precies tussen meerdere scenario\'s in';
          }
        }

        self.setState({
          title: choicesTitle
        });
        var event = new window.CustomEvent('osc-choices-guide-result-is-ready', {
          detail: {
            preferredChoice: {
              name: name,
              title: choicesTitle,
              preferredChoiceId: preferredChoiceId
            }
          }
        });
        document.dispatchEvent(event);

        if (self.config.submission.type == 'auto') {
          self.submitResult();
        }
      }
    }
  }, {
    key: "submitResult",
    value: function submitResult() {
      var self = this;
      var formValues;

      if (self.config.submission.type == 'form') {
        formValues = self.form.getValues();
        var isValid = self.form.validate({
          showErrors: true
        });
        if (!isValid) return;
      }

      fingerprintjs2__WEBPACK_IMPORTED_MODULE_0___default.a.get(function (fingerprintComponents) {
        var fingerprintData;

        try {
          fingerprintData = JSON.stringify(fingerprintComponents);
        } catch (err) {}

        var url = "".concat(self.config.api && self.config.api.url, "/api/site/").concat(self.config.siteId, "/choicesguide/").concat(self.config.choicesGuideId, "/result");
        var headers = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].api.getHeaders(self.config);
        var body = {
          result: {
            answers: self.state.answers,
            scores: self.state.scores
          },
          extraData: formValues,
          userFingerprint: btoa(fingerprintData)
        };
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
          if (self.config.submission.type == 'form') {
            document.location.href = self.config.afterUrl;
          }
        })["catch"](function (error) {
          error.then(function (messages) {
            return console.log(messages);
          });
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _React$createElement, _React$createElement2;

      var self = this;
      var data = self.props && self.props.data || {};
      var choices = self.state.choices;
      var answerDimensions = 1;
      var questionGroup;

      if (self.state.questionGroups) {
        questionGroup = self.state.questionGroups.find(function (group) {
          return group.id == self.config.questionGroupId;
        });

        if (questionGroup) {
          questionGroup.values = self.state.values || {};

          if (questionGroup && questionGroup.choices) {
            choices = questionGroup.choices;
            answerDimensions = questionGroup.answerDimensions;
          }
        }
      }

      var choicesHTML = null;

      if (choices) {
        switch (self.config.choices.type) {
          case 'plane':
            var images = choices && choices[0] && choices[0].images;

            if (images && images.length > 1) {
              choices[0].images = choices && choices[0] && choices[0].images[1];
            }

            choicesHTML = /*#__PURE__*/React.createElement(_choices_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], (_React$createElement = {
              config: _objectSpread(_objectSpread({}, self.config.choices), {}, {
                sticky: false,
                size: 630
              }),
              scores: self.state.scores,
              answerDimensions: answerDimensions
            }, _defineProperty(_React$createElement, "scores", _objectSpread({}, self.state.scores)), _defineProperty(_React$createElement, "choices", _toConsumableArray(choices)), _defineProperty(_React$createElement, "firstAnswerGiven", true), _defineProperty(_React$createElement, "ref", function ref(el) {
              self.choicesElement = el;
            }), _defineProperty(_React$createElement, "key", "choices"), _React$createElement));
            break;

          default:
            choicesHTML = /*#__PURE__*/React.createElement(_choices_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], (_React$createElement2 = {
              config: _objectSpread(_objectSpread({}, self.config.choices), {}, {
                sticky: false,
                size: 630,
                withPercentage: true
              }),
              scores: self.state.scores,
              answerDimensions: answerDimensions
            }, _defineProperty(_React$createElement2, "scores", _objectSpread({}, self.state.scores)), _defineProperty(_React$createElement2, "choices", _toConsumableArray(choices)), _defineProperty(_React$createElement2, "firstAnswerGiven", true), _defineProperty(_React$createElement2, "ref", function ref(el) {
              self.choicesElement = el;
            }), _defineProperty(_React$createElement2, "key", "choices"), _React$createElement2));
        }
      }

      var moreInfoHTML = null;

      if (self.config.moreInfoUrl && self.config.moreInfoLabel) {
        moreInfoHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-more-info-link"
        }, /*#__PURE__*/React.createElement("a", {
          href: self.config.moreInfoUrl
        }, self.config.moreInfoLabel));
      }

      var formHTML = null;
      var previousNextButtonsHTML = null;

      if (self.config.submission.type == 'form') {
        formHTML = /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_5__["default"].Form, {
          config: self.config.submission.form,
          ref: function ref(el) {
            self.form = el;
          }
        });
        var previousUrl = null;
        var previousAction = null;
        var previousLabel = null;

        if (self.config.beforeUrl) {
          previousUrl = self.config.beforeUrl;
          previousLabel = self.config.beforeLabel || 'Vorige';
        }

        var nextUrl = null;

        var nextAction = function nextAction() {
          self.submitResult();
        };

        var nextLabel = self.config.afterLabel || 'Opslaan';

        if (previousLabel || nextLabel) {
          previousNextButtonsHTML = /*#__PURE__*/React.createElement(_previous_next_button_block_index_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
            previousAction: previousAction,
            previousUrl: previousUrl,
            previousLabel: previousLabel,
            nextAction: nextAction,
            nextUrl: nextUrl,
            nextLabel: nextLabel
          });
        }
      }

      return /*#__PURE__*/React.createElement("div", {
        className: "osc-choices-guide"
      }, /*#__PURE__*/React.createElement("div", {
        className: "osc-result"
      }, /*#__PURE__*/React.createElement("div", {
        className: "osc-result-content"
      }, /*#__PURE__*/React.createElement("div", {
        className: "osc-choices-container"
      }, choicesHTML), moreInfoHTML, formHTML)), previousNextButtonsHTML);
    }
  }]);

  return OpenStadComponentChoicesGuideResult;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./src/choices-guide/component/choices-guide.jsx":
/*!*******************************************************!*\
  !*** ./src/choices-guide/component/choices-guide.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentChoicesGuide; });
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _libs_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libs/index.jsx */ "./src/libs/index.jsx");
/* harmony import */ var _question_group_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./question-group.jsx */ "./src/choices-guide/component/question-group.jsx");
/* harmony import */ var _choices_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./choices.jsx */ "./src/choices-guide/component/choices.jsx");
/* harmony import */ var _edit_form_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-form.jsx */ "./src/choices-guide/component/edit-form.jsx");
/* harmony import */ var _previous_next_button_block_index_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../previous-next-button-block/index.jsx */ "./src/previous-next-button-block/index.jsx");
/* harmony import */ var _lightbox_index_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lightbox/index.jsx */ "./src/lightbox/index.jsx");
/* harmony import */ var _lib_fetch_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/fetch.js */ "./src/choices-guide/lib/fetch.js");


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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








 // import OpenStadComponentChoicesGuideResult from './result.jsx';



var OpenStadComponentChoicesGuide = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentChoicesGuide, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentChoicesGuide);

  function OpenStadComponentChoicesGuide(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentChoicesGuide);

    _this = _super.call(this, props, {
      siteId: null,
      loginUrl: null,
      noOfQuestionsToShow: 1,
      api: {
        url: null
      },
      sticky: null // result: {},

    });

    var self = _assertThisInitialized(_this); // tmp


    if (!self.config.aspectRatio && self.config.choices && self.config.choices.type && self.config.choices.type == 'plane') {
      self.config.aspectRatio = '10x7';
    }

    if (typeof self.config.choiceTitleIncludesPreference == 'undefined' && self.config.choices && self.config.choices.type && self.config.choices.type == 'plane') {
      self.config.choiceTitleIncludesPreference = true;
    }

    var allValues = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].sessionStorage.get('osc-choices-guide.values') || {};
    var allScores = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].sessionStorage.get('osc-choices-guide.scores') || {};
    self.state = {
      editMode: false,
      title: 'Loading....',
      questionGroups: [],
      choices: [],
      currentQuestionGroupIndex: undefined,
      currentQuestion: undefined,
      status: 'init',
      values: allValues[_this.config.choicesGuideId],
      scores: allScores[_this.config.choicesGuideId]
    };
    self.liveUpdates = self.liveUpdates.bind(_assertThisInitialized(_this));
    self.hideEditForm = self.hideEditForm.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(OpenStadComponentChoicesGuide, [{
    key: "componentDidMount",
    value: function componentDidMount(prevProps, prevState) {
      var self = this;
      self.fetchData();
    }
  }, {
    key: "fetchData",
    value: function fetchData() {
      var self = this;
      Object(_lib_fetch_js__WEBPACK_IMPORTED_MODULE_8__["default"])({
        config: self.config
      }).then(function (data) {
        self.setState(data, function () {
          self.startGuide();
        });
      })["catch"](function (err) {
        console.log('Niet goed');
        console.log(err);
      });
    }
  }, {
    key: "startGuide",
    value: function startGuide() {
      var self = this;
      var state = {};
      state.currentQuestionGroupIndex = 0;
      self.setState(state, function () {
        self.liveUpdates();
        var event = new window.CustomEvent('osc-choices-guide-is-ready');
        document.dispatchEvent(event);
      });
    }
  }, {
    key: "showEditForm",
    value: function showEditForm() {
      this.setState({
        editMode: true
      });
    }
  }, {
    key: "hideEditForm",
    value: function hideEditForm() {
      var allValues = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].sessionStorage.get('osc-choices-guide.values') || {};
      var allScores = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].sessionStorage.get('osc-choices-guide.scores') || {};
      this.setState({
        editMode: false,
        title: 'Loading....',
        questionGroups: [],
        choices: [],
        currentQuestionGroupIndex: undefined,
        status: 'init',
        values: allValues[this.config.choicesGuideId],
        scores: allScores[this.config.choicesGuideId]
      }, function () {
        this.fetchData();
      });
    }
  }, {
    key: "gotoNextQuestion",
    value: function gotoNextQuestion() {
      var self = this;
      var state = {};
      state.values = merge__WEBPACK_IMPORTED_MODULE_0___default()(self.state.values || {}, self.questionGroupElement.getAnswers());
      self.setState(state);
      self.choicesElement.calculateScores(state.values);

      var _self$questionGroupEl = self.questionGroupElement.gotoNextQuestion(),
          isReady = _self$questionGroupEl.isReady,
          currentQuestion = _self$questionGroupEl.currentQuestion;

      self.setState({
        currentQuestion: currentQuestion
      }, function () {
        if (isReady) {
          self.gotoNextGroup();
        } else {
          window.scrollTo(0, 0);
        }
      });
    }
  }, {
    key: "gotoPreviousQuestion",
    value: function gotoPreviousQuestion() {
      var _this2 = this;

      if (this.state.status == 'result') return this.gotoPreviousGroup();
      var state = {};
      state.values = merge__WEBPACK_IMPORTED_MODULE_0___default()(this.state.values || {}, this.questionGroupElement.getAnswers());
      this.setState(state);
      this.choicesElement.calculateScores(state.values);

      var _this$questionGroupEl = this.questionGroupElement.gotoPreviousQuestion(),
          isBeginning = _this$questionGroupEl.isBeginning,
          currentQuestion = _this$questionGroupEl.currentQuestion;

      this.setState({
        currentQuestion: currentQuestion
      }, function () {
        if (isBeginning) {
          _this2.gotoPreviousGroup();
        } else {
          window.scrollTo(0, 0);
        }
      });
    }
  }, {
    key: "gotoNextGroup",
    value: function gotoNextGroup() {
      var _this3 = this;

      var state = _objectSpread({}, this.state);

      if (state.currentQuestionGroupIndex < state.questionGroups.length - 1) {
        state.values = merge__WEBPACK_IMPORTED_MODULE_0___default()(state.values || {}, this.questionGroupElement.getAnswers());
        state.currentQuestionGroupIndex++;
        this.setState(state, function () {
          _this3.liveUpdates();

          window.scrollTo(0, 0);
        });
      } else {
        this.gotoResult();
      }
    }
  }, {
    key: "gotoPreviousGroup",
    value: function gotoPreviousGroup() {
      var _this4 = this;

      var state = {};
      state.currentQuestionGroupIndex = this.state.currentQuestionGroupIndex - 1;

      if (this.state.status == 'result') {
        state.currentQuestionGroupIndex = this.state.questionGroups.length - 1;
        state.status = 'active';
      }

      this.setState(state, function () {
        _this4.liveUpdates();

        window.scrollTo(0, 0);
      });
    }
  }, {
    key: "gotoResult",
    value: function gotoResult() {
      var self = this;
      document.location.href = self.config.afterUrl; // let values = merge(self.state.values || {}, self.questionGroupElement.getAnswers());
      // let preferedChoice = self.choicesElement.getPreferedChoice();
      // self.setState({
      //   status: 'result',
      //   values,
      //   result: values,
      //   preferedChoice,
      // }, () => {
      //   self.submitResult()
      //   window.scrollTo(0,0)
      // });
    }
  }, {
    key: "liveUpdates",
    value: function liveUpdates() {
      var _this5 = this;

      var answers = merge__WEBPACK_IMPORTED_MODULE_0___default()(this.state.values || {}, this.questionGroupElement.getAnswers());
      var scores = this.choicesElement.calculateScores(answers);
      this.setState({
        scores: scores,
        firstAnswerGiven: Object.keys(answers).length > 0
      }, function () {
        var allValues = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].sessionStorage.get('osc-choices-guide.values') || {};
        allValues[_this5.config.choicesGuideId] = answers;
        _libs_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].sessionStorage.set('osc-choices-guide.values', allValues);
        var allScores = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].sessionStorage.get('osc-choices-guide.scores') || {};
        allScores[_this5.config.choicesGuideId] = scores;
        _libs_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].sessionStorage.set('osc-choices-guide.scores', allScores);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      var self = this;
      var choices = self.state.choices;
      var answerDimensions = 1;
      var questionGroup;

      if (self.state.currentQuestionGroupIndex >= 0) {
        questionGroup = self.state.questionGroups[self.state.currentQuestionGroupIndex];

        if (questionGroup) {
          questionGroup.values = self.state.values || {};

          if (questionGroup && questionGroup.choices) {
            choices = questionGroup.choices;
            answerDimensions = questionGroup.answerDimensions;
          }
        }
      }

      var imageHTML = null;
      var images = self.state.images;

      if (images) {
        if (!Array.isArray(images)) images = [images];
        var image = images[0];
        imageHTML = /*#__PURE__*/React.createElement("img", {
          className: "osc-image",
          src: image.src
        });
      }

      var contentHTML = null;

      if (self.state.editMode) {
        // todo: moet een status worden
        contentHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-choices-guide-content"
        }, /*#__PURE__*/React.createElement(_edit_form_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
          config: self.config,
          onFinished: self.hideEditForm,
          data: _objectSpread({}, self.state)
        }));
      } else if (self.state.status == 'result') {
        alert('Hier had je niet moeten komen'); // let previousButtonHTML = <div className="osc-previous-button" onClick={() => {self.gotoPreviousQuestion();}}>Terug</div>;
        //  
        // let nextButtonHTML = null;
        // if (self.config.afterUrl) {
        //   nextButtonHTML = <div className="osc-next-button" onClick={() => { document.location.href = `${self.config.afterUrl}` }}>Volgende</div>
        // }
        //  
        // let choicesHTML = <OpenStadComponentChoices config={{ ...self.config.choices, sticky: false, size: 630, }} scores={{...self.state.scores}} choices={[...choices]} answerDimensions={answerDimensions} firstAnswerGiven={ self.state.firstAnswerGiven ? true : false } ref={function(el) { self.choicesElement = el; }} key='choices'/>;
        //  
        // contentHTML = (
        //   <div className="osc-choices-guide-content">
        //     <OpenStadComponentChoicesGuideResult config={{ ...self.config.result, type: self.config.choices.type }} data={{ choices: self.choices, result: self.state.result.values, preferedChoice: self.state.preferedChoice }} onFinished={self.hideEditForm} data={{ ...self.state }}>
        //       {choicesHTML}
        //     </OpenStadComponentChoicesGuideResult>
        //     <div className="osc-nav-bar">
        //       {previousButtonHTML}
        //       {nextButtonHTML}
        //     </div>
        //   </div>
        // );
      } else {
        var introHTML = null;

        if (self.state.status == 'init') {
          contentHTML = /*#__PURE__*/React.createElement("div", {
            className: "osc-choices-guide-content"
          }, /*#__PURE__*/React.createElement("div", {
            className: "osc-intro"
          }, "Laden..."));
        } else {
          var choicesHTML = null;
          var choicesTitle = '<b>Je hebt nog geen keuze gemaakt</b>';

          if (self.config.choiceTitleIncludesPreference) {
            if (self.state.firstAnswerGiven && self.choicesElement) {
              var choiceElement = self.choicesElement.getPreferedChoice();
              choicesTitle = '<b>Jouw voorkeur: </b>' + choiceElement.getTitle(self.state.scores[choiceElement.config.divId]) || false;
            }
          } else {
            choicesTitle = '<b>Jouw voorkeur</b>';
          }

          choicesHTML = /*#__PURE__*/React.createElement("div", {
            id: 'osc-choices-container-' + this.divId,
            className: "osc-choices-container osc-accordeon osc-closed",
            ref: function ref(el) {
              self.choicesAccordeon = el;
            }
          }, /*#__PURE__*/React.createElement("div", {
            onClick: function onClick() {
              if (_this6.choicesAccordeon.className.match(' osc-closed')) {
                _this6.choicesAccordeon.className = _this6.choicesAccordeon.className.replace(' osc-closed', ' osc-open');
              } else {
                _this6.choicesAccordeon.className = _this6.choicesAccordeon.className.replace(' osc-open', ' osc-closed');
              }
            },
            className: "osc-accordeon-button",
            dangerouslySetInnerHTML: {
              __html: choicesTitle
            }
          }), /*#__PURE__*/React.createElement("div", {
            className: "osc-accordeon-content"
          }, /*#__PURE__*/React.createElement(_choices_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
            config: self.config.choices,
            choices: _toConsumableArray(choices),
            scores: _objectSpread({}, self.state.scores),
            answerDimensions: answerDimensions,
            firstAnswerGiven: self.state.firstAnswerGiven ? true : false,
            ref: function ref(el) {
              self.choicesElement = el;
            },
            key: "choices"
          })));
          var questionGroupHTML = /*#__PURE__*/React.createElement(_question_group_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
            config: {
              noOfQuestionsToShow: this.config.noOfQuestionsToShow,
              liveUpdatesFunction: self.liveUpdates,
              aspectRatio: self.config.aspectRatio
            },
            data: questionGroup,
            ref: function ref(el) {
              self.questionGroupElement = el;
            },
            key: "group".concat(self.state.currentQuestionsGroupIndex)
          });
          var editButtonHTML = null;

          if (self.config.user && self.config.user.role && self.config.user.role == 'admin') {
            editButtonHTML = /*#__PURE__*/React.createElement("button", {
              className: "osc-editbutton osc-edit",
              onClick: function onClick(event) {
                return self.showEditForm();
              }
            }, "Bewerk keuzewijzer");
          }

          var previousUrl = null;
          var previousAction = null;
          var previousLabel = null;

          if (self.state.status == 'result' || self.state.currentQuestionGroupIndex > 0 || self.state.currentQuestion > 0) {
            previousAction = function previousAction() {
              self.gotoPreviousQuestion();
            };

            previousLabel = 'Terug';
          } else if (self.config.beforeUrl) {
            previousUrl = self.config.beforeUrl;
            previousLabel = 'Introductie';
          }

          var nextUrl = null;
          var nextAction = null;
          var nextLabel = null;

          if (self.state.status != 'init' && self.state.status != 'result') {
            nextAction = function nextAction() {
              self.gotoNextQuestion();
            };

            nextLabel = 'Volgende';
          } else if (self.config.afterUrl) {
            nextUrl = self.config.afterUrl;
            nextLabel = 'Resultaat';
          }

          var previousNextButtonsHTML = null;

          if (previousLabel || nextLabel) {
            previousNextButtonsHTML = /*#__PURE__*/React.createElement(_previous_next_button_block_index_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
              previousAction: previousAction,
              previousUrl: previousUrl,
              previousLabel: previousLabel,
              nextAction: nextAction,
              nextUrl: nextUrl,
              nextLabel: nextLabel
            });
          }

          contentHTML = /*#__PURE__*/React.createElement("div", {
            className: "osc-choices-guide-content"
          }, editButtonHTML, choicesHTML, questionGroupHTML, previousNextButtonsHTML);
        }
      }

      return /*#__PURE__*/React.createElement("div", {
        id: this.divId,
        className: "osc-choices-guide"
      }, /*#__PURE__*/React.createElement(_lightbox_index_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], null), imageHTML, contentHTML);
    }
  }]);

  return OpenStadComponentChoicesGuide;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./src/choices-guide/component/choices.jsx":
/*!*************************************************!*\
  !*** ./src/choices-guide/component/choices.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentChoices; });
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/index.jsx */ "./src/libs/index.jsx");
/* harmony import */ var _choice_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./choice.jsx */ "./src/choices-guide/component/choice.jsx");


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





var OpenStadComponentChoices = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentChoices, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentChoices);

  function OpenStadComponentChoices(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentChoices);

    _this = _super.call(this, props, {
      type: 'default',
      sticky: null
    });
    _this.choiceElements = [];
    _this.state = {
      title: 'Je hebt nog geen keuze gemaakt',
      scores: props.scores
    };
    return _this;
  }

  _createClass(OpenStadComponentChoices, [{
    key: "componentDidMount",
    value: function componentDidMount(prevProps, prevState) {
      var self = this;
    }
  }, {
    key: "calculateScores",
    value: function calculateScores(answers) {
      var self = this;
      var scores = {};
      self.choiceElements.forEach(function (choiceElement) {
        scores[choiceElement.config.divId] = choiceElement.calculateScore(answers);
      });
      self.setState({
        scores: scores
      });
      return scores;
    }
  }, {
    key: "getPreferedChoice",
    value: function getPreferedChoice() {
      //let scores = this.calculateScores();
      var self = this;
      var scores = self.state.scores;

      switch (self.config.type) {
        case 'plane':
          // dan zou er maar 1 choice moeten zijn
          return self.choiceElements[0];
          break;

        default:
          var sorted = Object.keys(scores).sort(function (a, b) {
            return scores[b].x - scores[a].x;
          });
          var first = sorted[0];
          return self.choiceElements.find(function (elem) {
            return elem && elem.config.divId == first;
          });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      return /*#__PURE__*/React.createElement("ul", {
        className: "osc-choices"
      }, Object.keys(self.props.choices).map(function (key, i) {
        var choice = self.props.choices[key];
        return /*#__PURE__*/React.createElement(_choice_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
          config: _objectSpread({
            divId: "choice-".concat(choice.id)
          }, self.config),
          data: choice,
          score: self.props.scores && self.props.scores["choice-".concat(choice.id)],
          answerDimensions: self.props.answerDimensions,
          key: "choice-".concat(choice.id),
          ref: function ref(el) {
            self.choiceElements[i] = el;
          }
        });
      }));
    }
  }]);

  return OpenStadComponentChoices;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/choices-guide/component/edit-form.jsx":
/*!***************************************************!*\
  !*** ./src/choices-guide/component/edit-form.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentChoicesGuideForm; });
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/index.jsx */ "./src/libs/index.jsx");
/* harmony import */ var _forms_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../forms/index.jsx */ "./src/forms/index.jsx");


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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



 // todo: het is nu 1 form met switches; uit elkaar trekken in losse forms is netter

var OpenStadComponentChoicesGuideForm = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentChoicesGuideForm, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentChoicesGuideForm);

  function OpenStadComponentChoicesGuideForm(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentChoicesGuideForm);

    _this = _super.call(this, props, {
      siteId: null,
      loginUrl: null,
      noOfQuestionsToShow: 1,
      api: {
        url: null
      }
    });
    _this.state = {
      choicesGuideId: _this.props.data.choicesGuideId,
      currentTarget: {},
      busy: false
    };
    _this.onFinished = _this.props.onFinished;
    return _this;
  }

  _createClass(OpenStadComponentChoicesGuideForm, [{
    key: "componentDidMount",
    value: function componentDidMount(prevProps, prevState) {
      this.fetchData();
    }
  }, {
    key: "fetchData",
    value: function fetchData() {
      var self = this;
      var url = "".concat(self.config.api && self.config.api.url, "/api/site/").concat(self.config.siteId, "/choicesguide/").concat(self.config.choicesGuideId, "?includeChoices=1&includeQuestions=1");
      var headers = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].api.getHeaders();
      fetch(url, {
        headers: headers
      }).then(function (response) {
        return response.json();
      }).then(function (json) {
        var state = {};
        state.choicesGuideId = json.id;
        state.title = json.title;
        state.description = json.description;
        state.images = json.images;
        state.choices = json.choices || [];
        state.questionGroups = json.questiongroups || [];
        state.busy = false;
        self.setState(state, function () {
          self.setCurrentForm({
            what: 'choices-guide'
          });
        });
      })["catch"](function (err) {
        console.log('Niet goed');
        console.log(err);
      });
    }
  }, {
    key: "handleFieldChange",
    value: function handleFieldChange(data) {
      var currentTarget = this.state.currentTarget;
      Object.keys(data).forEach(function (key) {
        currentTarget[key] = data[key];
      });
      this.setState({
        currentTarget: currentTarget
      });
    }
  }, {
    key: "setCurrentForm",
    value: function setCurrentForm(currentTarget) {
      var questionGroup;
      var choice;
      var question;

      switch (currentTarget.what) {
        case 'choices-guide':
          currentTarget.title = this.state.title;
          currentTarget.description = this.state.description;
          currentTarget.images = this.state.images ? JSON.stringify(this.state.images) : '';
          break;

        case 'choice':
          if (currentTarget.questionGroupId) {
            questionGroup = this.state.questionGroups.find(function (group) {
              return group.id == currentTarget.questionGroupId;
            }) || {};
            choice = questionGroup.choices && questionGroup.choices.find(function (choices) {
              return choices.id == currentTarget.choiceId;
            }) || {};
          } else {
            choice = this.state.choices.find(function (choices) {
              return choices.id == currentTarget.choicesId;
            }) || {};
          }

          currentTarget.title = choice.title;
          currentTarget.description = choice.description;
          currentTarget.images = choice.images ? JSON.stringify(choice.images) : '';
          currentTarget.answers = choice.answers ? JSON.stringify(choice.answers) : '';
          currentTarget.seqnr = choice.seqnr || 0;
          break;

        case 'question-group':
          questionGroup = this.state.questionGroups.find(function (group) {
            return group.id == currentTarget.questionGroupId;
          }) || {};
          currentTarget.answerDimensions = questionGroup.answerDimensions;
          currentTarget.title = questionGroup.title;
          currentTarget.description = questionGroup.description;
          currentTarget.images = questionGroup.images ? JSON.stringify(questionGroup.images) : '';
          currentTarget.seqnr = questionGroup.seqnr || 0;
          break;

        case 'question':
          questionGroup = this.state.questionGroups.find(function (group) {
            return group.id == currentTarget.questionGroupId;
          }) || {};
          question = questionGroup.questions && questionGroup.questions.find(function (question) {
            return question.id == currentTarget.questionId;
          }) || {};
          currentTarget.title = question.title;
          currentTarget.description = question.description;
          currentTarget.images = question.images ? JSON.stringify(question.images) : '';
          currentTarget.minLabel = question.minLabel;
          currentTarget.maxLabel = question.maxLabel;
          currentTarget.type = question.type;
          currentTarget.values = question.values ? JSON.stringify(question.values) : '';
          currentTarget.seqnr = question.seqnr || 0;
          break;

        default:
      }

      this.setState({
        currentTarget: currentTarget
      });
    }
  }, {
    key: "submitForm",
    value: function submitForm() {
      var self = this;
      self.setState({
        busy: true
      }, function () {
        var isValid = true; // todo

        if (!isValid) return;
        if (!(self.config.user && self.config.user.role && self.config.user.role == 'admin')) return alert('Je mag dit niet');
        var url;
        var body;
        var targetId;

        switch (self.state.currentTarget.what) {
          case 'choices-guide':
            targetId = self.state.choicesGuideId;
            url = "".concat(self.config.api && self.config.api.url, "/api/site/").concat(self.config.siteId, "/choicesguide");
            body = {
              title: self.state.currentTarget.title,
              description: self.state.currentTarget.description,
              images: self.state.currentTarget.images
            };
            break;

          case 'choice':
            targetId = self.state.currentTarget.choiceId;

            if (self.state.currentTarget.questionGroupId) {
              url = "".concat(self.config.api && self.config.api.url, "/api/site/").concat(self.config.siteId, "/choicesguide/").concat(self.state.choicesGuideId, "/questiongroup/").concat(self.state.currentTarget.questionGroupId, "/choice");
            } else {
              url = "".concat(self.config.api && self.config.api.url, "/api/site/").concat(self.config.siteId, "/choicesguide/").concat(self.state.choicesGuideId, "/choice");
            }

            body = {
              title: self.state.currentTarget.title,
              description: self.state.currentTarget.description,
              images: self.state.currentTarget.images,
              answers: self.state.currentTarget.answers ? JSON.parse(self.state.currentTarget.answers) : '',
              seqnr: self.state.currentTarget.seqnr
            };
            break;

          case 'question-group':
            targetId = self.state.currentTarget.questionGroupId;
            url = "".concat(self.config.api && self.config.api.url, "/api/site/").concat(self.config.siteId, "/choicesguide/").concat(self.state.choicesGuideId, "/questiongroup");
            body = {
              answerDimensions: self.state.currentTarget.answerDimensions,
              title: self.state.currentTarget.title,
              description: self.state.currentTarget.description,
              images: self.state.currentTarget.images,
              seqnr: self.state.currentTarget.seqnr
            };
            break;

          case 'question':
            targetId = self.state.currentTarget.questionId;
            url = "".concat(self.config.api && self.config.api.url, "/api/site/").concat(self.config.siteId, "/choicesguide/").concat(self.state.choicesGuideId, "/questiongroup/").concat(self.state.currentTarget.questionGroupId, "/question");
            body = {
              title: self.state.currentTarget.title,
              description: self.state.currentTarget.description,
              images: self.state.currentTarget.images,
              minLabel: self.state.currentTarget.minLabel,
              maxLabel: self.state.currentTarget.maxLabel,
              type: self.state.currentTarget.type,
              values: self.state.currentTarget.values ? JSON.parse(self.state.currentTarget.values) : '',
              seqnr: self.state.currentTarget.seqnr
            };
            break;

          default:
        }

        url += targetId ? "/".concat(targetId) : '';
        var headers = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].api.getHeaders(self.config);
        var method = targetId ? 'PUT' : 'POST';
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
          // if (typeof self.config.onSubmit == 'function') {
          //   self.config.onSubmit({ description: self.state.description });
          // }
          //
          // self.setState({ description: '' }, () => {
          //   if (self.config.argumentId) {
          //     var event = new window.CustomEvent('reactionEdited', { detail: json });
          //     document.dispatchEvent(event);
          //   } else {
          //     var event = new window.CustomEvent('newReactionStored', { detail: json });
          //     document.dispatchEvent(event);
          //   }
          // });
          self.fetchData();
        })["catch"](function (error) {
          error.then(function (messages) {
            return console.log(messages);
          });
          self.setState({
            busy: false
          });
        });
      });
    }
  }, {
    key: "deleteElement",
    value: function deleteElement(_ref) {
      var what = _ref.what,
          questionGroupId = _ref.questionGroupId,
          choiceId = _ref.choiceId,
          questionId = _ref.questionId,
          title = _ref.title;
      var self = this;
      if (!confirm("Je gaat " + what + " " + title + " verwijderen. Weet je het zeker?")) return;
      var url;

      switch (what) {
        case 'question-group':
          url = "".concat(self.config.api && self.config.api.url, "/api/site/").concat(self.config.siteId, "/choicesguide/").concat(self.state.choicesGuideId, "/questiongroup/").concat(questionGroupId);
          break;

        case 'choice':
          url = "".concat(self.config.api && self.config.api.url, "/api/site/").concat(self.config.siteId, "/choicesguide/").concat(self.state.choicesGuideId, "/questiongroup/").concat(questionGroupId, "/choice/").concat(choiceId);
          break;

        case 'question':
          url = "".concat(self.config.api && self.config.api.url, "/api/site/").concat(self.config.siteId, "/choicesguide/").concat(self.state.choicesGuideId, "/questiongroup/").concat(questionGroupId, "/question/").concat(questionId);
          break;

        default:
      }

      var headers = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].api.getHeaders(self.config);
      fetch(url, {
        method: 'DELETE',
        headers: headers
      }).then(function (response) {
        if (response.ok) {
          return response.json();
        }

        throw response.text();
      }).then(function (json) {
        self.fetchData();
      })["catch"](function (error) {
        error.then(function (messages) {
          return console.log(messages);
        });
        self.setState({
          busy: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      var title = null;
      var formfieldsHTML = null;
      var overviewHTML = null;
      var backButtonHTML = /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          self.setCurrentForm({
            what: 'choices-guide'
          });
        }
      }, "Terug");
      var submitButtonHTML = /*#__PURE__*/React.createElement("button", {
        onClick: function onClick(event) {
          return self.submitForm();
        }
      }, "Submit");

      switch (self.state.currentTarget.what) {
        case 'choices-guide':
          title = 'Bewerk keuzewijzer';
          formfieldsHTML = /*#__PURE__*/React.createElement("div", {
            className: "openstad-form"
          }, /*#__PURE__*/React.createElement("h3", null, "Titel"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].InputWithCounter, {
            key: "x1",
            config: {
              inputType: 'input',
              minLength: 1,
              maxLength: 1000
            },
            value: self.state.currentTarget.title,
            onChange: function onChange(data) {
              return self.handleFieldChange({
                title: data.value
              });
            },
            ref: function ref(el) {
              self.titleField = el;
            }
          }), /*#__PURE__*/React.createElement("h3", null, "Beschrijving"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].InputWithCounter, {
            key: "x2",
            config: {
              inputType: 'textarea',
              minLength: 1,
              maxLength: 1000
            },
            value: self.state.currentTarget.description,
            onChange: function onChange(data) {
              return self.handleFieldChange({
                description: data.value
              });
            },
            ref: function ref(el) {
              return self.descriptionField = el;
            }
          }), /*#__PURE__*/React.createElement("h3", null, "Afbeeldingen"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].Textarea, {
            key: "i1",
            config: {},
            value: self.state.currentTarget.images,
            onChange: function onChange(data) {
              return self.handleFieldChange({
                images: data.value
              });
            },
            ref: function ref(el) {
              return self.imagesField = el;
            }
          }));
          overviewHTML = /*#__PURE__*/React.createElement("div", {
            className: "openstad-form"
          }, /*#__PURE__*/React.createElement("h4", null, "Vraaggroepen"), Object.keys(self.state.questionGroups).map(function (key, i) {
            var questionGroup = self.state.questionGroups[key];
            var questionsHTML = /*#__PURE__*/React.createElement("ul", null, Object.keys(questionGroup.questions).map(function (key, i) {
              var question = questionGroup.questions[key];
              return /*#__PURE__*/React.createElement("li", null, "(", question.id, ") - ", question.title, " - ", question.seqnr, "-", /*#__PURE__*/React.createElement("a", {
                href: "#",
                onClick: function onClick(event) {
                  return self.setCurrentForm({
                    what: 'question',
                    questionGroupId: questionGroup.id,
                    questionId: question.id
                  });
                }
              }, "Bewerk"), "-", /*#__PURE__*/React.createElement("a", {
                href: "#",
                onClick: function onClick(event) {
                  return self.deleteElement({
                    what: 'question',
                    questionGroupId: questionGroup.id,
                    questionId: question.id,
                    title: question.title
                  });
                }
              }, "Verwijder"));
            }), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
              href: "#",
              onClick: function onClick(event) {
                return self.setCurrentForm({
                  what: 'question',
                  questionGroupId: questionGroup.id
                });
              }
            }, "Nieuwe vraag")));
            var choicesHTML = /*#__PURE__*/React.createElement("ul", null, Object.keys(questionGroup.choices).map(function (key, i) {
              var choice = questionGroup.choices[key];
              return /*#__PURE__*/React.createElement("li", null, choice.title, " - ", choice.seqnr, "- ", /*#__PURE__*/React.createElement("a", {
                href: "#",
                onClick: function onClick(event) {
                  return self.setCurrentForm({
                    what: 'choice',
                    questionGroupId: questionGroup.id,
                    choiceId: choice.id
                  });
                }
              }, "Bewerk"), "- ", /*#__PURE__*/React.createElement("a", {
                href: "#",
                onClick: function onClick(event) {
                  return self.deleteElement({
                    what: 'choice',
                    questionGroupId: questionGroup.id,
                    choiceId: choice.id,
                    title: choice.title
                  });
                }
              }, "Verwijder"));
            }), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
              href: "#",
              onClick: function onClick(event) {
                return self.setCurrentForm({
                  what: 'choice',
                  questionGroupId: questionGroup.id
                });
              }
            }, "Nieuwe keuze")));
            var deleteButton;

            if (Object.keys(questionGroup.choices).length == 0 && Object.keys(questionGroup.questions).length == 0) {
              deleteButton = /*#__PURE__*/React.createElement("a", {
                href: "#",
                onClick: function onClick(event) {
                  return self.deleteElement({
                    what: 'question-group',
                    questionGroupId: questionGroup.id,
                    title: questionGroup.title
                  });
                }
              }, "Verwijder");
            }

            return /*#__PURE__*/React.createElement("div", null, questionGroup.title, " - ", questionGroup.seqnr, "- ", /*#__PURE__*/React.createElement("a", {
              href: "#",
              onClick: function onClick(event) {
                return self.setCurrentForm({
                  what: 'question-group',
                  questionGroupId: questionGroup.id
                });
              }
            }, "Bewerk"), "- ", deleteButton, questionsHTML, choicesHTML);
          }), /*#__PURE__*/React.createElement("a", {
            href: "#",
            onClick: function onClick(event) {
              return self.setCurrentForm({
                what: 'question-group'
              });
            }
          }, "Nieuwe groep"));
          backButtonHTML = /*#__PURE__*/React.createElement("button", {
            onClick: function onClick() {
              if (self.onFinished) self.onFinished();
            }
          }, "Terug");
          break;

        case 'choice':
          title = 'Bewerk Keuze';
          formfieldsHTML = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Titel"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].InputWithCounter, {
            config: {
              inputType: 'input',
              minLength: 1,
              maxLength: 1000
            },
            value: self.state.currentTarget.title,
            onChange: function onChange(data) {
              return self.handleFieldChange({
                title: data.value
              });
            },
            ref: function ref(el) {
              return self.titleField = el;
            }
          }), /*#__PURE__*/React.createElement("h3", null, "Beschrijving"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].InputWithCounter, {
            config: {
              inputType: 'textarea',
              minLength: 1,
              maxLength: 1000
            },
            value: self.state.currentTarget.description,
            onChange: function onChange(data) {
              return self.handleFieldChange({
                description: data.value
              });
            },
            ref: function ref(el) {
              return self.descriptionField = el;
            }
          }), /*#__PURE__*/React.createElement("h3", null, "Afbeeldingen"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].Textarea, {
            key: "i2",
            config: {},
            value: self.state.currentTarget.images,
            onChange: function onChange(data) {
              return self.handleFieldChange({
                images: data.value
              });
            },
            ref: function ref(el) {
              return self.imagesField = el;
            }
          }), /*#__PURE__*/React.createElement("h3", null, "Antwoorden"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].Text, {
            config: {},
            value: self.state.currentTarget.answers,
            onChange: function onChange(data) {
              return self.handleFieldChange({
                answers: data.value
              });
            },
            ref: function ref(el) {
              return self.answersField = el;
            }
          }), /*#__PURE__*/React.createElement("h3", null, "Volgorde nummer"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].Text, {
            config: {},
            value: self.state.currentTarget.seqnr,
            onChange: function onChange(data) {
              return self.handleFieldChange({
                seqnr: data.value
              });
            },
            ref: function ref(el) {
              return self.seqnrField = el;
            }
          }));
          break;

        case 'question-group':
          title = 'Bewerk Vragengroep';
          formfieldsHTML = /*#__PURE__*/React.createElement("div", {
            className: "openstad-form"
          }, /*#__PURE__*/React.createElement("h3", null, "Titel"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].InputWithCounter, {
            config: {
              inputType: 'input',
              minLength: 1,
              maxLength: 1000
            },
            value: self.state.currentTarget.title,
            onChange: function onChange(data) {
              return self.handleFieldChange({
                title: data.value
              });
            },
            ref: function ref(el) {
              return self.titleField = el;
            }
          }), /*#__PURE__*/React.createElement("h3", null, "Beschrijving"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].InputWithCounter, {
            config: {
              inputType: 'textarea',
              minLength: 1,
              maxLength: 1000
            },
            value: self.state.currentTarget.description,
            onChange: function onChange(data) {
              return self.handleFieldChange({
                description: data.value
              });
            },
            ref: function ref(el) {
              return self.descriptionField = el;
            }
          }), /*#__PURE__*/React.createElement("h3", null, "Afbeeldingen"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].Textarea, {
            key: "i3",
            config: {},
            value: self.state.currentTarget.images,
            onChange: function onChange(data) {
              return self.handleFieldChange({
                images: data.value
              });
            },
            ref: function ref(el) {
              return self.imagesField = el;
            }
          }), /*#__PURE__*/React.createElement("h3", null, "Aantal dimensies in antwoorden"), /*#__PURE__*/React.createElement("select", {
            key: "dezemoetnogweg2".concat(self.state.currentTarget.questionGroupId),
            value: self.state.currentTarget.answerDimensions,
            onChange: function onChange() {
              return self.handleFieldChange({
                answerDimensions: self.answerDimensionsField.value
              });
            },
            ref: function ref(el) {
              return self.answerDimensionsField = el;
            }
          }, /*#__PURE__*/React.createElement("option", {
            value: "1"
          }, "1"), /*#__PURE__*/React.createElement("option", {
            value: "2"
          }, "2"), /*#__PURE__*/React.createElement("option", {
            value: "3"
          }, "3")), /*#__PURE__*/React.createElement("h3", null, "Volgorde nummer"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].Text, {
            config: {},
            value: self.state.currentTarget.seqnr,
            onChange: function onChange(data) {
              return self.handleFieldChange({
                seqnr: data.value
              });
            },
            ref: function ref(el) {
              return self.seqnrField = el;
            }
          }));
          break;

        case 'question':
          title = "Bewerk Vraag ".concat(self.state.currentTarget.questionId);
          formfieldsHTML = /*#__PURE__*/React.createElement("div", {
            className: "openstad-form"
          }, /*#__PURE__*/React.createElement("h3", null, "Titel"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].InputWithCounter, {
            config: {
              inputType: 'input',
              minLength: 1,
              maxLength: 1000
            },
            value: self.state.currentTarget.title,
            onChange: function onChange(data) {
              return self.handleFieldChange({
                title: data.value
              });
            },
            ref: function ref(el) {
              return self.titleField = el;
            }
          }), /*#__PURE__*/React.createElement("h3", null, "Beschrijving"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].InputWithCounter, {
            config: {
              inputType: 'textarea',
              minLength: 1,
              maxLength: 1000
            },
            value: self.state.currentTarget.description,
            onChange: function onChange(data) {
              return self.handleFieldChange({
                description: data.value
              });
            },
            ref: function ref(el) {
              return self.descriptionField = el;
            }
          }), /*#__PURE__*/React.createElement("h3", null, "Afbeeldingen"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].Textarea, {
            key: "i4",
            config: {},
            value: self.state.currentTarget.images,
            onChange: function onChange(data) {
              return self.handleFieldChange({
                images: data.value
              });
            },
            ref: function ref(el) {
              return self.imagesField = el;
            }
          }), /*#__PURE__*/React.createElement("h3", null, "Label minimale waarde"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].InputWithCounter, {
            config: {
              inputType: 'input',
              minLength: 1,
              maxLength: 1000
            },
            value: self.state.currentTarget.minLabel,
            onChange: function onChange(data) {
              return self.handleFieldChange({
                minLabel: data.value
              });
            },
            ref: function ref(el) {
              return self.minLabelField = el;
            }
          }), /*#__PURE__*/React.createElement("h3", null, "Label maximale waarde"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].InputWithCounter, {
            config: _defineProperty({
              inputType: 'input',
              maxLength: 1
            }, "maxLength", 1000),
            value: self.state.currentTarget.maxLabel,
            onChange: function onChange(data) {
              return self.handleFieldChange({
                maxLabel: data.value
              });
            },
            ref: function ref(el) {
              return self.maxLabelField = el;
            }
          }), /*#__PURE__*/React.createElement("h3", null, "Type"), /*#__PURE__*/React.createElement("select", {
            key: "dezemoetnogweg".concat(self.state.currentTarget.questionGroupId),
            value: self.state.currentTarget.type,
            onChange: function onChange() {
              return self.handleFieldChange({
                type: self.typeField.value
              });
            },
            ref: function ref(el) {
              return self.typeField = el;
            }
          }, /*#__PURE__*/React.createElement("option", {
            value: "continuous"
          }, "continue"), /*#__PURE__*/React.createElement("option", {
            value: "a-to-b"
          }, "van a naar b"), /*#__PURE__*/React.createElement("option", {
            value: "enum-buttons"
          }, "multiple choice - buttons"), /*#__PURE__*/React.createElement("option", {
            value: "enum-radio"
          }, "multiple choice - radio")), /*#__PURE__*/React.createElement("h3", null, "Waarden"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].Textarea, {
            config: {},
            value: self.state.currentTarget.values,
            onChange: function onChange(data) {
              return self.handleFieldChange({
                values: data.value
              });
            },
            ref: function ref(el) {
              return self.valuesField = el;
            }
          }), /*#__PURE__*/React.createElement("h3", null, "Volgorde nummer"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].Text, {
            config: {},
            value: self.state.currentTarget.seqnr,
            onChange: function onChange(data) {
              return self.handleFieldChange({
                seqnr: data.value
              });
            },
            ref: function ref(el) {
              return self.seqnrField = el;
            }
          }));
          break;

        default:
          backButtonHTML = /*#__PURE__*/React.createElement("button", {
            onClick: function onClick() {
              if (self.onFinished) self.onFinished();
            }
          }, "Terug");
          submitButtonHTML = null;
      }

      return /*#__PURE__*/React.createElement("div", {
        id: this.divId,
        className: "osc-form".concat(this.state.busy ? ' osc-busy' : '')
      }, /*#__PURE__*/React.createElement("h2", null, title), formfieldsHTML, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), backButtonHTML, submitButtonHTML, overviewHTML);
    }
  }]);

  return OpenStadComponentChoicesGuideForm;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/choices-guide/component/question-group.jsx":
/*!********************************************************!*\
  !*** ./src/choices-guide/component/question-group.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentQuestionGroup; });
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _question_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./question.jsx */ "./src/choices-guide/component/question.jsx");


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





var OpenStadComponentQuestionGroup = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentQuestionGroup, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentQuestionGroup);

  function OpenStadComponentQuestionGroup(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentQuestionGroup);

    _this = _super.call(this, props);
    _this.noOfQuestionsToShow = _this.config.noOfQuestionsToShow || 1;
    _this.onLiveUpdates = _this.config.liveUpdatesFunction;
    _this.questionElements = [];
    _this.state = {
      currentQuestion: 0,
      values: {}
    };
    _this.liveUpdates = _this.liveUpdates.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(OpenStadComponentQuestionGroup, [{
    key: "componentDidMount",
    value: function componentDidMount(prevProps, prevState) {}
  }, {
    key: "isValid",
    value: function isValid() {
      var self = this;
      var isValid = true;
      var shownQuestions = self.props.data.questions.slice(self.state.currentQuestion, self.state.currentQuestion + self.noOfQuestionsToShow);
      var scrollDone = false;
      shownQuestions.forEach(function (question, i) {
        if (!self.questionElements[i].isValid()) {
          if (!scrollDone) {
            setTimeout(function () {
              document.querySelector("#".concat(self.questionElements[i].config.divId, "-content")).scrollIntoView({
                behavior: 'smooth'
              });
            }, 250);
          }

          scrollDone = true;
          isValid = false;
        }
      });
      return isValid;
    }
  }, {
    key: "getAnswers",
    value: function getAnswers() {
      var self = this;
      var values = merge__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props.data && this.props.data.values, self.state.values);
      self.props.data && self.props.data.questions.forEach(function (question, i) {
        var element = self.questionElements.find(function (elem) {
          return elem && elem.questionId == question.id;
        });

        if (element) {
          if (typeof element.getAnswer() != 'undefined') {
            values[question.id] = element.getAnswer();
          }
        }
      });
      self.setState({
        values: values
      });
      return values;
    }
  }, {
    key: "gotoNextQuestion",
    value: function gotoNextQuestion() {
      if (!this.isValid()) return;
      var state = {};
      var currentQuestion = this.state.currentQuestion + this.noOfQuestionsToShow;

      if (currentQuestion >= this.props.data.questions.length) {
        currentQuestion = 0;
        this.setState({
          currentQuestion: currentQuestion
        });
        return {
          isReady: true,
          currentQuestion: currentQuestion
        };
      }

      this.setState({
        currentQuestion: currentQuestion
      });
      return {
        isReady: false,
        currentQuestion: currentQuestion
      };
    }
  }, {
    key: "gotoPreviousQuestion",
    value: function gotoPreviousQuestion() {
      var currentQuestion = this.state.currentQuestion - this.noOfQuestionsToShow;

      if (currentQuestion < 0) {
        currentQuestion = 0;
        this.setState({
          currentQuestion: currentQuestion
        });
        return {
          isBeginning: true,
          currentQuestion: currentQuestion
        };
      } else {
        this.setState({
          currentQuestion: currentQuestion
        });
        return {
          isBeginning: false,
          currentQuestion: currentQuestion
        };
      }
    }
  }, {
    key: "liveUpdates",
    value: function liveUpdates() {
      if (this.onLiveUpdates) this.onLiveUpdates();
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      var questionsHTML = null;
      var data = self.props.data || {
        questions: []
      };
      var shownQuestions = data.questions.slice(self.state.currentQuestion, self.state.currentQuestion + self.noOfQuestionsToShow);
      var values = merge__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props.data && this.props.data.values, self.state.values);
      questionsHTML = /*#__PURE__*/React.createElement("div", {
        className: "osc-questions"
      }, shownQuestions.map(function (question, i) {
        return /*#__PURE__*/React.createElement(_question_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
          config: {
            liveUpdatesFunction: self.liveUpdates,
            divId: "osc-question-".concat(question.id),
            aspectRatio: self.config.aspectRatio
          },
          data: _objectSpread(_objectSpread({}, question), {}, {
            value: values[question.id]
          }),
          answerDimensions: data.answerDimensions,
          key: "question-".concat(question.id),
          ref: function ref(el) {
            self.questionElements[i] = el;
          }
        });
      }));
      return /*#__PURE__*/React.createElement("div", {
        id: this.id,
        className: "osc-question-group"
      }, /*#__PURE__*/React.createElement("h3", {
        className: "osc-question-group-title"
      }, data.title), /*#__PURE__*/React.createElement("div", {
        className: "osc-question-group-description",
        dangerouslySetInnerHTML: {
          __html: data.description
        }
      }), questionsHTML);
    }
  }]);

  return OpenStadComponentQuestionGroup;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./src/choices-guide/component/question.jsx":
/*!**************************************************!*\
  !*** ./src/choices-guide/component/question.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentQuestion; });
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _forms_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../forms/index.jsx */ "./src/forms/index.jsx");


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




var OpenStadComponentQuestion = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentQuestion, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentQuestion);

  function OpenStadComponentQuestion(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentQuestion);

    _this = _super.call(this, props); // defaults

    _this.config.aspectRatio = _this.config.aspectRatio || '16x9';
    _this.questionId = props.data.id;
    _this.answerDimensions = props.answerDimensions || 1;
    _this.onLiveUpdates = _this.config.liveUpdatesFunction;
    _this.state = {
      value: 50,
      isAnswered: false
    };
    _this.onChangeHandler = _this.onChangeHandler.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(OpenStadComponentQuestion, [{
    key: "onChangeHandler",
    value: function onChangeHandler(value) {
      var _this2 = this;

      var state = {
        value: value,
        isAnswered: true
      };
      state.error = undefined;
      this.setState(state, function () {
        _this2.liveUpdates();
      });
    }
  }, {
    key: "isValid",
    value: function isValid() {
      var data = this.props.data || {};
      var wasAlreadyAnswered = typeof data.value != 'undefined';
      if (wasAlreadyAnswered || this.state.isAnswered) return true;
      this.setState({
        error: 'Je hebt nog geen keuze gemaakt'
      });
      return false;
    }
  }, {
    key: "getAnswer",
    value: function getAnswer() {
      if (!this.state.isAnswered) return; // null
      // TODO: mutliple dimension anwser methodes

      var data = this.props.data || {};
      var values = data.values || {};
      var result;

      if (typeof this.state.value == 'number' || typeof this.state.value == 'string') {
        result = {
          x: this.state.value
        };
        if (this.answerDimensions > 1) result.y = this.state.value;
        if (this.answerDimensions > 2) result.z = this.state.value;
      } else {
        result = {
          x: this.state.value.x
        };
        if (this.answerDimensions > 1) result.y = this.state.value.y;
        if (this.answerDimensions > 2) result.z = this.state.value.z;
      }

      return result;
    }
  }, {
    key: "liveUpdates",
    value: function liveUpdates() {
      if (this.onLiveUpdates) this.onLiveUpdates();
    }
  }, {
    key: "showLightbox",
    value: function showLightbox(startWith) {
      var images = [{
        src: this.questionImageA.src
      }, {
        src: this.questionImageB.src
      }];
      var startIndex = images.findIndex(function (img) {
        return img.src == startWith.src;
      }); // dispatch an event

      var event = new window.CustomEvent('osc-show-light-box', {
        detail: {
          images: images,
          startIndex: startIndex,
          aspectRatio: this.config.aspectRatio
        }
      });
      document.dispatchEvent(event);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var self = this;
      var data = self.props.data || {};
      var isError = false;
      if (self.state.error) isError = true;
      var isAnswered = self.state.isAnswered;
      var value = _typeof(data.value) == 'object' ? data.value.x : typeof data.value != 'undefined' ? data.value : 'not defined';

      if (value === 'not defined') {
        value = this.state.value;
      } else {
        isAnswered = true;
      }

      var imageHTML = null;
      var images = data.images;

      if (images) {
        if (!Array.isArray(images)) images = [images];
        var image = images[0];
        imageHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-question-image-container osc-question-image-aspect-".concat(self.config.aspectRatio)
        }, /*#__PURE__*/React.createElement("div", {
          className: "osc-question-image-aspect-container"
        }, /*#__PURE__*/React.createElement("img", {
          className: "osc-question-image",
          src: image.src
        })));
      }

      var questionHTML = /*#__PURE__*/React.createElement("div", {
        className: "osc-question-description"
      }, /*#__PURE__*/React.createElement("div", {
        className: "osc-question-description-text",
        dangerouslySetInnerHTML: {
          __html: data.description
        }
      }));
      var selectorHTML = null;

      switch (data.type) {
        case 'continuous':
          selectorHTML = /*#__PURE__*/React.createElement("div", {
            className: "osc-question-selector"
          }, /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].Slider, {
            min: "0",
            max: "100",
            step: "1",
            value: value,
            className: "osc-question-selector-slider",
            config: {},
            touched: isAnswered,
            onChange: function onChange(data) {
              return self.onChangeHandler(data);
            },
            ref: function ref(el) {
              return self.selector = el;
            }
          }), /*#__PURE__*/React.createElement("div", {
            className: "osc-question-selector-minlabel",
            dangerouslySetInnerHTML: {
              __html: data.minLabel
            }
          }), /*#__PURE__*/React.createElement("div", {
            className: "osc-question-selector-maxlabel",
            dangerouslySetInnerHTML: {
              __html: data.maxLabel
            }
          }));
          break;

        case 'a-to-b':
          var labelA = data.values && data.values.A && data.values.A.label || 'A';
          var labelB = data.values && data.values.B && data.values.B.label || 'B';
          var questionTextA = data.values && data.values.A && data.values.A.questionText;
          var questionTextB = data.values && data.values.B && data.values.B.questionText;

          if (questionTextA && questionTextB) {
            questionHTML = /*#__PURE__*/React.createElement("div", {
              className: "osc-question-description"
            }, /*#__PURE__*/React.createElement("div", {
              className: "osc-question-description-text",
              dangerouslySetInnerHTML: {
                __html: data.description
              }
            }), /*#__PURE__*/React.createElement("div", {
              className: "osc-question-description-text"
            }, /*#__PURE__*/React.createElement("div", {
              className: "osc-question-description-label"
            }, labelA), /*#__PURE__*/React.createElement("div", {
              className: "osc-question-description-labeled-text"
            }, questionTextA)), /*#__PURE__*/React.createElement("div", {
              className: "osc-question-description-text"
            }, /*#__PURE__*/React.createElement("div", {
              className: "osc-question-description-label"
            }, labelB), /*#__PURE__*/React.createElement("div", {
              className: "osc-question-description-labeled-text"
            }, questionTextB)));
          }

          var questionImageA = data.values && data.values.A && data.values.A.questionImage;
          var questionImageB = data.values && data.values.B && data.values.B.questionImage;

          if (questionImageA && questionImageB) {
            questionHTML = /*#__PURE__*/React.createElement("div", {
              className: "osc-question-description"
            }, /*#__PURE__*/React.createElement("div", {
              className: "osc-question-description-text",
              dangerouslySetInnerHTML: {
                __html: data.description
              }
            }), /*#__PURE__*/React.createElement("div", {
              className: "osc-question-description-image-container osc-question-description-image-container-a"
            }, /*#__PURE__*/React.createElement("div", {
              className: "osc-question-description-label osc-question-description-label-a"
            }, labelA), /*#__PURE__*/React.createElement("div", {
              className: "osc-question-image-container osc-question-image-aspect-".concat(self.config.aspectRatio)
            }, /*#__PURE__*/React.createElement("div", {
              className: "osc-question-image-aspect-container"
            }, /*#__PURE__*/React.createElement("img", {
              className: "osc-question-description-image",
              src: questionImageA.src,
              style: {
                cursor: 'pointer'
              },
              onClick: function onClick() {
                return self.showLightbox(self.questionImageA);
              },
              ref: function ref(el) {
                return self.questionImageA = el;
              }
            })))), /*#__PURE__*/React.createElement("div", {
              className: "osc-question-description-image-container osc-question-description-image-container-b"
            }, /*#__PURE__*/React.createElement("div", {
              className: "osc-question-description-label osc-question-description-label-b"
            }, labelB), /*#__PURE__*/React.createElement("div", {
              className: "osc-question-image-container osc-question-image-aspect-".concat(self.config.aspectRatio)
            }, /*#__PURE__*/React.createElement("div", {
              className: "osc-question-image-aspect-container"
            }, /*#__PURE__*/React.createElement("img", {
              className: "osc-question-description-image",
              src: questionImageB.src,
              style: {
                cursor: 'pointer'
              },
              onClick: function onClick() {
                return self.showLightbox(self.questionImageB);
              },
              ref: function ref(el) {
                return self.questionImageB = el;
              }
            })))));
          }

          selectorHTML = /*#__PURE__*/React.createElement("div", {
            className: "osc-question-selector"
          }, /*#__PURE__*/React.createElement("div", {
            className: "osc-question-selector-label-a"
          }, labelA), /*#__PURE__*/React.createElement("div", {
            className: "osc-question-selector-label-b"
          }, labelB), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].Slider, {
            min: "0",
            max: "100",
            step: "1",
            value: value,
            className: "osc-question-selector-slider",
            config: {},
            touched: isAnswered,
            onChange: function onChange(data) {
              return self.onChangeHandler(data);
            },
            ref: function ref(el) {
              return self.selector = el;
            }
          }), /*#__PURE__*/React.createElement("div", {
            className: "osc-question-selector-minlabel",
            dangerouslySetInnerHTML: {
              __html: data.minLabel
            }
          }), /*#__PURE__*/React.createElement("div", {
            className: "osc-question-selector-maxlabel",
            dangerouslySetInnerHTML: {
              __html: data.maxLabel
            }
          }));
          break;

        case 'enum-radio':
          selectorHTML = /*#__PURE__*/React.createElement("div", {
            className: "osc-question-selector"
          }, data.values && data.values.map(function (entry, i) {
            var key = parseInt(1000000 * Math.random());
            var checked = false;

            if (_typeof(data.value) == 'object') {
              checked = true;
              Object.keys(data.value).forEach(function (key) {
                if (data.value[key] !== entry.value[key]) checked = false;
              });
            } else {
              if (data.value === entry.value) checked = true;
            }

            var value = data.value != 'undefined' ? data.value : _this3.state.value;
            return /*#__PURE__*/React.createElement("div", {
              key: "div-value-".concat(key),
              className: "osc-radio-container"
            }, /*#__PURE__*/React.createElement("div", {
              className: "osc-radio-input".concat(checked ? ' osc-radio-input-checked' : '')
            }, /*#__PURE__*/React.createElement("input", {
              name: "enum-radio-".concat(data.id),
              type: "radio",
              onChange: function onChange() {
                return self.onChangeHandler(entry.value);
              },
              key: "button-value-".concat(key)
            })), /*#__PURE__*/React.createElement("div", {
              className: "osc-radio-text"
            }, entry.text));
          }));
          break;

        case 'enum-buttons':
          selectorHTML = /*#__PURE__*/React.createElement("div", {
            className: "osc-question-selector"
          }, data.values && data.values.map(function (entry, i) {
            return /*#__PURE__*/React.createElement("button", {
              onClick: function onClick() {
                return self.onChangeHandler(entry.value);
              },
              key: "button-value-".concat(entry.value)
            }, entry.text);
          }));
          break;

        default:
          selectorHTML = /*#__PURE__*/React.createElement("div", null, "Type ", data.type, " is (nog) niet geimplementeerd.");
      }

      var errorHTML = null;

      if (isError) {
        errorHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-error-text"
        }, self.state.error);
      }

      return /*#__PURE__*/React.createElement("div", {
        id: self.props.config.divId,
        className: "osc-question osc-question-".concat(data.type).concat(isError ? ' osc-error' : '')
      }, imageHTML, /*#__PURE__*/React.createElement("div", {
        className: "osc-question-content",
        id: self.props.config.divId + '-content'
      }, /*#__PURE__*/React.createElement("h3", {
        className: "osc-question-title"
      }, " ", data.title), questionHTML, selectorHTML, errorHTML));
    }
  }]);

  return OpenStadComponentQuestion;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/choices-guide/css/default.less":
/*!********************************************!*\
  !*** ./src/choices-guide/css/default.less ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/choices-guide/index.jsx":
/*!*************************************!*\
  !*** ./src/choices-guide/index.jsx ***!
  \*************************************/
/*! exports provided: default, ChoicesGuide, ChoicesGuideResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
/* harmony import */ var core_js_es_array_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/es/array/find */ "./node_modules/core-js/es/array/find.js");
/* harmony import */ var core_js_es_array_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_es_array_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var custom_event_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! custom-event-polyfill */ "./node_modules/custom-event-polyfill/polyfill.js");
/* harmony import */ var custom_event_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(custom_event_polyfill__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _css_default_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/default.less */ "./src/choices-guide/css/default.less");
/* harmony import */ var _css_default_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_default_less__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _component_choices_guide_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/choices-guide.jsx */ "./src/choices-guide/component/choices-guide.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _component_choices_guide_jsx__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChoicesGuide", function() { return _component_choices_guide_jsx__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _component_choices_guide_result_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/choices-guide-result.jsx */ "./src/choices-guide/component/choices-guide-result.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChoicesGuideResult", function() { return _component_choices_guide_result_jsx__WEBPACK_IMPORTED_MODULE_7__["default"]; });

// polyfills


 // react


 // import css to make sure it is generated in the result

 // the module


 // render elements

_component_choices_guide_jsx__WEBPACK_IMPORTED_MODULE_6__["default"].renderElement = function renderElement(elem, config) {
  var attributes = elem.attributes;
  react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_component_choices_guide_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attributes: attributes,
    config: config
  }), elem);
};

_component_choices_guide_result_jsx__WEBPACK_IMPORTED_MODULE_7__["default"].renderElement = function renderElement(elem, config) {
  var attributes = elem.attributes;
  react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_component_choices_guide_result_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attributes: attributes,
    config: config
  }), elem);
};



/***/ }),

/***/ "./src/choices-guide/lib/fetch.js":
/*!****************************************!*\
  !*** ./src/choices-guide/lib/fetch.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fetchChoicesGuide; });
/* harmony import */ var _libs_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../libs/index.jsx */ "./src/libs/index.jsx");


function fetchChoicesGuide(_ref) {
  var config = _ref.config;
  var url = "".concat(config.api && config.api.url, "/api/site/").concat(config.siteId, "/choicesguide/").concat(config.choicesGuideId, "?includeChoices=1&includeQuestions=1");
  var headers = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_0__["default"].api.getHeaders();
  return fetch(url, {
    headers: headers
  }).then(function (response) {
    return response.json();
  }).then(function (json) {
    var data = {
      choicesGuideId: json.id,
      images: json.images,
      title: json.title,
      description: json.description,
      choices: json.choices || [],
      questionGroups: json.questiongroups || [],
      status: 'active'
    };
    return data;
  });
}



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

/***/ "./src/lightbox/component/lightbox.jsx":
/*!*********************************************!*\
  !*** ./src/lightbox/component/lightbox.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentLightbox; });
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



var OpenStadComponentLightbox = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentLightbox, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentLightbox);

  function OpenStadComponentLightbox(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentLightbox);

    _this = _super.call(this, props);
    _this.state = {
      images: [],
      startIndex: 0
    };
    _this.recalcSizes = _this.recalcSizes.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(OpenStadComponentLightbox, [{
    key: "componentDidMount",
    value: function componentDidMount(prevProps, prevState) {
      var self = this; // start on event

      document.addEventListener('osc-show-light-box', function (event) {
        self.showLightbox(event.detail);
      }); // move to root

      document.body.appendChild(this.instance);
    }
  }, {
    key: "showLightbox",
    value: function showLightbox(data) {
      var self = this; // eval aspect ratio

      var aspectRatio;

      try {
        aspectRatio = eval(data.aspectRatio.replace && data.aspectRatio.replace('x', '/'));
      } catch (err) {}

      if (typeof aspectRatio != 'number') aspectRatio = 16 / 9;
      self.setState({
        images: data.images,
        startIndex: data.startIndex,
        aspectRatio: aspectRatio
      }, function () {
        self.instance.style.display = 'block';
        self.recalcSizes();
      });
      window.addEventListener('resize', self.recalcSizes);
    }
  }, {
    key: "hideLightbox",
    value: function hideLightbox() {
      this.instance.style.display = 'none';
      window.removeEventListener('resize', self.recalcSizes);
    }
  }, {
    key: "showImage",
    value: function showImage(e, src) {
      e.stopPropagation();
      this.mainImage.src = src;
    }
  }, {
    key: "recalcSizes",
    value: function recalcSizes() {
      var self = this;
      if (!self.mainContainer) return;
      var mainWidth = self.mainContainer.offsetWidth;
      var mainHeight = self.mainContainer.offsetHeight;

      if (mainWidth / mainHeight > self.state.aspectRatio) {
        var height = .8 * mainHeight;
        self.mainImageContainer.style.height = height + 'px';
        self.mainImageContainer.style.width = self.state.aspectRatio * height + 'px';
        self.mainImageContainer.style.top = (mainHeight - height) / 2 + 'px';
        self.mainImageContainer.style.left = (mainWidth - self.state.aspectRatio * height) / 2 + 'px';
      } else {
        var _width = mainWidth;
        self.mainImageContainer.style.width = _width + 'px';
        self.mainImageContainer.style.height = 1 / self.state.aspectRatio * _width + 'px';
        self.mainImageContainer.style.top = (mainHeight - 1 / self.state.aspectRatio * _width) / 2 + 'px';
        self.mainImageContainer.style.left = 0;
      }

      self.mainImage.style.width = self.mainImageContainer.style.width;
      self.mainImage.style.height = self.mainImageContainer.style.height;
      var navImgWidth = self.state.aspectRatio * self.navigationContainer.offsetHeight;
      var width = self.state.images.length * navImgWidth + self.state.images.length * 20;

      if (width > self.navigationContainer.offsetWidth) {
        width = self.navigationContainer.offsetWidth;
        navImgWidth = width / self.state.images.length - 20;
      }

      self.navigationContainer.style.width = width + 'px';
      self.state.images.map(function (image, i) {
        var width = parseInt(navImgWidth);
        self["lighbox-image-container-".concat(i)].style.width = width + 'px';
        self["lighbox-image-container-".concat(i)].style.height = parseInt(1 / self.state.aspectRatio * width) + 'px';
        self["lighbox-image-".concat(i)].style.width = self["lighbox-image-container-".concat(i)].style.width;
        self["lighbox-image-".concat(i)].style.height = self["lighbox-image-container-".concat(i)].style.height;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var self = this;
      return /*#__PURE__*/React.createElement("div", {
        className: "osc-lightbox",
        onClick: function onClick() {
          _this2.hideLightbox();
        },
        ref: function ref(el) {
          return self.instance = el;
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "osc-close-button",
        onClick: function onClick(e) {
          return self.hideLightbox(e);
        }
      }), /*#__PURE__*/React.createElement("div", {
        className: "osc-lightbox-main-container",
        ref: function ref(el) {
          return self.mainContainer = el;
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "osc-image-container",
        ref: function ref(el) {
          return self.mainImageContainer = el;
        }
      }, /*#__PURE__*/React.createElement("img", {
        src: self.state.images[self.state.startIndex] && self.state.images[self.state.startIndex].src,
        ref: function ref(el) {
          return self.mainImage = el;
        }
      }))), /*#__PURE__*/React.createElement("div", {
        className: "osc-lightbox-navigation-container"
      }, /*#__PURE__*/React.createElement("div", {
        className: "osc-lightbox-navigation",
        ref: function ref(el) {
          return self.navigationContainer = el;
        }
      }, self.state.images.map(function (image, i) {
        return /*#__PURE__*/React.createElement("div", {
          className: "osc-image-container",
          style: {
            backgroundImage: "url(".concat(image.src, ")")
          },
          onClick: function onClick(e) {
            return self.showImage(e, image.src);
          },
          key: "lighbox-image-container-".concat(i),
          ref: function ref(el) {
            return self["lighbox-image-container-".concat(i)] = el;
          }
        }, /*#__PURE__*/React.createElement("img", {
          src: image.src,
          ref: function ref(el) {
            return self["lighbox-image-".concat(i)] = el;
          }
        }));
      }))));
    }
  }]);

  return OpenStadComponentLightbox;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/lightbox/css/default.less":
/*!***************************************!*\
  !*** ./src/lightbox/css/default.less ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/lightbox/index.jsx":
/*!********************************!*\
  !*** ./src/lightbox/index.jsx ***!
  \********************************/
/*! exports provided: default, Lightbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
/* harmony import */ var core_js_es_array_find_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/es/array/find-index */ "./node_modules/core-js/es/array/find-index.js");
/* harmony import */ var core_js_es_array_find_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_es_array_find_index__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_default_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/default.less */ "./src/lightbox/css/default.less");
/* harmony import */ var _css_default_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_default_less__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _component_lightbox_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/lightbox.jsx */ "./src/lightbox/component/lightbox.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _component_lightbox_jsx__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lightbox", function() { return _component_lightbox_jsx__WEBPACK_IMPORTED_MODULE_5__["default"]; });

// polyfills

 // react


 // import css to make sure it is generated in the result

 // the module

 // render elements

_component_lightbox_jsx__WEBPACK_IMPORTED_MODULE_5__["default"].renderElement = function renderElement(elem, config) {
  var attributes = elem.attributes;
  react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_component_lightbox_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    attributes: attributes,
    config: config
  }), elem);
};



/***/ }),

/***/ "./src/previous-next-button-block/component/previous-next-button-block.jsx":
/*!*********************************************************************************!*\
  !*** ./src/previous-next-button-block/component/previous-next-button-block.jsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentPreviousNextButtonBlock; });
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



var OpenStadComponentPreviousNextButtonBlock = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentPreviousNextButtonBlock, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentPreviousNextButtonBlock);

  function OpenStadComponentPreviousNextButtonBlock(props) {
    _classCallCheck(this, OpenStadComponentPreviousNextButtonBlock);

    return _super.call(this, props, {
      previousAction: props.previousAction,
      nextAction: props.nextAction,
      previousUrl: props.previousUrl,
      nextUrl: props.nextUrl,
      previousLabel: props.previousLabel || 'Vorige',
      nextLabel: props.nextLabel || 'Volgende'
    });
  }

  _createClass(OpenStadComponentPreviousNextButtonBlock, [{
    key: "render",
    value: function render() {
      var _this = this;

      var self = this;
      var previousButtonHTML;
      var previousAction = this.config.previousAction;
      if (this.config.previousUrl) previousAction = function previousAction() {
        document.location.href = "".concat(_this.config.previousUrl);
      };

      if (previousAction) {
        previousButtonHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-previous-button",
          onClick: function onClick(args) {
            previousAction(args);
          }
        }, this.config.previousLabel);
      }

      var nextButtonHTML;
      var nextAction = this.config.nextAction;
      if (this.config.nextUrl) nextAction = function nextAction() {
        document.location.href = "".concat(_this.config.nextUrl);
      };

      if (nextAction) {
        nextButtonHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-next-button",
          onClick: function onClick(args) {
            nextAction(args);
          }
        }, this.config.nextLabel);
      }

      return /*#__PURE__*/React.createElement("div", {
        className: "osc-previous-next-button-block",
        ref: function ref(el) {
          return self.instance = el;
        }
      }, previousButtonHTML, nextButtonHTML);
    }
  }]);

  return OpenStadComponentPreviousNextButtonBlock;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/previous-next-button-block/css/default.less":
/*!*********************************************************!*\
  !*** ./src/previous-next-button-block/css/default.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/previous-next-button-block/index.jsx":
/*!**************************************************!*\
  !*** ./src/previous-next-button-block/index.jsx ***!
  \**************************************************/
/*! exports provided: default, PreviousNextButtonBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_default_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/default.less */ "./src/previous-next-button-block/css/default.less");
/* harmony import */ var _css_default_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_default_less__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_previous_next_button_block_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/previous-next-button-block.jsx */ "./src/previous-next-button-block/component/previous-next-button-block.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _component_previous_next_button_block_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PreviousNextButtonBlock", function() { return _component_previous_next_button_block_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]; });

// polyfills
 // react


 // import css to make sure it is generated in the result

 // the module

 // render elements

_component_previous_next_button_block_jsx__WEBPACK_IMPORTED_MODULE_4__["default"].renderElement = function renderElement(elem, config) {
  var attributes = elem.attributes;
  react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_component_previous_next_button_block_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
//# sourceMappingURL=choices-guide.js.map
>>>>>>> Add ideas-overview to ideas-on-map, including some refactoring
