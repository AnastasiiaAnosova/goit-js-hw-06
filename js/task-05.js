const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

textInput.addEventListener("input", onTextOutput);

function onTextOutput(event) { 
    let text = textInput.event.target.value.trim();
    if (text === "") {
        text = "Anonymous";
    }
    textOutput.textContent = text;
}