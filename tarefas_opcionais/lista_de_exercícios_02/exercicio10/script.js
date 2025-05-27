const prompt = require('prompt-sync')();

function somarValores(arr) {
    return arr.reduce((acc, valor) => acc + valor);
}

function calcularMedia(arr) {
    const soma = somarValores(arr);
    return (soma / arr.length).toFixed(2);
}

function encontrarMenorValor(arr) {
    return arr.reduce((acc, valor) => valor < acc ? valor : acc, arr[0]);
}

function exibirValoresPares(arr) {
    const pares = arr.filter(valor => valor % 2 === 0);

    return pares.length;
}

const arr = [];
let numero = 0;

do {
    numero = Number(prompt("Digite um valor (0 para sair): "));
    
    if(numero !== 0) {
        arr.push(numero);
    }
} while(numero !== 0);


console.log(`\nSoma dos valores..........: ${somarValores(arr)}`);
console.log(`Menor valor...............: ${encontrarMenorValor(arr)}`);
console.log(`Média dos valores.........: ${calcularMedia(arr)}`);
console.log(`Quantos são pares.........: ${exibirValoresPares(arr)}`);