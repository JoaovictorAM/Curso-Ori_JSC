//window.alert('oi');

const  h1S = document.querySelector('h1');

const h1Classes = h1S.classList;
h1S.addEventListener('click', function(){
    console.log(`Clicou em ${h1S.innerText}`);
})
// Retorne o url da página atual utilizando o objeto window
const hrefP=window.location.href;
console.log(hrefP);
// Seleciona o primeiro elemento da página que
// possua a classe ativo
const elementoA =document.querySelector('.ativo');
console.log(elementoA);
// Retorne a linguagem do navegador
const linguagem = window.navigator.language;
console.log(linguagem);
// Retorne a largura da janela 
const larguraJ = window.innerWidth;
console.log(larguraJ);