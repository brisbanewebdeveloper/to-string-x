/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/to-string-x"
 * title="Travis status">
 * <img src="https://travis-ci.org/Xotic750/to-string-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/to-string-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/to-string-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a href="https://david-dm.org/Xotic750/to-string-x#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/to-string-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/to-string-x" title="npm version">
 * <img src="https://badge.fury.io/js/to-string-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * ToString module.
 *
 * <h2>ECMAScript compatibility shims for legacy JavaScript engines</h2>
 * `es5-shim.js` monkey-patches a JavaScript context to contain all EcmaScript 5
 * methods that can be faithfully emulated with a legacy JavaScript engine.
 *
 * `es5-sham.js` monkey-patches other ES5 methods as closely as possible.
 * For these methods, as closely as possible to ES5 is not very close.
 * Many of these shams are intended only to allow code to be written to ES5
 * without causing run-time errors in older engines. In many cases,
 * this means that these shams cause many ES5 methods to silently fail.
 * Decide carefully whether this is what you want. Note: es5-sham.js requires
 * es5-shim.js to be able to work properly.
 *
 * `json3.js` monkey-patches the EcmaScript 5 JSON implimentation faithfully.
 *
 * `es6.shim.js` provides compatibility shims so that legacy JavaScript engines
 * behave as closely as possible to ECMAScript 6 (Harmony).
 *
 * @version 1.1.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module to-string-x
 */

/* jslint maxlen:80, es6:true, white:true */

/* jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
   freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
   nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
   es3:false, esnext:true, plusplus:true, maxparams:1, maxdepth:1,
   maxstatements:3, maxcomplexity:2 */

/* eslint strict: 1, max-statements: 1 */

/* global module */

;(function () { // eslint-disable-line no-extra-semi

  'use strict';

  var $String = String;

  /**
   * The abstract operation ToString converts argument to a value of type
   * String.
   *
   * @param {*} value The value to convert to a string.
   * @throws {TypeError} If `value` is a Symbol.
   * @return {string} The converted value.
   * @example
   * var $toString = require('to-string-x');
   *
   * $toString(); // 'undefined'
   * $toString(null); // 'null'
   * $toString('abc'); // 'abc'
   * $toString(true); // 'true'
   * $toString(Symbol('foo')); // TypeError
   * $toString(Symbol.iterator); // TypeError
   * $toString(Object(Symbol.iterator)); // TypeError
   */
  module.exports = function ToString(value) {
    if (typeof value === 'symbol') {
      throw new TypeError('Cannot convert a Symbol value to a string');
    }
    return $String(value);
  };
}());
