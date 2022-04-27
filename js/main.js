$(document).ready(function(){
    $('.menu1 nav').hover(function(){
        $('.menu1 .sub').stop().slideDown();
        $('.sub_bg').stop().slideDown();
    },function(){
        $('.menu1 .sub').stop().slideUp();
        $('.sub_bg').stop().slideUp();
    });
    $('.menu2 nav').hover(function(){
        $('.menu2 .sub').stop().slideDown();
        $('.sub_bg').stop().slideDown();
    },function(){
        $('.menu2 .sub').stop().slideUp();
        $('.sub_bg').stop().slideUp();
    });

    $('.search a').click(function(){
        $('.search_area').stop().slideDown({
            duration:1000,
            easing:"easeOutBack"
        });
    });
    $('.search_area > a').click(function(){
        $('.search_area').stop().slideUp();
    });
    var swiper = new Swiper(".mySwiper", {
        spaceBetween:100,
        loop:true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});
