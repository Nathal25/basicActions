const { factorial, uniqueArray, mergeSortedArrays } = require('../src/level3');

describe('s-john Level 3', () => {
  test('factorial: should compute factorial correctly', () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(5)).toBe(120);
    expect(factorial(-1)).toBeNull();
  });

  test('uniqueArray: should return unique elements preserving order', () => {
    expect(uniqueArray([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
    expect(uniqueArray([])).toEqual([]);
  });

  test('mergeSortedArrays: should merge and sort arrays', () => {
    expect(mergeSortedArrays([1, 3], [2, 4])).toEqual([1, 2, 3, 4]);
    expect(mergeSortedArrays([], [5])).toEqual([5]);
  });
});
