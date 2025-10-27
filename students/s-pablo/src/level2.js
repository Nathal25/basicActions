/**
 * Returns an array with unique elements (removes duplicates).
 * @param {Array} arr
 * @returns {Array}
 */
function uniqueElements(arr) {
  if (!Array.isArray(arr)) return [];
  return [...new Set(arr)];
}

/**
 * Returns a string with alternating uppercase/lowercase letters.
 * @param {string} text
 * @returns {string}
 */
function capitalizeAlternating(text) {
  if (typeof text !== 'string') return '';
  return text
    .split('')
    .map((ch, i) => (i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
    .join('');
}

/**
 * Finds the key with the maximum numeric value in an object.
 * @param {Object} obj
 * @returns {string|null}
 */
function findMaxObjectKey(obj) {
  if (typeof obj !== 'object' || obj === null) return null;
  let maxKey = null;
  let maxValue = -Infinity;
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'number' && value > maxValue) {
      maxValue = value;
      maxKey = key;
    }
  }
  return maxKey;
}

module.exports = { uniqueElements, capitalizeAlternating, findMaxObjectKey };
