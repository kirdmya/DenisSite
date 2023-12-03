$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true, // Показывать точки для навигации
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>'
    });
});