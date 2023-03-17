/*- menu-btn -*/
var siteBtn = $('.menu-btn'),
  siteMenu= $('.main-nav');

siteBtn.on('click', function(){
  $(this).toggleClass('open');
  siteMenu.toggleClass('show');
});

/*- color-btn -*/
var colorBtn = $('.color-btn'),
  colorClass= $('body');

colorBtn.on('click', function(){
  $(this).toggleClass('active');
  colorClass.toggleClass('dark-color');
});

/*- partners-slider -*/
var swiper = new Swiper('.partners-slider', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 100,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      spaceBetween: 38,
    },
    952: {
      spaceBetween: 50,
    },
    1330: {
      spaceBetween: 100,
    },
  },
});

/*- reviews-slider -*/
var swiper = new Swiper('.reviews-slider', {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.reviews-slider .swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    720: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});

/*- person-slider -*/
var swiper = new Swiper('.person-slider', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.person-slider .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.person-slider .swiper-button-next',
    prevEl: '.person-slider .swiper-button-prev',
  },
  breakpoints: {
    0: {
      spaceBetween: 20,
    },
    720: {
      spaceBetween: 30,
    },
  },
});

/*- work-slider -*/
var swiper = new Swiper('.work-slider', {
  spaceBetween: 30,
  navigation: {
    nextEl: '.work-slider-wrap .swiper-button-next',
    prevEl: '.work-slider-wrap .swiper-button-prev',
  },
  pagination: {
    el: '.work-slider .swiper-pagination',
    clickable: true,
  },
});

/*- accordion -*/
const accordionContent = document.querySelectorAll('.accordion__content');

const accordion = document.querySelectorAll('.accordion__top-panel');

accordion.forEach((element) => {
  element.addEventListener('click', () => {
    element.classList.toggle('active');
    let panel = element.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
});