//Receber o ano de nascimento e o ano atual, calcula e mostre a diferença de idade e quantos anos terá em 17 anos.
import prompt from 'prompt-sync'

const promptSetup = prompt();

let ano_nascimento: any = null;

while(typeof ano_nascimento !== 'number' || isNaN(ano_nascimento)) {
    ano_nascimento = Number(promptSetup('Insira a data de nascimento: '));
}

let ano_atual: any = null;

while(typeof ano_atual !== 'number' || isNaN(ano_atual)) {
    ano_atual = Number(promptSetup('Insira o ano atual: '));
}

console.log(`Sua idade atual é: ${ano_atual-ano_nascimento}\nDaqui a 17 anos, você terá: ${(ano_atual-ano_nascimento)+17}`)
