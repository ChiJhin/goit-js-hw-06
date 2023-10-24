const input = document.querySelector("#validation-input");

const inputeLength = Number(input.dataset.length);

input.addEventListener("blur", verification);

function verification(event) {
  //   if (event.currentTarget.value.length === inputeLength) {
  //     input.classList.add("valid");
  //     input.classList.remove("invalid");
  //     return;
  //   }
  //   input.classList.add("invalid");
  //   input.classList.remove("valid");

  input.classList.add("invalid");

  if (event.currentTarget.value.length === inputeLength) {
    input.classList.replace("invalid", "valid");
  }
}
