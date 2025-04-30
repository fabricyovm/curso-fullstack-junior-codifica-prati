function ehTriangulo(A, B , C) {
    return A < B + C && B < A + C && C < A + B;
}

function verificarTipoTriangulo(ladoA, ladoB, ladoC) {
    
    if(ehTriangulo(ladoA, ladoB, ladoC)) {       
        const EQUILATERO = ladoA === ladoB && ladoB === ladoC;
        const ESCALENO = ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC;
        
        if(EQUILATERO) {
            return 'Triângulo equilatero'
        }
        else if(ESCALENO) {
            return 'Triângulo escaleno'
        }
        else {
            return 'Triângulo isósceles'
        }
    } else {
        return 'Não é um triângulo!'
    }
}

// Triângulo equilátero (todos os lados iguais)
console.log(verificarTipoTriangulo(5, 5, 5));

// Triângulo isósceles (dois lados iguais)
console.log(verificarTipoTriangulo(5, 5, 3));
console.log(verificarTipoTriangulo(4, 2, 4));
console.log(verificarTipoTriangulo(6, 8, 8));

// Triângulo escaleno (todos os lados diferentes)
console.log(verificarTipoTriangulo(5, 6, 7));
console.log(verificarTipoTriangulo(3, 4, 5));

// Não forma triângulo (soma de dois lados não é maior que o terceiro)
console.log(verificarTipoTriangulo(1, 2, 3));
console.log(verificarTipoTriangulo(10, 2, 1));
