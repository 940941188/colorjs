"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var convertHex = exports.convertHex = function convertHex(num) {
  var decimal = parseInt(num, 10);
  return decimal.toSring(16);
};

var convertDecimal = exports.convertDecimal = function convertDecimal(hex) {
  return parseInt(hex);
};