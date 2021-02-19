<<<<<<< HEAD
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

/***/ "./node_modules/@fingerprintjs/fingerprintjs/dist/fp.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/@fingerprintjs/fingerprintjs/dist/fp.esm.js ***!
  \******************************************************************/
/*! exports provided: default, componentsToDebugString, getComponents, hashComponents, isChromium, isDesktopSafari, isEdgeHTML, isGecko, isTrident, isWebKit, load, murmurX64Hash128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Promise) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentsToDebugString", function() { return componentsToDebugString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComponents", function() { return getComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hashComponents", function() { return hashComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isChromium", function() { return isChromium; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDesktopSafari", function() { return isDesktopSafari; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEdgeHTML", function() { return isEdgeHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGecko", function() { return isGecko; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTrident", function() { return isTrident; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWebKit", function() { return isWebKit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "murmurX64Hash128", function() { return murmurX64Hash128; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/@fingerprintjs/fingerprintjs/node_modules/tslib/tslib.es6.js");
/**
 * FingerprintJS v3.0.5 - Copyright (c) FingerprintJS, Inc, 2021 (https://fingerprintjs.com)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 *
 * This software contains code from open-source projects:
 * MurmurHash3 by Karan Lyons (https://github.com/karanlyons/murmurHash3.js)
 */



/*
 * Taken from https://github.com/karanlyons/murmurHash3.js/blob/a33d0723127e2e5415056c455f8aed2451ace208/murmurHash3.js
 */
//
// Given two 64bit ints (as an array of two 32bit ints) returns the two
// added together as a 64bit int (as an array of two 32bit ints).
//
function x64Add(m, n) {
    m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff];
    n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff];
    var o = [0, 0, 0, 0];
    o[3] += m[3] + n[3];
    o[2] += o[3] >>> 16;
    o[3] &= 0xffff;
    o[2] += m[2] + n[2];
    o[1] += o[2] >>> 16;
    o[2] &= 0xffff;
    o[1] += m[1] + n[1];
    o[0] += o[1] >>> 16;
    o[1] &= 0xffff;
    o[0] += m[0] + n[0];
    o[0] &= 0xffff;
    return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]];
}
//
// Given two 64bit ints (as an array of two 32bit ints) returns the two
// multiplied together as a 64bit int (as an array of two 32bit ints).
//
function x64Multiply(m, n) {
    m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff];
    n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff];
    var o = [0, 0, 0, 0];
    o[3] += m[3] * n[3];
    o[2] += o[3] >>> 16;
    o[3] &= 0xffff;
    o[2] += m[2] * n[3];
    o[1] += o[2] >>> 16;
    o[2] &= 0xffff;
    o[2] += m[3] * n[2];
    o[1] += o[2] >>> 16;
    o[2] &= 0xffff;
    o[1] += m[1] * n[3];
    o[0] += o[1] >>> 16;
    o[1] &= 0xffff;
    o[1] += m[2] * n[2];
    o[0] += o[1] >>> 16;
    o[1] &= 0xffff;
    o[1] += m[3] * n[1];
    o[0] += o[1] >>> 16;
    o[1] &= 0xffff;
    o[0] += m[0] * n[3] + m[1] * n[2] + m[2] * n[1] + m[3] * n[0];
    o[0] &= 0xffff;
    return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]];
}
//
// Given a 64bit int (as an array of two 32bit ints) and an int
// representing a number of bit positions, returns the 64bit int (as an
// array of two 32bit ints) rotated left by that number of positions.
//
function x64Rotl(m, n) {
    n %= 64;
    if (n === 32) {
        return [m[1], m[0]];
    }
    else if (n < 32) {
        return [(m[0] << n) | (m[1] >>> (32 - n)), (m[1] << n) | (m[0] >>> (32 - n))];
    }
    else {
        n -= 32;
        return [(m[1] << n) | (m[0] >>> (32 - n)), (m[0] << n) | (m[1] >>> (32 - n))];
    }
}
//
// Given a 64bit int (as an array of two 32bit ints) and an int
// representing a number of bit positions, returns the 64bit int (as an
// array of two 32bit ints) shifted left by that number of positions.
//
function x64LeftShift(m, n) {
    n %= 64;
    if (n === 0) {
        return m;
    }
    else if (n < 32) {
        return [(m[0] << n) | (m[1] >>> (32 - n)), m[1] << n];
    }
    else {
        return [m[1] << (n - 32), 0];
    }
}
//
// Given two 64bit ints (as an array of two 32bit ints) returns the two
// xored together as a 64bit int (as an array of two 32bit ints).
//
function x64Xor(m, n) {
    return [m[0] ^ n[0], m[1] ^ n[1]];
}
//
// Given a block, returns murmurHash3's final x64 mix of that block.
// (`[0, h[0] >>> 1]` is a 33 bit unsigned right shift. This is the
// only place where we need to right shift 64bit ints.)
//
function x64Fmix(h) {
    h = x64Xor(h, [0, h[0] >>> 1]);
    h = x64Multiply(h, [0xff51afd7, 0xed558ccd]);
    h = x64Xor(h, [0, h[0] >>> 1]);
    h = x64Multiply(h, [0xc4ceb9fe, 0x1a85ec53]);
    h = x64Xor(h, [0, h[0] >>> 1]);
    return h;
}
//
// Given a string and an optional seed as an int, returns a 128 bit
// hash using the x64 flavor of MurmurHash3, as an unsigned hex.
//
function x64hash128(key, seed) {
    key = key || '';
    seed = seed || 0;
    var remainder = key.length % 16;
    var bytes = key.length - remainder;
    var h1 = [0, seed];
    var h2 = [0, seed];
    var k1 = [0, 0];
    var k2 = [0, 0];
    var c1 = [0x87c37b91, 0x114253d5];
    var c2 = [0x4cf5ad43, 0x2745937f];
    var i;
    for (i = 0; i < bytes; i = i + 16) {
        k1 = [
            (key.charCodeAt(i + 4) & 0xff) |
                ((key.charCodeAt(i + 5) & 0xff) << 8) |
                ((key.charCodeAt(i + 6) & 0xff) << 16) |
                ((key.charCodeAt(i + 7) & 0xff) << 24),
            (key.charCodeAt(i) & 0xff) |
                ((key.charCodeAt(i + 1) & 0xff) << 8) |
                ((key.charCodeAt(i + 2) & 0xff) << 16) |
                ((key.charCodeAt(i + 3) & 0xff) << 24),
        ];
        k2 = [
            (key.charCodeAt(i + 12) & 0xff) |
                ((key.charCodeAt(i + 13) & 0xff) << 8) |
                ((key.charCodeAt(i + 14) & 0xff) << 16) |
                ((key.charCodeAt(i + 15) & 0xff) << 24),
            (key.charCodeAt(i + 8) & 0xff) |
                ((key.charCodeAt(i + 9) & 0xff) << 8) |
                ((key.charCodeAt(i + 10) & 0xff) << 16) |
                ((key.charCodeAt(i + 11) & 0xff) << 24),
        ];
        k1 = x64Multiply(k1, c1);
        k1 = x64Rotl(k1, 31);
        k1 = x64Multiply(k1, c2);
        h1 = x64Xor(h1, k1);
        h1 = x64Rotl(h1, 27);
        h1 = x64Add(h1, h2);
        h1 = x64Add(x64Multiply(h1, [0, 5]), [0, 0x52dce729]);
        k2 = x64Multiply(k2, c2);
        k2 = x64Rotl(k2, 33);
        k2 = x64Multiply(k2, c1);
        h2 = x64Xor(h2, k2);
        h2 = x64Rotl(h2, 31);
        h2 = x64Add(h2, h1);
        h2 = x64Add(x64Multiply(h2, [0, 5]), [0, 0x38495ab5]);
    }
    k1 = [0, 0];
    k2 = [0, 0];
    switch (remainder) {
        case 15:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 14)], 48));
        // fallthrough
        case 14:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 13)], 40));
        // fallthrough
        case 13:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 12)], 32));
        // fallthrough
        case 12:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 11)], 24));
        // fallthrough
        case 11:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 10)], 16));
        // fallthrough
        case 10:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 9)], 8));
        // fallthrough
        case 9:
            k2 = x64Xor(k2, [0, key.charCodeAt(i + 8)]);
            k2 = x64Multiply(k2, c2);
            k2 = x64Rotl(k2, 33);
            k2 = x64Multiply(k2, c1);
            h2 = x64Xor(h2, k2);
        // fallthrough
        case 8:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 7)], 56));
        // fallthrough
        case 7:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 6)], 48));
        // fallthrough
        case 6:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 5)], 40));
        // fallthrough
        case 5:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 4)], 32));
        // fallthrough
        case 4:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 3)], 24));
        // fallthrough
        case 3:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 2)], 16));
        // fallthrough
        case 2:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 1)], 8));
        // fallthrough
        case 1:
            k1 = x64Xor(k1, [0, key.charCodeAt(i)]);
            k1 = x64Multiply(k1, c1);
            k1 = x64Rotl(k1, 31);
            k1 = x64Multiply(k1, c2);
            h1 = x64Xor(h1, k1);
        // fallthrough
    }
    h1 = x64Xor(h1, [0, key.length]);
    h2 = x64Xor(h2, [0, key.length]);
    h1 = x64Add(h1, h2);
    h2 = x64Add(h2, h1);
    h1 = x64Fmix(h1);
    h2 = x64Fmix(h2);
    h1 = x64Add(h1, h2);
    h2 = x64Add(h2, h1);
    return (('00000000' + (h1[0] >>> 0).toString(16)).slice(-8) +
        ('00000000' + (h1[1] >>> 0).toString(16)).slice(-8) +
        ('00000000' + (h2[0] >>> 0).toString(16)).slice(-8) +
        ('00000000' + (h2[1] >>> 0).toString(16)).slice(-8));
}

var version = "3.0.5";

var w = window;
function requestIdleCallbackIfAvailable(fallbackTimeout, deadlineTimeout) {
    if (deadlineTimeout === void 0) { deadlineTimeout = Infinity; }
    return new Promise(function (resolve) {
        if (w.requestIdleCallback) {
            w.requestIdleCallback(function () { return resolve(); }, { timeout: deadlineTimeout });
        }
        else {
            setTimeout(resolve, Math.min(fallbackTimeout, deadlineTimeout));
        }
    });
}

/**
 * Converts an error object to a plain object that can be used with `JSON.stringify`.
 * If you just run `JSON.stringify(error)`, you'll get `'{}'`.
 */
function errorToObject(error) {
    var _a;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ name: error.name, message: error.message, stack: (_a = error.stack) === null || _a === void 0 ? void 0 : _a.split('\n') }, error);
}

/*
 * This file contains functions to work with pure data only (no browser features, DOM, side effects, etc).
 */
/**
 * Does the same as Array.prototype.includes but has better typing
 */
function includes(haystack, needle) {
    for (var i = 0, l = haystack.length; i < l; ++i) {
        if (haystack[i] === needle) {
            return true;
        }
    }
    return false;
}
/**
 * Like `!includes()` but with proper typing
 */
function excludes(haystack, needle) {
    return !includes(haystack, needle);
}
/**
 * Be careful, NaN can return
 */
function toInt(value) {
    return parseInt(value);
}
/**
 * Be careful, NaN can return
 */
function toFloat(value) {
    return parseFloat(value);
}
function replaceNaN(value, replacement) {
    return typeof value === 'number' && isNaN(value) ? replacement : value;
}
function countTruthy(values) {
    return values.reduce(function (sum, value) { return sum + (value ? 1 : 0); }, 0);
}

/*
 * Functions to help with features that vary through browsers
 */
var w$1 = window;
var n = navigator;
var d = document;
/**
 * Checks whether the browser is based on Trident (the Internet Explorer engine) without using user-agent.
 *
 * Warning for package users:
 * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
 */
function isTrident() {
    // The properties are checked to be in IE 10, IE 11 and not to be in other browsers in October 2020
    return (countTruthy([
        'MSCSSMatrix' in w$1,
        'msSetImmediate' in w$1,
        'msIndexedDB' in w$1,
        'msMaxTouchPoints' in n,
        'msPointerEnabled' in n,
    ]) >= 4);
}
/**
 * Checks whether the browser is based on EdgeHTML (the pre-Chromium Edge engine) without using user-agent.
 *
 * Warning for package users:
 * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
 */
function isEdgeHTML() {
    // Based on research in October 2020
    return (countTruthy(['msWriteProfilerMark' in w$1, 'MSStream' in w$1, 'msLaunchUri' in n, 'msSaveBlob' in n]) >= 3 &&
        !isTrident());
}
/**
 * Checks whether the browser is based on Chromium without using user-agent.
 *
 * Warning for package users:
 * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
 */
function isChromium() {
    // Based on research in October 2020. Tested to detect Chromium 42-86.
    return (countTruthy([
        'webkitPersistentStorage' in n,
        'webkitTemporaryStorage' in n,
        n.vendor.indexOf('Google') === 0,
        'webkitResolveLocalFileSystemURL' in w$1,
        'BatteryManager' in w$1,
        'webkitMediaStream' in w$1,
        'webkitSpeechGrammar' in w$1,
    ]) >= 5);
}
/**
 * Checks whether the browser is based on mobile or desktop Safari without using user-agent.
 * All iOS browsers use WebKit (the Safari engine).
 *
 * Warning for package users:
 * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
 */
function isWebKit() {
    // Based on research in September 2020
    return (countTruthy([
        'ApplePayError' in w$1,
        'CSSPrimitiveValue' in w$1,
        'Counter' in w$1,
        n.vendor.indexOf('Apple') === 0,
        'getStorageUpdates' in n,
        'WebKitMediaKeys' in w$1,
    ]) >= 4);
}
/**
 * Checks whether the WebKit browser is a desktop Safari.
 *
 * Warning for package users:
 * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
 */
function isDesktopSafari() {
    return (countTruthy([
        'safari' in w$1,
        !('DeviceMotionEvent' in w$1),
        !('ongestureend' in w$1),
        !('standalone' in n),
    ]) >= 3);
}
/**
 * Checks whether the browser is based on Gecko (Firefox engine) without using user-agent.
 *
 * Warning for package users:
 * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
 */
function isGecko() {
    var _a;
    // Based on research in September 2020
    return (countTruthy([
        'buildID' in n,
        ((_a = d.documentElement) === null || _a === void 0 ? void 0 : _a.style) && 'MozAppearance' in d.documentElement.style,
        'MediaRecorderErrorEvent' in w$1,
        'mozInnerScreenX' in w$1,
        'CSSMozDocumentRule' in w$1,
        'CanvasCaptureMediaStream' in w$1,
    ]) >= 4);
}
/**
 * Checks whether the browser is based on Chromium version ≥86 without using user-agent.
 * It doesn't check that the browser is based on Chromium, there is a separate function for this.
 */
function isChromium86OrNewer() {
    // Checked in Chrome 85 vs Chrome 86 both on desktop and Android
    return (countTruthy([
        !('MediaSettingsRange' in w$1),
        'RTCEncodedAudioFrame' in w$1,
        '' + w$1.Intl === '[object Intl]',
        '' + w$1.Reflect === '[object Reflect]',
    ]) >= 3);
}
/**
 * Checks whether the browser is based on WebKit version ≥606 (Safari ≥12) without using user-agent.
 * It doesn't check that the browser is based on WebKit, there is a separate function for this.
 *
 * @link https://en.wikipedia.org/wiki/Safari_version_history#Release_history Safari-WebKit versions map
 */
function isWebKit606OrNewer() {
    // Checked in Safari 9–14
    return (countTruthy([
        'DOMRectList' in w$1,
        'RTCPeerConnectionIceEvent' in w$1,
        'SVGGeometryElement' in w$1,
        'ontransitioncancel' in w$1,
    ]) >= 3);
}

var w$2 = window;
var d$1 = document;
// Inspired by and based on https://github.com/cozylife/audio-fingerprint
function getAudioFingerprint() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
        var AudioContext, context, oscillator, compressor, buffer, error_1;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    AudioContext = w$2.OfflineAudioContext || w$2.webkitOfflineAudioContext;
                    if (!AudioContext) {
                        return [2 /*return*/, -2 /* NotSupported */];
                    }
                    // In some browsers, audio context always stays suspended unless the context is started in response to a user action
                    // (e.g. a click or a tap). It prevents audio fingerprint from being taken at an arbitrary moment of time.
                    // Such browsers are old and unpopular, so the audio fingerprinting is just skipped in them.
                    // See a similar case explanation at https://stackoverflow.com/questions/46363048/onaudioprocess-not-called-on-ios11#46534088
                    if (doesCurrentBrowserSuspendAudioContext()) {
                        return [2 /*return*/, -1 /* KnownToSuspend */];
                    }
                    context = new AudioContext(1, 44100, 44100);
                    oscillator = context.createOscillator();
                    oscillator.type = 'triangle';
                    setAudioParam(context, oscillator.frequency, 10000);
                    compressor = context.createDynamicsCompressor();
                    setAudioParam(context, compressor.threshold, -50);
                    setAudioParam(context, compressor.knee, 40);
                    setAudioParam(context, compressor.ratio, 12);
                    setAudioParam(context, compressor.reduction, -20);
                    setAudioParam(context, compressor.attack, 0);
                    setAudioParam(context, compressor.release, 0.25);
                    oscillator.connect(compressor);
                    compressor.connect(context.destination);
                    oscillator.start(0);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, renderAudio(context)];
                case 2:
                    buffer = _a.sent();
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _a.sent();
                    if (error_1.name === "timeout" /* Timeout */ || error_1.name === "suspended" /* Suspended */) {
                        return [2 /*return*/, -3 /* Timeout */];
                    }
                    throw error_1;
                case 4:
                    oscillator.disconnect();
                    compressor.disconnect();
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/, getHash(buffer.getChannelData(0))];
            }
        });
    });
}
/**
 * Checks if the current browser is known to always suspend audio context
 */
function doesCurrentBrowserSuspendAudioContext() {
    return isWebKit() && !isDesktopSafari() && !isWebKit606OrNewer();
}
function setAudioParam(context, param, value) {
    var isAudioParam = function (value) {
        return value && typeof value.setValueAtTime === 'function';
    };
    if (isAudioParam(param)) {
        param.setValueAtTime(value, context.currentTime);
    }
}
function renderAudio(context) {
    var resumeTriesMaxCount = 3;
    var resumeRetryDelay = 500;
    var runningTimeout = 1000;
    return new Promise(function (resolve, reject) {
        context.oncomplete = function (event) { return resolve(event.renderedBuffer); };
        var resumeTriesLeft = resumeTriesMaxCount;
        var tryResume = function () {
            context.startRendering();
            switch (context.state) {
                case 'running':
                    setTimeout(function () { return reject(makeInnerError("timeout" /* Timeout */)); }, runningTimeout);
                    break;
                // Sometimes the audio context doesn't start after calling `startRendering` (in addition to the cases where
                // audio context doesn't start at all). A known case is starting an audio context when the browser tab is in
                // background on iPhone. Retries usually help in this case.
                case 'suspended':
                    // The audio context can reject starting until the tab is in foreground. Long fingerprint duration
                    // in background isn't a problem, therefore the retry attempts don't count in background. It can lead to
                    // a situation when a fingerprint takes very long time and finishes successfully. FYI, the audio context
                    // can be suspended when `document.hidden === false` and start running after a retry.
                    if (!d$1.hidden) {
                        resumeTriesLeft--;
                    }
                    if (resumeTriesLeft > 0) {
                        setTimeout(tryResume, resumeRetryDelay);
                    }
                    else {
                        reject(makeInnerError("suspended" /* Suspended */));
                    }
                    break;
            }
        };
        tryResume();
    });
}
function getHash(signal) {
    var hash = 0;
    for (var i = 4500; i < 5000; ++i) {
        hash += Math.abs(signal[i]);
    }
    return hash;
}
function makeInnerError(name) {
    var error = new Error(name);
    error.name = name;
    return error;
}

var d$2 = document;
// We use m or w because these two characters take up the maximum width.
// And we use a LLi so that the same matching fonts can get separated.
var testString = 'mmMwWLliI0O&1';
// We test using 48px font size, we may use any size. I guess larger the better.
var testSize = '48px';
// A font will be compared against all the three default fonts.
// And if it doesn't match all 3 then that font is not available.
var baseFonts = ['monospace', 'sans-serif', 'serif'];
var fontList = [
    // This is android-specific font from "Roboto" family
    'sans-serif-thin',
    'ARNO PRO',
    'Agency FB',
    'Arabic Typesetting',
    'Arial Unicode MS',
    'AvantGarde Bk BT',
    'BankGothic Md BT',
    'Batang',
    'Bitstream Vera Sans Mono',
    'Calibri',
    'Century',
    'Century Gothic',
    'Clarendon',
    'EUROSTILE',
    'Franklin Gothic',
    'Futura Bk BT',
    'Futura Md BT',
    'GOTHAM',
    'Gill Sans',
    'HELV',
    'Haettenschweiler',
    'Helvetica Neue',
    'Humanst521 BT',
    'Leelawadee',
    'Letter Gothic',
    'Levenim MT',
    'Lucida Bright',
    'Lucida Sans',
    'Menlo',
    'MS Mincho',
    'MS Outlook',
    'MS Reference Specialty',
    'MS UI Gothic',
    'MT Extra',
    'MYRIAD PRO',
    'Marlett',
    'Meiryo UI',
    'Microsoft Uighur',
    'Minion Pro',
    'Monotype Corsiva',
    'PMingLiU',
    'Pristina',
    'SCRIPTINA',
    'Segoe UI Light',
    'Serifa',
    'SimHei',
    'Small Fonts',
    'Staccato222 BT',
    'TRAJAN PRO',
    'Univers CE 55 Medium',
    'Vrinda',
    'ZWAdobeF',
];
var fontSpanStyle = {
    // CSS font reset to reset external styles
    fontStyle: 'normal',
    fontWeight: 'normal',
    letterSpacing: 'normal',
    lineBreak: 'auto',
    lineHeight: 'normal',
    textTransform: 'none',
    textAlign: 'left',
    textDecoration: 'none',
    textShadow: 'none',
    whiteSpace: 'normal',
    wordBreak: 'normal',
    wordSpacing: 'normal',
    // We need this css as in some weird browser this span elements shows up for a microSec which creates
    // a bad user experience
    position: 'absolute',
    left: '-9999px',
    fontSize: testSize,
};
// kudos to http://www.lalit.org/lab/javascript-css-font-detect/
function getFonts() {
    var h = d$2.body;
    // div to load spans for the base fonts
    var baseFontsDiv = d$2.createElement('div');
    // div to load spans for the fonts to detect
    var fontsDiv = d$2.createElement('div');
    var defaultWidth = {};
    var defaultHeight = {};
    // creates a span where the fonts will be loaded
    var createSpan = function () {
        var span = d$2.createElement('span');
        span.textContent = testString;
        for (var _i = 0, _a = Object.keys(fontSpanStyle); _i < _a.length; _i++) {
            var prop = _a[_i];
            span.style[prop] = fontSpanStyle[prop];
        }
        return span;
    };
    // creates a span and load the font to detect and a base font for fallback
    var createSpanWithFonts = function (fontToDetect, baseFont) {
        var s = createSpan();
        s.style.fontFamily = "'" + fontToDetect + "'," + baseFont;
        return s;
    };
    // creates spans for the base fonts and adds them to baseFontsDiv
    var initializeBaseFontsSpans = function () {
        return baseFonts.map(function (baseFont) {
            var s = createSpan();
            s.style.fontFamily = baseFont;
            baseFontsDiv.appendChild(s);
            return s;
        });
    };
    // creates spans for the fonts to detect and adds them to fontsDiv
    var initializeFontsSpans = function () {
        // Stores {fontName : [spans for that font]}
        var spans = {};
        var _loop_1 = function (font) {
            spans[font] = baseFonts.map(function (baseFont) {
                var s = createSpanWithFonts(font, baseFont);
                fontsDiv.appendChild(s);
                return s;
            });
        };
        for (var _i = 0, fontList_1 = fontList; _i < fontList_1.length; _i++) {
            var font = fontList_1[_i];
            _loop_1(font);
        }
        return spans;
    };
    // checks if a font is available
    var isFontAvailable = function (fontSpans) {
        return baseFonts.some(function (baseFont, baseFontIndex) {
            return fontSpans[baseFontIndex].offsetWidth !== defaultWidth[baseFont] ||
                fontSpans[baseFontIndex].offsetHeight !== defaultHeight[baseFont];
        });
    };
    // create spans for base fonts
    var baseFontsSpans = initializeBaseFontsSpans();
    // add the spans to the DOM
    h.appendChild(baseFontsDiv);
    // get the default width for the three base fonts
    for (var index = 0, length_1 = baseFonts.length; index < length_1; index++) {
        defaultWidth[baseFonts[index]] = baseFontsSpans[index].offsetWidth; // width for the default font
        defaultHeight[baseFonts[index]] = baseFontsSpans[index].offsetHeight; // height for the default font
    }
    // create spans for fonts to detect
    var fontsSpans = initializeFontsSpans();
    // add all the spans to the DOM
    h.appendChild(fontsDiv);
    // check available fonts
    var available = [];
    for (var i = 0, l = fontList.length; i < l; i++) {
        if (isFontAvailable(fontsSpans[fontList[i]])) {
            available.push(fontList[i]);
        }
    }
    // remove spans from DOM
    h.removeChild(fontsDiv);
    h.removeChild(baseFontsDiv);
    return available;
}

function getPlugins() {
    if (isTrident()) {
        return [];
    }
    if (!navigator.plugins) {
        return undefined;
    }
    var plugins = [];
    // Safari 10 doesn't support iterating navigator.plugins with for...of
    for (var i = 0; i < navigator.plugins.length; ++i) {
        var plugin = navigator.plugins[i];
        if (!plugin) {
            continue;
        }
        var mimeTypes = [];
        for (var j = 0; j < plugin.length; ++j) {
            var mimeType = plugin[j];
            mimeTypes.push({
                type: mimeType.type,
                suffixes: mimeType.suffixes,
            });
        }
        plugins.push({
            name: plugin.name,
            description: plugin.description,
            mimeTypes: mimeTypes,
        });
    }
    return plugins;
}

