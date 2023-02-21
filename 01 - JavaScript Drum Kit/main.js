window.addEventListener('keydown', (event) => {
    let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    audio.currentTime = 0;
    audio.play()

    let key = document.querySelector(`.key[data-key="${event.keyCode}"]`)
    key.classList.add('playing')
})

let keys = document.querySelectorAll('.key')
keys.forEach(key => {
    key.addEventListener('transitionend', ()=>{
        key.classList.remove('playing')
    })
})

