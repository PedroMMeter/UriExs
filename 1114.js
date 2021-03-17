var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split("\n");

var senha = lines.shift();
var acesso = false;


while (senha != 2002){
    senha = lines.shift('\n');
    console.log('Senha Invalida');
}
acesso = true;

if (acesso == true){
    console.log('Acesso Permitido');
}
