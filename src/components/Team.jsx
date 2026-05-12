import React from 'react';
import { Link } from 'react-router-dom';
import './Team.css';

import img1 from '../assets/M.Kadhar.jpeg';
import img2 from '../assets/Mr Sivashankar.jpeg';
import img3 from '../assets/Mr.gnana thulasi muthu.jpeg';
import img4 from '../assets/Mr.Ramesh.jpeg';

const instructors = [
  { img: img1, name: 'Ithula M. Kadhar'       },
  { img: img2, name: 'Mr. Sivashankar'         },
  { img: img3, name: 'Mr. Gnana Thulasi Muthu' },
  { img: img4, name: 'Mr. Ramesh'              },
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
              <Link to="/contact" className="ed-btn-theme">
                Contact Us <i className="fas fa-arrow-right"></i>
              </Link>
              <Link to="/about#our-story" className="ed-btn-dark">
                Learn More <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>

          {/* Right Instructors Grid */}
          <div className="team-right">
            <div className="instructors-grid">
              {instructors.map((inst, i) => (
                <div key={i} className="instructor-card">
                  <div className="instructor-thumb">
                    <img src={inst.img} alt={inst.name} />
                  </div>
                  <div className="instructor-info">
                    <div className="instructor-name-box">
                      <h5>{inst.name}</h5>
                    </div>
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