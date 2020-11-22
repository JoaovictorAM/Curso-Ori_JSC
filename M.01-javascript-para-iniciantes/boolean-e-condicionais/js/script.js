var possuiGraduacao = true;
var possuiDoutorado = false;

if(possuiDoutorado) {
    console.log('Possui graduação e doutorado');
} else if(possuiGraduacao) {
    console.log('Possui graduação, mas não possui doutorado');
} else {
    console.log('Não possui graduação');
}
// retorna Possui Graduação, mas não possui doutorado
var x = 10;
console.log(x !=='10');
var corFavorita = 'Azul';

switch (corFavorita) {
    case 'Azul':
        console.log('Olhe para o céu.');
    break;
    case 'Vermelho':
        console.log('Olhe para rosas.');
    break;
    case 'Amarelo':
        console.log('Olhe para o sol.');
    break;
    default:
    console.log('Feche os olhos');
}
// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 22, idadeParente = 30;
if(minhaIdade > idadeParente){
    console.log('É maior.');
} else if (minhaIdade === idadeParente){
    console.log('É igual.');
} else {
    console.log('É menor');
}
// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);//true
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';//true
var idade = 28;//true
var possuiDoutorado = false;//false
var empregoFuturo;//false
var dinheiroNaConta = 0;//false

console.log(!!nome,!!idade,!!possuiDoutorado,!!empregoFuturo,!!dinheiroNaConta);
// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
if(brasil > china){
    console.log(true);
}else{
    console.log(false);
}
// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {//false
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {//cão
    console.log('Gato' && 'Cão');
} else {
    console.log('Falso');
}