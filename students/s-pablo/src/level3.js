/**
 * Creates a deep copy of an object or array recursively.
 * All nested objects and arrays are cloned without maintaining references to the original.
 * @param {*} value - The value to clone (can be primitive, object, or array).
 * @returns {*} A deep copy of the input value.
 * @example
 * const obj = { a: 1, b: { c: 2 } };
 * const clone = deepClone(obj);
 * clone.b.c = 99;
 * console.log(obj.b.c); // Still 2 (original unchanged)
 */
function deepClone(value) {
  if (value === null || typeof value !== 'object') return value;

  if (Array.isArray(value)) {
    return value.map(deepClone);
  }

  const cloned = {};
  for (const key in value) {
    if (value.hasOwnProperty(key)) {
      cloned[key] = deepClone(value[key]);
    }
  }
  return cloned;
}

/**
 * Recursively sums all numeric values in a nested data structure.
 * Traverses through objects and arrays to find and sum all numbers.
 * @param {*} structure - A value that can be a number, array, object, or any nested combination.
 * @returns {number} The total sum of all numbers found in the structure, or 0 if no numbers exist.
 * @example
 * sumNestedNumbers([1, [2, { a: 3, b: [4, 5] }]]) // Returns: 15
 * sumNestedNumbers({ a: 'hello', b: [true, null] }) // Returns: 0
 */
function sumNestedNumbers(structure) {
  if (typeof structure === 'number') return structure;
  if (Array.isArray(structure)) {
    return structure.reduce((sum, el) => sum + sumNestedNumbers(el), 0);
  }
  if (typeof structure === 'object' && structure !== null) {
    return Object.values(structure).reduce(
      (sum, val) => sum + sumNestedNumbers(val),
      0
    );
  }
  return 0;
}

/**
 * Finds all paths (key sequences) in an object that lead to a specific target value.
 * Recursively searches through nested objects to locate all occurrences of the target.
 * @param {Object} obj - The object to search through.
 * @param {*} target - The value to search for.
 * @param {string[]} [currentPath=[]] - Internal parameter tracking the current path (used for recursion).
 * @returns {Array<string[]>} An array of paths, where each path is an array of keys leading to the target value.
 * @example
 * const obj = { a: { b: { c: 5 }, d: 5 }, e: { f: { g: 5 } } };
 * findPaths(obj, 5) // Returns: [['a', 'b', 'c'], ['a', 'd'], ['e', 'f', 'g']]
 * findPaths(obj, 999) // Returns: []
 */
function findPaths(obj, target, currentPath = []) {
  let paths = [];

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      const newPath = [...currentPath, key];

      if (value === target) {
        paths.push(newPath);
      } else if (typeof value === 'object' && value !== null) {
        paths = paths.concat(findPaths(value, target, newPath));
      }
    }
  }

  return paths;
}

module.exports = { deepClone, sumNestedNumbers, findPaths };