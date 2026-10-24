'use client';
import { useEffect, useState } from 'react';
import Lines from './Lines';
import Waves from './Waves';

export default function Hero({ block }) {
  const slides = block.slides || [];
  const [current, setCurrent] = useState(0);
  const n = slides.length;

  useEffect(() => {
    if (n < 2) return;
    const timer = setInterval(() => setCurrent((c) => (c + 1) % n), 5000);
    return () => clearInterval(timer);
  }, [n]);

  return (
    <section id={block.anchor || 'hero'} className="hero section dark-background">
      <div id="hero-carousel" className="container carousel carousel-fade">
        {slides.map((s, i) => (
          <div key={i} className={`carousel-item${i === current ? ' active' : ''}`}>
            <div className="carousel-container">
              <h2 className="animate__animated animate__fadeInDown">{s.title}</h2>
              <p className="animate__animated animate__fadeInUp"><Lines text={s.text} /></p>
              {s.buttonLabel && s.isVideo && (
                <a href={s.buttonLink} className="glightbox btn-watch-video d-flex align-items-center">
                  <i className="bi bi-play-circle"></i><span>{s.buttonLabel}</span>
                </a>
              )}
              {s.buttonLabel && !s.isVideo && (
                <a href={s.buttonLink} className="btn-get-started animate__animated animate__fadeInUp scrollto">
                  {s.buttonLabel}
                </a>
              )}
            </div>
          </div>
        ))}
        {n > 1 && (
          <>
            <a className="carousel-control-prev" href="#hero-carousel" role="button"
               onClick={(e) => { e.preventDefault(); setCurrent((current - 1 + n) % n); }}>
              <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
            </a>
            <a className="carousel-control-next" href="#hero-carousel" role="button"
               onClick={(e) => { e.preventDefault(); setCurrent((current + 1) % n); }}>
              <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
            </a>
          </>
        )}
      </div>
      <Waves />
    </section>
  );
}
