function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const inputElement = document.querySelector('input[type="number"]');
// console.dir(inputElement);
// const amount = Number(inputElement.value);//the value will be a string, so we translate it into a number
const btnCreate = document.querySelector('[data-create]');
console.dir(btnCreate);
const btnDestroy = document.querySelector('[data-destroy]');
console.dir(btnDestroy);
const boxesDiv = document.querySelector('#boxes');

btnCreate.addEventListener("click", handleCreate);
btnDestroy.addEventListener("click", handleDestroy);

function handleCreate() {
  const inputElement = document.querySelector('input[type="number"]');
  console.dir(inputElement);
  const amount = Number(inputElement.value);//the value will be a string, so we translate it into a number
  createBoxes(amount) 
}

function createBoxes(amount) {
  let markup = [];
  // const sizes = '30px';
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const color = getRandomHexColor();
    markup += `<div style="width: ${size}px; height: ${size}px; background-color: ${color}"><div/>`
  }
  boxesDiv.innerHTML = markup;
}

function handleDestroy() {
  boxesDiv.innerHTML = "";
  inputElement.value = "";
}