//Receber o valor de um depósito, calcular e mostrar o valor após 1 mês de aplicação, sabendo que rende 1.3% ao mês.
import prompt from 'prompt-sync'

const promptSetup = prompt();

let deposito: any = null;

while(typeof deposito !== 'number' || isNaN(deposito)) {
    deposito = Number(promptSetup('Insira o valor do depósito: '));
}

console.log(`Valor original do depósito: ${deposito}\nDepósito depois de um mês: ${Math.round(deposito*1.013)} (+1.3%)`)
