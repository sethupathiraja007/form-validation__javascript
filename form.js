let form = document.getElementById("form");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let ConfirmPassword = document.getElementById("confirm-password");
let phonenumper = document.getElementById("phonenumber");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validInput();
});

function validInput() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmpasswordValue = ConfirmPassword.value.trim();
  const phonenumberValue = phonenumber.value.trim();

  if (usernameValue === "") {
    setError(username, "username is required");
  } else {
    setSucess(username);
  }
  if (phonenumberValue === "") {
    setError(phonenumber, "phonenumber is required");
  } else if (phonenumberValue.length < 10) {
    setError(phonenumper, "phonenumber is must be 10 number");
  } else {
    setSucess(phonenumper);
  }
  if (passwordValue === "") {
    setError(password, "password is reqired");
  } else if (passwordValue.length < 8) {
    setError(password, "password is must be 8 chr");
  } else {
    setSucess(password);
  }
  if (confirmpasswordValue === "") {
    setError(ConfirmPassword, "ConfirmPassword is required");
  } else if (confirmpasswordValue !== passwordValue) {
    setError(ConfirmPassword, "ConfirmPassword is not matched");
  } else {
    setSucess(ConfirmPassword);
  }
  if (emailValue === "") {
    setError(email, "email is reqired");
  }
  else {
    setSucess(email)
  }
}

function setError(element, message) {
  let parent = element.parentElement;
  console.log(parent);
  let errorElement = parent.querySelector(".error");
  errorElement.innerText = message;
  parent.classList.add("error");
  parent.classList.remove("succes");
}

function setSucess(element) {
  let parent = element.parentElement;
  let errorElement = parent.querySelector(".error");
  errorElement.innerText = " ";
  parent.classList.add("succes");
  parent.classList.remove("error");
}
function check1() {
  let password = document.getElementById("password");
  let checkbox = document.getElementById("checkbox1");
  let pass1 = document.getElementById("pass1");
  let pass2 = document.getElementById("pass2");
  if (checkbox.checked) {
    password.setAttribute("type", "text");
    pass1.style.display='none'
    pass2.style.display='block'
  } else {
    password.setAttribute("type", "password");
    pass2.style.display='none'
    pass1.style.display='block'

  }
}
function check2() {
  let password = document.getElementById("confirm-password");
  let checkbox = document.getElementById("checkbox2");
  let pass1 = document.getElementById("Cpass1");
  let pass2 = document.getElementById("Cpass2");
  if (checkbox.checked) {
    password.setAttribute("type", "text");
    Cpass1.style.display='none'
    Cpass2.style.display='block'
  } else {
    password.setAttribute("type", "password");
    Cpass2.style.display='none'
    Cpass1.style.display='block'
  }
}
