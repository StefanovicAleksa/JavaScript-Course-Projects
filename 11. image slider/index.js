const slides = document.getElementsByClassName("slide");
const nextSlideBtn = document.getElementById("next-slide-btn");
const prevSlideBtn = document.getElementById("prev-slide-btn");

//slide numbers are 0 based
let currentSlide = 0;
let prevSlide = -1;
//ms interval for autoscroll
const interval = 5000;
let automove;


const showSlide = () =>
{
    if(prevSlide != -1)
        slides[prevSlide].classList.remove("display-slide");
    slides[currentSlide].classList.add("display-slide");
}

const nextSlide = () =>
{
    clearInterval(automove);
    currentSlide + 1 == slides.length ? currentSlide = 0 : currentSlide++;
    showSlide();
    prevSlide = currentSlide;
    automove = setInterval(nextSlide, interval);
}

const previousSlide = () =>
{
    clearInterval(automove);
    currentSlide - 1 == -1 ? currentSlide = slides.length - 1 : currentSlide--;
    showSlide();
    prevSlide = currentSlide;
    automove = setInterval(nextSlide, interval);
}


const initSlider = () =>
{
    showSlide();
    prevSlide = 0;
    automove = setInterval(nextSlide, interval);
}

document.addEventListener("DOMContentLoaded", initSlider);

nextSlideBtn.onclick = nextSlide;

prevSlideBtn.onclick = previousSlide;