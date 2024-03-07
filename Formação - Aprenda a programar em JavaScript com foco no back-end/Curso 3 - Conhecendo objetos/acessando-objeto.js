const estudante = 
{
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript'
}

function exibeInfoEstudante(objEstudante, infoEstudante)
{
    return objEstudante[infoEstudante];
}

console.log(estudante.pet); //Não da erro, passa undefined
console.log(estudante['pet']);

console.log(estudante['nome']);
console.log(estudante['cpf']);

console.log(exibeInfoEstudante(estudante, 'nome'));
console.log(exibeInfoEstudante(estudante, 'cpf'));