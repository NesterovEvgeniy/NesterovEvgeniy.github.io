/* slider-product */

$(function () {
  $('.product-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="assets/img/main/products/icons/arrow-black-left.svg" alt=""></button>',
    nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="assets/img/main/products/icons/arrow-black-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          dots: true
        }
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,
          dots: true
        }
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,
          dots: true
        }
      }
    ]
  });
});



