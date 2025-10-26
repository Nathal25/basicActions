const {sumEvenNumbers, convertVowelsToUpperCase, checkAnagram} = require('../src/level2');

describe('Level 2 – Advanced Functions', () => {
  // -----------------------------
  test('sumEvenNumbers: should return the sum of even numbers in an array', () => {
    expect(sumEvenNumbers([1, 2, 3, 4, 5])).toBe(6);
    expect(sumEvenNumbers([10, 21, 32, 43, 54])).toBe(96);
    expect(sumEvenNumbers([1, 3, 5])).toBe(0);
  });

  // -----------------------------
  test('convertVowelsToUpperCase: should convert all vowels in a string to uppercase', () => {
    expect(convertVowelsToUpperCase('hello')).toBe('hEllO');
    expect(convertVowelsToUpperCase('aabbcc')).toBe('AAbbcc');
    expect(convertVowelsToUpperCase('xyz')).toBe('xyz');
  });

  // -----------------------------
  test('checkAnagram: should return true for anagrams and false otherwise', () => {
    expect(checkAnagram('listen', 'silent')).toBe(true);
    expect(checkAnagram('hello', 'world')).toBe(false);
    expect(checkAnagram('evil', 'vile')).toBe(true);
  });
});
