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

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




'use strict';

var OpenStadComponentDefaultInput = /*#__PURE__*/function (_React$Component) {
  _inherits(OpenStadComponentDefaultInput, _React$Component);

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
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



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
/* harmony import */ var _select_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select.jsx */ "./src/forms/component/select.jsx");
/* harmony import */ var _textinput_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./textinput.jsx */ "./src/forms/component/textinput.jsx");
/* harmony import */ var _textarea_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./textarea.jsx */ "./src/forms/component/textarea.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
        case 'select':
          fieldHTML = /*#__PURE__*/React.createElement(_select_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
            config: self.config,
            onChange: self.handleOnChange,
            ref: function ref(el) {
              return self.input = el;
            }
          });
          break;

        case 'text':
          fieldHTML = /*#__PURE__*/React.createElement(_textinput_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
            config: self.config,
            onChange: self.handleOnChange,
            ref: function ref(el) {
              return self.input = el;
            }
          });
          break;

        case 'textarea':
          fieldHTML = /*#__PURE__*/React.createElement(_textarea_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
            config: self.config,
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

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
      validateAction: null,
      submitAction: null,
      title: null,
      intro: null,
      fields: []
    };
    self.config = merge__WEBPACK_IMPORTED_MODULE_0___default.a.recursive(self.defaultConfig, self.config, props.config || {});
    console.log('xxxx');
    console.log(self.config);
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
      console.log('Form validate');
      var self = this;
      var isValid = true;
      self.fields.forEach(function (field) {
        if (!field.validate({
          showErrors: showErrors
        })) {
          isValid = false;
        }
      });
      console.log(isValid);
      return isValid;
    }
  }, {
    key: "handleOnChange",
    value: function handleOnChange(data) {
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
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




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
    return _this;
  }

  _createClass(FormfieldInputWithCounter, [{
    key: "isValid",
    value: function isValid() {
      var state = {};
      state.isValid = true;
      state.warning = null;

      if (this.state.valueLength < this.config.minLength) {
        state.warning = "Je ".concat(this.config.name, " is te kort");
        state.isValid = false;
      }

      if (this.state.valueLength > this.config.maxLength) {
        state.warning = "Je ".concat(this.config.name, " is te lang");
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
        this.onChange(data);
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
    value: function onInputKeyUp() {
      var state = {};
      var valueLength = this.input.value.length;
      state.value = this.input.value;
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
            return _this2['form-warning-theme'] = el;
          }
        }, self.state.warning);
      }

      var inputHTML = null;

      switch (self.config.inputType) {
        case 'textarea':
          inputHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
            key: self.key,
            ref: function ref(el) {
              return self.input = el;
            },
            value: this.props.value,
            disabled: this.props.disabled,
            placeholder: this.config.placeholder,
            onChange: function onChange(e) {
              return self.handleOnChange({
                value: self.input.value
              });
            },
            onKeyUp: function onKeyUp(e) {
              return self.onInputKeyUp(e);
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
            value: this.props.value,
            disabled: this.props.disabled,
            placeholder: this.config.placeholder,
            onChange: function onChange(e) {
              return self.handleOnChange({
                value: self.input.value
              });
            },
            onKeyUp: function onKeyUp(e) {
              return self.onInputKeyUp(e);
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

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
        }, "Je hebt nog geen keuze gemaakt");
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-select"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
        value: this.state.value,
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
          value: choice.value,
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

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
        }, "Je hebt nog geen niets ingevuld");
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-textarea"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
        type: "text",
        value: this.state.value,
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

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
        }, "Je hebt nog geen niets ingevuld");
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-textinput"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "text",
        value: this.state.value,
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

  return OpenStadComponentSelect;
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
/* harmony import */ var _component_input_with_counter_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/input-with-counter.jsx */ "./src/forms/component/input-with-counter.jsx");
/* harmony import */ var _component_textinput_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/textinput.jsx */ "./src/forms/component/textinput.jsx");
/* harmony import */ var _component_textarea_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/textarea.jsx */ "./src/forms/component/textarea.jsx");
/* harmony import */ var _component_slider_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/slider.jsx */ "./src/forms/component/slider.jsx");
// polyfills
//import 'core-js/es/map';
//import 'core-js/es/set';
 // react


 // import css to make sure it is generated in the result

 // the module






/* harmony default export */ __webpack_exports__["default"] = ({
  Form: _component_form_jsx__WEBPACK_IMPORTED_MODULE_4__["default"],
  InputWithCounter: _component_input_with_counter_jsx__WEBPACK_IMPORTED_MODULE_5__["default"],
  Text: _component_textinput_jsx__WEBPACK_IMPORTED_MODULE_6__["default"],
  Textarea: _component_textarea_jsx__WEBPACK_IMPORTED_MODULE_7__["default"],
  Slider: _component_slider_jsx__WEBPACK_IMPORTED_MODULE_8__["default"]
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
/* harmony import */ var _reactions_index_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../reactions/index.jsx */ "./src/reactions/index.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
      argument: {}
    };
    _this.config = merge__WEBPACK_IMPORTED_MODULE_0___default.a.recursive(defaultConfig, _this.config, _this.props.config || {});
    _this.state = {
      idea: _this.props.idea
    };
    return _this;
  }

  _createClass(IdeasDetails, [{
    key: "componentDidMount",
    value: function componentDidMount(prevProps, prevState) {
      var self = this;

      self.storedListener = function (event) {
        self.onReactionStored(event.detail);
      };

      document.addEventListener('osc-reaction-stored', self.storedListener);

      self.deletedListener = function (event) {
        self.onReactionDeleted(event.detail);
      };

      document.addEventListener('osc-reaction-deleted', self.deletedListener);
      self.fetchData();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('osc-reaction-stored', this.storedListener);
      document.removeEventListener('osc-reaction-deleted', this.deletedListener);
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
    key: "onReactionStored",
    value: function onReactionStored(data) {
      this.state.idea.argCount++;
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
    key: "fetchData",
    value: function fetchData() {
      var self = this;
      var ideaId = self.config.ideaId || this.state.idea && this.state.idea.id;
      if (!ideaId) return;
      var url = "".concat(self.config.api.url, "/api/site/").concat(self.config.siteId, "/idea/").concat(ideaId, "?includeVoteCount=1&includeArguments=1&includeUser=1&includeUserVote=1");
      var headers = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"].api.getHeaders(self.config);
      fetch(url, {
        headers: headers
      }).then(function (response) {
        if (!response.ok) throw Error('Error fechting detail');
        return response.json();
      }).then(function (json) {
        var idea = json;
        idea.image = idea.posterImage && idea.posterImage.key || idea.extraData && idea.extraData.images && idea.extraData.images[0] || "https://stemvanwest.amsterdam.nl/img/placeholders/idea.jpg";
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

      if (self.config.labels && self.props.label) {
        console.log(self.config.labels[self.props.label]);
        labelHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "ocs-idea-label",
          style: {
            color: self.config.labels[self.props.label].color,
            backgroundColor: self.config.labels[self.props.label].backgroundColor
          }
        }, self.config.labels[self.props.label].text);
      }

      var editButtonsHTML = null;

      if (self.config.user && self.config.user.role && self.config.user.role == 'admin') {
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

      console.log(idea);
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
        className: "osc-image",
        style: {
          backgroundImage: "url(".concat(idea.image, ")")
        }
      }), labelHTML, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-details-sharebuttons"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "osc-share-facebook",
        target: "_blank",
        href: 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(document.location.href)
      }, "Facebook")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "osc-share-twitter",
        target: "_blank",
        href: 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(document.location.href)
      }, "Twitter")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "osc-share-email",
        target: "_blank",
        href: 'mailto:?subject=' + encodeURIComponent(eval("idea.".concat(self.config.titleField))) + '&body=' + encodeURIComponent(document.location.href)
      }, "Email")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "osc-share-whatsapp",
        target: "_blank",
        href: 'https://wa.me/?text=' + encodeURIComponent(document.location.href)
      }, "WhatsApp")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-details-stats"
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
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Reacties"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#reactions",
        className: "osc-no-of-reactions"
      }, idea.argCount || 0, " reacties"), editButtonsHTML)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: ""
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ocs-gray-text"
      }, "Door "), idea.user.nickName || idea.user.fullName || idea.user.firstName + ' ' + idea.user.lastName, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ocs-gray-text"
      }, " op "), idea.createDateHumanized, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ocs-gray-text"
      }, "\xA0\xA0|\xA0\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ocs-gray-text"
      }, "Thema: "), idea.extraData.theme), modBreakHTML, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "osc-details-summary"
      }, idea.summary), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "osc-details-description"
      }, idea.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "reactions",
        className: "osc-reactions-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Reacties")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_reactions_index_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
        config: _objectSpread({}, self.config.argument, {
          api: self.config.api,
          user: self.config.user,
          siteId: self.config.siteId,
          ideaId: idea.id
        })
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

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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

/***/ "./src/ideas-on-map/component/filterbar.jsx":
/*!**************************************************!*\
  !*** ./src/ideas-on-map/component/filterbar.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filterbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _search_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.jsx */ "./src/ideas-on-map/component/search.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
      areas: props.config && props.config.areas || []
    };
    _this.config = Object.assign(defaultConfig, _this.props.config || {});
    _this.state = {
      selectedType: undefined,
      types: _this.config.types,
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
        areasButtonHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "osc-area-selector-button",
          onClick: function onClick() {
            return self.toggleMobileActiveSelector('area');
          }
        });
        areasHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "osc-area-selector-container".concat(self.state.mobileActiveSelector == 'area' ? ' osc-is-active' : '')
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
          value: self.state.selectedArea,
          onChange: function onChange() {
            return self.handleAreaChange(self.areaSelector.value);
          },
          className: "osc-default-select osc-margin-right osc-area-selector",
          ref: function ref(el) {
            return self.areaSelector = el;
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "0"
        }, "Alle gebieden"), ";", self.state.areas.map(function (area, i) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
            key: 'area-option-' + i
          }, area.name);
        })));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: self.id,
        className: self.props.className || 'osc-filterbar',
        ref: function ref(el) {
          return self.instance = el;
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "osc-search-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "osc-search-button",
        onClick: function onClick() {
          return self.toggleMobileActiveSelector('search');
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_search_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        config: _objectSpread({}, this.config),
        className: "osc-search".concat(self.state.mobileActiveSelector == 'search' ? ' osc-is-active' : '')
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "osc-selectors-container osc-align-right-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "osc-type-selector-button".concat(self.state.selectedType && self.state.selectedType != '0' ? ' osc-active' : ''),
        onClick: function onClick() {
          return self.toggleMobileActiveSelector('type');
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "osc-type-selector-container".concat(self.state.mobileActiveSelector == 'type' ? ' osc-is-active' : '')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        value: self.state.selectedType,
        onChange: function onChange() {
          return self.handleTypeChange(self.typeSelector.value);
        },
        className: "osc-default-select osc-margin-right osc-type-selector",
        ref: function ref(el) {
          return self.typeSelector = el;
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "0"
      }, "Alle thema's"), ";", self.state.types.map(function (type, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          key: 'type-option-' + i
        }, type.name);
      }))), areasButtonHTML, areasHTML, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
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
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/index.jsx */ "./src/libs/index.jsx");
/* harmony import */ var _openstad_component_formelements_image_upload_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./openstad-component-formelements/image-upload.jsx */ "./src/ideas-on-map/component/openstad-component-formelements/image-upload.jsx");
/* harmony import */ var _openstad_component_formelements_input_with_counter_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./openstad-component-formelements/input-with-counter.jsx */ "./src/ideas-on-map/component/openstad-component-formelements/input-with-counter.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





'use strict';

