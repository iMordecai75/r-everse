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
                    $('.ordering').unbind('click');
                    $('.ordering').removeClass('order');
                    $('.ordering').click(function () {
                        let ord = $(this).attr('data-ord');
                        params = {
                            'ordina': ord
                        };                        
                        initTable(params);
                    });
                    $('.ordering span').show();
                    $('.btn_add_portfolio span').click(function () {
                        if ($(this).hasClass('to_add')) {
                            $(this).removeClass('to_add');
                            $(this).addClass('to_remove');
                        } else {
                            $(this).removeClass('to_remove');
                            $(this).addClass('to_add');
                        }
                    });
                    $('.paginated ul li span').click(function () { 
                        let params = {};
                        let value = $('#isin_search').val();
                        params.isin = value;
                        let ord = $('.ordering.order').attr('data-ord');
                        params.ordina = ord;
                        params.pagina = $(this).attr('data-page');
                        initTable(params);
                    });
                    if (params.isin) {
                        $('.btn_cerca_container').show();
                        scroll();
                    } else {
                        $('.btn_cerca_container').hide();
                    }
                    if (params.ordina) {
                        let th = $('[data-ord="' + params.ordina + '"]');
                        th.unbind('click');
                        th.addClass('order');
                        th.find('span').hide();
                    }
                }
            }
        });

    }

    let scroll = function () {
        let _scrollTo = $('#anchor').offset().top - 85;
        setTimeout(function () {
            $('html, body').animate({
                scrollTop: _scrollTo
            }, 900, 'swing');
        }, 500);
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
                'ordina': '1-mese',
                'isin' : value
            }

            initTable(params);
        }
    });

    $('.btn_cerca_container span').click(function () {
        $('#isin_search').val('');
        initTable({ 'ordina': '1-mese' });
    });

    $('#error_isin').hide();

    initTable({'ordina':'1-mese'});
});
