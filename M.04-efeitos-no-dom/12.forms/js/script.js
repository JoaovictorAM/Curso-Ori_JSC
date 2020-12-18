const contato = document.querySelector('#contato');
const textoSpan = document.querySelector('.texto');

function handleKeyUp(event){
  const target = event.target;
  
  console.log(event.target.value);
  textoSpan.innerText = event.target.value;
}
contato.addEventListener('change', handleKeyUp);