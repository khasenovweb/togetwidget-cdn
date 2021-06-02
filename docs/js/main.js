if(!window.jQuery){
    document.write('<script type="text/javascript" src="/js/lib/jquery.js"></script>')
    
}

document.write('<script type="text/javascript" src="/js/lib/main.js"></script>')
document.write('<script type="text/javascript" src="/js/lib/main.css"></script>')

$(document).ready(function(){

    // Анимация кнопки (смена картинки)
    setInterval(function(){
        console.log('iteration');
        setTimeout(function(){
            $('.togetwidgetbutton__icon').addClass('taxi');
            console.log('add');
        },1000);
        setTimeout(function(){
            console.log('remove');
            $('.togetwidgetbutton__icon').removeClass('taxi');
        },2000);
    },3000);
    // END Анимация кнопки (смена картинки)

    // Показываем панель
    $('[data-togetwidget-show]').click(function(){
        var id = $(this).attr('data-togetwidget-show');
        $('[data-togetwidget="'+id+'"]').addClass('active');
    });
    // END Показываем панель
    // Скрываем панель
    $('[data-togetwidget-close]').click(function(){
        var id = $(this).attr('data-togetwidget-close');
        $('[data-togetwidget="'+id+'"]').removeClass('active');
    });
    // END Скрываем панель

});
