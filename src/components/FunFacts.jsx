import React, { useState, useEffect, useRef } from 'react';
import './FunFacts.css';

const stats = [
  { icon: 'fas fa-chalkboard-teacher', end: 3, suffix: 'k+', label: 'Successfully Trained' },
  { icon: 'fas fa-tasks', end: 15, suffix: 'K+', label: 'Classes Completed' },
  { icon: 'fas fa-star', end: 97, suffix: 'k+', label: 'Satisfaction Rate' },
  { icon: 'fas fa-users', end: 120, suffix: 'k+', label: 'Students Community' },
];

const useCounter = (end, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, end, duration]);

  return count;
};

const StatItem = ({ stat, start }) => {
  const count = useCounter(stat.end, 2000, start);
  return (
    <div className="funfact-item">
      <div className="funfact-icon"><i className={stat.icon}></i></div>
      <div className="funfact-content">
        <h6>{count}{stat.suffix}</h6>
        <span>{stat.label}</span>
      </div>
    </div>
  );
};

const FunFacts = () => {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="funfact-area" ref={ref}>
      <div className="container">
        <div className="funfact-wrap">
          {stats.map((s, i) => <StatItem key={i} stat={s} start={started} />)}
        </div>
      </div>
    </div>
  );
};

export default FunFacts;