function makeCanvasContext() {
    var canvas = document.createElement('canvas');
    canvas.width = 240;
    canvas.height = 140;
    canvas.style.display = 'inline';
    return [canvas, canvas.getContext('2d')];
}
function isSupported(canvas, context) {
    // TODO: look into: https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob
    return !!(context && canvas.toDataURL);
}
function save(canvas) {
    // TODO: look into: https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob
    return canvas.toDataURL();
}
// https://www.browserleaks.com/canvas#how-does-it-work
function getCanvasFingerprint() {
    var _a = makeCanvasContext(), canvas = _a[0], context = _a[1];
    if (!isSupported(canvas, context)) {
        return { winding: false, data: '' };
    }
    // detect browser support of canvas winding
    // http://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/
    // https://github.com/Modernizr/Modernizr/blob/master/feature-detects/canvas/winding.js
    context.rect(0, 0, 10, 10);
    context.rect(2, 2, 6, 6);
    var winding = !context.isPointInPath(5, 5, 'evenodd');
    context.textBaseline = 'alphabetic';
    context.fillStyle = '#f60';
    context.fillRect(125, 1, 62, 20);
    context.fillStyle = '#069';
    // https://github.com/Valve/fingerprintjs2/issues/66
    // this can affect FP generation when applying different CSS on different websites
    context.font = '11pt no-real-font-123';
    // the choice of emojis has a gigantic impact on rendering performance (especially in FF)
    // some newer emojis cause it to slow down 50-200 times
    // context.fillText("Cw爨m fjordbank \ud83d\ude03 gly", 2, 15)
    var printedText = 'Cwm fjordbank \ud83d\ude03 gly';
    context.fillText(printedText, 2, 15);
    context.fillStyle = 'rgba(102, 204, 0, 0.2)';
    context.font = '18pt Arial';
    context.fillText(printedText, 4, 45);
    // canvas blending
    // http://blogs.adobe.com/webplatform/2013/01/28/blending-features-in-canvas/
    // http://jsfiddle.net/NDYV8/16/
    context.globalCompositeOperation = 'multiply';
    context.fillStyle = 'rgb(255,0,255)';
    context.beginPath();
    context.arc(50, 50, 50, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();
    context.fillStyle = 'rgb(0,255,255)';
    context.beginPath();
    context.arc(100, 50, 50, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();
    context.fillStyle = 'rgb(255,255,0)';
    context.beginPath();
    context.arc(75, 100, 50, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();
    context.fillStyle = 'rgb(255,0,255)';
    // canvas winding
    // http://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/
    // http://jsfiddle.net/NDYV8/19/
    context.arc(75, 75, 75, 0, Math.PI * 2, true);
    context.arc(75, 75, 25, 0, Math.PI * 2, true);
    context.fill('evenodd');
    return {
        winding: winding,
        data: save(canvas),
    };
}

var n$1 = navigator;
var w$3 = window;
/**
 * This is a crude and primitive touch screen detection. It's not possible to currently reliably detect the availability
 * of a touch screen with a JS, without actually subscribing to a touch event.
 *
 * @see http://www.stucox.com/blog/you-cant-detect-a-touchscreen/
 * @see https://github.com/Modernizr/Modernizr/issues/548
 */
function getTouchSupport() {
    var maxTouchPoints = 0;
    var touchEvent;
    if (n$1.maxTouchPoints !== undefined) {
        maxTouchPoints = toInt(n$1.maxTouchPoints);
    }
    else if (n$1.msMaxTouchPoints !== undefined) {
        maxTouchPoints = n$1.msMaxTouchPoints;
    }
    try {
        document.createEvent('TouchEvent');
        touchEvent = true;
    }
    catch (_) {
        touchEvent = false;
    }
    var touchStart = 'ontouchstart' in w$3;
    return {
        maxTouchPoints: maxTouchPoints,
        touchEvent: touchEvent,
        touchStart: touchStart,
    };
}

function getOsCpu() {
    return navigator.oscpu;
}

var n$2 = navigator;
function getLanguages() {
    var result = [];
    var language = n$2.language || n$2.userLanguage || n$2.browserLanguage || n$2.systemLanguage;
    if (language !== undefined) {
        result.push([language]);
    }
    if (Array.isArray(n$2.languages)) {
        // Starting from Chromium 86, there is only a single value in `navigator.language` in Incognito mode:
        // the value of `navigator.language`. Therefore the value is ignored in this browser.
        if (!(isChromium() && isChromium86OrNewer())) {
            result.push(n$2.languages);
        }
    }
    else if (typeof n$2.languages === 'string') {
        var languages = n$2.languages;
        if (languages) {
            result.push(languages.split(','));
        }
    }
    return result;
}

function getColorDepth() {
    return window.screen.colorDepth;
}

function getDeviceMemory() {
    // `navigator.deviceMemory` is a string containing a number in some unidentified cases
    return replaceNaN(toFloat(navigator.deviceMemory), undefined);
}

var w$4 = window;
function getScreenResolution() {
    // Some browsers return screen resolution as strings, e.g. "1200", instead of a number, e.g. 1200.
    // I suspect it's done by certain plugins that randomize browser properties to prevent fingerprinting.
    var dimensions = [toInt(w$4.screen.width), toInt(w$4.screen.height)];
    dimensions.sort().reverse();
    return dimensions;
}

var w$5 = window;
function getAvailableScreenResolution() {
    if (w$5.screen.availWidth && w$5.screen.availHeight) {
        // Some browsers return screen resolution as strings, e.g. "1200", instead of a number, e.g. 1200.
        // I suspect it's done by certain plugins that randomize browser properties to prevent fingerprinting.
        var dimensions = [toInt(w$5.screen.availWidth), toInt(w$5.screen.availHeight)];
        dimensions.sort().reverse();
        return dimensions;
    }
    return undefined;
}

function getHardwareConcurrency() {
    try {
        // sometimes hardware concurrency is a string
        var concurrency = toInt(navigator.hardwareConcurrency);
        return isNaN(concurrency) ? 1 : concurrency;
    }
    catch (e) {
        return 1;
    }
}

function getTimezoneOffset() {
    var currentYear = new Date().getFullYear();
    // The timezone offset may change over time due to daylight saving time (DST) shifts.
    // The non-DST timezone offset is used as the result timezone offset.
    // Since the DST season differs in the northern and the southern hemispheres,
    // both January and July timezones offsets are considered.
    return Math.max(
    // `getTimezoneOffset` returns a number as a string in some unidentified cases
    toFloat(new Date(currentYear, 0, 1).getTimezoneOffset()), toFloat(new Date(currentYear, 6, 1).getTimezoneOffset()));
}

var w$6 = window;
function getTimezone() {
    var _a;
    if ((_a = w$6.Intl) === null || _a === void 0 ? void 0 : _a.DateTimeFormat) {
        return new w$6.Intl.DateTimeFormat().resolvedOptions().timeZone;
    }
    return undefined;
}

function getSessionStorage() {
    try {
        return !!window.sessionStorage;
    }
    catch (error) {
        /* SecurityError when referencing it means it exists */
        return true;
    }
}

// https://bugzilla.mozilla.org/show_bug.cgi?id=781447
function getLocalStorage() {
    try {
        return !!window.localStorage;
    }
    catch (e) {
        /* SecurityError when referencing it means it exists */
        return true;
    }
}

function getIndexedDB() {
    // IE and Edge don't allow accessing indexedDB in private mode, therefore IE and Edge will have different
    // visitor identifier in normal and private modes.
    if (isTrident() || isEdgeHTML()) {
        return undefined;
    }
    try {
        return !!window.indexedDB;
    }
    catch (e) {
        /* SecurityError when referencing it means it exists */
        return true;
    }
}

function getOpenDatabase() {
    return !!window.openDatabase;
}

function getCpuClass() {
    return navigator.cpuClass;
}

/**
 * It should be improved to handle mock value on iOS:
 * https://github.com/fingerprintjs/fingerprintjs/issues/514#issuecomment-727782842
 */
function getPlatform() {
    return navigator.platform;
}

function getPluginsSupport() {
    return navigator.plugins !== undefined;
}

function getProductSub() {
    return navigator.productSub;
}

function getEmptyEvalLength() {
    return eval.toString().length;
}

function getErrorFF() {
    try {
        throw 'a';
    }
    catch (e) {
        try {
            e.toSource();
            return true;
        }
        catch (e2) {
            return false;
        }
    }
}

function getVendor() {
    return navigator.vendor;
}

function getChrome() {
    return window.chrome !== undefined;
}

var d$3 = document;
/**
 * navigator.cookieEnabled cannot detect custom or nuanced cookie blocking configurations. For example, when blocking
 * cookies via the Advanced Privacy Settings in IE9, it always returns true. And there have been issues in the past with
 * site-specific exceptions. Don't rely on it.
 *
 * @see https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cookies.js Taken from here
 */
function areCookiesEnabled() {
    // Taken from here: https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cookies.js
    // navigator.cookieEnabled cannot detect custom or nuanced cookie blocking configurations. For example, when blocking
    // cookies via the Advanced Privacy Settings in IE9, it always returns true. And there have been issues in the past
    // with site-specific exceptions. Don't rely on it.
    // try..catch because some in situations `document.cookie` is exposed but throws a
    // SecurityError if you try to access it; e.g. documents created from data URIs
    // or in sandboxed iframes (depending on flags/context)
    try {
        // Create cookie
        d$3.cookie = 'cookietest=1; SameSite=Strict;';
        var result = d$3.cookie.indexOf('cookietest=') !== -1;
        // Delete cookie
        d$3.cookie = 'cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT';
        return result;
    }
    catch (e) {
        return false;
    }
}

/**
 * The list of entropy sources used to make visitor identifiers.
 *
 * This value isn't restricted by Semantic Versioning, i.e. it may be changed without bumping minor or major version of
 * this package.
 */
var sources = {
    // Expected errors and default values must be handled inside the functions. Unexpected errors must be thrown.
    osCpu: getOsCpu,
    languages: getLanguages,
    colorDepth: getColorDepth,
    deviceMemory: getDeviceMemory,
    screenResolution: getScreenResolution,
    availableScreenResolution: getAvailableScreenResolution,
    hardwareConcurrency: getHardwareConcurrency,
    timezoneOffset: getTimezoneOffset,
    timezone: getTimezone,
    sessionStorage: getSessionStorage,
    localStorage: getLocalStorage,
    indexedDB: getIndexedDB,
    openDatabase: getOpenDatabase,
    cpuClass: getCpuClass,
    platform: getPlatform,
    plugins: getPlugins,
    canvas: getCanvasFingerprint,
    // adBlock: isAdblockUsed, // https://github.com/fingerprintjs/fingerprintjs/issues/405
    touchSupport: getTouchSupport,
    fonts: getFonts,
    audio: getAudioFingerprint,
    pluginsSupport: getPluginsSupport,
    productSub: getProductSub,
    emptyEvalLength: getEmptyEvalLength,
    errorFF: getErrorFF,
    vendor: getVendor,
    chrome: getChrome,
    cookiesEnabled: areCookiesEnabled,
};
/**
 * Gets a components list from the given list of entropy sources.
 *
 * Warning for package users:
 * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
 */
function getComponents(sources, sourceOptions, excludeSources) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
        var timestamp, components, _i, _a, sourceKey, result, error_1, nextTimestamp;
        var _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
            switch (_c.label) {
                case 0:
                    timestamp = Date.now();
                    components = {};
                    _i = 0, _a = Object.keys(sources);
                    _c.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3 /*break*/, 7];
                    sourceKey = _a[_i];
                    if (!excludes(excludeSources, sourceKey)) {
                        return [3 /*break*/, 6];
                    }
                    result = void 0;
                    _c.label = 2;
                case 2:
                    _c.trys.push([2, 4, , 5]);
                    _b = {};
                    return [4 /*yield*/, sources[sourceKey](sourceOptions)];
                case 3:
                    result = (_b.value = _c.sent(), _b);
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _c.sent();
                    result = error_1 && typeof error_1 === 'object' && 'message' in error_1 ? { error: error_1 } : { error: { message: error_1 } };
                    return [3 /*break*/, 5];
                case 5:
                    nextTimestamp = Date.now();
                    components[sourceKey] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, result), { duration: nextTimestamp - timestamp }); // TypeScript has beaten me here
                    timestamp = nextTimestamp;
                    _c.label = 6;
                case 6:
                    _i++;
                    return [3 /*break*/, 1];
                case 7: return [2 /*return*/, components];
            }
        });
    });
}
/**
 * Collects entropy components from the built-in sources to make the visitor identifier.
 */
function getBuiltinComponents() {
    return getComponents(sources, undefined, []);
}

function componentsToCanonicalString(components) {
    var result = '';
    for (var _i = 0, _a = Object.keys(components); _i < _a.length; _i++) {
        var componentKey = _a[_i];
        var component = components[componentKey];
        var value = component.error ? 'error' : JSON.stringify(component.value);
        result += "" + (result ? '|' : '') + componentKey.replace(/([:|\\])/g, '\\$1') + ":" + value;
    }
    return result;
}
function componentsToDebugString(components) {
    return JSON.stringify(components, function (_key, value) {
        if (value instanceof Error) {
            return errorToObject(value);
        }
        return value;
    }, 2);
}
function hashComponents(components) {
    return x64hash128(componentsToCanonicalString(components));
}
/**
 * Makes a GetResult implementation that calculates the visitor id hash on demand.
 * Designed for optimisation.
 */
function makeLazyGetResult(components) {
    var visitorIdCache;
    // A plain class isn't used because its getters and setters aren't enumerable.
    return {
        components: components,
        get visitorId() {
            if (visitorIdCache === undefined) {
                visitorIdCache = hashComponents(this.components);
            }
            return visitorIdCache;
        },
        set visitorId(visitorId) {
            visitorIdCache = visitorId;
        },
    };
}
/**
 * The class isn't exported from the index file to not expose the constructor.
 * The hiding gives more freedom for future non-breaking updates.
 */
var OpenAgent = /** @class */ (function () {
    function OpenAgent() {
    }
    /**
     * @inheritDoc
     */
    OpenAgent.prototype.get = function (options) {
        if (options === void 0) { options = {}; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var components, result;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getBuiltinComponents()];
                    case 1:
                        components = _a.sent();
                        result = makeLazyGetResult(components);
                        if (options.debug) {
                            // console.log is ok here because it's under a debug clause
                            // eslint-disable-next-line no-console
                            console.log("Copy the text below to get the debug data:\n\n```\nversion: " + version + "\nuserAgent: " + navigator.userAgent + "\ngetOptions: " + JSON.stringify(options, undefined, 2) + "\nvisitorId: " + result.visitorId + "\ncomponents: " + componentsToDebugString(components) + "\n```");
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return OpenAgent;
}());
/**
 * Builds an instance of Agent and waits a delay required for a proper operation.
 */
function load(_a) {
    var _b = (_a === void 0 ? {} : _a).delayFallback, delayFallback = _b === void 0 ? 50 : _b;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
            switch (_c.label) {
                case 0: 
                // A delay is required to ensure consistent entropy components.
                // See https://github.com/fingerprintjs/fingerprintjs/issues/254
                // and https://github.com/fingerprintjs/fingerprintjs/issues/307
                // and https://github.com/fingerprintjs/fingerprintjs/commit/945633e7c5f67ae38eb0fea37349712f0e669b18
                // A proper deadline is unknown. Let it be twice the fallback timeout so that both cases have the same average time.
                return [4 /*yield*/, requestIdleCallbackIfAvailable(delayFallback, delayFallback * 2)];
                case 1:
                    // A delay is required to ensure consistent entropy components.
                    // See https://github.com/fingerprintjs/fingerprintjs/issues/254
                    // and https://github.com/fingerprintjs/fingerprintjs/issues/307
                    // and https://github.com/fingerprintjs/fingerprintjs/commit/945633e7c5f67ae38eb0fea37349712f0e669b18
                    // A proper deadline is unknown. Let it be twice the fallback timeout so that both cases have the same average time.
                    _c.sent();
                    return [2 /*return*/, new OpenAgent()];
            }
        });
    });
}

// The default export is a syntax sugar (`import * as FP from '...' → import FP from '...'`).
// It should contain all the public exported values.
var index = { load: load, hashComponents: hashComponents, componentsToDebugString: componentsToDebugString };
// The exports below are for private usage. They may change unexpectedly. Use them at your own risk.
/** Not documented, out of Semantic Versioning, usage is at your own risk */
var murmurX64Hash128 = x64hash128;

/* harmony default export */ __webpack_exports__["default"] = (index);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! es6-promise-promise */ "./node_modules/es6-promise-promise/index.js")))

/***/ }),

/***/ "./node_modules/@fingerprintjs/fingerprintjs/node_modules/tslib/tslib.es6.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@fingerprintjs/fingerprintjs/node_modules/tslib/tslib.es6.js ***!
  \***********************************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Promise) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArray", function() { return __spreadArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! es6-promise-promise */ "./node_modules/es6-promise-promise/index.js")))

/***/ }),

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

/***/ "./node_modules/core-js/es/array/includes.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/es/array/includes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
var entryUnbind = __webpack_require__(/*! ../../internals/entry-unbind */ "./node_modules/core-js/internals/entry-unbind.js");

module.exports = entryUnbind('Array', 'includes');


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

/***/ "./node_modules/core-js/modules/es.array.includes.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.includes.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $includes = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").includes;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: !USES_TO_LENGTH }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


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



var OpenStadComponentChoice = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentChoice, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentChoice);

  function OpenStadComponentChoice(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentChoice);

    _this = _super.call(this, props, {
      type: 'default',
      withPercentage: false,
      minLabel: null,
      maxLabel: null,
      barColor: {
        "default": '#bed200',
        min: '#ff9100',
        max: '#bed200'
      }
    });
    if (_this.config.barColor.min == null) _this.config.barColor.min = '#ff9100';
    if (_this.config.barColor.max == null) _this.config.barColor.max = '#bed200';
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
    key: "getTitle",
    value: function getTitle(score, nameOnly) {
      return this.props.data && this.props.data.title;
    }
  }, {
    key: "calculateScore",
    value: function calculateScore(answers) {
      var _this2 = this;

      var self = this;
      var choiceAnswers = self.answers;
      var userAnswers = answers || {};
      var noOfAnswers = Object.keys(choiceAnswers).length;
      var results = {};
      Object.keys(choiceAnswers).forEach(function (id) {
        var choiceAnswer = choiceAnswers[id] || {};
        var userAnswer = userAnswers[id] || (_this2.config.startWithAllQuestionsAnswered ? {
          x: 50,
          y: 50,
          z: 50
        } : {});
        var result = results[id] = {};
        ['x', 'y', 'z'].forEach(function (dimension) {
          if (typeof choiceAnswer[dimension] == 'undefined') return;
          if (typeof userAnswer[dimension] == 'undefined') return;
          return result[dimension] = 100 - Math.abs(choiceAnswer[dimension] - userAnswer[dimension]);
        });
      });
      var scores = {};
      Object.keys(choiceAnswers).forEach(function (id) {
        ['x', 'y', 'z'].forEach(function (dimension) {
          scores[dimension] = scores[dimension] || {
            score: [],
            noOfAnswers: 0
          };

          if (typeof results[id][dimension] != 'undefined') {
            scores[dimension].score.push(results[id][dimension]);
          }

          if (choiceAnswers[id] && typeof choiceAnswers[id][dimension] != 'undefined') {
            scores[dimension].noOfAnswers++;
          }
        });
      });
      Object.keys(scores).forEach(function (dimension) {
        scores[dimension] = scores[dimension].score.length ? scores[dimension].score.reduce(function (accumulator, currentValue) {
          return accumulator + currentValue;
        }) / scores[dimension].noOfAnswers : undefined;
      }); // console.log('scores', scores);

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
          var imageHTML = null;
          var images = this.props.data && this.props.data.images;

          if (images && images.length) {
            if (!Array.isArray(images)) images = [images];
            var image = images[0];
            var imageSrc = image;
            if (_typeof(image) == 'object') imageSrc = image.src;
            imageHTML = /*#__PURE__*/React.createElement("img", {
              className: "osc-choice-plane-background-image",
              src: imageSrc,
              style: {
                width: this.props.baseSize / 2,
                height: this.props.baseSize / 2
              }
            });
          }

          return /*#__PURE__*/React.createElement("div", {
            className: "osc-choice-plane",
            style: {
              width: this.props.baseSize / 2,
              height: this.props.baseSize / 2
            }
          }, imageHTML);
          break;

        case 'minus-to-plus-100':
          var valueHTML = null;
          var percentage = parseInt(2 * (score.x - 50));

          if (self.config.withPercentage) {
            valueHTML = /*#__PURE__*/React.createElement("div", {
              className: "osc-percentage"
            }, percentage, "%");
          }

          var maxColorMatch = self.config.barColor.max.match(/#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/i); // todo: rgb(a) colors

          var minColorMatch = self.config.barColor.min.match(/#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/i); // todo: rgb(a) colors

          var r = parseInt(minColorMatch[1], 16) + (parseInt(maxColorMatch[1], 16) - parseInt(minColorMatch[1], 16)) * (score.x / 100);
          var g = parseInt(minColorMatch[2], 16) + (parseInt(maxColorMatch[2], 16) - parseInt(minColorMatch[2], 16)) * (score.x / 100);
          var b = parseInt(minColorMatch[3], 16) + (parseInt(maxColorMatch[3], 16) - parseInt(minColorMatch[3], 16)) * (score.x / 100);
          var backgroundColor = "rgb(".concat(r, ",").concat(g, ",").concat(b, ")");
          var style = {
            backgroundColor: backgroundColor
          };

          if (percentage >= 0) {
            style.width = percentage / 2 + '%';
            style.left = '50%';
            style.right = 'auto';
          }

          ;

          if (percentage < 0) {
            style.width = -percentage / 2 + '%';
            style.left = 'auto';
            style.right = '50%';
          }

          ;
          scoreHTML = /*#__PURE__*/React.createElement("div", {
            className: "osc-choice-default"
          }, /*#__PURE__*/React.createElement("h4", null, self.props.data.title), /*#__PURE__*/React.createElement("div", {
            className: "osc-choice-bar osc-from-center".concat(self.config.withPercentage ? ' osc-with-percentage' : '')
          }, /*#__PURE__*/React.createElement("div", {
            className: "osc-choice-bar-progress",
            style: style
          })), valueHTML);
          break;

        case 'zero-to-100':
        default:
          var percentageHTML = null;

          if (self.config.withPercentage) {
            var _percentage = parseInt(score.x);

            percentageHTML = /*#__PURE__*/React.createElement("div", {
              className: "osc-percentage"
            }, _percentage, "%");
          }

          style = {
            width: (score.x || 0) + '%',
            backgroundColor: self.config.barColor["default"]
          };
          scoreHTML = /*#__PURE__*/React.createElement("div", {
            className: "osc-choice-default"
          }, /*#__PURE__*/React.createElement("h4", null, self.props.data.title), /*#__PURE__*/React.createElement("div", {
            className: "osc-choice-bar".concat(self.config.withPercentage ? ' osc-with-percentage' : '')
          }, /*#__PURE__*/React.createElement("div", {
            className: "osc-choice-bar-mask"
          }), /*#__PURE__*/React.createElement("div", {
            className: "osc-choice-bar-progress",
            style: style
          })), percentageHTML);
      }

      var minmaxLabelsHTML = null;

      if (self.config.minLabel || self.config.maxLabel) {
        minmaxLabelsHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-minmax-labels"
        }, /*#__PURE__*/React.createElement("div", {
          className: "osc-min-label"
        }, self.config.minLabel), /*#__PURE__*/React.createElement("div", {
          className: "osc-max-label"
        }, self.config.maxLabel));
      }

      return /*#__PURE__*/React.createElement("li", {
        className: "osc-choice"
      }, scoreHTML, minmaxLabelsHTML);
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
/* harmony import */ var _fingerprintjs_fingerprintjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fingerprintjs/fingerprintjs */ "./node_modules/@fingerprintjs/fingerprintjs/dist/fp.esm.js");
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _libs_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libs/index.jsx */ "./src/libs/index.jsx");
/* harmony import */ var _choices_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./choices.jsx */ "./src/choices-guide/component/choices.jsx");
/* harmony import */ var _forms_index_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../forms/index.jsx */ "./src/forms/index.jsx");
/* harmony import */ var _previous_next_button_block_index_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../previous-next-button-block/index.jsx */ "./src/previous-next-button-block/index.jsx");
/* harmony import */ var _lib_fetch_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/fetch.js */ "./src/choices-guide/lib/fetch.js");


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
        type: 'none',
        requireLoginSettings: {
          title: "Stemcode",
          description: "Om te kunnen stemmen vul je de stemcode in die je per post hebt ontvangen. Wij controleren je stemcode op geldigheid. Als dat gelukt is kun je stemmen.",
          buttonTextLogin: "Vul je stemcode in",
          buttonTextLoggedIn: "Geldige stemcode",
          buttonTextAlreadySubmitted: "Ongeldige stemcode",
          changeLoginLinkText: "Vul een andere stemcode in",
          loggedInMessage: "Het controleren van je stemcode is gelukt! Klik op onderstaande knop om je keuze in te sturen.",
          alreadySubmittedMessage: "Deze stemcode is al gebruikt om te stemmen. Een stemcode kan maar één keer gebruikt worden."
        }
      },
      choices: {
        title: {
          noPreferenceYet: 'Je hebt nog geen keuze gemaakt',
          preference: 'Jouw voorkeur is {preferredChoice}',
          inBetween: 'Je staat precies tussen meerdere voorkeuren in'
        },
        withPercentage: true,
        minLabel: null,
        maxLabel: null
      }
    });
    _this.config.loginUrl = _this.config.loginUrl || '/oauth/login?returnTo=' + encodeURIComponent(document.location.href);
    var allValues = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].localStorage.get('osc-choices-guide.values') || {};
    var allScores = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].localStorage.get('osc-choices-guide.scores') || {};
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
      Object(_lib_fetch_js__WEBPACK_IMPORTED_MODULE_6__["default"])({
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
      var scores, planePos;

      var _ref = self.choicesElement && self.choicesElement.calculateScores(self.state.answers);

      scores = _ref.scores;
      planePos = _ref.planePos;
      var choicesTitle = '';
      var name;
      var preferredChoiceId = -1;

      if (self.choicesElement) {
        var choiceElement = self.choicesElement.getPreferedChoice({
          planePos: planePos
        });

        if (choiceElement) {
          choicesTitle = self.config.choices.title.preference.replace('\{preferredChoice\}', choiceElement && choiceElement.getTitle(self.state.scores[choiceElement.config.divId]) || choicesTitle);
          preferredChoiceId = choiceElement.divId;
        } else {
          choicesTitle = self.config.choices.title.inBetween;
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
            },
            answers: self.state.answers,
            scores: self.state.scores
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
          showErrors: true,
          scrollTo: true
        });
        if (!isValid) return;
      }

      var requireLogin = !!(self.state.choicesGuideConfig && self.state.choicesGuideConfig.requiredUserRole);

      if (requireLogin && !self.isUserLoggedIn()) {
        var element = document.querySelector('.osc-require-login');
        if (element) element.scrollIntoView({
          behavior: 'smooth'
        });
        return;
      }

      _fingerprintjs_fingerprintjs__WEBPACK_IMPORTED_MODULE_0__["default"].load().then(function (fp) {
        fp.get().then(function (result) {
          var visitorId = result.visitorId;
          var url = "".concat(self.config.api && self.config.api.url, "/api/site/").concat(self.config.siteId, "/choicesguide/").concat(self.config.choicesGuideId, "/result");
          var headers = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].api.getHeaders(self.config);
          var body = {
            result: {
              answers: self.state.answers,
              scores: self.state.scores
            },
            extraData: formValues,
            userFingerprint: visitorId
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
              try {
                messages = JSON.parse(messages);
              } catch (err) {}

              var message = Array.isArray(messages) && messages[0] && messages[0].message || messages[0] || messages.message || messages;
              self.setState({
                submissionError: {
                  message: message.toString(),
                  type: message == 'Je hebt je mening al ingestuurd' ? 'alreadySubmitted' : 'unknown'
                }
              }, function () {
                return console.log(messages);
              });
            });
          });
        });
      });
    }
  }, {
    key: "isUserLoggedIn",
    value: function isUserLoggedIn() {
      return this.config.user && this.config.user.role && this.config.user.role != 'anonymous';
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      var data = self.props && self.props.data || {};
      var choices = self.state.choices;
      var questionGroup;

      if (self.state.questionGroups) {
        questionGroup = self.state.questionGroups.find(function (group) {
          return group.id == self.config.questionGroupId;
        });

        if (questionGroup) {
          questionGroup.values = self.state.values || {};

          if (questionGroup && questionGroup.choices) {
            choices = questionGroup.choices;
          }
        }
      }

      var requireLogin = !!(self.state.choicesGuideConfig && self.state.choicesGuideConfig.requiredUserRole);
      var choicesHTML = null;

      if (choices) {
        choicesHTML = /*#__PURE__*/React.createElement(_choices_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
          config: _objectSpread({}, self.config.choices),
          scores: _objectSpread({}, self.state.scores),
          choices: _toConsumableArray(choices),
          firstAnswerGiven: true,
          ref: function ref(el) {
            self.choicesElement = el;
          },
          key: "choices"
        });
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
      var requireLoginHTML = null;
      var previousNextButtonsHTML = null;

      if (self.config.submission.type == 'form') {
        formHTML = /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_4__["default"].Form, {
          config: self.config.submission.form,
          ref: function ref(el) {
            self.form = el;
          }
        });

        if (requireLogin) {
          if (self.isUserLoggedIn()) {
            var className = 'osc-success';
            var buttonText = self.config.submission.requireLoginSettings.buttonTextLoggedIn;
            var message = self.config.submission.requireLoginSettings.loggedInMessage;

            if (self.state.submissionError) {
              className = 'osc-error';

              if (self.state.submissionError.type == 'alreadySubmitted') {
                buttonText = self.config.submission.requireLoginSettings.buttonTextAlreadySubmitted;
                message = self.config.submission.requireLoginSettings.alreadySubmittedMessage;
              } else {
                message = self.state.submissionError.message;
              }
            }

            requireLoginHTML = /*#__PURE__*/React.createElement("div", {
              className: "osc-require-login osc-logged-in osc-logged-in ".concat(className)
            }, /*#__PURE__*/React.createElement("h2", null, self.config.submission.requireLoginSettings.title), /*#__PURE__*/React.createElement("div", {
              className: "osc-gray-block"
            }, /*#__PURE__*/React.createElement("button", {
              onClick: function onClick(e) {
                return document.location.href = self.config.loginUrl;
              },
              className: "osc-button osc-button-white"
            }, buttonText), /*#__PURE__*/React.createElement("div", {
              className: "change-login-link-text"
            }, /*#__PURE__*/React.createElement("a", {
              href: "javascript: document.location.href = '".concat(self.config.loginUrl, "'")
            }, self.config.submission.requireLoginSettings.changeLoginLinkText)), /*#__PURE__*/React.createElement("div", {
              className: "osc-message"
            }, message)));
          } else {
            requireLoginHTML = /*#__PURE__*/React.createElement("div", {
              className: "osc-require-login osc-not-yet-logged-in"
            }, /*#__PURE__*/React.createElement("h2", null, self.config.submission.requireLoginSettings.title), /*#__PURE__*/React.createElement("div", {
              className: "osc-gray-block"
            }, self.config.submission.requireLoginSettings.description, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
              onClick: function onClick(e) {
                return document.location.href = self.config.loginUrl;
              },
              className: "osc-button osc-button-white"
            }, self.config.submission.requireLoginSettings.buttonTextLogin)));
          }
        }

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
        var nextIsDisabled = self.config.submission.type == 'form' && self.form && !self.form.validate({}) || requireLogin && !self.isUserLoggedIn();

        if (previousLabel || nextLabel) {
          previousNextButtonsHTML = /*#__PURE__*/React.createElement(_previous_next_button_block_index_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
            previousAction: previousAction,
            previousUrl: previousUrl,
            previousLabel: previousLabel,
            nextAction: nextAction,
            nextUrl: nextUrl,
            nextLabel: nextLabel,
            nextIsDisabled: nextIsDisabled
          });
        }
      }

      var errorMessageHTML = null;

      if (self.state.submissionError && !requireLogin) {
        errorMessageHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-message osc-error"
        }, self.state.submissionError.message, ";");
      }

      return /*#__PURE__*/React.createElement("div", {
        className: "osc-choices-guide"
      }, /*#__PURE__*/React.createElement("div", {
        className: "osc-result"
      }, /*#__PURE__*/React.createElement("div", {
        className: "osc-result-content"
      }, /*#__PURE__*/React.createElement("div", {
        className: "osc-choices-container ".concat('osc-type-' + self.config.choices.type)
      }, /*#__PURE__*/React.createElement("h3", {
        dangerouslySetInnerHTML: {
          __html: self.state.title
        }
      }), choicesHTML), moreInfoHTML, formHTML, requireLoginHTML, errorMessageHTML)), previousNextButtonsHTML);
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
/* harmony import */ var _edit_form_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/form.jsx */ "./src/choices-guide/component/edit/form.jsx");
/* harmony import */ var _image_index_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../image/index.jsx */ "./src/image/index.jsx");
/* harmony import */ var _lightbox_index_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lightbox/index.jsx */ "./src/lightbox/index.jsx");
/* harmony import */ var _previous_next_button_block_index_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../previous-next-button-block/index.jsx */ "./src/previous-next-button-block/index.jsx");
/* harmony import */ var _lib_fetch_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/fetch.js */ "./src/choices-guide/lib/fetch.js");


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
      choices: {
        title: {
          noPreferenceYet: 'Je hebt nog geen keuze gemaakt',
          preference: '<b>Jouw voorkeur:</b>{preferredChoice}',
          inBetween: 'Je staat precies tussen meerdere voorkeuren in'
        },
        withPercentage: false,
        minLabel: null,
        maxLabel: null
      }
    });

    var self = _assertThisInitialized(_this); // tmp backwards compatibility


    if (!self.config.aspectRatio && self.config.choices && self.config.choices.type && self.config.choices.type == 'plane') {
      self.config.aspectRatio = '10x7';
    }

    var allValues = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].localStorage.get('osc-choices-guide.values') || {};
    var allScores = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].localStorage.get('osc-choices-guide.scores') || {};
    self.state = {
      title: 'Loading....',
      questionGroups: [],
      choices: [],
      currentQuestionGroupIndex: undefined,
      currentQuestion: undefined,
      status: 'init',
      values: allValues[self.config.choicesGuideId],
      scores: allScores[self.config.choicesGuideId]
    };
    self.liveUpdates = self.liveUpdates.bind(_assertThisInitialized(_this));
    self.hideEditForm = self.hideEditForm.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(OpenStadComponentChoicesGuide, [{
    key: "componentDidMount",
    value: function componentDidMount(prevProps, prevState) {
      var self = this;

      self.liveUpdateListener = function (event) {
        self.liveUpdates(event.detail);
      };

      document.addEventListener('osc-choices-guide-live-updates', self.liveUpdateListener);
      self.fetchData();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('osc-choices-guide-live-updates', self.liveUpdateListener);
    }
  }, {
    key: "fetchData",
    value: function fetchData() {
      self = this;
      var self = this;
      Object(_lib_fetch_js__WEBPACK_IMPORTED_MODULE_9__["default"])({
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
        document.dispatchEvent(event); // TMP xxx

        self.showEditForm();
      });
    }
  }, {
    key: "showEditForm",
    value: function showEditForm() {
      this.setState({
        status: 'edit'
      });
    }
  }, {
    key: "hideEditForm",
    value: function hideEditForm() {
      var allValues = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].localStorage.get('osc-choices-guide.values') || {};
      var allScores = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].localStorage.get('osc-choices-guide.scores') || {};
      this.setState({
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
      self.userPreference && self.userPreference.calculateScores();

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
      self.userPreference && self.userPreference.calculateScores();

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
      document.location.href = self.config.afterUrl;
    }
  }, {
    key: "liveUpdates",
    value: function liveUpdates() {
      var self = this;
      var answers = merge__WEBPACK_IMPORTED_MODULE_0___default()(self.state.values || {}, self.questionGroupElement.getAnswers());
      var scores;

      var _self$choicesElement$ = self.choicesElement.calculateScores(answers);

      scores = _self$choicesElement$.scores;
      self.userPreference && self.userPreference.calculateScores(answers); //xxx

      self.setState({
        scores: scores,
        firstAnswerGiven: Object.keys(answers).length > 0
      }, function () {
        var allValues = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].localStorage.get('osc-choices-guide.values') || {};
        allValues[self.config.choicesGuideId] = answers;
        _libs_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].localStorage.set('osc-choices-guide.values', allValues);
        var allScores = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].localStorage.get('osc-choices-guide.scores') || {};
        allScores[self.config.choicesGuideId] = scores;
        _libs_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].localStorage.set('osc-choices-guide.scores', allScores);
        self.updateChoicesTitle();
      });
    }
  }, {
    key: "updateChoicesTitle",
    value: function updateChoicesTitle() {
      var self = this;
      var choicesTitle = self.config.choices.title.noPreferenceYet;
      var choiceElement = self.choicesElement && self.choicesElement.getPreferedChoice({});

      if (self.state.firstAnswerGiven) {
        if (choiceElement) {
          choicesTitle = self.config.choices.title.preference.replace('\{preferredChoice\}', choiceElement && choiceElement.getTitle(self.state.scores[choiceElement.config.divId]) || choicesTitle);
        } else {
          choicesTitle = self.config.choices.title.inBetween;
        }
      }

      self.setState({
        choicesTitle: choicesTitle
      });
    }
  }, {
    key: "onChoicesClick",
    value: function onChoicesClick(e) {
      if (this.choicesAccordeon.className.match(' osc-closed')) {
        this.choicesAccordeon.className = this.choicesAccordeon.className.replace(' osc-closed', ' osc-open');
      } else {
        this.choicesAccordeon.className = this.choicesAccordeon.className.replace(' osc-open', ' osc-closed');
      }

      var event = new window.CustomEvent('osc-choices-click', {
        detail: {}
      });
      document.dispatchEvent(event);
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      var choices = self.state.choices;
      var questionGroup;

      if (self.state.currentQuestionGroupIndex >= 0) {
        questionGroup = self.state.questionGroups[self.state.currentQuestionGroupIndex];

        if (questionGroup) {
          questionGroup.values = self.state.values || {};

          if (questionGroup && questionGroup.choices) {
            choices = questionGroup.choices;
          }
        }
      }

      var imageHTML = null;
      var images = self.state.images;

      if (images && images.length) {
        if (!Array.isArray(images)) images = [images];
        imageHTML = /*#__PURE__*/React.createElement(_image_index_jsx__WEBPACK_IMPORTED_MODULE_6__["Image"], {
          className: "osc-top-image-spacer",
          width: "100%",
          image: images[0]
        });
      }

      var contentHTML = null;

      if (self.state.status == 'edit') {
        contentHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-choices-guide-content"
        }, /*#__PURE__*/React.createElement(_edit_form_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
          config: self.config,
          onFinished: self.hideEditForm,
          data: _objectSpread({}, self.state)
        }));
      } else {
        var introHTML = null;

        if (self.state.status == 'init') {
          contentHTML = /*#__PURE__*/React.createElement("div", {
            className: "osc-choices-guide-content"
          }, /*#__PURE__*/React.createElement("div", {
            className: "osc-intro"
          }, "Laden..."));
        } else {
          var choicesHTML = /*#__PURE__*/React.createElement("div", {
            id: 'osc-choices-container-' + this.divId,
            className: "osc-choices-container osc-accordeon osc-closed ".concat('osc-type-' + self.config.choices.type),
            ref: function ref(el) {
              self.choicesAccordeon = el;
            }
          }, /*#__PURE__*/React.createElement("div", {
            onClick: function onClick(e) {
              return self.onChoicesClick(e);
            },
            className: "osc-accordeon-button",
            dangerouslySetInnerHTML: {
              __html: self.state.choicesTitle
            }
          }), /*#__PURE__*/React.createElement("div", {
            className: "osc-accordeon-content"
          }, /*#__PURE__*/React.createElement(_choices_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
            config: _objectSpread(_objectSpread({}, self.config.choices), {}, {
              startWithAllQuestionsAnswered: this.config.startWithAllQuestionsAnswered
            }),
            choices: _toConsumableArray(choices),
            scores: _objectSpread({}, self.state.scores),
            firstAnswerGiven: self.state.firstAnswerGiven ? true : false,
            ref: function ref(el) {
              self.choicesElement = el;
            },
            key: "choices"
          })));
          var questionGroupHTML = /*#__PURE__*/React.createElement(_question_group_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
            config: self.config,
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

          if (self.state.currentQuestionGroupIndex > 0 || self.state.currentQuestion > 0) {
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

          if (self.state.status == 'init') {
            nextAction = null;
            nextLabel = null;
          } else {
            nextAction = function nextAction() {
              self.gotoNextQuestion();
            };

            nextLabel = 'Volgende';
          }

          var previousNextButtonsHTML = null;

          if (previousLabel || nextLabel) {
            previousNextButtonsHTML = /*#__PURE__*/React.createElement(_previous_next_button_block_index_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
      withPercentage: false,
      minLabel: null,
      maxLabel: null
    });
    _this.choiceElements = [];
    _this.state = {
      title: 'Je hebt nog geen keuze gemaakt',
      scores: props.scores,
      planePos: {
        x: 50,
        y: 50
      }
    };
    return _this;
  }

  _createClass(OpenStadComponentChoices, [{
    key: "componentDidMount",
    value: function componentDidMount(prevProps, prevState) {
      var self = this;

      self.choicesClickListener = function (event) {
        self.setState({
          random: Math.random()
        }); // force redraw
      };

      document.addEventListener('osc-choices-click', self.choicesClickListener);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('osc-choices-click', self.choicesClickListener);
    }
  }, {
    key: "calculateScores",
    value: function calculateScores(answers) {
      var self = this;
      var scores = {};
      self.choiceElements.forEach(function (choiceElement) {
        scores[choiceElement.config.divId] = choiceElement.calculateScore(answers);
      }); // for plane: calculate position

      var planePos = {
        x: 50,
        y: 50
      };

      if (self.config.type) {
        // the position of the dot is the average of the given answers
        var keys = Object.keys(answers);

        if (keys.length) {
          planePos = {
            x: 0,
            y: 0
          };
          var lengths = {
            x: 0,
            y: 0,
            z: 0
          };
          keys.forEach(function (key) {
            var entry = answers[key];
            ['x', 'y', 'z'].forEach(function (dimension) {
              if (typeof entry[dimension] != 'undefined') {
                planePos[dimension] += parseInt(entry[dimension]) || 0;
                lengths[dimension]++;
              }
            });
          });
          planePos.x = lengths.x ? parseInt(planePos.x / lengths.x) : undefined;
          planePos.y = lengths.y ? parseInt(planePos.y / lengths.y) : undefined;
        }
      }

      self.setState({
        answers: answers,
        scores: scores,
        planePos: planePos
      });
      return {
        answers: answers,
        scores: scores,
        planePos: planePos
      };
    }
  }, {
    key: "getPreferedChoice",
    value: function getPreferedChoice(_ref) {
      var scores = _ref.scores,
          planePos = _ref.planePos;
      var self = this;
      scores = scores || self.state.scores;

      switch (self.config.type) {
        case 'plane':
          planePos = planePos || self.state.planePos; // hardcoded voor nu, maar kan dit niet generiek over alle typen?

          if (planePos.x < 50 && planePos.y < 50) return self.choiceElements[0];
          if (planePos.x > 50 && planePos.y < 50) return self.choiceElements[1];
          if (planePos.x < 50 && planePos.y > 50) return self.choiceElements[2];
          if (planePos.x > 50 && planePos.y > 50) return self.choiceElements[3];
          return null;
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

      switch (this.config.type) {
        case 'plane':
          var baseSize = document.querySelector("#".concat(this.divId)) && document.querySelector("#".concat(this.divId)).offsetWidth - 1 || 180;
          var top = (typeof self.state.planePos.y == 'undefined' ? 50 : self.state.planePos.y) * (baseSize / 100);
          var left = (typeof self.state.planePos.x == 'undefined' ? 50 : self.state.planePos.x) * (baseSize / 100);
          return /*#__PURE__*/React.createElement("div", {
            id: this.divId,
            className: "osc-choices osc-choice-plane-plane",
            ref: function ref(el) {
              self.planePlaneElement = el;
            }
          }, Object.keys(self.props.choices).map(function (key, i) {
            var choice = self.props.choices[key];
            return /*#__PURE__*/React.createElement(_choice_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
              config: _objectSpread({
                divId: "choice-".concat(choice.id)
              }, self.config),
              data: choice,
              score: self.props.scores && self.props.scores["choice-".concat(choice.id)],
              key: "choice-".concat(choice.id),
              baseSize: baseSize,
              ref: function ref(el) {
                self.choiceElements[i] = el;
              }
            });
          }), /*#__PURE__*/React.createElement("div", {
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
          break;

        case 'zero-to-100':
        case 'minus-to-plus-100':
        default:
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
              key: "choice-".concat(choice.id),
              ref: function ref(el) {
                self.choiceElements[i] = el;
              }
            });
          }));
      }
    }
  }]);

  return OpenStadComponentChoices;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/choices-guide/component/edit/choice-form.jsx":
