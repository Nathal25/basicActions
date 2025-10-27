// returns the sum of odd numbers in an array
function sumOddNumbers(array) {
  if (!Array.isArray(array)) return 0;
  return array.filter(n => n % 2 !== 0).reduce((a, b) => a + b, 0);
}

// removes all vowels from a string
function removeVowels(text) {
  if (!text) return '';
  return text.replace(/[aeiou]/gi, '');
}


module.exports = { sumOddNumbers, removeVowels};
