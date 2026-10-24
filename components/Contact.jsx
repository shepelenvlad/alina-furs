'use client';
import { useState } from 'react';
import SectionTitle from './SectionTitle';

export default function Contact({ block }) {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('sending');
    try {
      const res = await fetch(block.formspreeUrl, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error('failed');
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id={block.anchor} className="contact section">
      <SectionTitle title={block.title} subtitle={block.subtitle} />
      <div className="container" data-aos="fade" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-4">
            {(block.contacts || []).map((c, i) => (
              <div key={i} className="info-item d-flex" data-aos="fade-up" data-aos-delay={300 + i * 100}>
                <i className={`bi bi-${c.icon || 'telephone'} flex-shrink-0`}></i>
                <div>
                  <h3>{c.label}</h3>
                  <p>{c.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-8">
            <form onSubmit={onSubmit} className="php-email-form" data-aos="fade-up" data-aos-delay="200">
              <div className="row gy-4">
                <div className="col-md-6">
                  <input type="text" name="name" className="form-control" placeholder={block.namePlaceholder} required />
                </div>
                <div className="col-md-6">
                  <input type="email" name="email" className="form-control" placeholder={block.emailPlaceholder} required />
                </div>
                <div className="col-md-12">
                  <input type="text" name="subject" className="form-control" placeholder={block.subjectPlaceholder} required />
                </div>
                <div className="col-md-12">
                  <textarea name="message" className="form-control" rows={6} placeholder={block.messagePlaceholder} required></textarea>
                </div>
                <div className="col-md-12 text-center">
                  <div className="loading" style={{ display: status === 'sending' ? 'block' : 'none' }}>...</div>
                  <div className="error-message" style={{ display: status === 'error' ? 'block' : 'none' }}>{block.errorMessage}</div>
                  <div className="sent-message" style={{ display: status === 'sent' ? 'block' : 'none' }}>{block.successMessage}</div>
                  <button type="submit" disabled={status === 'sending'}>{block.buttonLabel}</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