/*!**********************************************************!*\
  !*** ./src/choices-guide/component/edit/choice-form.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChoiceForm; });
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _forms_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../forms/index.jsx */ "./src/forms/index.jsx");


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




var ChoiceForm = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(ChoiceForm, _OpenStadComponent);

  var _super = _createSuper(ChoiceForm);

  function ChoiceForm(props) {
    _classCallCheck(this, ChoiceForm);

    return _super.call(this, props);
  }

  _createClass(ChoiceForm, [{
    key: "render",
    value: function render() {
      var self = this;
      return /*#__PURE__*/React.createElement("div", {
        className: "openstad-form"
      }, /*#__PURE__*/React.createElement("h3", null, "Titel"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].InputWithCounter, {
        config: {
          inputType: 'input',
          minLength: 1,
          maxLength: 1000
        },
        value: self.props.currentTarget.title,
        onChange: function onChange(data) {
          return self.props.onChange({
            title: data.value
          });
        },
        ref: function ref(el) {
          return self.titleField = el;
        }
      }), /*#__PURE__*/React.createElement("h3", null, "Beschrijving"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].InputWithCounter, {
        config: {
          inputType: 'textarea',
          minLength: 1,
          maxLength: 1000
        },
        value: self.props.currentTarget.description,
        onChange: function onChange(data) {
          return self.props.onChange({
            description: data.value
          });
        },
        ref: function ref(el) {
          return self.descriptionField = el;
        }
      }), /*#__PURE__*/React.createElement("h3", null, "Afbeeldingen"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].ImageUpload, {
        key: "i1",
        config: {
          as: 'json',
          imageserver: self.config.imageserver
        },
        value: self.props.currentTarget.images,
        onChange: function onChange(data) {
          return self.props.onChange({
            images: data.value
          });
        },
        ref: function ref(el) {
          return self.imagesField = el;
        }
      }), /*#__PURE__*/React.createElement("h3", null, "Antwoorden"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].Text, {
        config: {},
        value: self.props.currentTarget.answers,
        onChange: function onChange(data) {
          return self.props.onChange({
            answers: data.value
          });
        },
        ref: function ref(el) {
          return self.answersField = el;
        }
      }), /*#__PURE__*/React.createElement("h3", null, "Volgorde nummer"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].Text, {
        config: {},
        value: self.props.currentTarget.seqnr,
        onChange: function onChange(data) {
          return self.props.onChange({
            seqnr: data.value
          });
        },
        ref: function ref(el) {
          return self.seqnrField = el;
        }
      }));
    }
  }]);

  return ChoiceForm;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/choices-guide/component/edit/choices-guide-form.jsx":
/*!*****************************************************************!*\
  !*** ./src/choices-guide/component/edit/choices-guide-form.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChoicesGuideForm; });
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _forms_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../forms/index.jsx */ "./src/forms/index.jsx");


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




var ChoicesGuideForm = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(ChoicesGuideForm, _OpenStadComponent);

  var _super = _createSuper(ChoicesGuideForm);

  function ChoicesGuideForm(props) {
    _classCallCheck(this, ChoicesGuideForm);

    return _super.call(this, props);
  }

  _createClass(ChoicesGuideForm, [{
    key: "render",
    value: function render() {
      var self = this;
      return /*#__PURE__*/React.createElement("div", {
        className: "openstad-form"
      }, /*#__PURE__*/React.createElement("h3", null, "Naam"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].InputWithCounter, {
        key: "x1",
        config: {
          inputType: 'input',
          minLength: 1,
          maxLength: 1000
        },
        value: self.props.currentTarget.title,
        onChange: function onChange(data) {
          return self.props.onChange({
            title: data.value
          });
        },
        ref: function ref(el) {
          self.titleField = el;
        }
      }), /*#__PURE__*/React.createElement("h3", null, "Afbeelding boven de keuzewijzer"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].ImageUpload, {
        key: "i1",
        config: {
          as: 'json',
          imageserver: self.config.imageserver
        },
        value: self.props.currentTarget.images,
        onChange: function onChange(data) {
          return self.props.onChange({
            images: data.value
          });
        },
        ref: function ref(el) {
          return self.imagesField = el;
        }
      }));
    }
  }]);

  return ChoicesGuideForm;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/choices-guide/component/edit/form.jsx":
/*!***************************************************!*\
  !*** ./src/choices-guide/component/edit/form.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentChoicesGuideForm; });
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../libs/index.jsx */ "./src/libs/index.jsx");
/* harmony import */ var _choice_form_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./choice-form.jsx */ "./src/choices-guide/component/edit/choice-form.jsx");
/* harmony import */ var _choices_guide_form_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./choices-guide-form.jsx */ "./src/choices-guide/component/edit/choices-guide-form.jsx");
/* harmony import */ var _question_form_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./question-form.jsx */ "./src/choices-guide/component/edit/question-form.jsx");
/* harmony import */ var _question_group_form_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./question-group-form.jsx */ "./src/choices-guide/component/edit/question-group-form.jsx");
/* harmony import */ var _overview_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./overview.jsx */ "./src/choices-guide/component/edit/overview.jsx");


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
    _this.handleFieldChange = _this.handleFieldChange.bind(_assertThisInitialized(_this));
    _this.setCurrentForm = _this.setCurrentForm.bind(_assertThisInitialized(_this));
    _this.deleteElement = _this.deleteElement.bind(_assertThisInitialized(_this));
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
          currentTarget.images = this.state.images ? this.state.images : '';
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
          currentTarget.dimensions = question.dimensions;
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
        console.log(JSON.stringify(self.state.currentTarget, null, 2));
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
              dimensions: self.state.currentTarget.dimensions,
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
          formfieldsHTML = /*#__PURE__*/React.createElement(_choices_guide_form_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
            config: this.config,
            currentTarget: self.state.currentTarget,
            onChange: self.handleFieldChange,
            ref: function ref(el) {
              self.formfields = el;
            }
          });
          overviewHTML = /*#__PURE__*/React.createElement(_overview_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
            questionGroups: self.state.questionGroups,
            setCurrentForm: self.setCurrentForm,
            deleteElement: self.deleteElement,
            ref: function ref(el) {
              self.formfields = el;
            }
          });
          backButtonHTML = /*#__PURE__*/React.createElement("button", {
            onClick: function onClick() {
              if (self.onFinished) self.onFinished();
            }
          }, "Terug");
          break;

        case 'choice':
          title = 'Bewerk Keuze';
          formfieldsHTML = /*#__PURE__*/React.createElement(_choice_form_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
            config: this.config,
            currentTarget: self.state.currentTarget,
            onChange: self.handleFieldChange,
            ref: function ref(el) {
              self.formfields = el;
            }
          });
          break;

        case 'question-group':
          title = 'Bewerk Vragengroep';
          formfieldsHTML = /*#__PURE__*/React.createElement(_question_group_form_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
            config: this.config,
            currentTarget: self.state.currentTarget,
            onChange: self.handleFieldChange,
            ref: function ref(el) {
              self.formfields = el;
            }
          });
          break;

        case 'question':
          title = "Bewerk Vraag ".concat(self.state.currentTarget.questionId);
          formfieldsHTML = /*#__PURE__*/React.createElement(_question_form_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
            config: this.config,
            currentTarget: self.state.currentTarget,
            onChange: self.handleFieldChange,
            ref: function ref(el) {
              self.formfields = el;
            }
          });
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
      }, /*#__PURE__*/React.createElement("h2", null, title), formfieldsHTML, overviewHTML, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), backButtonHTML, submitButtonHTML);
    }
  }]);

  return OpenStadComponentChoicesGuideForm;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/choices-guide/component/edit/overview.jsx":
/*!*******************************************************!*\
  !*** ./src/choices-guide/component/edit/overview.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChoiceForm; });
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../component/index.jsx */ "./src/component/index.jsx");


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



var ChoiceForm = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(ChoiceForm, _OpenStadComponent);

  var _super = _createSuper(ChoiceForm);

  function ChoiceForm(props) {
    _classCallCheck(this, ChoiceForm);

    return _super.call(this, props);
  }

  _createClass(ChoiceForm, [{
    key: "render",
    value: function render() {
      var self = this;
      return /*#__PURE__*/React.createElement("div", {
        className: "osc-overview"
      }, /*#__PURE__*/React.createElement("h2", null, "Vraaggroepen"), Object.keys(self.props.questionGroups).map(function (key, i) {
        var questionGroup = self.props.questionGroups[key];
        var questionsHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-overview-questions"
        }, /*#__PURE__*/React.createElement("div", {
          className: "osc-overview-line"
        }, /*#__PURE__*/React.createElement("h4", null, "Vragen")), Object.keys(questionGroup.questions).map(function (key, i) {
          var question = questionGroup.questions[key];
          return /*#__PURE__*/React.createElement("div", {
            className: "osc-overview-line",
            key: "question-".concat(question.id)
          }, /*#__PURE__*/React.createElement("div", {
            className: "osc-overview-line-content"
          }, question.title), /*#__PURE__*/React.createElement("div", {
            className: "osc-overview-line-buttons"
          }, /*#__PURE__*/React.createElement("a", {
            className: "osc-edit-button",
            onClick: function onClick(event) {
              return self.props.setCurrentForm({
                what: 'question',
                questionGroupId: questionGroup.id,
                questionId: question.id
              });
            }
          }), /*#__PURE__*/React.createElement("a", {
            className: "osc-delete-button",
            onClick: function onClick(event) {
              return self.props.deleteElement({
                what: 'question',
                questionGroupId: questionGroup.id,
                questionId: question.id,
                title: question.title
              });
            }
          })));
        }), /*#__PURE__*/React.createElement("div", {
          className: "osc-overview-line"
        }, /*#__PURE__*/React.createElement("a", {
          onClick: function onClick(event) {
            return self.props.setCurrentForm({
              what: 'question',
              questionGroupId: questionGroup.id
            });
          }
        }, "Nieuwe vraag")));
        var choicesHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-overview-choices"
        }, /*#__PURE__*/React.createElement("h4", null, "Keuze opties"), Object.keys(questionGroup.choices).map(function (key, i) {
          var choice = questionGroup.choices[key];
          return /*#__PURE__*/React.createElement("div", {
            className: "osc-overview-line",
            key: "choice-".concat(choice.id)
          }, /*#__PURE__*/React.createElement("div", {
            className: "osc-overview-line-content"
          }, choice.title), /*#__PURE__*/React.createElement("div", {
            className: "osc-overview-line-buttons"
          }, /*#__PURE__*/React.createElement("a", {
            className: "osc-edit-button",
            onClick: function onClick(event) {
              return self.props.setCurrentForm({
                what: 'choice',
                questionGroupId: questionGroup.id,
                choiceId: choice.id
              });
            }
          }), /*#__PURE__*/React.createElement("a", {
            className: "osc-delete-button",
            onClick: function onClick(event) {
              return self.props.deleteElement({
                what: 'choice',
                questionGroupId: questionGroup.id,
                choiceId: choice.id,
                title: choice.title
              });
            }
          })));
        }), /*#__PURE__*/React.createElement("div", {
          className: "osc-overview-line",
          key: "choice-new"
        }, /*#__PURE__*/React.createElement("a", {
          onClick: function onClick(event) {
            return self.props.setCurrentForm({
              what: 'choice',
              questionGroupId: questionGroup.id
            });
          }
        }, "Nieuwe keuze optie")));
        var deleteButton = /*#__PURE__*/React.createElement("div", {
          className: "osc-no-button"
        });

        if (Object.keys(questionGroup.choices).length == 0 && Object.keys(questionGroup.questions).length == 0) {
          deleteButton = /*#__PURE__*/React.createElement("a", {
            className: "osc-delete-button",
            onClick: function onClick(event) {
              return self.props.deleteElement({
                what: 'question-group',
                questionGroupId: questionGroup.id,
                title: questionGroup.title
              });
            }
          });
        }

        return /*#__PURE__*/React.createElement("div", {
          className: "osc-overview-question-group",
          key: "questiongroup-".concat(questionGroup.id)
        }, /*#__PURE__*/React.createElement("div", {
          className: "osc-overview-line"
        }, /*#__PURE__*/React.createElement("div", {
          className: "osc-overview-line-content"
        }, /*#__PURE__*/React.createElement("h3", null, questionGroup.title)), /*#__PURE__*/React.createElement("div", {
          className: "osc-overview-line-buttons"
        }, /*#__PURE__*/React.createElement("a", {
          className: "osc-edit-button",
          onClick: function onClick(event) {
            return self.props.setCurrentForm({
              what: 'question-group',
              questionGroupId: questionGroup.id
            });
          }
        }), deleteButton)), questionsHTML, choicesHTML);
      }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("a", {
        href: "#",
        onClick: function onClick(event) {
          return self.props.setCurrentForm({
            what: 'question-group'
          });
        }
      }, "Nieuwe groep"));
    }
  }]);

  return ChoiceForm;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/choices-guide/component/edit/question-form.jsx":
/*!************************************************************!*\
  !*** ./src/choices-guide/component/edit/question-form.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QuestionForm; });
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _forms_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../forms/index.jsx */ "./src/forms/index.jsx");


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




var QuestionForm = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(QuestionForm, _OpenStadComponent);

  var _super = _createSuper(QuestionForm);

  function QuestionForm(props) {
    _classCallCheck(this, QuestionForm);

    return _super.call(this, props);
  }

  _createClass(QuestionForm, [{
    key: "render",
    value: function render() {
      var self = this;
      return /*#__PURE__*/React.createElement("div", {
        className: "openstad-form"
      }, /*#__PURE__*/React.createElement("h3", null, "Titel"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].InputWithCounter, {
        config: {
          inputType: 'input',
          minLength: 1,
          maxLength: 1000
        },
        value: self.props.currentTarget.title,
        onChange: function onChange(data) {
          return self.props.onChange({
            title: data.value
          });
        },
        ref: function ref(el) {
          return self.titleField = el;
        }
      }), /*#__PURE__*/React.createElement("h3", null, "Beschrijving"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].InputWithCounter, {
        config: {
          inputType: 'textarea',
          minLength: 1,
          maxLength: 1000
        },
        value: self.props.currentTarget.description,
        onChange: function onChange(data) {
          return self.props.onChange({
            description: data.value
          });
        },
        ref: function ref(el) {
          return self.descriptionField = el;
        }
      }), /*#__PURE__*/React.createElement("h3", null, "Afbeeldingen"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].ImageUpload, {
        key: "i1",
        config: {
          as: 'json',
          imageserver: self.config.imageserver
        },
        value: self.props.currentTarget.images,
        onChange: function onChange(data) {
          return self.props.onChange({
            images: data.value
          });
        },
        ref: function ref(el) {
          return self.imagesField = el;
        }
      }), /*#__PURE__*/React.createElement("h3", null, "Label minimale waarde"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].InputWithCounter, {
        config: {
          inputType: 'input',
          minLength: 1,
          maxLength: 1000
        },
        value: self.props.currentTarget.minLabel,
        onChange: function onChange(data) {
          return self.props.onChange({
            minLabel: data.value
          });
        },
        ref: function ref(el) {
          return self.minLabelField = el;
        }
      }), /*#__PURE__*/React.createElement("h3", null, "Label maximale waarde"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].InputWithCounter, {
        config: {
          inputType: 'input',
          minLength: 1,
          maxLength: 1000
        },
        value: self.props.currentTarget.maxLabel,
        onChange: function onChange(data) {
          return self.props.onChange({
            maxLabel: data.value
          });
        },
        ref: function ref(el) {
          return self.maxLabelField = el;
        }
      }), /*#__PURE__*/React.createElement("h3", null, "Type"), /*#__PURE__*/React.createElement("select", {
        key: "dezemoetnogweg".concat(self.props.currentTarget.questionGroupId),
        value: self.props.currentTarget.type,
        onChange: function onChange() {
          return self.props.onChange({
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
      }, "multiple choice - radio")), /*#__PURE__*/React.createElement("h3", null, "Dimensions"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].Text, {
        config: {},
        value: self.props.currentTarget.dimensions,
        onChange: function onChange(data) {
          return self.props.onChange({
            dimensions: data.value
          });
        },
        ref: function ref(el) {
          return self.dimensionsField = el;
        }
      }), /*#__PURE__*/React.createElement("h3", null, "Waarden"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].Textarea, {
        config: {},
        value: self.props.currentTarget.values,
        onChange: function onChange(data) {
          return self.props.onChange({
            values: data.value
          });
        },
        ref: function ref(el) {
          return self.valuesField = el;
        }
      }), /*#__PURE__*/React.createElement("h3", null, "Volgorde nummer"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].Text, {
        config: {},
        value: self.props.currentTarget.seqnr,
        onChange: function onChange(data) {
          return self.props.onChange({
            seqnr: data.value
          });
        },
        ref: function ref(el) {
          return self.seqnrField = el;
        }
      }));
    }
  }]);

  return QuestionForm;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/choices-guide/component/edit/question-group-form.jsx":
/*!******************************************************************!*\
  !*** ./src/choices-guide/component/edit/question-group-form.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QuestionGroupForm; });
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _forms_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../forms/index.jsx */ "./src/forms/index.jsx");


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




var QuestionGroupForm = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(QuestionGroupForm, _OpenStadComponent);

  var _super = _createSuper(QuestionGroupForm);

  function QuestionGroupForm(props) {
    _classCallCheck(this, QuestionGroupForm);

    return _super.call(this, props);
  }

  _createClass(QuestionGroupForm, [{
    key: "render",
    value: function render() {
      var self = this;
      return /*#__PURE__*/React.createElement("div", {
        className: "openstad-form"
      }, /*#__PURE__*/React.createElement("h3", null, "Titel"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].InputWithCounter, {
        config: {
          inputType: 'input',
          minLength: 1,
          maxLength: 1000
        },
        value: self.props.currentTarget.title,
        onChange: function onChange(data) {
          return self.props.onChange({
            title: data.value
          });
        },
        ref: function ref(el) {
          return self.titleField = el;
        }
      }), /*#__PURE__*/React.createElement("h3", null, "Beschrijving"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].InputWithCounter, {
        config: {
          inputType: 'textarea',
          minLength: 1,
          maxLength: 1000
        },
        value: self.props.currentTarget.description,
        onChange: function onChange(data) {
          return self.props.onChange({
            description: data.value
          });
        },
        ref: function ref(el) {
          return self.descriptionField = el;
        }
      }), /*#__PURE__*/React.createElement("h3", null, "Volgorde nummer"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].Text, {
        config: {},
        value: self.props.currentTarget.seqnr,
        onChange: function onChange(data) {
          return self.props.onChange({
            seqnr: data.value
          });
        },
        ref: function ref(el) {
          return self.seqnrField = el;
        }
      }));
    }
  }]);

  return QuestionGroupForm;
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



 // TPODO: remove answerDimensions form the API and DB

var OpenStadComponentQuestionGroup = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentQuestionGroup, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentQuestionGroup);

  function OpenStadComponentQuestionGroup(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentQuestionGroup);

    _this = _super.call(this, props);
    _this.noOfQuestionsToShow = _this.config.noOfQuestionsToShow || 1;
    _this.questionElements = [];
    _this.state = {
      currentQuestion: 0,
      values: {}
    };
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
          config: _objectSpread(_objectSpread({}, self.config), {}, {
            divId: "osc-question-".concat(question.id)
          }),
          data: _objectSpread(_objectSpread({}, question), {}, {
            value: values[question.id]
          }),
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
/* harmony import */ var _image_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../image/index.jsx */ "./src/image/index.jsx");
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





var OpenStadComponentQuestion = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentQuestion, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentQuestion);

  function OpenStadComponentQuestion(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentQuestion);

    _this = _super.call(this, props); // defaults

    _this.config.aspectRatio = _this.config.aspectRatio || '16x9';
    _this.questionId = props.data.id;
    _this.state = {
      value: 50,
      isAnswered: false
    };
    _this.onChangeHandler = _this.onChangeHandler.bind(_assertThisInitialized(_this));
    _this.showLightbox = _this.showLightbox.bind(_assertThisInitialized(_this));
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

      var data = this.props.data || {};
      var values = data.values || {};
      var dimensions = data.dimensions;

      try {
        dimensions = JSON.parse(dimensions);
      } catch (err) {}

      dimensions = dimensions || ['x']; // get a number between 0 and 100

      var result;

      if (typeof this.state.value == 'number' || typeof this.state.value == 'string') {
        result = {};
        if (dimensions.includes('x')) result.x = this.state.value;
        if (dimensions.includes('y')) result.y = this.state.value;
        if (dimensions.includes('z')) result.z = this.state.value;
      } else {
        result = {};
        if (dimensions.includes('x')) result.x = this.state.value.x;
        if (dimensions.includes('y')) result.y = this.state.value.y;
        if (dimensions.includes('z')) result.z = this.state.value.z;
      } // console.log('answer', data.title, result);


      return result;
    }
  }, {
    key: "liveUpdates",
    value: function liveUpdates() {
      var event = new window.CustomEvent('osc-choices-guide-live-updates');
      document.dispatchEvent(event);
    }
  }, {
    key: "showLightbox",
    value: function showLightbox(startWith) {
      var data = this.props.data || {};
      var images = [data.values && data.values.A && data.values.A.questionImage || '', data.values && data.values.B && data.values.B.questionImage || ''];
      var startIndex = images.findIndex(function (img) {
        return img == startWith;
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

      if (images && images.length) {
        if (!Array.isArray(images)) images = [images];
        var image = images[0];
        imageHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-question-image-container"
        }, /*#__PURE__*/React.createElement(_image_index_jsx__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          config: {
            aspectRatio: self.config.aspectRatio
          },
          image: image
        }));
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
          }, /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].Slider, {
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
          var questionAHTML = null,
              questionBHTML = null;

          if (questionTextA && questionTextB) {
            questionAHTML = /*#__PURE__*/React.createElement("div", {
              className: "osc-question-description-text"
            }, /*#__PURE__*/React.createElement("div", {
              className: "osc-question-description-label"
            }, labelA), /*#__PURE__*/React.createElement("div", {
              className: "osc-question-description-labeled-text"
            }, questionTextA));
            questionBHTML = /*#__PURE__*/React.createElement("div", {
              className: "osc-question-description-text"
            }, /*#__PURE__*/React.createElement("div", {
              className: "osc-question-description-label"
            }, labelB), /*#__PURE__*/React.createElement("div", {
              className: "osc-question-description-labeled-text"
            }, questionTextB));
            questionHTML = /*#__PURE__*/React.createElement("div", {
              className: "osc-question-description"
            }, /*#__PURE__*/React.createElement("div", {
              className: "osc-question-description-text",
              dangerouslySetInnerHTML: {
                __html: data.description
              }
            }), questionAHTML, questionBHTML);
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
            }, /*#__PURE__*/React.createElement(_image_index_jsx__WEBPACK_IMPORTED_MODULE_1__["Image"], {
              config: {
                aspectRatio: self.config.aspectRatio
              },
              image: questionImageA,
              onClick: function onClick() {
                return self.showLightbox(questionImageA);
              }
            }))), /*#__PURE__*/React.createElement("div", {
              className: "osc-question-description-image-container osc-question-description-image-container-b"
            }, /*#__PURE__*/React.createElement("div", {
              className: "osc-question-description-label osc-question-description-label-b"
            }, labelB), /*#__PURE__*/React.createElement("div", {
              className: "osc-question-image-container osc-question-image-aspect-".concat(self.config.aspectRatio)
            }, /*#__PURE__*/React.createElement(_image_index_jsx__WEBPACK_IMPORTED_MODULE_1__["Image"], {
              config: {
                aspectRatio: self.config.aspectRatio
              },
              image: questionImageB,
              onClick: function onClick() {
                return self.showLightbox(questionImageB);
              }
            }))), /*#__PURE__*/React.createElement("div", {
              style: {
                clear: 'both',
                height: 15
              }
            }), questionAHTML, questionBHTML);
          }

          selectorHTML = /*#__PURE__*/React.createElement("div", {
            className: "osc-question-selector"
          }, /*#__PURE__*/React.createElement("div", {
            className: "osc-question-selector-label-a"
          }, labelA), /*#__PURE__*/React.createElement("div", {
            className: "osc-question-selector-label-b"
          }, labelB), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].Slider, {
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
              key: "button-value-".concat(i)
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
      choicesGuideConfig: json.config,
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
/* harmony import */ var core_js_es_array_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/es/array/includes */ "./node_modules/core-js/es/array/includes.js");
/* harmony import */ var core_js_es_array_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_es_array_includes__WEBPACK_IMPORTED_MODULE_2__);
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
    propsConfig = removeUndefAndNull(propsConfig); // remove undefined and null

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



