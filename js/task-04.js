let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementtBtn = document.querySelector('[data-action="increment"]');
const currentValue = document.querySelector("#value");

decrementBtn.addEventListener("click", decrementValue);
incrementtBtn.addEventListener("click", incrementValue);

function decrementValue() {
  counterValue -= 1;
  //   console.log(counterValue);
  currentValue.textContent = counterValue;
}

function incrementValue() {
  counterValue += 1;
  //   console.log(counterValue);
  currentValue.textContent = counterValue;
}
