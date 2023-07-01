const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

textInput.addEventListener("input", handleInput);

function handleInput() {
    textOutput.textContent = textInput.value === "" ? "Anonymous" : textInput.value;
}

// function handleInput() {
//     if (textInput.value === "") {
//         textOutput.textContent = "Anonymous";
//     } else {
//         textOutput.textContent = textInput.value;
//     }
// }

// function handleInput(event) {
//     let contentInput = event.target.value.trim();
//     if (contentInput === "") {
//         contentInput = "Anonymous";
//     }
//     textOutput.textContent = contentInput;
// }
