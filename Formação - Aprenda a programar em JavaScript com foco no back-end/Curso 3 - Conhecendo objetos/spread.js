const estudante = 
{
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['558199999998', '558199999993'],
    enderecos:
    [{
        rua: 'Rua endereço certo',
        numero: '8',
        complemento: 'apt 24'
    },
    {
        rua: 'Rua endereço certo 2',
        numero: '88',
        complemento: null
    }]
}

function exibirTelefones(telefone1, telefone2)
{
    console.log(`Ligar para ${telefone1}`);
    console.log(`Ligar para ${telefone2}`);
}

exibirTelefones(estudante.telefones[0], estudante.telefones[1]);
exibirTelefones(...estudante.telefones);

const dadosEnvio =
{
    destinatario: estudante.nome,
    ...estudante.enderecos[0]
}

console.log(dadosEnvio);