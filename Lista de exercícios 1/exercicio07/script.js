function calcularPrecoMacas(qntd) {
    const precoComDesconto = 0.25;
    const precoSemDesconto = 0.30;
    const preco = qntd >= 12 ? precoComDesconto : precoSemDesconto;
    const total = (qntd * preco).toFixed(2);

    return `Total: ${total}`;
}


console.log(calcularPrecoMacas(12))
console.log(calcularPrecoMacas(2))

