/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/clients-slider.js":
/*!*****************************************!*\
  !*** ./src/assets/js/clients-slider.js ***!
  \*****************************************/
/***/ (() => {

eval("$(function () {\r\n  $('.clients__slider-block').slick({\r\n    infinite: true,\r\n    speed: 800,\r\n    slidesToShow: 5,\r\n    slidesToScroll: 1,\r\n    autoplay: false,\r\n    autoplaySpeed: 3000,\r\n    cssEase: 'linear',\r\n    prevArrow: '<button class=\"clients__slider-btn clients__slider-btnprev\"><div class=\"clients-slider__btn-box\"><img src=\"assets/img/clients/clients-arrow-right-icon.svg\" alt=\"\"></div></button>',\r\n    nextArrow: '<button class=\"clients__slider-btn clients__slider-btnnext\"><div class=\"clients-slider__btn-box\"><img src=\"assets/img/clients/clients-arrow-left-icon.svg\" alt=\"\"></div></button>',\r\n    /* responsive: [\r\n      {\r\n        breakpoint: 969,\r\n        settings: {\r\n          arrows: false\r\n        }\r\n      },\r\n    ] */\r\n  });\r\n});\n\n//# sourceURL=webpack://gulp-site/./src/assets/js/clients-slider.js?");

/***/ }),

/***/ "./src/assets/js/portfolio-sliders.js":
/*!********************************************!*\
  !*** ./src/assets/js/portfolio-sliders.js ***!
  \********************************************/
/***/ (() => {

eval("/* Portfolio slider */\r\n\r\n$(function () {\r\n  $('.portfolio__slider-block').slick({\r\n    infinite: true,\r\n    speed: 800,\r\n    slidesToShow: 4,\r\n    slidesToScroll: 1,\r\n    autoplay: true,\r\n    autoplaySpeed: 5000,\r\n    cssEase: 'linear',\r\n    prevArrow: '<button class=\"portfolio__slider-btn portfolio__slider-btnprev\"><div class=\"portfolio-slider__btn-box\"><img src=\"assets/img/portfolio/portfolio-arrow-right-icon.svg\" alt=\"\"></div></button>',\r\n    nextArrow: '<button class=\"portfolio__slider-btn portfolio__slider-btnnext\"><div class=\"portfolio-slider__btn-box\"><img src=\"assets/img/portfolio/portfolio-arrow-left-icon.svg\" alt=\"\"></div></button>',\r\n    /* responsive: [\r\n      {\r\n        breakpoint: 969,\r\n        settings: {\r\n          arrows: false\r\n        }\r\n      },\r\n    ] */\r\n  });\r\n});\n\n//# sourceURL=webpack://gulp-site/./src/assets/js/portfolio-sliders.js?");

/***/ }),

/***/ "./src/assets/js/services-tabs.js":
/*!****************************************!*\
  !*** ./src/assets/js/services-tabs.js ***!
  \****************************************/
/***/ (() => {

eval("// Services-tabs\r\n\r\n/* $(function () {\r\n\r\n  $('.tab').on('click', function (e) {\r\n    e.preventDefault();\r\n\r\n    $($(this).siblings()).removeClass('tab--active');\r\n\r\n    $($(this).closest('.services__tabs-inner').siblings().find('div')).removeClass('tabs-content--active')\r\n\r\n    $(this).addClass('tab--active')\r\n    $($(this).attr('href')).addClass('tabs-content--active');\r\n  });\r\n}); */\r\n\r\ndocument.addEventListener('DOMContentLoaded', function() {\r\n  var tabs = document.querySelectorAll('.tab');\r\n\r\n  function removeActiveClass(elements) {\r\n    elements.forEach(function(element) {\r\n      element.classList.remove('tab--active');\r\n    });\r\n  }\r\n\r\n  function removeActiveContent(elements) {\r\n    elements.forEach(function(element) {\r\n      element.classList.remove('tabs-content--active');\r\n    });\r\n  }\r\n\r\n  function activateTab(tab) {\r\n    var tabContentId = tab.getAttribute('href');\r\n    var tabContentContainers = document.querySelectorAll('.tabs-content');\r\n\r\n    removeActiveClass(tabs);\r\n    removeActiveContent(tabContentContainers);\r\n\r\n    tab.classList.add('tab--active');\r\n    document.querySelector(tabContentId).classList.add('tabs-content--active');\r\n  }\r\n\r\n  tabs.forEach(function(tab) {\r\n    tab.addEventListener('click', function(e) {\r\n      e.preventDefault();\r\n      activateTab(this);\r\n    });\r\n  });\r\n});\r\n\r\n\n\n//# sourceURL=webpack://gulp-site/./src/assets/js/services-tabs.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/clients-slider.js"]();
/******/ 	__webpack_modules__["./src/assets/js/portfolio-sliders.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/services-tabs.js"]();
/******/ 	
/******/ })()
;