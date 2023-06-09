/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/form-functions.js":
/*!*****************************************!*\
  !*** ./src/assets/js/form-functions.js ***!
  \*****************************************/
/***/ (function() {

eval("/* form-functions */\r\n\r\n/* name-mask */\r\nconst nameInput = document.querySelector('.form__person-name');\r\n\r\nnameInput.addEventListener('input', function(event) {\r\n  const inputValue = event.target.value;\r\n  const latinOnlyValue = inputValue.replace(/[^a-zA-Z]/g, '');\r\n  event.target.value = latinOnlyValue;\r\n});\r\n\r\n/* telephone-mask */\r\nconst inputTel = document.querySelector('input[type=\"tel\"]');\r\nInputmask({\r\n  mask: \"+7 (9 9 9) 9 9 9 - 9 9 - 9 9\",\r\n  showMaskOnHover: true\r\n}).mask(inputTel);\r\n\r\n\r\n/* email-mask */\r\nconst emailInput = document.querySelector('.form__person-email');\r\nInputmask({\r\n  mask: \"*{1,20}[.*{1,20}]@*{1,20}.*{2,4}\",\r\n  greedy: false,\r\n  clearIncomplete: true,\r\n  onBeforePaste: function (pastedValue, opts) {\r\n    pastedValue = pastedValue.toLowerCase();\r\n    return pastedValue.replace(\"mailto:\", \"\");\r\n  },\r\n  definitions: {\r\n    '*': {\r\n      validator: \"[0-9A-Za-z-_]\",\r\n      casing: \"lower\"\r\n    }\r\n  }\r\n}).mask(emailInput);\r\n\r\n\r\n/* btn-submit-activate */\r\nconst popupApplicationFormBtn = document.querySelector('.application-btn');\r\nconst popupApplicationForm = document.querySelector('.application-form');\r\nconst colorDecor = getComputedStyle(document.documentElement).getPropertyValue('--color-decor');  \r\n\r\nform.onchange = function () {\r\n  const button = document.body.getElementsByClassName('application-btn')[0];\r\n  if (button.disabled) {\r\n    button.disabled = false;\r\n    popupApplicationFormBtn.style.background = colorDecor;\r\n    popupApplicationFormBtn.style.border = 'none';\r\n    popupApplicationFormBtn.classList.add('application-btn--active');\r\n\r\n  } else {\r\n    button.disabled = true;\r\n    popupApplicationFormBtn.style.background = \"#2a2a2a\";\r\n    popupApplicationFormBtn.style.scale = \"99%\";\r\n    popupApplicationFormBtn.classList.remove('application-btn--active');\r\n  }\r\n\r\n    popupApplicationForm.addEventListener ('submit', handleFormSubmit);\r\n    function handleFormSubmit(event) {\r\n    event.preventDefault();\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://gulp-site/./src/assets/js/form-functions.js?");

/***/ }),

/***/ "./src/assets/js/location-map.js":
/*!***************************************!*\
  !*** ./src/assets/js/location-map.js ***!
  \***************************************/
/***/ (function() {

eval("\r\n/* PopUp Map */\r\nconst locationLink = document.querySelector('.footer__address');\r\nconst popupMap = document.querySelector('.popup__map');\r\n\r\nlocationLink.addEventListener('click', function () {\r\n  popupMap.style.display = \"block\";\r\n})\r\npopupMap.addEventListener('click', function () {\r\n  popupMap.style.display = \"none\";\r\n})\r\n\n\n//# sourceURL=webpack://gulp-site/./src/assets/js/location-map.js?");

/***/ }),

/***/ "./src/assets/js/menu-mobile.js":
/*!**************************************!*\
  !*** ./src/assets/js/menu-mobile.js ***!
  \**************************************/
/***/ (function() {

eval("// burger-button\r\n\r\nconst menuBtn = document.querySelector('.menu__btn');\r\nconst menuList = document.querySelector('.menu-mobile__list');\r\n\r\nmenuBtn.addEventListener('click', function () {\r\n  menuList.classList.toggle('menu-mobile__list--active');\r\n});\r\n\r\ndocument.addEventListener('click', function (event) {\r\n  const сlickInsideMenu = menuList.contains(event.target) || menuBtn.contains(event.target);\r\n\r\n  if (!сlickInsideMenu) {\r\n    menuList.classList.remove('menu-mobile__list--active');\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://gulp-site/./src/assets/js/menu-mobile.js?");

/***/ }),

/***/ "./src/assets/js/popup-cases.js":
/*!**************************************!*\
  !*** ./src/assets/js/popup-cases.js ***!
  \**************************************/
