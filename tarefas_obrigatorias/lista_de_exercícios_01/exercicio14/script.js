function fatorial(numero) {
    if(numero < 0) {
        return "Fatorial não existe para números negativos!"
    }

    let resultado = 1;

    for(let i = 2; i <= numero; i++) {
        resultado *= i;
    }

    return resultado;
}

console.log(`5! = ${fatorial(5)}`)
console.log(`10! = ${fatorial(10)}`)
console.log(`3! = ${fatorial(3)}`)
console.log(`-1! = ${fatorial(-1)}`)