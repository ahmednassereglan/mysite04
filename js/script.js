$(document).ready(function() {
    // show navbar when click on icon
    $('i.icon').click(function() {
        $('.nav-list').slideToggle();

    });
    // when scroll body sticky navbar
    $(window).scroll(function() {
        var sc = $(this).scrollTop();
        if (sc > 100) { // show sticky navbar
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }


        // when scroll body begin count in Statistics section
        if (sc > 1800) {
            $('.stat-info-counter').countTo();
            $(window).off('scroll');
        }

        // when scroll body fade the scroll top btn 
        if (sc > 500) {
            $('.scroll-top').fadeIn();
        } else {
            $('.scroll-top').fadeOut();
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

    // Owl carousal  >> Team Section

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })

    // choose panal

    $('.choose-panal .item-list').click(function() {
        $(this).addClass('active_btn').siblings().removeClass('active_btn');
        var p = $(this).data('role')
        $('.content > div').hide();
        $('.content').contents().filter('#' + p).fadeIn();

    });


    // choose media pop
    $('.choose-media .pop').magnificPopup({
        type: 'iframe'

    });

    // Slick slider >>  pleasure

    $('.slickslider').slick({
        accessibility: true,
        autoplay: true,
        dots: true,
        arrows: false


    });


    // scroll to top 


    $('.scroll-top').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 500)
    });
});