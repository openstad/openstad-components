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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.jsx");
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

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

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
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
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

var OpenStadComponentChoicePlane = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentChoicePlane, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentChoicePlane);

  function OpenStadComponentChoicePlane(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentChoicePlane);

    _this = _super.call(this, props);
    _this.defaultConfig = {
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
    };
    _this.config = merge__WEBPACK_IMPORTED_MODULE_0___default.a.recursive(_this.defaultConfig, _this.config, props.config || {});
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
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"]);



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
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _choice_plane_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./choice-plane.jsx */ "./src/choices-guide/component/choice-plane.jsx");
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

var OpenStadComponentChoice = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentChoice, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentChoice);

  function OpenStadComponentChoice(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentChoice);

    _this = _super.call(this, props);
    _this.defaultConfig = {
      type: 'default',
      barColor: {
        "default": '#bed200',
        min: '#ff9100',
        max: '#bed200'
      }
    };
    _this.config = merge__WEBPACK_IMPORTED_MODULE_0___default.a.recursive('clone', _this.defaultConfig, _this.config, props.config || {});
    if (_this.config.barColor.min == null) _this.config.barColor.min = '#ff9100';
    if (_this.config.barColor.max == null) _this.config.barColor.max = '#bed200';
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
          scoreHTML = /*#__PURE__*/React.createElement(_choice_plane_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
            config: _objectSpread({}, self.config),
            data: _objectSpread({}, self.props.data),
            score: score,
            ref: function ref(el) {
              self.planeElement = el;
            }
          });
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
            className: "osc-choice-bar-progress",
            style: style
          })), percentageHTML);
      }

      return /*#__PURE__*/React.createElement("li", {
        className: "osc-choice"
      }, scoreHTML);
    }
  }]);

  return OpenStadComponentChoice;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"]);



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
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fingerprintjs2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fingerprintjs2 */ "./node_modules/fingerprintjs2/fingerprint2.js");
/* harmony import */ var fingerprintjs2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fingerprintjs2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _libs_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libs/index.jsx */ "./src/libs/index.jsx");
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _choices_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./choices.jsx */ "./src/choices-guide/component/choices.jsx");
/* harmony import */ var _choice_plane_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./choice-plane.jsx */ "./src/choices-guide/component/choice-plane.jsx");
/* harmony import */ var _forms_index_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../forms/index.jsx */ "./src/forms/index.jsx");
/* harmony import */ var _previous_next_button_block_index_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../previous-next-button-block/index.jsx */ "./src/previous-next-button-block/index.jsx");
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










'use strict';

var OpenStadComponentChoicesGuideResult = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentChoicesGuideResult, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentChoicesGuideResult);

  function OpenStadComponentChoicesGuideResult(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentChoicesGuideResult);

    _this = _super.call(this, props);
    _this.defaultConfig = {
      type: 'default',
      submission: {
        type: 'none'
      },
      choices: {
        title: {
          noPreferenceYet: 'Je hebt nog geen keuze gemaakt',
          preference: 'Jouw voorkeur is {preferredChoice}',
          inBetween: 'Je staat precies tussen meerdere voorkeuren in'
        }
      }
    };
    _this.config = merge__WEBPACK_IMPORTED_MODULE_0___default.a.recursive(_this.defaultConfig, _this.config, props.config || {});
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
      var scores = self.choicesElement && self.choicesElement.calculateScores(self.state.answers);
      console.log(self.choicesElement);
      var choicesTitle = '';
      var name;
      var preferredChoiceId = -1;

      if (self.choicesElement) {
        var choiceElement = self.choicesElement.getPreferedChoice();

        if (choiceElement) {
          name = choiceElement.getTitle(self.state.scores[choiceElement.config.divId], true);

          if (name) {
            choicesTitle = self.config.choices.title.preference.replace('\{preferredChoice\}', name);
            preferredChoiceId = choiceElement.divId;
          } else {
            choicesTitle = self.config.choices.title.noPreferenceYet;
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
          showErrors: true
        });
        if (!isValid) return;
      }

      fingerprintjs2__WEBPACK_IMPORTED_MODULE_1___default.a.get(function (fingerprintComponents) {
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

            choicesHTML = /*#__PURE__*/React.createElement(_choices_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], (_React$createElement = {
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
            choicesHTML = /*#__PURE__*/React.createElement(_choices_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], (_React$createElement2 = {
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
        formHTML = /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_6__["default"].Form, {
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
          previousNextButtonsHTML = /*#__PURE__*/React.createElement(_previous_next_button_block_index_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
      }, /*#__PURE__*/React.createElement("h3", {
        dangerouslySetInnerHTML: {
          __html: self.state.title
        }
      }), choicesHTML), moreInfoHTML, formHTML)), previousNextButtonsHTML);
    }
  }]);

  return OpenStadComponentChoicesGuideResult;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"]);



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
/* harmony import */ var _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/index.jsx */ "./src/libs/index.jsx");
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
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


'use strict';

var OpenStadComponentChoicesGuide = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentChoicesGuide, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentChoicesGuide);

  function OpenStadComponentChoicesGuide(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentChoicesGuide);

    _this = _super.call(this, props);

    var self = _assertThisInitialized(_this);

    self.id = props.id || "osc-choices-guide-".concat(parseInt(1000000 * Math.random()));
    self.defaultConfig = {
      siteId: null,
      loginUrl: null,
      noOfQuestionsToShow: 1,
      api: {
        url: null
      },
      sticky: null,
      choices: {
        title: {
          noPreferenceYet: 'Je hebt nog geen keuze gemaakt',
          preference: '<b>Jouw voorkeur:</b>{preferredChoice}',
          inBetween: 'Je staat precies tussen meerdere voorkeuren in'
        }
      }
    };
    self.config = merge__WEBPACK_IMPORTED_MODULE_0___default.a.recursive(self.defaultConfig, self.config, props.config || {}); // tmp

    if (!self.config.aspectRatio && self.config.choices && self.config.choices.type && self.config.choices.type == 'plane') {
      self.config.aspectRatio = '10x7';
    }

    var allValues = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].sessionStorage.get('osc-choices-guide.values') || {};
    var allScores = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].sessionStorage.get('osc-choices-guide.scores') || {};
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
      var allValues = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].sessionStorage.get('osc-choices-guide.values') || {};
      var allScores = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].sessionStorage.get('osc-choices-guide.scores') || {};
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
        var allValues = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].sessionStorage.get('osc-choices-guide.values') || {};
        allValues[_this5.config.choicesGuideId] = answers;
        _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].sessionStorage.set('osc-choices-guide.values', allValues);
        var allScores = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].sessionStorage.get('osc-choices-guide.scores') || {};
        allScores[_this5.config.choicesGuideId] = scores;
        _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].sessionStorage.set('osc-choices-guide.scores', allScores);
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

          if (self.state.firstAnswerGiven && self.choicesElement) {
            var choiceElement = self.choicesElement.getPreferedChoice();
            choicesTitle = self.config.choices.title.preference.replace('\{preferredChoice\}', choiceElement && choiceElement.getTitle(self.state.scores[choiceElement.config.divId]) || choicesTitle);
          } else {
            choicesTitle = self.config.choices.title.noPreferenceYet;
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
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]);



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
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/index.jsx */ "./src/libs/index.jsx");
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _choice_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./choice.jsx */ "./src/choices-guide/component/choice.jsx");
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

var OpenStadComponentChoices = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentChoices, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentChoices);

  function OpenStadComponentChoices(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentChoices);

    _this = _super.call(this, props);
    _this.defaultConfig = {
      type: 'default',
      sticky: null
    };
    _this.config = merge__WEBPACK_IMPORTED_MODULE_0___default.a.recursive(_this.defaultConfig, _this.config, props.config || {});
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
        return /*#__PURE__*/React.createElement(_choice_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]);



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
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/index.jsx */ "./src/libs/index.jsx");
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _forms_index_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../forms/index.jsx */ "./src/forms/index.jsx");
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




'use strict';

var OpenStadComponentChoicesGuideForm = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentChoicesGuideForm, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentChoicesGuideForm);

  function OpenStadComponentChoicesGuideForm(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentChoicesGuideForm);

    _this = _super.call(this, props);

    var self = _assertThisInitialized(_this);

    self.id = props.id || "osc-choices-guide-".concat(parseInt(1000000 * Math.random()));
    self.defaultConfig = {
      siteId: null,
      loginUrl: null,
      noOfQuestionsToShow: 1,
      api: {
        url: null
      }
    };
    self.config = merge__WEBPACK_IMPORTED_MODULE_0___default.a.recursive(self.defaultConfig, self.config, props.config || {});
    self.state = {
      choicesGuideId: self.props.data.choicesGuideId,
      currentTarget: {},
      busy: false
    };
    self.onFinished = self.props.onFinished;
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
          }, /*#__PURE__*/React.createElement("h3", null, "Titel"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"].InputWithCounter, {
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
          }), /*#__PURE__*/React.createElement("h3", null, "Beschrijving"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"].InputWithCounter, {
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
          }), /*#__PURE__*/React.createElement("h3", null, "Afbeeldingen"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"].Textarea, {
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
          formfieldsHTML = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Titel"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"].InputWithCounter, {
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
          }), /*#__PURE__*/React.createElement("h3", null, "Beschrijving"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"].InputWithCounter, {
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
          }), /*#__PURE__*/React.createElement("h3", null, "Afbeeldingen"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"].Textarea, {
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
          }), /*#__PURE__*/React.createElement("h3", null, "Antwoorden"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"].Text, {
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
          }), /*#__PURE__*/React.createElement("h3", null, "Volgorde nummer"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"].Text, {
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
          }, /*#__PURE__*/React.createElement("h3", null, "Titel"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"].InputWithCounter, {
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
          }), /*#__PURE__*/React.createElement("h3", null, "Beschrijving"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"].InputWithCounter, {
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
          }), /*#__PURE__*/React.createElement("h3", null, "Afbeeldingen"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"].Textarea, {
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
          }, "3")), /*#__PURE__*/React.createElement("h3", null, "Volgorde nummer"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"].Text, {
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
          }, /*#__PURE__*/React.createElement("h3", null, "Titel"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"].InputWithCounter, {
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
          }), /*#__PURE__*/React.createElement("h3", null, "Beschrijving"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"].InputWithCounter, {
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
          }), /*#__PURE__*/React.createElement("h3", null, "Afbeeldingen"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"].Textarea, {
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
          }), /*#__PURE__*/React.createElement("h3", null, "Label minimale waarde"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"].InputWithCounter, {
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
          }), /*#__PURE__*/React.createElement("h3", null, "Label maximale waarde"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"].InputWithCounter, {
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
          }, "multiple choice - radio")), /*#__PURE__*/React.createElement("h3", null, "Waarden"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"].Textarea, {
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
          }), /*#__PURE__*/React.createElement("h3", null, "Volgorde nummer"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"].Text, {
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
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]);



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




'use strict';

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



'use strict';

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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
    }

    self.config = self.config || props.config;

    if (self.config) {
      try {
        self.config = JSON.parse(self.config);
      } catch (err) {}
    }

    self.divId = self.divId || self.config && self.config.divId || props.id || "openstad-component-".concat(parseInt(100000000 * Math.random()));
    window[self.divId] = _assertThisInitialized(_this);
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
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



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
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
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

var OpenStadComponentDefaultInput = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentDefaultInput, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentDefaultInput);

  function OpenStadComponentDefaultInput(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentDefaultInput);

    _this = _super.call(this, props);

    var self = _assertThisInitialized(_this);

    self.defaultConfig = {
      choices: [],
      name: '',
      placeholder: '',
      disabled: false,
      required: false
    };
    self.config = merge__WEBPACK_IMPORTED_MODULE_0___default.a.recursive(self.defaultConfig, self.config, props.config || {});
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
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"]);



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
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _hidden_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hidden.jsx */ "./src/forms/component/hidden.jsx");
/* harmony import */ var _image_upload_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image-upload.jsx */ "./src/forms/component/image-upload.jsx");
/* harmony import */ var _input_with_counter_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input-with-counter.jsx */ "./src/forms/component/input-with-counter.jsx");
/* harmony import */ var _radios_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./radios.jsx */ "./src/forms/component/radios.jsx");
/* harmony import */ var _postcode_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./postcode.jsx */ "./src/forms/component/postcode.jsx");
/* harmony import */ var _select_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./select.jsx */ "./src/forms/component/select.jsx");
/* harmony import */ var _textinput_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./textinput.jsx */ "./src/forms/component/textinput.jsx");
/* harmony import */ var _textarea_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./textarea.jsx */ "./src/forms/component/textarea.jsx");
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











var OpenStadComponentFormField = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentFormField, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentFormField);

  function OpenStadComponentFormField(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentFormField);

    _this = _super.call(this, props);

    var self = _assertThisInitialized(_this);

    self.defaultConfig = {
      inputType: null,
      validateAction: null,
      changeAction: null,
      required: false,
      title: null,
      description: null,
      choices: []
    };
    self.config = merge__WEBPACK_IMPORTED_MODULE_0___default.a.recursive(self.defaultConfig, self.config, props.config || {});
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
          fieldHTML = /*#__PURE__*/React.createElement(_hidden_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
          fieldHTML = /*#__PURE__*/React.createElement(_input_with_counter_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
          fieldHTML = /*#__PURE__*/React.createElement(_image_upload_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
          fieldHTML = /*#__PURE__*/React.createElement(_input_with_counter_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
          fieldHTML = /*#__PURE__*/React.createElement(_postcode_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
            config: self.config,
            onChange: self.handleOnChange,
            ref: function ref(el) {
              return self.input = el;
            }
          });
          break;

        case 'radios':
          fieldHTML = /*#__PURE__*/React.createElement(_radios_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
          fieldHTML = /*#__PURE__*/React.createElement(_select_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
            config: self.config,
            value: this.props.value || this.config.value,
            onChange: self.handleOnChange,
            ref: function ref(el) {
              return self.input = el;
            }
          });
          break;

        case 'text':
          fieldHTML = /*#__PURE__*/React.createElement(_textinput_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
            config: self.config,
            value: this.props.value || this.config.value,
            onChange: self.handleOnChange,
            ref: function ref(el) {
              return self.input = el;
            }
          });
          break;

        case 'textarea':
          fieldHTML = /*#__PURE__*/React.createElement(_textarea_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
            config: self.config,
            value: this.props.value || this.config.value,
            onChange: self.handleOnChange,
            ref: function ref(el) {
              return self.input = el;
            }
          });
          break;

        case 'textarea-with-counter':
          fieldHTML = /*#__PURE__*/React.createElement(_input_with_counter_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"]);



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
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _libs_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libs/index.jsx */ "./src/libs/index.jsx");
/* harmony import */ var _form_field_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-field.jsx */ "./src/forms/component/form-field.jsx");
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





var OpenStadComponentForm = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentForm, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentForm);

  function OpenStadComponentForm(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentForm);

    _this = _super.call(this, props);

    var self = _assertThisInitialized(_this);

    self.defaultConfig = {
      // validateAction: null,
      // submitAction: null,
      title: null,
      intro: null,
      fields: []
    };
    self.config = merge__WEBPACK_IMPORTED_MODULE_0___default.a.recursive(self.defaultConfig, self.config, props.config || {});
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
          return /*#__PURE__*/React.createElement(_form_field_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], _defineProperty({
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
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"]);



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
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _default_input_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default-input.jsx */ "./src/forms/component/default-input.jsx");
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
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
}(_default_input_jsx__WEBPACK_IMPORTED_MODULE_3__["default"]);



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
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
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

var OpenStadComponentHTMLArea = /*#__PURE__*/function (_React$Component) {
  _inherits(OpenStadComponentHTMLArea, _React$Component);

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

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-html-editor"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-html-editor-buttons"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-html-editor-button osc-html-editor-button-bold",
        onMouseDown: function onMouseDown(e) {
          return _this2.executeAction(e, 'bold');
        }
      }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-html-editor-button osc-html-editor-button-italic",
        onMouseDown: function onMouseDown(e) {
          return _this2.executeAction(e, 'italic');
        }
      }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-html-editor-button osc-html-editor-button-insertunorderedlist",
        onMouseDown: function onMouseDown(e) {
          return _this2.executeAction(e, 'insertunorderedlist');
        }
      }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-html-editor-button osc-html-editor-button-createlink",
        onMouseDown: function onMouseDown(e) {
          return _this2.executeAction(e, 'createlink', prompt('Lank naar', 'http://'));
        }
      }, "\xA0")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
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
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



function EditButton(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
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
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _default_input_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default-input.jsx */ "./src/forms/component/default-input.jsx");
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



