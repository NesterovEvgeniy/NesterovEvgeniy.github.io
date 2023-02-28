/* Small-map visibile */
const smallMap = document.querySelector('.header__location-map');
const locationLink = document.querySelector('.header__location');

locationLink.onmouseover = function () {
  smallMap.style.display = "block";
};
smallMap.addEventListener('mouseout', function () {
  smallMap.style.display = "none";
})
document.addEventListener('click', function () {
  smallMap.style.display = "none";
})

/* PopUp OrderForm */
const linkOrderCall = document.querySelector('.header__contacts');
const orderCallForm = document.querySelector('.popup__over-call');

linkOrderCall.addEventListener('click', function () {
  orderCallForm.style.display = "block";
})

const closeOrderCallForm = document.querySelector('.close-btn');

closeOrderCallForm.addEventListener('click', function () {
  orderCallForm.style.display = "none";
})

var inputsTel = document.querySelectorAll('input[type="tel"]');
Inputmask({
  "mask": "+7 (9 9 9) 9 9 9 - 9 9 - 9 9",
  showMaskOnHover: false
}).mask(inputsTel);


form.onchange = function () {
  var button = document.body.getElementsByClassName('application-btn')[0];
  if (button.disabled) button.disabled = false;
  else button.disabled = true;

  popupApplicationFormBtn.style.background = "var(--decor-color)";

  popupApplicationFormBtn.addEventListener('mousedown', function () {
    popupApplicationFormBtn.style.scale = "99%";
  })
}

popupApplicationFormBtn = document.querySelector('.application-btn');
popupApplicationForm = document.querySelector('.application-form');
popupAnswer = document.querySelector('.answer-text');

popupApplicationFormBtn.addEventListener('click', function () {
  popupApplicationForm.style.display = "none";
  popupApplicationFormBtn.style.display = "block";
  popupAnswer.style.display = "block";
})

/* Burger menu */
const contactInfo = document.querySelectorAll('.js-mob-txt-color');
const burgerMenu = document.querySelector('.conteiner-burger');
const mobileMenu = document.querySelector('.header__bottom');
const bottomMobileMenu = document.querySelector('.bottom__mobile-menu');
const mainPageMobile = document.querySelector('.main__page');

let countMenu = 0;
burgerMenu.addEventListener('click', function () {
  countMenu = ++countMenu;
  if (countMenu % 2 === 1) {
    contactInfo.forEach(item => {
      item.style.color = "#282828"
      item.style.fill = "#282828"
    })
    mobileMenu.style.display = "block"
    bottomMobileMenu.style.display = "block";
    mainPageMobile.style.display = "none";

  } else {
    contactInfo.forEach(item => {
      item.style.color = "#fff"
      item.style.fill = "#fff"
    })
    mobileMenu.style.display = "none"
    bottomMobileMenu.style.display = "none";
    mainPageMobile.style.display = "block";
  }
})

if (window.matchMedia("(max-width: 481px)").matches) {
  const navbar = document.querySelector('.header');
  window.onscroll = () => {
    if (window.scrollY > 1) {
      navbar.classList.add('header__top-active');
      contactInfo.forEach(item => {
        item.style.color = "#282828";
        item.style.fill = "#282828";
      })
    } else {
      navbar.classList.remove('header__top-active');
      contactInfo.forEach(item => {
        item.style.color = "#fff";
        item.style.fill = "#fff";
      })
    }
  }
}

/* PopUp Map */
const popupMap = document.querySelector('.popup__map');

locationLink.addEventListener('click', function () {
  popupMap.style.display = "block";
})
popupMap.addEventListener('click', function () {
  popupMap.style.display = "none";
})

/* Mouse scroll-down */
let mouseDown = document.querySelector('.main__page-scroll-down-img');
let mouseUp = document.querySelector('.main__page-scroll-up-img');

if (window.matchMedia("(min-width: 480px)").matches) {
  window.onscroll = () => {
    if (window.scrollY > 1) {
      mouseUp.style.display = "none";
      mouseDown.style.display = "block";
    }
  }
}


