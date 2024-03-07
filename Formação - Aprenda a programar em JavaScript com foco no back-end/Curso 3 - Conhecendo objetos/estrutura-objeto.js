const estudante = 
{
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript'
}

console.log(`O nome do estudante é ${estudante.nome} e ele está matriculado na turma de ${estudante.turma}`);
console.log(`Os três primeiros números do CPF são: ${estudante.cpf.substring(0,3)}`);