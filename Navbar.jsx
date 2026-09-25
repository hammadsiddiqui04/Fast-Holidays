import { useState } from 'react';
import { Menu, X, Phone, Clock3, ArrowRight } from 'lucide-react';

const links = [
  ['Visa services', '#packages'],
  ['Countries', '#countries'],
  ['Flight search', '#flight-search'],
  ['Reviews', '#reviews'],
  ['FAQs', '#faqs'],
];

export default function Navbar({ onNotify }) {
  const [open, setOpen] = useState(false);
  const go = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <div className="utility-bar">
        <div className="fh-container utility-inner">
          <span><Clock3 size={13} /> UK & Dubai support · Mon–Sat, 9am–7pm</span>
          <span><Phone size={13} /> Call our visa team: +44 20 3813 8472</span>
        </div>
      </div>
      <header className="navbar">
        <div className="fh-container nav-inner">
          <a className="brand" href="#top" onClick={() => go('#top')} data-testid="link-home">
            <span className="brand-mark">FH</span><span>Fast Holidays</span>
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {links.map(([label, href]) => <a href={href} key={href} onClick={(e) => { e.preventDefault(); go(href); }} data-testid={`link-nav-${label.toLowerCase().replace(/\s/g, '-')}`}>{label}</a>)}
            <a className="nav-cta" href="#contact" onClick={(e) => { e.preventDefault(); go('#contact'); }} data-testid="link-contact">Talk to an expert <ArrowRight size={15} /></a>
          </nav>
          <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} data-testid="button-mobile-menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {open && <nav className="mobile-drawer" aria-label="Mobile navigation">
          {links.map(([label, href]) => <a href={href} key={href} onClick={(e) => { e.preventDefault(); go(href); }} data-testid={`mobile-link-${label.toLowerCase().replace(/\s/g, '-')}`}>{label}</a>)}
          <button className="button-primary" onClick={() => { go('#contact'); onNotify?.('Our visa team will be in touch shortly.'); }} data-testid="button-mobile-contact">Talk to an expert</button>
        </nav>}
      </header>
    </>
  );
}