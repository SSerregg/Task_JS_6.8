const trafficLight_green = document.querySelector('#trafficLight_green');
const trafficLight_yellow = document.querySelector('#trafficLight_yellow');
const trafficLight_red = document.querySelector('#trafficLight_red');

function makeGreen() {
    trafficLight_green.style.background = ('green');
    trafficLight_yellow.style.background = ('black');
    trafficLight_red.style.background = ('black');
    document.removeEventListener('click', makeGreen);
    document.addEventListener('click', makeYellow);
}

document.addEventListener('click', makeGreen);

function makeYellow() {
    trafficLight_green.style.background = ('black');
    trafficLight_yellow.style.background = ('yellow');
    trafficLight_red.style.background = ('black');
    document.removeEventListener('click', makeYellow);
    document.addEventListener('click', makeRed);
}

function makeRed() {
    trafficLight_green.style.background = ('black');
    trafficLight_yellow.style.background = ('black');
    trafficLight_red.style.background = ('red');
    document.removeEventListener('click', makeRed);
    document.addEventListener('click', makeGreen);
}