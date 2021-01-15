const doc = fetch('https://viacep.com.br/ws/01001000/json/');

doc.then((response) =>{ 
	console.log(response.status);
});