/***/ (function() {

eval("/* popup cases */\r\n\r\n/* const buttons = document.querySelectorAll('.work__cases-popup-btn');\r\nconst popups = document.querySelectorAll('.popup__cases-wrapper');\r\n\r\nbuttons.forEach((button, index) => {\r\n  button.addEventListener('click', (event) => {\r\n    event.stopPropagation();\r\n    popups[index].style.display = 'block';\r\n  });\r\n});\r\n\r\npopups.forEach((popup) => {\r\n  const closeBtn = popup.querySelector('.close-btn');\r\n  closeBtn.addEventListener('click', () => {\r\n    popup.style.display = 'none';\r\n  });\r\n\r\n  const popupWorkAreaForm = popup.querySelector('.js-form');\r\n  document.addEventListener('click', (event) => {\r\n    if (!popupWorkAreaForm.contains(event.target)) {\r\n      popup.style.display = 'none';\r\n    }\r\n  });\r\n}); */\r\n\r\nconst buttons = document.querySelectorAll('.work__cases-popup-btn');\r\nconst popups = document.querySelectorAll('.popup__cases-wrapper');\r\nconst images = document.querySelectorAll('.case-popup-link');\r\n\r\nbuttons.forEach((button, index) => {\r\n  button.addEventListener('click', (event) => {\r\n    event.stopPropagation();\r\n    popups[index].style.display = 'block';\r\n  });\r\n});\r\n\r\nimages.forEach((image, index) => {\r\n  image.addEventListener('click', (event) => {\r\n    event.stopPropagation();\r\n    popups[index].style.display = 'block';\r\n  });\r\n});\r\n\r\npopups.forEach((popup) => {\r\n  const closeBtn = popup.querySelector('.close-btn');\r\n  closeBtn.addEventListener('click', () => {\r\n    popup.style.display = 'none';\r\n  });\r\n\r\n  const popupWorkAreaForm = popup.querySelector('.js-form');\r\n  document.addEventListener('click', (event) => {\r\n    if (!popupWorkAreaForm.contains(event.target)) {\r\n      popup.style.display = 'none';\r\n    }\r\n  });\r\n});\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://gulp-site/./src/assets/js/popup-cases.js?");

/***/ }),

/***/ "./src/assets/js/popup-projects.js":
/*!*****************************************!*\
  !*** ./src/assets/js/popup-projects.js ***!
  \*****************************************/
/***/ (function() {

eval("/* popup-landscape-projects */\r\n\r\nconst buttons = document.querySelectorAll('.project__popup-btn');\r\nconst imageLinks = document.querySelectorAll('.project__img-link');\r\nconst popups = document.querySelectorAll('.popup__projects-wrapper');\r\n\r\nbuttons.forEach((button, index) => {\r\n  button.addEventListener('click', (event) => {\r\n    event.stopPropagation();\r\n    popups[index].style.display = 'block';\r\n  });\r\n});\r\n\r\nimageLinks.forEach((imageLink, index) => {\r\n  imageLink.addEventListener('click', (event) => {\r\n    event.stopPropagation();\r\n    popups[index].style.display = 'block';\r\n  });\r\n});\r\n\r\npopups.forEach((popup) => {\r\n  const closeBtn = popup.querySelector('.close-btn');\r\n  closeBtn.addEventListener('click', () => {\r\n    popup.style.display = 'none';\r\n  });\r\n\r\n  const popupWorkAreaForm = popup.querySelector('.js-form');\r\n  document.addEventListener('click', (event) => {\r\n    if (!popupWorkAreaForm.contains(event.target)) {\r\n      popup.style.display = 'none';\r\n    }\r\n  });\r\n});\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://gulp-site/./src/assets/js/popup-projects.js?");

/***/ }),

/***/ "./src/assets/js/popup-work-area.js":
/*!******************************************!*\
  !*** ./src/assets/js/popup-work-area.js ***!
  \******************************************/
/***/ (function() {

eval("/* popup work-area */\r\n\r\nconst buttons = document.querySelectorAll('.work__area-popup-btn');\r\nconst popups = document.querySelectorAll('.popup__area-wrapper');\r\n\r\nbuttons.forEach((button, index) => {\r\n  button.addEventListener('click', (event) => {\r\n    event.stopPropagation();\r\n    popups[index].style.display = 'block';\r\n  });\r\n});\r\n\r\npopups.forEach((popup) => {\r\n  const closeBtn = popup.querySelector('.close-btn');\r\n  closeBtn.addEventListener('click', () => {\r\n    popup.style.display = 'none';\r\n  });\r\n\r\n  const popupWorkAreaForm = popup.querySelector('.js-form');\r\n  document.addEventListener('click', (event) => {\r\n    if (!popupWorkAreaForm.contains(event.target)) {\r\n      popup.style.display = 'none';\r\n    }\r\n  });\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack://gulp-site/./src/assets/js/popup-work-area.js?");

/***/ }),

/***/ "./src/assets/js/projects-tabs.js":
/*!****************************************!*\
  !*** ./src/assets/js/projects-tabs.js ***!
  \****************************************/
