const animais = document.getElementById('animais');
// Retorne no console todas as imagens do site
const imgR = document.querySelectorAll('img')
console.log(imgR);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgP = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imgP);

// Selecione todos os links internos (onde o href começa com #)
const links = document.querySelectorAll('[href^="#"]');
console.log(links);

// Selecione o primeiro h2 dentro de .animais-descricao
const ph2 = document.querySelector('.animais-desc h2');
console.log(ph2);
// Selecione o último p do site
const ps =document.querySelectorAll('p');
console.log(ps[ps.length-1]);