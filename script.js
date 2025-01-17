function submitForm() {
  // Get form data
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  // Display success message
  alert("Form submitted successfully!");

  // Clear form fields 
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("message").value = "";

  // Scroll to the top of the page
  window.scrollTo(0, 0); 

  // Delay before reloading
  setTimeout(function() {
    window.location.reload(); 
  }, 10000); // 10000 milliseconds = 10 seconds

  return false; // Prevent default form submission
}