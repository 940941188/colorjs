"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var convertHex = exports.convertHex = function convertHex(num) {
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

  var decimal = parseInt(num, base);
  return decimal.toString(16);
};

var convertDecimal = exports.convertDecimal = function convertDecimal(hex) {
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;
  return parseInt(hex, base);
};