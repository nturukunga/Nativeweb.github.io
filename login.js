// login.js

// Dummy user data (replace this with your actual user data or backend logic)
const userData = [
    {
        email: "user1@example.com",
        password: "password1"
    },
    {
        email: "user2@example.com",
        password: "password2"
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
    const user = userData.find(user => user.email === email && user.password === password);
    if (user) {
        alert("Login successful!"); // You can redirect to a dashboard page or perform other actions here
        return true;
    } else {
        // If user is not found, prompt them to sign up
        const confirmSignUp = confirm("You don't have an account. Would you like to sign up?");
        if (confirmSignUp) {
            // Redirect the user to the signup page
            window.location.href = "Signup.html"; // Replace "Signup.html" with the actual URL of your signup page
            return false; // Prevent form submission
        }
    }
}
