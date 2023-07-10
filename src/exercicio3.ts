// 3 - Receber base e altura do triângulo, calcular e mostrar a área
import prompt from 'prompt-sync'

let base_triangulo: any = null;

const promptSetup = prompt();

while(typeof base_triangulo !== 'number' || isNaN(base_triangulo)) {
    base_triangulo = Number(promptSetup('Insira o comprimento da base: '));
}

let altura_triangulo: any = null;

while(typeof altura_triangulo !== 'number' || isNaN(altura_triangulo)) {
    altura_triangulo = Number(promptSetup('Insira o comprimento da altura: '));
}

console.log(`A área do triângulo é: ${(base_triangulo * altura_triangulo)/2}`)