/***/ (function() {

eval("// Projects-tabs\r\n\r\n$(function () {\r\n\r\n  $('.tab').on('click', function (e) {\r\n    e.preventDefault();\r\n\r\n    $($(this).siblings()).removeClass('tab--active');\r\n\r\n    $($(this).closest('.projects__tabs-inner').siblings().find('div')).removeClass('tabs-content--active')\r\n\r\n    $(this).addClass('tab--active')\r\n    $($(this).attr('href')).addClass('tabs-content--active');\r\n  });\r\n});\n\n//# sourceURL=webpack://gulp-site/./src/assets/js/projects-tabs.js?");

/***/ }),

/***/ "./src/assets/js/slider-reviews.js":
/*!*****************************************!*\
  !*** ./src/assets/js/slider-reviews.js ***!
  \*****************************************/
/***/ (function() {

eval("/* slider-reviews */\r\n\r\n/* $(function () {\r\n  $('.reviews__slider').slick({\r\n    slidesToShow: 2,\r\n    slidesToScroll: 1,\r\n    arrows: true,\r\n    dots: false,\r\n    prevArrow: '<button class=\"product-slider__slider-btn product-slider__slider-btnprev\"><img src=\"assets/img/main/   products/icons/arrow-black-left.svg\" alt=\"\"></button>',\r\n    nextArrow: '<button class=\"product-slider__slider-btn product-slider__slider-btnnext\"><img src=\"assets/img/main/products/icons/arrow-black-right.svg\" alt=\"\"></button>',\r\n     responsive: [\r\n      {\r\n        breakpoint: 1101,\r\n        settings: \"unslick\"\r\n      },\r\n      {\r\n        breakpoint: 1100,\r\n        settings: {\r\n          slidesToShow: 2,\r\n          slidesToScroll: 1,\r\n          arrows: true,\r\n          dots: false\r\n        }\r\n      },\r\n      {\r\n        breakpoint: 1100,\r\n        settings: {\r\n          slidesToShow: 1,\r\n          slidesToScroll: 1,\r\n          arrows: true,\r\n          dots: false\r\n        }\r\n      },\r\n    ]\r\n  });\r\n}); */\r\n\r\n\r\n\r\n\r\n/* My variant */\r\n\r\n$(function () {\r\n  var $slider = $('.reviews__slider');\r\n\r\n  $(window).on('load resize', function () {\r\n    var windowWidth = $(window).width();\r\n\r\n    if (windowWidth < 1100) {\r\n      $slider.slick({\r\n        infinite: true,\r\n        initialSlide: 2,\r\n        slidesToShow: 2,\r\n        slidesToScroll: 1,\r\n        variableWidth: true,\r\n        arrows: true,\r\n        dots: false,\r\n        prevArrow: '<button class=\"slider-reviews__slider-btn slider-reviews__slider-btnprev\"><img src=\"./assets/img/slider-arrow-left.svg\" alt=\"\"></button>',\r\n        nextArrow: '<button class=\"slider-reviews__slider-btn slider-reviews__slider-btnnext\"><img src=\"./assets/img/slider-arrow-right.svg\" alt=\"\"></button>',\r\n        responsive: [\r\n          {\r\n            breakpoint: 540,\r\n            settings: {\r\n              slidesToShow: 1,\r\n              slidesToScroll: 1,\r\n              arrows: true,\r\n              dots: false\r\n            }\r\n          },\r\n        ]\r\n      });\r\n      \r\n\r\n    } else {\r\n\r\n      $slider.slick('unslick');\r\n\r\n    }\r\n  });\r\n});\r\n\r\n/* Chat variant */\r\n\r\n/* $(function () {\r\n  var $slider = $('.reviews__slider');\r\n\r\n  function initializeSlider() {\r\n    $slider.slick({\r\n      slidesToShow: 2,\r\n      slidesToScroll: 1,\r\n      arrows: true,\r\n      dots: false,\r\n    });\r\n  }\r\n\r\n  function destroySlider() {\r\n    $slider.slick('unslick');\r\n  }\r\n\r\n  function handleResize() {\r\n    var windowWidth = $(window).width();\r\n\r\n    if (windowWidth < 1100) {\r\n      initializeSlider();\r\n    } else {\r\n      destroySlider();\r\n    }\r\n  }\r\n\r\n  $(window).on('load resize', function () {\r\n    handleResize();\r\n  });\r\n}); */\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://gulp-site/./src/assets/js/slider-reviews.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/form-functions.js"]();
/******/ 	__webpack_modules__["./src/assets/js/location-map.js"]();
/******/ 	__webpack_modules__["./src/assets/js/menu-mobile.js"]();
/******/ 	__webpack_modules__["./src/assets/js/popup-cases.js"]();
/******/ 	__webpack_modules__["./src/assets/js/popup-projects.js"]();
/******/ 	__webpack_modules__["./src/assets/js/popup-work-area.js"]();
/******/ 	__webpack_modules__["./src/assets/js/projects-tabs.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/slider-reviews.js"]();
/******/ 	
/******/ })()
;