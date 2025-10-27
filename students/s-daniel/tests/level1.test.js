const { isPalindrome, sumArray, countVowels } = require('../src/level1');

describe('Level 1 – Basic Functions', () => {
  // -----------------------------
  test('isPalindrome: should return true for palindromes and false otherwise', () => {
    expect(isPalindrome('anilina')).toBe(true);
    expect(isPalindrome('hello')).toBe(false);
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    expect(isPalindrome('')).toBe(false);
    expect(isPalindrome(123)).toBe(false);
  });

  // -----------------------------
  test('sumArray: should return the sum of numbers in an array', () => {
    expect(sumArray([1, 2, 3, 4])).toBe(10);
    expect(sumArray([10, 20, 30])).toBe(60);
    expect(sumArray([1, '2', 3])).toBe(4);
    expect(sumArray([])).toBe(0);
    expect(sumArray('not array')).toBe(0);
  });

  // -----------------------------
  test('countVowels: should count vowels in a string including accented ones', () => {
    expect(countVowels('Hello World')).toBe(3);
    expect(countVowels('Murciélago')).toBe(5);
    expect(countVowels('xyz')).toBe(0);
    expect(countVowels('')).toBe(0);
    expect(countVowels(123)).toBe(0);
  });
});
