import audio from "./modules/audio";
import slider from './modules/slider';


window.addEventListener('DOMContentLoaded', () => {
    audio('.audio__play');
    slider('.slider__item', '.btn-next', '.btn-prev');
});