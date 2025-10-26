const {inverse,mostFrequentLetter,average} = require('../src/level1');

describe('Level 1 – Basic Functions', () => {
  // -----------------------------
  test('inverse: should inverse a string', () => {
    expect(inverse('hello')).toBe('olleh');
    expect(inverse('aabbcc')).toBe('ccbbaa');
    expect(inverse('xyz')).toBe('zyx');
  });
  // -----------------------------
  test('mostFrequentLetter: should return the most frequent letter in a string', () => {
    expect(mostFrequentLetter('hello')).toBe('l');
    expect(mostFrequentLetter('aabbccddeeff')).toBe('f'); // ties go to last
    expect(mostFrequentLetter('xyzxyzxyzx')).toBe('x');
  });

  // -----------------------------
  test('average: should return the average of an array of numbers', () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3);
    expect(average([10, 20, 30])).toBe(20);
    expect(average([5])).toBe(5);
  });
});
