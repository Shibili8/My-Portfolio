import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Header from '../Header';
import './index.css';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage('');

    if (!form.current) {
      setStatusMessage('Form is not available.');
      setIsSending(false);
      return;
    }

    try {
      const result = await emailjs.sendForm(
        'service_xzfphdc',   // Service ID
        'template_grat8qg',  // Template ID
        form.current,
        'ov1ngrEXo0fiVhj7l' // Public Key
      );
      console.log('EmailJS success:', result.text);
      setStatusMessage('✅ Message sent successfully!');
      e.target.reset();
    } catch (error) {
      console.error('EmailJS error:', error.text || error);
      setStatusMessage('❌ Failed to send message. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="contact-container">
      <Header />

      <div className="contact-page">
        <h2 className="contact-title">Contact Me</h2>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
          />
          <button type="submit" disabled={isSending}>
            {isSending ? 'Sending...' : 'Send'}
          </button>
        </form>

        {statusMessage && <p className="status-message">{statusMessage}</p>}
      </div>
    </div>
  );
};

export default Contact;
