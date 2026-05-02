import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PageCommon.css';

const ContactPage = () => {
  const [form, setForm] = useState({ name:'', email:'', phone:'', subject:'', message:'' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setForm({ name:'', email:'', phone:'', subject:'', message:'' });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <>
      <div className="page-banner">
        <div className="page-banner-overlay"></div>
        <div className="container">
          <div className="page-banner-content">
            <h1>Contact Us</h1>
            <nav className="breadcrumb">
              <Link to="/">Home</Link>
              <span><i className="fas fa-chevron-right"></i></span>
              <span>Contact</span>
            </nav>
          </div>
        </div>
      </div>

      <div className="contact-area">
        <div className="container">
          <div className="contact-grid">

            {/* Left Info */}
            <div>
              <span className="ed-section-subtitle">Get In Touch</span>
              <h4 className="ed-section-title">Don't Hesitate To Contact Us</h4>
              <p style={{ color:'#666', fontSize:'15px', lineHeight:1.8, marginBottom:10 }}>
                We're here to help and answer any question you might have about
                Arasan Institute of Hotel Management. We look forward to hearing from you.
              </p>
              <div className="contact-info-list">
                {[
                  { icon:'fas fa-phone-alt', label:'Phone', value:'80721 07164 / 90874 98181', href:'tel:+918072107164' },
                  { icon:'fas fa-envelope', label:'Email', value:'arasucollegevnr@gmail.com', href:'mailto:arasucollegevnr@gmail.com' },
                  { icon:'fas fa-globe', label:'Website', value:'www.arasuinstitute.in', href:'https://www.arasuinstitute.in' },
                  { icon:'fas fa-map-marker-alt', label:'Location', value:'Virudhunagar, Tamil Nadu.', href:'#' },
                  { icon:'fas fa-clock', label:'Office Hours', value:'Mon – Sat: 9:00 AM – 6:00 PM', href:null },
                ].map((item, i) => (
                  <div key={i} className="contact-info-item">
                    <div className="ci-icon"><i className={item.icon}></i></div>
                    <div className="ci-info">
                      <span>{item.label}</span>
                      {item.href ? <a href={item.href}>{item.value}</a> : <p>{item.value}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Form — hidden on mobile via CSS class */}
            <div className="contact-form-col">
              <div className="contact-form-box">
                <h4 style={{ fontSize:22, fontWeight:700, marginBottom:25, color:'var(--ed-dark)' }}>Send Us A Message</h4>
                {sent ? (
                  <div style={{ background:'#e6f9ee', border:'1px solid #4CAF50', borderRadius:12, padding:'20px 25px', color:'#2E7D32', fontSize:15, fontWeight:600 }}>
                    <i className="fas fa-check-circle" style={{ marginRight:10 }}></i>
                    Your message has been sent successfully! We'll get back to you soon.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row">
                      <div className="form-group">
                        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your Name *" required />
                      </div>
                      <div className="form-group">
                        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your Email *" required />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Your Phone" />
                      </div>
                      <div className="form-group">
                        <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="Subject *" required />
                      </div>
                    </div>
                    <div className="form-group">
                      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message *" required></textarea>
                    </div>
                    <button type="submit" className="ed-btn-theme" style={{ width:'100%', justifyContent:'center', padding:'16px' }}>
                      Send Message <i className="fas fa-paper-plane"></i>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

          {/* Map */}
          <div className="contact-map">
            <iframe
              title="Arasan Institute Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.5!2d77.9529987!3d9.5548993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b012d41a70cf585:0x196a9e3b9eac203b!2sArasu+bsc+catering+college+Electro+Homeopathy+Virudhunagar!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border:0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;