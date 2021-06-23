jQuery(function () {
    'use strict';
    jQuery(".testimonials-content").owlCarousel({
        dots:false,
        nav:false,
        loop: true,
        slideSpeed: 500,
        autoPlay: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            
            1400:{
                items:3,
            }
        }
    });
});


jQuery(function () {
    'use strict';
    jQuery(".portfolio-slider").owlCarousel({
        dots:true,
        nav:false,
        loop: true,
        stagePadding: 50,
        slideSpeed: 500,
        autoPlay: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            800:{
                items:2,
            }
        }
    });
});

