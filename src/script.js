"use strict";

/* Индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(number) {
    let slides = document.getElementsByClassName("item");
    console.log(slides)
    let dots = document.getElementsByClassName("slider-dots_item");
    console.log(dots)
    if (number > slides.length) {
      slideIndex = 1
    }
    if (number < 1) {
        slideIndex = slides.length
    }
    for (let index = 0; index < slides.length; index++) {
        slides[index].style.display = "none";
    }
    for (let index = 0; index < dots.length; index++) {
        dots[index].className = dots[index].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}