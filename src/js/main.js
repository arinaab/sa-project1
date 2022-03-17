import audio from "./modules/audio";
import slider from './modules/slider';
import { tns } from "../../node_modules/tiny-slider/src/tiny-slider";


window.addEventListener('DOMContentLoaded', () => {
    audio('.audio__play');
    // slider('.slider__item', '.btn-next', '.btn-prev');
    tns({
        container: '.slider__items',
        items: 3,
        nav: false,
        slideBy: 'page',
        autoplay: false,
        prevBtn: '.btn-prev',
        nextBtn: '.btn-next'
    });
    const btnContainer = document.querySelector('.tns-controls');
    console.log(btnContainer.firstChild);
    btnContainer.firstChild.innerHTML = '&larr;';
    btnContainer.lastChild.innerHTML = '&rarr;';
});