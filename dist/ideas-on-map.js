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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ideas-on-map/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./node_modules/react-device-detect/main.js":
/*!**************************************************!*\
  !*** ./node_modules/react-device-detect/main.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = __webpack_require__(/*! react */ "react");
var React__default = _interopDefault(React);

var UAParser = __webpack_require__(/*! ua-parser-js/dist/ua-parser.min */ "./node_modules/ua-parser-js/dist/ua-parser.min.js");

var UA = new UAParser();
var browser = UA.getBrowser();
var cpu = UA.getCPU();
var device = UA.getDevice();
var engine = UA.getEngine();
var os = UA.getOS();
var ua = UA.getUA();

var setDefaults = function setDefaults(p) {
  var d = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'none';
  return p ? p : d;
};
var getNavigatorInstance = function getNavigatorInstance() {
  if (typeof window !== 'undefined') {
    if (window.navigator || navigator) {
      return window.navigator || navigator;
    }
  }

  return false;
};
var isIOS13Check = function isIOS13Check(type) {
  var nav = getNavigatorInstance();
  return nav && nav.platform && (nav.platform.indexOf(type) !== -1 || nav.platform === 'MacIntel' && nav.maxTouchPoints > 1 && !window.MSStream);
};

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var DEVICE_TYPES = {
  MOBILE: 'mobile',
  TABLET: 'tablet',
  SMART_TV: 'smarttv',
  CONSOLE: 'console',
  WEARABLE: 'wearable',
  BROWSER: undefined
};
var BROWSER_TYPES = {
  CHROME: 'Chrome',
  FIREFOX: "Firefox",
  OPERA: "Opera",
  YANDEX: "Yandex",
  SAFARI: "Safari",
  INTERNET_EXPLORER: "Internet Explorer",
  EDGE: "Edge",
  CHROMIUM: "Chromium",
  IE: 'IE',
  MOBILE_SAFARI: "Mobile Safari",
  EDGE_CHROMIUM: "Edge Chromium",
  MIUI: "MIUI Browser"
};
var OS_TYPES = {
  IOS: 'iOS',
  ANDROID: "Android",
  WINDOWS_PHONE: "Windows Phone",
  WINDOWS: 'Windows',
  MAC_OS: 'Mac OS'
};
var initialData = {
  isMobile: false,
  isTablet: false,
  isBrowser: false,
  isSmartTV: false,
  isConsole: false,
  isWearable: false
};
var checkType = function checkType(type) {
  switch (type) {
    case DEVICE_TYPES.MOBILE:
      return {
        isMobile: true
      };

    case DEVICE_TYPES.TABLET:
      return {
        isTablet: true
      };

    case DEVICE_TYPES.SMART_TV:
      return {
        isSmartTV: true
      };

    case DEVICE_TYPES.CONSOLE:
      return {
        isConsole: true
      };

    case DEVICE_TYPES.WEARABLE:
      return {
        isWearable: true
      };

    case DEVICE_TYPES.BROWSER:
      return {
        isBrowser: true
      };

    default:
      return initialData;
  }
};
var broPayload = function broPayload(isBrowser, browser, engine, os, ua) {
  return {
    isBrowser: isBrowser,
    browserMajorVersion: setDefaults(browser.major),
    browserFullVersion: setDefaults(browser.version),
    browserName: setDefaults(browser.name),
    engineName: setDefaults(engine.name),
    engineVersion: setDefaults(engine.version),
    osName: setDefaults(os.name),
    osVersion: setDefaults(os.version),
    userAgent: setDefaults(ua)
  };
};
var mobilePayload = function mobilePayload(type, device, os, ua) {
  return _objectSpread2({}, type, {
    vendor: setDefaults(device.vendor),
    model: setDefaults(device.model),
    os: setDefaults(os.name),
    osVersion: setDefaults(os.version),
    ua: setDefaults(ua)
  });
};
var stvPayload = function stvPayload(isSmartTV, engine, os, ua) {
  return {
    isSmartTV: isSmartTV,
    engineName: setDefaults(engine.name),
    engineVersion: setDefaults(engine.version),
    osName: setDefaults(os.name),
    osVersion: setDefaults(os.version),
    userAgent: setDefaults(ua)
  };
};
var consolePayload = function consolePayload(isConsole, engine, os, ua) {
  return {
    isConsole: isConsole,
    engineName: setDefaults(engine.name),
    engineVersion: setDefaults(engine.version),
    osName: setDefaults(os.name),
    osVersion: setDefaults(os.version),
    userAgent: setDefaults(ua)
  };
};
var wearPayload = function wearPayload(isWearable, engine, os, ua) {
  return {
    isWearable: isWearable,
    engineName: setDefaults(engine.name),
    engineVersion: setDefaults(engine.version),
    osName: setDefaults(os.name),
    osVersion: setDefaults(os.version),
    userAgent: setDefaults(ua)
  };
};

var type = checkType(device.type);

function deviceDetect() {
  var isBrowser = type.isBrowser,
      isMobile = type.isMobile,
      isTablet = type.isTablet,
      isSmartTV = type.isSmartTV,
      isConsole = type.isConsole,
      isWearable = type.isWearable;

  if (isBrowser) {
    return broPayload(isBrowser, browser, engine, os, ua);
  }

  if (isSmartTV) {
    return stvPayload(isSmartTV, engine, os, ua);
  }

  if (isConsole) {
    return consolePayload(isConsole, engine, os, ua);
  }

  if (isMobile) {
    return mobilePayload(type, device, os, ua);
  }

  if (isTablet) {
    return mobilePayload(type, device, os, ua);
  }

  if (isWearable) {
    return wearPayload(isWearable, engine, os, ua);
  }
}

var isMobileType = function isMobileType() {
  return device.type === DEVICE_TYPES.MOBILE;
};

var isTabletType = function isTabletType() {
  return device.type === DEVICE_TYPES.TABLET;
};

var isMobileAndTabletType = function isMobileAndTabletType() {
  switch (device.type) {
    case DEVICE_TYPES.MOBILE:
    case DEVICE_TYPES.TABLET:
      return true;

    default:
      return false;
  }
};

var isEdgeChromiumType = function isEdgeChromiumType() {
  return typeof ua === 'string' && ua.indexOf('Edg/') !== -1;
};

var isSmartTVType = function isSmartTVType() {
  return device.type === DEVICE_TYPES.SMART_TV;
};

var isBrowserType = function isBrowserType() {
  return device.type === DEVICE_TYPES.BROWSER;
};

var isWearableType = function isWearableType() {
  return device.type === DEVICE_TYPES.WEARABLE;
};

var isConsoleType = function isConsoleType() {
  return device.type === DEVICE_TYPES.CONSOLE;
};

var isAndroidType = function isAndroidType() {
  return os.name === OS_TYPES.ANDROID;
};

var isWindowsType = function isWindowsType() {
  return os.name === OS_TYPES.WINDOWS;
};

var isMacOsType = function isMacOsType() {
  return os.name === OS_TYPES.MAC_OS;
};

var isWinPhoneType = function isWinPhoneType() {
  return os.name === OS_TYPES.WINDOWS_PHONE;
};

var isIOSType = function isIOSType() {
  return os.name === OS_TYPES.IOS;
};

var isChromeType = function isChromeType() {
  return browser.name === BROWSER_TYPES.CHROME;
};

var isFirefoxType = function isFirefoxType() {
  return browser.name === BROWSER_TYPES.FIREFOX;
};

var isChromiumType = function isChromiumType() {
  return browser.name === BROWSER_TYPES.CHROMIUM;
};

var isEdgeType = function isEdgeType() {
  return browser.name === BROWSER_TYPES.EDGE;
};

var isYandexType = function isYandexType() {
  return browser.name === BROWSER_TYPES.YANDEX;
};

var isSafariType = function isSafariType() {
  return browser.name === BROWSER_TYPES.SAFARI || browser.name === BROWSER_TYPES.MOBILE_SAFARI;
};

var isMobileSafariType = function isMobileSafariType() {
  return browser.name === BROWSER_TYPES.MOBILE_SAFARI;
};

var isOperaType = function isOperaType() {
  return browser.name === BROWSER_TYPES.OPERA;
};

var isIEType = function isIEType() {
  return browser.name === BROWSER_TYPES.INTERNET_EXPLORER || browser.name === BROWSER_TYPES.IE;
};

var isMIUIType = function isMIUIType() {
  return browser.name === BROWSER_TYPES.MIUI;
};

var isElectronType = function isElectronType() {
  var nav = getNavigatorInstance();
  var ua = nav && nav.userAgent.toLowerCase();
  return typeof ua === 'string' ? /electron/.test(ua) : false;
};

var getIOS13 = function getIOS13() {
  var nav = getNavigatorInstance();
  return nav && (/iPad|iPhone|iPod/.test(nav.platform) || nav.platform === 'MacIntel' && nav.maxTouchPoints > 1) && !window.MSStream;
};

var getIPad13 = function getIPad13() {
  return isIOS13Check('iPad');
};

var getIphone13 = function getIphone13() {
  return isIOS13Check('iPhone');
};

var getIPod13 = function getIPod13() {
  return isIOS13Check('iPod');
};

var getBrowserFullVersion = function getBrowserFullVersion() {
  return setDefaults(browser.version);
};

var getBrowserVersion = function getBrowserVersion() {
  return setDefaults(browser.major);
};

var getOsVersion = function getOsVersion() {
  return setDefaults(os.version);
};

var getOsName = function getOsName() {
  return setDefaults(os.name);
};

var getBrowserName = function getBrowserName() {
  return setDefaults(browser.name);
};

var getMobileVendor = function getMobileVendor() {
  return setDefaults(device.vendor);
};

var getMobileModel = function getMobileModel() {
  return setDefaults(device.model);
};

var getEngineName = function getEngineName() {
  return setDefaults(engine.name);
};

var getEngineVersion = function getEngineVersion() {
  return setDefaults(engine.version);
};

var getUseragent = function getUseragent() {
  return setDefaults(ua);
};

var getDeviceType = function getDeviceType() {
  return setDefaults(device.type, 'browser');
};

var isSmartTV = isSmartTVType();
var isConsole = isConsoleType();
var isWearable = isWearableType();
var isMobileSafari = isMobileSafariType() || getIPad13();
var isChromium = isChromiumType();
var isMobile = isMobileAndTabletType() || getIPad13();
var isMobileOnly = isMobileType();
var isTablet = isTabletType() || getIPad13();
var isBrowser = isBrowserType();
var isAndroid = isAndroidType();
var isWinPhone = isWinPhoneType();
var isIOS = isIOSType() || getIPad13();
var isChrome = isChromeType();
var isFirefox = isFirefoxType();
var isSafari = isSafariType();
var isOpera = isOperaType();
var isIE = isIEType();
var osVersion = getOsVersion();
var osName = getOsName();
var fullBrowserVersion = getBrowserFullVersion();
var browserVersion = getBrowserVersion();
var browserName = getBrowserName();
var mobileVendor = getMobileVendor();
var mobileModel = getMobileModel();
var engineName = getEngineName();
var engineVersion = getEngineVersion();
var getUA = getUseragent();
var isEdge = isEdgeType() || isEdgeChromiumType();
var isYandex = isYandexType();
var deviceType = getDeviceType();
var isIOS13 = getIOS13();
var isIPad13 = getIPad13();
var isIPhone13 = getIphone13();
var isIPod13 = getIPod13();
var isElectron = isElectronType();
var isEdgeChromium = isEdgeChromiumType();
var isLegacyEdge = isEdgeType() && !isEdgeChromiumType();
var isWindows = isWindowsType();
var isMacOs = isMacOsType();
var isMIUI = isMIUIType();

var AndroidView = function AndroidView(_ref) {
  var renderWithFragment = _ref.renderWithFragment,
      children = _ref.children,
      viewClassName = _ref.viewClassName,
      style = _ref.style;
  return isAndroid ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};
var BrowserView = function BrowserView(_ref2) {
  var renderWithFragment = _ref2.renderWithFragment,
      children = _ref2.children,
      viewClassName = _ref2.viewClassName,
      style = _ref2.style;
  return isBrowser ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};
var IEView = function IEView(_ref3) {
  var renderWithFragment = _ref3.renderWithFragment,
      children = _ref3.children,
      viewClassName = _ref3.viewClassName,
      style = _ref3.style;
  return isIE ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};
var IOSView = function IOSView(_ref4) {
  var renderWithFragment = _ref4.renderWithFragment,
      children = _ref4.children,
      viewClassName = _ref4.viewClassName,
      style = _ref4.style;
  return isIOS ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};
var MobileView = function MobileView(_ref5) {
  var renderWithFragment = _ref5.renderWithFragment,
      children = _ref5.children,
      viewClassName = _ref5.viewClassName,
      style = _ref5.style;
  return isMobile ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};
var TabletView = function TabletView(_ref6) {
  var renderWithFragment = _ref6.renderWithFragment,
      children = _ref6.children,
      viewClassName = _ref6.viewClassName,
      style = _ref6.style;
  return isTablet ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};
var WinPhoneView = function WinPhoneView(_ref7) {
  var renderWithFragment = _ref7.renderWithFragment,
      children = _ref7.children,
      viewClassName = _ref7.viewClassName,
      style = _ref7.style;
  return isWinPhone ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};
var MobileOnlyView = function MobileOnlyView(_ref8) {
  var renderWithFragment = _ref8.renderWithFragment,
      children = _ref8.children,
      viewClassName = _ref8.viewClassName,
      style = _ref8.style;
  return isMobileOnly ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};
var SmartTVView = function SmartTVView(_ref9) {
  var renderWithFragment = _ref9.renderWithFragment,
      children = _ref9.children,
      viewClassName = _ref9.viewClassName,
      style = _ref9.style;
  return isSmartTV ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};
var ConsoleView = function ConsoleView(_ref10) {
  var renderWithFragment = _ref10.renderWithFragment,
      children = _ref10.children,
      viewClassName = _ref10.viewClassName,
      style = _ref10.style;
  return isConsole ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};
var WearableView = function WearableView(_ref11) {
  var renderWithFragment = _ref11.renderWithFragment,
      children = _ref11.children,
      viewClassName = _ref11.viewClassName,
      style = _ref11.style;
  return isWearable ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};
var CustomView = function CustomView(_ref12) {
  var renderWithFragment = _ref12.renderWithFragment,
      children = _ref12.children,
      viewClassName = _ref12.viewClassName,
      style = _ref12.style,
      condition = _ref12.condition;
  return condition ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};

function withOrientationChange(WrappedComponent) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(_class, _React$Component);

      function _class(props) {
        var _this;

        _classCallCheck(this, _class);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, props));
        _this.isEventListenerAdded = false;
        _this.handleOrientationChange = _this.handleOrientationChange.bind(_assertThisInitialized(_this));
        _this.onOrientationChange = _this.onOrientationChange.bind(_assertThisInitialized(_this));
        _this.onPageLoad = _this.onPageLoad.bind(_assertThisInitialized(_this));
        _this.state = {
          isLandscape: false,
          isPortrait: false
        };
        return _this;
      }

      _createClass(_class, [{
        key: "handleOrientationChange",
        value: function handleOrientationChange() {
          if (!this.isEventListenerAdded) {
            this.isEventListenerAdded = true;
          }

          var orientation = window.innerWidth > window.innerHeight ? 90 : 0;
          this.setState({
            isPortrait: orientation === 0,
            isLandscape: orientation === 90
          });
        }
      }, {
        key: "onOrientationChange",
        value: function onOrientationChange() {
          this.handleOrientationChange();
        }
      }, {
        key: "onPageLoad",
        value: function onPageLoad() {
          this.handleOrientationChange();
        }
      }, {
        key: "componentDidMount",
        value: function componentDidMount() {
          if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== undefined && isMobile) {
            if (!this.isEventListenerAdded) {
              this.handleOrientationChange();
              window.addEventListener("load", this.onPageLoad, false);
            } else {
              window.removeEventListener("load", this.onPageLoad, false);
            }

            window.addEventListener("resize", this.onOrientationChange, false);
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          window.removeEventListener("resize", this.onOrientationChange, false);
        }
      }, {
        key: "render",
        value: function render() {
          return React__default.createElement(WrappedComponent, _extends({}, this.props, {
            isLandscape: this.state.isLandscape,
            isPortrait: this.state.isPortrait
          }));
        }
      }]);

      return _class;
    }(React__default.Component)
  );
}

exports.AndroidView = AndroidView;
exports.BrowserView = BrowserView;
exports.ConsoleView = ConsoleView;
exports.CustomView = CustomView;
exports.IEView = IEView;
exports.IOSView = IOSView;
exports.MobileOnlyView = MobileOnlyView;
exports.MobileView = MobileView;
exports.SmartTVView = SmartTVView;
exports.TabletView = TabletView;
exports.WearableView = WearableView;
exports.WinPhoneView = WinPhoneView;
exports.browserName = browserName;
exports.browserVersion = browserVersion;
exports.deviceDetect = deviceDetect;
exports.deviceType = deviceType;
exports.engineName = engineName;
exports.engineVersion = engineVersion;
exports.fullBrowserVersion = fullBrowserVersion;
exports.getUA = getUA;
exports.isAndroid = isAndroid;
exports.isBrowser = isBrowser;
exports.isChrome = isChrome;
exports.isChromium = isChromium;
exports.isConsole = isConsole;
exports.isEdge = isEdge;
exports.isEdgeChromium = isEdgeChromium;
exports.isElectron = isElectron;
exports.isFirefox = isFirefox;
exports.isIE = isIE;
exports.isIOS = isIOS;
exports.isIOS13 = isIOS13;
exports.isIPad13 = isIPad13;
exports.isIPhone13 = isIPhone13;
exports.isIPod13 = isIPod13;
exports.isLegacyEdge = isLegacyEdge;
exports.isMIUI = isMIUI;
exports.isMacOs = isMacOs;
exports.isMobile = isMobile;
exports.isMobileOnly = isMobileOnly;
exports.isMobileSafari = isMobileSafari;
exports.isOpera = isOpera;
exports.isSafari = isSafari;
exports.isSmartTV = isSmartTV;
exports.isTablet = isTablet;
exports.isWearable = isWearable;
exports.isWinPhone = isWinPhone;
exports.isWindows = isWindows;
exports.isYandex = isYandex;
exports.mobileModel = mobileModel;
exports.mobileVendor = mobileVendor;
exports.osName = osName;
exports.osVersion = osVersion;
exports.withOrientationChange = withOrientationChange;


/***/ }),

/***/ "./node_modules/ua-parser-js/dist/ua-parser.min.js":
/*!*********************************************************!*\
  !*** ./node_modules/ua-parser-js/dist/ua-parser.min.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * UAParser.js v0.7.23
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2019 Faisal Salman <f@faisalman.com>
 * Licensed under MIT License
 */
