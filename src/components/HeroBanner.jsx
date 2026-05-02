import React from 'react';
import { Link } from 'react-router-dom';
import './HeroBanner.css';
import heroImg from '../assets/1.jpeg';

const HeroBanner = () => {
  const courses = [
    {
      code: "B.Sc., C & HA",
      tamil: "பேச்லர் ஆஃப் கேட்டரிங் & ஹோட்டல் அட்மினிஸ்ட்ரேஷன்",
      english: "Bachelor of Catering Science & Hotel Administration",
      duration: "3",
      eligibility: ["+2"],
      university: "Alagappa University",
      color: "#1a3a8f",
    },
    {
      code: "Dip in C & HA",
      tamil: "டிப்ளமோ இன் கேட்டரிங் & ஹோட்டல் அட்மினிஸ்ட்ரேஷன்",
      english: "Diploma in Catering & Hotel Administration",
      duration: "3",
      eligibility: ["10th", "+2"],
      university: "Alagappa University",
      color: "#17b8a6",
    },
    {
      code: "CCFP",
      tamil: "",
      english: "Craft Course in Food Production",
      duration: "1",
      eligibility: ["10th", "+2"],
      university: "Alagappa University",
      color: "#e67e22",
    },
    {
      code: "DFD",
      tamil: "டிப்ளமோ இன் ஃபேஷன் டிசைனிங்",
      english: "Diploma in Fashion Designing",
      duration: "2",
      eligibility: ["+2"],
      university: "NCVRT",
      color: "#8e44ad",
    },
    {
      code: "MTT",
      tamil: "மாண்டிசோரி டீச்சர் டிரெயினிங்",
      english: "Montessori Teacher Training",
      duration: "2",
      eligibility: ["+2"],
      university: "NCVRT",
      color: "#c0392b",
    },
  ];

  return (
    <div className="ed-slider-area">

      {/* ── Hero Section ── */}
      <div className="ed-slider-bg">
        <div className="container">
          <div className="hero-layout">

            {/* Image */}
            <div className="hero-image-col">
              <img
                src={heroImg}
                alt="Arasu Institute Students"
                className="hero-main-img"
              />
            </div>

            {/* Text Content */}
            <div className="slider-content-col">
              <div className="ed-slider-content">
                <span className="ed-slider-subtitle">
                  Welcome — Arasu Institute of Hotel Management
                </span>
                <h2 className="ed-slider-title">
                  Your Career in Hotel<br />Management Starts Here
                </h2>
                <p>
                  Join Arasu Institute of Hotel Management, Virudhunagar — offering
                  UG &amp; Diploma programmes in Hotel Administration, Catering Science,
                  and Food Production, affiliated to Alagappa University.
                </p>
                <Link to="/courses" className="ed-btn-dark">
                  Explore Courses <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Courses Section ── */}
      <div className="courses-section">
        <div className="container">
          <div className="courses-header">
            <span className="courses-badge">Our Programmes</span>
            <h3 className="courses-title">Courses We Offer</h3>
            <p className="courses-subtitle">
              அழகப்பா பல்கலைக்கழகம் அங்கீகாரம் பெற்றது &nbsp;|&nbsp; Approved by Alagappa University
            </p>
          </div>
        </div>

        {/* Wrapper breaks out of container so cards fill full width */}
        <div className="courses-grid-wrapper">
          <div className="courses-grid">
            {courses.map((c, i) => (
              <div key={i} className="course-card">
                <div className="course-card-header" style={{ background: c.color }}>
                  <div className="course-code">{c.code}</div>
                  <div className="course-university">{c.university}</div>
                </div>
                <div className="course-card-body">
                  <p className="course-english">{c.english}</p>
                  {c.tamil && <p className="course-tamil">{c.tamil}</p>}
                </div>
                <div className="course-stats" style={{ borderTop: `3px solid ${c.color}` }}>
                  <div className="stat-box">
                    <div className="stat-number" style={{ color: c.color }}>{c.duration}</div>
                    <div className="stat-label">வருடம்</div>
                  </div>
                  <div className="stat-box">
                    {c.eligibility.map((e, j) => (
                      <div
                        key={j}
                        className="stat-number"
                        style={{
                          color: c.color,
                          fontSize: c.eligibility.length > 1 ? '1.3rem' : '1.9rem',
                        }}
                      >
                        {e}
                      </div>
                    ))}
                    <div className="stat-label">தேர்ச்சி</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container">
          <div className="courses-cta">
            <Link to="/courses" className="courses-cta-btn">
              View All Courses <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HeroBanner;