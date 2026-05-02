import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './VideoSection.css';
import bgVideo from '../assets/15.mp4';
const VideoSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="video-section">
      {/* Video Background */}
      <video
        className="video-bg"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className="video-overlay"></div>

      <div className="container">
        <div className="video-inner">
          <div className="video-content">
            <span>Join Our Mission</span>
            <h3>
              Help Us Change a Child's <br />
              Life Through Education
              <a href="tel:+918072107164">(+91)80721 07164</a>
            </h3>
            <Link to="/courses" className="ed-btn-yellow">
              <span>Join With Us <i className="fas fa-arrow-right"></i></span>
            </Link>
          </div>

          <div className="video-play-wrap">
            <div className="video-play">
              <button className="play-btn" onClick={() => setShowVideo(true)}>
                <i className="fas fa-play"></i>
              </button>
              <a
                href="#"
                className="play-text"
                onClick={e => { e.preventDefault(); setShowVideo(true); }}
              >
                Watch Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="video-modal" onClick={() => setShowVideo(false)}>
          <div className="video-modal-inner" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowVideo(false)}>
              <i className="fas fa-times"></i>
            </button>
            <video controls autoPlay style={{ width: '100%', height: '100%' }}>
              <source src={bgVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoSection;