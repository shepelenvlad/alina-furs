import Markdown from 'react-markdown';
import Lines from './Lines';
import Slider from './Slider';
import SectionTitle from './SectionTitle';

export default function AboutMe({ block }) {
  return (
    <section id={block.anchor} className="portfolio section">
      <SectionTitle title={block.title} subtitle={block.subtitle} style={{ paddingBottom: '10px' }} />
      <section id="portfolio-details" className="portfolio-details section">
        <div className="container" data-aos="fade-up">
          {block.slides && block.slides.length > 0 && <Slider slides={block.slides} />}
          <div className="row justify-content-between gy-4 mt-4">
            <div className="col-lg-8" data-aos="fade-up">
              <div className="portfolio-description">
                <h2>{block.name}</h2>
                <div className="testimonial-item">
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span><Lines text={block.quote} /></span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                  <div>
                    {block.photo && <img src={block.photo} className="testimonial-img" alt="" />}
                    <h3>{block.name}</h3>
                    <h4>{block.role}</h4>
                  </div>
                </div>
                <Markdown>{block.text}</Markdown>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