(function(window,undefined){"use strict";var LIBVERSION="0.7.23",EMPTY="",UNKNOWN="?",FUNC_TYPE="function",UNDEF_TYPE="undefined",OBJ_TYPE="object",STR_TYPE="string",MAJOR="major",MODEL="model",NAME="name",TYPE="type",VENDOR="vendor",VERSION="version",ARCHITECTURE="architecture",CONSOLE="console",MOBILE="mobile",TABLET="tablet",SMARTTV="smarttv",WEARABLE="wearable",EMBEDDED="embedded";var util={extend:function(regexes,extensions){var mergedRegexes={};for(var i in regexes){if(extensions[i]&&extensions[i].length%2===0){mergedRegexes[i]=extensions[i].concat(regexes[i])}else{mergedRegexes[i]=regexes[i]}}return mergedRegexes},has:function(str1,str2){if(typeof str1==="string"){return str2.toLowerCase().indexOf(str1.toLowerCase())!==-1}else{return false}},lowerize:function(str){return str.toLowerCase()},major:function(version){return typeof version===STR_TYPE?version.replace(/[^\d\.]/g,"").split(".")[0]:undefined},trim:function(str){return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}};var mapper={rgx:function(ua,arrays){var i=0,j,k,p,q,matches,match;while(i<arrays.length&&!matches){var regex=arrays[i],props=arrays[i+1];j=k=0;while(j<regex.length&&!matches){matches=regex[j++].exec(ua);if(!!matches){for(p=0;p<props.length;p++){match=matches[++k];q=props[p];if(typeof q===OBJ_TYPE&&q.length>0){if(q.length==2){if(typeof q[1]==FUNC_TYPE){this[q[0]]=q[1].call(this,match)}else{this[q[0]]=q[1]}}else if(q.length==3){if(typeof q[1]===FUNC_TYPE&&!(q[1].exec&&q[1].test)){this[q[0]]=match?q[1].call(this,match,q[2]):undefined}else{this[q[0]]=match?match.replace(q[1],q[2]):undefined}}else if(q.length==4){this[q[0]]=match?q[3].call(this,match.replace(q[1],q[2])):undefined}}else{this[q]=match?match:undefined}}}}i+=2}},str:function(str,map){for(var i in map){if(typeof map[i]===OBJ_TYPE&&map[i].length>0){for(var j=0;j<map[i].length;j++){if(util.has(map[i][j],str)){return i===UNKNOWN?undefined:i}}}else if(util.has(map[i],str)){return i===UNKNOWN?undefined:i}}return str}};var maps={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}};var regexes={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]{3,6}).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[NAME,VERSION],[/(opios)[\/\s]+([\w\.]+)/i],[[NAME,"Opera Mini"],VERSION],[/\s(opr)\/([\w\.]+)/i],[[NAME,"Opera"],VERSION],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],[NAME,VERSION],[/(konqueror)\/([\w\.]+)/i],[[NAME,"Konqueror"],VERSION],[/(trident).+rv[:\s]([\w\.]{1,9}).+like\sgecko/i],[[NAME,"IE"],VERSION],[/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],[[NAME,"Edge"],VERSION],[/(yabrowser)\/([\w\.]+)/i],[[NAME,"Yandex"],VERSION],[/(Avast)\/([\w\.]+)/i],[[NAME,"Avast Secure Browser"],VERSION],[/(AVG)\/([\w\.]+)/i],[[NAME,"AVG Secure Browser"],VERSION],[/(puffin)\/([\w\.]+)/i],[[NAME,"Puffin"],VERSION],[/(focus)\/([\w\.]+)/i],[[NAME,"Firefox Focus"],VERSION],[/(opt)\/([\w\.]+)/i],[[NAME,"Opera Touch"],VERSION],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[NAME,"UCBrowser"],VERSION],[/(comodo_dragon)\/([\w\.]+)/i],[[NAME,/_/g," "],VERSION],[/(windowswechat qbcore)\/([\w\.]+)/i],[[NAME,"WeChat(Win) Desktop"],VERSION],[/(micromessenger)\/([\w\.]+)/i],[[NAME,"WeChat"],VERSION],[/(brave)\/([\w\.]+)/i],[[NAME,"Brave"],VERSION],[/(whale)\/([\w\.]+)/i],[[NAME,"Whale"],VERSION],[/(qqbrowserlite)\/([\w\.]+)/i],[NAME,VERSION],[/(QQ)\/([\d\.]+)/i],[NAME,VERSION],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[NAME,VERSION],[/(baiduboxapp)[\/\s]?([\w\.]+)/i],[NAME,VERSION],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[NAME,VERSION],[/(MetaSr)[\/\s]?([\w\.]+)/i],[NAME],[/(LBBROWSER)/i],[NAME],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[VERSION,[NAME,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[VERSION,[NAME,"Facebook"]],[/FBAN\/FBIOS|FB_IAB\/FB4A/i],[[NAME,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/android.+(line)\/([\w\.]+)\/iab/i],[NAME,VERSION],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[VERSION,[NAME,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[NAME,/(.+)/,"$1 WebView"],VERSION],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[NAME,/(.+(?:g|us))(.+)/,"$1 $2"],VERSION],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[VERSION,[NAME,"Android Browser"]],[/(sailfishbrowser)\/([\w\.]+)/i],[[NAME,"Sailfish Browser"],VERSION],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[NAME,VERSION],[/(dolfin)\/([\w\.]+)/i],[[NAME,"Dolphin"],VERSION],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[NAME,"360 Browser"]],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[NAME,"Chrome"],VERSION],[/(coast)\/([\w\.]+)/i],[[NAME,"Opera Coast"],VERSION],[/fxios\/([\w\.-]+)/i],[VERSION,[NAME,"Firefox"]],[/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],[VERSION,[NAME,"Mobile Safari"]],[/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],[VERSION,NAME],[/webkit.+?(gsa)\/([\w\.]+)\s.*(mobile\s?safari|safari)(\/[\w\.]+)/i],[[NAME,"GSA"],VERSION],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[NAME,[VERSION,mapper.str,maps.browser.oldsafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[NAME,VERSION],[/(navigator|netscape)\/([\w\.-]+)/i],[[NAME,"Netscape"],VERSION],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,/(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[NAME,VERSION]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[ARCHITECTURE,"amd64"]],[/(ia32(?=;))/i],[[ARCHITECTURE,util.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[ARCHITECTURE,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[ARCHITECTURE,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[ARCHITECTURE,/ower/,"",util.lowerize]],[/(sun4\w)[;\)]/i],[[ARCHITECTURE,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[ARCHITECTURE,util.lowerize]]],device:[[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],[MODEL,VENDOR,[TYPE,TABLET]],[/applecoremedia\/[\w\.]+ \((ipad)/],[MODEL,[VENDOR,"Apple"],[TYPE,TABLET]],[/(apple\s{0,1}tv)/i],[[MODEL,"Apple TV"],[VENDOR,"Apple"],[TYPE,SMARTTV]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[VENDOR,MODEL,[TYPE,TABLET]],[/(kf[A-z]+)(\sbuild\/|\)).+silk\//i],[MODEL,[VENDOR,"Amazon"],[TYPE,TABLET]],[/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],[[MODEL,mapper.str,maps.device.amazon.model],[VENDOR,"Amazon"],[TYPE,MOBILE]],[/android.+aft([bms])\sbuild/i],[MODEL,[VENDOR,"Amazon"],[TYPE,SMARTTV]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[MODEL,VENDOR,[TYPE,MOBILE]],[/\((ip[honed|\s\w*]+);/i],[MODEL,[VENDOR,"Apple"],[TYPE,MOBILE]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/\(bb10;\s(\w+)/i],[MODEL,[VENDOR,"BlackBerry"],[TYPE,MOBILE]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],[MODEL,[VENDOR,"Asus"],[TYPE,TABLET]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[VENDOR,"Sony"],[MODEL,"Xperia Tablet"],[TYPE,TABLET]],[/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[MODEL,[VENDOR,"Sony"],[TYPE,MOBILE]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[VENDOR,MODEL,[TYPE,CONSOLE]],[/android.+;\s(shield)\sbuild/i],[MODEL,[VENDOR,"Nvidia"],[TYPE,CONSOLE]],[/(playstation\s[34portablevi]+)/i],[MODEL,[VENDOR,"Sony"],[TYPE,CONSOLE]],[/(sprint\s(\w+))/i],[[VENDOR,mapper.str,maps.device.sprint.vendor],[MODEL,mapper.str,maps.device.sprint.model],[TYPE,MOBILE]],[/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[VENDOR,[MODEL,/_/g," "],[TYPE,MOBILE]],[/(nexus\s9)/i],[MODEL,[VENDOR,"HTC"],[TYPE,TABLET]],[/d\/huawei([\w\s-]+)[;\)]/i,/android.+\s(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?)/i],[MODEL,[VENDOR,"Huawei"],[TYPE,MOBILE]],[/android.+(bah2?-a?[lw]\d{2})/i],[MODEL,[VENDOR,"Huawei"],[TYPE,TABLET]],[/(microsoft);\s(lumia[\s\w]+)/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[MODEL,[VENDOR,"Microsoft"],[TYPE,CONSOLE]],[/(kin\.[onetw]{3})/i],[[MODEL,/\./g," "],[VENDOR,"Microsoft"],[TYPE,MOBILE]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[MODEL,[VENDOR,"Motorola"],[TYPE,MOBILE]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[MODEL,[VENDOR,"Motorola"],[TYPE,TABLET]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[VENDOR,util.trim],[MODEL,util.trim],[TYPE,SMARTTV]],[/hbbtv.+maple;(\d+)/i],[[MODEL,/^/,"SmartTV"],[VENDOR,"Samsung"],[TYPE,SMARTTV]],[/\(dtv[\);].+(aquos)/i],[MODEL,[VENDOR,"Sharp"],[TYPE,SMARTTV]],[/android.+((sch-i[89]0\d|shw-m380s|SM-P605|SM-P610|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[VENDOR,"Samsung"],MODEL,[TYPE,TABLET]],[/smart-tv.+(samsung)/i],[VENDOR,[TYPE,SMARTTV],MODEL],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[VENDOR,"Samsung"],MODEL,[TYPE,MOBILE]],[/sie-(\w*)/i],[MODEL,[VENDOR,"Siemens"],[TYPE,MOBILE]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[VENDOR,"Nokia"],MODEL,[TYPE,MOBILE]],[/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[MODEL,[VENDOR,"Acer"],[TYPE,TABLET]],[/android.+([vl]k\-?\d{3})\s+build/i],[MODEL,[VENDOR,"LG"],[TYPE,TABLET]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[VENDOR,"LG"],MODEL,[TYPE,TABLET]],[/linux;\snetcast.+smarttv/i,/lg\snetcast\.tv-201\d/i],[[VENDOR,"LG"],MODEL,[TYPE,SMARTTV]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[MODEL,[VENDOR,"LG"],[TYPE,MOBILE]],[/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],[VENDOR,MODEL,[TYPE,TABLET]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[MODEL,[VENDOR,"Lenovo"],[TYPE,TABLET]],[/(lenovo)[_\s-]?([\w-]+)/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/linux;.+((jolla));/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/((pebble))app\/[\d\.]+\s/i],[VENDOR,MODEL,[TYPE,WEARABLE]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/crkey/i],[[MODEL,"Chromecast"],[VENDOR,"Google"],[TYPE,SMARTTV]],[/android.+;\s(glass)\s\d/i],[MODEL,[VENDOR,"Google"],[TYPE,WEARABLE]],[/android.+;\s(pixel c)[\s)]/i],[MODEL,[VENDOR,"Google"],[TYPE,TABLET]],[/android.+;\s(pixel( [2-9]a?)?( xl)?)[\s)]/i],[MODEL,[VENDOR,"Google"],[TYPE,MOBILE]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,/android.+(redmi[\s\-_]?(?:note|k)?(?:[\s_]?[\w\s]+))(?:\sbuild|\))/i,/android.+(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],[[MODEL,/_/g," "],[VENDOR,"Xiaomi"],[TYPE,MOBILE]],[/android.+(mi[\s\-_]?(?:pad)(?:[\s_]?[\w\s]+))(?:\sbuild|\))/i],[[MODEL,/_/g," "],[VENDOR,"Xiaomi"],[TYPE,TABLET]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[MODEL,[VENDOR,"Meizu"],[TYPE,MOBILE]],[/(mz)-([\w-]{2,})/i],[[VENDOR,"Meizu"],MODEL,[TYPE,MOBILE]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})[\s)]/i],[MODEL,[VENDOR,"OnePlus"],[TYPE,MOBILE]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[MODEL,[VENDOR,"RCA"],[TYPE,TABLET]],[/android.+[;\/\s](Venue[\d\s]{2,7})\s+build/i],[MODEL,[VENDOR,"Dell"],[TYPE,TABLET]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[MODEL,[VENDOR,"Verizon"],[TYPE,TABLET]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[VENDOR,"Barnes & Noble"],MODEL,[TYPE,TABLET]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[MODEL,[VENDOR,"NuVision"],[TYPE,TABLET]],[/android.+;\s(k88)\sbuild/i],[MODEL,[VENDOR,"ZTE"],[TYPE,TABLET]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[MODEL,[VENDOR,"Swiss"],[TYPE,MOBILE]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[MODEL,[VENDOR,"Swiss"],[TYPE,TABLET]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[MODEL,[VENDOR,"Zeki"],[TYPE,TABLET]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[VENDOR,"Dragon Touch"],MODEL,[TYPE,TABLET]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[MODEL,[VENDOR,"Insignia"],[TYPE,TABLET]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[MODEL,[VENDOR,"NextBook"],[TYPE,TABLET]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[VENDOR,"Voice"],MODEL,[TYPE,MOBILE]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[VENDOR,"LvTel"],MODEL,[TYPE,MOBILE]],[/android.+;\s(PH-1)\s/i],[MODEL,[VENDOR,"Essential"],[TYPE,MOBILE]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[MODEL,[VENDOR,"Envizen"],[TYPE,TABLET]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[VENDOR,MODEL,[TYPE,TABLET]],[/android.+[;\/]\s*(Trio[\s\w\-\.]+)\s+build/i],[MODEL,[VENDOR,"MachSpeed"],[TYPE,TABLET]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[VENDOR,MODEL,[TYPE,TABLET]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[MODEL,[VENDOR,"Rotor"],[TYPE,TABLET]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[VENDOR,MODEL,[TYPE,TABLET]],[/android .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],[MODEL,[TYPE,MOBILE]],[/android .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],[MODEL,[TYPE,TABLET]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[TYPE,util.lowerize],VENDOR,MODEL],[/[\s\/\(](smart-?tv)[;\)]/i],[[TYPE,SMARTTV]],[/(android[\w\.\s\-]{0,9});.+build/i],[MODEL,[VENDOR,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[VERSION,[NAME,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[VERSION,[NAME,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[NAME,VERSION],[/rv\:([\w\.]{1,9}).+(gecko)/i],[VERSION,NAME]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[NAME,VERSION],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[NAME,[VERSION,mapper.str,maps.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[NAME,"Windows"],[VERSION,mapper.str,maps.os.windows.version]],[/\((bb)(10);/i],[[NAME,"BlackBerry"],VERSION],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],[NAME,VERSION],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[NAME,"Symbian"],VERSION],[/\((series40);/i],[NAME],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[NAME,"Firefox OS"],VERSION],[/crkey\/([\d\.]+)/i],[VERSION,[NAME,"Chromecast"]],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[NAME,VERSION],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[NAME,"Chromium OS"],VERSION],[/(sunos)\s?([\w\.\d]*)/i],[[NAME,"Solaris"],VERSION],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[NAME,VERSION],[/(haiku)\s(\w+)/i],[NAME,VERSION],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[VERSION,/_/g,"."],[NAME,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[NAME,"Mac OS"],[VERSION,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[NAME,VERSION]]};var UAParser=function(uastring,extensions){if(typeof uastring==="object"){extensions=uastring;uastring=undefined}if(!(this instanceof UAParser)){return new UAParser(uastring,extensions).getResult()}var ua=uastring||(window&&window.navigator&&window.navigator.userAgent?window.navigator.userAgent:EMPTY);var rgxmap=extensions?util.extend(regexes,extensions):regexes;this.getBrowser=function(){var browser={name:undefined,version:undefined};mapper.rgx.call(browser,ua,rgxmap.browser);browser.major=util.major(browser.version);return browser};this.getCPU=function(){var cpu={architecture:undefined};mapper.rgx.call(cpu,ua,rgxmap.cpu);return cpu};this.getDevice=function(){var device={vendor:undefined,model:undefined,type:undefined};mapper.rgx.call(device,ua,rgxmap.device);return device};this.getEngine=function(){var engine={name:undefined,version:undefined};mapper.rgx.call(engine,ua,rgxmap.engine);return engine};this.getOS=function(){var os={name:undefined,version:undefined};mapper.rgx.call(os,ua,rgxmap.os);return os};this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}};this.getUA=function(){return ua};this.setUA=function(uastring){ua=uastring;return this};return this};UAParser.VERSION=LIBVERSION;UAParser.BROWSER={NAME:NAME,MAJOR:MAJOR,VERSION:VERSION};UAParser.CPU={ARCHITECTURE:ARCHITECTURE};UAParser.DEVICE={MODEL:MODEL,VENDOR:VENDOR,TYPE:TYPE,CONSOLE:CONSOLE,MOBILE:MOBILE,SMARTTV:SMARTTV,TABLET:TABLET,WEARABLE:WEARABLE,EMBEDDED:EMBEDDED};UAParser.ENGINE={NAME:NAME,VERSION:VERSION};UAParser.OS={NAME:NAME,VERSION:VERSION};if(typeof exports!==UNDEF_TYPE){if(typeof module!==UNDEF_TYPE&&module.exports){exports=module.exports=UAParser}exports.UAParser=UAParser}else{if(true){!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return UAParser}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}else {}}var $=window&&(window.jQuery||window.Zepto);if($&&!$.ua){var parser=new UAParser;$.ua=parser.getResult();$.ua.get=function(){return parser.getUA()};$.ua.set=function(uastring){parser.setUA(uastring);var result=parser.getResult();for(var prop in result){$.ua[prop]=result[prop]}}}})(typeof window==="object"?window:this);

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

/***/ "./src/idea-details/component/idea-details.jsx":
/*!*****************************************************!*\
  !*** ./src/idea-details/component/idea-details.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IdeasDetails; });
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/index.jsx */ "./src/libs/index.jsx");
/* harmony import */ var _poll_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../poll/index.jsx */ "./src/poll/index.jsx");
/* harmony import */ var _reactions_index_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reactions/index.jsx */ "./src/reactions/index.jsx");
/* harmony import */ var _vote_button_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vote-button.jsx */ "./src/idea-details/component/vote-button.jsx");
/* harmony import */ var _image_index_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../image/index.jsx */ "./src/image/index.jsx");


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







'use strict'; // todo: een error op fetch wordt niet goed afgevangen


var IdeasDetails = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(IdeasDetails, _OpenStadComponent);

  var _super = _createSuper(IdeasDetails);

  function IdeasDetails(props) {
    var _this;

    _classCallCheck(this, IdeasDetails);

    _this = _super.call(this, props, {
      siteId: null,
      ideaId: null,
      idea: {
        showVoteButtons: true,
        showLabels: false,
        allowMultipleImages: false,
        shareChannelsSelection: ["facebook", "twitter", "mail", "whatsapp"],
        metaDataTemplate: null
      },
      argument: {
        isActive: true,
        formIntro: 'Mijn reactie op deze inzending is ...',
        ignoreReactionsForIdeaIds: '',
        closeReactionsForIdeaIds: ''
      },
      poll: {
        canAddPolls: false
      },
      labels: {},
      types: null,
      typeField: 'typeId',
      typeLabel: 'Thema'
    });
    _this.state = {
      idea: _this.props.idea,
      ideaId: props.idea && props.idea.id || _this.config.ideaId,
      showPollForm: false
    };
    return _this;
  }

  _createClass(IdeasDetails, [{
    key: "componentDidMount",
    value: function componentDidMount(prevProps, prevState) {
      var self = this;

      self.reactionAddedListener = function (event) {
        self.onReactionStored(event.detail, true);
      };

      document.addEventListener('osc-new-reaction-stored', self.reactionAddedListener);

      self.reactionEditedListener = function (event) {
        self.onReactionStored(event.detail);
      };

      document.addEventListener('osc-reaction-edited', self.reactionEditedListener);

      self.reactionDeletedListener = function (event) {
        self.onReactionDeleted(event.detail);
      };

      document.addEventListener('osc-reaction-deleted', self.reactionDeletedListener);

      self.pollCreatedListener = function (event) {
        self.onPollCreated(event.detail);
      };

      document.addEventListener('osc-new-poll-stored', self.pollCreatedListener);

      self.pollDeletedListener = function (event) {
        self.onPollDeleted(event.detail);
      };

      document.addEventListener('osc-poll-deleted', self.pollDeletedListener);
      self.fetchData();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('osc-new-reaction-stored', this.reactionAddedListener);
      document.removeEventListener('osc-reaction-edited', this.reactionEditedListener);
      document.removeEventListener('osc-reaction-deleted', this.reactionDeletedListener);
      document.removeEventListener('osc-new-poll-stored', this.pollCreatedListener);
      document.removeEventListener('osc-poll-deleted', this.pollDeletedListener);
    }
  }, {
    key: "dispatchEditIdeaButtonClick",
    value: function dispatchEditIdeaButtonClick(e) {
      e.stopPropagation();

      if (this.config.editIdeaLink) {
        document.location.href = this.config.editIdeaLink;
      } else {
        var event = new window.CustomEvent('osc-edit-idea-button-click', {
          detail: this.state.idea
        });
        document.dispatchEvent(event);
      }
    }
  }, {
    key: "showPollForm",
    value: function showPollForm() {
      this.setState({
        showPollForm: true
      });
    }
  }, {
    key: "hidePollForm",
    value: function hidePollForm() {
      this.setState({
        showPollForm: false
      });
    }
  }, {
    key: "dispatchAddPollClick",
    value: function dispatchAddPollClick(e) {
      e.stopPropagation();
      this.showPollForm();
    }
  }, {
    key: "onReactionStored",
    value: function onReactionStored(data, isNew) {
      if (isNew) this.state.idea.argCount++;
      this.setState({
        idea: this.state.idea
      });
    }
  }, {
    key: "onReactionDeleted",
    value: function onReactionDeleted(data) {
      this.state.idea.argCount--;
      this.setState({
        idea: this.state.idea
      });
    }
  }, {
    key: "onPollCreated",
    value: function onPollCreated() {
      this.hidePollForm();
      this.fetchData();
    }
  }, {
    key: "onPollDeleted",
    value: function onPollDeleted() {
      this.fetchData();
    }
  }, {
    key: "fetchData",
    value: function fetchData() {
      var self = this;
      var ideaId = self.state.ideaId || this.state.idea && this.state.idea.id;
      if (!ideaId) return;
      var url = "".concat(self.config.api.url, "/api/site/").concat(self.config.siteId, "/idea/").concat(ideaId, "?includeVoteCount=1&includeArguments=1&includeArgsCount=1&includeUser=1&includeUserVote=1");
      if (self.config.poll.canAddPolls) url += '&includePoll=1';
      var headers = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].api.getHeaders(self.config);
      fetch(url, {
        headers: headers
      }).then(function (response) {
        if (!response.ok) throw Error('Error fechting detail');
        return response.json();
      }).then(function (json) {
        var idea = json;
        self.setState({
          idea: idea
        }, function () {
          if (_libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].localStorage.get('osc-reactions-login-pending')) {
            window.location.hash = "#reactions";
            _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].localStorage.set('osc-reactions-login-pending', false);
          }
        });
      })["catch"](function (err) {
        console.log('Niet goed');
        console.log(err);
      });
    }
  }, {
    key: "deleteIdea",
    value: function deleteIdea() {
      var _this2 = this;

      var self = this;
      if (!(self.config.user && self.config.user.role && self.config.user.role == 'admin')) return;
      if (!(this.state.idea || this.state.idea.id)) return;
      var url = "".concat(self.config.api.url, "/api/site/").concat(self.config.siteId, "/idea/").concat(this.state.idea.id);
      var headers = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].api.getHeaders(self.config);
      var ideaId = this.state.idea.id; // backup

      fetch(url, {
        method: 'DELETE',
        headers: headers
      }).then(function (response) {
        if (!response.ok) throw Error('Error deleting idea');
        return response.json();
      }).then(function (json) {
        if (_this2.config.afterDeleteIdeaLink) {
          document.location.href = _this2.config.afterDeleteIdeaLink;
        } else {
          var event = new window.CustomEvent('osc-idea-deleted', {
            detail: {
              ideaId: ideaId
            }
          });
          document.dispatchEvent(event);
        }
      })["catch"](function (err) {
        console.log('Niet goed');
        console.log(err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      var idea = self.state.idea;
      if (!idea) return null;
      var labelHTML = null;

      if (self.config.idea.showLabels) {
        var typeId = eval("idea.".concat(self.config.typeField));
        var typeDef = self.config.types && self.config.types.find(function (def) {
          return def.id == typeId || def.value == typeId;
        });

        if (typeDef) {
          var labelText = typeDef.label;
          var backgroundColor = typeDef.backgroundColor;
          var textColor = typeDef.textColor;
          labelHTML = /*#__PURE__*/React.createElement("div", {
            className: "osc-idea-label",
            style: {
              color: textColor,
              backgroundColor: backgroundColor
            }
          }, labelText);
        }
      }

      var pollHTML = null;
      var addPollButtonHTML = null;

      if (self.config.poll.canAddPolls) {
        if (idea.poll || self.state.showPollForm) {
          pollHTML = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
            id: "poll",
            className: "osc-poll-header"
          }, /*#__PURE__*/React.createElement("h3", null, self.config.poll.title || 'Poll')), /*#__PURE__*/React.createElement(_poll_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
            config: _objectSpread(_objectSpread(_objectSpread({}, self.config), self.config.poll), {}, {
              ideaId: self.state.ideaId
            }),
            poll: idea.poll
          }));
        } else {
          if (idea.can && idea.can.edit) {
            addPollButtonHTML = /*#__PURE__*/React.createElement("div", {
              className: "osc-editbuttons-container"
            }, /*#__PURE__*/React.createElement("button", {
              className: "osc-idea-details-editbutton osc-edit",
              onClick: function onClick(event) {
                return self.dispatchAddPollClick(event);
              }
            }, "Poll toevoegen"));
          }
        }
      }

      var voteButtonsHTML = null;

      if (self.config.idea.showVoteButtons) {
        voteButtonsHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-details-vote-buttons-container"
        }, /*#__PURE__*/React.createElement("h3", null, "Likes"), /*#__PURE__*/React.createElement(_vote_button_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
          config: {
            text: 'eens',
            opinion: 'yes',
            api: this.config.api,
            user: this.config.user,
            siteId: this.config.siteId
          },
          idea: this.state.idea,
          name: "likebutton",
          value: idea.yes
        }));
      }

      var editButtonsHTML = null;

      if (idea.can && idea.can.edit) {
        editButtonsHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-editbuttons-container"
        }, /*#__PURE__*/React.createElement("button", {
          className: "osc-idea-details-editbutton osc-edit",
          onClick: function onClick(event) {
            return self.dispatchEditIdeaButtonClick(event);
          }
        }, "Bewerk idee"), /*#__PURE__*/React.createElement("button", {
          className: "osc-idea-details-editbutton osc-delete",
          onClick: function onClick(event) {
            if (confirm('Weet je het zeker')) self.deleteIdea(event);
          }
        }, "Verwijder idee"));
      }

      var modBreakHTML = null;

      if (idea && idea.modBreak) {
        modBreakHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-modbreak"
        }, idea.modBreakDateHumanized, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), idea.modBreak);
      }

      var reactionsCountHTML = null;

      if (self.config.argument.isActive) {
        reactionsCountHTML = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Reacties"), /*#__PURE__*/React.createElement("a", {
          href: "#reactions",
          className: "osc-no-of-reactions"
        }, idea.argCount || 0, " reacties"));
      }

      var reactionsHTML = null;

      if (self.config.argument.isActive) {
        // todo: refactor config zodat hij in reactions ook gewoon argument: {} heet, en dan deze regels naar daar
        var config = _objectSpread({}, self.config);

        config.argument.isActive = this.config.argument.isActive && !this.config.argument.ignoreReactionsForIdeaIds.match(new RegExp("(?:^|\\D)".concat(idea.id, "(?:\\D|$)")));
        config.argument.isClosed = this.config.argument.isClosed || this.config.argument.closeReactionsForIdeaIds.match(new RegExp("(?:^|\\D)".concat(idea.id, "(?:\\D|$)")));
        reactionsHTML = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          id: "reactions",
          className: "osc-reactions-header"
        }, /*#__PURE__*/React.createElement("h3", null, self.config.argument.title || 'Reacties')), /*#__PURE__*/React.createElement(_reactions_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
          config: _objectSpread(_objectSpread({}, self.config.argument), {}, {
            title: undefined,
            api: self.config.api,
            user: self.config.user,
            siteId: self.config.siteId,
            ideaId: idea.id,
            loginUrl: self.config.loginUrl
          })
        }));
      }

      var shareButtonsHTML = null;

      if (self.config.idea.shareChannelsSelection.length) {
        var facebookButtonHTML = self.config.idea.shareChannelsSelection.includes('facebook') ? /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
          className: "osc-share-facebook",
          target: "_blank",
          href: 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(document.location.href)
        }, "Facebook")) : null;
        var twitterButtonHTML = self.config.idea.shareChannelsSelection.includes('twitter') ? /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
          className: "osc-share-twitter",
          target: "_blank",
          href: 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(document.location.href)
        }, "Twitter")) : null;
        var mailButtonHTML = self.config.idea.shareChannelsSelection.includes('mail') ? /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
          className: "osc-share-email",
          target: "_blank",
          href: 'mailto:?subject=' + encodeURIComponent(eval("idea.".concat(self.config.titleField))) + '&body=' + encodeURIComponent(document.location.href)
        }, "Email")) : null;
        var whatsappButtonHTML = self.config.idea.shareChannelsSelection.includes('whatsapp') ? /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
          className: "osc-share-whatsapp",
          target: "_blank",
          href: 'https://wa.me/?text=' + encodeURIComponent(document.location.href)
        }, "WhatsApp")) : null;
        shareButtonsHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-details-sharebuttons"
        }, /*#__PURE__*/React.createElement("ul", null, facebookButtonHTML, twitterButtonHTML, mailButtonHTML, whatsappButtonHTML));
      }

      var authorHTML = idea.user.nickName || idea.user.fullName || idea.user.firstName + ' ' + idea.user.lastName;

      if (this.config.linkToUserPageUrl) {
        authorHTML = /*#__PURE__*/React.createElement("a", {
          href: this.config.linkToUserPageUrl + '/' + idea.user.id,
          className: "osc-author-link"
        }, authorHTML);
      }

      var metaDataHTML = self.config.idea.metaDataTemplate;

      if (metaDataHTML) {
        metaDataHTML = metaDataHTML.replace(/\{createDate\}/, idea.createDateHumanized);
        metaDataHTML = metaDataHTML.replace(/\{theme\}/, idea.extraData.theme);
        metaDataHTML = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].reactTemplate({
          html: metaDataHTML,
          username: authorHTML
        });
      }

      return /*#__PURE__*/React.createElement("div", {
        id: self.id,
        className: self.props.className || 'osc-info-block-idea-details',
        ref: function ref(el) {
          return self.instance = el;
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "osc-spacer"
      }), /*#__PURE__*/React.createElement("div", {
        className: "osc-idea-details-container"
      }, /*#__PURE__*/React.createElement("div", {
        className: "osc-idea-details"
      }, /*#__PURE__*/React.createElement("h2", null, eval("idea.".concat(self.config.titleField))), /*#__PURE__*/React.createElement("div", {
        className: "osc-details-image-and-stats"
      }, /*#__PURE__*/React.createElement("div", {
        className: "osc-idea-image-container"
      }, /*#__PURE__*/React.createElement(_image_index_jsx__WEBPACK_IMPORTED_MODULE_5__["IdeaImage"], {
        config: {
          allowMultipleImages: self.config.idea.allowMultipleImages
        },
        idea: idea
      })), labelHTML, shareButtonsHTML, /*#__PURE__*/React.createElement("div", {
        className: "osc-details-stats"
      }, voteButtonsHTML, reactionsCountHTML, editButtonsHTML)), /*#__PURE__*/React.createElement("p", {
        className: ""
      }, metaDataHTML), modBreakHTML, /*#__PURE__*/React.createElement("p", {
        className: "osc-details-summary"
      }, idea.summary), /*#__PURE__*/React.createElement("p", {
        className: "osc-details-description",
        dangerouslySetInnerHTML: {
          __html: idea.description
        }
      }), addPollButtonHTML), pollHTML, reactionsHTML, /*#__PURE__*/React.createElement("div", {
        className: "osc-bottom-spacer"
      })));
    }
  }]);

  return IdeasDetails;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/idea-details/component/vote-button.jsx":
