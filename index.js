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
 * ES6-compliant shim for ToString.
 *
 * Requires ES3 or above.
 *
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-tostring|7.1.12 ToString ( argument )}
 *
 * @version 1.1.1
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module to-string-x
 */

/* eslint strict: 1 */

/* global module */

;(function () { // eslint-disable-line no-extra-semi

  'use strict';

  var isSymbol = require('is-symbol');

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
    if (isSymbol(value)) {
      throw new TypeError('Cannot convert a Symbol value to a string');
    }
    return String(value);
  };
}());
