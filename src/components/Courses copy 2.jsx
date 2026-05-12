import React from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';

import bscImg from '../assets/1.jpeg';
import dipImg from '../assets/12.jpeg';
import ccfpImg from '../assets/5.jpeg';
import dfdImg from '../assets/22.JPG';
import mttImg from '../assets/21.JPG';

const coursesData = [
  {
    id: 1,
    title: 'Bachelor of Catering Science & Hotel Administration',
    category: 'B.Sc., C & HA',
    categoryPath: '/courses/bsc-cha',
    image: bscImg,
    duration: '3 Years',
    eligibility: '+2',
    university: 'Alagappa University',
    color: '#1a3a8f',
    path: '/courses/bsc-cha',
  },
  {
    id: 2,
    title: 'Diploma in Catering & Hotel Administration',
    category: 'Dip in C & HA',
    categoryPath: '/courses/dip-cha',
    image: dipImg,
    duration: '3 Years',
    eligibility: '10th / +2',
    university: 'Alagappa University',
    color: '#17b8a6',
    path: '/courses/dip-cha',
  },
  {
    id: 3,
    title: 'Craft Course in Food Production',
    category: 'CCFP',
    categoryPath: '/courses/ccfp',
    image: ccfpImg,
    duration: '1 Year',
    eligibility: '10th / +2',
    university: 'Alagappa University',
    color: '#e67e22',
    path: '/courses/ccfp',
  },
  {
    id: 4,
    title: 'Diploma in Fashion Designing',
    category: 'DFD',
    categoryPath: '/courses/dfd',
    image: dfdImg,
    duration: '2 Years',
    eligibility: '+2',
    university: 'NCVRT',
    color: '#8e44ad',
    path: '/courses/dfd',
  },
  {
    id: 5,
    title: 'Montessori Teacher Training',
    category: 'MTT',
    categoryPath: '/courses/mtt',
    image: mttImg,
    duration: '2 Years',
    eligibility: '+2',
    university: 'NCVRT',
    color: '#c0392b',
    path: '/courses/mtt',
  },
];

const CourseCard = ({ course }) => (
  <div className="course-card" style={{ '--course-color': course.color }}>
    {/* Thumbnail */}
    <div className="course-thumb">
      <Link to={course.path}>
        <img src={course.image} alt={course.title} />
      </Link>
      <Link to={course.categoryPath} className="course-badge">
        {course.category}
      </Link>
    </div>

    {/* Content */}
    <div className="course-content">
      <p className="course-uni">Approved by {course.university}</p>
      <h4 className="course-title">
        <Link to={course.path}>{course.title}</Link>
      </h4>
      <div className="course-meta">
        <span><i className="fas fa-clock"></i> {course.duration}</span>
        <span><i className="fas fa-graduation-cap"></i> {course.eligibility}</span>
      </div>
    </div>
  </div>
);

const Courses = () => (
  <div className="course-section">
    <div className="container">
      <div className="course-header">
        <span className="ed-section-subtitle">OUR PROGRAMMES</span>
        <h4 className="ed-section-title">Courses We Offer</h4>
        <p className="tamil-approval-text">
          அழகப்பா பல்கலைக்கழகம் அங்கீகாரம் பெற்றது | Approved by Alagappa University
        </p>
      </div>

      <div className="courses-grid">
        {coursesData.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      <div className="courses-view-all">
        <Link to="/courses" className="btn-view-all">
          View All Courses →
        </Link>
      </div>
    </div>
  </div>
);

export default Courses;