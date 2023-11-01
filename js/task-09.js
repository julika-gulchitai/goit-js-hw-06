// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль 
// по кліку на button.change - color і виводить значення кольору
// в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColor = document.querySelector('body');
const changeColor = document.querySelector('.widget');
const spanContent = document.querySelector('span');

changeColor.addEventListener('click', () => {
  let currentColor = getRandomHexColor();
  bodyColor.style.backgroundColor = currentColor;
  spanContent.innerHTML = currentColor;
})