var IdeasForm = /*#__PURE__*/function (_React$Component) {
  _inherits(IdeasForm, _React$Component);

  var _super = _createSuper(IdeasForm);

  function IdeasForm(props) {
    var _this;

    _classCallCheck(this, IdeasForm);

    _this = _super.call(this, props); // config

    var defaultConfig = {
      user: {},
      ideaId: null,
      titleMinLength: 10,
      titleMaxLength: 20,
      summaryMinLength: 20,
      summaryMaxLength: 140,
      descriptionMinLength: 140,
      descriptionMaxLength: 5000
    }; // todo: normaal oplossen

    _this.config = Object.assign(defaultConfig, _this.config, _this.props.config || {});
    _this.state = {
      formfields: {
        id: _this.props.idea.id || '',
        title: _this.props.idea.title || '',
        summary: _this.props.idea.summary || '',
        description: _this.props.idea.description || '',
        type: _this.props.idea.extraData && _this.props.idea.extraData.type || '',
        theme: _this.props.idea.extraData && _this.props.idea.extraData.theme || '',
        userWhat: _this.props.idea.extraData && _this.props.idea.extraData['userWhat'],
        userAge: _this.props.idea.extraData && _this.props.idea.extraData['userAge'],
        images: _this.props.idea.extraData && _this.props.idea.extraData.images || [],
        modBreak: _this.props.idea.modBreak || '',
        user: _this.props.idea.user || {}
      }
    };
    _this.handleFieldChange = _this.handleFieldChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(IdeasForm, [{
    key: "componentDidMount",
    value: function componentDidMount(prevProps, prevState) {}
  }, {
    key: "handleFieldChange",
    value: function handleFieldChange(name, value) {
      var state = _objectSpread({}, this.state);

      state.formfields[name] = value;
      this.setState(state);
      this.dispatchUpdateEditIdea(state.formfields); // tmp: type

      if (name == 'type') {
        if (this.state.formfields['type']) {
          this['form-warning-type'].style.display = 'none';
        }
      } // tmp: theme


      if (name == 'theme') {
        if (this.state.formfields['theme']) {
          this['form-warning-theme'].style.display = 'none';
        }
      } // tmp: userWhat


      if (name == 'userWhat') {
        if (this.state.formfields['userWhat']) {
          this['form-warning-userWhat'].style.display = 'none';
        }
      } // tmp: userAge


      if (name == 'userAge') {
        if (this.state.formfields['userAge']) {
          this['form-warning-userAge'].style.display = 'none';
        }
      }
    } // todo: als hanlefieldchange met meerder waarden in een { key: value } formaat gaat werken dan kan deze weg

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
        self['form-warning-location'].style.display = 'block';
        isValid = false;
      } // title


      if (!self.titleField.validate()) {
        isValid = false;
      } // summary


      if (!self.summaryField.validate()) {
        isValid = false;
      } // description


      if (!self.descriptionField.validate()) {
        isValid = false;
      } // type


      if (!self.state.formfields['type']) {
        self['form-warning-type'].style.display = 'block';
        isValid = false;
      } else {
        self['form-warning-type'].style.display = 'none';
      } // theme


      if (!self.state.formfields['theme']) {
        self['form-warning-theme'].style.display = 'block';
        isValid = false;
      } else {
        self['form-warning-theme'].style.display = 'none';
      } // userWhat


      if (!self.state.formfields['userWhat']) {
        self['form-warning-userWhat'].style.display = 'block';
        isValid = false;
      } else {
        self['form-warning-userWhat'].style.display = 'none';
      } // userAge


      if (!self.state.formfields['userAge']) {
        self['form-warning-userAge'].style.display = 'block';
        isValid = false;
      } else {
        self['form-warning-userAge'].style.display = 'none';
      } // images


      if (!self.imageField.validate()) {
        self['form-warning-image'].style.display = 'block';
        isValid = false;
      } else {
        self['form-warning-image'].style.display = 'none';
      } // time ?


      return isValid;
    }
  }, {
    key: "submitIdea",
    value: function submitIdea() {
      var self = this;

      if (!self.validateIdea()) {
        self.setState({
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
        title: self.state.formfields['title'],
        summary: self.state.formfields['summary'],
        description: self.state.formfields['description'],
        location: JSON.stringify(_objectSpread({
          "type": "Point"
        }, self.state.formfields['location'])),
        extraData: {
          type: self.state.formfields['type'],
          theme: self.state.formfields['theme'],
          images: self.state.formfields['images'],
          userWhat: self.state.formfields['userWhat'],
          userAge: self.state.formfields['userAge']
        }
      };

      if (self.config.user && self.config.user.role == 'admin') {
        body.modBreak = self.state.formfields['modBreak'];
      }

      var method = 'POST';

      if (typeof this.state.formfields.id == 'number') {
        method = 'PUT';
        url = url + '/' + this.state.formfields.id;
      }

      fetch(url, {
        method: method,
        headers: headers,
        body: JSON.stringify(body) // body data type must match "Content-Type" header

      }).then(function (response) {
        if (!response.ok) throw Error(response);
        return response.json();
      }).then(function (json) {
        var event = new window.CustomEvent('newIdeaStored', {
          detail: {
            idea: json
          }
        });
        document.dispatchEvent(event);
      })["catch"](function (err) {
        console.log('Niet goed');
        console.log(err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var self = this;
      var modBreakHTML = null;

      if (self.config.user && self.config.user.role == 'admin') {
        modBreakHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "osc-form-group"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Moderator reactie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_openstad_component_formelements_input_with_counter_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], _defineProperty({
          ref: function ref(el) {
            return self.input = el;
          },
          config: {
            name: "modBreak",
            inputType: 'textarea',
            minLength: 0,
            maxLength: 2000
          },
          value: this.state.formfields.modBreak,
          onChange: function onChange(data) {
            return self.handleFieldChange('modBreak', data.value);
          }
        }, "ref", function ref(el) {
          return self.modBreakField = el;
        })));
      }

      var formErrorsWarningHTML = null;

      if (self.state.showFormErrorsWarning) {
        formErrorsWarningHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "osc-form-errors-warning"
        }, "Niet alle velden zijn correct ingevuld. Scroll naar boven om te zien wat er mis gaat.");
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: self.id,
        className: self.props.className || 'osc-info-block-idea-form',
        ref: function ref(el) {
          return self.instance = el;
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "osc-spacer"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "osc-form"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Nieuw punt toevoegen"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "osc-form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Naam"), self.state.formfields.user && self.state.formfields.user.fullName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "osc-form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Een locatie vlakbij"), self.state.formfields.address || 'Geen adres gevonden', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "osc-form-warning",
        style: {
          display: 'none'
        },
        ref: function ref(el) {
          return _this2['form-warning-location'] = el;
        }
      }, "Geen locatie geselecteerd")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "osc-form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Titel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "osc-form-info"
      }, "Geef uw inzending een duidelijke naam, zodat anderen deze gemakkelijk kunnen vinden en direct snappen waar het over gaat."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_openstad_component_formelements_input_with_counter_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], _defineProperty({
        ref: function ref(el) {
          return self.input = el;
        },
        config: {
          name: "titel",
          minLength: self.config.titleMinLength,
          maxLength: self.config.titleMaxLength
        },
        value: this.state.formfields.title,
        onChange: function onChange(data) {
          return self.handleFieldChange('title', data.value);
        }
      }, "ref", function ref(el) {
        return self.titleField = el;
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "osc-form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Gaat dit goed of kan dit beter?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "osc-form-info"
      }, "Wilt u deze inzending bestempelen als iets dat goed gaat of iets dat beter kan in de buurt?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        className: "osc-default-select",
        value: this.state.formfields.type,
        onChange: function onChange() {
          return self.handleFieldChange('type', self.typeField.value);
        },
        ref: function ref(el) {
          return self.typeField = el;
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: ""
      }, "Maak een keuze"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Kans"
      }, "Dit gaat goed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Knelpunt"
      }, "Dit kan beter")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "osc-form-warning",
        style: {
          display: 'none'
        },
        ref: function ref(el) {
          return _this2['form-warning-type'] = el;
        }
      }, "Je hebt nog geen keuze gemaakt")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "osc-form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Thema"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "osc-form-info"
      }, "Onder welk thema valt uw inzending?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        className: "osc-default-select",
        value: this.state.formfields.theme,
        onChange: function onChange() {
          return self.handleFieldChange('theme', self.themeField.value);
        },
        ref: function ref(el) {
          return self.themeField = el;
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: ""
      }, "Maak een keuze"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Auto"
      }, "Auto"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Fiets"
      }, "Fiets"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Voetganger"
      }, "Voetganger"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Recre\xEBren"
      }, "Recre\xEBren"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Schoon"
      }, "Schoon"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Groen"
      }, "Groen"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Geluid"
      }, "Geluid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Overig"
      }, "Overig")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "osc-form-warning",
        style: {
          display: 'none'
        },
        ref: function ref(el) {
          return _this2['form-warning-theme'] = el;
        }
      }, "Je hebt geen thema geseleceteerd")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "osc-form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Samenvatting"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "osc-form-info"
      }, "Geef hier eerst een korte samenvatting. In de volgende stap heeft u ruimte om uw inzending uitgebreider toe te lichten."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_openstad_component_formelements_input_with_counter_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], _defineProperty({
        ref: function ref(el) {
          return self.input = el;
        },
        config: {
          name: "samenvatting",
          inputType: 'textarea',
          minLength: self.config.summaryMinLength,
          maxLength: self.config.summaryMaxLength
        },
        value: this.state.formfields.summary,
        onChange: function onChange(data) {
          return self.handleFieldChange('summary', data.value);
        }
      }, "ref", function ref(el) {
        return self.summaryField = el;
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "osc-form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Beschrijving"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "osc-form-info"
      }, "Gebruik de ruimte hieronder om uw inzending uitgebreider te beschrijven."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_openstad_component_formelements_input_with_counter_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], _defineProperty({
        ref: function ref(el) {
          return self.input = el;
        },
        config: {
          name: "bechrijving",
          inputType: 'textarea',
          minLength: self.config.descriptionMinLength,
          maxLength: self.config.descriptionMaxLength
        },
        value: this.state.formfields.description,
        onChange: function onChange(data) {
          return self.handleFieldChange('description', data.value);
        }
      }, "ref", function ref(el) {
        return self.descriptionField = el;
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "osc-form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_openstad_component_formelements_image_upload_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        config: {
          title: 'Afbeeldingen',
          infoText: 'Let op: Stuur alleen een foto in die u zelf gemaakt heeft. Foto’s van anderen kunnen auteursrechtelijk beschermd zijn. U heeft toestemming nodig van de fotograaf om die foto te uploaden.'
        },
        name: "images",
        value: this.state.formfields.title,
        handleFieldChange: self.handleFieldChange,
        ref: function ref(el) {
          return self.imageField = el;
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "osc-form-warning",
        style: {
          display: 'none'
        },
        ref: function ref(el) {
          return _this2['form-warning-image'] = el;
        }
      }, "Afbeelding upload is nog niet afgerond")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "osc-form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Wilt u ons helpen?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "osc-form-info"
      }, "We willen graag weten of we alle doelgroepen in de buurt bereiken. Daarom vragen we u of u in de buurt woont of werkt, of de buurt regelmatig bezoekt, en in welke leeftijdscategorie u valt. Wilt u dit liever niet delen? Kies dan de optie 'Zeg ik liever niet'."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Woont of werkt u in de buurt?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        className: "osc-default-select",
        value: this.state.formfields.userWhat,
        onChange: function onChange() {
          return self.handleFieldChange('userWhat', self.userWhatField.value);
        },
        ref: function ref(el) {
          return self.userWhatField = el;
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: ""
      }, "Maak een keuze"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Ik woon in de buurt"
      }, "Ik woon in de buurt"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Ik werk in de buurt"
      }, "Ik werk in de buurt"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Ik ben een bezoeker van de buurt"
      }, "Ik ben een bezoeker van de buurt"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Anders"
      }, "Anders"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Zeg ik liever niet"
      }, "Zeg ik liever niet")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "osc-form-warning",
        style: {
          display: 'none'
        },
        ref: function ref(el) {
          return _this2['form-warning-userWhat'] = el;
        }
      }, "Je hebt nog geen keuze gemaakt")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "osc-form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Wat is uw leeftijd?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        className: "osc-default-select",
        value: this.state.formfields.userAge,
        onChange: function onChange() {
          return self.handleFieldChange('userAge', self.userAgeField.value);
        },
        ref: function ref(el) {
          return self.userAgeField = el;
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: ""
      }, "Maak een keuze"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Jonger dan 18"
      }, "Jonger dan 18"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "18 - 24"
      }, "18 - 24"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "25 - 50"
      }, "25 - 50"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "51 - 65"
      }, "51 - 65"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "65+"
      }, "65+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Zeg ik liever niet"
      }, "Zeg ik liever niet")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "osc-form-warning",
        style: {
          display: 'none'
        },
        ref: function ref(el) {
          return _this2['form-warning-userAge'] = el;
        }
      }, "Je hebt nog geen keuze gemaakt")), modBreakHTML, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), formErrorsWarningHTML, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "osc-button osc-button-blue",
        onClick: function onClick() {
          return self.submitIdea();
        },
        ref: function ref(el) {
          return self.submitButton = el;
        }
      }, "Versturen"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)));
    }
  }]);

  return IdeasForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



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

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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

    var defaultConfig = {
      titleField: 'title',
      summaryField: 'summary',
      // sortOptions: [{ value: 'random', name: 'Random' }, { value: 'ranking', name: 'Ranking' }, { value: 'newest', name: 'Nieuwste eerst' }, { value: 'oldest', name: 'Oudste eerst' }, { value: 'distance', name: 'Afstand' }],
      sortOptions: [{
        value: 'newest',
        name: 'Nieuwste eerst'
      }, {
        value: 'oldest',
        name: 'Oudste eerst'
      }],
      showSortButton: true,
      defaultSortOrder: 'newest'
    };
    _this.config = Object.assign(defaultConfig, _this.props.config || {});
    _this.config.onIdeaClick = _this.config.onIdeaClick || _this.onIdeaClick.bind(_assertThisInitialized(_this));
    _this.state = {
      currentSortOrder: _this.config.defaultSortOrder,
      ideas: _this.props.ideas || [],
      showSortButton: _this.config.showSortButton
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
          _ref$showSortButton = _ref.showSortButton,
          showSortButton = _ref$showSortButton === void 0 ? this.state.showSortButton : _ref$showSortButton,
          _ref$center = _ref.center,
          center = _ref$center === void 0 ? {
        lat: 52.37104644463586,
        lng: 4.900402911007405
      } : _ref$center,
          maxLength = _ref.maxLength;
      var self = this;

      var state = _objectSpread({}, self.state);

      switch (sortOrder) {
        case 'ranking':
          ideas = ideas.sort(function (a, b) {
            return a.ranking - a.ranking;
          });
          break;

        case 'newest':
          ideas = ideas.sort(function (a, b) {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
          });
          break;

        case 'oldest':
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

        case 'random':
        default:
          ideas = ideas.sort(function (a, b) {
            return Math.random() - 0.5;
          });
          break;
      }

      state.ideas = maxLength ? ideas.slice(0, maxLength) : ideas;
      state.showSortButton = showSortButton;
      self.setState(state);
    }
  }, {
    key: "setSortOrder",
    value: function setSortOrder(_ref2) {
      var sortOrder = _ref2.sortOrder;
      this.setState(_objectSpread({}, this.state, {
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
    key: "render",
    value: function render() {
      var self = this;
      var sortSelector = null;

      if (this.state.showSortButton) {
        sortSelector = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "osc-sort osc-align-right-container osc-margin-right"
        }, "Sorteer op:\xA0\xA0\xA0\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
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
        }, self.config.sortOptions.map(function (option, i) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
            value: option.value,
            key: 'sort-option-' + i
          }, option.name);
        })));
      } else {
        sortSelector = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            height: 20
          }
        });
      }

      var titleHML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "osc-title"
      }, self.props.title, " (", self.state.ideas.length, ")");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: self.id,
        className: self.props.className || 'osc-info-block-ideas-list',
        ref: function ref(el) {
          return self.instance = el;
        }
      }, sortSelector, titleHML, self.state.ideas.map(function (idea, i) {
        if (!idea) {
          console.log('idea is undef', i, self.state.ideas);
        }

        var typeDef = self.config.types.find(function (entry) {
          return idea.extraData && entry.name == idea.extraData.theme;
        });

        if (!typeDef) {
          typeDef = {
            listicon: {
              html: ''
            }
          };
          console.log(idea.extraData.theme + ' niet gevonden');
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "osc-info-block-ideas-list-idea",
          onClick: function onClick(event) {
            return self.config.onIdeaClick(event, idea);
          },
          key: 'info-block-' + i
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "osc-content"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "osc-image",
          style: {
            backgroundImage: "url(".concat(idea.image, ")")
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
          className: "osc-title"
        }, eval("idea.".concat(self.config.titleField))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "osc-summary"
        }, eval("idea.".concat(self.config.summaryField))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "osc-stats"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "osc-likes"
        }, idea.yes || 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "osc-reactions"
        }, idea.argCount || 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "osc-type"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "osc-type-content",
          dangerouslySetInnerHTML: {
            __html: typeDef.listicon.html
          }
        })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "osc-clear-both"
        }));
      }));
    }
  }]);

  return IdeasList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
      title: _this.config.appTitle || 'Inzendingen',
      types: [{
        "name": "Auto",
        "color": "#EC0000",
        "mapicon": {
          "html": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"34\" height=\"45\" viewBox=\"0 0 34 45\">  <g fill=\"none\" fill-rule=\"evenodd\">    <path fill=\"#EC0000\" fill-rule=\"nonzero\" d=\"M17,0 C26.3917,0 34,7.53433 34,16.8347 C34,29.5249 19.3587,42.4714 18.7259,42.9841 L17,44.4938 L15.2741,42.9841 C14.6413,42.4714 0,29.5249 0,16.8347 C0,7.53575 7.60829,0 17,0 Z\"/>    <path fill=\"#FFF\" d=\"M22,19.5 C23.0355,19.5 23.875,20.3395 23.875,21.375 C23.875,22.4105 23.0355,23.25 22,23.25 C20.9645,23.25 20.125,22.4105 20.125,21.375 C20.125,20.3395 20.9645,19.5 22,19.5 Z M11.375,19.5 C12.4105,19.5 13.25,20.3395 13.25,21.375 C13.25,22.4105 12.4105,23.25 11.375,23.25 C10.3395,23.25 9.5,22.4105 9.5,21.375 C9.5,20.3395 10.3395,19.5 11.375,19.5 Z M18.875,11.375 L23.25,15.75 L27,15.75 L27,21.375 L25.125,21.375 C25.125,19.6491 23.7259,18.25 22,18.25 C20.2741,18.25 18.875,19.6491 18.875,21.375 L14.5,21.375 C14.5,19.6491 13.1009,18.25 11.375,18.25 C9.64911,18.25 8.25,19.6491 8.25,21.375 L7,21.375 L7,15.75 L11.375,11.375 L18.875,11.375 Z M18.25,12.625 L15.125,12.625 L15.125,15.75 L21.3512,15.75 L18.25,12.625 Z M13.875,12.625 L12,12.625 L8.875,15.75 L13.875,15.75 L13.875,12.625 Z\"/>  </g></svg>",
          "width": 34,
          "height": 45,
          "anchor": [17, 45]
        },
        "listicon": {
          "html": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"34\" height=\"34\" viewBox=\"0 0 34 34\">  <g fill=\"none\" fill-rule=\"evenodd\">    <circle cx=\"17\" cy=\"17\" r=\"17\" fill=\"#EC0000\" fill-rule=\"nonzero\"/>    <path fill=\"#FFF\" d=\"M22,19.5 C23.0355,19.5 23.875,20.3395 23.875,21.375 C23.875,22.4105 23.0355,23.25 22,23.25 C20.9645,23.25 20.125,22.4105 20.125,21.375 C20.125,20.3395 20.9645,19.5 22,19.5 Z M11.375,19.5 C12.4105,19.5 13.25,20.3395 13.25,21.375 C13.25,22.4105 12.4105,23.25 11.375,23.25 C10.3395,23.25 9.5,22.4105 9.5,21.375 C9.5,20.3395 10.3395,19.5 11.375,19.5 Z M18.875,11.375 L23.25,15.75 L27,15.75 L27,21.375 L25.125,21.375 C25.125,19.6491 23.7259,18.25 22,18.25 C20.2741,18.25 18.875,19.6491 18.875,21.375 L14.5,21.375 C14.5,19.6491 13.1009,18.25 11.375,18.25 C9.64911,18.25 8.25,19.6491 8.25,21.375 L7,21.375 L7,15.75 L11.375,11.375 L18.875,11.375 Z M18.25,12.625 L15.125,12.625 L15.125,15.75 L21.3512,15.75 L18.25,12.625 Z M13.875,12.625 L12,12.625 L8.875,15.75 L13.875,15.75 L13.875,12.625 Z\"/>  </g></svg>",
          "width": 34,
          "height": 34
        }
      }, {
        "name": "Fiets",
        "color": "#BED200",
        "mapicon": {
          "html": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"34\" height=\"45\" viewBox=\"0 0 34 45\">  <g fill=\"none\" fill-rule=\"evenodd\">    <path fill=\"#BED200\" fill-rule=\"nonzero\" d=\"M17,0.493652 C26.3917,0.493652 34,8.02798 34,17.3284 C34,30.0185 19.3587,42.965 18.7259,43.4778 L17,44.9875 L15.2741,43.4778 C14.6413,42.965 0,30.0185 0,17.3284 C0,8.0294 7.60829,0.493652 17,0.493652 Z\"/>    <g fill=\"#000\" transform=\"translate(7 7)\">      <path fill-rule=\"nonzero\" d=\"M4.0625 12.3687C6.3062 12.3687 8.125 14.1875 8.125 16.4312 8.125 18.6748 6.3062 20.4937 4.0625 20.4937 1.81884 20.4937 0 18.6748 0 16.4312 0 14.1875 1.81884 12.3687 4.0625 12.3687zM4.0625 13.6187C2.5092 13.6187 1.25 14.8779 1.25 16.4312 1.25 17.9845 2.5092 19.2437 4.0625 19.2437 5.6158 19.2437 6.875 17.9845 6.875 16.4312 6.875 14.8779 5.6158 13.6187 4.0625 13.6187zM15.9375 12.3687C18.1812 12.3687 20 14.1875 20 16.4312 20 18.6748 18.1812 20.4937 15.9375 20.4937 13.6938 20.4937 11.875 18.6748 11.875 16.4312 11.875 14.1875 13.6938 12.3687 15.9375 12.3687zM15.9375 13.6187C14.3842 13.6187 13.125 14.8779 13.125 16.4312 13.125 17.9845 14.3842 19.2437 15.9375 19.2437 17.4908 19.2437 18.75 17.9845 18.75 16.4312 18.75 14.8779 17.4908 13.6187 15.9375 13.6187z\"/>      <path d=\"M13.75 5.4937L13.75 7.9937 16.875 7.9937 16.875 10.4937 12.5 10.4937 11.25 9.2437 11.25 7.3687 8.75 9.8687 11.252 12.3687 11.252 19.2437 8.75 19.2437 8.75 13.6187 5.625 10.4937 5.625 8.6187 10 4.2437C10.625 3.6187 11.875 3.6187 12.5 4.2437L13.75 5.4937zM15.7008 1.04262C16.4331 1.77492 16.4331 2.96198 15.7008 3.6943 14.9685 4.4266 13.7815 4.4266 13.0492 3.6943 12.3169 2.96198 12.3169 1.77492 13.0492 1.04262 13.7815.31032 14.9685.31032 15.7008 1.04262z\"/>    </g>  </g></svg>",
          "width": 34,
          "height": 45,
          "anchor": [17, 45]
        },
        "listicon": {
          "html": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"34\" height=\"34\" viewBox=\"0 0 34 34\">  <g fill=\"none\" fill-rule=\"evenodd\">    <circle cx=\"17\" cy=\"17\" r=\"17\" fill=\"#BED200\" fill-rule=\"nonzero\"/>    <g fill=\"#000\" transform=\"translate(7 5)\">      <path fill-rule=\"nonzero\" d=\"M4.0625 12.3687C6.3062 12.3687 8.125 14.1875 8.125 16.4312 8.125 18.6748 6.3062 20.4937 4.0625 20.4937 1.81884 20.4937 0 18.6748 0 16.4312 0 14.1875 1.81884 12.3687 4.0625 12.3687zM4.0625 13.6187C2.5092 13.6187 1.25 14.8779 1.25 16.4312 1.25 17.9845 2.5092 19.2437 4.0625 19.2437 5.6158 19.2437 6.875 17.9845 6.875 16.4312 6.875 14.8779 5.6158 13.6187 4.0625 13.6187zM15.9375 12.3687C18.1812 12.3687 20 14.1875 20 16.4312 20 18.6748 18.1812 20.4937 15.9375 20.4937 13.6938 20.4937 11.875 18.6748 11.875 16.4312 11.875 14.1875 13.6938 12.3687 15.9375 12.3687zM15.9375 13.6187C14.3842 13.6187 13.125 14.8779 13.125 16.4312 13.125 17.9845 14.3842 19.2437 15.9375 19.2437 17.4908 19.2437 18.75 17.9845 18.75 16.4312 18.75 14.8779 17.4908 13.6187 15.9375 13.6187z\"/>      <path d=\"M13.75 5.4937L13.75 7.9937 16.875 7.9937 16.875 10.4937 12.5 10.4937 11.25 9.2437 11.25 7.3687 8.75 9.8687 11.252 12.3687 11.252 19.2437 8.75 19.2437 8.75 13.6187 5.625 10.4937 5.625 8.6187 10 4.24365C10.625 3.61865 11.875 3.61865 12.5 4.24365L13.75 5.4937zM15.7008 1.04262C16.4331 1.77492 16.4331 2.96198 15.7008 3.69427 14.9685 4.42657 13.7815 4.42657 13.0492 3.69427 12.3169 2.96198 12.3169 1.77492 13.0492 1.04262 13.7815.31032 14.9685.31032 15.7008 1.04262z\"/>    </g>  </g></svg>",
          "width": 34,
          "height": 34
        }
      }, {
        "name": "Voetganger",
        "color": "#009DEC",
        "mapicon": {
          "html": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"34\" height=\"45\" viewBox=\"0 0 34 45\">  <g fill=\"none\" fill-rule=\"evenodd\">    <path fill=\"#009DEC\" fill-rule=\"nonzero\" d=\"M17,0.987793 C26.3917,0.987793 34,8.52212 34,17.8225 C34,30.5127 19.3587,43.4592 18.7259,43.9719 L17,45.4816 L15.2741,43.9719 C14.6413,43.4592 0,30.5127 0,17.8225 C0,8.52354 7.60829,0.987793 17,0.987793 Z\"/>    <g fill=\"#FFF\" transform=\"translate(10 7)\">      <polygon points=\"8.25 5.988 10.75 8.488 13.25 8.488 13.25 10.988 10.125 10.988 8.25 9.113 8.25 12.238 10.75 14.738 10.75 20.988 8.25 20.988 8.25 15.988 7 14.738 7 16.613 4.5 19.113 .75 19.113 .75 16.613 3.25 16.613 4.5 15.363 4.5 9.113 3.25 10.363 3.25 12.863 .75 12.863 .75 9.738 4.5 5.988\"/>      <path d=\"M6.375,0.98779 C7.4106,0.98779 8.25,1.82717 8.25,2.86279 C8.25,3.8984 7.4106,4.7378 6.375,4.7378 C5.3394,4.7378 4.5,3.8984 4.5,2.86279 C4.5,1.82717 5.3394,0.98779 6.375,0.98779 Z\"/>    </g>  </g></svg>",
          "width": 34,
          "height": 45,
          "anchor": [17, 45]
        },
        "listicon": {
          "html": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"34\" height=\"34\" viewBox=\"0 0 34 34\">  <g fill=\"none\" fill-rule=\"evenodd\">    <circle cx=\"17\" cy=\"17\" r=\"17\" fill=\"#009DEC\" fill-rule=\"nonzero\"/>    <g fill=\"#FFF\" transform=\"translate(10 6)\">      <polygon points=\"8.25 5.988 10.75 8.488 13.25 8.488 13.25 10.988 10.125 10.988 8.25 9.113 8.25 12.238 10.75 14.738 10.75 20.988 8.25 20.988 8.25 15.988 7 14.738 7 16.613 4.5 19.113 .75 19.113 .75 16.613 3.25 16.613 4.5 15.363 4.5 9.113 3.25 10.363 3.25 12.863 .75 12.863 .75 9.738 4.5 5.988\"/>      <path d=\"M6.375,0.98779 C7.4106,0.98779 8.25,1.82717 8.25,2.86279 C8.25,3.89842 7.4106,4.7378 6.375,4.7378 C5.3394,4.7378 4.5,3.89842 4.5,2.86279 C4.5,1.82717 5.3394,0.98779 6.375,0.98779 Z\"/>    </g>  </g></svg>",
          "width": 34,
          "height": 34
        }
      }, {
        "name": "Recreëren",
        "color": "#E50082",
        "mapicon": {
          "html": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"34\" height=\"45\" viewBox=\"0 0 34 45\">  <g fill=\"none\" fill-rule=\"evenodd\">    <path fill=\"#E50082\" fill-rule=\"nonzero\" d=\"M17,0.481445 C26.3917,0.481445 34,8.01577 34,17.3162 C34,30.0063 19.3587,42.9528 18.7259,43.4656 L17,44.9753 L15.2741,43.4656 C14.6413,42.9528 0,30.0063 0,17.3162 C0,8.0172 7.60829,0.481445 17,0.481445 Z\"/>    <path fill=\"#FFF\" d=\"M23.875,24.9814 L26.375,24.9814 L26.375,27.4814 L7.625,27.4814 L7.625,24.9814 L10.1254,24.9814 L10.1254,23.1069 L9.5,20.7588 L10.7125,20.4551 L11.2194,22.4819 L13.25,22.4819 C13.595,22.4819 13.875,22.7619 13.875,23.1069 L13.875,24.9814 L15.75,24.9814 L15.75,18.7314 L7.625,18.7314 L7.625,13.7313 L16.9988,8.10645 L26.375,13.7313 L26.375,18.7314 L18.25,18.7314 L18.25,24.9814 L20.125,24.9814 L20.125,23.1069 C20.125,22.7619 20.405,22.4819 20.75,22.4819 L22.7619,22.4819 L23.2687,20.4551 L24.4813,20.7588 L23.875,23.1069 L23.875,24.9814 Z M22.625,24.9814 L22.625,23.7319 L21.375,23.7319 L21.375,24.9814 L22.625,24.9814 Z M12.625,24.9814 L12.625,23.7319 L11.375,23.7319 L11.375,24.9814 L12.625,24.9814 Z M10.125,15.026 L10.125,16.2314 L23.875,16.2314 L23.875,15.026 L17,11.2617 L10.125,15.026 Z\"/>  </g></svg>",
          "width": 34,
          "height": 45,
          "anchor": [17, 45]
        },
        "listicon": {
          "html": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"34\" height=\"34\" viewBox=\"0 0 34 34\">  <g fill=\"none\" fill-rule=\"evenodd\">    <circle cx=\"17\" cy=\"17\" r=\"17\" fill=\"#E50082\" fill-rule=\"nonzero\"/>    <path fill=\"#FFF\" d=\"M23.875,23.9814 L26.375,23.9814 L26.375,26.4814 L7.625,26.4814 L7.625,23.9814 L10.1254,23.9814 L10.1254,22.1069 L9.5,19.7588 L10.7125,19.4551 L11.2194,21.4819 L13.25,21.4819 C13.595,21.4819 13.875,21.7619 13.875,22.1069 L13.875,23.9814 L15.75,23.9814 L15.75,17.7314 L7.625,17.7314 L7.625,12.7313 L16.9988,7.10645 L26.375,12.7313 L26.375,17.7314 L18.25,17.7314 L18.25,23.9814 L20.125,23.9814 L20.125,22.1069 C20.125,21.7619 20.405,21.4819 20.75,21.4819 L22.7619,21.4819 L23.2687,19.4551 L24.4813,19.7588 L23.875,22.1069 L23.875,23.9814 Z M22.625,23.9814 L22.625,22.7319 L21.375,22.7319 L21.375,23.9814 L22.625,23.9814 Z M12.625,23.9814 L12.625,22.7319 L11.375,22.7319 L11.375,23.9814 L12.625,23.9814 Z M10.125,14.026 L10.125,15.2314 L23.875,15.2314 L23.875,14.026 L17,10.2617 L10.125,14.026 Z\"/>  </g></svg>",
          "width": 34,
          "height": 34
        }
      }, {
        "name": "Schoon",
        "color": "#004699",
        "mapicon": {
          "html": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"34\" height=\"45\" viewBox=\"0 0 34 45\">  <g fill=\"none\" fill-rule=\"evenodd\">    <path fill=\"#004699\" fill-rule=\"nonzero\" d=\"M17,0.975586 C26.3917,0.975586 34,8.50991 34,17.8103 C34,30.5005 19.3587,43.447 18.7259,43.9597 L17,45.4694 L15.2741,43.9597 C14.6413,43.447 0,30.5005 0,17.8103 C0,8.51134 7.60829,0.975586 17,0.975586 Z\"/>    <path fill=\"#FFF\" d=\"M19.6777,7.97559 L19.6777,10.47559 L24.6777,10.47559 L24.6777,12.97559 L23.4277,12.97559 L23.4277,27.97559 L9.67773,27.97559 L9.67773,12.97559 L8.42773,12.97559 L8.42773,10.47559 L13.4277,10.47559 L13.4277,7.97559 L19.6777,7.97559 Z M20.9277,12.9756 L12.1777,12.9756 L12.1777,25.4756 L20.9277,25.4756 L20.9277,12.9756 Z M14.6777,15.4756 L14.6777,22.9756 L13.4402,22.9756 L13.4402,15.4756 L14.6777,15.4756 Z M17.1777,15.4756 L17.1777,22.9756 L15.9277,22.9756 L15.9277,15.4756 L17.1777,15.4756 Z M19.6777,15.4756 L19.6777,22.9756 L18.4402,22.9756 L18.4402,15.4756 L19.6777,15.4756 Z M18.4277,9.22559 L14.6777,9.22559 L14.6777,10.4756 L18.4277,10.4756 L18.4277,9.22559 Z\"/>  </g></svg>",
          "width": 34,
          "height": 45,
          "anchor": [17, 45]
        },
        "listicon": {
          "html": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"34\" height=\"34\" viewBox=\"0 0 34 34\">  <g fill=\"none\" fill-rule=\"evenodd\">    <circle cx=\"17\" cy=\"17\" r=\"17\" fill=\"#004699\" fill-rule=\"nonzero\"/>    <path fill=\"#FFF\" d=\"M19.6777,6.97559 L19.6777,9.47559 L24.6777,9.47559 L24.6777,11.97559 L23.4277,11.97559 L23.4277,26.97559 L9.67773,26.97559 L9.67773,11.97559 L8.42773,11.97559 L8.42773,9.47559 L13.4277,9.47559 L13.4277,6.97559 L19.6777,6.97559 Z M20.9277,11.9756 L12.1777,11.9756 L12.1777,24.4756 L20.9277,24.4756 L20.9277,11.9756 Z M14.6777,14.4756 L14.6777,21.9756 L13.4402,21.9756 L13.4402,14.4756 L14.6777,14.4756 Z M17.1777,14.4756 L17.1777,21.9756 L15.9277,21.9756 L15.9277,14.4756 L17.1777,14.4756 Z M19.6777,14.4756 L19.6777,21.9756 L18.4402,21.9756 L18.4402,14.4756 L19.6777,14.4756 Z M18.4277,8.22559 L14.6777,8.22559 L14.6777,9.47559 L18.4277,9.47559 L18.4277,8.22559 Z\"/>  </g></svg>",
          "width": 34,
          "height": 34
        }
      }, {
        "name": "Groen",
        "color": "#00A03C",
        "mapicon": {
          "html": "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"34\" height=\"45\" viewBox=\"0 0 34 45\">  <defs>    <path id=\"marker_groen-a\" d=\"M9.1246,0.9692 C9.8227,1.31203 10.2745,2.00713 10.3101,2.77763 L10.3121,2.9067 L10.3121,3.3442 C11.3621,3.50045 12.1359,4.4073 12.1246,5.4692 C12.1527,5.8404 12.0652,6.2117 11.8746,6.5317 C12.4869,6.8803 12.9267,7.4646 13.0947,8.1445 L13.1246,8.2817 L13.1246,8.6567 C13.1484,9.6961 12.5265,10.6423 11.5621,11.0317 C11.3344,11.1603 11.0774,11.2269 10.8173,11.2255 L10.6871,11.2192 L10.6246,11.2192 C10.0036,11.1954 9.4161,10.9415 8.974,10.5095 L8.8746,10.4067 L8.7496,10.4067 L8.7496,17.9692 L11.8746,17.9692 L11.8746,16.0942 L11.2496,13.7192 L12.4371,13.4692 L12.9996,15.4692 L14.9996,15.4692 C15.1709,15.4486 15.3421,15.5079 15.464,15.6298 C15.5684,15.7343 15.627,15.875 15.6286,16.021 L15.6246,16.0942 L15.6246,17.9692 L19.9996,17.9692 L19.9996,20.4692 L0.03711,20.4692 L0.03711,17.9692 L7.4996,17.9692 L7.4996,10.4692 L7.3746,10.4692 C6.939,10.8829 6.3709,11.125 5.7743,11.1539 L5.6246,11.1567 L5.5621,11.1567 C5.2584,11.1848 4.9527,11.1192 4.6871,10.9692 C3.7629,10.596 3.1533,9.7115 3.125,8.7236 L3.1246,8.2192 C3.2646,7.4811 3.7215,6.8411 4.3746,6.4692 C4.1965,6.1673 4.1096,5.8198 4.1246,5.4692 C4.1138,4.4467 4.8309,3.56784 5.8216,3.36462 L5.9371,3.3442 L5.9371,2.9067 C5.9252,2.08545 6.3877,1.33107 7.1246,0.9692 C7.7677,0.71795 8.4815,0.71795 9.1246,0.9692 Z M14.3746,16.7192 L13.1246,16.7192 L13.1246,17.9692 L14.3746,17.9692 L14.3746,16.7192 Z\"/>  </defs>  <g fill=\"none\" fill-rule=\"evenodd\">    <path fill=\"#00A03C\" fill-rule=\"nonzero\" d=\"M17,0.469238 C26.3917,0.469238 34,8.00356 34,17.304 C34,29.9941 19.3587,42.9406 18.7259,43.4534 L17,44.9631 L15.2741,43.4534 C14.6413,42.9406 0,29.9941 0,17.304 C0,8.00499 7.60829,0.469238 17,0.469238 Z\"/>    <g transform=\"translate(7 6)\">      <mask id=\"marker_groen-b\" fill=\"#fff\">        <use xlink:href=\"#marker_groen-a\"/>      </mask>      <polygon fill=\"#FFF\" points=\".037 20.469 20.062 20.469 20.062 .744 .037 .744\" mask=\"url(#marker_groen-b)\"/>    </g>  </g></svg>",
          "width": 34,
          "height": 45,
          "anchor": [17, 45]
        },
        "listicon": {
          "html": "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"34\" height=\"34\" viewBox=\"0 0 34 34\">  <defs>    <path id=\"label_groen-a\" d=\"M9.1246,0.9692 C9.8227,1.31203 10.2745,2.00713 10.3101,2.77763 L10.3121,2.9067 L10.3121,3.3442 C11.3621,3.50045 12.1359,4.4073 12.1246,5.4692 C12.1527,5.8404 12.0652,6.2117 11.8746,6.5317 C12.4869,6.8803 12.9267,7.4646 13.0947,8.1445 L13.1246,8.2817 L13.1246,8.6567 C13.1484,9.6961 12.5265,10.6423 11.5621,11.0317 C11.3344,11.1603 11.0774,11.2269 10.8173,11.2255 L10.6871,11.2192 L10.6246,11.2192 C10.0036,11.1954 9.4161,10.9415 8.974,10.5095 L8.8746,10.4067 L8.7496,10.4067 L8.7496,17.9692 L11.8746,17.9692 L11.8746,16.0942 L11.2496,13.7192 L12.4371,13.4692 L12.9996,15.4692 L14.9996,15.4692 C15.1709,15.4486 15.3421,15.5079 15.464,15.6298 C15.5684,15.7343 15.627,15.875 15.6286,16.021 L15.6246,16.0942 L15.6246,17.9692 L19.9996,17.9692 L19.9996,20.4692 L0.03711,20.4692 L0.03711,17.9692 L7.4996,17.9692 L7.4996,10.4692 L7.3746,10.4692 C6.939,10.8829 6.3709,11.125 5.7743,11.1539 L5.6246,11.1567 L5.5621,11.1567 C5.2584,11.1848 4.9527,11.1192 4.6871,10.9692 C3.7629,10.596 3.1533,9.7115 3.125,8.7236 L3.1246,8.2192 C3.2646,7.4811 3.7215,6.8411 4.3746,6.4692 C4.1965,6.1673 4.1096,5.8198 4.1246,5.4692 C4.1138,4.4467 4.8309,3.56784 5.8216,3.36462 L5.9371,3.3442 L5.9371,2.9067 C5.9252,2.08545 6.3877,1.33107 7.1246,0.9692 C7.7677,0.71795 8.4815,0.71795 9.1246,0.9692 Z M14.3746,16.7192 L13.1246,16.7192 L13.1246,17.9692 L14.3746,17.9692 L14.3746,16.7192 Z\"/>  </defs>  <g fill=\"none\" fill-rule=\"evenodd\">    <circle cx=\"17\" cy=\"17\" r=\"17\" fill=\"#00A03C\" fill-rule=\"nonzero\"/>    <g transform=\"translate(7 6)\">      <mask id=\"label_groen-b\" fill=\"#fff\">        <use xlink:href=\"#label_groen-a\"/>      </mask>      <polygon fill=\"#FFF\" points=\".037 20.469 20.062 20.469 20.062 .744 .037 .744\" mask=\"url(#label_groen-b)\"/>    </g>  </g></svg>",
          "width": 34,
          "height": 34
        }
      }, {
        "name": "Geluid",
        "color": "#FF9100",
        "mapicon": {
          "html": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"34\" height=\"45\" viewBox=\"0 0 34 45\">  <g fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(0 -1)\">    <path fill=\"#FF9100\" fill-rule=\"nonzero\" d=\"M17,0.962891 C26.3917,0.962891 34,8.49722 34,17.7976 C34,30.4878 19.3587,43.4343 18.7259,43.947 L17,45.4567 L15.2741,43.947 C14.6413,43.4343 0,30.4878 0,17.7976 C0,8.49864 7.60829,0.962891 17,0.962891 Z\"/>    <path fill=\"#000\" d=\"M21.375,7.96289 L21.375,15.2191 C22.501,15.6081 23.2565,16.6684 23.2565,17.8598 C23.2565,19.0511 22.501,20.1114 21.375,20.5004 L21.375,27.7629 L14.8625,24.2691 L11.6375,27.4941 L9.86875,25.7254 L12.5563,23.0379 L11.6438,22.5504 L7,22.5504 L7,13.1754 L11.6438,13.1754 L21.375,7.96289 Z M18.875,12.1379 L13.25,15.1504 L13.25,20.5754 L18.875,23.5879 L18.875,12.1379 Z M24.3115,19.9105 L26.2229,21.746 L25.3571,22.6476 L23.4457,20.8121 L24.3115,19.9105 Z M12,15.6754 L9.5,15.6754 L9.5,20.0504 L12,20.0504 L12,15.6754 Z M27,17.2379 L27,18.4879 L24.5,18.4879 L24.5,17.2379 L27,17.2379 Z M25.3456,13.0055 L26.2295,13.8894 L24.3158,15.803 L23.432,14.9191 L25.3456,13.0055 Z\"/>  </g></svg>",
          "width": 34,
          "height": 45,
          "anchor": [17, 45]
        },
        "listicon": {
          "html": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"34\" height=\"34\" viewBox=\"0 0 34 34\">  <g fill=\"none\" fill-rule=\"evenodd\">    <circle cx=\"17\" cy=\"17\" r=\"17\" fill=\"#FF9100\" fill-rule=\"nonzero\"/>    <path fill=\"#000\" d=\"M21.375,6.96289 L21.375,14.2191 C22.501,14.6081 23.2565,15.6684 23.2565,16.8598 C23.2565,18.0511 22.501,19.1114 21.375,19.5004 L21.375,26.7629 L14.8625,23.2691 L11.6375,26.4941 L9.86875,24.7254 L12.5563,22.0379 L11.6438,21.5504 L7,21.5504 L7,12.1754 L11.6438,12.1754 L21.375,6.96289 Z M18.875,11.1379 L13.25,14.1504 L13.25,19.5754 L18.875,22.5879 L18.875,11.1379 Z M24.3115,18.9105 L26.2229,20.746 L25.3571,21.6476 L23.4457,19.8121 L24.3115,18.9105 Z M12,14.6754 L9.5,14.6754 L9.5,19.0504 L12,19.0504 L12,14.6754 Z M27,16.2379 L27,17.4879 L24.5,17.4879 L24.5,16.2379 L27,16.2379 Z M25.3456,12.0055 L26.2295,12.8894 L24.3158,14.803 L23.432,13.9191 L25.3456,12.0055 Z\"/>  </g></svg>",
          "width": 34,
          "height": 34
        }
      }, {
        "name": "Overig",
        "color": "#A00078",
        "mapicon": {
          "html": "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"34\" height=\"45\" viewBox=\"0 0 34 45\">  <defs>    <path id=\"marker_overig-a\" d=\"M4.25,12.207 L4.25,15.957 L0.5,15.957 L0.5,12.207 L4.25,12.207 Z M9.875,12.207 L9.875,15.957 L6.125,15.957 L6.125,12.207 L9.875,12.207 Z M15.5,12.207 L15.5,15.957 L11.75,15.957 L11.75,12.207 L15.5,12.207 Z M4.25,6.582 L4.25,10.332 L0.5,10.332 L0.5,6.582 L4.25,6.582 Z M9.875,6.582 L9.875,10.332 L6.125,10.332 L6.125,6.582 L9.875,6.582 Z M15.5,6.582 L15.5,10.332 L11.75,10.332 L11.75,6.582 L15.5,6.582 Z M4.25,0.95703 L4.25,4.707 L0.5,4.707 L0.5,0.95703 L4.25,0.95703 Z M9.875,0.95703 L9.875,4.707 L6.125,4.707 L6.125,0.95703 L9.875,0.95703 Z M15.5,0.95703 L15.5,4.707 L11.75,4.707 L11.75,0.95703 L15.5,0.95703 Z\"/>  </defs>  <g fill=\"none\" fill-rule=\"evenodd\">    <path fill=\"#A00078\" fill-rule=\"nonzero\" d=\"M17,0.457031 C26.3917,0.457031 34,7.99136 34,17.2918 C34,29.9819 19.3587,42.9284 18.7259,43.4411 L17,44.9509 L15.2741,43.4411 C14.6413,42.9284 0,29.9819 0,17.2918 C0,7.99278 7.60829,0.457031 17,0.457031 Z\"/>    <g transform=\"translate(9 9)\">      <mask id=\"marker_overig-b\" fill=\"#fff\">        <use xlink:href=\"#marker_overig-a\"/>      </mask>      <polygon fill=\"#FFF\" points=\".438 15.982 15.512 15.982 15.512 .907 .438 .907\" mask=\"url(#marker_overig-b)\"/>    </g>  </g></svg>",
          "width": 34,
          "height": 45,
          "anchor": [17, 45]
        },
        "listicon": {
          "html": "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"34\" height=\"34\" viewBox=\"0 0 34 34\">  <defs>    <path id=\"label_overig-a\" d=\"M4.25,12.207 L4.25,15.957 L0.5,15.957 L0.5,12.207 L4.25,12.207 Z M9.875,12.207 L9.875,15.957 L6.125,15.957 L6.125,12.207 L9.875,12.207 Z M15.5,12.207 L15.5,15.957 L11.75,15.957 L11.75,12.207 L15.5,12.207 Z M4.25,6.582 L4.25,10.332 L0.5,10.332 L0.5,6.582 L4.25,6.582 Z M9.875,6.582 L9.875,10.332 L6.125,10.332 L6.125,6.582 L9.875,6.582 Z M15.5,6.582 L15.5,10.332 L11.75,10.332 L11.75,6.582 L15.5,6.582 Z M4.25,0.95703 L4.25,4.707 L0.5,4.707 L0.5,0.95703 L4.25,0.95703 Z M9.875,0.95703 L9.875,4.707 L6.125,4.707 L6.125,0.95703 L9.875,0.95703 Z M15.5,0.95703 L15.5,4.707 L11.75,4.707 L11.75,0.95703 L15.5,0.95703 Z\"/>  </defs>  <g fill=\"none\" fill-rule=\"evenodd\">    <circle cx=\"17\" cy=\"17\" r=\"17\" fill=\"#A00078\" fill-rule=\"nonzero\"/>    <g transform=\"translate(9 9)\">      <mask id=\"label_overig-b\" fill=\"#fff\">        <use xlink:href=\"#label_overig-a\"/>      </mask>      <polygon fill=\"#FFF\" points=\".438 15.982 15.512 15.982 15.512 .907 .438 .907\" mask=\"url(#label_overig-b)\"/>    </g>  </g></svg>",
          "width": 34,
          "height": 34
        }
      }],
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
      typeField: self.config.typeField || 'extraData.theme',
      // areaField: self.config.areaField || 'extraData.gebied',
      user: {},
      api: {
        url: null,
        headers: null,
        isUserLoggedIn: false
      },
      idea: {
        titleMinLength: 10,
        titleMaxLength: 20,
        summaryMinLength: 20,
        summaryMaxLength: 140,
        descriptionMinLength: 140,
        descriptionMaxLength: 5000
      },
      argument: {
        descriptionMinLength: 30,
        descriptionMaxLength: 500,
        formIntro: 'Mijn reactie op deze inzending is ...',
        placeholder: '',
        requiredUserRole: 'member'
      }
    };
    self.config = merge__WEBPACK_IMPORTED_MODULE_0___default.a.recursive(self.defaultConfig, self.config, props.config || {}); // defaults

    self.config.doSearchFunction = self.config.doSearchFunction || self.doSearch.bind(self);
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
      selectedLocation: null
    };
    return _this;
  }

  _createClass(OpenStadComponentIdeasOnMap, [{
    key: "componentDidMount",
    value: function componentDidMount(prevProps, prevState) {
      var self = this; // when the map is ready

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
        self.onNewIdeaClick();
      });
      document.addEventListener('clickMobileSwitcher', function (event) {
        self.onClickMobileSwitcher();
      }); // details changes

      document.addEventListener('osc-idea-liked', function (event) {
        self.onIdeaLiked(event.detail);
      });
      document.addEventListener('osc-reaction-stored', function (event) {
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
        self.onNewIdeaStored(event.detail.idea);
      });
    }
  }, {
    key: "fetchData",
    value: function fetchData(_ref) {
      var showIdeaDetails = _ref.showIdeaDetails,
          showIdeaSelected = _ref.showIdeaSelected;
      var self = this;
      var url = "".concat(self.config.api.url, "/api/site/").concat(self.config.siteId, "/idea?includeVoteCount=1&includeArguments=1&includeUser=1");
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
        showIdeaDetails = showIdeaDetails || _libs_index_jsx__WEBPACK_IMPORTED_MODULE_8__["default"].localStorage.get('osc-ideas-on-map-details'); //  document.location.hash.replace(/.*details=(\d+).*/, "$1");

        showIdeaSelected = showIdeaSelected || _libs_index_jsx__WEBPACK_IMPORTED_MODULE_8__["default"].localStorage.get('osc-ideas-on-map-selected'); // document.location.hash.replace(/.*selected=(\d+).*/, "$1");

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
          // self.setSelectedLocation({ lat: 52.37104644463586, lng: 4.900402911007405 })
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
              self.map.showMarkers(self.map.markers);
              self.setSelectedIdea(self.state.currentIdea);
            });
          }

          if (_typeof(showIdeaDetails) == 'object' && showIdeaDetails != null) {
            self.setSelectedIdea(showIdeaDetails);
            self.setNewIdea(null);
            self.showIdeaDetails(showIdeaDetails);
          }

          self.onChangeMapBoundaries(); // dev form
          //if (!showIdeaSelected) {
          //  self.setSelectedIdea(null);
          //  self.setNewIdea({ location: { coordinates: [52.37104644463586, 4.900402911007405] }, title: "Rutrum tincidunt", type: "Kans", theme: "Overig", summary: "rutrum tincidunt, dui sapien feugiat justo, eget egestas ligula nulla nec erat.", description: "rutrum tincidunt, dui sapien feugiat justo, eget egestas ligula nulla nec erat. maecenas tempus tempor eros. donec a justo. curabitur tellus. pellentesque risus. fusce at arcu. ut lacinia mi vel lectus. phasellus imperdiet. fusce luctus lacus a odio. in et turpis at libero tristique vulputate. sed varius ipsum. suspendisse potenti. suspendisse potenti. donec tempus arcu quis metus."});
          //  self.showIdeaForm();
          //}
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
      self.setSelectedIdea(idea);
      _libs_index_jsx__WEBPACK_IMPORTED_MODULE_8__["default"].localStorage.set('osc-ideas-on-map-details', idea && idea.id);
      _libs_index_jsx__WEBPACK_IMPORTED_MODULE_8__["default"].localStorage.set('osc-ideas-on-map-selected', null); // self.infoblock.setState({ mobileState: self.state.mobileState = 'opened' })

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
      var self = this;
      self.setState({
        status: 'idea-selected'
      }, function () {
        // todo: dit zou hij zelf via state moeten doen
        self.map.map.invalidateSize();
        self.map.showMarkers(self.map.markers);
        self.setSelectedIdea(self.state.currentIdea);
      });
    }
  }, {
    key: "showIdeaForm",
    value: function showIdeaForm(idea, next) {
      var self = this;
      self.setState({
        status: 'idea-form',
        editIdea: idea
      }, function () {
        self.map.map.invalidateSize();
        self.map.hideMarkers({
          exception: {
            location: idea && {
              lat: idea.location.coordinates[0],
              lng: idea.location.coordinates[1]
            } || self.map.selectedLocation
          }
        });
        if (next) next();
      });
    }
  }, {
    key: "hideIdeaForm",
    value: function hideIdeaForm() {
      var self = this;

      if (this.state.editIdea && typeof this.state.editIdea.id == 'number') {
        console.log(self.state.editIdea);
        var idea = self.state.ideas.find(function (idea) {
          return idea.id == self.state.editIdea.id;
        });
        console.log(idea);
        self.showIdeaDetails(idea);
      } else {
        self.setState({
          status: 'location-selected'
        }, function () {
          // todo: dit zou hij zelf via state moeten doen
          self.map.map.invalidateSize();
          self.map.showMarkers(self.map.markers);
          self.setNewIdea(self.state.editIdea);
        });
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
          });
          self.setSelectedLocation({
            lat: idea.location.coordinates[0],
            lng: idea.location.coordinates[1]
          });

          if (self.infoblock) {
            self.setState({
              editIdea: self.state.editIdea
            });
            self.infoblock.setNewIdea(_objectSpread({}, self.state.editIdea, {
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
              self.infoblock.setNewIdea(_objectSpread({}, self.state.editIdea, {
                address: address
              }));
            }); //self.infoblock.updateIdeas({ ideas: self.getVisibleIdeas().filter( x => x.id != idea.id ), sortOrder: 'distance', showSortButton: false, center: { lat: idea.location.coordinates[0], lng: idea.location.coordinates[1] }, maxLength: 5 });

            self.infoblock.updateIdeas({
              ideas: self.state.ideas.filter(function (x) {
                return x.id != idea.id;
              }),
              sortOrder: 'distance',
              showSortButton: false,
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
              showSortButton: true
            });
          }
        }
      });
    }
  }, {
    key: "setSelectedIdea",
    value: function setSelectedIdea(idea) {
      _libs_index_jsx__WEBPACK_IMPORTED_MODULE_8__["default"].localStorage.set('osc-ideas-on-map-selected', idea && idea.id);
      _libs_index_jsx__WEBPACK_IMPORTED_MODULE_8__["default"].localStorage.set('osc-ideas-on-map-details', null);
      this.selectedIdea = idea;

      if (idea) {
        this.map.fadeMarkers({
          exception: idea
        });

        if (this.infoblock) {
          this.infoblock.setSelectedIdea(idea); // this.infoblock.updateIdeas({ ideas: this.getVisibleIdeas().filter( x => x.id != idea.id ), sortOrder: 'distance', showSortButton: false, center: { lat: idea.location.coordinates[0], lng: idea.location.coordinates[1] }, maxLength: 5 });

          this.infoblock.updateIdeas({
            ideas: this.state.ideas.filter(function (x) {
              return x.id != idea.id;
            }),
            sortOrder: 'distance',
            showSortButton: false,
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
            showSortButton: true
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
            this.setState(_objectSpread({}, this.state, {
              status: 'default',
              currentIdea: null
            }));
            this.setSelectedIdea(null);
            this.setNewIdea(null);
            this.infoblock.updateIdeas({
              ideas: this.getVisibleIdeas(),
              showSortButton: true
            });
          } else {
            this.setState(_objectSpread({}, this.state, {
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
            this.setSelectedIdea(null);
            this.setSelectedIdea(null);
          } else {
            this.setState({
              status: 'idea-selected',
              currentIdea: event.target.data
            });
            this.setNewIdea(null);
            this.setSelectedIdea(event.target.data);
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

      this.setState(_objectSpread({}, this.state, {
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
                showSortButton: false,
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
              showSortButton: true
            });
          }

      }
    }
  }, {
    key: "onUpdateEditIdea",
    value: function onUpdateEditIdea(idea) {
      this.setState(_objectSpread({}, this.state, {
        editIdea: _objectSpread({}, idea),
        currentIdea: idea
      }));
    }
  }, {
    key: "onUpdateSelectedIdea",
    value: function onUpdateSelectedIdea(idea) {
      if (this.state.editIdea) this.setNewIdea(null);
      var status = idea ? 'idea-selected' : 'default';
      this.setState(_objectSpread({}, this.state, {
        status: status,
        currentIdea: idea
      }), function () {
        this.setSelectedIdea(idea);
      });
    }
  }, {
    key: "onCloseSelectedLocation",
    value: function onCloseSelectedLocation() {
      this.setState(_objectSpread({}, this.state, {
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

        this.showIdeaDetails(idea);
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
          console.log('xxx', json);
          var address = json && json._display || 'Geen adres gevonden';
          console.log(address);
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
      this.showIdeaDetails(idea);
    }
  }, {
    key: "onNewIdeaClick",
    value: function onNewIdeaClick() {
      var _this2 = this;

      var self = this;
      self.showIdeaForm(this.state.editIdea, function () {
        var location = {
          lat: _this2.state.editIdea.location.coordinates[0],
          lng: _this2.state.editIdea.location.coordinates[1]
        };
        self.ideaform.handleLocationChange({
          location: location,
          address: 'Bezig met adresgegevens ophalen...'
        });
        self.map.getPointInfo(location, null, function (json, marker) {
          console.log('xxx', json);
          var address = json && json._display || 'Geen adres gevonden';
          console.log(address);
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
    value: function onReactionStored(data) {
      var idea = this.state.ideas.find(function (idea) {
        return idea.id == data.ideaId;
      });
      idea.argCount++;
      setTimeout(function (e) {
        window.location.hash = "#osc-reaction-".concat(data.id);
      }, 1000);
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
          return marker.data && eval("marker.data.".concat(self.config.typeField)) && eval("marker.data.".concat(self.config.typeField)) == value;
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
    key: "onClickMobileSwitcher",
    value: function onClickMobileSwitcher() {
      var self = this;
      self.infoblock.setState({
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
            argument: this.config.argument,
            labels: {
              Kans: {
                text: 'Dit gaat goed',
                color: 'black',
                backgroundColor: '#bed200'
              },
              Knelpunt: {
                text: 'Dit kan beter',
                color: 'black',
                backgroundColor: '#ff9100'
              }
            }
          };
          infoHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_idea_details_index_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], (_React$createElement = {
            id: this.divId + '-infoblock',
            config: config,
            idea: this.state.currentIdea,
            label: this.state.currentIdea.extraData.type
          }, _defineProperty(_React$createElement, "id", "osc-ideas-on-map-info"), _defineProperty(_React$createElement, "className", "osc-ideas-on-map-info"), _defineProperty(_React$createElement, "mobileState", this.state.mobileState), _defineProperty(_React$createElement, "ref", function ref(el) {
            return _this3.ideadetails = el;
          }), _React$createElement));
          filterHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "osc-ideas-on-map-filterbar"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "osc-backbutton",
            onClick: function onClick() {
              return _this3.hideIdeaDetails();
            }
          }, "Terug naar overzicht"));
          break;

        case 'idea-form':
          infoHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_idea_form_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], (_React$createElement2 = {
            id: this.divId + '-infoblock',
            config: _objectSpread({
              siteId: this.config.siteId,
              user: this.config.user,
              api: this.config.api
            }, this.config.idea),
            idea: _objectSpread({}, this.state.editIdea, {
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
              var buttonHTML = this.config.api.isUserLoggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
                className: "osc-button osc-button-blue",
                onClick: function onClick(event) {
                  _this3.onClickMobileSwitcher(event);

                  _this3.onNewIdeaClick(event);
                },
                ref: function ref(el) {
                  return self.newIdeaButton = el;
                }
              }, "Nieuw punt toevoegen") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Wilt u een nieuw punt toevoegen? Dan moet u eerst ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
                href: "javascript: document.location.href = '/oauth/login?returnTo=' + encodeURIComponent(document.location.href)"
              }, "inloggen"), ".");
              mobilePopupHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
                className: "ocs-mobile-popup"
              }, "Een locatie vlakbij", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, this.state.editIdea && this.state.editIdea.address), buttonHTML);
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

                _this3.showIdeaDetails(_this3.state.currentIdea);
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
              title: this.config.title,
              titleField: this.config.titleField,
              summaryField: this.config.summaryField,
              types: this.config.types
            }
          }, _defineProperty(_React$createElement3, "id", "osc-ideas-on-map-info"), _defineProperty(_React$createElement3, "className", "osc-ideas-on-map-info"), _defineProperty(_React$createElement3, "mobileState", this.state.mobileState), _defineProperty(_React$createElement3, "ref", function ref(el) {
            return _this3.infoblock = el;
          }), _React$createElement3));
          filterHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_filterbar_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
            id: this.divId + '-filterbar',
            config: {
              types: this.config.types,
              areas: this.config.areas,
              doSearchFunction: this.config.doSearchFunction,
              title: this.config.title
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
              title: this.config.title,
              titleField: this.config.titleField,
              summaryField: this.config.summaryField,
              types: this.config.types
            }
          }, _defineProperty(_React$createElement4, "id", "osc-ideas-on-map-info"), _defineProperty(_React$createElement4, "className", "osc-ideas-on-map-info"), _defineProperty(_React$createElement4, "mobileState", this.state.mobileState), _defineProperty(_React$createElement4, "ref", function ref(el) {
            return _this3.infoblock = el;
          }), _React$createElement4));
          filterHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_filterbar_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
            id: this.divId + '-filterbar',
            config: {
              types: this.config.types,
              areas: this.config.areas,
              doSearchFunction: this.config.doSearchFunction,
              title: this.config.title
            },
            className: "osc-ideas-on-map-filterbar",
            ref: function ref(el) {
              return _this3.filterbar = el;
            }
          });
          mobilePopupHTML = null;
          break;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: this.divId,
        className: "osc-ideas-on-map osc-ideas-on-map-".concat(this.state.status, " osc-mobile-").concat(this.state.mobileState),
        ref: function ref(el) {
          return _this3.instance = el;
        }
      }, filterHTML, infoHTML, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-ideas-on-map-map"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_map_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: this.divId + '-map',
        className: "",
        config: _objectSpread({}, this.config.map, {
          types: this.config.types,
          typeField: this.config.typeField
        }),
        ref: function ref(el) {
          return _this3.map = el;
        }
      })), mobilePopupHTML);
    }
  }]);

  return OpenStadComponentIdeasOnMap;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_7__["default"]);



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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ideas_list_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ideas-list.jsx */ "./src/ideas-on-map/component/ideas-list.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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

    var defaultConfig = {};
    _this.config = Object.assign(defaultConfig, _this.props.config || {});
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
          showSortButton = _ref.showSortButton,
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
        showSortButton: showSortButton,
        center: center,
        maxLength: maxLength
      });
    }
  }, {
    key: "setSelectedIdea",
    value: function setSelectedIdea(idea) {
      this.setState(_objectSpread({}, this.state, {
        selectedIdea: idea,
        newIdea: null
      }));
    }
  }, {
    key: "setNewIdea",
    value: function setNewIdea(idea) {
      this.setState(_objectSpread({}, this.state, {
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
    value: function dispatchNewIdeaClick(e) {
      e.stopPropagation();
      var event = new window.CustomEvent('newIdeaClick', {
        detail: {}
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
      var self = this;
      var newIdeaHTML = null;
      var selectedIdeaHTML = null;
      var titleAddition = '';
      var mobileSwitcherHTML = null;
      var mobileTitle = ''; // new idea

      if (self.state.newIdea) {
        if (self.state.newIdea.isPointInPolygon) {
          var button = null;

          if (self.config.api.isUserLoggedIn) {
            button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
              className: "osc-button osc-button-blue",
              onClick: function onClick(event) {
                return self.dispatchNewIdeaClick(event);
              },
              ref: function ref(el) {
                return self.newIdeaButton = el;
              }
            }, "Nieuw punt toevoegen");
          } else {
            button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
              onClick: function onClick() {
                document.location.href = '/oauth/login?returnTo=' + encodeURIComponent(document.location.href);
              },
              className: "osc-button-blue osc-not-logged-in-button"
            }, "Inloggen");
          }

          newIdeaHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "osc-info-block-new-idea"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            className: "osc-close-button",
            onClick: function onClick(event) {
              return self.dispatchCloseSelectedLocation(event, null);
            },
            ref: function ref(el) {
              return self.resetButton = el;
            }
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Geselecteerd:"), " Een locatie vlakbij ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, self.state.newIdea.address)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Op deze locatie is nog geen punt ingestuurd. Maar misschien heeft een medebewoner wel een vergelijkbare melding gedaan in de omgeving waaraan u kunt bijdragen. Bekijk daarom eerst de inzendingen in onderstaande lijst. Wilt u een nieuw punt toevoegen? Klik dan hier:"), button);
        } else {
          newIdeaHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "osc-info-block-new-idea"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            className: "osc-close-button",
            onClick: function onClick(event) {
              return self.dispatchCloseSelectedLocation(event, null);
            },
            ref: function ref(el) {
              return self.resetButton = el;
            }
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Geselecteerd"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "U heeft een locatie geselecteerd buiten het begrensde gebied. U kunt via deze website geen melding op deze locatie inzenden."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Wilt u melden wat er goed is of wat er beter kan in de omliggende straten en pleinen? Dan horen we dit graag van u via e-mail. Klik daarvoor op de link hieronder of stuur direct een e-mail naar gerarddoubuurt@amsterdam.nl."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            className: "osc-link",
            href: "mailto: gerarddoubuurt@amsterdam.nl"
          }, "Stuur een e-mail"));
        }

        titleAddition = 'in de buurt';
        mobileTitle = 'Meer details en acties';
      } // selected idea


      if (self.state.selectedIdea) {
        var idea = self.state.selectedIdea;
        var typeDef = self.config.types.find(function (entry) {
          return idea.extraData && entry.name == idea.extraData.theme;
        });

        if (!typeDef) {
          typeDef = {
            listicon: {
              html: ''
            }
          };
          console.log(idea.extraData.theme + ' niet gevonden');
        }

        selectedIdeaHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "osc-info-block-selected-idea",
          onClick: function onClick(event) {
            return self.dispatchSelectedIdeaClick(event, self.state.selectedIdea);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "osc-close-button",
          onClick: function onClick(event) {
            return self.dispatchUpdateSelectedIdea(event, null);
          },
          ref: function ref(el) {
            return self.resetButton = el;
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Geselecteerd"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "osc-info-block-selected-idea-idea"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "osc-image",
          style: {
            backgroundImage: "url(".concat(idea.image, ")")
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "osc-content"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, eval("idea.".concat(self.config.titleField))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "osc-summary"
        }, eval("idea.".concat(self.config.summaryField))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "osc-stats"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "osc-likes"
        }, idea.yes || 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "osc-reactions"
        }, idea.argCount || 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "osc-type"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "osc-type-content",
          dangerouslySetInnerHTML: {
            __html: typeDef.listicon.html
          }
        })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "osc-clear-both"
        })));
        titleAddition = 'in de buurt';
        mobileTitle = 'Meer details';
      }

      if (!titleAddition) titleAddition = 'in dit gebied';
      var defaultBlockHTML = null;

      if (!newIdeaHTML && !selectedIdeaHTML) {
        defaultBlockHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "osc-info-block-default-block"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "osc-info-block-default-block-line osc-line-1"
        }, "Klik op een plek op de kaart om een nieuw punt toe te voegen."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "osc-info-block-default-block-line osc-line-2"
        }, "Selecteer een inzending op de kaart om meer informatie over de inzending te bekijken."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "osc-info-block-default-block-line osc-line-3"
        }, "Bekijk hieronder de inzendingen die nu zichtbaar zijn op de kaart."));
        mobileTitle = "".concat(self.config.title, " in dit gebied (").concat(self.state.ideas && self.state.ideas.length || 0, ")");
      }

      if (self.state.mobileState == 'opened') {
        mobileTitle = 'Terug naar de kaart';
      }

      mobileSwitcherHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "osc-mobile-switcher",
        onClick: function onClick(e) {
          return self.dispatchClickMobileSwitcher(e);
        }
      }, mobileTitle); // TODO: kan de key weg uit IdeasList

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: self.props.id,
        className: self.props.className || 'osc-info-block',
        ref: function ref(el) {
          return self.instance = el;
        }
      }, mobileSwitcherHTML, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "osc-info-content"
      }, defaultBlockHTML, newIdeaHTML, selectedIdeaHTML, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ideas_list_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        config: _objectSpread({}, self.config, {
          onIdeaClick: function onIdeaClick(event, idea) {
            return self.dispatchOnIdeaClick(event, idea);
          }
        }),
        ideas: self.state.ideas,
        title: self.config.title + ' ' + titleAddition,
        key: "osc-ideas-list-321",
        ref: function ref(el) {
          return self.list = el;
        }
      })));
    }
  }]);

  return InfoBlock;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



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

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
      }
    };
    _this.config = merge__WEBPACK_IMPORTED_MODULE_0___default.a.recursive(_this.defaultConfig, _this.config, props.config || {}); // tmp fallback

    _this.config.polygon = self.config.polygon || [{
      lng: 4.8923325,
      lat: 52.3578818
    }, {
      lng: 4.8922574,
      lat: 52.3574723
    }, {
      lng: 4.8920697,
      lat: 52.3574854
    }, {
      lng: 4.8919410,
      lat: 52.3567908
    }, {
      lng: 4.8906860,
      lat: 52.3568661
    }, {
      lng: 4.8904125,
      lat: 52.3552313
    }, {
      lng: 4.8928991,
      lat: 52.3556621
    }, {
      lng: 4.8928025,
      lat: 52.3558538
    }, {
      lng: 4.8930225,
      lat: 52.3558964
    }, {
      lng: 4.8931164,
      lat: 52.3557162
    }, {
      lng: 4.8953144,
      lat: 52.3562174
    }, {
      lng: 4.8971003,
      lat: 52.3566958
    }, {
      lng: 4.8969823,
      lat: 52.3568498
    }, {
      lng: 4.8971968,
      lat: 52.3569055
    }, {
      lng: 4.8973095,
      lat: 52.3567646
    }, {
      lng: 4.8985805,
      lat: 52.3571577
    }, {
      lng: 4.8984679,
      lat: 52.3572757
    }, {
      lng: 4.8986020,
      lat: 52.3573281
    }, {
      lng: 4.8985215,
      lat: 52.3575247
    }, {
      lng: 4.8983499,
      lat: 52.3574952
    }, {
      lng: 4.8982480,
      lat: 52.3574985
    }, {
      lng: 4.8982748,
      lat: 52.3574362
    }, {
      lng: 4.8972826,
      lat: 52.3571512
    }, {
      lng: 4.8931691,
      lat: 52.3574493
    }, {
      lng: 4.8932067,
      lat: 52.3576099
    }, {
      lng: 4.8931262,
      lat: 52.3576131
    }, {
      lng: 4.8931584,
      lat: 52.3578228
    }, {
      lng: 4.8923325,
      lat: 52.3578810
    }];
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

      var typename = idea && eval("idea.".concat(self.config.typeField));
      var typeDef = self.config.types.find(function (entry) {
        return entry.name == typename;
      });

      if (!typeDef) {
        console.log(typename + ' niet gevonden');
      }

      var color = typeDef && typeDef.color || 'black';
      var icondef = typeDef.mapicon || typeDef.icon || {
        img: "<svg viewBox=\"0 0 26 26\"><circle cx=\"13\" cy=\"13\" r=\"13\" fill=\"".concat(color, "\"/></svg>"),
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
          this.selectedLocationMarker = this.addMarker(_objectSpread({}, location, {
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
      _get(_getPrototypeOf(Map.prototype), "setBoundsAndCenter", this).call(this, points || this.config.autoZoomAndCenter == 'polygon' && this.config.polygon || this.map.markers);
    }
  }, {
    key: "showMarkers",
    value: function showMarkers() {
      var self = this;
      self.markers.forEach(function (marker) {
        self.showMarker(marker);
      });
      self.setBoundsAndCenter(self.config.autoZoomAndCenter == 'polygon' && self.config.polygon || self.markers);
    }
  }, {
    key: "hideMarkers",
    value: function hideMarkers(_ref) {
      var exception = _ref.exception;
      var self = this;
      if (exception) self.setBoundsAndCenter([exception.location]);
      self.markers.forEach(function (marker) {
        if (!(exception && exception.location.lat == marker._latlng.lat && exception.location.lng == marker._latlng.lng)) {
          self.hideMarker(marker);
        }
      });
    }
  }, {
    key: "fadeMarkers",
    value: function fadeMarkers(_ref2) {
      var exception = _ref2.exception;
      var self = this;
      self.markers.forEach(function (marker) {
        if (exception && marker.data && marker.data.id && exception.id == marker.data.id) {
          if (marker.data) marker.data.isFaded = false;
        } else {
          if (marker.data) marker.data.isFaded = true;
          var visibleParent = self.markerClusterGroup.getVisibleParent(marker);
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
        var visibleParent = self.markerClusterGroup.getVisibleParent(marker);

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
        var visibleParent = self.markerClusterGroup.getVisibleParent(marker);

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

/***/ "./src/ideas-on-map/component/openstad-component-formelements/formelement.jsx":
/*!************************************************************************************!*\
  !*** ./src/ideas-on-map/component/openstad-component-formelements/formelement.jsx ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentFormelement; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


'use strict';

var OpenStadComponentFormelement = /*#__PURE__*/function (_React$Component) {
  _inherits(OpenStadComponentFormelement, _React$Component);

  var _super = _createSuper(OpenStadComponentFormelement);

  function OpenStadComponentFormelement(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentFormelement);

    _this = _super.call(this, props); // config

    var defaultConfig = {
      title: 'Onbekend veld',
      infoText: null,
      minChars: null,
      maxChars: null
    };
    _this.config = Object.assign(defaultConfig, _this.props.config || {}); // this.config.onIdeaClick = this.config.onIdeaClick || this.onIdeaClick.bind(this);

    _this.state = {
      ideaId: _this.config.ideaId
    };
    return _this;
  }

  _createClass(OpenStadComponentFormelement, [{
    key: "componentDidMount",
    value: function componentDidMount(prevProps, prevState) {}
  }, {
    key: "render",
    value: function render(elementHTML) {
      var self = this;
      var infoHTML = null;

      if (self.config.infoText) {
        infoHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "form-info"
        }, this.config.infoText);
      }

      var charsCounterHTML = null;

      if (this.config.minChars && this.config.maxChars) {
        charsCounterHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          id: "charsLeftTitle",
          className: "charsLeft"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "min error visible"
        }, "Nog minimaal ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "2"), " tekens"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "max"
        }, "Je hebt nog ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "0"), " tekens over."));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "osc-form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, self.config.title), infoHTML, charsCounterHTML, elementHTML);
    }
  }]);

  return OpenStadComponentFormelement;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/ideas-on-map/component/openstad-component-formelements/image-upload.jsx":
/*!*************************************************************************************!*\
  !*** ./src/ideas-on-map/component/openstad-component-formelements/image-upload.jsx ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentImageUpload; });
/* harmony import */ var _formelement_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formelement.jsx */ "./src/ideas-on-map/component/openstad-component-formelements/formelement.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


'use strict';

var OpenStadComponentImageUpload = /*#__PURE__*/function (_OpenStadComponentFor) {
  _inherits(OpenStadComponentImageUpload, _OpenStadComponentFor);

  var _super = _createSuper(OpenStadComponentImageUpload);

  function OpenStadComponentImageUpload(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentImageUpload);

    _this = _super.call(this, props); // config

    var defaultConfig = {
      server: {
        process: 'http://images.openstad.francesco.denes.nl/image/?access_token=314',
        fetch: 'http://images.openstad.francesco.denes.nl/image'
      }
    };
    _this.config = Object.assign(defaultConfig, _this.props.config, _this.config || {}); /// TODO: error on geen server config?

    _this.state = {
      value: _this.props.value
    };
    return _this;
  }

  _createClass(OpenStadComponentImageUpload, [{
    key: "componentDidMount",
    value: function componentDidMount(prevProps, prevState) {
      // filepond
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
      var fieldsetElement = document.querySelector('.filepondFieldset2');

      if (fieldsetElement) {
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
          maxFileSize: '8mb',
          name: 'image',
          maxFiles: 3,
          allowBrowse: true,
          files: [],
          server: {
            process: this.config.server.process,
            fetch: this.config.server.fetch
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
        self.imageuploader = FilePond.create(fieldsetElement, filePondSettings);
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
            var serverId = JSON.parse(image.serverId);
            self.state.value.push(serverId.url);
          } catch (err) {
            console.log(err);
          }
        });
      }

      self.props.handleFieldChange(self.props.name, self.state.value);
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
      var inputElement = /*#__PURE__*/React.createElement("fieldset", {
        className: "filepondFieldset2"
      }, /*#__PURE__*/React.createElement("div", {
        className: "form-warning-container"
      }, /*#__PURE__*/React.createElement("span", {
        id: "form-warning-images",
        className: "form-warning"
      }, "Het uploaden van images is nog niet afgerond")), /*#__PURE__*/React.createElement("input", {
        type: "file",
        className: "imageUploader-gebiedstool filepond-gebiedstool"
      })); //   <input value={self.props.value} onChange={ () => self.props.handleFieldChange(self.props.name, self.formfield.value ) } ref={ el => self.formfield = el }></input>

      return _get(_getPrototypeOf(OpenStadComponentImageUpload.prototype), "render", this).call(this, inputElement);
    }
  }]);

  return OpenStadComponentImageUpload;
}(_formelement_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/ideas-on-map/component/openstad-component-formelements/input-with-counter.jsx":
/*!*******************************************************************************************!*\
  !*** ./src/ideas-on-map/component/openstad-component-formelements/input-with-counter.jsx ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentFormfieldsInputWithCounter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



'use strict';

var OpenStadComponentFormfieldsInputWithCounter = /*#__PURE__*/function (_React$Component) {
  _inherits(OpenStadComponentFormfieldsInputWithCounter, _React$Component);

  var _super = _createSuper(OpenStadComponentFormfieldsInputWithCounter);

  function OpenStadComponentFormfieldsInputWithCounter(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentFormfieldsInputWithCounter);

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
    self.config = Object.assign(self.defaultConfig, self.config, props.config || {});
    self.state = {
      focused: false,
      value: props.value || '',
      valueLength: props.value.length
    };
    _this.onChange = props.onChange;
    return _this;
  }

  _createClass(OpenStadComponentFormfieldsInputWithCounter, [{
    key: "validate",
    value: function validate() {
      var state = _objectSpread({}, this.state);

      state.isValid = true;
      state.warning = null;

      if (this.state.valueLength < this.config.minLength) {
        state.warning = "Je ".concat(this.config.name, " is te kort");
        state.isValid = false;
      }

      if (this.state.valueLength > this.config.maxLength) {
        state.warning = "Je ".concat(this.config.name, " is te lang");
        state.isValid = false;
      }

      state.showWarning = true;
      this.setState(state);
      return state.isValid;
    }
  }, {
    key: "showWarning",
    value: function showWarning() {
      var state = _objectSpread({}, this.state);

      state.showWarning = true;
      this.setState(state);
    }
  }, {
    key: "handleOnChange",
    value: function handleOnChange(data) {
      data = data || {};
      this.setState(data);

      if (typeof this.onChange == 'function') {
        this.onChange(data);
      }
    }
  }, {
    key: "handleInputFocus",
    value: function handleInputFocus() {
      var state = _objectSpread({}, this.state);

      state.focused = true;
      state.showWarning = false;
      this.setState(state);
    }
  }, {
    key: "handleInputBlur",
    value: function handleInputBlur() {
      var state = _objectSpread({}, this.state);

      state.focused = false;
      this.setState(state);
    }
  }, {
    key: "handleInputKeyUp",
    value: function handleInputKeyUp() {
      var state = {};
      var valueLength = this.input.value.length;
      state.value = this.input.value;
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
          counter = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "osc-form-counter osc-form-error"
          }, "Nog minimaal ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: ""
          }, self.config.minLength - self.state.valueLength), " tekens");
        } else {
          var error = self.state.valueLength > self.config.maxLength ? 'osc-form-error' : '';
          counter = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: 'osc-form-counter ' + error
          }, "Je hebt nog ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: ""
          }, self.config.maxLength - self.state.valueLength), " tekens over.");
        }
      }

      if (self.state.showWarning && self.state.warning) {
        warning = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "osc-form-warning",
          ref: function ref(el) {
            return _this2['form-warning-theme'] = el;
          }
        }, self.state.warning);
      }

      var inputHTML = null;

      switch (self.config.inputType) {
        case 'textarea':
          inputHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
            ref: function ref(el) {
              return self.input = el;
            },
            value: this.props.value,
            disabled: this.props.disabled,
            placeholder: this.config.placeholder,
            onChange: function onChange(e) {
              return self.handleOnChange({
                value: self.input.value
              });
            },
            onKeyUp: function onKeyUp(e) {
              return self.handleInputKeyUp(e);
            },
            onFocus: function onFocus(e) {
              return self.handleInputFocus(e);
            },
            onBlur: function onBlur(e) {
              return self.handleInputBlur(e);
            }
          });
          break;

        case 'input':
        default:
          inputHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
            ref: function ref(el) {
              return self.input = el;
            },
            value: this.props.value,
            disabled: this.props.disabled,
            placeholder: this.config.placeholder,
            onChange: function onChange(e) {
              return self.handleOnChange({
                value: self.input.value
              });
            },
            onKeyUp: function onKeyUp(e) {
              return self.handleInputKeyUp(e);
            },
            onFocus: function onFocus(e) {
              return self.handleInputFocus(e);
            },
            onBlur: function onBlur(e) {
              return self.handleInputBlur(e);
            }
          });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: self.id,
        ref: function ref(el) {
          return self.instance = el;
        },
        className: "osc-input-with-counter"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "osc-form-feedback"
      }, inputHTML, counter, warning));
    }
  }]);

  return OpenStadComponentFormfieldsInputWithCounter;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



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

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
    _this.config.doSearchFunction = _this.config.doSearchFunction || _this.doSearchx.bind(_assertThisInitialized(_this));
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
        this.config.doSearchFunction(value, this.updateSearchResult.bind(this));
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
      console.log('++', value);
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
      // console.log('update', searchValue, searchResult);
      this.setState(_objectSpread({}, this.state, {
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
        suggestionsHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "osc-search-suggestions",
          ref: function ref(el) {
            return self.suggestions = el;
          }
        }, "Adressen:", self.state.searchResult.locations.map(function (result, i) {
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
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "osc-search-suggestions-hr"
        }), this.config.title, ":", self.state.searchResult.ideas.map(function (result, i) {
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

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: self.id,
        className: self.props.className || 'osc-search',
        ref: function ref(el) {
          return self.instance = el;
        }
      }, suggestionsHTML, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        value: this.state.searchValue,
        placeholder: "Zoek op trefwoord",
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
  sessionStorage: _lib_session_storage_js__WEBPACK_IMPORTED_MODULE_7__["default"]
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



var OpenStadComponentUser = {
  getUser: _get_user_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  getJWT: _get_jwt_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  logout: _logout_js__WEBPACK_IMPORTED_MODULE_2__["default"]
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _lib_amaps_cluster_icon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/amaps-cluster-icon.js */ "./src/nlmap/lib/amaps-cluster-icon.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
          self.map = amaps.createMap(self.config);
          break;

        default:
          self.map = nlmaps.createMap(self.config);
      } // clustering


      if (self.config.clustering && self.config.clustering.isActive && L.markerClusterGroup) {
        var iconCreateFunction = self.config.clustering.iconCreateFunction || (self.config.variant == 'amaps' ? _lib_amaps_cluster_icon_js__WEBPACK_IMPORTED_MODULE_3__["default"].bind(self) : self.createClusterIcon);
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
      console.log(polygon.length);
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

      var i;
      var j = polygon.length - 1;
      var inPoly = false;
      var lat = point.lat;
      var lng = point.lng;

      for (i = 0; i < polygon.length; i++) {
        if (polygon[i].lng < lng && polygon[j].lng >= lng || polygon[j].lng < lng && polygon[i].lng >= lng) {
          if (polygon[i].lat + (lng - polygon[i].lng) / (polygon[j].lng - polygon[i].lng) * (polygon[j].lat - polygon[i].lat) < lat) {
            inPoly = !inPoly;
          }
        }

        j = i;
      }

      return inPoly;
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
  var count = cluster.getChildCount();

  if (self.config.typeField && self.config.types && self.config.types.length) {
    // todo: configurable
    var _count = cluster.getChildCount();

    var markers = cluster.getAllChildMarkers();
    var colors = {};
    var total = markers.length;
    var isFaded = false;
    markers.forEach(function (entry) {
      var type = entry.data && eval("entry.data.".concat(self.config.typeField));
      var tmp = self.config.types.find(function (entry) {
        return entry.name == type;
      });
      var color = tmp && tmp.color || 'black';
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
    html += '<text x="18" y="21" text-anchor="middle" class="openstad-component-ideas-on-map-icon openstad-component-ideas-on-map-icon-text">' + _count + '</text></svg>';
    return L.divIcon({
      html: html,
      className: 'openstad-component-ideas-on-map-icon-cluster',
      iconSize: L.point(36, 36),
      iconAnchor: [18, 18],
      isFaded: isFaded
    });
  } else {
    return L.divIcon({
      html: count,
      className: 'openstad-component-ideas-on-map-icon-cluster',
      iconSize: L.point(20, 20),
      iconAnchor: [20, 10]
    });
  }
}

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

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
      document.addEventListener('osc-new-reaction-stored', function (event) {
        self.onNewReactionStored(event.detail);
      });
      document.addEventListener('osc-reaction-edited', function (event) {
        self.onReactionEdited(event.detail);
      });
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
      if (!self.canDelete()) return alert('Je kunt deze reactie niet verwijderen');
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
      if (!self.canLike()) return alert('Je kunt deze reactie niet liken');
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
        console.log({
          yes: json.yes,
          hasUserVoted: json.hasUserVoted
        });
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
          config: _objectSpread({}, self.config, {
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

      if (self.canReply()) {
        replyButtonHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "#",
          onClick: function onClick() {
            return self.toggleReplyForm();
          },
          className: "osc-reply-button"
        }, "Reageren");

        if (self.state.isReplyFromActive) {
          var config = _objectSpread({}, self.config, {
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
      }, menuHTML, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "osc-reaction-user"
      }, data.user.nickName || data.user.fullName || "".concat(data.user.firstName, " ").concat(data.user.lastName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
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

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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

      document.addEventListener('osc-new-reaction-stored', function (event) {
        self.onNewReactionStored(event.detail);
      });
      document.addEventListener('osc-reaction-edited', function (event) {
        self.onReactionEdited(event.detail);
      });
      document.addEventListener('osc-reaction-deleted', function (event) {
        self.onReactionDeleted(event.detail);
      });
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
        });
        console.log(state.reactions);
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: this.id,
        className: self.props.className || 'osc-reactions',
        ref: function ref(el) {
          _this3.instance = el;
        }
      }, title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reaction_form_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
        config: self.config,
        user: self.state.user
      }), reactions, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null));
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
//# sourceMappingURL=ideas-on-map.js.map