$(function () {
  $('.clients__slider-block').slick({
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    prevArrow: '<button class="clients__slider-btn clients__slider-btnprev"><div class="clients-slider__btn-box"><img src="assets/img/clients/clients-arrow-right-icon.svg" alt=""></div></button>',
    nextArrow: '<button class="clients__slider-btn clients__slider-btnnext"><div class="clients-slider__btn-box"><img src="assets/img/clients/clients-arrow-left-icon.svg" alt=""></div></button>',
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