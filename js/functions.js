$(document).ready(function () {


    var containerHeader = $('.header').height();

    $(window).scroll(function () {

        var wScroll = $(this).scrollTop();

        if (wScroll <= containerHeader) {

            $('.header-box').css({
                'transform': 'translate(0px, -' + wScroll / 4 + '%)'
            });

        }

        if (wScroll > $('.about-us-wrapper').offset().top - $(window).height()) {

            var opacity = (wScroll - $('.about-us-wrapper').offset().top + 500) / (wScroll / 4);

            $('.about-us').css({'opacity': opacity});

        }


        if (wScroll > $('.our-team').offset().top - ($(window).height() / 1.2)) {

            $('.our-team figure').each(function (i) {

                setTimeout(function () {
                    $('.our-team figure').eq(i).addClass('is-showing');
                }, (700 * (Math.exp(i * 0.3))) - 700);

            })

        }

        if (wScroll > $('.our-skills').offset().top - ($(window).height() / 1.2)) {

            $('.our-skills figure').each(function (i) {

                setTimeout(function () {
                    $('.our-skills figure').eq(i).addClass('is-showing');
                }, (1000 * (Math.exp(i * 0.25))) - 1000);

            });

        }

    });
});


//skills

var options = {
    segmentShowStroke: false,
    percentageInnerCutout: 84,
    //animationIterationCount: 1,
    //animation: true,
    animationEasing: 'easeOutQuint',
    //animateRotate: false,
    //animateScale: true
};
var data = {
    html: [{
        value: 75,
        color: "rgb(255, 0, 0)"
    }, {
        value: 25,
        color: "rgb(218, 218, 218)"
    }],
    css: [{
        value: 80,
        color: "rgb(255, 0, 0)"
    }, {
        value: 20,
        color: "rgb(218, 218, 218)"
    }],
    wordpress: [{
        value: 70,
        color: "rgb(255, 0, 0)"
    }, {
        value: 30,
        color: "rgb(218, 218, 218)"
    }],
    seo: [{
        value: 85,
        color: "rgb(255, 0, 0)"
    }, {
        value: 15,
        color: "rgb(218, 218, 218)"
    }]
};

var offset = 3000;
$.each(data, function (key, data) {
    var canvas = document.querySelector('#' + key);
    if (canvas) {
        offset += 500;
        setTimeout(function () {
            var ctx = canvas.getContext('2d');
            var chart = new Chart(ctx);
            chart.Doughnut(data, options);
        }, offset);
    }
});

window.sr = ScrollReveal();
sr.reveal('.our-history__left', { duration: 1000 });
sr.reveal('.our-history__right', { duration: 2000 });
