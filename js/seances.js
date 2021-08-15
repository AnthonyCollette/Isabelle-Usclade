// List 1

$('#list-1').click('#list-1', () => {
    if ($('#list-1').hasClass('toleft')) {
        $('#list-1').removeClass('toleft')
        $('#list-2').removeClass('others')
        $('#list-3').removeClass('others')
        $('#list-4').removeClass('others')
        $('#adulte').addClass('no-display')
        $('#adulte').addClass('display-none')
    } else {
        $('#list-2').addClass('others')
        $('#list-3').addClass('others')
        $('#list-4').addClass('others')
        $('#list-1').addClass('toleft')
        $('#adulte').removeClass('display-none')
        $('#adulte').removeClass('no-display')
        $('#adulte').addClass('display')
    }
})

$('#close-list-1').click('#close-list-1', () => {
    $('#list-1').removeClass('toleft')
    $('#list-2').removeClass('others')
    $('#list-3').removeClass('others')
    $('#list-4').removeClass('others')
    $('#adulte').addClass('no-display')
    $('#adulte').addClass('display-none')
})

// List 2

$('#list-2').click('#list-2', () => {
    if ($('#list-2').hasClass('toleft')) {
        $('#list-2').removeClass('toleft')
        $('#list-1').removeClass('others')
        $('#list-3').removeClass('others')
        $('#list-4').removeClass('others')
        $('#teenager').addClass('no-display')
        $('#teenager').addClass('display-none')
    } else {
        $('#list-1').addClass('others')
        $('#list-3').addClass('others')
        $('#list-4').addClass('others')
        $('#list-2').addClass('toleft')
        $('#teenager').removeClass('display-none')
        $('#teenager').removeClass('no-display')
        $('#teenager').addClass('display')
    }
})

$('#close-list-2').click('#close-list-2', () => {
    $('#list-2').removeClass('toleft')
    $('#list-1').removeClass('others')
    $('#list-3').removeClass('others')
    $('#list-4').removeClass('others')
    $('#teenager').addClass('no-display')
    $('#teenager').addClass('display-none')
})

// List 3

$('#list-3').click('#list-3', () => {
    if ($('#list-3').hasClass('toleft')) {
        $('#list-3').removeClass('toleft')
        $('#list-2').removeClass('others')
        $('#list-1').removeClass('others')
        $('#list-4').removeClass('others')
        $('#child').addClass('no-display')
        $('#child').addClass('display-none')
    } else {
        $('#list-2').addClass('others')
        $('#list-1').addClass('others')
        $('#list-4').addClass('others')
        $('#list-3').addClass('toleft')
        $('#child').removeClass('display-none')
        $('#child').removeClass('no-display')
        $('#child').addClass('display')
    }
})

$('#close-list-3').click('#close-list-3', () => {
    $('#list-3').removeClass('toleft')
    $('#list-2').removeClass('others')
    $('#list-1').removeClass('others')
    $('#list-4').removeClass('others')
    $('#child').addClass('no-display')
    $('#child').addClass('display-none')
})

// List 4

$('#list-4').click('#list-4', () => {
    if ($('#list-4').hasClass('toleft')) {
        $('#list-4').removeClass('toleft')
        $('#list-2').removeClass('others')
        $('#list-3').removeClass('others')
        $('#list-1').removeClass('others')
        $('#group').addClass('no-display')
        $('#group').addClass('display-none')
    } else {
        $('#list-2').addClass('others')
        $('#list-3').addClass('others')
        $('#list-1').addClass('others')
        $('#list-4').addClass('toleft')
        $('#group').removeClass('display-none')
        $('#group').removeClass('no-display')
        $('#group').addClass('display')
    }
})

$('#close-list-4').click('#close-list-4', () => {
    $('#list-4').removeClass('toleft')
    $('#list-2').removeClass('others')
    $('#list-3').removeClass('others')
    $('#list-1').removeClass('others')
    $('#group').addClass('no-display')
    $('#group').addClass('display-none')
})
