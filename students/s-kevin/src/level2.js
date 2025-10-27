/**
 * Convierte un texto a Title Case: primera letra de cada palabra en mayúscula.
 * - Normaliza espacios múltiples a uno solo y recorta extremos.
 */
function toTitleCaseSk(text) {
  if (typeof text !== 'string') return '';
  return text
    .trim()
    .replace(/\s+/g, ' ')
    .toLowerCase()
    .split(' ')
    .map(w => w[0].toUpperCase() + w.slice(1))
    .join(' ');
}

/**
 * FizzBuzz clásico: devuelve un arreglo desde 1..n con reglas:
 * - "FizzBuzz" si divisible por 15, "Fizz" por 3, "Buzz" por 5, de lo contrario el número.
 */
function fizzBuzzSk(n) {
  if (typeof n !== 'number' || !Number.isInteger(n) || n < 1) return [];
  const out = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) out.push('FizzBuzz');
    else if (i % 3 === 0) out.push('Fizz');
    else if (i % 5 === 0) out.push('Buzz');
    else out.push(i);
  }
  return out;
}

/**
 * Determina si una palabra es un isograma (sin letras repetidas), case-insensitive.
 */
function isIsogramSk(text) {
  if (typeof text !== 'string') return false;
  const seen = new Set();
  for (const ch of text.toLowerCase()) {
    if (!/[a-z]/.test(ch)) continue; // ignorar no letras
    if (seen.has(ch)) return false;
    seen.add(ch);
  }
  return true;
}

module.exports = { toTitleCaseSk, fizzBuzzSk, isIsogramSk };
