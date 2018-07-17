$(window).ready(function() {

    setTimeout(function () {
        $(".wrapper").animate({opacity: 1}, 500);
    }, 200);

    $('.current-value').click(function() {
        $('.type').fadeToggle(100);
    });

    $('.car-parts').click(function() {
        $('.parts').fadeToggle(100);
    });
});