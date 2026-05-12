import React from 'react';
import { Link } from 'react-router-dom';
import './PageCommon.css';

const socialLinks = [
  {
    href: 'https://wa.me/918072107164',
    icon: 'fab fa-whatsapp',
    label: 'WhatsApp',
    color: '#25d366',
  },
  {
    href: 'https://www.facebook.com/profile.php?id=61573265734167',
    icon: 'fab fa-facebook-f',
    label: 'Facebook',
    color: '#1877f2',
  },
  {
    href: 'https://www.instagram.com/arasuhotelmanagementvnr/?hl=en',
    icon: 'fab fa-instagram',
    label: 'Instagram',
    color: '#e1306c',
  },
  {
    href: 'https://youtube.com/@tamilnaduelectrohomeopathyapk?si=xuf4wAFkVbeIKY9c',
    icon: 'fab fa-youtube',
    label: 'YouTube',
    color: '#ff0000',
  },
];

const ContactPage = () => {
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

          {/* Contact Info */}
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            <span className="ed-section-subtitle">Get In Touch</span>
            <h4 className="ed-section-title">Don't Hesitate To Contact Us</h4>
            <p style={{ color: '#666', fontSize: '15px', lineHeight: 1.8, marginBottom: 24 }}>
              We're here to help and answer any question you might have about
              Arasu Institute of Hotel Management. We look forward to hearing from you.
            </p>

            <div className="contact-info-list">
              {[
                { icon: 'fas fa-phone-alt',      label: 'Phone',        value: '80721 07164 / 90874 98181',    href: 'https://wa.me/918072107164', isWhatsApp: true },
                { icon: 'fas fa-envelope',       label: 'Email',        value: 'arasucollegevnr@gmail.com',    href: 'mailto:arasucollegevnr@gmail.com' },
                { icon: 'fas fa-globe',          label: 'Website',      value: 'www.arasuinstitute.com',         href: null },
                { icon: 'fas fa-map-marker-alt', label: 'Location',     value: 'Virudhunagar, Tamil Nadu.',    href: '#' },
                { icon: 'fas fa-clock',          label: 'Office Hours', value: 'Mon – Sat: 9:00 AM – 6:00 PM', href: null },
              ].map((item, i) => (
                <div key={i} className="contact-info-item">
                  <div className="ci-icon"><i className={item.icon}></i></div>
                  <div className="ci-info">
                    <span>{item.label}</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.isWhatsApp ? '_blank' : undefined}
                        rel={item.isWhatsApp ? 'noopener noreferrer' : undefined}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
                      >
                        {item.isWhatsApp && (
                          <i className="fab fa-whatsapp" style={{ color: '#25d366', fontSize: 16 }}></i>
                        )}
                        {item.value}
                      </a>
                    ) : (
                      <p>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media Links */}
            <div style={{ marginTop: 32 }}>
              <p style={{ fontWeight: 700, fontSize: 14, color: '#333', marginBottom: 14, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Follow Us
              </p>
              <div style={{ display: 'flex', gap: 12 }}>
                {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      background: s.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontSize: 18,
                      textDecoration: 'none',
                      transition: 'transform 0.2s, opacity 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    <i className={s.icon}></i>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Map */}
          <div className="contact-map">
            <iframe
              title="Arasu Institute Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.5!2d77.9529987!3d9.5548993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b012d41a70cf585:0x196a9e3b9eac203b!2sArasu+bsc+catering+college+Electro+Homeopathy+Virudhunagar!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
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