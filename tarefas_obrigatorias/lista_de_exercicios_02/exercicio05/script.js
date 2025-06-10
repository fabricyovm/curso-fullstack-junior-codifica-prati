function debounce(fn, delay) {
  let timeoutId;

  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args); 
    }, delay);
  };
}

function buscar() {
  console.log("Buscando dados...");
}

const buscarComDebounce = debounce(buscar, 1000);


buscarComDebounce();
buscarComDebounce();
buscarComDebounce();