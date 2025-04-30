function calcularIMC(peso, altura) {   
    const IMC = (peso / (altura * altura)).toFixed(2);  

    if(IMC < 18.5) {
        return `IMC: ${IMC} - Abaixo do peso`;
    }
    else if( IMC <= 24.9) {
        return `IMC: ${IMC} - Peso normal`;
    }
    else if( IMC <= 29.9) {
        return `IMC: ${IMC} - Sobrepeso`;
    }
    else if( IMC <= 34.9) {
        return `IMC: ${IMC} - Obesidade grau I`;
    }
    else if( IMC <= 39.9) {
        return `IMC: ${IMC} - Obesidade grau II`;
    }
    else {
        return `IMC: ${IMC} - Obesidade grau III`;
    }
}

console.log(calcularIMC(55, 1.80));  
console.log(calcularIMC(70, 1.75));  
console.log(calcularIMC(85, 1.75));  
console.log(calcularIMC(95, 1.70));  
console.log(calcularIMC(110, 1.70));  
console.log(calcularIMC(140, 1.70));  
console.log(calcularIMC(70, 1.85));  
console.log(calcularIMC(18, 1.80));