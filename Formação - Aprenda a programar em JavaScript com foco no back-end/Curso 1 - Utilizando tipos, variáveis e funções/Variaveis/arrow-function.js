const estudanteReprovou = (notaFinal, faltas) =>
{
    if(notaFinal < 7 || faltas > 4)
    {
        return true;
    }
    else
    {
        return false;
    }
}

const exibeNome = (nome) => nome;

console.log(exibeNome('Luiz'));
console.log(estudanteReprovou(6, 4));
console.log(estudanteReprovou(10, 4));
console.log(estudanteReprovou(10, 5));