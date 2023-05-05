// filters-catalog

$(function () {
  $('.filter-style').styler();

  $('.filter__item-drop, .filter__extra').on('click', function () {
    $(this).toggleClass('filter__item-drop--active');
    $(this).next().slideToggle('1000');
  });

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 100000,
    max: 500000
  });

  $('.catalog__filter-btngrid').on('click', function () {
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
    $('.product-item__wrapper').removeClass('product-item__wrapper--list');

  });

  $('.catalog__filter-btnline').on('click', function () {
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
    $('.product-item__wrapper').addClass('product-item__wrapper--list');

  });

});