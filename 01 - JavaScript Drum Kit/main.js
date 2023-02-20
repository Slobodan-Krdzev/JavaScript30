window.addEventListener('keydown', playSound)


function playSound(e){
    let audio = document.querySelector(`audio[data-key ="${e.keyCode}"]`)
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

    
    if(!audio){
        return
    }

    key.classList.add('playing')
    audio.currentTime = 0
    audio.play()
}

let keys = document.querySelectorAll('.key')
keys.forEach(key => {
    key.addEventListener('transitionend', () => {
        key.classList.remove('playing')
    })
})