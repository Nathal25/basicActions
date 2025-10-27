// This function takes a sentence and returns a new string where each word starts with an uppercase letter.
// If the input is not a valid string or is empty, it returns an empty string ("").
function capitalizeWords(sentence) {
  if (typeof sentence !== 'string' || sentence.trim() === '') return '';

  return sentence
    .split(' ')
    .filter(word => word !== '')
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

// This function takes a string and returns a new string with its characters reversed.
// If the input is not a string, it returns null.
function reverseString(str) {
  if (typeof str !== 'string') return null;
  return str.split('').reverse().join('');
}

// This function takes an array of numbers and returns the smallest number in the array.
// If the input is not a valid array or contains non-numeric values, it returns null.
function minInArray(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) return null;
  if (!numbers.every(n => typeof n === 'number')) return null;

  return Math.min(...numbers);
}

module.exports = { capitalizeWords, reverseString, minInArray };
