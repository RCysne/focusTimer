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
    document.body.style.background = 'url(../assets/floresta2.jpg)';
    colorFont('white')
})

rain.addEventListener('click', () => {
    document.body.style.background = 'url(../assets/chuva2.jpg)';
    colorFont('black')
})

garden.addEventListener('click', () => {
    document.body.style.background = 'url(../assets/jardim2.jpg)'
    colorFont('white')
})

fire.addEventListener('click', () => {
    document.body.style.background = 'url(../assets/fogo2.jpg)';
    colorFont('white');
});