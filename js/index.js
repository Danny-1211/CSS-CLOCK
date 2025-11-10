
const secondsHandDom = document.querySelector('.second-hand');
const minutesHandDom = document.querySelector('min-hand');
const hourHandDom = document.querySelector('.hour-hand');
function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondsHandDom.style.transform = `rotate(${secondsDegrees}deg)`

    const mins = now.getMinutes();
    const minsDegress = ((mins / 60) * 360) + 90;
    minutesHandDom.style.transform = `rotate(${minsDegress}deg)`

    const hours = now.getMinutes();
    const hoursDegress = ((hours / 12) * 360) + 90;
    hourHandDom.style.transform = `rotate(${hoursDegress}deg)`
}

setInterval(setDate, 1000);
