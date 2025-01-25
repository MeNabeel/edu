// Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Simulate form submission (you can replace this with actual backend logic)
    setTimeout(() => {
      // Show success message
      const successMessage = document.getElementById("success-message");
      successMessage.classList.add("visible");
  
      // Reset the form
      document.getElementById("contact-form").reset();
  
      // Hide the success message after 5 seconds
      setTimeout(() => {
        successMessage.classList.remove("visible");
      }, 5000);
    }, 1000);
  });