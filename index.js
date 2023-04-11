function registerUser(event) {
  event.preventDefault(); // Prevents the default form submission behavior

  // Get the form data using the FormData API
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  // Log the form data in the console
  console.log(name);
  console.log(email);
  console.log(phone);

}
