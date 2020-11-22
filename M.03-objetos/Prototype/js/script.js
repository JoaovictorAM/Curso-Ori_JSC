function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}
Pessoa.prototype.andar = function () {
    return this.nome + ' Pessoa andou';
}

const pais = 'brasil';
const cidade = new String('Rio');

const listaA = ['gato', 'cachorro', 'cavalo'];

const lista = document.querySelectorAll('li');
const listaArray = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);

const Carro = {
    marca: 'Ford',
    preco: 2000,
    andar() {
        return true;
    }
}

Carro // Object
Carro.marca // String
Carro.preco // Number
Carro.andar // Function
Carro.andar() // Boolean
Carro.marca.charAt // Function
Carro.marca.charAt(0) // String


// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoas(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}
Pessoas.prototype.nomeCompleto= function(){
    return this.nome + ' ' + this.sobrenome;
}


// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li;//htmlLielemnte
li.click; //function
li.innerText;// strig
li.value; //nunber 
li.hidden;// boolean 
li.offsetLeft; //number 
li.click();// undefined 

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //string