var OpenStadComponentSelect = /*#__PURE__*/function (_OpenStadComponentDef) {
  _inherits(OpenStadComponentSelect, _OpenStadComponentDef);

  var _super = _createSuper(OpenStadComponentSelect);

  function OpenStadComponentSelect(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentSelect);

    _this = _super.call(this, props);
    var defaultConfig = {
      allowMultiple: false,
      imageserver: {
        process: '',
        fetch: ''
      }
    };
    _this.config = merge__WEBPACK_IMPORTED_MODULE_0___default.a.recursive(defaultConfig, _this.props.config, _this.config || {});
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
        errorHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-form-error"
        }, "Je hebt nog geen afbeelding geupload");
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-image-upload-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "file",
        className: "imageUploader-gebiedstool filepond-gebiedstool"
      }), errorHTML);
    }
  }]);

  return OpenStadComponentSelect;
}(_default_input_jsx__WEBPACK_IMPORTED_MODULE_3__["default"]);



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
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _htmlarea_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./htmlarea.jsx */ "./src/forms/component/htmlarea.jsx");
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



 //import CKEditor from '@ckeditor/ckeditor5-react';
//import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


'use strict';

var FormfieldInputWithCounter = /*#__PURE__*/function (_React$Component) {
  _inherits(FormfieldInputWithCounter, _React$Component);

  var _super = _createSuper(FormfieldInputWithCounter);

  function FormfieldInputWithCounter(props) {
    var _this;

    _classCallCheck(this, FormfieldInputWithCounter);

    _this = _super.call(this, props);

    var self = _assertThisInitialized(_this);

    self.id = props.id || 'osc-formfields-plaintext-with-counter-' + parseInt(1000000 * Math.random());
    self.defaultConfig = {
      name: 'tekst',
      inputType: 'input',
      minLength: 5,
      maxLength: 10,
      placeholder: ''
    };
    self.config = merge__WEBPACK_IMPORTED_MODULE_0___default.a.recursive(self.defaultConfig, self.config, props.config || {});
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
          counter = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "osc-form-counter osc-form-error"
          }, "Nog minimaal ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            className: ""
          }, self.config.minLength - self.state.valueLength), " tekens");
        } else {
          var error = self.state.valueLength > self.config.maxLength ? 'osc-form-error' : '';
          counter = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: 'osc-form-counter ' + error
          }, "Je hebt nog ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            className: ""
          }, self.config.maxLength - self.state.valueLength), " tekens over.");
        }
      }

      if (self.state.showWarning && self.state.warning) {
        warning = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-form-warning",
          ref: function ref(el) {
            return _this2['form-warning'] = el;
          }
        }, self.state.warning);
      }

      var inputHTML = null;

      switch (self.config.inputType) {
        case 'htmlarea':
          inputHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_htmlarea_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
          inputHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
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
          inputHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
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

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: self.id,
        ref: function ref(el) {
          return self.instance = el;
        },
        className: "osc-input-with-counter"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-form-feedback"
      }, inputHTML, counter, warning));
    }
  }]);

  return FormfieldInputWithCounter;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



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
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _default_input_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default-input.jsx */ "./src/forms/component/default-input.jsx");
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
        errorHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-form-error"
        }, self.state.error);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-textinput"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
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
}(_default_input_jsx__WEBPACK_IMPORTED_MODULE_3__["default"]);



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
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _default_input_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default-input.jsx */ "./src/forms/component/default-input.jsx");
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
        errorHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-form-error"
        }, "Je hebt nog geen keuze gemaakt");
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-radios"
      }, self.config.choices.map(function (choice) {
        if (choice.dangerousDescription) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "osc-radio-container",
            key: choice.value
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "osc-radio-input".concat(self.state.value == choice.value ? ' osc-radio-input-checked' : '')
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "radio",
            name: self.divId,
            value: choice.value,
            onChange: function onChange(e) {
              return self.handleOnChange({
                value: choice.value
              });
            }
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "osc-radio-text",
            dangerouslySetInnerHTML: {
              __html: choice.dangerousDescription
            }
          }));
        } else {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "osc-radio-container",
            key: choice.value
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "osc-radio-input".concat(self.state.value == choice.value ? ' osc-radio-input-checked' : '')
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "radio",
            name: self.divId,
            value: choice.value,
            onChange: function onChange(e) {
              return self.handleOnChange({
                value: choice.value
              });
            }
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "osc-radio-text"
          }, choice.dangerousDescription ? null : choice.description || choice.title || choice.value));
        }
      }), errorHTML);
    }
  }]);

  return OpenStadComponentRadios;
}(_default_input_jsx__WEBPACK_IMPORTED_MODULE_3__["default"]);



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
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _default_input_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default-input.jsx */ "./src/forms/component/default-input.jsx");
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
        errorHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-form-error"
        }, "Je hebt nog geen keuze gemaakt");
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-select"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
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
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: choice.value || '',
          key: choice.value
        }, choice.description || choice.title || choice.value);
      })), errorHTML);
    }
  }]);

  return OpenStadComponentSelect;
}(_default_input_jsx__WEBPACK_IMPORTED_MODULE_3__["default"]);



/***/ }),

/***/ "./src/forms/component/slider.jsx":
/*!****************************************!*\
  !*** ./src/forms/component/slider.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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



var Slider = /*#__PURE__*/function (_React$Component) {
  _inherits(Slider, _React$Component);

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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(self.props.className, " osc-slider")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "osc-slider-track-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "osc-slider-track"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "osc-slider-track-progress-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "osc-slider-track-progress",
        style: {
          transform: 'scaleX(' + self.calcProgress(min, max, value) + ')'
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "osc-slider-track-dot-end osc-slider-track-dot-left"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "osc-slider-track-dot-start osc-slider-track-dot-center"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "osc-slider-track-dot-end osc-slider-track-dot-right"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
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
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

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
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _default_input_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default-input.jsx */ "./src/forms/component/default-input.jsx");
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
        errorHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-form-error"
        }, "Je hebt nog niets ingevuld");
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-textarea"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
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
}(_default_input_jsx__WEBPACK_IMPORTED_MODULE_3__["default"]);



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
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _default_input_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default-input.jsx */ "./src/forms/component/default-input.jsx");
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
        errorHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-form-error"
        }, "Je hebt nog niets ingevuld");
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-textinput"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
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
}(_default_input_jsx__WEBPACK_IMPORTED_MODULE_3__["default"]);



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
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vote_button_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vote-button.jsx */ "./src/idea-details/component/vote-button.jsx");
/* harmony import */ var _libs_index_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../libs/index.jsx */ "./src/libs/index.jsx");
/* harmony import */ var _poll_index_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../poll/index.jsx */ "./src/poll/index.jsx");
/* harmony import */ var _reactions_index_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reactions/index.jsx */ "./src/reactions/index.jsx");
/* harmony import */ var _idea_image_index_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../idea-image/index.jsx */ "./src/idea-image/index.jsx");
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

var IdeasDetails = /*#__PURE__*/function (_React$Component) {
  _inherits(IdeasDetails, _React$Component);

  var _super = _createSuper(IdeasDetails);

  function IdeasDetails(props) {
    var _this;

    _classCallCheck(this, IdeasDetails);

    _this = _super.call(this, props); // config

    var defaultConfig = {
      siteId: null,
      ideaId: null,
      user: {},
      api: {
        url: null,
        headers: null,
        isUserLoggedIn: false
      },
      argument: {
        isActive: true
      },
      poll: {
        canAddPolls: false
      },
      showVoteButtons: true,
      showLabels: false,
      labels: {},
      types: null,
      allowMultipleImages: false
    };
    _this.config = merge__WEBPACK_IMPORTED_MODULE_0___default.a.recursive(defaultConfig, _this.config, _this.props.config || {});
    if (!_this.config.shareChannelsSelection) _this.config.shareChannelsSelection = ["facebook", "twitter", "mail", "whatsapp"];
    if (typeof _this.config.metaDataTemplate == 'undefined') _this.config.metaDataTemplate = '<span class="ocs-gray-text">Door </span>{username} <span class="ocs-gray-text"> op </span>{createDate} <span class="ocs-gray-text">&nbsp;&nbsp;|&nbsp;&nbsp;</span> <span class="ocs-gray-text">Thema: </span>{theme}';
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
    key: "dispatchEditIdeaClick",
    value: function dispatchEditIdeaClick(e) {
      e.stopPropagation();

      if (this.config.editIdeaLink) {
        document.location.href = this.config.editIdeaLink;
      } else {
        var event = new window.CustomEvent('osc-edit-idea-click', {
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
      var headers = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"].api.getHeaders(self.config);
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
          if (_libs_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"].localStorage.get('osc-reactions-login-pending')) {
            window.location.hash = "#reactions";
            _libs_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"].localStorage.set('osc-reactions-login-pending', false);
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
      var headers = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"].api.getHeaders(self.config);
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

      if (self.config.showLabels) {
        // TODO: idea.extraData.type is tmp voor Gerard Dou
        var typeId = idea.typeId || idea.extraData.type;
        var typeDef = self.config.types && self.config.types.find(function (def) {
          return def.id == typeId || def.value == typeId;
        });

        if (typeDef) {
          var labelText = typeDef.label;
          var backgroundColor = typeDef.backgroundColor;
          var textColor = typeDef.textColor;
          labelHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "ocs-idea-label",
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
          pollHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            id: "poll",
            className: "osc-poll-header"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, self.config.poll.title || 'Poll')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_poll_index_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
            config: _objectSpread(_objectSpread(_objectSpread({}, self.config), self.config.poll), {}, {
              ideaId: self.state.ideaId
            }),
            poll: idea.poll
          }));
        } else {
          if (idea.can && idea.can.edit) {
            addPollButtonHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
              className: "osc-editbuttons-container"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
              className: "osc-idea-details-editbutton osc-edit",
              onClick: function onClick(event) {
                return self.dispatchAddPollClick(event);
              }
            }, "Add poll"));
          }
        }
      }

      var voteButtonsHTML = null;

      if (self.config.showVoteButtons) {
        voteButtonsHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-details-vote-buttons-container"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Likes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vote_button_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
        editButtonsHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-editbuttons-container"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          className: "osc-idea-details-editbutton osc-edit",
          onClick: function onClick(event) {
            return self.dispatchEditIdeaClick(event);
          }
        }, "Bewerk idee"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          className: "osc-idea-details-editbutton osc-delete",
          onClick: function onClick(event) {
            if (confirm('Weet je het zeker')) self.deleteIdea(event);
          }
        }, "Verwijder idee"));
      }

      var modBreakHTML = null;

      if (idea && idea.modBreak) {
        modBreakHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-modbreak"
        }, idea.modBreakDateHumanized, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), idea.modBreak);
      }

      var reactionsCountHTML = null;

      if (self.config.argument.isActive) {
        reactionsCountHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Reacties"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "#reactions",
          className: "osc-no-of-reactions"
        }, idea.argCount || 0, " reacties"));
      }

      var reactionsHTML = null;

      if (self.config.argument.isActive) {
        reactionsHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          id: "reactions",
          className: "osc-reactions-header"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, self.config.argument.title || 'Reacties')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_reactions_index_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
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

      if (self.config.shareChannelsSelection.length) {
        var facebookButtonHTML = self.config.shareChannelsSelection.includes('facebook') ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          className: "osc-share-facebook",
          target: "_blank",
          href: 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(document.location.href)
        }, "Facebook")) : null;
        var twitterButtonHTML = self.config.shareChannelsSelection.includes('twitter') ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          className: "osc-share-twitter",
          target: "_blank",
          href: 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(document.location.href)
        }, "Twitter")) : null;
        var mailButtonHTML = self.config.shareChannelsSelection.includes('mail') ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          className: "osc-share-email",
          target: "_blank",
          href: 'mailto:?subject=' + encodeURIComponent(eval("idea.".concat(self.config.titleField))) + '&body=' + encodeURIComponent(document.location.href)
        }, "Email")) : null;
        var whatsappButtonHTML = self.config.shareChannelsSelection.includes('whatsapp') ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          className: "osc-share-whatsapp",
          target: "_blank",
          href: 'https://wa.me/?text=' + encodeURIComponent(document.location.href)
        }, "WhatsApp")) : null;
        shareButtonsHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-details-sharebuttons"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, facebookButtonHTML, twitterButtonHTML, mailButtonHTML, whatsappButtonHTML));
      }

      var authorHTML = idea.user.nickName || idea.user.fullName || idea.user.firstName + ' ' + idea.user.lastName;

      if (this.config.linkToUserPageUrl) {
        authorHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: this.config.linkToUserPageUrl + '/' + idea.user.id,
          className: "osc-author-link"
        }, authorHTML);
      }

      var metaDataHTML = self.config.metaDataTemplate;
      metaDataHTML = metaDataHTML.replace(/\{createDate\}/, idea.createDateHumanized);
      metaDataHTML = metaDataHTML.replace(/\{theme\}/, idea.extraData.theme);
      metaDataHTML = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"].reactTemplate({
        html: metaDataHTML,
        username: authorHTML
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: self.id,
        className: self.props.className || 'osc-info-block-idea-details',
        ref: function ref(el) {
          return self.instance = el;
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-spacer"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-idea-details-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-idea-details"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, eval("idea.".concat(self.config.titleField))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-details-image-and-stats"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-idea-image-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_idea_image_index_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
        config: {
          allowMultipleImages: self.config.allowMultipleImages
        },
        idea: idea
      })), labelHTML, shareButtonsHTML, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-details-stats"
      }, voteButtonsHTML, reactionsCountHTML, editButtonsHTML)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: ""
      }, metaDataHTML), modBreakHTML, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "osc-details-summary"
      }, idea.summary), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "osc-details-description",
        dangerouslySetInnerHTML: {
          __html: idea.description
        }
      }), addPollButtonHTML), pollHTML, reactionsHTML, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-bottom-spacer"
      })));
    }
  }]);

  return IdeasDetails;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



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
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _libs_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libs/index.jsx */ "./src/libs/index.jsx");
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

var VoteButton = /*#__PURE__*/function (_React$Component) {
  _inherits(VoteButton, _React$Component);

  var _super = _createSuper(VoteButton);

  function VoteButton(props) {
    var _this;

    _classCallCheck(this, VoteButton);

    _this = _super.call(this, props);
    var defaultConfig = {
      name: 'likebutton',
      backgroundColor: '#164995',
      color: '#fff',
      text: 'like',
      opinion: 'yes'
    };
    _this.config = merge__WEBPACK_IMPORTED_MODULE_0___default.a.recursive(defaultConfig, _this.config, _this.props.config || {});
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
      var votePending = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].localStorage.get('osc-ideas-on-map-vote-pending');

      if (votePending) {
        this.doVote();
        _libs_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].localStorage.remove('osc-ideas-on-map-vote-pending');
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
      var headers = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].api.getHeaders(self.config); // if (!self.config.api.isUserLoggedIn) url += '?useOauth=anonymous'

      if (!(self.config.user && self.config.user.role)) {
        _libs_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].localStorage.set('osc-ideas-on-map-vote-pending', true);
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: self.id,
        className: self.props.className || 'osc-vote-button osc-number-button',
        ref: function ref(el) {
          return self.instance = el;
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-number-plates",
        style: {
          color: this.config.color,
          backgroundColor: this.config.backgroundColor
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "".concat(this.config.name, "-number-plate-000"),
        className: "osc-number-plate"
      }, value000), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "".concat(this.config.name, "-number-plate-00"),
        className: "osc-number-plate"
      }, value00), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "".concat(this.config.name, "-number-plate-0"),
        className: "osc-number-plate"
      }, value0)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-number-button-text ".concat(this.config.name, "-name ").concat(this.props.idea.userVote ? ' ocs-user-has-voted' : '', " ").concat(this.state.busy ? ' ocs-busy' : ''),
        style: {
          color: this.config.color,
          backgroundColor: this.config.backgroundColor
        },
        onClick: function onClick(e) {
          return self.doVote(e);
        }
      }, self.config.text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-clear-both"
      }));
    }
  }]);

  return VoteButton;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



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

/***/ "./src/ideas-on-map/component/filterbar.jsx":
/*!**************************************************!*\
  !*** ./src/ideas-on-map/component/filterbar.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filterbar; });
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _search_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.jsx */ "./src/ideas-on-map/component/search.jsx");
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

