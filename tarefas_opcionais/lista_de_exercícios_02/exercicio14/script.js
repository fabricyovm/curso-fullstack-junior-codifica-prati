const prompt = require('prompt-sync')();

let nomes = [];
let contador = 1;

while(contador <= 7) {
    const nome = prompt("Digite o nome: ");
    nomes.push(nome);
    contador++;
}

console.table(nomes.reverse());