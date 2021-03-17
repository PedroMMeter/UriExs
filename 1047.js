const { parse } = require('node:path');

var input = require('fs').readFileSync('stdin', 'utf-8');
//var lines = input.split("\n");
var lines = input.split(" ");

var horaInicial = parseInt(lines.shift());
var minutoInicial = parseInt(lines.shift());
var horaFinal = parseInt(lines.shift());
var minutoFinal = parseInt(lines.shift());

var instInicio = (horaInicial * 60) + minutoInicial;
var instFim = (horaFinal * 60) + minutoFinal;

var duracao = 0;

if (instFim > instInicio){
    duracao = instFim - instInicio;
} else {
    duracao = (24 * 60) - instInicio + instFim;
}

var duracaoHoras = parseInt(duracao / 60);
var duracaoMin = parseInt(duracao % 60);

console.log('O JOGO DUROU ' + parseInt(duracaoHoras) + ' HORA(S) E ' + parseInt(duracaoMin) + ' MINUTO(S)');
