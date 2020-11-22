// // const img = document.querySelector('img');

// // // elemento.addEventListener(event, callback, options)
// // img.addEventListener('click', function () {
// //     console.log('Clicou');
// // });

// // const img = document.querySelector('img');
// // function callback() {
// //     console.log('Clicou');
// // }

// // img.addEventListener('click', callback); // 🚀
// // img.addEventListener('click', callback()); // undefined
// // img.addEventListener('click', function () {
// //     console.log('Clicou');
// // })
// // img.addEventListener('click', () => {
// //     console.log('Clicou');
// // })

// // const img = document.querySelector('img');

// // function callback(event) {
// //     console.log(event);
// // }

// // img.addEventListener('click', callback);

// const animaisLista = document.querySelector('.animais-lista');

// function executarCallback(event) {
//     const currentTarget = event.currentTarget; // this
//     const target = event.target; // onde o clique ocorreu
//     const type = event.type; // tipo de evento
//     const path = event.path;
//     console.log(currentTarget, target, type, path);
// }

// animaisLista.addEventListener('click', executarCallback);

// const linkExterno = document.querySelector('a[href^="http"]');

// function clickNoLink(event) {
//     event.preventDefault();
//     console.log(event.currentTarget.href);
// }

// linkExterno.addEventListener('click', clickNoLink);

// const img = document.querySelector('img');

// function callback(event) {
//     console.log(this); // retorna a imagem
//     console.log(this.getAttribute('src'));
// }

// img.addEventListener('click', callback);

// // const h1 = document.querySelector('h1');

// // function callback(event) {
// //     console.log(event.type, event);
// // }

// // h1.addEventListener('click', callback);
// // h1.addEventListener('mouseenter', callback);
// // window.addEventListener('scroll', callback);
// // window.addEventListener('resize', callback);
// // window.addEventListener('keydown', callback);

// function handleKeyboard(event) {
//     if (event.key === 'a')
//         document.body.classList.toggle('azul');
//     else if (event.key === 'v')
//         document.body.classList.toggle('vermelho');
// }

// window.addEventListener('keydown', callback);

const imgs = document.querySelectorAll('img');

function imgSrc(event) {
    const src = event.currentTarget.getAttribute('src');
    console.log(src);
}

imgs.forEach((img) => {
    img.addEventListener('click', imgSrc);
});



// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksI = document.querySelectorAll('a[href^="#"]');
function headlelink (e){
    e.preventDefault();
    linksI.forEach((i)=>{
        i.classList.remove('ativo');
    });
    this.classList.add('ativo');
}

linksI.forEach((i)=>{
    i.addEventListener('click', headlelink);
});
// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todos = document.querySelectorAll('body *');

function elementClick (event){
    console.log(event.currentTarget);
}

todos.forEach((e)=>{
    e.addEventListener('click', elementClick)
});
// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// function elementClick (event){
//     event.currentTarget.remove();
// }

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function teclaT (event){
    if(event.key === 't'){
        document.documentElement.classList.toggle('textoM');
    }
}
window.addEventListener('keydown', teclaT);