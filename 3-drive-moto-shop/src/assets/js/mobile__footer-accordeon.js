// mobile__footer-accordeon

$(function () {

  /* $(".footer-list").hide(); */
  $('.footer__topdrop').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('footer__topdrop--active');
  });

});



