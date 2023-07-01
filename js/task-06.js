const inputForm = document.querySelector('#validation-input');
console.dir(inputForm);
const inputLength = Number(inputForm.dataset.length);
console.log(inputLength);

inputForm.addEventListener("blur", checkValid);

function checkValid() {
    if (inputForm.value.length === inputLength) {
        inputForm.classList.add("valid");
        inputForm.classList.remove("invalid");
    } else {
        inputForm.classList.add("invalid");
        inputForm.classList.remove("valid");
    }
}

// function checkValid() {
//     if (inputForm.value.length === inputLength) {
//         inputForm.classList.replace('valid', 'invalid');
//     } else {
//         inputForm.classList.replace('invalid', 'valid');
//     }
// }