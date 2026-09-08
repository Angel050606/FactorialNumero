function factorialFor(n) {
    if (n < 0) return "El factorial no está definido para números negativos";

    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }

    return resultado;
}

// Ejemplo de uso:
console.log(factorialFor(5)); // Resultado: 120
console.log(factorialFor(20)); // Resultado: 120


