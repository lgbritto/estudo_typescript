//Ler salário de um funcionário, mostrar o salário com aumento de 15%

/*
definir variável
ler input do usuário
multiplicar valor por 1.15

correto?



*/
import prompt from 'prompt-sync'

const promptSetup = prompt();

let salario: any = null;

while(typeof salario !== 'number' || isNaN(salario)) {
    salario = Number(promptSetup('Insira o salario: '));
}

console.log(`Seu salario com um incremento de 15% é: ${salario * 1.15}`);