const prompt = require('prompt-sync')();

function calcularMulta(velocidade) {
    const velocidadeMaxima = 80;
    const velocidadeExcedida = velocidade - velocidadeMaxima;
    const multaPorKm = 5

    if(velocidadeExcedida > 0) {
        const multa = velocidadeExcedida * multaPorKm;
        return multa.toFixed(2);
    }

    return 0;
}

const velocidade = Number(prompt("Digite a velocidade do carro: "));
const totalMulta = calcularMulta(velocidade);

console.log(`Velocidade: ${velocidade} Km/h - Multa: R$ ${totalMulta}`);