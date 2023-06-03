/* slider-reviews */

/* $(function () {
  $('.reviews__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="assets/img/main/   products/icons/arrow-black-left.svg" alt=""></button>',
    nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="assets/img/main/products/icons/arrow-black-right.svg" alt=""></button>',
     responsive: [
      {
        breakpoint: 1101,
        settings: "unslick"
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          dots: false
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false
        }
      },
    ]
  });
}); */




/* My variant */

$(function () {
  var $slider = $('.reviews__slider');

  $(window).on('load resize', function () {
    var windowWidth = $(window).width();

    if (windowWidth < 1100) {
      $slider.slick({
        infinite: true,
        initialSlide: 2,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: true,
        dots: false,
        prevArrow: '<button class="slider-reviews__slider-btn slider-reviews__slider-btnprev"><img src="./assets/img/slider-arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="slider-reviews__slider-btn slider-reviews__slider-btnnext"><img src="./assets/img/slider-arrow-right.svg" alt=""></button>',
        responsive: [
          {
            breakpoint: 540,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true,
              dots: false
            }
          },
        ]
      });
      

    } else {

      $slider.slick('unslick');

    }
  });
});

/* Chat variant */

/* $(function () {
  var $slider = $('.reviews__slider');

  function initializeSlider() {
    $slider.slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
    });
  }

  function destroySlider() {
    $slider.slick('unslick');
  }

  function handleResize() {
    var windowWidth = $(window).width();

    if (windowWidth < 1100) {
      initializeSlider();
    } else {
      destroySlider();
    }
  }

  $(window).on('load resize', function () {
    handleResize();
  });
}); */



