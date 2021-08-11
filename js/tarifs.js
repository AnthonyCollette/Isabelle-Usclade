// List 5

$('#list-5').click('#list-5', () => {
    if ($('#list-5').hasClass('toleft')) {
        $('#list-5').removeClass('toleft')
        $('#adulte-tarifs').removeClass('display')
        $('#adulte-tarifs').addClass('display-none')
        $('#list-5').addClass('to-origin-5')
        $('#list-6').removeClass('no-display')
        $('#list-7').removeClass('no-display')
        $('#list-8').removeClass('no-display')
        $('#list-6').addClass('display')
        $('#list-7').addClass('display')
        $('#list-8').addClass('display')
    } else {
        $('#list-5').removeClass('to-origin-5')
        $('#list-6').removeClass('display')
        $('#list-7').removeClass('display')
        $('#list-8').removeClass('display')
        $('#list-5').addClass('toleft')
        $('#list-6').addClass('no-display')
        $('#list-7').addClass('no-display')
        $('#list-8').addClass('no-display')
        $('#adulte-tarifs').removeClass('display-none')
        $('#adulte-tarifs').addClass('display')
    }
})

$('#close-list-5').click('#close-list-5', () => {
    $('#list-5').removeClass('toleft')
    $('#adulte-tarifs').removeClass('display')
    $('#list-5').addClass('to-origin-5')
    $('#list-6').removeClass('no-display')
    $('#list-7').removeClass('no-display')
    $('#list-8').removeClass('no-display')
    $('#list-6').addClass('display')
    $('#list-7').addClass('display')
    $('#list-8').addClass('display')
})

// List 6

$('#list-6').click('#list-6', () => {
    if ($('#list-6').hasClass('toleft')) {
        $('#list-6').removeClass('toleft')
        $('#teenager-tarifs').removeClass('display')
        $('#teenager-tarifs').addClass('display-none')
        $('#list-6').addClass('to-origin-6')
        $('#list-5').removeClass('no-display')
        $('#list-7').removeClass('no-display')
        $('#list-8').removeClass('no-display')
        $('#list-5').addClass('display')
        $('#list-7').addClass('display')
        $('#list-8').addClass('display')
    } else {
        $('#list-6').removeClass('to-origin-6')
        $('#list-5').removeClass('display')
        $('#list-7').removeClass('display')
        $('#list-8').removeClass('display')
        $('#list-6').addClass('toleft')
        $('#list-5').addClass('no-display')
        $('#list-7').addClass('no-display')
        $('#list-8').addClass('no-display')
        $('#teenager-tarifs').removeClass('display-none')
        $('#teenager-tarifs').addClass('display')
    }
})

$('#close-list-6').click('#close-list-6', () => {
    $('#list-6').removeClass('toleft')
    $('#teenager-tarifs').removeClass('display')
    $('#list-6').addClass('to-origin-6')
    $('#list-5').removeClass('no-display')
    $('#list-7').removeClass('no-display')
    $('#list-8').removeClass('no-display')
    $('#list-5').addClass('display')
    $('#list-7').addClass('display')
    $('#list-8').addClass('display')
})

// List 7

$('#list-7').click('#list-7', () => {
    if ($('#list-7').hasClass('toleft')) {
        $('#list-7').removeClass('toleft')
        $('#bien-etre-tarifs').removeClass('display')
        $('#bien-etre-tarifs').addClass('display-none')
        $('#list-7').addClass('to-origin-7')
        $('#list-5').removeClass('no-display')
        $('#list-6').removeClass('no-display')
        $('#list-8').removeClass('no-display')
        $('#list-5').addClass('display')
        $('#list-6').addClass('display')
        $('#list-8').addClass('display')
    } else {
        $('#list-7').removeClass('to-origin-7')
        $('#list-5').removeClass('display')
        $('#list-6').removeClass('display')
        $('#list-8').removeClass('display')
        $('#list-7').addClass('toleft')
        $('#list-5').addClass('no-display')
        $('#list-6').addClass('no-display')
        $('#list-8').addClass('no-display')
        $('#bien-etre-tarifs').removeClass('display-none')
        $('#bien-etre-tarifs').addClass('display')
    }
})

$('#close-list-7').click('#close-list-7', () => {
    $('#list-7').removeClass('toleft')
    $('#bien-etre-tarifs').removeClass('display')
    $('#list-7').addClass('to-origin-7')
    $('#list-5').removeClass('no-display')
    $('#list-6').removeClass('no-display')
    $('#list-8').removeClass('no-display')
    $('#list-5').addClass('display')
    $('#list-6').addClass('display')
    $('#list-8').addClass('display')
})

// List 8

$('#list-8').click('#list-8', () => {
    if ($('#list-8').hasClass('toleft')) {
        $('#list-8').removeClass('toleft')
        $('#organisme').removeClass('display')
        $('#organisme').addClass('display-none')
        $('#list-8').addClass('to-origin-8')
        $('#list-5').removeClass('no-display')
        $('#list-6').removeClass('no-display')
        $('#list-7').removeClass('no-display')
        $('#list-5').addClass('display')
        $('#list-6').addClass('display')
        $('#list-7').addClass('display')
    } else {
        $('#list-8').removeClass('to-origin-8')
        $('#list-5').removeClass('display')
        $('#list-6').removeClass('display')
        $('#list-7').removeClass('display')
        $('#list-8').addClass('toleft')
        $('#list-5').addClass('no-display')
        $('#list-6').addClass('no-display')
        $('#list-7').addClass('no-display')
        $('#organisme').removeClass('display-none')
        $('#organisme').addClass('display')
    }
})

$('#close-list-8').click('#close-list-8', () => {
    $('#list-8').removeClass('toleft')
    $('#organisme').removeClass('display')
    $('#list-8').addClass('to-origin-8')
    $('#list-5').removeClass('no-display')
    $('#list-6').removeClass('no-display')
    $('#list-7').removeClass('no-display')
    $('#list-5').addClass('display')
    $('#list-6').addClass('display')
    $('#list-7').addClass('display')
})
