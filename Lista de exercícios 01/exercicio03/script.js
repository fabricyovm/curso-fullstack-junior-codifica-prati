function verificaNota(nota) {   
    if(typeof nota !== 'number' || nota < 0 || nota > 10) {
        return 'Nota inválida';
    }

    if(nota >= 7) {
        return 'Aprovado';
    }
    else if(nota >= 5) {
        return 'Recuperação';
    }
    else {
        return 'Reprovado';
    }
}

console.log(verificaNota(10));
console.log(verificaNota(6.9));
console.log(verificaNota(5.1));
console.log(verificaNota(3.8));
console.log(verificaNota(4.9));
console.log(verificaNota(12));