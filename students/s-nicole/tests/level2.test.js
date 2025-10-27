const {generateEvenNumbers, checkNumber, isInRange} = require('../src/level2');

test('generateEvenNumbers genera numeros pares hasta n', () =>{
  expect(generateEvenNumbers(7)).toEqual([0,2,4,6]);
  expect(generateEvenNumbers(13)).toEqual([0,2,4,6,8,10,12]);
});

test('checkNumber identifica el signo del numero', () =>{
  expect(checkNumber(10)).toBe('positivo');
  expect(checkNumber(-5)).toBe('negativo');
});

test('isInRange valida si número está en rango', () => {
  expect(isInRange(5, 1, 10)).toBe(true);
  expect(isInRange(0, 1, 10)).toBe(false);
});
