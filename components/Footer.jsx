export default function Footer({ footer }) {
  const socials = (footer.socials || []).filter((s) => s.url);
  return (
    <footer id="footer" className="footer dark-background">
      <div className="container">
        <h3 className="sitename">{footer.siteName}</h3>
        <p>{footer.description}</p>
        {socials.length > 0 && (
          <div className="social-links d-flex justify-content-center">
            {socials.map((s, i) => (
              <a key={i} href={s.url} target="_blank" rel="noopener noreferrer">
                <i className={`bi bi-${s.icon}`}></i>
              </a>
            ))}
          </div>
        )}
        <div className="container">
          <div className="copyright">
            <span>Copyright</span> <strong className="px-1 sitename">{footer.copyrightName}</strong><br />
            <span>All Rights Reserved</span>
          </div>
          <div className="credits">{footer.credits}</div>
        </div>
      </div>
    </footer>
  );
}
