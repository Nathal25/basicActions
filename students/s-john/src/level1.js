function capitalizeWords(text) {
  if (!text) return '';
  return text
    .split(' ')
    .map(w => (w.length ? w[0].toUpperCase() + w.slice(1) : w))
    .join(' ');
}

function countVowels(text) {
  if (!text) return 0;
  const matches = text.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

function reverseWords(text) {
  if (!text) return '';
  return text
    .split(' ')
    .map(w => w.split('').reverse().join(''))
    .join(' ');
}

module.exports = { capitalizeWords, countVowels, reverseWords };
