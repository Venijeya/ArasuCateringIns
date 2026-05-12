import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './HeroBanner.css';
import heroImg1 from '../assets/1.jpeg';
import heroImg2 from '../assets/2.jpeg';
import heroImg3 from '../assets/3.jpeg';
import heroImg4 from '../assets/4.jpeg';
import courseImg1 from '../assets/30.jpeg';
import courseImg4 from '../assets/3.jpeg';
import courseImgDFS from '../assets/33.jpeg';
import courseImgDGDA from '../assets/35.jpeg';

const IMAGES = [heroImg1, heroImg2, heroImg3, heroImg4];
const INTERVAL = 3000;

const HeroBanner = () => {
  const parallaxRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      parallaxRefs.current.forEach((el) => {
        if (el) el.style.transform = `translateY(${scrollY * 0.35}px)`;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % IMAGES.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const courses = [
    {
      code: "B.Sc., C & HA",
      tamil: "பேச்லர் ஆஃப் கேட்டரிங் & ஹோட்டல் அட்மினிஸ்ட்ரேஷன்",
      english: "Bachelor of Catering Science & Hotel Administration",
      duration: "3",
      eligibility: ["+2"],
      university: "Alagappa University",
      img: courseImg1,
      imgPos: "center 40%",
    },
    {
      code: "Dip in C & HA",
      tamil: "டிப்ளமோ இன் கேட்டரிங் & ஹோட்டல் அட்மினிஸ்ட்ரேஷன்",
      english: "Diploma in Catering & Hotel Administration",
      duration: "3",
      eligibility: ["10th", "+2"],
      university: "Alagappa University",
      // Fine dining / catering table setup
      img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80&fit=crop&crop=center",
      imgPos: "center 40%",
    },
    {
      code: "CCFP",
      tamil: "",
      english: "Craft Course in Food Production",
      duration: "1",
      eligibility: ["10th", "+2"],
      university: "Alagappa University",
      // Chef plating food professionally
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80&fit=crop&crop=center",
      imgPos: "center 35%",
    },
    {
      code: "DFD",
      tamil: "டிப்ளமோ இன் ஃபேஷன் டிசைனிங்",
      english: "Diploma in Fashion Designing",
      duration: "2",
      eligibility: ["+2"],
      university: "NCVRT",
      // Tailor / sewing machine / fabric
      img: courseImg4,
      imgPos: "center 30%",
    },
    {
      code: "MTT",
      tamil: "மாண்டிசோரி டீச்சர் டிரெயினிங்",
      english: "Montessori Teacher Training",
      duration: "2",
      eligibility: ["+2"],
      university: "NCVRT",
      // Teacher helping kids in classroom
      img: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80&fit=crop&crop=center",
      imgPos: "center 25%",
    },
    {
      code: "DGDA",
      tamil: "",
      english: "Diploma in General Duty Assistant (Nursing)",
      duration: "2",
      eligibility: ["+2"],
      university: "NCVRT",
      img: courseImgDGDA,
      imgPos: "center 15%",
    },
    {
      code: "DMLT",
      tamil: "",
      english: "Diploma in Medical Lab Technology",
      duration: "2",
      eligibility: ["+2"],
      university: "NCVRT",
      // Lab technician using microscope
      img: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&q=80&fit=crop&crop=center",
      imgPos: "center 30%",
    },
    {
      code: "DMMV",
      tamil: "",
      english: "Diploma in Mechanical Motor Vehicle",
      duration: "2",
      eligibility: ["+2"],
      university: "NCVRT",
      // Mechanic repairing car engine
      img: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=600&q=80&fit=crop&crop=center",
      imgPos: "center 40%",
    },
    {
      code: "DRAC",
      tamil: "",
      english: "Diploma in Refrigeration and Air Conditioning",
      duration: "2",
      eligibility: ["+2"],
      university: "NCVRT",
      // HVAC / AC technician working
      img: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80&fit=crop&crop=center",
      imgPos: "center 35%",
    },
    {
      code: "DFS",
      tamil: "",
      english: "Diploma in Fire Safety",
      duration: "2",
      eligibility: ["+2"],
      university: "NCVRT",
      // Fire extinguisher / fire safety
      img: courseImgDFS,
      imgPos: "center 40%",
    },
  ];

  return (
    <div className="ed-slider-area">

      {/* ── Hero Section ── */}
      <div className="ed-slider-bg">

        {IMAGES.map((img, i) => (
          <div
            key={i}
            ref={(el) => (parallaxRefs.current[i] = el)}
            className={`hero-parallax-bg ${i === activeIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        <div className="hero-overlay" />

        <div className="slide-dots">
          {IMAGES.map((_, i) => (
            <button
              key={i}
              className={`slide-dot ${i === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="scroll-hint">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
          Scroll
        </div>

        <div className="hero-content-wrap">
          <div className="container">
            <div className="hero-layout">

              <div className="hero-image-col">
                <div className="hero-glass-card">
                  <p className="glass-title">At a Glance</p>
                  <div className="hero-stats-row">
                    <div className="hero-stat">
                      <div className="hero-stat-num">10+</div>
                      <div className="hero-stat-lbl">Courses</div>
                    </div>
                    <div className="hero-stat">
                      <div className="hero-stat-num">3</div>
                      <div className="hero-stat-lbl">Universities</div>
                    </div>
                    <div className="hero-stat">
                      <div className="hero-stat-num">100%</div>
                      <div className="hero-stat-lbl">Placement</div>
                    </div>
                  </div>
                  <p className="hero-affiliation">
                    Affiliated to <strong style={{ color: '#17b8a6' }}>Alagappa University</strong> &amp; NCVRT<br />
                    Virudhunagar, Tamil Nadu
                  </p>
                </div>
              </div>

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

        <div className="courses-grid-wrapper">
          <div className="courses-grid">
            {courses.map((c, i) => (
              <div key={i} className="course-card">

                {/* Course image instead of colored header */}
                <div className="course-img-wrap">
                  <img
                    src={c.img}
                    alt={c.english}
                    className="course-img"
                    loading="lazy"
                    style={{ objectPosition: c.imgPos || 'center center' }}
                  />
                  <div className="course-img-overlay">
                    <div className="course-code">{c.code}</div>
                    <div className="course-university">{c.university}</div>
                  </div>
                </div>

                <div className="course-card-body">
                  <p className="course-english">{c.english}</p>
                  {c.tamil && <p className="course-tamil">{c.tamil}</p>}
                </div>

                <div className="course-stats">
                  <div className="stat-box">
                    <div className="stat-number">{c.duration}</div>
                    <div className="stat-label">வருடம்</div>
                  </div>
                  <div className="stat-box">
                    {c.eligibility.map((e, j) => (
                      <div
                        key={j}
                        className="stat-number"
                        style={{
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