var Filterbar = /*#__PURE__*/function (_React$Component) {
  _inherits(Filterbar, _React$Component);

  var _super = _createSuper(Filterbar);

  function Filterbar(props) {
    var _this;

    _classCallCheck(this, Filterbar);

    _this = _super.call(this, props);
    var defaultConfig = {
      types: props.config && props.config.types || [],
      typesFilterLabel: 'Alle thema\'s',
      areas: props.config && props.config.areas || [],
      search: {}
    };
    _this.config = merge__WEBPACK_IMPORTED_MODULE_0___default.a.recursive(_this.defaultConfig, _this.config, props.config || {});
    _this.config.searchIn = _typeof(props.config.search.searchIn) == 'object' && props.config.search.searchIn || ['ideas', 'addresses'];
    _this.state = {
      selectedType: undefined,
      types: _this.config.types,
      typesFilterLabel: _this.config.typesFilterLabel,
      selectedArea: undefined,
      areas: _this.config.areas,
      mobileActiveSelector: null
    };
    return _this;
  }

  _createClass(Filterbar, [{
    key: "componentDidMount",
    value: function componentDidMount(prevProps, prevState) {}
  }, {
    key: "handleTypeChange",
    value: function handleTypeChange(value) {
      this.setState({
        selectedType: value
      });
      this.hideMobileActiveSelector(); // dispatch an event

      var event = new window.CustomEvent('typeFilterUpdate', {
        detail: {
          value: value
        }
      });
      document.dispatchEvent(event);
    }
  }, {
    key: "setAreaValue",
    value: function setAreaValue(value) {
      this.setState({
        selectedArea: value
      });
    }
  }, {
    key: "handleAreaChange",
    value: function handleAreaChange(value) {
      this.setState({
        selectedArea: value
      });
      this.hideMobileActiveSelector(); // dispatch an event

      var event = new window.CustomEvent('areaFilterUpdate', {
        detail: {
          value: this.state.areas.find(function (area) {
            return value == area.value;
          })
        }
      });
      document.dispatchEvent(event);
    }
  }, {
    key: "resetTypeAndArea",
    value: function resetTypeAndArea() {
      this.handleTypeChange(0);
      this.handleAreaChange(0);
      this.hideMobileActiveSelector();
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
    key: "render",
    value: function render() {
      var self = this;
      var areasHTML = null;
      var areasButtonHTML = null; // TODO: niet state maar config

      if (self.state.areas && self.state.areas.length) {
        areasButtonHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-area-selector-button",
          onClick: function onClick() {
            return self.toggleMobileActiveSelector('area');
          }
        });
        areasHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-area-selector-container".concat(self.state.mobileActiveSelector == 'area' ? ' osc-is-active' : '')
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
          value: self.state.selectedArea,
          onChange: function onChange() {
            return self.handleAreaChange(self.areaSelector.value);
          },
          className: "osc-default-select osc-margin-right osc-area-selector",
          ref: function ref(el) {
            return self.areaSelector = el;
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: "0"
        }, "Alle gebieden"), ";", self.state.areas.map(function (area, i) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            key: 'area-option-' + i
          }, area.name);
        })));
      }

      var searchHTML = null;
      console.log(self.config);

      if (self.config.searchIn && self.config.searchIn.length && self.config.doSearchFunction) {
        searchHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-search-container"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-search-button",
          onClick: function onClick() {
            return self.toggleMobileActiveSelector('search');
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_search_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
          config: {
            searchIn: this.config.search.searchIn,
            placeholder: this.config.search.placeholder,
            doSearchFunction: this.config.doSearchFunction,
            ideaName: this.config.ideaName
          },
          className: "osc-search".concat(self.state.mobileActiveSelector == 'search' ? ' osc-is-active' : '')
        }));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: self.id,
        className: self.props.className || 'osc-filterbar',
        ref: function ref(el) {
          return self.instance = el;
        }
      }, searchHTML, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-selectors-container osc-align-right-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-type-selector-button".concat(self.state.selectedType && self.state.selectedType != '0' ? ' osc-active' : ''),
        onClick: function onClick() {
          return self.toggleMobileActiveSelector('type');
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-type-selector-container".concat(self.state.mobileActiveSelector == 'type' ? ' osc-is-active' : '')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
        value: self.state.selectedType,
        onChange: function onChange() {
          return self.handleTypeChange(self.typeSelector.value);
        },
        className: "osc-default-select osc-margin-right osc-type-selector",
        ref: function ref(el) {
          return self.typeSelector = el;
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "0"
      }, self.state.typesFilterLabel), ";", self.state.types.map(function (type, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          key: 'type-option-' + i,
          value: type.id || type.name
        }, type.name);
      }))), areasButtonHTML, areasHTML, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        value: "reset",
        onClick: function onClick() {
          return self.resetTypeAndArea();
        },
        className: "osc-button osc-reset-button",
        ref: function ref(el) {
          return self.resetButton = el;
        }
      }, "Alles tonen")));
    }
  }]);

  return Filterbar;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



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
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _libs_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libs/index.jsx */ "./src/libs/index.jsx");
/* harmony import */ var _forms_index_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../forms/index.jsx */ "./src/forms/index.jsx");
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

var IdeasForm = /*#__PURE__*/function (_React$Component) {
  _inherits(IdeasForm, _React$Component);

  var _super = _createSuper(IdeasForm);

  function IdeasForm(props) {
    var _this;

    _classCallCheck(this, IdeasForm);

    _this = _super.call(this, props);

    var self = _assertThisInitialized(_this);

    self.defaultConfig = {
      user: {},
      ideaId: null,
      titleMinLength: 10,
      titleMaxLength: 20,
      summaryMinLength: 20,
      summaryMaxLength: 140,
      descriptionMinLength: 140,
      descriptionMaxLength: 5000,
      fields: []
    };
    self.config = merge__WEBPACK_IMPORTED_MODULE_0___default.a.recursive(self.defaultConfig, self.config, props.config || {});
    self.config.fields = _toConsumableArray(self.config.fields);
    var fields = self.config.fields || [];
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
      titleField.minLength = self.config.titleMinLength;
      titleField.maxLength = self.config.titleMaxLength;
    }

    var summaryField = fields.find(function (field) {
      return field.name == 'summary';
    });

    if (summaryField) {
      summaryField.minLength = self.config.summaryMinLength;
      summaryField.maxLength = self.config.summaryMaxLength;
    }

    var descriptionField = fields.find(function (field) {
      return field.name == 'description';
    });

    if (descriptionField) {
      descriptionField.minLength = self.config.descriptionMinLength;
      descriptionField.maxLength = self.config.descriptionMaxLength;
    }

    var imageField = fields.find(function (field) {
      return field.inputType == 'image-upload';
    }); // TODO: multiple images?

    if (imageField) {
      imageField.imageserver = self.config.imageserver;
    }

    if (_libs_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].user.hasRole(self.config.user, 'editor')) {
      // typeId
      if (self.config.types && self.config.typeField == 'typeId') {
        var choices = [];
        self.config.types.forEach(function (type) {
          var typeDef = type;

          if (!typeDef.auth || typeDef.auth.createableBy && _libs_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].user.hasRole(self.config.user, typeDef.auth.createableBy)) {
            choices.push({
              title: typeDef.name,
              value: typeDef.id || typeDef.value
            });
          }
        });
        self.config.fields.push({
          name: "typeId",
          title: "Type inzending",
          value: self.props.idea.typeId,
          inputType: "multiple-choice",
          choices: choices
        });
        state.formfields.typeId = self.props.idea.typeId;
      } // moderator


      self.config.fields.push({
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
        self.config.fields.push({
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
    value: function componentDidMount(prevProps, prevState) {} // todo: als hanlefieldchange met meerder waarden in een { key: value } formaat gaat werken dan kan deze weg

  }, {
    key: "handleLocationChange",
    value: function handleLocationChange(_ref) {
      var location = _ref.location,
          address = _ref.address;

      var state = _objectSpread({}, this.state);

      state.formfields['location'] = {
        coordinates: [location.lat, location.lng]
      };
      state.formfields['address'] = address;
      this.setState(state);
      this.dispatchUpdateEditIdea(state.formfields);
    }
  }, {
    key: "dispatchUpdateEditIdea",
    value: function dispatchUpdateEditIdea(idea) {
      var event = new window.CustomEvent('updateEditIdea', {
        detail: {
          idea: idea
        }
      });
      document.dispatchEvent(event);
    }
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
          showErrors: true
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
        var headers = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].api.getHeaders(self.config);
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
            var event = new window.CustomEvent('newIdeaStored', {
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

        formErrorsWarningHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-form-errors-warning"
        }, text);
      }

      var formHTML = null;
      formHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"].Form, {
        config: self.config,
        values: {
          typeId: self.state.formfields.typeId
          /* typeId is hidden */

        },
        ref: function ref(el) {
          self.form = el;
        }
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: self.id,
        className: self.props.className || 'osc-info-block-idea-form',
        ref: function ref(el) {
          return self.instance = el;
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-spacer"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        className: "osc-form"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Nieuw punt toevoegen"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Naam"), self.state.formfields.user && self.state.formfields.user.fullName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Een locatie vlakbij"), self.state.formfields.address || 'Geen adres gevonden', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-form-warning",
        style: {
          display: 'none'
        },
        ref: function ref(el) {
          return _this3['form-warning-location'] = el;
        }
      }, "Geen locatie geselecteerd")), formHTML, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), formErrorsWarningHTML, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "osc-button osc-button-blue".concat(self.state.isBusy ? ' osc-disabled' : ''),
        onClick: function onClick() {
          if (!self.state.isBusy) self.submitIdea();
        },
        ref: function ref(el) {
          return self.submitButton = el;
        }
      }, "Versturen"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null)));
    }
  }]);

  return IdeasForm;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ }),

/***/ "./src/ideas-on-map/component/ideas-list.jsx":
/*!***************************************************!*\
  !*** ./src/ideas-on-map/component/ideas-list.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IdeasList; });
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _idea_image_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../idea-image/index.jsx */ "./src/idea-image/index.jsx");
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

var IdeasList = /*#__PURE__*/function (_React$Component) {
  _inherits(IdeasList, _React$Component);

  var _super = _createSuper(IdeasList);

  function IdeasList(props) {
    var _this;

    _classCallCheck(this, IdeasList);

    _this = _super.call(this, props); // config

    _this.defaultConfig = {
      types: [],
      titleField: 'title',
      summaryField: 'summary',
      idea: {
        showVoteButtons: true,
        sort: {
          sortOptions: [{
            value: 'createdtime,desc',
            label: 'Nieuwste eerst'
          }, {
            value: 'createdtime,asc',
            label: 'Oudste eerst'
          }],
          showSortButton: true,
          defaultSortOrder: 'createdtime,desc'
        }
      }
    };
    _this.config = merge__WEBPACK_IMPORTED_MODULE_0___default.a.recursive(_this.defaultConfig, props.config || {});
    _this.config.onIdeaClick = _this.config.onIdeaClick || _this.onIdeaClick.bind(_assertThisInitialized(_this));
    _this.state = {
      currentSortOrder: _this.config.idea.sort.defaultSortOrder,
      ideas: _this.props.ideas || [],
      currentMouseOverIdea: null,
      hideSortButton: !_this.config.idea.sort.hideSortButton
    };
    return _this;
  }

  _createClass(IdeasList, [{
    key: "componentDidMount",
    value: function componentDidMount(prevProps, prevState) {}
  }, {
    key: "updateIdeas",
    value: function updateIdeas(_ref) {
      var _ref$ideas = _ref.ideas,
          ideas = _ref$ideas === void 0 ? this.state.ideas : _ref$ideas,
          _ref$sortOrder = _ref.sortOrder,
          sortOrder = _ref$sortOrder === void 0 ? this.state.currentSortOrder : _ref$sortOrder,
          hideSortButton = _ref.hideSortButton,
          _ref$center = _ref.center,
          center = _ref$center === void 0 ? {
        lat: 52.37104644463586,
        lng: 4.900402911007405
      } : _ref$center,
          maxLength = _ref.maxLength;
      var self = this;

      var state = _objectSpread({}, self.state);

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

      state.ideas = maxLength ? ideas.slice(0, maxLength) : ideas;
      state.hideSortButton = hideSortButton;
      self.setState(state);
    }
  }, {
    key: "setSortOrder",
    value: function setSortOrder(_ref2) {
      var sortOrder = _ref2.sortOrder;
      this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
        currentSortOrder: sortOrder
      }), function () {
        this.updateIdeas({
          sortOrder: sortOrder
        });
      });
    }
  }, {
    key: "onIdeaClick",
    value: function onIdeaClick(e) {// placeholder
    }
  }, {
    key: "dispatchMouseOverListItem",
    value: function dispatchMouseOverListItem(e, idea) {
      e.stopPropagation();
      var newMouseOverIdeaId = idea.id;

      if (!this.state.currentMouseOverIdea || newMouseOverIdeaId != this.state.currentMouseOverIdea.id) {
        this.setState({
          currentMouseOverIdea: idea.id
        });
        var event = new window.CustomEvent('mouseOverListItem', {
          detail: {
            idea: idea
          }
        });
        document.dispatchEvent(event);
      }
    }
  }, {
    key: "dispatchMouseOutListItem",
    value: function dispatchMouseOutListItem(e) {
      e.stopPropagation();

      if (this.state.currentMouseOverIdea) {
        this.setState({
          currentMouseOverIdea: null
        });
        var event = new window.CustomEvent('mouseOutListItem', {});
        document.dispatchEvent(event);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var self = this;
      var sortSelector = null;

      if (this.config.idea.sort.showSortButton && !this.state.hideSortButton) {
        sortSelector = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-sort osc-align-right-container osc-margin-right"
        }, "Sorteer op:\xA0\xA0\xA0\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
          value: self.state.currentSortOrder,
          onChange: function onChange() {
            return self.setSortOrder({
              sortOrder: self.sortSelector.value
            });
          },
          className: "osc-default-select",
          ref: function ref(el) {
            return self.sortSelector = el;
          }
        }, self.config.idea.sort.sortOptions.map(function (option, i) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: option.value,
            key: 'sort-option-' + i
          }, option.label);
        })));
      } else {
        sortSelector = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            height: 20
          }
        });
      }

      var titleHML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "osc-title"
      }, self.props.title, " (", self.state.ideas.length, ")");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: self.id,
        className: self.props.className || 'osc-info-block-ideas-list',
        ref: function ref(el) {
          return self.instance = el;
        }
      }, sortSelector, titleHML, self.state.ideas.map(function (idea, i) {
        if (!idea) {
          console.log('idea is undef', i, self.state.ideas);
        }

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


        var voteCountHTML = null;

        if (_this2.config.idea.showVoteButtons) {
          voteCountHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "osc-likes"
          }, idea.yes || 0);
        }

        var argcountHTML = null;

        if (_this2.config.argument.isActive && !_this2.config.argument.ignoreReactionsForIdeaIds.match(new RegExp("(?:^|\\D)".concat(idea.id, "(?:\\D|$)")))) {
          argcountHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "osc-reactions"
          }, idea.argCount || 0);
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-info-block-ideas-list-idea".concat(self.state.currentMouseOverIdea && self.state.currentMouseOverIdea != idea.id ? ' osc-opacity-65' : ''),
          onClick: function onClick(event) {
            return self.config.onIdeaClick(event, idea);
          },
          key: 'info-block-' + i,
          onMouseOver: function onMouseOver(e) {
            return self.dispatchMouseOverListItem(e, idea);
          },
          onMouseOut: function onMouseOut(e) {
            return self.dispatchMouseOutListItem(e);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-content"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-idea-image-container"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_idea_image_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
          config: {},
          idea: idea,
          key: 'image-' + idea.id
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
          className: "osc-title"
        }, eval("idea.".concat(self.config.titleField))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-summary"
        }, eval("idea.".concat(self.config.summaryField))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-stats"
        }, voteCountHTML, argcountHTML, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-type"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-type-content",
          dangerouslySetInnerHTML: {
            __html: typeDef.listicon.html
          }
        })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-clear-both"
        }));
      }));
    }
  }]);

  return IdeasList;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ }),

/***/ "./src/ideas-on-map/component/ideas-on-map.jsx":
/*!*****************************************************!*\
  !*** ./src/ideas-on-map/component/ideas-on-map.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(setImmediate) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentIdeasOnMap; });
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _filterbar_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filterbar.jsx */ "./src/ideas-on-map/component/filterbar.jsx");
/* harmony import */ var _info_block_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./info-block.jsx */ "./src/ideas-on-map/component/info-block.jsx");
/* harmony import */ var _idea_form_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./idea-form.jsx */ "./src/ideas-on-map/component/idea-form.jsx");
/* harmony import */ var _map_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map.jsx */ "./src/ideas-on-map/component/map.jsx");
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _libs_index_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../libs/index.jsx */ "./src/libs/index.jsx");
/* harmony import */ var _idea_details_index_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../idea-details/index.jsx */ "./src/idea-details/index.jsx");
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










 // TODO: clean up; ik gebruikte eerst setNewIdea en setSelected, maar nu onNewIdeaClick en onSelectedIdeaClick; trek dat gelijk

'use strict';

