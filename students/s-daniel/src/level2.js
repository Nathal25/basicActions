// Function 1 - Convertir texto a formato título (primera letra de cada palabra en mayúscula)
function toTitleCase(text) {
  if (typeof text !== 'string') return '';
  return text
    .toLowerCase()
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

// Function 2 - Generar secuencia FizzBuzz hasta el número n
function fizzBuzz(n) {
  if (typeof n !== 'number' || n < 1) return [];
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) result.push('FizzBuzz');
    else if (i % 3 === 0) result.push('Fizz');
    else if (i % 5 === 0) result.push('Buzz');
    else result.push(i);
  }
  return result;
}

// Function 3 - Verificar si una palabra es un isograma (no tiene letras repetidas)
function isIsogram(word) {
  if (typeof word !== 'string') return false;
  const clean = word.toLowerCase().replace(/[^a-z]/g, '');
  // Validar string vacío
  if (clean.length === 0) return false;
  return new Set(clean).size === clean.length;
}

// Exportar todas las funciones
module.exports = { toTitleCase, fizzBuzz, isIsogram };
