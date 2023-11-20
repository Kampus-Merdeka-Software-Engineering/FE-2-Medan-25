let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slide').length;
const carouselWrapper = document.querySelector('.carousel-wrapper');
let slideWidth = document.querySelector('.slide').clientWidth;

function updateCarousel() {
  slideWidth = document.querySelector('.slide').clientWidth;
  carouselWrapper.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

setInterval(nextSlide, 3000); 