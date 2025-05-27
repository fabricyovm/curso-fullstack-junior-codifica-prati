function setVetor(n) {
    const vet = [];

    for(let i = 0; i < n; i++) {
        vet.push(Math.floor(Math.random() * 100));
    }

    return vet;
}

const vetor = setVetor(20);

console.log(vetor.join(', '));
console.log(vetor.sort((a, b) => a - b).join(', '));