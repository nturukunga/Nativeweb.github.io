const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Define routes
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Start the server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

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

// Registration route
app.post('/register', (req, res) => {
    // Extract user data from request body
    const { email, password } = req.body;

    // Validate user data (e.g., check for required fields, validate email format)

    // Hash the password using bcrypt
    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.error('Error occurred while hashing password:', err);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            // Store the user data (e.g., email and hashed password) in the database
            // Respond with success message or error message as needed
        }
    });
});


// Start the Express server
const port = 5500; // Choose any available port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// server.js
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 5500; // Change this to your desired port

// Middleware to parse JSON and urlencoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// POST endpoint to handle form submissions
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;

    // Send email with form data
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'contact@gmail.com', // Enter your Gmail email address
            pass: 'nativecontact' // Enter your Gmail password or app-specific password
        }
    });

    const mailOptions = {
        from: 'contact@gmail.com', // Sender email address
        to: 'munenehowell3@gmail.com', // Recipient email address
        subject: 'New Message from Contact Form',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error:', error);
            res.status(500).send('An error occurred while sending the message.');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Message sent successfully!');
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 5500;

// Middleware
app.use(express.json());
app.use(cookieParser());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/auth_demo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// User Model
const User = mongoose.model('User', {
    email: String,
    password: String,
});

// Routes
app.post('/signup', async (req, res) => {
    try {
        const { email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ email, password: hashedPassword });
        await user.save();
        res.status(201).send('User created successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).send('Invalid email or password');
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).send('Invalid email or password');
        }
        const token = jwt.sign({ userId: user._id }, 'secret', { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true });
        res.send('Login successful');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Server Listening
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
