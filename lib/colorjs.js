'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _algorithm = require('./algorithm.js');

var colorjs = function colorjs(params, formatValue) {
  var match = params.match(/^#(\S{2})(\S{2})(\S{2})$/);
  console.log('match <===========================>', match);
  var color = {
    colorHex: '',
    r: (0, _algorithm.convertDecimal)('0x' + match[1]),
    g: (0, _algorithm.convertDecimal)('0x' + match[2]),
    b: (0, _algorithm.convertDecimal)('0x' + match[3])
  };
  return _extends({}, color);
};

exports.default = colorjs;