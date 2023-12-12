import React, { useState } from 'react';
import './index.css';
import { Roles } from '../login/roles';
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useLocation } from "react-router-dom";
import * as client from "../contact/client.js";

function Contact() {
  const account = useSelector((state) => state.accountReducer.account);
  const [contact, setContact] = useState({ name: "", email: "", subject: "", message: "" });
  const [messageOn, setMessageOn] = useState(false);



  // const [isMessageVisible, setIsMessageVisible] = useState(false);
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
    setMessageOn(true);
    // setIsMessageVisible(true);
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

      {/* <form className="contact-form" action="/submit-form" method="post"> */}
      {/* {isMessageVisible && <p>Thank you for your feedback! We will get back to you soon.</p>} */}
      {messageOn && (

        <div className="card card-edi">
          <div className="card-header">
            Message Received!
          </div>
          <div className="card-body">
            <h5 className="card-title">Thank You!</h5>
            <p className="card-text">We will shortly reach back to you.</p>
          </div>
        </div>
      )}

      {!messageOn && (
        <form className="contact-form" onSubmit={(e) => { e.preventDefault(); createContact(contact) }}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required onChange={(e) => setContact({ ...contact, name: e.target.value })} />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required onChange={(e) => setContact({ ...contact, email: e.target.value })} />


          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" onChange={(e) => setContact({ ...contact, name: e.target.value })} />


          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required onChange={(e) => setContact({ ...contact, email: e.target.value })}></textarea>

          <button type="submit">Send Message</button>
        </form>

      )}
      {/* <form className="contact-form">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required onChange={(e) => setContact({ ...contact, name: e.target.value })} />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required onChange={(e) => setContact({ ...contact, email: e.target.value })} />


      <label htmlFor="subject">Subject:</label>
      <input type="text" id="subject" name="subject" onChange={(e) => setContact({ ...contact, name: e.target.value })} />


      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" required onChange={(e) => setContact({ ...contact, email: e.target.value })}></textarea>

      <button type="submit" onClick={createContact}>Send Message</button>
    </form> */}

      {/* <div className="map-container">
        <p>Map Placeholder</p>
      </div> */}
    </div>
  );
}

export default Contact;

// import React, { useState } from 'react';
// import './index.css';
// import { Roles } from '../login/roles';
// import { useSelector } from "react-redux";
// import * as client from "../contact/client.js";

// function Contact() {
//   const account = useSelector((state) => state.accountReducer.account);
//   const [contact, setContact] = useState({ name: "", email: "", subject: "", message: "" });
//   const [submissionMessage, setSubmissionMessage] = useState("");

//   // Conditional rendering based on the user role
//   if (account.role === Roles.ANONYMOUS) {
//     return (
//       <div className="contact-container">
//         <h3>Please <a href="#/FoodPilot/login">login / register</a> first to access this page.</h3>
//       </div>
//     );
//   }
//   if (account.role === Roles.ADMIN) {
//     return (
//       <div className="contact-container">
//         <h3>Admin user cannot access this page.</h3>
//       </div>
//     );
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent the default form submission
//     try {
//       const newContact = await client.createContact(contact);
//       console.log(newContact);
//       setSubmissionMessage("Thank you for your feedback! We will get back to you soon.");
//       setContact({ name: "", email: "", subject: "", message: "" }); // Reset form
//     } catch (error) {
//       console.error("Error submitting contact", error);
//       setSubmissionMessage("There was an error submitting your feedback.");
//     }
//   }

//   return (
//     <div className="contact-container">
//       <h1>We'd Love to Hear From You!</h1>
//       <div className="contact-info">
//         <p><strong>Phone:</strong> <a href="tel:+123456789">+1 234-567-890</a></p>
//         <p><strong>Email:</strong> <a href="mailto:contact@example.com">contact@example.com</a></p>
//         <p><strong>Address:</strong> 123 Example Street, City, Country</p>
//       </div>

//       <form className="contact-form" onSubmit={handleSubmit}>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           required
//           value={contact.name}
//           onChange={(e) => setContact({ ...contact, name: e.target.value })}
//         />

//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           required
//           value={contact.email}
//           onChange={(e) => setContact({ ...contact, email: e.target.value })}
//         />

//         <label htmlFor="subject">Subject:</label>
//         <input
//           type="text"
//           id="subject"
//           name="subject"
//           value={contact.subject}
//           onChange={(e) => setContact({ ...contact, subject: e.target.value })}
//         />

//         <label htmlFor="message">Message:</label>
//         <textarea
//           id="message"
//           name="message"
//           required
//           value={contact.message}
//           onChange={(e) => setContact({ ...contact, message: e.target.value })}
//         ></textarea>

//         <button type="submit">Send Message</button>
//       </form>

//       {submissionMessage && <div className="submission-message">{submissionMessage}</div>}

//       {/* Map Placeholder, if needed */}
//     </div>
//   );
// }

// export default Contact;
