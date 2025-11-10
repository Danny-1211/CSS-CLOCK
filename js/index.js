
const secondsHandDom = document.querySelector('.second-hand');
const minutesHandDom = document.querySelector('.min-hand');
const hourHandDom = document.querySelector('.hour-hand');
function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondsHandDom.style.transform = `rotate(${secondsDegrees}deg)`

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minutesHandDom.style.transform = `rotate(${minsDegrees}deg)`

    const hours = now.getMinutes();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHandDom.style.transform = `rotate(${hoursDegrees}deg)`
}

setDate(); 
setInterval(setDate, 1000);
