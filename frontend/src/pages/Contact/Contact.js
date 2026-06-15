import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaArrowRight, FaCheckCircle, FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa';
import axios from 'axios';
import './Contact.css';

const subjects = [
  'Turnkey Projects',
  'Assembly Line Relocation',
  'Industrial Automation',
  'Robotics Integration',
  'PLC / SCADA / HMI',
  'Electrical Design & Panel Manufacturing',
  'Product Development / Design',
  'CAD / 3D Modeling',
  'Fabrication (MS & SS)',
  'MES Implementation',
  'Machine Integration',
  'General Enquiry',
  'Careers',
];

const Contact = () => {
  const [form, setForm]         = useState({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
  const [errors, setErrors]     = useState({});
  const [loading, setLoading]   = useState(false);
  const [success, setSuccess]   = useState(false);
  const [apiError, setApiError] = useState('');

  const validate = () => {
    const e = {};
    if (!form.name.trim())                      e.name    = 'Name is required';
    if (!form.email.trim())                     e.email   = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email   = 'Enter a valid email';
    if (!form.message.trim())                   e.message = 'Message is required';
    return e;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true); setApiError('');
    try {
      await axios.post('/api/contact', form);
      setSuccess(true);
      setForm({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
    } catch (err) {
      setApiError(err.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">

      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1400&q=80)' }} />
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1>Contact Us</h1>
          <div className="breadcrumb"><Link to="/">Home</Link><span>/</span><span>Contact Us</span></div>
          <p className="page-hero-sub">Let's talk about your next project. Our engineers are ready to help.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container contact-layout">

          {/* Left: Info */}
          <div className="contact-info">
            <span className="section-tag">Get In Touch</span>
            <h2 className="section-title">Let's Talk About Your Next Project</h2>
            <p className="contact-intro">
              Whether you need turnkey project execution, automation, fabrication, or any other
              industrial engineering solution — Marscon India is here to help. Reach out and our
              team will respond within 24 hours.
            </p>

            <div className="contact-cards">
              <div className="contact-card">
                <div className="cc-icon"><FaMapMarkerAlt /></div>
                <div>
                  <h4>Head Office</h4>
                  <p>Plot No, GP-89, Swami Plaza,<br />MIDC Chinchwad, Pune – 411019,<br />Maharashtra, India</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="cc-icon"><FaPhone /></div>
                <div>
                  <h4>Phone Numbers</h4>
                  <p><a href="tel:+917744091318">(+91) 7744091318</a></p>
                  <p><a href="tel:02027493737">020 27493737</a></p>
                </div>
              </div>
              <div className="contact-card">
                <div className="cc-icon"><FaEnvelope /></div>
                <div>
                  <h4>Email Address</h4>
                  <p><a href="mailto:marscon.india@gmail.com">marscon.india@gmail.com</a></p>
                  <p><a href="http://www.marscon.in" target="_blank" rel="noreferrer">www.marscon.in</a></p>
                </div>
              </div>
              <div className="contact-card">
                <div className="cc-icon"><FaClock /></div>
                <div>
                  <h4>Business Hours</h4>
                  <p>Mon – Sat: 9:00 AM – 6:00 PM</p>
                  <p style={{ color: 'var(--mid-gray)', fontSize: 13 }}>Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <span>Follow Us:</span>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
              <a href="https://youtube.com"  target="_blank" rel="noreferrer"><FaYoutube /></a>
            </div>

            {/* Google Map */}
            <div className="contact-map">
              <iframe
                title="Marscon India Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.0!2d73.8!3d18.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9f3c2e0c555%3A0x5b80e0b44c7e0c00!2sMIDC+Chinchwad%2C+Pune!5e0!3m2!1sen!2sin!4v1234567890"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-wrap">
            <div className="contact-form-box">
              <h3 className="contact-form-title">Send Us a Message</h3>

              {success ? (
                <div className="contact-success">
                  <FaCheckCircle className="success-icon" />
                  <h4>Message Sent Successfully!</h4>
                  <p>Thank you for reaching out to Marscon India. Our team will respond within 24 hours.</p>
                  <button className="btn-primary" onClick={() => setSuccess(false)}>Send Another Message</button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  {apiError && <div className="form-api-error">{apiError}</div>}

                  <div className="form-row">
                    <div className={`form-group ${errors.name ? 'form-group--error' : ''}`}>
                      <label>Your Name *</label>
                      <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="e.g. Rajesh Kumar" />
                      {errors.name && <span className="form-error">{errors.name}</span>}
                    </div>
                    <div className={`form-group ${errors.email ? 'form-group--error' : ''}`}>
                      <label>Email Address *</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="e.g. rajesh@company.com" />
                      {errors.email && <span className="form-error">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="e.g. +91 98765 43210" />
                    </div>
                    <div className="form-group">
                      <label>Company Name</label>
                      <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="e.g. Tata Motors Ltd." />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Subject / Service Required</label>
                    <select name="subject" value={form.subject} onChange={handleChange}>
                      <option value="">Select a subject</option>
                      {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div className={`form-group ${errors.message ? 'form-group--error' : ''}`}>
                    <label>Your Message *</label>
                    <textarea name="message" rows="5" value={form.message} onChange={handleChange} placeholder="Describe your project or requirement in detail..." />
                    {errors.message && <span className="form-error">{errors.message}</span>}
                  </div>

                  <button type="submit" className="btn-primary contact-submit" disabled={loading}>
                    {loading ? 'Sending...' : <><span>Send Message</span><FaArrowRight /></>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
