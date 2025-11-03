//Escreva um algoritmo, que leia números inteiros via teclado, até que o número zero seja digitado. Ao final, mostre na tela a média de todos os números digitados, 
// que sejam múltiplos de 3.

import readline from 'readline-sync';

let numero;
let soma = 0;
let contador = 0;

do {
    numero = parseInt(readline.question('Digite um numero (0 para sair): '));
    if (numero !== 0 && numero % 3 === 0) {
        soma += numero;
        contador++;
    }
} while (numero !== 0);

if (contador > 0) {
    let media = soma / contador;
    console.log(`A media de todos os números múltiplos de 3 é: ${media.toFixed(2)}`);
} else {
    console.log('Nenhum número múltiplo de 3!');
}