import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

import img1 from '../assets/1.jpeg';
import img2 from '../assets/2.jpeg';
import img3 from '../assets/23.JPG';
import img4 from '../assets/24.JPG';
import img5 from '../assets/8.jpeg';
import img6 from '../assets/13.jpeg';
import img7 from '../assets/25.jpeg';
import img8 from '../assets/26.jpeg';
import img9 from '../assets/27.jpeg';
import img10 from '../assets/28.jpeg';
import img11 from '../assets/29.jpeg';
import img12 from '../assets/9.jpeg';

const fallbackImgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

const CLOUD_NAME = 'dpooirudc';
const UPLOAD_PRESET = 'arasu-gallery';

const socialLinks = [
  { href: 'https://wa.me/918072107164', icon: 'fab fa-whatsapp', label: 'WhatsApp' },
  { href: 'https://www.facebook.com/profile.php?id=61573265734167', icon: 'fab fa-facebook-f', label: 'Facebook' },
  { href: 'https://www.instagram.com/arasuhotelmanagementvnr/?hl=en', icon: 'fab fa-instagram', label: 'Instagram' },
  { href: 'https://youtube.com/@tamilnaduelectrohomeopathyapk?si=xuf4wAFkVbeIKY9c', icon: 'fab fa-youtube', label: 'YouTube' },
];

const Footer = () => {
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });
  const [galleryImgs, setGalleryImgs] = useState([]);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await fetch(
          `https://res.cloudinary.com/${CLOUD_NAME}/image/list/${UPLOAD_PRESET}.json`
        );
        if (res.ok) {
          const data = await res.json();
          if (data.resources && data.resources.length > 0) {
            const imgs = data.resources.map((r) =>
              `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_400,h_400,c_fill/${r.public_id}.jpg`
            );
            setGalleryImgs(imgs);
            return;
          }
        }
        setGalleryImgs(fallbackImgs);
      } catch {
        setGalleryImgs(fallbackImgs);
      }
    };

    fetchGallery();
  }, []);

  const openLightbox = (index, e) => {
    e.preventDefault();
    setLightbox({ open: true, index });
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightbox({ open: false, index: 0 });
    document.body.style.overflow = '';
  };

  const prevImg = (e) => {
    e.stopPropagation();
    setLightbox(lb => ({
      ...lb,
      index: (lb.index - 1 + galleryImgs.length) % galleryImgs.length,
    }));
  };

  const nextImg = (e) => {
    e.stopPropagation();
    setLightbox(lb => ({
      ...lb,
      index: (lb.index + 1) % galleryImgs.length,
    }));
  };

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
    { label: 'Contact Us', to: '/contact' },
  ];

  return (
    <>
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
                  <a
                    href="https://wa.me/918072107164"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#aaa', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  >
                    <i className="fab fa-whatsapp" style={{ color: '#25d366', fontSize: '16px' }}></i>
                    80721 07164
                  </a>
                  &nbsp;|&nbsp;
                  <a href="tel:+919087498181" style={{ color: '#aaa' }}>90874 98181</a>
                </p>
                <p className="footer-text">
                  ✉️ <a href="mailto:arasucollegevnr@gmail.com" style={{ color: '#aaa' }}>arasucollegevnr@gmail.com</a>
                </p>
                <div className="footer-social">
                  {socialLinks.map((s, i) => (
                    <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                      className={s.label === 'WhatsApp' ? 'footer-social-whatsapp' : ''}>
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
                    <a key={n} href="#" className="gallery-item" onClick={(e) => openLightbox(n, e)}>
                      <img src={img} alt={`Gallery ${n + 1}`} />
                      <div className="gallery-overlay">
                        <i className="fas fa-expand"></i>
                      </div>
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

      {/* Lightbox */}
      {lightbox.open && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <i className="fas fa-times"></i>
          </button>
          <button className="lightbox-nav lightbox-prev" onClick={prevImg}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={galleryImgs[lightbox.index]} alt={`Gallery ${lightbox.index + 1}`} />
            <p className="lightbox-counter">{lightbox.index + 1} / {galleryImgs.length}</p>
          </div>
          <button className="lightbox-nav lightbox-next" onClick={nextImg}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      )}
    </>
  );
};

export default Footer;