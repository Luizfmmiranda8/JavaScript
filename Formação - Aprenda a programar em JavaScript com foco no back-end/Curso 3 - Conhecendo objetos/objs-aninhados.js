const estudante = 
{
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['558199999998', '558199999993']
}

estudante.endereco = 
{
    rua: 'Rua endereço certo',
    numero: '8',
    complemento: 'apt 24'
}

console.log(estudante.endereco.rua);