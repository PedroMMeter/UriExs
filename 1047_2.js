var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split(" ");

var horaInicial = parseInt(lines.shift());
var minutoInicial = parseInt(lines.shift());
var horaFinal = parseInt(lines.shift());
var minutoFinal = parseInt(lines.shift());

var duracao_h = horaFinal - horaInicial;

if (duracao_h < 0) {
    duracao_h = 24 + (horaFinal - horaInicial);
}

var duracao_m = minutoFinal - minutoInicial;

if (duracao_m < 0) {
    duracao_m = 60 + duracao_m ;
    duracao_h--;
}

if (horaInicial == horaFinal && minutoInicial == minutoFinal) {
    console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)");
}
else {
    console.log("O JOGO DUROU " + duracao_h + " HORA(S) E " + duracao_m + " MINUTO(S)");
}
