(function(){
    var $body = document.querySelector('body');
    $body.classList.remove('no-js');
    $body.classList.add('js');

    var $btnMenu = document.querySelector('.header__btnMenu');
    $btnMenu.removeAttribute('style');

    var menu = new Menu({
        container: '.header__nav ',
        toogleBtn: '.header__btnMenu ',
        widthEnabled: 1024
    });

    var carouselImgs = new Carousel({
        container:'.laptop-slider .slideshow',
        itens:'.figure',
        btnPrev:'.prev',
        btnNext:'.next'
    });

})();