/**
 * Reverses the order of words in a sentence.
 * @param {string} sentence
 * @returns {string}
 */
function reverseWords(sentence) {
  if (typeof sentence !== 'string') return '';
  return sentence.trim().split(/\s+/).reverse().join(' ');
}

/**
 * Counts the number of vowels in a text.
 * @param {string} text
 * @returns {number}
 */
function countVowels(text) {
  if (typeof text !== 'string') return 0;
  const matches = text.match(/[aeiouáéíóú]/gi);
  return matches ? matches.length : 0;
}

/**
 * Calculates the average of an array of numbers.
 * @param {number[]} numbers
 * @returns {number}
 */
function average(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) return 0;
  const valid = numbers.filter(n => typeof n === 'number');
  return valid.length ? valid.reduce((a, b) => a + b, 0) / valid.length : 0;
}

module.exports = { reverseWords, countVowels, average };
