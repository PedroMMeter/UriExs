var input = require('fs').readFileSync('stdin', 'utf-8');

var lines = input.split("\n");

var valor = parseFloat(lines.shift());
var intervalo1 = '[0,25]';
var intervalo2 = '(25,50]';
var intervalo3 = '(50,75]';
var intervalo4 = '(75,100]';

if(valor >= 0 && valor <= 25.0000){
    console.log('Intervalo ' + intervalo1);
}
else if (valor >= 25.0001 && valor <= 50.0000){
    console.log('Intervalo ' + intervalo2);
}
else if(valor >= 50.0001 && valor <= 75.0000){
    console.log('Intervalo ' + intervalo3);
}
else if(valor >=75.0001 && valor <= 100.0000){
    console.log('Intervalo ' + intervalo4);
}
else{
    console.log('Fora de intervalo');
}
