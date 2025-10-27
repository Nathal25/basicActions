const { uniqueElements, capitalizeAlternating, findMaxObjectKey } = require('../src/level2');

describe('Level 2 Functions', () => {
  test('uniqueElements should remove duplicates', () => {
    expect(uniqueElements([10, 10, 20, 30, 40, 40])).toEqual([10, 20, 30, 40]);
  });

  test('uniqueElements should handle invalid input', () => {
    expect(uniqueElements('hola')).toEqual([]);
  });

  test('capitalizeAlternating should alternate letters', () => {
    expect(capitalizeAlternating('hola mundo')).toBe('HoLa mUnDo');
  });

  test('findMaxObjectKey should return the key with max value', () => {
    expect(findMaxObjectKey({ a: 5, b: 12, c: 9 })).toBe('b');
  });

  test('findMaxObjectKey should handle empty or invalid input', () => {
    expect(findMaxObjectKey(null)).toBeNull();
    expect(findMaxObjectKey({})).toBeNull();
  });
});
