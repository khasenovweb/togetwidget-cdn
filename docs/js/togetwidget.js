// Подключаем Jquery если его нет
if(!window.jQuery){
    document.write('<script type="text/javascript" src="https://cdn.togett.ru/js/jquery.js"></script>')
}
// END Подключаем Jquery если его нет

// Подключаем JS
document.write('<script type="text/javascript" src="https://cdn.togett.ru/js/main.js"></script>')
document.write('<script type="text/javascript" src="https://cdn.togett.ru/js/hammer.js"></script>')
// END Подключаем JS
// Подключаем CSS
document.write('<link rel="stylesheet" href="https://cdn.togett.ru/css/togetwidget.css">')
// END Подключаем CSS

// Вставляем кнопку
document.write('<div class="togetwidgetbutton" data-togetwidget-show="1"><div class="togetwidgetbutton__icon"></div><div class="togetwidgetbutton__text">Как добраться?</div></div>')
// END Вставляем кнопку
// Вставляем панель
document.write('<div class="togetwidget" data-togetwidget="1"></div>')
// END Вставляем панель