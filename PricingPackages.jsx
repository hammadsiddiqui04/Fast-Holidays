import { Check, ArrowRight } from 'lucide-react';

const packages = [
  { name: 'Basic', price: '£79', desc: 'A clear start for confident applicants.', features: ['Document checklist', 'Application form review', 'Email support'] },
  { name: 'Standard', price: '£99', desc: 'Our most popular, end-to-end preparation.', features: ['Everything in Basic', 'Full application preparation', 'Appointment guidance', 'Priority email support'], featured: true },
  { name: 'Advance', price: '£109', desc: 'For busy travellers who want more certainty.', features: ['Everything in Standard', 'Document quality check', 'Travel insurance guidance', 'WhatsApp support'] },
  { name: 'Premium', price: '£119', desc: 'Dedicated support from first question to passport.', features: ['Everything in Advance', 'One-to-one specialist', 'Priority appointment support', 'Dedicated case updates'] },
];

export default function PricingPackages({ onNotify }) {
  return <section className="fh-section soft-section" id="packages">
    <div className="fh-container">
      <div className="fh-section-head"><div><div className="fh-eyebrow">Straightforward support</div><h2>Choose your pace.</h2></div><p>No confusing tiers, no hidden extras. Pick the level of reassurance that feels right for your trip.</p></div>
      <div className="pricing-wrap">{packages.map((item) => <article className={`pricing-card ${item.featured ? 'featured' : ''}`} key={item.name} data-testid={`card-package-${item.name.toLowerCase()}`}>{item.featured && <span className="popular-tag">Most chosen</span>}<h3>{item.name}</h3><div className="price">{item.price} <small>one-off</small></div><p>{item.desc}</p><div className="features">{item.features.map((feature, index) => <div className="feature" key={feature}><Check size={16} /> <span>{feature}</span></div>)}</div><button className="package-btn" onClick={() => onNotify?.(`${item.name} selected — tell us a little about your journey and we’ll take it from here.`)} data-testid={`button-package-${item.name.toLowerCase()}`}>Choose {item.name} <ArrowRight size={15} style={{ verticalAlign: 'middle', marginLeft: 4 }} /></button></article>)}</div>
    </div>
  </section>;
}