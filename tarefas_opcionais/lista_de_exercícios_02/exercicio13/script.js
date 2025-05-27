function fibonacci(n, vet) {
    let a = 0, b = 1;

    for (let i = 0; i < n; i++) {
        vet.push(a)
        const proximo = a + b;
        a = b;
        b = proximo;
    }
}

const vet = [];

fibonacci(15, vet);

console.table(vet)
