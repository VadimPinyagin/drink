/* в этот файл добавляет скрипты*/
import {rangeSlider} from './range-slider.js';
import {mainNavOpenClose} from './moblie-nav.js';

rangeSlider();
mainNavOpenClose();

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

console.log(swiper);
