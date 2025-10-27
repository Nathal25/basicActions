const { capitalizeWords, reverseString, minInArray } = require('../src/level1');

describe('Level 1 – Basic Functions', () => {
  // -----------------------------
  test('capitalizeWords: Se debe escribir con mayuscula la primera letra de cada palabra', () => {
    expect(capitalizeWords('hola mundo')).toBe('Hola Mundo');
    expect(capitalizeWords('MULTIPLES   ESPACIOS')).toBe('Multiples Espacios');
    expect(capitalizeWords('')).toBe('');
    expect(capitalizeWords(123)).toBe('');
  });

  // -----------------------------
  test('reverseString: Debe invertir una cadena', () => {
    expect(reverseString('hola')).toBe('aloh');
    expect(reverseString('abc')).toBe('cba');
    expect(reverseString('')).toBe('');
    expect(reverseString(123)).toBeNull();
  });

  // -----------------------------
  test('minInArray: debe devolver el número más pequeño en un array', () => {
    expect(minInArray([5, 2, 9, 1])).toBe(1);
    expect(minInArray([10, 20, 30])).toBe(10);
    expect(minInArray([-5, -10, 0])).toBe(-10);
    expect(minInArray(['a', 2, 3])).toBeNull();
    expect(minInArray('not an array')).toBeNull();
  });
});
