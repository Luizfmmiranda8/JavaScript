//1: Crie um objeto chamado pessoa que represente informações sobre uma pessoa. 
//Este objeto deve ter as seguintes propriedades:
// nome (string): Nome da pessoa.
// idade (number): Idade da pessoa.
// solteiro (boolean): Indicador de estado civil (true se solteiro, false se casado).
// hobbies (array): Lista de hobbies da pessoa.
//Adicione valores a cada propriedade do objeto pessoa. Use valores fictícios para simular uma pessoa 
//específica.
//Crie uma função chamada mostrarInfoPessoa que aceite o objeto pessoa como parâmetro e imprima todas as 
//informações da pessoa no console, incluindo o tipo de dado de cada propriedade.
// No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa passando o objeto pessoa como argumento.
// Dica: você pode usar um método de array para retirar os elementos dos colchetes e exibi-los como texto.
console.log('Exercício 1');

const pessoa =
{
    nome: 'Luiz',
    idade: 31,
    solteiro: false,
    hobbies: ['Ler', 'Jogar', 'Crossfit']
}

function mostrarInfoPessoa(pessoa)
{
    const estadoCivil = pessoa.solteiro ? 'Solteiro' : 'Casado';

    return `Informações de ${pessoa.nome}: \n idade: ${pessoa.idade} \n estado civil: ${estadoCivil} \n 
    hobbies: \n 1 - ${pessoa.hobbies[0]} \n 2 - ${pessoa.hobbies[1]} \n 3 - ${pessoa.hobbies[2]}`;
}

console.log(mostrarInfoPessoa(pessoa));

//2: Adicione ao objeto pessoa uma nova propriedade chamada endereco. Esta propriedade deve ser 
//um objeto representando o endereço da pessoa, com as seguintes subpropriedades:
// rua (string): nome da rua.
// cidade (string): nome da cidade.
// estado (string): nome do estado.
// Preencha as subpropriedades do objeto endereco com valores fictícios.
// Modifique a função mostrarInfoPessoa para incluir as informações do endereço da pessoa ao ser chamada.
// No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa para verificar se as informações 
//atualizadas, incluindo o endereço, são exibidas corretamente no console.
console.log('Exercício 2');

pessoa.endereco =
{
    rua: 'Rua ficticia',
    cidade: 'Recife',
    estado: 'Pernambuco'
}

function mostrarInfoPessoa2(pessoa)
{
    const estadoCivil = pessoa.solteiro ? 'Solteiro' : 'Casado';

    return `Informações de ${pessoa.nome}: \n idade: ${pessoa.idade} \n estado civil: ${estadoCivil} \n 
    hobbies: \n 1 - ${pessoa.hobbies[0]} \n 2 - ${pessoa.hobbies[1]} \n 3 - ${pessoa.hobbies[2]} \n
    ${pessoa.nome} mora em ${pessoa.endereco.cidade} no estado de ${pessoa.endereco.estado} no endereço ${pessoa.endereco.rua}`;
}

console.log(mostrarInfoPessoa2(pessoa));

// 3: Crie uma lista de pessoas chamada pessoas que será um array contendo objetos. Cada objeto deve 
//representar uma pessoa e conter as seguintes propriedades:
// nome (string): nome da pessoa.
// idade (number): idade da pessoa.
// cidade (string): cidade de residência da pessoa.
// Adicione pelo menos três objetos à lista pessoas com informações fictícias de diferentes pessoas.

// a) Crie uma função chamada mostrarListaPessoas que aceita a lista pessoas como parâmetro e 
//imprima no console as informações de cada pessoa na lista.

// b) Adicione uma nova pessoa à lista pessoas utilizando o método push. Certifique-se de que a 
//nova pessoa tenha informações distintas das pessoas já existentes na lista.

// c) Chame a função mostrarListaPessoas para verificar se as informações, incluindo a nova pessoa, 
//são exibidas corretamente no console.

// d) Crie uma função chamada filtrarPorCidade que aceita a lista pessoas e uma string cidade como 
//parâmetros. A função deve retornar uma nova lista contendo apenas as pessoas que residem na cidade fornecida.

// Chame a função filtrarPorCidade passando a lista pessoas e uma cidade fictícia como argumentos e 
//imprima no console o resultado obtido.
console.log('Exercício 3:');

const listaPessoas = 
[
    pessoa1 = 
    {
        nome: 'Luiz',
        idade: 31,
        cidade: 'Recife'
    },
    pessoa2 =
    {
        nome: 'Antônio',
        idade: 32,
        cidade: 'Recife'
    },
    pessoa3 = 
    {
        nome: 'Fred',
        idade: 25,
        cidade: 'Porto'
    }
]

