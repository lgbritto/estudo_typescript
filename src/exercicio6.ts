/*Receba os valores em X e Y, troque seus valores e mostre na tela
Bonus pra quem usar menos variaveis*/
import prompt from 'prompt-sync'

const promptSetup = prompt();

let valorinicialX: any = null;

while(typeof valorinicialX !== 'number' || isNaN(valorinicialX)) {
    valorinicialX = Number(promptSetup('Insira o valor de X: '));
}

let valorY: any = null;

while(typeof valorY !== 'number' || isNaN(valorY)) {
    valorY = Number(promptSetup('Insira o valor de Y: '))
}

let valorX: any = valorinicialX;
valorX = valorY;
valorY = valorinicialX;

console.log(`O novo valor de X: ${valorX}\nO novo valor de Y: ${valorY}`)