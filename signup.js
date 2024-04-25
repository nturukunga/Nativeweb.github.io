// signup.js

// JSON data (you can replace this with your actual data)
const signupData = {
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
document.querySelector('button[type="button"]').textContent = "Sign up with Google";

// Form validation function
function validateFormAndRedirect() {
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

    // If form validation passes, you can redirect to another page
    // Example: window.location.href = '/home';
    redirectToHomePage();

    // Prevent form submission
    return false;
}

// Redirect to Home Page on successful signup
function redirectToHomePage() {
    window.location.href = "Home.html"; // Replace "/home" with the URL of your home page
}
// Handle form submission and server response
function handleSignupResponse(response) {
    if (response.ok) {
        // Sign-up successful, redirect to home page or display success message
        alert('Sign-up successful!');
        window.location.href = '/home'; // Redirect to home page
    } else {
        // Sign-up failed, display error message
        response.json().then(data => {
            alert(data.error); // Display error message to the user
        });
    }
}

// Form submission with fetch API
function submitSignupForm(formData) {
    fetch('/signup', {
        method: 'POST',
        body: formData,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(handleSignupResponse)
    .catch(error => console.error('Error:', error));
}

// Form submission event listener
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(this); // Get form data
    const formDataJson = JSON.stringify(Object.fromEntries(formData)); // Convert form data to JSON
    submitSignupForm(formDataJson); // Submit form data
});

// Function to update displayed initials
function updateInitials(username) {
    const initials = username.split(' ').map(word => word.charAt(0).toUpperCase()).join('');
    document.querySelector('.initials').textContent = initials;
}

// Example usage after user signs up (replace "username" with the actual username)
const username = "John Doe"; // Example username
updateInitials(username); // Update displayed initials

