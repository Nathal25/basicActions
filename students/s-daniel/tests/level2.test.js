const { toTitleCase, fizzBuzz, isIsogram } = require('../src/level2');

describe('Level 2 – Intermediate Functions', () => {
  // -----------------------------
  test('toTitleCase: should convert text to title case', () => {
    expect(toTitleCase('hello world')).toBe('Hello World');
    expect(toTitleCase('javascript is FUN')).toBe('Javascript Is Fun');
    expect(toTitleCase('')).toBe('');
    expect(toTitleCase('a b c')).toBe('A B C');
    expect(toTitleCase(123)).toBe('');
  });

  // -----------------------------
  test('fizzBuzz: should generate FizzBuzz sequence', () => {
    expect(fizzBuzz(5)).toEqual([1, 2, 'Fizz', 4, 'Buzz']);
    expect(fizzBuzz(3)).toEqual([1, 2, 'Fizz']);
    expect(fizzBuzz(15)).toEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']);
    expect(fizzBuzz(0)).toEqual([]);
    expect(fizzBuzz(-5)).toEqual([]);
  });

  // -----------------------------
  test('isIsogram: should return true for words without repeating letters', () => {
    expect(isIsogram('background')).toBe(true);
    expect(isIsogram('hello')).toBe(false);
    expect(isIsogram('isogram')).toBe(true);
    expect(isIsogram('')).toBe(false);
    expect(isIsogram('Aa')).toBe(false);
    expect(isIsogram(123)).toBe(false);
  });
});
