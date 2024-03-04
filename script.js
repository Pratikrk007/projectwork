document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
  
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();
  
      if (!username) {
        showError(usernameInput, 'Username cannot be empty.');
      } else {
        removeError(usernameInput);
      }
  
      if (!password) {
        showError(passwordInput, 'Password cannot be empty.');
      } else {
        removeError(passwordInput);
      }
  
      // Perform login logic here
    });
  });
  
  function showError(input, message) {
    const error = input.nextElementSibling;
    error.innerText = message;
    error.style.display = 'block';
  }
  
  function removeError(input) {
    const error = input.nextElementSibling;
    error.style.display ='';  }