function removeUndefAndNull(obj) {
  if (_typeof(obj) != 'object') return obj;
  Object.keys(obj).forEach(function (key) {
    if (typeof obj[key] == 'undefined' || obj[key] == null) delete obj[key];
    if (_typeof(obj[key]) == 'object') obj[key] = removeUndefAndNull(obj[key]);
  });
  return obj;
}

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
      var showErrors = _ref.showErrors,
          scrollTo = _ref.scrollTo;
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
      if (scrollTo && firstInvalid && firstInvalid.instance && firstInvalid.instance.scrollIntoView) firstInvalid.instance.scrollIntoView({
        behavior: 'smooth'
      });
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
        process: '/image',
        fetch: '/image'
      }
    });
    console.log(_this.config);
    console.log(_this.props.config);
    var uploadedFiles = [];
    var value = props.value || [];
    if (!Array.isArray(value)) value = [value];
    value.forEach(function (image) {
      var src = _typeof(image) == 'object' ? image.src : image;
      uploadedFiles.push({
        source: {
          url: src
        },
        options: {
          type: 'local',
          file: {
            name: src
          },
          metadata: {
            poster: src
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
        var asJson = self.config.as && self.config.as == 'json';
        images.forEach(function (image) {
          try {
            var serverId = typeof image.serverId == 'string' ? JSON.parse(image.serverId) : image.serverId;
            self.state.value.push(asJson ? {
              "src": serverId.url
            } : serverId.url);
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

/***/ "./src/image/component/idea-image.jsx":
/*!********************************************!*\
  !*** ./src/image/component/idea-image.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentIdeaImage; });
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _image_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image.jsx */ "./src/image/component/image.jsx");
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

var OpenStadComponentIdeaImage = /*#__PURE__*/function (_OpenStadComponentIma) {
  _inherits(OpenStadComponentIdeaImage, _OpenStadComponentIma);

  var _super = _createSuper(OpenStadComponentIdeaImage);

  function OpenStadComponentIdeaImage() {
    _classCallCheck(this, OpenStadComponentIdeaImage);

    return _super.apply(this, arguments);
  }

  _createClass(OpenStadComponentIdeaImage, [{
    key: "getImagesFromProps",
    value: function getImagesFromProps() {
      var idea = this.props.idea;
      if (!idea) return ['', ['']];
      var images = idea.extraData && idea.extraData.images || [];
      var image = idea.posterImage && idea.posterImage.key || idea.extraData && idea.extraData.images && idea.extraData.images[this.state.currentImageIndex];
      return [image, images];
    }
  }]);

  return OpenStadComponentIdeaImage;
}(_image_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),

/***/ "./src/image/component/image.jsx":
/*!***************************************!*\
  !*** ./src/image/component/image.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentImage; });
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

var OpenStadComponentImage = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentImage, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentImage);

  function OpenStadComponentImage(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentImage);

    _this = _super.call(this, props); // config

    var defaultConfig = {
      aspectRatio: '16x9',
      allowMultipleImages: false
    };
    _this.config = merge__WEBPACK_IMPORTED_MODULE_0___default.a.recursive(defaultConfig, _this.config, _this.props.config || {});
    _this.state = {
      currentImageIndex: 0,
      width: 0
    };
    return _this;
  }

  _createClass(OpenStadComponentImage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var elem = document.querySelector("#".concat(this.divId)).parentNode;
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
    key: "getImagesFromProps",
    value: function getImagesFromProps() {
      var images = this.props.images || [];
      var image = this.props.image || images[this.state.currentImageIndex];
      return [this.props.image, images];
    }
  }, {
    key: "getImageSrc",
    value: function getImageSrc(image) {
      var imageSrc = image;
      if (_typeof(image) == 'object' && image.src) imageSrc = image.src;
      return imageSrc;
    }
  }, {
    key: "getAspectRatioFactor",
    value: function getAspectRatioFactor() {
      if (this.props.width && this.props.height) return this.props.width / this.props.height;
      var match = this.config.aspectRatio.match(/(\d+)x(\d+)/);
      return match ? match[1] / match[2] : 16 / 9;
    }
  }, {
    key: "getWidthHeight",
    value: function getWidthHeight() {
      var width = this.props.width || this.state.width;
      var height = this.props.height || width * (1 / this.getAspectRatioFactor()) || undefined;
      return [width, height];
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      var images, image;

      var _self$getImagesFromPr = self.getImagesFromProps();

      var _self$getImagesFromPr2 = _slicedToArray(_self$getImagesFromPr, 2);

      image = _self$getImagesFromPr2[0];
      images = _self$getImagesFromPr2[1];
      var width, height;

      var _self$getWidthHeight = self.getWidthHeight();

      var _self$getWidthHeight2 = _slicedToArray(_self$getWidthHeight, 2);

      width = _self$getWidthHeight2[0];
      height = _self$getWidthHeight2[1];

      if (self.config.allowMultipleImages && images.length > 1) {
        // multiple
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          id: self.divId,
          className: "osc-multiple-images ".concat(self.props.className || '')
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-image-spacer",
          style: {
            width: width,
            height: height
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-image",
          style: image ? {
            backgroundImage: "url(".concat(self.getImageSrc(image), ")")
          } : {},
          key: 'image-' + self.divId
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-multiple-images-thumbs",
          style: {
            height: 0.1 * self.state.width
          }
        }, images.map(function (thumb, i) {
          var thumbheight = 0.1 * width;
          var thumbwidth = thumbheight * self.getAspectRatioFactor();
          var thumbleft = thumbwidth * 1.05 * i;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "osc-image-thumb-spacer",
            key: "osc-image-thumb-".concat(i),
            style: {
              left: thumbleft,
              width: thumbwidth,
              height: thumbheight
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "osc-image-thumb",
            style: thumb ? {
              backgroundImage: "url(".concat(self.getImageSrc(thumb), ")"),
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
          className: "osc-image-spacer ".concat(self.props.className || ''),
          style: {
            width: width,
            height: height
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-image",
          style: image ? {
            backgroundImage: "url(".concat(self.getImageSrc(image), ")")
          } : {},
          onClick: this.props.onClick,
          key: 'image-' + self.divId
        }));
      }
    }
  }]);

  return OpenStadComponentImage;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),

/***/ "./src/image/css/default.less":
/*!************************************!*\
  !*** ./src/image/css/default.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/image/index.jsx":
/*!*****************************!*\
  !*** ./src/image/index.jsx ***!
  \*****************************/
/*! exports provided: default, Image, IdeaImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_default_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/default.less */ "./src/image/css/default.less");
/* harmony import */ var _css_default_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_default_less__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_image_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/image.jsx */ "./src/image/component/image.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _component_image_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _component_image_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _component_idea_image_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/idea-image.jsx */ "./src/image/component/idea-image.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdeaImage", function() { return _component_idea_image_jsx__WEBPACK_IMPORTED_MODULE_5__["default"]; });

// polyfills
 // react


 // import css to make sure it is generated in the result

 // the module


 // render elements

_component_idea_image_jsx__WEBPACK_IMPORTED_MODULE_5__["default"].renderElement = function renderElement(elem, config) {
  var attributes = elem.attributes;
  react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_component_idea_image_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    attributes: attributes,
    config: config
  }), elem);
};



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
/* harmony import */ var _lib_ideas_sort_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/ideas-sort.js */ "./src/libs/lib/ideas-sort.js");
/* harmony import */ var _lib_local_storage_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/local-storage.js */ "./src/libs/lib/local-storage.js");
/* harmony import */ var _lib_session_storage_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/session-storage.js */ "./src/libs/lib/session-storage.js");
/* harmony import */ var _lib_react_template_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/react-template.js */ "./src/libs/lib/react-template.js");
// polyfills
//import 'core-js/es/map';
//import 'core-js/es/set';
 // react


 // import css to make sure it is generated in the result

 // the module







