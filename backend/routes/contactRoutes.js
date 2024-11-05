import express from 'express';
import Contact from '../models/Contact.js';
import nodemailer from 'nodemailer';

const router = express.Router();

// Create transporter for nodemailer with SendGrid
const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: "7f2ef9001@smtp-brevo.com", // This is literally the string "apikey"
    pass: "zJpd0mNYQn4xWwV2"
  },
  tls: {
    rejectUnauthorized: false // Only for development
  }
});

// Verify transporter connection
transporter.verify(function(error, success) {
  if (error) {
    console.log('Transporter verification error:', error);
  } else {
    console.log('Server is ready to send emails');
  }
});

// Submit contact form and send email
router.post('/', async (req, res) => {
  try {
    // Save contact to database
    const contact = new Contact(req.body);
    const savedContact = await contact.save();

    // Prepare email content
    const mailOptions = {
      from: '<irsdl.project@gmail.com>',
  to: 'irsdl.project@gmail.com',
  subject: 'New Contact Form Submission',
  html: `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${req.body.name}</p>
    <p><strong>Mobile:</strong> ${req.body.mobile}</p>
    <p><strong>Email:</strong> ${req.body.email}</p>
    <p><strong>Project Title:</strong> ${req.body.projectTitle}</p>
    <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
  `
};

    // Send email and wait for response
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    res.status(201).json({ 
      success: true, 
      message: 'Form submitted successfully!',
      contact: savedContact,
      emailSent: true
    });
  } catch (error) {
    console.error('Error details:', error);
    res.status(400).json({ 
      success: false, 
      message: 'Failed to process your request. Please try again.',
      error: error.message 
    });
  }
});

export default router;