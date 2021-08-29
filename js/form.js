let firstname = document.getElementById('firstname')
let name = document.getElementById('name')
let email = document.getElementById('email')
let phone = document.getElementById('phone')
let object = document.getElementById('object')
let message = document.getElementById('message')

$('#pop-form').click('#pop-form', () => {
    $('#pop-form').addClass('display-none')
    $('#form').addClass('display-block')
    $('#form').addClass('animation-form')
    $('#form').removeClass('diplay-none')
    $('#pop-form').removeClass('display-block')
    $('#butterfly-form').css('top', '-1%')
    $('#butterfly-form').css('right', '-8%')
})

$('#arrow-form').click('#arrow-form', () => {
    $('#form').addClass('diplay-none')
    $('#pop-form').addClass('display-block')
    $('#pop-form').removeClass('display-none')
    $('#form').removeClass('display-block')
    $('#butterfly-form').css('top', '-50%')
    $('#butterfly-form').css('right', '-15%')
})

$('#btn-send').click('#btn-send', () => {
    if (firstname.value != '' && name.value != '' && email.value != '' && phone.value != '' && object.value != '' && message.value != '') {
        $('#form').removeClass('display-block')
        $('#form').addClass('diplay-none')
        $('#thanks').addClass('display-block')
        $('#butterfly-form').css('top', '-100%')
        $('#butterfly-form').css('right', '2%')
    } else {
        alert('Merci de remplir tous les champs')
    }
})
