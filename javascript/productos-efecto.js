//esta es una función que cuando llega el scroll a 300, cambia el estado de css de .productos
//en mostrar y aparecen los elementos. 

$(document).ready(function() {
    $(window).scroll(function() {
        var windowHeight = $(window).height();
        var scrollValue = $(this).scrollTop();
        var positionFromTop = $('.productos').offset().top;
        console.log(scroll);
        if (scrollValue > positionFromTop - windowHeight + 300) {
            $('.productos').addClass('mostrar');
        }
    });
});