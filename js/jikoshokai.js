'use strict';
{
    $(function() {


    var show = document.getElementById('show');
    var hide = document.getElementById('hide');
    var next = document.getElementById('next');
    var back = document.getElementById('back');
    var cover = document.getElementById('cover');
    var coverMenu = document.getElementById('cover-menu');
    var sorry = document.getElementById('sorry');
    var back = document.getElementById('back');
    var sorrySentence = document.getElementById('sorry-sentence');
    var menuId = document.getElementById('menu-id');
    var btnOk = document.getElementById('btn-ok');
    var firstCaution = document.getElementById('first-caution-id');
    var p = document.querySelector('p');
    var ulImgaes = document.getElementById('ul-images');
    


    window.onload = function(){
        // cover.classList.toggle('open-cover');
        // firstCaution.classList.toggle('open-first-caution');
        $('html,body').animate({scrollTop:0});
    };

    // btnOk.addEventListener('click',() => {
    //     cover.classList.toggle('open-cover');
    //     firstCaution.classList.toggle('open-first-caution');
    //     firstCaution.classList.toggle('set-first-caution');
    //     btnOk.classList.toggle('ok_btn_animation');
    //     });

    $('#show').click(function() {
        $('.menu-01').toggleClass('open-show');
        $('.menu-02').toggleClass('open-show');
        $('.menu-03').toggleClass('open-show');
        $('.menu-04').toggleClass('open-show');
        $('#cover-menu').toggleClass('open-cover-menu');
    });
    $('#hide').click(function() {
        $('.menu-01').toggleClass('open-show');
        $('.menu-02').toggleClass('open-show');
        $('.menu-03').toggleClass('open-show');
        $('.menu-04').toggleClass('open-show');
        $('#cover-menu').toggleClass('open-cover-menu');
    });

    // show.addEventListener('click',() => {
    // // menuId.classList.toggle('open-show');

    //     $('#menu-id > a').toggle('open-show');

    // coverMenu.classList.toggle('open-cover-menu');
    // });

    // hide.addEventListener('click',() => {
    // // menuId.classList.toggle('open-show');

    // $('#menu-id > a').toggle('open-show');

    // coverMenu.classList.toggle('open-cover-menu');
    // });

    coverMenu.addEventListener('click',() => {
        $('.menu-01').toggleClass('open-show');
        $('.menu-02').toggleClass('open-show');
        $('.menu-03').toggleClass('open-show');
        $('.menu-04').toggleClass('open-show');
        coverMenu.classList.toggle('open-cover-menu');
    });


    sorry.addEventListener('click',() => {
        sorrySentence.classList.toggle('open-sorry-sentence');
        });
    back.addEventListener('click',() => {
        sorrySentence.classList.toggle('open-sorry-sentence');
        });



    //to top-------------------------------------------------
    

    // $(window).scroll(function () {
    //     $('.btn-top').fadeIn('slow');
    // });

    var fromTop;
        $(window).scroll(function () {
            fromTop = $(window).scrollTop();
            // var screenBottom = $('body').height() - (fromTop + $(window).height());
            //ifに&& 20 < screenBottomをついかしたらフッターでは表示されなくなる
            if (fromTop === 0){
                $('.btn-top').fadeOut('slow');
            }else{
                $('.btn-top').fadeIn('slow');
            } 
        });

    
        $('.btn-top').click(function() {
            $('html,body').animate({scrollTop:0},'fast');
        });
    });

}
