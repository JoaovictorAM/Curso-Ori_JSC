function somar(n1, n2) {
    return n1 + n2;
}

console.log(somar.length); // 2
console.log(somar.name); // 'somar'

const carro = {
    marca: 'Ford',
    ano: 2018
}

function descricaoCarro() {
    console.log(this.marca + ' ' + this.ano);
}

descricaoCarro.call(carro);
const carros = ['Ford', 'Fiat', 'VW'];

carros.forEach.call(carros, (item) => {
    console.log(item);
});
const frutas = ['Banana', 'Pêra', 'Uva'];

carros.forEach.call(frutas, (item) => {
    console.log(item);
}); // Log de cada Fruta

function Dom(seletor) {
    this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function (classe) {
    this.element.classList.add(classe);
}

const ul = new Dom('ul');

const li = {
    element: document.querySelector('li')
}
ul.ativo.call(li ,'ativar');
//ul.ativo('ativar');
console.log(ul);
const frutas = ['Banana', 'Pêra', 'Uva'];

Array.prototype.pop.call(frutas);
//frutas.pop();
console.log(frutas);

const carro = {
    marca: 'Ford',
    ano: 2018,
    acelerar: function (aceleracao, tempo) {
        return `${this.marca} acelerou ${aceleracao} em ${tempo} segundos`;
    }
}
console.log(carro);
const honda = {
    marca: 'honda'
}
const acelerarHorda = carro.acelerar.bind(honda);
console.log(acelerarHorda(300, 20));