function validateForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  var nameError = document.getElementById('name-error');
  var emailError = document.getElementById('email-error');
  var messageError = document.getElementById('message-error');
  var isValid = true;

  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';

  if (name === '') {
    nameError.textContent = 'Name is required';
    isValid = false;
  }

  if (email === '') {
    emailError.textContent = 'Email is required';
    isValid = false;
  } else if (!isValidEmail(email)) {
    emailError.textContent = 'Invalid email address';
    isValid = false;
  }

  if (message === '') {
    messageError.textContent = 'Message is required';
    isValid = false;
  }

  return isValid;
}

function isValidEmail(email) {
  var emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}
