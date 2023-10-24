import state from './state.js'
import * as events from './events.js'

// Eventos de click serão utilizados nas funções das ações do contador. Então precisam ser importados nesse arquivo


export function start(minutes, seconds) {
    state.minutes = minutes
    state.seconds = seconds

    console.log(state)
    console.log(state.minutes)
    console.log(state.seconds)


    events.eventControl()
}

export function stop() {
    console.log('Parar contador')
}

export function increment() {
    console.log('Incrementar')
}

export function decrement() {
    console.log('Decrementar')
}