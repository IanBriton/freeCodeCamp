// const btn = document.querySelectorAll('.btn')
// const btnValue = document.querySelector('.value-display')
// const btnReset = document.querySelector('.btn-reset')
// const btnIncrease = document.querySelector('.btn-increase')
// const btnDecrease = document.querySelector('.btn-decrease')

// let counter = 0
// currentCount()

// btnReset.addEventListener('click', () => {
//     btnValue.textContent = 0
//     btnValue.style.color = 'black'
// })
// btnIncrease.addEventListener('click', () => {
//     counter++
//     btnValue.textContent = counter
//     btnValue.style.color = 'black'
//     currentCount()
// })
// btnDecrease.addEventListener('click', () => {
//     counter--
//     btnValue.textContent = counter
//     if (counter < 0) {
//         btnValue.style.color = 'red'
//     }
//     currentCount()
// })

// function currentCount() {
//     btnValue.textContent = counter
// }

// Setting the Counter
let count = 0

//Selecting the buttons and setting put the click events
const btns = document.querySelectorAll('.btn')
const value = document.querySelector('.value-display')

// Looping through the buttons to check the clicked button
btns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        const currentBtn = event.currentTarget.classList
        if (currentBtn.contains('btn-decrease') || count < 0) {
            count--
            value.style.color = 'red'

        }
        if (currentBtn.contains('btn-reset') || count === 0) {
            count = 0
            value.style.color = 'black  '

        }
        if (currentBtn.contains('btn-increase') || count > 0) {
            count++
            value.style.color = "green"

        }
        value.textContent = count
    })
})