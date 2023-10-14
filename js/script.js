var swiper = new Swiper('.slide-content', {
  slidesPerView: 3,
  spaceBetween: 25,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    576: {
      slidesPerView: 2,
    },

    950: {
      slidesPerView: 5,
    },
  },
});

// Aos
const galleryImg = document.querySelectorAll('.gallery-img');
const contenImg = document.querySelectorAll('.swiper-slide');

galleryImg.forEach((img, i) => {
  img.dataset.aos = 'fade-down';
  img.dataset.aosDelay = i * 100;
  img.dataset.aosDuration = 1000;
});

contenImg.forEach((img, i) => {
  img.dataset.aos = 'flip-down';
  img.dataset.aosDelay = i * 100;
  img.dataset.aosDuration = 500;
});

AOS.init({
  once: false,
  duration: 1000,
});
