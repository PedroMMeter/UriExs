var input = require('fs').readFileSync('stdin', 'utf-8');
//var lines = input.split("\n");
var lines = input.split(" ");

var renda = parseFloat(lines.shift()).toFixed(2);
var resultado = 0;

if (renda >= 0.00 && renda <= 2000) {
    console.log('Isento');
}
else {
    if (renda >= 2000.01 && renda <= 3000) {
        resto = renda - 2000.01;
        resultado = resto * 0.08;
    }
    else if (renda >= 3000.01 && renda <= 4500) {
        resto = renda - 3000.01;
        resultado = (resto * 0.18) + (1000 * 0.08);
    }
    else {
        resto = renda - 4500.01;
        resultado = (resto * 0.28) + (1500 * 0.18) + (1000 * 0.08);
    }
    console.log('R$ ' + resultado.toFixed(2));
}
