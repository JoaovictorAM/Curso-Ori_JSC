function quadradoArea(lado) {
    return lado * lado;
}
console.log(quadradoArea(2));

function pi() {
    return 3.14;
}
var numero = 5;
console.log(numero * pi());

function imc(peso, altura) {
    var imc = peso / (altura ** 2);
    return imc;
}
console.log(imc(28, 1.80));

function corFavorita(cor) {
    if (cor === 'azul') {
        return 'Você gosta do céu';
    } else if (cor === 'verde') {
        return 'Você gosta de mato';
    } else {
        return 'Você não gosta de nada';
    }
}
corFavorita(); // retorna 'Você não gosta de nada'

addEventListener('click', function () { console.log('Clicou'); });
// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima

function imc2(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc);
}

imc2(80, 1.80); // retorna o imc
console.log(imc2(80, 1.80)); // retorna o imc e undefined

function terceiraIdade(idade) {
    if (typeof idade !== 'number') {
        return 'Informe a sua idade!';
    } else if (idade >= 60) {
        return true;
    } else {
        return false;
    }
}
console.log(terceiraIdade(59));

function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`
}
//console.log(totalPaises); // erro, totalPaises não definido

var profissao = 'Designer';

function dados() {
    var nome = 'André';
    var idade = 28;
    function outrosDados() {
        var endereco = 'Rio de Janeiro';
        var idade = 29;
        return `${nome}, ${idade}, ${endereco}, ${profissao}`;
    }
    return outrosDados();
}

console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
//console.log(outrosDados()); // retorna um erro

imc(80, 1.80); // imc aparece no console

function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc);
}


// Crie uma função para verificar se um valor é Truthy
function veficaTruthy(valor){
    if(valor){
        return console.log(`${valor} é truthy`);
    } else{
        return console.log(`${valor} não é truthy`);
    }

    //return !!valor;
}
veficaTruthy(' ');
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perímetroQ(l1,l2,l3,l4){
    return console.log(l1+l2+l3+l4);
}
perímetroQ(10,10,10,10);
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function retornaNS(nome1,sobrenome1){
    return console.log(`${nome1} ${sobrenome1}`);
}
retornaNS( 'joao','victor' );
// Crie uma função que verifica se um número é par
function resto(n1){
    var div = n1%2;
    if(div === 0){
        console.log(`${n1} é par`)
    }else{
        console.log(`${n1} é impar`)
    }
}
resto(2);
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoArg(a1){
    return console.log(typeof a1);
}
tipoArg(true);
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function (){
    console.log('João Victor');
});
// Corrija o erro abaixo
var totalPaises =193;
function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
