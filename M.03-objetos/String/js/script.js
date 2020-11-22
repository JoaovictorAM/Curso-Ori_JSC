// const comida = 'pizza';
// const agua = new String('agua');

// console.log(comida.length);
// console.log(agua.length);

// const frase = 'A melhor comida';

// console.log(frase[frase.length - 1]);
// console.log(frase.charAt(frase.length));

// const frase = 'A melhor linguagem é ';
// const linguagem = 'JavaScript';


// const frasefinal = frase + linguagem;
// const fraseCompleta = frase.concat(linguagem, '!!');

// console.log(frasefinal);
// console.log(fraseCompleta);

// const fruta = 'Banana';
// const listaFrutas = 'Melancia, Banana, Laranja';

// console.log(listaFrutas.includes(fruta, 14)); // true
// console.log(fruta.includes(listaFrutas)); // false

// console.log(fruta.endsWith('nana')); // true
// console.log(fruta.startsWith('Ba')); // true
// console.log(fruta.startsWith('na')); // false

// const transacao1 = 'Depósito de cliente';
// const transacao2 = 'Depósito de fornecedor';
// const transacao3 = 'Taxa de camisas';

// console.log(transacao1.slice(0, 3)); // Dep
// console.log(transacao2.slice(0, 3)); // Dep
// console.log(transacao3.slice(0, 3)); // Tax

// transacao1.slice(12); // cliente
// transacao1.slice(-4); // ente
// transacao1.slice(3, 6); // ósi

// console.log(fruta.indexOf('n'));
// console.log(fruta.lastIndexOf('n'));

// const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

// listaPrecos.forEach((preco) => {
//     console.log(preco.padStart(10, '.'));
// })

// console.log(listaPrecos[0].padStart(10, '.')); // .....R$ 99
// console.log(listaPrecos[0].padEnd(10, '.'));   // R$ 99.....

// let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
// listaItens = listaItens.replace(/[ ]+/g, ', ');

// let preco = 'R$ 1200,43';
// preco = preco.replace(',', '.'); // 'R$ 1200.43'

// const listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
// const arrayItens = listaItens.split(' ');
// console.log(arrayItens);

// const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
// const htmlArray = htmlText.split('div');
// const htmlNovo = htmlArray.join('section');
// console.log(htmlArray);
// console.log(htmlNovo);

// const sexo1 = 'Feminino';
// const sexo2 = 'feminino';
// const sexo3 = 'FEMININO';

// console.log(sexo1.toUpperCase()==='FEMININO');




// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
        descricao: 'Taxa do Pão',
        valor: 'R$ 39',
    },
    {
        descricao: 'Taxa do Mercado',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 99',
    },
    {
        descricao: 'Taxa do Banco',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 49',
    },
];
let taxaTotal = 0;
transacoes.forEach((item) => {
    const nLimpo = +item.valor.replace('R$ ', '');
    if (item.descricao.startsWith('Taxa')) {
        taxaTotal += nLimpo;
    }
});
console.log(taxaTotal);
let RecebimentoTot = 0;
transacoes.forEach((item) => {
    const nLimpo = +item.valor.replace('R$ ', '');
    if (item.descricao.startsWith('Recebimento')) {
        RecebimentoTot += nLimpo;
    }
});
console.log(RecebimentoTot);

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const arrayTransporte = transportes.split(';');
console.log(arrayTransporte);

// Substitua todos os span's por a's
let html = `<ul>
                    <li><span>Sobre</span></li>
                    <li><span>Produtos</span></li>
                    <li><span>Contato</span></li>
            </ul>`;

let arrayA =html.split('span').join('a');
console.log(arrayA);             

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase.charAt(frase.length - 1));

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
let totalT =0;
transacoes2.forEach((item)=>{
    item = item.toLowerCase().trim().slice(0,4);
    if(item == 'taxa'){
        totalT++;
    }    
    console.log(totalT);
})
