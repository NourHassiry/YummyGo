import React from 'react';
import '../styles/Contact.css';

const contactInfo = [
  { icon: '📧', title: 'Email', value: 'yummygo@gmail.com' },
  { icon: '📱', title: 'Phone', value: '+961 71 000 000' },
  { icon: '📍', title: 'Address', value: 'Beirut, Lebanon' },
  { icon: '🕐', title: 'Working Hours', value: 'Daily: 10:00 AM - 11:00 PM' },
];

function Contact() {
  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1 className="contact-title">Get in Touch 📞</h1>
        <p className="contact-subtitle">
          Have a question? We'd love to hear from you.
        </p>
      </header>

      <div className="row g-4">
        {contactInfo.map((item) => (
          <div className="col-md-6 col-lg-3" key={item.title}>
            <div className="contact-card">
              <div className="contact-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="contact-strip">
        <div>
          <h3>We're always here to help 🍕</h3>
          <p>Fast replies, friendly team, and fresh food — that's YummyGo.</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;