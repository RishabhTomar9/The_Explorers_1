document.addEventListener("DOMContentLoaded", function() {
    const registerForm = document.getElementById("register-form");
    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        // Validate form data
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // Send registration data to server
        // (this will be implemented later)

        // Redirect to login page
        window.location.href = "login.html";
    });
});