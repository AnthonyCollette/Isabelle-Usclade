// List 5

$('#list-5').click('#list-5', () => {
    if ($('#list-5').hasClass('toleft')) {
        $('#list-5').removeClass('toleft')
        $('#list-6').removeClass('others')
        $('#list-7').removeClass('others')
        $('#list-8').removeClass('others')
        $('#adulte-tarifs').addClass('no-display')
        $('#adulte-tarifs').addClass('display-none')
    } else {
        $('#list-6').addClass('others')
        $('#list-7').addClass('others')
        $('#list-8').addClass('others')
        $('#list-5').addClass('toleft')
        $('#adulte-tarifs').removeClass('display-none')
        $('#adulte-tarifs').removeClass('no-display')
        $('#adulte-tarifs').addClass('display')
    }
})

$('#close-list-5').click('#close-list-5', () => {
    $('#list-5').removeClass('toleft')
    $('#list-6').removeClass('others')
    $('#list-7').removeClass('others')
    $('#list-8').removeClass('others')
    $('#adulte-tarifs').addClass('no-display')
    $('#adulte-tarifs').addClass('display-none')
})

// List 6

$('#list-6').click('#list-6', () => {
    if ($('#list-6').hasClass('toleft')) {
        $('#list-6').removeClass('toleft')
        $('#list-5').removeClass('others')
        $('#list-7').removeClass('others')
        $('#list-8').removeClass('others')
        $('#teenager-tarifs').addClass('no-display')
        $('#teenager-tarifs').addClass('display-none')
    } else {
        $('#list-5').addClass('others')
        $('#list-7').addClass('others')
        $('#list-8').addClass('others')
        $('#list-6').addClass('toleft')
        $('#teenager-tarifs').removeClass('display-none')
        $('#teenager-tarifs').removeClass('no-display')
        $('#teenager-tarifs').addClass('display')
    }
})

$('#close-list-6').click('#close-list-6', () => {
    $('#list-6').removeClass('toleft')
    $('#list-5').removeClass('others')
    $('#list-7').removeClass('others')
    $('#list-8').removeClass('others')
    $('#teenager-tarifs').addClass('no-display')
    $('#teenager-tarifs').addClass('display-none')
})

// List 7

$('#list-7').click('#list-7', () => {
    if ($('#list-7').hasClass('toleft')) {
        $('#list-7').removeClass('toleft')
        $('#list-6').removeClass('others')
        $('#list-5').removeClass('others')
        $('#list-8').removeClass('others')
        $('#bien-etre-tarifs').addClass('no-display')
        $('#bien-etre-tarifs').addClass('display-none')
    } else {
        $('#list-6').addClass('others')
        $('#list-5').addClass('others')
        $('#list-8').addClass('others')
        $('#list-7').addClass('toleft')
        $('#bien-etre-tarifs').removeClass('display-none')
        $('#bien-etre-tarifs').removeClass('no-display')
        $('#bien-etre-tarifs').addClass('display')
    }
})

$('#close-list-7').click('#close-list-7', () => {
    $('#list-7').removeClass('toleft')
    $('#list-6').removeClass('others')
    $('#list-5').removeClass('others')
    $('#list-8').removeClass('others')
    $('#bien-etre-tarifs').addClass('no-display')
    $('#bien-etre-tarifs').addClass('display-none')
})

// List 8

$('#list-8').click('#list-8', () => {
    if ($('#list-8').hasClass('toleft')) {
        $('#list-8').removeClass('toleft')
        $('#list-6').removeClass('others')
        $('#list-7').removeClass('others')
        $('#list-5').removeClass('others')
        $('#organisme').addClass('no-display')
        $('#organisme').addClass('display-none')
    } else {
        $('#list-6').addClass('others')
        $('#list-7').addClass('others')
        $('#list-5').addClass('others')
        $('#list-8').addClass('toleft')
        $('#organisme').removeClass('display-none')
        $('#organisme').removeClass('no-display')
        $('#organisme').addClass('display')
    }
})

$('#close-list-8').click('#close-list-8', () => {
    $('#list-8').removeClass('toleft')
    $('#list-6').removeClass('others')
    $('#list-7').removeClass('others')
    $('#list-5').removeClass('others')
    $('#organisme').addClass('no-display')
    $('#organisme').addClass('display-none')
})
