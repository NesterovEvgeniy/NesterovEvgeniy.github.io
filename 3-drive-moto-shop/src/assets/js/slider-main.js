/* slider-main */

$(function () {
  $('.banner-section__slider').slick({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    /*     autoplay: true, */
    autoplaySpeed: 8000,
    fade: true,
    cssEase: 'linear',
    prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="assets/img/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="assets/img/arrow-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 969,
        settings: {
          arrows: false
        }
      },
    ]
  });
});



