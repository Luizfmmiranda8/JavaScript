const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibeNomeENota(aluno)
{
    if(lista[0].includes(aluno))
    {
        const index = lista[0].indexOf(aluno);

        console.log(`A média de ${aluno} é ${lista[1][index]}`);
    }
    else
    {
        console.log("Aluno não encontrado!");
    }
}

exibeNomeENota('Caio');
exibeNomeENota('Luiz');