/*!****************************************************!*\
  !*** ./src/idea-details/component/vote-button.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VoteButton; });
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/index.jsx */ "./src/libs/index.jsx");


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

var VoteButton = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(VoteButton, _OpenStadComponent);

  var _super = _createSuper(VoteButton);

  function VoteButton(props) {
    var _this;

    _classCallCheck(this, VoteButton);

    _this = _super.call(this, props, {
      name: 'likebutton',
      backgroundColor: '#164995',
      color: '#fff',
      text: 'like',
      opinion: 'yes'
    });
    _this.state = {
      value: _this.props.value,
      busy: false
    };
    return _this;
  }

  _createClass(VoteButton, [{
    key: "componentDidMount",
    value: function componentDidMount(prevProps, prevState) {
      // return from anonymous login
      var votePending = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].localStorage.get('osc-ideas-on-map-vote-pending');

      if (votePending) {
        this.doVote();
        _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].localStorage.remove('osc-ideas-on-map-vote-pending');
      }
    }
  }, {
    key: "doVote",
    value: function doVote(e) {
      var _this2 = this;

      if (e) e.stopPropagation();
      if (this.state.busy) return;
      this.setState({
        busy: true
      });
      var self = this;
      var url = "".concat(self.config.api.url, "/api/site/").concat(self.config.siteId, "/vote");
      var headers = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].api.getHeaders(self.config); // if (!self.config.api.isUserLoggedIn) url += '?useOauth=anonymous'

      if (!(self.config.user && self.config.user.role)) {
        _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].localStorage.set('osc-ideas-on-map-vote-pending', true);
        var loginUrl = '/oauth/login?returnTo=' + encodeURIComponent(document.location.href) + '&useOauth=anonymous';
        return document.location.href = loginUrl;
      }

      fetch(url, {
        method: 'post',
        headers: headers,
        body: JSON.stringify({
          ideaId: self.props.idea.id,
          opinion: self.config.opinion
        })
      }).then(function (response) {
        if (!response.ok) throw Error('Stemmen is niet gelukt');
        return response.json();
      }).then(function (json) {
        var change = json.length ? 1 : -1;
        var value = self.state.value + change;
        self.setState({
          value: value
        });
        self.props.idea.userVote = json.length && json || null;

        _this2.setState({
          busy: false
        });

        var event = new window.CustomEvent('osc-idea-liked', {
          detail: {
            ideaId: self.props.idea.id,
            change: change
          }
        });
        document.dispatchEvent(event);
      })["catch"](function (err) {
        alert(err.message);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      var value = parseInt(self.state.value) || 0;
      var value000 = parseInt(value / 100) || 0;
      var value00 = parseInt((value - 100 * value000) / 10) || 0;
      var value0 = value - value000 * 100 - value00 * 10;
      return /*#__PURE__*/React.createElement("div", {
        id: self.id,
        className: self.props.className || 'osc-vote-button osc-number-button',
        ref: function ref(el) {
          return self.instance = el;
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "osc-number-plates",
        style: {
          color: this.config.color,
          backgroundColor: this.config.backgroundColor
        }
      }, /*#__PURE__*/React.createElement("div", {
        id: "".concat(this.config.name, "-number-plate-000"),
        className: "osc-number-plate"
      }, value000), /*#__PURE__*/React.createElement("div", {
        id: "".concat(this.config.name, "-number-plate-00"),
        className: "osc-number-plate"
      }, value00), /*#__PURE__*/React.createElement("div", {
        id: "".concat(this.config.name, "-number-plate-0"),
        className: "osc-number-plate"
      }, value0)), /*#__PURE__*/React.createElement("div", {
        className: "osc-number-button-text ".concat(this.config.name, "-name ").concat(this.props.idea.userVote ? ' osc-user-has-voted' : '', " ").concat(this.state.busy ? ' osc-busy' : ''),
        style: {
          color: this.config.color,
          backgroundColor: this.config.backgroundColor
        },
        onClick: function onClick(e) {
          return self.doVote(e);
        }
      }, self.config.text), /*#__PURE__*/React.createElement("div", {
        className: "osc-clear-both"
      }));
    }
  }]);

  return VoteButton;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/idea-details/css/default.less":
/*!*******************************************!*\
  !*** ./src/idea-details/css/default.less ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/idea-details/index.jsx":
/*!************************************!*\
  !*** ./src/idea-details/index.jsx ***!
  \************************************/
/*! exports provided: default, IdeaDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_default_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/default.less */ "./src/idea-details/css/default.less");
/* harmony import */ var _css_default_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_default_less__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_idea_details_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/idea-details.jsx */ "./src/idea-details/component/idea-details.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _component_idea_details_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdeaDetails", function() { return _component_idea_details_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]; });

// polyfills
 // react


 // import css to make sure it is generated in the result

 // the module

 // render elements

_component_idea_details_jsx__WEBPACK_IMPORTED_MODULE_4__["default"].renderElement = function renderElement(elem, config) {
  var attributes = elem.attributes;
  react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_component_idea_details_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    attributes: attributes,
    config: config
  }), elem);
};



/***/ }),

/***/ "./src/ideas-on-map/component/filterbar.jsx":
/*!**************************************************!*\
  !*** ./src/ideas-on-map/component/filterbar.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filterbar; });
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _ideas_overview_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ideas-overview/index.jsx */ "./src/ideas-overview/index.jsx");
/* harmony import */ var _search_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.jsx */ "./src/ideas-on-map/component/search.jsx");


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





var Filterbar = /*#__PURE__*/function (_IdeasFilterbar) {
  _inherits(Filterbar, _IdeasFilterbar);

  var _super = _createSuper(Filterbar);

  function Filterbar() {
    _classCallCheck(this, Filterbar);

    return _super.apply(this, arguments);
  }

  _createClass(Filterbar, [{
    key: "render",
    value: function render() {
      var self = this;
      var searchHTML = null;

      if (self.config.search) {
        // searchHTML = (
        //   <div className={`osc-ideas-search-container`}>
        //   	<div className="osc-ideas-search-button" onClick={() => self.toggleMobileActiveSelector('search')}></div>
        //   	<IdeasSearch config={ self.config.search } className={`${self.state.mobileActiveSelector == 'search' ? ' osc-is-active' : ''}`} ref={el => self.search = el}/>
        //   </div>
        // );
        searchHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-search-container"
        }, /*#__PURE__*/React.createElement("div", {
          className: "osc-search-button",
          onClick: function onClick() {
            return self.toggleMobileActiveSelector('search');
          }
        }), /*#__PURE__*/React.createElement(_search_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
          config: _objectSpread({}, this.config),
          className: "osc-search".concat(self.state.mobileActiveSelector == 'search' ? ' osc-is-active' : '')
        }));
      } // TODO: configurable?


      var resetButtonHTML = null;
      resetButtonHTML = /*#__PURE__*/React.createElement("button", {
        value: "reset",
        onClick: function onClick() {
          return self.resetAll();
        },
        className: "osc-button osc-reset-button"
      }, "Alles tonen");
      var filterHTML = null;

      if (self.config.filter.length) {
        var isActive = self.filters && self.filters.find(function (filter) {
          return filter.state.currentValue;
        });
        self.filters = [];
        filterHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-ideas-filters-and-button-container"
        }, /*#__PURE__*/React.createElement("div", {
          className: "osc-ideas-filter-button".concat(isActive ? ' osc-active' : ''),
          onClick: function onClick() {
            return self.toggleMobileActiveSelector('filters');
          }
        }), /*#__PURE__*/React.createElement("div", {
          className: "osc-ideas-filters-container".concat(self.state.mobileActiveSelector == 'filters' ? ' osc-is-active' : '')
        }, self.config.filter.map(function (filterConfig, i) {
          return /*#__PURE__*/React.createElement(_ideas_overview_index_jsx__WEBPACK_IMPORTED_MODULE_1__["IdeasFilter"], {
            config: filterConfig,
            className: "osc-align-right-container",
            key: "osc-ideas-filter-".concat(i),
            ref: function ref(el) {
              return self.filters[i] = el;
            }
          });
        })), resetButtonHTML);
      }

      var filtersAndButtonsHTML = null;
      filtersAndButtonsHTML = /*#__PURE__*/React.createElement("div", {
        className: "osc-ideas-filters-and-reset-button-container"
      }, filterHTML);
      return /*#__PURE__*/React.createElement("div", {
        className: "osc-ideas-filterbar ".concat(self.props.className || '')
      }, searchHTML, filtersAndButtonsHTML);
    }
  }]);

  return Filterbar;
}(_ideas_overview_index_jsx__WEBPACK_IMPORTED_MODULE_1__["IdeasFilterbar"]);



/***/ }),

/***/ "./src/ideas-on-map/component/idea-form.jsx":
/*!**************************************************!*\
  !*** ./src/ideas-on-map/component/idea-form.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IdeasForm; });
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/index.jsx */ "./src/libs/index.jsx");
/* harmony import */ var _forms_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../forms/index.jsx */ "./src/forms/index.jsx");


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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



 // import OpenStadComponentImageUpload from './openstad-component-formelements/image-upload.jsx';
// import OpenStadComponentFormelementsInputWithCounter from './openstad-component-formelements/input-with-counter.jsx';

'use strict';

var IdeasForm = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(IdeasForm, _OpenStadComponent);

  var _super = _createSuper(IdeasForm);

  function IdeasForm(props) {
    var _this;

    _classCallCheck(this, IdeasForm);

    _this = _super.call(this, props, {
      user: {},
      ideaId: null,
      idea: {
        titleMinLength: 10,
        titleMaxLength: 20,
        summaryMinLength: 20,
        summaryMaxLength: 140,
        descriptionMinLength: 140,
        descriptionMaxLength: 5000,
        fields: []
      }
    });

    var self = _assertThisInitialized(_this);

    var fields = self.config.idea.fields = _toConsumableArray(self.config.idea.fields);

    if (!self.props.idea.extraData) self.props.idea.extraData = {};
    var state = {
      formfields: {
        id: self.props.idea.id || '',
        user: self.props.idea.user || {}
      },
      showFormErrorsWarning: false,
      isBusy: false
    };
    fields.forEach(function (field) {
      if (field.name) {
        state.formfields[field.name] = eval('self.props.idea.' + field.name);
        field.value = eval('self.props.idea.' + field.name);
      }
    });
    var titleField = fields.find(function (field) {
      return field.name == 'title';
    });

    if (titleField) {
      titleField.minLength = self.config.idea.titleMinLength;
      titleField.maxLength = self.config.idea.titleMaxLength;
    }

    var summaryField = fields.find(function (field) {
      return field.name == 'summary';
    });

    if (summaryField) {
      summaryField.minLength = self.config.idea.summaryMinLength;
      summaryField.maxLength = self.config.idea.summaryMaxLength;
    }

    var descriptionField = fields.find(function (field) {
      return field.name == 'description';
    });

    if (descriptionField) {
      descriptionField.minLength = self.config.idea.descriptionMinLength;
      descriptionField.maxLength = self.config.idea.descriptionMaxLength;
    }

    var imageField = fields.find(function (field) {
      return field.inputType == 'image-upload';
    }); // TODO: multiple images?

    if (imageField) {
      imageField.imageserver = self.config.imageserver;
    }

    if (_libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].user.hasRole(self.config.user, 'editor')) {
      // typeId
      if (self.config.types && self.config.typeField == 'typeId') {
        var choices = [];
        self.config.types.forEach(function (type) {
          var typeDef = type;

          if (!typeDef.auth || typeDef.auth.createableBy && _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].user.hasRole(self.config.user, typeDef.auth.createableBy)) {
            choices.push({
              title: typeDef.name,
              value: typeDef.id || typeDef.value
            });
          }
        });
        self.config.idea.fields.push({
          name: "typeId",
          title: "Type inzending",
          value: self.props.idea.typeId,
          inputType: "multiple-choice",
          choices: choices
        });
        state.formfields.typeId = self.props.idea.typeId;
      } // moderator


      self.config.idea.fields.push({
        name: "modBreak",
        title: "Moderator reactie",
        value: self.props.idea.modBreak,
        inputType: "textarea-with-counter",
        minLength: 0,
        maxLength: 2000
      });
      state.formfields.modBreak = self.props.idea.modBreak;
    } else {
      // hidden: typeId
      if (self.config.types && self.config.typeField == 'typeId') {
        self.config.idea.fields.push({
          name: "typeId",
          value: self.props.idea.typeId,
          inputType: "hidden"
        });
        state.formfields.typeId = self.props.idea.typeId;
      }
    }

    self.state = state;
    return _this;
  }

  _createClass(IdeasForm, [{
    key: "componentDidMount",
    value: function componentDidMount(prevProps, prevState) {
      var self = this;

      self.updateLocationListener = function (event) {
        self.updateLocation(event.detail && event.detail.location);
      };

      document.addEventListener('osc-update-location', self.updateLocationListener);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('osc-update-location', this.updateLocationListener);
    }
  }, {
    key: "updateLocation",
    value: function updateLocation(location) {
      if (!location) return;

      var state = _objectSpread({}, this.state);

      state.formfields['location'] = {
        coordinates: [location.lat, location.lng]
      };
      state.formfields['address'] = location.address;
      this.setState(state); // this.dispatchUpdateEditIdea(state.formfields)
    } // ik denk dat dit oud is
    // dispatchUpdateEditIdea(idea) {
    //   var event = new window.CustomEvent('osc-update-edit-idea', { detail: { idea } });
    //   document.dispatchEvent(event);
    // }

  }, {
    key: "validateIdea",
    value: function validateIdea() {
      var self = this;
      var isValid = true; // location

      if (self.state.formfields['location']) {
        self['form-warning-location'].style.display = 'none';
      } else {
        console.log('xxx');
        self['form-warning-location'].style.display = 'block';
        isValid = false;
      } // // images
      // if (!self.imageField.validate()) {
      //   self['form-warning-image'].style.display = 'block';
      //   isValid = false;
      // } else {
      //   self['form-warning-image'].style.display = 'none';
      // }


      return isValid;
    }
  }, {
    key: "submitIdea",
    value: function submitIdea() {
      var _this2 = this;

      var self = this;
      self.setState({
        isBusy: true
      }, function () {
        var formValues = self.form.getValues();
        var isValid = self.form.validate({
          showErrors: true,
          scrollTo: true
        });

        if (!self.validateIdea() || !isValid) {
          // validateIdea doet nog locatie en images
          self.setState({
            isBusy: false,
            showFormErrorsWarning: true
          });
          return;
        }

        self.setState({
          showFormErrorsWarning: false
        });
        if (!self.config.api.isUserLoggedIn) return alert('Je bent niet ingelogd');
        var url = self.config.api.url + '/api/site/' + self.config.siteId + '/idea';
        var headers = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].api.getHeaders(self.config);
        var body = {
          location: JSON.stringify(_objectSpread({
            "type": "Point"
          }, self.state.formfields['location']))
        };
        Object.keys(formValues).forEach(function (key) {
          var match = key.match(/^extraData\.(.+)/);

          if (match) {
            if (!body.extraData) body.extraData = {};
            body.extraData[match[1]] = formValues[key];
          } else {
            body[key] = formValues[key];
          }
        }); // if ( self.config.user && self.config.user.role == 'admin' ) {
        //   body.modBreak = self.state.formfields['modBreak'];
        // }

        var method = 'POST';

        if (typeof _this2.state.formfields.id == 'number') {
          method = 'PUT';
          url = url + '/' + _this2.state.formfields.id;
        }

        fetch(url, {
          method: method,
          headers: headers,
          body: JSON.stringify(body) // body data type must match "Content-Type" header

        }).then(function (response) {
          if (!response.ok) {
            throw response;
          }

          return response.json();
        }).then(function (json) {
          self.setState({
            isBusy: false
          }, function () {
            var event = new window.CustomEvent('osc-idea-stored', {
              detail: {
                idea: json
              }
            });
            document.dispatchEvent(event);
          });
        })["catch"](function (err) {
          console.log('Niet goed');
          console.log(err);

          if (typeof err.json == 'function') {
            err.json().then(function (json) {
              return self.setState({
                isBusy: false,
                showFormErrorsWarning: json.message
              });
            });
          } else {
            self.setState({
              isBusy: false,
              showFormErrorsWarning: err.message || err
            });
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var self = this;
      var formErrorsWarningHTML = null;

      if (self.state.showFormErrorsWarning) {
        var text = 'Niet alle velden zijn correct ingevuld. Scroll naar boven om te zien wat er mis gaat.';

        if (typeof self.state.showFormErrorsWarning == 'string') {
          text = self.state.showFormErrorsWarning;
        }

        formErrorsWarningHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-form-errors-warning"
        }, text);
      }

      var formHTML = null;
      formHTML = /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].Form, {
        config: {
          fields: self.config.idea.fields
        },
        values: {
          typeId: self.state.formfields.typeId
          /* typeId is hidden */

        },
        ref: function ref(el) {
          self.form = el;
        }
      });
      return /*#__PURE__*/React.createElement("div", {
        id: self.id,
        className: self.props.className || 'osc-infobar-idea-form',
        ref: function ref(el) {
          return self.instance = el;
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "osc-spacer"
      }), /*#__PURE__*/React.createElement("form", {
        className: "osc-form"
      }, /*#__PURE__*/React.createElement("h1", null, "Nieuw punt toevoegen"), /*#__PURE__*/React.createElement("div", {
        className: "osc-form-group"
      }, /*#__PURE__*/React.createElement("h2", null, "Naam"), self.state.formfields.user && self.state.formfields.user.fullName), /*#__PURE__*/React.createElement("div", {
        className: "osc-form-group"
      }, /*#__PURE__*/React.createElement("h2", null, "Een locatie vlakbij"), self.state.formfields.address || 'Adres wordt gezocht...', /*#__PURE__*/React.createElement("div", {
        className: "osc-form-warning",
        style: {
          display: 'none'
        },
        ref: function ref(el) {
          return _this3['form-warning-location'] = el;
        }
      }, "Geen locatie geselecteerd")), formHTML, /*#__PURE__*/React.createElement("br", null), formErrorsWarningHTML, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("a", {
        className: "osc-button osc-button-blue".concat(self.state.isBusy ? ' osc-disabled' : ''),
        onClick: function onClick() {
          if (!self.state.isBusy) self.submitIdea();
        },
        ref: function ref(el) {
          return self.submitButton = el;
        }
      }, "Versturen"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null)));
    }
  }]);

  return IdeasForm;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/ideas-on-map/component/ideas-on-map.jsx":
