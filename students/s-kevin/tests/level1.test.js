const { medianSk, sumPositivesSk, firstNonRepeatingCharSk } = require('../src/level1');

describe('Level 1 – Nuevas funciones (s-kevin)', () => {
  test('medianSk: calcula la mediana correctamente', () => {
    expect(medianSk([3, 1, 2])).toBe(2);
    expect(medianSk([1, 2, 3, 4])).toBe(2.5);
    expect(medianSk([10, 'x', 2, NaN, 8])).toBe(8);
    expect(medianSk([])).toBeNull();
    expect(medianSk('no-array')).toBeNull();
  });

  test('sumPositivesSk: suma solo positivos y valida entradas', () => {
    expect(sumPositivesSk([1, -2, 3, 0])).toBe(4);
    expect(sumPositivesSk([10, 20, -5, 'a', Infinity])).toBe(30);
    expect(sumPositivesSk([])).toBe(0);
    expect(sumPositivesSk('no-array')).toBe(0);
  });

  test('firstNonRepeatingCharSk: retorna primer carácter no repetido', () => {
    expect(firstNonRepeatingCharSk('stress')).toBe('t');
    expect(firstNonRepeatingCharSk('sTreSS')).toBe('T');
    expect(firstNonRepeatingCharSk('aabbcc')).toBeNull();
    expect(firstNonRepeatingCharSk(12345)).toBeNull();
  });
});
