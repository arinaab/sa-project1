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
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/burger */ "./src/js/modules/burger.js");

 // import slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
  Object(_modules_audio__WEBPACK_IMPORTED_MODULE_0__["default"])('.audio__play', '.audio__slider', '.audio__progress'); // slider('.slider__item', '.btn-next', '.btn-prev');
  //анимация при наведении на соц. иконки

  const socialIcons = document.querySelectorAll('.footer__icon');
  socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      icon.classList.add('animate__animated', 'animate__pulse');
    });
    icon.addEventListener('mouseleave', () => {
      icon.classList.remove('animate__animated', 'animate__pulse');
    });
  });
  Object(_modules_burger__WEBPACK_IMPORTED_MODULE_1__["default"])();
  new Swiper('.slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.btn-prev'
    },
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      767: {
        slidesPerView: 1
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
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
const audio = (triggerSelector, sliderContainer, progressSelector) => {
  const btnPlay = document.querySelectorAll(triggerSelector),
        player1 = document.querySelector('.audio-1'),
        player2 = document.querySelector('.audio-2'),
        progressContainer = document.querySelectorAll(sliderContainer),
        progress = document.querySelectorAll(progressSelector),
        audio = document.querySelectorAll('audio'); // let myAudio = new Audio('./assets/audio/Radiohead-Paranoid-Android.mp3');

  let songs = [];
  btnPlay.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('paused');
      const isPlaying = player1.classList.contains('play') && player2.classList.contains('play');

      if (isPlaying) {
        pauseSong();
      } else {
        playAudio();
      }
    });
  }); //проигрывание песни

  function playAudio() {
    player1.classList.add('play');
    player2.classList.add('play');
    audio.forEach(item => {
      item.play();
    });
  } //остановка песни


  function pauseSong() {
    player1.classList.remove('play');
    player2.classList.remove('play');
    audio.forEach(item => {
      item.pause();
    });
  } //ползунок прогресса


  function updateProgress(e) {
    const {
      duration,
      currentTime
    } = e.srcElement;
    const progressPercent = currentTime / duration * 100;
    progress.forEach(item => item.style.width = `${progressPercent}%`);
  }

  audio.forEach(item => {
    item.addEventListener('timeupdate', updateProgress);
  }); //переключение ползунка

  function setProgress(e) {
    const width = this.clientWidth; //ширина элемента

    const clickX = e.offsetX;
    audio.forEach(item => {
      const duration = item.duration;
      item.currentTime = clickX / width * duration;
    });
  }

  progressContainer.forEach(item => {
    item.addEventListener('click', setProgress);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (audio);

/***/ }),

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const burger = () => {
  const promoMenu = document.querySelector('.promo__menu'),
        burger = document.querySelector('.burger'),
        menuItem = document.querySelectorAll('.promo__item');
  burger.addEventListener('click', () => {
    promoMenu.classList.toggle('promo__menu_active');
    burger.classList.toggle('burger_active');
    document.body.classList.toggle('overflow');
  });
  menuItem.forEach(item => {
    item.addEventListener('click', () => {
      promoMenu.classList.toggle('promo__menu_active');
      burger.classList.toggle('burger_active');
      document.body.classList.toggle('overflow');
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (burger);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map