
// signup.js

// JSON data (you can replace this with your actual data)
const signupData = {
    "title": "NAtIVe25FOuR - Sign Up",
    "fields": [
        {
            "name": "email",
            "placeholder": "Email",
            "required": true
        },
        {
            "name": "password",
            "placeholder": "Password",
            "required": true
        },
        {
            "name": "display name",
            "placeholder": "Username",
            "required": true
        }
    ],
    "button_text": "Sign up",
    "google_signup_link": "/signup"
};

// Populate form fields
document.querySelector('input[name="email"]').placeholder = signupData.fields[0].placeholder;
document.querySelector('input[name="password"]').placeholder = signupData.fields[1].placeholder;
document.querySelector('input[name="display name"]').placeholder = signupData.fields[2].placeholder;
document.querySelector('button[type="submit"]').textContent = signupData.button_text;
document.querySelector('button[type="/sign up"]').textContent = "Sign up with Google";

// Form validation function
function validateForm() {
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    // Basic email validation (you can enhance this as needed)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Password length validation (you can customize this)
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return false;
    }

    const express = require('express');
const app = express();
app.use(express.json());

app.post('/signup', (req, res) => {
    const password = req.body.password;
    const passwordRegex = new RegExp('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\\W).{6,}');

    if (passwordRegex.test(password)) {
        // Password is valid, continue with signup process
    } else {
        // Password is invalid, send an error response
        res.status(400).send('Invalid password. Must contain at least one number, one uppercase and lowercase letter, one symbol, and at least 6 or more characters');
    }
});

app.listen(3000, () => console.log('Server is running on port 3000'));

function validateFormAndRedirect() {
    // Validate the form...
    // If the form is valid:
    if (formIsValid) {
        window.location.href = '/home';  // Redirect to home page
        return false;  // Prevent the form from submitting normally
    } else {
        // If the form is not valid, let the form submit normally so the server can handle the validation error
        return true;
    }
}


    // Redirect to signup page (you can implement this based on your backend logic)
    // Example: window.location.href = '/signup';
    return true;
}
