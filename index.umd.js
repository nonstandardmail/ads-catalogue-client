(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@babel/runtime/regenerator'), require('@babel/runtime/helpers/asyncToGenerator')) :
  typeof define === 'function' && define.amd ? define(['exports', '@babel/runtime/regenerator', '@babel/runtime/helpers/asyncToGenerator'], factory) :
  (global = global || self, factory(global['ads-catalogue-client'] = {}, global._regeneratorRuntime, global._asyncToGenerator));
}(this, function (exports, _regeneratorRuntime, _asyncToGenerator) { 'use strict';

  _regeneratorRuntime = _regeneratorRuntime && _regeneratorRuntime.hasOwnProperty('default') ? _regeneratorRuntime['default'] : _regeneratorRuntime;
  _asyncToGenerator = _asyncToGenerator && _asyncToGenerator.hasOwnProperty('default') ? _asyncToGenerator['default'] : _asyncToGenerator;

  /**
   * A function that always returns `false`. Any passed in parameters are ignored.
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category Function
   * @sig * -> Boolean
   * @param {*}
   * @return {Boolean}
   * @see R.T
   * @example
   *
   *      R.F(); //=> false
   */
  var F = function () {
    return false;
  };

  /**
   * A function that always returns `true`. Any passed in parameters are ignored.
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category Function
   * @sig * -> Boolean
   * @param {*}
   * @return {Boolean}
   * @see R.F
   * @example
   *
   *      R.T(); //=> true
   */
  var T = function () {
    return true;
  };

  /**
   * A special placeholder value used to specify "gaps" within curried functions,
   * allowing partial application of any combination of arguments, regardless of
   * their positions.
   *
   * If `g` is a curried ternary function and `_` is `R.__`, the following are
   * equivalent:
   *
   *   - `g(1, 2, 3)`
   *   - `g(_, 2, 3)(1)`
   *   - `g(_, _, 3)(1)(2)`
   *   - `g(_, _, 3)(1, 2)`
   *   - `g(_, 2, _)(1, 3)`
   *   - `g(_, 2)(1)(3)`
   *   - `g(_, 2)(1, 3)`
   *   - `g(_, 2)(_, 3)(1)`
   *
   * @name __
   * @constant
   * @memberOf R
   * @since v0.6.0
   * @category Function
   * @example
   *
   *      const greet = R.replace('{name}', R.__, 'Hello, {name}!');
   *      greet('Alice'); //=> 'Hello, Alice!'
   */
  var __ = { '@@functional/placeholder': true };

  function _isPlaceholder(a) {
         return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;
  }

  /**
   * Optimized internal one-arity curry function.
   *
   * @private
   * @category Function
   * @param {Function} fn The function to curry.
   * @return {Function} The curried function.
   */
  function _curry1(fn) {
    return function f1(a) {
      if (arguments.length === 0 || _isPlaceholder(a)) {
        return f1;
      } else {
        return fn.apply(this, arguments);
      }
    };
  }

  /**
   * Optimized internal two-arity curry function.
   *
   * @private
   * @category Function
   * @param {Function} fn The function to curry.
   * @return {Function} The curried function.
   */
  function _curry2(fn) {
    return function f2(a, b) {
      switch (arguments.length) {
        case 0:
          return f2;
        case 1:
          return _isPlaceholder(a) ? f2 : _curry1(function (_b) {
            return fn(a, _b);
          });
        default:
          return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function (_a) {
            return fn(_a, b);
          }) : _isPlaceholder(b) ? _curry1(function (_b) {
            return fn(a, _b);
          }) : fn(a, b);
      }
    };
  }

  /**
   * Adds two values.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Math
   * @sig Number -> Number -> Number
   * @param {Number} a
   * @param {Number} b
   * @return {Number}
   * @see R.subtract
   * @example
   *
   *      R.add(2, 3);       //=>  5
   *      R.add(7)(10);      //=> 17
   */
  var add = /*#__PURE__*/_curry2(function add(a, b) {
    return Number(a) + Number(b);
  });

  /**
   * Private `concat` function to merge two array-like objects.
   *
   * @private
   * @param {Array|Arguments} [set1=[]] An array-like object.
   * @param {Array|Arguments} [set2=[]] An array-like object.
   * @return {Array} A new, merged array.
   * @example
   *
   *      _concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
   */
  function _concat(set1, set2) {
    set1 = set1 || [];
    set2 = set2 || [];
    var idx;
    var len1 = set1.length;
    var len2 = set2.length;
    var result = [];

    idx = 0;
    while (idx < len1) {
      result[result.length] = set1[idx];
      idx += 1;
    }
    idx = 0;
    while (idx < len2) {
      result[result.length] = set2[idx];
      idx += 1;
    }
    return result;
  }

  function _arity(n, fn) {
    /* eslint-disable no-unused-vars */
    switch (n) {
      case 0:
        return function () {
          return fn.apply(this, arguments);
        };
      case 1:
        return function (a0) {
          return fn.apply(this, arguments);
        };
      case 2:
        return function (a0, a1) {
          return fn.apply(this, arguments);
        };
      case 3:
        return function (a0, a1, a2) {
          return fn.apply(this, arguments);
        };
      case 4:
        return function (a0, a1, a2, a3) {
          return fn.apply(this, arguments);
        };
      case 5:
        return function (a0, a1, a2, a3, a4) {
          return fn.apply(this, arguments);
        };
      case 6:
        return function (a0, a1, a2, a3, a4, a5) {
          return fn.apply(this, arguments);
        };
      case 7:
        return function (a0, a1, a2, a3, a4, a5, a6) {
          return fn.apply(this, arguments);
        };
      case 8:
        return function (a0, a1, a2, a3, a4, a5, a6, a7) {
          return fn.apply(this, arguments);
        };
      case 9:
        return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
          return fn.apply(this, arguments);
        };
      case 10:
        return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
          return fn.apply(this, arguments);
        };
      default:
        throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
    }
  }

  /**
   * Internal curryN function.
   *
   * @private
   * @category Function
   * @param {Number} length The arity of the curried function.
   * @param {Array} received An array of arguments received thus far.
   * @param {Function} fn The function to curry.
   * @return {Function} The curried function.
   */
  function _curryN(length, received, fn) {
    return function () {
      var combined = [];
      var argsIdx = 0;
      var left = length;
      var combinedIdx = 0;
      while (combinedIdx < received.length || argsIdx < arguments.length) {
        var result;
        if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {
          result = received[combinedIdx];
        } else {
          result = arguments[argsIdx];
          argsIdx += 1;
        }
        combined[combinedIdx] = result;
        if (!_isPlaceholder(result)) {
          left -= 1;
        }
        combinedIdx += 1;
      }
      return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length, combined, fn));
    };
  }

  /**
   * Returns a curried equivalent of the provided function, with the specified
   * arity. The curried function has two unusual capabilities. First, its
   * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
   * following are equivalent:
   *
   *   - `g(1)(2)(3)`
   *   - `g(1)(2, 3)`
   *   - `g(1, 2)(3)`
   *   - `g(1, 2, 3)`
   *
   * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
   * "gaps", allowing partial application of any combination of arguments,
   * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
   * the following are equivalent:
   *
   *   - `g(1, 2, 3)`
   *   - `g(_, 2, 3)(1)`
   *   - `g(_, _, 3)(1)(2)`
   *   - `g(_, _, 3)(1, 2)`
   *   - `g(_, 2)(1)(3)`
   *   - `g(_, 2)(1, 3)`
   *   - `g(_, 2)(_, 3)(1)`
   *
   * @func
   * @memberOf R
   * @since v0.5.0
   * @category Function
   * @sig Number -> (* -> a) -> (* -> a)
   * @param {Number} length The arity for the returned function.
   * @param {Function} fn The function to curry.
   * @return {Function} A new, curried function.
   * @see R.curry
   * @example
   *
   *      const sumArgs = (...args) => R.sum(args);
   *
   *      const curriedAddFourNumbers = R.curryN(4, sumArgs);
   *      const f = curriedAddFourNumbers(1, 2);
   *      const g = f(3);
   *      g(4); //=> 10
   */
  var curryN = /*#__PURE__*/_curry2(function curryN(length, fn) {
    if (length === 1) {
      return _curry1(fn);
    }
    return _arity(length, _curryN(length, [], fn));
  });

  /**
   * Creates a new list iteration function from an existing one by adding two new
   * parameters to its callback function: the current index, and the entire list.
   *
   * This would turn, for instance, [`R.map`](#map) function into one that
   * more closely resembles `Array.prototype.map`. Note that this will only work
   * for functions in which the iteration callback function is the first
   * parameter, and where the list is the last parameter. (This latter might be
   * unimportant if the list parameter is not used.)
   *
   * @func
   * @memberOf R
   * @since v0.15.0
   * @category Function
   * @category List
   * @sig ((a ... -> b) ... -> [a] -> *) -> ((a ..., Int, [a] -> b) ... -> [a] -> *)
   * @param {Function} fn A list iteration function that does not pass index or list to its callback
   * @return {Function} An altered list iteration function that passes (item, index, list) to its callback
   * @example
   *
   *      const mapIndexed = R.addIndex(R.map);
   *      mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);
   *      //=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
   */
  var addIndex = /*#__PURE__*/_curry1(function addIndex(fn) {
    return curryN(fn.length, function () {
      var idx = 0;
      var origFn = arguments[0];
      var list = arguments[arguments.length - 1];
      var args = Array.prototype.slice.call(arguments, 0);
      args[0] = function () {
        var result = origFn.apply(this, _concat(arguments, [idx, list]));
        idx += 1;
        return result;
      };
      return fn.apply(this, args);
    });
  });

  /**
   * Optimized internal three-arity curry function.
   *
   * @private
   * @category Function
   * @param {Function} fn The function to curry.
   * @return {Function} The curried function.
   */
  function _curry3(fn) {
    return function f3(a, b, c) {
      switch (arguments.length) {
        case 0:
          return f3;
        case 1:
          return _isPlaceholder(a) ? f3 : _curry2(function (_b, _c) {
            return fn(a, _b, _c);
          });
        case 2:
          return _isPlaceholder(a) && _isPlaceholder(b) ? f3 : _isPlaceholder(a) ? _curry2(function (_a, _c) {
            return fn(_a, b, _c);
          }) : _isPlaceholder(b) ? _curry2(function (_b, _c) {
            return fn(a, _b, _c);
          }) : _curry1(function (_c) {
            return fn(a, b, _c);
          });
        default:
          return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function (_a, _b) {
            return fn(_a, _b, c);
          }) : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function (_a, _c) {
            return fn(_a, b, _c);
          }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function (_b, _c) {
            return fn(a, _b, _c);
          }) : _isPlaceholder(a) ? _curry1(function (_a) {
            return fn(_a, b, c);
          }) : _isPlaceholder(b) ? _curry1(function (_b) {
            return fn(a, _b, c);
          }) : _isPlaceholder(c) ? _curry1(function (_c) {
            return fn(a, b, _c);
          }) : fn(a, b, c);
      }
    };
  }

  /**
   * Applies a function to the value at the given index of an array, returning a
   * new copy of the array with the element at the given index replaced with the
   * result of the function application.
   *
   * @func
   * @memberOf R
   * @since v0.14.0
   * @category List
   * @sig Number -> (a -> a) -> [a] -> [a]
   * @param {Number} idx The index.
   * @param {Function} fn The function to apply.
   * @param {Array|Arguments} list An array-like object whose value
   *        at the supplied index will be replaced.
   * @return {Array} A copy of the supplied array-like object with
   *         the element at index `idx` replaced with the value
   *         returned by applying `fn` to the existing element.
   * @see R.update
   * @example
   *
   *      R.adjust(1, R.toUpper, ['a', 'b', 'c', 'd']);      //=> ['a', 'B', 'c', 'd']
   *      R.adjust(-1, R.toUpper, ['a', 'b', 'c', 'd']);     //=> ['a', 'b', 'c', 'D']
   * @symb R.adjust(-1, f, [a, b]) = [a, f(b)]
   * @symb R.adjust(0, f, [a, b]) = [f(a), b]
   */
  var adjust = /*#__PURE__*/_curry3(function adjust(idx, fn, list) {
    if (idx >= list.length || idx < -list.length) {
      return list;
    }
    var start = idx < 0 ? list.length : 0;
    var _idx = start + idx;
    var _list = _concat(list);
    _list[_idx] = fn(list[_idx]);
    return _list;
  });

  /**
   * Tests whether or not an object is an array.
   *
   * @private
   * @param {*} val The object to test.
   * @return {Boolean} `true` if `val` is an array, `false` otherwise.
   * @example
   *
   *      _isArray([]); //=> true
   *      _isArray(null); //=> false
   *      _isArray({}); //=> false
   */
  var _isArray = Array.isArray || function _isArray(val) {
    return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';
  };

  function _isTransformer(obj) {
    return obj != null && typeof obj['@@transducer/step'] === 'function';
  }

  /**
   * Returns a function that dispatches with different strategies based on the
   * object in list position (last argument). If it is an array, executes [fn].
   * Otherwise, if it has a function with one of the given method names, it will
   * execute that function (functor case). Otherwise, if it is a transformer,
   * uses transducer [xf] to return a new transformer (transducer case).
   * Otherwise, it will default to executing [fn].
   *
   * @private
   * @param {Array} methodNames properties to check for a custom implementation
   * @param {Function} xf transducer to initialize if object is transformer
   * @param {Function} fn default ramda implementation
   * @return {Function} A function that dispatches on object in list position
   */
  function _dispatchable(methodNames, xf, fn) {
    return function () {
      if (arguments.length === 0) {
        return fn();
      }
      var args = Array.prototype.slice.call(arguments, 0);
      var obj = args.pop();
      if (!_isArray(obj)) {
        var idx = 0;
        while (idx < methodNames.length) {
          if (typeof obj[methodNames[idx]] === 'function') {
            return obj[methodNames[idx]].apply(obj, args);
          }
          idx += 1;
        }
        if (_isTransformer(obj)) {
          var transducer = xf.apply(null, args);
          return transducer(obj);
        }
      }
      return fn.apply(this, arguments);
    };
  }

  function _reduced(x) {
    return x && x['@@transducer/reduced'] ? x : {
      '@@transducer/value': x,
      '@@transducer/reduced': true
    };
  }

  var _xfBase = {
    init: function () {
      return this.xf['@@transducer/init']();
    },
    result: function (result) {
      return this.xf['@@transducer/result'](result);
    }
  };

  var XAll = /*#__PURE__*/function () {
    function XAll(f, xf) {
      this.xf = xf;
      this.f = f;
      this.all = true;
    }
    XAll.prototype['@@transducer/init'] = _xfBase.init;
    XAll.prototype['@@transducer/result'] = function (result) {
      if (this.all) {
        result = this.xf['@@transducer/step'](result, true);
      }
      return this.xf['@@transducer/result'](result);
    };
    XAll.prototype['@@transducer/step'] = function (result, input) {
      if (!this.f(input)) {
        this.all = false;
        result = _reduced(this.xf['@@transducer/step'](result, false));
      }
      return result;
    };

    return XAll;
  }();

  var _xall = /*#__PURE__*/_curry2(function _xall(f, xf) {
    return new XAll(f, xf);
  });

  /**
   * Returns `true` if all elements of the list match the predicate, `false` if
   * there are any that don't.
   *
   * Dispatches to the `all` method of the second argument, if present.
   *
   * Acts as a transducer if a transformer is given in list position.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig (a -> Boolean) -> [a] -> Boolean
   * @param {Function} fn The predicate function.
   * @param {Array} list The array to consider.
   * @return {Boolean} `true` if the predicate is satisfied by every element, `false`
   *         otherwise.
   * @see R.any, R.none, R.transduce
   * @example
   *
   *      const equals3 = R.equals(3);
   *      R.all(equals3)([3, 3, 3, 3]); //=> true
   *      R.all(equals3)([3, 3, 1, 3]); //=> false
   */
  var all = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['all'], _xall, function all(fn, list) {
    var idx = 0;
    while (idx < list.length) {
      if (!fn(list[idx])) {
        return false;
      }
      idx += 1;
    }
    return true;
  }));

  /**
   * Returns the larger of its two arguments.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Relation
   * @sig Ord a => a -> a -> a
   * @param {*} a
   * @param {*} b
   * @return {*}
   * @see R.maxBy, R.min
   * @example
   *
   *      R.max(789, 123); //=> 789
   *      R.max('a', 'b'); //=> 'b'
   */
  var max = /*#__PURE__*/_curry2(function max(a, b) {
    return b > a ? b : a;
  });

  function _map(fn, functor) {
    var idx = 0;
    var len = functor.length;
    var result = Array(len);
    while (idx < len) {
      result[idx] = fn(functor[idx]);
      idx += 1;
    }
    return result;
  }

  function _isString(x) {
    return Object.prototype.toString.call(x) === '[object String]';
  }

  /**
   * Tests whether or not an object is similar to an array.
   *
   * @private
   * @category Type
   * @category List
   * @sig * -> Boolean
   * @param {*} x The object to test.
   * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
   * @example
   *
   *      _isArrayLike([]); //=> true
   *      _isArrayLike(true); //=> false
   *      _isArrayLike({}); //=> false
   *      _isArrayLike({length: 10}); //=> false
   *      _isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
   */
  var _isArrayLike = /*#__PURE__*/_curry1(function isArrayLike(x) {
    if (_isArray(x)) {
      return true;
    }
    if (!x) {
      return false;
    }
    if (typeof x !== 'object') {
      return false;
    }
    if (_isString(x)) {
      return false;
    }
    if (x.nodeType === 1) {
      return !!x.length;
    }
    if (x.length === 0) {
      return true;
    }
    if (x.length > 0) {
      return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
    }
    return false;
  });

  var XWrap = /*#__PURE__*/function () {
    function XWrap(fn) {
      this.f = fn;
    }
    XWrap.prototype['@@transducer/init'] = function () {
      throw new Error('init not implemented on XWrap');
    };
    XWrap.prototype['@@transducer/result'] = function (acc) {
      return acc;
    };
    XWrap.prototype['@@transducer/step'] = function (acc, x) {
      return this.f(acc, x);
    };

    return XWrap;
  }();

  function _xwrap(fn) {
    return new XWrap(fn);
  }

  /**
   * Creates a function that is bound to a context.
   * Note: `R.bind` does not provide the additional argument-binding capabilities of
   * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
   *
   * @func
   * @memberOf R
   * @since v0.6.0
   * @category Function
   * @category Object
   * @sig (* -> *) -> {*} -> (* -> *)
   * @param {Function} fn The function to bind to context
   * @param {Object} thisObj The context to bind `fn` to
   * @return {Function} A function that will execute in the context of `thisObj`.
   * @see R.partial
   * @example
   *
   *      const log = R.bind(console.log, console);
   *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
   *      // logs {a: 2}
   * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
   */
  var bind = /*#__PURE__*/_curry2(function bind(fn, thisObj) {
    return _arity(fn.length, function () {
      return fn.apply(thisObj, arguments);
    });
  });

  function _arrayReduce(xf, acc, list) {
    var idx = 0;
    var len = list.length;
    while (idx < len) {
      acc = xf['@@transducer/step'](acc, list[idx]);
      if (acc && acc['@@transducer/reduced']) {
        acc = acc['@@transducer/value'];
        break;
      }
      idx += 1;
    }
    return xf['@@transducer/result'](acc);
  }

  function _iterableReduce(xf, acc, iter) {
    var step = iter.next();
    while (!step.done) {
      acc = xf['@@transducer/step'](acc, step.value);
      if (acc && acc['@@transducer/reduced']) {
        acc = acc['@@transducer/value'];
        break;
      }
      step = iter.next();
    }
    return xf['@@transducer/result'](acc);
  }

  function _methodReduce(xf, acc, obj, methodName) {
    return xf['@@transducer/result'](obj[methodName](bind(xf['@@transducer/step'], xf), acc));
  }

  var symIterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';

  function _reduce(fn, acc, list) {
    if (typeof fn === 'function') {
      fn = _xwrap(fn);
    }
    if (_isArrayLike(list)) {
      return _arrayReduce(fn, acc, list);
    }
    if (typeof list['fantasy-land/reduce'] === 'function') {
      return _methodReduce(fn, acc, list, 'fantasy-land/reduce');
    }
    if (list[symIterator] != null) {
      return _iterableReduce(fn, acc, list[symIterator]());
    }
    if (typeof list.next === 'function') {
      return _iterableReduce(fn, acc, list);
    }
    if (typeof list.reduce === 'function') {
      return _methodReduce(fn, acc, list, 'reduce');
    }

    throw new TypeError('reduce: list must be array or iterable');
  }

  var XMap = /*#__PURE__*/function () {
    function XMap(f, xf) {
      this.xf = xf;
      this.f = f;
    }
    XMap.prototype['@@transducer/init'] = _xfBase.init;
    XMap.prototype['@@transducer/result'] = _xfBase.result;
    XMap.prototype['@@transducer/step'] = function (result, input) {
      return this.xf['@@transducer/step'](result, this.f(input));
    };

    return XMap;
  }();

  var _xmap = /*#__PURE__*/_curry2(function _xmap(f, xf) {
    return new XMap(f, xf);
  });

  function _has(prop, obj) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }

  var toString = Object.prototype.toString;
  var _isArguments = /*#__PURE__*/function () {
    return toString.call(arguments) === '[object Arguments]' ? function _isArguments(x) {
      return toString.call(x) === '[object Arguments]';
    } : function _isArguments(x) {
      return _has('callee', x);
    };
  }();

  // cover IE < 9 keys issues
  var hasEnumBug = ! /*#__PURE__*/{ toString: null }.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
  // Safari bug
  var hasArgsEnumBug = /*#__PURE__*/function () {

    return arguments.propertyIsEnumerable('length');
  }();

  var contains = function contains(list, item) {
    var idx = 0;
    while (idx < list.length) {
      if (list[idx] === item) {
        return true;
      }
      idx += 1;
    }
    return false;
  };

  /**
   * Returns a list containing the names of all the enumerable own properties of
   * the supplied object.
   * Note that the order of the output array is not guaranteed to be consistent
   * across different JS platforms.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Object
   * @sig {k: v} -> [k]
   * @param {Object} obj The object to extract properties from
   * @return {Array} An array of the object's own properties.
   * @see R.keysIn, R.values
   * @example
   *
   *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
   */
  var keys = typeof Object.keys === 'function' && !hasArgsEnumBug ? /*#__PURE__*/_curry1(function keys(obj) {
    return Object(obj) !== obj ? [] : Object.keys(obj);
  }) : /*#__PURE__*/_curry1(function keys(obj) {
    if (Object(obj) !== obj) {
      return [];
    }
    var prop, nIdx;
    var ks = [];
    var checkArgsLength = hasArgsEnumBug && _isArguments(obj);
    for (prop in obj) {
      if (_has(prop, obj) && (!checkArgsLength || prop !== 'length')) {
        ks[ks.length] = prop;
      }
    }
    if (hasEnumBug) {
      nIdx = nonEnumerableProps.length - 1;
      while (nIdx >= 0) {
        prop = nonEnumerableProps[nIdx];
        if (_has(prop, obj) && !contains(ks, prop)) {
          ks[ks.length] = prop;
        }
        nIdx -= 1;
      }
    }
    return ks;
  });

  /**
   * Takes a function and
   * a [functor](https://github.com/fantasyland/fantasy-land#functor),
   * applies the function to each of the functor's values, and returns
   * a functor of the same shape.
   *
   * Ramda provides suitable `map` implementations for `Array` and `Object`,
   * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
   *
   * Dispatches to the `map` method of the second argument, if present.
   *
   * Acts as a transducer if a transformer is given in list position.
   *
   * Also treats functions as functors and will compose them together.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig Functor f => (a -> b) -> f a -> f b
   * @param {Function} fn The function to be called on every element of the input `list`.
   * @param {Array} list The list to be iterated over.
   * @return {Array} The new list.
   * @see R.transduce, R.addIndex
   * @example
   *
   *      const double = x => x * 2;
   *
   *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
   *
   *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
   * @symb R.map(f, [a, b]) = [f(a), f(b)]
   * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }
   * @symb R.map(f, functor_o) = functor_o.map(f)
   */
  var map = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['fantasy-land/map', 'map'], _xmap, function map(fn, functor) {
    switch (Object.prototype.toString.call(functor)) {
      case '[object Function]':
        return curryN(functor.length, function () {
          return fn.call(this, functor.apply(this, arguments));
        });
      case '[object Object]':
        return _reduce(function (acc, key) {
          acc[key] = fn(functor[key]);
          return acc;
        }, {}, keys(functor));
      default:
        return _map(fn, functor);
    }
  }));

  /**
   * Retrieve the value at a given path.
   *
   * @func
   * @memberOf R
   * @since v0.2.0
   * @category Object
   * @typedefn Idx = String | Int
   * @sig [Idx] -> {a} -> a | Undefined
   * @param {Array} path The path to use.
   * @param {Object} obj The object to retrieve the nested property from.
   * @return {*} The data at `path`.
   * @see R.prop
   * @example
   *
   *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
   *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
   */
  var path = /*#__PURE__*/_curry2(function path(paths, obj) {
    var val = obj;
    var idx = 0;
    while (idx < paths.length) {
      if (val == null) {
        return;
      }
      val = val[paths[idx]];
      idx += 1;
    }
    return val;
  });

  /**
   * Returns a function that when supplied an object returns the indicated
   * property of that object, if it exists.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Object
   * @sig s -> {s: a} -> a | Undefined
   * @param {String} p The property name
   * @param {Object} obj The object to query
   * @return {*} The value at `obj.p`.
   * @see R.path
   * @example
   *
   *      R.prop('x', {x: 100}); //=> 100
   *      R.prop('x', {}); //=> undefined
   *      R.compose(R.inc, R.prop('x'))({ x: 3 }) //=> 4
   */

  var prop = /*#__PURE__*/_curry2(function prop(p, obj) {
    return path([p], obj);
  });

  /**
   * Returns a new list by plucking the same named property off all objects in
   * the list supplied.
   *
   * `pluck` will work on
   * any [functor](https://github.com/fantasyland/fantasy-land#functor) in
   * addition to arrays, as it is equivalent to `R.map(R.prop(k), f)`.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig Functor f => k -> f {k: v} -> f v
   * @param {Number|String} key The key name to pluck off of each object.
   * @param {Array} f The array or functor to consider.
   * @return {Array} The list of values for the given key.
   * @see R.props
   * @example
   *
   *      var getAges = R.pluck('age');
   *      getAges([{name: 'fred', age: 29}, {name: 'wilma', age: 27}]); //=> [29, 27]
   *
   *      R.pluck(0, [[1, 2], [3, 4]]);               //=> [1, 3]
   *      R.pluck('val', {a: {val: 3}, b: {val: 5}}); //=> {a: 3, b: 5}
   * @symb R.pluck('x', [{x: 1, y: 2}, {x: 3, y: 4}, {x: 5, y: 6}]) = [1, 3, 5]
   * @symb R.pluck(0, [[1, 2], [3, 4], [5, 6]]) = [1, 3, 5]
   */
  var pluck = /*#__PURE__*/_curry2(function pluck(p, list) {
    return map(prop(p), list);
  });

  /**
   * Returns a single item by iterating through the list, successively calling
   * the iterator function and passing it an accumulator value and the current
   * value from the array, and then passing the result to the next call.
   *
   * The iterator function receives two values: *(acc, value)*. It may use
   * [`R.reduced`](#reduced) to shortcut the iteration.
   *
   * The arguments' order of [`reduceRight`](#reduceRight)'s iterator function
   * is *(value, acc)*.
   *
   * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
   * arrays), unlike the native `Array.prototype.reduce` method. For more details
   * on this behavior, see:
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
   *
   * Dispatches to the `reduce` method of the third argument, if present. When
   * doing so, it is up to the user to handle the [`R.reduced`](#reduced)
   * shortcuting, as this is not implemented by `reduce`.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig ((a, b) -> a) -> a -> [b] -> a
   * @param {Function} fn The iterator function. Receives two values, the accumulator and the
   *        current element from the array.
   * @param {*} acc The accumulator value.
   * @param {Array} list The list to iterate over.
   * @return {*} The final, accumulated value.
   * @see R.reduced, R.addIndex, R.reduceRight
   * @example
   *
   *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
   *      //          -               -10
   *      //         / \              / \
   *      //        -   4           -6   4
   *      //       / \              / \
   *      //      -   3   ==>     -3   3
   *      //     / \              / \
   *      //    -   2           -1   2
   *      //   / \              / \
   *      //  0   1            0   1
   *
   * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)
   */
  var reduce = /*#__PURE__*/_curry3(_reduce);

  /**
   * Takes a list of predicates and returns a predicate that returns true for a
   * given list of arguments if every one of the provided predicates is satisfied
   * by those arguments.
   *
   * The function returned is a curried function whose arity matches that of the
   * highest-arity predicate.
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category Logic
   * @sig [(*... -> Boolean)] -> (*... -> Boolean)
   * @param {Array} predicates An array of predicates to check
   * @return {Function} The combined predicate
   * @see R.anyPass
   * @example
   *
   *      const isQueen = R.propEq('rank', 'Q');
   *      const isSpade = R.propEq('suit', '♠︎');
   *      const isQueenOfSpades = R.allPass([isQueen, isSpade]);
   *
   *      isQueenOfSpades({rank: 'Q', suit: '♣︎'}); //=> false
   *      isQueenOfSpades({rank: 'Q', suit: '♠︎'}); //=> true
   */
  var allPass = /*#__PURE__*/_curry1(function allPass(preds) {
    return curryN(reduce(max, 0, pluck('length', preds)), function () {
      var idx = 0;
      var len = preds.length;
      while (idx < len) {
        if (!preds[idx].apply(this, arguments)) {
          return false;
        }
        idx += 1;
      }
      return true;
    });
  });

  /**
   * Returns a function that always returns the given value. Note that for
   * non-primitives the value returned is a reference to the original value.
   *
   * This function is known as `const`, `constant`, or `K` (for K combinator) in
   * other languages and libraries.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Function
   * @sig a -> (* -> a)
   * @param {*} val The value to wrap in a function
   * @return {Function} A Function :: * -> val.
   * @example
   *
   *      const t = R.always('Tee');
   *      t(); //=> 'Tee'
   */
  var always = /*#__PURE__*/_curry1(function always(val) {
    return function () {
      return val;
    };
  });

  /**
   * Returns `true` if both arguments are `true`; `false` otherwise.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Logic
   * @sig a -> b -> a | b
   * @param {Any} a
   * @param {Any} b
   * @return {Any} the first argument if it is falsy, otherwise the second argument.
   * @see R.both
   * @example
   *
   *      R.and(true, true); //=> true
   *      R.and(true, false); //=> false
   *      R.and(false, true); //=> false
   *      R.and(false, false); //=> false
   */
  var and = /*#__PURE__*/_curry2(function and(a, b) {
    return a && b;
  });

  var XAny = /*#__PURE__*/function () {
    function XAny(f, xf) {
      this.xf = xf;
      this.f = f;
      this.any = false;
    }
    XAny.prototype['@@transducer/init'] = _xfBase.init;
    XAny.prototype['@@transducer/result'] = function (result) {
      if (!this.any) {
        result = this.xf['@@transducer/step'](result, false);
      }
      return this.xf['@@transducer/result'](result);
    };
    XAny.prototype['@@transducer/step'] = function (result, input) {
      if (this.f(input)) {
        this.any = true;
        result = _reduced(this.xf['@@transducer/step'](result, true));
      }
      return result;
    };

    return XAny;
  }();

  var _xany = /*#__PURE__*/_curry2(function _xany(f, xf) {
    return new XAny(f, xf);
  });

  /**
   * Returns `true` if at least one of the elements of the list match the predicate,
   * `false` otherwise.
   *
   * Dispatches to the `any` method of the second argument, if present.
   *
   * Acts as a transducer if a transformer is given in list position.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig (a -> Boolean) -> [a] -> Boolean
   * @param {Function} fn The predicate function.
   * @param {Array} list The array to consider.
   * @return {Boolean} `true` if the predicate is satisfied by at least one element, `false`
   *         otherwise.
   * @see R.all, R.none, R.transduce
   * @example
   *
   *      const lessThan0 = R.flip(R.lt)(0);
   *      const lessThan2 = R.flip(R.lt)(2);
   *      R.any(lessThan0)([1, 2]); //=> false
   *      R.any(lessThan2)([1, 2]); //=> true
   */
  var any = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['any'], _xany, function any(fn, list) {
    var idx = 0;
    while (idx < list.length) {
      if (fn(list[idx])) {
        return true;
      }
      idx += 1;
    }
    return false;
  }));

  /**
   * Takes a list of predicates and returns a predicate that returns true for a
   * given list of arguments if at least one of the provided predicates is
   * satisfied by those arguments.
   *
   * The function returned is a curried function whose arity matches that of the
   * highest-arity predicate.
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category Logic
   * @sig [(*... -> Boolean)] -> (*... -> Boolean)
   * @param {Array} predicates An array of predicates to check
   * @return {Function} The combined predicate
   * @see R.allPass
   * @example
   *
   *      const isClub = R.propEq('suit', '♣');
   *      const isSpade = R.propEq('suit', '♠');
   *      const isBlackCard = R.anyPass([isClub, isSpade]);
   *
   *      isBlackCard({rank: '10', suit: '♣'}); //=> true
   *      isBlackCard({rank: 'Q', suit: '♠'}); //=> true
   *      isBlackCard({rank: 'Q', suit: '♦'}); //=> false
   */
  var anyPass = /*#__PURE__*/_curry1(function anyPass(preds) {
    return curryN(reduce(max, 0, pluck('length', preds)), function () {
      var idx = 0;
      var len = preds.length;
      while (idx < len) {
        if (preds[idx].apply(this, arguments)) {
          return true;
        }
        idx += 1;
      }
      return false;
    });
  });

  /**
   * ap applies a list of functions to a list of values.
   *
   * Dispatches to the `ap` method of the second argument, if present. Also
   * treats curried functions as applicatives.
   *
   * @func
   * @memberOf R
   * @since v0.3.0
   * @category Function
   * @sig [a -> b] -> [a] -> [b]
   * @sig Apply f => f (a -> b) -> f a -> f b
   * @sig (r -> a -> b) -> (r -> a) -> (r -> b)
   * @param {*} applyF
   * @param {*} applyX
   * @return {*}
   * @example
   *
   *      R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]
   *      R.ap([R.concat('tasty '), R.toUpper], ['pizza', 'salad']); //=> ["tasty pizza", "tasty salad", "PIZZA", "SALAD"]
   *
   *      // R.ap can also be used as S combinator
   *      // when only two functions are passed
   *      R.ap(R.concat, R.toUpper)('Ramda') //=> 'RamdaRAMDA'
   * @symb R.ap([f, g], [a, b]) = [f(a), f(b), g(a), g(b)]
   */
  var ap = /*#__PURE__*/_curry2(function ap(applyF, applyX) {
    return typeof applyX['fantasy-land/ap'] === 'function' ? applyX['fantasy-land/ap'](applyF) : typeof applyF.ap === 'function' ? applyF.ap(applyX) : typeof applyF === 'function' ? function (x) {
      return applyF(x)(applyX(x));
    } : _reduce(function (acc, f) {
      return _concat(acc, map(f, applyX));
    }, [], applyF);
  });

  function _aperture(n, list) {
    var idx = 0;
    var limit = list.length - (n - 1);
    var acc = new Array(limit >= 0 ? limit : 0);
    while (idx < limit) {
      acc[idx] = Array.prototype.slice.call(list, idx, idx + n);
      idx += 1;
    }
    return acc;
  }

  var XAperture = /*#__PURE__*/function () {
    function XAperture(n, xf) {
      this.xf = xf;
      this.pos = 0;
      this.full = false;
      this.acc = new Array(n);
    }
    XAperture.prototype['@@transducer/init'] = _xfBase.init;
    XAperture.prototype['@@transducer/result'] = function (result) {
      this.acc = null;
      return this.xf['@@transducer/result'](result);
    };
    XAperture.prototype['@@transducer/step'] = function (result, input) {
      this.store(input);
      return this.full ? this.xf['@@transducer/step'](result, this.getCopy()) : result;
    };
    XAperture.prototype.store = function (input) {
      this.acc[this.pos] = input;
      this.pos += 1;
      if (this.pos === this.acc.length) {
        this.pos = 0;
        this.full = true;
      }
    };
    XAperture.prototype.getCopy = function () {
      return _concat(Array.prototype.slice.call(this.acc, this.pos), Array.prototype.slice.call(this.acc, 0, this.pos));
    };

    return XAperture;
  }();

  var _xaperture = /*#__PURE__*/_curry2(function _xaperture(n, xf) {
    return new XAperture(n, xf);
  });

  /**
   * Returns a new list, composed of n-tuples of consecutive elements. If `n` is
   * greater than the length of the list, an empty list is returned.
   *
   * Acts as a transducer if a transformer is given in list position.
   *
   * @func
   * @memberOf R
   * @since v0.12.0
   * @category List
   * @sig Number -> [a] -> [[a]]
   * @param {Number} n The size of the tuples to create
   * @param {Array} list The list to split into `n`-length tuples
   * @return {Array} The resulting list of `n`-length tuples
   * @see R.transduce
   * @example
   *
   *      R.aperture(2, [1, 2, 3, 4, 5]); //=> [[1, 2], [2, 3], [3, 4], [4, 5]]
   *      R.aperture(3, [1, 2, 3, 4, 5]); //=> [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
   *      R.aperture(7, [1, 2, 3, 4, 5]); //=> []
   */
  var aperture = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable([], _xaperture, _aperture));

  /**
   * Returns a new list containing the contents of the given list, followed by
   * the given element.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig a -> [a] -> [a]
   * @param {*} el The element to add to the end of the new list.
   * @param {Array} list The list of elements to add a new item to.
   *        list.
   * @return {Array} A new list containing the elements of the old list followed by `el`.
   * @see R.prepend
   * @example
   *
   *      R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
   *      R.append('tests', []); //=> ['tests']
   *      R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
   */
  var append = /*#__PURE__*/_curry2(function append(el, list) {
    return _concat(list, [el]);
  });

  /**
   * Applies function `fn` to the argument list `args`. This is useful for
   * creating a fixed-arity function from a variadic function. `fn` should be a
   * bound function if context is significant.
   *
   * @func
   * @memberOf R
   * @since v0.7.0
   * @category Function
   * @sig (*... -> a) -> [*] -> a
   * @param {Function} fn The function which will be called with `args`
   * @param {Array} args The arguments to call `fn` with
   * @return {*} result The result, equivalent to `fn(...args)`
   * @see R.call, R.unapply
   * @example
   *
   *      const nums = [1, 2, 3, -99, 42, 6, 7];
   *      R.apply(Math.max, nums); //=> 42
   * @symb R.apply(f, [a, b, c]) = f(a, b, c)
   */
  var apply = /*#__PURE__*/_curry2(function apply(fn, args) {
    return fn.apply(this, args);
  });

  /**
   * Returns a list of all the enumerable own properties of the supplied object.
   * Note that the order of the output array is not guaranteed across different
   * JS platforms.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Object
   * @sig {k: v} -> [v]
   * @param {Object} obj The object to extract values from
   * @return {Array} An array of the values of the object's own properties.
   * @see R.valuesIn, R.keys
   * @example
   *
   *      R.values({a: 1, b: 2, c: 3}); //=> [1, 2, 3]
   */
  var values = /*#__PURE__*/_curry1(function values(obj) {
    var props = keys(obj);
    var len = props.length;
    var vals = [];
    var idx = 0;
    while (idx < len) {
      vals[idx] = obj[props[idx]];
      idx += 1;
    }
    return vals;
  });

  // Use custom mapValues function to avoid issues with specs that include a "map" key and R.map
  // delegating calls to .map
  function mapValues(fn, obj) {
    return keys(obj).reduce(function (acc, key) {
      acc[key] = fn(obj[key]);
      return acc;
    }, {});
  }

  /**
   * Given a spec object recursively mapping properties to functions, creates a
   * function producing an object of the same structure, by mapping each property
   * to the result of calling its associated function with the supplied arguments.
   *
   * @func
   * @memberOf R
   * @since v0.20.0
   * @category Function
   * @sig {k: ((a, b, ..., m) -> v)} -> ((a, b, ..., m) -> {k: v})
   * @param {Object} spec an object recursively mapping properties to functions for
   *        producing the values for these properties.
   * @return {Function} A function that returns an object of the same structure
   * as `spec', with each property set to the value returned by calling its
   * associated function with the supplied arguments.
   * @see R.converge, R.juxt
   * @example
   *
   *      const getMetrics = R.applySpec({
   *        sum: R.add,
   *        nested: { mul: R.multiply }
   *      });
   *      getMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } }
   * @symb R.applySpec({ x: f, y: { z: g } })(a, b) = { x: f(a, b), y: { z: g(a, b) } }
   */
  var applySpec = /*#__PURE__*/_curry1(function applySpec(spec) {
    spec = mapValues(function (v) {
      return typeof v == 'function' ? v : applySpec(v);
    }, spec);

    return curryN(reduce(max, 0, pluck('length', values(spec))), function () {
      var args = arguments;
      return mapValues(function (f) {
        return apply(f, args);
      }, spec);
    });
  });

  /**
   * Takes a value and applies a function to it.
   *
   * This function is also known as the `thrush` combinator.
   *
   * @func
   * @memberOf R
   * @since v0.25.0
   * @category Function
   * @sig a -> (a -> b) -> b
   * @param {*} x The value
   * @param {Function} f The function to apply
   * @return {*} The result of applying `f` to `x`
   * @example
   *
   *      const t42 = R.applyTo(42);
   *      t42(R.identity); //=> 42
   *      t42(R.add(1)); //=> 43
   */
  var applyTo = /*#__PURE__*/_curry2(function applyTo(x, f) {
    return f(x);
  });

  /**
   * Makes an ascending comparator function out of a function that returns a value
   * that can be compared with `<` and `>`.
   *
   * @func
   * @memberOf R
   * @since v0.23.0
   * @category Function
   * @sig Ord b => (a -> b) -> a -> a -> Number
   * @param {Function} fn A function of arity one that returns a value that can be compared
   * @param {*} a The first item to be compared.
   * @param {*} b The second item to be compared.
   * @return {Number} `-1` if fn(a) < fn(b), `1` if fn(b) < fn(a), otherwise `0`
   * @see R.descend
   * @example
   *
   *      const byAge = R.ascend(R.prop('age'));
   *      const people = [
   *        { name: 'Emma', age: 70 },
   *        { name: 'Peter', age: 78 },
   *        { name: 'Mikhail', age: 62 },
   *      ];
   *      const peopleByYoungestFirst = R.sort(byAge, people);
   *        //=> [{ name: 'Mikhail', age: 62 },{ name: 'Emma', age: 70 }, { name: 'Peter', age: 78 }]
   */
  var ascend = /*#__PURE__*/_curry3(function ascend(fn, a, b) {
    var aa = fn(a);
    var bb = fn(b);
    return aa < bb ? -1 : aa > bb ? 1 : 0;
  });

  /**
   * Makes a shallow clone of an object, setting or overriding the specified
   * property with the given value. Note that this copies and flattens prototype
   * properties onto the new object as well. All non-primitive properties are
   * copied by reference.
   *
   * @func
   * @memberOf R
   * @since v0.8.0
   * @category Object
   * @sig String -> a -> {k: v} -> {k: v}
   * @param {String} prop The property name to set
   * @param {*} val The new value
   * @param {Object} obj The object to clone
   * @return {Object} A new object equivalent to the original except for the changed property.
   * @see R.dissoc, R.pick
   * @example
   *
   *      R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
   */
  var assoc = /*#__PURE__*/_curry3(function assoc(prop, val, obj) {
    var result = {};
    for (var p in obj) {
      result[p] = obj[p];
    }
    result[prop] = val;
    return result;
  });

  /**
   * Determine if the passed argument is an integer.
   *
   * @private
   * @param {*} n
   * @category Type
   * @return {Boolean}
   */
  var _isInteger = Number.isInteger || function _isInteger(n) {
    return n << 0 === n;
  };

  /**
   * Checks if the input value is `null` or `undefined`.
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category Type
   * @sig * -> Boolean
   * @param {*} x The value to test.
   * @return {Boolean} `true` if `x` is `undefined` or `null`, otherwise `false`.
   * @example
   *
   *      R.isNil(null); //=> true
   *      R.isNil(undefined); //=> true
   *      R.isNil(0); //=> false
   *      R.isNil([]); //=> false
   */
  var isNil = /*#__PURE__*/_curry1(function isNil(x) {
    return x == null;
  });

  /**
   * Makes a shallow clone of an object, setting or overriding the nodes required
   * to create the given path, and placing the specific value at the tail end of
   * that path. Note that this copies and flattens prototype properties onto the
   * new object as well. All non-primitive properties are copied by reference.
   *
   * @func
   * @memberOf R
   * @since v0.8.0
   * @category Object
   * @typedefn Idx = String | Int
   * @sig [Idx] -> a -> {a} -> {a}
   * @param {Array} path the path to set
   * @param {*} val The new value
   * @param {Object} obj The object to clone
   * @return {Object} A new object equivalent to the original except along the specified path.
   * @see R.dissocPath
   * @example
   *
   *      R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}
   *
   *      // Any missing or non-object keys in path will be overridden
   *      R.assocPath(['a', 'b', 'c'], 42, {a: 5}); //=> {a: {b: {c: 42}}}
   */
  var assocPath = /*#__PURE__*/_curry3(function assocPath(path, val, obj) {
    if (path.length === 0) {
      return val;
    }
    var idx = path[0];
    if (path.length > 1) {
      var nextObj = !isNil(obj) && _has(idx, obj) ? obj[idx] : _isInteger(path[1]) ? [] : {};
      val = assocPath(Array.prototype.slice.call(path, 1), val, nextObj);
    }
    if (_isInteger(idx) && _isArray(obj)) {
      var arr = [].concat(obj);
      arr[idx] = val;
      return arr;
    } else {
      return assoc(idx, val, obj);
    }
  });

  /**
   * Wraps a function of any arity (including nullary) in a function that accepts
   * exactly `n` parameters. Any extraneous parameters will not be passed to the
   * supplied function.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Function
   * @sig Number -> (* -> a) -> (* -> a)
   * @param {Number} n The desired arity of the new function.
   * @param {Function} fn The function to wrap.
   * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
   *         arity `n`.
   * @see R.binary, R.unary
   * @example
   *
   *      const takesTwoArgs = (a, b) => [a, b];
   *
   *      takesTwoArgs.length; //=> 2
   *      takesTwoArgs(1, 2); //=> [1, 2]
   *
   *      const takesOneArg = R.nAry(1, takesTwoArgs);
   *      takesOneArg.length; //=> 1
   *      // Only `n` arguments are passed to the wrapped function
   *      takesOneArg(1, 2); //=> [1, undefined]
   * @symb R.nAry(0, f)(a, b) = f()
   * @symb R.nAry(1, f)(a, b) = f(a)
   * @symb R.nAry(2, f)(a, b) = f(a, b)
   */
  var nAry = /*#__PURE__*/_curry2(function nAry(n, fn) {
    switch (n) {
      case 0:
        return function () {
          return fn.call(this);
        };
      case 1:
        return function (a0) {
          return fn.call(this, a0);
        };
      case 2:
        return function (a0, a1) {
          return fn.call(this, a0, a1);
        };
      case 3:
        return function (a0, a1, a2) {
          return fn.call(this, a0, a1, a2);
        };
      case 4:
        return function (a0, a1, a2, a3) {
          return fn.call(this, a0, a1, a2, a3);
        };
      case 5:
        return function (a0, a1, a2, a3, a4) {
          return fn.call(this, a0, a1, a2, a3, a4);
        };
      case 6:
        return function (a0, a1, a2, a3, a4, a5) {
          return fn.call(this, a0, a1, a2, a3, a4, a5);
        };
      case 7:
        return function (a0, a1, a2, a3, a4, a5, a6) {
          return fn.call(this, a0, a1, a2, a3, a4, a5, a6);
        };
      case 8:
        return function (a0, a1, a2, a3, a4, a5, a6, a7) {
          return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7);
        };
      case 9:
        return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
          return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8);
        };
      case 10:
        return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
          return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
        };
      default:
        throw new Error('First argument to nAry must be a non-negative integer no greater than ten');
    }
  });

  /**
   * Wraps a function of any arity (including nullary) in a function that accepts
   * exactly 2 parameters. Any extraneous parameters will not be passed to the
   * supplied function.
   *
   * @func
   * @memberOf R
   * @since v0.2.0
   * @category Function
   * @sig (* -> c) -> (a, b -> c)
   * @param {Function} fn The function to wrap.
   * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
   *         arity 2.
   * @see R.nAry, R.unary
   * @example
   *
   *      const takesThreeArgs = function(a, b, c) {
   *        return [a, b, c];
   *      };
   *      takesThreeArgs.length; //=> 3
   *      takesThreeArgs(1, 2, 3); //=> [1, 2, 3]
   *
   *      const takesTwoArgs = R.binary(takesThreeArgs);
   *      takesTwoArgs.length; //=> 2
   *      // Only 2 arguments are passed to the wrapped function
   *      takesTwoArgs(1, 2, 3); //=> [1, 2, undefined]
   * @symb R.binary(f)(a, b, c) = f(a, b)
   */
  var binary = /*#__PURE__*/_curry1(function binary(fn) {
    return nAry(2, fn);
  });

  function _isFunction(x) {
    return Object.prototype.toString.call(x) === '[object Function]';
  }

  /**
   * "lifts" a function to be the specified arity, so that it may "map over" that
   * many lists, Functions or other objects that satisfy the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
   *
   * @func
   * @memberOf R
   * @since v0.7.0
   * @category Function
   * @sig Number -> (*... -> *) -> ([*]... -> [*])
   * @param {Function} fn The function to lift into higher context
   * @return {Function} The lifted function.
   * @see R.lift, R.ap
   * @example
   *
   *      const madd3 = R.liftN(3, (...args) => R.sum(args));
   *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
   */
  var liftN = /*#__PURE__*/_curry2(function liftN(arity, fn) {
    var lifted = curryN(arity, fn);
    return curryN(arity, function () {
      return _reduce(ap, map(lifted, arguments[0]), Array.prototype.slice.call(arguments, 1));
    });
  });

  /**
   * "lifts" a function of arity > 1 so that it may "map over" a list, Function or other
   * object that satisfies the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
   *
   * @func
   * @memberOf R
   * @since v0.7.0
   * @category Function
   * @sig (*... -> *) -> ([*]... -> [*])
   * @param {Function} fn The function to lift into higher context
   * @return {Function} The lifted function.
   * @see R.liftN
   * @example
   *
   *      const madd3 = R.lift((a, b, c) => a + b + c);
   *
   *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
   *
   *      const madd5 = R.lift((a, b, c, d, e) => a + b + c + d + e);
   *
   *      madd5([1,2], [3], [4, 5], [6], [7, 8]); //=> [21, 22, 22, 23, 22, 23, 23, 24]
   */
  var lift = /*#__PURE__*/_curry1(function lift(fn) {
    return liftN(fn.length, fn);
  });

  /**
   * A function which calls the two provided functions and returns the `&&`
   * of the results.
   * It returns the result of the first function if it is false-y and the result
   * of the second function otherwise. Note that this is short-circuited,
   * meaning that the second function will not be invoked if the first returns a
   * false-y value.
   *
   * In addition to functions, `R.both` also accepts any fantasy-land compatible
   * applicative functor.
   *
   * @func
   * @memberOf R
   * @since v0.12.0
   * @category Logic
   * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
   * @param {Function} f A predicate
   * @param {Function} g Another predicate
   * @return {Function} a function that applies its arguments to `f` and `g` and `&&`s their outputs together.
   * @see R.and
   * @example
   *
   *      const gt10 = R.gt(R.__, 10)
   *      const lt20 = R.lt(R.__, 20)
   *      const f = R.both(gt10, lt20);
   *      f(15); //=> true
   *      f(30); //=> false
   *
   *      R.both(Maybe.Just(false), Maybe.Just(55)); // => Maybe.Just(false)
   *      R.both([false, false, 'a'], [11]); //=> [false, false, 11]
   */
  var both = /*#__PURE__*/_curry2(function both(f, g) {
    return _isFunction(f) ? function _both() {
      return f.apply(this, arguments) && g.apply(this, arguments);
    } : lift(and)(f, g);
  });

  /**
   * Returns a curried equivalent of the provided function. The curried function
   * has two unusual capabilities. First, its arguments needn't be provided one
   * at a time. If `f` is a ternary function and `g` is `R.curry(f)`, the
   * following are equivalent:
   *
   *   - `g(1)(2)(3)`
   *   - `g(1)(2, 3)`
   *   - `g(1, 2)(3)`
   *   - `g(1, 2, 3)`
   *
   * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
   * "gaps", allowing partial application of any combination of arguments,
   * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
   * the following are equivalent:
   *
   *   - `g(1, 2, 3)`
   *   - `g(_, 2, 3)(1)`
   *   - `g(_, _, 3)(1)(2)`
   *   - `g(_, _, 3)(1, 2)`
   *   - `g(_, 2)(1)(3)`
   *   - `g(_, 2)(1, 3)`
   *   - `g(_, 2)(_, 3)(1)`
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Function
   * @sig (* -> a) -> (* -> a)
   * @param {Function} fn The function to curry.
   * @return {Function} A new, curried function.
   * @see R.curryN, R.partial
   * @example
   *
   *      const addFourNumbers = (a, b, c, d) => a + b + c + d;
   *
   *      const curriedAddFourNumbers = R.curry(addFourNumbers);
   *      const f = curriedAddFourNumbers(1, 2);
   *      const g = f(3);
   *      g(4); //=> 10
   */
  var curry = /*#__PURE__*/_curry1(function curry(fn) {
    return curryN(fn.length, fn);
  });

  /**
   * Returns the result of calling its first argument with the remaining
   * arguments. This is occasionally useful as a converging function for
   * [`R.converge`](#converge): the first branch can produce a function while the
   * remaining branches produce values to be passed to that function as its
   * arguments.
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category Function
   * @sig (*... -> a),*... -> a
   * @param {Function} fn The function to apply to the remaining arguments.
   * @param {...*} args Any number of positional arguments.
   * @return {*}
   * @see R.apply
   * @example
   *
   *      R.call(R.add, 1, 2); //=> 3
   *
   *      const indentN = R.pipe(R.repeat(' '),
   *                           R.join(''),
   *                           R.replace(/^(?!$)/gm));
   *
   *      const format = R.converge(R.call, [
   *                                  R.pipe(R.prop('indent'), indentN),
   *                                  R.prop('value')
   *                              ]);
   *
   *      format({indent: 2, value: 'foo\nbar\nbaz\n'}); //=> '  foo\n  bar\n  baz\n'
   * @symb R.call(f, a, b) = f(a, b)
   */
  var call = /*#__PURE__*/curry(function call(fn) {
    return fn.apply(this, Array.prototype.slice.call(arguments, 1));
  });

  /**
   * `_makeFlat` is a helper function that returns a one-level or fully recursive
   * function based on the flag passed in.
   *
   * @private
   */
  function _makeFlat(recursive) {
    return function flatt(list) {
      var value, jlen, j;
      var result = [];
      var idx = 0;
      var ilen = list.length;

      while (idx < ilen) {
        if (_isArrayLike(list[idx])) {
          value = recursive ? flatt(list[idx]) : list[idx];
          j = 0;
          jlen = value.length;
          while (j < jlen) {
            result[result.length] = value[j];
            j += 1;
          }
        } else {
          result[result.length] = list[idx];
        }
        idx += 1;
      }
      return result;
    };
  }

  function _forceReduced(x) {
    return {
      '@@transducer/value': x,
      '@@transducer/reduced': true
    };
  }

  var preservingReduced = function (xf) {
    return {
      '@@transducer/init': _xfBase.init,
      '@@transducer/result': function (result) {
        return xf['@@transducer/result'](result);
      },
      '@@transducer/step': function (result, input) {
        var ret = xf['@@transducer/step'](result, input);
        return ret['@@transducer/reduced'] ? _forceReduced(ret) : ret;
      }
    };
  };

  var _flatCat = function _xcat(xf) {
    var rxf = preservingReduced(xf);
    return {
      '@@transducer/init': _xfBase.init,
      '@@transducer/result': function (result) {
        return rxf['@@transducer/result'](result);
      },
      '@@transducer/step': function (result, input) {
        return !_isArrayLike(input) ? _reduce(rxf, result, [input]) : _reduce(rxf, result, input);
      }
    };
  };

  var _xchain = /*#__PURE__*/_curry2(function _xchain(f, xf) {
    return map(f, _flatCat(xf));
  });

  /**
   * `chain` maps a function over a list and concatenates the results. `chain`
   * is also known as `flatMap` in some libraries.
   *
   * Dispatches to the `chain` method of the second argument, if present,
   * according to the [FantasyLand Chain spec](https://github.com/fantasyland/fantasy-land#chain).
   *
   * If second argument is a function, `chain(f, g)(x)` is equivalent to `f(g(x), x)`.
   *
   * Acts as a transducer if a transformer is given in list position.
   *
   * @func
   * @memberOf R
   * @since v0.3.0
   * @category List
   * @sig Chain m => (a -> m b) -> m a -> m b
   * @param {Function} fn The function to map with
   * @param {Array} list The list to map over
   * @return {Array} The result of flat-mapping `list` with `fn`
   * @example
   *
   *      const duplicate = n => [n, n];
   *      R.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]
   *
   *      R.chain(R.append, R.head)([1, 2, 3]); //=> [1, 2, 3, 1]
   */
  var chain = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['fantasy-land/chain', 'chain'], _xchain, function chain(fn, monad) {
    if (typeof monad === 'function') {
      return function (x) {
        return fn(monad(x))(x);
      };
    }
    return _makeFlat(false)(map(fn, monad));
  }));

  /**
   * Restricts a number to be within a range.
   *
   * Also works for other ordered types such as Strings and Dates.
   *
   * @func
   * @memberOf R
   * @since v0.20.0
   * @category Relation
   * @sig Ord a => a -> a -> a -> a
   * @param {Number} minimum The lower limit of the clamp (inclusive)
   * @param {Number} maximum The upper limit of the clamp (inclusive)
   * @param {Number} value Value to be clamped
   * @return {Number} Returns `minimum` when `val < minimum`, `maximum` when `val > maximum`, returns `val` otherwise
   * @example
   *
   *      R.clamp(1, 10, -5) // => 1
   *      R.clamp(1, 10, 15) // => 10
   *      R.clamp(1, 10, 4)  // => 4
   */
  var clamp = /*#__PURE__*/_curry3(function clamp(min, max, value) {
    if (min > max) {
      throw new Error('min must not be greater than max in clamp(min, max, value)');
    }
    return value < min ? min : value > max ? max : value;
  });

  function _cloneRegExp(pattern) {
                                    return new RegExp(pattern.source, (pattern.global ? 'g' : '') + (pattern.ignoreCase ? 'i' : '') + (pattern.multiline ? 'm' : '') + (pattern.sticky ? 'y' : '') + (pattern.unicode ? 'u' : ''));
  }

  /**
   * Gives a single-word string description of the (native) type of a value,
   * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
   * attempt to distinguish user Object types any further, reporting them all as
   * 'Object'.
   *
   * @func
   * @memberOf R
   * @since v0.8.0
   * @category Type
   * @sig (* -> {*}) -> String
   * @param {*} val The value to test
   * @return {String}
   * @example
   *
   *      R.type({}); //=> "Object"
   *      R.type(1); //=> "Number"
   *      R.type(false); //=> "Boolean"
   *      R.type('s'); //=> "String"
   *      R.type(null); //=> "Null"
   *      R.type([]); //=> "Array"
   *      R.type(/[A-z]/); //=> "RegExp"
   *      R.type(() => {}); //=> "Function"
   *      R.type(undefined); //=> "Undefined"
   */
  var type = /*#__PURE__*/_curry1(function type(val) {
    return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1);
  });

  /**
   * Copies an object.
   *
   * @private
   * @param {*} value The value to be copied
   * @param {Array} refFrom Array containing the source references
   * @param {Array} refTo Array containing the copied source references
   * @param {Boolean} deep Whether or not to perform deep cloning.
   * @return {*} The copied value.
   */
  function _clone(value, refFrom, refTo, deep) {
    var copy = function copy(copiedValue) {
      var len = refFrom.length;
      var idx = 0;
      while (idx < len) {
        if (value === refFrom[idx]) {
          return refTo[idx];
        }
        idx += 1;
      }
      refFrom[idx + 1] = value;
      refTo[idx + 1] = copiedValue;
      for (var key in value) {
        copiedValue[key] = deep ? _clone(value[key], refFrom, refTo, true) : value[key];
      }
      return copiedValue;
    };
    switch (type(value)) {
      case 'Object':
        return copy({});
      case 'Array':
        return copy([]);
      case 'Date':
        return new Date(value.valueOf());
      case 'RegExp':
        return _cloneRegExp(value);
      default:
        return value;
    }
  }

  /**
   * Creates a deep copy of the value which may contain (nested) `Array`s and
   * `Object`s, `Number`s, `String`s, `Boolean`s and `Date`s. `Function`s are
   * assigned by reference rather than copied
   *
   * Dispatches to a `clone` method if present.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Object
   * @sig {*} -> {*}
   * @param {*} value The object or array to clone
   * @return {*} A deeply cloned copy of `val`
   * @example
   *
   *      const objects = [{}, {}, {}];
   *      const objectsClone = R.clone(objects);
   *      objects === objectsClone; //=> false
   *      objects[0] === objectsClone[0]; //=> false
   */
  var clone = /*#__PURE__*/_curry1(function clone(value) {
    return value != null && typeof value.clone === 'function' ? value.clone() : _clone(value, [], [], true);
  });

  /**
   * Makes a comparator function out of a function that reports whether the first
   * element is less than the second.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Function
   * @sig ((a, b) -> Boolean) -> ((a, b) -> Number)
   * @param {Function} pred A predicate function of arity two which will return `true` if the first argument
   * is less than the second, `false` otherwise
   * @return {Function} A Function :: a -> b -> Int that returns `-1` if a < b, `1` if b < a, otherwise `0`
   * @example
   *
   *      const byAge = R.comparator((a, b) => a.age < b.age);
   *      const people = [
   *        { name: 'Emma', age: 70 },
   *        { name: 'Peter', age: 78 },
   *        { name: 'Mikhail', age: 62 },
   *      ];
   *      const peopleByIncreasingAge = R.sort(byAge, people);
   *        //=> [{ name: 'Mikhail', age: 62 },{ name: 'Emma', age: 70 }, { name: 'Peter', age: 78 }]
   */
  var comparator = /*#__PURE__*/_curry1(function comparator(pred) {
    return function (a, b) {
      return pred(a, b) ? -1 : pred(b, a) ? 1 : 0;
    };
  });

  /**
   * A function that returns the `!` of its argument. It will return `true` when
   * passed false-y value, and `false` when passed a truth-y one.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Logic
   * @sig * -> Boolean
   * @param {*} a any value
   * @return {Boolean} the logical inverse of passed argument.
   * @see R.complement
   * @example
   *
   *      R.not(true); //=> false
   *      R.not(false); //=> true
   *      R.not(0); //=> true
   *      R.not(1); //=> false
   */
  var not = /*#__PURE__*/_curry1(function not(a) {
    return !a;
  });

  /**
   * Takes a function `f` and returns a function `g` such that if called with the same arguments
   * when `f` returns a "truthy" value, `g` returns `false` and when `f` returns a "falsy" value `g` returns `true`.
   *
   * `R.complement` may be applied to any functor
   *
   * @func
   * @memberOf R
   * @since v0.12.0
   * @category Logic
   * @sig (*... -> *) -> (*... -> Boolean)
   * @param {Function} f
   * @return {Function}
   * @see R.not
   * @example
   *
   *      const isNotNil = R.complement(R.isNil);
   *      isNil(null); //=> true
   *      isNotNil(null); //=> false
   *      isNil(7); //=> false
   *      isNotNil(7); //=> true
   */
  var complement = /*#__PURE__*/lift(not);

  function _pipe(f, g) {
    return function () {
      return g.call(this, f.apply(this, arguments));
    };
  }

  /**
   * This checks whether a function has a [methodname] function. If it isn't an
   * array it will execute that function otherwise it will default to the ramda
   * implementation.
   *
   * @private
   * @param {Function} fn ramda implemtation
   * @param {String} methodname property to check for a custom implementation
   * @return {Object} Whatever the return value of the method is.
   */
  function _checkForMethod(methodname, fn) {
    return function () {
      var length = arguments.length;
      if (length === 0) {
        return fn();
      }
      var obj = arguments[length - 1];
      return _isArray(obj) || typeof obj[methodname] !== 'function' ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
    };
  }

  /**
   * Returns the elements of the given list or string (or object with a `slice`
   * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
   *
   * Dispatches to the `slice` method of the third argument, if present.
   *
   * @func
   * @memberOf R
   * @since v0.1.4
   * @category List
   * @sig Number -> Number -> [a] -> [a]
   * @sig Number -> Number -> String -> String
   * @param {Number} fromIndex The start index (inclusive).
   * @param {Number} toIndex The end index (exclusive).
   * @param {*} list
   * @return {*}
   * @example
   *
   *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
   *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
   *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
   *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
   *      R.slice(0, 3, 'ramda');                     //=> 'ram'
   */
  var slice = /*#__PURE__*/_curry3( /*#__PURE__*/_checkForMethod('slice', function slice(fromIndex, toIndex, list) {
    return Array.prototype.slice.call(list, fromIndex, toIndex);
  }));

  /**
   * Returns all but the first element of the given list or string (or object
   * with a `tail` method).
   *
   * Dispatches to the `slice` method of the first argument, if present.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig [a] -> [a]
   * @sig String -> String
   * @param {*} list
   * @return {*}
   * @see R.head, R.init, R.last
   * @example
   *
   *      R.tail([1, 2, 3]);  //=> [2, 3]
   *      R.tail([1, 2]);     //=> [2]
   *      R.tail([1]);        //=> []
   *      R.tail([]);         //=> []
   *
   *      R.tail('abc');  //=> 'bc'
   *      R.tail('ab');   //=> 'b'
   *      R.tail('a');    //=> ''
   *      R.tail('');     //=> ''
   */
  var tail = /*#__PURE__*/_curry1( /*#__PURE__*/_checkForMethod('tail', /*#__PURE__*/slice(1, Infinity)));

  /**
   * Performs left-to-right function composition. The leftmost function may have
   * any arity; the remaining functions must be unary.
   *
   * In some libraries this function is named `sequence`.
   *
   * **Note:** The result of pipe is not automatically curried.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Function
   * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
   * @param {...Function} functions
   * @return {Function}
   * @see R.compose
   * @example
   *
   *      const f = R.pipe(Math.pow, R.negate, R.inc);
   *
   *      f(3, 4); // -(3^4) + 1
   * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))
   */
  function pipe() {
    if (arguments.length === 0) {
      throw new Error('pipe requires at least one argument');
    }
    return _arity(arguments[0].length, reduce(_pipe, arguments[0], tail(arguments)));
  }

  /**
   * Returns a new list or string with the elements or characters in reverse
   * order.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig [a] -> [a]
   * @sig String -> String
   * @param {Array|String} list
   * @return {Array|String}
   * @example
   *
   *      R.reverse([1, 2, 3]);  //=> [3, 2, 1]
   *      R.reverse([1, 2]);     //=> [2, 1]
   *      R.reverse([1]);        //=> [1]
   *      R.reverse([]);         //=> []
   *
   *      R.reverse('abc');      //=> 'cba'
   *      R.reverse('ab');       //=> 'ba'
   *      R.reverse('a');        //=> 'a'
   *      R.reverse('');         //=> ''
   */
  var reverse = /*#__PURE__*/_curry1(function reverse(list) {
    return _isString(list) ? list.split('').reverse().join('') : Array.prototype.slice.call(list, 0).reverse();
  });

  /**
   * Performs right-to-left function composition. The rightmost function may have
   * any arity; the remaining functions must be unary.
   *
   * **Note:** The result of compose is not automatically curried.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Function
   * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
   * @param {...Function} ...functions The functions to compose
   * @return {Function}
   * @see R.pipe
   * @example
   *
   *      const classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName
   *      const yellGreeting = R.compose(R.toUpper, classyGreeting);
   *      yellGreeting('James', 'Bond'); //=> "THE NAME'S BOND, JAMES BOND"
   *
   *      R.compose(Math.abs, R.add(1), R.multiply(2))(-4) //=> 7
   *
   * @symb R.compose(f, g, h)(a, b) = f(g(h(a, b)))
   */
  function compose() {
    if (arguments.length === 0) {
      throw new Error('compose requires at least one argument');
    }
    return pipe.apply(this, reverse(arguments));
  }

  /**
   * Returns the right-to-left Kleisli composition of the provided functions,
   * each of which must return a value of a type supported by [`chain`](#chain).
   *
   * `R.composeK(h, g, f)` is equivalent to `R.compose(R.chain(h), R.chain(g), f)`.
   *
   * @func
   * @memberOf R
   * @since v0.16.0
   * @category Function
   * @sig Chain m => ((y -> m z), (x -> m y), ..., (a -> m b)) -> (a -> m z)
   * @param {...Function} ...functions The functions to compose
   * @return {Function}
   * @see R.pipeK
   * @deprecated since v0.26.0
   * @example
   *
   *       //  get :: String -> Object -> Maybe *
   *       const get = R.curry((propName, obj) => Maybe(obj[propName]))
   *
   *       //  getStateCode :: Maybe String -> Maybe String
   *       const getStateCode = R.composeK(
   *         R.compose(Maybe.of, R.toUpper),
   *         get('state'),
   *         get('address'),
   *         get('user'),
   *       );
   *       getStateCode({"user":{"address":{"state":"ny"}}}); //=> Maybe.Just("NY")
   *       getStateCode({}); //=> Maybe.Nothing()
   * @symb R.composeK(f, g, h)(a) = R.chain(f, R.chain(g, h(a)))
   */
  function composeK() {
    if (arguments.length === 0) {
      throw new Error('composeK requires at least one argument');
    }
    var init = Array.prototype.slice.call(arguments);
    var last = init.pop();
    return compose(compose.apply(this, map(chain, init)), last);
  }

  function _pipeP(f, g) {
    return function () {
      var ctx = this;
      return f.apply(ctx, arguments).then(function (x) {
        return g.call(ctx, x);
      });
    };
  }

  /**
   * Performs left-to-right composition of one or more Promise-returning
   * functions. The leftmost function may have any arity; the remaining functions
   * must be unary.
   *
   * @func
   * @memberOf R
   * @since v0.10.0
   * @category Function
   * @sig ((a -> Promise b), (b -> Promise c), ..., (y -> Promise z)) -> (a -> Promise z)
   * @param {...Function} functions
   * @return {Function}
   * @see R.composeP
   * @deprecated since v0.26.0
   * @example
   *
   *      //  followersForUser :: String -> Promise [User]
   *      const followersForUser = R.pipeP(db.getUserById, db.getFollowers);
   */
  function pipeP() {
    if (arguments.length === 0) {
      throw new Error('pipeP requires at least one argument');
    }
    return _arity(arguments[0].length, reduce(_pipeP, arguments[0], tail(arguments)));
  }

  /**
   * Performs right-to-left composition of one or more Promise-returning
   * functions. The rightmost function may have any arity; the remaining
   * functions must be unary.
   *
   * @func
   * @memberOf R
   * @since v0.10.0
   * @category Function
   * @sig ((y -> Promise z), (x -> Promise y), ..., (a -> Promise b)) -> (a -> Promise z)
   * @param {...Function} functions The functions to compose
   * @return {Function}
   * @see R.pipeP
   * @deprecated since v0.26.0
   * @example
   *
   *      const db = {
   *        users: {
   *          JOE: {
   *            name: 'Joe',
   *            followers: ['STEVE', 'SUZY']
   *          }
   *        }
   *      }
   *
   *      // We'll pretend to do a db lookup which returns a promise
   *      const lookupUser = (userId) => Promise.resolve(db.users[userId])
   *      const lookupFollowers = (user) => Promise.resolve(user.followers)
   *      lookupUser('JOE').then(lookupFollowers)
   *
   *      //  followersForUser :: String -> Promise [UserId]
   *      const followersForUser = R.composeP(lookupFollowers, lookupUser);
   *      followersForUser('JOE').then(followers => console.log('Followers:', followers))
   *      // Followers: ["STEVE","SUZY"]
   */
  function composeP() {
    if (arguments.length === 0) {
      throw new Error('composeP requires at least one argument');
    }
    return pipeP.apply(this, reverse(arguments));
  }

  /**
   * Returns the nth element of the given list or string. If n is negative the
   * element at index length + n is returned.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig Number -> [a] -> a | Undefined
   * @sig Number -> String -> String
   * @param {Number} offset
   * @param {*} list
   * @return {*}
   * @example
   *
   *      const list = ['foo', 'bar', 'baz', 'quux'];
   *      R.nth(1, list); //=> 'bar'
   *      R.nth(-1, list); //=> 'quux'
   *      R.nth(-99, list); //=> undefined
   *
   *      R.nth(2, 'abc'); //=> 'c'
   *      R.nth(3, 'abc'); //=> ''
   * @symb R.nth(-1, [a, b, c]) = c
   * @symb R.nth(0, [a, b, c]) = a
   * @symb R.nth(1, [a, b, c]) = b
   */
  var nth = /*#__PURE__*/_curry2(function nth(offset, list) {
    var idx = offset < 0 ? list.length + offset : offset;
    return _isString(list) ? list.charAt(idx) : list[idx];
  });

  /**
   * Returns the first element of the given list or string. In some libraries
   * this function is named `first`.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig [a] -> a | Undefined
   * @sig String -> String
   * @param {Array|String} list
   * @return {*}
   * @see R.tail, R.init, R.last
   * @example
   *
   *      R.head(['fi', 'fo', 'fum']); //=> 'fi'
   *      R.head([]); //=> undefined
   *
   *      R.head('abc'); //=> 'a'
   *      R.head(''); //=> ''
   */
  var head = /*#__PURE__*/nth(0);

  function _identity(x) {
    return x;
  }

  /**
   * A function that does nothing but return the parameter supplied to it. Good
   * as a default or placeholder function.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Function
   * @sig a -> a
   * @param {*} x The value to return.
   * @return {*} The input value, `x`.
   * @example
   *
   *      R.identity(1); //=> 1
   *
   *      const obj = {};
   *      R.identity(obj) === obj; //=> true
   * @symb R.identity(a) = a
   */
  var identity = /*#__PURE__*/_curry1(_identity);

  /**
   * Performs left-to-right function composition using transforming function. The leftmost function may have
   * any arity; the remaining functions must be unary.
   *
   * **Note:** The result of pipeWith is not automatically curried.
   *
   * @func
   * @memberOf R
   * @category Function
   * @sig ((* -> *), [((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)]) -> ((a, b, ..., n) -> z)
   * @param {...Function} functions
   * @return {Function}
   * @see R.composeWith, R.pipe
   * @example
   *
   *      const pipeWhileNotNil = R.pipeWith((f, res) => R.isNil(res) ? res : f(res));
   *      const f = pipeWhileNotNil([Math.pow, R.negate, R.inc])
   *
   *      f(3, 4); // -(3^4) + 1
   * @symb R.pipeWith(f)([g, h, i])(...args) = f(i, f(h, f(g, ...args)))
   */
  var pipeWith = /*#__PURE__*/_curry2(function pipeWith(xf, list) {
    if (list.length <= 0) {
      return identity;
    }

    var headList = head(list);
    var tailList = tail(list);

    return _arity(headList.length, function () {
      return _reduce(function (result, f) {
        return xf.call(this, f, result);
      }, headList.apply(this, arguments), tailList);
    });
  });

  /**
   * Performs right-to-left function composition using transforming function. The rightmost function may have
   * any arity; the remaining functions must be unary.
   *
   * **Note:** The result of compose is not automatically curried.
   *
   * @func
   * @memberOf R
   * @category Function
   * @sig ((* -> *), [(y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)]) -> ((a, b, ..., n) -> z)
   * @param {...Function} ...functions The functions to compose
   * @return {Function}
   * @see R.compose, R.pipeWith
   * @example
   *
   *      const composeWhileNotNil = R.composeWith((f, res) => R.isNil(res) ? res : f(res));
   *
   *      composeWhileNotNil([R.inc, R.prop('age')])({age: 1}) //=> 2
   *      composeWhileNotNil([R.inc, R.prop('age')])({}) //=> undefined
   *
   * @symb R.composeWith(f)([g, h, i])(...args) = f(g, f(h, f(i, ...args)))
   */
  var composeWith = /*#__PURE__*/_curry2(function composeWith(xf, list) {
    return pipeWith.apply(this, [xf, reverse(list)]);
  });

  function _arrayFromIterator(iter) {
    var list = [];
    var next;
    while (!(next = iter.next()).done) {
      list.push(next.value);
    }
    return list;
  }

  function _includesWith(pred, x, list) {
    var idx = 0;
    var len = list.length;

    while (idx < len) {
      if (pred(x, list[idx])) {
        return true;
      }
      idx += 1;
    }
    return false;
  }

  function _functionName(f) {
    // String(x => x) evaluates to "x => x", so the pattern may not match.
    var match = String(f).match(/^function (\w*)/);
    return match == null ? '' : match[1];
  }

  // Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
  function _objectIs(a, b) {
    // SameValue algorithm
    if (a === b) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return a !== 0 || 1 / a === 1 / b;
    } else {
      // Step 6.a: NaN == NaN
      return a !== a && b !== b;
    }
  }

  var _objectIs$1 = typeof Object.is === 'function' ? Object.is : _objectIs;

  /**
   * private _uniqContentEquals function.
   * That function is checking equality of 2 iterator contents with 2 assumptions
   * - iterators lengths are the same
   * - iterators values are unique
   *
   * false-positive result will be returned for comparision of, e.g.
   * - [1,2,3] and [1,2,3,4]
   * - [1,1,1] and [1,2,3]
   * */

  function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
    var a = _arrayFromIterator(aIterator);
    var b = _arrayFromIterator(bIterator);

    function eq(_a, _b) {
      return _equals(_a, _b, stackA.slice(), stackB.slice());
    }

    // if *a* array contains any element that is not included in *b*
    return !_includesWith(function (b, aItem) {
      return !_includesWith(eq, aItem, b);
    }, b, a);
  }

  function _equals(a, b, stackA, stackB) {
    if (_objectIs$1(a, b)) {
      return true;
    }

    var typeA = type(a);

    if (typeA !== type(b)) {
      return false;
    }

    if (a == null || b == null) {
      return false;
    }

    if (typeof a['fantasy-land/equals'] === 'function' || typeof b['fantasy-land/equals'] === 'function') {
      return typeof a['fantasy-land/equals'] === 'function' && a['fantasy-land/equals'](b) && typeof b['fantasy-land/equals'] === 'function' && b['fantasy-land/equals'](a);
    }

    if (typeof a.equals === 'function' || typeof b.equals === 'function') {
      return typeof a.equals === 'function' && a.equals(b) && typeof b.equals === 'function' && b.equals(a);
    }

    switch (typeA) {
      case 'Arguments':
      case 'Array':
      case 'Object':
        if (typeof a.constructor === 'function' && _functionName(a.constructor) === 'Promise') {
          return a === b;
        }
        break;
      case 'Boolean':
      case 'Number':
      case 'String':
        if (!(typeof a === typeof b && _objectIs$1(a.valueOf(), b.valueOf()))) {
          return false;
        }
        break;
      case 'Date':
        if (!_objectIs$1(a.valueOf(), b.valueOf())) {
          return false;
        }
        break;
      case 'Error':
        return a.name === b.name && a.message === b.message;
      case 'RegExp':
        if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
          return false;
        }
        break;
    }

    var idx = stackA.length - 1;
    while (idx >= 0) {
      if (stackA[idx] === a) {
        return stackB[idx] === b;
      }
      idx -= 1;
    }

    switch (typeA) {
      case 'Map':
        if (a.size !== b.size) {
          return false;
        }

        return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));
      case 'Set':
        if (a.size !== b.size) {
          return false;
        }

        return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));
      case 'Arguments':
      case 'Array':
      case 'Object':
      case 'Boolean':
      case 'Number':
      case 'String':
      case 'Date':
      case 'Error':
      case 'RegExp':
      case 'Int8Array':
      case 'Uint8Array':
      case 'Uint8ClampedArray':
      case 'Int16Array':
      case 'Uint16Array':
      case 'Int32Array':
      case 'Uint32Array':
      case 'Float32Array':
      case 'Float64Array':
      case 'ArrayBuffer':
        break;
      default:
        // Values of other types are only equal if identical.
        return false;
    }

    var keysA = keys(a);
    if (keysA.length !== keys(b).length) {
      return false;
    }

    var extendedStackA = stackA.concat([a]);
    var extendedStackB = stackB.concat([b]);

    idx = keysA.length - 1;
    while (idx >= 0) {
      var key = keysA[idx];
      if (!(_has(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {
        return false;
      }
      idx -= 1;
    }
    return true;
  }

  /**
   * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
   * cyclical data structures.
   *
   * Dispatches symmetrically to the `equals` methods of both arguments, if
   * present.
   *
   * @func
   * @memberOf R
   * @since v0.15.0
   * @category Relation
   * @sig a -> b -> Boolean
   * @param {*} a
   * @param {*} b
   * @return {Boolean}
   * @example
   *
   *      R.equals(1, 1); //=> true
   *      R.equals(1, '1'); //=> false
   *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
   *
   *      const a = {}; a.v = a;
   *      const b = {}; b.v = b;
   *      R.equals(a, b); //=> true
   */
  var equals = /*#__PURE__*/_curry2(function equals(a, b) {
    return _equals(a, b, [], []);
  });

  function _indexOf(list, a, idx) {
    var inf, item;
    // Array.prototype.indexOf doesn't exist below IE9
    if (typeof list.indexOf === 'function') {
      switch (typeof a) {
        case 'number':
          if (a === 0) {
            // manually crawl the list to distinguish between +0 and -0
            inf = 1 / a;
            while (idx < list.length) {
              item = list[idx];
              if (item === 0 && 1 / item === inf) {
                return idx;
              }
              idx += 1;
            }
            return -1;
          } else if (a !== a) {
            // NaN
            while (idx < list.length) {
              item = list[idx];
              if (typeof item === 'number' && item !== item) {
                return idx;
              }
              idx += 1;
            }
            return -1;
          }
          // non-zero numbers can utilise Set
          return list.indexOf(a, idx);

        // all these types can utilise Set
        case 'string':
        case 'boolean':
        case 'function':
        case 'undefined':
          return list.indexOf(a, idx);

        case 'object':
          if (a === null) {
            // null can utilise Set
            return list.indexOf(a, idx);
          }
      }
    }
    // anything else not covered above, defer to R.equals
    while (idx < list.length) {
      if (equals(list[idx], a)) {
        return idx;
      }
      idx += 1;
    }
    return -1;
  }

  function _includes(a, list) {
    return _indexOf(list, a, 0) >= 0;
  }

  function _quote(s) {
    var escaped = s.replace(/\\/g, '\\\\').replace(/[\b]/g, '\\b') // \b matches word boundary; [\b] matches backspace
    .replace(/\f/g, '\\f').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t').replace(/\v/g, '\\v').replace(/\0/g, '\\0');

    return '"' + escaped.replace(/"/g, '\\"') + '"';
  }

  /**
   * Polyfill from <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString>.
   */
  var pad = function pad(n) {
    return (n < 10 ? '0' : '') + n;
  };

  var _toISOString = typeof Date.prototype.toISOString === 'function' ? function _toISOString(d) {
    return d.toISOString();
  } : function _toISOString(d) {
    return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate()) + 'T' + pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds()) + '.' + (d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z';
  };

  function _complement(f) {
    return function () {
      return !f.apply(this, arguments);
    };
  }

  function _filter(fn, list) {
    var idx = 0;
    var len = list.length;
    var result = [];

    while (idx < len) {
      if (fn(list[idx])) {
        result[result.length] = list[idx];
      }
      idx += 1;
    }
    return result;
  }

  function _isObject(x) {
    return Object.prototype.toString.call(x) === '[object Object]';
  }

  var XFilter = /*#__PURE__*/function () {
    function XFilter(f, xf) {
      this.xf = xf;
      this.f = f;
    }
    XFilter.prototype['@@transducer/init'] = _xfBase.init;
    XFilter.prototype['@@transducer/result'] = _xfBase.result;
    XFilter.prototype['@@transducer/step'] = function (result, input) {
      return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
    };

    return XFilter;
  }();

  var _xfilter = /*#__PURE__*/_curry2(function _xfilter(f, xf) {
    return new XFilter(f, xf);
  });

  /**
   * Takes a predicate and a `Filterable`, and returns a new filterable of the
   * same type containing the members of the given filterable which satisfy the
   * given predicate. Filterable objects include plain objects or any object
   * that has a filter method such as `Array`.
   *
   * Dispatches to the `filter` method of the second argument, if present.
   *
   * Acts as a transducer if a transformer is given in list position.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig Filterable f => (a -> Boolean) -> f a -> f a
   * @param {Function} pred
   * @param {Array} filterable
   * @return {Array} Filterable
   * @see R.reject, R.transduce, R.addIndex
   * @example
   *
   *      const isEven = n => n % 2 === 0;
   *
   *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
   *
   *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
   */
  var filter = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['filter'], _xfilter, function (pred, filterable) {
    return _isObject(filterable) ? _reduce(function (acc, key) {
      if (pred(filterable[key])) {
        acc[key] = filterable[key];
      }
      return acc;
    }, {}, keys(filterable)) :
    // else
    _filter(pred, filterable);
  }));

  /**
   * The complement of [`filter`](#filter).
   *
   * Acts as a transducer if a transformer is given in list position. Filterable
   * objects include plain objects or any object that has a filter method such
   * as `Array`.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig Filterable f => (a -> Boolean) -> f a -> f a
   * @param {Function} pred
   * @param {Array} filterable
   * @return {Array}
   * @see R.filter, R.transduce, R.addIndex
   * @example
   *
   *      const isOdd = (n) => n % 2 === 1;
   *
   *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
   *
   *      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
   */
  var reject = /*#__PURE__*/_curry2(function reject(pred, filterable) {
    return filter(_complement(pred), filterable);
  });

  function _toString(x, seen) {
    var recur = function recur(y) {
      var xs = seen.concat([x]);
      return _includes(y, xs) ? '<Circular>' : _toString(y, xs);
    };

    //  mapPairs :: (Object, [String]) -> [String]
    var mapPairs = function (obj, keys) {
      return _map(function (k) {
        return _quote(k) + ': ' + recur(obj[k]);
      }, keys.slice().sort());
    };

    switch (Object.prototype.toString.call(x)) {
      case '[object Arguments]':
        return '(function() { return arguments; }(' + _map(recur, x).join(', ') + '))';
      case '[object Array]':
        return '[' + _map(recur, x).concat(mapPairs(x, reject(function (k) {
          return (/^\d+$/.test(k)
          );
        }, keys(x)))).join(', ') + ']';
      case '[object Boolean]':
        return typeof x === 'object' ? 'new Boolean(' + recur(x.valueOf()) + ')' : x.toString();
      case '[object Date]':
        return 'new Date(' + (isNaN(x.valueOf()) ? recur(NaN) : _quote(_toISOString(x))) + ')';
      case '[object Null]':
        return 'null';
      case '[object Number]':
        return typeof x === 'object' ? 'new Number(' + recur(x.valueOf()) + ')' : 1 / x === -Infinity ? '-0' : x.toString(10);
      case '[object String]':
        return typeof x === 'object' ? 'new String(' + recur(x.valueOf()) + ')' : _quote(x);
      case '[object Undefined]':
        return 'undefined';
      default:
        if (typeof x.toString === 'function') {
          var repr = x.toString();
          if (repr !== '[object Object]') {
            return repr;
          }
        }
        return '{' + mapPairs(x, keys(x)).join(', ') + '}';
    }
  }

  /**
   * Returns the string representation of the given value. `eval`'ing the output
   * should result in a value equivalent to the input value. Many of the built-in
   * `toString` methods do not satisfy this requirement.
   *
   * If the given value is an `[object Object]` with a `toString` method other
   * than `Object.prototype.toString`, this method is invoked with no arguments
   * to produce the return value. This means user-defined constructor functions
   * can provide a suitable `toString` method. For example:
   *
   *     function Point(x, y) {
   *       this.x = x;
   *       this.y = y;
   *     }
   *
   *     Point.prototype.toString = function() {
   *       return 'new Point(' + this.x + ', ' + this.y + ')';
   *     };
   *
   *     R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'
   *
   * @func
   * @memberOf R
   * @since v0.14.0
   * @category String
   * @sig * -> String
   * @param {*} val
   * @return {String}
   * @example
   *
   *      R.toString(42); //=> '42'
   *      R.toString('abc'); //=> '"abc"'
   *      R.toString([1, 2, 3]); //=> '[1, 2, 3]'
   *      R.toString({foo: 1, bar: 2, baz: 3}); //=> '{"bar": 2, "baz": 3, "foo": 1}'
   *      R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date("2001-02-03T04:05:06.000Z")'
   */
  var toString$1 = /*#__PURE__*/_curry1(function toString(val) {
    return _toString(val, []);
  });

  /**
   * Returns the result of concatenating the given lists or strings.
   *
   * Note: `R.concat` expects both arguments to be of the same type,
   * unlike the native `Array.prototype.concat` method. It will throw
   * an error if you `concat` an Array with a non-Array value.
   *
   * Dispatches to the `concat` method of the first argument, if present.
   * Can also concatenate two members of a [fantasy-land
   * compatible semigroup](https://github.com/fantasyland/fantasy-land#semigroup).
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig [a] -> [a] -> [a]
   * @sig String -> String -> String
   * @param {Array|String} firstList The first list
   * @param {Array|String} secondList The second list
   * @return {Array|String} A list consisting of the elements of `firstList` followed by the elements of
   * `secondList`.
   *
   * @example
   *
   *      R.concat('ABC', 'DEF'); // 'ABCDEF'
   *      R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
   *      R.concat([], []); //=> []
   */
  var concat = /*#__PURE__*/_curry2(function concat(a, b) {
    if (_isArray(a)) {
      if (_isArray(b)) {
        return a.concat(b);
      }
      throw new TypeError(toString$1(b) + ' is not an array');
    }
    if (_isString(a)) {
      if (_isString(b)) {
        return a + b;
      }
      throw new TypeError(toString$1(b) + ' is not a string');
    }
    if (a != null && _isFunction(a['fantasy-land/concat'])) {
      return a['fantasy-land/concat'](b);
    }
    if (a != null && _isFunction(a.concat)) {
      return a.concat(b);
    }
    throw new TypeError(toString$1(a) + ' does not have a method named "concat" or "fantasy-land/concat"');
  });

  /**
   * Returns a function, `fn`, which encapsulates `if/else, if/else, ...` logic.
   * `R.cond` takes a list of [predicate, transformer] pairs. All of the arguments
   * to `fn` are applied to each of the predicates in turn until one returns a
   * "truthy" value, at which point `fn` returns the result of applying its
   * arguments to the corresponding transformer. If none of the predicates
   * matches, `fn` returns undefined.
   *
   * @func
   * @memberOf R
   * @since v0.6.0
   * @category Logic
   * @sig [[(*... -> Boolean),(*... -> *)]] -> (*... -> *)
   * @param {Array} pairs A list of [predicate, transformer]
   * @return {Function}
   * @see R.ifElse, R.unless, R.when
   * @example
   *
   *      const fn = R.cond([
   *        [R.equals(0),   R.always('water freezes at 0°C')],
   *        [R.equals(100), R.always('water boils at 100°C')],
   *        [R.T,           temp => 'nothing special happens at ' + temp + '°C']
   *      ]);
   *      fn(0); //=> 'water freezes at 0°C'
   *      fn(50); //=> 'nothing special happens at 50°C'
   *      fn(100); //=> 'water boils at 100°C'
   */
  var cond = /*#__PURE__*/_curry1(function cond(pairs) {
    var arity = reduce(max, 0, map(function (pair) {
      return pair[0].length;
    }, pairs));
    return _arity(arity, function () {
      var idx = 0;
      while (idx < pairs.length) {
        if (pairs[idx][0].apply(this, arguments)) {
          return pairs[idx][1].apply(this, arguments);
        }
        idx += 1;
      }
    });
  });

  /**
   * Wraps a constructor function inside a curried function that can be called
   * with the same arguments and returns the same type. The arity of the function
   * returned is specified to allow using variadic constructor functions.
   *
   * @func
   * @memberOf R
   * @since v0.4.0
   * @category Function
   * @sig Number -> (* -> {*}) -> (* -> {*})
   * @param {Number} n The arity of the constructor function.
   * @param {Function} Fn The constructor function to wrap.
   * @return {Function} A wrapped, curried constructor function.
   * @example
   *
   *      // Variadic Constructor function
   *      function Salad() {
   *        this.ingredients = arguments;
   *      }
   *
   *      Salad.prototype.recipe = function() {
   *        const instructions = R.map(ingredient => 'Add a dollop of ' + ingredient, this.ingredients);
   *        return R.join('\n', instructions);
   *      };
   *
   *      const ThreeLayerSalad = R.constructN(3, Salad);
   *
   *      // Notice we no longer need the 'new' keyword, and the constructor is curried for 3 arguments.
   *      const salad = ThreeLayerSalad('Mayonnaise')('Potato Chips')('Ketchup');
   *
   *      console.log(salad.recipe());
   *      // Add a dollop of Mayonnaise
   *      // Add a dollop of Potato Chips
   *      // Add a dollop of Ketchup
   */
  var constructN = /*#__PURE__*/_curry2(function constructN(n, Fn) {
    if (n > 10) {
      throw new Error('Constructor with greater than ten arguments');
    }
    if (n === 0) {
      return function () {
        return new Fn();
      };
    }
    return curry(nAry(n, function ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
      switch (arguments.length) {
        case 1:
          return new Fn($0);
        case 2:
          return new Fn($0, $1);
        case 3:
          return new Fn($0, $1, $2);
        case 4:
          return new Fn($0, $1, $2, $3);
        case 5:
          return new Fn($0, $1, $2, $3, $4);
        case 6:
          return new Fn($0, $1, $2, $3, $4, $5);
        case 7:
          return new Fn($0, $1, $2, $3, $4, $5, $6);
        case 8:
          return new Fn($0, $1, $2, $3, $4, $5, $6, $7);
        case 9:
          return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8);
        case 10:
          return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8, $9);
      }
    }));
  });

  /**
   * Wraps a constructor function inside a curried function that can be called
   * with the same arguments and returns the same type.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Function
   * @sig (* -> {*}) -> (* -> {*})
   * @param {Function} fn The constructor function to wrap.
   * @return {Function} A wrapped, curried constructor function.
   * @see R.invoker
   * @example
   *
   *      // Constructor function
   *      function Animal(kind) {
   *        this.kind = kind;
   *      };
   *      Animal.prototype.sighting = function() {
   *        return "It's a " + this.kind + "!";
   *      }
   *
   *      const AnimalConstructor = R.construct(Animal)
   *
   *      // Notice we no longer need the 'new' keyword:
   *      AnimalConstructor('Pig'); //=> {"kind": "Pig", "sighting": function (){...}};
   *
   *      const animalTypes = ["Lion", "Tiger", "Bear"];
   *      const animalSighting = R.invoker(0, 'sighting');
   *      const sightNewAnimal = R.compose(animalSighting, AnimalConstructor);
   *      R.map(sightNewAnimal, animalTypes); //=> ["It's a Lion!", "It's a Tiger!", "It's a Bear!"]
   */
  var construct = /*#__PURE__*/_curry1(function construct(Fn) {
    return constructN(Fn.length, Fn);
  });

  /**
   * Returns `true` if the specified value is equal, in [`R.equals`](#equals)
   * terms, to at least one element of the given list; `false` otherwise.
   * Works also with strings.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig a -> [a] -> Boolean
   * @param {Object} a The item to compare against.
   * @param {Array} list The array to consider.
   * @return {Boolean} `true` if an equivalent item is in the list, `false` otherwise.
   * @see R.includes
   * @deprecated since v0.26.0
   * @example
   *
   *      R.contains(3, [1, 2, 3]); //=> true
   *      R.contains(4, [1, 2, 3]); //=> false
   *      R.contains({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true
   *      R.contains([42], [[42]]); //=> true
   *      R.contains('ba', 'banana'); //=>true
   */
  var contains$1 = /*#__PURE__*/_curry2(_includes);

  /**
   * Accepts a converging function and a list of branching functions and returns
   * a new function. The arity of the new function is the same as the arity of
   * the longest branching function. When invoked, this new function is applied
   * to some arguments, and each branching function is applied to those same
   * arguments. The results of each branching function are passed as arguments
   * to the converging function to produce the return value.
   *
   * @func
   * @memberOf R
   * @since v0.4.2
   * @category Function
   * @sig ((x1, x2, ...) -> z) -> [((a, b, ...) -> x1), ((a, b, ...) -> x2), ...] -> (a -> b -> ... -> z)
   * @param {Function} after A function. `after` will be invoked with the return values of
   *        `fn1` and `fn2` as its arguments.
   * @param {Array} functions A list of functions.
   * @return {Function} A new function.
   * @see R.useWith
   * @example
   *
   *      const average = R.converge(R.divide, [R.sum, R.length])
   *      average([1, 2, 3, 4, 5, 6, 7]) //=> 4
   *
   *      const strangeConcat = R.converge(R.concat, [R.toUpper, R.toLower])
   *      strangeConcat("Yodel") //=> "YODELyodel"
   *
   * @symb R.converge(f, [g, h])(a, b) = f(g(a, b), h(a, b))
   */
  var converge = /*#__PURE__*/_curry2(function converge(after, fns) {
    return curryN(reduce(max, 0, pluck('length', fns)), function () {
      var args = arguments;
      var context = this;
      return after.apply(context, _map(function (fn) {
        return fn.apply(context, args);
      }, fns));
    });
  });

  var XReduceBy = /*#__PURE__*/function () {
    function XReduceBy(valueFn, valueAcc, keyFn, xf) {
      this.valueFn = valueFn;
      this.valueAcc = valueAcc;
      this.keyFn = keyFn;
      this.xf = xf;
      this.inputs = {};
    }
    XReduceBy.prototype['@@transducer/init'] = _xfBase.init;
    XReduceBy.prototype['@@transducer/result'] = function (result) {
      var key;
      for (key in this.inputs) {
        if (_has(key, this.inputs)) {
          result = this.xf['@@transducer/step'](result, this.inputs[key]);
          if (result['@@transducer/reduced']) {
            result = result['@@transducer/value'];
            break;
          }
        }
      }
      this.inputs = null;
      return this.xf['@@transducer/result'](result);
    };
    XReduceBy.prototype['@@transducer/step'] = function (result, input) {
      var key = this.keyFn(input);
      this.inputs[key] = this.inputs[key] || [key, this.valueAcc];
      this.inputs[key][1] = this.valueFn(this.inputs[key][1], input);
      return result;
    };

    return XReduceBy;
  }();

  var _xreduceBy = /*#__PURE__*/_curryN(4, [], function _xreduceBy(valueFn, valueAcc, keyFn, xf) {
    return new XReduceBy(valueFn, valueAcc, keyFn, xf);
  });

  /**
   * Groups the elements of the list according to the result of calling
   * the String-returning function `keyFn` on each element and reduces the elements
   * of each group to a single value via the reducer function `valueFn`.
   *
   * This function is basically a more general [`groupBy`](#groupBy) function.
   *
   * Acts as a transducer if a transformer is given in list position.
   *
   * @func
   * @memberOf R
   * @since v0.20.0
   * @category List
   * @sig ((a, b) -> a) -> a -> (b -> String) -> [b] -> {String: a}
   * @param {Function} valueFn The function that reduces the elements of each group to a single
   *        value. Receives two values, accumulator for a particular group and the current element.
   * @param {*} acc The (initial) accumulator value for each group.
   * @param {Function} keyFn The function that maps the list's element into a key.
   * @param {Array} list The array to group.
   * @return {Object} An object with the output of `keyFn` for keys, mapped to the output of
   *         `valueFn` for elements which produced that key when passed to `keyFn`.
   * @see R.groupBy, R.reduce
   * @example
   *
   *      const groupNames = (acc, {name}) => acc.concat(name)
   *      const toGrade = ({score}) =>
   *        score < 65 ? 'F' :
   *        score < 70 ? 'D' :
   *        score < 80 ? 'C' :
   *        score < 90 ? 'B' : 'A'
   *
   *      var students = [
   *        {name: 'Abby', score: 83},
   *        {name: 'Bart', score: 62},
   *        {name: 'Curt', score: 88},
   *        {name: 'Dora', score: 92},
   *      ]
   *
   *      reduceBy(groupNames, [], toGrade, students)
   *      //=> {"A": ["Dora"], "B": ["Abby", "Curt"], "F": ["Bart"]}
   */
  var reduceBy = /*#__PURE__*/_curryN(4, [], /*#__PURE__*/_dispatchable([], _xreduceBy, function reduceBy(valueFn, valueAcc, keyFn, list) {
    return _reduce(function (acc, elt) {
      var key = keyFn(elt);
      acc[key] = valueFn(_has(key, acc) ? acc[key] : valueAcc, elt);
      return acc;
    }, {}, list);
  }));

  /**
   * Counts the elements of a list according to how many match each value of a
   * key generated by the supplied function. Returns an object mapping the keys
   * produced by `fn` to the number of occurrences in the list. Note that all
   * keys are coerced to strings because of how JavaScript objects work.
   *
   * Acts as a transducer if a transformer is given in list position.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Relation
   * @sig (a -> String) -> [a] -> {*}
   * @param {Function} fn The function used to map values to keys.
   * @param {Array} list The list to count elements from.
   * @return {Object} An object mapping keys to number of occurrences in the list.
   * @example
   *
   *      const numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];
   *      R.countBy(Math.floor)(numbers);    //=> {'1': 3, '2': 2, '3': 1}
   *
   *      const letters = ['a', 'b', 'A', 'a', 'B', 'c'];
   *      R.countBy(R.toLower)(letters);   //=> {'a': 3, 'b': 2, 'c': 1}
   */
  var countBy = /*#__PURE__*/reduceBy(function (acc, elem) {
    return acc + 1;
  }, 0);

  /**
   * Decrements its argument.
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category Math
   * @sig Number -> Number
   * @param {Number} n
   * @return {Number} n - 1
   * @see R.inc
   * @example
   *
   *      R.dec(42); //=> 41
   */
  var dec = /*#__PURE__*/add(-1);

  /**
   * Returns the second argument if it is not `null`, `undefined` or `NaN`;
   * otherwise the first argument is returned.
   *
   * @func
   * @memberOf R
   * @since v0.10.0
   * @category Logic
   * @sig a -> b -> a | b
   * @param {a} default The default value.
   * @param {b} val `val` will be returned instead of `default` unless `val` is `null`, `undefined` or `NaN`.
   * @return {*} The second value if it is not `null`, `undefined` or `NaN`, otherwise the default value
   * @example
   *
   *      const defaultTo42 = R.defaultTo(42);
   *
   *      defaultTo42(null);  //=> 42
   *      defaultTo42(undefined);  //=> 42
   *      defaultTo42(false);  //=> false
   *      defaultTo42('Ramda');  //=> 'Ramda'
   *      // parseInt('string') results in NaN
   *      defaultTo42(parseInt('string')); //=> 42
   */
  var defaultTo = /*#__PURE__*/_curry2(function defaultTo(d, v) {
    return v == null || v !== v ? d : v;
  });

  /**
   * Makes a descending comparator function out of a function that returns a value
   * that can be compared with `<` and `>`.
   *
   * @func
   * @memberOf R
   * @since v0.23.0
   * @category Function
   * @sig Ord b => (a -> b) -> a -> a -> Number
   * @param {Function} fn A function of arity one that returns a value that can be compared
   * @param {*} a The first item to be compared.
   * @param {*} b The second item to be compared.
   * @return {Number} `-1` if fn(a) > fn(b), `1` if fn(b) > fn(a), otherwise `0`
   * @see R.ascend
   * @example
   *
   *      const byAge = R.descend(R.prop('age'));
   *      const people = [
   *        { name: 'Emma', age: 70 },
   *        { name: 'Peter', age: 78 },
   *        { name: 'Mikhail', age: 62 },
   *      ];
   *      const peopleByOldestFirst = R.sort(byAge, people);
   *        //=> [{ name: 'Peter', age: 78 }, { name: 'Emma', age: 70 }, { name: 'Mikhail', age: 62 }]
   */
  var descend = /*#__PURE__*/_curry3(function descend(fn, a, b) {
    var aa = fn(a);
    var bb = fn(b);
    return aa > bb ? -1 : aa < bb ? 1 : 0;
  });

  var _Set = /*#__PURE__*/function () {
    function _Set() {
      /* globals Set */
      this._nativeSet = typeof Set === 'function' ? new Set() : null;
      this._items = {};
    }

    // until we figure out why jsdoc chokes on this
    // @param item The item to add to the Set
    // @returns {boolean} true if the item did not exist prior, otherwise false
    //
    _Set.prototype.add = function (item) {
      return !hasOrAdd(item, true, this);
    };

    //
    // @param item The item to check for existence in the Set
    // @returns {boolean} true if the item exists in the Set, otherwise false
    //
    _Set.prototype.has = function (item) {
      return hasOrAdd(item, false, this);
    };

    //
    // Combines the logic for checking whether an item is a member of the set and
    // for adding a new item to the set.
    //
    // @param item       The item to check or add to the Set instance.
    // @param shouldAdd  If true, the item will be added to the set if it doesn't
    //                   already exist.
    // @param set        The set instance to check or add to.
    // @return {boolean} true if the item already existed, otherwise false.
    //
    return _Set;
  }();

  function hasOrAdd(item, shouldAdd, set) {
    var type = typeof item;
    var prevSize, newSize;
    switch (type) {
      case 'string':
      case 'number':
        // distinguish between +0 and -0
        if (item === 0 && 1 / item === -Infinity) {
          if (set._items['-0']) {
            return true;
          } else {
            if (shouldAdd) {
              set._items['-0'] = true;
            }
            return false;
          }
        }
        // these types can all utilise the native Set
        if (set._nativeSet !== null) {
          if (shouldAdd) {
            prevSize = set._nativeSet.size;
            set._nativeSet.add(item);
            newSize = set._nativeSet.size;
            return newSize === prevSize;
          } else {
            return set._nativeSet.has(item);
          }
        } else {
          if (!(type in set._items)) {
            if (shouldAdd) {
              set._items[type] = {};
              set._items[type][item] = true;
            }
            return false;
          } else if (item in set._items[type]) {
            return true;
          } else {
            if (shouldAdd) {
              set._items[type][item] = true;
            }
            return false;
          }
        }

      case 'boolean':
        // set._items['boolean'] holds a two element array
        // representing [ falseExists, trueExists ]
        if (type in set._items) {
          var bIdx = item ? 1 : 0;
          if (set._items[type][bIdx]) {
            return true;
          } else {
            if (shouldAdd) {
              set._items[type][bIdx] = true;
            }
            return false;
          }
        } else {
          if (shouldAdd) {
            set._items[type] = item ? [false, true] : [true, false];
          }
          return false;
        }

      case 'function':
        // compare functions for reference equality
        if (set._nativeSet !== null) {
          if (shouldAdd) {
            prevSize = set._nativeSet.size;
            set._nativeSet.add(item);
            newSize = set._nativeSet.size;
            return newSize === prevSize;
          } else {
            return set._nativeSet.has(item);
          }
        } else {
          if (!(type in set._items)) {
            if (shouldAdd) {
              set._items[type] = [item];
            }
            return false;
          }
          if (!_includes(item, set._items[type])) {
            if (shouldAdd) {
              set._items[type].push(item);
            }
            return false;
          }
          return true;
        }

      case 'undefined':
        if (set._items[type]) {
          return true;
        } else {
          if (shouldAdd) {
            set._items[type] = true;
          }
          return false;
        }

      case 'object':
        if (item === null) {
          if (!set._items['null']) {
            if (shouldAdd) {
              set._items['null'] = true;
            }
            return false;
          }
          return true;
        }
      /* falls through */
      default:
        // reduce the search size of heterogeneous sets by creating buckets
        // for each type.
        type = Object.prototype.toString.call(item);
        if (!(type in set._items)) {
          if (shouldAdd) {
            set._items[type] = [item];
          }
          return false;
        }
        // scan through all previously applied items
        if (!_includes(item, set._items[type])) {
          if (shouldAdd) {
            set._items[type].push(item);
          }
          return false;
        }
        return true;
    }
  }

  /**
   * Finds the set (i.e. no duplicates) of all elements in the first list not
   * contained in the second list. Objects and Arrays are compared in terms of
   * value equality, not reference equality.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Relation
   * @sig [*] -> [*] -> [*]
   * @param {Array} list1 The first list.
   * @param {Array} list2 The second list.
   * @return {Array} The elements in `list1` that are not in `list2`.
   * @see R.differenceWith, R.symmetricDifference, R.symmetricDifferenceWith, R.without
   * @example
   *
   *      R.difference([1,2,3,4], [7,6,5,4,3]); //=> [1,2]
   *      R.difference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5]
   *      R.difference([{a: 1}, {b: 2}], [{a: 1}, {c: 3}]) //=> [{b: 2}]
   */
  var difference = /*#__PURE__*/_curry2(function difference(first, second) {
    var out = [];
    var idx = 0;
    var firstLen = first.length;
    var secondLen = second.length;
    var toFilterOut = new _Set();

    for (var i = 0; i < secondLen; i += 1) {
      toFilterOut.add(second[i]);
    }

    while (idx < firstLen) {
      if (toFilterOut.add(first[idx])) {
        out[out.length] = first[idx];
      }
      idx += 1;
    }
    return out;
  });

  /**
   * Finds the set (i.e. no duplicates) of all elements in the first list not
   * contained in the second list. Duplication is determined according to the
   * value returned by applying the supplied predicate to two list elements.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Relation
   * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
   * @param {Function} pred A predicate used to test whether two items are equal.
   * @param {Array} list1 The first list.
   * @param {Array} list2 The second list.
   * @return {Array} The elements in `list1` that are not in `list2`.
   * @see R.difference, R.symmetricDifference, R.symmetricDifferenceWith
   * @example
   *
   *      const cmp = (x, y) => x.a === y.a;
   *      const l1 = [{a: 1}, {a: 2}, {a: 3}];
   *      const l2 = [{a: 3}, {a: 4}];
   *      R.differenceWith(cmp, l1, l2); //=> [{a: 1}, {a: 2}]
   */
  var differenceWith = /*#__PURE__*/_curry3(function differenceWith(pred, first, second) {
    var out = [];
    var idx = 0;
    var firstLen = first.length;
    while (idx < firstLen) {
      if (!_includesWith(pred, first[idx], second) && !_includesWith(pred, first[idx], out)) {
        out.push(first[idx]);
      }
      idx += 1;
    }
    return out;
  });

  /**
   * Returns a new object that does not contain a `prop` property.
   *
   * @func
   * @memberOf R
   * @since v0.10.0
   * @category Object
   * @sig String -> {k: v} -> {k: v}
   * @param {String} prop The name of the property to dissociate
   * @param {Object} obj The object to clone
   * @return {Object} A new object equivalent to the original but without the specified property
   * @see R.assoc, R.omit
   * @example
   *
   *      R.dissoc('b', {a: 1, b: 2, c: 3}); //=> {a: 1, c: 3}
   */
  var dissoc = /*#__PURE__*/_curry2(function dissoc(prop, obj) {
    var result = {};
    for (var p in obj) {
      result[p] = obj[p];
    }
    delete result[prop];
    return result;
  });

  /**
   * Removes the sub-list of `list` starting at index `start` and containing
   * `count` elements. _Note that this is not destructive_: it returns a copy of
   * the list with the changes.
   * <small>No lists have been harmed in the application of this function.</small>
   *
   * @func
   * @memberOf R
   * @since v0.2.2
   * @category List
   * @sig Number -> Number -> [a] -> [a]
   * @param {Number} start The position to start removing elements
   * @param {Number} count The number of elements to remove
   * @param {Array} list The list to remove from
   * @return {Array} A new Array with `count` elements from `start` removed.
   * @see R.without
   * @example
   *
   *      R.remove(2, 3, [1,2,3,4,5,6,7,8]); //=> [1,2,6,7,8]
   */
  var remove = /*#__PURE__*/_curry3(function remove(start, count, list) {
    var result = Array.prototype.slice.call(list, 0);
    result.splice(start, count);
    return result;
  });

  /**
   * Returns a new copy of the array with the element at the provided index
   * replaced with the given value.
   *
   * @func
   * @memberOf R
   * @since v0.14.0
   * @category List
   * @sig Number -> a -> [a] -> [a]
   * @param {Number} idx The index to update.
   * @param {*} x The value to exist at the given index of the returned array.
   * @param {Array|Arguments} list The source array-like object to be updated.
   * @return {Array} A copy of `list` with the value at index `idx` replaced with `x`.
   * @see R.adjust
   * @example
   *
   *      R.update(1, '_', ['a', 'b', 'c']);      //=> ['a', '_', 'c']
   *      R.update(-1, '_', ['a', 'b', 'c']);     //=> ['a', 'b', '_']
   * @symb R.update(-1, a, [b, c]) = [b, a]
   * @symb R.update(0, a, [b, c]) = [a, c]
   * @symb R.update(1, a, [b, c]) = [b, a]
   */
  var update = /*#__PURE__*/_curry3(function update(idx, x, list) {
    return adjust(idx, always(x), list);
  });

  /**
   * Makes a shallow clone of an object, omitting the property at the given path.
   * Note that this copies and flattens prototype properties onto the new object
   * as well. All non-primitive properties are copied by reference.
   *
   * @func
   * @memberOf R
   * @since v0.11.0
   * @category Object
   * @typedefn Idx = String | Int
   * @sig [Idx] -> {k: v} -> {k: v}
   * @param {Array} path The path to the value to omit
   * @param {Object} obj The object to clone
   * @return {Object} A new object without the property at path
   * @see R.assocPath
   * @example
   *
   *      R.dissocPath(['a', 'b', 'c'], {a: {b: {c: 42}}}); //=> {a: {b: {}}}
   */
  var dissocPath = /*#__PURE__*/_curry2(function dissocPath(path, obj) {
    switch (path.length) {
      case 0:
        return obj;
      case 1:
        return _isInteger(path[0]) && _isArray(obj) ? remove(path[0], 1, obj) : dissoc(path[0], obj);
      default:
        var head = path[0];
        var tail = Array.prototype.slice.call(path, 1);
        if (obj[head] == null) {
          return obj;
        } else if (_isInteger(head) && _isArray(obj)) {
          return update(head, dissocPath(tail, obj[head]), obj);
        } else {
          return assoc(head, dissocPath(tail, obj[head]), obj);
        }
    }
  });

  /**
   * Divides two numbers. Equivalent to `a / b`.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Math
   * @sig Number -> Number -> Number
   * @param {Number} a The first value.
   * @param {Number} b The second value.
   * @return {Number} The result of `a / b`.
   * @see R.multiply
   * @example
   *
   *      R.divide(71, 100); //=> 0.71
   *
   *      const half = R.divide(R.__, 2);
   *      half(42); //=> 21
   *
   *      const reciprocal = R.divide(1);
   *      reciprocal(4);   //=> 0.25
   */
  var divide = /*#__PURE__*/_curry2(function divide(a, b) {
    return a / b;
  });

  var XDrop = /*#__PURE__*/function () {
    function XDrop(n, xf) {
      this.xf = xf;
      this.n = n;
    }
    XDrop.prototype['@@transducer/init'] = _xfBase.init;
    XDrop.prototype['@@transducer/result'] = _xfBase.result;
    XDrop.prototype['@@transducer/step'] = function (result, input) {
      if (this.n > 0) {
        this.n -= 1;
        return result;
      }
      return this.xf['@@transducer/step'](result, input);
    };

    return XDrop;
  }();

  var _xdrop = /*#__PURE__*/_curry2(function _xdrop(n, xf) {
    return new XDrop(n, xf);
  });

  /**
   * Returns all but the first `n` elements of the given list, string, or
   * transducer/transformer (or object with a `drop` method).
   *
   * Dispatches to the `drop` method of the second argument, if present.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig Number -> [a] -> [a]
   * @sig Number -> String -> String
   * @param {Number} n
   * @param {*} list
   * @return {*} A copy of list without the first `n` elements
   * @see R.take, R.transduce, R.dropLast, R.dropWhile
   * @example
   *
   *      R.drop(1, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
   *      R.drop(2, ['foo', 'bar', 'baz']); //=> ['baz']
   *      R.drop(3, ['foo', 'bar', 'baz']); //=> []
   *      R.drop(4, ['foo', 'bar', 'baz']); //=> []
   *      R.drop(3, 'ramda');               //=> 'da'
   */
  var drop = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['drop'], _xdrop, function drop(n, xs) {
    return slice(Math.max(0, n), Infinity, xs);
  }));

  var XTake = /*#__PURE__*/function () {
    function XTake(n, xf) {
      this.xf = xf;
      this.n = n;
      this.i = 0;
    }
    XTake.prototype['@@transducer/init'] = _xfBase.init;
    XTake.prototype['@@transducer/result'] = _xfBase.result;
    XTake.prototype['@@transducer/step'] = function (result, input) {
      this.i += 1;
      var ret = this.n === 0 ? result : this.xf['@@transducer/step'](result, input);
      return this.n >= 0 && this.i >= this.n ? _reduced(ret) : ret;
    };

    return XTake;
  }();

  var _xtake = /*#__PURE__*/_curry2(function _xtake(n, xf) {
    return new XTake(n, xf);
  });

  /**
   * Returns the first `n` elements of the given list, string, or
   * transducer/transformer (or object with a `take` method).
   *
   * Dispatches to the `take` method of the second argument, if present.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig Number -> [a] -> [a]
   * @sig Number -> String -> String
   * @param {Number} n
   * @param {*} list
   * @return {*}
   * @see R.drop
   * @example
   *
   *      R.take(1, ['foo', 'bar', 'baz']); //=> ['foo']
   *      R.take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
   *      R.take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
   *      R.take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
   *      R.take(3, 'ramda');               //=> 'ram'
   *
   *      const personnel = [
   *        'Dave Brubeck',
   *        'Paul Desmond',
   *        'Eugene Wright',
   *        'Joe Morello',
   *        'Gerry Mulligan',
   *        'Bob Bates',
   *        'Joe Dodge',
   *        'Ron Crotty'
   *      ];
   *
   *      const takeFive = R.take(5);
   *      takeFive(personnel);
   *      //=> ['Dave Brubeck', 'Paul Desmond', 'Eugene Wright', 'Joe Morello', 'Gerry Mulligan']
   * @symb R.take(-1, [a, b]) = [a, b]
   * @symb R.take(0, [a, b]) = []
   * @symb R.take(1, [a, b]) = [a]
   * @symb R.take(2, [a, b]) = [a, b]
   */
  var take = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['take'], _xtake, function take(n, xs) {
    return slice(0, n < 0 ? Infinity : n, xs);
  }));

  function dropLast(n, xs) {
    return take(n < xs.length ? xs.length - n : 0, xs);
  }

  var XDropLast = /*#__PURE__*/function () {
    function XDropLast(n, xf) {
      this.xf = xf;
      this.pos = 0;
      this.full = false;
      this.acc = new Array(n);
    }
    XDropLast.prototype['@@transducer/init'] = _xfBase.init;
    XDropLast.prototype['@@transducer/result'] = function (result) {
      this.acc = null;
      return this.xf['@@transducer/result'](result);
    };
    XDropLast.prototype['@@transducer/step'] = function (result, input) {
      if (this.full) {
        result = this.xf['@@transducer/step'](result, this.acc[this.pos]);
      }
      this.store(input);
      return result;
    };
    XDropLast.prototype.store = function (input) {
      this.acc[this.pos] = input;
      this.pos += 1;
      if (this.pos === this.acc.length) {
        this.pos = 0;
        this.full = true;
      }
    };

    return XDropLast;
  }();

  var _xdropLast = /*#__PURE__*/_curry2(function _xdropLast(n, xf) {
    return new XDropLast(n, xf);
  });

  /**
   * Returns a list containing all but the last `n` elements of the given `list`.
   *
   * Acts as a transducer if a transformer is given in list position.
   *
   * @func
   * @memberOf R
   * @since v0.16.0
   * @category List
   * @sig Number -> [a] -> [a]
   * @sig Number -> String -> String
   * @param {Number} n The number of elements of `list` to skip.
   * @param {Array} list The list of elements to consider.
   * @return {Array} A copy of the list with only the first `list.length - n` elements
   * @see R.takeLast, R.drop, R.dropWhile, R.dropLastWhile
   * @example
   *
   *      R.dropLast(1, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
   *      R.dropLast(2, ['foo', 'bar', 'baz']); //=> ['foo']
   *      R.dropLast(3, ['foo', 'bar', 'baz']); //=> []
   *      R.dropLast(4, ['foo', 'bar', 'baz']); //=> []
   *      R.dropLast(3, 'ramda');               //=> 'ra'
   */
  var dropLast$1 = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable([], _xdropLast, dropLast));

  function dropLastWhile(pred, xs) {
    var idx = xs.length - 1;
    while (idx >= 0 && pred(xs[idx])) {
      idx -= 1;
    }
    return slice(0, idx + 1, xs);
  }

  var XDropLastWhile = /*#__PURE__*/function () {
    function XDropLastWhile(fn, xf) {
      this.f = fn;
      this.retained = [];
      this.xf = xf;
    }
    XDropLastWhile.prototype['@@transducer/init'] = _xfBase.init;
    XDropLastWhile.prototype['@@transducer/result'] = function (result) {
      this.retained = null;
      return this.xf['@@transducer/result'](result);
    };
    XDropLastWhile.prototype['@@transducer/step'] = function (result, input) {
      return this.f(input) ? this.retain(result, input) : this.flush(result, input);
    };
    XDropLastWhile.prototype.flush = function (result, input) {
      result = _reduce(this.xf['@@transducer/step'], result, this.retained);
      this.retained = [];
      return this.xf['@@transducer/step'](result, input);
    };
    XDropLastWhile.prototype.retain = function (result, input) {
      this.retained.push(input);
      return result;
    };

    return XDropLastWhile;
  }();

  var _xdropLastWhile = /*#__PURE__*/_curry2(function _xdropLastWhile(fn, xf) {
    return new XDropLastWhile(fn, xf);
  });

  /**
   * Returns a new list excluding all the tailing elements of a given list which
   * satisfy the supplied predicate function. It passes each value from the right
   * to the supplied predicate function, skipping elements until the predicate
   * function returns a `falsy` value. The predicate function is applied to one argument:
   * *(value)*.
   *
   * Acts as a transducer if a transformer is given in list position.
   *
   * @func
   * @memberOf R
   * @since v0.16.0
   * @category List
   * @sig (a -> Boolean) -> [a] -> [a]
   * @sig (a -> Boolean) -> String -> String
   * @param {Function} predicate The function to be called on each element
   * @param {Array} xs The collection to iterate over.
   * @return {Array} A new array without any trailing elements that return `falsy` values from the `predicate`.
   * @see R.takeLastWhile, R.addIndex, R.drop, R.dropWhile
   * @example
   *
   *      const lteThree = x => x <= 3;
   *
   *      R.dropLastWhile(lteThree, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3, 4]
   *
   *      R.dropLastWhile(x => x !== 'd' , 'Ramda'); //=> 'Ramd'
   */
  var dropLastWhile$1 = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable([], _xdropLastWhile, dropLastWhile));

  var XDropRepeatsWith = /*#__PURE__*/function () {
    function XDropRepeatsWith(pred, xf) {
      this.xf = xf;
      this.pred = pred;
      this.lastValue = undefined;
      this.seenFirstValue = false;
    }

    XDropRepeatsWith.prototype['@@transducer/init'] = _xfBase.init;
    XDropRepeatsWith.prototype['@@transducer/result'] = _xfBase.result;
    XDropRepeatsWith.prototype['@@transducer/step'] = function (result, input) {
      var sameAsLast = false;
      if (!this.seenFirstValue) {
        this.seenFirstValue = true;
      } else if (this.pred(this.lastValue, input)) {
        sameAsLast = true;
      }
      this.lastValue = input;
      return sameAsLast ? result : this.xf['@@transducer/step'](result, input);
    };

    return XDropRepeatsWith;
  }();

  var _xdropRepeatsWith = /*#__PURE__*/_curry2(function _xdropRepeatsWith(pred, xf) {
    return new XDropRepeatsWith(pred, xf);
  });

  /**
   * Returns the last element of the given list or string.
   *
   * @func
   * @memberOf R
   * @since v0.1.4
   * @category List
   * @sig [a] -> a | Undefined
   * @sig String -> String
   * @param {*} list
   * @return {*}
   * @see R.init, R.head, R.tail
   * @example
   *
   *      R.last(['fi', 'fo', 'fum']); //=> 'fum'
   *      R.last([]); //=> undefined
   *
   *      R.last('abc'); //=> 'c'
   *      R.last(''); //=> ''
   */
  var last = /*#__PURE__*/nth(-1);

  /**
   * Returns a new list without any consecutively repeating elements. Equality is
   * determined by applying the supplied predicate to each pair of consecutive elements. The
   * first element in a series of equal elements will be preserved.
   *
   * Acts as a transducer if a transformer is given in list position.
   *
   * @func
   * @memberOf R
   * @since v0.14.0
   * @category List
   * @sig ((a, a) -> Boolean) -> [a] -> [a]
   * @param {Function} pred A predicate used to test whether two items are equal.
   * @param {Array} list The array to consider.
   * @return {Array} `list` without repeating elements.
   * @see R.transduce
   * @example
   *
   *      const l = [1, -1, 1, 3, 4, -4, -4, -5, 5, 3, 3];
   *      R.dropRepeatsWith(R.eqBy(Math.abs), l); //=> [1, 3, 4, -5, 3]
   */
  var dropRepeatsWith = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable([], _xdropRepeatsWith, function dropRepeatsWith(pred, list) {
    var result = [];
    var idx = 1;
    var len = list.length;
    if (len !== 0) {
      result[0] = list[0];
      while (idx < len) {
        if (!pred(last(result), list[idx])) {
          result[result.length] = list[idx];
        }
        idx += 1;
      }
    }
    return result;
  }));

  /**
   * Returns a new list without any consecutively repeating elements.
   * [`R.equals`](#equals) is used to determine equality.
   *
   * Acts as a transducer if a transformer is given in list position.
   *
   * @func
   * @memberOf R
   * @since v0.14.0
   * @category List
   * @sig [a] -> [a]
   * @param {Array} list The array to consider.
   * @return {Array} `list` without repeating elements.
   * @see R.transduce
   * @example
   *
   *     R.dropRepeats([1, 1, 1, 2, 3, 4, 4, 2, 2]); //=> [1, 2, 3, 4, 2]
   */
  var dropRepeats = /*#__PURE__*/_curry1( /*#__PURE__*/_dispatchable([], /*#__PURE__*/_xdropRepeatsWith(equals), /*#__PURE__*/dropRepeatsWith(equals)));

  var XDropWhile = /*#__PURE__*/function () {
    function XDropWhile(f, xf) {
      this.xf = xf;
      this.f = f;
    }
    XDropWhile.prototype['@@transducer/init'] = _xfBase.init;
    XDropWhile.prototype['@@transducer/result'] = _xfBase.result;
    XDropWhile.prototype['@@transducer/step'] = function (result, input) {
      if (this.f) {
        if (this.f(input)) {
          return result;
        }
        this.f = null;
      }
      return this.xf['@@transducer/step'](result, input);
    };

    return XDropWhile;
  }();

  var _xdropWhile = /*#__PURE__*/_curry2(function _xdropWhile(f, xf) {
    return new XDropWhile(f, xf);
  });

  /**
   * Returns a new list excluding the leading elements of a given list which
   * satisfy the supplied predicate function. It passes each value to the supplied
   * predicate function, skipping elements while the predicate function returns
   * `true`. The predicate function is applied to one argument: *(value)*.
   *
   * Dispatches to the `dropWhile` method of the second argument, if present.
   *
   * Acts as a transducer if a transformer is given in list position.
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category List
   * @sig (a -> Boolean) -> [a] -> [a]
   * @sig (a -> Boolean) -> String -> String
   * @param {Function} fn The function called per iteration.
   * @param {Array} xs The collection to iterate over.
   * @return {Array} A new array.
   * @see R.takeWhile, R.transduce, R.addIndex
   * @example
   *
   *      const lteTwo = x => x <= 2;
   *
   *      R.dropWhile(lteTwo, [1, 2, 3, 4, 3, 2, 1]); //=> [3, 4, 3, 2, 1]
   *
   *      R.dropWhile(x => x !== 'd' , 'Ramda'); //=> 'da'
   */
  var dropWhile = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['dropWhile'], _xdropWhile, function dropWhile(pred, xs) {
    var idx = 0;
    var len = xs.length;
    while (idx < len && pred(xs[idx])) {
      idx += 1;
    }
    return slice(idx, Infinity, xs);
  }));

  /**
   * Returns `true` if one or both of its arguments are `true`. Returns `false`
   * if both arguments are `false`.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Logic
   * @sig a -> b -> a | b
   * @param {Any} a
   * @param {Any} b
   * @return {Any} the first argument if truthy, otherwise the second argument.
   * @see R.either
   * @example
   *
   *      R.or(true, true); //=> true
   *      R.or(true, false); //=> true
   *      R.or(false, true); //=> true
   *      R.or(false, false); //=> false
   */
  var or = /*#__PURE__*/_curry2(function or(a, b) {
    return a || b;
  });

  /**
   * A function wrapping calls to the two functions in an `||` operation,
   * returning the result of the first function if it is truth-y and the result
   * of the second function otherwise. Note that this is short-circuited,
   * meaning that the second function will not be invoked if the first returns a
   * truth-y value.
   *
   * In addition to functions, `R.either` also accepts any fantasy-land compatible
   * applicative functor.
   *
   * @func
   * @memberOf R
   * @since v0.12.0
   * @category Logic
   * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
   * @param {Function} f a predicate
   * @param {Function} g another predicate
   * @return {Function} a function that applies its arguments to `f` and `g` and `||`s their outputs together.
   * @see R.or
   * @example
   *
   *      const gt10 = x => x > 10;
   *      const even = x => x % 2 === 0;
   *      const f = R.either(gt10, even);
   *      f(101); //=> true
   *      f(8); //=> true
   *
   *      R.either(Maybe.Just(false), Maybe.Just(55)); // => Maybe.Just(55)
   *      R.either([false, false, 'a'], [11]) // => [11, 11, "a"]
   */
  var either = /*#__PURE__*/_curry2(function either(f, g) {
    return _isFunction(f) ? function _either() {
      return f.apply(this, arguments) || g.apply(this, arguments);
    } : lift(or)(f, g);
  });

  /**
   * Returns the empty value of its argument's type. Ramda defines the empty
   * value of Array (`[]`), Object (`{}`), String (`''`), and Arguments. Other
   * types are supported if they define `<Type>.empty`,
   * `<Type>.prototype.empty` or implement the
   * [FantasyLand Monoid spec](https://github.com/fantasyland/fantasy-land#monoid).
   *
   * Dispatches to the `empty` method of the first argument, if present.
   *
   * @func
   * @memberOf R
   * @since v0.3.0
   * @category Function
   * @sig a -> a
   * @param {*} x
   * @return {*}
   * @example
   *
   *      R.empty(Just(42));      //=> Nothing()
   *      R.empty([1, 2, 3]);     //=> []
   *      R.empty('unicorns');    //=> ''
   *      R.empty({x: 1, y: 2});  //=> {}
   */
  var empty = /*#__PURE__*/_curry1(function empty(x) {
    return x != null && typeof x['fantasy-land/empty'] === 'function' ? x['fantasy-land/empty']() : x != null && x.constructor != null && typeof x.constructor['fantasy-land/empty'] === 'function' ? x.constructor['fantasy-land/empty']() : x != null && typeof x.empty === 'function' ? x.empty() : x != null && x.constructor != null && typeof x.constructor.empty === 'function' ? x.constructor.empty() : _isArray(x) ? [] : _isString(x) ? '' : _isObject(x) ? {} : _isArguments(x) ? function () {
      return arguments;
    }() : void 0 // else
    ;
  });

  /**
   * Returns a new list containing the last `n` elements of the given list.
   * If `n > list.length`, returns a list of `list.length` elements.
   *
   * @func
   * @memberOf R
   * @since v0.16.0
   * @category List
   * @sig Number -> [a] -> [a]
   * @sig Number -> String -> String
   * @param {Number} n The number of elements to return.
   * @param {Array} xs The collection to consider.
   * @return {Array}
   * @see R.dropLast
   * @example
   *
   *      R.takeLast(1, ['foo', 'bar', 'baz']); //=> ['baz']
   *      R.takeLast(2, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
   *      R.takeLast(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
   *      R.takeLast(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
   *      R.takeLast(3, 'ramda');               //=> 'mda'
   */
  var takeLast = /*#__PURE__*/_curry2(function takeLast(n, xs) {
    return drop(n >= 0 ? xs.length - n : 0, xs);
  });

  /**
   * Checks if a list ends with the provided sublist.
   *
   * Similarly, checks if a string ends with the provided substring.
   *
   * @func
   * @memberOf R
   * @since v0.24.0
   * @category List
   * @sig [a] -> [a] -> Boolean
   * @sig String -> String -> Boolean
   * @param {*} suffix
   * @param {*} list
   * @return {Boolean}
   * @see R.startsWith
   * @example
   *
   *      R.endsWith('c', 'abc')                //=> true
   *      R.endsWith('b', 'abc')                //=> false
   *      R.endsWith(['c'], ['a', 'b', 'c'])    //=> true
   *      R.endsWith(['b'], ['a', 'b', 'c'])    //=> false
   */
  var endsWith = /*#__PURE__*/_curry2(function (suffix, list) {
    return equals(takeLast(suffix.length, list), suffix);
  });

  /**
   * Takes a function and two values in its domain and returns `true` if the
   * values map to the same value in the codomain; `false` otherwise.
   *
   * @func
   * @memberOf R
   * @since v0.18.0
   * @category Relation
   * @sig (a -> b) -> a -> a -> Boolean
   * @param {Function} f
   * @param {*} x
   * @param {*} y
   * @return {Boolean}
   * @example
   *
   *      R.eqBy(Math.abs, 5, -5); //=> true
   */
  var eqBy = /*#__PURE__*/_curry3(function eqBy(f, x, y) {
    return equals(f(x), f(y));
  });

  /**
   * Reports whether two objects have the same value, in [`R.equals`](#equals)
   * terms, for the specified property. Useful as a curried predicate.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Object
   * @sig k -> {k: v} -> {k: v} -> Boolean
   * @param {String} prop The name of the property to compare
   * @param {Object} obj1
   * @param {Object} obj2
   * @return {Boolean}
   *
   * @example
   *
   *      const o1 = { a: 1, b: 2, c: 3, d: 4 };
   *      const o2 = { a: 10, b: 20, c: 3, d: 40 };
   *      R.eqProps('a', o1, o2); //=> false
   *      R.eqProps('c', o1, o2); //=> true
   */
  var eqProps = /*#__PURE__*/_curry3(function eqProps(prop, obj1, obj2) {
    return equals(obj1[prop], obj2[prop]);
  });

  /**
   * Creates a new object by recursively evolving a shallow copy of `object`,
   * according to the `transformation` functions. All non-primitive properties
   * are copied by reference.
   *
   * A `transformation` function will not be invoked if its corresponding key
   * does not exist in the evolved object.
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category Object
   * @sig {k: (v -> v)} -> {k: v} -> {k: v}
   * @param {Object} transformations The object specifying transformation functions to apply
   *        to the object.
   * @param {Object} object The object to be transformed.
   * @return {Object} The transformed object.
   * @example
   *
   *      const tomato = {firstName: '  Tomato ', data: {elapsed: 100, remaining: 1400}, id:123};
   *      const transformations = {
   *        firstName: R.trim,
   *        lastName: R.trim, // Will not get invoked.
   *        data: {elapsed: R.add(1), remaining: R.add(-1)}
   *      };
   *      R.evolve(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}
   */
  var evolve = /*#__PURE__*/_curry2(function evolve(transformations, object) {
    var result = object instanceof Array ? [] : {};
    var transformation, key, type;
    for (key in object) {
      transformation = transformations[key];
      type = typeof transformation;
      result[key] = type === 'function' ? transformation(object[key]) : transformation && type === 'object' ? evolve(transformation, object[key]) : object[key];
    }
    return result;
  });

  var XFind = /*#__PURE__*/function () {
    function XFind(f, xf) {
      this.xf = xf;
      this.f = f;
      this.found = false;
    }
    XFind.prototype['@@transducer/init'] = _xfBase.init;
    XFind.prototype['@@transducer/result'] = function (result) {
      if (!this.found) {
        result = this.xf['@@transducer/step'](result, void 0);
      }
      return this.xf['@@transducer/result'](result);
    };
    XFind.prototype['@@transducer/step'] = function (result, input) {
      if (this.f(input)) {
        this.found = true;
        result = _reduced(this.xf['@@transducer/step'](result, input));
      }
      return result;
    };

    return XFind;
  }();

  var _xfind = /*#__PURE__*/_curry2(function _xfind(f, xf) {
    return new XFind(f, xf);
  });

  /**
   * Returns the first element of the list which matches the predicate, or
   * `undefined` if no element matches.
   *
   * Dispatches to the `find` method of the second argument, if present.
   *
   * Acts as a transducer if a transformer is given in list position.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig (a -> Boolean) -> [a] -> a | undefined
   * @param {Function} fn The predicate function used to determine if the element is the
   *        desired one.
   * @param {Array} list The array to consider.
   * @return {Object} The element found, or `undefined`.
   * @see R.transduce
   * @example
   *
   *      const xs = [{a: 1}, {a: 2}, {a: 3}];
   *      R.find(R.propEq('a', 2))(xs); //=> {a: 2}
   *      R.find(R.propEq('a', 4))(xs); //=> undefined
   */
  var find = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['find'], _xfind, function find(fn, list) {
    var idx = 0;
    var len = list.length;
    while (idx < len) {
      if (fn(list[idx])) {
        return list[idx];
      }
      idx += 1;
    }
  }));

  var XFindIndex = /*#__PURE__*/function () {
    function XFindIndex(f, xf) {
      this.xf = xf;
      this.f = f;
      this.idx = -1;
      this.found = false;
    }
    XFindIndex.prototype['@@transducer/init'] = _xfBase.init;
    XFindIndex.prototype['@@transducer/result'] = function (result) {
      if (!this.found) {
        result = this.xf['@@transducer/step'](result, -1);
      }
      return this.xf['@@transducer/result'](result);
    };
    XFindIndex.prototype['@@transducer/step'] = function (result, input) {
      this.idx += 1;
      if (this.f(input)) {
        this.found = true;
        result = _reduced(this.xf['@@transducer/step'](result, this.idx));
      }
      return result;
    };

    return XFindIndex;
  }();

  var _xfindIndex = /*#__PURE__*/_curry2(function _xfindIndex(f, xf) {
    return new XFindIndex(f, xf);
  });

  /**
   * Returns the index of the first element of the list which matches the
   * predicate, or `-1` if no element matches.
   *
   * Acts as a transducer if a transformer is given in list position.
   *
   * @func
   * @memberOf R
   * @since v0.1.1
   * @category List
   * @sig (a -> Boolean) -> [a] -> Number
   * @param {Function} fn The predicate function used to determine if the element is the
   * desired one.
   * @param {Array} list The array to consider.
   * @return {Number} The index of the element found, or `-1`.
   * @see R.transduce
   * @example
   *
   *      const xs = [{a: 1}, {a: 2}, {a: 3}];
   *      R.findIndex(R.propEq('a', 2))(xs); //=> 1
   *      R.findIndex(R.propEq('a', 4))(xs); //=> -1
   */
  var findIndex = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable([], _xfindIndex, function findIndex(fn, list) {
    var idx = 0;
    var len = list.length;
    while (idx < len) {
      if (fn(list[idx])) {
        return idx;
      }
      idx += 1;
    }
    return -1;
  }));

  var XFindLast = /*#__PURE__*/function () {
    function XFindLast(f, xf) {
      this.xf = xf;
      this.f = f;
    }
    XFindLast.prototype['@@transducer/init'] = _xfBase.init;
    XFindLast.prototype['@@transducer/result'] = function (result) {
      return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.last));
    };
    XFindLast.prototype['@@transducer/step'] = function (result, input) {
      if (this.f(input)) {
        this.last = input;
      }
      return result;
    };

    return XFindLast;
  }();

  var _xfindLast = /*#__PURE__*/_curry2(function _xfindLast(f, xf) {
    return new XFindLast(f, xf);
  });

  /**
   * Returns the last element of the list which matches the predicate, or
   * `undefined` if no element matches.
   *
   * Acts as a transducer if a transformer is given in list position.
   *
   * @func
   * @memberOf R
   * @since v0.1.1
   * @category List
   * @sig (a -> Boolean) -> [a] -> a | undefined
   * @param {Function} fn The predicate function used to determine if the element is the
   * desired one.
   * @param {Array} list The array to consider.
   * @return {Object} The element found, or `undefined`.
   * @see R.transduce
   * @example
   *
   *      const xs = [{a: 1, b: 0}, {a:1, b: 1}];
   *      R.findLast(R.propEq('a', 1))(xs); //=> {a: 1, b: 1}
   *      R.findLast(R.propEq('a', 4))(xs); //=> undefined
   */
  var findLast = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable([], _xfindLast, function findLast(fn, list) {
    var idx = list.length - 1;
    while (idx >= 0) {
      if (fn(list[idx])) {
        return list[idx];
      }
      idx -= 1;
    }
  }));

  var XFindLastIndex = /*#__PURE__*/function () {
    function XFindLastIndex(f, xf) {
      this.xf = xf;
      this.f = f;
      this.idx = -1;
      this.lastIdx = -1;
    }
    XFindLastIndex.prototype['@@transducer/init'] = _xfBase.init;
    XFindLastIndex.prototype['@@transducer/result'] = function (result) {
      return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.lastIdx));
    };
    XFindLastIndex.prototype['@@transducer/step'] = function (result, input) {
      this.idx += 1;
      if (this.f(input)) {
        this.lastIdx = this.idx;
      }
      return result;
    };

    return XFindLastIndex;
  }();

  var _xfindLastIndex = /*#__PURE__*/_curry2(function _xfindLastIndex(f, xf) {
    return new XFindLastIndex(f, xf);
  });

  /**
   * Returns the index of the last element of the list which matches the
   * predicate, or `-1` if no element matches.
   *
   * Acts as a transducer if a transformer is given in list position.
   *
   * @func
   * @memberOf R
   * @since v0.1.1
   * @category List
   * @sig (a -> Boolean) -> [a] -> Number
   * @param {Function} fn The predicate function used to determine if the element is the
   * desired one.
   * @param {Array} list The array to consider.
   * @return {Number} The index of the element found, or `-1`.
   * @see R.transduce
   * @example
   *
   *      const xs = [{a: 1, b: 0}, {a:1, b: 1}];
   *      R.findLastIndex(R.propEq('a', 1))(xs); //=> 1
   *      R.findLastIndex(R.propEq('a', 4))(xs); //=> -1
   */
  var findLastIndex = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable([], _xfindLastIndex, function findLastIndex(fn, list) {
    var idx = list.length - 1;
    while (idx >= 0) {
      if (fn(list[idx])) {
        return idx;
      }
      idx -= 1;
    }
    return -1;
  }));

  /**
   * Returns a new list by pulling every item out of it (and all its sub-arrays)
   * and putting them in a new array, depth-first.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig [a] -> [b]
   * @param {Array} list The array to consider.
   * @return {Array} The flattened list.
   * @see R.unnest
   * @example
   *
   *      R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
   *      //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
   */
  var flatten = /*#__PURE__*/_curry1( /*#__PURE__*/_makeFlat(true));

  /**
   * Returns a new function much like the supplied one, except that the first two
   * arguments' order is reversed.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Function
   * @sig ((a, b, c, ...) -> z) -> (b -> a -> c -> ... -> z)
   * @param {Function} fn The function to invoke with its first two parameters reversed.
   * @return {*} The result of invoking `fn` with its first two parameters' order reversed.
   * @example
   *
   *      const mergeThree = (a, b, c) => [].concat(a, b, c);
   *
   *      mergeThree(1, 2, 3); //=> [1, 2, 3]
   *
   *      R.flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]
   * @symb R.flip(f)(a, b, c) = f(b, a, c)
   */
  var flip = /*#__PURE__*/_curry1(function flip(fn) {
    return curryN(fn.length, function (a, b) {
      var args = Array.prototype.slice.call(arguments, 0);
      args[0] = b;
      args[1] = a;
      return fn.apply(this, args);
    });
  });

  /**
   * Iterate over an input `list`, calling a provided function `fn` for each
   * element in the list.
   *
   * `fn` receives one argument: *(value)*.
   *
   * Note: `R.forEach` does not skip deleted or unassigned indices (sparse
   * arrays), unlike the native `Array.prototype.forEach` method. For more
   * details on this behavior, see:
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Description
   *
   * Also note that, unlike `Array.prototype.forEach`, Ramda's `forEach` returns
   * the original array. In some libraries this function is named `each`.
   *
   * Dispatches to the `forEach` method of the second argument, if present.
   *
   * @func
   * @memberOf R
   * @since v0.1.1
   * @category List
   * @sig (a -> *) -> [a] -> [a]
   * @param {Function} fn The function to invoke. Receives one argument, `value`.
   * @param {Array} list The list to iterate over.
   * @return {Array} The original list.
   * @see R.addIndex
   * @example
   *
   *      const printXPlusFive = x => console.log(x + 5);
   *      R.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]
   *      // logs 6
   *      // logs 7
   *      // logs 8
   * @symb R.forEach(f, [a, b, c]) = [a, b, c]
   */
  var forEach = /*#__PURE__*/_curry2( /*#__PURE__*/_checkForMethod('forEach', function forEach(fn, list) {
    var len = list.length;
    var idx = 0;
    while (idx < len) {
      fn(list[idx]);
      idx += 1;
    }
    return list;
  }));

  /**
   * Iterate over an input `object`, calling a provided function `fn` for each
   * key and value in the object.
   *
   * `fn` receives three argument: *(value, key, obj)*.
   *
   * @func
   * @memberOf R
   * @since v0.23.0
   * @category Object
   * @sig ((a, String, StrMap a) -> Any) -> StrMap a -> StrMap a
   * @param {Function} fn The function to invoke. Receives three argument, `value`, `key`, `obj`.
   * @param {Object} obj The object to iterate over.
   * @return {Object} The original object.
   * @example
   *
   *      const printKeyConcatValue = (value, key) => console.log(key + ':' + value);
   *      R.forEachObjIndexed(printKeyConcatValue, {x: 1, y: 2}); //=> {x: 1, y: 2}
   *      // logs x:1
   *      // logs y:2
   * @symb R.forEachObjIndexed(f, {x: a, y: b}) = {x: a, y: b}
   */
  var forEachObjIndexed = /*#__PURE__*/_curry2(function forEachObjIndexed(fn, obj) {
    var keyList = keys(obj);
    var idx = 0;
    while (idx < keyList.length) {
      var key = keyList[idx];
      fn(obj[key], key, obj);
      idx += 1;
    }
    return obj;
  });

  /**
   * Creates a new object from a list key-value pairs. If a key appears in
   * multiple pairs, the rightmost pair is included in the object.
   *
   * @func
   * @memberOf R
   * @since v0.3.0
   * @category List
   * @sig [[k,v]] -> {k: v}
   * @param {Array} pairs An array of two-element arrays that will be the keys and values of the output object.
   * @return {Object} The object made by pairing up `keys` and `values`.
   * @see R.toPairs, R.pair
   * @example
   *
   *      R.fromPairs([['a', 1], ['b', 2], ['c', 3]]); //=> {a: 1, b: 2, c: 3}
   */
  var fromPairs = /*#__PURE__*/_curry1(function fromPairs(pairs) {
    var result = {};
    var idx = 0;
    while (idx < pairs.length) {
      result[pairs[idx][0]] = pairs[idx][1];
      idx += 1;
    }
    return result;
  });

  /**
   * Splits a list into sub-lists stored in an object, based on the result of
   * calling a String-returning function on each element, and grouping the
   * results according to values returned.
   *
   * Dispatches to the `groupBy` method of the second argument, if present.
   *
   * Acts as a transducer if a transformer is given in list position.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig (a -> String) -> [a] -> {String: [a]}
   * @param {Function} fn Function :: a -> String
   * @param {Array} list The array to group
   * @return {Object} An object with the output of `fn` for keys, mapped to arrays of elements
   *         that produced that key when passed to `fn`.
   * @see R.reduceBy, R.transduce
   * @example
   *
   *      const byGrade = R.groupBy(function(student) {
   *        const score = student.score;
   *        return score < 65 ? 'F' :
   *               score < 70 ? 'D' :
   *               score < 80 ? 'C' :
   *               score < 90 ? 'B' : 'A';
   *      });
   *      const students = [{name: 'Abby', score: 84},
   *                      {name: 'Eddy', score: 58},
   *                      // ...
   *                      {name: 'Jack', score: 69}];
   *      byGrade(students);
   *      // {
   *      //   'A': [{name: 'Dianne', score: 99}],
   *      //   'B': [{name: 'Abby', score: 84}]
   *      //   // ...,
   *      //   'F': [{name: 'Eddy', score: 58}]
   *      // }
   */
  var groupBy = /*#__PURE__*/_curry2( /*#__PURE__*/_checkForMethod('groupBy', /*#__PURE__*/reduceBy(function (acc, item) {
    if (acc == null) {
      acc = [];
    }
    acc.push(item);
    return acc;
  }, null)));

  /**
   * Takes a list and returns a list of lists where each sublist's elements are
   * all satisfied pairwise comparison according to the provided function.
   * Only adjacent elements are passed to the comparison function.
   *
   * @func
   * @memberOf R
   * @since v0.21.0
   * @category List
   * @sig ((a, a) → Boolean) → [a] → [[a]]
   * @param {Function} fn Function for determining whether two given (adjacent)
   *        elements should be in the same group
   * @param {Array} list The array to group. Also accepts a string, which will be
   *        treated as a list of characters.
   * @return {List} A list that contains sublists of elements,
   *         whose concatenations are equal to the original list.
   * @example
   *
   * R.groupWith(R.equals, [0, 1, 1, 2, 3, 5, 8, 13, 21])
   * //=> [[0], [1, 1], [2], [3], [5], [8], [13], [21]]
   *
   * R.groupWith((a, b) => a + 1 === b, [0, 1, 1, 2, 3, 5, 8, 13, 21])
   * //=> [[0, 1], [1, 2, 3], [5], [8], [13], [21]]
   *
   * R.groupWith((a, b) => a % 2 === b % 2, [0, 1, 1, 2, 3, 5, 8, 13, 21])
   * //=> [[0], [1, 1], [2], [3, 5], [8], [13, 21]]
   *
   * R.groupWith(R.eqBy(isVowel), 'aestiou')
   * //=> ['ae', 'st', 'iou']
   */
  var groupWith = /*#__PURE__*/_curry2(function (fn, list) {
    var res = [];
    var idx = 0;
    var len = list.length;
    while (idx < len) {
      var nextidx = idx + 1;
      while (nextidx < len && fn(list[nextidx - 1], list[nextidx])) {
        nextidx += 1;
      }
      res.push(list.slice(idx, nextidx));
      idx = nextidx;
    }
    return res;
  });

  /**
   * Returns `true` if the first argument is greater than the second; `false`
   * otherwise.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Relation
   * @sig Ord a => a -> a -> Boolean
   * @param {*} a
   * @param {*} b
   * @return {Boolean}
   * @see R.lt
   * @example
   *
   *      R.gt(2, 1); //=> true
   *      R.gt(2, 2); //=> false
   *      R.gt(2, 3); //=> false
   *      R.gt('a', 'z'); //=> false
   *      R.gt('z', 'a'); //=> true
   */
  var gt = /*#__PURE__*/_curry2(function gt(a, b) {
    return a > b;
  });

  /**
   * Returns `true` if the first argument is greater than or equal to the second;
   * `false` otherwise.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Relation
   * @sig Ord a => a -> a -> Boolean
   * @param {Number} a
   * @param {Number} b
   * @return {Boolean}
   * @see R.lte
   * @example
   *
   *      R.gte(2, 1); //=> true
   *      R.gte(2, 2); //=> true
   *      R.gte(2, 3); //=> false
   *      R.gte('a', 'z'); //=> false
   *      R.gte('z', 'a'); //=> true
   */
  var gte = /*#__PURE__*/_curry2(function gte(a, b) {
    return a >= b;
  });

  /**
   * Returns whether or not a path exists in an object. Only the object's
   * own properties are checked.
   *
   * @func
   * @memberOf R
   * @since v0.26.0
   * @category Object
   * @typedefn Idx = String | Int
   * @sig [Idx] -> {a} -> Boolean
   * @param {Array} path The path to use.
   * @param {Object} obj The object to check the path in.
   * @return {Boolean} Whether the path exists.
   * @see R.has
   * @example
   *
   *      R.hasPath(['a', 'b'], {a: {b: 2}});         // => true
   *      R.hasPath(['a', 'b'], {a: {b: undefined}}); // => true
   *      R.hasPath(['a', 'b'], {a: {c: 2}});         // => false
   *      R.hasPath(['a', 'b'], {});                  // => false
   */
  var hasPath = /*#__PURE__*/_curry2(function hasPath(_path, obj) {
    if (_path.length === 0) {
      return false;
    }
    var val = obj;
    var idx = 0;
    while (idx < _path.length) {
      if (_has(_path[idx], val)) {
        val = val[_path[idx]];
        idx += 1;
      } else {
        return false;
      }
    }
    return true;
  });

  /**
   * Returns whether or not an object has an own property with the specified name
   *
   * @func
   * @memberOf R
   * @since v0.7.0
   * @category Object
   * @sig s -> {s: x} -> Boolean
   * @param {String} prop The name of the property to check for.
   * @param {Object} obj The object to query.
   * @return {Boolean} Whether the property exists.
   * @example
   *
   *      const hasName = R.has('name');
   *      hasName({name: 'alice'});   //=> true
   *      hasName({name: 'bob'});     //=> true
   *      hasName({});                //=> false
   *
   *      const point = {x: 0, y: 0};
   *      const pointHas = R.has(R.__, point);
   *      pointHas('x');  //=> true
   *      pointHas('y');  //=> true
   *      pointHas('z');  //=> false
   */
  var has = /*#__PURE__*/_curry2(function has(prop, obj) {
    return hasPath([prop], obj);
  });

  /**
   * Returns whether or not an object or its prototype chain has a property with
   * the specified name
   *
   * @func
   * @memberOf R
   * @since v0.7.0
   * @category Object
   * @sig s -> {s: x} -> Boolean
   * @param {String} prop The name of the property to check for.
   * @param {Object} obj The object to query.
   * @return {Boolean} Whether the property exists.
   * @example
   *
   *      function Rectangle(width, height) {
   *        this.width = width;
   *        this.height = height;
   *      }
   *      Rectangle.prototype.area = function() {
   *        return this.width * this.height;
   *      };
   *
   *      const square = new Rectangle(2, 2);
   *      R.hasIn('width', square);  //=> true
   *      R.hasIn('area', square);  //=> true
   */
  var hasIn = /*#__PURE__*/_curry2(function hasIn(prop, obj) {
    return prop in obj;
  });

  /**
   * Returns true if its arguments are identical, false otherwise. Values are
   * identical if they reference the same memory. `NaN` is identical to `NaN`;
   * `0` and `-0` are not identical.
   *
   * Note this is merely a curried version of ES6 `Object.is`.
   *
   * @func
   * @memberOf R
   * @since v0.15.0
   * @category Relation
   * @sig a -> a -> Boolean
   * @param {*} a
   * @param {*} b
   * @return {Boolean}
   * @example
   *
   *      const o = {};
   *      R.identical(o, o); //=> true
   *      R.identical(1, 1); //=> true
   *      R.identical(1, '1'); //=> false
   *      R.identical([], []); //=> false
   *      R.identical(0, -0); //=> false
   *      R.identical(NaN, NaN); //=> true
   */
  var identical = /*#__PURE__*/_curry2(_objectIs$1);

  /**
   * Creates a function that will process either the `onTrue` or the `onFalse`
   * function depending upon the result of the `condition` predicate.
   *
   * @func
   * @memberOf R
   * @since v0.8.0
   * @category Logic
   * @sig (*... -> Boolean) -> (*... -> *) -> (*... -> *) -> (*... -> *)
   * @param {Function} condition A predicate function
   * @param {Function} onTrue A function to invoke when the `condition` evaluates to a truthy value.
   * @param {Function} onFalse A function to invoke when the `condition` evaluates to a falsy value.
   * @return {Function} A new function that will process either the `onTrue` or the `onFalse`
   *                    function depending upon the result of the `condition` predicate.
   * @see R.unless, R.when, R.cond
   * @example
   *
   *      const incCount = R.ifElse(
   *        R.has('count'),
   *        R.over(R.lensProp('count'), R.inc),
   *        R.assoc('count', 1)
   *      );
   *      incCount({});           //=> { count: 1 }
   *      incCount({ count: 1 }); //=> { count: 2 }
   */
  var ifElse = /*#__PURE__*/_curry3(function ifElse(condition, onTrue, onFalse) {
    return curryN(Math.max(condition.length, onTrue.length, onFalse.length), function _ifElse() {
      return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);
    });
  });

  /**
   * Increments its argument.
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category Math
   * @sig Number -> Number
   * @param {Number} n
   * @return {Number} n + 1
   * @see R.dec
   * @example
   *
   *      R.inc(42); //=> 43
   */
  var inc = /*#__PURE__*/add(1);

  /**
   * Returns `true` if the specified value is equal, in [`R.equals`](#equals)
   * terms, to at least one element of the given list; `false` otherwise.
   * Works also with strings.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig a -> [a] -> Boolean
   * @param {Object} a The item to compare against.
   * @param {Array} list The array to consider.
   * @return {Boolean} `true` if an equivalent item is in the list, `false` otherwise.
   * @see R.any
   * @example
   *
   *      R.includes(3, [1, 2, 3]); //=> true
   *      R.includes(4, [1, 2, 3]); //=> false
   *      R.includes({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true
   *      R.includes([42], [[42]]); //=> true
   *      R.includes('ba', 'banana'); //=>true
   */
  var includes = /*#__PURE__*/_curry2(_includes);

  /**
   * Given a function that generates a key, turns a list of objects into an
   * object indexing the objects by the given key. Note that if multiple
   * objects generate the same value for the indexing key only the last value
   * will be included in the generated object.
   *
   * Acts as a transducer if a transformer is given in list position.
   *
   * @func
   * @memberOf R
   * @since v0.19.0
   * @category List
   * @sig (a -> String) -> [{k: v}] -> {k: {k: v}}
   * @param {Function} fn Function :: a -> String
   * @param {Array} array The array of objects to index
   * @return {Object} An object indexing each array element by the given property.
   * @example
   *
   *      const list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
   *      R.indexBy(R.prop('id'), list);
   *      //=> {abc: {id: 'abc', title: 'B'}, xyz: {id: 'xyz', title: 'A'}}
   */
  var indexBy = /*#__PURE__*/reduceBy(function (acc, elem) {
    return elem;
  }, null);

  /**
   * Returns the position of the first occurrence of an item in an array, or -1
   * if the item is not included in the array. [`R.equals`](#equals) is used to
   * determine equality.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig a -> [a] -> Number
   * @param {*} target The item to find.
   * @param {Array} xs The array to search in.
   * @return {Number} the index of the target, or -1 if the target is not found.
   * @see R.lastIndexOf
   * @example
   *
   *      R.indexOf(3, [1,2,3,4]); //=> 2
   *      R.indexOf(10, [1,2,3,4]); //=> -1
   */
  var indexOf = /*#__PURE__*/_curry2(function indexOf(target, xs) {
    return typeof xs.indexOf === 'function' && !_isArray(xs) ? xs.indexOf(target) : _indexOf(xs, target, 0);
  });

  /**
   * Returns all but the last element of the given list or string.
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category List
   * @sig [a] -> [a]
   * @sig String -> String
   * @param {*} list
   * @return {*}
   * @see R.last, R.head, R.tail
   * @example
   *
   *      R.init([1, 2, 3]);  //=> [1, 2]
   *      R.init([1, 2]);     //=> [1]
   *      R.init([1]);        //=> []
   *      R.init([]);         //=> []
   *
   *      R.init('abc');  //=> 'ab'
   *      R.init('ab');   //=> 'a'
   *      R.init('a');    //=> ''
   *      R.init('');     //=> ''
   */
  var init = /*#__PURE__*/slice(0, -1);

  /**
   * Takes a predicate `pred`, a list `xs`, and a list `ys`, and returns a list
   * `xs'` comprising each of the elements of `xs` which is equal to one or more
   * elements of `ys` according to `pred`.
   *
   * `pred` must be a binary function expecting an element from each list.
   *
   * `xs`, `ys`, and `xs'` are treated as sets, semantically, so ordering should
   * not be significant, but since `xs'` is ordered the implementation guarantees
   * that its values are in the same order as they appear in `xs`. Duplicates are
   * not removed, so `xs'` may contain duplicates if `xs` contains duplicates.
   *
   * @func
   * @memberOf R
   * @since v0.24.0
   * @category Relation
   * @sig ((a, b) -> Boolean) -> [a] -> [b] -> [a]
   * @param {Function} pred
   * @param {Array} xs
   * @param {Array} ys
   * @return {Array}
   * @see R.intersection
   * @example
   *
   *      R.innerJoin(
   *        (record, id) => record.id === id,
   *        [{id: 824, name: 'Richie Furay'},
   *         {id: 956, name: 'Dewey Martin'},
   *         {id: 313, name: 'Bruce Palmer'},
   *         {id: 456, name: 'Stephen Stills'},
   *         {id: 177, name: 'Neil Young'}],
   *        [177, 456, 999]
   *      );
   *      //=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
   */
  var innerJoin = /*#__PURE__*/_curry3(function innerJoin(pred, xs, ys) {
    return _filter(function (x) {
      return _includesWith(pred, x, ys);
    }, xs);
  });

  /**
   * Inserts the supplied element into the list, at the specified `index`. _Note that

   * this is not destructive_: it returns a copy of the list with the changes.
   * <small>No lists have been harmed in the application of this function.</small>
   *
   * @func
   * @memberOf R
   * @since v0.2.2
   * @category List
   * @sig Number -> a -> [a] -> [a]
   * @param {Number} index The position to insert the element
   * @param {*} elt The element to insert into the Array
   * @param {Array} list The list to insert into
   * @return {Array} A new Array with `elt` inserted at `index`.
   * @example
   *
   *      R.insert(2, 'x', [1,2,3,4]); //=> [1,2,'x',3,4]
   */
  var insert = /*#__PURE__*/_curry3(function insert(idx, elt, list) {
    idx = idx < list.length && idx >= 0 ? idx : list.length;
    var result = Array.prototype.slice.call(list, 0);
    result.splice(idx, 0, elt);
    return result;
  });

  /**
   * Inserts the sub-list into the list, at the specified `index`. _Note that this is not
   * destructive_: it returns a copy of the list with the changes.
   * <small>No lists have been harmed in the application of this function.</small>
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category List
   * @sig Number -> [a] -> [a] -> [a]
   * @param {Number} index The position to insert the sub-list
   * @param {Array} elts The sub-list to insert into the Array
   * @param {Array} list The list to insert the sub-list into
   * @return {Array} A new Array with `elts` inserted starting at `index`.
   * @example
   *
   *      R.insertAll(2, ['x','y','z'], [1,2,3,4]); //=> [1,2,'x','y','z',3,4]
   */
  var insertAll = /*#__PURE__*/_curry3(function insertAll(idx, elts, list) {
    idx = idx < list.length && idx >= 0 ? idx : list.length;
    return [].concat(Array.prototype.slice.call(list, 0, idx), elts, Array.prototype.slice.call(list, idx));
  });

  /**
   * Returns a new list containing only one copy of each element in the original
   * list, based upon the value returned by applying the supplied function to
   * each list element. Prefers the first item if the supplied function produces
   * the same value on two items. [`R.equals`](#equals) is used for comparison.
   *
   * @func
   * @memberOf R
   * @since v0.16.0
   * @category List
   * @sig (a -> b) -> [a] -> [a]
   * @param {Function} fn A function used to produce a value to use during comparisons.
   * @param {Array} list The array to consider.
   * @return {Array} The list of unique items.
   * @example
   *
   *      R.uniqBy(Math.abs, [-1, -5, 2, 10, 1, 2]); //=> [-1, -5, 2, 10]
   */
  var uniqBy = /*#__PURE__*/_curry2(function uniqBy(fn, list) {
    var set = new _Set();
    var result = [];
    var idx = 0;
    var appliedItem, item;

    while (idx < list.length) {
      item = list[idx];
      appliedItem = fn(item);
      if (set.add(appliedItem)) {
        result.push(item);
      }
      idx += 1;
    }
    return result;
  });

  /**
   * Returns a new list containing only one copy of each element in the original
   * list. [`R.equals`](#equals) is used to determine equality.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig [a] -> [a]
   * @param {Array} list The array to consider.
   * @return {Array} The list of unique items.
   * @example
   *
   *      R.uniq([1, 1, 2, 1]); //=> [1, 2]
   *      R.uniq([1, '1']);     //=> [1, '1']
   *      R.uniq([[42], [42]]); //=> [[42]]
   */
  var uniq = /*#__PURE__*/uniqBy(identity);

  /**
   * Combines two lists into a set (i.e. no duplicates) composed of those
   * elements common to both lists.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Relation
   * @sig [*] -> [*] -> [*]
   * @param {Array} list1 The first list.
   * @param {Array} list2 The second list.
   * @return {Array} The list of elements found in both `list1` and `list2`.
   * @see R.innerJoin
   * @example
   *
   *      R.intersection([1,2,3,4], [7,6,5,4,3]); //=> [4, 3]
   */
  var intersection = /*#__PURE__*/_curry2(function intersection(list1, list2) {
    var lookupList, filteredList;
    if (list1.length > list2.length) {
      lookupList = list1;
      filteredList = list2;
    } else {
      lookupList = list2;
      filteredList = list1;
    }
    return uniq(_filter(flip(_includes)(lookupList), filteredList));
  });

  /**
   * Creates a new list with the separator interposed between elements.
   *
   * Dispatches to the `intersperse` method of the second argument, if present.
   *
   * @func
   * @memberOf R
   * @since v0.14.0
   * @category List
   * @sig a -> [a] -> [a]
   * @param {*} separator The element to add to the list.
   * @param {Array} list The list to be interposed.
   * @return {Array} The new list.
   * @example
   *
   *      R.intersperse('a', ['b', 'n', 'n', 's']); //=> ['b', 'a', 'n', 'a', 'n', 'a', 's']
   */
  var intersperse = /*#__PURE__*/_curry2( /*#__PURE__*/_checkForMethod('intersperse', function intersperse(separator, list) {
    var out = [];
    var idx = 0;
    var length = list.length;
    while (idx < length) {
      if (idx === length - 1) {
        out.push(list[idx]);
      } else {
        out.push(list[idx], separator);
      }
      idx += 1;
    }
    return out;
  }));

  // Based on https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
  function _objectAssign(target) {
    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    var output = Object(target);
    var idx = 1;
    var length = arguments.length;
    while (idx < length) {
      var source = arguments[idx];
      if (source != null) {
        for (var nextKey in source) {
          if (_has(nextKey, source)) {
            output[nextKey] = source[nextKey];
          }
        }
      }
      idx += 1;
    }
    return output;
  }

  var _objectAssign$1 = typeof Object.assign === 'function' ? Object.assign : _objectAssign;

  /**
   * Creates an object containing a single key:value pair.
   *
   * @func
   * @memberOf R
   * @since v0.18.0
   * @category Object
   * @sig String -> a -> {String:a}
   * @param {String} key
   * @param {*} val
   * @return {Object}
   * @see R.pair
   * @example
   *
   *      const matchPhrases = R.compose(
   *        R.objOf('must'),
   *        R.map(R.objOf('match_phrase'))
   *      );
   *      matchPhrases(['foo', 'bar', 'baz']); //=> {must: [{match_phrase: 'foo'}, {match_phrase: 'bar'}, {match_phrase: 'baz'}]}
   */
  var objOf = /*#__PURE__*/_curry2(function objOf(key, val) {
    var obj = {};
    obj[key] = val;
    return obj;
  });

  var _stepCatArray = {
    '@@transducer/init': Array,
    '@@transducer/step': function (xs, x) {
      xs.push(x);
      return xs;
    },
    '@@transducer/result': _identity
  };
  var _stepCatString = {
    '@@transducer/init': String,
    '@@transducer/step': function (a, b) {
      return a + b;
    },
    '@@transducer/result': _identity
  };
  var _stepCatObject = {
    '@@transducer/init': Object,
    '@@transducer/step': function (result, input) {
      return _objectAssign$1(result, _isArrayLike(input) ? objOf(input[0], input[1]) : input);
    },
    '@@transducer/result': _identity
  };

  function _stepCat(obj) {
    if (_isTransformer(obj)) {
      return obj;
    }
    if (_isArrayLike(obj)) {
      return _stepCatArray;
    }
    if (typeof obj === 'string') {
      return _stepCatString;
    }
    if (typeof obj === 'object') {
      return _stepCatObject;
    }
    throw new Error('Cannot create transformer for ' + obj);
  }

  /**
   * Transforms the items of the list with the transducer and appends the
   * transformed items to the accumulator using an appropriate iterator function
   * based on the accumulator type.
   *
   * The accumulator can be an array, string, object or a transformer. Iterated
   * items will be appended to arrays and concatenated to strings. Objects will
   * be merged directly or 2-item arrays will be merged as key, value pairs.
   *
   * The accumulator can also be a transformer object that provides a 2-arity
   * reducing iterator function, step, 0-arity initial value function, init, and
   * 1-arity result extraction function result. The step function is used as the
   * iterator function in reduce. The result function is used to convert the
   * final accumulator into the return type and in most cases is R.identity. The
   * init function is used to provide the initial accumulator.
   *
   * The iteration is performed with [`R.reduce`](#reduce) after initializing the
   * transducer.
   *
   * @func
   * @memberOf R
   * @since v0.12.0
   * @category List
   * @sig a -> (b -> b) -> [c] -> a
   * @param {*} acc The initial accumulator value.
   * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
   * @param {Array} list The list to iterate over.
   * @return {*} The final, accumulated value.
   * @see R.transduce
   * @example
   *
   *      const numbers = [1, 2, 3, 4];
   *      const transducer = R.compose(R.map(R.add(1)), R.take(2));
   *
   *      R.into([], transducer, numbers); //=> [2, 3]
   *
   *      const intoArray = R.into([]);
   *      intoArray(transducer, numbers); //=> [2, 3]
   */
  var into = /*#__PURE__*/_curry3(function into(acc, xf, list) {
    return _isTransformer(acc) ? _reduce(xf(acc), acc['@@transducer/init'](), list) : _reduce(xf(_stepCat(acc)), _clone(acc, [], [], false), list);
  });

  /**
   * Same as [`R.invertObj`](#invertObj), however this accounts for objects with
   * duplicate values by putting the values into an array.
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category Object
   * @sig {s: x} -> {x: [ s, ... ]}
   * @param {Object} obj The object or array to invert
   * @return {Object} out A new object with keys in an array.
   * @see R.invertObj
   * @example
   *
   *      const raceResultsByFirstName = {
   *        first: 'alice',
   *        second: 'jake',
   *        third: 'alice',
   *      };
   *      R.invert(raceResultsByFirstName);
   *      //=> { 'alice': ['first', 'third'], 'jake':['second'] }
   */
  var invert = /*#__PURE__*/_curry1(function invert(obj) {
    var props = keys(obj);
    var len = props.length;
    var idx = 0;
    var out = {};

    while (idx < len) {
      var key = props[idx];
      var val = obj[key];
      var list = _has(val, out) ? out[val] : out[val] = [];
      list[list.length] = key;
      idx += 1;
    }
    return out;
  });

  /**
   * Returns a new object with the keys of the given object as values, and the
   * values of the given object, which are coerced to strings, as keys. Note
   * that the last key found is preferred when handling the same value.
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category Object
   * @sig {s: x} -> {x: s}
   * @param {Object} obj The object or array to invert
   * @return {Object} out A new object
   * @see R.invert
   * @example
   *
   *      const raceResults = {
   *        first: 'alice',
   *        second: 'jake'
   *      };
   *      R.invertObj(raceResults);
   *      //=> { 'alice': 'first', 'jake':'second' }
   *
   *      // Alternatively:
   *      const raceResults = ['alice', 'jake'];
   *      R.invertObj(raceResults);
   *      //=> { 'alice': '0', 'jake':'1' }
   */
  var invertObj = /*#__PURE__*/_curry1(function invertObj(obj) {
    var props = keys(obj);
    var len = props.length;
    var idx = 0;
    var out = {};

    while (idx < len) {
      var key = props[idx];
      out[obj[key]] = key;
      idx += 1;
    }
    return out;
  });

  /**
   * Turns a named method with a specified arity into a function that can be
   * called directly supplied with arguments and a target object.
   *
   * The returned function is curried and accepts `arity + 1` parameters where
   * the final parameter is the target object.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Function
   * @sig Number -> String -> (a -> b -> ... -> n -> Object -> *)
   * @param {Number} arity Number of arguments the returned function should take
   *        before the target object.
   * @param {String} method Name of the method to call.
   * @return {Function} A new curried function.
   * @see R.construct
   * @example
   *
   *      const sliceFrom = R.invoker(1, 'slice');
   *      sliceFrom(6, 'abcdefghijklm'); //=> 'ghijklm'
   *      const sliceFrom6 = R.invoker(2, 'slice')(6);
   *      sliceFrom6(8, 'abcdefghijklm'); //=> 'gh'
   * @symb R.invoker(0, 'method')(o) = o['method']()
   * @symb R.invoker(1, 'method')(a, o) = o['method'](a)
   * @symb R.invoker(2, 'method')(a, b, o) = o['method'](a, b)
   */
  var invoker = /*#__PURE__*/_curry2(function invoker(arity, method) {
    return curryN(arity + 1, function () {
      var target = arguments[arity];
      if (target != null && _isFunction(target[method])) {
        return target[method].apply(target, Array.prototype.slice.call(arguments, 0, arity));
      }
      throw new TypeError(toString$1(target) + ' does not have a method named "' + method + '"');
    });
  });

  /**
   * See if an object (`val`) is an instance of the supplied constructor. This
   * function will check up the inheritance chain, if any.
   *
   * @func
   * @memberOf R
   * @since v0.3.0
   * @category Type
   * @sig (* -> {*}) -> a -> Boolean
   * @param {Object} ctor A constructor
   * @param {*} val The value to test
   * @return {Boolean}
   * @example
   *
   *      R.is(Object, {}); //=> true
   *      R.is(Number, 1); //=> true
   *      R.is(Object, 1); //=> false
   *      R.is(String, 's'); //=> true
   *      R.is(String, new String('')); //=> true
   *      R.is(Object, new String('')); //=> true
   *      R.is(Object, 's'); //=> false
   *      R.is(Number, {}); //=> false
   */
  var is = /*#__PURE__*/_curry2(function is(Ctor, val) {
    return val != null && val.constructor === Ctor || val instanceof Ctor;
  });

  /**
   * Returns `true` if the given value is its type's empty value; `false`
   * otherwise.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Logic
   * @sig a -> Boolean
   * @param {*} x
   * @return {Boolean}
   * @see R.empty
   * @example
   *
   *      R.isEmpty([1, 2, 3]);   //=> false
   *      R.isEmpty([]);          //=> true
   *      R.isEmpty('');          //=> true
   *      R.isEmpty(null);        //=> false
   *      R.isEmpty({});          //=> true
   *      R.isEmpty({length: 0}); //=> false
   */
  var isEmpty = /*#__PURE__*/_curry1(function isEmpty(x) {
    return x != null && equals(x, empty(x));
  });

  /**
   * Returns a string made by inserting the `separator` between each element and
   * concatenating all the elements into a single string.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig String -> [a] -> String
   * @param {Number|String} separator The string used to separate the elements.
   * @param {Array} xs The elements to join into a string.
   * @return {String} str The string made by concatenating `xs` with `separator`.
   * @see R.split
   * @example
   *
   *      const spacer = R.join(' ');
   *      spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'
   *      R.join('|', [1, 2, 3]);    //=> '1|2|3'
   */
  var join = /*#__PURE__*/invoker(1, 'join');

  /**
   * juxt applies a list of functions to a list of values.
   *
   * @func
   * @memberOf R
   * @since v0.19.0
   * @category Function
   * @sig [(a, b, ..., m) -> n] -> ((a, b, ..., m) -> [n])
   * @param {Array} fns An array of functions
   * @return {Function} A function that returns a list of values after applying each of the original `fns` to its parameters.
   * @see R.applySpec
   * @example
   *
   *      const getRange = R.juxt([Math.min, Math.max]);
   *      getRange(3, 4, 9, -3); //=> [-3, 9]
   * @symb R.juxt([f, g, h])(a, b) = [f(a, b), g(a, b), h(a, b)]
   */
  var juxt = /*#__PURE__*/_curry1(function juxt(fns) {
    return converge(function () {
      return Array.prototype.slice.call(arguments, 0);
    }, fns);
  });

  /**
   * Returns a list containing the names of all the properties of the supplied
   * object, including prototype properties.
   * Note that the order of the output array is not guaranteed to be consistent
   * across different JS platforms.
   *
   * @func
   * @memberOf R
   * @since v0.2.0
   * @category Object
   * @sig {k: v} -> [k]
   * @param {Object} obj The object to extract properties from
   * @return {Array} An array of the object's own and prototype properties.
   * @see R.keys, R.valuesIn
   * @example
   *
   *      const F = function() { this.x = 'X'; };
   *      F.prototype.y = 'Y';
   *      const f = new F();
   *      R.keysIn(f); //=> ['x', 'y']
   */
  var keysIn = /*#__PURE__*/_curry1(function keysIn(obj) {
    var prop;
    var ks = [];
    for (prop in obj) {
      ks[ks.length] = prop;
    }
    return ks;
  });

  /**
   * Returns the position of the last occurrence of an item in an array, or -1 if
   * the item is not included in the array. [`R.equals`](#equals) is used to
   * determine equality.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig a -> [a] -> Number
   * @param {*} target The item to find.
   * @param {Array} xs The array to search in.
   * @return {Number} the index of the target, or -1 if the target is not found.
   * @see R.indexOf
   * @example
   *
   *      R.lastIndexOf(3, [-1,3,3,0,1,2,3,4]); //=> 6
   *      R.lastIndexOf(10, [1,2,3,4]); //=> -1
   */
  var lastIndexOf = /*#__PURE__*/_curry2(function lastIndexOf(target, xs) {
    if (typeof xs.lastIndexOf === 'function' && !_isArray(xs)) {
      return xs.lastIndexOf(target);
    } else {
      var idx = xs.length - 1;
      while (idx >= 0) {
        if (equals(xs[idx], target)) {
          return idx;
        }
        idx -= 1;
      }
      return -1;
    }
  });

  function _isNumber(x) {
    return Object.prototype.toString.call(x) === '[object Number]';
  }

  /**
   * Returns the number of elements in the array by returning `list.length`.
   *
   * @func
   * @memberOf R
   * @since v0.3.0
   * @category List
   * @sig [a] -> Number
   * @param {Array} list The array to inspect.
   * @return {Number} The length of the array.
   * @example
   *
   *      R.length([]); //=> 0
   *      R.length([1, 2, 3]); //=> 3
   */
  var length = /*#__PURE__*/_curry1(function length(list) {
    return list != null && _isNumber(list.length) ? list.length : NaN;
  });

  /**
   * Returns a lens for the given getter and setter functions. The getter "gets"
   * the value of the focus; the setter "sets" the value of the focus. The setter
   * should not mutate the data structure.
   *
   * @func
   * @memberOf R
   * @since v0.8.0
   * @category Object
   * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
   * @sig (s -> a) -> ((a, s) -> s) -> Lens s a
   * @param {Function} getter
   * @param {Function} setter
   * @return {Lens}
   * @see R.view, R.set, R.over, R.lensIndex, R.lensProp
   * @example
   *
   *      const xLens = R.lens(R.prop('x'), R.assoc('x'));
   *
   *      R.view(xLens, {x: 1, y: 2});            //=> 1
   *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
   *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
   */
  var lens = /*#__PURE__*/_curry2(function lens(getter, setter) {
    return function (toFunctorFn) {
      return function (target) {
        return map(function (focus) {
          return setter(focus, target);
        }, toFunctorFn(getter(target)));
      };
    };
  });

  /**
   * Returns a lens whose focus is the specified index.
   *
   * @func
   * @memberOf R
   * @since v0.14.0
   * @category Object
   * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
   * @sig Number -> Lens s a
   * @param {Number} n
   * @return {Lens}
   * @see R.view, R.set, R.over
   * @example
   *
   *      const headLens = R.lensIndex(0);
   *
   *      R.view(headLens, ['a', 'b', 'c']);            //=> 'a'
   *      R.set(headLens, 'x', ['a', 'b', 'c']);        //=> ['x', 'b', 'c']
   *      R.over(headLens, R.toUpper, ['a', 'b', 'c']); //=> ['A', 'b', 'c']
   */
  var lensIndex = /*#__PURE__*/_curry1(function lensIndex(n) {
    return lens(nth(n), update(n));
  });

  /**
   * Returns a lens whose focus is the specified path.
   *
   * @func
   * @memberOf R
   * @since v0.19.0
   * @category Object
   * @typedefn Idx = String | Int
   * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
   * @sig [Idx] -> Lens s a
   * @param {Array} path The path to use.
   * @return {Lens}
   * @see R.view, R.set, R.over
   * @example
   *
   *      const xHeadYLens = R.lensPath(['x', 0, 'y']);
   *
   *      R.view(xHeadYLens, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
   *      //=> 2
   *      R.set(xHeadYLens, 1, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
   *      //=> {x: [{y: 1, z: 3}, {y: 4, z: 5}]}
   *      R.over(xHeadYLens, R.negate, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
   *      //=> {x: [{y: -2, z: 3}, {y: 4, z: 5}]}
   */
  var lensPath = /*#__PURE__*/_curry1(function lensPath(p) {
    return lens(path(p), assocPath(p));
  });

  /**
   * Returns a lens whose focus is the specified property.
   *
   * @func
   * @memberOf R
   * @since v0.14.0
   * @category Object
   * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
   * @sig String -> Lens s a
   * @param {String} k
   * @return {Lens}
   * @see R.view, R.set, R.over
   * @example
   *
   *      const xLens = R.lensProp('x');
   *
   *      R.view(xLens, {x: 1, y: 2});            //=> 1
   *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
   *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
   */
  var lensProp = /*#__PURE__*/_curry1(function lensProp(k) {
    return lens(prop(k), assoc(k));
  });

  /**
   * Returns `true` if the first argument is less than the second; `false`
   * otherwise.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Relation
   * @sig Ord a => a -> a -> Boolean
   * @param {*} a
   * @param {*} b
   * @return {Boolean}
   * @see R.gt
   * @example
   *
   *      R.lt(2, 1); //=> false
   *      R.lt(2, 2); //=> false
   *      R.lt(2, 3); //=> true
   *      R.lt('a', 'z'); //=> true
   *      R.lt('z', 'a'); //=> false
   */
  var lt = /*#__PURE__*/_curry2(function lt(a, b) {
    return a < b;
  });

  /**
   * Returns `true` if the first argument is less than or equal to the second;
   * `false` otherwise.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Relation
   * @sig Ord a => a -> a -> Boolean
   * @param {Number} a
   * @param {Number} b
   * @return {Boolean}
   * @see R.gte
   * @example
   *
   *      R.lte(2, 1); //=> false
   *      R.lte(2, 2); //=> true
   *      R.lte(2, 3); //=> true
   *      R.lte('a', 'z'); //=> true
   *      R.lte('z', 'a'); //=> false
   */
  var lte = /*#__PURE__*/_curry2(function lte(a, b) {
    return a <= b;
  });

  /**
   * The `mapAccum` function behaves like a combination of map and reduce; it
   * applies a function to each element of a list, passing an accumulating
   * parameter from left to right, and returning a final value of this
   * accumulator together with the new list.
   *
   * The iterator function receives two arguments, *acc* and *value*, and should
   * return a tuple *[acc, value]*.
   *
   * @func
   * @memberOf R
   * @since v0.10.0
   * @category List
   * @sig ((acc, x) -> (acc, y)) -> acc -> [x] -> (acc, [y])
   * @param {Function} fn The function to be called on every element of the input `list`.
   * @param {*} acc The accumulator value.
   * @param {Array} list The list to iterate over.
   * @return {*} The final, accumulated value.
   * @see R.scan, R.addIndex, R.mapAccumRight
   * @example
   *
   *      const digits = ['1', '2', '3', '4'];
   *      const appender = (a, b) => [a + b, a + b];
   *
   *      R.mapAccum(appender, 0, digits); //=> ['01234', ['01', '012', '0123', '01234']]
   * @symb R.mapAccum(f, a, [b, c, d]) = [
   *   f(f(f(a, b)[0], c)[0], d)[0],
   *   [
   *     f(a, b)[1],
   *     f(f(a, b)[0], c)[1],
   *     f(f(f(a, b)[0], c)[0], d)[1]
   *   ]
   * ]
   */
  var mapAccum = /*#__PURE__*/_curry3(function mapAccum(fn, acc, list) {
    var idx = 0;
    var len = list.length;
    var result = [];
    var tuple = [acc];
    while (idx < len) {
      tuple = fn(tuple[0], list[idx]);
      result[idx] = tuple[1];
      idx += 1;
    }
    return [tuple[0], result];
  });

  /**
   * The `mapAccumRight` function behaves like a combination of map and reduce; it
   * applies a function to each element of a list, passing an accumulating
   * parameter from right to left, and returning a final value of this
   * accumulator together with the new list.
   *
   * Similar to [`mapAccum`](#mapAccum), except moves through the input list from
   * the right to the left.
   *
   * The iterator function receives two arguments, *acc* and *value*, and should
   * return a tuple *[acc, value]*.
   *
   * @func
   * @memberOf R
   * @since v0.10.0
   * @category List
   * @sig ((acc, x) -> (acc, y)) -> acc -> [x] -> (acc, [y])
   * @param {Function} fn The function to be called on every element of the input `list`.
   * @param {*} acc The accumulator value.
   * @param {Array} list The list to iterate over.
   * @return {*} The final, accumulated value.
   * @see R.addIndex, R.mapAccum
   * @example
   *
   *      const digits = ['1', '2', '3', '4'];
   *      const appender = (a, b) => [b + a, b + a];
   *
   *      R.mapAccumRight(appender, 5, digits); //=> ['12345', ['12345', '2345', '345', '45']]
   * @symb R.mapAccumRight(f, a, [b, c, d]) = [
   *   f(f(f(a, d)[0], c)[0], b)[0],
   *   [
   *     f(a, d)[1],
   *     f(f(a, d)[0], c)[1],
   *     f(f(f(a, d)[0], c)[0], b)[1]
   *   ]
   * ]
   */
  var mapAccumRight = /*#__PURE__*/_curry3(function mapAccumRight(fn, acc, list) {
    var idx = list.length - 1;
    var result = [];
    var tuple = [acc];
    while (idx >= 0) {
      tuple = fn(tuple[0], list[idx]);
      result[idx] = tuple[1];
      idx -= 1;
    }
    return [tuple[0], result];
  });

  /**
   * An Object-specific version of [`map`](#map). The function is applied to three
   * arguments: *(value, key, obj)*. If only the value is significant, use
   * [`map`](#map) instead.
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category Object
   * @sig ((*, String, Object) -> *) -> Object -> Object
   * @param {Function} fn
   * @param {Object} obj
   * @return {Object}
   * @see R.map
   * @example
   *
   *      const xyz = { x: 1, y: 2, z: 3 };
   *      const prependKeyAndDouble = (num, key, obj) => key + (num * 2);
   *
   *      R.mapObjIndexed(prependKeyAndDouble, xyz); //=> { x: 'x2', y: 'y4', z: 'z6' }
   */
  var mapObjIndexed = /*#__PURE__*/_curry2(function mapObjIndexed(fn, obj) {
    return _reduce(function (acc, key) {
      acc[key] = fn(obj[key], key, obj);
      return acc;
    }, {}, keys(obj));
  });

  /**
   * Tests a regular expression against a String. Note that this function will
   * return an empty array when there are no matches. This differs from
   * [`String.prototype.match`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
   * which returns `null` when there are no matches.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category String
   * @sig RegExp -> String -> [String | Undefined]
   * @param {RegExp} rx A regular expression.
   * @param {String} str The string to match against
   * @return {Array} The list of matches or empty array.
   * @see R.test
   * @example
   *
   *      R.match(/([a-z]a)/g, 'bananas'); //=> ['ba', 'na', 'na']
   *      R.match(/a/, 'b'); //=> []
   *      R.match(/a/, null); //=> TypeError: null does not have a method named "match"
   */
  var match = /*#__PURE__*/_curry2(function match(rx, str) {
    return str.match(rx) || [];
  });

  /**
   * `mathMod` behaves like the modulo operator should mathematically, unlike the
   * `%` operator (and by extension, [`R.modulo`](#modulo)). So while
   * `-17 % 5` is `-2`, `mathMod(-17, 5)` is `3`. `mathMod` requires Integer
   * arguments, and returns NaN when the modulus is zero or negative.
   *
   * @func
   * @memberOf R
   * @since v0.3.0
   * @category Math
   * @sig Number -> Number -> Number
   * @param {Number} m The dividend.
   * @param {Number} p the modulus.
   * @return {Number} The result of `b mod a`.
   * @see R.modulo
   * @example
   *
   *      R.mathMod(-17, 5);  //=> 3
   *      R.mathMod(17, 5);   //=> 2
   *      R.mathMod(17, -5);  //=> NaN
   *      R.mathMod(17, 0);   //=> NaN
   *      R.mathMod(17.2, 5); //=> NaN
   *      R.mathMod(17, 5.3); //=> NaN
   *
   *      const clock = R.mathMod(R.__, 12);
   *      clock(15); //=> 3
   *      clock(24); //=> 0
   *
   *      const seventeenMod = R.mathMod(17);
   *      seventeenMod(3);  //=> 2
   *      seventeenMod(4);  //=> 1
   *      seventeenMod(10); //=> 7
   */
  var mathMod = /*#__PURE__*/_curry2(function mathMod(m, p) {
    if (!_isInteger(m)) {
      return NaN;
    }
    if (!_isInteger(p) || p < 1) {
      return NaN;
    }
    return (m % p + p) % p;
  });

  /**
   * Takes a function and two values, and returns whichever value produces the
   * larger result when passed to the provided function.
   *
   * @func
   * @memberOf R
   * @since v0.8.0
   * @category Relation
   * @sig Ord b => (a -> b) -> a -> a -> a
   * @param {Function} f
   * @param {*} a
   * @param {*} b
   * @return {*}
   * @see R.max, R.minBy
   * @example
   *
   *      //  square :: Number -> Number
   *      const square = n => n * n;
   *
   *      R.maxBy(square, -3, 2); //=> -3
   *
   *      R.reduce(R.maxBy(square), 0, [3, -5, 4, 1, -2]); //=> -5
   *      R.reduce(R.maxBy(square), 0, []); //=> 0
   */
  var maxBy = /*#__PURE__*/_curry3(function maxBy(f, a, b) {
    return f(b) > f(a) ? b : a;
  });

  /**
   * Adds together all the elements of a list.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Math
   * @sig [Number] -> Number
   * @param {Array} list An array of numbers
   * @return {Number} The sum of all the numbers in the list.
   * @see R.reduce
   * @example
   *
   *      R.sum([2,4,6,8,100,1]); //=> 121
   */
  var sum = /*#__PURE__*/reduce(add, 0);

  /**
   * Returns the mean of the given list of numbers.
   *
   * @func
   * @memberOf R
   * @since v0.14.0
   * @category Math
   * @sig [Number] -> Number
   * @param {Array} list
   * @return {Number}
   * @see R.median
   * @example
   *
   *      R.mean([2, 7, 9]); //=> 6
   *      R.mean([]); //=> NaN
   */
  var mean = /*#__PURE__*/_curry1(function mean(list) {
    return sum(list) / list.length;
  });

  /**
   * Returns the median of the given list of numbers.
   *
   * @func
   * @memberOf R
   * @since v0.14.0
   * @category Math
   * @sig [Number] -> Number
   * @param {Array} list
   * @return {Number}
   * @see R.mean
   * @example
   *
   *      R.median([2, 9, 7]); //=> 7
   *      R.median([7, 2, 10, 9]); //=> 8
   *      R.median([]); //=> NaN
   */
  var median = /*#__PURE__*/_curry1(function median(list) {
    var len = list.length;
    if (len === 0) {
      return NaN;
    }
    var width = 2 - len % 2;
    var idx = (len - width) / 2;
    return mean(Array.prototype.slice.call(list, 0).sort(function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    }).slice(idx, idx + width));
  });

  /**
   * Creates a new function that, when invoked, caches the result of calling `fn`
   * for a given argument set and returns the result. Subsequent calls to the
   * memoized `fn` with the same argument set will not result in an additional
   * call to `fn`; instead, the cached result for that set of arguments will be
   * returned.
   *
   *
   * @func
   * @memberOf R
   * @since v0.24.0
   * @category Function
   * @sig (*... -> String) -> (*... -> a) -> (*... -> a)
   * @param {Function} fn The function to generate the cache key.
   * @param {Function} fn The function to memoize.
   * @return {Function} Memoized version of `fn`.
   * @example
   *
   *      let count = 0;
   *      const factorial = R.memoizeWith(R.identity, n => {
   *        count += 1;
   *        return R.product(R.range(1, n + 1));
   *      });
   *      factorial(5); //=> 120
   *      factorial(5); //=> 120
   *      factorial(5); //=> 120
   *      count; //=> 1
   */
  var memoizeWith = /*#__PURE__*/_curry2(function memoizeWith(mFn, fn) {
    var cache = {};
    return _arity(fn.length, function () {
      var key = mFn.apply(this, arguments);
      if (!_has(key, cache)) {
        cache[key] = fn.apply(this, arguments);
      }
      return cache[key];
    });
  });

  /**
   * Create a new object with the own properties of the first object merged with
   * the own properties of the second object. If a key exists in both objects,
   * the value from the second object will be used.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Object
   * @sig {k: v} -> {k: v} -> {k: v}
   * @param {Object} l
   * @param {Object} r
   * @return {Object}
   * @see R.mergeRight, R.mergeDeepRight, R.mergeWith, R.mergeWithKey
   * @deprecated
   * @example
   *
   *      R.merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
   *      //=> { 'name': 'fred', 'age': 40 }
   *
   *      const withDefaults = R.merge({x: 0, y: 0});
   *      withDefaults({y: 2}); //=> {x: 0, y: 2}
   * @symb R.merge(a, b) = {...a, ...b}
   */
  var merge = /*#__PURE__*/_curry2(function merge(l, r) {
    return _objectAssign$1({}, l, r);
  });

  /**
   * Merges a list of objects together into one object.
   *
   * @func
   * @memberOf R
   * @since v0.10.0
   * @category List
   * @sig [{k: v}] -> {k: v}
   * @param {Array} list An array of objects
   * @return {Object} A merged object.
   * @see R.reduce
   * @example
   *
   *      R.mergeAll([{foo:1},{bar:2},{baz:3}]); //=> {foo:1,bar:2,baz:3}
   *      R.mergeAll([{foo:1},{foo:2},{bar:2}]); //=> {foo:2,bar:2}
   * @symb R.mergeAll([{ x: 1 }, { y: 2 }, { z: 3 }]) = { x: 1, y: 2, z: 3 }
   */
  var mergeAll = /*#__PURE__*/_curry1(function mergeAll(list) {
    return _objectAssign$1.apply(null, [{}].concat(list));
  });

  /**
   * Creates a new object with the own properties of the two provided objects. If
   * a key exists in both objects, the provided function is applied to the key
   * and the values associated with the key in each object, with the result being
   * used as the value associated with the key in the returned object.
   *
   * @func
   * @memberOf R
   * @since v0.19.0
   * @category Object
   * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}
   * @param {Function} fn
   * @param {Object} l
   * @param {Object} r
   * @return {Object}
   * @see R.mergeDeepWithKey, R.merge, R.mergeWith
   * @example
   *
   *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
   *      R.mergeWithKey(concatValues,
   *                     { a: true, thing: 'foo', values: [10, 20] },
   *                     { b: true, thing: 'bar', values: [15, 35] });
   *      //=> { a: true, b: true, thing: 'bar', values: [10, 20, 15, 35] }
   * @symb R.mergeWithKey(f, { x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: f('y', 2, 5), z: 3 }
   */
  var mergeWithKey = /*#__PURE__*/_curry3(function mergeWithKey(fn, l, r) {
    var result = {};
    var k;

    for (k in l) {
      if (_has(k, l)) {
        result[k] = _has(k, r) ? fn(k, l[k], r[k]) : l[k];
      }
    }

    for (k in r) {
      if (_has(k, r) && !_has(k, result)) {
        result[k] = r[k];
      }
    }

    return result;
  });

  /**
   * Creates a new object with the own properties of the two provided objects.
   * If a key exists in both objects:
   * - and both associated values are also objects then the values will be
   *   recursively merged.
   * - otherwise the provided function is applied to the key and associated values
   *   using the resulting value as the new value associated with the key.
   * If a key only exists in one object, the value will be associated with the key
   * of the resulting object.
   *
   * @func
   * @memberOf R
   * @since v0.24.0
   * @category Object
   * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}
   * @param {Function} fn
   * @param {Object} lObj
   * @param {Object} rObj
   * @return {Object}
   * @see R.mergeWithKey, R.mergeDeepWith
   * @example
   *
   *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
   *      R.mergeDeepWithKey(concatValues,
   *                         { a: true, c: { thing: 'foo', values: [10, 20] }},
   *                         { b: true, c: { thing: 'bar', values: [15, 35] }});
   *      //=> { a: true, b: true, c: { thing: 'bar', values: [10, 20, 15, 35] }}
   */
  var mergeDeepWithKey = /*#__PURE__*/_curry3(function mergeDeepWithKey(fn, lObj, rObj) {
    return mergeWithKey(function (k, lVal, rVal) {
      if (_isObject(lVal) && _isObject(rVal)) {
        return mergeDeepWithKey(fn, lVal, rVal);
      } else {
        return fn(k, lVal, rVal);
      }
    }, lObj, rObj);
  });

  /**
   * Creates a new object with the own properties of the first object merged with
   * the own properties of the second object. If a key exists in both objects:
   * - and both values are objects, the two values will be recursively merged
   * - otherwise the value from the first object will be used.
   *
   * @func
   * @memberOf R
   * @since v0.24.0
   * @category Object
   * @sig {a} -> {a} -> {a}
   * @param {Object} lObj
   * @param {Object} rObj
   * @return {Object}
   * @see R.merge, R.mergeDeepRight, R.mergeDeepWith, R.mergeDeepWithKey
   * @example
   *
   *      R.mergeDeepLeft({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
   *                      { age: 40, contact: { email: 'baa@example.com' }});
   *      //=> { name: 'fred', age: 10, contact: { email: 'moo@example.com' }}
   */
  var mergeDeepLeft = /*#__PURE__*/_curry2(function mergeDeepLeft(lObj, rObj) {
    return mergeDeepWithKey(function (k, lVal, rVal) {
      return lVal;
    }, lObj, rObj);
  });

  /**
   * Creates a new object with the own properties of the first object merged with
   * the own properties of the second object. If a key exists in both objects:
   * - and both values are objects, the two values will be recursively merged
   * - otherwise the value from the second object will be used.
   *
   * @func
   * @memberOf R
   * @since v0.24.0
   * @category Object
   * @sig {a} -> {a} -> {a}
   * @param {Object} lObj
   * @param {Object} rObj
   * @return {Object}
   * @see R.merge, R.mergeDeepLeft, R.mergeDeepWith, R.mergeDeepWithKey
   * @example
   *
   *      R.mergeDeepRight({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
   *                       { age: 40, contact: { email: 'baa@example.com' }});
   *      //=> { name: 'fred', age: 40, contact: { email: 'baa@example.com' }}
   */
  var mergeDeepRight = /*#__PURE__*/_curry2(function mergeDeepRight(lObj, rObj) {
    return mergeDeepWithKey(function (k, lVal, rVal) {
      return rVal;
    }, lObj, rObj);
  });

  /**
   * Creates a new object with the own properties of the two provided objects.
   * If a key exists in both objects:
   * - and both associated values are also objects then the values will be
   *   recursively merged.
   * - otherwise the provided function is applied to associated values using the
   *   resulting value as the new value associated with the key.
   * If a key only exists in one object, the value will be associated with the key
   * of the resulting object.
   *
   * @func
   * @memberOf R
   * @since v0.24.0
   * @category Object
   * @sig ((a, a) -> a) -> {a} -> {a} -> {a}
   * @param {Function} fn
   * @param {Object} lObj
   * @param {Object} rObj
   * @return {Object}
   * @see R.mergeWith, R.mergeDeepWithKey
   * @example
   *
   *      R.mergeDeepWith(R.concat,
   *                      { a: true, c: { values: [10, 20] }},
   *                      { b: true, c: { values: [15, 35] }});
   *      //=> { a: true, b: true, c: { values: [10, 20, 15, 35] }}
   */
  var mergeDeepWith = /*#__PURE__*/_curry3(function mergeDeepWith(fn, lObj, rObj) {
    return mergeDeepWithKey(function (k, lVal, rVal) {
      return fn(lVal, rVal);
    }, lObj, rObj);
  });

  /**
   * Create a new object with the own properties of the first object merged with
   * the own properties of the second object. If a key exists in both objects,
   * the value from the first object will be used.
   *
   * @func
   * @memberOf R
   * @category Object
   * @sig {k: v} -> {k: v} -> {k: v}
   * @param {Object} l
   * @param {Object} r
   * @return {Object}
   * @see R.mergeRight, R.mergeDeepLeft, R.mergeWith, R.mergeWithKey
   * @example
   *
   *      R.mergeLeft({ 'age': 40 }, { 'name': 'fred', 'age': 10 });
   *      //=> { 'name': 'fred', 'age': 40 }
   *
   *      const resetToDefault = R.mergeLeft({x: 0});
   *      resetToDefault({x: 5, y: 2}); //=> {x: 0, y: 2}
   * @symb R.mergeLeft(a, b) = {...b, ...a}
   */
  var mergeLeft = /*#__PURE__*/_curry2(function mergeLeft(l, r) {
    return _objectAssign$1({}, r, l);
  });

  /**
   * Create a new object with the own properties of the first object merged with
   * the own properties of the second object. If a key exists in both objects,
   * the value from the second object will be used.
   *
   * @func
   * @memberOf R
   * @category Object
   * @sig {k: v} -> {k: v} -> {k: v}
   * @param {Object} l
   * @param {Object} r
   * @return {Object}
   * @see R.mergeLeft, R.mergeDeepRight, R.mergeWith, R.mergeWithKey
   * @example
   *
   *      R.mergeRight({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
   *      //=> { 'name': 'fred', 'age': 40 }
   *
   *      const withDefaults = R.mergeRight({x: 0, y: 0});
   *      withDefaults({y: 2}); //=> {x: 0, y: 2}
   * @symb R.mergeRight(a, b) = {...a, ...b}
   */
  var mergeRight = /*#__PURE__*/_curry2(function mergeRight(l, r) {
    return _objectAssign$1({}, l, r);
  });

  /**
   * Creates a new object with the own properties of the two provided objects. If
   * a key exists in both objects, the provided function is applied to the values
   * associated with the key in each object, with the result being used as the
   * value associated with the key in the returned object.
   *
   * @func
   * @memberOf R
   * @since v0.19.0
   * @category Object
   * @sig ((a, a) -> a) -> {a} -> {a} -> {a}
   * @param {Function} fn
   * @param {Object} l
   * @param {Object} r
   * @return {Object}
   * @see R.mergeDeepWith, R.merge, R.mergeWithKey
   * @example
   *
   *      R.mergeWith(R.concat,
   *                  { a: true, values: [10, 20] },
   *                  { b: true, values: [15, 35] });
   *      //=> { a: true, b: true, values: [10, 20, 15, 35] }
   */
  var mergeWith = /*#__PURE__*/_curry3(function mergeWith(fn, l, r) {
    return mergeWithKey(function (_, _l, _r) {
      return fn(_l, _r);
    }, l, r);
  });

  /**
   * Returns the smaller of its two arguments.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Relation
   * @sig Ord a => a -> a -> a
   * @param {*} a
   * @param {*} b
   * @return {*}
   * @see R.minBy, R.max
   * @example
   *
   *      R.min(789, 123); //=> 123
   *      R.min('a', 'b'); //=> 'a'
   */
  var min = /*#__PURE__*/_curry2(function min(a, b) {
    return b < a ? b : a;
  });

  /**
   * Takes a function and two values, and returns whichever value produces the
   * smaller result when passed to the provided function.
   *
   * @func
   * @memberOf R
   * @since v0.8.0
   * @category Relation
   * @sig Ord b => (a -> b) -> a -> a -> a
   * @param {Function} f
   * @param {*} a
   * @param {*} b
   * @return {*}
   * @see R.min, R.maxBy
   * @example
   *
   *      //  square :: Number -> Number
   *      const square = n => n * n;
   *
   *      R.minBy(square, -3, 2); //=> 2
   *
   *      R.reduce(R.minBy(square), Infinity, [3, -5, 4, 1, -2]); //=> 1
   *      R.reduce(R.minBy(square), Infinity, []); //=> Infinity
   */
  var minBy = /*#__PURE__*/_curry3(function minBy(f, a, b) {
    return f(b) < f(a) ? b : a;
  });

  /**
   * Divides the first parameter by the second and returns the remainder. Note
   * that this function preserves the JavaScript-style behavior for modulo. For
   * mathematical modulo see [`mathMod`](#mathMod).
   *
   * @func
   * @memberOf R
   * @since v0.1.1
   * @category Math
   * @sig Number -> Number -> Number
   * @param {Number} a The value to the divide.
   * @param {Number} b The pseudo-modulus
   * @return {Number} The result of `b % a`.
   * @see R.mathMod
   * @example
   *
   *      R.modulo(17, 3); //=> 2
   *      // JS behavior:
   *      R.modulo(-17, 3); //=> -2
   *      R.modulo(17, -3); //=> 2
   *
   *      const isOdd = R.modulo(R.__, 2);
   *      isOdd(42); //=> 0
   *      isOdd(21); //=> 1
   */
  var modulo = /*#__PURE__*/_curry2(function modulo(a, b) {
    return a % b;
  });

  /**
   * Move an item, at index `from`, to index `to`, in a list of elements.
   * A new list will be created containing the new elements order.
   *
   * @func
   * @memberOf R
   * @category List
   * @sig Number -> Number -> [a] -> [a]
   * @param {Number} from The source index
   * @param {Number} to The destination index
   * @param {Array} list The list which will serve to realise the move
   * @return {Array} The new list reordered
   * @example
   *
   *      R.move(0, 2, ['a', 'b', 'c', 'd', 'e', 'f']); //=> ['b', 'c', 'a', 'd', 'e', 'f']
   *      R.move(-1, 0, ['a', 'b', 'c', 'd', 'e', 'f']); //=> ['f', 'a', 'b', 'c', 'd', 'e'] list rotation
   */
  var move = /*#__PURE__*/_curry3(function (from, to, list) {
    var length = list.length;
    var result = list.slice();
    var positiveFrom = from < 0 ? length + from : from;
    var positiveTo = to < 0 ? length + to : to;
    var item = result.splice(positiveFrom, 1);

    return positiveFrom < 0 || positiveFrom >= list.length || positiveTo < 0 || positiveTo >= list.length ? list : [].concat(result.slice(0, positiveTo)).concat(item).concat(result.slice(positiveTo, list.length));
  });

  /**
   * Multiplies two numbers. Equivalent to `a * b` but curried.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Math
   * @sig Number -> Number -> Number
   * @param {Number} a The first value.
   * @param {Number} b The second value.
   * @return {Number} The result of `a * b`.
   * @see R.divide
   * @example
   *
   *      const double = R.multiply(2);
   *      const triple = R.multiply(3);
   *      double(3);       //=>  6
   *      triple(4);       //=> 12
   *      R.multiply(2, 5);  //=> 10
   */
  var multiply = /*#__PURE__*/_curry2(function multiply(a, b) {
    return a * b;
  });

  /**
   * Negates its argument.
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category Math
   * @sig Number -> Number
   * @param {Number} n
   * @return {Number}
   * @example
   *
   *      R.negate(42); //=> -42
   */
  var negate = /*#__PURE__*/_curry1(function negate(n) {
    return -n;
  });

  /**
   * Returns `true` if no elements of the list match the predicate, `false`
   * otherwise.
   *
   * Dispatches to the `all` method of the second argument, if present.
   *
   * Acts as a transducer if a transformer is given in list position.
   *
   * @func
   * @memberOf R
   * @since v0.12.0
   * @category List
   * @sig (a -> Boolean) -> [a] -> Boolean
   * @param {Function} fn The predicate function.
   * @param {Array} list The array to consider.
   * @return {Boolean} `true` if the predicate is not satisfied by every element, `false` otherwise.
   * @see R.all, R.any
   * @example
   *
   *      const isEven = n => n % 2 === 0;
   *      const isOdd = n => n % 2 === 1;
   *
   *      R.none(isEven, [1, 3, 5, 7, 9, 11]); //=> true
   *      R.none(isOdd, [1, 3, 5, 7, 8, 11]); //=> false
   */
  var none = /*#__PURE__*/_curry2(function none(fn, input) {
    return all(_complement(fn), input);
  });

  /**
   * Returns a function which returns its nth argument.
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category Function
   * @sig Number -> *... -> *
   * @param {Number} n
   * @return {Function}
   * @example
   *
   *      R.nthArg(1)('a', 'b', 'c'); //=> 'b'
   *      R.nthArg(-1)('a', 'b', 'c'); //=> 'c'
   * @symb R.nthArg(-1)(a, b, c) = c
   * @symb R.nthArg(0)(a, b, c) = a
   * @symb R.nthArg(1)(a, b, c) = b
   */
  var nthArg = /*#__PURE__*/_curry1(function nthArg(n) {
    var arity = n < 0 ? 1 : n + 1;
    return curryN(arity, function () {
      return nth(n, arguments);
    });
  });

  /**
   * `o` is a curried composition function that returns a unary function.
   * Like [`compose`](#compose), `o` performs right-to-left function composition.
   * Unlike [`compose`](#compose), the rightmost function passed to `o` will be
   * invoked with only one argument. Also, unlike [`compose`](#compose), `o` is
   * limited to accepting only 2 unary functions. The name o was chosen because
   * of its similarity to the mathematical composition operator ∘.
   *
   * @func
   * @memberOf R
   * @since v0.24.0
   * @category Function
   * @sig (b -> c) -> (a -> b) -> a -> c
   * @param {Function} f
   * @param {Function} g
   * @return {Function}
   * @see R.compose, R.pipe
   * @example
   *
   *      const classyGreeting = name => "The name's " + name.last + ", " + name.first + " " + name.last
   *      const yellGreeting = R.o(R.toUpper, classyGreeting);
   *      yellGreeting({first: 'James', last: 'Bond'}); //=> "THE NAME'S BOND, JAMES BOND"
   *
   *      R.o(R.multiply(10), R.add(10))(-4) //=> 60
   *
   * @symb R.o(f, g, x) = f(g(x))
   */
  var o = /*#__PURE__*/_curry3(function o(f, g, x) {
    return f(g(x));
  });

  function _of(x) {
    return [x];
  }

  /**
   * Returns a singleton array containing the value provided.
   *
   * Note this `of` is different from the ES6 `of`; See
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
   *
   * @func
   * @memberOf R
   * @since v0.3.0
   * @category Function
   * @sig a -> [a]
   * @param {*} x any value
   * @return {Array} An array wrapping `x`.
   * @example
   *
   *      R.of(null); //=> [null]
   *      R.of([42]); //=> [[42]]
   */
  var of = /*#__PURE__*/_curry1(_of);

  /**
   * Returns a partial copy of an object omitting the keys specified.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Object
   * @sig [String] -> {String: *} -> {String: *}
   * @param {Array} names an array of String property names to omit from the new object
   * @param {Object} obj The object to copy from
   * @return {Object} A new object with properties from `names` not on it.
   * @see R.pick
   * @example
   *
   *      R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}
   */
  var omit = /*#__PURE__*/_curry2(function omit(names, obj) {
    var result = {};
    var index = {};
    var idx = 0;
    var len = names.length;

    while (idx < len) {
      index[names[idx]] = 1;
      idx += 1;
    }

    for (var prop in obj) {
      if (!index.hasOwnProperty(prop)) {
        result[prop] = obj[prop];
      }
    }
    return result;
  });

  /**
   * Accepts a function `fn` and returns a function that guards invocation of
   * `fn` such that `fn` can only ever be called once, no matter how many times
   * the returned function is invoked. The first value calculated is returned in
   * subsequent invocations.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Function
   * @sig (a... -> b) -> (a... -> b)
   * @param {Function} fn The function to wrap in a call-only-once wrapper.
   * @return {Function} The wrapped function.
   * @example
   *
   *      const addOneOnce = R.once(x => x + 1);
   *      addOneOnce(10); //=> 11
   *      addOneOnce(addOneOnce(50)); //=> 11
   */
  var once = /*#__PURE__*/_curry1(function once(fn) {
    var called = false;
    var result;
    return _arity(fn.length, function () {
      if (called) {
        return result;
      }
      called = true;
      result = fn.apply(this, arguments);
      return result;
    });
  });

  function _assertPromise(name, p) {
    if (p == null || !_isFunction(p.then)) {
      throw new TypeError('`' + name + '` expected a Promise, received ' + _toString(p, []));
    }
  }

  /**
   * Returns the result of applying the onFailure function to the value inside
   * a failed promise. This is useful for handling rejected promises
   * inside function compositions.
   *
   * @func
   * @memberOf R
   * @category Function
   * @sig (e -> b) -> (Promise e a) -> (Promise e b)
   * @sig (e -> (Promise f b)) -> (Promise e a) -> (Promise f b)
   * @param {Function} onFailure The function to apply. Can return a value or a promise of a value.
   * @param {Promise} p
   * @return {Promise} The result of calling `p.then(null, onFailure)`
   * @see R.then
   * @example
   *
   *      var failedFetch = (id) => Promise.reject('bad ID');
   *      var useDefault = () => ({ firstName: 'Bob', lastName: 'Loblaw' })
   *
   *      //recoverFromFailure :: String -> Promise ({firstName, lastName})
   *      var recoverFromFailure = R.pipe(
   *        failedFetch,
   *        R.otherwise(useDefault),
   *        R.then(R.pick(['firstName', 'lastName'])),
   *      );
   *      recoverFromFailure(12345).then(console.log)
   */
  var otherwise = /*#__PURE__*/_curry2(function otherwise(f, p) {
    _assertPromise('otherwise', p);

    return p.then(null, f);
  });

  // `Identity` is a functor that holds a single value, where `map` simply
  // transforms the held value with the provided function.
  var Identity = function (x) {
    return { value: x, map: function (f) {
        return Identity(f(x));
      } };
  };

  /**
   * Returns the result of "setting" the portion of the given data structure
   * focused by the given lens to the result of applying the given function to
   * the focused value.
   *
   * @func
   * @memberOf R
   * @since v0.16.0
   * @category Object
   * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
   * @sig Lens s a -> (a -> a) -> s -> s
   * @param {Lens} lens
   * @param {*} v
   * @param {*} x
   * @return {*}
   * @see R.prop, R.lensIndex, R.lensProp
   * @example
   *
   *      const headLens = R.lensIndex(0);
   *
   *      R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']
   */
  var over = /*#__PURE__*/_curry3(function over(lens, f, x) {
    // The value returned by the getter function is first transformed with `f`,
    // then set as the value of an `Identity`. This is then mapped over with the
    // setter function of the lens.
    return lens(function (y) {
      return Identity(f(y));
    })(x).value;
  });

  /**
   * Takes two arguments, `fst` and `snd`, and returns `[fst, snd]`.
   *
   * @func
   * @memberOf R
   * @since v0.18.0
   * @category List
   * @sig a -> b -> (a,b)
   * @param {*} fst
   * @param {*} snd
   * @return {Array}
   * @see R.objOf, R.of
   * @example
   *
   *      R.pair('foo', 'bar'); //=> ['foo', 'bar']
   */
  var pair = /*#__PURE__*/_curry2(function pair(fst, snd) {
    return [fst, snd];
  });

  function _createPartialApplicator(concat) {
    return _curry2(function (fn, args) {
      return _arity(Math.max(0, fn.length - args.length), function () {
        return fn.apply(this, concat(args, arguments));
      });
    });
  }

  /**
   * Takes a function `f` and a list of arguments, and returns a function `g`.
   * When applied, `g` returns the result of applying `f` to the arguments
   * provided initially followed by the arguments provided to `g`.
   *
   * @func
   * @memberOf R
   * @since v0.10.0
   * @category Function
   * @sig ((a, b, c, ..., n) -> x) -> [a, b, c, ...] -> ((d, e, f, ..., n) -> x)
   * @param {Function} f
   * @param {Array} args
   * @return {Function}
   * @see R.partialRight, R.curry
   * @example
   *
   *      const multiply2 = (a, b) => a * b;
   *      const double = R.partial(multiply2, [2]);
   *      double(2); //=> 4
   *
   *      const greet = (salutation, title, firstName, lastName) =>
   *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
   *
   *      const sayHello = R.partial(greet, ['Hello']);
   *      const sayHelloToMs = R.partial(sayHello, ['Ms.']);
   *      sayHelloToMs('Jane', 'Jones'); //=> 'Hello, Ms. Jane Jones!'
   * @symb R.partial(f, [a, b])(c, d) = f(a, b, c, d)
   */
  var partial = /*#__PURE__*/_createPartialApplicator(_concat);

  /**
   * Takes a function `f` and a list of arguments, and returns a function `g`.
   * When applied, `g` returns the result of applying `f` to the arguments
   * provided to `g` followed by the arguments provided initially.
   *
   * @func
   * @memberOf R
   * @since v0.10.0
   * @category Function
   * @sig ((a, b, c, ..., n) -> x) -> [d, e, f, ..., n] -> ((a, b, c, ...) -> x)
   * @param {Function} f
   * @param {Array} args
   * @return {Function}
   * @see R.partial
   * @example
   *
   *      const greet = (salutation, title, firstName, lastName) =>
   *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
   *
   *      const greetMsJaneJones = R.partialRight(greet, ['Ms.', 'Jane', 'Jones']);
   *
   *      greetMsJaneJones('Hello'); //=> 'Hello, Ms. Jane Jones!'
   * @symb R.partialRight(f, [a, b])(c, d) = f(c, d, a, b)
   */
  var partialRight = /*#__PURE__*/_createPartialApplicator( /*#__PURE__*/flip(_concat));

  /**
   * Takes a predicate and a list or other `Filterable` object and returns the
   * pair of filterable objects of the same type of elements which do and do not
   * satisfy, the predicate, respectively. Filterable objects include plain objects or any object
   * that has a filter method such as `Array`.
   *
   * @func
   * @memberOf R
   * @since v0.1.4
   * @category List
   * @sig Filterable f => (a -> Boolean) -> f a -> [f a, f a]
   * @param {Function} pred A predicate to determine which side the element belongs to.
   * @param {Array} filterable the list (or other filterable) to partition.
   * @return {Array} An array, containing first the subset of elements that satisfy the
   *         predicate, and second the subset of elements that do not satisfy.
   * @see R.filter, R.reject
   * @example
   *
   *      R.partition(R.includes('s'), ['sss', 'ttt', 'foo', 'bars']);
   *      // => [ [ 'sss', 'bars' ],  [ 'ttt', 'foo' ] ]
   *
   *      R.partition(R.includes('s'), { a: 'sss', b: 'ttt', foo: 'bars' });
   *      // => [ { a: 'sss', foo: 'bars' }, { b: 'ttt' }  ]
   */
  var partition = /*#__PURE__*/juxt([filter, reject]);

  /**
   * Determines whether a nested path on an object has a specific value, in
   * [`R.equals`](#equals) terms. Most likely used to filter a list.
   *
   * @func
   * @memberOf R
   * @since v0.7.0
   * @category Relation
   * @typedefn Idx = String | Int
   * @sig [Idx] -> a -> {a} -> Boolean
   * @param {Array} path The path of the nested property to use
   * @param {*} val The value to compare the nested property with
   * @param {Object} obj The object to check the nested property in
   * @return {Boolean} `true` if the value equals the nested object property,
   *         `false` otherwise.
   * @example
   *
   *      const user1 = { address: { zipCode: 90210 } };
   *      const user2 = { address: { zipCode: 55555 } };
   *      const user3 = { name: 'Bob' };
   *      const users = [ user1, user2, user3 ];
   *      const isFamous = R.pathEq(['address', 'zipCode'], 90210);
   *      R.filter(isFamous, users); //=> [ user1 ]
   */
  var pathEq = /*#__PURE__*/_curry3(function pathEq(_path, val, obj) {
    return equals(path(_path, obj), val);
  });

  /**
   * If the given, non-null object has a value at the given path, returns the
   * value at that path. Otherwise returns the provided default value.
   *
   * @func
   * @memberOf R
   * @since v0.18.0
   * @category Object
   * @typedefn Idx = String | Int
   * @sig a -> [Idx] -> {a} -> a
   * @param {*} d The default value.
   * @param {Array} p The path to use.
   * @param {Object} obj The object to retrieve the nested property from.
   * @return {*} The data at `path` of the supplied object or the default value.
   * @example
   *
   *      R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); //=> 2
   *      R.pathOr('N/A', ['a', 'b'], {c: {b: 2}}); //=> "N/A"
   */
  var pathOr = /*#__PURE__*/_curry3(function pathOr(d, p, obj) {
    return defaultTo(d, path(p, obj));
  });

  /**
   * Returns `true` if the specified object property at given path satisfies the
   * given predicate; `false` otherwise.
   *
   * @func
   * @memberOf R
   * @since v0.19.0
   * @category Logic
   * @typedefn Idx = String | Int
   * @sig (a -> Boolean) -> [Idx] -> {a} -> Boolean
   * @param {Function} pred
   * @param {Array} propPath
   * @param {*} obj
   * @return {Boolean}
   * @see R.propSatisfies, R.path
   * @example
   *
   *      R.pathSatisfies(y => y > 0, ['x', 'y'], {x: {y: 2}}); //=> true
   */
  var pathSatisfies = /*#__PURE__*/_curry3(function pathSatisfies(pred, propPath, obj) {
    return propPath.length > 0 && pred(path(propPath, obj));
  });

  /**
   * Returns a partial copy of an object containing only the keys specified. If
   * the key does not exist, the property is ignored.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Object
   * @sig [k] -> {k: v} -> {k: v}
   * @param {Array} names an array of String property names to copy onto a new object
   * @param {Object} obj The object to copy from
   * @return {Object} A new object with only properties from `names` on it.
   * @see R.omit, R.props
   * @example
   *
   *      R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
   *      R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}
   */
  var pick = /*#__PURE__*/_curry2(function pick(names, obj) {
    var result = {};
    var idx = 0;
    while (idx < names.length) {
      if (names[idx] in obj) {
        result[names[idx]] = obj[names[idx]];
      }
      idx += 1;
    }
    return result;
  });

  /**
   * Similar to `pick` except that this one includes a `key: undefined` pair for
   * properties that don't exist.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Object
   * @sig [k] -> {k: v} -> {k: v}
   * @param {Array} names an array of String property names to copy onto a new object
   * @param {Object} obj The object to copy from
   * @return {Object} A new object with only properties from `names` on it.
   * @see R.pick
   * @example
   *
   *      R.pickAll(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
   *      R.pickAll(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, e: undefined, f: undefined}
   */
  var pickAll = /*#__PURE__*/_curry2(function pickAll(names, obj) {
    var result = {};
    var idx = 0;
    var len = names.length;
    while (idx < len) {
      var name = names[idx];
      result[name] = obj[name];
      idx += 1;
    }
    return result;
  });

  /**
   * Returns a partial copy of an object containing only the keys that satisfy
   * the supplied predicate.
   *
   * @func
   * @memberOf R
   * @since v0.8.0
   * @category Object
   * @sig ((v, k) -> Boolean) -> {k: v} -> {k: v}
   * @param {Function} pred A predicate to determine whether or not a key
   *        should be included on the output object.
   * @param {Object} obj The object to copy from
   * @return {Object} A new object with only properties that satisfy `pred`
   *         on it.
   * @see R.pick, R.filter
   * @example
   *
   *      const isUpperCase = (val, key) => key.toUpperCase() === key;
   *      R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}
   */
  var pickBy = /*#__PURE__*/_curry2(function pickBy(test, obj) {
    var result = {};
    for (var prop in obj) {
      if (test(obj[prop], prop, obj)) {
        result[prop] = obj[prop];
      }
    }
    return result;
  });

  /**
   * Returns the left-to-right Kleisli composition of the provided functions,
   * each of which must return a value of a type supported by [`chain`](#chain).
   *
   * `R.pipeK(f, g, h)` is equivalent to `R.pipe(f, R.chain(g), R.chain(h))`.
   *
   * @func
   * @memberOf R
   * @since v0.16.0
   * @category Function
   * @sig Chain m => ((a -> m b), (b -> m c), ..., (y -> m z)) -> (a -> m z)
   * @param {...Function}
   * @return {Function}
   * @see R.composeK
   * @deprecated since v0.26.0
   * @example
   *
   *      //  parseJson :: String -> Maybe *
   *      //  get :: String -> Object -> Maybe *
   *
   *      //  getStateCode :: Maybe String -> Maybe String
   *      const getStateCode = R.pipeK(
   *        parseJson,
   *        get('user'),
   *        get('address'),
   *        get('state'),
   *        R.compose(Maybe.of, R.toUpper)
   *      );
   *
   *      getStateCode('{"user":{"address":{"state":"ny"}}}');
   *      //=> Just('NY')
   *      getStateCode('[Invalid JSON]');
   *      //=> Nothing()
   * @symb R.pipeK(f, g, h)(a) = R.chain(h, R.chain(g, f(a)))
   */
  function pipeK() {
    if (arguments.length === 0) {
      throw new Error('pipeK requires at least one argument');
    }
    return composeK.apply(this, reverse(arguments));
  }

  /**
   * Returns a new list with the given element at the front, followed by the
   * contents of the list.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig a -> [a] -> [a]
   * @param {*} el The item to add to the head of the output list.
   * @param {Array} list The array to add to the tail of the output list.
   * @return {Array} A new array.
   * @see R.append
   * @example
   *
   *      R.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']
   */
  var prepend = /*#__PURE__*/_curry2(function prepend(el, list) {
    return _concat([el], list);
  });

  /**
   * Multiplies together all the elements of a list.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Math
   * @sig [Number] -> Number
   * @param {Array} list An array of numbers
   * @return {Number} The product of all the numbers in the list.
   * @see R.reduce
   * @example
   *
   *      R.product([2,4,6,8,100,1]); //=> 38400
   */
  var product = /*#__PURE__*/reduce(multiply, 1);

  /**
   * Accepts a function `fn` and a list of transformer functions and returns a
   * new curried function. When the new function is invoked, it calls the
   * function `fn` with parameters consisting of the result of calling each
   * supplied handler on successive arguments to the new function.
   *
   * If more arguments are passed to the returned function than transformer
   * functions, those arguments are passed directly to `fn` as additional
   * parameters. If you expect additional arguments that don't need to be
   * transformed, although you can ignore them, it's best to pass an identity
   * function so that the new function reports the correct arity.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Function
   * @sig ((x1, x2, ...) -> z) -> [(a -> x1), (b -> x2), ...] -> (a -> b -> ... -> z)
   * @param {Function} fn The function to wrap.
   * @param {Array} transformers A list of transformer functions
   * @return {Function} The wrapped function.
   * @see R.converge
   * @example
   *
   *      R.useWith(Math.pow, [R.identity, R.identity])(3, 4); //=> 81
   *      R.useWith(Math.pow, [R.identity, R.identity])(3)(4); //=> 81
   *      R.useWith(Math.pow, [R.dec, R.inc])(3, 4); //=> 32
   *      R.useWith(Math.pow, [R.dec, R.inc])(3)(4); //=> 32
   * @symb R.useWith(f, [g, h])(a, b) = f(g(a), h(b))
   */
  var useWith = /*#__PURE__*/_curry2(function useWith(fn, transformers) {
    return curryN(transformers.length, function () {
      var args = [];
      var idx = 0;
      while (idx < transformers.length) {
        args.push(transformers[idx].call(this, arguments[idx]));
        idx += 1;
      }
      return fn.apply(this, args.concat(Array.prototype.slice.call(arguments, transformers.length)));
    });
  });

  /**
   * Reasonable analog to SQL `select` statement.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Object
   * @category Relation
   * @sig [k] -> [{k: v}] -> [{k: v}]
   * @param {Array} props The property names to project
   * @param {Array} objs The objects to query
   * @return {Array} An array of objects with just the `props` properties.
   * @example
   *
   *      const abby = {name: 'Abby', age: 7, hair: 'blond', grade: 2};
   *      const fred = {name: 'Fred', age: 12, hair: 'brown', grade: 7};
   *      const kids = [abby, fred];
   *      R.project(['name', 'grade'], kids); //=> [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]
   */
  var project = /*#__PURE__*/useWith(_map, [pickAll, identity]); // passing `identity` gives correct arity

  /**
   * Returns `true` if the specified object property is equal, in
   * [`R.equals`](#equals) terms, to the given value; `false` otherwise.
   * You can test multiple properties with [`R.whereEq`](#whereEq).
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Relation
   * @sig String -> a -> Object -> Boolean
   * @param {String} name
   * @param {*} val
   * @param {*} obj
   * @return {Boolean}
   * @see R.whereEq, R.propSatisfies, R.equals
   * @example
   *
   *      const abby = {name: 'Abby', age: 7, hair: 'blond'};
   *      const fred = {name: 'Fred', age: 12, hair: 'brown'};
   *      const rusty = {name: 'Rusty', age: 10, hair: 'brown'};
   *      const alois = {name: 'Alois', age: 15, disposition: 'surly'};
   *      const kids = [abby, fred, rusty, alois];
   *      const hasBrownHair = R.propEq('hair', 'brown');
   *      R.filter(hasBrownHair, kids); //=> [fred, rusty]
   */
  var propEq = /*#__PURE__*/_curry3(function propEq(name, val, obj) {
    return equals(val, obj[name]);
  });

  /**
   * Returns `true` if the specified object property is of the given type;
   * `false` otherwise.
   *
   * @func
   * @memberOf R
   * @since v0.16.0
   * @category Type
   * @sig Type -> String -> Object -> Boolean
   * @param {Function} type
   * @param {String} name
   * @param {*} obj
   * @return {Boolean}
   * @see R.is, R.propSatisfies
   * @example
   *
   *      R.propIs(Number, 'x', {x: 1, y: 2});  //=> true
   *      R.propIs(Number, 'x', {x: 'foo'});    //=> false
   *      R.propIs(Number, 'x', {});            //=> false
   */
  var propIs = /*#__PURE__*/_curry3(function propIs(type, name, obj) {
    return is(type, obj[name]);
  });

  /**
   * If the given, non-null object has an own property with the specified name,
   * returns the value of that property. Otherwise returns the provided default
   * value.
   *
   * @func
   * @memberOf R
   * @since v0.6.0
   * @category Object
   * @sig a -> String -> Object -> a
   * @param {*} val The default value.
   * @param {String} p The name of the property to return.
   * @param {Object} obj The object to query.
   * @return {*} The value of given property of the supplied object or the default value.
   * @example
   *
   *      const alice = {
   *        name: 'ALICE',
   *        age: 101
   *      };
   *      const favorite = R.prop('favoriteLibrary');
   *      const favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');
   *
   *      favorite(alice);  //=> undefined
   *      favoriteWithDefault(alice);  //=> 'Ramda'
   */
  var propOr = /*#__PURE__*/_curry3(function propOr(val, p, obj) {
    return pathOr(val, [p], obj);
  });

  /**
   * Returns `true` if the specified object property satisfies the given
   * predicate; `false` otherwise. You can test multiple properties with
   * [`R.where`](#where).
   *
   * @func
   * @memberOf R
   * @since v0.16.0
   * @category Logic
   * @sig (a -> Boolean) -> String -> {String: a} -> Boolean
   * @param {Function} pred
   * @param {String} name
   * @param {*} obj
   * @return {Boolean}
   * @see R.where, R.propEq, R.propIs
   * @example
   *
   *      R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}); //=> true
   */
  var propSatisfies = /*#__PURE__*/_curry3(function propSatisfies(pred, name, obj) {
    return pred(obj[name]);
  });

  /**
   * Acts as multiple `prop`: array of keys in, array of values out. Preserves
   * order.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Object
   * @sig [k] -> {k: v} -> [v]
   * @param {Array} ps The property names to fetch
   * @param {Object} obj The object to query
   * @return {Array} The corresponding values or partially applied function.
   * @example
   *
   *      R.props(['x', 'y'], {x: 1, y: 2}); //=> [1, 2]
   *      R.props(['c', 'a', 'b'], {b: 2, a: 1}); //=> [undefined, 1, 2]
   *
   *      const fullName = R.compose(R.join(' '), R.props(['first', 'last']));
   *      fullName({last: 'Bullet-Tooth', age: 33, first: 'Tony'}); //=> 'Tony Bullet-Tooth'
   */
  var props = /*#__PURE__*/_curry2(function props(ps, obj) {
    var len = ps.length;
    var out = [];
    var idx = 0;

    while (idx < len) {
      out[idx] = obj[ps[idx]];
      idx += 1;
    }

    return out;
  });

  /**
   * Returns a list of numbers from `from` (inclusive) to `to` (exclusive).
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig Number -> Number -> [Number]
   * @param {Number} from The first number in the list.
   * @param {Number} to One more than the last number in the list.
   * @return {Array} The list of numbers in the set `[a, b)`.
   * @example
   *
   *      R.range(1, 5);    //=> [1, 2, 3, 4]
   *      R.range(50, 53);  //=> [50, 51, 52]
   */
  var range = /*#__PURE__*/_curry2(function range(from, to) {
    if (!(_isNumber(from) && _isNumber(to))) {
      throw new TypeError('Both arguments to range must be numbers');
    }
    var result = [];
    var n = from;
    while (n < to) {
      result.push(n);
      n += 1;
    }
    return result;
  });

  /**
   * Returns a single item by iterating through the list, successively calling
   * the iterator function and passing it an accumulator value and the current
   * value from the array, and then passing the result to the next call.
   *
   * Similar to [`reduce`](#reduce), except moves through the input list from the
   * right to the left.
   *
   * The iterator function receives two values: *(value, acc)*, while the arguments'
   * order of `reduce`'s iterator function is *(acc, value)*.
   *
   * Note: `R.reduceRight` does not skip deleted or unassigned indices (sparse
   * arrays), unlike the native `Array.prototype.reduceRight` method. For more details
   * on this behavior, see:
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#Description
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig ((a, b) -> b) -> b -> [a] -> b
   * @param {Function} fn The iterator function. Receives two values, the current element from the array
   *        and the accumulator.
   * @param {*} acc The accumulator value.
   * @param {Array} list The list to iterate over.
   * @return {*} The final, accumulated value.
   * @see R.reduce, R.addIndex
   * @example
   *
   *      R.reduceRight(R.subtract, 0, [1, 2, 3, 4]) // => (1 - (2 - (3 - (4 - 0)))) = -2
   *      //    -               -2
   *      //   / \              / \
   *      //  1   -            1   3
   *      //     / \              / \
   *      //    2   -     ==>    2  -1
   *      //       / \              / \
   *      //      3   -            3   4
   *      //         / \              / \
   *      //        4   0            4   0
   *
   * @symb R.reduceRight(f, a, [b, c, d]) = f(b, f(c, f(d, a)))
   */
  var reduceRight = /*#__PURE__*/_curry3(function reduceRight(fn, acc, list) {
    var idx = list.length - 1;
    while (idx >= 0) {
      acc = fn(list[idx], acc);
      idx -= 1;
    }
    return acc;
  });

  /**
   * Like [`reduce`](#reduce), `reduceWhile` returns a single item by iterating
   * through the list, successively calling the iterator function. `reduceWhile`
   * also takes a predicate that is evaluated before each step. If the predicate
   * returns `false`, it "short-circuits" the iteration and returns the current
   * value of the accumulator.
   *
   * @func
   * @memberOf R
   * @since v0.22.0
   * @category List
   * @sig ((a, b) -> Boolean) -> ((a, b) -> a) -> a -> [b] -> a
   * @param {Function} pred The predicate. It is passed the accumulator and the
   *        current element.
   * @param {Function} fn The iterator function. Receives two values, the
   *        accumulator and the current element.
   * @param {*} a The accumulator value.
   * @param {Array} list The list to iterate over.
   * @return {*} The final, accumulated value.
   * @see R.reduce, R.reduced
   * @example
   *
   *      const isOdd = (acc, x) => x % 2 === 1;
   *      const xs = [1, 3, 5, 60, 777, 800];
   *      R.reduceWhile(isOdd, R.add, 0, xs); //=> 9
   *
   *      const ys = [2, 4, 6]
   *      R.reduceWhile(isOdd, R.add, 111, ys); //=> 111
   */
  var reduceWhile = /*#__PURE__*/_curryN(4, [], function _reduceWhile(pred, fn, a, list) {
    return _reduce(function (acc, x) {
      return pred(acc, x) ? fn(acc, x) : _reduced(acc);
    }, a, list);
  });

  /**
   * Returns a value wrapped to indicate that it is the final value of the reduce
   * and transduce functions. The returned value should be considered a black
   * box: the internal structure is not guaranteed to be stable.
   *
   * Note: this optimization is only available to the below functions:
   * - [`reduce`](#reduce)
   * - [`reduceWhile`](#reduceWhile)
   * - [`transduce`](#transduce)
   *
   * @func
   * @memberOf R
   * @since v0.15.0
   * @category List
   * @sig a -> *
   * @param {*} x The final value of the reduce.
   * @return {*} The wrapped value.
   * @see R.reduce, R.reduceWhile, R.transduce
   * @example
   *
   *     R.reduce(
   *       (acc, item) => item > 3 ? R.reduced(acc) : acc.concat(item),
   *       [],
   *       [1, 2, 3, 4, 5]) // [1, 2, 3]
   */
  var reduced = /*#__PURE__*/_curry1(_reduced);

  /**
   * Calls an input function `n` times, returning an array containing the results
   * of those function calls.
   *
   * `fn` is passed one argument: The current value of `n`, which begins at `0`
   * and is gradually incremented to `n - 1`.
   *
   * @func
   * @memberOf R
   * @since v0.2.3
   * @category List
   * @sig (Number -> a) -> Number -> [a]
   * @param {Function} fn The function to invoke. Passed one argument, the current value of `n`.
   * @param {Number} n A value between `0` and `n - 1`. Increments after each function call.
   * @return {Array} An array containing the return values of all calls to `fn`.
   * @see R.repeat
   * @example
   *
   *      R.times(R.identity, 5); //=> [0, 1, 2, 3, 4]
   * @symb R.times(f, 0) = []
   * @symb R.times(f, 1) = [f(0)]
   * @symb R.times(f, 2) = [f(0), f(1)]
   */
  var times = /*#__PURE__*/_curry2(function times(fn, n) {
    var len = Number(n);
    var idx = 0;
    var list;

    if (len < 0 || isNaN(len)) {
      throw new RangeError('n must be a non-negative number');
    }
    list = new Array(len);
    while (idx < len) {
      list[idx] = fn(idx);
      idx += 1;
    }
    return list;
  });

  /**
   * Returns a fixed list of size `n` containing a specified identical value.
   *
   * @func
   * @memberOf R
   * @since v0.1.1
   * @category List
   * @sig a -> n -> [a]
   * @param {*} value The value to repeat.
   * @param {Number} n The desired size of the output list.
   * @return {Array} A new array containing `n` `value`s.
   * @see R.times
   * @example
   *
   *      R.repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']
   *
   *      const obj = {};
   *      const repeatedObjs = R.repeat(obj, 5); //=> [{}, {}, {}, {}, {}]
   *      repeatedObjs[0] === repeatedObjs[1]; //=> true
   * @symb R.repeat(a, 0) = []
   * @symb R.repeat(a, 1) = [a]
   * @symb R.repeat(a, 2) = [a, a]
   */
  var repeat = /*#__PURE__*/_curry2(function repeat(value, n) {
    return times(always(value), n);
  });

  /**
   * Replace a substring or regex match in a string with a replacement.
   *
   * The first two parameters correspond to the parameters of the
   * `String.prototype.replace()` function, so the second parameter can also be a
   * function.
   *
   * @func
   * @memberOf R
   * @since v0.7.0
   * @category String
   * @sig RegExp|String -> String -> String -> String
   * @param {RegExp|String} pattern A regular expression or a substring to match.
   * @param {String} replacement The string to replace the matches with.
   * @param {String} str The String to do the search and replacement in.
   * @return {String} The result.
   * @example
   *
   *      R.replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'
   *      R.replace(/foo/, 'bar', 'foo foo foo'); //=> 'bar foo foo'
   *
   *      // Use the "g" (global) flag to replace all occurrences:
   *      R.replace(/foo/g, 'bar', 'foo foo foo'); //=> 'bar bar bar'
   */
  var replace = /*#__PURE__*/_curry3(function replace(regex, replacement, str) {
    return str.replace(regex, replacement);
  });

  /**
   * Scan is similar to [`reduce`](#reduce), but returns a list of successively
   * reduced values from the left
   *
   * @func
   * @memberOf R
   * @since v0.10.0
   * @category List
   * @sig ((a, b) -> a) -> a -> [b] -> [a]
   * @param {Function} fn The iterator function. Receives two values, the accumulator and the
   *        current element from the array
   * @param {*} acc The accumulator value.
   * @param {Array} list The list to iterate over.
   * @return {Array} A list of all intermediately reduced values.
   * @see R.reduce, R.mapAccum
   * @example
   *
   *      const numbers = [1, 2, 3, 4];
   *      const factorials = R.scan(R.multiply, 1, numbers); //=> [1, 1, 2, 6, 24]
   * @symb R.scan(f, a, [b, c]) = [a, f(a, b), f(f(a, b), c)]
   */
  var scan = /*#__PURE__*/_curry3(function scan(fn, acc, list) {
    var idx = 0;
    var len = list.length;
    var result = [acc];
    while (idx < len) {
      acc = fn(acc, list[idx]);
      result[idx + 1] = acc;
      idx += 1;
    }
    return result;
  });

  /**
   * Transforms a [Traversable](https://github.com/fantasyland/fantasy-land#traversable)
   * of [Applicative](https://github.com/fantasyland/fantasy-land#applicative) into an
   * Applicative of Traversable.
   *
   * Dispatches to the `sequence` method of the second argument, if present.
   *
   * @func
   * @memberOf R
   * @since v0.19.0
   * @category List
   * @sig (Applicative f, Traversable t) => (a -> f a) -> t (f a) -> f (t a)
   * @param {Function} of
   * @param {*} traversable
   * @return {*}
   * @see R.traverse
   * @example
   *
   *      R.sequence(Maybe.of, [Just(1), Just(2), Just(3)]);   //=> Just([1, 2, 3])
   *      R.sequence(Maybe.of, [Just(1), Just(2), Nothing()]); //=> Nothing()
   *
   *      R.sequence(R.of, Just([1, 2, 3])); //=> [Just(1), Just(2), Just(3)]
   *      R.sequence(R.of, Nothing());       //=> [Nothing()]
   */
  var sequence = /*#__PURE__*/_curry2(function sequence(of, traversable) {
    return typeof traversable.sequence === 'function' ? traversable.sequence(of) : reduceRight(function (x, acc) {
      return ap(map(prepend, x), acc);
    }, of([]), traversable);
  });

  /**
   * Returns the result of "setting" the portion of the given data structure
   * focused by the given lens to the given value.
   *
   * @func
   * @memberOf R
   * @since v0.16.0
   * @category Object
   * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
   * @sig Lens s a -> a -> s -> s
   * @param {Lens} lens
   * @param {*} v
   * @param {*} x
   * @return {*}
   * @see R.prop, R.lensIndex, R.lensProp
   * @example
   *
   *      const xLens = R.lensProp('x');
   *
   *      R.set(xLens, 4, {x: 1, y: 2});  //=> {x: 4, y: 2}
   *      R.set(xLens, 8, {x: 1, y: 2});  //=> {x: 8, y: 2}
   */
  var set = /*#__PURE__*/_curry3(function set(lens, v, x) {
    return over(lens, always(v), x);
  });

  /**
   * Returns a copy of the list, sorted according to the comparator function,
   * which should accept two values at a time and return a negative number if the
   * first value is smaller, a positive number if it's larger, and zero if they
   * are equal. Please note that this is a **copy** of the list. It does not
   * modify the original.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig ((a, a) -> Number) -> [a] -> [a]
   * @param {Function} comparator A sorting function :: a -> b -> Int
   * @param {Array} list The list to sort
   * @return {Array} a new array with its elements sorted by the comparator function.
   * @example
   *
   *      const diff = function(a, b) { return a - b; };
   *      R.sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]
   */
  var sort = /*#__PURE__*/_curry2(function sort(comparator, list) {
    return Array.prototype.slice.call(list, 0).sort(comparator);
  });

  /**
   * Sorts the list according to the supplied function.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Relation
   * @sig Ord b => (a -> b) -> [a] -> [a]
   * @param {Function} fn
   * @param {Array} list The list to sort.
   * @return {Array} A new list sorted by the keys generated by `fn`.
   * @example
   *
   *      const sortByFirstItem = R.sortBy(R.prop(0));
   *      const pairs = [[-1, 1], [-2, 2], [-3, 3]];
   *      sortByFirstItem(pairs); //=> [[-3, 3], [-2, 2], [-1, 1]]
   *
   *      const sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('name')));
   *      const alice = {
   *        name: 'ALICE',
   *        age: 101
   *      };
   *      const bob = {
   *        name: 'Bob',
   *        age: -10
   *      };
   *      const clara = {
   *        name: 'clara',
   *        age: 314.159
   *      };
   *      const people = [clara, bob, alice];
   *      sortByNameCaseInsensitive(people); //=> [alice, bob, clara]
   */
  var sortBy = /*#__PURE__*/_curry2(function sortBy(fn, list) {
    return Array.prototype.slice.call(list, 0).sort(function (a, b) {
      var aa = fn(a);
      var bb = fn(b);
      return aa < bb ? -1 : aa > bb ? 1 : 0;
    });
  });

  /**
   * Sorts a list according to a list of comparators.
   *
   * @func
   * @memberOf R
   * @since v0.23.0
   * @category Relation
   * @sig [(a, a) -> Number] -> [a] -> [a]
   * @param {Array} functions A list of comparator functions.
   * @param {Array} list The list to sort.
   * @return {Array} A new list sorted according to the comarator functions.
   * @example
   *
   *      const alice = {
   *        name: 'alice',
   *        age: 40
   *      };
   *      const bob = {
   *        name: 'bob',
   *        age: 30
   *      };
   *      const clara = {
   *        name: 'clara',
   *        age: 40
   *      };
   *      const people = [clara, bob, alice];
   *      const ageNameSort = R.sortWith([
   *        R.descend(R.prop('age')),
   *        R.ascend(R.prop('name'))
   *      ]);
   *      ageNameSort(people); //=> [alice, clara, bob]
   */
  var sortWith = /*#__PURE__*/_curry2(function sortWith(fns, list) {
    return Array.prototype.slice.call(list, 0).sort(function (a, b) {
      var result = 0;
      var i = 0;
      while (result === 0 && i < fns.length) {
        result = fns[i](a, b);
        i += 1;
      }
      return result;
    });
  });

  /**
   * Splits a string into an array of strings based on the given
   * separator.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category String
   * @sig (String | RegExp) -> String -> [String]
   * @param {String|RegExp} sep The pattern.
   * @param {String} str The string to separate into an array.
   * @return {Array} The array of strings from `str` separated by `str`.
   * @see R.join
   * @example
   *
   *      const pathComponents = R.split('/');
   *      R.tail(pathComponents('/usr/local/bin/node')); //=> ['usr', 'local', 'bin', 'node']
   *
   *      R.split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']
   */
  var split = /*#__PURE__*/invoker(1, 'split');

  /**
   * Splits a given list or string at a given index.
   *
   * @func
   * @memberOf R
   * @since v0.19.0
   * @category List
   * @sig Number -> [a] -> [[a], [a]]
   * @sig Number -> String -> [String, String]
   * @param {Number} index The index where the array/string is split.
   * @param {Array|String} array The array/string to be split.
   * @return {Array}
   * @example
   *
   *      R.splitAt(1, [1, 2, 3]);          //=> [[1], [2, 3]]
   *      R.splitAt(5, 'hello world');      //=> ['hello', ' world']
   *      R.splitAt(-1, 'foobar');          //=> ['fooba', 'r']
   */
  var splitAt = /*#__PURE__*/_curry2(function splitAt(index, array) {
    return [slice(0, index, array), slice(index, length(array), array)];
  });

  /**
   * Splits a collection into slices of the specified length.
   *
   * @func
   * @memberOf R
   * @since v0.16.0
   * @category List
   * @sig Number -> [a] -> [[a]]
   * @sig Number -> String -> [String]
   * @param {Number} n
   * @param {Array} list
   * @return {Array}
   * @example
   *
   *      R.splitEvery(3, [1, 2, 3, 4, 5, 6, 7]); //=> [[1, 2, 3], [4, 5, 6], [7]]
   *      R.splitEvery(3, 'foobarbaz'); //=> ['foo', 'bar', 'baz']
   */
  var splitEvery = /*#__PURE__*/_curry2(function splitEvery(n, list) {
    if (n <= 0) {
      throw new Error('First argument to splitEvery must be a positive integer');
    }
    var result = [];
    var idx = 0;
    while (idx < list.length) {
      result.push(slice(idx, idx += n, list));
    }
    return result;
  });

  /**
   * Takes a list and a predicate and returns a pair of lists with the following properties:
   *
   *  - the result of concatenating the two output lists is equivalent to the input list;
   *  - none of the elements of the first output list satisfies the predicate; and
   *  - if the second output list is non-empty, its first element satisfies the predicate.
   *
   * @func
   * @memberOf R
   * @since v0.19.0
   * @category List
   * @sig (a -> Boolean) -> [a] -> [[a], [a]]
   * @param {Function} pred The predicate that determines where the array is split.
   * @param {Array} list The array to be split.
   * @return {Array}
   * @example
   *
   *      R.splitWhen(R.equals(2), [1, 2, 3, 1, 2, 3]);   //=> [[1], [2, 3, 1, 2, 3]]
   */
  var splitWhen = /*#__PURE__*/_curry2(function splitWhen(pred, list) {
    var idx = 0;
    var len = list.length;
    var prefix = [];

    while (idx < len && !pred(list[idx])) {
      prefix.push(list[idx]);
      idx += 1;
    }

    return [prefix, Array.prototype.slice.call(list, idx)];
  });

  /**
   * Checks if a list starts with the provided sublist.
   *
   * Similarly, checks if a string starts with the provided substring.
   *
   * @func
   * @memberOf R
   * @since v0.24.0
   * @category List
   * @sig [a] -> [a] -> Boolean
   * @sig String -> String -> Boolean
   * @param {*} prefix
   * @param {*} list
   * @return {Boolean}
   * @see R.endsWith
   * @example
   *
   *      R.startsWith('a', 'abc')                //=> true
   *      R.startsWith('b', 'abc')                //=> false
   *      R.startsWith(['a'], ['a', 'b', 'c'])    //=> true
   *      R.startsWith(['b'], ['a', 'b', 'c'])    //=> false
   */
  var startsWith = /*#__PURE__*/_curry2(function (prefix, list) {
    return equals(take(prefix.length, list), prefix);
  });

  /**
   * Subtracts its second argument from its first argument.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Math
   * @sig Number -> Number -> Number
   * @param {Number} a The first value.
   * @param {Number} b The second value.
   * @return {Number} The result of `a - b`.
   * @see R.add
   * @example
   *
   *      R.subtract(10, 8); //=> 2
   *
   *      const minus5 = R.subtract(R.__, 5);
   *      minus5(17); //=> 12
   *
   *      const complementaryAngle = R.subtract(90);
   *      complementaryAngle(30); //=> 60
   *      complementaryAngle(72); //=> 18
   */
  var subtract = /*#__PURE__*/_curry2(function subtract(a, b) {
    return Number(a) - Number(b);
  });

  /**
   * Finds the set (i.e. no duplicates) of all elements contained in the first or
   * second list, but not both.
   *
   * @func
   * @memberOf R
   * @since v0.19.0
   * @category Relation
   * @sig [*] -> [*] -> [*]
   * @param {Array} list1 The first list.
   * @param {Array} list2 The second list.
   * @return {Array} The elements in `list1` or `list2`, but not both.
   * @see R.symmetricDifferenceWith, R.difference, R.differenceWith
   * @example
   *
   *      R.symmetricDifference([1,2,3,4], [7,6,5,4,3]); //=> [1,2,7,6,5]
   *      R.symmetricDifference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5,1,2]
   */
  var symmetricDifference = /*#__PURE__*/_curry2(function symmetricDifference(list1, list2) {
    return concat(difference(list1, list2), difference(list2, list1));
  });

  /**
   * Finds the set (i.e. no duplicates) of all elements contained in the first or
   * second list, but not both. Duplication is determined according to the value
   * returned by applying the supplied predicate to two list elements.
   *
   * @func
   * @memberOf R
   * @since v0.19.0
   * @category Relation
   * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
   * @param {Function} pred A predicate used to test whether two items are equal.
   * @param {Array} list1 The first list.
   * @param {Array} list2 The second list.
   * @return {Array} The elements in `list1` or `list2`, but not both.
   * @see R.symmetricDifference, R.difference, R.differenceWith
   * @example
   *
   *      const eqA = R.eqBy(R.prop('a'));
   *      const l1 = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
   *      const l2 = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];
   *      R.symmetricDifferenceWith(eqA, l1, l2); //=> [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
   */
  var symmetricDifferenceWith = /*#__PURE__*/_curry3(function symmetricDifferenceWith(pred, list1, list2) {
    return concat(differenceWith(pred, list1, list2), differenceWith(pred, list2, list1));
  });

  /**
   * Returns a new list containing the last `n` elements of a given list, passing
   * each value to the supplied predicate function, and terminating when the
   * predicate function returns `false`. Excludes the element that caused the
   * predicate function to fail. The predicate function is passed one argument:
   * *(value)*.
   *
   * @func
   * @memberOf R
   * @since v0.16.0
   * @category List
   * @sig (a -> Boolean) -> [a] -> [a]
   * @sig (a -> Boolean) -> String -> String
   * @param {Function} fn The function called per iteration.
   * @param {Array} xs The collection to iterate over.
   * @return {Array} A new array.
   * @see R.dropLastWhile, R.addIndex
   * @example
   *
   *      const isNotOne = x => x !== 1;
   *
   *      R.takeLastWhile(isNotOne, [1, 2, 3, 4]); //=> [2, 3, 4]
   *
   *      R.takeLastWhile(x => x !== 'R' , 'Ramda'); //=> 'amda'
   */
  var takeLastWhile = /*#__PURE__*/_curry2(function takeLastWhile(fn, xs) {
    var idx = xs.length - 1;
    while (idx >= 0 && fn(xs[idx])) {
      idx -= 1;
    }
    return slice(idx + 1, Infinity, xs);
  });

  var XTakeWhile = /*#__PURE__*/function () {
    function XTakeWhile(f, xf) {
      this.xf = xf;
      this.f = f;
    }
    XTakeWhile.prototype['@@transducer/init'] = _xfBase.init;
    XTakeWhile.prototype['@@transducer/result'] = _xfBase.result;
    XTakeWhile.prototype['@@transducer/step'] = function (result, input) {
      return this.f(input) ? this.xf['@@transducer/step'](result, input) : _reduced(result);
    };

    return XTakeWhile;
  }();

  var _xtakeWhile = /*#__PURE__*/_curry2(function _xtakeWhile(f, xf) {
    return new XTakeWhile(f, xf);
  });

  /**
   * Returns a new list containing the first `n` elements of a given list,
   * passing each value to the supplied predicate function, and terminating when
   * the predicate function returns `false`. Excludes the element that caused the
   * predicate function to fail. The predicate function is passed one argument:
   * *(value)*.
   *
   * Dispatches to the `takeWhile` method of the second argument, if present.
   *
   * Acts as a transducer if a transformer is given in list position.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig (a -> Boolean) -> [a] -> [a]
   * @sig (a -> Boolean) -> String -> String
   * @param {Function} fn The function called per iteration.
   * @param {Array} xs The collection to iterate over.
   * @return {Array} A new array.
   * @see R.dropWhile, R.transduce, R.addIndex
   * @example
   *
   *      const isNotFour = x => x !== 4;
   *
   *      R.takeWhile(isNotFour, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3]
   *
   *      R.takeWhile(x => x !== 'd' , 'Ramda'); //=> 'Ram'
   */
  var takeWhile = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['takeWhile'], _xtakeWhile, function takeWhile(fn, xs) {
    var idx = 0;
    var len = xs.length;
    while (idx < len && fn(xs[idx])) {
      idx += 1;
    }
    return slice(0, idx, xs);
  }));

  var XTap = /*#__PURE__*/function () {
    function XTap(f, xf) {
      this.xf = xf;
      this.f = f;
    }
    XTap.prototype['@@transducer/init'] = _xfBase.init;
    XTap.prototype['@@transducer/result'] = _xfBase.result;
    XTap.prototype['@@transducer/step'] = function (result, input) {
      this.f(input);
      return this.xf['@@transducer/step'](result, input);
    };

    return XTap;
  }();

  var _xtap = /*#__PURE__*/_curry2(function _xtap(f, xf) {
    return new XTap(f, xf);
  });

  /**
   * Runs the given function with the supplied object, then returns the object.
   *
   * Acts as a transducer if a transformer is given as second parameter.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Function
   * @sig (a -> *) -> a -> a
   * @param {Function} fn The function to call with `x`. The return value of `fn` will be thrown away.
   * @param {*} x
   * @return {*} `x`.
   * @example
   *
   *      const sayX = x => console.log('x is ' + x);
   *      R.tap(sayX, 100); //=> 100
   *      // logs 'x is 100'
   * @symb R.tap(f, a) = a
   */
  var tap = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable([], _xtap, function tap(fn, x) {
    fn(x);
    return x;
  }));

  function _isRegExp(x) {
    return Object.prototype.toString.call(x) === '[object RegExp]';
  }

  /**
   * Determines whether a given string matches a given regular expression.
   *
   * @func
   * @memberOf R
   * @since v0.12.0
   * @category String
   * @sig RegExp -> String -> Boolean
   * @param {RegExp} pattern
   * @param {String} str
   * @return {Boolean}
   * @see R.match
   * @example
   *
   *      R.test(/^x/, 'xyz'); //=> true
   *      R.test(/^y/, 'xyz'); //=> false
   */
  var test = /*#__PURE__*/_curry2(function test(pattern, str) {
    if (!_isRegExp(pattern)) {
      throw new TypeError('‘test’ requires a value of type RegExp as its first argument; received ' + toString$1(pattern));
    }
    return _cloneRegExp(pattern).test(str);
  });

  /**
   * Returns the result of applying the onSuccess function to the value inside
   * a successfully resolved promise. This is useful for working with promises
   * inside function compositions.
   *
   * @func
   * @memberOf R
   * @category Function
   * @sig (a -> b) -> (Promise e a) -> (Promise e b)
   * @sig (a -> (Promise e b)) -> (Promise e a) -> (Promise e b)
   * @param {Function} onSuccess The function to apply. Can return a value or a promise of a value.
   * @param {Promise} p
   * @return {Promise} The result of calling `p.then(onSuccess)`
   * @see R.otherwise
   * @example
   *
   *      var makeQuery = (email) => ({ query: { email }});
   *
   *      //getMemberName :: String -> Promise ({firstName, lastName})
   *      var getMemberName = R.pipe(
   *        makeQuery,
   *        fetchMember,
   *        R.then(R.pick(['firstName', 'lastName']))
   *      );
   */
  var then = /*#__PURE__*/_curry2(function then(f, p) {
    _assertPromise('then', p);

    return p.then(f);
  });

  /**
   * The lower case version of a string.
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category String
   * @sig String -> String
   * @param {String} str The string to lower case.
   * @return {String} The lower case version of `str`.
   * @see R.toUpper
   * @example
   *
   *      R.toLower('XYZ'); //=> 'xyz'
   */
  var toLower = /*#__PURE__*/invoker(0, 'toLowerCase');

  /**
   * Converts an object into an array of key, value arrays. Only the object's
   * own properties are used.
   * Note that the order of the output array is not guaranteed to be consistent
   * across different JS platforms.
   *
   * @func
   * @memberOf R
   * @since v0.4.0
   * @category Object
   * @sig {String: *} -> [[String,*]]
   * @param {Object} obj The object to extract from
   * @return {Array} An array of key, value arrays from the object's own properties.
   * @see R.fromPairs
   * @example
   *
   *      R.toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]
   */
  var toPairs = /*#__PURE__*/_curry1(function toPairs(obj) {
    var pairs = [];
    for (var prop in obj) {
      if (_has(prop, obj)) {
        pairs[pairs.length] = [prop, obj[prop]];
      }
    }
    return pairs;
  });

  /**
   * Converts an object into an array of key, value arrays. The object's own
   * properties and prototype properties are used. Note that the order of the
   * output array is not guaranteed to be consistent across different JS
   * platforms.
   *
   * @func
   * @memberOf R
   * @since v0.4.0
   * @category Object
   * @sig {String: *} -> [[String,*]]
   * @param {Object} obj The object to extract from
   * @return {Array} An array of key, value arrays from the object's own
   *         and prototype properties.
   * @example
   *
   *      const F = function() { this.x = 'X'; };
   *      F.prototype.y = 'Y';
   *      const f = new F();
   *      R.toPairsIn(f); //=> [['x','X'], ['y','Y']]
   */
  var toPairsIn = /*#__PURE__*/_curry1(function toPairsIn(obj) {
    var pairs = [];
    for (var prop in obj) {
      pairs[pairs.length] = [prop, obj[prop]];
    }
    return pairs;
  });

  /**
   * The upper case version of a string.
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category String
   * @sig String -> String
   * @param {String} str The string to upper case.
   * @return {String} The upper case version of `str`.
   * @see R.toLower
   * @example
   *
   *      R.toUpper('abc'); //=> 'ABC'
   */
  var toUpper = /*#__PURE__*/invoker(0, 'toUpperCase');

  /**
   * Initializes a transducer using supplied iterator function. Returns a single
   * item by iterating through the list, successively calling the transformed
   * iterator function and passing it an accumulator value and the current value
   * from the array, and then passing the result to the next call.
   *
   * The iterator function receives two values: *(acc, value)*. It will be
   * wrapped as a transformer to initialize the transducer. A transformer can be
   * passed directly in place of an iterator function. In both cases, iteration
   * may be stopped early with the [`R.reduced`](#reduced) function.
   *
   * A transducer is a function that accepts a transformer and returns a
   * transformer and can be composed directly.
   *
   * A transformer is an an object that provides a 2-arity reducing iterator
   * function, step, 0-arity initial value function, init, and 1-arity result
   * extraction function, result. The step function is used as the iterator
   * function in reduce. The result function is used to convert the final
   * accumulator into the return type and in most cases is
   * [`R.identity`](#identity). The init function can be used to provide an
   * initial accumulator, but is ignored by transduce.
   *
   * The iteration is performed with [`R.reduce`](#reduce) after initializing the transducer.
   *
   * @func
   * @memberOf R
   * @since v0.12.0
   * @category List
   * @sig (c -> c) -> ((a, b) -> a) -> a -> [b] -> a
   * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
   * @param {Function} fn The iterator function. Receives two values, the accumulator and the
   *        current element from the array. Wrapped as transformer, if necessary, and used to
   *        initialize the transducer
   * @param {*} acc The initial accumulator value.
   * @param {Array} list The list to iterate over.
   * @return {*} The final, accumulated value.
   * @see R.reduce, R.reduced, R.into
   * @example
   *
   *      const numbers = [1, 2, 3, 4];
   *      const transducer = R.compose(R.map(R.add(1)), R.take(2));
   *      R.transduce(transducer, R.flip(R.append), [], numbers); //=> [2, 3]
   *
   *      const isOdd = (x) => x % 2 === 1;
   *      const firstOddTransducer = R.compose(R.filter(isOdd), R.take(1));
   *      R.transduce(firstOddTransducer, R.flip(R.append), [], R.range(0, 100)); //=> [1]
   */
  var transduce = /*#__PURE__*/curryN(4, function transduce(xf, fn, acc, list) {
    return _reduce(xf(typeof fn === 'function' ? _xwrap(fn) : fn), acc, list);
  });

  /**
   * Transposes the rows and columns of a 2D list.
   * When passed a list of `n` lists of length `x`,
   * returns a list of `x` lists of length `n`.
   *
   *
   * @func
   * @memberOf R
   * @since v0.19.0
   * @category List
   * @sig [[a]] -> [[a]]
   * @param {Array} list A 2D list
   * @return {Array} A 2D list
   * @example
   *
   *      R.transpose([[1, 'a'], [2, 'b'], [3, 'c']]) //=> [[1, 2, 3], ['a', 'b', 'c']]
   *      R.transpose([[1, 2, 3], ['a', 'b', 'c']]) //=> [[1, 'a'], [2, 'b'], [3, 'c']]
   *
   *      // If some of the rows are shorter than the following rows, their elements are skipped:
   *      R.transpose([[10, 11], [20], [], [30, 31, 32]]) //=> [[10, 20, 30], [11, 31], [32]]
   * @symb R.transpose([[a], [b], [c]]) = [a, b, c]
   * @symb R.transpose([[a, b], [c, d]]) = [[a, c], [b, d]]
   * @symb R.transpose([[a, b], [c]]) = [[a, c], [b]]
   */
  var transpose = /*#__PURE__*/_curry1(function transpose(outerlist) {
    var i = 0;
    var result = [];
    while (i < outerlist.length) {
      var innerlist = outerlist[i];
      var j = 0;
      while (j < innerlist.length) {
        if (typeof result[j] === 'undefined') {
          result[j] = [];
        }
        result[j].push(innerlist[j]);
        j += 1;
      }
      i += 1;
    }
    return result;
  });

  /**
   * Maps an [Applicative](https://github.com/fantasyland/fantasy-land#applicative)-returning
   * function over a [Traversable](https://github.com/fantasyland/fantasy-land#traversable),
   * then uses [`sequence`](#sequence) to transform the resulting Traversable of Applicative
   * into an Applicative of Traversable.
   *
   * Dispatches to the `traverse` method of the third argument, if present.
   *
   * @func
   * @memberOf R
   * @since v0.19.0
   * @category List
   * @sig (Applicative f, Traversable t) => (a -> f a) -> (a -> f b) -> t a -> f (t b)
   * @param {Function} of
   * @param {Function} f
   * @param {*} traversable
   * @return {*}
   * @see R.sequence
   * @example
   *
   *      // Returns `Maybe.Nothing` if the given divisor is `0`
   *      const safeDiv = n => d => d === 0 ? Maybe.Nothing() : Maybe.Just(n / d)
   *
   *      R.traverse(Maybe.of, safeDiv(10), [2, 4, 5]); //=> Maybe.Just([5, 2.5, 2])
   *      R.traverse(Maybe.of, safeDiv(10), [2, 0, 5]); //=> Maybe.Nothing
   */
  var traverse = /*#__PURE__*/_curry3(function traverse(of, f, traversable) {
    return typeof traversable['fantasy-land/traverse'] === 'function' ? traversable['fantasy-land/traverse'](f, of) : sequence(of, map(f, traversable));
  });

  var ws = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' + '\u2029\uFEFF';
  var zeroWidth = '\u200b';
  var hasProtoTrim = typeof String.prototype.trim === 'function';
  /**
   * Removes (strips) whitespace from both ends of the string.
   *
   * @func
   * @memberOf R
   * @since v0.6.0
   * @category String
   * @sig String -> String
   * @param {String} str The string to trim.
   * @return {String} Trimmed version of `str`.
   * @example
   *
   *      R.trim('   xyz  '); //=> 'xyz'
   *      R.map(R.trim, R.split(',', 'x, y, z')); //=> ['x', 'y', 'z']
   */
  var trim = !hasProtoTrim || /*#__PURE__*/ws.trim() || ! /*#__PURE__*/zeroWidth.trim() ? /*#__PURE__*/_curry1(function trim(str) {
    var beginRx = new RegExp('^[' + ws + '][' + ws + ']*');
    var endRx = new RegExp('[' + ws + '][' + ws + ']*$');
    return str.replace(beginRx, '').replace(endRx, '');
  }) : /*#__PURE__*/_curry1(function trim(str) {
    return str.trim();
  });

  /**
   * `tryCatch` takes two functions, a `tryer` and a `catcher`. The returned
   * function evaluates the `tryer`; if it does not throw, it simply returns the
   * result. If the `tryer` *does* throw, the returned function evaluates the
   * `catcher` function and returns its result. Note that for effective
   * composition with this function, both the `tryer` and `catcher` functions
   * must return the same type of results.
   *
   * @func
   * @memberOf R
   * @since v0.20.0
   * @category Function
   * @sig (...x -> a) -> ((e, ...x) -> a) -> (...x -> a)
   * @param {Function} tryer The function that may throw.
   * @param {Function} catcher The function that will be evaluated if `tryer` throws.
   * @return {Function} A new function that will catch exceptions and send then to the catcher.
   * @example
   *
   *      R.tryCatch(R.prop('x'), R.F)({x: true}); //=> true
   *      R.tryCatch(() => { throw 'foo'}, R.always('catched'))('bar') // => 'catched'
   *      R.tryCatch(R.times(R.identity), R.always([]))('s') // => []
   `` */
  var tryCatch = /*#__PURE__*/_curry2(function _tryCatch(tryer, catcher) {
    return _arity(tryer.length, function () {
      try {
        return tryer.apply(this, arguments);
      } catch (e) {
        return catcher.apply(this, _concat([e], arguments));
      }
    });
  });

  /**
   * Takes a function `fn`, which takes a single array argument, and returns a
   * function which:
   *
   *   - takes any number of positional arguments;
   *   - passes these arguments to `fn` as an array; and
   *   - returns the result.
   *
   * In other words, `R.unapply` derives a variadic function from a function which
   * takes an array. `R.unapply` is the inverse of [`R.apply`](#apply).
   *
   * @func
   * @memberOf R
   * @since v0.8.0
   * @category Function
   * @sig ([*...] -> a) -> (*... -> a)
   * @param {Function} fn
   * @return {Function}
   * @see R.apply
   * @example
   *
   *      R.unapply(JSON.stringify)(1, 2, 3); //=> '[1,2,3]'
   * @symb R.unapply(f)(a, b) = f([a, b])
   */
  var unapply = /*#__PURE__*/_curry1(function unapply(fn) {
    return function () {
      return fn(Array.prototype.slice.call(arguments, 0));
    };
  });

  /**
   * Wraps a function of any arity (including nullary) in a function that accepts
   * exactly 1 parameter. Any extraneous parameters will not be passed to the
   * supplied function.
   *
   * @func
   * @memberOf R
   * @since v0.2.0
   * @category Function
   * @sig (* -> b) -> (a -> b)
   * @param {Function} fn The function to wrap.
   * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
   *         arity 1.
   * @see R.binary, R.nAry
   * @example
   *
   *      const takesTwoArgs = function(a, b) {
   *        return [a, b];
   *      };
   *      takesTwoArgs.length; //=> 2
   *      takesTwoArgs(1, 2); //=> [1, 2]
   *
   *      const takesOneArg = R.unary(takesTwoArgs);
   *      takesOneArg.length; //=> 1
   *      // Only 1 argument is passed to the wrapped function
   *      takesOneArg(1, 2); //=> [1, undefined]
   * @symb R.unary(f)(a, b, c) = f(a)
   */
  var unary = /*#__PURE__*/_curry1(function unary(fn) {
    return nAry(1, fn);
  });

  /**
   * Returns a function of arity `n` from a (manually) curried function.
   *
   * @func
   * @memberOf R
   * @since v0.14.0
   * @category Function
   * @sig Number -> (a -> b) -> (a -> c)
   * @param {Number} length The arity for the returned function.
   * @param {Function} fn The function to uncurry.
   * @return {Function} A new function.
   * @see R.curry
   * @example
   *
   *      const addFour = a => b => c => d => a + b + c + d;
   *
   *      const uncurriedAddFour = R.uncurryN(4, addFour);
   *      uncurriedAddFour(1, 2, 3, 4); //=> 10
   */
  var uncurryN = /*#__PURE__*/_curry2(function uncurryN(depth, fn) {
    return curryN(depth, function () {
      var currentDepth = 1;
      var value = fn;
      var idx = 0;
      var endIdx;
      while (currentDepth <= depth && typeof value === 'function') {
        endIdx = currentDepth === depth ? arguments.length : idx + value.length;
        value = value.apply(this, Array.prototype.slice.call(arguments, idx, endIdx));
        currentDepth += 1;
        idx = endIdx;
      }
      return value;
    });
  });

  /**
   * Builds a list from a seed value. Accepts an iterator function, which returns
   * either false to stop iteration or an array of length 2 containing the value
   * to add to the resulting list and the seed to be used in the next call to the
   * iterator function.
   *
   * The iterator function receives one argument: *(seed)*.
   *
   * @func
   * @memberOf R
   * @since v0.10.0
   * @category List
   * @sig (a -> [b]) -> * -> [b]
   * @param {Function} fn The iterator function. receives one argument, `seed`, and returns
   *        either false to quit iteration or an array of length two to proceed. The element
   *        at index 0 of this array will be added to the resulting array, and the element
   *        at index 1 will be passed to the next call to `fn`.
   * @param {*} seed The seed value.
   * @return {Array} The final list.
   * @example
   *
   *      const f = n => n > 50 ? false : [-n, n + 10];
   *      R.unfold(f, 10); //=> [-10, -20, -30, -40, -50]
   * @symb R.unfold(f, x) = [f(x)[0], f(f(x)[1])[0], f(f(f(x)[1])[1])[0], ...]
   */
  var unfold = /*#__PURE__*/_curry2(function unfold(fn, seed) {
    var pair = fn(seed);
    var result = [];
    while (pair && pair.length) {
      result[result.length] = pair[0];
      pair = fn(pair[1]);
    }
    return result;
  });

  /**
   * Combines two lists into a set (i.e. no duplicates) composed of the elements
   * of each list.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Relation
   * @sig [*] -> [*] -> [*]
   * @param {Array} as The first list.
   * @param {Array} bs The second list.
   * @return {Array} The first and second lists concatenated, with
   *         duplicates removed.
   * @example
   *
   *      R.union([1, 2, 3], [2, 3, 4]); //=> [1, 2, 3, 4]
   */
  var union = /*#__PURE__*/_curry2( /*#__PURE__*/compose(uniq, _concat));

  /**
   * Returns a new list containing only one copy of each element in the original
   * list, based upon the value returned by applying the supplied predicate to
   * two list elements. Prefers the first item if two items compare equal based
   * on the predicate.
   *
   * @func
   * @memberOf R
   * @since v0.2.0
   * @category List
   * @sig ((a, a) -> Boolean) -> [a] -> [a]
   * @param {Function} pred A predicate used to test whether two items are equal.
   * @param {Array} list The array to consider.
   * @return {Array} The list of unique items.
   * @example
   *
   *      const strEq = R.eqBy(String);
   *      R.uniqWith(strEq)([1, '1', 2, 1]); //=> [1, 2]
   *      R.uniqWith(strEq)([{}, {}]);       //=> [{}]
   *      R.uniqWith(strEq)([1, '1', 1]);    //=> [1]
   *      R.uniqWith(strEq)(['1', 1, 1]);    //=> ['1']
   */
  var uniqWith = /*#__PURE__*/_curry2(function uniqWith(pred, list) {
    var idx = 0;
    var len = list.length;
    var result = [];
    var item;
    while (idx < len) {
      item = list[idx];
      if (!_includesWith(pred, item, result)) {
        result[result.length] = item;
      }
      idx += 1;
    }
    return result;
  });

  /**
   * Combines two lists into a set (i.e. no duplicates) composed of the elements
   * of each list. Duplication is determined according to the value returned by
   * applying the supplied predicate to two list elements.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Relation
   * @sig ((a, a) -> Boolean) -> [*] -> [*] -> [*]
   * @param {Function} pred A predicate used to test whether two items are equal.
   * @param {Array} list1 The first list.
   * @param {Array} list2 The second list.
   * @return {Array} The first and second lists concatenated, with
   *         duplicates removed.
   * @see R.union
   * @example
   *
   *      const l1 = [{a: 1}, {a: 2}];
   *      const l2 = [{a: 1}, {a: 4}];
   *      R.unionWith(R.eqBy(R.prop('a')), l1, l2); //=> [{a: 1}, {a: 2}, {a: 4}]
   */
  var unionWith = /*#__PURE__*/_curry3(function unionWith(pred, list1, list2) {
    return uniqWith(pred, _concat(list1, list2));
  });

  /**
   * Tests the final argument by passing it to the given predicate function. If
   * the predicate is not satisfied, the function will return the result of
   * calling the `whenFalseFn` function with the same argument. If the predicate
   * is satisfied, the argument is returned as is.
   *
   * @func
   * @memberOf R
   * @since v0.18.0
   * @category Logic
   * @sig (a -> Boolean) -> (a -> a) -> a -> a
   * @param {Function} pred        A predicate function
   * @param {Function} whenFalseFn A function to invoke when the `pred` evaluates
   *                               to a falsy value.
   * @param {*}        x           An object to test with the `pred` function and
   *                               pass to `whenFalseFn` if necessary.
   * @return {*} Either `x` or the result of applying `x` to `whenFalseFn`.
   * @see R.ifElse, R.when, R.cond
   * @example
   *
   *      let safeInc = R.unless(R.isNil, R.inc);
   *      safeInc(null); //=> null
   *      safeInc(1); //=> 2
   */
  var unless = /*#__PURE__*/_curry3(function unless(pred, whenFalseFn, x) {
    return pred(x) ? x : whenFalseFn(x);
  });

  /**
   * Shorthand for `R.chain(R.identity)`, which removes one level of nesting from
   * any [Chain](https://github.com/fantasyland/fantasy-land#chain).
   *
   * @func
   * @memberOf R
   * @since v0.3.0
   * @category List
   * @sig Chain c => c (c a) -> c a
   * @param {*} list
   * @return {*}
   * @see R.flatten, R.chain
   * @example
   *
   *      R.unnest([1, [2], [[3]]]); //=> [1, 2, [3]]
   *      R.unnest([[1, 2], [3, 4], [5, 6]]); //=> [1, 2, 3, 4, 5, 6]
   */
  var unnest = /*#__PURE__*/chain(_identity);

  /**
   * Takes a predicate, a transformation function, and an initial value,
   * and returns a value of the same type as the initial value.
   * It does so by applying the transformation until the predicate is satisfied,
   * at which point it returns the satisfactory value.
   *
   * @func
   * @memberOf R
   * @since v0.20.0
   * @category Logic
   * @sig (a -> Boolean) -> (a -> a) -> a -> a
   * @param {Function} pred A predicate function
   * @param {Function} fn The iterator function
   * @param {*} init Initial value
   * @return {*} Final value that satisfies predicate
   * @example
   *
   *      R.until(R.gt(R.__, 100), R.multiply(2))(1) // => 128
   */
  var until = /*#__PURE__*/_curry3(function until(pred, fn, init) {
    var val = init;
    while (!pred(val)) {
      val = fn(val);
    }
    return val;
  });

  /**
   * Returns a list of all the properties, including prototype properties, of the
   * supplied object.
   * Note that the order of the output array is not guaranteed to be consistent
   * across different JS platforms.
   *
   * @func
   * @memberOf R
   * @since v0.2.0
   * @category Object
   * @sig {k: v} -> [v]
   * @param {Object} obj The object to extract values from
   * @return {Array} An array of the values of the object's own and prototype properties.
   * @see R.values, R.keysIn
   * @example
   *
   *      const F = function() { this.x = 'X'; };
   *      F.prototype.y = 'Y';
   *      const f = new F();
   *      R.valuesIn(f); //=> ['X', 'Y']
   */
  var valuesIn = /*#__PURE__*/_curry1(function valuesIn(obj) {
    var prop;
    var vs = [];
    for (prop in obj) {
      vs[vs.length] = obj[prop];
    }
    return vs;
  });

  // `Const` is a functor that effectively ignores the function given to `map`.
  var Const = function (x) {
    return { value: x, 'fantasy-land/map': function () {
        return this;
      } };
  };

  /**
   * Returns a "view" of the given data structure, determined by the given lens.
   * The lens's focus determines which portion of the data structure is visible.
   *
   * @func
   * @memberOf R
   * @since v0.16.0
   * @category Object
   * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
   * @sig Lens s a -> s -> a
   * @param {Lens} lens
   * @param {*} x
   * @return {*}
   * @see R.prop, R.lensIndex, R.lensProp
   * @example
   *
   *      const xLens = R.lensProp('x');
   *
   *      R.view(xLens, {x: 1, y: 2});  //=> 1
   *      R.view(xLens, {x: 4, y: 2});  //=> 4
   */
  var view = /*#__PURE__*/_curry2(function view(lens, x) {
    // Using `Const` effectively ignores the setter function of the `lens`,
    // leaving the value returned by the getter function unmodified.
    return lens(Const)(x).value;
  });

  /**
   * Tests the final argument by passing it to the given predicate function. If
   * the predicate is satisfied, the function will return the result of calling
   * the `whenTrueFn` function with the same argument. If the predicate is not
   * satisfied, the argument is returned as is.
   *
   * @func
   * @memberOf R
   * @since v0.18.0
   * @category Logic
   * @sig (a -> Boolean) -> (a -> a) -> a -> a
   * @param {Function} pred       A predicate function
   * @param {Function} whenTrueFn A function to invoke when the `condition`
   *                              evaluates to a truthy value.
   * @param {*}        x          An object to test with the `pred` function and
   *                              pass to `whenTrueFn` if necessary.
   * @return {*} Either `x` or the result of applying `x` to `whenTrueFn`.
   * @see R.ifElse, R.unless, R.cond
   * @example
   *
   *      // truncate :: String -> String
   *      const truncate = R.when(
   *        R.propSatisfies(R.gt(R.__, 10), 'length'),
   *        R.pipe(R.take(10), R.append('…'), R.join(''))
   *      );
   *      truncate('12345');         //=> '12345'
   *      truncate('0123456789ABC'); //=> '0123456789…'
   */
  var when = /*#__PURE__*/_curry3(function when(pred, whenTrueFn, x) {
    return pred(x) ? whenTrueFn(x) : x;
  });

  /**
   * Takes a spec object and a test object; returns true if the test satisfies
   * the spec. Each of the spec's own properties must be a predicate function.
   * Each predicate is applied to the value of the corresponding property of the
   * test object. `where` returns true if all the predicates return true, false
   * otherwise.
   *
   * `where` is well suited to declaratively expressing constraints for other
   * functions such as [`filter`](#filter) and [`find`](#find).
   *
   * @func
   * @memberOf R
   * @since v0.1.1
   * @category Object
   * @sig {String: (* -> Boolean)} -> {String: *} -> Boolean
   * @param {Object} spec
   * @param {Object} testObj
   * @return {Boolean}
   * @see R.propSatisfies, R.whereEq
   * @example
   *
   *      // pred :: Object -> Boolean
   *      const pred = R.where({
   *        a: R.equals('foo'),
   *        b: R.complement(R.equals('bar')),
   *        x: R.gt(R.__, 10),
   *        y: R.lt(R.__, 20)
   *      });
   *
   *      pred({a: 'foo', b: 'xxx', x: 11, y: 19}); //=> true
   *      pred({a: 'xxx', b: 'xxx', x: 11, y: 19}); //=> false
   *      pred({a: 'foo', b: 'bar', x: 11, y: 19}); //=> false
   *      pred({a: 'foo', b: 'xxx', x: 10, y: 19}); //=> false
   *      pred({a: 'foo', b: 'xxx', x: 11, y: 20}); //=> false
   */
  var where = /*#__PURE__*/_curry2(function where(spec, testObj) {
    for (var prop in spec) {
      if (_has(prop, spec) && !spec[prop](testObj[prop])) {
        return false;
      }
    }
    return true;
  });

  /**
   * Takes a spec object and a test object; returns true if the test satisfies
   * the spec, false otherwise. An object satisfies the spec if, for each of the
   * spec's own properties, accessing that property of the object gives the same
   * value (in [`R.equals`](#equals) terms) as accessing that property of the
   * spec.
   *
   * `whereEq` is a specialization of [`where`](#where).
   *
   * @func
   * @memberOf R
   * @since v0.14.0
   * @category Object
   * @sig {String: *} -> {String: *} -> Boolean
   * @param {Object} spec
   * @param {Object} testObj
   * @return {Boolean}
   * @see R.propEq, R.where
   * @example
   *
   *      // pred :: Object -> Boolean
   *      const pred = R.whereEq({a: 1, b: 2});
   *
   *      pred({a: 1});              //=> false
   *      pred({a: 1, b: 2});        //=> true
   *      pred({a: 1, b: 2, c: 3});  //=> true
   *      pred({a: 1, b: 1});        //=> false
   */
  var whereEq = /*#__PURE__*/_curry2(function whereEq(spec, testObj) {
    return where(map(equals, spec), testObj);
  });

  /**
   * Returns a new list without values in the first argument.
   * [`R.equals`](#equals) is used to determine equality.
   *
   * Acts as a transducer if a transformer is given in list position.
   *
   * @func
   * @memberOf R
   * @since v0.19.0
   * @category List
   * @sig [a] -> [a] -> [a]
   * @param {Array} list1 The values to be removed from `list2`.
   * @param {Array} list2 The array to remove values from.
   * @return {Array} The new array without values in `list1`.
   * @see R.transduce, R.difference, R.remove
   * @example
   *
   *      R.without([1, 2], [1, 2, 1, 3, 4]); //=> [3, 4]
   */
  var without = /*#__PURE__*/_curry2(function (xs, list) {
    return reject(flip(_includes)(xs), list);
  });

  /**
   * Creates a new list out of the two supplied by creating each possible pair
   * from the lists.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig [a] -> [b] -> [[a,b]]
   * @param {Array} as The first list.
   * @param {Array} bs The second list.
   * @return {Array} The list made by combining each possible pair from
   *         `as` and `bs` into pairs (`[a, b]`).
   * @example
   *
   *      R.xprod([1, 2], ['a', 'b']); //=> [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
   * @symb R.xprod([a, b], [c, d]) = [[a, c], [a, d], [b, c], [b, d]]
   */
  var xprod = /*#__PURE__*/_curry2(function xprod(a, b) {
    // = xprodWith(prepend); (takes about 3 times as long...)
    var idx = 0;
    var ilen = a.length;
    var j;
    var jlen = b.length;
    var result = [];
    while (idx < ilen) {
      j = 0;
      while (j < jlen) {
        result[result.length] = [a[idx], b[j]];
        j += 1;
      }
      idx += 1;
    }
    return result;
  });

  /**
   * Creates a new list out of the two supplied by pairing up equally-positioned
   * items from both lists. The returned list is truncated to the length of the
   * shorter of the two input lists.
   * Note: `zip` is equivalent to `zipWith(function(a, b) { return [a, b] })`.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig [a] -> [b] -> [[a,b]]
   * @param {Array} list1 The first array to consider.
   * @param {Array} list2 The second array to consider.
   * @return {Array} The list made by pairing up same-indexed elements of `list1` and `list2`.
   * @example
   *
   *      R.zip([1, 2, 3], ['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]
   * @symb R.zip([a, b, c], [d, e, f]) = [[a, d], [b, e], [c, f]]
   */
  var zip = /*#__PURE__*/_curry2(function zip(a, b) {
    var rv = [];
    var idx = 0;
    var len = Math.min(a.length, b.length);
    while (idx < len) {
      rv[idx] = [a[idx], b[idx]];
      idx += 1;
    }
    return rv;
  });

  /**
   * Creates a new object out of a list of keys and a list of values.
   * Key/value pairing is truncated to the length of the shorter of the two lists.
   * Note: `zipObj` is equivalent to `pipe(zip, fromPairs)`.
   *
   * @func
   * @memberOf R
   * @since v0.3.0
   * @category List
   * @sig [String] -> [*] -> {String: *}
   * @param {Array} keys The array that will be properties on the output object.
   * @param {Array} values The list of values on the output object.
   * @return {Object} The object made by pairing up same-indexed elements of `keys` and `values`.
   * @example
   *
   *      R.zipObj(['a', 'b', 'c'], [1, 2, 3]); //=> {a: 1, b: 2, c: 3}
   */
  var zipObj = /*#__PURE__*/_curry2(function zipObj(keys, values) {
    var idx = 0;
    var len = Math.min(keys.length, values.length);
    var out = {};
    while (idx < len) {
      out[keys[idx]] = values[idx];
      idx += 1;
    }
    return out;
  });

  /**
   * Creates a new list out of the two supplied by applying the function to each
   * equally-positioned pair in the lists. The returned list is truncated to the
   * length of the shorter of the two input lists.
   *
   * @function
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig ((a, b) -> c) -> [a] -> [b] -> [c]
   * @param {Function} fn The function used to combine the two elements into one value.
   * @param {Array} list1 The first array to consider.
   * @param {Array} list2 The second array to consider.
   * @return {Array} The list made by combining same-indexed elements of `list1` and `list2`
   *         using `fn`.
   * @example
   *
   *      const f = (x, y) => {
   *        // ...
   *      };
   *      R.zipWith(f, [1, 2, 3], ['a', 'b', 'c']);
   *      //=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]
   * @symb R.zipWith(fn, [a, b, c], [d, e, f]) = [fn(a, d), fn(b, e), fn(c, f)]
   */
  var zipWith = /*#__PURE__*/_curry3(function zipWith(fn, a, b) {
    var rv = [];
    var idx = 0;
    var len = Math.min(a.length, b.length);
    while (idx < len) {
      rv[idx] = fn(a[idx], b[idx]);
      idx += 1;
    }
    return rv;
  });

  /**
   * Creates a thunk out of a function. A thunk delays a calculation until
   * its result is needed, providing lazy evaluation of arguments.
   *
   * @func
   * @memberOf R
   * @category Function
   * @sig ((a, b, ..., j) -> k) -> (a, b, ..., j) -> (() -> k)
   * @param {Function} fn A function to wrap in a thunk
   * @return {Function} Expects arguments for `fn` and returns a new function
   *  that, when called, applies those arguments to `fn`.
   * @see R.partial, R.partialRight
   * @example
   *
   *      R.thunkify(R.identity)(42)(); //=> 42
   *      R.thunkify((a, b) => a + b)(25, 17)(); //=> 42
   */
  var thunkify = /*#__PURE__*/_curry1(function thunkify(fn) {
    return curryN(fn.length, function createThunk() {
      var fnArgs = arguments;
      return function invokeThunk() {
        return fn.apply(this, fnArgs);
      };
    });
  });



  var es = /*#__PURE__*/Object.freeze({
    F: F,
    T: T,
    __: __,
    add: add,
    addIndex: addIndex,
    adjust: adjust,
    all: all,
    allPass: allPass,
    always: always,
    and: and,
    any: any,
    anyPass: anyPass,
    ap: ap,
    aperture: aperture,
    append: append,
    apply: apply,
    applySpec: applySpec,
    applyTo: applyTo,
    ascend: ascend,
    assoc: assoc,
    assocPath: assocPath,
    binary: binary,
    bind: bind,
    both: both,
    call: call,
    chain: chain,
    clamp: clamp,
    clone: clone,
    comparator: comparator,
    complement: complement,
    compose: compose,
    composeK: composeK,
    composeP: composeP,
    composeWith: composeWith,
    concat: concat,
    cond: cond,
    construct: construct,
    constructN: constructN,
    contains: contains$1,
    converge: converge,
    countBy: countBy,
    curry: curry,
    curryN: curryN,
    dec: dec,
    defaultTo: defaultTo,
    descend: descend,
    difference: difference,
    differenceWith: differenceWith,
    dissoc: dissoc,
    dissocPath: dissocPath,
    divide: divide,
    drop: drop,
    dropLast: dropLast$1,
    dropLastWhile: dropLastWhile$1,
    dropRepeats: dropRepeats,
    dropRepeatsWith: dropRepeatsWith,
    dropWhile: dropWhile,
    either: either,
    empty: empty,
    endsWith: endsWith,
    eqBy: eqBy,
    eqProps: eqProps,
    equals: equals,
    evolve: evolve,
    filter: filter,
    find: find,
    findIndex: findIndex,
    findLast: findLast,
    findLastIndex: findLastIndex,
    flatten: flatten,
    flip: flip,
    forEach: forEach,
    forEachObjIndexed: forEachObjIndexed,
    fromPairs: fromPairs,
    groupBy: groupBy,
    groupWith: groupWith,
    gt: gt,
    gte: gte,
    has: has,
    hasIn: hasIn,
    hasPath: hasPath,
    head: head,
    identical: identical,
    identity: identity,
    ifElse: ifElse,
    inc: inc,
    includes: includes,
    indexBy: indexBy,
    indexOf: indexOf,
    init: init,
    innerJoin: innerJoin,
    insert: insert,
    insertAll: insertAll,
    intersection: intersection,
    intersperse: intersperse,
    into: into,
    invert: invert,
    invertObj: invertObj,
    invoker: invoker,
    is: is,
    isEmpty: isEmpty,
    isNil: isNil,
    join: join,
    juxt: juxt,
    keys: keys,
    keysIn: keysIn,
    last: last,
    lastIndexOf: lastIndexOf,
    length: length,
    lens: lens,
    lensIndex: lensIndex,
    lensPath: lensPath,
    lensProp: lensProp,
    lift: lift,
    liftN: liftN,
    lt: lt,
    lte: lte,
    map: map,
    mapAccum: mapAccum,
    mapAccumRight: mapAccumRight,
    mapObjIndexed: mapObjIndexed,
    match: match,
    mathMod: mathMod,
    max: max,
    maxBy: maxBy,
    mean: mean,
    median: median,
    memoizeWith: memoizeWith,
    merge: merge,
    mergeAll: mergeAll,
    mergeDeepLeft: mergeDeepLeft,
    mergeDeepRight: mergeDeepRight,
    mergeDeepWith: mergeDeepWith,
    mergeDeepWithKey: mergeDeepWithKey,
    mergeLeft: mergeLeft,
    mergeRight: mergeRight,
    mergeWith: mergeWith,
    mergeWithKey: mergeWithKey,
    min: min,
    minBy: minBy,
    modulo: modulo,
    move: move,
    multiply: multiply,
    nAry: nAry,
    negate: negate,
    none: none,
    not: not,
    nth: nth,
    nthArg: nthArg,
    o: o,
    objOf: objOf,
    of: of,
    omit: omit,
    once: once,
    or: or,
    otherwise: otherwise,
    over: over,
    pair: pair,
    partial: partial,
    partialRight: partialRight,
    partition: partition,
    path: path,
    pathEq: pathEq,
    pathOr: pathOr,
    pathSatisfies: pathSatisfies,
    pick: pick,
    pickAll: pickAll,
    pickBy: pickBy,
    pipe: pipe,
    pipeK: pipeK,
    pipeP: pipeP,
    pipeWith: pipeWith,
    pluck: pluck,
    prepend: prepend,
    product: product,
    project: project,
    prop: prop,
    propEq: propEq,
    propIs: propIs,
    propOr: propOr,
    propSatisfies: propSatisfies,
    props: props,
    range: range,
    reduce: reduce,
    reduceBy: reduceBy,
    reduceRight: reduceRight,
    reduceWhile: reduceWhile,
    reduced: reduced,
    reject: reject,
    remove: remove,
    repeat: repeat,
    replace: replace,
    reverse: reverse,
    scan: scan,
    sequence: sequence,
    set: set,
    slice: slice,
    sort: sort,
    sortBy: sortBy,
    sortWith: sortWith,
    split: split,
    splitAt: splitAt,
    splitEvery: splitEvery,
    splitWhen: splitWhen,
    startsWith: startsWith,
    subtract: subtract,
    sum: sum,
    symmetricDifference: symmetricDifference,
    symmetricDifferenceWith: symmetricDifferenceWith,
    tail: tail,
    take: take,
    takeLast: takeLast,
    takeLastWhile: takeLastWhile,
    takeWhile: takeWhile,
    tap: tap,
    test: test,
    then: then,
    times: times,
    toLower: toLower,
    toPairs: toPairs,
    toPairsIn: toPairsIn,
    toString: toString$1,
    toUpper: toUpper,
    transduce: transduce,
    transpose: transpose,
    traverse: traverse,
    trim: trim,
    tryCatch: tryCatch,
    type: type,
    unapply: unapply,
    unary: unary,
    uncurryN: uncurryN,
    unfold: unfold,
    union: union,
    unionWith: unionWith,
    uniq: uniq,
    uniqBy: uniqBy,
    uniqWith: uniqWith,
    unless: unless,
    unnest: unnest,
    until: until,
    update: update,
    useWith: useWith,
    values: values,
    valuesIn: valuesIn,
    view: view,
    when: when,
    where: where,
    whereEq: whereEq,
    without: without,
    xprod: xprod,
    zip: zip,
    zipObj: zipObj,
    zipWith: zipWith,
    thunkify: thunkify
  });

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
  	if (val === null || val === undefined) {
  		throw new TypeError('Object.assign cannot be called with null or undefined');
  	}

  	return Object(val);
  }

  function shouldUseNative() {
  	try {
  		if (!Object.assign) {
  			return false;
  		}

  		// Detect buggy property enumeration order in older V8 versions.

  		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
  		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
  		test1[5] = 'de';
  		if (Object.getOwnPropertyNames(test1)[0] === '5') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test2 = {};
  		for (var i = 0; i < 10; i++) {
  			test2['_' + String.fromCharCode(i)] = i;
  		}
  		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
  			return test2[n];
  		});
  		if (order2.join('') !== '0123456789') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test3 = {};
  		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
  			test3[letter] = letter;
  		});
  		if (Object.keys(Object.assign({}, test3)).join('') !==
  				'abcdefghijklmnopqrst') {
  			return false;
  		}

  		return true;
  	} catch (err) {
  		// We don't expect any of the above to throw, but better to be safe.
  		return false;
  	}
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  	var from;
  	var to = toObject(target);
  	var symbols;

  	for (var s = 1; s < arguments.length; s++) {
  		from = Object(arguments[s]);

  		for (var key in from) {
  			if (hasOwnProperty.call(from, key)) {
  				to[key] = from[key];
  			}
  		}

  		if (getOwnPropertySymbols) {
  			symbols = getOwnPropertySymbols(from);
  			for (var i = 0; i < symbols.length; i++) {
  				if (propIsEnumerable.call(from, symbols[i])) {
  					to[symbols[i]] = from[symbols[i]];
  				}
  			}
  		}
  	}

  	return to;
  };

  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var isFunction_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  function isFunction(x) {
      return typeof x === 'function';
  }
  exports.isFunction = isFunction;

  });

  unwrapExports(isFunction_1);
  var isFunction_2 = isFunction_1.isFunction;

  var config = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var _enable_super_gross_mode_that_will_cause_bad_things = false;
  exports.config = {
      Promise: undefined,
      set useDeprecatedSynchronousErrorHandling(value) {
          if (value) {
              var error = new Error();
              console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
          }
          else if (_enable_super_gross_mode_that_will_cause_bad_things) {
              console.log('RxJS: Back to a better error behavior. Thank you. <3');
          }
          _enable_super_gross_mode_that_will_cause_bad_things = value;
      },
      get useDeprecatedSynchronousErrorHandling() {
          return _enable_super_gross_mode_that_will_cause_bad_things;
      },
  };

  });

  unwrapExports(config);
  var config_1 = config.config;

  var hostReportError_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  function hostReportError(err) {
      setTimeout(function () { throw err; });
  }
  exports.hostReportError = hostReportError;

  });

  unwrapExports(hostReportError_1);
  var hostReportError_2 = hostReportError_1.hostReportError;

  var Observer = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });


  exports.empty = {
      closed: true,
      next: function (value) { },
      error: function (err) {
          if (config.config.useDeprecatedSynchronousErrorHandling) {
              throw err;
          }
          else {
              hostReportError_1.hostReportError(err);
          }
      },
      complete: function () { }
  };

  });

  unwrapExports(Observer);
  var Observer_1 = Observer.empty;

  var isArray = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });

  });

  unwrapExports(isArray);
  var isArray_1 = isArray.isArray;

  var isObject_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  function isObject(x) {
      return x != null && typeof x === 'object';
  }
  exports.isObject = isObject;

  });

  unwrapExports(isObject_1);
  var isObject_2 = isObject_1.isObject;

  var errorObject = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.errorObject = { e: {} };

  });

  unwrapExports(errorObject);
  var errorObject_1 = errorObject.errorObject;

  var tryCatch_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });

  var tryCatchTarget;
  function tryCatcher() {
      try {
          return tryCatchTarget.apply(this, arguments);
      }
      catch (e) {
          errorObject.errorObject.e = e;
          return errorObject.errorObject;
      }
  }
  function tryCatch(fn) {
      tryCatchTarget = fn;
      return tryCatcher;
  }
  exports.tryCatch = tryCatch;

  });

  unwrapExports(tryCatch_1);
  var tryCatch_2 = tryCatch_1.tryCatch;

  var UnsubscriptionError = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  function UnsubscriptionErrorImpl(errors) {
      Error.call(this);
      this.message = errors ?
          errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
      this.name = 'UnsubscriptionError';
      this.errors = errors;
      return this;
  }
  UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
  exports.UnsubscriptionError = UnsubscriptionErrorImpl;

  });

  unwrapExports(UnsubscriptionError);
  var UnsubscriptionError_1 = UnsubscriptionError.UnsubscriptionError;

  var Subscription_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });






  var Subscription = (function () {
      function Subscription(unsubscribe) {
          this.closed = false;
          this._parent = null;
          this._parents = null;
          this._subscriptions = null;
          if (unsubscribe) {
              this._unsubscribe = unsubscribe;
          }
      }
      Subscription.prototype.unsubscribe = function () {
          var hasErrors = false;
          var errors;
          if (this.closed) {
              return;
          }
          var _a = this, _parent = _a._parent, _parents = _a._parents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
          this.closed = true;
          this._parent = null;
          this._parents = null;
          this._subscriptions = null;
          var index = -1;
          var len = _parents ? _parents.length : 0;
          while (_parent) {
              _parent.remove(this);
              _parent = ++index < len && _parents[index] || null;
          }
          if (isFunction_1.isFunction(_unsubscribe)) {
              var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
              if (trial === errorObject.errorObject) {
                  hasErrors = true;
                  errors = errors || (errorObject.errorObject.e instanceof UnsubscriptionError.UnsubscriptionError ?
                      flattenUnsubscriptionErrors(errorObject.errorObject.e.errors) : [errorObject.errorObject.e]);
              }
          }
          if (isArray.isArray(_subscriptions)) {
              index = -1;
              len = _subscriptions.length;
              while (++index < len) {
                  var sub = _subscriptions[index];
                  if (isObject_1.isObject(sub)) {
                      var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
                      if (trial === errorObject.errorObject) {
                          hasErrors = true;
                          errors = errors || [];
                          var err = errorObject.errorObject.e;
                          if (err instanceof UnsubscriptionError.UnsubscriptionError) {
                              errors = errors.concat(flattenUnsubscriptionErrors(err.errors));
                          }
                          else {
                              errors.push(err);
                          }
                      }
                  }
              }
          }
          if (hasErrors) {
              throw new UnsubscriptionError.UnsubscriptionError(errors);
          }
      };
      Subscription.prototype.add = function (teardown) {
          if (!teardown || (teardown === Subscription.EMPTY)) {
              return Subscription.EMPTY;
          }
          if (teardown === this) {
              return this;
          }
          var subscription = teardown;
          switch (typeof teardown) {
              case 'function':
                  subscription = new Subscription(teardown);
              case 'object':
                  if (subscription.closed || typeof subscription.unsubscribe !== 'function') {
                      return subscription;
                  }
                  else if (this.closed) {
                      subscription.unsubscribe();
                      return subscription;
                  }
                  else if (typeof subscription._addParent !== 'function') {
                      var tmp = subscription;
                      subscription = new Subscription();
                      subscription._subscriptions = [tmp];
                  }
                  break;
              default:
                  throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
          }
          var subscriptions = this._subscriptions || (this._subscriptions = []);
          subscriptions.push(subscription);
          subscription._addParent(this);
          return subscription;
      };
      Subscription.prototype.remove = function (subscription) {
          var subscriptions = this._subscriptions;
          if (subscriptions) {
              var subscriptionIndex = subscriptions.indexOf(subscription);
              if (subscriptionIndex !== -1) {
                  subscriptions.splice(subscriptionIndex, 1);
              }
          }
      };
      Subscription.prototype._addParent = function (parent) {
          var _a = this, _parent = _a._parent, _parents = _a._parents;
          if (!_parent || _parent === parent) {
              this._parent = parent;
          }
          else if (!_parents) {
              this._parents = [parent];
          }
          else if (_parents.indexOf(parent) === -1) {
              _parents.push(parent);
          }
      };
      Subscription.EMPTY = (function (empty) {
          empty.closed = true;
          return empty;
      }(new Subscription()));
      return Subscription;
  }());
  exports.Subscription = Subscription;
  function flattenUnsubscriptionErrors(errors) {
      return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError.UnsubscriptionError) ? err.errors : err); }, []);
  }

  });

  unwrapExports(Subscription_1);
  var Subscription_2 = Subscription_1.Subscription;

  var rxSubscriber = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.rxSubscriber = typeof Symbol === 'function'
      ? Symbol('rxSubscriber')
      : '@@rxSubscriber_' + Math.random();
  exports.$$rxSubscriber = exports.rxSubscriber;

  });

  unwrapExports(rxSubscriber);
  var rxSubscriber_1 = rxSubscriber.rxSubscriber;
  var rxSubscriber_2 = rxSubscriber.$$rxSubscriber;

  var Subscriber_1 = createCommonjsModule(function (module, exports) {
  var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  Object.defineProperty(exports, "__esModule", { value: true });






  var Subscriber = (function (_super) {
      __extends(Subscriber, _super);
      function Subscriber(destinationOrNext, error, complete) {
          var _this = _super.call(this) || this;
          _this.syncErrorValue = null;
          _this.syncErrorThrown = false;
          _this.syncErrorThrowable = false;
          _this.isStopped = false;
          _this._parentSubscription = null;
          switch (arguments.length) {
              case 0:
                  _this.destination = Observer.empty;
                  break;
              case 1:
                  if (!destinationOrNext) {
                      _this.destination = Observer.empty;
                      break;
                  }
                  if (typeof destinationOrNext === 'object') {
                      if (destinationOrNext instanceof Subscriber) {
                          _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                          _this.destination = destinationOrNext;
                          destinationOrNext.add(_this);
                      }
                      else {
                          _this.syncErrorThrowable = true;
                          _this.destination = new SafeSubscriber(_this, destinationOrNext);
                      }
                      break;
                  }
              default:
                  _this.syncErrorThrowable = true;
                  _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                  break;
          }
          return _this;
      }
      Subscriber.prototype[rxSubscriber.rxSubscriber] = function () { return this; };
      Subscriber.create = function (next, error, complete) {
          var subscriber = new Subscriber(next, error, complete);
          subscriber.syncErrorThrowable = false;
          return subscriber;
      };
      Subscriber.prototype.next = function (value) {
          if (!this.isStopped) {
              this._next(value);
          }
      };
      Subscriber.prototype.error = function (err) {
          if (!this.isStopped) {
              this.isStopped = true;
              this._error(err);
          }
      };
      Subscriber.prototype.complete = function () {
          if (!this.isStopped) {
              this.isStopped = true;
              this._complete();
          }
      };
      Subscriber.prototype.unsubscribe = function () {
          if (this.closed) {
              return;
          }
          this.isStopped = true;
          _super.prototype.unsubscribe.call(this);
      };
      Subscriber.prototype._next = function (value) {
          this.destination.next(value);
      };
      Subscriber.prototype._error = function (err) {
          this.destination.error(err);
          this.unsubscribe();
      };
      Subscriber.prototype._complete = function () {
          this.destination.complete();
          this.unsubscribe();
      };
      Subscriber.prototype._unsubscribeAndRecycle = function () {
          var _a = this, _parent = _a._parent, _parents = _a._parents;
          this._parent = null;
          this._parents = null;
          this.unsubscribe();
          this.closed = false;
          this.isStopped = false;
          this._parent = _parent;
          this._parents = _parents;
          this._parentSubscription = null;
          return this;
      };
      return Subscriber;
  }(Subscription_1.Subscription));
  exports.Subscriber = Subscriber;
  var SafeSubscriber = (function (_super) {
      __extends(SafeSubscriber, _super);
      function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
          var _this = _super.call(this) || this;
          _this._parentSubscriber = _parentSubscriber;
          var next;
          var context = _this;
          if (isFunction_1.isFunction(observerOrNext)) {
              next = observerOrNext;
          }
          else if (observerOrNext) {
              next = observerOrNext.next;
              error = observerOrNext.error;
              complete = observerOrNext.complete;
              if (observerOrNext !== Observer.empty) {
                  context = Object.create(observerOrNext);
                  if (isFunction_1.isFunction(context.unsubscribe)) {
                      _this.add(context.unsubscribe.bind(context));
                  }
                  context.unsubscribe = _this.unsubscribe.bind(_this);
              }
          }
          _this._context = context;
          _this._next = next;
          _this._error = error;
          _this._complete = complete;
          return _this;
      }
      SafeSubscriber.prototype.next = function (value) {
          if (!this.isStopped && this._next) {
              var _parentSubscriber = this._parentSubscriber;
              if (!config.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                  this.__tryOrUnsub(this._next, value);
              }
              else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                  this.unsubscribe();
              }
          }
      };
      SafeSubscriber.prototype.error = function (err) {
          if (!this.isStopped) {
              var _parentSubscriber = this._parentSubscriber;
              var useDeprecatedSynchronousErrorHandling = config.config.useDeprecatedSynchronousErrorHandling;
              if (this._error) {
                  if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                      this.__tryOrUnsub(this._error, err);
                      this.unsubscribe();
                  }
                  else {
                      this.__tryOrSetError(_parentSubscriber, this._error, err);
                      this.unsubscribe();
                  }
              }
              else if (!_parentSubscriber.syncErrorThrowable) {
                  this.unsubscribe();
                  if (useDeprecatedSynchronousErrorHandling) {
                      throw err;
                  }
                  hostReportError_1.hostReportError(err);
              }
              else {
                  if (useDeprecatedSynchronousErrorHandling) {
                      _parentSubscriber.syncErrorValue = err;
                      _parentSubscriber.syncErrorThrown = true;
                  }
                  else {
                      hostReportError_1.hostReportError(err);
                  }
                  this.unsubscribe();
              }
          }
      };
      SafeSubscriber.prototype.complete = function () {
          var _this = this;
          if (!this.isStopped) {
              var _parentSubscriber = this._parentSubscriber;
              if (this._complete) {
                  var wrappedComplete = function () { return _this._complete.call(_this._context); };
                  if (!config.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                      this.__tryOrUnsub(wrappedComplete);
                      this.unsubscribe();
                  }
                  else {
                      this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                      this.unsubscribe();
                  }
              }
              else {
                  this.unsubscribe();
              }
          }
      };
      SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
          try {
              fn.call(this._context, value);
          }
          catch (err) {
              this.unsubscribe();
              if (config.config.useDeprecatedSynchronousErrorHandling) {
                  throw err;
              }
              else {
                  hostReportError_1.hostReportError(err);
              }
          }
      };
      SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
          if (!config.config.useDeprecatedSynchronousErrorHandling) {
              throw new Error('bad call');
          }
          try {
              fn.call(this._context, value);
          }
          catch (err) {
              if (config.config.useDeprecatedSynchronousErrorHandling) {
                  parent.syncErrorValue = err;
                  parent.syncErrorThrown = true;
                  return true;
              }
              else {
                  hostReportError_1.hostReportError(err);
                  return true;
              }
          }
          return false;
      };
      SafeSubscriber.prototype._unsubscribe = function () {
          var _parentSubscriber = this._parentSubscriber;
          this._context = null;
          this._parentSubscriber = null;
          _parentSubscriber.unsubscribe();
      };
      return SafeSubscriber;
  }(Subscriber));
  exports.SafeSubscriber = SafeSubscriber;

  });

  unwrapExports(Subscriber_1);
  var Subscriber_2 = Subscriber_1.Subscriber;
  var Subscriber_3 = Subscriber_1.SafeSubscriber;

  var filter_1 = createCommonjsModule(function (module, exports) {
  var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  Object.defineProperty(exports, "__esModule", { value: true });

  function filter(predicate, thisArg) {
      return function filterOperatorFunction(source) {
          return source.lift(new FilterOperator(predicate, thisArg));
      };
  }
  exports.filter = filter;
  var FilterOperator = (function () {
      function FilterOperator(predicate, thisArg) {
          this.predicate = predicate;
          this.thisArg = thisArg;
      }
      FilterOperator.prototype.call = function (subscriber, source) {
          return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
      };
      return FilterOperator;
  }());
  var FilterSubscriber = (function (_super) {
      __extends(FilterSubscriber, _super);
      function FilterSubscriber(destination, predicate, thisArg) {
          var _this = _super.call(this, destination) || this;
          _this.predicate = predicate;
          _this.thisArg = thisArg;
          _this.count = 0;
          return _this;
      }
      FilterSubscriber.prototype._next = function (value) {
          var result;
          try {
              result = this.predicate.call(this.thisArg, value, this.count++);
          }
          catch (err) {
              this.destination.error(err);
              return;
          }
          if (result) {
              this.destination.next(value);
          }
      };
      return FilterSubscriber;
  }(Subscriber_1.Subscriber));

  });

  unwrapExports(filter_1);
  var filter_2 = filter_1.filter;

  var filter_1$1 = filter_1.filter;

  var filter$1 = {
  	filter: filter_1$1
  };

  var map_1 = createCommonjsModule(function (module, exports) {
  var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  Object.defineProperty(exports, "__esModule", { value: true });

  function map(project, thisArg) {
      return function mapOperation(source) {
          if (typeof project !== 'function') {
              throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
          }
          return source.lift(new MapOperator(project, thisArg));
      };
  }
  exports.map = map;
  var MapOperator = (function () {
      function MapOperator(project, thisArg) {
          this.project = project;
          this.thisArg = thisArg;
      }
      MapOperator.prototype.call = function (subscriber, source) {
          return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
      };
      return MapOperator;
  }());
  exports.MapOperator = MapOperator;
  var MapSubscriber = (function (_super) {
      __extends(MapSubscriber, _super);
      function MapSubscriber(destination, project, thisArg) {
          var _this = _super.call(this, destination) || this;
          _this.project = project;
          _this.count = 0;
          _this.thisArg = thisArg || _this;
          return _this;
      }
      MapSubscriber.prototype._next = function (value) {
          var result;
          try {
              result = this.project.call(this.thisArg, value, this.count++);
          }
          catch (err) {
              this.destination.error(err);
              return;
          }
          this.destination.next(result);
      };
      return MapSubscriber;
  }(Subscriber_1.Subscriber));

  });

  unwrapExports(map_1);
  var map_2 = map_1.map;
  var map_3 = map_1.MapOperator;

  var map_1$1 = map_1.map;

  var map$1 = {
  	map: map_1$1
  };

  var isObj = function (x) {
  	var type = typeof x;
  	return x !== null && (type === 'object' || type === 'function');
  };

  var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
  var propIsEnumerable$1 = Object.prototype.propertyIsEnumerable;

  function toObject$1(val) {
  	if (val === null || val === undefined) {
  		throw new TypeError('Sources cannot be null or undefined');
  	}

  	return Object(val);
  }

  function assignKey(to, from, key) {
  	var val = from[key];

  	if (val === undefined || val === null) {
  		return;
  	}

  	if (hasOwnProperty$1.call(to, key)) {
  		if (to[key] === undefined || to[key] === null) {
  			throw new TypeError('Cannot convert undefined or null to object (' + key + ')');
  		}
  	}

  	if (!hasOwnProperty$1.call(to, key) || !isObj(val)) {
  		to[key] = val;
  	} else {
  		to[key] = assign(Object(to[key]), from[key]);
  	}
  }

  function assign(to, from) {
  	if (to === from) {
  		return to;
  	}

  	from = Object(from);

  	for (var key in from) {
  		if (hasOwnProperty$1.call(from, key)) {
  			assignKey(to, from, key);
  		}
  	}

  	if (Object.getOwnPropertySymbols) {
  		var symbols = Object.getOwnPropertySymbols(from);

  		for (var i = 0; i < symbols.length; i++) {
  			if (propIsEnumerable$1.call(from, symbols[i])) {
  				assignKey(to, from, symbols[i]);
  			}
  		}
  	}

  	return to;
  }

  var deepAssign = function deepAssign(target) {
  	target = toObject$1(target);

  	for (var s = 1; s < arguments.length; s++) {
  		assign(target, arguments[s]);
  	}

  	return target;
  };

  var getSelection = function getSelection(sel) {
    if (typeof sel === 'string' || Array.isArray(sel)) {
      return {
        id: sel
      };
    }

    if (sel && sel.query) {
      return {
        query: sel.query
      };
    }

    var selectionOpts = ['* Document ID (<docId>)', '* Array of document IDs', '* Object containing `query`'].join('\n');
    throw new Error("Unknown selection - must be one of:\n\n".concat(selectionOpts));
  };

  var validators = createCommonjsModule(function (module, exports) {

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  var VALID_ASSET_TYPES = ['image', 'file'];
  var VALID_INSERT_LOCATIONS = ['before', 'after', 'replace'];

  exports.dataset = function (name) {
    if (!/^[-\w]{1,128}$/.test(name)) {
      throw new Error('Datasets can only contain lowercase characters, numbers, underscores and dashes');
    }
  };

  exports.projectId = function (id) {
    if (!/^[-a-z0-9]+$/i.test(id)) {
      throw new Error('`projectId` can only contain only a-z, 0-9 and dashes');
    }
  };

  exports.validateAssetType = function (type) {
    if (VALID_ASSET_TYPES.indexOf(type) === -1) {
      throw new Error("Invalid asset type: ".concat(type, ". Must be one of ").concat(VALID_ASSET_TYPES.join(', ')));
    }
  };

  exports.validateObject = function (op, val) {
    if (val === null || _typeof(val) !== 'object' || Array.isArray(val)) {
      throw new Error("".concat(op, "() takes an object of properties"));
    }
  };

  exports.requireDocumentId = function (op, doc) {
    if (!doc._id) {
      throw new Error("".concat(op, "() requires that the document contains an ID (\"_id\" property)"));
    }

    exports.validateDocumentId(op, doc._id);
  };

  exports.validateDocumentId = function (op, id) {
    if (typeof id !== 'string' || !/^[a-z0-9_.-]+$/i.test(id)) {
      throw new Error("".concat(op, "(): \"").concat(id, "\" is not a valid document ID"));
    }
  };

  exports.validateInsert = function (at, selector, items) {
    var signature = 'insert(at, selector, items)';

    if (VALID_INSERT_LOCATIONS.indexOf(at) === -1) {
      var valid = VALID_INSERT_LOCATIONS.map(function (loc) {
        return "\"".concat(loc, "\"");
      }).join(', ');
      throw new Error("".concat(signature, " takes an \"at\"-argument which is one of: ").concat(valid));
    }

    if (typeof selector !== 'string') {
      throw new Error("".concat(signature, " takes a \"selector\"-argument which must be a string"));
    }

    if (!Array.isArray(items)) {
      throw new Error("".concat(signature, " takes an \"items\"-argument which must be an array"));
    }
  };

  exports.hasDataset = function (config) {
    if (!config.gradientMode && !config.dataset) {
      throw new Error('`dataset` must be provided to perform queries');
    }

    return config.dataset || '';
  };
  });
  var validators_1 = validators.dataset;
  var validators_2 = validators.projectId;
  var validators_3 = validators.validateAssetType;
  var validators_4 = validators.validateObject;
  var validators_5 = validators.requireDocumentId;
  var validators_6 = validators.validateDocumentId;
  var validators_7 = validators.validateInsert;
  var validators_8 = validators.hasDataset;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









  var validateObject = validators.validateObject;
  var validateInsert = validators.validateInsert;

  function Patch(selection) {
    var operations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var client = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    this.selection = selection;
    this.operations = objectAssign({}, operations);
    this.client = client;
  }

  objectAssign(Patch.prototype, {
    clone: function clone() {
      return new Patch(this.selection, objectAssign({}, this.operations), this.client);
    },
    merge: function merge(props) {
      validateObject('merge', props);
      var stack = new Error().stack.toString().split('\n').filter(function (str) {
        return str.trim();
      }).slice(2);
      console.warn("The \"merge\" patch has been deprecated and will be removed in the future\n".concat(stack.join('\n')));
      return this._assign('merge', deepAssign(this.operations.merge || {}, props));
    },
    set: function set(props) {
      return this._assign('set', props);
    },
    diffMatchPatch: function diffMatchPatch(props) {
      validateObject('diffMatchPatch', props);
      return this._assign('diffMatchPatch', props);
    },
    unset: function unset(attrs) {
      if (!Array.isArray(attrs)) {
        throw new Error('unset(attrs) takes an array of attributes to unset, non-array given');
      }

      this.operations = objectAssign({}, this.operations, {
        unset: attrs
      });
      return this;
    },
    setIfMissing: function setIfMissing(props) {
      return this._assign('setIfMissing', props);
    },
    replace: function replace(props) {
      validateObject('replace', props);
      return this._set('set', {
        $: props
      }); // eslint-disable-line id-length
    },
    inc: function inc(props) {
      return this._assign('inc', props);
    },
    dec: function dec(props) {
      return this._assign('dec', props);
    },
    insert: function insert(at, selector, items) {
      var _this$_assign;

      validateInsert(at, selector, items);
      return this._assign('insert', (_this$_assign = {}, _defineProperty(_this$_assign, at, selector), _defineProperty(_this$_assign, "items", items), _this$_assign));
    },
    append: function append(selector, items) {
      return this.insert('after', "".concat(selector, "[-1]"), items);
    },
    prepend: function prepend(selector, items) {
      return this.insert('before', "".concat(selector, "[0]"), items);
    },
    splice: function splice(selector, start, deleteCount, items) {
      // Negative indexes doesn't mean the same in Sanity as they do in JS;
      // -1 means "actually at the end of the array", which allows inserting
      // at the end of the array without knowing its length. We therefore have
      // to substract negative indexes by one to match JS. If you want Sanity-
      // behaviour, just use `insert('replace', selector, items)` directly
      var delAll = typeof deleteCount === 'undefined' || deleteCount === -1;
      var startIndex = start < 0 ? start - 1 : start;
      var delCount = delAll ? -1 : Math.max(0, start + deleteCount);
      var delRange = startIndex < 0 && delCount >= 0 ? '' : delCount;
      var rangeSelector = "".concat(selector, "[").concat(startIndex, ":").concat(delRange, "]");
      return this.insert('replace', rangeSelector, items || []);
    },
    ifRevisionId: function ifRevisionId(rev) {
      this.operations.ifRevisionID = rev;
      return this;
    },
    serialize: function serialize() {
      return objectAssign(getSelection(this.selection), this.operations);
    },
    toJSON: function toJSON() {
      return this.serialize();
    },
    commit: function commit() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!this.client) {
        throw new Error('No `client` passed to patch, either provide one or pass the ' + 'patch to a clients `mutate()` method');
      }

      var returnFirst = typeof this.selection === 'string';
      var opts = objectAssign({
        returnFirst: returnFirst,
        returnDocuments: true
      }, options);
      return this.client.mutate({
        patch: this.serialize()
      }, opts);
    },
    reset: function reset() {
      this.operations = {};
      return this;
    },
    _set: function _set(op, props) {
      return this._assign(op, props, false);
    },
    _assign: function _assign(op, props) {
      var merge = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      validateObject(op, props);
      this.operations = objectAssign({}, this.operations, _defineProperty({}, op, objectAssign({}, merge && this.operations[op] || {}, props)));
      return this;
    }
  });
  var patch = Patch;

  function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







  var defaultMutateOptions = {
    returnDocuments: false
  };

  function Transaction() {
    var operations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var client = arguments.length > 1 ? arguments[1] : undefined;
    var transactionId = arguments.length > 2 ? arguments[2] : undefined;
    this.trxId = transactionId;
    this.operations = operations;
    this.client = client;
  }

  objectAssign(Transaction.prototype, {
    clone: function clone() {
      return new Transaction(this.operations.slice(0), this.client, this.trxId);
    },
    create: function create(doc) {
      validators.validateObject('create', doc);
      return this._add({
        create: doc
      });
    },
    createIfNotExists: function createIfNotExists(doc) {
      var op = 'createIfNotExists';
      validators.validateObject(op, doc);
      validators.requireDocumentId(op, doc);
      return this._add(_defineProperty$1({}, op, doc));
    },
    createOrReplace: function createOrReplace(doc) {
      var op = 'createOrReplace';
      validators.validateObject(op, doc);
      validators.requireDocumentId(op, doc);
      return this._add(_defineProperty$1({}, op, doc));
    },
    delete: function _delete(documentId) {
      validators.validateDocumentId('delete', documentId);
      return this._add({
        delete: {
          id: documentId
        }
      });
    },
    patch: function patch$1(documentId, patchOps) {
      var isBuilder = typeof patchOps === 'function';
      var isPatch = documentId instanceof patch; // transaction.patch(client.patch('documentId').inc({visits: 1}))

      if (isPatch) {
        return this._add({
          patch: documentId.serialize()
        });
      } // patch => patch.inc({visits: 1}).set({foo: 'bar'})


      if (isBuilder) {
        var patch$1 = patchOps(new patch(documentId, {}, this.client));

        if (!(patch$1 instanceof patch)) {
          throw new Error('function passed to `patch()` must return the patch');
        }

        return this._add({
          patch: patch$1.serialize()
        });
      }

      return this._add({
        patch: objectAssign({
          id: documentId
        }, patchOps)
      });
    },
    transactionId: function transactionId(id) {
      if (!id) {
        return this.trxId;
      }

      this.trxId = id;
      return this;
    },
    serialize: function serialize() {
      return this.operations.slice();
    },
    toJSON: function toJSON() {
      return this.serialize();
    },
    commit: function commit(options) {
      if (!this.client) {
        throw new Error('No `client` passed to transaction, either provide one or pass the ' + 'transaction to a clients `mutate()` method');
      }

      return this.client.mutate(this.serialize(), objectAssign({
        transactionId: this.trxId
      }, defaultMutateOptions, options || {}));
    },
    reset: function reset() {
      this.operations = [];
      return this;
    },
    _add: function _add(mut) {
      this.operations.push(mut);
      return this;
    }
  });
  var transaction = Transaction;

  var enc = encodeURIComponent;

  var encodeQueryString = function (_ref) {
    var query = _ref.query,
        _ref$params = _ref.params,
        params = _ref$params === void 0 ? {} : _ref$params,
        _ref$options = _ref.options,
        options = _ref$options === void 0 ? {} : _ref$options;
    var base = "?query=".concat(enc(query));
    var qString = Object.keys(params).reduce(function (qs, param) {
      return "".concat(qs, "&").concat(enc("$".concat(param)), "=").concat(enc(JSON.stringify(params[param])));
    }, base);
    return Object.keys(options).reduce(function (qs, option) {
      // Only include the option if it is truthy
      return options[option] ? "".concat(qs, "&").concat(enc(option), "=").concat(enc(options[option])) : qs;
    }, qString);
  };

  var canReportError_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });

  function canReportError(observer) {
      while (observer) {
          var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
          if (closed_1 || isStopped) {
              return false;
          }
          else if (destination && destination instanceof Subscriber_1.Subscriber) {
              observer = destination;
          }
          else {
              observer = null;
          }
      }
      return true;
  }
  exports.canReportError = canReportError;

  });

  unwrapExports(canReportError_1);
  var canReportError_2 = canReportError_1.canReportError;

  var toSubscriber_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });



  function toSubscriber(nextOrObserver, error, complete) {
      if (nextOrObserver) {
          if (nextOrObserver instanceof Subscriber_1.Subscriber) {
              return nextOrObserver;
          }
          if (nextOrObserver[rxSubscriber.rxSubscriber]) {
              return nextOrObserver[rxSubscriber.rxSubscriber]();
          }
      }
      if (!nextOrObserver && !error && !complete) {
          return new Subscriber_1.Subscriber(Observer.empty);
      }
      return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
  }
  exports.toSubscriber = toSubscriber;

  });

  unwrapExports(toSubscriber_1);
  var toSubscriber_2 = toSubscriber_1.toSubscriber;

  var observable = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.observable = typeof Symbol === 'function' && Symbol.observable || '@@observable';

  });

  unwrapExports(observable);
  var observable_1 = observable.observable;

  var noop_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  function noop() { }
  exports.noop = noop;

  });

  unwrapExports(noop_1);
  var noop_2 = noop_1.noop;

  var pipe_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });

  function pipe() {
      var fns = [];
      for (var _i = 0; _i < arguments.length; _i++) {
          fns[_i] = arguments[_i];
      }
      return pipeFromArray(fns);
  }
  exports.pipe = pipe;
  function pipeFromArray(fns) {
      if (!fns) {
          return noop_1.noop;
      }
      if (fns.length === 1) {
          return fns[0];
      }
      return function piped(input) {
          return fns.reduce(function (prev, fn) { return fn(prev); }, input);
      };
  }
  exports.pipeFromArray = pipeFromArray;

  });

  unwrapExports(pipe_1);
  var pipe_2 = pipe_1.pipe;
  var pipe_3 = pipe_1.pipeFromArray;

  var Observable_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });





  var Observable = (function () {
      function Observable(subscribe) {
          this._isScalar = false;
          if (subscribe) {
              this._subscribe = subscribe;
          }
      }
      Observable.prototype.lift = function (operator) {
          var observable = new Observable();
          observable.source = this;
          observable.operator = operator;
          return observable;
      };
      Observable.prototype.subscribe = function (observerOrNext, error, complete) {
          var operator = this.operator;
          var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
          if (operator) {
              operator.call(sink, this.source);
          }
          else {
              sink.add(this.source || (config.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                  this._subscribe(sink) :
                  this._trySubscribe(sink));
          }
          if (config.config.useDeprecatedSynchronousErrorHandling) {
              if (sink.syncErrorThrowable) {
                  sink.syncErrorThrowable = false;
                  if (sink.syncErrorThrown) {
                      throw sink.syncErrorValue;
                  }
              }
          }
          return sink;
      };
      Observable.prototype._trySubscribe = function (sink) {
          try {
              return this._subscribe(sink);
          }
          catch (err) {
              if (config.config.useDeprecatedSynchronousErrorHandling) {
                  sink.syncErrorThrown = true;
                  sink.syncErrorValue = err;
              }
              if (canReportError_1.canReportError(sink)) {
                  sink.error(err);
              }
              else {
                  console.warn(err);
              }
          }
      };
      Observable.prototype.forEach = function (next, promiseCtor) {
          var _this = this;
          promiseCtor = getPromiseCtor(promiseCtor);
          return new promiseCtor(function (resolve, reject) {
              var subscription;
              subscription = _this.subscribe(function (value) {
                  try {
                      next(value);
                  }
                  catch (err) {
                      reject(err);
                      if (subscription) {
                          subscription.unsubscribe();
                      }
                  }
              }, reject, resolve);
          });
      };
      Observable.prototype._subscribe = function (subscriber) {
          var source = this.source;
          return source && source.subscribe(subscriber);
      };
      Observable.prototype[observable.observable] = function () {
          return this;
      };
      Observable.prototype.pipe = function () {
          var operations = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              operations[_i] = arguments[_i];
          }
          if (operations.length === 0) {
              return this;
          }
          return pipe_1.pipeFromArray(operations)(this);
      };
      Observable.prototype.toPromise = function (promiseCtor) {
          var _this = this;
          promiseCtor = getPromiseCtor(promiseCtor);
          return new promiseCtor(function (resolve, reject) {
              var value;
              _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
          });
      };
      Observable.create = function (subscribe) {
          return new Observable(subscribe);
      };
      return Observable;
  }());
  exports.Observable = Observable;
  function getPromiseCtor(promiseCtor) {
      if (!promiseCtor) {
          promiseCtor = config.config.Promise || Promise;
      }
      if (!promiseCtor) {
          throw new Error('no Promise impl found');
      }
      return promiseCtor;
  }

  });

  unwrapExports(Observable_1);
  var Observable_2 = Observable_1.Observable;

  var scan_1 = createCommonjsModule(function (module, exports) {
  var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  Object.defineProperty(exports, "__esModule", { value: true });

  function scan(accumulator, seed) {
      var hasSeed = false;
      if (arguments.length >= 2) {
          hasSeed = true;
      }
      return function scanOperatorFunction(source) {
          return source.lift(new ScanOperator(accumulator, seed, hasSeed));
      };
  }
  exports.scan = scan;
  var ScanOperator = (function () {
      function ScanOperator(accumulator, seed, hasSeed) {
          if (hasSeed === void 0) { hasSeed = false; }
          this.accumulator = accumulator;
          this.seed = seed;
          this.hasSeed = hasSeed;
      }
      ScanOperator.prototype.call = function (subscriber, source) {
          return source.subscribe(new ScanSubscriber(subscriber, this.accumulator, this.seed, this.hasSeed));
      };
      return ScanOperator;
  }());
  var ScanSubscriber = (function (_super) {
      __extends(ScanSubscriber, _super);
      function ScanSubscriber(destination, accumulator, _seed, hasSeed) {
          var _this = _super.call(this, destination) || this;
          _this.accumulator = accumulator;
          _this._seed = _seed;
          _this.hasSeed = hasSeed;
          _this.index = 0;
          return _this;
      }
      Object.defineProperty(ScanSubscriber.prototype, "seed", {
          get: function () {
              return this._seed;
          },
          set: function (value) {
              this.hasSeed = true;
              this._seed = value;
          },
          enumerable: true,
          configurable: true
      });
      ScanSubscriber.prototype._next = function (value) {
          if (!this.hasSeed) {
              this.seed = value;
              this.destination.next(value);
          }
          else {
              return this._tryNext(value);
          }
      };
      ScanSubscriber.prototype._tryNext = function (value) {
          var index = this.index++;
          var result;
          try {
              result = this.accumulator(this.seed, value, index);
          }
          catch (err) {
              this.destination.error(err);
          }
          this.seed = result;
          this.destination.next(result);
      };
      return ScanSubscriber;
  }(Subscriber_1.Subscriber));

  });

  unwrapExports(scan_1);
  var scan_2 = scan_1.scan;

  var ArgumentOutOfRangeError = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  function ArgumentOutOfRangeErrorImpl() {
      Error.call(this);
      this.message = 'argument out of range';
      this.name = 'ArgumentOutOfRangeError';
      return this;
  }
  ArgumentOutOfRangeErrorImpl.prototype = Object.create(Error.prototype);
  exports.ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl;

  });

  unwrapExports(ArgumentOutOfRangeError);
  var ArgumentOutOfRangeError_1 = ArgumentOutOfRangeError.ArgumentOutOfRangeError;

  var empty_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });

  exports.EMPTY = new Observable_1.Observable(function (subscriber) { return subscriber.complete(); });
  function empty(scheduler) {
      return scheduler ? emptyScheduled(scheduler) : exports.EMPTY;
  }
  exports.empty = empty;
  function emptyScheduled(scheduler) {
      return new Observable_1.Observable(function (subscriber) { return scheduler.schedule(function () { return subscriber.complete(); }); });
  }
  exports.emptyScheduled = emptyScheduled;

  });

  unwrapExports(empty_1);
  var empty_2 = empty_1.EMPTY;
  var empty_3 = empty_1.empty;
  var empty_4 = empty_1.emptyScheduled;

  var takeLast_1 = createCommonjsModule(function (module, exports) {
  var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  Object.defineProperty(exports, "__esModule", { value: true });



  function takeLast(count) {
      return function takeLastOperatorFunction(source) {
          if (count === 0) {
              return empty_1.empty();
          }
          else {
              return source.lift(new TakeLastOperator(count));
          }
      };
  }
  exports.takeLast = takeLast;
  var TakeLastOperator = (function () {
      function TakeLastOperator(total) {
          this.total = total;
          if (this.total < 0) {
              throw new ArgumentOutOfRangeError.ArgumentOutOfRangeError;
          }
      }
      TakeLastOperator.prototype.call = function (subscriber, source) {
          return source.subscribe(new TakeLastSubscriber(subscriber, this.total));
      };
      return TakeLastOperator;
  }());
  var TakeLastSubscriber = (function (_super) {
      __extends(TakeLastSubscriber, _super);
      function TakeLastSubscriber(destination, total) {
          var _this = _super.call(this, destination) || this;
          _this.total = total;
          _this.ring = new Array();
          _this.count = 0;
          return _this;
      }
      TakeLastSubscriber.prototype._next = function (value) {
          var ring = this.ring;
          var total = this.total;
          var count = this.count++;
          if (ring.length < total) {
              ring.push(value);
          }
          else {
              var index = count % total;
              ring[index] = value;
          }
      };
      TakeLastSubscriber.prototype._complete = function () {
          var destination = this.destination;
          var count = this.count;
          if (count > 0) {
              var total = this.count >= this.total ? this.total : this.count;
              var ring = this.ring;
              for (var i = 0; i < total; i++) {
                  var idx = (count++) % total;
                  destination.next(ring[idx]);
              }
          }
          destination.complete();
      };
      return TakeLastSubscriber;
  }(Subscriber_1.Subscriber));

  });

  unwrapExports(takeLast_1);
  var takeLast_2 = takeLast_1.takeLast;

  var defaultIfEmpty_1 = createCommonjsModule(function (module, exports) {
  var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  Object.defineProperty(exports, "__esModule", { value: true });

  function defaultIfEmpty(defaultValue) {
      if (defaultValue === void 0) { defaultValue = null; }
      return function (source) { return source.lift(new DefaultIfEmptyOperator(defaultValue)); };
  }
  exports.defaultIfEmpty = defaultIfEmpty;
  var DefaultIfEmptyOperator = (function () {
      function DefaultIfEmptyOperator(defaultValue) {
          this.defaultValue = defaultValue;
      }
      DefaultIfEmptyOperator.prototype.call = function (subscriber, source) {
          return source.subscribe(new DefaultIfEmptySubscriber(subscriber, this.defaultValue));
      };
      return DefaultIfEmptyOperator;
  }());
  var DefaultIfEmptySubscriber = (function (_super) {
      __extends(DefaultIfEmptySubscriber, _super);
      function DefaultIfEmptySubscriber(destination, defaultValue) {
          var _this = _super.call(this, destination) || this;
          _this.defaultValue = defaultValue;
          _this.isEmpty = true;
          return _this;
      }
      DefaultIfEmptySubscriber.prototype._next = function (value) {
          this.isEmpty = false;
          this.destination.next(value);
      };
      DefaultIfEmptySubscriber.prototype._complete = function () {
          if (this.isEmpty) {
              this.destination.next(this.defaultValue);
          }
          this.destination.complete();
      };
      return DefaultIfEmptySubscriber;
  }(Subscriber_1.Subscriber));

  });

  unwrapExports(defaultIfEmpty_1);
  var defaultIfEmpty_2 = defaultIfEmpty_1.defaultIfEmpty;

  var reduce_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });




  function reduce(accumulator, seed) {
      if (arguments.length >= 2) {
          return function reduceOperatorFunctionWithSeed(source) {
              return pipe_1.pipe(scan_1.scan(accumulator, seed), takeLast_1.takeLast(1), defaultIfEmpty_1.defaultIfEmpty(seed))(source);
          };
      }
      return function reduceOperatorFunction(source) {
          return pipe_1.pipe(scan_1.scan(function (acc, value, index) { return accumulator(acc, value, index + 1); }), takeLast_1.takeLast(1))(source);
      };
  }
  exports.reduce = reduce;

  });

  unwrapExports(reduce_1);
  var reduce_2 = reduce_1.reduce;

  var reduce_1$1 = reduce_1.reduce;

  var reduce$1 = {
  	reduce: reduce_1$1
  };

  var Observable = Observable_1.Observable;



  var map$2 = map$1.map;

  var filter$2 = filter$1.filter;

  var reduce$2 = reduce$1.reduce;
  /*
   A minimal rxjs based observable that align as closely as possible with the current es-observable spec,
   without the static factory methods
   */


  function SanityObservableMinimal() {
    Observable.apply(this, arguments); // eslint-disable-line prefer-rest-params
  }

  SanityObservableMinimal.prototype = Object.create(objectAssign(Object.create(null), Observable.prototype));
  Object.defineProperty(SanityObservableMinimal.prototype, 'constructor', {
    value: SanityObservableMinimal,
    enumerable: false,
    writable: true,
    configurable: true
  });

  SanityObservableMinimal.prototype.lift = function lift(operator) {
    var observable = new SanityObservableMinimal();
    observable.source = this;
    observable.operator = operator;
    return observable;
  };

  function createDeprecatedMemberOp(name, op) {
    var hasWarned = false;
    return function deprecatedOperator() {
      if (!hasWarned) {
        hasWarned = true;
        console.warn(new Error("Calling observable.".concat(name, "(...) is deprecated. Please use observable.pipe(").concat(name, "(...)) instead")));
      }

      return this.pipe(op.apply(this, arguments));
    };
  }

  SanityObservableMinimal.prototype.map = createDeprecatedMemberOp('map', map$2);
  SanityObservableMinimal.prototype.filter = createDeprecatedMemberOp('filter', filter$2);
  SanityObservableMinimal.prototype.reduce = createDeprecatedMemberOp('filter', reduce$2);
  var SanityObservableMinimal_1 = SanityObservableMinimal;

  var minimal = SanityObservableMinimal_1;

  (function (global) {

      if (global.EventSource && !global._eventSourceImportPrefix){
          return;
      }

      var evsImportName = (global._eventSourceImportPrefix||'')+"EventSource";

      var EventSource = function (url, options) {

          if (!url || typeof url != 'string') {
              throw new SyntaxError('Not enough arguments');
          }

          this.URL = url;
          this.setOptions(options);
          var evs = this;
          setTimeout(function(){evs.poll();}, 0);
      };

      EventSource.prototype = {

          CONNECTING: 0,

          OPEN: 1,

          CLOSED: 2,

          defaultOptions: {

              loggingEnabled: false,

              loggingPrefix: "eventsource",

              interval: 500, // milliseconds

              bufferSizeLimit: 256*1024, // bytes

              silentTimeout: 300000, // milliseconds

              getArgs:{
                  'evs_buffer_size_limit': 256*1024
              },

              xhrHeaders:{
                  'Accept': 'text/event-stream',
                  'Cache-Control': 'no-cache',
                  'X-Requested-With': 'XMLHttpRequest'
              }
          },

          setOptions: function(options){

              var defaults = this.defaultOptions;
              var option;

              // set all default options...
              for (option in defaults){

                  if ( defaults.hasOwnProperty(option) ){
                      this[option] = defaults[option];
                  }
              }

              // override with what is in options
              for (option in options){

                  if (option in defaults && options.hasOwnProperty(option)){
                      this[option] = options[option];
                  }
              }

              // if getArgs option is enabled
              // ensure evs_buffer_size_limit corresponds to bufferSizeLimit
              if (this.getArgs && this.bufferSizeLimit) {

                  this.getArgs['evs_buffer_size_limit'] = this.bufferSizeLimit;
              }

              // if console is not available, force loggingEnabled to false
              if (typeof console === "undefined" || typeof console.log === "undefined") {

                  this.loggingEnabled = false;
              }
          },

          log: function(message) {

              if (this.loggingEnabled) {

                  console.log("[" + this.loggingPrefix +"]:" + message);
              }
          },

          poll: function() {

              try {

                  if (this.readyState == this.CLOSED) {
                      return;
                  }

                  this.cleanup();
                  this.readyState = this.CONNECTING;
                  this.cursor = 0;
                  this.cache = '';
                  this._xhr = new this.XHR(this);
                  this.resetNoActivityTimer();

              }
              catch (e) {

                  // in an attempt to silence the errors
                  this.log('There were errors inside the pool try-catch');
                  this.dispatchEvent('error', { type: 'error', data: e.message });
              }
          },

          pollAgain: function (interval) {

              // schedule poll to be called after interval milliseconds
              var evs = this;
              evs.readyState = evs.CONNECTING;
              evs.dispatchEvent('error', {
                  type: 'error',
                  data: "Reconnecting "
              });
              this._pollTimer = setTimeout(function(){evs.poll();}, interval||0);
          },


          cleanup: function() {

              this.log('evs cleaning up');

              if (this._pollTimer){
                  clearInterval(this._pollTimer);
                  this._pollTimer = null;
              }

              if (this._noActivityTimer){
                  clearInterval(this._noActivityTimer);
                  this._noActivityTimer = null;
              }

              if (this._xhr){
                  this._xhr.abort();
                  this._xhr = null;
              }
          },

          resetNoActivityTimer: function(){

              if (this.silentTimeout){

                  if (this._noActivityTimer){
                      clearInterval(this._noActivityTimer);
                  }
                  var evs = this;
                  this._noActivityTimer = setTimeout(
                          function(){ evs.log('Timeout! silentTImeout:'+evs.silentTimeout); evs.pollAgain(); },
                          this.silentTimeout
                          );
              }
          },

          close: function () {

              this.readyState = this.CLOSED;
              this.log('Closing connection. readyState: '+this.readyState);
              this.cleanup();
          },

          ondata: function() {

              var request = this._xhr;

              if (request.isReady() && !request.hasError() ) {
                  // reset the timer, as we have activity
                  this.resetNoActivityTimer();

                  // move this EventSource to OPEN state...
                  if (this.readyState == this.CONNECTING) {
                      this.readyState = this.OPEN;
                      this.dispatchEvent('open', { type: 'open' });
                  }

                  var buffer = request.getBuffer();

                  if (buffer.length > this.bufferSizeLimit) {
                      this.log('buffer.length > this.bufferSizeLimit');
                      this.pollAgain();
                  }

                  if (this.cursor == 0 && buffer.length > 0){

                      // skip byte order mark \uFEFF character if it starts the stream
                      if (buffer.substring(0,1) == '\uFEFF'){
                          this.cursor = 1;
                      }
                  }

                  var lastMessageIndex = this.lastMessageIndex(buffer);
                  if (lastMessageIndex[0] >= this.cursor){

                      var newcursor = lastMessageIndex[1];
                      var toparse = buffer.substring(this.cursor, newcursor);
                      this.parseStream(toparse);
                      this.cursor = newcursor;
                  }

                  // if request is finished, reopen the connection
                  if (request.isDone()) {
                      this.log('request.isDone(). reopening the connection');
                      this.pollAgain(this.interval);
                  }
              }
              else if (this.readyState !== this.CLOSED) {

                  this.log('this.readyState !== this.CLOSED');
                  this.pollAgain(this.interval);

                  //MV: Unsure why an error was previously dispatched
              }
          },

          parseStream: function(chunk) {

              // normalize line separators (\r\n,\r,\n) to \n
              // remove white spaces that may precede \n
              chunk = this.cache + this.normalizeToLF(chunk);

              var events = chunk.split('\n\n');

              var i, j, eventType, datas, line, retry;

              for (i=0; i < (events.length - 1); i++) {

                  eventType = 'message';
                  datas = [];
                  parts = events[i].split('\n');

                  for (j=0; j < parts.length; j++) {

                      line = this.trimWhiteSpace(parts[j]);

                      if (line.indexOf('event') == 0) {

                          eventType = line.replace(/event:?\s*/, '');
                      }
                      else if (line.indexOf('retry') == 0) {

                          retry = parseInt(line.replace(/retry:?\s*/, ''));
                          if(!isNaN(retry)) {
                              this.interval = retry;
                          }
                      }
                      else if (line.indexOf('data') == 0) {

                          datas.push(line.replace(/data:?\s*/, ''));
                      }
                      else if (line.indexOf('id:') == 0) {

                          this.lastEventId = line.replace(/id:?\s*/, '');
                      }
                      else if (line.indexOf('id') == 0) { // this resets the id

                          this.lastEventId = null;
                      }
                  }

                  if (datas.length) {
                      // dispatch a new event
                      var event = new MessageEvent(eventType, datas.join('\n'), window.location.origin, this.lastEventId);
                      this.dispatchEvent(eventType, event);
                  }
              }

              this.cache = events[events.length - 1];
          },

          dispatchEvent: function (type, event) {
              var handlers = this['_' + type + 'Handlers'];

              if (handlers) {

                  for (var i = 0; i < handlers.length; i++) {
                      handlers[i].call(this, event);
                  }
              }

              if (this['on' + type]) {
                  this['on' + type].call(this, event);
              }

          },

          addEventListener: function (type, handler) {
              if (!this['_' + type + 'Handlers']) {
                  this['_' + type + 'Handlers'] = [];
              }

              this['_' + type + 'Handlers'].push(handler);
          },

          removeEventListener: function (type, handler) {
              var handlers = this['_' + type + 'Handlers'];
              if (!handlers) {
                  return;
              }
              for (var i = handlers.length - 1; i >= 0; --i) {
                  if (handlers[i] === handler) {
                      handlers.splice(i, 1);
                      break;
                  }
              }
          },

          _pollTimer: null,

          _noactivityTimer: null,

          _xhr: null,

          lastEventId: null,

          cache: '',

          cursor: 0,

          onerror: null,

          onmessage: null,

          onopen: null,

          readyState: 0,

          // ===================================================================
          // helpers functions
          // those are attached to prototype to ease reuse and testing...

          urlWithParams: function (baseURL, params) {

              var encodedArgs = [];

              if (params){

                  var key, urlarg;
                  var urlize = encodeURIComponent;

                  for (key in params){
                      if (params.hasOwnProperty(key)) {
                          urlarg = urlize(key)+'='+urlize(params[key]);
                          encodedArgs.push(urlarg);
                      }
                  }
              }

              if (encodedArgs.length > 0){

                  if (baseURL.indexOf('?') == -1)
                      return baseURL + '?' + encodedArgs.join('&');
                  return baseURL + '&' + encodedArgs.join('&');
              }
              return baseURL;
          },

          lastMessageIndex: function(text) {

              var ln2 =text.lastIndexOf('\n\n');
              var lr2 = text.lastIndexOf('\r\r');
              var lrln2 = text.lastIndexOf('\r\n\r\n');

              if (lrln2 > Math.max(ln2, lr2)) {
                  return [lrln2, lrln2+4];
              }
              return [Math.max(ln2, lr2), Math.max(ln2, lr2) + 2]
          },

          trimWhiteSpace: function(str) {
              // to remove whitespaces left and right of string

              var reTrim = /^(\s|\u00A0)+|(\s|\u00A0)+$/g;
              return str.replace(reTrim, '');
          },

          normalizeToLF: function(str) {

              // replace \r and \r\n with \n
              return str.replace(/\r\n|\r/g, '\n');
          }

      };

      if (!isOldIE()){

          EventSource.isPolyfill = "XHR";

          // EventSource will send request using XMLHttpRequest
          EventSource.prototype.XHR = function(evs) {

              request = new XMLHttpRequest();
              this._request = request;
              evs._xhr = this;

              // set handlers
              request.onreadystatechange = function(){
                  if (request.readyState > 1 && evs.readyState != evs.CLOSED) {
                      if (request.status == 200 || (request.status>=300 && request.status<400)){
                          evs.ondata();
                      }
                      else {
                          request._failed = true;
                          evs.readyState = evs.CLOSED;
                          evs.dispatchEvent('error', {
                              type: 'error',
                              data: "The server responded with "+request.status
                          });
                          evs.close();
                      }
                  }
              };

              request.onprogress = function () {
              };

              request.open('GET', evs.urlWithParams(evs.URL, evs.getArgs), true);

              var headers = evs.xhrHeaders; // maybe null
              for (var header in headers) {
                  if (headers.hasOwnProperty(header)){
                      request.setRequestHeader(header, headers[header]);
                  }
              }
              if (evs.lastEventId) {
                  request.setRequestHeader('Last-Event-Id', evs.lastEventId);
              }

              request.send();
          };

          EventSource.prototype.XHR.prototype = {

              useXDomainRequest: false,

              _request: null,

              _failed: false, // true if we have had errors...

              isReady: function() {


                  return this._request.readyState >= 2;
              },

              isDone: function() {

                  return (this._request.readyState == 4);
              },

              hasError: function() {

                  return (this._failed || (this._request.status >= 400));
              },

              getBuffer: function() {

                  var rv = '';
                  try {
                      rv = this._request.responseText || '';
                  }
                  catch (e){}
                  return rv;
              },

              abort: function() {

                  if ( this._request ) {
                      this._request.abort();
                  }
              }
          };
      }
      else {

  	EventSource.isPolyfill = "IE_8-9";

          // patch EventSource defaultOptions
          var defaults = EventSource.prototype.defaultOptions;
          defaults.xhrHeaders = null; // no headers will be sent
          defaults.getArgs['evs_preamble'] = 2048 + 8;

          // EventSource will send request using Internet Explorer XDomainRequest
          EventSource.prototype.XHR = function(evs) {

              request = new XDomainRequest();
              this._request = request;

              // set handlers
              request.onprogress = function(){
                  request._ready = true;
                  evs.ondata();
              };

              request.onload = function(){
                  this._loaded = true;
                  evs.ondata();
              };

              request.onerror = function(){
                  this._failed = true;
                  evs.readyState = evs.CLOSED;
                  evs.dispatchEvent('error', {
                      type: 'error',
                      data: "XDomainRequest error"
                  });
              };

              request.ontimeout = function(){
                  this._failed = true;
                  evs.readyState = evs.CLOSED;
                  evs.dispatchEvent('error', {
                      type: 'error',
                      data: "XDomainRequest timed out"
                  });
              };

              // XDomainRequest does not allow setting custom headers
              // If EventSource has enabled the use of GET arguments
              // we add parameters to URL so that server can adapt the stream...
              var reqGetArgs = {};
              if (evs.getArgs) {

                  // copy evs.getArgs in reqGetArgs
                  var defaultArgs = evs.getArgs;
                      for (var key in defaultArgs) {
                          if (defaultArgs.hasOwnProperty(key)){
                              reqGetArgs[key] = defaultArgs[key];
                          }
                      }
                  if (evs.lastEventId){
                      reqGetArgs['evs_last_event_id'] = evs.lastEventId;
                  }
              }
              // send the request

              request.open('GET', evs.urlWithParams(evs.URL,reqGetArgs));
              request.send();
          };

          EventSource.prototype.XHR.prototype = {

              useXDomainRequest: true,

              _request: null,

              _ready: false, // true when progress events are dispatched

              _loaded: false, // true when request has been loaded

              _failed: false, // true if when request is in error

              isReady: function() {

                  return this._request._ready;
              },

              isDone: function() {

                  return this._request._loaded;
              },

              hasError: function() {

                  return this._request._failed;
              },

              getBuffer: function() {

                  var rv = '';
                  try {
                      rv = this._request.responseText || '';
                  }
                  catch (e){}
                  return rv;
              },

              abort: function() {

                  if ( this._request){
                      this._request.abort();
                  }
              }
          };
      }

      function MessageEvent(type, data, origin, lastEventId) {

          this.bubbles = false;
          this.cancelBubble = false;
          this.cancelable = false;
          this.data = data || null;
          this.origin = origin || '';
          this.lastEventId = lastEventId || '';
          this.type = type || 'message';
      }

      function isOldIE () {

          //return true if we are in IE8 or IE9
          return (window.XDomainRequest && (window.XMLHttpRequest && new XMLHttpRequest().responseType === undefined)) ? true : false;
      }

      global[evsImportName] = EventSource;
  })(commonjsGlobal);

  var eventsource = {

  };

  /* eslint-disable no-var */

  var browser = window.EventSource || eventsource.EventSource;

  var pick$1 = function (obj, props) {
    return props.reduce(function (selection, prop) {
      if (typeof obj[prop] === 'undefined') {
        return selection;
      }

      selection[prop] = obj[prop];
      return selection;
    }, {});
  };

  var defaults = function (obj, defaults) {
    return Object.keys(defaults).concat(Object.keys(obj)).reduce(function (target, prop) {
      target[prop] = typeof obj[prop] === 'undefined' ? defaults[prop] : obj[prop];
      return target;
    }, {});
  };

  var baseUrl = 'https://docs.sanity.io/help/';

  var generateHelpUrl = function generateHelpUrl(slug) {
    return baseUrl + slug
  };

  var once$1 = function (fn) {
    var didCall = false;
    var returnValue;
    return function () {
      if (didCall) {
        return returnValue;
      }

      returnValue = fn.apply(void 0, arguments);
      didCall = true;
      return returnValue;
    };
  };

  var tokenWarning = ['Using token with listeners is not supported in browsers. ', "For more info, see ".concat(generateHelpUrl('js-client-listener-tokens-browser'), ".")]; // eslint-disable-next-line no-console

  var printTokenWarning = once$1(function () {
    return console.warn(tokenWarning.join(' '));
  });
  var isWindowEventSource = Boolean(typeof window !== 'undefined' && window.EventSource);
  var EventSource = isWindowEventSource ? window.EventSource // Native browser EventSource
  : browser; // Node.js, IE etc

  var possibleOptions = ['includePreviousRevision', 'includeResult'];
  var defaultOptions = {
    includeResult: true
  };

  var listen = function listen(query, params) {
    var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var options = defaults(opts, defaultOptions);
    var listenOpts = pick$1(options, possibleOptions);
    var qs = encodeQueryString({
      query: query,
      params: params,
      options: listenOpts
    });
    var _this$clientConfig = this.clientConfig,
        url = _this$clientConfig.url,
        token = _this$clientConfig.token,
        withCredentials = _this$clientConfig.withCredentials;
    var uri = "".concat(url).concat(this.getDataUrl('listen', qs));
    var listenFor = options.events ? options.events : ['mutation'];
    var shouldEmitReconnect = listenFor.indexOf('reconnect') !== -1;

    if (token && isWindowEventSource) {
      printTokenWarning();
    }

    var esOptions = {};

    if (token || withCredentials) {
      esOptions.withCredentials = true;
    }

    if (token) {
      esOptions.headers = {
        Authorization: "Bearer ".concat(token)
      };
    }

    return new minimal(function (observer) {
      var es = getEventSource();
      var reconnectTimer;
      var stopped = false;

      function onError() {
        if (stopped) {
          return;
        }

        emitReconnect(); // Allow event handlers of `emitReconnect` to cancel/close the reconnect attempt

        if (stopped) {
          return;
        } // Unless we've explicitly stopped the ES (in which case `stopped` should be true),
        // we should never be in a disconnected state. By default, EventSource will reconnect
        // automatically, in which case it sets readyState to `CONNECTING`, but in some cases
        // (like when a laptop lid is closed), it closes the connection. In these cases we need
        // to explicitly reconnect.


        if (es.readyState === EventSource.CLOSED) {
          unsubscribe();
          clearTimeout(reconnectTimer);
          reconnectTimer = setTimeout(open, 100);
        }
      }

      function onChannelError(err) {
        observer.error(cooerceError(err));
      }

      function onMessage(evt) {
        var event = parseEvent(evt);
        return event instanceof Error ? observer.error(event) : observer.next(event);
      }

      function onDisconnect(evt) {
        stopped = true;
        unsubscribe();
        observer.complete();
      }

      function unsubscribe() {
        es.removeEventListener('error', onError, false);
        es.removeEventListener('channelError', onChannelError, false);
        es.removeEventListener('disconnect', onDisconnect, false);
        listenFor.forEach(function (type) {
          return es.removeEventListener(type, onMessage, false);
        });
        es.close();
      }

      function emitReconnect() {
        if (shouldEmitReconnect) {
          observer.next({
            type: 'reconnect'
          });
        }
      }

      function getEventSource() {
        var evs = new EventSource(uri, esOptions);
        evs.addEventListener('error', onError, false);
        evs.addEventListener('channelError', onChannelError, false);
        evs.addEventListener('disconnect', onDisconnect, false);
        listenFor.forEach(function (type) {
          return evs.addEventListener(type, onMessage, false);
        });
        return evs;
      }

      function open() {
        es = getEventSource();
      }

      function stop() {
        stopped = true;
        unsubscribe();
      }

      return stop;
    });
  };

  function parseEvent(event) {
    try {
      var data = event.data && JSON.parse(event.data) || {};
      return objectAssign({
        type: event.type
      }, data);
    } catch (err) {
      return err;
    }
  }

  function cooerceError(err) {
    if (err instanceof Error) {
      return err;
    }

    var evt = parseEvent(err);
    return evt instanceof Error ? evt : new Error(extractErrorMessage(evt));
  }

  function extractErrorMessage(err) {
    if (!err.error) {
      return err.message || 'Unknown listener error';
    }

    if (err.error.description) {
      return err.error.description;
    }

    return typeof err.error === 'string' ? err.error : JSON.stringify(err.error, null, 2);
  }

  function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



  var filter$3 = filter$1.filter;

  var map$3 = map$1.map;













  var excludeFalsey = function excludeFalsey(param, defValue) {
    var value = typeof param === 'undefined' ? defValue : param;
    return param === false ? undefined : value;
  };

  var getMutationQuery = function getMutationQuery() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return {
      returnIds: true,
      returnDocuments: excludeFalsey(options.returnDocuments, true),
      visibility: options.visibility || 'sync'
    };
  };

  var isResponse = function isResponse(event) {
    return event.type === 'response';
  };

  var getBody = function getBody(event) {
    return event.body;
  };

  var toPromise = function toPromise(observable) {
    return observable.toPromise();
  };

  var getQuerySizeLimit = 11264;
  var dataMethods = {
    listen: listen,
    getDataUrl: function getDataUrl(operation, path) {
      var config = this.clientConfig;
      var catalog = config.gradientMode ? config.namespace : validators.hasDataset(config);
      var baseUri = "/".concat(operation, "/").concat(catalog);
      var uri = path ? "".concat(baseUri, "/").concat(path) : baseUri;
      return (this.clientConfig.gradientMode ? uri : "/data".concat(uri)).replace(/\/($|\?)/, '$1');
    },
    fetch: function fetch(query, params) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var mapResponse = options.filterResponse === false ? function (res) {
        return res;
      } : function (res) {
        return res.result;
      };

      var observable = this._dataRequest('query', {
        query: query,
        params: params
      }).pipe(map$3(mapResponse));

      return this.isPromiseAPI() ? toPromise(observable) : observable;
    },
    getDocument: function getDocument(id) {
      var options = {
        uri: this.getDataUrl('doc', id),
        json: true
      };

      var observable = this._requestObservable(options).pipe(filter$3(isResponse), map$3(function (event) {
        return event.body.documents && event.body.documents[0];
      }));

      return this.isPromiseAPI() ? toPromise(observable) : observable;
    },
    create: function create(doc, options) {
      return this._create(doc, 'create', options);
    },
    createIfNotExists: function createIfNotExists(doc, options) {
      validators.requireDocumentId('createIfNotExists', doc);
      return this._create(doc, 'createIfNotExists', options);
    },
    createOrReplace: function createOrReplace(doc, options) {
      validators.requireDocumentId('createOrReplace', doc);
      return this._create(doc, 'createOrReplace', options);
    },
    patch: function patch$1(selector, operations) {
      return new patch(selector, operations, this);
    },
    delete: function _delete(selection, options) {
      return this.dataRequest('mutate', {
        mutations: [{
          delete: getSelection(selection)
        }]
      }, options);
    },
    mutate: function mutate(mutations, options) {
      var mut = mutations instanceof patch || mutations instanceof transaction ? mutations.serialize() : mutations;
      var muts = Array.isArray(mut) ? mut : [mut];
      var transactionId = options && options.transactionId;
      return this.dataRequest('mutate', {
        mutations: muts,
        transactionId: transactionId
      }, options);
    },
    transaction: function transaction$1(operations) {
      return new transaction(operations, this);
    },
    dataRequest: function dataRequest(endpoint, body) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var request = this._dataRequest(endpoint, body, options);

      return this.isPromiseAPI() ? toPromise(request) : request;
    },
    _dataRequest: function _dataRequest(endpoint, body) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var isMutation = endpoint === 'mutate'; // Check if the query string is within a configured threshold,
      // in which case we can use GET. Otherwise, use POST.

      var strQuery = !isMutation && encodeQueryString(body);
      var useGet = !isMutation && strQuery.length < getQuerySizeLimit;
      var stringQuery = useGet ? strQuery : '';
      var returnFirst = options.returnFirst;
      var uri = this.getDataUrl(endpoint, stringQuery);
      var reqOptions = {
        method: useGet ? 'GET' : 'POST',
        uri: uri,
        json: true,
        body: useGet ? undefined : body,
        query: isMutation && getMutationQuery(options)
      };
      return this._requestObservable(reqOptions).pipe(filter$3(isResponse), map$3(getBody), map$3(function (res) {
        if (!isMutation) {
          return res;
        } // Should we return documents?


        var results = res.results || [];

        if (options.returnDocuments) {
          return returnFirst ? results[0] && results[0].document : results.map(function (mut) {
            return mut.document;
          });
        } // Return a reduced subset


        var key = returnFirst ? 'documentId' : 'documentIds';
        var ids = returnFirst ? results[0] && results[0].id : results.map(function (mut) {
          return mut.id;
        });
        return _defineProperty$2({
          transactionId: res.transactionId,
          results: results
        }, key, ids);
      }));
    },
    _create: function _create(doc, op) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var mutation = _defineProperty$2({}, op, doc);

      var opts = objectAssign({
        returnFirst: true,
        returnDocuments: true
      }, options);
      return this.dataRequest('mutate', {
        mutations: [mutation]
      }, opts);
    }
  };

  function DatasetsClient(client) {
    this.request = client.request.bind(client);
  }

  objectAssign(DatasetsClient.prototype, {
    create: function create(name, options) {
      return this._modify('PUT', name, options);
    },
    edit: function edit(name, options) {
      return this._modify('PATCH', name, options);
    },
    delete: function _delete(name) {
      return this._modify('DELETE', name);
    },
    list: function list() {
      return this.request({
        uri: '/datasets'
      });
    },
    _modify: function _modify(method, name, body) {
      validators.dataset(name);
      return this.request({
        method: method,
        uri: "/datasets/".concat(name),
        body: body
      });
    }
  });
  var datasetsClient = DatasetsClient;

  function ProjectsClient(client) {
    this.client = client;
  }

  objectAssign(ProjectsClient.prototype, {
    list: function list() {
      return this.client.request({
        uri: '/projects'
      });
    },
    getById: function getById(id) {
      return this.client.request({
        uri: "/projects/".concat(id)
      });
    }
  });
  var projectsClient = ProjectsClient;

  var queryString = function (params) {
    var qs = [];

    for (var key in params) {
      if (params.hasOwnProperty(key)) {
        qs.push("".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(params[key])));
      }
    }

    return qs.length > 0 ? "?".concat(qs.join('&')) : '';
  };

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

  function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



  var map$4 = map$1.map;

  var filter$4 = filter$1.filter;





  function AssetsClient(client) {
    this.client = client;
  }

  function toDocument(body) {
    // todo: rewrite to just return body.document in a while
    var document = body.document;
    Object.defineProperty(document, 'document', {
      enumerable: false,
      get: function get() {
        // eslint-disable-next-line no-console
        console.warn('The promise returned from client.asset.upload(...) now resolves with the asset document');
        return document;
      }
    });
    return document;
  }

  function optionsFromFile(opts, file) {
    if (typeof window === 'undefined' || !(file instanceof window.File)) {
      return opts;
    }

    return objectAssign({
      filename: opts.preserveFilename === false ? undefined : file.name,
      contentType: file.type
    }, opts);
  }

  objectAssign(AssetsClient.prototype, {
    /**
     * Upload an asset
     *
     * @param  {String} assetType `image` or `file`
     * @param  {File|Blob|Buffer|ReadableStream} body File to upload
     * @param  {Object}  opts Options for the upload
     * @param  {Boolean} opts.preserveFilename Whether or not to preserve the original filename (default: true)
     * @param  {String}  opts.filename Filename for this file (optional)
     * @param  {Number}  opts.timeout  Milliseconds to wait before timing the request out (default: 0)
     * @param  {String}  opts.contentType Mime type of the file
     * @param  {Array}   opts.extract Array of metadata parts to extract from image.
     *                                 Possible values: `location`, `exif`, `image`, `palette`
     * @return {Promise} Resolves with the created asset document
     */
    upload: function upload(assetType, body) {
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      validators.validateAssetType(assetType); // If an empty array is given, explicitly set `none` to override API defaults

      var meta = opts.extract || undefined;

      if (meta && !meta.length) {
        meta = ['none'];
      }

      var dataset = validators.hasDataset(this.client.clientConfig);
      var assetEndpoint = assetType === 'image' ? 'images' : 'files';
      var options = optionsFromFile(opts, body);
      var label = options.label,
          filename = options.filename;
      var query = {
        label: label,
        filename: filename,
        meta: meta
      };

      var observable = this.client._requestObservable({
        method: 'POST',
        timeout: options.timeout || 0,
        uri: "/assets/".concat(assetEndpoint, "/").concat(dataset),
        headers: options.contentType ? {
          'Content-Type': options.contentType
        } : {},
        query: query,
        body: body
      });

      return this.client.isPromiseAPI() ? observable.pipe(filter$4(function (event) {
        return event.type === 'response';
      }), map$4(function (event) {
        return toDocument(event.body);
      })).toPromise() : observable;
    },
    delete: function _delete(type, id) {
      // eslint-disable-next-line no-console
      console.warn('client.assets.delete() is deprecated, please use client.delete(<document-id>)');
      var docId = id || '';

      if (!/^(image|file)-/.test(docId)) {
        docId = "".concat(type, "-").concat(docId);
      } else if (type._id) {
        // We could be passing an entire asset document instead of an ID
        docId = type._id;
      }

      validators.hasDataset(this.client.clientConfig);
      return this.client.delete(docId);
    },
    getImageUrl: function getImageUrl(ref, query) {
      var id = ref._ref || ref;

      if (typeof id !== 'string') {
        throw new Error('getImageUrl() needs either an object with a _ref, or a string with an asset document ID');
      }

      if (!/^image-[A-Za-z0-9_]+-\d+x\d+-[a-z]{1,5}$/.test(id)) {
        throw new Error("Unsupported asset ID \"".concat(id, "\". URL generation only works for auto-generated IDs."));
      }

      var _id$split = id.split('-'),
          _id$split2 = _slicedToArray(_id$split, 4),
          assetId = _id$split2[1],
          size = _id$split2[2],
          format = _id$split2[3];

      validators.hasDataset(this.client.clientConfig);
      var _this$client$clientCo = this.client.clientConfig,
          projectId = _this$client$clientCo.projectId,
          dataset = _this$client$clientCo.dataset;
      var qs = query ? queryString(query) : '';
      return "https://cdn.sanity.io/images/".concat(projectId, "/").concat(dataset, "/").concat(assetId, "-").concat(size, ".").concat(format).concat(qs);
    }
  });
  var assetsClient = AssetsClient;

  function UsersClient(client) {
    this.client = client;
  }

  objectAssign(UsersClient.prototype, {
    getById: function getById(id) {
      return this.client.request({
        uri: "/users/".concat(id)
      });
    }
  });
  var usersClient = UsersClient;

  function AuthClient(client) {
    this.client = client;
  }

  objectAssign(AuthClient.prototype, {
    getLoginProviders: function getLoginProviders() {
      return this.client.request({
        uri: '/auth/providers'
      });
    },
    logout: function logout() {
      return this.client.request({
        uri: '/auth/logout',
        method: 'POST'
      });
    }
  });
  var authClient = AuthClient;

  var nanoPubsub = function Pubsub() {
    var subscribers = [];
    return {
      subscribe: subscribe,
      publish: publish
    }
    function subscribe(subscriber) {
      subscribers.push(subscriber);
      return function unsubscribe() {
        var idx = subscribers.indexOf(subscriber);
        if (idx > -1) {
          subscribers.splice(idx, 1);
        }
      }
    }
    function publish() {
      for (var i = 0; i < subscribers.length; i++) {
        subscribers[i].apply(null, arguments);
      }
    }
  };

  var middlewareReducer = function (middleware) {
    var applyMiddleware = function applyMiddleware(hook, defaultValue) {
      for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }

      return middleware[hook].reduce(function (value, handler) {
        return handler.apply(undefined, [value].concat(args));
      }, defaultValue);
    };

    return applyMiddleware;
  };

  /**
   * Check if we're required to add a port number.
   *
   * @see https://url.spec.whatwg.org/#default-port
   * @param {Number|String} port Port number we need to check
   * @param {String} protocol Protocol we need to check against.
   * @returns {Boolean} Is it a default port for the given protocol
   * @api private
   */
  var requiresPort = function required(port, protocol) {
    protocol = protocol.split(':')[0];
    port = +port;

    if (!port) return false;

    switch (protocol) {
      case 'http':
      case 'ws':
      return port !== 80;

      case 'https':
      case 'wss':
      return port !== 443;

      case 'ftp':
      return port !== 21;

      case 'gopher':
      return port !== 70;

      case 'file':
      return false;
    }

    return port !== 0;
  };

  var has$1 = Object.prototype.hasOwnProperty
    , undef;

  /**
   * Decode a URI encoded string.
   *
   * @param {String} input The URI encoded string.
   * @returns {String} The decoded string.
   * @api private
   */
  function decode(input) {
    return decodeURIComponent(input.replace(/\+/g, ' '));
  }

  /**
   * Simple query string parser.
   *
   * @param {String} query The query string that needs to be parsed.
   * @returns {Object}
   * @api public
   */
  function querystring(query) {
    var parser = /([^=?&]+)=?([^&]*)/g
      , result = {}
      , part;

    while (part = parser.exec(query)) {
      var key = decode(part[1])
        , value = decode(part[2]);

      //
      // Prevent overriding of existing properties. This ensures that build-in
      // methods like `toString` or __proto__ are not overriden by malicious
      // querystrings.
      //
      if (key in result) continue;
      result[key] = value;
    }

    return result;
  }

  /**
   * Transform a query string to an object.
   *
   * @param {Object} obj Object that should be transformed.
   * @param {String} prefix Optional prefix.
   * @returns {String}
   * @api public
   */
  function querystringify(obj, prefix) {
    prefix = prefix || '';

    var pairs = []
      , value
      , key;

    //
    // Optionally prefix with a '?' if needed
    //
    if ('string' !== typeof prefix) prefix = '?';

    for (key in obj) {
      if (has$1.call(obj, key)) {
        value = obj[key];

        //
        // Edge cases where we actually want to encode the value to an empty
        // string instead of the stringified value.
        //
        if (!value && (value === null || value === undef || isNaN(value))) {
          value = '';
        }

        pairs.push(encodeURIComponent(key) +'='+ encodeURIComponent(value));
      }
    }

    return pairs.length ? prefix + pairs.join('&') : '';
  }

  //
  // Expose the module.
  //
  var stringify = querystringify;
  var parse = querystring;

  var querystringify_1 = {
  	stringify: stringify,
  	parse: parse
  };

  var protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i
    , slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;

  /**
   * These are the parse rules for the URL parser, it informs the parser
   * about:
   *
   * 0. The char it Needs to parse, if it's a string it should be done using
   *    indexOf, RegExp using exec and NaN means set as current value.
   * 1. The property we should set when parsing this value.
   * 2. Indication if it's backwards or forward parsing, when set as number it's
   *    the value of extra chars that should be split off.
   * 3. Inherit from location if non existing in the parser.
   * 4. `toLowerCase` the resulting value.
   */
  var rules = [
    ['#', 'hash'],                        // Extract from the back.
    ['?', 'query'],                       // Extract from the back.
    function sanitize(address) {          // Sanitize what is left of the address
      return address.replace('\\', '/');
    },
    ['/', 'pathname'],                    // Extract from the back.
    ['@', 'auth', 1],                     // Extract from the front.
    [NaN, 'host', undefined, 1, 1],       // Set left over value.
    [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
    [NaN, 'hostname', undefined, 1, 1]    // Set left over.
  ];

  /**
   * These properties should not be copied or inherited from. This is only needed
   * for all non blob URL's as a blob URL does not include a hash, only the
   * origin.
   *
   * @type {Object}
   * @private
   */
  var ignore = { hash: 1, query: 1 };

  /**
   * The location object differs when your code is loaded through a normal page,
   * Worker or through a worker using a blob. And with the blobble begins the
   * trouble as the location object will contain the URL of the blob, not the
   * location of the page where our code is loaded in. The actual origin is
   * encoded in the `pathname` so we can thankfully generate a good "default"
   * location from it so we can generate proper relative URL's again.
   *
   * @param {Object|String} loc Optional default location object.
   * @returns {Object} lolcation object.
   * @public
   */
  function lolcation(loc) {
    var globalVar;

    if (typeof window !== 'undefined') globalVar = window;
    else if (typeof commonjsGlobal !== 'undefined') globalVar = commonjsGlobal;
    else if (typeof self !== 'undefined') globalVar = self;
    else globalVar = {};

    var location = globalVar.location || {};
    loc = loc || location;

    var finaldestination = {}
      , type = typeof loc
      , key;

    if ('blob:' === loc.protocol) {
      finaldestination = new Url(unescape(loc.pathname), {});
    } else if ('string' === type) {
      finaldestination = new Url(loc, {});
      for (key in ignore) delete finaldestination[key];
    } else if ('object' === type) {
      for (key in loc) {
        if (key in ignore) continue;
        finaldestination[key] = loc[key];
      }

      if (finaldestination.slashes === undefined) {
        finaldestination.slashes = slashes.test(loc.href);
      }
    }

    return finaldestination;
  }

  /**
   * @typedef ProtocolExtract
   * @type Object
   * @property {String} protocol Protocol matched in the URL, in lowercase.
   * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
   * @property {String} rest Rest of the URL that is not part of the protocol.
   */

  /**
   * Extract protocol information from a URL with/without double slash ("//").
   *
   * @param {String} address URL we want to extract from.
   * @return {ProtocolExtract} Extracted information.
   * @private
   */
  function extractProtocol(address) {
    var match = protocolre.exec(address);

    return {
      protocol: match[1] ? match[1].toLowerCase() : '',
      slashes: !!match[2],
      rest: match[3]
    };
  }

  /**
   * Resolve a relative URL pathname against a base URL pathname.
   *
   * @param {String} relative Pathname of the relative URL.
   * @param {String} base Pathname of the base URL.
   * @return {String} Resolved pathname.
   * @private
   */
  function resolve(relative, base) {
    var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
      , i = path.length
      , last = path[i - 1]
      , unshift = false
      , up = 0;

    while (i--) {
      if (path[i] === '.') {
        path.splice(i, 1);
      } else if (path[i] === '..') {
        path.splice(i, 1);
        up++;
      } else if (up) {
        if (i === 0) unshift = true;
        path.splice(i, 1);
        up--;
      }
    }

    if (unshift) path.unshift('');
    if (last === '.' || last === '..') path.push('');

    return path.join('/');
  }

  /**
   * The actual URL instance. Instead of returning an object we've opted-in to
   * create an actual constructor as it's much more memory efficient and
   * faster and it pleases my OCD.
   *
   * It is worth noting that we should not use `URL` as class name to prevent
   * clashes with the global URL instance that got introduced in browsers.
   *
   * @constructor
   * @param {String} address URL we want to parse.
   * @param {Object|String} [location] Location defaults for relative paths.
   * @param {Boolean|Function} [parser] Parser for the query string.
   * @private
   */
  function Url(address, location, parser) {
    if (!(this instanceof Url)) {
      return new Url(address, location, parser);
    }

    var relative, extracted, parse, instruction, index, key
      , instructions = rules.slice()
      , type = typeof location
      , url = this
      , i = 0;

    //
    // The following if statements allows this module two have compatibility with
    // 2 different API:
    //
    // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
    //    where the boolean indicates that the query string should also be parsed.
    //
    // 2. The `URL` interface of the browser which accepts a URL, object as
    //    arguments. The supplied object will be used as default values / fall-back
    //    for relative paths.
    //
    if ('object' !== type && 'string' !== type) {
      parser = location;
      location = null;
    }

    if (parser && 'function' !== typeof parser) parser = querystringify_1.parse;

    location = lolcation(location);

    //
    // Extract protocol information before running the instructions.
    //
    extracted = extractProtocol(address || '');
    relative = !extracted.protocol && !extracted.slashes;
    url.slashes = extracted.slashes || relative && location.slashes;
    url.protocol = extracted.protocol || location.protocol || '';
    address = extracted.rest;

    //
    // When the authority component is absent the URL starts with a path
    // component.
    //
    if (!extracted.slashes) instructions[3] = [/(.*)/, 'pathname'];

    for (; i < instructions.length; i++) {
      instruction = instructions[i];

      if (typeof instruction === 'function') {
        address = instruction(address);
        continue;
      }

      parse = instruction[0];
      key = instruction[1];

      if (parse !== parse) {
        url[key] = address;
      } else if ('string' === typeof parse) {
        if (~(index = address.indexOf(parse))) {
          if ('number' === typeof instruction[2]) {
            url[key] = address.slice(0, index);
            address = address.slice(index + instruction[2]);
          } else {
            url[key] = address.slice(index);
            address = address.slice(0, index);
          }
        }
      } else if ((index = parse.exec(address))) {
        url[key] = index[1];
        address = address.slice(0, index.index);
      }

      url[key] = url[key] || (
        relative && instruction[3] ? location[key] || '' : ''
      );

      //
      // Hostname, host and protocol should be lowercased so they can be used to
      // create a proper `origin`.
      //
      if (instruction[4]) url[key] = url[key].toLowerCase();
    }

    //
    // Also parse the supplied query string in to an object. If we're supplied
    // with a custom parser as function use that instead of the default build-in
    // parser.
    //
    if (parser) url.query = parser(url.query);

    //
    // If the URL is relative, resolve the pathname against the base URL.
    //
    if (
        relative
      && location.slashes
      && url.pathname.charAt(0) !== '/'
      && (url.pathname !== '' || location.pathname !== '')
    ) {
      url.pathname = resolve(url.pathname, location.pathname);
    }

    //
    // We should not add port numbers if they are already the default port number
    // for a given protocol. As the host also contains the port number we're going
    // override it with the hostname which contains no port number.
    //
    if (!requiresPort(url.port, url.protocol)) {
      url.host = url.hostname;
      url.port = '';
    }

    //
    // Parse down the `auth` for the username and password.
    //
    url.username = url.password = '';
    if (url.auth) {
      instruction = url.auth.split(':');
      url.username = instruction[0] || '';
      url.password = instruction[1] || '';
    }

    url.origin = url.protocol && url.host && url.protocol !== 'file:'
      ? url.protocol +'//'+ url.host
      : 'null';

    //
    // The href is just the compiled result.
    //
    url.href = url.toString();
  }

  /**
   * This is convenience method for changing properties in the URL instance to
   * insure that they all propagate correctly.
   *
   * @param {String} part          Property we need to adjust.
   * @param {Mixed} value          The newly assigned value.
   * @param {Boolean|Function} fn  When setting the query, it will be the function
   *                               used to parse the query.
   *                               When setting the protocol, double slash will be
   *                               removed from the final url if it is true.
   * @returns {URL} URL instance for chaining.
   * @public
   */
  function set$1(part, value, fn) {
    var url = this;

    switch (part) {
      case 'query':
        if ('string' === typeof value && value.length) {
          value = (fn || querystringify_1.parse)(value);
        }

        url[part] = value;
        break;

      case 'port':
        url[part] = value;

        if (!requiresPort(value, url.protocol)) {
          url.host = url.hostname;
          url[part] = '';
        } else if (value) {
          url.host = url.hostname +':'+ value;
        }

        break;

      case 'hostname':
        url[part] = value;

        if (url.port) value += ':'+ url.port;
        url.host = value;
        break;

      case 'host':
        url[part] = value;

        if (/:\d+$/.test(value)) {
          value = value.split(':');
          url.port = value.pop();
          url.hostname = value.join(':');
        } else {
          url.hostname = value;
          url.port = '';
        }

        break;

      case 'protocol':
        url.protocol = value.toLowerCase();
        url.slashes = !fn;
        break;

      case 'pathname':
      case 'hash':
        if (value) {
          var char = part === 'pathname' ? '/' : '#';
          url[part] = value.charAt(0) !== char ? char + value : value;
        } else {
          url[part] = value;
        }
        break;

      default:
        url[part] = value;
    }

    for (var i = 0; i < rules.length; i++) {
      var ins = rules[i];

      if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
    }

    url.origin = url.protocol && url.host && url.protocol !== 'file:'
      ? url.protocol +'//'+ url.host
      : 'null';

    url.href = url.toString();

    return url;
  }

  /**
   * Transform the properties back in to a valid and full URL string.
   *
   * @param {Function} stringify Optional query stringify function.
   * @returns {String} Compiled version of the URL.
   * @public
   */
  function toString$2(stringify) {
    if (!stringify || 'function' !== typeof stringify) stringify = querystringify_1.stringify;

    var query
      , url = this
      , protocol = url.protocol;

    if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

    var result = protocol + (url.slashes ? '//' : '');

    if (url.username) {
      result += url.username;
      if (url.password) result += ':'+ url.password;
      result += '@';
    }

    result += url.host + url.pathname;

    query = 'object' === typeof url.query ? stringify(url.query) : url.query;
    if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

    if (url.hash) result += url.hash;

    return result;
  }

  Url.prototype = { set: set$1, toString: toString$2 };

  //
  // Expose the URL parser and some additional properties that might be useful for
  // others or testing.
  //
  Url.extractProtocol = extractProtocol;
  Url.location = lolcation;
  Url.qs = querystringify_1;

  var urlParse = Url;

  var isReactNative = typeof navigator === 'undefined' ? false : navigator.product === 'ReactNative';

  var has$2 = Object.prototype.hasOwnProperty;
  var defaultOptions$1 = { timeout: isReactNative ? 60000 : 120000 };

  var defaultOptionsProcessor = function (opts) {
    var options = typeof opts === 'string' ? objectAssign({ url: opts }, defaultOptions$1) : objectAssign({}, defaultOptions$1, opts);

    // Parse URL into parts
    var url = urlParse(options.url, {}, // Don't use current browser location
    true // Parse query strings
    );

    // Normalize timeouts
    options.timeout = normalizeTimeout(options.timeout);

    // Shallow-merge (override) existing query params
    if (options.query) {
      url.query = objectAssign({}, url.query, removeUndefined(options.query));
    }

    // Implicit POST if we have not specified a method but have a body
    options.method = options.body && !options.method ? 'POST' : (options.method || 'GET').toUpperCase();

    // Stringify URL
    options.url = url.toString(stringifyQueryString);

    return options;
  };

  function stringifyQueryString(obj) {
    var pairs = [];
    for (var key in obj) {
      if (has$2.call(obj, key)) {
        push(key, obj[key]);
      }
    }

    return pairs.length ? pairs.join('&') : '';

    function push(key, val) {
      if (Array.isArray(val)) {
        val.forEach(function (item) {
          return push(key, item);
        });
      } else {
        pairs.push([key, val].map(encodeURIComponent).join('='));
      }
    }
  }

  function normalizeTimeout(time) {
    if (time === false || time === 0) {
      return false;
    }

    if (time.connect || time.socket) {
      return time;
    }

    var delay = Number(time);
    if (isNaN(delay)) {
      return normalizeTimeout(defaultOptions$1.timeout);
    }

    return { connect: delay, socket: delay };
  }

  function removeUndefined(obj) {
    var target = {};
    for (var key in obj) {
      if (obj[key] !== undefined) {
        target[key] = obj[key];
      }
    }
    return target;
  }

  var validUrl = /^https?:\/\//i;

  var defaultOptionsValidator = function (options) {
    if (!validUrl.test(options.url)) {
      throw new Error("\"" + options.url + "\" is not a valid URL");
    }
  };

  /**
   * This file is only used for the browser version of `same-origin`.
   * Used to bring down the size of the browser bundle.
   */

  var regex = /^(?:(?:(?:([^:\/#\?]+:)?(?:(?:\/\/)((?:((?:[^:@\/#\?]+)(?:\:(?:[^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((?:\/?(?:[^\/\?#]+\/+)*)(?:[^\?#]*)))?(\?[^#]+)?)(#.*)?/;

  var urlParser = {
      regex: regex,
      parse: function(url) {
          var match = regex.exec(url);
          if (!match) {
              return {};
          }

          return {
              protocol: (match[1] || '').toLowerCase() || undefined,
              hostname: (match[5] || '').toLowerCase() || undefined,
              port: match[6] || undefined
          };
      }
  };

  var sameOrigin = function(uri1, uri2, ieMode) {
      if (uri1 === uri2) {
          return true;
      }

      var url1 = urlParser.parse(uri1, false, true);
      var url2 = urlParser.parse(uri2, false, true);

      var url1Port = url1.port|0 || (url1.protocol === 'https' ? 443 : 80);
      var url2Port = url2.port|0 || (url2.protocol === 'https' ? 443 : 80);

      var match = {
          proto: url1.protocol === url2.protocol,
          hostname: url1.hostname === url2.hostname,
          port: url1Port === url2Port
      };

      return ((match.proto && match.hostname) && (match.port || ieMode));
  };

  var trim_1 = createCommonjsModule(function (module, exports) {
  exports = module.exports = trim;

  function trim(str){
    return str.replace(/^\s*|\s*$/g, '');
  }

  exports.left = function(str){
    return str.replace(/^\s*/, '');
  };

  exports.right = function(str){
    return str.replace(/\s*$/, '');
  };
  });
  var trim_2 = trim_1.left;
  var trim_3 = trim_1.right;

  var fnToStr = Function.prototype.toString;

  var constructorRegex = /^\s*class\b/;
  var isES6ClassFn = function isES6ClassFunction(value) {
  	try {
  		var fnStr = fnToStr.call(value);
  		return constructorRegex.test(fnStr);
  	} catch (e) {
  		return false; // not a function
  	}
  };

  var tryFunctionObject = function tryFunctionToStr(value) {
  	try {
  		if (isES6ClassFn(value)) { return false; }
  		fnToStr.call(value);
  		return true;
  	} catch (e) {
  		return false;
  	}
  };
  var toStr = Object.prototype.toString;
  var fnClass = '[object Function]';
  var genClass = '[object GeneratorFunction]';
  var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

  var isCallable = function isCallable(value) {
  	if (!value) { return false; }
  	if (typeof value !== 'function' && typeof value !== 'object') { return false; }
  	if (typeof value === 'function' && !value.prototype) { return true; }
  	if (hasToStringTag) { return tryFunctionObject(value); }
  	if (isES6ClassFn(value)) { return false; }
  	var strClass = toStr.call(value);
  	return strClass === fnClass || strClass === genClass;
  };

  var toStr$1 = Object.prototype.toString;
  var hasOwnProperty$2 = Object.prototype.hasOwnProperty;

  var forEachArray = function forEachArray(array, iterator, receiver) {
      for (var i = 0, len = array.length; i < len; i++) {
          if (hasOwnProperty$2.call(array, i)) {
              if (receiver == null) {
                  iterator(array[i], i, array);
              } else {
                  iterator.call(receiver, array[i], i, array);
              }
          }
      }
  };

  var forEachString = function forEachString(string, iterator, receiver) {
      for (var i = 0, len = string.length; i < len; i++) {
          // no such thing as a sparse string.
          if (receiver == null) {
              iterator(string.charAt(i), i, string);
          } else {
              iterator.call(receiver, string.charAt(i), i, string);
          }
      }
  };

  var forEachObject = function forEachObject(object, iterator, receiver) {
      for (var k in object) {
          if (hasOwnProperty$2.call(object, k)) {
              if (receiver == null) {
                  iterator(object[k], k, object);
              } else {
                  iterator.call(receiver, object[k], k, object);
              }
          }
      }
  };

  var forEach$1 = function forEach(list, iterator, thisArg) {
      if (!isCallable(iterator)) {
          throw new TypeError('iterator must be a function');
      }

      var receiver;
      if (arguments.length >= 3) {
          receiver = thisArg;
      }

      if (toStr$1.call(list) === '[object Array]') {
          forEachArray(list, iterator, receiver);
      } else if (typeof list === 'string') {
          forEachString(list, iterator, receiver);
      } else {
          forEachObject(list, iterator, receiver);
      }
  };

  var forEach_1 = forEach$1;

  var isArray$1 = function(arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
      };

  var parseHeaders = function (headers) {
    if (!headers)
      return {}

    var result = {};

    forEach_1(
        trim_1(headers).split('\n')
      , function (row) {
          var index = row.indexOf(':')
            , key = trim_1(row.slice(0, index)).toLowerCase()
            , value = trim_1(row.slice(index + 1));

          if (typeof(result[key]) === 'undefined') {
            result[key] = value;
          } else if (isArray$1(result[key])) {
            result[key].push(value);
          } else {
            result[key] = [ result[key], value ];
          }
        }
    );

    return result
  };

  /* eslint max-depth: ["error", 4] */


  var noop = function noop() {/* intentional noop */};

  var win = window;
  var XmlHttpRequest = win.XMLHttpRequest || noop;
  var hasXhr2 = 'withCredentials' in new XmlHttpRequest();
  var XDomainRequest$1 = hasXhr2 ? XmlHttpRequest : win.XDomainRequest;
  var adapter = 'xhr';

  var browserRequest = function (context, callback) {
    var options = context.options;
    var timers = {};

    // Deep-checking window.location because of react native, where `location` doesn't exist
    var cors = win && win.location && !sameOrigin(win.location.href, options.url);

    // Allow middleware to inject a response, for instance in the case of caching or mocking
    var injectedResponse = context.applyMiddleware('interceptRequest', undefined, {
      adapter: adapter,
      context: context
    });

    // If middleware injected a response, treat it as we normally would and return it
    // Do note that the injected response has to be reduced to a cross-environment friendly response
    if (injectedResponse) {
      var cbTimer = setTimeout(callback, 0, null, injectedResponse);
      var cancel = function cancel() {
        return clearTimeout(cbTimer);
      };
      return { abort: cancel };
    }

    // We'll want to null out the request on success/failure
    var xhr = cors ? new XDomainRequest$1() : new XmlHttpRequest();

    var isXdr = win.XDomainRequest && xhr instanceof win.XDomainRequest;
    var headers = options.headers;

    // Request state
    var aborted = false;
    var loaded = false;
    var timedOut = false;

    // Apply event handlers
    xhr.onerror = onError;
    xhr.ontimeout = onError;
    xhr.onabort = function () {
      aborted = true;
    };

    // IE9 must have onprogress be set to a unique function
    xhr.onprogress = function () {/* intentional noop */};

    var loadEvent = isXdr ? 'onload' : 'onreadystatechange';
    xhr[loadEvent] = function () {
      // Prevent request from timing out
      resetTimers();

      if (aborted || xhr.readyState !== 4 && !isXdr) {
        return;
      }

      // Will be handled by onError
      if (xhr.status === 0) {
        return;
      }

      onLoad();
    };

    // @todo two last options to open() is username/password
    xhr.open(options.method, options.url, true // Always async
    );

    // Some options need to be applied after open
    xhr.withCredentials = !!options.withCredentials;

    // Set headers
    if (headers && xhr.setRequestHeader) {
      for (var key in headers) {
        if (headers.hasOwnProperty(key)) {
          xhr.setRequestHeader(key, headers[key]);
        }
      }
    } else if (headers && isXdr) {
      throw new Error('Headers cannot be set on an XDomainRequest object');
    }

    if (options.rawBody) {
      xhr.responseType = 'arraybuffer';
    }

    // Let middleware know we're about to do a request
    context.applyMiddleware('onRequest', { options: options, adapter: adapter, request: xhr, context: context });

    xhr.send(options.body || null);

    // Figure out which timeouts to use (if any)
    var delays = options.timeout;
    if (delays) {
      timers.connect = setTimeout(function () {
        return timeoutRequest('ETIMEDOUT');
      }, delays.connect);
    }

    return { abort: abort };

    function abort() {
      aborted = true;

      if (xhr) {
        xhr.abort();
      }
    }

    function timeoutRequest(code) {
      timedOut = true;
      xhr.abort();
      var error = new Error(code === 'ESOCKETTIMEDOUT' ? 'Socket timed out on request to ' + options.url : 'Connection timed out on request to ' + options.url);
      error.code = code;
      context.channels.error.publish(error);
    }

    function resetTimers() {
      if (!delays) {
        return;
      }

      stopTimers();
      timers.socket = setTimeout(function () {
        return timeoutRequest('ESOCKETTIMEDOUT');
      }, delays.socket);
    }

    function stopTimers() {
      // Only clear the connect timeout if we've got a connection
      if (aborted || xhr.readyState >= 2 && timers.connect) {
        clearTimeout(timers.connect);
      }

      if (timers.socket) {
        clearTimeout(timers.socket);
      }
    }

    function onError() {
      if (loaded) {
        return;
      }

      // Clean up
      stopTimers();
      loaded = true;
      xhr = null;

      // Annoyingly, details are extremely scarce and hidden from us.
      // We only really know that it is a network error
      var err = new Error('Network error while attempting to reach ' + options.url);
      err.isNetworkError = true;
      err.request = options;
      callback(err);
    }

    function reduceResponse() {
      var statusCode = xhr.status;
      var statusMessage = xhr.statusText;

      if (isXdr && statusCode === undefined) {
        // IE8 CORS GET successful response doesn't have a status field, but body is fine
        statusCode = 200;
      } else if (statusCode > 12000 && statusCode < 12156) {
        // Yet another IE quirk where it emits weird status codes on network errors
        // https://support.microsoft.com/en-us/kb/193625
        return onError();
      } else {
        // Another IE bug where HTTP 204 somehow ends up as 1223
        statusCode = xhr.status === 1223 ? 204 : xhr.status;
        statusMessage = xhr.status === 1223 ? 'No Content' : statusMessage;
      }

      return {
        body: xhr.response || xhr.responseText,
        url: options.url,
        method: options.method,
        headers: isXdr ? {} : parseHeaders(xhr.getAllResponseHeaders()),
        statusCode: statusCode,
        statusMessage: statusMessage
      };
    }

    function onLoad() {
      if (aborted || loaded || timedOut) {
        return;
      }

      if (xhr.status === 0) {
        onError(new Error('Unknown XHR error'));
        return;
      }

      // Prevent being called twice
      stopTimers();
      loaded = true;
      callback(null, reduceResponse());
    }
  };

  var request$1 = browserRequest;

  // node-request in node, browser-request in browsers

  var channelNames = ['request', 'response', 'progress', 'error', 'abort'];
  var middlehooks = ['processOptions', 'validateOptions', 'interceptRequest', 'onRequest', 'onResponse', 'onError', 'onReturn', 'onHeaders'];

  var lib = function createRequester() {
    var initMiddleware = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    var loadedMiddleware = [];
    var middleware = middlehooks.reduce(function (ware, name) {
      ware[name] = ware[name] || [];
      return ware;
    }, {
      processOptions: [defaultOptionsProcessor],
      validateOptions: [defaultOptionsValidator]
    });

    function request(opts) {
      var channels = channelNames.reduce(function (target, name) {
        target[name] = nanoPubsub();
        return target;
      }, {});

      // Prepare a middleware reducer that can be reused throughout the lifecycle
      var applyMiddleware = middlewareReducer(middleware);

      // Parse the passed options
      var options = applyMiddleware('processOptions', opts);

      // Validate the options
      applyMiddleware('validateOptions', options);

      // Build a context object we can pass to child handlers
      var context = { options: options, channels: channels, applyMiddleware: applyMiddleware

        // We need to hold a reference to the current, ongoing request,
        // in order to allow cancellation. In the case of the retry middleware,
        // a new request might be triggered
      };var ongoingRequest = null;
      var unsubscribe = channels.request.subscribe(function (ctx) {
        // Let request adapters (node/browser) perform the actual request
        ongoingRequest = request$1(ctx, function (err, res) {
          return onResponse(err, res, ctx);
        });
      });

      // If we abort the request, prevent further requests from happening,
      // and be sure to cancel any ongoing request (obviously)
      channels.abort.subscribe(function () {
        unsubscribe();
        if (ongoingRequest) {
          ongoingRequest.abort();
        }
      });

      // See if any middleware wants to modify the return value - for instance
      // the promise or observable middlewares
      var returnValue = applyMiddleware('onReturn', channels, context);

      // If return value has been modified by a middleware, we expect the middleware
      // to publish on the 'request' channel. If it hasn't been modified, we want to
      // trigger it right away
      if (returnValue === channels) {
        channels.request.publish(context);
      }

      return returnValue;

      function onResponse(reqErr, res, ctx) {
        var error = reqErr;
        var response = res;

        // We're processing non-errors first, in case a middleware converts the
        // response into an error (for instance, status >= 400 == HttpError)
        if (!error) {
          try {
            response = applyMiddleware('onResponse', res, ctx);
          } catch (err) {
            response = null;
            error = err;
          }
        }

        // Apply error middleware - if middleware return the same (or a different) error,
        // publish as an error event. If we *don't* return an error, assume it has been handled
        error = error && applyMiddleware('onError', error, ctx);

        // Figure out if we should publish on error/response channels
        if (error) {
          channels.error.publish(error);
        } else if (response) {
          channels.response.publish(response);
        }
      }
    }

    request.use = function use(newMiddleware) {
      if (!newMiddleware) {
        throw new Error('Tried to add middleware that resolved to falsey value');
      }

      if (typeof newMiddleware === 'function') {
        throw new Error('Tried to add middleware that was a function. It probably expects you to pass options to it.');
      }

      if (newMiddleware.onReturn && middleware.onReturn.length > 0) {
        throw new Error('Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event');
      }

      middlehooks.forEach(function (key) {
        if (newMiddleware[key]) {
          middleware[key].push(newMiddleware[key]);
        }
      });

      loadedMiddleware.push(newMiddleware);
      return request;
    };

    request.clone = function clone() {
      return createRequester(loadedMiddleware);
    };

    initMiddleware.forEach(request.use);

    return request;
  };

  var getIt = lib;

  var global_1 = createCommonjsModule(function (module) {

  /* eslint-disable no-negated-condition */
  if (typeof window !== 'undefined') {
    module.exports = window;
  } else if (typeof commonjsGlobal !== 'undefined') {
    module.exports = commonjsGlobal;
  } else if (typeof self !== 'undefined') {
    module.exports = self;
  } else {
    module.exports = {};
  }

  });

  var observable$1 = function () {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var Observable = opts.implementation || global_1.Observable;
    if (!Observable) {
      throw new Error('`Observable` is not available in global scope, and no implementation was passed');
    }

    return {
      onReturn: function onReturn(channels, context) {
        return new Observable(function (observer) {
          channels.error.subscribe(function (err) {
            return observer.error(err);
          });
          channels.progress.subscribe(function (event) {
            return observer.next(objectAssign({ type: 'progress' }, event));
          });
          channels.response.subscribe(function (response) {
            observer.next(objectAssign({ type: 'response' }, response));
            observer.complete();
          });

          channels.request.publish(context);
          return function () {
            return channels.abort.publish();
          };
        });
      }
    };
  };

  /*!
   * isobject <https://github.com/jonschlinkert/isobject>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   */

  var isobject = function isObject(val) {
    return val != null && typeof val === 'object' && Array.isArray(val) === false;
  };

  function isObjectObject(o) {
    return isobject(o) === true
      && Object.prototype.toString.call(o) === '[object Object]';
  }

  var isPlainObject = function isPlainObject(o) {
    var ctor,prot;

    if (isObjectObject(o) === false) return false;

    // If has modified constructor
    ctor = o.constructor;
    if (typeof ctor !== 'function') return false;

    // If has modified prototype
    prot = ctor.prototype;
    if (isObjectObject(prot) === false) return false;

    // If constructor does not have an Object-specific method
    if (prot.hasOwnProperty('isPrototypeOf') === false) {
      return false;
    }

    // Most likely a plain Object
    return true;
  };

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };




  var serializeTypes = ['boolean', 'string', 'number'];
  var isBuffer = function isBuffer(obj) {
    return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
  };

  var jsonRequest = function () {
    return {
      processOptions: function processOptions(options) {
        var body = options.body;
        if (!body) {
          return options;
        }

        var isStream = typeof body.pipe === 'function';
        var shouldSerialize = !isStream && !isBuffer(body) && (serializeTypes.indexOf(typeof body === 'undefined' ? 'undefined' : _typeof(body)) !== -1 || Array.isArray(body) || isPlainObject(body));

        if (!shouldSerialize) {
          return options;
        }

        return objectAssign({}, options, {
          body: JSON.stringify(options.body),
          headers: objectAssign({}, options.headers, {
            'Content-Type': 'application/json'
          })
        });
      }
    };
  };

  var jsonResponse = function (opts) {
    return {
      onResponse: function onResponse(response) {
        var contentType = response.headers['content-type'] || '';
        var shouldDecode = opts && opts.force || contentType.indexOf('application/json') !== -1;
        if (!response.body || !contentType || !shouldDecode) {
          return response;
        }

        return objectAssign({}, response, { body: tryParse(response.body) });
      },

      processOptions: function processOptions(options) {
        return objectAssign({}, options, {
          headers: objectAssign({ Accept: 'application/json' }, options.headers)
        });
      }
    };
  };

  function tryParse(body) {
    try {
      return JSON.parse(body);
    } catch (err) {
      err.message = 'Failed to parsed response body as JSON: ' + err.message;
      throw err;
    }
  }

  var browserProgress = function () {
    return {
      onRequest: function onRequest(evt) {
        if (evt.adapter !== 'xhr') {
          return;
        }

        var xhr = evt.request;
        var context = evt.context;

        if ('upload' in xhr && 'onprogress' in xhr.upload) {
          xhr.upload.onprogress = handleProgress('upload');
        }

        if ('onprogress' in xhr) {
          xhr.onprogress = handleProgress('download');
        }

        function handleProgress(stage) {
          return function (event) {
            var percent = event.lengthComputable ? event.loaded / event.total * 100 : -1;
            context.channels.progress.publish({
              stage: stage,
              percent: percent,
              total: event.total,
              loaded: event.loaded,
              lengthComputable: event.lengthComputable
            });
          };
        }
      }
    };
  };

  var progress = browserProgress;

  var makeError_1 = createCommonjsModule(function (module, exports) {

  // ===================================================================

  var construct = typeof Reflect !== 'undefined' ? Reflect.construct : undefined;
  var defineProperty = Object.defineProperty;

  // -------------------------------------------------------------------

  var captureStackTrace = Error.captureStackTrace;
  if (captureStackTrace === undefined) {
    captureStackTrace = function captureStackTrace (error) {
      var container = new Error();

      defineProperty(error, 'stack', {
        configurable: true,
        get: function getStack () {
          var stack = container.stack;

          // Replace property with value for faster future accesses.
          defineProperty(this, 'stack', {
            configurable: true,
            value: stack,
            writable: true
          });

          return stack
        },
        set: function setStack (stack) {
          defineProperty(error, 'stack', {
            configurable: true,
            value: stack,
            writable: true
          });
        }
      });
    };
  }

  // -------------------------------------------------------------------

  function BaseError (message) {
    if (message !== undefined) {
      defineProperty(this, 'message', {
        configurable: true,
        value: message,
        writable: true
      });
    }

    var cname = this.constructor.name;
    if (
      cname !== undefined &&
      cname !== this.name
    ) {
      defineProperty(this, 'name', {
        configurable: true,
        value: cname,
        writable: true
      });
    }

    captureStackTrace(this, this.constructor);
  }

  BaseError.prototype = Object.create(Error.prototype, {
    // See: https://github.com/JsCommunity/make-error/issues/4
    constructor: {
      configurable: true,
      value: BaseError,
      writable: true
    }
  });

  // -------------------------------------------------------------------

  // Sets the name of a function if possible (depends of the JS engine).
  var setFunctionName = (function () {
    function setFunctionName (fn, name) {
      return defineProperty(fn, 'name', {
        configurable: true,
        value: name
      })
    }
    try {
      var f = function () {};
      setFunctionName(f, 'foo');
      if (f.name === 'foo') {
        return setFunctionName
      }
    } catch (_) {}
  })();

  // -------------------------------------------------------------------

  function makeError (constructor, super_) {
    if (super_ == null || super_ === Error) {
      super_ = BaseError;
    } else if (typeof super_ !== 'function') {
      throw new TypeError('super_ should be a function')
    }

    var name;
    if (typeof constructor === 'string') {
      name = constructor;
      constructor = construct !== undefined
        ? function () { return construct(super_, arguments, this.constructor) }
        : function () { super_.apply(this, arguments); };

      // If the name can be set, do it once and for all.
      if (setFunctionName !== undefined) {
        setFunctionName(constructor, name);
        name = undefined;
      }
    } else if (typeof constructor !== 'function') {
      throw new TypeError('constructor should be either a string or a function')
    }

    // Also register the super constructor also as `constructor.super_` just
    // like Node's `util.inherits()`.
    constructor.super_ = constructor['super'] = super_;

    var properties = {
      constructor: {
        configurable: true,
        value: constructor,
        writable: true
      }
    };

    // If the name could not be set on the constructor, set it on the
    // prototype.
    if (name !== undefined) {
      properties.name = {
        configurable: true,
        value: name,
        writable: true
      };
    }
    constructor.prototype = Object.create(super_.prototype, properties);

    return constructor
  }
  exports = module.exports = makeError;
  exports.BaseError = BaseError;
  });
  var makeError_2 = makeError_1.BaseError;

  function ClientError(res) {
    var props = extractErrorProps(res);
    ClientError.super.call(this, props.message);
    objectAssign(this, props);
  }

  function ServerError(res) {
    var props = extractErrorProps(res);
    ServerError.super.call(this, props.message);
    objectAssign(this, props);
  }

  function extractErrorProps(res) {
    var body = res.body;
    var props = {
      response: res,
      statusCode: res.statusCode,
      responseBody: stringifyBody(body, res) // API/Boom style errors ({statusCode, error, message})

    };

    if (body.error && body.message) {
      props.message = "".concat(body.error, " - ").concat(body.message);
      return props;
    } // Query/database errors ({error: {description, other, arb, props}})


    if (body.error && body.error.description) {
      props.message = body.error.description;
      props.details = body.error;
      return props;
    } // Other, more arbitrary errors


    props.message = body.error || body.message || httpErrorMessage(res);
    return props;
  }

  function httpErrorMessage(res) {
    var statusMessage = res.statusMessage ? " ".concat(res.statusMessage) : '';
    return "".concat(res.method, "-request to ").concat(res.url, " resulted in HTTP ").concat(res.statusCode).concat(statusMessage);
  }

  function stringifyBody(body, res) {
    var contentType = (res.headers['content-type'] || '').toLowerCase();
    var isJson = contentType.indexOf('application/json') !== -1;
    return isJson ? JSON.stringify(body, null, 2) : body;
  }

  makeError_1(ClientError);
  makeError_1(ServerError);
  var ClientError_1 = ClientError;
  var ServerError_1 = ServerError;

  var errors = {
  	ClientError: ClientError_1,
  	ServerError: ServerError_1
  };

  var browserMiddleware = [];

  /* eslint-disable no-empty-function, no-process-env */














  var ClientError$1 = errors.ClientError,
      ServerError$1 = errors.ServerError;

  var httpError = {
    onResponse: function onResponse(res) {
      if (res.statusCode >= 500) {
        throw new ServerError$1(res);
      } else if (res.statusCode >= 400) {
        throw new ClientError$1(res);
      }

      return res;
    } // Environment-specific middleware.

  };



  var middleware = browserMiddleware.concat([jsonRequest(), jsonResponse(), progress(), httpError, observable$1({
    implementation: minimal
  })]);
  var request$2 = getIt(middleware);

  function httpRequest(options) {
    var requester = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : request$2;
    return requester(objectAssign({
      maxRedirects: 0
    }, options));
  }

  httpRequest.defaultRequester = request$2;
  httpRequest.ClientError = ClientError$1;
  httpRequest.ServerError = ServerError$1;
  var request_1 = httpRequest;

  var projectHeader = 'X-Sanity-Project-ID';

  var requestOptions = function (config) {
    var headers = {};

    if (config.token) {
      headers.Authorization = "Bearer ".concat(config.token);
    }

    if (!config.useProjectHostname && config.projectId) {
      headers[projectHeader] = config.projectId;
    }

    return {
      headers: headers,
      timeout: 'timeout' in config ? config.timeout : 30000,
      json: true,
      withCredentials: Boolean(config.token || config.withCredentials)
    };
  };

  var defaultCdnHost = 'apicdn.sanity.io';
  var defaultConfig = {
    apiHost: 'https://api.sanity.io',
    useProjectHostname: true,
    gradientMode: false,
    isPromiseAPI: true
  };
  var LOCALHOSTS = ['localhost', '127.0.0.1', '0.0.0.0'];

  var isLocal = function isLocal(host) {
    return LOCALHOSTS.indexOf(host) !== -1;
  }; // eslint-disable-next-line no-console


  var createWarningPrinter = function createWarningPrinter(message) {
    return once$1(function () {
      return console.warn(message.join(' '));
    });
  };

  var printCdnWarning = createWarningPrinter(['You are not using the Sanity CDN. That means your data is always fresh, but the CDN is faster and', "cheaper. Think about it! For more info, see ".concat(generateHelpUrl('js-client-cdn-configuration'), "."), 'To hide this warning, please set the `useCdn` option to either `true` or `false` when creating', 'the client.']);
  var printBrowserTokenWarning = createWarningPrinter(['You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.', "See ".concat(generateHelpUrl('js-client-browser-token'), " for more information and how to hide this warning.")]);
  var printCdnTokenWarning = createWarningPrinter(['You have set `useCdn` to `true` while also specifying a token. This is usually not what you', 'want. The CDN cannot be used with an authorization token, since private data cannot be cached.', "See ".concat(generateHelpUrl('js-client-usecdn-token'), " for more information.")]);
  var defaultConfig_1 = defaultConfig;

  var initConfig = function (config, prevConfig) {
    var newConfig = objectAssign({}, defaultConfig, prevConfig, config);
    var gradientMode = newConfig.gradientMode;
    var projectBased = !gradientMode && newConfig.useProjectHostname;

    if (typeof Promise === 'undefined') {
      var helpUrl = generateHelpUrl('js-client-promise-polyfill');
      throw new Error("No native Promise-implementation found, polyfill needed - see ".concat(helpUrl));
    }

    if (gradientMode && !newConfig.namespace) {
      throw new Error('Configuration must contain `namespace` when running in gradient mode');
    }

    if (projectBased && !newConfig.projectId) {
      throw new Error('Configuration must contain `projectId`');
    }

    var isBrowser = typeof window !== 'undefined' && window.location && window.location.hostname;
    var isLocalhost = isBrowser && isLocal(window.location.hostname);

    if (isBrowser && isLocalhost && newConfig.token && newConfig.ignoreBrowserTokenWarning !== true) {
      printBrowserTokenWarning();
    } else if ((!isBrowser || isLocalhost) && newConfig.useCdn && newConfig.token) {
      printCdnTokenWarning();
    } else if (typeof newConfig.useCdn === 'undefined') {
      printCdnWarning();
    }

    if (projectBased) {
      validators.projectId(newConfig.projectId);
    }

    if (!gradientMode && newConfig.dataset) {
      validators.dataset(newConfig.dataset, newConfig.gradientMode);
    }

    newConfig.isDefaultApi = newConfig.apiHost === defaultConfig.apiHost;
    newConfig.useCdn = Boolean(newConfig.useCdn) && !newConfig.token && !newConfig.withCredentials;

    if (newConfig.gradientMode) {
      newConfig.url = newConfig.apiHost;
      newConfig.cdnUrl = newConfig.apiHost;
    } else {
      var hostParts = newConfig.apiHost.split('://', 2);
      var protocol = hostParts[0];
      var host = hostParts[1];
      var cdnHost = newConfig.isDefaultApi ? defaultCdnHost : host;

      if (newConfig.useProjectHostname) {
        newConfig.url = "".concat(protocol, "://").concat(newConfig.projectId, ".").concat(host, "/v1");
        newConfig.cdnUrl = "".concat(protocol, "://").concat(newConfig.projectId, ".").concat(cdnHost, "/v1");
      } else {
        newConfig.url = "".concat(newConfig.apiHost, "/v1");
        newConfig.cdnUrl = newConfig.url;
      }
    }

    return newConfig;
  };

  var config$1 = {
  	defaultConfig: defaultConfig_1,
  	initConfig: initConfig
  };

  var filter$5 = filter$1.filter;

  var map$5 = map$1.map;





















  var defaultConfig$1 = config$1.defaultConfig,
      initConfig$1 = config$1.initConfig;

  var toPromise$1 = function toPromise(observable) {
    return observable.toPromise();
  };

  function SanityClient() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultConfig$1;

    if (!(this instanceof SanityClient)) {
      return new SanityClient(config);
    }

    this.config(config);
    this.assets = new assetsClient(this);
    this.datasets = new datasetsClient(this);
    this.projects = new projectsClient(this);
    this.users = new usersClient(this);
    this.auth = new authClient(this);

    if (this.clientConfig.isPromiseAPI) {
      var observableConfig = objectAssign({}, this.clientConfig, {
        isPromiseAPI: false
      });
      this.observable = new SanityClient(observableConfig);
    }
  }

  objectAssign(SanityClient.prototype, dataMethods);
  objectAssign(SanityClient.prototype, {
    clone: function clone() {
      return new SanityClient(this.config());
    },
    config: function config(newConfig) {
      if (typeof newConfig === 'undefined') {
        return objectAssign({}, this.clientConfig);
      }

      if (this.observable) {
        var observableConfig = objectAssign({}, newConfig, {
          isPromiseAPI: false
        });
        this.observable.config(observableConfig);
      }

      this.clientConfig = initConfig$1(newConfig, this.clientConfig || {});
      return this;
    },
    getUrl: function getUrl(uri) {
      var canUseCdn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var base = canUseCdn ? this.clientConfig.cdnUrl : this.clientConfig.url;
      return "".concat(base, "/").concat(uri.replace(/^\//, ''));
    },
    isPromiseAPI: function isPromiseAPI() {
      return this.clientConfig.isPromiseAPI;
    },
    _requestObservable: function _requestObservable(options) {
      var uri = options.url || options.uri;
      var canUseCdn = this.clientConfig.useCdn && ['GET', 'HEAD'].indexOf(options.method || 'GET') >= 0 && uri.indexOf('/data/') === 0;
      return request_1(mergeOptions(requestOptions(this.clientConfig), options, {
        url: this.getUrl(uri, canUseCdn)
      }), this.clientConfig.requester);
    },
    request: function request(options) {
      var observable = this._requestObservable(options).pipe(filter$5(function (event) {
        return event.type === 'response';
      }), map$5(function (event) {
        return event.body;
      }));

      return this.isPromiseAPI() ? toPromise$1(observable) : observable;
    }
  }); // Merge http options and headers

  function mergeOptions() {
    for (var _len = arguments.length, opts = new Array(_len), _key = 0; _key < _len; _key++) {
      opts[_key] = arguments[_key];
    }

    var headers = opts.reduce(function (merged, options) {
      if (!merged && !options.headers) {
        return null;
      }

      return objectAssign(merged || {}, options.headers || {});
    }, null);
    return objectAssign.apply(void 0, opts.concat([headers ? {
      headers: headers
    } : {}]));
  }

  SanityClient.Patch = patch;
  SanityClient.Transaction = transaction;
  SanityClient.ClientError = request_1.ClientError;
  SanityClient.ServerError = request_1.ServerError;
  SanityClient.requester = request_1.defaultRequester;
  var sanityClient = SanityClient;

  var sanity = function sanity(projectId, stage) {
    return sanityClient({
      projectId: projectId,
      dataset: stage,
      useCdn: false
    });
  };

  var id = es.id;

  var fetchFactory = function fetchFactory(sanityProject, sanityStorageName, query) {
    var transform = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : id;
    return (
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee() {
        var sanity$1, sanityResponse;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                sanity$1 = sanity(sanityProject, sanityStorageName);
                _context.next = 3;
                return sanity$1.fetch(query);

              case 3:
                sanityResponse = _context.sent;
                return _context.abrupt("return", transform(sanityResponse));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }))
    );
  };

  var fetchFactory_1 = fetchFactory;

  var unnestSlug = function unnestSlug(target) {
    target.slug = target.slug.current;
    return target;
  };

  var curryN$1 = es.curryN,
      map$6 = es.map,
      prop$1 = es.prop;
  var refsToIds = curryN$1(2, function (fieldName, target) {
    target[fieldName] = map$6(prop$1('_ref'), target[fieldName]);
    return target;
  });

  var prop$2 = es.prop,
      map$7 = es.map;

  var formatDevices = function formatDevices(target) {
    target.devices = map$7(prop$2('name'), target.devices);
    return target;
  };

  var reject$1 = es.reject,
      isNil$1 = es.isNil;

  function parsePreviewUrl(url, index) {
    if (url === null) return null;
    return {
      type: /.mp4$/.test(url) ? 'video' : 'img',
      device: ['mobile', 'desktop'][index],
      src: url
    };
  }

  var formatPreviews = function formatPreviews(target) {
    target.previews = reject$1(isNil$1, target.previews.map(parsePreviewUrl));
    return target;
  };

  var pipe$1 = es.pipe,
      map$8 = es.map,
      groupBy$1 = es.groupBy;
  var langs = ['en', 'ru'];
  var warnings = {
    ru: 'Уточняйте действующие цены у наших менеджеров',
    en: 'Price may vary. Contact us to get a quote'
  };

  function wrapCells(target) {
    for (var _i = 0; _i < langs.length; _i++) {
      var lang = langs[_i];
      if (target[lang] && target[lang].rows) target[lang].rows = map$8(function (cells) {
        return {
          cells: cells
        };
      }, target[lang].rows);
    }

    return target;
  }

  function unnestRows(target) {
    for (var _i2 = 0; _i2 < langs.length; _i2++) {
      var lang = langs[_i2];
      if (target[lang] && target[lang].rows) target[lang] = target[lang].rows;
    }

    return target;
  }

  function addTooltips(target) {
    var priceRowRegEx = /price|cost|charge|cpm|cpu|cpa|цен(ы|а)|стоимость|руб\./i;

    var _loop = function _loop() {
      var lang = langs[_i3];

      if (target[lang]) {
        target[lang] = map$8(function (row) {
          if (priceRowRegEx.test(row.cells[1]) || priceRowRegEx.test(row.cells[2])) row.tooltip = warnings[lang];
          return row;
        }, target[lang]);
      }
    };

    for (var _i3 = 0; _i3 < langs.length; _i3++) {
      _loop();
    }

    return target;
  }

  function groupByPads(target) {
    for (var _i4 = 0; _i4 < langs.length; _i4++) {
      var lang = langs[_i4];

      if (target[lang]) {
        target[lang] = groupBy$1(function (row) {
          return row.cells.shift();
        }, target[lang]);
      }
    }

    return target;
  }

  var formatSummaryTable = function formatSummaryTable(target) {
    target.summaryTable = pipe$1(wrapCells, unnestRows, addTooltips, groupByPads)(target.summaryTable);
    return target;
  };

  var setIsNewField = function setIsNewField(target) {
    target.isNew = false;
    if (target.newUntilDate) target.isNew = new Date(target.newUntilDate) > new Date();
    return target;
  };

  var pipe$2 = es.pipe,
      map$9 = es.map;
  var query = "*[_type == \"product\"] {\n    \"id\": _id,\n    title,\n    lead,\n    slug,\n    pads,\n    businessGoals,\n    minimalBudget,\n    summaryTable,\n    \"devices\": devices[]->{name},\n    \"previews\": [\n      mobilePreview.asset->url,\n      desktopPreview.asset->url\n    ],\n    newUntilDate,\n    description\n  }";
  var transform = pipe$2(map$9(unnestSlug), map$9(refsToIds('pads')), map$9(refsToIds('businessGoals')), map$9(formatDevices), map$9(formatPreviews), map$9(formatSummaryTable), map$9(setIsNewField));

  var listProducts = function listProducts(sanityProject, sanityStorageName) {
    return fetchFactory_1(sanityProject, sanityStorageName, query, transform);
  };

  var query$1 = "*[_type == \"businessGoal\"] {\n    title,\n    \"id\": _id\n  }";

  var listBusinessGoals = function listBusinessGoals(sanityProject, sanityStorageName) {
    return fetchFactory_1(sanityProject, sanityStorageName, query$1, function (id) {
      return id;
    });
  };

  var query$2 = "*[_type == \"pad\"] {\n    title,\n    \"id\": _id,\n    \"parentId\": parents._ref\n  }";

  var listPads = function listPads(sanityProject, sanityStorageName) {
    return fetchFactory_1(sanityProject, sanityStorageName, query$2, function (id) {
      return id;
    });
  };

  var map$a = es.map;
  var query$3 = "*[_type == \"article\"] {\n    title,\n    body,\n    \"date\": publicationDate,\n    slug,\n    \"id\": _id\n  }";

  var listArticles = function listArticles(sanityProject, sanityStorageName) {
    return fetchFactory_1(sanityProject, sanityStorageName, query$3, map$a(unnestSlug));
  };

  var map$b = es.map,
      flatten$1 = es.flatten,
      reject$2 = es.reject,
      isEmpty$1 = es.isEmpty,
      trim$1 = es.trim;

  var parseRecipients = function parseRecipients(target) {
    target.recipients = flatten$1(map$b(function (_ref) {
      var list = _ref.list;
      return reject$2(isEmpty$1, map$b(trim$1, list.split('\n')));
    }, target.recipients));
    return target;
  };

  /*!
   * Cross-Browser Split 1.1.1
   * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
   * Available under the MIT License
   * ECMAScript compliant, uniform cross-browser split method
   */

  /**
   * Splits a string into an array of strings using a regex or string separator. Matches of the
   * separator are not included in the result array. However, if `separator` is a regex that contains
   * capturing groups, backreferences are spliced into the result each time `separator` is matched.
   * Fixes browser bugs compared to the native `String.prototype.split` and can be used reliably
   * cross-browser.
   * @param {String} str String to split.
   * @param {RegExp|String} separator Regex or string to use for separating the string.
   * @param {Number} [limit] Maximum number of items to include in the result array.
   * @returns {Array} Array of substrings.
   * @example
   *
   * // Basic use
   * split('a b c d', ' ');
   * // -> ['a', 'b', 'c', 'd']
   *
   * // With limit
   * split('a b c d', ' ', 2);
   * // -> ['a', 'b']
   *
   * // Backreferences in result array
   * split('..word1 word2..', /([a-z]+)(\d+)/i);
   * // -> ['..', 'word', '1', ' ', 'word', '2', '..']
   */
  var browserSplit = (function split(undef) {

    var nativeSplit = String.prototype.split,
      compliantExecNpcg = /()??/.exec("")[1] === undef,
      // NPCG: nonparticipating capturing group
      self;

    self = function(str, separator, limit) {
      // If `separator` is not a regex, use `nativeSplit`
      if (Object.prototype.toString.call(separator) !== "[object RegExp]") {
        return nativeSplit.call(str, separator, limit);
      }
      var output = [],
        flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.extended ? "x" : "") + // Proposed for ES6
        (separator.sticky ? "y" : ""),
        // Firefox 3+
        lastLastIndex = 0,
        // Make `global` and avoid `lastIndex` issues by working with a copy
        separator = new RegExp(separator.source, flags + "g"),
        separator2, match, lastIndex, lastLength;
      str += ""; // Type-convert
      if (!compliantExecNpcg) {
        // Doesn't need flags gy, but they don't hurt
        separator2 = new RegExp("^" + separator.source + "$(?!\\s)", flags);
      }
      /* Values for `limit`, per the spec:
       * If undefined: 4294967295 // Math.pow(2, 32) - 1
       * If 0, Infinity, or NaN: 0
       * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
       * If negative number: 4294967296 - Math.floor(Math.abs(limit))
       * If other: Type-convert, then use the above rules
       */
      limit = limit === undef ? -1 >>> 0 : // Math.pow(2, 32) - 1
      limit >>> 0; // ToUint32(limit)
      while (match = separator.exec(str)) {
        // `separator.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0].length;
        if (lastIndex > lastLastIndex) {
          output.push(str.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for
          // nonparticipating capturing groups
          if (!compliantExecNpcg && match.length > 1) {
            match[0].replace(separator2, function() {
              for (var i = 1; i < arguments.length - 2; i++) {
                if (arguments[i] === undef) {
                  match[i] = undef;
                }
              }
            });
          }
          if (match.length > 1 && match.index < str.length) {
            Array.prototype.push.apply(output, match.slice(1));
          }
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= limit) {
            break;
          }
        }
        if (separator.lastIndex === match.index) {
          separator.lastIndex++; // Avoid an infinite loop
        }
      }
      if (lastLastIndex === str.length) {
        if (lastLength || !separator.test("")) {
          output.push("");
        }
      } else {
        output.push(str.slice(lastLastIndex));
      }
      return output.length > limit ? output.slice(0, limit) : output;
    };

    return self;
  })();

  var indexOf$1 = [].indexOf;

  var indexof = function(arr, obj){
    if (indexOf$1) return arr.indexOf(obj);
    for (var i = 0; i < arr.length; ++i) {
      if (arr[i] === obj) return i;
    }
    return -1;
  };

  // contains, add, remove, toggle


  var classList = ClassList;

  function ClassList(elem) {
      var cl = elem.classList;

      if (cl) {
          return cl
      }

      var classList = {
          add: add
          , remove: remove
          , contains: contains
          , toggle: toggle
          , toString: $toString
          , length: 0
          , item: item
      };

      return classList

      function add(token) {
          var list = getTokens();
          if (indexof(list, token) > -1) {
              return
          }
          list.push(token);
          setTokens(list);
      }

      function remove(token) {
          var list = getTokens()
              , index = indexof(list, token);

          if (index === -1) {
              return
          }

          list.splice(index, 1);
          setTokens(list);
      }

      function contains(token) {
          return indexof(getTokens(), token) > -1
      }

      function toggle(token) {
          if (contains(token)) {
              remove(token);
              return false
          } else {
              add(token);
              return true
          }
      }

      function $toString() {
          return elem.className
      }

      function item(index) {
          var tokens = getTokens();
          return tokens[index] || null
      }

      function getTokens() {
          var className = elem.className;

          return filter$6(className.split(" "), isTruthy)
      }

      function setTokens(list) {
          var length = list.length;

          elem.className = list.join(" ");
          classList.length = length;

          for (var i = 0; i < list.length; i++) {
              classList[i] = list[i];
          }

          delete list[length];
      }
  }

  function filter$6 (arr, fn) {
      var ret = [];
      for (var i = 0; i < arr.length; i++) {
          if (fn(arr[i])) ret.push(arr[i]);
      }
      return ret
  }

  function isTruthy(value) {
      return !!value
  }

  var require$$0 = {};

  var hyperscript = createCommonjsModule(function (module) {
  var w = typeof window === 'undefined' ? require$$0 : window;
  var document = w.document;
  var Text = w.Text;

  function context () {

    var cleanupFuncs = [];

    function h() {
      var args = [].slice.call(arguments), e = null;
      function item (l) {
        var r;
        function parseClass (string) {
          // Our minimal parser doesn’t understand escaping CSS special
          // characters like `#`. Don’t use them. More reading:
          // https://mathiasbynens.be/notes/css-escapes .

          var m = browserSplit(string, /([\.#]?[^\s#.]+)/);
          if(/^\.|#/.test(m[1]))
            e = document.createElement('div');
          forEach(m, function (v) {
            var s = v.substring(1,v.length);
            if(!v) return
            if(!e)
              e = document.createElement(v);
            else if (v[0] === '.')
              classList(e).add(s);
            else if (v[0] === '#')
              e.setAttribute('id', s);
          });
        }

        if(l == null)
          ;
        else if('string' === typeof l) {
          if(!e)
            parseClass(l);
          else
            e.appendChild(r = document.createTextNode(l));
        }
        else if('number' === typeof l
          || 'boolean' === typeof l
          || l instanceof Date
          || l instanceof RegExp ) {
            e.appendChild(r = document.createTextNode(l.toString()));
        }
        //there might be a better way to handle this...
        else if (isArray(l))
          forEach(l, item);
        else if(isNode(l))
          e.appendChild(r = l);
        else if(l instanceof Text)
          e.appendChild(r = l);
        else if ('object' === typeof l) {
          for (var k in l) {
            if('function' === typeof l[k]) {
              if(/^on\w+/.test(k)) {
                (function (k, l) { // capture k, l in the closure
                  if (e.addEventListener){
                    e.addEventListener(k.substring(2), l[k], false);
                    cleanupFuncs.push(function(){
                      e.removeEventListener(k.substring(2), l[k], false);
                    });
                  }else{
                    e.attachEvent(k, l[k]);
                    cleanupFuncs.push(function(){
                      e.detachEvent(k, l[k]);
                    });
                  }
                })(k, l);
              } else {
                // observable
                e[k] = l[k]();
                cleanupFuncs.push(l[k](function (v) {
                  e[k] = v;
                }));
              }
            }
            else if(k === 'style') {
              if('string' === typeof l[k]) {
                e.style.cssText = l[k];
              }else{
                for (var s in l[k]) (function(s, v) {
                  if('function' === typeof v) {
                    // observable
                    e.style.setProperty(s, v());
                    cleanupFuncs.push(v(function (val) {
                      e.style.setProperty(s, val);
                    }));
                  } else
                    var match = l[k][s].match(/(.*)\W+!important\W*$/);
                    if (match) {
                      e.style.setProperty(s, match[1], 'important');
                    } else {
                      e.style.setProperty(s, l[k][s]);
                    }
                })(s, l[k][s]);
              }
            } else if(k === 'attrs') {
              for (var v in l[k]) {
                e.setAttribute(v, l[k][v]);
              }
            }
            else if (k.substr(0, 5) === "data-") {
              e.setAttribute(k, l[k]);
            } else {
              e[k] = l[k];
            }
          }
        } else if ('function' === typeof l) {
          //assume it's an observable!
          var v = l();
          e.appendChild(r = isNode(v) ? v : document.createTextNode(v));

          cleanupFuncs.push(l(function (v) {
            if(isNode(v) && r.parentElement)
              r.parentElement.replaceChild(v, r), r = v;
            else
              r.textContent = v;
          }));
        }

        return r
      }
      while(args.length)
        item(args.shift());

      return e
    }

    h.cleanup = function () {
      for (var i = 0; i < cleanupFuncs.length; i++){
        cleanupFuncs[i]();
      }
      cleanupFuncs.length = 0;
    };

    return h
  }

  var h = module.exports = context();
  h.context = context;

  function isNode (el) {
    return el && el.nodeName && el.nodeType
  }

  function forEach (arr, fn) {
    if (arr.forEach) return arr.forEach(fn)
    for (var i = 0; i < arr.length; i++) fn(arr[i], i);
  }

  function isArray (arr) {
    return Object.prototype.toString.call(arr) == '[object Array]'
  }
  });

  var parseSource_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = parseSource;

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  // Convert an asset-id, asset or image to an image record suitable for processing
  // eslint-disable-next-line complexity
  function parseSource(source) {
    if (!source) {
      return null;
    }

    var image;

    if (typeof source === 'string' && isUrl(source)) {
      // Someone passed an existing image url?
      image = {
        asset: {
          _ref: urlToId(source)
        }
      };
    } else if (typeof source === 'string') {
      // Just an asset id
      image = {
        asset: {
          _ref: source
        }
      };
    } else if (typeof source._ref === 'string') {
      // We just got passed an asset directly
      image = {
        asset: source
      };
    } else if (source._id) {
      // If we were passed an image asset document
      image = {
        asset: {
          _ref: source._id
        }
      };
    } else if (source.asset && source.asset.url && !source.asset._ref) {
      image = {
        asset: {
          _ref: urlToId(source.asset.url)
        }
      };
    } else if (_typeof(source.asset) === 'object') {
      image = source;
    } else {
      // We got something that does not look like an image, or it is an image
      // that currently isn't sporting an asset.
      return null;
    }

    if (source.crop) {
      image.crop = source.crop;
    }

    if (source.hotspot) {
      image.hotspot = source.hotspot;
    }

    return applyDefaults(image);
  }

  function isUrl(url) {
    return /^https?:\/\//.test("".concat(url));
  }

  function urlToId(url) {
    var parts = url.split('/').slice(-1);
    return "image-".concat(parts[0]).replace(/\.([a-z]+)$/, '-$1');
  } // Mock crop and hotspot if image lacks it


  function applyDefaults(image) {
    if (image.crop && image.hotspot) {
      return image;
    }

    return _objectSpread({
      crop: {
        left: 0,
        top: 0,
        bottom: 0,
        right: 0
      },
      hotspot: {
        x: 0.5,
        y: 0.5,
        height: 1.0,
        width: 1.0
      }
    }, image);
  }

  });

  unwrapExports(parseSource_1);

  var parseAssetId_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = parseAssetId;

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

  function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  var example = 'image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg';

  function parseAssetId(ref) {
    var _ref$split = ref.split('-'),
        _ref$split2 = _slicedToArray(_ref$split, 4),
        id = _ref$split2[1],
        dimensionString = _ref$split2[2],
        format = _ref$split2[3];

    if (!id || !dimensionString || !format) {
      throw new Error("Malformed asset _ref '".concat(ref, "'. Expected an id like \"").concat(example, "\"."));
    }

    var _dimensionString$spli = dimensionString.split('x'),
        _dimensionString$spli2 = _slicedToArray(_dimensionString$spli, 2),
        imgWidthStr = _dimensionString$spli2[0],
        imgHeightStr = _dimensionString$spli2[1];

    var width = +imgWidthStr;
    var height = +imgHeightStr;
    var isValidAssetId = isFinite(width) && isFinite(height);

    if (!isValidAssetId) {
      throw new Error("Malformed asset _ref '".concat(ref, "'. Expected an id like \"").concat(example, "\"."));
    }

    return {
      id: id,
      width: width,
      height: height,
      format: format
    };
  }

  });

  unwrapExports(parseAssetId_1);

  var urlForImage_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = urlForImage;
  Object.defineProperty(exports, "parseSource", {
    enumerable: true,
    get: function get() {
      return _parseSource.default;
    }
  });

  var _parseSource = _interopRequireDefault(parseSource_1);

  var _parseAssetId = _interopRequireDefault(parseAssetId_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

  function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var SPEC_NAME_TO_URL_NAME_MAPPINGS = [['width', 'w'], ['height', 'h'], ['format', 'fm'], ['download', 'dl'], ['blur', 'blur'], ['sharpen', 'sharp'], ['invert', 'invert'], ['orientation', 'or'], ['minHeight', 'min-h'], ['maxHeight', 'max-h'], ['minWidth', 'min-w'], ['maxWidth', 'max-w'], ['quality', 'q'], ['fit', 'fit'], ['crop', 'crop']];

  function urlForImage(options) {
    var spec = _objectSpread({}, options || {});

    var source = spec.source;
    delete spec.source;
    var image = (0, _parseSource.default)(source);

    if (!image) {
      return null;
    }

    var asset = (0, _parseAssetId.default)(image.asset._ref); // Compute crop rect in terms of pixel coordinates in the raw source image

    var crop = {
      left: Math.round(image.crop.left * asset.width),
      top: Math.round(image.crop.top * asset.height)
    };
    crop.width = Math.round(asset.width - image.crop.right * asset.width - crop.left);
    crop.height = Math.round(asset.height - image.crop.bottom * asset.height - crop.top); // Compute hot spot rect in terms of pixel coordinates

    var hotSpotVerticalRadius = image.hotspot.height * asset.height / 2;
    var hotSpotHorizontalRadius = image.hotspot.width * asset.width / 2;
    var hotSpotCenterX = image.hotspot.x * asset.width;
    var hotSpotCenterY = image.hotspot.y * asset.height;
    var hotspot = {
      left: hotSpotCenterX - hotSpotHorizontalRadius,
      top: hotSpotCenterY - hotSpotVerticalRadius,
      right: hotSpotCenterX + hotSpotHorizontalRadius,
      bottom: hotSpotCenterY + hotSpotHorizontalRadius
    };
    spec.asset = asset; // If irrelevant, or if we are requested to: don't perform crop/fit based on
    // the crop/hotspot.

    if (!(spec.rect || spec.focalPoint || spec.ignoreImageParams || spec.crop)) {
      spec = _objectSpread({}, spec, fit({
        crop: crop,
        hotspot: hotspot
      }, spec));
    }

    return specToImageUrl(spec);
  } // eslint-disable-next-line complexity


  function specToImageUrl(spec) {
    var cdnUrl = spec.baseUrl || 'https://cdn.sanity.io';
    var filename = "".concat(spec.asset.id, "-").concat(spec.asset.width, "x").concat(spec.asset.height, ".").concat(spec.asset.format);
    var baseUrl = "".concat(cdnUrl, "/images/").concat(spec.projectId, "/").concat(spec.dataset, "/").concat(filename);
    var params = [];

    if (spec.rect) {
      // Only bother url with a crop if it actually crops anything
      var isEffectiveCrop = spec.rect.left != 0 || spec.rect.top != 0 || spec.rect.height != spec.asset.height || spec.rect.width != spec.asset.width;

      if (isEffectiveCrop) {
        params.push("rect=".concat(spec.rect.left, ",").concat(spec.rect.top, ",").concat(spec.rect.width, ",").concat(spec.rect.height));
      }
    }

    if (spec.bg) {
      params.push("bg=".concat(spec.bg));
    }

    if (spec.focalPoint) {
      params.push("fp-x=".concat(spec.focalPoint.x));
      params.push("fp-x=".concat(spec.focalPoint.y));
    }

    if (spec.flipHorizontal || spec.flipVertical) {
      params.push("flip=".concat(spec.flipHorizontal ? 'h' : '').concat(spec.flipVertical ? 'v' : ''));
    } // Map from spec name to url param name, and allow using the actual param name as an alternative


    SPEC_NAME_TO_URL_NAME_MAPPINGS.forEach(function (mapping) {
      var _mapping = _slicedToArray(mapping, 2),
          specName = _mapping[0],
          param = _mapping[1];

      if (typeof spec[specName] !== 'undefined') {
        params.push("".concat(param, "=").concat(encodeURIComponent(spec[specName])));
      } else if (typeof spec[param] !== 'undefined') {
        params.push("".concat(param, "=").concat(encodeURIComponent(spec[param])));
      }
    });

    if (params.length === 0) {
      return baseUrl;
    }

    return "".concat(baseUrl, "?").concat(params.join('&'));
  }

  function fit(source, spec) {
    var result = {
      width: spec.width,
      height: spec.height // If we are not constraining the aspect ratio, we'll just use the whole crop

    };

    if (!(spec.width && spec.height)) {
      result.rect = source.crop;
      return result;
    }

    var crop = source.crop;
    var hotspot = source.hotspot; // If we are here, that means aspect ratio is locked and fitting will be a bit harder

    var desiredAspectRatio = spec.width / spec.height;
    var cropAspectRatio = crop.width / crop.height;

    if (cropAspectRatio > desiredAspectRatio) {
      // The crop is wider than the desired aspect ratio. That means we are cutting from the sides
      var _height = crop.height;

      var _width = _height * desiredAspectRatio;

      var _top = crop.top; // Center output horizontally over hotspot

      var hotspotXCenter = (hotspot.right - hotspot.left) / 2 + hotspot.left;

      var _left = hotspotXCenter - _width / 2; // Keep output within crop


      if (_left < crop.left) {
        _left = crop.left;
      } else if (_left + _width > crop.left + crop.width) {
        _left = crop.left + crop.width - _width;
      }

      result.rect = {
        left: Math.round(_left),
        top: Math.round(_top),
        width: Math.round(_width),
        height: Math.round(_height)
      };
      return result;
    } // The crop is taller than the desired ratio, we are cutting from top and bottom


    var width = crop.width;
    var height = width / desiredAspectRatio;
    var left = crop.left; // Center output vertically over hotspot

    var hotspotYCenter = (hotspot.bottom - hotspot.top) / 2 + hotspot.top;
    var top = hotspotYCenter - height / 2; // Keep output rect within crop

    if (top < crop.top) {
      top = crop.top;
    } else if (top + height > crop.top + crop.height) {
      top = crop.top + crop.height - height;
    }

    result.rect = {
      left: Math.max(0, Math.floor(left)),
      top: Math.max(0, Math.floor(top)),
      width: Math.round(width),
      height: Math.round(height)
    };
    return result;
  } // For backwards-compatibility

  });

  unwrapExports(urlForImage_1);

  var builder = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = urlBuilder;

  var _urlForImage = _interopRequireDefault(urlForImage_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var validFits = ['clip', 'crop', 'fill', 'fillmax', 'max', 'scale', 'min'];
  var validCrops = ['top', 'bottom', 'left', 'right', 'center', 'focalpoint', 'entropy'];

  var ImageUrlBuilder =
  /*#__PURE__*/
  function () {
    function ImageUrlBuilder(parent, options) {
      _classCallCheck(this, ImageUrlBuilder);

      if (parent) {
        this.options = _objectSpread({}, parent.options || {}, options || {});
      } else {
        this.options = options || {};
      }
    }

    _createClass(ImageUrlBuilder, [{
      key: "withOptions",
      value: function withOptions(options) {
        return new ImageUrlBuilder(this, options);
      } // The image to be represented. Accepts a Sanity 'image'-document, 'asset'-document or
      // _id of asset. To get the benefit of automatic hot-spot/crop integration with the content
      // studio, the 'image'-document must be provided.

    }, {
      key: "image",
      value: function image(source) {
        return this.withOptions({
          source: source
        });
      } // Specify the dataset

    }, {
      key: "dataset",
      value: function dataset(_dataset) {
        return this.withOptions({
          dataset: _dataset
        });
      } // Specify the projectId

    }, {
      key: "projectId",
      value: function projectId(_projectId) {
        return this.withOptions({
          projectId: _projectId
        });
      } // Specify background color

    }, {
      key: "bg",
      value: function bg(_bg) {
        return this.withOptions({
          bg: _bg
        });
      } // Specify the width of the image in pixels

    }, {
      key: "width",
      value: function width(_width) {
        return this.withOptions({
          width: _width
        });
      } // Specify the height of the image in pixels

    }, {
      key: "height",
      value: function height(_height) {
        return this.withOptions({
          height: _height
        });
      } // Specify focal point in fraction of image dimensions. Each component 0.0-1.0

    }, {
      key: "focalPoint",
      value: function focalPoint(x, y) {
        return this.withOptions({
          focalPoint: {
            x: x,
            y: y
          }
        });
      }
    }, {
      key: "maxWidth",
      value: function maxWidth(_maxWidth) {
        return this.withOptions({
          maxWidth: _maxWidth
        });
      }
    }, {
      key: "minWidth",
      value: function minWidth(_minWidth) {
        return this.withOptions({
          minWidth: _minWidth
        });
      }
    }, {
      key: "maxHeight",
      value: function maxHeight(_maxHeight) {
        return this.withOptions({
          maxHeight: _maxHeight
        });
      }
    }, {
      key: "minHeight",
      value: function minHeight(_minHeight) {
        return this.withOptions({
          minHeight: _minHeight
        });
      } // Specify width and height in pixels

    }, {
      key: "size",
      value: function size(width, height) {
        return this.withOptions({
          width: width,
          height: height
        });
      } // Specify blur between 0 and 100

    }, {
      key: "blur",
      value: function blur(_blur) {
        return this.withOptions({
          blur: _blur
        });
      }
    }, {
      key: "sharpen",
      value: function sharpen(_sharpen) {
        return this.withOptions({
          sharpen: _sharpen
        });
      } // Specify the desired rectangle of the image

    }, {
      key: "rect",
      value: function rect(left, top, width, height) {
        return this.withOptions({
          rect: {
            left: left,
            top: top,
            width: width,
            height: height
          }
        });
      } // Specify the image format of the image. 'jpg', 'pjpg', 'png', 'webp'

    }, {
      key: "format",
      value: function format(_format) {
        return this.withOptions({
          format: _format
        });
      }
    }, {
      key: "invert",
      value: function invert(_invert) {
        return this.withOptions({
          invert: _invert
        });
      } // Rotation in degrees 0, 90, 180, 270

    }, {
      key: "orientation",
      value: function orientation(_orientation) {
        return this.withOptions({
          orientation: _orientation
        });
      } // Compression quality 0-100

    }, {
      key: "quality",
      value: function quality(_quality) {
        return this.withOptions({
          quality: _quality
        });
      } // Make it a download link. Parameter is default filename.

    }, {
      key: "forceDownload",
      value: function forceDownload(download) {
        return this.withOptions({
          download: download
        });
      } // Flip image horizontally

    }, {
      key: "flipHorizontal",
      value: function flipHorizontal() {
        return this.withOptions({
          flipHorizontal: true
        });
      } // Flip image verically

    }, {
      key: "flipVertical",
      value: function flipVertical() {
        return this.withOptions({
          flipVertical: true
        });
      } // Ignore crop/hotspot from image record, even when present

    }, {
      key: "ignoreImageParams",
      value: function ignoreImageParams() {
        return this.withOptions({
          ignoreImageParams: true
        });
      }
    }, {
      key: "fit",
      value: function fit(value) {
        if (validFits.indexOf(value) === -1) {
          throw new Error("Invalid fit mode \"".concat(value, "\""));
        }

        return this.withOptions({
          fit: value
        });
      }
    }, {
      key: "crop",
      value: function crop(value) {
        if (validCrops.indexOf(value) === -1) {
          throw new Error("Invalid crop mode \"".concat(value, "\""));
        }

        return this.withOptions({
          crop: value
        });
      } // Gets the url based on the submitted parameters

    }, {
      key: "url",
      value: function url() {
        return (0, _urlForImage.default)(this.options);
      } // Synonym for url()

    }, {
      key: "toString",
      value: function toString() {
        return this.url();
      }
    }]);

    return ImageUrlBuilder;
  }();

  function urlBuilder(options) {
    // Did we get a SanityClient?
    if (options && _typeof(options.clientConfig) === 'object') {
      // Inherit config from client
      return new ImageUrlBuilder(null, {
        baseUrl: options.clientConfig.apiHost.replace(/^https:\/\/api\./, 'https://cdn.'),
        projectId: options.clientConfig.projectId,
        dataset: options.clientConfig.dataset
      });
    } // Or just accept the options as given


    return new ImageUrlBuilder(null, options);
  }

  });

  unwrapExports(builder);

  // eslint-disable-next-line import/no-commonjs
  var imageUrl = builder.default;

  var enc$1 = encodeURIComponent;
  var materializeError = 'You must either:\n  - Pass `projectId` and `dataset` to the block renderer\n  - Materialize images to include the `url` field.\n\nFor more information, see ' + generateHelpUrl('block-content-image-materializing');

  var getQueryString = function getQueryString(options) {
    var query = options.imageOptions;
    var keys = Object.keys(query);
    if (!keys.length) {
      return '';
    }

    var params = keys.map(function (key) {
      return enc$1(key) + '=' + enc$1(query[key]);
    });
    return '?' + params.join('&');
  };

  var buildUrl = function buildUrl(props) {
    var node = props.node,
        options = props.options;
    var projectId = options.projectId,
        dataset = options.dataset;

    var asset = node.asset;

    if (!asset) {
      throw new Error('Image does not have required `asset` property');
    }

    if (asset.url) {
      return asset.url + getQueryString(options);
    }

    if (!projectId || !dataset) {
      throw new Error(materializeError);
    }

    var ref = asset._ref;
    if (!ref) {
      throw new Error('Invalid image reference in block, no `_ref` found on `asset`');
    }

    return imageUrl(objectAssign({ projectId: projectId, dataset: dataset }, options.imageOptions || {})).image(node).toString();
  };

  var getImageUrl = buildUrl;

  var defaultMarks = ['strong', 'em', 'code', 'underline', 'strike-through'];

  var buildMarksTree = function buildMarksTree(block) {
    var children = block.children,
        markDefs = block.markDefs;

    if (!children || !children.length) {
      return [];
    }

    var sortedMarks = children.map(sortMarksByOccurences);
    var rootNode = { _type: 'span', children: [] };
    var nodeStack = [rootNode];

    children.forEach(function (span, i) {
      var marksNeeded = sortedMarks[i];
      if (!marksNeeded) {
        var lastNode = nodeStack[nodeStack.length - 1];
        lastNode.children.push(span);
        return;
      }

      var pos = 1;

      // Start at position one. Root is always plain and should never be removed. (?)
      if (nodeStack.length > 1) {
        for (pos; pos < nodeStack.length; pos++) {
          var mark = nodeStack[pos].markKey;
          var index = marksNeeded.indexOf(mark);
          // eslint-disable-next-line max-depth
          if (index === -1) {
            break;
          }

          marksNeeded.splice(index, 1);
        }
      }

      // Keep from beginning to first miss
      nodeStack = nodeStack.slice(0, pos);

      // Add needed nodes
      var currentNode = findLastParentNode(nodeStack);
      marksNeeded.forEach(function (mark) {
        var node = {
          _type: 'span',
          _key: span._key,
          children: [],
          mark: markDefs.find(function (def) {
            return def._key === mark;
          }) || mark,
          markKey: mark
        };

        currentNode.children.push(node);
        nodeStack.push(node);
        currentNode = node;
      });

      // Split at newlines to make individual line chunks, but keep newline
      // characters as individual elements in the array. We use these characters
      // in the span serializer to trigger hard-break rendering
      if (isTextSpan(span)) {
        var lines = span.text.split('\n');
        for (var line = lines.length; line-- > 1;) {
          lines.splice(line, 0, '\n');
        }

        currentNode.children = currentNode.children.concat(lines);
      } else {
        currentNode.children = currentNode.children.concat(span);
      }
    });

    return rootNode.children;
  };

  // We want to sort all the marks of all the spans in the following order:
  // 1. Marks that are shared amongst the most adjacent siblings
  // 2. Non-default marks (links, custom metadata)
  // 3. Built-in, plain marks (bold, emphasis, code etc)
  function sortMarksByOccurences(span, i, spans) {
    if (!span.marks || span.marks.length === 0) {
      return span.marks || [];
    }

    var markOccurences = span.marks.reduce(function (occurences, mark) {
      occurences[mark] = occurences[mark] ? occurences[mark] + 1 : 1;

      for (var siblingIndex = i + 1; siblingIndex < spans.length; siblingIndex++) {
        var sibling = spans[siblingIndex];

        if (sibling.marks && Array.isArray(sibling.marks) && sibling.marks.indexOf(mark) !== -1) {
          occurences[mark]++;
        } else {
          break;
        }
      }

      return occurences;
    }, {});

    var sortByOccurence = sortMarks.bind(null, markOccurences);

    // Slicing because sort() mutates the input
    return span.marks.slice().sort(sortByOccurence);
  }

  function sortMarks(occurences, markA, markB) {
    var aOccurences = occurences[markA] || 0;
    var bOccurences = occurences[markB] || 0;

    if (aOccurences !== bOccurences) {
      return bOccurences - aOccurences;
    }

    var aDefaultPos = defaultMarks.indexOf(markA);
    var bDefaultPos = defaultMarks.indexOf(markB);

    // Sort default marks last
    if (aDefaultPos !== bDefaultPos) {
      return aDefaultPos - bDefaultPos;
    }

    // Sort other marks simply by key
    if (markA < markB) {
      return -1;
    } else if (markA > markB) {
      return 1;
    }

    return 0;
  }

  function isTextSpan(node) {
    return node._type === 'span' && typeof node.text === 'string' && (Array.isArray(node.marks) || typeof node.marks === 'undefined');
  }

  function findLastParentNode(nodes) {
    for (var i = nodes.length - 1; i >= 0; i--) {
      var node = nodes[i];
      if (node._type === 'span' && node.children) {
        return node;
      }
    }

    return undefined;
  }

  var buildMarksTree_1 = buildMarksTree;

  /* eslint-disable max-depth, complexity */
  function nestLists(blocks) {
    var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'html';

    var tree = [];
    var currentList = void 0;

    for (var i = 0; i < blocks.length; i++) {
      var block = blocks[i];
      if (!isListBlock(block)) {
        tree.push(block);
        currentList = null;
        continue;
      }

      // Start of a new list?
      if (!currentList) {
        currentList = listFromBlock(block);
        tree.push(currentList);
        continue;
      }

      // New list item within same list?
      if (blockMatchesList(block, currentList)) {
        currentList.children.push(block);
        continue;
      }

      // Different list props, are we going deeper?
      if (block.level > currentList.level) {
        var newList = listFromBlock(block);

        if (mode === 'html') {
          // Because HTML is kinda weird, nested lists needs to be nested within list items
          // So while you would think that we could populate the parent list with a new sub-list,
          // We actually have to target the last list element (child) of the parent.
          // However, at this point we need to be very careful - simply pushing to the list of children
          // will mutate the input, and we don't want to blindly clone the entire tree.

          // Clone the last child while adding our new list as the last child of it
          var lastListItem = lastChild(currentList);
          var newLastChild = objectAssign({}, lastListItem, {
            children: lastListItem.children.concat(newList)
          });

          // Swap the last child
          currentList.children[currentList.children.length - 1] = newLastChild;
        } else {
          currentList.children.push(newList);
        }

        // Set the newly created, deeper list as the current
        currentList = newList;
        continue;
      }

      // Different list props, are we going back up the tree?
      if (block.level < currentList.level) {
        // Current list has ended, and we need to hook up with a parent of the same level and type
        var match = findListMatching(tree[tree.length - 1], block);
        if (match) {
          currentList = match;
          currentList.children.push(block);
          continue;
        }

        // Similar parent can't be found, assume new list
        currentList = listFromBlock(block);
        tree.push(currentList);
        continue;
      }

      // Different list props, different list style?
      if (block.listItem !== currentList.listItem) {
        var _match = findListMatching(tree[tree.length - 1], { level: block.level });
        if (_match && _match.listItem === block.listItem) {
          currentList = _match;
          currentList.children.push(block);
          continue;
        } else {
          currentList = listFromBlock(block);
          tree.push(currentList);
          continue;
        }
      }

      // eslint-disable-next-line no-console
      console.warn('Unknown state encountered for block', block);
      tree.push(block);
    }

    return tree;
  }

  function isListBlock(block) {
    return Boolean(block.listItem);
  }

  function blockMatchesList(block, list) {
    return block.level === list.level && block.listItem === list.listItem;
  }

  function listFromBlock(block) {
    return {
      _type: 'list',
      _key: block._key + '-parent',
      level: block.level,
      listItem: block.listItem,
      children: [block]
    };
  }

  function lastChild(block) {
    return block.children && block.children[block.children.length - 1];
  }

  function findListMatching(rootNode, matching) {
    var filterOnType = typeof matching.listItem === 'string';
    if (rootNode._type === 'list' && rootNode.level === matching.level && filterOnType && rootNode.listItem === matching.listItem) {
      return rootNode;
    }

    var node = lastChild(rootNode);
    if (!node) {
      return false;
    }

    return findListMatching(node, matching);
  }

  var nestLists_1 = nestLists;

  var generateKeys = function (blocks) {
    return blocks.map(function (block) {
      if (block._key) {
        return block;
      }

      return objectAssign({ _key: getStaticKey(block) }, block);
    });
  };

  function getStaticKey(item) {
    return checksum(JSON.stringify(item)).toString(36).replace(/[^A-Za-z0-9]/g, '');
  }

  /* eslint-disable no-bitwise */
  function checksum(str) {
    var hash = 0;
    var strlen = str.length;
    if (strlen === 0) {
      return hash;
    }

    for (var i = 0; i < strlen; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash &= hash; // Convert to 32bit integer
    }

    return hash;
  }

  var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };


  var isDefined = function isDefined(val) {
    return typeof val !== 'undefined';
  };

  // Recursively merge/replace default serializers with user-specified serializers
  var mergeSerializers = function mergeSerializers(defaultSerializers, userSerializers) {
    return Object.keys(defaultSerializers).reduce(function (acc, key) {
      var type = _typeof$1(defaultSerializers[key]);
      if (type === 'function') {
        acc[key] = isDefined(userSerializers[key]) ? userSerializers[key] : defaultSerializers[key];
      } else if (type === 'object') {
        acc[key] = objectAssign({}, defaultSerializers[key], userSerializers[key]);
      } else {
        acc[key] = typeof userSerializers[key] === 'undefined' ? defaultSerializers[key] : userSerializers[key];
      }
      return acc;
    }, {});
  };

  // Properties to extract from props and pass to serializers as options
  var optionProps = ['projectId', 'dataset', 'imageOptions'];
  var isDefined$1 = function isDefined(val) {
    return typeof val !== 'undefined';
  };
  var defaults$1 = { imageOptions: {} };

  function blocksToNodes(h, properties, defaultSerializers, serializeSpan) {
    var props = objectAssign({}, defaults$1, properties);
    var rawBlocks = Array.isArray(props.blocks) ? props.blocks : [props.blocks];
    var keyedBlocks = generateKeys(rawBlocks);
    var blocks = nestLists_1(keyedBlocks, props.listNestMode);
    var serializers = mergeSerializers(defaultSerializers, props.serializers || {});

    var options = optionProps.reduce(function (opts, key) {
      var value = props[key];
      if (isDefined$1(value)) {
        opts[key] = value;
      }
      return opts;
    }, {});

    function serializeNode(node, index, siblings, isInline) {
      if (isList(node)) {
        return serializeList(node);
      }

      if (isListItem(node)) {
        return serializeListItem(node, findListItemIndex(node, siblings));
      }

      if (isSpan(node)) {
        return serializeSpan(node, serializers, index, { serializeNode: serializeNode });
      }

      return serializeBlock(node, index, isInline);
    }

    function findListItemIndex(node, siblings) {
      var index = 0;
      for (var i = 0; i < siblings.length; i++) {
        if (siblings[i] === node) {
          return index;
        }

        if (!isListItem(siblings[i])) {
          continue;
        }

        index++;
      }

      return index;
    }

    function serializeBlock(block, index, isInline) {
      var tree = buildMarksTree_1(block);
      var children = tree.map(function (node, i, siblings) {
        return serializeNode(node, i, siblings, true);
      });
      var blockProps = {
        key: block._key || 'block-' + index,
        node: block,
        isInline: isInline,
        serializers: serializers,
        options: options
      };

      return h(serializers.block, blockProps, children);
    }

    function serializeListItem(block, index) {
      var key = block._key;
      var tree = buildMarksTree_1(block);
      var children = tree.map(serializeNode);
      return h(serializers.listItem, { node: block, serializers: serializers, index: index, key: key, options: options }, children);
    }

    function serializeList(list) {
      var type = list.listItem;
      var level = list.level;
      var key = list._key;
      var children = list.children.map(serializeNode);
      return h(serializers.list, { key: key, level: level, type: type, options: options }, children);
    }

    // Default to false, so `undefined` will evaluate to the default here
    var renderContainerOnSingleChild = Boolean(props.renderContainerOnSingleChild);

    var nodes = blocks.map(serializeNode);
    if (renderContainerOnSingleChild || nodes.length > 1) {
      var containerProps = props.className ? { className: props.className } : {};
      return h(serializers.container, containerProps, nodes);
    }

    if (nodes[0]) {
      return nodes[0];
    }

    return typeof serializers.empty === 'function' ? h(serializers.empty) : serializers.empty;
  }

  function isList(block) {
    return block._type === 'list' && block.listItem;
  }

  function isListItem(block) {
    return block._type === 'block' && block.listItem;
  }

  function isSpan(block) {
    return typeof block === 'string' || block.marks || block._type === 'span';
  }

  var blocksToNodes_1 = blocksToNodes;

  var serializers = function (h, serializerOpts) {
    var serializeOptions = serializerOpts || { useDashedStyles: false

      // Low-level block serializer
    };function BlockSerializer(props) {
      var node = props.node,
          serializers = props.serializers,
          options = props.options,
          isInline = props.isInline,
          children = props.children;

      var blockType = node._type;
      var serializer = serializers.types[blockType];
      if (!serializer) {
        throw new Error('Unknown block type "' + blockType + '", please specify a serializer for it in the `serializers.types` prop');
      }

      return h(serializer, { node: node, options: options, isInline: isInline }, children);
    }

    // Low-level span serializer
    function SpanSerializer(props) {
      var _props$node = props.node,
          mark = _props$node.mark,
          children = _props$node.children;

      var isPlain = typeof mark === 'string';
      var markType = isPlain ? mark : mark._type;
      var serializer = props.serializers.marks[markType];
      if (!serializer) {
        // @todo Revert back to throwing errors?
        // eslint-disable-next-line no-console
        console.warn('Unknown mark type "' + markType + '", please specify a serializer for it in the `serializers.marks` prop');
        return h(props.serializers.markFallback, null, children);
      }

      return h(serializer, props.node, children);
    }

    // Low-level list serializer
    function ListSerializer(props) {
      var tag = props.type === 'bullet' ? 'ul' : 'ol';
      return h(tag, null, props.children);
    }

    // Low-level list item serializer
    function ListItemSerializer(props) {
      var children = !props.node.style || props.node.style === 'normal' ? // Don't wrap plain text in paragraphs inside of a list item
      props.children : // But wrap any other style in whatever the block serializer says to use
      h(props.serializers.types.block, props, props.children);

      return h('li', null, children);
    }

    // Renderer of an actual block of type `block`. Confusing, we know.
    function BlockTypeSerializer(props) {
      var style = props.node.style || 'normal';

      if (/^h\d/.test(style)) {
        return h(style, null, props.children);
      }

      return style === 'blockquote' ? h('blockquote', null, props.children) : h('p', null, props.children);
    }

    // Serializers for things that can be directly attributed to a tag without any props
    // We use partial application to do this, passing the tag name as the first argument
    function RawMarkSerializer(tag, props) {
      return h(tag, null, props.children);
    }

    function UnderlineSerializer(props) {
      var style = serializeOptions.useDashedStyles ? { 'text-decoration': 'underline' } : { textDecoration: 'underline' };

      return h('span', { style: style }, props.children);
    }

    function StrikeThroughSerializer(props) {
      return h('del', null, props.children);
    }

    function LinkSerializer(props) {
      return h('a', { href: props.mark.href }, props.children);
    }

    function ImageSerializer(props) {
      if (!props.node.asset) {
        return null;
      }

      var img = h('img', { src: getImageUrl(props) });
      return props.isInline ? img : h('figure', null, img);
    }

    // Serializer that recursively calls itself, producing a hyperscript tree of spans
    function serializeSpan(span, serializers, index, options) {
      if (span === '\n' && serializers.hardBreak) {
        return h(serializers.hardBreak, { key: 'hb-' + index });
      }

      if (typeof span === 'string') {
        return serializers.text ? h(serializers.text, { key: 'text-' + index }, span) : span;
      }

      var children = void 0;
      if (span.children) {
        children = {
          children: span.children.map(function (child, i) {
            return options.serializeNode(child, i, span.children, true);
          })
        };
      }

      var serializedNode = objectAssign({}, span, children);

      return h(serializers.span, {
        key: span._key || 'span-' + index,
        node: serializedNode,
        serializers: serializers
      });
    }

    var HardBreakSerializer = function HardBreakSerializer() {
      return h('br');
    };
    var defaultMarkSerializers = {
      strong: RawMarkSerializer.bind(null, 'strong'),
      em: RawMarkSerializer.bind(null, 'em'),
      code: RawMarkSerializer.bind(null, 'code'),
      underline: UnderlineSerializer,
      'strike-through': StrikeThroughSerializer,
      link: LinkSerializer
    };

    var defaultSerializers = {
      // Common overrides
      types: {
        block: BlockTypeSerializer,
        image: ImageSerializer
      },
      marks: defaultMarkSerializers,

      // Less common overrides
      list: ListSerializer,
      listItem: ListItemSerializer,

      block: BlockSerializer,
      span: SpanSerializer,
      hardBreak: HardBreakSerializer,

      // Container element
      container: 'div',

      // When we can't resolve the mark properly, use this renderer as the container
      markFallback: 'span',

      // Allow overriding text renderer, but leave undefined to just use plain strings by default
      text: undefined,

      // Empty nodes (React uses null, hyperscript with empty strings)
      empty: ''
    };

    return {
      defaultSerializers: defaultSerializers,
      serializeSpan: serializeSpan
    };
  };

  var renderNode = function renderNode(serializer, properties, children) {
    var props = properties || {};
    if (typeof serializer === 'function') {
      return serializer(objectAssign({}, props, { children: children }));
    }

    var tag = serializer;
    var childNodes = props.children || children;
    return hyperscript(tag, props, childNodes);
  };

  var _getSerializers = serializers(renderNode, { useDashedStyles: true }),
      defaultSerializers = _getSerializers.defaultSerializers,
      serializeSpan = _getSerializers.serializeSpan;

  var blockContentToHyperscript = function blockContentToHyperscript(options) {
    return blocksToNodes_1(renderNode, options, defaultSerializers, serializeSpan);
  };

  // Expose default serializers to the user
  blockContentToHyperscript.defaultSerializers = defaultSerializers;

  // Expose logic for building image URLs from an image reference/node
  blockContentToHyperscript.getImageUrl = getImageUrl;

  // Expose node renderer
  blockContentToHyperscript.renderNode = renderNode;

  var lib$1 = blockContentToHyperscript;

  var h = lib$1.renderNode;
  var blocksToHtml = function blocksToHtml(options) {
    var rootNode = lib$1(options);
    return rootNode.outerHTML || rootNode;
  };

  blocksToHtml.defaultSerializers = lib$1.defaultSerializers;
  blocksToHtml.getImageUrl = lib$1.getImageUrl;
  blocksToHtml.renderNode = h;
  blocksToHtml.h = h;

  var blocksToHtml_1 = blocksToHtml;

  var map$c = es.map,
      pipe$3 = es.pipe;

  var bodyToHTML = function bodyToHTML(projectId, dataset) {
    return function (target) {
      target.body = blocksToHtml_1({
        blocks: target.body,
        projectId: projectId,
        dataset: dataset
      });
      return target;
    };
  };

  var query$4 = "*[_type == \"letter\" && publicationDate <= '".concat(new Date().toISOString(), "' ] {\n    \"title\": article->title.ru,\n    \"body\": article->body.ru,\n    \"recipients\": recipients[]->{list},\n    \"id\": _id\n  }");

  var listLetters = function listLetters(sanityProject, sanityStorageName) {
    return fetchFactory_1(sanityProject, sanityStorageName, query$4, pipe$3(map$c(bodyToHTML(sanityProject, sanityStorageName)), map$c(parseRecipients)));
  };

  var pipe$4 = es.pipe,
      map$d = es.map;
  var query$5 = "*[(_type == \"product\" || _type == \"article\") && (title.ru match \"*_QUERY_*\" || title.en match \"*_QUERY_*\")] {\n    title,\n    \"type\": _type,\n    slug\n  }[0...10]";
  var transform$1 = pipe$4(map$d(unnestSlug));

  var search = function search(sanityProject, sanityStorageName) {
    return function (searchRequest) {
      return fetchFactory_1(sanityProject, sanityStorageName, query$5.replace(/_QUERY_/g, searchRequest), transform$1)();
    };
  };

  var contains$2 = es.contains,
      merge$1 = es.merge,
      prop$3 = es.prop,
      omit$1 = es.omit,
      map$e = es.map,
      partial$1 = es.partial;
  var supportedLangs = ['ru', 'en'];
  var defaultLang = 'ru';

  function hasLocalizableType(field) {
    return !!field['_type'] && /locale\w+/.test(field['_type']);
  }

  function localizeObject(lang, target) {
    var localizedFields = {};
    if (!contains$2(lang, supportedLangs)) throw new Error("Unsupported language \"".concat(lang, "\""));

    var _arr = Object.keys(target);

    for (var _i = 0; _i < _arr.length; _i++) {
      var key = _arr[_i];
      var field = prop$3(key, target);
      if (hasLocalizableType(field)) localizedFields[key] = prop$3(lang, field) || prop$3(defaultLang, field);
    }

    return merge$1(omit$1(['localize'], target), localizedFields);
  }

  var l18n = function l18n() {
    var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ru';
    var target = arguments.length > 1 ? arguments[1] : undefined;
    return Array.isArray(target) ? map$e(partial$1(localizeObject, [lang]), target) : localizeObject(lang, target);
  };

  var nonstandardAdsCatalogueClient = {
    createClient: function createClient(sanityProject, sanityStorageName) {
      return {
        listProducts: listProducts(sanityProject, sanityStorageName),
        listBusinessGoals: listBusinessGoals(sanityProject, sanityStorageName),
        listPads: listPads(sanityProject, sanityStorageName),
        listArticles: listArticles(sanityProject, sanityStorageName),
        listLetters: listLetters(sanityProject, sanityStorageName),
        search: search(sanityProject, sanityStorageName)
      };
    },
    localize: l18n
  };
  var nonstandardAdsCatalogueClient_1 = nonstandardAdsCatalogueClient.createClient;
  var nonstandardAdsCatalogueClient_2 = nonstandardAdsCatalogueClient.localize;

  exports.default = nonstandardAdsCatalogueClient;
  exports.createClient = nonstandardAdsCatalogueClient_1;
  exports.localize = nonstandardAdsCatalogueClient_2;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
