import SectionTitle from './SectionTitle';

export default function Cards({ block }) {
  return (
    <section id={block.anchor} className="services section">
      <SectionTitle title={block.title} subtitle={block.subtitle} />
      <div className="container">
        <div className="row gy-4">
          {(block.cards || []).map((c, i) => (
            <div key={i} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100 + (i % 4) * 100}>
              <div className="service-item position-relative">
                <div className="icon"><i className={`bi bi-${c.icon || 'magic'}`}></i></div>
                {c.link ? (
                  <a href={c.link} className="stretched-link"><h3>{c.title}</h3></a>
                ) : (
                  <h3>{c.title}</h3>
                )}
                <p>{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
