const swiperlp = new Swiper(".swiper-screenshots", {
  loop: true,
  slidesPerView: 1,
  observer: true,

  navigation: {
    prevEL: ".btn-prev",
    nextEL: ".btn-next",
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
});
