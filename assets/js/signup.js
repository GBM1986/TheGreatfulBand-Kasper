const form = document.querySelector('#myForm');
const firstName = document.querySelector('#fname');
const lastName = document.querySelector('#ename');
const email = document.querySelector('#email');
const submitButton = document.querySelector('#submitButt');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();

  const firstNameRegex = /^[a-zA-Z]{2,}$/;
  const lastNameRegex = /^[a-zA-Z]{3,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let firstNameValid = false;
  let lastNameValid = false;
  let emailValid = false;

  if (firstNameRegex.test(firstNameValue)) {
    firstNameValid = true;
    firstName.classList.remove('invalid');
    firstName.setCustomValidity('');
  } else {
    firstName.classList.add('invalid');
    firstName.setCustomValidity('Please use minimum 2 characters');
  }

  if (lastNameRegex.test(lastNameValue)) {
    lastNameValid = true;
    lastName.classList.remove('invalid');
    lastName.setCustomValidity('');
  } else {
    lastName.classList.add('invalid');
    lastName.setCustomValidity('Please use minimum 3 characters');
  }

  if (emailRegex.test(emailValue)) {
    emailValid = true;
    email.classList.remove('invalid');
    email.setCustomValidity('');
  } else {
    email.classList.add('invalid');
    email.setCustomValidity('Please enter a valid email address');
  }

  if (firstNameValid && lastNameValid && emailValid) {
    // All fields are valid
    alert('Form submitted successfully!');
    form.reset();
  }
});

// Live validation and error messages for first name
firstName.addEventListener('input', () => {
  const firstNameValue = firstName.value.trim();
  const firstNameRegex = /^[a-zA-Z]{2,}$/;
  
  if (firstNameRegex.test(firstNameValue)) {
    firstName.classList.remove('invalid');
    firstName.setCustomValidity('');
  } else {
    firstName.classList.add('invalid');
    firstName.setCustomValidity('Please use minimum 2 characters');
  }
});

// Live validation and error messages for last name
lastName.addEventListener('input', () => {
  const lastNameValue = lastName.value.trim();
  const lastNameRegex = /^[a-zA-Z]{3,}$/;
  
  if (lastNameRegex.test(lastNameValue)) {
    lastName.classList.remove('invalid');
    lastName.setCustomValidity('');
  } else {
    lastName.classList.add('invalid');
    lastName.setCustomValidity('Please use minimum 3 characters');
  }
});

// Live validation and error messages for email
email.addEventListener('input', () => {
  const emailValue = email.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (emailRegex.test(emailValue)) {
    email.classList.remove('invalid');
    email.setCustomValidity('');
  } else {
    email.classList.add('invalid');
    email.setCustomValidity('Please enter a valid email address');
  }
});