var OpenStadComponentLibs = {
  api: _lib_api_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  user: _lib_user_index_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  ideasSort: _lib_ideas_sort_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  localStorage: _lib_local_storage_js__WEBPACK_IMPORTED_MODULE_7__["default"],
  sessionStorage: _lib_session_storage_js__WEBPACK_IMPORTED_MODULE_8__["default"],
  reactTemplate: _lib_react_template_js__WEBPACK_IMPORTED_MODULE_9__["default"]
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

/***/ "./src/libs/lib/ideas-sort.js":
/*!************************************!*\
  !*** ./src/libs/lib/ideas-sort.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ideasSort; });


function ideasSort(_ref) {
  var ideas = _ref.ideas,
      sortOrder = _ref.sortOrder,
      center = _ref.center;
  sortOrder = sortOrder || 'random';

  switch (sortOrder) {
    case 'title':
      ideas = ideas.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return -1;
        }

        if (b.title.toLowerCase() < a.title.toLowerCase()) {
          return 1;
        }

        return 0;
      });
      break;

    case 'ranking,asc':
      ideas = ideas.sort(function (a, b) {
        return a.ranking - b.ranking;
      });
      break;

    case 'likes,asc':
      ideas = ideas.sort(function (a, b) {
        return a.yes - b.yes;
      });
      break;

    case 'likes,desc':
      ideas = ideas.sort(function (a, b) {
        return b.yes - a.yes;
      });
      break;

    case 'createdtime,desc':
      ideas = ideas.sort(function (a, b) {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
      break;

    case 'createdtime,asc':
      ideas = ideas.sort(function (a, b) {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      });
      break;

    case 'distance':
      center = center || {
        lat: 52.37104644463586,
        lng: 900402911007405
      };

      if (center.coordinates) {
        center.lat = center.coordinates[0];
        center.lng = center.coordinates[1];
      }

      ideas = ideas.map(function (idea) {
        idea._distance = Math.sqrt(Math.pow(idea.location.coordinates[0] - center.lat, 2) + Math.pow(idea.location.coordinates[1] - center.lng, 2));
        return idea;
      }).sort(function (a, b) {
        return a._distance - b._distance;
      });
      break;

    case 'args,desc':
      ideas = ideas.sort(function (a, b) {
        return b.argCount - a.argCount;
      });
      break;

    case 'args,asc':
      ideas = ideas.sort(function (a, b) {
        return a.argCount - b.argCount;
      });
      break;

    case 'random':
    default:
      ideas = ideas.sort(function (a, b) {
        return Math.random() - 0.5;
      });
      break;
  }

  return ideas;
}

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

      self.showLightBoxListener = function (event) {
        self.showLightbox(event.detail);
      };

      document.addEventListener('osc-show-light-box', self.showLightBoxListener); // move to root

      document.body.appendChild(this.instance);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('osc-show-light-box', this.showLightBoxListener);
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
      window.removeEventListener('resize', this.recalcSizes);
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
    key: "getImageSrc",
    value: function getImageSrc(image) {
      var imageSrc = image;
      if (_typeof(image) == 'object' && image.src) imageSrc = image.src;
      return imageSrc;
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
        src: self.state.images[self.state.startIndex] && self.getImageSrc(self.state.images[self.state.startIndex]),
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
            backgroundImage: "url(".concat(self.getImageSrc(image), ")")
          },
          onClick: function onClick(e) {
            return self.showImage(e, self.getImageSrc(image));
          },
          key: "lighbox-image-container-".concat(i),
          ref: function ref(el) {
            return self["lighbox-image-container-".concat(i)] = el;
          }
        }, /*#__PURE__*/React.createElement("img", {
          src: self.getImageSrc(image),
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

    return _super.call(this, props, {});
  }

  _createClass(OpenStadComponentPreviousNextButtonBlock, [{
    key: "render",
    value: function render() {
      var _this = this;

      var self = this;
      var previousButtonHTML;
      var previousAction = this.props.previousAction;
      if (this.props.previousUrl) previousAction = function previousAction() {
        document.location.href = "".concat(_this.props.previousUrl);
      };

      if (previousAction) {
        previousButtonHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-previous-button".concat(this.props.previousIsDisabled ? ' osc-disabled' : ''),
          onClick: function onClick(args) {
            return previousAction(args);
          }
        }, this.props.previousLabel);
      }

      var nextButtonHTML;
      var nextAction = this.props.nextAction;
      if (this.props.nextUrl) nextAction = function nextAction() {
        document.location.href = "".concat(_this.props.nextUrl);
      };

      if (nextAction) {
        nextButtonHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-next-button".concat(this.props.nextIsDisabled ? ' osc-disabled' : ''),
          onClick: function onClick(args) {
            return nextAction(args);
          }
        }, this.props.nextLabel);
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
=======
window.OpenStadComponents=function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}return o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=109)}([function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(4),u=n.n(r),o=n(2),i=n.n(o);n(70);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(i){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=a(i);return t=c?(e=a(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==s(r)&&"function"!=typeof r?d(n):r}}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var c=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(a,i.a.Component);var e,t,n,c=p(a);function a(n){var e,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);var o=d(e=c.call(this,n));if(n.attributes&&Object.keys(n.attributes).forEach(function(e){var t=n.attributes[e];o[t.name]=t.value}),"string"==typeof o.config)try{o.config=JSON.parse(o.config)}catch(e){}var i=function t(n){if("object"!=s(n))return n;Object.keys(n).forEach(function(e){void 0!==n[e]&&null!=n[e]||delete n[e],"object"==s(n[e])&&(n[e]=t(n[e]))});return n}(i=n.config||{});return o.config=u.a.recursive({siteId:null,api:{url:null,headers:null,isUserLoggedIn:!1},user:{}},t,r,i),o.divId=o.divId||o.config&&o.config.divId||n.id||"openstad-component-".concat(parseInt(1e8*Math.random())),window[o.divId]=o,e}return e=a,(t=[{key:"componentDidMount",value:function(){}}])&&l(e.prototype,t),n&&l(e,n),a}()},function(e,t,n){"use strict";n(11),n(2),n(6),n(78);var r=n(4),o=n.n(r);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e){var t,n,r=window.location.search.match(/(?:\?|&)jwt=([A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*)(?:&|$)/);return r&&(t=r[1],u.set("osc-jwt",t),"?"==(n=document.location.search.replace("jwt="+t,""))&&(n=""),document.location.search=n),t=u.get("osc-jwt"),e&&e.jwt&&(t=e.jwt,u.set("osc-jwt",t)),t}var a={get:function(e){var t=sessionStorage.getItem(e);try{t=JSON.parse(t)}catch(e){}return t},set:function(e,t){if("string"==typeof e){if(void 0===t&&(t=""),"object"==i(t))try{t=JSON.stringify(t)}catch(e){}sessionStorage.setItem(e,t)}},remove:function(e){sessionStorage.removeItem(e)}},u=a,s={admin:["admin","moderator","editor","member","anonymous","all"],moderator:["moderator","editor","member","anonymous","all"],editor:["editor","member","anonymous","all"],member:["member","anonymous","all"],anonymous:["anonymous","all"],all:["all"],owner:null};function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var f={get:function(e){var t=localStorage.getItem(e);try{t=JSON.parse(t)}catch(e){}return t},set:function(e,t){if("string"==typeof e){if(void 0===t&&(t=""),"object"==l(t))try{t=JSON.stringify(t)}catch(e){}localStorage.setItem(e,t)}},remove:function(e){localStorage.removeItem(e)}},p={api:{getHeaders:function(e){var t=o.a.recursive({"Content-type":"application/json"},e&&e.api&&e.api.headers),n=c();return n&&(t=o.a.recursive({"X-Authorization":"Bearer "+n},t)),t}},user:{getUser:function(e,t){t=t||function(e){console.log("getUser: next not defined."),console.log(e)};var n=e.user||u.get("osc-user");if(n)return t(null,n);var r=c(e);if(!r)return t(null,{});var o="".concat(e.api.url,"/oauth/site/").concat(e.siteId,"/me"),i={"X-Authorization":"Bearer ".concat(r),"Content-Type":"application/json"};fetch(o,{headers:i}).then(function(e){if(!e.ok)throw new Error("Error on fetch");return e.json()}).then(function(e){u.set("osc-user",e),t(null,e)}).catch(function(e){t(e)})},getJWT:c,logout:function(e,t){t=t||function(e){console.log("logout: next not defined.")};var n=e.user||u.get("osc-user");if(n)return t(null,n);var r=c(e);if(!r)return t(null,{});var o=e.api.url+"/oauth/site/"+e.siteId+"/me";fetch(o,{headers:{"X-Authorization":"Bearer "+r,"Content-Type":"application/json"}}).then(function(e){if(!e.ok)throw new Error("Error on fetch");return e.json()}).then(function(e){u.set("osc-user",e),t(null,e)}).catch(function(e){t(e)})},hasRole:function(e,t){var n=e.role;return Object.keys(s).includes(n)||(n="all"),s[n].includes(t)}},ideasSort:function(e){var t=e.ideas,n=e.sortOrder,r=e.center;switch(n=n||"random"){case"title":t=t.sort(function(e,t){return e.title.toLowerCase()<t.title.toLowerCase()?-1:t.title.toLowerCase()<e.title.toLowerCase()?1:0});break;case"ranking,asc":t=t.sort(function(e,t){return e.ranking-t.ranking});break;case"likes,asc":t=t.sort(function(e,t){return e.yes-t.yes});break;case"likes,desc":t=t.sort(function(e,t){return t.yes-e.yes});break;case"createdtime,desc":t=t.sort(function(e,t){return new Date(t.createdAt).getTime()-new Date(e.createdAt).getTime()});break;case"createdtime,asc":t=t.sort(function(e,t){return new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime()});break;case"distance":(r=r||{lat:52.37104644463586,lng:900402911007405}).coordinates&&(r.lat=r.coordinates[0],r.lng=r.coordinates[1]),t=t.map(function(e){return e._distance=Math.sqrt(Math.pow(e.location.coordinates[0]-r.lat,2)+Math.pow(e.location.coordinates[1]-r.lng,2)),e}).sort(function(e,t){return e._distance-t._distance});break;case"args,desc":t=t.sort(function(e,t){return t.argCount-e.argCount});break;case"args,asc":t=t.sort(function(e,t){return e.argCount-t.argCount});break;case"random":default:t=t.sort(function(e,t){return Math.random()-.5})}return t},localStorage:f,sessionStorage:u,reactTemplate:function(e){var t=e.html,n=void 0===t?"":t,r=e;delete r.html;var o=0;return Object.keys(r).forEach(function(e){var t=new RegExp("^((?:.|\n|\r)*)\\{".concat(e,"\\}((?:.|\n|\r)*)$"),"g").exec(n);t&&(o++,n=React.createElement("span",null,React.createElement("span",{dangerouslySetInnerHTML:{__html:t[1]}}),r[e],React.createElement("span",{dangerouslySetInnerHTML:{__html:t[2]}})))}),0==o&&(n=React.createElement("span",{dangerouslySetInnerHTML:{__html:n}})),n}};t.a=p},function(e,t){e.exports=window.React},function(n,e,t){(function(e){function t(e){return e&&e.Math==Math&&e}n.exports=t("object"==typeof globalThis&&globalThis)||t("object"==typeof window&&window)||t("object"==typeof self&&self)||t("object"==typeof e&&e)||Function("return this")()}).call(this,t(20))},function(e,t,n){(function(e){function t(e,t,n){var r=n[0],o=n.length;!e&&"object"===s(r)||(r={});for(var i=0;i<o;++i){var c,a=n[i];if("object"===s(a))for(var u in a){"__proto__"!==u&&(c=e?l.clone(a[u]):a[u],r[u]=t?function e(t,n){if("object"!==s(t))return n;for(var r in n)"object"===s(t[r])&&"object"===s(n[r])?t[r]=e(t[r],n[r]):t[r]=n[r];return t}(r[u],c):c)}}return r}function s(e){return{}.toString.call(e).slice(8,-1).toLowerCase()}var n,l;n=e&&"object"==typeof e.exports&&e.exports,(l=function(e){return t(!0===e,!1,arguments)}).recursive=function(e){return t(!0===e,!0,arguments)},l.clone=function(e){var t,n,r=e,o=s(e);if("array"===o)for(r=[],n=e.length,t=0;t<n;++t)r[t]=l.clone(e[t]);else if("object"===o)for(t in r={},e)r[t]=l.clone(e[t]);return r},n?e.exports=l:window.merge=l}).call(this,n(69)(e))},function(e,t,n){"use strict";n(11),n(2),n(6),n(82);var i=n(0);n(1);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(i){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=f(i);return t=c?(e=f(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==a(r)&&"function"!=typeof r?l(n):r}}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(o,i["a"]);var e,t,n,r=s(o);function o(e){var t,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),l(t=r.call(this,e,{choices:[],name:"",placeholder:"",disabled:!1,required:!1},n)).state={value:e.value,error:null},t.onChange=e.onChange,t}return e=o,(t=[{key:"validate",value:function(e){var t=e.showErrors,n=!this.config.required||!!this.state.value,r=!n&&t?!0:"";return this.setState({isValid:n,error:r}),n}},{key:"handleOnChange",value:function(e){var t=this;e=e||{},t.setState(e,function(){t.validate({})}),"function"==typeof t.onChange&&t.onChange({name:t.config.name,value:e.value})}}])&&c(e.prototype,t),n&&c(e,n),o}();function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(i){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=g(i);return t=c?(e=g(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==d(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(o,p);var e,t,n,r=y(o);function o(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return e=o,(t=[{key:"render",value:function(){var t=this;return React.createElement("input",{type:"hidden",value:this.props.value,disabled:this.props.disabled,placeholder:this.config.placeholder,onChange:function(){return t.handleOnChange({value:t.input.value})},ref:function(e){return t.input=e}})}}])&&h(e.prototype,t),n&&h(e,n),o}();function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(i){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=S(i);return t=c?(e=S(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==b(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var R=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(o,p);var e,t,n,r=O(o);function o(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),t=r.call(this,e,{allowMultiple:!1,imageserver:{process:"",fetch:""}});var n=[];return(e.value||[]).forEach(function(e){n.push({source:{url:e},options:{type:"local",file:{name:e},metadata:{poster:e}}})}),t.state={uploadedFiles:n},t}return e=o,(t=[{key:"componentDidMount",value:function(){this._loadedFiles=0,this.files=["https://unpkg.com/filepond/dist/filepond.js","https://unpkg.com/filepond-polyfill/dist/filepond-polyfill.js","https://unpkg.com/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.js","https://unpkg.com/filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.js","https://unpkg.com/filepond-plugin-file-validate-size/dist/filepond-plugin-file-validate-size.js","https://unpkg.com/filepond-plugin-file-poster/dist/filepond-plugin-file-poster.js"],this.loadNextFile()}},{key:"loadNextFile",value:function(){var e,t=this,n=t.files[t._loadedFiles];n&&((e=document.createElement("script")).src=n,e.async=!0,e&&(e.onload=function(){t.loadNextFile()},document.body.appendChild(e))),t._loadedFiles==t.files.length&&t.fileUploaderInit(),t._loadedFiles++}},{key:"validate",value:function(){var t=!0;return this.imageuploader&&this.imageuploader.getFiles&&this.imageuploader.getFiles().forEach(function(e){e.serverId||(t=!1)}),t}},{key:"fileUploaderInit",value:function(){var e,t=this,n=document.querySelector(".osc-image-upload-container");n&&(FilePond.registerPlugin(FilePondPluginImagePreview),FilePond.registerPlugin(FilePondPluginFileValidateSize),FilePond.registerPlugin(FilePondPluginFileValidateType),FilePond.registerPlugin(FilePondPluginFilePoster),e={acceptedFileTypes:["image/*"],allowFileSizeValidation:!0,allowMultiple:this.config.allowMultiple,allowReorder:!0,styleItemPanelAspectRatio:1,maxFileSize:"8mb",name:"image",maxFiles:5,allowBrowse:!0,files:this.state.uploadedFiles,server:{process:this.config.imageserver.process,fetch:this.config.imageserver.fetch},imageResizeTargetWidth:80,imageResizeTargetHeight:80,imageCropAspectRatio:"1:1",labelIdle:"Sleep afbeelding(en) naar deze plek of <span class='filepond--label-action'>KLIK HIER</span>",labelInvalidField:"Field contains invalid files",labelFileWaitingForSize:"Wachtend op grootte",labelFileSizeNotAvailable:"Grootte niet beschikbaar",labelFileCountSingular:"Bestand in lijst",labelFileCountPlural:"Bestanden in lijst",labelFileLoading:"Laden",labelFileAdded:"Toegevoegd",labelFileLoadError:"Fout bij het uploaden",labelFileRemoved:"Verwijderd",labelFileRemoveError:"Fout bij het verwijderen",labelFileProcessing:"Laden",labelFileProcessingComplete:"Afbeelding geladen",labelFileProcessingAborted:"Upload cancelled",labelFileProcessingError:"Error during upload",labelFileProcessingRevertError:"Error during revert",labelTapToCancel:"tap to cancel",labelTapToRetry:"tap to retry",labelTapToUndo:"tap to undo",labelButtonRemoveItem:"Verwijderen",labelButtonAbortItemLoad:"Abort",labelButtonRetryItemLoad:"Retry",labelButtonAbortItemProcessing:"Verwijder",labelButtonUndoItemProcessing:"Undo",labelButtonRetryItemProcessing:"Retry",labelButtonProcessItem:"Upload"},t.imageuploader=FilePond.create(n,e),document.querySelector(".filepond--root"),document.querySelector(".filepond--root").addEventListener("FilePond:processfile",function(e){e.detail&&e.detail.error&&console.log("Error uploding file: ",e.detail),t.fileUploaderUpdateCurrentInput()}),document.querySelector(".filepond--root").addEventListener("FilePond:removefile",function(e){e.detail&&e.detail.error&&console.log("Error uploding file: ",e.detail),t.fileUploaderUpdateCurrentInput()}),t.state.formfields&&t.imageuploader.addFiles(t.state.formfields.images))}},{key:"fileUploaderUpdateCurrentInput",value:function(){var n=this;n.state.value=[],this.imageuploader&&this.imageuploader.getFiles&&this.imageuploader.getFiles().forEach(function(e){try{var t="string"==typeof e.serverId?JSON.parse(e.serverId):e.serverId;n.state.value.push(t.url)}catch(e){console.log(e)}}),n.props.onChange({name:n.config.name,value:n.state.value})}},{key:"fileUploaderUploaderAddImages",value:function(e){this.imageuploader&&this.imageuploader.addFiles(e)}},{key:"render",value:function(){var e=null;return this.state.error&&(e=React.createElement("div",{className:"osc-form-error"},"Je hebt nog geen afbeelding geupload")),React.createElement("div",{className:"osc-image-upload-container"},React.createElement("input",{type:"file",className:"imageUploader-gebiedstool filepond-gebiedstool"}),e)}}])&&w(e.prototype,t),n&&w(e,n),o}();function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(i){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=P(i);return t=c?(e=P(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==x(r)&&"function"!=typeof r?C(n):r}}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var I=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(o,i["a"]);var e,t,n,r=k(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=r.call(this,e)).state={value:t.props.value},t.onKeyUpx=t.onKeyUpx.bind(C(t)),t}return e=o,(t=[{key:"componentDidMount",value:function(){var e=this.props.value,e=this.filterHTML(e);this.input.innerHTML=e}},{key:"filterHTML",value:function(e){return e=(e=(e=e.replace(/<(\/?\s*(?:a [^>]+|a|b|i|strong|em|p|div|br|ul|li)\s*\/?)>/g,"[[[$1]]]")).replace(/<[^>]+>/g,"")).replace(/\[\[\[([^\]]+)\]\]\]/g,"<$1>")}},{key:"executeAction",value:function(e,t,n){e.preventDefault(),e.stopPropagation(),document.execCommand(t,!1,n),this.onKeyUp()}},{key:"onFocus",value:function(e){this.props.onFocus&&this.props.onFocus(e)}},{key:"onBlur",value:function(e){this.props.onBlur&&this.props.onBlur(e),this.props.onChange&&this.props.onChange({value:this.state.value})}},{key:"onKeyUpx",value:function(){var e=this.input.innerHTML,e=this.filterHTML(e);this.setState({value:e}),this.props.onKeyUp&&this.props.onKeyUp(e)}},{key:"render",value:function(){var t=this;return React.createElement("div",{className:"osc-html-editor"},React.createElement("div",{className:"osc-html-editor-buttons"},React.createElement("div",{className:"osc-html-editor-button osc-html-editor-button-bold",onMouseDown:function(e){return t.executeAction(e,"bold")}}," "),React.createElement("div",{className:"osc-html-editor-button osc-html-editor-button-italic",onMouseDown:function(e){return t.executeAction(e,"italic")}}," "),React.createElement("div",{className:"osc-html-editor-button osc-html-editor-button-insertunorderedlist",onMouseDown:function(e){return t.executeAction(e,"insertunorderedlist")}}," "),React.createElement("div",{className:"osc-html-editor-button osc-html-editor-button-createlink",onMouseDown:function(e){return t.executeAction(e,"createlink",prompt("Lank naar","http://"))}}," ")),React.createElement("div",{className:"osc-html-editor-content",contentEditable:!0,onFocus:function(e){return t.onFocus(e)},onBlur:function(e){return t.onBlur(e)},onKeyUp:function(){return t.onKeyUpx()},ref:function(e){return t.input=e}}))}}])&&_(e.prototype,t),n&&_(e,n),o}();function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function N(i){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=F(i);return t=c?(e=F(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==T(r)&&"function"!=typeof r?q(n):r}}function q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var D=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(o,i["a"]);var e,t,n,r=N(o);function o(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var n=q(t=r.call(this,e,{name:"tekst",inputType:"input",minLength:5,maxLength:1024,placeholder:""}));return n.id=e.id||"osc-formfields-plaintext-with-counter-"+parseInt(1e6*Math.random()),n.state={focused:!1,value:e.value||"",valueLength:e.value&&e.value.length||0},n.key=e.useKey||(n.id||"osc-input-with-counter-")+parseInt(1e7*Math.random),t.onChange=e.onChange,n.handleOnChange=n.handleOnChange.bind(q(t)),n.onInputFocus=n.onInputFocus.bind(q(t)),n.onInputBlur=n.onInputBlur.bind(q(t)),n.onInputKeyUp=n.onInputKeyUp.bind(q(t)),t}return e=o,(t=[{key:"isValid",value:function(){var e={isValid:!0,warning:null};return this.state.valueLength<this.config.minLength&&(e.warning="De tekst is te kort",e.isValid=!1),this.state.valueLength>this.config.maxLength&&(e.warning="De tekst is te lang",e.isValid=!1),this.setState(e),e.isValid}},{key:"validate",value:function(){return this.setState({showWarning:!0}),this.isValid()}},{key:"handleOnChange",value:function(e){e=e||{},this.setState(e),"function"==typeof this.onChange&&this.onChange({name:this.config.name,value:e.value})}},{key:"onInputFocus",value:function(){var e={focused:!0,showWarning:!1};this.setState(e)}},{key:"onInputBlur",value:function(){var e={focused:!1};this.setState(e)}},{key:"onInputKeyUp",value:function(e){var t={};t.value=e||this.input.value;var n=t.value.length;t.valueLength=n,t.isValid=n>=this.config.minLength&&n<=this.config.maxLength,this.setState(t)}},{key:"render",value:function(){var e,t=this,n=this,r=null,o=null;n.state.focused&&(r=n.state.valueLength<n.config.minLength?React.createElement("div",{className:"osc-form-counter osc-form-error"},"Nog minimaal ",React.createElement("span",{className:""},n.config.minLength-n.state.valueLength)," tekens"):(e=n.state.valueLength>n.config.maxLength?"osc-form-error":"",React.createElement("div",{className:"osc-form-counter "+e},"Je hebt nog ",React.createElement("span",{className:""},n.config.maxLength-n.state.valueLength)," tekens over."))),n.state.showWarning&&n.state.warning&&(o=React.createElement("div",{className:"osc-form-warning",ref:function(e){return t["form-warning"]=e}},n.state.warning));var i=null;switch(n.config.inputType){case"htmlarea":i=React.createElement(I,{value:this.state.value,onChange:n.handleOnChange,onFocus:n.onInputFocus,onBlur:n.onInputBlur,onKeyUp:n.onInputKeyUp});break;case"textarea":i=React.createElement("textarea",{key:n.key,ref:function(e){return n.input=e},value:this.state.value,disabled:this.props.disabled,placeholder:this.config.placeholder,onChange:function(){return n.handleOnChange({value:n.input.value})},onKeyUp:function(){return n.onInputKeyUp()},onFocus:function(e){return n.onInputFocus(e)},onBlur:function(e){return n.onInputBlur(e)}});break;case"input":default:i=React.createElement("input",{key:n.key,ref:function(e){return n.input=e},value:this.state.value,disabled:this.props.disabled,placeholder:this.config.placeholder,onChange:function(){return n.handleOnChange({value:n.input.value})},onKeyUp:function(){return n.onInputKeyUp()},onFocus:function(e){return n.onInputFocus(e)},onBlur:function(e){return n.onInputBlur(e)}})}return React.createElement("div",{id:n.id,ref:function(e){return n.instance=e},className:"osc-input-with-counter"},React.createElement("div",{className:"osc-form-feedback"},i,r,o))}}])&&A(e.prototype,t),n&&A(e,n),o}();function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function G(e,t){return(G=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function B(i){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=z(i);return t=c?(e=z(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==M(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var H=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&G(e,t)}(o,p);var e,t,n,r=B(o);function o(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return e=o,(t=[{key:"render",value:function(){var t=this,e=null;return t.state.error&&(e=React.createElement("div",{className:"osc-form-error"},"Je hebt nog geen keuze gemaakt")),React.createElement("div",{className:"osc-radios"},t.config.choices.map(function(e){return e.dangerousDescription?React.createElement("div",{className:"osc-radio-container",key:e.value},React.createElement("div",{className:"osc-radio-input".concat(t.state.value==e.value?" osc-radio-input-checked":"")},React.createElement("input",{type:"radio",name:t.divId,value:e.value,onChange:function(){return t.handleOnChange({value:e.value})}})),React.createElement("div",{className:"osc-radio-text",dangerouslySetInnerHTML:{__html:e.dangerousDescription}})):React.createElement("div",{className:"osc-radio-container",key:e.value},React.createElement("div",{className:"osc-radio-input".concat(t.state.value==e.value?" osc-radio-input-checked":"")},React.createElement("input",{type:"radio",name:t.divId,value:e.value,onChange:function(){return t.handleOnChange({value:e.value})}})),React.createElement("div",{className:"osc-radio-text"},e.dangerousDescription?null:e.description||e.title||e.value))}),e)}}])&&U(e.prototype,t),n&&U(e,n),o}();function Q(e){return(Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function J(i){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=K(i);return t=c?(e=K(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==Q(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function K(e){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Y=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(o,p);var e,t,n,r=J(o);function o(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return e=o,(t=[{key:"validate",value:function(e){var t=e.showErrors,n=!0,r="";return this.state.value&&this.state.value.match(/^\s*\d{4}\s*[a-zA-Z][a-zA-Z]\s*$/)||(n=!1,t&&(r="Dit is geen postcode")),this.config.required&&!this.state.value&&(n=!1,t&&(r="Je hebt nog niets ingevuld")),this.setState({isValid:n,error:r}),n}},{key:"render",value:function(){var t=this,e=null;return t.state.error&&(e=React.createElement("div",{className:"osc-form-error"},t.state.error)),React.createElement("div",{className:"osc-textinput"},React.createElement("input",{type:"text",value:this.props.value,disabled:this.props.disabled,placeholder:this.config.placeholder,onChange:function(){return t.handleOnChange({value:t.input.value})},ref:function(e){return t.input=e}}),e)}}])&&W(e.prototype,t),n&&W(e,n),o}();function $(e){return($="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function X(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Z(e,t){return(Z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ee(i){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=te(i);return t=c?(e=te(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==$(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function te(e){return(te=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var ne=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Z(e,t)}(o,p);var e,t,n,r=ee(o);function o(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return e=o,(t=[{key:"componentDidMount",value:function(){var e=this.state.value||this.config.choices[0]&&this.config.choices[0].value;this.handleOnChange({value:e})}},{key:"render",value:function(){var t=this,e=null;return t.state.error&&(e=React.createElement("div",{className:"osc-form-error"},"Je hebt nog geen keuze gemaakt")),React.createElement("div",{className:"osc-select"},React.createElement("select",{value:this.state.value||"",disabled:this.props.disabled,placeholder:this.config.placeholder,onChange:function(){return t.handleOnChange({value:t.input.value})},ref:function(e){return t.input=e}},t.config.choices.map(function(e){return React.createElement("option",{value:e.value||"",key:e.value},e.description||e.title||e.value)})),e)}}])&&X(e.prototype,t),n&&X(e,n),o}();function re(e){return(re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function oe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ie(e,t){return(ie=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ce(i){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=ae(i);return t=c?(e=ae(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==re(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function ae(e){return(ae=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var ue=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ie(e,t)}(o,p);var e,t,n,r=ce(o);function o(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return e=o,(t=[{key:"render",value:function(){var t=this,e=null;return t.state.error&&(e=React.createElement("div",{className:"osc-form-error"},"Je hebt nog niets ingevuld")),React.createElement("div",{className:"osc-textinput"},React.createElement("input",{type:"text",value:this.props.value,disabled:this.props.disabled,placeholder:this.config.placeholder,onChange:function(){return t.handleOnChange({value:t.input.value})},ref:function(e){return t.input=e}}),e)}}])&&oe(e.prototype,t),n&&oe(e,n),o}();function se(e){return(se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function le(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function fe(e,t){return(fe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function pe(i){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=de(i);return t=c?(e=de(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==se(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function de(e){return(de=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var he=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&fe(e,t)}(o,p);var e,t,n,r=pe(o);function o(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return e=o,(t=[{key:"render",value:function(){var t=this,e=null;return t.state.error&&(e=React.createElement("div",{className:"osc-form-error"},"Je hebt nog niets ingevuld")),React.createElement("div",{className:"osc-textarea"},React.createElement("textarea",{value:this.props.value,disabled:this.props.disabled,placeholder:this.config.placeholder,onChange:function(){return t.handleOnChange({value:t.input.value})},ref:function(e){return t.input=e}},this.state.value),e)}}])&&le(e.prototype,t),n&&le(e,n),o}();function me(e){return(me="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function ye(o){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach(function(e){var t,n,r;t=o,r=i[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(i,e))})}return o}function ge(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ve(e,t){return(ve=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function be(i){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=Ee(i);return t=c?(e=Ee(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==me(r)&&"function"!=typeof r?we(n):r}}function we(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ee(e){return(Ee=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Oe=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ve(e,t)}(o,i["a"]);var e,t,n,r=be(o);function o(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var n=we(t=r.call(this,e,{inputType:null,validateAction:null,changeAction:null,required:!1,title:null,description:null,choices:[]}));return n.config.name=n.config.name||n.config.title.toLowerCase(),n.state={value:e.value||void 0},n.handleOnChange=n.handleOnChange.bind(n),n.onChange=e.onChange,t}return e=o,(t=[{key:"validate",value:function(e){var t=e.showErrors;return!this.input||this.input.validate({showErrors:t})}},{key:"handleOnChange",value:function(e){"function"==typeof this.onChange&&this.onChange(e)}},{key:"render",value:function(){var t=this,e=null;t.config.title&&(e=React.createElement("h3",{className:"osc-form-title"},t.config.title));var n=null;t.config.description&&(n=React.createElement("div",{className:"osc-form-description",dangerouslySetInnerHTML:{__html:t.config.description}}));var r=null;switch(t.config.inputType){case"hidden":r=React.createElement(v,{config:t.config,value:this.props.value||this.config.value,onChange:t.handleOnChange,ref:function(e){return t.input=e}});break;case"html-with-counter":case"htmlarea-with-counter":r=React.createElement(D,{config:ye(ye({},t.config),{},{inputType:"htmlarea"}),value:this.props.value||this.config.value,onChange:t.handleOnChange,ref:function(e){return t.input=e}});break;case"image-upload":r=React.createElement(R,{config:t.config,value:this.props.value||this.config.value,onChange:t.handleOnChange,ref:function(e){return t.input=e}});break;case"input-with-counter":case"text-with-counter":r=React.createElement(D,{config:ye({inputType:"input"},t.config),value:this.props.value||this.config.value,onChange:t.handleOnChange,ref:function(e){return t.input=e}});break;case"postcode":r=React.createElement(Y,{config:t.config,onChange:t.handleOnChange,ref:function(e){return t.input=e}});break;case"radios":r=React.createElement(H,{config:t.config,value:this.props.value||this.config.value,onChange:t.handleOnChange,ref:function(e){return t.input=e}});break;case"select":case"multiple-choice":r=React.createElement(ne,{config:t.config,value:this.props.value||this.config.value,onChange:t.handleOnChange,ref:function(e){return t.input=e}});break;case"text":r=React.createElement(ue,{config:t.config,value:this.props.value||this.config.value,onChange:t.handleOnChange,ref:function(e){return t.input=e}});break;case"textarea":r=React.createElement(he,{config:t.config,value:this.props.value||this.config.value,onChange:t.handleOnChange,ref:function(e){return t.input=e}});break;case"textarea-with-counter":r=React.createElement(D,{config:ye(ye({},t.config),{},{inputType:"textarea"}),value:this.props.value||this.config.value,onChange:t.handleOnChange,ref:function(e){return t.input=e}})}return React.createElement("div",{id:t.id,ref:function(e){return t.instance=e},className:"osc-form-field"},e,n,r)}}])&&ge(e.prototype,t),n&&ge(e,n),o}();function Se(e){return(Se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Re(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function xe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function je(e,t){return(je=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ke(i){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=Pe(i);return t=c?(e=Pe(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==Se(r)&&"function"!=typeof r?Ce(n):r}}function Ce(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Pe(e){return(Pe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var o=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&je(e,t)}(o,i["a"]);var e,t,n,r=ke(o);function o(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var n=Ce(t=r.call(this,e,{title:null,intro:null,fields:[]}));return n.state={values:e.values||{}},n.handleOnChange=n.handleOnChange.bind(Ce(t)),n.fields=[],t}return e=o,(t=[{key:"getValues",value:function(){return this.state.values}},{key:"validate",value:function(e){var t=e.showErrors,n=e.scrollTo,r=!0,o=null;return this.fields.forEach(function(e){e.validate({showErrors:t})||(r=!1,o=o||e)}),n&&o&&o.instance&&o.instance.scrollIntoView&&o.instance.scrollIntoView({behavior:"smooth"}),r}},{key:"handleOnChange",value:function(e){var t=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Re(Object(n),!0).forEach(function(e){xe(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Re(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},this.state.values);t[e.name]=e.value,this.setState({values:t})}},{key:"render",value:function(){var n=this,e=null;n.config.title&&(e=React.createElement("h2",{className:"osc-form-title"},n.config.title));var t=null;n.config.intro&&(t=React.createElement("div",{className:"osc-form-intro",dangerouslySetInnerHTML:{__html:n.config.intro}}));var r=null;return n.config.fields&&n.config.fields.length&&(r=React.createElement("div",{className:"osc-form-fields"},n.config.fields.map(function(e,t){return React.createElement(Oe,xe({config:e,onChange:n.handleOnChange,ref:function(e){return n.input=e},key:"osc-form-field-".concat(t)},"ref",function(e){n.fields[t]=e}))}))),React.createElement("div",{id:n.divId,className:"osc-form",ref:function(e){return n.instance=e}},e,t,r)}}])&&_e(e.prototype,t),n&&_e(e,n),o}();function Ie(e){return(Ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Te(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ae(e,t){return(Ae=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Le(i){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=qe(i);return t=c?(e=qe(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==Ie(r)&&"function"!=typeof r?Ne(n):r}}function Ne(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function qe(e){return(qe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Fe=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ae(e,t)}(o,i["a"]);var e,t,n,r=Le(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=r.call(this,e)).state={value:t.props.value,touched:t.props.touched||!1},t.handleChange=t.handleChange.bind(Ne(t)),t}return e=o,(t=[{key:"handleChange",value:function(e){var t=e.target.value;"function"==typeof this.props.onChange&&this.props.onChange(t),this.setState({value:t,touched:!0})}},{key:"doTouch",value:function(){"function"==typeof this.props.onChange&&this.props.onChange(50),this.setState({touched:!0})}},{key:"calcProgress",value:function(e,t,n){return 2*(n-e)/(t-e)-1}},{key:"render",value:function(){var t=this,e=t.state,n=e.value,r=e.touched,o=t.props,i=o.min,c=o.max,a=o.step;return React.createElement("div",{className:"".concat(t.props.className," osc-slider")},React.createElement("div",{className:"osc-slider-track-container"},React.createElement("div",{className:"osc-slider-track"}),React.createElement("div",{className:"osc-slider-track-progress-container"},React.createElement("div",{className:"osc-slider-track-progress",style:{transform:"scaleX("+t.calcProgress(i,c,n)+")"}})),React.createElement("div",{className:"osc-slider-track-dot-end osc-slider-track-dot-left"}),React.createElement("div",{className:"osc-slider-track-dot-start osc-slider-track-dot-center"}),React.createElement("div",{className:"osc-slider-track-dot-end osc-slider-track-dot-right"})),React.createElement("input",{type:"range",min:i,max:c,step:a,value:n,onClick:function(){r||t.doTouch()},onChange:t.handleChange,className:r?"osc-slider-input-range":"osc-slider-input-range osc-slider-untouched",ref:function(e){return t.input=e}}))}}])&&Te(e.prototype,t),n&&Te(e,n),o}();t.a={Form:o,FormField:Oe,Hidden:v,ImageUpload:R,InputWithCounter:D,Postcode:Y,Radios:H,Select:ne,Text:ue,Textarea:he,Slider:Fe}},function(e,t){e.exports=window.ReactDOM},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){var r=n(9);e.exports=!r(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){"use strict";(function(i){var t,n,r="URLSearchParams"in self,o="Symbol"in self&&"iterator"in Symbol,a="FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(e){return!1}}(),c="FormData"in self,u="ArrayBuffer"in self;function s(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function l(e){return"string"!=typeof e&&(e=String(e)),e}function e(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return o&&(e[Symbol.iterator]=function(){return e}),e}function f(t){this.map={},t instanceof f?t.forEach(function(e,t){this.append(t,e)},this):Array.isArray(t)?t.forEach(function(e){this.append(e[0],e[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function p(e){if(e.bodyUsed)return i.reject(new TypeError("Already read"));e.bodyUsed=!0}function d(n){return new i(function(e,t){n.onload=function(){e(n.result)},n.onerror=function(){t(n.error)}})}function h(e){var t=new FileReader,n=d(t);return t.readAsArrayBuffer(e),n}function m(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function y(){return this.bodyUsed=!1,this._initBody=function(e){var t;(this._bodyInit=e)?"string"==typeof e?this._bodyText=e:a&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:c&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:r&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():u&&a&&((t=e)&&DataView.prototype.isPrototypeOf(t))?(this._bodyArrayBuffer=m(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):u&&(ArrayBuffer.prototype.isPrototypeOf(e)||n(e))?this._bodyArrayBuffer=m(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},a&&(this.blob=function(){var e=p(this);if(e)return e;if(this._bodyBlob)return i.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return i.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return i.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?p(this)||i.resolve(this._bodyArrayBuffer):this.blob().then(h)}),this.text=function(){var e,t,n,r=p(this);if(r)return r;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,n=d(t),t.readAsText(e),n;if(this._bodyArrayBuffer)return i.resolve(function(e){for(var t=new Uint8Array(e),n=new Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return i.resolve(this._bodyText)},c&&(this.formData=function(){return this.text().then(b)}),this.json=function(){return this.text().then(JSON.parse)},this}u&&(t=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],n=ArrayBuffer.isView||function(e){return e&&-1<t.indexOf(Object.prototype.toString.call(e))}),f.prototype.append=function(e,t){e=s(e),t=l(t);var n=this.map[e];this.map[e]=n?n+", "+t:t},f.prototype.delete=function(e){delete this.map[s(e)]},f.prototype.get=function(e){return e=s(e),this.has(e)?this.map[e]:null},f.prototype.has=function(e){return this.map.hasOwnProperty(s(e))},f.prototype.set=function(e,t){this.map[s(e)]=l(t)},f.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},f.prototype.keys=function(){var n=[];return this.forEach(function(e,t){n.push(t)}),e(n)},f.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),e(t)},f.prototype.entries=function(){var n=[];return this.forEach(function(e,t){n.push([t,e])}),e(n)},o&&(f.prototype[Symbol.iterator]=f.prototype.entries);var g=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function v(e,t){var n,r,o=(t=t||{}).body;if(e instanceof v){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new f(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,o||null==e._bodyInit||(o=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new f(t.headers)),this.method=(n=t.method||this.method||"GET",r=n.toUpperCase(),-1<g.indexOf(r)?r:n),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function b(e){var o=new FormData;return e.trim().split("&").forEach(function(e){var t,n,r;e&&(n=(t=e.split("=")).shift().replace(/\+/g," "),r=t.join("=").replace(/\+/g," "),o.append(decodeURIComponent(n),decodeURIComponent(r)))}),o}function w(e,t){t=t||{},this.type="default",this.status=void 0===t.status?200:t.status,this.ok=200<=this.status&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new f(t.headers),this.url=t.url||"",this._initBody(e)}v.prototype.clone=function(){return new v(this,{body:this._bodyInit})},y.call(v.prototype),y.call(w.prototype),w.prototype.clone=function(){return new w(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new f(this.headers),url:this.url})},w.error=function(){var e=new w(null,{status:0,statusText:""});return e.type="error",e};var E=[301,302,303,307,308];w.redirect=function(e,t){if(-1===E.indexOf(t))throw new RangeError("Invalid status code");return new w(null,{status:t,headers:{location:e}})};var O=self.DOMException;try{new O}catch(e){(O=function(e,t){this.message=e,this.name=t;var n=Error(e);this.stack=n.stack}).prototype=Object.create(Error.prototype),O.prototype.constructor=O}function S(o,c){return new i(function(r,e){var t=new v(o,c);if(t.signal&&t.signal.aborted)return e(new O("Aborted","AbortError"));var i=new XMLHttpRequest;function n(){i.abort()}i.onload=function(){var e,o,t={status:i.status,statusText:i.statusText,headers:(e=i.getAllResponseHeaders()||"",o=new f,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(e){var t,n=e.split(":"),r=n.shift().trim();r&&(t=n.join(":").trim(),o.append(r,t))}),o)};t.url="responseURL"in i?i.responseURL:t.headers.get("X-Request-URL");var n="response"in i?i.response:i.responseText;r(new w(n,t))},i.onerror=function(){e(new TypeError("Network request failed"))},i.ontimeout=function(){e(new TypeError("Network request failed"))},i.onabort=function(){e(new O("Aborted","AbortError"))},i.open(t.method,t.url,!0),"include"===t.credentials?i.withCredentials=!0:"omit"===t.credentials&&(i.withCredentials=!1),"responseType"in i&&a&&(i.responseType="blob"),t.headers.forEach(function(e,t){i.setRequestHeader(t,e)}),t.signal&&(t.signal.addEventListener("abort",n),i.onreadystatechange=function(){4===i.readyState&&t.signal.removeEventListener("abort",n)}),i.send(void 0===t._bodyInit?null:t._bodyInit)})}S.polyfill=!0,self.fetch||(self.fetch=S,self.Headers=f,self.Request=v,self.Response=w)}).call(this,n(40))},function(e,t,n){var r=n(8),o=n(13),i=n(22);e.exports=r?function(e,t,n){return o.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var r=n(8),o=n(24),i=n(14),c=n(23),a=Object.defineProperty;t.f=r?a:function(e,t,n){if(i(e),t=c(t,!0),i(n),o)try{return a(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var r=n(10);e.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e}},function(e,t,n){var r=n(42),o=n(44);e.exports=function(e){return r(o(e))}},function(e,t,n){var r=n(3),o=n(12);e.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(e,t){e.exports={}},function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return g}),n.d(t,"Image",function(){return g}),n.d(t,"IdeaImage",function(){return S});n(11);var r=n(2),a=n.n(r),o=n(6),i=n.n(o),c=(n(83),n(4)),u=n.n(c),s=n(0);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var c,a=e[Symbol.iterator]();!(r=(c=a.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(i){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=y(i);return t=c?(e=y(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==p(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(o,s["a"]);var e,t,n,r=m(o);function o(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);return(t=r.call(this,e)).config=u.a.recursive({aspectRatio:"16x9",allowMultipleImages:!1},t.config,t.props.config||{}),t.state={currentImageIndex:0,width:0},t}return e=o,(t=[{key:"componentDidMount",value:function(){var e=document.querySelector("#".concat(this.divId)).parentNode;this.setState({width:e.offsetWidth})}},{key:"setCurrentImageIndex",value:function(e){this.setState({currentImageIndex:e})}},{key:"getImagesFromProps",value:function(){var e=this.props.images;this.props.image||e[this.state.currentImageIndex];return[this.props.image,e]}},{key:"getImageSrc",value:function(e){var t=e;return"object"==p(e)&&e.src&&(t=e.src),t}},{key:"getAspectRatioFactor",value:function(){if(this.props.width&&this.props.height)return this.props.width/this.props.height;var e=this.config.aspectRatio.match(/(\d+)x(\d+)/);return e?e[1]/e[2]:16/9}},{key:"getWidthHeight",value:function(){var e=this.props.width||this.state.width;return[e,this.props.height||e*(1/this.getAspectRatioFactor())||void 0]}},{key:"render",value:function(){var i=this,e=l(i.getImagesFromProps(),2),t=e[0],n=e[1],r=l(i.getWidthHeight(),2),c=r[0],o=r[1];return i.config.allowMultipleImages&&1<n.length?a.a.createElement("div",{id:i.divId,className:"osc-multiple-images ".concat(i.props.className||"")},a.a.createElement("div",{className:"osc-image-spacer",style:{width:c,height:o}},a.a.createElement("div",{className:"osc-image",style:t?{backgroundImage:"url(".concat(i.getImageSrc(t),")")}:{},key:"image-"+i.divId})),a.a.createElement("div",{className:"osc-multiple-images-thumbs",style:{height:.1*i.state.width}},n.map(function(e,t){var n=.1*c,r=n*i.getAspectRatioFactor(),o=1.05*r*t;return a.a.createElement("div",{className:"osc-image-thumb-spacer",key:"osc-image-thumb-".concat(t),style:{left:o,width:r,height:n}},a.a.createElement("div",{className:"osc-image-thumb",style:e?{backgroundImage:"url(".concat(i.getImageSrc(e),")"),zIndex:10-t}:{},onClick:function(){return i.setCurrentImageIndex(t)}}))}))):a.a.createElement("div",{id:i.divId,className:"osc-image-spacer ".concat(i.props.className||""),style:{width:c,height:o}},a.a.createElement("div",{className:"osc-image",style:t?{backgroundImage:"url(".concat(i.getImageSrc(t),")")}:{},onClick:this.props.onClick,key:"image-"+i.divId}))}}])&&d(e.prototype,t),n&&d(e,n),o}();function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(i){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=O(i);return t=c?(e=O(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==v(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var S=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(o,g);var e,t,n,r=E(o);function o(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return e=o,(t=[{key:"getImagesFromProps",value:function(){var e=this.props.idea;if(!e)return["",[""]];var t=e.extraData&&e.extraData.images||[];return[e.posterImage&&e.posterImage.key||e.extraData&&e.extraData.images&&e.extraData.images[this.state.currentImageIndex],t]}}])&&b(e.prototype,t),n&&b(e,n),o}();S.renderElement=function(e,t){var n=e.attributes;i.a.render(a.a.createElement(S,{attributes:n,config:t}),e)}},function(e,t){var n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){var r=n(8),o=n(48),i=n(22),c=n(15),a=n(23),u=n(7),s=n(24),l=Object.getOwnPropertyDescriptor;t.f=r?l:function(e,t){if(e=c(e),t=a(t,!0),s)try{return l(e,t)}catch(e){}if(u(e,t))return i(!o.f.call(e,t),e[t])}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){var o=n(10);e.exports=function(e,t){if(!o(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!o(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!o(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!o(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}},function(e,t,n){var r=n(8),o=n(9),i=n(25);e.exports=!r&&!o(function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){var r=n(3),o=n(10),i=r.document,c=o(i)&&o(i.createElement);e.exports=function(e){return c?i.createElement(e):{}}},function(e,t,n){var r=n(27),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(e){return o.call(e)}),e.exports=r.inspectSource},function(e,t,n){var r=n(3),o=n(16),i="__core-js_shared__",c=r[i]||o(i,{});e.exports=c},function(e,t,n){var r=n(29),o=n(30),i=r("keys");e.exports=function(e){return i[e]||(i[e]=o(e))}},function(e,t,n){var r=n(52),o=n(27);(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++n+r).toString(36)}},function(e,t,n){function r(e){return"function"==typeof e?e:void 0}var o=n(55),i=n(3);e.exports=function(e,t){return arguments.length<2?r(o[e])||r(i[e]):o[e]&&o[e][t]||i[e]&&i[e][t]}},function(e,t,n){var c=n(7),a=n(15),u=n(33).indexOf,s=n(17);e.exports=function(e,t){var n,r=a(e),o=0,i=[];for(n in r)!c(s,n)&&c(r,n)&&i.push(n);for(;t.length>o;)c(r,n=t[o++])&&(~u(i,n)||i.push(n));return i}},function(e,t,n){function r(a){return function(e,t,n){var r,o=u(e),i=s(o.length),c=l(n,i);if(a&&t!=t){for(;c<i;)if((r=o[c++])!=r)return!0}else for(;c<i;c++)if((a||c in o)&&o[c]===t)return a||c||0;return!a&&-1}}var u=n(15),s=n(45),l=n(57);e.exports={includes:r(!0),indexOf:r(!1)}},function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(0<e?r:n)(e)}},function(e,t,n){var r=n(9);e.exports=!!Object.getOwnPropertySymbols&&!r(function(){return!String(Symbol())})},function(e,t,n){var l=n(3),f=n(21).f,p=n(12),d=n(49),h=n(16),m=n(53),y=n(59);e.exports=function(e,t){var n,r,o,i,c=e.target,a=e.global,u=e.stat,s=a?l:u?l[c]||h(c,{}):(l[c]||{}).prototype;if(s)for(n in t){if(o=t[n],r=e.noTargetGet?(i=f(s,n))&&i.value:s[n],!y(a?n:c+(u?".":"#")+n,e.forced)&&void 0!==r){if(typeof o==typeof r)continue;m(o,r)}(e.sham||r&&r.sham)&&p(o,"sham",!0),d(s,n,o,e)}}},function(e,t,n){var r=n(47),o=n(62),i=n(13),c=r("unscopables"),a=Array.prototype;null==a[c]&&i.f(a,c,{configurable:!0,value:o(null)}),e.exports=function(e){a[c][e]=!0}},function(e,t,n){function c(e){throw e}var a=n(8),u=n(9),s=n(7),l=Object.defineProperty,f={};e.exports=function(e,t){if(s(f,e))return f[e];var n=[][e],r=!!s(t=t||{},"ACCESSORS")&&t.ACCESSORS,o=s(t,0)?t[0]:c,i=s(t,1)?t[1]:void 0;return f[e]=!!n&&!u(function(){if(r&&!a)return!0;var e={length:-1};r?l(e,1,{enumerable:!0,get:c}):e[1]=1,n.call(e,o,i)})}},function(e,t,n){var r=n(3),o=n(46),i=Function.call;e.exports=function(e,t,n){return o(i,r[e].prototype[t],n)}},function(e,t,n){e.exports=n(66).Promise},function(e,o,i){"use strict";(function(t){i.d(o,"a",function(){return e}),i.d(o,"b",function(){return n}),i.d(o,"c",function(){return r});var e=function(){return(e=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function n(e,c,a,u){return new(a=a||t)(function(n,t){function r(e){try{i(u.next(e))}catch(e){t(e)}}function o(e){try{i(u.throw(e))}catch(e){t(e)}}function i(e){var t;e.done?n(e.value):((t=e.value)instanceof a?t:new a(function(e){e(t)})).then(r,o)}i((u=u.apply(e,c||[])).next())})}function r(n,r){var o,i,c,a={label:0,sent:function(){if(1&c[0])throw c[1];return c[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,i&&(c=2&t[0]?i.return:t[0]?i.throw||((c=i.return)&&c.call(i),0):i.next)&&!(c=c.call(i,t[1])).done)return c;switch(i=0,c&&(t=[2&t[0],c.value]),t[0]){case 0:case 1:c=t;break;case 4:return a.label++,{value:t[1],done:!1};case 5:a.label++,i=t[1],t=[0];continue;case 7:t=a.ops.pop(),a.trys.pop();continue;default:if(!(c=0<(c=a.trys).length&&c[c.length-1])&&(6===t[0]||2===t[0])){a=0;continue}if(3===t[0]&&(!c||t[1]>c[0]&&t[1]<c[3])){a.label=t[1];break}if(6===t[0]&&a.label<c[1]){a.label=c[1],c=t;break}if(c&&a.label<c[2]){a.label=c[2],a.ops.push(t);break}c[2]&&a.ops.pop(),a.trys.pop();continue}t=r.call(n,a)}catch(e){t=[6,e],i=0}finally{o=c=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}}Object.create;Object.create}).call(this,i(40))},function(e,t,n){var r=n(9),o=n(43),i="".split;e.exports=r(function(){return!Object("z").propertyIsEnumerable(0)})?function(e){return"String"==o(e)?i.call(e,""):Object(e)}:Object},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},function(e,t,n){var r=n(34),o=Math.min;e.exports=function(e){return 0<e?o(r(e),9007199254740991):0}},function(e,t,n){var i=n(60);e.exports=function(r,o,e){if(i(r),void 0===o)return r;switch(e){case 0:return function(){return r.call(o)};case 1:return function(e){return r.call(o,e)};case 2:return function(e,t){return r.call(o,e,t)};case 3:return function(e,t,n){return r.call(o,e,t,n)}}return function(){return r.apply(o,arguments)}}},function(e,t,n){var r=n(3),o=n(29),i=n(7),c=n(30),a=n(35),u=n(61),s=o("wks"),l=r.Symbol,f=u?l:l&&l.withoutSetter||c;e.exports=function(e){return i(s,e)||(a&&i(l,e)?s[e]=l[e]:s[e]=f("Symbol."+e)),s[e]}},function(e,t,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);t.f=i?function(e){var t=o(this,e);return!!t&&t.enumerable}:r},function(e,t,n){var a=n(3),u=n(12),s=n(7),l=n(16),r=n(26),o=n(50),i=o.get,f=o.enforce,p=String(String).split("String");(e.exports=function(e,t,n,r){var o=!!r&&!!r.unsafe,i=!!r&&!!r.enumerable,c=!!r&&!!r.noTargetGet;"function"==typeof n&&("string"!=typeof t||s(n,"name")||u(n,"name",t),f(n).source=p.join("string"==typeof t?t:"")),e!==a?(o?!c&&e[t]&&(i=!0):delete e[t],i?e[t]=n:u(e,t,n)):i?e[t]=n:l(t,n)})(Function.prototype,"toString",function(){return"function"==typeof this&&i(this).source||r(this)})},function(e,t,n){var r,o,i,c,a,u,s,l,f=n(51),p=n(3),d=n(10),h=n(12),m=n(7),y=n(28),g=n(17),v=p.WeakMap;s=f?(r=new v,o=r.get,i=r.has,c=r.set,a=function(e,t){return c.call(r,e,t),t},u=function(e){return o.call(r,e)||{}},function(e){return i.call(r,e)}):(g[l=y("state")]=!0,a=function(e,t){return h(e,l,t),t},u=function(e){return m(e,l)?e[l]:{}},function(e){return m(e,l)}),e.exports={set:a,get:u,has:s,enforce:function(e){return s(e)?u(e):a(e,{})},getterFor:function(n){return function(e){var t;if(!d(e)||(t=u(e)).type!==n)throw TypeError("Incompatible receiver, "+n+" required");return t}}}},function(e,t,n){var r=n(3),o=n(26),i=r.WeakMap;e.exports="function"==typeof i&&/native code/.test(o(i))},function(e,t){e.exports=!1},function(e,t,n){var a=n(7),u=n(54),s=n(21),l=n(13);e.exports=function(e,t){for(var n=u(t),r=l.f,o=s.f,i=0;i<n.length;i++){var c=n[i];a(e,c)||r(e,c,o(t,c))}}},function(e,t,n){var r=n(31),o=n(56),i=n(58),c=n(14);e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(c(e)),n=i.f;return n?t.concat(n(e)):t}},function(e,t,n){var r=n(3);e.exports=r},function(e,t,n){var r=n(32),o=n(18).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},function(e,t,n){var r=n(34),o=Math.max,i=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):i(n,t)}},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t,n){function r(e,t){var n=a[c(e)];return n==s||n!=u&&("function"==typeof t?o(t):!!t)}var o=n(9),i=/#|\.prototype\./,c=r.normalize=function(e){return String(e).replace(i,".").toLowerCase()},a=r.data={},u=r.NATIVE="N",s=r.POLYFILL="P";e.exports=r},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},function(e,t,n){var r=n(35);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(e,t,n){function r(){}function o(e){return"<script>"+e+"</"+h+">"}var i,c=n(14),a=n(63),u=n(18),s=n(17),l=n(65),f=n(25),p=n(28),d="prototype",h="script",m=p("IE_PROTO"),y=function(){try{i=document.domain&&new ActiveXObject("htmlfile")}catch(e){}var e,t;y=i?function(e){e.write(o("")),e.close();var t=e.parentWindow.Object;return e=null,t}(i):((t=f("iframe")).style.display="none",l.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(o("document.F=Object")),e.close(),e.F);for(var n=u.length;n--;)delete y[d][u[n]];return y()};s[m]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(r[d]=c(e),n=new r,r[d]=null,n[m]=e):n=y(),void 0===t?n:a(n,t)}},function(e,t,n){var r=n(8),c=n(13),a=n(14),u=n(64);e.exports=r?Object.defineProperties:function(e,t){a(e);for(var n,r=u(t),o=r.length,i=0;i<o;)c.f(e,n=r[i++],t[n]);return e}},function(e,t,n){var r=n(32),o=n(18);e.exports=Object.keys||function(e){return r(e,o)}},function(e,t,n){var r=n(31);e.exports=r("document","documentElement")},function(e,t,fe){(function(ue,se){var le;e.exports=function(){"use strict";function n(e){return typeof e==="function"||typeof e==="object"&&e!==null}function s(e){return typeof e==="function"}var e=undefined;if(!Array.isArray){e=function(e){return Object.prototype.toString.call(e)==="[object Array]"}}else{e=Array.isArray}var r=e,o=0,i=undefined,c=undefined,a=function e(t,n){w[o]=t;w[o+1]=n;o+=2;if(o===2){if(c){c(E)}else{S()}}};function t(e){c=e}function u(e){a=e}var l=typeof window!=="undefined"?window:undefined,f=l||{},p=f.MutationObserver||f.WebKitMutationObserver,d=typeof self==="undefined"&&typeof ue!=="undefined"&&{}.toString.call(ue)==="[object process]",h=typeof Uint8ClampedArray!=="undefined"&&typeof importScripts!=="undefined"&&typeof MessageChannel!=="undefined";function m(){return function(){return ue.nextTick(E)}}function y(){return function(){i(E)}}function g(){var e=0;var t=new p(E);var n=document.createTextNode("");t.observe(n,{characterData:true});return function(){n.data=e=++e%2}}function v(){var e=new MessageChannel;e.port1.onmessage=E;return function(){return e.port2.postMessage(0)}}function b(){var e=setTimeout;return function(){return e(E,1)}}var w=new Array(1e3);function E(){for(var e=0;e<o;e+=2){var t=w[e];var n=w[e+1];t(n);w[e]=undefined;w[e+1]=undefined}o=0}function O(){try{var e=le;var t=fe(68);i=t.runOnLoop||t.runOnContext;return y()}catch(e){return b()}}var S=undefined;if(d){S=m()}else if(p){S=g()}else if(h){S=v()}else if(l===undefined&&"function"==="function"){S=O()}else{S=b()}function R(e,t){var n=arguments;var r=this;var o=new this.constructor(j);if(o[_]===undefined){X(o)}var i=r._state;if(i){(function(){var e=n[i-1];a(function(){return J(i,o,e,r._result)})})()}else{z(r,o,e,t)}return o}function x(e){var t=this;if(e&&typeof e==="object"&&e.constructor===t){return e}var n=new t(j);M(n,e);return n}var _=Math.random().toString(36).substring(16);function j(){}var k=void 0,C=1,P=2,I=new Q;function T(){return new TypeError("You cannot resolve a promise with itself")}function A(){return new TypeError("A promises callback cannot return that same promise.")}function L(e){try{return e.then}catch(e){I.error=e;return I}}function N(e,t,n,r){try{e.call(t,n,r)}catch(e){return e}}function q(e,r,o){a(function(t){var n=false;var e=N(o,r,function(e){if(n){return}n=true;if(r!==e){M(t,e)}else{G(t,e)}},function(e){if(n){return}n=true;B(t,e)},"Settle: "+(t._label||" unknown promise"));if(!n&&e){n=true;B(t,e)}},e)}function F(t,e){if(e._state===C){G(t,e._result)}else if(e._state===P){B(t,e._result)}else{z(e,undefined,function(e){return M(t,e)},function(e){return B(t,e)})}}function D(e,t,n){if(t.constructor===e.constructor&&n===R&&t.constructor.resolve===x){F(e,t)}else{if(n===I){B(e,I.error)}else if(n===undefined){G(e,t)}else if(s(n)){q(e,t,n)}else{G(e,t)}}}function M(e,t){if(e===t){B(e,T())}else if(n(t)){D(e,t,L(t))}else{G(e,t)}}function U(e){if(e._onerror){e._onerror(e._result)}H(e)}function G(e,t){if(e._state!==k){return}e._result=t;e._state=C;if(e._subscribers.length!==0){a(H,e)}}function B(e,t){if(e._state!==k){return}e._state=P;e._result=t;a(U,e)}function z(e,t,n,r){var o=e._subscribers;var i=o.length;e._onerror=null;o[i]=t;o[i+C]=n;o[i+P]=r;if(i===0&&e._state){a(H,e)}}function H(e){var t=e._subscribers;var n=e._state;if(t.length===0){return}var r=undefined,o=undefined,i=e._result;for(var c=0;c<t.length;c+=3){r=t[c];o=t[c+n];if(r){J(n,r,o,i)}else{o(i)}}e._subscribers.length=0}function Q(){this.error=null}var W=new Q;function V(e,t){try{return e(t)}catch(e){W.error=e;return W}}function J(e,t,n,r){var o=s(n),i=undefined,c=undefined,a=undefined,u=undefined;if(o){i=V(n,r);if(i===W){u=true;c=i.error;i=null}else{a=true}if(t===i){B(t,A());return}}else{i=r;a=true}if(t._state!==k){}else if(o&&a){M(t,i)}else if(u){B(t,c)}else if(e===C){G(t,i)}else if(e===P){B(t,i)}}function K(n,e){try{e(function e(t){M(n,t)},function e(t){B(n,t)})}catch(e){B(n,e)}}var Y=0;function $(){return Y++}function X(e){e[_]=Y++;e._state=undefined;e._result=undefined;e._subscribers=[]}function Z(e,t){this._instanceConstructor=e;this.promise=new e(j);if(!this.promise[_]){X(this.promise)}if(r(t)){this._input=t;this.length=t.length;this._remaining=t.length;this._result=new Array(this.length);if(this.length===0){G(this.promise,this._result)}else{this.length=this.length||0;this._enumerate();if(this._remaining===0){G(this.promise,this._result)}}}else{B(this.promise,ee())}}function ee(){return new Error("Array Methods must be provided an Array")}function te(e){return new Z(this,e).promise}function ne(o){var i=this;if(r(o))return new i(function(e,t){for(var n=o.length,r=0;r<n;r++)i.resolve(o[r]).then(e,t)});else return new i(function(e,t){return t(new TypeError("You must pass an array to race."))})}function re(e){var t=new this(j);return B(t,e),t}function oe(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function ie(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function ce(e){this[_]=$();this._result=this._state=undefined;this._subscribers=[];if(j!==e){typeof e!=="function"&&oe();this instanceof ce?K(this,e):ie()}}function ae(){var e=undefined;if(typeof se!=="undefined"){e=se}else if(typeof self!=="undefined"){e=self}else{try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}}var t=e.Promise;if(t){var n=null;try{n=Object.prototype.toString.call(t.resolve())}catch(e){}if(n==="[object Promise]"&&!t.cast){return}}e.Promise=ce}return Z.prototype._enumerate=function(){for(var e=this.length,t=this._input,n=0;this._state===k&&n<e;n++)this._eachEntry(t[n],n)},Z.prototype._eachEntry=function(t,e){var n,r,o=this._instanceConstructor,i=o.resolve;i===x?(n=L(t))===R&&t._state!==k?this._settledAt(t._state,e,t._result):"function"!=typeof n?(this._remaining--,this._result[e]=t):o===ce?(D(r=new o(j),t,n),this._willSettleAt(r,e)):this._willSettleAt(new o(function(e){return e(t)}),e):this._willSettleAt(i(t),e)},Z.prototype._settledAt=function(e,t,n){var r=this.promise;r._state===k&&(this._remaining--,e===P?B(r,n):this._result[t]=n),0===this._remaining&&G(r,this._result)},Z.prototype._willSettleAt=function(e,t){var n=this;z(e,void 0,function(e){return n._settledAt(C,t,e)},function(e){return n._settledAt(P,t,e)})},ce.all=function(e){return new Z(this,e).promise},ce.race=function(o){var i=this;return r(o)?new i(function(e,t){for(var n=o.length,r=0;r<n;r++)i.resolve(o[r]).then(e,t)}):new i(function(e,t){return t(new TypeError("You must pass an array to race."))})},ce.resolve=x,ce.reject=function(e){var t=new this(j);return B(t,e),t},ce._setScheduler=function(e){c=e},ce._setAsap=function(e){a=e},ce._asap=a,ce.prototype={constructor:ce,then:R,catch:function(e){return this.then(null,e)}},ae(),ce.polyfill=ae,ce.Promise=ce}()}).call(this,fe(67),fe(20))},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:c}catch(e){r=c}}();var u,s=[],l=!1,f=-1;function p(){l&&u&&(l=!1,u.length?s=u.concat(s):f=-1,s.length&&d())}function d(){if(!l){var e=a(p);l=!0;for(var t=s.length;t;){for(u=s,s=[];++f<t;)u&&u[f].run();f=-1,t=s.length}u=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===c||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new h(e,t)),1!==s.length||l||a(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t){},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){n(71);var r=n(39);e.exports=r("Array","includes")},function(e,t,n){"use strict";var r=n(36),o=n(33).includes,i=n(37);r({target:"Array",proto:!0,forced:!n(38)("indexOf",{ACCESSORS:!0,1:0})},{includes:function(e,t){return o(this,e,1<arguments.length?t:void 0)}}),i("includes")},,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return OpenStadComponentLightbox});var _component_index_jsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0);function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(n){var r=_isNativeReflectConstruct();return function(){var e,t=_getPrototypeOf(n);return _possibleConstructorReturn(this,r?(e=_getPrototypeOf(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments))}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var OpenStadComponentLightbox=function(_OpenStadComponent){_inherits(OpenStadComponentLightbox,_OpenStadComponent);var _super=_createSuper(OpenStadComponentLightbox);function OpenStadComponentLightbox(e){var t;return _classCallCheck(this,OpenStadComponentLightbox),(t=_super.call(this,e)).state={images:[],startIndex:0},t.recalcSizes=t.recalcSizes.bind(_assertThisInitialized(t)),t}return _createClass(OpenStadComponentLightbox,[{key:"componentDidMount",value:function(){var t=this;t.showLightBoxListener=function(e){t.showLightbox(e.detail)},document.addEventListener("osc-show-light-box",t.showLightBoxListener),document.body.appendChild(this.instance)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("osc-show-light-box",this.showLightBoxListener)}},{key:"showLightbox",value:function showLightbox(data){var self=this,aspectRatio;try{aspectRatio=eval(data.aspectRatio.replace&&data.aspectRatio.replace("x","/"))}catch(e){}"number"!=typeof aspectRatio&&(aspectRatio=16/9),self.setState({images:data.images,startIndex:data.startIndex,aspectRatio:aspectRatio},function(){self.instance.style.display="block",self.recalcSizes()}),window.addEventListener("resize",self.recalcSizes)}},{key:"hideLightbox",value:function(){this.instance.style.display="none",window.removeEventListener("resize",this.recalcSizes)}},{key:"showImage",value:function(e,t){e.stopPropagation(),this.mainImage.src=t}},{key:"recalcSizes",value:function(){var e,t,n,r,o,i,c=this;c.mainContainer&&((e=c.mainContainer.offsetWidth)/(t=c.mainContainer.offsetHeight)>c.state.aspectRatio?(n=.8*t,c.mainImageContainer.style.height=n+"px",c.mainImageContainer.style.width=c.state.aspectRatio*n+"px",c.mainImageContainer.style.top=(t-n)/2+"px",c.mainImageContainer.style.left=(e-c.state.aspectRatio*n)/2+"px"):(r=e,c.mainImageContainer.style.width=r+"px",c.mainImageContainer.style.height=1/c.state.aspectRatio*r+"px",c.mainImageContainer.style.top=(t-1/c.state.aspectRatio*r)/2+"px",c.mainImageContainer.style.left=0),c.mainImage.style.width=c.mainImageContainer.style.width,c.mainImage.style.height=c.mainImageContainer.style.height,o=c.state.aspectRatio*c.navigationContainer.offsetHeight,(i=c.state.images.length*o+20*c.state.images.length)>c.navigationContainer.offsetWidth&&(i=c.navigationContainer.offsetWidth,o=i/c.state.images.length-20),c.navigationContainer.style.width=i+"px",c.state.images.map(function(e,t){var n=parseInt(o);c["lighbox-image-container-".concat(t)].style.width=n+"px",c["lighbox-image-container-".concat(t)].style.height=parseInt(1/c.state.aspectRatio*n)+"px",c["lighbox-image-".concat(t)].style.width=c["lighbox-image-container-".concat(t)].style.width,c["lighbox-image-".concat(t)].style.height=c["lighbox-image-container-".concat(t)].style.height}))}},{key:"getImageSrc",value:function(e){var t=e;return"object"==_typeof(e)&&e.src&&(t=e.src),t}},{key:"render",value:function(){var e=this,r=this;return React.createElement("div",{className:"osc-lightbox",onClick:function(){e.hideLightbox()},ref:function(e){return r.instance=e}},React.createElement("div",{className:"osc-close-button",onClick:function(e){return r.hideLightbox(e)}}),React.createElement("div",{className:"osc-lightbox-main-container",ref:function(e){return r.mainContainer=e}},React.createElement("div",{className:"osc-image-container",ref:function(e){return r.mainImageContainer=e}},React.createElement("img",{src:r.state.images[r.state.startIndex]&&r.getImageSrc(r.state.images[r.state.startIndex]),ref:function(e){return r.mainImage=e}}))),React.createElement("div",{className:"osc-lightbox-navigation-container"},React.createElement("div",{className:"osc-lightbox-navigation",ref:function(e){return r.navigationContainer=e}},r.state.images.map(function(t,n){return React.createElement("div",{className:"osc-image-container",style:{backgroundImage:"url(".concat(r.getImageSrc(t),")")},onClick:function(e){return r.showImage(e,r.getImageSrc(t))},key:"lighbox-image-container-".concat(n),ref:function(e){return r["lighbox-image-container-".concat(n)]=e}},React.createElement("img",{src:r.getImageSrc(t),ref:function(e){return r["lighbox-image-".concat(n)]=e}}))}))))}}]),OpenStadComponentLightbox}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_0__.a)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d}),n.d(t,"PreviousNextButtonBlock",function(){return d});n(11);var r=n(2),o=n.n(r),i=n(6),c=n.n(i),a=(n(105),n(0));function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(i){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=p(i);return t=c?(e=p(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==u(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(o,a["a"]);var e,t,n,r=f(o);function o(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),r.call(this,e,{})}return e=o,(t=[{key:"render",value:function(){var e,t,n=this,r=this.props.previousAction||this.config.previousAction,o=this.props.previousUrl||this.config.previousUrl,i=this.props.previousIsDisabled||this.config.previousIsDisabled,c=this.props.previousLabel||this.config.previousLabel;o&&(r=function(){document.location.href="".concat(o)}),r&&(e=React.createElement("div",{className:"osc-previous-button".concat(i?" osc-disabled":""),onClick:function(e){return r(e)}},c));var a=this.props.nextAction||this.config.nextAction,u=this.props.nextUrl||this.config.nextUrl,s=this.props.nextIsDisabled||this.config.nextIsDisabled,l=this.props.nextLabel||this.config.nextLabel;return u&&(a=function(){document.location.href="".concat(u)}),a&&(t=React.createElement("div",{className:"osc-next-button".concat(s?" osc-disabled":""),onClick:function(e){return a(e)}},l)),React.createElement("div",{className:"osc-previous-next-button-block",ref:function(e){return n.instance=e}},e,t)}}])&&s(e.prototype,t),n&&s(e,n),o}();d.renderElement=function(e,t){var n=e.attributes;c.a.render(o.a.createElement(d,{attributes:n,config:t}),e)}},,,function(e,t,n){},function(e,t,n){},,,,function(e,t,n){"use strict";n.r(t);n(11),n(102);var r=n(2),o=n.n(r),i=n(6),c=n.n(i),a=(n(104),n(73));n.d(t,"default",function(){return a.a}),n.d(t,"Lightbox",function(){return a.a}),a.a.renderElement=function(e,t){var n=e.attributes;c.a.render(o.a.createElement(a.a,{attributes:n,config:t}),e)}},,,,,,,function(e,t,n){function r(d){var h=1==d,m=2==d,y=3==d,g=4==d,v=6==d,b=5==d||v;return function(e,t,n,r){for(var o,i,c=O(e),a=E(c),u=w(t,n,3),s=S(a.length),l=0,f=r||R,p=h?f(e,s):m?f(e,0):void 0;l<s;l++)if((b||l in a)&&(i=u(o=a[l],l,c),d))if(h)p[l]=i;else if(i)switch(d){case 3:return!0;case 5:return o;case 6:return l;case 2:x.call(p,o)}else if(g)return!1;return v?-1:y||g?g:p}}var w=n(46),E=n(42),O=n(99),S=n(45),R=n(100),x=[].push;e.exports={forEach:r(0),map:r(1),filter:r(2),some:r(3),every:r(4),find:r(5),findIndex:r(6)}},,,,function(e,t){!function(){if("undefined"!=typeof window)try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default")}catch(e){function t(e,t){var n,r;return(t=t||{}).bubbles=!!t.bubbles,t.cancelable=!!t.cancelable,(n=document.createEvent("CustomEvent")).initCustomEvent(e,t.bubbles,t.cancelable,t.detail),r=n.preventDefault,n.preventDefault=function(){r.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},n}t.prototype=window.Event.prototype,window.CustomEvent=t}}()},function(e,t,n){var r=n(44);e.exports=function(e){return Object(r(e))}},function(e,t,n){var r=n(10),o=n(101),i=n(47)("species");e.exports=function(e,t){var n;return o(e)&&("function"==typeof(n=e.constructor)&&(n===Array||o(n.prototype))||r(n)&&null===(n=n[i]))&&(n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},function(e,t,n){var r=n(43);e.exports=Array.isArray||function(e){return"Array"==r(e)}},function(e,t,n){n(103);var r=n(39);e.exports=r("Array","findIndex")},function(e,t,n){"use strict";var r=n(36),o=n(94).findIndex,i=n(37),c=n(38),a="findIndex",u=!0,s=c(a);a in[]&&Array(1)[a](function(){u=!1}),r({target:"Array",proto:!0,forced:u||!s},{findIndex:function(e,t){return o(this,e,1<arguments.length?t:void 0)}}),i(a)},function(e,t,n){},function(e,t,n){},,,,function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return ae}),n.d(t,"ChoicesGuide",function(){return ae}),n.d(t,"ChoicesGuideResult",function(){return ve});n(11),n(113),n(98);var r=n(2),o=n.n(r),i=n(6),c=n.n(i),a=(n(116),n(4)),u=n.n(a),s=n(0),l=n(1),w=n(19),E=n(5);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(i){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=m(i);return t=c?(e=m(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==O(r)&&"function"!=typeof r?h(n):r}}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(o,s["a"]);var e,t,n,r=d(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=r.call(this,e)).config.aspectRatio=t.config.aspectRatio||"16x9",t.questionId=e.data.id,t.state={value:50,isAnswered:!1},t.onChangeHandler=t.onChangeHandler.bind(h(t)),t.showLightbox=t.showLightbox.bind(h(t)),t}return e=o,(t=[{key:"onChangeHandler",value:function(e){var t=this,n={value:e,isAnswered:!0,error:void 0};this.setState(n,function(){t.liveUpdates()})}},{key:"isValid",value:function(){return!(void 0===(this.props.data||{}).value&&!this.state.isAnswered)||(this.setState({error:"Je hebt nog geen keuze gemaakt"}),!1)}},{key:"getAnswer",value:function(){if(this.state.isAnswered){var e,t=this.props.data||{},n=t.dimensions;try{n=JSON.parse(n)}catch(e){}return n=n||["x"],"number"==typeof this.state.value||"string"==typeof this.state.value?(e={},n.includes("x")&&(e.x=this.state.value),n.includes("y")&&(e.y=this.state.value),n.includes("z")&&(e.z=this.state.value)):(e={},n.includes("x")&&(e.x=this.state.value.x),n.includes("y")&&(e.y=this.state.value.y),n.includes("z")&&(e.z=this.state.value.z)),e}}},{key:"liveUpdates",value:function(){var e=new window.CustomEvent("osc-choices-guide-live-updates");document.dispatchEvent(e)}},{key:"showLightbox",value:function(t){var e=this.props.data||{},n=[e.values&&e.values.A&&e.values.A.questionImage||"",e.values&&e.values.B&&e.values.B.questionImage||""],r=n.findIndex(function(e){return e==t}),o=new window.CustomEvent("osc-show-light-box",{detail:{images:n,startIndex:r,aspectRatio:this.config.aspectRatio}});document.dispatchEvent(o)}},{key:"render",value:function(){var o=this,i=this,c=i.props.data||{},e=!1;i.state.error&&(e=!0);var t=i.state.isAnswered,n="object"==O(c.value)?c.value.x:void 0!==c.value?c.value:"not defined";"not defined"===n?n=this.state.value:t=!0;var r,a=null,u=c.images;u&&(Array.isArray(u)||(u=[u]),r=u[0],a=React.createElement("div",{className:"osc-question-image-container"},React.createElement(w.Image,{config:{aspectRatio:i.config.aspectRatio},image:r})));var s=React.createElement("div",{className:"osc-question-description"},React.createElement("div",{className:"osc-question-description-text",dangerouslySetInnerHTML:{__html:c.description}})),l=null;switch(c.type){case"continuous":l=React.createElement("div",{className:"osc-question-selector"},React.createElement(E.a.Slider,{min:"0",max:"100",step:"1",value:n,className:"osc-question-selector-slider",config:{},touched:t,onChange:function(e){return i.onChangeHandler(e)},ref:function(e){return i.selector=e}}),React.createElement("div",{className:"osc-question-selector-minlabel",dangerouslySetInnerHTML:{__html:c.minLabel}}),React.createElement("div",{className:"osc-question-selector-maxlabel",dangerouslySetInnerHTML:{__html:c.maxLabel}}));break;case"a-to-b":var f=c.values&&c.values.A&&c.values.A.label||"A",p=c.values&&c.values.B&&c.values.B.label||"B",d=c.values&&c.values.A&&c.values.A.questionText,h=c.values&&c.values.B&&c.values.B.questionText,m=null,y=null;d&&h&&(m=React.createElement("div",{className:"osc-question-description-text"},React.createElement("div",{className:"osc-question-description-label"},f),React.createElement("div",{className:"osc-question-description-labeled-text"},d)),y=React.createElement("div",{className:"osc-question-description-text"},React.createElement("div",{className:"osc-question-description-label"},p),React.createElement("div",{className:"osc-question-description-labeled-text"},h)),s=React.createElement("div",{className:"osc-question-description"},React.createElement("div",{className:"osc-question-description-text",dangerouslySetInnerHTML:{__html:c.description}}),m,y));var g=c.values&&c.values.A&&c.values.A.questionImage,v=c.values&&c.values.B&&c.values.B.questionImage;g&&v&&(s=React.createElement("div",{className:"osc-question-description"},React.createElement("div",{className:"osc-question-description-text",dangerouslySetInnerHTML:{__html:c.description}}),React.createElement("div",{className:"osc-question-description-image-container osc-question-description-image-container-a"},React.createElement("div",{className:"osc-question-description-label osc-question-description-label-a"},f),React.createElement("div",{className:"osc-question-image-container osc-question-image-aspect-".concat(i.config.aspectRatio)},React.createElement(w.Image,{config:{aspectRatio:i.config.aspectRatio},image:g,onClick:function(){return i.showLightbox(g)}}))),React.createElement("div",{className:"osc-question-description-image-container osc-question-description-image-container-b"},React.createElement("div",{className:"osc-question-description-label osc-question-description-label-b"},p),React.createElement("div",{className:"osc-question-image-container osc-question-image-aspect-".concat(i.config.aspectRatio)},React.createElement(w.Image,{config:{aspectRatio:i.config.aspectRatio},image:v,onClick:function(){return i.showLightbox(v)}}))),React.createElement("div",{style:{clear:"both",height:15}}),m,y)),l=React.createElement("div",{className:"osc-question-selector"},React.createElement("div",{className:"osc-question-selector-label-a"},f),React.createElement("div",{className:"osc-question-selector-label-b"},p),React.createElement(E.a.Slider,{min:"0",max:"100",step:"1",value:n,className:"osc-question-selector-slider",config:{},touched:t,onChange:function(e){return i.onChangeHandler(e)},ref:function(e){return i.selector=e}}),React.createElement("div",{className:"osc-question-selector-minlabel",dangerouslySetInnerHTML:{__html:c.minLabel}}),React.createElement("div",{className:"osc-question-selector-maxlabel",dangerouslySetInnerHTML:{__html:c.maxLabel}}));break;case"enum-radio":l=React.createElement("div",{className:"osc-question-selector"},c.values&&c.values.map(function(t,e){var n=parseInt(1e6*Math.random()),r=!1;"object"==O(c.value)?(r=!0,Object.keys(c.value).forEach(function(e){c.value[e]!==t.value[e]&&(r=!1)})):c.value===t.value&&(r=!0);"undefined"!=c.value?c.value:o.state.value;return React.createElement("div",{key:"div-value-".concat(n),className:"osc-radio-container"},React.createElement("div",{className:"osc-radio-input".concat(r?" osc-radio-input-checked":"")},React.createElement("input",{name:"enum-radio-".concat(c.id),type:"radio",onChange:function(){return i.onChangeHandler(t.value)},key:"button-value-".concat(n)})),React.createElement("div",{className:"osc-radio-text"},t.text))}));break;case"enum-buttons":l=React.createElement("div",{className:"osc-question-selector"},c.values&&c.values.map(function(e,t){return React.createElement("button",{onClick:function(){return i.onChangeHandler(e.value)},key:"button-value-".concat(t)},e.text)}));break;default:l=React.createElement("div",null,"Type ",c.type," is (nog) niet geimplementeerd.")}var b=null;return e&&(b=React.createElement("div",{className:"osc-error-text"},i.state.error)),React.createElement("div",{id:i.props.config.divId,className:"osc-question osc-question-".concat(c.type).concat(e?" osc-error":"")},a,React.createElement("div",{className:"osc-question-content",id:i.props.config.divId+"-content"},React.createElement("h3",{className:"osc-question-title"}," ",c.title),s,l,b))}}])&&f(e.prototype,t),n&&f(e,n),o}();function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function b(o){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?v(Object(i),!0).forEach(function(e){var t,n,r;t=o,r=i[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):v(Object(i)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(i,e))})}return o}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(i){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=_(i);return t=c?(e=_(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==g(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var j=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(o,s["a"]);var e,t,n,r=x(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=r.call(this,e)).noOfQuestionsToShow=t.config.noOfQuestionsToShow||1,t.questionElements=[],t.state={currentQuestion:0,values:{}},t}return e=o,(t=[{key:"componentDidMount",value:function(){}},{key:"isValid",value:function(){var n=this,r=!0,e=n.props.data.questions.slice(n.state.currentQuestion,n.state.currentQuestion+n.noOfQuestionsToShow),o=!1;return e.forEach(function(e,t){n.questionElements[t].isValid()||(o||setTimeout(function(){document.querySelector("#".concat(n.questionElements[t].config.divId,"-content")).scrollIntoView({behavior:"smooth"})},250),r=!(o=!0))}),r}},{key:"getAnswers",value:function(){var r=this,o=u()({},this.props.data&&this.props.data.values,r.state.values);return r.props.data&&r.props.data.questions.forEach(function(t,e){var n=r.questionElements.find(function(e){return e&&e.questionId==t.id});n&&void 0!==n.getAnswer()&&(o[t.id]=n.getAnswer())}),r.setState({values:o}),o}},{key:"gotoNextQuestion",value:function(){if(this.isValid()){var e=this.state.currentQuestion+this.noOfQuestionsToShow;return e>=this.props.data.questions.length?(e=0,this.setState({currentQuestion:e}),{isReady:!0,currentQuestion:e}):(this.setState({currentQuestion:e}),{isReady:!1,currentQuestion:e})}}},{key:"gotoPreviousQuestion",value:function(){var e=this.state.currentQuestion-this.noOfQuestionsToShow;return e<0?(e=0,this.setState({currentQuestion:e}),{isBeginning:!0,currentQuestion:e}):(this.setState({currentQuestion:e}),{isBeginning:!1,currentQuestion:e})}},{key:"render",value:function(){var n=this,e=n.props.data||{questions:[]},t=e.questions.slice(n.state.currentQuestion,n.state.currentQuestion+n.noOfQuestionsToShow),r=u()({},this.props.data&&this.props.data.values,n.state.values),o=React.createElement("div",{className:"osc-questions"},t.map(function(e,t){return React.createElement(y,{config:b(b({},n.config),{},{divId:"osc-question-".concat(e.id)}),data:b(b({},e),{},{value:r[e.id]}),key:"question-".concat(e.id),ref:function(e){n.questionElements[t]=e}})}));return React.createElement("div",{id:this.id,className:"osc-question-group"},React.createElement("h3",{className:"osc-question-group-title"},e.title),React.createElement("div",{className:"osc-question-group-description",dangerouslySetInnerHTML:{__html:e.description}}),o)}}])&&S(e.prototype,t),n&&S(e,n),o}();function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(i){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=T(i);return t=c?(e=T(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==k(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var A=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(o,s["a"]);var e,t,n,r=I(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),null==(t=r.call(this,e,{type:"default",withPercentage:!1,minLabel:null,maxLabel:null,barColor:{default:"#bed200",min:"#ff9100",max:"#bed200"}})).config.barColor.min&&(t.config.barColor.min="#ff9100"),null==t.config.barColor.max&&(t.config.barColor.max="#bed200"),t.answers=e.data&&e.data.answers||{},Object.keys(t.answers).forEach(function(e){t.answers[e]==parseInt(t.answers[e])&&(t.answers[e]={x:parseInt(t.answers[e])})}),t.state={score:t.props.score||0},t}return e=o,(t=[{key:"getTitle",value:function(){return this.props.data&&this.props.data.title}},{key:"calculateScore",value:function(e){var o=this,i=this.answers,c=e||{},a=(Object.keys(i).length,{});Object.keys(i).forEach(function(e){var t=i[e]||{},n=c[e]||(o.config.startWithAllQuestionsAnswered?{x:50,y:50,z:50}:{}),r=a[e]={};["x","y","z"].forEach(function(e){if(void 0!==t[e]&&void 0!==n[e])return r[e]=100-Math.abs(t[e]-n[e])})});var n={};return Object.keys(i).forEach(function(t){["x","y","z"].forEach(function(e){n[e]=n[e]||{score:[],noOfAnswers:0},void 0!==a[t][e]&&n[e].score.push(a[t][e]),i[t]&&void 0!==i[t][e]&&n[e].noOfAnswers++})}),Object.keys(n).forEach(function(e){n[e]=n[e].score.length?n[e].score.reduce(function(e,t){return e+t})/n[e].noOfAnswers:void 0}),this.setState({score:n}),n}},{key:"render",value:function(){var e=this,t=e.state.score,n=null;switch(this.config.type){case"plane":var r,o,i=null,c=this.props.data&&this.props.data.images;return c&&(Array.isArray(c)||(c=[c]),"object"==k(o=r=c[0])&&(o=r.src),i=React.createElement("img",{className:"osc-choice-plane-background-image",src:o,style:{width:this.props.baseSize/2,height:this.props.baseSize/2}})),React.createElement("div",{className:"osc-choice-plane",style:{width:this.props.baseSize/2,height:this.props.baseSize/2}},i);case"minus-to-plus-100":var a=null,u=parseInt(2*(t.x-50));e.config.withPercentage&&(a=React.createElement("div",{className:"osc-percentage"},u,"%"));var s=e.config.barColor.max.match(/#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/i),l=e.config.barColor.min.match(/#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/i),f=parseInt(l[1],16)+(parseInt(s[1],16)-parseInt(l[1],16))*(t.x/100),p=parseInt(l[2],16)+(parseInt(s[2],16)-parseInt(l[2],16))*(t.x/100),d=parseInt(l[3],16)+(parseInt(s[3],16)-parseInt(l[3],16))*(t.x/100),h={backgroundColor:"rgb(".concat(f,",").concat(p,",").concat(d,")")};0<=u&&(h.width=u/2+"%",h.left="50%",h.right="auto"),u<0&&(h.width=-u/2+"%",h.left="auto",h.right="50%"),n=React.createElement("div",{className:"osc-choice-default"},React.createElement("h4",null,e.props.data.title),React.createElement("div",{className:"osc-choice-bar osc-from-center".concat(e.config.withPercentage?" osc-with-percentage":"")},React.createElement("div",{className:"osc-choice-bar-progress",style:h})),a);break;case"zero-to-100":default:var m,y=null;e.config.withPercentage&&(m=parseInt(t.x),y=React.createElement("div",{className:"osc-percentage"},m,"%")),h={width:(t.x||0)+"%",backgroundColor:e.config.barColor.default},n=React.createElement("div",{className:"osc-choice-default"},React.createElement("h4",null,e.props.data.title),React.createElement("div",{className:"osc-choice-bar".concat(e.config.withPercentage?" osc-with-percentage":"")},React.createElement("div",{className:"osc-choice-bar-mask"}),React.createElement("div",{className:"osc-choice-bar-progress",style:h})),y)}var g=null;return(e.config.minLabel||e.config.maxLabel)&&(g=React.createElement("div",{className:"osc-minmax-labels"},React.createElement("div",{className:"osc-min-label"},e.config.minLabel),React.createElement("div",{className:"osc-max-label"},e.config.maxLabel))),React.createElement("li",{className:"osc-choice"},n,g)}}])&&C(e.prototype,t),n&&C(e,n),o}();function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function q(o){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?N(Object(i),!0).forEach(function(e){var t,n,r;t=o,r=i[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):N(Object(i)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(i,e))})}return o}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function M(i){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=U(i);return t=c?(e=U(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==L(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var G=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(o,s["a"]);var e,t,n,r=M(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=r.call(this,e,{type:"default",withPercentage:!1,minLabel:null,maxLabel:null})).choiceElements=[],t.state={title:"Je hebt nog geen keuze gemaakt",scores:e.scores,planePos:{x:50,y:50}},t}return e=o,(t=[{key:"componentDidMount",value:function(){var t=this;t.choicesClickListener=function(e){t.setState({random:Math.random()})},document.addEventListener("osc-choices-click",t.choicesClickListener)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("osc-choices-click",self.choicesClickListener)}},{key:"calculateScores",value:function(n){var t={};this.choiceElements.forEach(function(e){t[e.config.divId]=e.calculateScore(n)});var e,r,o={x:50,y:50};return!this.config.type||(e=Object.keys(n)).length&&(o={x:0,y:0},r={x:0,y:0,z:0},e.forEach(function(e){var t=n[e];["x","y","z"].forEach(function(e){void 0!==t[e]&&(o[e]+=parseInt(t[e])||0,r[e]++)})}),o.x=r.x?parseInt(o.x/r.x):void 0,o.y=r.y?parseInt(o.y/r.y):void 0),this.setState({answers:n,scores:t,planePos:o}),{answers:n,scores:t,planePos:o}}},{key:"getPreferedChoice",value:function(e){var n=e.scores,t=e.planePos,r=this,n=n||r.state.scores;switch(r.config.type){case"plane":return(t=t||r.state.planePos).x<50&&t.y<50?r.choiceElements[0]:50<t.x&&t.y<50?r.choiceElements[1]:t.x<50&&50<t.y?r.choiceElements[2]:50<t.x&&50<t.y?r.choiceElements[3]:null;default:var o=Object.keys(n).sort(function(e,t){return n[t].x-n[e].x})[0];return r.choiceElements.find(function(e){return e&&e.config.divId==o})}}},{key:"render",value:function(){var r=this;switch(this.config.type){case"plane":var o=document.querySelector("#".concat(this.divId))&&document.querySelector("#".concat(this.divId)).offsetWidth-1||180,e=(void 0===r.state.planePos.y?50:r.state.planePos.y)*(o/100),t=(void 0===r.state.planePos.x?50:r.state.planePos.x)*(o/100);return React.createElement("div",{id:this.divId,className:"osc-choices osc-choice-plane-plane",ref:function(e){r.planePlaneElement=e}},Object.keys(r.props.choices).map(function(e,t){var n=r.props.choices[e];return React.createElement(A,{config:q({divId:"choice-".concat(n.id)},r.config),data:n,score:r.props.scores&&r.props.scores["choice-".concat(n.id)],key:"choice-".concat(n.id),baseSize:o,ref:function(e){r.choiceElements[t]=e}})}),React.createElement("div",{className:"osc-point",style:{top:e,left:t}}),React.createElement("div",{style:{clear:"both"}}));case"zero-to-100":case"minus-to-plus-100":default:return React.createElement("ul",{className:"osc-choices"},Object.keys(r.props.choices).map(function(e,t){var n=r.props.choices[e];return React.createElement(A,{config:q({divId:"choice-".concat(n.id)},r.config),data:n,score:r.props.scores&&r.props.scores["choice-".concat(n.id)],key:"choice-".concat(n.id),ref:function(e){r.choiceElements[t]=e}})}))}}}])&&F(e.prototype,t),n&&F(e,n),o}();function B(e){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Q(i){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=W(i);return t=c?(e=W(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==B(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function W(e){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var V=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(o,s["a"]);var e,t,n,r=Q(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=r.call(this,e,{siteId:null,loginUrl:null,noOfQuestionsToShow:1,api:{url:null}})).state={choicesGuideId:t.props.data.choicesGuideId,currentTarget:{},busy:!1},t.onFinished=t.props.onFinished,t}return e=o,(t=[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(){var n=this,e="".concat(n.config.api&&n.config.api.url,"/api/site/").concat(n.config.siteId,"/choicesguide/").concat(n.config.choicesGuideId,"?includeChoices=1&includeQuestions=1"),t=l.a.api.getHeaders();fetch(e,{headers:t}).then(function(e){return e.json()}).then(function(e){var t={};t.choicesGuideId=e.id,t.title=e.title,t.description=e.description,t.images=e.images,t.choices=e.choices||[],t.questionGroups=e.questiongroups||[],t.busy=!1,n.setState(t,function(){n.setCurrentForm({what:"choices-guide"})})}).catch(function(e){console.log("Niet goed"),console.log(e)})}},{key:"handleFieldChange",value:function(t){var n=this.state.currentTarget;Object.keys(t).forEach(function(e){n[e]=t[e]}),this.setState({currentTarget:n})}},{key:"setCurrentForm",value:function(t){var e,n,r;switch(t.what){case"choices-guide":t.title=this.state.title,t.description=this.state.description,t.images=this.state.images?JSON.stringify(this.state.images):"";break;case"choice":n=t.questionGroupId?(e=this.state.questionGroups.find(function(e){return e.id==t.questionGroupId})||{}).choices&&e.choices.find(function(e){return e.id==t.choiceId})||{}:this.state.choices.find(function(e){return e.id==t.choicesId})||{},t.title=n.title,t.description=n.description,t.images=n.images?JSON.stringify(n.images):"",t.answers=n.answers?JSON.stringify(n.answers):"",t.seqnr=n.seqnr||0;break;case"question-group":e=this.state.questionGroups.find(function(e){return e.id==t.questionGroupId})||{},t.title=e.title,t.description=e.description,t.images=e.images?JSON.stringify(e.images):"",t.seqnr=e.seqnr||0;break;case"question":r=(e=this.state.questionGroups.find(function(e){return e.id==t.questionGroupId})||{}).questions&&e.questions.find(function(e){return e.id==t.questionId})||{},t.title=r.title,t.description=r.description,t.images=r.images?JSON.stringify(r.images):"",t.minLabel=r.minLabel,t.maxLabel=r.maxLabel,t.type=r.type,t.dimensions=r.dimensions,t.values=r.values?JSON.stringify(r.values):"",t.seqnr=r.seqnr||0}this.setState({currentTarget:t})}},{key:"submitForm",value:function(){var o=this;o.setState({busy:!0},function(){var e,t,n;if(0,!o.config.user||!o.config.user.role||"admin"!=o.config.user.role)return alert("Je mag dit niet");switch(o.state.currentTarget.what){case"choices-guide":n=o.state.choicesGuideId,e="".concat(o.config.api&&o.config.api.url,"/api/site/").concat(o.config.siteId,"/choicesguide"),t={title:o.state.currentTarget.title,description:o.state.currentTarget.description,images:o.state.currentTarget.images};break;case"choice":n=o.state.currentTarget.choiceId,e=o.state.currentTarget.questionGroupId?"".concat(o.config.api&&o.config.api.url,"/api/site/").concat(o.config.siteId,"/choicesguide/").concat(o.state.choicesGuideId,"/questiongroup/").concat(o.state.currentTarget.questionGroupId,"/choice"):"".concat(o.config.api&&o.config.api.url,"/api/site/").concat(o.config.siteId,"/choicesguide/").concat(o.state.choicesGuideId,"/choice"),t={title:o.state.currentTarget.title,description:o.state.currentTarget.description,images:o.state.currentTarget.images,answers:o.state.currentTarget.answers?JSON.parse(o.state.currentTarget.answers):"",seqnr:o.state.currentTarget.seqnr};break;case"question-group":n=o.state.currentTarget.questionGroupId,e="".concat(o.config.api&&o.config.api.url,"/api/site/").concat(o.config.siteId,"/choicesguide/").concat(o.state.choicesGuideId,"/questiongroup"),t={title:o.state.currentTarget.title,description:o.state.currentTarget.description,images:o.state.currentTarget.images,seqnr:o.state.currentTarget.seqnr};break;case"question":n=o.state.currentTarget.questionId,e="".concat(o.config.api&&o.config.api.url,"/api/site/").concat(o.config.siteId,"/choicesguide/").concat(o.state.choicesGuideId,"/questiongroup/").concat(o.state.currentTarget.questionGroupId,"/question"),t={title:o.state.currentTarget.title,description:o.state.currentTarget.description,images:o.state.currentTarget.images,minLabel:o.state.currentTarget.minLabel,maxLabel:o.state.currentTarget.maxLabel,type:o.state.currentTarget.type,dimensions:o.state.currentTarget.dimensions,values:o.state.currentTarget.values?JSON.parse(o.state.currentTarget.values):"",seqnr:o.state.currentTarget.seqnr}}e+=n?"/".concat(n):"";var r=l.a.api.getHeaders(o.config);fetch(e,{method:n?"PUT":"POST",headers:r,body:JSON.stringify(t)}).then(function(e){if(e.ok)return e.json();throw e.text()}).then(function(e){o.fetchData()}).catch(function(e){e.then(function(e){return console.log(e)}),o.setState({busy:!1})})})}},{key:"deleteElement",value:function(e){var t,n=e.what,r=e.questionGroupId,o=e.choiceId,i=e.questionId,c=e.title,a=this;if(confirm("Je gaat "+n+" "+c+" verwijderen. Weet je het zeker?")){switch(n){case"question-group":t="".concat(a.config.api&&a.config.api.url,"/api/site/").concat(a.config.siteId,"/choicesguide/").concat(a.state.choicesGuideId,"/questiongroup/").concat(r);break;case"choice":t="".concat(a.config.api&&a.config.api.url,"/api/site/").concat(a.config.siteId,"/choicesguide/").concat(a.state.choicesGuideId,"/questiongroup/").concat(r,"/choice/").concat(o);break;case"question":t="".concat(a.config.api&&a.config.api.url,"/api/site/").concat(a.config.siteId,"/choicesguide/").concat(a.state.choicesGuideId,"/questiongroup/").concat(r,"/question/").concat(i)}var u=l.a.api.getHeaders(a.config);fetch(t,{method:"DELETE",headers:u}).then(function(e){if(e.ok)return e.json();throw e.text()}).then(function(e){a.fetchData()}).catch(function(e){e.then(function(e){return console.log(e)}),a.setState({busy:!1})})}}},{key:"render",value:function(){var c=this,e=null,t=null,n=null,r=React.createElement("button",{onClick:function(){c.setCurrentForm({what:"choices-guide"})}},"Terug"),o=React.createElement("button",{onClick:function(){return c.submitForm()}},"Submit");switch(c.state.currentTarget.what){case"choices-guide":e="Bewerk keuzewijzer",t=React.createElement("div",{className:"openstad-form"},React.createElement("h3",null,"Titel"),React.createElement(E.a.InputWithCounter,{key:"x1",config:{inputType:"input",minLength:1,maxLength:1e3},value:c.state.currentTarget.title,onChange:function(e){return c.handleFieldChange({title:e.value})},ref:function(e){c.titleField=e}}),React.createElement("h3",null,"Beschrijving"),React.createElement(E.a.InputWithCounter,{key:"x2",config:{inputType:"textarea",minLength:1,maxLength:1e3},value:c.state.currentTarget.description,onChange:function(e){return c.handleFieldChange({description:e.value})},ref:function(e){return c.descriptionField=e}}),React.createElement("h3",null,"Afbeeldingen"),React.createElement(E.a.Textarea,{key:"i1",config:{},value:c.state.currentTarget.images,onChange:function(e){return c.handleFieldChange({images:e.value})},ref:function(e){return c.imagesField=e}})),n=React.createElement("div",{className:"openstad-form"},React.createElement("h4",null,"Vraaggroepen"),Object.keys(c.state.questionGroups).map(function(e,t){var n,r=c.state.questionGroups[e],o=React.createElement("ul",null,Object.keys(r.questions).map(function(e,t){var n=r.questions[e];return React.createElement("li",null,"(",n.id,") - ",n.title," - ",n.seqnr,"-",React.createElement("a",{href:"#",onClick:function(){return c.setCurrentForm({what:"question",questionGroupId:r.id,questionId:n.id})}},"Bewerk"),"-",React.createElement("a",{href:"#",onClick:function(){return c.deleteElement({what:"question",questionGroupId:r.id,questionId:n.id,title:n.title})}},"Verwijder"))}),React.createElement("li",null,React.createElement("a",{href:"#",onClick:function(){return c.setCurrentForm({what:"question",questionGroupId:r.id})}},"Nieuwe vraag"))),i=React.createElement("ul",null,Object.keys(r.choices).map(function(e,t){var n=r.choices[e];return React.createElement("li",null,n.title," - ",n.seqnr,"- ",React.createElement("a",{href:"#",onClick:function(){return c.setCurrentForm({what:"choice",questionGroupId:r.id,choiceId:n.id})}},"Bewerk"),"- ",React.createElement("a",{href:"#",onClick:function(){return c.deleteElement({what:"choice",questionGroupId:r.id,choiceId:n.id,title:n.title})}},"Verwijder"))}),React.createElement("li",null,React.createElement("a",{href:"#",onClick:function(){return c.setCurrentForm({what:"choice",questionGroupId:r.id})}},"Nieuwe keuze")));return 0==Object.keys(r.choices).length&&0==Object.keys(r.questions).length&&(n=React.createElement("a",{href:"#",onClick:function(){return c.deleteElement({what:"question-group",questionGroupId:r.id,title:r.title})}},"Verwijder")),React.createElement("div",null,r.title," - ",r.seqnr,"- ",React.createElement("a",{href:"#",onClick:function(){return c.setCurrentForm({what:"question-group",questionGroupId:r.id})}},"Bewerk"),"- ",n,o,i)}),React.createElement("a",{href:"#",onClick:function(){return c.setCurrentForm({what:"question-group"})}},"Nieuwe groep")),r=React.createElement("button",{onClick:function(){c.onFinished&&c.onFinished()}},"Terug");break;case"choice":e="Bewerk Keuze",t=React.createElement("div",null,React.createElement("h3",null,"Titel"),React.createElement(E.a.InputWithCounter,{config:{inputType:"input",minLength:1,maxLength:1e3},value:c.state.currentTarget.title,onChange:function(e){return c.handleFieldChange({title:e.value})},ref:function(e){return c.titleField=e}}),React.createElement("h3",null,"Beschrijving"),React.createElement(E.a.InputWithCounter,{config:{inputType:"textarea",minLength:1,maxLength:1e3},value:c.state.currentTarget.description,onChange:function(e){return c.handleFieldChange({description:e.value})},ref:function(e){return c.descriptionField=e}}),React.createElement("h3",null,"Afbeeldingen"),React.createElement(E.a.Textarea,{key:"i2",config:{},value:c.state.currentTarget.images,onChange:function(e){return c.handleFieldChange({images:e.value})},ref:function(e){return c.imagesField=e}}),React.createElement("h3",null,"Antwoorden"),React.createElement(E.a.Text,{config:{},value:c.state.currentTarget.answers,onChange:function(e){return c.handleFieldChange({answers:e.value})},ref:function(e){return c.answersField=e}}),React.createElement("h3",null,"Volgorde nummer"),React.createElement(E.a.Text,{config:{},value:c.state.currentTarget.seqnr,onChange:function(e){return c.handleFieldChange({seqnr:e.value})},ref:function(e){return c.seqnrField=e}}));break;case"question-group":e="Bewerk Vragengroep",t=React.createElement("div",{className:"openstad-form"},React.createElement("h3",null,"Titel"),React.createElement(E.a.InputWithCounter,{config:{inputType:"input",minLength:1,maxLength:1e3},value:c.state.currentTarget.title,onChange:function(e){return c.handleFieldChange({title:e.value})},ref:function(e){return c.titleField=e}}),React.createElement("h3",null,"Beschrijving"),React.createElement(E.a.InputWithCounter,{config:{inputType:"textarea",minLength:1,maxLength:1e3},value:c.state.currentTarget.description,onChange:function(e){return c.handleFieldChange({description:e.value})},ref:function(e){return c.descriptionField=e}}),React.createElement("h3",null,"Afbeeldingen"),React.createElement(E.a.Textarea,{key:"i3",config:{},value:c.state.currentTarget.images,onChange:function(e){return c.handleFieldChange({images:e.value})},ref:function(e){return c.imagesField=e}}),React.createElement("h3",null,"Volgorde nummer"),React.createElement(E.a.Text,{config:{},value:c.state.currentTarget.seqnr,onChange:function(e){return c.handleFieldChange({seqnr:e.value})},ref:function(e){return c.seqnrField=e}}));break;case"question":e="Bewerk Vraag ".concat(c.state.currentTarget.questionId),t=React.createElement("div",{className:"openstad-form"},React.createElement("h3",null,"Titel"),React.createElement(E.a.InputWithCounter,{config:{inputType:"input",minLength:1,maxLength:1e3},value:c.state.currentTarget.title,onChange:function(e){return c.handleFieldChange({title:e.value})},ref:function(e){return c.titleField=e}}),React.createElement("h3",null,"Beschrijving"),React.createElement(E.a.InputWithCounter,{config:{inputType:"textarea",minLength:1,maxLength:1e3},value:c.state.currentTarget.description,onChange:function(e){return c.handleFieldChange({description:e.value})},ref:function(e){return c.descriptionField=e}}),React.createElement("h3",null,"Afbeeldingen"),React.createElement(E.a.Textarea,{key:"i4",config:{},value:c.state.currentTarget.images,onChange:function(e){return c.handleFieldChange({images:e.value})},ref:function(e){return c.imagesField=e}}),React.createElement("h3",null,"Label minimale waarde"),React.createElement(E.a.InputWithCounter,{config:{inputType:"input",minLength:1,maxLength:1e3},value:c.state.currentTarget.minLabel,onChange:function(e){return c.handleFieldChange({minLabel:e.value})},ref:function(e){return c.minLabelField=e}}),React.createElement("h3",null,"Label maximale waarde"),React.createElement(E.a.InputWithCounter,{config:{inputType:"input",minLength:1,maxLength:1e3},value:c.state.currentTarget.maxLabel,onChange:function(e){return c.handleFieldChange({maxLabel:e.value})},ref:function(e){return c.maxLabelField=e}}),React.createElement("h3",null,"Type"),React.createElement("select",{key:"dezemoetnogweg".concat(c.state.currentTarget.questionGroupId),value:c.state.currentTarget.type,onChange:function(){return c.handleFieldChange({type:c.typeField.value})},ref:function(e){return c.typeField=e}},React.createElement("option",{value:"continuous"},"continue"),React.createElement("option",{value:"a-to-b"},"van a naar b"),React.createElement("option",{value:"enum-buttons"},"multiple choice - buttons"),React.createElement("option",{value:"enum-radio"},"multiple choice - radio")),React.createElement("h3",null,"Dimensions"),React.createElement(E.a.Text,{config:{},value:c.state.currentTarget.dimensions,onChange:function(e){return c.handleFieldChange({dimensions:e.value})},ref:function(e){return c.dimensionsField=e}}),React.createElement("h3",null,"Waarden"),React.createElement(E.a.Textarea,{config:{},value:c.state.currentTarget.values,onChange:function(e){return c.handleFieldChange({values:e.value})},ref:function(e){return c.valuesField=e}}),React.createElement("h3",null,"Volgorde nummer"),React.createElement(E.a.Text,{config:{},value:c.state.currentTarget.seqnr,onChange:function(e){return c.handleFieldChange({seqnr:e.value})},ref:function(e){return c.seqnrField=e}}));break;default:r=React.createElement("button",{onClick:function(){c.onFinished&&c.onFinished()}},"Terug"),o=null}return React.createElement("div",{id:this.divId,className:"osc-form".concat(this.state.busy?" osc-busy":"")},React.createElement("h2",null,e),t,React.createElement("br",null),React.createElement("br",null),r,o,n)}}])&&z(e.prototype,t),n&&z(e,n),o}(),J=n(87),K=n(79);function Y(e){var t=e.config,n="".concat(t.api&&t.api.url,"/api/site/").concat(t.siteId,"/choicesguide/").concat(t.choicesGuideId,"?includeChoices=1&includeQuestions=1"),r=l.a.api.getHeaders();return fetch(n,{headers:r}).then(function(e){return e.json()}).then(function(e){return{choicesGuideId:e.id,images:e.images,choicesGuideConfig:e.config,title:e.title,description:e.description,choices:e.choices||[],questionGroups:e.questiongroups||[],status:"active"}})}function $(e){return($="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function X(e){return function(e){if(Array.isArray(e))return Z(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return Z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Z(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ee(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function te(o){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?ee(Object(i),!0).forEach(function(e){var t,n,r;t=o,r=i[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):ee(Object(i)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(i,e))})}return o}function ne(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function re(e,t){return(re=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function oe(i){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=ce(i);return t=c?(e=ce(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==$(r)&&"function"!=typeof r?ie(n):r}}function ie(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ce(e){return(ce=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var ae=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&re(e,t)}(c,s["a"]);var e,t,n,i=oe(c);function c(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c);var n=ie(t=i.call(this,e,{siteId:null,loginUrl:null,noOfQuestionsToShow:1,api:{url:null},choices:{title:{noPreferenceYet:"Je hebt nog geen keuze gemaakt",preference:"<b>Jouw voorkeur:</b>{preferredChoice}",inBetween:"Je staat precies tussen meerdere voorkeuren in"},withPercentage:!1,minLabel:null,maxLabel:null}}));!n.config.aspectRatio&&n.config.choices&&n.config.choices.type&&"plane"==n.config.choices.type&&(n.config.aspectRatio="10x7");var r=l.a.localStorage.get("osc-choices-guide.values")||{},o=l.a.localStorage.get("osc-choices-guide.scores")||{};return n.state={title:"Loading....",questionGroups:[],choices:[],currentQuestionGroupIndex:void 0,currentQuestion:void 0,status:"init",values:r[n.config.choicesGuideId],scores:o[n.config.choicesGuideId]},n.liveUpdates=n.liveUpdates.bind(ie(t)),n.hideEditForm=n.hideEditForm.bind(ie(t)),t}return e=c,(t=[{key:"componentDidMount",value:function(){var t=this;t.liveUpdateListener=function(e){t.liveUpdates(e.detail)},document.addEventListener("osc-choices-guide-live-updates",t.liveUpdateListener),t.fetchData()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("osc-choices-guide-live-updates",self.liveUpdateListener)}},{key:"fetchData",value:function(){var t=this;Y({config:t.config}).then(function(e){t.setState(e,function(){t.startGuide()})}).catch(function(e){console.log("Niet goed"),console.log(e)})}},{key:"startGuide",value:function(){var t=this,e={currentQuestionGroupIndex:0};t.setState(e,function(){t.liveUpdates();var e=new window.CustomEvent("osc-choices-guide-is-ready");document.dispatchEvent(e)})}},{key:"showEditForm",value:function(){this.setState({status:"edit"})}},{key:"hideEditForm",value:function(){var e=l.a.localStorage.get("osc-choices-guide.values")||{},t=l.a.localStorage.get("osc-choices-guide.scores")||{};this.setState({title:"Loading....",questionGroups:[],choices:[],currentQuestionGroupIndex:void 0,status:"init",values:e[this.config.choicesGuideId],scores:t[this.config.choicesGuideId]},function(){this.fetchData()})}},{key:"gotoNextQuestion",value:function(){var e=this,t={};t.values=u()(e.state.values||{},e.questionGroupElement.getAnswers()),e.setState(t),e.choicesElement.calculateScores(t.values),e.userPreference&&e.userPreference.calculateScores();var n=e.questionGroupElement.gotoNextQuestion(),r=n.isReady,o=n.currentQuestion;e.setState({currentQuestion:o},function(){r?e.gotoNextGroup():window.scrollTo(0,0)})}},{key:"gotoPreviousQuestion",value:function(){var e=this;if("result"==this.state.status)return this.gotoPreviousGroup();var t={};t.values=u()(this.state.values||{},this.questionGroupElement.getAnswers()),this.setState(t),this.choicesElement.calculateScores(t.values),self.userPreference&&self.userPreference.calculateScores();var n=this.questionGroupElement.gotoPreviousQuestion(),r=n.isBeginning,o=n.currentQuestion;this.setState({currentQuestion:o},function(){r?e.gotoPreviousGroup():window.scrollTo(0,0)})}},{key:"gotoNextGroup",value:function(){var e=this,t=te({},this.state);t.currentQuestionGroupIndex<t.questionGroups.length-1?(t.values=u()(t.values||{},this.questionGroupElement.getAnswers()),t.currentQuestionGroupIndex++,this.setState(t,function(){e.liveUpdates(),window.scrollTo(0,0)})):this.gotoResult()}},{key:"gotoPreviousGroup",value:function(){var e=this,t={};t.currentQuestionGroupIndex=this.state.currentQuestionGroupIndex-1,"result"==this.state.status&&(t.currentQuestionGroupIndex=this.state.questionGroups.length-1,t.status="active"),this.setState(t,function(){e.liveUpdates(),window.scrollTo(0,0)})}},{key:"gotoResult",value:function(){document.location.href=this.config.afterUrl}},{key:"liveUpdates",value:function(){var n=this,r=u()(n.state.values||{},n.questionGroupElement.getAnswers()),o=n.choicesElement.calculateScores(r).scores;n.userPreference&&n.userPreference.calculateScores(r),n.setState({scores:o,firstAnswerGiven:0<Object.keys(r).length},function(){var e=l.a.localStorage.get("osc-choices-guide.values")||{};e[n.config.choicesGuideId]=r,l.a.localStorage.set("osc-choices-guide.values",e);var t=l.a.localStorage.get("osc-choices-guide.scores")||{};t[n.config.choicesGuideId]=o,l.a.localStorage.set("osc-choices-guide.scores",t),n.updateChoicesTitle()})}},{key:"updateChoicesTitle",value:function(){var e=this.config.choices.title.noPreferenceYet,t=this.choicesElement&&this.choicesElement.getPreferedChoice({});this.state.firstAnswerGiven&&(e=t?this.config.choices.title.preference.replace("{preferredChoice}",t&&t.getTitle(this.state.scores[t.config.divId])||e):this.config.choices.title.inBetween),this.setState({choicesTitle:e})}},{key:"onChoicesClick",value:function(){this.choicesAccordeon.className.match(" osc-closed")?this.choicesAccordeon.className=this.choicesAccordeon.className.replace(" osc-closed"," osc-open"):this.choicesAccordeon.className=this.choicesAccordeon.className.replace(" osc-open"," osc-closed");var e=new window.CustomEvent("osc-choices-click",{detail:{}});document.dispatchEvent(e)}},{key:"render",value:function(){var e,t=this,n=t.state.choices;0<=t.state.currentQuestionGroupIndex&&(e=t.state.questionGroups[t.state.currentQuestionGroupIndex])&&(e.values=t.state.values||{},e&&e.choices&&(n=e.choices));var r=null,o=t.state.images;o&&(Array.isArray(o)||(o=[o]),r=React.createElement(w.Image,{className:"osc-top-image-spacer",width:"100%",image:o[0]}));var i,c,a,u,s,l,f,p,d,h=null;return h="edit"==t.state.status?React.createElement("div",{className:"osc-choices-guide-content"},React.createElement(V,{config:t.config,onFinished:t.hideEditForm,data:te({},t.state)})):"init"==t.state.status?React.createElement("div",{className:"osc-choices-guide-content"},React.createElement("div",{className:"osc-intro"},"Laden...")):(i=React.createElement("div",{id:"osc-choices-container-"+this.divId,className:"osc-choices-container osc-accordeon osc-closed ".concat("osc-type-"+t.config.choices.type),ref:function(e){t.choicesAccordeon=e}},React.createElement("div",{onClick:function(e){return t.onChoicesClick(e)},className:"osc-accordeon-button",dangerouslySetInnerHTML:{__html:t.state.choicesTitle}}),React.createElement("div",{className:"osc-accordeon-content"},React.createElement(G,{config:te(te({},t.config.choices),{},{startWithAllQuestionsAnswered:this.config.startWithAllQuestionsAnswered}),choices:X(n),scores:te({},t.state.scores),firstAnswerGiven:!!t.state.firstAnswerGiven,ref:function(e){t.choicesElement=e},key:"choices"}))),c=React.createElement(j,{config:t.config,data:e,ref:function(e){t.questionGroupElement=e},key:"group".concat(t.state.currentQuestionsGroupIndex)}),a=null,t.config.user&&t.config.user.role&&"admin"==t.config.user.role&&(a=React.createElement("button",{className:"osc-editbutton osc-edit",onClick:function(){return t.showEditForm()}},"Bewerk keuzewijzer")),l=s=u=null,0<t.state.currentQuestionGroupIndex||0<t.state.currentQuestion?(s=function(){t.gotoPreviousQuestion()},l="Terug"):t.config.beforeUrl&&(u=t.config.beforeUrl,l="Introductie"),p=f=null,p="init"==t.state.status?f=null:(f=function(){t.gotoNextQuestion()},"Volgende"),d=null,(l||p)&&(d=React.createElement(K.default,{previousAction:s,previousUrl:u,previousLabel:l,nextAction:f,nextUrl:null,nextLabel:p})),React.createElement("div",{className:"osc-choices-guide-content"},a,i,c,d)),React.createElement("div",{id:this.divId,className:"osc-choices-guide"},React.createElement(J.default,null),r,h)}}])&&ne(e.prototype,t),n&&ne(e,n),c}(),ue=n(110);function se(e){return(se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function le(e){return function(e){if(Array.isArray(e))return fe(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return fe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return fe(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function fe(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function pe(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function de(o){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?pe(Object(i),!0).forEach(function(e){var t,n,r;t=o,r=i[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):pe(Object(i)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(i,e))})}return o}function he(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function me(e,t){return(me=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ye(i){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=ge(i);return t=c?(e=ge(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==se(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function ge(e){return(ge=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var ve=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&me(e,t)}(i,s["a"]);var e,t,n,o=ye(i);function i(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e,{type:"default",submission:{type:"none",requireLoginSettings:{title:"Stemcode",description:"Om te kunnen stemmen vul je de stemcode in die je per post hebt ontvangen. Wij controleren je stemcode op geldigheid. Als dat gelukt is kun je stemmen.",buttonTextLogin:"Vul je stemcode in",buttonTextLoggedIn:"Geldige stemcode",buttonTextAlreadySubmitted:"Ongeldige stemcode",changeLoginLinkText:"Vul een andere stemcode in",loggedInMessage:"Het controleren van je stemcode is gelukt! Klik op onderstaande knop om je keuze in te sturen.",alreadySubmittedMessage:"Deze stemcode is al gebruikt om te stemmen. Een stemcode kan maar één keer gebruikt worden."}},choices:{title:{noPreferenceYet:"Je hebt nog geen keuze gemaakt",preference:"Jouw voorkeur is {preferredChoice}",inBetween:"Je staat precies tussen meerdere voorkeuren in"},withPercentage:!0,minLabel:null,maxLabel:null}})).config.loginUrl=t.config.loginUrl||"/oauth/login?returnTo="+encodeURIComponent(document.location.href);var n=l.a.localStorage.get("osc-choices-guide.values")||{},r=l.a.localStorage.get("osc-choices-guide.scores")||{};return t.state={title:"",answers:n[t.config.choicesGuideId],scores:r[t.config.choicesGuideId]},t}return e=i,(t=[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(){var t=this;Y({config:t.config}).then(function(e){t.setState(e,function(){t.startGuide()})}).catch(function(e){console.log("Niet goed"),console.log(e)})}},{key:"startGuide",value:function(){var e,t,n=this,r=n.choicesElement&&n.choicesElement.calculateScores(n.state.answers),o=(r.scores,r.planePos),i="",c=-1;n.choicesElement&&((e=n.choicesElement.getPreferedChoice({planePos:o}))?(i=n.config.choices.title.preference.replace("{preferredChoice}",e&&e.getTitle(n.state.scores[e.config.divId])||i),c=e.divId):i=n.config.choices.title.inBetween,n.setState({title:i}),t=new window.CustomEvent("osc-choices-guide-result-is-ready",{detail:{preferredChoice:{name:void 0,title:i,preferredChoiceId:c},answers:n.state.answers,scores:n.state.scores}}),document.dispatchEvent(t),"auto"==n.config.submission.type&&n.submitResult())}},{key:"submitResult",value:function(){var e,i=this;if("form"==i.config.submission.type){var c=i.form.getValues();if(!i.form.validate({showErrors:!0,scrollTo:!0}))return}!!(!i.state.choicesGuideConfig||!i.state.choicesGuideConfig.requiredUserRole)||i.isUserLoggedIn()?ue.a.load().then(function(e){e.get().then(function(e){var t=e.visitorId,n="".concat(i.config.api&&i.config.api.url,"/api/site/").concat(i.config.siteId,"/choicesguide/").concat(i.config.choicesGuideId,"/result"),r=l.a.api.getHeaders(i.config),o={result:{answers:i.state.answers,scores:i.state.scores},extraData:c,userFingerprint:t};fetch(n,{method:"POST",headers:r,body:JSON.stringify(o)}).then(function(e){if(e.ok)return e.json();throw e.text()}).then(function(e){"form"==i.config.submission.type&&(document.location.href=i.config.afterUrl)}).catch(function(e){e.then(function(e){try{e=JSON.parse(e)}catch(e){}var t=Array.isArray(e)&&e[0]&&e[0].message||e[0]||e.message||e;i.setState({submissionError:{message:t.toString(),type:"Je hebt je mening al ingestuurd"==t?"alreadySubmitted":"unknown"}},function(){return console.log(e)})})})})}):(e=document.querySelector(".osc-require-login"))&&e.scrollIntoView({behavior:"smooth"})}},{key:"isUserLoggedIn",value:function(){return this.config.user&&this.config.user.role&&"anonymous"!=this.config.user.role}},{key:"render",value:function(){var e,t=this,n=(t.props&&t.props.data,t.state.choices);t.state.questionGroups&&(e=t.state.questionGroups.find(function(e){return e.id==t.config.questionGroupId}))&&(e.values=t.state.values||{},e&&e.choices&&(n=e.choices));var r=!(!t.state.choicesGuideConfig||!t.state.choicesGuideConfig.requiredUserRole),o=null;n&&(o=React.createElement(G,{config:de({},t.config.choices),scores:de({},t.state.scores),choices:le(n),firstAnswerGiven:!0,ref:function(e){t.choicesElement=e},key:"choices"}));var i=null;t.config.moreInfoUrl&&t.config.moreInfoLabel&&(i=React.createElement("div",{className:"osc-more-info-link"},React.createElement("a",{href:t.config.moreInfoUrl},t.config.moreInfoLabel)));var c,a,u,s,l,f,p,d=null,h=null,m=null;"form"==t.config.submission.type&&(d=React.createElement(E.a.Form,{config:t.config.submission.form,ref:function(e){t.form=e}}),r&&(h=t.isUserLoggedIn()?(c="osc-success",a=t.config.submission.requireLoginSettings.buttonTextLoggedIn,u=t.config.submission.requireLoginSettings.loggedInMessage,t.state.submissionError&&(c="osc-error",u="alreadySubmitted"==t.state.submissionError.type?(a=t.config.submission.requireLoginSettings.buttonTextAlreadySubmitted,t.config.submission.requireLoginSettings.alreadySubmittedMessage):t.state.submissionError.message),React.createElement("div",{className:"osc-require-login osc-logged-in osc-logged-in ".concat(c)},React.createElement("h2",null,t.config.submission.requireLoginSettings.title),React.createElement("div",{className:"osc-gray-block"},React.createElement("button",{onClick:function(){return document.location.href=t.config.loginUrl},className:"osc-button osc-button-white"},a),React.createElement("div",{className:"change-login-link-text"},React.createElement("a",{href:"javascript: document.location.href = '".concat(t.config.loginUrl,"'")},t.config.submission.requireLoginSettings.changeLoginLinkText)),React.createElement("div",{className:"osc-message"},u)))):React.createElement("div",{className:"osc-require-login osc-not-yet-logged-in"},React.createElement("h2",null,t.config.submission.requireLoginSettings.title),React.createElement("div",{className:"osc-gray-block"},t.config.submission.requireLoginSettings.description,React.createElement("br",null),React.createElement("br",null),React.createElement("button",{onClick:function(){return document.location.href=t.config.loginUrl},className:"osc-button osc-button-white"},t.config.submission.requireLoginSettings.buttonTextLogin)))),l=s=null,t.config.beforeUrl&&(s=t.config.beforeUrl,l=t.config.beforeLabel||"Vorige"),f=t.config.afterLabel||"Opslaan",p="form"==t.config.submission.type&&t.form&&!t.form.validate({})||r&&!t.isUserLoggedIn(),(l||f)&&(m=React.createElement(K.default,{previousAction:null,previousUrl:s,previousLabel:l,nextAction:function(){t.submitResult()},nextUrl:null,nextLabel:f,nextIsDisabled:p})));var y=null;return t.state.submissionError&&!r&&(y=React.createElement("div",{className:"osc-message osc-error"},t.state.submissionError.message,";")),React.createElement("div",{className:"osc-choices-guide"},React.createElement("div",{className:"osc-result"},React.createElement("div",{className:"osc-result-content"},React.createElement("div",{className:"osc-choices-container ".concat("osc-type-"+t.config.choices.type)},React.createElement("h3",{dangerouslySetInnerHTML:{__html:t.state.title}}),o),i,d,h,y)),m)}}])&&he(e.prototype,t),n&&he(e,n),i}();ae.renderElement=function(e,t){var n=e.attributes;c.a.render(o.a.createElement(ae,{attributes:n,config:t}),e)},ve.renderElement=function(e,t){var n=e.attributes;c.a.render(o.a.createElement(ve,{attributes:n,config:t}),e)}},function(e,M,U){"use strict";(function(u){var d=U(41);function f(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var n=[0,0,0,0];return n[3]+=e[3]+t[3],n[2]+=n[3]>>>16,n[3]&=65535,n[2]+=e[2]+t[2],n[1]+=n[2]>>>16,n[2]&=65535,n[1]+=e[1]+t[1],n[0]+=n[1]>>>16,n[1]&=65535,n[0]+=e[0]+t[0],n[0]&=65535,[n[0]<<16|n[1],n[2]<<16|n[3]]}function p(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var n=[0,0,0,0];return n[3]+=e[3]*t[3],n[2]+=n[3]>>>16,n[3]&=65535,n[2]+=e[2]*t[3],n[1]+=n[2]>>>16,n[2]&=65535,n[2]+=e[3]*t[2],n[1]+=n[2]>>>16,n[2]&=65535,n[1]+=e[1]*t[3],n[0]+=n[1]>>>16,n[1]&=65535,n[1]+=e[2]*t[2],n[0]+=n[1]>>>16,n[1]&=65535,n[1]+=e[3]*t[1],n[0]+=n[1]>>>16,n[1]&=65535,n[0]+=e[0]*t[3]+e[1]*t[2]+e[2]*t[1]+e[3]*t[0],n[0]&=65535,[n[0]<<16|n[1],n[2]<<16|n[3]]}function h(e,t){return 32===(t%=64)?[e[1],e[0]]:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t|e[0]>>>32-t]:(t-=32,[e[1]<<t|e[0]>>>32-t,e[0]<<t|e[1]>>>32-t])}function m(e,t){return 0===(t%=64)?e:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t]:[e[1]<<t-32,0]}function y(e,t){return[e[0]^t[0],e[1]^t[1]]}function g(e){return e=y(e,[0,e[0]>>>1]),e=y(e=p(e,[4283543511,3981806797]),[0,e[0]>>>1]),e=y(e=p(e,[3301882366,444984403]),[0,e[0]>>>1])}function t(e,t){t=t||0;for(var n=(e=e||"").length%16,r=e.length-n,o=[0,t],i=[0,t],c=[0,0],a=[0,0],u=[2277735313,289559509],s=[1291169091,658871167],l=0;l<r;l+=16)c=[255&e.charCodeAt(l+4)|(255&e.charCodeAt(l+5))<<8|(255&e.charCodeAt(l+6))<<16|(255&e.charCodeAt(l+7))<<24,255&e.charCodeAt(l)|(255&e.charCodeAt(l+1))<<8|(255&e.charCodeAt(l+2))<<16|(255&e.charCodeAt(l+3))<<24],a=[255&e.charCodeAt(l+12)|(255&e.charCodeAt(l+13))<<8|(255&e.charCodeAt(l+14))<<16|(255&e.charCodeAt(l+15))<<24,255&e.charCodeAt(l+8)|(255&e.charCodeAt(l+9))<<8|(255&e.charCodeAt(l+10))<<16|(255&e.charCodeAt(l+11))<<24],c=h(c=p(c,u),31),o=f(o=h(o=y(o,c=p(c,s)),27),i),o=f(p(o,[0,5]),[0,1390208809]),a=h(a=p(a,s),33),i=f(i=h(i=y(i,a=p(a,u)),31),o),i=f(p(i,[0,5]),[0,944331445]);switch(c=[0,0],a=[0,0],n){case 15:a=y(a,m([0,e.charCodeAt(l+14)],48));case 14:a=y(a,m([0,e.charCodeAt(l+13)],40));case 13:a=y(a,m([0,e.charCodeAt(l+12)],32));case 12:a=y(a,m([0,e.charCodeAt(l+11)],24));case 11:a=y(a,m([0,e.charCodeAt(l+10)],16));case 10:a=y(a,m([0,e.charCodeAt(l+9)],8));case 9:a=p(a=y(a,[0,e.charCodeAt(l+8)]),s),i=y(i,a=p(a=h(a,33),u));case 8:c=y(c,m([0,e.charCodeAt(l+7)],56));case 7:c=y(c,m([0,e.charCodeAt(l+6)],48));case 6:c=y(c,m([0,e.charCodeAt(l+5)],40));case 5:c=y(c,m([0,e.charCodeAt(l+4)],32));case 4:c=y(c,m([0,e.charCodeAt(l+3)],24));case 3:c=y(c,m([0,e.charCodeAt(l+2)],16));case 2:c=y(c,m([0,e.charCodeAt(l+1)],8));case 1:c=p(c=y(c,[0,e.charCodeAt(l)]),u),o=y(o,c=p(c=h(c,31),s))}return o=f(o=y(o,[0,e.length]),i=y(i,[0,e.length])),i=f(i,o),o=f(o=g(o),i=g(i)),i=f(i,o),("00000000"+(o[0]>>>0).toString(16)).slice(-8)+("00000000"+(o[1]>>>0).toString(16)).slice(-8)+("00000000"+(i[0]>>>0).toString(16)).slice(-8)+("00000000"+(i[1]>>>0).toString(16)).slice(-8)}var o=window;function v(e,t){return!function(e,t){for(var n=0,r=e.length;n<r;++n)if(e[n]===t)return 1}(e,t)}function n(e){return parseInt(e)}function r(e){return parseFloat(e)}function s(e){return e.reduce(function(e,t){return e+(t?1:0)},0)}var l=window,b=navigator;document;function c(){return 4<=s(["MSCSSMatrix"in l,"msSetImmediate"in l,"msIndexedDB"in l,"msMaxTouchPoints"in b,"msPointerEnabled"in b])}var w=window,E=document;function O(e,t,n){var r;(r=t)&&"function"==typeof r.setValueAtTime&&t.setValueAtTime(n,e.currentTime)}function S(e){var t=new Error(e);return t.name=e,t}var R=document,x=["monospace","sans-serif","serif"],_=["sans-serif-thin","ARNO PRO","Agency FB","Arabic Typesetting","Arial Unicode MS","AvantGarde Bk BT","BankGothic Md BT","Batang","Bitstream Vera Sans Mono","Calibri","Century","Century Gothic","Clarendon","EUROSTILE","Franklin Gothic","Futura Bk BT","Futura Md BT","GOTHAM","Gill Sans","HELV","Haettenschweiler","Helvetica Neue","Humanst521 BT","Leelawadee","Letter Gothic","Levenim MT","Lucida Bright","Lucida Sans","Menlo","MS Mincho","MS Outlook","MS Reference Specialty","MS UI Gothic","MT Extra","MYRIAD PRO","Marlett","Meiryo UI","Microsoft Uighur","Minion Pro","Monotype Corsiva","PMingLiU","Pristina","SCRIPTINA","Segoe UI Light","Serifa","SimHei","Small Fonts","Staccato222 BT","TRAJAN PRO","Univers CE 55 Medium","Vrinda","ZWAdobeF"],j={fontStyle:"normal",fontWeight:"normal",letterSpacing:"normal",lineBreak:"auto",lineHeight:"normal",textTransform:"none",textAlign:"left",textDecoration:"none",textShadow:"none",whiteSpace:"normal",wordBreak:"normal",wordSpacing:"normal",position:"absolute",left:"-9999px",fontSize:"48px"};var i=navigator,a=window;var k=navigator;var C=window;var P=window;var I=window;var T=document;var e={osCpu:function(){return navigator.oscpu},languages:function(){var e,t=[],n=k.language||k.userLanguage||k.browserLanguage||k.systemLanguage;return void 0!==n&&t.push([n]),Array.isArray(k.languages)?5<=s(["webkitPersistentStorage"in b,"webkitTemporaryStorage"in b,0===b.vendor.indexOf("Google"),"webkitResolveLocalFileSystemURL"in l,"BatteryManager"in l,"webkitMediaStream"in l,"webkitSpeechGrammar"in l])&&3<=s([!("MediaSettingsRange"in l),"RTCEncodedAudioFrame"in l,""+l.Intl=="[object Intl]",""+l.Reflect=="[object Reflect]"])||t.push(k.languages):"string"!=typeof k.languages||(e=k.languages)&&t.push(e.split(",")),t},colorDepth:function(){return window.screen.colorDepth},deviceMemory:function(){return e=r(navigator.deviceMemory),t=void 0,"number"==typeof e&&isNaN(e)?t:e;var e,t},screenResolution:function(){var e=[n(C.screen.width),n(C.screen.height)];return e.sort().reverse(),e},availableScreenResolution:function(){if(P.screen.availWidth&&P.screen.availHeight){var e=[n(P.screen.availWidth),n(P.screen.availHeight)];return e.sort().reverse(),e}},hardwareConcurrency:function(){try{var e=n(navigator.hardwareConcurrency);return isNaN(e)?1:e}catch(e){return 1}},timezoneOffset:function(){var e=(new Date).getFullYear();return Math.max(r(new Date(e,0,1).getTimezoneOffset()),r(new Date(e,6,1).getTimezoneOffset()))},timezone:function(){var e;if(null!==(e=I.Intl)&&void 0!==e&&e.DateTimeFormat)return(new I.Intl.DateTimeFormat).resolvedOptions().timeZone},sessionStorage:function(){try{return!!window.sessionStorage}catch(e){return!0}},localStorage:function(){try{return!!window.localStorage}catch(e){return!0}},indexedDB:function(){if(!(c()||3<=s(["msWriteProfilerMark"in l,"MSStream"in l,"msLaunchUri"in b,"msSaveBlob"in b])&&!c()))try{return!!window.indexedDB}catch(e){return!0}},openDatabase:function(){return!!window.openDatabase},cpuClass:function(){return navigator.cpuClass},platform:function(){return navigator.platform},plugins:function(){if(c())return[];if(navigator.plugins){for(var e=[],t=0;t<navigator.plugins.length;++t){var n=navigator.plugins[t];if(n){for(var r=[],o=0;o<n.length;++o){var i=n[o];r.push({type:i.type,suffixes:i.suffixes})}e.push({name:n.name,description:n.description,mimeTypes:r})}}return e}},canvas:function(){var e,t,n=((e=document.createElement("canvas")).width=240,e.height=140,e.style.display="inline",[e,e.getContext("2d")]),r=n[0],o=n[1];if(t=r,!o||!t.toDataURL)return{winding:!1,data:""};o.rect(0,0,10,10),o.rect(2,2,6,6);var i=!o.isPointInPath(5,5,"evenodd");o.textBaseline="alphabetic",o.fillStyle="#f60",o.fillRect(125,1,62,20),o.fillStyle="#069",o.font="11pt no-real-font-123";var c="Cwm fjordbank 😃 gly";return o.fillText(c,2,15),o.fillStyle="rgba(102, 204, 0, 0.2)",o.font="18pt Arial",o.fillText(c,4,45),o.globalCompositeOperation="multiply",o.fillStyle="rgb(255,0,255)",o.beginPath(),o.arc(50,50,50,0,2*Math.PI,!0),o.closePath(),o.fill(),o.fillStyle="rgb(0,255,255)",o.beginPath(),o.arc(100,50,50,0,2*Math.PI,!0),o.closePath(),o.fill(),o.fillStyle="rgb(255,255,0)",o.beginPath(),o.arc(75,100,50,0,2*Math.PI,!0),o.closePath(),o.fill(),o.fillStyle="rgb(255,0,255)",o.arc(75,75,75,0,2*Math.PI,!0),o.arc(75,75,25,0,2*Math.PI,!0),o.fill("evenodd"),{winding:i,data:r.toDataURL()}},touchSupport:function(){var t,e=0;void 0!==i.maxTouchPoints?e=n(i.maxTouchPoints):void 0!==i.msMaxTouchPoints&&(e=i.msMaxTouchPoints);try{document.createEvent("TouchEvent"),t=!0}catch(e){t=!1}return{maxTouchPoints:e,touchEvent:t,touchStart:"ontouchstart"in a}},fonts:function(){function c(){var e=R.createElement("span");e.textContent="mmMwWLliI0O&1";for(var t=0,n=Object.keys(j);t<n.length;t++){var r=n[t];e.style[r]=j[r]}return e}var e=R.body,n=R.createElement("div"),a=R.createElement("div"),r={},o={},t=x.map(function(e){var t=c();return t.style.fontFamily=e,n.appendChild(t),t});e.appendChild(n);for(var i=0,u=x.length;i<u;i++)r[x[i]]=t[i].offsetWidth,o[x[i]]=t[i].offsetHeight;var s=function(){for(var e={},t=function(i){e[i]=x.map(function(e){var t,n,r,o=(t=i,n=e,(r=c()).style.fontFamily="'"+t+"',"+n,r);return a.appendChild(o),o})},n=0,r=_;n<r.length;n++){t(r[n])}return e}();e.appendChild(a);for(var l=[],f=0,p=_.length;f<p;f++)!function(n){return x.some(function(e,t){return n[t].offsetWidth!==r[e]||n[t].offsetHeight!==o[e]})}(s[_[f]])||l.push(_[f]);return e.removeChild(a),e.removeChild(n),l},audio:function(){return Object(d.b)(this,void 0,void 0,function(){var t,n,r,i,c,a;return Object(d.c)(this,function(e){switch(e.label){case 0:if(!(t=w.OfflineAudioContext||w.webkitOfflineAudioContext))return[2,-2];if(4<=s(["ApplePayError"in l,"CSSPrimitiveValue"in l,"Counter"in l,0===b.vendor.indexOf("Apple"),"getStorageUpdates"in b,"WebKitMediaKeys"in l])&&!(3<=s(["safari"in l,!("DeviceMotionEvent"in l),!("ongestureend"in l),!("standalone"in b)]))&&!(3<=s(["DOMRectList"in l,"RTCPeerConnectionIceEvent"in l,"SVGGeometryElement"in l,"ontransitioncancel"in l])))return[2,-1];n=new t(1,44100,44100),(r=n.createOscillator()).type="triangle",O(n,r.frequency,1e4),i=n.createDynamicsCompressor(),O(n,i.threshold,-50),O(n,i.knee,40),O(n,i.ratio,12),O(n,i.reduction,-20),O(n,i.attack,0),O(n,i.release,.25),r.connect(i),i.connect(n.destination),r.start(0),e.label=1;case 1:return e.trys.push([1,3,4,5]),[4,(o=n,new u(function(t,e){o.oncomplete=function(e){return t(e.renderedBuffer)};var n=3,r=function(){switch(o.startRendering(),o.state){case"running":setTimeout(function(){return e(S("timeout"))},1e3);break;case"suspended":E.hidden||n--,0<n?setTimeout(r,500):e(S("suspended"))}};r()}))];case 2:return c=e.sent(),[3,5];case 3:if("timeout"===(a=e.sent()).name||"suspended"===a.name)return[2,-3];throw a;case 4:return r.disconnect(),i.disconnect(),[7];case 5:return[2,function(e){for(var t=0,n=4500;n<5e3;++n)t+=Math.abs(e[n]);return t}(c.getChannelData(0))]}var o})})},pluginsSupport:function(){return void 0!==navigator.plugins},productSub:function(){return navigator.productSub},emptyEvalLength:function(){return eval.toString().length},errorFF:function(){try{throw"a"}catch(e){try{return e.toSource(),!0}catch(e){return!1}}},vendor:function(){return navigator.vendor},chrome:function(){return void 0!==window.chrome},cookiesEnabled:function(){try{T.cookie="cookietest=1; SameSite=Strict;";var e=-1!==T.cookie.indexOf("cookietest=");return T.cookie="cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT",e}catch(e){return!1}}};function A(){return function(l,f,p){return Object(d.b)(this,void 0,void 0,function(){var t,n,r,o,i,c,a,u,s;return Object(d.c)(this,function(e){switch(e.label){case 0:t=Date.now(),n={},r=0,o=Object.keys(l),e.label=1;case 1:if(!(r<o.length))return[3,7];if(i=o[r],!v(p,i))return[3,6];c=void 0,e.label=2;case 2:return e.trys.push([2,4,,5]),s={},[4,l[i](f)];case 3:return s.value=e.sent(),c=s,[3,5];case 4:return a=e.sent(),c=a&&"object"==typeof a&&"message"in a?{error:a}:{error:{message:a}},[3,5];case 5:u=Date.now(),n[i]=Object(d.a)(Object(d.a)({},c),{duration:u-t}),t=u,e.label=6;case 6:return r++,[3,1];case 7:return[2,n]}})})}(e,void 0,[])}function L(e){return JSON.stringify(e,function(e,t){return t instanceof Error?(n=t,Object(d.a)({name:n.name,message:n.message,stack:null===(r=n.stack)||void 0===r?void 0:r.split("\n")},n)):t;var n,r},2)}function N(e){return t(function(e){for(var t="",n=0,r=Object.keys(e);n<r.length;n++){var o=r[n],i=e[o],c=i.error?"error":JSON.stringify(i.value);t+=(t?"|":"")+o.replace(/([:|\\])/g,"\\$1")+":"+c}return t}(e))}var q=(F.prototype.get=function(o){return void 0===o&&(o={}),Object(d.b)(this,void 0,void 0,function(){var n,r;return Object(d.c)(this,function(e){switch(e.label){case 0:return[4,A()];case 1:return n=e.sent(),r={components:n,get visitorId(){return void 0===t&&(t=N(this.components)),t},set visitorId(e){t=e}},o.debug&&console.log("Copy the text below to get the debug data:\n\n```\nversion: 3.0.5\nuserAgent: "+navigator.userAgent+"\ngetOptions: "+JSON.stringify(o,void 0,2)+"\nvisitorId: "+r.visitorId+"\ncomponents: "+L(n)+"\n```"),[2,r]}var t})})},F);function F(){}var D={load:function(e){var t=(void 0===e?{}:e).delayFallback,r=void 0===t?50:t;return Object(d.b)(this,void 0,void 0,function(){return Object(d.c)(this,function(e){switch(e.label){case 0:return[4,(void 0===(n=2*(t=r))&&(n=1/0),new u(function(e){o.requestIdleCallback?o.requestIdleCallback(function(){return e()},{timeout:n}):setTimeout(e,Math.min(t,n))}))];case 1:return e.sent(),[2,new q]}var t,n})})},hashComponents:N,componentsToDebugString:L};M.a=D}).call(this,U(40))},,,function(e,t,n){n(115);var r=n(39);e.exports=r("Array","find")},,function(e,t,n){"use strict";var r=n(36),o=n(94).find,i=n(37),c=n(38),a="find",u=!0,s=c(a);a in[]&&Array(1).find(function(){u=!1}),r({target:"Array",proto:!0,forced:u||!s},{find:function(e,t){return o(this,e,1<arguments.length?t:void 0)}}),i(a)},function(e,t,n){}]);
>>>>>>> development
