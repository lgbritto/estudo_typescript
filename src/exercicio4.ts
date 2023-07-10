//Receber temperatura em graus Celsius. Calcular e mostrar em fahrenheit F = (9 * C + 160) / 5
import prompt from 'prompt-sync'

const promptSetup = prompt();

let Celsius: any = null;

while(typeof Celsius !== 'number' || isNaN(Celsius)) {
    Celsius = Number(promptSetup('Insira a temperatura em C°: '));
}

console.log(`${Celsius} °Celsius é igual a: ${(9 * Celsius + 160)/5} °Fahrenheit`)