const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibeNomeENota(aluno)
{
    if(lista[0].includes(aluno))
    {
        const [alunos, medias] = lista;
        const index = alunos.indexOf(aluno);

        console.log(`A média de ${aluno} é ${medias[index]}`);
    }
    else
    {
        console.log("Aluno não encontrado!");
    }
}

exibeNomeENota('Caio');
exibeNomeENota('Luiz');