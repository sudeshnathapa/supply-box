$('.brand-carousel').owlCarousel({
    loop: true,
    margin: 40,
    nav: false,
    items: 4,
    autoplaySpeed: 200,
    smartSpeed: 300,
    transitionStyle: "fade",
    dots: true,
    autoplay: true,
    responsiveClass: true,
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
});

$('.sales-carousel').owlCarousel({
    loop: true,
    margin: 40,
    nav: false,
    items: 4,
    autoplaySpeed: 200,
    smartSpeed: 300,
    transitionStyle: "fade",
    dots: true,
    autoplay: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});


$('.testimonial-carousel').owlCarousel({
    loop: true,
    margin: 40,
    nav: false,
    items: 3,
    autoplaySpeed: 200,
    smartSpeed: 300,
    transitionStyle: "fade",
    dots: true,
    autoplay: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});