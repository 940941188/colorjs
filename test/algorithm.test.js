/* global test expect */
const {
  convertHex,
  convertDecimal,
} = require('../src/algorithm.js');

test('convertDecimal', () => {
  expect(convertDecimal('ff')).toBe(255);
});


test('convertHex', () => {
  expect(convertHex(255)).toBe('ff');
});
