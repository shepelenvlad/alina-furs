import SectionTitle from './SectionTitle';

export default function Pricing({ block }) {
  return (
    <section id={block.anchor} className="pricing section">
      <SectionTitle title={block.title} subtitle={block.subtitle} />
      <div className="container">
        <div className="row gy-3">
          {(block.plans || []).map((p, i) => (
            <div key={i} className="col-xl-3 col-lg-6" data-aos="fade-up" data-aos-delay={100 * (i + 1)}>
              <div className={`pricing-item${p.featured ? ' featured' : ''}`}>
                {p.badge && <span className="advanced">{p.badge}</span>}
                <h3>{p.name}</h3>
                <h4>
                  <sup>{p.currency}</sup>
                  {p.oldPrice && <span className="sales">{p.oldPrice}</span>}
                  {p.price}
                  <span> {p.unit}</span>
                </h4>
                <ul>
                  {(p.features || []).map((f, k) => <li key={k}>{f}</li>)}
                </ul>
                {p.buttonLabel && (
                  <div className="btn-wrap">
                    <a href={p.buttonLink || '#'} className="btn-buy">{p.buttonLabel}</a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
