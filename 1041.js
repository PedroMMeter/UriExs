var input = require('fs').readFileSync('stdin', 'utf-8');
//var lines = input.split("\n");
var lines = input.split(' ');

var X = parseFloat(lines.shift());
var Y = parseFloat(lines.shift());

if (X == 0 && Y == 0) {
    console.log('Origem');
}
else if (X == 0) {
    console.log('Eixo Y')
}
else if (Y == 0) {
    console.log('Eixo X');
}
else if (X > 0 && Y > 0) {
    console.log('Q1');
}
else if (X < 0 && Y > 0) {
    console.log('Q2');
}
else if (X < 0 && Y < 0) {
    console.log('Q3');
}
else if (X > 0 && Y < 0) {
    console.log('Q4');
}
