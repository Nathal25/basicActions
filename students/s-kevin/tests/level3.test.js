const { factorialRecursiveSk, passwordStrengthSk, detectDuplicatesSk } = require('../src/level3');

describe('Level 3 – Nuevas funciones (s-kevin)', () => {
  test('factorialRecursiveSk: calcula factorial de forma recursiva', () => {
    expect(factorialRecursiveSk(0)).toBe(1);
    expect(factorialRecursiveSk(1)).toBe(1);
    expect(factorialRecursiveSk(5)).toBe(120);
    expect(factorialRecursiveSk(-1)).toBeNull();
    expect(factorialRecursiveSk(3.5)).toBeNull();
  });

  test('passwordStrengthSk: evalúa la fortaleza de contraseñas', () => {
    expect(passwordStrengthSk('Abcdef1!')).toBe('strong');
    expect(passwordStrengthSk('Abc123')).toBe('medium');
    expect(passwordStrengthSk('abc123')).toBe('weak');
    expect(passwordStrengthSk('A1!')).toBe('weak');
    expect(passwordStrengthSk(123)).toBe('weak');
  });

  test('detectDuplicatesSk: detecta duplicados únicos en orden estable', () => {
    expect(detectDuplicatesSk([1, 2, 2, 3, 3, 3, 4])).toEqual([2, 3]);
    expect(detectDuplicatesSk(['a', 'b', 'a', 'c', 'b'])).toEqual(['a', 'b']);
    expect(detectDuplicatesSk([1, 1, 1])).toEqual([1]);
    expect(detectDuplicatesSk([1, 2, 3])).toEqual([]);
    expect(detectDuplicatesSk('no-array')).toEqual([]);
  });
});
