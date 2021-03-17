var input = require('fs').readFileSync('stdin', 'utf-8');

var lines = input.split("\n");

var tamanho = lines.length;
var contador = 1;

var coordenada = (lines.shift().split(' '));
var X = parseInt(coordenada.shift());
var Y = parseInt(coordenada.shift());

while (X != 0 && Y != 0 && contador <= tamanho) {

    if (X > 0 && Y > 0) {
        console.log('primeiro');
    }else if (X < 0 && Y > 0) {
        console.log('segundo');
    }else if (X < 0 && Y < 0) {
        console.log('terceiro');
    }else if (X > 0 && Y < 0) {
        console.log('quarto');
    }
    coordenada = (lines.shift().split(' '));
    X = parseInt(coordenada.shift());
    Y = parseInt(coordenada.shift());
    contador++;
}