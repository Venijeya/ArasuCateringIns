import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const bebasLink = document.createElement('link');
bebasLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap';
bebasLink.rel = 'stylesheet';
document.head.appendChild(bebasLink);

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [mobileOpen]);

  const handleSubMenuToggle = (label) => {
    setOpenSubMenu(prev => (prev === label ? null : label));
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setOpenSubMenu(null);
  };

 const navItems = [
  { label: 'Home', path: '/' },
  {
    label: 'About Us',
    path: '/about',
    children: [
      { label: 'Our Story',        path: '/about#our-story' },
      { label: 'Vision & Mission', path: '/about#vision-mission' },
      { label: 'Our Team',         path: '/about#our-team' },
      { label: 'Achievements',     path: '/about#achievements' },
    ],
  },
  { label: 'Courses', path: '/courses' },
];
  const socialLinks = [
    {
      href: 'https://www.facebook.com/profile.php?id=61573265734167',
      icon: 'fab fa-facebook-f',
      label: 'Facebook',
    },
    {
      href: 'https://www.instagram.com/arasuhotelmanagementvnr/?hl=en',
      icon: 'fab fa-instagram',
      label: 'Instagram',
    },
    {
      href: 'https://youtube.com/@tamilnaduelectrohomeopathyapk?si=xuf4wAFkVbeIKY9c',
      icon: 'fab fa-youtube',
      label: 'YouTube',
    },
  ];

  return (
    <>
      {mobileOpen && <div className="body-overlay" onClick={closeMobile}></div>}

      {/* Offcanvas */}
      <div className={`itoffcanvas ${mobileOpen ? 'active' : ''}`}>
        <button className="close-btn" onClick={closeMobile}>
          <i className="fas fa-times"></i>
        </button>
        <div className="offcanvas-logo">
          <Link to="/" onClick={closeMobile}>
            <div className="logo-wrap">
              <img src={require('../assets/Arasu_logo.png')} alt="Arasu Logo" className="logo-img-sm" />
              <div className="logo-text-wrap">
                <span className="logo-name">ARASU</span>
                <span className="logo-sub">Institute of Hotel Management</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="offcanvas-text">
          <p>Excellence in Hospitality Education since inception.</p>
        </div>
        <nav className="mobile-nav">
          {navItems.map((item, i) => (
            <div key={i} className="mobile-nav-item">
              <div className="mobile-nav-link-row">
                <Link to={item.children ? '#' : item.path} onClick={() => { if (!item.children) closeMobile(); }}>
                  {item.label}
                </Link>
                {item.children && (
                  <button className="submenu-toggle" onClick={() => handleSubMenuToggle(item.label)}>
                    <span className={`toggle-arrow ${openSubMenu === item.label ? 'open' : ''}`}>▼</span>
                  </button>
                )}
              </div>
              {item.children && (
                <ul className={`mobile-submenu ${openSubMenu === item.label ? 'open' : ''}`}>
                  {item.children.map((child, j) => (
                    <li key={j}><Link to={child.path} onClick={closeMobile}>{child.label}</Link></li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <div className="mobile-nav-item">
            <div className="mobile-nav-link-row">
              <Link to="/contact" onClick={closeMobile}>Contact</Link>
            </div>
          </div>
        </nav>
        <div className="offcanvas-info">
          <h3>Get In Touch</h3>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <div><span>EMAIL</span><a href="mailto:arasucollegevnr@gmail.com">arasucollegevnr@gmail.com</a></div>
          </div>
          <div className="info-item">
            <i className="fas fa-phone-alt"></i>
            <div>
              <span>PHONE</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                <a href="https://wa.me/918072107164" target="_blank" rel="noopener noreferrer">80721 07164</a>
                <a
                  href="https://wa.me/918072107164"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-link"
                >
                  <i className="fab fa-whatsapp"></i> WhatsApp
                </a>
              </div>
            </div>
          </div>
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <div><span>LOCATION</span><a href="#">Virudhunagar, Tamil Nadu</a></div>
          </div>

          {/* Social links in offcanvas */}
          <div className="offcanvas-social">
            <a href="https://wa.me/918072107164" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <i className="fab fa-whatsapp"></i>
            </a>
            {socialLinks.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                <i className={s.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      <header className="it-header-height">
        {/* Header Top */}
        <div className="ed-header-top black-bg-2">
          <div className="container">
            <div className="header-top-inner">
              <div className="header-top-left">
                <ul>
                  <li className="d-none-sm">
                    <i><img src="https://ordainit.com/wp-theme/edunity/wp-content/themes/edunity/assets/img/header/1.svg" alt="" /></i>
                    <a href="https://wa.me/918072107164" target="_blank" rel="noopener noreferrer">80721 07164</a>
                  </li>
                  <li>
                    <i><img src="https://ordainit.com/wp-theme/edunity/wp-content/themes/edunity/assets/img/header/2.svg" alt="" /></i>
                    <a href="mailto:arasucollegevnr@gmail.com">arasucollegevnr@gmail.com</a>
                  </li>
                  <li className="d-none-sm">
                    <i><img src="https://ordainit.com/wp-theme/edunity/wp-content/themes/edunity/assets/img/header/3.svg" alt="" /></i>
                    <a href="#">Virudhunagar, Tamil Nadu</a>
                  </li>
                </ul>
              </div>

              <div className="header-top-social">
                <a href="https://wa.me/918072107164" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <i className="fab fa-whatsapp"></i>
                </a>
                {socialLinks.map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                    <i className={s.icon}></i>
                  </a>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* Main Header */}
        <div id="header-sticky" className={`ed-header-area ${sticky ? 'sticky' : ''}`}>
          <div className="container">
            <div className="header-wrapper">

              {/* Logo */}
              <div className="header-logo">
                <Link to="/">
                  <div className="logo-wrap">
                    <img src={require('../assets/Arasu_logo.png')} alt="Arasu Logo" className="logo-img-main" />
                    <div className="logo-text-wrap">
                      <span className="logo-name">ARASU</span>
                      <span className="logo-sub">Institute of Hotel Management</span>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Desktop Nav */}
              <nav className="main-nav desktop-nav">
                <ul>
                  {navItems.map((item, i) => (
                    <li key={i} className={`nav-item ${item.children ? 'has-children' : ''} ${location.pathname === item.path ? 'active' : ''}`}>
                      <Link to={item.path}>{item.label}</Link>
                      {item.children && (
                        <ul className="submenu">
                          {item.children.map((child, j) => (
                            <li key={j}><Link to={child.path}>{child.label}</Link></li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Buttons */}
              <div className="header-btns">
                <Link to="/contact" className="ed-btn-theme desktop-only">
                  Contact Us <i className="fas fa-arrow-right"></i>
                </Link>
                <button className="mobile-menu-btn" onClick={() => setMobileOpen(true)}>
                  <i className="fas fa-bars"></i>
                </button>
              </div>

            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;