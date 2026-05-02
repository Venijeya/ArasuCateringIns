import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div style={{ padding:'120px 0', textAlign:'center', background:'#f8f9ff', minHeight:'60vh' }}>
    <div style={{ maxWidth:500, margin:'0 auto', padding:'0 20px' }}>
      <h1 style={{ fontSize:140, fontWeight:900, color:'var(--tp-theme-1)', lineHeight:1, marginBottom:10, fontFamily:'var(--font-heading)' }}>404</h1>
      <h2 style={{ fontSize:32, fontWeight:700, color:'var(--ed-dark)', marginBottom:15 }}>Page Not Found</h2>
      <p style={{ color:'#666', fontSize:16, marginBottom:35, lineHeight:1.7 }}>
        Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link to="/" className="ed-btn-theme" style={{ display:'inline-flex', justifyContent:'center', gap:10 }}>
        Go Back Home <i className="fas fa-home"></i>
      </Link>
    </div>
  </div>
);

export default NotFound;
