/**
 * Calcula la mediana de un arreglo de números.
 * - Ignora valores no numéricos o no finitos.
 * - No muta el arreglo original.
 * - Devuelve null si no hay números válidos.
 */
function medianSk(numbers) {
  if (!Array.isArray(numbers)) return null;
  const vals = numbers.filter(n => typeof n === 'number' && Number.isFinite(n)).slice().sort((a, b) => a - b);
  const len = vals.length;
  if (len === 0) return null;
  const mid = Math.floor(len / 2);
  return len % 2 === 1 ? vals[mid] : (vals[mid - 1] + vals[mid]) / 2;
}

/**
 * Suma únicamente los números positivos (> 0) de un arreglo.
 * - Ignora valores no numéricos o no finitos.
 */
function sumPositivesSk(numbers) {
  if (!Array.isArray(numbers)) return 0;
  return numbers.reduce((acc, n) => acc + (typeof n === 'number' && Number.isFinite(n) && n > 0 ? n : 0), 0);
}

/**
 * Devuelve el primer carácter no repetido de un string.
 * - Comparación case-insensitive, pero retorna el carácter en su forma original.
 * - Devuelve null si todos se repiten o la entrada no es string.
 */
function firstNonRepeatingCharSk(text) {
  if (typeof text !== 'string') return null;
  const counts = Object.create(null);
  for (const ch of text) {
    const low = ch.toLowerCase();
    counts[low] = (counts[low] || 0) + 1;
  }
  for (const ch of text) {
    if (counts[ch.toLowerCase()] === 1) return ch;
  }
  return null;
}

module.exports = { medianSk, sumPositivesSk, firstNonRepeatingCharSk };
