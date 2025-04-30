function ordenarValores(valor1, valor2) {
    if(valor1 === valor2) {
        return "Números iguais não são permitidos!"
    }

    return valor1 > valor2 ? `${valor2}, ${valor1}` : `${valor1}, ${valor2}`;
}


console.log(ordenarValores(10, 5));
console.log(ordenarValores(100, 54));