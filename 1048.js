var input = require('fs').readFileSync('stdin', 'utf-8');
//var lines = input.split("\n");
var lines = input.split(" ");

var salario = parseFloat(lines.shift());
var reajuste = 0;
var novoSalario = 0;
var percentual = 0;

if (salario >= 0 && salario <= 400.00) {
    novoSalario = salario + (salario * 0.15);
    reajuste = novoSalario - salario;
    percentual = '15 %';
}

else if (salario >= 400.01 && salario <= 800.00) {
    novoSalario = salario + (salario * 0.12);
    reajuste = novoSalario - salario;
    percentual = '12 %';
}

else if (salario >= 800.01 && salario <= 1200.00) {
    novoSalario = salario + (salario * 0.10);
    reajuste = novoSalario - salario;
    percentual = '10 %';
}

else if (salario >= 1200.01 && salario <= 2000.00) {
    novoSalario = salario + (salario * 0.07);
    reajuste = novoSalario - salario;
    percentual = '7 %';
}

else if (salario >= 400.01 && salario <= 800.00) {
    novoSalario = salario + (salario * 0.12);
    reajuste = novoSalario - salario;
    percentual = '12 %';
}
else if (salario >= 2000.01){
    novoSalario = salario + (salario * 0.04);
    reajuste = novoSalario - salario;
    percentual = '4 %';
}

console.log('Novo salario: ' + novoSalario.toFixed(2));
console.log('Reajuste ganho: ' + reajuste.toFixed(2));
console.log('Em percentual: ' + percentual);