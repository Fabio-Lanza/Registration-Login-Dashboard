const form = document.querySelector("#form");
const userName = document.querySelector("#username");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const userNameValue = userName.value;
  const passwordValue = password.value;
  const confirmPasswordValue = confirmPassword.value;

  if (userNameValue === "") {
    setError(userName, "You must enter an UserName");
  } else {
    setSuccess(userName);
  }

  if (passwordValue === "") {
    setError(password, "You must enter an password");
  } else if (passwordValue.length < 7) {
    setError(password, "Passowrd must contains 7 digits");
  } else {
    setSuccess(password);
  }

  if (confirmPasswordValue === "") {
    setError(confirmPassword, "You must confirm the password");
  } else if (confirmPasswordValue !== passwordValue) {
    setError(confirmPassword, "Password do not match");
  } else {
    setSuccess(confirmPassword);
  }

  //all fiels are valid? testing...
  const formControl = form.querySelectorAll(".login-control");
  const isFormValid = [...formControl].every((formControl) => {
    return formControl.className === "login-control success";
  });

  if (isFormValid) {
    location.href = "../dashboard/index.html";
  }
}

function setError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // add error message
  small.innerText = message;

  //add teh error class
  formControl.className = "login-control error";
}

function setSuccess(input, message) {
  const formControl = input.parentElement;

  // add success class
  formControl.className = "login-control success";
}
