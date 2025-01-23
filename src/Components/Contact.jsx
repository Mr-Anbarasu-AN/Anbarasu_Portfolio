
// Send using Netlify URL

import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';
import Footer from './Footer';
import Navbar from './Navbar';

const Contact = () => {
  const [recipient, setRecipient] = useState('');
  const [fullname, setFullname] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRecipientChange = (e) => {
    const email = e.target.value;
    setRecipient(email);
    setIsValidEmail(isEmailValid(email));
    if (!isEmailValid(email)) {
      setMessageText('Please enter a valid email address.');
    } else {
      setMessageText('');
    }
  };

  const handleFullnameChange = (e) => {
    setFullname(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isEmailValid(recipient)) {
      setMessageText('Please enter a valid email address.');
      return;
    }

    const formattedMessage = `
    Your Name: ${fullname}
    Your EmailId: ${recipient}

    ${message}
    `;

    const formData = {
      to: recipient,
      subject: subject,
      text: formattedMessage,
    };

    try {
      setLoading(true);
      const response = await axios.post('https://smtpserver.netlify.app/.netlify/functions/sendEmail', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response.data);
      setMessageText('Email sent successfully!');

      // Send a copy to the fixed email address if the first email is successful
      const copyFormData = {
        to: 'allsmart.org@gmail.com',
        subject: subject,
        text: formattedMessage,
      };

      await axios.post('https://smtpserver.netlify.app/.netlify/functions/sendEmail', copyFormData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setFullname('');
      setRecipient('');
      setSubject('');
      setMessage('');
      setIsValidEmail(true);
    } catch (error) {
      console.error(error);
      setMessageText('Error while sending email.');
    } finally {
      setLoading(false);
      setTimeout(() => {
        setMessageText('');
      }, 5000);
    }
  };

  return (
    <>
      <Navbar />
      <div className="contactbody">
        <div className="contact-form">
          <h2>Contact Me</h2>
          {messageText && <p className="message">{messageText}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullname">Full Name:</label>
              <input
                type="text"
                id="fullname"
                value={fullname}
                onChange={handleFullnameChange}
                style={{ marginBottom: 10 }}
                required
              />
              <label htmlFor="recipient">Your Gmail Id:</label>
              <input
                type="email"
                id="recipient"
                value={recipient}
                onChange={handleRecipientChange}
                required
              />
              {!isValidEmail && <p className="error-message">Invalid email address</p>}
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={handleSubjectChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={handleMessageChange}
                required
              ></textarea>
            </div>
            <button type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Gmail'}
            </button>
            <h6>(Note): This Email is sent to your Email ID by using My Gmail ID.</h6>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

