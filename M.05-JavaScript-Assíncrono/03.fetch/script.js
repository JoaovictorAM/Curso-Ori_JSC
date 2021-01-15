const doc = fetch('./style.css');
const styleElement = document.createElement('style');
doc.then(r => r.text())
.then(body=>{
	styleElement.innerHTML = body;
	const conteudo = document.querySelector('.conteudo');
	conteudo.appendChild(styleElement);
});