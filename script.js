function handleLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[A-Z])([^@]*|[@]).*$/;

  if (!emailRegex.test(username)) {
    alert("Please enter a valid email address for the username.");
    return;
  }

  if (!passwordRegex.test(password)) {
    alert("Password must contain an uppercase letter, a number, and can only contain @ as a special character.");
    return;
  }

  if (password === "SmartServTest@123") {
    window.location.href = 'dashboard.html'; 
  } else {
    alert("Incorrect password. Please try again.");
  }
}
