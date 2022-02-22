"use strict";


let slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
const next = document.querySelector('#next')
next.addEventListener('click', plusSlide)
function plusSlide() {
  showSlides((slideIndex += 1));
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
const prev = document.querySelector('#prev')
prev.addEventListener('click', minusSlide)
function minusSlide() {
  showSlides((slideIndex -= 1));
}

/* Устанавливает текущий слайд */
document.querySelector('#dot1').addEventListener('click',function(){ currentSlide(1); })
document.querySelector('#dot2').addEventListener('click',function(){ currentSlide(2); })
document.querySelector('#dot3').addEventListener('click',function(){ currentSlide(3); })
document.querySelector('#dot4').addEventListener('click',function(){ currentSlide(4); })

function currentSlide(number) {
  showSlides((slideIndex = number));
}

/* Основная функция слайдера */
function showSlides(number) {
  const slides = document.getElementsByClassName("item");
  const dots = document.getElementsByClassName("slider-dots__item");
  
  if (number > slides.length) {
    slideIndex = 1;
  }
  if (number < 1) {
    slideIndex = slides.length;
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

