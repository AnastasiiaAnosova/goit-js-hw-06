let counterValue = 0;
const counter = document.querySelector('#value');


const decrement = document.querySelector('[data-action="decrement"]');
decrement.addEventListener("click", decrementCounter);
//() => {
//     counterValue -= 1;
//     counter.textContent = counterValue;
// });

const decrementCounter = () => {
    counterValue -= 1;
    counter.textContent = counterValue;
}

const increment = document.querySelector('[data-action="increment"]');
increment.addEventListener("click",() => {
    counterValue += 1;
    counter.textContent = counterValue;
});

// const incrementCounter = () => {
//     counterValue += 1;
//     counter.textContent = counterValue;
// }