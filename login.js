// login.js
const bcrypt = require('bcrypt');
const saltRounds = 10;

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
async function validateForm() {
    console.log("Form validation started."); // Add console log
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
            console.log("Login successful!"); // Add console log
            alert("Login successful!"); // You can redirect to a dashboard page or perform other actions here
            window.Location.href = "Home.html"; // Replace "Home.html" with the actual URL of your home page

            return true; // Return true after redirecting
        }
    }

    // If user is not found, prompt them to sign up
    const confirmSignUp = confirm("You don't have an account. Would you like to sign up?");
    if (confirmSignUp) {
        // Redirect the user to the signup page
        window.Location.href = "Signup.html"; // Replace "Signup.html" with the actual URL of your signup page


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
