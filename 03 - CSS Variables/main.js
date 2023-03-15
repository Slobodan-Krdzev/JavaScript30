let inputs = document.querySelectorAll('input')
let img = document.querySelector('img')

function handleChanges(e) {
    let syffix = e.target.dataset.sizing || ""

    img.style.setProperty(`--${this.name}`, this.value + syffix)
}


inputs.forEach(input => {
    input.addEventListener('mousemove' , handleChanges)
})

inputs.forEach(input => {
    input.addEventListener('change' , handleChanges)
})


// bidejki inputite imaat name atribute ist kako nashite varijabli 
// img.style.setProperty gi pristapuva na sledniot nacin
// 
// od parametarot e -> event (targetot)
// go zima name atributot i go postavuva kako prv parametar na setProperty 
// za value go zima isto so this.value (e.target.value)
// syffix e ona px shto se pishuva posle valueto za stilot (10px)
// syffixot isto go zema od data-sizzing atributot 