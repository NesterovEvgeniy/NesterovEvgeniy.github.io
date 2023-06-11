
/* PopUp Map */
const locationLink = document.querySelector('.footer__address');
const popupMap = document.querySelector('.popup__map');

locationLink.addEventListener('click', function () {
  popupMap.style.display = "block";
})
popupMap.addEventListener('click', function () {
  popupMap.style.display = "none";
})
