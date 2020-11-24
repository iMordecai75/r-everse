jQuery(document).ready(function () { 
    let more = $('#display_more');
    more.hide();
    $('#display_switch').click(function () { 
        if (more.is(':visible')) {
            more.hide();
            $('#display_bf').addClass('display_before');
            $(this).text('Leggi di più');
            
        } else {
            more.show();
            $('#display_bf').removeClass('display_before');
            $(this).text('Leggi meno');
        }
    });
});