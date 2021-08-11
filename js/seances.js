// List 1

$('#list-1').click('#list-1', () => {
    if ($('#list-1').hasClass('toleft')) {
        $('#list-1').removeClass('toleft')
        $('#adulte').removeClass('display')
        $('#adulte').addClass('display-none')
        $('#list-1').addClass('to-origin-1')
        $('#list-2').removeClass('no-display')
        $('#list-3').removeClass('no-display')
        $('#list-4').removeClass('no-display')
        $('#list-2').addClass('display')
        $('#list-3').addClass('display')
        $('#list-4').addClass('display')
    } else {
        $('#list-1').removeClass('to-origin-1')
        $('#list-2').removeClass('display')
        $('#list-3').removeClass('display')
        $('#list-4').removeClass('display')
        $('#list-1').addClass('toleft')
        $('#list-2').addClass('no-display')
        $('#list-3').addClass('no-display')
        $('#list-4').addClass('no-display')
        $('#adulte').removeClass('display-none')
        $('#adulte').addClass('display')
    }
})

$('#close-list-1').click('#close-list-1', () => {
    $('#list-1').removeClass('toleft')
    $('#adulte').removeClass('display')
    $('#list-1').addClass('to-origin-1')
    $('#list-2').removeClass('no-display')
    $('#list-3').removeClass('no-display')
    $('#list-4').removeClass('no-display')
    $('#list-2').addClass('display')
    $('#list-3').addClass('display')
    $('#list-4').addClass('display')
})

// List 2

$('#list-2').click('#list-2', () => {
    if ($('#list-2').hasClass('toleft')) {
        $('#list-2').removeClass('toleft')
        $('#teenager').removeClass('display')
        $('#teenager').addClass('display-none')
        $('#list-2').addClass('to-origin-2')
        $('#list-1').removeClass('no-display')
        $('#list-3').removeClass('no-display')
        $('#list-4').removeClass('no-display')
        $('#list-1').addClass('display')
        $('#list-3').addClass('display')
        $('#list-4').addClass('display')
    } else {
        $('#list-2').removeClass('to-origin-2')
        $('#list-1').removeClass('display')
        $('#list-3').removeClass('display')
        $('#list-4').removeClass('display')
        $('#list-2').addClass('toleft')
        $('#list-1').addClass('no-display')
        $('#list-3').addClass('no-display')
        $('#list-4').addClass('no-display')
        $('#teenager').removeClass('display-none')
        $('#teenager').addClass('display')
    }
})

$('#close-list-2').click('#close-list-2', () => {
    $('#list-2').removeClass('toleft')
    $('#teenager').removeClass('display')
    $('#list-2').addClass('to-origin-2')
    $('#list-1').removeClass('no-display')
    $('#list-3').removeClass('no-display')
    $('#list-4').removeClass('no-display')
    $('#list-1').addClass('display')
    $('#list-3').addClass('display')
    $('#list-4').addClass('display')
})

// List 3

$('#list-3').click('#list-3', () => {
    if ($('#list-3').hasClass('toleft')) {
        $('#list-3').removeClass('toleft')
        $('#child').removeClass('display')
        $('#child').addClass('display-none')
        $('#list-3').addClass('to-origin-3')
        $('#list-1').removeClass('no-display')
        $('#list-2').removeClass('no-display')
        $('#list-4').removeClass('no-display')
        $('#list-1').addClass('display')
        $('#list-2').addClass('display')
        $('#list-4').addClass('display')
    } else {
        $('#list-3').removeClass('to-origin-3')
        $('#list-1').removeClass('display')
        $('#list-2').removeClass('display')
        $('#list-4').removeClass('display')
        $('#list-3').addClass('toleft')
        $('#list-1').addClass('no-display')
        $('#list-2').addClass('no-display')
        $('#list-4').addClass('no-display')
        $('#child').removeClass('display-none')
        $('#child').addClass('display')
    }
})

$('#close-list-3').click('#close-list-3', () => {
    $('#list-3').removeClass('toleft')
    $('#child').removeClass('display')
    $('#list-3').addClass('to-origin-3')
    $('#list-1').removeClass('no-display')
    $('#list-2').removeClass('no-display')
    $('#list-4').removeClass('no-display')
    $('#list-1').addClass('display')
    $('#list-2').addClass('display')
    $('#list-4').addClass('display')
})

// List 4

$('#list-4').click('#list-4', () => {
    if ($('#list-4').hasClass('toleft')) {
        $('#list-4').removeClass('toleft')
        $('#group').removeClass('display')
        $('#group').addClass('display-none')
        $('#list-4').addClass('to-origin-4')
        $('#list-1').removeClass('no-display')
        $('#list-2').removeClass('no-display')
        $('#list-3').removeClass('no-display')
        $('#list-1').addClass('display')
        $('#list-2').addClass('display')
        $('#list-3').addClass('display')
    } else {
        $('#list-4').removeClass('to-origin-4')
        $('#list-1').removeClass('display')
        $('#list-2').removeClass('display')
        $('#list-3').removeClass('display')
        $('#list-4').addClass('toleft')
        $('#list-1').addClass('no-display')
        $('#list-2').addClass('no-display')
        $('#list-3').addClass('no-display')
        $('#group').removeClass('display-none')
        $('#group').addClass('display')
    }
})

$('#close-list-4').click('#close-list-4', () => {
    $('#list-4').removeClass('toleft')
    $('#group').removeClass('display')
    $('#list-4').addClass('to-origin-4')
    $('#list-1').removeClass('no-display')
    $('#list-2').removeClass('no-display')
    $('#list-3').removeClass('no-display')
    $('#list-1').addClass('display')
    $('#list-2').addClass('display')
    $('#list-3').addClass('display')
})
