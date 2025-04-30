const prompt = require('prompt-sync')();

function soma() {
    let contador = 0;
    let soma = 0;

    while(contador < 5) {
        soma += Number(prompt(`Número ${contador + 1}: `));
        contador++;
    }

    return `\nA soma dos valores é: ${soma}`;
}

console.log(soma());