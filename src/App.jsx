import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';
import './index.css';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

// Back to Top Button
const BackToTop = () => {
  const [visible, setVisible] = React.useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;
  return (
    <button
      className="scroll-top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
    >
      <i className="fas fa-angle-double-up"></i>
    </button>
  );
};

// WhatsApp Float Button
const WhatsAppFloat = () => {
  const phone = '918072107164';
  const message = 'Hello! I am interested in your courses at Arasu Institute.';
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: 'fixed',
        bottom: '90px',
        right: '24px',
        width: '52px',
        height: '52px',
        background: '#25d366',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 16px rgba(37,211,102,0.45)',
        zIndex: 9999,
        textDecoration: 'none',
        transition: 'transform 0.2s',
      }}
    >
      <i className="fab fa-whatsapp" style={{ color: '#fff', fontSize: '28px' }} />
    </a>
  );
};

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
    <BackToTop />
    <WhatsAppFloat />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/*" element={<CoursesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/*" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;