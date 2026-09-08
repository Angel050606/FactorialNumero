function factorial(n) {
  // Caso base: el factorial de 0 y 1 es 1
  if (n === 0 || n === 1) {
    return 1;
  }
  // Caso recursivo: n * factorial(n - 1)
  return n * factorial(n - 1);
}

// Ejemplo de uso:
console.log(factorial(5)); // Resultado: 120

function factorial2(n) {
  // Caso base: el factorial de 0 y 1 es 1
  if (n === 0 || n === 1) {
    return 1;
  }
  // Caso recursivo: n * factorial(n - 1)
  return n * factorial(n - 1);
}

// Ejemplo de uso:
console.log(factorial2(5)); // Resultado: 120
