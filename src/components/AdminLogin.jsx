import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(() => {
      if (password === 'Arasu@2026') {
        sessionStorage.setItem('adminAuth', 'true');
        navigate('/admin/dashboard');
      } else {
        setError('தவறான Password! சரியான password போடுங்க.');
        setLoading(false);
      }
    }, 800);
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <div className="admin-login-logo">
          <span className="logo-text">Arasu <span className="logo-accent">Institute</span></span>
        </div>
        <h2 className="admin-login-title">Admin Login</h2>
        <p className="admin-login-sub">Gallery manage பண்ண login பண்ணுங்க</p>

        <form onSubmit={handleLogin} className="admin-login-form">
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password உள்ளிடுங்க"
              required
              autoFocus
            />
          </div>

          {error && <p className="admin-error">{error}</p>}

          <button type="submit" className="admin-login-btn" disabled={loading}>
            {loading ? 'Checking...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;