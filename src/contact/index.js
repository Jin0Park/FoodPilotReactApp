import React from 'react';
import './index.css';
// import bg from 'src/Background.jpeg'

function Contact() {
  return (
    <div className="contact-container">
      <h1>We'd Love to Hear From You!</h1>

      <div className="contact-info">
        <p><strong>Phone:</strong> <a href="tel:+123456789">+1 234-567-890</a></p>
        <p><strong>Email:</strong> <a href="mailto:contact@example.com">contact@example.com</a></p>
        <p><strong>Address:</strong> 123 Example Street, City, Country</p>
      </div>

      <form className="contact-form" action="/submit-form" method="post">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" name="subject" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send Message</button>
      </form>

      <div className="map-container">
        <p>Map Placeholder</p>
      </div>
    </div>
  );
}

export default Contact;