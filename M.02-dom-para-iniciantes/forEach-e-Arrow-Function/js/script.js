// const imgs = document.querySelectorAll('img');

// imgs.forEach(function (img, index, array) {
//     console.log(img, index, array);
// });

// const titulos = document.getElementsByClassName('titulo');
// const titulosArray = Array.from(titulos);

// titulosArray.forEach(function (item) {
//     console.log(item);
// });

// const imgs = document.querySelectorAll('img');

// imgs.forEach((item) => {
//     console.log(item);
// });

// const imgs = document.querySelectorAll('img');

// // argumento único não precisa de parênteses
// imgs.forEach(item => {
//     console.log(item);
// });

// // multiplos argumentos precisam de parênteses
// imgs.forEach((item, index) => {
//     console.log(item, index);
// });

// // sem argumentos precisa dos parênteses, mesmo vazio
// let i = 0;
// imgs.forEach(() => {
//     console.log(i++);
// });

// const imgs = document.querySelectorAll('img');

// imgs.forEach(item => 
//   console.log(item)
// );

// imgs.forEach(item => console.log(item));


// Mostre no console cada parágrado do site
const ps = document.querySelectorAll('p');

ps.forEach((p) => console.log(p));
// Mostre o texto dos parágrafos no console
ps.forEach((p) => console.log(p.innerText));
// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
    console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
    console.log(i++);
});
imgs.forEach(() => i++);