var OpenStadComponentIdeasOnMap = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentIdeasOnMap, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentIdeasOnMap);

  function OpenStadComponentIdeasOnMap(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentIdeasOnMap);

    _this = _super.call(this, props);

    var self = _assertThisInitialized(_this); // config


    self.defaultConfig = {
      displayType: 'complete',
      displayWidth: null,
      displayHeight: null,
      canSelectLocation: true,
      types: [],
      typeField: null,
      // dit is opgezet maar wordt niet genbruikt en is daarom niet afgemaakt; latere wijzigingen maken dat dit niet meer werkt
      // currentPolygon: undefined,
      // areas: [
      //  { name: "Heel West",
      //    value: "Heel West",
      //    polygon: [{ "lng": 4.8353454, "lat": 52.3731265 }, { "lng": 4.8422025, "lat": 52.3721002 }, { "lng": 4.8421761, "lat": 52.3695836 }, { "lng": 4.8455807, "lat": 52.3696369 }, { "lng": 4.8476385, "lat": 52.369853 }, { "lng": 4.8477361, "lat": 52.3695885 }, { "lng": 4.8484176, "lat": 52.369697 }, { "lng": 4.8504835, "lat": 52.3653302 }, { "lng": 4.8504956, "lat": 52.3643692 }, { "lng": 4.8501587, "lat": 52.3638376 }, { "lng": 4.8494487, "lat": 52.3633001 }, { "lng": 4.8495059, "lat": 52.3610989 }, { "lng": 4.8489152, "lat": 52.3608149 }, { "lng": 4.8487824, "lat": 52.3578658 }, { "lng": 4.8504012, "lat": 52.3578553 }, { "lng": 4.8518982, "lat": 52.357844 }, { "lng": 4.8538275, "lat": 52.3581295 }, { "lng": 4.854723, "lat": 52.3578629 }, { "lng": 4.854635, "lat": 52.3577532 }, { "lng": 4.85436, "lat": 52.3572975 }, { "lng": 4.8540881, "lat": 52.3564026 }, { "lng": 4.8547969, "lat": 52.3562758 }, { "lng": 4.8698903, "lat": 52.3601067 }, { "lng": 4.8699397, "lat": 52.3600231 }, { "lng": 4.8714122, "lat": 52.3603737 }, { "lng": 4.8712647, "lat": 52.3605634 }, { "lng": 4.8715288, "lat": 52.3605997 }, { "lng": 4.8716826, "lat": 52.3604277 }, { "lng": 4.8738605, "lat": 52.3608533 }, { "lng": 4.8738525, "lat": 52.3610213 }, { "lng": 4.8740097, "lat": 52.3610407 }, { "lng": 4.8741351, "lat": 52.3608935 }, { "lng": 4.8750611, "lat": 52.3608041 }, { "lng": 4.8756501, "lat": 52.3606138 }, { "lng": 4.876429, "lat": 52.3607996 }, { "lng": 4.8765642, "lat": 52.3606177 }, { "lng": 4.876929, "lat": 52.3606957 }, { "lng": 4.8768495, "lat": 52.360911 }, { "lng": 4.8771709, "lat": 52.3609696 }, { "lng": 4.8774, "lat": 52.3607583 }, { "lng": 4.8819952, "lat": 52.3620427 }, { "lng": 4.8813956, "lat": 52.3630818 }, { "lng": 4.8808146, "lat": 52.3634904 }, { "lng": 4.8793708, "lat": 52.3643261 }, { "lng": 4.8792691, "lat": 52.3649574 }, { "lng": 4.8787082, "lat": 52.3658206 }, { "lng": 4.8775395, "lat": 52.3667815 }, { "lng": 4.8767523, "lat": 52.3685117 }, { "lng": 4.8754901, "lat": 52.3697867 }, { "lng": 4.8745065, "lat": 52.3718772 }, { "lng": 4.8745782, "lat": 52.3725454 }, { "lng": 4.8753796, "lat": 52.373407 }, { "lng": 4.8755899, "lat": 52.3743025 }, { "lng": 4.8799131, "lat": 52.3813052 }, { "lng": 4.8796339, "lat": 52.3819128 }, { "lng": 4.880478, "lat": 52.3822531 }, { "lng": 4.8818058, "lat": 52.3843528 }, { "lng": 4.882637, "lat": 52.3854107 }, { "lng": 4.8846503, "lat": 52.3883466 }, { "lng": 4.8857963, "lat": 52.3881476 }, { "lng": 4.8911796, "lat": 52.3884502 }, { "lng": 4.8937804, "lat": 52.3886712 }, { "lng": 4.8956658, "lat": 52.3888313 }, { "lng": 4.8927982, "lat": 52.3933453 }, { "lng": 4.8850924, "lat": 52.398824 }, { "lng": 4.8762366, "lat": 52.3945287 }, { "lng": 4.8726422, "lat": 52.3948206 }, { "lng": 4.8719896, "lat": 52.3947192 }, { "lng": 4.8719508, "lat": 52.3952766 }, { "lng": 4.8715979, "lat": 52.39538 }, { "lng": 4.8667403, "lat": 52.393136 }, { "lng": 4.8643092, "lat": 52.3927072 }, { "lng": 4.8627057, "lat": 52.3938521 }, { "lng": 4.8603441, "lat": 52.3949382 }, { "lng": 4.858593, "lat": 52.3952782 }, { "lng": 4.8569204, "lat": 52.3953667 }, { "lng": 4.8569896, "lat": 52.3938363 }, { "lng": 4.8573172, "lat": 52.3938424 }, { "lng": 4.8574043, "lat": 52.3920751 }, { "lng": 4.8589526, "lat": 52.3912226 }, { "lng": 4.8592744, "lat": 52.3905434 }, { "lng": 4.8592929, "lat": 52.3887899 }, { "lng": 4.8449045, "lat": 52.3887733 }, { "lng": 4.8451066, "lat": 52.3850658 }, { "lng": 4.8446526, "lat": 52.3850638 }, { "lng": 4.8390117, "lat": 52.3850241 }, { "lng": 4.8392807, "lat": 52.3829687 }, { "lng": 4.838548, "lat": 52.3808766 }, { "lng": 4.836707, "lat": 52.3763581 }, { "lng": 4.8353454, "lat": 52.3731265 }] },
      //  { name: "De Baarsjes",
      //    value: "De Baarsjes",
      //    polygon: [{"lng":4.8558724,"lat":52.374202},{"lng":4.8577714,"lat":52.3681953},{"lng":4.8582878,"lat":52.3648623},{"lng":4.8592819,"lat":52.3648966},{"lng":4.8598228,"lat":52.364783},{"lng":4.8613989,"lat":52.3664539},{"lng":4.8661845,"lat":52.3717538},{"lng":4.8664001,"lat":52.3721596},{"lng":4.8663889,"lat":52.372566},{"lng":4.865846,"lat":52.3733281},{"lng":4.8646717,"lat":52.3734961},{"lng":4.8641583,"lat":52.3750737},{"lng":4.8640923,"lat":52.3752839},{"lng":4.8559599,"lat":52.3743342},{"lng":4.8558724,"lat":52.374202}] },
      //  { name: "Oud West",
      //    value: "Oud West",
      //    polygon: [{"lng":4.8546816,"lat":52.3568634},{"lng":4.855041,"lat":52.3563261},{"lng":4.858839,"lat":52.3572696},{"lng":4.8625458,"lat":52.3582427},{"lng":4.8646701,"lat":52.3588487},{"lng":4.868731,"lat":52.3597955},{"lng":4.8703188,"lat":52.3601231},{"lng":4.8717136,"lat":52.3604376},{"lng":4.8738218,"lat":52.3609651},{"lng":4.8763055,"lat":52.3607226},{"lng":4.8776842,"lat":52.3608635},{"lng":4.878167,"lat":52.3610044},{"lng":4.8812676,"lat":52.3618856},{"lng":4.8807043,"lat":52.3623966},{"lng":4.8798675,"lat":52.3633663},{"lng":4.8795778,"lat":52.3639428},{"lng":4.8792613,"lat":52.3644931},{"lng":4.8791272,"lat":52.3650598},{"lng":4.8787785,"lat":52.3656691},{"lng":4.8779202,"lat":52.3663734},{"lng":4.8773838,"lat":52.366809},{"lng":4.8772336,"lat":52.3676312},{"lng":4.8769385,"lat":52.3681389},{"lng":4.8754311,"lat":52.3697536},{"lng":4.8746211,"lat":52.3714043},{"lng":4.8744494,"lat":52.3720594},{"lng":4.8744602,"lat":52.3723083},{"lng":4.8752166,"lat":52.3729895},{"lng":4.8745943,"lat":52.3731762},{"lng":4.870925,"lat":52.3724033},{"lng":4.8680175,"lat":52.3717974},{"lng":4.8665959,"lat":52.3715648},{"lng":4.8654211,"lat":52.3703825},{"lng":4.8641176,"lat":52.3689905},{"lng":4.8628623,"lat":52.3676443},{"lng":4.8616499,"lat":52.3662554},{"lng":4.8604268,"lat":52.3648862},{"lng":4.8602505,"lat":52.3647431},{"lng":4.8591448,"lat":52.3634056},{"lng":4.8580772,"lat":52.3621247},{"lng":4.8575783,"lat":52.3615515},{"lng":4.857117,"lat":52.3604245},{"lng":4.856248,"lat":52.3592681},{"lng":4.8555345,"lat":52.3580035},{"lng":4.855299,"lat":52.357674},{"lng":4.855269,"lat":52.3576447},{"lng":4.855115,"lat":52.3574166},{"lng":4.8549071,"lat":52.3571512},{"lng":4.85479,"lat":52.3570018},{"lng":4.8546816,"lat":52.3568634}] },
      // ],
      titleField: 'title',
      summaryField: 'summary',
      // areaField: self.config.areaField || 'extraData.gebied',
      user: {},
      api: {
        url: null,
        headers: null,
        isUserLoggedIn: false
      },
      idea: {
        canAddNewIdeas: true,
        showVoteButtons: true,
        titleMinLength: 10,
        titleMaxLength: 20,
        summaryMinLength: 20,
        summaryMaxLength: 140,
        descriptionMinLength: 140,
        descriptionMaxLength: 5000
      },
      argument: {
        isActive: true,
        descriptionMinLength: 30,
        descriptionMaxLength: 500,
        formIntro: 'Mijn reactie op deze inzending is ...',
        placeholder: '',
        requiredUserRole: 'member',
        ignoreReactionsForIdeaIds: '',
        closeReactionsForIdeaIds: ''
      },
      content: {
        mobilePreviewLoggedInHTML: 'Een locatie vlakbij <h4>{address}</h4>{addButton}',
        mobilePreviewNotLoggedInHTML: 'Een locatie vlakbij <h4>{address}</h4><div>Wilt u een nieuw punt toevoegen? Dan moet u eerst <a href="{loginLink}">inloggen</a>.</div>'
      },
      search: {}
    };
    self.config = merge__WEBPACK_IMPORTED_MODULE_0___default.a.recursive(self.defaultConfig, self.config, props.config || {});
    self.config.ideaName = self.config.ideaName || 'Inzendingen';
    self.config.search.searchIn = props.config.search && props.config.search.searchIn || ['ideas', 'addresses']; // defaults

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
      ideas: [],
      visibleIdeas: [],
      status: 'default',
      // default, idea-selected, location-selected, idea-details, idea-form
      mobileState: 'closed',
      // oud
      currentIdea: null,
      editIdea: null,
      // new, maar nog niet overal gebruikt
      selectedIdea: null,
      selectedLocation: null,
      currentMouseOverIdea: null
    };
    return _this;
  }

  _createClass(OpenStadComponentIdeasOnMap, [{
    key: "componentDidMount",
    value: function componentDidMount(prevProps, prevState) {
      var self = this;
      window.addEventListener('hashchange', function (e) {
        self.hideIdeaDetails();
        var match = window.location.hash.match(/(\w)(\d+)/);

        if (match) {
          var ideaId = match[2];
          var idea = self.state.ideas && self.state.ideas.find(function (idea) {
            return idea.id == ideaId;
          });

          if (match[1] == 'D') {
            self.showIdeaDetails(idea);
          } else {// self.setSelectedIdea(idea);
          }
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

      document.addEventListener('typeFilterUpdate', function (event) {
        self.onChangeTypeFilter(event.detail.value);
      }); // document.addEventListener('areaFilterUpdate', function(event) {
      //   self.onChangeAreaFilter(event.detail.value);
      // });
      // handle infoblock changes

      document.addEventListener('updateSelectedIdea', function (event) {
        self.onUpdateSelectedIdea(event.detail.idea);
      });
      document.addEventListener('closeSelectedLocation', function (event) {
        self.onCloseSelectedLocation(event.detail.idea);
      });
      document.addEventListener('updateEditIdea', function (event) {
        self.onUpdateEditIdea(event.detail.idea);
      });
      document.addEventListener('ideaClick', function (event) {
        self.onIdeaClick(event.detail.idea);
      });
      document.addEventListener('selectedIdeaClick', function (event) {
        self.onSelectedIdeaClick(event.detail.idea);
      });
      document.addEventListener('newIdeaClick', function (event) {
        self.onNewIdeaClick({
          typeId: event.detail.typeId
        });
      });
      document.addEventListener('clickMobileSwitcher', function (event) {
        self.onClickMobileSwitcher();
      });
      document.addEventListener('mouseOverListItem', function (event) {
        self.onMouseOverListItem(event.detail.idea);
      });
      document.addEventListener('mouseOutListItem', function (event) {
        self.onMouseOutListItem();
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
      document.addEventListener('osc-edit-idea-click', function (event) {
        self.onEditIdeaClick(event.detail);
      });
      document.addEventListener('osc-idea-deleted', function (event) {
        self.onIdeaDeleted(event.detail);
      }); // form changes

      document.addEventListener('newIdeaStored', function (event) {
        document.location.href = "#";
        self.onNewIdeaStored(event.detail.idea);
      });
    }
  }, {
    key: "fetchData",
    value: function fetchData(_ref) {
      var showIdeaDetails = _ref.showIdeaDetails,
          showIdeaSelected = _ref.showIdeaSelected;
      var self = this;
      var url = "".concat(self.config.api.url, "/api/site/").concat(self.config.siteId, "/idea?includeVoteCount=1&includeArgsCount=1&includeUser=1");
      var headers = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_8__["default"].api.getHeaders(self.config); // remove existing

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
          self.setState({
            mobileState: self.config.startWithListOpenOnMobile ? 'opened' : 'closed'
          }); // self.setSelectedLocation({ lat: 52.37104644463586, lng: 4.900402911007405 })
          // return setTimeout(function(){ self.showIdeaForm() }, 500)

          if (_typeof(showIdeaSelected) == 'object' && showIdeaSelected != null) {
            self.setNewIdea(null);
            self.setSelectedIdea(showIdeaSelected);
            self.setState({
              status: 'idea-selected',
              currentIdea: showIdeaSelected
            }, function () {
              // todo: dit zou hij zelf via state moeten doen
              self.map.map.invalidateSize();
              self.map.showMarkers({});
              self.setSelectedIdea(self.state.currentIdea);
            });
          }

          if (_typeof(showIdeaDetails) == 'object' && showIdeaDetails != null) {
            self.setSelectedIdea(showIdeaDetails);
            self.setNewIdea(null);
            self.showIdeaDetails(showIdeaDetails);
          }

          if (window.location.hash.match(/^#newidea/)) {
            // TODO: dit moet ook bestaande ideeen gaan werken
            var hash = window.location.hash;
            var match = hash.match(/&([^&]+)=([^&]+)/g);
            var newIdea = {};

            if (match) {
              match.forEach(function (entry) {
                var _entry$split = entry.split('='),
                    _entry$split2 = _slicedToArray(_entry$split, 2),
                    key = _entry$split2[0],
                    val = _entry$split2[1];

                key = key.substring(1, key.length);
                newIdea[key] = decodeURIComponent(val);
              });
            }

            self.setNewIdea(newIdea);
            self.showIdeaForm(newIdea);
          }

          self.onChangeMapBoundaries();
        });
      })["catch"](function (err) {
        console.log('Niet goed');
        console.log(err);
      });
    }
  }, {
    key: "showIdeaDetails",
    value: function showIdeaDetails(idea) {
      var self = this;
      self.setSelectedIdea(idea); // OpenStadComponentLibs.localStorage.set('osc-ideas-on-map-details', idea && idea.id );
      // OpenStadComponentLibs.localStorage.set('osc-ideas-on-map-selected', null);

      if (self.infoblock) self.infoblock.setState({
        mobileState: self.state.mobileState = 'opened'
      });
      self.setState({
        status: 'idea-details',
        currentIdea: idea
      }, function () {
        // self.setState({ status: 'idea-details', currentIdea: idea, mobileState: self.state.mobileState = 'opened' }, function() {
        self.map.map.invalidateSize();
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
      var self = this; // OpenStadComponentLibs.localStorage.set('osc-ideas-on-map-details', null );
      // OpenStadComponentLibs.localStorage.set('osc-ideas-on-map-selected', null);

      self.setState({
        status: 'idea-selected'
      }, function () {
        // todo: dit zou hij zelf via state moeten doen
        self.map.map.invalidateSize();
        self.map.showMarkers({});
        self.setSelectedIdea(self.state.currentIdea);
      });
    }
  }, {
    key: "showIdeaForm",
    value: function showIdeaForm(idea, next) {
      var self = this;

      if (self.config.idea.formUrl) {
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
        self.setState({
          status: 'idea-form',
          editIdea: idea
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
          if (next) next();
        });
      }
    }
  }, {
    key: "hideIdeaForm",
    value: function hideIdeaForm() {
      var self = this;

      if (this.state.editIdea && typeof this.state.editIdea.id == 'number') {
        var idea = self.state.ideas.find(function (idea) {
          return idea.id == self.state.editIdea.id;
        });
        self.showIdeaDetails(idea);
        document.location.href = "#D" + idea.id;
      } else {
        document.location.href = '#';

        if (self.state.editIdea && self.state.editIdea.location) {
          self.setState({
            status: 'location-selected'
          }, function () {
            // todo: dit zou hij zelf via state moeten doen
            self.map.map.invalidateSize();
            self.map.showMarkers({});
            self.setNewIdea(self.state.editIdea);
          });
        } else {
          self.setState({
            status: 'default'
          }, function () {
            self.map.map.invalidateSize();
            self.map.showMarkers({});
            self.setNewIdea(null);
          });
        }
      }
    }
  }, {
    key: "doSearch",
    value: function doSearch(searchValue, callback) {
      var self = this;
      var searchValueLc = searchValue.toLowerCase();
      var searchResult = {
        ideas: [],
        locations: []
      }; // search in ideas xxx

      if (this.config.search.searchIn.includes('ideas')) {
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
        });
      }

      if (!this.config.search.searchIn.includes('addresses')) {
        setImmediate(function () {
          callback(searchValue, searchResult);
        });
      } // search for addresses


      fetch('https://geodata.nationaalgeoregister.nl/locatieserver/v3/suggest?rows=5&fq=gemeentenaam:amsterdam&fq=*:*&q=' + searchValueLc, {
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
        fetch('https://geodata.nationaalgeoregister.nl/locatieserver/v3/lookup?fq=gemeentenaam:amsterdam&&id=' + id, {
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
    } // dit is opgezet maar wordt niet genbruikt en is daarom niet afgemaakt; latere wijzigingen maken dat dit niet meer werkt
    // setCurrentPolygon(polygon) {
    //   let state = { ...this.state };
    //   state.currentPolygon = polygon ? this.map.createCutoutPolygon(polygon): undefined;
    //   this.setState(state);
    // }
    // removeCurrentPolygon() {
    //   this.map.removePolygon(this.state.currentPolygon)
    //   let state = { ...this.state };
    //   state.currentPolygon = undefined;
    //   this.setState(state);
    // }

  }, {
    key: "getVisibleIdeas",
    value: function getVisibleIdeas() {
      if (this.state.mobileState == 'opened') {
        // werkt omdat hij alleen op mobiel opend kan zijn
        return this.state.visibleIdeas;
      } else {
        var visibleIdeas = this.map.getVisibleIdeas();
        this.setState({
          visibleIdeas: visibleIdeas
        });
        return visibleIdeas;
      }
    }
  }, {
    key: "setSelectedLocation",
    value: function setSelectedLocation(location) {
      // xxx
      var self = this;
      self.map.setSelectedLocation(location);

      if (self.ideaform) {
        if (!location) return;
        self.ideaform.handleLocationChange({
          location: location,
          address: 'Bezig met adresgegevens ophalen...'
        });
        self.map.getPointInfo(location, null, function (json, marker) {
          var address = json && json._display || 'Geen adres gevonden';
          self.state.editIdea.address = address;
          self.ideaform.handleLocationChange({
            location: location,
            address: address
          });
        });
      }
    }
  }, {
    key: "setNewIdea",
    value: function setNewIdea(idea) {
      var self = this;
      if (idea) idea.isPointInPolygon = idea.location && self.map.isPointInPolygon({
        lat: idea.location.coordinates[0],
        lng: idea.location.coordinates[1]
      }, self.config.map.polygon);
      self.setState({
        editIdea: idea
      }, function () {
        if (idea) {
          self.map.fadeMarkers({
            exception: [idea.location]
          }); // xxx

          if (idea.location) self.setSelectedLocation({
            lat: idea.location.coordinates[0],
            lng: idea.location.coordinates[1]
          });

          if (self.infoblock) {
            self.setState({
              editIdea: self.state.editIdea
            });

            if (idea.location) {
              self.infoblock.setNewIdea(_objectSpread(_objectSpread({}, self.state.editIdea), {}, {
                address: 'Bezig met adresgegevens ophalen...'
              }));
              self.map.getPointInfo({
                lat: idea.location.coordinates[0],
                lng: idea.location.coordinates[1]
              }, null, function (json, marker) {
                var address = json && json._display || 'Geen adres gevonden';
                var editIdea = self.state.editIdea;
                editIdea.address = address;
                self.setState({
                  editIdea: editIdea
                });
                self.infoblock.setNewIdea(_objectSpread(_objectSpread({}, self.state.editIdea), {}, {
                  address: address
                }));
              });
            } else {
              self.infoblock.setNewIdea(_objectSpread(_objectSpread({}, self.state.editIdea), {}, {
                address: 'Geen locatie geselecteerd...'
              }));
            }

            self.infoblock.updateIdeas({
              ideas: self.state.ideas.filter(function (x) {
                return x.id != idea.id;
              }),
              sortOrder: 'distance',
              hideSortButton: true,
              center: {
                lat: idea.location.coordinates[0],
                lng: idea.location.coordinates[1]
              },
              maxLength: 5
            });
          }
        } else {
          self.map.unfadeAllMarkers();
          self.setSelectedLocation(null);

          if (self.infoblock) {
            self.infoblock.setNewIdea(null);
            self.infoblock.updateIdeas({
              ideas: self.getVisibleIdeas(),
              hideSortButton: false
            });
          }
        }
      });
    }
  }, {
    key: "setSelectedIdea",
    value: function setSelectedIdea(idea) {
      // OpenStadComponentLibs.localStorage.set('osc-ideas-on-map-selected', idea && idea.id );
      // OpenStadComponentLibs.localStorage.set('osc-ideas-on-map-details', null);
      this.selectedIdea = idea;

      if (idea) {
        this.map.fadeMarkers({
          exception: idea
        });

        if (this.infoblock) {
          this.infoblock.setSelectedIdea(idea);
          this.infoblock.updateIdeas({
            ideas: this.state.ideas.filter(function (x) {
              return x.id != idea.id;
            }),
            sortOrder: 'distance',
            hideSortButton: true,
            center: {
              lat: idea.location.coordinates[0],
              lng: idea.location.coordinates[1]
            },
            maxLength: 5
          });
        }
      } else {
        this.map.unfadeAllMarkers();

        if (this.infoblock) {
          this.infoblock.setSelectedIdea(null);
          this.infoblock.updateIdeas({
            ideas: this.getVisibleIdeas(),
            hideSortButton: false
          });
        }
      }
    }
  }, {
    key: "onMapClick",
    value: function onMapClick(event, forceSelectLocation) {
      if (this.state.mobileState == 'opened') {
        // werkt omdat hij alleen op mobiel opend kan zijn
        this.infoblock.setState({
          mobileState: 'closed'
        });
        this.setState({
          mobileState: 'closed'
        }, function () {
          this.map.map.invalidateSize();
        });
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
          if ((this.selectedIdea || this.map.selectedLocation) && !forceSelectLocation) {
            this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
              status: 'default',
              currentIdea: null
            }));
            document.location.href = '#';
            this.setSelectedIdea(null);
            this.setNewIdea(null);
            this.infoblock.updateIdeas({
              ideas: this.getVisibleIdeas(),
              hideSortButton: false
            });
          } else {
            if (!this.config.canSelectLocation) break;
            this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
              status: 'location-selected',
              currentIdea: null
            }));
            this.setSelectedIdea(null);
            var newIdea = {
              id: 'New Idea',
              location: {
                coordinates: [event.latlng.lat, event.latlng.lng]
              }
            };
            this.setNewIdea(newIdea); // setTimeout( function() {
            // var event = new window.CustomEvent('newIdeaClick', { detail: { newIdea } });
            //   document.dispatchEvent(event);
            // }, 500 );
          }

          this.map.updateFading();
          document.querySelector('#osc-ideas-on-map-info').scrollTo(0, 0);
      }
    }
  }, {
    key: "onMarkerClick",
    value: function onMarkerClick(event) {
      if (this.state.mobileState == 'opened') {
        // werkt omdat hij alleen op mobiel opend kan zijn
        this.infoblock.setState({
          mobileState: 'closed'
        });
        this.setState({
          mobileState: 'closed'
        }, function () {
          this.map.map.invalidateSize();
        });
        return;
      }

      switch (this.state.status) {
        case 'idea-details':
          break;

        case 'idea-form':
          break;

        default:
          if (this.state.editIdea) {
            this.setState({
              status: 'default',
              currentIdea: null
            });
            this.setNewIdea(null);
            this.onUpdateSelectedIdea(null);
          } else {
            this.setState({
              status: 'idea-selected',
              currentIdea: event.target.data
            });
            this.setNewIdea(null);
            this.onUpdateSelectedIdea(event.target.data);
          }

          document.querySelector('#osc-ideas-on-map-info').scrollTo(0, 0);
      }
    }
  }, {
    key: "onClusterClick",
    value: function onClusterClick(event) {
      if (this.state.mobileState == 'opened') {
        // werkt omdat hij alleen op mobiel opend kan zijn
        this.infoblock.setState({
          mobileState: 'closed'
        });
        this.setState({
          mobileState: 'closed'
        }, function () {
          this.map.map.invalidateSize();
        });
        return;
      }

      this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
        status: 'default',
        currentIdea: null
      }));
      this.setNewIdea(null);
      this.setSelectedIdea(null);
    }
  }, {
    key: "onChangeMapBoundaries",
    value: function onChangeMapBoundaries() {
      var self = this;
      self.map.updateFading();

      switch (self.state.status) {
        case 'idea-details':
          break;

        case 'idea-form':
          break;

        case 'idea-selected':
        case 'location-selected':
          if (self.infoblock) {
            var selectedIdea = self.state.currentIdea || self.selectedIdea || self.state.editIdea;

            if (selectedIdea && selectedIdea) {
              self.infoblock.updateIdeas({
                ideas: self.state.ideas.filter(function (x) {
                  return x.id != selectedIdea.id;
                }),
                sortOrder: 'distance',
                hideSortButton: true,
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
          if (self.infoblock) {
            self.infoblock.updateIdeas({
              ideas: self.getVisibleIdeas(),
              hideSortButton: false
            });
          }

      }
    }
  }, {
    key: "onUpdateEditIdea",
    value: function onUpdateEditIdea(idea) {
      this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
        editIdea: _objectSpread({}, idea),
        currentIdea: idea
      }));
    }
  }, {
    key: "onUpdateSelectedIdea",
    value: function onUpdateSelectedIdea(idea) {
      if (this.state.editIdea) this.setNewIdea(null);
      var status = idea ? 'idea-selected' : 'default';

      if (idea) {
        document.location.href = '#S' + idea.id;
      } else {
        document.location.href = "#";
      }

      this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
        status: status,
        currentIdea: idea
      }), function () {
        this.setSelectedIdea(idea);
      });
    }
  }, {
    key: "onCloseSelectedLocation",
    value: function onCloseSelectedLocation() {
      this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
        status: 'default',
        currentIdea: null
      }), function () {
        this.setSelectedIdea(null);
        this.setNewIdea(null);
        this.setSelectedLocation(null);
      });
    }
  }, {
    key: "onIdeaClick",
    value: function onIdeaClick(idea) {
      // let showDetails = this.state.status == 'location-selected' || this.state.status == 'idea-selected';
      if (this.state.editIdea) this.setNewIdea(null);
      this.setState({
        status: 'idea-selected',
        currentIdea: idea
      }, function () {
        this.setSelectedIdea(idea); // if (showDetails) this.showIdeaDetails(idea);
        // this.showIdeaDetails(idea);

        document.location.href = "#D" + idea.id;
      });
    }
  }, {
    key: "onEditIdeaClick",
    value: function onEditIdeaClick(idea) {
      var self = this;
      var location = {
        lat: idea.location.coordinates[0],
        lng: idea.location.coordinates[1]
      };
      self.showIdeaForm(idea, function () {
        self.ideaform.handleLocationChange({
          location: location,
          address: 'Bezig met adresgegevens ophalen...'
        });
        self.map.getPointInfo(location, null, function (json, marker) {
          var address = json && json._display || 'Geen adres gevonden';
          self.state.editIdea.address = address;
          self.ideaform.handleLocationChange({
            location: location,
            address: address
          });
        });
      });
    }
  }, {
    key: "onIdeaDeleted",
    value: function onIdeaDeleted(ideaId) {
      var self = this;
      self.setNewIdea(null);
      self.setSelectedIdea(null);
      self.setSelectedLocation(null);
      self.setState({
        status: 'default'
      }, function () {
        self.map.map.invalidateSize();
        self.map.setBoundsAndCenter();
        self.fetchData({});
      });
    }
  }, {
    key: "onDeleteIdeaClick",
    value: function onDeleteIdeaClick(idea) {
      console.log('Delete idea', idea.id);
      alert('TODO');
    }
  }, {
    key: "onSelectedIdeaClick",
    value: function onSelectedIdeaClick(idea) {
      // this.showIdeaDetails(idea);
      document.location.href = "#D" + idea.id;
    }
  }, {
    key: "onNewIdeaClick",
    value: function onNewIdeaClick(_ref2) {
      var _this2 = this;

      var typeId = _ref2.typeId;
      var self = this;
      var editIdea = this.state.editIdea || {};
      editIdea.typeId = typeId;
      self.showIdeaForm(editIdea, function () {
        var location = {
          lat: _this2.state.editIdea.location.coordinates[0],
          lng: _this2.state.editIdea.location.coordinates[1]
        };
        self.ideaform.handleLocationChange({
          location: location,
          address: 'Bezig met adresgegevens ophalen...'
        });
        self.map.getPointInfo(location, null, function (json, marker) {
          var address = json && json._display || 'Geen adres gevonden';
          self.state.editIdea.address = address;
          self.ideaform.handleLocationChange({
            location: location,
            address: address
          });
        });
      });
    }
  }, {
    key: "onNewIdeaStored",
    value: function onNewIdeaStored(idea) {
      var self = this;
      self.setNewIdea(null);
      self.showIdeaDetails(idea);
      self.fetchData({
        showIdeaSelected: idea.id
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
    key: "onChangeTypeFilter",
    value: function onChangeTypeFilter(value) {
      var self = this;
      self.setSelectedIdea(null);
      self.setNewIdea(null);
      self.setSelectedLocation(null);
      self.map.setFilter(function (marker) {
        if (value && value !== '0') {
          return marker.data && eval("marker.data.".concat(self.config.typeField)).toLowerCase() && eval("marker.data.".concat(self.config.typeField)).toLowerCase() == value.toLowerCase();
        } else {
          return true;
        }
      });
      self.setState({
        status: 'default'
      });
      self.map.setBoundsAndCenter();
      self.onChangeMapBoundaries(); // todo: rename
    } // dit is opgezet maar wordt niet genbruikt en is daarom niet afgemaakt; latere wijzigingen maken dat dit niet meer werkt
    // onChangeAreaFilter(area) {
    //   let self = this;
    //   self.setSelectedIdea(null);
    //   self.setNewIdea(null);
    //   self.removeCurrentPolygon();
    //   self.setCurrentPolygon( area && area.polygon );
    //   self.setState({ status: 'default' })
    //   self.map.setBoundsAndCenter(area && area.polygon || self.config.map.polygon || self.map.markers);
    // }

  }, {
    key: "onMouseOverListItem",
    value: function onMouseOverListItem(idea) {
      this.setState({
        currentMouseOverIdea: idea
      });
      this.map.fadeMarkers({
        exception: idea
      });
      this.map.updateFading();
    }
  }, {
    key: "onMouseOutListItem",
    value: function onMouseOutListItem(idea) {
      this.setState({
        currentMouseOverIdea: null
      });
      this.map.unfadeAllMarkers();

      if (this.selectedIdea) {
        this.map.fadeMarkers({
          exception: this.selectedIdea
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
      document.location.href = '#S' + this.state.currentIdea.id;
    }
  }, {
    key: "onClickMobileSwitcher",
    value: function onClickMobileSwitcher() {
      var self = this;
      if (self.infoblock) self.infoblock.setState({
        mobileState: self.state.mobileState == 'closed' ? 'opened' : 'closed'
      });
      self.setState({
        mobileState: self.state.mobileState == 'closed' ? 'opened' : 'closed'
      }, function () {
        self.map.map.invalidateSize();

        if (this.state.status == 'location-selected' || this.state.status == 'idea-selected') {
          var selectedIdea = self.state.currentIdea || self.selectedIdea || self.state.editIdea;
          self.map.setBoundsAndCenter();
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this,
          _React$createElement,
          _React$createElement2,
          _React$createElement3,
          _React$createElement4;

      var infoHTML = null; // todo: ik denk dat dit naar infoblock moet

      var filterHTML = null;
      var mobilePopupHTML = null;

      switch (this.state.status) {
        case 'idea-details':
          var config = {
            // TODO: niet bij elke render
            titleField: this.config.titleField,
            summaryField: this.config.summaryField,
            typeField: this.config.typeField,
            // areaField: this.config.areaField,
            siteId: this.config.siteId,
            user: this.config.user,
            api: this.config.api,
            argument: _objectSpread({}, this.config.argument),
            showVoteButtons: this.config.idea.showVoteButtons,
            poll: this.config.poll,
            showLabels: this.config.idea.showLabels,
            types: this.config.types,
            allowMultipleImages: this.config.idea.allowMultipleImages,
            metaDataTemplate: this.config.idea.metaDataTemplate,
            shareChannelsSelection: this.config.idea.shareChannelsSelection,
            loginUrl: this.config.loginUrl,
            linkToUserPageUrl: this.config.linkToUserPageUrl
          };
          config.argument.isActive = this.config.argument.isActive && !this.config.argument.ignoreReactionsForIdeaIds.match(new RegExp("(?:^|\\D)".concat(this.state.currentIdea.id, "(?:\\D|$)")));
          config.argument.isClosed = this.config.argument.isClosed || this.config.argument.closeReactionsForIdeaIds.match(new RegExp("(?:^|\\D)".concat(this.state.currentIdea.id, "(?:\\D|$)")));
          if (this.config.typeLabel) config.typeLabel = this.config.typeLabel; // TODO: tmp gerard dou

          if (this.state.currentIdea && this.state.currentIdea.extraData && this.state.currentIdea.extraData.type && (this.state.currentIdea.extraData.type == 'Kans' || this.state.currentIdea.extraData.type == 'Knelpunt')) {
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
            config.showLabels = true;
          }

          infoHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_idea_details_index_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], (_React$createElement = {
            id: this.divId + '-infoblock',
            config: config,
            idea: this.state.currentIdea
          }, _defineProperty(_React$createElement, "id", "osc-ideas-on-map-info"), _defineProperty(_React$createElement, "className", "osc-ideas-on-map-info"), _defineProperty(_React$createElement, "mobileState", this.state.mobileState), _defineProperty(_React$createElement, "ref", function ref(el) {
            return _this3.ideadetails = el;
          }), _React$createElement));
          filterHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "osc-ideas-on-map-filterbar"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "osc-backbutton",
            onClick: function onClick() {
              return _this3.onClickBackToOverview();
            }
          }, "Terug naar overzicht"));
          break;

        case 'idea-form':
          infoHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_idea_form_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], (_React$createElement2 = {
            id: this.divId + '-infoblock',
            config: _objectSpread(_objectSpread({
              siteId: this.config.siteId,
              user: this.config.user,
              api: this.config.api
            }, this.config.idea), {}, {
              types: this.config.types,
              typeField: this.config.typeField
            }),
            idea: _objectSpread(_objectSpread({}, this.state.editIdea), {}, {
              user: this.state.editIdea && this.state.editIdea.user || this.config.user
            })
          }, _defineProperty(_React$createElement2, "id", "osc-ideas-on-map-info"), _defineProperty(_React$createElement2, "className", "osc-ideas-on-map-info"), _defineProperty(_React$createElement2, "mobileState", this.state.mobileState), _defineProperty(_React$createElement2, "ref", function ref(el) {
            return _this3.ideaform = el;
          }), _React$createElement2));
          filterHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "osc-ideas-on-map-filterbar"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "osc-backbutton",
            onClick: function onClick() {
              return _this3.hideIdeaForm();
            }
          }, "Terug naar ", this.state.editIdea && typeof this.state.editIdea.id == 'number' ? 'idee' : 'overzicht'));
          break;

        case 'location-selected':
        case 'idea-selected':
          if (this.state.status == 'location-selected') {
            if (this.state.editIdea && this.state.editIdea.isPointInPolygon) {
              var contentHTML = this.config.api.isUserLoggedIn ? this.config.content.mobilePreviewLoggedInHTML : this.config.content.mobilePreviewNotLoggedInHTML;
              var addButton = null;
              var loginButton = null;
              var loginLink = null;

              if (this.config.api.isUserLoggedIn) {
                if (this.config.idea.canAddNewIdeas) {
                  addButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
                    className: "osc-button osc-button-blue",
                    onClick: function onClick(event) {
                      _this3.onClickMobileSwitcher(event);

                      _this3.onNewIdeaClick(event);
                    },
                    ref: function ref(el) {
                      return self.newIdeaButton = el;
                    }
                  }, "Nieuw punt toevoegen");
                }
              } else {
                if (this.config.idea.canAddNewIdeas) {
                  loginButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
                    onClick: function onClick() {
                      document.location.href = '/oauth/login?returnTo=' + encodeURIComponent(document.location.href);
                    },
                    className: "osc-button-blue osc-not-logged-in-button"
                  }, "Inloggen");
                  loginLink = "javascript: document.location.href = '/oauth/login?returnTo=' + encodeURIComponent(document.location.href)";
                }
              }

              contentHTML = contentHTML.replace(/\{address\}/g, this.state.editIdea.address || '');
              contentHTML = contentHTML.replace(/\{loginLink\}/g, loginLink);
              contentHTML = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_8__["default"].reactTemplate({
                html: contentHTML,
                addButton: addButton,
                loginButton: loginButton
              });
              mobilePopupHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
                className: "ocs-mobile-popup"
              }, contentHTML);
            }
          } else {
            mobilePopupHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
              className: "ocs-mobile-popup ocs-clickable",
              onClick: function onClick() {
                _this3.setState({
                  mobileState: 'opened'
                });

                _this3.infoblock.setState({
                  mobileState: 'opened'
                });

                document.location.href = "#D" + _this3.state.currentIdea.id;
                /* this.showIdeaDetails(this.state.currentIdea) */
              }
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
              className: "osc-image",
              style: {
                backgroundImage: "url(".concat(this.state.currentIdea && this.state.currentIdea.image, ")")
              }
            }), eval(this.state.currentIdea && "this.state.currentIdea.".concat(this.config.titleField)));
          }

          infoHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_info_block_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], (_React$createElement3 = {
            id: this.divId + '-infoblock',
            config: {
              api: this.config.api,
              user: this.config.user,
              ideaName: this.config.ideaName,
              titleField: this.config.titleField,
              summaryField: this.config.summaryField,
              types: this.config.types,
              typeField: this.config.typeField,
              content: this.config.content,
              argument: this.config.argument,
              idea: this.config.idea,
              loginUrl: this.config.loginUrl
            }
          }, _defineProperty(_React$createElement3, "id", "osc-ideas-on-map-info"), _defineProperty(_React$createElement3, "className", "osc-ideas-on-map-info"), _defineProperty(_React$createElement3, "mobileState", this.state.mobileState), _defineProperty(_React$createElement3, "ref", function ref(el) {
            return _this3.infoblock = el;
          }), _React$createElement3));
          filterHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_filterbar_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
            id: this.divId + '-filterbar',
            config: {
              types: this.config.types,
              typesFilterLabel: this.config.typesFilterLabel,
              typeField: this.config.typeField,
              areas: this.config.areas,
              doSearchFunction: this.config.doSearchFunction,
              ideaName: this.config.ideaName,
              search: this.config.search
            },
            className: "osc-ideas-on-map-filterbar",
            ref: function ref(el) {
              return _this3.filterbar = el;
            }
          });
          break;

        default:
          infoHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_info_block_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], (_React$createElement4 = {
            id: this.divId + '-infoblock',
            config: {
              api: this.config.api,
              user: this.config.user,
              ideaName: this.config.ideaName,
              titleField: this.config.titleField,
              summaryField: this.config.summaryField,
              types: this.config.types,
              typeField: this.config.typeField,
              content: this.config.content,
              argument: this.config.argument,
              idea: this.config.idea,
              loginUrl: this.config.loginUrl
            }
          }, _defineProperty(_React$createElement4, "id", "osc-ideas-on-map-info"), _defineProperty(_React$createElement4, "className", "osc-ideas-on-map-info"), _defineProperty(_React$createElement4, "mobileState", this.state.mobileState), _defineProperty(_React$createElement4, "ref", function ref(el) {
            return _this3.infoblock = el;
          }), _React$createElement4));
          filterHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_filterbar_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
            id: this.divId + '-filterbar',
            config: {
              types: this.config.types,
              typesFilterLabel: this.config.typesFilterLabel,
              typeField: this.config.typeField,
              areas: this.config.areas,
              doSearchFunction: this.config.doSearchFunction,
              ideaName: this.config.ideaName,
              search: this.config.search
            },
            className: "osc-ideas-on-map-filterbar",
            ref: function ref(el) {
              return _this3.filterbar = el;
            }
          });
          mobilePopupHTML = null;
          break;
      }

      var divStyle = {};
      var simpleHTML = null;

      if (this.config.displayType == 'simple') {
        filterHTML = null;
        infoHTML = null;
        mobilePopupHTML = null;
        var buttonHTML = null;
        if (this.config.linkToCompleteUrl) buttonHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          onClick: function onClick() {
            document.location.href = _this3.config.linkToCompleteUrl;
          },
          className: "osc-button-blue",
          style: {
            position: 'absolute',
            top: 20,
            right: 20
          }
        }, "Bekijk de volledige kaart");
        simpleHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1000
          }
        }, buttonHTML);
        if (this.config.displayWidth) divStyle.width = this.config.displayWidth;
        if (this.config.displayHeight) divStyle.height = this.config.displayHeight;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: this.divId,
        className: "osc-ideas-on-map osc-ideas-on-map-".concat(this.state.status, " osc-mobile-").concat(this.state.mobileState),
        style: divStyle,
        ref: function ref(el) {
          return _this3.instance = el;
        }
      }, filterHTML, infoHTML, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-ideas-on-map-map osc-ideas-on-map-map-".concat(this.config.displayType)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_map_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: this.divId + '-map',
        config: _objectSpread(_objectSpread({}, this.config.map), {}, {
          types: this.config.types,
          typeField: this.config.typeField,
          zoomControl: this.config.displayType == 'simple' ? false : true
        }),
        ref: function ref(el) {
          return _this3.map = el;
        }
      })), simpleHTML, mobilePopupHTML);
    }
  }]);

  return OpenStadComponentIdeasOnMap;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_7__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./src/ideas-on-map/component/info-block.jsx":
