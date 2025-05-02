const prompt = require('prompt-sync')();
let opcao = null;

function exibirMenu() {    
    console.log("╔══════════════════════════════════════════╗");
    console.log("║                  JOKENPÔ                 ║");
    console.log("╠══════════════════════════════════════════╣");
    console.log("║  1. Jogar                                ║");
    console.log("║  2. Sair                                 ║");
    console.log("╚══════════════════════════════════════════╝");        
}

function exibirOpcoes() {
    console.log("╔══════════════════════════════════════════╗");
    console.log("║                  JOKENPÔ                 ║");
    console.log("╠══════════════════════════════════════════╣");
    console.log("║  1. Pedra                                ║");
    console.log("║  2. Papel                                ║");
    console.log("║  3. Tesoura                              ║");
    console.log("╚══════════════════════════════════════════╝");
}

function exibirFimDeJogo() {
    console.log("╔══════════════════════════════════════════╗");
    console.log("║                FIM DE JOGO               ║");
    console.log("╚══════════════════════════════════════════╝");
}

function verificarVencedor(jogador, computador) {   
    const resultado = {vitoria: 1, empate: 0, derrota: -1};
    const jogadorVenceu = (jogador === "Pedra" && computador === "Tesoura") || 
                          (jogador === "Tesoura" && computador === "Papel") ||
                          (jogador === "Papel" && computador === "Pedra");

    if(jogador === computador) {
        return resultado.empate;
    }

    if(jogadorVenceu) {
        return resultado.vitoria;
    } 

    return resultado.derrota;   
}

function exibirResultado(infoResultado, jogadas) {
    console.log(`Jogador: ${jogadas[infoResultado.jogador - 1]}`)
    console.log(`Computador: ${jogadas[infoResultado.computador - 1]}\n`)

    if(infoResultado.resultado === 1) {
        console.log("╔══════════════════════════════════════════╗");
        console.log("║                VOCÊ VENCEU               ║");
        console.log("╚══════════════════════════════════════════╝\n");
    }
    else if(infoResultado.resultado === 0) {
        console.log("╔══════════════════════════════════════════╗");
        console.log("║                EMPATOU                   ║");
        console.log("╚══════════════════════════════════════════╝\n");
    }
    else {
        console.log("╔══════════════════════════════════════════╗");
        console.log("║                VOCÊ PERDEU               ║");
        console.log("╚══════════════════════════════════════════╝\n");
    }
}

while(opcao !== 2) {
    exibirMenu();
    opcao = parseInt(prompt("Escolha uma opção: "));

    console.clear();
    switch(opcao) {
        case 1:
            exibirOpcoes();
            let jogadas = ['Pedra', 'Papel', 'Tesoura'];
            let jogador = parseInt(prompt("Escolha uma opção: "));
            let computador = Math.floor(Math.random() * 3) + 1;            
            let resultado = verificarVencedor(jogadas[jogador - 1], jogadas[computador - 1]);
            let infoResultado = {
                jogador,
                computador,
                resultado,
            }

            console.clear();
            exibirResultado(infoResultado, jogadas)            
            break;

        case 2:
            exibirFimDeJogo();
            break;
    }
    prompt("Digite qualquer tecla para continuar...");
    console.clear();
}