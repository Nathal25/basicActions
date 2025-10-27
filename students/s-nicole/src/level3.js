// Cuenta cuántos números primos hay en un array
function countPrimes(arr) {
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  return arr.filter(isPrime).length;
}

// Encuentra el valor máximo y mínimo en un array (devuelve objeto {max, min})
function minMax(arr) {
  if (arr.length === 0) return null;
  return {
    max: Math.max(...arr),
    min: Math.min(...arr)
  };
}

// Convierte un número decimal a binario (string)
function decimalToBinary(num) {
  if (num === 0) return '0';
  let binary = '';
  let n = num;
  while (n > 0) {
    binary = (n % 2) + binary;
    n = Math.floor(n / 2);
  }
  return binary;
}

module.exports = { countPrimes, minMax, decimalToBinary};
