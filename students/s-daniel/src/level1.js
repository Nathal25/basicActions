// Function 1 - Verificar palíndromo
function isPalindrome(word) {
  if (typeof word !== 'string') return false;
  const clean = word.toLowerCase().replace(/[^a-z0-9]/g, '');
  // Validar string vacío
  if (clean.length === 0) return false;
  return clean === clean.split('').reverse().join('');
}

// Function 2 - Sumar array
function sumArray(arr) {
  if (!Array.isArray(arr)) return 0;
  return arr.reduce((acc, num) => acc + (typeof num === 'number' ? num : 0), 0);
}

// Function 3 - Contar vocales (incluyendo acentuadas)
function countVowels(sentence) {
  if (typeof sentence !== 'string') return 0;
  const matches = sentence.match(/[aeiouáéíóúü]/gi);
  return matches ? matches.length : 0;
}

module.exports = { isPalindrome, sumArray, countVowels };
