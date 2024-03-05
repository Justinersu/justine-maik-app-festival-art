let swiper = new Swiper(".swiper-screenshots", {
  effect: "coverflow",
  loop: true,
  slidesPerView: 1,
  observer: true,
  coverflowEffect: {
    rotate: 0,
    depth: 100,
    modifier: 1,
    stretch: 0,
    slideShadows: true,
  },
  centeredSlides: true,
  navigation: {
    nextEL: ".swiper-button-prev btn-next",
    prevEL: ".swiper-button-next btn-prev",
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
});
