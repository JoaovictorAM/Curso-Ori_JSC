// const btn = document.querySelector('button');

// btn.addEventListener('click',handleclick);

// function handleclick(){
//     setTimeout(()=>{
//         this.classList.add('active');
//     },1000)
// }

// // for(let i = 0; i < 20;i++){
// //     setTimeout(()=>{
// //         console.log(i);
// //     },1000 * i);
// // }
function loop(texto) {
    console.log(texto);
}
setInterval(loop, 1000, 'Passou 1s');

// loop a cada segundo
let i = 0;
setInterval(() => {
    console.log(i++);
}, 1000);
const contarAte10 = setInterval(callback, 1000);

let i = 0;
function callback() {
    console.log(i++);
    if (i > 10) {
        clearInterval(contarAte10);
    }
}
