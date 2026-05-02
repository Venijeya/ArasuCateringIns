import React from 'react';
import { Link } from 'react-router-dom';
import './PageCommon.css';
import '../components/Courses.css';

import img1 from '../assets/1.jpeg';
import img2 from '../assets/12.jpeg';
import img3 from '../assets/8.jpeg';
import img4 from '../assets/22.JPG';
import img5 from '../assets/21.JPG';

const allCourses = [
  {
    id: 1,
    title: 'B.Sc., Catering Science & Hotel Administration',
    image: img1,
    duration: '3 Years',
    eligibility: '+2 Pass',
    affiliation: 'Alagappa University',
    path: '/courses/bsc-cha',
  },
  {
    id: 2,
    title: 'Diploma in Catering & Hotel Administration',
    image: img2,
    duration: '3 Years',
    eligibility: '10th / +2 Pass',
    affiliation: 'Alagappa University',
    path: '/courses/dip-cha',
  },
  {
    id: 3,
    title: 'Craft Course in Food Production (CCFP)',
    image: img3,
    duration: '1 Year',
    eligibility: '10th / +2 Pass',
    affiliation: 'Alagappa University',
    path: '/courses/ccfp',
  },
  {
    id: 4,
    title: 'Diploma in Fashion Designing (DFD)',
    image: img4,
    duration: '2 Years',
    eligibility: '+2 Pass',
    affiliation: 'NCVRT – National Council of Vocational Research Training',
    path: '/courses/dfd',
  },
  {
    id: 5,
    title: 'Montessori Teacher Training (MTT)',
    image: img5,
    duration: '2 Years',
    eligibility: '+2 Pass',
    affiliation: 'NCVRT – National Council of Vocational Research Training',
    path: '/courses/mtt',
  },
];

const CoursesPage = () => {
  return (
    <>
      {/* Page Banner */}
      <div className="page-banner">
        <div className="page-banner-overlay"></div>
        <div className="container">
          <div className="page-banner-content">
            <h1>Our Courses</h1>
            <nav className="breadcrumb">
              <Link to="/">Home</Link>
              <span><i className="fas fa-chevron-right"></i></span>
              <span>Courses</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="courses-page-area">
        <div className="container">
          <div className="cp-grid">
            {allCourses.map(course => (
              <div key={course.id} className="cp-card">

                {/* Thumbnail */}
                <div className="cp-thumb">
                  <Link to={course.path}>
                    <img src={course.image} alt={course.title} />
                  </Link>
                </div>

                {/* Content */}
                <div className="cp-content">
                  <h4 className="cp-title">
                    <Link to={course.path}>{course.title}</Link>
                  </h4>

                  <div className="cp-info">
                    <span><i className="fas fa-clock"></i> {course.duration}</span>
                    <span><i className="fas fa-graduation-cap"></i> {course.eligibility}</span>
                  </div>

                  <p className="cp-affiliation">
                    <i className="fas fa-university"></i>
                    {course.affiliation}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesPage;