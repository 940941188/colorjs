'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /* global define */


var _colorjs = require('./colorjs');

var _colorjs2 = _interopRequireDefault(_colorjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function _color(colorjs) {
  if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && _typeof(module.exports) === 'object') {
    module.exports = colorjs;
  } else if (typeof define === 'function' && define.amd) {
    define(['color_js'], colorjs);
  } else {
    colorjs();
  }
})(function (params, type) {
  return (0, _colorjs2.default)(params, type);
});