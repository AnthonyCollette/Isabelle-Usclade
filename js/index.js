let triangle1 = document.getElementById('triangle-list-1')
let triangle2 = document.getElementById('triangle-list-2')
let div1 = document.getElementById('a-triangle-1')
let div2 = document.getElementById('a-triangle-2')
let collapse1 = document.getElementById('apropos-list-1')
let collapse2 = document.getElementById('apropos-list-2')

div1.addEventListener('click', () => {
    if (collapse1.classList.contains('show')) {
        triangle1.style.transform = 'rotate(0deg)'
        triangle1.style.borderLeft = '43px solid #dcb36a'
    } else {
        triangle1.style.transform = 'rotate(90deg)'
        triangle1.style.borderLeft = '43px solid #D13978'
    }
})

div2.addEventListener('click', () => {
    if (collapse2.classList.contains('show')) {
        triangle2.style.transform = 'rotate(0deg)'
        triangle2.style.borderLeft = '43px solid #dcb36a'
    } else {
        triangle2.style.transform = 'rotate(90deg)'
        triangle2.style.borderLeft = '43px solid #D13978'
    }
})

$('#apropos-button').click((event) => {
    event.preventDefault()
    $('html, body').animate(
        {
            scrollTop: $('#apropos').offset().top,
        },
        1500
    )
})
