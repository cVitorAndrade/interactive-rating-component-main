const elementLi = document.querySelectorAll('li')
const button = document.querySelector('button')

const modal = document.querySelector('.modal')
const firstPage = document.querySelector('main')

let selected

elementLi.forEach( li => {
    li.addEventListener('click', () => {
        elementLi.forEach( item => {
            if ( li.textContent != item.textContent ) {
                item.style.color = "hsl(217, 12%, 63%)"
                item.style.background = "hsl(220, 5%, 22%)"
                return
            }
            selected = li.textContent
            li.style.color = "hsl(0, 0%, 100%)"
            li.style.background = "hsl(25, 97%, 53%)"
        })
    })
})

button.addEventListener('click', () => {
    firstPage.classList.toggle('hide')
    modal.classList.toggle('hide')

    modal.querySelector('.selected').textContent = `You selected ${selected} out of 5`
})