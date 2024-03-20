const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Function to check if user exists in the database (replace with your actual implementation)
function checkIfUserExists(email, username) {
    // Database query logic to check if user exists goes here
    // Return true if user exists, false otherwise
}

// Express route for handling sign-up requests
app.post('/signup', (req, res) => {
    const { email, username } = req.body;
    const userExists = checkIfUserExists(email, username);

    if (userExists) {
        return res.status(400).json({ error: 'User already exists. Please choose a different email or username.' });
    } else {
        // Proceed with sign-up process if user does not exist
        // Insert the new user into the database, etc.
        // Return a success response
        return res.status(200).json({ message: 'Sign-up successful!' });
    }
});

// Start the Express server
const port = 3000; // Choose any available port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
