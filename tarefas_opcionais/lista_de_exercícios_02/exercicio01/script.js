const prompt = require('prompt-sync')();

function calcularTempoDeVida(qtdeCigarros, anosFumando) {
    const umDiaEmMinutos = 1440; 
    const tempoPorCigarro = 10;

    const diasPerdidos = ((qtdeCigarros * tempoPorCigarro) / umDiaEmMinutos) * (anosFumando * 365);

    return diasPerdidos;
}

const qtdeCigarros = Number(prompt("Digite a quantidade de cigarros que você fuma diariamente: "));
const anosFumando = Number(prompt("Digite quantos anos você é fumante: "));

const diasPerdidos = calcularTempoDeVida(qtdeCigarros, anosFumando);

console.log(`Você perdeu aproximadamente ${parseInt(diasPerdidos)} dias de vida.`);