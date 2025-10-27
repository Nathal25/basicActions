/**
 * Factorial recursivo para n entero >= 0. Devuelve null si la entrada no es válida.
 */
function factorialRecursiveSk(n) {
  if (typeof n !== 'number' || !Number.isInteger(n) || n < 0) return null;
  if (n === 0 || n === 1) return 1;
  return n * factorialRecursiveSk(n - 1);
}

/**
 * Evalúa la fortaleza de una contraseña: 'weak' | 'medium' | 'strong'.
 * Criterios:
 * - strong: longitud >= 8 y contiene minúscula, mayúscula, dígito y símbolo.
 * - medium: longitud >= 6 y cumple al menos 3 de las 4 categorías.
 * - weak: en otro caso.
 */
function passwordStrengthSk(pw) {
  if (typeof pw !== 'string') return 'weak';
  const hasLower = /[a-z]/.test(pw);
  const hasUpper = /[A-Z]/.test(pw);
  const hasDigit = /\d/.test(pw);
  const hasSymbol = /[^A-Za-z0-9]/.test(pw);
  const categories = [hasLower, hasUpper, hasDigit, hasSymbol].filter(Boolean).length;
  if (pw.length >= 8 && categories === 4) return 'strong';
  if (pw.length >= 6 && categories >= 3) return 'medium';
  return 'weak';
}

/**
 * Detecta duplicados en un arreglo y devuelve un arreglo con los valores duplicados únicos,
 * en el orden en que se detectó su primera duplicación.
 */
function detectDuplicatesSk(array) {
  if (!Array.isArray(array)) return [];
  const seen = new Map(); // valor -> count
  const result = [];
  const added = new Set();
  for (const val of array) {
    const count = (seen.get(val) || 0) + 1;
    seen.set(val, count);
    if (count === 2 && !added.has(val)) {
      result.push(val);
      added.add(val);
    }
  }
  return result;
}

module.exports = { factorialRecursiveSk, passwordStrengthSk, detectDuplicatesSk };
