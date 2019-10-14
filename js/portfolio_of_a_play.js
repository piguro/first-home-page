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
        firstCaution.classList.toggle('open-first-caution');
        $('html,body').animate({scrollTop:0});
    };

    btnOk.addEventListener('click',() => {
        cover.classList.toggle('open-cover');
        firstCaution.classList.toggle('open-first-caution');
        firstCaution.classList.toggle('set-first-caution');
        btnOk.classList.toggle('ok_btn_animation');
        });

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


//slide show------------------------------------------------------------------

    // const images = [
    //     './home00.jpg',
    //     './home01.jpg',
    //     './home02.jpg',
    //     './home03.jpg',
    //     './home04.jpg',
    // ];

    // let currentNum = 0;

    // setMainImage(images[0]);

    // next.addEventListener('click',() =>{
    //     if (currentNum < 4) {
    //         currentNum++;
    //         setMainImage(images[currentNum]);
    //         console.log(currentNum);

    //     }else{
    //         currentNum = 0;
    //         setMainImage(images[currentNum]);
    //         console.log(currentNum);

    //     }
    // });

    // back.addEventListener('click',() =>{
    //     if (currentNum > 0) {
    //         currentNum--;
    //         setMainImage(images[currentNum]);
    //         console.log(currentNum);

    //     }else{
    //         currentNum = 4;
    //         setMainImage(images[currentNum]);
    //         console.log(currentNum);
    //     }
    // });

    // function setMainImage(image){
    //     document.getElementById('home').src = image;
    // };

    // function autoSetImage() {
    //     if (currentNum < 4) {
    //         currentNum++;
    //     }else{
    //         currentNum = 0;
    //     }
    //     setMainImage(images[currentNum]);
    // }

    // setMainImage(images[currentNum]);

    // setInterval(autoSetImage,4000);

    // var w = window.innerWidth;

    // var gH = w / 16 * 9;

    // console.log(w);
    



    // for (let i = 0; i < images.length; i++) {
    //     const element = images[i];
    //     var img = document.createElement('img');
    //     ulImgaes.appendChild(img).setAttribute('id','home-img0'+ i);
    //     document.getElementById('home-img0'+ i).setAttribute('src',images[i]);
    //     document.getElementById('home-img0'+ i).style.width = '90%';
    //     document.getElementById('home-img0'+ i).style.height = 'auto';
    //     document.getElementById('home-img0'+ i).style.maxHeight = 'calc(100vh - 44px)';
    //     document.getElementById('home-img0'+ i).classList.add('img-set-0' + i);
    // }
    
    //     $('.content_img').css('width', w + 'px');
    //     $('.content_img').css('height', gH + 'px');
        
    //     $('#ul-images').css('width', w + 'px');
    //     $('#ul-images').css('height', gH + 'px');
        


    //     var j = 0;

        
    //     var max = images.length - 1;


    //     setInterval(function(){
            
    //        j++;
    //        j %= 5;
    //        console.log(j);
            
    //     },1000);


    $('#ul-images').slick({
        dots:true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover:false,
        pauseOnFocus:false,
        // dotsClass: 'slick-dot',

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
