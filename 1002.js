var input = require('fs').readFileSync('stdin', 'utf-8');

var lines = input.split('\n');

//Área do Circulo.

var pi = 3.14159;

var raio = parseFloat(lines.shift());

var area = pi * Math.pow(raio, 2);

console.log("A=" + area.toFixed(4));