/*!*****************************************************!*\
  !*** ./src/ideas-on-map/component/ideas-on-map.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentIdeasOnMap; });
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _filterbar_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filterbar.jsx */ "./src/ideas-on-map/component/filterbar.jsx");
/* harmony import */ var _infobar_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./infobar.jsx */ "./src/ideas-on-map/component/infobar.jsx");
/* harmony import */ var _preview_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./preview.jsx */ "./src/ideas-on-map/component/preview.jsx");
/* harmony import */ var _map_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map.jsx */ "./src/ideas-on-map/component/map.jsx");
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _libs_index_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../libs/index.jsx */ "./src/libs/index.jsx");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var OpenStadComponentIdeasOnMap = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentIdeasOnMap, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentIdeasOnMap);

  function OpenStadComponentIdeasOnMap(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentIdeasOnMap);

    _this = _super.call(this, props, {
      display: {
        type: 'complete',
        width: null,
        height: null
      },
      canSelectLocation: true,
      types: [],
      typeField: null,
      titleField: 'title',
      summaryField: 'summary',
      user: {},
      api: {
        url: null,
        headers: null,
        isUserLoggedIn: false
      },
      idea: {
        canAddNewIdeas: true
      },
      content: {},
      search: {
        addresssesMunicipality: 'amsterdam'
      }
    });

    var self = _assertThisInitialized(_this); // config


    self.config.ideaName = self.config.ideaName || 'Inzendingen'; // defaults

    self.config.doSearchFunction = self.config.doSearchFunction || self.doSearch.bind(self);
    self.config.typeField = self.config.typeField || 'extraData.theme'; // tmp

    if (self.config.types && self.config.types.length) {
      self.config.types.forEach(function (entry) {
        if (entry.value && !entry.name) {
          entry.name = entry.value;
        }

        if (entry.mapicon && typeof entry.mapicon == 'string') {
          try {
            entry.mapicon = JSON.parse(entry.mapicon);
          } catch (err) {
            console.log(entry);
            console.log(err);
          }
        }

        if (entry.listicon && typeof entry.listicon == 'string') {
          try {
            entry.listicon = JSON.parse(entry.listicon);
          } catch (err) {
            console.log(entry);
            console.log(err);
          }
        }

        if (entry.buttonicon && typeof entry.buttonicon == 'string') {
          try {
            entry.buttonicon = JSON.parse(entry.buttonicon);
          } catch (err) {
            console.log(entry);
            console.log(err);
          }
        }
      });
    }

    self.state = {
      status: 'default',
      // default, idea-selected, location-selected, idea-details, idea-form
      infobarOnMobileIsOpen: false,
      ideas: [],
      visibleIdeas: [],
      // todo: dit wordt niet gebruikt; het gaat steeds via getVisibleIdeas maar deze state zou dus beter zijn
      listedIdeas: [],
      selectedIdea: null,
      selectedLocation: null,
      currentEditIdea: null
    };
    return _this;
  }

  _createClass(OpenStadComponentIdeasOnMap, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var self = this;
      window.addEventListener('hashchange', function (e) {
        var match = window.location.hash.match(/(\w)(\d+)/);

        if (match) {
          var ideaId = match[2];
          var idea = self.state.ideas && self.state.ideas.find(function (idea) {
            return idea.id == ideaId;
          });

          if (match[1] == 'D') {
            self.showIdeaDetails(idea);
          }

          if (match[1] == 'S') {}
        }
      }, false); // when the map is ready

      document.addEventListener('osc-map-is-ready', function (e) {
        // fetch the data
        self.fetchData({}); // handle map changes

        self.map.map.on('zoomend', function () {
          self.onChangeMapBoundaries();
        });
        self.map.map.on('moveend', function () {
          self.onChangeMapBoundaries();
        });
      }); // map events

      document.addEventListener('osc-map-click', function (event) {
        self.onMapClick(event.detail);
      });
      document.addEventListener('osc-map-marker-click', function (event) {
        self.onMarkerClick(event.detail);
      });
      document.addEventListener('osc-map-cluster-click', function (event) {
        self.onClusterClick(event.detail);
      }); // handle filter changes

      document.addEventListener('osc-ideas-filter-onchange', function (event) {
        self.onChangeFilter(event.detail);
      }); // infobar events

      document.addEventListener('osc-set-selected-idea', function (event) {
        self.onUpdateSelectedIdea(event.detail);
      });
      document.addEventListener('osc-set-selected-location', function (event) {
        // wordt gebruikt door close preview
        self.setSelectedLocation(null);
      });
      document.addEventListener('osc-new-idea-click', function (event) {
        self.onNewIdeaClick({
          idea: event.detail.idea
        });
      });
      document.addEventListener('osc-selected-idea-click', function (event) {
        self.onSelectedIdeaClick({
          idea: event.detail.idea
        });
      });
      document.addEventListener('osc-click-mobile-switcher', function (event) {
        self.onClickMobileSwitcher();
      }); // ideas list events

      document.addEventListener('osc-idea-tile-click', function (event) {
        self.onIdeaClick(event.detail.idea);
      });
      document.addEventListener('osc-idea-tile-mouse-over', function (event) {
        self.onTileMouseOver(event.detail.idea);
      });
      document.addEventListener('osc-idea-tile-mouse-out', function (event) {
        self.onTileMouseOut(event.detail.idea);
      }); // details changes

      document.addEventListener('osc-idea-liked', function (event) {
        self.onIdeaLiked(event.detail);
      });
      document.addEventListener('osc-new-reaction-stored', function (event) {
        self.onReactionStored(event.detail, true);
      });
      document.addEventListener('osc-reaction-edited', function (event) {
        self.onReactionStored(event.detail);
      });
      document.addEventListener('osc-reaction-deleted', function (event) {
        self.onReactionDeleted(event.detail);
      });
      document.addEventListener('osc-edit-idea-button-click', function (event) {
        self.onEditIdeaClick(event.detail);
      });
      document.addEventListener('osc-idea-deleted', function (event) {
        self.onIdeaDeleted(event.detail);
      }); // form changes

      document.addEventListener('osc-idea-stored', function (event) {
        document.location.href = "#";
        self.onIdeaStored(event.detail.idea);
      });
    }
  }, {
    key: "fetchData",
    value: function fetchData(_ref) {
      var showIdeaDetails = _ref.showIdeaDetails,
          showIdeaSelected = _ref.showIdeaSelected;
      var self = this;
      var url = "".concat(self.config.api.url, "/api/site/").concat(self.config.siteId, "/idea?includeVoteCount=1&includeArgsCount=1&includeUser=1");
      var headers = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_7__["default"].api.getHeaders(self.config); // remove existing

      while (self.map.markers.length > 0) {
        var marker = self.map.markers[0];
        self.map.removeMarker(marker);
      }

      self.map.markers = [];
      fetch(url, {
        headers: headers
      }).then(function (response) {
        return response.json();
      }).then(function (json) {
        // showIdeaDetails = showIdeaDetails || ( window.location.hash.match(/(\w)(\d+)/) && window.location.hash.match(/(\w)(\d+)/)[2] ) || OpenStadComponentLibs.localStorage.get('osc-ideas-on-map-details'); //  document.location.hash.replace(/.*details=(\d+).*/, "$1");
        // showIdeaSelected = showIdeaSelected || OpenStadComponentLibs.localStorage.get('osc-ideas-on-map-selected'); // document.location.hash.replace(/.*selected=(\d+).*/, "$1");
        showIdeaDetails = showIdeaDetails || window.location.hash.match(/^#D(\d+)/) && window.location.hash.match(/^#D(\d+)/)[1];
        showIdeaSelected = showIdeaSelected || window.location.hash.match(/^#S(\d+)/) && window.location.hash.match(/^#S(\d+)/)[1];
        var ideas = json.filter(function (idea) {
          return idea.location;
        });
        self.updateListedIdeas({
          ideas: ideas,
          sortOrder: self.config.sort.defaultValue
        });
        ideas.map(function (idea) {
          if (idea.id == showIdeaDetails) {
            showIdeaDetails = idea;
          }

          if (idea.id == showIdeaSelected) showIdeaSelected = idea;
          idea.image = idea.posterImage && idea.posterImage.key || idea.extraData && idea.extraData.images && idea.extraData.images[0] || "https://stemvanwest.amsterdam.nl/img/placeholders/idea.jpg";
          self.map.addIdea(idea);
        });
        self.map.setBoundsAndCenter();
        self.setState({
          ideas: ideas
        }, function () {
          self.setInfobarOnMobileIsOpen(self.config.startWithListOpenOnMobile);

          if (_typeof(showIdeaSelected) == 'object' && showIdeaSelected != null) {
            self.setCurrentEditIdea(null);
            self.setSelectedIdea(showIdeaSelected, function () {// ??
              // self.map.showMarkers({})
            });
          }

          if (_typeof(showIdeaDetails) == 'object' && showIdeaDetails != null) {
            self.showIdeaDetails(showIdeaDetails);
          }

          if (window.location.hash.match(/^#newidea/)) {
            // TODO: dit moet ook bestaande ideeen gaan werken
            var hash = window.location.hash;
            var match = hash.match(/&([^&]+)=([^&]+)/g);
            var idea = {};

            if (match) {
              match.forEach(function (entry) {
                var _entry$split = entry.split('='),
                    _entry$split2 = _slicedToArray(_entry$split, 2),
                    key = _entry$split2[0],
                    val = _entry$split2[1];

                key = key.substring(1, key.length);
                idea[key] = decodeURIComponent(val);

                try {
                  idea[key] = JSON.parse(idea[key]);
                } catch (err) {}
              });
            }

            self.setCurrentEditIdea(idea, function (currentEditIdea) {
              if (currentEditIdea.location) self.setSelectedLocation(currentEditIdea.location);
              self.showIdeaForm();
            });
          }

          self.onChangeMapBoundaries();
        });
      })["catch"](function (err) {
        console.log('Niet goed');
        console.log(err);
      });
    }
  }, {
    key: "updateListedIdeas",
    value: function updateListedIdeas(_ref2) {
      var _ref2$ideas = _ref2.ideas,
          ideas = _ref2$ideas === void 0 ? this.getVisibleIdeas() : _ref2$ideas,
          _ref2$sortOrder = _ref2.sortOrder,
          sortOrder = _ref2$sortOrder === void 0 ? this.state.currentSortOrder : _ref2$sortOrder,
          _ref2$center = _ref2.center,
          center = _ref2$center === void 0 ? {
        lat: 52.37104644463586,
        lng: 4.900402911007405
      } : _ref2$center,
          maxLength = _ref2.maxLength;

      if (sortOrder) {
        ideas = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_7__["default"].ideasSort({
          ideas: ideas,
          sortOrder: sortOrder,
          center: center
        });
      }

      if (maxLength) {
        ideas = ideas.splice(0, maxLength);
      }

      this.setState({
        listedIdeas: ideas
      });
    }
  }, {
    key: "setSelectedIdea",
    value: function setSelectedIdea(idea, next) {
      var self = this;
      self.setCurrentEditIdea(null);
      self.setSelectedLocation(null);
      var status = idea ? 'idea-selected' : self.state.status;
      self.setState({
        selectedIdea: idea,
        status: status
      }, function () {
        if (idea) {
          self.map.fadeMarkers({
            exception: idea
          });
          self.updateListedIdeas({
            ideas: self.state.ideas.filter(function (i) {
              return i.id != idea.id;
            }),
            sortOrder: 'distance',
            center: {
              lat: idea.location.coordinates[0],
              lng: idea.location.coordinates[1]
            },
            maxLength: 5
          });
        } else {
          self.map && self.map.unfadeAllMarkers();
          self.updateListedIdeas({
            ideas: self.getVisibleIdeas()
          });
        }

        if (next) return next(idea);
      });
    }
  }, {
    key: "setSelectedLocation",
    value: function setSelectedLocation(location, next) {
      var self = this;

      if (location && location.coordinates) {
        location.lat = location.coordinates[0];
        location.lng = location.coordinates[1];
      }

      self.map && self.map.setSelectedLocation(location);

      if (location) {
        location.isPointInPolygon = self.map.isPointInPolygon(location, self.config.map.polygon);
        self.map.fadeMarkers({});
        var id = self.state.selectedIdea && self.state.selectedIdea.id;
        self.updateListedIdeas({
          ideas: self.state.ideas.filter(function (idea) {
            return idea.id != id;
          }),
          sortOrder: 'distance',
          center: location,
          maxLength: 5
        });
        self.setState({
          selectedLocation: location
        }, function () {
          if (self.state.currentEditIdea) {
            self.updateCurrentEditIdea({
              location: location
            }, function (idea) {
              self.updateLocationAddress(idea.location);
            });
          }

          if (next) next(self.state.selectedLocation);
        });
        var event = new window.CustomEvent('osc-update-location', {
          detail: {
            location: location
          }
        });
        document.dispatchEvent(event);
      } else {
        self.setState({
          selectedLocation: null
        }, function () {
          self.map.unfadeAllMarkers();
          self.updateListedIdeas({
            ideas: self.getVisibleIdeas()
          });
          var event = new window.CustomEvent('osc-update-location', {
            detail: {
              location: location
            }
          });
          document.dispatchEvent(event);
          if (next) next(self.state.selectedLocation);
        });
      }
    }
  }, {
    key: "updateLocationAddress",
    value: function updateLocationAddress(location) {
      var self = this;
      if (!location) return;

      if (location.coordinates) {
        location.lat = location.coordinates[0];
        location.lng = location.coordinates[1];
      }

      self.map.getPointInfo(location, null, function (json, marker) {
        location.address = json && json._display || 'Geen adres gevonden';
        var event = new window.CustomEvent('osc-update-location', {
          detail: {
            location: location
          }
        });
        document.dispatchEvent(event);
      });
    }
  }, {
    key: "showIdeaDetails",
    value: function showIdeaDetails(idea) {
      var self = this;
      self.setSelectedIdea(idea);
      self.openInfobarOnMobile();
      self.setState({
        status: 'idea-details'
      }, function () {
        // self.map.map.invalidateSize();
        self.map.hideMarkers({
          exception: {
            location: {
              lat: idea.location.coordinates[0],
              lng: idea.location.coordinates[1]
            }
          }
        });
      });
    }
  }, {
    key: "hideIdeaDetails",
    value: function hideIdeaDetails() {
      var self = this;
      self.setState({
        status: 'idea-selected'
      }, function () {
        // todo: dit zou hij zelf via state moeten doen
        // self.map.map.invalidateSize();
        var selectedIdea = self.state.selectedIdea;

        if (selectedIdea) {
          self.updateListedIdeas({
            ideas: self.state.ideas.filter(function (idea) {
              return idea.id != selectedIdea.id;
            }),
            sortOrder: 'distance',
            center: {
              lat: selectedIdea.location.coordinates[0],
              lng: selectedIdea.location.coordinates[1]
            },
            maxLength: 5
          });
        }

        self.map.showMarkers({});
      });
    }
  }, {
    key: "setCurrentEditIdea",
    value: function setCurrentEditIdea(idea, next) {
      var self = this;
      var currentEditIdea = idea;
      return self.setState({
        currentEditIdea: currentEditIdea
      }, function () {
        var location = currentEditIdea && location || null; // if (idea == null) self.setSelectedLocation(location)

        if (next) return next(currentEditIdea);
      });
    }
  }, {
    key: "updateCurrentEditIdea",
    value: function updateCurrentEditIdea(data, next) {
      var currentEditIdea = this.state.currentEditIdea;
      currentEditIdea = merge__WEBPACK_IMPORTED_MODULE_0___default.a.recursive(currentEditIdea, data);
      return this.setCurrentEditIdea(currentEditIdea, next);
    }
  }, {
    key: "showIdeaForm",
    value: function showIdeaForm() {
      var self = this;
      var idea = self.state.currentEditIdea;

      if (self.config.idea.formUrl) {
        // external form: add data and ignore the rest
        var url = self.config.idea.formUrl;
        url = url.replace(/:ideaId/, typeof idea.id == 'number' ? idea.id : '');
        url = url.replace(/:location/, idea.location ? JSON.stringify({
          lat: idea.location.coordinates[0],
          lng: idea.location.coordinates[1]
        }) : '');
        url = url.replace(/:typeId/, idea.typeId);
        url = url.replace(/:address/, idea.address);
        document.location.href = url;
      } else {
        // internal form
        self.setState({
          status: 'idea-form'
        }, function () {
          self.map.map.invalidateSize();
          self.map.hideMarkers({
            exception: {
              location: idea && idea.location && {
                lat: idea.location.coordinates[0],
                lng: idea.location.coordinates[1]
              } || self.map.selectedLocation
            }
          });
          var location = idea.location || self.state.selectedLocation; // todo: deze doet het nu dus niet

          self.updateLocationAddress(location);
        });
      }
    }
  }, {
    key: "hideIdeaForm",
    value: function hideIdeaForm() {
      var self = this;

      if (this.state.currentEditIdea && typeof this.state.currentEditIdea.id == 'number') {
        var idea = self.state.ideas.find(function (idea) {
          return idea.id == self.state.currentEditIdea.id;
        });
        self.showIdeaDetails(idea);
        document.location.href = "#D" + idea.id;
      } else {
        var location = self.state.currentEditIdea && self.state.currentEditIdea.location || self.state.selectedLocation;

        if (location) {
          location.isPointInPolygon = this.map.isPointInPolygon(location, this.config.map.polygon);
          self.setState({
            status: 'location-selected'
          }, function () {
            self.map.showMarkers({});
          });
        } else {
          self.setState({
            status: 'default'
          }, function () {
            self.map.showMarkers({});
            self.setCurrentEditIdea(null);
          });
        }
      }
    }
  }, {
    key: "setInfobarOnMobileIsOpen",
    value: function setInfobarOnMobileIsOpen(what, callback) {
      this.setState({
        infobarOnMobileIsOpen: what
      });
      if (callback) callback();
    }
  }, {
    key: "openInfobarOnMobile",
    value: function openInfobarOnMobile(callback) {
      this.setState({
        infobarOnMobileIsOpen: true
      });
      if (callback) callback();
    }
  }, {
    key: "closeInfobarOnMobile",
    value: function closeInfobarOnMobile(callback) {
      this.setState({
        infobarOnMobileIsOpen: false
      });
      if (callback) callback();
    }
  }, {
    key: "doSearch",
    value: function doSearch(searchValue, callback) {
      var self = this;
      var searchValueLc = searchValue.toLowerCase();
      var searchResult = {
        ideas: [],
        locations: []
      }; // search in ideas

      this.state.ideas.forEach(function (idea) {
        var title = eval("idea.".concat(self.config.titleField)) || '';
        var titlelLc = title.toLowerCase();
        var summary = eval("idea.".concat(self.config.summaryField)) || '';
        var summaryLc = summary.toLowerCase();

        if (titlelLc.match(searchValueLc) || summaryLc.match(searchValueLc)) {
          searchResult.ideas.push({
            text: title,
            onClick: function onClick() {
              self.onUpdateSelectedIdea(idea);
            }
          });
        }
      }); // search for addresses

      fetch("https://geodata.nationaalgeoregister.nl/locatieserver/v3/suggest?rows=5&fq=gemeentenaam:".concat(self.config.search.addresssesMunicipality, "&fq=*:*&q=").concat(searchValueLc), {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        return response.json();
      }).then(function (json) {
        if (json && json.response && json.response.docs && json.response.docs.length) {
          searchResult.locations = json.response.docs.map(function (found) {
            return {
              text: found.weergavenaam,
              onClick: function onClick() {
                onClickAddress(found.id);
              }
            };
          });
        }

        callback(searchValue, searchResult);
      })["catch"](function (err) {
        console.log('Search failed:', err);
        callback(searchValue, searchResult);
      });

      function onClickAddress(id) {
        fetch("https://geodata.nationaalgeoregister.nl/locatieserver/v3/lookup?fq=gemeentenaam:".concat(self.config.search.addresssesMunicipality, "&&id=").concat(id), {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(function (response) {
          return response.json();
        }).then(function (json) {
          if (json && json.response && json.response.docs && json.response.docs[0]) {
            var centroide_ll = json.response.docs[0].centroide_ll;
            var match = centroide_ll.match(/POINT\((\d+\.\d+) (\d+\.\d+)\)/);
            self.map.map.panTo(new L.LatLng(match[2], match[1]));
            self.onMapClick({
              latlng: {
                lat: match[2],
                lng: match[1]
              }
            }, true);
          }
        })["catch"](function (err) {
          console.log('Search failed:', err);
          callback(searchValue, searchResult);
        });
      }
    }
  }, {
    key: "getVisibleIdeas",
    value: function getVisibleIdeas() {
      var visibleIdeas = this.map.getVisibleIdeas();
      this.setState({
        visibleIdeas: visibleIdeas
      });
      return visibleIdeas;
    }
  }, {
    key: "onMapClick",
    value: function onMapClick(event, forceSelectLocation) {
      var _this2 = this;

      if (this.state.infobarOnMobileIsOpen == true && react_device_detect__WEBPACK_IMPORTED_MODULE_1__["isMobile"]) {
        this.closeInfobarOnMobile();
        return;
      }

      switch (this.state.status) {
        case 'idea-details':
          break;

        case 'idea-form':
          var isPointInPolygon = this.map.isPointInPolygon(event.latlng, this.config.map.polygon);
          if (isPointInPolygon) this.setSelectedLocation(event.latlng);
          break;

        default:
          if ((this.state.selectedIdea || this.state.selectedLocation) && !forceSelectLocation) {
            this.setState({
              status: 'default'
            });
            document.location.href = '#';
            this.setSelectedIdea(null);
            this.updateListedIdeas({
              ideas: this.getVisibleIdeas()
            });
          } else {
            if (!this.config.canSelectLocation) break;
            this.setSelectedLocation(event.latlng, function (location) {
              _this2.setState({
                status: 'location-selected'
              });

              _this2.updateLocationAddress(location);
            });
          }

          this.map.updateFading();
          document.querySelector('#osc-ideas-on-map-info').scrollTo(0, 0);
      }
    }
  }, {
    key: "onMarkerClick",
    value: function onMarkerClick(event) {
      if (this.state.infobarOnMobileIsOpen == true && react_device_detect__WEBPACK_IMPORTED_MODULE_1__["isMobile"]) {
        this.closeInfobarOnMobile();
        return;
      }

      switch (this.state.status) {
        case 'idea-details':
          break;

        case 'idea-form':
          break;

        default:
          if (this.state.currentEditIdea || this.state.selectedLocation) {
            this.setSelectedIdea(null);
            this.setState({
              status: 'default'
            });
            this.setCurrentEditIdea(null);
            this.onUpdateSelectedIdea(null);
          } else {
            this.onUpdateSelectedIdea(event.target.data);
          }

          document.querySelector('#osc-ideas-on-map-info').scrollTo(0, 0);
      }
    }
  }, {
    key: "onClusterClick",
    value: function onClusterClick(event) {
      if (this.state.infobarOnMobileIsOpen == true && react_device_detect__WEBPACK_IMPORTED_MODULE_1__["isMobile"]) {
        this.closeInfobarOnMobile();
        return;
      }

      this.setState({
        status: 'default'
      });
      this.setCurrentEditIdea(null);
      this.setSelectedIdea(null);
    }
  }, {
    key: "onChangeMapBoundaries",
    value: function onChangeMapBoundaries() {
      var self = this;
      if (!self.map) return;
      self.map.updateFading();

      switch (self.state.status) {
        case 'idea-details':
          break;

        case 'idea-form':
          break;

        case 'idea-selected':
        case 'location-selected':
          if (self.infobar) {
            var selectedIdea = self.state.selectedIdea || self.state.currentEditIdea;

            if (selectedIdea) {
              self.updateListedIdeas({
                ideas: self.state.ideas.filter(function (idea) {
                  return idea.id != selectedIdea.id;
                }),
                sortOrder: 'distance',
                center: {
                  lat: selectedIdea.location.coordinates[0],
                  lng: selectedIdea.location.coordinates[1]
                },
                maxLength: 5
              });
            }
          }

          break;

        default:
          if (self.infobar) {
            self.updateListedIdeas({
              ideas: self.getVisibleIdeas()
            });
          }

      }
    }
  }, {
    key: "onUpdateSelectedIdea",
    value: function onUpdateSelectedIdea(idea) {
      var _this3 = this;

      var status = idea ? 'idea-selected' : 'default';

      if (idea) {
        document.location.href = '#S' + idea.id;
      } else {
        document.location.href = "#";
      }

      this.setState({
        status: status
      }, function () {
        _this3.setSelectedIdea(idea);
      });
    }
  }, {
    key: "onIdeaClick",
    value: function onIdeaClick(idea) {
      document.location.href = "#D" + idea.id;
    }
  }, {
    key: "onEditIdeaClick",
    value: function onEditIdeaClick(idea) {
      var self = this;
      self.setCurrentEditIdea(idea, function (currentEditIdea) {
        self.showIdeaForm();
      });
    }
  }, {
    key: "onIdeaDeleted",
    value: function onIdeaDeleted(ideaId) {
      var self = this;
      self.setCurrentEditIdea(null);
      self.setSelectedIdea(null);
      self.setSelectedLocation(null);
      self.setState({
        status: 'default'
      }, function () {
        // self.map.map.invalidateSize();
        self.map.setBoundsAndCenter();
        self.fetchData({});
      });
    }
  }, {
    key: "onDeleteIdeaClick",
    value: function onDeleteIdeaClick(idea) {
      console.log('Delete idea', idea.id);
    }
  }, {
    key: "onSelectedIdeaClick",
    value: function onSelectedIdeaClick(_ref3) {
      var idea = _ref3.idea;
      document.location.href = "#D" + idea.id;
    }
  }, {
    key: "onNewIdeaClick",
    value: function onNewIdeaClick(_ref4) {
      var idea = _ref4.idea;
      var self = this;
      var editIdea = merge__WEBPACK_IMPORTED_MODULE_0___default.a.recursive(this.state.currentEditIdea || {}, this.state.selectedLocation);
      editIdea.typeId = idea.typeId;
      self.setCurrentEditIdea(editIdea, function (currentEditIdea) {
        self.showIdeaForm();
      });
    }
  }, {
    key: "onIdeaStored",
    value: function onIdeaStored(idea) {
      this.setCurrentEditIdea(null);
      this.fetchData({
        showIdeaDetails: idea.id
      });
    }
  }, {
    key: "onIdeaLiked",
    value: function onIdeaLiked(data) {
      var idea = this.state.ideas.find(function (idea) {
        return idea.id == data.ideaId;
      });
      idea.yes += data.change;
    }
  }, {
    key: "onReactionStored",
    value: function onReactionStored(data, isNew) {
      if (isNew) {
        var idea = this.state.ideas.find(function (idea) {
          return idea.id == data.ideaId;
        });
        idea.argCount++;
      }
    }
  }, {
    key: "onReactionDeleted",
    value: function onReactionDeleted(data) {
      var idea = this.state.ideas.find(function (idea) {
        return idea.id == data.ideaId;
      });
      idea.argCount--;
    }
  }, {
    key: "onChangeFilter",
    value: function onChangeFilter(filter) {
      this.setSelectedIdea(null);
      this.setCurrentEditIdea(null);
      this.setSelectedLocation(null);
      this.setState({
        status: 'default'
      });
      this.onChangeMapBoundaries(); // todo: rename
    }
  }, {
    key: "onTileMouseOver",
    value: function onTileMouseOver(idea) {
      this.map.fadeMarkers({
        exception: idea
      });
      this.map.updateFading();
    }
  }, {
    key: "onTileMouseOut",
    value: function onTileMouseOut(idea) {
      this.map.unfadeAllMarkers();

      if (this.state.selectedIdea) {
        this.map.fadeMarkers({
          exception: this.state.selectedIdea
        });
      }

      if (this.map.selectedLocation) {
        this.map.fadeMarkers({});
      }

      this.map.updateFading();
    }
  }, {
    key: "onClickBackToOverview",
    value: function onClickBackToOverview(idea) {
      this.hideIdeaDetails();
      document.location.href = '#S' + this.state.selectedIdea.id;
    }
  }, {
    key: "onClickMobileSwitcher",
    value: function onClickMobileSwitcher() {
      var _this4 = this;

      var self = this;
      self.setInfobarOnMobileIsOpen(!this.state.infobarOnMobileIsOpen, function (result) {
        if (self.state.status == 'location-selected' || _this4.state.status == 'idea-selected') {
          var selectedIdea = self.state.selectedIdea || self.state.currentEditIdea;
          self.map.setBoundsAndCenter();
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var infoHTML = null; // todo: ik denk dat dit naar infobar moet

      var filterHTML = null;
      var mobilePopupHTML = null;

      switch (this.state.status) {
        case 'idea-details':
          infoHTML = /*#__PURE__*/React.createElement(_infobar_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
            config: this.config,
            displayType: "details",
            selectedIdea: this.state.selectedIdea,
            idea: this.state.selectedIdea,
            className: "osc-ideas-on-map-info",
            ref: function ref(el) {
              return _this5.infobar = el;
            }
          });
          filterHTML = /*#__PURE__*/React.createElement("div", {
            className: "osc-ideas-filterbar"
          }, /*#__PURE__*/React.createElement("div", {
            className: "osc-backbutton",
            onClick: function onClick() {
              return _this5.onClickBackToOverview();
            }
          }, "Terug naar overzicht"));
          break;

        case 'idea-form':
          infoHTML = /*#__PURE__*/React.createElement(_infobar_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
            config: this.config,
            displayType: "form",
            selectedIdea: this.state.selectedIdea,
            idea: _objectSpread(_objectSpread({}, this.state.currentEditIdea), {}, {
              user: this.state.currentEditIdea && this.state.currentEditIdea.user || this.config.user
            }),
            className: "osc-ideas-on-map-info",
            ref: function ref(el) {
              return _this5.infobar = el;
            }
          });
          filterHTML = /*#__PURE__*/React.createElement("div", {
            className: "osc-ideas-filterbar"
          }, /*#__PURE__*/React.createElement("div", {
            className: "osc-backbutton",
            onClick: function onClick() {
              return _this5.hideIdeaForm();
            }
          }, "Terug naar ", this.state.currentEditIdea && typeof this.state.currentEditIdea.id == 'number' ? 'idee' : 'overzicht'));
          break;

        case 'location-selected':
        case 'idea-selected':
          if (this.state.status == 'location-selected') {
            var location = this.state.selectedLocation || this.state.currentEditIdea && this.state.currentEditIdea.location || {};
            location.isPointInPolygon = this.map.isPointInPolygon(location, this.config.map.polygon);

            if (location.isPointInPolygon) {
              mobilePopupHTML = /*#__PURE__*/React.createElement(_preview_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
                config: _objectSpread(_objectSpread({}, this.config), {}, {
                  display: {
                    type: 'mobilePreview'
                  }
                }),
                selectedLocation: location
              });
            }
          } else {
            mobilePopupHTML = /*#__PURE__*/React.createElement("div", {
              className: "osc-mobile-popup osc-clickable",
              onClick: function onClick() {
                _this5.openInfobarOnMobile();

                document.location.href = "#D" + _this5.state.selectedIdea.id;
              }
            }, /*#__PURE__*/React.createElement("div", {
              className: "osc-image",
              style: {
                backgroundImage: "url(".concat(this.state.selectedIdea && this.state.selectedIdea.image, ")")
              }
            }), eval(this.state.selectedIdea && "this.state.selectedIdea.".concat(this.config.titleField)));
          }

          infoHTML = /*#__PURE__*/React.createElement(_infobar_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
            config: this.config,
            selectedIdea: this.state.selectedIdea,
            selectedLocation: this.state.selectedLocation,
            currentEditIdea: this.state.currentEditIdea,
            ideas: this.state.listedIdeas,
            id: "osc-ideas-on-map-info",
            className: "osc-ideas-on-map-info",
            infobarOnMobileIsOpen: this.state.infobarOnMobileIsOpen,
            ref: function ref(el) {
              return _this5.infobar = el;
            }
          });
          filterHTML = /*#__PURE__*/React.createElement(_filterbar_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
            config: this.config,
            className: "osc-ideas-filterbar"
          });
          break;

        default:
          infoHTML = /*#__PURE__*/React.createElement(_infobar_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
            config: this.config,
            selectedIdea: this.state.selectedIdea,
            ideas: this.state.listedIdeas,
            id: "osc-ideas-on-map-info",
            className: "osc-ideas-on-map-info",
            infobarOnMobileIsOpen: this.state.infobarOnMobileIsOpen,
            ref: function ref(el) {
              return _this5.infobar = el;
            }
          });
          filterHTML = /*#__PURE__*/React.createElement(_filterbar_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
            config: this.config,
            className: "osc-ideas-filterbar"
          });
          mobilePopupHTML = null;
          break;
      }

      var divStyle = {};
      var simpleHTML = null;

      if (this.config.display.type == 'simple') {
        filterHTML = null;
        infoHTML = null;
        mobilePopupHTML = null;
        var buttonHTML = null;
        if (this.config.linkToCompleteUrl) buttonHTML = /*#__PURE__*/React.createElement("button", {
          onClick: function onClick() {
            document.location.href = _this5.config.linkToCompleteUrl;
          },
          className: "osc-button-blue",
          style: {
            position: 'absolute',
            top: 20,
            right: 20
          }
        }, "Bekijk de volledige kaart");
        simpleHTML = /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1000
          }
        }, buttonHTML);
        if (this.config.display.width) divStyle.width = this.config.display.width;
        if (this.config.display.height) divStyle.height = this.config.display.height;
      }

      return /*#__PURE__*/React.createElement("div", {
        id: this.divId,
        className: "osc-ideas-on-map osc-ideas-on-map-".concat(this.state.status, " osc-mobile-").concat(this.state.infobarOnMobileIsOpen ? 'opened' : 'closed'),
        style: divStyle,
        ref: function ref(el) {
          return _this5.instance = el;
        }
      }, filterHTML, infoHTML, /*#__PURE__*/React.createElement("div", {
        className: "osc-ideas-on-map-map osc-ideas-on-map-map-".concat(this.config.display.type)
      }, /*#__PURE__*/React.createElement(_map_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: this.divId + '-map',
        config: _objectSpread(_objectSpread({}, this.config.map), {}, {
          types: this.config.types,
          typeField: this.config.typeField,
          zoomControl: this.config.display.type == 'simple' ? false : true
        }),
        ref: function ref(el) {
          return _this5.map = el;
        }
      })), simpleHTML, mobilePopupHTML);
    }
  }]);

  return OpenStadComponentIdeasOnMap;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_6__["default"]);



