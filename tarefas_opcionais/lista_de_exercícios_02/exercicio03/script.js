const prompt = require('prompt-sync')();

function calcularPassagem(distancia) {
    const valorTotal = (distancia > 200 ? distancia * 0.45 : distancia * 0.50).toFixed(2);
    const valorPorKm = (distancia > 200 ? 0.45 : 0.50).toFixed(2);    

    return [valorTotal, valorPorKm];
}

const distancia = Number(prompt("Digite a distância desejada em Km: "));
const [valorPassagem, valorPorKm] = calcularPassagem(distancia);

console.log(`Valor total: R$ ${valorPassagem}`);
console.log(`Valor por Km: R$ ${valorPorKm}`);