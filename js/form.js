$('#pop-form').click('#pop-form', () => {
    $('#pop-form').addClass('display-none')
    $('#form').addClass('display-block')
    $('#form').addClass('animation-form')
    $('#form').removeClass('diplay-none')
    $('#pop-form').removeClass('display-block')
    $('#butterfly-form').css('top', '-1%')
    $('#butterfly-form').css('right', '7%')
})

$('#arrow-form').click('#arrow-form', () => {
    $('#form').addClass('diplay-none')
    $('#pop-form').addClass('display-block')
    $('#pop-form').removeClass('display-none')
    $('#form').removeClass('display-block')
    $('#butterfly-form').css('top', '23%')
    $('#butterfly-form').css('right', '11%')
})

$('#btn-send').click('#btn-send', () => {
    $('#form').removeClass('display-block')
    $('#form').addClass('diplay-none')
    $('#thanks').addClass('display-block')
    $('#butterfly-form').css('top', '22%')
    $('#butterfly-form').css('right', '15%')
})
