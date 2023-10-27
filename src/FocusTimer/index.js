import state from './state.js'
import * as events from './events.js'
import * as timer from './timer.js'

// Eventos de click serão utilizados nas funções das ações do contador. Então precisam ser importados nesse arquivo


export function start(minutes, seconds) {
    state.minutes = minutes
    state.seconds = seconds

    timer.updateDisplay()

    events.eventControl()
}

