import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './AboutPage.css';

// ── Staff Photos Import ──────────────────────────────────────────────────────
import photoRamesh       from '../assets/Mr.Ramesh.jpeg';
import photoRanjith      from '../assets/Mr.Ranjith.jpeg';
import photoRamalakshmi  from '../assets/Ms.ramalakshmi.jpeg';
import photoSupriya      from '../assets/Ms.supriya.jpeg';
import photoGnana        from '../assets/Mr.gnana thulasi muthu.jpeg';
import photoKokila       from '../assets/Ms .kokila.jpeg';
import photoKowsalya     from '../assets/Ms.kowsalya.jpeg';
import photoDanielRavi   from '../assets/Mr.daniel ravi.jpeg';
import photoBalakumar    from '../assets/Mr.bala kumar.jpeg';
import photoSivashankar  from '../assets/Mr Sivashankar.jpeg';
import photoGurulakshmi  from '../assets/Ms GuruLakshmi.jpeg';
import photoJeyalakshmi  from '../assets/JeyaLakshmi.jpeg';
import photoJayanthi     from '../assets/Ms jeyanthi.jpeg';
import photoFounder      from '../assets/Mr.M.Diccot Jackson.jpeg';
import photoKadhar       from '../assets/M.Kadhar.jpeg';

// ── DATA ────────────────────────────────────────────────────────────────────

const staffDepartments = [
  {
    dept: 'Hotel Administration',
    color: '#17b8a6',
    icon: 'fas fa-concierge-bell',
    members: [
      { name: 'Mr. M. Kadhar Ali',    qual: 'M.Sc (HMCS), MBA (HR)', photo: photoKadhar },
      { name: 'Mr. V. Ramesh',        qual: 'B.Sc (C&HM)',           photo: photoRamesh },
      { name: 'Mr. K. Ranjith Kumar', qual: 'B.Sc (HMCS)',            photo: photoRanjith },
    ],
  },
  {
    dept: 'DNA / DMLT (NCVRT)',
    color: '#3a86ff',
    icon: 'fas fa-heartbeat',
    members: [
      { name: 'Ms. P. Ramalakshmi', qual: 'B.Sc (Nursing)',        photo: photoRamalakshmi },
      { name: 'Ms. S. Supriya',     qual: 'B.Sc (Bio Technology)',  photo: photoSupriya },
    ],
  },
  {
    dept: 'Language Teachers',
    color: '#8338ec',
    icon: 'fas fa-language',
    members: [
      { name: 'Mr. P. Gnana Thulasi Mothu', qual: 'M.A, B.Ed (English)', photo: photoGnana },
      { name: 'Ms. T. Jeyalakshmi',          qual: 'M.A (Tamil)',         photo: photoJeyalakshmi },
      { name: 'Ms. S. Kokila',               qual: 'M.A (English)',       photo: photoKokila },
    ],
  },
  {
    dept: 'Admin Department',
    color: '#fb5607',
    icon: 'fas fa-users-cog',
    members: [
      { name: 'Ms. M. Kowsalya', qual: 'B.A (English)', photo: photoKowsalya },
    ],
  },
  {
    dept: 'ITI',
    color: '#e63946',
    icon: 'fas fa-tools',
    members: [
      { name: 'Mr. S. Daniel Ravi',  qual: 'ME ECE',                 photo: photoDanielRavi },
      { name: 'Mr. P. Bala Kumar',   qual: 'MCA',                    photo: photoBalakumar },
      { name: 'Mr. J. Siva Shankar', qual: 'M.Sc, M.Phil (Physics)', photo: photoSivashankar },
    ],
  },
  {
    dept: 'Fashion Designing',
    color: '#ff006e',
    icon: 'fas fa-tshirt',
    members: [
      { name: 'Ms. A. Jayanthi', qual: 'DGT', photo: photoJayanthi },
    ],
  },
  {
    dept: 'Montessori Teacher',
    color: '#f7a800',
    icon: 'fas fa-child',
    members: [
      { name: 'Ms. S. Gurulakshmi', qual: 'D.Ted', photo: photoGurulakshmi },
    ],
  },
];

