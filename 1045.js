var input = require('fs').readFileSync('stdin', 'utf-8');
//var lines = input.split("\n");
var lines = input.split(" ");

var n1 = parseFloat(lines.shift());
var n2 = parseFloat(lines.shift());
var n3 = parseFloat(lines.shift());

var A, B, C;

// testes pra n1 sendo o maior valor
if (n1 > n2 && n1 > n3) {
    A = n1;
    if (n2 > n3) {
        B = n2;
        C = n3;
    }
    else {
        B = n3;
        C = n2;
    }
}

// testes pra n2 sendo o maior valor
else if (n2 > n3) {
    A = n2;
    if (n1 > n3) {
        B = n1;
        C = n3;
    }
    else {
        B = n3;
        C = n1;
    }
}

//teste pra n3 sendo o maior valor
else {
    A = n3;
    if (n1 > n2) {
        B = n1;
        C = n2;
    }
    else {
        B = n2;
        C = n1;
    }
}

if (A >= (B + C)) {
    console.log('NAO FORMA TRIANGULO');
} else {
    if (Math.pow(A, 2) == Math.pow(B, 2) + Math.pow(C, 2)) {
        console.log('TRIANGULO RETANGULO');
    }
    else if (Math.pow(A, 2) > Math.pow(B, 2) + Math.pow(C, 2)) {
        console.log('TRIANGULO OBTUSANGULO');
    }
    else {
        console.log('TRIANGULO ACUTANGULO');
    }

    //teste para equilatero / isosceles
    if (A == B && B == C) {
        console.log('TRIANGULO EQUILATERO');
    }
    else if (A == B || A == C || B == C) {
        console.log('TRIANGULO ISOSCELES');
    }
}