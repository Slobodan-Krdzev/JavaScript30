
let secondsHand = document.querySelector('.second-hand')
let minHand = document.querySelector('.min-hand')
let hourHand = document.querySelector(".hour-hand")

function setDate() {
    let date = new Date()
    let seconds = date.getSeconds()
    let secondsDegrees = ((seconds / 60) * 360) + 90;

    if(secondsDegrees == 359){
        secondsHand.style.transition = 'none'
    }

    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`

    let minutes = date.getMinutes()
    let minutesDegrees = ((minutes / 60) * 360) + 90;

    minHand.style.transform = `rotate(${minutesDegrees}deg)`

    let hours = date.getHours()
    let hoursDegrees = ((hours / 12) * 360) + 90;

    hourHand.style.transform = `rotate(${hoursDegrees}deg)`
    console.log(minutes)
}

setInterval(setDate, 1000)
