const registrationForm = document.querySelector(".login-form");

registrationForm.addEventListener("submit", verificationForm);

function verificationForm(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    alert("Усі поля повинні бути заповнені!");
  } else {
    console.log({
      email: email,
      password: password,
    });
    form.reset();
  }
}
