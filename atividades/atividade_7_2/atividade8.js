//Elabore um algoritmo que leia 10 números inteiros e armazene em um vetor. Em seguida, mostre na tela:
//Todos os elementos dos índices ímpares do vetor 
//Todos os elementos do vetor que são números pares
//A Soma de todos os elementos do vetor
//A Média de todos os elementos do vetor, armazenada em uma variável do tipo real

import readline from 'readline-sync';

let numeros = [];
let soma = 0;
let media = 0;
let numerosImpares = [];
let numerosPares = [];

for (let i = 0; i < 10; i++) {
    let numero = parseInt(readline.question(`Digite o ${i + 1} numero: `));
    numeros.push(numero);
    soma += numero;
}
for (let i = 0; i < numeros.length; i++) {
    if (i % 2 !== 0) {
        numerosImpares.push(numeros[i]);
    }
    if (numeros[i] % 2 === 0) {
        numerosPares.push(numeros[i]);
    }
}
media = soma / numeros.length;
console.log(`Números nos índices ímpares:\n${numerosImpares.join(' ')}\nNúmeros pares:\n${numerosPares.join(' ')}\nSoma: ${soma}\nMédia: ${media.toFixed(2)}`);