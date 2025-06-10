const vendas = [
  { cliente: "Ana", total: 100 },
  { cliente: "Carlos", total: 200 },
  { cliente: "Ana", total: 150 },
  { cliente: "Beatriz", total: 300 },
  { cliente: "Carlos", total: 50 }
];

const clientesTotal = vendas.reduce((acc, va) => {
    acc[va.cliente] = (acc[va.cliente] || 0) + va.total;
    
    return acc;
}, {});

console.log(clientesTotal);