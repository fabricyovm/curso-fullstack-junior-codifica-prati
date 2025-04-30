function verificarIdade(idade) {
    if(typeof idade !== 'number' || idade < 0) {
        return 'Idade inválida';
    }

    if(idade <= 12) {
        return 'Criança';
    } 
    else if(idade < 18) {
        return 'Adolescente';
    }
    else if(idade < 60) {
        return 'Adulto';
    }
    else {
        return 'Idoso';
    }
}

console.log(verificarIdade(10));
console.log(verificarIdade(16));
console.log(verificarIdade(22));
console.log(verificarIdade(65));