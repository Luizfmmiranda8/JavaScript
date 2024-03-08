const estudante = 
{
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['558199999998', '558199999993'],
    endereco:
    [{
        rua: 'Rua endereço certo',
        numero: '8',
        complemento: 'apt 24'
    }]
}


estudante.endereco.push(
    {
        rua: 'Rua endereço certo 2',
        numero: '88',
        complemento: null
    });

console.log(estudante.endereco);
console.log(estudante.endereco[0]);

const listaEnderecosComComplemento = estudante.endereco.filter((endereco) => endereco.complemento);

console.log(listaEnderecosComComplemento);