var videoGames = ['Switch', 'PS4', 'XBox'];

videoGames[0] // Switch
videoGames[2] // Xbox

var videoGames = ['Switch', 'PS4', 'XBox'];

videoGames.pop(); // Remove o último item e retorna ele
videoGames.push('3DS'); // Adiciona ao final da array
videoGames.length; // 3

for (var numero = 0; numero < 10; numero++) {
    console.log(numero);
}
// Retorna de 0 a 9 no console
var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
// Retorna de 0 a 9 no console

var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
    console.log(videoGames[i]);
}
var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
    console.log(videoGames[i]);
    if (videoGames[i] === 'PS4') {
        break;
    }
}

var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
videoGames.forEach(function (item) {
    console.log(item);
});
// O argumento item será atribuído dinamicamente
var numero = 0;
var maximo = 50;
for (; numero < maximo;) {
    console.log(numero);
    numero++;
}
// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var aCopa = [1959, 1962, 1970, 1994, 2002];
// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
aCopa.forEach(function(item){
    console.log(`O brasil ganhou a copa de ${item}`);
});
// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for(i=0;i<=2;i++){
    console.log(frutas[i]);
    if (frutas[i] === 'Pera') {
        break;
    }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array
var ultima = frutas[frutas.length -1];
console.log(ultima);