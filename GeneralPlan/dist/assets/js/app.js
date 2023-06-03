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

/***/ "./src/assets/js/menu-mobile.js":
/*!**************************************!*\
  !*** ./src/assets/js/menu-mobile.js ***!
  \**************************************/
/***/ (function() {

eval("// burger-button\r\n\r\n$(function () {\r\n\r\n  $('.menu__btn').on('click', function () {\r\n    $('.menu-mobile__list').toggleClass('menu-mobile__list--active');\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://gulp-site/./src/assets/js/menu-mobile.js?");

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
/******/ 	__webpack_modules__["./src/assets/js/menu-mobile.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/slider-reviews.js"]();
/******/ 	
/******/ })()
;