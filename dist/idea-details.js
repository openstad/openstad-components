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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/idea-details/index.jsx");
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
//# sourceMappingURL=idea-details.js.map