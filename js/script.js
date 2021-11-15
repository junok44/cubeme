$(document).ready(function() {

    
     // 모달창 기능 
    let modal = $('.modal');    
    let modal_cont = $('.modal-cont');
    let modal_close = $('.modal-close');
    modal.fadeIn();
    modal_close.click(function(){
        modal.fadeOut();
    });
    modal.click(function(){
        modal.fadeOut();
    });
    modal_cont.click(function(event) {
        event.stopPropagation();
    });
    // 탭메뉴
    let all_product =$('.all-product');
    let more_gnb = $('.more-gnb');

    $.each(all_product, function(index, item) {
        $(this).mouseenter(function(){
            $(this).find('.more-gnb').show();
        });
    });


    // 비주얼슬라이드
    new Swiper('.sw-visual', {
        effect: "fade",
        loop:true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
         pagination: {
          el: ".sw-visual-pg",
          type: "fraction",
        },
    });

    // 배너슬라이드
    new Swiper('.sw-slide', {
        slidesPerView: 3,
        slidesPerGroup: 2,
        spaceBetween: 1,
        pagination: {
            el: ".sw-slide-pg",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
});