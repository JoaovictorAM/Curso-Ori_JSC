console.log(typeof Array.from212 !== 'undefined');

// Liste 5 objetos nativos
Object
String
Array
Function
Number
// Liste 5 objetos do browser
history
window
document
HTMLCollection
NodeList
// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox
if (typeof document.webkitHidden !=='undefined'){
    console.log('existe');
}else{
    console.log('Não existe');
}
if (typeof document.webkitVisibilityState !=='undefined'){
    console.log('existe');
}else{
    console.log('Não existe');
}
