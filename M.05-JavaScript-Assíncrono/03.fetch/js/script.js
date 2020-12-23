const doc = fetch('./doc.txt');
doc.then((resolucao)=>{
	console.log(resolucao);
});