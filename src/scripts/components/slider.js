import { createElement } from "../templates/templates.js";
import { SLIDER_IMAGES } from "../data/data.js";
import iconArrow from '../../assets/icons/arrow.png';
function Slider(data) {
  this.root = document.querySelector(".slider");
  this.data = data;
  this.numberOfSlides = data.length;
  let slideNumber = 0;

  this.init = () => {
    this.createSlider();
    this.dots = [...document.querySelectorAll(".slider__dot")];
    this.slides = document.querySelectorAll(".slider__slide");
    this.root.addEventListener("click", this.handleSlider);
    this.root.addEventListener("mouseover", () => {
      clearInterval(this.interval);
    });
    this.root.addEventListener("mouseout", this.playInterval);
    this.playInterval();
  };
  this.createSlider = () => {
    this.createSlides();
    this.createNavigation();
    this.createDots();
  };
  this.createSlides = () => {
    this.data.forEach((image, index) => {
      if (index === 0) {
        const slide = createElement("div", "slider__slide slider--active");
        const slideImage = createElement("img", "");

        slideImage.src = image;
        slideImage.alt = index;

        slide.append(slideImage);
        this.root.append(slide);
      } else {
        const slide = createElement("div", "slider__slide");
        const slideImage = createElement("img", "");

        slideImage.src = image;
        slideImage.alt = index;

        slide.append(slideImage);
        this.root.append(slide);
      }
    });
  };
  this.createDots = () => {
    const dots = createElement("div", "slider__dots-container");
    this.data.forEach((_, index) => {
      if (index === 0) {
        const dot = createElement("div", "slider__dot slider--active");
        dots.append(dot);
        this.root.append(dots);
      } else {
        const dot = createElement("div", "slider__dot");
        dots.append(dot);
        this.root.append(dots);
      }
    });
  };
  this.createNavigation = () => {
    const navigation = createElement("div", "slider__navigation");
    const previousBtn = createElement("div", "slider__previous-btn");
    const nextBtn = createElement("div", "slider__next-btn");
    const icon = createElement('img','');
    icon.src = iconArrow;
    const iconPrev = createElement('img','');
    iconPrev.src = iconArrow;
    nextBtn.append(icon)
    previousBtn.append(iconPrev)
    navigation.append(previousBtn, nextBtn);
    this.root.append(navigation);
  };
  this.handleSlider = (event) => {
    switch (event.target.parentElement.classList[0]) {
      case "slider__previous-btn":
        this.previousSlide();
        break;
      case "slider__next-btn":

        this.nextSlide();
        break;
      case "slider__dot":
        this.selectedSlide(event);
    }
  };
  this.removeClassActive = () => {
    this.slides.forEach((slide) => {
      slide.classList.remove("slider--active");
    });
    this.dots.forEach((dot) => {
      dot.classList.remove("slider--active");
    });
  };
  this.nextSlide = () => {
    this.removeClassActive();
    slideNumber++;

    if (slideNumber > this.numberOfSlides - 1) {
      slideNumber = 0;
    }

    this.dots[slideNumber].classList.add("slider--active");
    this.slides[slideNumber].classList.add("slider--active");
  };
  this.previousSlide = () => {
    this.removeClassActive();
    slideNumber--;

    if (slideNumber < 0) {
      slideNumber = this.numberOfSlides - 1;
    }

    this.dots[slideNumber].classList.add("slider--active");
    this.slides[slideNumber].classList.add("slider--active");
  };
  this.selectedSlide = (event) => {
    this.removeClassActive();
    const index = this.dots.findIndex((dot) => {
      return event.target.classList === dot.classList;
    });
    this.dots[index].classList.add("slider--active");
    this.slides[index].classList.add("slider--active");
  };
  this.playInterval = () => {
    this.interval = setInterval(this.nextSlide, 10000);
  };
}
const slider = new Slider(SLIDER_IMAGES);

export { slider };
