var input = require('fs').readFileSync('stdin', 'utf-8');

var lines = input.split(' ');

var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());
var C = parseFloat(lines.shift());

var perimetro = (A + B + C);
var area = ((A + B) * C) / 2;

if ((A < (B + C)) && (B < (A + C)) && (C < (B + A))) {
    console.log('Perimetro = ' + perimetro.toFixed(1));
}
else {
    console.log('Area = ' + area.toFixed(1));
}