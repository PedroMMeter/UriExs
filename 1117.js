var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split("\n");

var nota = parseFloat(lines.shift());
var notavalida = [];

while (notavalida.length != 2) {

    if (nota > 0 && nota <= 10) {
      notavalida.push(nota);
    }
    else {
        console.log('nota invalida')
    }
    nota = parseFloat(lines.shift());

}
console.log('media = ' + ((notavalida[0] + notavalida[1]) /2));