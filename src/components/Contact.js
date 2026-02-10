import React, { useState } from 'react';
import { Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/mwkabbog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section__title">Get In Touch</h2>
        <p className="section__subtitle">Have a question? I'd love to hear from you.</p>

        <div className="contact-wrapper">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group full-width">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Your message here..."
              />
            </div>

            <button 
              type="submit" 
              className="button submit-btn"
              disabled={loading}
            >
              {loading ? 'Sending...' : (
                <>
                  <span>Send Message</span>
                  <Send size={18} />
                </>
              )}
            </button>

            {submitted && (
              <div className="success-message">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}
          </form>

          <div className="contact-info">
            <h3>Other Ways to Connect</h3>
            <div className="contact-methods">
              <a href="mailto:hello@sanghamitrabiswas.com" className="contact-method">
                <span className="method-label">Email</span>
                <span className="method-value">hello@sanghamitrabiswas.com</span>
              </a>
              <a href="https://linkedin.com/in/sanghamitra-biswas/" target="_blank" rel="noopener noreferrer" className="contact-method">
                <span className="method-label">LinkedIn</span>
                <span className="method-value">sanghamitra-biswas</span>
              </a>
              <a href="https://github.com/sangy987" target="_blank" rel="noopener noreferrer" className="contact-method">
                <span className="method-label">GitHub</span>
                <span className="method-value">sangy987</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
