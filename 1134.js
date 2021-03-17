var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\r\n');

var contAlcool = 0;
var contGasolina = 0;
var contDiesel = 0;
var voto = parseInt(lines.shift());
var numVotos = lines.length;

while (voto != 4 && numVotos == lines.length) {
    if (voto == 1) {
        contAlcool++
    } else if (voto == 2) {
        contGasolina++
    } else if (voto == 3) {
        contDiesel++
    }
    voto = parseInt(lines.shift());

    numVotos--;
}

console.log('MUITO OBRIGADO');
console.log('Alcool: ' + contAlcool);
console.log('Gasolina: ' + contGasolina);
console.log('Diesel: ' + contDiesel);



