// News articles
const buttons = document.querySelectorAll('.buttons__list > button'),
      toggle = document.querySelector('.toggle__tri')

for (let i = 0; i  < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        for (let j = 0; j < buttons.length; j++) {
            buttons[j].classList.remove('button__selected')
        }
        buttons[i].classList.add('button__selected')
    })
}

toggle.addEventListener('click', () => {
    toggle.classList.toggle('rotation')
})