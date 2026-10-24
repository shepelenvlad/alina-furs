import Hero from './Hero';
import About from './About';
import Tabs from './Tabs';
import Cards from './Cards';
import Consultation from './Consultation';
import AboutMe from './AboutMe';
import Gallery from './Gallery';
import Pricing from './Pricing';
import Faq from './Faq';
import Contact from './Contact';
import Waves from './Waves';

const BLOCKS = {
  hero: Hero,
  about: About,
  tabs: Tabs,
  cards: Cards,
  consultation: Consultation,
  aboutMe: AboutMe,
  gallery: Gallery,
  pricing: Pricing,
  faq: Faq,
  contact: Contact,
  waves: Waves,
};

// Picks the right component for each block listed in content/home.json.
export default function Block({ block }) {
  const Component = BLOCKS[block.type];
  if (!Component) return null;
  return <Component block={block} />;
}
