// login.js

// Dummy user data (replace this with your actual user data or backend logic)
const userData = [
    {
        email: "howellnesh@gmail.com",
        password: "$2b$10$5s2xEzihKYHfkg4AsaK4EurPAoxR0mGk5mlVbTKwbFSC2Z4GR1blS" // hashed password for "@Qwa3247"
    },
    {
        email: "user2@example.com",
        password: "$2b$10$yHQiDLlFhSHuIF4tJ5fln.TXfNDkY4tHpR3WUdqGp0/W6I8kgat2m" // hashed password for "password2"
    },
    {
        email: "user3@example.com",
        password:"$2b$10$cJGoDLlFhSHuIF4tJ5fln.TXfNDkY4tHpR3WUdqGp0/W6I8kgat2m" // hashed password for "password3"
    }
    // Add more user data as needed
];

// Populate form fields with predefined data
document.querySelector('input[name="email"]').placeholder = "Email";
document.querySelector('input[name="password"]').placeholder = "Password";

/**
 * Validates a login form.
 * 
 * @returns {boolean} True if the form validation passes and a user is found, false otherwise.
 */
function validateForm() {
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    // Validate email and password
    if (!email || !password) {
        alert('Please enter both email and password.');
        return false;
    }

    // Simulate server-side validation
    const user = userData.find(user => user.email === email);
    if (!user) {
        alert("User not found. Please sign up.");
        return false;
    }

    // Check password match
    if (password !== "password") {
        alert("Incorrect password.");
        return false;
    }

    // Redirect to home page
    window.location.href = "Home.html";
    return true;
}

// Function to toggle password visibility
function togglePasswordVisibility() {
    const passwordInput = document.querySelector('input[name="password"]');
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}
