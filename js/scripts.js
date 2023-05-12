/*- menu-btn -*/
var siteBtn = $('.menu-btn'),
  siteMenu= $('.main-nav');

siteBtn.on('click', function(){
  $(this).toggleClass('open');
  siteMenu.toggleClass('show');
  $('.header').toggleClass('active');
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

/*- phone-input -*/
[].forEach.call(document.querySelectorAll('input[type="tel"]'), function (input) {
    let keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        let pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        let matrix = "+1 (___) ___-____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            newValue = matrix.replace(/[_\d]/g, function (a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
            });
        i = newValue.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            newValue = newValue.slice(0, i);
        }
        let reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function (a) {
                return "\\d{1," + a.length + "}";
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = newValue;
        if (event.type == "blur" && this.value.length < 5) this.value = "";
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
});

/*- type-file -*/
$("input[type=file]").change(function (e) {
  $(this).parents(".type-file").find(".type-file__text").text(e.target.files[0].name);
});

/*- modal -*/
const myModal = new HystModal({
    closeOnEsc: true,
    backscroll: true,
    afterClose: function(modal){
        let videoframe = modal.openedWindow.querySelector('iframe');
        if(videoframe){
            videoframe.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
        }
    },        
});