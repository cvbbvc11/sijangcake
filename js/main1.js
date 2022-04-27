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
    $('.tab_btn ul li a').click(function(e){
        //a태그의 링크 속성을 막음
        e.preventDefault();
        var btnNum=$(this).parent('li').index();
        if(!($(this).hasClass('active'))){
            $('.tab_btn ul li a').removeClass('active');
            $(this).addClass('active');
            imgMove(btnNum);
            desMove(btnNum);
        }
    });
    function imgMove(btnNum){
        var imgWidth=$('.tab_img ul li').width();
        var moving=-(btnNum*imgWidth);
        $('.tab_img ul').stop().animate({
            left:moving
        });
    }
    //.tab_des ul li의 첫번째 객체를 currentDes에 저장
    var currentDes=$('.tab_des ul li:first');
    //oldDEs변수 선언
    var oldDes='';
    //desMove함수 선언, btnNum은 
    function desMove(btnNum){
        oidDes=currentDes;
        currentDes=$('.tab_des ul li').eq(btnNum);
        oidDes.stop().animate({
            opacity:0,
            top:-750
        },500,function(){
            oidDes.css({
                opacity:0,
                top:750
            });
        });
        //currentDes에 있는 li객체는 아래에서 올라오면서 나타남
        currentDes.delay(700).stop().animate({
            opacity:1,
            top:0
        },500);   
    }
    $('.t1').addClass('active');
    $('.t2').removeClass('active');
    $('.new').click(function(e){
        e.preventDefault();
        $('.t1').addClass('active');
        $('.t2').removeClass('active');
        $('.new').addClass('active');
        $('.best').removeClass('active');
    });
    $('.best').click(function(e){
        e.preventDefault();
        $('.t1').removeClass('active');
        $('.t2').addClass('active');
        $('.new').removeClass('active');
        $('.best').addClass('active');
    });
    var swiper = new Swiper(".mySwiper2", {
        spaceBetween:70,
        navigation: {
            nextEl: ".mynext2",
            prevEl: ".myprev2",
        },
        scrollbar: {
            el: ".bar1"
        },
    });
    var swiper = new Swiper(".mySwiper3", {
        spaceBetween:70,
        navigation: {
            nextEl: ".mynext3",
            prevEl: ".myprev3",
        },
        scrollbar: {
            el: ".bar2"
        },
    });
    $('.news_right ul li a').click(function(e){
        //a태그의 링크 속성을 막음
        e.preventDefault();
        var btnNum=$(this).parent('li').index();
        $('.news_right ul li a').removeClass('active');
        $(this).addClass('active');
        imgMove2(btnNum);
    });
    function imgMove2(btnNum){
        var imgWidth=$('.news_senter ul li').width();
        var moving=-(btnNum*imgWidth);
        $('.news_senter ul').animate({
            left:moving
        });
    }
    $('.top').click(function(){
        $('html,bood').animate({
            scrollTop:0
        })
    });
    $('.total_menu').click(function(){
        $('.site').animate({
            right:0
        }, 700, function(){
            navAnil();
        });
    });
    $('.close_btn').click(function(){
        $('.site').animate({
            right:'-100%'
        }, 700, function(){
            navAniEnd();
        });
    });
    function navAniEnd(){
        $('body').removeClass('active');
        $('.site nav > ul > li').css({
            'opacity':0,
            'margin-top':'50px'
        });
        $('.site .site_right ul').css({
            'opacity':0,
            'margin-top':'150px'
        });
        $('.site .site_right .site_down').css({
            'opacity':0,
            'margin-top':'200px'
        });
    }
    navAniEnd();
    function navAnil(){
        $('body').addClass('active');
        $('.site nav > ul > li').each(function(){
            var liNum=$(this).index();
            $(this).delay(100*liNum).animate({
                'opacity':1,
                'margin-top':0
            });
        });
        $('.site .site_right ul').each(function(){
            var siteliNum=$(this).index();
            $(this).delay(150*siteliNum).animate({
                'opacity':1,
                'margin-top':'60px'
            });
        });
        $('.site .site_right .site_down').each(function(){
            var downliNum=$(this).index();
            $(this).delay(170*downliNum).animate({
                'opacity':1,
                'margin-top':'80px'
            });
        });
    }
    $('.site_bg ul li').removeClass('active');
    $('.site_bg ul li:first').addClass('active');
    $('.site_left nav > ul > li > a').hover(function(){
        if(!($(this).hasClass('active'))){
            $('.site_left nav > ul > li > a').removeClass('active');
            $(this).addClass('active');
            var siteNum=$(this).parent('li').index();
            $('.site_bg ul li').each(function(){
                if(siteNum==$(this).index()){
                    //$('.site_bg ul li').hide();
                    $('.site_bg ul li').removeClass('active');
                    //$(this).show();
                    $(this).addClass('active');
                }  
            });
            $('.site_left nav > ul > li > p').removeClass('active');
            $(this).next().addClass('active');
            $('.site_left nav .sub5').hide();
            $(this).next().next().slideDown();
        }
    });
    $('.site_left nav > ul > li').mouseleave(function(){
        $(this).find('a').removeClass('active');
        $(this).find('p').removeClass('active');
        $(this).find('.sub5').hide();
        $('.site_bg ul li').removeClass('active');
        $('.site_bg ul li:first').addClass('active');
    });
    //top버튼이 아래쪽에서 조금 위쪽에 위치되어 있다가 홈페이지를 위로 올리면(footer높이만큼) 브라우저오른족아래에 고정되도록
    $(window).scroll(function(){
        if($(window).scrollTop()+$(window).height() >= $('footer').offset().top){
            $('.top').addClass('active');
        }else{
            $('.top').removeClass('active');
        }
    });
});
