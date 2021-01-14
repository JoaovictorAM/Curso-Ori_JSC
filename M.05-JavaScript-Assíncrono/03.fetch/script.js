const sobre = fetch('./sobre.html');
const divEx = document.createElement('div');
sobre.then((r)=>{
	r.text();
}).then((body)=>{
	divEx.innerHTML=body;
	const titulo = divEx.querySelector('h1');
	document.querySelector('h1').innerText = titulo.innerText;
})
