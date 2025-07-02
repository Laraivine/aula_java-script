function soma(a, b){
    return a + b;
}
const exibeSoma = (a, b) => alert(soma(a, b));

function exibeMensagem(){
if(true){
    var escopoGlobal = 'IFAL';
    let escopoBloco = 'Lara'
    console.log(escopoBloco);
}
console.log(escopoBloco);
console.log(escopoGlobal);
}
//exibeMensagem();

function checagemDeTipos(){
    let tipoTexto = 'Texto';
    console.log(typeof tipoTexto);
    let tipoNumerico = 42;
    console.log(typeof tipoNumerico);
    let tipoBoleano = true;
    console.log(typeof tipoBoleano);
}