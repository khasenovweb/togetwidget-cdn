$(document).ready(function(){

    $.ajax({
        url: 'https://cdn.togett.ru/',
        type: 'get',
        success: function(data) {
            // $('[data-togetwidget]').html(data);
            $('body').append(data);
        }
    });


    $.ajax({
        url: 'https://cdn.togett.ru/button.html',
        type: 'get',
        success: function(data) {
            $('body').append(data);
        }
    });

});
