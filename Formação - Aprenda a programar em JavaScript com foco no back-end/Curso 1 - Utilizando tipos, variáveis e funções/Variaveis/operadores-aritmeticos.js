const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = 7;
const notaQuartoBi = 9.3;

const total = notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi;
let media = total/4;

if(media >= 7)
{
    media += media * 0.1;
}

console.log(`A média é ${media.toFixed(2)}`);