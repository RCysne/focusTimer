import * as audios from './FocusTimer/sounds.js';

const forest = document.getElementById('forest');
const rain = document.getElementById('rain');
const garden = document.getElementById('garden');
const fire = document.getElementById('fire');


function colorFont(color) {
    const minutes = document.getElementById('minutes')
    const seconds = document.getElementById('seconds')
    const points = document.getElementById('points')

    minutes.style.color = color;
    points.style.color = color;
    seconds.style.color = color;
}



forest.addEventListener('click', (event) => {
    console.log(event);
    audios.forestAudio.play()
    document.body.style.background = 'url(../assets/forest.png)';
    colorFont('white')
})

rain.addEventListener('click', () => {
    document.body.style.background = 'url(../assets/rain.jpg)';
    audios.rainAudio.play();
    colorFont('black')
})

garden.addEventListener('click', () => {
    document.body.style.background = 'url(../assets/sky.png)'
    audios.houseAudio.play();
    colorFont('white')
})

fire.addEventListener('click', () => {
    document.body.style.background = 'url(../assets/fire.png)';
    audios.fireAudio.play();
    colorFont('white');
});