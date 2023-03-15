// sekoj key ima data-key atribut so brojce
//  brojce koe vsushnost e keyCode na toa keybord kopce

// audioto ima ist data-key 

// koga ke se pritisne toa kopce
// preku e.keyCode play audio that has  keyCode as data-key value


document.addEventListener('keydown', (e) => {
   playAudio(e)
})

function playAudio(e){
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    let key = document.querySelector(`div[data-key="${e.keyCode}"]`)

    if (audio) {
        audio.currentTime = 0;
        audio.play()
        key.classList.add('playing')
        key.addEventListener('transitionend', (e) => {
            e.target.classList.remove("playing")
        })
    } else {
        return
    }
}

let keys = document.querySelectorAll('.key')

keys.forEach(key => {
    key.addEventListener('click', () => {
        let getDataKey = key.getAttribute('data-key')

        let getAudioKey = document.querySelector(`audio[data-key="${getDataKey}"]`)

        getAudioKey.currentTime = 0;
        getAudioKey.play()

        key.classList.add('playing')
        key.addEventListener('transitionend', (e) => {
            e.target.classList.remove("playing")
        })
    })
})