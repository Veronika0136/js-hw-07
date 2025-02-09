const form = document.querySelector('form.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(evt);

  const email = evt.target.elements.email.value.trim();
  console.log(email);

  const password = evt.target.elements.password.value.trim();
  console.log(password);

  const data = {
    email: email,
    password: password,
  };

  if (email === '' || password === '') {
    return alert('All form fields must be filled in');
  } else {
    console.log(data);
  }

  form.reset();
}
