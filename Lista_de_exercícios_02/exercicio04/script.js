const prompt = require('prompt-sync')();

function ehTriangulo(A, B , C) {
    return A < B + C && B < A + C && C < A + B;
}

const ladoA = Number(prompt("Digite o tamanho do primeiro segmento de reta:"))
const ladoB = Number(prompt("Digite o tamanho do segundo segmento de reta:"))
const ladoC = Number(prompt("Digite o tamanho do terceiro segmento de reta:"))

if(ehTriangulo(ladoA, ladoB, ladoC)) {
    console.log("\nÉ possível formar um triângulo!")
}
else {
    console.log("\nNão é possível formar um triângulo!");
}