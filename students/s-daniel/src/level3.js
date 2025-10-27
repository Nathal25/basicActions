// Function 1 - Calculadora básica con operaciones aritméticas
function calculator(a, b, op) {
  if (typeof a !== 'number' || typeof b !== 'number') return 'Error';
  switch (op) { case '+': return a + b; case '-': return a - b; case '*': return a * b; case '/': return b !== 0 ? a / b : 'División por cero'; default: return 'Operación inválida';
  }
}

// Function 2 - Evaluar fortaleza de contraseña basada en criterios
function passwordStrength(password) {
  if (typeof password !== 'string') return 'Inválida';
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  return ['Muy débil', 'Débil', 'Regular', 'Fuerte', 'Muy fuerte'][score - 1] || 'Muy débil';
}

// Function 3 - Calcular factorial de un número (recursivo)
function factorial(n) {
  if (typeof n !== 'number' || n < 0) return null;
  return n <= 1 ? 1 : n * factorial(n - 1);
}

// Exportar todas las funciones
module.exports = { calculator, passwordStrength, factorial };
