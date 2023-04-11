function registerUser(event) {
  event.preventDefault(); // Prevents the default form submission behavior

  // Get the form data using the FormData API
  const formData = new FormData(event.target);
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;


  // Convert the form data into a plain object
  const formDataObj = {};
  formData.forEach((value, key) => formDataObj[key] = value);

  // Log the form data in the console
  console.log(formDataObj);
  console.log(name);
  console.log(email);
  console.log(phone);

}
