function ehAnoBissexto(ano) {
  return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

function ehDataValida(dia, mes, ano) {
  if (!Number.isInteger(ano) || ano < 1) return false;
  if (!Number.isInteger(mes) || mes < 1 || mes > 12) return false;
  if (!Number.isInteger(dia) || dia < 1) return false;

  const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (mes === 2 && ehAnoBissexto(ano)) {
    diasPorMes[1] = 29;
  }

  return dia <= diasPorMes[mes - 1];
}

console.log(ehDataValida(29, 2, 2024)); 
console.log(ehDataValida(29, 2, 2023)); 
console.log(ehDataValida(31, 4, 2025)); 
console.log(ehDataValida(30, 4, 2025)); 
console.log(ehDataValida(1, 13, 2025)); 
console.log(ehDataValida(0, 5, 2025));
