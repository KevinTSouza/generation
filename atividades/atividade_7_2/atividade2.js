import readline from 'readline-sync';

// Escreva um algoritmo, que leia 10 números inteiros via teclado e mostre na tela quantos números são pares e quantos número são ímpares.

let countPares = 0;
let countImpares = 0;

for (let i = 0; i < 10; i++) {
    const numero = parseInt(readline.question(`Digite o ${i + 1} numero: `));
    if (numero % 2 === 0) {
        countPares++;
    } else {
        countImpares++;
    }
}

console.log(`Total de números pares: ${countPares}\nTotal de números ímpares: ${countImpares}`);