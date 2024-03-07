const estudanteReprovou = function(notaFinal, faltas)
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

console.log(estudanteReprovou(6, 4));
console.log(estudanteReprovou(10, 4));
console.log(estudanteReprovou(10, 5));