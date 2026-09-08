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

function generarSerieFactorial(limite) {
    let factorial = 1;
    const serie = [];

    for (let i = 1; i <= limite; i++) {
        factorial *= i;
        serie.push(`${i}! = ${factorial}`);
    }

    return serie;
}

// Ejemplo de uso: visualizar la serie hasta el factorial de 5
const limite = 5;
const resultado = generarSerieFactorial(limite);

console.log(resultado.join("\n"));