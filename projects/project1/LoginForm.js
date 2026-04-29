function onLogin(event) {
  event.preventDefault();

  const form = event.target;
  const usernameInput = form.querySelector('#username');
  const passwordInput = form.querySelector('#password');
  const errorEl = form.querySelector('#error');

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  errorEl.className = ""; // reset styles

  // Validation Rules
  if (!username || !password) {
    showMessage("All fields are required", "error");
    return;
  }

  if (username.length < 4) {
    showMessage("Username must be at least 4 characters", "error");
    return;
  }

  if (password.length < 6) {
    showMessage("Password must be at least 6 characters", "error");
    return;
  }

  // Success
  showMessage("Login Successful!", "success");
  form.reset();
}

function showMessage(message, type) {
  const errorEl = document.getElementById("error");
  errorEl.textContent = message;
  errorEl.classList.add(type);
}