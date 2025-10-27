// level3.test.js
const { deepClone, sumNestedNumbers, findPaths } = require('../src/level3');

// Tests para deepClone
describe('deepClone', () => {
  test('debe clonar objetos anidados sin mantener referencia', () => {
    const original = { a: 1, b: { c: 2 } };
    const copia = deepClone(original);
    copia.b.c = 99;
    expect(original.b.c).toBe(2);
  });

  test('debe clonar arreglos anidados', () => {
    const arr = [1, [2, [3]]];
    const copia = deepClone(arr);
    copia[1][1][0] = 100;
    expect(arr[1][1][0]).toBe(3);
  });
});

// Tests para sumNestedNumbers
describe('sumNestedNumbers', () => {
  test('debe sumar todos los números en una estructura anidada', () => {
    const data = [1, [2, { a: 3, b: [4, 5] }]];
    expect(sumNestedNumbers(data)).toBe(15);
  });

  test('debe retornar 0 si no hay números', () => {
    expect(sumNestedNumbers({ a: 'hola', b: [true, null] })).toBe(0);
  });
});

// Tests para findPaths
describe('findPaths', () => {
  const obj = {
    a: { b: { c: 5 }, d: 5 },
    e: { f: { g: 5 }, h: 8 },
  };

  test('debe encontrar todas las rutas hacia el valor 5', () => {
    const result = findPaths(obj, 5);
    expect(result).toEqual(
      expect.arrayContaining([
        ['a', 'b', 'c'],
        ['a', 'd'],
        ['e', 'f', 'g'],
      ])
    );
  });

  test('debe devolver un arreglo vacío si el valor no existe', () => {
    expect(findPaths(obj, 999)).toEqual([]);
  });
});
