const prompt = require('prompt-sync')();

function calcularMedia(contador, somaValores) {
    return (somaValores / contador).toFixed(2);
}

let contador = 0;
let soma = 0;
let valor = null

while (valor != 0) {
    valor = Number(prompt("Digite um valor (0 para finalizar): "));
    soma += valor;
    if (valor != 0) {
        contador++;
    }
}

console.log(`\nA media dos valores é ${calcularMedia(contador, soma)}`)
