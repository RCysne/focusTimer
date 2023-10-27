// Importando os controls para serem utilizados nos eventos
import { controls } from './elements.js'
import * as actions from './actions.js'


// utilizando o event para verificar qual o target acessado
export function eventControl() {
    controls.addEventListener('click', (event) => {
        // dataset acessa o data do html e o .action acessa a ação

        // Capturando numa variável a ação executada no click
        const action = event.target.dataset.action;

        if (typeof actions[action] != 'function') {
            return
        }

        // Forma de chamar a função através do objeto e chamando a função que tem o mesmo nome do data-action que está sendo capturado pelo evente.target.dataset.action
        actions[action]()
        console.log(actions[action()])
    })
}