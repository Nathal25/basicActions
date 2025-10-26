const {fibonacci, orderedArray, longestCommonSubsequence} = require('../src/level3');

describe('Level 3 – Advanced Functions', () => {
  // -----------------------------
  test('fibonacci: should return the nth Fibonacci number', () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(5)).toBe(5);
    expect(fibonacci(10)).toBe(55);
  });
  // -----------------------------
  test('orderedArray: should return a new array with elements sorted in ascending order', () => {
    expect(orderedArray([3, 1, 4, 2])).toEqual([1, 2, 3, 4]);
    expect(orderedArray([10, -1, 2, 0])).toEqual([-1, 0, 2, 10]);
    expect(orderedArray([5])).toEqual([5]);
  });

  // -----------------------------
  test('longestCommonSubsequence: should return the common subsequence between two strings', () => {
    expect(longestCommonSubsequence('abcdef', 'acdf')).toBe('acdf');
    expect(longestCommonSubsequence('AGGTAB', 'GXTXAYB')).toBe('GTAB');
    expect(longestCommonSubsequence('hello', 'world')).toMatch(/^[ol]$/);
  });
});
