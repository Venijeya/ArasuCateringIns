import React from 'react';
import './WhyChooseUs.css';
import chooseImg from '../assets/2.jpeg';

const features = [
  {
    title: "Industry-Recognized Courses",
    desc: "We offer UGC & NCVRT approved programs affiliated with Alagappa University, ensuring your degree is valued nationwide.",
  },
  {
    title: "Hands-On Training",
    desc: "Practical kitchen training, food production labs, and hospitality management sessions prepare students for real-world careers.",
  },
  {
    title: "Trusted For 16+ Years",
    // desc: "Over 1000+ students trained with a proven track record of placements in top hotels and catering companies across Tamil Nadu.",
    desc: "A proven track record of placements in top hotels and catering companies across Tamil Nadu.",
  },
];

const WhyChooseUs = () => (
  <div className="choose-area">
    <div className="container">
      <div className="choose-grid">
        <div className="choose-left">
          <span className="ed-section-subtitle">WHY CHOOSE US</span>
          <h4 className="ed-section-title">
            Building Careers In Hospitality & <span className="title-hl">Excellence.</span>
          </h4>
          <p>
            Arasan Institute of Hotel Management has been shaping skilled hospitality professionals for over 16+ years.
            We believe every student deserves quality education — and every graduate can lead the industry with confidence.
          </p>
          <div className="choose-features">
            {features.map((f, i) => (
              <div key={i} className="choose-feature-item">
                <span className="check-icon"><i className="fas fa-circle-check"></i></span>
                <div>
                  <h5>{f.title}</h5>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="choose-right">
          <div className="choose-img-wrap">
            <img src={chooseImg} alt="Arasan Institute" />
            <div className="choose-badge">
              <i className="fas fa-award"></i>
              <div>
                <strong>16+ Years</strong>
                <span>Trusted & Serving</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default WhyChooseUs;