/***/ }),

/***/ "./src/ideas-on-map/component/ideas-overview.jsx":
/*!*******************************************************!*\
  !*** ./src/ideas-on-map/component/ideas-overview.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IdeasOverview2; });
/* harmony import */ var _ideas_overview_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ideas-overview/index.jsx */ "./src/ideas-overview/index.jsx");


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



var IdeasOverview2 = /*#__PURE__*/function (_IdeasOverview) {
  _inherits(IdeasOverview2, _IdeasOverview);

  var _super = _createSuper(IdeasOverview2);

  function IdeasOverview2() {
    _classCallCheck(this, IdeasOverview2);

    return _super.apply(this, arguments);
  }

  _createClass(IdeasOverview2, [{
    key: "render",
    value: function render() {
      var self = this;
      var ideas = typeof self.props.ideas != 'undefined' ? self.props.ideas : self.state.ideas || [];
      var titleHML = /*#__PURE__*/React.createElement("h3", {
        className: "osc-title"
      }, self.config.title, " (", ideas.length, ")");
      return /*#__PURE__*/React.createElement("div", {
        id: self.id,
        className: "osc-ideas-overview ".concat(self.props.className || '')
      }, /*#__PURE__*/React.createElement(_ideas_overview_index_jsx__WEBPACK_IMPORTED_MODULE_0__["IdeasFilterbar"], {
        config: self.config,
        showFilterbar: self.props.showFilterbar,
        className: "osc-ideas-filterbar"
      }), /*#__PURE__*/React.createElement(_ideas_overview_index_jsx__WEBPACK_IMPORTED_MODULE_0__["IdeasSort"], {
        config: _objectSpread({}, self.config.sort),
        ideas: ideas,
        showSort: !self.props.hideSortButton,
        className: "osc-align-right-container",
        ref: function ref(el) {
          return self.sorter = el;
        }
      }), titleHML, /*#__PURE__*/React.createElement(_ideas_overview_index_jsx__WEBPACK_IMPORTED_MODULE_0__["IdeasList"], {
        config: self.config,
        ideas: ideas,
        className: ""
      }));
    }
  }]);

  return IdeasOverview2;
}(_ideas_overview_index_jsx__WEBPACK_IMPORTED_MODULE_0__["IdeasOverview"]);



/***/ }),

/***/ "./src/ideas-on-map/component/infobar.jsx":
/*!************************************************!*\
  !*** ./src/ideas-on-map/component/infobar.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfoBar; });
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _ideas_overview_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ideas-overview.jsx */ "./src/ideas-on-map/component/ideas-overview.jsx");
/* harmony import */ var _idea_details_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../idea-details/index.jsx */ "./src/idea-details/index.jsx");
/* harmony import */ var _idea_form_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./idea-form.jsx */ "./src/ideas-on-map/component/idea-form.jsx");
/* harmony import */ var _preview_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./preview.jsx */ "./src/ideas-on-map/component/preview.jsx");


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

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





 // details en form worden nu langs hier getekend, maar de rest moet nog heel erg opgeschoond
// ook hier woren nog funcies meegetuurd die via events moeten lopen

var InfoBar = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(InfoBar, _OpenStadComponent);

  var _super = _createSuper(InfoBar);

  _createClass(InfoBar, [{
    key: "updateIdeas",
    value: function updateIdeas(_ref) {
      _objectDestructuringEmpty(_ref);

      // xxx
      console.log('updateIdeas moet weg');
    }
  }]);

  function InfoBar(props) {
    var _this;

    _classCallCheck(this, InfoBar);

    _this = _super.call(this, props, {
      display: {
        columns: 1,
        showFilterbar: false
      },
      idea: {
        canAddNewIdeas: true,
        showVoteButtons: true
      },
      argument: {
        isActive: true,
        ignoreReactionsForIdeaIds: ''
      },
      types: []
    }); // config

    _this.config.loginUrl = _this.config.loginUrl || '/oauth/login?returnTo=' + encodeURIComponent(document.location.href); // tmp voor oude data

    if (props.config.content.noSelectionHTML && !props.config.content.noSelectionLoggedInHTML) {
      _this.config.content.noSelectionLoggedInHTML = props.config.content.noSelectionHTML;
    }

    if (props.config.content.noSelectionHTML && !props.config.content.noSelectionNotLoggedInHTML) {
      _this.config.content.noSelectionNotLoggedInHTML = props.config.content.noSelectionHTML;
    }

    _this.state = {
      currentSortOrder: _this.config.defaultValue,
      infobarOnMobileIsOpen: props.infobarOnMobileIsOpen || false
    };
    return _this;
  }

  _createClass(InfoBar, [{
    key: "componentDidMount",
    value: function componentDidMount(prevProps, prevState) {
      var self = this;

      self.setSelectedLocationListener = function (event) {
        self.setNewIdea(event.detail);
      };

      document.addEventListener('osc-set-selected-location', self.setSelectedLocationListener);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('osc-set-selected-location', this.setSelectedLocationListener);
    } // todo: dit moet helemaal weg; hij moet controlled worden

  }, {
    key: "setNewIdea",
    value: function setNewIdea(idea) {
      console.log('DEZE MOET WEG');
      this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
        selectedIdea: null
      }));
    }
  }, {
    key: "dispatchClickMobileSwitcher",
    value: function dispatchClickMobileSwitcher(e) {
      e.stopPropagation();
      var event = new window.CustomEvent('osc-click-mobile-switcher', {
        detail: {}
      });
      document.dispatchEvent(event);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var self = this;

      var config = _objectSpread({}, self.config);

      config.display.type = 'list';

      if (this.props.idea && this.props.idea.extraData && this.props.idea.extraData.type && (this.props.idea.extraData.type == 'Kans' || this.props.idea.extraData.type == 'Knelpunt')) {
        config.types = [{
          "name": "Kans",
          "label": "Dit gaat goed",
          "value": "Kans",
          "buttonLabel": "Ik wil een idee posten",
          "backgroundColor": "#bed200",
          "textColor": "black"
        }, {
          "name": "Knelpunt",
          "label": "Dit kan beter",
          "value": "Knelpunt",
          "backgroundColor": "#ff9100",
          "textColor": "black"
        }];
        config.typeField = 'extraData.type';
        config.showLabels = true;
      } // idea detail


      if (self.props.displayType == 'details') {
        return /*#__PURE__*/React.createElement(_idea_details_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
          config: config,
          idea: this.props.idea,
          className: self.props.className || 'osc-infobar-idea-details',
          ref: function ref(el) {
            return _this2.ideadetails = el;
          }
        });
      } // idea form


      if (self.props.displayType == 'form') {
        return /*#__PURE__*/React.createElement(_idea_form_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
          config: config,
          idea: this.props.idea,
          className: "osc-ideas-on-map-info",
          ref: function ref(el) {
            return _this2.ideaform = el;
          }
        });
      } // ideas in list


      var ideas = self.props.ideas;
      var titleAddition = '';
      var mobileSwitcherHTML = null;
      var mobileTitle = '';
      var hideSortButton = false; // new idea

      if (self.props.currentEditIdea || self.props.selectedLocation) {
        titleAddition = 'in de buurt';
        mobileTitle = 'Meer details en acties';
        hideSortButton = true;
      } // selected idea


      if (self.props.selectedIdea) {
        titleAddition = 'in de buurt';
        mobileTitle = 'Meer details';
        hideSortButton = true;
      }

      if (!titleAddition) titleAddition = 'in dit gebied';

      if (!self.props.currentEditIdea && !self.props.selectedIdea) {
        mobileTitle = "".concat(config.ideaName, " in dit gebied (").concat(ideas && ideas.length || 0, ")");
      }

      if (self.state.infobarOnMobileIsOpen) {
        mobileTitle = 'Terug naar de kaart';
      }

      mobileSwitcherHTML = /*#__PURE__*/React.createElement("div", {
        className: "osc-mobile-switcher",
        onClick: function onClick(e) {
          return self.dispatchClickMobileSwitcher(e);
        }
      }, mobileTitle);
      var title = config.ideaName + ' ' + titleAddition;
      config.display.onMouseOverTileFadeOthers = true;
      return /*#__PURE__*/React.createElement("div", {
        id: self.props.id,
        className: self.props.className || 'osc-infobar',
        ref: function ref(el) {
          return self.instance = el;
        }
      }, mobileSwitcherHTML, /*#__PURE__*/React.createElement("div", {
        className: "osc-info-content"
      }, /*#__PURE__*/React.createElement(_preview_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
        config: config,
        selectedIdea: self.props.selectedIdea,
        selectedLocation: self.props.currentEditIdea || self.props.selectedLocation
      }), /*#__PURE__*/React.createElement(_ideas_overview_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        config: config,
        ideas: ideas,
        hideSortButton: hideSortButton,
        title: title,
        ref: function ref(el) {
          return self.list = el;
        }
      })));
    }
  }]);

  return InfoBar;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/ideas-on-map/component/map.jsx":
/*!********************************************!*\
  !*** ./src/ideas-on-map/component/map.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Map; });
/* harmony import */ var _nlmap_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../nlmap/index.jsx */ "./src/nlmap/index.jsx");


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Map = /*#__PURE__*/function (_OpenStadComponentNLM) {
  _inherits(Map, _OpenStadComponentNLM);

  var _super = _createSuper(Map);

  function Map(props) {
    var _this;

    _classCallCheck(this, Map);

    _this = _super.call(this, props, {
      clustering: {
        maxClusterRadius: 100,
        showCoverageOnHover: false
      },
      locationIcon: {
        html: '<svg width="39" height="50" viewBox="0 0 39 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.1038 0C29.6577 0 38.2075 8.46671 38.2075 18.9181C38.2075 33.1786 21.7544 47.7273 21.0432 48.3035L19.1038 50L17.1643 48.3035C16.4532 47.7273 0 33.1786 0 18.9181C0 8.46831 8.54983 0 19.1038 0ZM32.3245 18.9181C32.3083 11.6837 26.4091 5.84187 19.1038 5.82586C11.7984 5.84187 5.89922 11.6837 5.88306 18.9181C5.88306 27.3367 14.1581 37.2439 19.0876 42.1095C23.1767 38.1242 32.3245 27.993 32.3245 18.9181Z" fill="#EC0000"/><path d="M19.104 5.82568C26.4093 5.84169 32.3086 11.6836 32.3247 18.9179C32.3247 27.9928 23.1769 38.124 19.0879 42.1093C14.1584 37.2437 5.8833 27.3366 5.8833 18.9179C5.89946 11.6836 11.7987 5.84169 19.104 5.82568ZM25.5689 18.9179C25.5689 15.3807 22.6759 12.5158 19.104 12.5158C15.5322 12.5158 12.6391 15.3807 12.6391 18.9179C12.6391 22.455 15.5322 25.3199 19.104 25.3199C22.6759 25.3199 25.5689 22.455 25.5689 18.9179Z" fill="white"/><path d="M19.1038 25.3202C22.6743 25.3202 25.5687 22.4539 25.5687 18.9182C25.5687 15.3824 22.6743 12.5161 19.1038 12.5161C15.5333 12.5161 12.6389 15.3824 12.6389 18.9182C12.6389 22.4539 15.5333 25.3202 19.1038 25.3202Z" fill="#EC0000"/></svg>',
        className: 'osc-ideas-on-map-icon',
        width: 39,
        height: 50,
        iconAnchor: [20, 50]
      },
      types: []
    }); // tmp fallback

    _this.config.polygon = _this.config.polygon;
    _this.config.autoZoomAndCenter = _this.config.autoZoomAndCenter || 'polygon';
    _this.ideas = [];
    _this.state = {
      filters: {}
    };
    return _this;
  }

  _createClass(Map, [{
    key: "componentDidMount",
    value: function componentDidMount(prevProps, prevState) {
      _get(_getPrototypeOf(Map.prototype), "componentDidMount", this).call(this, prevProps, prevState);

      var self = this;

      self.mapClusterAnimationEndListener = function (event) {
        self.onMapClusterAnimationEnd(event.detail);
      };

      document.addEventListener('osc-map-cluster-animation-end', self.mapClusterAnimationEndListener);

      self.ideasFilterOnchangeListener = function (event) {
        self.onChangeFilter(event.detail);
      };

      document.addEventListener('osc-ideas-filter-onchange', self.ideasFilterOnchangeListener);

      self.ideasFilterResetAllListener = function (event) {
        self.onResetFilters(event.detail);
      };

      document.addEventListener('osc-ideas-filter-reset-all', self.ideasFilterResetAllListener);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('osc-map-cluster-animation-end', this.mapClusterAnimationEndListener);
      document.removeEventListener('osc-ideas-filter-onchange', this.ideasFilterOnchangeListener);
      document.removeEventListener('osc-ideas-filter-reset-all', this.ideasFilterResetAllListener);
    }
  }, {
    key: "addIdea",
    value: function addIdea(idea) {
      var self = this;
      self.ideas.push(idea); // todo: dit moet met een iconCreate functie

      var typename = idea && self.config.typeField ? eval("idea.".concat(self.config.typeField)) : 'typeId';
      var typeDef = self.config.types.find(function (entry) {
        return typename && (entry.id == typename || entry.name == typename);
      });
      if (!typeDef) typeDef = {};
      var color = typeDef.color || typeDef.backgroundColor || '#164995';
      var icondef = typeDef.mapicon || typeDef.icon || {
        html: "<svg viewBox=\"0 0 26 26\"><circle cx=\"13\" cy=\"13\" r=\"13\" fill=\"".concat(color, "\"/></svg>"),
        width: 26,
        height: 26,
        anchor: [13, 13]
      };
      var icon = L.divIcon({
        html: icondef.html,
        className: 'osc-ideas-on-map-icon',
        iconSize: L.point(icondef.width, icondef.height),
        iconAnchor: icondef.anchor
      });
      self.addMarker({
        lat: idea.location.coordinates[0],
        lng: idea.location.coordinates[1],
        data: idea,
        icon: icon
      });
    }
  }, {
    key: "getVisibleIdeas",
    value: function getVisibleIdeas() {
      var self = this;
      var visibleIdeas = self.markers.filter(function (marker) {
        return marker.visible && marker.data && self.map.getBounds().contains(marker.getLatLng());
      }).map(function (marker) {
        return marker.data;
      });
      self.setState({
        visibleIdeas: visibleIdeas
      });
      return visibleIdeas;
    }
  }, {
    key: "setSelectedLocation",
    value: function setSelectedLocation(location) {
      this.selectedLocation = location;

      if (this.selectedLocation) {
        if (this.selectedLocationMarker) {
          this.updateMarker(this.selectedLocationMarker, {
            location: location
          });
        } else {
          var icon = L.divIcon({
            html: this.config.locationIcon.html,
            className: 'osc-ideas-on-map-icon',
            iconSize: L.point(this.config.locationIcon.width, this.config.locationIcon.height),
            iconAnchor: this.config.locationIcon.anchor
          });
          this.selectedLocationMarker = this.addMarker(_objectSpread(_objectSpread({}, location), {}, {
            icon: icon,
            doNotCluster: true
          }));
        }
      } else {
        if (this.selectedLocationMarker) {
          this.removeMarker(this.selectedLocationMarker);
        }

        this.selectedLocationMarker = null;
      }
    }
  }, {
    key: "setBoundsAndCenter",
    value: function setBoundsAndCenter(points) {
      _get(_getPrototypeOf(Map.prototype), "setBoundsAndCenter", this).call(this, points || this.config.autoZoomAndCenter == 'polygon' && this.config.polygon || this.markers);
    }
  }, {
    key: "showMarkers",
    value: function showMarkers(_ref) {
      var _ref$keepCenter = _ref.keepCenter,
          keepCenter = _ref$keepCenter === void 0 ? false : _ref$keepCenter;
      var self = this;
      self.markers.forEach(function (marker) {
        self.showMarker(marker);
      }); // if (!keepCenter) self.setBoundsAndCenter(( self.config.autoZoomAndCenter == 'polygon' && self.config.polygon ) || self.markers);
    }
  }, {
    key: "hideMarkers",
    value: function hideMarkers(_ref2) {
      var exception = _ref2.exception;
      var self = this;
      if (exception && exception.location) self.setBoundsAndCenter([exception.location]);
      self.markers.forEach(function (marker) {
        if (!(exception && exception.location && exception.location.lat == marker._latlng.lat && exception.location.lng == marker._latlng.lng)) {
          self.hideMarker(marker);
        }
      });
    }
  }, {
    key: "fadeMarkers",
    value: function fadeMarkers(_ref3) {
      var _this2 = this;

      var exception = _ref3.exception;
      var self = this;
      self.markers.forEach(function (marker) {
        if (exception && marker.data && marker.data.id && exception.id == marker.data.id) {
          if (marker.data) marker.data.isFaded = false;
        } else if (_this2.selectedLocationMarker && _this2.selectedLocationMarker == marker) {
          if (marker.data) marker.data.isFaded = false;
        } else {
          if (marker.data) marker.data.isFaded = true;
          var visibleParent = self.markerClusterGroup && self.markerClusterGroup.getVisibleParent(marker);
          var ignore = visibleParent && visibleParent.getAllChildMarkers && visibleParent.getAllChildMarkers().find(function (m) {
            return m.data && m.data.isFaded === false;
          });

          if (!ignore && visibleParent) {
            visibleParent.setOpacity(0.3);
          }
        }
      });
    } // fix for https://github.com/Leaflet/Leaflet.markercluster/issues/177

  }, {
    key: "updateFading",
    value: function updateFading() {
      var self = this;
      self.markers.forEach(function (marker) {
        var visibleParent = self.markerClusterGroup && self.markerClusterGroup.getVisibleParent(marker);

        if (visibleParent && marker.visible) {
          var ignore = visibleParent && visibleParent.getAllChildMarkers && visibleParent.getAllChildMarkers().find(function (m) {
            return m.data && m.data.isFaded === false;
          });
          visibleParent.setOpacity(!ignore && marker.data && marker.data.isFaded ? 0.3 : 1);
        }
      });
    }
  }, {
    key: "unfadeAllMarkers",
    value: function unfadeAllMarkers() {
      var self = this; // markers

      self.markers.forEach(function (marker) {
        if (marker.data) marker.data.isFaded = false;
        var visibleParent = self.markerClusterGroup && self.markerClusterGroup.getVisibleParent(marker);

        if (visibleParent) {
          visibleParent.setOpacity(1);
        }
      });
    }
  }, {
    key: "onMapClusterAnimationEnd",
    value: function onMapClusterAnimationEnd() {
      this.updateFading();
    }
  }, {
    key: "onChangeFilter",
    value: function onChangeFilter(filter) {
      // TODO: areas update zou ook met polygons moeten werken
      var self = this;
      var filters = self.state.filters;
      filters[filter.fieldName] = filter;
      self.setState({
        filters: filters
      }, function () {
        self.setFilter(function (marker) {
          var result = true;
          Object.keys(self.state.filters).forEach(function (fieldName) {
            var filter = self.state.filters[fieldName];

            if (filter.value && filter.value !== '0') {
              if (marker.data && !eval("marker.data.".concat(filter.fieldName)) || eval("marker.data.".concat(filter.fieldName)) != filter.value) result = false;
            }
          });
          return result;
        });
      });
    }
  }, {
    key: "onResetFilters",
    value: function onResetFilters(filter) {
      this.setBoundsAndCenter();
    }
  }]);

  return Map;
}(_nlmap_index_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/ideas-on-map/component/preview.jsx":
/*!************************************************!*\
  !*** ./src/ideas-on-map/component/preview.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Preview; });
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/index.jsx */ "./src/libs/index.jsx");
/* harmony import */ var _image_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../image/index.jsx */ "./src/image/index.jsx");


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



 // todo: dit moet nog heel erg opgeschoond
// todo: selectedidea weergave kan met idea-overview.tile gaan werken

