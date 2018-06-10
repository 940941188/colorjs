import { convertDecimal } from './algorithm';

const colorjs = function _color(params) {
  const match = params.match(/^#(\S{2})(\S{2})(\S{2})$/);
  const color = {
    colorHex: '',
    r: convertDecimal(match[1]),
    g: convertDecimal(match[2]),
    b: convertDecimal(match[3]),
  };
  return {
    ...color,
  };
};

export default colorjs;
