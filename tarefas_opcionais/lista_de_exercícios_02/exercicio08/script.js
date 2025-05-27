const prompt = require('prompt-sync')();

function calcularPontos(horas) {
    if(typeof horas !== 'number' || horas < 0) {
        return "Horas inválidas!"
    }

    const valorPonto = 0.05;
    let pontos = 0;

    if(horas <= 10) {
        pontos = horas * 2;
    }
    else if(horas <= 20) {
        pontos = horas * 5;
    } else {
        pontos = horas * 10;
    }

    return {
        pontos,
        total: pontos * valorPonto,
    };
}

const horas = Number(prompt("Informe a quantidade de horas mensais: "));
const infoPontos = calcularPontos(horas);

console.log(`Você acumulou ${infoPontos.pontos} pontos e ganhou R$ ${infoPontos.total.toFixed(2)}.`)