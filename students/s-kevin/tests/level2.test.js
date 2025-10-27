const { toTitleCaseSk, fizzBuzzSk, isIsogramSk } = require('../src/level2');

describe('Level 2 – Nuevas funciones (s-kevin)', () => {
  test('toTitleCaseSk: convierte a Title Case y normaliza espacios', () => {
    expect(toTitleCaseSk('hello world')).toBe('Hello World');
    expect(toTitleCaseSk('  multiple   spaces here  ')).toBe('Multiple Spaces Here');
    expect(toTitleCaseSk('JAVAscript is FUN')).toBe('Javascript Is Fun');
    expect(toTitleCaseSk(123)).toBe('');
  });

  test('fizzBuzzSk: genera la secuencia correcta hasta n', () => {
    expect(fizzBuzzSk(15)).toEqual([
      1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz'
    ]);
    expect(fizzBuzzSk(0)).toEqual([]);
    expect(fizzBuzzSk('10')).toEqual([]);
  });

  test('isIsogramSk: detecta isogramas (case-insensitive)', () => {
    expect(isIsogramSk('lumberjacks')).toBe(true);
    expect(isIsogramSk('background')).toBe(true);
    expect(isIsogramSk('aba')).toBe(false);
    expect(isIsogramSk('Alphabet')).toBe(false);
  });
});
