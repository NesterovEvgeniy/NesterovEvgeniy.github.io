// mobile__footer-accordeon

$(function () {

  $('.aside__btn').on('click', function () {
    $(this).next().slideToggle();
  });

});