const achievements = [
  {
    icon: 'fas fa-graduation-cap',
    title: 'Academic Excellence',
    desc: 'Consistent academic performance with a strong focus on practical, industry-oriented learning across Hotel Management, Healthcare, ITI, Montessori, and Fashion Designing.',
    color: '#17b8a6',
  },
  {
    icon: 'fas fa-briefcase',
    title: 'Placement Success',
    desc: 'Comprehensive placement support with opportunities in reputed organizations such as Marriott International, IHG Hotels & Resorts, ITC Hotels, and Taj Hotels, along with careers in healthcare, technical, education, and fashion sectors.',
    color: '#3a86ff',
  },
  {
    icon: 'fas fa-building',
    title: 'Modern Infrastructure',
    desc: 'Well-equipped labs and advanced facilities ensure hands-on training and real-world exposure.',
    color: '#8338ec',
  },
  {
    icon: 'fas fa-chalkboard-teacher',
    title: 'Expert Guidance',
    desc: 'Experienced faculty provide continuous mentoring, focusing on skill development and career readiness.',
    color: '#fb5607',
  },
];

const activities = [
  {
    icon: 'fas fa-paint-brush',
    title: 'Skill-Based Competitions',
    desc: 'Participation in culinary, technical, design, and teaching activities to enhance practical skills.',
    color: '#17b8a6',
  },
  {
    icon: 'fas fa-theater-masks',
    title: 'Cultural & Creative Events',
    desc: 'Regular cultural programs, fashion shows, and talent activities to build confidence and creativity.',
    color: '#ff006e',
  },
  {
    icon: 'fas fa-microphone-alt',
    title: 'Workshops & Seminars',
    desc: 'Industry-oriented sessions, guest lectures, and training programs to stay updated with trends.',
    color: '#3a86ff',
  },
  {
    icon: 'fas fa-hands-helping',
    title: 'Personality & Leadership Development',
    desc: 'Grooming, communication training, and teamwork activities to develop professionalism and leadership qualities.',
    color: '#8338ec',
  },
];

// ── COMPONENT ───────────────────────────────────────────────────────────────

