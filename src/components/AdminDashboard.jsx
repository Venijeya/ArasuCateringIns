import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const CLOUD_NAME = 'dpooirudc';
const UPLOAD_PRESET = 'arasu-gallery';
const TAG = 'arasu-gallery';

const AdminDashboard = () => {
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [toast, setToast] = useState('');
  const fileInputRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem('adminAuth') !== 'true') {
      navigate('/admin');
    } else {
      fetchImages();
    }
  }, []);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3000);
  };

  const fetchImages = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://res.cloudinary.com/${CLOUD_NAME}/image/list/${TAG}.json`
      );
      if (res.ok) {
        const data = await res.json();
        const imgs = (data.resources || []).map((r) => ({
          public_id: r.public_id,
          url: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${r.public_id}.jpg`,
          thumb: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_300,h_300,c_fill/${r.public_id}.jpg`,
        }));
        setImages(imgs);
      }
    } catch {
      setImages([]);
    }
    setLoading(false);
  };

  const handleUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    setUploading(true);
    let uploaded = 0;

    for (const file of files) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', UPLOAD_PRESET);
      formData.append('tags', TAG);

      try {
        const res = await fetch(
          `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
          { method: 'POST', body: formData }
        );
        const data = await res.json();
        if (data.secure_url) uploaded++;
      } catch {
        // continue
      }
    }

    showToast(`${uploaded} photo(s) upload ஆச்சு! ✅`);
    setUploading(false);
    fileInputRef.current.value = '';
    setTimeout(fetchImages, 1500);
  };

  const handleDelete = async (public_id) => {
    try {
      await fetch('/api/delete-image', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ public_id }),
      });
    } catch {}
    setImages((prev) => prev.filter((img) => img.public_id !== public_id));
    setDeleteConfirm(null);
    showToast('Photo deleted! ✅');
    setTimeout(fetchImages, 1500);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('adminAuth');
    navigate('/admin');
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <div className="admin-header-left">
          <span className="admin-logo">Arasu <span>Institute</span></span>
          <span className="admin-badge">Admin Panel</span>
        </div>
        <button className="admin-logout-btn" onClick={handleLogout}>
          🚪 Logout
        </button>
      </div>

      <div className="admin-container">
        <div className="upload-section">
          <h2 className="section-title">📸 Gallery Photos</h2>
          <p className="section-sub">Photos upload பண்ணுங்க — website-ல உடனே தெரியும்!</p>

          <div
            className="upload-box"
            onClick={() => !uploading && fileInputRef.current.click()}
          >
            {uploading ? (
              <div className="upload-loading">
                <div className="spinner"></div>
                <p>Upload ஆகுது... காத்திருங்க</p>
              </div>
            ) : (
              <>
                <div className="upload-icon">📤</div>
                <p className="upload-text">Click பண்ணி photos select பண்ணுங்க</p>
                <p className="upload-sub">Multiple photos ஒரே நேரத்தில் select பண்ணலாம்</p>
              </>
            )}
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleUpload}
            style={{ display: 'none' }}
          />
        </div>

        <div className="gallery-section">
          <div className="gallery-header">
            <h3>Current Gallery ({images.length} photos)</h3>
            <button className="refresh-btn" onClick={fetchImages}>🔄 Refresh</button>
          </div>

          {loading ? (
            <div className="gallery-loading">
              <div className="spinner"></div>
              <p>Photos load ஆகுது...</p>
            </div>
          ) : images.length === 0 ? (
            <div className="gallery-empty">
              <p>📭 இன்னும் photos upload ஆகல!</p>
              <p>மேலே உள்ள box-ல click பண்ணி photos add பண்ணுங்க.</p>
            </div>
          ) : (
            <div className="admin-gallery-grid">
              {images.map((img) => (
                <div key={img.public_id} className="admin-gallery-item">
                  <img src={img.thumb} alt="Gallery" />
                  <button
                    className="delete-btn"
                    onClick={() => setDeleteConfirm(img.public_id)}
                    title="Delete"
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {deleteConfirm && (
        <div className="modal-overlay" onClick={() => setDeleteConfirm(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h3>Photo Delete பண்றீங்களா?</h3>
            <p>இந்த photo gallery-லிருந்து remove ஆகும்.</p>
            <div className="modal-btns">
              <button className="modal-cancel" onClick={() => setDeleteConfirm(null)}>Cancel</button>
              <button className="modal-confirm" onClick={() => handleDelete(deleteConfirm)}>Delete ✅</button>
            </div>
          </div>
        </div>
      )}

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
};

export default AdminDashboard;