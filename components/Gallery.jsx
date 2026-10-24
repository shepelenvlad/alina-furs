import SectionTitle from './SectionTitle';

export default function Gallery({ block }) {
  return (
    <section id={block.anchor} className="portfolio section">
      <SectionTitle title={block.title} subtitle={block.subtitle} />
      <div className="container">
        <div className="row gy-4" data-aos="fade-up" data-aos-delay="200">
          {(block.items || []).map((it, i) => (
            <div key={i} className="col-lg-4 col-md-6 portfolio-item">
              <div className="portfolio-content h-100">
                <img src={it.image} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  {it.name && <h4>{it.name}</h4>}
                  {Array.from({ length: Number(it.stars) || 0 }).map((_, k) => (
                    <i key={k} className="bi bi-star-fill"></i>
                  ))}
                  <a href={it.image} title={it.name || ''} data-gallery="reviews" className="glightbox preview-link">
                    <i className="bi bi-zoom-in"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
