$(document).ready(function() {
    // show navbar when click on icon
    $('i.icon').click(function() {
        $('.nav-list').slideToggle();

    });
    // when scroll body sticky navbar
    $(window).scroll(function() {
        var sc = $(this).scrollTop();
        if (sc > 100) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }

        if (sc > 1800) {
            $('.stat-info-counter').countTo();
            $(window).off('scroll');
        }


    });

    // console.log($('.ddd').offset().top)


});