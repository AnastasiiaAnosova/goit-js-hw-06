function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputElement = document.querySelector('input[type="number"]');
// console.dir(inputElement);
const btnCreate = document.querySelector('[data-create]');
// console.dir(btnCreate);
const btnDestroy = document.querySelector('[data-destroy]');
// console.dir(btnDestroy);
const boxesDiv = document.querySelector('#boxes');

btnCreate.addEventListener("click", handleCreate);
btnDestroy.addEventListener("click", handleDestroy);

function handleCreate() {
  const amount = Number(inputElement.value);//the value will be a string, so we translate it into a number
  createBoxes(amount) 
}

function createBoxes(amount) {
  let markup = '';
  const boxSize = 30;
  for (let i = 0; i < amount; i++) {
    const sizes = boxSize + i * 10;
    const color = getRandomHexColor();
    markup +=`<div style="width: ${sizes}px; height: ${sizes}px; background-color: ${color}"></div>`;
  }
  boxesDiv.innerHTML = markup;
}

function handleDestroy() {
  boxesDiv.innerHTML = "";
  inputElement.value = "";
}