/*!***************************************************!*\
  !*** ./src/ideas-on-map/component/info-block.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfoBlock; });
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ideas_list_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ideas-list.jsx */ "./src/ideas-on-map/component/ideas-list.jsx");
/* harmony import */ var _libs_index_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../libs/index.jsx */ "./src/libs/index.jsx");
/* harmony import */ var _idea_image_index_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../idea-image/index.jsx */ "./src/idea-image/index.jsx");
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





 // TODO: na verandering op verandering denk ik dat dit een status moet gaan krijgen ipv. de new en selected versie.
// TODO: setNewIdea refactoren naar setSelectedLocation
// TODO: events worden via document gestuurd; dat kan ook intern

'use strict';

var InfoBlock = /*#__PURE__*/function (_React$Component) {
  _inherits(InfoBlock, _React$Component);

  var _super = _createSuper(InfoBlock);

  function InfoBlock(props) {
    var _this;

    _classCallCheck(this, InfoBlock);

    _this = _super.call(this, props); // config

    var defaultConfig = {
      content: {
        noSelectionLoggedInHTML: '<div class=\"osc-info-block-default-block\"><div class=\"osc-info-block-default-block-line osc-line-1\">Klik op een plek op de kaart om een nieuw punt toe te voegen.</div><div class=\"osc-info-block-default-block-line osc-line-2\">Selecteer een inzending op de kaart om meer informatie over de inzending te bekijken.</div><div class=\"osc-info-block-default-block-line osc-line-3\">Bekijk hieronder de inzendingen die nu zichtbaar zijn op de kaart.</div></div>',
        noSelectionNotLoggedInHTML: '<div class=\"osc-info-block-default-block\"><div class=\"osc-info-block-default-block-line osc-line-1\">Klik op een plek op de kaart om een nieuw punt toe te voegen.</div><div class=\"osc-info-block-default-block-line osc-line-2\">Selecteer een inzending op de kaart om meer informatie over de inzending te bekijken.</div><div class=\"osc-info-block-default-block-line osc-line-3\">Bekijk hieronder de inzendingen die nu zichtbaar zijn op de kaart.</div></div>',
        selectionActiveLoggedInHTML: 'Ingelogd: er is een punt geselecteerd binnen de polygon, met een adres: {address} en {addButton}.',
        selectionInactiveLoggedInHTML: 'Ingelogd: er is een punt geselecteerd buiten de polygon, met een {address}',
        selectionActiveNotLoggedInHTML: 'Niet ingelogd: er is een punt geselecteerd binnen de polygon, met een adres: {address} en {loginButton} of <a href="{loginLink}">login link</a>.',
        selectionInactiveNotLoggedInHTML: 'Niet ingelogd: er is een punt geselecteerd buiten de polygon, met een {address}',
        showNoSelectionOnMobile: false
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
    };
    _this.config = merge__WEBPACK_IMPORTED_MODULE_0___default.a.recursive(defaultConfig, _this.config, props.config || {});
    _this.config.loginUrl = _this.config.loginUrl || '/oauth/login?returnTo=' + encodeURIComponent(document.location.href); // tmp voor oude data

    console.log();

    if (props.config.content.noSelectionHTML && !props.config.content.noSelectionLoggedInHTML) {
      _this.config.content.noSelectionLoggedInHTML = props.config.content.noSelectionHTML;
    }

    if (props.config.content.noSelectionHTML && !props.config.content.noSelectionNotLoggedInHTML) {
      _this.config.content.noSelectionNotLoggedInHTML = props.config.content.noSelectionHTML;
    }

    _this.state = {
      currentSortOrder: _this.config.defaultSortOrder,
      selectedIdea: undefined,
      newIdea: undefined,
      ideas: [],
      mobileState: props.mobileState || 'closed'
    };
    return _this;
  }

  _createClass(InfoBlock, [{
    key: "componentDidMount",
    value: function componentDidMount(prevProps, prevState) {
      this.eventTarget = this.config.eventTarget || this.instance;
    }
  }, {
    key: "updateIdeas",
    value: function updateIdeas(_ref) {
      var _ref$ideas = _ref.ideas,
          ideas = _ref$ideas === void 0 ? this.state.ideas : _ref$ideas,
          _ref$sortOrder = _ref.sortOrder,
          sortOrder = _ref$sortOrder === void 0 ? this.state.currentSortOrder : _ref$sortOrder,
          hideSortButton = _ref.hideSortButton,
          _ref$center = _ref.center,
          center = _ref$center === void 0 ? {
        lat: 52.37104644463586,
        lng: 4.900402911007405
      } : _ref$center,
          maxLength = _ref.maxLength;
      this.setState({
        ideas: ideas
      });
      this.list.updateIdeas({
        ideas: ideas,
        sortOrder: sortOrder,
        hideSortButton: hideSortButton,
        center: center,
        maxLength: maxLength
      });
    }
  }, {
    key: "setSelectedIdea",
    value: function setSelectedIdea(idea) {
      this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
        selectedIdea: idea,
        newIdea: null
      }));
    }
  }, {
    key: "setNewIdea",
    value: function setNewIdea(idea) {
      this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
        newIdea: idea,
        selectedIdea: null
      }));
    }
  }, {
    key: "dispatchUpdateSelectedIdea",
    value: function dispatchUpdateSelectedIdea(e, idea) {
      e.stopPropagation();
      var event = new window.CustomEvent('updateSelectedIdea', {
        detail: {
          idea: idea
        }
      });
      document.dispatchEvent(event);
    }
  }, {
    key: "dispatchCloseSelectedLocation",
    value: function dispatchCloseSelectedLocation(e, idea) {
      e.stopPropagation();
      var event = new window.CustomEvent('closeSelectedLocation', {
        detail: {
          idea: idea
        }
      });
      document.dispatchEvent(event);
    }
  }, {
    key: "dispatchSelectedIdeaClick",
    value: function dispatchSelectedIdeaClick(e, idea) {
      e.stopPropagation();
      var event = new window.CustomEvent('selectedIdeaClick', {
        detail: {
          idea: idea
        }
      });
      document.dispatchEvent(event);
    }
  }, {
    key: "dispatchOnIdeaClick",
    value: function dispatchOnIdeaClick(e, idea) {
      e.stopPropagation();
      var event = new window.CustomEvent('ideaClick', {
        detail: {
          idea: idea
        }
      });
      document.dispatchEvent(event);
    }
  }, {
    key: "dispatchNewIdeaClick",
    value: function dispatchNewIdeaClick(e, typeId) {
      e.stopPropagation();
      var event = new window.CustomEvent('newIdeaClick', {
        detail: {
          typeId: typeId
        }
      });
      document.dispatchEvent(event);
    }
  }, {
    key: "dispatchClickMobileSwitcher",
    value: function dispatchClickMobileSwitcher(e) {
      e.stopPropagation();
      var event = new window.CustomEvent('clickMobileSwitcher', {
        detail: {}
      });
      document.dispatchEvent(event);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var self = this;
      var newIdeaHTML = null;
      var selectedIdeaHTML = null;
      var titleAddition = '';
      var mobileSwitcherHTML = null;
      var mobileTitle = ''; // knoppen

      var addButton = null;
      var loginButton = null;
      var loginLink = null;

      if (self.config.idea.canAddNewIdeas) {
        if (self.config.types && self.config.typeField == 'typeId') {
          addButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            className: "osc-new-idea-buttons"
          }, self.config.types.map(function (type) {
            var typeDef = type;

            if (!typeDef.auth || typeDef.auth.createableBy && _libs_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"].user.hasRole(self.config.user, typeDef.auth.createableBy)) {
              var buttonBgHTML = typeDef ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
                className: "osc-button-background-image",
                dangerouslySetInnerHTML: {
                  __html: typeDef.buttonicon && typeDef.buttonicon.html || ''
                }
              }) : null;
              return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
                className: "osc-button osc-button-white",
                onClick: function onClick(event) {
                  return self.dispatchNewIdeaClick(event, typeDef.id || typeDef.name);
                }
              }, buttonBgHTML, typeDef && typeDef.buttonLabel || 'Nieuw punt toevoegen');
            } else return null;
          }));
        } else {
          addButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
            className: "osc-button osc-button-blue",
            onClick: function onClick(event) {
              return self.dispatchNewIdeaClick(event);
            }
          }, "Nieuw punt toevoegen");
        }

        loginButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          onClick: function onClick() {
            document.location.href = _this2.config.loginUrl;
          },
          className: "osc-button-blue osc-not-logged-in-button"
        }, "Inloggen");
        loginLink = "javascript: document.location.href = '".concat(this.config.loginUrl, "'");
      } // new idea


      if (self.state.newIdea) {
        var contentHTML = null;

        if (self.state.newIdea.isPointInPolygon) {
          if (self.config.api.isUserLoggedIn) {
            contentHTML = self.config.content.selectionActiveLoggedInHTML;
          } else {
            contentHTML = self.config.content.selectionActiveNotLoggedInHTML;
          }
        } else {
          if (self.config.api.isUserLoggedIn) {
            contentHTML = self.config.content.selectionInactiveLoggedInHTML;
          } else {
            contentHTML = self.config.content.selectionInactiveNotLoggedInHTML;
          }
        }

        contentHTML = contentHTML.replace(/\{address\}/g, self.state.newIdea.address || '');
        contentHTML = contentHTML.replace(/\{loginLink\}/g, loginLink);
        contentHTML = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"].reactTemplate({
          html: contentHTML,
          addButton: addButton,
          loginButton: loginButton
        });
        newIdeaHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-info-block-new-idea"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          className: "osc-close-button-black",
          onClick: function onClick(event) {
            return self.dispatchCloseSelectedLocation(event, null);
          },
          ref: function ref(el) {
            return self.resetButton = el;
          }
        }), contentHTML);
        titleAddition = 'in de buurt';
        mobileTitle = 'Meer details en acties';
      } // selected idea


      if (self.state.selectedIdea) {
        var idea = self.state.selectedIdea;
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
          voteCountHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "osc-likes"
          }, idea.yes || 0);
        }

        var argcountHTML = null;

        if (this.config.argument.isActive && !this.config.argument.ignoreReactionsForIdeaIds.match(new RegExp("(?:^|\\D)".concat(idea.id, "(?:\\D|$)")))) {
          argcountHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "osc-reactions"
          }, idea.argCount || 0);
        }

        selectedIdeaHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-info-block-selected-idea",
          onClick: function onClick(event) {
            return self.dispatchSelectedIdeaClick(event, self.state.selectedIdea);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          className: "osc-close-button-black",
          onClick: function onClick(event) {
            return self.dispatchUpdateSelectedIdea(event, null);
          },
          ref: function ref(el) {
            return self.resetButton = el;
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Geselecteerd"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-info-block-selected-idea-idea"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-idea-image-container"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_idea_image_index_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
          config: {},
          idea: idea,
          key: 'image-' + idea.id
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-content"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, eval("idea.".concat(self.config.titleField))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-summary"
        }, eval("idea.".concat(self.config.summaryField))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-stats"
        }, voteCountHTML, argcountHTML, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-type"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-type-content",
          dangerouslySetInnerHTML: {
            __html: typeDef.listicon.html
          }
        })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-clear-both"
        })));
        titleAddition = 'in de buurt';
        mobileTitle = 'Meer details';
      }

      if (!titleAddition) titleAddition = 'in dit gebied';
      var defaultBlockHTML = null;

      if (!newIdeaHTML && !selectedIdeaHTML) {
        var noSelectionHTML = self.config.content.noSelectionNotLoggedInHTML;
        if (self.config.api.isUserLoggedIn) noSelectionHTML = self.config.content.noSelectionLoggedInHTML;
        noSelectionHTML = noSelectionHTML.replace(/\{loginLink\}/g, loginLink);
        noSelectionHTML = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"].reactTemplate({
          html: noSelectionHTML,
          addButton: addButton,
          loginButton: loginButton
        });
        defaultBlockHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-info-block-default-block".concat(self.config.content.showNoSelectionOnMobile ? ' osc-visible-on-mobile' : '')
        }, noSelectionHTML);
        mobileTitle = "".concat(self.config.ideaName, " in dit gebied (").concat(self.state.ideas && self.state.ideas.length || 0, ")");
      }

      if (self.state.mobileState == 'opened') {
        mobileTitle = 'Terug naar de kaart';
      }

      mobileSwitcherHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-mobile-switcher",
        onClick: function onClick(e) {
          return self.dispatchClickMobileSwitcher(e);
        }
      }, mobileTitle); // TODO: kan de key weg uit IdeasList

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: self.props.id,
        className: self.props.className || 'osc-info-block',
        ref: function ref(el) {
          return self.instance = el;
        }
      }, mobileSwitcherHTML, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-info-content"
      }, defaultBlockHTML, newIdeaHTML, selectedIdeaHTML, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ideas_list_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        config: _objectSpread(_objectSpread({}, self.config), {}, {
          onIdeaClick: function onIdeaClick(event, idea) {
            return self.dispatchOnIdeaClick(event, idea);
          }
        }),
        ideas: self.state.ideas,
        title: self.config.ideaName + ' ' + titleAddition,
        key: "osc-ideas-list-321",
        ref: function ref(el) {
          return self.list = el;
        }
      })));
    }
  }]);

  return InfoBlock;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



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
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nlmap_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../nlmap/index.jsx */ "./src/nlmap/index.jsx");
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




