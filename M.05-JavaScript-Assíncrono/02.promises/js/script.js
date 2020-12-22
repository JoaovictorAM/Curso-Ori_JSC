// const promesa = new Promise((resolve,reject)=>{
// 	let condicao = false;
// 	if(condicao){
// 		setTimeout(()=>{
// 			resolve({nome: 'João Victor', idade: 23});
// 		},1000);
// 	}else{
// 		reject(Error('Erro na promise!'));
// 	}
// });
// const retorno = promesa
// .then(resolucao=>{
// 	resolucao.profissao ='Programador';
// 	return resolucao;
// })
// .then(resolucao =>{
// 	console.log(resolucao);
// }, rejeitada=>{
// 	console.log(rejeitada);
// }).finally(()=>{
// 	console.log('teste');
// });

const login = new Promise((resolve)=>{
	setTimeout(()=>{
		resolve('Usuario logado');
	},1000);
});
const dados = new Promise((resolve)=>{
	setTimeout(()=>{
		resolve('Dados Carrgados');
	},1500);
});
const carregouTudo = Promise.all([login,dados]);
carregouTudo.then((resolucao)=>{
	console.log(resolucao);
});