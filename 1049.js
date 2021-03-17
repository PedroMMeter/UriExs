var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\r\n');

var tipo = lines.shift();
var especie = lines.shift();
var alimentacao = lines.shift();

if (tipo == "vertebrado") {
    if (especie == 'ave') {
        if (alimentacao == 'carnivoro'){
            console.log('aguia');
        }
        else{ //onivoro
            console.log('pomba');
        }
    } else { //mamifero
        if (alimentacao == 'onivoro'){
            console.log('homem');
        }
        else {//herbivoro
            console.log('vaca');
        }
    }
}
else { //invertebrado
    if (especie == 'anelideo'){
        if (alimentacao == 'hematofago'){
            console.log('sanguessuga');
        }
        else {
            console.log('minhoca');
        }
    }
    else {
        if (alimentacao == 'hematofago'){
            console.log('pulga');
        }
        else {
            console.log('lagarta');
        }
    }
}
