//1:Crie um objeto livro que represente as informações de um livro. Objeto deve conter as seguintes propriedades:
//titulo (string): título do livro
//autor (string): nome do autor do livro
//anoPublicacao (number): ano de publicação do livro
//genero (string): gênero do livro
//Depois altere os valores do objeto com dados de algum livro
console.log('Exercício 1:');
const livro = 
{
    titulo: '',
    autor: '',
    anoPublicacao: 0,
    genero: '',
}

livro.titulo = 'Harry Potter e a pedra filosofal';
livro.autor = 'J.K. Rowling';
livro.anoPublicacao = 1997;
livro.genero = 'Fantasia';

console.log(livro);

//2: Crie uma nova variável chamada anoAtual e atribua a ela o ano atual
//(utilize new Date().getFullYear()). Crie um objeto chamado livro com as seguintes 
//propriedades: título, autor, ano de publicação e gênero.
//Adicione a propriedade idadePublicacao diretamente ao objeto livro, representando há quantos anos o 
//livro foi publicado. Calcule essa idade subtraindo o anoDePublicacao do anoAtual.
// Crie uma string chamada mostrarDetalhes contendo os detalhes do livro, incluindo a informação da idade 
//de publicação.
// Exiba a string mostrarDetalhes no console para verificar se as informações, incluindo a idade de 
//publicação, são exibidas corretamente.
console.log('Exercício 2:');

const anoAtual = new Date().getFullYear();
livro.idadePublicacao = anoAtual - livro.anoPublicacao;

const mostrarDetalhes = `O livro ${livro.titulo}, escrito por ${livro.autor}, é um livro de ${livro.genero} 
lançado em ${livro.anoPublicacao}, ou seja, foi lançado há ${livro.idadePublicacao} anos`;

console.log(mostrarDetalhes);

//3: Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, 
//idade de publicação. Depois, utilize colchetes para acessar diretamente as propriedades do objeto 
//livro e imprimir no console os detalhes do livro.
console.log('Exercício 3:');

console.log(livro['titulo']);
console.log(livro['autor']);
console.log(livro['anoPublicacao']);
console.log(livro['genero']);
console.log(livro['idadePublicacao']);

//4: Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, 
//idade de publicação. Depois, adicione uma nova propriedade chamada avaliacao. Esta propriedade deve 
//ser inicializada como null.
//No final do arquivo livro.js, adicione uma avaliação ao objeto.
//Caso a propriedade avaliacao seja null, atribua a avaliação ao objeto livro.
//Caso contrário, imprima uma mensagem indicando que o livro já possui uma avaliação.
console.log('Ecercício 4:');

livro.avaliacao = null;

if(livro.avaliacao === null)
{
    livro.avaliacao = 'Excelente'
}
else
{
    console.log('O livro já contem uma avaliação!');
}

console.log(livro);

//5: Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, 
//idade de publicação. Depois altere o gênero do livro para "Aventura".
console.log('Ecercício 5:');

livro.genero = 'Aventura';

console.log(livro);

//6: Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, 
//idade de publicação. Em seguida, exclua a propriedade avaliacao do objeto livro. Depois, exiba os 
//detalhes do livro no console, verificando se as informações atualizadas, sem a avaliação, são exibidas 
//corretamente.
console.log('Exercício 6:');

delete livro.avaliacao;

console.log(livro);