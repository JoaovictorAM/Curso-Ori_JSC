var soma = 10 + 5;
console.log(soma);
var divisao = 10 / 5;
console.log(divisao);
var modulo = 10987 % 5;
console.log(modulo);

var somaS = '10' + 5;
console.log(somaS);
var menosS = '10' - 5;
console.log(menosS);
var multi = '10' * 5;
console.log(multi);
var divisaoS = '10' / 5;
console.log(divisaoS);

var numero = 80;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
console.log(peso)
var pesoPorDois = peso / 2 // NaN (Not a Number)
console.log(pesoPorDois);

var total1 = 20 + 5 * 2; // 30
console.log(total1);
var total2 = (20 + 5) * 2; // 50
console.log(total2);
var total3 = 20 / 2 * 5; // 50
console.log(total3);
var total4 = 10 + 10 * 2 + 20 / 2; // 40
console.log(total4);
var total5 = 10+10+20+30*4/2+10;// 40
console.log(total5);

var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6

var decremento = 5;
console.log(decremento--); // 4
console.log(decremento); // 4

var decremento2 = 5;
console.log(--decremento2); // 4
console.log(decremento2); // 4

var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade = '28';
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33 

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1

// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;//35
console.log(total);
// Crie duas expressões que retornem NaN
var ex2 = 'nan2', ex2_1 = 2;
console.log(ex2 / ex2_1);
var ex3 = 'nan2', ex3_1 = 2;
console.log(ex3 / ex3_1);
// Somar a string '200' com o número 50 e retornar 250
var ex4 = '200', ex4_1 = 50;
console.log(+ex4+ex4_1);
// Incremente o número 5 e retorne o seu valor incrementado
var ex5 = 5;
console.log(++ex5);
// Como dividir o peso por 2?
var numero2 = '80';
var unidade2 = 'kg';
var peso2 = numero2 + unidade2; // '80kg'
var pesoPorDois = peso2 / 2; // NaN (Not a Number)
console.log(+numero2 /2 + unidade2); 