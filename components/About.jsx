import Markdown from 'react-markdown';
import SectionTitle from './SectionTitle';

export default function About({ block }) {
  return (
    <section id={block.anchor} className="about section">
      <SectionTitle title={block.title} subtitle={block.subtitle} />
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <Markdown>{block.left}</Markdown>
            {block.buttonLabel && (
              <a href={block.buttonLink || '#'} className="read-more">
                <span>{block.buttonLabel}</span><i className="bi bi-arrow-right"></i>
              </a>
            )}
          </div>
          <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
            <Markdown>{block.rightIntro}</Markdown>
            <ul>
              {(block.bullets || []).map((b, i) => (
                <li key={i}><i className="bi bi-check2"></i> <span>{b}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
