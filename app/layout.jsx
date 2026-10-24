import './main.css';
import site from '../content/site.json';
import theme from '../content/theme.json';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Effects from '../components/Effects';
import ChatButton from '../components/ChatButton';

export const metadata = {
  title: site.title,
  icons: { icon: '/img/favicon.ico', apple: '/img/apple-touch-icon.png' },
};

const HEX = /^#[0-9a-fA-F]{3,8}$/;
const PATH = /^\/[\w\/.\-]+$/;

// Turns the colors chosen in the admin panel into CSS variables (values are validated first).
function themeCss(t) {
  const map = {
    accentColor: ['--accent-color'],
    textColor: ['--default-color'],
    headingColor: ['--heading-color'],
    backgroundColor: ['--background-color'],
    navColor: ['--nav-color'],
    navHoverColor: ['--nav-hover-color', '--nav-dropdown-hover-color'],
  };
  let root = '';
  for (const [key, vars] of Object.entries(map)) {
    if (HEX.test(t[key] || '')) vars.forEach((v) => (root += `${v}:${t[key]};`));
  }
  if (PATH.test(t.heroBackground || '')) root += `--hero-bg-image:url("${t.heroBackground}");`;
  let css = `html:root{${root}}`;
  if (HEX.test(t.darkSectionColor || '')) css += `html .dark-background{--background-color:${t.darkSectionColor};}`;
  return css;
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400;1,700&family=Poppins:wght@300;400;500;600;700&family=Raleway:wght@300;400;500;600;700;800&display=swap"
        />
        <link rel="stylesheet" href="/vendor/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/vendor/bootstrap-icons/bootstrap-icons.css" />
        <link rel="stylesheet" href="/vendor/aos/aos.css" />
        <link rel="stylesheet" href="/vendor/animate.css/animate.min.css" />
        <link rel="stylesheet" href="/vendor/glightbox/css/glightbox.min.css" />
        <link rel="stylesheet" href="/vendor/swiper/swiper-bundle.min.css" />
        <style dangerouslySetInnerHTML={{ __html: themeCss(theme) }} />
      </head>
      <body className="index-page">
        <Header site={site} />
        {children}
        <Footer footer={site.footer} />
        <ChatButton chat={site.chatButton} accent={theme.accentColor} />
        <Effects />
        <div id="preloader"></div>
      </body>
    </html>
  );
}
