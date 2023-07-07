/* Portfolio slider */

$(function () {
  $('.portfolio__slider-block').slick({
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    prevArrow: '<button class="portfolio__slider-btn portfolio__slider-btnprev"><div class="portfolio-slider__btn-box"><img src="assets/img/portfolio/portfolio-arrow-right-icon.svg" alt=""></div></button>',
    nextArrow: '<button class="portfolio__slider-btn portfolio__slider-btnnext"><div class="portfolio-slider__btn-box"><img src="assets/img/portfolio/portfolio-arrow-left-icon.svg" alt=""></div></button>',
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