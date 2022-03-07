function Slider() {
  this.root = document.querySelector(".slider");
  this.dots = [...document.querySelectorAll(".slider__dot")];
  this.slides = document.querySelectorAll(".slider__slide");
  this.totalSlides = this.slides.length;
  this.slideNumber = 0;
  this.interval = null;

  this.init = () => {
    this.root.addEventListener("click", this.handleSlider);
    this.root.addEventListener("mouseover", this.stopInterval);
    this.root.addEventListener("mouseout", this.startInterval);
    this.startInterval();
  };
  this.handleSlider = (event) => {
    switch (event.target.parentElement.classList[0]) {
      case "slider__previous-btn":
        this.previousSlide();
        break;
      case "slider__next-btn":
        this.nextSlide();
        break;
      case "slider__dots-container":
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
    this.slideNumber++;

    if (this.slideNumber > this.totalSlides - 1) {
      this.slideNumber = 0;
    }

    this.dots[this.slideNumber].classList.add("slider--active");
    this.slides[this.slideNumber].classList.add("slider--active");
  };
  this.previousSlide = () => {
    this.removeClassActive();
    this.slideNumber--;

    if (this.slideNumber < 0) {
      this.slideNumber = this.totalSlides - 1;
    }

    this.dots[this.slideNumber].classList.add("slider--active");
    this.slides[this.slideNumber].classList.add("slider--active");
  };
  this.selectedSlide = (event) => {
    this.removeClassActive();
    const SlideNumber = this.dots.findIndex((dot) => {
      return event.target.classList === dot.classList;
    });
    this.dots[SlideNumber].classList.add("slider--active");
    this.slides[SlideNumber].classList.add("slider--active");
  };
  this.startInterval = () => {
    this.interval = setInterval(this.nextSlide, 10000);
  };
  this.stopInterval = () => {
    clearInterval(this.interval);
  };
  this.hideSlider = () => {
    this.root.classList.add("hide");
  };
  this.visibleSlider = () => {
    this.root.classList.remove("hide");
  };
}
const slider = new Slider();

export { slider };
