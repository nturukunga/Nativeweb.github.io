// server.js
import express from 'express';
import { json as parseJSON, urlencoded } from 'body-parser';
import { createTransport } from 'nodemailer';

const app = express();
const port = process.env.PORT || 5500;

// Middleware to parse JSON and URL-encoded data
app.use(parseJSON());
app.use(urlencoded({ extended: true }));

// Basic GET route (optional)
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// POST endpoint to handle contact form submissions
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;
    
    // Configure the transporter using your email service
    const transporter = createTransport({
        service: 'gmail',
        auth: {
            user: 'contact@gmail.com',   // Replace with your Gmail address
            pass: 'nativecontact'        // Replace with your Gmail password or app-specific password
        }
    });

    const mailOptions = {
        from: 'contact@gmail.com',          // Sender's email
        to: 'munenehowell3@gmail.com',        // Recipient's email (your email)
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
