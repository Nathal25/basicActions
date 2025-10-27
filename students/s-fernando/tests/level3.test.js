const { fibonacci, sumEvenNumbers, checkPassword } = require('../src/level3');

describe('Level 3 – Algorithms and Metrics', () => {
  // -----------------------------
  test('fibonacci: devuelve el valor de fibonacci', () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(5)).toBe(5);
    expect(fibonacci(7)).toBe(13);
    expect(fibonacci(-1)).toBeNull();
    expect(fibonacci('3')).toBeNull();
  });

  // -----------------------------
  test('sumEvenNumbers: devuelve la suma de los numeros pares en un array', () => {
    expect(sumEvenNumbers([1, 2, 3, 4, 5, 6])).toBe(12); // 2+4+6
    expect(sumEvenNumbers([10, 11, 12, 13])).toBe(22); // 10+12
    expect(sumEvenNumbers([1, 3, 5])).toBe(0);
    expect(sumEvenNumbers([])).toBe(0);
    expect(sumEvenNumbers(['a', 2, 4])).toBe(0);
    expect(sumEvenNumbers('not array')).toBe(0);
  });

  // -----------------------------
  test('checkPassword: clasificar correctamente la fortaleza de la contraseña', () => {
    expect(checkPassword('123')).toBe('weak');
    expect(checkPassword('hello1')).toBe('medium');
    expect(checkPassword('HELLO123')).toBe('medium');
    expect(checkPassword('Hello@1234')).toBe('strong');
    expect(checkPassword('')).toBe('weak');
    expect(checkPassword('aaaaaaaaaaa')).toBe('weak');
    expect(checkPassword(12345)).toBe('invalid');
  });
});
