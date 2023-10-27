import state from './state.js' // Importanto para usar os estados iniciais
import * as elements from './elements.js' // Importando para poder usar os elementos
import * as actions from './actions.js';


export function countdown() {
    // Verifica se houve o click e foi iniciado o processo ou houve um novo click e o processo foi parado
    if (!state.isRunning) {
        return
    }
    
    let minutes = Number(elements.minutes.textContent);
    let seconds = Number(elements.seconds.textContent);
    
    seconds--

    if (seconds < 0) {
        seconds = 59; // Quando chegar em 0 - decrementar os minutos
        minutes--
    }

    if (minutes < 0) {
        actions.reset()
        return
    }

    updateDisplay(minutes, seconds)
    // Recursão, quando uma função chama ela mesma em algum momento, e ela tem que parar em algum momento
    // Callback é uma função que recebe outra função por parâmetro
    setTimeout(() => countdown(), 1000)

}


export function updateDisplay(minutes, seconds) {
    // Se não tiver um valor passado por parâmetro, ele vai ser nulo (nullish coalesing operator), então ele assume o valor que o state possui
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds
    // Atualiza com os valores do parâmetro e se for nulo, assume o valor do state
    
    elements.minutes.textContent = String(minutes).padStart(2, "0"); 
    elements.seconds.textContent = String(seconds).padStart(2, '0');
    // console.log(typeof minutes)
}
