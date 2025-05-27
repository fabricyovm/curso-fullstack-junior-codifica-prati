const prompt = require('prompt-sync')();

let numeros = [];
let contador = 1;
let temPar = false;

while(contador <= 7) {
    const numero = Number(prompt("Digite um número: "));
    numeros.push(numero);
    contador++;
}

console.log('\n');
numeros.forEach((n, index) => {
    if(n % 2 === 0) {
        temPar = true;
        console.log(`Número: ${n} - Posição: ${index}`)
    } 
});

if(!temPar) {
    console.log("Nenhum número par foi encontrado!");
}