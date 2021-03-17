var input = require('fs').readFileSync('stdin', 'utf-8');

var lines = input.split("\n");

var linha1 = lines.shift();
var linha2 = lines.shift();

var notas = linha1.split(' ');

var N1 = parseFloat(notas.shift()) * 2;
var N2 = parseFloat(notas.shift()) * 3;
var N3 = parseFloat(notas.shift()) * 4;
var N4 = parseFloat(notas.shift());

var media = parseFloat((N1 + N2 + N3 + N4) / 10);

console.log('Media: ' + media.toFixed(1));

if (media >= 7.0) {
    console.log('Aluno aprovado.');
}
else if (media < 5.0) {
    console.log('Aluno reprovado.');
}
else{
    var notaExame = parseFloat(linha2);
    var mediaFinal = parseFloat((media + notaExame) / 2);
    console.log('Aluno em exame.');
    console.log('Nota do exame: ' + notaExame.toFixed(1));

    if (mediaFinal >= 5.0) {
        console.log('Aluno aprovado.');
    }
    else {
        console.log('Aluno reprovado.');
    }
    console.log('Media final: ' + mediaFinal.toFixed(1));
}


