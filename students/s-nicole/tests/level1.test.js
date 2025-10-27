const { isEven, wordLength, reverseArray } = require('../src/level1');

test('isEven retorna true si el número es par', () => {
  expect(isEven(4)).toBe(true);
  expect(isEven(13)).toBe(false);
});

test('wordLength devuelve la longitud de una palabra', () => {
  expect(wordLength('hola')).toBe(4);
  expect(wordLength('')).toBe(0);
});

test('reverseArray invierte el array', () => {
  expect(reverseArray([1,2,3])).toEqual([3,2,1]);
  expect(reverseArray([])).toEqual([]);
});
