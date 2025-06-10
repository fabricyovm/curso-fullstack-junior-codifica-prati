const produtos = [
  { nome: "Camiseta", preco: 30 },
  { nome: "Calça", preco: 80 },
  { nome: "Tênis", preco: 120 },
  { nome: "Boné", preco: 25 },
];

function arrOrdenado(produtos) {
  const novoArr = produtos
    .slice()
    .sort((a, b) => a.preco - b.preco)
    .map((produto) => produto.nome);

    return novoArr;
}


console.log(arrOrdenado(produtos));
