const doc = fetch('./sobre.html');
const div = document.createElement('div')
doc.then(r => r.text())
.then(body=>{
	div.innerHTML = body;
	const titulo = div.querySelector('h1');
	document.querySelector('h1').innerText = titulo.innerText;
});