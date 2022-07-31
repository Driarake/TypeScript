"use strict";
const desenvolvedor = {
    name: 'Marco',
    idade: 25,
    salario: 15000
};
const carro = {
    cor: 'vermelho',
    numeroDoPneu: 10,
    conversivel: true
};
const estudante = {
    nome: 'Amanda',
    idade: 24,
    materias: ['Algoritmos', 'Lógica para computação']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ' + item);
    }
}
listar(estudante.materias);
