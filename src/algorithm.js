export const convertHex = (num, base = 10) => {
  const decimal = parseInt(num, base);
  return decimal.toString(16);
};

export const convertDecimal = (hex, base = 16) => parseInt(hex, base);
