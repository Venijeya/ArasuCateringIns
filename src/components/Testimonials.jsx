import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const testimonials = [
  { name: 'Kathy Sullivan', role: 'Marketing Manager', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo tempore autem nulla unde est repudiandae illum ducimus. Fuga inventore aut excepturi nobis optio enim, quae?' },
  { name: 'Hillr Piltion', role: 'UI/UX Designer', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo tempore autem nulla unde est repudiandae illum ducimus. Fuga inventore aut excepturi nobis optio enim, quae?' },
  { name: 'Jack Ma', role: 'Entrepreneur', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo tempore autem nulla unde est repudiandae illum ducimus. Fuga inventore aut excepturi nobis optio enim, quae?' },
  { name: 'Suresh Rana', role: 'Developer', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo tempore autem nulla unde est repudiandae illum ducimus. Fuga inventore aut excepturi nobis optio enim, quae?' },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % testimonials.length), 4000);
    return () => clearInterval(timer);
  }, []);

  const getVisible = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(testimonials[(current + i) % testimonials.length]);
    }
    return items;
  };

  return (
    <div className="testimonial-area" style={{
      backgroundImage: `url(https://ordainit.com/wp-theme/edunity/wp-content/themes/edunity/assets/img/testimonial/testimonial-bg.jpg)`
    }}>
      <div className="container">
        <div className="testi-title-box">
          <span className="ed-section-subtitle">Testimonial</span>
          <h4 className="ed-section-title">Creating A Community Of Life Long Learners.</h4>
        </div>
        <div className="testi-grid">
          {getVisible().map((t, i) => (
            <div key={i} className="testi-item">
              <div className="testi-quote">
                <i className="fas fa-quote-left"></i>
              </div>
              <p>{t.text}</p>
              <div className="testi-author">
                <h5>{t.name}</h5>
                <span>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="testi-dots">
          {testimonials.map((_, i) => (
            <button key={i} className={`dot ${i === current ? 'active' : ''}`} onClick={() => setCurrent(i)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
