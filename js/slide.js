let slideIndex = 0;
const slides = document.querySelectorAll('.slide');



function changeSlide(n) {
    slideIndex += n;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    const offset = -slideIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}


setInterval(() => {
    changeSlide(1);
}, 5000);
