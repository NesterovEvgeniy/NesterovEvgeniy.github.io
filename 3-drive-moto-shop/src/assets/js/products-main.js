// favorite-button

$(function () {

  $('.product-item__favorite').on('click', function () {
    $(this).toggleClass('product-item__favorite--active');
  });
});