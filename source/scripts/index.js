/* в этот файл добавляет скрипты*/
import {sliderElement} from './constants.js';

noUiSlider.create(sliderElement, {
  start: [0,900],
  connect: [false, true, false],
  range: {
    min: 0,
    max: 1000,
  },
});
