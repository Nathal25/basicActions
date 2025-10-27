// factorial of n (0! = 1). returns null for negative inputs
function factorial(n) {
  if (n < 0) return null;
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
}

// returns an array with unique elements preserving order
function uniqueArray(array) {
  const seen = new Set();
  const out = [];
  for (const item of array) {
    if (!seen.has(item)) {
      seen.add(item);
      out.push(item);
    }
  }
  return out;
}

// merges two arrays and returns a sorted array (ascending)
function mergeSortedArrays(a, b) {
  return a.concat(b).slice().sort((x, y) => x - y);
}

module.exports = { factorial, uniqueArray, mergeSortedArrays };
