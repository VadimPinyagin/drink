/* в этот файл добавляет скрипты*/
import rangeSlider from './range-slider.js';

rangeSlider();

function toggleCheckbox(checkboxId) {
    const checkbox = document.getElementById('#brazil');
    checkbox.checked = !checkbox.checked; // Переключаем состояние чекбокса
}
toggleCheckbox();
