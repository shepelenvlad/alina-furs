'use client';
import { useState } from 'react';
import SectionTitle from './SectionTitle';

export default function Faq({ block }) {
  const [open, setOpen] = useState(0);
  return (
    <section id={block.anchor} className="faq section">
      <SectionTitle title={block.title} subtitle={block.subtitle} />
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-12">
            <div className="custom-accordion" id="accordion-faq">
              {(block.items || []).map((it, i) => (
                <div key={i} className="accordion-item">
                  <h2 className="mb-0">
                    <button className={`btn btn-link${open === i ? '' : ' collapsed'}`} type="button"
                            onClick={() => setOpen(open === i ? null : i)}>
                      {it.question}
                    </button>
                  </h2>
                  <div className={`collapse${open === i ? ' show' : ''}`}>
                    <div className="accordion-body" style={{ whiteSpace: 'pre-line' }}>{it.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
