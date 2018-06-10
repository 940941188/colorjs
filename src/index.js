import colorLib from './colorjs';

(function (colorjs) {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = colorjs;
  } else if (typeof define === 'function' && define.amd) {
    define(['color_js'], colorjs);
  } else {
    colorjs();
  }

})(function (params, type) {
  return colorLib(params, type);  
});