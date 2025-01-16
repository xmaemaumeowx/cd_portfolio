function submitForm() {
    // Get form data
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
  
    // Display success message 
    alert("Form submitted successfully!");
  
    // Reload the page after alert is closed
    window.location.reload(); 
  
    return false; // Prevent default form submission
  }

