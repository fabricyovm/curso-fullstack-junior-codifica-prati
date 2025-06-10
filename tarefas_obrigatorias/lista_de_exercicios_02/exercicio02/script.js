const prompt = require('prompt-sync')();

function introducao() {
    console.log("Bem-vindo ao jogo 'Acerte o Número'!");
    console.log("Eu vou sortear um número entre 1 e 100, e você precisa adivinhar qual é.\n");

    prompt("Pressione qualquer tecla para começar...");
}

function sortearNumero() {
    return Math.floor(Math.random() * 100) + 1;
}

function jogar(numeroSorteado) {
    let numeroEscolhido = null;

    while (numeroEscolhido !== numeroSorteado) {
        console.clear();
        numeroEscolhido = parseInt(prompt("Escolha um número: "));
        console.clear();

        if (numeroEscolhido === numeroSorteado) {
            console.log("PARABÉNS! Você acertou o número!\n");
        }
        else if (numeroEscolhido < numeroSorteado) {
            console.log(`O número sorteado é maior que ${numeroEscolhido}.\n`);
        }
        else {
            console.log(`O número sorteado é menor que ${numeroEscolhido}.\n`);
        }
        prompt("Pressione qualquer tecla para continuar...");
    }
}

introducao()
let numeroSorteado = sortearNumero();
jogar(numeroSorteado);