var Preview = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(Preview, _OpenStadComponent);

  var _super = _createSuper(Preview);

  function Preview(props) {
    var _this;

    _classCallCheck(this, Preview);

    _this = _super.call(this, props, {
      display: {
        type: 'idea-selection'
      },
      api: {},
      content: {
        // noSelectionLoggedInHTML: '<div class=\"osc-infobar-default-block\"><div class=\"osc-infobar-default-block-line osc-line-1\">Klik op een plek op de kaart om een nieuw punt toe te voegen.</div><div class=\"osc-infobar-default-block-line osc-line-2\">Selecteer een inzending op de kaart om meer informatie over de inzending te bekijken.</div><div class=\"osc-infobar-default-block-line osc-line-3\">Bekijk hieronder de inzendingen die nu zichtbaar zijn op de kaart.</div></div>',
        // noSelectionNotLoggedInHTML: '<div class=\"osc-infobar-default-block\"><div class=\"osc-infobar-default-block-line osc-line-1\">Klik op een plek op de kaart om een nieuw punt toe te voegen.</div><div class=\"osc-infobar-default-block-line osc-line-2\">Selecteer een inzending op de kaart om meer informatie over de inzending te bekijken.</div><div class=\"osc-infobar-default-block-line osc-line-3\">Bekijk hieronder de inzendingen die nu zichtbaar zijn op de kaart.</div></div>',
        // default now is: show nothing
        noSelectionLoggedInHTML: '',
        noSelectionNotLoggedInHTML: '',
        selectionActiveLoggedInHTML: 'Ingelogd: er is een punt geselecteerd binnen de polygon, met een adres: {address} en {addButton}.',
        selectionInactiveLoggedInHTML: 'Ingelogd: er is een punt geselecteerd buiten de polygon, met een {address}',
        selectionActiveNotLoggedInHTML: 'Niet ingelogd: er is een punt geselecteerd binnen de polygon, met een adres: {address} en {loginButton} of <a href="{loginLink}">login link</a>.',
        selectionInactiveNotLoggedInHTML: 'Niet ingelogd: er is een punt geselecteerd buiten de polygon, met een {address}',
        mobilePreviewLoggedInHTML: 'Een locatie vlakbij <h4>{address}</h4>{addButton}',
        mobilePreviewNotLoggedInHTML: 'Een locatie vlakbij <h4>{address}</h4><div>Wilt u een nieuw punt toevoegen? Dan moet u eerst <a href="{loginLink}">inloggen</a>.</div>',
        showNoSelectionOnMobile: false
      },
      idea: {
        canAddNewIdeas: true,
        showVoteButtons: true
      }
    }); // config

    _this.config.loginUrl = _this.config.loginUrl || '/oauth/login?returnTo=' + encodeURIComponent(document.location.href); // tmp voor oude data

    props.config.content = props.config.content || {};

    if (props.config.content.noSelectionHTML && !props.config.content.noSelectionLoggedInHTML) {
      _this.config.content.noSelectionLoggedInHTML = props.config.content.noSelectionHTML;
    }

    if (props.config.content.noSelectionHTML && !props.config.content.noSelectionNotLoggedInHTML) {
      _this.config.content.noSelectionNotLoggedInHTML = props.config.content.noSelectionHTML;
    } // state


    _this.state = {};
    return _this;
  }

  _createClass(Preview, [{
    key: "componentDidMount",
    value: function componentDidMount(prevProps, prevState) {
      var self = this;

      self.updateLocationListener = function (event) {
        self.updateLocation(event.detail && event.detail.location);
      };

      document.addEventListener('osc-update-location', self.updateLocationListener);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('osc-update-location', this.updateLocationListener);
    }
  }, {
    key: "updateLocation",
    value: function updateLocation(location) {
      if (!location) return;
      this.setState({
        location: location,
        address: location.address
      });
    }
  }, {
    key: "dispatchOnButtonIdeaClick",
    value: function dispatchOnButtonIdeaClick(e, idea) {
      var event = new window.CustomEvent('osc-selection-button-click', {
        detail: {
          idea: idea
        }
      });
      document.dispatchEvent(event);
    }
  }, {
    key: "dispatchNewIdeaClick",
    value: function dispatchNewIdeaClick(e, idea) {
      var event = new window.CustomEvent('osc-new-idea-click', {
        detail: {
          idea: idea
        }
      });
      document.dispatchEvent(event);
    }
  }, {
    key: "dispatchSelectedIdeaClick",
    value: function dispatchSelectedIdeaClick(e, idea) {
      var event = new window.CustomEvent('osc-selected-idea-click', {
        detail: {
          idea: idea
        }
      });
      document.dispatchEvent(event);
    }
  }, {
    key: "dispatchClosePreview",
    value: function dispatchClosePreview(e, what) {
      e.stopPropagation();
      var event;
      if (what == 'idea') event = new window.CustomEvent('osc-set-selected-idea', {
        detail: null
      });
      if (what == 'location') event = new window.CustomEvent('osc-set-selected-location', {
        detail: null
      });
      document.dispatchEvent(event);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var self = this; // mobile popup

      if (self.config.display.type == 'mobilePreview') {
        var contentHTML = this.config.api.isUserLoggedIn ? this.config.content.mobilePreviewLoggedInHTML : this.config.content.mobilePreviewNotLoggedInHTML;
        var _addButton = null;
        var _loginButton = null;
        var _loginLink = null;

        if (this.config.api.isUserLoggedIn) {
          if (this.config.idea.canAddNewIdeas) {
            _addButton = /*#__PURE__*/React.createElement("button", {
              className: "osc-button osc-button-blue",
              onClick: function onClick(event) {
                _this2.onClickMobileSwitcher(event);

                _this2.onNewIdeaClick(event);
              },
              ref: function ref(el) {
                return self.newIdeaButton = el;
              }
            }, "Nieuw punt toevoegen");
          }
        } else {
          if (this.config.idea.canAddNewIdeas) {
            _loginButton = /*#__PURE__*/React.createElement("button", {
              onClick: function onClick() {
                document.location.href = '/oauth/login?returnTo=' + encodeURIComponent(document.location.href);
              },
              className: "osc-button-blue osc-not-logged-in-button"
            }, "Inloggen");
            _loginLink = "javascript: document.location.href = '/oauth/login?returnTo=' + encodeURIComponent(document.location.href)";
          }
        }

        var address = this.state.address || this.props.selectedLocation.address || '[adres wordt gezocht...]';
        contentHTML = contentHTML.replace(/\{address\}/g, address || '');
        contentHTML = contentHTML.replace(/\{loginLink\}/g, _loginLink);
        contentHTML = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].reactTemplate({
          html: contentHTML,
          addButton: _addButton,
          loginButton: _loginButton
        });
        return /*#__PURE__*/React.createElement("div", {
          className: "osc-mobile-popup"
        }, contentHTML);
      } // other


      var selectedLocationHTML = null;
      var selectedIdeaHTML = null;
      var titleAddition = '';
      var mobileSwitcherHTML = null;
      var mobileTitle = ''; // knoppen

      var addButton = null;
      var loginButton = null;
      var loginLink = null;

      if (self.config.idea.canAddNewIdeas) {
        if (self.config.types && self.config.typeField == 'typeId') {
          addButton = /*#__PURE__*/React.createElement("span", {
            className: "osc-new-idea-buttons"
          }, self.config.types.map(function (type, i) {
            var typeDef = type;

            if (!typeDef.auth || typeDef.auth.createableBy && _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].user.hasRole(self.config.user, typeDef.auth.createableBy)) {
              var buttonBgHTML = typeDef ? /*#__PURE__*/React.createElement("div", {
                className: "osc-button-background-image",
                dangerouslySetInnerHTML: {
                  __html: typeDef.buttonicon && typeDef.buttonicon.html || ''
                }
              }) : null;
              return /*#__PURE__*/React.createElement("button", {
                className: 'osc-button osc-button-white' + (typeDef && typeDef.auth && typeDef.auth.createableBy ? " osc-button-required-role-is-".concat(typeDef.auth.createableBy) : ''),
                onClick: function onClick(event) {
                  return self.dispatchNewIdeaClick(event, {
                    typeId: typeDef.id || typeDef.name
                  });
                },
                key: "osc-button-".concat(i)
              }, buttonBgHTML, typeDef && typeDef.buttonLabel || 'Nieuw punt toevoegen');
            } else return null;
          }));
        } else {
          addButton = /*#__PURE__*/React.createElement("button", {
            className: "osc-button osc-button-blue",
            onClick: function onClick(event) {
              return self.dispatchNewIdeaClick(event);
            }
          }, "Nieuw punt toevoegen");
        }

        loginButton = /*#__PURE__*/React.createElement("button", {
          onClick: function onClick() {
            document.location.href = _this2.config.loginUrl;
          },
          className: "osc-button-blue osc-not-logged-in-button"
        }, "Inloggen");
        loginLink = "javascript: document.location.href = '".concat(this.config.loginUrl, "'");
      } // new idea


      if (self.props.selectedLocation) {
        var _contentHTML = null;

        if (self.props.selectedLocation.isPointInPolygon) {
          if (self.config.api.isUserLoggedIn) {
            _contentHTML = self.config.content.selectionActiveLoggedInHTML;
          } else {
            _contentHTML = self.config.content.selectionActiveNotLoggedInHTML;
          }
        } else {
          if (self.config.api.isUserLoggedIn) {
            _contentHTML = self.config.content.selectionInactiveLoggedInHTML;
          } else {
            _contentHTML = self.config.content.selectionInactiveNotLoggedInHTML;
          }
        }

        var _address = this.state.address || this.props.selectedLocation.address || '[adres wordt gezocht...]';

        _contentHTML = _contentHTML.replace(/\{address\}/g, _address || '');
        _contentHTML = _contentHTML.replace(/\{loginLink\}/g, loginLink);
        _contentHTML = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].reactTemplate({
          html: _contentHTML,
          addButton: addButton,
          loginButton: loginButton
        });
        selectedLocationHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-infobar-new-idea"
        }, /*#__PURE__*/React.createElement("button", {
          className: "osc-close-button-black",
          onClick: function onClick(event) {
            return self.dispatchClosePreview(event, 'location');
          },
          ref: function ref(el) {
            return self.resetButton = el;
          }
        }), _contentHTML);
        titleAddition = 'in de buurt';
        mobileTitle = 'Meer details en acties';
      } // selected idea


      if (self.props.selectedIdea) {
        var idea = self.props.selectedIdea;
        var ideaTypeValue;

        try {
          ideaTypeValue = eval("idea.".concat(self.config.typeField));
        } catch (err) {
          ideaTypeValue = '';
        }

        var typeDef = self.config.types.find(function (entry) {
          return entry.name == ideaTypeValue || entry.id == ideaTypeValue;
        });

        if (!typeDef || !typeDef.listicon) {
          typeDef = {
            listicon: {
              html: ''
            }
          };
        } // console.log(idea.extraData.theme + ' niet gevonden'); }


        var voteCountHTML = null;

        if (this.config.idea.showVoteButtons) {
          voteCountHTML = /*#__PURE__*/React.createElement("div", {
            className: "osc-likes"
          }, idea.yes || 0);
        }

        var argcountHTML = null;

        if (this.config.argument.isActive && !this.config.argument.ignoreReactionsForIdeaIds.match(new RegExp("(?:^|\\D)".concat(idea.id, "(?:\\D|$)")))) {
          argcountHTML = /*#__PURE__*/React.createElement("div", {
            className: "osc-reactions"
          }, idea.argCount || 0);
        }

        selectedIdeaHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-infobar-selected-idea",
          onClick: function onClick(event) {
            return self.dispatchSelectedIdeaClick(event, self.props.selectedIdea);
          }
        }, /*#__PURE__*/React.createElement("button", {
          className: "osc-close-button-black",
          onClick: function onClick(event) {
            return self.dispatchClosePreview(event, 'idea');
          },
          ref: function ref(el) {
            return self.resetButton = el;
          }
        }), /*#__PURE__*/React.createElement("h3", null, "Geselecteerd"), /*#__PURE__*/React.createElement("div", {
          className: "osc-infobar-selected-idea-idea"
        }, /*#__PURE__*/React.createElement("div", {
          className: "osc-idea-image-container"
        }, /*#__PURE__*/React.createElement(_image_index_jsx__WEBPACK_IMPORTED_MODULE_2__["IdeaImage"], {
          config: {},
          idea: idea,
          key: 'image-' + idea.id
        })), /*#__PURE__*/React.createElement("div", {
          className: "osc-content"
        }, /*#__PURE__*/React.createElement("h4", null, eval("idea.".concat(self.config.titleField))), /*#__PURE__*/React.createElement("div", {
          className: "osc-summary"
        }, eval("idea.".concat(self.config.summaryField))), /*#__PURE__*/React.createElement("div", {
          className: "osc-stats"
        }, voteCountHTML, argcountHTML, /*#__PURE__*/React.createElement("div", {
          className: "osc-type"
        }, /*#__PURE__*/React.createElement("div", {
          className: "osc-type-content",
          dangerouslySetInnerHTML: {
            __html: typeDef.listicon.html
          }
        })))), /*#__PURE__*/React.createElement("div", {
          className: "osc-clear-both"
        })));
        titleAddition = 'in de buurt';
        mobileTitle = 'Meer details';
      }

      var defaultBlockHTML = null;

      if (!selectedLocationHTML && !selectedIdeaHTML) {
        var noSelectionHTML = self.config.api.isUserLoggedIn ? self.config.content.noSelectionLoggedInHTML : self.config.content.noSelectionNotLoggedInHTML;
        noSelectionHTML = noSelectionHTML || null;

        if (noSelectionHTML) {
          noSelectionHTML = noSelectionHTML.replace(/\{loginLink\}/g, loginLink);
          noSelectionHTML = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].reactTemplate({
            html: noSelectionHTML,
            addButton: addButton,
            loginButton: loginButton
          });
          defaultBlockHTML = /*#__PURE__*/React.createElement("div", {
            className: "osc-infobar-default-block".concat(self.config.content.showNoSelectionOnMobile ? ' osc-visible-on-mobile' : '')
          }, noSelectionHTML);
        }

        mobileTitle = "".concat(self.config.ideaName, " in dit gebied (").concat(self.state.ideas && self.state.ideas.length || 0, ")");
      }

      if (!selectedLocationHTML && !selectedIdeaHTML && !defaultBlockHTML) {
        return null;
      } // TODO: kan de key weg uit IdeasList


      return /*#__PURE__*/React.createElement("div", {
        className: "osc-selection-block"
      }, defaultBlockHTML, selectedLocationHTML, selectedIdeaHTML);
    }
  }]);

  return Preview;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/ideas-on-map/component/search.jsx":
/*!***********************************************!*\
  !*** ./src/ideas-on-map/component/search.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");


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





var Search = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(Search, _OpenStadComponent);

  var _super = _createSuper(Search);

  function Search(props) {
    var _this;

    _classCallCheck(this, Search);

    _this = _super.call(this, props, {
      searchIn: ['ideas', 'addresses']
    });
    _this.config.doSearchFunction = _this.config.doSearchFunction || _this.doSearchx.bind(_assertThisInitialized(_this));
    _this.state = {
      searchValue: '',
      searchResult: {
        locations: [],
        ideas: []
      },
      showSuggestions: false
    };
    _this.updateSearchResult = _this.updateSearchResult.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Search, [{
    key: "componentDidMount",
    value: function componentDidMount(prevProps, prevState) {}
  }, {
    key: "handleChange",
    value: function handleChange(value) {
      this.updateSearchValue(value);

      if (value.length >= 3) {
        this.config.doSearchFunction(value, this.updateSearchResult);
      } // dispatch an event
      //var event = new window.CustomEvent('typeFilterUpdate', { detail: { value: value } });
      //this.instance.dispatchEvent(event);

    }
  }, {
    key: "handleButtonClick",
    value: function handleButtonClick(event) {
      var self = this;

      if (self.state.searchValue) {
        self.setState({
          searchValue: ''
        }, function () {
          self.inputfield.focus();
        });
      }
    }
  }, {
    key: "updateSearchValue",
    value: function updateSearchValue(value) {
      this.setState({
        searchValue: value,
        showSuggestions: value.length >= 3 ? true : false
      });
    }
  }, {
    key: "showSuggestions",
    value: function showSuggestions() {
      this.setState({
        showSuggestions: this.state.searchValue.length >= 3 ? true : false
      });
    }
  }, {
    key: "hideSuggestions",
    value: function hideSuggestions() {
      var self = this; // TODO: dit moet anders; het gaat er om dat de onclick op suggesties niet doorkomt omdat hij deze eerst doet

      setTimeout(function () {
        self.setState({
          showSuggestions: false
        });
      }, 500);
    }
  }, {
    key: "updateSearchResult",
    value: function updateSearchResult(searchValue, searchResult) {
      this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
        searchResult: searchResult,
        showSuggestions: searchValue.length >= 3 ? true : false
      }));
    }
  }, {
    key: "doSearchx",
    value: function doSearchx(value) {
      console.log('search function not defined');
    }
  }, {
    key: "onSuggestionClick",
    value: function onSuggestionClick(text, event, next) {
      this.updateSearchValue(text);
      if (next) next(event);
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      var suggestionsHTML = null;

      if (self.state.showSuggestions) {
        var suggestionDividerHTML = null;

        if (this.config.searchIn.includes('ideas') && this.config.searchIn.includes('addresses')) {
          suggestionDividerHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "osc-search-suggestions-hr"
          });
        }

        var addressSuggestionsHTML = null;

        if (this.config.searchIn.includes('addresses')) {
          addressSuggestionsHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Adressen:", self.state.searchResult.locations.map(function (result, i) {
            var text = result.text.replace(new RegExp(self.state.searchValue, 'ig'), function ($0) {
              return '<strong>' + $0 + '</strong>';
            });
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
              className: "osc-search-suggestion osc-search-suggestion-idea",
              onClick: function onClick(event) {
                return self.onSuggestionClick(result.text, event, result.onClick);
              },
              key: 'search-result-' + i,
              dangerouslySetInnerHTML: {
                __html: text
              }
            });
          }));
        }

        var ideasSuggestionsHTML = null;

        if (this.config.searchIn.includes('ideas')) {
          ideasSuggestionsHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.config.ideaName, ":", self.state.searchResult.ideas.map(function (result, i) {
            var text = result.text.replace(new RegExp(self.state.searchValue, 'ig'), function ($0) {
              return '<strong>' + $0 + '</strong>';
            });
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
              className: "osc-search-suggestion osc-search-suggestion-idea",
              onClick: function onClick(event) {
                return self.onSuggestionClick(result.text, event, result.onClick);
              },
              key: 'search-result-' + i,
              dangerouslySetInnerHTML: {
                __html: text
              }
            });
          }));
        }

        suggestionsHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-search-suggestions",
          ref: function ref(el) {
            return self.suggestions = el;
          }
        }, addressSuggestionsHTML, suggestionDividerHTML, ideasSuggestionsHTML);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: self.id,
        className: self.props.className || 'osc-search',
        ref: function ref(el) {
          return self.instance = el;
        }
      }, suggestionsHTML, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "text",
        value: this.state.searchValue,
        placeholder: self.config.placeholder,
        onChange: function onChange() {
          return self.handleChange(self.inputfield.value);
        },
        onBlur: function onBlur() {
          return self.hideSuggestions();
        },
        onFocus: function onFocus() {
          return self.showSuggestions();
        },
        className: "osc-default-input osc-search-input",
        ref: function ref(el) {
          return self.inputfield = el;
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "osc-search-button".concat(this.state.searchValue ? ' osc-active' : ''),
        onClick: function onClick(event) {
          return self.handleButtonClick(event);
        },
        ref: function ref(el) {
          return self.resetButton = el;
        }
      }));
    }
  }]);

  return Search;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),

/***/ "./src/ideas-on-map/css/default.less":
/*!*******************************************!*\
  !*** ./src/ideas-on-map/css/default.less ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/ideas-on-map/index.jsx":
/*!************************************!*\
  !*** ./src/ideas-on-map/index.jsx ***!
  \************************************/
/*! exports provided: default, IdeasOnMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
/* harmony import */ var custom_event_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! custom-event-polyfill */ "./node_modules/custom-event-polyfill/polyfill.js");
/* harmony import */ var custom_event_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(custom_event_polyfill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_default_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/default.less */ "./src/ideas-on-map/css/default.less");
/* harmony import */ var _css_default_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_default_less__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _component_ideas_on_map_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/ideas-on-map.jsx */ "./src/ideas-on-map/component/ideas-on-map.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _component_ideas_on_map_jsx__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdeasOnMap", function() { return _component_ideas_on_map_jsx__WEBPACK_IMPORTED_MODULE_5__["default"]; });

// polyfills

 // react


 // import css to make sure it is generated in the result

 // the module

 // render elements

_component_ideas_on_map_jsx__WEBPACK_IMPORTED_MODULE_5__["default"].renderElement = function renderElement(elem, config) {
  var attributes = elem.attributes;
  react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_component_ideas_on_map_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    attributes: attributes,
    config: config
  }), elem);
};



/***/ }),

/***/ "./src/ideas-overview/component/idea-tile.jsx":
/*!****************************************************!*\
  !*** ./src/ideas-overview/component/idea-tile.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IdeasOverview; });
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/index.jsx */ "./src/libs/index.jsx");
/* harmony import */ var _image_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../image/index.jsx */ "./src/image/index.jsx");


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



 // TODO: gridder display type
// TODO: show ranking
// TODO: status labels
// TODO: vote progress bar
// TODO: ellipsis op theme and area moet op beide apart

var IdeasOverview = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(IdeasOverview, _OpenStadComponent);

  var _super = _createSuper(IdeasOverview);

  function IdeasOverview(props) {
    var _this;

    _classCallCheck(this, IdeasOverview);

    // config
    var defaultConfig = {
      idea: {
        showVoteButtons: true,
        // TODO: dit is een stomme config parameter
        titleField: 'title',
        summaryField: 'summary'
      },
      argument: {
        isActive: true,
        ignoreReactionsForIdeaIds: ''
      },
      vote: {
        isViewable: true,
        voteValues: [{
          value: "yes"
        }, {
          value: "no"
        }]
      },
      types: [],
      typeField: 'typeId'
    }; // type specific default config

    switch (props.config.display && props.config.display.type) {
      case 'list':
        defaultConfig.display = {
          columns: 1,
          showStatusLabel: false,
          showTheme: false,
          showArea: false,
          showVoteProgressbar: false,
          showStats: true,
          showTypeIcon: true
        };
        break;

      case 'grid':
        defaultConfig.display = {
          columns: 3,
          showStatusLabel: false,
          showTheme: true,
          showArea: true,
          showVoteProgressbar: false,
          showStats: false,
          showTypeIcon: false
        };
        break;

      default:
        defaultConfig.display = {
          type: 'tiles',
          columns: 4,
          showStatusLabel: true,
          showTheme: false,
          showArea: false,
          showVoteProgressbar: true,
          showStats: true,
          showTypeIcon: false
        };
    }

    _this = _super.call(this, props, defaultConfig);
    _this.state = {
      idea: _this.props.idea || {}
    };
    return _this;
  }

  _createClass(IdeasOverview, [{
    key: "dispatchIdeaTileClick",
    value: function dispatchIdeaTileClick(event, idea) {
      event.stopPropagation();
      var newEvent = new window.CustomEvent('osc-idea-tile-click', {
        detail: {
          idea: idea
        }
      });
      document.dispatchEvent(newEvent);
    }
  }, {
    key: "dispatchIdeaTileMouseOver",
    value: function dispatchIdeaTileMouseOver(event, idea) {
      event.stopPropagation();
      var newEvent = new window.CustomEvent('osc-idea-tile-mouse-over', {
        detail: {
          idea: idea
        }
      });
      document.dispatchEvent(newEvent);
    }
  }, {
    key: "dispatchIdeaTileMouseOut",
    value: function dispatchIdeaTileMouseOut(event, idea) {
      event.stopPropagation();
      var newEvent = new window.CustomEvent('osc-idea-tile-mouse-out', {
        detail: {
          idea: idea
        }
      });
      document.dispatchEvent(newEvent);
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      var idea = self.state.idea; // status label

      var statusLabelHTML = null;

      if (self.config.display.showStatusLabel) {} // theme and area


      var themeAndAreaHTML = null;

      if (self.config.display.showTheme || self.config.display.showArea) {
        var areaHTML = null;

        if (self.config.display.showArea && idea.extraData.area) {
          areaHTML = /*#__PURE__*/React.createElement("div", {
            className: "osc-area"
          }, idea.extraData.area);
        }

        themeAndAreaHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-theme-and-area"
        }, self.config.display.showTheme && idea.extraData.theme && /*#__PURE__*/React.createElement("div", {
          className: "osc-theme"
        }, idea.extraData.theme), self.config.display.showTheme && idea.extraData.theme && self.config.display.showArea && idea.extraData.area && /*#__PURE__*/React.createElement("div", {
          className: "osc-divider"
        }), self.config.display.showArea && idea.extraData.area && /*#__PURE__*/React.createElement("div", {
          className: "osc-area"
        }, idea.extraData.area));
      } // stats: no of votes and reactions


      var statsHTML = null;

      if (self.config.display.showStats) {
        var stats = [];

        if (this.config.idea.showVoteButtons && this.config.vote.isViewable == true && this.config.vote.voteValues.find(function (val) {
          return val.value === 'yes';
        })) {
          stats.push( /*#__PURE__*/React.createElement("div", {
            className: "osc-yes-votes"
          }, idea.yes || 0));
        }

        if (this.config.idea.showVoteButtons && this.config.vote.isViewable == true && this.config.vote.voteValues.find(function (val) {
          return val.value === 'no';
        })) {
          stats.push( /*#__PURE__*/React.createElement("div", {
            className: "osc-no-votes"
          }, idea.no || 0));
        }

        var argcountHTML = null;

        if (this.config.argument.isActive && !this.config.argument.ignoreReactionsForIdeaIds.match(new RegExp("(?:^|\\D)".concat(idea.id, "(?:\\D|$)")))) {
          stats.push( /*#__PURE__*/React.createElement("div", {
            className: "osc-reactions"
          }, idea.argCount || 0));
        }

        statsHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-idea-stats-container"
        }, stats.map(function (statHTML, i) {
          return /*#__PURE__*/React.createElement("div", {
            className: "osc-stat",
            key: "osc-stat-".concat(idea.id, "-").concat(i)
          }, statHTML);
        }));
      }

      var voteProgressHTML = null;

      if (self.config.display.showVoteProgressbar) {
        voteProgressHTML = /*#__PURE__*/React.createElement("div", null, "GENOEGSTEMMNBALK");
      } // type icon


      var typeIconHTML = null;

      if (self.config.display.showTypeIcon) {
        var ideaTypeValue;

        try {
          ideaTypeValue = eval("idea.".concat(self.config.typeField));
        } catch (err) {
          ideaTypeValue = '';
        }

        var typeDef = self.config.types.find(function (entry) {
          return ideaTypeValue && (entry.id == ideaTypeValue || entry.name == ideaTypeValue);
        });

        if (!typeDef || !typeDef.listicon) {
          typeDef = {
            listicon: {
              html: ''
            }
          };
        } // console.log(idea.extraData.theme + ' niet gevonden'); }


        try {
          if (typeof typeDef.listicon == 'string') typeDef.listicon = JSON.parse(typeDef.listicon);
        } catch (err) {}

        if (typeDef.listicon.html) {
          typeIconHTML = /*#__PURE__*/React.createElement("div", {
            className: "osc-typeicon"
          }, /*#__PURE__*/React.createElement("div", {
            className: "osc-typeicon-content",
            dangerouslySetInnerHTML: {
              __html: typeDef.listicon.html
            }
          }));
        }
      } // now render


      return /*#__PURE__*/React.createElement("div", {
        id: self.divId,
        className: "osc-idea-tile osc-displaytype-".concat(self.config.display.type, " ").concat(self.props.className || ''),
        onClick: function onClick(event) {
          return self.dispatchIdeaTileClick(event, idea);
        },
        onMouseOver: function onMouseOver(event) {
          return self.dispatchIdeaTileMouseOver(event, idea);
        },
        onMouseOut: function onMouseOut(event) {
          return self.dispatchIdeaTileMouseOut(event, idea);
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "osc-idea-image-container"
      }, /*#__PURE__*/React.createElement(_image_index_jsx__WEBPACK_IMPORTED_MODULE_2__["IdeaImage"], {
        config: {},
        idea: idea,
        key: 'image-' + idea.id
      })), /*#__PURE__*/React.createElement("div", {
        className: "osc-idea-tile-content"
      }, statusLabelHTML, /*#__PURE__*/React.createElement("h4", {
        className: "osc-title"
      }, eval("idea.".concat(self.config.idea.titleField))), themeAndAreaHTML, /*#__PURE__*/React.createElement("div", {
        className: "osc-summary"
      }, eval("idea.".concat(self.config.idea.summaryField))), voteProgressHTML, statsHTML), typeIconHTML);
    }
  }]);

  return IdeasOverview;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/ideas-overview/component/ideas-filter.jsx":
/*!*******************************************************!*\
  !*** ./src/ideas-overview/component/ideas-filter.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IdeasFilter; });
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



var IdeasFilter = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(IdeasFilter, _OpenStadComponent);

  var _super = _createSuper(IdeasFilter);

  function IdeasFilter(props) {
    var _this;

    _classCallCheck(this, IdeasFilter);

    _this = _super.call(this, props);
    _this.doFilter = _this.doFilter.bind(_assertThisInitialized(_this));
    _this.setFilter = _this.setFilter.bind(_assertThisInitialized(_this));
    _this.state = {
      currentValue: _this.config.defaultValue
    };
    return _this;
  }

  _createClass(IdeasFilter, [{
    key: "componentDidMount",
    value: function componentDidMount(prevProps, prevState) {
      if (this.state.currentValue) this.setFilter({
        value: this.state.currentValue
      });
    }
  }, {
    key: "doFilter",
    value: function doFilter(ideas, value) {
      var self = this;
      value = value || this.state.currentValue; // console.log('doFilter', value);

      ideas = ideas.filter(function (idea) {
        var fieldName = self.config.fieldName;
        var fieldValue = eval("idea.".concat(fieldName));
        return fieldValue == value;
      });
      return ideas;
    }
  }, {
    key: "setFilter",
    value: function setFilter(_ref) {
      var value = _ref.value;
      var self = this;
      this.setState({
        currentValue: value
      }, function () {
        var event = new window.CustomEvent('osc-ideas-filter-onchange', {
          detail: {
            fieldName: self.config.fieldName,
            value: value,
            doFilter: self.doFilter
          }
        });
        document.dispatchEvent(event);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;

      if (self.config.showFilter == false) {
        return null;
      }

      var labelHTML = null;
      if (self.config.label) labelHTML = /*#__PURE__*/React.createElement("div", {
        className: "osc-filter-label"
      }, self.config.label, ":");
      return /*#__PURE__*/React.createElement("div", {
        className: "osc-ideas-filter ".concat(self.props.className || '')
      }, labelHTML, /*#__PURE__*/React.createElement("select", {
        value: self.state.currentValue,
        onChange: function onChange() {
          return self.setFilter({
            value: self.filterSelector.value
          });
        },
        className: "osc-default-select",
        ref: function ref(el) {
          return self.filterSelector = el;
        }
      }, self.config.filterOptions.map(function (option, i) {
        var selected = null;
        return /*#__PURE__*/React.createElement("option", {
          value: option.value,
          key: 'filter-option-' + i
        }, option.label);
      })));
    }
  }]);

  return IdeasFilter;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/ideas-overview/component/ideas-filterbar.jsx":
