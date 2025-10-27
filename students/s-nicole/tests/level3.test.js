const {countPrimes, minMax, decimalToBinary} = require('../src/level3');

test('countPrimes cuenta números primos en un array', () => {
  expect(countPrimes([1,2,3,4,5,6])).toBe(3);
});

test('minMax encuentra máximo y mínimo', () => {
  expect(minMax([1,5,3,9,2])).toEqual({max:9, min:1});
  expect(minMax([])).toBeNull();
});

test('decimalToBinary convierte decimal a binario', () => {
  expect(decimalToBinary(10)).toBe('1010');
  expect(decimalToBinary(0)).toBe('0');
});
