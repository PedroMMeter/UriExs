var input = require('fs').readFileSync('stdin', 'utf-8');

var lines = input.split(' ');

var A = parseInt(lines.shift());
var B = parseInt(lines.shift());
var resultado = 0;

if(A > B){
    resultado = 24 - A + B
}

else{
    resultado = B - A;
}

if(A == B){
    resultado = 24;
}

console.log('O JOGO DUROU ' + resultado + ' HORA(S)');