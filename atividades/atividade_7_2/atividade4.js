//Uma empresa desenvolveu uma pesquisa interna para conhecer os colaboradores da área de Desenvolvimento e precisam de um sistema para analisar os dados. 
// Escreva um algoritmo, que leia via teclado as seguintes informações de cada colaborador:
// Idade, Identidade de Gen(numero) (1 – Mulher Cis, Homem Cis, Não Binário, Mulher Trans, Homem Trans, Outros), Pessoa Dev(1 – Front-End, Back-End, Full-Stack, mobile)
// Após digitar o Tipo de Pessoa Desenvolvedora, o sistema deverá perguntar ao usuário se ele deseja continuar a leitura dos dados de um novo colaborador ou não (S/N).

import readline from 'readline-sync';

let devBackEnd = 0;
let mulheresCisTransFront = 0;
let homensCisTransMobile40 = 0;
let naoBinariosFullStackMenores30 = 0;
let totalColaboradores = 0;
let mediaIdadeTotal = 0;

while (true) {
    let idade = readline.questionInt('Idade (Número Inteiro): ');
    let identidadeGenero = readline.questionInt('Identidade de Gênero (1 Mulher Cis, 2 Homem Cis, 3 Não Binário, 4 Mulher Trans, 5 Homem Trans, 6 Outros): ');
    let pessoaDev = readline.questionInt('Pessoa Desenvolvedora (1 Backend, 2 Frontend, 3 Mobile, 4 FullStack): ');

    totalColaboradores++;
    mediaIdadeTotal += idade;
    if (pessoaDev === 1) {
        devBackEnd++;
    }
    if ((identidadeGenero === 1 || identidadeGenero === 4) && pessoaDev === 2) {
        mulheresCisTransFront++;
    }
    if ((identidadeGenero === 2 || identidadeGenero === 5) && pessoaDev === 3 && idade > 40) {
        homensCisTransMobile40++;
    }
    if (identidadeGenero === 3 && pessoaDev === 4 && idade < 30) {
        naoBinariosFullStackMenores30++;
    }
    let continuar = readline.question('Deseja continuar a leitura dos dados de um novo colaborador? (S/N): ').toUpperCase();
    if (continuar !== 'S') {
        break;
    }
}

const mediaIdade = totalColaboradores > 0 ? (mediaIdadeTotal / totalColaboradores).toFixed(2) : 0;

console.log(`Total de pessoas desenvolvedoras Backend: ${devBackEnd}\n 
    Total de Mulheres Cis e Trans desenvolvedoras Frontend: ${mulheresCisTransFront}\n
    Total de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${homensCisTransMobile40}\n
    Total de Pessoas Não Binárias desenvolvedoras Full-Stack menores de 30 anos: ${naoBinariosFullStackMenores30}\n
    O número total de pessoas que responderam à pesquisa: ${totalColaboradores}\n
    A média de idade das pessoas que responderam à pesquisa: ${mediaIdade}`);


