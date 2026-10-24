'use client';
import { useEffect, useState } from 'react';

// Page-wide behaviors: scroll animations, image lightbox, preloader, "back to top" button.
export default function Effects() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    let lightbox;
    let cancelled = false;
    (async () => {
      const AOS = (await import('aos')).default;
      const GLightbox = (await import('glightbox')).default;
      if (cancelled) return;
      AOS.init({ duration: 600, easing: 'ease-in-out', once: true, mirror: false });
      lightbox = GLightbox({ selector: '.glightbox' });
    })();
    const pre = document.getElementById('preloader');
    if (pre) pre.style.display = 'none';
    const onScroll = () => setShowTop(window.scrollY > 100);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => {
      cancelled = true;
      window.removeEventListener('scroll', onScroll);
      if (lightbox) lightbox.destroy();
    };
  }, []);

  return (
    <a href="#" id="scroll-top" className={`scroll-top d-flex align-items-center justify-content-center${showTop ? ' active' : ''}`}
       onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
      <i className="bi bi-arrow-up-short"></i>
    </a>
  );
}
