// burger-button

$(function () {

  $('.menu__btn').on('click', function () {
    $('.menu-mobile__list').toggleClass('menu-mobile__list--active');
  });
});
