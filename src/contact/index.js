import React, { useState } from 'react';
import './index.css';
import { Roles } from '../login/roles';
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useLocation } from "react-router-dom";
import * as client from "../contact/client.js";
// import bg from 'src/Background.jpeg'

function Contact() {
  const account = useSelector((state) => state.accountReducer.account);
  const [contact, setContact] = useState({ name: "", email: "", subject: "", message: "" });
  if (account.role === Roles.ANONYMOUS) {
    return (
      <div className="contact-container">
        <h3>Please <a href="#/FoodPilot/login">login / register</a> first to access this page.</h3>
      </div>
    );
  }
  if (account.role === Roles.ADMIN) {
    return (
      <div className="contact-container">
        <h3>Admin user cannot access this page</h3>
        <h3>Please <a href="#/FoodPilot/login">login / register</a> to another account to access this page.</h3>
      </div>
    );
  }

  const createContact = async (contact) => {
    const newContact = await client.createContact(contact);
    console.log(newContact);
  }

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
        <input type="text" id="name" name="name" required onChange={(e) => setContact({ ...contact, name: e.target.value })} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required onChange={(e) => setContact({ ...contact, email: e.target.value })} />


        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" name="subject" onChange={(e) => setContact({ ...contact, name: e.target.value })} />


        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required onChange={(e) => setContact({ ...contact, email: e.target.value })}></textarea>

        <button type="submit" onClick={createContact}>Send Message</button>
      </form>

      {/* <div className="map-container">
        <p>Map Placeholder</p>
      </div> */}
    </div>
  );
}

export default Contact;