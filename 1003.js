var input = require('fs').readFileSync('stdin', 'utf-8');

var lines = input.split('\n');

//Soma das variáveis.

var A = parseInt(lines.shift());
var B = parseInt(lines.shift());

var soma = A + B;

console.log("SOMA = " + soma);