/*!**********************************************************!*\
  !*** ./src/ideas-overview/component/ideas-filterbar.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IdeasFilterbar; });
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _ideas_filter_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ideas-filter.jsx */ "./src/ideas-overview/component/ideas-filter.jsx");
/* harmony import */ var _ideas_search_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ideas-search.jsx */ "./src/ideas-overview/component/ideas-search.jsx");


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





var IdeasFilterbar = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(IdeasFilterbar, _OpenStadComponent);

  var _super = _createSuper(IdeasFilterbar);

  function IdeasFilterbar(props) {
    var _this;

    _classCallCheck(this, IdeasFilterbar);

    _this = _super.call(this, props, {
      display: {}
    });
    _this.doNextPendingResetAction = _this.doNextPendingResetAction.bind(_assertThisInitialized(_this));
    _this.state = {
      pendingResetActions: []
    };
    return _this;
  }

  _createClass(IdeasFilterbar, [{
    key: "componentDidMount",
    value: function componentDidMount(prevProps, prevState) {
      var self = this;

      self.ideasSearchOnchangeListener = function (event) {
        self.doNextPendingResetAction();
      };

      document.addEventListener('osc-ideas-search-onchange', self.ideasSearchOnchangeListener);

      self.ideasFilterOnchangeListener = function (event) {
        self.hideMobileActiveSelector();
        self.doNextPendingResetAction();
      };

      document.addEventListener('osc-ideas-filter-onchange', self.ideasFilterOnchangeListener);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('osc-ideas-search-onchange', this.ideasSearchOnchangeListener);
      document.removeEventListener('osc-ideas-filter-onchange', this.ideasFilterOnchangeListener);
    }
  }, {
    key: "toggleMobileActiveSelector",
    value: function toggleMobileActiveSelector(which) {
      if (this.state.mobileActiveSelector != which) {
        this.showMobileActiveSelector(which);
      } else {
        this.hideMobileActiveSelector();
      }
    }
  }, {
    key: "showMobileActiveSelector",
    value: function showMobileActiveSelector(which) {
      this.setState({
        mobileActiveSelector: which
      });
    }
  }, {
    key: "hideMobileActiveSelector",
    value: function hideMobileActiveSelector() {
      this.setState({
        mobileActiveSelector: null
      });
    }
  }, {
    key: "resetAll",
    value: function resetAll() {
      var self = this;
      self.search && self.state.pendingResetActions.push(self.search.setSearch);
      self.filters && self.filters.forEach(function (filter) {
        self.state.pendingResetActions.push(filter.setFilter);
      });
      var event = new window.CustomEvent('osc-ideas-filter-reset-all', {
        detail: {}
      });
      document.dispatchEvent(event);
      self.doNextPendingResetAction();
    }
  }, {
    key: "doNextPendingResetAction",
    value: function doNextPendingResetAction() {
      var resetAction = this.state.pendingResetActions.shift();
      resetAction && resetAction({
        value: ''
      });
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      var showFilterbar = typeof self.props.showFilterbar != 'undefined' ? self.props.showFilterbar : self.config.display.showFilterbar;

      if (!showFilterbar) {
        return null;
      }

      var searchHTML = null;

      if (self.config.search) {
        searchHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-ideas-search-container"
        }, /*#__PURE__*/React.createElement("div", {
          className: "osc-ideas-search-button",
          onClick: function onClick() {
            return self.toggleMobileActiveSelector('search');
          }
        }), /*#__PURE__*/React.createElement(_ideas_search_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
          config: self.config.search,
          className: "".concat(self.state.mobileActiveSelector == 'search' ? ' osc-is-active' : ''),
          ref: function ref(el) {
            return self.search = el;
          }
        }));
      } // TODO: configurable?


      var resetButtonHTML = null;
      resetButtonHTML = /*#__PURE__*/React.createElement("button", {
        value: "reset",
        onClick: function onClick() {
          return self.resetAll();
        },
        className: "osc-button osc-reset-button"
      }, "Alles tonen");
      var filterHTML = null;

      if (self.config.filter.length) {
        var isActive = self.filters && self.filters.find(function (filter) {
          return filter.state.currentValue;
        });
        self.filters = [];
        filterHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-ideas-filters-and-button-container"
        }, /*#__PURE__*/React.createElement("div", {
          className: "osc-ideas-filter-button".concat(isActive ? ' osc-active' : ''),
          onClick: function onClick() {
            return self.toggleMobileActiveSelector('filters');
          }
        }), /*#__PURE__*/React.createElement("div", {
          className: "osc-ideas-filters-container".concat(self.state.mobileActiveSelector == 'filters' ? ' osc-is-active' : '')
        }, self.config.filter.map(function (filterConfig, i) {
          return /*#__PURE__*/React.createElement(_ideas_filter_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
            config: filterConfig,
            className: "osc-align-right-container",
            key: "osc-ideas-filter-".concat(i),
            ref: function ref(el) {
              return self.filters[i] = el;
            }
          });
        })), resetButtonHTML);
      }

      var filtersAndButtonsHTML = null;
      filtersAndButtonsHTML = /*#__PURE__*/React.createElement("div", {
        className: "osc-ideas-filters-and-reset-button-container"
      }, filterHTML);
      return /*#__PURE__*/React.createElement("div", {
        className: "osc-ideas-filterbar ".concat(self.props.className || '')
      }, searchHTML, filtersAndButtonsHTML);
    }
  }]);

  return IdeasFilterbar;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/ideas-overview/component/ideas-list.jsx":
/*!*****************************************************!*\
  !*** ./src/ideas-overview/component/ideas-list.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IdeasList; });
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/index.jsx */ "./src/libs/index.jsx");
/* harmony import */ var _idea_tile_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./idea-tile.jsx */ "./src/ideas-overview/component/idea-tile.jsx");


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



 // TODO:
// display-type
// Status labels
// genoeg stemmen balk
// thema icon
// theme & area

var IdeasList = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(IdeasList, _OpenStadComponent);

  var _super = _createSuper(IdeasList);

  function IdeasList(props) {
    var _this;

    _classCallCheck(this, IdeasList);

    _this = _super.call(this, props, {
      display: {
        title: 'Inzendingen',
        // type: 'grid',
        type: 'tiles',
        // type: 'list',
        columns: 3,
        onMouseOverTileFadeOthers: false
      },
      idea: {
        titleField: 'title',
        summaryField: 'summary'
      },
      sort: {
        sortOptions: [{
          value: 'createdtime,desc',
          label: 'Nieuwste eerst'
        }, {
          value: 'createdtime,asc',
          label: 'Oudste eerst'
        }],
        showSort: true,
        defaultValue: 'createdtime,desc'
      },
      types: []
    });
    _this.state = {
      highLightIdeaId: null
    };
    return _this;
  }

  _createClass(IdeasList, [{
    key: "componentDidMount",
    value: function componentDidMount(prevProps, prevState) {
      var self = this;

      self.ideaTileMouseOverListener = function (event) {
        self.onTileMouseOver(event.detail);
      };

      document.addEventListener('osc-idea-tile-mouse-over', self.ideaTileMouseOverListener);

      self.ideaTileMouseOutListener = function (event) {
        self.onTileMouseOut(event.detail);
      };

      document.addEventListener('osc-idea-tile-mouse-out', self.ideaTileMouseOutListener);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('osc-idea-tile-mouse-over', this.ideaTileMouseOverListener);
      document.removeEventListener('osc-idea-tile-mouse-out', this.ideaTileMouseOutListener);
    }
  }, {
    key: "onTileMouseOver",
    value: function onTileMouseOver(_ref) {
      var idea = _ref.idea;
      this.setState({
        highLightIdeaId: idea.id
      });
    }
  }, {
    key: "onTileMouseOut",
    value: function onTileMouseOut(_ref2) {
      var idea = _ref2.idea;
      this.setState({
        highLightIdeaId: null
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var self = this;
      var ideas = self.props.ideas || [];
      return /*#__PURE__*/React.createElement("div", {
        className: "osc-tile-list-container ".concat(self.props.className || '')
      }, /*#__PURE__*/React.createElement("div", {
        className: "osc-tile-list"
      }, ideas.map(function (idea, i) {
        return /*#__PURE__*/React.createElement(_idea_tile_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
          config: self.config,
          idea: idea,
          className: "osc-".concat(self.config.display.columns, "-columns").concat(_this2.config.display.onMouseOverTileFadeOthers && self.state.highLightIdeaId && self.state.highLightIdeaId != idea.id ? ' osc-opacity-65' : ''),
          key: "osc-idea-tile-".concat(idea.id)
        });
      })));
    }
  }]);

  return IdeasList;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/ideas-overview/component/ideas-overview.jsx":
/*!*********************************************************!*\
  !*** ./src/ideas-overview/component/ideas-overview.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IdeasOverview; });
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/index.jsx */ "./src/libs/index.jsx");
/* harmony import */ var _ideas_list_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ideas-list.jsx */ "./src/ideas-overview/component/ideas-list.jsx");
/* harmony import */ var _ideas_filterbar_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ideas-filterbar.jsx */ "./src/ideas-overview/component/ideas-filterbar.jsx");
/* harmony import */ var _idea_tile_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./idea-tile.jsx */ "./src/ideas-overview/component/idea-tile.jsx");
/* harmony import */ var _ideas_sort_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ideas-sort.jsx */ "./src/ideas-overview/component/ideas-sort.jsx");


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






 // TODO:
// fixed set of ids
// filter
// search is nu as you type, dat zou ook met suggestions moeten kunnen en dan configurabel zijn
// gebruik default een configurabele link-to-plan-url denk ik
// sort positioneren
// hidesortbutton kan er uit; die hoort in de parent (ideas-on-map)

var IdeasOverview = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(IdeasOverview, _OpenStadComponent);

  var _super = _createSuper(IdeasOverview);

  function IdeasOverview(props) {
    var _this;

    _classCallCheck(this, IdeasOverview);

    _this = _super.call(this, props, {
      siteId: null,
      title: 'Inzendingen',
      display: {
        showFilterbar: true
      },
      idea: {
        titleField: 'title',
        summaryField: 'summary'
      },
      sort: {
        showSort: true,
        defaultValue: 'createdtime,desc'
      },
      filter: [],
      types: [],
      typeLabel: 'Thema'
    });
    _this.state = {
      ideas: _this.props.ideas || [],
      filters: {},
      search: null
    };
    return _this;
  }

  _createClass(IdeasOverview, [{
    key: "componentDidMount",
    value: function componentDidMount(prevProps, prevState) {
      var self = this;

      self.ideasFilterOnchangeListener = function (event) {
        self.updateFilter(event.detail);
      };

      document.addEventListener('osc-ideas-filter-onchange', self.ideasFilterOnchangeListener);

      self.ideasSearchOnchangeListener = function (event) {
        self.updateSearch(event.detail);
      };

      document.addEventListener('osc-ideas-search-onchange', self.ideasSearchOnchangeListener);

      self.ideasSortOnchangeListener = function (event) {
        self.updateSort(event.detail);
      };

      document.addEventListener('osc-ideas-sort-onchange', self.ideasSortOnchangeListener);

      if (typeof self.props.ideas == 'undefined') {
        self.fetchData();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('osc-ideas-filter-onchange', this.ideasFilterOnchangeListener);
      document.removeEventListener('osc-ideas-search-onchange', this.ideasSearchOnchangeListener);
      document.removeEventListener('osc-ideas-sort-onchange', this.ideasSortOnchangeListener);
    }
  }, {
    key: "fetchData",
    value: function fetchData() {
      var self = this;
      var url = "".concat(self.config.api.url, "/api/site/").concat(self.config.siteId, "/idea?summary=1&includeVoteCount=1&includeArgsCount=1");
      var headers = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].api.getHeaders(self.config);
      fetch(url, {
        headers: headers
      }).then(function (response) {
        if (!response.ok) throw Error('Error fechting detail');
        return response.json();
      }).then(function (json) {
        var ideas = json;
        ideas = self.sorter.doSort({
          ideas: ideas
        });
        self.setState({
          ideas: ideas
        }, function () {});
      })["catch"](function (err) {
        console.log('Niet goed');
        console.log(err);
      });
    }
  }, {
    key: "updateFilter",
    value: function updateFilter(filter) {
      // console.log('update filter', filter);
      var filters = _objectSpread({}, this.state.filters);

      if (filter.value) {
        filters[filter.fieldName] = {
          value: filter.value,
          doFilter: filter.doFilter
        };
      } else {
        delete filters[filter.fieldName];
      }

      this.setState({
        filters: filters
      });
    }
  }, {
    key: "updateSearch",
    value: function updateSearch(search) {
      // console.log('update search', search);
      if (search.value) {
        search = {
          value: search.value,
          doSearch: search.doSearch
        };
      } else {
        search = null;
      }

      this.setState({
        search: search
      });
    }
  }, {
    key: "updateSort",
    value: function updateSort(ideas) {
      this.setState({
        ideas: ideas
      });
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      var ideas = typeof self.props.ideas != 'undefined' ? self.props.ideas : self.state.ideas || [];
      var filteredIdeas = ideas;
      Object.keys(self.state.filters).forEach(function (key) {
        var filter = self.state.filters[key];
        filteredIdeas = filter.doFilter(filteredIdeas);
      });

      if (self.state.search) {
        filteredIdeas = self.state.search.doSearch(filteredIdeas);
      }

      if (this.props.maxLength) {
        filteredIdeas = ideas.slice(0, this.props.maxLength);
      }

      var titleHML = /*#__PURE__*/React.createElement("h3", {
        className: "osc-title"
      }, self.config.title, " (", filteredIdeas.length, ")");
      return /*#__PURE__*/React.createElement("div", {
        id: self.id,
        className: "osc-ideas-overview ".concat(self.props.className || '')
      }, /*#__PURE__*/React.createElement(_ideas_filterbar_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
        config: self.config,
        showFilterbar: self.props.showFilterbar,
        className: "osc-ideas-filterbar"
      }), /*#__PURE__*/React.createElement(_ideas_sort_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        config: _objectSpread({}, self.config.sort),
        ideas: ideas,
        showSort: !self.props.hideSortButton,
        className: "osc-align-right-container",
        ref: function ref(el) {
          return self.sorter = el;
        }
      }), titleHML, /*#__PURE__*/React.createElement(_ideas_list_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        config: self.config,
        ideas: filteredIdeas,
        className: ""
      }));
    }
  }]);

  return IdeasOverview;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/ideas-overview/component/ideas-search.jsx":
/*!*******************************************************!*\
  !*** ./src/ideas-overview/component/ideas-search.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IdeasSearch; });
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

 // todo:
// button
// hij doet nu search as you type, ik denk dat je dat niet altijd wilt dus configurabel
// showSearch
// showButton
// showSuggestions

var IdeasSearch = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(IdeasSearch, _OpenStadComponent);

  var _super = _createSuper(IdeasSearch);

  function IdeasSearch(props) {
    var _this;

    _classCallCheck(this, IdeasSearch);

    _this = _super.call(this, props, {
      placeholder: 'Zoeken',
      fieldNames: ['title', 'summary'],
      showSearch: true,
      showButton: false,
      showSuggestions: false,
      defaultValue: ''
    });
    _this.doSearch = _this.doSearch.bind(_assertThisInitialized(_this));
    _this.setSearch = _this.setSearch.bind(_assertThisInitialized(_this));
    _this.state = {
      currentValue: _this.config.defaultValue
    };
    return _this;
  }

  _createClass(IdeasSearch, [{
    key: "componentDidMount",
    value: function componentDidMount(prevProps, prevState) {
      if (this.state.currentValue) this.setFilter({
        value: this.state.currentValue
      });
    }
  }, {
    key: "doSearch",
    value: function doSearch(ideas, value) {
      var self = this;
      value = value || this.state.currentValue;
      ideas = ideas.filter(function (idea) {
        var found = false;
        self.config.fieldNames.forEach(function (fieldName) {
          var fieldValue = eval("idea.".concat(fieldName));
          if (fieldValue.match(new RegExp(value, 'i'))) found = true;
        });
        return found;
      });
      return ideas;
    }
  }, {
    key: "setSearch",
    value: function setSearch(_ref) {
      var value = _ref.value;
      var self = this;
      this.setState({
        currentValue: value
      }, function () {
        var event = new window.CustomEvent('osc-ideas-search-onchange', {
          detail: {
            value: value,
            doSearch: self.doSearch
          }
        });
        document.dispatchEvent(event);
      });
    }
  }, {
    key: "showSuggestions",
    value: function showSuggestions() {}
  }, {
    key: "hideSuggestions",
    value: function hideSuggestions() {}
  }, {
    key: "render",
    value: function render() {
      var self = this;

      if (self.config.showSearch == false) {
        return null;
      }

      var labelHTML = null;
      if (self.config.label) labelHTML = /*#__PURE__*/React.createElement("div", {
        className: "osc-search-label"
      }, self.config.label, ":"); // TODO

      var suggestionsHTML = null;
      return /*#__PURE__*/React.createElement("div", {
        className: "osc-ideas-search ".concat(self.props.className || '')
      }, labelHTML, suggestionsHTML, /*#__PURE__*/React.createElement("input", {
        type: "text",
        value: this.state.currentValue,
        placeholder: self.config.placeholder,
        onChange: function onChange() {
          return self.setSearch({
            value: self.searchInput.value
          });
        },
        onBlur: function onBlur() {
          return self.hideSuggestions();
        },
        onFocus: function onFocus() {
          return self.showSuggestions();
        },
        className: "osc-default-input osc-ideas-search-input",
        ref: function ref(el) {
          return self.searchInput = el;
        }
      }), /*#__PURE__*/React.createElement("button", {
        className: "osc-ideas-search-button".concat(this.state.currentValue ? ' osc-active' : ''),
        onClick: function onClick(event) {
          return self.setSearch({
            value: ''
          });
        },
        ref: function ref(el) {
          return self.resetButton = el;
        }
      }));
    }
  }]);

  return IdeasSearch;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/ideas-overview/component/ideas-sort.jsx":
/*!*****************************************************!*\
  !*** ./src/ideas-overview/component/ideas-sort.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IdeasSort; });
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/index.jsx */ "./src/libs/index.jsx");


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




var IdeasSort = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(IdeasSort, _OpenStadComponent);

  var _super = _createSuper(IdeasSort);

  function IdeasSort(props) {
    var _this;

    _classCallCheck(this, IdeasSort);

    _this = _super.call(this, props, {
      label: null,
      sortOptions: [{
        value: 'createdtime,desc',
        label: 'Nieuwste eerst'
      }, {
        value: 'createdtime,asc',
        label: 'Oudste eerst'
      }, {
        value: 'title',
        label: 'Titel'
      }, {
        value: 'random',
        label: 'Willekeurig'
      }, {
        value: 'likes,desc',
        label: 'Meeste likes'
      }, {
        value: 'likes,asc',
        label: 'Minste likes'
      }, {
        value: 'args,desc',
        label: 'Meeste reacties'
      }, {
        value: 'args,asc',
        label: 'Minste reacties'
      }, {
        value: 'ranking,asc',
        label: 'Ranglijst'
      }],
      defaultValue: 'createdtime,desc',
      showSort: true,
      center: {
        latitude: 52.37104644463586,
        longitude: 4.900402911007405
      }
    });
    _this.state = {
      currentValue: _this.config.defaultValue
    };
    return _this;
  }

  _createClass(IdeasSort, [{
    key: "doSort",
    value: function doSort(_ref) {
      var ideas = _ref.ideas,
          sortOrder = _ref.sortOrder,
          center = _ref.center;
      sortOrder = sortOrder || this.state.currentValue;
      center = center || this.config.center;
      return _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].ideasSort({
        ideas: ideas,
        sortOrder: sortOrder,
        center: center
      });
    }
  }, {
    key: "setSortOrder",
    value: function setSortOrder(_ref2) {
      var sortOrder = _ref2.sortOrder;
      var self = this;
      var ideas = self.props.ideas || [];
      ideas = self.doSort({
        ideas: ideas,
        sortOrder: sortOrder
      });
      this.setState({
        ideas: ideas,
        currentValue: sortOrder
      }, function () {
        var event = new window.CustomEvent('osc-ideas-sort-onchange', {
          detail: ideas
        });
        document.dispatchEvent(event);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      var ideas = self.props.ideas || [];
      var showSort = typeof self.props.showSort != 'undefined' ? self.props.showSort : self.config.showSort;

      if (!showSort) {
        return null;
      }

      var labelHTML = null;
      if (self.config.label) labelHTML = /*#__PURE__*/React.createElement("div", {
        className: "osc-sort-label"
      }, self.config.label, ":");
      return /*#__PURE__*/React.createElement("div", {
        className: "osc-ideas-sort ".concat(self.props.className || '')
      }, labelHTML, /*#__PURE__*/React.createElement("select", {
        defaultValue: self.state.currentValue,
        onChange: function onChange() {
          return self.setSortOrder({
            sortOrder: self.sortSelector.value
          });
        },
        className: "osc-default-select",
        ref: function ref(el) {
          return self.sortSelector = el;
        }
      }, self.config.sortOptions.map(function (option, i) {
        var selected = null;
        return /*#__PURE__*/React.createElement("option", {
          value: option.value,
          key: 'sort-option-' + i
        }, option.label);
      })));
    }
  }]);

  return IdeasSort;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/ideas-overview/css/default.less":
/*!*********************************************!*\
  !*** ./src/ideas-overview/css/default.less ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/ideas-overview/index.jsx":
/*!**************************************!*\
  !*** ./src/ideas-overview/index.jsx ***!
  \**************************************/
/*! exports provided: default, IdeasList, IdeasOverview, IdeasFilterbar, IdeasFilter, IdeasSort, IdeasSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_default_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/default.less */ "./src/ideas-overview/css/default.less");
/* harmony import */ var _css_default_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_default_less__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_ideas_list_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/ideas-list.jsx */ "./src/ideas-overview/component/ideas-list.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdeasList", function() { return _component_ideas_list_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _component_ideas_overview_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/ideas-overview.jsx */ "./src/ideas-overview/component/ideas-overview.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _component_ideas_overview_jsx__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdeasOverview", function() { return _component_ideas_overview_jsx__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _component_ideas_filterbar_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/ideas-filterbar.jsx */ "./src/ideas-overview/component/ideas-filterbar.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdeasFilterbar", function() { return _component_ideas_filterbar_jsx__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _component_ideas_filter_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/ideas-filter.jsx */ "./src/ideas-overview/component/ideas-filter.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdeasFilter", function() { return _component_ideas_filter_jsx__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _component_ideas_search_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/ideas-search.jsx */ "./src/ideas-overview/component/ideas-search.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdeasSearch", function() { return _component_ideas_search_jsx__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _component_ideas_sort_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/ideas-sort.jsx */ "./src/ideas-overview/component/ideas-sort.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdeasSort", function() { return _component_ideas_sort_jsx__WEBPACK_IMPORTED_MODULE_9__["default"]; });

// polyfills
 // react


 // import css to make sure it is generated in the result

 // the module






 // render elements

_component_ideas_overview_jsx__WEBPACK_IMPORTED_MODULE_5__["default"].renderElement = function renderElement(elem, config) {
  var attributes = elem.attributes;
  react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_component_ideas_overview_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    attributes: attributes,
    config: config
  }), elem);
};



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

/***/ "./src/nlmap/component/map.jsx":
/*!*************************************!*\
  !*** ./src/nlmap/component/map.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentNLMap; });
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _lib_amaps_cluster_icon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/amaps-cluster-icon.js */ "./src/nlmap/lib/amaps-cluster-icon.js");


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