const AboutPage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <div className="about-page">

      {/* ── 1. Hero Banner ── */}
      <div className="page-banner">
        <div className="page-banner-overlay" />
        <div className="container">
          <div className="page-banner-content">
            <h1>About Us</h1>
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span><i className="fas fa-chevron-right" /></span>
              <span>About Us</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. Founder Strip ── */}
      <section className="ap-founder-strip">
        <div className="ap-container">
          <div className="ap-founder-inner">
            <img
              className="ap-founder-photo"
              src={photoFounder}
              alt="Mr. M. Diccott Jackson"
            />
            <div className="ap-founder-text">
              <span className="ap-founder-label">Founded by</span>
              <span className="ap-founder-name">Mr. M. Diccott Jackson</span>
            </div>
            <div className="ap-founder-tag">
              <i className="fas fa-award" /> Founder &amp; Director
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. History ── */}
      <section className="ap-section ap-history" id="our-story">
        <div className="ap-container">
          <div className="ap-section-header">
            <span className="ap-badge">Our Legacy</span>
            <h2 className="ap-section-title">Our Story</h2>
            <div className="ap-divider" />
          </div>
          <div className="ap-history-grid">
            <div className="ap-history-timeline">
              <div className="ap-timeline-dot"><i className="fas fa-flag" /></div>
              <div className="ap-timeline-line" />
              <div className="ap-timeline-dot ap-dot-mid"><i className="fas fa-seedling" /></div>
              <div className="ap-timeline-line" />
              <div className="ap-timeline-dot ap-dot-end"><i className="fas fa-star" /></div>
            </div>
            <div className="ap-history-content">
              <div className="ap-history-card ap-card-start">
                <span className="ap-year-badge">2010 — The Beginning</span>
                <p>
                  Arasu Institute was established in 2010 by <strong>Mr. M. Diccott Jackson</strong> with a
                  strong commitment to making quality education accessible and affordable. From its inception,
                  the institute has focused on delivering high-standard academic programs at low fees, ensuring
                  that students from all backgrounds have the opportunity to pursue professional education.
                </p>
              </div>
              <div className="ap-history-card ap-card-growth">
                <span className="ap-year-badge ap-year-mid">Growing Strong</span>
                <p>
                  Over the years, Arasu Institute has grown into a trusted name in Virudhunagar, successfully
                  shaping careers in the hospitality and healthcare industries. The campus offers a peaceful,
                  nature-friendly environment that enhances learning, along with a safe and secure atmosphere
                  for students.
                </p>
              </div>
              <div className="ap-history-card ap-card-now">
                <span className="ap-year-badge ap-year-now">2025–26 — 20th Year ✨</span>
                <p>
                  Equipped with advanced laboratories and modern infrastructure, the institute emphasizes
                  practical learning, industry exposure, and skill development, preparing students to meet
                  global standards. Today, Arasu Institute continues to expand its vision by creating global
                  opportunities and empowering students to excel in their chosen careers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Vision & Mission ── */}
      <section className="ap-section ap-vm-section" id="vision-mission">
        <div className="ap-container">
          <div className="ap-section-header">
            <span className="ap-badge">Our Purpose</span>
            <h2 className="ap-section-title">Vision &amp; Mission</h2>
            <div className="ap-divider" />
          </div>
          <div className="ap-vm-grid">
            <div className="ap-vm-card ap-vision-card">
              <div className="ap-vm-icon"><i className="fas fa-eye" /></div>
              <h3>Our Vision</h3>
              <p>
                To be a leading institution that provides affordable, high-quality education, nurturing skilled
                professionals with global competence, strong values, and a commitment to excellence in the
                hospitality and healthcare sectors.
              </p>
            </div>
            <div className="ap-vm-card ap-mission-card">
              <div className="ap-vm-icon"><i className="fas fa-bullseye" /></div>
              <h3>Our Mission</h3>
              <p>
                At Arasu Institute, our mission is to provide quality education at an affordable cost, ensuring
                that every student has access to meaningful learning opportunities. We are committed to
                delivering industry-oriented training through advanced laboratories and practical exposure,
                particularly in the hospitality and healthcare sectors. The institute strives to maintain a
                safe, secure, and nature-friendly campus environment that supports both academic excellence and
                personal growth. We focus on developing professional skills, leadership qualities, and strong
                ethical values, while also creating pathways for global career opportunities.
              </p>
            </div>
            <div className="ap-vm-card ap-values-card">
              <div className="ap-vm-icon"><i className="fas fa-heart" /></div>
              <h3>Our Values</h3>
              <p>
                Excellence, integrity, discipline, and compassion form the foundation of everything we do at
                Arasu Institute. We care deeply about every student's success and well-being, fostering a
                culture of respect, teamwork, and continuous growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Our Team ── */}
      <section className="ap-section ap-team-section" id="our-team">
        <div className="ap-container">
          <div className="ap-section-header">
            <span className="ap-badge">Our Faculty</span>
            <h2 className="ap-section-title">Meet Our Expert Team</h2>
            <div className="ap-divider" />
            <p className="ap-section-desc">
              Our experienced and dedicated faculty bring industry expertise and academic excellence to every classroom.
            </p>
          </div>
          <div className="ap-faculty-grid">
            {staffDepartments.flatMap((dept) =>
              dept.members
                .filter((m) => m.photo)
                .map((m, mi) => (
                  <div className="ap-faculty-card" key={`${dept.dept}-${mi}`}>
                    <div className="ap-faculty-photo">
                      <img src={m.photo} alt={m.name} />
                    </div>
                    <div className="ap-faculty-info">
                      <h4 className="ap-faculty-name">{m.name}</h4>
                      <span className="ap-faculty-qual">{m.qual}</span>
                    </div>
                  </div>
                ))
            )}
          </div>
        </div>
      </section>

      {/* ── 7. Achievements ── */}
      <section className="ap-section ap-achieve-section" id="achievements">
        <div className="ap-container">
          <div className="ap-section-header">
            <span className="ap-badge">Our Pride</span>
            <h2 className="ap-section-title">Achievements 🏆</h2>
            <div className="ap-divider" />
          </div>
          <div className="ap-cards-grid">
            {achievements.map((a, i) => (
              <div className="ap-achieve-card" key={i} style={{ '--card-color': a.color }}>
                <div className="ap-achieve-icon"><i className={a.icon} /></div>
                <h4>{a.title}</h4>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Extracurricular ── */}
      <section className="ap-section ap-extra-section" id="extracurricular">
        <div className="ap-container">
          <div className="ap-section-header">
            <span className="ap-badge">Beyond Academics</span>
            <h2 className="ap-section-title">Extracurricular Activities 🎭</h2>
            <div className="ap-divider" />
          </div>
          <div className="ap-cards-grid">
            {activities.map((a, i) => (
              <div className="ap-extra-card" key={i} style={{ '--card-color': a.color }}>
                <div className="ap-extra-icon"><i className={a.icon} /></div>
                <h4>{a.title}</h4>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;