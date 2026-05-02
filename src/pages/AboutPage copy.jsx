import React from 'react';
import { Link } from 'react-router-dom';
import './PageCommon.css';
import About from '../components/About';
import FunFacts from '../components/FunFacts';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';

const AboutPage = () => {
  return (
    <>
      {/* Page Banner */}
      <div className="page-banner" style={{ backgroundImage: 'url(https://ordainit.com/wp-theme/edunity/wp-content/themes/edunity/assets/img/slider/slider-bg.png)' }}>
        <div className="page-banner-overlay"></div>
        <div className="container">
          <div className="page-banner-content">
            <h1>About Us</h1>
            <nav className="breadcrumb">
              <Link to="/">Home</Link>
              <span><i className="fas fa-chevron-right"></i></span>
              <span>About Us</span>
            </nav>
          </div>
        </div>
      </div>

      <About />

      {/* Mission Section */}
      <div className="mission-area">
        <div className="container">
          <div className="mission-grid">
            {[
              {
                icon: 'fas fa-bullseye',
                title: 'Our Mission',
                desc: 'To provide a nurturing environment for the elderly while fostering educational opportunities that empower the next generations.',
              },
              {
                icon: 'fas fa-eye',
                title: 'Our Vision',
                desc: 'A society where every senior citizen lives with dignity and every individual has access to the resources needed for a bright academic and professional future.',
              },
              {
                icon: 'fas fa-heart',
                title: 'Our Values',
                desc: 'Excellence, integrity, discipline, and compassion form the foundation of everything we do at Arasan Institute. We care deeply about every student\'s success and well-being.',
              },
            ].map((item, i) => (
              <div key={i} className="mission-card">
                <div className="mission-icon"><i className={item.icon}></i></div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="funfact-wrapper"><FunFacts /></div>
      <Team />
      <Testimonials />
    </>
  );
};

export default AboutPage;