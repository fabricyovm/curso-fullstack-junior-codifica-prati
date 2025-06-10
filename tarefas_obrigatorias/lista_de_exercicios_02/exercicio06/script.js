
function memoize(fn) {
  const cache = new Map();

  return function(...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      console.log("Retornando do cache:", key);
      return cache.get(key); 
    }

    const result = fn.apply(this, args);
    cache.set(key, result); 
    return result;
  };
}

function soma(a, b) {
  console.log(`Calculando ${a} + ${b}...`);
  return a + b;
}

const somaMemo = memoize(soma);

console.log(somaMemo(2, 3)); 
console.log(somaMemo(2, 3)); 
console.log(somaMemo(4, 1)); 
console.log(somaMemo(4, 1)); 

