const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-button");
const errorMessage = document.getElementById("error-message");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === "agency-user" && password === "Icnagoyaagent1983") {
    window.location.replace('2c6M55V1LSgD.html');
  } else {
    errorMessage.style.display = "block";
  }
})
