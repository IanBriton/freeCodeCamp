const btn = document.querySelectorAll('.btn')
const btnValue = document.querySelector('.value-display')
const btnReset = document.querySelector('.btn-reset')
const btnIncrease = document.querySelector('.btn-increase')
const btnDecrease = document.querySelector('.btn-decrease')

let counter = 0
currentCount()

btnReset.addEventListener('click', () => {
    btnValue.textContent = 0
    btnValue.style.color = 'black'
})
btnIncrease.addEventListener('click', () => {
    counter++
    btnValue.textContent = counter
    btnValue.style.color = 'black'
    currentCount()
})
btnDecrease.addEventListener('click', () => {
    counter--
    btnValue.textContent = counter
    if (counter < 0) {
        btnValue.style.color = 'red'
    }
    currentCount()
})

function currentCount() {
    btnValue.textContent = counter
}