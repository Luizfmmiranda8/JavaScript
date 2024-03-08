const estudante = 
{
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['558199999998', '558199999993'],
    media: 7.5,
    estaAprovado: function(mediaBase)
    {
        return this.media >= mediaBase ? true : false;
    }
}

console.log(estudante.estaAprovado(7));