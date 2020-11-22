const menu = document.querySelector('.menu');

menu.className; // string
menu.classList; // lista de classes
menu.classList.add('ativo');
menu.classList.add('ativo', 'mobile'); // duas classes
menu.classList.remove('ativo');
menu.classList.toggle('ativo'); // adiciona/remove a classe
menu.classList.contains('ativo'); // true ou false
menu.classList.replace('ativo', 'inativo');

const animais = document.querySelector('.animais');

animais.attributes; // retorna todos os atributos
animais.attributes[0]; // retorna o primeiro atributo

const img = document.querySelector('img');

img.getAttribute('src'); // valor do src
img.setAttribute('alt', 'Texto Alternativo'); // muda o alt
img.hasAttribute('id'); // true / false
img.removeAttribute('alt'); // remove o alt

img.hasAttributes(); // true / false se tem algum atributo


// const animais = document.querySelector('.animais');

// animais.className; // string com o nome das classes
// animais.className = 'azul'; // substitui completamente a string
// animais.className += ' vermelho'; // adiciona vermelho à string

// animais.attributes = 'class="ativo"'; // não funciona, read-only


// Adicione a classe ativo a todos os itens do menu
const ex1 = document.querySelectorAll('.menu a');

ex1.forEach((item) => {
    item.classList.add('ativo');
});
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
ex1.forEach((item) => {
    item.classList.remove('ativo');
});

ex1[0].classList.add('ativo');
// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');

imgs.forEach((i) => {
    console.log(i.hasAttribute('alt'));
});
// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"');

link.setAttribute('href','https://google.com');
