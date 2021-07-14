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


    // portfolio Buttons Change bg

    $('.buttons button').click(function() {
        $(this).addClass('active_btn').siblings().removeClass('active_btn');


        var CssFilter = $(this).attr('id');

        if (CssFilter === 'all') {
            $('.images > div').fadeIn();
        } else {
            $('.images > div').fadeOut();
            $('.images').contents().filter('.' + CssFilter).fadeIn();
        }


    });


});