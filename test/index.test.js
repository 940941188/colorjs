/* global test expect */
const colorjs = require('../src/index.js');

const white = colorjs('#ffffff');

test('format rgb', () => {
  const target = {
    r: 255,
    b: 255,
    g: 255,
  };
  expect(white.format('rgb')).toMatchObject(target);
});

test('format rgbHex', () => {
  expect(white.format('rgbHex')).toBe('#ffffff');
});
