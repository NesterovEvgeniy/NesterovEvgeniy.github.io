$(function () {
  $('.lamidov-gallary__slider').slick({
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    prevArrow: '<button class="clients__slider-btn clients__slider-btnprev"><div class="clients-slider__btn-box"><img src="assets/img/picture/arrow-left.svg" alt=""></div></button>',
    nextArrow: '<button class="clients__slider-btn clients__slider-btnnext"><div class="clients-slider__btn-box"><img src="assets/img/picture/arrow-right.svg" alt=""></div></button>',

/*     src\assets\img\picture\arrow-left.svg */
    /* responsive: [
      {
        breakpoint: 969,
        settings: {
          arrows: false
        }
      },
    ] */
  });
});