const { capitalizeWords, countVowels, reverseWords } = require('../src/level1');

describe('s-john Level 1', () => {
  test('capitalizeWords: should capitalize the first letter of each word', () => {
    expect(capitalizeWords('hello world')).toBe('Hello World');
    expect(capitalizeWords('a b c')).toBe('A B C');
    expect(capitalizeWords('')).toBe('');
  });

  test('countVowels: should count vowels correctly', () => {
    expect(countVowels('hello')).toBe(2);
    expect(countVowels('AEIOU')).toBe(5);
    expect(countVowels('xyz')).toBe(0);
  });

  test('reverseWords: should reverse each word but keep word order', () => {
    expect(reverseWords('hello world')).toBe('olleh dlrow');
    expect(reverseWords('a b')).toBe('a b');
    expect(reverseWords('')).toBe('');
  });
});
