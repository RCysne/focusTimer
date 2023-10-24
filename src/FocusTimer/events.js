// Importando os controls para serem utilizados nos eventos
import { controls } from './elements.js'

export function eventControl() {
    controls.addEventListener('click', (event) => {
        console.log(event.target)
    })
}