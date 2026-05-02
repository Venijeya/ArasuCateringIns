import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

const categories = [
  {
    name: 'B.Sc., Catering Science & Hotel Administration',
    icon: '🍽️',
    color: '#1a3a8f',
    bgColor: '#eef1fb',
    path: '/courses/bsc-cha',
    duration: '3 Years',
    eligibility: '+2',
    university: 'Alagappa University',
    isContact: false,
  },
  {
    name: 'Diploma in Catering & Hotel Administration',
    icon: '🏨',
    color: '#17b8a6',
    bgColor: '#e6f8f6',
    path: '/courses/dip-cha',
    duration: '3 Years',
    eligibility: '10th / +2',
    university: 'Alagappa University',
    isContact: false,
  },
  {
    name: 'Craft Course in Food Production',
    icon: '👨‍🍳',
    color: '#e67e22',
    bgColor: '#fdf3e7',
    path: '/courses/ccfp',
    duration: '1 Year',
    eligibility: '10th / +2',
    university: 'Alagappa University',
    isContact: false,
  },
  {
    name: 'Diploma in Fashion Designing',
    icon: '👗',
    color: '#8e44ad',
    bgColor: '#f5eefa',
    path: '/courses/dfd',
    duration: '2 Years',
    eligibility: '+2',
    university: 'NCVRT',
    isContact: false,
  },
  {
    name: 'Montessori Teacher Training',
    icon: '📚',
    color: '#c0392b',
    bgColor: '#fdecea',
    path: '/courses/mtt',
    duration: '2 Years',
    eligibility: '+2',
    university: 'NCVRT',
    isContact: false,
  },
  {
    name: 'Get In Touch With Us',
    icon: '📞',
    color: '#0d2247',
    bgColor: '#e8edf5',
    path: '/contact',
    duration: '80721 07164',
    eligibility: '90874 98181',
    university: 'arasucollegevnr@gmail.com',
    isContact: true,
  },
];

const Categories = () => {
  return (
    <div className="ed-category-area">
      <div className="container">
        <div className="category-title-box">
          <span className="ed-section-subtitle">OUR CATEGORIES</span>
          <h4 className="ed-section-title">Browse Our <span style={{ color: '#17b8a6' }}>Categories</span></h4>
          <p style={{ color: '#777', fontSize: 14, marginTop: 6 }}>
            {/* அழகப்பா பல்கலைக்கழகம் அங்கீகாரம் பெற்றது &nbsp;|&nbsp; AU / DCP / 843 / 18 */}
          </p>
        </div>
        <div className="category-grid">
          {categories.map((cat, i) => (
            <Link
              key={i}
              to={cat.path}
              className="ed-category-item"
              style={{ '--cat-color': cat.color, '--cat-bg': cat.bgColor }}
            >
              <div className="cat-icon">
                <span>{cat.icon}</span>
              </div>
              <div className="cat-info">
                <h4 className="cat-name">{cat.name}</h4>
              </div>
              <span className="cat-arrow"><i className="fas fa-arrow-right"></i></span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;