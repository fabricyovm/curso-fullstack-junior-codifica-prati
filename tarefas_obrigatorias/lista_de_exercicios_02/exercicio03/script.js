function palavrasUnicas(texto) {
  const palavras = texto.split(" ");
  const unicas = [];

  for (let i = 0; i < palavras.length; i++) {
    let contador = 0;

    for (let j = 0; j < palavras.length; j++) {
      if (palavras[i] === palavras[j]) {
        contador++;
      }
    }

    if (contador === 1) {
      let jaAdicionada = false;
      for (let k = 0; k < unicas.length; k++) {
        if (unicas[k] === palavras[i]) {
          jaAdicionada = true;
          break;
        }
      }
      if (!jaAdicionada) {
        unicas.push(palavras[i]);
      }
    }
  }

  return unicas;
}

console.log(palavrasUnicas("olá mundo mundo")); 
console.log(palavrasUnicas("olá olá mundo mundo")); 
console.log(palavrasUnicas("isso é um teste teste"));
