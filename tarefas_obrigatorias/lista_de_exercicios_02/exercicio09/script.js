function paresParaObjeto(pares) {
  const obj = {};
  for (let i = 0; i < pares.length; i++) {
    const chave = pares[i][0];
    const valor = pares[i][1];
    obj[chave] = valor;
  }
  return obj;
}

function objetoParaPares(obj) {
  const pares = [];
  for (const chave in obj) {
    if (obj.hasOwnProperty(chave)) {
      pares.push([chave, obj[chave]]);
    }
  }
  return pares;
}


const pares = [['nome', 'Ana'], ['idade', 25], ['cidade', 'São Paulo']];
console.log("Array de pares original:", pares);

const obj = paresParaObjeto(pares);
console.log("Convertido em objeto:", obj);

const paresDeNovo = objetoParaPares(obj);
console.log("Convertido de volta em array de pares:", paresDeNovo);
