import audio from "./modules/audio";
// import slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
    audio('.audio__play');
    // slider('.slider__item', '.btn-next', '.btn-prev');

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

    new Swiper('.slider', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.btn-prev',
        },

        slidesPerView: 3,
        spaceBetween: 30,

        breakpoints: {
            1200: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            991: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            767: {
                slidesPerView: 1,
            }
        }
      
      });
});