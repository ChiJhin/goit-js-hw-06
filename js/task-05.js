const outputName = document.querySelector("#name-output");
const inputValue = document.querySelector("#name-input");

inputValue.addEventListener("input", (event) => {
  outputName.textContent = event.currentTarget.value;

  if (event.currentTarget.value === "") {
    outputName.textContent = "Anonymous";
  }
});
