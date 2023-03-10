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
});

/*- person-slider -*/
var swiper = new Swiper('.person-slider', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.person-slider .swiper-button-next',
    prevEl: '.person-slider .swiper-button-prev',
  },
});

/*- work-slider -*/
var swiper = new Swiper('.work-slider', {
  spaceBetween: 30,
  navigation: {
    nextEl: '.work-slider-wrap .swiper-button-next',
    prevEl: '.work-slider-wrap .swiper-button-prev',
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