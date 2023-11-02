// Напиши скрипт створення і очищення колекції елементів.Користувач вводить кількість 
// елементів в input і натискає кнопку Створити, після чого рендериться колекція.
// Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число.Функція 
// створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.Використовуй готову 
// функцію getRandomHexColor для отримання кольору.


// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи 
// всі створені елементи.


const inputNumber = document.querySelector('input');
let figuresNumber = 0;
inputNumber.addEventListener('input', () => { figuresNumber = inputNumber.value });

const btnCreate = document.querySelector('button[data-create]');

const divBoxes = document.querySelector('#boxes');

btnCreate.addEventListener('click', handleCreateBoxes);

const btnDestroy = document.querySelector('button[data-destroy]');
 
btnDestroy.addEventListener('click', destroyBoxes);
 
function handleCreateBoxes() {
  if (inputNumber.value === '') return;
  else { 
  let i = 1; let j = 0;
  do {
    let boxElement = document.createElement('div');
    boxElement.classList.add('boxes');
    boxElement.style.width = 30 + j + 'px';
    boxElement.style.height = 30 + j + 'px';
    boxElement.style.backgroundColor = getRandomHexColor();
    divBoxes.append(boxElement);
    i += 1; j += 10;
  } while (i <= figuresNumber);
  }
}

function destroyBoxes() {
  divBoxes.remove();
  inputNumber.value = '';
 }
  
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

