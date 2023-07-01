const controlSize = document.getElementById('font-size-control');
const textSize = document.getElementById('text');

controlSize.addEventListener("input", changeSize);

function changeSize() {
    textSize.style.fontSize = `${controlSize.value}px`;
    // textSize.style.fontSize = controlSize.value + 'px';
} 