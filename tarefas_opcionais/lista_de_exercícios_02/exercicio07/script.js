const prompt = require('prompt-sync')();

function exibirInformacoes(aluguel, categoria, dias, km) {
    console.clear();
    console.log(`Categoria......................: ${categoria.toUpperCase()}`);
    console.log(`Diarias........................: ${dias}`);
    console.log(`Quilometros rodados............: ${km}`);
    console.log(`Preço diária...................: R$ ${categoria.toLowerCase() === "popular" ? 90.00 : 150.00}`);
    console.log(`Total por KM...................: R$ ${aluguel.valorPorKm}`);
    console.log(`Total diárias..................: R$ ${aluguel.valorDiarias.toFixed(2)}`);
    console.log(`TOTAL A PAGAR..................: R$ ${aluguel.valorTotal.toFixed(2)}`);
}

function calcularAluguelVeiculo(categoria, dias, km) {
    const valorCarroPopular = 90;
    const valorCarroLuxo = 150;
    let valorTotal = 0;
    let valorDiarias = 0;
    let valorPorKm = 0

    if (categoria.toLowerCase() === "popular") {
        valorDiarias = valorCarroPopular * dias;
        valorPorKm = km <= 100 ? 0.20 * km : 0.10 * km;
        valorTotal = valorDiarias + valorPorKm;
    } else {
        valorDiarias = valorCarroLuxo * dias;
        valorPorKm = km <= 200 ? 0.30 * km : 0.25 * km;
        valorTotal = valorDiarias + valorPorKm;
    }

    return {
        valorDiarias,
        valorPorKm,
        valorTotal
    };
}

const categoria = prompt("Informe a categoria do carro (popular ou luxo): ");
const dias = Number(prompt("Informe a quantidade de dias: "));
const km = Number(prompt("Informe a quantidade de quilometros rodados: "));
const aluguel = calcularAluguelVeiculo(categoria, dias, km);

exibirInformacoes(aluguel, categoria, dias, km);