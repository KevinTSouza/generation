import readline from 'readline-sync';

// Escreva um algoritmo, que leia a idade de várias pessoas (números inteiros), via teclado e mostre na tela o total de pessoas cuja idade seja menor que 21 anos e o total de pessoas
// cuja idade, seja maior que 50 anos. A leitura dos dados deve ser finalizada ao digitar uma idade negativa.

let menorDe21 = 0;
let maiorDe50 = 0;

while (true) {
    let idade = parseInt(readline.question("Digite uma idade: "));
    if (idade < 0) {
        break;
    }
    if (idade < 21) {
        menorDe21++;
    }
    if (idade > 50) {
        maiorDe50++;
    }
}

console.log(`Total de pessoas menores de 21 anos: ${menorDe21}\nTotal de pessoas maiores de 50 anos: ${maiorDe50}`);