'use strict';

var Map = /*#__PURE__*/function (_OpenStadComponentNLM) {
  _inherits(Map, _OpenStadComponentNLM);

  var _super = _createSuper(Map);

  function Map(props) {
    var _this;

    _classCallCheck(this, Map);

    _this = _super.call(this, props); // config

    _this.defaultConfig = {
      clustering: {
        maxClusterRadius: 100,
        showCoverageOnHover: false
      },
      types: []
    };
    _this.config = merge__WEBPACK_IMPORTED_MODULE_0___default.a.recursive(_this.defaultConfig, _this.config, props.config || {}); // tmp fallback

    _this.config.polygon = _this.config.polygon;
    _this.config.autoZoomAndCenter = _this.config.autoZoomAndCenter || 'polygon';
    _this.ideas = [];
    return _this;
  }

  _createClass(Map, [{
    key: "componentDidMount",
    value: function componentDidMount(prevProps, prevState) {
      _get(_getPrototypeOf(Map.prototype), "componentDidMount", this).call(this, prevProps, prevState);

      var self = this;
      document.addEventListener('osc-map-cluster-animation-end', function (event) {
        self.onMapClusterAnimationEnd(event.detail);
      });
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
            html: '<svg width="39" height="50" viewBox="0 0 39 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.1038 0C29.6577 0 38.2075 8.46671 38.2075 18.9181C38.2075 33.1786 21.7544 47.7273 21.0432 48.3035L19.1038 50L17.1643 48.3035C16.4532 47.7273 0 33.1786 0 18.9181C0 8.46831 8.54983 0 19.1038 0ZM32.3245 18.9181C32.3083 11.6837 26.4091 5.84187 19.1038 5.82586C11.7984 5.84187 5.89922 11.6837 5.88306 18.9181C5.88306 27.3367 14.1581 37.2439 19.0876 42.1095C23.1767 38.1242 32.3245 27.993 32.3245 18.9181Z" fill="#EC0000"/><path d="M19.104 5.82568C26.4093 5.84169 32.3086 11.6836 32.3247 18.9179C32.3247 27.9928 23.1769 38.124 19.0879 42.1093C14.1584 37.2437 5.8833 27.3366 5.8833 18.9179C5.89946 11.6836 11.7987 5.84169 19.104 5.82568ZM25.5689 18.9179C25.5689 15.3807 22.6759 12.5158 19.104 12.5158C15.5322 12.5158 12.6391 15.3807 12.6391 18.9179C12.6391 22.455 15.5322 25.3199 19.104 25.3199C22.6759 25.3199 25.5689 22.455 25.5689 18.9179Z" fill="white"/><path d="M19.1038 25.3202C22.6743 25.3202 25.5687 22.4539 25.5687 18.9182C25.5687 15.3824 22.6743 12.5161 19.1038 12.5161C15.5333 12.5161 12.6389 15.3824 12.6389 18.9182C12.6389 22.4539 15.5333 25.3202 19.1038 25.3202Z" fill="#EC0000"/></svg>',
            className: 'osc-ideas-on-map-icon',
            iconSize: L.point(39, 50),
            iconAnchor: [20, 50]
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
      var exception = _ref3.exception;
      var self = this;
      self.markers.forEach(function (marker) {
        if (exception && marker.data && marker.data.id && exception.id == marker.data.id) {
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
  }]);

  return Map;
}(_nlmap_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]);



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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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

var Search = /*#__PURE__*/function (_React$Component) {
  _inherits(Search, _React$Component);

  var _super = _createSuper(Search);

  function Search(props) {
    var _this;

    _classCallCheck(this, Search);

    _this = _super.call(this, props);
    var defaultConfig = {};
    _this.config = Object.assign(defaultConfig, _this.props.config || {});
    _this.config.searchIn = props.config.searchIn || ['ideas', 'addresses'];
    _this.config.placeholder = props.config.placeholder || 'Zoek op trefwoord';
    _this.config.doSearchFunction = _this.config.doSearchFunction || _this.doSearchx.bind(_assertThisInitialized(_this));
    _this.updateSearchResult = _this.updateSearchResult.bind(_assertThisInitialized(_this));
    _this.state = {
      searchValue: '',
      searchResult: {
        locations: [],
        ideas: []
      },
      showSuggestions: false
    };
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
          suggestionDividerHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "osc-search-suggestions-hr"
          });
        }

        var addressSuggestionsHTML = null;

        if (this.config.searchIn.includes('addresses')) {
          addressSuggestionsHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Adressen:", self.state.searchResult.locations.map(function (result, i) {
            var text = result.text.replace(new RegExp(self.state.searchValue, 'ig'), function ($0) {
              return '<strong>' + $0 + '</strong>';
            });
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
          ideasSuggestionsHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.config.ideaName, ":", self.state.searchResult.ideas.map(function (result, i) {
            var text = result.text.replace(new RegExp(self.state.searchValue, 'ig'), function ($0) {
              return '<strong>' + $0 + '</strong>';
            });
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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

        suggestionsHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "osc-search-suggestions",
          ref: function ref(el) {
            return self.suggestions = el;
          }
        }, addressSuggestionsHTML, suggestionDividerHTML, ideasSuggestionsHTML);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: self.id,
        className: self.props.className || 'osc-search',
        ref: function ref(el) {
          return self.instance = el;
        }
      }, suggestionsHTML, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
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
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
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
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



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

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/*! exports provided: Component, Libs, Forms, ChoicesGuide, ChoicesGuideResult, NLMap, IdeasOnMap, IdeasDetails, IdeasImage, Lightbox, PreviousNextButtonBlock, Poll, Reactions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/es/array/find */ "./node_modules/core-js/es/array/find.js");
/* harmony import */ var core_js_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_es_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.less */ "./src/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/index.jsx */ "./src/component/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _component_index_jsx__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _libs_index_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./libs/index.jsx */ "./src/libs/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Libs", function() { return _libs_index_jsx__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _forms_index_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forms/index.jsx */ "./src/forms/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Forms", function() { return _forms_index_jsx__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _choices_guide_index_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./choices-guide/index.jsx */ "./src/choices-guide/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChoicesGuide", function() { return _choices_guide_index_jsx__WEBPACK_IMPORTED_MODULE_8__["ChoicesGuide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChoicesGuideResult", function() { return _choices_guide_index_jsx__WEBPACK_IMPORTED_MODULE_8__["ChoicesGuideResult"]; });

/* harmony import */ var _nlmap_index_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nlmap/index.jsx */ "./src/nlmap/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NLMap", function() { return _nlmap_index_jsx__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _lightbox_index_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lightbox/index.jsx */ "./src/lightbox/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lightbox", function() { return _lightbox_index_jsx__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _ideas_on_map_index_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ideas-on-map/index.jsx */ "./src/ideas-on-map/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdeasOnMap", function() { return _ideas_on_map_index_jsx__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _idea_details_index_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./idea-details/index.jsx */ "./src/idea-details/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdeasDetails", function() { return _idea_details_index_jsx__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _idea_image_index_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./idea-image/index.jsx */ "./src/idea-image/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdeasImage", function() { return _idea_image_index_jsx__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _previous_next_button_block_index_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./previous-next-button-block/index.jsx */ "./src/previous-next-button-block/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PreviousNextButtonBlock", function() { return _previous_next_button_block_index_jsx__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _poll_index_jsx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./poll/index.jsx */ "./src/poll/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Poll", function() { return _poll_index_jsx__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _reactions_index_jsx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./reactions/index.jsx */ "./src/reactions/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Reactions", function() { return _reactions_index_jsx__WEBPACK_IMPORTED_MODULE_16__["default"]; });

// polyfills
//import 'core-js/es/map';
//import 'core-js/es/set';

 // react


 // import css to make sure it is generated in the result

 // the module















/***/ }),

/***/ "./src/index.less":
/*!************************!*\
  !*** ./src/index.less ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
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

var OpenStadComponentLightbox = /*#__PURE__*/function (_React$Component) {
  _inherits(OpenStadComponentLightbox, _React$Component);

  var _super = _createSuper(OpenStadComponentLightbox);

  function OpenStadComponentLightbox(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentLightbox);

    _this = _super.call(this, props);
    _this.defaultConfig = {};
    _this.config = merge__WEBPACK_IMPORTED_MODULE_0___default.a.recursive(_this.defaultConfig, _this.config, props.config || {});
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-lightbox",
        onClick: function onClick() {
          _this2.hideLightbox();
        },
        ref: function ref(el) {
          return self.instance = el;
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-close-button",
        onClick: function onClick(e) {
          return self.hideLightbox(e);
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-lightbox-main-container",
        ref: function ref(el) {
          return self.mainContainer = el;
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-image-container",
        ref: function ref(el) {
          return self.mainImageContainer = el;
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: self.state.images[self.state.startIndex] && self.state.images[self.state.startIndex].src,
        ref: function ref(el) {
          return self.mainImage = el;
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-lightbox-navigation-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-lightbox-navigation",
        ref: function ref(el) {
          return self.navigationContainer = el;
        }
      }, self.state.images.map(function (image, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
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
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: image.src,
          ref: function ref(el) {
            return self["lighbox-image-".concat(i)] = el;
          }
        }));
      }))));
    }
  }]);

  return OpenStadComponentLightbox;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



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

/***/ "./src/poll/component/poll-form.jsx":
/*!******************************************!*\
  !*** ./src/poll/component/poll-form.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentPollForm; });
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _libs_index_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../libs/index.jsx */ "./src/libs/index.jsx");
/* harmony import */ var _forms_index_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../forms/index.jsx */ "./src/forms/index.jsx");
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

var OpenStadComponentPollForm = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentPollForm, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentPollForm);

  function OpenStadComponentPollForm(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentPollForm);

    _this = _super.call(this, props);

    var self = _assertThisInitialized(_this);

    self.defaultConfig = {
      user: {},
      questionMinLength: 30,
      questionMaxLength: 500,
      titleMinLength: 30,
      titleMaxLength: 500,
      descriptionMinLength: 30,
      descriptionMaxLength: 500,
      allowChoiceTitles: true
    };
    self.config = merge__WEBPACK_IMPORTED_MODULE_0___default.a.recursive(self.defaultConfig, props.config || {});
    self.state = {
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
        _libs_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"].user.getUser({
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
      var headers = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"].api.getHeaders(self.config);
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
        var userRole = this.props.user && this.props.user.role; // todo: owner; dus dit moet anders
        // todo: nieuwe rollen structuur

        return requiredUserRole == 'anonymous' && userRole || requiredUserRole == 'member' && (userRole == 'member' || userRole == 'admin') || requiredUserRole == 'admin' && userRole == 'admin';
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

        var headers = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"].api.getHeaders(self.config);
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
        formIntro = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-intro"
        }, self.config.formIntro);
      }

      var submitButtonHTML = null;

      if (self.canSubmit()) {
        submitButtonHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-align-right-container"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          className: "osc-button-blue",
          onClick: function onClick() {
            if (self.config.onFinished) self.config.onFinished();
          }
        }, "Terug"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          onClick: function onClick(e) {
            if (!self.state.isBusy) self.submitForm();
          },
          className: "osc-button-blue osc-margin-left".concat(self.state.isBusy ? ' osc-disabled' : '')
        }, "Verzenden"));
      } else {
        submitButtonHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-align-right-container"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          className: "osc-button-blue",
          onClick: function onClick() {
            if (self.config.onFinished) self.config.onFinished();
          }
        }, "Terug"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          onClick: function onClick() {
            _libs_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"].localStorage.set('osc-reactions-login-pending', true);
            document.location.href = self.config.loginUrl;
          },
          className: "osc-button-blue osc-not-logged-in-button osc-margin-left"
        }, "Inloggen"));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: self.divId,
        className: "osc-form",
        ref: function ref(el) {
          return self.instance = el;
        }
      }, formIntro, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "Vraag"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_4__["default"].InputWithCounter, {
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
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "Keuzemogelijkheden"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
        className: "osc-poll-form-choices"
      }, poll && poll.choices && Object.keys(poll.choices).sort().map(function (key) {
        var choice = poll.choices[key];
        var titleInputHTML = null;
        if (self.config.allowChoiceTitles) titleInputHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_4__["default"].InputWithCounter, {
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
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
          className: "osc-poll-form-choice",
          key: "osc-key-".concat(key)
        }, titleInputHTML, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_4__["default"].InputWithCounter, {
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
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "osc-add-choice-button",
        onClick: function onClick(e) {
          return _this2.addChoice();
        }
      }, "Nog een keuzemogelijkheid toevoegen"), submitButtonHTML);
    }
  }]);

  return OpenStadComponentPollForm;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]);



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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _libs_index_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../libs/index.jsx */ "./src/libs/index.jsx");
/* harmony import */ var _forms_index_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../forms/index.jsx */ "./src/forms/index.jsx");
/* harmony import */ var _poll_form_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./poll-form.jsx */ "./src/poll/component/poll-form.jsx");
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

