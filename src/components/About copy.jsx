import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

import imgTopLeft  from '../assets/5.jpeg';   // kitchen photo
import imgTopRight from '../assets/16.JPG';   // campus road photo (capital .JPG)
import imgBottom   from '../assets/1.jpeg';  // chefs selfie

const About = () => {
  const features = [
    {
      icon: "fas fa-university",
      title: "Alagappa University Affiliated",
      desc: "All our degree and diploma programmes are affiliated to Alagappa University, ensuring recognised and quality certification.",
    },
    {
      icon: "fas fa-utensils",
      title: "Industry-Ready Training",
      desc: "Hands-on practical training in Catering Science, Hotel Administration, and Food Production prepares students for real hospitality careers.",
    },
    {
      icon: "fas fa-certificate",
      title: "NCVRT Certified Courses",
      desc: "Diploma in Fashion Designing (DFD) and Montessori Teacher Training (MTT) are certified by the National Council of Vocational Research Training.",
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Located in Virudhunagar",
      desc: "Conveniently situated in Virudhunagar, Tamil Nadu, with approvals under AU / DCP / 843 / 18.",
    },
  ];

  return (
    <div className="about-area">
      <div className="container">
        <div className="about-grid">

          {/* ── Left: Collage ── */}
          <div className="about-images">
            <div className="collage-top-row">
              <div className="collage-img collage-tl">
                <img src={imgTopLeft} alt="Arasu Institute Kitchen" />
              </div>
              <div className="collage-img collage-tr">
                <img src={imgTopRight} alt="Arasu Institute Campus" />
              </div>
            </div>
            <div className="collage-img collage-bottom">
              <img src={imgBottom} alt="Arasu Institute Students" />
            </div>
            <div className="collage-badge">
              <span className="badge-number">15+</span>
              <span className="badge-line">Years</span>
              <span className="badge-line">Of Experience</span>
            </div>
            <div className="collage-dots" aria-hidden="true" />
          </div>

          {/* ── Right: Content ── */}
          <div className="about-content">
            <span className="ed-section-subtitle">
              Welcome — Arasu Institute of Hotel Management
            </span>
            <h4 className="ed-section-title">
              Excellence in <span className="title-highlight">Hospitality</span> &amp; Hotel Management Education
            </h4>
            <p className="about-desc">
              Arasu Institute of Hotel Management, Virudhunagar, is a premier institution
              offering industry-focused programmes in Catering Science, Hotel Administration,
              and Food Production. Affiliated to Alagappa University and approved under
              AU / DCP / 843 / 18, we shape the next generation of hospitality professionals.
            </p>

            {/* Features — inline styles to guarantee icon LEFT, text RIGHT */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {features.map((f, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    gap: '14px',
                  }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      width: '46px',
                      height: '46px',
                      background: 'rgba(23,184,166,0.12)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <i className={f.icon} style={{ fontSize: '18px', color: '#17b8a6' }}></i>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h5 style={{ fontSize: '15px', fontWeight: 700, color: '#0d2247', margin: '0 0 4px' }}>
                      {f.title}
                    </h5>
                    <p style={{ fontSize: '13.5px', color: '#666', margin: 0, lineHeight: 1.7 }}>
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div className="about-contact-info">
              <p><i className="fas fa-phone"></i> 80721 07164 &nbsp;|&nbsp; 90874 98181</p>
              <p><i className="fas fa-envelope"></i> arasucollegevnr@gmail.com</p>
              <p><i className="fas fa-globe"></i> www.arasuinstitute.in</p>
            </div>

            <Link to="/courses" className="ed-btn-theme">
              View Courses <i className="fas fa-arrow-right"></i>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;