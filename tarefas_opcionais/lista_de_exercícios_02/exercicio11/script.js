const prompt = require('prompt-sync')();

function calcularPA(primeiroTermo, razao) {
    let contador = 1;
    let acc = primeiroTermo;
    const PA = [];   

    PA.push(acc)
    while(contador < 10) {
        acc += razao;        
        PA.push(acc)
        contador++;
    }

    let soma = PA.reduce((acc, valor) => acc + valor);

    return {PA, soma};
}

const primeiroTermo = parseInt(prompt("Informe o primeiro termo: "));
const razao = parseInt(prompt("Informe a razão: "));

const {PA, soma} = calcularPA(primeiroTermo, razao);

console.table(PA);
console.log(`A soma dos valores da PA é ${soma}.`)