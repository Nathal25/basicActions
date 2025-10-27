// Calculates the n-th Fibonacci number recursively
function fibonacci(n) {
  if (typeof n !== 'number' || !Number.isInteger(n) || n < 0) return null;
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Returns the sum of all even numbers in an array
function sumEvenNumbers(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) return 0;
  if (!numbers.every(n => typeof n === 'number')) return 0;

  return numbers.reduce((sum, n) => (n % 2 === 0 ? sum + n : sum), 0);
}

// Checks password strength based on length and character variety
function checkPassword(password) {
  if (typeof password !== 'string') return 'invalid';

  const length = password.length;
  const tests = [
    /[A-Z]/.test(password),
    /[a-z]/.test(password),
    /[0-9]/.test(password),
    /[^A-Za-z0-9]/.test(password)
  ];
  const score = tests.filter(Boolean).length;

  if (length < 6) return 'weak';
  if (score === 4 && length >= 10) return 'strong';
  return score >= 2 ? 'medium' : 'weak';
}

module.exports = { fibonacci, sumEvenNumbers, checkPassword };
