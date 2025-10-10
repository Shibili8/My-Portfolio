import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Header from '../Header';
import './index.css';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        'service_xzfphdc', // 🔹 Your EmailJS Service ID
        'template_grat8qg', // 🔹 Your EmailJS Template ID
        form.current,
        'ov1ngrEXo0fiVhj7l' // 🔹 Your EmailJS Public Key
      )
      .then(
        (result) => {
          setIsSending(false);
          alert('✅ Message sent successfully!');
          e.target.reset();
        },
        (error) => {
          setIsSending(false);
          alert('❌ Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className="contact-container">
      <Header />
      <div className="contact-page">
        <h2 className="contact-title">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit" disabled={isSending}>
            {isSending ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
