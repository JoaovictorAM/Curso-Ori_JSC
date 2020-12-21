const contato = document.querySelector('#contato');
const textoSpan = document.querySelector('.texto');
const dados = {};
function handlechange(event){
  const target = event.target;
  // if(!target.checkValidity()){
  //   target.classList.add('invalido');
  //   //target.setCustomValidity('Esse campo é importante!');
  //   target.nextElementSibling.innerText = target.validationMessage;
  // }
  // textoSpan.innerText = event.target.value;

  //document.body.style.backgroundColor = target.value;
  dados[target.name] = target.value;
}
contato.addEventListener('change', handlechange);