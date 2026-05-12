import React from 'react';
import { Link } from 'react-router-dom';
import './PageCommon.css';
import '../components/Courses.css';

import img1 from '../assets/30.jpeg';
import img2 from '../assets/31.jpeg';
import img3 from '../assets/34.jpeg';
import img4 from '../assets/32.jpeg';
import img5 from '../assets/37.jpeg';
import img6 from '../assets/35.jpeg';
import img7 from '../assets/38.jpeg';
import img8 from '../assets/36.jpeg';
import img9 from '../assets/39.jpeg';
import img10 from '../assets/33.jpeg';

const allCourses = [
  {
    id: 1,
    title: 'B.Sc., Catering Science & Hotel Administration',
    image: img1,
    duration: '3 Years',
    eligibility: '+2 Pass',
    affiliation: 'Alagappa University',
    portrait: false,
    description: 'This degree course provides complete knowledge about hotel management, food production, housekeeping, front office, and hospitality operations. Students gain both practical and theoretical training in hotel and catering industries.',
    careers: ['Hotel Manager', 'Chef', 'Restaurant Supervisor', 'Cruise Line Staff', 'Event Coordinator', 'Hospitality Executive'],
  },
  {
    id: 2,
    title: 'Diploma in Catering & Hotel Administration',
    image: img2,
    duration: '3 Years',
    eligibility: '10th / +2 Pass',
    affiliation: 'Alagappa University',
    portrait: false,
    description: 'This diploma course mainly focuses on practical hotel operations such as cooking, food service, bakery, housekeeping, and customer handling. It is suitable for students who want quick entry into the hospitality industry.',
    careers: ['Kitchen Staff', 'Hotel Supervisor', 'Catering Assistant', 'Bakery Staff', 'Restaurant Executive'],
  },
  {
    id: 3,
    title: 'Craft Course in Food Production (CCFP)',
    image: img3,
    duration: '1 Year',
    eligibility: '10th / +2 Pass',
    affiliation: 'Alagappa University',
    portrait: false,
    description: 'A short-term professional course focused on cooking techniques, food preparation, kitchen management, bakery, and continental dishes. It helps students build strong culinary skills.',
    careers: ['Commis Chef', 'Assistant Cook', 'Bakery Assistant', 'Catering Staff', 'Kitchen Helper'],
  },
  {
    id: 4,
    title: 'Diploma in Fashion Designing (DFD)',
    image: img4,
    duration: '2 Years',
    eligibility: '+2 Pass',
    affiliation: 'NCVRT – National Council of Vocational Research Training',
    portrait: false,
    description: 'This course teaches fashion illustration, garment making, textile knowledge, embroidery, and modern fashion trends. Students learn creative designing and stitching techniques.',
    careers: ['Fashion Designer', 'Boutique Owner', 'Tailor', 'Costume Designer', 'Fashion Stylist'],
  },
  {
    id: 5,
    title: 'Montessori Teacher Training (MTT)',
    image: img5,
    duration: '2 Years',
    eligibility: '+2 Pass',
    affiliation: 'NCVRT – National Council of Vocational Research Training',
    portrait: false,
    description: 'This course trains students to handle preschool and kindergarten children using Montessori teaching methods. It focuses on child psychology, communication, and activity-based learning.',
    careers: ['Montessori Teacher', 'Preschool Teacher', 'Kindergarten Trainer', 'Child Care Educator'],
  },
  {
    id: 6,
    title: 'Diploma in General Duty Assistant (Nursing)',
    image: img6,
    duration: '2 Years',
    eligibility: '+2 Pass',
    affiliation: 'NCVRT – National Council of Vocational Research Training',
    portrait: true,
    description: 'This healthcare course provides training in patient care, first aid, hygiene, and basic nursing assistance in hospitals and clinics.',
    careers: ['Nursing Assistant', 'Ward Assistant', 'Home Care Assistant', 'Hospital Support Staff'],
  },
  {
    id: 7,
    title: 'Diploma in Medical Lab Technology',
    image: img7,
    duration: '2 Years',
    eligibility: '+2 Pass',
    affiliation: 'NCVRT – National Council of Vocational Research Training',
    portrait: false,
    description: 'Students learn laboratory testing methods, blood analysis, specimen collection, and operation of lab equipment used in hospitals and diagnostic centers.',
    careers: ['Lab Technician', 'Pathology Lab Assistant', 'Diagnostic Center Staff', 'Medical Laboratory Executive'],
  },
  {
    id: 8,
    title: 'Diploma in Mechanical Motor Vehicle',
    image: img8,
    duration: '2 Years',
    eligibility: '+2 Pass',
    affiliation: 'NCVRT – National Council of Vocational Research Training',
    portrait: false,
    description: 'This technical course focuses on automobile mechanics, engine systems, vehicle maintenance, repair work, and servicing technologies.',
    careers: ['Automobile Technician', 'Vehicle Service Advisor', 'Workshop Mechanic', 'Garage Supervisor'],
  },
  {
    id: 9,
    title: 'Diploma in Refrigeration and Air Conditioning',
    image: img9,
    duration: '2 Years',
    eligibility: '+2 Pass',
    affiliation: 'NCVRT – National Council of Vocational Research Training',
    portrait: false,
    description: 'This course provides practical training in AC installation, refrigeration systems, cooling equipment servicing, and maintenance techniques.',
    careers: ['AC Technician', 'Refrigeration Mechanic', 'Cooling System Technician', 'Maintenance Engineer Assistant'],
  },
  {
    id: 10,
    title: 'Diploma in Fire Safety',
    image: img10,
    duration: '2 Years',
    eligibility: '+2 Pass',
    affiliation: 'NCVRT – National Council of Vocational Research Training',
    portrait: false,
    description: 'Students learn fire prevention methods, industrial safety practices, rescue operations, emergency handling, and fire equipment usage.',
    careers: ['Fire Safety Officer', 'Safety Supervisor', 'Industrial Safety Staff', 'Emergency Response Assistant'],
  },
];

const CourseCard = ({ course }) => (
  <div className="cp-card">

    {/* Overlay sits directly inside cp-card — covers full card on hover */}
    <div className="cp-hover-overlay">
      <div className="cp-hover-inner">
        <h4 className="cp-hover-title">
          {course.title} – {course.duration}
        </h4>
        <p className="cp-hover-desc">{course.description}</p>
        <div className="cp-hover-careers">
          <span className="cp-hover-careers-label">Career Opportunities</span>
          <div className="cp-hover-tags">
            {course.careers.map((c, i) => (
              <span key={i} className="cp-hover-tag">{c}</span>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="cp-thumb">
      <img
        src={course.image}
        alt={course.title}
        className={course.portrait ? 'portrait' : ''}
      />
    </div>

    <div className="cp-content">
      <h4 className="cp-title">{course.title}</h4>
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
);

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

      {/* Courses Grid — 2 columns */}
      <div className="courses-page-area">
        <div className="container">
          <div className="cp-grid">
            {allCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesPage;