$(document).ready(function(){
    var $butt = $('#hcb'),
        $menu = $('#menu'),
        $ws5  = $('.header__whitespace5'),
        $ws6  = $('.header__whitespace6'),
        $hg   = $('.header-catalog'),
        $hs   = $('.header-conditions'),
        $hmc  = $('#hmc'),
        $cob  = $('#ordercall-button-close'),
        $oo   = $('.ordercall-overlay'),
        $dcl   = $('.header-problem__link-dont-call');

    $butt.on('click', function(){
        $menu.toggleClass('menu-visible');
        $ws5.toggleClass('header-bottomline-clicked');
        $ws6.toggleClass('header-bottomline-clicked');
        $hg.toggleClass('header-bottomline-clicked');
        $hs.toggleClass('header-bottomline-clicked');
        $butt.toggleClass('header-catalog-button-clicked');
    });

    $cob.on('click', function(){
      $oo.hide();
      console.log('clicked');
  });

    $dcl.on('click', function(){
      $oo.show();
      console.log('clicked');
    });

    $hmc.on('click', function() {
        $menu.removeClass('menu-visible');
        $ws5.removeClass('header-bottomline-clicked');
        $ws6.removeClass('header-bottomline-clicked');
        $hg.removeClass('header-bottomline-clicked');
        $hs.removeClass('header-bottomline-clicked');
        $butt.removeClass('header-catalog-button-clicked');
    });

    $('.slick-novelties').slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        prevArrow: $('.novelties__buttons-button-back'),
        nextArrow: $('.novelties__buttons-button-forward'),
        responsive: [
            {
              breakpoint: 1240,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: false,
                // centerMode: true,
                // centerPadding: '60px'
              }
            },
            {
              breakpoint: 740,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                // centerMode: true,
                // centerPadding: '20px',
                dots: false
              }
            }
        ]
    });

    $('.slick-novelties-second').slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: $('.novelties__buttons-button-back-second'),
        nextArrow: $('.novelties__buttons-button-forward-second'),
        responsive: [
            {
              breakpoint: 1240,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: false,
                // centerMode: true,
                // centerPadding: '60px'
              }
            },
            {
              breakpoint: 740,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                // centerMode: true,
                // centerPadding: '20px',
                dots: false
              }
            }
        ]
    });

    $('.blog__story-slick').slick({
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: $('.blog-wrapper__buttons-button-back'),
        nextArrow: $('.blog-wrapper__buttons-button-forward'),
        responsive: [
            {
              breakpoint: 1240,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                // centerMode: true,
                // centerPadding: '50px'
              }
            },
            {
              breakpoint: 740,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '10px',
                dots: false
              }
            }
        ]
    });

    $('.youwatched__slick').slick({
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 2,
      prevArrow: $('.youwatched-wrapper__buttons-button-back'),
      nextArrow: $('.youwatched-wrapper__buttons-button-forward'),
      responsive: [
          {
            breakpoint: 1240,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 740,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
      ]
  });
});