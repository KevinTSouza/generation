import readline from 'readline-sync';

//Escreva um algoritmo, que leia 2 números inteiros via teclado, onde o primeiro número deve ser menor do que o segundo número. Caso contrário, deve ser exibida uma mensagem na tela
//  informando que o intervalo é inválido e sair do programa. 
//No intervalo informado, mostre na tela todos os números que são múltiplos de 3 e 5

const multiplos = [];
let num1 = readline.questionInt('Digite o primeiro numero do intervalo (deve ser menor que o segundo): ');
let num2 = readline.questionInt('Digite o segundo numero do intervalo (deve ser maior que o primeiro): ');

if (num1 > num2) {
    console.log('Intervalo invalido!');
} else {
    for (let i = num1; i < num2; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            multiplos.push(i);
        }
    }
    console.log(`No intervalo entre ${num1} e ${num2}:\n ${multiplos.join(' é múltiplo de 3 e 5\n ')} é múltiplo de 3 e 5`);
}
