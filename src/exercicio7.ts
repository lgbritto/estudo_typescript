//Receber comprimento, largura e altura de um paralelepipedo, calcular e mostrar seu volume
import prompt from 'prompt-sync'

const promptSetup = prompt();

let comprimento: any = null;

while(typeof comprimento !== 'number' || isNaN(comprimento)) {
    comprimento = Number(promptSetup('---Calculador de volume de Paralelepípedo---\nInsira o comprimento: '));
}

let largura: any = null;

while(typeof largura !== 'number' || isNaN(largura)) {
    largura = Number(promptSetup('Insira a largura: '));
}

let altura: any = null;

while(typeof altura !== 'number' || isNaN(altura)) {
    altura = Number(promptSetup('Insira a altura: '));
}

console.log(`\nO volume do paralelepípedo é: ${comprimento * largura * altura}`)
