// const section = document.querySelector('.animais');

// section.clientHeight; // height + padding
// section.offsetHeight; // height + padding + border
// section.scrollHeight; // height total, mesmo dentro de scroll

// const section = document.querySelector('.animais');

// // Distância entre o topo do elemento e o topo da página
// section.offsetTop;

// // Distância entre o canto esquerdo do elemento
// // e o canto esquerdo da página
// section.offsetLeft;

const section = document.querySelector('.animais');

const rect = section.getBoundingClientRect();
rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento e o scroll

window.innerWidth; // width do janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height do janela
window.outerWidth; // soma a barra de endereço

window.pageYOffset; // distância total do scroll horizontal
window.pageXOffset; // distância total do scroll vertical

if (window.innerWidth < 600) {
    console.log('Tela menor que 600px');
}

const small = window.matchMedia('(max-width: 600px)');

if (small.matches) {
    console.log('Tela menor que 600px')
} else {
    console.log('Tela maior que 600px')
}

// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector('img');
const imgTop = img.offsetTop;

console.log(imgTop);
// Retorne a soma da largura de todas as imagens
function soma() {
    const imgs = document.querySelectorAll('img');
    let soma= 0;
    imgs.forEach((img) => {
        soma += img.offsetWidth;
        console.log(img.offsetWidth);
    });
    console.log(soma);
};
window.onload = function() {
    soma();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const link = document.querySelectorAll('a');

link.forEach((li)=>{
    const linkWidth = li.offsetWidth;
    const linkHeight = li.offsetHeight;

    if(linkWidth >= 48 && linkHeight >= 48){
        console.log(li, 'Tem o minimo recomendado!');
    } else {
        console.log(li,'Não tem o minimo recomendado!');
    }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const smallM = window.matchMedia('(max-width:720px)').matches;
if(smallM){
    const menu = document.querySelector('.menu');
    menu.classList.add ('menu-mobile');
}