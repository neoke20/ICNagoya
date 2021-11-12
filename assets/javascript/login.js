const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-button");
const errorMessage = document.getElementById("error-message");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === "test" && password === "123456") {
    window.location.replace('home.html');
  } else {
    errorMessage.style.display = "block";
  }
})
