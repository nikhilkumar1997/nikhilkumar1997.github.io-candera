$('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
    smartSpeed: 1500,




    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        },
        1400: {
            items: 1
        }
    }
})
$('.f1').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1440: {
            items: 4
        }
    }
})