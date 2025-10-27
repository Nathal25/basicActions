// Checks if an array has any duplicate elements
function hasDuplicate(arr) {
  if (!Array.isArray(arr)) return false;
  const seen = new Set();
  for (const item of arr) {
    if (seen.has(item)) return true;
    seen.add(item);
  }
  return false;
}

// Counts how many vowels are in a given sentence
function countVowels(sentence) {
  if (typeof sentence !== 'string' || sentence.trim() === '') return 0;
  const vowels = 'aeiouáéíóúAEIOUÁÉÍÓÚ';
  return [...sentence].filter(ch => vowels.includes(ch)).length;
}

// Returns the longest word in a sentence
function longestWord(sentence) {
  if (typeof sentence !== 'string' || sentence.trim() === '') return '';
  const words = sentence
    .split(' ')
    .filter(w => w.trim() !== '');
  return words.reduce((longest, current) =>
    current.length > longest.length ? current : longest
  , '');
}

module.exports = { hasDuplicate, countVowels, longestWord };