function mostrarListaPessoas(pessoas) 
{
    console.log("Lista de Pessoas:");
    pessoas.forEach(pessoa => 
    {
        console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
    });
}

mostrarListaPessoas(listaPessoas);

listaPessoas.push(pessoa4 = 
    {
        nome: 'Danilo',
        idade: 30,
        cidade: 'Recife'
    });

mostrarListaPessoas(listaPessoas);

function filtrarPorCidade(pessoas, cidade) {
    return pessoas.filter(pessoa => pessoa.cidade === cidade);
}

const pessoasRecife = filtrarPorCidade(listaPessoas, 'Recife');

console.log('Pessoas de Recife: \n');
console.log(pessoasRecife);

// 4: Crie um objeto chamado calculadora que terá os seguintes métodos:
// soma: uma função que aceita dois parâmetros e retorna a soma deles.
// subtracao: uma função que aceita dois parâmetros e retorna a subtração do segundo parâmetro do primeiro.
// multiplicacao: uma função que aceita dois parâmetros e retorna o resultado da multiplicação deles.
// divisao: uma função que aceita dois parâmetros e retorna o resultado da divisão do primeiro pelo segundo. 
//Certifique-se de tratar a divisão por zero, retornando uma mensagem apropriada nesse caso.
// a) Chame cada função dentro do objeto calculadora passando valores como argumentos e imprima no console os resultados obtidos.

// b) Adicione um novo método chamado calcularMedia ao objeto calculadora. Esta função deve aceitar um array de números como parâmetro e retornar a média aritmética dos valores.

// c) Chame a função calcularMedia passando um array de números e imprima no console o resultado obtido.
console.log('Exercício 4:');

const calculadora =
{
    soma: function(a, b) 
    {
        return a + b;
    },
    subtracao: function(a, b)
    {
        return a - b;
    },
    multiplicacao: function(a, b)
    {
        return a * b;
    },
    divisao: function(a, b)
    {
        return b !== 0 ? a / b : 'Não pode dividir por zero'
    },
    calcularMedia: function(numeros)
    {
        const somaNumeros = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
        const media = somaNumeros / numeros.length;

        return media;
    }
}

const soma = calculadora.soma(4,4);
const subtracao = calculadora.subtracao(8,2);
const multiplicacao = calculadora.multiplicacao(9, 3);
const divisao = calculadora.divisao(10, 2);
const divisaoZero = calculadora.divisao(10, 0);
const media = calculadora.calcularMedia([1, 2, 3, 4, 5, 6])

console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(divisaoZero);
console.log(media);

// 5: Crie um objeto chamado contaBancaria com as seguintes propriedades:

// titular: uma string representando o titular da conta.
// saldo: um número representando o saldo da conta.
// depositar: uma função que aceita um valor como parâmetro e adiciona esse valor ao saldo da conta. 
//Utilize this para acessar a propriedade saldo.
// sacar: uma função que aceita um valor como parâmetro e subtrai esse valor do saldo da conta. 
//Utilize this para acessar a propriedade saldo. Certifique-se de verificar se há saldo suficiente antes 
//de efetuar o saque.
// Crie um objeto chamado cliente que representa um cliente com uma conta bancária. O objeto deve ter as 
//seguintes propriedades:

// nome: uma string representando o nome do cliente.
// conta: uma referência à conta bancária associada a esse cliente (objeto criado anteriormente).
// Crie uma função chamada mostrarSaldo que aceita o objeto cliente como parâmetro e imprime no console o 
//nome do cliente e o saldo da sua conta utilizando this para acessar as propriedades do objeto.

// Realize operações de depósito e saque na conta bancária do cliente usando as funções do objeto 
//contaBancaria e, em seguida, chame a função para exibir as informações atualizadas no console.
console.log('Exercício 5:');

const contaBancaria = 
{
    titular: "João",
    saldo: 1000,
    depositar: function(valor) 
    {
        this.saldo += valor;
    },
    sacar: function(valor) 
    {
        if (valor <= this.saldo) 
        {
            this.saldo -= valor;
        } 
        else 
        {
            console.log("Saldo insuficiente para saque.");
        }
    }
};

const cliente = 
{
    nome: "Luiz",
    conta: contaBancaria
};

function mostrarSaldo(cliente) 
{
    console.log(`Nome do cliente: ${cliente.nome}`);
    console.log(`Saldo da conta: ${cliente.conta.saldo}`);
}

cliente.conta.depositar(500);
cliente.conta.sacar(200);

mostrarSaldo(cliente)
