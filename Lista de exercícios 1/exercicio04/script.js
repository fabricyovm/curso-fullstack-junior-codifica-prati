const prompt = require('prompt-sync')();
let opcao = 0;

function exibirMenu() {
    console.log('================================== ');
    console.log('      SISTEMA DE NOTAS             ');
    console.log('================================== ');
    console.log('1 - Verificar situação do aluno    ');
    console.log('2 - Verificar categoria por idade  ');
    console.log('3 - Sair                           ');
    console.log('----------------------------------\n');
}

while (opcao !== 3) {
    exibirMenu();
    opcao = Number(prompt('Escolha uma opção (1-3): '));

    console.clear();
    switch (opcao) {
        case 1:
            console.log("Você entrou na tela de 'Verificar situação do aluno'");
            break;

        case 2:
            console.log("Você entrou na tela de 'Verificar categoria por idade'");
            break;

        case 3:
            console.log("Saindo...");
            opcao = 3;
            break;

        default:
            console.log("ERRO: Opção inválida!");
            break;
    }

    prompt('\nPressione qualquer tecla para continuar...');
    console.clear();
}