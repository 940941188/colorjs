/* global define */
import colorLib from './colorjs';

((function _color(colorjs) {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = colorjs;
  } else if (typeof define === 'function' && define.amd) {
    define(['color_js'], colorjs);
  } else {
    colorjs();
  }
})((params, type) => colorLib(params, type)));
