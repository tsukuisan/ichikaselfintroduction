var _window = $(window);
    _header = $('.inheader');
    yoasobi = $('#header').css('margin-top','100px');

_window.on('scroll',function(){
    if(_window.scrollTop() > yoasobi){
        _header.addClass('fixed');
    }
    else{
        _header.removeClass('fixed');
    }
});

_window.trigger('scroll');