var OpenStadComponentPoll = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentPoll, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentPoll);

  function OpenStadComponentPoll(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentPoll);

    _this = _super.call(this, props);

    var self = _assertThisInitialized(_this);

    self.id = props.id || "osc-poll-".concat(parseInt(1000000 * Math.random()));
    self.defaultConfig = {
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
    };
    self.config = merge__WEBPACK_IMPORTED_MODULE_1___default.a.recursive(self.defaultConfig, self.config, props.config || {});
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
        _libs_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"].user.getUser({
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
      } // document.addEventListener('osc-new-reaction-stored', function(event) {
      //   self.onNewPolltored(event.detail);
      // });

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
      var headers = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"].api.getHeaders(self.config);
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
        var headers = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"].api.getHeaders(self.config);
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
        var headers = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"].api.getHeaders(self.config);
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
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          id: this.id,
          className: self.props.className || 'osc-poll',
          ref: function ref(el) {
            _this2.instance = el;
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_poll_form_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
            submitButtonHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
              onClick: function onClick(e) {
                if (!self.state.isBusy) self.submitVote();
              },
              className: "osc-button-blue".concat(!self.isValid() ? ' osc-disabled' : '')
            }, "Stemmen");
          } else {
            submitButtonHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
              onClick: function onClick() {
                _libs_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"].localStorage.set('osc-poll-login-pending', true);
                document.location.href = self.config.loginUrl;
              },
              className: "osc-button-blue osc-not-logged-in-button"
            }, "Inloggen");
          }

          var showResultButtonHTML = null;
          if (self.config.allowShowResultsIfNotVoted && !(poll.userVote || self.state.showResult)) showResultButtonHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            className: "osc-show-result-button",
            onClick: function onClick(e) {
              return _this2.setShowResult();
            }
          }, "Resultaat bekijken");
          questionHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "osc-poll-question osc-form"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_4__["default"].Radios, {
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
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "osc-poll-question-buttons"
          }, submitButtonHTML, showResultButtonHTML));
        }

        var resultHTML = null;

        if (poll && (poll.userVote || self.state.showResult)) {
          var showQuestionButtonHTML = null;
          if (!self.state.showQuestion && !(poll && poll.choices && !poll.userVote)) showQuestionButtonHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            className: "osc-show-question-button",
            onClick: function onClick(e) {
              return _this2.setShowQuestion();
            }
          }, "Stem aanpassen");
          var totalVotesHTML = null;

          if (poll.voteCount && poll.voteCount.total) {
            var xx = poll.voteCount.total == 1 ? 'stem' : 'stemmen';
            totalVotesHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Totaal ", poll.voteCount.total, " ", xx, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null));
          }

          resultHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
            className: "osc-choices"
          }, Object.keys(poll.choices).sort().map(function (key) {
            var choice = poll.choices[key];
            var titleHTML = null;
            if (self.config.allowChoiceTitles && choice.title) titleHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, choice.title);
            var descriptionHTML = null;
            if (choice.description) descriptionHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, choice.description);
            var percentageHTML = null;

            if (self.config.withPercentage) {
              percentageHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                className: "osc-percentage"
              }, choice.votesPrc, "%");
            }

            var scoreHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "osc-choice-default"
            }, titleHTML, descriptionHTML, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "osc-choice-bar".concat(self.config.withPercentage ? ' osc-with-percentage' : '')
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "osc-choice-bar-mask"
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "osc-choice-bar-progress",
              style: {
                width: (choice.votesPrc || 0) + '%'
              }
            })), percentageHTML);
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
              className: "osc-choice",
              key: "osc-key-".concat(key)
            }, scoreHTML);
          }), totalVotesHTML, showQuestionButtonHTML);
        }

        var editButtonsHTML = null;

        if (self.state.poll && self.state.poll.can && self.state.poll.can.edit) {
          editButtonsHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "osc-editbuttons"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            className: "osc-editbutton osc-edit",
            onClick: function onClick(event) {
              return self.showEditForm();
            }
          }, "Bewerk poll"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            className: "osc-editbutton osc-delete",
            onClick: function onClick(event) {
              if (confirm('Weet u het zeker')) self.deletePoll();
            }
          }, "Verwijder poll"));
        }

        var voteSucceededHTML = null;

        if (self.state.showVoteSucceeded) {
          voteSucceededHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "osc-vote-succeeded"
          }, "Uw stem is opgeslagen");
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          id: this.id,
          className: self.props.className || 'osc-poll',
          ref: function ref(el) {
            _this2.instance = el;
          }
        }, editButtonsHTML, voteSucceededHTML, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, poll.question), questionHTML, resultHTML, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null));
      }
    }
  }]);

  return OpenStadComponentPoll;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]);



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

