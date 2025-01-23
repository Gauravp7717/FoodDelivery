import React, { useState } from "react";
import emailjs from "@emailjs/browser";
// import "./Contact.css"; // Import the CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // To show the status of the email

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_m3xa4xg", // Replace with your EmailJS Service ID
        "template_8exbgue", // Replace with your EmailJS Template ID
        formData,
        "L2YzZfCVnVJryvedo" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
        },
        (error) => {
          console.error(error.text);
          setStatus("Failed to send the message. Please try again later.");
        }
      );
  };

  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message"
            required
            className="form-textarea"
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default Contact;
