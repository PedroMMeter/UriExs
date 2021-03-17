var input = require('fs').readFileSync('stdin', 'utf-8');

var lines = input.split(' ');

//ORDENAR EM ORDEM CRESCENTE

var A = parseInt(lines.shift());
var B = parseInt(lines.shift());
var C = parseInt(lines.shift());

function crescente(){
    if(C > A && C > B && A > B){
        console.log(B);
        console.log(A);
        console.log(C);
    }
    if(B > C && B > A && C > A){
        console.log(A);
        console.log(C);
        console.log(B);
    }
    if(A > C && A > B && C > B){
        console.log(B);
        console.log(C);
        console.log(A);
    }
    if(A > B && A > C && B > C){
        console.log(C)
        console.log(B)
        console.log(A)
    }
    if (B > A && B > C && A > C) {
        console.log(C);
        console.log(A);
        console.log(B);
    }
    if(C > B && C > A && B > A){
        console.log(A);
        console.log(B);
        console.log(C);
    }
}
function leitura(){
    console.log();
    console.log(A);
    console.log(B);
    console.log(C);
}
crescente();
leitura();


