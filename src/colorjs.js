import { convertDecimal } from './algorithm';


const colorjs = function _color(params) {
  const match = params.match(/^#(\S{2})(\S{2})(\S{2})$/);
  const color = {
    colorHex: params,
    r: convertDecimal(match[1]),
    g: convertDecimal(match[2]),
    b: convertDecimal(match[3]),
  };
  const format = (type) => {
    switch (type) {
      case 'rgb':
        return {
          r: color.r,
          g: color.g,
          b: color.b,
        };
      case 'rgbHex':
      default:
        return color.colorHex;
    }
  };
  return {
    ...color,
    format,
  };
};

export default colorjs;
