import state from './state.js';
import * as timer from './timer.js';
import * as elements from './elements.js';


// Nome das funções tem que ser os mesmos do data-action para que seja chamadas

const controls = document.getElementById('controls')

export function toggleRunning() {
    // Como a função toggle retorna true ou false, o state pode receber para ficar alternando o estado da aplicação
    state.isRunning = controls.classList.toggle('play-active')

    timer.countdown();
    console.log('Play/Pause')
}

export function reset() {
    state.isRunning = false; // Voltando ao estado inicial da aplicação
    controls.classList.remove('play-active')
    elements.minutes.textContent = '00';
    elements.seconds.textContent = '00';
    console.log('Reset')
}

export function plus() {
    let minutes = Number(elements.minutes.textContent);
    let seconds = Number(elements.seconds.textContent);
    seconds = 0;
    minutes += 5;
    timer.updateDisplay(minutes, seconds)
}

export function minus() {
    let minutes = Number(elements.minutes.textContent);
    let seconds = Number(elements.seconds.textContent);
    seconds = 0;
    minutes -= 5;
    if (minutes < 0) {
        return
    }
    timer.updateDisplay(minutes, seconds)
}