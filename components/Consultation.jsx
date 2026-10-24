export default function Consultation({ block }) {
  return (
    <section id={block.anchor} className="about section section-bg dark-background">
      <div className="container position-relative">
        <div className="row gy-5">
          <div className="content col-xl-5 d-flex flex-column" data-aos="fade-up" data-aos-delay="100">
            <h3>{block.heading}</h3>
            <p>{block.text}</p>
            {block.buttonLabel && (
              <a href={block.buttonLink || '#'} className="btn-get-started animate__animated animate__fadeInUp scrollto">
                {block.buttonLabel}
              </a>
            )}
          </div>
          <div className="col-xl-7" data-aos="fade-up" data-aos-delay="200">
            <div className="row gy-4">
              {(block.items || []).map((it, i) => (
                <div key={i} className="col-md-6 icon-box position-relative">
                  <i className={`bi bi-${it.icon || 'magic'}`}></i>
                  <h4>{it.link ? <a href={it.link} className="stretched-link">{it.title}</a> : it.title}</h4>
                  <p>{it.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
