// Dado um vetor contendo 10 números inteiros não ordenados e não repetidos, construa um algoritmo que consiga pesquisar dados no vetor, 
// onde o usuário irá digitar um número e o programa deve exibir na tela a posição deste número no vetor. Caso o número não seja encontrado, 
// a mensagem: “Não foi encontrado!” deve ser exibida na tela.
import readline from 'readline-sync';

let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
let numeroProcurado = parseInt(readline.question("Digite um numero que voce deseja encontrar: "));
let posicao = -1;

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === numeroProcurado) {
        posicao = i;
        break;
    }
}

if (posicao !== -1) {
    console.log(`O número ${numeroProcurado} está localizado na posição: ${posicao}`);
} else {
    console.log(`O número ${numeroProcurado} não foi encontrado!`);
}