var pessoa = {
    nome: 'joão victor',
    idade: 28,
}
var quadrado = {
    lados: 4,
    area: function (lado) {
        return lado * lado;
    },
    perimetro(lado) {
        return this.lados * lado;
    }
}
console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

Math.PI; // 3.14
console.log(Math.random()); // número aleatório

var pi = Math.PI;
console.log(pi); // 3.14

var carro = {};
var pessoa = {};

console.log(typeof carro); // 'object'

var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84d',
}
menu.backgroundColor = '#000';
menu.color = 'blue';
menu.esconder = function () {
    console.log('esconder');
}
var bg = menu.backgroundColor;

var height = 120;
var menu = {
    width: 800,
    height: 50,
    metadeHeight() {
        return this.height / 2;
    }
}

menu.metadeHeight(); // 25
// sem o this, seria 60

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dadosP = {
    nome:'João Victor',
    sobrenome:'Alves Macedo',
}
// Crie um método no objeto anterior, que mostre o seu nome completo
dadosP.mostrar = function(){
    return `${this.nome} ${this.sobrenome}`;
}
// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000;
console.log(carro.preco);

  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem
var cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade: 10,
    latir (pessoa){
        if(pessoa === 'homem'){
            return 'latir';
        } else {
            return 'não latir';
        }
    }
}
console.log(cachorro.latir('homem'));