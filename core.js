$(function($, undefined) {
    $('.hover-item').on('mouseenter', function () {
        $(this).find('div').addClass('display');
    });
    $('.hover-item').on('mouseleave', function () {
        $(this).find('div').removeClass('display');
    });

    $('.hover-item-animate').on('mouseenter', function () {
        $(this).find('div').animate(
        {
            bottom: "+0%"
        });
    });
    $('.hover-item-animate').on('mouseleave', function () {
        $(this).find('div').animate(
         {
             bottom: "-20%"
         });
    });
}(jQuery));