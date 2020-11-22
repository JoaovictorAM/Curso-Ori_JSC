// function Carro(marca, preco) {
//     this.marca = marca;
//     this.preco = preco;
// }

// const honda = new Carro('Honda', 30000);
// const fiat = new Carro('FIat', 40000);
// console.log(honda);
// console.log(fiat);


// function Carro2(marca, precoi) {
//     this.taxa = 1.2;
//     const precof = precoi * this.taxa;
//     this.marca = marca;
//     this.preco = precof;
// }
// const bmw = new Carro2('bmw', 120000);
// console.log(bmw);


//Aula 1
// const Dom = {
//     seletor: 'li',
//     element(){
//         return document.querySelector(this.seletor);
//     },
//     ativar(){
//         this.element().classList.add('ativar');
//     }
// }

function Dom(seletor) {
    this.element = function () {
        return document.querySelector(seletor);
    }
    this.ativar = function (classe) {
        this.element().classList.add(classe);
    }
}

const domLi = new Dom('li');
domLi.ativar('oi')
const domLiLast = new Dom('li:last-child');
const domUl = new Dom('ul');

// Transforme o objeto abaixo em uma Constructor Function
function pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.andar = function () {
        console.log(this.nome + ' andou');
    }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const pessoa1 = new pessoa('João', 20);
const pessoa2 = new pessoa('Maria', 25);
const pessoa3 = new pessoa('Bruno', 15);


// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
function Mdom(selector) {
    const elementList = document.querySelectorAll(selector);
    this.element = elementList;

    this.addClass = function (classe) {
        elementList.forEach((element) => {
            element.classList.add(classe);
        });
    }
    this.removeClass = function (classe) {
        elementList.forEach((element) => {
            element.classList.remove(classe);
        });
    }
}
  //
  // elements, retorna NodeList com os elementos selecionados
  // addClass(classe), adiciona a classe a todos os elementos
  // removeClass(classe), remove a classe a todos os elementos

