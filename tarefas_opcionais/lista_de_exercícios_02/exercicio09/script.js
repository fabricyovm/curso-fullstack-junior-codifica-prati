const prompt = require('prompt-sync')();

function cadastrarFuncionarios() {
    let continuar = 1;
    const listaFunc = [];

    while (continuar !== 2) {
        const nome = prompt("Digite o nome do funcionário: ");
        const sexo = (prompt("Digite o sexo do funcionário ('Masculino' ou 'Feminino'): ")).trim().toLocaleLowerCase();
        const salario = Number(prompt("Digite o salário do funcionário: "))

        do {
            console.clear();
            console.log("[1] Sim");
            console.log("[2] Não\n");

            continuar = Number(prompt("Deseja cadastrar outro funcionário? "));
        } while (continuar !== 1 && continuar !== 2)

        const novoFuncionario = { nome, sexo, salario };
        listaFunc.push(novoFuncionario)
        console.clear();
    }

    return listaFunc;
}

function calcularTotalSalario(funcionarios) {
    const [homens, mulheres] = funcionarios.reduce((acc, funcionario) => {
        if(funcionario.sexo === 'masculino') {
            acc[0] += funcionario.salario
        }

        if(funcionario.sexo === 'feminino') {
            acc[1] += funcionario.salario
        }

        return acc;
    }, [0, 0]);

    return [homens, mulheres];
}

const funcionarios = cadastrarFuncionarios();
const [homens, mulheres] = calcularTotalSalario(funcionarios);

console.table(funcionarios)
console.log(`\nSalário dos homens.......: R$ ${homens.toFixed(2)}`);
console.log(`Salário das mulheres.....: R$ ${mulheres.toFixed(2)}`);