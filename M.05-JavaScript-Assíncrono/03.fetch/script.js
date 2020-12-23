const style = fetch('./style.css');

style.then((resolucao)=>{
	return resolucao.text();
}).then((body)=>{
	console.log(body);
	const conteudo = document.querySelector('.conteudo');
	conteudo.innerText = body;
});