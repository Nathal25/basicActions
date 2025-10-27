const { hasDuplicate, countVowels, longestWord } = require('../src/level2');

describe('Level 2 – Logic and Conditions', () => {
  // -----------------------------
  test('hasDuplicate: debe detectar si un array tiene duplicados', () => {
    expect(hasDuplicate([1, 2, 3, 4])).toBe(false);
    expect(hasDuplicate([1, 2, 2, 3])).toBe(true);
    expect(hasDuplicate(['a', 'b', 'a'])).toBe(true);
    expect(hasDuplicate(['x', 'y', 'z'])).toBe(false);
    expect(hasDuplicate([])).toBe(false);
    expect(hasDuplicate('not an array')).toBe(false);
  });

  // -----------------------------
  test('countVowels: contar las vocales en una frase', () => {
    expect(countVowels('hola mundo')).toBe(4);
    expect(countVowels('AEIOU')).toBe(5);
    expect(countVowels('xyz')).toBe(0);
    expect(countVowels('árboles hermosos')).toBe(6);
    expect(countVowels('')).toBe(0);
    expect(countVowels(1234)).toBe(0);
  });

  // -----------------------------
  test('longestWord: devolver la palabra mas larga de una oracion.', () => {
    expect(longestWord('Yo amo programar')).toBe('programar');
    expect(longestWord('corto largo mascorto')).toBe('mascorto');
    expect(longestWord(' uno   dos  tres ')).toBe('tres');
    expect(longestWord(123)).toBe('');
  });
});
