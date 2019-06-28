// Sub
const card = document.querySelectorAll('.sub__unique__card')

for (let i = 0; i  < card.length; i++) {
    card[i].addEventListener('click', () => {
        for (let j = 0; j < card.length; j++) {
            card[j].classList.remove('selected__card')
        }
        card[i].classList.add('selected__card')
    })
}