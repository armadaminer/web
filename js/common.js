if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

var $header = document.querySelector('.header');
var $menu = document.querySelector('.header .menu');
var wndWidth = $header.clientWidth;

$menu.addEventListener('click', function () {
    if (wndWidth > 550) return;
    $menu.classList.contains('active') ? $menu.classList.remove('active') : $menu.classList.add('active');
});