console.log(Number.isNaN(NaN));
console.log(Number.isInteger(10.1));
console.log(Number.parseFloat('35353,33'));
console.log(Number.parseInt(225.5));
const preco1 = 10.99222;
console.log(preco1.toFixed(2));
let preco = 59.49;
preco = preco.toLocaleString('en-US', {style: 'currency', currency: 'USD'}); // $59.49
console.log(preco);
preco = preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}); // R$ 59,49
console.log(preco);


const aleatorio = Math.floor(Math.random() * (40 - 20 + 1)) + 20;;
console.log(aleatorio);