const { calculator, passwordStrength, factorial } = require('../src/level3');

describe('Level 3 – Advanced Functions', () => {
  // -----------------------------
  test('calculator: should perform basic arithmetic operations', () => {
    expect(calculator(10, 5, '+')).toBe(15);
    expect(calculator(10, 5, '-')).toBe(5);
    expect(calculator(10, 5, '*')).toBe(50);
    expect(calculator(10, 5, '/')).toBe(2);
    expect(calculator(10, 0, '/')).toBe('División por cero');
    expect(calculator(10, 5, '%')).toBe('Operación inválida');
    expect(calculator('10', 5, '+')).toBe('Error');
  });

  // -----------------------------
  test('passwordStrength: should evaluate password strength', () => {
    expect(passwordStrength('Abc123!@')).toBe('Muy fuerte');
    expect(passwordStrength('Abc123!')).toBe('Fuerte');
    expect(passwordStrength('Abc123')).toBe('Regular');
    expect(passwordStrength('Abcde')).toBe('Débil');
    expect(passwordStrength('abc')).toBe('Muy débil');
    expect(passwordStrength('')).toBe('Muy débil');
    expect(passwordStrength(123)).toBe('Inválida');
  });

  // -----------------------------
  test('factorial: should calculate factorial of a number', () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
    expect(factorial(3)).toBe(6);
    expect(factorial(-1)).toBe(null);
    expect(factorial('5')).toBe(null);
  });
});
