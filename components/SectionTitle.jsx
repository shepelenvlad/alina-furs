export default function SectionTitle({ title, subtitle, style }) {
  if (!title && !subtitle) return null;
  return (
    <div className="container section-title" data-aos="fade-up" style={style}>
      {title && <h2>{title}</h2>}
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
