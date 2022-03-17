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
        } catch(e){}
        
        // console.log(slideIndex);

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

export default slider;