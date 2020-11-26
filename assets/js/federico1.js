jQuery(document).ready(function () {
    let more = $('#display_more');
    let dot = $('#display_dot');
    more.hide();

    let initTable = function (params) {
        $.ajax({
            type: "GET",
            url: "test.php?task=fondi.items",
            data: params,
            dataType: "json",
            success: function (data) {
                if (data.status == 'OK') {
                    $('table.table_fonds_mc tbody').html(data.html);
                    $('div.paginated').html(data.paginazione);
                }
            }
        });

    }

    $('#display_switch').click(function () {
        if (more.is(':visible')) {
            more.hide();
            dot.show();
            $('#display_bf').addClass('display_before');
            $(this).text('Leggi di più');

        } else {
            more.show();
            dot.hide();
            $('#display_bf').removeClass('display_before');
            $(this).text('Leggi meno');
        }
    });

    $('#isin_search').focus(function () {
        $(this).prop('placeholder', '');
    });

    $('#isin_search').blur(function () {
        $(this).prop('placeholder', "Inserisci il nome o l'isin");
    });

    $('#btn_isin_cerca').click(function () {
        let value = $('#isin_search').val();
        if (value == '') {
            alert('Compilare il campo di ricerca');
        } else {
            let params = {
                'isin' : value
            }

            initTable(params);
        }
    });

    $('.btn_add_portfolio span').click(function () {
        if ($(this).hasClass('to_add')) {
            $(this).removeClass('to_add');
            $(this).addClass('to_remove');
        } else {
            $(this).removeClass('to_remove');
            $(this).addClass('to_add');
        }
    });

    if ($('.btn_isin_cerca.back_to_charts').length > 0) {
        let _scrollTo = $('#anchor').offset().top - 85;
        setTimeout(function () {
            $('html, body').animate({
                scrollTop: _scrollTo
            }, 900, 'swing');
        }, 500);
    }

    $('#error_isin').hide();

    initTable({'ordina':'1-anno'});
});
