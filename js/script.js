const swiperlp = new Swiper(".swiper-screenshots", {
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

  navigation: {
    nextEL: ".btn-next",
    prevEL: ".btn-prev",
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
});
