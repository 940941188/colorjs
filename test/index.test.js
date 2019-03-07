/* global test expect describe */
const colorjs = require('../src/index.js');

describe('colorjs Integration Testing', () => {
  const white = colorjs('#ffffff', 'rgbHex');
  // const black = colorjs({ r: 0, b: 0, g: 0 }, 'rgb');

  test('test rgbHex white color', () => {
    expect(white.colorHex).toBe('#ffffff');
  });

  // test('test rgb black color', () => {
  //   expect(black.colorHex).toBe('#000000');
  // });

  test('white format rgb', () => {
    const target = {
      r: 255,
      b: 255,
      g: 255,
    };
    expect(white.format('rgb')).toMatchObject(target);
  });

  test('white format rgbHex', () => {
    expect(white.format('rgbHex')).toBe('#ffffff');
  });

  // test('black format rgb', () => {
  //   const target = {
  //     r: 255,
  //     b: 255,
  //     g: 255,
  //   };
  //   expect(black.format('rgb')).toMatchObject(target);
  // });

  // test('black format rgbHex', () => {
  //   expect(black.format('rgbHex')).toBe('#ffffff');
  // });
  // test can you see
});