/***/ "./src/previous-next-button-block/component/previous-next-button-block.jsx":
/*!*********************************************************************************!*\
  !*** ./src/previous-next-button-block/component/previous-next-button-block.jsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentPreviousNextButtonBlock; });
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
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

var OpenStadComponentPreviousNextButtonBlock = /*#__PURE__*/function (_React$Component) {
  _inherits(OpenStadComponentPreviousNextButtonBlock, _React$Component);

  var _super = _createSuper(OpenStadComponentPreviousNextButtonBlock);

  function OpenStadComponentPreviousNextButtonBlock(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentPreviousNextButtonBlock);

    _this = _super.call(this, props);
    _this.defaultConfig = {
      previousAction: props.previousAction,
      nextAction: props.nextAction,
      previousUrl: props.previousUrl,
      nextUrl: props.nextUrl,
      previousLabel: props.previousLabel || 'Vorige',
      nextLabel: props.nextLabel || 'Volgende'
    };
    _this.config = merge__WEBPACK_IMPORTED_MODULE_0___default.a.recursive(_this.defaultConfig, _this.config, props.config || {});
    return _this;
  }

  _createClass(OpenStadComponentPreviousNextButtonBlock, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var self = this;
      var previousButtonHTML;
      var previousAction = this.config.previousAction;
      if (this.config.previousUrl) previousAction = function previousAction() {
        document.location.href = "".concat(_this2.config.previousUrl);
      };

      if (previousAction) {
        previousButtonHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-previous-button",
          onClick: function onClick(args) {
            previousAction(args);
          }
        }, this.config.previousLabel);
      }

      var nextButtonHTML;
      var nextAction = this.config.nextAction;
      if (this.config.nextUrl) nextAction = function nextAction() {
        document.location.href = "".concat(_this2.config.nextUrl);
      };

      if (nextAction) {
        nextButtonHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-next-button",
          onClick: function onClick(args) {
            nextAction(args);
          }
        }, this.config.nextLabel);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-previous-next-button-block",
        ref: function ref(el) {
          return self.instance = el;
        }
      }, previousButtonHTML, nextButtonHTML);
    }
  }]);

  return OpenStadComponentPreviousNextButtonBlock;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



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

/***/ "./src/reactions/component/reaction-form.jsx":
/*!***************************************************!*\
  !*** ./src/reactions/component/reaction-form.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentReactionForm; });
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _libs_index_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../libs/index.jsx */ "./src/libs/index.jsx");
/* harmony import */ var _forms_index_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../forms/index.jsx */ "./src/forms/index.jsx");
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

var OpenStadComponentReactionForm = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentReactionForm, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentReactionForm);

  function OpenStadComponentReactionForm(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentReactionForm);

    _this = _super.call(this, props);

    var self = _assertThisInitialized(_this);

    self.defaultConfig = {
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
    };
    self.config = merge__WEBPACK_IMPORTED_MODULE_0___default.a.recursive(self.defaultConfig, props.config || {});
    self.config.loginUrl = self.config.loginUrl || '/oauth/login?returnTo=' + encodeURIComponent(document.location.href);
    self.state = {
      description: self.config.description || '',
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
      return _libs_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"].user.hasRole(user, requiredUserRole);
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
        var headers = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"].api.getHeaders(self.config);
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
        formIntro = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-intro"
        }, self.config.formIntro);
      }

      var submitButtonHTML = null;

      if (self.canSubmit()) {
        submitButtonHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-align-right-container"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          onClick: function onClick(e) {
            if (!self.state.isBusy) self.submitForm();
          },
          className: "osc-button-blue".concat(!self.state.isValid || self.state.isBusy ? ' osc-disabled' : '')
        }, "Verzenden"));
      } else {
        submitButtonHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-align-right-container"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          onClick: function onClick() {
            _libs_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"].localStorage.set('osc-reactions-login-pending', true);
            document.location.href = self.config.loginUrl;
          },
          className: "osc-button-blue osc-not-logged-in-button"
        }, "Inloggen"));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: self.divId,
        className: "",
        ref: function ref(el) {
          return self.instance = el;
        }
      }, formIntro, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_4__["default"].InputWithCounter, {
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
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]);



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
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _libs_index_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../libs/index.jsx */ "./src/libs/index.jsx");
/* harmony import */ var _reaction_form_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reaction-form.jsx */ "./src/reactions/component/reaction-form.jsx");
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

var OpenStadComponentReaction = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentReaction, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentReaction);

  function OpenStadComponentReaction(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentReaction);

    _this = _super.call(this, props);

    var self = _assertThisInitialized(_this);

    self.id = props.id || "osc-reaction-".concat(parseInt(1000000 * Math.random()));
    self.defaultConfig = {
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
    };
    self.config = Object.assign(self.defaultConfig, props.config || {});
    self.state = {
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
      this.storedListener = document.addEventListener('osc-new-reaction-stored', function (event) {
        self.onNewReactionStored(event.detail);
      });
      this.editedListener = document.addEventListener('osc-reaction-edited', function (event) {
        self.onReactionEdited(event.detail);
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('osc-new-reaction-stored', this.storedListener);
      document.removeEventListener('osc-reaction-edited', this.editedListener);
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
      var headers = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_4__["default"].api.getHeaders(self.config);
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
      var headers = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_4__["default"].api.getHeaders(self.config);
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
      console.log('--------------------');
      console.log(data.user);
      var isAdmin = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_4__["default"].user.hasRole(data.user, 'editor') ? 'osc-is-admin' : '';
      var metadataHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-reaction-user ".concat(isAdmin)
      }, data.user.nickName || data.user.fullName || "".concat(data.user.firstName, " ").concat(data.user.lastName));
      var menuHTML = null;

      if (self.canEdit() && self.canDelete()) {
        menuHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-reaction-menu".concat(self.state.isMenuActive ? ' osc-reaction-hamburger-active' : ''),
          onClick: function onClick() {
            self.showMenu();
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          className: "osc-reaction-delete",
          title: "Argument verwijderen",
          onClick: function onClick() {
            if (confirm('Weet je het zeker?')) self.submitDelete();
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          className: "osc-reaction-edit",
          title: "Argument bewerken",
          onClick: function onClick() {
            return self.toggleEditForm();
          }
        }));
      }

      var descriptionHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-reaction-description"
      }, data.description);

      if (self.state.editMode) {
        descriptionHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "osc-reaction-description"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_reaction_form_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
        likeButtonHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          className: "osc-reaction-like-button".concat((typeof self.state.hasUserVoted != 'undefined' ? self.state.hasUserVoted : data.hasUserVoted) ? ' osc-reaction-like-button-hasvoted' : ''),
          onClick: function onClick() {
            return self.submitLike();
          }
        }, "Mee eens (", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, (typeof self.state.yes != 'undefined' ? self.state.yes : data.yes) | 0), ")");
      }

      var replyButtonHTML = null;
      var replyFormHTML = null;

      if (self.canReply() && !self.config.isClosed) {
        replyButtonHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
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
          replyFormHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            id: "osc-reaction-".concat(data.id),
            className: "osc-reply"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_reaction_form_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
        repliesHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
          className: "osc-reactions-list"
        }, data.reactions.map(function (reaction) {
          var key = "osc-reaction-key-".concat(reaction.id || parseInt(1000000 * Math.random()));
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
            key: key
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OpenStadComponentReaction, {
            config: self.config,
            className: "osc-reply",
            user: self.state.user,
            data: reaction
          }));
        }));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "osc-reaction-".concat(data.id),
        className: self.props.className || 'osc-reaction'
      }, menuHTML, metadataHTML, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-reaction-date"
      }, data.createDateHumanized), descriptionHTML, likeButtonHTML, replyButtonHTML), replyFormHTML, repliesHTML);
    }
  }]);

  return OpenStadComponentReaction;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"]);



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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _libs_index_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../libs/index.jsx */ "./src/libs/index.jsx");
/* harmony import */ var _reaction_form_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reaction-form.jsx */ "./src/reactions/component/reaction-form.jsx");
/* harmony import */ var _reaction_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reaction.jsx */ "./src/reactions/component/reaction.jsx");
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

var OpenStadComponentReactions = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentReactions, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentReactions);

  function OpenStadComponentReactions(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentReactions);

    _this = _super.call(this, props);

    var self = _assertThisInitialized(_this);

    self.id = props.id || "osc-reactions-".concat(parseInt(1000000 * Math.random()));
    self.defaultConfig = {
      scrollToNewReaction: true,
      isClosed: false,
      closedText: 'De reactiemogelijkheid is gesloten',
      sentiment: undefined,
      siteId: null,
      ideaId: null,
      title: null,
      descriptionMinLength: 30,
      descriptionMaxLength: 500,
      user: null,
      loginUrl: '',
      api: {
        url: null,
        headers: null
      },
      requiredUserRole: 'member',
      placeholder: '',
      formIntro: ''
    };
    self.config = merge__WEBPACK_IMPORTED_MODULE_1___default.a.recursive(self.defaultConfig, self.config, props.config || {});
    self.state = {
      user: self.config.user,
      reactions: []
    };
    return _this;
  }

  _createClass(OpenStadComponentReactions, [{
    key: "componentDidMount",
    value: function componentDidMount(prevProps, prevState) {
      var self = this; // user

      if (!(self.state.user && self.state.user.role)) {
        _libs_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"].user.getUser({
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

      this.storedListener = document.addEventListener('osc-new-reaction-stored', function (event) {
        self.onNewReactionStored(event.detail);
      });
      this.editedListener = document.addEventListener('osc-reaction-edited', function (event) {
        self.onReactionEdited(event.detail);
      });
      this.deletedListener = document.addEventListener('osc-reaction-deleted', function (event) {
        self.onReactionDeleted(event.detail);
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('osc-new-reaction-stored', this.storedListener);
      document.removeEventListener('osc-reaction-edited', this.editedListener);
      document.removeEventListener('osc-reaction-deleted', this.deletedListener);
    }
  }, {
    key: "fetchData",
    value: function fetchData(next) {
      var self = this;
      var url = "".concat(self.config.api && self.config.api.url, "/api/site/").concat(self.config.siteId, "/idea/").concat(self.config.ideaId, "/argument?sentiment=").concat(self.config.sentiment, "&withUser=1&withUserVote=1&withVoteCount=1&includeReactionsOnReactions=1");
      var headers = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"].api.getHeaders(self.config);
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
      var reactions = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "osc-reactions-list"
      }, self.state.reactions.map(function (reaction) {
        var key = "osc-reaction-key-".concat(reaction.id || parseInt(1000000 * Math.random()));
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: key
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reaction_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
          config: self.config,
          user: self.state.user,
          data: _objectSpread({}, reaction)
        }));
      }));
      var title = self.config.title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, self.config.title) : null;
      var reactionFormHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reaction_form_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
        config: self.config,
        user: self.state.user
      });

      if (self.config.isClosed) {
        if (self.config.closedText) {
          reactionFormHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "osc-closed-text"
          }, self.config.closedText);
        } else {
          reactionFormHTML = null;
        }
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: this.id,
        className: self.props.className || 'osc-reactions',
        ref: function ref(el) {
          _this3.instance = el;
        }
      }, title, reactionFormHTML, reactions, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null));
    }
  }]);

  return OpenStadComponentReactions;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]);



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
//# sourceMappingURL=all.js.map