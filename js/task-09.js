function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
console.dir(body);

const btnChangeColor = document.querySelector('.change-color');
const colorName = document.querySelector('.color');

btnChangeColor.addEventListener("click", onChangeColor);

function onChangeColor(event) {
  const newColor = getRandomHexColor();

  // body.style.backgroundColor = newColor;
  // colorName.textContent = newColor;

  document.body.style.backgroundColor = newColor;
  colorName.textContent = newColor;
}