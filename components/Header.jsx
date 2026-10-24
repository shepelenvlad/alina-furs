'use client';
import { useEffect, useState } from 'react';

export default function Header({ site }) {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [active, setActive] = useState('#hero');

  useEffect(() => {
    document.body.classList.toggle('mobile-nav-active', open);
  }, [open]);

  useEffect(() => {
    const links = site.nav.flatMap((n) => [n, ...(n.children || [])]).map((n) => n.href);
    const onScroll = () => {
      document.body.classList.toggle('scrolled', window.scrollY > 100);
      let current = null;
      links.forEach((href) => {
        if (!href || href === '#' || !href.startsWith('#')) return;
        const el = document.querySelector(href);
        if (!el) return;
        const pos = window.scrollY + 200;
        if (pos >= el.offsetTop && pos <= el.offsetTop + el.offsetHeight) current = href;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [site]);

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <a href="#hero" className="logo d-flex align-items-center">
          {site.logo && <img src={site.logo} alt={site.title} />}
        </a>
        <nav id="navmenu" className="navmenu">
          <ul>
            {site.nav.map((item, i) =>
              item.children && item.children.length > 0 ? (
                <li key={i} className="dropdown">
                  <a href="#" className={openDropdown === i ? 'active' : ''} onClick={(e) => e.preventDefault()}>
                    <span>{item.label}</span>{' '}
                    <i
                      className="bi bi-chevron-down toggle-dropdown"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setOpenDropdown(openDropdown === i ? null : i);
                      }}
                    ></i>
                  </a>
                  <ul className={openDropdown === i ? 'dropdown-active' : ''}>
                    {item.children.map((child, j) => (
                      <li key={j}>
                        <a href={child.href} onClick={() => setOpen(false)}>{child.label}</a>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={i}>
                  <a href={item.href} className={active === item.href ? 'active' : ''} onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                </li>
              )
            )}
          </ul>
          <i className={`mobile-nav-toggle d-xl-none bi ${open ? 'bi-x' : 'bi-list'}`} onClick={() => setOpen(!open)}></i>
        </nav>
      </div>
    </header>
  );
}
