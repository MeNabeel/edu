
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
  
    if (!email || !password) {
      alert('Please fill in all fields.');
      return;
    }
  
    // Simulate login success
    alert('Login successful! Redirecting...');
    window.location.href = 'index.html'; // Redirect to home page after login
  });