// login.js
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Dummy user data (replace this with your actual user data or backend logic)
const userData = [
    {
        email: "howellnesh@gmail.com",
        password: await bcrypt.hash("@Qwa3247", saltRounds)
    },
    {
        email: "user2@example.com",
        password: await bcrypt.hash("password2", saltRounds)
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
async function validateForm() {
    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="password"]');
    const email = emailInput.value;
    const password = passwordInput.value;

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Password length validation
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return false;
    }

    // If form validation passes, proceed with login
    const user = userData.find(user => user.email === email);
    if (user) {
        const match = await bcrypt.compare(password, user.password);
        if (match) {
            alert("Login successful!"); // You can redirect to a dashboard page or perform other actions here
            window.location.assign("Home.html"); // Redirect to the home page
            return true;
        }
    }

    // If user is not found, prompt them to sign up
    const confirmSignUp = confirm("You don't have an account. Would you like to sign up?");
    if (confirmSignUp) {
        // Redirect the user to the signup page
        window.location.href = "Signup.html"; // Replace "Signup.html" with the actual URL of your signup page
        return false; // Prevent form submission
    }
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
