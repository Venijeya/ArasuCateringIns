import React from 'react';
import { Link } from 'react-router-dom';
import './Team.css';

import img1 from '../assets/1.jpeg';
import img2 from '../assets/2.jpeg';
import img3 from '../assets/17.JPG';
import img4 from '../assets/19.JPG';

const instructors = [
  { img: img1 },
  { img: img2 },
  { img: img3 },
  { img: img4 },
];

const Team = () => {
  return (
    <div className="team-area">
      <div className="container">
        <div className="team-grid">

          {/* Left Content */}
          <div className="team-left">
            <span className="ed-section-subtitle">OUR FACULTY</span>
            <h4 className="ed-section-title">Meet Our Expert <br /> Faculty Members</h4>
            <p>
              Our experienced faculty at Arasu Institute of Hotel Management bring
              industry expertise in Catering Science, Food Production, and Hotel
              Administration — guiding students toward successful hospitality careers.
            </p>
            <div className="team-btns">
              <Link to="/contact" className="ed-btn-theme">Contact Us <i className="fas fa-arrow-right"></i></Link>
              <Link to="/about#our-story" className="ed-btn-dark">Learn More <i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>

          {/* Right Instructors Grid */}
          <div className="team-right">
            <div className="instructors-grid">
              {instructors.map((inst, i) => (
                <div key={i} className="instructor-card">
                  <div className="instructor-thumb">
                    <img src={inst.img} alt={`Faculty ${i + 1}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Team;