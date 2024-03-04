const swiperlp = new Swiper(".swiper-screenshots", {
  loop: true,
  slidesPerView: 1,
  observer: true,

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
