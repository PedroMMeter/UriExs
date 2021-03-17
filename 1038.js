var input = require('fs').readFileSync('stdin', 'utf-8');

var lines = input.split(' ');

var pedido = parseFloat(lines.shift());
var quantia = parseInt(lines.shift());

if(pedido == 1){
    pedido = parseFloat(4.0001);
}
if(pedido == 2){
    pedido = parseFloat(4.50);
}
if(pedido == 3){
    pedido = parseFloat(5.0001);
}
if(pedido == 4){
    pedido = parseFloat(2.00);
}
if(pedido == 5){
    pedido = parseFloat(1.50);
}

var total = pedido * quantia;

console.log('Total: R$ ' + total.toFixed(2));