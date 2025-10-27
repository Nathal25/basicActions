const { reverseWords, countVowels, average } = require('../src/level1');

describe('Level 1 Functions', () => {
  test('reverseWords should reverse the order of words', () => {
    expect(reverseWords('hola mundo cruel')).toBe('cruel mundo hola');
  });

  test('reverseWords should handle empty or invalid input', () => {
    expect(reverseWords(123)).toBe('');
    expect(reverseWords('')).toBe('');
  });

  test('countVowels should count vowels correctly', () => {
    expect(countVowels('Programar es genial')).toBe(7);
    expect(countVowels('xyz')).toBe(0);
  });

  test('average should compute average correctly', () => {
    expect(average([2, 4, 6])).toBe(4);
    expect(average([])).toBe(0);
    expect(average([10, 'a', 20])).toBe(15);
  });
});
