/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_audio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/audio */ "./src/js/modules/audio.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");


window.addEventListener('DOMContentLoaded', () => {
  Object(_modules_audio__WEBPACK_IMPORTED_MODULE_0__["default"])('.audio__play');
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])('.slider__item', '.btn-next', '.btn-prev'); //анимация при наведении на соц. иконки

  const socialIcons = document.querySelectorAll('.footer__icon');
  socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      icon.classList.add('animate__animated', 'animate__pulse');
    });
  });
});

/***/ }),

/***/ "./src/js/modules/audio.js":
/*!*********************************!*\
  !*** ./src/js/modules/audio.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const audio = triggerSelector => {
  const btnPlay = document.querySelectorAll(triggerSelector);
  let myAudio = new Audio('./assets/audio/Radiohead-Paranoid-Android.mp3');
  btnPlay.forEach(btn => {
    btn.addEventListener('click', () => {
      myAudio.play();
      btn.classList.toggle('paused');
      btn.addEventListener('click', () => {
        myAudio.pause();
      });
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (audio);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const slider = (slidesSelector, nextBtnSelector, prevBtnSelector) => {
  const slides = document.querySelectorAll(slidesSelector),
        next = document.querySelector(nextBtnSelector),
        prev = document.querySelector(prevBtnSelector);
  let slideIndex = 1;
  showSlides(slideIndex);

  function showSlides(n) {
    if (n == slides.length - 2) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length - 3;
    }

    slides.forEach(slide => {
      slide.style.display = 'none';
    });

    try {
      slides[slideIndex - 1].style.display = 'block';
      slides[slideIndex].style.display = 'block';
      slides[slideIndex + 1].style.display = 'block';
    } catch (e) {} // console.log(slideIndex);

  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  next.addEventListener('click', () => {
    plusSlides(+1);
  });
  prev.addEventListener('click', () => {
    plusSlides(-1);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map