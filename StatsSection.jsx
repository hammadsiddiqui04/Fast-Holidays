import { ShieldCheck, Users, MapPinned, Clock3 } from 'lucide-react';

const stats = [
  ['1,200+', 'travellers supported', Users],
  ['4.9 / 5', 'Google review rating', ShieldCheck],
  ['29', 'Schengen countries', MapPinned],
  ['24 hrs', 'typical response time', Clock3],
];
export default function StatsSection() {
  return <section className="fh-section dark-band"><div className="fh-container"><div className="fh-section-head"><div><div className="fh-eyebrow">Proof in the details</div><h2>Travel support with a human pulse.</h2></div><p>We’ve helped people turn “maybe next year” into boarding passes, city breaks, family reunions and once-in-a-lifetime trips.</p></div><div className="stats-grid">{stats.map(([value, label, Icon]) => <div className="stat-card" key={label} data-testid={`stat-${label.replace(/\s/g, '-')}`}><Icon size={20} color="#71d6c0" /><strong>{value}</strong><span>{label}</span></div>)}</div></div></section>;
}