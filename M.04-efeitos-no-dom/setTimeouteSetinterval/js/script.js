// Mude a cor da tela para azul e depois para vermelho a cada 2s.
function mudarClasse (){
    document.body.classList.toggle('active');
}
setInterval(mudarClasse,2000);
// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const tempo = document.querySelector('.tempo');

iniciar.addEventListener('click',initTempo);
pausar.addEventListener('click',pauseTempo);
pausar.addEventListener('dblclick',resetTempo);
let i = 0;
let timer;

function initTempo(){
    timer = setInterval(()=>{
        tempo.innerText = i++;
    },100);
    iniciar.setAttribute('disabled', '');
}
function pauseTempo(){
    clearInterval(timer);
    iniciar.removeAttribute('disabled');
}
function resetTempo(){
    tempo.innerText =0;
    i=0;
}