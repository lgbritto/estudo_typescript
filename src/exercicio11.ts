/* Calcular a quantidade de litros gastos em uma viagem, sabendo que o veiculo faz 12km/litro. Receber o tempo de percurso
e a velocidade média*/
import prompt from 'prompt-sync'

const prompt_setup = prompt();

let tempo_percurso: any = null;

while(typeof tempo_percurso !== 'number' || isNaN(tempo_percurso)) {
    tempo_percurso = Number(prompt_setup('Insira o tempo do percurso em horas: '));
}

let velocidade_media: any = null;

while(typeof velocidade_media !== 'number' || isNaN(velocidade_media)) {
    velocidade_media = Number(prompt_setup('Insira a velocidade média do veículo em KM/H: '));
}

const litros: number = (tempo_percurso * velocidade_media) / 12;

console.log(`Em um percurso com tempo de ${tempo_percurso} horas, você gastará ${litros} litros.`)


