/*Receber coeficientes A, B e C de uma equação de 2º grau (AX² + BX + C = 0). Calcular e mostrar as raizes reais
Lembrando: possui 2 raizes
Raiz quadrada é a mesma coisa de elevar o numero a 0.5 (raiz de 2 é igual 2 ** 0.5)*/
import prompt from 'prompt-sync'

const promptSetup = prompt();

let coeficiente_a: any = null;

while (typeof coeficiente_a !== 'number' || coeficiente_a === 0 || isNaN(coeficiente_a)) {
    coeficiente_a = Number(promptSetup('Insira o valor de A: '));
}

let coeficiente_b: any = null;

while (typeof coeficiente_b !== 'number' || isNaN(coeficiente_b)) {
    coeficiente_b = Number(promptSetup('Insira o valor de B: '));
}

let coeficiente_c: any = null;

while (typeof coeficiente_c !== 'number' || isNaN(coeficiente_c)) {
    coeficiente_c = Number(promptSetup('Insira o valor de C: '));
}

const discriminante: any = (coeficiente_b * coeficiente_b) - (4 * coeficiente_a * coeficiente_c);

if(discriminante > 0) {
    let x1: any = (-coeficiente_b + Math.sqrt(discriminante)) / (2 * coeficiente_a)
    let x2: any = (-coeficiente_b - Math.sqrt(discriminante)) / (2 * coeficiente_a)
    console.log(`Raiz real 1 = ${x1} \nRaiz 2 = ${x2}`);    
}

else if(discriminante === 0) {
    let x1: any = -coeficiente_b/(2*coeficiente_a);
    console.log(`Raíz real 1 e 2 = ${x1}`);
}

else {
    console.log(`Não há raíz real.`);
}

/*else {
    let partereal: any = coeficiente_b/(2*coeficiente_a);
    let parteimaginaria: any = (0.5 * (-discriminante))/(2*coeficiente_a);
    console.log (`raízes complexas e diferentes: ${partereal} ${parteimaginaria}`)
}

//-coeficiente_b + ((discriminante) * 0.5)) / (2 * coeficiente_a)*/