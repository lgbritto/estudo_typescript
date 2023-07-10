/*Receber a quantidade de alimentos em quilos, calcular e mostrar quantos dias durará esse alimento sabendo que
a pessoa consome 50 gramas ao dia*/
import prompt from 'prompt-sync'

const promptSetup = prompt();

let kg_comida: any = null;

while(typeof kg_comida !== 'number' || isNaN(kg_comida)) {
    kg_comida = Number(promptSetup('Insira a quantidade de alimento em quilos:: '));
}

let gramas_comida: number = 1000 * kg_comida;

let dias: number = 0;

while(gramas_comida > 0) {
    gramas_comida = gramas_comida -50;
    dias = dias+1;
}

console.log(`${kg_comida}KG de comida durarão ${dias} dias.`)