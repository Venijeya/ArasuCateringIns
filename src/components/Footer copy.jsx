import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

// Local gallery images from assets
import img1 from '../assets/1.jpeg';
import img2 from '../assets/2.jpeg';
import img3 from '../assets/23.JPG';
import img4 from '../assets/24.JPG';
import img5 from '../assets/8.jpeg';
import img6 from '../assets/13.jpeg';

const galleryImgs = [img1, img2, img3, img4, img5, img6];

const socialLinks = [
  { href: 'https://www.facebook.com/profile.php?id=61573265734167', icon: 'fa-brands fa-facebook-f', label: 'Facebook' },
  { href: 'https://www.instagram.com/arasuhotelmanagementvnr/?hl=en', icon: 'fa-brands fa-instagram', label: 'Instagram' },
  { href: 'https://youtube.com/@tamilnaduelectrohomeopathyapk?si=xuf4wAFkVbeIKY9c', icon: 'fa-brands fa-youtube', label: 'YouTube' },
];

const Footer = () => {
  const courses = [
    'B.Sc., C & HA – Alagappa University',
    'Dip in C & HA – Alagappa University',
    'CCFP – Craft Course in Food Production',
    'DFD – Diploma in Fashion Designing',
    'MTT – Montessori Teacher Training',
  ];

  const quickLinks = [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Courses', to: '/courses' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contact Us', to: '/contact' },
  ];

  return (
    <footer>
      <div className="footer-area black-bg">
        <div className="container">
          <div className="footer-grid">

            {/* Col 1 - Brand */}
            <div className="footer-col">
              <div className="footer-logo">
                <Link to="/">
                  <span className="logo-text" style={{ whiteSpace: 'nowrap' }}>
                    Arasu <span className="logo-accent">Institute</span>
                  </span>
                </Link>
              </div>
              <p className="footer-text">
                Arasu Institute of Hotel Management, Virudhunagar — offering Alagappa University
                & NCVRT approved courses in catering, hospitality, fashion designing, and teacher training.
              </p>
              <p className="footer-text" style={{ marginTop: '8px' }}>
                📞 <a href="tel:+918072107164" style={{ color: '#aaa' }}>80721 07164</a> &nbsp;|&nbsp;
                <a href="tel:+919087498181" style={{ color: '#aaa' }}>90874 98181</a>
              </p>
              <p className="footer-text">
                ✉️ <a href="mailto:arasucollegevnr@gmail.com" style={{ color: '#aaa' }}>arasucollegevnr@gmail.com</a>
              </p>

              {/* Social Links — Facebook, Instagram, YouTube only */}
              <div className="footer-social">
                {socialLinks.map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                    <i className={s.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2 - Courses */}
            <div className="footer-col">
              <h4 className="footer-title">Our Courses:</h4>
              <ul className="footer-links">
                {courses.map((s, i) => (
                  <li key={i}>
                    <Link to="/courses"><i className="fas fa-angle-right"></i> {s}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 - Quick Links */}
            <div className="footer-col">
              <h4 className="footer-title">Quick Links:</h4>
              <ul className="footer-links">
                {quickLinks.map((l, i) => (
                  <li key={i}>
                    <Link to={l.to}><i className="fas fa-angle-right"></i> {l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 - Gallery */}
            <div className="footer-col">
              <h4 className="footer-title">Gallery</h4>
              <div className="footer-gallery">
                {galleryImgs.map((img, n) => (
                  <a key={n} href="#" className="gallery-item">
                    <img src={img} alt={`Gallery ${n + 1}`} />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright-area">
        <div className="container">
          <p>
            Copyright &copy; {new Date().getFullYear()}{' '}
            <Link to="/">Arasu Institute of Hotel Management</Link>. All Rights Reserved.
            Virudhunagar, Tamil Nadu. | Reg No: AU / DCP / 843 / 18
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;