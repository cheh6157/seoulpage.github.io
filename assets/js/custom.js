$(function(){

/**
 * 접근성 & UX 개선 (키보드 사용할때만 포커스 나오게)
 *
 * 
 *  언어선택 링크
 *
 * @version 1.0.0 |||| @since 2022-01-16 |||| @author 본인이름 (uno)
 */
    
  $('.choose-lang .btn-lang').click(function(){
        link = $('#langList').val();
        window.open(link)
    })


 /* 
 * * 메인비주얼슬라이드 + 탭구성 + 정지,재생
 * @version 1.0.0 |||| @since 2022-01-16 |||| @author 본인이름 (Nico)
 *
 * 
 */

 $('.sc-visual .slide.slide2 .title') .click(function(e){
  e.preventDefault();

  $('.sc-visual .slide.slide2').addClass('active');
  $('.sc-visual .slide.slide1').removeClass('active')
})

$('.sc-visual .slide.slide1 .title') .click(function(e){
  e.preventDefault();

  $('.sc-visual .slide.slide1').addClass('active');
  $('.sc-visual .slide.slide2').removeClass('active')
})



 var mainSlide = new Swiper(".sc-visual .swiper", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".sc-visual .page-wrap",
    type: "fraction",
  },
  navigation: {
    nextEl: ".sc-visual .btn-next",
    prevEl: ".sc-visual .btn-prev",
  },
});
 
$('.sc-visual .play-stop').click(function(e){
  e.preventDefault();

  if($('.sc-visual .play-stop .pause').hasClass('active')){
      $('.sc-visual .play-stop .pause').removeClass('active');
      $('.sc-visual .play-stop .play').addClass('active');

  }else{
      $('.sc-visual .play-stop .play').removeClass('active');
      $('.sc-visual .play-stop .pause').addClass('active');

  }
  if($('.sc-visual .play-stop .play').hasClass('active')){
    $('.sc-visual .play-stop .play').removeClass('active');
    $('.sc-visual .play-stop .pause').addClass('active');

}else{
    $('.sc-visual .play-stop .pause').removeClass('active');
    $('.sc-visual .play-stop .play').addClass('active');

}
})

$('.sc-visual .play-stop .pause') .click(function(e){
  e.preventDefault();
  mainSlide.autoplay.stop()
})  

$('.sc-visual .play-stop .play') .click(function(e){
  e.preventDefault();
  mainSlide.autoplay.start()
})






 /* 
 * 
 * 
 * 
 * 
 * sc-banner슬라이드 3개씩
 * @version 1.0.0 |||| @since 2022-01-16 |||| @author 본인이름 (Nico)
 */
     var bannerSlide = new Swiper(".sc-imgbanner .swiper", {
        slidesPerView: 3, //3개씩 나오시오
        spaceBetween: 43, //사이간격
        pagination: {
            el: ".sc-imgbanner .page-wrap",
            type: "fraction",
          },
          navigation: {
            nextEl: ".sc-imgbanner .btn-next",
            prevEl: ".sc-imgbanner .btn-prev",
          },          
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
      });

    
      $('.play-stop').click(function(e){
        e.preventDefault();

        if($('.play-stop .pause').hasClass('active')){
            $('.play-stop .pause').removeClass('active');
            $('.play-stop .play').addClass('active');

        }else{
            $('.play-stop .play').removeClass('active');
            $('.play-stop .pause').addClass('active');

        }
    })

    $('.play-stop .pause') .click(function(e){
        e.preventDefault();
        bannerSlide.autoplay.stop()
    })  
 
    $('.play-stop .play') .click(function(e){
        e.preventDefault();
        bannerSlide.autoplay.start()
    })

 
      /*

 * 
 * 관련링크 아코디언
 * @version 1.0.0 |||| @since 2022-01-16 |||| @author 본인이름 (Nico)
 *
 *
 */
    $('.btn-related').click(function(e){
        e.preventDefault();
        $('.sub-related').stop().slideUp();
        $(this).siblings('.sub-related').stop().slideToggle();
    })
 
 /* 
 * 
 * 
 * 상단버튼
 * @version 1.0.0 |||| @since 2022-01-16 |||| @author 본인이름 (Nico)
 */











})//이거는 하나만 쓰세요 $(function())입니다