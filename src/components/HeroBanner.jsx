import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './HeroBanner.css';
import heroImg1 from '../assets/25.jpeg';
import heroImg2 from '../assets/1.jpeg';
import heroImg3 from '../assets/38.jpeg';
import heroImg4 from '../assets/32.jpeg';
import heroImg5 from '../assets/12.jpeg';
import heroImg6 from '../assets/8.jpeg';
import heroImg7 from '../assets/23.JPG';
import courseImg1 from '../assets/30.jpeg';
import courseImg4 from '../assets/3.jpeg';
import courseImgDFS from '../assets/33.jpeg';
import courseImgDGDA from '../assets/35.jpeg';

const IMAGES = [heroImg1, heroImg2, heroImg3, heroImg4, heroImg5, heroImg6, heroImg7];
const INTERVAL = 3000;

const HeroBanner = () => {
  const parallaxRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [exitIndex, setExitIndex]     = useState(null);
  const [direction, setDirection]     = useState('next'); // 'next' | 'prev'
  const isAnimating = useRef(false);
  const timerRef    = useRef(null);

  /* ── Parallax scroll ── */
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      parallaxRefs.current.forEach((el) => {
        if (el) el.style.backgroundPositionY = `calc(50% + ${scrollY * 0.3}px)`;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── Slide transition helper ── */
  const goTo = useCallback((nextIdx, dir) => {
    if (isAnimating.current || nextIdx === activeIndex) return;
    isAnimating.current = true;

    setDirection(dir);
    setExitIndex(activeIndex);
    setActiveIndex(nextIdx);

    setTimeout(() => {
      setExitIndex(null);
      isAnimating.current = false;
    }, 600); // matches CSS transition duration
  }, [activeIndex]);

  /* ── Auto-play ── */
  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % IMAGES.length;
        if (!isAnimating.current) {
          isAnimating.current = true;
          setDirection('next');
          setExitIndex(prev);
          setTimeout(() => {
            setExitIndex(null);
            isAnimating.current = false;
          }, 600);
        }
        return next;
      });
    }, INTERVAL);
  }, []);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [startTimer]);

  /* ── Arrow handlers ── */
  const handlePrev = () => {
    clearInterval(timerRef.current);
    const prev = (activeIndex - 1 + IMAGES.length) % IMAGES.length;
    goTo(prev, 'prev');
    startTimer();
  };

  const handleNext = () => {
    clearInterval(timerRef.current);
    const next = (activeIndex + 1) % IMAGES.length;
    goTo(next, 'next');
    startTimer();
  };

  /* ── Dot handler ── */
  const handleDot = (i) => {
    if (i === activeIndex) return;
    clearInterval(timerRef.current);
    goTo(i, i > activeIndex ? 'next' : 'prev');
    startTimer();
  };

  /* ── Slide className builder ── */
  const slideClass = (i) => {
    const classes = ['hero-parallax-bg'];
    if (i === activeIndex) {
      classes.push('active');
    } else if (i === exitIndex) {
      classes.push('exit', `exit-${direction}`);
    } else {
      // Park off-screen based on direction so incoming slides start from the right
      classes.push('hidden');
    }
    return classes.join(' ');
  };

  /* ── Courses data ── */
  const courses = [
    {
      code: 'B.Sc., C & HA',
      tamil: 'பேச்லர் ஆஃப் கேட்டரிங் & ஹோட்டல் அட்மினிஸ்ட்ரேஷன்',
      english: 'Bachelor of Catering Science & Hotel Administration',
      duration: '3',
      eligibility: ['+2'],
      university: 'Alagappa University',
      img: courseImg1,
      imgPos: 'center 40%',
    },
    {
      code: 'Dip in C & HA',
      tamil: 'டிப்ளமோ இன் கேட்டரிங் & ஹோட்டல் அட்மினிஸ்ட்ரேஷன்',
      english: 'Diploma in Catering & Hotel Administration',
      duration: '3',
      eligibility: ['10th', '+2'],
      university: 'Alagappa University',
      img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80&fit=crop&crop=center',
      imgPos: 'center 40%',
    },
    {
      code: 'CCFP',
      tamil: '',
      english: 'Craft Course in Food Production',
      duration: '1',
      eligibility: ['10th', '+2'],
      university: 'Alagappa University',
      img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80&fit=crop&crop=center',
      imgPos: 'center 35%',
    },
    {
      code: 'DFD',
      tamil: 'டிப்ளமோ இன் ஃபேஷன் டிசைனிங்',
      english: 'Diploma in Fashion Designing',
      duration: '2',
      eligibility: ['+2'],
      university: 'NCVRT',
      img: courseImg4,
      imgPos: 'center 30%',
    },
    {
      code: 'MTT',
      tamil: 'மாண்டிசோரி டீச்சர் டிரெயினிங்',
      english: 'Montessori Teacher Training',
      duration: '2',
      eligibility: ['+2'],
      university: 'NCVRT',
      img: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80&fit=crop&crop=center',
      imgPos: 'center 25%',
    },
    {
      code: 'DGDA',
      tamil: '',
      english: 'Diploma in General Duty Assistant (Nursing)',
      duration: '2',
      eligibility: ['+2'],
      university: 'NCVRT',
      img: courseImgDGDA,
      imgPos: 'center 15%',
    },
    {
      code: 'DMLT',
      tamil: '',
      english: 'Diploma in Medical Lab Technology',
      duration: '2',
      eligibility: ['+2'],
      university: 'NCVRT',
      img: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&q=80&fit=crop&crop=center',
      imgPos: 'center 30%',
    },
    {
      code: 'DMMV',
      tamil: '',
      english: 'Diploma in Mechanical Motor Vehicle',
      duration: '2',
      eligibility: ['+2'],
      university: 'NCVRT',
      img: 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=600&q=80&fit=crop&crop=center',
      imgPos: 'center 40%',
    },
    {
      code: 'DRAC',
      tamil: '',
      english: 'Diploma in Refrigeration and Air Conditioning',
      duration: '2',
      eligibility: ['+2'],
      university: 'NCVRT',
      img: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80&fit=crop&crop=center',
      imgPos: 'center 35%',
    },
    {
      code: 'DFS',
      tamil: '',
      english: 'Diploma in Fire Safety',
      duration: '2',
      eligibility: ['+2'],
      university: 'NCVRT',
      img: courseImgDFS,
      imgPos: 'center 40%',
    },
  ];

  return (
    <div className="ed-slider-area">

      {/* ══════════════════════════
          HERO SECTION
      ══════════════════════════ */}
      <div className="ed-slider-bg">

        {/* Background slides — only background image slides RTL */}
        {IMAGES.map((img, i) => (
          <div
            key={i}
            ref={(el) => (parallaxRefs.current[i] = el)}
            className={slideClass(i)}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        <div className="hero-overlay" />

        {/* Prev / Next arrows */}
        <button
          className="slide-arrow slide-arrow-left"
          onClick={handlePrev}
          aria-label="Previous slide"
        >
          &#8249;
        </button>
        <button
          className="slide-arrow slide-arrow-right"
          onClick={handleNext}
          aria-label="Next slide"
        >
          &#8250;
        </button>

        {/* Dot indicators */}
        <div className="slide-dots">
          {IMAGES.map((_, i) => (
            <button
              key={i}
              className={`slide-dot ${i === activeIndex ? 'active' : ''}`}
              onClick={() => handleDot(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Scroll hint */}
        <div className="scroll-hint">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
          Scroll
        </div>

        {/* Hero content — stays fixed, only BG slides */}
        <div className="hero-content-wrap">
          <div className="container">
            <div className="hero-layout">

              {/* Left: Glass stats card */}
              <div className="hero-image-col">
                <div className="hero-glass-card">
                  <p className="glass-title">At a Glance</p>
                  <div className="hero-stats-row">
                    <div className="hero-stat">
                      <div className="hero-stat-num">10+</div>
                      <div className="hero-stat-lbl">Courses</div>
                    </div>
                    <div className="hero-stat">
                      <div className="hero-stat-num">2</div>
                      <div className="hero-stat-lbl">Universities</div>
                    </div>
                    <div className="hero-stat">
                      <div className="hero-stat-num">100%</div>
                      <div className="hero-stat-lbl">Placement</div>
                    </div>
                  </div>
                  <p className="hero-affiliation">
                    Affiliated to{' '}
                    <strong style={{ color: '#17b8a6' }}>Alagappa University</strong>{' '}
                    &amp; <strong style={{ color: '#17b8a6' }}>NCVRT</strong><br />
                    Virudhunagar, Tamil Nadu
                  </p>
                </div>
              </div>

              {/* Right: Text content */}
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
                    UG &amp; Diploma programmes in Hotel Administration, Catering
                    Science, and Food Production, affiliated to Alagappa University.
                  </p>
                  <Link to="/courses" className="ed-btn-dark">
                    Explore Courses <i className="fas fa-arrow-right" aria-hidden="true"></i>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════
          COURSES SECTION
      ══════════════════════════ */}
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
              View All Courses <i className="fas fa-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HeroBanner;