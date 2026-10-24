'use client';
import { useState } from 'react';
import Lines from './Lines';
import SectionTitle from './SectionTitle';

export default function Tabs({ block }) {
  const tabs = block.tabs || [];
  const [active, setActive] = useState(0);

  return (
    <section id={block.anchor} className="features section">
      <SectionTitle title={block.title} subtitle={block.subtitle} />
      <div className="container">
        <ul className="nav nav-tabs row d-flex" data-aos="fade-up" data-aos-delay="100">
          {tabs.map((t, i) => (
            <li key={i} className="nav-item col-3">
              <a href="#" className={`nav-link${i === active ? ' active show' : ''}`}
                 onClick={(e) => { e.preventDefault(); setActive(i); }}>
                <i className={`bi bi-${i + 1}-square-fill`}></i>
                <h4 className="d-none d-lg-block">{t.label}</h4>
              </a>
            </li>
          ))}
        </ul>
        <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
          {tabs.map((t, i) => (
            <div key={i} className={`tab-pane fade${i === active ? ' active show' : ''}`}>
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                  <h3><Lines text={t.heading} /></h3>
                  <ul>
                    {(t.list1 || []).map((li, k) => (
                      <li key={k}><i className="bi bi-check2-all"></i> <span>{li}</span></li>
                    ))}
                  </ul>
                  {t.listTitle && <h3>{t.listTitle}</h3>}
                  <ul>
                    {(t.list2 || []).map((li, k) => (
                      <li key={k}><i className="bi bi-check2-all"></i> <span>{li}</span></li>
                    ))}
                  </ul>
                  {t.buttonLabel && (
                    <a href={t.buttonLink || '#pricing'} className="pricing-button">
                      <span>{t.buttonLabel}</span><i className="bi bi-arrow-right"></i>
                    </a>
                  )}
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  {t.image && <img src={t.image} alt="" className="img-fluid" />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
