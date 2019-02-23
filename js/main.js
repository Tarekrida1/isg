/* global, $ */
(function($) {
    "use strict"

    ///////////////////////////
    // Preloader
    $(window).on('load', function() {
        $("#preloader").delay(600).fadeOut();
    });

    ///////////////////////////
    // Scrollspy
    $('body').scrollspy({
        target: '#nav',
        offset: $(window).height() / 2
    });

    ///////////////////////////
    // Smooth scroll
    $("#nav .main-nav a[href^='#'], .home-wrapper a[href^='#']").on('click', function(e) {
        e.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1200);


    });
    $("#nav .main-nav a[href^='#']").on('click', function(e) {
        e.preventDefault();
        $('#nav').toggleClass('open');
    });


    $('#back-to-top').on('click', function() {
        $('body,html').animate({
            scrollTop: 0
        }, 1600);
    });

    ///////////////////////////
    // Btn nav collapse
    $('#nav .nav-collapse').on('click', function() {
        $('#nav').toggleClass('open');
    });

    ///////////////////////////
    // Mobile dropdown
    $('.has-dropdown a').on('click', function() {
        $(this).parent().toggleClass('open-drop');
    });

    ///////////////////////////
    // On Scroll

    $(window).on('scroll', function() {
        var wScroll = $(this).scrollTop();


        // Fixed nav
        wScroll > 1 ? $('#nav').addClass('fixed-nav') : $('#nav').removeClass('fixed-nav');
        wScroll > 1 ? $('#lang-btn').css({
            'top': '10px'
        }) : $('#lang-btn').css({
            'top': '20px'
        });
        // Back To Top Appear
        wScroll > 700 ? $('#back-to-top').fadeIn() : $('#back-to-top').fadeOut();
    });

    ///////////////////////////
    // magnificPopup
    $('.work').magnificPopup({
        delegate: '.lightbox',
        type: 'image'
    });

    ///////////////////////////
    // Owl Carousel
    $('#about-slider').owlCarousel({
        items: 1,
        loop: true,
        margin: 15,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: true,
        autoplay: true,
        animateOut: 'fadeOut'
    });

    $('#testimonial-slider').owlCarousel({
        loop: true,
        margin: 15,
        dots: true,
        nav: false,
        autoplay: true,

    });


    $(".item .overlay .over-text .bbtn").on("click", function(even) {
        event.preventDefault();
        $("." + $(this).data("popup")).fadeIn(300);
        $("body").css({
            overflow: "hidden"
        });
    });
    $(".close-popup, .login-content .close-login").on("click", function(event) {
        event.preventDefault();
        $(".popup").fadeOut(300);
        $("body").css({
            overflow: "auto"
        });
    });

    $("#my-tabs1 li").click(function() {
        var myID = $(this).attr("id");
        $(this).addClass("tab-active").siblings().removeClass("tab-active");
        $("#the-tabs1 div").hide();
        $("#" + myID + "-content").fadeIn(1500);
    });
    $("#my-tabs2 li").click(function() {
        var myID2 = $(this).attr("id");
        $(this).addClass("tab-active").siblings().removeClass("tab-active");
        $("#the-tabs2 div").hide();
        $("#" + myID2 + "-content").fadeIn(1500);
    });
})(jQuery);




















// Language Button & Settings
$(".lang-btn").on("click", function() {
    "use strict";
    if (!$(".lang-btn").hasClass("lang-en")) {
        $("[data-localize]").localize("lang", { language: "ar" });
        $("body").css({
            direction: "rtl",
            "text-align": "right"
        });
        $(".service i").css({
            right: "10px",
            left: "auto"
        });
        $(".feature i").css({ float: "right" });
        $(".contact-form label").css({ float: "right" });
        $("#about-slider").css({ direction: "ltr" });
        $("body, h1, h2, h3, h4, h5, h6").css("font-family", "'Cairo', sans-serif");
        $(".lang-btn").css("font-family", "'Varela Round', sans-serif");
        $(this).addClass("lang-en");
    } else {
        $("[data-localize]").localize("lang", { language: "en" });
        $("body").css({
            direction: "ltr",
            "text-align": "left"
        });
        $(".service i").css({
            right: "auto",
            left: "7px"
        });
        $(".feature i").css({ float: "left" });
        $(".contact-form label").css({ float: "left" });
        $("#about-slider").css({ direction: "rtl" });
        $("body").css("font-family", "'Varela Round', sans-serif");
        $("h1, h2, h3, h4, h5, h6").css("font-family", "'Montserrat', sans-serif");
        $(".lang-btn").css("font-family", "'Cairo', sans-serif");
        $(this).removeClass("lang-en");
    }
});
// send message button
$("#send").on("click", function() {
    if ($(".contact-form input").val() === "") {
        $(".alert-danger").fadeIn();
    } else {
        $(".alert-success").fadeIn();
        $(".alert-danger").fadeOut();
    }

});