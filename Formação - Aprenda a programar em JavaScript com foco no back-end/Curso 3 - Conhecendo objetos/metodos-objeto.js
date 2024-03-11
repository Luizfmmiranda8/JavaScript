const estudante = 
{
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['558199999998', '558199999993'],
    // enderecos:
    // [{
    //     rua: 'Rua endereço certo',
    //     numero: '8',
    //     complemento: 'apt 24'
    // },
    // {
    //     rua: 'Rua endereço certo 2',
    //     numero: '88',
    //     complemento: null
    // }]
}

const chavesObjeto = Object.keys(estudante);

console.log(chavesObjeto);

if(!chavesObjeto.includes('enderecos'))
{
    console.error('Endereço obrigatório');
}