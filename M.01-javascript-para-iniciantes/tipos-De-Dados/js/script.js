var nome = 'joao victor', sobrenome = 'Alves Macedo';
var idade = 22;
console.log(typeof idade);
console.log(nome +' '+  sobrenome);
console.log(nome +' '+  sobrenome +' '+idade);

var melhor = 'teste';
var fraseA = 'esse é o  \'+melhor+\' jogo';
console.log(fraseA);

var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols';
var frase2 = `Romário fez ${gols} gols`; // Utilizando Template String
console.log(frase1);
console.log(frase2);

// Declare uma variável contendo uma string
var comida = 'pizza';
console.log(comida);
// Declare uma variável contendo um número dentro de uma string
var ex2 = '2019'
console.log(ex2);
console.log(typeof ex2);
// Declare uma variável com a sua idade
var idade2 = 25;
console.log(idade2);
// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var nome2 = 'batata', sobrenome2 = 'pinto', nomeCompleto = `${nome2} ${sobrenome2}`;
console.log(nome2+' '+sobrenome2);
console.log(nomeCompleto);
// Coloque a seguinte frase em uma variável: It's time
var fraseEx = "It's time";
console.log(fraseEx); 
// Verifique o tipo da variável que contém o seu nome
console.log(typeof nome2);