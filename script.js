function submitForm() {
  // Get form field values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Check if all required fields are filled
  if (name === "" || email === "" || message === "") {
    window.alert("Please fill in all required fields.");
    return false; // Prevent form submission
  }

  // If all fields are filled, submit the form
  window.alert("Form Submitted Successfully");
  return true; // Allow form submission
}
