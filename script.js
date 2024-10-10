const form = document.getElementById('profile-form');
const fullName = document.getElementById('full-name');
const email = document.getElementById('email');
const emailError = document.getElementById('email-error');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const passwordError = document.getElementById('password-error');
const progressBar = document.getElementById('progress');
const progressText = document.getElementById('progress-text');
const updateBtn = document.getElementById('update-btn');
const successMessage = document.getElementById('success-message');

let isPasswordVisible = false;
let isConfirmPasswordVisible = false;

document.getElementById('toggle-password').addEventListener('click', () => {
  isPasswordVisible = !isPasswordVisible;
  password.type = isPasswordVisible ? 'text' : 'password';
});

document.getElementById('toggle-confirm-password').addEventListener('click', () => {
  isConfirmPasswordVisible = !isConfirmPasswordVisible;
  confirmPassword.type = isConfirmPasswordVisible ? 'text' : 'password';
});

form.addEventListener('input', updateProgress);

form.addEventListener('submit', function (event) {
  event.preventDefault();
  
  if (email.value === 'john@doe.com') {
    emailError.style.display = 'block';
    return;
  } else {
    emailError.style.display = 'none';
  }

  if (password.value !== confirmPassword.value) {
    passwordError.style.display = 'block';
    return;
  } else {
    passwordError.style.display = 'none';
  }

  successMessage.style.display = 'block';

  // Reset form after 2 seconds
  setTimeout(() => {
    resetForm();
  }, 2000);
});

function updateProgress() {
  let filledFields = 0;
  if (fullName.value.trim() !== '') filledFields++;
  if (email.value.trim() !== '') filledFields++;
  if (password.value.trim() !== '') filledFields++;
  if (confirmPassword.value.trim() !== '') filledFields++;

  const progressPercent = (filledFields / 4) * 100;
  progressBar.style.width = progressPercent + '%';
  progressText.innerText = Math.round(progressPercent) + '%';

  updateBtn.disabled = progressPercent !== 100;
}

function resetForm() {
  form.reset();
  progressBar.style.width = '0%';
  progressText.innerText = '0%';
  updateBtn.disabled = true;
  successMessage.style.display = 'none';
}
