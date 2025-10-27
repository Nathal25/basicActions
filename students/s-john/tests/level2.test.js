const { sumOddNumbers, removeVowels } = require('../src/level2');

describe('s-john Level 2', () => {
  test('sumOddNumbers: should sum odd numbers', () => {
    expect(sumOddNumbers([1, 2, 3, 4, 5])).toBe(9);
    expect(sumOddNumbers([2, 4, 6])).toBe(0);
    expect(sumOddNumbers([])).toBe(0);
  });

  test('removeVowels: should remove all vowels from a string', () => {
    expect(removeVowels('hello')).toBe('hll');
    expect(removeVowels('AEIOUaeiou')).toBe('');
    expect(removeVowels('xyz')).toBe('xyz');
  });

  test('edge cases for sumOddNumbers and removeVowels', () => {
    // sumOddNumbers: non-array inputs -> 0
    expect(sumOddNumbers(null)).toBe(0);
    expect(sumOddNumbers(undefined)).toBe(0);
    expect(sumOddNumbers('not an array')).toBe(0);

    // sumOddNumbers: negative and float values
    expect(sumOddNumbers([ -1, -2, -3 ])).toBe(-4); // -1 + -3 = -4
    // In JS the remainder operator treats floats such that 1.5%2 and 2.5%2 are non-zero,
    // so both 1.5 and 2.5 are included by the filter and the expected sum is 7
    expect(sumOddNumbers([1.5, 2.5, 3])).toBe(7); // 1.5 + 2.5 + 3 = 7

    // removeVowels: falsy and non-string values
    expect(removeVowels('')).toBe('');
    expect(removeVowels(null)).toBe('');
    expect(removeVowels(undefined)).toBe('');
    // numbers become '', since function expects text and returns '' for falsy non-strings
    expect(removeVowels(0)).toBe('');
  });
});