var OpenStadComponentNLMap = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentNLMap, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentNLMap);

  function OpenStadComponentNLMap(props, defaultConfig) {
    var _this;

    _classCallCheck(this, OpenStadComponentNLMap);

    _this = _super.call(this, props, defaultConfig, {
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
    });

    var self = _assertThisInitialized(_this);

    self.config.target = self.divId; // external css and script files

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
        var iconCreateFunction = self.config.clustering.iconCreateFunction || _lib_amaps_cluster_icon_js__WEBPACK_IMPORTED_MODULE_2__["default"].bind(self); // ( self.config.variant == 'amaps' ? amapsCreateClusterIcon.bind(self) : self.createClusterIcon );

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

      var polygonStyle = merge__WEBPACK_IMPORTED_MODULE_0___default()({
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
      // TODO: de uitgecommente versie hieronder kan generiek werken op de PDOK versie, maar die is/wordt betaald en daarvoor heb je dan een API key nodig
      // Daarom heb ik nu deze gratis service gebruikt; even kijken hoe dat loopt
      // eerste indruk: veel te traag
      var self = this;
      var locatieApiUrl = 'https://geodata.nationaalgeoregister.nl/locatieserver/v3/free?lat=[[lat]]5&lon=[[lng]]&fq=type:adres&rows=1';
      latlng = latlng || {};
      var url = locatieApiUrl.replace(/\[\[lat\]\]/, latlng.lat).replace(/\[\[lng\]\]/, latlng.lng);
      fetch(url).then(function (response) {
        if (!response.ok) throw Error(response);
        return response.json();
      }).then(function (json) {
        var doc = json.response && json.response.docs && json.response.docs[0];
        if (!doc) throw new Error('Niets gevonden');
        var result = {
          _display: "".concat(doc.straatnaam, " ").concat(doc.huisnummer)
        };
        result.lat = latlng.lat;
        result.lng = latlng.lng;
        if (next) return next(result, marker);
        return result;
      })["catch"](function (err) {
        console.log('Zoek adres: niet goed');
        console.log(err);
        if (next) next({}, marker);
      }); // var bagApiUrl1 = 'https://api.data.amsterdam.nl/bag/nummeraanduiding/?format=json&locatie=[[lat]],[[lng]],50';
      // var bagApiUrl2 = 'https://api.data.amsterdam.nl/bag/nummeraanduiding/[[id]]/?format=json';
      // 
      // var self = this;
      // 
      // latlng = latlng || {};
      // 
      // var url = bagApiUrl1
      // 	  .replace(/\[\[lat\]\]/, latlng.lat)
      // 	  .replace(/\[\[lng\]\]/, latlng.lng);
      // 
      // 
      // fetch(url)
      //   .then((response) => {
      //     return response.json();
      //   })
      //   .then( json => {
      // 	  var id = json && json.results && json.results[0] && json.results[0].landelijk_id;
      // 	  var url = bagApiUrl2
      // 			  .replace(/\[\[id\]\]/, id)
      //     fetch(url)
      //       .then((response) => {
      //         return response.json();
      //       })
      //       .then( json => {
      // 			  json.lat = latlng.lat;
      // 			  json.lng = latlng.lng;
      // 			  if (next) next(json, marker);
      //       })
      //   })
      //   .catch((err) => {
      //     console.log('Zoek adres: niet goed');
      //     console.log(err);
      // 	  if (next) next({}, marker);
      //   });
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

      return /*#__PURE__*/React.createElement("div", {
        id: this.divId,
        className: this.props.className || 'osc-nlmap',
        ref: function ref(el) {
          return _this2.instance = el;
        }
      }, /*#__PURE__*/React.createElement("div", {
        id: this.divId + '-map'
      }));
    }
  }]);

  return OpenStadComponentNLMap;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"]);



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

/***/ "./src/poll/component/poll-form.jsx":
/*!******************************************!*\
  !*** ./src/poll/component/poll-form.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentPollForm; });
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/index.jsx */ "./src/libs/index.jsx");
/* harmony import */ var _forms_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../forms/index.jsx */ "./src/forms/index.jsx");


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





var OpenStadComponentPollForm = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentPollForm, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentPollForm);

  function OpenStadComponentPollForm(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentPollForm);

    _this = _super.call(this, props, {
      user: {},
      questionMinLength: 30,
      questionMaxLength: 500,
      titleMinLength: 30,
      titleMaxLength: 500,
      descriptionMinLength: 30,
      descriptionMaxLength: 500,
      allowChoiceTitles: true
    });
    _this.state = {
      user: props.user,
      pollId: props.pollId,
      poll: props.poll,
      isBusy: false
    };
    return _this;
  }

  _createClass(OpenStadComponentPollForm, [{
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
            if (!self.state.poll) self.fetchData();
          });
        });
      } else {
        if (!self.state.poll) self.fetchData();
      }
    }
  }, {
    key: "fetchData",
    value: function fetchData(next) {
      var self = this;

      if (!self.state.pollId) {
        return self.setState({
          poll: {
            question: '',
            choices: {
              "1": {},
              "2": {}
            }
          }
        });
      }

      var url = "".concat(self.config.api && self.config.api.url, "/api/site/").concat(self.config.siteId, "/idea/").concat(self.config.ideaId, "/poll/").concat(self.config.pollId, "?withUser=1&withVotes=1");
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

        state.poll = json;
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
    key: "validatedResult",
    value: function validatedResult() {
      var self = this;
      var poll = self.state.poll;
      var questionInput = self['question-input'];
      var isValid = questionInput.validate();
      var result = {
        question: questionInput.state.value,
        choices: {}
      };
      Object.keys(poll.choices).forEach(function (key) {
        var titleInput = self["title-input-".concat(key)];
        var descriptionInput = self["description-input-".concat(key)];
        if (!(titleInput && titleInput.state.value) && !descriptionInput.state.value) return;
        result.choices[key] = {};

        if (self.config.allowChoiceTitles && titleInput.state.value) {
          result.choices[key].title = titleInput.state.value;
          if (!titleInput.validate()) isValid = false;
        }

        if (descriptionInput.state.value) {
          result.choices[key].description = descriptionInput.state.value;
          if (!descriptionInput.validate()) isValid = false;
        }
      });
      if (!isValid) return null;
      if (Object.keys(result.choices).length < 2) return null;
      return result;
    }
  }, {
    key: "handleOnChange",
    value: function handleOnChange(data) {
      var self = this;

      var poll = _objectSpread({}, self.state.poll);

      if (data.choice) {
        poll.choices[data.choice.id] = {
          title: self.config.allowChoiceTitles && data.choice.title,
          description: data.choice.description
        };
      }

      if (data.question) {
        poll.question = data.question;
      }

      this.setState({
        poll: poll
      }, function () {});
    }
  }, {
    key: "addChoice",
    value: function addChoice() {
      var self = this;

      var poll = _objectSpread({}, self.state.poll);

      var keys = Object.keys(poll.choices).sort();
      var key = parseInt(keys[keys.length - 1]) + 1;
      poll.choices[key] = {};
      self.setState({
        poll: poll
      });
    }
  }, {
    key: "canSubmit",
    value: function canSubmit() {
      if (this.state.poll && this.state.poll.can) {
        return this.state.poll.can.edit;
      } else {
        var requiredUserRole = this.config.requiredUserRole;
        var userRole = 'moderator' || false; // todo: owner; dus dit moet anders

        return requiredUserRole == 'anonymous' && userRole || requiredUserRole == 'member' && (userRole == 'member' || userRole == 'editor' || userRole == 'moderator' || userRole == 'admin') || requiredUserRole == 'editor' && (userRole == 'editor' || userRole == 'moderator' || userRole == 'admin') || requiredUserRole == 'moderator' && (userRole == 'moderator' || userRole == 'admin') || requiredUserRole == 'admin' && userRole == 'admin';
      }
    }
  }, {
    key: "submitForm",
    value: function submitForm() {
      var self = this;
      self.setState({
        isBusy: true
      }, function () {
        var validatedResult = self.validatedResult();

        if (!validatedResult) {
          self.setState({
            isBusy: false
          });
          return;
        }

        if (!self.canSubmit()) return alert('Je bent niet ingelogd');
        var isNew = true;
        var url = "".concat(self.config.api && self.config.api.url, "/api/site/").concat(self.config.siteId, "/idea/").concat(self.config.ideaId, "/poll");
        var method = 'POST';

        if (self.state.poll && self.state.poll.id) {
          url += "/".concat(self.state.poll.id);
          method = 'PUT';
          isNew = false;
        }

        var headers = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].api.getHeaders(self.config);
        var body = validatedResult;
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
          var event = new CustomEvent('osc-new-poll-stored', {
            detail: json
          });
          if (!isNew) event = new CustomEvent('osc-poll-edited', {
            detail: json
          });
          document.dispatchEvent(event);

          if (typeof self.config.onFinished == 'function') {
            self.config.onFinished(validatedResult);
          }
        })["catch"](function (error) {
          console.log(error);
          error.then(function (messages) {
            alert(messages);
            return console.log(messages);
          });
          self.setState({
            isBusy: false
          });
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var self = this;
      var poll = self.state.poll || {};
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
          className: "osc-button-blue",
          onClick: function onClick() {
            if (self.config.onFinished) self.config.onFinished();
          }
        }, "Terug"), /*#__PURE__*/React.createElement("button", {
          onClick: function onClick(e) {
            if (!self.state.isBusy) self.submitForm();
          },
          className: "osc-button-blue osc-margin-left".concat(self.state.isBusy ? ' osc-disabled' : '')
        }, "Verzenden"));
      } else {
        submitButtonHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-align-right-container"
        }, /*#__PURE__*/React.createElement("button", {
          className: "osc-button-blue",
          onClick: function onClick() {
            if (self.config.onFinished) self.config.onFinished();
          }
        }, "Terug"), /*#__PURE__*/React.createElement("button", {
          onClick: function onClick() {
            _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].localStorage.set('osc-reactions-login-pending', true);
            document.location.href = self.config.loginUrl;
          },
          className: "osc-button-blue osc-not-logged-in-button osc-margin-left"
        }, "Inloggen"));
      }

      return /*#__PURE__*/React.createElement("div", {
        id: self.divId,
        className: "osc-form",
        ref: function ref(el) {
          return self.instance = el;
        }
      }, formIntro, /*#__PURE__*/React.createElement("h4", null, "Vraag"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].InputWithCounter, {
        config: {
          inputType: 'text',
          minLength: self.config.questionMinLength,
          maxLength: self.config.questionMaxLength,
          placeholder: 'Vraag'
        },
        value: poll.question,
        onChange: function onChange(data) {
          return self.handleOnChange({
            question: data.value
          });
        },
        ref: function ref(el) {
          return self["question-input"] = el;
        }
      }), /*#__PURE__*/React.createElement("h4", null, "Keuzemogelijkheden"), /*#__PURE__*/React.createElement("ol", {
        className: "osc-poll-form-choices"
      }, poll && poll.choices && Object.keys(poll.choices).sort().map(function (key) {
        var choice = poll.choices[key];
        var titleInputHTML = null;
        if (self.config.allowChoiceTitles) titleInputHTML = /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].InputWithCounter, {
          config: {
            inputType: 'text',
            minLength: self.config.titleMinLength,
            maxLength: self.config.titleMaxLength,
            placeholder: 'Titel'
          },
          value: choice.title,
          onChange: function onChange(data) {
            return self.handleOnChange({
              choice: {
                id: key,
                title: data.value
              }
            });
          },
          ref: function ref(el) {
            return self["title-input-".concat(key)] = el;
          }
        });
        return /*#__PURE__*/React.createElement("li", {
          className: "osc-poll-form-choice",
          key: "osc-key-".concat(key)
        }, titleInputHTML, /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].InputWithCounter, {
          config: {
            inputType: 'text',
            minLength: self.config.descriptionMinLength,
            maxLength: self.config.descriptionMaxLength,
            placeholder: 'Beschrijving'
          },
          value: choice.description,
          onChange: function onChange(data) {
            return self.handleOnChange({
              choice: {
                id: key,
                description: data.value
              }
            });
          },
          ref: function ref(el) {
            return self["description-input-".concat(key)] = el;
          }
        }));
      })), /*#__PURE__*/React.createElement("a", {
        className: "osc-add-choice-button",
        onClick: function onClick(e) {
          return _this2.addChoice();
        }
      }, "Nog een keuzemogelijkheid toevoegen"), submitButtonHTML);
    }
  }]);

  return OpenStadComponentPollForm;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/poll/component/poll.jsx":
/*!*************************************!*\
  !*** ./src/poll/component/poll.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentPoll; });
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/index.jsx */ "./src/libs/index.jsx");
/* harmony import */ var _forms_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../forms/index.jsx */ "./src/forms/index.jsx");
/* harmony import */ var _poll_form_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./poll-form.jsx */ "./src/poll/component/poll-form.jsx");


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






var OpenStadComponentPoll = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentPoll, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentPoll);

  function OpenStadComponentPoll(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentPoll);

    _this = _super.call(this, props, {
      siteId: null,
      ideaId: null,
      title: null,
      // hoort niet hier
      titleMinLength: 30,
      titleMaxLength: 500,
      descriptionMinLength: 30,
      descriptionMaxLength: 500,
      user: null,
      loginUrl: '',
      api: {
        url: null,
        headers: null
      },
      requiredUserRole: 'member',
      withPercentage: true,
      allowChoiceTitles: true,
      allowShowResultsIfNotVoted: false
    });

    var self = _assertThisInitialized(_this);

    self.config.loginUrl = self.config.loginUrl || '/oauth/login?returnTo=' + encodeURIComponent(document.location.href);
    self.hideEditForm = self.hideEditForm.bind(self);
    self.state = {
      user: self.config.user,
      poll: props.poll,
      pollId: props.poll && props.poll.id || self.config.pollId,
      selectedChoice: null,
      showResult: false,
      showQuestion: false,
      editMode: false,
      showVoteSucceeded: false
    };

    if (self.state.poll) {
      self.parseVoteCount(self.state.poll);

      if (self.state.poll.userVote) {
        self.state.selectedChoice = self.state.poll.userVote;
      }
    }

    return _this;
  }

  _createClass(OpenStadComponentPoll, [{
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
            if (!self.state.poll && self.config.ideaId) self.fetchData();
          });
        });
      } else {
        if (!self.state.poll && self.config.ideaId) self.fetchData();
      }
    }
  }, {
    key: "fetchData",
    value: function fetchData(next) {
      var self = this;

      if (!self.state.pollId) {
        // no data: show new poll form
        return self.setState({
          editMode: true
        }, function () {});
      }

      var url = "".concat(self.config.api && self.config.api.url, "/api/site/").concat(self.config.siteId, "/idea/").concat(self.config.ideaId, "/poll/").concat(self.state.pollId, "?withUser=1&withUserVote=1&withVoteCount=1&withVotes=1");
      var headers = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].api.getHeaders(self.config);
      fetch(url, {
        headers: headers
      }).then(function (response) {
        if (response.ok) {
          return response.json();
        }

        throw response.text();
      }).then(function (json) {
        var state = _objectSpread(_objectSpread({}, self.state), {}, {
          showResult: false,
          showQuestion: false
        });

        state.poll = json;
        state.pollId = json.id;
        self.parseVoteCount(state.poll);

        if (state.poll.userVote) {
          state.selectedChoice = state.poll.userVote;
        }

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
    key: "parseVoteCount",
    value: function parseVoteCount(poll) {
      var self = this;

      if (poll.voteCount) {
        Object.keys(poll.choices).sort().forEach(function (key) {
          var choice = poll.choices[key];
          choice.votesAbs = poll.voteCount[key];
          choice.votesPrc = parseInt(100 * (poll.voteCount[key] / poll.voteCount.total));
          choice.votesPrc = choice.votesPrc || 0;
        });
      }
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
      this.setState({
        editMode: false
      }, function () {
        this.fetchData();
      });
    }
  }, {
    key: "setShowResult",
    value: function setShowResult() {
      this.setState({
        showResult: true
      });
    }
  }, {
    key: "setShowQuestion",
    value: function setShowQuestion() {
      this.setState({
        showQuestion: true
      });
    }
  }, {
    key: "selectChoice",
    value: function selectChoice(data) {
      this.setState({
        selectedChoice: data.choice
      });
    }
  }, {
    key: "onReactionEdited",
    value: function onReactionEdited(reaction) {
      this.fetchData();
    }
  }, {
    key: "isValid",
    value: function isValid() {
      return !!this.state.selectedChoice;
    }
  }, {
    key: "canSubmit",
    value: function canSubmit() {
      var requiredUserRole = this.config.requiredUserRole;
      var userRole = this.state.user && this.state.user.role; // todo: nieuwe rollen structuur

      return requiredUserRole == 'anonymous' && userRole || requiredUserRole == 'member' && (userRole == 'member' || userRole == 'admin') || requiredUserRole == 'admin' && userRole == 'admin';
    }
  }, {
    key: "submitVote",
    value: function submitVote() {
      var self = this;
      self.setState({
        isBusy: true
      }, function () {
        if (!self.isValid()) {
          self.setState({
            isBusy: false,
            isValid: false
          });
          return;
        }

        if (!self.canSubmit()) return alert('Je bent niet ingelogd');
        var url = "".concat(self.config.api && self.config.api.url, "/api/site/").concat(self.config.siteId, "/idea/").concat(self.config.ideaId, "/poll/").concat(self.state.poll.id, "/vote");
        var headers = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].api.getHeaders(self.config);
        var method = 'POST';
        var body = {
          choice: self.state.selectedChoice
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
          self.fetchData(function () {
            self.setState({
              isBusy: false,
              showVoteSucceeded: true
            }, function () {
              var event = new CustomEvent('osc-poll-voted', {
                detail: json
              });
              document.dispatchEvent(event);
            });
          });

          if (typeof self.config.onSubmit == 'function') {
            self.config.onSubmit({
              description: self.state.description
            });
          }
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
    key: "deletePoll",
    value: function deletePoll() {
      var self = this;
      self.setState({
        isBusy: true
      }, function () {
        var poll = self.state.poll;
        if (!(poll && poll.can && poll.can["delete"])) return alert('U kunt deze poll niet verwijderen');
        if (!(poll && poll.id)) return alert('U kunt deze poll niet verwijderen');
        var url = "".concat(self.config.api && self.config.api.url, "/api/site/").concat(self.config.siteId, "/idea/").concat(self.config.ideaId, "/poll/").concat(self.state.poll.id);
        var method = 'DELETE';
        var headers = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].api.getHeaders(self.config);
        fetch(url, {
          method: method,
          headers: headers
        }).then(function (response) {
          if (response.ok) {
            return response.json();
          }

          throw response.text();
        }).then(function (json) {
          var event = new CustomEvent('osc-poll-deleted', {
            detail: json
          });
          document.dispatchEvent(event);
        })["catch"](function (error) {
          console.log(error);
          error.then(function (messages) {
            alert(messages);
            return console.log(messages);
          });
          self.setState({
            isBusy: false
          });
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var self = this;
      var poll = self.state.poll || {};

      if (self.state.editMode) {
        return /*#__PURE__*/React.createElement("div", {
          id: this.id,
          className: self.props.className || 'osc-poll',
          ref: function ref(el) {
            _this2.instance = el;
          }
        }, /*#__PURE__*/React.createElement(_poll_form_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
          config: _objectSpread(_objectSpread({}, self.config), {}, {
            onFinished: self.hideEditForm
          }),
          pollId: self.state.poll && self.state.poll.id,
          poll: self.state.poll,
          user: self.state.user
        }));
      } else {
        var questionHTML = null;

        if (poll && poll.choices && !poll.userVote || self.state.showQuestion) {
          var config = {
            name: "pollChoice",
            choices: []
          };
          Object.keys(poll.choices).sort().map(function (key) {
            var choiceHTML = self.config.allowChoiceTitles && poll.choices[key].title ? "<h4>".concat(poll.choices[key].title, "</h4>") : '';
            choiceHTML += poll.choices[key].description || '';
            config.choices.push({
              dangerousDescription: choiceHTML,
              value: key
            });
          });
          var submitButtonHTML = null;

          if (self.canSubmit()) {
            submitButtonHTML = /*#__PURE__*/React.createElement("button", {
              onClick: function onClick(e) {
                if (!self.state.isBusy) self.submitVote();
              },
              className: "osc-button-blue".concat(!self.isValid() ? ' osc-disabled' : '')
            }, "Stemmen");
          } else {
            submitButtonHTML = /*#__PURE__*/React.createElement("button", {
              onClick: function onClick() {
                _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].localStorage.set('osc-poll-login-pending', true);
                document.location.href = self.config.loginUrl;
              },
              className: "osc-button-blue osc-not-logged-in-button"
            }, "Inloggen");
          }

          var showResultButtonHTML = null;
          if (self.config.allowShowResultsIfNotVoted && !(poll.userVote || self.state.showResult)) showResultButtonHTML = /*#__PURE__*/React.createElement("a", {
            className: "osc-show-result-button",
            onClick: function onClick(e) {
              return _this2.setShowResult();
            }
          }, "Resultaat bekijken");
          questionHTML = /*#__PURE__*/React.createElement("div", {
            className: "osc-poll-question osc-form"
          }, /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].Radios, {
            config: config,
            value: self.state.selectedChoice,
            onChange: function onChange(data) {
              return self.selectChoice({
                choice: data.value
              });
            },
            ref: function ref(el) {
              return self.description = el;
            }
          }), /*#__PURE__*/React.createElement("div", {
            className: "osc-poll-question-buttons"
          }, submitButtonHTML, showResultButtonHTML));
        }

        var resultHTML = null;

        if (poll && (poll.userVote || self.state.showResult)) {
          var showQuestionButtonHTML = null;
          if (!self.state.showQuestion && !(poll && poll.choices && !poll.userVote)) showQuestionButtonHTML = /*#__PURE__*/React.createElement("a", {
            className: "osc-show-question-button",
            onClick: function onClick(e) {
              return _this2.setShowQuestion();
            }
          }, "Stem aanpassen");
          var totalVotesHTML = null;

          if (poll.voteCount && poll.voteCount.total) {
            var xx = poll.voteCount.total == 1 ? 'stem' : 'stemmen';
            totalVotesHTML = /*#__PURE__*/React.createElement("div", null, "Totaal ", poll.voteCount.total, " ", xx, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null));
          }

          resultHTML = /*#__PURE__*/React.createElement("ul", {
            className: "osc-choices"
          }, Object.keys(poll.choices).sort().map(function (key) {
            var choice = poll.choices[key];
            var titleHTML = null;
            if (self.config.allowChoiceTitles && choice.title) titleHTML = /*#__PURE__*/React.createElement("h4", null, choice.title);
            var descriptionHTML = null;
            if (choice.description) descriptionHTML = /*#__PURE__*/React.createElement("div", null, choice.description);
            var percentageHTML = null;

            if (self.config.withPercentage) {
              percentageHTML = /*#__PURE__*/React.createElement("div", {
                className: "osc-percentage"
              }, choice.votesPrc, "%");
            }

            var scoreHTML = /*#__PURE__*/React.createElement("div", {
              className: "osc-choice-default"
            }, titleHTML, descriptionHTML, /*#__PURE__*/React.createElement("div", {
              className: "osc-choice-bar".concat(self.config.withPercentage ? ' osc-with-percentage' : '')
            }, /*#__PURE__*/React.createElement("div", {
              className: "osc-choice-bar-mask"
            }), /*#__PURE__*/React.createElement("div", {
              className: "osc-choice-bar-progress",
              style: {
                width: (choice.votesPrc || 0) + '%'
              }
            })), percentageHTML);
            return /*#__PURE__*/React.createElement("li", {
              className: "osc-choice",
              key: "osc-key-".concat(key)
            }, scoreHTML);
          }), totalVotesHTML, showQuestionButtonHTML);
        }

        var editButtonsHTML = null;

        if (self.state.poll && self.state.poll.can && self.state.poll.can.edit) {
          editButtonsHTML = /*#__PURE__*/React.createElement("div", {
            className: "osc-editbuttons"
          }, /*#__PURE__*/React.createElement("button", {
            className: "osc-editbutton osc-edit",
            onClick: function onClick(event) {
              return self.showEditForm();
            }
          }, "Bewerk poll"), /*#__PURE__*/React.createElement("button", {
            className: "osc-editbutton osc-delete",
            onClick: function onClick(event) {
              if (confirm('Weet u het zeker')) self.deletePoll();
            }
          }, "Verwijder poll"));
        }

        var voteSucceededHTML = null;

        if (self.state.showVoteSucceeded) {
          voteSucceededHTML = /*#__PURE__*/React.createElement("div", {
            className: "osc-vote-succeeded"
          }, "Uw stem is opgeslagen");
        }

        return /*#__PURE__*/React.createElement("div", {
          id: this.id,
          className: self.props.className || 'osc-poll',
          ref: function ref(el) {
            _this2.instance = el;
          }
        }, editButtonsHTML, voteSucceededHTML, /*#__PURE__*/React.createElement("h4", null, poll.question), questionHTML, resultHTML, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null));
      }
    }
  }]);

  return OpenStadComponentPoll;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/poll/css/default.less":
/*!***********************************!*\
  !*** ./src/poll/css/default.less ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/poll/index.jsx":
/*!****************************!*\
  !*** ./src/poll/index.jsx ***!
  \****************************/
/*! exports provided: default, Poll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_default_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/default.less */ "./src/poll/css/default.less");
/* harmony import */ var _css_default_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_default_less__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_poll_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/poll.jsx */ "./src/poll/component/poll.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _component_poll_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Poll", function() { return _component_poll_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]; });

// polyfills
 // react


 // import css to make sure it is generated in the result

 // the module

 // render elements

_component_poll_jsx__WEBPACK_IMPORTED_MODULE_4__["default"].renderElement = function renderElement(elem, config) {
  var attributes = elem.attributes;
  react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_component_poll_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    attributes: attributes,
    config: config
  }), elem);
};



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
      var user = this.props.user || {};
      return _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].user.hasRole(user, requiredUserRole);
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
      return requiredUserRole == 'anonymous' && userRole || requiredUserRole == 'member' && (userRole == 'member' || userRole == 'editor' || userRole == 'moderator' || userRole == 'admin') || requiredUserRole == 'editor' && (userRole == 'editor' || userRole == 'moderator' || userRole == 'admin') || requiredUserRole == 'moderator' && (userRole == 'moderator' || userRole == 'admin') || requiredUserRole == 'admin' && userRole == 'admin';
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
      var isAdmin = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].user.hasRole(data.user, 'editor') ? 'osc-is-admin' : '';
      var metadataHTML = /*#__PURE__*/React.createElement("div", {
        className: "osc-reaction-user ".concat(isAdmin)
      }, data.user.nickName || data.user.fullName || "".concat(data.user.firstName, " ").concat(data.user.lastName));
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
      }, menuHTML, metadataHTML, /*#__PURE__*/React.createElement("div", {
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
//# sourceMappingURL=ideas-on-map.js.map